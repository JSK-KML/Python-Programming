---
outline: deep
title: Lab 8 - Python Operators
---

# Lab 08: Python Operators

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

 <p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p> 

## Creating Your Playground File

The folders and files for each exercise in this lab have already been created for you when you pulled the update, so you do not need to make them yourself. Inside `/labs/lab08/` you will find each exercise folder waiting for your answers.

The only file you need to create is a scratch file to play around in while you follow the lab. Open a terminal, move into your `lab08` folder, and create it with [`touch`](./lab-03.md#working-with-the-command-line):

```bash
cd labs
```
```bash
cd lab08
```
```bash
touch exercise.py
```

`touch` creates an empty file. Run `ls` and you will see `exercise.py` alongside the exercise folders. Open it in **VS Code** and use it to try out every piece of code in this lab.

> **Tip (why):** Right clicking `New File` and typing `touch exercise.py` do exactly the same thing. Learning the command means you understand what the button does, and once it is muscle memory it is quicker than reaching for the mouse.

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

Open the file `exercise1.py` inside the `/labs/lab08/exercise1/` folder (it has already been created for you). Write a single program that produces the exact output below, choosing the right kind of quote for each line so that no quote character is ever lost or causes an error:

```
She said, "It's Ali's book, isn't it?"
The sign read: "No Parking" — don't ignore it.
Ali's note:
    "Meet me at 5."
    "Bring the "blue" folder."
```

Store each of the three blocks in its own variable, then print them. Run it from the terminal with `python exercise1.py` and check your output matches character for character, including the quote marks.

## Sequence Control Structures

**Python** makes sequential programming very straightforward. The **Python** interpreter reads and executes your code from top to bottom, one line at a time. This is called **sequential execution** - the most basic control structure in programming.

### How Python Interpreter Handles Sequences

The **Python** interpreter processes your code in a very predictable way:

1. **Line-by-line execution**: Each statement is executed in the exact order you write it
2. **Immediate evaluation**: When the interpreter encounters an expression, it evaluates it right away
3. **Variable updates**: Any changes to variables happen instantly and affect the next lines

Let's see how this works in your `exercise.py`:

```python
# Sequential execution example
print("Step 1: Starting program")
x = 10
print(f"Step 2: x is now {x}")
x = x * 2
print(f"Step 3: x is now {x}")
y = x + 5
print(f"Step 4: y is now {y}")
result = x + y
print(f"Step 5: Final result is {result}")
```

Run this code and observe how each line executes in perfect order. Can you see how each variable assignment immediately affects the next lines?

### Why Sequential Execution is Powerful

Sequential execution in **Python** gives you complete control over the order of operations:

```python
# Order matters in sequential programming
name = "Ali"
age = 20
student_id = "2024001"

# Build information step by step
full_info = f"Name: {name}"
full_info = full_info + f", Age: {age}"
full_info = full_info + f", ID: {student_id}"

print(full_info)
```

Notice how we build the `full_info` string step by step. Each line depends on the previous one. Try changing the order of these lines and see what happens.


### Proof of Sequential Execution

Here's proof that **Python** truly executes line by line. Let's create a program with an error at the bottom:

```python
# This code proves sequential execution
print("Line 1: This will run")
print("Line 2: This will also run") 
x = 10
print(f"Line 3: x = {x}")
y = x * 2
print(f"Line 4: y = {y}")
print("Line 5: All good so far")

# This line has an intentional error
print(unknown_variable)  # This will cause an error
```

Run this code in your `exercise.py`. What do you see? All the lines above the error execute perfectly, and you see their output. Only when **Python** reaches the error line does it stop.

This is different from languages like **Java** where a single error can prevent the entire program from running. **Python**'s interpreter executes each line as it encounters it, so you get the benefit of seeing results from the working parts of your code.

Try commenting out the error line (add `#` at the beginning) and run it again. Now everything works perfectly.

### Exercise 3: Student Grade System <Badge type="warning" text="Task" />

Create a folder called `exercise3` in `/labs/lab08/`. In this folder, create `student_grades.py`:

A student has taken 5 tests in a programming course. Their grades are 78, 85, 92, 67, and 88. The full mark is 100 for each test and a total of 500 for all test. Calculate the total points, average score, and what percentage each test contributes to the total score. Display the results showing each test score, total points, student average, and what percentage each test contributes to the total score. Use proper variable names and add comments explaining your calculations.

### Exercise 4: Fitness Membership Calculator <Badge type="warning" text="Task" />

Create a folder called `exercise4` in `/labs/lab08/`. Create `membership_calc.py`:

A fitness center offers monthly memberships. The base membership costs RM120 per month. Personal training sessions cost RM80 each, and a member wants to book 6 sessions. The gym also charges RM25 for a locker rental and RM15 for towel service. There's a one-time registration fee of RM50 for new members. Calculate the total first-month cost, the monthly cost after the first month (without registration), and the annual cost (12 months including the first month). Use proper styling including variable names and comments.

### Exercise 5: Salary Calculator <Badge type="warning" text="Task" />

Create a folder called `exercise5` in `/labs/lab08/`. Create two files:

**Part A**: `employee_data.py` - Create a module with these variables:
- `basic_salary` = RM4500
- `overtime_hours` = 12  
- `overtime_rate` = RM25 per hour

**Part B**: `salary_calc.py` - Import the employee_data module using `import employee_data`. Access the data using `employee_data.basic_salary`, `employee_data.overtime_hours`, and `employee_data.overtime_rate`. Calculate the total salary with these deductions: 11% for EPF, 0.5% for SOCSO, and 0.2% for EIS. Add fixed deductions of RM50 for medical insurance and RM30 for parking. Display a payslip showing gross salary (basic + overtime), each deduction amount, total deductions, and net salary. Use proper formatting and comments.

### Exercise 6: Physics Calculator <Badge type="warning" text="Task" />

Create a folder called `exercise6` in `/labs/lab08/`. Create two files:

**Part A**: `physics_constants.py` - Create a module containing:
- Standard gravity (9.81 m/s²)
- Ball mass (0.5 kg)  
- Building height (25 meters)
- Initial velocity (15 m/s)

**Part B**: `motion_calculator.py` - Import the constants module and calculate projectile motion:

A ball is thrown upward from a building at t = 2 seconds. Calculate the ball's position, velocity, and kinetic energy. The ball's motion follows these physics formulas:
- Position = initial_height + initial_velocity × time - 0.5 × gravity × time²
- Velocity = initial_velocity - gravity × time  
- Kinetic Energy = 0.5 × mass × velocity²

Display a formatted report showing:
1. Initial conditions (height, velocity, mass)
2. Time-based calculations (position, velocity at t=2s)
3. Energy analysis (kinetic energy at t=2s)
4. Motion status (moving up/down based on velocity sign)

Use proper variable naming with snake_case, add detailed comments for each calculation step, and format all outputs with appropriate units and decimal precision.

## Push and Check <Badge type="danger" text="Experimental" />

After you have finish answering all the questions, make sure to [commit and push](./lab-01.md#commit-and-push) your files back to your repo.

In the **GitHub** repo, make sure that the commit passed all the test. Recall back [here](./lab-02.md#using-flowgorithm-with-github-action) if you forgot how to check it.


