---
title: Chapter 4 - Tutorial 1
outline: deep
---

# Chapter 4 - Tutorial 1: Identifiers, Variables & Keywords


## Python Identifiers


### Identifier Validation <Badge type="tip" text="Exercise" />

**Instructions**: For each identifier below, determine if it's **valid** or **invalid**. If invalid, explain why.

```python
# Analyze these identifiers:
student_name      # ?
2nd_semester      # ?
class             # ?
_private_var      # ?
user@name         # ?
firstName         # ?
my-variable       # ?
PI_VALUE          # ?
123abc            # ?
name_1st          # ?
```


## Variables in Python

### Variable Identification <Badge type="tip" text="Exercise" />

**Instructions**: Read each scenario carefully and identify ALL variables that need to be created. Some variables may be implied or calculated, not directly stated.

### Scenario 1: Insurance Premium Calculator
A 35-year-old engineer with a clean driving record purchases comprehensive car insurance for a RM85,000 vehicle. The base premium is 2.8% of vehicle value. Age discount: 25% for ages 30-45. Profession discount: 15% for engineers. No-claims bonus: 20% for clean records. Additional coverage: RM180 roadside assistance, RM240 windscreen protection. Calculate the final premium including 8% insurance service tax.

**What variables do you need?**


### Scenario 2: Research Grant Allocation
A university receives a RM450,000 research grant. The allocation formula distributes 35% to equipment purchases, 28% to personnel costs, 22% to materials and supplies, 10% to travel expenses, and 5% to administrative overhead. From the personnel allocation, Professor Lee receives 45% for his research team of 6 members. Each team member gets an equal share of Professor Lee's allocation. Additionally, each member receives a RM1,200 conference allowance from the travel budget. Calculate one team member's total funding.

**What variables do you need?**

### Scenario 3: Manufacturing Cost Analysis
A textile factory produces batik shirts using a fixed production process. Raw materials cost RM12 per shirt. Labor costs are RM8 per shirt for 1,000 units plus RM6.50 per shirt for 850 additional units. Factory overhead is RM15,000 monthly fixed cost. Production this month totaled 1,850 shirts. Quality control shows 3.2% defect rate, with defective shirts having zero value. Calculate the manufacturing cost per saleable shirt and total monthly production cost.

**What variables do you need?**

### Scenario 4: Construction Project Budget
A construction company wins a RM180,000 building contract. Project breakdown: 42% materials, 35% labor, 12% equipment rental, 8% permits and fees, 3% miscellaneous costs. Materials include RM25,000 cement, RM18,500 steel reinforcement, and the remaining materials budget for other supplies. Labor consists of 320 hours at RM45 per hour, plus a RM8,000 supervisor fee. Calculate the total supplies cost and verify the labor budget allocation.

**What variables do you need?**

### Scenario 5: Investment Portfolio Rebalancing
Sarah's investment portfolio is worth RM95,000. She wants to rebalance to target allocations: 60% stocks, 25% bonds, 15% REITs. Current values: RM58,500 stocks, RM22,800 bonds, RM13,700 REITs. She needs to calculate target amounts for each category, determine excess or shortage in each category, and calculate total transaction costs at RM15 per trade (buying and selling are separate trades). Assume she makes exactly 3 trades to rebalance.

**What variables do you need?**

---

## Variable Naming Review

### Code Review <Badge type="tip" text="Exercise" />

**Instructions**: You're reviewing code from different programmers. Identify ALL problems with the variable naming and suggest alternatives. Consider context, clarity, conventions, and maintainability.

### Code Sample 1: Student Grade Calculator
```python
stud_nm = "Ahmad Bin Hassan"
std_id = "2024001"
mid1 = 85
mid2 = 78
mid3 = 92
assgn = 88
qz = 76
fin = 87
total_weighted_score_for_the_student_in_this_semester = (mid1 * 0.25) + (mid2 * 0.25) + (mid3 * 0.25) + (assgn * 0.15) + (qz * 0.05) + (fin * 0.05)
grd = "A-"
4.0scale = 3.67
class = 12
final-grade = total_weighted_score_for_the_student_in_this_semester
student@email = "ahmad.hassan@student.edu.my"
```

**What's wrong and how would you fix it?**

### Code Sample 2: E-commerce Inventory Management
```python
SKU123 = "Laptop Model XYZ"
SKU123_QTY = 45
SKU123_COST = 2150.00
SKU123_SELLING = 2899.99
margin = SKU123_SELLING - SKU123_COST
margin% = (margin / SKU123_COST) * 100
reorder_point = SKU123_QTY - 10
supplier_lead_time_in_business_days_excluding_weekends = 14
is_fast_moving_item_based_on_sales_velocity_analysis = True
temp_var_for_calculation = margin * 0.15
final_result = SKU123_SELLING - temp_var_for_calculation
```

**What's wrong and how would you fix it?**

### Code Sample 3: Academic Grade Processing System
```python
student1Name = "Ahmad Bin Hassan"
student1ID = "2024001"
test1Score = 85
test2Score = 78
test3Score = 92
assignment1 = 88
assignment2 = 91
quiz1 = 76
quiz2 = 82
midterm = 79
final = 87
total_weighted_score_for_student_number_one = (test1Score * 0.15) + (test2Score * 0.15) + (test3Score * 0.15) + (assignment1 * 0.1) + (assignment2 * 0.1) + (quiz1 * 0.05) + (quiz2 * 0.05) + (midterm * 0.125) + (final * 0.125)
letterGrade = "A-"
gpa4.0scale = 3.67
class_rank = 12
total_students = 156
percentile_rank = ((total_students - class_rank) / total_students) * 100
```

**What's wrong and how would you fix it?**

### Code Sample 4: Manufacturing Quality Control
```python
batch_no = "B2024-0891"
totalUnitsProduced = 2500
defects_found_during_initial_inspection = 73
defects_found_during_secondary_quality_check = 28
rework_units = 45
scrap_units = 56
acceptable_units = totalUnitsProduced - defects_found_during_initial_inspection - defects_found_during_secondary_quality_check
first_pass_yield = (acceptable_units / totalUnitsProduced) * 100
cost_per_unit = 12.50
scrap_cost = scrap_units * cost_per_unit
rework_cost_per_unit = 4.25
total_rework_cost = rework_units * rework_cost_per_unit
quality_cost = scrap_cost + total_rework_cost
data = [batch_no, totalUnitsProduced, first_pass_yield, quality_cost]
```

**What's wrong and how would you fix it?**

