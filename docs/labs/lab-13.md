---
outline: deep
title: Lab 13 - Loop Control Statements
---

# Lab 13: Loop Control Statements

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Introduction to Loop Control

In Labs 11 and 12, you learned how loops naturally end - counter loops finish after a specific number of iterations, and sentinel loops stop when they see a special value. But what if you need more control? What if you want to stop a loop early when you find what you're looking for? Or skip certain iterations without stopping the entire loop?

Think about searching for a book in a library. You don't keep searching after you find it - you stop immediately. Or imagine processing a list of numbers but skipping the negative ones. These scenarios require loop control statements.

Launch **VS Code** and open the `exercise.py` file in `/labs/lab13/`.

## The Problem: Inefficient Searching

### Searching Without Control

Consider this problem: you're searching for a specific student ID in a list of 1000 students. Without loop control, even after finding the student, you'd keep checking all remaining IDs.

Copy this code into your `exercise.py` file:

```python
# Inefficient search - checks all 10 numbers even after finding target
target = 7
found = False

for number in range(10):
    print(f"Checking number: {number}")
    if number == target:
        found = True
        print(f"Found {target}!")
    # Loop continues even after finding target

print(f"Search complete. Found: {found}")
```

Run this code. Notice that after finding 7, the loop still checks 8 and 9. This wastes time and resources.

::: warning INEFFICIENCY
The loop continues checking even after achieving its goal. With 1000 items, you'd waste 993 unnecessary checks if the target is at position 7.
:::

This is where the `break` statement becomes valuable.

## The Break Statement

### Understanding Break

The `break` statement immediately exits the loop, regardless of the loop's normal termination condition. Once **Python** executes `break`, it jumps to the first line of code after the loop.

```python
for item in range(100):
    if condition:
        break  # Exit loop immediately // [!code highlight]
    # This code runs only if break hasn't executed
# Python jumps here after break
```

### Efficient Searching with Break

Now let's fix our search program using `break`:

```python
# Efficient search - stops immediately after finding target
target = 7
found = False

for number in range(10):
    print(f'Checking number: {number}')
    if number == target:
        found = True
        print(f'Found {target}!')
        break  # Exit loop immediately // [!code highlight]
    print(f'Still inside loop, checking next...')  # This runs before break // [!code highlight]

print(f'Search complete. Found: {found}')  # Python jumps here after break // [!code highlight]
```

Add this to your `exercise.py` and run it. Notice three important things:

1. The line `'Still inside loop, checking next...'` prints for numbers 0-6
2. When it finds 7, it prints `'Found {target}!'` then immediately executes `break`
3. The `'Still inside loop...'` message doesn't print after finding 7, and execution jumps to the `print` statement outside the loop

Try changing `target = 3` and run it again. How many checks happen now? Then try `target = 9`. Notice how `break` optimizes the search by stopping as soon as the goal is achieved.

### Break in While Loops

The `break` statement works the same way in `while` loops:

```python
# Password validation with break
attempts = 0

while attempts < 3:
    password = input("Enter password: ")
    attempts += 1

    if password == "secret123":
        print("Access granted!")
        break  # Exit immediately // [!code highlight]

    print(f"Wrong password. {3 - attempts} attempts remaining.")
```

Copy this into your `exercise.py`. The `while` loop normally runs 3 times, but `break` exits early if the password is correct. Try entering the correct password on the first or second attempt - the loop stops immediately.

## The Continue Statement

### Understanding Continue

While `break` exits the loop entirely, `continue` only skips the rest of the current iteration and moves to the next one. Think of it as "skip this one, but keep going."

```python
for item in range(5):
    if condition:
        continue  # Skip rest of this iteration
    # This code skips when continue executes
# Loop continues with next iteration
```

### The Problem: How to Skip Specific Iterations?

<Badge type="tip" text="Question" />

**Problem:** You want to calculate the sum of numbers from 1 to 5, but you need to skip number 3 (maybe it represents invalid data). How can you skip just that one number without stopping the entire loop?

Copy this code that adds all numbers:

```python
# Problem: This adds ALL numbers including 3
total = 0

for number in range(5):
    print(f'Processing: {number}')
    total += number
    print(f'Added to total. Current total: {total}')

print(f'Final total: {total}')
```

Run this code. It adds all numbers 0 through 4, giving a total of 10. But we want to skip 3 and get a total of 6 (0+1+2+4) instead. How can we do this?

### Solution with Continue

Now let's use `continue` to skip number 3:

```python
# Solution: Skip number 3 with continue
total = 0

for number in range(5):
    print(f'Processing: {number}')

    if number == 3:
        print('Skipping 3!')
        continue  # Skip to next iteration // [!code highlight]

    total += number  # This line skipped when continue executes // [!code highlight]
    print(f'Added {number}. Current total: {total}')  # This too // [!code highlight]

print(f'Final total: {total}')  # Python continues here after each iteration // [!code highlight]
```

Add this to your `exercise.py` and run it. Notice what happens:

1. When `number` is 0, 1, 2, or 4: both lines after the `if` execute normally
2. When `number` is 3: `continue` executes, skipping the addition and the print statement
3. After each iteration (including when `continue` runs), the loop continues with the next number
4. After all iterations complete, execution moves to the final print outside the loop

### Continue in While Loops

The `continue` statement works identically in `while` loops, but you must be extremely careful with counter placement to avoid infinite loops.

::: danger CRITICAL: Counter Placement with Continue
When using `continue` in `while` loops, ALWAYS update your counter BEFORE the `continue` statement. If the counter update comes after `continue`, it will be skipped, causing an infinite loop.
:::

