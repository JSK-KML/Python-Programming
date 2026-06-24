import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import StudyHighlighter from './components/StudyHighlighter.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    // Render the default layout, then mount the highlighter alongside it.
    // The component decides for itself whether to activate (frontmatter opt-in).
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(StudyHighlighter)
    })
  },
  enhanceApp({ app }) {
    app.component('StudyHighlighter', StudyHighlighter)
  }
}
