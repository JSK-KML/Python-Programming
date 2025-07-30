---
title: Chapter 3 - Tutorial 4
outline: deep
---

# Chapter 3 - Tutorial 4

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

### Exercise 1 - Run-Length Encoding <Badge type="tip" text="Question" />

Compression algorithms are fundamental to modern digital systems, reducing file sizes by 50-90% in applications such as ZIP archives, video streaming platforms, and messaging services. Without compression, multimedia content would require significantly more storage space and transmission time.

**What is Data Compression?**

Data compression reduces file sizes by identifying and eliminating redundancy. Consider storing repeated characters: instead of storing "aaabbc" as six separate characters, we can represent it more efficiently as "a3b2c1" - indicating 3 a's, 2 b's, and 1 c.

Run-Length Encoding operates on this principle by identifying sequences of repeated characters. The string "aaabbc" can be compressed to "a3b2c1", where each character is followed by its consecutive count.

**Compression Efficiency Note:** 

The simple example "aaabbc" (6 characters) produces "a3b2c1" (6 characters), showing no space savings. However, compression effectiveness increases with repetition. For instance, "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccc" (40 characters) compresses to "a20b10c8" (8 characters), achieving an 80% reduction.

Real compression algorithms are much more sophisticated and can compress almost any type of data efficiently.

**Problem:** 

Implement a run-length encoding algorithm that processes characters sequentially and counts consecutive identical characters.

- **Input:** Characters entered one by one and will end when # is entered

- **Output:** Compressed string representation

**Example:** 

Input characters: a, a, a, b, b, c → Output: a3b2c1

::: details Click for clue
Use a variable to keep track of the current character and another variable to count how many times it appears consecutively.
:::

<!---

### Exercise 2 - Caesar Cipher <Badge type="tip" text="Question" />

Secure communication protocols (HTTPS), messaging applications, and e-commerce platforms rely on encryption algorithms significantly more complex than basic ciphers. Modern cryptographic systems are designed to resist computational attacks even with substantial computing resources.

**What is Encryption?**

Encryption converts plaintext into ciphertext through systematic transformation algorithms. The Caesar Cipher exemplifies this concept through alphabetic substitution, where each letter shifts by a fixed number of positions (e.g., "HELLO" becomes "KHOOR" with a shift of 3).

The Caesar Cipher, historically attributed to Julius Caesar for military communications, operates through systematic alphabetic shifting. With a shift value of 3:
- A becomes D (A + 3 = D)
- B becomes E (B + 3 = E)  
- Z becomes C (Z + 3 wraps around to C)

Contemporary encryption algorithms employ mathematical complexity designed to make brute-force attacks computationally intractable without the corresponding decryption key.

**Problem:** Implement a Caesar Cipher encryption algorithm with configurable shift parameters.

**Input:** Shift amount and characters entered one by one
**Process:** Shift each letter by the specified amount, wrapping around the alphabet
**Output:** Encrypted message

**Example:** With shift = 3, input: h, e, l, l, o → Output: khoor

::: details Click for clue
Convert letters to numbers (a=1, b=2, etc.), add the shift value, then convert back to letters. Don't forget to wrap around when you reach the end of the alphabet.
:::

### Exercise 3 - Simple Hash Function <Badge type="tip" text="Question" />

**Hash Function Applications:** Cryptographic hash functions serve as fundamental components in blockchain technologies, search engine indexing systems, and secure password storage mechanisms. These functions enable data integrity verification and efficient information retrieval across large datasets.

**What is Hashing?**
A hash function converts input data of any size into a fixed-size string of characters, creating a unique "digital fingerprint" for that data. This fingerprint is deterministic - the same input always produces the same hash value.

The amazing properties of hash functions:
- The same input ALWAYS produces the same hash
- Even changing one tiny character completely changes the hash
- They are designed to be computationally irreversible
- "hello" might become 53847, but "Hello" (capital H) might become 194736

**What is ASCII?**
ASCII (American Standard Code for Information Interchange) is how computers store letters as numbers. Every character has a secret number code:

| Character | ASCII Value | Character | ASCII Value |
|-----------|-------------|-----------|-------------|
| A         | 65          | a         | 97          |
| B         | 66          | b         | 98          |
| C         | 67          | c         | 99          |
| ...       | ...         | ...       | ...         |
| Z         | 90          | z         | 122         |
| (space)   | 32          | 0         | 48          |
| !         | 33          | 1         | 49          |

The string "Hi" corresponds to ASCII values 72 and 105 in computer memory.

**Problem:** Implement a hash function that converts characters to ASCII values, applies positional weighting, and computes the cumulative sum.

**Input:** Characters entered one by one
**Process:** Convert each character to ASCII, multiply by its position (1st, 2nd, 3rd...), sum all results, take modulo 1000
**Output:** Final hash value

**Example:** For input "ab": (ASCII of 'a' � 1) + (ASCII of 'b' � 2) = (97 � 1) + (98 � 2) = 293

::: details Click for clue
You'll need to know ASCII values - 'a' is 97, 'b' is 98, etc. Keep track of the position of each character as you process them.
:::

-->

### Exercise 2 - Checksum Validation <Badge type="tip" text="Question" />

Checksums are embedded in various identification systems including credit card numbers, ISBN codes, and barcodes to detect data corruption. These algorithms prevent processing errors that could result from transmission or input mistakes.

**What is a Checksum?**

A checksum is a computed value derived from input data using mathematical algorithms designed to detect errors in transmission or storage. Discrepancies between computed and expected checksum values indicate potential data corruption.

**Practical Applications:**
- Credit card numbers incorporate checksum digits that validate the entire number sequence according to established algorithms (such as the Luhn algorithm).
- ISBN codes employ checksum validation to ensure number authenticity and prevent arbitrary number generation.
- WiFi passwords, QR codes, and even DNA sequencing use checksum algorithms to detect errors

Checksum algorithms can identify various error types including single-digit substitutions, transposition errors, and other common data corruption patterns, establishing their importance in data integrity systems.

**Problem:** Implement a checksum validation algorithm that computes the sum of all digits and verifies divisibility by 10.

**Input:** Digits entered one by one, until negative number is entered

**Output:** "Valid" if divisible by 10, "Invalid" otherwise

**Example:** For digits 1, 2, 3, 4: sum = 10, 10 % 10 = 0 remainder, so output "Valid"

