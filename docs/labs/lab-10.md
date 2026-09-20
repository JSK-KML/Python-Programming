---
outline: deep
title: Lab 10 - Counter-Controlled Loops
---

# Lab 10: Counter-Controlled Loops

## Pull and Update in VS Code

Before starting any lab, you need to make sure that the repo in your **GitHub** is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

## Counter-Controlled Loops

A **counter-controlled loop** repeats a known number of times. **Python** gives you two ways: a `for` loop with `range()`, or a `while` loop where you manage the counter yourself.

Launch **VS Code** and open the `exercise.py` file in `/labs/lab10/`.

## For Loop with Range

A `for` loop walks through the numbers that `range()` produces. The key thing to learn here is the three forms of `range()`, controlled by **start**, **stop**, and **step**.

In every form, `range` **includes the start** but **stops before the stop value**.

### range(stop)

One number: count from `0` up to (but not including) `stop`.

```python
for count in range(4):
    print(count)
```

**Output:** `0 1 2 3` (four numbers, stops before 4).

### range(start, stop)

Two numbers: count from `start` up to (but not including) `stop`.

```python
for number in range(10, 15):
    print(number)
```

**Output:** `10 11 12 13 14` (starts at 10, stops before 15).

### range(start, stop, step)

Three numbers: count from `start` to `stop`, jumping by `step` each time instead of 1.

```python
for value in range(0, 25, 5):
    print(value)
```

**Output:** `0 5 10 15 20` (steps of 5, stops before 25).

::: tip
- `range(stop)` : start at 0, step of 1.
- `range(start, stop)` : your own start, step of 1.
- `range(start, stop, step)` : your own start and step.
:::

### Using the Counter

The loop variable is a real value you can use in calculations, not just a count. For example, this builds a multiplication table:

```python
for multiplier in range(1, 11):
    print(f"7 x {multiplier} = {7 * multiplier}")
```

The count can also come from user input. Once the user gives the number, you still know how many times the loop runs:

```python
team_size = int(input("How many members? "))
for member in range(1, team_size + 1):
    name = input(f"Enter name for member {member}: ")
    print(f"Member {member}: {name}")
```

Here `range(1, team_size + 1)` numbers the members from 1, and the `+ 1` is needed because `range` stops before the end value.

## While Loop with Counter

A `for` loop counts for you automatically. A `while` loop does the same job, but **you manage the counter yourself** in three steps:

- **Initialize** : set the counter to its starting value (before the loop).
- **Condition** : check whether the loop should keep going (in the `while`).
- **Update** : change the counter each pass (inside the loop).

```python
attempt = 1                 # initialize
while attempt <= 3:         # condition
    print(attempt)
    attempt += 1            # update
```

**Output:** `1 2 3`.

::: warning
The **update** is what ends the loop. If you forget to change the counter, the condition stays true forever and the loop never stops (an infinite loop).
:::

Because you control the counter yourself, a `while` loop can change how it counts based on what happens inside it, which a `for` loop cannot:

```python
week = 1
while week <= 4:
    points = int(input(f"Week {week} points: "))
    if points >= 100:
        week += 2   # skip ahead a week
    else:
        week += 1
```

Here a strong week jumps the counter forward by 2 instead of 1.

## Exercise 1: Score Accumulator <Badge type="warning" text="Task" />

A game adds up a player's score over several rounds. The number of rounds is given first. Using a `for` loop, ask for each round's score and add it to a running total. If a round's score is above 100, that round earns a 20% bonus, so add the score plus the bonus for that round.

At the end, print the final total score (to one decimal place) and the number of rounds played.

**Example:** with 2 rounds, a score of `80` adds 80 (no bonus), and a score of `120` adds `120 + 24 = 144`, giving a final total of `224`.

Create `/labs/lab10/exercise1/exercise1.py`:

```python
num_rounds = int(input())

# TODO: Your code here
# Use input() inside the loop to get each round's score

print(f"{final_score:.1f}")
print(rounds_processed)
```

## Exercise 2: Temperature Monitor <Badge type="warning" text="Task" />

A weather station records temperatures over several days. The number of days and a danger threshold are given first. Using a `for` loop, ask for each day's temperature. Count how many days are **above** the threshold (danger days), and keep a running total so you can work out the average temperature across all the days.

At the end, print the number of danger days and the average temperature (to one decimal place).

**Example:** with a threshold of `35` and 4 days of `32, 37, 34, 39`, two days (37 and 39) are above the threshold, so danger days is `2` and the average is `35.5`.

Create `/labs/lab10/exercise2/exercise2.py`:

```python
num_days = int(input())
danger_threshold = float(input())

# TODO: Your code here
# Use input() inside the loop to get each day's temperature

print(danger_days)
print(f"{average_temp:.1f}")
```

## Exercise 3: Point Accumulator <Badge type="warning" text="Task" />

A player collects points to reach a target. The target is given first. Starting from a total of 0, use a `while` loop that keeps asking for points and adding them to the total, and count how many times you asked. The loop stops once the total reaches or passes the target.

At the end, print the final total and the number of rounds played (how many times you asked for points).

**Example:** with a target of `100`, entering `30`, then `45`, then `35` gives totals of 30, 75, then 110. Since 110 reaches the target, the loop stops: the final total is `110` and rounds played is `3`.

Create `/labs/lab10/exercise3/exercise3.py`:

```python
target_points = int(input())

# TODO: Your code here
# Use input() inside the while loop to get points each round

print(total_points)
print(rounds_played)
```

## Commit and Push Your Work

After completing all exercises, save all your files and commit them to your repository. Make sure your files are properly saved in the `/labs/lab10/` directory, including `exercise.py`, `exercise1.py`, `exercise2.py`, and `exercise3.py`.

Use **VS Code**'s source control panel to stage your changes, add a meaningful commit message like "Complete Lab 11: Counter-Controlled Loops with Exercises", and push your changes to **GitHub**. Check your repository online to ensure all files have been uploaded successfully.
