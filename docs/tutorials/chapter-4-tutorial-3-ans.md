---
title: Chapter 4 - Tutorial 3 Answers
outline: deep
---

# Chapter 4 - Tutorial 3: Operator Precedence & Logic Errors - Answers

## Operator Precedence

### Exercise 1 <Badge type="tip" text="Question" />

Ahmad is creating a grade calculation system for his Python class. Predict the result of each expression without running the code.

Given: `score = 85`, `bonus = 15`, `attempts = 3`

```python
# Expression A
result_a = score + bonus / 3 > 90 and attempts <= 3

# Expression B
result_b = score * 2 / 10 + bonus >= 32 or attempts > 2

# Expression C
result_c = not score < 80 and bonus % 5 == 0 or attempts == 3

# Expression D
result_d = score / 5 + bonus * 2 > 50 and not attempts >= 4
```

**What will each result variable contain?**

::: tip Answer
```python
# Expression A: score + bonus / 3 > 90 and attempts <= 3
# Step 1: bonus / 3 = 15 / 3 = 5.0
# Step 2: score + 5.0 = 85 + 5.0 = 90.0
# Step 3: 90.0 > 90 = False
# Step 4: False and (3 <= 3) = False and True = False
result_a = False

# Expression B: score * 2 / 10 + bonus >= 32 or attempts > 2
# Step 1: score * 2 = 85 * 2 = 170
# Step 2: 170 / 10 = 17.0
# Step 3: 17.0 + 15 = 32.0
# Step 4: 32.0 >= 32 = True
# Step 5: True or (3 > 2) = True or True = True
result_b = True

# Expression C: not score < 80 and bonus % 5 == 0 or attempts == 3
# Step 1: score < 80 = 85 < 80 = False
# Step 2: not False = True
# Step 3: bonus % 5 = 15 % 5 = 0
# Step 4: 0 == 0 = True
# Step 5: True and True = True
# Step 6: True or (3 == 3) = True or True = True
result_c = True

# Expression D: score / 5 + bonus * 2 > 50 and not attempts >= 4
# Step 1: score / 5 = 85 / 5 = 17.0
# Step 2: bonus * 2 = 15 * 2 = 30
# Step 3: 17.0 + 30 = 47.0
# Step 4: 47.0 > 50 = False
# Step 5: attempts >= 4 = 3 >= 4 = False
# Step 6: not False = True
# Step 7: False and True = False
result_d = False
```
:::

### Exercise 2: Greenhouse Alert System <Badge type="tip" text="Question" />

Mei Lin is developing a temperature monitoring system for her greenhouse. Predict the boolean result of each expression.

Given: `temperature = 28`, `humidity = 75`, `light_hours = 12`

```python
# Expression A
alert_a = temperature > 30 or humidity / 5 + 10 >= 25 and light_hours <= 14

# Expression B
alert_b = not temperature < 25 and humidity % 10 == 5 or light_hours * 2 > 20

# Expression C
alert_c = temperature + humidity / 10 > 35 and not light_hours >= 15

# Expression D
alert_d = temperature / 2 + light_hours >= 26 or humidity > 80 and temperature <= 30
```

**What will each alert variable contain?**

::: tip Answer
```python
# Expression A: temperature > 30 or humidity / 5 + 10 >= 25 and light_hours <= 14
# Step 1: temperature > 30 = 28 > 30 = False
# Step 2: humidity / 5 = 75 / 5 = 15.0
# Step 3: 15.0 + 10 = 25.0
# Step 4: 25.0 >= 25 = True
# Step 5: light_hours <= 14 = 12 <= 14 = True
# Step 6: True and True = True
# Step 7: False or True = True
alert_a = True

# Expression B: not temperature < 25 and humidity % 10 == 5 or light_hours * 2 > 20
# Step 1: temperature < 25 = 28 < 25 = False
# Step 2: not False = True
# Step 3: humidity % 10 = 75 % 10 = 5
# Step 4: 5 == 5 = True
# Step 5: True and True = True
# Step 6: light_hours * 2 = 12 * 2 = 24
# Step 7: 24 > 20 = True
# Step 8: True or True = True
alert_b = True

# Expression C: temperature + humidity / 10 > 35 and not light_hours >= 15
# Step 1: humidity / 10 = 75 / 10 = 7.5
# Step 2: temperature + 7.5 = 28 + 7.5 = 35.5
# Step 3: 35.5 > 35 = True
# Step 4: light_hours >= 15 = 12 >= 15 = False
# Step 5: not False = True
# Step 6: True and True = True
alert_c = True

# Expression D: temperature / 2 + light_hours >= 26 or humidity > 80 and temperature <= 30
# Step 1: temperature / 2 = 28 / 2 = 14.0
# Step 2: 14.0 + 12 = 26.0
# Step 3: 26.0 >= 26 = True
# Step 4: humidity > 80 = 75 > 80 = False
# Step 5: temperature <= 30 = 28 <= 30 = True
# Step 6: False and True = False
# Step 7: True or False = True
alert_d = True
```
:::

