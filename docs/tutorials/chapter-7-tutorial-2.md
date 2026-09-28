---
title: "Tutorial 11 : Chapter 7"
outline: deep
---

# Tutorial 11 : Chapter 7 - Sentinel-Controlled Loops

### Exercise 1: Sum Until Zero <Badge type="tip" text="Question" />

Write a program that keeps asking the user to enter a number and adds each one to a running total. The program stops as soon as the user enters `0`, and the `0` itself is not added. After the loop, print the total.

### Exercise 2: Daily Sales Calculator <Badge type="tip" text="Question" />

A cashier records the day's sales. Write a program that keeps asking for a **sale amount** until the user types `done`. Add up all the sale amounts and count how many transactions there were. After the loop, print the number of transactions and the total sales. Only print the average transaction amount when at least one sale was entered.

### Exercise 3: Score Analyzer <Badge type="tip" text="Question" />

Write a program that keeps asking the user to enter a **test score** between 0 and 100. The program stops as soon as a value outside that range is entered. For the valid scores, count how many there were, how many were passing (60 or above), and how many were failing (below 60). After the loop, print the count, the passing count, and the failing count. When at least one valid score was entered, also print the average score and the pass rate as a percentage.

### Exercise 4: Count the Drops <Badge type="tip" text="Question" />

Write a program that keeps asking the user to enter a **temperature** until they enter `-1` to stop. Count how many times a temperature is **lower than the one entered just before it**. After the loop, print that count. (The very first temperature has nothing before it, so it can never be a drop.)

### Exercise 5: Password Attempts <Badge type="tip" text="Question" />

The correct password is `Python`. Write a program that keeps asking the user to enter a **password guess** until they type `stop`. A guess is a match if it is the same word regardless of capital letters (so `python`, `PYTHON`, and `PyThOn` all match). After the loop, print how many guesses matched, and separately how many were exactly correct including the capital letters.

### Exercise 6: Growing Names <Badge type="tip" text="Question" />

Write a program that keeps asking the user to enter a **name** until they type `done`. Count how many names were **longer than the name entered just before them**. After the loop, print that count. (The first name has nothing before it, so it never counts.)

### Exercise 7: Same-Length Streak <Badge type="tip" text="Question" />

Write a program that keeps asking the user to enter a **word** until they type `quit`. Find the longest run of **words in a row that all have the same number of letters**. After the loop, print the length of that longest run.
