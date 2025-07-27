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
      link: /labs/lab-01

features:
  - title: 🛠️ Installations
    details: This section will guide you step-by-step on how to download and install all the necessary software and tools that we are going to need in this course
  - title: 🧪 Labs
    details: The labs is a collections of structured and guided instructions that we can do together to understand Python concept better
  - title: 📚 Lectures
    details: Comprehensive lecture materials covering Python fundamentals through advanced topics with weekly progression
  - title: ✅ Assessments
    details: Track your progress with practical tests, assignments, and structured evaluation system
---

::: tip 💡 Quick Start
Use the navigation links above to explore labs, installation guides and the course schedule.
:::

<div class="animate-on-scroll">

## 🚀 Quick Start Code Examples

<CodeGroup>
<CodeGroupItem title="Python" active>

```python
# Welcome to CP115 Python Programming!
print("Hello, World!")

# Variables and data types
name = "Student"
age = 18
gpa = 3.75

print(f"Welcome {name}, age {age}, GPA: {gpa}")
```

</CodeGroupItem>
<CodeGroupItem title="Variables">

```python
# Different data types in Python
string_var = "Hello Python"
integer_var = 42
float_var = 3.14159
boolean_var = True
list_var = [1, 2, 3, 4, 5]

print(f"String: {string_var}")
print(f"Integer: {integer_var}")
print(f"Float: {float_var}")
print(f"Boolean: {boolean_var}")
print(f"List: {list_var}")
```

</CodeGroupItem>
<CodeGroupItem title="Functions">

```python
def calculate_grade(score):
    """Calculate letter grade based on score"""
    if score >= 90:
        return 'A'
    elif score >= 80:
        return 'B'
    elif score >= 70:
        return 'C'
    elif score >= 60:
        return 'D'
    else:
        return 'F'

# Test the function
test_score = 85
grade = calculate_grade(test_score)
print(f"Score: {test_score}, Grade: {grade}")
```

</CodeGroupItem>
</CodeGroup>

</div>




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

<div class="animate-on-scroll">

## 📊 Course Progress Overview

::: info 📈 Assessment Breakdown
- **Practical Tests**: 40% (3 tests: 10% + 15% + 15%)
- **Assignment**: 10% 
- **Final Exam**: 50%
:::

</div>

<div class="animate-on-scroll">

## 🎯 Learning Objectives

::: details Click to expand learning goals
By the end of this course, you will be able to:

✅ **Understand Python Fundamentals**
- Variables, data types, and operators
- Control structures (if/else, loops)
- Functions and modules

✅ **Master Data Structures**
- Lists, tuples, dictionaries, and sets
- String manipulation and formatting
- File input/output operations

✅ **Apply Problem-Solving Skills**
- Algorithm development and flowcharts
- Debugging and testing strategies
- Code organization and best practices

✅ **Build Real Projects**
- Interactive programs and games
- Data processing applications
- Object-oriented programming concepts
:::

</div>

<br>
<br>

<div class="animate-on-scroll">

# 👨‍🏫 Course Lecturer

<VPTeamMembers size="small" :members />

</div>

