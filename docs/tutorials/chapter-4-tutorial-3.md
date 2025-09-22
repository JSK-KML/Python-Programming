---
title: Chapter 4 - Tutorial 3
outline: deep
---

# Chapter 4 - Tutorial 3: Operator Precedence & Logic Errors

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