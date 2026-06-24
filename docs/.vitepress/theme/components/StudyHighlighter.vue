<template>
  <div v-if="enabled" class="study-highlighter">
    <!-- Color picker popover shown after a text selection -->
    <div
      v-if="popover.visible"
      class="sh-popover"
      :style="{ top: popover.top + 'px', left: popover.left + 'px' }"
      @mousedown.prevent
    >
      <button
        v-for="c in colors"
        :key="c.id"
        class="sh-swatch"
        :class="`sh-swatch--${c.id}`"
        :title="`Highlight (${c.label})`"
        @click="createHighlight(c.id)"
      ></button>
    </div>

    <!-- Floating toggle button (always visible when enabled) -->
    <button
      class="sh-fab"
      :class="{ 'sh-fab--open': boardOpen }"
      :title="boardOpen ? 'Hide highlights' : 'Show highlights'"
      :aria-label="boardOpen ? 'Hide highlights' : 'Show highlights'"
      @click="boardOpen = !boardOpen"
    >
      <!-- highlighter / pen icon, swaps to a chevron when open -->
      <svg v-if="!boardOpen" class="sh-fab__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 20h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <path d="m15.5 4.5 4 4L10 18l-4 1 1-4 8.5-10.5Z" stroke="currentColor" stroke-width="2"
          stroke-linejoin="round" />
      </svg>
      <svg v-else class="sh-fab__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
      <span v-if="!boardOpen && highlights.length" class="sh-fab__count">{{ highlights.length }}</span>
    </button>

    <!-- The numbered board panel -->
    <aside class="sh-board" :class="{ 'sh-board--open': boardOpen }" aria-label="Highlights board">
      <header class="sh-board__head">
        <div class="sh-board__heading">
          <h3 class="sh-board__title">Highlights</h3>
          <span v-if="highlights.length" class="sh-board__chip">{{ highlights.length }}</span>
        </div>
        <button
          v-if="highlights.length"
          class="sh-board__clear"
          title="Remove all highlights on this page"
          @click="clearAll"
        >Clear all</button>
      </header>

      <p v-if="!highlights.length" class="sh-board__empty">
        Select any text on this page, then pick a color to add a numbered highlight here.
      </p>

      <ol v-else class="sh-board__list">
        <li
          v-for="(h, i) in highlights"
          :key="h.id"
          class="sh-board__item"
          :class="`sh-board__item--${h.color}`"
          @click="jumpTo(h)"
        >
          <span class="sh-board__num" :title="'Jump to highlight ' + (i + 1)">{{ i + 1 }}</span>
          <span class="sh-board__text">{{ h.label || h.quote }}</span>
          <button class="sh-board__del" title="Remove this highlight" aria-label="Remove highlight"
            @click.stop="removeHighlight(h.id)">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </li>
      </ol>
    </aside>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

// Desktop-only: text selection + the popover/board are unreliable and intrusive on
// touch screens, so the whole feature is disabled on phones/tablets and narrow windows.
const isDesktop = ref(true)
function checkDesktop() {
  if (typeof window === 'undefined') return
  const wideEnough = window.matchMedia('(min-width: 768px)').matches
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
  isDesktop.value = wideEnough && finePointer
}

// Opt-in per page via frontmatter `highlighter: true`, and only on desktop.
const enabled = computed(() => frontmatter.value.highlighter === true && isDesktop.value)

const colors = [
  { id: 'yellow', label: 'Yellow' },
  { id: 'green', label: 'Green' },
  { id: 'pink', label: 'Pink' }
]

const boardOpen = ref(false)
const highlights = ref([])
const popover = ref({ visible: false, top: 0, left: 0 })

// The most recent selection captured on mouseup, held until a color is chosen.
let pendingSelection = null

const storageKey = computed(() => `cp115-highlights:${route.path}`)

// ---------- persistence ----------
function load() {
  if (typeof localStorage === 'undefined') return
  try {
    const raw = localStorage.getItem(storageKey.value)
    highlights.value = raw ? JSON.parse(raw) : []
    sortByPosition()
  } catch {
    highlights.value = []
  }
}

