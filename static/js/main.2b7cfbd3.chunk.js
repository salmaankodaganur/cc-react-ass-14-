(this["webpackJsonpmy-app31"]=this["webpackJsonpmy-app31"]||[]).push([[0],{24:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(17),i=c.n(r),s=(c(24),c(8)),o=c.n(s),j=c(18),u=c(4),d=c(3),b=(c(26),c(27),c(0));function l(e){var t=e.item,c=e.deleted;return Object(b.jsx)("div",{children:Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:Object(b.jsx)("a",{href:e.url,children:e.title})}),Object(b.jsx)("span",{children:e.author}),Object(b.jsx)("span",{children:e.num_comments}),Object(b.jsx)("span",{children:e.points}),Object(b.jsx)("span",{children:Object(b.jsx)("button",{id:"hey",onClick:function(){return c(e)},children:"delete"})})]})}))})})})}function O(e){var t=e.onSearch,c=e.searchTerm;return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"search",children:"SEARCH FOR STORIES:"}),Object(b.jsx)("input",{value:c,type:"text",id:"search",onChange:t})]})}var h=c(19),E=c.n(h),f="https://hn.algolia.com/api/v1/search?query=",p=function(e,t){switch(t.type){case"STORIES_FETCH_INIT":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,isError:!1});case"STORIES_FETCH_SUCESS":return Object(d.a)(Object(d.a)({},e),{},{data:t.payload,isLoading:!1,isError:!1});case"STORIES_FETCH_FAILURE":return Object(d.a)(Object(d.a)({},e),{},{data:[],isLoading:!1,isError:!0});case"STORIES_REMOVE":return Object(d.a)(Object(d.a)({},e),{},{data:e.data.filter((function(e){return t.payload.objectID!==e.objectID}))});default:throw new Error}};var S=function(){var e=function(e,t){var c=Object(n.useState)(localStorage.getItem(e)||t),a=Object(u.a)(c,2),r=a[0],i=a[1];return Object(n.useEffect)((function(){localStorage.setItem(e,r)})),[r,i]}("customSearchTerm",""),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useReducer)(p,{data:[],isLoading:!1,isError:!1}),i=Object(u.a)(r,2),s=i[0],d=i[1],h=Object(n.useState)("".concat(f).concat(c)),S=Object(u.a)(h,2),m=S[0],x=S[1],T=Object(n.useState)(!1),g=Object(u.a)(T,2),I=g[0],v=g[1],R=Object(n.useCallback)(Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d({type:"STORIES_FETCH_INIT"}),e.prev=1,e.next=4,E.a.get(m);case 4:t=e.sent,d({type:"STORIES_FETCH_SUCESS",payload:t.data.hits}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d({data:"STORIES_FETCH_FAILURE"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),[m]);return Object(n.useEffect)((function(){R()}),[R]),Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",I?"dark":"light")}),[I]),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("button",{onClick:function(){return v((function(e){return!e}))},children:"(D/W)THEME"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x("".concat(f).concat(c))},children:[Object(b.jsx)(O,{searchTerm:c,onSearch:function(e){a(e.target.value)}}),Object(b.jsx)("button",{disabled:!c,type:"submit",children:"submit"})]}),Object(b.jsxs)("h3",{children:["SEARCHING FOR:",c]}),s.isLoading?Object(b.jsx)("p",{children:"loading..."}):Object(b.jsx)(l,{item:s.data,deleted:function(e){d({type:"STORIES_REMOVE",payload:e})}}),s.isError&&Object(b.jsx)("p",{children:"something went wrong..."})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),m()}},[[47,1,2]]]);
//# sourceMappingURL=main.2b7cfbd3.chunk.js.map