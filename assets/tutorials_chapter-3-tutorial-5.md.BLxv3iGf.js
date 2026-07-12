import{_ as l,C as i,o,c as r,j as s,a,G as p,a3 as t}from"./chunks/framework.DBrjlGeB.js";const d="/Python-Programming/assets/c3t5-1.C5cSRf7U.png",R=JSON.parse('{"title":"Chapter 3 - Tutorial 5","description":"","frontmatter":{"title":"Chapter 3 - Tutorial 5","outline":"deep"},"headers":[],"relativePath":"tutorials/chapter-3-tutorial-5.md","filePath":"tutorials/chapter-3-tutorial-5.md"}'),u={name:"tutorials/chapter-3-tutorial-5.md"},c={id:"pseudocode-indentation-rules",tabindex:"-1"},g={id:"exercise-1",tabindex:"-1"},h={id:"exercise-2",tabindex:"-1"},I={id:"exercise-3",tabindex:"-1"},b={id:"exercise-4",tabindex:"-1"},E={id:"exercise-5",tabindex:"-1"};function v(T,n,N,q,m,P){const e=i("Badge");return o(),r("div",null,[n[18]||(n[18]=s("h1",{id:"chapter-3-tutorial-5",tabindex:"-1"},[a("Chapter 3 - Tutorial 5 "),s("a",{class:"header-anchor",href:"#chapter-3-tutorial-5","aria-label":'Permalink to "Chapter 3 - Tutorial 5"'},"​")],-1)),s("h2",c,[n[0]||(n[0]=a("Pseudocode Indentation Rules ",-1)),p(e,{type:"warning",text:"Recall"}),n[1]||(n[1]=a()),n[2]||(n[2]=s("a",{class:"header-anchor",href:"#pseudocode-indentation-rules","aria-label":'Permalink to "Pseudocode Indentation Rules <Badge type="warning" text="Recall" />"'},"​",-1))]),n[19]||(n[19]=t(`<h3 id="if-statement-indentation-rules" tabindex="-1">IF Statement Indentation Rules <a class="header-anchor" href="#if-statement-indentation-rules" aria-label="Permalink to &quot;IF Statement Indentation Rules&quot;">​</a></h3><p><strong>Rule 1: ALL statements inside an IF block MUST be indented</strong></p><p><strong>CORRECT - Statements inside IF are indented:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN</span></span>
<span class="line"><span>    READ age</span></span>
<span class="line"><span>    IF age &gt;= 18 THEN</span></span>
<span class="line"><span>        PRINT &quot;You are eligible to vote&quot;</span></span>
<span class="line"><span>        PRINT &quot;Please bring your ID&quot;</span></span>
<span class="line"><span>        PRINT &quot;Voting booth is open&quot;</span></span>
<span class="line"><span>    ENDIF</span></span>
<span class="line"><span>    PRINT &quot;Thank you&quot;</span></span>
<span class="line"><span>END</span></span></code></pre></div><p><strong>WRONG - No indentation inside IF:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN</span></span>
<span class="line"><span>    READ age</span></span>
<span class="line"><span>    IF age &gt;= 18 THEN</span></span>
<span class="line"><span>    PRINT &quot;You are eligible to vote&quot;</span></span>
<span class="line"><span>    PRINT &quot;Please bring your ID&quot;</span></span>
<span class="line"><span>    PRINT &quot;Voting booth is open&quot;</span></span>
<span class="line"><span>    ENDIF</span></span>
<span class="line"><span>    PRINT &quot;Thank you&quot;</span></span>
<span class="line"><span>END</span></span></code></pre></div><p><strong>Rule 2: IF-ELSE statements require proper indentation for BOTH parts</strong></p><p><strong>CORRECT - Both IF and ELSE parts indented:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN</span></span>
<span class="line"><span>    READ score</span></span>
<span class="line"><span>    IF score &gt;= 80 THEN</span></span>
<span class="line"><span>        PRINT &quot;Excellent! You passed with distinction&quot;</span></span>
<span class="line"><span>        grade = &quot;A&quot;</span></span>
<span class="line"><span>    ELSE</span></span>
<span class="line"><span>        PRINT &quot;You need to improve&quot;</span></span>
<span class="line"><span>        grade = &quot;F&quot;</span></span>
<span class="line"><span>    ENDIF</span></span>
<span class="line"><span>    PRINT &quot;Your grade is: &quot; + grade</span></span>
<span class="line"><span>END</span></span></code></pre></div><p><strong>WRONG - Inconsistent indentation:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN</span></span>
<span class="line"><span>    READ score</span></span>
<span class="line"><span>    IF score &gt;= 80 THEN</span></span>
<span class="line"><span>        PRINT &quot;Excellent! You passed with distinction&quot;</span></span>
<span class="line"><span>    grade = &quot;A&quot;</span></span>
<span class="line"><span>    ELSE</span></span>
<span class="line"><span>        PRINT &quot;You need to improve&quot;</span></span>
<span class="line"><span>        grade = &quot;F&quot;</span></span>
<span class="line"><span>    ENDIF</span></span>
<span class="line"><span>    PRINT &quot;Your grade is: &quot; + grade</span></span>
<span class="line"><span>END</span></span></code></pre></div><h3 id="while-loop-indentation-rules" tabindex="-1">WHILE Loop Indentation Rules <a class="header-anchor" href="#while-loop-indentation-rules" aria-label="Permalink to &quot;WHILE Loop Indentation Rules&quot;">​</a></h3><p><strong>Rule 3: ALL statements inside a WHILE loop MUST be indented</strong></p><p><strong>CORRECT - Loop body properly indented:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN</span></span>
<span class="line"><span>    counter = 1</span></span>
<span class="line"><span>    WHILE counter &lt;= 5 DO</span></span>
<span class="line"><span>        PRINT &quot;Count: &quot; + counter</span></span>
<span class="line"><span>        counter = counter + 1</span></span>
<span class="line"><span>        PRINT &quot;Next iteration coming...&quot;</span></span>
<span class="line"><span>    ENDWHILE</span></span>
<span class="line"><span>    PRINT &quot;Loop finished&quot;</span></span>
<span class="line"><span>END</span></span></code></pre></div><p><strong>WRONG - Loop body not indented:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN</span></span>
<span class="line"><span>    counter = 1</span></span>
<span class="line"><span>    WHILE counter &lt;= 5 DO</span></span>
<span class="line"><span>    PRINT &quot;Count: &quot; + counter</span></span>
<span class="line"><span>    counter = counter + 1</span></span>
<span class="line"><span>    PRINT &quot;Next iteration coming...&quot;</span></span>
<span class="line"><span>    ENDWHILE</span></span>
<span class="line"><span>    PRINT &quot;Loop finished&quot;</span></span>
<span class="line"><span>END</span></span></code></pre></div><h3 id="nested-structures-double-indentation" tabindex="-1">Nested Structures - Double Indentation <a class="header-anchor" href="#nested-structures-double-indentation" aria-label="Permalink to &quot;Nested Structures - Double Indentation&quot;">​</a></h3><p><strong>Rule 4: Nested IF inside WHILE requires DOUBLE indentation</strong></p><p><strong>CORRECT - Nested IF properly indented:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN</span></span>
<span class="line"><span>    num = 1</span></span>
<span class="line"><span>    WHILE num &lt;= 10 DO</span></span>
<span class="line"><span>        IF num % 2 = 0 THEN</span></span>
<span class="line"><span>            PRINT num + &quot; is even&quot;</span></span>
<span class="line"><span>        ELSE</span></span>
<span class="line"><span>            PRINT num + &quot; is odd&quot;</span></span>
<span class="line"><span>        ENDIF</span></span>
<span class="line"><span>        num = num + 1</span></span>
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
<span class="line"><span>        value = value - 1      ← Level 2 (Inside WHILE)</span></span>
<span class="line"><span>    ENDWHILE                   ← Level 1 (Closes WHILE)</span></span>
<span class="line"><span>    PRINT &quot;Done&quot;               ← Level 1 (After WHILE)</span></span>
<span class="line"><span>END                            ← Level 0 (Closes BEGIN)</span></span></code></pre></div>`,23)),s("h2",g,[n[3]||(n[3]=a("Exercise 1 ",-1)),p(e,{type:"warning",text:"Task"}),n[4]||(n[4]=a()),n[5]||(n[5]=s("a",{class:"header-anchor",href:"#exercise-1","aria-label":'Permalink to "Exercise 1 <Badge type="warning" text="Task" />"'},"​",-1))]),n[20]||(n[20]=t(`<p>Convert the below pseudocode into a flowchart and IPO table.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Start</span></span>
<span class="line"><span>       read usage</span></span>
<span class="line"><span>       if usage &lt;= 1000</span></span>
<span class="line"><span>            charge = usage x 0.20</span></span>
<span class="line"><span>       else </span></span>
<span class="line"><span>            charge = (1000 x 0.20 ) +   </span></span>
<span class="line"><span>            ((usage - 1000) x 0.10)</span></span>
<span class="line"><span>       end if </span></span>
<span class="line"><span>      print charge</span></span>
<span class="line"><span>Stop</span></span></code></pre></div>`,2)),s("h2",h,[n[6]||(n[6]=a("Exercise 2 ",-1)),p(e,{type:"warning",text:"Task"}),n[7]||(n[7]=a()),n[8]||(n[8]=s("a",{class:"header-anchor",href:"#exercise-2","aria-label":'Permalink to "Exercise 2 <Badge type="warning" text="Task" />"'},"​",-1))]),n[21]||(n[21]=t('<p>Convert the below IPO table into a flowchart and pseudocode.</p><table tabindex="0"><thead><tr><th><strong>INPUT</strong></th><th><strong>PROCESS</strong></th><th><strong>OUTPUT</strong></th></tr></thead><tbody><tr><td>number for 5 times</td><td>repeat determine largest based on number for 5 times</td><td>largest</td></tr></tbody></table>',2)),s("h2",I,[n[9]||(n[9]=a("Exercise 3 ",-1)),p(e,{type:"warning",text:"Task"}),n[10]||(n[10]=a()),n[11]||(n[11]=s("a",{class:"header-anchor",href:"#exercise-3","aria-label":'Permalink to "Exercise 3 <Badge type="warning" text="Task" />"'},"​",-1))]),n[22]||(n[22]=s("p",null,"Convert the below flowchart into an IPO table and pseudocode.",-1)),n[23]||(n[23]=s("p",{align:"center"},[s("img",{src:d,alt:"drawing",width:"300"})],-1)),s("h2",b,[n[12]||(n[12]=a("Exercise 4 ",-1)),p(e,{type:"warning",text:"Task"}),n[13]||(n[13]=a()),n[14]||(n[14]=s("a",{class:"header-anchor",href:"#exercise-4","aria-label":'Permalink to "Exercise 4 <Badge type="warning" text="Task" />"'},"​",-1))]),n[24]||(n[24]=t(`<p>Convert the following pseudocode into a flowchart and IPO</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Start</span></span>
<span class="line"><span>    read temperature</span></span>
<span class="line"><span>    count = 0</span></span>
<span class="line"><span>    while temperature != -999</span></span>
<span class="line"><span>        if temperature &gt; 30</span></span>
<span class="line"><span>            print &quot;Hot day&quot;</span></span>
<span class="line"><span>            count = count + 1</span></span>
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
<span class="line"><span>Stop</span></span></code></pre></div>`,2)),s("h2",E,[n[15]||(n[15]=a("Exercise 5 ",-1)),p(e,{type:"warning",text:"Task"}),n[16]||(n[16]=a()),n[17]||(n[17]=s("a",{class:"header-anchor",href:"#exercise-5","aria-label":'Permalink to "Exercise 5 <Badge type="warning" text="Task" />"'},"​",-1))]),n[25]||(n[25]=t(`<p>Given the following pseudocode, create an IPO table and flowchart.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>BEGIN</span></span>
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
<span class="line"><span>END</span></span></code></pre></div>`,2))])}const k=l(u,[["render",v]]);export{R as __pageData,k as default};
