<template>
  <div 
    ref="magneticElement"
    :class="[
      'magnetic-glow',
      `magnetic-glow--${variant}`,
      { 'magnetic-glow--active': isActive }
    ]"
    :data-glow-color="glowColor"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
  >
    <div class="magnetic-glow__background"></div>
    <div class="magnetic-glow__content">
      <slot />
    </div>
    <div v-if="showTrail" class="magnetic-glow__trail-container" ref="trailContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'labs', 'tutorials', 'lectures', 'assessments'].includes(value)
  },
  intensity: {
    type: Number,
    default: 0.3,
    validator: (value) => value >= 0 && value <= 1
  },
  showTrail: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const magneticElement = ref(null)
const trailContainer = ref(null)
const isHovered = ref(false)
let trailThrottle = null

const glowColor = computed(() => {
  const colors = {
    primary: '59, 130, 246',    // Blue
    secondary: '107, 114, 128',  // Gray
    labs: '59, 130, 246',       // Blue
    tutorials: '147, 51, 234',   // Purple
    lectures: '124, 58, 237',    // Violet
    assessments: '220, 38, 127'  // Pink
  }
  return colors[props.variant] || colors.primary
})

const handleMouseEnter = () => {
  if (props.disabled) return
  isHovered.value = true
  magneticElement.value?.classList.add('magnetic-glow--hovered')
}

const handleMouseLeave = () => {
  if (props.disabled) return
  isHovered.value = false
  magneticElement.value?.classList.remove('magnetic-glow--hovered')
  
  // Reset mouse position
  if (magneticElement.value) {
    magneticElement.value.style.setProperty('--mouse-x', '50%')
    magneticElement.value.style.setProperty('--mouse-y', '50%')
  }
}

const handleMouseMove = (e) => {
  if (props.disabled) return
  
  const rect = magneticElement.value.getBoundingClientRect()
  const mouseX = ((e.clientX - rect.left) / rect.width) * 100
  const mouseY = ((e.clientY - rect.top) / rect.height) * 100
  
  // Update CSS custom properties for glow position
  magneticElement.value.style.setProperty('--mouse-x', `${mouseX}%`)
  magneticElement.value.style.setProperty('--mouse-y', `${mouseY}%`)
  
  // Create trail effect if enabled
  if (props.showTrail && trailContainer.value) {
    createTrailParticle(e.clientX - rect.left, e.clientY - rect.top)
  }
}

const createTrailParticle = (x, y) => {
  if (trailThrottle) return
  
  trailThrottle = setTimeout(() => {
    trailThrottle = null
  }, 50)
  
  const trail = document.createElement('div')
  trail.classList.add('magnetic-glow__trail-particle')
  trail.style.left = `${x - 5}px`
  trail.style.top = `${y - 5}px`
  trail.style.setProperty('--trail-color', glowColor.value)
  
  trailContainer.value.appendChild(trail)
  
  // Remove trail particle after animation
  setTimeout(() => {
    if (trail.parentNode) {
      trail.parentNode.removeChild(trail)
    }
  }, 1000)
}

onMounted(() => {
  // Initialize mouse position
  if (magneticElement.value) {
    magneticElement.value.style.setProperty('--mouse-x', '50%')
    magneticElement.value.style.setProperty('--mouse-y', '50%')
    magneticElement.value.style.setProperty('--glow-color', glowColor.value)
    magneticElement.value.style.setProperty('--glow-intensity', props.intensity)
  }
})

onUnmounted(() => {
  if (trailThrottle) {
    clearTimeout(trailThrottle)
  }
})
</script>

<style scoped>
.magnetic-glow {
  position: relative;
  display: block;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  --mouse-x: 50%;
  --mouse-y: 50%;
  --glow-color: 59, 130, 246;
  --glow-intensity: 0.3;
}

.magnetic-glow__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    rgba(var(--glow-color), var(--glow-intensity)) 0%,
    rgba(var(--glow-color), calc(var(--glow-intensity) * 0.4)) 25%,
    rgba(var(--glow-color), calc(var(--glow-intensity) * 0.2)) 50%,
    transparent 80%
  );
  pointer-events: none;
  border-radius: inherit;
}

.magnetic-glow__content {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.magnetic-glow__trail-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.magnetic-glow__trail-particle {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--trail-color), 0.8) 0%,
    transparent 100%
  );
  animation: trail-fade 1s ease-out forwards;
  pointer-events: none;
}

/* Hover States */
.magnetic-glow--hovered .magnetic-glow__background {
  opacity: 1;
}

.magnetic-glow--hovered .magnetic-glow__content {
  transform: translateY(-1px);
}

/* Active States - Persistent glow for selected items */
.magnetic-glow--active {
  background: rgba(var(--glow-color), 0.1);
  border-left: 3px solid rgba(var(--glow-color), 0.8);
}

.magnetic-glow--active .magnetic-glow__background {
  opacity: 0.7;
  background: radial-gradient(
    ellipse at center,
    rgba(var(--glow-color), calc(var(--glow-intensity) * 0.8)) 0%,
    rgba(var(--glow-color), calc(var(--glow-intensity) * 0.4)) 40%,
    rgba(var(--glow-color), calc(var(--glow-intensity) * 0.2)) 70%,
    transparent 100%
  );
  animation: pulse-glow 2s ease-in-out infinite alternate;
}

/* Pulsing animation for active state */
@keyframes pulse-glow {
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  100% {
    opacity: 0.9;
    transform: scale(1.02);
  }
}

/* Variant Styles */
.magnetic-glow--primary {
  --glow-color: 59, 130, 246;
}

.magnetic-glow--secondary {
  --glow-color: 107, 114, 128;
}

.magnetic-glow--labs {
  --glow-color: 59, 130, 246;
}

.magnetic-glow--tutorials {
  --glow-color: 147, 51, 234;
}

.magnetic-glow--lectures {
  --glow-color: 124, 58, 237;
}

.magnetic-glow--assessments {
  --glow-color: 220, 38, 127;
}

/* Trail Animation */
@keyframes trail-fade {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .magnetic-glow {
    --glow-intensity: 0.2;
  }
  
  .magnetic-glow__trail-particle {
    display: none;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .magnetic-glow,
  .magnetic-glow__content,
  .magnetic-glow__background {
    transition: none;
  }
  
  .magnetic-glow__trail-particle {
    display: none;
  }
}
</style>