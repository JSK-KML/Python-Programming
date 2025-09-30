---
title: Chapter 7 - Tutorial 2 Answers
outline: deep
---

# Chapter 7 - Tutorial 2: Counter-Controlled Loops - Answers

## Exercise 1: Restaurant Bill Calculator

### Question
A restaurant needs to calculate total bills for 5 customers including service charge and tax.

**Charges:**
- Service charge: 5% of bill
- Tax: 6% of bill (calculated on original amount, not after service charge)
- Total = Bill + Service Charge + Tax

**Partially completed code:**
```python
print("=== RESTAURANT BILL CALCULATOR ===")
service_rate = 0.05
tax_rate = 0.06

for customer in range(1, __):
    bill = float(input(f"Enter bill amount for Customer {customer}: RM"))

    service_charge = bill * __
    tax = bill * __
    total = bill + __ + __

    print(f"Customer {customer}:")
    print(f"  Bill: RM{bill:.2f}")
    print(f"  Service Charge (5%): RM{service_charge:.2f}")
    print(f"  Tax (6%): RM{tax:.2f}")
    print(f"  Total: RM{total:.2f}")
    print()
```

### Answer
```python
print("=== RESTAURANT BILL CALCULATOR ===")
service_rate = 0.05
tax_rate = 0.06

for customer in range(1, 6):  # 6 because range stops before the end value
    bill = float(input(f"Enter bill amount for Customer {customer}: RM"))

    service_charge = bill * service_rate  # Calculate 5% of bill
    tax = bill * tax_rate  # Calculate 6% of bill
    total = bill + service_charge + tax  # Add all three amounts

    print(f"Customer {customer}:")
    print(f"  Bill: RM{bill:.2f}")
    print(f"  Service Charge (5%): RM{service_charge:.2f}")
    print(f"  Tax (6%): RM{tax:.2f}")
    print(f"  Total: RM{total:.2f}")
    print()
```

### Explanation
1. **`range(1, 6)`** - Loop 5 times for customers 1, 2, 3, 4, 5. We use 6 as the end value because range() stops before reaching it.
2. **`service_charge = bill * service_rate`** - Multiply the bill by 0.05 to get 5% service charge
3. **`tax = bill * tax_rate`** - Multiply the bill by 0.06 to get 6% tax (both calculated from original bill amount)
4. **`total = bill + service_charge + tax`** - Add all three components together to get the final total

**Example:** If bill = RM50.00:
- Service charge = 50 × 0.05 = RM2.50
- Tax = 50 × 0.06 = RM3.00
- Total = 50 + 2.50 + 3.00 = RM55.50

---

## Exercise 2: Student Final Grade Calculator

### Question
Calculate final grades for 5 students based on Test score (70%) and Assignment score (30%).

**Grading system:**
- A: 80-100
- B: 70-79
- C: 60-69
- D: 50-59
- F: Below 50

**Partially completed code:**
```python
print("=== STUDENT FINAL GRADE CALCULATOR ===")
test_weight = 0.70
assignment_weight = 0.30

for student in range(1, __):
    print(f"Student {student}:")
    test_score = int(input("  Enter test score: "))
    assignment_score = int(input("  Enter assignment score: "))

    final_score = (test_score * __) + (assignment_score * __)

    if final_score >= __:
        grade = "__"
    elif final_score >= __:
        grade = "__"
    elif final_score >= __:
        grade = "__"
    elif final_score >= __:
        grade = "__"
    else:
        grade = "__"

    print(f"  Test: {test_score} (70%), Assignment: {assignment_score} (30%)")
    print(f"  Final Score: {final_score:.2f} = Grade {grade}")
    print()
```

### Answer
```python
print("=== STUDENT FINAL GRADE CALCULATOR ===")
test_weight = 0.70
assignment_weight = 0.30

for student in range(1, 6):  # Loop for 5 students
    print(f"Student {student}:")
    test_score = int(input("  Enter test score: "))
    assignment_score = int(input("  Enter assignment score: "))

    final_score = (test_score * test_weight) + (assignment_score * assignment_weight)

    if final_score >= 80:
        grade = "A"
    elif final_score >= 70:
        grade = "B"
    elif final_score >= 60:
        grade = "C"
    elif final_score >= 50:
        grade = "D"
    else:
        grade = "F"

    print(f"  Test: {test_score} (70%), Assignment: {assignment_score} (30%)")
    print(f"  Final Score: {final_score:.2f} = Grade {grade}")
    print()
```

