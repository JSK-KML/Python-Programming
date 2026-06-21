---
layout: home

title: Home

hero:
  name: "CP115"
  text: "Python Programming"
  tagline: Labs, tutorials, and everything you need to get through the course.
  actions:
    - theme: brand
      text: Get Started
      link: /labs/lab-01
    - theme: alt
      text: Schedule
      link: /course/schedule

features:
  - title: Labs
    details: Hands-on labs covering core Python concepts, from environment setup and version control through to testing and debugging.
  - title: Tutorials
    details: Practice problems aligned to each chapter, designed to reinforce lecture material and prepare you for assessments.
  - title: Assessments
    details: Practical tests and a final assignment, together worth 50% of your grade. The PSPM final exam covers the remaining 50%.

---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Aiman-Haris.png',
    name: 'Muhammad Aiman Haris',
    title: 'Lecturer',
    org: 'Kolej Matrikulasi Labuan',
    desc: 'Several years of experience teaching programming in Python, Java, and JavaScript. Feel free to reach out via the links below — enjoy the course!',
    links: [
      { icon: 'whatsapp', link: 'https://wasap.my/+60143294625' },
      { icon: 'gmail', link: 'mailto:bm-3570@moe-dl.edu.my' },
      { icon: 'github', link: 'https://github.com/Aiman-Haris' }
    ]
  }
]
</script>

<br>

## Course Lecturer

<VPTeamMembers size="small" :members />
