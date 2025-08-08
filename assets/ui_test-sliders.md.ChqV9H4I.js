import{_ as p,c as w,o as g,j as e,a as o}from"./chunks/framework.DS1FxSjF.js";if(typeof window<"u"){let a=function(){document.querySelectorAll(".glow-slider").forEach(s=>{const t=s.querySelector(".slider"),n=s.querySelector(".slider-fill"),u=s.querySelector(".slider-thumb"),v=s.parentElement.querySelector(".slider-value");function c(){const r=t.value,h=t.max,d=r/h*100;n.style.width=d+"%",u.style.left=d+"%",v.textContent=r}t.addEventListener("input",c),c()})},i=function(l){l.classList.toggle("active");const s=l.parentElement.querySelector("label").textContent,t=l.classList.contains("active");console.log(`${s} ${t?"enabled":"disabled"}!`)};window.toggleSwitch=i,document.addEventListener("DOMContentLoaded",function(){setTimeout(a,500)})}const b=JSON.parse('{"title":"Interactive Sliders Test","description":"","frontmatter":{"outline":"deep","title":"Interactive Sliders Test"},"headers":[],"relativePath":"ui/test-sliders.md","filePath":"ui/test-sliders.md"}'),m={name:"ui/test-sliders.md"};function f(a,i,l,s,t,n){return g(),w("div",null,i[0]||(i[0]=[e("h1",{id:"interactive-sliders-switches-test",tabindex:"-1"},[o("Interactive Sliders & Switches Test "),e("a",{class:"header-anchor",href:"#interactive-sliders-switches-test","aria-label":'Permalink to "Interactive Sliders & Switches Test"'},"​")],-1),e("p",null,"Testing interactive controls with glow effects and smooth animations.",-1),e("h2",{id:"🎛️-glow-sliders",tabindex:"-1"},[o("🎛️ Glow Sliders "),e("a",{class:"header-anchor",href:"#🎛️-glow-sliders","aria-label":'Permalink to "🎛️ Glow Sliders"'},"​")],-1),e("div",{class:"controls-showcase"},[e("div",{class:"sliders-container"},[e("div",{class:"slider-group"},[e("label",null,"Volume"),e("div",{class:"glow-slider"},[e("input",{type:"range",min:"0",max:"100",value:"50",class:"slider",id:"volumeSlider"}),e("div",{class:"slider-fill"}),e("div",{class:"slider-thumb"})]),e("span",{class:"slider-value"},"50")]),e("pre",null,[e("code",null,`<div class="slider-group">
  <label>Brightness</label>
  <div class="glow-slider purple">
    <input type="range" min="0" max="100" value="75" class="slider" id="brightnessSlider">
    <div class="slider-fill"></div>
    <div class="slider-thumb"></div>
  </div>
  <span class="slider-value">75</span>
</div>
`)])]),e("div",{class:"switches-container"},[e("div",{class:"switch-group"},[e("label",null,"Dark Mode"),e("div",{class:"glow-switch",onclick:"toggleSwitch(this)"},[e("div",{class:"switch-track"}),e("div",{class:"switch-thumb"})])]),e("pre",null,[e("code",null,`<div class="switch-group">
  <label>Notifications</label>
  <div class="glow-switch active" onclick="toggleSwitch(this)">
    <div class="switch-track"></div>
    <div class="switch-thumb"></div>
  </div>
</div>
`)])])],-1)]))}const x=p(m,[["render",f]]);export{b as __pageData,x as default};
