---
title: "Tutorial 7 : Chapter 4"
outline: deep
---

# Tutorial 7 : Chapter 4 - Data Types, Strings and Output

**Instructions**: Answer all questions without running the code.

## Data Types and Casting

### Exercise 1: Naming the Type <Badge type="tip" text="Question" />

```text
25            # ?
"25"          # ?
25.0          # ?
True          # ?
"True"        # ?
3.0           # ?
"3.0"         # ?
""            # ?
"  "          # ?
False         # ?
```

**State the data type of each value above.**

### Exercise 2: Predicting a Cast <Badge type="tip" text="Question" />

```python
int("25")
int("25.0")
int(3.9)
int(-3.9)
float("7")
float("3.5")
str(100)
int("abc")
```

**State the value each conversion produces. Where a conversion does not produce a value, state the error it raises instead.**

### Exercise 3: Choosing Types for a Scenario <Badge type="tip" text="Question" />

A canteen ordering system stores the following information about one order.

> Nurul orders 3 plates of nasi goreng at RM6.50 each. Her name is recorded on the receipt, the order number is 47, and the system records that she has **not** paid yet.

**List every variable the program needs. For each one, give a suitable identifier, the data type it should hold, and its starting value. State also which of these values would be obtained through `input()`, and the type `input()` returns for each.**

## Strings, Functions and Methods

### Exercise 4: Measuring and Changing Text <Badge type="tip" text="Question" />

Given `text = "Hello World"`:

```python
print(len(text))
print(text.upper())
print(text.lower())
print(len(""))
print(len("  "))
print(len("Hello") + len("World"))
```

**State the exact output of each line.**

### Exercise 5: What Does the Variable Hold? <Badge type="tip" text="Question" />

```python
# Program A          # Program B              # Program C                # Program D
text = "hi"          text = "hi"              text = "hi"                text = "hi"
text.upper()         shout = text.upper()     text = text.upper()        text.upper().lower()
print(text)          print(text)              print(text)                print(text)
```

**State the output of each program and explain the reason for it.**

### Exercise 6: Function or Method? <Badge type="tip" text="Question" />

Given `text = "Hello"`:

```python
len(text)
text.len()
upper(text)
text.upper()
text.upper
print(len(text))
```

**State whether each call is valid. Rewrite any that are not, and explain what is wrong with them.**

## Tracing Program Output

### Exercise 7: Separators and Line Endings <Badge type="tip" text="Question" />

```python
print("A", "B", "C")
print("A", "B", "C", sep="")
print("A", "B", "C", sep=" - ")

print("X", end="")
print("Y", end="")
print("Z")
```

**Write the exact output of this program, stating how many lines are printed and what appears on each one.**

### Exercise 8: Reading f-strings <Badge type="tip" text="Question" />

Given `name = "aiman"` and `score = 90`:

```python
print(f"{name} scored {score}")
print("{name} scored {score}")
print(f"{name.upper()} scored {score}")
print(f"{name} has {len(name)} letters")
```

**State the exact output of each line.**

### Exercise 9: Following the Indentation <Badge type="tip" text="Question" />

Three versions of the same four lines, differing only in indentation and in one word.

```python
# Version A          # Version B          # Version C
if True:             if False:            if False:
    print("one")         print("one")         print("one")
    print("two")         print("two")     print("two")
print("three")       print("three")       print("three")
```

**State the output of each version. Then explain which differences between the versions **Python** reports as an error, and which it accepts silently.**

## Component Error Hunt

### Exercise 10: Age Calculator <Badge type="tip" text="Question" />

This program should ask for the user's age and state how old they will be next year.

```python
age = input("Enter your age: ")
next_age = age + 1
print("Next year you will be " + next_age)
```

**Identify every error and provide the corrected code.**

### Exercise 11: Greeting Program <Badge type="tip" text="Question" />

This program should greet the user and display their course.

```python
name = input("Enter your name: ")

print("Hello, " + name.upper)
print(f"Your name has {len(name)} letters")

class = "CP115"
print(f"Course: {class}")
```

**Identify every error and provide the corrected code.**

### Exercise 12: Rectangle Area <Badge type="tip" text="Question" />

This program should calculate the area of a rectangle.

```python
# Calculate the area of a rectangle
Length = float(input("Length: "))
width = float(input("Width: "))

area = length * width
print("The area is {area}")
```

**Identify every error and provide the corrected code. State which of the errors stop the program from running and which do not.**

## Writing the Program

Write your code on paper. Use only the components covered in this chapter.

### Exercise 13: Student Card <Badge type="tip" text="Question" />

Write a program that asks the user for their full name and their matric number, then prints the name in uppercase, the number of characters in the name, and the matric number. Use an f-string for at least one of the lines.

### Exercise 14: Circle Measurements <Badge type="tip" text="Question" />

Write a program that asks the user for the radius of a circle, then prints its area and its circumference. Use the `math` module for π and for squaring the radius.

### Exercise 15: Canteen Receipt <Badge type="tip" text="Question" />

Write a program that asks for an item name, its price, and how many the customer wants, then prints a receipt showing the item name in uppercase and the total cost. Include a block comment at the top stating what the program does, and one comment at the end of a line of code.
