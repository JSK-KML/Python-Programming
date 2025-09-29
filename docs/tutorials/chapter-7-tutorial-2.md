---
title: Chapter 7 - Tutorial 2
outline: deep
---

# Chapter 7 - Tutorial 2: Counter-Controlled Loops




### **Exercise 1: Library Fine Calculator** <Badge type="tip" text="Exercise" />

A library calculates overdue fines for books returned late. Book IDs processed today are: 401, 406, 411, 416, 421. Each book has different overdue days: 3, 6, 9, 12, 15 days respectively. The fine rate is RM0.50 per day, but there's a maximum cap of RM8.00 per book.

**Hints:**
- Look at the Book IDs: What's the difference between 401 and 406? Between 406 and 411?
- Look at the Days overdue: What's the difference between 3 and 6? Between 6 and 9?
- How many books are being processed? Count them to determine the range.
- Find the fine rate and maximum fine values in the problem description.

**Partially completed code:**
```python
print("=== OVERDUE FINE CALCULATION ===")
starting_days = __
fine_per_day = __
max_fine = __

for book_sequence in range(__):
    book_id = book_sequence * __ + __
    days_overdue = starting_days + (book_sequence * __)
    calculated_fine = days_overdue * __
    actual_fine = min(calculated_fine, __)

    print(f"Book {book_id}: {days_overdue} days overdue = RM{actual_fine:.2f}")
```

**Expected Output:**
```
Book 401: 3 days overdue = RM1.50
Book 406: 6 days overdue = RM3.00
Book 411: 9 days overdue = RM4.50
Book 416: 12 days overdue = RM6.00
Book 421: 15 days overdue = RM7.50
```



### **Exercise 2: Taxi Fare System** <Badge type="tip" text="Exercise" />

A taxi company calculates fares for rides. Trip numbers are: 205, 210, 215, 220, 225. Distance traveled: 5km, 8km, 11km, 14km, 17km. Base fare is RM4.00, plus RM1.20 per km. If distance > 10km, add RM2.00 surcharge.

**Hints:**
- Look at the Trip numbers: What's the pattern between 205, 210, 215...?
- Look at the Distance values: What's the difference between 5, 8, 11...?
- Count how many trips to determine the range parameter.
- Find the base fare, rate per km, and surcharge amount in the problem description.
- At what distance does the surcharge apply?

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

    if distance > __:
        extra_charge = __
    else:
        extra_charge = __

    total_fare = __ + __ + __

    print(f"Trip {trip_number}: {distance}km = Base(RM{base_fare:.2f}) + Distance(RM{km_cost:.2f}) + Surcharge(RM{extra_charge:.2f}) = RM{total_fare:.2f}")
```

**Expected Output:**
```
Trip 205: 5km = Base(RM4.00) + Distance(RM6.00) + Surcharge(RM0.00) = RM10.00
Trip 210: 8km = Base(RM4.00) + Distance(RM9.60) + Surcharge(RM0.00) = RM13.60
Trip 215: 11km = Base(RM4.00) + Distance(RM13.20) + Surcharge(RM2.00) = RM19.20
Trip 220: 14km = Base(RM4.00) + Distance(RM16.80) + Surcharge(RM2.00) = RM22.80
Trip 225: 17km = Base(RM4.00) + Distance(RM20.40) + Surcharge(RM2.00) = RM26.40
```



### **Exercise 3: Employee Bonus Calculator** <Badge type="tip" text="Exercise" />

HR calculates monthly bonuses for employees. Employee IDs: 1002, 1007, 1012, 1017, 1022. Years of service: 2, 4, 6, 8, 10 years. Base bonus is RM300, plus RM50 per year of service. If service ≥ 6 years, add loyalty bonus of RM150.

**Hints:**
- Analyze the Employee IDs: What's the pattern in 1002, 1007, 1012...?
- Look at Years of service: What's the pattern in 2, 4, 6, 8, 10?
- Count the total number of employees for the range.
- Find the base bonus, bonus per year, and loyalty bonus amounts in the problem.
- At how many years of service does the loyalty bonus kick in?

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

    if years_service >= __:
        loyalty_amount = __
    else:
        loyalty_amount = __

    total_bonus = __ + __ + __

    print(f"Employee {employee_id}: {years_service} years = Base(RM{base_bonus}) + Service(RM{service_bonus}) + Loyalty(RM{loyalty_amount}) = RM{total_bonus}")
```

