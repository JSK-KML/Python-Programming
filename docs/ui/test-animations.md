---
outline: deep
title: Animation Showcase
---

# Interactive Glow Elements Test

This page tests magnetic glows, ripple effects, and contextual glow states for enhanced interactivity.

<div style="background: #3b82f6; color: white; padding: 10px; border-radius: 8px; margin: 20px 0;">
  <strong>🧪 HTML Rendering Test:</strong> If you can see this blue box with styled text, HTML rendering is working correctly.
</div>

## Magnetic Glow Cards

<div class="magnetic-grid">
  <div class="magnetic-card" data-glow-color="blue">
    <div class="magnetic-header">
      <h3>Documentation</h3>
      <div class="magnetic-badge primary">New</div>
    </div>
    <div class="magnetic-body">
      <p>Move your cursor close to this card and watch the magnetic glow effect activate smoothly.</p>
    </div>
    <div class="magnetic-footer">
      <button class="ripple-btn primary" onclick="createRippleEffect(event)">Read More</button>
    </div>
  </div>

  <div class="magnetic-card" data-glow-color="purple">
    <div class="magnetic-header">
      <h3>API Reference</h3>
      <div class="magnetic-badge secondary">Popular</div>
    </div>
    <div class="magnetic-body">
      <p>Experience magnetic attraction effects as your cursor approaches this interactive element.</p>
    </div>
    <div class="magnetic-footer">
      <button class="ripple-btn secondary" onclick="createRippleEffect(event)">Explore API</button>
    </div>
  </div>

  <div class="magnetic-card" data-glow-color="violet">
    <div class="magnetic-header">
      <h3>Community</h3>
      <div class="magnetic-badge accent">Active</div>
    </div>
    <div class="magnetic-body">
      <p>Join our community and enjoy sophisticated interactive glow effects throughout the experience.</p>
    </div>
    <div class="magnetic-footer">
      <button class="ripple-btn accent" onclick="createRippleEffect(event)">Join Now</button>
    </div>
  </div>
</div>

## Interactive Glow Showcase

<div class="interactive-showcase">
  <button class="magnetic-btn" data-glow="blue" onmouseover="showTooltipGlow(this, 'Magnetic attraction activated!')" onmouseout="hideTooltipGlow(this)">Magnetic Button</button>
  <button class="ripple-btn large" onclick="createRippleEffect(event)">Ripple Effect</button>
  <button class="context-btn success" onclick="showContextualGlow(this, 'success')">Success State</button>
  <button class="context-btn warning" onclick="showContextualGlow(this, 'warning')">Warning State</button>
</div>

## Glow Trail Area

<div class="glow-trail-zone" id="trailZone">
  <h3>Glow Trail Zone</h3>
  <p>Move your cursor around this area to see a beautiful glowing trail effect that follows your movement.</p>
</div>


## 🌟 Button Variations

<div class="button-showcase">
  <button class="btn-primary" onclick="showAlert('Primary button clicked!', 'info')">Primary Action</button>
  <button class="btn-secondary" onclick="showAlert('Secondary action performed!', 'success')">Secondary Action</button>
  <button class="btn-success" onclick="showAlert('Success! Operation completed.', 'success')">Success State</button>
  <button class="btn-warning" onclick="showAlert('Warning: Please review your action.', 'warning')">Warning Action</button>
  <button class="btn-outline" onclick="showAlert('Outline button pressed!', 'info')">Outline Style</button>
  <button class="btn-ghost" onclick="showAlert('Ghost button activated!', 'info')">Ghost Button</button>
</div>

<div class="interactive-buttons">
  <h3>Interactive Button Effects</h3>
  <div class="button-effects-grid">
    <button class="btn-ripple" onclick="createRipple(event)">
      <span>Ripple Effect</span>
    </button>
    <button class="btn-loading" onclick="toggleLoading(this)">
      <span class="btn-text">Load Data</span>
      <span class="btn-spinner" style="display: none;">
        <div class="mini-spinner"></div>
      </span>
    </button>
    <button class="btn-counter" onclick="incrementCounter(this)">
      <span>Click Me</span>
      <span class="counter-badge">0</span>
    </button>
    <button class="btn-toggle" onclick="toggleButton(this)">
      <span class="toggle-text">Enable</span>
    </button>
  </div>
</div>


## 📱 Notification Styles

<div class="notification-showcase">
  <h3>Alert & Notification Components</h3>
  
  <div class="notification success">
    <div class="notification-icon">✅</div>
    <div class="notification-content">
      <strong>Success!</strong>
      <p>Your changes have been saved successfully.</p>
    </div>
    <button class="notification-close" onclick="closeNotification(this)">×</button>
  </div>
  
  <div class="notification warning">
    <div class="notification-icon">⚠️</div>
    <div class="notification-content">
      <strong>Warning</strong>
      <p>Please review your settings before proceeding.</p>
    </div>
    <button class="notification-close" onclick="closeNotification(this)">×</button>
  </div>
  
  <div class="notification error">
    <div class="notification-icon">❌</div>
    <div class="notification-content">
      <strong>Error</strong>
      <p>Unable to complete the requested action.</p>
    </div>
    <button class="notification-close" onclick="closeNotification(this)">×</button>
  </div>
  
  <div class="notification info">
    <div class="notification-icon">💡</div>
    <div class="notification-content">
      <strong>Information</strong>
      <p>New features are now available in your dashboard.</p>
    </div>
    <button class="notification-close" onclick="closeNotification(this)">×</button>
  </div>
