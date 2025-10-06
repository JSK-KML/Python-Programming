---
title: Chapter 7 - Tutorial 3 Answers
outline: deep
---

# Chapter 7 - Tutorial 3: Sentinel-Controlled Loops - Answers

## Exercise 1

### Question
Each code snippet below has one or more bugs. Find the bugs, explain what's wrong, and how to fix them.

**For each code, answer:**
1. What is the bug?
2. What error or problem will occur?
3. How do you fix it?

### Answer

### Code A

**Answers:**
1. **What is the bug?** Missing prime input - variable `number` is used before being defined
2. **What error or problem will occur?** `NameError: name 'number' is not defined` on line 3
3. **How to fix it?** Add prime input before the loop: `number = int(input())`

**Fixed code:**
```python:line-numbers
total = 0
number = int(input())  # Prime input - read BEFORE the loop

while number != 0:
    total += number
    number = int(input())  # Update input

print(total)
```

---

### Code B

**Answers:**
1. **What is the bug?** Missing update input - `value` never changes inside the loop
2. **What error or problem will occur?** Infinite loop - if user enters 5 (> 0), `count` increments forever and program never stops
3. **How to fix it?** Add update input inside the loop: `value = int(input())`

**Fixed code:**
```python:line-numbers
count = 0
value = int(input())  # Prime input

while value > 0:
    count += 1
    value = int(input())  # Update input - MUST be inside loop

print(count)
```

---

### Code C

**Answers:**
1. **What is the bug?** Type mismatch - trying to add string to integer without conversion
2. **What error or problem will occur?** `TypeError: unsupported operand type(s) for +=: 'int' and 'str'` on line 5
3. **How to fix it?** Convert `score_input` to integer before adding: `score = int(score_input)` then `total += score`

**Fixed code:**
```python:line-numbers
score_input = input()
total = 0

while score_input != "stop":
    score = int(score_input)  # Convert to integer first
    total += score             # Now can add integer to integer
    score_input = input()

print(total)
```

---

### Code D

**Answers:**
1. **What is the bug?** Missing validation before division - no check if count is zero
2. **What error or problem will occur?** `ZeroDivisionError: division by zero` on line 10 if user enters -1 immediately
3. **How to fix it?** Add `if count > 0:` check before calculating average

**Fixed code:**
```python:line-numbers
total = 0
count = 0
number = int(input())

while number != -1:
    total += number
    count += 1
    number = int(input())

if count > 0:  # Check before dividing
    average = total / count
    print(average)
else:
    print("No numbers entered")
```

### Summary of Common Bugs
1. **Missing prime input** → NameError
2. **Missing update input** → Infinite loop
3. **Type mismatch** → TypeError
4. **Division by zero** → ZeroDivisionError

---

## Exercise 2

### Question
Complete the daily sales calculator code.

### Answer

```python:line-numbers
print("=== DAILY SALES CALCULATOR ===")
total_sales = 0              # Initialize total
transaction_count = 0        # Initialize count

# Prime input - read as string to check for "done"
sale_input = input("Enter sale amount (or 'done' to finish): RM")

while sale_input != "done":  # Sentinel is "done"
    # Convert string to float for calculation
    sale_amount = float(sale_input)  # Convert to float

    # Accumulate total and count
    total_sales += sale_amount       # Add to total
    transaction_count += 1           # Increment count

    # Update input
    sale_input = input("Enter sale amount (or 'done' to finish): RM")

# Calculate and display results
print("\n=== SALES SUMMARY ===")
print(f"Total Transactions: {transaction_count}")
print(f"Total Sales: RM{total_sales:.2f}")

if transaction_count > 0:              # Check before dividing
    average_sale = total_sales / transaction_count
    print(f"Average Transaction: RM{average_sale:.2f}")
else:
    print("No transactions recorded")
```