**Expected Output:**
```
Employee 1002: 2 years = Base(RM300) + Service(RM100) + Loyalty(RM0) = RM400
Employee 1007: 4 years = Base(RM300) + Service(RM200) + Loyalty(RM0) = RM500
Employee 1012: 6 years = Base(RM300) + Service(RM300) + Loyalty(RM150) = RM750
Employee 1017: 8 years = Base(RM300) + Service(RM400) + Loyalty(RM150) = RM850
Employee 1022: 10 years = Base(RM300) + Service(RM500) + Loyalty(RM150) = RM950
```



### **Exercise 4: Internet Data Plan** <Badge type="tip" text="Exercise" />

An ISP calculates monthly bills for customers. Account numbers: 5001, 5004, 5007, 5010, 5013. Data used: 15GB, 25GB, 35GB, 45GB, 55GB. Monthly fee is RM40, excess data costs RM3 per GB over 20GB limit. If usage ≥ 40GB, apply RM15 high-usage fee.

**Hints:**
- Examine the Account numbers: What's the difference between 5001, 5004, 5007...?
- Look at Data usage: What's the pattern in 15, 25, 35, 45, 55?
- Count the customers to determine the range.
- Find the monthly fee, data limit, excess rate, and high-usage fee in the problem.
- At what GB usage does the high-usage fee apply?
- How do you ensure excess GB is never negative?

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

    if data_used >= __:
        high_usage_charge = __
    else:
        high_usage_charge = __

    total_bill = __ + __ + __

    print(f"Account {account_number}: {data_used}GB used = Monthly(RM{monthly_fee}) + Excess(RM{excess_cost}) + High-usage(RM{high_usage_charge}) = RM{total_bill}")
```

**Expected Output:**
```
Account 5001: 15GB used = Monthly(RM40) + Excess(RM0) + High-usage(RM0) = RM40
Account 5004: 25GB used = Monthly(RM40) + Excess(RM15) + High-usage(RM0) = RM55
Account 5007: 35GB used = Monthly(RM40) + Excess(RM45) + High-usage(RM0) = RM85
Account 5010: 45GB used = Monthly(RM40) + Excess(RM75) + High-usage(RM15) = RM130
Account 5013: 55GB used = Monthly(RM40) + Excess(RM105) + High-usage(RM15) = RM160
```



### **Exercise 5: Parking Meter System** <Badge type="tip" text="Exercise" />

A city calculates parking fees for different zones. Zone codes: 302, 307, 312, 317, 322. Hours parked: 1, 3, 5, 7, 9 hours. Hourly rate is RM2.00, but first hour is free. Maximum daily charge is RM12.00.

**Hints:**
- Study the Zone codes: What's the pattern in 302, 307, 312...?
- Look at Hours parked: What's the difference between 1, 3, 5, 7, 9?
- Count the zones to determine the range.
- Find the hourly rate, free hours, and maximum charge in the problem.
- How do you ensure billable hours is never negative?
- How do you apply the maximum daily charge limit?

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

**Expected Output:**
```
Zone 302: 1 hours = 0 billable hours = RM0.00
Zone 307: 3 hours = 2 billable hours = RM4.00
Zone 312: 5 hours = 4 billable hours = RM8.00
Zone 317: 7 hours = 6 billable hours = RM12.00
Zone 322: 9 hours = 8 billable hours = RM12.00
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




