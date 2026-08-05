---
outline: deep
title : Lab 6 - Environment, Testing and More Basic Python
---


# Lab 06 : Environment, Testing and More Basic Python

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Setting Up Your Workspace

Before we write any Python for this lab, we will set up the environment properly, the same way a working programmer does. Most of this happens in the [terminal](./lab-03.md#working-with-the-command-line), which you first met in Lab 03. If any command feels unfamiliar, that section is where they were introduced.

Open a terminal in **VS Code** with `Terminal` → `New Terminal`. First, confirm where you are:

```bash
pwd
```

Make sure you are in the root of your `CP115-Class-Repo`. Running `ls` here should show folders like `labs`, `LICENSE`, and `README.md`.

### Python Virtual Environments

A virtual environment in **Python** is like having a separate, isolated workspace for each of your projects. Think of it as having different toolboxes for different jobs.

When you install **Python** packages globally on your computer, they can sometimes conflict with each other. Different projects might need different versions of the same package, or installing a new package might break something in an existing project.

Virtual environments solve this problem by creating isolated **Python** environments where each project can have its own set of packages and dependencies, without affecting other projects or your system **Python** installation.

### Creating Your First Virtual Environment

Make sure you are in the root directory of your `CP115-Class-Repo`. Now create a virtual environment using **Python**'s built-in `venv` module. Type the following command:

```bash
python -m venv cp115_env
```

This creates a new directory called `cp115_env` that contains your isolated **Python** environment. The `python -m venv` command tells **Python** to run the venv module and create a new virtual environment in the specified directory.

You should see a new folder called `cp115_env` appear in your repository root directory. This folder contains a complete **Python** installation that's separate from your system **Python**.

### Activating the Virtual Environment

Creating the virtual environment is just the first step. To actually use it, you need to activate it. Run the command below.

```bash
cp115_env\Scripts\activate
```

After activation, you should see `(cp115_env)` appear at the beginning of your terminal prompt. This indicates that your virtual environment is active and any **Python** commands you run will use this isolated environment.

<p align="center">
    <img src="/public/labs/lab-06/lab-6-3.png" alt="drawing" width="300"/>
</p>

### Testing Your Virtual Environment

Let's verify that your virtual environment is working correctly. With the virtual environment activated, type:

```bash
python --version
```

This should show your **Python** version.

### Deactivating the Virtual Environment

When you're done working in your virtual environment, you can deactivate it by simply typing:

```bash
deactivate
```

The `(cp115_env)` prefix should disappear from your terminal prompt, indicating that you're back to using your system **Python** installation.

::: tip
Always activate your virtual environment before working on your project, and deactivate it when you're done. This ensures you're working in the correct, isolated environment.
:::

## Testing Python Code in VS Code

### Installing the Python Test Explorer Extension

Testing is a crucial part of professional software development. It helps you verify that your code works correctly and continues to work as you make changes. **VS Code** has excellent support for **Python** testing through extensions.

Open **VS Code** and go to the Extensions panel by clicking the Extensions icon in the sidebar.

Search for "Python Test Explorer" and install the extension by **Little Fox Team**. This extension provides a graphical interface for running and managing **Python** tests.

<p align="center">
    <img src="/public/labs/lab-06/lab-6-4.png" alt="drawing" width="500"/>
</p>

Also make sure you have the **Python** extension by **Microsoft** installed from [Lab 1](./lab-01.md)

### Installing pytest

**pytest** is the most popular testing framework for **Python**. It makes writing and running tests simple and intuitive. First, make sure your virtual environment is activated:

```bash
cp115_env\Scripts\activate
```

You should see `(cp115_env)` in your terminal prompt. Now install **pytest**:

```bash
python -m pip install pytest
```

This installs **pytest** only in your virtual environment, not globally on your system. This is exactly what we want - each project can have its own version of **pytest**.

### Set Up Python Test Extension

On the sidebar, click the **Flask** symbol and then click **Configure Python Test**

<p align="center">
    <img src="/public/labs/lab-06/lab-6-5.png" alt="drawing" width="300"/>
</p>

On the top bar, choose **Pytest**

<p align="center">
    <img src="/public/labs/lab-06/lab-6-6.png" alt="drawing" width="300"/>
</p>

Next, choose **Root Directory**

<p align="center">
    <img src="/public/labs/lab-06/lab-6-7.png" alt="drawing" width="300"/>
</p>

### Running Tests in VS Code

Once configured, you should see a new **Testing** panel in **VS Code**'s sidebar. Click on the Testing icon (it looks like a flask) to open the test explorer.

In the Testing panel, you should see your test file and the individual test functions. You can:

- **Run all tests** by clicking the play button at the top
- **Run individual tests** by clicking the play button next to each test
- **View test results** with green checkmarks for passing tests and red X's for failing tests.

## Configuring .gitignore for Python Virtual Environments

### Understanding .gitignore

A `.gitignore` file is a list that tells **Git** which files and folders to leave out when you commit and push your work to **GitHub**. Anything listed in `.gitignore` will not appear in the **Source Control** panel, will not be included in your commits, and will never be uploaded to your **GitHub** repository.

This matters because your **GitHub** repository should only contain your actual work, the exercise files you write. It should not contain the large, machine-specific files that get generated along the way, such as:

- **Virtual environments** like `cp115_env`
- **Cache files** generated by Python (the `__pycache__` folders)

Think of `.gitignore` as a list of "do not upload these to **GitHub**" instructions.

### Why Keep the Virtual Environment Off GitHub?

Your `cp115_env` virtual environment should **never** be pushed to **GitHub** because:

1. **Size**: It contains thousands of files and can be hundreds of megabytes. This would make your repository huge and slow to clone.
2. **Machine-specific**: It contains paths specific to your computer, so it would not even work correctly on someone else's machine after they clone your repository.
3. **Not needed**: Anyone who clones your repository can recreate the virtual environment themselves with `python -m venv`, so there is no reason to upload yours.

### Adding Virtual Environment to .gitignore

Open the `.gitignore` file in the root of your repository.

```gitignore
# Python Virtual Environments
cp115_env/
venv/
env/
.env/

```

### Verifying .gitignore Works

After adding the virtual environment to `.gitignore`, check that **Git** is ignoring it:

Look into the sidebar for **Source Control**, and you should not see `cp115_env` and all of its content listed there. If it is not listed, it will not be pushed to **GitHub**, which is exactly what we want.

If you *do* still see it, make sure:

1. The `.gitignore` file is in the root directory of your repository
2. The path `cp115_env/` is correctly spelled in `.gitignore`

## Creating Your Playground File

The folders and files for each exercise in this lab have already been created for you when you pulled the update, so you do not need to make them yourself. Inside `/labs/lab06/` you will find each exercise folder waiting for your answers.

The only file you need to create is a scratch file to play around in while you follow the lab. Open a terminal, move into your `lab06` folder, and create it with [`touch`](./lab-03.md#working-with-the-command-line):

```bash
cd labs
```
```bash
cd lab06
```
```bash
touch exercise.py
```

`touch` creates an empty file. Run `ls` and you will see `exercise.py` alongside the exercise folders. Open it in **VS Code** and use it to try out every piece of code in this lab.

::: tip WHY
Right clicking `New File` and typing `touch exercise.py` do exactly the same thing. Learning the command means you understand what the button does, and once it is muscle memory it is quicker than reaching for the mouse.
:::

## Indentation

In pseudocode, you have been using indentation routinely when you are doing `if` and `while` statements. In Python, indentations are used exactly the same. Of course there are more indentation usage that extends further that `if` and `while` statements but that is just a reminder for the future.

In `exercise.py`, inside your `/labs/lab06` folder, try copy and paste the code below in **VS Code**. What do you see?

```python
print("Starting program")
    print("This line has spaces before it")
print("Back to normal")
```

**VS Code** will put red squiggly lines on the code to indicate something is wrong with the code. This is a main advantage of using a proper and well maintained IDE. It highlights the problems and error to us even before the code is executed.

The squiggly lines are there to tell us that the indentation is wrong.

<p align="center">
    <img src="/public/labs/lab-06/lab-6-1.png" alt="drawing" width="600"/>
</p>

Now lets try to run it. This time, instead of clicking the ▶ button, run it from the terminal so you can read the error message in full. Make sure you are inside `/labs/lab06`, then type:

```bash
python exercise.py
```

The program does not produce the expected output. Instead the terminal prints an error like this:

```
  File "exercise.py", line 2
    print("This line has spaces before it")
IndentationError: unexpected indent
```

The terminal tells you exactly what went wrong (`IndentationError`), and the exact line it happened on (`line 2`). The red squiggly line warned you before running, and the terminal confirms it when you run. Both are pointing at the same mistake.

### The 4-Space Rule

Python standard convention uses 4 spaces for each level of indentation.

**Why 4 spaces?**

The answer is rather simple. 4 spaces is deep enough that the indentation level is clear but not too deep that it wastes horizontal screen space or makes code hard to read when you have multiple nested levels.

**VS Code** helps you by automatically adding 4 spaces when you press <kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">Tab</kbd>.

Now you might wonder, what if i just decide to use 1 or 2 or something 15 spaces, would that still works?

The answer is ***kinda***. It works but you need to be careful when choosing a different value than 4.

Copy and paste the code below into `exercise.py`. In that code, the indentation value is different than 4. What do you see? Does it produce the expected output? Does the squiggly red lines in VS Code come out?

```python
value = 1

if(value == 1):
     print("Value is 1")
else:
  print("Value is not 1")

```

Run it in the terminal again with `python exercise.py` and watch it work despite the odd spacing. Now try to run the code below. What do you see?

```python
value = 1

if(value == 1):
     print("Value is 1")
       print("This is an additional print statement.")
else:
  print("Value is not 1")
```

Bottom line is, dont use indentation if the code is on the same level and for indentation, just use <kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">Tab</kbd> button.


## Naming Variables

In Python, we use **snake_case** to name variables. All lowercase with underscores between words

```python
student_name = "Ali"
total_price = 150.50
is_passed_exam = True
number_of_items = 5
```

Some other language uses CamelCase to name variables.

```python
studentName = "Ali"
totalPrice = 150.50
isPassedExam = True
numberOfItems = 5
```

So which one should we use? This is again similar as indentation, which is **Python** dont care, but other people do. In **Python**, the standard convention is to use snake_case, but if you decide to use CamelCase, the program still works, it just didnt follow the convention.

Why is it so important to follow convention? Right now you might be wondering, if both ways works that why should you care. The answer lies in your future. You will not be working alone all your life, you will be working with other classmates, collegue and others.

Having a convention is nice because your friends know what to expect from your coding style and vice versa. You also know what to expect from them.

### Variables Naming Exercise <Badge type="warning" text="Question" />

Open the file `exercise1.py` inside the `/labs/lab06/exercise1/` folder. This file has already been created for you, so you do not need to make it.

For each line below, state as a comment whether it is a hard error that stops **Python** from running, or a name that runs but breaks the snake_case convention. Then rewrite every line so the whole program runs and every name follows snake_case.

```python
movie title = "Avengers Endgame"
2d_or_3d = "3D"
ticket-price = 18.00
numberOfTickets = 3
is_weekend = True
hasStudentDiscount = False
PopcornCombo = "Large"
list = "Nachos"
customer age = 25
member#id = "M1234"
```


## Floating Point Numbers

Before we go further with strings, there is one thing about numbers with a decimal point (called `float` values) that surprises almost every beginner. Copy this into your `exercise.py` and run it with `python exercise.py`:

```python
print(0.1 + 0.2)
```

You expect `0.3`. Instead **Python** prints:

```
0.30000000000000004
```

This is **not** a bug in **Python**, and it is not a mistake in your code. To understand why it happens, think about how *you* write numbers.

You write numbers in **decimal** (base 10), using the ten digits `0` to `9`. In decimal, some fractions cannot be written out fully. The classic example is `1/3`. If you try to write it as a decimal, you get `0.3333...` and the threes go on forever. You can never write down the *exact* value of `1/3` in decimal, no matter how many digits you use. The best you can do is stop somewhere and accept a tiny error.

A computer does not use decimal. It stores everything in **binary** (base 2), using only the two digits `0` and `1`. And here is the key point: **just as `1/3` cannot be written exactly in decimal, the number `0.1` cannot be written exactly in binary.**

Let's actually see it. In decimal, `0.1` looks clean and finished. But written in binary, `0.1` looks like this:

```
Decimal:  0.1
Binary:   0.0001100110011001100110011001100110011...
                └──────────┬──────────┘
                    "0011" repeats forever
```

The block `0011` keeps repeating and never stops, exactly the way the `3` in `0.3333...` never stops in decimal. Since the computer only has room for a fixed number of digits, it has to chop this off somewhere and store the *closest value it can fit*. That stored value is very slightly larger than a true `0.1`. If you forced the computer to show you what it *actually* stored, in decimal, it would be something like:

```
0.1000000000000000055511151231257827021181583404541015625
```

So the `0.1` you typed was never really `0.1` inside the machine, it was this slightly-too-big number all along. The same thing happens to `0.2`.

So when you ask for `0.1 + 0.2`, the computer is really adding two numbers that are each already a tiny bit wrong, and the small errors combine into the `0.30000000000000004` you see on screen.

The exact rules for how a computer stores these numbers, how many binary digits it keeps, and where it rounds, are defined by an international standard called **IEEE 754**. Almost every programming language and processor follows it, which is why you get the *exact same* `0.30000000000000004` in Python, Java, JavaScript, C, and nearly everywhere else. You do not need to memorise the standard, but it is good to know this behaviour has a name and a specification behind it. You can read more on the [IEEE 754 Wikipedia page](https://en.wikipedia.org/wiki/IEEE_754) if you are curious.

The takeaway: `float` values are stored *approximately*, not exactly. For everyday programs this is almost never a problem, as long as you remember it when displaying results.

### Fixing it with `round()`

When you want a tidy answer, use the `round()` function. It takes the number first, then how many decimal places you want:

```python
answer = 0.1 + 0.2
print(round(answer, 2))
```

**Output:**
```
0.3
```

`round(answer, 2)` rounds `answer` to `2` decimal places. This is especially important when you are working with money, because nobody wants to see a price of `RM0.30000000000000004`.

::: warning REMINDER
Whenever your program deals with prices or any decimal amount that will be shown to a user, wrap the final result in `round()`. The maths underneath is still slightly imprecise, but `round()` gives you a clean number to display.
:::

## String Quotes: Single, Double, and Triple

Let's understand the different ways to create strings in Python using different types of quotes.

### Single Quotes vs Double Quotes

In Python, you can use either single quotes (`'`) or double quotes (`"`) to create strings. Both work exactly the same way:

```python
# Using single quotes
name1 = 'Ali'
print(name1)

# Using double quotes  
name2 = "Ali"
print(name2)

# Both produce the same result
print(name1 == name2)  # Output: True
```

**Output:**
```
Ali
Ali
True
```

### When to Use Which?

The choice between single and double quotes becomes important when your string contains quotes:

```python
# If your string contains single quotes, use double quotes
message1 = "I can't believe it's working!"
print(message1)

# If your string contains double quotes, use single quotes
message2 = 'He said "Hello there!"'
print(message2)
```

**Output:**
```
I can't believe it's working!
He said "Hello there!"
```

### Triple Quotes

Triple quotes (`"""` or `'''`) are used for multi-line strings:

```python
# Using triple double quotes
long_text = """This is a long text
that spans multiple lines.
You can write as many lines as you want."""
print(long_text)

# Using triple single quotes
poem = '''Roses are red,
Violets are blue,
Python is awesome,
And so are you!'''
print(poem)
```

**Output:**
```
This is a long text
that spans multiple lines.
You can write as many lines as you want.
Roses are red,
Violets are blue,
Python is awesome,
And so are you!
```

### String Quotes Exercise <Badge type="warning" text="Task" />

Open the file `exercise2.py` inside the `/labs/lab06/exercise2/` folder (it has already been created for you). Write a single program that produces the exact output below, choosing the right kind of quote for each line so that no quote character is ever lost or causes an error:

```
She said, "It's Ali's book, isn't it?"
The sign read: "No Parking" — don't ignore it.
Ali's note:
    "Meet me at 5."
    "Bring the "blue" folder."
```

Store each of the three blocks in its own variable, then print them. Run it from the terminal with `python exercise2.py` and check your output matches character for character, including the quote marks.

## Escape Characters

Escape characters are special characters in strings that are preceded by a backslash (`\`). They allow you to include characters that would otherwise be difficult or impossible to type directly in a string.

The two most commonly used escape characters are:
- `\n` - Creates a new line (line break)
- `\t` - Creates a tab (horizontal spacing)

#### Using `\n` for New Lines

```python
# Without \n - everything prints on one line
print("Hello World How are you?")

# With \n - creates line breaks
print("Hello\nWorld\nHow are you?")

# You can combine \n with regular text
message = "Name: Ali\nAge: 20\nGrade: A"
print(message)
```

**Output:**
```
Hello World How are you?
Hello
World
How are you?
Name: Ali
Age: 20
Grade: A
```

#### Using `\t` for Tabs

```python
# Without \t - no spacing
print("Name Age Grade")
print("Ali 20 A")

# With \t - creates neat columns
print("Name\tAge\tGrade")
print("Ali\t20\tA")
print("Sarah\t19\tB+")
```

**Output:**
```
Name Age Grade
Ali 20 A
Name	Age	Grade
Ali	20	A
Sarah	19	B+
```

#### Combining `\n` and `\t`

```python
# Creating a formatted table
student_data = "Student Information:\n\nName\tAge\tGrade\nAli\t20\tA\nSarah\t19\tB+"
print(student_data)
```

**Output:**
```
Student Information:

Name	Age	Grade
Ali	20	A
Sarah	19	B+
```

### Escape Characters Exercise <Badge type="warning" text="Task" />

Open the file `exercise3.py` inside the `/labs/lab06/exercise3/` folder (it has already been created for you). Write a program that prints this receipt as a single string, using `\n` for every line break and `\t` for every column, with no `print()` called more than once:

```
========== RECEIPT ==========
Item		Price	Qty	Total
Coffee		$3.50	2	$7.00
Muffin		$2.10	3	$6.30
Water		$1.05	4	$4.20
------------------------------
Subtotal			$17.50
Tax (6%)			$1.05
Total			$18.55
============================
```

Store each item's name, unit price, and quantity in variables, and calculate every `Total`, the subtotal, the tax, and the final total in your code. Do not type the money amounts in directly, they must be computed. Every amount shown must display with exactly two decimal places. Run it with `python exercise3.py` and check the columns line up in a real console.

## Comments

There are multiple ways of doing comments in Python: single-line comments and multi-line comments. Comments are essential for writing clean, understandable code.

### Why Use Comments?

Comments serve several important purposes:
- **Explain what your code does** - Help others (and future you) understand the logic
- **Document complex algorithms** - Break down complicated processes step by step  
- **Provide context** - Explain why you chose a particular approach
- **Disable code temporarily** - Comment out code for testing without deleting it
- **Add reminders** - Note areas that need improvement or bug fixes

### Single-Line Comments

Single-line comments in Python start with `#`. Everything after `#` on that line is ignored by Python:

```python
# This is a comment - it won't run
print("Hello World")  # This comment explains what the print does

# You can use comments to explain variables
student_name = "Ali"  # Store the student's name
age = 20             # Student's age in years

# Comments can temporarily disable code
# print("This line won't execute")
print("This line will execute")
```

**Output:**
```
Hello World
This line will execute
```

### Multi-Line Comments

Python doesn't have a specific multi-line comment syntax like some languages, but there are two common approaches:

#### Method 1: Multiple `#` Lines

```python
# This is a multi-line comment
# that spans several lines.
# Each line needs its own # symbol.
# This is the most common way.

print("Code after comments")
```

#### Method 2: Triple Quotes (Docstrings)

Remember the triple quotes we learned in the [Triple Quotes](#triple-quotes) section? They can also be used for multi-line comments:

```python
"""
This is a multi-line comment using triple quotes.
You can write multiple lines without using # on each line.
This is technically a string, but if it's not assigned to a variable,
Python ignores it, making it act like a comment.
"""

print("Code after triple quote comment")

'''
You can also use triple single quotes
for multi-line comments.
Both work the same way.
'''
```

**Output:**
```
Code after comments
Code after triple quote comment
```


### Best Practices for Comments

1. **Write clear, concise comments** - Explain the "why", not just the "what"
2. **Keep comments up to date** - Update comments when you change code
3. **Don't over-comment** - Don't explain obvious things
4. **Use proper grammar and spelling** - Comments are read by humans

## Putting It Together

The remaining exercises combine what you learned in Lab 05 (variables, casting, `input()`, `len()`, `.upper()`, `.lower()`, `import`, f-strings) with the new ideas from this lab (snake_case, floating point, escape characters). Each one has a test that runs your program automatically, so your program must read its inputs and print its output in the **exact order** given.

::: warning REMINDER
The auto-checker feeds the inputs in the order listed and compares your output line by line against the expected result. Do not add prompt text to your `input()` calls, and do not print anything extra. Any extra words, labels, or a different order will fail the test even when your logic is correct.
:::

### Exercise 4: ID Card Formatter <Badge type="warning" text="Task" />

Open `exercise4.py` inside `/labs/lab06/exercise4/`. Read a full name and a matric number, then print an ID card.

For a full name `Ali bin Ahmad` and matric number `M12345`, your output should look exactly like this:

```
+---------------------------+
| ID CARD
+---------------------------+
| Name:	ALI BIN AHMAD
| Quiet:	ali bin ahmad
| Length:	13
| Matric:	M12345
| Type:	<class 'str'>
+---------------------------+
```

Inputs (in order):

- `full_name` – the person's full name

- `matric_number` – the matric number

Outputs (in order):

- the ID card exactly as shown above

### Exercise 5: Receipt from User Input <Badge type="warning" text="Task" />

Open `exercise5.py` inside `/labs/lab06/exercise5/`. Read an item name, its unit price, and a quantity, then print a receipt.

For an item name `Kopi`, unit price `3.5`, and quantity `2`, your output should look exactly like this:

```
======== RECEIPT ========
ITEM		QTY	TOTAL
kopi		2	7.0
-------------------------
Tax (6%):	0.42
Total:		7.42
=========================
Name length:	4
Price type:	<class 'float'>
```

Inputs (in order):

- `item_name` – the name of the item

- `unit_price` – the price of one item

- `quantity` – how many were bought

Outputs (in order):

- the receipt exactly as shown above

## Commit and Push Your Work

After completing all the exercises, save all your files and commit them to your repository. Make sure your files are properly saved in the `/labs/lab06/` directory, including `exercise.py` and `exercise1.py` through `exercise5.py` in their exercise folders.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 6: Environment, Testing and More Basic Python", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully and that any automated tests pass.

::: warning REMINDER
Do not commit your `cp115_env` folder. If you set up `.gitignore` correctly earlier in this lab, **Git** will ignore it automatically. Double check the **Source Control** panel does not list `cp115_env` before you commit.
:::
