// Magnetic Glow Mouse Tracking for VitePress Sidebar
function initMagneticGlow() {
  const initSidebarGlow = () => {
    const sidebarItems = document.querySelectorAll('.VPSidebarItem .link')
    
    sidebarItems.forEach(item => {
      // Set glow colors based on sidebar section
      const sidebarContainer = item.closest('.VPSidebar')
      const currentPath = window.location.pathname
      
      // Use blue glow for all sections
      let glowColor = '59, 130, 246' // Blue for all sections
      
      item.style.setProperty('--glow-color', glowColor)
      
      // Mouse move handler for glow following
      const handleMouseMove = (e) => {
        const rect = item.getBoundingClientRect()
        const mouseX = ((e.clientX - rect.left) / rect.width) * 100
        const mouseY = ((e.clientY - rect.top) / rect.height) * 100
        
        // Clamp values to prevent glow from going outside
        const clampedX = Math.max(0, Math.min(100, mouseX))
        const clampedY = Math.max(0, Math.min(100, mouseY))
        
        item.style.setProperty('--mouse-x', `${clampedX}%`)
        item.style.setProperty('--mouse-y', `${clampedY}%`)
      }
      
      // Mouse leave handler to reset position
      const handleMouseLeave = () => {
        item.style.setProperty('--mouse-x', '50%')
        item.style.setProperty('--mouse-y', '50%')
      }
      
      // Remove existing listeners to prevent duplicates
      item.removeEventListener('mousemove', handleMouseMove)
      item.removeEventListener('mouseleave', handleMouseLeave)
      
      // Add new listeners
      item.addEventListener('mousemove', handleMouseMove)
      item.addEventListener('mouseleave', handleMouseLeave)
    })
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebarGlow)
  } else {
    initSidebarGlow()
  }
  
  // Re-initialize on route changes (VitePress SPA navigation)
  if (typeof window !== 'undefined' && window.addEventListener) {
    // VitePress route change detection
    let lastPath = window.location.pathname
    
    const checkForRouteChange = () => {
      if (window.location.pathname !== lastPath) {
        lastPath = window.location.pathname
        // Delay to ensure DOM is updated
        setTimeout(initSidebarGlow, 100)
      }
    }
    
    // Check for route changes periodically
    setInterval(checkForRouteChange, 500)
    
    // Also check on popstate (back/forward navigation)
    window.addEventListener('popstate', () => {
      setTimeout(initSidebarGlow, 100)
    })
  }
}

// Auto-initialize when script loads
initMagneticGlow()

export { initMagneticGlow }