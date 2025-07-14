---
outline: deep
title : Lab 2 - Flowgorithm and More Github
---

# Lab 02 : Flowgorithm and More Github

## Pull and Update in VS Code

This lab will explain how to use Flowgorithm and how to integrate Flowgorithm with Github

Before starting any lab, you need to make sure that the repo in your Github is the latest one. [Sync the repo](./lab-01.md#syncing-fork) if the `upstream` repo have been updated.

Syncing the repo only updates the online repo that exist in Github web server. Back in our VS Code, the code are unchanged from the last time you used it. 

Once the online repo is in-sync, bring those changes down to your PC by clicking `Source Control` and then `...` beside `Changes` and click `Pull`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-1.png" alt="drawing" width="400"/>
</p>

`Pull` connects to the project on Github, grabs any commits added since your last `Pull`, and blends those changes into your PC so your local files and history now match what’s online on Github server.

## Introduction to Flowgorithm

Flowgorithm is a program that lets you draw an algorithm as a flowchart and then watch it run step-by-step. Each shape (start, input, decision, loop, etc.) represents one action in your logic, so you can see what happens to your variables without writing any code first. When you’re ready, Flowgorithm can even show the matching Python code so you can relate the picture to real code.

Launch Flowgorithm by pressing <kbd style="color:#1B1B1F; border:1px solid #e64a1e; padding:2px 6px; border-radius:4px; background:#FF5522; box-shadow:inset 0 -2px 0 #c4401a;">⊞ Win</kbd> on your keyboard and type *Flowgorithm*. If you can't see it make sure you have [installed it.](/installations/flowgorithm)

When you first launch it, you will see a simple flowchart, containing only `Start` and `End`. This is the default template of the any Flowgorithm projects. Before we edit the file, we need to save the file first.

To know if the file is still unsaved, the name of the file is still callled `(Untitled)`. To save the file, click `File` and then `Save As...`. The system will prompt you on the location of the file you want it saved. Saved it to any location you are comfortable with. Remember this location, you will need to use this later. Named the file exactly as this; `lab-2`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-2.png" alt="drawing" width="400"/>
</p>

## Using Github Actions

GitHub Actions is an integrated automation service inside GitHub that lets you describe “workflows” in simple YAML files so common tasks—such as running tests, building your project, or deploying a website that happen automatically whenever you push code, open a pull request, or on a set schedule.

To set up your Github Actions, go to the `cp115-class-repo` in your Github account and go to the `Actions` tab. Click the `I understand my workflows, go ahead and enable them`. 

<p align="center">
    <img src="/public/labs/lab-02/lab-2-3.png" alt="drawing" width="600"/>
</p>

The direction for Github Actions have been set up in any file that have the `.yml file`. If you look into your repostiory right now, you will see that there are two `.yml` file, both of them are inside `.github/workflows` called `lab01-ci.yml` and `lab02-ci.yml`. The file name is quite explanatory. The first one is for the first lab and the second on is for the second lab.

Look into the `lab02-ci.yml`, you can see that the language is quite direct and can be understand easily. Don't worry too much about writing the workflow, for now, the workflow will be given to you.

## Using Flowgorithm with Github Action

Copy and paste the saved file from the [Flowgorithm](#introduction-to-flowgorithm) section earlier into `/labs/lab02/` directory of your repo using VS Code. Then commit and push the code. Refer back to the previous lab on how to do [commit and push](./lab-01.md#commit-and-push) if you doesnt remember how to.

Go to your Github account back and go back to your repository and you will see a small orange circle beside the commit message.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-4.png" alt="drawing" width="600"/>
</p>

Wait for a while, you will see that the orange circle will turn into a red cross.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-5.png" alt="drawing" width="600"/>
</p>

Click the `Actions` tab and click the latest workflow inside the `Actions`.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-6.png" alt="drawing" width="600"/>
</p>

Inside the workflow, you will see the error that is causing the worklflow to failed.

### Successful Action Workflow <Badge type="tip" text="Task" />

Your task is to read the error message and correct the mistake based on the error. If the workflow is successfull, you should see a green tick next to your commit message.

<p align="center">
    <img src="/public/labs/lab-02/lab-2-7.png" alt="drawing" width="600"/>
</p>