function save() {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.setItem(storageKey.value, JSON.stringify(highlights.value))
  } catch {
    /* storage full or blocked — ignore, in-memory state still works */
  }
}

// ---------- the content root we operate within ----------
function contentRoot() {
  return document.querySelector('.vp-doc') || document.querySelector('main')
}

// ---------- capturing a selection ----------
function onMouseUp(e) {
  if (!enabled.value) return
  // Ignore selections that start inside our own UI
  if (e.target.closest && e.target.closest('.study-highlighter')) return

  const sel = window.getSelection()
  if (!sel || sel.isCollapsed) {
    hidePopover()
    return
  }
  if (sel.toString().trim().length < 2) {
    hidePopover()
    return
  }
  const range = sel.getRangeAt(0)
  const root = contentRoot()
  if (!root || !root.contains(range.commonAncestorContainer)) {
    hidePopover()
    return
  }

  // Anchor everything to root.textContent so the stored quote is guaranteed to be
  // a substring of it. (sel.toString() inserts newlines between block elements that
  // textContent does not, which previously broke re-location across line breaks.)
  const fullText = root.textContent
  const start = charOffsetOf(root, range.startContainer, range.startOffset)
  const end = charOffsetOf(root, range.endContainer, range.endOffset)
  if (end <= start) {
    hidePopover()
    return
  }
  const quote = fullText.slice(start, end)
  pendingSelection = {
    quote,
    start,
    end,
    prefix: fullText.slice(Math.max(0, start - 24), start),
    suffix: fullText.slice(end, end + 24)
  }

  const rect = range.getBoundingClientRect()
  popover.value = {
    visible: true,
    top: rect.top + window.scrollY - 44,
    left: rect.left + window.scrollX + rect.width / 2 - 48
  }
}

function hidePopover() {
  popover.value.visible = false
  pendingSelection = null
}

// Character offset of a (node, offset) pair relative to root's textContent.
function charOffsetOf(root, node, offset) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null)
  let count = 0
  let current
  while ((current = walker.nextNode())) {
    if (current === node) return count + offset
    count += current.textContent.length
  }
  return count
}

// ---------- creating / restoring highlights ----------
// Highlights are kept sorted by their position in the page (`start` offset),
// so their displayed number always reflects top-to-bottom document order.
// Inserting a highlight between two others renumbers everything below it.
function sortByPosition() {
  highlights.value.sort((a, b) => a.start - b.start)
}

function createHighlight(color) {
  if (!pendingSelection) return
  const h = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    color,
    quote: pendingSelection.quote,
    // Board display text: collapse runs of whitespace so block boundaries read
    // as single spaces rather than being glued together.
    label: pendingSelection.quote.replace(/\s+/g, ' ').trim(),
    start: pendingSelection.start,
    prefix: pendingSelection.prefix,
    suffix: pendingSelection.suffix
  }
  highlights.value.push(h)
  sortByPosition()
  save()
  hidePopover()
  window.getSelection()?.removeAllRanges()
  nextTick(() => applyHighlight(h))
}

function removeHighlight(id) {
  highlights.value = highlights.value.filter((h) => h.id !== id)
  save()
  unwrap(id)
}

function clearAll() {
  highlights.value.forEach((h) => unwrap(h.id))
  highlights.value = []
  save()
}

// Find the text in the live DOM and wrap it in <mark>s.
function applyHighlight(h) {
  const root = contentRoot()
  if (!root) return
  if (root.querySelector(`mark[data-sh-id="${h.id}"]`)) return // already applied

  const range = locate(root, h)
  if (!range) return

  // Wrap each text node the range covers in its own <mark>. This works even when
  // the selection spans several block elements (e.g. a paragraph plus list items),
  // which range.surroundContents() cannot handle.
  const textNodes = textNodesInRange(root, range)
  for (const { node, start, end } of textNodes) {
    wrapTextNodePart(node, start, end, h)
  }
}