Here's the **correct** way:

```python
# CORRECT - Process only even numbers
number = 0

while number < 10:
    number += 1  # Counter BEFORE continue // [!code highlight]

    if number % 2 != 0:  # If odd
        continue  # Skip odd numbers // [!code highlight]

    # This only executes for even numbers
    print(f"Processing even number: {number}")
```

Try this code. Notice that `continue` skips the print statement for odd numbers, but the loop continues incrementing and checking all numbers from 1 to 10.

Now look at this **dangerous mistake**:

```python
# WRONG - Creates infinite loop!
number = 0

while number < 10:
    if number % 2 != 0:  # If odd
        continue  # Skips the increment below!

    print(f"Processing even number: {number}")
    number += 1  # This never executes when number is odd! // [!code error]
```

**What happens:** When `number` is 0 initially, it prints "Processing even number: 0" and increments to 1. Then when `number` is 1 (odd), `continue` executes and skips the increment. The loop checks `1 < 10` again (still true), checks if 1 is odd (yes), executes `continue` again, and repeats forever. Your program hangs!

::: warning DEBUGGING TIP
If your `while` loop never ends, check if your counter update is after a `continue` statement. This is one of the most common beginner mistakes with loop control.
:::

## Comparing Break vs Continue

Let's solve the same problem using both approaches to see the difference clearly.

**Task:** Check numbers 0 through 9 and find the first number greater than 7.

```python
# Using break - stops when found
for number in range(10):
    print(f'Checking: {number}')
    if number > 7:
        print(f'Found first number > 7: {number}')
        break  # Stop searching

print('Search complete')
```

Run this code. It checks 0, 1, 2, 3, 4, 5, 6, 7, then finds 8 and stops. The number 9 is never checked.

Now try this version with `continue`:

```python
# Using continue - processes all, reports only numbers > 7
for number in range(10):
    if number <= 7:
        continue  # Skip numbers <= 7
    print(f'Number greater than 7: {number}')  # Reports 8 and 9

print('Processing complete')
```

This version checks all numbers 0-9 and reports 8 and 9. The loop never stops early - it processes all iterations.

| Statement | Effect | Use Case |
|-----------|--------|----------|
| `break` | Exit loop completely | Stop when goal achieved |
| `continue` | Skip rest of current iteration | Filter/skip specific items |
| Neither | Process every iteration | Need all data |

## Exercise 1: Password System with Limited Attempts <Badge type="warning" text="Task" />

Create a password verification system that gives users 3 attempts. Stop immediately if they enter the correct password. The correct password is "python123".

Create `/labs/lab13/exercise1/exercise1.py`:

```python
correct_password = "python123"

# TODO: Your code here

print(login_successful)
print(attempts_used)
```

## Exercise 2: First Divisible Number Finder <Badge type="warning" text="Task" />

Find the first number between 1 and 100 that is divisible by both 7 and 13. Stop searching immediately after finding it.

Create `/labs/lab13/exercise2/exercise2.py`:

```python
# TODO: Your code here

print(found_number)
```

## Exercise 3: Grade Filter with Continue <Badge type="warning" text="Task" />

Process grades and calculate the average, but skip any grades that are invalid (less than 0 or greater than 100). Keep reading grades until -1 is entered. Count how many valid grades were processed.

Create `/labs/lab13/exercise3/exercise3.py`:

```python
grade = float(input())

# TODO: Your code here

print(valid_count)
print(f"{average:.2f}")
```

## Exercise 4: Positive Number Sum <Badge type="warning" text="Task" />

Keep accepting numbers from the user. Skip negative numbers (don't add them to sum). Stop when the user enters 0. Calculate sum and count of positive numbers only. Note: 0 is neither positive nor negative.

Create `/labs/lab13/exercise4/exercise4.py`:

```python
number = float(input())

# TODO: Your code here

print(positive_count)
print(f"{positive_sum:.2f}")
```

## Exercise 5: ATM Withdrawal Validator <Badge type="warning" text="Task" />

You are creating an ATM system. Read withdrawal amounts from the user until they enter 0 to finish. The ATM has these rules:
- Minimum withdrawal: $20
- Maximum withdrawal: $500
- Only multiples of $20 are allowed

Count how many valid withdrawals were made and calculate the total amount withdrawn. Skip invalid amounts and continue asking.

Create `/labs/lab13/exercise5/exercise5.py`:

```python
amount = int(input())

# TODO: Your code here

print(valid_count)      # Number of valid withdrawals
print(total_withdrawn)  # Total amount from valid withdrawals only
```

## Exercise 6: Movie Ticket Counter <Badge type="warning" text="Task" />

A cinema is selling tickets. Read customer ages one by one until -1 is entered to stop. Calculate the total ticket revenue based on these prices:
- Children (age 0-12): $8
- Teens (age 13-17): $10
- Adults (age 18-64): $15
- Seniors (age 65+): $10

Count the total number of tickets sold and calculate total revenue.

Create `/labs/lab13/exercise6/exercise6.py`:

```python
age = int(input())

# TODO: Your code here

print(tickets_sold)
print(total_revenue)
```

## Testing Your Solutions

Use **pytest** to verify your implementations work correctly:

1. Navigate to each exercise folder
2. Run the tests using **VS Code**'s Test Explorer
3. Fix any failing test cases
4. Ensure all tests pass before moving to the next exercise

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository. Make sure your files are properly saved in the `/labs/lab13/` directory, including `exercise.py` and all exercise folders with their Python files.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 13: Loop Control Statements", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully and that any automated tests pass.
