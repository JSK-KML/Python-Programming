---
outline: deep
title : Lab 6 - More Basic Python 
---


# Lab 06 : More Basic Python 

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated. 

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

##  Indentation

In pseudocode, you have been using indentation routinely when you are doing `if` and `while` statements. In Python, indentations are used exactly the same. Of course there are more indentation usage that extends further that `if` and `while` statements but that is just a reminder for the future.

In `exercise.py`, inside your `/lab/lab06` folder, try copy and paste the code below is **VS code**. What you do you see?

```python
print("Starting program")
    print("This line has spaces before it")
print("Back to normal")
```

**VS Code** will put red squiggly lines on the code to indicate something is wrong with the code. This is a main advantage of using a proper and well maintained IDE. It highlights the problems and error to use even before the code is executed.

The squiggly lines are there to tell us that the indentation is wrong. 

<p align="center">
    <img src="/public/labs/lab-06/lab-6-1.png" alt="drawing" width="600"/>
</p>

Now lets try to run it, what happens? You will see that the code doesnt produce the expected output. In the console, under the **Problems** tab, it listed all the error that our code has caused.

<p align="center">
    <img src="/public/labs/lab-06/lab-6-2.png" alt="drawing" width="500"/>
</p>

### The 4-Space Rule

Python standard convention uses 4 spaces for each level of indentation. 

**Why 4 spaces?** 

The answer is rather simple. 4 spaces is deep enough that the indentation level is clear but not too deep that it wastes horizontal screen space or makes code hard to read when you have multiple nested levels. 

**VS Code** helps you by automatically adding 4 spaces when you press <kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">Tab</kbd>.

Now you might wonder, what if i just decide to use 1 or 2 or something 15 spaces, would that still works?

The answer is ***kinda***. It works but you need to be careful when choosing a different value than 4.

Copy and paste the code below into `exercise.py`.In that code, the indentation value is diffrent than 4. What do you see? Does it produce the expected output? Does the squiggly red lines in VS Code come out?

```python
value = 1

if(value == 1):
     print("Value is 1")
else:
  print("Value is not 1")    

```

Now try to run the code below. What do you see?

```python
value = 1

if(value == 1):
     print("Value is 1")
       print("This is an additional print statement.")
else:
  print("Value is not 1")
```

Bottom line is, dont use indentation if the code is on the same level and for indentation, just use <kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">Tab</kbd> button.


## Naming Variables

In Python, we use **snake_case** to name variables. All lowercase with underscores between words

```python
student_name = "Ali"
total_price = 150.50
is_passed_exam = True
number_of_items = 5
```

Some other language uses CamelCase to name variables.

```python
studentName = "Ali"
totalPrice = 150.50
isPassedExam = True
numberOfItems = 5
```

So which one should we use? This is again similar as indentation, which is **Python** dont care, but other people do. In **Python**, the standard convention is to use snake_case, but if you decide to use CamelCase, the program still works, it just didnt follow the convention.

Why is it so important to follow convention? Right now you might be wondering, if both ways works that why should you care. The answer lies in your future. You will not be working alone all your life, you will be working with other classmates, collegue and others. 

Having a convention is nice because your friends know what to expect from your coding style and vice versa. You also know what to expect from them.

### Variables Naming Exercise <Badge type="warning" text="Question" />

Create a file called `exercise1.py`. Implement the solutions for this exercise in there. Debug and fix this program with variable naming errors. Change the variable name to follow snake case

```python
movie title = "Avengers Endgame"  
2d_or_3d = "3D"                   
ticket-price = 18.00              
numberoftickets = 3             
is-we_ekend = True                 
hasStudentDiscount = False        
PopcornCombo = "Large"            
TOTAL_PRICE = 54.00              
customer age = 25                
member#id = "M1234"              
```


## String Quotes: Single, Double, and Triple

Before we dive into string operations, let's understand the different ways to create strings in Python using different types of quotes.

### Single Quotes vs Double Quotes