### Explanation
1. **`range(1, 6)`** - Loop 5 times for students 1-5
2. **`final_score = (test_score * test_weight) + (assignment_score * assignment_weight)`** - Calculate weighted average:
   - Test contributes 70% of final score
   - Assignment contributes 30% of final score
3. **Grading thresholds** - Use if-elif-else to assign grades:
   - **80 and above** → Grade A
   - **70-79** → Grade B
   - **60-69** → Grade C
   - **50-59** → Grade D
   - **Below 50** → Grade F

**Example:** If test_score = 85 and assignment_score = 90:
- final_score = (85 × 0.70) + (90 × 0.30)
- final_score = 59.5 + 27 = 86.5
- Since 86.5 ≥ 80, grade = "A"

---

## Exercise 3: Electricity Bill with Rebate

### Question
Calculate electricity bills for 5 houses. Bills include usage charge, surcharge if high usage, and rebate if low usage.

**Rates:**
- RM0.40 per kWh
- Surcharge: RM25 if usage > 300 kWh
- Rebate: RM15 if usage < 100 kWh

**Partially completed code:**
```python
print("=== ELECTRICITY BILL WITH REBATE ===")
rate = 0.40
surcharge = 25
rebate = 15

for house in range(1, __):
    kwh = float(input(f"Enter kWh usage for House {house}: "))
    basic_charge = kwh * __

    if kwh > __:
        extra_charge = __
    else:
        extra_charge = __

    if kwh < __:
        rebate_amount = __
    else:
        rebate_amount = __

    total = basic_charge + __ - __

    print(f"House {house}:")
    print(f"  Usage: {kwh} kWh")
    print(f"  Basic Charge: RM{basic_charge:.2f}")
    print(f"  Surcharge: RM{extra_charge:.2f}")
    print(f"  Rebate: -RM{rebate_amount:.2f}")
    print(f"  Total: RM{total:.2f}")
    print()
```

### Answer
```python
print("=== ELECTRICITY BILL WITH REBATE ===")
rate = 0.40
surcharge = 25
rebate = 15

for house in range(1, 6):  # Loop for 5 houses
    kwh = float(input(f"Enter kWh usage for House {house}: "))
    basic_charge = kwh * rate  # Calculate basic charge

    if kwh > 300:  # Check if high usage
        extra_charge = surcharge  # Add surcharge
    else:
        extra_charge = 0  # No surcharge

    if kwh < 100:  # Check if low usage
        rebate_amount = rebate  # Give rebate
    else:
        rebate_amount = 0  # No rebate

    total = basic_charge + extra_charge - rebate_amount  # Calculate total

    print(f"House {house}:")
    print(f"  Usage: {kwh} kWh")
    print(f"  Basic Charge: RM{basic_charge:.2f}")
    print(f"  Surcharge: RM{extra_charge:.2f}")
    print(f"  Rebate: -RM{rebate_amount:.2f}")
    print(f"  Total: RM{total:.2f}")
    print()
```

### Explanation
1. **`range(1, 6)`** - Loop 5 times for houses 1-5
2. **`basic_charge = kwh * rate`** - Calculate basic charge at RM0.40 per kWh
3. **Surcharge logic:**
   - **If kwh > 300** → Add RM25 surcharge for high usage
   - **Otherwise** → No surcharge (extra_charge = 0)
4. **Rebate logic:**
   - **If kwh < 100** → Give RM15 rebate for low usage
   - **Otherwise** → No rebate (rebate_amount = 0)
5. **`total = basic_charge + extra_charge - rebate_amount`** - Calculate final bill

**Example 1:** If kwh = 85 (low usage):
- basic_charge = 85 × 0.40 = RM34.00
- extra_charge = 0 (not > 300)
- rebate_amount = 15 (< 100)
- total = 34 + 0 - 15 = RM19.00

**Example 2:** If kwh = 320 (high usage):
- basic_charge = 320 × 0.40 = RM128.00
- extra_charge = 25 (> 300)
- rebate_amount = 0 (not < 100)
- total = 128 + 25 - 0 = RM153.00

---

## Exercise 4: Online Store Checkout

### Question
Calculate final prices for 5 products with discount and shipping fee.

**Rules:**
- Discount: 10% if price ≥ RM1000, otherwise 5%
- Shipping: RM10 if price < RM500, otherwise FREE

**Partially completed code:**
```python
print("=== ONLINE STORE CHECKOUT ===")

for product_num in range(1, __):
    price = float(input(f"Enter price for Product {product_num}: RM"))

    if price >= __:
        discount_rate = __
    else:
        discount_rate = __

    discount = price * __
    price_after_discount = price - __

    if price < __:
        shipping = __
    else:
        shipping = __

    final_price = __ + __

    print(f"Product {product_num}:")
    print(f"  Original Price: RM{price:.2f}")
    print(f"  Discount ({int(discount_rate*100)}%): -RM{discount:.2f}")
    print(f"  Shipping: RM{shipping:.2f}")
    print(f"  Final Price: RM{final_price:.2f}")
    print()
```

