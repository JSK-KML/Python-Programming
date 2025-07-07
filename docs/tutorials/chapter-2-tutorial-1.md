---
title: Chapter 2 - Tutorial 1
outline : deep
---

# Chapter 2 - Tutorial 1

## IPO - Input ▸ Process ▸ Output  

Before any line of code is written, clarify three things: **what arrives from the user, what is done with it, and what must appear at the end.** The Input-Process-Output pattern keeps those elements in clear view and prevents logic from drifting.

---

## Creating The IPO Table  

| Phase      | Practical Meaning | Typical Keywords (in the problem text) |
|------------|------------------|-----------------------------------------|
| **Input**  | Data accepted from the user — always *nouns*, never actions. **NEVER USE VERB.** | enter, read, get |
| **Process**| Operations applied to the inputs — arithmetic, decisions, loops. Each item should begin with a **verb**.<br><br> The suggested structure is: <br><br> VERB + OUTPUT + BASED ON INPUT AND CONSTANT  | calculate, compute, determine, if, while, repeat |
| **Output** | The result delivered to the user or another system — again *nouns* or messages. **NEVER USE VERB.** | display, print, show |



---

## Applying the Model - Scenarios & Clues  

Work through each brief below. For every case, try to create an IPO table and we will discuss the answer together

---

### Scenario 1 - Meal Price with Taxes <Badge type="tip" text="Question" />


 A government tax of 10% and service tax of 5% will be added to the price of a set of meal bought at MFC. Calculate the total price that Ali has to pay for a set of meal. Write a problem analysis for the given problem statement.

::: details Click for clue
 Take a look on the number of item in the menu. Also, dont forget the constant.
:::


### Scenario 2 - Cookies Calories <Badge type="tip" text="Question" />


A pack contains 40 pieces of cookies. The calorie information claims that there are 10 servings in a pack. Each serving equals to 300 calories. Identify the input, process and output to calculate and display the number of total calories consumed.  

::: details Click for clue
Be mindful on the kind of calculation that needs to be done.
:::

### Scenario 3 - Overtime Pay <Badge type="tip" text="Question" />

Create a program that calculates and displays the overtime pay received by an employee. Overtime rate is RM500 per hour. Analyze the problem above by determining the input, process and output involved.


### Scenario 4 - Langkawi Room with Service Charge <Badge type="tip" text="Question" />


Mr Rahman plans to make a reservation for a hotel room in Langkawi Island. The basic rate is RM250.00 per night and service charge is 15% of the room rate. Determine the total payment if he books the hotel room for n nights.

### Scenario 5 - Area of Yard <Badge type="tip" text="Question" />

The wage to mow the yard of a house is based on the price of diesel used to mow it. The yard to be mowed is shown in the shaded area given in the figure below.

![image1](/public/tutorials/c2t1-1.png)

### Scenario 6 - Hotels Rate <Badge type="tip" text="Question" />

A hotel offers two types of room with different rates. 

| Room Type | Rate per Night (RM) |
|-----------|---------------------|
| Superior  | 160                 |
| Deluxe    | 180                 |

During the school holidays, the hotel offers a 10% discount on the total room charge. You are going to make a reservation of one Superior room and one Deluxe room for a few nights. Identify the input, process and output.to calculate and display the total room charge that you have to pay.           

::: details Click for clue
Again, be mindful of the constant
:::


### Scenario 7 - Converting between Bytes <Badge type="tip" text="Question" />

Prompt user to input in Kilobyte, and convert the input into Megabyte, Gigabyte, Terabyte and Petabyte.
::: details Click for clue
For bytes, the base for conversion is in base 8
:::

### Scenario 8 - Volume of Cuboid <Badge type="tip" text="Question" />

A student is required to determine volume of a cuboid based on the measurements of length, width and height in centimetre unit. Determine input, process, and output for the volume calculation problem.

### Scenarion 9 - Area of Shaded Region <Badge type="tip" text="Question" />

You are asked to calculate the area of shaded area of two circle in figure below. List down the input, process and output of this problem. 

<p align="center">
    <img src="/public/tutorials/c2t1-2.png" alt="drawing" width="200"/>
</p>

::: details Click for clue
Use the correct formula for calculation
:::   


### Scenario 10 - International Fax Cost <Badge type="tip" text="Question" />

A program created by Amin will calculate the cost of sending an international fax is calculated as follows:
    - Service charges is RM 3.00
    - RM 0.20 per page.

Using problem analysis, determine the input, output and process.

