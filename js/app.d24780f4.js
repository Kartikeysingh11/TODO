(function(){"use strict";var t={4348:function(t,e,s){var n=s(5130),a=s(6768);const r={class:"Apps",id:"app"};function i(t,e,s,n,i,o){const c=(0,a.g2)("todo-app");return(0,a.uX)(),(0,a.CE)("div",r,[(0,a.bF)(c)])}var o=s(4232);const c=t=>((0,a.Qi)("data-v-2e58cc24"),t=t(),(0,a.jt)(),t),u={class:"container",style:{"max-width":"600px"}},l=c((()=>(0,a.Lk)("h2",{class:"text-center mt-5"},"TO-DO LIST",-1))),d={class:"d-flex mt-5"},k={class:"table table-bordered mt-5"},p=c((()=>(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",{scope:"col",class:"text-center"},"Task"),(0,a.Lk)("th",{scope:"col",class:"text-center"},"Status"),(0,a.Lk)("th",{scope:"col",class:"text-center"},"Edit"),(0,a.Lk)("th",{scope:"col",class:"text-center"},"Delete")])],-1))),f={class:"creation-time"},h=["onClick"],v={class:"text-center"},m=["onClick"],b=c((()=>(0,a.Lk)("span",{class:"fa fa-trash pointer"},null,-1))),L=[b],g={class:"text-center"},x=["onClick"],C=c((()=>(0,a.Lk)("p",{class:"fa fa-pen pointer"},null,-1))),T=[C];function y(t,e,s,r,i,c){return(0,a.uX)(),(0,a.CE)("div",u,[l,(0,a.Lk)("div",d,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>i.task=t),placeholder:"Enter task ",class:"styled-input"},null,512),[[n.Jo,i.task]]),(0,a.Lk)("button",{class:"btn btn-success rounded-0 my-custom-button",onClick:e[1]||(e[1]=(...t)=>c.submitTask&&c.submitTask(...t))}," SUBMIT ")]),(0,a.Lk)("table",k,[p,(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.tasks,((t,e)=>((0,a.uX)(),(0,a.CE)("tr",{key:e},[(0,a.Lk)("td",null,[(0,a.Lk)("span",{class:(0,o.C4)({"line-through":"finished"===t.status})},(0,o.v_)(t.name),3),(0,a.Lk)("div",f," Created at: "+(0,o.v_)(c.formatDate(t.createdAt)),1)]),(0,a.Lk)("td",null,[(0,a.Lk)("span",{class:(0,o.C4)(["text-center custom",{"text-danger":"to-do"===t.status,"text-success":"finished"===t.status,"text-warning":"in-progress"===t.status}]),onClick:t=>c.changeStatus(e)},(0,o.v_)(c.capitalizeFirstChar(t.status)),11,h)]),(0,a.Lk)("td",v,[(0,a.Lk)("div",{onClick:t=>c.deleteTask(e)},L,8,m)]),(0,a.Lk)("td",g,[(0,a.Lk)("div",{onClick:t=>c.editTask(e)},T,8,x)])])))),128))])])])}s(4114);var O={name:"HelloWorld",props:{msg:String},data(){return{task:"",editedTask:null,statuses:["to-do","in-progress","finished"],tasks:[{name:"Sleep on time",status:"to-do"},{name:"Car fixing.",status:"in-progress"},{name:"Breakfast",status:"finished"}]}},methods:{capitalizeFirstChar(t){return t.charAt(0).toUpperCase()+t.slice(1)},formatDate(t){return t?new Date(t).toLocaleString():""},changeStatus(t){let e=this.statuses.indexOf(this.tasks[t].status);++e>2&&(e=0),this.tasks[t].status=this.statuses[e]},deleteTask(t){this.tasks.splice(t,1)},editTask(t){this.task=this.tasks[t].name,this.editedTask=t},submitTask(){if(0===this.task.length)return;const t={name:this.task,status:"to-do",createdAt:new Date};null!==this.editedTask?(t.createdAt=this.tasks[this.editedTask].createdAt,this.tasks[this.editedTask]=t,this.editedTask=null):this.tasks.push(t),this.task=""}}},w=s(1241);const A=(0,w.A)(O,[["render",y],["__scopeId","data-v-2e58cc24"]]);var _=A,E={name:"App",components:{TodoApp:_}};const S=(0,w.A)(E,[["render",i]]);var j=S;s(3855);(0,n.Ef)(j).mount("#app")}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,r){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],r=t[l][2];for(var o=!0,c=0;c<n.length;c++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(o=!1,r<i&&(i=r));if(o){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[n,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,i=n[0],o=n[1],c=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(c)var l=c(s)}for(e&&e(n);u<i.length;u++)r=i[u],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(l)},n=self["webpackChunktodo_app"]=self["webpackChunktodo_app"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[504],(function(){return s(4348)}));n=s.O(n)})();
//# sourceMappingURL=app.d24780f4.js.map