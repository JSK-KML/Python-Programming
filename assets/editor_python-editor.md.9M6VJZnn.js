import{_ as C,C as x,c as v,o as T,j as i,ag as _,a as f,G as I}from"./chunks/framework.DS1FxSjF.js";if(typeof window<"u"){let a=function(){return new Promise(e=>{if(window.require&&window.monaco){e();return}const t=document.createElement("script");t.src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js",t.onload=()=>{setTimeout(e,100)},document.head.appendChild(t)})},d=function(){return new Promise((e,t)=>{if(window.Sk){e();return}const o=document.createElement("script");o.src="https://skulpt.org/js/skulpt.min.js",o.onload=()=>{const r=document.createElement("script");r.src="https://skulpt.org/js/skulpt-stdlib.js",r.onload=()=>{console.log("Skulpt loaded successfully!"),e()},r.onerror=()=>t(new Error("Failed to load Skulpt stdlib")),document.head.appendChild(r)},o.onerror=()=>t(new Error("Failed to load Skulpt")),document.head.appendChild(o)})},m=function(e){},u=function(){if(!s){n("Editor not ready yet");return}try{const e=s.getValue(),t=new Blob([e],{type:"text/plain"}),o=window.URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download="exercise.py",r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(o),n("Python file downloaded as exercise.py")}catch(e){n("Error downloading file"),console.error("Download error:",e)}},b=function(){if(!s){n("Editor not ready yet");return}try{const e=s.getValue();localStorage.setItem("pythonEditorCode",e),localStorage.setItem("pythonEditorTimestamp",Date.now().toString());const t=window.location.origin+"/Python-Programming/editor-fullscreen.html",o=window.open(t,"_blank");n(o?"Opening Python editor in new tab...":"Please allow popups to open fullscreen editor")}catch(e){n("Error opening fullscreen editor"),console.error("New tab error:",e)}},g=function(){const e=document.getElementById("output");if(!s){e.textContent="Error: Editor not initialized. Please wait for the editor to load.",n("Editor not ready yet");return}try{const t=s.getValue();e.textContent="Running Python code...\\n\\n",setTimeout(()=>{w(t,e)},500)}catch(t){e.textContent=`Error: ${t.message}`,n("Error running code")}},k=function(){const e=document.getElementById("output");e.textContent='Output cleared. Write some Python code and click "Run Code" to see results...',n("Output cleared")},P=function(){if(!s){n("Editor not ready yet");return}try{s.setValue(c),document.getElementById("output").textContent="Code reset to template. Ready to run!",n("Code reset to Python template")}catch{n("Error resetting code")}},S=function(){if(!s){n("Editor not ready yet");return}try{const e=s.getValue();localStorage.setItem("pythonEditorCode",e),localStorage.setItem("pythonEditorTimestamp",Date.now().toString());const t=window.location.origin+"/Python-Programming/editor-mobile.html",o=window.open(t,"_blank");n(o?"Opening mobile Python editor...":"Please allow popups to open mobile editor")}catch(e){n("Error opening mobile editor"),console.error("Mobile tab error:",e)}},n=function(e){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      top: 20px;
      right: 20px;
      background: #3b82f6;
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1001;
      font-size: 14px;
      animation: slideIn 0.3s ease;
    `,t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease",setTimeout(()=>{t.parentNode&&t.remove()},300)},2e3)},y=function(){console.log("Initializing Python editor..."),setTimeout(()=>{p()},500)},s=null;const c=`# Welcome to the Python Editor! 
# Try the "Visualize Code" button to see step-by-step execution

# Variables and data types
name = "Student"
age = 20
score = 85.5

print("Student Information:")
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Score: {score}")

# Simple calculation
bonus = 10
final_score = score + bonus
print(f"Final Score: {final_score}")

# Conditional logic
if final_score >= 90:
    grade = "A"
elif final_score >= 80:
    grade = "B"
else:
    grade = "C"

print(f"Grade: {grade}")`;async function p(){try{if(await a(),d().catch(e=>{console.warn("Skulpt failed to load:",e)}),!window.require){console.error("Monaco loader not available");return}window.require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs"}}),window.require(["vs/editor/editor.main"],function(){const e=document.getElementById("monaco-editor");if(!e){console.error("Monaco editor container not found");return}const t=document.documentElement.classList.contains("dark")||window.matchMedia("(prefers-color-scheme: dark)").matches;s=monaco.editor.create(e,{value:c,language:"python",theme:t?"vs-dark":"vs",fontSize:14,lineNumbers:"on",roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:!1,automaticLayout:!0,minimap:{enabled:!1},folding:!0,lineNumbersMinChars:3,scrollbar:{verticalScrollbarSize:8,horizontalScrollbarSize:8}}),new MutationObserver(r=>{r.forEach(l=>{if(l.type==="attributes"&&l.attributeName==="class"){const E=document.documentElement.classList.contains("dark");s&&monaco.editor.setTheme(E?"vs-dark":"vs")}})}).observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),console.log("Monaco Editor initialized successfully!")})}catch(e){console.error("Failed to initialize Monaco:",e)}}async function w(e,t){try{window.Sk||(t.textContent="⏳ Loading Python interpreter...\\n\\n",await d());let o="";Sk.pre="output",Sk.configure({output:function(l){o+=l},read:function(l){if(Sk.builtinFiles===void 0||Sk.builtinFiles.files[l]===void 0)throw"File not found: '"+l+"'";return Sk.builtinFiles.files[l]},__future__:Sk.python3,python3:!0}),t.textContent="🚀 Running Python code...\\n\\n",await Sk.misceval.asyncToPromise(()=>Sk.importMainWithBody("<stdin>",!1,e,!0)),o.trim()?t.textContent=`${o}\\n✅ Python executed successfully in browser!\\n📝 This code ran using Skulpt - a Python interpreter in JavaScript.\\n🐍 Note: Skulpt supports most Python 3 features. Some advanced features may not be available.`:t.textContent="✅ Python code executed successfully!\\n📝 No output produced. Try adding print() statements to see results.\\n\\n🐍 Using Skulpt Python interpreter in browser.\\n📌 Tip: Use print() statements, basic operations, loops, functions, and imports.",n("Python executed successfully!")}catch(o){let r=o.toString();if(o.traceback){const l=o.traceback[0];l&&l.lineno&&(r=`Line ${l.lineno}: ${o.args?o.args.v[0].v:r}`)}t.textContent=`❌ Python Error:
${r}

📝 Check your Python syntax and try again.
🐍 Using Skulpt Python interpreter.`,n("Python execution error")}}window.switchLanguage=m,window.runCode=g,window.downloadCode=u,window.openFullscreenTab=b,window.openMobileTab=S,window.clearOutput=k,window.resetCode=P,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y();const h=document.createElement("style");h.textContent=`
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(100%); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideOut {
      from { opacity: 1; transform: translateX(0); }
      to { opacity: 0; transform: translateX(100%); }
    }
  `,document.head.appendChild(h)}const L=JSON.parse('{"title":"Python Editor","description":"Interactive Python code editor with real-time execution","frontmatter":{"outline":"deep","title":"Python Editor","description":"Interactive Python code editor with real-time execution"},"headers":[],"relativePath":"editor/python-editor.md","filePath":"editor/python-editor.md"}'),O={name:"editor/python-editor.md"},M={id:"python-editor",tabindex:"-1"};function z(s,a,d,c,p,m){const u=x("Badge");return T(),v("div",null,[i("h1",M,[a[0]||(a[0]=f("Python Editor ",-1)),I(u,{type:"danger",text:"Experimental"}),a[1]||(a[1]=f()),a[2]||(a[2]=i("a",{class:"header-anchor",href:"#python-editor","aria-label":'Permalink to "Python Editor <Badge type="danger" text="Experimental" />"'},"​",-1))]),a[3]||(a[3]=i("p",null,"An interactive Python code editor that runs real Python code in your browser",-1)),a[4]||(a[4]=i("div",{class:"editor-container"},[i("div",{class:"tabs"},[i("button",{class:"tab active",onclick:"switchLanguage('python')"},"Python")]),i("div",{class:"editor-wrapper"},[i("div",{id:"monaco-editor"})]),i("div",{class:"buttons"},[i("button",{class:"run",onclick:"runCode()"},"Run"),i("button",{class:"download",onclick:"downloadCode()"},"Download"),i("button",{class:"fullscreen",onclick:"openFullscreenTab()"},"Full Screen"),i("button",{class:"fullscreen",onclick:"openMobileTab()"},"Mobile Editor"),i("button",{class:"clear",onclick:"clearOutput()"},"Clear"),i("button",{class:"reset",onclick:"resetCode()"},"Reset")]),i("div",{class:"result"},[i("strong",null,"Output:"),i("div",{id:"output"},'Write some Python code and click "Run Code" to see results...')])],-1)),a[5]||(a[5]=_('<h2 id="i️-about-this-python-editor" tabindex="-1">ℹ️ About This Python Editor <a class="header-anchor" href="#i️-about-this-python-editor" aria-label="Permalink to &quot;ℹ️ About This Python Editor&quot;">​</a></h2><p>This editor provides a full Python 3 environment running directly in your browser:</p><ul><li><strong>Real Python Execution</strong>: Uses Skulpt Python interpreter to run actual Python code</li><li><strong>Monaco Editor</strong>: Professional code editor with syntax highlighting and IntelliSense</li><li><strong>Standard Library Support</strong>: Includes common Python modules like <code>math</code>, <code>random</code>, etc.</li><li><strong>Instant Feedback</strong>: See your code output immediately without any setup</li></ul><h3 id="🔍-code-visualization-available-in-full-screen" tabindex="-1">🔍 Code Visualization Available in Full Screen: <a class="header-anchor" href="#🔍-code-visualization-available-in-full-screen" aria-label="Permalink to &quot;🔍 Code Visualization Available in Full Screen:&quot;">​</a></h3><p>Click <strong>&quot;Open in Full Screen&quot;</strong> to access advanced features including step-by-step code visualization similar to Python Tutor.</p>',5))])}const N=C(O,[["render",z]]);export{L as __pageData,N as default};
