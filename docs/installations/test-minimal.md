---
outline: deep
title: Minimal Animation Test
---

# Minimal Animation Test

Testing basic HTML rendering in VitePress.

<div style="background: #3b82f6; color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
  <h3>🧪 HTML Test</h3>
  <p>If you can see this styled blue box, HTML rendering is working!</p>
</div>

## Simple Interactive Card

<div class="test-card">
  <h3>Interactive Card</h3>
  <p>Hover over this card to see the effect.</p>
  <button class="test-btn" onclick="alert('Button clicked!')">Click Me</button>
</div>

<style>
.test-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
  transition: all 0.3s ease;
  cursor: pointer;
}

.test-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
  border-color: var(--vp-c-brand-1);
}

.test-btn {
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.test-btn:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
}
</style>