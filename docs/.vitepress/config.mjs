import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python Programming",
  description: "Course and Labs Informations",
  base: '/Python-Programming/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },

      { text: 'Course Informations', link: '/course/course',
        activeMatch: '^/course/' },
      { text: 'Installations', link: '/installations/git',
        activeMatch: '^/installations/' },
      { text: 'Tutorials', link: '/tutorials/chapter-2-tutorial-1',
        activeMatch: '^/tutorials/' },
      { text: 'Labs', link: '/labs/lab-01',
        activeMatch: '^/labs/' },
      { text: 'Lectures', link: '/lectures/chapter-01',
        activeMatch: '^/lectures/' }

    ],

    sidebar: {
      '/labs/' : [

        {
          text : 'Labs',
          collapsed : true,
          items : [
            {
              text: 'Lab 1',
              link : '/labs/lab-01'
            },
            {
              text: 'Lab 2',
              link : '/labs/lab-02'
            },
            {
              text: 'Lab 3',
              link : '/labs/lab-03'
            }
          ]
        }
        
      ],
      '/installations/' : [
        {
          text: 'Git',
          link : '/installations/git'
        },
        {
          text: 'VS Code',
          link : '/installations/vscode'
        },
        {
          text: 'Flowgorithm',
          link : '/installations/flowgorithm'
        }
      ],
      '/course/' : [
        {
          text: 'Assessments',
          link: '/course/course'
        },
        {
          text: 'Schedule',
          link: '/course/schedule'
        }
      ],
      '/lectures/': [
        { 
          text: 'Chapter 1', 
          link: '/lectures/chapter-01' 
        },
        { 
          text: 'Chapter 2', 
          link: '/lectures/chapter-02' 
        },
        { 
          text: 'Chapter 3', 
          link: '/lectures/chapter-03' 
        }
        
      ],
      '/tutorials/' : [

        {
          text : 'Chapter 2',
          collapsed : false,
          items : [
                { 
                  text: 'Tutorial 1', 
                  link: '/tutorials/chapter-2-tutorial-1'
                },
                { 
                  text: 'Tutorial 2', 
                  link: '/tutorials/chapter-2-tutorial-2'
                }
          ]
        }
        
      ]
    },
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JSK-KML/CP115-Class-Repo' }
    ],

    footer: {
      message: 'Released under the MIT License. All rights reserved.',
      copyright: 'Copyright © 2025-Present Muhammad Aiman Haris'
    },

    search: {
      provider: 'local',
      
    }
  }
})
