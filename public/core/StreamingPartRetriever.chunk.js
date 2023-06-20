/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[11],{488:function(ya,ua,r){r.r(ua);var pa=r(0),na=r(1);r.n(na);var ma=r(3),ka=r(170);ya=r(48);var ja=r(105),ha=r(278),aa=r(79),z=r(277);r=r(417);var n=window,f=function(){function h(e,w,x){var y=-1===e.indexOf("?")?"?":"&";switch(w){case aa.a.NEVER_CACHE:this.url=e+y+"_="+Object(na.uniqueId)();break;default:this.url=e}this.Lf=x;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);this.request.setRequestHeader("X-Requested-With",
"XMLHttpRequest");this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=z.a.NOT_STARTED}h.prototype.start=function(e,w){var x=this,y=this,ca=this.request,ba;y.Dz=0;e&&Object.keys(e).forEach(function(fa){x.request.setRequestHeader(fa,e[fa])});w&&(this.request.withCredentials=w);this.YG=setInterval(function(){var fa=0===window.document.URL.indexOf("file:///");fa=200===ca.status||
fa&&0===ca.status;if(ca.readyState!==z.b.DONE||fa){try{ca.responseText}catch(ea){return}y.Dz<ca.responseText.length&&(ba=y.tqa())&&y.trigger(h.Events.DATA,[ba]);0===ca.readyState&&(clearInterval(y.YG),y.trigger(h.Events.DONE))}else clearInterval(y.YG),y.trigger(h.Events.DONE,["Error received return status "+ca.status])},1E3);this.request.send(null);this.status=z.a.STARTED};h.prototype.tqa=function(){var e=this.request,w=e.responseText;if(0!==w.length)if(this.Dz===w.length)clearInterval(this.YG),this.trigger(h.Events.DONE);
else return w=Math.min(this.Dz+3E6,w.length),e=n.wZ(e,this.Dz,!0,w),this.Dz=w,e};h.prototype.abort=function(){clearInterval(this.YG);var e=this;this.request.onreadystatechange=function(){Object(ma.j)("StreamingRequest aborted");e.status=z.a.ABORTED;return e.trigger(h.Events.ABORTED)};this.request.abort()};h.prototype.finish=function(){var e=this;this.request.onreadystatechange=function(){e.status=z.a.SUCCESS;return e.trigger(h.Events.DONE)};this.request.abort()};h.Events={DONE:"done",DATA:"data",
ABORTED:"aborted"};return h}();Object(ya.a)(f);var a;(function(h){h[h.LOCAL_HEADER=0]="LOCAL_HEADER";h[h.FILE=1]="FILE";h[h.CENTRAL_DIR=2]="CENTRAL_DIR"})(a||(a={}));var b=function(h){function e(){var w=h.call(this)||this;w.buffer="";w.state=a.LOCAL_HEADER;w.bR=4;w.mn=null;w.pv=ka.c;w.Xo={};return w}Object(pa.c)(e,h);e.prototype.mqa=function(w){var x;for(w=this.buffer+w;w.length>=this.pv;)switch(this.state){case a.LOCAL_HEADER:this.mn=x=this.xqa(w.slice(0,this.pv));if(x.Yv!==ka.g)throw Error("Wrong signature in local header: "+
x.Yv);w=w.slice(this.pv);this.state=a.FILE;this.pv=x.LK+x.Yr+x.ny+this.bR;this.trigger(e.Events.HEADER,[x]);break;case a.FILE:this.mn.name=w.slice(0,this.mn.Yr);this.Xo[this.mn.name]=this.mn;x=this.pv-this.bR;var y=w.slice(this.mn.Yr+this.mn.ny,x);this.trigger(e.Events.FILE,[this.mn.name,y,this.mn.dL]);w=w.slice(x);if(w.slice(0,this.bR)===ka.h)this.state=a.LOCAL_HEADER,this.pv=ka.c;else return this.state=a.CENTRAL_DIR,!0}this.buffer=w;return!1};e.Events={HEADER:"header",FILE:"file"};return e}(ha.a);
Object(ya.a)(b);ya=function(h){function e(w,x,y,ca,ba){y=h.call(this,w,y,ca)||this;y.url=w;y.stream=new f(w,x);y.Ud=new b;y.l2=window.createPromiseCapability();y.U2={};y.Lf=ba;return y}Object(pa.c)(e,h);e.prototype.CA=function(w){var x=this;this.request([this.gk,this.Ql,this.fk]);this.stream.addEventListener(f.Events.DATA,function(y){try{if(x.Ud.mqa(y))return x.stream.finish()}catch(ca){throw x.stream.abort(),x.kr(ca),w(ca),ca;}});this.stream.addEventListener(f.Events.DONE,function(y){x.Qpa=!0;x.l2.resolve();
y&&(x.kr(y),w(y))});this.Ud.addEventListener(b.Events.HEADER,Object(na.bind)(this.T2,this));this.Ud.addEventListener(b.Events.FILE,Object(na.bind)(this.Nqa,this));return this.stream.start(this.Lf,this.withCredentials)};e.prototype.sZ=function(w){var x=this;this.l2.promise.then(function(){w(Object.keys(x.Ud.Xo))})};e.prototype.Hp=function(){return!0};e.prototype.request=function(w){var x=this;this.Qpa&&w.forEach(function(y){x.U2[y]||x.jwa(y)})};e.prototype.T2=function(){};e.prototype.abort=function(){this.stream&&
this.stream.abort()};e.prototype.jwa=function(w){this.trigger(ja.a.Events.PART_READY,[{qb:w,error:"Requested part not found",nj:!1,Hg:!1}])};e.prototype.Nqa=function(w,x,y){this.U2[w]=!0;this.trigger(ja.a.Events.PART_READY,[{qb:w,data:x,nj:!1,Hg:!1,error:null,wd:y}])};return e}(ja.a);Object(r.a)(ya);Object(r.b)(ya);ua["default"]=ya}}]);}).call(this || window)
