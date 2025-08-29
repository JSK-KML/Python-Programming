---
outline: deep
title: Lab 9 - Python Selections
---

# Lab 09: Python Selections

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Selection

Launch **VS Code** and open the `exercise.py` file in `/labs/lab09/`. We'll start with a simple question and evolve it into a more complex grading system.

### Basic Problem 

A student has scored 85 marks out of 100 in their **Python Programming** exam. Calculate and display their percentage.

Copy this code into your `exercise.py` file:

```python
# Stage 1: Basic grade calculation
marks = 85
total_marks = 100

percentage = (marks / total_marks) * 100
print(f"Student scored: {percentage}%")
```

Run this code. It works perfectly for this specific case. But what if we want to tell the student whether they passed or failed?

::: tip
This is where we realize we need decision-making in our programs. Our code can calculate, but it can't make decisions based on the results.
:::

### Adding Decision Making

The university wants to automatically tell students if they passed. The passing grade is 60%. Let's improve our program to make this decision.

In **Python**, the keyword for selection is `if`. You can see the example of usage below.

```python
if conditions:
    # Do things when the conditions is True

```

Lets implement this techniques in our previous code. Add this improved version to your `exercise.py` file:

```python
# Adding basic decision making
marks = 85
total_marks = 100

percentage = (marks / total_marks) * 100
print(f"Student scored: {percentage}%")

# conditional statement
if percentage >= 60:
    print("Congratulations! You passed!")
```

Run this code. Now it tells students when they pass. But wait, what happens when a student fails? Our program stays silent about failure.

Try changing `marks = 85` to `marks = 45` and run it again. Do you see the problem?

::: warning PROBLEM
Our program only handles the success case. Students who fail get no feedback at all. This is clearly incomplete.
:::

### Handling Both Cases 

We need to handle both passing and failing students. **Python** handles this case using the `else` statement. The usage of it is shown below.


```python
if conditions:
    # Do things when the conditions is True
else:
    # Do things when the conditions is False
```

Update your code to include the `else` statement:

```python
# Stage 3: Complete pass/fail system
marks = 45  # Try both passing and failing grades
total_marks = 100

percentage = (marks / total_marks) * 100
print(f"Student scored: {percentage}%")

# Complete conditional with else
if percentage >= 60:
    print("Congratulations! You passed!")
else:
    print("Sorry, you failed. Better luck next time!")
```

Great, now our program handles both cases. Test it with different values: `marks = 85` (should pass) and `marks = 45` (should fail).

But now, there is a new requirement: "We don't just need pass/fail. We need to assign letter grades: A, B, C, D, and F."

Try adding this with just `if` and `else`:

```python
# This doesn't work well for multiple grades
if percentage >= 90:
    print("Grade: A")
else:
    print("Grade: ?")  # What about B, C, D, F?
```

::: warning LIMITATION
With only `if` and `else`, we can only handle two cases. But letter grades require multiple categories!
:::

### Multiple Selection 

**Python** provides `elif` (else-if) to handle multiple conditions cleanly. The usage is as below.

```python
if conditions:
    # Do things when the conditions is True
elif conditions :
    # Do things when conditions is True
elif conditions :
    # Do things when conditions is True
else:
    # Do things when everything else is False
```

Now lets improve our previous code using the `elif` statement:

```python
# multiple conditions with elif
marks = 87
total_marks = 100
percentage = (marks / total_marks) * 100

print(f"Student scored: {percentage}%")

if percentage >= 90:
    print("Grade: A - Excellent!")
elif percentage >= 80:
    print("Grade: B - Good!")
elif percentage >= 70:
    print("Grade: C - Satisfactory!")
elif percentage >= 60:
    print("Grade: D - Pass!")
else:
    print("Grade: F - Fail!")
```

Much cleaner! Test this with different values: `marks = 95`, `marks = 82`, `marks = 73`, `marks = 65`, `marks = 45`.

::: tip HOW ELIF WORKS
Python checks each condition in order. Once it finds a `True` condition, it executes that block and skips the rest. This is why we can use `>= 80` instead of `>= 80 and < 90`.
:::

### More Comparison Operators 

The university now wants special handling for perfect scores and failing grades. Let's explore different comparison operators

| Operator | Description | Example |
|----------|-------------| ---------|
| `==` | Equal to | `x == y` |
| `!=` | Not equal to | `x != y` |
| `>` | Greater than | `x > y` |
| `<` | Less than | `x < y` |  
| `>=` | Greater than or equal | `x >= y` |
| `<=` | Less than or equal | `x <= y` |

