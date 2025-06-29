---
outline: deep
---

# Lab 01: Tool Orientation (Flowgorithm, VS Code, GitHub)

**Week:** 1  
**Date:** ________  
**Duration:** 2 hours  
**Learning Outcome (CLO 3):** By the end of this session, you will be able to open and run a simple Flowgorithm flowchart, create and execute a “Hello World” script in VS Code, and make your first commit on GitHub under the JSK-KML organization.

---

## Objectives

In this lab, you’ll install and launch the core tools we’ll use throughout the course. First, you’ll open a starter Flowgorithm file and run it to see how a flowchart executes step by step. Next, you’ll switch to VS Code, create a minimal Python file that prints a greeting, and verify that it runs correctly. Finally, you’ll initialize a local Git repository, commit your Python file, push it to GitHub under JSK-KML, and confirm that you see it on the web. By the end, you’ll know where each tool lives and have made your very first commit.

---

## Prerequisites

Before you begin, make sure you’ve reviewed Lecture 1, where we discussed the five steps of problem solving (including the IPO model). You should also confirm that your computer is running Windows (or that you have a Windows VM ready) and that you have an Internet connection. Flowgorithm requires .NET 4.6 (or later); if it doesn’t launch, it will prompt you to install .NET. Finally, sign up for a GitHub account if you haven’t already and ask for permission to join the JSK-KML organization—your instructor will send an invite link.

---

## Materials & Setup

You will work inside a folder on your machine called `CP115_Week1`. Before you begin, download and install Flowgorithm from [flowgorithm.org](https://flowgorithm.org). Once it’s installed, open it briefly to confirm that it launches and that you see a blank chart with a green **Start** symbol. Next, install Visual Studio Code from [code.visualstudio.com](https://code.visualstudio.com) and, when VS Code opens, install the Python extension (search for “Python” in the Extensions pane). Finally, install Git for Windows from [git-scm.com](https://git-scm.com) and verify by typing `git --version` in a terminal. In your `CP115_Week1` folder, create two subfolders:

- `flowcharts/` (where you’ll place Flowgorithm files)  
- `code/` (where you’ll create your Python file)  

Also, make sure you can log in to GitHub and that you see the JSK-KML organization in your dashboard.

---

## Procedure (with Interlaced Exercises)

Open Flowgorithm now. In the **flowcharts/** folder of `CP115_Week1`, you’ll find a file named `HelloWorld.flg` that your instructor provided. Double-click it to load the flowchart. You’ll see an Input block, a Processing block, and an Output block configured to print “Hello, World!”. Drag the green slider at the top of the screen downward to watch how each symbol highlights in blue as it executes. When it reaches the output, you should see “Hello, World!” in the console window.

**Exercise:** Click the Output block, change the text to `"Hello, <YourName>!"`, then save the file as `Week1_<YourName>.flg` in `flowcharts/`. Run the chart again to confirm it prints your name.

---

Switch to VS Code. Choose **File → Open Folder…** and select `CP115_Week1`. In the Explorer pane on the left, click **New File** and name it `hello.py`. Type the following lines (replacing `<YourName>` with your actual name):

```python
# hello.py – Week 1 Lab
print("Hello, <YourName>!")
```

Save the file (`Ctrl+S`). To run it, press ``Ctrl+` `` to open the integrated terminal, then type:

```bash
python code/hello.py
```

You should see `Hello, <YourName>!` printed.

**Exercise:** Modify `hello.py` so that it also prints a second line, `"This is my first Python program."` Save and run again to see both lines.

---

Now let’s set up Git. In VS Code’s terminal (ensure you’re in `CP115_Week1`), type:

```bash
git init
```

You’ll see a message saying “Initialized empty Git repository.” Next, stage your Python file by typing:

```bash
git add code/hello.py
```

Then commit it:

```bash
git commit -m "Add hello.py – initial commit"
```

You should see a message that one file was committed.

**Exercise:** Verify the commit by running:

```bash
git log
```

You should see your commit message and a SHA hash. If you don’t, ask for help before proceeding.

---

Open your web browser and go to [github.com](https://github.com). Click on the JSK-KML organization, then click **New repository**. Name it exactly `CP115-Lab01-<YourUsername>` (for example, `CP115-Lab01-aimansyahmi`), leave it empty (don’t add a README), and click **Create repository**. Copy the HTTPS clone URL (it looks like `https://github.com/JSK-KML/CP115-Lab01-<YourUsername>.git`).

Back in your VS Code terminal, link your local repo to GitHub by typing:

```bash
git remote add origin https://github.com/JSK-KML/CP115-Lab01-<YourUsername>.git
```

Then push your commit upstream:

```bash
git push -u origin main
```

If Git prompts for your GitHub credentials, enter them. After a moment, refresh your GitHub repo page—you should see `hello.py` there.

**Exercise:** In VS Code, edit `hello.py` again—add a comment at the top such as:

```python
# Written by <YourName> for Lab 01
print("Hello, <YourName>!")
print("This is my first Python program.")
```

Save, then in the terminal run:

```bash
git add code/hello.py
git commit -m "Add author comment"
git push
```

Return to GitHub and click the **Commits** link. You should see two commits: “Add hello.py – initial commit” and “Add author comment.”

---

## Troubleshooting & Reflection

If Flowgorithm fails to open `HelloWorld.flg`, try running it as Administrator or verify that .NET 4.6 (or later) is installed. If VS Code doesn’t run `hello.py` when you type `python code/hello.py`, make sure the Python extension is installed and that `python --version` returns a valid interpreter path. If your `git push` fails with an authentication error, generate a personal access token on GitHub (User Settings → Developer Settings → Personal access tokens) and use it instead of your password.

Take a moment to reflect: Which step felt most challenging—setting up Git, running Flowgorithm, or typing code in VS Code—and why? How did you overcome any errors you encountered? Create a file named `reflection_lab01.txt` in your `CP115_Week1` folder, write a one-paragraph reflection addressing these questions, then commit and push it to GitHub using:

```bash
git add reflection_lab01.txt
git commit -m "Add reflection for Lab 01"
git push
```

When I check your repo, I’ll verify that you have:

- `flowcharts/Week1_<YourName>.flg` that prints your name.  
- `code/hello.py` with both print statements and at least two commits.  
- A file named `reflection_lab01.txt` with your reflection.

Congratulations—you now know how to work with Flowgorithm, write a simple Python script in VS Code, and manage your first GitHub commit. Next week, we’ll dive into flowcharts for control structures.
