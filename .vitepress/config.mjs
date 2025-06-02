import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python Programming",
  description: "Course and Labs Informations",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Labs', link: '/labs/lab-01' }
    ],

    sidebar: {
      '/labs/' : [
        {
          text: 'Labs',
          items: [
            { text: 'Index', 
              collapsed : true,
              items : [ 
              {
                text : 'lab01', link :'/labs/lab-01'
              },
              {
                text : 'lab02', link :'/labs/lab-01'
              } 
                
              ] },
            { text: 'One', link: '/labs/lab-02' },
            { text: 'Two', link: '/labs/lab-02' }
          ]
        }
      ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
