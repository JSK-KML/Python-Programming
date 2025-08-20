# Dashboard Design Notes

## Project Overview
Design and implementation plan for a live grading dashboard that fetches student code from GitHub repositories and runs tests using Pyodide in the browser.

## Core Concept
- **Template repository setup**: Students fork teacher's template repo with complete folder structure
- **Batch workflow**: Teacher selects assignment from dropdown, dashboard fetches ALL student submissions at once
- **Browser-based testing**: All code execution happens in browser using Pyodide (Python runtime)
- **Tabbed interface**: View individual files with focused code review

## System Architecture

### Folder Structure
```
docs/
├── dashboard/                    # Dashboard feature
│   ├── index.md                 # Main dashboard page (/dashboard)
│   ├── repos.json               # Simple list of GitHub repo URLs
│   └── components/              # Vue components
│       ├── StudentGrid.vue      # Student list with status
│       ├── StudentCard.vue      # Individual student submission view
│       ├── CodeTabs.vue         # Tabbed file interface
│       ├── TestRunner.vue       # Pyodide execution
│       └── AssignmentSelector.vue # Assignment dropdown
├── .vitepress/
│   ├── config.js               # Just add dashboard nav
│   └── theme/
│       └── style.css           # Dashboard styling
└── [existing structure...]
```

### Configuration

**repos.json** (set once):
```json
[
  "https://github.com/johndoe/cp115-python",
  "https://github.com/janesmith/cp115-python", 
  "https://github.com/bobwilson/cp115-python"
]
```

### Template Repository Structure
```
template-repo/                   # Students fork this
├── lab-01/
│   ├── main.py                 # Student code
│   └── tests.py                # Teacher tests
├── lab-02/
│   ├── main.py
│   └── tests.py
├── lab-07/
│   ├── exercise1.py            # Multiple student files
│   ├── exercise2.py
│   ├── exercise3.py
│   └── tests.py                # Teacher tests
└── assignment-3/
    ├── solution.py
    └── tests.py
```

## System Flow

```
┌─── USER OPENS DASHBOARD ───┐
│                            │
│  1. Load /dashboard page   │
│  2. Read repos.json        │
│     ["github.com/user1/...",│
│      "github.com/user2/..."]│
└────────────┬───────────────┘
             │
             ▼
┌─── DISPLAY STUDENT LIST ───┐
│                            │
│  3. Show student grid:     │
│     - Student name         │
│     - Repo link            │
│     - [View Code] button   │
└────────────┬───────────────┘
             │
             ▼
┌─── ASSIGNMENT SELECTION ───┐
│                            │
│  4. Teacher selects:       │
│     - Assignment dropdown  │
│     - Triggers batch fetch │
└────────────┬───────────────┘
             │
             ▼
┌─── BATCH FETCH ALL FILES ──┐
│                            │
│  5. For each student repo: │
│     GET /repos/{user}/{repo}/contents/{assignment}/
│     → Fetch entire folder  │
│     → All .py files        │
└────────────┬───────────────┘
             │
             ▼
┌─── PYODIDE EXECUTION ──────┐
│                            │
│  6. Load all files into    │
│     Pyodide filesystem     │
│  7. Execute tests.py       │
│  8. Parse print output     │
└────────────┬───────────────┘
             │
             ▼
┌─── TABBED INTERFACE ───────┐
│                            │
│  9. Show for each student: │
│     • File tabs            │
│     • Code viewer          │
│     • Test results         │
│     • Run buttons          │
└────────────────────────────┘
```

## File Fetching Logic

```javascript
// Fetch entire assignment folder
const assignment = "lab-07"
const folderContents = await fetchFolder(`${studentRepo}/${assignment}/`)

// Returns all files in folder:
// ["exercise1.py", "exercise2.py", "exercise3.py", "tests.py"]

// Separate student code from tests
const studentFiles = folderContents.filter(f => f.name !== "tests.py")
const testFile = folderContents.find(f => f.name === "tests.py")
```

## Dashboard UI Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│  🎓 CP115 Live Grading Dashboard                                                               │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                               │
│  ⚙️ ASSIGNMENT SETTINGS                                                                        │  
│  ┌─────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │ Assignment: [Lab-07 ▼]  Fetches: lab-07/ folder (all files)                            │ │
│  │                                                                                         │ │
│  │ • Lab-01                                                                                │ │
│  │ • Lab-02                                                                                │ │
│  │ • Lab-07 ✓                                                                              │ │
│  │ • Assignment-3                                                                          │ │
│  │ • Final-Project                                                                         │ │
│  └─────────────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                               │
│  📋 STUDENT SUBMISSIONS (repos.json loaded once)                                             │
│  ┌─────────────┬────────────────────────────┬──────────────┬────────────────────────────────┐ │
│  │ Student     │ GitHub Repo                │ Status       │ Actions                        │ │
│  ├─────────────┼────────────────────────────┼──────────────┼────────────────────────────────┤ │
│  │ 👤 John Doe  │ johndoe/cp115-python      │ 🔄 Loading... │ [📖 View Code & Test]         │ │
│  │ 👤 Jane Smith│ janesmith/cp115-python    │ ❌ 3/10 (30%) │ [📖 View Code & Test]         │ │
│  │ 👤 Bob Wilson│ bobwilson/cp115-python    │ ✅ 9/10 (90%) │ [📖 View Code & Test]         │ │
│  └─────────────┴────────────────────────────┴──────────────┴────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Tabbed Student View

