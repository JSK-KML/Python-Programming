---
outline: deep
title: Lab 14 - More Python Selections
---

# Lab 14: More Python Selections

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>


## Selection Structure 

Understanding how **Python** executes selection statements helps you write more efficient code. The order and structure of your conditions directly impacts your program's performance.

### Condition Ordering Strategy

**Python** evaluates conditions from top to bottom, stopping at the first `True` condition. Understanding the right order prevents bugs and makes your code easier to understand.

Let's learn the proper selection ordering by building a student grading system step by step:

**Scenario**: We need to classify students based on their exam score (0-100).

#### Step 1: Start Simple - Basic Categories

```python
# Version 1: Basic grading
score = 85

if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"

print(f"Score {score}: Grade {grade}")
```

This works, but what if someone enters an invalid score?

#### Step 2: Add Safety Checks First

```python
# Version 2: Add safety checks
score = -10  # Try with invalid score

# STEP 1: Check for problems FIRST
if score < 0 or score > 100:
    grade = "Invalid score"
# Then do normal grading
elif score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"

print(f"Score {score}: Grade {grade}")
```

Now our code won't crash with bad data. But what about perfect scores?

#### Step 3: Add Most Specific Conditions

```python
# Version 3: Handle special cases
score = 100  # Try with perfect score

# STEP 1: Safety checks first
if score < 0 or score > 100:
    grade = "Invalid score"
# STEP 2: Most specific conditions (exact matches)
elif score == 100:
    grade = "Perfect A+"
elif score == 0:
    grade = "Zero - F"
# STEP 3: Broader conditions (ranges)
elif score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
# STEP 4: Default case
else:
    grade = "F"

print(f"Score {score}: Grade {grade}")
```

Perfect. Now we handle special cases before general ones.

#### Step 4: Complete System - All Steps Applied

```python
# Final Version: Complete ordering strategy
score = 95  # Test with different scores

print(f"Grading student with score: {score}")

# STEP 1: Safety checks first (prevent crashes)
if score < 0:
    grade = "Invalid: negative score"
elif score > 100:
    grade = "Invalid: score too high"

# STEP 2: Most specific conditions (exact matches)
elif score == 100:
    grade = "Perfect A+"
elif score == 0:
    grade = "No attempt - F"

# STEP 3: Broader conditions (ranges, most specific to least)
elif score >= 95:    # Narrow range
    grade = "A+ Excellent"
elif score >= 90:    # Broader range
    grade = "A Outstanding" 
elif score >= 80:    # Even broader
    grade = "B Good"
elif score >= 70:    # Broader still
    grade = "C Average"
elif score >= 60:    # Broadest passing
    grade = "D Pass"

# STEP 4: Default case (everything else)
else:
    grade = "F Fail"

print(f"Final grade: {grade}")
```

**The Strategy in Action:**
1. **Safety first** - Catches invalid data before it causes problems
2. **Exact matches next** - Handles special cases (perfect scores, zero)
3. **Ranges from narrow to broad** - Most specific ranges first (95-100, then 90-94, etc.)
4. **Default case last** - Catches everything not handled above

Test this code with different scores: `100`, `95`, `85`, `65`, `45`, `0`, `-5`, `150`




## Deeeper Into Comparison Operators

Comparison operators seem simple, but they have subtle behaviors that can cause bugs in your code. Understanding these cases helps you prevents common programming errors.

### Floating Point Precision Issues

One of the most common bugs in programming involves comparing floating-point numbers with `==`. This seems innocent but can cause serious problems.

Copy this code into your `exercise.py` file:

```python
# Dangerous floating point comparison
price1 = 0.1 + 0.2
price2 = 0.3

print(f"price1 = {price1}")
print(f"price2 = {price2}")
print(f"Are they equal? {price1 == price2}")
```

Run this code. You'll see that `0.1 + 0.2` does NOT equal `0.3`. 

**Why doesn't this work?**

