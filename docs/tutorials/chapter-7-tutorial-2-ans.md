---
title: Chapter 7 - Tutorial 2 Answers
outline: deep
---

# Chapter 7 - Tutorial 2: Counter-Controlled Loops - Answers

## Range Function Understanding - Multi-Variable Exercises

### **Exercise 1: Library Fine Calculator** <Badge type="tip" text="Exercise" />

A library calculates overdue fines for books returned late. Book IDs processed today are: 401, 406, 411, 416, 421. Each book has different overdue days: 3, 6, 9, 12, 15 days respectively. The fine rate is RM0.50 per day, but there's a maximum cap of RM8.00 per book.

**Partially completed code:**
```python
print("=== OVERDUE FINE CALCULATION ===")
starting_days = __
fine_per_day = __
max_fine = __

for book_sequence in range(__):
    book_id = __ * __ + __
    days_overdue = starting_days + (book_sequence * __)
    calculated_fine = days_overdue * __
    actual_fine = min(calculated_fine, __)

    print(f"Book {book_id}: {days_overdue} days overdue = RM{actual_fine:.2f}")
```

::: tip Answer
```python
print("=== OVERDUE FINE CALCULATION ===")
starting_days = 3
fine_per_day = 0.50
max_fine = 8.00

for book_sequence in range(5):
    book_id = 5 * book_sequence + 401
    days_overdue = starting_days + (book_sequence * 3)
    calculated_fine = days_overdue * fine_per_day
    actual_fine = min(calculated_fine, max_fine)

    print(f"Book {book_id}: {days_overdue} days overdue = RM{actual_fine:.2f}")
```
:::

---

### **Exercise 2: Taxi Fare System** <Badge type="tip" text="Exercise" />

A taxi company calculates fares for rides. Trip numbers are: 205, 210, 215, 220, 225. Distance traveled: 5km, 8km, 11km, 14km, 17km. Base fare is RM4.00, plus RM1.20 per km. If distance > 10km, add RM2.00 surcharge.

**Partially completed code:**
```python
print("=== TAXI FARE CALCULATION ===")
base_fare = __
rate_per_km = __
surcharge = __
threshold_distance = __

for trip_index in range(__):
    trip_number = __ + (trip_index * __)
    distance = __ + (trip_index * __)
    km_cost = distance * __
    extra_charge = __ if distance > __ else __
    total_fare = __ + __ + __

    print(f"Trip {trip_number}: {distance}km = Base(RM{base_fare:.2f}) + Distance(RM{km_cost:.2f}) + Surcharge(RM{extra_charge:.2f}) = RM{total_fare:.2f}")
```

::: tip Answer
```python
print("=== TAXI FARE CALCULATION ===")
base_fare = 4.00
rate_per_km = 1.20
surcharge = 2.00
threshold_distance = 10

for trip_index in range(5):
    trip_number = 205 + (trip_index * 5)
    distance = 5 + (trip_index * 3)
    km_cost = distance * rate_per_km
    extra_charge = surcharge if distance > threshold_distance else 0
    total_fare = base_fare + km_cost + extra_charge

    print(f"Trip {trip_number}: {distance}km = Base(RM{base_fare:.2f}) + Distance(RM{km_cost:.2f}) + Surcharge(RM{extra_charge:.2f}) = RM{total_fare:.2f}")
```
:::

---

### **Exercise 3: Employee Bonus Calculator** <Badge type="tip" text="Exercise" />

HR calculates monthly bonuses for employees. Employee IDs: 1002, 1007, 1012, 1017, 1022. Years of service: 2, 4, 6, 8, 10 years. Base bonus is RM300, plus RM50 per year of service. If service ≥ 6 years, add loyalty bonus of RM150.

