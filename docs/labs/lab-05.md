---
outline: deep
title: Lab 5 - Understanding Python Program Components
---

# Lab 05: Understanding Python Program Components

## Pull and Update in VS Code

This lab will guide you through identifying and understanding the essential components that make up every **Python** program. Understanding these building blocks is crucial for writing clean, readable, and functional code.

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Introduction to Python Program Components

Understanding Python's basic components is like learning the vocabulary and grammar of the **Python** language. Just as you need to understand words, punctuation, and sentence structure to write effectively in English, you need to understand these programming components to write effective **Python** code.

In this lab, we'll explore each component through  examples and exercises.

## Identifiers and Variables

Identifiers are the names we give to elements in our **Python** programs. Think of them as labels that help us identify and reference different parts of our code. Variables are a type of identifier that stores data values that can change during program execution.

The usage of variables is that they allow us to store, retrieve, and manipulate data throughout our program's execution.

Launch **VS Code** and open the `exercise.py` file in `/labs/lab05/`. Let's start by exploring identifiers and variables.

```python
# Examples of valid identifiers and variables
student_name = "Alice"
age = 20
total_score = 95.5
is_enrolled = True
course_code = "CP115"

# Examples of identifier naming conventions
firstName = "John"        # camelCase (less common in Python)
first_name = "Jane"       # snake_case (Python convention)
MAXIMUM_ATTEMPTS = 3      # UPPER_CASE for constants
```

Notice how each variable name follows specific rules. **Python** identifiers must start with **a letter or underscore, can contain letters, numbers, and underscores, but cannot start with a number or contain spaces**.

The naming convention in **Python** typically uses lowercase letters with underscores separating words, known as snake_case. Don't worry too much about the snake_case, we will learn more about this in our lecture.

Variables in **Python** are dynamically typed, meaning you don't need to declare their type explicitly. The **Python** interpreter determines the type based on the value you assign. This flexibility makes **Python** code more readable and easier to write.


::: tip
Choose meaningful variable names that clearly describe what the variable represents. `student_grade` is much better than `sg` or `x`.
:::

## Reserved Words and Keywords

**Python** has a set of reserved words, also called keywords, that have special meaning in the language. These words cannot be used as identifiers because **Python** has already assigned specific functions to them. Understanding these keywords is essential because they form the foundation of **Python**'s syntax and control structures.

Some of the most commonly used **Python** keywords include `if`, `else`, `while`, `for`, `def`, `class`, `import`, `from`, `return`, `True`, `False`, `None`, `and`, `or`, `not`, `in`, `is`, `try`, `except`, `finally`, `with`, `as`, `break`, `continue`, `pass`, `global`, `nonlocal`, `lambda`, `yield`, and `del`.


These keywords are highlighted differently in **VS Code** because the editor recognizes them as special **Python** syntax. Notice how **VS Code** uses color coding to help you identify different types of code elements. Keywords typically appear in a different color than variables or strings.

### Listing Python Keyword <Badge type="tip" text="Task" />

Copy this code into your `exercise.py` file:

```python
# Let's see Python keywords
import keyword
print(keyword.kwlist)
```

To run this code, click the ▶ at the top right corner of **VS Code**. This shows you all the **Python** keywords. Don't worry about understanding the `import` or how this works - just run it and see what words **Python** considers special. Do you recognize any of these words?


## Data Types

**Python** supports several built-in data types that allow you to work with different kinds of information. Understanding data types is crucial because different types of data require different operations and have different behaviors in your programs.

The fundamental data types in **Python** include integers for whole numbers, floats for decimal numbers, strings for text, booleans for true/false values, and more complex types like lists, tuples, dictionaries, and sets for storing collections of data.

Copy these data type examples into your `exercise.py` file:

```python
# Numeric data types
age = 21                    # int (integer)
height = 5.9               # float (floating-point number)
temperature = -15.5        # float (can be negative)

# String data type
student_name = "Muhammad Ali"    # str (string)
course_title = 'Python Programming'  # str (single or double quotes)
description = """This is a multi-line
string that spans several lines."""   # str (triple quotes)

# Boolean data type
is_active = True           # bool (boolean)
has_submitted = False      # bool (boolean).

# Special data type
nothing = None             # NoneType (represents absence of value)
```

Each data type has specific characteristics and uses. Integers are perfect for counting and indexing, floats handle decimal calculations, strings manage text data, and booleans control logical operations. Collections like lists and dictionaries allow you to organize related data together.

**Python** provides built-in functions to check and convert between data types. The `type()` function tells you what type a variable is, while functions like `int()`, `float()`, `str()`, and `bool()` can convert between types when possible.

```python
## Try this
print(type(age))
print(type(temperature))
print(type(student_name))
print(type(is_active))
print(type(nothing))

```




## Import Statements

Import statements allow you to use code from other **Python** modules and libraries. **Python**'s strength comes from its extensive standard library and the big ecosystem of third-party packages.

There are several ways to import modules in **Python**. You can import entire modules or import specific functions or classes from modules.

