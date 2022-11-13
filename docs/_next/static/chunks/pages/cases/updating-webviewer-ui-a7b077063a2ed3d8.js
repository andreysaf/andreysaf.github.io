(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{1739:function(e,r,n){"use strict";n.d(r,{At:function(){return p},aG:function(){return m},gN:function(){return g}});var t=n(1604),i=n(4592),a=n(6450),s=n(7294);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function l(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var c=["spacing"],d=["isCurrentPage","as","className","href"],h=["isCurrentPage","separator","isLastChild","spacing","children","className"],f=["children","spacing","separator","className"],u=(0,t.Gp)((function(e,r){var n=e.spacing,i=l(e,c),a=o({mx:n},(0,t.yK)().separator);return s.createElement(t.m$.span,o({ref:r,role:"presentation"},i,{__css:a}))}));i.Ts&&(u.displayName="BreadcrumbSeparator");var p=(0,t.Gp)((function(e,r){var n=e.isCurrentPage,a=e.as,c=e.className,h=e.href,f=l(e,d),u=(0,t.yK)(),p=o({ref:r,as:a,className:(0,i.cx)("chakra-breadcrumb__link",c)},f);return n?s.createElement(t.m$.span,o({"aria-current":"page",__css:u.link},p)):s.createElement(t.m$.a,o({__css:u.link,href:h},p))}));i.Ts&&(p.displayName="BreadcrumbLink");var g=(0,t.Gp)((function(e,r){var n=e.isCurrentPage,c=e.separator,d=e.isLastChild,f=e.spacing,g=e.children,m=e.className,x=l(e,h),b=(0,a.WR)(g).map((function(e){return e.type===p?s.cloneElement(e,{isCurrentPage:n}):e.type===u?s.cloneElement(e,{spacing:f,children:e.props.children||c}):e})),j=o({display:"inline-flex",alignItems:"center"},(0,t.yK)().item),v=(0,i.cx)("chakra-breadcrumb__list-item",m);return s.createElement(t.m$.li,o({ref:r,className:v},x,{__css:j}),b,!d&&s.createElement(u,{spacing:f},c))}));i.Ts&&(g.displayName="BreadcrumbItem");var m=(0,t.Gp)((function(e,r){var n=(0,t.jC)("Breadcrumb",e),c=(0,t.Lr)(e),d=c.children,h=c.spacing,u=void 0===h?"0.5rem":h,p=c.separator,g=void 0===p?"/":p,m=c.className,x=l(c,f),b=(0,a.WR)(d),j=b.length,v=b.map((function(e,r){return s.cloneElement(e,{separator:g,spacing:u,isLastChild:j===r+1})})),w=(0,i.cx)("chakra-breadcrumb",m);return s.createElement(t.m$.nav,o({ref:r,"aria-label":"breadcrumb",className:w,__css:n.container},x),s.createElement(t.Fo,{value:n},s.createElement(t.m$.ol,{className:"chakra-breadcrumb__list"},v)))}));i.Ts&&(m.displayName="Breadcrumb")},4651:function(e,r,n){"use strict";n.d(r,{Ee:function(){return u},d9:function(){return c}});var t=n(1604),i=n(4592),a=n(7294),s=n(4697);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},o.apply(this,arguments)}function l(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}function c(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,o=e.onError,l=e.crossOrigin,c=e.sizes,d=e.ignoreFallback,h=(0,a.useState)("pending"),f=h[0],u=h[1];(0,a.useEffect)((function(){u(n?"loading":"pending")}),[n]);var p=(0,a.useRef)(),g=(0,a.useCallback)((function(){if(n){m();var e=new Image;e.src=n,l&&(e.crossOrigin=l),t&&(e.srcset=t),c&&(e.sizes=c),r&&(e.loading=r),e.onload=function(e){m(),u("loaded"),null==i||i(e)},e.onerror=function(e){m(),u("failed"),null==o||o(e)},p.current=e}}),[n,l,t,c,i,o,r]),m=function(){p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,s.a)((function(){if(!d)return"loading"===f&&g(),function(){m()}}),[f,g,d]),d?"loaded":f}var d=["htmlWidth","htmlHeight","alt"],h=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],f=a.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,s=l(e,d);return a.createElement("img",o({width:n,height:t,ref:r,alt:i},s))})),u=(0,t.Gp)((function(e,r){var n=e.fallbackSrc,s=e.fallback,d=e.src,u=e.srcSet,p=e.align,g=e.fit,m=e.loading,x=e.ignoreFallback,b=e.crossOrigin,j=l(e,h),v=null!=m||x||void 0===n&&void 0===s,w=c(o({},e,{ignoreFallback:v})),y=o({ref:r,objectFit:g,objectPosition:p},v?j:(0,i.CE)(j,["onError","onLoad"]));return"loaded"!==w?s||a.createElement(t.m$.img,o({as:f,className:"chakra-image__placeholder",src:n},y)):a.createElement(t.m$.img,o({as:f,src:d,srcSet:u,crossOrigin:b,loading:m,className:"chakra-image"},y))}));i.Ts&&(u.displayName="Image")},5145:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cases/updating-webviewer-ui",function(){return n(8502)}])},6675:function(e,r,n){"use strict";n.d(r,{Z:function(){return h}});var t=n(5893),i=n(8527),a=n(949),s=n(6094),o=n(5993),l=n(771),c=n(6314),d=function(e){var r=e.children,n=(e.label,e.href);return(0,t.jsx)(i.rU,{href:n,children:r})};function h(){return(0,t.jsx)(i.xu,{bg:(0,a.ff)("gray.50","gray.900"),color:(0,a.ff)("gray.700","gray.200"),width:"100%",children:(0,t.jsxs)(i.W2,{as:i.Kq,maxW:"6xl",py:{base:4,md:8},direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"left",md:"center"},children:[(0,t.jsx)(i.Kq,{direction:"column",p:2,children:(0,t.jsx)(i.rU,{href:"/",children:(0,t.jsx)(i.xv,{children:"Andrey Safonov"})})}),(0,t.jsx)(i.Kq,{direction:"column",spacing:6,p:2,children:(0,t.jsx)(i.rU,{href:"/blog",children:(0,t.jsx)(i.X6,{size:"xs",children:"Blog"})})}),(0,t.jsxs)(i.Kq,{direction:"row",spacing:8,p:2,children:[(0,t.jsx)(d,{label:"LinkedIn",href:"https://www.linkedin.com/in/andreysaf/",children:(0,t.jsx)(s.n,{color:(0,a.ff)("#2d3848","white"),size:"medium"})}),(0,t.jsx)(d,{label:"GitHub",href:"https://github.com/andreysaf",children:(0,t.jsx)(o.E,{color:(0,a.ff)("#2d3848","white"),size:"medium"})}),(0,t.jsx)(d,{label:"Medium",href:"https://andreysaf.medium.com/",children:(0,t.jsx)(l.V,{color:(0,a.ff)("#2d3848","white"),size:"medium"})}),(0,t.jsx)(d,{label:"YouTube",href:"https://www.youtube.com/c/PDFTronSDK",children:(0,t.jsx)(c.h,{color:(0,a.ff)("#2d3848","white"),size:"medium"})})]})]})})}},2548:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(5893),i=n(7294),a=n(542),s=function(e){return(0,i.useEffect)((function(){window.GA_INITIALIZED||(a.ZP.initialize("UA-133668278-1"),window.GA_INITIALIZED=!0),a.ZP.set({page:window.location.pathname}),a.ZP.pageview(window.location.pathname)})),(0,t.jsx)("div",{children:e.children})}},2264:function(e,r,n){"use strict";n.d(r,{Z:function(){return p}});var t=n(5893),i=n(7375),a=n(8527),s=n(949),o=n(5113),l=n(3084),c=n(4770),d=n(894),h=n(9876);function f(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){f(e,r,n[r])}))}return e}function p(){var e=(0,i.qY)(),r=e.isOpen,n=e.onToggle;return(0,t.jsxs)(a.xu,{children:[(0,t.jsxs)(a.kC,{bg:(0,s.ff)("white","gray.800"),color:(0,s.ff)("gray.600","white"),minH:"60px",py:{base:2},px:{base:4},borderBottom:1,borderStyle:"solid",borderColor:(0,s.ff)("gray.200","gray.900"),align:"center",children:[(0,t.jsx)(a.kC,{flex:{base:1,md:"auto"},ml:{base:-2},display:{base:"flex",md:"none"},children:(0,t.jsx)(o.hU,{onClick:n,icon:r?(0,t.jsx)(h.Tw,{w:3,h:3}):(0,t.jsx)(h.Uq,{w:5,h:5}),variant:"ghost","aria-label":"Toggle Navigation"})}),(0,t.jsx)(a.kC,{flex:{base:1},justify:{base:"center",md:"start"},children:(0,t.jsx)(a.kC,{display:{base:"none",md:"flex"},children:(0,t.jsx)(g,{})})}),(0,t.jsx)(a.Kq,{flex:{base:1,md:0},justify:"flex-end",direction:"row",spacing:6,children:(0,t.jsx)(a.rU,{href:"https://www.linkedin.com/in/andrey-safonov1/",children:(0,t.jsx)(o.zx,{display:{base:"none",md:"inline-flex"},fontSize:"sm",fontWeight:600,color:"white",bg:"green.400",href:"https://www.linkedin.com/in/andrey-safonov1/",_hover:{bg:"green.300"},children:"Get in touch"})})})]}),(0,t.jsx)(l.UO,{in:r,animateOpacity:!0,children:(0,t.jsx)(x,{})})]})}var g=function(){var e,r=(0,s.ff)("gray.600","gray.200"),n=(0,s.ff)("gray.800","white"),i=(0,s.ff)("white","gray.800");return(0,t.jsx)(a.Kq,{direction:"row",spacing:4,children:j.map((function(s){return(0,t.jsx)(a.xu,{children:(0,t.jsxs)(c.J2,{trigger:"hover",placement:"bottom-start",children:[(0,t.jsx)(c.xo,{children:(0,t.jsx)(a.rU,{p:2,href:null!==(e=s.href)&&void 0!==e?e:"#",fontSize:"sm",fontWeight:500,color:r,_hover:{textDecoration:"none",color:n},children:s.label})}),s.children&&(0,t.jsx)(c.yk,{border:0,boxShadow:"xl",bg:i,p:4,rounded:"xl",minW:"sm",children:(0,t.jsx)(a.Kq,{children:s.children.map((function(e){return(0,t.jsx)(m,u({},e),e.label)}))})})]})},s.label)}))})},m=function(e){var r=e.label,n=e.href,i=e.subLabel;return(0,t.jsx)(a.rU,{href:n,role:"group",display:"block",p:2,rounded:"md",_hover:{bg:(0,s.ff)("green.50","gray.900")},children:(0,t.jsxs)(a.Kq,{direction:"row",align:"center",children:[(0,t.jsxs)(a.xu,{children:[(0,t.jsx)(a.xv,{transition:"all .3s ease",_groupHover:{color:"green.400"},fontWeight:500,children:r}),(0,t.jsx)(a.xv,{fontSize:"sm",children:i})]}),(0,t.jsx)(a.kC,{transition:"all .3s ease",transform:"translateX(-10px)",opacity:0,_groupHover:{opacity:"100%",transform:"translateX(0)"},justify:"flex-end",align:"center",flex:1,children:(0,t.jsx)(d.JO,{color:"green.400",w:5,h:5,as:h.XC})})]})})},x=function(){return(0,t.jsx)(a.Kq,{bg:(0,s.ff)("white","gray.800"),p:4,display:{md:"none"},children:j.map((function(e){return(0,t.jsx)(b,u({},e),e.label)}))})},b=function(e){var r=e.label,n=e.children,o=e.href,c=(0,i.qY)(),f=c.isOpen,u=c.onToggle;return(0,t.jsxs)(a.Kq,{spacing:4,onClick:n&&u,children:[(0,t.jsxs)(a.kC,{py:2,as:a.rU,href:null!==o&&void 0!==o?o:"#",justify:"space-between",align:"center",_hover:{textDecoration:"none"},children:[(0,t.jsx)(a.xv,{fontWeight:600,color:(0,s.ff)("gray.600","gray.200"),children:r}),n&&(0,t.jsx)(d.JO,{as:h.v4,transition:"all .25s ease-in-out",transform:f?"rotate(180deg)":"",w:6,h:6})]}),(0,t.jsx)(l.UO,{in:f,animateOpacity:!0,style:{marginTop:"0!important"},children:(0,t.jsx)(a.Kq,{mt:2,pl:4,borderLeft:1,borderStyle:"solid",borderColor:(0,s.ff)("gray.200","gray.700"),align:"start",children:n&&n.map((function(e){return(0,t.jsx)(a.rU,{py:2,href:e.href,children:e.label},e.label)}))})})]})},j=[{label:"Blog",href:"/blog"}]},8502:function(e,r,n){"use strict";n.r(r);var t=n(5893),i=n(9008),a=n.n(i),s=n(2548),o=(n(7294),n(8527)),l=n(1739),c=n(4651),d=n(2264),h=n(6675);r.default=function(){return(0,t.jsxs)(s.Z,{children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:"PDFTron's WebViewer UI & UX Update"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,t.jsx)("link",{rel:"canonical",href:"https://andreysafonov.com/cases/updating-webviewer-ui"}),(0,t.jsx)("meta",{name:"Description",content:"Updating PDFTron's flagship product's UI."})]}),(0,t.jsx)(d.Z,{}),(0,t.jsx)(o.W2,{maxW:"7xl",p:"12",children:(0,t.jsxs)(o.gC,{paddingTop:"40px",spacing:"2",alignItems:"flex-start",children:[(0,t.jsxs)(l.aG,{mb:4,children:[(0,t.jsx)(l.gN,{children:(0,t.jsx)(l.At,{href:"/",children:"Home"})}),(0,t.jsx)(l.gN,{children:(0,t.jsx)(l.At,{href:"/cases",children:"Case Studies"})}),(0,t.jsx)(l.gN,{children:(0,t.jsx)(l.At,{href:"#",children:"WebViewer"})})]}),(0,t.jsx)(o.X6,{as:"h1",children:"Updating PDFTron's Flagship Product's UI"}),(0,t.jsx)(c.Ee,{objectFit:"cover",src:"/cases/webviewer.png",alt:"Webviewer UI screenshoot",padding:10}),(0,t.jsx)(o.X6,{as:"h3",size:"md",children:"Context"}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"WebViewer is PDFtron's flagship product. The UI was not updated for years, and customers and prospects were becoming dissatisfied. The deals were consistently lost to the competition. I put together a team of developers and designers to update WebViewer UI."}),(0,t.jsx)(o.X6,{as:"h3",size:"md",pt:5,children:"Objective"}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"Create an incremental update to WebViewer UI to make it more competitive with other viewers on the market."}),(0,t.jsx)(o.X6,{as:"h3",size:"md",pt:5,children:"My Role"}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Using the OKR framework, set the objective and establish key results."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Reached out to customers to gather feedback from their users."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Conducted loss survey analysis into why prospects chose competition."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Performed competitive analysis looking at vertical and horizontal competitors."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Got alignment from internal stakeholders to agree on designs and timelines."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Rapidly prototyped with designers and performed demos of the wireframes to reference customers."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Working together with the Product Owner to prioritize items to be accepted into the development sprint."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Held daily standups to track the progress and review the feedback."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Helped developers with the implementation of the designs to meet the deadlines."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Continued to interview, gather data and ensure we have met the key results."}),(0,t.jsx)(o.X6,{as:"h3",size:"md",pt:5,children:"Key Results"}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- Deals were no longer lost due to dated UI and prospects preferred our UI over competitors."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- The new UI was rearchitected to be more lightweight, performant and allowed for easier product updates and customization in the future."}),(0,t.jsx)(o.xv,{as:"p",fontSize:"lg",children:"- The number of weekly downloads on npm went up by 50% after the update."})]})}),(0,t.jsx)(h.Z,{})]})}}},function(e){e.O(0,[315,774,888,179],(function(){return r=5145,e(e.s=r);var r}));var r=e.O();_N_E=r}]);