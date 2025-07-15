---
outline: deep
title : Lab 2 - Flowgorithm and More Github
---

# Lab 02 : Flowgorithm and More Github

## Pull and Update in VS Code

This lab will explain how to use Flowgorithm and how to integrate Flowgorithm with Github

Before starting any lab, you need to make sure that the repo in your Github is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Syncing the repo only updates the online repo that exist in Github web server. Back in our VS Code, the code are unchanged from the last time you used it. 

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

`Pull` connects to the project on Github, grabs any commits added since your last `Pull`, and blends those changes into your PC so your local files and history now match what’s online on Github server.

## Introduction to Flowgorithm

Flowgorithm is a program that lets you draw an algorithm as a flowchart and then watch it run step-by-step. Each shape (start, input, decision, loop, etc.) represents one action in your logic, so you can see what happens to your variables without writing any code first. When you’re ready, Flowgorithm can even show the matching Python code so you can relate the picture to real code.

Launch Flowgorithm by pressing <kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">⊞ Win</kbd> on your keyboard and type *Flowgorithm*. If you can't see it make sure you have [installed it.](/installations/flowgorithm)

When you first launch it, you will see a simple flowchart, containing only `Start` and `End`. This is the default template of the any Flowgorithm projects. Before we edit the file, we need to save the file first.

To know if the file is still unsaved, the name of the file is still callled `(Untitled)`. To save the file, click `File` and then `Save As...`. The system will prompt you on the location of the file you want it saved. Saved it to any location you are comfortable with. Remember this location, you will need to use this later. Named the file exactly as this; `lab-2`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-2.png" alt="drawing" width="400"/>
</p>



### Creating Our First Flowchart

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





## Using Github Actions

GitHub Actions is a built-in tool inside GitHub that can automatically run tasks for you, like checking your code, testing it, or uploading your project to a website.

You set up these tasks using a simple file written in YAML, where you describe what steps should happen and when.

For example, every time you push new code or create a pull request, GitHub Actions can automatically check your work to see if everything is correct.

This process is called a workflow, and it helps catch mistakes early, without you needing to run tests manually.

To set up your Github Actions, go to the `cp115-class-repo` in your Github account and go to the `Actions` tab. Click the `I understand my workflows, go ahead and enable them`. 

<p align="center">
    <img src="/public/labs/lab-02/lab-2-3.png" alt="drawing" width="600"/>
</p>

The direction for Github Actions have been set up in any file that have the `.yml file`. If you look into your repostiory right now, you will see that there are two `.yml` file, both of them are inside `.github/workflows` called `lab01-ci.yml` and `lab02-ci.yml`. The file name is quite explanatory. The first one is for the first lab and the second on is for the second lab.

Look into the `lab02-ci.yml`, you can see that the language is quite direct and can be understand easily. Don't worry too much about writing the workflow, for now, the workflow will be given to you.

## Using Flowgorithm with Github Action

Copy and paste the saved file from the [Flowgorithm](#introduction-to-flowgorithm) section earlier into `/labs/lab02/` directory of your repo using VS Code. Then commit and push the code. Refer back to the previous lab on how to do [commit and push](./lab-01.md#commit-and-push) if you doesnt remember how to.

When you push your changes to GitHub, a special process called a GitHub Actions workflow automatically runs in the background. Think of this as GitHub testing your work — just like an auto-checker.

After you push, go back to your repository on GitHub. You’ll notice a small orange circle beside your latest commit message

<p align="center">
    <img src="/public/labs/lab-02/lab-2-4.png" alt="drawing" width="600"/>
</p>

If there’s a mistake, the orange circle will change into a red cross. This means your submission didn’t pass the automated check, but don’t panic, you can fix it.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-5.png" alt="drawing" width="600"/>
</p>

Click the `Actions` tab and click the latest workflow inside the `Actions`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-6.png" alt="drawing" width="600"/>
</p>


Inside the workflow, you’ll see a clear error message showing why it failed. This might say the file is missing, wrongly named, or contains something invalid.

### Successful Action Workflow <Badge type="tip" text="Task" />

Your task is to read the error message and correct the mistake based on the error. If the workflow is successfull, you should see a green tick next to your commit message.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-7.png" alt="drawing" width="600"/>
</p>

