(self.webpackChunknycticorax=self.webpackChunknycticorax||[]).push([[7764],{1102:(e,t,n)=>{"use strict";var r=n(6291),i=a(Error);function a(e){return t.displayName=e.displayName||e.name,t;function t(t){return t&&(t=r.apply(null,arguments)),new e(t)}}e.exports=i,i.eval=a(EvalError),i.range=a(RangeError),i.reference=a(ReferenceError),i.syntax=a(SyntaxError),i.type=a(TypeError),i.uri=a(URIError),i.create=a},6291:e=>{!function(){var t;function n(e){for(var t,n,r,i,a=1,s=[].slice.call(arguments),o=0,l=e.length,c="",u=!1,g=!1,h=function(){return s[a++]},d=function(){for(var n="";/\d/.test(e[o]);)n+=e[o++],t=e[o];return n.length>0?parseInt(n):null};o<l;++o)if(t=e[o],u)switch(u=!1,"."==t?(g=!1,t=e[++o]):"0"==t&&"."==e[o+1]?(g=!0,t=e[o+=2]):g=!0,i=d(),t){case"b":c+=parseInt(h(),10).toString(2);break;case"c":c+="string"==typeof(n=h())||n instanceof String?n:String.fromCharCode(parseInt(n,10));break;case"d":c+=parseInt(h(),10);break;case"f":r=String(parseFloat(h()).toFixed(i||6)),c+=g?r:r.replace(/^0/,"");break;case"j":c+=JSON.stringify(h());break;case"o":c+="0"+parseInt(h(),10).toString(8);break;case"s":c+=h();break;case"x":c+="0x"+parseInt(h(),10).toString(16);break;case"X":c+="0x"+parseInt(h(),10).toString(16).toUpperCase();break;default:c+=t}else"%"===t?u=!0:c+=t;return c}(t=e.exports=n).format=n,t.vsprintf=function(e,t){return n.apply(null,[e].concat(t))},"undefined"!=typeof console&&"function"==typeof console.log&&(t.printf=function(){console.log(n.apply(null,arguments))})}()},7802:e=>{function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var r=e[n];"object"!=typeof r||Object.isFrozen(r)||t(r)})),e}var n=t,r=t;n.default=r;class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const o=e=>!!e.kind;class l{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!o(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const h=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,d="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",p="\\b\\d+(\\.\\d+)?",m="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",x={begin:"\\\\[\\s\\S]",relevance:0},E={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[x]},v={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[x]},y={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},w=function(e,t,n={}){const r=s({className:"comment",begin:e,end:t,contains:[]},n);return r.contains.push(y),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},N=w("//","$"),R=w("/\\*","\\*/"),k=w("#","$"),_={className:"number",begin:p,relevance:0},M={className:"number",begin:m,relevance:0},O={className:"number",begin:b,relevance:0},L={className:"number",begin:p+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},A={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[x,{begin:/\[/,end:/\]/,relevance:0,contains:[x]}]}]},I={className:"title",begin:d,relevance:0},S={className:"title",begin:f,relevance:0};var j=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:d,UNDERSCORE_IDENT_RE:f,NUMBER_RE:p,C_NUMBER_RE:m,BINARY_NUMBER_RE:b,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>g(e))).join("")}(t,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:x,APOS_STRING_MODE:E,QUOTE_STRING_MODE:v,PHRASAL_WORDS_MODE:y,COMMENT:w,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:k,NUMBER_MODE:_,C_NUMBER_MODE:M,BINARY_NUMBER_MODE:O,CSS_NUMBER_MODE:L,REGEXP_MODE:A,TITLE_MODE:I,UNDERSCORE_TITLE_MODE:S,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function T(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function B(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function P(e,t){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map((e=>g(e))).join("|")+")"}(...e.illegal))}function C(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function D(e,t){void 0===e.relevance&&(e.relevance=1)}const H=["of","and","for","in","not","or","if","then","parent","list","value"];function $(e,t,n="keyword"){const r={};return"string"==typeof e?i(n,e.split(" ")):Array.isArray(e)?i(n,e):Object.keys(e).forEach((function(n){Object.assign(r,$(e[n],t,n))})),r;function i(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");r[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){return t?Number(t):function(e){return H.includes(e.toLowerCase())}(e)?0:1}function z(e,{plugins:t}){function n(t,n){return new RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,t="|"){let n=0;return e.map((e=>{n+=1;const t=n;let r=g(e),i="";for(;r.length>0;){const e=h.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i})).map((e=>`(${e})`)).join(t)}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new r;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(r,a){const o=r;if(r.isCompiled)return o;[C].forEach((e=>e(r,a))),e.compilerExtensions.forEach((e=>e(r,a))),r.__beforeBegin=null,[B,P,D].forEach((e=>e(r,a))),r.isCompiled=!0;let l=null;if("object"==typeof r.keywords&&(l=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=$(r.keywords,e.case_insensitive)),r.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||r.lexemes||/\w+/,o.keywordPatternRe=n(l,!0),a&&(r.begin||(r.begin=/\B|\b/),o.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(o.endRe=n(r.end)),o.terminatorEnd=g(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(o.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(o.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return s(e,{variants:null},t)}))),e.cachedVariants?e.cachedVariants:K(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,o)})),r.starts&&t(r.starts,a),o.matcher=function(e){const t=new i;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(o),o}(e)}function K(e){return!!e&&(e.endsWithParent||K(e.starts))}function G(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,a(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const F={"after:highlightElement":({el:e,result:t,text:n})=>{const r=W(e);if(!r.length)return;const i=document.createElement("div");i.innerHTML=t.value,t.value=function(e,t,n){let r=0,i="";const s=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){i+="<"+V(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+a(e.value)+'"'})).join("")+">"}function c(e){i+="</"+V(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||t.length;){let t=o();if(i+=a(n.substring(r,t[0].offset)),r=t[0].offset,t===e){s.reverse().forEach(c);do{u(t.splice(0,1)[0]),t=o()}while(t===e&&t.length&&t[0].offset===r);s.reverse().forEach(l)}else"start"===t[0].event?s.push(t[0].node):s.pop(),u(t.splice(0,1)[0])}return i+a(n.substr(r))}(r,W(i),n)}};function V(e){return e.nodeName.toLowerCase()}function W(e){const t=[];return function e(n,r){for(let i=n.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:r,node:i}),r=e(i,r),V(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:i}));return r}(e,0),t}const X={},q=e=>{console.error(e)},Z=(e,...t)=>{console.log(`WARN: ${e}`,...t)},J=(e,t)=>{X[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),X[`${e}/${t}`]=!0)},Y=a,Q=s,ee=Symbol("nomatch");var te=function(e){const t=Object.create(null),r=Object.create(null),a=[];let s=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function h(e){return g.noHighlightRe.test(e)}function d(e,t,n,r){let i="",a="";"object"==typeof t?(i=e,n=t.ignoreIllegals,a=t.language,r=void 0):(J("10.7.0","highlight(lang, code, ...args) has been deprecated."),J("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),a=e,i=t);const s={code:i,language:a};_("before:highlight",s);const o=s.result?s.result:f(s.language,s.code,n,r);return o.code=s.code,_("after:highlight",o),o}function f(e,n,r,o){function c(e,t){const n=v.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function u(){null!=R.subLanguage?function(){if(""===M)return;let e=null;if("string"==typeof R.subLanguage){if(!t[R.subLanguage])return void _.addText(M);e=f(R.subLanguage,M,!0,k[R.subLanguage]),k[R.subLanguage]=e.top}else e=p(M,R.subLanguage.length?R.subLanguage:null);R.relevance>0&&(O+=e.relevance),_.addSublanguage(e.emitter,e.language)}():function(){if(!R.keywords)return void _.addText(M);let e=0;R.keywordPatternRe.lastIndex=0;let t=R.keywordPatternRe.exec(M),n="";for(;t;){n+=M.substring(e,t.index);const r=c(R,t);if(r){const[e,i]=r;if(_.addText(n),n="",O+=i,e.startsWith("_"))n+=t[0];else{const n=v.classNameAliases[e]||e;_.addKeyword(t[0],n)}}else n+=t[0];e=R.keywordPatternRe.lastIndex,t=R.keywordPatternRe.exec(M)}n+=M.substr(e),_.addText(n)}(),M=""}function h(e){return e.className&&_.openNode(v.classNameAliases[e.className]||e.className),R=Object.create(e,{parent:{value:R}}),R}function d(e,t,n){let r=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e);e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return d(e.parent,t,n)}function m(e){return 0===R.matcher.regexIndex?(M+=e[0],1):(I=!0,0)}function b(e){const t=e[0],r=n.substr(e.index),i=d(R,e,r);if(!i)return ee;const a=R;a.skip?M+=t:(a.returnEnd||a.excludeEnd||(M+=t),u(),a.excludeEnd&&(M=t));do{R.className&&_.closeNode(),R.skip||R.subLanguage||(O+=R.relevance),R=R.parent}while(R!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),h(i.starts)),a.returnEnd?0:t.length}let x={};function E(t,a){const o=a&&a[0];if(M+=t,null==o)return u(),0;if("begin"===x.type&&"end"===a.type&&x.index===a.index&&""===o){if(M+=n.slice(a.index,a.index+1),!s){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=x.rule,t}return 1}if(x=a,"begin"===a.type)return function(e){const t=e[0],n=e.rule,r=new i(n),a=[n.__beforeBegin,n["on:begin"]];for(const n of a)if(n&&(n(e,r),r.isMatchIgnored))return m(t);return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?M+=t:(n.excludeBegin&&(M+=t),u(),n.returnBegin||n.excludeBegin||(M=t)),h(n),n.returnBegin?0:t.length}(a);if("illegal"===a.type&&!r){const e=new Error('Illegal lexeme "'+o+'" for mode "'+(R.className||"<unnamed>")+'"');throw e.mode=R,e}if("end"===a.type){const e=b(a);if(e!==ee)return e}if("illegal"===a.type&&""===o)return 1;if(A>1e5&&A>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return M+=o,o.length}const v=N(e);if(!v)throw q(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const y=z(v,{plugins:a});let w="",R=o||y;const k={},_=new g.__emitter(g);!function(){const e=[];for(let t=R;t!==v;t=t.parent)t.className&&e.unshift(t.className);e.forEach((e=>_.openNode(e)))}();let M="",O=0,L=0,A=0,I=!1;try{for(R.matcher.considerAll();;){A++,I?I=!1:R.matcher.considerAll(),R.matcher.lastIndex=L;const e=R.matcher.exec(n);if(!e)break;const t=E(n.substring(L,e.index),e);L=e.index+t}return E(n.substr(L)),_.closeAllNodes(),_.finalize(),w=_.toHTML(),{relevance:Math.floor(O),value:w,language:e,illegal:!1,emitter:_,top:R}}catch(t){if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:t.message,context:n.slice(L-100,L+100),mode:t.mode},sofar:w,relevance:0,value:Y(n),emitter:_};if(s)return{illegal:!1,relevance:0,value:Y(n),emitter:_,language:e,top:R,errorRaised:t};throw t}}function p(e,n){n=n||g.languages||Object.keys(t);const r=function(e){const t={relevance:0,emitter:new g.__emitter(g),value:Y(e),illegal:!1,top:c};return t.emitter.addText(e),t}(e),i=n.filter(N).filter(k).map((t=>f(t,e,!1)));i.unshift(r);const a=i.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1;if(N(t.language).supersetOf===e.language)return-1}return 0})),[s,o]=a,l=s;return l.second_best=o,l}const m={"before:highlightElement":({el:e})=>{g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,x={"after:highlightElement":({result:e})=>{g.tabReplace&&(e.value=e.value.replace(b,(e=>e.replace(/\t/g,g.tabReplace))))}};function E(e){let t=null;const n=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t);if(n){const t=N(n[1]);return t||(Z(l.replace("{}",n[1])),Z("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>h(e)||N(e)))}(e);if(h(n))return;_("before:highlightElement",{el:e,language:n}),t=e;const i=t.textContent,a=n?d(i,{language:n,ignoreIllegals:!0}):p(i);_("after:highlightElement",{el:e,result:a,text:i}),e.innerHTML=a.value,function(e,t,n){const i=t?r[t]:n;e.classList.add("hljs"),i&&e.classList.add(i)}(e,n,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const v=()=>{v.called||(v.called=!0,J("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(E))};let y=!1;function w(){"loading"!==document.readyState?document.querySelectorAll("pre code").forEach(E):y=!0}function N(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function R(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e.toLowerCase()]=t}))}function k(e){const t=N(e);return t&&!t.disableAutodetect}function _(e,t){const n=e;a.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){y&&w()}),!1),Object.assign(e,{highlight:d,highlightAuto:p,highlightAll:w,fixMarkup:function(e){return J("10.2.0","fixMarkup will be removed entirely in v11.0"),J("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),t=e,g.tabReplace||g.useBR?t.replace(o,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):t;var t},highlightElement:E,highlightBlock:function(e){return J("10.7.0","highlightBlock will be removed entirely in v12.0"),J("10.7.0","Please use highlightElement now."),E(e)},configure:function(e){e.useBR&&(J("10.3.0","'useBR' will be removed entirely in v11.0"),J("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=Q(g,e)},initHighlighting:v,initHighlightingOnLoad:function(){J("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),y=!0},registerLanguage:function(n,r){let i=null;try{i=r(e)}catch(e){if(q("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw e;q(e),i=c}i.name||(i.name=n),t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&R(i.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(r))r[t]===e&&delete r[t]},listLanguages:function(){return Object.keys(t)},getLanguage:N,registerAliases:R,requireLanguage:function(e){J("10.4.0","requireLanguage will be removed entirely in v11."),J("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=N(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:k,inherit:Q,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),a.push(e)},vuePlugin:G(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.7.3";for(const e in j)"object"==typeof j[e]&&n(j[e]);return Object.assign(e,j),e.addPlugin(m),e.addPlugin(F),e.addPlugin(x),e}({});e.exports=te},6470:(e,t,n)=>{"use strict";var r=n(7802),i=n(1102);t.highlight=s,t.highlightAuto=function(e,t){var n,o,l,c,u=t||{},g=u.subset||r.listLanguages(),h=u.prefix,d=g.length,f=-1;if(null==h&&(h=a),"string"!=typeof e)throw i("Expected `string` for value, got `%s`",e);for(o={relevance:0,language:null,value:[]},n={relevance:0,language:null,value:[]};++f<d;)c=g[f],r.getLanguage(c)&&((l=s(c,e,t)).language=c,l.relevance>o.relevance&&(o=l),l.relevance>n.relevance&&(o=n,n=l));return o.language&&(n.secondBest=o),n},t.registerLanguage=function(e,t){r.registerLanguage(e,t)},t.listLanguages=function(){return r.listLanguages()},t.registerAlias=function(e,t){var n,i=e;for(n in t&&((i={})[e]=t),i)r.registerAliases(i[n],{languageName:n})},o.prototype.addText=function(e){var t,n,r=this.stack;""!==e&&((n=(t=r[r.length-1]).children[t.children.length-1])&&"text"===n.type?n.value+=e:t.children.push({type:"text",value:e}))},o.prototype.addKeyword=function(e,t){this.openNode(t),this.addText(e),this.closeNode()},o.prototype.addSublanguage=function(e,t){var n=this.stack,r=n[n.length-1],i=e.rootNode.children,a=t?{type:"element",tagName:"span",properties:{className:[t]},children:i}:i;r.children=r.children.concat(a)},o.prototype.openNode=function(e){var t=this.stack,n={type:"element",tagName:"span",properties:{className:[this.options.classPrefix+e]},children:[]};t[t.length-1].children.push(n),t.push(n)},o.prototype.closeNode=function(){this.stack.pop()},o.prototype.closeAllNodes=l,o.prototype.finalize=l,o.prototype.toHTML=function(){return""};var a="hljs-";function s(e,t,n){var s,l=r.configure({}),c=(n||{}).prefix;if("string"!=typeof e)throw i("Expected `string` for name, got `%s`",e);if(!r.getLanguage(e))throw i("Unknown language: `%s` is not registered",e);if("string"!=typeof t)throw i("Expected `string` for value, got `%s`",t);if(null==c&&(c=a),r.configure({__emitter:o,classPrefix:c}),s=r.highlight(t,{language:e,ignoreIllegals:!0}),r.configure(l||{}),s.errorRaised)throw s.errorRaised;return{relevance:s.relevance,language:s.language,value:s.emitter.rootNode.children}}function o(e){this.options=e,this.rootNode={children:[]},this.stack=[this.rootNode]}function l(){}}}]);
//# sourceMappingURL=lowlight-import.93d03f7b.js.map