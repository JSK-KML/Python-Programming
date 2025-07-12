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
        
          
            { text: 'Chapter 1', link: '/lectures/chapter-01' },
            { text: 'Chapter 2', link: '/lectures/chapter-02' },
           // { text: 'Week 3', link: 'lectures/week-03' },
           // { text: 'Week 4', link: 'lectures/week-04' },
           // { text: 'Week 5', link: 'lectures/week-05' },
            //{ text: 'Week 6', link: 'lectures/week-06' },
            //{ text: 'Week 7', link: 'lectures/week-07' },
            //{ text: 'Week 8', link: 'lectures/week-08' },
            //{ text: 'Week 9', link: 'lectures/week-09' },
            //{ text: 'Week 10', link: 'lectures/week-10' },
            //{ text: 'Week 11', link: 'lectures/week-11' },
            //{ text: 'Week 12', link: 'lectures/week-12' },
            //{ text: 'Week 13', link: 'lectures/week-13' },
            //{ text: 'Week 14', link: 'lectures/week-14' },
            //{ text: 'Week 15', link: 'lectures/week-15' },
            //{ text: 'Week 16', link: 'lectures/week-16' },
            //{ text: 'Week 17', link: 'lectures/week-17' }
          
        
      ],
      '/tutorials/' : [

        {
          text : 'Chapter 2',
          collapsed : true,
          items : [
                { text: 'Tutorial 1', link: 'tutorials/chapter-1-tutorial-1'}
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