### Exercise 3: Sports Team Selection <Badge type="tip" text="Question" />

Hassan is creating a sports eligibility system for his school. Predict the result of each condition.

Given: `age = 16`, `height = 170`, `weight = 65`

```python
# Expression A
eligible_a = age >= 15 and height > 160 or weight / 10 + age < 25

# Expression B
eligible_b = not age < 18 or height * weight / 100 > 110 and age <= 17

# Expression C
eligible_c = age + height / 10 >= 33 and weight % 5 == 0 or height > 175

# Expression D
eligible_d = weight > 60 and not height < 165 or age * 10 + weight >= 225
```

**What will each eligible variable contain?**

::: tip Answer
```python
# Expression A: age >= 15 and height > 160 or weight / 10 + age < 25
# Step 1: age >= 15 = 16 >= 15 = True
# Step 2: height > 160 = 170 > 160 = True
# Step 3: True and True = True
# Step 4: weight / 10 = 65 / 10 = 6.5
# Step 5: 6.5 + 16 = 22.5
# Step 6: 22.5 < 25 = True
# Step 7: True or True = True
eligible_a = True

# Expression B: not age < 18 or height * weight / 100 > 110 and age <= 17
# Step 1: age < 18 = 16 < 18 = True
# Step 2: not True = False
# Step 3: height * weight = 170 * 65 = 11050
# Step 4: 11050 / 100 = 110.5
# Step 5: 110.5 > 110 = True
# Step 6: age <= 17 = 16 <= 17 = True
# Step 7: True and True = True
# Step 8: False or True = True
eligible_b = True

# Expression C: age + height / 10 >= 33 and weight % 5 == 0 or height > 175
# Step 1: height / 10 = 170 / 10 = 17.0
# Step 2: age + 17.0 = 16 + 17.0 = 33.0
# Step 3: 33.0 >= 33 = True
# Step 4: weight % 5 = 65 % 5 = 0
# Step 5: 0 == 0 = True
# Step 6: True and True = True
# Step 7: height > 175 = 170 > 175 = False
# Step 8: True or False = True
eligible_c = True

# Expression D: weight > 60 and not height < 165 or age * 10 + weight >= 225
# Step 1: weight > 60 = 65 > 60 = True
# Step 2: height < 165 = 170 < 165 = False
# Step 3: not False = True
# Step 4: True and True = True
# Step 5: age * 10 = 16 * 10 = 160
# Step 6: 160 + 65 = 225
# Step 7: 225 >= 225 = True
# Step 8: True or True = True
eligible_d = True
```
:::


## Common Logic Errors

### Exercise 4: Mixed Error Hunt <Badge type="tip" text="Question" />

Fix the errors in this student grading system.

```python
student_name = "Ahmad"
total_marks = 450
passing_marks = 270

if total_marks = passing_marks:
    status = "Pass"
elif total_marks > 400 and and total_marks <= 450:
    Status = "Distinction"
elif total_marks > 350
    status = "Good"
elif total_marks > 60:
    status == "Barely Pass"
else
    status = "Fail"

print(f"Student {student_name}: {status}")
```

**Provide the corrected code.**