### Answer
```python
print("=== ONLINE STORE CHECKOUT ===")

for product_num in range(1, 6):  # Loop for 5 products
    price = float(input(f"Enter price for Product {product_num}: RM"))

    if price >= 1000:  # Check if high-value item
        discount_rate = 0.10  # 10% discount
    else:
        discount_rate = 0.05  # 5% discount

    discount = price * discount_rate  # Calculate discount amount
    price_after_discount = price - discount  # Subtract discount from price

    if price < 500:  # Check if needs shipping charge
        shipping = 10  # RM10 shipping
    else:
        shipping = 0  # Free shipping

    final_price = price_after_discount + shipping  # Add shipping to discounted price

    print(f"Product {product_num}:")
    print(f"  Original Price: RM{price:.2f}")
    print(f"  Discount ({int(discount_rate*100)}%): -RM{discount:.2f}")
    print(f"  Shipping: RM{shipping:.2f}")
    print(f"  Final Price: RM{final_price:.2f}")
    print()
```

### Explanation
1. **`range(1, 6)`** - Loop 5 times for products 1-5
2. **Discount logic:**
   - **If price ≥ RM1000** → 10% discount (discount_rate = 0.10)
   - **Otherwise** → 5% discount (discount_rate = 0.05)
3. **`discount = price * discount_rate`** - Calculate discount amount
4. **`price_after_discount = price - discount`** - Subtract discount from original price
5. **Shipping logic:**
   - **If price < RM500** → RM10 shipping charge
   - **Otherwise** → Free shipping (shipping = 0)
6. **`final_price = price_after_discount + shipping`** - Add shipping to discounted price

**Example 1:** If price = RM450:
- discount_rate = 0.05 (5%)
- discount = 450 × 0.05 = RM22.50
- price_after_discount = 450 - 22.50 = RM427.50
- shipping = 10 (< 500)
- final_price = 427.50 + 10 = RM437.50

**Example 2:** If price = RM1200:
- discount_rate = 0.10 (10%)
- discount = 1200 × 0.10 = RM120.00
- price_after_discount = 1200 - 120 = RM1080.00
- shipping = 0 (≥ 500)
- final_price = 1080 + 0 = RM1080.00

---

## Exercise 5: International Shipping Calculator

### Question
Calculate shipping costs for 5 packages including weight charges, insurance, and express delivery option.

**Rates:**
- Base rate: RM5
- If weight > 5kg: Add RM2 per kg for excess weight
- Insurance: RM8 if package value > RM500
- Express delivery: RM12 (ask user yes/no)

**Partially completed code:**
```python
print("=== INTERNATIONAL SHIPPING CALCULATOR ===")
base_rate = 5
rate_per_kg = 2
insurance_fee = 8
express_fee = 12

for package_num in range(1, __):
    print(f"Package {package_num}:")
    weight = float(input("  Enter weight (kg): "))
    value = float(input("  Enter package value (RM): "))
    express = input("  Express delivery? (yes/no): ")

    if weight > __:
        excess_weight = weight - __
        weight_charge = base_rate + (excess_weight * __)
    else:
        weight_charge = __

    if value > __:
        insurance = __
    else:
        insurance = __

    if express == "__":
        express_charge = __
    else:
        express_charge = __

    total = __ + __ + __

    print(f"  Weight Charge: RM{weight_charge:.2f}")
    print(f"  Insurance: RM{insurance:.2f}")
    print(f"  Express: RM{express_charge:.2f}")
    print(f"  Total: RM{total:.2f}")
    print()
```

### Answer
```python
print("=== INTERNATIONAL SHIPPING CALCULATOR ===")
base_rate = 5
rate_per_kg = 2
insurance_fee = 8
express_fee = 12

for package_num in range(1, 6):  # Loop for 5 packages
    print(f"Package {package_num}:")
    weight = float(input("  Enter weight (kg): "))
    value = float(input("  Enter package value (RM): "))
    express = input("  Express delivery? (yes/no): ")

    if weight > 5:  # Check if weight exceeds 5kg
        excess_weight = weight - 5  # Calculate excess weight
        weight_charge = base_rate + (excess_weight * rate_per_kg)  # Base + excess charge
    else:
        weight_charge = base_rate  # Only base rate

    if value > 500:  # Check if valuable package
        insurance = insurance_fee  # Add insurance
    else:
        insurance = 0  # No insurance

    if express == "yes":  # Check if express delivery requested
        express_charge = express_fee  # Add express fee
    else:
        express_charge = 0  # No express fee

    total = weight_charge + insurance + express_charge  # Calculate total

    print(f"  Weight Charge: RM{weight_charge:.2f}")
    print(f"  Insurance: RM{insurance:.2f}")
    print(f"  Express: RM{express_charge:.2f}")
    print(f"  Total: RM{total:.2f}")
    print()
```

