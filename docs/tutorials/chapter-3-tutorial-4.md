---
title: Chapter 3 - Tutorial 4
outline: deep
---

# Chapter 2 and 3 - Tutorial 4

## Creating The IPO Table  <Badge type="warning" text="Recall" />

| Phase      | Practical Meaning | Typical Keywords (in the problem text) |
|------------|------------------|-----------------------------------------|
| **Input**  | Data accepted from the user — always *nouns*, never actions. **NEVER USE VERB.** | enter, read, get |
| **Process**| Operations applied to the inputs — arithmetic, decisions, loops. Each item should begin with a **verb**.<br><br> The suggested structure for **selection** question is: <br><br> DETERMINE THE + CONSTANT + BASED ON + INPUT<br><br> VERB + OUTPUT + BASED ON INPUT AND CONSTANT  | calculate, compute, determine, if, while, repeat |
| **Output** | The result delivered to the user or another system — again *nouns* or messages. **NEVER USE VERB.** | display, print, show |



## Creating The Flowchart  <Badge type="warning" text="Recall" />

| Shape      | Usage                | Tips                                                                       |
|------------|----------------------|----------------------------------------------------------------------------|
| Capsule    | Input and output     | Make sure to use **VERB** to clarify whether you are doing input or output |
| Arrow      | Program direction    | All shapes except diamond can only have one arrow coming out of them; the arrows coming in are limitless |
| Rectangle  | Process              | One process box can be used for one or multiple processes at one time        |
| Diamond    | Selection            | Make sure to put **TRUE** and **FALSE** on arrow going out of the diamond  |


## Implementing IPO and Flowchart

For each of the questions below, create an IPO table and its respective flowchart

### Scenario 1 - Selling Magazine <Badge type="warning" text="Question" />

MyHealth magazine is sold at RM5.00 each if at least 5 units of the magazine are purchased, and it is sold at the price of RM7.00 each otherwise. A shop serves `n` customers in a day. Given the quantity of magazines each customer purchased, calculate and display the price every customer has to pay.

### Scenario 2 - Library Books <Badge type="warning" text="Question" />

A library charges a late fee to members returning books. If a book is returned on time (0 overdue days), no fee is charged; if it is late, a fee of RM1.00 per overdue day is applied. Given the number of overdue days for each of 8 members, calculate and display every member's late fee.

### Scenario 3 - Electricity Bill <Badge type="warning" text="Question" />
A utility company charges RM0.30 per kWh for the first 100 kWh, RM0.50 per kWh for the next 100 kWh (101–200 kWh), and RM0.75 per kWh for any usage above 200 kWh.

Given the total kWh consumed by each of `n` customers, calculate and display every customer's total bill, and finally display the total revenue collected from all `n` customers.

### Scenario 4 - Income Tax Slab <Badge type="warning" text="Question" />
Income tax is applied as:

- First RM50,000.00 → 0%

- Next RM50,000.00 → 1%

- Above RM100,000.00 → 2%

Given the annual income of each of `n` taxpayers, calculate and display every taxpayer's total tax due.

### Scenario 5 - Parking Fee <Badge type="warning" text="Question" />

A mall charges parking as follows:

First 2 hours → Free

Next 3 hours (2–5 hours) → RM2.00 per hour

Beyond 5 hours → RM3.00 per hour

Maximum charge per day → RM30.00

Given the total hours parked by each of 5 vehicles, calculate and display every vehicle's parking fee.

### Scenario 6 - Baggage Allowance Logic <Badge type="warning" text="Question" />

A flight ticket that includes 15 kg of free baggage.
Excess baggage is charged RM4.00 per kg beyond that limit.
However, if the passenger brings no baggage, they receive a RM10.00 discount on the total ticket price.

Given the baggage weight and ticket price for each of 20 passengers, calculate and display every passenger's final price.


### Scenario 7 - Early Bird Discount Logic <Badge type="warning" text="Question" />

If a user registers before the 15th day of the month, they get a 10% discount.
Otherwise, they pay full price.

Given the registration day and base fee for each of `n` users, calculate and display every user's final fee.

### Scenario 8 - Final Score <Badge type="warning" text="Question" />

Final score is calculated as:

Midterm 30%

Assignment 20%

Final exam 50%

But if any of the three components is below 30, the final score is automatically 0.

Given the midterm, assignment, and final exam marks for each of 10 students, calculate and display every student's final result.



