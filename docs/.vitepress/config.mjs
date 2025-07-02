import { defineConfig } from 'vitepress'
import Theme from './theme'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python Programming",
  description: "Course and Labs Informations",
  base: '/Python-Programming/',
  theme: Theme,
  themeConfig: {
    logo: '/assets/images/profile.jpeg',
    heroImage: '/assets/images/profile.jpeg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Course Informations', link: '/course/course' },
      { text: 'Installations', link: '/installations/git' },
      { text: 'Labs', link: '/labs/lab-01' }
    ],

    sidebar: {
      '/labs/' : [

        {
          text : 'Labs',
          collapsed : true,
          items : [
            {
              text: 'Lab 1',
              link : 'labs/lab-01'
            },
            {
              text: 'Lab 2',
              link : 'labs/lab-02'
            }
          ]
        }
        
      ],
      '/installations/' : [
        {
          text: 'Git',
          link : 'installations/git'
        },
        {
          text: 'VS Code',
          link : 'installations/vscode'
        },
        {
          text: 'Flowgorithm',
          link : 'installations/flowgorithm'
        }
      ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JSK-KML/CP115-Class-Repo' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-Present Muhammad Aiman Haris'
    },

    search: {
      provider: 'local',
      
    }
  }
})