</div>

## 📊 Progress Components

<div class="progress-showcase">
  <h3>Animated Progress Rings & Bars</h3>
  
  <div class="progress-grid">
    <div class="progress-container">
      <div class="progress-ring" data-progress="75">
        <svg class="progress-ring-svg" width="120" height="120">
          <circle class="progress-ring-circle-bg" cx="60" cy="60" r="52"></circle>
          <circle class="progress-ring-circle" cx="60" cy="60" r="52"></circle>
        </svg>
        <div class="progress-text">75%</div>
      </div>
      <span class="progress-label">Skills</span>
    </div>
    
    <div class="progress-container">
      <div class="progress-ring" data-progress="90">
        <svg class="progress-ring-svg" width="120" height="120">
          <circle class="progress-ring-circle-bg" cx="60" cy="60" r="52"></circle>
          <circle class="progress-ring-circle" cx="60" cy="60" r="52" stroke="#8b5cf6"></circle>
        </svg>
        <div class="progress-text">90%</div>
      </div>
      <span class="progress-label">Experience</span>
    </div>
    
    <div class="progress-container">
      <div class="progress-ring" data-progress="60">
        <svg class="progress-ring-svg" width="120" height="120">
          <circle class="progress-ring-circle-bg" cx="60" cy="60" r="52"></circle>
          <circle class="progress-ring-circle" cx="60" cy="60" r="52" stroke="#a855f7"></circle>
        </svg>
        <div class="progress-text">60%</div>
      </div>
      <span class="progress-label">Projects</span>
    </div>
  </div>
  
  <div class="progress-bars">
    <div class="progress-bar-container">
      <label>Python Programming</label>
      <div class="progress-bar">
        <div class="progress-bar-fill" data-width="85"></div>
      </div>
      <span class="progress-percentage">85%</span>
    </div>
    
    <div class="progress-bar-container">
      <label>Web Development</label>
      <div class="progress-bar">
        <div class="progress-bar-fill" data-width="70" style="--progress-color: #8b5cf6;"></div>
      </div>
      <span class="progress-percentage">70%</span>
    </div>
    
    <div class="progress-bar-container">
      <label>Data Analysis</label>
      <div class="progress-bar">
        <div class="progress-bar-fill" data-width="65" style="--progress-color: #a855f7;"></div>
      </div>
      <span class="progress-percentage">65%</span>
    </div>
  </div>
</div>

## 🎛️ Interactive Controls

<div class="controls-showcase">
  <h3>Sliders & Switches</h3>
  
  <div class="sliders-container">
    <div class="slider-group">
      <label>Volume</label>
      <div class="glow-slider">
        <input type="range" min="0" max="100" value="50" class="slider" id="volumeSlider">
        <div class="slider-track"></div>
        <div class="slider-fill"></div>
        <div class="slider-thumb"></div>
      </div>
      <span class="slider-value">50</span>
    </div>
    
    <div class="slider-group">
      <label>Brightness</label>
      <div class="glow-slider purple">
        <input type="range" min="0" max="100" value="75" class="slider" id="brightnessSlider">
        <div class="slider-track"></div>
        <div class="slider-fill"></div>
        <div class="slider-thumb"></div>
      </div>
      <span class="slider-value">75</span>
    </div>
    
    <div class="slider-group">
      <label>Contrast</label>
      <div class="glow-slider violet">
        <input type="range" min="0" max="100" value="30" class="slider" id="contrastSlider">
        <div class="slider-track"></div>
        <div class="slider-fill"></div>
        <div class="slider-thumb"></div>
      </div>
      <span class="slider-value">30</span>
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
    
    <div class="switch-group">
      <label>Auto Save</label>
      <div class="glow-switch" onclick="toggleSwitch(this)">
        <div class="switch-track"></div>
        <div class="switch-thumb"></div>
      </div>
    </div>
  </div>
</div>

## ✨ Holographic Cards

<div class="holographic-showcase">
  <h3>Iridescent Card Collection</h3>
  
  <div class="holographic-grid">
    <div class="holographic-card">
      <div class="holographic-border"></div>
      <div class="card-content">
        <div class="card-icon">🚀</div>
        <h4>Launch Project</h4>
        <p>Deploy your application with holographic visual effects and smooth animations.</p>
        <button class="holographic-btn">Deploy Now</button>
      </div>
    </div>
    
    <div class="holographic-card">
      <div class="holographic-border"></div>
      <div class="card-content">
        <div class="card-icon">⚡</div>
        <h4>Performance</h4>
        <p>Optimize your code with lightning-fast execution and beautiful UI transitions.</p>
        <button class="holographic-btn">Optimize</button>
      </div>
    </div>
    
    <div class="holographic-card">
      <div class="holographic-border"></div>
      <div class="card-content">
        <div class="card-icon">🎨</div>
        <h4>Design System</h4>
        <p>Create stunning interfaces with our comprehensive design system and components.</p>
        <button class="holographic-btn">Explore</button>
      </div>
    </div>
  </div>
</div>

## 💻 Interactive Code Editor

