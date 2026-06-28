# Design Standards for CP115 Documentation

This document establishes consistent design choices for all markdown files in the CP115 Python Programming course documentation.

## 1. Backtick Usage Guidelines

### When to Use Backticks (`)

**Code and Technical Elements:**
- Variable names: `mealPrice`, `finalPrice`, `NUM_NIGHT`
- Function names: `print()`, `input()`
- File names: `lab-01.py`, `exercise.py`, `config.mjs`
- Directory paths: `labs/lab01/`, `/installations/git`
- File extensions: `.py`, `.md`, `.yml`, `.zip`

**UI Elements and Buttons:**
- Menu items: `File`, `Edit`, `View`
- Button names: `Next`, `Install`, `Clone repository`, `Sync Fork`
- Tab names: `Source Control`, `Terminal`, `Actions`
- Form fields: `Select Installation Folder`, `Create a desktop icon`

**Git and Version Control:**
- Git commands: `Fork`, `Clone`, `Commit`, `Push`, `Pull`
- Repository names: `class-cp115-repo`, `cp115-class-repo`
- Branch names: `main`, `develop`

**Software and Tools:**
- When referring to specific software features: `Flowgorithm Installer`
- Executable files: `VSCodeUserSetup-x64-*.exe`, `Git-version-64-bit.exe`

### When NOT to Use Backticks

**Software Names (Use Bold Instead):**
- `**Flowgorithm**`, `**VS Code**`, `**GitHub**`
- `**Python**`, `**Git**` (when referring to the software itself)

**General Terms:**
- flowchart, algorithm, pseudocode (unless specific implementation)
- programming, debugging, testing
- input, output, process (unless specific variable names)

## 2. Badge Types and Usage

Badges tag **what a heading is**. Use only these four:

| Badge | Use for |
|-------|---------|
| `<Badge type="tip" text="Question" />` | Numbered scenarios and practice questions |
| `<Badge type="tip" text="Task" />` | A specific task the student must complete |
| `<Badge type="warning" text="Recall" />` | Sections reviewing previous concepts |
| `<Badge type="danger" text="Experimental" />` | Features that may not work consistently |