### Explanation
1. **`range(1, 6)`** - Loop 5 times for packages 1-5
2. **Weight charge logic:**
   - **If weight > 5kg:**
     - Calculate excess_weight = weight - 5
     - weight_charge = base_rate (RM5) + (excess_weight × RM2)
   - **Otherwise:** weight_charge = base_rate only (RM5)
3. **Insurance logic:**
   - **If value > RM500** → Add RM8 insurance
   - **Otherwise** → No insurance (insurance = 0)
4. **Express delivery logic:**
   - **If express == "yes"** → Add RM12 express fee
   - **Otherwise** → No express fee (express_charge = 0)
5. **`total = weight_charge + insurance + express_charge`** - Sum all charges

**Example 1:** If weight = 3kg, value = RM400, express = "no":
- weight_charge = 5 (not > 5kg)
- insurance = 0 (not > RM500)
- express_charge = 0 (not "yes")
- total = 5 + 0 + 0 = RM5.00

**Example 2:** If weight = 8kg, value = RM1200, express = "yes":
- excess_weight = 8 - 5 = 3kg
- weight_charge = 5 + (3 × 2) = 5 + 6 = RM11.00
- insurance = 8 (> RM500)
- express_charge = 12 ("yes")
- total = 11 + 8 + 12 = RM31.00

---

## Exercise 6: Predict the Output

### Question
Look at this code snippet and predict exactly what will be printed:

```python
counter = 15
total = 0
while counter >= 8:
    total += counter
    print(f"Step {counter}: Total = {total}")
    counter -= 3
print(f"Final result: {total}")
```

### Answer
**Expected Output:**
```
Step 15: Total = 15
Step 12: Total = 27
Step 9: Total = 36
Final result: 36
```

### Explanation
Let's trace through the loop step by step:

**Initial values:**
- counter = 15
- total = 0
- Loop condition: counter >= 8

**Iteration 1:**
- counter = 15 (≥ 8, continue)
- total = total + counter = 0 + 15 = 15
- Print: "Step 15: Total = 15"
- counter = counter - 3 = 15 - 3 = 12

**Iteration 2:**
- counter = 12 (≥ 8, continue)
- total = total + counter = 15 + 12 = 27
- Print: "Step 12: Total = 27"
- counter = counter - 3 = 12 - 3 = 9

**Iteration 3:**
- counter = 9 (≥ 8, continue)
- total = total + counter = 27 + 9 = 36
- Print: "Step 9: Total = 36"
- counter = counter - 3 = 9 - 3 = 6

**Loop ends:**
- counter = 6 (< 8, stop loop)
- Print: "Final result: 36"

**Key points:**
- The loop adds counter values: 15 + 12 + 9 = 36
- Counter decreases by 3 each iteration
- Loop stops when counter becomes 6 (less than 8)

---

## Exercise 7: Range Prediction Challenge

### Question
Predict the exact output of this loop:

```python
for value in range(25, 5, -4):
    result = value * 2 - 10
    print(f"Input: {value} → Output: {result}")
```

### Answer
**Expected Output:**
```
Input: 25 → Output: 40
Input: 21 → Output: 32
Input: 17 → Output: 24
Input: 13 → Output: 16
Input: 9 → Output: 8
```

### Explanation
**Understanding `range(25, 5, -4)`:**
- **Start:** 25
- **Stop:** 5 (exclusive, stops before reaching 5)
- **Step:** -4 (counts down by 4)

**Generated sequence:** 25, 21, 17, 13, 9

**Calculating each result using formula `value * 2 - 10`:**

| Iteration | value | Calculation | result |
|-----------|-------|-------------|--------|
| 1 | 25 | 25 × 2 - 10 = 50 - 10 | 40 |
| 2 | 21 | 21 × 2 - 10 = 42 - 10 | 32 |
| 3 | 17 | 17 × 2 - 10 = 34 - 10 | 24 |
| 4 | 13 | 13 × 2 - 10 = 26 - 10 | 16 |
| 5 | 9 | 9 × 2 - 10 = 18 - 10 | 8 |

