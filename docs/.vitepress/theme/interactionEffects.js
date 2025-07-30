// Enhanced Interaction Effects for Sidebar
// Adds click ripple effects and hover delay enhancements

function initInteractionEffects() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupInteractionEffects);
  } else {
    setupInteractionEffects();
  }
}

function setupInteractionEffects() {
  console.log('Initializing interaction effects...');
  
  // Find all sidebar links
  const sidebarLinks = document.querySelectorAll('.VPSidebarItem .link');
  
  sidebarLinks.forEach(link => {
    // Add click ripple effect
    link.addEventListener('click', function(e) {
      // Add clicked class for ping effect
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
  
  console.log('Interaction effects initialized successfully!');
}

// Initialize when the script loads
initInteractionEffects();

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initInteractionEffects, setupInteractionEffects };
}