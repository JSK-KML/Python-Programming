---
title: Chapter 7 - Tutorial 2
outline: deep
---

# Chapter 7 - Tutorial 2: Counter-Controlled Loops

## Loop Understanding 

Complete the missing parts in each exercise. You need to fill in variables AND range parameters to make the code work correctly.

---

### **Exercise A: Library Fine Calculator** <Badge type="tip" text="Exercise" />

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

**Expected Output:**
```
Book 401: 3 days overdue = RM1.50
Book 406: 6 days overdue = RM3.00
Book 411: 9 days overdue = RM4.50
Book 416: 12 days overdue = RM6.00
Book 421: 15 days overdue = RM7.50
```

---

### **Exercise B: Taxi Fare System** <Badge type="tip" text="Exercise" />

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

**Expected Output:**
```
Trip 205: 5km = Base(RM4.00) + Distance(RM6.00) + Surcharge(RM0.00) = RM10.00
Trip 210: 8km = Base(RM4.00) + Distance(RM9.60) + Surcharge(RM0.00) = RM13.60
Trip 215: 11km = Base(RM4.00) + Distance(RM13.20) + Surcharge(RM2.00) = RM19.20
Trip 220: 14km = Base(RM4.00) + Distance(RM16.80) + Surcharge(RM2.00) = RM22.80
Trip 225: 17km = Base(RM4.00) + Distance(RM20.40) + Surcharge(RM2.00) = RM26.40
```

---

### **Exercise C: Employee Bonus Calculator** <Badge type="tip" text="Exercise" />

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

**Expected Output:**
```
Employee 1002: 2 years = Base(RM300) + Service(RM100) + Loyalty(RM0) = RM400
Employee 1007: 4 years = Base(RM300) + Service(RM200) + Loyalty(RM0) = RM500
Employee 1012: 6 years = Base(RM300) + Service(RM300) + Loyalty(RM150) = RM750
Employee 1017: 8 years = Base(RM300) + Service(RM400) + Loyalty(RM150) = RM850
Employee 1022: 10 years = Base(RM300) + Service(RM500) + Loyalty(RM150) = RM950
```

---

### **Exercise D: Internet Data Plan** <Badge type="tip" text="Exercise" />

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

**Expected Output:**
```
Account 5001: 15GB used = Monthly(RM40) + Excess(RM0) + High-usage(RM0) = RM40
Account 5004: 25GB used = Monthly(RM40) + Excess(RM15) + High-usage(RM0) = RM55
Account 5007: 35GB used = Monthly(RM40) + Excess(RM45) + High-usage(RM0) = RM85
Account 5010: 45GB used = Monthly(RM40) + Excess(RM75) + High-usage(RM15) = RM130
Account 5013: 55GB used = Monthly(RM40) + Excess(RM105) + High-usage(RM15) = RM160
```

---

### **Exercise E: Parking Meter System** <Badge type="tip" text="Exercise" />

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

**Expected Output:**
```
Zone 302: 1 hours = 0 billable hours = RM0.00
Zone 307: 3 hours = 2 billable hours = RM4.00
Zone 312: 5 hours = 4 billable hours = RM8.00
Zone 317: 7 hours = 6 billable hours = RM12.00
Zone 322: 9 hours = 8 billable hours = RM12.00
```

