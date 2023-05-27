(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{2576:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cases",function(){return r(4926)}])},5180:function(e,n,r){"use strict";r.d(n,{Z:function(){return y}});var s=r(5893),a=(r(7294),r(3838)),i=r(6452),[t,c]=(0,i.eC)("Card"),o=r(5432),d=r(5059),l=r(3179),u=r(4662),f=r(5425),m=(0,d.G)((function(e,n){const{className:r,children:a,direction:i="column",justify:c,align:d,...m}=(0,l.Lr)(e),h=(0,u.jC)("Card",e);return(0,s.jsx)(f.m.div,{ref:n,className:(0,o.cx)("chakra-card",r),__css:{display:"flex",flexDirection:i,justifyContent:c,alignItems:d,position:"relative",minWidth:0,wordWrap:"break-word",...h.container},...m,children:(0,s.jsx)(t,{value:h,children:a})})})),h=(0,d.G)((function(e,n){const{className:r,...a}=e,i=c();return(0,s.jsx)(f.m.div,{ref:n,className:(0,o.cx)("chakra-card__body",r),__css:i.body,...a})})),p=r(1941),x=r(6684),j=r(4418),b=r(9564),g=(0,d.G)((function(e,n){const{className:r,justify:a,...i}=e,t=c();return(0,s.jsx)(f.m.div,{ref:n,className:(0,o.cx)("chakra-card__footer",r),__css:{display:"flex",justifyContent:a,...t.footer},...i})})),v=r(3100),k=(0,f.m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});k.displayName="Spacer";var y=function(e){var n=e.title,r=e.desc,i=e.date,t=e.imagePath,c=e.imageAlt,o=e.link;return(0,s.jsxs)(a.r,{href:o,children:[(0,s.jsxs)(m,{maxW:"sm",m:2,children:[(0,s.jsxs)(h,{children:[(0,s.jsx)(p.E,{src:t,alt:c,borderRadius:"lg"}),(0,s.jsxs)(x.K,{mt:"6",spacing:"3",children:[(0,s.jsx)(j.X,{size:"md",children:n}),(0,s.jsx)(b.x,{noOfLines:[1,2,3],children:r})]})]}),(0,s.jsx)(g,{children:(0,s.jsx)(v.xu,{as:"span",color:"gray.600",fontSize:"sm",children:i})})]}),(0,s.jsx)(k,{})]})}},4926:function(e,n,r){"use strict";r.r(n);var s=r(1799),a=r(5893),i=r(9008),t=r.n(i),c=(r(7294),r(2022)),o=r(6979),d=r(1669),l=r(7345),u=r(9489),f=r(6803),m=r(4418),h=r(204),p=r(63),x=r(1127),j=r(6151),b=r(5180),g=[{title:"Updating PDFTron's Flagship Product UI",desc:"Updating PDFTron's flagship product's UI.",imagePath:"/cases/webviewer.png",imageAlt:"WebViewer screenshot",readOnMedium:!1,link:"/cases/updating-webviewer-ui"},{title:"Adding a new product to PDFTron",desc:"Walking through how I discovered a new product opportunity for video annotation.",imagePath:"/cases/video.png",imageAlt:"WebViewer Video screenshot",readOnMedium:!0,link:"/cases/introducing-webviewer-video"}];n.default=function(){(0,c.S)({base:"outline",md:"solid"});return(0,a.jsxs)(p.Z,{children:[(0,a.jsxs)(t(),{children:[(0,a.jsx)("title",{children:"Case Studies"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("link",{rel:"canonical",href:"https://andreysafonov.com/cases"}),(0,a.jsx)("meta",{name:"Description",content:"Read Andrey's case studies about product management."})]}),(0,a.jsx)(x.Z,{}),(0,a.jsx)(o.W,{maxW:"7xl",p:(0,c.S)({base:"3",md:"12"}),children:(0,a.jsxs)(d.g,{paddingTop:"40px",spacing:"2",alignItems:"flex-start",children:[(0,a.jsxs)(l.a,{mb:4,children:[(0,a.jsx)(u.g,{children:(0,a.jsx)(f.A,{href:"/",children:"Home"})}),(0,a.jsx)(u.g,{children:(0,a.jsx)(f.A,{href:"#",children:"Case Studies"})})]}),(0,a.jsx)(m.X,{as:"h1",children:"Case Studies"}),(0,a.jsx)(h.k,{direction:(0,c.S)({base:"column",md:"row"}),children:g.map((function(e){return(0,a.jsx)(b.Z,(0,s.Z)({},e))}))})]})}),(0,a.jsx)(j.Z,{})]})}},2022:function(e,n,r){"use strict";r.d(n,{S:function(){return d}});var s=r(3951);var a=r(1607),i=r(7294);var t=r(5119),c=r(5432);function o(e){var n,r;const s=(0,c.Kn)(e)?e:{fallback:null!=e?e:"base"},o=(0,t.F)().__breakpoints.details.map((({minMaxQuery:e,breakpoint:n})=>({breakpoint:n,query:e.replace("@media screen and ","")}))),d=o.map((e=>e.breakpoint===s.fallback)),l=function(e,n={}){const{ssr:r=!0,fallback:s}=n,{getWindow:t}=(0,a.O)(),c=Array.isArray(e)?e:[e];let o=Array.isArray(s)?s:[s];o=o.filter((e=>null!=e));const[d,l]=(0,i.useState)((()=>c.map(((e,n)=>({media:e,matches:r?!!o[n]:t().matchMedia(e).matches})))));return(0,i.useEffect)((()=>{const e=t();l(c.map((n=>({media:n,matches:e.matchMedia(n).matches}))));const n=c.map((n=>e.matchMedia(n))),r=e=>{l((n=>n.slice().map((n=>n.media===e.media?{...n,matches:e.matches}:n))))};return n.forEach((e=>{"function"===typeof e.addListener?e.addListener(r):e.addEventListener("change",r)})),()=>{n.forEach((e=>{"function"===typeof e.removeListener?e.removeListener(r):e.removeEventListener("change",r)}))}}),[t]),d.map((e=>e.matches))}(o.map((e=>e.query)),{fallback:d,ssr:s.ssr});return null!=(r=null==(n=o[l.findIndex((e=>1==e))])?void 0:n.breakpoint)?r:s.fallback}function d(e,n){var r;const a=o((0,c.Kn)(n)?n:{fallback:null!=n?n:"base"}),i=(0,t.F)();if(!a)return;const d=Array.from((null==(r=i.__breakpoints)?void 0:r.keys)||[]);return function(e,n,r=s.AV){let a=Object.keys(e).indexOf(n);if(-1!==a)return e[n];let i=r.indexOf(n);for(;i>=0;){const n=r[i];if(e.hasOwnProperty(n)){a=i;break}i-=1}if(-1!==a)return e[r[a]]}(Array.isArray(e)?Object.fromEntries(Object.entries((0,s.Yq)(e,d)).map((([e,n])=>[e,n]))):e,a,d)}}},function(e){e.O(0,[489,785,774,888,179],(function(){return n=2576,e(e.s=n);var n}));var n=e.O();_N_E=n}]);