<div class="code-editor-showcase">
  <h3>Live Code Playground</h3>
  
  <div class="code-editor-container">
    <div class="editor-tabs">
      <button class="tab-btn active" data-lang="python">Python</button>
      <button class="tab-btn" data-lang="javascript">JavaScript</button>
      <button class="tab-btn" data-lang="html">HTML</button>
    </div>
    
    <div class="editor-content">
      <div class="code-editor" id="codeEditor"></div>
      
      <div class="editor-controls">
        <button class="run-btn" onclick="runCode()">
          <span class="btn-icon">▶️</span>
          Run Code
        </button>
        <button class="clear-btn" onclick="clearOutput()">Clear</button>
      </div>
    </div>
    
    <div class="output-container">
      <h4>Output:</h4>
      <pre class="code-output" id="codeOutput">Click "Run Code" to see results...</pre>
    </div>
  </div>
</div>

## 🚀 Floating Action Buttons

<div class="fab-showcase">
  <h3>Floating Action Buttons</h3>
  <p>Hover over the floating buttons to see magnetic effects and micro-interactions.</p>
</div>

<!-- Floating Action Buttons -->
<div class="fab-container">
  <div class="fab main-fab" onclick="toggleFabMenu()">
    <span class="fab-icon">+</span>
    <div class="fab-tooltip">Quick Actions</div>
  </div>
  
  <div class="fab secondary-fab fab-1" onclick="showAlert('Create new document!', 'info')">
    <span class="fab-icon">📄</span>
    <div class="fab-tooltip">New Document</div>
  </div>
  
  <div class="fab secondary-fab fab-2" onclick="showAlert('Upload files!', 'info')">
    <span class="fab-icon">📁</span>
    <div class="fab-tooltip">Upload</div>
  </div>
  
  <div class="fab secondary-fab fab-3" onclick="showAlert('Send message!', 'info')">
    <span class="fab-icon">💬</span>
    <div class="fab-tooltip">Message</div>
  </div>
  
  <div class="fab secondary-fab fab-4" onclick="showAlert('Open settings!', 'info')">
    <span class="fab-icon">⚙️</span>
    <div class="fab-tooltip">Settings</div>
  </div>
</div>

## 🎨 Enhanced Content Blocks

::: tip 💡 Enhanced Interactive Tip
This tip box includes shimmer effects, hover animations, and improved visual hierarchy for better user engagement.
:::

::: warning ⚠️ Animated Warning Block
Warning boxes now feature smooth hover transitions, subtle border animations, and enhanced styling for improved attention.
:::

::: danger 🚨 Critical Alert
Danger alerts include pulsing effects and enhanced shadows to effectively communicate important information.
:::


<style>

/* Interactive Glow Elements Design */

/* Magnetic Glow Cards */
.magnetic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin: 40px 0;
  padding: 20px;
}

.magnetic-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 1px solid rgba(59, 130, 246, 0.1);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
  cursor: pointer;
}

.magnetic-card[data-glow-color="blue"] {
  --magnetic-color: 59, 130, 246;
}

.magnetic-card[data-glow-color="purple"] {
  --magnetic-color: 139, 92, 246;
}

.magnetic-card[data-glow-color="violet"] {
  --magnetic-color: 168, 85, 247;
}

.magnetic-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
    rgba(var(--magnetic-color), 0.3) 0%, 
    rgba(var(--magnetic-color), 0.1) 30%, 
    transparent 70%);
  border-radius: 18px;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: -1;
}

.magnetic-card.magnetic-active::before {
  opacity: 1;
}

.magnetic-card.magnetic-active {
  transform: translateY(-2px);
  border-color: rgba(var(--magnetic-color), 0.3);
  box-shadow: 
    0 8px 25px rgba(var(--magnetic-color), 0.2),
    0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Fallback hover effects */
.magnetic-card:hover {
  transform: translateY(-4px);
  border-color: rgba(59, 130, 246, 0.3);
  box-shadow: 
    0 12px 30px rgba(59, 130, 246, 0.2),
    0 25px 50px rgba(0, 0, 0, 0.1);
}

.magnetic-card[data-glow-color="purple"]:hover {
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 
    0 12px 30px rgba(139, 92, 246, 0.2),
    0 25px 50px rgba(0, 0, 0, 0.1);
}

.magnetic-card[data-glow-color="violet"]:hover {
  border-color: rgba(168, 85, 247, 0.3);
  box-shadow: 
    0 12px 30px rgba(168, 85, 247, 0.2),
    0 25px 50px rgba(0, 0, 0, 0.1);
}

.magnetic-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 24px 0 24px;
}

.magnetic-header h3 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 20px;
}