In Python, you can use either single quotes (`'`) or double quotes (`"`) to create strings. Both work exactly the same way:

```python
# Using single quotes
name1 = 'Ali'
print(name1)

# Using double quotes  
name2 = "Ali"
print(name2)

# Both produce the same result
print(name1 == name2)  # Output: True
```

**Output:**
```
Ali
Ali
True
```

### When to Use Which?

The choice between single and double quotes becomes important when your string contains quotes:

```python
# If your string contains single quotes, use double quotes
message1 = "I can't believe it's working!"
print(message1)

# If your string contains double quotes, use single quotes
message2 = 'He said "Hello there!"'
print(message2)
```

**Output:**
```
I can't believe it's working!
He said "Hello there!"
```

### Triple Quotes

Triple quotes (`"""` or `'''`) are used for multi-line strings:

```python
# Using triple double quotes
long_text = """This is a long text
that spans multiple lines.
You can write as many lines as you want."""
print(long_text)

# Using triple single quotes
poem = '''Roses are red,
Violets are blue,
Python is awesome,
And so are you!'''
print(poem)
```

**Output:**
```
This is a long text
that spans multiple lines.
You can write as many lines as you want.
Roses are red,
Violets are blue,
Python is awesome,
And so are you!
```

### String Quotes Exercise <Badge type="warning" text="Task" />

Create a file called `exercise2.py`. Write a program that demonstrates the use of all three types of quotes:

1. Create a variable using single quotes that contains a sentence with double quotes
2. Create a variable using double quotes that contains a sentence with an apostrophe (single quote)
3. Create a multi-line string using triple quotes that contains both single and double quotes
4. Print all three variables

## String Operations and Escape Characters

There are a lot of operations that can be done on a `String`, but the operations that you will use in this class is `upper()`,`lower()` and `len()`

### String Operations `upper()` and `lower()`

The `upper()` and `lower()` are both methods. We don't want to dive too deep into what a method is, but essentially they are functions that belong to strings and can perform specific operations on them.

To use a method, you have to declare a `String` first and then use it on them. Execute the code below and see what is the result.

```python
student_name = "Ali"
student_name.upper()
print(student_name)          
```

Why does when we `print(student_name)` the output is still `Ali`? Havent we done the `upper()` operation?

The answer is **immutability**. In Python, strings are immutable, which means they cannot be changed after they are created. When you call `student_name.upper()`, it doesn't change the original string. Instead, it creates and returns a new string with all letters in uppercase.

If you want to keep the uppercase version, you need to store it in a variable:

```python
student_name = "Ali"
uppercase_name = student_name.upper()
print(uppercase_name)  
print(student_name)    

# Or you can reassign to the same variable
student_name = student_name.upper()
print(student_name)    
```

### String Operations `len()`

The `len()` function returns the length of a string (how many characters it contains). Unlike `upper()` and `lower()`, `len()` is not a method - it's a built-in function that takes the string as an argument.

```python
student_name = "Ali Rahman"
print(len(student_name)) 

# You can also use it directly on a string
print(len("Hello World")) 
```

### String Operations Exercise <Badge type="warning" text="Task" />

Create a file called `exercise3.py`. Write a program that:

1. Asks the user to input their full name
2. Displays the name in uppercase
3. Displays the name in lowercase  
4. Displays the length of their name


Example output:
```
Enter your full name: Ali Rahman
Uppercase: ALI RAHMAN
Lowercase: ali rahman
Name length: 10
```

### Escape Characters

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

Create a file called `exercise4.py`. Write a program that creates a formatted receipt using `\n` and `\t`:

Your program should display:
```
========== RECEIPT ==========
Item		Price	Qty	Total
Coffee		$3.50	2	$7.00
============================
```

Use variables to store the item information and calculate the totals. Use `\n` for line breaks and `\t` for proper alignment.


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

Remember the triple quotes we learned in the [Triple Quotes](./lab-06.md#triple-quotes) section? They can also be used for multi-line comments:

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



