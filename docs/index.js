!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},function(t,e){t.exports=React},function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.r(e),n.d(e,"default",function(){return r})},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.reset=e.getId=e.unregister=e.register=e.getStore=e.createStore=e.dispatch=void 0;var o=r(n(14)),i=r(n(4)),u=r(n(6)),a=r(n(9)),c=r(n(7)),s=r(n(2)),f=r(n(8)),l=r(n(5)),d=r(n(15)),p=d.default.dispatch,h=d.default.createStore,v=d.default.getStore,y=d.default.register,b=d.default.unregister,m=d.default.getId,g=d.default.reset;e.reset=g,e.getId=m,e.unregister=b,e.register=y,e.getStore=v,e.createStore=h,e.dispatch=p;try{var _=n(1);e.connect=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=m();return function(t){return function(n){function d(){var t,n;(0,i.default)(this,d);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return n=(0,a.default)(this,(t=(0,c.default)(d)).call.apply(t,[this].concat(o))),(0,l.default)((0,s.default)(n),"state",{props:v(e)}),n}return(0,f.default)(d,n),(0,u.default)(d,[{key:"componentDidMount",value:function(){var t=this;y(r,function(n){e.filter(function(t){return n.includes(t)}).length&&t.setState({props:v(e)})})}},{key:"componentWillUnmount",value:function(){b(r)}},{key:"render",value:function(){var e=this.state.props;return _.createElement(t,(0,o.default)({},this.props,e,{dispatch:p}))}}]),d}(_.Component)}}}catch(t){}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.r(e),n.d(e,"default",function(){return r})},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e),n.d(e,"default",function(){return r})},function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.r(e),n.d(e,"default",function(){return o})},function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e),n.d(e,"default",function(){return r})},function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.r(e),n.d(e,"default",function(){return o})},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.r(e);var i=n(2);function u(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?Object(i.default)(t):e}n.d(e,"default",function(){return u})},function(t,e){t.exports=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}},function(t,e,n){t.exports=n(12)},function(t,e,n){"use strict";var r=n(0),o=r(n(1)),i=n(13),u=n(3),a=r(n(22)),c=r(n(23)),s=r(n(24));n(25),(0,u.createStore)({name:"nycticorax",number:7,another:void 0,other:null,a:{b:2,s:1},b:[1,2]}),(0,u.dispatch)(function(t,e,n){var r=e().name;t({name:"----"}),setTimeout(function(){t({name:"===="}),n(r)},1e3)}).then(function(){return(0,u.dispatch)({number:70,other:"4"})}).then(function(){return(0,u.dispatch)({a:{s:1,b:2},b:[1,2]})}),(0,i.render)(o.default.createElement("div",{className:"root"},o.default.createElement(a.default,{test:"test"}),o.default.createElement(c.default,null),o.default.createElement(s.default,null)),document.querySelector("#root"))},function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.r(e),n.d(e,"default",function(){return r})},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(4)),i=r(n(5)),u=r(n(16)),a=r(n(19)),c=r(n(20)),s=r(n(21)),f=new function t(){var e=this;(0,o.default)(this,t),(0,i.default)(this,"strict",!1),(0,i.default)(this,"index",0),(0,i.default)(this,"store",{}),(0,i.default)(this,"listeners",{}),(0,i.default)(this,"ignores",[]),(0,i.default)(this,"getId",function(){return e.index+=1,e.index}),(0,i.default)(this,"createStore",function(t){if("object"!==(0,a.default)(t))throw new Error("Store data must be object");e.store=t,e.strict=!0,e.ignores=Object.keys(t).filter(function(e){return void 0===t[e]||null===t[e]})}),(0,i.default)(this,"register",function(t,n){if("function"!==(0,a.default)(n))throw new Error("Listener must be function");e.listeners[t]=n}),(0,i.default)(this,"unregister",function(t){delete e.listeners[t]}),(0,i.default)(this,"dispatch",function(t){var n=(0,a.default)(t);if("function"===n)return new Promise(function(n){t(e.dispatch,function(){return e.store},n)});if("object"===n){for(var r=Object.keys(t),o=[],i=0;i<r.length;i+=1){var c=r[i];if(e.strict){if(!(c in e.store))throw new Error("Dispatch key not exist: '".concat(c,"'"));if(!e.ignores.includes(c)&&(0,a.default)(e.store[c])!==(0,a.default)(t[c]))throw new Error("Dispatch key type mismatch: '".concat(c,"'"))}(0,u.default)(e.store[c],t[c])?(0,s.default)("Dispatch same value: '".concat(c,"'")):(e.store[c]=t[c],o.push(c))}return o.length?Object.keys(e.listeners).forEach(function(t){e.listeners[t](o)}):(0,s.default)("Dispatch values same width store, listeners will not trigger",t),Promise.resolve()}throw new Error("Dispatch type error, must be function or object")}),(0,i.default)(this,"getStore",function(t){if(!t)return(0,c.default)(e.store);for(var n={},r=0;r<t.length;r+=1){var o=t[r];if(e.strict&&!(o in e.store))throw new Error("Store key no exist: '".concat(o,"'"));n[o]=e.store[o]}return(0,c.default)(n)}),(0,i.default)(this,"reset",function(){e.store={},e.strict=!1,e.listeners={},e.index=0,e.ignores=[]})};e.default=f},function(t,e,n){(function(t,n){var r=200,o="__lodash_hash_undefined__",i=1,u=2,a=9007199254740991,c="[object Arguments]",s="[object Array]",f="[object AsyncFunction]",l="[object Boolean]",d="[object Date]",p="[object Error]",h="[object Function]",v="[object GeneratorFunction]",y="[object Map]",b="[object Number]",m="[object Null]",g="[object Object]",_="[object Proxy]",j="[object RegExp]",w="[object Set]",O="[object String]",A="[object Symbol]",x="[object Undefined]",S="[object ArrayBuffer]",E="[object DataView]",k=/^\[object .+?Constructor\]$/,C=/^(?:0|[1-9]\d*)$/,P={};P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P[c]=P[s]=P[S]=P[l]=P[E]=P[d]=P[p]=P[h]=P[y]=P[b]=P[g]=P[j]=P[w]=P[O]=P["[object WeakMap]"]=!1;var M="object"==typeof t&&t&&t.Object===Object&&t,U="object"==typeof self&&self&&self.Object===Object&&self,B=M||U||Function("return this")(),z=e&&!e.nodeType&&e,L=z&&"object"==typeof n&&n&&!n.nodeType&&n,R=L&&L.exports===z,T=R&&M.process,I=function(){try{return T&&T.binding&&T.binding("util")}catch(t){}}(),D=I&&I.isTypedArray;function N(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function $(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function F(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var q,J,W,Y=Array.prototype,G=Function.prototype,H=Object.prototype,V=B["__core-js_shared__"],Z=G.toString,K=H.hasOwnProperty,Q=(q=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=H.toString,tt=RegExp("^"+Z.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=R?B.Buffer:void 0,nt=B.Symbol,rt=B.Uint8Array,ot=H.propertyIsEnumerable,it=Y.splice,ut=nt?nt.toStringTag:void 0,at=Object.getOwnPropertySymbols,ct=et?et.isBuffer:void 0,st=(J=Object.keys,W=Object,function(t){return J(W(t))}),ft=It(B,"DataView"),lt=It(B,"Map"),dt=It(B,"Promise"),pt=It(B,"Set"),ht=It(B,"WeakMap"),vt=It(Object,"create"),yt=Ft(ft),bt=Ft(lt),mt=Ft(dt),gt=Ft(pt),_t=Ft(ht),jt=nt?nt.prototype:void 0,wt=jt?jt.valueOf:void 0;function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function At(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function xt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function St(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new xt;++e<n;)this.add(t[e])}function Et(t){var e=this.__data__=new At(t);this.size=e.size}function kt(t,e){var n=Wt(t),r=!n&&Jt(t),o=!n&&!r&&Yt(t),i=!n&&!r&&!o&&Kt(t),u=n||r||o||i,a=u?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=a.length;for(var s in t)!e&&!K.call(t,s)||u&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||$t(s,c))||a.push(s);return a}function Ct(t,e){for(var n=t.length;n--;)if(qt(t[n][0],e))return n;return-1}function Pt(t){return null==t?void 0===t?x:m:ut&&ut in Object(t)?function(t){var e=K.call(t,ut),n=t[ut];try{t[ut]=void 0;var r=!0}catch(t){}var o=X.call(t);r&&(e?t[ut]=n:delete t[ut]);return o}(t):function(t){return X.call(t)}(t)}function Mt(t){return Zt(t)&&Pt(t)==c}function Ut(t,e,n,r,o){return t===e||(null==t||null==e||!Zt(t)&&!Zt(e)?t!=t&&e!=e:function(t,e,n,r,o,a){var f=Wt(t),h=Wt(e),v=f?s:Nt(t),m=h?s:Nt(e),_=(v=v==c?g:v)==g,x=(m=m==c?g:m)==g,k=v==m;if(k&&Yt(t)){if(!Yt(e))return!1;f=!0,_=!1}if(k&&!_)return a||(a=new Et),f||Kt(t)?Lt(t,e,n,r,o,a):function(t,e,n,r,o,a,c){switch(n){case E:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case S:return!(t.byteLength!=e.byteLength||!a(new rt(t),new rt(e)));case l:case d:case b:return qt(+t,+e);case p:return t.name==e.name&&t.message==e.message;case j:case O:return t==e+"";case y:var s=$;case w:var f=r&i;if(s||(s=F),t.size!=e.size&&!f)return!1;var h=c.get(t);if(h)return h==e;r|=u,c.set(t,e);var v=Lt(s(t),s(e),r,o,a,c);return c.delete(t),v;case A:if(wt)return wt.call(t)==wt.call(e)}return!1}(t,e,v,n,r,o,a);if(!(n&i)){var C=_&&K.call(t,"__wrapped__"),P=x&&K.call(e,"__wrapped__");if(C||P){var M=C?t.value():t,U=P?e.value():e;return a||(a=new Et),o(M,U,n,r,a)}}if(!k)return!1;return a||(a=new Et),function(t,e,n,r,o,u){var a=n&i,c=Rt(t),s=c.length,f=Rt(e).length;if(s!=f&&!a)return!1;for(var l=s;l--;){var d=c[l];if(!(a?d in e:K.call(e,d)))return!1}var p=u.get(t);if(p&&u.get(e))return p==e;var h=!0;u.set(t,e),u.set(e,t);for(var v=a;++l<s;){d=c[l];var y=t[d],b=e[d];if(r)var m=a?r(b,y,d,e,t,u):r(y,b,d,t,e,u);if(!(void 0===m?y===b||o(y,b,n,r,u):m)){h=!1;break}v||(v="constructor"==d)}if(h&&!v){var g=t.constructor,_=e.constructor;g!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof _&&_ instanceof _)&&(h=!1)}return u.delete(t),u.delete(e),h}(t,e,n,r,o,a)}(t,e,n,r,Ut,o))}function Bt(t){return!(!Vt(t)||(e=t,Q&&Q in e))&&(Gt(t)?tt:k).test(Ft(t));var e}function zt(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||H,e!==r)return st(t);var e,n,r,o=[];for(var i in Object(t))K.call(t,i)&&"constructor"!=i&&o.push(i);return o}function Lt(t,e,n,r,o,a){var c=n&i,s=t.length,f=e.length;if(s!=f&&!(c&&f>s))return!1;var l=a.get(t);if(l&&a.get(e))return l==e;var d=-1,p=!0,h=n&u?new St:void 0;for(a.set(t,e),a.set(e,t);++d<s;){var v=t[d],y=e[d];if(r)var b=c?r(y,v,d,e,t,a):r(v,y,d,t,e,a);if(void 0!==b){if(b)continue;p=!1;break}if(h){if(!N(e,function(t,e){if(i=e,!h.has(i)&&(v===t||o(v,t,n,r,a)))return h.push(e);var i})){p=!1;break}}else if(v!==y&&!o(v,y,n,r,a)){p=!1;break}}return a.delete(t),a.delete(e),p}function Rt(t){return function(t,e,n){var r=e(t);return Wt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Qt,Dt)}function Tt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function It(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Bt(n)?n:void 0}Ot.prototype.clear=function(){this.__data__=vt?vt(null):{},this.size=0},Ot.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ot.prototype.get=function(t){var e=this.__data__;if(vt){var n=e[t];return n===o?void 0:n}return K.call(e,t)?e[t]:void 0},Ot.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:K.call(e,t)},Ot.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=vt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[],this.size=0},At.prototype.delete=function(t){var e=this.__data__,n=Ct(e,t);return!(n<0||(n==e.length-1?e.pop():it.call(e,n,1),--this.size,0))},At.prototype.get=function(t){var e=this.__data__,n=Ct(e,t);return n<0?void 0:e[n][1]},At.prototype.has=function(t){return Ct(this.__data__,t)>-1},At.prototype.set=function(t,e){var n=this.__data__,r=Ct(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},xt.prototype.clear=function(){this.size=0,this.__data__={hash:new Ot,map:new(lt||At),string:new Ot}},xt.prototype.delete=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},xt.prototype.get=function(t){return Tt(this,t).get(t)},xt.prototype.has=function(t){return Tt(this,t).has(t)},xt.prototype.set=function(t,e){var n=Tt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},St.prototype.add=St.prototype.push=function(t){return this.__data__.set(t,o),this},St.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.clear=function(){this.__data__=new At,this.size=0},Et.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var n=this.__data__;if(n instanceof At){var o=n.__data__;if(!lt||o.length<r-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new xt(o)}return n.set(t,e),this.size=n.size,this};var Dt=at?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var u=t[n];e(u,n,t)&&(i[o++]=u)}return i}(at(t),function(e){return ot.call(t,e)}))}:function(){return[]},Nt=Pt;function $t(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||C.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,e){return t===e||t!=t&&e!=e}(ft&&Nt(new ft(new ArrayBuffer(1)))!=E||lt&&Nt(new lt)!=y||dt&&"[object Promise]"!=Nt(dt.resolve())||pt&&Nt(new pt)!=w||ht&&"[object WeakMap]"!=Nt(new ht))&&(Nt=function(t){var e=Pt(t),n=e==g?t.constructor:void 0,r=n?Ft(n):"";if(r)switch(r){case yt:return E;case bt:return y;case mt:return"[object Promise]";case gt:return w;case _t:return"[object WeakMap]"}return e});var Jt=Mt(function(){return arguments}())?Mt:function(t){return Zt(t)&&K.call(t,"callee")&&!ot.call(t,"callee")},Wt=Array.isArray;var Yt=ct||function(){return!1};function Gt(t){if(!Vt(t))return!1;var e=Pt(t);return e==h||e==v||e==f||e==_}function Ht(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}function Vt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Zt(t){return null!=t&&"object"==typeof t}var Kt=D?function(t){return function(e){return t(e)}}(D):function(t){return Zt(t)&&Ht(t.length)&&!!P[Pt(t)]};function Qt(t){return null!=(e=t)&&Ht(e.length)&&!Gt(e)?kt(t):zt(t);var e}n.exports=function(t,e){return Ut(t,e)}}).call(this,n(17),n(18)(t))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(30)),i=/\[object (.*?)\]/;e.default=function(t){var e=Object.prototype.toString.call(t).match(i)||[],n=(0,o.default)(e,2)[1];return(void 0===n?"":n).toLowerCase()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function(t){return JSON.parse(JSON.stringify(t))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t;window.console&&window.console.warn&&(t=window.console).warn.apply(t,arguments)}},function(t,e,n){"use strict";var r=n(10),o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n(4)),u=o(n(6)),a=o(n(9)),c=o(n(7)),s=o(n(2)),f=o(n(8)),l=o(n(5)),d=r(n(1)),p=n(3);var h=function(t){function e(){var t,n;(0,i.default)(this,e);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return n=(0,a.default)(this,(t=(0,c.default)(e)).call.apply(t,[this].concat(o))),(0,l.default)((0,s.default)(n),"onClick",function(){n.props.dispatch({number:1})}),(0,l.default)((0,s.default)(n),"onAsync",function(){n.props.dispatch(function(t,e,n){var r=e().name;t({name:"tttt"}),setTimeout(function(){t({name:r+"????"}),n(r)},1e3)}).then(function(t){return console.log(t)})}),n}return(0,f.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){console.log("A",this.props)}},{key:"render",value:function(){var t=this.props.name;return d.default.createElement("div",null,d.default.createElement("h2",null,"Component A"),d.default.createElement("p",null,"name: ",t),d.default.createElement("p",null,"Click to change value: Number"),d.default.createElement("button",{onClick:this.onClick},"set Number 1"),d.default.createElement("button",{onClick:this.onAsync},"Async"))}}]),e}(d.Component),v=(0,p.connect)("name")(h);e.default=v},function(t,e,n){"use strict";var r=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(1));var i=(0,n(3).connect)("number")(function(t){var e=t.number;return o.default.createElement("div",null,o.default.createElement("h2",null,"Component B"),o.default.createElement("p",null,"Number is ",e))});e.default=i},function(t,e,n){"use strict";var r=n(10),o=n(0);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n(4)),u=o(n(6)),a=o(n(9)),c=o(n(7)),s=o(n(2)),f=o(n(8)),l=o(n(5)),d=r(n(1)),p=n(3),h=function(t){function e(){var t,n;(0,i.default)(this,e);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return n=(0,a.default)(this,(t=(0,c.default)(e)).call.apply(t,[this].concat(o))),(0,l.default)((0,s.default)(n),"onClick",function(){n.props.dispatch({name:"bkbk"})}),n}return(0,f.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){var t=(0,p.getId)();(0,p.register)(t,function(t){console.log(t),console.log((0,p.getStore)())})}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("h2",null,"Component C"),d.default.createElement("button",{onClick:this.onClick},"set value name bkbk"))}}]),e}(d.Component),v=(0,p.connect)()(h);e.default=v},function(t,e,n){var r=n(26);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(28)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(27)(!0)).push([t.i,".root {\n  margin: 30px;\n}\n.root div {\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  margin: 10px;\n  padding: 20px;\n}\n","",{version:3,sources:["/Users/am0200/Documents/github/nycticorax/demo/index.less"],names:[],mappings:"AAAA;EACE,YAAY;AACd;AACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,wCAAwC;EACxC,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf",file:"index.less",sourcesContent:[".root {\n  margin: 30px;\n}\n.root div {\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  margin: 10px;\n  padding: 20px;\n}\n"],sourceRoot:""}])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(u=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var u;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];null!=u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},function(t,e,n){var r,o,i={},u=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,s=0,f=[],l=n(29);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(m(r.parts[u],e))}else{var a=[];for(u=0;u<r.parts.length;u++)a.push(m(r.parts[u],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(a):n.push(r[u]={id:u,parts:[a]})}return n}function h(t,e){var n=a(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,n);n.insertBefore(e,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),h(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function m(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var u=s++;n=c||(c=y(e)),r=j.bind(null,n,u,!1),o=j.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(u),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){v(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=u()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var u=n[o];(a=i[u.id]).refs--,r.push(a)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var g,_=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function j(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.r(e),n.d(e,"default",function(){return r})}]);
//# sourceMappingURL=index.js.map