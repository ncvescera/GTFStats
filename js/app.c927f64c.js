(function(){"use strict";var t={5398:function(t,a,e){e(8937);var l=e(9242),n=e(3396);const s={class:"container"},o={class:"row"},i={class:"col"},c={key:0,class:"d-flex justify-content-center"},r=(0,n._)("div",{class:"spinner-border",role:"status"},[(0,n._)("span",{class:"visually-hidden"},"Loading...")],-1),d=[r];function u(t,a,e,l,r,u){const p=(0,n.up)("NavBar"),h=(0,n.up)("EnemyCard");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(p),(0,n._)("div",s,[(0,n._)("div",o,[(0,n._)("div",i,[t.isloading?((0,n.wg)(),(0,n.iD)("div",c,d)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)(t.enemydata,(t=>((0,n.wg)(),(0,n.j4)(h,{key:t,data:t},null,8,["data"])))),128))])])])],64)}const p=t=>((0,n.dD)("data-v-aa4d1692"),t=t(),(0,n.Cn)(),t),h={class:"navbar navbar-expand-lg navbar-light bg-light"},g={class:"container-fluid"},m=p((()=>(0,n._)("a",{class:"navbar-brand",href:"#"},[(0,n._)("b",null,"GTFStats")],-1))),_=p((()=>(0,n._)("span",{class:"navbar-text"},[(0,n.Uk)(" Web UI for "),(0,n._)("span",{id:"monospace"},"EnemyBalancingDataBlock"),(0,n.Uk)(" stats provided by "),(0,n._)("a",{href:"https://github.com/UntiIted/OriginalDataBlocks",target:"_balnk"},"UntiIted/OriginalDataBlocks")],-1))),v={class:"d-flex"},f={class:"btn",type:"button",href:"https://github.com/ncvescera/GTFStats",target:"_blank"};function b(t,a,e,l,s,o){const i=(0,n.up)("GitHub");return(0,n.wg)(),(0,n.iD)("nav",h,[(0,n._)("div",g,[m,_,(0,n._)("form",v,[(0,n._)("a",f,[(0,n.Wm)(i)])])])])}const w=["width","height"],D=(0,n._)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"},null,-1),y=[D];function I(t,a,e,l,s,o){return(0,n.wg)(),(0,n.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.w?e.w:30,height:e.h?e.h:30,fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16"},y,8,w)}var C={name:"GitHub",props:["w","h"]},k=e(89);const x=(0,k.Z)(C,[["render",I]]);var $=x,M={name:"NavBar",components:{GitHub:$}};const E=(0,k.Z)(M,[["render",b],["__scopeId","data-v-aa4d1692"]]);var B=E,H=e(7139);const S={class:"card"},z={class:"card-header"},O={class:"row"},j=["href","aria-controls"],P={class:"enemy-name"},G={class:"col-2 text-end"},T=["id"],A=["id"],Z={class:"card-body"};function W(t,a,e,l,s,o){const i=(0,n.up)("EyeOpen"),c=(0,n.up)("HealthSection"),r=(0,n.up)("DamageSection"),d=(0,n.up)("CollisionSection"),u=(0,n.up)("GlueSection");return(0,n.wg)(),(0,n.iD)("div",S,[(0,n._)("div",z,[(0,n._)("div",O,[(0,n._)("div",{class:"col-10","data-bs-toggle":"collapse",href:`#collapse${e.data.persistentID}`,role:"button","aria-expanded":"false","aria-controls":`collapse${e.data.persistentID}`},[(0,n._)("b",P,(0,H.zw)(e.data.name.replace("_"," ")),1)],8,j),(0,n._)("div",G,[(0,n._)("span",{class:"btn btn-sm collapse",id:`collapse${e.data.persistentID}`,onClick:a[0]||(a[0]=t=>o.click())},[(0,n.Wm)(i,{w:"20",h:"20"})],8,T)])])]),(0,n._)("div",{class:"collapse",id:`collapse${e.data.persistentID}`},[(0,n._)("div",Z,[(0,n.Wm)(c,{data:e.data,ref:`health-${e.data.persistentID}`},null,8,["data"]),(0,n.Wm)(r,{data:e.data,ref:`damage-${e.data.persistentID}`},null,8,["data"]),(0,n.Wm)(d,{data:e.data,ref:`collision-${e.data.persistentID}`},null,8,["data"]),(0,n.Wm)(u,{data:e.data,ref:`glue-${e.data.persistentID}`},null,8,["data"])])],8,A)])}const F={class:"row"},U=(0,n._)("div",{class:"col-10"},[(0,n._)("h3",null,"Collision 🧱")],-1),Y={class:"col-2 text-end"},R=["id","data-bs-target","aria-controls"],N=["id"],L={class:"table table-striped"},K=(0,n._)("colgroup",null,[(0,n._)("col",{class:"col-10"}),(0,n._)("col",{class:"col-2"})],-1),q=(0,n._)("td",null,"Can be Pushed?",-1),J=(0,n._)("td",null,"Collision Minimum MoveSpeed Modifier",-1),Q=(0,n._)("td",null,"Collision Movement Reduction",-1),V=(0,n._)("td",null,"Collision Radius",-1);function X(t,a,e,l,s,o){const i=(0,n.up)("PlusIcon"),c=(0,n.up)("MinusIcon");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",F,[U,(0,n._)("div",Y,[(0,n._)("button",{id:`collapseButtonCollision-${e.data.persistentID}`,class:"btn",type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapseExample-collision-${e.data.persistentID}`,"aria-expanded":"false","aria-controls":`collapseExample-collision-${e.data.persistentID}`,onClick:a[0]||(a[0]=t=>this.isCollapsed=!this.isCollapsed)},[this.isCollapsed?((0,n.wg)(),(0,n.j4)(i,{key:0})):((0,n.wg)(),(0,n.j4)(c,{key:1}))],8,R)])]),(0,n._)("div",{class:"collapse",id:`collapseExample-collision-${e.data.persistentID}`},[(0,n._)("table",L,[K,(0,n._)("tbody",null,[(0,n._)("tr",null,[q,(0,n._)("td",null,(0,H.zw)(e.data.CanBePushed?"✅":"❌"),1)]),(0,n._)("tr",null,[J,(0,n._)("td",null,(0,H.zw)(e.data.EnemyCollisionMinimumMoveSpeedModifier),1)]),(0,n._)("tr",null,[Q,(0,n._)("td",null,(0,H.zw)(e.data.EnemyCollisionPlayerMovementReduction),1)]),(0,n._)("tr",null,[V,(0,n._)("td",null,(0,H.zw)(e.data.EnemyCollisionRadius),1)])])])],8,N)],64)}const tt=["width","height"],at=(0,n._)("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"},null,-1),et=[at];function lt(t,a,e,l,s,o){return(0,n.wg)(),(0,n.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.w?e.w:30,height:e.h?e.h:30,fill:"currentColor",class:"bi bi-dash",viewBox:"0 0 16 16"},et,8,tt)}var nt={name:"MinusIcon",props:["w","h"]};const st=(0,k.Z)(nt,[["render",lt]]);var ot=st;const it=["width","height"],ct=(0,n._)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"},null,-1),rt=[ct];function dt(t,a,e,l,s,o){return(0,n.wg)(),(0,n.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.w?e.w:30,height:e.h?e.h:30,fill:"currentColor",class:"bi bi-plus",viewBox:"0 0 16 16"},rt,8,it)}var ut={name:"PlusIcon",props:["w","h"]};const pt=(0,k.Z)(ut,[["render",dt]]);var ht=pt,gt={components:{PlusIcon:ht,MinusIcon:ot},name:"CollisionSection",data:function(){return{isCollapsed:!0}},props:["data"],methods:{collapse(){document.getElementById(`collapseButtonCollision-${this.data.persistentID}`).click()}}};const mt=(0,k.Z)(gt,[["render",X]]);var _t=mt;const vt={class:"row"},ft=(0,n._)("div",{class:"col-10"},[(0,n._)("h3",null,"Damage 🗡️")],-1),bt={class:"col-2 text-end"},wt=["id","data-bs-target","aria-controls"],Dt=["id"],yt={class:"table table-striped"},It=(0,n._)("colgroup",null,[(0,n._)("col",{class:"col-10"}),(0,n._)("col",{class:"col-2"})],-1),Ct=(0,n._)("td",null,"Melee Attack Damage",-1),kt=(0,n._)("td",null,"Tentacle Attack Damage",-1);function xt(t,a,e,l,s,o){const i=(0,n.up)("PlusIcon"),c=(0,n.up)("MinusIcon");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",vt,[ft,(0,n._)("div",bt,[(0,n._)("button",{id:`collapseButtonDamage-${e.data.persistentID}`,class:"btn",type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapseExample-damage-${e.data.persistentID}`,"aria-expanded":"false","aria-controls":`collapseExample-damage-${e.data.persistentID}`,onClick:a[0]||(a[0]=t=>this.isCollapsed=!this.isCollapsed)},[this.isCollapsed?((0,n.wg)(),(0,n.j4)(i,{key:0})):((0,n.wg)(),(0,n.j4)(c,{key:1}))],8,wt)])]),(0,n._)("div",{class:"collapse",id:`collapseExample-damage-${e.data.persistentID}`},[(0,n._)("table",yt,[It,(0,n._)("tbody",null,[(0,n._)("tr",null,[Ct,(0,n._)("td",null,(0,H.zw)(e.data.MeleeAttackDamage),1)]),(0,n._)("tr",null,[kt,(0,n._)("td",null,(0,H.zw)(e.data.TentacleAttackDamage),1)])])])],8,Dt)],64)}var $t={components:{PlusIcon:ht,MinusIcon:ot},name:"DamageSection",data:function(){return{isCollapsed:!0}},props:["data"],methods:{collapse(){document.getElementById(`collapseButtonDamage-${this.data.persistentID}`).click()}}};const Mt=(0,k.Z)($t,[["render",xt]]);var Et=Mt;const Bt={class:"row"},Ht=(0,n._)("div",{class:"col-10"},[(0,n._)("h3",null,"C-Foam 💦")],-1),St={class:"col-2 text-end"},zt=["id","data-bs-target","aria-controls"],Ot=["id"],jt={class:"table table-striped"},Pt=(0,n._)("colgroup",null,[(0,n._)("col",{class:"col-10"}),(0,n._)("col",{class:"col-2"})],-1),Gt=(0,n._)("td",null,"Glue Tolerance",-1),Tt=(0,n._)("td",null,"Glue FadeOut Time",-1);function At(t,a,e,l,s,o){const i=(0,n.up)("PlusIcon"),c=(0,n.up)("MinusIcon");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",Bt,[Ht,(0,n._)("div",St,[(0,n._)("button",{id:`collapseButtonGlue-${e.data.persistentID}`,class:"btn",type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapseExample-glue-${e.data.persistentID}`,"aria-expanded":"false","aria-controls":`collapseExample-glue-${e.data.persistentID}`,onClick:a[0]||(a[0]=t=>this.isCollapsed=!this.isCollapsed)},[this.isCollapsed?((0,n.wg)(),(0,n.j4)(i,{key:0})):((0,n.wg)(),(0,n.j4)(c,{key:1}))],8,zt)])]),(0,n._)("div",{class:"collapse",id:`collapseExample-glue-${e.data.persistentID}`},[(0,n._)("table",jt,[Pt,(0,n._)("tbody",null,[(0,n._)("tr",null,[Gt,(0,n._)("td",null,(0,H.zw)(e.data.GlueTolerance),1)]),(0,n._)("tr",null,[Tt,(0,n._)("td",null,(0,H.zw)(e.data.GlueFadeOutTime),1)])])])],8,Ot)],64)}var Zt={name:"GlueSection",components:{PlusIcon:ht,MinusIcon:ot},data:function(){return{isCollapsed:!0}},props:["data"],methods:{collapse(){document.getElementById(`collapseButtonGlue-${this.data.persistentID}`).click()}}};const Wt=(0,k.Z)(Zt,[["render",At]]);var Ft=Wt;const Ut={class:"row"},Yt=(0,n._)("div",{class:"col-10"},[(0,n._)("h3",null,"Health 🩸")],-1),Rt={class:"col-2 text-end"},Nt=["id","data-bs-target","aria-controls"],Lt=["id"],Kt={class:"table table-striped"},qt=(0,n._)("colgroup",null,[(0,n._)("col",{class:"col-10"}),(0,n._)("col",{class:"col-2"})],-1),Jt=(0,n._)("td",null,"Health",-1),Qt=(0,n._)("td",null,"Limb Health",-1),Vt=(0,n._)("td",null,"Weakspot Damage mult.",-1),Xt=(0,n._)("td",null,"Armor Damage mult.",-1),ta=(0,n._)("td",null," Stagger Min Damage ",-1);function aa(t,a,e,l,s,o){const i=(0,n.up)("PlusIcon"),c=(0,n.up)("MinusIcon");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",Ut,[Yt,(0,n._)("div",Rt,[(0,n._)("button",{id:`collapseButtonHealth-${e.data.persistentID}`,class:"btn",type:"button","data-bs-toggle":"collapse","data-bs-target":`#collapseExample-health-${e.data.persistentID}`,"aria-expanded":"false","aria-controls":`collapseExample-health-${e.data.persistentID}`,onClick:a[0]||(a[0]=t=>this.isCollapsed=!this.isCollapsed)},[this.isCollapsed?((0,n.wg)(),(0,n.j4)(i,{key:0})):((0,n.wg)(),(0,n.j4)(c,{key:1}))],8,Nt)])]),(0,n._)("div",{class:"collapse",id:`collapseExample-health-${e.data.persistentID}`},[(0,n._)("table",Kt,[qt,(0,n._)("tbody",null,[(0,n._)("tr",null,[Jt,(0,n._)("td",null,(0,H.zw)(e.data.Health.HealthMax),1)]),(0,n._)("tr",null,[Qt,(0,n._)("td",null,(0,H.zw)(e.data.Health.BodypartHealth),1)]),(0,n._)("tr",null,[Vt,(0,n._)("td",null,"x"+(0,H.zw)(e.data.Health.WeakspotDamageMulti),1)]),(0,n._)("tr",null,[Xt,(0,n._)("td",null,"x"+(0,H.zw)(e.data.Health.ArmorDamageMulti),1)]),(0,n._)("tr",null,[ta,(0,n._)("td",null,(0,H.zw)(e.data.Health.DamageUntilHitreact),1)])])])],8,Lt)],64)}var ea={name:"HealthSection",components:{MinusIcon:ot,PlusIcon:ht},data:function(){return{isCollapsed:!0}},props:["data"],methods:{collapse(){document.getElementById(`collapseButtonHealth-${this.data.persistentID}`).click()}}};const la=(0,k.Z)(ea,[["render",aa]]);var na=la;const sa=["width","height"],oa=(0,n._)("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"},null,-1),ia=(0,n._)("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"},null,-1),ca=[oa,ia];function ra(t,a,e,l,s,o){return(0,n.wg)(),(0,n.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.w?e.w:30,height:e.h?e.h:30,fill:"currentColor",class:"bi bi-eye",viewBox:"0 0 16 16"},ca,8,sa)}var da={name:"EyeOpen",props:["w","h"]};const ua=(0,k.Z)(da,[["render",ra]]);var pa=ua,ha={name:"EnemyCard",components:{HealthSection:na,DamageSection:Et,CollisionSection:_t,GlueSection:Ft,EyeOpen:pa},props:["data"],methods:{click(){let t=[this.$refs[`health-${this.data.persistentID}`],this.$refs[`damage-${this.data.persistentID}`],this.$refs[`collision-${this.data.persistentID}`],this.$refs[`glue-${this.data.persistentID}`]],a=t.every((function(t){return!0===t.isCollapsed})),e=t.every((function(t){return!1===t.isCollapsed}));a||e?t.forEach((t=>t.collapse())):t.forEach((t=>t.isCollapsed&&t.collapse()))}}};const ga=(0,k.Z)(ha,[["render",W],["__scopeId","data-v-fd91ed1a"]]);var ma=ga;const _a=e(6265)["default"];var va={name:"App",components:{NavBar:B,EnemyCard:ma},data:function(){return{isloading:!0,enemydata:[]}},mounted(){document.title="GTFStats",console.log("getting data .."),this.getData()},methods:{getData(){_a.get("https://raw.githubusercontent.com/UntiIted/OriginalDataBlocks/master/EnemyBalancingDataBlock.json").then((t=>{this.enemydata=t.data.Blocks,this.enemydata.sort(((t,a)=>t.name>a.name?1:a.name>t.name?-1:0)),this.isloading=!1}))}}};const fa=(0,k.Z)(va,[["render",u]]);var ba=fa;(0,l.ri)(ba).mount("#app")}},a={};function e(l){var n=a[l];if(void 0!==n)return n.exports;var s=a[l]={exports:{}};return t[l](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(a,l,n,s){if(!l){var o=1/0;for(d=0;d<t.length;d++){l=t[d][0],n=t[d][1],s=t[d][2];for(var i=!0,c=0;c<l.length;c++)(!1&s||o>=s)&&Object.keys(e.O).every((function(t){return e.O[t](l[c])}))?l.splice(c--,1):(i=!1,s<o&&(o=s));if(i){t.splice(d--,1);var r=n();void 0!==r&&(a=r)}}return a}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[l,n,s]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var l in a)e.o(a,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(a){return 0===t[a]};var a=function(a,l){var n,s,o=l[0],i=l[1],c=l[2],r=0;if(o.some((function(a){return 0!==t[a]}))){for(n in i)e.o(i,n)&&(e.m[n]=i[n]);if(c)var d=c(e)}for(a&&a(l);r<o.length;r++)s=o[r],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(d)},l=self["webpackChunkgtfstats"]=self["webpackChunkgtfstats"]||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var l=e.O(void 0,[998],(function(){return e(5398)}));l=e.O(l)})();
//# sourceMappingURL=app.c927f64c.js.map