if(!self.define){let i,e={};const n=(n,o)=>(n=new URL(n+".js",o).href,e[n]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=e,document.head.appendChild(i)}else i=n,importScripts(n),e()})).then((()=>{let i=e[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(o,s)=>{const c=i||("document"in self?document.currentScript.src:"")||location.href;if(e[c])return;let r={};const a=i=>n(i,c),d={module:{uri:c},exports:r,require:a};e[c]=Promise.all(o.map((i=>d[i]||a(i)))).then((i=>(s(...i),r)))}}define(["./workbox-7369c0e1"],(function(i){"use strict";self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"assets/AboutView-4d995ba2.css",revision:null},{url:"assets/AboutView-57edcb27.js",revision:null},{url:"assets/index-140483d9.css",revision:null},{url:"assets/index-2e2ba423.js",revision:null},{url:"assets/text337-f8695728.png",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"img/khat-icon-192.png",revision:"42148fc92e547ba45707c86eda09a79b"},{url:"img/khat-icon-512.png",revision:"8b165d59228f081b88729659224031db"},{url:"img/logo.png",revision:"8b165d59228f081b88729659224031db"},{url:"index.html",revision:"cad54264ad1d7547740d541c32d073ae"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"img/khat-icon-192.png",revision:"42148fc92e547ba45707c86eda09a79b"},{url:"img/khat-icon-512.png",revision:"8b165d59228f081b88729659224031db"},{url:"manifest.webmanifest",revision:"d93a520f0f8e4e0b2b0910f9f3bc30af"}],{}),i.cleanupOutdatedCaches(),i.registerRoute(new i.NavigationRoute(i.createHandlerBoundToURL("index.html")))}));
