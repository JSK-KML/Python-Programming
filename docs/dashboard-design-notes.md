# Dashboard Design Notes

## Project Overview
Design and implementation plan for a live grading dashboard that fetches student code from GitHub repositories and runs tests using Pyodide in the browser.

## Core Concept
- **One-time setup**: Students provide GitHub repo links once at semester start
- **Weekly workflow**: Teacher selects assignment from dropdown, dashboard automatically fetches and tests all submissions
- **Live testing**: All code execution happens in browser using Pyodide (Python runtime)
- **Real-time feedback**: See student code and test results side-by-side

## System Architecture

### Folder Structure
```
docs/
├── dashboard/                    # Dashboard feature
│   ├── index.md                 # Main dashboard page (/dashboard)
│   ├── repos.json               # Simple list of GitHub repo URLs
│   └── components/              # Vue components
│       ├── DashboardTable.vue   # Student list with status
│       ├── CodeViewer.vue       # Display fetched student code
│       ├── TestRunner.vue       # Pyodide + runtime fetching
│       ├── TestResults.vue      # Show test results
│       └── StudentDetail.vue    # Full student submission view
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

### Student Repository Structure
```
student-repo/
├── lab-01/main.py
├── lab-02/main.py  
├── lab-07/main.py       # Fetched when lab-07 selected
└── assignment-3/main.py
```

### Teacher Test Repository Structure
```
teacher-test-repo/
├── lab-01-tests.py
├── lab-02-tests.py
├── lab-07-tests.py      # Fetched when lab-07 selected
└── assignment-3-tests.py
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
┌─── FOR EACH REPO URL ──────┐
│                            │
│  3. Parse URL → extract:   │
│     - username             │
│     - repo name            │
│  4. GitHub API call:       │
│     GET /repos/{user}/{repo}│
│     → Get repo info + name │
└────────────┬───────────────┘
             │
             ▼
┌─── DISPLAY STUDENT LIST ───┐
│                            │
│  5. Show table:            │
│     - Student name         │
│     - Repo link            │
│     - [View Code] button   │
└────────────┬───────────────┘
             │
             ▼
┌─── WHEN USER CLICKS VIEW ──┐
│                            │
│  6. GitHub API calls:      │
│     • Fetch student code   │
│       GET /repos/{user}/{repo}/contents/{assignment}/main.py
│     • Fetch YOUR tests     │
│       GET /repos/{teacher}/{test-repo}/contents/{assignment}-tests.py
└────────────┬───────────────┘
             │
             ▼
┌─── RUN TESTS IN BROWSER ───┐
│                            │
│  7. Load Pyodide           │
│  8. Execute in browser:    │
│     pyodide.runPython(`    │
│       ${studentCode}       │
│       ${teacherTests}      │
│     `)                     │
│  9. Capture results        │
└────────────┬───────────────┘
             │
             ▼
┌─── DISPLAY RESULTS ────────┐
│                            │
│ 10. Show side-by-side:     │
│     • Student code         │
│     • Test results         │
│     • Pass/fail status     │
│     • Execution output     │
└────────────────────────────┘
```

## File Fetching Logic

```javascript
// Extract assignment from dropdown selection
const assignment = "lab-07"

// Auto-generate file paths
const studentFile = `${assignment}/main.py`   // → "lab-07/main.py"
const testFile = `${assignment}-tests.py`     // → "lab-07-tests.py"

// Fetch from GitHub API
const studentCode = await fetchFromGitHub(studentRepo, studentFile)
const testCode = await fetchFromGitHub(teacherRepo, testFile)
```

## Dashboard UI Layout

```
┌─────────────────────────────────────────────────────────────────────────────────────────────┐
│  🎓 CP115 Live Grading Dashboard                                                               │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                               │
│  ⚙️ ASSIGNMENT SETTINGS                                                                        │  
│  ┌─────────────────────────────────────────────────────────────────────────────────────────┐ │
│  │ Assignment: [Lab-07 ▼] │ Student File: [main.py] │ Teacher Repo: [mike-cp115/tests] │ │
│  │                                                                                         │ │
│  │ • Lab-01                 Fetches: lab-07/main.py   Fetches: lab-07-tests.py          │ │
│  │ • Lab-02                 from each student repo    from your test repo               │ │
│  │ • Lab-07 ✓                                                                           │ │
│  │ • Assignment-3                                                                       │ │
│  │ • Final-Project                                                                      │ │
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

## Detailed Student View

