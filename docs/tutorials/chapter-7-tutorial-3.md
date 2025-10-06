---
title: Chapter 7 - Tutorial 3
outline: deep
---

# Chapter 7 - Tutorial 3: Sentinel-Controlled Loops

## Exercise 1 <Badge type="tip" text="Question" />

Each code snippet below has one or more bugs. Find the bugs, explain what's wrong, and how to fix them.

### **Code A**

```python:line-numbers
total = 0

while number != 0:
    number = int(input())
    total += number

print(total)
```

### **Code B**

```python:line-numbers
count = 0
value = int(input())

while value > 0:
    count += 1

print(count)
```

**User tries to input:** 5, 10, 15, -1

### **Code C**

```python:line-numbers
score_input = input()
total = 0

while score_input != "stop":
    total += score_input
    score_input = input()

print(total)
```

### **Code D**

```python:line-numbers
total = 0
count = 0
number = int(input())

while number != -1:
    total += number
    count += 1
    number = int(input())

average = total / count
print(average)
```

**For each code above, answer:**
1. What is the bug?
2. What error or problem will occur?
3. How do you fix it?

## Exercise 2 <Badge type="tip" text="Question" />

A store needs to calculate daily sales. The cashier enters sales amounts until they type "done". Calculate total sales, number of transactions, and average transaction amount.

**Partially completed code:**

```python:line-numbers
print("=== DAILY SALES CALCULATOR ===")
total_sales = __
transaction_count = __

# Prime input - read as string to check for "done"
sale_input = input("Enter sale amount (or 'done' to finish): RM")

while sale_input != "__":
    # Convert string to float for calculation
    sale_amount = __(sale_input)

    # Accumulate total and count
    total_sales += __
    transaction_count += __

    # Update input
    sale_input = input("Enter sale amount (or 'done' to finish): RM")

# Calculate and display results
print("\n=== SALES SUMMARY ===")
print(f"Total Transactions: {transaction_count}")
print(f"Total Sales: RM{total_sales:.2f}")

if __ > 0:
    average_sale = total_sales / __
    print(f"Average Transaction: RM{average_sale:.2f}")
else:
    print("No transactions recorded")
```

**Sample Run:**
```
=== DAILY SALES CALCULATOR ===
Enter sale amount (or 'done' to finish): RM125.50
Enter sale amount (or 'done' to finish): RM89.90
Enter sale amount (or 'done' to finish): RM200.00
Enter sale amount (or 'done' to finish): RM45.75
Enter sale amount (or 'done' to finish): done

=== SALES SUMMARY ===
Total Transactions: 4
Total Sales: RM461.15
Average Transaction: RM115.29
```

**Questions:**
1. Fill in all the blanks (__)
2. What are the three essential parts of this sentinel loop?
3. Why do we check `if transaction_count > 0` before calculating average?
4. What line number is the prime input?
5. What line number is the update input?

## Exercise 3 <Badge type="tip" text="Question" />

Create a program that accepts test scores until user enters a value outside the range 0-100. Calculate total, count, and average of valid scores. Also count how many passing scores (≥60) and failing scores (<60).

**Partially completed code:**

```python:line-numbers
print("=== SCORE ANALYZER ===")
print("Enter scores between 0-100")
print("Any value outside this range will stop input")

total_score = __
score_count = __
passing_count = __
failing_count = __

# Prime input
score = float(input("Enter score: "))

# Sentinel condition: stop if outside valid range
while score >= __ and score <= __:
    # Accumulate total and count
    total_score += __
    score_count += __

    # Check if passing or failing
    if score >= __:
        __ += 1
    else:
        __ += 1

    # Update input
    score = float(input("Enter score: "))

# Display results
print(f"\nTotal scores entered: {score_count}")
print(f"Passing scores (≥60): {passing_count}")
print(f"Failing scores (<60): {failing_count}")

if score_count > __:
    average_score = __ / __
    print(f"Average score: {average_score:.2f}")

    pass_rate = (__ / __) * 100
    print(f"Pass rate: {pass_rate:.2f}%")
```

**Sample Run:**
```
=== SCORE ANALYZER ===
Enter scores between 0-100
Any value outside this range will stop input
Enter score: 85
Enter score: 72
Enter score: 45
Enter score: 90
Enter score: 58
Enter score: 101

Total scores entered: 5
Passing scores (≥60): 3
Failing scores (<60): 2
Average score: 70.00
Pass rate: 60.00%
```

**Questions:**
1. Fill in all the blanks (__)
2. What are the sentinel values in this program?
3. Why is the sentinel condition `score >= 0 and score <= 100`?
4. Could you use `score < 0 or score > 100` as the while condition instead? Explain.
5. What lines contain the prime input, condition check, and update input?
