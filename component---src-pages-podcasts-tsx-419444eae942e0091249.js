(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{u41R:function(e,t,a){"use strict";a.r(t);a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("Vd3H"),a("tUrg"),a("f3/d"),a("dRSK");var n=a("q1tI"),r=a.n(n),o=a("9Dj+"),s=a("+49W"),i=a("RKNp"),c=a("R/WZ"),u=a("tr08"),l=a("unEM"),m=a("NMmI"),d=a("zT8o"),p=a("Ob/s"),b=a("S3BH"),f=a("DVlV"),g=a("FxyP"),h=a("af+W");function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){y(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var w=Object(c.a)((function(e){var t,a,n,r,o;return E(E({},Object(l.b)(e)),{},{container:(t={display:"grid",gap:".5rem",gridTemplateColumns:"repeat(2, minmax(0, 1fr));"},t[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr",margin:"auto"},t),tabs:(a={display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"1rem",margin:"1rem",marginTop:"2rem"},a[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr 1fr"},a),tabHeader:(n={fontSize:"1.5rem"},n[e.breakpoints.down("sm")]={fontSize:"1.0rem"},n),divider:(r={display:"block",marginTop:"1rem",marginBottom:"15px",backgroundColor:e.palette.secondary.main,height:"2px",width:"150px",marginLeft:"auto",marginRight:"auto"},r[e.breakpoints.down("sm")]={width:"100px"},r),count:(o={fontSize:"1.2rem",color:l.a.muted},o[e.breakpoints.down("sm")]={display:"none"},o),podcastNumber:{fontSize:"1.3rem",fontWeight:"bold",fontStyle:"italics"},podcastText:{textAlign:"left",color:l.a.muted,margin:"auto",maxWidth:"80%","& p":{marginBottom:"1rem",lineHeight:"1.6rem"}}})}));t.default=function(e){var t,a,c=Object(u.a)(),l=w(c),v=p.a.me.social.find((function(e){return"Twitter"===e.name})),y=Object(n.useState)({queue:[],podcasts:[],starred:[],appearances:[]}),O=y[0],j=y[1],T=Object(n.useState)([]),k=T[0],S=T[1],N=Object(n.useState)(f.TabEnum.Appearances),P=N[0],I=N[1];Object(n.useEffect)((function(){Object(i.c)().then((function(e){var t,a,n,r;j(E({},e)),S([{title:"Appearances",count:null===(t=e.appearances)||void 0===t?void 0:t.length,value:f.TabEnum.Appearances},{title:"Stared",count:null===(a=e.starred)||void 0===a?void 0:a.length,value:f.TabEnum.Starred},{title:"In Queue",count:null===(n=e.queue)||void 0===n?void 0:n.length,value:f.TabEnum.Queue},{title:"Subscribed",count:null===(r=e.podcasts)||void 0===r?void 0:r.length,value:f.TabEnum.Subscribed}])}))}),[]);var x=Object(i.a)(null===(t=O.stats)||void 0===t?void 0:t.timesStartedAt),C=Object(i.b)(null===(a=O.stats)||void 0===a?void 0:a.timeListened);return r.a.createElement(o.a,null,r.a.createElement(s.a,{active:"podcasts"}),r.a.createElement(d.a,{bg:"dark"},r.a.createElement(b.a,null,"Podcasts"),r.a.createElement("div",{className:l.podcastText},r.a.createElement("p",null,"I subscribe to"," ",r.a.createElement("a",{onClick:function(e){return I(f.TabEnum.Subscribed)},className:l.podcastNumber},O.podcasts.length)," ","podcasts with"," ",r.a.createElement("a",{className:l.podcastNumber,onClick:function(e){return I(f.TabEnum.Queue)}},O.queue.length)," ","currently in my podcasts listening queue."," ",O.stats&&r.a.createElement(r.a.Fragment,null,"Since ",x,", I have listened to over"," ",r.a.createElement("span",{className:l.podcastNumber}," ",C)," ","hours of podcasts."," ")),r.a.createElement("p",null,"I started my podcast journey to make better use of my time during long commutes to the office. Since then my love of this medium has grown considerably and I know listen even without a daily commute. They are a great way to keep up with the latest around the industry. Below is a list of"," ",r.a.createElement("a",{className:l.podcastNumber,onClick:function(e){return I(f.TabEnum.Starred)}},O.starred.length)," ","podcasts episodes that I have starred over the years. You can also find the"," ",r.a.createElement("a",{className:l.podcastNumber,onClick:function(e){return I(f.TabEnum.Appearances)}},O.appearances.length)," ","episodes on which I was a guest."),r.a.createElement("p",null,"I hope you enjoy as much as I have. If you know of other podcasts you would recommend please send me your suggestions at ",r.a.createElement("a",{href:v.link},v.username))),r.a.createElement("div",{className:l.tabs},k.map((function(e){var t=e.value===P,a=t?l.tabHeader:[l.tabHeader,l.mutedText].join(" ");return r.a.createElement("span",{className:a,onClick:function(t){return I(e.value)}},e.title,r.a.createElement("span",{className:l.count}," (",e.count,")"),t&&r.a.createElement("span",{className:l.divider}))}))),P===f.TabEnum.Queue&&r.a.createElement("div",{className:l.container},O.queue.map((function(e,t){return r.a.createElement(g.a,{episode:e,key:"episode-"+e.title+"-"+t})}))),P===f.TabEnum.Subscribed&&r.a.createElement("div",{className:l.container},O.podcasts.sort((function(e,t){return t.lastEpisodePublished.getTime()-e.lastEpisodePublished.getTime()})).map((function(e,t){return r.a.createElement(m.a,{data:e,key:"episode-"+e.title+"-"+t})}))),P===f.TabEnum.Starred&&r.a.createElement("div",{className:l.container},O.starred.map((function(e,t){return r.a.createElement(g.a,{episode:e,key:"starred-episode-"+e.title+"-"+t})}))),P===f.TabEnum.Appearances&&r.a.createElement("div",{className:l.container},O.appearances.map((function(e,t){return r.a.createElement(h.a,{episode:e,key:"appearance-episode-"+e.title+"-"+t})})))))}}}]);
//# sourceMappingURL=component---src-pages-podcasts-tsx-419444eae942e0091249.js.map