Operators can only be used with 2 values at one time. For example the code below is valid:

``` python
x = 10

if x > 5:
    print("x is greater than 5")
```

But the code below is not valid:

```python
x = 10

if 2< x > 5:
    print("x is between 2 and x")
```

Now that we have learned new types of operator, lets again improve our code.

```python
# Different comparison operators
marks = 100  # Try different values: 100, 0, 75, 60
total_marks = 100
percentage = (marks / total_marks) * 100

print(f"Student scored: {percentage}%")

# Using different comparison operators
if percentage == 100:
    print("Perfect Score! Outstanding achievement!")
elif percentage > 90:
    print("Grade: A+ - Exceptional!")
elif percentage >= 80:
    print("Grade: A - Excellent!")
elif percentage >= 70:
    print("Grade: B - Good!")
elif percentage >= 60:
    print("Grade: C - Satisfactory!")
elif percentage > 0:
    print("Grade: F - Fail, but you tried!")
else:  # percentage == 0
    print("Grade: F - No marks scored!")
```

Notice how we use different operators:
- `==` for exact equality (perfect 100%)
- `>` for greater than (A+ grade)
- `>=` for greater than or equal (other grades)


### Boolean Operator

The university introduces a new policy: "Honour students must have grades of A or B AND perfect attendance." Now we need to check multiple conditions together.

Boolean operators allows us to test multiple conditions inside on statments. There are 3 types of boolean operator.

| Operator | Example |
|----------|---------|
| `and` | A and B |
| `or` |  B or C|
| `not` |  not B|

The usage of boolean operators slightly differs from comparison operator in a way that we can use to with more that 2 values. 

```python

if condition1 and condition2:
    # Do things is both conditions are True

if condition1 or condition2:
    # Do things if either are True

if not condition:
    # Do things if condition is False

if condition1 and condition2 and condition3:
    # Do things if all are True

if condition1 or condition2 or condition3:
    # Do things if any are True

```

Boolean operators have strict data type usage, it can only be uses  with a `Boolean` data type. Any value that want to use the boolean operator must be either `True` or `False`.

```python
condition1 = True
condition2 = False

if condition1 and condition2:
    # Do things is both conditions are True

if condition1 or 1:
    # This will cause error because 1 is an integer, not a boolean
```

Now, again lets improve our code with boolean operators:

```python
# Complete system with boolean logic
marks = 85
total_marks = 100
attendance_percentage = 100
extra_credit = 5  # Bonus points

percentage = (marks / total_marks) * 100
print(f"Student scored: {percentage}%")
print(f"Attendance: {attendance_percentage}%")
print(f"Extra credit: {extra_credit} points")

# Enhanced grading with boolean logic
if percentage >= 90:
    grade = "A"
elif percentage >= 80:
    grade = "B"
elif percentage >= 70:
    grade = "C"
elif percentage >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Base Grade: {grade}")

# Honor Roll: (Grade A or B) AND perfect attendance
honor_roll = (grade == "A" or grade == "B") and attendance_percentage == 100
print(f"Honor Roll: {'Yes!' if honor_roll else 'No'}")
```

::: info BOOLEAN OPERATORS
- `and` : Both conditions must be True
- `or` : At least one condition must be True  
- `not` : Reverses the truth value
- Use parentheses `()` to group conditions clearly
:::

### Precedence Table

When we combine boolean and comparison operators together, how does python know what to evaluate first?

```python
if percentage >= 80  or extra_credit > 0:
    print("Honor Roll")
```

From the example above, obviously we want to check `percentage >= 80` first. But how do we know that Python will not evaluate `80 or extra_credit` first? Even though we have established earlier that for a boolean operator to work, both values need to be boolean, this still does not ensure that `80 or extra_credit` will not be evaluated first.

This is where the precedence table comes into picture:

| Precedence | Type | Operator | 
|------------|------|----------|
| 1 (Highest) | Arithmetic | `()` (Parentheses) |
| 2 | Arithmetic | `**` (Exponentiation) |
| 3 | Arithmetic | `*`, `/`, `//`, `%` (Multiply, Divide, Floor Division, Modulus) |
| 4 | Arithmetic | `+`, `-` (Addition, Subtraction) |
| 5 | Comparison | `<`, `<=`, `>`, `>=`, `==`, `!=` (All comparison operators) |
| 6 | Boolean | `not` (Boolean NOT) |
| 7 | Boolean | `and` (Boolean AND) |
| 8 (Lowest) | Boolean | `or` (Boolean OR) |

**Python** evaluates expressions from highest to lowest precedence. This means:

