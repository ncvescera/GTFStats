(function(){"use strict";var a={8670:function(a,t,n){n(8937);var l=n(9242),e=n(3396);const o={class:"container"},r={class:"row"},i={class:"col"},d={key:0,class:"d-flex justify-content-center"},s=(0,e._)("div",{class:"spinner-border",role:"status"},[(0,e._)("span",{class:"visually-hidden"},"Loading...")],-1),u=[s];function c(a,t,n,l,s,c){const f=(0,e.up)("NavBar"),_=(0,e.up)("EnemyCard");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(f),(0,e._)("div",o,[(0,e._)("div",r,[(0,e._)("div",i,[a.isloading?((0,e.wg)(),(0,e.iD)("div",d,u)):((0,e.wg)(!0),(0,e.iD)(e.HY,{key:1},(0,e.Ko)(a.enemydata,(a=>((0,e.wg)(),(0,e.j4)(_,{key:a,data:a},null,8,["data"])))),128))])])])],64)}const f={class:"navbar navbar-expand-lg navbar-light bg-light"},_=(0,e.uE)('<div class="container-fluid" data-v-0da419f6><a class="navbar-brand" href="#" data-v-0da419f6><b data-v-0da419f6>GTFStats</b></a><span class="navbar-text" data-v-0da419f6> Web UI for <span id="monospace" data-v-0da419f6>EnemyBalancingDataBlock</span> stats provided by <a href="https://github.com/UntiIted/OriginalDataBlocks" target="_balnk" data-v-0da419f6>UntiIted/OriginalDataBlocks</a></span><form class="d-flex" data-v-0da419f6><a class="btn" type="button" href="https://github.com/ncvescera/GTFStats" target="_blank" data-v-0da419f6><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" data-v-0da419f6><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-v-0da419f6></path></svg></a></form></div>',1),p=[_];function v(a,t,n,l,o,r){return(0,e.wg)(),(0,e.iD)("nav",f,p)}var m={name:"NavBar"},g=n(89);const h=(0,g.Z)(m,[["render",v],["__scopeId","data-v-0da419f6"]]);var b=h,y=n(7139);const w={class:"card"},D=["href","aria-controls"],k={class:"enemy-name"},S=["id"],H={class:"card-body"};function C(a,t,n,l,o,r){const i=(0,e.up)("HealthSection"),d=(0,e.up)("DamageSection"),s=(0,e.up)("CollisionSection"),u=(0,e.up)("GlueSection");return(0,e.wg)(),(0,e.iD)("div",w,[(0,e._)("div",{class:"card-header","data-bs-toggle":"collapse",href:`#collapse${n.data.persistentID}`,role:"button","aria-expanded":"false","aria-controls":`collapse${n.data.persistentID}`},[(0,e._)("b",k,(0,y.zw)(n.data.name.replace("_"," ")),1)],8,D),(0,e._)("div",{class:"collapse",id:`collapse${n.data.persistentID}`},[(0,e._)("div",H,[(0,e.Wm)(i,{data:n.data},null,8,["data"]),(0,e.Wm)(d,{data:n.data},null,8,["data"]),(0,e.Wm)(s,{data:n.data},null,8,["data"]),(0,e.Wm)(u,{data:n.data},null,8,["data"])])],8,S)])}const M=(0,e._)("h3",null,"Collision 🧱",-1),O={class:"table table-striped"},x=(0,e._)("colgroup",null,[(0,e._)("col",{class:"col-10"}),(0,e._)("col",{class:"col-2"})],-1),z=(0,e._)("td",null,"Can be Pushed?",-1),B=(0,e._)("td",null,"Collision Minimum MoveSpeed Modifier",-1),T=(0,e._)("td",null,"Collision Movement Reduction",-1),j=(0,e._)("td",null,"Collision Radius",-1);function E(a,t,n,l,o,r){return(0,e.wg)(),(0,e.iD)(e.HY,null,[M,(0,e._)("table",O,[x,(0,e._)("tbody",null,[(0,e._)("tr",null,[z,(0,e._)("td",null,(0,y.zw)(n.data.CanBePushed?"✅":"❌"),1)]),(0,e._)("tr",null,[B,(0,e._)("td",null,(0,y.zw)(n.data.EnemyCollisionMinimumMoveSpeedModifier),1)]),(0,e._)("tr",null,[T,(0,e._)("td",null,(0,y.zw)(n.data.EnemyCollisionPlayerMovementReduction),1)]),(0,e._)("tr",null,[j,(0,e._)("td",null,(0,y.zw)(n.data.EnemyCollisionRadius),1)])])])],64)}var G={name:"CollisionSection",props:["data"]};const I=(0,g.Z)(G,[["render",E]]);var A=I;const P=(0,e._)("h3",null,"Damage 🗡️",-1),W={class:"table table-striped"},F=(0,e._)("colgroup",null,[(0,e._)("col",{class:"col-10"}),(0,e._)("col",{class:"col-2"})],-1),Z=(0,e._)("td",null,"Melee Attack Damage",-1),Y=(0,e._)("td",null,"Tentacle Attack Damage",-1);function R(a,t,n,l,o,r){return(0,e.wg)(),(0,e.iD)(e.HY,null,[P,(0,e._)("table",W,[F,(0,e._)("tbody",null,[(0,e._)("tr",null,[Z,(0,e._)("td",null,(0,y.zw)(n.data.MeleeAttackDamage),1)]),(0,e._)("tr",null,[Y,(0,e._)("td",null,(0,y.zw)(n.data.TentacleAttackDamage),1)])])])],64)}var U={name:"DamageSection",props:["data"]};const N=(0,g.Z)(U,[["render",R]]);var $=N;const K=(0,e._)("h3",null,"C-Foam 💦",-1),L={class:"table table-striped"},q=(0,e._)("colgroup",null,[(0,e._)("col",{class:"col-10"}),(0,e._)("col",{class:"col-2"})],-1),J=(0,e._)("td",null,"Glue Tolerance",-1),Q=(0,e._)("td",null,"Glue FadeOut Time",-1);function V(a,t,n,l,o,r){return(0,e.wg)(),(0,e.iD)(e.HY,null,[K,(0,e._)("table",L,[q,(0,e._)("tbody",null,[(0,e._)("tr",null,[J,(0,e._)("td",null,(0,y.zw)(n.data.GlueTolerance),1)]),(0,e._)("tr",null,[Q,(0,e._)("td",null,(0,y.zw)(n.data.GlueFadeOutTime),1)])])])],64)}var X={name:"GlueSection",props:["data"]};const aa=(0,g.Z)(X,[["render",V]]);var ta=aa;const na=(0,e._)("h3",null,"Health 🩸",-1),la={class:"table table-striped"},ea=(0,e._)("colgroup",null,[(0,e._)("col",{class:"col-10"}),(0,e._)("col",{class:"col-2"})],-1),oa=(0,e._)("td",null,"Max Health",-1),ra=(0,e._)("td",null,"BodyPart Health",-1),ia=(0,e._)("td",null,"Weakspot Damage Multi",-1),da=(0,e._)("td",null,"Armor Damage Multi",-1),sa=(0,e._)("td",null,"Damage until Hit React",-1);function ua(a,t,n,l,o,r){return(0,e.wg)(),(0,e.iD)(e.HY,null,[na,(0,e._)("table",la,[ea,(0,e._)("tbody",null,[(0,e._)("tr",null,[oa,(0,e._)("td",null,(0,y.zw)(n.data.Health.HealthMax),1)]),(0,e._)("tr",null,[ra,(0,e._)("td",null,(0,y.zw)(n.data.Health.BodypartHealth),1)]),(0,e._)("tr",null,[ia,(0,e._)("td",null,"x"+(0,y.zw)(n.data.Health.WeakspotDamageMulti),1)]),(0,e._)("tr",null,[da,(0,e._)("td",null,"x"+(0,y.zw)(n.data.Health.ArmorDamageMulti),1)]),(0,e._)("tr",null,[sa,(0,e._)("td",null,(0,y.zw)(n.data.Health.DamageUntilHitreact),1)])])])],64)}var ca={name:"HealthSection",props:["data"]};const fa=(0,g.Z)(ca,[["render",ua]]);var _a=fa,pa={name:"EnemyCard",components:{HealthSection:_a,DamageSection:$,CollisionSection:A,GlueSection:ta},props:["data"]};const va=(0,g.Z)(pa,[["render",C],["__scopeId","data-v-6591c8f8"]]);var ma=va;const ga=n(6265)["default"];var ha={name:"App",components:{NavBar:b,EnemyCard:ma},data:function(){return{isloading:!0,enemydata:[]}},mounted(){document.title="GTFStats",console.log("getting data .."),this.getData()},methods:{getData(){ga.get("https://raw.githubusercontent.com/UntiIted/OriginalDataBlocks/master/EnemyBalancingDataBlock.json").then((a=>{this.enemydata=a.data.Blocks,this.enemydata.sort(((a,t)=>a.name>t.name?1:t.name>a.name?-1:0)),this.isloading=!1}))}}};const ba=(0,g.Z)(ha,[["render",c]]);var ya=ba;(0,l.ri)(ya).mount("#app")}},t={};function n(l){var e=t[l];if(void 0!==e)return e.exports;var o=t[l]={exports:{}};return a[l](o,o.exports,n),o.exports}n.m=a,function(){var a=[];n.O=function(t,l,e,o){if(!l){var r=1/0;for(u=0;u<a.length;u++){l=a[u][0],e=a[u][1],o=a[u][2];for(var i=!0,d=0;d<l.length;d++)(!1&o||r>=o)&&Object.keys(n.O).every((function(a){return n.O[a](l[d])}))?l.splice(d--,1):(i=!1,o<r&&(r=o));if(i){a.splice(u--,1);var s=e();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=a.length;u>0&&a[u-1][2]>o;u--)a[u]=a[u-1];a[u]=[l,e,o]}}(),function(){n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,{a:t}),t}}(),function(){n.d=function(a,t){for(var l in t)n.o(t,l)&&!n.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={143:0};n.O.j=function(t){return 0===a[t]};var t=function(t,l){var e,o,r=l[0],i=l[1],d=l[2],s=0;if(r.some((function(t){return 0!==a[t]}))){for(e in i)n.o(i,e)&&(n.m[e]=i[e]);if(d)var u=d(n)}for(t&&t(l);s<r.length;s++)o=r[s],n.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return n.O(u)},l=self["webpackChunkgtfstats"]=self["webpackChunkgtfstats"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(8670)}));l=n.O(l)})();
//# sourceMappingURL=app.1f2a6a38.js.map