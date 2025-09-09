---
title: Chapter 4 - Tutorial 2 Answers
outline: deep
---

# Chapter 4 - Tutorial 2: Selection Logic Understanding - Answers

## Condition Ordering Analysis

## Boolean Logic Situations

### Exercise 1: University Admission <Badge type="tip" text="Question" />

Ahmad is applying to Sunway University foundation program. He is 18 years old and has a CGPA of 3.2. Ahmad has his SPM certificate but does not have any equivalent qualification. The system needs to determine if Ahmad should be accepted. Students are accepted if they are at least 17 years old, have CGPA of 3.0 or better, and possess either SPM certificate or equivalent qualification.

**Write the boolean statement for admission approval.**

::: tip Answer
```python
admission_approved = age >= 17 and cgpa >= 3.0 and (has_spm or has_equivalent)
```
:::

### Exercise 2: Employee Performance Bonus <Badge type="tip" text="Question" />

Siti has worked at TechCorp Malaysia for 3 years. Her performance rating this year is "Excellent". However, she received a written warning for tardiness in March. The company gives bonuses to employees who have worked for at least 2 years, have "Good" or "Excellent" performance ratings, and have no disciplinary actions this year.

**Write the boolean statement to check bonus eligibility.**

::: tip Answer
```python
bonus_eligible = years_worked >= 2 and (rating == "Good" or rating == "Excellent") and not has_disciplinary_action
```
:::

### Exercise 3: Library Access System <Badge type="tip" text="Question" />

Ali wants to borrow a new book from the university library. His membership status is "Active", he has no overdue books, and he currently has 4 books borrowed. The library allows borrowing if membership is "Active", student has no overdue items, and current borrowed count is less than 5 books.

**Write the boolean statement for borrowing permission.**

::: tip Answer
```python
can_borrow = membership_status == "Active" and not has_overdue and books_borrowed < 5
```
:::

### Exercise 4: E-commerce Shipping Policy <Badge type="tip" text="Question" />

Fatimah is making her third purchase on Shopee Malaysia. Her order value is RM85 and she is not a premium member. Shopee offers free shipping when order value is RM100 or more, or customer is a premium member, or it's their first order.

**Write the boolean statement for free shipping eligibility.**

::: tip Answer
```python
free_shipping = order_amount >= 100 or is_premium or order_count == 1
```
:::

### Exercise 5: Academic Second Chance Policy <Badge type="tip" text="Question" />

Kevin scored 45 in his Programming exam and has 85% class attendance. He has already retaken this exam once before. The department allows retakes if the student scored below 50, has at least 80% attendance, and has not retaken the exam twice already.

**Write the boolean statement for retake permission.**

::: tip Answer
```python
can_retake = exam_score < 50 and attendance_percentage >= 80 and retake_count < 2
```
:::

### Exercise 6: HR Recruitment Filter <Badge type="tip" text="Question" />

Maria is applying for a software engineer position. She has a bachelor's degree in Computer Science and 2 years of programming experience. The company accepts candidates who have a bachelor's degree with 3+ years experience, or a master's degree regardless of experience, or 5+ years experience regardless of degree.

**Write the boolean statement for screening approval.**

::: tip Answer
```python
screening_passed = (has_bachelor and years_experience >= 3) or has_master or years_experience >= 5
```
:::


## Selection Structure Situations

### Exercise 7: Hotel Room Booking System <Badge type="tip" text="Question" />

Razak is booking a hotel room during school holidays. The Langkawi Resort has different rates based on multiple factors. Standard rooms cost RM180 per night on weekdays and RM220 on weekends. Deluxe rooms are RM250 on weekdays and RM300 on weekends. During school holidays, all rates increase by 25%. If guests stay for 3 or more nights, they receive a 10% loyalty discount on the total bill. Senior citizens (65 and above) get an additional 5% discount. Razak wants a deluxe room for 4 nights during school holidays weekend, and he is 68 years old.

**Write the selection structure to calculate Razak's total bill.**

::: tip Answer
```python
# Determine base rate
if room_type == "Standard" and is_weekend:
    base_rate = 220
elif room_type == "Standard":
    base_rate = 180
elif room_type == "Deluxe" and is_weekend:
    base_rate = 300
else:
    base_rate = 250

# Apply holiday surcharge
if is_holiday:
    base_rate = base_rate * 1.25

# Calculate subtotal
subtotal = base_rate * nights

# Apply loyalty discount
if nights >= 3:
    subtotal = subtotal * 0.9

# Apply senior discount
if age >= 65:
    subtotal = subtotal * 0.95

total_bill = subtotal
```
:::

### Exercise 8: Scholarship Award System <Badge type="tip" text="Question" />

The university awards different scholarships based on academic performance and financial need. Students with CGPA 3.8-4.0 receive Full Scholarship (100% tuition waiver). Those with CGPA 3.5-3.79 get Partial Scholarship (50% waiver). CGPA 3.0-3.49 qualifies for Merit Award (25% waiver). However, if family income exceeds RM8000 monthly, scholarship percentage is reduced by half. Students from rural areas (postal codes starting with 0, 1, 2) get an extra 10% added to their scholarship percentage. Invalid applications occur when CGPA is below 3.0, above 4.0, or when required documents are missing.

