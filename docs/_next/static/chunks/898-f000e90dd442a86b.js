"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{1739:function(e,r,n){n.d(r,{At:function(){return b},aG:function(){return y},gN:function(){return j}});var a=n(5059),i=n(8472),t=n(4420),s=n(4662),l=n(9164),c=n(4592),o=n(6450),d=n(7294);function f(){return f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function h(e,r){if(null==e)return{};var n,a,i={},t=Object.keys(e);for(a=0;a<t.length;a++)n=t[a],r.indexOf(n)>=0||(i[n]=e[n]);return i}var u=["spacing"],m=["isCurrentPage","as","className","href"],p=["isCurrentPage","separator","isLastChild","spacing","children","className"],x=["children","spacing","separator","className"],g=(0,a.G)((function(e,r){var n=e.spacing,a=h(e,u),s=f({mx:n},(0,i.yK)().separator);return d.createElement(t.m.span,f({ref:r,role:"presentation"},a,{__css:s}))}));c.Ts&&(g.displayName="BreadcrumbSeparator");var b=(0,a.G)((function(e,r){var n=e.isCurrentPage,a=e.as,s=e.className,l=e.href,o=h(e,m),u=(0,i.yK)(),p=f({ref:r,as:a,className:(0,c.cx)("chakra-breadcrumb__link",s)},o);return n?d.createElement(t.m.span,f({"aria-current":"page",__css:u.link},p)):d.createElement(t.m.a,f({__css:u.link,href:l},p))}));c.Ts&&(b.displayName="BreadcrumbLink");var j=(0,a.G)((function(e,r){var n=e.isCurrentPage,a=e.separator,s=e.isLastChild,l=e.spacing,u=e.children,m=e.className,x=h(e,p),j=(0,o.WR)(u).map((function(e){return e.type===b?d.cloneElement(e,{isCurrentPage:n}):e.type===g?d.cloneElement(e,{spacing:l,children:e.props.children||a}):e})),y=f({display:"inline-flex",alignItems:"center"},(0,i.yK)().item),w=(0,c.cx)("chakra-breadcrumb__list-item",m);return d.createElement(t.m.li,f({ref:r,className:w},x,{__css:y}),j,!s&&d.createElement(g,{spacing:l},a))}));c.Ts&&(j.displayName="BreadcrumbItem");var y=(0,a.G)((function(e,r){var n=(0,s.jC)("Breadcrumb",e),a=(0,l.Lr)(e),u=a.children,m=a.spacing,p=void 0===m?"0.5rem":m,g=a.separator,b=void 0===g?"/":g,j=a.className,y=h(a,x),w=(0,o.WR)(u),v=w.length,_=w.map((function(e,r){return d.cloneElement(e,{separator:b,spacing:p,isLastChild:v===r+1})})),k=(0,c.cx)("chakra-breadcrumb",j);return d.createElement(t.m.nav,f({ref:r,"aria-label":"breadcrumb",className:k,__css:n.container},y),d.createElement(i.Fo,{value:n},d.createElement(t.m.ol,{className:"chakra-breadcrumb__list"},_)))}));c.Ts&&(y.displayName="Breadcrumb")},6151:function(e,r,n){n.d(r,{Z:function(){return f}});var a=n(5893),i=n(8527),t=n(6369),s=n(6094),l=n(5993),c=n(771),o=n(6314),d=function(e){var r=e.children,n=(e.label,e.href);return(0,a.jsx)(i.rU,{href:n,children:r})};function f(){return(0,a.jsx)(i.xu,{bg:(0,t.ff)("gray.50","gray.900"),color:(0,t.ff)("gray.700","gray.200"),width:"100%",children:(0,a.jsxs)(i.W2,{as:i.Kq,maxW:"6xl",py:{base:4,md:8},direction:{base:"column",md:"row"},spacing:4,justify:{base:"center",md:"space-between"},align:{base:"left",md:"center"},children:[(0,a.jsx)(i.Kq,{direction:"column",p:2,children:(0,a.jsx)(i.rU,{href:"/",children:(0,a.jsx)(i.xv,{children:"Andrey Safonov"})})}),(0,a.jsx)(i.Kq,{direction:"column",spacing:6,p:2,children:(0,a.jsx)(i.rU,{href:"/blog",children:(0,a.jsx)(i.X6,{size:"xs",children:"Blog"})})}),(0,a.jsxs)(i.Kq,{direction:"row",spacing:8,p:2,children:[(0,a.jsx)(d,{label:"LinkedIn",href:"https://www.linkedin.com/in/andreysaf/",children:(0,a.jsx)(s.n,{color:(0,t.ff)("#2d3848","white"),size:"medium"})}),(0,a.jsx)(d,{label:"GitHub",href:"https://github.com/andreysaf",children:(0,a.jsx)(l.E,{color:(0,t.ff)("#2d3848","white"),size:"medium"})}),(0,a.jsx)(d,{label:"Medium",href:"https://andreysaf.medium.com/",children:(0,a.jsx)(c.V,{color:(0,t.ff)("#2d3848","white"),size:"medium"})}),(0,a.jsx)(d,{label:"YouTube",href:"https://www.youtube.com/c/PDFTronSDK",children:(0,a.jsx)(o.h,{color:(0,t.ff)("#2d3848","white"),size:"medium"})})]})]})})}},63:function(e,r,n){n.d(r,{Z:function(){return s}});var a=n(5893),i=n(7294),t=n(9089),s=function(e){return(0,i.useEffect)((function(){window.GA_INITIALIZED||(t.ZP.initialize("G-MTPRRGBYGW"),window.GA_INITIALIZED=!0),t.ZP.set({page:window.location.pathname}),t.ZP.send({hitType:"pageview",page:window.location.pathname})})),(0,a.jsx)("div",{children:e.children})}},1127:function(e,r,n){n.d(r,{Z:function(){return u}});var a=n(1799),i=n(5893),t=n(7375),s=n(8527),l=n(6369),c=n(5113),o=n(3084),d=n(6146),f=n(894),h=n(9876);function u(){var e=(0,t.qY)(),r=e.isOpen,n=e.onToggle;return(0,i.jsxs)(s.xu,{children:[(0,i.jsxs)(s.kC,{bg:(0,l.ff)("white","gray.800"),color:(0,l.ff)("gray.600","white"),minH:"60px",py:{base:2},px:{base:4},borderBottom:1,borderStyle:"solid",borderColor:(0,l.ff)("gray.200","gray.900"),align:"center",children:[(0,i.jsx)(s.kC,{flex:{base:1,md:"auto"},ml:{base:-2},display:{base:"flex",md:"none"},children:(0,i.jsx)(c.hU,{onClick:n,icon:r?(0,i.jsx)(h.Tw,{w:3,h:3}):(0,i.jsx)(h.Uq,{w:5,h:5}),variant:"ghost","aria-label":"Toggle Navigation"})}),(0,i.jsx)(s.kC,{flex:{base:1},justify:{base:"center",md:"start"},children:(0,i.jsx)(s.kC,{display:{base:"none",md:"flex"},children:(0,i.jsx)(m,{})})}),(0,i.jsx)(s.Kq,{flex:{base:1,md:0},justify:"flex-end",direction:"row",spacing:6,children:(0,i.jsx)(s.rU,{href:"https://www.linkedin.com/in/andreysaf/",children:(0,i.jsx)(c.zx,{display:{base:"none",md:"inline-flex"},fontSize:"sm",fontWeight:600,color:"white",bg:"green.400",href:"https://www.linkedin.com/in/andreysaf/",_hover:{bg:"green.300"},children:"Get in touch"})})})]}),(0,i.jsx)(o.UO,{in:r,animateOpacity:!0,children:(0,i.jsx)(x,{})})]})}var m=function(){var e,r=(0,l.ff)("gray.600","gray.200"),n=(0,l.ff)("gray.800","white"),t=(0,l.ff)("white","gray.800");return(0,i.jsx)(s.Kq,{direction:"row",spacing:4,children:b.map((function(l){return(0,i.jsx)(s.xu,{children:(0,i.jsxs)(d.J2,{trigger:"hover",placement:"bottom-start",children:[(0,i.jsx)(d.xo,{children:(0,i.jsx)(s.rU,{p:2,href:null!==(e=l.href)&&void 0!==e?e:"#",fontSize:"sm",fontWeight:500,color:r,_hover:{textDecoration:"none",color:n},children:l.label})}),l.children&&(0,i.jsx)(d.yk,{border:0,boxShadow:"xl",bg:t,p:4,rounded:"xl",minW:"sm",children:(0,i.jsx)(s.Kq,{children:l.children.map((function(e){return(0,i.jsx)(p,(0,a.Z)({},e),e.label)}))})})]})},l.label)}))})},p=function(e){var r=e.label,n=e.href,a=e.subLabel;return(0,i.jsx)(s.rU,{href:n,role:"group",display:"block",p:2,rounded:"md",_hover:{bg:(0,l.ff)("green.50","gray.900")},children:(0,i.jsxs)(s.Kq,{direction:"row",align:"center",children:[(0,i.jsxs)(s.xu,{children:[(0,i.jsx)(s.xv,{transition:"all .3s ease",_groupHover:{color:"green.400"},fontWeight:500,children:r}),(0,i.jsx)(s.xv,{fontSize:"sm",children:a})]}),(0,i.jsx)(s.kC,{transition:"all .3s ease",transform:"translateX(-10px)",opacity:0,_groupHover:{opacity:"100%",transform:"translateX(0)"},justify:"flex-end",align:"center",flex:1,children:(0,i.jsx)(f.JO,{color:"green.400",w:5,h:5,as:h.XC})})]})})},x=function(){return(0,i.jsx)(s.Kq,{bg:(0,l.ff)("white","gray.800"),p:4,display:{md:"none"},children:b.map((function(e){return(0,i.jsx)(g,(0,a.Z)({},e),e.label)}))})},g=function(e){var r=e.label,n=e.children,a=e.href,c=(0,t.qY)(),d=c.isOpen,u=c.onToggle;return(0,i.jsxs)(s.Kq,{spacing:4,onClick:n&&u,children:[(0,i.jsxs)(s.kC,{py:2,as:s.rU,href:null!==a&&void 0!==a?a:"#",justify:"space-between",align:"center",_hover:{textDecoration:"none"},children:[(0,i.jsx)(s.xv,{fontWeight:600,color:(0,l.ff)("gray.600","gray.200"),children:r}),n&&(0,i.jsx)(f.JO,{as:h.v4,transition:"all .25s ease-in-out",transform:d?"rotate(180deg)":"",w:6,h:6})]}),(0,i.jsx)(o.UO,{in:d,animateOpacity:!0,style:{marginTop:"0!important"},children:(0,i.jsx)(s.Kq,{mt:2,pl:4,borderLeft:1,borderStyle:"solid",borderColor:(0,l.ff)("gray.200","gray.700"),align:"start",children:n&&n.map((function(e){return(0,i.jsx)(s.rU,{py:2,href:e.href,children:e.label},e.label)}))})})]})},b=[{label:"Blog",href:"/blog"}]}}]);