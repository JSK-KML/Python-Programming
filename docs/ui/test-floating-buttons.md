---
outline: deep
title: Floating Action Buttons Test
---

# Floating Action Buttons Test

Testing floating action buttons with magnetic hover effects and expandable menus.

## 🚀 FAB Components

<div class="fab-showcase">
  <h3>Floating Action Buttons</h3>
  <p>Click the main blue button in the bottom-right corner to expand the menu. Hover over buttons to see magnetic effects.</p>
  
  <div class="demo-area">
    <p>This area simulates page content. The floating action buttons should appear fixed in the bottom-right corner.</p>
    <div class="content-block">Sample content block 1</div>
    <div class="content-block">Sample content block 2</div>
    <div class="content-block">Sample content block 3</div>
  </div>
</div>

<!-- Floating Action Buttons -->
<div class="fab-container">
  <div class="fab main-fab" onclick="toggleFabMenu()">
    <span class="fab-icon">+</span>
    <div class="fab-tooltip">Quick Actions</div>
  </div>
  
  <div class="fab secondary-fab fab-1" onclick="showFabAlert('Create new document!')">
    <span class="fab-icon">📄</span>
    <div class="fab-tooltip">New Document</div>
  </div>
  
  <div class="fab secondary-fab fab-2" onclick="showFabAlert('Upload files!')">
    <span class="fab-icon">📁</span>
    <div class="fab-tooltip">Upload</div>
  </div>
  
  <div class="fab secondary-fab fab-3" onclick="showFabAlert('Send message!')">
    <span class="fab-icon">💬</span>
    <div class="fab-tooltip">Message</div>
  </div>
  
  <div class="fab secondary-fab fab-4" onclick="showFabAlert('Open settings!')">
    <span class="fab-icon">⚙️</span>
    <div class="fab-tooltip">Settings</div>
  </div>
</div>

<style>
.fab-showcase {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 32px;
  margin: 32px 0;
  text-align: center;
}

.demo-area {
  margin: 20px 0;
  min-height: 300px;
  position: relative;
}

.content-block {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 20px;
  margin: 16px 0;
  color: var(--vp-c-text-2);
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
if (typeof window !== 'undefined') {
  let fabMenuOpen = false;

  function toggleFabMenu() {
    const mainFab = document.querySelector('.main-fab');
    const secondaryFabs = document.querySelectorAll('.secondary-fab');
    
    fabMenuOpen = !fabMenuOpen;
    
    if (mainFab) {
      mainFab.classList.toggle('active', fabMenuOpen);
    }
    
    secondaryFabs.forEach(fab => {
      fab.classList.toggle('show', fabMenuOpen);
    });
    
    showFabAlert(fabMenuOpen ? 'FAB menu opened' : 'FAB menu closed');
  }

  function showFabAlert(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #3b82f6;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1001;
      font-size: 14px;
      animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }, 2000);
  }

  window.toggleFabMenu = toggleFabMenu;
  window.showFabAlert = showFabAlert;

  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(100%);
      }
    }
  `;
  document.head.appendChild(style);
}
</script>