import{_ as l,C as i,c as o,o as r,j as s,ag as p,a,G as t}from"./chunks/framework.CELCRrnN.js";const d="/Python-Programming/assets/c3t5-1.C5cSRf7U.png",C=JSON.parse('{"title":"Chapter 3 - Tutorial 5","description":"","frontmatter":{"title":"Chapter 3 - Tutorial 5","outline":"deep"},"headers":[],"relativePath":"tutorials/chapter-3-tutorial-5.md","filePath":"tutorials/chapter-3-tutorial-5.md"}'),u={name:"tutorials/chapter-3-tutorial-5.md"},c={id:"creating-the-ipo-table",tabindex:"-1"},g={id:"creating-the-flowchart",tabindex:"-1"},h={id:"pseudocode-indentation-rules",tabindex:"-1"},b={id:"exercise-1",tabindex:"-1"},T={id:"exercise-2",tabindex:"-1"},E={id:"exercise-3",tabindex:"-1"},I={id:"exercise-4",tabindex:"-1"},m={id:"exercise-5",tabindex:"-1"};function N(q,n,P,v,x,R){const e=i("Badge");return r(),o("div",null,[n[24]||(n[24]=s("h1",{id:"chapter-3-tutorial-5",tabindex:"-1"},[a("Chapter 3 - Tutorial 5 "),s("a",{class:"header-anchor",href:"#chapter-3-tutorial-5","aria-label":'Permalink to "Chapter 3 - Tutorial 5"'},"​")],-1)),s("h2",c,[n[0]||(n[0]=a("Creating The IPO Table ",-1)),t(e,{type:"warning",text:"Recall"}),n[1]||(n[1]=a()),n[2]||(n[2]=s("a",{class:"header-anchor",href:"#creating-the-ipo-table","aria-label":'Permalink to "Creating The IPO Table <Badge type="warning" text="Recall" />"'},"​",-1))]),n[25]||(n[25]=p('<table tabindex="0"><thead><tr><th>Phase</th><th>Practical Meaning</th><th>Typical Keywords (in the problem text)</th></tr></thead><tbody><tr><td><strong>Input</strong></td><td>Data accepted from the user  always <em>nouns</em>, never actions. <strong>NEVER USE VERB.</strong> <br><br>Suggested structure: <br><br> <strong>Counter-controlled</strong> : input_name for x times <br> <strong>Sentinel</strong> : input_name for x times until condition is true</td><td>enter, read, get</td></tr><tr><td><strong>Process</strong></td><td>Operations applied to the inputs  arithmetic, decisions, loops. Each item should begin with a <strong>verb</strong>.<br><br> The suggested structure for <strong>repetition</strong> question is: <br><br> Counter-controlled : repeat VERB + OUTPUT + BASED ON INPUT AND CONSTANT for x times <br><br> Sentinel : repeat VERB + OUTPUT + BASED ON INPUT AND CONSTANT for x times until condition is true</td><td>calculate, compute, determine, if, while, repeat</td></tr><tr><td><strong>Output</strong></td><td>The result delivered to the user or another system  again <em>nouns</em> or messages. <strong>NEVER USE VERB.</strong> <br><br>Suggested structure: <br><br> input_name for x times (if necessary) <br><br> or <br><br> input_name for x times until condition is true (if necessary)</td><td>display, print, show</td></tr></tbody></table>',1)),s("h2",g,[n[3]||(n[3]=a("Creating The Flowchart ",-1)),t(e,{type:"warning",text:"Recall"}),n[4]||(n[4]=a()),n[5]||(n[5]=s("a",{class:"header-anchor",href:"#creating-the-flowchart","aria-label":'Permalink to "Creating The Flowchart <Badge type="warning" text="Recall" />"'},"​",-1))]),n[26]||(n[26]=p('<table tabindex="0"><thead><tr><th>Shape</th><th>Usage</th><th>Tips</th></tr></thead><tbody><tr><td>Oval</td><td>Start/End</td><td>All shapes are required to be connected with arrows; be aware of the direction</td></tr><tr><td>Rectangle</td><td>Process</td><td>All processes are assignment operations (=)</td></tr><tr><td>Diamond</td><td>Decision/Selection</td><td>All decisions must be evaluated to <code>True</code> or <code>False</code></td></tr><tr><td>Parallelogram</td><td>Input/Output</td><td>Place Input shapes at the beginning, Output shapes at the end</td></tr></tbody></table><hr>',2)),s("h2",h,[n[6]||(n[6]=a("Pseudocode Indentation Rules ",-1)),t(e,{type:"warning",text:"Recall"}),n[7]||(n[7]=a()),n[8]||(n[8]=s("a",{class:"header-anchor",href:"#pseudocode-indentation-rules","aria-label":'Permalink to "Pseudocode Indentation Rules <Badge type="warning" text="Recall" />"'},"​",-1))]),n[27]||(n[27]=p(`<h3 id="if-statement-indentation-rules" tabindex="-1">IF Statement Indentation Rules <a class="header-anchor" href="#if-statement-indentation-rules" aria-label="Permalink to &quot;IF Statement Indentation Rules&quot;">​</a></h3><p><strong>Rule 1: ALL statements inside an IF block MUST be indented</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ CORRECT - Statements inside IF are indented:</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>    READ age</span></span>
<span class="line"><span>    IF age &gt;= 18 THEN</span></span>
<span class="line"><span>        PRINT &quot;You are eligible to vote&quot;</span></span>
<span class="line"><span>        PRINT &quot;Please bring your ID&quot;</span></span>
<span class="line"><span>        PRINT &quot;Voting booth is open&quot;</span></span>
<span class="line"><span>    ENDIF</span></span>
<span class="line"><span>    PRINT &quot;Thank you&quot;</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span></span></span>
<span class="line"><span>❌ WRONG - No indentation inside IF:</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>    READ age</span></span>
<span class="line"><span>    IF age &gt;= 18 THEN</span></span>
<span class="line"><span>    PRINT &quot;You are eligible to vote&quot;</span></span>
<span class="line"><span>    PRINT &quot;Please bring your ID&quot;</span></span>
<span class="line"><span>    PRINT &quot;Voting booth is open&quot;</span></span>
<span class="line"><span>    ENDIF</span></span>
<span class="line"><span>    PRINT &quot;Thank you&quot;</span></span>
<span class="line"><span>END</span></span></code></pre></div><p><strong>Rule 2: IF-ELSE statements require proper indentation for BOTH parts</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ CORRECT - Both IF and ELSE parts indented:</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>    READ score</span></span>
<span class="line"><span>    IF score &gt;= 80 THEN</span></span>
<span class="line"><span>        PRINT &quot;Excellent! You passed with distinction&quot;</span></span>
<span class="line"><span>        SET grade = &quot;A&quot;</span></span>
<span class="line"><span>    ELSE</span></span>
<span class="line"><span>        PRINT &quot;You need to improve&quot;</span></span>
<span class="line"><span>        SET grade = &quot;F&quot;</span></span>
<span class="line"><span>    ENDIF</span></span>
<span class="line"><span>    PRINT &quot;Your grade is: &quot; + grade</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span></span></span>
<span class="line"><span>❌ WRONG - Inconsistent indentation:</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>    READ score</span></span>
<span class="line"><span>    IF score &gt;= 80 THEN</span></span>
<span class="line"><span>        PRINT &quot;Excellent! You passed with distinction&quot;</span></span>
<span class="line"><span>    SET grade = &quot;A&quot;</span></span>
<span class="line"><span>    ELSE</span></span>
<span class="line"><span>        PRINT &quot;You need to improve&quot;</span></span>
<span class="line"><span>        SET grade = &quot;F&quot;</span></span>
<span class="line"><span>    ENDIF</span></span>
<span class="line"><span>    PRINT &quot;Your grade is: &quot; + grade</span></span>
<span class="line"><span>END</span></span></code></pre></div><h3 id="while-loop-indentation-rules" tabindex="-1">WHILE Loop Indentation Rules <a class="header-anchor" href="#while-loop-indentation-rules" aria-label="Permalink to &quot;WHILE Loop Indentation Rules&quot;">​</a></h3><p><strong>Rule 3: ALL statements inside a WHILE loop MUST be indented</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ CORRECT - Loop body properly indented:</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>    SET counter = 1</span></span>
<span class="line"><span>    WHILE counter &lt;= 5 DO</span></span>
<span class="line"><span>        PRINT &quot;Count: &quot; + counter</span></span>
<span class="line"><span>        SET counter = counter + 1</span></span>
<span class="line"><span>        PRINT &quot;Next iteration coming...&quot;</span></span>
<span class="line"><span>    ENDWHILE</span></span>
<span class="line"><span>    PRINT &quot;Loop finished&quot;</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span></span></span>
<span class="line"><span>❌ WRONG - Loop body not indented:</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>    SET counter = 1</span></span>
<span class="line"><span>    WHILE counter &lt;= 5 DO</span></span>
<span class="line"><span>    PRINT &quot;Count: &quot; + counter</span></span>
<span class="line"><span>    SET counter = counter + 1</span></span>
<span class="line"><span>    PRINT &quot;Next iteration coming...&quot;</span></span>
<span class="line"><span>    ENDWHILE</span></span>
<span class="line"><span>    PRINT &quot;Loop finished&quot;</span></span>
<span class="line"><span>END</span></span></code></pre></div><h3 id="nested-structures-double-indentation" tabindex="-1">Nested Structures - Double Indentation <a class="header-anchor" href="#nested-structures-double-indentation" aria-label="Permalink to &quot;Nested Structures - Double Indentation&quot;">​</a></h3><p><strong>Rule 4: Nested IF inside WHILE requires DOUBLE indentation</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ CORRECT - Nested IF properly indented:</span></span>
<span class="line"><span>BEGIN</span></span>
<span class="line"><span>    SET num = 1</span></span>
<span class="line"><span>    WHILE num &lt;= 10 DO</span></span>
<span class="line"><span>        IF num % 2 = 0 THEN</span></span>
<span class="line"><span>            PRINT num + &quot; is even&quot;</span></span>
<span class="line"><span>        ELSE</span></span>
<span class="line"><span>            PRINT num + &quot; is odd&quot;</span></span>
<span class="line"><span>        ENDIF</span></span>
<span class="line"><span>        SET num = num + 1</span></span>
<span class="line"><span>    ENDWHILE</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Level 0: BEGIN/END (no indentation)</span></span>
<span class="line"><span>Level 1: WHILE body (4 spaces)</span></span>
<span class="line"><span>Level 2: IF/ELSE body (8 spaces)</span></span></code></pre></div><h3 id="visual-indentation-guide" tabindex="-1">Visual Indentation Guide <a class="header-anchor" href="#visual-indentation-guide" aria-label="Permalink to &quot;Visual Indentation Guide&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN                          ← Level 0 (No indentation)</span></span>
<span class="line"><span>    READ value                 ← Level 1 (Inside BEGIN block)</span></span>
<span class="line"><span>    WHILE value &gt; 0 DO         ← Level 1 (Same level as READ)</span></span>
<span class="line"><span>        PRINT &quot;Processing...&quot;  ← Level 2 (Inside WHILE)</span></span>
<span class="line"><span>        IF value &gt; 100 THEN    ← Level 2 (Same level as PRINT)</span></span>
<span class="line"><span>            PRINT &quot;Large&quot;      ← Level 3 (Inside IF)</span></span>
<span class="line"><span>        ELSE                   ← Level 2 (Same level as IF)</span></span>
<span class="line"><span>            PRINT &quot;Small&quot;      ← Level 3 (Inside ELSE)</span></span>
<span class="line"><span>        ENDIF                  ← Level 2 (Closes IF)</span></span>
<span class="line"><span>        SET value = value - 1  ← Level 2 (Inside WHILE)</span></span>
<span class="line"><span>    ENDWHILE                   ← Level 1 (Closes WHILE)</span></span>
<span class="line"><span>    PRINT &quot;Done&quot;               ← Level 1 (After WHILE)</span></span>
<span class="line"><span>END                            ← Level 0 (Closes BEGIN)</span></span></code></pre></div>`,13)),s("h2",b,[n[9]||(n[9]=a("Exercise 1 ",-1)),t(e,{type:"warning",text:"Task"}),n[10]||(n[10]=a()),n[11]||(n[11]=s("a",{class:"header-anchor",href:"#exercise-1","aria-label":'Permalink to "Exercise 1 <Badge type="warning" text="Task" />"'},"​",-1))]),n[28]||(n[28]=p(`<p>Convert the below pseudocode into a flowchart and IPO table.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Start</span></span>
<span class="line"><span>       read usage</span></span>
<span class="line"><span>       if usage &lt;= 1000</span></span>
<span class="line"><span>            charge = usage x 0.20</span></span>
<span class="line"><span>       else </span></span>
<span class="line"><span>            charge = (1000 x 0.20 ) +   </span></span>
<span class="line"><span>            ((usage - 1000) x 0.10)</span></span>
<span class="line"><span>       end if </span></span>
<span class="line"><span>      print charge</span></span>
<span class="line"><span>Stop</span></span></code></pre></div>`,2)),s("h2",T,[n[12]||(n[12]=a("Exercise 2 ",-1)),t(e,{type:"warning",text:"Task"}),n[13]||(n[13]=a()),n[14]||(n[14]=s("a",{class:"header-anchor",href:"#exercise-2","aria-label":'Permalink to "Exercise 2 <Badge type="warning" text="Task" />"'},"​",-1))]),n[29]||(n[29]=p('<p>Convert the below IPO table into a flowchart and pseudocode.</p><table tabindex="0"><thead><tr><th><strong>INPUT</strong></th><th><strong>PROCESS</strong></th><th><strong>OUTPUT</strong></th></tr></thead><tbody><tr><td>workout_minutes for 5 days</td><td>repeat determine daily_points based on workout_minutes for 5 times</td><td>total_points</td></tr><tr><td></td><td>repeat calculate total_points based on daily_points for 5 times</td><td></td></tr></tbody></table>',2)),s("h2",E,[n[15]||(n[15]=a("Exercise 3 ",-1)),t(e,{type:"warning",text:"Task"}),n[16]||(n[16]=a()),n[17]||(n[17]=s("a",{class:"header-anchor",href:"#exercise-3","aria-label":'Permalink to "Exercise 3 <Badge type="warning" text="Task" />"'},"​",-1))]),n[30]||(n[30]=s("p",null,"Convert the below flowchart into an IPO table and pseudocode.",-1)),n[31]||(n[31]=s("p",{align:"center"},[s("img",{src:d,alt:"drawing",width:"300"})],-1)),s("h2",I,[n[18]||(n[18]=a("Exercise 4 ",-1)),t(e,{type:"warning",text:"Task"}),n[19]||(n[19]=a()),n[20]||(n[20]=s("a",{class:"header-anchor",href:"#exercise-4","aria-label":'Permalink to "Exercise 4 <Badge type="warning" text="Task" />"'},"​",-1))]),n[32]||(n[32]=p(`<p>Convert the following pseudocode into a flowchart and IPO</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Start</span></span>
<span class="line"><span>    read temperature</span></span>
<span class="line"><span>    count = 0</span></span>
<span class="line"><span>    while temperature != -999</span></span>
<span class="line"><span>        if temperature &gt; 30</span></span>
<span class="line"><span>            print &quot;Hot day&quot;</span></span>
<span class="line"><span>            set count = count + 1</span></span>
<span class="line"><span>        else</span></span>
<span class="line"><span>            if temperature &lt; 10</span></span>
<span class="line"><span>                print &quot;Cold day&quot;</span></span>
<span class="line"><span>            else</span></span>
<span class="line"><span>                print &quot;Pleasant day&quot;</span></span>
<span class="line"><span>            end if</span></span>
<span class="line"><span>        end if</span></span>
<span class="line"><span>        read temperature</span></span>
<span class="line"><span>    end while</span></span>
<span class="line"><span>    print &quot;Number of hot days: &quot; + count</span></span>
<span class="line"><span>Stop</span></span></code></pre></div>`,2)),s("h2",m,[n[21]||(n[21]=a("Exercise 5 ",-1)),t(e,{type:"warning",text:"Task"}),n[22]||(n[22]=a()),n[23]||(n[23]=s("a",{class:"header-anchor",href:"#exercise-5","aria-label":'Permalink to "Exercise 5 <Badge type="warning" text="Task" />"'},"​",-1))]),n[33]||(n[33]=p(`<p>Given the following pseudocode, create an IPO table and flowchart.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN</span></span>
<span class="line"><span>      total = 0</span></span>
<span class="line"><span>      read score</span></span>
<span class="line"><span>      while score != 0</span></span>
<span class="line"><span>          if score &gt;= 80</span></span>
<span class="line"><span>              print &quot;Pass&quot;</span></span>
<span class="line"><span>          else</span></span>
<span class="line"><span>              print &quot;Fail&quot;</span></span>
<span class="line"><span>          endif</span></span>
<span class="line"><span>          total = total + score</span></span>
<span class="line"><span>          read score</span></span>
<span class="line"><span>      endwhile</span></span>
<span class="line"><span>      print &quot;Total: &quot; + total</span></span>
<span class="line"><span>END</span></span></code></pre></div>`,2))])}const y=l(u,[["render",N]]);export{C as __pageData,y as default};