**Partially completed code:**
```python
print("=== MONTHLY BONUS CALCULATION ===")
base_bonus = __
bonus_per_year = __
loyalty_bonus = __
loyalty_threshold = __

for emp_index in range(__):
    employee_id = __ + (emp_index * __)
    years_service = __ + (emp_index * __)
    service_bonus = years_service * __
    loyalty_amount = __ if years_service >= __ else __
    total_bonus = __ + __ + __

    print(f"Employee {employee_id}: {years_service} years = Base(RM{base_bonus}) + Service(RM{service_bonus}) + Loyalty(RM{loyalty_amount}) = RM{total_bonus}")
```

::: tip Answer
```python
print("=== MONTHLY BONUS CALCULATION ===")
base_bonus = 300
bonus_per_year = 50
loyalty_bonus = 150
loyalty_threshold = 6

for emp_index in range(5):
    employee_id = 1002 + (emp_index * 5)
    years_service = 2 + (emp_index * 2)
    service_bonus = years_service * bonus_per_year
    loyalty_amount = loyalty_bonus if years_service >= loyalty_threshold else 0
    total_bonus = base_bonus + service_bonus + loyalty_amount

    print(f"Employee {employee_id}: {years_service} years = Base(RM{base_bonus}) + Service(RM{service_bonus}) + Loyalty(RM{loyalty_amount}) = RM{total_bonus}")
```
:::

---

### **Exercise 4: Internet Data Plan** <Badge type="tip" text="Exercise" />

An ISP calculates monthly bills for customers. Account numbers: 5001, 5004, 5007, 5010, 5013. Data used: 15GB, 25GB, 35GB, 45GB, 55GB. Monthly fee is RM40, excess data costs RM3 per GB over 20GB limit. If usage ≥ 40GB, apply RM15 high-usage fee.

**Partially completed code:**
```python
print("=== INTERNET BILL CALCULATION ===")
monthly_fee = __
data_limit = __
excess_rate = __
high_usage_fee = __
high_usage_threshold = __

for customer_index in range(__):
    account_number = __ + (customer_index * __)
    data_used = __ + (customer_index * __)
    excess_gb = max(__, data_used - __)
    excess_cost = excess_gb * __
    high_usage_charge = __ if data_used >= __ else __
    total_bill = __ + __ + __

    print(f"Account {account_number}: {data_used}GB used = Monthly(RM{monthly_fee}) + Excess(RM{excess_cost}) + High-usage(RM{high_usage_charge}) = RM{total_bill}")
```

::: tip Answer
```python
print("=== INTERNET BILL CALCULATION ===")
monthly_fee = 40
data_limit = 20
excess_rate = 3
high_usage_fee = 15
high_usage_threshold = 40

for customer_index in range(5):
    account_number = 5001 + (customer_index * 3)
    data_used = 15 + (customer_index * 10)
    excess_gb = max(0, data_used - data_limit)
    excess_cost = excess_gb * excess_rate
    high_usage_charge = high_usage_fee if data_used >= high_usage_threshold else 0
    total_bill = monthly_fee + excess_cost + high_usage_charge

    print(f"Account {account_number}: {data_used}GB used = Monthly(RM{monthly_fee}) + Excess(RM{excess_cost}) + High-usage(RM{high_usage_charge}) = RM{total_bill}")
```
:::

---

### **Exercise 5: Parking Meter System** <Badge type="tip" text="Exercise" />

A city calculates parking fees for different zones. Zone codes: 302, 307, 312, 317, 322. Hours parked: 1, 3, 5, 7, 9 hours. Hourly rate is RM2.00, but first hour is free. Maximum daily charge is RM12.00.

**Partially completed code:**
```python
print("=== PARKING FEE CALCULATION ===")
hourly_rate = __
free_hours = __
max_daily_charge = __

for zone_index in range(__):
    zone_code = __ + (zone_index * __)
    hours_parked = __ + (zone_index * __)
    billable_hours = max(__, hours_parked - __)
    calculated_fee = billable_hours * __
    actual_fee = min(__, __)

    print(f"Zone {zone_code}: {hours_parked} hours = {billable_hours} billable hours = RM{actual_fee:.2f}")
```

