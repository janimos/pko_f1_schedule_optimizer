(function(){"use strict";var e={1180:function(e,t,n){var r=n(5130),o=n(6768);const l={id:"app"};function u(e,t){const n=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",l,[(0,o.bF)(n)])}var a=n(1241);const i={},c=(0,a.A)(i,[["render",u]]);var s=c,d=n(1387),f=n(4232),p=n(144),v=n(8355);const h=(0,o.Lk)("header",null,[(0,o.Lk)("h1",null,"Formula 1 Schedule Solutions")],-1);var k={__name:"ScheduleList",setup(e){const t=(0,p.KR)([]);return(0,o.sV)((()=>{v.A.get("/schedules/list").then((e=>{t.value=e.data.map((e=>({id:e.solutionId,title:e.score})))})).catch((e=>{console.error("Error fetching schedules:",e)}))})),(e,n)=>{const r=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",null,[h,(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.value,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id},[(0,o.bF)(r,{to:"/schedule/"+e.id},{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(e.title),1)])),_:2},1032,["to"])])))),128))])])}}};const g=k;var m=g;const b={class:"schedule-container"},L=["innerHTML"],y={class:"main-content"},O={class:"schedule-content"},E={class:"grand-prix-schedule-container"},_=(0,o.Lk)("h3",null,"Grand Prix Schedule",-1),C={class:"grand-prix-schedule"},j=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Week"),(0,o.Lk)("th",null,"Grand Prix"),(0,o.Lk)("th",null,"Track"),(0,o.Lk)("th",null,"Attendance")])],-1),S={class:"map-block"},w=(0,o.Lk)("h3",null,"Grand Prix Schedule Map",-1),x={class:"map-content"},T={class:"score-explanation"},M=(0,o.Lk)("h3",null,"Hard/Soft Score Explanation",-1),X={class:"score-content"},F=["innerHTML"],I={class:"score-explanation-table"},K=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Grand Prix"),(0,o.Lk)("th",null,"Total Score"),(0,o.Lk)("th",null,"Constraints")])],-1);function P(e,t,n,r,l,u){const a=(0,o.g2)("l-tile-layer"),i=(0,o.g2)("l-tooltip"),c=(0,o.g2)("l-marker"),s=(0,o.g2)("l-polyline"),d=(0,o.g2)("l-map");return(0,o.uX)(),(0,o.CE)("div",b,[(0,o.Lk)("h2",{class:"schedule-title",innerHTML:"Schedule #"+e.solutionId},null,8,L),(0,o.Lk)("div",y,[(0,o.Lk)("section",O,[(0,o.Lk)("div",E,[_,(0,o.Lk)("table",C,[j,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.stages,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.name},[(0,o.Lk)("td",null,(0,f.v_)(e.week),1),(0,o.Lk)("td",null,(0,f.v_)(e.name),1),(0,o.Lk)("td",null,(0,f.v_)(e.location.address),1),(0,o.Lk)("td",null,(0,f.v_)(e.attendance[e.week]),1)])))),128))])])])]),(0,o.Lk)("aside",S,[w,(0,o.Lk)("div",x,[(0,o.bF)(d,{ref:"map",zoom:l.zoom,"onUpdate:zoom":t[0]||(t[0]=e=>l.zoom=e),center:e.getCenter()},{default:(0,o.k6)((()=>[(0,o.bF)(a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',"layer-type":"base",name:"OpenStreetMap"}),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.markers,(e=>((0,o.uX)(),(0,o.Wv)(c,{key:e.stageName,"lat-lng":e.latLng},{default:(0,o.k6)((()=>[(0,o.bF)(i,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(e.stageName),1)])),_:2},1024)])),_:2},1032,["lat-lng"])))),128)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.polylines,((e,t)=>((0,o.uX)(),(0,o.Wv)(s,{key:t,"lat-lngs":e,color:"blue"},null,8,["lat-lngs"])))),128))])),_:1},8,["zoom","center"])])])]),(0,o.Lk)("section",T,[M,(0,o.Lk)("div",X,[(0,o.Lk)("p",null,[(0,o.eW)("Total Hard/Soft Score: "),(0,o.Lk)("span",{class:(0,f.C4)(e.scoreBadge),innerHTML:e.scoreText},null,10,F)])]),(0,o.Lk)("div",I,[(0,o.Lk)("table",null,[K,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.indictmentMap,(t=>((0,o.uX)(),(0,o.CE)("tr",{key:t.indictedObjectID},[(0,o.Lk)("td",null,(0,f.v_)(t.indictedObjectID),1),(0,o.Lk)("td",null,(0,f.v_)(t.score),1),(0,o.Lk)("td",null,[(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.constraintMatches,(t=>((0,o.uX)(),(0,o.CE)("li",{key:t.constraintName},(0,f.v_)(e.getScore(t.constraintName,t.score)),1)))),128))])])])))),128))])])])])])}const A=()=>{const e=(0,d.lq)(),t=e.params.solutionId,n=(0,p.KR)(""),r=(0,p.KR)(""),l=(0,p.KR)([]),u=(0,p.KR)({}),a=(0,p.KR)([]),i=(0,p.KR)([]),c=e=>e.slice(0,e.indexOf("hard")),s=(e,t)=>(c(t),`${e} : ${t}`),f=()=>{a.value=l.value.map((e=>({latLng:[e.location.latitude,e.location.longitude],stageName:e.name})))},h=()=>{const e=a.value.map((e=>e.latLng));i.value=[e]},k=()=>a.value.length>0?a.value[0].latLng:[47.41322,-1.219482];return(0,o.sV)((()=>{v.A.get(`/schedules/score?id=${t}`).then((e=>{const t=e.data;n.value=t.score,r.value=0===c(t.score)?"badge bg-success":"badge bg-danger"})),v.A.get(`/schedules/solution?id=${t}`).then((e=>{const n=e.data;l.value=n.stageList,f(),h(),v.A.get(`/schedules/indictments?id=${t}`).then((e=>{const t=e.data;t.forEach((e=>{u.value[e.indictedObjectID]=e}))}))}))})),{solutionId:t,scoreText:n,scoreBadge:r,stages:l,indictmentMap:u,markers:a,polylines:i,getScore:s,getCenter:k}};var N=n(1614),z={name:"ScheduleDetails",setup(){return A()},components:{LMap:N.Do,LTileLayer:N.a,LMarker:N.li,LTooltip:N.KV,LPolyline:N.vc},data(){return{zoom:10}}};const R=(0,a.A)(z,[["render",P]]);var H=R;const W=[{path:"/",component:m},{path:"/schedule/:solutionId",component:H,props:!0}],D=(0,d.aE)({history:(0,d.LA)("/"),routes:W});var $=D;const G=(0,r.Ef)(s);G.use($),G.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var l=t[r]={exports:{}};return e[r].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,l){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],l=e[s][2];for(var a=!0,i=0;i<r.length;i++)(!1&l||u>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[i])}))?r.splice(i--,1):(a=!1,l<u&&(u=l));if(a){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[r,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var l=Object.create(null);n.r(l);var u={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){u[e]=function(){return r[e]}}));return u["default"]=function(){return r},n.d(l,u),l}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+e+"."+{24:"dd576d29",71:"09f9f0e7",249:"8f7d9db5",791:"e945b7bb",886:"d84dc2d4"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(r,o,l,u){if(e[r])e[r].push(o);else{var a,i;if(void 0!==l)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+l){a=d;break}}a||(i=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+l),a.src=r),e[r]=[o];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),i&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var l=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=l);var u=n.p+n.u(t),a=new Error,i=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var l=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+l+": "+u+")",a.name="ChunkLoadError",a.type=l,a.request=u,o[1](a)}};n.l(u,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,l,u=r[0],a=r[1],i=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(i)var s=i(n)}for(t&&t(r);c<u.length;c++)l=u[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(s)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1180)}));r=n.O(r)})();