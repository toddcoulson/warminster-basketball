"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[158],{3204:function(A){const e=/[\p{Lu}]/u,a=/[\p{Ll}]/u,t=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,r=new RegExp("^"+i.source),n=new RegExp(i.source+s.source,"gu"),l=new RegExp("\\d+"+s.source,"gu"),c=(A,s)=>{if("string"!=typeof A&&!Array.isArray(A))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(A=Array.isArray(A)?A.map((A=>A.trim())).filter((A=>A.length)).join("-"):A.trim()).length)return"";const i=!1===s.locale?A=>A.toLowerCase():A=>A.toLocaleLowerCase(s.locale),c=!1===s.locale?A=>A.toUpperCase():A=>A.toLocaleUpperCase(s.locale);if(1===A.length)return s.pascalCase?c(A):i(A);return A!==i(A)&&(A=((A,t,s)=>{let i=!1,r=!1,n=!1;for(let l=0;l<A.length;l++){const c=A[l];i&&e.test(c)?(A=A.slice(0,l)+"-"+A.slice(l),i=!1,n=r,r=!0,l++):r&&n&&a.test(c)?(A=A.slice(0,l-1)+"-"+A.slice(l-1),n=r,r=!1,i=!0):(i=t(c)===c&&s(c)!==c,n=r,r=s(c)===c&&t(c)!==c)}return A})(A,i,c)),A=A.replace(r,""),A=s.preserveConsecutiveUppercase?((A,e)=>(t.lastIndex=0,A.replace(t,(A=>e(A)))))(A,i):i(A),s.pascalCase&&(A=c(A.charAt(0))+A.slice(1)),((A,e)=>(n.lastIndex=0,l.lastIndex=0,A.replace(n,((A,a)=>e(a))).replace(l,(A=>e(A)))))(A,c)};A.exports=c,A.exports.default=c},8032:function(A,e,a){a.d(e,{G:function(){return M},L:function(){return b},M:function(){return m},P:function(){return u},S:function(){return J},_:function(){return n},a:function(){return r},b:function(){return g},c:function(){return c},g:function(){return E},h:function(){return l}});var t=a(7294),s=(a(3204),a(5697)),i=a.n(s);function r(){return r=Object.assign?Object.assign.bind():function(A){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(A[t]=a[t])}return A},r.apply(this,arguments)}function n(A,e){if(null==A)return{};var a,t,s={},i=Object.keys(A);for(t=0;t<i.length;t++)e.indexOf(a=i[t])>=0||(s[a]=A[a]);return s}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=A=>{var e;return(A=>{var e,a;return Boolean(null==A||null==(e=A.images)||null==(a=e.fallback)?void 0:a.src)})(A)?A:(A=>Boolean(null==A?void 0:A.gatsbyImageData))(A)?A.gatsbyImageData:(A=>Boolean(null==A?void 0:A.gatsbyImage))(A)?A.gatsbyImage:null==A||null==(e=A.childImageSharp)?void 0:e.gatsbyImageData};function o(A,e,a){const t={};let s="gatsby-image-wrapper";return"fixed"===a?(t.width=A,t.height=e):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:t}}function g(A,e,a,t,s){return void 0===s&&(s={}),r({},a,{loading:t,shouldLoad:A,"data-main-image":"",style:r({},s,{opacity:e?1:0})})}function E(A,e,a,t,s,i,n,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=t,c.height=s,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),n&&(c.objectFit=n),l&&(c.objectPosition=l);const o=r({},A,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:e?0:1,transition:"opacity 500ms linear"},c)});return o}const d=["children"],B=function(A){let{layout:e,width:a,height:s}=A;return"fullWidth"===e?t.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===e?t.createElement("div",{style:{maxWidth:a,display:"block"}},t.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},b=function(A){let{children:e}=A,a=n(A,d);return t.createElement(t.Fragment,null,t.createElement(B,r({},a)),e,null)},p=["src","srcSet","loading","alt","shouldLoad"],Q=["fallback","sources","shouldLoad"],f=function(A){let{src:e,srcSet:a,loading:s,alt:i="",shouldLoad:l}=A,c=n(A,p);return t.createElement("img",r({},c,{decoding:"async",loading:s,src:l?e:void 0,"data-src":l?void 0:e,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},w=function(A){let{fallback:e,sources:a=[],shouldLoad:s=!0}=A,i=n(A,Q);const l=i.sizes||(null==e?void 0:e.sizes),c=t.createElement(f,r({},i,e,{sizes:l,shouldLoad:s}));return a.length?t.createElement("picture",null,a.map((A=>{let{media:e,srcSet:a,type:i}=A;return t.createElement("source",{key:e+"-"+i+"-"+a,type:i,media:e,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:l})})),c):c};var j;f.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},w.displayName="Picture",w.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const h=["fallback"],u=function(A){let{fallback:e}=A,a=n(A,h);return e?t.createElement(w,r({},a,{fallback:{src:e},"aria-hidden":!0,alt:""})):t.createElement("div",r({},a))};u.displayName="Placeholder",u.propTypes={fallback:s.string,sources:null==(j=w.propTypes)?void 0:j.sources,alt:function(A,e,a){return A[e]?new Error("Invalid prop `"+e+"` supplied to `"+a+"`. Validation failed."):null}};const m=function(A){return t.createElement(t.Fragment,null,t.createElement(w,r({},A)),t.createElement("noscript",null,t.createElement(w,r({},A,{shouldLoad:!0}))))};m.displayName="MainImage",m.propTypes=w.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],Y=["style","className"],x=A=>A.replace(/\n/g,""),D=function(A,e,a){for(var t=arguments.length,s=new Array(t>3?t-3:0),r=3;r<t;r++)s[r-3]=arguments[r];return A.alt||""===A.alt?i().string.apply(i(),[A,e,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:D},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],R=["style","className"],y=new Set;let S,I;const P=function(A){let{as:e="div",image:s,style:i,backgroundColor:c,className:g,class:E,onStartLoad:d,onLoad:B,onError:b}=A,p=n(A,k);const{width:Q,height:f,layout:w}=s,j=o(Q,f,w),{style:h,className:u}=j,m=n(j,R),N=(0,t.useRef)(),Y=(0,t.useMemo)((()=>JSON.stringify(s.images)),[s.images]);E&&(g=E);const x=function(A,e,a){let t="";return"fullWidth"===A&&(t='<div aria-hidden="true" style="padding-top: '+a/e*100+'%;"></div>'),"constrained"===A&&(t='<div style="max-width: '+e+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+e+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),t}(w,Q,f);return(0,t.useEffect)((()=>{S||(S=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((A=>{let{renderImageToString:e,swapPlaceholderImage:a}=A;return I=e,{renderImageToString:e,swapPlaceholderImage:a}})));const A=N.current.querySelector("[data-gatsby-image-ssr]");if(A&&l())return A.complete?(null==d||d({wasCached:!0}),null==B||B({wasCached:!0}),setTimeout((()=>{A.removeAttribute("data-gatsby-image-ssr")}),0)):(null==d||d({wasCached:!0}),A.addEventListener("load",(function e(){A.removeEventListener("load",e),null==B||B({wasCached:!0}),setTimeout((()=>{A.removeAttribute("data-gatsby-image-ssr")}),0)}))),void y.add(Y);if(I&&y.has(Y))return;let e,t;return S.then((A=>{let{renderImageToString:a,swapPlaceholderImage:n}=A;N.current&&(N.current.innerHTML=a(r({isLoading:!0,isLoaded:y.has(Y),image:s},p)),y.has(Y)||(e=requestAnimationFrame((()=>{N.current&&(t=n(N.current,Y,y,i,d,B,b))}))))})),()=>{e&&cancelAnimationFrame(e),t&&t()}}),[s]),(0,t.useLayoutEffect)((()=>{y.has(Y)&&I&&(N.current.innerHTML=I(r({isLoading:y.has(Y),isLoaded:y.has(Y),image:s},p)),null==d||d({wasCached:!0}),null==B||B({wasCached:!0}))}),[s]),(0,t.createElement)(e,r({},m,{style:r({},h,i,{backgroundColor:c}),className:u+(g?" "+g:""),ref:N,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},M=(0,t.memo)((function(A){return A.image?(0,t.createElement)(P,A):null}));M.propTypes=C,M.displayName="GatsbyImage";const F=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function G(A){return function(e){let{src:a,__imageData:s,__error:i}=e,l=n(e,F);return i&&console.warn(i),s?t.createElement(A,r({image:s},l)):(console.warn("Image not loaded",a),null)}}const T=G((function(A){let{as:e="div",className:a,class:s,style:i,image:l,loading:c="lazy",imgClassName:d,imgStyle:B,backgroundColor:p,objectFit:Q,objectPosition:f}=A,w=n(A,N);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),B=r({objectFit:Q,objectPosition:f,backgroundColor:p},B);const{width:j,height:h,layout:D,images:C,placeholder:k,backgroundColor:R}=l,y=o(j,h,D),{style:S,className:I}=y,P=n(y,Y),M={fallback:void 0,sources:[]};return C.fallback&&(M.fallback=r({},C.fallback,{srcSet:C.fallback.srcSet?x(C.fallback.srcSet):void 0})),C.sources&&(M.sources=C.sources.map((A=>r({},A,{srcSet:x(A.srcSet)})))),t.createElement(e,r({},P,{style:r({},S,i,{backgroundColor:p}),className:I+(a?" "+a:"")}),t.createElement(b,{layout:D,width:j,height:h},t.createElement(u,r({},E(k,!1,D,j,h,R,Q,f))),t.createElement(m,r({"data-gatsby-image-ssr":"",className:d},w,g("eager"===c,!1,M,c,B)))))})),L=function(A,e){for(var a=arguments.length,t=new Array(a>2?a-2:0),s=2;s<a;s++)t[s-2]=arguments[s];return"fullWidth"!==A.layout||"width"!==e&&"height"!==e||!A[e]?i().number.apply(i(),[A,e].concat(t)):new Error('"'+e+'" '+A[e]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),v={src:i().string.isRequired,alt:D,width:L,height:L,sizes:i().string,layout:A=>{if(void 0!==A.layout&&!O.has(A.layout))return new Error("Invalid value "+A.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};T.displayName="StaticImage",T.propTypes=v;const J=G(M);J.displayName="StaticImage",J.propTypes=v},282:function(A,e,a){a.d(e,{Z:function(){return r}});var t=a(1883),s=a(7294),i=a(8032);function r(){const{0:A,1:e}=(0,s.useState)([]),r=e=>{let a=!1;return A.forEach((A=>{null!=A&&A.includes(e)&&(a=!0)})),a};return(0,s.useEffect)((()=>{let A=[];const a=["BentonMechanical.jpg","FTSFlooring.jpg","JJAutoAndTruck.jpg","JMLMachining.jpg","JohnsonSons.jpg","LegacyBuxmont.jpg","MikesBnG.jpg","NicksDeli.jpg","Nissan.jpg","Paradigm.jpg","TheAugustineGroup.jpg","WarminsterFlag.jpg","WarminsterPioneersFBandCheer.jpg","WPDbenevolent.jpg"];for(let e=0;e<3;e++){console.log(a,a.length);let e=a.splice(Math.floor(Math.random()*a.length-1),1);A.push(e[0])}e(A)}),[]),s.createElement("footer",null,s.createElement("p",null,"Warminster Basketball Association"),s.createElement(t.rU,{activeClassName:"active",to:"/sponsors"},s.createElement("div",{className:"footer-module--sponsor--a58aa"},s.createElement(i.S,{style:r("BentonMechanical")?{display:"inline-block"}:{display:"none"},src:"../sponsors/BentonMechanical.jpg",alt:"Benton Mechanical",placeholder:"blurred",layout:"fixed",aspectRatio:193/92,width:75,__imageData:a(1958)}),s.createElement(i.S,{style:r("FTSFlooring")?{display:"inline-block"}:{display:"none"},src:"../sponsors/FTSFlooring.jpg",alt:"FTS Flooring",placeholder:"blurred",layout:"fixed",aspectRatio:118/73,width:75,__imageData:a(4696)}),s.createElement(i.S,{style:r("JJAutoAndTruck")?{display:"inline-block"}:{display:"none"},src:"../sponsors/JJAutoAndTruck.jpg",alt:"JJ Auto And Truck",placeholder:"blurred",layout:"fixed",aspectRatio:1,width:75,__imageData:a(7773)}),s.createElement(i.S,{style:r("JMLMachining")?{display:"inline-block"}:{display:"none"},src:"../sponsors/JMLMachining.jpg",alt:"JML Machining",placeholder:"blurred",layout:"fixed",aspectRatio:166/168,width:75,__imageData:a(5226)}),s.createElement(i.S,{style:r("JohnsonSons")?{display:"inline-block"}:{display:"none"},src:"../sponsors/JohnsonSons.jpg",alt:"Johnson Sons",placeholder:"blurred",layout:"fixed",aspectRatio:3.04,width:75,__imageData:a(5578)}),s.createElement(i.S,{style:r("LegacyBuxmont")?{display:"inline-block"}:{display:"none"},src:"../sponsors/LegacyBuxmont.jpg",alt:"Legacy Buxmont",placeholder:"blurred",layout:"fixed",aspectRatio:154/128,width:75,__imageData:a(8491)}),s.createElement(i.S,{style:r("MikesBnG")?{display:"inline-block"}:{display:"none"},src:"../sponsors/MikesBnG.jpg",alt:"Mikes Bar and Grill",placeholder:"blurred",layout:"fixed",aspectRatio:172/102,width:75,__imageData:a(7074)}),s.createElement(i.S,{style:r("NicksDeli")?{display:"inline-block"}:{display:"none"},src:"../sponsors/NicksDeli.jpg",alt:"Nick's Deli",placeholder:"blurred",layout:"fixed",aspectRatio:172/39,width:75,__imageData:a(5375)}),s.createElement(i.S,{style:r("Nissan")?{display:"inline-block"}:{display:"none"},src:"../sponsors/Nissan.jpg",alt:"Nissan",placeholder:"blurred",layout:"fixed",aspectRatio:118/73,width:75,__imageData:a(565)}),s.createElement(i.S,{style:r("JohParadigmnsonSons")?{display:"inline-block"}:{display:"none"},src:"../sponsors/Paradigm.jpg",alt:"Paradigm",placeholder:"blurred",layout:"fixed",aspectRatio:1,width:75,__imageData:a(5126)}),s.createElement(i.S,{style:r("TheAugustineGroup")?{display:"inline-block"}:{display:"none"},src:"../sponsors/TheAugustineGroup.jpg",alt:"The Augustine Group",placeholder:"blurred",layout:"fixed",aspectRatio:114/180,width:75,__imageData:a(3580)}),s.createElement(i.S,{style:r("WarminsterFlag")?{display:"inline-block"}:{display:"none"},src:"../sponsors/WarminsterFlag.jpg",alt:"Warminster Flag",placeholder:"blurred",layout:"fixed",aspectRatio:168/88,width:75,__imageData:a(4106)}),s.createElement(i.S,{style:r("WarminsterPioneersFBandCheer")?{display:"inline-block"}:{display:"none"},src:"../sponsors/WarminsterPioneersFBandCheer.jpg",alt:"Warminster Pioneers Football Band and Cheerleading",placeholder:"blurred",layout:"fixed",aspectRatio:140/172,width:75,__imageData:a(917)}),s.createElement(i.S,{style:r("WPDbenevolent")?{display:"inline-block"}:{display:"none"},src:"../sponsors/WPDbenevolent.jpg",alt:"WPD benevolent",placeholder:"blurred",layout:"fixed",aspectRatio:132/190,width:75,__imageData:a(5259)}))))}},8161:function(A,e,a){a.d(e,{Z:function(){return r}});var t=a(1883),s=a(7294),i=a(8032);function r(){const{0:A,1:e}=(0,s.useState)(!1);return s.createElement("nav",null,s.createElement(i.S,{className:"logo",src:"../images/wbaLogo.png",alt:"Warminster Basketball logo",placeholder:"blurred",layout:"fixed",width:200,aspectRatio:1,__imageData:a(1457)}),s.createElement("div",{className:"links "+(A?" active":"")},s.createElement(t.rU,{activeClassName:"active",to:"/announcements"},"Announcements"),s.createElement(t.rU,{activeClassName:"active",to:"/information"},"Information"),s.createElement(t.rU,{activeClassName:"active",to:"/registration"},"Registration"),s.createElement(t.rU,{activeClassName:"active",to:"/clearances"},"Clearances"),s.createElement(t.rU,{activeClassName:"active",to:"/schedules"},"Schedules")),s.createElement("div",{className:"hamburger "+(A?" active":""),onClick:()=>e(!A)},s.createElement("span",{className:"bar"}),s.createElement("span",{className:"bar"}),s.createElement("span",{className:"bar"})))}},5375:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAFABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHVBLYH/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQMAAhESFP/aAAgBAQABBQIPnRk1fsP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGq/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BiP/EABsQAAEEAwAAAAAAAAAAAAAAAAABIkFRMTKh/9oACAEBAAY/AtYsRsWY6f/EABoQAAICAwAAAAAAAAAAAAAAAAABESFBwdH/2gAIAQEAAT8hQ03KtPSFjkbCaH//2gAMAwEAAgADAAAAEIAv/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8QpT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxCEP//EABwQAAICAgMAAAAAAAAAAAAAAAERACExUWFx8f/aAAgBAQABPxDACKOT6Z24hBCFAC0JF1BPrUvM/9k="},"images":{"fallback":{"src":"/warminster-basketball/static/86097e7d8f3db6b420da2ba7370a1b1a/085af/NicksDeli.jpg","srcSet":"/warminster-basketball/static/86097e7d8f3db6b420da2ba7370a1b1a/085af/NicksDeli.jpg 75w,\\n/warminster-basketball/static/86097e7d8f3db6b420da2ba7370a1b1a/1e51f/NicksDeli.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/86097e7d8f3db6b420da2ba7370a1b1a/8f7b4/NicksDeli.webp 75w,\\n/warminster-basketball/static/86097e7d8f3db6b420da2ba7370a1b1a/20f6b/NicksDeli.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":17}')},3580:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAgABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBAgQD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAWOcx0vSpJCxvWjsUJf/xAAcEAACAwADAQAAAAAAAAAAAAABAwACEQQSFCL/2gAIAQEAAQUCd3JFMKyTXkuNGeq8Tbupyg2qeLt4dE0z6n//xAAYEQACAwAAAAAAAAAAAAAAAAABEBETIf/aAAgBAwEBPwG0jFC//8QAGREBAAIDAAAAAAAAAAAAAAAAAQIQAxEh/9oACAECAQE/ATHvtEkr/8QAIhAAAgEDAwUBAAAAAAAAAAAAAAERAhIxImGhAxAhQVGB/9oACAEBAAY/AovVFPLNHXc7mqJ2IsU/WeVS/wAE7bSHn0zXELtkzwZR/8QAHRAAAgIDAQEBAAAAAAAAAAAAAAERMSFhgVGR4f/aAAgBAQABPyENR6o9MReyjIWxMZpR4fsVGOlor4nAcxuz4hO2UQm4fBOiLbkfkP/aAAwDAQACAAMAAAAQ3wgw/8QAGREAAwADAAAAAAAAAAAAAAAAAAERECGx/9oACAEDAQE/EEjHC3Y0buP/xAAYEQEAAwEAAAAAAAAAAAAAAAABABARIf/aAAgBAgEBPxDBCZyAIV//xAAfEAEAAgICAgMAAAAAAAAAAAABABEhMUFRYYFxsdH/2gAIAQEAAT8QaaiFJlLq8aIuBDIDWR96e4thc1vyktdgaLZg+YW30CmjoSOiyUrfgnidvwG1+S90Neq4eiAAAAMAROEOKu7joAt0fczPqj//2Q=="},"images":{"fallback":{"src":"/warminster-basketball/static/84816e1292be8a263b3a9b708cde797c/a298e/TheAugustineGroup.jpg","srcSet":"/warminster-basketball/static/84816e1292be8a263b3a9b708cde797c/a298e/TheAugustineGroup.jpg 75w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/84816e1292be8a263b3a9b708cde797c/55805/TheAugustineGroup.webp 75w","type":"image/webp","sizes":"75px"}]},"width":75,"height":118}')},8491:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAARABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAEEAgMF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAHq1rOFTaQndgbAP//EABsQAAICAwEAAAAAAAAAAAAAAAECAxEAEBIh/9oACAEBAAEFAnlIcvKMRu1Y23RpT5v/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAcEAACAgIDAAAAAAAAAAAAAAABEQAxAiEQIDL/2gAIAQEABj8CQEayuo649mb2en//xAAeEAACAgICAwAAAAAAAAAAAAABEQAhMVEgQWFx8P/aAAgBAQABPyG5cb3KifIp96i1T4HqBJaOILDDpR92wrh//9oADAMBAAIAAwAAABA0ODz/xAAXEQEAAwAAAAAAAAAAAAAAAAABABAh/9oACAEDAQE/EHYX/8QAGREAAQUAAAAAAAAAAAAAAAAAAQAQESEx/9oACAECAQE/EBAtHX//xAAeEAEAAgIBBQAAAAAAAAAAAAABESEAUZEQMUFxgf/aAAgBAQABPxCmwLQ20Rf3DxAiVgJGmKIlc4ADGk4VpyiYFwVIdRDeH809vicgaSggT6x6/wD/2Q=="},"images":{"fallback":{"src":"/warminster-basketball/static/b02c2fc89adf03c57bbf607c1f93974a/4596d/LegacyBuxmont.jpg","srcSet":"/warminster-basketball/static/b02c2fc89adf03c57bbf607c1f93974a/4596d/LegacyBuxmont.jpg 75w,\\n/warminster-basketball/static/b02c2fc89adf03c57bbf607c1f93974a/c7f21/LegacyBuxmont.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/b02c2fc89adf03c57bbf607c1f93974a/e970b/LegacyBuxmont.webp 75w,\\n/warminster-basketball/static/b02c2fc89adf03c57bbf607c1f93974a/8d9ca/LegacyBuxmont.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":62}')},565:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB6U79LUIE/8QAGhABAAIDAQAAAAAAAAAAAAAAAQACAxETEv/aAAgBAQABBQLKY7vItDQcqzyE0T//xAAXEQADAQAAAAAAAAAAAAAAAAABEBFB/9oACAEDAQE/ATMX/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGxABAQABBQAAAAAAAAAAAAAAEQABAhAiMWL/2gAIAQEABj8CXDcdJ6Y2C6v/xAAbEAEAAgMBAQAAAAAAAAAAAAABADERIVFBYf/aAAgBAQABPyEAsbxbjghltCvkwAomddO3sNNSHJP/2gAMAwEAAgADAAAAEJcP/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8QBI//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxAWf//EABsQAQEAAwEBAQAAAAAAAAAAAAERACExUUFh/9oACAEBAAE/EKwXHRHn5lz/ACkD6g64XkAhu4ukekxEBBBe+5snDP/Z"},"images":{"fallback":{"src":"/warminster-basketball/static/8296bb86c119208e7e207b2f8aae2c0a/7ff94/Nissan.jpg","srcSet":"/warminster-basketball/static/8296bb86c119208e7e207b2f8aae2c0a/7ff94/Nissan.jpg 75w,\\n/warminster-basketball/static/8296bb86c119208e7e207b2f8aae2c0a/de0a9/Nissan.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/8296bb86c119208e7e207b2f8aae2c0a/bdb4e/Nissan.webp 75w,\\n/warminster-basketball/static/8296bb86c119208e7e207b2f8aae2c0a/e10d1/Nissan.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":46}')},7074:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIEAQb/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABTWlNegJxS//EABoQAAIDAQEAAAAAAAAAAAAAAAIDAAESBBH/2gAIAQEAAQUCsjO9GMSzQdV5bvycw0xX/8QAFREBAQAAAAAAAAAAAAAAAAAAEDH/2gAIAQMBAT8Bp//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAABAiExIv/aAAgBAQAGPwLWymzrRxSoxClI/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAITFBYVH/2gAIAQEAAT8huDnsSvjhxL8wAKiYCgzGsL+QNLLO+z//2gAMAwEAAgADAAAAEGgf/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERMUGR/9oACAEDAQE/EJaZwdn/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhMVFBcYGh4f/aAAgBAQABPxDk3JdD4/MRihAFDad+I4lrVVChwzNnloFmuPWGqim/TvKcUNIArWf/2Q=="},"images":{"fallback":{"src":"/warminster-basketball/static/6d495778af5afbd01aaeb073750ca35f/aac12/MikesBnG.jpg","srcSet":"/warminster-basketball/static/6d495778af5afbd01aaeb073750ca35f/aac12/MikesBnG.jpg 75w,\\n/warminster-basketball/static/6d495778af5afbd01aaeb073750ca35f/cc99d/MikesBnG.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/6d495778af5afbd01aaeb073750ca35f/738cc/MikesBnG.webp 75w,\\n/warminster-basketball/static/6d495778af5afbd01aaeb073750ca35f/38cb6/MikesBnG.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":44}')},4696:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEFA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAd1SRGLQf//EABsQAAICAwEAAAAAAAAAAAAAAAECAAMEEBEh/9oACAEBAAEFAsesEBK1VXC66Z7P/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHhAAAgEDBQAAAAAAAAAAAAAAAQIRAAMhEBIxQmH/2gAIAQEABj8C3MiwZzNXuuSARUBWb22ca81//8QAGxAAAwEBAAMAAAAAAAAAAAAAAAERMSFBYYH/2gAIAQEAAT8hUePLevsweOltCUWFBOumitLT2F8I+H//2gAMAwEAAgADAAAAEHDP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBABAAICAwEAAAAAAAAAAAAAARExACFBUXGx/9oACAEBAAE/EJxQCYlQabq83COIs+YcxMuCnGntBw094Rmx4a3iSpt4YFYLgEfM/9k="},"images":{"fallback":{"src":"/warminster-basketball/static/7aea1fc7e7acdc14be9f9bd64ea19ba5/7ff94/FTSFlooring.jpg","srcSet":"/warminster-basketball/static/7aea1fc7e7acdc14be9f9bd64ea19ba5/7ff94/FTSFlooring.jpg 75w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/7aea1fc7e7acdc14be9f9bd64ea19ba5/bdb4e/FTSFlooring.webp 75w","type":"image/webp","sizes":"75px"}]},"width":75,"height":46}')},5226:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAUDAQT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHXxdzLyULE4LAP/8QAHBAAAgIDAQEAAAAAAAAAAAAAAgMBBAASExQj/9oACAEBAAEFArFgt9Hqyu7qt3zb2jFKjV6xYsay/SMQI//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABwQAAIDAQADAAAAAAAAAAAAAAECABExEgMUIv/aAAgBAQAGPwIr4iV42D6wk7Om5Bjq7Ek7Uvp5frlrw3CDGSrHNwAYJ//EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQVFh/9oACAEBAAE/IWsAOzmWLUBBw1tzVLDgz2D7FnU0FafY5oKtKZBR805g2IaBe4IVBRP/2gAMAwEAAgADAAAAEMMPPP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8QH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8QH//EABwQAQEAAgMBAQAAAAAAAAAAAAERACExQVFhgf/aAAgBAQABPxBs4cwbBoRvNxJWZyhqOxMMXIuqHtxCTwxjUhPnzKMFkUsUjz+5JNxS0NS+3JwtqREfZh0bo9JnORDAFsDjP//Z"},"images":{"fallback":{"src":"/warminster-basketball/static/797a48118eb9c7784c16080734e5a2d3/9a5f6/JMLMachining.jpg","srcSet":"/warminster-basketball/static/797a48118eb9c7784c16080734e5a2d3/9a5f6/JMLMachining.jpg 75w,\\n/warminster-basketball/static/797a48118eb9c7784c16080734e5a2d3/ab52f/JMLMachining.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/797a48118eb9c7784c16080734e5a2d3/e5dd0/JMLMachining.webp 75w,\\n/warminster-basketball/static/797a48118eb9c7784c16080734e5a2d3/fd6c4/JMLMachining.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":76}')},1457:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR42sVUXUiTYRSe+2WbNnQkLhVGiTO0XQx0DEFTBJc6ZU5RDO1HxHlhOlATdNoQS70QbWoYCCMURRKXCjEwZg2iQOrCi0JI0Isi8qYgFLd9p+ddE8wcZTcdeDjn/Xv2nPOdHR7v7y0qjEhnp7LQg9jYWAVca1RUlFutVj+Ljo5+hLW5t7eXfxpSdpmXl5d3QaVSvUFI6enpHECIOYFAQAqFwoVY9EdFR31+fv5qfHw8geCgrKwsIBaLg9gPJCQk+FNTUxn57T8pUwKqcKwrLCz0QwklJiZSaWkpIyCZTEYlJSVBpM7WbysrKwWR1N0HHgJ3RSLROPyY0WjcQ90oOzubtFptiLCiooIyMjI4FicnJ2/bbDbpSWnKUPQN+HlAQkRsX5uUlPSlqqqKUEsuLi6OCgoKSKfTMWK/wWCg4uLilePKQnL5fP5N1OkKwqcg3oK3K5XKc/B3zGYztbS0BJA+l5mZGdRoNFx5eTnl5OTsSySSy7+wHeYvlUpbcVgP4l6gGqTLwHscedPS0rZwj+rq6jgGk8nEUmVnxqMdwTu2uAXcA8kDfAS1Xq+/iPpdhWpLSkpKfW1trTUmJqYId8oAA1pJdlJzC+bm5nJ2dnZudHZ2eu12+0ZPT8/L4eHh1wMDA9tDQ0MHIyMjr/r6+p50dXU9XlxctPt8vmsej0d/YlNvbm6enZyc/OpwOAhEQZByDQ0NxOpTU1PDFRUVkcViocHBQc7pdBJIuba2NsIP7U9MTGgYR5j4p+FLStrb2z9kZWWR1WoNNjU1+Zubm4O47B8bG2NrgrpAf39/wOVyBUZHR/2MEG2y5/V61b8RMoNC9/j4+Kfp6Wnf/Py8HyC3201LS0uE1DiUhGZnZ7m1tTXCnS1k825hYeEb3l06kXB9fV0BpdLd3d0zU1NTzsbGxo94tNzR0fEcqr93d3evohwvoOzzyspKMXszMzNz/ngzRxwGsIkwHEA/4AGqAVYz6WlGVagfhUKhDQPAhF5cksvlWvwFr2Ovg53l5uYKTz37woNBHlZz2GvifxmmkaY0n/c/7Ad/lTicVAD8WQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/warminster-basketball/static/fa096448dc4f47efe9fc1593a4c1fa88/5aead/wbaLogo.png","srcSet":"/warminster-basketball/static/fa096448dc4f47efe9fc1593a4c1fa88/5aead/wbaLogo.png 200w,\\n/warminster-basketball/static/fa096448dc4f47efe9fc1593a4c1fa88/d6138/wbaLogo.png 400w","sizes":"200px"},"sources":[{"srcSet":"/warminster-basketball/static/fa096448dc4f47efe9fc1593a4c1fa88/2e34e/wbaLogo.webp 200w,\\n/warminster-basketball/static/fa096448dc4f47efe9fc1593a4c1fa88/416c3/wbaLogo.webp 400w","type":"image/webp","sizes":"200px"}]},"width":200,"height":200}')},4106:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdRZ1NEiD//EABoQAQACAwEAAAAAAAAAAAAAAAEAAgMhMkL/2gAIAQEAAQUCbC23DIQ684+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAAUFAAAAAAAAAAAAAAAAAAIQIZEBMUNhgf/aAAgBAQAGPwLJAo520LGhOp//xAAbEAEAAgIDAAAAAAAAAAAAAAABABEhMRBxsf/aAAgBAQABPyFA2enHTBjQ9OJsQ22Xc//aAAwDAQACAAMAAAAQQM//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxCn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHRABAQACAgMBAAAAAAAAAAAAAREAITGhQWGBsf/aAAgBAQABPxAy26kHzXeC82wolWjXIJeEqVzlPFTpwdre3OfvB6M//9k="},"images":{"fallback":{"src":"/warminster-basketball/static/3aaa4598b7f3d6d0990359816da6dab8/cfd9b/WarminsterFlag.jpg","srcSet":"/warminster-basketball/static/3aaa4598b7f3d6d0990359816da6dab8/cfd9b/WarminsterFlag.jpg 75w,\\n/warminster-basketball/static/3aaa4598b7f3d6d0990359816da6dab8/4c276/WarminsterFlag.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/3aaa4598b7f3d6d0990359816da6dab8/b83f7/WarminsterFlag.webp 75w,\\n/warminster-basketball/static/3aaa4598b7f3d6d0990359816da6dab8/5cc98/WarminsterFlag.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":39}')},5578:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB2pCwf//EABgQAAIDAAAAAAAAAAAAAAAAAAABAhES/9oACAEBAAEFAnFlMyf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAADAAAAAAAAAAAAAAAAAAAAEDH/2gAIAQEABj8CVP/EABsQAQABBQEAAAAAAAAAAAAAAAEAETFhgaHx/9oACAEBAAE/IQWV0Ryclfkn/9oADAMBAAIAAwAAABAAD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABsQAQACAgMAAAAAAAAAAAAAAAEAETFhUcHw/9oACAEBAAE/ECL0gHUEjdC3EHI9an//2Q=="},"images":{"fallback":{"src":"/warminster-basketball/static/5b45fd5e90df6af160f2c93b72952c9c/152dd/JohnsonSons.jpg","srcSet":"/warminster-basketball/static/5b45fd5e90df6af160f2c93b72952c9c/152dd/JohnsonSons.jpg 75w,\\n/warminster-basketball/static/5b45fd5e90df6af160f2c93b72952c9c/6ceef/JohnsonSons.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/5b45fd5e90df6af160f2c93b72952c9c/57273/JohnsonSons.webp 75w,\\n/warminster-basketball/static/5b45fd5e90df6af160f2c93b72952c9c/d39b4/JohnsonSons.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":25}')},917:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAUBAgME/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAHu497pZlRS7OIYzFYf/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAAwQSEyFB/9oACAEBAAEFArWDPiu/LMukM9YFcHQu1dmVDFddfYJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAIRAAAQQBAwUAAAAAAAAAAAAAAQACEBESISKRMUFRYeH/2gAIAQEABj8CcHPxDfdLGzR7GMsgCt7hZ8R8QOvC68wI/8QAIBABAAMAAQMFAAAAAAAAAAAAAQARIRAxQVFhcaGxwf/aAAgBAQABPyFSlKw0gtILuvOBlyOj3qC+ZwcGb42nixEvmaixk9FsPo/sentOH//aAAwDAQACAAMAAAAQ1889/8QAGBEAAgMAAAAAAAAAAAAAAAAAABARIUH/2gAIAQMBAT8Q23J//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAIBABAQABAwQDAAAAAAAAAAAAAREAITFREEFhcYGR8P/aAAgBAQABPxBcrndEGrvyQwrVRRFb12ekSxk1vu07TCBf6bQJBMcYacYSoKVBvm+8IiQAgK87/WPIMJCCc69Ofpc5sfef/9k="},"images":{"fallback":{"src":"/warminster-basketball/static/b3ab29808aa42dd4b4a7943bbe6874d9/220e6/WarminsterPioneersFBandCheer.jpg","srcSet":"/warminster-basketball/static/b3ab29808aa42dd4b4a7943bbe6874d9/220e6/WarminsterPioneersFBandCheer.jpg 75w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/b3ab29808aa42dd4b4a7943bbe6874d9/01c13/WarminsterPioneersFBandCheer.webp 75w","type":"image/webp","sizes":"75px"}]},"width":75,"height":92}')},1958:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHsZnYqQD//xAAbEAACAQUAAAAAAAAAAAAAAAAAAkEBAxITIf/aAAgBAQABBQLYXnfKj8iD/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAQACAwAAAAAAAAAAAAAAAAEAAiAhMf/aAAgBAQAGPwLkCpNmH//EABoQAAMAAwEAAAAAAAAAAAAAAAABESExQVH/2gAIAQEAAT8h6zwXsS3V6NitK+mV9DbP/9oADAMBAAIAAwAAABC0z//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxBYjP/EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxBNEn//xAAeEAABAwQDAAAAAAAAAAAAAAABABEhMUFhkXGh4f/aAAgBAQABPxAFnt8JysPXAgYB62oAGB17jCgSvfCeCTQXX//Z"},"images":{"fallback":{"src":"/warminster-basketball/static/2e70810fb339ad12de0661af09f56b38/f5e74/BentonMechanical.jpg","srcSet":"/warminster-basketball/static/2e70810fb339ad12de0661af09f56b38/f5e74/BentonMechanical.jpg 75w,\\n/warminster-basketball/static/2e70810fb339ad12de0661af09f56b38/caff5/BentonMechanical.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/2e70810fb339ad12de0661af09f56b38/179a6/BentonMechanical.webp 75w,\\n/warminster-basketball/static/2e70810fb339ad12de0661af09f56b38/78240/BentonMechanical.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":36}')},7773:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAEDAv/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgT/2gAMAwEAAhADEAAAAVykas0J80KwBH//xAAaEAEAAgMBAAAAAAAAAAAAAAABABECITEi/9oACAEBAAEFAhqXp70x8xdjFlz/xAAZEQACAwEAAAAAAAAAAAAAAAABAgAQEVH/2gAIAQMBAT8BLNNPL//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABgQAAIDAAAAAAAAAAAAAAAAAAAxARAg/9oACAEBAAY/AhTaz//EABwQAQEBAAEFAAAAAAAAAAAAAAEAESExUXGR0f/aAAgBAQABPyEB8ncucM6HqSuV53LZveWWVt//2gAMAwEAAgADAAAAEJQwPv/EABkRAAMAAwAAAAAAAAAAAAAAAAABIRFRcf/aAAgBAwEBPxDTvBPVGYNn/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQEf/aAAgBAgEBPxACYX//xAAbEAEBAQADAQEAAAAAAAAAAAABEQAhMUGxcf/aAAgBAQABPxBZwqFQWfuUmIlGX5oocj6YEFKNFfT3LLfACDWBiqzFO9D3mdt//9k="},"images":{"fallback":{"src":"/warminster-basketball/static/d8123138d5abf19157874409845db2fc/91a6d/JJAutoAndTruck.jpg","srcSet":"/warminster-basketball/static/d8123138d5abf19157874409845db2fc/91a6d/JJAutoAndTruck.jpg 75w,\\n/warminster-basketball/static/d8123138d5abf19157874409845db2fc/96deb/JJAutoAndTruck.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/d8123138d5abf19157874409845db2fc/18188/JJAutoAndTruck.webp 75w,\\n/warminster-basketball/static/d8123138d5abf19157874409845db2fc/c65bc/JJAutoAndTruck.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":75}')},5259:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAdABQDASIAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAAAAMEAQIF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAXJdI3cNgky0ZRwkn//EABsQAAIDAQEBAAAAAAAAAAAAAAIDAAESBBMh/9oACAEBAAEFAnNZbdNGc52xXSOHEXxQYUZrYCQAS9hmbmLuZKf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAeEAACAQQDAQAAAAAAAAAAAAAAAQIREjGhEDJBM//aAAgBAQAGPwJxjK1I+rE3kv8AJFKZIxKP0ulK5rHGdHbR30f/xAAfEAACAgIBBQAAAAAAAAAAAAABEQAhQVGBEDFhcaH/2gAIAQEAAT8hfICqG8CczYWFZivC+wxJjJATdAF+46ZXZWZ4WAE0s8RNL0ACYf/aAAwDAQACAAMAAAAQGObA/8QAFhEBAQEAAAAAAAAAAAAAAAAAIREg/9oACAEDAQE/ECOP/8QAGREAAgMBAAAAAAAAAAAAAAAAAAERITFh/9oACAECAQE/ELqB6cIR/8QAIhABAAICAQMFAQAAAAAAAAAAAREhADFRQWGBcZGhscHh/9oACAEBAAE/EKDpDZovnrhIx3aTzM5DGyREEGJxoNoLwCH8ffIetwSvKeusZl+0W/Li5pIgpB1O5ONj6FQLib634yUFE6TDMlJtgcYKVFUUp5/mKkUbBLHbP//Z"},"images":{"fallback":{"src":"/warminster-basketball/static/28a2e366bf9faf005ce66c0d5fb7886a/c4fe4/WPDbenevolent.jpg","srcSet":"/warminster-basketball/static/28a2e366bf9faf005ce66c0d5fb7886a/c4fe4/WPDbenevolent.jpg 75w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/28a2e366bf9faf005ce66c0d5fb7886a/0d7e7/WPDbenevolent.webp 75w","type":"image/webp","sizes":"75px"}]},"width":75,"height":108}')},5126:function(A){A.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB4FuaagAAf//EABkQAAEFAAAAAAAAAAAAAAAAAAEAAhARIP/aAAgBAQABBQKQi6xj/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAFBABAAAAAAAAAAAAAAAAAAAAMP/aAAgBAQAGPwIf/8QAGhABAAIDAQAAAAAAAAAAAAAAAQARECAhMf/aAAgBAQABPyGInomFTc5la//aAAwDAQACAAMAAAAQ3999/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPxAf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPxAf/8QAHBABAQABBQEAAAAAAAAAAAAAAREAECAhMVFx/9oACAEBAAE/EMj8x6TQjQs6jMG1fRm3/9k="},"images":{"fallback":{"src":"/warminster-basketball/static/916bb573c822944d78941b5f31aaaddc/91a6d/Paradigm.jpg","srcSet":"/warminster-basketball/static/916bb573c822944d78941b5f31aaaddc/91a6d/Paradigm.jpg 75w,\\n/warminster-basketball/static/916bb573c822944d78941b5f31aaaddc/96deb/Paradigm.jpg 150w","sizes":"75px"},"sources":[{"srcSet":"/warminster-basketball/static/916bb573c822944d78941b5f31aaaddc/18188/Paradigm.webp 75w,\\n/warminster-basketball/static/916bb573c822944d78941b5f31aaaddc/c65bc/Paradigm.webp 150w","type":"image/webp","sizes":"75px"}]},"width":75,"height":75}')}}]);
//# sourceMappingURL=2d5f3dc68b5b52215824be4ecdd50b3e8d0e85bf-e9440bd31835181fd7ee.js.map