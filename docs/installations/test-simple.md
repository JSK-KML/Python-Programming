---
outline: deep
title: Test Animations - Simple Version
---

# Test Page - Interactive Features

This is a test page to showcase various interactive animations and features.

<div class="test-container">

## 🎯 Interactive Elements

::: tip ✨ Animated Tips
This is a tip box with custom styling and animations.
:::

::: warning ⚠️ Warning Box
This warning box has enhanced styling and hover effects.
:::

::: danger 🚨 Danger Zone
This danger box showcases error states with animations.
:::

## 📚 Code Examples

<CodeGroup>
<CodeGroupItem title="Python Basic" active>

```python
# Welcome to Python!
name = "Student"
age = 20
print(f"Hello {name}, you are {age} years old!")
```

</CodeGroupItem>
<CodeGroupItem title="Variables">

```python
# Variable examples
text = "Hello World"
number = 42
decimal = 3.14
is_true = True
```

</CodeGroupItem>
<CodeGroupItem title="Calculator">

```python
# Simple calculator
a = 10
b = 5
result = a + b
print(f"{a} + {b} = {result}")
```

</CodeGroupItem>
</CodeGroup>

## 🎨 Enhanced Styling

<div class="feature-cards">
  <div class="feature-card">
    <h3>🛠️ Setup</h3>
    <p>Install and configure your development environment</p>
  </div>
  <div class="feature-card">
    <h3>🧪 Practice</h3>
    <p>Work through interactive coding exercises</p>
  </div>
  <div class="feature-card">
    <h3>🎯 Test</h3>
    <p>Validate your knowledge with quizzes</p>
  </div>
</div>

## 📊 Progress Visualization

<div class="progress-demo">
  <div class="progress-item">
    <span>HTML/CSS</span>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 85%"></div>
    </div>
    <span>85%</span>
  </div>
  
  <div class="progress-item">
    <span>JavaScript</span>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 70%"></div>
    </div>
    <span>70%</span>
  </div>
  
  <div class="progress-item">
    <span>Python</span>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 95%"></div>
    </div>
    <span>95%</span>
  </div>
</div>

</div>

<style scoped>
.test-container {
  padding: 20px;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.2);
  border-color: var(--vp-c-brand-1);
}

.feature-card h3 {
  margin: 0 0 12px 0;
  color: var(--vp-c-brand-1);
}

.feature-card p {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.progress-demo {
  background: var(--vp-c-bg-alt);
  border-radius: 12px;
  padding: 24px;
  margin: 30px 0;
}

.progress-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 16px 0;
}

.progress-item span:first-child {
  min-width: 100px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.progress-item span:last-child {
  min-width: 50px;
  text-align: right;
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.progress-bar {
  flex: 1;
  height: 12px;
  background: var(--vp-c-bg);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  border-radius: 6px;
  transition: width 1s ease-out;
  position: relative;
  overflow: hidden;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -50%; }
  100% { left: 100%; }
}

/* Enhanced tips and warnings */
.vp-doc .custom-block.tip {
  border-left: 4px solid var(--vp-c-brand-1);
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.05));
  transition: all 0.3s ease;
}

.vp-doc .custom-block.tip:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}

.vp-doc .custom-block.warning {
  border-left: 4px solid #fbbf24;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05));
  transition: all 0.3s ease;
}

.vp-doc .custom-block.warning:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.2);
}

.vp-doc .custom-block.danger {
  border-left: 4px solid #ef4444;
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05));
  transition: all 0.3s ease;
}

.vp-doc .custom-block.danger:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
}
</style>