// Enhanced Interaction Effects for All Clickable Elements
// Adds click ripple effects, hover enhancements, and magnetic interactions

function initInteractionEffects() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupInteractionEffects);
  } else {
    setupInteractionEffects();
  }
}

// Global ripple effect function
function createRippleEffect(event) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('div');
  ripple.classList.add('ripple-effect');
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  // Remove any existing ripples to avoid accumulation
  const existingRipples = element.querySelectorAll('.ripple-effect');
  existingRipples.forEach(r => r.remove());
  
  element.appendChild(ripple);
  
  // Remove ripple after animation completes
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.remove();
    }
  }, 600);
}

function setupInteractionEffects() {
  console.log('Initializing comprehensive interaction effects...');
  
  // Define all clickable element selectors
  const clickableSelectors = [
    // Standard buttons
    '.btn-primary', '.btn-secondary', '.btn-neutral', '.btn-warning', '.btn-danger',
    '.open-pdf-btn', 'button:not(.no-ripple)', '.button:not(.no-ripple)',
    
    // Python Editor specific buttons
    '.run', '.download', '.fullscreen', '.clear', '.reset', '.tab',
    '.btn', '.font-control-btn', '.theme-toggle',
    
    // Navigation elements
    '.VPSidebarItem .link', '.VPDocOutlineItem .outline-link',
    '.VPNavBarMenuGroup .items .item', '.VPFlyout .items .item',
    'nav a:not(.no-ripple)', '.nav-link:not(.no-ripple)',
    
    // Custom elements
    '.magnetic-card', '.holographic-card', '.feature-card', '.card:not(.no-ripple)',
    '.clickable', '.btn-ripple',
    
    // Custom blocks (tip, warning, etc.)
    '.vp-doc .custom-block.tip', '.vp-doc .custom-block.warning',
    '.vp-doc .custom-block.danger', '.vp-doc .custom-block.info',
    '.vp-doc .custom-block.details'
  ];
  
  // Apply ripple effects to all clickable elements
  clickableSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      // Check if ripple is already attached to avoid duplicates
      if (!element.hasAttribute('data-ripple-attached')) {
        element.setAttribute('data-ripple-attached', 'true');
        element.addEventListener('click', createRippleEffect);
      }
    });
  });
  
  // Enhanced effects for sidebar links
  const sidebarLinks = document.querySelectorAll('.VPSidebarItem .link');
  
  sidebarLinks.forEach(link => {
    // Add clicked class for additional ping effect
    link.addEventListener('click', function(e) {
      this.classList.add('clicked');
      
      // Remove clicked class after animation
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 400);
    });
    
    // Enhanced hover delay for magnetic intensity
    let hoverTimeout;
    let hoverStartTime;
    
    link.addEventListener('mouseenter', function() {
      hoverStartTime = Date.now();
      
      // Gradually increase magnetic intensity over time
      const intensifyGlow = () => {
        const elapsed = Date.now() - hoverStartTime;
        const maxIntensity = 1.0;
        const buildUpTime = 500; // ms
        
        if (elapsed < buildUpTime) {
          const progress = elapsed / buildUpTime;
          const intensity = 0.4 + (maxIntensity - 0.4) * progress;
          this.style.setProperty('--magnetic-intensity', intensity.toString());
          
          hoverTimeout = requestAnimationFrame(intensifyGlow);
        } else {
          this.style.setProperty('--magnetic-intensity', maxIntensity.toString());
        }
      };
      
      intensifyGlow();
    });
    
    link.addEventListener('mouseleave', function() {
      if (hoverTimeout) {
        cancelAnimationFrame(hoverTimeout);
      }
      
      // Reset magnetic intensity
      this.style.setProperty('--magnetic-intensity', '0.4');
    });
  });
  
  // Update effects when new content loads (VitePress navigation)
  if (typeof window !== 'undefined' && window.__VP_ROUTER__) {
    window.__VP_ROUTER__.onAfterRouteChanged = () => {
      setTimeout(setupInteractionEffects, 100);
    };
  }
  
  console.log('Comprehensive interaction effects initialized successfully!');
}

// Initialize when the script loads
initInteractionEffects();

// Make ripple function globally available
if (typeof window !== 'undefined') {
  window.createRippleEffect = createRippleEffect;
}

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initInteractionEffects, setupInteractionEffects, createRippleEffect };
}