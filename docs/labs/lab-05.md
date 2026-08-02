---
outline: deep
title: Lab 5 - Understanding Python Program Components
---

# Lab 05: Understanding Python Program Components

## Before You Begin

Same as every lab, before you start, make sure your workspace and login are **yours**:

1. Open **your own** cloned folder in **VS Code** (`File` → `Open Folder...`). Many students share the same PC, so confirm the folder belongs to you.
2. In the terminal, log out of any account with `gh auth logout`, then log back in as yourself with `gh auth login`.

Full steps are in [Lab 02 - Before You Begin](./lab-02.md#before-you-begin) if you need a reminder.

## Pull and Update in VS Code

This lab will guide you through identifying and understanding the essential components that make up every **Python** program. Understanding these building blocks is crucial for writing clean, readable, and functional code.

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click [`Pull`](./glossary.md#pull).

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Checklist Before You Proceed

<Checklist title="Please Check Properly">

1. You have logged in to your Github account in the browser.
2. You have logged in to your Github account in the terminal using VS Code.
3. You have sync the repo in you Github account in the browser.
4. You have pull the update into you repo in VS Code.

</Checklist>

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

### Listing Python Keyword <Badge type="warning" text="Task" />

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

### Checking a Type with type()

You do not have to guess which type a value is. The `type()` function will tell you. Add these lines to your `exercise.py` file and run it:

```python
print(type(age))
print(type(temperature))
print(type(student_name))
print(type(is_active))
print(type(nothing))
```

Before you read on, look at what came back for each one and check it matches the comment you wrote beside that variable earlier.

The next pair is more important. Add these two lines, and work out your expected answer before running the file:

```python
print(type(25))
print(type("25"))
```

Now run it and compare the result with what you expected.

The two are not the same type. The first is `<class 'int'>` and the second is `<class 'str'>`, and the only difference between them is a pair of quotes. `25` is a number you can calculate with, while `"25"` is a piece of text that happens to be made of digits.

Now print the two values themselves rather than their types. They appear **identical** on screen, because quotes are never shown in the output. `type()` is the only reliable way to tell one from the other.

### Changing a Type with Casting

When you have the wrong type, you convert it. This is called **casting**, and you do it with `int()`, `float()`, `str()` and `bool()`.

```python
number_text = "25"
print(type(number_text))

real_number = int(number_text)
print(type(real_number))
```

The text `"25"` went in and a genuine `int` came out. Keep this in mind, because in the very next section you will meet a situation where **Python** hands you the wrong type and casting is the only way out of it.

::: tip
`type()` is worth using while you are learning. When a program misbehaves, printing the type of your variables is very often the fastest way to see what went wrong.
:::




## String Functions and Methods

Text is the data type you will handle most often, and **Python** gives you tools to measure a string and to change how it looks. These tools come in two different shapes, and telling them apart matters because they are written differently.

Copy these examples into your `exercise.py` file:

```python
text = "Hello World"

# len() is a function, so the value goes inside the brackets
print(len(text))          # 11

# upper() and lower() are methods, so the value comes before the dot
print(text.upper())       # HELLO WORLD
print(text.lower())       # hello world
```

A **function** is a piece of code somebody has already written for you. You run it by typing its name followed by brackets, and whatever you want it to work on goes **inside** those brackets. You have been using functions since Lab 01 without calling them that, because `print()`, `type()`, `int()`, `float()` and `str()` all work this way.

A **method** is a function that belongs to one particular kind of value. Instead of putting the value inside the brackets, you attach the method to the value with a dot, and the brackets stay empty.

The difference is easiest to see side by side:

```
    len( text )
    ↑    ↑
    │    └─ the value it works on, inside the brackets
    └────── the name of the function


    text . upper()
    ↑      ↑
    │      └─ the name of the method, brackets stay empty
    └───────── the value it works on, before the dot
```

| | Written as | Where the value goes | Example |
|---|---|---|---|
| Function | `name(value)` | inside the brackets | `len(text)` |
| Method | `value.name()` | before the dot | `text.upper()` |

Notice also that `len()` counts **every** character, including the space in the middle of `Hello World`, which is why the answer is `11` and not `10`.

The empty brackets on a method are not optional. Copy this into your `exercise.py` file, and decide whether the two lines will print the same thing before you run it:

```python
text = "Hello World"

print(text.upper())
print(text.upper)
```

Now run it and compare the two lines of output.

They are not the same. The first gives `HELLO WORLD`. The second gives something like `<built-in method upper of str object at 0x000001C...>`.

The brackets are what tell **Python** to actually **run** the method. Without them you have only named it, so what comes back is a description of the method itself rather than the result of using it. This is a common mistake when you are starting out, and it is useful to have seen the output it produces.

### String Immutability

Strings in **Python** are **immutable**, which means that once a string has been created it can never be changed. This has one consequence that is easy to miss.

Copy this into your `exercise.py` file and run it:

```python
text = "hello"
text.upper()
print(text)               # hello
```

The output is `hello`, in small letters, exactly as it started. The `.upper()` did run, and it did produce `HELLO`, but nothing caught the result, so it was thrown away the moment it was created.

This is not a bug. Because the string is immutable, `.upper()` has no power to modify `text` at all. The only thing any string method can do is build a **brand new** string and hand it back to you, and if you do not store it, you lose it.

To keep the new string, assign it to a variable:

```python
text = "hello"
shouted = text.upper()

print(text)               # hello
print(shouted)            # HELLO
```

Both strings now exist at the same time. `shouted` holds the new one, and `text` still holds the original, unchanged.

You can also point the same name at the new string:

```python
text = "hello"
text = text.upper()
print(text)               # HELLO
```

This looks like the string finally changed, but it did not. `text.upper()` built a new string, and then `=` pointed the name `text` at that new string instead of the old one. The original `hello` was never modified. A variable is only a name that refers to a value, so reassigning it moves the name rather than editing the value.

::: tip
Every string method in **Python** behaves this way, including `.lower()`. If a method looks like it did nothing, check whether you stored what it handed back.
:::

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

Input and output statements are how your **Python** programs talk to the person using them. The `input()` function reads what the user types on the keyboard, and the `print()` function puts information back on the screen.

### Reading Input

The text inside the brackets of `input()` is called the **prompt**. It is optional, but without one your program just stops with a blank screen and the user has no idea what you want from them.

You just learned how to ask **Python** what type a value is. Use it here. Copy this into your `exercise.py` file:

```python
age = input("Enter your age: ")
print(age)
print(type(age))
```

Decide on your expected answer before running the file. You are about to type `25`, which is a whole number, so what should `type(age)` report?

Now run it and type `25`.

The value prints back as `25`, which looks correct. The type does not. It reports `<class 'str'>`, not `<class 'int'>`.

`input()` **always** returns a string. It makes no difference that you typed digits — what you received is the text `"25"`, the same `"25"` you compared against `25` in the previous section.

That has a consequence, and this one is also worth predicting. Copy this in:

```python
first = input("First number: ")
second = input("Second number: ")
print(first + second)
```

You are adding `5` and `3`, so the expected answer is `8`. Run it and type `5`, then `3`.

The result is `53`.

**Python** did exactly what it was asked to do. A `+` between two **strings** joins them end to end, and it was never given two numbers to add. Both values are text, so `"5" + "3"` becomes `"53"` for the same reason that `"Hello" + "World"` becomes `"HelloWorld"`.

The fix is casting, which you met in the last section. Convert each value as you read it in:

```python
first = int(input("First number: "))
second = int(input("Second number: "))
print(first + second)
```

Run it again with `5` and `3` and this time you get `8`.

::: warning REMINDER
Use `int()` for whole numbers and `float()` for anything with a decimal point. Forgetting to convert is the most common mistake in this lab, and a nasty one, because your program often still runs. It just quietly gives you the wrong answer.
:::

### Displaying Output

`print()` can display as many values as you like. By default it puts a single space between them, and it moves to a new line once it finishes.

Both of those defaults can be changed. `sep` sets what goes **between** the values, and `end` sets what goes **after** the last one. Copy this in and run it:

```python
print("Hello", "Python", "World")
print("Hello", "Python", "World", sep="-")

print("Hello", end=" ")
print("World")
```

The first line gives `Hello Python World`. The second gives `Hello-Python-World`. The last two lines both print on the **same** line, giving `Hello World`, because `end=" "` replaced the usual new line with a space.

Change `sep="-"` to `sep=" : "` and run it again to watch the spacing follow your instruction.

### Building a Sentence with f-strings

Joining a sentence together out of separate pieces works, but look at how much punctuation it takes:

```python
name = "Alice"
age = 25
print("My name is " + name + " and I am " + str(age) + " years old.")
```

Every piece of text needs its own quotes, every join needs a `+`, and `age` needs `str()` wrapped around it because a number cannot be joined to a string.

An **f-string** does the same job in one piece. Put the letter `f` immediately before the opening quote, write your sentence normally, and drop any variable you want straight into it inside curly braces `{ }`:

```python
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old.")
```

Run both versions. They print exactly the same thing:

```
My name is Alice and I am 25 years old.
```

But the f-string has no `+`, no extra quotes and no `str()`. **Python** replaces `{name}` and `{age}` with their values and turns the number into text for you.

Now delete the `f` from in front of the quote and run it one more time. You get this:

```
My name is {name} and I am {age} years old.
```

Without the `f` it is just an ordinary piece of text, and the braces print exactly as you typed them. That one letter is the whole difference.

::: tip
You are not limited to a plain variable inside the braces. Try `print(f"{name.upper()} has {len(name)} letters")`, which gives `ALICE has 5 letters`. **Python** works out whatever is inside the braces first, then drops the answer into your sentence.
:::

## Exercise 1: Student Information System <Badge type="warning" text="Task" />

Create a new file called `exercise1.py` in the `/labs/lab05/` directory. This exercise combines **variables**, **data types**, and **input/output statements**.

Write a program that:
1. Asks the user for their name, age, and course code
2. Stores this information in appropriately named variables
3. Displays the student information and shows the data types


## Exercise 2: Circle Calculator <Badge type="warning" text="Task" />

Create a new file called `exercise2.py` in the `/labs/lab05/` directory. This exercise combines **import statements**, **variables**, and **data types**.

Write a program that:
1. Imports the `math` module
2. Takes a radius of circle from the user
3. Print the area and circumference of the circle

## Exercise 3: Random Student Selector <Badge type="warning" text="Task" />

Create a new file called `exercise3.py` in the `/labs/lab05/` directory. This exercise combines **import statements**, **variables**, and **input/output statements**.

Write a program that:
1. Imports the `random` module
2. Takes the student's class name from the user
3. Generates a random number and displays class information

## Exercise 4: Shopping Cost Calculator <Badge type="warning" text="Task" />

Create a new file called `exercise4.py` in the `/labs/lab05/` directory. This exercise combines **variables**, **data types**, and **input/output statements**.

Write a program that:
1. Takes item name and price from the user
2. Creates variables for quantity (3 items) and tax rate (6%)
3. Calculates and displays subtotal, tax amount, and total cost

## Exercise 5: Average Score Calculator <Badge type="warning" text="Task" />

Create a new file called `exercise5.py` in the `/labs/lab05/` directory. This exercise combines **variables**, **data types**, and **input/output statements**.

Write a program that:
1. Takes three test scores from the user
2. Calculates the total score and average score
3. Displays all individual scores, total, and average

## Exercise 6: Time Converter <Badge type="warning" text="Task" />

Create a new file called `exercise6.py` in the `/labs/lab05/` directory. This exercise combines **variables**, **data types**, and **input/output statements**.

Write a program that:
1. Takes time in minutes from the user
2. Converts minutes to hours and remaining minutes
3. Displays the original minutes and converted time format

## Exercise 7: Advanced Math Operations <Badge type="warning" text="Task" />

Create a new file called `exercise7.py` in the `/labs/lab05/` directory. This exercise combines **import statements**, **variables**, and **data types**.

Write a program that:
1. Imports the `math` module
2. Takes one number from the user
3. Calculates and displays: square root, square (power of 2), cube (power of 3), and sine value

## Commit and Push Your Work

After completing all the exercises, save all your files and commit them to your repository. Make sure your files are properly saved in the `/labs/lab05/` directory, including `exercise.py`, `exercise1.py`, `exercise2.py`, `exercise3.py`, `exercise4.py`, `exercise5.py`, `exercise6.py`, and `exercise7.py`.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 5: Python Program Components with Exercises", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully and that any automated tests pass.