Computers store decimal numbers using the [IEEE 754 standard](https://en.wikipedia.org/wiki/IEEE_754). - a system that uses binary (0s and 1s) to represent decimal numbers. But some decimal numbers cannot be represented exactly in binary, just like you can't write 1/3 exactly in decimal (it becomes 0.33333... forever).

Think about it this way:
- In decimal: 1/3 = 0.33333... (repeating forever)
- In binary: 0.1 = 0.00011001100110011... (repeating forever)

The IEEE 754 system has to "round off" these repeating decimals to fit in computer memory. 

Here's what happens when you ask the computer to store 0.1:

```bash
┌─────────────────────────────────────────────────────────────────┐
│                    FLOATING POINT CONVERSION                   │
└─────────────────────────────────────────────────────────────────┘

STEP 1: Input
┌──────────┐
│   0.1    │ ──────────► Convert to binary
└──────────┘

STEP 2: Binary Conversion  
┌────────────────────────────────────────────────────────┐
│ 0.00011001100110011001100110011001100110011...        │ ◄── Infinite
└────────────────────────────────────────────────────────┘

STEP 3: Memory Storage (64-bit limit)
┌────────────────────────────────────────────────────────┐
│ 0.0001100110011001100110011001100110011001100110011001│ ◄── Cut off
└────────────────────────────────────────────────────────┘
                                                    
STEP 4: Convert Back to Decimal
┌────────────────────────────────────────────────────────┐
│ 0.1000000000000000055511151231257827021181583404541016│ ◄── Not 0.1
└────────────────────────────────────────────────────────┘

Result: Computer thinks it stored 0.1, but actually stored ≈ 0.1000...0016
```

The computer:
1. Tries to convert 0.1 to binary
2. Gets 0.00011001100110011... (repeating forever)
3. Cuts off after available memory space
4. When converted back to decimal, becomes that long approximation instead of exactly 0.1

Think of it like trying to write 1/3 on paper. You write 0.33333, but you have to stop somewhere. The computer does the same thing with 0.1 in binary.

When you add two of these slightly-wrong numbers together, the tiny errors combine, giving you a result that's slightly different from what you expect.

```python
# Let's see what's really stored
price1 = 0.1 + 0.2
price2 = 0.3

print("What computer thinks 0.1 + 0.2 is:")
print(price1)
print("What computer thinks 0.3 is:")
print(price2)
print("The tiny difference:")
print(price1 - price2)
```

The difference is tiny (about 0.0000000000000004), but `==` requires EXACT equality.

**Better approach for floats:**

```python
# Better approach - use round() function
price1 = 0.1 + 0.2  
price2 = 0.3

# Round both numbers to remove tiny errors
rounded_price1 = round(price1, 10)  # Round to 10 decimal places
rounded_price2 = round(price2, 10)

if rounded_price1 == rounded_price2:
    print("Prices are equal (after rounding)")
else:
    print("Prices are different")

print("Original price1:")
print(price1)
print("Rounded price1:")
print(rounded_price1)
```


### String Equality Issues

String equality with `==` can fail when you expect it to work, similar to floating point problems. This can cause bugs in your programs.

Copy this code into your `exercise.py` file:

```python
# String equality surprises
username = "Admin"
expected = "admin"

print("Username entered:", username)
print("Expected username:", expected) 
print("Are they equal?", username == expected)
```

Run this code. You'll see that "Admin" does NOT equal "admin" even though they're the same word.

**Why doesn't this work?**

**Python's `==` operator is case-sensitive for strings. It treats uppercase and lowercase letters as completely different characters, just like 'A' and 'a' are different letters in the alphabet.**

```python
# Let's see the problem clearly
password1 = "Secret123"
password2 = "secret123" 
password3 = "SECRET123"

print("Testing password equality:")
print("password1:", password1)
print("password2:", password2)
print("password3:", password3)
print()
print("password1 == password2:", password1 == password2)  # False
print("password1 == password3:", password1 == password3)  # False
print("password2 == password3:", password2 == password3)  # False
```

All three passwords look the same to humans, but `==` sees them as completely different.

