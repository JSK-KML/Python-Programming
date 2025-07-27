---
outline: deep
title: Interactive Sliders Test
---

# Interactive Sliders & Switches Test

Testing interactive controls with glow effects and smooth animations.

## 🎛️ Glow Sliders

<div class="controls-showcase">
  <div class="sliders-container">
    <div class="slider-group">
      <label>Volume</label>
      <div class="glow-slider">
        <input type="range" min="0" max="100" value="50" class="slider" id="volumeSlider">
        <div class="slider-fill"></div>
        <div class="slider-thumb"></div>
      </div>
      <span class="slider-value">50</span>
    </div>
    
    <div class="slider-group">
      <label>Brightness</label>
      <div class="glow-slider purple">
        <input type="range" min="0" max="100" value="75" class="slider" id="brightnessSlider">
        <div class="slider-fill"></div>
        <div class="slider-thumb"></div>
      </div>
      <span class="slider-value">75</span>
    </div>
  </div>
  
  <div class="switches-container">
    <div class="switch-group">
      <label>Dark Mode</label>
      <div class="glow-switch" onclick="toggleSwitch(this)">
        <div class="switch-track"></div>
        <div class="switch-thumb"></div>
      </div>
    </div>
    
    <div class="switch-group">
      <label>Notifications</label>
      <div class="glow-switch active" onclick="toggleSwitch(this)">
        <div class="switch-track"></div>
        <div class="switch-thumb"></div>
      </div>
    </div>
  </div>
</div>

<style>
.controls-showcase {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 32px;
  margin: 32px 0;
}

.sliders-container {
  margin-bottom: 40px;
}

.slider-group {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
}

.slider-group label {
  min-width: 80px;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.glow-slider {
  position: relative;
  flex: 1;
  height: 6px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 3px;
  cursor: pointer;
}

.glow-slider.purple {
  background: rgba(139, 92, 246, 0.1);
}

.glow-slider .slider {
  position: absolute;
  top: -7px;
  left: 0;
  width: 100%;
  height: 20px;
  opacity: 0;
  cursor: pointer;
  border-radius: 3px;
}

.slider-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  border-radius: 3px;
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.4);
  transition: width 0.1s ease;
}

.glow-slider.purple .slider-fill {
  background: linear-gradient(90deg, #8b5cf6, #7c3aed);
  box-shadow: 0 0 12px rgba(139, 92, 246, 0.4);
}

.slider-thumb {
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 0 12px rgba(59, 130, 246, 0.4);
  transition: transform 0.1s ease, box-shadow 0.2s ease;
  cursor: grab;
}

.slider-thumb:hover {
  transform: translate(-50%, -50%) scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.6);
}

.slider-value {
  min-width: 40px;
  text-align: right;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.switches-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.switch-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.switch-group label {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.glow-switch {
  position: relative;
  width: 60px;
  height: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.switch-track {
  width: 100%;
  height: 100%;
  background: rgba(107, 114, 128, 0.3);
  border-radius: 15px;
  transition: background 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.glow-switch.active .switch-track {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  box-shadow: 0 0 16px rgba(59, 130, 246, 0.4);
}

.switch-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.glow-switch.active .switch-thumb {
  transform: translateX(30px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 0 12px rgba(59, 130, 246, 0.3);
}

.glow-switch:hover .switch-thumb {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>

<script>
if (typeof window !== 'undefined') {
  function initSliders() {
    const sliders = document.querySelectorAll('.glow-slider');
    
    sliders.forEach(sliderContainer => {
      const slider = sliderContainer.querySelector('.slider');
      const fill = sliderContainer.querySelector('.slider-fill');
      const thumb = sliderContainer.querySelector('.slider-thumb');
      const valueDisplay = sliderContainer.parentElement.querySelector('.slider-value');
      
      function updateSlider() {
        const value = slider.value;
        const max = slider.max;
        const percentage = (value / max) * 100;
        
        fill.style.width = percentage + '%';
        thumb.style.left = percentage + '%';
        valueDisplay.textContent = value;
      }
      
      slider.addEventListener('input', updateSlider);
      updateSlider();
    });
  }

  function toggleSwitch(switchElement) {
    switchElement.classList.toggle('active');
    const label = switchElement.parentElement.querySelector('label').textContent;
    const isActive = switchElement.classList.contains('active');
    
    console.log(`${label} ${isActive ? 'enabled' : 'disabled'}!`);
  }

  window.toggleSwitch = toggleSwitch;

  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initSliders, 500);
  });
}
</script>