---
outline: deep
title : Lab 4 - Selection in Flowgorithm
---

# Lab 04 : Selection in Flowgorithm 

## Before You Begin

Same as every lab, before you start, make sure your workspace and login are **yours**:

1. Open **your own** cloned folder in **VS Code** (`File` → `Open Folder...`). Many students share the same PC, so confirm the folder belongs to you.
2. In the terminal, log out of any account with `gh auth logout`, then log back in as yourself with `gh auth login`.

Full steps are in [Lab 02 - Before You Begin](./lab-02.md#before-you-begin) if you need a reminder.

## Pull and Update in VS Code

This lab builds on [Lab 03](./lab-03.md). There you learned the **process** structure: adding the `Assign` shape to calculate values, running your flowchart, and exporting it to **Python**. Here you will add the missing piece, **selection**, so your flowchart can make decisions and take different paths depending on the input.

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated. 

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click [`Pull`](./glossary.md#pull).

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Checklist Before You Proceed

<Checklist title="Please Check Properly">

1. You have logged in to your Github account in the browser.
2. You have logged in to your Github account in the terminal using VS Code.
3. You have sync the repo in you Github account in the browser.
4. You have pull the update into you repo in VS Code.

</Checklist>

## Implementing Selection

Selection in flowchart is represented by the diamond shape. In **Flowgorithm**, it is the same. Before we start using the diamond shapes, lets use one example from [Tutorial 4](../tutorials/chapter-3-tutorial-4.md) for us to implement in **Flowgorithm**

> MyHealth magazine is sold at RM5.00 each if at least 5 units of the magazine are purchased, and it is sold at the price of RM7.00 each otherwise. Calculate the price a customer has to pay after they enter the quantity of the magazines that they purchased. 

Lets skip the `Input` shape and `Declare` shape for the questions, if you forgot how to do that, you can refer back [here](./lab-03.md#recap-building-the-sequence).

After declaring input and accepting input from the user, you will got this

<p align="center">
    <img src="/public/labs/lab-04/lab-4-1.png" alt="drawing" width="300"/>
</p>


You have one input, the `magazinesNumber`.This is a simple selection (if–else) problem: if `magazinesNumber` ≥ 5, the unit price is RM5.00. Otherwise, the unit price is RM7.00. Note the boundary case that "at least 5" , so you must includes 5.

Now that we have establish the structure of the algorithm, we have discovered a new variable, which is `unitPrice`. Declare the variable using the `Declare` shape just under the input.

<p align="center">
    <img src="/public/labs/lab-04/lab-4-2.png" alt="drawing" width="300"/>
</p>

The selection will be added after the `unitPrice` have been declared, The reason we did this is so that we only need to declare it once. If we declared the variable after the selection, we will have to declare it two times, one after the `True` condition and one after the `False` condition.

To add the selection, click the arrow underneath `unitPrice` and a popup window will open. Under the **Control** section, click the `Diamond` shape. 

<p align="center">
    <img src="/public/labs/lab-04/lab-4-3.png" alt="drawing" width="500"/>
</p>


The `Diamond` shape will automatically have two arrow coming out of them. The left one is for false and the right one for true.

<p align="center">
    <img src="/public/labs/lab-04/lab-4-4.png" alt="drawing" width="300"/>
</p>


Double click the `Diamond` shape and a popup window will appear that will prompt you to enter condition of the expression. For our questions, we will enter `magazineNumber >= 5` as our condition.

<p align="center">
    <img src="/public/labs/lab-04/lab-4-5.png" alt="drawing" width="400"/>
</p>

::: info NOTE
Only variable that have been declared can be used in the conditions. Make sure you declared all the necessary variable that you are going to need. Any condition inside the `Diamond` must be either evaluated to `True` or `False`.
:::

Now we need to add the logic for both paths of the selection:

**True Path (Right Side):** If `magazineNumber >= 5` is **True**, this means the customer is buying 5 or more magazines, so they get the discounted price. We need to set `unitPrice = 5`.

**False Path (Left Side):** If `magazineNumber >= 5` is **False**, this means the customer is buying fewer than 5 magazines, so they pay the regular price. We need to set `unitPrice = 7`.

Click on the **True** arrow (right side) and add an `Assign` shape. Set the assignment to `unitPrice = 5`.

Click on the **False** arrow (left side) and add an `Assign` shape. Set the assignment to `unitPrice = 7`.

<p align="center">
    <img src="/public/labs/lab-04/lab-4-6.png" alt="drawing" width="400"/>
</p>

After both paths, the flowchart will merge back together (note the circle connector in the image), and you can continue with calculating the total price by multiplying `unitPrice` with `magazineNumber`.

After the selection structure, we need to complete the flowchart. First, declare a new variable called `finalPrice` using the `Declare` shape to store the calculated total cost.

Next, add an `Assign` shape to calculate the final price using the formula `finalPrice = magazineNumber * unitPrice`. This will multiply the number of magazines by the unit price we determined from the selection.

Finally, add an `Output` shape to display the `finalPrice` to the user.

<p align="center">
    <img src="/public/labs/lab-04/lab-4-7.png" alt="drawing" width="400"/>
</p>

The complete flowchart shows how the selection structure works:
- The diamond shape evaluates the condition `magazineNumber >= 5`
- If **True** (right path): `unitPrice = 5` 
- If **False** (left path): `unitPrice = 7`
- Both paths merge back together at the circle connector
- Then the final calculation and output steps are executed


## Exporting Flowgorithm to Image

At the top bar, click **Tools > Export to an Image file**.

<p align="center">
    <img src="/public/labs/lab-04/lab-4-8.png" alt="drawing" width="400"/>
</p>


After you click it, a popup window will appear, no need to change anything and just click **Create** atthe bottom right of the window. 

Then it will prompt you the location that you want the image saved and the name of the image. Rename the image to `lab-4-0` and save it in `/labs/lab04/example/`. Also export this walkthrough to **Python** and save it as `lab-4-0.py` in the same folder.

For every question in this lab you submit two files: the flowchart exported as a **PNG image** (`.png`), and the flowchart exported as a **Python file** (`.py`). To create the Python file, export the flowchart the same way you learned in [Lab 03 - Exporting Flowgorithm to Python](./lab-03.md#exporting-flowgorithm-to-python). Save both into that question's folder, using the names given in the question.

## Selection Questions

### Scenario 1 - Electricity Bill <Badge type="warning" text="Question" />
A utility company charges RM0.30 per kWh for the first 100 kWh, RM0.50 per kWh for the next 100 kWh (101–200 kWh), and RM0.75 per kWh for any usage above 200 kWh.

Calculate the total bill when the customer enters their total kWh consumed.

Inputs (in order):

- `kwh` – total kWh consumed

Outputs (in order):

- `totalBill` – the total electricity bill

Save the PNG image as `lab-4-1.png` and the Python file as `lab-4-1.py`, both in `/labs/lab04/exercise1/`.

### Scenario 2 - Income Tax Slab <Badge type="warning" text="Question" />
Income tax is applied as:

- First RM50,000.00 → 0%

- Next RM50,000.00 → 1%

- Above RM100,000.00 → 2%

Given an annual income, calculate total tax due.

Inputs (in order):

- `income` – annual income (RM)

Outputs (in order):

- `totalTax` – the total tax due

Save the PNG image as `lab-4-2.png` and the Python file as `lab-4-2.py`, both in `/labs/lab04/exercise2/`.

### Scenario 3 - Parking Fee <Badge type="warning" text="Question" />

A mall charges parking as follows:

First 2 hours → Free

Next 3 hours (2–5 hours) → RM2.00 per hour

Beyond 5 hours → RM3.00 per hour

Maximum charge per day → RM30.00

Given total hours parked, calculate the parking fee.

Inputs (in order):

- `hours` – total hours parked

Outputs (in order):

- `parkingFee` – the parking fee (capped at RM30.00)

Save the PNG image as `lab-4-3.png` and the Python file as `lab-4-3.py`, both in `/labs/lab04/exercise3/`.

### Scenario 4 - Baggage Allowance Logic <Badge type="warning" text="Question" />

A flight ticket that includes 15 kg of free baggage.Excess baggage is charged RM4.00 per kg beyond that limit.
However, if the passenger brings no baggage, they receive a RM10.00 discount on the total ticket price.


Given the weight of baggage and ticket price, calculate the final price. 

Inputs (in order):

- `weight` – baggage weight in kg

- `ticketPrice` – ticket price (RM)

Outputs (in order):

- `finalPrice` – the final price to pay

Save the PNG image as `lab-4-4.png` and the Python file as `lab-4-4.py`, both in `/labs/lab04/exercise4/`.

### Scenario 5 - Football Points <Badge type="warning" text="Question" />

In a football league, a team earns 3 points for winning a match, 1 point for a draw, and no points for a loss. A team also collects 1 bonus point whenever the other side fails to score in that match. Given the goals each team scored, calculate the points each team takes from the match.

Inputs (in order):

- `scoreA` – goals scored by team A

- `scoreB` – goals scored by team B

Outputs (in order):

- `pointsA` – points earned by team A

- `pointsB` – points earned by team B

Save the PNG image as `lab-4-5.png` and the Python file as `lab-4-5.py`, both in `/labs/lab04/exercise5/`.

### Scenario 6 - Concert Ticket <Badge type="warning" text="Question" />

A concert ticket costs RM80. Fans who arrive more than 30 minutes before the show get RM15 off, and anyone who arrives after the show has already started is refused entry and pays nothing. Members get a further 15% off whatever they would pay. Given how many minutes before the show a fan arrives (a negative number means they arrived after it started) and whether they are a member, calculate what they pay.

Inputs (in order):

- `minutesBefore` – minutes before the show the fan arrives (negative if after it started)

- `membership` – `yes` or `no`

Outputs (in order):

- `price` – the amount the fan pays

Save the PNG image as `lab-4-6.png` and the Python file as `lab-4-6.py`, both in `/labs/lab04/exercise6/`.

### Scenario 7 - Thermostat <Badge type="warning" text="Question" />

A thermostat adjusts its power based on the room temperature compared to a target. When the room is colder than the target, it heats at 10 watts for every degree below. When the room is warmer, it cools at 8 watts for every degree above. When they are equal, it uses no power. The power used can never exceed 100 watts. Given the room and target temperatures, calculate the power used.

Inputs (in order):

- `tempRoom` – current room temperature

- `tempTarget` – target temperature

Outputs (in order):

- `power` – the power used in watts

Save the PNG image as `lab-4-7.png` and the Python file as `lab-4-7.py`, both in `/labs/lab04/exercise7/`.

### Scenario 8 - Taxi Fare <Badge type="warning" text="Question" />

A taxi starts the meter at RM4, which already covers the first 2 km of the trip. Every kilometre beyond that adds RM1.20 to the fare. Rides taken after midnight have a flat RM3 surcharge added at the end. Given the trip distance and whether it is after midnight, calculate the total fare.

Inputs (in order):

- `distance` – trip distance in km

- `afterMidnight` – `yes` or `no`

Outputs (in order):

- `fare` – the total fare

Save the PNG image as `lab-4-8.png` and the Python file as `lab-4-8.py`, both in `/labs/lab04/exercise8/`.

### Scenario 9 - Cheaper Plan <Badge type="warning" text="Question" />

A customer's monthly data can be charged in two ways, and the bill always uses whichever works out cheaper:

- **Plan A** charges RM10 as a base, plus RM1 for each GB used.

- **Plan B** charges a flat RM25 that already covers the first 20 GB. Any usage beyond 20 GB adds RM3 for each extra GB.

Given the data used, calculate the amount the customer is billed.

Inputs (in order):

- `gb` – data used in GB

Outputs (in order):

- `bill` – the amount billed

Save the PNG image as `lab-4-9.png` and the Python file as `lab-4-9.py`, both in `/labs/lab04/exercise9/`.


