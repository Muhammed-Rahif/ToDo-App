(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(9),o=c.n(n),d=(c(15),c(8)),i=c(6),l=c(10),r=c.n(l),j=c(4),b=c.n(j),h=(c(28),c(0)),m="ToDo-App-Key";var u=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),o=Object(i.a)(n,2),l=o[0],j=o[1],u=Object(s.useState)([]),x=Object(i.a)(u,2),O=x[0],p=x[1];return Object(s.useEffect)((function(){"undefined"!==typeof b.a.get(m)&&(j(b.a.get(m).toDos),p(b.a.get(m).removedToDos))}),[]),Object(s.useEffect)((function(){b.a.set(m,{toDos:l,removedToDos:O})}),[l,O]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row mt-5 ",children:[Object(h.jsx)("form",{children:Object(h.jsxs)("div",{className:"shadow-3 input-group input-group-lg",children:[Object(h.jsx)("span",{className:"shadow-3 input-group-text",children:"To Do :"}),Object(h.jsx)("input",{type:"text",className:"shadow-3 form-control",id:"textInput",value:c,onChange:function(e){a(e.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"shadow-3 btn btn-primary",onSubmit:function(e){e.preventDefault()},onClick:function(e){if(e.preventDefault(),null===c||" "===c||""===c)document.getElementById("textInput").focus();else{var t={content:c,time:r()().format("LLLL"),id:(new Date).getTime(),status:!1};j([].concat(Object(d.a)(l),[t])),a(""),document.getElementById("textInput").focus()}},children:"Add"})]})}),Object(h.jsx)("div",{className:"col-md-12 mt-3 mb-3",children:l.map((function(e){return Object(h.jsx)("div",{className:"shadow-3 mt-2 card border",children:Object(h.jsxs)("div",{className:"shadow-3 card-body",children:[e.content,Object(h.jsxs)("div",{className:"float-end",children:[Object(h.jsx)("input",{type:"checkbox",className:"btn-check",id:"btn-check-".concat(e.id),autoComplete:"off",onChange:function(t){j(l.filter((function(c){return c.id===e.id&&(c.status=t.target.checked),c})))}}),Object(h.jsx)("label",{className:"btn btn-success mr-1",htmlFor:"btn-check-".concat(e.id),children:Object(h.jsx)("i",{className:"shadow-3 fas fa-check"})}),Object(h.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){window.confirm("Are you sure you want to remove this ?")&&(p((function(t){return[].concat(Object(d.a)(t),[e])})),j(l.filter((function(t){return t.id!==e.id?t:null}))))},children:Object(h.jsx)("i",{className:"fas fa-trash"})})]})]})},e.id)}))}),Object(h.jsxs)("div",{className:"col-md-12",children:[Object(h.jsx)("h4",{className:"text-center",children:"Active ToDos"}),Object(h.jsx)("hr",{className:"hr"}),Object(h.jsxs)("table",{className:"shadow-1-strong table table-hover table-responsive table-bordered mt-2 mb-5",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Time"}),Object(h.jsx)("th",{scope:"col",children:"To Do"}),Object(h.jsx)("th",{scope:"col",children:"Completed"})]})}),Object(h.jsx)("tbody",{children:0!==l.length?l.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:e.time}),Object(h.jsx)("td",{children:e.content}),Object(h.jsx)("td",{children:e.status?Object(h.jsx)("i",{className:"shadow-3 fas fa-check text-success"}):Object(h.jsx)("i",{className:"shadow-3 fas fa-times text-danger"})})]},e.id)})):Object(h.jsx)("tr",{children:Object(h.jsx)("td",{colSpan:3,className:"text-center",children:"Empty"})})})]})]})]}),Object(h.jsx)("div",{className:"shadow-3 row",children:Object(h.jsx)("div",{className:"shadow-3 col-md-12",children:Object(h.jsx)("div",{className:"shadow-1-strong accordion mb-5",id:"accordionExample",children:Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(h.jsx)("button",{className:"shadow-3 accordion-button collapsed",type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",children:"Removed To Dos"})}),Object(h.jsx)("div",{id:"collapseOne",className:"shadow-3 accordion-collapse collapse","aria-labelledby":"headingOne","data-mdb-parent":"#accordionExample",children:Object(h.jsx)("div",{className:"shadow-3 accordion-body",children:Object(h.jsxs)("table",{className:"shadow-1 table table-hover table-responsive table-bordered",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Time"}),Object(h.jsx)("th",{scope:"col",children:"To Do"}),Object(h.jsx)("th",{scope:"col",children:"Completed"})]})}),Object(h.jsx)("tbody",{children:O.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:e.time}),Object(h.jsx)("td",{children:e.content}),Object(h.jsx)("td",{children:e.status?Object(h.jsx)("i",{className:"shadow-3 fas fa-check text-success"}):Object(h.jsx)("i",{className:"shadow-3 fas fa-times text-danger"})})]},e.id)}))})]})})})]})})})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),s(e),a(e),n(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.384a8e72.chunk.js.map