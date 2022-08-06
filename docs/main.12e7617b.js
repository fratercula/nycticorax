(()=>{"use strict";var t,e={269:(t,e,n)=>{var r=n(294),o=n(935),i=n(63),a=n.n(i);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const l=class{constructor(){c(this,"state",void 0),c(this,"listeners",void 0),c(this,"emits",void 0),c(this,"timer",void 0),c(this,"createStore",(t=>{this.state=t})),c(this,"getStore",(()=>{var t=Reflect.ownKeys(this.state),e={};return t.forEach((t=>{var n=this.state[t];void 0!==n&&(e[t]=JSON.parse(JSON.stringify(n)))})),e})),c(this,"subscribe",(t=>(this.listeners.push(t),()=>{var e=this.listeners.slice(),n=e.indexOf(t);n>-1&&e.splice(n,1),this.listeners=e}))),c(this,"emit",((t,e)=>{this.emits=A(A({},this.emits),t),e?this.trigger():(clearTimeout(this.timer),this.timer=setTimeout(this.trigger))})),c(this,"dispatch",((t,e)=>t({getStore:this.getStore,emit:t=>this.emit(t,!0)},e))),c(this,"trigger",(()=>{for(var t=this.emits,e=[],n=Reflect.ownKeys(t),r=0;r<n.length;r+=1){var o=n[r];a()(this.state[o],t[o])||(this.state[o]=t[o],e.push(o))}e.length&&this.listeners.forEach((t=>t(e))),this.emits={},this.timer=void 0})),this.state={},this.listeners=[],this.emits={},this.timer=void 0}};function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=["name","prototype","length","propTypes","defaultProps","getDerivedStateFromProps","contextTypes","displayName"];function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=Symbol("key"),f=new class extends l{constructor(){super(...arguments),m(this,"connect",function(t){var{getStore:e,subscribe:n,dispatch:o,emit:i}=t;return function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return function(t){class s extends r.Component{constructor(t){super(t),p(this,"unsubscribe",void 0),p(this,"state",{props:e()}),this.unsubscribe=n((t=>{a.filter((e=>t.includes(e))).length&&this.setState({props:e()})}))}componentWillUnmount(){this.unsubscribe()}render(){var{props:e}=this.state,n=Object.assign({dispatch:o,emit:i},e,this.props);return r.createElement(t,n)}}return Object.getOwnPropertyNames(t).forEach((e=>{var n=e;u.includes(e)||(s[n]=t[n])})),s}}}(this)),m(this,"useStore",function(t){var{getStore:e,subscribe:n}=t;return function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];var[a,s]=(0,r.useState)(e());return(0,r.useLayoutEffect)((()=>n((t=>{o.filter((e=>t.includes(e))).length&&s(e())})))),a}}(this))}},{createStore:g,getStore:h,dispatch:b,subscribe:E,connect:v,useStore:x,emit:C}=f,y=n(379),O=n.n(y),w=n(933);O()(w.Z,{insert:"head",singleton:!1});const S=w.Z.locals||{};function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B(t,e,n,r,o,i,a){try{var s=t[i](a),A=s.value}catch(t){return void n(t)}s.done?e(A):Promise.resolve(A).then(r,o)}function k(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){B(i,r,o,a,s,"next",t)}function s(t){B(i,r,o,a,s,"throw",t)}a(void 0)}))}}function j(){var{name:t,age:e}=x("name","age");return r.createElement("div",{className:S.com},r.createElement("h2",null,"Hooks"),r.createElement("p",null,r.createElement("span",null,"name:"),t),r.createElement("p",null,r.createElement("span",null,"age:"),e),r.createElement("button",{type:"button",onClick:()=>{C({age:e+1,[d]:"b"})}},"Dispatch"))}g({age:0,name:"abc",[d]:"a"}),E((t=>{console.log("subscribe",t);var e=h();console.log(e[d]),"b"===e[d]&&(e[d]="aaaa")}));var _=function(){var t=k((function*(t,e){var{emit:n,getStore:r}=t;return yield new Promise((t=>setTimeout(t,2e3))),n({name:null==e?void 0:e.text}),r().name}));return function(e,n){return t.apply(this,arguments)}}(),D=function(){var t=k((function*(t){var{emit:e,getStore:n}=t,{age:r}=n();e({age:r+1})}));return function(e){return t.apply(this,arguments)}}();class N extends r.Component{constructor(){var t;super(...arguments),t=this,P(this,"state",{loading:!1}),P(this,"setName",k((function*(){var{loading:e}=t.state;if(!e){t.setState({loading:!0});var{emit:n,dispatch:r}=t.props;n({age:1}),yield r(_,{text:Math.random().toString(36).substring(7)}),t.setState({loading:!1}),console.log(h())}})))}render(){var{age:t,name:e,desc:n}=this.props,{loading:o}=this.state,i=o?S.loading:"";return r.createElement("div",{className:S.com},r.createElement("h2",null,n),r.createElement("p",null,r.createElement("span",null,"name:"),e),r.createElement("p",null,r.createElement("span",null,"age:"),t),r.createElement("button",{className:i,type:"button",onClick:this.setName},"Async Dispatch"))}}var F=v("age","name")(N),z=v("age","name")((function(t){var{age:e,name:n,dispatch:o,desc:i}=t;return r.createElement("div",{className:S.com},r.createElement("h2",null,i),r.createElement("p",null,r.createElement("span",null,"name:"),n),r.createElement("p",null,r.createElement("span",null,"age:"),e),r.createElement("button",{type:"button",onClick:()=>{o(D)}},"Dispatch"))}));function G(){return r.createElement(r.Fragment,null,r.createElement(j,null),r.createElement(F,{desc:"Class Component"}),r.createElement(z,{desc:"Function Component"}))}var T=new l,{createStore:U,getStore:I,dispatch:W,subscribe:Z,emit:L}=T;function R(t,e,n,r,o,i,a){try{var s=t[i](a),A=s.value}catch(t){return void n(t)}s.done?e(A):Promise.resolve(A).then(r,o)}function q(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){R(i,r,o,a,s,"next",t)}function s(t){R(i,r,o,a,s,"throw",t)}a(void 0)}))}}const H=()=>((0,r.useEffect)((()=>{U({config:{type:"page",on:!1},time:11,test:void 0});var t=Z((t=>{console.log("subscribe",t)}));console.log("store0",I()),L({time:1}),L({config:{on:!0,type:"component"}}),console.log("store1",I()),setTimeout((()=>console.log("store2",I()))),L({time:2,test:"1111"},!0),console.log("store3",I()),W(function(){var t=q((function*(t,e){var{getStore:n,emit:r}=t;console.log("params0",e);var{time:o}=n();r({time:o+1})}));return function(e,n){return t.apply(this,arguments)}}(),{a:1});var e=function(){var t=q((function*(t,e){var{getStore:n,emit:r}=t;console.log("params1",e),yield new Promise((t=>setTimeout(t,1e3)));var{config:o}=n();"boolean"==typeof(null==e?void 0:e.type)&&(o.on=e.type),r({config:o})}));return function(e,n){return t.apply(this,arguments)}}(),n=function(){var t=q((function*(t){var{getStore:e}=t,{config:n}=e();return console.log(n),1}));return function(e){return t.apply(this,arguments)}}();W(e,{type:!1}),W(n).then((()=>{console.log("2"),L({time:1e3})})),t()}),[]),null);(0,o.render)(r.createElement("div",{className:S.container},r.createElement("div",{className:S.co},r.createElement(G,null)),r.createElement("div",{className:S.ru},r.createElement(H,null))),document.querySelector("#root"))},933:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(15),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"@keyframes spin_XmCvh {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.container_GSuNg {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n.right_tGsPZ {\n  border-left: 1px solid #eee;\n  padding: 20px;\n  white-space: pre;\n}\n.right_tGsPZ h2 {\n  margin: 0 0 0 5px;\n  font-size: 16px;\n  color: #10f108;\n  padding: 3px 7px;\n  font-weight: normal;\n  background: #242425;\n  border-radius: 2px;\n  display: inline-block;\n}\n.co_Onwr7 {\n  display: flex;\n  padding: 20px;\n}\n.com_55xUi {\n  border: 1px solid #eee;\n  padding: 20px;\n  flex: 1;\n  border-radius: 2px;\n}\n.com_55xUi:nth-child(2) {\n  margin: 0 20px;\n}\n.com_55xUi h2 {\n  font-size: 24px;\n  margin: 0;\n  font-weight: 400;\n  color: #333;\n  margin-bottom: 30px;\n}\n.com_55xUi button {\n  margin-top: 20px;\n  font-size: 14px;\n  color: #fff;\n  background: #0170fe;\n  padding: 4px 10px;\n  border-radius: 3px;\n  border: 1px solid #0170fe;\n  cursor: pointer;\n  position: relative;\n}\n.com_55xUi button.loading_nIjEz {\n  padding-left: 24px;\n}\n.com_55xUi button.loading_nIjEz::before {\n  content: '';\n  position: absolute;\n  left: 4px;\n  top: 4px;\n  border: 2px solid #f3f3f3;\n  border-top: 2px solid #3498db;\n  border-radius: 50%;\n  width: 12px;\n  height: 12px;\n  animation: spin_XmCvh 2s linear infinite;\n}\n.com_55xUi p {\n  font-size: 16px;\n  color: #555;\n  margin: 10px 0;\n}\n.com_55xUi p span {\n  color: #888;\n  margin-right: 5px;\n}\nbody {\n  margin: 0;\n  font-family: Georgia, 'Times New Roman', Times, serif;\n}\n","",{version:3,sources:["webpack://./demo/index.less"],names:[],mappings:"AAAA;EACE;IAAK,uBAAA;EAEL;EADA;IAAO,yBAAA;EAIP;AACF;AAFA;EACC,aAAA;EACA,sBAAA;EACA,aAAA;AAID;AADA;EACC,2BAAA;EACA,aAAA;EACA,gBAAA;AAGD;AANA;EAME,iBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,kBAAA;EACA,qBAAA;AAGF;AACA;EACC,aAAA;EACA,aAAA;AACD;AAEA;EACC,sBAAA;EACA,aAAA;EACA,OAAA;EACA,kBAAA;AAAD;AAEC;EACC,cAAA;AAAF;AAPA;EAWE,eAAA;EACA,SAAA;EACA,gBAAA;EACA,WAAA;EACA,mBAAA;AADF;AAdA;EAmBE,gBAAA;EACA,eAAA;EACA,WAAA;EACE,mBAAA;EACF,iBAAA;EACA,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,kBAAA;AAFF;AAIE;EACC,kBAAA;AAFH;AAIG;EACC,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,yBAAA;EACC,6BAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,wCAAA;AAFL;AAxCA;EAgDE,eAAA;EACA,WAAA;EACA,cAAA;AALF;AA7CA;EAqDG,WAAA;EACA,iBAAA;AALH;AASA;EACC,SAAA;EACA,qDAAA;AAPD",sourcesContent:["@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100vh;\n}\n\n.right {\n\tborder-left: 1px solid #eee;\n\tpadding: 20px;\n\twhite-space: pre;\n\n\th2 {\n\t\tmargin: 0 0 0 5px;\n\t\tfont-size: 16px;\n\t\tcolor: #10f108;\n\t\tpadding: 3px 7px;\n\t\tfont-weight: normal;\n\t\tbackground: #242425;\n\t\tborder-radius: 2px;\n\t\tdisplay: inline-block;\n\t}\n}\n\n.co {\n\tdisplay: flex;\n\tpadding: 20px;\n}\n\n.com {\n\tborder: 1px solid #eee;\n\tpadding: 20px;\n\tflex: 1;\n\tborder-radius: 2px;\n\n\t&:nth-child(2) {\n\t\tmargin: 0 20px;\n\t}\n\n\th2 {\n\t\tfont-size: 24px;\n\t\tmargin: 0;\n\t\tfont-weight: 400;\n\t\tcolor: #333;\n\t\tmargin-bottom: 30px;\n\t}\n\n\tbutton {\n\t\tmargin-top: 20px;\n\t\tfont-size: 14px;\n\t\tcolor: #fff;\n    background: #0170fe;\n\t\tpadding: 4px 10px;\n\t\tborder-radius: 3px;\n\t\tborder: 1px solid #0170fe;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\n\t\t&.loading {\n\t\t\tpadding-left: 24px;\n\n\t\t\t&::before {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\tleft: 4px;\n\t\t\t\ttop: 4px;\n\t\t\t\tborder: 2px solid #f3f3f3;\n  \t\t\tborder-top: 2px solid #3498db;\n  \t\t\tborder-radius: 50%;\n  \t\t\twidth: 12px;\n  \t\t\theight: 12px;\n  \t\t\tanimation: spin 2s linear infinite;\n\t\t\t}\n\t\t}\n\t}\n\n\tp {\n\t\tfont-size: 16px;\n\t\tcolor: #555;\n\t\tmargin: 10px 0;\n\n\t\tspan {\n\t\t\tcolor: #888;\n\t\t\tmargin-right: 5px;\n\t\t}\n\t}\n}\nbody {\n\tmargin: 0;\n\tfont-family: Georgia, 'Times New Roman', Times, serif;\n}\n"],sourceRoot:""}]),a.locals={container:"container_GSuNg",right:"right_tGsPZ",co:"co_Onwr7",com:"com_55xUi",loading:"loading_nIjEz",spin:"spin_XmCvh"};const s=a}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,n,o,i)=>{if(!n){var a=1/0;for(l=0;l<t.length;l++){for(var[n,o,i]=t[l],s=!0,A=0;A<n.length;A++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](n[A])))?n.splice(A--,1):(s=!1,i<a&&(a=i));if(s){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,o,i]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var o,i,[a,s,A]=n,c=0;if(a.some((e=>0!==t[e]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(A)var l=A(r)}for(e&&e(n);c<a.length;c++)i=a[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},n=self.webpackChunknycticorax=self.webpackChunknycticorax||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})(),r.nc=void 0;var o=r.O(void 0,[736],(()=>r(269)));o=r.O(o)})();
//# sourceMappingURL=main.12e7617b.js.map