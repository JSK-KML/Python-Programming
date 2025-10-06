---
outline: deep
title: Lab 12 - Sentinel-Controlled Loops and Loop Control
---

# Lab 12: Sentinel-Controlled Loops and Loop Control

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Introduction to Sentinel-Controlled Loops

In Lab 11, you learned counter-controlled loops where you know exactly how many times to repeat. But what if you don't know how many times? What if a teacher wants to enter student grades without counting them first? What if a cashier wants to keep scanning items until the customer says they're done?

This is where sentinel-controlled loops come in. Instead of counting repetitions, you keep looping until you see a special signal that means "stop."

Launch **VS Code** and open the `exercise.py` file in `/labs/lab12/`.

## Understanding the Problem

### When Counter Loops Don't Work

In Lab 11, you used counter-controlled loops when you knew the exact count. But sometimes you simply don't know this upfront.

Copy this code into your `exercise.py` file:

```python
# Problem: Teacher must count students first!
num_students = int(input("How many students? "))
total = 0

for i in range(num_students):
    grade = float(input("Enter grade: "))
    total += grade

average = total / num_students
print(f"Average: {average}")
```

Run this code. It works, but notice the problem. The teacher has to count all the students before entering any grades. What if they don't know the count? What if they just want to enter grades as they go through the class list and stop when they're done?


Counter-controlled loops require you to know the exact count before starting. In real life, you often don't know this upfront

Think about other situations:
- A cashier doesn't count items before scanning them
- You don't count how many songs you'll listen to before starting

In all these cases, you just keep going until you're done. That's what sentinel-controlled loops solve.

## Introducing Sentinel Values

A **sentinel value** is a special input that signals "I'm done, stop the loop." Think of it like a stop sign - when you see it, you know to stop.

### What Makes a Good Sentinel?

A sentinel must be a value that could never be valid data. Common sentinel examples:

- `-1` for numerical input (since real grades, prices, ages are usually positive)
- `"stop"` for text input
- `0` for counting scenarios where zero isn't valid


The sentinel is **NOT** processed as data. It's only a signal to stop.

For example, if you're entering student grades and use -1 as the sentinel:
- Grades like 85, 92, 78 are valid data - they get processed
- When you enter -1, the loop stops - the -1 is NOT added to the average

## 3 Parts of Sentinel Loops


### Part 1: Prime Input (Initialize)

Read the first value BEFORE the loop starts.

```python
grade = float(input("Enter grade (-1 to stop): "))  # Part 1: Prime input
```

### Part 2: Condition Check

Test if the input is the sentinel value in the while condition.

```python
while grade != -1:  # Part 2: Condition
```

### Part 3: Update Input

Read the next value at the END of the loop body.

```python
    grade = float(input("Enter grade (-1 to stop): "))  # Part 3: Update input
```

### Complete Pattern Together

Copy this complete example into your `exercise.py` file:

```python
# Complete sentinel pattern - all three parts labeled
grade = float(input("Enter grade (-1 to stop): "))  # Part 1: Prime input

while grade != -1:  # Part 2: Condition
    print(f"You entered: {grade}")
    grade = float(input("Enter grade (-1 to stop): "))  # Part 3: Update input

print("Done entering grades!")
```

Run this code. Enter some grades like 85, 90, 78, then enter -1. Notice how -1 doesn't get processed as a grade - it only stops the loop.


Why need prime input?

Without the prime input, you'd have nothing to check in the while condition! The first `input()` before the loop gives you the initial value to test.


## Why You Need All Three Parts

Each part serves an important purpose. Missing any one of them causes errors or infinite loops.

### Missing Part 1: Priming Input

