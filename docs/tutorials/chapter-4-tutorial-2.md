---
title: Chapter 4 - Tutorial 2
outline: deep
---

# Chapter 4 - Tutorial 2: Data Types, Strings and Output

**Instructions**: Answer all questions without running the code.

## Data Types and Casting

### Exercise 1: Naming the Type <Badge type="tip" text="Question" />

```text
25            # ?
"25"          # ?
25.0          # ?
True          # ?
"True"        # ?
3.0           # ?
"3.0"         # ?
""            # ?
"  "          # ?
False         # ?
```

**State the data type of each value above.**

### Exercise 2: Predicting a Cast <Badge type="tip" text="Question" />

```python
int("25")
int("25.0")
int(3.9)
int(-3.9)
float("7")
float("3.5")
str(100)
int("abc")
```

**State the value each conversion produces. Where a conversion does not produce a value, state the error it raises instead.**

### Exercise 3: Choosing Types for a Scenario <Badge type="tip" text="Question" />

A canteen ordering system stores the following information about one order.

> Nurul orders 3 plates of nasi goreng at RM6.50 each. Her name is recorded on the receipt, the order number is 47, and the system records that she has **not** paid yet.

**List every variable the program needs. For each one, give a suitable identifier, the data type it should hold, and its starting value. State also which of these values would be obtained through `input()`, and the type `input()` returns for each.**

## Strings, Functions and Methods

### Exercise 4: Measuring and Changing Text <Badge type="tip" text="Question" />

Given `text = "Hello World"`:

```python
print(len(text))
print(text.upper())
print(text.lower())
print(len(""))
print(len("  "))
print(len("Hello") + len("World"))
```

**State the exact output of each line.**

### Exercise 5: What Does the Variable Hold? <Badge type="tip" text="Question" />

```python
# Program A          # Program B              # Program C                # Program D
text = "hi"          text = "hi"              text = "hi"                text = "hi"
text.upper()         shout = text.upper()     text = text.upper()        text.upper().lower()
print(text)          print(text)              print(text)                print(text)
```

**State the output of each program and explain the reason for it.**

### Exercise 6: Function or Method? <Badge type="tip" text="Question" />

Given `text = "Hello"`:

```python
len(text)
text.len()
upper(text)
text.upper()
text.upper
print(len(text))
```

**State whether each call is valid. Rewrite any that are not, and explain what is wrong with them.**

## Tracing Program Output

### Exercise 7: Separators and Line Endings <Badge type="tip" text="Question" />

```python
print("A", "B", "C")
print("A", "B", "C", sep="")
print("A", "B", "C", sep=" - ")

print("X", end="")
print("Y", end="")
print("Z")
```

**Write the exact output of this program, stating how many lines are printed and what appears on each one.**

### Exercise 8: Reading f-strings <Badge type="tip" text="Question" />

Given `name = "aiman"` and `score = 90`:

```python
print(f"{name} scored {score}")
print("{name} scored {score}")
print(f"{name.upper()} scored {score}")
print(f"{name} has {len(name)} letters")
```

**State the exact output of each line.**

### Exercise 9: Following the Indentation <Badge type="tip" text="Question" />

Three versions of the same four lines, differing only in indentation and in one word.

```python
# Version A          # Version B          # Version C
if True:             if False:            if False:
    print("one")         print("one")         print("one")
    print("two")         print("two")     print("two")
print("three")       print("three")       print("three")
```

**State the output of each version. Then explain which differences between the versions **Python** reports as an error, and which it accepts silently.**

## Component Error Hunt

### Exercise 10: Age Calculator <Badge type="tip" text="Question" />

This program should ask for the user's age and state how old they will be next year.

```python
age = input("Enter your age: ")
next_age = age + 1
print("Next year you will be " + next_age)
```

**Identify every error and provide the corrected code.**

### Exercise 11: Greeting Program <Badge type="tip" text="Question" />

This program should greet the user and display their course.

```python
name = input("Enter your name: ")

print("Hello, " + name.upper)
print(f"Your name has {len(name)} letters")

class = "CP115"
print(f"Course: {class}")
```

**Identify every error and provide the corrected code.**

### Exercise 12: Rectangle Area <Badge type="tip" text="Question" />

This program should calculate the area of a rectangle.

```python
# Calculate the area of a rectangle
Length = float(input("Length: "))
width = float(input("Width: "))

area = length * width
print("The area is {area}")
```

**Identify every error and provide the corrected code. State which of the errors stop the program from running and which do not.**

## Writing the Program

Write your code on paper. Use only the components covered in this chapter.

### Exercise 13: Student Card <Badge type="tip" text="Question" />

Write a program that asks the user for their full name and their matric number, then prints the name in uppercase, the number of characters in the name, and the matric number. Use an f-string for at least one of the lines.

### Exercise 14: Circle Measurements <Badge type="tip" text="Question" />

Write a program that asks the user for the radius of a circle, then prints its area and its circumference. Use the `math` module for π and for squaring the radius.

### Exercise 15: Canteen Receipt <Badge type="tip" text="Question" />

Write a program that asks for an item name, its price, and how many the customer wants, then prints a receipt showing the item name in uppercase and the total cost. Include a block comment at the top stating what the program does, and one comment at the end of a line of code.

## Selection Logic Understanding

### Exercise 16: University Admission <Badge type="tip" text="Question" />

