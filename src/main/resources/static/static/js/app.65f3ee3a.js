(function(){"use strict";var e={3311:function(e,n,t){var r=t(5130),o=t(6768);const a={id:"app"};function s(e,n){const t=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",a,[(0,o.bF)(t)])}var u=t(1241);const c={},l=(0,u.A)(c,[["render",s]]);var i=l,d=t(1387),f=t(4232),h=t(144),v=t(8355);const p=(0,o.Lk)("header",null,[(0,o.Lk)("h1",null,"Formula 1 Schedule Solutions")],-1);var b={__name:"ScheduleList",setup(e){const n=(0,h.KR)([]);return(0,o.sV)((()=>{v.A.get("/schedules/list").then((e=>{n.value=e.data.map((e=>({id:e.solutionId,title:e.score})))})).catch((e=>{console.error("Error fetching schedules:",e)}))})),(e,t)=>{const r=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",null,[p,(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.value,(e=>((0,o.uX)(),(0,o.CE)("li",{key:e.id},[(0,o.bF)(r,{to:"/schedule/"+e.id},{default:(0,o.k6)((()=>[(0,o.eW)((0,f.v_)(e.title),1)])),_:2},1032,["to"])])))),128))])])}}};const g=b;var k=g;const m=e=>((0,o.Qi)("data-v-73076f8c"),e=e(),(0,o.jt)(),e),L={class:"schedule-container"},y=["innerHTML"],E={class:"main-content"},O={class:"score-explanation"},_=["innerHTML"],x=m((()=>(0,o.Lk)("aside",{class:"map-block"}," Map Block ",-1))),C={id:"schedule_container"},S={class:"grand-prix-schedule"},T=m((()=>(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Week of Race"),(0,o.Lk)("th",null,"Grand Prix"),(0,o.Lk)("th",null,"Track")])],-1)));function $(e,n,t,r,a,s){return(0,o.uX)(),(0,o.CE)("div",L,[(0,o.Lk)("h2",{class:"schedule-title",innerHTML:"Schedule #"+e.solutionId},null,8,y),(0,o.Lk)("div",E,[(0,o.Lk)("section",O,[(0,o.eW)(" Hard/Soft Score Explanation "),(0,o.Lk)("span",{class:(0,f.C4)(e.scoreBadge),innerHTML:e.scoreText},null,10,_)]),x]),(0,o.Lk)("div",C,[(0,o.Lk)("table",S,[T,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.stages,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.name},[(0,o.Lk)("td",null,(0,f.v_)(e.week),1),(0,o.Lk)("td",null,(0,f.v_)(e.name),1),(0,o.Lk)("td",null,(0,f.v_)(e.location.address),1)])))),128))])])])])}const j=()=>{const e=(0,d.lq)(),n=e.params.solutionId,t=(0,h.KR)(""),r=(0,h.KR)(""),a=(0,h.KR)([]),s=(0,h.KR)({}),u=e=>e.slice(0,e.indexOf("hard")),c=e=>{const n=s.value[e];if(!n)return"";let t=`Total score: <b>${n.score}</b> (${n.matchCount})<br>`;return n.constraintMatches.forEach((e=>{t+=0===u(e.score)?`${e.constraintName} : ${e.score}<br>`:`<b>${e.constraintName} : ${e.score}</b><br>`})),t},l=e=>`<span class="${null==s.value[e.name]||0===u(s.value[e.name].score)?"badge bg-success":"badge bg-danger"}">${e.name}</span>`;return(0,o.sV)((()=>{v.A.get(`/schedules/score?id=${n}`).then((e=>{const n=e.data;t.value=n.score,r.value=0===u(n.score)?"badge bg-success":"badge bg-danger"})),v.A.get(`/schedules/solution?id=${n}`).then((e=>{const t=e.data;a.value=t.stageList,v.A.get(`/schedules/indictments?id=${n}`).then((e=>{const n=e.data;n.forEach((e=>{s.value[e.indictedObjectID]=e}))}))}))})),{solutionId:n,scoreText:t,scoreBadge:r,stages:a,getEntityPopoverContent:c,stageDisplay:l}};var w={name:"ScheduleDetails",setup(){return j()}};const I=(0,u.A)(w,[["render",$],["__scopeId","data-v-73076f8c"]]);var M=I;const A=[{path:"/",component:k},{path:"/schedule/:solutionId",component:M,props:!0}],K=(0,d.aE)({history:(0,d.LA)("/"),routes:A});var X=K;const F=(0,r.Ef)(i);F.use(X),F.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var s=1/0;for(i=0;i<e.length;i++){r=e[i][0],o=e[i][1],a=e[i][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<s&&(s=a));if(u){e.splice(i--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,s=r[0],u=r[1],c=r[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var i=c(t)}for(n&&n(r);l<s.length;l++)a=s[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(i)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(3311)}));r=t.O(r)})();
//# sourceMappingURL=app.65f3ee3a.js.map