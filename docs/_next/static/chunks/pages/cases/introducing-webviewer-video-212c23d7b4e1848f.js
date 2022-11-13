(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{1739:function(e,r,n){"use strict";n.d(r,{At:function(){return m},aG:function(){return g},gN:function(){return p}});var i=n(1604),t=n(4592),a=n(6450),s=n(7294);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function l(e,r){if(null==e)return{};var n,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],r.indexOf(n)>=0||(t[n]=e[n]);return t}var c=["spacing"],d=["isCurrentPage","as","className","href"],f=["isCurrentPage","separator","isLastChild","spacing","children","className"],u=["children","spacing","separator","className"],h=(0,i.Gp)((function(e,r){var n=e.spacing,t=l(e,c),a=o({mx:n},(0,i.yK)().separator);return s.createElement(i.m$.span,o({ref:r,role:"presentation"},t,{__css:a}))}));t.Ts&&(h.displayName="BreadcrumbSeparator");var m=(0,i.Gp)((function(e,r){var n=e.isCurrentPage,a=e.as,c=e.className,f=e.href,u=l(e,d),h=(0,i.yK)(),m=o({ref:r,as:a,className:(0,t.cx)("chakra-breadcrumb__link",c)},u);return n?s.createElement(i.m$.span,o({"aria-current":"page",__css:h.link},m)):s.createElement(i.m$.a,o({__css:h.link,href:f},m))}));t.Ts&&(m.displayName="BreadcrumbLink");var p=(0,i.Gp)((function(e,r){var n=e.isCurrentPage,c=e.separator,d=e.isLastChild,u=e.spacing,p=e.children,g=e.className,x=l(e,f),b=(0,a.WR)(p).map((function(e){return e.type===m?s.cloneElement(e,{isCurrentPage:n}):e.type===h?s.cloneElement(e,{spacing:u,children:e.props.children||c}):e})),j=o({display:"inline-flex",alignItems:"center"},(0,i.yK)().item),v=(0,t.cx)("chakra-breadcrumb__list-item",g);return s.createElement(i.m$.li,o({ref:r,className:v},x,{__css:j}),b,!d&&s.createElement(h,{spacing:u},c))}));t.Ts&&(p.displayName="BreadcrumbItem");var g=(0,i.Gp)((function(e,r){var n=(0,i.jC)("Breadcrumb",e),c=(0,i.Lr)(e),d=c.children,f=c.spacing,h=void 0===f?"0.5rem":f,m=c.separator,p=void 0===m?"/":m,g=c.className,x=l(c,u),b=(0,a.WR)(d),j=b.length,v=b.map((function(e,r){return s.cloneElement(e,{separator:p,spacing:h,isLastChild:j===r+1})})),w=(0,t.cx)("chakra-breadcrumb",g);return s.createElement(i.m$.nav,o({ref:r,"aria-label":"breadcrumb",className:w,__css:n.container},x),s.createElement(i.Fo,{value:n},s.createElement(i.m$.ol,{className:"chakra-breadcrumb__list"},v)))}));t.Ts&&(g.displayName="Breadcrumb")},4651:function(e,r,n){"use strict";n.d(r,{Ee:function(){return h},d9:function(){return c}});var i=n(1604),t=n(4592),a=n(7294),s=n(4697);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function l(e,r){if(null==e)return{};var n,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],r.indexOf(n)>=0||(t[n]=e[n]);return t}function c(e){var r=e.loading,n=e.src,i=e.srcSet,t=e.onLoad,o=e.onError,l=e.crossOrigin,c=e.sizes,d=e.ignoreFallback,f=(0,a.useState)("pending"),u=f[0],h=f[1];(0,a.useEffect)((function(){h(n?"loading":"pending")}),[n]);var m=(0,a.useRef)(),p=(0,a.useCallback)((function(){if(n){g();var e=new Image;e.src=n,l&&(e.crossOrigin=l),i&&(e.srcset=i),c&&(e.sizes=c),r&&(e.loading=r),e.onload=function(e){g(),h("loaded"),null==t||t(e)},e.onerror=function(e){g(),h("failed"),null==o||o(e)},m.current=e}}),[n,l,i,c,t,o,r]),g=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,s.a)((function(){if(!d)return"loading"===u&&p(),function(){g()}}),[u,p,d]),d?"loaded":u}var d=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],u=a.forwardRef((function(e,r){var n=e.htmlWidth,i=e.htmlHeight,t=e.alt,s=l(e,d);return a.createElement("img",o({width:n,height:i,ref:r,alt:t},s))})),h=(0,i.Gp)((function(e,r){var n=e.fallbackSrc,s=e.fallback,d=e.src,h=e.srcSet,m=e.align,p=e.fit,g=e.loading,x=e.ignoreFallback,b=e.crossOrigin,j=l(e,f),v=null!=g||x||void 0===n&&void 0===s,w=c(o({},e,{ignoreFallback:v})),y=o({ref:r,objectFit:p,objectPosition:m},v?j:(0,t.CE)(j,["onError","onLoad"]));return"loaded"!==w?s||a.createElement(i.m$.img,o({as:u,className:"chakra-image__placeholder",src:n},y)):a.createElement(i.m$.img,o({as:u,src:d,srcSet:h,crossOrigin:b,loading:g,className:"chakra-image"},y))}));t.Ts&&(h.displayName="Image")},2979:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cases/introducing-webviewer-video",function(){return n(3811)}])},6675:function(e,r,n){"use strict";n.d(r,{Z:function(){return f}});var i=n(5893),t=n(8527),a=n(949),s=n(6094),o=n(5993),l=n(771),c=n(6314),d=function(e){var r=e.children,n=(e.label,e.href);return(0,i.jsx)(t.rU,{href:n,children:r})};function f(){return(0,i.jsx)(t.xu,{bg:(0,a.ff)("gray.50","gray.900"),color:(0,a.ff)("gray.700","gray.200"),width:"100%",children:(0,i.jsxs)(t.W2,{as:t.Kq,maxW:"6xl",py:{base:4,md:8},direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"left",md:"center"},children:[(0,i.jsx)(t.Kq,{direction:"column",p:2,children:(0,i.jsx)(t.rU,{href:"/",children:(0,i.jsx)(t.xv,{children:"Andrey Safonov"})})}),(0,i.jsx)(t.Kq,{direction:"column",spacing:6,p:2,children:(0,i.jsx)(t.rU,{href:"/blog",children:(0,i.jsx)(t.X6,{size:"xs",children:"Blog"})})}),(0,i.jsxs)(t.Kq,{direction:"row",spacing:8,p:2,children:[(0,i.jsx)(d,{label:"LinkedIn",href:"https://www.linkedin.com/in/andreysaf/",children:(0,i.jsx)(s.n,{color:(0,a.ff)("#2d3848","white"),size:"medium"})}),(0,i.jsx)(d,{label:"GitHub",href:"https://github.com/andreysaf",children:(0,i.jsx)(o.E,{color:(0,a.ff)("#2d3848","white"),size:"medium"})}),(0,i.jsx)(d,{label:"Medium",href:"https://andreysaf.medium.com/",children:(0,i.jsx)(l.V,{color:(0,a.ff)("#2d3848","white"),size:"medium"})}),(0,i.jsx)(d,{label:"YouTube",href:"https://www.youtube.com/c/PDFTronSDK",children:(0,i.jsx)(c.h,{color:(0,a.ff)("#2d3848","white"),size:"medium"})})]})]})})}},2548:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var i=n(5893),t=n(7294),a=n(542),s=function(e){return(0,t.useEffect)((function(){window.GA_INITIALIZED||(a.ZP.initialize("UA-133668278-1"),window.GA_INITIALIZED=!0),a.ZP.set({page:window.location.pathname}),a.ZP.pageview(window.location.pathname)})),(0,i.jsx)("div",{children:e.children})}},2264:function(e,r,n){"use strict";n.d(r,{Z:function(){return m}});var i=n(5893),t=n(7375),a=n(8527),s=n(949),o=n(5113),l=n(3084),c=n(4770),d=n(894),f=n(9876);function u(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(r){u(e,r,n[r])}))}return e}function m(){var e=(0,t.qY)(),r=e.isOpen,n=e.onToggle;return(0,i.jsxs)(a.xu,{children:[(0,i.jsxs)(a.kC,{bg:(0,s.ff)("white","gray.800"),color:(0,s.ff)("gray.600","white"),minH:"60px",py:{base:2},px:{base:4},borderBottom:1,borderStyle:"solid",borderColor:(0,s.ff)("gray.200","gray.900"),align:"center",children:[(0,i.jsx)(a.kC,{flex:{base:1,md:"auto"},ml:{base:-2},display:{base:"flex",md:"none"},children:(0,i.jsx)(o.hU,{onClick:n,icon:r?(0,i.jsx)(f.Tw,{w:3,h:3}):(0,i.jsx)(f.Uq,{w:5,h:5}),variant:"ghost","aria-label":"Toggle Navigation"})}),(0,i.jsx)(a.kC,{flex:{base:1},justify:{base:"center",md:"start"},children:(0,i.jsx)(a.kC,{display:{base:"none",md:"flex"},children:(0,i.jsx)(p,{})})}),(0,i.jsx)(a.Kq,{flex:{base:1,md:0},justify:"flex-end",direction:"row",spacing:6,children:(0,i.jsx)(a.rU,{href:"https://www.linkedin.com/in/andrey-safonov1/",children:(0,i.jsx)(o.zx,{display:{base:"none",md:"inline-flex"},fontSize:"sm",fontWeight:600,color:"white",bg:"green.400",href:"https://www.linkedin.com/in/andrey-safonov1/",_hover:{bg:"green.300"},children:"Get in touch"})})})]}),(0,i.jsx)(l.UO,{in:r,animateOpacity:!0,children:(0,i.jsx)(x,{})})]})}var p=function(){var e,r=(0,s.ff)("gray.600","gray.200"),n=(0,s.ff)("gray.800","white"),t=(0,s.ff)("white","gray.800");return(0,i.jsx)(a.Kq,{direction:"row",spacing:4,children:j.map((function(s){return(0,i.jsx)(a.xu,{children:(0,i.jsxs)(c.J2,{trigger:"hover",placement:"bottom-start",children:[(0,i.jsx)(c.xo,{children:(0,i.jsx)(a.rU,{p:2,href:null!==(e=s.href)&&void 0!==e?e:"#",fontSize:"sm",fontWeight:500,color:r,_hover:{textDecoration:"none",color:n},children:s.label})}),s.children&&(0,i.jsx)(c.yk,{border:0,boxShadow:"xl",bg:t,p:4,rounded:"xl",minW:"sm",children:(0,i.jsx)(a.Kq,{children:s.children.map((function(e){return(0,i.jsx)(g,h({},e),e.label)}))})})]})},s.label)}))})},g=function(e){var r=e.label,n=e.href,t=e.subLabel;return(0,i.jsx)(a.rU,{href:n,role:"group",display:"block",p:2,rounded:"md",_hover:{bg:(0,s.ff)("green.50","gray.900")},children:(0,i.jsxs)(a.Kq,{direction:"row",align:"center",children:[(0,i.jsxs)(a.xu,{children:[(0,i.jsx)(a.xv,{transition:"all .3s ease",_groupHover:{color:"green.400"},fontWeight:500,children:r}),(0,i.jsx)(a.xv,{fontSize:"sm",children:t})]}),(0,i.jsx)(a.kC,{transition:"all .3s ease",transform:"translateX(-10px)",opacity:0,_groupHover:{opacity:"100%",transform:"translateX(0)"},justify:"flex-end",align:"center",flex:1,children:(0,i.jsx)(d.JO,{color:"green.400",w:5,h:5,as:f.XC})})]})})},x=function(){return(0,i.jsx)(a.Kq,{bg:(0,s.ff)("white","gray.800"),p:4,display:{md:"none"},children:j.map((function(e){return(0,i.jsx)(b,h({},e),e.label)}))})},b=function(e){var r=e.label,n=e.children,o=e.href,c=(0,t.qY)(),u=c.isOpen,h=c.onToggle;return(0,i.jsxs)(a.Kq,{spacing:4,onClick:n&&h,children:[(0,i.jsxs)(a.kC,{py:2,as:a.rU,href:null!==o&&void 0!==o?o:"#",justify:"space-between",align:"center",_hover:{textDecoration:"none"},children:[(0,i.jsx)(a.xv,{fontWeight:600,color:(0,s.ff)("gray.600","gray.200"),children:r}),n&&(0,i.jsx)(d.JO,{as:f.v4,transition:"all .25s ease-in-out",transform:u?"rotate(180deg)":"",w:6,h:6})]}),(0,i.jsx)(l.UO,{in:u,animateOpacity:!0,style:{marginTop:"0!important"},children:(0,i.jsx)(a.Kq,{mt:2,pl:4,borderLeft:1,borderStyle:"solid",borderColor:(0,s.ff)("gray.200","gray.700"),align:"start",children:n&&n.map((function(e){return(0,i.jsx)(a.rU,{py:2,href:e.href,children:e.label},e.label)}))})})]})},j=[{label:"Blog",href:"/blog"}]},3811:function(e,r,n){"use strict";n.r(r);var i=n(5893),t=n(9008),a=n.n(t),s=n(2548),o=(n(7294),n(8527)),l=n(1739),c=n(4651),d=n(2264),f=n(6675);r.default=function(){return(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:"Adding New Video Product"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("link",{rel:"canonical",href:"https://andreysafonov.com/cases/introducing-webviewer-video"}),(0,i.jsx)("meta",{name:"Description",content:"Walking through how I discovered a new product opportunity for video annotation."})]}),(0,i.jsx)(d.Z,{}),(0,i.jsx)(o.W2,{maxW:"7xl",p:"12",children:(0,i.jsxs)(o.gC,{paddingTop:"40px",spacing:"2",alignItems:"flex-start",children:[(0,i.jsxs)(l.aG,{mb:4,children:[(0,i.jsx)(l.gN,{children:(0,i.jsx)(l.At,{href:"/",children:"Home"})}),(0,i.jsx)(l.gN,{children:(0,i.jsx)(l.At,{href:"/cases",children:"Case Studies"})}),(0,i.jsx)(l.gN,{children:(0,i.jsx)(l.At,{href:"#",children:"WebViewer Video"})})]}),(0,i.jsx)(o.X6,{as:"h1",children:"Introducing WebViewer Video"}),(0,i.jsx)(c.Ee,{objectFit:"cover",src:"/cases/video.png",alt:"Webviewer UI screenshoot",padding:10}),(0,i.jsx)(o.X6,{as:"h3",size:"md",children:"Context"}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"PDFTron offers SDKs to edit, view, and annotate PDFs, images, and MS Office documents. Video is quite a popular format in document management systems, virtual data rooms as well as design and marketing asset management."}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"Until WebViewer Video, prospects and customers would have to find a different vendor to cover video format."}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"With multiple vendors, users would get different UI experiences, as well as a different set of annotation tools to complete the same tasks. From the development perspective, it would also mean maintaining several SDKs, different backend setup for annotation storage, user roles and permission management."}),(0,i.jsx)(o.X6,{as:"h3",size:"md",pt:5,children:"Objective"}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"Expand PDFTron product portfolio to cover content creation formats."}),(0,i.jsx)(o.X6,{as:"h3",size:"md",pt:5,children:"My Role"}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Put together product vision to create a unified experience across most popular formats including video to provide users with a consistent behaviour for viewing and annotating."}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Created product backlog and prioritized must-have features for the first release."}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Lead a team of designers and developers to create the minimum viable product."}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Conducted user experience testing with prospects and existing customers to receive feedback and plan features for the next release."}),(0,i.jsx)(o.X6,{as:"h3",size:"md",pt:5,children:"Key Results"}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Generated 1M ARR in the 1st year."}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Existing customers that deal with the video format purchased WebViewer Video addon upon renewal."}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- WebViewer Video paid addon is now part of all the new deals if prospect deals with the video format."}),(0,i.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Users are now enjoying a consistent user experience across all document formats without the need to retrain themselves when switching between different file formats."})]})}),(0,i.jsx)(f.Z,{})]})}}},function(e){e.O(0,[315,774,888,179],(function(){return r=2979,e(e.s=r);var r}));var r=e.O();_N_E=r}]);