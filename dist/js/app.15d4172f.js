(function(e){function t(t){for(var n,A,c=t[0],i=t[1],l=t[2],u=0,f=[];u<c.length;u++)A=c[u],Object.prototype.hasOwnProperty.call(r,A)&&r[A]&&f.push(r[A][0]),r[A]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,A=1;A<a.length;A++){var i=a[A];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function A(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e5e8626a"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=A(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/medialab-one-pager/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"0c6a":function(e,t,a){},"3a3f":function(e,t,a){"use strict";a("db72")},"45e3":function(e,t,a){},"49c0":function(e,t,a){"use strict";a("45e3")},6196:function(e,t,a){},7468:function(e,t,a){"use strict";a("6196")},"7b62":function(e,t,a){"use strict";a("0c6a")},a19d:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAALhUlEQVR4nO3d36tlZR3H8bdykBoOh0G66A+QLvoTughCKjLLflpJmTBohJmZ2DQXIhJUSphZ4o+SzB8VUlAhXYTIICIichA5DCGDHIYYYhhEJESGw0wXjw97z3n2+bX32ut51vq+X1ehzjmP4ed91l5n/7jkwoULSIrp0toHkFSPAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAW2AlwBXFf7II15Ffhn7UOoU4eBa4EP1D5IQ15ZAU4CHwR+XPkwLXkX+C7wRO2DqBNrwNPAVbUP0pAzwJX5IcAx4N6Kh2nNIeAh4PraB9HC1oA/4finnQGuBDam7wEcxQhMMwLD5/hLZ4BPAhtQ3gQ0AhczAsPl+EtnSeN/Pf+FWb8FMAIXyxH4Zu2DaN98zF86S7rsf336L+70a0AjcLFDwCMYgSHI47+69kEaMnP8sPvzAI4Cv1jWiQbICLTP8Zd2HD/s/USgOzAC04xAuxx/adfxw/6eCWgELuY9gfY4/lJxw2+W/T4V2IcDF1vFCLRiDXgSxz8tj/+1vf7B/QbgPEZguxwBn0ZdTx7/52sfpCH7Hj8c7MVARqC0SronYAT65/hLZ4FPs8/xw8FfDZgjcN8B/9yYGYH+Of7SaeATwPpB/tDKHN/oPOnGIMAP5/jzY5QjAPDHmgcJYA34A45/2mnS3f5/H/QPzvt+ADkCXglMeCWwfHn8X6h9kIbMPX5Y7A1BjEApR+DrtQ8yQo6/tND4YfF3BDICpVXgtxiBLjn+0mnS3f65xw/dvCWYESgZge44/lIe/4lFv1BX7wloBEpGYHGOv9TZ+KHbNwXNEbi/w685dDkC19Y+yACtAb/H8U/rdPzQ/bsCnwduxwhMWwUewwgcRB7/l2ofpCGnSU/y6Wz8sJy3BTcCJSOwf46/lMe/0fUXXtbnAhiBkhHYm+MvLW38sNwPBvGeQMl7Ajtz/KWljh+W/8lAW6QIPLDk7zMkaxiB7Rx/aenjh34+GmyL9HDACEwYgYn80MjxT2ySXtiz1PFDf58NaARKOQJfqX2QilZJP/kj/3+w3SbpJ/8bfXyzPj8c1AiU1kg//SIOwPGXNulx/ND/pwMbgVLECOTL/kj/znvZpOfxA1xy4cKFPr9ftgL8EvhejW/eqHeAI8Bfah9kyfzJX9qkwvih/yuAbAu4DfhNpe/foghXAv7kL21SafxQLwBgBGYZcwR8IlRpE/gMlcYP9R4CTFsh3Q2/ofI5WjK2hwOOv7RJGv9Cr+dfVM0rgGwL+A7wRO2DNCRfCYzhd+OOv7RJA+OHNgIAcA64ESMwbQzPjvOpz6VTNDJ+aCcAMInAU7UP0pAhR8A3RCmdIt3wa2L80FYAIEXgCEZg2hAj4PhLzY0f2gsAGIFZ8j2BIbw7juMvvUmD44f5PhikD/nhAPgBnNlh0pUAwN9qHmQXvi166Q3SY/43ax9klhavALL38J7AdjkCLV4J+MEopabHD20HAIzALC1GwPGXmh8/tB8AmETAz9ybaCkCjr80iPHDMAIAKQJHMALTcgRqfkim4y8NZvwwnADAJAK/q32Qhhym3iflOv7SoMYPwwoApAjcDDxc+yANqRGBVeAhHP+0wY0fhhcASL8ivBUjMK3PCOTx++vZiTeAzzKw8cMwAwBGYJY+IuD4S3n8J2sfZB4tvBx4EZcBvwZuqn2QhrwNfAt4tuOv6/hLJ0mX/YMcPwz3CiA7B9wCPFr7IA05DDwJXN3h13T8pcGPH4YfADACs3QZgUM4/u1GMX4YRwDACMzSRQQcf2mDkYwfxhMAmETA9xicWCQCefzXd3qiYdtgwDf8ZhlTACBF4HbgvtoHaUj+7cBBIuD4S3n8p2ofpEtjCwCkCBzDCEy7nP1H4BDwII5/2ijHD+MMABiBWfYTgTz+G/o40ECMdvww3gDAJAL31z5IQ3IErprx9xx/aQP4HCMdP4w7AJAicBQjMO1y0o3B6Qg4/lIe/2blcyzV0J8JuF+XAfcAP6h9kIa8RXrG4HEc/3Yhxg9xAgBGYJa3SP+xf7z2QRoSZvwQKwBgBLS7UOOH8d8D2M57AtrJCYKNH+IFACYReKD2QdSME6Rf9W1WPkfvIgYAUgTuwAgo8PghbgDACAjWSS/s2ax8jmpa/WSgvuQIAHy/5kHUu3XSY/7TtQ9SU+QrgMwrgXgc//sMQJJvDPpS4vFbB67B8QMGYNp7pJcS31v7IFqaPP7/1D5IKwzAxc4BdwI/rX0Qdc7xz2AASueAu4Gf1z6IOuP4d2AAZjsH3IURGAPHvwsDsDMjMHzrwBdx/DsyALszAsOVxz/aN/PoQrRXA85rBfgR8BOM5hC8Rrrsd/x78D/m/dki/XrwTuB85bNod47/AAzA/hmB9jn+AzIAB5MjcBdGoDWOfw4G4OC2SDcFjUA7HP+cDMB8jEA7HP8CDMD8jEB9LzPiD+3ogwFYTI7A3RiBvr1M+j2/r+pbgAFY3BbpxUNGoD95/P+tfZChMwDdMAL9eRn4Mo6/Ez4TsFsrpM8c+Bm+3doy5PF72d8RA9C9FdL7C96DEejSK/iYv3M+BOjeFun9BY++/7+1OMe/JAZgOXIEjmEEFuX4l8gALM8W6SPIjMD8HP+SGYDlMgLzc/w98CZgPy4FbgJ+RfqEYu3O8ffEK4B+nAceBW4lvcuQdub4e2QA+mME9ub4e2YA+pUjcBtGYDvHX4EB6N954GGMwLRX8Bl+VRiAOozARB6/b91dgQGoJ0fgdtLnEkb0AulTeh1/Jf4asA03AA8Chyqfo08vAF8FztQ+SGReAbThceBm4N3K5+iL42+EAWjH48SIgONviAFoy+PALYw3Ai/i+JviPYA2XQc8AqzWPkiHXiTd7Xf8DTEA7boWeIxxRMDxN8qHAO16BjgC/K/2QRbkZX/DDEDbngFuZLgRyOP3DTwbZQDa92fSlcA7tQ9yQI5/ALwHMBxXA08Ch2sfZB8c/0B4BTAczwLfBt6ufZA9vITjHwwDMCz/oO0IvIQf2jEoBmB4Wo2AP/kHyHsAw/Up4GngQ7UPwmT8vp5/YLwCGK5/Ad8AzlY+h+MfMAMwbM9RNwLPAdfg+AfLAAxfrQjUjo86YADG4Tnga/R3A87xj4Q3AcflY8BfgQ8v8Xs4/hHxCmBclv17+Odx/KNiAMZnWRF4nvQww/GPiAEYp64j4PhHygCM10ukt9w+teDXcfwjZgDG7VXSx23NGwEf84+cARi/deaLQB6/7+QzYgYghoNG4DiOPwQDEMc66Wm7J/f4546THvM7/gB8IlA8HwX+Dlwx4+8dx/GH4hVAPCdIDwe2Xwkcx/GHYwBi2uDiCBzH8YfkQ4DYPkJ6s9GncPwhGQApMB8CSIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmAGQArMAEiBGQApMAMgBWYApMAMgBSYAZACMwBSYAZACswASIEZACkwAyAFZgCkwAyAFJgBkAIzAFJgBkAKzABIgRkAKTADIAVmAKTADIAUmAGQAjMAUmD/BztaraUHMhtJAAAAAElFTkSuQmCC"},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t,a,r,o,A){var c=Object(n["v"])("TopBlock");return Object(n["o"])(),Object(n["d"])(c)}var o=a("d4ec"),A=a("262e"),c=a("2caf"),i=a("9ab4"),l=Object(n["A"])("data-v-fbb9c480");Object(n["s"])("data-v-fbb9c480");var u={class:"long__container"},s={class:"layer"},f={class:"wide__container"},v=Object(n["f"])("h1",{class:"title"},"Design Challenge",-1),d=Object(n["f"])("h2",{class:"subtitle"},"Scheveningen",-1),g={class:"arrow-bottom"},b=Object(n["f"])("div",{class:"wide__container --second"},[Object(n["f"])("h1",{class:"title"},"Hey bezoeker"),Object(n["f"])("h2",{class:"subtitle"},"Welkom op deze pagina ;)")],-1);Object(n["p"])();var p=l((function(e,t,a,r,o,A){var c=Object(n["v"])("arrow-down");return Object(n["o"])(),Object(n["d"])("div",u,[Object(n["f"])("div",s,[Object(n["f"])("div",f,[v,d,Object(n["f"])("div",g,[Object(n["f"])(c)])]),b])])})),h=a("ce1f"),w=a("a19d"),j=a.n(w),B=Object(n["A"])("data-v-64806464");Object(n["s"])("data-v-64806464");var O=Object(n["f"])("div",null,[Object(n["f"])("img",{class:"arrow",src:j.a})],-1);Object(n["p"])();var M=B((function(e,t,a,r,o,A){return Object(n["o"])(),Object(n["d"])(n["a"],{name:"attention"},{default:B((function(){return[O]})),_:1})})),m=function(e){Object(A["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(h["b"]);a("ff16");m.render=M,m.__scopeId="data-v-64806464";var C=m,k=function(e){Object(A["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(h["b"]);k=Object(i["a"])([Object(h["a"])({components:{ArrowDown:C}})],k);var D=k;a("3a3f");D.render=p,D.__scopeId="data-v-fbb9c480";var I=D,P=Object(n["A"])("data-v-19c9682c");Object(n["s"])("data-v-19c9682c");var Q={class:"wide__container"},y=Object(n["f"])("h1",{class:"title"},"Design Challenge",-1),Y=Object(n["f"])("h2",{class:"subtitle"},"Scheveningen",-1);Object(n["p"])();var S=P((function(e,t){return Object(n["o"])(),Object(n["d"])("div",Q,[y,Y])}));a("49c0");const z={};z.render=S,z.__scopeId="data-v-19c9682c";var E=z,x=function(e){Object(A["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(h["b"]);x=Object(i["a"])([Object(h["a"])({components:{TopBlock:I,SubBlock:E}})],x);var H=x;a("7b62");H.render=r;var G=H,F=a("9483");Object(F["a"])("".concat("/medialab-one-pager/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var Z=a("6c02"),T=a("cf05"),L=a.n(T),X={class:"home"},J=Object(n["f"])("img",{alt:"Vue logo",src:L.a},null,-1);function R(e,t,a,r,o,A){var c=Object(n["v"])("HelloWorld");return Object(n["o"])(),Object(n["d"])("div",X,[J,Object(n["f"])(c,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var U=Object(n["A"])("data-v-4904481e");Object(n["s"])("data-v-4904481e");var N={class:"hello"},K=Object(n["e"])('<p data-v-4904481e> For a guide and recipes on how to configure / customize this project,<br data-v-4904481e> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-4904481e>vue-cli documentation</a>. </p><h3 data-v-4904481e>Installed CLI Plugins</h3><ul data-v-4904481e><li data-v-4904481e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-4904481e>babel</a></li><li data-v-4904481e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-4904481e>pwa</a></li><li data-v-4904481e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-4904481e>router</a></li><li data-v-4904481e><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-4904481e>typescript</a></li></ul><h3 data-v-4904481e>Essential Links</h3><ul data-v-4904481e><li data-v-4904481e><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-4904481e>Core Docs</a></li><li data-v-4904481e><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-4904481e>Forum</a></li><li data-v-4904481e><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-4904481e>Community Chat</a></li><li data-v-4904481e><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-4904481e>Twitter</a></li><li data-v-4904481e><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-4904481e>News</a></li></ul><h3 data-v-4904481e>Ecosystem</h3><ul data-v-4904481e><li data-v-4904481e><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-4904481e>vue-router</a></li><li data-v-4904481e><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-4904481e>vuex</a></li><li data-v-4904481e><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-4904481e>vue-devtools</a></li><li data-v-4904481e><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-4904481e>vue-loader</a></li><li data-v-4904481e><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-4904481e>awesome-vue</a></li></ul>',7);Object(n["p"])();var W=U((function(e,t,a,r,o,A){return Object(n["o"])(),Object(n["d"])("div",N,[Object(n["f"])("h1",null,Object(n["x"])(e.msg),1),K])})),_=function(e){Object(A["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(h["b"]);_=Object(i["a"])([Object(h["a"])({props:{msg:String}})],_);var V=_;a("7468");V.render=W,V.__scopeId="data-v-4904481e";var q=V,$=function(e){Object(A["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(h["b"]);$=Object(i["a"])([Object(h["a"])({components:{HelloWorld:q}})],$);var ee=$;ee.render=R;var te=ee,ae=[{path:"/",name:"Home",component:te},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],ne=Object(Z["a"])({history:Object(Z["b"])(),routes:ae}),re=ne;Object(n["c"])(G).use(re).mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},db72:function(e,t,a){},f9bd:function(e,t,a){},ff16:function(e,t,a){"use strict";a("f9bd")}});
//# sourceMappingURL=app.15d4172f.js.map