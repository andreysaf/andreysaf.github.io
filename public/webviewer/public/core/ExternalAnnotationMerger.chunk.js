/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[4],{530:function(wa,sa,h){h.r(sa);var pa=h(0),na=h(553),ma=h(554),ja;(function(ia){ia[ia.EXTERNAL_XFDF_NOT_REQUESTED=0]="EXTERNAL_XFDF_NOT_REQUESTED";ia[ia.EXTERNAL_XFDF_NOT_AVAILABLE=1]="EXTERNAL_XFDF_NOT_AVAILABLE";ia[ia.EXTERNAL_XFDF_AVAILABLE=2]="EXTERNAL_XFDF_AVAILABLE"})(ja||(ja={}));wa=function(){function ia(ea){this.aa=ea;this.state=ja.EXTERNAL_XFDF_NOT_REQUESTED}ia.prototype.Uma=function(){var ea=this;return function(x,
y,f){return Object(pa.b)(ea,void 0,void 0,function(){var e,a,b,n,r,aa,w,ba=this,fa;return Object(pa.d)(this,function(z){switch(z.label){case 0:if(this.state!==ja.EXTERNAL_XFDF_NOT_REQUESTED)return[3,2];e=this.aa.getDocument().Ku();return[4,this.ala(e)];case 1:a=z.ba(),b=this.qfa(a),this.NM=null!==(fa=null===b||void 0===b?void 0:b.parse())&&void 0!==fa?fa:null,this.state=null===this.NM?ja.EXTERNAL_XFDF_NOT_AVAILABLE:ja.EXTERNAL_XFDF_AVAILABLE,z.label=2;case 2:if(this.state===ja.EXTERNAL_XFDF_NOT_AVAILABLE)return f(x),
[2];n=new DOMParser;r=n.parseFromString(x,"text/xml");y.forEach(function(ca){ba.merge(r,ba.NM,ca-1)});aa=new XMLSerializer;w=aa.serializeToString(r);f(w);return[2]}})})}};ia.prototype.iR=function(ea){this.ala=ea};ia.prototype.Ue=function(){this.NM=void 0;this.state=ja.EXTERNAL_XFDF_NOT_REQUESTED};ia.prototype.qfa=function(ea){return ea?Array.isArray(ea)?new na.a(ea):"string"!==typeof ea?null:(new DOMParser).parseFromString(ea,"text/xml").querySelector("xfdf > add")?new na.a(ea):new ma.a(ea):null};
ia.prototype.merge=function(ea,x,y){var f=this;0===y&&(this.Jpa(ea,x.Zq),this.Lpa(ea,x.qM));var e=x.ea[y];e&&(this.Mpa(ea,e.Oo),this.Opa(ea,e.H7,x.Hy),this.Npa(ea,e.page,y),this.Kpa(ea,e.rY));e=this.aa.Cb();if(y===e-1){var a=x.Hy;Object.keys(a).forEach(function(b){a[b].pO||f.a2(ea,b,a[b])})}};ia.prototype.Jpa=function(ea,x){null!==x&&(ea=this.Mx(ea),this.zs(ea,"calculation-order",x))};ia.prototype.Lpa=function(ea,x){null!==x&&(ea=this.Mx(ea),this.zs(ea,"document-actions",x))};ia.prototype.Mpa=function(ea,
x){var y=this,f=this.Lx(ea.querySelector("xfdf"),"annots");Object.keys(x).forEach(function(e){y.zs(f,'[name="'+e+'"]',x[e])})};ia.prototype.Opa=function(ea,x,y){var f=this;if(0!==x.length){var e=this.Mx(ea);x.forEach(function(a){var b=a.getAttribute("field"),n=y[b];n&&(f.a2(ea,b,n),f.zs(e,"null",a))})}};ia.prototype.a2=function(ea,x,y){var f=this.Mx(ea),e=f.querySelector('ffield[name="'+x+'"]');null!==y.bF&&null===e&&this.zs(f,'ffield[name="'+x+'"]',y.bF);ea=this.Lx(ea.querySelector("xfdf"),"xfdf > fields",
"fields");x=x.split(".");this.lQ(ea,x,0,y.value);y.pO=!0};ia.prototype.Npa=function(ea,x,y){null!==x&&(ea=this.Mx(ea),ea=this.Lx(ea,"pages"),this.zs(ea,'[number="'+(y+1)+'"]',x))};ia.prototype.Kpa=function(ea,x){Object.keys(x).forEach(function(y){(y=ea.querySelector('annots [name="'+y+'"]'))&&y.parentElement.removeChild(y)})};ia.prototype.lQ=function(ea,x,y,f){if(y===x.length)x=document.createElementNS("","value"),x.textContent=f,this.zs(ea,"value",x);else{var e=x[y];this.Lx(ea,'[name="'+e+'"]',"field").setAttribute("name",
e);ea=ea.querySelectorAll('[name="'+e+'"]');1===ea.length?this.lQ(ea[0],x,y+1,f):(e=this.qja(ea),this.lQ(y===x.length-1?e:this.Vxa(ea,e),x,y+1,f))}};ia.prototype.qja=function(ea){for(var x=null,y=0;y<ea.length;y++){var f=ea[y];if(0===f.childElementCount||1===f.childElementCount&&"value"===f.children[0].tagName){x=f;break}}return x};ia.prototype.Vxa=function(ea,x){for(var y=0;y<ea.length;y++)if(ea[y]!==x)return ea[y];return null};ia.prototype.zs=function(ea,x,y){x=ea.querySelector(x);null!==x&&ea.removeChild(x);
ea.appendChild(y)};ia.prototype.Mx=function(ea){var x=ea.querySelector("pdf-info");if(null!==x)return x;x=this.Lx(ea.querySelector("xfdf"),"pdf-info");x.setAttribute("xmlns","http://www.pdftron.com/pdfinfo");x.setAttribute("version","2");x.setAttribute("import-version","4");return x};ia.prototype.Lx=function(ea,x,y){var f=ea.querySelector(x);if(null!==f)return f;f=document.createElementNS("",y||x);ea.appendChild(f);return f};return ia}();sa["default"]=wa},542:function(wa,sa){wa=function(){function h(){}
h.prototype.AD=function(pa){var na={Zq:null,qM:null,Hy:{},ea:{}};pa=(new DOMParser).parseFromString(pa,"text/xml");na.Zq=pa.querySelector("pdf-info calculation-order");na.qM=pa.querySelector("pdf-info document-actions");na.Hy=this.bra(pa);na.ea=this.pra(pa);return na};h.prototype.bra=function(pa){var na=pa.querySelector("fields");pa=pa.querySelectorAll("pdf-info > ffield");if(null===na&&null===pa)return{};var ma={};this.oca(ma,na);this.mca(ma,pa);return ma};h.prototype.oca=function(pa,na){if(null!==
na&&na.children){for(var ma=[],ja=0;ja<na.children.length;ja++){var ia=na.children[ja];ma.push({name:ia.getAttribute("name"),element:ia})}for(;0!==ma.length;)for(na=ma.shift(),ja=0;ja<na.element.children.length;ja++)ia=na.element.children[ja],"value"===ia.tagName?pa[na.name]={value:ia.textContent,bF:null,pO:!1}:ia.children&&ma.push({name:na.name+"."+ia.getAttribute("name"),element:ia})}};h.prototype.mca=function(pa,na){na.forEach(function(ma){var ja=ma.getAttribute("name");pa[ja]?pa[ja].bF=ma:pa[ja]=
{value:null,bF:ma,pO:!1}})};h.prototype.pra=function(pa){var na=this,ma={};pa.querySelectorAll("pdf-info widget").forEach(function(ja){var ia=parseInt(ja.getAttribute("page"),10)-1;na.pG(ma,ia);ma[ia].H7.push(ja)});pa.querySelectorAll("pdf-info page").forEach(function(ja){var ia=parseInt(ja.getAttribute("number"),10)-1;na.pG(ma,ia);ma[ia].page=ja});this.n_(pa).forEach(function(ja){var ia=parseInt(ja.getAttribute("page"),10),ea=ja.getAttribute("name");na.pG(ma,ia);ma[ia].Oo[ea]=ja});this.$Z(pa).forEach(function(ja){var ia=
parseInt(ja.getAttribute("page"),10);ja=ja.textContent;na.pG(ma,ia);ma[ia].rY[ja]=!0});return ma};h.prototype.pG=function(pa,na){pa[na]||(pa[na]={Oo:{},rY:{},H7:[],page:null})};return h}();sa.a=wa},553:function(wa,sa,h){var pa=h(0),na=h(1);h.n(na);wa=function(ma){function ja(ia){var ea=ma.call(this)||this;ea.$ia=Array.isArray(ia)?ia:[ia];return ea}Object(pa.c)(ja,ma);ja.prototype.parse=function(){var ia=this,ea={Zq:null,qM:null,Hy:{},ea:{}};this.$ia.forEach(function(x){ea=Object(na.merge)(ea,ia.AD(x))});
return ea};ja.prototype.n_=function(ia){var ea=[];ia.querySelectorAll("add > *").forEach(function(x){ea.push(x)});ia.querySelectorAll("modify > *").forEach(function(x){ea.push(x)});return ea};ja.prototype.$Z=function(ia){return ia.querySelectorAll("delete > *")};return ja}(h(542).a);sa.a=wa},554:function(wa,sa,h){var pa=h(0);wa=function(na){function ma(ja){var ia=na.call(this)||this;ia.aja=ja;return ia}Object(pa.c)(ma,na);ma.prototype.parse=function(){return this.AD(this.aja)};ma.prototype.n_=function(ja){return ja.querySelectorAll("annots > *")};
ma.prototype.$Z=function(){return[]};return ma}(h(542).a);sa.a=wa}}]);}).call(this || window)