if(!self.define){let i,e={};const n=(n,s)=>(n=new URL(n+".js",s).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(s,o)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const c=i=>n(i,r),d={module:{uri:r},exports:a,require:c};e[r]=Promise.all(s.map((i=>d[i]||c(i)))).then((i=>(o(...i),a)))}}define(["./workbox-7369c0e1"],(function(i){"use strict";self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"assets/AboutView-4d995ba2.css",revision:null},{url:"assets/AboutView-da6dd85f.js",revision:null},{url:"assets/index-1f9ed55f.js",revision:null},{url:"assets/index-fbd6c34d.css",revision:null},{url:"favicon.ico",revision:"9186d1d811a5aab112ecf5f39abc1691"},{url:"img/app-icon-512.png",revision:"36a07e4b428bf1c7b5b06c7bb02fe6f9"},{url:"img/favicon.png",revision:"6ef0c37ea1e4c1175980c58ce12cb2de"},{url:"img/icons/android-chrome-192x192.png",revision:"92d3afa87a85f00ff53b24b01485a61d"},{url:"img/icons/android-chrome-512x512.png",revision:"1b237d159aed1c3069f50834fbf156b3"},{url:"img/icons/apple-touch-icon.png",revision:"899b89acd061e0725eddbaac033fca1b"},{url:"img/icons/favicon-16x16.png",revision:"676506427ae286ac02a79d84d93f3535"},{url:"img/icons/favicon-32x32.png",revision:"bbfe7595a281624d2434abb3fd3709a8"},{url:"img/icons/favicon.ico",revision:"9186d1d811a5aab112ecf5f39abc1691"},{url:"img/icons/mstile-150x150.png",revision:"a81cd34d5e7c59e3eaa6df68f306c355"},{url:"img/icons/safari-pinned-tab.svg",revision:"e2243a175a61dea3e35755663880dc9a"},{url:"img/khat-icon-192.png",revision:"42148fc92e547ba45707c86eda09a79b"},{url:"img/khat-icon-512.png",revision:"8b165d59228f081b88729659224031db"},{url:"img/khate-menu-img.png",revision:"14afcc3744c83f57262d4792a3165095"},{url:"img/logo.png",revision:"8b165d59228f081b88729659224031db"},{url:"index.html",revision:"d7a50ffd7eecf349e2377a7a80a6895f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/pback.jpg",revision:"f38ba9a980b7ed09338e9da3947b1711"},{url:"img/icons/android-chrome-192x192.png",revision:"92d3afa87a85f00ff53b24b01485a61d"},{url:"img/icons/android-chrome-512x512.png",revision:"1b237d159aed1c3069f50834fbf156b3"},{url:"manifest.webmanifest",revision:"eae5dd2463c20bd6d140432c65cdef08"}],{}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
