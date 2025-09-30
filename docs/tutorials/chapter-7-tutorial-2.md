---
title: Chapter 7 - Tutorial 2
outline: deep
---

# Chapter 7 - Tutorial 2: Counter-Controlled Loops




### **Exercise 1: Restaurant Bill Calculator** <Badge type="tip" text="Exercise" />

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

**Sample Run:**
```
=== RESTAURANT BILL CALCULATOR ===
Enter bill amount for Customer 1: RM50.00
Customer 1:
  Bill: RM50.00
  Service Charge (5%): RM2.50
  Tax (6%): RM3.00
  Total: RM55.50

Enter bill amount for Customer 2: RM120.50
Customer 2:
  Bill: RM120.50
  Service Charge (5%): RM6.03
  Tax (6%): RM7.23
  Total: RM133.76

Enter bill amount for Customer 3: RM89.90
Customer 3:
  Bill: RM89.90
  Service Charge (5%): RM4.50
  Tax (6%): RM5.39
  Total: RM99.79
```



### **Exercise 2: Student Final Grade Calculator** <Badge type="tip" text="Exercise" />

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

**Sample Run:**
```
=== STUDENT FINAL GRADE CALCULATOR ===
Student 1:
  Enter test score: 85
  Enter assignment score: 90
  Test: 85 (70%), Assignment: 90 (30%)
  Final Score: 86.50 = Grade A

Student 2:
  Enter test score: 70
  Enter assignment score: 80
  Test: 70 (70%), Assignment: 80 (30%)
  Final Score: 73.00 = Grade B

Student 3:
  Enter test score: 55
  Enter assignment score: 60
  Test: 55 (70%), Assignment: 60 (30%)
  Final Score: 56.50 = Grade D
```



### **Exercise 3: Electricity Bill with Rebate** <Badge type="tip" text="Exercise" />

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

**Sample Run:**
```
=== ELECTRICITY BILL WITH REBATE ===
Enter kWh usage for House 1: 85
House 1:
  Usage: 85.0 kWh
  Basic Charge: RM34.00
  Surcharge: RM0.00
  Rebate: -RM15.00
  Total: RM19.00

Enter kWh usage for House 2: 320
House 2:
  Usage: 320.0 kWh
  Basic Charge: RM128.00
  Surcharge: RM25.00
  Rebate: -RM0.00
  Total: RM153.00

Enter kWh usage for House 3: 150
House 3:
  Usage: 150.0 kWh
  Basic Charge: RM60.00
  Surcharge: RM0.00
  Rebate: -RM0.00
  Total: RM60.00
```



### **Exercise 4: Online Store Checkout** <Badge type="tip" text="Exercise" />

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

**Sample Run:**
```
=== ONLINE STORE CHECKOUT ===
Enter price for Product 1: RM450
Product 1:
  Original Price: RM450.00
  Discount (5%): -RM22.50
  Shipping: RM10.00
  Final Price: RM437.50

Enter price for Product 2: RM1200
Product 2:
  Original Price: RM1200.00
  Discount (10%): -RM120.00
  Shipping: RM0.00
  Final Price: RM1080.00

Enter price for Product 3: RM800
Product 3:
  Original Price: RM800.00
  Discount (5%): -RM40.00
  Shipping: RM0.00
  Final Price: RM760.00
```



### **Exercise 5: International Shipping Calculator** <Badge type="tip" text="Exercise" />

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

**Sample Run:**
```
=== INTERNATIONAL SHIPPING CALCULATOR ===
Package 1:
  Enter weight (kg): 3
  Enter package value (RM): 400
  Express delivery? (yes/no): no
  Weight Charge: RM5.00
  Insurance: RM0.00
  Express: RM0.00
  Total: RM5.00

Package 2:
  Enter weight (kg): 8
  Enter package value (RM): 1200
  Express delivery? (yes/no): yes
  Weight Charge: RM11.00
  Insurance: RM8.00
  Express: RM12.00
  Total: RM31.00

Package 3:
  Enter weight (kg): 15
  Enter package value (RM): 800
  Express delivery? (yes/no): no
  Weight Charge: RM25.00
  Insurance: RM8.00
  Express: RM0.00
  Total: RM33.00
```


### **Exercise 6: Predict the Output**

**Look at this code snippet and predict exactly what will be printed:**

```python
counter = 15
total = 0
while counter >= 8:
    total += counter
    print(f"Step {counter}: Total = {total}")
    counter -= 3
print(f"Final result: {total}")
```

