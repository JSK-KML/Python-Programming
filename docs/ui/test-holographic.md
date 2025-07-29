---
outline: deep
title: Holographic Cards Test
---

# Holographic Cards Test

Testing simple cards with animated borders and hover effects.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">

<div class="holo-card">
  <div class="card-icon">🚀</div>
  <h3>Launch Project</h3>
  <p>Deploy your application with beautiful animations.</p>
  <button class="holo-btn" onclick="alert('Deploy clicked!')">Deploy Now</button>
</div>

<div class="holo-card">
  <div class="card-icon">⚡</div>
  <h3>Performance</h3>
  <p>Optimize your code with smooth transitions.</p>
  <button class="holo-btn" onclick="alert('Optimize clicked!')">Optimize</button>
</div>

<div class="holo-card">
  <div class="card-icon">🎨</div>
  <h3>Design System</h3>
  <p>Create stunning interfaces with components.</p>
  <button class="holo-btn" onclick="alert('Explore clicked!')">Explore</button>
</div>

</div>

<style>
.holo-card {
  background: var(--vp-c-bg-soft);
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  background-image: linear-gradient(var(--vp-c-bg-soft), var(--vp-c-bg-soft)), 
                    linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #8a2be2);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}

.holo-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.2);
  border-image: linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #8a2be2) 1;
  animation: rainbow-border 2s linear infinite;
}

@keyframes rainbow-border {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

.card-icon {
  font-size: 32px;
  margin-bottom: 16px;
  display: block;
}

.holo-card h3 {
  margin: 0 0 12px 0;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.holo-card p {
  margin: 0 0 20px 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.holo-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.holo-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
</style>