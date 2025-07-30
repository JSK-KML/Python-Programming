import DefaultTheme from 'vitepress/theme'
import MagneticGlow from './components/MagneticGlow.vue'
import SidebarMagneticItem from './components/SidebarMagneticItem.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Register magnetic glow components globally
    app.component('MagneticGlow', MagneticGlow)
    app.component('SidebarMagneticItem', SidebarMagneticItem)
  },
  setup() {
    // Initialize magnetic glow effects on client side
    if (typeof window !== 'undefined') {
      import('./magneticGlow.js')
      import('./interactionEffects.js')
    }
  }
}