Try typing this **WRONG** code into your `exercise.py` (don't run it yet):

```python
# WRONG - No prime input
while grade != -1:  # Error! grade doesn't exist yet
    print(f"You entered: {grade}")
    grade = float(input("Enter grade (-1 to stop): "))
```

What do you think will happen? 

### Missing Part 3: Update Input

Now look at this **WRONG** code (don't run it - it will crashed your VS Code):

```python

grade = float(input("Enter grade (-1 to stop): "))

while grade != -1:
    print(f"You entered: {grade}")
    # Forgot to ask for next grade

# Infinite loop
```

If the first grade you enter isn't -1, the loop runs forever printing the same grade over and over. Why? Because `grade` never changes - you only read it once before the loop. The loop condition keeps checking the same value forever.

### Comparison with Counter-controlled



**Counter pattern:**
```python
count = 1                 # Initialize
while count <= 5:         # Condition
    print(count)
    count += 1            # Update
```

**Sentinel pattern:**
```python
grade = float(input())    # Initialize (prime input)
while grade != -1:        # Condition
    print(grade)
    grade = float(input())  # Update (update input)
```

Both patterns follow the same structure: initialize, check condition, update. The sentinel pattern just uses input for initialization and update instead of simple assignment.

## Comparing Counter vs Sentinel Loops

Let's solve the same task using both approaches to see when each is better.

**Task**: Sum numbers from user input

```python
# Counter-controlled approach - must know count first
num_count = int(input("How many numbers? "))
total = 0

for i in range(num_count):
    number = int(input(f"Enter number {i + 1}: "))
    total += number

print(f"Total: {total}")
```

```python
# Sentinel-controlled approach - stop when ready
total = 0
count = 0

number = int(input("Enter number (0 to stop): "))  # Prime input

while number != 0:  # Condition
    total += number
    count += 1
    number = int(input("Enter number (0 to stop): "))  # Update

print(f"Total of {count} numbers: {total}")
```

Both produce the same result, but notice the difference:
- Counter version: User must count numbers before entering them
- Sentinel version: User can enter as many as they want and stop when done

**When to use each**:
- **Counter loop**: When you know the count upfront or the count is determined by calculation
- **Sentinel loop**: When the user decides when to stop, or the stopping point depends on the data

## Sentinel-Controlled Loop Exercises

### Exercise 1: Price Calculator <Badge type="warning" text="Task" />

Create a program that calculates the total cost of items in a shopping cart. Keep asking for item prices until the user enters any negative number. Calculate the total cost and count how many items were entered. Assume all valid prices are positive numbers.

**Requirements**:
- Sentinel: Any negative number 
- Valid price range: Any positive number (assume all inputs are either valid prices or negative sentinels)
- Track total cost and item count
- Use all three parts: prime input, condition check, update input
- Display total items and total cost

Create `/labs/lab12/exercise1/exercise1.py`:

```python
price = float(input())

# TODO: Your code here

print(item_count)
print(f"{total_cost:.2f}")
```

### Exercise 2: Score Analyzer <Badge type="warning" text="Task" />

Keep accepting test scores from the user until they enter a value outside the valid range. Calculate the total score, count of scores, and average score. Valid scores are in the range 0-100.

**Requirements**:
- Sentinel: Any value outside 0-100 range 
- Valid score range: 0-100
- Calculate total, count, and average of scores
- Display count, total, and average

Create `/labs/lab12/exercise2/exercise2.py`:

```python
score = float(input())

# TODO: Your code here

print(score_count)
print(total_score)
print(f"{average_score:.2f}")
```

### Exercise 3: Age Statistics Calculator <Badge type="warning" text="Task" />

Keep accepting ages from users until they type "done". Calculate the total age, count of ages, and average age. Assume all ages are in the range 1-120.

**Requirements**:
- Use "done" as the sentinel value
- Age range: 1-120 (assume all inputs are valid)
- Calculate total, count, and average of ages
- Display count, total, and average

Create `/labs/lab12/exercise3/exercise3.py`:

```python
age_input = input()

# TODO: Your code here

print(age_count)
print(total_age)
print(f"{average_age:.2f}")
```

### Exercise 4: Grade Classifier <Badge type="warning" text="Task" />

Keep accepting student scores until the user types "end". For each score, classify it as "Pass" (60 or above) or "Fail" (below 60). Calculate and display the total number of passing scores, total number of failing scores, and the overall pass rate percentage. Assume all scores are in the range 0-100.

**Requirements**:
- Use "end" as the sentinel value
- Score range: 0-100 (assume all inputs are valid)
- Classify each score as Pass (≥60) or Fail (<60)
- Count passing and failing scores separately
- Calculate pass rate percentage
- Display passing count, failing count, and pass rate

Create `/labs/lab12/exercise4/exercise4.py`:

```python
score_input = input()

# TODO: Your code here

print(passing_count)
print(failing_count)
print(f"{pass_rate:.2f}")
```

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository. Make sure your files are properly saved in the `/labs/lab12/` directory, including `exercise.py` and all exercise folders with their Python files.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 12: Sentinel-Controlled Loops", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully and that any automated tests pass.