// Collect every text node touched by the range, with the start/end offset to
// highlight within each one.
function textNodesInRange(root, range) {
  const result = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null)
  let node
  while ((node = walker.nextNode())) {
    if (!range.intersectsNode(node)) continue
    const len = node.textContent.length
    let start = 0
    let end = len
    if (node === range.startContainer) start = range.startOffset
    if (node === range.endContainer) end = range.endOffset
    if (start >= end) continue
    result.push({ node, start, end })
  }
  return result
}

// Wrap the [start, end) slice of a single text node in a <mark>.
function wrapTextNodePart(node, start, end, h) {
  let target = node
  if (start > 0) target = target.splitText(start)
  // After the first split, the highlighted slice is at offset 0 of `target`.
  if (end - start < target.textContent.length) target.splitText(end - start)

  const mark = document.createElement('mark')
  mark.className = `sh-mark sh-mark--${h.color}`
  mark.dataset.shId = h.id
  target.parentNode.insertBefore(mark, target)
  mark.appendChild(target)
}

// Re-locate a stored highlight's text range using the saved offset + context.
function locate(root, h) {
  const fullText = root.textContent
  let idx = -1

  // Try exact spot first (prefix + quote), then fall back to plain quote search.
  const withCtx = h.prefix + h.quote
  const ctxAt = fullText.indexOf(withCtx, Math.max(0, h.start - 48))
  if (ctxAt !== -1) {
    idx = ctxAt + h.prefix.length
  } else {
    idx = fullText.indexOf(h.quote, Math.max(0, h.start - 48))
    if (idx === -1) idx = fullText.indexOf(h.quote)
  }
  if (idx === -1) return null

  return rangeFromOffsets(root, idx, idx + h.quote.length)
}

function rangeFromOffsets(root, startOff, endOff) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null)
  let count = 0
  let startNode = null, startNodeOffset = 0
  let endNode = null, endNodeOffset = 0
  let node

  while ((node = walker.nextNode())) {
    const len = node.textContent.length
    if (!startNode && count + len > startOff) {
      startNode = node
      startNodeOffset = startOff - count
    }
    if (startNode && count + len >= endOff) {
      endNode = node
      endNodeOffset = endOff - count
      break
    }
    count += len
  }
  if (!startNode || !endNode) return null

  const range = document.createRange()
  range.setStart(startNode, startNodeOffset)
  range.setEnd(endNode, endNodeOffset)
  return range
}

function unwrap(id) {
  const root = contentRoot()
  if (!root) return
  // A highlight may have produced several <mark>s (spanning multiple elements).
  const marks = root.querySelectorAll(`mark[data-sh-id="${id}"]`)
  const parents = new Set()
  marks.forEach((mark) => {
    const parent = mark.parentNode
    while (mark.firstChild) parent.insertBefore(mark.firstChild, mark)
    parent.removeChild(mark)
    parents.add(parent)
  })
  parents.forEach((p) => p.normalize())
}

function applyAll() {
  highlights.value.forEach(applyHighlight)
}

function jumpTo(h) {
  const root = contentRoot()
  const mark = root?.querySelector(`mark[data-sh-id="${h.id}"]`)
  if (!mark) return
  mark.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

// ---------- lifecycle ----------
function init() {
  if (!enabled.value) return
  load()
  // Wait for the markdown content to render before wrapping.
  nextTick(() => setTimeout(applyAll, 0))
}

onMounted(() => {
  checkDesktop()
  window.addEventListener('resize', checkDesktop)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('scroll', hidePopover, true)
  init()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkDesktop)
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('scroll', hidePopover, true)
})

// Re-initialise on client-side navigation between pages.
watch(() => route.path, () => {
  highlights.value = []
  boardOpen.value = false
  hidePopover()
  init()
})

// React to crossing the desktop/mobile threshold (e.g. resizing or rotating):
// apply highlights when entering desktop, and tidy up when leaving it.
watch(enabled, (on) => {
  if (on) {
    init()
  } else {
    highlights.value.forEach((h) => unwrap(h.id))
    highlights.value = []
    boardOpen.value = false
    hidePopover()
  }
})
</script>

<style scoped>
.study-highlighter {
  font-family: var(--vp-font-family-base);
}