.magnetic-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.magnetic-badge.primary {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.magnetic-badge.secondary {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.magnetic-badge.accent {
  background: rgba(168, 85, 247, 0.1);
  color: #a855f7;
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.magnetic-body {
  padding: 16px 24px;
}

.magnetic-body p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.magnetic-footer {
  padding: 0 24px 24px 24px;
}

/* Ripple Effect Buttons */
.ripple-btn {
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  font-size: 14px;
  border: none;
}

.ripple-btn.large {
  padding: 16px 32px;
  font-size: 16px;
}

.ripple-btn.primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
}

.ripple-btn.secondary {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.3);
}

.ripple-btn.accent {
  background: linear-gradient(135deg, #a855f7, #9333ea);
  color: white;
  box-shadow: 0 4px 14px rgba(168, 85, 247, 0.3);
}

.ripple-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

/* Ripple Animation */
.ripple-effect {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: ripple-animation 0.6s linear;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Interactive Showcase */
.interactive-showcase {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
  padding: 40px;
  background: rgba(59, 130, 246, 0.02);
  border-radius: 16px;
  border: 1px solid rgba(59, 130, 246, 0.05);
}

/* Magnetic Buttons */
.magnetic-btn {
  padding: 14px 28px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  border: none;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.magnetic-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  transform: scale(0);
  transition: transform 0.3s ease;
  pointer-events: none;
}

.magnetic-btn.magnetic-hover::before {
  transform: scale(1);
}

/* Contextual Glow States */
.context-btn {
  padding: 14px 28px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  border: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.context-btn.success {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3);
}

.context-btn.warning {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.3);
}

.context-btn.success.active {
  box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
  animation: success-pulse 1s ease-in-out;
}

.context-btn.warning.active {
  box-shadow: 0 0 30px rgba(245, 158, 11, 0.6);
  animation: warning-pulse 1s ease-in-out;
}

@keyframes success-pulse {
  0%, 100% { box-shadow: 0 4px 14px rgba(16, 185, 129, 0.3); }
  50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.8); }
}

@keyframes warning-pulse {
  0%, 100% { box-shadow: 0 4px 14px rgba(245, 158, 11, 0.3); }
  50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.8); }
}

/* Glow Trail Zone */
.glow-trail-zone {
  min-height: 300px;
  padding: 40px;
  margin: 40px 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
  border-radius: 16px;
  border: 1px solid rgba(59, 130, 246, 0.1);
  position: relative;
  overflow: hidden;
  cursor: crosshair;
}

.glow-trail-zone h3 {
  margin: 0 0 16px 0;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.glow-trail-zone p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

/* Glow Trail Effect */
.glow-trail {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%);
  pointer-events: none;
  animation: trail-fade 1s ease-out forwards;
}

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

/* Tooltip Glow */
.tooltip-glow {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  pointer-events: none;
  z-index: 1000;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.tooltip-glow.show {
  opacity: 1;
  transform: translateY(0);
}

/* Card Collections */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

.card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.card.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(59, 130, 246, 0.2);
}

.card.hover-glow:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
}

.card.hover-scale:hover {
  transform: scale(1.02);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 20px 0 20px;
}

.card-header h3 {
  margin: 0;
  color: var(--vp-c-text-1);
}

.card-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  background: var(--vp-c-brand-1);
  color: white;
}

.card-badge.popular {
  background: #f59e0b;
}

.card-body {
  padding: 12px 20px;
}

.card-body p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

.card-footer {
  padding: 0 20px 20px 20px;
}


/* Button Showcase */
.button-showcase {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin: 24px 0;
}

.btn-primary, .btn-secondary, .btn-success, .btn-warning, .btn-outline, .btn-ghost {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 14px;
}

.btn-primary {
  background: var(--vp-c-brand-1);
  color: white;
}

.btn-primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
}

.btn-success {
  background: #10b981;
  color: white;
}

