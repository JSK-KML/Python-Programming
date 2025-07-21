---
outline: deep
title : Lab 3 - More Flowgorithm 
---

# Lab 02 : Flowgorithm 

## Pull and Update in VS Code

This lab will explain how to use Flowgorithm for sequence and selection.

Before starting any lab, you need to make sure that the repo in your Github is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated. 

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Creating Our First Flowchart

Launch Flowgorithm by pressing <kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">⊞ Win</kbd> on your keyboard and type *Flowgorithm*. If you can't see it make sure you have [installed it.](/installations/flowgorithm)

When you first launch it, you will see a simple flowchart, containing only `Start` and `End`. This is the default template of the any Flowgorithm projects. Before we edit the file, we need to save the file first.

To know if the file is still unsaved, the name of the file is still callled `(Untitled)`. To save the file, click `File` and then `Save As...`. The system will prompt you on the location of the file you want it saved. Saved it to any location you are comfortable with. Remember this location, you will need to use this later. Named the file exactly as this; `lab-03-1`.

Hover your mouse on the arrow that is connecting `Main` and `End` until the arrow turns orange, then left click on the arrow.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-8.png" alt="drawing" width="400"/>
</p>

After you right click on in, you will see a window popup, listing all the shapes that you can add into your flowchart. Dont worry on the types of shapes that you see here, you will be taught on how to use it later.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-9.png" alt="drawing" width="600"/>
</p>

Lets try to apply it on a scenario. For this example, lets use [Scenario 1](../tutorials/chapter-2-tutorial-1.md#scenario-1-meal-price-with-taxes) from our Chapter 2 - Tutorial 1.

For this exercise, we are focusing on how to use Flowgorithm not how to create a correct flowchart. The usage of the shapes might be not the most accurate way, but take it easy. This exercise is emphasizing on the software.

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

::: danger INFO
Any variable name that are used must only contains only letters and numbers, you cannot use special character such as - or _
:::

After finshing those step, this is what you should see as belows.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-12.png" alt="drawing" width="400"/>
</p>

Now repeat the process again, but this time, use the `Output` shape and enter the variable name for the output. Make sure that you click the arrow between `Input` and `End` so you will add the `Output` shape in the correct sequence.


#### Declaring the Variable

Eventhough we have declared the our input and output, in **Flowgorithm**, we need to separately declared our variable first outside the `Input` and `Output` shape. So for your `Input`, click the arrow between `Main` and `Input` so we can declared the the variable used in `Input` shape.

In the popup window, under the category Statement, choose the `Declare` shape.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-13.png" alt="drawing" width="400"/>
</p>

Double click the `Declare` shape and named the variable exactly as you put in the input, which in our case, is `mealPrice` and choose the Integer data type. Click OK to finalise it. 

<p align="center">
    <img src="/public/labs/lab-02/lab-2-14.png" alt="drawing" width="400"/>
</p>

The result afterwards should looks like the below

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

To run the program, click the green arrow at the top right corner of the window. A popup window with a box to enter an input will appear, enter any input and compare it with you calculator to see if the calculations is correct.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-4.png" alt="drawing" width="400"/>
</p>

Copy and paste the saved file from the section earlier into `/labs/lab03/` directory of your repo using VS Code. Then commit and push the code. Refer back to the previous lab on how to do [commit and push](./lab-01.md#commit-and-push) if you doesnt remember how to.

## Scenario 1

Create a new **Flowgorithm** file and rename it to `lab-03-2` and after finishing answering the question, make sure to put it in `/labs/lab03/` directory.

Mr Rahman plans to make a reservation for a hotel room in Langkawi Island. The basic rate is RM250.00 per night and service charge is 15% of the room rate. Determine the total payment if he books the hotel room for n nights.

## Scenario 2 <Badge type="tip" text="Question" />

Create a new **Flowgorithm** file and rename it to `lab-03-3` and after finishing answering the question, make sure to put it in `/labs/lab03/` directory.

Prompt user to input in Kilobyte, and convert the input into Megabyte, Gigabyte, Terabyte and Petabyte.

## Scenario 3 <Badge type="tip" text="Question" />

Create a new **Flowgorithm** file and rename it to `lab-03-4` and after finishing answering the question, make sure to put it in `/labs/lab03/` directory.

A program created by Amin will calculate the cost of sending an international fax is calculated as follows: 
  - Service charges is RM 3.00 
  - RM 0.20 per page.

## Scenario 4 <Badge type="tip" text="Question" />

Create a new **Flowgorithm** file and rename it to `lab-03-5` and after finishing answering the question, make sure to put it in `/labs/lab03/` directory.

A pack contains 40 pieces of cookies. The calorie information claims that there are 10 servings in a pack. Each serving equals to 300 calories. Calculate and display the number of total calories consumed.

## Scenario 5 - Area of Yard <Badge type="tip" text="Question" />

Create a new **Flowgorithm** file and rename it to `lab-03-6` and after finishing answering the question, make sure to put it in `/labs/lab03/` directory.

The wage to mow the yard of a house is based on the price of diesel used to mow it. The yard to be mowed is shown in the shaded area given in the figure below.

![image1](/public/tutorials/c2t1-1.png)

You are given the length and width of the house area and the length and width of the house. The price of diesel used is RM2.00 per square meter.Calculate and display the wage of mowing the yard of the house.

## Push and Check

After you ahve finish answering all the questions, make sure to [commit and push](./lab-01.md#commit-and-push) your files back to your repo.

In the Github repo, make sure that the commit passed all the test. Recall back [here](./lab-02.md#using-flowgorithm-with-github-action) if you forgot how to check it.