Aishah has CGPA 3.6, family income RM6000, postal code 01000, and all documents complete.

**Write the selection structure to determine Aishah's scholarship percentage.**

::: tip Answer
```python
# Check for invalid applications
if cgpa < 3.0 or cgpa > 4.0 or not documents_complete:
    scholarship_percentage = "Invalid"
elif cgpa >= 3.8:
    scholarship_percentage = 100
elif cgpa >= 3.5:
    scholarship_percentage = 50
else:
    scholarship_percentage = 25

# Apply income reduction (only for valid applications)
if scholarship_percentage != "Invalid" and family_income > 8000:
    scholarship_percentage = scholarship_percentage / 2

# Apply rural area bonus (only for valid applications)
if scholarship_percentage != "Invalid" and (postal_code[0] == "0" or postal_code[0] == "1" or postal_code[0] == "2"):
    scholarship_percentage = scholarship_percentage + 10
```
:::

### Exercise 9: Courier Delivery Pricing <Badge type="tip" text="Question" />

PosLaju has a complex pricing structure for package delivery. Base rates depend on weight: up to 500g costs RM8, 501g-1kg costs RM12, 1.1kg-3kg costs RM18, above 3kg costs RM25. Express delivery (next day) adds 50% to base price. Fragile items add RM5 handling fee. Deliveries to East Malaysia (Sabah/Sarawak) double the total price. Insurance is optional: RM2 for items under RM100 value, RM5 for RM100-500, RM10 for above RM500. Weekend delivery adds another RM8. If total weight exceeds 10kg, bulk discount of 15% applies to final price.

Lim is sending a 2.5kg fragile item worth RM300 to Kuching with express delivery, insurance, on Saturday.

**Write the selection structure to calculate Lim's delivery cost.**

::: tip Answer
```python
# Determine base price by weight
if weight <= 0.5:
    base_price = 8
elif weight <= 1.0:
    base_price = 12
elif weight <= 3.0:
    base_price = 18
else:
    base_price = 25

# Apply express delivery
if is_express:
    base_price = base_price * 1.5

# Add fragile handling fee
if is_fragile:
    base_price = base_price + 5

# Add insurance cost
if item_value < 100:
    insurance_cost = 2
elif item_value <= 500:
    insurance_cost = 5
else:
    insurance_cost = 10

total_cost = base_price + insurance_cost

# Add weekend delivery
if is_weekend:
    total_cost = total_cost + 8

# Double for East Malaysia
if destination == "Sabah" or destination == "Sarawak":
    total_cost = total_cost * 2

# Apply bulk discount
if weight > 10:
    total_cost = total_cost * 0.85
```
:::

### Exercise 10: Mobile Data Plan Billing <Badge type="tip" text="Question" />

Phone plans: Basic RM30 (5GB), Premium RM50 (15GB). Extra data costs RM2/GB for Basic, RM1/GB for Premium. Students get 20% discount.

Sarah has Premium plan, used 8GB data, is a student.

**Write the selection structure to calculate Sarah's monthly bill.**

::: tip Answer
```python
# Determine plan fee
if plan_type == "Basic":
    monthly_fee = 30
    data_allowance = 5
    overage_rate = 2
else:  # Premium
    monthly_fee = 50
    data_allowance = 15
    overage_rate = 1

# Calculate overage charges
if data_used > data_allowance:
    overage_charges = (data_used - data_allowance) * overage_rate
else:
    overage_charges = 0

# Calculate total
total = monthly_fee + overage_charges

# Apply student discount
if is_student:
    total = total * 0.8

final_bill = total
```
:::

### Exercise 11: Course Registration Fees <Badge type="tip" text="Question" />

Students register maximum 20 credits. Full-time (12+ credits) pays RM5000, part-time pays RM300 per credit. International students pay double fees.

Ahmad wants 15 credits and is a local student.

**Write the selection structure to calculate Ahmad's fees.**

::: tip Answer
```python
# Calculate base fee
if credits >= 12:
    fee = 5000  # Full-time
else:
    fee = credits * 300  # Part-time

# Apply international surcharge
if is_international:
    fee = fee * 2

total_fee = fee
```
:::

### Exercise 12: Medical Check-up Fees <Badge type="tip" text="Question" />

Clinic fees: Basic check-up RM30, Full check-up RM80. Senior citizens (65+) get 50% discount. Students get 30% discount.

Ahmad, age 22, is a student wanting a full check-up.

**Write the selection structure to calculate Ahmad's medical fees.**

::: tip Answer
```python
# Determine base fee
if checkup_type == "Basic":
    fee = 30
else:  # Full
    fee = 80

# Apply discounts
if age >= 65:
    fee = fee * 0.5  # Senior discount
elif is_student:
    fee = fee * 0.7  # Student discount

total_fee = fee
```
:::