Ahmad is applying to Sunway University foundation program. He is 18 years old and has a CGPA of 3.2. Ahmad has his SPM certificate but does not have any equivalent qualification. The system needs to determine if Ahmad should be accepted. Students are accepted if they are at least 17 years old, have CGPA of 3.0 or better, and possess either SPM certificate or equivalent qualification.

**Write the boolean statement for admission approval.**

### Exercise 17: Employee Performance Bonus <Badge type="tip" text="Question" />

Siti has worked at TechCorp Malaysia for 3 years. Her performance rating this year is "Excellent". However, she received a written warning for tardiness in March. The company gives bonuses to employees who have worked for at least 2 years, have "Good" or "Excellent" performance ratings, and have no disciplinary actions this year.

**Write the boolean statement to check bonus eligibility.**

### Exercise 18: Library Access System <Badge type="tip" text="Question" />

Ali wants to borrow a new book from the university library. His membership status is "Active", he has no overdue books, and he currently has 4 books borrowed. The library allows borrowing if membership is "Active", student has no overdue items, and current borrowed count is less than 5 books.

**Write the boolean statement for borrowing permission.**

### Exercise 19: E-commerce Shipping Policy <Badge type="tip" text="Question" />

Fatimah is making her third purchase on Shopee Malaysia. Her order value is RM85 and she is not a premium member. Shopee offers free shipping when order value is RM100 or more, or customer is a premium member, or it's their first order.

**Write the boolean statement for free shipping eligibility.**

### Exercise 20: Academic Second Chance Policy <Badge type="tip" text="Question" />

Kevin scored 45 in his Programming exam and has 85% class attendance. He has already retaken this exam once before. The department allows retakes if the student scored below 50, has at least 80% attendance, and has not retaken the exam twice already.

**Write the boolean statement for retake permission.**

### Exercise 21: HR Recruitment Filter <Badge type="tip" text="Question" />

Maria is applying for a software engineer position. She has a bachelor's degree in Computer Science and 2 years of programming experience. The company accepts candidates who have a bachelor's degree with 3+ years experience, or a master's degree regardless of experience, or 5+ years experience regardless of degree.

**Write the boolean statement for screening approval.**


## Selection Structure Situations

### Exercise 22: Hotel Room Booking System <Badge type="tip" text="Question" />

Razak is booking a hotel room during school holidays. The Langkawi Resort has different rates based on multiple factors. Standard rooms cost RM180 per night on weekdays and RM220 on weekends. Deluxe rooms are RM250 on weekdays and RM300 on weekends. During school holidays, all rates increase by 25%. If guests stay for 3 or more nights, they receive a 10% loyalty discount on the total bill. Senior citizens (65 and above) get an additional 5% discount. Razak wants a deluxe room for 4 nights during school holidays weekend, and he is 68 years old.

**Write the selection structure to calculate Razak's total bill.**

### Exercise 23: Scholarship Award System <Badge type="tip" text="Question" />

The university awards different scholarships based on academic performance and financial need. Students with CGPA 3.8-4.0 receive Full Scholarship (100% tuition waiver). Those with CGPA 3.5-3.79 get Partial Scholarship (50% waiver). CGPA 3.0-3.49 qualifies for Merit Award (25% waiver). However, if family income exceeds RM8000 monthly, scholarship percentage is reduced by half. Students from rural areas (postal codes starting with 0, 1, 2) get an extra 10% added to their scholarship percentage. Invalid applications occur when CGPA is below 3.0, above 4.0, or when required documents are missing.

Aishah has CGPA 3.6, family income RM6000, postal code 01000, and all documents complete.

**Write the selection structure to determine Aishah's scholarship percentage.**

### Exercise 24: Courier Delivery Pricing <Badge type="tip" text="Question" />

PosLaju has a complex pricing structure for package delivery. Base rates depend on weight: up to 500g costs RM8, 501g-1kg costs RM12, 1.1kg-3kg costs RM18, above 3kg costs RM25. Express delivery (next day) adds 50% to base price. Fragile items add RM5 handling fee. Deliveries to East Malaysia (Sabah/Sarawak) double the total price. Insurance is optional: RM2 for items under RM100 value, RM5 for RM100-500, RM10 for above RM500. Weekend delivery adds another RM8. If total weight exceeds 10kg, bulk discount of 15% applies to final price.

Lim is sending a 2.5kg fragile item worth RM300 to Kuching with express delivery, insurance, on Saturday.

**Write the selection structure to calculate Lim's delivery cost.**

### Exercise 25: Mobile Data Plan Billing <Badge type="tip" text="Question" />

Phone plans: Basic RM30 (5GB), Premium RM50 (15GB). Extra data costs RM2/GB for Basic, RM1/GB for Premium. Students get 20% discount.

Sarah has Premium plan, used 8GB data, is a student.

**Write the selection structure to calculate Sarah's monthly bill.**

### Exercise 26: Course Registration Fees <Badge type="tip" text="Question" />

Students register maximum 20 credits. Full-time (12+ credits) pays RM5000, part-time pays RM300 per credit. International students pay double fees.

Ahmad wants 15 credits and is a local student.

**Write the selection structure to calculate Ahmad's fees.**

### Exercise 27: Medical Check-up Fees <Badge type="tip" text="Question" />

Clinic fees: Basic check-up RM30, Full check-up RM80. Senior citizens (65+) get 50% discount. Students get 30% discount.

Ahmad, age 22, is a student wanting a full check-up.

**Write the selection structure to calculate Ahmad's medical fees.**