::: tip Answer
**Fixes made:**
- Line 5: `=` → `==` (assignment to equality operator)
- Line 7: `and and` → `and` (removed duplicate operator)
- Line 8: `Status` → `status` (fixed case sensitivity)
- Line 9: Added `:` (missing colon)
- Line 11: `==` → `=` (comparison to assignment operator)
- Line 12: Added `:` (missing colon after else)

```python
student_name = "Ahmad"
total_marks = 450
passing_marks = 270

if total_marks == passing_marks:        # Fixed: = to ==
    status = "Pass"
elif total_marks > 400 and total_marks <= 450:    # Fixed: and and to and
    status = "Distinction"              # Fixed: Status to status
elif total_marks > 350:                # Fixed: added :
    status = "Good"
elif total_marks > 60:
    status = "Barely Pass"              # Fixed: == to =
else:                                   # Fixed: added :
    status = "Fail"

print(f"Student {student_name}: {status}")
```
:::

### Exercise 5: Variable and Logic Error Hunt <Badge type="tip" text="Question" />

Fix this library fine calculator.

```python
days_overdue = 5
book_type = "reference"

if book_typ == "normal":
    fine = days_overdue * 0.50
elif book_type == "reference":
    Fine = days_overdue * 1.00
elif days_overdue <= 0:
    print("No fine")

print(f"Library fine: RM{fine}")
```

**Provide the corrected code.**

::: tip Answer
**Fixes made:**
- Line 3: Added `fine = 0` (initialize variable)
- Line 5: `book_typ` → `book_type` (fixed typo)
- Line 8: `Fine` → `fine` (fixed case sensitivity)
- Line 10: Added `fine = 0` (assign value in elif branch)

```python
days_overdue = 5
book_type = "reference"
fine = 0  # Fixed: Initialize fine variable

if book_type == "normal":               # Fixed: book_typ to book_type
    fine = days_overdue * 0.50
elif book_type == "reference":
    fine = days_overdue * 1.00          # Fixed: Fine to fine
elif days_overdue <= 0:
    fine = 0                            # Fixed: assign fine value
    print("No fine")

print(f"Library fine: RM{fine}")
```
:::

### Exercise 6: Boolean and Operator Error Hunt <Badge type="tip" text="Question" />

Fix the errors in this membership renewal system.

```python
membership_years = 3
fee_paid = 150
current_year = 2024
renewal_year = 2024

if membership_years = 5:
    discount = 0.20
elif membership_years > 3 and and fee_paid >= 100:
    discount = 0.15
elif not fee_paid < 100 and membership_years <= 1:
    discount = 0.05

if current_year = renewal_year:
    fee_paid = fee_paid - (fee_paid * Discount)

eligible = membership_years >= 1 and fee_paid > 0 and current_year = renewal_year

print(f"Eligible: {eligible}")
print(f"Final fee: RM{fee_paid}")
```

**Provide the corrected code.**

::: tip Answer
**Fixes made:**
- Line 5: Added `discount = 0` (initialize variable)
- Line 7: `=` → `==` (assignment to equality operator)
- Line 9: `and and` → `and` (removed duplicate operator)
- Line 11: `and` → `or` (fixed boolean logic)
- Line 13: `=` → `==` (assignment to equality operator)
- Line 14: `Discount` → `discount` (fixed case sensitivity)
- Line 16: `=` → `==` (assignment to equality operator)

```python
membership_years = 3
fee_paid = 150
current_year = 2024
renewal_year = 2024
discount = 0  # Fixed: Initialize discount variable

if membership_years == 5:              # Fixed: = to ==
    discount = 0.20
elif membership_years > 3 and fee_paid >= 100:    # Fixed: and and to and
    discount = 0.15
elif not fee_paid < 100 or membership_years <= 1:  # Fixed: and to or
    discount = 0.05

if current_year == renewal_year:        # Fixed: = to ==
    fee_paid = fee_paid - (fee_paid * discount)    # Fixed: Discount to discount

eligible = membership_years >= 1 and fee_paid > 0 and current_year == renewal_year  # Fixed: = to ==

print(f"Eligible: {eligible}")
print(f"Final fee: RM{fee_paid}")
```
:::