**Rules:** place after the heading text with a space, one badge per heading, no other labels. For inline information use a [callout box](#_3-container-callout-guidelines), not a badge.

## 3. Container (Callout) Guidelines

Callout boxes use a **small, fixed vocabulary**. Every callout maps to exactly one purpose. Do not invent new titles.

### The Four Standard Boxes

| Box | Color | Use it for |
|-----|-------|------------|
| `::: info NOTE` | Gray | A neutral fact or clarification the student should know. Nothing breaks if ignored. |
| `::: tip WHY` | Green | The reasoning behind a step, or a concept explained deeper. Answers "why are we doing this?" |
| `::: warning REMINDER` | Yellow | Something easy to forget that the student **must** do: progress checks, exact filenames, syncing, logging out. |
| `::: danger ATTENTION` | Red | Something that will actually break: lost work, failed auto-checker, wrong account on a shared PC. |

**`::: info NOTE`** — neutral information, no action required:
```markdown
::: info NOTE
Any variable name can only contain letters and numbers. You cannot use special characters such as `-` or `_`.
:::
```

**`::: tip WHY`** — the reasoning behind a step or a deeper look at a concept (replaces old scattered titles like `WHY THIS MATTERS`, `HOW ELIF WORKS`, `CHOOSING THE RIGHT STRUCTURE`):
```markdown
::: tip WHY
Always test with a value you can work out by hand. If your flowchart and your calculator disagree, the bug is in the flowchart.
:::
```

**`::: warning REMINDER`** — must-do steps that are easy to forget. Also covers **progress checks** ("confirm you have X before continuing"); there is no separate CHECKPOINT box:
```markdown
::: warning REMINDER
Save each file with the **exact** file name stated in the question. The auto-checker looks for these exact names.
:::
```

**`::: danger ATTENTION`** — genuine hazards: lost work, failed checks, or actions affecting the wrong person on a shared PC:
```markdown
::: danger ATTENTION
Always run `gh auth logout` before you leave. If you stay logged in, the next student could push their work to your repository.
:::
```

### Callout Rules

1. **Title is ONE uppercase word.** The only exception is the fixed phrase `ATTENTION`. No sentence-length titles — put detail in the body, not the title.
   - Bad: `::: danger CRITICAL: Counter Placement with Continue`
   - Good: `::: danger ATTENTION` with the detail in the body.
2. **Never use a bare `::: tip`** with no title. Pick `WHY`, or use `NOTE` if it is neutral information.
3. **No CHECKPOINT, PITFALL, PROBLEM, LIMITATION, INEFFICIENCY, DEBUGGING TIP** or other ad-hoc titles. Map them onto the four boxes:
   - "Confirm you have X" → `REMINDER`
   - "Here is why the naive approach is bad" → `WHY`
   - "Watch out, this will fail" → `ATTENTION` (if it breaks) or `REMINDER` (if it is just forgettable)
4. **Don't stack callouts.** No two boxes back to back. If you have that much to say, it is prose.
5. **One purpose per box.** If a box is doing two jobs, split the content or move part of it into normal text.

### Quick Decision Guide

- Will something **break or be lost** if they miss it? → `ATTENTION`
- Is it a **must-do they'll forget** (including "check you have X")? → `REMINDER`
- Is it **why** we do something / a concept? → `WHY`
- Is it just **good to know**? → `NOTE`

## 4. Keyboard Key Styling

### Standard Keyboard Key Format
```markdown
<kbd>Ctrl</kbd> + <kbd>S</kbd>
<kbd>⊞ Win</kbd>
<kbd>Enter</kbd>
```

### When to Use Styled Keys
Use the styled format for:
- Keyboard shortcuts: `<kbd>Ctrl</kbd> + <kbd>S</kbd>`
- Special keys: `<kbd>⊞ Win</kbd>`, `<kbd>Enter</kbd>`, `<kbd>Tab</kbd>`
- Function keys: `<kbd>F1</kbd>`, `<kbd>F12</kbd>`

**Standard Style Template:**
```markdown
<kbd style="color:#fff;background:#0047A3;border:1px solid #0060CC;padding:4px 10px;border-radius:6px;box-shadow:inset 0 -2px 0 rgba(0,0,0,.45),0 1px 3px rgba(0,0,0,.25);font-size:.85em;line-height:1;user-select:none;">Key</kbd>
```

## 5. Text Formatting Guidelines

### Bold Text (**)
- Software names: `**Flowgorithm**`, `**VS Code**`, `**GitHub**`
- Important concepts: `**Input**`, `**Output**`, `**Statement**`
- Section emphasis: `**Time Limit:**`, `**Software Required:**`

### Italic Text (*)
- File references in narrative: *Flowgorithm* (when mentioned casually)
- Emphasis within sentences: *selection*, *sequence*, *repetition*

### Code Blocks
Use fenced code blocks for:
- Multi-line code examples
- Configuration files
- Command sequences
- Exact terminal output

```python
print("Hello, World!")
```

```bash
git config --global user.name "USERNAME"
git config --global user.email "EMAIL"
```

## 6. Heading Structure

### Standard Heading Hierarchy
```markdown
# Main Title (H1) - Page title only
## Major Sections (H2) - Main content areas
### Subsections (H3) - Scenarios, steps, concepts
#### Details (H4) - Specific implementation details
```

### Heading with Badges
```markdown
### Scenario 1 - Meal Price with Taxes <Badge type="tip" text="Question" />
```

## 7. Link Formatting

### Internal Links
- Course content: `[installation guide](/installations/git)`
- Cross-references: `[commit and push](./lab-01.md#commit-and-push)`

### External Links
- GitHub repositories: `[link](https://github.com/JSK-KML/CP115-Class-Repo)`
- Software downloads: `https://code.visualstudio.com/`

## 8. Image Guidelines

### Standard Image Format
```markdown
<p align="center">
    <img src="/public/labs/lab-01/lab-1-1.png" alt="drawing" width="400"/>
</p>
```

### Image Sizing Standards
- Screenshots: `width="400"` or `width="600"`
- Diagrams: `width="300"` for simple, `width="600"` for complex
- Always use `alt="drawing"` for consistency

## 9. List Formatting

### Ordered Lists
Use for step-by-step instructions:
```markdown
1. First step
2. Second step
3. Third step
```

### Unordered Lists
Use for feature lists, requirements, or non-sequential items:
```markdown
- First item
- Second item
- Third item
```

## 10. Button Styling Standards

### CSS Variables System
All buttons MUST use the standardized CSS variable system defined in `docs/.vitepress/theme/style.css`:

```css
/* Standard Button Variables */
--btn-primary-bg: var(--gradient-hover);
--btn-primary-hover: var(--gradient-active);
--btn-secondary-bg: var(--gradient-primary);
--btn-neutral-bg: var(--gradient-subtle);
--btn-warning-bg: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%);
--btn-danger-bg: linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(185, 28, 28, 0.2) 100%);
```

### Button Types and Usage

**Primary Buttons (.btn-primary):**
- Use for: Main actions (Run Code, Download, Open Fullscreen)
- Color scheme: Blue-purple gradient
- Text: Dark text in light mode, white text in dark mode

**Secondary Buttons (.btn-secondary):**
- Use for: Supporting actions (Edit, Copy, Share)
- Color scheme: Lighter blue-purple gradient
- Text: Dark text in light mode, white text in dark mode

**Neutral Buttons (.btn-neutral):**
- Use for: Utility functions (Clear, Reset)
- Color scheme: Subtle blue-purple gradient
- Text: Dark text in light mode, white text in dark mode

**Warning Buttons (.btn-warning):**
- Use for: Caution required (Reset to Default, Clear All)
- Color scheme: Amber gradient
- Text: Amber dark text (`#78350f`) in light mode, white in dark mode

**Danger Buttons (.btn-danger):**
- Use for: Destructive actions (Delete, Remove)
- Color scheme: Red gradient
- Text: Red dark text (`#7f1d1d`) in light mode, white in dark mode

### Light/Dark Mode Requirements

**CRITICAL:** All buttons MUST support both light and dark modes.

**Light Mode (Default):**
```css
.btn-primary {
  color: #1e293b; /* Dark slate text */
}
.btn-primary:hover {
  color: #0f172a; /* Darker on hover */
}
```

**Dark Mode:**
```css
.dark .btn-primary {
  color: white; /* White text for dark backgrounds */
}
```

### Button Implementation Template

When creating new buttons, use this template:

```css
.your-button-class {
  padding: 10px 20px;
  background: var(--btn-primary-bg);
  color: #1e293b; /* Light mode text */
  border: 1px solid var(--btn-primary-border);
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
}

.your-button-class:hover {
  background: var(--btn-primary-hover);
  border-color: var(--btn-primary-border-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  color: #0f172a; /* Darker text on hover */
}

/* Dark mode support */
.dark .your-button-class {
  color: white;
}

.dark .your-button-class:hover {
  color: white;
}
```

### Button Guidelines

1. **NEVER** use hardcoded colors - always use CSS variables
2. **ALWAYS** implement both light and dark mode text colors
3. **ALWAYS** use the standard hover effects (translateY(-2px))
4. **NO EMOJIS** in button text - use clean, professional labels
5. **Consistent padding**: Use `10px 20px` for standard buttons
6. **Font weight**: Use `600` for primary actions, `500` for secondary
7. **Transitions**: Always use `all 0.3s ease` for smooth animations

### Editor-Specific Buttons

For interactive editors (Python editor, fullscreen editor):
- Follow the same CSS variable system
- Ensure Monaco editor theme switching works with button themes
- Test buttons in both light and dark editor themes

## 11. Interactive Teaching Pattern

### Discovery-Based Learning Approach

All code examples in labs should follow the discovery-based learning pattern where students experience behavior before understanding theory.

### Standard Teaching Pattern Structure

**Required Sequence:**
1. **Ask students to run code first** - Direct instruction to test the code
2. **Show the code block** - Present the actual code example
3. **Ask discovery questions** - Engage students with observation questions
4. **Provide conceptual explanation** - Theory and "why" comes after hands-on experience

### Pattern Implementation

**Step 1: Run Instruction**
```markdown
Copy this code into your `exercise.py` file and run it:
```
or
```markdown
Test this code in your `exercise.py` file:
```

**Step 2: Code Block**
```markdown
```python
# Code example demonstrating the concept
```
```

**Step 3: Discovery Questions**
```markdown
What output do you see? Try changing `variable_name` to `different_value` and run it again. What happens now?
```

**Step 4: Conceptual Explanation**
```markdown
The concept explanation follows, explaining why the behavior occurred and the underlying principles.
```

### When to Use This Pattern

**Always use for:**
- Major concept introductions (`if`, `elif`, `else` statements)
- Practical examples demonstrating behavior differences
- Code that produces observable, testable results
- Comparison between different approaches (multiple `if` vs `if-elif-else`)

**Example Usage:**
```markdown
### Understanding If Statement Placement

The `if` statement must **always** be positioned first in any selection structure.

Copy this code into your `exercise.py` file and run it:

```python
student_grade = 85

if student_grade >= 90:
    print("Excellent performance")
```

What output do you see? Try changing `student_grade` to `95` and run it again. What happens now?

The `if` statement serves as the **entry point** for conditional logic...
```

### Benefits of This Approach

- **Experience First**: Students see behavior before learning theory
- **Active Learning**: Encourages experimentation and discovery
- **Engagement**: Questions keep students actively involved
- **Understanding**: Concrete examples before abstract concepts
- **Consistency**: Matches successful teaching style from labs 5-8

### Question Types for Discovery

**Observation Questions:**
- "What output do you see?"
- "Which message appears?"
- "How many recommendations appear?"

**Experimentation Questions:**
- "Try changing X to Y and run it again"
- "What happens when you use different values?"
- "How many categories does each person get assigned?"

**Analysis Questions:**
- "Which conditions are being checked each time?"
- "What do you notice about the results?"

## 12. Special Formatting

### Currency
- British style: `RM1.00`, `RM250.00` (no space)
- Avoid: `RM 1.00`, `RM 250.00`

### File Names in Instructions
- Use backticks: `lab-01.py`, `lab-test-1`
- Include full path when relevant: `labs/lab01/exercise.py`

### Placeholder Text
- Use brackets: `[PLACEHOLDER FOR GOOGLE FORM LINK]`
- Use angle brackets for variables: `<USERNAME>`, `<EMAIL>`

---

## Implementation Notes

- Review existing files against these standards
- Update inconsistent formatting gradually
- Use this document as reference for all new content
- Maintain consistency across all course materials