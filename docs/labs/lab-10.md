---
outline: deep
title: Lab 10 - Advanced Python Selections
---

# Lab 10: Advanced Python Selections

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## More Selection Exercises


Launch **VS Code** and navigate to `/labs/lab10/` to begin the exercises.

## Exercise 1: Employee Overtime Pay Calculator <Badge type="warning" text="Task" />

Calculate employee overtime pay with simplified rate structure.

**Salary Structure:**
- Base hourly rates: Manager RM35, Supervisor RM25, Staff RM18
- Overtime rate: 1.5x base rate for all overtime hours
- Weekend bonus: Extra RM5 for each overtime hour worked on weekends, calculated separately from overtime pay and then added to total

Create `/labs/lab10/exercise1/exercise1.py`:

```python
position = input()
overtime_hours = int(input())
is_weekend = input()

# TODO: Your code here

print(hourly_rate)
print(overtime_pay)
print(total_pay)
```

## Exercise 2: Insurance Premium Calculator <Badge type="warning" text="Task" />

Calculate insurance premiums based on age and accident history.

**Premium Calculation:**
- Base premium by age: Under 25 = RM2400, 25-50 = RM1800, Over 50 = RM2000
- Accident penalty: 0 accidents = No penalty, 1-2 accidents = +RM300, 3+ accidents = +RM600
- Good driver discount: No accidents = 10% off final premium

Create `/labs/lab10/exercise2/exercise2.py`:

```python
age = int(input())
accident_count = int(input())

# TODO: Your code here

print(base_premium)
print(final_premium)
print(discount_amount)
```

## Exercise 3: Loan Calculator <Badge type="warning" text="Task" />

Determine loan approval status based on income and credit score.

**Loan Assessment Criteria:**
- Income requirements: Minimum RM4000 for approval
- Credit score tiers: Excellent (700+) = 3.5% rate, Good (600-699) = 5.5% rate, Poor (<600) = Rejected with 0% interest rate
- Maximum loan amount: 5x monthly income

**Approval Status:**
- Approved: Income ≥ RM4000 AND credit score ≥ 600 AND loan amount ≤ 5x income
- Rejected: Fails any criteria (interest rate = 0%)

Create `/labs/lab10/exercise3/exercise3.py`:

```python
monthly_income = int(input())
credit_score = int(input())
loan_amount = int(input())

# TODO: Your code here

print(interest_rate)
print(max_loan_amount)
print(approval_status)
```

## Testing Your Solutions

Use **pytest** to verify your implementations work correctly:

1. Navigate to each exercise folder
2. Run the tests using **VS Code**'s Test Explorer
3. Fix any failing test cases
4. Ensure all tests pass before moving to the next exercise

## Commit and Push Your Work

After completing all exercises, commit your solutions to your repository. Make sure all test files are properly saved and your code follows the required input/output format for automated testing.