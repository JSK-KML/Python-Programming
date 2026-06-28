---
outline: deep
title: Glossary
---

# Glossary

This page explains the technical words you will meet for the first time in the labs: the tools, the editor, and the **Git** and **GitHub** workflow. Whenever a lab uses a term you do not recognise, click it or look it up here.

::: info NOTE
You do not need to memorise these. They are here as a reference. The meaning becomes natural once you have used each thing a few times.
:::

## Computer and Editor Basics

### Directory

A directory is another word for a **folder**: a place on your computer that holds files and other folders. Directories can sit inside one another, which is how a project is organised. For example, the file you edit in this course lives inside the `lab03` directory, which itself sits inside the `labs` directory.

### Terminal

The terminal is a text window where you type instructions for the computer to carry out, instead of clicking buttons. It is also called the *command line*. In **VS Code** you open one from the top menu with `Terminal` → `New Terminal`, and a panel appears at the bottom of the window.

### Command

A command is a single line of text you type into the terminal to make the computer do one thing, then press <kbd>Enter</kbd> to run it. For example, `gh auth login` is a command that starts the **GitHub** login process. Commands have to be typed exactly, including spaces and dashes.

### Working directory

The working directory is the folder a [terminal](#terminal) is currently "inside". Any command you type acts on this folder unless you tell it otherwise. You can see which folder it is with `pwd` and move to a different one with `cd`.

### pwd

`pwd` (*print working directory*) is a command that prints the full path of the folder your terminal is currently in. Use it whenever you are unsure where you are before running other commands.

### ls

`ls` (*list*) is a command that shows the files and folders inside your current [working directory](#working-directory). It helps you see what is around you and find the next folder to move into.

### cd

`cd` (*change directory*) is a command that moves your terminal into a different folder. Follow it with a folder name to go in, or `cd ..` to go up one level.

### IDE

IDE stands for *Integrated Development Environment*. It is a single program for writing code that also helps you run your programs, highlights mistakes as you type, and manages your files. In this course the IDE is **VS Code**.

### Extension

An extension is an add-on that gives **VS Code** an extra ability it did not have out of the box. You install the **Python** extension so that VS Code understands Python code, colours it correctly, and can run it. Extensions are installed from the `Extensions` panel on the left.

### Run

To run a program means to make the computer carry out the instructions you wrote, so you can see the result. In **Flowgorithm** you run a flowchart with the green arrow; in **VS Code** you run a file with the ▶ button. If the program has a mistake, running it is often how you find out.

### winget

`winget` is a tool built into **Windows** that installs software straight from the terminal, without visiting a website. You give it the name of the program, for example `winget install --id GitHub.cli`, and it downloads and installs it for you.

## Git and GitHub

### Git

Git is the software that watches your project and records the changes you make over time. Because it keeps a history, you can save snapshots of your work and go back to an earlier version if something breaks. Git runs quietly in the background; you control it through **VS Code** or the terminal.

### GitHub

GitHub is a website that stores Git projects online. It acts as a backup of your work and as the place where you and your lecturer can see the same code. Your work only appears on GitHub after you [push](#push) it.

### Repository

A repository, usually shortened to *repo*, is a project folder that **Git** is tracking, together with its complete history of changes. The course code lives in a repo called `CP115-Class-Repo`. A repo can exist both on **GitHub** (online) and on your computer (your local copy).

### GitHub CLI

The GitHub CLI is a terminal tool, run with the command `gh`, that lets your computer talk to **GitHub**. In this course you mainly use it to log in with `gh auth login`, so that pushing and pulling work without asking for your password every time.

### Fork

A fork is your own personal copy of someone else's repository on **GitHub**. You take a fork of the class repo so that everything you change is yours alone. The fork stays linked to the original, so you can pull in the lecturer's later updates with [Sync Fork](#sync-fork).

### Clone

To clone a repository means to download it from **GitHub** onto your computer, including its full history, so you can edit and run it in **VS Code**. You fork first (to get your own online copy), then clone that fork to your machine.

### Commit

A commit is a saved snapshot of your changes at one point in time, with a short message describing what you changed. Each commit is a marker in your project's history that you can look back at or return to. Committing saves the snapshot on your computer; it does not upload it yet.

### Push

To push means to upload your commits from your computer to your repository on **GitHub**. Until you push, your latest work only exists on your own machine. In **VS Code** the `Sync Changes` button pushes for you.

### Pull

To pull means to download new commits from **GitHub** onto your computer, so your local copy matches what is online. You pull after the online repo has been updated, for example after you have synced your fork.

### Sync Fork

Sync Fork updates your fork with the newest changes from the original repository it was copied from. Over time the lecturer adds new labs to the original; syncing brings those into your fork so it stays current. Syncing updates the online copy, after which you still need to [pull](#pull) to bring the changes to your computer.

### Source Control

Source Control is the panel in **VS Code**, opened from the branch-like icon on the left sidebar, where you commit, push, and pull using buttons instead of typing terminal commands. It automatically shows which files you have changed since your last commit.

### GitHub Actions

GitHub Actions is an automatic checker that runs on **GitHub** every time you push. It tests your work and reports the result with a coloured mark next to your commit: orange means it is still running, a red cross means it failed, and a green tick means it passed.

### Workflow

A workflow is one run of **GitHub Actions**. You can open the latest workflow from the `Actions` tab on **GitHub** to read exactly what was checked and, if it failed, why.