.btn-success:hover {
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.btn-warning {
  background: #f59e0b;
  color: white;
}

.btn-warning:hover {
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.btn-outline {
  background: transparent;
  color: var(--vp-c-brand-1);
  border: 2px solid var(--vp-c-brand-1);
}

.btn-outline:hover {
  background: var(--vp-c-brand-1);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-ghost {
  background: transparent;
  color: var(--vp-c-text-1);
  border: 2px solid transparent;
}

.btn-ghost:hover {
  background: rgba(var(--vp-c-brand-1), 0.1);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}


/* Notification Styles */
.notification-showcase {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  margin: 32px 0;
}

.notification {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  margin: 12px 0;
  border-left: 4px solid;
  background: var(--vp-c-bg);
  position: relative;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.notification.success {
  border-left-color: #10b981;
  background: rgba(16, 185, 129, 0.05);
}

.notification.warning {
  border-left-color: #f59e0b;
  background: rgba(245, 158, 11, 0.05);
}

.notification.error {
  border-left-color: #ef4444;
  background: rgba(239, 68, 68, 0.05);
}

.notification.info {
  border-left-color: var(--vp-c-brand-1);
  background: rgba(59, 130, 246, 0.05);
}

.notification-icon {
  font-size: 20px;
  line-height: 1;
}

.notification-content {
  flex: 1;
}

.notification-content strong {
  display: block;
  margin-bottom: 4px;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.notification-content p {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.4;
}

.notification-close {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.notification-close:hover {
  background: rgba(0, 0, 0, 0.1);
  color: var(--vp-c-text-1);
}

/* Interactive Button Effects */
.interactive-buttons {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  margin: 32px 0;
}

.button-effects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.btn-ripple {
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-ripple:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-loading {
  background: #10b981;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  min-width: 120px;
}

.btn-loading:hover {
  background: #059669;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.btn-counter {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-counter:hover {
  background: #d97706;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}

.btn-toggle {
  background: #6b7280;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
}

.btn-toggle:hover {
  background: #4b5563;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
}

.btn-toggle.active {
  background: #10b981;
}

.btn-toggle.active:hover {
  background: #059669;
}

.counter-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  transition: transform 0.2s ease;
}

.mini-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  animation: rippleAnimation 0.6s linear;
  pointer-events: none;
}

@keyframes rippleAnimation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Enhanced Content Block Animations */
.vp-doc .custom-block {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.vp-doc .custom-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transition: left 0.6s ease;
}

.vp-doc .custom-block:hover::before {
  left: 100%;
}

.vp-doc .custom-block:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.vp-doc .custom-block.tip {
  border-left: 4px solid var(--vp-c-tip-1);
  background: var(--vp-c-tip-soft);
  animation: tipPulse 3s ease-in-out infinite;
}

.vp-doc .custom-block.warning {
  border-left: 4px solid var(--vp-c-warning-1);
  background: var(--vp-c-warning-soft);
  animation: warningGlow 2s ease-in-out infinite;
}

.vp-doc .custom-block.danger {
  border-left: 4px solid var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
  animation: dangerPulse 1.5s ease-in-out infinite;
}

@keyframes tipPulse {
  0%, 100% { box-shadow: 0 0 5px rgba(16, 185, 129, 0.3); }
  50% { box-shadow: 0 0 15px rgba(16, 185, 129, 0.6); }
}

@keyframes warningGlow {
  0%, 100% { box-shadow: 0 0 5px rgba(245, 158, 11, 0.3); }
  50% { box-shadow: 0 0 15px rgba(245, 158, 11, 0.6); }
}

@keyframes dangerPulse {
  0%, 100% { box-shadow: 0 0 5px rgba(239, 68, 68, 0.3); }
  50% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.8); }
}

/* Progress Components */
.progress-showcase {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 32px;
  margin: 32px 0;
}

.progress-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 32px;
  margin: 24px 0;
}

.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.progress-ring {
  position: relative;
  display: inline-block;
}

.progress-ring-svg {
  transform: rotate(-90deg);
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
}

.progress-ring-circle-bg {
  fill: none;
  stroke: rgba(59, 130, 246, 0.1);
  stroke-width: 8;
}

.progress-ring-circle {
  fill: none;
  stroke: #3b82f6;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 327;
  stroke-dashoffset: 327;
  transition: stroke-dashoffset 2s ease;
  filter: drop-shadow(0 0 6px currentColor);
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600;
  font-size: 18px;
  color: var(--vp-c-text-1);
}

.progress-label {
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.progress-bars {
  margin-top: 40px;
}

.progress-bar-container {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}

.progress-bar-container label {
  min-width: 120px;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--progress-color, #3b82f6), var(--progress-color, #2563eb));
  border-radius: 4px;
  width: 0%;
  transition: width 2s ease;
  box-shadow: 0 0 12px var(--progress-color, rgba(59, 130, 246, 0.4));
  position: relative;
}

.progress-bar-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.progress-percentage {
  min-width: 40px;
  text-align: right;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

/* Interactive Controls */
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

.glow-slider.violet {
  background: rgba(168, 85, 247, 0.1);
}

.glow-slider .slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  border-radius: 3px;
}

.slider-track {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(59, 130, 246, 0.1);
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

.glow-slider.violet .slider-fill {
  background: linear-gradient(90deg, #a855f7, #9333ea);
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
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

/* Holographic Cards */
.holographic-showcase {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 32px;
  margin: 32px 0;
}

.holographic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin: 24px 0;
}

.holographic-card {
  position: relative;
  background: var(--vp-c-bg);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.holographic-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  padding: 2px;
  background: linear-gradient(45deg, 
    #ff0080, #ff8c00, #40e0d0, #ff0080, 
    #8a2be2, #00ff00, #ff1493, #00bfff);
  background-size: 300% 300%;
  animation: holographicShift 3s ease-in-out infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.holographic-card:hover .holographic-border {
  opacity: 1;
}

@keyframes holographicShift {
  0%, 100% { background-position: 0% 50%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 100% 100%; }
  75% { background-position: 0% 100%; }
}

.card-content {
  position: relative;
  padding: 24px;
  background: var(--vp-c-bg);
  border-radius: 14px;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-icon {
  font-size: 32px;
  margin-bottom: 16px;
}

.card-content h4 {
  margin: 0 0 12px 0;
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 20px;
}

.card-content p {
  margin: 0 0 20px 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex: 1;
}

.holographic-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.holographic-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.holographic-btn:hover::before {
  left: 100%;
}

.holographic-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

/* Code Editor */
.code-editor-showcase {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 32px;
  margin: 32px 0;
}

.code-editor-container {
  background: #1e1e1e;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.editor-tabs {
  display: flex;
  background: #2d2d2d;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
}

.tab-btn {
  padding: 12px 20px;
  background: none;
  border: none;
  color: #8d8d8d;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
}

.tab-btn.active {
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}

.tab-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

.editor-content {
  display: flex;
  flex-direction: column;
}

.code-editor {
  padding: 20px;
  background: #1e1e1e;
  color: #d4d4d4;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  min-height: 200px;
  white-space: pre;
  overflow-x: auto;
  border: none;
  outline: none;
  resize: vertical;
}

.editor-controls {
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  background: #2d2d2d;
  border-top: 1px solid rgba(59, 130, 246, 0.2);
}

.run-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.run-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.clear-btn {
  padding: 10px 20px;
  background: rgba(107, 114, 128, 0.2);
  color: #8d8d8d;
  border: 1px solid rgba(107, 114, 128, 0.3);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.clear-btn:hover {
  background: rgba(107, 114, 128, 0.3);
  color: #ffffff;
}

.output-container {
  margin-top: 16px;
  background: #0d1117;
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.output-container h4 {
  margin: 0;
  padding: 12px 16px;
  background: #2d2d2d;
  color: #3b82f6;
  font-size: 14px;
  border-bottom: 1px solid rgba(59, 130, 246, 0.2);
}

.code-output {
  margin: 0;
  padding: 16px;
  color: #58a6ff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
  min-height: 100px;
  background: transparent;
}

/* Floating Action Buttons */
.fab-showcase {
  text-align: center;
  margin: 40px 0;
}

.fab-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
}

.fab {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: none;
  font-size: 24px;
}

.main-fab {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  bottom: 0;
  right: 0;
  z-index: 10;
  transform: scale(1);
}

.main-fab:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
}

.main-fab.active .fab-icon {
  transform: rotate(45deg);
}

.secondary-fab {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
}

.secondary-fab.show {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}

.fab-1.show { bottom: 80px; right: 0; transition-delay: 0.1s; }
.fab-2.show { bottom: 140px; right: 20px; transition-delay: 0.2s; }
.fab-3.show { bottom: 180px; right: 60px; transition-delay: 0.3s; }
.fab-4.show { bottom: 180px; right: 120px; transition-delay: 0.4s; }

.fab:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.fab-icon {
  transition: transform 0.3s ease;
}

.fab-tooltip {
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 1000;
}

.fab:hover .fab-tooltip {
  opacity: 1;
}

.fab-tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-left-color: rgba(0, 0, 0, 0.8);
}

</style>

<script>
// Check if we're in a browser environment (not SSR)
if (typeof window !== 'undefined') {

// Interactive Glow Elements JavaScript

// Magnetic Glow Effect for Cards
function initMagneticCards() {
  const magneticCards = document.querySelectorAll('.magnetic-card');
  console.log('Found magnetic cards:', magneticCards.length);
  
  magneticCards.forEach((card, index) => {
    console.log(`Setting up magnetic card ${index + 1}`);
    
    card.addEventListener('mouseenter', (e) => {
      console.log('Mouse entered card', index + 1);
      card.classList.add('magnetic-active');
    });
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
      
      card.style.setProperty('--mouse-x', `${mouseX}%`);
      card.style.setProperty('--mouse-y', `${mouseY}%`);
      
      // Add stronger visual feedback
      card.style.transform = `translateY(-4px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      console.log('Mouse left card', index + 1);
      card.classList.remove('magnetic-active');
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Ripple Effect for Buttons
function createRippleEffect(event) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('div');
  ripple.classList.add('ripple-effect');
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  // Remove any existing ripples
  const existingRipples = button.querySelectorAll('.ripple-effect');
  existingRipples.forEach(r => r.remove());
  
  button.appendChild(ripple);
  
  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 600);
  
  showAlert('Ripple effect created!', 'info');
}

// Magnetic Button Hover Effect
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  
  magneticBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('magnetic-hover');
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('magnetic-hover');
    });
  });
}

// Contextual Glow States
function showContextualGlow(button, type) {
  button.classList.add('active');
  
  setTimeout(() => {
    button.classList.remove('active');
  }, 1000);
  
  const messages = {
    success: 'Operation completed successfully!',
    warning: 'Warning: Please review your action.'
  };
  
  showAlert(messages[type] || 'Action performed', type);
}

// Tooltip Glow Effect
function showTooltipGlow(element, message) {
  const existing = document.querySelector('.tooltip-glow');
  if (existing) existing.remove();
  
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip-glow');
  tooltip.textContent = message;
  
  const rect = element.getBoundingClientRect();
  tooltip.style.left = rect.left + rect.width / 2 - 50 + 'px';
  tooltip.style.top = rect.top - 40 + 'px';
  
  document.body.appendChild(tooltip);
  
  setTimeout(() => {
    tooltip.classList.add('show');
  }, 10);
  
  element.classList.add('magnetic-hover');
}

function hideTooltipGlow(element) {
  const tooltip = document.querySelector('.tooltip-glow');
  if (tooltip) {
    tooltip.classList.remove('show');
    setTimeout(() => {
      tooltip.remove();
    }, 300);
  }
  
  element.classList.remove('magnetic-hover');
}

// Glow Trail Effect
function initGlowTrail() {
  const trailZone = document.getElementById('trailZone');
  console.log('Trail zone found:', !!trailZone);
  
  if (!trailZone) {
    console.log('No trail zone found!');
    return;
  }
  
  let trails = [];
  let lastTrailTime = 0;
  
  trailZone.addEventListener('mousemove', (e) => {
    const now = Date.now();
    // Throttle trail creation to every 50ms for better performance
    if (now - lastTrailTime < 50) return;
    lastTrailTime = now;
    
    const rect = trailZone.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    console.log('Creating trail at:', x, y);
    
    const trail = document.createElement('div');
    trail.classList.add('glow-trail');
    trail.style.left = (x - 10) + 'px';
    trail.style.top = (y - 10) + 'px';
    trail.style.position = 'absolute';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '1';
    
    trailZone.appendChild(trail);
    trails.push(trail);
    
    // Limit number of trails
    if (trails.length > 10) {
      const oldTrail = trails.shift();
      if (oldTrail && oldTrail.parentNode) {
        oldTrail.remove();
      }
    }
    
    // Remove trail after animation
    setTimeout(() => {
      if (trail && trail.parentNode) {
        trail.remove();
      }
      trails = trails.filter(t => t !== trail);
    }, 1000);
  });
  
  trailZone.addEventListener('mouseenter', () => {
    console.log('Mouse entered trail zone');
    trailZone.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08))';
  });
  
  trailZone.addEventListener('mouseleave', () => {
    console.log('Mouse left trail zone');
    trailZone.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))';
  });
}

// Initialize all interactive effects
function initInteractiveGlow() {
  console.log('Initializing interactive glow effects...');
  initMagneticCards();
  initMagneticButtons();
  initGlowTrail();
  console.log('Interactive glow effects initialized!');
}

// Make functions globally available
window.createRippleEffect = createRippleEffect;
window.showContextualGlow = showContextualGlow;
window.showTooltipGlow = showTooltipGlow;
window.hideTooltipGlow = hideTooltipGlow;

// Initialize when DOM is ready with delay
function delayedInit() {
  setTimeout(() => {
    console.log('Starting delayed initialization...');
    initInteractiveGlow();
  }, 500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', delayedInit);
} else {
  delayedInit();
}

// Also try on window load as fallback
window.addEventListener('load', () => {
  setTimeout(initInteractiveGlow, 1000);
});

// Alert system
function showAlert(message, type = 'info') {
  // Remove existing alerts
  const existingAlert = document.querySelector('.custom-alert');
  if (existingAlert) {
    existingAlert.remove();
  }
  
  // Create alert element
  const alert = document.createElement('div');
  alert.className = `custom-alert ${type}`;
  alert.innerHTML = `
    <div class="alert-content">
      <span class="alert-icon">${getAlertIcon(type)}</span>
      <span class="alert-message">${message}</span>
      <button class="alert-close" onclick="closeAlert(this)">×</button>
    </div>
  `;
  
  // Add styles
  alert.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: ${getAlertColor(type)};
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideInAlert 0.3s ease;
    max-width: 300px;
  `;
  
  document.body.appendChild(alert);
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    if (alert.parentNode) {
      alert.style.animation = 'slideOutAlert 0.3s ease';
      setTimeout(() => alert.remove(), 300);
    }
  }, 3000);
}

function getAlertIcon(type) {
  const icons = {
    success: '✅',
    warning: '⚠️',
    error: '❌',
    info: '💡'
  };
  return icons[type] || icons.info;
}

function getAlertColor(type) {
  const colors = {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  };
  return colors[type] || colors.info;
}

function closeAlert(button) {
  const alert = button.closest('.custom-alert');
  alert.style.animation = 'slideOutAlert 0.3s ease';
  setTimeout(() => alert.remove(), 300);
}

// Ripple effect for buttons
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');
  
  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }
  
  button.appendChild(circle);
  showAlert('Ripple effect activated!', 'info');
}

// Loading button functionality
function toggleLoading(button) {
  const textSpan = button.querySelector('.btn-text');
  const spinnerSpan = button.querySelector('.btn-spinner');
  
  if (button.classList.contains('loading')) {
    // Stop loading
    button.classList.remove('loading');
    textSpan.style.display = 'inline';
    spinnerSpan.style.display = 'none';
    button.disabled = false;
    showAlert('Loading completed!', 'success');
  } else {
    // Start loading
    button.classList.add('loading');
    textSpan.style.display = 'none';
    spinnerSpan.style.display = 'inline';
    button.disabled = true;
    showAlert('Loading started...', 'info');
    
    // Simulate loading for 2 seconds
    setTimeout(() => {
      if (button.classList.contains('loading')) {
        toggleLoading(button);
      }
    }, 2000);
  }
}

// Counter button functionality
function incrementCounter(button) {
  const badge = button.querySelector('.counter-badge');
  let count = parseInt(badge.textContent) + 1;
  badge.textContent = count;
  
  // Add animation
  badge.style.transform = 'scale(1.2)';
  setTimeout(() => {
    badge.style.transform = 'scale(1)';
  }, 200);
  
  showAlert(`Counter clicked ${count} times!`, 'info');
}

// Toggle button functionality
function toggleButton(button) {
  const textSpan = button.querySelector('.toggle-text');
  
  if (button.classList.contains('active')) {
    button.classList.remove('active');
    textSpan.textContent = 'Enable';
    showAlert('Feature disabled', 'warning');
  } else {
    button.classList.add('active');
    textSpan.textContent = 'Disable';
    showAlert('Feature enabled!', 'success');
  }
}

// Close notification functionality
function closeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.animation = 'slideOutAlert 0.3s ease';
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 300);
  }, 100);
  showAlert('Notification dismissed', 'info');
}

// Add CSS animations for alerts
const alertStyles = document.createElement('style');
alertStyles.textContent = `
  @keyframes slideInAlert {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideOutAlert {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }
  
  .custom-alert .alert-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .alert-close {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    margin-left: auto;
    padding: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .alert-close:hover {
    opacity: 0.8;
  }
`;
document.head.appendChild(alertStyles);

// Progress Ring Animation
function animateProgressRings() {
  const progressRings = document.querySelectorAll('.progress-ring');
  
  progressRings.forEach(ring => {
    const progress = parseInt(ring.dataset.progress);
    const circle = ring.querySelector('.progress-ring-circle');
    const circumference = 2 * Math.PI * 52; // radius = 52
    const offset = circumference - (progress / 100) * circumference;
    
    circle.style.strokeDashoffset = offset;
  });
}

// Progress Bar Animation
function animateProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar-fill');
  
  progressBars.forEach(bar => {
    const width = parseInt(bar.dataset.width);
    setTimeout(() => {
      bar.style.width = width + '%';
    }, 500);
  });
}

// Slider Functionality
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
    slider.addEventListener('mousemove', updateSlider);
    
    // Initialize
    updateSlider();
  });
}

