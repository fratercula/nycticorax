(self.webpackChunknycticorax=self.webpackChunknycticorax||[]).push([[2172],{6691:e=>{const n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);e.exports=function(e){const r={keyword:n.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((i=["var","const","let","function","static"],e=>!i.includes(e))),literal:a.concat(["yes","no","on","off"]),built_in:t.concat(["npm","print"])};var i;const s="[A-Za-z$_][0-9A-Za-z$_]*",o={className:"subst",begin:/#\{/,end:/\}/,keywords:r},c=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,o]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,o]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[o,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+s},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];o.contains=c;const l=e.inherit(e.TITLE_MODE,{begin:s}),d="(\\(.*\\)\\s*)?\\B[-=]>",g={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(c)}]};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:r,illegal:/\/\*/,contains:c.concat([e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+s+"\\s*=\\s*"+d,end:"[-=]>",returnBegin:!0,contains:[l,g]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:d,end:"[-=]>",returnBegin:!0,contains:[g]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[l]},l]},{begin:s+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_coffeescript.c0223046.js.map