if(!self.define){let i,e={};const n=(n,o)=>(n=new URL(n+".js",o).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(o,c)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let s={};const a=i=>n(i,r),d={module:{uri:r},exports:s,require:a};e[r]=Promise.all(o.map((i=>d[i]||a(i)))).then((i=>(c(...i),s)))}}define(["./workbox-7369c0e1"],(function(i){"use strict";self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"assets/index-3392e538.css",revision:null},{url:"assets/index-473cfbf8.js",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"favicon.ico",revision:"9186d1d811a5aab112ecf5f39abc1691"},{url:"img/app-icon-512.png",revision:"36a07e4b428bf1c7b5b06c7bb02fe6f9"},{url:"img/favicon.png",revision:"6ef0c37ea1e4c1175980c58ce12cb2de"},{url:"img/icons/android-chrome-192x192.png",revision:"92d3afa87a85f00ff53b24b01485a61d"},{url:"img/icons/android-chrome-512x512.png",revision:"1b237d159aed1c3069f50834fbf156b3"},{url:"img/icons/apple-touch-icon.png",revision:"899b89acd061e0725eddbaac033fca1b"},{url:"img/icons/favicon-16x16.png",revision:"676506427ae286ac02a79d84d93f3535"},{url:"img/icons/favicon-32x32.png",revision:"bbfe7595a281624d2434abb3fd3709a8"},{url:"img/icons/favicon.ico",revision:"9186d1d811a5aab112ecf5f39abc1691"},{url:"img/icons/mstile-150x150.png",revision:"a81cd34d5e7c59e3eaa6df68f306c355"},{url:"img/icons/safari-pinned-tab.svg",revision:"e2243a175a61dea3e35755663880dc9a"},{url:"img/khat-icon-192.png",revision:"42148fc92e547ba45707c86eda09a79b"},{url:"img/khat-icon-512.png",revision:"8b165d59228f081b88729659224031db"},{url:"img/khate-menu-img.png",revision:"14afcc3744c83f57262d4792a3165095"},{url:"img/khate-menu2-img.png",revision:"dedd9ad1a7070864cec8c079d236fa05"},{url:"img/logo-myket.png",revision:"e23d881c7fe3180f20ee99c8d2019355"},{url:"img/logo.png",revision:"8b165d59228f081b88729659224031db"},{url:"index.html",revision:"ed774ccd5d453d7f724357bb29878a98"},{url:"register.js",revision:"17dbbdc1e67d71ee1596085b0b99b911"},{url:"img/pback.jpg",revision:"b39c23de2b78a5a09975cde3c1e297cb"},{url:"img/khate-menu-img.png",revision:"14afcc3744c83f57262d4792a3165095"},{url:".well-known/assetlinks.json",revision:"d4564b598f3894603608774d39accf41"},{url:"img/icons/android-chrome-192x192.png",revision:"92d3afa87a85f00ff53b24b01485a61d"},{url:"img/icons/android-chrome-512x512.png",revision:"1b237d159aed1c3069f50834fbf156b3"},{url:"manifest.webmanifest",revision:"eae5dd2463c20bd6d140432c65cdef08"}],{}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
