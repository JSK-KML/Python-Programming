---
title: "Tutorial 9 : Chapter 5"
outline: deep
---

# Tutorial 9 : Chapter 5 - Selection Structures

### Exercise 1: Exam Pass <Badge type="tip" text="Question" />

Write a program that asks the user for a student's **exam score**, then prints `"Pass"` if the score is 50 or higher, and `"Fail"` if it is not.

### Exercise 2: Age Category <Badge type="tip" text="Question" />

Write a program that asks the user for a person's **age**, then prints `"Adult"` if the age is 18 or above, and `"Minor"` if it is not.


### Exercise 3: Weather Advice <Badge type="tip" text="Question" />

Write a program that asks for the **temperature** and whether it is **raining** (`yes`/`no`).

Print `"It is hot"` when the temperature is above 32, and print `"Bring an umbrella"` when it is raining.

### Exercise 4: Account Alerts <Badge type="tip" text="Question" />

Write a program that asks for an **account balance** and the **number of failed login attempts**.

Print `"Account overdrawn"` when the balance is below 0, and print `"Account locked"` when the failed login attempts are 3 or more.


### Exercise 5: Health Check <Badge type="tip" text="Question" />

Write a program that asks for a person's **temperature**, **heart rate**, and **oxygen level**.

Print `"High temperature"` when the temperature is above 37.5, `"High heart rate"` when the heart rate is above 100, and `"Low oxygen"` when the oxygen level is below 95.

### Exercise 6: Order Summary <Badge type="tip" text="Question" />

Write a program that asks for an **order total**, whether the customer used a **coupon** (`yes`/`no`), and the **delivery distance** in km.

Print `"Free gift added"` when the order total is 100 or more, `"Coupon applied"` when the customer used a coupon, and `"Extra delivery fee"` when the delivery distance is above 20.


## Multi-Branch Selection (if / elif / else)

### Exercise 7: Hotel Room Rate <Badge type="tip" text="Question" />

A hotel charges more for its better rooms, and every room costs more on a weekend than on a weekday. A standard room is RM180 on a weekday and RM220 on a weekend, while a deluxe room is RM250 and RM300 for the same.

Write a program that asks for the **room type** (`standard`/`deluxe`) and whether it is a **weekend** (`yes`/`no`), then prints the price per night.

### Exercise 8: Scholarship Award <Badge type="tip" text="Question" />

A university hands out its scholarships by grade point. The very best students get their tuition fully covered, the next group has half of it covered, and the group after that receives a small merit award; anyone who falls short of the merit cut-off is funded by no one. The three cut-offs are a CGPA of 3.8, 3.5, and 3.0.

Write a program that asks for a student's **CGPA** and prints the amount of tuition covered, which is one of `"100%"`, `"50%"`, `"25%"`, or `"0%"`.

### Exercise 9: Traffic Light <Badge type="tip" text="Question" />

At a junction, drivers react to whichever colour the light is showing. Green tells them to go, yellow tells them to slow down, and red tells them to stop.

Write a program that asks for the **colour** of the light and prints the correct instruction. If the colour entered is none of the three, print `"Invalid"`.

### Exercise 10: Cinema Ticket <Badge type="tip" text="Question" />

A cinema charges everyone RM15 for a ticket, but it looks after the young and the old: children under 12 and seniors 60 and above pay only half price. Everyone in between pays the full amount.

Write a program that asks for a customer's **age** and prints the price they pay.

### Exercise 11: Delivery Priority <Badge type="tip" text="Question" />

A warehouse decides how urgently to ship an order. Anything already overdue goes out as `"Urgent"` no matter what else is true. If it is not overdue but the customer is a member, it goes as `"Priority"`. Everything else is `"Standard"`.

Write a program that asks whether the order is **overdue** (`yes`/`no`) and whether the customer is a **member** (`yes`/`no`), then prints how the order ships.
