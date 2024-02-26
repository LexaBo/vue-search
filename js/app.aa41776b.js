(function(){"use strict";var e={4744:function(e,a,t){var o=t(9242),n=t(3396);const i={class:"app"};function r(e,a,t,o,r,p){const l=(0,n.up)("AppHeader"),m=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(l),(0,n.Wm)(m)])}const p={class:"app-header"};function l(e,a,t,o,i,r){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("header",p,[(0,n.Wm)(l,{to:"/",class:"app-header__logo"},{default:(0,n.w5)((()=>[(0,n.Uk)(" LOGO ")])),_:1}),(0,n.Wm)(l,{to:"/",class:"app-header__user"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Пользователь ")])),_:1})])}var m=(0,n.aZ)({name:"AppHeader"}),s=t(89);const u=(0,s.Z)(m,[["render",l],["__scopeId","data-v-1430679e"]]);var c=u,d=(0,n.aZ)({name:"App",components:{AppHeader:c}});const q=(0,s.Z)(d,[["render",r]]);var U=q,N=t(2483);const V={class:"app-main"},f={class:"app-main__column"},T={class:"app-main__column"};function v(e,a,t,o,i,r){const p=(0,n.up)("SidebarMain"),l=(0,n.up)("EmployeeInfo"),m=(0,n.up)("LoaderMain");return(0,n.wg)(),(0,n.iD)("main",V,[(0,n._)("div",f,[(0,n.Wm)(p)]),(0,n._)("div",T,[(0,n.Wm)(l)]),e.isLoading?((0,n.wg)(),(0,n.j4)(m,{key:0})):(0,n.kq)("",!0)])}var h=t(7139),y="data:image/png;base64,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";const g=e=>((0,n.dD)("data-v-88819a28"),e=e(),(0,n.Cn)(),e),A={class:"sidebar-main"},K=g((()=>(0,n._)("h4",{class:"sidebar-main__title"}," Поиск сотрудников ",-1))),E=g((()=>(0,n._)("h4",{class:"sidebar-main__title"}," Результаты ",-1))),I={key:0,class:"sidebar-main-result-note"},S=["onClick"],F=g((()=>(0,n._)("div",{class:"sidebar-main-result__image-container"},[(0,n._)("img",{src:y,alt:"avatar",class:"sidebar-main-result__image"})],-1))),R={class:"sidebar-main-result__description"},W={class:"sidebar-main-result__name"},C={class:"sidebar-main-result__email"};function k(e,a,t,i,r,p){return(0,n.wg)(),(0,n.iD)("div",A,[K,(0,n._)("form",{onSubmit:a[2]||(a[2]=(0,o.iM)((()=>{}),["prevent"])),class:"sidebar-main__form"},[(0,n.wy)((0,n._)("input",{onInput:a[0]||(a[0]=a=>{e.onInputEmployeesDebounce(),e.onInputEmployees()}),"onUpdate:modelValue":a[1]||(a[1]=a=>e.requiredEmployees=a),placeholder:"Введите id или имя",class:"sidebar-main__input",type:"text"},null,544),[[o.nr,e.requiredEmployees]])],32),E,e.showNoteResult?((0,n.wg)(),(0,n.iD)("p",I,(0,h.zw)(e.noteResult),1)):((0,n.wg)(),(0,n.iD)("div",{key:1,onScroll:a[3]||(a[3]=(...a)=>e.onScrollResults&&e.onScrollResults(...a)),class:"sidebar-main__results"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.partEmployees,(a=>((0,n.wg)(),(0,n.iD)("div",{key:a.id,onClick:t=>e.onClickResult(a.id),class:(0,h.C_)(["sidebar-main__result sidebar-main-result",{"sidebar-main__result sidebar-main-result--active":e.currentSelectedValue===a.id}])},[F,(0,n._)("div",R,[(0,n._)("p",W,(0,h.zw)(a.username),1),(0,n._)("p",C,(0,h.zw)(a.email),1)])],10,S)))),128))],32))])}var _=t(4870),O=t(5413),Q=t(65),Z=(0,n.aZ)({name:"SidebarMain",setup(){const e=(0,_.iH)(null),a=(0,Q.oR)(),t=(0,n.Fl)((()=>a.getters.currentIdEmployee)),o=(0,n.Fl)((()=>a.getters.employees)),i=(0,n.Fl)((()=>(0,_.SU)(e)?"ничего не найдено":"начните поиск")),r=(0,n.Fl)((()=>!(0,_.SU)(e)||!(0,_.SU)(o).length)),p=(0,_.iH)("1"),l=6,m=(0,n.Fl)((()=>(0,_.SU)(o).slice(0,l*(0,_.SU)(p)))),s=()=>{(0,_.SU)(e)||(p.value=1,a.dispatch("updateCurrentIdEmployee",null))},u=(0,O.DI)((()=>{a.dispatch("getEmployees",(0,_.SU)(e))}),500),c=e=>{a.dispatch("updateCurrentIdEmployee",e)},d=e=>{const a=e.currentTarget;a.scrollTop+a.clientHeight>=a.scrollHeight&&(p.value+=1)};return{onClickResult:c,currentSelectedValue:t,employees:o,partEmployees:m,requiredEmployees:e,onInputEmployees:s,onInputEmployeesDebounce:u,noteResult:i,showNoteResult:r,onScrollResults:d}}});const b=(0,s.Z)(Z,[["render",k],["__scopeId","data-v-88819a28"]]);var X=b;const L=e=>((0,n.dD)("data-v-d228058e"),e=e(),(0,n.Cn)(),e),j={class:"employee-info"},P={key:0,class:"employee-info__container-profile"},B=L((()=>(0,n._)("div",{class:"employee-info__container-image"},[(0,n._)("img",{src:y,alt:"avatar",class:"employee-info__image"})],-1))),D={class:"employee-info__container-resume"},w={class:"employee-info__name"},J={class:"employee-info__contacts"},z={class:"employee-info__contact employee-info-contact"},Y=L((()=>(0,n._)("span",{class:"employee-info-contact__title"},"email:",-1))),x={class:"employee-info-contact__text"},H={class:"employee-info__contact employee-info-contact"},G=L((()=>(0,n._)("span",{class:"employee-info-contact__title"},"phone:",-1))),M={class:"employee-info-contact__text"},$=L((()=>(0,n._)("div",{class:"employee-info-description"},[(0,n._)("p",{class:"employee-info-description__title"}," О себе: "),(0,n._)("p",{class:"employee-info-description__text"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")],-1))),ee={key:1,class:"employee-info__change-profile"};function ae(e,a,t,o,i,r){return(0,n.wg)(),(0,n.iD)("div",j,[e.employee?((0,n.wg)(),(0,n.iD)("div",P,[B,(0,n._)("div",D,[(0,n._)("p",w,(0,h.zw)(e.employee.name),1),(0,n._)("div",J,[(0,n._)("p",z,[Y,(0,n.Uk)("  "),(0,n._)("span",x,(0,h.zw)(e.employee.email),1)]),(0,n._)("p",H,[G,(0,n.Uk)("  "),(0,n._)("span",M,(0,h.zw)(e.employee.phone),1)])]),$])])):((0,n.wg)(),(0,n.iD)("p",ee," Выберите сотрудника, чтобы посмотреть его профиль "))])}var te=(0,n.aZ)({name:"EmployeeInfo",setup(){const e=(0,Q.oR)(),a=(0,n.Fl)((()=>e.getters.employee));return{employee:a}}});const oe=(0,s.Z)(te,[["render",ae],["__scopeId","data-v-d228058e"]]);var ne=oe;const ie=e=>((0,n.dD)("data-v-0cb13fbe"),e=e(),(0,n.Cn)(),e),re={xmlns:"http://www.w3.org/2000/svg",display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",class:"loader-main"},pe=ie((()=>(0,n._)("circle",{cx:"50",cy:"50",r:"35",fill:"none",stroke:"#E0E0E0","stroke-dasharray":"164.93361431346415 56.97787143782138","stroke-width":"10"},[(0,n._)("animateTransform",{attributeName:"transform",dur:"1s",keyTimes:"0;1",repeatCount:"indefinite",type:"rotate",values:"0 50 50;360 50 50"})],-1))),le=[pe];function me(e,a,t,o,i,r){return(0,n.wg)(),(0,n.iD)("svg",re,le)}var se=(0,n.aZ)({name:"LoaderMain"});const ue=(0,s.Z)(se,[["render",me],["__scopeId","data-v-0cb13fbe"]]);var ce=ue,de=(0,n.aZ)({name:"AppHeader",components:{SidebarMain:X,EmployeeInfo:ne,LoaderMain:ce},setup(){const e=(0,Q.oR)(),a=(0,n.Fl)((()=>e.getters.isLoad));return{isLoading:a}}});const qe=(0,s.Z)(de,[["render",v],["__scopeId","data-v-fdd9259a"]]);var Ue=qe;const Ne=[{path:"/",name:"home",component:Ue}],Ve=(0,N.p7)({history:(0,N.r5)(),routes:Ne});var fe=Ve,Te=(t(560),(0,Q.MT)({state:{employees:[],isLoading:!1,currentIdEmployee:null},getters:{employees(e){return e.employees},employee(e){return e.employees.find((a=>a.id===e.currentIdEmployee))},isLoad(e){return e.isLoading},currentIdEmployee(e){return e.currentIdEmployee}},mutations:{updateEmployees(e,a){e.employees=a},setLoad(e,a){e.isLoading=a},setCurrentIdEmployee(e,a){e.currentIdEmployee=a}},actions:{getEmployees(e,a){const t=a.split(",").map((e=>e.trim())).filter((e=>""!==e)),o=[],n=[],i=[];let r="",p="";const l=a=>(e.commit("setLoad",!0),fetch(`https://jsonplaceholder.typicode.com/users?${a}`).then((e=>e.json())).catch((()=>[])));t.forEach((e=>(isNaN(e)?n:o).push(e))),o.length&&(r=`id=${o.join("&id=")}`,i.push(l(r))),n.length&&(p=`username=${n.join("&username=")}`,i.push(l(p)));const m=e=>e.reduce(((e,a)=>e.find((e=>JSON.stringify(e)===JSON.stringify(a)))?e:[...e,a]),[]);Promise.allSettled(i).then((a=>{const t=[];a.forEach(((e,a)=>{"fulfilled"===e.status&&t.push(e.value)})),e.commit("setLoad",!1),e.commit("updateEmployees",m([].concat(...t)))}))},updateLoad(e,a){e.commit("setLoad",a)},updateCurrentIdEmployee(e,a){e.commit("setCurrentIdEmployee",a)}}}));(0,o.ri)(U).use(Te).use(fe).mount("#app")}},a={};function t(o){var n=a[o];if(void 0!==n)return n.exports;var i=a[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,o,n,i){if(!o){var r=1/0;for(s=0;s<e.length;s++){o=e[s][0],n=e[s][1],i=e[s][2];for(var p=!0,l=0;l<o.length;l++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(p=!1,i<r&&(r=i));if(p){e.splice(s--,1);var m=n();void 0!==m&&(a=m)}}return a}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,n,i]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var o in a)t.o(a,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:a[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,o){var n,i,r=o[0],p=o[1],l=o[2],m=0;if(r.some((function(a){return 0!==e[a]}))){for(n in p)t.o(p,n)&&(t.m[n]=p[n]);if(l)var s=l(t)}for(a&&a(o);m<r.length;m++)i=r[m],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},o=self["webpackChunkvue_search"]=self["webpackChunkvue_search"]||[];o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(4744)}));o=t.O(o)})();
//# sourceMappingURL=app.aa41776b.js.map