/* ---- color picker popover ---- */
.sh-popover {
  position: absolute;
  z-index: 60;
  display: flex;
  gap: 6px;
  padding: 6px 8px;
  border-radius: 10px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
}
.sh-swatch {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid var(--vp-c-bg-elv);
  cursor: pointer;
  transition: transform 0.15s ease;
}
.sh-swatch:hover { transform: scale(1.15); }
.sh-swatch--yellow { background: #ffd84d; }
.sh-swatch--green { background: #7ee08a; }
.sh-swatch--pink { background: #ff8fc4; }

/* ---- floating action button ---- */
.sh-fab {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 55;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: #fff;
  background: var(--vp-c-brand-1);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease, background 0.2s ease;
}
.sh-fab:hover { transform: translateY(-2px); }
.sh-fab__icon { width: 22px; height: 22px; }
.sh-fab__count {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 10px;
  background: var(--vp-c-danger-1, #e11d48);
  color: #fff;
  font-size: 11px;
  line-height: 20px;
  text-align: center;
}

/* ---- board panel ---- */
.sh-board {
  position: fixed;
  top: var(--vp-nav-height, 64px);
  right: 0;
  bottom: 0;
  z-index: 54;
  width: 300px;
  max-width: 85vw;
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-elv);
  border-left: 1px solid var(--vp-c-divider);
  box-shadow: -6px 0 24px rgba(0, 0, 0, 0.12);
  transform: translateX(100%);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.sh-board--open { transform: translateX(0); }

.sh-board__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.sh-board__heading {
  display: flex;
  align-items: center;
  gap: 8px;
}
.sh-board__title {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}
.sh-board__chip {
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 10px;
  background: var(--vp-c-brand-soft, rgba(59, 130, 246, 0.14));
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
}
.sh-board__clear {
  font-size: 12px;
  font-weight: 500;
  color: var(--vp-c-text-3);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease;
}
.sh-board__clear:hover { color: var(--vp-c-danger-1, #e11d48); }

.sh-board__empty {
  padding: 20px 16px;
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.sh-board__list {
  list-style: none;
  margin: 0;
  padding: 6px 10px 14px;
  overflow-y: auto;
}
.sh-board__item {
  --sh-accent: var(--vp-c-text-3);
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 10px 8px;
  cursor: pointer;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: background 0.15s ease;
}
.sh-board__item:last-child { border-bottom: none; }
.sh-board__item:hover { background: var(--vp-c-bg-soft); }
.sh-board__item--yellow { --sh-accent: #e0a800; }
.sh-board__item--green { --sh-accent: #2f9e44; }
.sh-board__item--pink { --sh-accent: #e64980; }

.sh-board__num {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background: var(--sh-accent);
  font-variant-numeric: tabular-nums;
}

.sh-board__text {
  flex: 1;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.sh-board__item:hover .sh-board__text { color: var(--vp-c-text-1); }
.sh-board__del {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 0;
  border-radius: 6px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--vp-c-text-3);
  opacity: 0;
  transition: opacity 0.15s ease, color 0.15s ease, background 0.15s ease;
}
.sh-board__del svg { width: 14px; height: 14px; }
.sh-board__item:hover .sh-board__del { opacity: 1; }
.sh-board__del:hover {
  color: var(--vp-c-danger-1, #e11d48);
  background: var(--vp-c-bg-elv);
}

/* ---- in-page marks (global, see below) ---- */

@media (max-width: 768px) {
  .sh-board { width: 85vw; }
}
</style>

<!-- Marks live inside .vp-doc, so they can't be scoped to this component. -->
<style>
.sh-mark {
  border-radius: 2px;
  padding: 0 1px;
  color: inherit;
}
.sh-mark--yellow { background: #ffe680; }
.sh-mark--green { background: #aef0b6; }
.sh-mark--pink { background: #ffb3d9; }
.dark .sh-mark--yellow { background: #b8961f; }
.dark .sh-mark--green { background: #2f7d3a; }
.dark .sh-mark--pink { background: #a83d75; }
</style>
