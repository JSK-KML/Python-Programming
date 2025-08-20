import{_ as a,c as n,o as e,ag as i}from"./chunks/framework.DS1FxSjF.js";const u=JSON.parse('{"title":"Dashboard Design Notes","description":"","frontmatter":{},"headers":[],"relativePath":"dashboard-design-notes.md","filePath":"dashboard-design-notes.md"}'),t={name:"dashboard-design-notes.md"};function p(l,s,o,r,c,h){return e(),n("div",null,s[0]||(s[0]=[i(`<h1 id="dashboard-design-notes" tabindex="-1">Dashboard Design Notes <a class="header-anchor" href="#dashboard-design-notes" aria-label="Permalink to &quot;Dashboard Design Notes&quot;">​</a></h1><h2 id="project-overview" tabindex="-1">Project Overview <a class="header-anchor" href="#project-overview" aria-label="Permalink to &quot;Project Overview&quot;">​</a></h2><p>Design and implementation plan for a live grading dashboard that fetches student code from GitHub repositories and runs tests using Pyodide in the browser.</p><h2 id="core-concept" tabindex="-1">Core Concept <a class="header-anchor" href="#core-concept" aria-label="Permalink to &quot;Core Concept&quot;">​</a></h2><ul><li><strong>One-time setup</strong>: Students provide GitHub repo links once at semester start</li><li><strong>Weekly workflow</strong>: Teacher selects assignment from dropdown, dashboard automatically fetches and tests all submissions</li><li><strong>Live testing</strong>: All code execution happens in browser using Pyodide (Python runtime)</li><li><strong>Real-time feedback</strong>: See student code and test results side-by-side</li></ul><h2 id="system-architecture" tabindex="-1">System Architecture <a class="header-anchor" href="#system-architecture" aria-label="Permalink to &quot;System Architecture&quot;">​</a></h2><h3 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder Structure&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs/</span></span>
<span class="line"><span>├── dashboard/                    # Dashboard feature</span></span>
<span class="line"><span>│   ├── index.md                 # Main dashboard page (/dashboard)</span></span>
<span class="line"><span>│   ├── repos.json               # Simple list of GitHub repo URLs</span></span>
<span class="line"><span>│   └── components/              # Vue components</span></span>
<span class="line"><span>│       ├── DashboardTable.vue   # Student list with status</span></span>
<span class="line"><span>│       ├── CodeViewer.vue       # Display fetched student code</span></span>
<span class="line"><span>│       ├── TestRunner.vue       # Pyodide + runtime fetching</span></span>
<span class="line"><span>│       ├── TestResults.vue      # Show test results</span></span>
<span class="line"><span>│       └── StudentDetail.vue    # Full student submission view</span></span>
<span class="line"><span>├── .vitepress/</span></span>
<span class="line"><span>│   ├── config.js               # Just add dashboard nav</span></span>
<span class="line"><span>│   └── theme/</span></span>
<span class="line"><span>│       └── style.css           # Dashboard styling</span></span>
<span class="line"><span>└── [existing structure...]</span></span></code></pre></div><h3 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h3><p><strong>repos.json</strong> (set once):</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;https://github.com/johndoe/cp115-python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;https://github.com/janesmith/cp115-python&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;https://github.com/bobwilson/cp115-python&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="student-repository-structure" tabindex="-1">Student Repository Structure <a class="header-anchor" href="#student-repository-structure" aria-label="Permalink to &quot;Student Repository Structure&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>student-repo/</span></span>
<span class="line"><span>├── lab-01/main.py</span></span>
<span class="line"><span>├── lab-02/main.py  </span></span>
<span class="line"><span>├── lab-07/main.py       # Fetched when lab-07 selected</span></span>
<span class="line"><span>└── assignment-3/main.py</span></span></code></pre></div><h3 id="teacher-test-repository-structure" tabindex="-1">Teacher Test Repository Structure <a class="header-anchor" href="#teacher-test-repository-structure" aria-label="Permalink to &quot;Teacher Test Repository Structure&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>teacher-test-repo/</span></span>
<span class="line"><span>├── lab-01-tests.py</span></span>
<span class="line"><span>├── lab-02-tests.py</span></span>
<span class="line"><span>├── lab-07-tests.py      # Fetched when lab-07 selected</span></span>
<span class="line"><span>└── assignment-3-tests.py</span></span></code></pre></div><h2 id="system-flow" tabindex="-1">System Flow <a class="header-anchor" href="#system-flow" aria-label="Permalink to &quot;System Flow&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─── USER OPENS DASHBOARD ───┐</span></span>
<span class="line"><span>│                            │</span></span>
<span class="line"><span>│  1. Load /dashboard page   │</span></span>
<span class="line"><span>│  2. Read repos.json        │</span></span>
<span class="line"><span>│     [&quot;github.com/user1/...&quot;,│</span></span>
<span class="line"><span>│      &quot;github.com/user2/...&quot;]│</span></span>
<span class="line"><span>└────────────┬───────────────┘</span></span>
<span class="line"><span>             │</span></span>
<span class="line"><span>             ▼</span></span>
<span class="line"><span>┌─── FOR EACH REPO URL ──────┐</span></span>
<span class="line"><span>│                            │</span></span>
<span class="line"><span>│  3. Parse URL → extract:   │</span></span>
<span class="line"><span>│     - username             │</span></span>
<span class="line"><span>│     - repo name            │</span></span>
<span class="line"><span>│  4. GitHub API call:       │</span></span>
<span class="line"><span>│     GET /repos/{user}/{repo}│</span></span>
<span class="line"><span>│     → Get repo info + name │</span></span>
<span class="line"><span>└────────────┬───────────────┘</span></span>
<span class="line"><span>             │</span></span>
<span class="line"><span>             ▼</span></span>
<span class="line"><span>┌─── DISPLAY STUDENT LIST ───┐</span></span>
<span class="line"><span>│                            │</span></span>
<span class="line"><span>│  5. Show table:            │</span></span>
<span class="line"><span>│     - Student name         │</span></span>
<span class="line"><span>│     - Repo link            │</span></span>
<span class="line"><span>│     - [View Code] button   │</span></span>
<span class="line"><span>└────────────┬───────────────┘</span></span>
<span class="line"><span>             │</span></span>
<span class="line"><span>             ▼</span></span>
<span class="line"><span>┌─── WHEN USER CLICKS VIEW ──┐</span></span>
<span class="line"><span>│                            │</span></span>
<span class="line"><span>│  6. GitHub API calls:      │</span></span>
<span class="line"><span>│     • Fetch student code   │</span></span>
<span class="line"><span>│       GET /repos/{user}/{repo}/contents/{assignment}/main.py</span></span>
<span class="line"><span>│     • Fetch YOUR tests     │</span></span>
<span class="line"><span>│       GET /repos/{teacher}/{test-repo}/contents/{assignment}-tests.py</span></span>
<span class="line"><span>└────────────┬───────────────┘</span></span>
<span class="line"><span>             │</span></span>
<span class="line"><span>             ▼</span></span>
<span class="line"><span>┌─── RUN TESTS IN BROWSER ───┐</span></span>
<span class="line"><span>│                            │</span></span>
<span class="line"><span>│  7. Load Pyodide           │</span></span>
<span class="line"><span>│  8. Execute in browser:    │</span></span>
<span class="line"><span>│     pyodide.runPython(\`    │</span></span>
<span class="line"><span>│       \${studentCode}       │</span></span>
<span class="line"><span>│       \${teacherTests}      │</span></span>
<span class="line"><span>│     \`)                     │</span></span>
<span class="line"><span>│  9. Capture results        │</span></span>
<span class="line"><span>└────────────┬───────────────┘</span></span>
<span class="line"><span>             │</span></span>
<span class="line"><span>             ▼</span></span>
<span class="line"><span>┌─── DISPLAY RESULTS ────────┐</span></span>
<span class="line"><span>│                            │</span></span>
<span class="line"><span>│ 10. Show side-by-side:     │</span></span>
<span class="line"><span>│     • Student code         │</span></span>
<span class="line"><span>│     • Test results         │</span></span>
<span class="line"><span>│     • Pass/fail status     │</span></span>
<span class="line"><span>│     • Execution output     │</span></span>
<span class="line"><span>└────────────────────────────┘</span></span></code></pre></div><h2 id="file-fetching-logic" tabindex="-1">File Fetching Logic <a class="header-anchor" href="#file-fetching-logic" aria-label="Permalink to &quot;File Fetching Logic&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Extract assignment from dropdown selection</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> assignment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;lab-07&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Auto-generate file paths</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> studentFile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assignment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/main.py\`</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   // → &quot;lab-07/main.py&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> testFile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">assignment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}-tests.py\`</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     // → &quot;lab-07-tests.py&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Fetch from GitHub API</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> studentCode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchFromGitHub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(studentRepo, studentFile)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> testCode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchFromGitHub</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(teacherRepo, testFile)</span></span></code></pre></div><h2 id="dashboard-ui-layout" tabindex="-1">Dashboard UI Layout <a class="header-anchor" href="#dashboard-ui-layout" aria-label="Permalink to &quot;Dashboard UI Layout&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─────────────────────────────────────────────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  🎓 CP115 Live Grading Dashboard                                                               │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│                                                                                               │</span></span>
<span class="line"><span>│  ⚙️ ASSIGNMENT SETTINGS                                                                        │  </span></span>
<span class="line"><span>│  ┌─────────────────────────────────────────────────────────────────────────────────────────┐ │</span></span>
<span class="line"><span>│  │ Assignment: [Lab-07 ▼] │ Student File: [main.py] │ Teacher Repo: [mike-cp115/tests] │ │</span></span>
<span class="line"><span>│  │                                                                                         │ │</span></span>
<span class="line"><span>│  │ • Lab-01                 Fetches: lab-07/main.py   Fetches: lab-07-tests.py          │ │</span></span>
<span class="line"><span>│  │ • Lab-02                 from each student repo    from your test repo               │ │</span></span>
<span class="line"><span>│  │ • Lab-07 ✓                                                                           │ │</span></span>
<span class="line"><span>│  │ • Assignment-3                                                                       │ │</span></span>
<span class="line"><span>│  │ • Final-Project                                                                      │ │</span></span>
<span class="line"><span>│  └─────────────────────────────────────────────────────────────────────────────────────────┘ │</span></span>
<span class="line"><span>│                                                                                               │</span></span>
<span class="line"><span>│  📋 STUDENT SUBMISSIONS (repos.json loaded once)                                             │</span></span>
<span class="line"><span>│  ┌─────────────┬────────────────────────────┬──────────────┬────────────────────────────────┐ │</span></span>
<span class="line"><span>│  │ Student     │ GitHub Repo                │ Status       │ Actions                        │ │</span></span>
<span class="line"><span>│  ├─────────────┼────────────────────────────┼──────────────┼────────────────────────────────┤ │</span></span>
<span class="line"><span>│  │ 👤 John Doe  │ johndoe/cp115-python      │ 🔄 Loading... │ [📖 View Code &amp; Test]         │ │</span></span>
<span class="line"><span>│  │ 👤 Jane Smith│ janesmith/cp115-python    │ ❌ 3/10 (30%) │ [📖 View Code &amp; Test]         │ │</span></span>
<span class="line"><span>│  │ 👤 Bob Wilson│ bobwilson/cp115-python    │ ✅ 9/10 (90%) │ [📖 View Code &amp; Test]         │ │</span></span>
<span class="line"><span>│  └─────────────┴────────────────────────────┴──────────────┴────────────────────────────────┘ │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="detailed-student-view" tabindex="-1">Detailed Student View <a class="header-anchor" href="#detailed-student-view" aria-label="Permalink to &quot;Detailed Student View&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌─── DETAILED VIEW: Jane Smith&#39;s Lab-07 ─────────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  👤 Jane Smith │ 📂 janesmith/cp115-python/lab-07/main.py │ ❌ 3/10 Tests │ 🔗 GitHub    │</span></span>
<span class="line"><span>├─────────────────────────────────────────────────────────────────────────────────────────────┤</span></span>
<span class="line"><span>│                                                                                             │</span></span>
<span class="line"><span>│  ┌─── 📁 FETCHED CODE ─────────────────────┬─── 🧪 LIVE TEST RESULTS ─────────────────────┐ │</span></span>
<span class="line"><span>│  │                                         │                                              │ │</span></span>
<span class="line"><span>│  │ # lab-07/main.py                        │ Running: lab-07-tests.py                     │ │</span></span>
<span class="line"><span>│  │                                         │                                              │ │</span></span>
<span class="line"><span>│  │  1  def calculate_average(nums):        │ Test 1: ✅ Basic average                     │ │</span></span>
<span class="line"><span>│  │  2      if not nums:                    │ Test 2: ❌ Empty list (got None, want 0)    │ │</span></span>
<span class="line"><span>│  │  3          return 0                    │ Test 3: ✅ Single number                     │ │</span></span>
<span class="line"><span>│  │  4      return sum(nums) / len(nums)    │ Test 4: ❌ Large numbers                     │ │</span></span>
<span class="line"><span>│  │  5                                      │ Test 5: ✅ Negative numbers                  │ │</span></span>
<span class="line"><span>│  │  6  def find_maximum(numbers):          │ ...                                          │ │</span></span>
<span class="line"><span>│  │  7      if not numbers:                 │                                              │ │</span></span>
<span class="line"><span>│  │  8          return None  # ❌ BUG!      │ 🐍 Pyodide Output:                          │ │</span></span>
<span class="line"><span>│  │  9      return max(numbers)             │ &gt;&gt;&gt; calculate_average([])                    │ │</span></span>
<span class="line"><span>│  │ 10                                      │ None ❌ Expected: 0                          │ │</span></span>
<span class="line"><span>│  │ 11  # More code...                      │ &gt;&gt;&gt; find_maximum([1,2,3])                   │ │</span></span>
<span class="line"><span>│  │                                         │ 3 ✅                                        │ │</span></span>
<span class="line"><span>│  └─────────────────────────────────────────┴──────────────────────────────────────────────┘ │</span></span>
<span class="line"><span>│                                                                                             │</span></span>
<span class="line"><span>│  [🔄 Re-run Tests] [📁 Open GitHub] [📝 Add Comments]                                      │</span></span>
<span class="line"><span>└─────────────────────────────────────────────────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="key-features" tabindex="-1">Key Features <a class="header-anchor" href="#key-features" aria-label="Permalink to &quot;Key Features&quot;">​</a></h2><h3 id="runtime-data-fetching" tabindex="-1">Runtime Data Fetching <a class="header-anchor" href="#runtime-data-fetching" aria-label="Permalink to &quot;Runtime Data Fetching&quot;">​</a></h3><ul><li><strong>Student code</strong>: Fetched from GitHub API at runtime</li><li><strong>Test code</strong>: Fetched from teacher&#39;s test repository at runtime</li><li><strong>No local storage</strong>: Everything pulled fresh from GitHub</li><li><strong>Dynamic assignment selection</strong>: Change assignments via dropdown</li></ul><h3 id="browser-based-execution" tabindex="-1">Browser-based Execution <a class="header-anchor" href="#browser-based-execution" aria-label="Permalink to &quot;Browser-based Execution&quot;">​</a></h3><ul><li><strong>Pyodide</strong>: Full Python runtime in browser</li><li><strong>No server required</strong>: All code execution client-side</li><li><strong>Live results</strong>: Immediate feedback as tests run</li><li><strong>Safe execution</strong>: Sandboxed environment</li></ul><h3 id="user-experience" tabindex="-1">User Experience <a class="header-anchor" href="#user-experience" aria-label="Permalink to &quot;User Experience&quot;">​</a></h3><ul><li><strong>One-time setup</strong>: Set repos.json once at semester start</li><li><strong>Weekly workflow</strong>: Select assignment, all submissions load automatically</li><li><strong>Visual feedback</strong>: Color-coded test results and progress indicators</li><li><strong>Direct links</strong>: Jump to GitHub repos for detailed review</li></ul><h2 id="technical-stack" tabindex="-1">Technical Stack <a class="header-anchor" href="#technical-stack" aria-label="Permalink to &quot;Technical Stack&quot;">​</a></h2><ul><li><strong>VitePress</strong>: Documentation framework (existing)</li><li><strong>Vue.js</strong>: Frontend components</li><li><strong>Pyodide</strong>: Python runtime in browser</li><li><strong>GitHub API</strong>: Code and repository data fetching</li><li><strong>CSS Grid/Flexbox</strong>: Responsive layout</li></ul><h2 id="implementation-phases" tabindex="-1">Implementation Phases <a class="header-anchor" href="#implementation-phases" aria-label="Permalink to &quot;Implementation Phases&quot;">​</a></h2><h3 id="phase-1-basic-structure" tabindex="-1">Phase 1: Basic Structure <a class="header-anchor" href="#phase-1-basic-structure" aria-label="Permalink to &quot;Phase 1: Basic Structure&quot;">​</a></h3><ul><li>Create dashboard folder structure</li><li>Set up basic Vue components</li><li>Add navigation to VitePress</li></ul><h3 id="phase-2-github-integration" tabindex="-1">Phase 2: GitHub Integration <a class="header-anchor" href="#phase-2-github-integration" aria-label="Permalink to &quot;Phase 2: GitHub Integration&quot;">​</a></h3><ul><li>Implement GitHub API fetching</li><li>Create student list from repos.json</li><li>Display basic repository information</li></ul><h3 id="phase-3-code-display" tabindex="-1">Phase 3: Code Display <a class="header-anchor" href="#phase-3-code-display" aria-label="Permalink to &quot;Phase 3: Code Display&quot;">​</a></h3><ul><li>Add syntax highlighting for Python code</li><li>Create code viewer component</li><li>Implement assignment selection logic</li></ul><h3 id="phase-4-pyodide-integration" tabindex="-1">Phase 4: Pyodide Integration <a class="header-anchor" href="#phase-4-pyodide-integration" aria-label="Permalink to &quot;Phase 4: Pyodide Integration&quot;">​</a></h3><ul><li>Load Python runtime in browser</li><li>Execute student code with tests</li><li>Display results and feedback</li></ul><h3 id="phase-5-polish-features" tabindex="-1">Phase 5: Polish &amp; Features <a class="header-anchor" href="#phase-5-polish-features" aria-label="Permalink to &quot;Phase 5: Polish &amp; Features&quot;">​</a></h3><ul><li>Enhanced UI/UX</li><li>Error handling</li><li>Performance optimization</li><li>Additional features (comments, grading, etc.)</li></ul><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><h3 id="for-teachers" tabindex="-1">For Teachers <a class="header-anchor" href="#for-teachers" aria-label="Permalink to &quot;For Teachers&quot;">​</a></h3><ul><li><strong>Time saving</strong>: No manual repo browsing</li><li><strong>Instant feedback</strong>: See all submissions and results immediately</li><li><strong>Flexible</strong>: Easy to switch between assignments</li><li><strong>Comprehensive</strong>: View code, tests, and results in one place</li></ul><h3 id="for-students" tabindex="-1">For Students <a class="header-anchor" href="#for-students" aria-label="Permalink to &quot;For Students&quot;">​</a></h3><ul><li><strong>Simple setup</strong>: Just provide GitHub repo once</li><li><strong>Standard workflow</strong>: Same repository structure for all assignments</li><li><strong>Transparency</strong>: Can see their own results if desired</li></ul><h3 id="technical-benefits" tabindex="-1">Technical Benefits <a class="header-anchor" href="#technical-benefits" aria-label="Permalink to &quot;Technical Benefits&quot;">​</a></h3><ul><li><strong>No server costs</strong>: Everything runs client-side</li><li><strong>Real-time</strong>: Fresh data from GitHub every time</li><li><strong>Scalable</strong>: Works with any number of students</li><li><strong>Maintainable</strong>: Simple architecture, easy to modify</li></ul><h2 id="complexity-assessment" tabindex="-1">Complexity Assessment <a class="header-anchor" href="#complexity-assessment" aria-label="Permalink to &quot;Complexity Assessment&quot;">​</a></h2><ul><li><strong>Frontend</strong>: Medium complexity (Vue.js components, API integration)</li><li><strong>Pyodide</strong>: Low-medium complexity (well-documented Python runtime)</li><li><strong>GitHub API</strong>: Low complexity (standard REST API calls)</li><li><strong>Overall</strong>: Manageable project with clear implementation path</li></ul><p><strong>Development Time Estimate</strong>: 1-2 weeks for full implementation</p>`,53)]))}const g=a(t,[["render",p]]);export{u as __pageData,g as default};
