(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"01a05fa8"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"25eed59a"}[t]+".css",r=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var o=s[i],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===n||l===r))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){o=u[i],l=o.getAttribute("data-href");if(l===n||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.request=n,a(s)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=i);var l,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=o(t),l=function(e){f.onerror=f.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}s[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,u.appendChild(f)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/News-project/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b6f":function(t,e,a){"use strict";var n=a("efbc"),r=a.n(n);r.a},"0be9":function(t,e,a){},1792:function(t,e,a){"use strict";var n=a("4266"),r=a.n(n);r.a},1914:function(t,e,a){},"1b3f":function(t,e,a){"use strict";var n=a("7f08"),r=a.n(n);r.a},"21bb":function(t,e,a){"use strict";var n=a("1914"),r=a.n(n);r.a},"28a3":function(t,e,a){},"3bb6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popular__news"},[a("figure",{staticClass:"popular__img-holder"},[a("img",{staticClass:"popular__img",attrs:{src:t.news.urlToImage,alt:t.news.urlToImage}}),a("figcaption",{staticClass:"popular__date"},[t._v(t._s(t._f("dateFilter")(t.news.publishedAt)))]),a("span",{staticClass:"popular__hidden"},[t._v("\n        "+t._s(t.news.description)+"\n    ")])]),a("div",{staticClass:"popular__info "},[a("h4",{staticClass:"popular__title"},[t._v(t._s(t._f("titleFilter")(t.news.title)))]),a("h5",{staticClass:"popular__author"},[t._v(t._s(null===t.news.author?"Unknow author":t.news.author))]),a("cta-btn",{staticClass:"align-right",attrs:{id:t.newId}},[t._v("\n      Learn more\n    ")])],1)])},r=[],s=(a("ac4d"),a("8a81"),a("ac6a"),a("28a5"),{data:function(){return{}},props:["news"],filters:{titleFilter:function(t){var e=0,a=t.split(" "),n=[];if(a.length>10){var r=!0,s=!1,i=void 0;try{for(var o,c=a[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;e+l.length<50&&(e+=l.length,n.push(l))}}catch(t){s=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(s)throw i}}return"".concat(n.join(" "),"...")}return t}},computed:{newId:function(){return this.news.title.split(" ").join("-")}}}),i=s,o=(a("1792"),a("2877")),c=Object(o["a"])(i,n,r,!1,null,"0519f376",null);c.options.__file="newsCard.vue";e["a"]=c.exports},4266:function(t,e,a){},"4b95":function(t,e,a){"use strict";var n=a("0be9"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/",tag:"a",href:"#"}},[n("img",{staticClass:"navbar__logo",attrs:{src:a("cf05"),alt:""}})]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("router-link",{staticClass:"nav-item",attrs:{tag:"li",to:"/","active-class":"active",exact:""}},[n("a",{staticClass:"nav-link"},[t._v("\n                        home\n                        "),n("span",{staticClass:"sr-only"},[t._v("(current)")])])]),t._l(t.links,function(e){return n("router-link",{key:e.name,staticClass:"nav-item",attrs:{tag:"li",to:e.url,"active-class":"active"}},[n("a",{staticClass:"nav-link"},[t._v("\n                        "+t._s(e.name)+"\n                      ")])])})],2),n("form",{staticClass:"form-inline my-2 my-lg-0"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRes,expression:"searchRes"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.searchRes},on:{input:function(e){e.target.composing||(t.searchRes=e.target.value)}}}),n("button",{staticClass:"btn btn-outline-warning my-2 my-sm-0",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.submitRes()}}},[t._v("Search")])])])],1)]),t.isLoading?n("loader"):t._e(),n("keep-alive",[n("router-view")],1),n("Vfooter")],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"footer"},[a("div",{staticClass:"container d-flex justify-content-center"},[a("div",{staticClass:"footer__contact"},[a("h5",{staticClass:"footer__contact-info"},[t._v("\n                Email: phanhuutoan9X@gmail.com\n            ")]),a("h5",{staticClass:"footer__contact-info"},[t._v("\n                Name: Phan Huu Toan\n            ")]),a("a",{staticClass:"footer__contact-web",attrs:{href:"https://newsapi.org/"}},[t._v("\n                Power by Newsapi.org\n            ")])])])])}],c={},l=c,u=(a("f187"),a("2877")),f=Object(u["a"])(l,i,o,!1,null,null,null);f.options.__file="footer.vue";var p=f.exports,h={data:function(){return{links:[{url:"/hotNews",name:"hot news"},{url:"/financialNews",name:"financial news"},{url:"/otherNews",name:"other news"}],searchRes:""}},components:{Vfooter:p},computed:{isLoading:function(){return this.$store.state.loadingState}},methods:{submitRes:function(){this.$router.push({path:"/search-page"}),this.$store.dispatch("searchRes",this.searchRes),this.searchRes=""}}},d=h,v=(a("0b6f"),Object(u["a"])(d,r,s,!1,null,"633a79d6",null));v.options.__file="App.vue";var m=v.exports,_=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"hero-area"},[a("div",{staticClass:"hero__content container "},[a("h1",{staticClass:"hero__title"},[t._v("\n                  "+t._s(t.homeData[t.index].title)+"\n                ")]),a("h5",{staticClass:"hero__des"},[t._v("\n                  "+t._s(t.homeData[t.index].description)+"\n                ")]),a("cta-btn",{attrs:{id:t.makeId}},[t._v("\n                read more\n              ")])],1),a("div",{staticClass:"hero__navigation"},[a("i",{staticClass:"fas fa-arrow-circle-left hero__btn",on:{click:function(e){0===t.index?t.index=1:t.index--}}}),a("i",{staticClass:"fas fa-arrow-circle-right hero__btn",on:{click:function(e){t.index===t.homeData.length?t.index=0:t.index++}}})])]),a("section",{staticClass:"popular container"},[t._m(0),a("div",{staticClass:"popular__news-section"},t._l(t.featureNews,function(t){return a("news-card",{key:t.title,attrs:{news:t}})}))]),a("section",{staticClass:"popular container"},[t._m(1),a("div",{staticClass:"popular__news-section"},t._l(t.financialNews,function(t){return a("news-card",{key:t.title,attrs:{news:t}})}))])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popular__heading"},[a("h4",{staticClass:"title"},[t._v("\n        popular news\n      ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popular__heading"},[a("h4",{staticClass:"title"},[t._v("\n        Financial News\n      ")])])}],w=(a("28a5"),a("3bb6")),C=a("5118"),y={created:function(){var t=this;this.$store.dispatch("getData"),Object(C["setInterval"])(function(){t.index===t.homeData.length?t.index=0:t.index++},4e3)},data:function(){return{index:1}},methods:{},computed:{featureNews:function(){return this.$store.getters.featureNews},homeData:function(){return this.$store.getters.homeData},financialNews:function(){return this.$store.state.financeData.slice(0,3)},makeId:function(){var t=this.homeData[this.index].title.split(" ");return t.join("-")}},components:{newsCard:w["a"]}},D=y,x=(a("21bb"),Object(u["a"])(D,g,b,!1,null,null,null));x.options.__file="Home.vue";var k=x.exports;n["a"].use(_["a"]);var N=new _["a"]({routes:[{path:"/",name:"home",component:k},{path:"/hotNews",name:"hotNews",component:function(){return a.e("about").then(a.bind(null,"2312"))}},{path:"/financialNews",name:"financialNews",component:function(){return a.e("about").then(a.bind(null,"b04e"))}},{path:"/otherNews",name:"otherNews",component:function(){return a.e("about").then(a.bind(null,"c261"))}},{path:"/search-page",name:"search page",component:function(){return a.e("about").then(a.bind(null,"bdf7"))}},{path:"/:id",props:!0,name:"news detail",component:function(){return a.e("about").then(a.bind(null,"d6db"))}}]}),P=(a("7514"),a("96cf"),a("3040")),j=(a("6762"),a("2fdb"),a("8afe")),$=a("2f62"),E=a("bc3a"),O=a.n(E),R={apiKey:"0a018efaccb24ffe8a67c77f16201cf8",url:"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=",urlFin:"https://newsapi.org/v2/everything?q=apple&from=2018-10-16&to=2018-10-16&sortBy=popularity&apiKey=",urlHot:"https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey="};n["a"].use($["a"]);var S=new $["a"].Store({state:{homeData:"",financeData:"",hotData:"",allData:[],loadingState:!0,searchResult:[]},mutations:{getDataHome:function(t,e){var a;t.homeData=e,(a=t.allData).push.apply(a,Object(j["a"])(e))},getDataFinance:function(t,e){var a;t.financeData=e,(a=t.allData).push.apply(a,Object(j["a"])(e))},getDataHot:function(t,e){var a;t.hotData=e,(a=t.allData).push.apply(a,Object(j["a"])(e))},changeState:function(t){t.loadingState=!1},searchRes:function(t,e){var a=t.allData.filter(function(t){return t.title.toLowerCase().includes(e)});t.searchResult=a}},actions:{getData:function(){var t=Object(P["a"])(regeneratorRuntime.mark(function t(e){var a,n,r,s,i,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,O.a.get("".concat(R.url).concat(R.apiKey));case 4:return n=t.sent,r=n.data.articles,t.next=8,O.a.get("".concat(R.urlFin).concat(R.apiKey));case 8:return s=t.sent,i=s.data.articles,t.next=12,O.a.get("".concat(R.urlHot).concat(R.apiKey));case 12:o=t.sent,c=o.data.articles,a("changeState"),a("getDataHome",r),a("getDataFinance",i),a("getDataHot",c),t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](1),alert(t.t0),a("changeState");case 24:case"end":return t.stop()}},t,this,[[1,20]])}));return function(e){return t.apply(this,arguments)}}(),searchRes:function(t,e){var a=t.commit;a("searchRes",e)}},getters:{homeData:function(t){if(t.homeData)return t.homeData},featureNews:function(t){if(t.homeData)return t.homeData.slice(2,5)},getallData:function(t){return function(e){return t.allData.find(function(t){return t.title===e})}}}}),A=a("d973"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"cta",attrs:{href:"#"},on:{click:function(e){t.moveDetail()}}},[t._t("default")],2)},T=[],B={props:["id"],methods:{moveDetail:function(){this.$router.push({path:"/".concat(this.id)})}}},H=B,I=(a("1b3f"),Object(u["a"])(H,F,T,!1,null,null,null));I.options.__file="CTA_button.vue";var K=I.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:t.isDeActiveBa}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:t.movePageBack}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pages,function(e){return a("li",{key:e,staticClass:"page-item",on:{click:function(a){a.preventDefault(),t.renderPage(e)}}},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:t.isDeActiveFo}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.movePageFor(e)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])},M=[],U={created:function(){},data:function(){return{pageNum:1}},props:["totalResult"],computed:{pages:function(){return Math.ceil(this.totalResult/9)},isDeActiveFo:function(){return this.pageNum===this.pages},isDeActiveBa:function(){return 1===this.pageNum}},methods:{renderPage:function(t){this.pageNum=t,this.$emit("renderPage",t)},movePageFor:function(){this.pageNum===this.pages?this.isDeActiveFo=!0:(this.pageNum++,this.$emit("renderPage",this.pageNum))},movePageBack:function(){1===this.pageNum?this.isDeActiveBa=!0:(this.pageNum--,this.$emit("renderPage",this.pageNum))}}},q=U,J=(a("4b95"),Object(u["a"])(q,L,M,!1,null,null,null));J.options.__file="pagination.vue";var V=J.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hot-news"},[a("div",{staticClass:"hot-news__recommend"},[a("h4",{staticClass:"hot-news__title"},[t._v("Recommend")]),a("div",{staticClass:"hot-news__recom-area"},t._l(t.getAllData,function(e){return a("recommend",{key:e.title,attrs:{source:e.url}},[t._v("\n                "+t._s(e.title)+"\n            ")])}))]),a("div",{staticClass:"hot-news__area"},[a("h4",{staticClass:"hot-news__title"},[t._v(t._s(t.namePage))]),a("p",{staticClass:"hot-news__content"},[t._v("In here, You can get whatever you want around the world")]),t._l(t.resultPerPage,function(t){return a("newsCard",{key:t.title,attrs:{news:t}})})],2),t._m(0),a("div",{staticClass:"hot-news__pagination"},[a("pagination",{attrs:{totalResult:t.getHotdata.length},on:{renderPage:function(e){t.renderUI(e)}}})],1)])},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hot-news__ads"},[n("img",{staticClass:"hot-news__ads--banner",attrs:{src:a("ec24"),alt:"banner"}})])}],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"rec-link",attrs:{href:t.source,target:"blank"}},[a("i",{staticClass:"fas fa-bolt"}),t._t("default")],2)},G=[],Q={props:["source"]},W=Q,Z=(a("8ea5"),Object(u["a"])(W,z,G,!1,null,null,null));Z.options.__file="recommend.vue";var tt=Z.exports,et={created:function(){this.renderUI(1)},props:["whatData","namePage"],components:{newsCard:w["a"],recommend:tt},data:function(){return{resultPerPage:""}},computed:{getHotdata:function(){return this.whatData},getAllData:function(){return this.$store.state.allData.slice(4,14)}},methods:{renderUI:function(t){var e=9*(t-1),a=9*t;this.resultPerPage=this.getHotdata.slice(e,a)}}},at=et,nt=(a("dfd1"),Object(u["a"])(at,X,Y,!1,null,null,null));nt.options.__file="renderPage.vue";var rt=nt.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container d-flex align-items-center flex-column loader"},[n("img",{staticClass:"loader__img",attrs:{src:a("5c3d"),alt:"yeah"}}),n("span",{staticClass:"loader__info"},[t._v("Loading data...")])])}],ot={},ct=ot,lt=(a("f1d8"),Object(u["a"])(ct,st,it,!1,null,null,null));lt.options.__file="loader.vue";var ut=lt.exports;a("b159"),a("77ed");n["a"].filter("dateFilter",function(t){return t.substr(0,10)}),n["a"].component("ctaBtn",K),n["a"].component("pagination",V),n["a"].component("renderPage",rt),n["a"].component("loader",ut),n["a"].use(A["a"]),n["a"].config.productionTip=!1,new n["a"]({router:N,store:S,render:function(t){return t(m)}}).$mount("#app")},"5c3d":function(t,e,a){t.exports=a.p+"img/spinner.6a83bd97.svg"},"616e":function(t,e,a){},"7f08":function(t,e,a){},"8ea5":function(t,e,a){"use strict";var n=a("9ad5"),r=a.n(n);r.a},"911d":function(t,e,a){},"9ad5":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.6f4407a5.png"},dfd1:function(t,e,a){"use strict";var n=a("616e"),r=a.n(n);r.a},ec24:function(t,e,a){t.exports=a.p+"img/banner.68e82e9a.png"},efbc:function(t,e,a){},f187:function(t,e,a){"use strict";var n=a("911d"),r=a.n(n);r.a},f1d8:function(t,e,a){"use strict";var n=a("28a3"),r=a.n(n);r.a}});
//# sourceMappingURL=app.765a1010.js.map