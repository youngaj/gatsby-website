(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/O1e":function(e,t,r){"use strict";r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("q1tI"),a=r.n(n),i=r("R/WZ"),o=r("tr08"),c=r("unEM");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=Object(i.a)((function(e){return s(s({},Object(c.b)(e)),{},{box:{backgroundColor:e.palette.secondary.main,width:"90px",height:"85px",lineHeight:"40px",display:"block",verticalAlign:"center",borderRadius:"8px"}})}));t.a=function(e){var t=e.children,r=o.a,n=p(r);return a.a.createElement("div",{className:n.box},t)}},"38Fu":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("R/WZ"),o=r("tr08"),c=Object(i.a)((function(e){return{divider:{display:"block",marginTop:"35px",marginBottom:"35px",backgroundColor:e.palette.secondary.main,height:"2px",width:"150px",marginLeft:"auto",marginRight:"auto"}}}));t.a=function(){var e=Object(o.a)(),t=c(e);return a.a.createElement("span",{className:t.divider})}},UEOg:function(e,t,r){"use strict";r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("tUrg");var n=r("q1tI"),a=r.n(n),i=r("R/WZ"),o=r("tr08"),c=r("unEM"),u=r("/O1e");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=Object(i.a)((function(e){return l(l({},Object(c.b)(e)),{},{session:{display:"grid",gridTemplateColumns:"1fr",gridGap:e.spacing(2),padding:e.spacing(2)},details:{display:"grid",gridTemplateColumns:"1fr 3fr",gridGap:e.spacing(2),border:"1px solid "+c.a.muted,padding:e.spacing(2)}})}));t.a=function(e){var t=e.session,r=Object(o.a)(),n=f(r);return a.a.createElement("div",{className:n.session},a.a.createElement("div",null,a.a.createElement("img",{src:t.thumbnails.medium.url,alt:"{session.title}"})),a.a.createElement("div",{className:n.details},a.a.createElement(u.a,null,a.a.createElement("div",null,a.a.createElement("div",{className:[n.pt65,n.wt700].join(" ")},t.day),a.a.createElement("div",null,t.monthYear))),a.a.createElement("span",{style:{textAlign:"left"}},a.a.createElement("a",{href:t.link,target:"_blank",className:n.mutedText},t.title))))}},UYVT:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return y}));r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("q1tI"),a=r.n(n),i=r("R/WZ"),o=r("tr08"),c=r("unEM"),u=r("Yur6"),s=r("Q7t8"),l=r("38Fu"),p=r("ry59"),f=r("UEOg"),b=r("+49W"),d=r("9Dj+");function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=Object(i.a)((function(e){return O(O({},Object(c.b)(e)),{},{container:{display:"grid",gridGap:e.spacing(2),gridTemplateColumns:"1fr 1fr 1fr"}})}));t.default=function(e){var t=e.data,r=Object(o.a)(),i=v(r),c=t.sessions.nodes.map((function(e){return Object(p.a)(e)})),m=Object(n.useState)(c),O=m[0],g=m[1];return Object(n.useEffect)((function(){Object(p.b)().then((function(e){g(e)}))}),[]),a.a.createElement(d.a,null,a.a.createElement(b.a,{active:"devGroup"}),a.a.createElement(u.a,{bg:"dark"},a.a.createElement("h2",null,a.a.createElement(s.a,null,"Dev Group Sessions")),a.a.createElement("p",{className:i.mutedText},"Attending developer meet ups are a great way of expanding your knowledge and skills. But many of us have family and other obligations outside of work so I created and hosted a bi-weekly NASA wide developer group that ran for over 8 years. Below are an excert from those sessions."),a.a.createElement("span",null,a.a.createElement(l.a,null)),a.a.createElement("div",{className:i.container},O.map((function(e,t){return a.a.createElement(f.a,{session:e})})))))};var y="1352943776"},ry59:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return p}));r("VRzm"),r("Btvt");var n=r("o0o1"),a=r.n(n),i=(r("ls82"),r("vDqi")),o=r.n(i),c=r("Wgwc"),u=r.n(c);function s(e,t,r,n,a,i,o){try{var c=e[i](o),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,a)}var l=function(){var e,t=(e=a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://gsfcdevgroup.azurewebsites.net/api/GetGSFCDevGroupSessions");case 2:return t=e.sent,r=t.data.map((function(e){return p(e)})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,c,"next",e)}function c(e){s(i,n,a,o,c,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),p=function(e){return e&&(e.day=u()(e.publishedAt).format("D"),e.monthYear=u()(e.publishedAt).format("MMM-YYYY")),e}}}]);
//# sourceMappingURL=component---src-pages-dev-group-tsx-cd44f6a86f3849083961.js.map