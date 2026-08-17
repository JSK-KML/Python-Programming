---
outline: deep
title: Lab 7 - Python Development Environment and Testing
---

# Lab 07: Python Development Environment and Testing

## Pull and Update in VS Code

This lab will guide you through setting up a professional **Python** development environment using virtual environments, testing with **pytest**, and automating tests with **GitHub Actions**. These are essential skills for writing maintainable and reliable **Python** code.

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Python Virtual Environments

### Understanding Virtual Environments

A virtual environment in **Python** is like having a separate, isolated workspace for each of your projects. Think of it as having different toolboxes for different jobs.

When you install **Python** packages globally on your computer, they can sometimes conflict with each other. Different projects might need different versions of the same package, or installing a new package might break something in an existing project.

Virtual environments solve this problem by creating isolated **Python** environments where each project can have its own set of packages and dependencies, without affecting other projects or your system **Python** installation.

### Creating Your First Virtual Environment

Launch **VS Code** and open your `CP115-Class-Repo` project. Open the terminal in **VS Code** by clicking `Terminal` and then `New Terminal`.

<p align="center">
    <img src="/public/labs/lab-01/lab-1-8.png" alt="drawing" width="400"/>
</p>

Make sure your terminal is in the root directory of your `CP115-Class-Repo` folder before running any command. Look at the terminal prompt — the path should end with `CP115-Class-Repo`.

If you are using **PowerShell**:

```powershell
PS C:\Users\YourName\CP115-Class-Repo>
                       ^^^^^^^^^^^^^^^^  <- make sure this is the end
```

If you are using **Git Bash**:

```bash
YourName@PC MINGW64 ~/CP115-Class-Repo
                      ^^^^^^^^^^^^^^^^  <- make sure this is the end
$
```

You should also see folders like `labs` in this directory. If you are not in the correct folder, use `cd` to navigate into `CP115-Class-Repo` first.

Now create a virtual environment using **Python**'s built-in `venv` module. Type the following command:

```bash
python -m venv cp115_env
```

This creates a new directory called `cp115_env` that contains your isolated **Python** environment. The `python -m venv` command tells **Python** to run the venv module and create a new virtual environment in the specified directory.

You should see a new folder called `cp115_env` appear in your repository root directory. This folder contains a complete **Python** installation that's separate from your system **Python**.

### Activating the Virtual Environment

Creating the virtual environment is just the first step. To actually use it, you need to activate it. The command depends on which terminal you are using.

If you are using **PowerShell** (the default terminal in **VS Code** on Windows), run:

```powershell
cp115_env\Scripts\activate
```

If you are using **Git Bash**, run this instead:

```bash
source cp115_env/Scripts/activate
```

After activation, you should see `(cp115_env)` appear at the beginning of your terminal prompt. This indicates that your virtual environment is active and any **Python** commands you run will use this isolated environment.

<p align="center">
    <img src="/public/labs/lab-07/lab-7-1.png" alt="drawing" width="300"/>
</p>

### Testing Your Virtual Environment

Let's verify that your virtual environment is working correctly. With the virtual environment activated, type:

```bash
python --version
```

This should show your **Python** version. 

### Creating a Simple Python Program

Create a new file called `test_virtual_env.py` in the `/labs/lab07/` directory. Copy and paste this code.

```python

student_name = "Your Name"
student_id = "Your ID"
course_code = "CP115"

print(student_name)
print(student_id)
print(course_code)

```

Run this program to make sure it works.

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

Open **VS Code** and go to the Extensions panel by clicking the Extensions icon in the sidebar 

Search for "Python Test Explorer" and install the extension by **Little Fox Team**. This extension provides a graphical interface for running and managing **Python** tests.

<p align="center">
    <img src="/public/labs/lab-07/lab-7-2.png" alt="drawing" width="500"/>
</p>

Also make sure you have the **Python** extension by **Microsoft** installed from [Lab 1](./lab-01.md)

### Installing pytest

**pytest** is the most popular testing framework for **Python**. It makes writing and running tests simple and intuitive. First, make sure your virtual environment is activated. In **PowerShell**:

```powershell
cp115_env\Scripts\activate
```

Or, in **Git Bash**:

```bash
source cp115_env/Scripts/activate
```

You should see `(cp115_env)` in your terminal prompt. Now install **pytest**:

```bash
python -m pip install pytest
```

This installs **pytest** only in your virtual environment, not globally on your system. This is exactly what we want - each project can have its own version of **pytest**.


### Set Up Python Test Extension

On the sidebar, click the **Flask** symbol and then click **Configure Python Test**