::: tip Answer
```python
print("=== PARKING FEE CALCULATION ===")
hourly_rate = 2.00
free_hours = 1
max_daily_charge = 12.00

for zone_index in range(5):
    zone_code = 302 + (zone_index * 5)
    hours_parked = 1 + (zone_index * 2)
    billable_hours = max(0, hours_parked - free_hours)
    calculated_fee = billable_hours * hourly_rate
    actual_fee = min(calculated_fee, max_daily_charge)

    print(f"Zone {zone_code}: {hours_parked} hours = {billable_hours} billable hours = RM{actual_fee:.2f}")
```
:::

---

## Loop Prediction Questions

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

::: tip Answer
**Expected Output:**
```
Step 15: Total = 15
Step 12: Total = 27
Step 9: Total = 36
Final result: 36
```

**Explanation:**
- counter starts at 15
- First iteration: total = 0 + 15 = 15, counter becomes 12
- Second iteration: total = 15 + 12 = 27, counter becomes 9
- Third iteration: total = 27 + 9 = 36, counter becomes 6
- Loop stops because 6 < 8
:::

---

### **Exercise 7: Range Prediction Challenge**

**Predict the exact output of this loop:**

```python
for value in range(25, 5, -4):
    result = value * 2 - 10
    print(f"Input: {value} → Output: {result}")
```

::: tip Answer
**Expected Output:**
```
Input: 25 → Output: 40
Input: 21 → Output: 32
Input: 17 → Output: 24
Input: 13 → Output: 16
Input: 9 → Output: 8
```

**Explanation:**
- range(25, 5, -4) generates: 25, 21, 17, 13, 9
- Formula: value * 2 - 10
- 25 * 2 - 10 = 40
- 21 * 2 - 10 = 32
- 17 * 2 - 10 = 24
- 13 * 2 - 10 = 16
- 9 * 2 - 10 = 8
:::

---

## Debug the Loop

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

::: tip Answer
**Problem:** The line `index = index` doesn't increment the index, causing an infinite loop when processing purchases over RM50.

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
:::

---

### **Exercise 9: Fix the Logic Error**

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

::: tip Answer
**Problem:** The line `if current == 9: current = 12` creates an infinite loop by resetting the counter back to 12 when it reaches 9.

**What happens:**
- Prints 15 (15 % 3 == 0)
- current becomes 14, then 13, then 12
- Prints 12 (12 % 3 == 0)
- current becomes 11, then 10, then 9
- When current == 9, it gets reset to 12
- This creates an infinite loop between 12 and 9

**Fixed Code:**
```python
# Expected output: 15, 12, 9, 6, 3
current = 15
while current >= 3:
    if current % 3 == 0:
        print(current)
    current -= 1
```

**More Efficient Solution:**
```python
# Print multiples of 3 from 15 down to 3
for num in range(15, 2, -3):  # Start from 15, go down by 3
    print(num)
```

**Expected Output:**
```
15
12
9
6
3
```
:::

---

## Analysis Questions

1. **Which exercise requires you to handle both minimum and maximum limits?**
   - Exercise 5 (Parking Meter System) uses both `max()` for minimum billable hours and `min()` for maximum daily charge.

2. **How do the conditional statements affect the final calculations?**
   - They apply different rates or add/subtract fees based on thresholds (e.g., surcharge for long distances, loyalty bonuses for long service).

3. **Which variables are derived from other variables vs. independent?**
   - Independent: base values, rates, thresholds
   - Derived: calculations like total costs, bonuses, fees that depend on other variables

4. **What patterns do you notice in how the range parameters relate to the ID/code sequences?**
   - Most use arithmetic sequences with consistent increments (5, 3, 2, etc.) that match the range step and multiplier values.

5. **Which exercise would be most affected if you changed only the range but not the calculations?**
   - All exercises would break if range parameters don't match the expected sequence patterns, but Exercise 1 (Library Fine Calculator) would be most affected due to its precise day progression.