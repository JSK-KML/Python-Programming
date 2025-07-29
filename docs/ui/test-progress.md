---
outline: deep
title: Progress Components Test
---

# Progress Components Test

Testing simple progress bars with animations.

<div style="background: var(--vp-c-bg-soft); padding: 20px; border-radius: 12px; margin: 20px 0;">

## 📊 Simple Progress Bars

<div class="progress-item">
  <span>Python Programming: 85%</span>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 85%; background: #3b82f6;"></div>
  </div>
</div>

<div class="progress-item">
  <span>Web Development: 70%</span>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 70%; background: #8b5cf6;"></div>
  </div>
</div>

<div class="progress-item">
  <span>Data Analysis: 60%</span>
  <div class="progress-bar">
    <div class="progress-fill" style="width: 60%; background: #a855f7;"></div>
  </div>
</div>

</div>

<style>
.progress-item {
  margin: 16px 0;
}

.progress-item span {
  display: block;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 2s ease;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
}

.progress-fill::after {
  content: '';
  position: relative;
  display: block;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>