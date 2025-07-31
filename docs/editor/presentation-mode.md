# Presentation Mode

<button id="openFullscreen" class="fullscreen-btn">🖥️ Open Fullscreen Presentation</button>

<div class="info-section">
  <p>Click the button above to open the fullscreen presentation mode in a new window.</p>
  <p>Features include:</p>
  <ul>
    <li>📝 Multi-editor tabs with pre-loaded Python examples</li>
    <li>💡 Spotlight mode to highlight code sections</li>
    <li>📖 Progressive reveal for line-by-line teaching</li>
    <li>🎯 Clean presentation view for projectors</li>
    <li>📊 Floating annotations for code explanations</li>
  </ul>
</div>

<style>
.fullscreen-btn {
  margin-bottom: 20px;
  padding: 12px 24px;
  background: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.fullscreen-btn:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
}

.info-section {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.info-section p {
  margin-bottom: 16px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.info-section ul {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.info-section li {
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.info-section li:before {
  content: attr(data-icon);
  position: absolute;
  left: 0;
  font-size: 16px;
}
</style>

<script setup>
function openPresentationFullscreen() {
  // Open in new tab instead of new window
  const presentationWindow = window.open(
    '/Python-Programming/presentation-fullscreen.html',
    '_blank'
  );
  
  if (presentationWindow) {
    presentationWindow.focus();
  } else {
    alert('Please allow popups for this site to open presentation mode');
  }
}

// Add event listener when component mounts
import { onMounted } from 'vue'

onMounted(() => {
  const btn = document.getElementById('openFullscreen');
  if (btn) {
    btn.addEventListener('click', openPresentationFullscreen);
  }
});
</script>