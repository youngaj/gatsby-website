(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+Por":function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.Starred="Starred",e.Queue="Queue",e.Subscribed="Subscribed",e.Appearances="Appearances"}(n||(n={}))},"/fpp":function(e,t){},A20r:function(e,t){},DVlV:function(e,t,a){"use strict";var n=a("sEMZ");a.o(n,"TabEnum")&&a.d(t,"TabEnum",(function(){return n.TabEnum}));var r=a("/fpp");a.o(r,"TabEnum")&&a.d(t,"TabEnum",(function(){return r.TabEnum}));var i=a("ORDu");a.o(i,"TabEnum")&&a.d(t,"TabEnum",(function(){return i.TabEnum}));var o=a("+Por");a.d(t,"TabEnum",(function(){return o.a}));a("A20r")},NMmI:function(e,t,a){"use strict";a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("q1tI"),r=a.n(n),i=a("R/WZ"),o=a("tr08"),s=a("unEM"),c=a("Wgwc"),l=a("QgiU"),u=a.n(l);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}c.extend(u.a);var f=Object(i.a)((function(e){var t;return p(p({},Object(s.b)(e)),{},{podcastBlock:(t={display:"grid",gridGap:e.spacing(1),gridTemplateColumns:"150px 1fr",borderRadius:"5px",padding:e.spacing(2),"& div":{textAlign:"left"}},t[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr","& div":{textAlign:"center"}},t),title:{marginBottom:e.spacing(2)},subTitle:{marginBottom:e.spacing(1)}})}));t.a=function(e){var t,a,i,s,l=Object(o.a)(),u=f(l),d=Object(n.useState)(e.data),m=d[0],g=d[1];return r.a.createElement("div",{className:[u.podcastBlock].join(" ")},r.a.createElement("div",null,r.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+m.uuid+".jpg",alt:"{show.title}"})),r.a.createElement("div",null,r.a.createElement("div",{className:[u.title,u.pt30].join(" ")},r.a.createElement("a",{href:m.url},m.title)),r.a.createElement("p",{className:[u.mutedText,u.pt20,u.subTitle].join(" ")},"Latest Episode: ",c(m.lastEpisodePublished).fromNow()),r.a.createElement("p",null,m.displayFullDetails||m.description.length<200?r.a.createElement("span",null,m.description):r.a.createElement("div",null,(t=m.description,a=200,i=t.substring(0,a),s=i.lastIndexOf(" "),i=i.substring(0,s))," ..."," ",r.a.createElement("a",{onClick:function(){return function(e){e.displayFullDetails=!0,g(p({},e))}(m)}},"show more")))))}},ORDu:function(e,t){},"Ob/s":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("Wgwc"),r=a.n(n),i={me:{firstName:"Andre",lastName:"Young",email:"andrejyoung@gmail.com",age:r()().diff(r()("1979-09","YYYY-MM"),"years"),workExperience:[{company:"Capital One",title:"Senior Manager, Software Engineering",start:"2020-04",end:"",responsibilities:["Technical lead for the Safehouse and Discovery teams.","Talent and Performance management.","Development and coaching team members."]},{company:"ASRC Inuteq (NASA)",title:"Application Development Lead & IT Lead",start:"2012-07",end:"2020-04",responsibilities:["I served as the Application Development Lead for the contract, participating in senior management discussions and setting development goals and standards for the contract.","I mentored developers at all levels, providing feedback on code and career coaching.","I also served as the Lead developer and primary point of contact for 5 active projects with 3 separate customers including a redesign and re-platforming of the Exploration & Space Communications (ESC) public website from Drupal to Gatsby, NodeJS and ASP.NET Core.","Lastly I served as the IT manager for the Exploration & Space Communications Division (Code 450) managing both development and operation activities."]},{company:"ASRC PRIMUS (NASA)",title:"Senior Application Developer",start:"2011-07",end:"2012-07",responsibilities:["Designed and implemented new features for an online intern registration and selection (SOLAR) system. Provided architectural design support for the next version a large configuration management (CM) tool used by multiple flight projects at NASA's Goddard Space Flight Center (GSFC). Assisted with other applications as needed."]},{company:"ASRC Federal (NASA)",title:"Senior Programmer",start:"2007-07",end:"2011-07",responsibilities:["Tailored large scaled CM applications written primarily in Classic ASP to meet changing user requirements and needs."]},{company:"Systems Management Engineering Inc",title:"Software Engineer",start:"2007-05",end:"2007-07",responsibilities:["Implement modules for Peace Corps’ Volunteer Information Database Application Project (VIDA) to transition from MS Access to a .Net 2.0 Winforms application. (MS SQL, ADO.Net, Data Dynamics ActiveReports, Infragistics NetAdvantage)"]}],social:[{name:"GitHub",username:"youngaj",link:"https://github.com/youngaj"},{name:"Twitter",username:"@Dreyoung79",link:"https://twitter.com/Dreyoung79"},{name:"YouTube",username:"youngaj",link:"https://www.youtube.com/channel/UCr-_BId5w_QTTKcthhNRVlw/videos"},{name:"LinkedIn",username:"Andre Young",link:"https://www.linkedin.com/in/andre-young-b9a9b5b/"}],projects:[{title:"Commercial Real Estate Management (CREM)",description:"Improve rent collection and property management"},{title:"OneStream & Snowflake",description:"Gain insights into the Focus Platform by recording events via OneStream (Kafka) into Snowflake and internal C1 data lake."},{title:"Conveyor Belt (CB)",description:"Meta-platform to enable internal development teams to onboard and easily use internal platforms.  Drives down cycle times and ensures governance by preventing intents without the appropriate approvals from being deployed into protected environments."},{title:"Website",description:"Gatsby redesign of this website",code:{repo:"gatsby-website",url:"https://github.com/youngaj/gatsby-website"}}],podcastAppearances:[{uuid:"3414c425-da9f-4b6d-82bf-2062b636d03d",podcastName:"Web Rush",topic:"From IC to PL",description:"This was my second ever guest appearance on a podcast.  The initial episode was postponed due to end of year activities and the host graciously allowed me to reschedule.  This is a topic near and dear to my heart and perhaps on the minds of many who have a bit of seniority in their careers and are considering making the jump from an IC (Individual Contributor) to a People Leader (PL).  Hope you enjoy the episode.  We only touched the surface of this topic so if you would like to learn more or chat about it reach out to me on Twitter.",url:"https://webrush.io/episodes/episode-164-rising-stumbling-and-getting-up-again-life-as-a-tech-manager"},{uuid:"3d2522c1-668f-4c2b-899f-801d7259cb3c",podcastName:"Web Rush",topic:"Testing",description:"This was my first time on a podcast.  The hosts of Web Rush are engineers that I have listened to and followed for years.  It was truly a honor to be invited to share my thoughts with their audience.  The topic of my episode was testing.  This topic was inspired by my experience testing, the myths and the reality and talk I gave to the Focus Organization at Capital One shortly before the episode.  I hope you enjoy listening to this episode as much as I enjoyed making it.",url:"https://webrush.simplecast.com/episodes/episode-143-old-man-yells-at-tests-andre-young"}]},nasa:{lastDay:"2020/04/20"}}},QgiU:function(e,t,a){a("pIFo"),e.exports=function(){"use strict";return function(e,t,a){e=e||{};var n=t.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(e,t,a,r){return n.fromToBase(e,t,a,r)}a.en.relativeTime=r,n.fromToBase=function(t,n,i,o,s){for(var c,l,u,d=i.$locale().relativeTime||r,p=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=p.length,f=0;f<m;f+=1){var g=p[f];g.d&&(c=o?a(t).diff(i,g.d,!0):i.diff(t,g.d,!0));var b=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,b<=g.r||!g.r){b<=1&&f>0&&(g=p[f-1]);var h=d[g.l];s&&(b=s(""+b)),l="string"==typeof h?h.replace("%d",b):h(b,n,g.l,u);break}}if(n)return l;var v=u?d.future:d.past;return"function"==typeof v?v(l):v.replace("%s",l)},n.to=function(e,t){return i(e,t,this,!0)},n.from=function(e,t){return i(e,t,this)};var o=function(e){return e.$u?a.utc():a()};n.toNow=function(e){return this.to(o(this),e)},n.fromNow=function(e){return this.from(o(this),e)}}}()},RKNp:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("RW0V"),a("VRzm"),a("Btvt");var n=a("o0o1"),r=a.n(n),i=(a("dRSK"),a("Z2Ku"),a("L9s1"),a("Vd3H"),a("ls82"),a("vDqi")),o=a.n(i),s=a("Ob/s");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t,a,n,r,i,o){try{var s=e[i](o),c=s.value}catch(l){return void a(l)}s.done?t(c):Promise.resolve(c).then(n,r)}function p(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function o(e){d(i,n,r,o,s,"next",e)}function s(e){d(i,n,r,o,s,"throw",e)}o(void 0)}))}}var m=function(){var e=p(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://andrepodcasts.azurewebsites.net/api/PodcastQueue");case 2:return t=e.sent,(a=t.data).podcasts.forEach((function(e){return e.lastEpisodePublished=new Date(e.lastEpisodePublished)})),n=s.a.me.podcastAppearances.map((function(e){return e.uuid})),a.appearances=a.starred.filter((function(e){return n.includes(e.uuid)})).map((function(e){var t=s.a.me.podcastAppearances.find((function(t){return t.uuid===e.uuid}));return l(l({},e),{},{description:(null==t?void 0:t.description)||e.showNotes,topic:(null==t?void 0:t.topic)||e.title,url:(null==t?void 0:t.url)||e.showNotes,published:new Date(e.published)})})).sort((function(e,t){return t.published.getTime()-e.published.getTime()})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},sEMZ:function(e,t){},u41R:function(e,t,a){"use strict";a.r(t);a("jm62"),a("ioFf"),a("RW0V"),a("Vd3H"),a("tUrg"),a("rGqo"),a("yt8O"),a("Btvt"),a("f3/d"),a("dRSK");var n=a("q1tI"),r=a.n(n),i=a("9Dj+"),o=a("+49W"),s=a("RKNp"),c=a("R/WZ"),l=a("tr08"),u=a("unEM"),d=a("NMmI"),p=a("zT8o"),m=a("Ob/s"),f=a("S3BH"),g=a("JuHP"),b=a("DVlV");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){y(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var w=Object(c.a)((function(e){var t,a,n,r,i,o,s,c;return v(v({},Object(u.b)(e)),{},{container:(t={display:"grid",gap:".5rem",gridTemplateColumns:"1fr 1fr"},t[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr",margin:"auto"},t),episode:(a={display:"grid",gridTemplateColumns:"90px 1fr",gap:e.spacing(2),border:"1px solid "+u.a.muted,borderRadius:"10px",padding:e.spacing(2),"& div":{textAlign:"left"}},a[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr",marginBottom:e.spacing(2)},a),episodeTitle:(n={marginBottom:"2rem"},n[e.breakpoints.down("sm")]={textAlign:"center"},n),episodeIcon:(r={width:"100%",minWidth:"80px"},r[e.breakpoints.down("sm")]={width:"100%"},r),tabs:(i={display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"1rem",margin:"1rem",marginTop:"2rem"},i[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr 1fr"},i),tabHeader:(o={fontSize:"1.5rem"},o[e.breakpoints.down("sm")]={fontSize:"1.0rem"},o),divider:(s={display:"block",marginTop:"1rem",marginBottom:"15px",backgroundColor:e.palette.secondary.main,height:"2px",width:"150px",marginLeft:"auto",marginRight:"auto"},s[e.breakpoints.down("sm")]={width:"100px"},s),count:(c={fontSize:"1.2rem",color:u.a.muted},c[e.breakpoints.down("sm")]={display:"none"},c),episodeBlock:{display:"block",maxHeight:"200px",overflow:"auto"},emphasize:{color:u.a.accent},topic:{marginTop:e.spacing(2)}})}));t.default=function(e){var t=Object(l.a)(),a=w(t),c=m.a.me.social.find((function(e){return"Twitter"===e.name})),u=Object(n.useState)({queue:[],podcasts:[],starred:[],appearances:[]}),h=u[0],y=u[1],E=Object(n.useState)([]),O=E[0],T=E[1],j=Object(n.useState)(b.TabEnum.Appearances),S=j[0],k=j[1],P=Object(g.a)(),N=P.width>t.breakpoints.values.sm,A=P.height/2*.9;Object(n.useEffect)((function(){Object(s.a)().then((function(e){var t,a,n,r;y(v({},e)),T([{title:"Appearances",count:null===(t=e.appearances)||void 0===t?void 0:t.length,value:b.TabEnum.Appearances},{title:"Stared",count:null===(a=e.starred)||void 0===a?void 0:a.length,value:b.TabEnum.Starred},{title:"In Queue",count:null===(n=e.queue)||void 0===n?void 0:n.length,value:b.TabEnum.Queue},{title:"Subscribed",count:null===(r=e.podcasts)||void 0===r?void 0:r.length,value:b.TabEnum.Subscribed}])}))}),[]);return r.a.createElement(i.a,null,r.a.createElement(o.a,{active:"podcasts",links:{home:{title:"Home",target:"/"},profile:{title:"Profile",target:"/#profile"},resume:{title:"Resume",target:"/#resume"},podcasts:{title:"Podcasts",target:"/#podcastQueue"},devGroup:{title:"Dev Group",target:"/#devGroup"},blog:{title:"Blog",target:"/#blog"}}}),r.a.createElement(p.a,{bg:"dark"},r.a.createElement(f.a,null,"Podcasts"),r.a.createElement("p",{className:a.mutedText},"I subscribe to"," ",r.a.createElement("a",{onClick:function(e){return k(b.TabEnum.Subscribed)}},h.podcasts.length)," ","podcasts and have appeared on"," ",r.a.createElement("a",{onClick:function(e){return k(b.TabEnum.Appearances)}},h.appearances.length)," ","episodes thus far. Podcasts are a great way to keep up with the latest around the industry. They are also a great way avoid going insane during long commutes. You will also find the podcast that are currently in my"," ",r.a.createElement("a",{onClick:function(e){return k(b.TabEnum.Queue)}},"listening queue"),". Follow along and/or send me suggestions"," ",r.a.createElement("a",{href:null==c?void 0:c.link},null==c?void 0:c.username)),r.a.createElement("div",{className:a.tabs},O.map((function(e){var t=e.value===S,n=t?a.tabHeader:[a.tabHeader,a.mutedText].join(" ");return r.a.createElement("span",{className:n,onClick:function(t){return k(e.value)}},e.title,r.a.createElement("span",{className:a.count}," (",e.count,")"),t&&r.a.createElement("span",{className:a.divider}))}))),S===b.TabEnum.Queue&&r.a.createElement("div",{className:a.container},h.queue.map((function(e,n){return r.a.createElement("div",{key:"episode-"+e.title+"-"+n,className:a.episode},r.a.createElement("div",null,r.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+e.podcast+".jpg",alt:"{episode.title}",className:a.episodeIcon})),r.a.createElement("div",{style:{marginLeft:t.spacing(2)}},r.a.createElement("h3",{className:a.episodeTitle},r.a.createElement("a",{href:e.url},e.title)),N&&r.a.createElement("div",{className:[a.episodeBlock,a.mutedText].join(" "),style:{maxWidth:A},dangerouslySetInnerHTML:{__html:e.showNotes}})))}))),S===b.TabEnum.Subscribed&&r.a.createElement("div",{className:a.container},h.podcasts.sort((function(e,t){return t.lastEpisodePublished.getTime()-e.lastEpisodePublished.getTime()})).map((function(e,t){return r.a.createElement(d.a,{data:e,key:"episode-"+e.title+"-"+t})}))),S===b.TabEnum.Starred&&r.a.createElement("div",{className:a.container},h.starred.map((function(e,n){return r.a.createElement("div",{key:"episode-"+e.title+"-"+n,className:a.episode},r.a.createElement("div",null,r.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+e.podcastUuid+".jpg",alt:"{episode.title}",className:a.episodeIcon})),r.a.createElement("div",{style:{marginLeft:t.spacing(2)}},r.a.createElement("h3",{className:a.episodeTitle},r.a.createElement("a",{href:e.url},e.title)),N&&r.a.createElement("div",{className:[a.episodeBlock,a.mutedText].join(" "),style:{maxWidth:A},dangerouslySetInnerHTML:{__html:e.showNotes}})))}))),S===b.TabEnum.Appearances&&r.a.createElement("div",{className:a.container},h.appearances.map((function(e,n){return r.a.createElement("div",{key:"appearance-episode-"+e.title+"-"+n,className:a.episode},r.a.createElement("div",null,r.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+e.podcastUuid+".jpg",alt:"{episode.title}",className:a.episodeIcon})),r.a.createElement("div",{style:{marginLeft:t.spacing(2)}},r.a.createElement("h3",{className:a.episodeTitle},r.a.createElement("a",{href:e.url},e.title),r.a.createElement("p",{className:[a.topic].join(" ")},r.a.createElement("span",{className:a.mutedText},"Topic:")," ",e.topic)),N&&r.a.createElement("div",{className:[a.episodeBlock,a.mutedText].join(" "),style:{maxWidth:A}},e.description)))})))))}}}]);
//# sourceMappingURL=component---src-pages-podcasts-tsx-ae150f28b46787cbd1bd.js.map