```python
# Example: percentage >= 80 or extra_credit > 0
# Step 1: Evaluate comparisons first (>= and >)
# Step 2: Then evaluate boolean operator (or)

if percentage >= 80 or extra_credit > 0:
    print("Honor Roll")
```

When in doubt, use parentheses `()` to make your intentions clear:

```python
# Clear grouping with parentheses
if (percentage >= 80) or (extra_credit > 0):
    print("Honor Roll")
```
<!--
## When to Use Different Selection Structures

Now that we've learned `if`, `elif`, and `else`, a new question arises: "When should I use each one?" A health monitoring app scenario will help us discover the answer.

## Multiple Independent Health Checks Problem

A health app wants to provide multiple health warnings and recommendations. Let's see what happens when we need to check several independent conditions:

```python
# Multiple independent checks - each health check is separate
weight = 70  # kg
height = 1.75  # meters
age = 25
exercise_hours = 5  # per week

bmi = weight / (height * height)

print(f"BMI: {bmi}")
print(f"Age: {age}")
print(f"Exercise: {exercise_hours} hours/week")

# Check ALL health recommendations independently
if bmi >= 25:
    print("Consider weight management")
    
if age >= 40:
    print("Regular health checkups recommended")
    
if exercise_hours < 3:
    print("Increase physical activity")
    
if bmi < 18.5:
    print("Consider increasing caloric intake")
```

Run this code. Notice something important: **ALL conditions are checked**, and a person can receive multiple health recommendations. This makes sense because these are independent health checks.

But what happens when we use this same approach for something that should only have ONE outcome?

## The BMI Classification Problem

Let's try using multiple `if` statements for BMI classification:

```python
# Using multiple if statements for BMI categories (WRONG APPROACH!)
weight = 70  # kg
height = 1.75  # meters
bmi = weight / (height * height)

print(f"BMI: {bmi:.1f}")

# Multiple if statements - This causes problems!
if bmi >= 30:
    print("BMI Category: Obese")
    
if bmi >= 25:
    print("BMI Category: Overweight")  # This will ALSO print for BMI 32!
    
if bmi >= 18.5:
    print("BMI Category: Normal")  # This will ALSO print for BMI 32!
    
if bmi < 18.5:
    print("BMI Category: Underweight")
```

Run this code with `weight = 85` (BMI ≈ 27.8). What happens? The person gets classified as both "Overweight" AND "Normal"! This is clearly wrong.

::: warning PROBLEM
Using multiple `if` statements for mutually exclusive categories gives wrong results! A person can't have multiple BMI classifications.
:::

Now let's fix this with `elif`:

```python
# Using elif for mutually exclusive categories (CORRECT!)
weight = 85  # kg  
height = 1.75  # meters
bmi = weight / (height * height)

print(f"BMI: {bmi:.1f}")

# Only ONE category will be assigned
if bmi >= 30:
    print("BMI Category: Obese")
elif bmi >= 25:
    print("BMI Category: Overweight")
elif bmi >= 18.5:
    print("BMI Category: Normal")
else:
    print("BMI Category: Underweight")
```

Perfect! Now only one BMI category is assigned because `elif` stops checking once it finds a true condition.

## When to Use Each Structure

| Structure | When to Use | Example | Result |
|-----------|-------------|---------|---------|
| Multiple `if` | Independent conditions that can all be true | Health warnings, risk factors | Person can get multiple results |
| `if-elif-else` | Mutually exclusive categories | BMI categories, age groups | Person gets exactly one result |
| `if-else` | Simple binary choice | Healthy/unhealthy, active/inactive | Person gets one of two results |
| `if` only | Single condition check | Special recommendation, risk alert | Person may or may not get result |

## Common Mistake: Wrong Structure Choice

**Mistake 1: Using `elif` for independent checks**
```python
# WRONG: Using elif for independent health checks
if bmi >= 25:
    print("⚠️ Weight management needed")
elif exercise_hours < 3:  # Won't check if first condition is true!
    print("⚠️ More exercise needed")  # Overweight person loses this advice!
```

**Mistake 2: Using multiple `if` for exclusive categories**
```python
# WRONG: Using multiple if for BMI categories
if bmi >= 30:
    print("BMI Category: Obese")
if bmi >= 25:  # Still checks even after Obese is assigned!
    print("BMI Category: Overweight")
```

::: tip CHOOSING THE RIGHT STRUCTURE
- **Independent checks** that can all happen → Use multiple `if`
- **Categories** where only one applies → Use `if-elif-else`
- **Binary choice** with two outcomes → Use `if-else`
- **Single optional check** → Use `if` only
:::

--!>