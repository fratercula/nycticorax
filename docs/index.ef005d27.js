!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.connect=t.subscribe=t.getStore=t.createStore=t.dispatch=void 0;var r=i(n(5)),o=i(n(10));function i(e){return e&&e.__esModule?e:{default:e}}var{dispatch:a,createStore:u,getStore:s,subscribe:c}=new r.default;t.subscribe=c,t.getStore=s,t.createStore=u,t.dispatch=a;var l=(0,o.default)({dispatch:a,getStore:s,subscribe:c});t.connect=l;class f extends r.default{constructor(){super(),this.connect=(0,o.default)(this)}}t.default=f},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";var r=l(n(0)),o=n(4),i=n(1),a=l(n(11)),u=l(n(12)),s=l(n(13)),c=l(n(14));function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n,r,o,i,a){try{var u=e[i](a),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}function d(){var e;return e=function*(e){var{dispatch:t,getStore:n}=e;yield new Promise(e=>setTimeout(e,1e3));var{name:r}=n();return t({name:"lorem"}),yield new Promise(e=>setTimeout(e,1e3)),t({name:"ipsum"}),r},(d=function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){f(i,r,o,a,u,"next",e)}function u(e){f(i,r,o,a,u,"throw",e)}a(void 0)}))}).apply(this,arguments)}n(15),(0,i.createStore)({name:"nycticorax",number:7,another:void 0,other:null,a:{b:2,s:1},b:[1,2]}),(0,i.dispatch)((function(e){return d.apply(this,arguments)})).then(e=>{console.log(e),(0,i.dispatch)({number:70,other:"4"}),(0,i.dispatch)({a:{s:1,b:2},b:[1,2]})}),(0,o.render)(r.default.createElement("div",{className:"root"},r.default.createElement(a.default,{test:"test"}),r.default.createElement(u.default,null),r.default.createElement(s.default,null),r.default.createElement(c.default,null)),document.querySelector("#root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(6)),o=u(n(7)),i=u(n(8)),a=u(n(9));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=class{constructor(){var e=this;l(this,"strict",!1),l(this,"store",{}),l(this,"listeners",[]),l(this,"ignores",[]),l(this,"timer",null),l(this,"emits",{}),l(this,"createStore",e=>{if("object"!==(0,o.default)(e))throw new Error("Store data must be object");if(!Object.keys(e).length)throw new Error("Store data should not be empty");this.store=e,this.strict=!0,this.ignores=Object.keys(e).filter(t=>void 0===e[t])}),l(this,"subscribe",e=>{if(!(0,o.default)(e).includes("function"))throw new Error("Listener must be function");return this.listeners.push(e),()=>{var t=this.listeners.slice(),n=t.indexOf(e);n>-1&&t.splice(n,1),this.listeners=t}}),l(this,"dispatch",(function(t){for(var n=(0,o.default)(t),r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];if(n.includes("function"))return t({dispatch:t=>e.dispatch(t,!0),getStore:e.getStore},...i);if("object"===n)return e.emits=c({},e.emits,{},t),void(i[0]?e.emit():(clearTimeout(e.timer),e.timer=setTimeout(e.emit)));throw new Error("Dispatch type error, must be function or object")})),l(this,"emit",()=>{for(var e=this.emits,t=Object.keys(e),n=[],i=0;i<t.length;i+=1){var u=t[i];if(this.strict){if(!(u in this.store)){(0,a.default)("Dispatch key not exist: '".concat(u,"'"));continue}if(!this.ignores.includes(u)&&(0,o.default)(this.store[u])!==(0,o.default)(e[u])){(0,a.default)("Dispatch key type mismatch: '".concat(u,"'"));continue}}(0,r.default)(this.store[u],e[u])?(0,a.default)("Dispatch key width same value: '".concat(u,"'")):(this.store[u]=e[u],n.push(u))}n.length?this.listeners.forEach(e=>{e(n)}):(0,a.default)("Dispatch same keys and values, listeners will not be triggered",e),this.emits={},this.timer=null}),l(this,"getStore",()=>(0,i.default)(this.store))}}},function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var a=i[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=/\[object (.*?)\]/;t.default=e=>{var[,t=""]=Object.prototype.toString.call(e).match(r)||[];return t.toLowerCase()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=e=>JSON.parse(JSON.stringify(e))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0}},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=["name","prototype","length","propTypes","defaultProps"];t.default=e=>{var t,{getStore:a,subscribe:u,dispatch:s}=e;try{t=n(0)}catch(e){return}return function(){for(var e=arguments.length,n=new Array(e),c=0;c<e;c++)n[c]=arguments[c];return e=>{class c extends t.Component{constructor(){super(...arguments),o(this,"state",{props:a(...n)})}componentDidMount(){this.unsubscribe=u(e=>{n.filter(t=>e.includes(t)).length&&this.setState({props:a(...n)})})}componentWillUnmount(){this.unsubscribe()}render(){var{props:n}=this.state;return t.createElement(e,r({dispatch:s},n,this.props))}}return Object.getOwnPropertyNames(e).forEach(t=>{i.includes(t)||(c[t]=e[t])}),c}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=n(1);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var{dispatch:t,getStore:n}=e,r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return console.log(o),new Promise(e=>{var{name:r,number:o}=n();setTimeout(()=>{t({number:o+1}),t({name:"".concat(r,"a")}),e(r)},1e3)})}class s extends r.Component{constructor(){super(...arguments),a(this,"onAsync",()=>{this.props.dispatch(u,"a","b").then(e=>console.log(e))})}componentDidMount(){console.log("A",this.props)}render(){var{name:e}=this.props;return r.default.createElement("div",null,r.default.createElement("h2",null,"Component A"),r.default.createElement("p",null,"name: ",e),r.default.createElement("input",{type:"number",onInput:e=>this.props.dispatch({number:Number(e.target.value)}),placeholder:"input number"}),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("button",{onClick:this.onAsync},"async dispatch"))}}a(s,"s",()=>"s");var c=(0,o.connect)("name")(s);t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(0))&&r.__esModule?r:{default:r};var i=(0,n(1).connect)("number")((function(e){var{number:t,dispatch:n}=e;return o.default.createElement("div",null,o.default.createElement("h2",null,"Component B"),o.default.createElement("p",null,"number: ",t),o.default.createElement("input",{onInput:e=>n({name:e.target.value}),placeholder:"input text"}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement("button",{onClick:()=>{n({name:"nyc"},"sync"),n({number:101},"sync")}},"sync dispatch"))}));t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=n(1);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class u extends r.Component{constructor(){super(...arguments),a(this,"state",{current:"dispatch keys:"}),a(this,"unsubscribe",null),a(this,"subscribe",()=>{null===this.unsubscribe&&(this.unsubscribe=(0,o.subscribe)(e=>{this.setState({current:"dispatch keys: ".concat(e.join(", "))})}))}),a(this,"onClick",()=>{this.props.dispatch({name:Math.random()+""}),this.props.dispatch({number:Math.random()})})}componentDidMount(){this.subscribe()}render(){return r.default.createElement("div",null,r.default.createElement("h2",null,"Component C"),r.default.createElement("p",null,"name: ",this.props.name),r.default.createElement("button",{onClick:this.onClick},"combine"),r.default.createElement("p",{className:"current"},this.state.current),r.default.createElement("button",{onClick:this.subscribe},"subscribe"),r.default.createElement("button",{onClick:()=>{this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)}},"unsubscribe"))}}var s=(0,o.connect)("name")(u);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var{createStore:a,connect:u}=new o.default;a({name:"xyz"});var s=u("name")((function(e){var{dispatch:t,name:n}=e;return r.default.createElement("div",null,r.default.createElement("h2",null,"Component X, different instance "),r.default.createElement("p",null,"name: ",n),r.default.createElement("input",{placeholder:"input text",onInput:e=>t({name:e.target.value,s:1})}))}));t.default=s},function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(18)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(17)(!0)).push([e.i,".root {\n  margin: 30px;\n}\n.root div {\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  margin: 10px;\n  padding: 20px;\n}\n.current {\n  background: #eee;\n  padding: 20px;\n  border-radius: 5px;\n}\n","",{version:3,sources:["/Users/am0200/Documents/github/nycticorax/demo/index.less","index.less"],names:[],mappings:"AAAA;EACE,YAAA;ACCF;ADFA;EAII,qBAAA;EACA,mBAAA;EACA,gBAAA;EACA,sCAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;ACCJ;ADGA;EACE,gBAAA;EACA,aAAA;EACA,kBAAA;ACDF",file:"index.less",sourcesContent:[".root {\n  margin: 30px;\n\n  div {\n    display: inline-block;\n    vertical-align: top;\n    background: #fff;\n    box-shadow: 0 0 5px rgba(0, 0, 0, .2);\n    border-radius: 5px;\n    margin: 10px;\n    padding: 20px;\n  }\n}\n\n.current {\n  background: #eee;\n  padding: 20px;\n  border-radius: 5px;\n}\n",".root {\n  margin: 30px;\n}\n.root div {\n  display: inline-block;\n  vertical-align: top;\n  background: #fff;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  margin: 10px;\n  padding: 20px;\n}\n.current {\n  background: #eee;\n  padding: 20px;\n  border-radius: 5px;\n}\n"]}])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(e,t){return t?t.querySelector(e):document.querySelector(e)},s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=u.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,f=[],d=n(19);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var u=[];for(a=0;a<r.parts.length;a++)u.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:u}}}}function b(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=l++;n=c||(c=v(t)),r=j.bind(null,n,a,!1),o=j.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=x.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=w.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=b(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(u=i[a.id]).refs--,r.push(u)}e&&p(b(e,t),t);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}};var O,A=(O=[],function(e,t){return O[e]=t,O.filter(Boolean).join("\n")});function j(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=A(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function w(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function x(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}]);
//# sourceMappingURL=index.ef005d27.js.map