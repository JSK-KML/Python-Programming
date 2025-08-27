---
outline: deep
title : Lab 3 - More Flowgorithm 
---

# Lab 03 : More Flowgorithm 

## Pull and Update in VS Code

This lab will explain how to use **Flowgorithm** for sequence and selection.

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated. 

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Creating Our First Flowchart <Badge type="warning" text="Recall" />

Launch **Flowgorithm** by pressing <kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">⊞ Win</kbd> on your keyboard and type *Flowgorithm*. If you can't see it make sure you have [installed it.](/labs/installation#flowgorithm)

When you first launch it, you will see a simple flowchart, containing only `Start` and `End`. This is the default template of the any **Flowgorithm** projects. Before we edit the file, we need to save the file first.

To know if the file is still unsaved, the name of the file is still called `(Untitled)`. To save the file, click `File` and then `Save As...`. The system will prompt you on the location of the file you want it saved. Save it to any location you are comfortable with. Remember this location, you will need to use this later. Name the file exactly as this; `lab-03-1`.

Hover your mouse on the arrow that is connecting `Main` and `End` until the arrow turns orange, then left click on the arrow.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-8.png" alt="drawing" width="400"/>
</p>

After you right click on in, you will see a window popup, listing all the shapes that you can add into your flowchart. Don't worry about the types of shapes that you see here, you will be taught on how to use it later.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-9.png" alt="drawing" width="600"/>
</p>

