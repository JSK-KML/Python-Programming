---
title: Chapter 3 - Tutorial 5
outline: deep
---

# Chapter 3 - Tutorial 5



## Pseudocode Indentation Rules <Badge type="warning" text="Recall" />

### IF Statement Indentation Rules

**Rule 1: ALL statements inside an IF block MUST be indented**

**CORRECT - Statements inside IF are indented:**

```
BEGIN
    READ age
    IF age >= 18 THEN
        PRINT "You are eligible to vote"
        PRINT "Please bring your ID"
        PRINT "Voting booth is open"
    ENDIF
    PRINT "Thank you"
END
```

**WRONG - No indentation inside IF:**

```
BEGIN
    READ age
    IF age >= 18 THEN
    PRINT "You are eligible to vote"
    PRINT "Please bring your ID"
    PRINT "Voting booth is open"
    ENDIF
    PRINT "Thank you"
END
```

**Rule 2: IF-ELSE statements require proper indentation for BOTH parts**

**CORRECT - Both IF and ELSE parts indented:**

```
BEGIN
    READ score
    IF score >= 80 THEN
        PRINT "Excellent! You passed with distinction"
        grade = "A"
    ELSE
        PRINT "You need to improve"
        grade = "F"
    ENDIF
    PRINT "Your grade is: " + grade
END
```

**WRONG - Inconsistent indentation:**

```
BEGIN
    READ score
    IF score >= 80 THEN
        PRINT "Excellent! You passed with distinction"
    grade = "A"
    ELSE
        PRINT "You need to improve"
        grade = "F"
    ENDIF
    PRINT "Your grade is: " + grade
END
```

### WHILE Loop Indentation Rules

**Rule 3: ALL statements inside a WHILE loop MUST be indented**

**CORRECT - Loop body properly indented:**

```
BEGIN
    counter = 1
    WHILE counter <= 5 DO
        PRINT "Count: " + counter
        counter = counter + 1
        PRINT "Next iteration coming..."
    ENDWHILE
    PRINT "Loop finished"
END
```

**WRONG - Loop body not indented:**

```
BEGIN
    counter = 1
    WHILE counter <= 5 DO
    PRINT "Count: " + counter
    counter = counter + 1
    PRINT "Next iteration coming..."
    ENDWHILE
    PRINT "Loop finished"
END
```

### Nested Structures - Double Indentation

**Rule 4: Nested IF inside WHILE requires DOUBLE indentation**

**CORRECT - Nested IF properly indented:**

```
BEGIN
    num = 1
    WHILE num <= 10 DO
        IF num % 2 = 0 THEN
            PRINT num + " is even"
        ELSE
            PRINT num + " is odd"
        ENDIF
        num = num + 1
    ENDWHILE
END

Level 0: BEGIN/END (no indentation)
Level 1: WHILE body (4 spaces)
Level 2: IF/ELSE body (8 spaces)
```

### Visual Indentation Guide

```
BEGIN                          ← Level 0 (No indentation)
    READ value                 ← Level 1 (Inside BEGIN block)
    WHILE value > 0 DO         ← Level 1 (Same level as READ)
        PRINT "Processing..."  ← Level 2 (Inside WHILE)
        IF value > 100 THEN    ← Level 2 (Same level as PRINT)
            PRINT "Large"      ← Level 3 (Inside IF)
        ELSE                   ← Level 2 (Same level as IF)
            PRINT "Small"      ← Level 3 (Inside ELSE)
        ENDIF                  ← Level 2 (Closes IF)
        value = value - 1      ← Level 2 (Inside WHILE)
    ENDWHILE                   ← Level 1 (Closes WHILE)
    PRINT "Done"               ← Level 1 (After WHILE)
END                            ← Level 0 (Closes BEGIN)
```


## Exercise 1 <Badge type="warning" text="Task" />

Convert the below pseudocode into a flowchart and IPO table.

```
Start
       read usage
       if usage <= 1000
            charge = usage x 0.20
       else 
            charge = (1000 x 0.20 ) +   
            ((usage - 1000) x 0.10)
       end if 
      print charge
Stop
```

## Exercise 2 <Badge type="warning" text="Task" />

Convert the below IPO table into a flowchart and pseudocode.


| **INPUT** | **PROCESS** | **OUTPUT** |
|-----------|-------------|------------|
| number for 5 times | repeat determine largest based on number for 5 times | largest |


## Exercise 3 <Badge type="warning" text="Task" />

Convert the below flowchart into an IPO table and pseudocode.


<p align="center">
    <img src="/public/tutorials/c3t5-1.png" alt="drawing" width="300"/>
</p>


## Exercise 4 <Badge type="warning" text="Task" />

Convert the following pseudocode into a flowchart and IPO

```
Start
    read temperature
    count = 0
    while temperature != -999
        if temperature > 30
            print "Hot day"
            count = count + 1
        else
            if temperature < 10
                print "Cold day"
            else
                print "Pleasant day"
            end if
        end if
        read temperature
    end while
    print "Number of hot days: " + count
Stop
```



## Exercise 5 <Badge type="warning" text="Task" />

Given the following pseudocode, create an IPO table and flowchart.

```
BEGIN
      total = 0
      read score
      while score != 0
          if score >= 80
              print "Pass"
          else
              print "Fail"
          endif
          total = total + score
          read score
      endwhile
      print "Total: " + total
END
```
