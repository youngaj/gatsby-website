(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{u41R:function(e,t,a){"use strict";a.r(t);a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Vd3H"),a("tUrg"),a("f3/d"),a("dRSK");var n=a("q1tI"),r=a.n(n),o=a("9Dj+"),i=a("+49W"),c=a("RKNp"),u=a("R/WZ"),s=a("tr08"),l=a("unEM"),d=a("NMmI"),m=a("zT8o"),p=a("Ob/s"),b=a("S3BH"),f=a("DVlV"),g=a("FxyP"),E=a("af+W");function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=Object(u.a)((function(e){var t,a,n,r,o;return y(y({},Object(l.b)(e)),{},{container:(t={display:"grid",gap:".5rem",gridTemplateColumns:"1fr 1fr"},t[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr",margin:"auto"},t),tabs:(a={display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"1rem",margin:"1rem",marginTop:"2rem"},a[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr 1fr"},a),tabHeader:(n={fontSize:"1.5rem"},n[e.breakpoints.down("sm")]={fontSize:"1.0rem"},n),divider:(r={display:"block",marginTop:"1rem",marginBottom:"15px",backgroundColor:e.palette.secondary.main,height:"2px",width:"150px",marginLeft:"auto",marginRight:"auto"},r[e.breakpoints.down("sm")]={width:"100px"},r),count:(o={fontSize:"1.2rem",color:l.a.muted},o[e.breakpoints.down("sm")]={display:"none"},o)})}));t.default=function(e){var t=Object(s.a)(),a=O(t),u=p.a.me.social.find((function(e){return"Twitter"===e.name})),l=Object(n.useState)({queue:[],podcasts:[],starred:[],appearances:[]}),v=l[0],h=l[1],w=Object(n.useState)([]),T=w[0],j=w[1],k=Object(n.useState)(f.TabEnum.Appearances),S=k[0],P=k[1];return Object(n.useEffect)((function(){Object(c.a)().then((function(e){var t,a,n,r;h(y({},e)),j([{title:"Appearances",count:null===(t=e.appearances)||void 0===t?void 0:t.length,value:f.TabEnum.Appearances},{title:"Stared",count:null===(a=e.starred)||void 0===a?void 0:a.length,value:f.TabEnum.Starred},{title:"In Queue",count:null===(n=e.queue)||void 0===n?void 0:n.length,value:f.TabEnum.Queue},{title:"Subscribed",count:null===(r=e.podcasts)||void 0===r?void 0:r.length,value:f.TabEnum.Subscribed}])}))}),[]),r.a.createElement(o.a,null,r.a.createElement(i.a,{active:"podcasts"}),r.a.createElement(m.a,{bg:"dark"},r.a.createElement(b.a,null,"Podcasts"),r.a.createElement("p",{className:a.mutedText},"I subscribe to"," ",r.a.createElement("a",{onClick:function(e){return P(f.TabEnum.Subscribed)}},v.podcasts.length)," ","podcasts and have appeared on"," ",r.a.createElement("a",{onClick:function(e){return P(f.TabEnum.Appearances)}},v.appearances.length)," ","episodes thus far. Podcasts are a great way to keep up with the latest around the industry. They are also a great way avoid going insane during long commutes. You will also find the podcast that are currently in my"," ",r.a.createElement("a",{onClick:function(e){return P(f.TabEnum.Queue)}},"listening queue"),". Follow along and/or send me suggestions"," ",r.a.createElement("a",{href:null==u?void 0:u.link},null==u?void 0:u.username)),r.a.createElement("div",{className:a.tabs},T.map((function(e){var t=e.value===S,n=t?a.tabHeader:[a.tabHeader,a.mutedText].join(" ");return r.a.createElement("span",{className:n,onClick:function(t){return P(e.value)}},e.title,r.a.createElement("span",{className:a.count}," (",e.count,")"),t&&r.a.createElement("span",{className:a.divider}))}))),S===f.TabEnum.Queue&&r.a.createElement("div",{className:a.container},v.queue.map((function(e,t){return r.a.createElement(g.a,{episode:e,key:"episode-"+e.title+"-"+t})}))),S===f.TabEnum.Subscribed&&r.a.createElement("div",{className:a.container},v.podcasts.sort((function(e,t){return t.lastEpisodePublished.getTime()-e.lastEpisodePublished.getTime()})).map((function(e,t){return r.a.createElement(d.a,{data:e,key:"episode-"+e.title+"-"+t})}))),S===f.TabEnum.Starred&&r.a.createElement("div",{className:a.container},v.starred.map((function(e,t){return r.a.createElement(g.a,{episode:e,key:"starred-episode-"+e.title+"-"+t})}))),S===f.TabEnum.Appearances&&r.a.createElement("div",{className:a.container},v.appearances.map((function(e,t){return r.a.createElement(E.a,{episode:e,key:"appearance-episode-"+e.title+"-"+t})})))))}}}]);
//# sourceMappingURL=component---src-pages-podcasts-tsx-0283d09d1088c9577094.js.map