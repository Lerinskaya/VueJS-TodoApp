if(!self.define){let e,o={};const s=(s,r)=>(s=new URL(s+".js",r).href,o[s]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=o,document.head.appendChild(e)}else e=s,importScripts(s),o()})).then((()=>{let e=o[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(o[n])return;let t={};const u=e=>s(e,n),c={module:{uri:n},exports:t,require:u};o[n]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(i(...e),t)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-project"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/VueJS-TodoApp/css/app.63237876.css",revision:null},{url:"/VueJS-TodoApp/index.html",revision:"4f721c6c49eb1c9e69a2d5217dd46172"},{url:"/VueJS-TodoApp/js/app.fe5efcfd.js",revision:null},{url:"/VueJS-TodoApp/js/chunk-vendors.33a6366d.js",revision:null},{url:"/VueJS-TodoApp/manifest.json",revision:"5681e88a038a6cacf69911e8d28eafae"},{url:"/VueJS-TodoApp/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