```
┌─── DETAILED VIEW: Jane Smith's Lab-07 ─────────────────────────────────────────────────────┐
│  👤 Jane Smith │ 📂 janesmith/cp115-python/lab-07/main.py │ ❌ 3/10 Tests │ 🔗 GitHub    │
├─────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                             │
│  ┌─── 📁 FETCHED CODE ─────────────────────┬─── 🧪 LIVE TEST RESULTS ─────────────────────┐ │
│  │                                         │                                              │ │
│  │ # lab-07/main.py                        │ Running: lab-07-tests.py                     │ │
│  │                                         │                                              │ │
│  │  1  def calculate_average(nums):        │ Test 1: ✅ Basic average                     │ │
│  │  2      if not nums:                    │ Test 2: ❌ Empty list (got None, want 0)    │ │
│  │  3          return 0                    │ Test 3: ✅ Single number                     │ │
│  │  4      return sum(nums) / len(nums)    │ Test 4: ❌ Large numbers                     │ │
│  │  5                                      │ Test 5: ✅ Negative numbers                  │ │
│  │  6  def find_maximum(numbers):          │ ...                                          │ │
│  │  7      if not numbers:                 │                                              │ │
│  │  8          return None  # ❌ BUG!      │ 🐍 Pyodide Output:                          │ │
│  │  9      return max(numbers)             │ >>> calculate_average([])                    │ │
│  │ 10                                      │ None ❌ Expected: 0                          │ │
│  │ 11  # More code...                      │ >>> find_maximum([1,2,3])                   │ │
│  │                                         │ 3 ✅                                        │ │
│  └─────────────────────────────────────────┴──────────────────────────────────────────────┘ │
│                                                                                             │
│  [🔄 Re-run Tests] [📁 Open GitHub] [📝 Add Comments]                                      │
└─────────────────────────────────────────────────────────────────────────────────────────────┘
```

## Key Features

### Runtime Data Fetching
- **Student code**: Fetched from GitHub API at runtime
- **Test code**: Fetched from teacher's test repository at runtime
- **No local storage**: Everything pulled fresh from GitHub
- **Dynamic assignment selection**: Change assignments via dropdown

### Browser-based Execution
- **Pyodide**: Full Python runtime in browser
- **No server required**: All code execution client-side
- **Live results**: Immediate feedback as tests run
- **Safe execution**: Sandboxed environment

### User Experience
- **One-time setup**: Set repos.json once at semester start
- **Weekly workflow**: Select assignment, all submissions load automatically
- **Visual feedback**: Color-coded test results and progress indicators
- **Direct links**: Jump to GitHub repos for detailed review

## Technical Stack
- **VitePress**: Documentation framework (existing)
- **Vue.js**: Frontend components
- **Pyodide**: Python runtime in browser
- **GitHub API**: Code and repository data fetching
- **CSS Grid/Flexbox**: Responsive layout

## Implementation Phases

### Phase 1: Basic Structure
- Create dashboard folder structure
- Set up basic Vue components
- Add navigation to VitePress

### Phase 2: GitHub Integration
- Implement GitHub API fetching
- Create student list from repos.json
- Display basic repository information

### Phase 3: Code Display
- Add syntax highlighting for Python code
- Create code viewer component
- Implement assignment selection logic

### Phase 4: Pyodide Integration
- Load Python runtime in browser
- Execute student code with tests
- Display results and feedback

### Phase 5: Polish & Features
- Enhanced UI/UX
- Error handling
- Performance optimization
- Additional features (comments, grading, etc.)

## Benefits

### For Teachers
- **Time saving**: No manual repo browsing
- **Instant feedback**: See all submissions and results immediately
- **Flexible**: Easy to switch between assignments
- **Comprehensive**: View code, tests, and results in one place

### For Students
- **Simple setup**: Just provide GitHub repo once
- **Standard workflow**: Same repository structure for all assignments
- **Transparency**: Can see their own results if desired

### Technical Benefits
- **No server costs**: Everything runs client-side
- **Real-time**: Fresh data from GitHub every time
- **Scalable**: Works with any number of students
- **Maintainable**: Simple architecture, easy to modify

## Complexity Assessment
- **Frontend**: Medium complexity (Vue.js components, API integration)
- **Pyodide**: Low-medium complexity (well-documented Python runtime)
- **GitHub API**: Low complexity (standard REST API calls)
- **Overall**: Manageable project with clear implementation path

**Development Time Estimate**: 1-2 weeks for full implementation