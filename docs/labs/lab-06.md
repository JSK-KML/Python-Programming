---
outline: deep
title : Lab 6 - Environment, Testing and More Basic Python
---


# Lab 06 : Environment, Testing and More Basic Python

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Escape Characters

Escape characters are special characters in strings that are preceded by a backslash (`\`). They allow you to include characters that would otherwise be difficult or impossible to type directly in a string.

The two most commonly used escape characters are:
- `\n` - Creates a new line (line break)
- `\t` - Creates a tab (horizontal spacing)

#### Using `\n` for New Lines

```python
# Without \n - everything prints on one line
print("Hello World How are you?")

# With \n - creates line breaks
print("Hello\nWorld\nHow are you?")

# You can combine \n with regular text
message = "Name: Ali\nAge: 20\nGrade: A"
print(message)
```

**Output:**
```
Hello World How are you?
Hello
World
How are you?
Name: Ali
Age: 20
Grade: A
```

#### Using `\t` for Tabs

```python
# Without \t - no spacing
print("Name Age Grade")
print("Ali 20 A")

# With \t - creates neat columns
print("Name\tAge\tGrade")
print("Ali\t20\tA")
print("Sarah\t19\tB+")
```

**Output:**
```
Name Age Grade
Ali 20 A
Name	Age	Grade
Ali	20	A
Sarah	19	B+
```

#### Combining `\n` and `\t`

```python
# Creating a formatted table
student_data = "Student Information:\n\nName\tAge\tGrade\nAli\t20\tA\nSarah\t19\tB+"
print(student_data)
```

**Output:**
```
Student Information:

Name	Age	Grade
Ali	20	A
Sarah	19	B+
```

### Escape Characters Exercise <Badge type="warning" text="Task" />

Open the file `exercise1.py` inside the `/labs/lab06/exercise1/` folder (it has already been created for you). Write a program that prints this receipt as a single string, using `\n` for every line break and `\t` for every column, with no `print()` called more than once:

```
========== RECEIPT ==========
Item		Price	Qty	Total
Coffee		$3.50	2	$7.00
Muffin		$2.10	3	$6.30
Water		$1.05	4	$4.20
------------------------------
Subtotal			$17.50
Tax (6%)			$1.05
Total			$18.55
============================
```

Store each item's name, unit price, and quantity in variables, and calculate every `Total`, the subtotal, the tax, and the final total in your code. Do not type the money amounts in directly, they must be computed. Every amount shown must display with exactly two decimal places. Run it with `python exercise1.py` and check the columns line up in a real console.

## Comments

There are multiple ways of doing comments in Python: single-line comments and multi-line comments. Comments are essential for writing clean, understandable code.

### Why Use Comments?

Comments serve several important purposes:
- **Explain what your code does** - Help others (and future you) understand the logic
- **Document complex algorithms** - Break down complicated processes step by step  
- **Provide context** - Explain why you chose a particular approach
- **Disable code temporarily** - Comment out code for testing without deleting it
- **Add reminders** - Note areas that need improvement or bug fixes

### Single-Line Comments

Single-line comments in Python start with `#`. Everything after `#` on that line is ignored by Python:

```python
# This is a comment - it won't run
print("Hello World")  # This comment explains what the print does

# You can use comments to explain variables
student_name = "Ali"  # Store the student's name
age = 20             # Student's age in years

# Comments can temporarily disable code
# print("This line won't execute")
print("This line will execute")
```

**Output:**
```
Hello World
This line will execute
```

### Multi-Line Comments

Python doesn't have a specific multi-line comment syntax like some languages, but there are two common approaches:

#### Method 1: Multiple `#` Lines

```python
# This is a multi-line comment
# that spans several lines.
# Each line needs its own # symbol.
# This is the most common way.

print("Code after comments")
```

#### Method 2: Triple Quotes (Docstrings)

Triple quotes (`"""` or `'''`) can also be used for multi-line comments:

```python
"""
This is a multi-line comment using triple quotes.
You can write multiple lines without using # on each line.
This is technically a string, but if it's not assigned to a variable,
Python ignores it, making it act like a comment.
"""

print("Code after triple quote comment")

'''
You can also use triple single quotes
for multi-line comments.
Both work the same way.
'''
```

**Output:**
```
Code after comments
Code after triple quote comment
```


### Best Practices for Comments

1. **Write clear, concise comments** - Explain the "why", not just the "what"
2. **Keep comments up to date** - Update comments when you change code
3. **Don't over-comment** - Don't explain obvious things
4. **Use proper grammar and spelling** - Comments are read by humans

## Commit and Push Your Work

After completing the exercises, save all your files and commit them to your repository. Make sure your files are properly saved in the `/labs/lab06/` directory.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 6: Escape Characters and Comments", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully and that any automated tests pass.