### Answers to Questions
1. **All blanks filled:**
   - Line 2: `0`
   - Line 3: `0`
   - Line 8: `"done"`
   - Line 10: `float`
   - Line 13: `sale_amount`
   - Line 14: `1`
   - Line 24: `transaction_count`
   - Line 25: `transaction_count`

2. **Three essential parts:**
   - **Prime input:** Line 6 - `sale_input = input(...)`
   - **Condition:** Line 8 - `while sale_input != "done":`
   - **Update input:** Line 17 - `sale_input = input(...)`

3. **Why check `if transaction_count > 0`?** To prevent division by zero error if user immediately enters "done" without any transactions.

4. **Prime input line number:** Line 6

5. **Update input line number:** Line 17

### Explanation
- Uses string sentinel "done" to allow any numeric value
- Converts string to float only after confirming it's not "done"
- Tracks both total and count for average calculation
- Validates count before division

---

## Exercise 3

### Question
Complete the score analyzer code.

### Answer

```python:line-numbers
print("=== SCORE ANALYZER ===")
print("Enter scores between 0-100")
print("Any value outside this range will stop input")

total_score = 0           # Initialize total
score_count = 0          # Initialize count
passing_count = 0        # Initialize passing counter
failing_count = 0        # Initialize failing counter

# Prime input
score = float(input("Enter score: "))

# Sentinel condition: stop if outside valid range
while score >= 0 and score <= 100:  # Range: 0-100
    # Accumulate total and count
    total_score += score             # Add to total
    score_count += 1                 # Increment count

    # Check if passing or failing
    if score >= 60:                  # Passing threshold is 60
        passing_count += 1           # Increment passing
    else:
        failing_count += 1           # Increment failing

    # Update input
    score = float(input("Enter score: "))

# Display results
print(f"\nTotal scores entered: {score_count}")
print(f"Passing scores (≥60): {passing_count}")
print(f"Failing scores (<60): {failing_count}")

if score_count > 0:                              # Check before dividing
    average_score = total_score / score_count    # Calculate average
    print(f"Average score: {average_score:.2f}")

    pass_rate = (passing_count / score_count) * 100  # Calculate percentage
    print(f"Pass rate: {pass_rate:.2f}%")
```

### Answers to Questions
1. **All blanks filled:**
   - Line 5: `0`
   - Line 6: `0`
   - Line 7: `0`
   - Line 8: `0`
   - Line 14: `0` and `100`
   - Line 16: `score`
   - Line 17: `1`
   - Line 20: `60`
   - Line 21: `passing_count`
   - Line 23: `failing_count`
   - Line 32: `0`
   - Line 33: `total_score` and `score_count`
   - Line 36: `passing_count` and `score_count`

2. **Sentinel values:** Any value less than 0 or greater than 100 (e.g., -1, 101, 150, -50)

3. **Why `score >= 0 and score <= 100`?** This condition keeps the loop running WHILE score is valid (within range). It continues as long as BOTH conditions are true.

4. **Could you use `score < 0 or score > 100` as while condition?**
   - **NO!** This would create the opposite logic
   - `score < 0 or score > 100` is True when score is OUTSIDE the range
   - The loop would run for INVALID scores and stop for VALID scores
   - You'd need to change it to: `while not (score < 0 or score > 100):`
   - Which is equivalent to the original condition

5. **Three essential parts line numbers:**
   - **Prime input:** Line 11 - `score = float(input("Enter score: "))`
   - **Condition check:** Line 14 - `while score >= 0 and score <= 100:`
   - **Update input:** Line 26 - `score = float(input("Enter score: "))`

### Explanation
**Range-based sentinel:**
- Instead of one specific value, ANY value outside 0-100 stops the loop
- Uses compound condition with `and` to define valid range
- Combines sentinel pattern with selection (if-else) for classification
- Must validate before calculating average and pass rate

**Key Logic:**
- `score >= 0 and score <= 100` → Continue (valid)
- `score < 0 or score > 100` → Stop (sentinel)
