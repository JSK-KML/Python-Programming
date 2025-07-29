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
      { text: 'Assessments', link: '/assessments/lab-test-1'},

      { 
        text: 'Course Informations', 
        items: [
          { text: 'Assessments', link: '/course/course' },
          { text: 'Schedule', link: '/course/schedule' }
        ],
        activeMatch: '^/course/' 
      },
      { 
        text: 'Installations', 
        activeMatch: '^/installations/' ,
        items: [
          { text: 'Git', link: '/installations/git' },
          { text: 'VS Code', link: '/installations/vscode' },
          { text: 'Flowgorithm', link: '/installations/flowgorithm' }
        ]
      },
      { 
        text: 'Tutorials', 
        items: [
          { text: 'Tutorial 1', link: '/tutorials/chapter-2-tutorial-1' },
          { text: 'Tutorial 2', link: '/tutorials/chapter-2-tutorial-2' },
          { text: 'Tutorial 3', link: '/tutorials/chapter-3-tutorial-3' }
        ],
        activeMatch: '^/tutorials/' 
      },
      { 
        text: 'Labs', 
        items: [
          { text: 'Lab 1', link: '/labs/lab-01' },
          { text: 'Lab 2', link: '/labs/lab-02' },
          { text: 'Lab 3', link: '/labs/lab-03' },
          { text: 'Lab 4', link: '/labs/lab-04'}
        ],
        activeMatch: '^/labs/' 
      },
      { text: 'Lectures', 
        items: [
          { text: 'Chapter 1', link: '/lectures/chapter-01' },
          { text: 'Chapter 2', link: '/lectures/chapter-02' },
          { text: 'Chapter 3', link: '/lectures/chapter-03' }
        ],
        activeMatch: '^/lectures/' 
      }

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
            },
             { 
               text: 'Lab 4', 
               link: '/labs/lab-04'
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
                  text: 'Tutorial 1', 
                  link: '/tutorials/chapter-2-tutorial-1'
                },
                { 
                  text: 'Tutorial 2', 
                  link: '/tutorials/chapter-2-tutorial-2'
                },
                { 
                  text: 'Tutorial 3', 
                  link: '/tutorials/chapter-3-tutorial-3'
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
