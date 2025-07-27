import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python Programming",
  description: "Course and Labs Informations",
  base: '/Python-Programming/',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/Python-Programming/favicon.svg'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3B82F6'
      }
    ]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
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
          { text: 'Flowgorithm', link: '/installations/flowgorithm' },
          { text: 'Test Animations', link: '/installations/test-animations' }
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
          { text: 'Lab 3', link: '/labs/lab-03' }
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
      '/course/': [
        { text: 'Assessments & Grading', link: '/course/course' },
        { text: 'Schedule & Timeline', link: '/course/schedule' }
      ],
      '/installations/': [
        { text: 'Git Version Control', link: '/installations/git' },
        { text: 'VS Code Editor', link: '/installations/vscode' },
        { text: 'Flowgorithm', link: '/installations/flowgorithm' },
        {
          text: 'Interactive UI Tests',
          collapsed: false,
          items: [
            { text: 'Complete Showcase', link: '/installations/test-animations' },
            { text: 'Progress Components', link: '/installations/test-progress' },
            { text: 'Interactive Sliders', link: '/installations/test-sliders' },
            { text: 'Holographic Cards', link: '/installations/test-holographic' },
            { text: 'Code Editor', link: '/installations/test-code-editor' },
            { text: 'Floating Buttons', link: '/installations/test-floating-buttons' },
            { text: 'Minimal Test', link: '/installations/test-minimal' },
            { text: 'Simple Test', link: '/installations/test-simple' }
          ]
        }
      ],
      '/lectures/': [
        {
          text: 'Core Chapters',
          collapsed: false,
          items: [
            { text: 'Chapter 1: Fundamentals', link: '/lectures/chapter-01' },
            { text: 'Chapter 2: Data Types', link: '/lectures/chapter-02' },
            { text: 'Chapter 3: Control Flow', link: '/lectures/chapter-03' }
          ]
        },
        {
          text: 'Advanced Topics',
          collapsed: true,
          items: [
            { text: 'Functions', link: '/lectures/week-04' },
            { text: 'Lists & Tuples', link: '/lectures/week-05' },
            { text: 'Dictionaries', link: '/lectures/week-06' },
            { text: 'File I/O', link: '/lectures/week-07' },
            { text: 'Error Handling', link: '/lectures/week-08' },
            { text: 'Object-Oriented Programming', link: '/lectures/week-09' },
            { text: 'Modules & Packages', link: '/lectures/week-10' },
            { text: 'Testing', link: '/lectures/week-11' },
            { text: 'Data Analysis', link: '/lectures/week-12' },
            { text: 'Web Development', link: '/lectures/week-13' },
            { text: 'APIs', link: '/lectures/week-14' },
            { text: 'Final Project', link: '/lectures/week-15' },
            { text: 'Review & Exam Prep', link: '/lectures/week-16' },
            { text: 'Final Presentations', link: '/lectures/week-17' }
          ]
        }
      ],
      '/tutorials/': [
        { text: 'Tutorial 1: Basic Syntax', link: '/tutorials/chapter-2-tutorial-1' },
        { text: 'Tutorial 2: Variables & Data', link: '/tutorials/chapter-2-tutorial-2' },
        { text: 'Tutorial 3: Control Structures', link: '/tutorials/chapter-3-tutorial-3' }
      ],
      '/labs/': [
        { text: 'Lab 1: Getting Started', link: '/labs/lab-01' },
        { text: 'Lab 2: Data Structures', link: '/labs/lab-02' },
        { text: 'Lab 3: Advanced Concepts', link: '/labs/lab-03' }
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
