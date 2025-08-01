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

### Standard Badge Types

**Questions and Scenarios:**
```markdown
<Badge type="tip" text="Question" />
```
- Use for: All numbered scenarios and practice questions
- Placement: Right after the heading

**Tasks and Activities:**
```markdown
<Badge type="tip" text="Task" />
```
- Use for: Specific tasks students must complete
- Example: "Successful Action Workflow", hands-on activities

**Review and Recall:**
```markdown
<Badge type="warning" text="Recall" />
```
- Use for: Sections reviewing previous concepts
- Example: "Creating The IPO Table", "Creating Our First Flowchart"

**Experimental Features:**
```markdown
<Badge type="danger" text="Experimental" />
```
- Use for: Features that may not work consistently
- Example: GitHub Actions setups that are being tested

**Additional Badge Types:**
```markdown
<Badge type="info" text="Note" />        <!-- For general information -->
<Badge type="warning" text="Important" /> <!-- For important reminders -->
<Badge type="danger" text="Critical" />   <!-- For critical warnings -->
```

### Badge Placement Rules
- Always place badges **after** the heading text with a space
- One badge per heading maximum
- Use consistent text labels as shown above

## 3. Container Guidelines

### Standard Container Types

**General Tips:**
```markdown
::: tip
Use the navigation links above to explore labs, installation guides and the course schedule.
:::
```

**Important Reminders:**
```markdown
::: warning REMINDER
Make sure you click the correct arrow to ensure that the variable is declared in the correct sequence.
:::
```

**Critical Information:**
```markdown
::: danger ATTENTION
The GitHub Actions setup for this lab is experimental and can fail even though you have done everything correctly.
:::
```

**Collapsible Clues:**
```markdown
::: details Click for clue
Content that students can reveal for hints
:::
```

**Technical Notes:**
```markdown
::: info NOTE
Any variable name that is used must only contain letters and numbers, you cannot use special characters such as - or _
:::
```

### Container Naming Standards
- Use **UPPERCASE** for the label text
- Be specific: `REMINDER`, `ATTENTION`, `NOTE` rather than generic terms
- Keep labels consistent across similar content types

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

## 11. Special Formatting

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