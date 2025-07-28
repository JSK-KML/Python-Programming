---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: Home

hero:
  name: "CP115 Python Programming"
  text: "Course and Lab Information"
  tagline: Structured Python Labs and Exercises
  actions:
    - theme: brand
      text: Installations
      link: /installations/git
    - theme: alt
      text: Labs
      link: /labs/lab-01

features:
  - title: Installations
    details: This section will guide you step-by-step on how to download and install all the necessary software and tools that we are going to need in this course
  - title: Labs
    details: The labs are a collection of structured and guided instructions that we can do together to understand Python concepts better
---

::: tip
Use the navigation links above to explore labs, installation guides and the course schedule.
:::

<CodeGroup>
<CodeGroupItem title="Python" active>

```python
print("Hello, World!")
```

</CodeGroupItem>
<CodeGroupItem title="JavaScript">

```js
console.log("Hello, World!")
```

</CodeGroupItem>
</CodeGroup>




<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/Aiman-Haris.png',
    name: 'Muhammad Aiman Haris',
    title: 'Lecturer',
    org : 'Kolej Matrikulasi Labuan',
    desc : 'I have several years of experience in teaching programming using **Python**, **Java** and **JavaScript**. If you have any questions, please don\'t hesitate to reach out via the link below. Enjoy the course!',
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