// Toggle Switch Functionality
function toggleSwitch(switchElement) {
  switchElement.classList.toggle('active');
  const label = switchElement.parentElement.querySelector('label').textContent;
  const isActive = switchElement.classList.contains('active');
  
  showAlert(`${label} ${isActive ? 'enabled' : 'disabled'}!`, isActive ? 'success' : 'warning');
}

// Floating Action Button Menu
let fabMenuOpen = false;

function toggleFabMenu() {
  const mainFab = document.querySelector('.main-fab');
  const secondaryFabs = document.querySelectorAll('.secondary-fab');
  
  fabMenuOpen = !fabMenuOpen;
  
  mainFab.classList.toggle('active', fabMenuOpen);
  
  secondaryFabs.forEach(fab => {
    fab.classList.toggle('show', fabMenuOpen);
  });
  
  showAlert(fabMenuOpen ? 'FAB menu opened' : 'FAB menu closed', 'info');
}

// Code Editor Functionality
const codeExamples = {
  python: `# Python Example - Calculate Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Test the function
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`,
  
  javascript: `// JavaScript Example - Array Methods
const numbers = [1, 2, 3, 4, 5];

// Map, filter, and reduce
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((a, b) => a + b, 0);

console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Sum:', sum);`,
  
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML example.</p>
    <button onclick="alert('Hello!')">Click me</button>
</body>
</html>`
};

function initCodeEditor() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const codeEditor = document.getElementById('codeEditor');
  
  // Set initial content
  if (codeEditor) {
    codeEditor.textContent = codeExamples.python;
  }
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all tabs
      tabBtns.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      btn.classList.add('active');
      
      // Update editor content
      const lang = btn.dataset.lang;
      if (codeEditor) {
        codeEditor.textContent = codeExamples[lang];
      }
      
      showAlert(`Switched to ${lang.charAt(0).toUpperCase() + lang.slice(1)}`, 'info');
    });
  });
}

function runCode() {
  const codeEditor = document.getElementById('codeEditor');
  const output = document.getElementById('codeOutput');
  const activeTab = document.querySelector('.tab-btn.active');
  const lang = activeTab.dataset.lang;
  const code = codeEditor.textContent;
  
  // Simulate code execution
  output.textContent = 'Running code...\n';
  
  setTimeout(() => {
    if (lang === 'python') {
      output.textContent = `F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34

Execution completed successfully!`;
    } else if (lang === 'javascript') {
      output.textContent = `Doubled: [2, 4, 6, 8, 10]
Evens: [2, 4]
Sum: 15

Execution completed successfully!`;
    } else if (lang === 'html') {
      output.textContent = `HTML rendered successfully!
Document structure validated.
No errors found.

Page would display:
- Heading: "Hello, World!"
- Paragraph with text
- Interactive button`;
    }
    
    showAlert('Code executed successfully!', 'success');
  }, 1500);
}

function clearOutput() {
  const output = document.getElementById('codeOutput');
  output.textContent = 'Output cleared...';
  showAlert('Output cleared', 'info');
}

// Holographic card interactions
function initHolographicCards() {
  const holographicBtns = document.querySelectorAll('.holographic-btn');
  
  holographicBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.holographic-card');
      const title = card.querySelector('h4').textContent;
      
      // Add a pulse effect
      card.style.transform = 'scale(0.98)';
      setTimeout(() => {
        card.style.transform = 'scale(1)';
      }, 150);
      
      showAlert(`${title} action triggered!`, 'success');
    });
  });
}

// Initialize all new components
function initNewComponents() {
  console.log('Initializing new UI components...');
  
  // Animate progress components on load
  setTimeout(() => {
    animateProgressRings();
    animateProgressBars();
  }, 1000);
  
  initSliders();
  initCodeEditor();
  initHolographicCards();
  
  console.log('New UI components initialized!');
}

// Make new functions globally available
window.toggleSwitch = toggleSwitch;
window.toggleFabMenu = toggleFabMenu;
window.runCode = runCode;
window.clearOutput = clearOutput;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Interactive UI components initialized!');
  
  // Initialize new components with a delay to ensure DOM is ready
  setTimeout(initNewComponents, 500);
});

} // End of browser check
</script>