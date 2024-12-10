/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[13],{526:function(wa,sa,h){function pa(){return!1}function na(w,ba,fa){if(!(ba in aa))return!0;ba=aa[ba];for(var z=0;z<ba.length;z++){var ca=w;var ha=ba[z];var oa=fa;if(ha.name in ca){var la="",ka=!1;ca=ca[ha.name];switch(ha.type){case "s":la="String";ka=Object(ia.isString)(ca);break;case "a":la="Array";ka=Object(ia.isArray)(ca);break;case "n":la="Number";ka=Object(ia.isNumber)(ca)&&Object(ia.isFinite)(ca);break;case "o":la="Object",
ka=Object(ia.isObject)(ca)&&!Object(ia.isArray)(ca)}ka||oa.reject('Expected response field "'+ha.name+'" to have type '+la);ha=ka}else oa.reject('Response missing field "'+ha.name+'"'),ha=!1;if(!ha)return!1}return!0}function ma(w){for(var ba=0,fa=["locale","excelMaxAllowedCellCount","applyPageBreaksToSheet","excelDefaultCellBorderWidth","displayChangeTracking"];ba<fa.length;ba++){var z=fa[ba],ca=z;z=z.charAt(0).toUpperCase()+z.slice(1);w[ca]&&(Object.defineProperty(w,z,Object.getOwnPropertyDescriptor(w,
ca)),delete w[ca])}return w}h.r(sa);var ja=h(0),ia=h(1);h.n(ia);var ea=h(3);wa=h(49);var x=h(27),y=h(544),f=h(112),e=h(436),a=h(47),b=h(193),n=function(){function w(){this.request=this.result=null;this.state=0;var ba=this;ba.promise=new Promise(function(fa,z){ba.resolve=function(){if(0===ba.state||4===ba.state)ba.state=1,ba.result=arguments[0],fa.apply(null,arguments)};ba.reject=function(){if(0===ba.state||4===ba.state)ba.state=2,z.apply(null,arguments)}})}w.prototype.rv=function(){return 1===(this.state&
1)};w.prototype.Koa=function(){return 2===(this.state&2)};w.prototype.Kj=function(){return!this.Koa()&&!this.rv()};w.prototype.ioa=function(){return 4===(this.state&4)};w.prototype.jR=function(){this.state|=4};return w}(),r=function(){function w(){this.$u={};this.Xb=[]}w.prototype.pop=function(){var ba=this.Xb.pop();this.$u[ba.key]=void 0;return ba};w.prototype.push=function(ba,fa){fa={key:ba,data:fa};this.Xb.push(fa);this.$u[ba]=fa.data};w.prototype.contains=function(ba){return!!this.$u[ba]};w.prototype.get=
function(ba){return this.$u[ba]};w.prototype.set=function(ba,fa){var z=this;this.$u[ba]=fa;this.Xb.forEach(function(ca,ha){ca.key===ba&&(z.Xb[ha]=ca)})};w.prototype.remove=function(ba){var fa=this;this.$u[ba]=void 0;this.Xb.forEach(function(z,ca){z.key===ba&&fa.Xb.splice(ca,1)})};w.prototype.length=function(){return this.Xb.length};return w}(),aa={pages:[{name:"pages",type:"a"}],pdf:[{name:"url",type:"s"}],docmod:[{name:"url",type:"s"},{name:"rID",type:"s"}],health:[],tiles:[{name:"z",type:"n"},{name:"rID",
type:"n"},{name:"tiles",type:"a"},{name:"size",type:"n"}],cAnnots:[{name:"annots",type:"a"}],annots:[{name:"url",type:"s"},{name:"name",type:"s"}],image:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],text:[{name:"url",type:"s"},{name:"name",type:"s"},{name:"p",type:"n"}],ApString2Xod:[{name:"url",type:"s"},{name:"rID",type:"s"}]};h=function(){function w(ba,fa,z){var ca=this;this.TR=this.AY=!1;this.Yh=this.bJ=this.Gw=this.bf=this.Tx=this.Qp=this.Sx=this.fo=null;this.Hn=new n;this.ir=
new n;this.vE=!1;this.kg=this.gf=this.hf=this.$f=null;this.Fg=[];this.hF=[];this.cache={};this.timeStamp=0;this.Sh=[];this.Tj=[];this.RM=null;this.mY=!1;this.v5=this.id=null;this.lP=this.p0=pa;this.Si=0;this.mO=!1;this.p2=1;this.Qj={};this.Tt=0;this.Tv=new r;fa.endsWith("/")||(fa+="/");z=z||{};this.AY=z.disableWebsockets||!1;this.TR=z.singleServerMode||!1;null!=z.customQueryParameters&&Object(a.b)("wvsQueryParameters",z.customQueryParameters);fa.endsWith("blackbox/")||(fa+="blackbox/");this.fo=z.uploadData||
null;this.Gw=z.uriData||null;this.Sx=z.cacheKey||null;if(this.Qp=z.officeOptions||null)this.Qp=ma(this.Qp);this.bf=z.rasterizerOptions||null;this.Tx=z.cadOptions||null;this.Ef=fa;this.pM=ba;this.aq(!0);this.mu=(new y.a(fa,null,this.Ei())).Lja(!this.AY,function(ha){ca.Dqa(ha)},function(){return null},function(){ca.vE=!1},function(){ca.$ta()})}w.prototype.gga=function(){var ba=this;return new Promise(function(fa,z){var ca=new XMLHttpRequest;ca.open("GET",ba.Ef+"ck");ca.withCredentials=ba.Ei();ca.onreadystatechange=
function(){ca.readyState===XMLHttpRequest.DONE&&(200===ca.status?fa():z())};ca.send()})};w.prototype.Wva=function(ba){this.p0=ba||pa;this.lP=pa};w.prototype.Iea=function(){this.V4();return this.mu.wr(!0)};w.prototype.V4=function(){Object(ja.b)(this,void 0,void 0,function(){return Object(ja.d)(this,function(ba){switch(ba.label){case 0:return this.ir=new n,this.Hn=new n,this.vE=!1,this.id=null,this.mY=!1,[4,this.gga()];case 1:return ba.ba(),[2]}})})};w.prototype.$ta=function(){this.p0();this.V4();this.$f&&
(this.$f.Kj()?this.ei(this.$f.request):this.$f.rv()&&this.lP(this.$f.result.url,"pdf")&&(this.$f=null,this.T4()));this.kg&&this.kg.Kj()&&this.ei(this.kg.request);this.hf&&this.hf.Kj()?this.ei(this.hf.request):this.gf&&this.gf.Kj()&&this.Z_();var ba;for(ba=0;ba<this.Sh.length;ba++)this.Sh[ba]&&(this.Sh[ba].Kj()?this.ei(this.Sh[ba].request):this.Sh[ba].rv()&&this.lP(this.Sh[ba].result.url,"image")&&(this.Sh[ba]=null,this.WH(Object(ia.uniqueId)(),ba)));for(ba=0;ba<this.Tj.length;ba++)this.Tj[ba]&&this.Tj[ba].Kj()&&
!this.Tj[ba].ioa()&&this.ei(this.Tj[ba].request);for(ba=0;ba<this.Fg.length;ba++)this.Fg[ba]&&this.Fg[ba].Kj()&&this.ei(this.Fg[ba].request)};w.prototype.Kna=function(){return this.vE?Promise.resolve():(this.vE=!0,this.timeStamp=Date.now(),this.mu.qG())};w.prototype.Mya=function(){var ba=this,fa,z,ca,ha,oa;return new Promise(function(la,ka){if(ba.fo)fa=new FormData,fa.append("file",ba.fo.fileHandle,ba.fo.fileHandle.name),ba.Qp&&fa.append("officeOptions",JSON.stringify(ba.Qp)),ba.bf&&fa.append("rasterizerOptions",
JSON.stringify(ba.bf)),ba.Tx&&fa.append("cadOptions",ba.Tx.getJsonString()),ba.Sx&&fa.append("cacheKey",ba.Sx),z=ba.fo.loadCallback,ha="upload",ca=ba.fo.extension;else if(ba.Gw)fa={uri:ba.Gw.uri,WCa:ba.Gw.shareId},fa=Object.keys(fa).map(function(ta){return ta+"="+(fa[ta]?encodeURIComponent(fa[ta]):"")}).join("&"),oa="application/x-www-form-urlencoded; charset=UTF-8",z=ba.Gw.loadCallback,ha="url",ca=ba.Gw.extension;else{la();return}var qa=new XMLHttpRequest,ra=Object(x.k)(ba.Ef,"AuxUpload");ra=Object(b.a)(ra,
{type:ha,ext:ca});qa.open("POST",ra);qa.withCredentials=ba.Ei();oa&&qa.setRequestHeader("Content-Type",oa);qa.addEventListener("load",function(){if(qa.readyState===qa.DONE&&200===qa.status){var ta=JSON.parse(qa.response);ba.pM=ta.uri;z(ta);la(ta)}});qa.addEventListener("error",function(){ka(qa.statusText+" "+JSON.stringify(qa))});ba.fo&&null!=ba.fo.onProgress&&(qa.upload.onprogress=function(ta){ba.fo.onProgress(ta)});qa.send(fa)})};w.prototype.Ota=function(ba){this.password=ba||null;this.Hn.rv()||
(this.Hn=new n,this.ei({t:"pages"}));return this.Hn.promise};w.prototype.VA=function(ba){this.RM=ba||null;this.Hn.rv()||this.ei({t:"pages"});return this.Hn.promise};w.prototype.hy=function(ba){ba=Object.assign(ba,{uri:encodeURIComponent(this.pM)});this.RM&&(ba.ext=this.RM);this.Yh&&(ba.c=this.Yh);this.password&&(ba.pswd=this.password);this.Sx&&(ba.cacheKey=this.Sx);this.Qp&&(ba.officeOptions=this.Qp);this.bf&&(ba.rastOptions=this.bf);this.Tx&&(ba.cadOptions=this.Tx.mImpl);return ba};w.prototype.Eua=
function(){0<this.Tv.length()&&10>=this.Tt&&this.Fua(this.Tv.pop().data)};w.prototype.Wda=function(ba){0<this.Tv.length()&&this.Tv.contains(ba)&&this.Tv.remove(ba)};w.prototype.ei=function(ba){ba=this.hy(ba);this.mu.send(ba)};w.prototype.q5=function(ba,fa){10<this.Tt?this.Tv.push(ba,fa):(this.Tt++,ba=this.hy(fa),this.mu.send(ba))};w.prototype.Fua=function(ba){this.Tt++;ba=this.hy(ba);this.mu.send(ba)};w.prototype.Km=function(ba){return ba};w.prototype.o0=function(ba){this.TR&&ba?Object(ea.j)("Server failed health check. Single server mode ignoring check."):
!this.hBa&&ba&&3>=this.Si?(this.mO=!0,this.mu.wr()):3<this.Si&&(this.TR=!0)};w.prototype.Dqa=function(ba){var fa=this,z=ba.data,ca=ba.err,ha=ba.t;switch(ha){case "upload":ca?this.Nya.reject(ca):this.Nya.resolve("Success");break;case "pages":ca?this.Hn.reject(ca):na(z,ha,this.Hn)&&this.Hn.resolve(z);break;case "config":if(ca)this.ir.reject(ca);else if(na(z,ha,this.ir)){this.o0(z.unhealthy);z.id&&(this.id=z.id);if(z.auth){var oa=Object(a.a)("wvsQueryParameters");oa.auth=z.auth;Object(a.b)("wvsQueryParameters",
oa)}z.serverVersion&&(this.bJ=z.serverVersion,Object(ea.h)("[WebViewer Server] server version: "+this.bJ));z.serverID?(this.Si=z.serverID===this.v5&&this.mO?this.Si+1:0,this.v5=z.serverID):this.Si=0;this.mO=!1;this.ir.resolve(z)}break;case "health":ca?this.ir.reject(ca):na(z,ha,this.ir)&&this.o0(z.unhealthy);break;case "pdf":z.url=Object(b.a)(this.Ef+"../"+encodeURI(z.url));ca?this.$f.reject(ca):na(z,ha,this.$f)&&this.$f.resolve(z);break;case "ApString2Xod":z.url=Object(b.a)(this.Ef+"../data/"+encodeURI(z.url));
ca?this.Qj[z.rID].reject(ca):na(z,ha,this.Qj[z.rID])&&this.Qj[z.rID].resolve(z);break;case "docmod":z.url=Object(b.a)(this.Ef+"../"+encodeURI(z.url));ca?this.Qj[z.rID].reject(ca):na(z,ha,this.$f)&&this.Qj[z.rID].resolve(z);break;case "xod":if(ca)this.hf&&this.hf.Kj()&&this.hf.reject(ca),this.gf&&this.gf.Kj()&&this.gf.reject(ca);else if(z.notFound)z.noCreate||this.hf&&this.hf.Kj()&&this.hf.resolve(z),this.gf&&this.gf.Kj()&&this.gf.resolve(z);else{z.url&&(z.url=Object(b.a)(this.Ef+"../"+encodeURI(z.url)));
if(!this.gf||this.gf.rv())this.gf=new n,this.gf.request={t:"xod",noCreate:!0};this.hf||(this.hf=new n,this.hf.request={t:"xod"});this.gf.resolve(z);this.hf.resolve(z)}break;case "cAnnots":oa=this.kg;if(ca)oa.reject(ca);else if(na(z,ha,oa)){oa.jR();var la=[],ka=z.annots;z=function(Na){var Ia=ka[Na].s,Da=ka[Na].e,Oa=qa.Ef+"../"+encodeURI(ka[Na].xfdf),Ca="true"===ka[Na].hasAppearance?Object(b.a)(Oa+".xodapp"):null,Ma=Object(ia.range)(Ia,Da+1);la[Na]={range:Ma,promise:new Promise(function(Aa,Ea){var Fa=
new XMLHttpRequest;Fa.open("GET",Object(b.a)(Oa));Fa.responseType="text";Fa.withCredentials=fa.Ei();Fa.addEventListener("load",function(){Fa.readyState===Fa.DONE&&200===Fa.status&&Aa({Ys:Fa.response,zm:Ca,range:Ma})});Fa.addEventListener("error",function(){Ea(Fa.statusText+" "+JSON.stringify(Fa))});Fa.send()})}};var qa=this;for(ca=0;ca<ka.length;ca++)z(ca);oa.resolve(la)}break;case "annots":if(ca)this.kg.reject(ca);else if(na(z,ha,this.kg)){this.kg.jR();var ra=new XMLHttpRequest;oa=this.Ef+"../"+
encodeURI(z.url);var ta=z.hasAppearance?Object(b.a)(oa+".xodapp"):null;ra.open("GET",Object(b.a)(oa));ra.responseType="text";ra.withCredentials=this.Ei();ra.addEventListener("load",function(){ra.readyState===ra.DONE&&200===ra.status&&fa.kg.resolve({Ys:ra.response,zm:ta})});ra.addEventListener("error",function(){fa.kg.reject(ra.statusText+" "+JSON.stringify(ra))});ra.send()}break;case "image":this.Tt--;var va=this.Sh[z.p];ca?va.promise.reject(ca):na(z,ha,va)&&(va.result=z,va.result.url=Object(b.a)(this.Ef+
"../"+encodeURI(va.result.url)),va.resolve(va.result));break;case "tiles":this.Tt--;va=z.rID;oa=this.Fg[va];this.Fg[va]=null;this.hF.push(va);if(ca)oa.reject(ca);else if(na(z,ha,oa)){for(ca=0;ca<z.tiles.length;ca++)z.tiles[ca]=Object(b.a)(this.Ef+"../"+encodeURI(z.tiles[ca]));oa.resolve(z)}break;case "text":va=this.Tj[z.p];if(ca)va.reject(ca);else if(na(z,ha,va)){va.jR();var xa=new XMLHttpRequest;z=Object(b.a)(this.Ef+"../"+encodeURI(z.url));xa.open("GET",z);xa.withCredentials=this.Ei();xa.addEventListener("load",
function(){xa.readyState===xa.DONE&&200===xa.status&&(va.result=JSON.parse(xa.response),va.resolve(va.result))});xa.addEventListener("error",function(Na){va.reject(xa.statusText+" "+JSON.stringify(Na))});xa.send()}break;case "progress":"loading"===z.t&&this.trigger(f.a.Events.DOCUMENT_LOADING_PROGRESS,[z.bytes,z.total])}this.Eua();!ha&&ba.echo&&ba&&"apstring2xod"===ba.echo.t&&(ba=ba.echo.reqID)&&(2<=parseInt(this.bJ,10)?this.Qj[ba].reject("Message unhandled by server"):this.Qj[ba].reject())};w.prototype.Cka=
function(){return Object(ja.b)(this,void 0,void 0,function(){return Object(ja.d)(this,function(ba){switch(ba.label){case 0:return[4,this.Kna()];case 1:return ba.ba(),[2,this.ir.promise]}})})};w.prototype.ika=function(ba){for(var fa=this,z=new XMLHttpRequest,ca=Object(b.a)(this.Ef+"aul",{id:this.id}),ha=new FormData,oa={},la=0;la<ba.body.length;la++){var ka=ba.body[la];oa[ka.id]=ka.gL.w+";"+ka.gL.h;ha.append(ka.id,ka.gL.dataString)}ba={t:"apstring2xod",reqID:this.p2++,parts:oa};var qa=this.hy(ba);
ha.append("msg",JSON.stringify(qa));this.Qj[qa.reqID]=new n;z.open("POST",ca);z.withCredentials=this.Ei;ca=new Promise(function(ra,ta){z.onreadystatechange=function(){4===z.readyState&&(200===z.status?ra():ta("An error occurred while sending down appearance strings to the server"))}});z.send(ha);return ca.then(function(){return fa.Qj[qa.reqID].promise})};w.prototype.Lea=function(){var ba=this.bJ.split("-")[0].split("."),fa=["1","5","9"];if(3!==ba.length)throw Error("Invalid WVS version length.");
if(3!==fa.length)throw Error("Invalid version length.");for(var z=0;z<ba.length;++z){if(fa.length===z||ba[z]>fa[z])return-1;if(ba[z]!==fa[z])return 1}return 0};w.prototype.dr=function(){return 0>=this.Lea()};w.prototype.$M=function(){this.kg||(this.kg=new n,this.dr()?this.kg.request={t:"cAnnots"}:this.kg.request={t:"annots"},this.ei(this.kg.request));return this.kg.promise};w.prototype.WH=function(ba,fa){this.Sh[fa]||(this.Sh[fa]=new n,this.Sh[fa].request={t:"image",p:fa},this.q5(ba,this.Sh[fa].request));
return this.Sh[fa].promise};w.prototype.Pta=function(ba){this.Tj[ba]||(this.Tj[ba]=new n,this.Tj[ba].request={t:"text",p:ba},this.ei(this.Tj[ba].request));return this.Tj[ba].promise};w.prototype.Qta=function(ba,fa,z,ca,ha){var oa=this.Fg.length;this.hF.length&&(oa=this.hF.pop());this.Fg[oa]=new n;this.Fg[oa].request={t:"tiles",p:fa,z:z,r:ca,size:ha,rID:oa};this.q5(ba,this.Fg[oa].request);return this.Fg[oa].promise};w.prototype.T4=function(){this.$f||(this.$f=new n,this.$f.request={t:"pdf"},this.mY?
this.$f.resolve({url:this.pM}):this.ei(this.$f.request));return this.$f.promise};w.prototype.p_=function(ba){var fa=this,z=new XMLHttpRequest,ca=Object(b.a)(this.Ef+"aul",{id:this.id}),ha=new FormData,oa={};ba.annots&&(oa.annots="xfdf");ba.watermark&&(oa.watermark="png");ba.redactions&&(oa.redactions="redact");oa={t:"docmod",reqID:this.p2++,parts:oa};ba.print&&(oa.print=!0);var la=this.hy(oa);ha.append("msg",JSON.stringify(la));return Promise.all([ba.annots,ba.watermark,ba.redactions].map(function(ka){return Promise.resolve(ka)})).then(function(ka){var qa=
ka[0],ra=ka[1];ka=ka[2];qa&&ha.append("annots",qa);ra&&ha.append("watermark",ra);ka&&ha.append("redactions",ka);fa.Qj[la.reqID]=new n;z.open("POST",ca);z.withCredentials=fa.Ei;qa=new Promise(function(ta,va){z.onreadystatechange=function(){4===z.readyState&&(200===z.status?ta():va("An error occurred while sending down annotation data to the server"))}});z.send(ha);return qa.then(function(){return fa.Qj[la.reqID].promise})})};w.prototype.Z_=function(){this.gf||(this.gf=new n,this.gf.request={t:"xod",
noCreate:!0},this.ei(this.gf.request));return this.gf.promise};w.prototype.Rta=function(){this.hf||(this.hf=new n,this.hf.request={t:"xod"},this.ei(this.hf.request));return this.hf.promise};w.prototype.Xp=function(){return!0};w.prototype.request=function(){};w.prototype.g4=function(){};w.prototype.abort=function(){for(var ba=0;ba<this.Fg.length;ba++)this.Fg[ba]&&(this.Fg[ba].resolve(null),this.Fg[ba]=null,this.hF.push(ba));this.close()};w.prototype.iI=function(ba){this.Yh=this.Yh||{};this.Yh.headers=
ba};w.prototype.aq=function(ba){this.Yh=this.Yh||{};this.Yh.internal=this.Yh.internal||{};this.Yh.internal.withCredentials=ba};w.prototype.Ei=function(){return this.Yh&&this.Yh.internal?this.Yh.internal.withCredentials:null};w.prototype.getFileData=function(){return Promise.reject()};return w}();Object(wa.a)(h);Object(e.a)(h);Object(e.b)(h);sa["default"]=h},544:function(wa,sa,h){var pa=h(0),na=h(3),ma=h(27),ja=h(47),ia=h(193),ea=h(85),x=function(){function f(e,a,b,n,r,aa){void 0===b&&(b=null);void 0===
n&&(n=null);void 0===r&&(r=null);void 0===aa&&(aa=null);this.T1=!1;this.Si=0;this.dX=this.hza(e);this.url=a?this.dX+"/"+a:this.dX+"/ws";this.dM=b;this.rA=n;this.ey=r;this.GQ=aa}f.prototype.hza=function(e){var a=e.indexOf("://"),b="ws://";0>a?a=0:(5===a&&(b="wss://"),a+=3);var n=e.lastIndexOf("/");0>n&&(n=e.length);return b+e.slice(a,n)};f.prototype.send=function(e){this.oq.readyState===WebSocket.CLOSED||this.T1||this.oq.send(JSON.stringify(e))};f.prototype.qG=function(){return Object(pa.b)(this,void 0,
void 0,function(){var e,a=this;return Object(pa.d)(this,function(){e=Object(ja.a)("wvsQueryParameters");e.bcid=Object(ma.l)(8);Object(ja.b)("wvsQueryParameters",e);return[2,new Promise(function(b,n){var r=Object(ia.a)(a.url);a.oq=new WebSocket(r);a.oq.onopen=function(){a.rA&&a.rA();b()};a.oq.onerror=function(aa){a.T1=!0;n(aa)};a.oq.onclose=function(aa){var w=aa.code;return Object(pa.b)(a,void 0,void 0,function(){var ba=this;return Object(pa.d)(this,function(fa){switch(fa.label){case 0:return this.ey&&
this.ey(),3E3===w?[3,3]:8>this.Si++?[4,new Promise(function(z){return setTimeout(function(){return Object(pa.b)(ba,void 0,void 0,function(){return Object(pa.d)(this,function(ca){switch(ca.label){case 0:return this.GQ(),[4,this.qG()];case 1:return ca.ba(),z(),[2]}})})},3E3)})]:[3,2];case 1:return fa.ba(),[3,3];case 2:n(ea.a),fa.label=3;case 3:return[2]}})})};a.oq.onmessage=function(aa){aa&&aa.data&&(aa=JSON.parse(aa.data),aa.hb?a.send({hb:!0}):aa.end?close():a.dM(aa))}})]})})};f.prototype.wr=function(e){void 0===
e&&(e=!1);this.Si=0;e?this.oq.close(3E3):this.oq.close();return Promise.resolve()};return f}(),y=function(){function f(e,a,b,n,r,aa,w){void 0===n&&(n=null);void 0===r&&(r=null);void 0===aa&&(aa=null);void 0===w&&(w=null);this.Si=this.VH=this.id=0;this.Bz=!1;this.request=null;e=this.esa(e);this.url=a?e+"/"+a+"pf":e+"/pf";this.UI=b;this.dM=n;this.rA=r;this.ey=aa;this.GQ=w}f.prototype.esa=function(e){var a=e.lastIndexOf("/");0>a&&(a=e.length);return e.slice(0,a)};f.prototype.Mfa=function(e){e=e.split("\n");
for(e[e.length-1]&&e.pop();0<e.length&&3>e[e.length-1].length;)"]"===e.pop()&&(this.id=0);0<e.length&&3>e[0].length&&e.shift();for(var a=0;a<e.length;++a)e[a].endsWith(",")&&(e[a]=e[a].substr(0,e[a].length-1));return e};f.prototype.d5=function(){return Object(pa.b)(this,void 0,void 0,function(){var e=this;return Object(pa.d)(this,function(a){switch(a.label){case 0:return 8>this.Si++?[4,new Promise(function(b){return setTimeout(function(){e.GQ();e.qG();b()},3E3)})]:[3,2];case 1:a.ba(),a.label=2;case 2:return[2]}})})};
f.prototype.gsa=function(e){Object(pa.b)(this,void 0,void 0,function(){var a,b;return Object(pa.d)(this,function(n){switch(n.label){case 0:a=null,b=0,n.label=1;case 1:if(!(b<e.length))return[3,6];a=JSON.parse(e[b]);if(!a)return[3,5];if(!a.end)return[3,2];close();return[3,5];case 2:if(!a.id||Number(a.id)===this.id)return[3,4];Object(na.j)("Reconnecting, new server detected");this.wr();return[4,this.d5()];case 3:return n.ba(),[3,5];case 4:a.hb&&Number(a.id)===this.id?this.send({hb:!0}):this.Bz||this.dM(a),
n.label=5;case 5:return++b,[3,1];case 6:return[2]}})})};f.prototype.Aqa=function(e){Object(pa.b)(this,void 0,void 0,function(){var a,b,n;return Object(pa.d)(this,function(r){switch(r.label){case 0:if(!(3<=e.readyState))return[3,2];try{a=e.responseText.length}catch(aa){return Object(na.h)("caught exception"),[2]}if(0<a)try{b=this.Mfa(e.responseText),0===this.id&&0<b.length&&(n=JSON.parse(b.shift()),this.id=n.id,this.Si=0),this.gsa(b)}catch(aa){}return this.Bz?[3,2]:[4,this.gZ()];case 1:r.ba(),r.label=
2;case 2:return[2]}})})};f.prototype.gZ=function(){return Object(pa.b)(this,void 0,void 0,function(){var e=this;return Object(pa.d)(this,function(){return[2,new Promise(function(a,b){function n(){return Object(pa.b)(e,void 0,void 0,function(){return Object(pa.d)(this,function(aa){switch(aa.label){case 0:b(),this.wr(),aa.label=1;case 1:return this.Bz&&8>this.Si?[4,this.d5()]:[3,3];case 2:return aa.ba(),[3,1];case 3:return[2]}})})}e.request=new XMLHttpRequest;e.request.withCredentials=e.UI;var r=Object(ia.a)(e.url,
0!==e.id?{id:String(e.id),uc:String(e.VH)}:{uc:String(e.VH)});e.VH++;e.request.open("GET",r,!0);e.request.setRequestHeader("Cache-Control","no-cache");e.request.setRequestHeader("X-Requested-With","XMLHttpRequest");e.request.onreadystatechange=function(){e.Aqa(e.request)};e.request.addEventListener("error",n);e.request.addEventListener("timeout",n);e.request.addEventListener("load",function(){e.rA&&e.rA();a()});e.request.send()})]})})};f.prototype.qG=function(){var e=Object(ja.a)("wvsQueryParameters");
e.bcid=Object(ma.l)(8);Object(ja.b)("wvsQueryParameters",e);this.VH=this.id=0;this.Bz=!1;return this.gZ()};f.prototype.send=function(e){var a=this,b=new XMLHttpRequest;b.withCredentials=this.UI;var n=Object(ia.a)(this.url,{id:String(this.id)}),r=new FormData;r.append("data",JSON.stringify(e));b.addEventListener("error",function(){a.wr()});b.open("POST",n);b.setRequestHeader("X-Requested-With","XMLHttpRequest");b.send(r)};f.prototype.wr=function(){this.id=0;this.Bz=!0;this.ey&&this.ey();this.request.abort();
return Promise.resolve()};return f}();wa=function(){function f(e,a,b){this.LX=e;this.target=a;this.UI=b}f.prototype.Lja=function(e,a,b,n,r){void 0===e&&(e=!0);void 0===a&&(a=null);void 0===b&&(b=null);void 0===n&&(n=null);void 0===r&&(r=null);return e?new x(this.LX,this.target,a,b,n,r):new y(this.LX,this.target,this.UI,a,b,n,r)};return f}();sa.a=wa}}]);}).call(this || window)