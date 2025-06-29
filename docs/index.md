---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Home

hero:
  name: "CP115 Python Programming"
  text: "Course and Labs Informations"
  tagline: Structured Python Labs and Exercise
  actions:
    - theme: brand
      text: Installations
      link: /installations/git
    - theme: alt
      text: Labs
      link: /labs/lab01

features:
  - title: Installations
    details: This section will guide you step-by-step on how to download and install all the necessary software and tools that we are going to need in this course
  - title: Labs
    details: The labs is a collections of structured and guided instructions that we can do together to understand Python concept better
---




<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Aiman-Haris.png',
    name: 'Muhammad Aiman Haris',
    title: 'Lecturer',
    org : 'Kolej Matrikulasi Labuan',
    desc : 'I have few years experience in teaching programming using Python, Java and Javascript. If you have any questions, please don’t hesitate to reach out via the link below. Enjoy the course!',
    links: [
      {icon : 'whatsapp', link :'https://wasap.my/+60143294625'},
      { icon: 'gmail', link: 'mailto:bm-3570@moe-dl.edu.my' },
      { icon: 'github', link: 'https://github.com/Aiman-Haris' }
      
    ]
  },

]
</script>

<br>
<br>
<br>
<br>


# Course Lecturer

<VPTeamMembers size="small" :members />

