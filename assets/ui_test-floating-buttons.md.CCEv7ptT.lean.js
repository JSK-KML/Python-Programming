import{_ as l,c as d,o as r,ag as f,j as t}from"./chunks/framework.dhMphySB.js";if(typeof window<"u"){let n=function(){const o=document.querySelector(".main-fab"),e=document.querySelectorAll(".secondary-fab");a=!a,o&&o.classList.toggle("active",a),e.forEach(c=>{c.classList.toggle("show",a)}),s(a?"FAB menu opened":"FAB menu closed")},s=function(o){const e=document.createElement("div");e.style.cssText=`
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
    `,e.textContent=o,document.body.appendChild(e),setTimeout(()=>{e.style.animation="slideOut 0.3s ease",setTimeout(()=>{e.parentNode&&e.remove()},300)},2e3)},a=!1;window.toggleFabMenu=n,window.showFabAlert=s;const i=document.createElement("style");i.textContent=`
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(100%);
      }
    }
  `,document.head.appendChild(i)}const m=JSON.parse('{"title":"Floating Action Buttons Test","description":"","frontmatter":{"outline":"deep","title":"Floating Action Buttons Test"},"headers":[],"relativePath":"ui/test-floating-buttons.md","filePath":"ui/test-floating-buttons.md"}'),b={name:"ui/test-floating-buttons.md"};function p(a,n,s,i,o,e){return r(),d("div",null,n[0]||(n[0]=[f("",4),t("div",{class:"fab-container"},[t("div",{class:"fab main-fab",onclick:"toggleFabMenu()"},[t("span",{class:"fab-icon"},"+"),t("div",{class:"fab-tooltip"},"Quick Actions")]),t("div",{class:"fab secondary-fab fab-1",onclick:"showFabAlert('Create new document!')"},[t("span",{class:"fab-icon"},"📄"),t("div",{class:"fab-tooltip"},"New Document")]),t("div",{class:"fab secondary-fab fab-2",onclick:"showFabAlert('Upload files!')"},[t("span",{class:"fab-icon"},"📁"),t("div",{class:"fab-tooltip"},"Upload")]),t("div",{class:"fab secondary-fab fab-3",onclick:"showFabAlert('Send message!')"},[t("span",{class:"fab-icon"},"💬"),t("div",{class:"fab-tooltip"},"Message")]),t("div",{class:"fab secondary-fab fab-4",onclick:"showFabAlert('Open settings!')"},[t("span",{class:"fab-icon"},"⚙️"),t("div",{class:"fab-tooltip"},"Settings")])],-1)]))}const h=l(b,[["render",p]]);export{m as __pageData,h as default};
