(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NMmI:function(e,t,a){"use strict";a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("q1tI"),r=a.n(n),i=a("R/WZ"),o=a("tr08"),s=a("unEM"),c=a("Wgwc"),l=a("QgiU"),d=a.n(l);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){m(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}c.extend(d.a);var g=Object(i.a)((function(e){var t;return p(p({},Object(s.b)(e)),{},{podcastBlock:(t={display:"grid",gridGap:e.spacing(2),gridTemplateColumns:"1fr 2fr",border:"1px solid "+s.a.muted,borderRadius:"10px",padding:e.spacing(2),"& div":{textAlign:"left"}},t[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr","& div":{textAlign:"center"}},t),title:{marginBottom:e.spacing(2)},subTitle:{marginBottom:e.spacing(1)}})}));t.a=function(e){var t,a,i,s,l=e.data,d=Object(o.a)(),u=g(d),m=Object(n.useState)(l),f=m[0],b=m[1];return r.a.createElement("div",{className:[u.podcastBlock].join(" ")},r.a.createElement("div",null,r.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+f.uuid+".jpg",alt:"{show.title}"})),r.a.createElement("div",null,r.a.createElement("div",{className:[u.title,u.pt30].join(" ")},r.a.createElement("a",{href:f.url},f.title)),r.a.createElement("p",{className:[u.mutedText,u.pt20,u.subTitle].join(" ")},"Latest Episode: ",c(f.lastEpisodePublished).fromNow()),r.a.createElement("p",null,f.displayFullDetails||f.description.length<200?r.a.createElement("span",null,f.description):r.a.createElement("div",null,(t=f.description,a=200,i=t.substring(0,a),s=i.lastIndexOf(" "),i=i.substring(0,s))," ..."," ",r.a.createElement("a",{onClick:function(){return function(e){e.displayFullDetails=!0,b(p({},e))}(f)}},"show more")))))}},"Ob/s":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("Wgwc"),r=a.n(n),i={me:{firstName:"Andre",lastName:"Young",email:"andrejyoung@gmail.com",age:r()().diff(r()("1979-09","YYYY-MM"),"years"),workExperience:[{company:"Capital One",title:"Senior Manager, Software Engineering",start:"2020-04",end:"",responsibilities:["Technical lead for the Safehouse and Discovery teams.","Talent and Performance management.","Development and coaching team members."]},{company:"ASRC Inuteq (NASA)",title:"Application Development Lead & IT Lead",start:"2012-07",end:"2020-04",responsibilities:["I served as the Application Development Lead for the contract, participating in senior management discussions and setting development goals and standards for the contract.","I mentored developers at all levels, providing feedback on code and career coaching.","I also served as the Lead developer and primary point of contact for 5 active projects with 3 separate customers including a redesign and re-platforming of the Exploration & Space Communications (ESC) public website from Drupal to Gatsby, NodeJS and ASP.NET Core.","Lastly I served as the IT manager for the Exploration & Space Communications Division (Code 450) managing both development and operation activities."]},{company:"ASRC PRIMUS (NASA)",title:"Senior Application Developer",start:"2011-07",end:"2012-07",responsibilities:["Designed and implemented new features for an online intern registration and selection (SOLAR) system. Provided architectural design support for the next version a large configuration management (CM) tool used by multiple flight projects at NASA's Goddard Space Flight Center (GSFC). Assisted with other applications as needed."]},{company:"ASRC Federal (NASA)",title:"Senior Programmer",start:"2007-07",end:"2011-07",responsibilities:["Tailored large scaled CM applications written primarily in Classic ASP to meet changing user requirements and needs."]},{company:"Systems Management Engineering Inc",title:"Software Engineer",start:"2007-05",end:"2007-07",responsibilities:["Implement modules for Peace Corps’ Volunteer Information Database Application Project (VIDA) to transition from MS Access to a .Net 2.0 Winforms application. (MS SQL, ADO.Net, Data Dynamics ActiveReports, Infragistics NetAdvantage)"]}],social:[{name:"GitHub",username:"youngaj",link:"https://github.com/youngaj"},{name:"Twitter",username:"@Dreyoung79",link:"https://twitter.com/Dreyoung79"},{name:"YouTube",username:"youngaj",link:"https://www.youtube.com/channel/UCr-_BId5w_QTTKcthhNRVlw/videos"},{name:"LinkedIn",username:"Andre Young",link:"https://www.linkedin.com/in/andre-young-b9a9b5b/"}],projects:[{title:"Commercial Real Estate Management (CREM)",description:"Improve rent collection and property management"},{title:"OneStream & Snowflake",description:"Gain insights into the Focus Platform by recording events via OneStream (Kafka) into Snowflake and internal C1 data lake."},{title:"Conveyor Belt (CB)",description:"Meta-platform to enable internal development teams to onboard and easily use internal platforms.  Drives down cycle times and ensures governance by preventing intents without the appropriate approvals from being deployed into protected environments."},{title:"Website",description:"Gatsby redesign of this website",code:{repo:"gatsby-website",url:"https://github.com/youngaj/gatsby-website"}}],podcastAppearances:[{uuid:"3414c425-da9f-4b6d-82bf-2062b636d03d",podcastName:"Web Rush",topic:"From IC to PL",description:"",url:"https://webrush.io/episodes/episode-164-rising-stumbling-and-getting-up-again-life-as-a-tech-manager"},{uuid:"3d2522c1-668f-4c2b-899f-801d7259cb3c",podcastName:"Web Rush",topic:"Testing",description:"",url:"https://webrush.simplecast.com/episodes/episode-143-old-man-yells-at-tests-andre-young"}]},nasa:{lastDay:"2020/04/20"}}},QgiU:function(e,t,a){a("pIFo"),e.exports=function(){"use strict";return function(e,t,a){e=e||{};var n=t.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(e,t,a,r){return n.fromToBase(e,t,a,r)}a.en.relativeTime=r,n.fromToBase=function(t,n,i,o,s){for(var c,l,d,u=i.$locale().relativeTime||r,p=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=p.length,g=0;g<m;g+=1){var f=p[g];f.d&&(c=o?a(t).diff(i,f.d,!0):i.diff(t,f.d,!0));var b=(e.rounding||Math.round)(Math.abs(c));if(d=c>0,b<=f.r||!f.r){b<=1&&g>0&&(f=p[g-1]);var v=u[f.l];s&&(b=s(""+b)),l="string"==typeof v?v.replace("%d",b):v(b,n,f.l,d);break}}if(n)return l;var h=d?u.future:u.past;return"function"==typeof h?h(l):h.replace("%s",l)},n.to=function(e,t){return i(e,t,this,!0)},n.from=function(e,t){return i(e,t,this)};var o=function(e){return e.$u?a.utc():a()};n.toNow=function(e){return this.to(o(this),e)},n.fromNow=function(e){return this.from(o(this),e)}}}()},RKNp:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("VRzm"),a("Btvt");var n=a("o0o1"),r=a.n(n),i=(a("Z2Ku"),a("L9s1"),a("ls82"),a("vDqi")),o=a.n(i),s=a("Ob/s");function c(e,t,a,n,r,i,o){try{var s=e[i](o),c=s.value}catch(l){return void a(l)}s.done?t(c):Promise.resolve(c).then(n,r)}function l(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function o(e){c(i,n,r,o,s,"next",e)}function s(e){c(i,n,r,o,s,"throw",e)}o(void 0)}))}}var d=function(){var e=l(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://andrepodcasts.azurewebsites.net/api/PodcastQueue");case 2:return t=e.sent,a=t.data,n=s.a.me.podcastAppearances.map((function(e){return e.uuid})),a.appearances=a.starred.filter((function(e){return n.includes(e.uuid)})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},p21n:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.Starred="Starred",e.Queue="Queue",e.Subscribed="Subscribed",e.Appearances="Appearances"}(n||(n={}))},u41R:function(e,t,a){"use strict";a.r(t);a("jm62"),a("ioFf"),a("RW0V"),a("tUrg"),a("rGqo"),a("yt8O"),a("Btvt"),a("f3/d"),a("dRSK");var n=a("q1tI"),r=a.n(n),i=a("9Dj+"),o=a("+49W"),s=a("RKNp"),c=a("R/WZ"),l=a("tr08"),d=a("unEM"),u=a("NMmI"),p=a("zT8o"),m=a("Ob/s"),g=a("S3BH"),f=a("p21n"),b=a("JuHP");function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){y(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var w=Object(c.a)((function(e){var t,a,n,r,i,o,s;return h(h({},Object(d.b)(e)),{},{container:(t={display:"grid",gap:".5rem",gridTemplateColumns:"1fr 1fr"},t[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr",margin:"auto"},t),episode:(a={display:"grid",gridTemplateColumns:"90px 1fr",gap:e.spacing(2),border:"1px solid "+d.a.muted,borderRadius:"10px",padding:e.spacing(2),"& div":{textAlign:"left"}},a[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr",marginBottom:e.spacing(2)},a),episodeTitle:(n={marginBottom:"2rem"},n[e.breakpoints.down("sm")]={textAlign:"center"},n),episodeIcon:(r={width:"100%",minWidth:"80px"},r[e.breakpoints.down("sm")]={width:"100%"},r),tabs:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1rem",margin:"1rem",marginTop:"2rem"},tabHeader:(i={fontSize:"1.5rem"},i[e.breakpoints.down("sm")]={fontSize:"1.0rem"},i),divider:(o={display:"block",marginTop:"1rem",marginBottom:"15px",backgroundColor:e.palette.secondary.main,height:"2px",width:"150px",marginLeft:"auto",marginRight:"auto"},o[e.breakpoints.down("sm")]={width:"100px"},o),count:(s={fontSize:"1.2rem",color:d.a.muted},s[e.breakpoints.down("sm")]={display:"none"},s)})}));t.default=function(e){var t=Object(l.a)(),a=w(t),c=m.a.me.social.find((function(e){return"Twitter"===e.name})),d=Object(n.useState)({queue:[],podcasts:[],starred:[],appearances:[]}),v=d[0],y=d[1],O=Object(n.useState)([]),E=O[0],S=O[1],j=Object(n.useState)(f.a.Starred),k=j[0],N=j[1],P=Object(b.a)().width>t.breakpoints.values.sm;Object(n.useEffect)((function(){Object(s.a)().then((function(e){var t,a,n,r;y(h({},e)),S([{title:"Appearances",count:null===(t=e.appearances)||void 0===t?void 0:t.length,value:f.a.Appearances},{title:"Stared",count:null===(a=e.starred)||void 0===a?void 0:a.length,value:f.a.Starred},{title:"In Queue",count:null===(n=e.queue)||void 0===n?void 0:n.length,value:f.a.Queue},{title:"Subscribed",count:null===(r=e.podcasts)||void 0===r?void 0:r.length,value:f.a.Subscribed}])}))}),[]);return r.a.createElement(i.a,null,r.a.createElement(o.a,{active:"podcasts",links:{home:{title:"Home",target:"/"},profile:{title:"Profile",target:"/#profile"},resume:{title:"Resume",target:"/#resume"},podcasts:{title:"Podcasts",target:"/#podcastQueue"},devGroup:{title:"Dev Group",target:"/#devGroup"},blog:{title:"Blog",target:"/#blog"}}}),r.a.createElement(p.a,{bg:"dark"},r.a.createElement(g.a,null,"Podcasts"),r.a.createElement("p",{className:a.mutedText},"I subscribe to ",v.podcasts.length," podcasts. Podcasts are a great way to keep up with the latest around the industry. They are also a great way not to go insane during long commutes. Below is a list of the podcasts I currently subscribe to. Follow along and/or send me suggestions"," ",r.a.createElement("a",{href:c.link},c.username)),r.a.createElement("div",{className:a.tabs},E.map((function(e){var t=e.value===k,n=t?a.tabHeader:[a.tabHeader,a.mutedText].join(" ");return r.a.createElement("span",{className:n,onClick:function(t){return N(e.value)}},e.title,r.a.createElement("span",{className:a.count}," (",e.count,")"),t&&r.a.createElement("span",{className:a.divider}))}))),k===f.a.Queue&&r.a.createElement("div",{className:a.container},v.queue.map((function(e,n){return r.a.createElement("div",{key:"episode-"+e.title+"-"+n,className:a.episode},r.a.createElement("div",null,r.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+e.podcast+".jpg",alt:"{episode.title}",className:a.episodeIcon})),r.a.createElement("div",{style:{marginLeft:t.spacing(2)}},r.a.createElement("h3",{className:a.episodeTitle},r.a.createElement("a",{href:e.url},e.title)),P&&r.a.createElement("div",{style:{display:"block",maxHeight:"200px",overflowY:"auto"},dangerouslySetInnerHTML:{__html:e.showNotes}})))}))),k===f.a.Subscribed&&r.a.createElement("div",{className:a.container},v.podcasts.map((function(e,t){return r.a.createElement(u.a,{data:e,key:"episode-"+e.title+"-"+t})}))),k===f.a.Starred&&r.a.createElement("div",{className:a.container},v.starred.map((function(e,n){return r.a.createElement("div",{key:"episode-"+e.title+"-"+n,className:a.episode},r.a.createElement("div",null,r.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+e.podcastUuid+".jpg",alt:"{episode.title}",className:a.episodeIcon})),r.a.createElement("div",{style:{marginLeft:t.spacing(2)}},r.a.createElement("h3",{className:a.episodeTitle},r.a.createElement("a",{href:e.url},e.title)),P&&r.a.createElement("div",{style:{display:"block",maxHeight:"200px",overflowY:"auto"},dangerouslySetInnerHTML:{__html:e.showNotes}})))})))))}}}]);
//# sourceMappingURL=component---src-pages-podcasts-tsx-72b0fb5611c6fc9f0ed9.js.map