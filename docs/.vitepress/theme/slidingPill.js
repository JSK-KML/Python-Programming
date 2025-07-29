// Sliding Pill Indicator for Sidebar Active Items
// This script creates a smooth sliding pill that follows the active sidebar item

function initSlidingPill() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSlidingPill);
  } else {
    setupSlidingPill();
  }
}

function setupSlidingPill() {
  console.log('Initializing sliding pill indicator...');
  
  // Find the sidebar container
  const sidebar = document.querySelector('.VPSidebar');
  if (!sidebar) {
    console.log('Sidebar not found, retrying in 500ms...');
    setTimeout(setupSlidingPill, 500);
    return;
  }

  // Add the has-active class to enable the pill
  sidebar.classList.add('has-active');
  
  // Function to update pill position
  function updatePillPosition() {
    const activeItem = document.querySelector('.VPSidebarItem.is-active .link');
    const pillIndicator = sidebar.querySelector('::before');
    
    if (activeItem) {
      console.log('Active item found, updating pill position');
      
      // Get the position of the active item relative to the sidebar
      const sidebarRect = sidebar.getBoundingClientRect();
      const activeRect = activeItem.getBoundingClientRect();
      
      // Calculate the relative position
      const relativeTop = activeRect.top - sidebarRect.top + sidebar.scrollTop;
      
      // Update the pill position using CSS custom properties
      sidebar.style.setProperty('--pill-top', `${relativeTop}px`);
      
      // Ensure the pill is visible
      const pillBefore = window.getComputedStyle(sidebar, '::before');
      if (pillBefore.opacity === '0') {
        sidebar.classList.add('has-active');
      }
    } else {
      console.log('No active item found');
      sidebar.classList.remove('has-active');
    }
  }
  
  // Initial position update
  setTimeout(updatePillPosition, 100);
  
  // Update on route changes (VitePress navigation)
  if (typeof window !== 'undefined' && window.__VP_ROUTER__) {
    window.__VP_ROUTER__.onAfterRouteChanged = () => {
      setTimeout(updatePillPosition, 100);
    };
  }
  
  // Update on page load and navigation events
  window.addEventListener('load', updatePillPosition);
  document.addEventListener('DOMContentLoaded', updatePillPosition);
  
  // Create a mutation observer to watch for changes in active states
  const observer = new MutationObserver((mutations) => {
    let shouldUpdate = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && 
          mutation.attributeName === 'class' &&
          mutation.target.classList.contains('VPSidebarItem')) {
        shouldUpdate = true;
      }
      
      // Also watch for new sidebar items being added
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && 
              (node.classList?.contains('VPSidebarItem') || 
               node.querySelector?.('.VPSidebarItem'))) {
            shouldUpdate = true;
          }
        });
      }
    });
    
    if (shouldUpdate) {
      setTimeout(updatePillPosition, 50);
    }
  });
  
  // Start observing
  observer.observe(sidebar, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
  });
  
  // Update on window resize
  window.addEventListener('resize', () => {
    setTimeout(updatePillPosition, 100);
  });
  
  console.log('Sliding pill indicator initialized successfully!');
}

// Initialize when the script loads
initSlidingPill();

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initSlidingPill, setupSlidingPill };
}