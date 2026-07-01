---
title: Chapter 3 - Tutorial 3
outline: deep
---

# Chapter 3 - Tutorial 3

## Creating The IPO Table <Badge type="warning" text="Recall" />

| Phase      | Practical Meaning | Typical Keywords (in the problem text) |
|------------|------------------|-----------------------------------------|
| **Input**  | Data accepted from the user  always *nouns*, never actions. **NEVER USE VERB.** <br><br>Suggested structure: <br><br> **Counter-controlled** : input_name for x times <br> **Sentinel** : input_name for x times until condition is true| enter, read, get |
| **Process**| Operations applied to the inputs  arithmetic, decisions, loops. Each item should begin with a **verb**.<br><br> The suggested structure for **repetition** question is: <br><br> Counter-controlled : repeat VERB + OUTPUT + BASED ON INPUT AND CONSTANT for x times <br><br> Sentinel : repeat VERB + OUTPUT + BASED ON INPUT AND CONSTANT for x times until condition is true | calculate, compute, determine, if, while, repeat |
| **Output** | The result delivered to the user or another system  again *nouns* or messages. **NEVER USE VERB.** <br><br>Suggested structure: <br><br> input_name for x times (if necessary) <br><br> or <br><br> input_name for x times until condition is true (if necessary) | display, print, show |



## Creating The Flowchart <Badge type="warning" text="Recall" />

| Shape      | Usage                | Tips                                                                       |
|------------|----------------------|----------------------------------------------------------------------------|
| Oval       | Start/End            | All shapes are required to be connected with arrows; be aware of the direction |
| Rectangle  | Process              | All processes are assignment operations (=)                               |
| Diamond    | Decision/Selection   | All decisions must be evaluated to `True` or `False`                     |
| Parallelogram | Input/Output     | Place Input shapes at the beginning, Output shapes at the end            |

---

## Real Life Algorithm

### Exercise 1 - Run-Length Encoding <Badge type="warning" text="Question" />

Run-Length Encoding compresses text by replacing each run of repeated characters with the character followed by its count. For example, "aaabbc" becomes "a3b2c1" (3 a's, 2 b's, 1 c).

**Problem:** Read characters one by one and output each character followed by how many times it appeared in a row.

- **Input:** Characters entered one by one, ending when `#` is entered

- **Output:** Compressed string representation

**Example:** Input: a, a, a, b, b, c → Output: a3b2c1

### Exercise 2 - Checksum Validation <Badge type="warning" text="Question" />

A checksum detects errors by checking whether a sum of digits follows an expected rule. Credit card numbers, ISBN codes, and barcodes all use this idea.

**Problem:** Add up all the digits entered and check whether the total is divisible by 10.

**Input:** Digits entered one by one, until a negative number is entered

**Output:** "Valid" if the sum is divisible by 10, "Invalid" otherwise

**Example:** For digits 1, 2, 3, 4: sum = 10, and 10 % 10 = 0, so output "Valid"


### Exercise 3 - Caesar Cipher <Badge type="warning" text="Question" />

A Caesar Cipher encrypts text by shifting each letter forward by a fixed number of positions, wrapping around at the end. For example, with a shift of 1: a→b, b→c, and d wraps back to a.

**Problem:** Shift each letter (a-d only) forward by the given shift amount, wrapping around within the a-d range.

**Input:** Shift amount, then characters (a-d only) entered one by one, until `#` is entered

**Output:** Encrypted message

**Example:** With shift = 1, input: a, b, c, d → Output: bcda

### Exercise 4 - Simple Hash Function <Badge type="warning" text="Question" />

A hash function turns input data into a single number, its "fingerprint". Here we use a simple letter-to-number mapping: a=1, b=2, c=3, d=4.

**Problem:** Convert each character (a-d only) to its number value, multiply it by its position (1st, 2nd, 3rd...), and add up the results.

**Input:** Characters (a-d only) entered one by one, until `#` is entered

**Output:** Final hash value

**Example:** For input "ab": (1 × 1) + (2 × 2) = 1 + 4 = 5

