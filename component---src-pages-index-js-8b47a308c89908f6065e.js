(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"4a4k":function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAcGpZIg//8QAFRABAQAAAAAAAAAAAAAAAAAAASD/2gAIAQEAAQUCK//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABYQAQEBAAAAAAAAAAAAAAAAAAEAEP/aAAgBAQABPyGJMTn/2gAMAwEAAgADAAAAENDP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGBABAQEBAQAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8QBBkOzZOT7f/Z","aspectRatio":1.6260162601626016,"src":"/static/6c1deb1dbbb853560084e0438c4d1878/14b42/texture.jpg","srcSet":"/static/6c1deb1dbbb853560084e0438c4d1878/f836f/texture.jpg 200w,\\n/static/6c1deb1dbbb853560084e0438c4d1878/2244e/texture.jpg 400w,\\n/static/6c1deb1dbbb853560084e0438c4d1878/14b42/texture.jpg 800w,\\n/static/6c1deb1dbbb853560084e0438c4d1878/47498/texture.jpg 1200w,\\n/static/6c1deb1dbbb853560084e0438c4d1878/0e329/texture.jpg 1600w,\\n/static/6c1deb1dbbb853560084e0438c4d1878/4a461/texture.jpg 2560w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')},"8/g6":function(e,t,a){"use strict";a("R48M");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef((function(t,a){return r.default.createElement(o.default,(0,i.default)({ref:a},t),e)})));0;return a.muiName=o.default.muiName,a};var i=n(a("pVnL")),r=n(a("q1tI")),o=n(a("UJJ5"))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var i,r=n(a("PJYZ")),o=n(a("VbXa")),s=n(a("8OQS")),l=n(a("pVnL")),c=n(a("q1tI")),A=n(a("17x9")),d=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),f=function(e){var t=d(e),a=m(t);return p[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,j=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:r}),c.default.createElement("source",{media:i,srcSet:a,sizes:r}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function S(e,t){var a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(j.has(e.target)){var t=j.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),j.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),j.set(e,t)),function(){a.unobserve(e),j.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",A=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+c+o+s+a+n+t+r+i+l+A+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=c.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,i=e.generateSources,r=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(C,(0,l.default)({ref:t,src:a},r,{ariaHidden:o}));return n.length>1?c.default.createElement("picture",null,i(n),s):s})),C=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,o=e.onLoad,A=e.onError,d=e.loading,u=e.draggable,m=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:n,src:i},g,{onLoad:o,onError:A,ref:t,loading:d,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));C.propTypes={style:A.default.object,onError:A.default.func,onLoad:A.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&f(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&E&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,(function(){var e=f(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=m(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,A=e.placeholderStyle,u=void 0===A?{}:A,m=e.placeholderClassName,p=e.fluid,f=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,j=e.itemProp,w=e.loading,S=e.draggable,B=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,Q=(0,l.default)({opacity:B?1:0,transition:R?"opacity "+b+"ms":"none"},s),I="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&T,s,u),D={title:t,alt:this.state.isVisible?"":a,style:k,className:m,itemProp:j};if(p){var Y=p,L=g(p);return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:L.maxWidth?L.maxWidth+"px":null,maxHeight:L.maxHeight?L.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),I&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&T)}),L.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:L.base64,spreadProps:D,imageVariants:Y,generateSources:x}),L.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:L.tracedSVG,spreadProps:D,imageVariants:Y,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,v(Y),c.default.createElement(C,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:w},L,{imageVariants:Y}))}}))}if(f){var P=f,M=g(f),z=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},r);return"inherit"===r.display&&delete z.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},I&&c.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:I,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},R&&T)}),M.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:D,imageVariants:P,generateSources:x}),M.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:D,imageVariants:P,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,v(P),c.default.createElement(C,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,loading:w,draggable:S})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:w},M,{imageVariants:P}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var Q=A.default.shape({width:A.default.number.isRequired,height:A.default.number.isRequired,src:A.default.string.isRequired,srcSet:A.default.string.isRequired,base64:A.default.string,tracedSVG:A.default.string,srcWebp:A.default.string,srcSetWebp:A.default.string,media:A.default.string}),I=A.default.shape({aspectRatio:A.default.number.isRequired,src:A.default.string.isRequired,srcSet:A.default.string.isRequired,sizes:A.default.string.isRequired,base64:A.default.string,tracedSVG:A.default.string,srcWebp:A.default.string,srcSetWebp:A.default.string,media:A.default.string,maxWidth:A.default.number,maxHeight:A.default.number});R.propTypes={resolutions:Q,sizes:I,fixed:A.default.oneOfType([Q,A.default.arrayOf(Q)]),fluid:A.default.oneOfType([I,A.default.arrayOf(I)]),fadeIn:A.default.bool,durationFadeIn:A.default.number,title:A.default.string,alt:A.default.string,className:A.default.oneOfType([A.default.string,A.default.object]),critical:A.default.bool,crossOrigin:A.default.oneOfType([A.default.string,A.default.bool]),style:A.default.object,imgStyle:A.default.object,placeholderStyle:A.default.object,placeholderClassName:A.default.string,backgroundColor:A.default.oneOfType([A.default.string,A.default.bool]),onLoad:A.default.func,onError:A.default.func,onStartLoad:A.default.func,Tag:A.default.string,itemProp:A.default.string,loading:A.default.oneOf(["auto","lazy","eager"]),draggable:A.default.bool};var T=R;t.default=T},DqEY:function(e,t,a){"use strict";a("R48M");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("q1tI")),r=(0,n(a("8/g6")).default)(i.default.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload");t.default=r},RXBc:function(e,t,a){"use strict";a.r(t);a("E5k/");var n,i,r=a("q1tI"),o=a.n(r),s=a("R/WZ"),l=a("tr08"),c=a("Bl7J"),A=a("vrFN"),d=a("4a4k"),u=a("Z3vd"),m=Object(s.a)((function(e){return{button:{letterSpacing:"1px",borderRadius:"5px"}}})),g=function(e){var t=Object(l.a)(),a=m(t),n=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{color:"secondary",variant:"contained",className:a.button},n))},p=a("unEM"),f={me:{firstName:"Andre",lastName:"Young",email:"andrejyoung@gmail.com",dob:"1979-09",age:40,workExperience:[{company:"Capital One",title:"Senior Manager, Software Engineering",start:"2020-04",end:"",responsibilities:["Technical lead for a new project. Still getting up to speed but enjoying my new team!"]},{company:"ASRC Inuteq (NASA)",title:"Application Developement Lead & IT Lead",start:"2012",end:"2020-04",responsibilities:["I served as the Application Development Lead for the contract, participating in senior management discussions and setting development goals and standards for the contract.","I mentored developers at all levels, providing feedback on code and career coaching.","I also served as the Lead developer and primary point of contact for 5 active projects with 3 separate customers including a redesign and replatforming of the Exploration & Space Communications (ESC) public website from Drupal to Gatsby, NodeJS and ASP.NET Core.","Lastly I served as the IT manager for the Exploration & Space Communications Division (Code 450) managing both development and operation activities."]},{company:"ASRC PRIMUS (NASA)",title:"Senior Application Developer",start:"2011-07",end:"2012-07",responsibilities:["Designed and implemented new features for an online intern registration and selection (SOLAR) system. Provided architectural design support for the next version a large configuration management (CM) tool used by multiple flight projects at NASA's Goddard Space Flight Center (GSFC). Assited with other applications as needed."]},{company:"ASRC Federal (NASA)",title:"Senior Programmer",start:"2007-07",end:"2011-07",responsibilities:["Tailored large scaled CM applications written primarily in Classic ASP to meet changing user requirements and needs."]},{company:"Systems Management Engineering Inc",title:"Software Engineer",start:"2007-05",end:"2007-07",responsibilities:["Implement modules for Peace Corps’ Volunteer Information Database Application Project (VIDA) to transition from MS Access to a .Net 2.0 Winforms application. (MS SQL, ADO.Net, Data Dynamics ActiveReports, Infragistics NetAdvantage)"]}],social:[{name:"GitHub",username:"youngaj",link:"https://github.com/youngaj"},{name:"Twitter",username:"@Dreyoung79",link:"https://twitter.com/Dreyoung79"},{name:"YouTube",username:"youngaj",link:"https://www.youtube.com/channel/UCr-_BId5w_QTTKcthhNRVlw/videos"}]},nasa:{lastDay:"2020/04/20"}},h=a("9eSz"),b=a.n(h),E=a("lLL3"),j=Object(s.a)((function(e){return Object.assign({},Object(p.b)(e),{image:function(e){return Object.assign({},e.imageCss)}})})),v=function(e){var t=function(e,t,a){return{theme:e,containerCss:Object.assign({},t),imageCss:Object.assign({},a)}}(Object(l.a)(),{},e.css||{}),a=j(t),n=E.data;return o.a.createElement("figure",null,o.a.createElement(b.a,{fluid:n.file.childImageSharp.fluid,alt:"Missing image stand in",className:a.image}))},w={position:"relative",width:"100%",overflow:"hidden"},y={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"inline-table",verticalAlign:"middle",paddingLeft:"40px",paddingRight:"40px",width:"100%","& a":{color:"white"}},x={position:"relative"},S={position:"absolute",top:0,right:0,bottom:0,left:0},B=Object(s.a)((function(e){var t={image:function(e){return Object.assign({},e.imageCss)},imageContainer:function(e){return Object.assign({},e.containerCss)},text:function(e){return Object.assign({},e.textCss)},overlay:function(e){return Object.assign({},e.overlayCss)},centerCrop:{top:"50%",left:"50%",height:"100%",transform:"translate(-50%, -30%)"}},a=Object(p.b)(e);return Object.assign({},a,t)})),N=function(e){var t=e.image,a=e.alt,n=e.children,i=e.showCaption,r=e.css||{},s=r?r.container:{},c=r?r.image:{},A=r?r.text:{},d=r?r.overlay:{},u=function(e,t,a,n,i){return{theme:e,containerCss:Object.assign({},w,t),imageCss:Object.assign({},x,a),textCss:Object.assign({},y,n),overlayCss:Object.assign({},S,i)}}(Object(l.a)(),s,c,A,d),m=B(u);return o.a.createElement("div",{className:m.imageContainer},t&&t.childImageSharp?o.a.createElement(b.a,{fluid:t.childImageSharp.fluid,className:[m.image,m.crop?m.centerCrop:""].join(" "),alt:a}):o.a.createElement("div",null,o.a.createElement(v,{css:u.imageCss,className:[m.image,m.crop?m.centerCrop:""].join(" "),showCaption:i,alt:a})),o.a.createElement("div",{className:m.overlay}),o.a.createElement("span",{className:m.text},n))};"undefined"!=typeof window&&(i=window.innerHeight,n=window.innerWidth);var O=function(){var e=Object(r.useState)({windowHeight:i,windowWidth:n}),t=e[0],a=e[1];return Object(r.useEffect)((function(){var e=function(){return a({windowHeight:window.innerHeight,windowWidth:window.innerWidth})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t},C=Object(s.a)((function(e){return Object.assign({},Object(p.b)(e),{textSpacing:{marginBottom:e.spacing(4)}})})),R=function(e){var t=Object(l.a)(),a=C(t),n=O(),i={text:{textAlign:"center"},image:{height:(n.windowWidth>600?n.windowHeight-75:n.windowHeight)+"px"}},r=d.data;return o.a.createElement(N,{img:r.file,css:i},o.a.createElement("h1",null,o.a.createElement("div",{className:[a.pt85,a.wt100].join(" ")},"I'm Andre Young"),o.a.createElement("span",{className:[a.pt70,a.wt700].join(" ")},"Sr. Software Engineering Manager")),o.a.createElement("div",{className:[a.pt22,a.textSpacing].join(" ")},f.me.age," years young, husband and father, code addict"),o.a.createElement(g,null,"Know me better"))},Q=a("+49W"),I=(a("rzGZ"),a("Dq+y"),a("8npG"),a("xm0R")),T=a("wd/R"),k=a.n(T),D=(a("y7hu"),a("pJf4"),a("DqEY")),Y=a.n(D),L=Object(s.a)((function(e){var t;return Object.assign({},Object(p.b)(e),{content:(t={textAlign:"center"},t[e.breakpoints.up("sm")]={textAlign:"left"},t),heading:{textTransform:"uppercase",marginTop:e.spacing(8),marginBottom:e.spacing(2)},highlight:{color:e.palette.secondary.main},buttonArea:{marginTop:e.spacing(4),marginBottom:e.spacing(16)}})})),P=function(){var e=Object(l.a)(),t=L(e);return o.a.createElement("div",null,o.a.createElement("h3",{className:t.heading},"Contact Details"),o.a.createElement("div",null,o.a.createElement("div",{className:t.mutedText},o.a.createElement("p",null,f.me.firstName," ",f.me.lastName),o.a.createElement("p",null,o.a.createElement("a",{href:"mailto:"+f.me.email},f.me.email)),f.me.social.map((function(e,t){return o.a.createElement("p",{key:"social-"+t},e.name,":"," ",o.a.createElement("a",{href:e.link,target:"_blank"},e.username," "))}))),o.a.createElement("div",{className:t.buttonArea},o.a.createElement(g,null,o.a.createElement(Y.a,null),"  Download Resume"))))},M=Object(s.a)((function(e){return{divider:{display:"block",marginTop:"35px",marginBottom:"35px",backgroundColor:e.palette.secondary.main,height:"2px",width:"150px"}}})),z=function(){var e=Object(l.a)(),t=M(e);return o.a.createElement("span",{className:t.divider})},G=Object(s.a)((function(e){return Object.assign({},Object(p.b)(e),{heading:{textTransform:"uppercase",marginTop:e.spacing(5),marginBottom:e.spacing(5)}})})),V=function(e){var t=e.children,a=Object(l.a)(),n=G(a);return o.a.createElement("div",{className:[n.heading,n.pt65,n.wt100].join(" ")},t)},H=Object(s.a)((function(e){var t;return Object.assign({},Object(p.b)(e),{heading:{textTransform:"uppercase",marginBottom:"20px"},container:(t={display:"grid",msGridColumns:"1fr",gridTemplateColumns:"1fr",textAlign:"center"},t[e.breakpoints.up("md")]={textAlign:"left",msGridColumns:"1fr 1fr",gridTemplateColumns:"1fr 1fr"},t.marginLeft="54px",t.marginRight="54px",t.paddingLeft="15px",t.paddingRight="15px",t["& p"]={marginBottom:"10px"},t)})})),q=function(){var e=Object(l.a)(),t=H(e),a=O(),n=k()().diff("1999-06-01","years"),i=I.data;return o.a.createElement("div",{className:t.container},o.a.createElement("div",null,o.a.createElement("h2",{className:t.heading},o.a.createElement(V,null,"Hello, My name is ",f.me.firstName,".")),o.a.createElement("p",null,"Andre Young, ",f.me.age," years young, born and raised in the Washington D.C. metro area. Highly motivated senior software engineering manager and tech lead with over ",n," ","years of development experience."),o.a.createElement(z,null),o.a.createElement("p",{className:t.mutedText},"As of April 2020 I started a new job with Capital One. Very excited to be joining an awesome team doing awesome work!"),o.a.createElement("p",{className:t.mutedText},"Formerly I worked at NASA's Goddard Space Flight Center, where I spent most of my time crafting and working on cool (and sometimes important but not so cool) projects."),o.a.createElement("p",{className:t.mutedText},'I also ran a bi-weekly developer meetup at NASA, where we discussed various development topics ranging from code architecture to knowing how to say "No" to a customer and having them say "thank you" afterwards.'),o.a.createElement("p",{className:t.mutedText},"I love development, love learning and sharing the things I've learned with anyone willing to listen. See my resume and other interests below.")," ",o.a.createElement(P,null)),a.windowWidth>e.breakpoints.values.md&&o.a.createElement("div",null,o.a.createElement(b.a,{fluid:i.profile.childImageSharp.fluid,alt:"Profile picture"})))},F=Object(s.a)((function(e){return{divider:{display:"block",marginTop:"35px",marginBottom:"35px",backgroundColor:e.palette.secondary.main,height:"2px",width:"150px",marginLeft:"auto",marginRight:"auto"}}})),W=function(){var e=Object(l.a)(),t=F(e);return o.a.createElement("span",{className:t.divider})},U=Object(s.a)((function(e){return Object.assign({},Object(p.b)(e),{container:{marginLeft:"auto",marginRight:"auto",paddingLeft:e.spacing(3),paddingRight:e.spacing(3),paddingTop:e.spacing(5),paddingBottom:e.spacing(5),textAlign:"center"}})})),J=function(e){var t=Object(l.a)(),a=U(t),n=e.children,i={backgroundColor:"rgb(23, 23, 23)"};return"dark"===e.bg&&(i.backgroundColor="black"),o.a.createElement("div",{className:a.container,style:i},n)},Z=Object(s.a)((function(e){return Object.assign({},Object(p.b)(e))})),_=function(){var e=Object(l.a)(),t=Z(e);return o.a.createElement(J,null,o.a.createElement("h2",null,o.a.createElement(V,null,"My Latest Work")),o.a.createElement("p",{className:t.mutedText},"Most of my work is proprietary but I'm looking to expand my open source portfolio soon. Stay tuned!"),o.a.createElement("span",null,o.a.createElement(W,null)))},X=a("tUK7"),K=a.n(X),$=a("iUGO"),ee=a.n($),te=Object(s.a)((function(e){return Object.assign({},Object(p.b)(e),{jobBox:{border:"2px solid rgb(23, 23, 23)",marginBottom:e.spacing(2),paddingLeft:e.spacing(3),textAlign:"left","& p":{marginTop:e.spacing(1),marginBottom:e.spacing(2)}},jobLayout:{display:"grid",gridTemplateColumns:"150px 55px 1fr",marginRight:e.spacing(5)},expansionBox:{color:"rgb(23, 23, 23)"},jobTitle:{textTransform:"uppercase"},responsibility:{marginLeft:e.spacing(2)},yearBox:{backgroundColor:e.palette.secondary.main,width:"120px",height:"40px",lineHeight:"40px",display:"block",verticalAlign:"center",borderRadius:"8px"}})})),ae=function(e){var t=l.a,a=te(t),n=Object(r.useState)(e.data),i=n[0],s=n[1],c=new Date(i.start).getFullYear(),A=i.end?new Date(i.end).getFullYear():"NOW";return o.a.createElement("div",{className:a.jobLayout},o.a.createElement("div",{className:[a.yearBox,a.wt700].join(" ")},c," - ",A),o.a.createElement("div",{className:a.expansionBox,onClick:function(e){e.preventDefault(),i.expanded=!i.expanded,s(Object.assign({},i))}},i.expanded?o.a.createElement(K.a,{fontSize:"large",color:"inherit"}):o.a.createElement(ee.a,{fontSize:"large",color:"inherit"})),o.a.createElement("div",{className:a.jobBox},o.a.createElement("p",{className:a.jobTitle},i.title," - ",i.company),i.expanded&&o.a.createElement("div",{className:a.mutedText},"Responsibilities: ",o.a.createElement("br",null),o.a.createElement("ul",null,i.responsibilities.map((function(e,t){return o.a.createElement("li",{className:a.responsibility,key:i.title+"-duty-"+t},e)}))))))},ne=Object(s.a)((function(e){return Object.assign({},Object(p.b)(e),{container:{marginLeft:e.spacing(5)},h3:{textAlign:"left",marginBottom:e.spacing(3)}})})),ie=function(){var e=Object(l.a)(),t=ne(e);return o.a.createElement(J,{bg:"dark"},o.a.createElement("h2",null,o.a.createElement(V,null,"My resume")),o.a.createElement("p",{className:t.mutedText},"I have a strong belief that you should never stop learning. Below lists my formal education."),o.a.createElement(W,null),o.a.createElement("div",{className:t.container},o.a.createElement("h3",{className:[t.h3,t.pt35,t.wt100].join(" ")},"Work Experience",o.a.createElement("br",null),"1999 - Now"),o.a.createElement("div",null,f.me.workExperience.map((function(e){return o.a.createElement(ae,{data:e})})))))},re=(a("v9g0"),a("RKNp")),oe=a("Wbzz"),se=Object(s.a)((function(e){return Object.assign({},Object(p.b)(e),{container:{display:"grid",gridGap:e.spacing(2),gridTemplateColumns:"1fr 1fr"},episode:{display:"grid",gridTemplateColumns:"1fr 3fr",gridGap:e.spacing(2),border:"1px solid "+p.a.muted,padding:e.spacing(2),"& div":{textAlign:"left"}}})})),le=function(){var e=Object(l.a)(),t=se(e),a=f.me.social.find((function(e){return"Twitter"===e.name})),n=Object(r.useState)({queue:[],podcasts:[]}),i=n[0],s=n[1];return Object(r.useEffect)((function(){Object(re.a)().then((function(e){s(Object.assign({},e))}))}),[]),o.a.createElement(J,null,o.a.createElement("h2",null,o.a.createElement(V,null,"What's in my podcast queue?")),o.a.createElement("p",{className:t.mutedText},"I subscribe to ",i.podcasts.length," podcasts. Podcasts are a great way to keep up with the latest around the industry. They are also a great way not to go insane duing long commutes. Below is a list of what's currently in my queue. Follow along and/or send me suggestions ",o.a.createElement("a",{href:a.link},a.username)),o.a.createElement("span",null,o.a.createElement(W,null)),o.a.createElement("div",{className:t.container},i.queue.map((function(e,a){return o.a.createElement("div",{key:"episode-"+e.title+"-"+a,className:t.episode},o.a.createElement("div",null,o.a.createElement("img",{src:"https://static.pocketcasts.com/discover/images/130/"+e.podcast+".jpg",alt:"{episode.title}"})),o.a.createElement("div",null,o.a.createElement("a",{href:e.url},e.title)))}))),o.a.createElement("div",null,o.a.createElement(oe.Link,{to:"/podcasts"},o.a.createElement(g,null,"See All Podcasts"))))},ce=Object(s.a)((function(e){var t;return Object.assign({},Object(p.b)(e),{sticky:(t={position:"-webkit-sticky"},t.position="sticky",t.top=0,t)})}));t.default=function(){var e=Object(l.a)(),t=ce(e);return o.a.createElement(c.a,null,o.a.createElement(A.a,null),o.a.createElement("span",{name:"home"}),o.a.createElement(R,null),o.a.createElement("div",{className:t.sticky},o.a.createElement(Q.a,null)),o.a.createElement("span",{name:"profile"}),o.a.createElement(q,null),o.a.createElement("span",{name:"skills"}),o.a.createElement(_,null),o.a.createElement("span",{name:"resume"}),o.a.createElement(ie,null),o.a.createElement("span",{name:"podcast"}),o.a.createElement(le,{name:"queue"}))}},UJJ5:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a("wx14"),i=a("Ff2n"),r=a("q1tI"),o=a("iuhU"),s=a("H2TA"),l=a("NqtD"),c=r.forwardRef((function(e,t){var a=e.children,s=e.classes,c=e.className,A=e.color,d=void 0===A?"inherit":A,u=e.component,m=void 0===u?"svg":u,g=e.fontSize,p=void 0===g?"default":g,f=e.htmlColor,h=e.titleAccess,b=e.viewBox,E=void 0===b?"0 0 24 24":b,j=Object(i.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return r.createElement(m,Object(n.a)({className:Object(o.a)(s.root,c,"inherit"!==d&&s["color".concat(Object(l.a)(d))],"default"!==p&&s["fontSize".concat(Object(l.a)(p))]),focusable:"false",viewBox:E,color:f,"aria-hidden":!h||void 0,role:h?"img":void 0,ref:t},j),a,h?r.createElement("title",null,h):null)}));c.muiName="SvgIcon";var A=Object(s.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(c)},iUGO:function(e,t,a){"use strict";a("R48M");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("q1tI")),r=(0,n(a("8/g6")).default)(i.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddBox");t.default=r},lLL3:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAcGpZIg//8QAFRABAQAAAAAAAAAAAAAAAAAAASD/2gAIAQEAAQUCK//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABYQAQEBAAAAAAAAAAAAAAAAAAEAEP/aAAgBAQABPyGJMTn/2gAMAwEAAgADAAAAENDP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGBABAQEBAQAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8QBBkOzZOT7f/Z","aspectRatio":1.6291666666666667,"src":"/static/6c1deb1dbbb853560084e0438c4d1878/b7496/texture.jpg","srcSet":"/static/6c1deb1dbbb853560084e0438c4d1878/d4548/texture.jpg 391w,\\n/static/6c1deb1dbbb853560084e0438c4d1878/b94b5/texture.jpg 783w,\\n/static/6c1deb1dbbb853560084e0438c4d1878/b7496/texture.jpg 1565w,\\n/static/6c1deb1dbbb853560084e0438c4d1878/eb567/texture.jpg 2348w,\\n/static/6c1deb1dbbb853560084e0438c4d1878/460a9/texture.jpg 2560w","sizes":"(max-width: 1565px) 100vw, 1565px"}}}}}')},tUK7:function(e,t,a){"use strict";a("R48M");var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("q1tI")),r=(0,n(a("8/g6")).default)(i.default.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");t.default=r},xm0R:function(e){e.exports=JSON.parse('{"data":{"profile":{"childImageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAQN8VBMk6CnQWZVkIf/EAB0QAAIBBAMAAAAAAAAAAAAAAAECBAADEjERMkH/2gAIAQEAAQUCG7qYnivI65pchurVGuEK5IaonUa//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPwEwut//xAAXEQEBAQEAAAAAAAAAAAAAAAABABAR/9oACAECAQE/AXG4X//EACAQAAEDAgcAAAAAAAAAAAAAAAEAEBECIQMTMUFRUmH/2gAIAQEABj8CQgbPVh1acqKLhgJEK+YZ6sPC3//EABsQAAIDAQEBAAAAAAAAAAAAAAABESExYRBB/9oACAEBAAE/IbCQMh66KSEGKVHnUfPFuCcGoJPStIE0ryLoBqH/2gAMAwEAAgADAAAAEHcwcP/EABcRAAMBAAAAAAAAAAAAAAAAAAABEVH/2gAIAQMBAT8QSqEY+kj/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREh/9oACAECAQE/EGmlQhY//8QAHxABAAICAgIDAAAAAAAAAAAAAQARIVExQRBhcZHw/9oACAEBAAE/EAAPFwQoReQ9q+MTJHWIBt3eEg8wzRaaPuW1c6xYdfty4auDiziC5tCgXCnVZeceEmhUBT3LEdT/2Q==","aspectRatio":0.6666666666666666,"src":"/static/b4681dc74a606e22cb87faf9a9213dbd/14b42/profile-1.jpg","srcSet":"/static/b4681dc74a606e22cb87faf9a9213dbd/f836f/profile-1.jpg 200w,\\n/static/b4681dc74a606e22cb87faf9a9213dbd/2244e/profile-1.jpg 400w,\\n/static/b4681dc74a606e22cb87faf9a9213dbd/14b42/profile-1.jpg 800w,\\n/static/b4681dc74a606e22cb87faf9a9213dbd/47498/profile-1.jpg 1200w,\\n/static/b4681dc74a606e22cb87faf9a9213dbd/54ac5/profile-1.jpg 1365w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')},zTTH:function(e,t,a){"use strict";var n=a("P8UN"),i=a("Wadk")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-index-js-8b47a308c89908f6065e.js.map