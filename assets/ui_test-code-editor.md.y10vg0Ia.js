import{_ as M,c as P,o as j,j as r,a as x}from"./chunks/framework.dhMphySB.js";if(typeof window<"u"){let g=function(){return new Promise(t=>{if(window.require&&window.monaco){t();return}const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js",e.onload=()=>{setTimeout(t,100)},document.head.appendChild(e)})},h=function(){return new Promise((t,e)=>{if(window.Sk){t();return}const o=document.createElement("script");o.src="https://skulpt.org/js/skulpt.min.js",o.onload=()=>{const n=document.createElement("script");n.src="https://skulpt.org/js/skulpt-stdlib.js",n.onload=()=>{console.log("Skulpt loaded successfully!"),t()},n.onerror=()=>e(new Error("Failed to load Skulpt stdlib")),document.head.appendChild(n)},o.onerror=()=>e(new Error("Failed to load Skulpt")),document.head.appendChild(o)})},v=function(t){if(!c){console.log("Editor not initialized yet");return}const e=document.querySelectorAll(".tab");e.forEach(n=>n.classList.remove("active"));const o=Array.from(e).find(n=>n.textContent.toLowerCase().includes(t.toLowerCase()));o&&o.classList.add("active"),s=t;try{const n={python:"python",javascript:"javascript",html:"html"};window.monaco&&window.monaco.editor&&(monaco.editor.setModelLanguage(c.getModel(),n[t]),c.setValue(p[t])),console.log(`Switched to ${t} mode`),a(`Switched to ${t.charAt(0).toUpperCase()+t.slice(1)}`)}catch(n){console.error("Error switching language:",n)}},S=function(){const t=document.getElementById("output");if(!c){t.textContent="Error: Editor not initialized. Please wait for the editor to load.",a("Editor not ready yet");return}try{const e=c.getValue();t.textContent=`🚀 Running ${s} code...

`,setTimeout(()=>{s==="javascript"?k(e,t):s==="python"?C(e,t):s==="html"&&E(e,t)},500)}catch(e){t.textContent=`Error: ${e.message}`,a("Error running code")}},k=function(t,e){try{const o=console.log,n=console.error,i=console.warn;let d=[];console.log=(...l)=>{d.push("LOG: "+l.map(f=>typeof f=="object"?JSON.stringify(f,null,2):String(f)).join(" ")),o.apply(console,l)},console.error=(...l)=>{d.push("ERROR: "+l.join(" ")),n.apply(console,l)},console.warn=(...l)=>{d.push("WARN: "+l.join(" ")),i.apply(console,l)};const m=new Function(t)();console.log=o,console.error=n,console.warn=i;let u="";d.length>0&&(u+=d.join(`
`)+`

`),m!==void 0&&(u+=`Return value: ${typeof m=="object"?JSON.stringify(m,null,2):m}

`),u+=`✅ JavaScript executed successfully in browser!
`,u+="📝 This code ran directly in your browser environment.",e.textContent=u,a("JavaScript executed in browser!")}catch(o){e.textContent=`❌ JavaScript Error:
${o.message}

📝 Check your syntax and try again.`,a("JavaScript execution error")}},E=function(t,e){try{const o=document.createElement("div");o.style.cssText=`
        border: 2px solid #3b82f6;
        border-radius: 8px;
        padding: 16px;
        background: white;
        color: black;
        margin: 10px 0;
        font-family: Arial, sans-serif;
        max-height: 300px;
        overflow: auto;
      `;const n=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,'<div style="background: #ffe6e6; padding: 8px; border-radius: 4px; color: #d63031;">[Script tag removed for security]</div>');o.innerHTML=n;const i=e.parentNode.querySelector(".html-preview");i&&i.remove(),o.className="html-preview",e.parentNode.insertBefore(o,e.nextSibling),e.textContent=`📄 HTML Rendered Successfully!

🎨 Live preview shown below the output area.

✅ HTML executed in browser!
📝 Your HTML is rendered above. Script tags are removed for security.`,a("HTML rendered in browser!")}catch(o){e.textContent=`❌ HTML Rendering Error:
${o.message}`,a("HTML rendering error")}},L=function(){const t=document.getElementById("output");t.textContent='Output cleared. Write some code and click "Run Code" to see results...';const e=t.parentNode.querySelector(".html-preview");e&&e.remove(),a("Output cleared")},T=function(){if(!c){a("Editor not ready yet");return}try{c.setValue(p[s]),document.getElementById("output").textContent="Code reset to template. Ready to run!",a(`Code reset to ${s} template`)}catch{a("Error resetting code")}},a=function(t){const e=document.createElement("div");e.style.cssText=`
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
    `,e.textContent=t,document.body.appendChild(e),setTimeout(()=>{e.style.animation="slideOut 0.3s ease",setTimeout(()=>{e.parentNode&&e.remove()},300)},2e3)},b=function(){console.log("Initializing code editor..."),setTimeout(()=>{y()},500)},c=null,s="python";const p={python:`# Real Python in Browser! 🐍
# This code actually executes using Skulpt

# Basic Python 3 features
print("Hello from Python 3!")

# Variables and operations
name = "Python"
version = 3
print("Language:", name, "Version:", version)

# Lists and loops
numbers = [1, 2, 3, 4, 5]
print("Original numbers:", numbers)

# List comprehension (Python 3 style)
squared = [x * x for x in numbers]
print("Squared numbers:", squared)

# Functions
def calculate_sum(items):
    total = 0
    for item in items:
        total = total + item
    return total

result = calculate_sum(numbers)
print("Sum of numbers:", result)

# String operations
message = "Welcome to real Python execution!"
print("Message length:", len(message))
print("Uppercase:", message.upper())

# Math operations
import math
print("Square root of 25:", math.sqrt(25))
print("Pi value:", round(math.pi, 4))

print()
print("✅ This is REAL Python 3 running in your browser!")`,javascript:`// JavaScript Example - Runs in Browser!
// Try modifying this code and click Run!

// Array operations
const numbers = [1, 2, 3, 4, 5];
console.log('Original numbers:', numbers);

const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);

const sum = numbers.reduce((a, b) => a + b, 0);
console.log('Sum:', sum);

// Object example
const person = {
    name: 'JavaScript',
    age: 29,
    greet() {
        return \`Hello, I'm \${this.name}!\`;
    }
};

console.log(person.greet());

// Math operations
const randomNum = Math.floor(Math.random() * 100);
console.log('Random number:', randomNum);

// Return a value to see it in output
return {
    message: 'JavaScript executed successfully!',
    timestamp: new Date().toLocaleTimeString(),
    randomNumber: randomNum
};`,html:`<!-- Interactive HTML Demo -->
<div style="font-family: Arial; padding: 20px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 12px;">
    <h1>🎨 Interactive HTML Demo</h1>
    <p>This HTML renders live in the browser!</p>
    <button style="background: #4CAF50; color: white; padding: 12px 24px; border: none; border-radius: 6px; margin: 5px; cursor: pointer;">Click Me!</button>
    <div style="background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; margin-top: 10px;">
        Interactive HTML content!
    </div>
</div>`};async function y(){try{if(await g(),h().catch(t=>{console.warn("Skulpt failed to load:",t)}),!window.require){console.error("Monaco loader not available");return}window.require.config({paths:{vs:"https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs"}}),window.require(["vs/editor/editor.main"],function(){const t=document.getElementById("monaco-editor");if(!t){console.error("Monaco editor container not found");return}c=monaco.editor.create(t,{value:p.python,language:"python",theme:"vs-dark",fontSize:14,lineNumbers:"on",roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:!1,automaticLayout:!0,minimap:{enabled:!1},folding:!0,lineNumbersMinChars:3,scrollbar:{verticalScrollbarSize:8,horizontalScrollbarSize:8}}),console.log("Monaco Editor initialized successfully!")})}catch(t){console.error("Failed to initialize Monaco:",t)}}async function C(t,e){try{window.Sk||(e.textContent=`⏳ Loading Python interpreter...

`,await h());let o="";Sk.pre="output",Sk.configure({output:function(i){o+=i},read:function(i){if(Sk.builtinFiles===void 0||Sk.builtinFiles.files[i]===void 0)throw"File not found: '"+i+"'";return Sk.builtinFiles.files[i]},__future__:Sk.python3,python3:!0}),e.textContent=`🚀 Running Python code...

`,await Sk.misceval.asyncToPromise(()=>Sk.importMainWithBody("<stdin>",!1,t,!0)),o.trim()?e.textContent=`${o}
✅ Python executed successfully in browser!
📝 This code ran using Skulpt - a Python interpreter in JavaScript.
🐍 Note: Skulpt supports most Python 3 features. Some advanced features may not be available.`:e.textContent=`✅ Python code executed successfully!
📝 No output produced. Try adding print() statements to see results.

🐍 Using Skulpt Python interpreter in browser.
📌 Tip: Use print() statements, basic operations, loops, functions, and imports.`,a("Python executed successfully!")}catch(o){let n=o.toString();if(o.traceback){const i=o.traceback[0];i&&i.lineno&&(n=`Line ${i.lineno}: ${o.args?o.args.v[0].v:n}`)}e.textContent=`❌ Python Error:
${n}

📝 Check your Python syntax and try again.
🐍 Using Skulpt Python interpreter.`,a("Python execution error")}}window.switchLanguage=v,window.runCode=S,window.clearOutput=L,window.resetCode=T,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();const w=document.createElement("style");w.textContent=`
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(100%); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideOut {
      from { opacity: 1; transform: translateX(0); }
      to { opacity: 0; transform: translateX(100%); }
    }
  `,document.head.appendChild(w)}const $=JSON.parse('{"title":"Code Editor Test","description":"","frontmatter":{"outline":"deep","title":"Code Editor Test"},"headers":[],"relativePath":"ui/test-code-editor.md","filePath":"ui/test-code-editor.md"}'),N={name:"ui/test-code-editor.md"};function O(c,s,g,h,p,y){return j(),P("div",null,s[0]||(s[0]=[r("h1",{id:"code-editor-test",tabindex:"-1"},[x("Code Editor Test "),r("a",{class:"header-anchor",href:"#code-editor-test","aria-label":'Permalink to "Code Editor Test"'},"​")],-1),r("p",null,"Testing an interactive code editor with Monaco Editor and syntax highlighting.",-1),r("h2",{id:"💻-monaco-code-editor",tabindex:"-1"},[x("💻 Monaco Code Editor "),r("a",{class:"header-anchor",href:"#💻-monaco-code-editor","aria-label":'Permalink to "💻 Monaco Code Editor"'},"​")],-1),r("div",{class:"editor-container"},[r("div",{class:"tabs"},[r("button",{class:"tab active",onclick:"switchLanguage('python')"},"Python"),r("button",{class:"tab",onclick:"switchLanguage('javascript')"},"JavaScript"),r("button",{class:"tab",onclick:"switchLanguage('html')"},"HTML")]),r("div",{class:"editor-wrapper"},[r("div",{id:"monaco-editor"})]),r("div",{class:"buttons"},[r("button",{class:"run",onclick:"runCode()"},"▶️ Run Code"),r("button",{class:"clear",onclick:"clearOutput()"},"Clear Output"),r("button",{class:"reset",onclick:"resetCode()"},"Reset Code")]),r("div",{class:"result"},[r("strong",null,"Output:"),r("div",{id:"output"},'Write some code and click "Run Code" to see results...')])],-1)]))}const H=M(N,[["render",O]]);export{$ as __pageData,H as default};
