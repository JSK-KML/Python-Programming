import{_ as F,c as G,o as O,ag as p,j as t,a as S}from"./chunks/framework.dhMphySB.js";if(typeof window<"u"){let h=function(){const o=document.querySelectorAll(".magnetic-card");console.log("Found magnetic cards:",o.length),o.forEach((e,s)=>{console.log(`Setting up magnetic card ${s+1}`),e.addEventListener("mouseenter",n=>{console.log("Mouse entered card",s+1),e.classList.add("magnetic-active")}),e.addEventListener("mousemove",n=>{const i=e.getBoundingClientRect(),c=(n.clientX-i.left)/i.width*100,a=(n.clientY-i.top)/i.height*100;e.style.setProperty("--mouse-x",`${c}%`),e.style.setProperty("--mouse-y",`${a}%`),e.style.transform="translateY(-4px) scale(1.02)"}),e.addEventListener("mouseleave",()=>{console.log("Mouse left card",s+1),e.classList.remove("magnetic-active"),e.style.transform="translateY(0) scale(1)"})})},v=function(o){const e=o.currentTarget,s=e.getBoundingClientRect(),n=Math.max(s.width,s.height),i=o.clientX-s.left-n/2,c=o.clientY-s.top-n/2,a=document.createElement("div");a.classList.add("ripple-effect"),a.style.width=a.style.height=n+"px",a.style.left=i+"px",a.style.top=c+"px",e.querySelectorAll(".ripple-effect").forEach(l=>l.remove()),e.appendChild(a),setTimeout(()=>{a.remove()},600),r("Ripple effect created!","info")},m=function(){document.querySelectorAll(".magnetic-btn").forEach(e=>{e.addEventListener("mouseenter",()=>{e.classList.add("magnetic-hover")}),e.addEventListener("mouseleave",()=>{e.classList.remove("magnetic-hover")})})},f=function(o,e){o.classList.add("active"),setTimeout(()=>{o.classList.remove("active")},1e3),r({success:"Operation completed successfully!",warning:"Warning: Please review your action."}[e]||"Action performed",e)},b=function(o,e){const s=document.querySelector(".tooltip-glow");s&&s.remove();const n=document.createElement("div");n.classList.add("tooltip-glow"),n.textContent=e;const i=o.getBoundingClientRect();n.style.left=i.left+i.width/2-50+"px",n.style.top=i.top-40+"px",document.body.appendChild(n),setTimeout(()=>{n.classList.add("show")},10),o.classList.add("magnetic-hover")},w=function(o){const e=document.querySelector(".tooltip-glow");e&&(e.classList.remove("show"),setTimeout(()=>{e.remove()},300)),o.classList.remove("magnetic-hover")},T=function(){const o=document.getElementById("trailZone");if(console.log("Trail zone found:",!!o),!o){console.log("No trail zone found!");return}let e=[],s=0;o.addEventListener("mousemove",n=>{const i=Date.now();if(i-s<50)return;s=i;const c=o.getBoundingClientRect(),a=n.clientX-c.left,u=n.clientY-c.top;console.log("Creating trail at:",a,u);const l=document.createElement("div");if(l.classList.add("glow-trail"),l.style.left=a-10+"px",l.style.top=u-10+"px",l.style.position="absolute",l.style.pointerEvents="none",l.style.zIndex="1",o.appendChild(l),e.push(l),e.length>10){const d=e.shift();d&&d.parentNode&&d.remove()}setTimeout(()=>{l&&l.parentNode&&l.remove(),e=e.filter(d=>d!==l)},1e3)}),o.addEventListener("mouseenter",()=>{console.log("Mouse entered trail zone"),o.style.background="linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(139, 92, 246, 0.08))"}),o.addEventListener("mouseleave",()=>{console.log("Mouse left trail zone"),o.style.background="linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05))"})},q=function(){console.log("Initializing interactive glow effects..."),h(),m(),T(),console.log("Interactive glow effects initialized!")},y=function(){setTimeout(()=>{console.log("Starting delayed initialization..."),q()},500)},r=function(o,e="info"){const s=document.querySelector(".custom-alert");s&&s.remove();const n=document.createElement("div");n.className=`custom-alert ${e}`,n.innerHTML=`
    <div class="alert-content">
      <span class="alert-icon">${E(e)}</span>
      <span class="alert-message">${o}</span>
      <button class="alert-close" onclick="closeAlert(this)">×</button>
    </div>
  `,n.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: ${C(e)};
    color: white;
    padding: 16px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideInAlert 0.3s ease;
    max-width: 300px;
  `,document.body.appendChild(n),setTimeout(()=>{n.parentNode&&(n.style.animation="slideOutAlert 0.3s ease",setTimeout(()=>n.remove(),300))},3e3)},E=function(o){const e={success:"✅",warning:"⚠️",error:"❌",info:"💡"};return e[o]||e.info},C=function(o){const e={success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#3b82f6"};return e[o]||e.info},A=function(){document.querySelectorAll(".progress-ring").forEach(e=>{const s=parseInt(e.dataset.progress),n=e.querySelector(".progress-ring-circle"),i=2*Math.PI*52,c=i-s/100*i;n.style.strokeDashoffset=c})},_=function(){document.querySelectorAll(".progress-bar-fill").forEach(e=>{const s=parseInt(e.dataset.width);setTimeout(()=>{e.style.width=s+"%"},500)})},P=function(){document.querySelectorAll(".glow-slider").forEach(e=>{const s=e.querySelector(".slider"),n=e.querySelector(".slider-fill"),i=e.querySelector(".slider-thumb"),c=e.parentElement.querySelector(".slider-value");function a(){const u=s.value,l=s.max,d=u/l*100;n.style.width=d+"%",i.style.left=d+"%",c.textContent=u}s.addEventListener("input",a),s.addEventListener("mousemove",a),a()})},I=function(o){o.classList.toggle("active");const e=o.parentElement.querySelector("label").textContent,s=o.classList.contains("active");r(`${e} ${s?"enabled":"disabled"}!`,s?"success":"warning")},L=function(){const o=document.querySelector(".main-fab"),e=document.querySelectorAll(".secondary-fab");g=!g,o.classList.toggle("active",g),e.forEach(s=>{s.classList.toggle("show",g)}),r(g?"FAB menu opened":"FAB menu closed","info")},B=function(){const o=document.querySelectorAll(".tab-btn"),e=document.getElementById("codeEditor");e&&(e.textContent=k.python),o.forEach(s=>{s.addEventListener("click",()=>{o.forEach(i=>i.classList.remove("active")),s.classList.add("active");const n=s.dataset.lang;e&&(e.textContent=k[n]),r(`Switched to ${n.charAt(0).toUpperCase()+n.slice(1)}`,"info")})})},M=function(){const o=document.getElementById("codeEditor"),e=document.getElementById("codeOutput"),n=document.querySelector(".tab-btn.active").dataset.lang;o.textContent,e.textContent=`Running code...
`,setTimeout(()=>{n==="python"?e.textContent=`F(0) = 0
F(1) = 1
F(2) = 1
F(3) = 2
F(4) = 3
F(5) = 5
F(6) = 8
F(7) = 13
F(8) = 21
F(9) = 34

Execution completed successfully!`:n==="javascript"?e.textContent=`Doubled: [2, 4, 6, 8, 10]
Evens: [2, 4]
Sum: 15

Execution completed successfully!`:n==="html"&&(e.textContent=`HTML rendered successfully!
Document structure validated.
No errors found.

Page would display:
- Heading: "Hello, World!"
- Paragraph with text
- Interactive button`),r("Code executed successfully!","success")},1500)},R=function(){const o=document.getElementById("codeOutput");o.textContent="Output cleared...",r("Output cleared","info")},N=function(){document.querySelectorAll(".holographic-btn").forEach(e=>{e.addEventListener("click",function(){const s=this.closest(".holographic-card"),n=s.querySelector("h4").textContent;s.style.transform="scale(0.98)",setTimeout(()=>{s.style.transform="scale(1)"},150),r(`${n} action triggered!`,"success")})})},D=function(){console.log("Initializing new UI components..."),setTimeout(()=>{A(),_()},1e3),P(),B(),N(),console.log("New UI components initialized!")};window.createRippleEffect=v,window.showContextualGlow=f,window.showTooltipGlow=b,window.hideTooltipGlow=w,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y(),window.addEventListener("load",()=>{setTimeout(q,1e3)});const x=document.createElement("style");x.textContent=`
  @keyframes slideInAlert {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideOutAlert {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100%);
    }
  }
  
  .custom-alert .alert-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .alert-close {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    margin-left: auto;
    padding: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .alert-close:hover {
    opacity: 0.8;
  }
`,document.head.appendChild(x);let g=!1;const k={python:`# Python Example - Calculate Fibonacci
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Test the function
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`,javascript:`// JavaScript Example - Array Methods
const numbers = [1, 2, 3, 4, 5];

// Map, filter, and reduce
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((a, b) => a + b, 0);

console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Sum:', sum);`,html:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML example.</p>
    <button onclick="alert('Hello!')">Click me</button>
</body>
</html>`};window.toggleSwitch=I,window.toggleFabMenu=L,window.runCode=M,window.clearOutput=R,document.addEventListener("DOMContentLoaded",function(){console.log("Interactive UI components initialized!"),setTimeout(D,500)})}const $=JSON.parse('{"title":"Animation Showcase","description":"","frontmatter":{"outline":"deep","title":"Animation Showcase"},"headers":[],"relativePath":"ui/test-animations.md","filePath":"ui/test-animations.md"}'),z={name:"ui/test-animations.md"};function V(h,v,m,f,b,w){return O(),G("div",null,v[0]||(v[0]=[p('<h1 id="interactive-glow-elements-test" tabindex="-1">Interactive Glow Elements Test <a class="header-anchor" href="#interactive-glow-elements-test" aria-label="Permalink to &quot;Interactive Glow Elements Test&quot;">​</a></h1><p>This page tests magnetic glows, ripple effects, and contextual glow states for enhanced interactivity.</p><div style="background:#3b82f6;color:white;padding:10px;border-radius:8px;margin:20px 0;"><strong>🧪 HTML Rendering Test:</strong> If you can see this blue box with styled text, HTML rendering is working correctly. </div><h2 id="magnetic-glow-cards" tabindex="-1">Magnetic Glow Cards <a class="header-anchor" href="#magnetic-glow-cards" aria-label="Permalink to &quot;Magnetic Glow Cards&quot;">​</a></h2>',4),t("div",{class:"magnetic-grid"},[t("div",{class:"magnetic-card","data-glow-color":"blue"},[t("div",{class:"magnetic-header"},[t("h3",null,"Documentation"),t("div",{class:"magnetic-badge primary"},"New")]),t("div",{class:"magnetic-body"},[t("p",null,"Move your cursor close to this card and watch the magnetic glow effect activate smoothly.")]),t("div",{class:"magnetic-footer"},[t("button",{class:"ripple-btn primary",onclick:"createRippleEffect(event)"},"Read More")])]),t("div",{class:"magnetic-card","data-glow-color":"purple"},[t("div",{class:"magnetic-header"},[t("h3",null,"API Reference"),t("div",{class:"magnetic-badge secondary"},"Popular")]),t("div",{class:"magnetic-body"},[t("p",null,"Experience magnetic attraction effects as your cursor approaches this interactive element.")]),t("div",{class:"magnetic-footer"},[t("button",{class:"ripple-btn secondary",onclick:"createRippleEffect(event)"},"Explore API")])]),t("div",{class:"magnetic-card","data-glow-color":"violet"},[t("div",{class:"magnetic-header"},[t("h3",null,"Community"),t("div",{class:"magnetic-badge accent"},"Active")]),t("div",{class:"magnetic-body"},[t("p",null,"Join our community and enjoy sophisticated interactive glow effects throughout the experience.")]),t("div",{class:"magnetic-footer"},[t("button",{class:"ripple-btn accent",onclick:"createRippleEffect(event)"},"Join Now")])])],-1),t("h2",{id:"interactive-glow-showcase",tabindex:"-1"},[S("Interactive Glow Showcase "),t("a",{class:"header-anchor",href:"#interactive-glow-showcase","aria-label":'Permalink to "Interactive Glow Showcase"'},"​")],-1),t("div",{class:"interactive-showcase"},[t("button",{class:"magnetic-btn","data-glow":"blue",onmouseover:"showTooltipGlow(this, 'Magnetic attraction activated!')",onmouseout:"hideTooltipGlow(this)"},"Magnetic Button"),t("button",{class:"ripple-btn large",onclick:"createRippleEffect(event)"},"Ripple Effect"),t("button",{class:"context-btn success",onclick:"showContextualGlow(this, 'success')"},"Success State"),t("button",{class:"context-btn warning",onclick:"showContextualGlow(this, 'warning')"},"Warning State")],-1),p('<h2 id="glow-trail-area" tabindex="-1">Glow Trail Area <a class="header-anchor" href="#glow-trail-area" aria-label="Permalink to &quot;Glow Trail Area&quot;">​</a></h2><div class="glow-trail-zone" id="trailZone"><h3>Glow Trail Zone</h3><p>Move your cursor around this area to see a beautiful glowing trail effect that follows your movement.</p></div><h2 id="🌟-button-variations" tabindex="-1">🌟 Button Variations <a class="header-anchor" href="#🌟-button-variations" aria-label="Permalink to &quot;🌟 Button Variations&quot;">​</a></h2>',3),t("div",{class:"button-showcase"},[t("button",{class:"btn-primary",onclick:"showAlert('Primary button clicked!', 'info')"},"Primary Action"),t("button",{class:"btn-secondary",onclick:"showAlert('Secondary action performed!', 'success')"},"Secondary Action"),t("button",{class:"btn-success",onclick:"showAlert('Success! Operation completed.', 'success')"},"Success State"),t("button",{class:"btn-warning",onclick:"showAlert('Warning: Please review your action.', 'warning')"},"Warning Action"),t("button",{class:"btn-outline",onclick:"showAlert('Outline button pressed!', 'info')"},"Outline Style"),t("button",{class:"btn-ghost",onclick:"showAlert('Ghost button activated!', 'info')"},"Ghost Button")],-1),t("div",{class:"interactive-buttons"},[t("h3",null,"Interactive Button Effects"),t("div",{class:"button-effects-grid"},[t("button",{class:"btn-ripple",onclick:"createRipple(event)"},[t("span",null,"Ripple Effect")]),t("button",{class:"btn-loading",onclick:"toggleLoading(this)"},[t("span",{class:"btn-text"},"Load Data"),t("span",{class:"btn-spinner",style:{display:"none"}},[t("div",{class:"mini-spinner"})])]),t("button",{class:"btn-counter",onclick:"incrementCounter(this)"},[t("span",null,"Click Me"),t("span",{class:"counter-badge"},"0")]),t("button",{class:"btn-toggle",onclick:"toggleButton(this)"},[t("span",{class:"toggle-text"},"Enable")])])],-1),t("h2",{id:"📱-notification-styles",tabindex:"-1"},[S("📱 Notification Styles "),t("a",{class:"header-anchor",href:"#📱-notification-styles","aria-label":'Permalink to "📱 Notification Styles"'},"​")],-1),t("div",{class:"notification-showcase"},[t("h3",null,"Alert & Notification Components"),t("div",{class:"notification success"},[t("div",{class:"notification-icon"},"✅"),t("div",{class:"notification-content"},[t("strong",null,"Success!"),t("p",null,"Your changes have been saved successfully.")]),t("button",{class:"notification-close",onclick:"closeNotification(this)"},"×")]),t("div",{class:"notification warning"},[t("div",{class:"notification-icon"},"⚠️"),t("div",{class:"notification-content"},[t("strong",null,"Warning"),t("p",null,"Please review your settings before proceeding.")]),t("button",{class:"notification-close",onclick:"closeNotification(this)"},"×")]),t("div",{class:"notification error"},[t("div",{class:"notification-icon"},"❌"),t("div",{class:"notification-content"},[t("strong",null,"Error"),t("p",null,"Unable to complete the requested action.")]),t("button",{class:"notification-close",onclick:"closeNotification(this)"},"×")]),t("div",{class:"notification info"},[t("div",{class:"notification-icon"},"💡"),t("div",{class:"notification-content"},[t("strong",null,"Information"),t("p",null,"New features are now available in your dashboard.")]),t("button",{class:"notification-close",onclick:"closeNotification(this)"},"×")])],-1),p(`<h2 id="📊-progress-components" tabindex="-1">📊 Progress Components <a class="header-anchor" href="#📊-progress-components" aria-label="Permalink to &quot;📊 Progress Components&quot;">​</a></h2><div class="progress-showcase"><h3>Animated Progress Rings &amp; Bars</h3><div class="progress-grid"><div class="progress-container"><div class="progress-ring" data-progress="75"><svg class="progress-ring-svg" width="120" height="120"><circle class="progress-ring-circle-bg" cx="60" cy="60" r="52"></circle><circle class="progress-ring-circle" cx="60" cy="60" r="52"></circle></svg><div class="progress-text">75%</div></div><span class="progress-label">Skills</span></div><pre><code>&lt;div class=&quot;progress-container&quot;&gt;
  &lt;div class=&quot;progress-ring&quot; data-progress=&quot;90&quot;&gt;
    &lt;svg class=&quot;progress-ring-svg&quot; width=&quot;120&quot; height=&quot;120&quot;&gt;
      &lt;circle class=&quot;progress-ring-circle-bg&quot; cx=&quot;60&quot; cy=&quot;60&quot; r=&quot;52&quot;&gt;&lt;/circle&gt;
      &lt;circle class=&quot;progress-ring-circle&quot; cx=&quot;60&quot; cy=&quot;60&quot; r=&quot;52&quot; stroke=&quot;#8b5cf6&quot;&gt;&lt;/circle&gt;
    &lt;/svg&gt;
    &lt;div class=&quot;progress-text&quot;&gt;90%&lt;/div&gt;
  &lt;/div&gt;
  &lt;span class=&quot;progress-label&quot;&gt;Experience&lt;/span&gt;
&lt;/div&gt;

&lt;div class=&quot;progress-container&quot;&gt;
  &lt;div class=&quot;progress-ring&quot; data-progress=&quot;60&quot;&gt;
    &lt;svg class=&quot;progress-ring-svg&quot; width=&quot;120&quot; height=&quot;120&quot;&gt;
      &lt;circle class=&quot;progress-ring-circle-bg&quot; cx=&quot;60&quot; cy=&quot;60&quot; r=&quot;52&quot;&gt;&lt;/circle&gt;
      &lt;circle class=&quot;progress-ring-circle&quot; cx=&quot;60&quot; cy=&quot;60&quot; r=&quot;52&quot; stroke=&quot;#a855f7&quot;&gt;&lt;/circle&gt;
    &lt;/svg&gt;
    &lt;div class=&quot;progress-text&quot;&gt;60%&lt;/div&gt;
  &lt;/div&gt;
  &lt;span class=&quot;progress-label&quot;&gt;Projects&lt;/span&gt;
&lt;/div&gt;
</code></pre></div><div class="progress-bars"><div class="progress-bar-container"><label>Python Programming</label><div class="progress-bar"><div class="progress-bar-fill" data-width="85"></div></div><span class="progress-percentage">85%</span></div><pre><code>&lt;div class=&quot;progress-bar-container&quot;&gt;
  &lt;label&gt;Web Development&lt;/label&gt;
  &lt;div class=&quot;progress-bar&quot;&gt;
    &lt;div class=&quot;progress-bar-fill&quot; data-width=&quot;70&quot; style=&quot;--progress-color: #8b5cf6;&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;span class=&quot;progress-percentage&quot;&gt;70%&lt;/span&gt;
&lt;/div&gt;

&lt;div class=&quot;progress-bar-container&quot;&gt;
  &lt;label&gt;Data Analysis&lt;/label&gt;
  &lt;div class=&quot;progress-bar&quot;&gt;
    &lt;div class=&quot;progress-bar-fill&quot; data-width=&quot;65&quot; style=&quot;--progress-color: #a855f7;&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;span class=&quot;progress-percentage&quot;&gt;65%&lt;/span&gt;
&lt;/div&gt;
</code></pre></div></div><h2 id="🎛️-interactive-controls" tabindex="-1">🎛️ Interactive Controls <a class="header-anchor" href="#🎛️-interactive-controls" aria-label="Permalink to &quot;🎛️ Interactive Controls&quot;">​</a></h2>`,3),t("div",{class:"controls-showcase"},[t("h3",null,"Sliders & Switches"),t("div",{class:"sliders-container"},[t("div",{class:"slider-group"},[t("label",null,"Volume"),t("div",{class:"glow-slider"},[t("input",{type:"range",min:"0",max:"100",value:"50",class:"slider",id:"volumeSlider"}),t("div",{class:"slider-track"}),t("div",{class:"slider-fill"}),t("div",{class:"slider-thumb"})]),t("span",{class:"slider-value"},"50")]),t("pre",null,[t("code",null,`<div class="slider-group">
  <label>Brightness</label>
  <div class="glow-slider purple">
    <input type="range" min="0" max="100" value="75" class="slider" id="brightnessSlider">
    <div class="slider-track"></div>
    <div class="slider-fill"></div>
    <div class="slider-thumb"></div>
  </div>
  <span class="slider-value">75</span>
</div>

<div class="slider-group">
  <label>Contrast</label>
  <div class="glow-slider violet">
    <input type="range" min="0" max="100" value="30" class="slider" id="contrastSlider">
    <div class="slider-track"></div>
    <div class="slider-fill"></div>
    <div class="slider-thumb"></div>
  </div>
  <span class="slider-value">30</span>
</div>
`)])]),t("div",{class:"switches-container"},[t("div",{class:"switch-group"},[t("label",null,"Dark Mode"),t("div",{class:"glow-switch",onclick:"toggleSwitch(this)"},[t("div",{class:"switch-track"}),t("div",{class:"switch-thumb"})])]),t("pre",null,[t("code",null,`<div class="switch-group">
  <label>Notifications</label>
  <div class="glow-switch active" onclick="toggleSwitch(this)">
    <div class="switch-track"></div>
    <div class="switch-thumb"></div>
  </div>
</div>

<div class="switch-group">
  <label>Auto Save</label>
  <div class="glow-switch" onclick="toggleSwitch(this)">
    <div class="switch-track"></div>
    <div class="switch-thumb"></div>
  </div>
</div>
`)])])],-1),p(`<h2 id="✨-holographic-cards" tabindex="-1">✨ Holographic Cards <a class="header-anchor" href="#✨-holographic-cards" aria-label="Permalink to &quot;✨ Holographic Cards&quot;">​</a></h2><div class="holographic-showcase"><h3>Iridescent Card Collection</h3><div class="holographic-grid"><div class="holographic-card"><div class="holographic-border"></div><div class="card-content"><div class="card-icon">🚀</div><h4>Launch Project</h4><p>Deploy your application with holographic visual effects and smooth animations.</p><button class="holographic-btn">Deploy Now</button></div></div><pre><code>&lt;div class=&quot;holographic-card&quot;&gt;
  &lt;div class=&quot;holographic-border&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;card-content&quot;&gt;
    &lt;div class=&quot;card-icon&quot;&gt;⚡&lt;/div&gt;
    &lt;h4&gt;Performance&lt;/h4&gt;
    &lt;p&gt;Optimize your code with lightning-fast execution and beautiful UI transitions.&lt;/p&gt;
    &lt;button class=&quot;holographic-btn&quot;&gt;Optimize&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;holographic-card&quot;&gt;
  &lt;div class=&quot;holographic-border&quot;&gt;&lt;/div&gt;
  &lt;div class=&quot;card-content&quot;&gt;
    &lt;div class=&quot;card-icon&quot;&gt;🎨&lt;/div&gt;
    &lt;h4&gt;Design System&lt;/h4&gt;
    &lt;p&gt;Create stunning interfaces with our comprehensive design system and components.&lt;/p&gt;
    &lt;button class=&quot;holographic-btn&quot;&gt;Explore&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre></div></div><h2 id="💻-interactive-code-editor" tabindex="-1">💻 Interactive Code Editor <a class="header-anchor" href="#💻-interactive-code-editor" aria-label="Permalink to &quot;💻 Interactive Code Editor&quot;">​</a></h2><div class="code-editor-showcase"><h3>Live Code Playground</h3><div class="code-editor-container"><div class="editor-tabs"><button class="tab-btn active" data-lang="python">Python</button><button class="tab-btn" data-lang="javascript">JavaScript</button><button class="tab-btn" data-lang="html">HTML</button></div><pre><code>&lt;div class=&quot;editor-content&quot;&gt;
  &lt;div class=&quot;code-editor&quot; id=&quot;codeEditor&quot;&gt;&lt;/div&gt;
  
  &lt;div class=&quot;editor-controls&quot;&gt;
    &lt;button class=&quot;run-btn&quot; onclick=&quot;runCode()&quot;&gt;
      &lt;span class=&quot;btn-icon&quot;&gt;▶️&lt;/span&gt;
      Run Code
    &lt;/button&gt;
    &lt;button class=&quot;clear-btn&quot; onclick=&quot;clearOutput()&quot;&gt;Clear&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;output-container&quot;&gt;
  &lt;h4&gt;Output:&lt;/h4&gt;
  &lt;pre class=&quot;code-output&quot; id=&quot;codeOutput&quot;&gt;Click &quot;Run Code&quot; to see results...&lt;/pre&gt;
&lt;/div&gt;
</code></pre></div></div><h2 id="🚀-floating-action-buttons" tabindex="-1">🚀 Floating Action Buttons <a class="header-anchor" href="#🚀-floating-action-buttons" aria-label="Permalink to &quot;🚀 Floating Action Buttons&quot;">​</a></h2><div class="fab-showcase"><h3>Floating Action Buttons</h3><p>Hover over the floating buttons to see magnetic effects and micro-interactions.</p></div>`,6),t("div",{class:"fab-container"},[t("div",{class:"fab main-fab",onclick:"toggleFabMenu()"},[t("span",{class:"fab-icon"},"+"),t("div",{class:"fab-tooltip"},"Quick Actions")]),t("div",{class:"fab secondary-fab fab-1",onclick:"showAlert('Create new document!', 'info')"},[t("span",{class:"fab-icon"},"📄"),t("div",{class:"fab-tooltip"},"New Document")]),t("div",{class:"fab secondary-fab fab-2",onclick:"showAlert('Upload files!', 'info')"},[t("span",{class:"fab-icon"},"📁"),t("div",{class:"fab-tooltip"},"Upload")]),t("div",{class:"fab secondary-fab fab-3",onclick:"showAlert('Send message!', 'info')"},[t("span",{class:"fab-icon"},"💬"),t("div",{class:"fab-tooltip"},"Message")]),t("div",{class:"fab secondary-fab fab-4",onclick:"showAlert('Open settings!', 'info')"},[t("span",{class:"fab-icon"},"⚙️"),t("div",{class:"fab-tooltip"},"Settings")])],-1),p('<h2 id="🎨-enhanced-content-blocks" tabindex="-1">🎨 Enhanced Content Blocks <a class="header-anchor" href="#🎨-enhanced-content-blocks" aria-label="Permalink to &quot;🎨 Enhanced Content Blocks&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">💡 Enhanced Interactive Tip</p><p>This tip box includes shimmer effects, hover animations, and improved visual hierarchy for better user engagement.</p></div><div class="warning custom-block"><p class="custom-block-title">⚠️ Animated Warning Block</p><p>Warning boxes now feature smooth hover transitions, subtle border animations, and enhanced styling for improved attention.</p></div><div class="danger custom-block"><p class="custom-block-title">🚨 Critical Alert</p><p>Danger alerts include pulsing effects and enhanced shadows to effectively communicate important information.</p></div>',4)]))}const W=F(z,[["render",V]]);export{$ as __pageData,W as default};