<p align="center">
    <img src="/public/labs/lab-07/lab-7-3.png" alt="drawing" width="300"/>
</p>

On the top bar, choose **Pytest**

<p align="center">
    <img src="/public/labs/lab-07/lab-7-4.png" alt="drawing" width="300"/>
</p>

Next, choose **Root Directory**

<p align="center">
    <img src="/public/labs/lab-07/lab-7-5.png" alt="drawing" width="300"/>
</p>

### Running Tests in VS Code

Once configured, you should see a new **Testing** panel in **VS Code**'s sidebar. Click on the Testing icon (it looks like a flask) to open the test explorer.


In the Testing panel, you should see your test file and the individual test functions. You can:

- **Run all tests** by clicking the play button at the top
- **Run individual tests** by clicking the play button next to each test
- **View test results** with green checkmarks for passing tests and red X's for failing tests.



## Configuring .gitignore for Python Virtual Environments

### Understanding .gitignore

A `.gitignore` file tells **Git** which files and folders to ignore when tracking changes in your repository. This is essential because some files should never be committed to version control, such as:

- **Virtual environments** (they're large and machine-specific)
- **Temporary files** created by your operating system
- **IDE configuration files** that are personal preferences
- **Cache files** generated by Python

Think of `.gitignore` as a list of "don't track these files" instructions for **Git**.

### Why Ignore Virtual Environments?

Virtual environments like `cp115_env` should **never** be committed to your repository because:

1. **Size**: They contain thousands of files and can be hundreds of megabytes
2. **Machine-specific**: They contain absolute paths specific to your computer
3. **Platform differences**: Virtual environments differ between Windows, Mac, and Linux

### Looking at Your .gitignore

Open the `.gitignore` file in the root of your repository. It has already been set up for you, and looks something like this:

```gitignore
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]

# Virtual environments
venv/
env/
cp115_env/

# Unit test / coverage reports
.pytest_cache/

# etc.
```

Notice that `cp115_env/` is already listed under **Virtual environments**, so your virtual environment is ignored automatically. You can also see rules for cache files (`__pycache__/`, `.pytest_cache/`) and more.

### Ignore Your Own File Exercise <Badge type="warning" text="Task" />

Now try it yourself with a brand new file. Inside `/labs/lab07/`, create a new file and name it `test.txt`. Type anything you like inside it, and imagine this file contains private notes that should **never** be uploaded to **GitHub**.

Follow these steps:

1. Open the **Source Control** panel. You should see `test.txt` listed as a change waiting to be committed, which means **Git** is currently tracking it.
2. Open the `.gitignore` file in the root of your repository and add a line to ignore it:

   ```gitignore
   # My private notes
   labs/lab07/test.txt
   ```

3. Save the `.gitignore` file and look at the **Source Control** panel again. `test.txt` should now **disappear** from the list, because **Git** is no longer tracking it.
4. Stage your changes, write a commit message, and **commit and push** to **GitHub**.
5. Open your repository on **GitHub** in the browser and navigate to `labs/lab07/`. Confirm that `test.txt` is **not** there, even though it still exists on your own computer.

::: tip
This proves the whole point of `.gitignore`: a file can live in your project folder and still be completely invisible to **Git**. The file stays on your machine, but it never gets uploaded.
:::

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

## Indentation

In pseudocode, you have been using indentation routinely when you are doing `if` and `while` statements. In Python, indentations are used exactly the same. Of course there are more indentation usage that extends further that `if` and `while` statements but that is just a reminder for the future.

In `exercise.py`, inside your `/labs/lab07` folder, try copy and paste the code below in **VS Code**. What do you see?

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

Now lets try to run it. This time, instead of clicking the ▶ button, run it from the terminal so you can read the error message in full. Make sure you are inside `/labs/lab07`, then type:

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

**VS Code** helps you by automatically adding 4 spaces when you press <kbd>Tab</kbd>.

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

Bottom line is, dont use indentation if the code is on the same level and for indentation, just use <kbd>Tab</kbd> button.

## Floating Point Numbers

Before we go further, there is one thing about numbers with a decimal point (called `float` values) that surprises almost every beginner. Copy this into your `exercise.py` and run it with `python exercise.py`:

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

Since the computer only has room for a fixed number of digits, it has to chop this off somewhere and store the *closest value it can fit*. That stored value is very slightly larger than a true `0.1`. So when you ask for `0.1 + 0.2`, the computer is really adding two numbers that are each already a tiny bit wrong, and the small errors combine into the `0.30000000000000004` you see on screen.

The exact rules for how a computer stores these numbers are defined by an international standard called **IEEE 754**. Almost every programming language and processor follows it, which is why you get the *exact same* `0.30000000000000004` in Python, Java, JavaScript, C, and nearly everywhere else. You can read more on the [IEEE 754 Wikipedia page](https://en.wikipedia.org/wiki/IEEE_754) if you are curious.

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

## Python Operators

**Python** provides various operators to perform operations on data. These operators are essential building blocks for creating calculations and logic in your programs.

Launch **VS Code** and open the `exercise.py` file in `/labs/lab07/`. Let's explore different types of operators:

### Arithmetic Operators

Arithmetic operators perform mathematical calculations:

| Operator | Description | Example | Result |
|----------|-------------|---------|---------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `10 - 4` | `6` |
| `*` | Multiplication | `6 * 7` | `42` |
| `/` | Division (float) | `15 / 4` | `3.75` |
| `//` | Floor Division | `15 // 4` | `3` |
| `%` | Modulus (remainder) | `15 % 4` | `3` |
| `**` | Exponentiation | `2 ** 3` | `8` |

In your `exercise.py` file, let's test each operator. Start by testing addition and subtraction:

```python
# Test addition and subtraction
result1 = 25 + 15
result2 = 100 - 25
print(f"25 + 15 = {result1}")
print(f"100 - 25 = {result2}")
```

Run this code and see what you get. Are the results what you expected?

Now add multiplication and division:

```python
# Test multiplication and division
result3 = 8 * 7
result4 = 20 / 4
print(f"8 * 7 = {result3}")
print(f"20 / 4 = {result4}")
```

Can you see the difference in the output? Notice how division gives you `5.0` instead of just `5`. Why do you think that happens?

Finally, test floor division, modulus, and exponentiation:

```python
# Test floor division, modulus, and powers
result5 = 17 // 5
result6 = 17 % 5
result7 = 3 ** 4
print(f"17 // 5 = {result5}")
print(f"17 % 5 = {result6}")
print(f"3 ** 4 = {result7}")
```

Run this and observe the results. Can you figure out what `17 // 5` and `17 % 5` are doing? Think about dividing 17 by 5 - what's the whole number part and what's the remainder?

### Type Casting in Operations

When performing operations, **Python** automatically determines the result's data type. Different operators can produce different types of results:

| Operation | Result Type | Example |
|-----------|-------------|---------|
| `int + int` | `int` | `5 + 3 = 8` (int) |
| `int + float` | `float` | `5 + 3.0 = 8.0` (float) |
| `int / int` | `float` | `10 / 2 = 5.0` (float) |
| `int // int` | `int` | `10 // 3 = 3` (int) |
| `int ** int` | `int` | `2 ** 3 = 8` (int) |
| `int % int` | `int` | `17 % 5 = 2` (int) |

Let's test type casting in operations in your `exercise.py`. Test how different operations affect data types:

```python
# Test division - always returns float
division = 10 / 2
print(f"10 / 2 = {division} (type: {type(division)})")

# Test floor division - returns int when both operands are int
floor_div = 10 // 3
print(f"10 // 3 = {floor_div} (type: {type(floor_div)})")

# Test modulus - returns int when both operands are int
modulus = 17 % 5
print(f"17 % 5 = {modulus} (type: {type(modulus)})")

# Test exponentiation - returns int when both operands are int
power = 2 ** 3
print(f"2 ** 3 = {power} (type: {type(power)})")
```

Run this code and look at the output. Can you see how division always gives you a float, but floor division, modulus, and exponentiation keep the int type when both numbers are integers?

Now test what happens when you mix int and float in operations:

```python
# Test mixing int and float in different operations
mixed_division = 15.0 / 4        # float / int = float
mixed_floor = 15.0 // 4          # float // int = float
mixed_modulus = 17.0 % 5         # float % int = float
mixed_power = 2.0 ** 3           # float ** int = float

print(f"15.0 / 4 = {mixed_division} (type: {type(mixed_division)})")
print(f"15.0 // 4 = {mixed_floor} (type: {type(mixed_floor)})")
print(f"17.0 % 5 = {mixed_modulus} (type: {type(mixed_modulus)})")
print(f"2.0 ** 3 = {mixed_power} (type: {type(mixed_power)})")
```

What do you notice? When you mix int and float, **Python** converts the result to float because it's the more precise type.

### BODMAS Order of Operations

**Python** follows the BODMAS rule for order of operations: **B**rackets, **O**rders (powers), **D**ivision, **M**ultiplication, **A**ddition, **S**ubtraction.

| Order | Operation | Symbol |
|-------|-----------|--------|
| 1 | Brackets | `()` |
| 2 | Orders (Powers) | `**` |
| 3 | Multiplication and Division (left to right) | `*`, `/`, `//` |
| 4 | Addition and Subtraction (left to right) | `+`, `-` |

Let's test BODMAS in your `exercise.py`. First, compare expressions with and without brackets:

```python
# Compare without and with brackets
result1 = 10 + 3 * 2     
result2 = (10 + 3) * 2    
print(f"10 + 3 * 2 = {result1}")
print(f"(10 + 3) * 2 = {result2}")
```

Run this code first. Can you see how the brackets completely changed the result? Which operation happened first in each case?

Now test a more complex expression step by step:

```python
# Complex BODMAS example
expression = 3 + 2 ** 2 * 4 - 6 / 2
print(f"3 + 2 ** 2 * 4 - 6 / 2 = {expression}")

# Let's break it down step by step
step1 = 2 ** 2    
step2 = step1 * 4  
step3 = 6 / 2     
final = 3 + step2 - step3 
print(f"Step 1 (Powers): 2 ** 2 = {step1}")
print(f"Step 2 (Multiply): {step1} * 4 = {step2}")
print(f"Step 3 (Division): 6 / 2 = {step3}")
print(f"Final: 3 + {step2} - {step3} = {final}")
```

Look closely at this output. Can you follow each step? Notice how **Python** did the power operation first, then multiplication and division, and finally addition and subtraction.

Test how brackets can change the result completely:

```python
# Same numbers, different brackets = different results
without_brackets = 5 + 3 * 2 ** 2
with_brackets = (5 + 3) * 2 ** 2
different_brackets = 5 + (3 * 2) ** 2
print(f"5 + 3 * 2 ** 2 = {without_brackets}")
print(f"(5 + 3) * 2 ** 2 = {with_brackets}")
print(f"5 + (3 * 2) ** 2 = {different_brackets}")
```

Run this and compare all three results. Can you see how the same numbers give completely different answers just by changing where you put the brackets? This shows why understanding BODMAS is so important.



## Assignment Operators

Assignment operators combine assignment with arithmetic operations. Instead of writing `x = x + 5`, you can write `x += 5`.

Most of these assignment operators are **syntactic sugar** - they make your code shorter and easier to read, but they don't add any new functionality. Syntactic sugar is just a more convenient way to write something that you could already do with existing syntax.

::: tip
**Syntactic Sugar** is a term in programming that refers to syntax that makes code easier to read or write, but doesn't add any new functionality to the language. It's called "sugar" because it makes the code "sweeter" (more pleasant) to work with, but the underlying functionality remains the same.
:::

| Operator | Description | Example | Equivalent |
|----------|-------------|---------|------------|
| `+=` | Addition assignment | `x += 5` | `x = x + 5` |
| `-=` | Subtraction assignment | `x -= 3` | `x = x - 3` |
| `*=` | Multiplication assignment | `x *= 2` | `x = x * 2` |
| `/=` | Division assignment (float) | `x /= 4` | `x = x / 4` |
| `//=` | Floor division assignment | `x //= 3` | `x = x // 3` |
| `%=` | Modulus assignment | `x %= 7` | `x = x % 7` |
| `**=` | Exponentiation assignment | `x **= 2` | `x = x ** 2` |

Let's test assignment operators in your `exercise.py`. Start with a score and update it using different assignment operators:

```python
# Test assignment operators
score = 100
print(f"Starting score: {score}")

score += 10     # Add 10
print(f"After += 10: {score}")

score -= 5      # Subtract 5
print(f"After -= 5: {score}")

score *= 2      # Multiply by 2
print(f"After *= 2: {score}")

score //= 3     # Floor division by 3
print(f"After //= 3: {score}")

score %= 15     # Modulus by 15
print(f"After %= 15: {score}")

score **= 2     # Square it
print(f"After **= 2: {score}")
```

Run this code and see how the score changes with each assignment operator. Can you follow how the value changes at each step?

## More Import Techniques

### Review: Basic Imports from Lab 05

In Lab 05, you learned basic import statements:

```python
import math
import random

# Using the modules
result = math.sqrt(25)
number = random.randint(1, 10)
```

### Creating and Importing Your Own Code

Beyond the built-in modules like `math` and `random`, **Python** also lets you create your own **Python** files and import them the same way. This is very useful for organizing your code and reusing it across different programs.

## Commit and Push Your Work

After working through the sections above, save all your files and commit them to your repository. Make sure your files are properly saved in the `/labs/lab07/` directory.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 7: Development Environment, Operators and Imports", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
