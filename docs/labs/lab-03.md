---
outline: deep
title : Lab 3 - More Flowgorithm 
---

# Lab 03 : More Flowgorithm 

## Pull and Update in VS Code

This lab builds on [Lab 02](./lab-02.md). There you learned the **sequence** structure: taking input, declaring variables, and showing output. Here you will add the missing piece, **processing** that input with calculations, then run your flowchart and export it to **Python**.

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated. 

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click [`Pull`](./glossary.md#pull).

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Recap: Building the Sequence <Badge type="warning" text="Recall" />

We will reuse the meal-price scenario from [Chapter 2 - Tutorial 1, Scenario 1](../tutorials/chapter-2-tutorial-1.md#scenario-1-meal-price-with-taxes):

>A government tax of 10% and service tax of 5% will be added to the price of a set of meal bought at MFC. Calculate the total price that Ali has to pay for a set of meal.

You already know how to do every step below from Lab 02, so we will not repeat the screenshots. If any step is unclear, go back to [Lab 02 - Creating Our First Flowchart](./lab-02.md#creating-our-first-flowchart).

Launch **Flowgorithm**, then `File` → `Save As...` and name the file `lab-03-1`. Build the following sequence by clicking the arrow where each shape should go:

1. **Declare** `mealPrice` (Integer)
2. **Input** `mealPrice`
3. **Declare** `finalPrice` (Real)
4. **Output** `finalPrice`

When you finish, you should have these four shapes in order, with an empty gap between `Declare finalPrice` and `Output finalPrice` where the calculation will go.

::: warning REMINDER
Before moving on, confirm you have **four** shapes in order: declare and input for `mealPrice`, then declare and output for `finalPrice`. The calculation is still missing, that is what we add next.
:::

## Creating a Process (The Assign Shape)

So far every flowchart you have built only moves data in and straight back out. A real program has to **do something** to that data in between. That "doing something" is a **process**, and in **Flowgorithm** a process is created with the `Assign` shape.

The `Assign` shape takes an **expression** on the right, calculates its value, and stores the result in a **variable** on the left. This is where the actual maths of your program happens.

To add it, click the arrow between `Declare finalPrice` and `Output finalPrice`.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-1.png" alt="drawing" width="200"/>
</p>

In the popup window, under the category **Statement**, choose the `Assign` shape.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-2.png" alt="drawing" width="500"/>
</p>

Double click the new `Assign` shape. The popup has two boxes: the **Variable** box on the left (where the answer is stored) and the **Expression** box on the right (the calculation). For our scenario, the total is the meal price plus 10% government tax plus 5% service tax, so:

- **Variable:** `finalPrice`
- **Expression:** `mealPrice + (mealPrice * 0.10) + (mealPrice * 0.05)`

<p align="center">
    <img src="/public/labs/lab-03/lab-3-3.png" alt="drawing" width="400"/>
</p>

::: info NOTE
You can only assign **into** a variable that has already been declared, and you can only use variables in the expression that already hold a value. This is why we declared `finalPrice` earlier and put the `Assign` **after** the input, not before it. The order matters.
:::

### Adding More Than One Input or Output

Our meal-price example used a single input and a single output, but several of the exercises below need more than one of each (the storage converter, for example, has one input and **five** outputs).

Adding them works exactly the same way: click the arrow at the point in the sequence where the new shape should go, then add another `Declare`, `Input`, `Assign`, or `Output`. Every variable must still be declared before it is used.

::: warning REMINDER
The auto-checker reads your inputs and outputs **in the order they appear from top to bottom**. Place each `Input` and `Output` in the exact order the question lists, or your check will fail even when the maths is correct.
:::

## Running and Testing

A flowchart that looks correct is not the same as a flowchart that **is** correct. **Flowgorithm** lets you [run](./glossary.md#run) your flowchart step by step so you can check the logic against your own calculation.

Before running, double-check your flowchart matches this exactly:

<p align="center">
    <img src="/public/labs/lab-03/lab-3-5.png" alt="drawing" width="200"/>
</p>

To run the program, click the **green arrow** at the top right corner of the window. A popup will appear asking for input. Enter a value for `mealPrice`, for example `100`.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-4.png" alt="drawing" width="400"/>
</p>

Now **verify** the result yourself. For an input of `100`, the total should be `100 + 10 + 5 = 115`. If **Flowgorithm** shows `115`, your process is correct. If it shows something else, double click your `Assign` shape and check the expression.

::: tip WHY
Always test with a value you can work out by hand. If your flowchart and your calculator disagree, the bug is in the flowchart, and now you know to fix it before you ever write a line of code.
:::

Once you are happy with the result, create a folder for this work: in **VS Code**, right click the `lab03` folder, choose `New Folder`, and name it `exercise1`. Copy the saved `lab-03-1.fprg` file into `/labs/lab03/exercise1/`, then [commit and push](./lab-01.md#commit-and-push).

## Exporting Flowgorithm to Python 

One of the most useful features of **Flowgorithm** is that it can translate your finished flowchart into real code in many languages, including **Python**. This lets you connect the diagram you understand to the code you are about to learn.

First, in **VS Code**, right click the `exercise1` folder you just created and click `New File`. Name the file `lab-03-1.py`.

Back in **Flowgorithm**, at the top bar, click the `Source Code Viewer`.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-6.png" alt="drawing" width="400"/>
</p>

A popup window will appear. Click the dropdown at the top left and choose `Python`.

<p align="center">
    <img src="/public/labs/lab-03/lab-3-7.png" alt="drawing" width="400"/>
</p>

Copy the generated code from the window into your `lab-03-1.py` file and save it.

::: info NOTE
Take a moment to read the **Python** code it produced. Each `Declare`, `Input`, `Assign`, and `Output` shape in your flowchart became a line of code. You will be writing this kind of code by hand soon, so seeing the flowchart and the code side by side is good practice.
:::

## Working with the Command Line

So far you have run your flowchart with the green arrow and managed your files by clicking. Programmers do much of this same work by typing into the [terminal](./glossary.md#terminal) instead, giving the computer one [command](./glossary.md#command) at a time. In this section you will run the **Python** file you just exported entirely from the command line, picking up four everyday commands as you go.

Open a terminal in **VS Code** with `Terminal` → `New Terminal`. A panel appears at the bottom, with a line waiting for your first command. 

A terminal is always "inside" one folder, called the [working directory](./glossary.md#working-directory), so the first thing to do is ask where you are:

```bash
pwd
```

[`pwd`](./glossary.md#pwd) (*print working directory*) prints the full path of the folder you are currently in. The terminal responds with **output** like this:

```
/c/Users/Aiman/Desktop/name-cp115/CP115-Class-Repo
```

`pwd` depends on where do you open your VS Code, for some of you, the output of `pwd` might be: 

```
/c/Users/Aiman/Desktop/name-cp115
```

Dont worry too much about it, because we can change our `pwd` later. 

Now lets take a look at what you have in the current directory. Run the command below:


```bash
ls
```

[`ls`](./glossary.md#ls) (*list*) shows the files and folders inside your working directory. This time the output is:

```
labs  README.md
```

You might notice the `Explorer` panel of your `CP115-Class-Repo` shows more than this, including `.github` and `.vscode`:

<p align="center">
    <img src="/public/labs/lab-03/lab-3-8.png" alt="drawing" width="300"/>
</p>

Those two folders start with a dot (`.`), and `ls` hides any file or folder whose name begins with a dot. **VS Code** still shows them in the `Explorer`; they are there, `ls` simply does not list them unless you ask it to. You can ignore them for this lab.

Now lets change our `pwd`, to do that we use `cd` ( *change directory* ). You can do them one by one like below:

```bash
cd labs
```
```bash
cd lab03
```
```bash
cd exercise1
```

Now if you try to run `pwd` again, you will see the output below:

```
/c/Users/Aiman/Desktop/name-cp115/CP115-Class-Repo/labs/lab03/exercise1
```

Run `ls` here, and the output lists the two files you saved earlier:

```
lab-03-1.fprg  lab-03-1.py
```


That confirms you are in the right place. Now run the file with the **Python** interpreter:

```bash
python lab-03-1.py
```

The program runs, asks for your input just as before, and prints the result straight into the terminal.

::: info NOTE
If `python` is not recognised, try `py lab-03-1.py` instead. On **Windows** the Python launcher is sometimes called `py`.
:::

::: tip WHY
Clicking the ▶ button does all of this for you: it opens a terminal and runs `python` on your file behind the scenes. Lab 01 made the same point about the `Source Control` panel running `git clone`. Learning the commands underneath means you understand what the button is really doing.
:::

## Exercises

The remaining tasks are yours to solve. For each one, build the flowchart in **Flowgorithm**, test it, export it to **Python**, and place both files in that exercise's folder.

::: warning REMINDER
Your program must output **only the answer**, nothing else. In each `Output` shape put **just the variable** (for example `finalPrice`), never a label such as `"Total: " & finalPrice`. Do not add any prompt text to your `Input` either. The auto-checker reads the raw numbers your program prints, in the given order, so any extra words, labels, or symbols will fail the check even when your calculation is correct.
:::

## Exercise 2 – Hotel Reservation <Badge type="warning" text="Question" />

Question:
Mr Rahman plans to make a reservation for a hotel room in Langkawi Island. The basic rate is RM250.00 per night and service charge is 15% of the room rate. Determine the total payment if he books the hotel room for n nights.

Instruction:
- Flowgorithm file name: `lab-03-2` → place in `/labs/lab03/exercise2/`.
- Python file name : `lab-03-2.py` → place in `/labs/lab03/exercise2/`.

Inputs (in order):

- `numNight` – integer number of nights

Outputs (in order):

- `totalPayment` – sum of room rate and service charge (RM)


## Exercise 3 – Storage Conversion <Badge type="warning" text="Question" />
Question:
Prompt user to input a size in Kilobyte, and convert the input into Megabyte, Gigabyte, Terabyte and Petabyte.

Instruction:
- Flowgorithm file name: `lab-03-3` → place in `/labs/lab03/exercise3/`.
- Python file name : `lab-03-3.py` → place in `/labs/lab03/exercise3/`.

Inputs (in order):

- `kilobyte` – real number in KB

Outputs (in order):

- `megabyte`

- `gigabyte`

- `terabyte`

- `petabyte`


## Exercise 4 – International Fax Cost <Badge type="warning" text="Question" />

Question:
Amin’s program calculates the cost of sending an international fax: service charge RM3.00 plus RM0.20 per page.

Instruction:
- Flowgorithm file name: `lab-03-4` → place in `/labs/lab03/exercise4/`.
- Python file name : `lab-03-4.py` → place in `/labs/lab03/exercise4/`.

Inputs (in order):

- `pages` – integer number of pages
  
Outputs (in order):

- `totalCost` – sum of service charge and pages cost


## Exercise 5 – Cookie Calories <Badge type="warning" text="Question" />

Question:
A pack contains 40 pieces of cookies. The calorie info claims 10 servings per pack. Each serving equals 300 calories. Calculate the total calories consumed based on number of packs eaten.

Instruction:
- Flowgorithm file name: `lab-03-5` → place in `/labs/lab03/exercise5/`.
- Python file name : `lab-03-5.py` → place in `/labs/lab03/exercise5/`.

Inputs (in order):

- `packsEaten` – integer number of packs consumed

Outputs (in order):

- `totalCalories` – total calories consumed

## Exercise 6 – Wage to Mow Yard <Badge type="warning" text="Question" />

Question:
The wage to mow the yard is based on diesel price RM2.00 per square meter. The yard area is the large rectangle minus the house rectangle. You are given the length and width of the yard boundary and the length and width of the house. Calculate the wage.

![image1](/public/tutorials/c2t1-1.png)

Instruction:
- Flowgorithm file name: `lab-03-6` → place in `/labs/lab03/exercise6/`.
- Python file name : `lab-03-6.py` → place in `/labs/lab03/exercise6/`.

Inputs (in order):

- `yardLength` – real number

- `yardWidth` – real number

- `houseLength` – real number

- `houseWidth` – real number
 
Outputs (in order):

- `wage` – Total wage

## Exercise 7 – Temperature Conversion <Badge type="warning" text="Question" />

Question
Prompt user to input a temperature in Celsius and convert it to Fahrenheit and Kelvin.

Instruction:
- Flowgorithm file name: `lab-03-7` → place in `/labs/lab03/exercise7/`.
- Python file name: `lab-03-7.py` → place in `/labs/lab03/exercise7/`.

Inputs (in order):

- `celsius` – real number (°C)

Outputs (in order):

- `fahrenheit` 

- `kelvin` 

## Exercise 8 – Simple Interest Calculator <Badge type="warning" text="Question" />

Question: 
Prompt user for principal (P), annual rate (R %) and time (T years); calculate:
1. the simple interest earned over the entire period  
2. the total amount to be repaid  
3. the monthly interest amount (simple interest ÷ (T × 12))

Instruction:  
- Flowgorithm file name: `lab-03-8` → place in `/labs/lab03/exercise8/`.  
- Python file name:    `lab-03-8.py` → place in `/labs/lab03/exercise8/`.  

Inputs (in order):  
- `principal` – real number (RM)  
- `rate`      – real number (% per annum)  
- `time`      – real number (years)  

Outputs (in order):  
- `interest`        
- `totalAmount`     
- `monthlyInterest`


## Commit, Push and Check

For **every** exercise you must place **two** files inside that exercise's own folder under `/labs/lab03/`:

- the **Flowgorithm** file (`.fprg`), and
- the exported **Python** file (`.py`),

both named exactly as the question states and placed in the matching folder, for example `lab-03-2.fprg` and `lab-03-2.py` inside `/labs/lab03/exercise2/`. A wrong name or wrong folder will fail the check.

Once all your files are in their exercise folders, submit them in three steps:

1. **Commit.** In **VS Code**, open `Source Control`, write a clear message such as `Complete Lab 03 exercises`, and click `Commit`. This records a snapshot of your work.
2. **Push.** Click `Sync Changes` to upload your commit to your repository on **GitHub**. If you have forgotten how, refer back to [commit and push](./lab-01.md#commit-and-push).
3. **Check.** The push triggers the **GitHub Actions** auto-checker automatically. Go to your repository on **GitHub** and look at the mark beside your latest commit: an orange dot means it is still running, a red cross means it failed, and a green tick means every file passed. Recall the details [here](./lab-02.md#using-flowgorithm-with-github-action).

If you see a red cross, click the `Actions` tab and open the latest workflow to read which file failed and why, then fix it and push again.

::: tip WHY
For each Python file the checker **runs your program**, types the inputs in the exact order the question lists, then compares your printed outputs against the expected answers, again in order. This is why every exercise states its inputs and outputs *in order*. If your program reads inputs in a different order, or prints outputs in a different order, the check fails even when your maths is correct.
:::