**Your prediction (write the exact output):**



### **Exercise 7: Range Prediction Challenge**

**Predict the exact output of this loop:**

```python
for value in range(25, 5, -4):
    result = value * 2 - 10
    print(f"Input: {value} → Output: {result}")
```

**Your prediction (write the exact output):**




### **Exercise 8: Fix the Loop**

**This loop is supposed to calculate a shopping discount:**

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




### **Exercise 9: Fix the Loop**

**This loop is supposed to print multiples of 3 from 15 down to 3:**

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

---

## **Solutions**

::: details Exercise 1: Restaurant Bill Calculator - Solution
```python
print("=== RESTAURANT BILL CALCULATOR ===")
service_rate = 0.05
tax_rate = 0.06

for customer in range(1, 6):
    bill = float(input(f"Enter bill amount for Customer {customer}: RM"))

    service_charge = bill * service_rate
    tax = bill * tax_rate
    total = bill + service_charge + tax

    print(f"Customer {customer}:")
    print(f"  Bill: RM{bill:.2f}")
    print(f"  Service Charge (5%): RM{service_charge:.2f}")
    print(f"  Tax (6%): RM{tax:.2f}")
    print(f"  Total: RM{total:.2f}")
    print()
```
:::

::: details Exercise 2: Student Final Grade Calculator - Solution
```python
print("=== STUDENT FINAL GRADE CALCULATOR ===")
test_weight = 0.70
assignment_weight = 0.30

for student in range(1, 6):
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
:::

::: details Exercise 3: Electricity Bill with Rebate - Solution
```python
print("=== ELECTRICITY BILL WITH REBATE ===")
rate = 0.40
surcharge = 25
rebate = 15

for house in range(1, 6):
    kwh = float(input(f"Enter kWh usage for House {house}: "))
    basic_charge = kwh * rate

    if kwh > 300:
        extra_charge = surcharge
    else:
        extra_charge = 0

    if kwh < 100:
        rebate_amount = rebate
    else:
        rebate_amount = 0

    total = basic_charge + extra_charge - rebate_amount

    print(f"House {house}:")
    print(f"  Usage: {kwh} kWh")
    print(f"  Basic Charge: RM{basic_charge:.2f}")
    print(f"  Surcharge: RM{extra_charge:.2f}")
    print(f"  Rebate: -RM{rebate_amount:.2f}")
    print(f"  Total: RM{total:.2f}")
    print()
```
:::

::: details Exercise 4: Online Store Checkout - Solution
```python
print("=== ONLINE STORE CHECKOUT ===")

for product_num in range(1, 6):
    price = float(input(f"Enter price for Product {product_num}: RM"))

    if price >= 1000:
        discount_rate = 0.10
    else:
        discount_rate = 0.05

    discount = price * discount_rate
    price_after_discount = price - discount

    if price < 500:
        shipping = 10
    else:
        shipping = 0

    final_price = price_after_discount + shipping

    print(f"Product {product_num}:")
    print(f"  Original Price: RM{price:.2f}")
    print(f"  Discount ({int(discount_rate*100)}%): -RM{discount:.2f}")
    print(f"  Shipping: RM{shipping:.2f}")
    print(f"  Final Price: RM{final_price:.2f}")
    print()
```
:::

::: details Exercise 5: International Shipping Calculator - Solution
```python
print("=== INTERNATIONAL SHIPPING CALCULATOR ===")
base_rate = 5
rate_per_kg = 2
insurance_fee = 8
express_fee = 12

for package_num in range(1, 6):
    print(f"Package {package_num}:")
    weight = float(input("  Enter weight (kg): "))
    value = float(input("  Enter package value (RM): "))
    express = input("  Express delivery? (yes/no): ")

    if weight > 5:
        excess_weight = weight - 5
        weight_charge = base_rate + (excess_weight * rate_per_kg)
    else:
        weight_charge = base_rate

    if value > 500:
        insurance = insurance_fee
    else:
        insurance = 0

    if express == "yes":
        express_charge = express_fee
    else:
        express_charge = 0

    total = weight_charge + insurance + express_charge

    print(f"  Weight Charge: RM{weight_charge:.2f}")
    print(f"  Insurance: RM{insurance:.2f}")
    print(f"  Express: RM{express_charge:.2f}")
    print(f"  Total: RM{total:.2f}")
    print()
```
:::


