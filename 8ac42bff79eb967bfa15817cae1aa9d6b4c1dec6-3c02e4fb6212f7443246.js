(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Por":function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Starred="Starred",e.Queue="Queue",e.Subscribed="Subscribed",e.Appearances="Appearances"}(r||(r={}))},"/fpp":function(e,t){},A20r:function(e,t){},DVlV:function(e,t,n){"use strict";var r=n("sEMZ");n.o(r,"TabEnum")&&n.d(t,"TabEnum",(function(){return r.TabEnum}));var a=n("/fpp");n.o(a,"TabEnum")&&n.d(t,"TabEnum",(function(){return a.TabEnum}));var i=n("ORDu");n.o(i,"TabEnum")&&n.d(t,"TabEnum",(function(){return i.TabEnum}));var o=n("+Por");n.d(t,"TabEnum",(function(){return o.a}));n("A20r")},FxyP:function(e,t,n){"use strict";n("jm62"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt");var r=n("q1tI"),a=n.n(r),i=n("R/WZ"),o=n("tr08"),s=n("unEM"),c=n("JuHP");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=Object(i.a)((function(e){var t,n,r;return u(u({},Object(s.b)(e)),{},{episode:(t={display:"grid",gridTemplateColumns:"150px 1fr",gap:e.spacing(2),padding:e.spacing(2),"& div":{textAlign:"left"}},t[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr",marginBottom:e.spacing(2)},t),episodeBlock:{display:"block",maxHeight:"200px",overflow:"auto",paddingRight:"1rem",color:s.a.muted,wordBreak:"break-all","& img":{maxWidth:"100%"}},episodeTitle:(n={marginBottom:"2rem"},n[e.breakpoints.down("sm")]={textAlign:"center"},n),episodeIcon:(r={width:"100%",minWidth:"80px"},r[e.breakpoints.down("sm")]={width:"100%"},r)})}));t.a=function(e){var t,n,r=Object(o.a)(),i=d(r),s=e.episode,l=Object(c.a)().width>r.breakpoints.values.sm;return a.a.createElement("div",{className:i.episode},a.a.createElement("div",null,a.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+(null===(t=s.podcast)||void 0===t?void 0:t.uuid)+".jpg",alt:"Podcast logo for "+((null===(n=s.podcast)||void 0===n?void 0:n.title)||"episode"),className:i.episodeIcon})),a.a.createElement("div",{style:{marginLeft:r.spacing(2)}},a.a.createElement("h3",{className:i.episodeTitle},a.a.createElement("a",{href:s.url},s.title)),l&&a.a.createElement("div",{className:i.episodeBlock,dangerouslySetInnerHTML:{__html:s.showNotes}})))}},NMmI:function(e,t,n){"use strict";n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("q1tI"),a=n.n(r),i=n("R/WZ"),o=n("tr08"),s=n("unEM"),c=n("Wgwc"),l=n("QgiU"),u=n.n(l);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}c.extend(u.a);var f=Object(i.a)((function(e){var t;return d(d({},Object(s.b)(e)),{},{podcastBlock:(t={display:"grid",gridGap:e.spacing(1),gridTemplateColumns:"150px 1fr",borderRadius:"5px",padding:e.spacing(2),"& div":{textAlign:"left"}},t[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr","& div":{textAlign:"center"}},t),title:{marginBottom:e.spacing(2)},subTitle:{marginBottom:e.spacing(1)}})}));t.a=function(e){var t,n,i,s,l=Object(o.a)(),u=f(l),p=Object(r.useState)(e.data),m=p[0],g=p[1];return a.a.createElement("div",{className:[u.podcastBlock].join(" ")},a.a.createElement("div",null,a.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+m.uuid+".jpg",alt:"{show.title}"})),a.a.createElement("div",null,a.a.createElement("div",{className:[u.title,u.pt30].join(" ")},a.a.createElement("a",{href:m.url},m.title)),a.a.createElement("p",{className:[u.mutedText,u.pt20,u.subTitle].join(" ")},"Latest Episode: ",c(m.lastEpisodePublished).fromNow()),a.a.createElement("p",null,m.displayFullDetails||m.description.length<200?a.a.createElement("span",null,m.description):a.a.createElement("div",null,(t=m.description,n=200,i=t.substring(0,n),s=i.lastIndexOf(" "),i=i.substring(0,s))," ..."," ",a.a.createElement("a",{onClick:function(){return function(e){e.displayFullDetails=!0,g(d({},e))}(m)}},"show more")))))}},ORDu:function(e,t){},"Ob/s":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("Wgwc"),a=n.n(r),i={me:{firstName:"Andre",lastName:"Young",email:"andrejyoung@gmail.com",age:a()().diff(a()("1979-09","YYYY-MM"),"years"),workExperience:[{company:"Capital One",title:"Senior Manager, Software Engineering",start:"2020-12",end:"",responsibilities:["RulesLab: Team and Technical lead (Team Norm and Team IHOP).","Talent and Performance management.","Development and coaching team members."]},{company:"Capital One",title:"Senior Manager, Software Engineering",start:"2020-04",end:"2023-12",responsibilities:["Technical lead for the Self Service Organization (Safehouse, Focus Discovery, and Tyrell Corp teams).","Talent and Performance management.","Development and coaching team members."]},{company:"ASRC Inuteq (NASA)",title:"Application Development Lead & IT Lead",start:"2012-07",end:"2020-04",responsibilities:["I served as the Application Development Lead for the contract, participating in senior management discussions and setting development goals and standards for the contract.","I mentored developers at all levels, providing feedback on code and career coaching.","I also served as the Lead developer and primary point of contact for 5 active projects with 3 separate customers including a redesign and re-platforming of the Exploration & Space Communications (ESC) public website from Drupal to Gatsby, NodeJS and ASP.NET Core.","Lastly I served as the IT manager for the Exploration & Space Communications Division (Code 450) managing both development and operation activities."]},{company:"ASRC PRIMUS (NASA)",title:"Senior Application Developer",start:"2011-07",end:"2012-07",responsibilities:["Designed and implemented new features for an online intern registration and selection (SOLAR) system. Provided architectural design support for the next version a large configuration management (CM) tool used by multiple flight projects at NASA's Goddard Space Flight Center (GSFC). Assisted with other applications as needed."]},{company:"ASRC Federal (NASA)",title:"Senior Programmer",start:"2007-07",end:"2011-07",responsibilities:["Tailored large scaled CM applications written primarily in Classic ASP to meet changing user requirements and needs."]},{company:"Systems Management Engineering Inc",title:"Software Engineer",start:"2007-05",end:"2007-07",responsibilities:["Implement modules for Peace Corps’ Volunteer Information Database Application Project (VIDA) to transition from MS Access to a .Net 2.0 Winforms application. (MS SQL, ADO.Net, Data Dynamics ActiveReports, Infragistics NetAdvantage)"]}],social:[{name:"GitHub",username:"youngaj",link:"https://github.com/youngaj"},{name:"Twitter",username:"@Dreyoung79",link:"https://twitter.com/Dreyoung79"},{name:"YouTube",username:"youngaj",link:"https://www.youtube.com/channel/UCr-_BId5w_QTTKcthhNRVlw/videos"},{name:"LinkedIn",username:"Andre Young",link:"https://www.linkedin.com/in/andre-young-b9a9b5b/"}],projects:[{title:"Podcast Info",description:'I love podcast and want to share what I\'m "subscribed" to, what I\'ve "started", and what I have "queued" so I created the Azure Function to retrieve that information so that I can display it on this site.',code:{repo:"Azure Functions",url:"https://github.com/youngaj/AzureFunctions"}},{title:"Personal Portfolio",description:"Hand crafted gatsby redesign of this website using Typescript, Azure Functions and more.  Checkout the repo at the link below.",code:{repo:"gatsby-website",url:"https://github.com/youngaj/gatsby-website"}},{title:"ITSMF Capstone Project",description:"In 2023 I graduated from the ITSMF Management Academy. As a part of this program I lead a team of diverse leaders to create a website that would capture the attention of young minority students with the goal of increasing STEM engagement.  The results of the project can be seen at https://youngaj.github.io/capstone/.",code:{repo:"Capstone",url:"https://github.com/youngaj/capstone"}},{title:"RulesLab",description:"Similar to the Conveyor Belt project RulesLab aspires to be the Decision Engine platform for Capital One.  Utilizing DMN along with an intuitive interface this project has the potential to process millions of transactions per day."},{title:"Conveyor Belt (CB)",description:"A low code meta-platform to enable internal development teams to onboard and easily use internal Capital One platforms.  The focus of the project is to improve the internal associate experience and decrease cycle times while ensuring appropriate governance and traceability for intents leveraging key Capital One platforms."},{title:"OneStream & Snowflake",description:"This project allowed product owners and partner teams to gain insights into the Focus Platform by producing a stream of events via OneStream (Kafka) into Snowflake and internal Capital One data lake."},{title:"Commercial Real Estate Management (CREM)",description:"Skunkworks project to leverage internal Capital One platforms to improve rent collection and property management."}],podcastAppearances:[{uuid:"3414c425-da9f-4b6d-82bf-2062b636d03d",podcastName:"Web Rush",topic:"From IC to PL",description:"This was my second ever guest appearance on a podcast.  The initial episode was postponed due to end of year activities and the host graciously allowed me to reschedule.  This is a topic near and dear to my heart and perhaps on the minds of many who have a bit of seniority in their careers and are considering making the jump from an IC (Individual Contributor) to a People Leader (PL).  Hope you enjoy the episode.  We only touched the surface of this topic so if you would like to learn more or chat about it reach out to me on Twitter.",url:"https://webrush.io/episodes/episode-164-rising-stumbling-and-getting-up-again-life-as-a-tech-manager"},{uuid:"3d2522c1-668f-4c2b-899f-801d7259cb3c",podcastName:"Web Rush",topic:"Testing",description:"This was my first time on a podcast.  The hosts of Web Rush are engineers that I have listened to and followed for years.  It was truly a honor to be invited to share my thoughts with their audience.  The topic of my episode was testing.  This topic was inspired by my experience testing, the myths and the reality and talk I gave to the Focus Organization at Capital One shortly before the episode.  I hope you enjoy listening to this episode as much as I enjoyed making it.",url:"https://webrush.simplecast.com/episodes/episode-143-old-man-yells-at-tests-andre-young"}]},nasa:{lastDay:"2020/04/20"}}},QgiU:function(e,t,n){n("pIFo"),e.exports=function(){"use strict";return function(e,t,n){e=e||{};var r=t.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(e,t,n,a){return r.fromToBase(e,t,n,a)}n.en.relativeTime=a,r.fromToBase=function(t,r,i,o,s){for(var c,l,u,p=i.$locale().relativeTime||a,d=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=d.length,f=0;f<m;f+=1){var g=d[f];g.d&&(c=o?n(t).diff(i,g.d,!0):i.diff(t,g.d,!0));var h=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,h<=g.r||!g.r){h<=1&&f>0&&(g=d[f-1]);var b=p[g.l];s&&(h=s(""+h)),l="string"==typeof b?b.replace("%d",h):b(h,r,g.l,u);break}}if(r)return l;var y=u?p.future:p.past;return"function"==typeof y?y(l):y.replace("%s",l)},r.to=function(e,t){return i(e,t,this,!0)},r.from=function(e,t){return i(e,t,this)};var o=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(o(this),e)},r.fromNow=function(e){return this.from(o(this),e)}}}()},RKNp:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return y}));n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("RW0V"),n("VRzm"),n("Btvt");var r=n("o0o1"),a=n.n(r),i=(n("dRSK"),n("Z2Ku"),n("L9s1"),n("Vd3H"),n("ls82"),n("vDqi")),o=n.n(i),s=n("Wgwc"),c=n.n(s),l=n("Ob/s");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(l){return void n(l)}s.done?t(c):Promise.resolve(c).then(r,a)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){m(i,r,a,o,s,"next",e)}function s(e){m(i,r,a,o,s,"throw",e)}o(void 0)}))}}var g=function(){var e=f(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://andrewebsitedata.azurewebsites.net/api/PodcastInfo");case 2:return t=e.sent,(n=t.data).podcasts.forEach((function(e){return e.lastEpisodePublished=new Date(e.lastEpisodePublished)})),r=l.a.me.podcastAppearances.map((function(e){return e.uuid})),n.queue=n.queue.map((function(e){var t,r="string"==typeof e.podcast?e.podcast:null===(t=e.podcast)||void 0===t?void 0:t.uuid;return e.podcast=h(n.podcasts,r),e})),n.starred=n.starred.map((function(e){return e.podcast=h(n.podcasts,e.podcastUuid),e})),n.appearances=n.starred.filter((function(e){return r.includes(e.uuid)})).map((function(e){var t=l.a.me.podcastAppearances.find((function(t){return t.uuid===e.uuid}));return p(p({},e),{},{description:(null==t?void 0:t.description)||e.showNotes,topic:(null==t?void 0:t.topic)||e.title,url:(null==t?void 0:t.url)||e.showNotes,published:new Date(e.published)})})).sort((function(e,t){return t.published.getTime()-e.published.getTime()})),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function h(e,t){return e.find((function(e){return e.uuid===t}))}var b=function(e){return e?Math.floor(e/60/60):0},y=function(e){return c()(e).format("MMMM YYYY")}},"af+W":function(e,t,n){"use strict";n("jm62"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt");var r=n("q1tI"),a=n.n(r),i=n("R/WZ"),o=n("tr08"),s=n("unEM"),c=n("JuHP");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=Object(i.a)((function(e){var t,n,r;return u(u({},Object(s.b)(e)),{},{episode:(t={display:"grid",gridTemplateColumns:"150px 1fr",gap:e.spacing(2),padding:e.spacing(2),"& div":{textAlign:"left"}},t[e.breakpoints.down("sm")]={gridTemplateColumns:"1fr",marginBottom:e.spacing(2)},t),episodeBlock:{display:"block",maxHeight:"200px",overflow:"auto",paddingRight:"1rem",color:s.a.muted},episodeTitle:(n={marginBottom:"2rem"},n[e.breakpoints.down("sm")]={textAlign:"center"},n),episodeIcon:(r={width:"100%",minWidth:"80px"},r[e.breakpoints.down("sm")]={width:"100%"},r),topic:{marginTop:e.spacing(2)}})}));t.a=function(e){var t=Object(o.a)(),n=d(t),r=e.episode,i=Object(c.a)(),s=i.width>t.breakpoints.values.sm,l=i.height/2*.9;return a.a.createElement("div",{className:n.episode},a.a.createElement("div",null,a.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+r.podcastUuid+".jpg",alt:"{episode.title}",className:n.episodeIcon})),a.a.createElement("div",{style:{marginLeft:t.spacing(2)}},a.a.createElement("h3",{className:n.episodeTitle},a.a.createElement("a",{href:r.url},r.title),a.a.createElement("p",{className:[n.topic].join(" ")},a.a.createElement("span",{className:n.mutedText},"Topic:")," ",r.topic)),s&&a.a.createElement("div",{className:[n.episodeBlock,n.mutedText].join(" "),style:{maxWidth:l}},r.description)))}},sEMZ:function(e,t){}}]);
//# sourceMappingURL=8ac42bff79eb967bfa15817cae1aa9d6b4c1dec6-3c02e4fb6212f7443246.js.map