Lets try to apply it on a scenario. For this example, lets use [Scenario 1](../tutorials/chapter-2-tutorial-1.md#scenario-1-meal-price-with-taxes) from our Chapter 2 - Tutorial 1.

For this exercise, we are focusing on how to use **Flowgorithm** not how to create a correct flowchart. The usage of the shapes might be not the most accurate way, but take it easy. This exercise is emphasizing on the software.

Lets recall Scenario 1 from Chapter 2 - Tutorial 1 :

>A government tax of 10% and service tax of 5% will be added to the price of a set of meal bought  at MFC. Calculate the total price that Ali has to pay for a set of meal. Write a problem analysis for the given problem statement.

#### Creating Input and Output

Click again the arrow between `Main` and `End` and open the popup window again. Under the **Statement** category, click the **Input** shapes.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-10.png" alt="drawing" width="600"/>
</p>

An `Input` shape will appear in between `Main` and `End`. So if you want to add a new shape in between the two old shape, click the line in between those two shapes. Now lets change the input in the `Input` shapes. Double click the `Input` shapes until a window appear that ask you to enter the variable name. For this questions, the input name is `mealPrice`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-11.png" alt="drawing" width="400"/>
</p>

::: info NOTE
Any variable name that are used must only contains only letters and numbers, you cannot use special character such as - or _
:::

After finishing those steps, this is what you should see as belows.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-12.png" alt="drawing" width="400"/>
</p>

Now repeat the process again, but this time, use the `Output` shape and enter the variable name for the output. Make sure that you click the arrow between `Input` and `End` so you will add the `Output` shape in the correct sequence.


#### Declaring the Variable

Even though we have declared our input and output, in **Flowgorithm**, we need to separately declare our variable first outside the `Input` and `Output` shape. So for your `Input`, click the arrow between `Main` and `Input` so we can declare the variable used in `Input` shape.

In the popup window, under the category Statement, choose the `Declare` shape.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-13.png" alt="drawing" width="400"/>
</p>

Double click the `Declare` shape and name the variable exactly as you put in the input, which in our case, is `mealPrice` and choose the Integer data type. Click OK to finalise it. 

<p align="center">
    <img src="/public/labs/lab-02/lab-2-14.png" alt="drawing" width="400"/>
</p>

The result afterwards should look like the below

<p align="center">
    <img src="/public/labs/lab-02/lab-2-15.png" alt="drawing" width="300"/>
</p>


Repeat the steps again to declare the variable that are used in `Output` shape. After you finished that, click anywhere in the **Flowgorithm** and press <kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">Ctrl</kbd> + <kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">S</kbd> to save the file. 


::: warning REMINDER
Make sure you click the correct arrow to ensure that the variable is declared in the correct sequence.
:::

### Creating Process

To create a process in **Flowgorithm**, click the arrow in between  `Declare` `**finalPrice** and `Output` **finalPrice**.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-1.png" alt="drawing" width="200"/>
</p>

In the popup window, under the category **Statement**, choose the `Assign` shape.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-2.png" alt="drawing" width="200"/>
</p>

After the `Assign` shape has appeared between the `Declare` and `Output` shape, double click it, in the popup window, on the left side, in the **variable** box and on the right side in the **Expression Box**, follow the guide below.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-3.png" alt="drawing" width="400"/>
</p>


### Running and Testing

Before running the program, double-check if your answer is exactly like this.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-5.png" alt="drawing" width="200"/>
</p>

To run the program, click the green arrow at the top right corner of the window. A popup window with a box to enter an input will appear, enter any input and compare it with you calculator to see if the calculations are correct.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-4.png" alt="drawing" width="400"/>
</p>

Copy and paste the saved file from the section earlier into `/labs/lab03/` directory of your repo using **VS Code**. Then commit and push the code. Refer back to the previous lab on how to do [commit and push](./lab-01.md#commit-and-push) if you don't remember how to.



## Exporting Flowgorithm to Python 

In **VS Code**, right click the `lab03` folder and click `New File`. Name the file `lab-3-1.py`. In **Flowgorithm**, at the top bar, click the `Source Code Viewer`.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-6.png" alt="drawing" width="400"/>
</p>

A popup window will appear, click the the dropdown at the top left of the window and choose `Python`.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-7.png" alt="drawing" width="400"/>
</p>

Copy and paste the given code from the window into `lab-3-1.py` and save the file.



## Scenario 1 – Hotel Reservation <Badge type="warning" text="Question" />

Question:
Mr Rahman plans to make a reservation for a hotel room in Langkawi Island. The basic rate is RM250.00 per night and service charge is 15% of the room rate. Determine the total payment if he books the hotel room for n nights.

Instruction:
- Flowgorithm file name: `lab-03-2` → place in `/labs/lab03/`.
- Python file name : `lab-03-2.py` → place in `/labs/lab03/`.

Inputs (in order):

- `NUM_NIGHT` – integer number of nights

Outputs (in order):

- `TOTAL_PAYMENT` – sum of room rate and service charge (RM)


## Scenario 2 – Storage Conversion <Badge type="warning" text="Question" />
Question:
Prompt user to input a size in Kilobyte, and convert the input into Megabyte, Gigabyte, Terabyte and Petabyte.

Instruction:
- Flowgorithm file name: `lab-03-3` → place in `/labs/lab03/`.
- Python file name : `lab-03-3.py` → place in `/labs/lab03/`.

Inputs (order):

- `kilobyte` – real number in KB

Outputs (order):

`megabyte`

`gigabyte`

`terabyte`

`petabyte`


## Scenario 3 – International Fax Cost <Badge type="warning" text="Question" />

Question:
Amin’s program calculates the cost of sending an international fax: service charge RM3.00 plus RM0.20 per page.

Instruction:
- Flowgorithm file name: `lab-03-4` → place in `/labs/lab03/`.
- Python file name : `lab-03-4.py` → place in `/labs/lab03/`.

Inputs (order):

- `pages` – integer number of pages
  
Outputs (order):

`TOTAL_COST` – sum of service charge and pages cost


## Scenario 4 – Cookie Calories <Badge type="warning" text="Question" />

Question:
A pack contains 40 pieces of cookies. The calorie info claims 10 servings per pack. Each serving equals 300 calories. Calculate the total calories consumed based on number of packs eaten.

Instruction:
- Flowgorithm file name: `lab-03-5` → place in `/labs/lab03/`.
- Python file name : `lab-03-5.py` → place in `/labs/lab03/`.

Inputs (order):

- `packs_eaten` – integer number of packs consumed

Outputs (order):

- `TOTAL_CALORIES` – SERVINGS_CONSUMED * 300

## Scenario 5 – Wage to Mow Yard <Badge type="warning" text="Question" />

Question:
The wage to mow the yard is based on diesel price RM2.00 per square meter. The yard area is the large rectangle minus the house rectangle. You are given the length and width of the yard boundary and the length and width of the house. Calculate the wage.

![image1](/public/tutorials/c2t1-1.png)

Instruction:
- Flowgorithm file name: `lab-03-6` → place in `/labs/lab03/`.
- Python file name : `lab-03-6.py` → place in `/labs/lab03/`.

Inputs (order):

- `yard_length` – real number

- `yard_width` – real number

- `house_length` – real number

- `house_width` – real number
 
Outputs (order):

- `WAGE` – Total wage

## Scenario 6 – Temperature Conversion <Badge type="warning" text="Question" />

Question
Prompt user to input a temperature in Celsius and convert it to Fahrenheit and Kelvin.

Instruction:
- Flowgorithm file name: `lab-03-7` → place in `/labs/lab03/`.
- Python file name: `lab-03-7.py` → place in `/labs/lab03/`.

Inputs (in order)

- `celsius` – real number (°C)

Outputs (in order)

- `fahrenheit` 

- `kelvin` 

## Scenario 7 – Simple Interest Calculator <Badge type="warning" text="Question" />

Question: 
Prompt user for principal (P), annual rate (R %) and time (T years); calculate:
1. the simple interest earned over the entire period  
2. the total amount to be repaid  
3. the monthly interest amount (simple interest ÷ (T × 12))

Instruction:  
- Flowgorithm file name: `lab-03-8` → place in `/labs/lab03/`.  
- Python file name:    `lab-03-8.py` → place in `/labs/lab03/`.  

Inputs (in order):  
- `principal` – real number (RM)  
- `rate`      – real number (% per annum)  
- `time`      – real number (years)  

Outputs (in order):  
- `interest`        
- `total_amount`     
- `monthly_interest`


## Push and Check <Badge type="danger" text="Experimental" />

After you have finish answering all the questions, make sure to [commit and push](./lab-01.md#commit-and-push) your files back to your repo.

In the **GitHub** repo, make sure that the commit passed all the test. Recall back [here](./lab-02.md#using-flowgorithm-with-github-action) if you forgot how to check it.


::: danger ATTENTION
The **GitHub Actions** setup for this lab is experimental and can fail eventhough you have done everything correctly. Please let me know if you have reached this part and show me the Actions result.
:::