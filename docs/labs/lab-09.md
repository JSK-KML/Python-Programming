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

## Selection Structure Positioning and Usage

**Python** provides three selection structure components: `if`, `elif`, and `else`. Understanding **where** each can be positioned and **when** to use each is essential for controlling program flow.

### Positioning Rules for Selection Structures

Selection structures in **Python** follow strict positioning rules that determine how conditions are evaluated:

| Component | Position Rules | Can Repeat? | Purpose |
|-----------|---------------|-------------|---------|
| `if` | **Always first** in a selection block | No | Initial condition check |
| `elif` | **Only after `if`** or another `elif` | Yes (multiple allowed) | Additional condition checks |
| `else` | **Always last** in a selection block | No | Default action when all conditions fail |

The positioning creates a **decision chain** where **Python** evaluates conditions in order from top to bottom, executing only the first `True` condition it encounters.

### Understanding If Statement Placement

The `if` statement must **always** be positioned first in any selection structure. It establishes the beginning of the decision-making process.

Copy this code into your `exercise.py` file and run it:

```python
# if statement - always at the beginning
student_grade = 85

if student_grade >= 90:
    print("Excellent performance")
```

What output do you see? Try changing `student_grade` to `95` and run it again. What happens now?

The `if` statement serves as the **entry point** for conditional logic. **Python** encounters the `if` first and evaluates whether its condition is `True` or `False`. Without an `if` statement, you cannot create conditional logic in **Python**.

### Understanding Elif Statement Placement

The `elif` statement can **only** be positioned **after** an `if` statement or **after** another `elif` statement. It provides additional conditions to check when previous conditions are `False`.

Run this code in your `exercise.py` file:

```python
# elif positioning - can have multiple elif statements
student_grade = 85

if student_grade >= 90:
    print("Excellent performance")
elif student_grade >= 80:    # After if
    print("Good performance") 
elif student_grade >= 70:    # After elif
    print("Satisfactory performance")
elif student_grade >= 60:    # After elif
    print("Minimum performance")
```

Which message appears? Try changing `student_grade` to different values like `95`, `75`, and `55`. What happens each time?

The `elif` statement creates a **chain of alternatives**. **Python** only checks an `elif` condition if all previous conditions (`if` and any preceding `elif` statements) were `False`. Once any condition evaluates to `True`, **Python** executes that block and **skips all remaining `elif` and `else` statements**.

### Understanding Else Statement Placement  

The `else` statement can **only** be positioned as the **final component** in a selection structure. It executes when all previous conditions (`if` and any `elif` statements) evaluate to `False`.

Copy this code into your `exercise.py` file and run it:

```python
# else positioning - always last
student_grade = 45

if student_grade >= 90:
    print("Excellent performance")
elif student_grade >= 80:
    print("Good performance")
elif student_grade >= 70:
    print("Satisfactory performance") 
elif student_grade >= 60:
    print("Minimum performance")
else:                        # Always positioned last
    print("Below minimum performance")
```

What message appears? Try changing `student_grade` to `75`, then to `65`. Which conditions are being checked each time?

The `else` statement serves as the **default action**. It provides a guaranteed execution path when none of the conditional statements above it are `True`. The `else` statement does not have a condition because it represents "everything else" - all cases not handled by the `if` and `elif` conditions.

### When to Use Multiple If vs If-Elif-Else

Understanding **when** to use multiple independent `if` statements versus connected `if-elif-else` chains is crucial for correct program logic.

**Use multiple independent `if` statements when:**
- Multiple conditions can be `True` simultaneously
- Each condition represents a separate, independent check
- You want all applicable conditions to execute their code blocks

**Use `if-elif-else` chains when:**  
- Only one condition should execute its code block
- Conditions represent mutually exclusive choices
- You want **Python** to stop checking once it finds the first `True` condition

### Practical Example: Multiple Independent Checks

Consider a health monitoring system that provides multiple warnings. Each health recommendation is independent - a person might need multiple recommendations simultaneously:

Copy this code into your `exercise.py` file and run it:

```python
# Multiple independent health checks - use multiple if statements
weight = 70  # kg
height = 1.75  # meters
age = 25
exercise_hours = 2  # per week

bmi = weight / (height * height)

# Each check is independent - multiple can be True
if bmi >= 25:
    print("Recommendation: Consider weight management")
    
if age >= 40:
    print("Recommendation: Schedule regular health checkups")
    
if exercise_hours < 3:
    print("Recommendation: Increase physical activity")
    
if bmi < 18.5:
    print("Recommendation: Consider increasing caloric intake")
```

How many recommendations appear? Now try changing `age = 45` and `exercise_hours = 1`. Run it again - how many recommendations do you see now?

In this example, a person with `exercise_hours = 2` will see the exercise recommendation. If they're also over 40, they'll see the health checkup recommendation. Multiple recommendations make sense because they're independent health concerns.

### Practical Example: Mutually Exclusive Classification  

Consider the same health data but now classifying BMI into categories. A person can only belong to **one** BMI category:

Test this code in your `exercise.py` file:

```python
# BMI classification - use if-elif-else chain
weight = 85  # kg  
height = 1.75  # meters
bmi = weight / (height * height)

print(f"BMI: {bmi:.1f}")

# Only one classification should apply
if bmi >= 30:
    print("BMI Category: Obese")
elif bmi >= 25:
    print("BMI Category: Overweight")  
elif bmi >= 18.5:
    print("BMI Category: Normal weight")
else:
    print("BMI Category: Underweight")
```

Which category appears? Try changing the weight to `95` kg, then to `60` kg. How many categories does each person get assigned?

With `weight = 85` and `height = 1.75`, the BMI is approximately 27.8. The person is classified as "Overweight" and **only** as "Overweight". **Python** stops checking conditions after finding the first `True` condition (`bmi >= 25`).

### Why Positioning Matters for Program Logic

Understanding the evaluation order helps you write correct conditional logic:

```python
# Correct: Most specific conditions first
score = 95

if score == 100:
    print("Perfect score!")
elif score >= 90:  
    print("A grade")
elif score >= 80:
    print("B grade")
else:
    print("Below B grade")
```

The positioning ensures that a perfect score (100) gets the special recognition before being categorized as just an "A grade". **Python**'s top-to-bottom evaluation makes the order of conditions crucial for correct results.


::: tip CHOOSING THE RIGHT STRUCTURE
- **Independent checks** that can all happen → Use multiple `if`
- **Categories** where only one applies → Use `if-elif-else`
- **Binary choice** with two outcomes → Use `if-else`
- **Single optional check** → Use `if` only
:::