Copy these different types of import examples into your `exercise.py` file.


```python
# Import entire modules
import math
import random
import datetime

# Using imported modules
circle_area = math.pi * (5 ** 2)
random_number = random.randint(1, 100)
current_date = datetime.date.today()

# Import specific functions from modules
from math import sqrt, pow, sin, cos
from random import choice, shuffle
from datetime import datetime, timedelta

# Using imported functions directly (no module prefix needed)
square_root = sqrt(25)
power_result = pow(2, 8)
random_choice = choice(['apple', 'banana', 'cherry'])


```

Different import styles serve different purposes. Importing entire modules keeps the namespace clean and makes it clear where functions come from. Importing specific functions can make your code more readable when you use certain functions frequently. 

The placement of import statements matters. **Python** convention places all imports at the top of the file, after any module comments and docstrings but before anything else. To sum up, just put it at the top of the file, whether you are going to use it early on or later.


## Input and Output Statements

Input and output statements are how your **Python** programs communicate with users. The `input()` function captures user input from the keyboard, while the `print()` function displays output to the screen. 

The `input()` function always returns a string, regardless of what the user types. If you need numeric input, you must convert the string to the appropriate numeric type using functions like `int()` or `float()`. The `print()` function can display multiple values and offers various formatting options.

Copy this example into your `exercise.py` file

```python
# Basic input and output
print("Welcome to the Grade Calculator!")
print("This program will calculate your course grade.")

# Getting user input (always returns a string)
student_name = input("Enter your name: ")
course_name = input("Enter the course name: ")

# Getting numeric input requires conversion
assignment_score = float(input("Enter your assignment score (0-100): "))
exam_score = float(input("Enter your exam score (0-100): "))
participation_score = float(input("Enter your participation score (0-100): "))

# Calculating final grade
final_grade = (assignment_score * 0.4) + (exam_score * 0.5) + (participation_score * 0.1)

# Formatted output using string concatenation
print()
print("Student: " + student_name)
print("Course: " + course_name)
print("Final Grade: " + str(final_grade) + "%")

```




## Exercise 1: Student Information System <Badge type="tip" text="Task" />

Create a new file called `exercise1.py` in the `/labs/lab05/` directory. This exercise combines **variables**, **data types**, and **input/output statements**.

Write a program that:
1. Asks the user for their name, age, and course code
2. Stores this information in appropriately named variables
3. Displays the student information and shows the data types


## Exercise 2: Circle Calculator <Badge type="tip" text="Task" />

Create a new file called `exercise2.py` in the `/labs/lab05/` directory. This exercise combines **import statements**, **variables**, and **data types**.

Write a program that:
1. Imports the `math` module
2. Takes a radius of circle from the user
3. Print the area and circumference of the circle

## Exercise 3: Random Student Selector <Badge type="tip" text="Task" />

Create a new file called `exercise3.py` in the `/labs/lab05/` directory. This exercise combines **import statements**, **variables**, and **input/output statements**.

Write a program that:
1. Imports the `random` module
2. Takes the student's class name from the user
3. Generates a random number and displays class information

## Exercise 4: Shopping Cost Calculator <Badge type="tip" text="Task" />

Create a new file called `exercise4.py` in the `/labs/lab05/` directory. This exercise combines **variables**, **data types**, and **input/output statements**.

Write a program that:
1. Takes item name and price from the user
2. Creates variables for quantity (3 items) and tax rate (6%)
3. Calculates and displays subtotal, tax amount, and total cost

## Exercise 5: Average Score Calculator <Badge type="tip" text="Task" />

Create a new file called `exercise5.py` in the `/labs/lab05/` directory. This exercise combines **variables**, **data types**, and **input/output statements**.

Write a program that:
1. Takes three test scores from the user
2. Calculates the total score and average score
3. Displays all individual scores, total, and average

## Exercise 6: Time Converter <Badge type="tip" text="Task" />

Create a new file called `exercise6.py` in the `/labs/lab05/` directory. This exercise combines **variables**, **data types**, and **input/output statements**.

Write a program that:
1. Takes time in minutes from the user
2. Converts minutes to hours and remaining minutes
3. Displays the original minutes and converted time format

## Exercise 7: Advanced Math Operations <Badge type="tip" text="Task" />

Create a new file called `exercise7.py` in the `/labs/lab05/` directory. This exercise combines **import statements**, **variables**, and **data types**.

Write a program that:
1. Imports the `math` module
2. Takes one number from the user
3. Calculates and displays: square root, square (power of 2), cube (power of 3), and sine value

## Commit and Push Your Work

After completing all the exercises, save all your files and commit them to your repository. Make sure your files are properly saved in the `/labs/lab05/` directory, including `exercise.py`, `exercise1.py`, `exercise2.py`, `exercise3.py`, `exercise4.py`, `exercise5.py`, `exercise6.py`, and `exercise7.py`.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 5: Python Program Components with Exercises", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully and that any automated tests pass.