**Key points:**
- Negative step makes the range count **downwards**
- Range stops **before** reaching the stop value (5)
- Each value is doubled first, then 10 is subtracted

---

## Exercise 8: Fix the Loop

### Question
This loop is supposed to calculate a shopping discount:

```python
# Calculate 10% discount for purchases over RM50
purchases = [25, 75, 40, 90]
index = 0
total_savings = 0

while index < len(purchases):
    current_purchase = purchases[index]

    if current_purchase > 50:
        total_savings += current_purchase * 0.10
        index = index  # Bug is here
    else:
        index += 1

print(f"Total savings: RM{total_savings:.2f}")
```

### Answer
**Problem:** The bug is on line 7: `index = index` doesn't increment the index when a discount is applied, causing an **infinite loop**.

**Fixed Code:**
```python
# Calculate 10% discount for purchases over RM50
purchases = [25, 75, 40, 90]
index = 0
total_savings = 0

while index < len(purchases):
    current_purchase = purchases[index]

    if current_purchase > 50:
        total_savings += current_purchase * 0.10
        index += 1  # Fixed: increment index
    else:
        index += 1

print(f"Total savings: RM{total_savings:.2f}")
```

**Expected Output:**
```
Total savings: RM16.50
```

### Explanation
**What was wrong:**
- Line `index = index` assigns index to itself (no change)
- When processing purchases > RM50 (75 and 90), the loop gets stuck
- The loop keeps processing the same item forever (infinite loop)

**Why it happens:**
- purchases[1] = 75 (> 50)
- Enters if block, but index stays at 1
- Next iteration: still at index 1, processes 75 again
- Repeats forever!

**How to fix:**
- Change `index = index` to `index += 1`
- This increments the index, moving to the next item

**Calculating the correct answer:**
- purchases = [25, 75, 40, 90]
- 25: not > 50, skip
- **75:** > 50, savings = 75 × 0.10 = RM7.50
- 40: not > 50, skip
- **90:** > 50, savings = 90 × 0.10 = RM9.00
- **Total savings = 7.50 + 9.00 = RM16.50**

---

## Exercise 9: Fix the Loop

### Question
This loop is supposed to print multiples of 3 from 15 down to 3:

```python
# Expected output: 15, 12, 9, 6, 3
current = 15
while current >= 3:
    if current % 3 == 0:
        print(current)
    current -= 1
    if current == 9:
        current = 12
```

### Answer
**Problem:** The line `if current == 9: current = 12` causes the loop to reset from 9 back to 12, creating an **infinite loop**.

**What happens in the buggy code:**
1. current = 15 → prints 15 (15 % 3 == 0) → current becomes 14
2. current = 14 → skips (14 % 3 ≠ 0) → current becomes 13
3. current = 13 → skips (13 % 3 ≠ 0) → current becomes 12
4. current = 12 → prints 12 (12 % 3 == 0) → current becomes 11
5. current = 11 → skips (11 % 3 ≠ 0) → current becomes 10
6. current = 10 → skips (10 % 3 ≠ 0) → current becomes 9
7. current = 9 → **gets reset to 12** (bug triggers!)
8. Back to step 4... **infinite loop!**

**Fixed Code:**
```python
# Expected output: 15, 12, 9, 6, 3
current = 15
while current >= 3:
    if current % 3 == 0:
        print(current)
    current -= 1
```

**Expected Output:**
```
15
12
9
6
3
```

### Explanation
**Why the bug exists:**
- The line `if current == 9: current = 12` was probably left in by mistake
- It creates a loop that never ends: 12 → 11 → 10 → 9 → 12 → 11 → 10 → 9...
- The counter never reaches values below 9

**How it should work:**
- Start at 15, decrease by 1 each time
- Print only when current is divisible by 3 (remainder is 0)
- Stop when current becomes less than 3

**Trace of correct code:**
| current | % 3 | Action |
|---------|-----|--------|
| 15 | 0 | Print 15 |
| 14 | 2 | Skip |
| 13 | 1 | Skip |
| 12 | 0 | Print 12 |
| 11 | 2 | Skip |
| 10 | 1 | Skip |
| 9 | 0 | Print 9 |
| 8 | 2 | Skip |
| 7 | 1 | Skip |
| 6 | 0 | Print 6 |
| 5 | 2 | Skip |
| 4 | 1 | Skip |
| 3 | 0 | Print 3 |
| 2 | - | Stop (< 3) |

**Alternative efficient solution:**
```python
# Using range to count down by 3
for num in range(15, 2, -3):
    print(num)
```
This directly generates: 15, 12, 9, 6, 3 without checking every number!