```
┌─── DETAILED VIEW: Jane Smith's Lab-07 ─────────────────────────────────────────────────────┐
│  👤 Jane Smith │ 📂 janesmith/cp115-python/lab-07/ │ ❌ 3/10 Tests │ 🔗 GitHub              │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ [exercise1.py*] [exercise2.py] [exercise3.py] [tests.py]                                   │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                             │
│  # exercise1.py - Currently viewing                                                        │
│                                                                                             │
│   1  def calculate_average(nums):                                                          │
│   2      if not nums:                                                                      │
│   3          return 0                                                                      │
│   4      return sum(nums) / len(nums)                                                      │
│   5                                                                                        │
│   6  # Test this function                                                                  │
│   7  result = calculate_average([1, 2, 3])                                                 │
│   8  print(f"Average: {result}")                                                           │
│                                                                                             │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ [▶️ Run exercise1.py] [🧪 Run Tests]                                                       │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│ 🧪 Test Results (from tests.py):                                                          │
│ ✅ PASS: calculate_average basic test                                                      │
│ ❌ FAIL: calculate_average expected 2.0, got None                                          │
│ ✅ PASS: find_max works correctly                                                          │
│                                                                                             │
│ 🎯 Summary: 2/3 tests passed (67%)                                                        │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Key Features

### Template Repository Approach
- **Single template repo**: Students fork teacher's complete folder structure
- **Standardized structure**: All assignments and tests in predictable locations
- **Built-in tests**: Tests travel with assignments, no separate test repository
- **Import support**: Multi-file assignments work correctly

### Batch Processing
- **Folder-level fetching**: Fetch entire assignment folder at once
- **All files included**: Student code, tests, and any supporting files
- **Parallel execution**: Process all students simultaneously
- **Simple workflow**: One assignment selection = complete results

### Tabbed Interface
- **File-specific run buttons**: Clear "Run exercise1.py" vs "Run Tests"
- **Code focus**: Full-screen code viewing with syntax highlighting
- **Easy navigation**: Quick switching between student files
- **Multi-file support**: Handle imports and dependencies correctly

### Print-Based Testing
- **Simple test format**: Use print statements with ✅ PASS / ❌ FAIL patterns
- **Easy parsing**: Dashboard parses output for pass/fail counts
- **Flexible messaging**: Teachers control exact error messages
- **No framework complexity**: Just basic Python prints

## Technical Implementation

### Component Architecture
- **StudentGrid.vue**: Student list with status indicators
- **StudentCard.vue**: Individual student submission view with tabbed interface
- **CodeTabs.vue**: File tabs with syntax highlighting
- **TestRunner.vue**: Pyodide execution and result parsing
- **AssignmentSelector.vue**: Assignment dropdown with batch fetch trigger

### GitHub API Strategy
```javascript
// Batch fetch approach
const fetchAssignment = async (studentRepo, assignment) => {
  const folderContents = await github.getContents(`${studentRepo}/${assignment}/`);
  return folderContents; // All files in assignment folder
};

// Process all students
const results = await Promise.all(
  studentRepos.map(repo => fetchAssignment(repo, selectedAssignment))
);
```

### Pyodide Integration
```javascript
// Load all files into Pyodide filesystem
for (const file of studentFiles) {
  pyodide.FS.writeFile(file.name, file.content);
}

// Execute tests with print parsing
const output = pyodide.runPython('exec(open("tests.py").read())');
const results = parseTestOutput(output); // Count ✅ PASS / ❌ FAIL
```

### Test Result Parsing
```javascript
const parseTestOutput = (output) => {
  const passed = (output.match(/✅ PASS/g) || []).length;
  const failed = (output.match(/❌ FAIL/g) || []).length;
  return { passed, failed, total: passed + failed };
};
```

## Implementation Benefits

### Simplified Architecture
- **Single repository approach**: No separate test repositories
- **Batch processing**: One API call gets complete assignment
- **No state management**: Simple props-down data flow
- **Clear file structure**: Predictable folder organization

### Reliable Execution
- **Multi-file support**: Imports work correctly with template structure
- **Error isolation**: Individual student failures don't affect others
- **Consistent testing**: Same test environment for all students
- **Print-based results**: Simple, reliable output parsing

### Maintenance Simplicity
- **Fewer components**: Focused, single-responsibility components
- **No caching complexity**: Fresh fetch every time
- **Standard API patterns**: GitHub API with predictable responses
- **Clear data flow**: Template repo → GitHub API → Pyodide → Results