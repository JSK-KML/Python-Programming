---
title: Chapter 4 - Tutorial 2
outline: deep
---

# Chapter 4 - Tutorial 2: Selection Logic Understanding

## Condition Ordering Analysis

## Boolean Logic Situations

### Exercise 1: University Admission <Badge type="tip" text="Question" />

Ahmad is applying to Sunway University foundation program. He is 18 years old and has a CGPA of 3.2. Ahmad has his SPM certificate but does not have any equivalent qualification. The system needs to determine if Ahmad should be accepted. Students are accepted if they are at least 17 years old, have CGPA of 3.0 or better, and possess either SPM certificate or equivalent qualification.

**Write the boolean statement for admission approval.**

### Exercise 2: Employee Performance Bonus <Badge type="tip" text="Question" />

Siti has worked at TechCorp Malaysia for 3 years. Her performance rating this year is "Excellent". However, she received a written warning for tardiness in March. The company gives bonuses to employees who have worked for at least 2 years, have "Good" or "Excellent" performance ratings, and have no disciplinary actions this year.

**Write the boolean statement to check bonus eligibility.**

### Exercise 3: Library Access System <Badge type="tip" text="Question" />

Ali wants to borrow a new book from the university library. His membership status is "Active", he has no overdue books, and he currently has 4 books borrowed. The library allows borrowing if membership is "Active", student has no overdue items, and current borrowed count is less than 5 books.

**Write the boolean statement for borrowing permission.**

### Exercise 4: E-commerce Shipping Policy <Badge type="tip" text="Question" />

Fatimah is making her third purchase on Shopee Malaysia. Her order value is RM85 and she is not a premium member. Shopee offers free shipping when order value is RM100 or more, or customer is a premium member, or it's their first order.

**Write the boolean statement for free shipping eligibility.**

### Exercise 5: Academic Second Chance Policy <Badge type="tip" text="Question" />

Kevin scored 45 in his Programming exam and has 85% class attendance. He has already retaken this exam once before. The department allows retakes if the student scored below 50, has at least 80% attendance, and has not retaken the exam twice already.

**Write the boolean statement for retake permission.**

### Exercise 6: HR Recruitment Filter <Badge type="tip" text="Question" />

Maria is applying for a software engineer position. She has a bachelor's degree in Computer Science and 2 years of programming experience. The company accepts candidates who have a bachelor's degree with 3+ years experience, or a master's degree regardless of experience, or 5+ years experience regardless of degree.

**Write the boolean statement for screening approval.**


## Selection Structure Situations

### Exercise 7: Hotel Room Booking System <Badge type="tip" text="Question" />

Razak is booking a hotel room during school holidays. The Langkawi Resort has different rates based on multiple factors. Standard rooms cost RM180 per night on weekdays and RM220 on weekends. Deluxe rooms are RM250 on weekdays and RM300 on weekends. During school holidays, all rates increase by 25%. If guests stay for 3 or more nights, they receive a 10% loyalty discount on the total bill. Senior citizens (65 and above) get an additional 5% discount. Razak wants a deluxe room for 4 nights during school holidays weekend, and he is 68 years old.

**Write the selection structure to calculate Razak's total bill.**

### Exercise 8: Scholarship Award System <Badge type="tip" text="Question" />

The university awards different scholarships based on academic performance and financial need. Students with CGPA 3.8-4.0 receive Full Scholarship (100% tuition waiver). Those with CGPA 3.5-3.79 get Partial Scholarship (50% waiver). CGPA 3.0-3.49 qualifies for Merit Award (25% waiver). However, if family income exceeds RM8000 monthly, scholarship percentage is reduced by half. Students from rural areas (postal codes starting with 0, 1, 2) get an extra 10% added to their scholarship percentage. Invalid applications occur when CGPA is below 3.0, above 4.0, or when required documents are missing.

Aishah has CGPA 3.6, family income RM6000, postal code 01000, and all documents complete.

**Write the selection structure to determine Aishah's scholarship percentage.**

### Exercise 9: Courier Delivery Pricing <Badge type="tip" text="Question" />

PosLaju has a complex pricing structure for package delivery. Base rates depend on weight: up to 500g costs RM8, 501g-1kg costs RM12, 1.1kg-3kg costs RM18, above 3kg costs RM25. Express delivery (next day) adds 50% to base price. Fragile items add RM5 handling fee. Deliveries to East Malaysia (Sabah/Sarawak) double the total price. Insurance is optional: RM2 for items under RM100 value, RM5 for RM100-500, RM10 for above RM500. Weekend delivery adds another RM8. If total weight exceeds 10kg, bulk discount of 15% applies to final price.

Lim is sending a 2.5kg fragile item worth RM300 to Kuching with express delivery, insurance, on Saturday.

**Write the selection structure to calculate Lim's delivery cost.**
