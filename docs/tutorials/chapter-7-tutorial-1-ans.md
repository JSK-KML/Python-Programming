---
title: Chapter 6 and 7 - Tutorial 1 Answers
outline: deep
---

# Chapter 6 and 7 - Tutorial 1: Loop Practice Questions - Answers

## Loop Practice Questions

### Question 1 <Badge type="tip" text="Question" />

**Compound Interest Calculator**
Ahmad deposits RM 1000 in a bank with 5% annual interest. Write a program using a `for` loop to show his balance after each year for 4 years. Use the formula: New Balance = Previous Balance × 1.05

::: tip Answer
```python
balance = 1000.0

for year in range(1, 5):
    balance = balance * 1.05
    print(f"Year {year}: RM {balance:.2f}")
```

**Output:**
```
Year 1: RM 1050.00
Year 2: RM 1102.50
Year 3: RM 1157.63
Year 4: RM 1215.51
```
:::

---

### Question 2 <Badge type="tip" text="Question" />

**Pyramid Builder**
Write a program using nested `for` loops to create a number pyramid pattern where each row shows repeated numbers. The number of row is the same as the input. So if user enter `4`, the number of row will be 4.

::: tip Answer
```python
rows = int(input("Enter number of rows: "))

for i in range(1, rows + 1):
    for j in range(i):
        print(i, end="")
    print()  # Move to next line after each row
```

**Output (for input 4):**
```
1
22
333
4444
```
:::

---

### Question 3 <Badge type="tip" text="Question" />

**Factorial Calculator**
Write a program using a `for` loop to calculate the factorial of any positive integer.

::: tip Answer
```python
number = int(input("Enter a positive integer: "))
factorial = 1

print(f"Calculating factorial of {number}:")

for i in range(1, number + 1):
    factorial = factorial * i
    print(f"{i}! = {factorial}")

print(f"Factorial of {number} is: {factorial}")
```

**Output (for input 6):**
```
Calculating factorial of 6:
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
6! = 720
Factorial of 6 is: 720
```
:::

---

### Question 4 <Badge type="tip" text="Question" />

**Prime Number Checker**
Write a program that asks the user to input a number, then uses a `for` loop to check if that number is prime.

::: tip Answer
```python
number = int(input("Enter a number: "))
divisor_count = 0

print(f"Testing if {number} is prime:")

for i in range(2, number):
    quotient = number // i
    remainder = number % i
    print(f"{number} ÷ {i} = {quotient} remainder {remainder}")

    if remainder == 0:
        divisor_count = divisor_count + 1

print(f"Number of divisors found: {divisor_count}")

if divisor_count == 0 and number > 1:
    print(f"{number} is a prime number")
else:
    print(f"{number} is not a prime number")
```

**Output (for input 17):**
```
Enter a number: 17
Testing if 17 is prime:
17 ÷ 2 = 8 remainder 1
17 ÷ 3 = 5 remainder 2
17 ÷ 4 = 4 remainder 1
17 ÷ 5 = 3 remainder 2
17 ÷ 6 = 2 remainder 5
17 ÷ 7 = 2 remainder 3
17 ÷ 8 = 2 remainder 1
17 ÷ 9 = 1 remainder 8
17 ÷ 10 = 1 remainder 7
17 ÷ 11 = 1 remainder 6
17 ÷ 12 = 1 remainder 5
17 ÷ 13 = 1 remainder 4
17 ÷ 14 = 1 remainder 3
17 ÷ 15 = 1 remainder 2
17 ÷ 16 = 1 remainder 1
Number of divisors found: 0
17 is a prime number
```
:::