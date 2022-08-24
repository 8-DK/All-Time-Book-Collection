/*global setTimeout: false, console: false */(function(){var a={},b=this,c=b.async;typeof module!="undefined"&&module.exports?module.exports=a:b.async=a,a.noConflict=function(){return b.async=c,a};var d=function(a,b){if(a.forEach)return a.forEach(b);for(var c=0;c<a.length;c+=1)b(a[c],c,a)},e=function(a,b){if(a.map)return a.map(b);var c=[];return d(a,function(a,d,e){c.push(b(a,d,e))}),c},f=function(a,b,c){return a.reduce?a.reduce(b,c):(d(a,function(a,d,e){c=b(c,a,d,e)}),c)},g=function(a){if(Object.keys)return Object.keys(a);var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b},h=function(a,b){if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c+=1)if(a[c]===b)return c;return-1};typeof process=="undefined"||!process.nextTick?a.nextTick=function(a){setTimeout(a,0)}:a.nextTick=process.nextTick,a.forEach=function(a,b,c){if(!a.length)return c();var e=0;d(a,function(d){b(d,function(b){b?(c(b),c=function(){}):(e+=1,e===a.length&&c())})})},a.forEachSeries=function(a,b,c){if(!a.length)return c();var d=0,e=function(){b(a[d],function(b){b?(c(b),c=function(){}):(d+=1,d===a.length?c():e())})};e()},a.forEachLimit=function(a,b,c,d){if(!a.length||b<=0)return d();var e=0,f=0,g=0;(function h(){if(e===a.length)return d();while(g<b&&f<a.length)c(a[f],function(b){b?(d(b),d=function(){}):(e+=1,g-=1,e===a.length?d():h())}),f+=1,g+=1})()};var i=function(b){return function(){var c=Array.prototype.slice.call(arguments);return b.apply(null,[a.forEach].concat(c))}},j=function(b){return function(){var c=Array.prototype.slice.call(arguments);return b.apply(null,[a.forEachSeries].concat(c))}},k=function(a,b,c,d){var f=[];b=e(b,function(a,b){return{index:b,value:a}}),a(b,function(a,b){c(a.value,function(c,d){f[a.index]=d,b(c)})},function(a){d(a,f)})};a.map=i(k),a.mapSeries=j(k),a.reduce=function(b,c,d,e){a.forEachSeries(b,function(a,b){d(c,a,function(a,d){c=d,b(a)})},function(a){e(a,c)})},a.inject=a.reduce,a.foldl=a.reduce,a.reduceRight=function(b,c,d,f){var g=e(b,function(a){return a}).reverse();a.reduce(g,c,d,f)},a.foldr=a.reduceRight;var l=function(a,b,c,d){var f=[];b=e(b,function(a,b){return{index:b,value:a}}),a(b,function(a,b){c(a.value,function(c){c&&f.push(a),b()})},function(a){d(e(f.sort(function(a,b){return a.index-b.index}),function(a){return a.value}))})};a.filter=i(l),a.filterSeries=j(l),a.select=a.filter,a.selectSeries=a.filterSeries;var m=function(a,b,c,d){var f=[];b=e(b,function(a,b){return{index:b,value:a}}),a(b,function(a,b){c(a.value,function(c){c||f.push(a),b()})},function(a){d(e(f.sort(function(a,b){return a.index-b.index}),function(a){return a.value}))})};a.reject=i(m),a.rejectSeries=j(m);var n=function(a,b,c,d){a(b,function(a,b){c(a,function(c){c?(d(a),d=function(){}):b()})},function(a){d()})};a.detect=i(n),a.detectSeries=j(n),a.some=function(b,c,d){a.forEach(b,function(a,b){c(a,function(a){a&&(d(!0),d=function(){}),b()})},function(a){d(!1)})},a.any=a.some,a.every=function(b,c,d){a.forEach(b,function(a,b){c(a,function(a){a||(d(!1),d=function(){}),b()})},function(a){d(!0)})},a.all=a.every,a.sortBy=function(b,c,d){a.map(b,function(a,b){c(a,function(c,d){c?b(c):b(null,{value:a,criteria:d})})},function(a,b){if(a)return d(a);var c=function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0};d(null,e(b.sort(c),function(a){return a.value}))})},a.auto=function(a,b){b=b||function(){};var c=g(a);if(!c.length)return b(null);var e={},h=[],i=function(a){h.unshift(a)},j=function(a){for(var b=0;b<h.length;b+=1)if(h[b]===a){h.splice(b,1);return}},k=function(){d(h.slice(0),function(a){a()})};i(function(){g(e).length===c.length&&(b(null,e),b=function(){})}),d(c,function(c){var d=a[c]instanceof Function?[a[c]]:a[c],g=function(a){if(a)b(a),b=function(){};else{var d=Array.prototype.slice.call(arguments,1);d.length<=1&&(d=d[0]),e[c]=d,k()}},h=d.slice(0,Math.abs(d.length-1))||[],l=function(){return f(h,function(a,b){return a&&e.hasOwnProperty(b)},!0)};if(l())d[d.length-1](g,e);else{var m=function(){l()&&(j(m),d[d.length-1](g,e))};i(m)}})},a.waterfall=function(b,c){if(!b.length)return c();c=c||function(){};var d=function(b){return function(e){if(e)c(e),c=function(){};else{var f=Array.prototype.slice.call(arguments,1),g=b.next();g?f.push(d(g)):f.push(c),a.nextTick(function(){b.apply(null,f)})}}};d(a.iterator(b))()},a.parallel=function(b,c){c=c||function(){};if(b.constructor===Array)a.map(b,function(a,b){a&&a(function(a){var c=Array.prototype.slice.call(arguments,1);c.length<=1&&(c=c[0]),b.call(null,a,c)})},c);else{var d={};a.forEach(g(b),function(a,c){b[a](function(b){var e=Array.prototype.slice.call(arguments,1);e.length<=1&&(e=e[0]),d[a]=e,c(b)})},function(a){c(a,d)})}},a.series=function(b,c){c=c||function(){};if(b.constructor===Array)a.mapSeries(b,function(a,b){a&&a(function(a){var c=Array.prototype.slice.call(arguments,1);c.length<=1&&(c=c[0]),b.call(null,a,c)})},c);else{var d={};a.forEachSeries(g(b),function(a,c){b[a](function(b){var e=Array.prototype.slice.call(arguments,1);e.length<=1&&(e=e[0]),d[a]=e,c(b)})},function(a){c(a,d)})}},a.iterator=function(a){var b=function(c){var d=function(){return a.length&&a[c].apply(null,arguments),d.next()};return d.next=function(){return c<a.length-1?b(c+1):null},d};return b(0)},a.apply=function(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b.concat(Array.prototype.slice.call(arguments)))}};var o=function(a,b,c,d){var e=[];a(b,function(a,b){c(a,function(a,c){e=e.concat(c||[]),b(a)})},function(a){d(a,e)})};a.concat=i(o),a.concatSeries=j(o),a.whilst=function(b,c,d){b()?c(function(e){if(e)return d(e);a.whilst(b,c,d)}):d()},a.until=function(b,c,d){b()?d():c(function(e){if(e)return d(e);a.until(b,c,d)})},a.queue=function(b,c){var e=0,f={tasks:[],concurrency:c,saturated:null,empty:null,drain:null,push:function(b,e){b.constructor!==Array&&(b=[b]),d(b,function(b){f.tasks.push({data:b,callback:typeof e=="function"?e:null}),f.saturated&&f.tasks.length==c&&f.saturated(),a.nextTick(f.process)})},process:function(){if(e<f.concurrency&&f.tasks.length){var a=f.tasks.shift();f.empty&&f.tasks.length==0&&f.empty(),e+=1,b(a.data,function(){e-=1,a.callback&&a.callback.apply(a,arguments),f.drain&&f.tasks.length+e==0&&f.drain(),f.process()})}},length:function(){return f.tasks.length},running:function(){return e}};return f};var p=function(a){return function(b){var c=Array.prototype.slice.call(arguments,1);b.apply(null,c.concat([function(b){var c=Array.prototype.slice.call(arguments,1);typeof console!="undefined"&&(b?console.error&&console.error(b):console[a]&&d(c,function(b){console[a](b)}))}]))}};a.log=p("log"),a.dir=p("dir"),a.memoize=function(a,b){var c={},d={};b=b||function(a){return a};var e=function(){var e=Array.prototype.slice.call(arguments),f=e.pop(),g=b.apply(null,e);g in c?f.apply(null,c[g]):g in d?d[g].push(f):(d[g]=[f],a.apply(null,e.concat([function(){c[g]=arguments;var a=d[g];delete d[g];for(var b=0,e=a.length;b<e;b++)a[b].apply(null,arguments)}])))};return e.unmemoized=a,e},a.unmemoize=function(a){return function(){return(a.unmemoized||a).apply(null,arguments)}}})();var JSON;JSON||(JSON={});
(function(){function k(a){return a<10?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,j){var c,d,h,m,g=e,f,b=j[a];b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));typeof i==="function"&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null";
e+=n;f=[];if(Object.prototype.toString.apply(b)==="[object Array]"){m=b.length;for(c=0;c<m;c+=1)f[c]=l(c,b)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&typeof i==="object"){m=i.length;for(c=0;c<m;c+=1)typeof i[c]==="string"&&(d=i[c],(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h);h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+
"}";e=g;return h}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,j,c){var d;n=e="";if(typeof c==="number")for(d=0;d<c;d+=1)n+=" ";else typeof c==="string"&&(n=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return l("",
{"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),f!==void 0?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),typeof e==="function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}})();/*!
  * Reqwest! A general purpose XHR connection manager
  * (c) Dustin Diaz 2011
  * https://github.com/ded/reqwest
  * license MIT
  */
!function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&define.amd?define(a,b):this[a]=b()}("reqwest",function(){function handleReadyState(a,b,c){return function(){a&&a[readyState]==4&&(twoHundo.test(a.status)?b(a):c(a))}}function setHeaders(a,b){var c=b.headers||{};c.Accept=c.Accept||defaultHeaders.accept[b.type]||defaultHeaders.accept["*"],!b.crossOrigin&&!c[requestedWith]&&(c[requestedWith]=defaultHeaders.requestedWith),c[contentType]||(c[contentType]=b.contentType||defaultHeaders.contentType);for(var d in c)c.hasOwnProperty(d)&&a.setRequestHeader(d,c[d])}function setCredentials(a,b){typeof b.withCredentials!="undefined"&&typeof a.withCredentials!="undefined"&&(a.withCredentials=!!b.withCredentials)}function generalCallback(a){lastValue=a}function urlappend(a,b){return a+(/\?/.test(a)?"&":"?")+b}function handleJsonp(a,b,c,d){var e=uniqid++,f=a.jsonpCallback||"callback",g=a.jsonpCallbackName||"reqwest_"+e,h=new RegExp("("+f+")=(.+)(&|$)"),i=d.match(h),j=doc.createElement("script"),k=0;i?i[2]==="?"?d=d.replace(h,"$1="+g+"$3"):g=i[2]:d=urlappend(d,f+"="+g),win[g]=generalCallback,j.type="text/javascript",j.src=d,j.async=!0,typeof j.onreadystatechange!="undefined"&&(j.event="onclick",j.htmlFor=j.id="_reqwest_"+e),j.onload=j.onreadystatechange=function(){if(j[readyState]&&j[readyState]!=="complete"&&j[readyState]!=="loaded"||k)return!1;j.onload=j.onreadystatechange=null,j.onclick&&j.onclick(),a.success&&a.success(lastValue),lastValue=undefined,head.removeChild(j),k=1},head.appendChild(j)}function getRequest(a,b,c){var d=(a.method||"GET").toUpperCase(),e=typeof a=="string"?a:a.url,f=a.processData!==!1&&a.data&&typeof a.data!="string"?reqwest.toQueryString(a.data):a.data||null;(a.type=="jsonp"||d=="GET")&&f&&(e=urlappend(e,f))&&(f=null);if(a.type=="jsonp")return handleJsonp(a,b,c,e);var g=xhr();return g.open(d,e,!0),setHeaders(g,a),setCredentials(g,a),g.onreadystatechange=handleReadyState(g,b,c),a.before&&a.before(g),g.send(f),g}function Reqwest(a,b){this.o=a,this.fn=b,init.apply(this,arguments)}function setType(a){var b=a.match(/\.(json|jsonp|html|xml)(\?|$)/);return b?b[1]:"js"}function init(o,fn){function complete(a){o.timeout&&clearTimeout(self.timeout),self.timeout=null,o.complete&&o.complete(a)}function success(resp){var r=resp.responseText;if(r)switch(type){case"json":try{resp=win.JSON?win.JSON.parse(r):eval("("+r+")")}catch(err){return error(resp,"Could not parse JSON in response",err)}break;case"js":resp=eval(r);break;case"html":resp=r}fn(resp),o.success&&o.success(resp),complete(resp)}function error(a,b,c){o.error&&o.error(a,b,c),complete(a)}this.url=typeof o=="string"?o:o.url,this.timeout=null;var type=o.type||setType(this.url),self=this;fn=fn||function(){},o.timeout&&(this.timeout=setTimeout(function(){self.abort()},o.timeout)),this.request=getRequest(o,success,error)}function reqwest(a,b){return new Reqwest(a,b)}function normalize(a){return a?a.replace(/\r?\n/g,"\r\n"):""}function serial(a,b){var c=a.name,d=a.tagName.toLowerCase(),e=function(a){a&&!a.disabled&&b(c,normalize(a.attributes.value&&a.attributes.value.specified?a.value:a.text))};if(a.disabled||!c)return;switch(d){case"input":if(!/reset|button|image|file/i.test(a.type)){var f=/checkbox/i.test(a.type),g=/radio/i.test(a.type),h=a.value;(!f&&!g||a.checked)&&b(c,normalize(f&&h===""?"on":h))}break;case"textarea":b(c,normalize(a.value));break;case"select":if(a.type.toLowerCase()==="select-one")e(a.selectedIndex>=0?a.options[a.selectedIndex]:null);else for(var i=0;a.length&&i<a.length;i++)a.options[i].selected&&e(a.options[i])}}function eachFormElement(){var a=this,b,c,d,e=function(b,c){for(var e=0;e<c.length;e++){var f=b[byTag](c[e]);for(d=0;d<f.length;d++)serial(f[d],a)}};for(c=0;c<arguments.length;c++)b=arguments[c],/input|select|textarea/i.test(b.tagName)&&serial(b,a),e(b,["input","select","textarea"])}function serializeQueryString(){return reqwest.toQueryString(reqwest.serializeArray.apply(null,arguments))}function serializeHash(){var a={};return eachFormElement.apply(function(b,c){b in a?(a[b]&&!isArray(a[b])&&(a[b]=[a[b]]),a[b].push(c)):a[b]=c},arguments),a}var context=this,win=window,doc=document,old=context.reqwest,twoHundo=/^20\d$/,byTag="getElementsByTagName",readyState="readyState",contentType="Content-Type",requestedWith="X-Requested-With",head=doc[byTag]("head")[0],uniqid=0,lastValue,xmlHttpRequest="XMLHttpRequest",defaultHeaders={contentType:"application/x-www-form-urlencoded",accept:{"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"},requestedWith:xmlHttpRequest},xhr=xmlHttpRequest in win?function(){return new XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")};Reqwest.prototype={abort:function(){this.request && this.request.abort()},retry:function(){init.call(this,this.o,this.fn)}};var isArray=typeof Array.isArray=="function"?Array.isArray:function(a){return a instanceof Array};return reqwest.serializeArray=function(){var a=[];return eachFormElement.apply(function(b,c){a.push({name:b,value:c})},arguments),a},reqwest.serialize=function(){if(arguments.length===0)return"";var a,b,c=Array.prototype.slice.call(arguments,0);return a=c.pop(),a&&a.nodeType&&c.push(a)&&(a=null),a&&(a=a.type),a=="map"?b=serializeHash:a=="array"?b=reqwest.serializeArray:b=serializeQueryString,b.apply(null,c)},reqwest.toQueryString=function(a){var b="",c,d=encodeURIComponent,e=function(a,c){b+=d(a)+"="+d(c)+"&"};if(isArray(a))for(c=0;a&&c<a.length;c++)e(a[c].name,a[c].value);else for(var f in a){if(!Object.hasOwnProperty.call(a,f))continue;var g=a[f];if(isArray(g))for(c=0;c<g.length;c++)e(f,g[c]);else e(f,a[f])}return b.replace(/&$/,"").replace(/%20/g,"+")},reqwest.compat=function(a,b){return a&&(a.type&&(a.method=a.type)&&delete a.type,a.dataType&&(a.type=a.dataType),a.jsonpCallback&&(a.jsonpCallbackName=a.jsonpCallback)&&delete a.jsonpCallback,a.jsonp&&(a.jsonpCallback=a.jsonp)),new Reqwest(a,b)},reqwest.noConflict=function(){return context.reqwest=old,this},reqwest})
/*!
  * Kizzy - a cross-browser LocalStorage API
  * Copyright: Dustin Diaz 2012
  * https://github.com/ded/kizzy
  * License: MIT
  */
!function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("kizzy",function(){function a(){}function p(){return+(new Date)}function q(a,b){a._[b]&&a._[b].e&&a._[b].e<p()&&a.remove(b)}function r(a){return typeof a=="number"&&isFinite(a)}function s(a){return localStorage[a]}function t(a,b){return localStorage[a]=b,b}function u(a){delete localStorage[a]}function v(){localStorage.clear()}function w(a){var b=j.childNodes,c,d=null;for(var e=0,f=b.length;e<f;e++){c=b.item(e);if(c.getAttribute("key")==a){d=c;break}}return d}function x(a){var b=w(a),c=null;return b&&(c=b.getAttribute("value")),c}function y(a,b){var c=w(a);return c?c.setAttribute("value",b):(c=i.createNode(1,"item",""),c.setAttribute("key",a),c.setAttribute("value",b),j.appendChild(c)),h.save(d),b}function z(a){w(a)&&j.removeChild(node),h.save(d)}function A(){while(j.firstChild)j.removeChild(j.firstChild);h.save(d)}function B(){this._={}}function C(a){this.ns=a,this._=JSON.parse(m(a)||"{}")}function D(a){return new C(a)}var b,c=document,d=c.domain,e=0,f=function(){return 1};try{b=!!localStorage||!!globalStorage,localStorage||(localStorage=globalStorage[d]),e=1}catch(g){e=0;try{if(c.documentElement.addBehavior){e=0,b=1;var h=c.documentElement;h.addBehavior("#default#userData"),h.load(d);var i=h.xmlDocument,j=i.documentElement}}catch(k){b=!1}}var l=a,m=a,n=a,o=a;return b&&(l=e?t:y,m=e?s:x,n=e?u:z,o=e?v:A,f=function(a){try{var b=JSON.stringify(a._);return b=="{}"?n(a.ns):l(a.ns,b),1}catch(c){return 0}}),B.prototype={set:function(a,b,c){return this._[a]={value:b,e:r(c)?p()+c:0},f(this)||this.remove(a),b},get:function(a){return q(this,a),this._[a]?this._[a].value:undefined},remove:function(a){delete this._[a],f(this)},clear:function(){this._={},f(this)},clearExpireds:function(){for(var a in this._)q(this,a);f(this)}},C.prototype=B.prototype,D.remove=n,D.clear=o,D})/**
 * UUID.js: The RFC-compliant UUID generator for JavaScript.
 *
 * @fileOverview
 * @author  LiosK
 * @version 3.2
 * @license The MIT License: Copyright (c) 2010-2012 LiosK.
 */

/** @constructor */
var UUID;

UUID = (function(overwrittenUUID) {

// Core Component {{{

/** @lends UUID */
function UUID() {}

/**
 * The simplest function to get an UUID string.
 * @returns {string} A version 4 UUID string.
 */
UUID.generate = function() {
  var rand = UUID._getRandomInt, hex = UUID._hexAligner;
  return  hex(rand(32), 8)          // time_low
        + "-"
        + hex(rand(16), 4)          // time_mid
        + "-"
        + hex(0x4000 | rand(12), 4) // time_hi_and_version
        + "-"
        + hex(0x8000 | rand(14), 4) // clock_seq_hi_and_reserved clock_seq_low
        + "-"
        + hex(rand(48), 12);        // node
};

/**
 * Returns an unsigned x-bit random integer.
 * @param {int} x A positive integer ranging from 0 to 53, inclusive.
 * @returns {int} An unsigned x-bit random integer (0 <= f(x) < 2^x).
 */
UUID._getRandomInt = function(x) {
  if (x <   0) return NaN;
  if (x <= 30) return (0 | Math.random() * (1 <<      x));
  if (x <= 53) return (0 | Math.random() * (1 <<     30))
                    + (0 | Math.random() * (1 << x - 30)) * (1 << 30);
  return NaN;
};

/**
 * Returns a function that converts an integer to a zero-filled string.
 * @param {int} radix
 * @returns {function(num&#44; length)}
 */
UUID._getIntAligner = function(radix) {
  return function(num, length) {
    var str = num.toString(radix), i = length - str.length, z = "0";
    for (; i > 0; i >>>= 1, z += z) { if (i & 1) { str = z + str; } }
    return str;
  };
};

UUID._hexAligner = UUID._getIntAligner(16);

// }}}

// UUID Object Component {{{

/**
 * Names of each UUID field.
 * @type string[]
 * @constant
 * @since 3.0
 */
UUID.FIELD_NAMES = ["timeLow", "timeMid", "timeHiAndVersion",
                    "clockSeqHiAndReserved", "clockSeqLow", "node"];

/**
 * Sizes of each UUID field.
 * @type int[]
 * @constant
 * @since 3.0
 */
UUID.FIELD_SIZES = [32, 16, 16, 8, 8, 48];

/**
 * Generates a version 4 {@link UUID}.
 * @returns {UUID} A version 4 {@link UUID} object.
 * @since 3.0
 */
UUID.genV4 = function() {
  var rand = UUID._getRandomInt;
  return new UUID()._init(rand(32), rand(16), // time_low time_mid
                          0x4000 | rand(12),  // time_hi_and_version
                          0x80   | rand(6),   // clock_seq_hi_and_reserved
                          rand(8), rand(48)); // clock_seq_low node
};

/**
 * Converts hexadecimal UUID string to an {@link UUID} object.
 * @param {string} strId UUID hexadecimal string representation ("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx").
 * @returns {UUID} {@link UUID} object or null.
 * @since 3.0
 */
UUID.parse = function(strId) {
  var r, p = /^\s*(urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(\})?\s*$/i;
  if (r = p.exec(strId)) {
    var l = r[1] || "", t = r[8] || "";
    if (((l + t) === "") ||
        (l === "{" && t === "}") ||
        (l.toLowerCase() === "urn:uuid:" && t === "")) {
      return new UUID()._init(parseInt(r[2], 16), parseInt(r[3], 16),
                              parseInt(r[4], 16), parseInt(r[5], 16),
                              parseInt(r[6], 16), parseInt(r[7], 16));
    }
  }
  return null;
};

/**
 * Initializes {@link UUID} object.
 * @param {uint32} [timeLow=0] time_low field (octet 0-3).
 * @param {uint16} [timeMid=0] time_mid field (octet 4-5).
 * @param {uint16} [timeHiAndVersion=0] time_hi_and_version field (octet 6-7).
 * @param {uint8} [clockSeqHiAndReserved=0] clock_seq_hi_and_reserved field (octet 8).
 * @param {uint8} [clockSeqLow=0] clock_seq_low field (octet 9).
 * @param {uint48} [node=0] node field (octet 10-15).
 * @returns {UUID} this.
 */
UUID.prototype._init = function() {
  var names = UUID.FIELD_NAMES, sizes = UUID.FIELD_SIZES;
  var bin = UUID._binAligner, hex = UUID._hexAligner;

  /**
   * List of UUID field values (as integer values).
   * @type int[]
   */
  this.intFields = new Array(6);

  /**
   * List of UUID field values (as binary bit string values).
   * @type string[]
   */
  this.bitFields = new Array(6);

  /**
   * List of UUID field values (as hexadecimal string values).
   * @type string[]
   */
  this.hexFields = new Array(6);

  for (var i = 0; i < 6; i++) {
    var intValue = parseInt(arguments[i] || 0);
    this.intFields[i] = this.intFields[names[i]] = intValue;
    this.bitFields[i] = this.bitFields[names[i]] = bin(intValue, sizes[i]);
    this.hexFields[i] = this.hexFields[names[i]] = hex(intValue, sizes[i] / 4);
  }

  /**
   * UUID version number defined in RFC 4122.
   * @type int
   */
  this.version = (this.intFields.timeHiAndVersion >> 12) & 0xF;

  /**
   * 128-bit binary bit string representation.
   * @type string
   */
  this.bitString = this.bitFields.join("");

  /**
   * UUID hexadecimal string representation ("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx").
   * @type string
   */
  this.hexString = this.hexFields[0] + "-" + this.hexFields[1] + "-" + this.hexFields[2]
                 + "-" + this.hexFields[3] + this.hexFields[4] + "-" + this.hexFields[5];

  /**
   * UUID string representation as a URN ("urn:uuid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx").
   * @type string
   */
  this.urn = "urn:uuid:" + this.hexString;

  return this;
};

UUID._binAligner = UUID._getIntAligner(2);

/**
 * Returns UUID string representation.
 * @returns {string} {@link UUID#hexString}.
 */
UUID.prototype.toString = function() { return this.hexString; };

/**
 * Tests if two {@link UUID} objects are equal.
 * @param {UUID} uuid
 * @returns {bool} True if two {@link UUID} objects are equal.
 */
UUID.prototype.equals = function(uuid) {
  if (!(uuid instanceof UUID)) { return false; }
  for (var i = 0; i < 6; i++) {
    if (this.intFields[i] !== uuid.intFields[i]) { return false; }
  }
  return true;
};

// }}}

// UUID Version 1 Component {{{

/**
 * Generates a version 1 {@link UUID}.
 * @returns {UUID} A version 1 {@link UUID} object.
 * @since 3.0
 */
UUID.genV1 = function() {
  var now = new Date().getTime(), st = UUID._state;
  if (now != st.timestamp) {
    if (now < st.timestamp) { st.sequence++; }
    st.timestamp = now;
    st.tick = UUID._getRandomInt(4);
  } else if (Math.random() < UUID._tsRatio && st.tick < 9984) {
    // advance the timestamp fraction at a probability
    // to compensate for the low timestamp resolution
    st.tick += 1 + UUID._getRandomInt(4);
  } else {
    st.sequence++;
  }

  // format time fields
  var tf = UUID._getTimeFieldValues(st.timestamp);
  var tl = tf.low + st.tick;
  var thav = (tf.hi & 0xFFF) | 0x1000;  // set version '0001'

  // format clock sequence
  st.sequence &= 0x3FFF;
  var cshar = (st.sequence >>> 8) | 0x80; // set variant '10'
  var csl = st.sequence & 0xFF;

  return new UUID()._init(tl, tf.mid, thav, cshar, csl, st.node);
};

/**
 * Re-initializes version 1 UUID state.
 * @since 3.0
 */
UUID.resetState = function() {
  UUID._state = new UUID._state.constructor();
};

/**
 * Probability to advance the timestamp fraction: the ratio of tick movements to sequence increments.
 * @type float
 */
UUID._tsRatio = 1 / 4;

/**
 * Persistent state for UUID version 1.
 * @type UUIDState
 */
UUID._state = new function UUIDState() {
  var rand = UUID._getRandomInt;
  this.timestamp = 0;
  this.sequence = rand(14);
  this.node = (rand(8) | 1) * 0x10000000000 + rand(40); // set multicast bit '1'
  this.tick = rand(4);  // timestamp fraction smaller than a millisecond
};

/**
 * @param {Date|int} time ECMAScript Date Object or milliseconds from 1970-01-01.
 * @returns {object}
 */
UUID._getTimeFieldValues = function(time) {
  var ts = time - Date.UTC(1582, 9, 15);
  var hm = ((ts / 0x100000000) * 10000) & 0xFFFFFFF;
  return  { low: ((ts & 0xFFFFFFF) * 10000) % 0x100000000,
            mid: hm & 0xFFFF, hi: hm >>> 16, timestamp: ts };
};

// }}}

// Misc. Component {{{

/**
 * Reinstalls {@link UUID.generate} method to emulate the interface of UUID.js version 2.x.
 * @since 3.1
 * @deprecated Version 2.x. compatible interface is not recommended.
 */
UUID.makeBackwardCompatible = function() {
  var f = UUID.generate;
  UUID.generate = function(o) {
    return (o && o.version == 1) ? UUID.genV1().hexString : f.call(UUID);
  };
  UUID.makeBackwardCompatible = function() {};
};

/**
 * Preserves the value of 'UUID' global variable set before the load of UUID.js.
 * @since 3.2
 * @type object
 */
UUID.overwrittenUUID = overwrittenUUID;

// }}}

return UUID;

})(UUID);

// vim: et ts=2 sw=2 fdm=marker fmr&
/*
Copyright (c) Copyright (c) 2007, Carl S. Yestrau All rights reserved.
Code licensed under the BSD License: http://www.featureblend.com/license.txt
Version: 1.0.4
*/
var FlashDetect = new function(){
    var self = this;
    self.installed = false;
    self.raw = "";
    self.major = -1;
    self.minor = -1;
    self.revision = -1;
    self.revisionStr = "";
    var activeXDetectRules = [
        {
            "name":"ShockwaveFlash.ShockwaveFlash.7",
            "version":function(obj){
                return getActiveXVersion(obj);
            }
        },
        {
            "name":"ShockwaveFlash.ShockwaveFlash.6",
            "version":function(obj){
                var version = "6,0,21";
                try{
                    obj.AllowScriptAccess = "always";
                    version = getActiveXVersion(obj);
                }catch(err){}
                return version;
            }
        },
        {
            "name":"ShockwaveFlash.ShockwaveFlash",
            "version":function(obj){
                return getActiveXVersion(obj);
            }
        }
    ];
    /**
     * Extract the ActiveX version of the plugin.
     * 
     * @param {Object} The flash ActiveX object.
     * @type String
     */
    var getActiveXVersion = function(activeXObj){
        var version = -1;
        try{
            version = activeXObj.GetVariable("$version");
        }catch(err){}
        return version;
    };
    /**
     * Try and retrieve an ActiveX object having a specified name.
     * 
     * @param {String} name The ActiveX object name lookup.
     * @return One of ActiveX object or a simple object having an attribute of activeXError with a value of true.
     * @type Object
     */
    var getActiveXObject = function(name){
        var obj = -1;
        try{
            obj = new ActiveXObject(name);
        }catch(err){
            obj = {activeXError:true};
        }
        return obj;
    };
    /**
     * Parse an ActiveX $version string into an object.
     * 
     * @param {String} str The ActiveX Object GetVariable($version) return value. 
     * @return An object having raw, major, minor, revision and revisionStr attributes.
     * @type Object
     */
    var parseActiveXVersion = function(str){
        var versionArray = str.split(",");//replace with regex
        return {
            "raw":str,
            "major":parseInt(versionArray[0].split(" ")[1], 10),
            "minor":parseInt(versionArray[1], 10),
            "revision":parseInt(versionArray[2], 10),
            "revisionStr":versionArray[2]
        };
    };
    /**
     * Parse a standard enabledPlugin.description into an object.
     * 
     * @param {String} str The enabledPlugin.description value.
     * @return An object having raw, major, minor, revision and revisionStr attributes.
     * @type Object
     */
    var parseStandardVersion = function(str){
        var descParts = str.split(/ +/);
        var majorMinor = descParts[2].split(/\./);
        var revisionStr = descParts[3];
        return {
            "raw":str,
            "major":parseInt(majorMinor[0], 10),
            "minor":parseInt(majorMinor[1], 10), 
            "revisionStr":revisionStr,
            "revision":parseRevisionStrToInt(revisionStr)
        };
    };
    /**
     * Parse the plugin revision string into an integer.
     * 
     * @param {String} The revision in string format.
     * @type Number
     */
    var parseRevisionStrToInt = function(str){
        return parseInt(str.replace(/[a-zA-Z]/g, ""), 10) || self.revision;
    };
    /**
     * Is the major version greater than or equal to a specified version.
     * 
     * @param {Number} version The minimum required major version.
     * @type Boolean
     */
    self.majorAtLeast = function(version){
        return self.major >= version;
    };
    /**
     * Is the minor version greater than or equal to a specified version.
     * 
     * @param {Number} version The minimum required minor version.
     * @type Boolean
     */
    self.minorAtLeast = function(version){
        return self.minor >= version;
    };
    /**
     * Is the revision version greater than or equal to a specified version.
     * 
     * @param {Number} version The minimum required revision version.
     * @type Boolean
     */
    self.revisionAtLeast = function(version){
        return self.revision >= version;
    };
    /**
     * Is the version greater than or equal to a specified major, minor and revision.
     * 
     * @param {Number} major The minimum required major version.
     * @param {Number} (Optional) minor The minimum required minor version.
     * @param {Number} (Optional) revision The minimum required revision version.
     * @type Boolean
     */
    self.versionAtLeast = function(major){
        var properties = [self.major, self.minor, self.revision];
        var len = Math.min(properties.length, arguments.length);
        for(i=0; i<len; i++){
            if(properties[i]>=arguments[i]){
                if(i+1<len && properties[i]==arguments[i]){
                    continue;
                }else{
                    return true;
                }
            }else{
                return false;
            }
        }
    };
    /**
     * Constructor, sets raw, major, minor, revisionStr, revision and installed public properties.
     */
    self.FlashDetect = function(){
        if(navigator.plugins && navigator.plugins.length>0){
            var type = 'application/x-shockwave-flash';
            var mimeTypes = navigator.mimeTypes;
            if(mimeTypes && mimeTypes[type] && mimeTypes[type].enabledPlugin && mimeTypes[type].enabledPlugin.description){
                var version = mimeTypes[type].enabledPlugin.description;
                var versionObj = parseStandardVersion(version);
                self.raw = versionObj.raw;
                self.major = versionObj.major;
                self.minor = versionObj.minor; 
                self.revisionStr = versionObj.revisionStr;
                self.revision = versionObj.revision;
                self.installed = true;
            }
        }else if(navigator.appVersion.indexOf("Mac")==-1 && window.execScript){
            var version = -1;
            for(var i=0; i<activeXDetectRules.length && version==-1; i++){
                var obj = getActiveXObject(activeXDetectRules[i].name);
                if(!obj.activeXError){
                    self.installed = true;
                    version = activeXDetectRules[i].version(obj);
                    if(version!=-1){
                        var versionObj = parseActiveXVersion(version);
                        self.raw = versionObj.raw;
                        self.major = versionObj.major;
                        self.minor = versionObj.minor; 
                        self.revision = versionObj.revision;
                        self.revisionStr = versionObj.revisionStr;
                    }
                }
            }
        }
    }();
};
FlashDetect.JS_RELEASE = "1.0.4";/*
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
var hexcase=0;function hex_md5(a){return rstr2hex(rstr_md5(str2rstr_utf8(a)))}function hex_hmac_md5(a,b){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"}function rstr_md5(a){return binl2rstr(binl_md5(rstr2binl(a),a.length*8))}function rstr_hmac_md5(c,f){var e=rstr2binl(c);if(e.length>16){e=binl_md5(e,c.length*8)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=binl_md5(a.concat(rstr2binl(f)),512+f.length*8);return binl2rstr(binl_md5(d.concat(g),512+128))}function rstr2hex(c){try{hexcase}catch(g){hexcase=0}var f=hexcase?"0123456789ABCDEF":"0123456789abcdef";var b="";var a;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);b+=f.charAt((a>>>4)&15)+f.charAt(a&15)}return b}function str2rstr_utf8(c){var b="";var d=-1;var a,e;while(++d<c.length){a=c.charCodeAt(d);e=d+1<c.length?c.charCodeAt(d+1):0;if(55296<=a&&a<=56319&&56320<=e&&e<=57343){a=65536+((a&1023)<<10)+(e&1023);d++}if(a<=127){b+=String.fromCharCode(a)}else{if(a<=2047){b+=String.fromCharCode(192|((a>>>6)&31),128|(a&63))}else{if(a<=65535){b+=String.fromCharCode(224|((a>>>12)&15),128|((a>>>6)&63),128|(a&63))}else{if(a<=2097151){b+=String.fromCharCode(240|((a>>>18)&7),128|((a>>>12)&63),128|((a>>>6)&63),128|(a&63))}}}}}return b}function rstr2binl(b){var a=Array(b.length>>2);for(var c=0;c<a.length;c++){a[c]=0}for(var c=0;c<b.length*8;c+=8){a[c>>5]|=(b.charCodeAt(c/8)&255)<<(c%32)}return a}function binl2rstr(b){var a="";for(var c=0;c<b.length*32;c+=8){a+=String.fromCharCode((b[c>>5]>>>(c%32))&255)}return a}function binl_md5(p,k){p[k>>5]|=128<<((k)%32);p[(((k+64)>>>9)<<4)+14]=k;var o=1732584193;var n=-271733879;var m=-1732584194;var l=271733878;for(var g=0;g<p.length;g+=16){var j=o;var h=n;var f=m;var e=l;o=md5_ff(o,n,m,l,p[g+0],7,-680876936);l=md5_ff(l,o,n,m,p[g+1],12,-389564586);m=md5_ff(m,l,o,n,p[g+2],17,606105819);n=md5_ff(n,m,l,o,p[g+3],22,-1044525330);o=md5_ff(o,n,m,l,p[g+4],7,-176418897);l=md5_ff(l,o,n,m,p[g+5],12,1200080426);m=md5_ff(m,l,o,n,p[g+6],17,-1473231341);n=md5_ff(n,m,l,o,p[g+7],22,-45705983);o=md5_ff(o,n,m,l,p[g+8],7,1770035416);l=md5_ff(l,o,n,m,p[g+9],12,-1958414417);m=md5_ff(m,l,o,n,p[g+10],17,-42063);n=md5_ff(n,m,l,o,p[g+11],22,-1990404162);o=md5_ff(o,n,m,l,p[g+12],7,1804603682);l=md5_ff(l,o,n,m,p[g+13],12,-40341101);m=md5_ff(m,l,o,n,p[g+14],17,-1502002290);n=md5_ff(n,m,l,o,p[g+15],22,1236535329);o=md5_gg(o,n,m,l,p[g+1],5,-165796510);l=md5_gg(l,o,n,m,p[g+6],9,-1069501632);m=md5_gg(m,l,o,n,p[g+11],14,643717713);n=md5_gg(n,m,l,o,p[g+0],20,-373897302);o=md5_gg(o,n,m,l,p[g+5],5,-701558691);l=md5_gg(l,o,n,m,p[g+10],9,38016083);m=md5_gg(m,l,o,n,p[g+15],14,-660478335);n=md5_gg(n,m,l,o,p[g+4],20,-405537848);o=md5_gg(o,n,m,l,p[g+9],5,568446438);l=md5_gg(l,o,n,m,p[g+14],9,-1019803690);m=md5_gg(m,l,o,n,p[g+3],14,-187363961);n=md5_gg(n,m,l,o,p[g+8],20,1163531501);o=md5_gg(o,n,m,l,p[g+13],5,-1444681467);l=md5_gg(l,o,n,m,p[g+2],9,-51403784);m=md5_gg(m,l,o,n,p[g+7],14,1735328473);n=md5_gg(n,m,l,o,p[g+12],20,-1926607734);o=md5_hh(o,n,m,l,p[g+5],4,-378558);l=md5_hh(l,o,n,m,p[g+8],11,-2022574463);m=md5_hh(m,l,o,n,p[g+11],16,1839030562);n=md5_hh(n,m,l,o,p[g+14],23,-35309556);o=md5_hh(o,n,m,l,p[g+1],4,-1530992060);l=md5_hh(l,o,n,m,p[g+4],11,1272893353);m=md5_hh(m,l,o,n,p[g+7],16,-155497632);n=md5_hh(n,m,l,o,p[g+10],23,-1094730640);o=md5_hh(o,n,m,l,p[g+13],4,681279174);l=md5_hh(l,o,n,m,p[g+0],11,-358537222);m=md5_hh(m,l,o,n,p[g+3],16,-722521979);n=md5_hh(n,m,l,o,p[g+6],23,76029189);o=md5_hh(o,n,m,l,p[g+9],4,-640364487);l=md5_hh(l,o,n,m,p[g+12],11,-421815835);m=md5_hh(m,l,o,n,p[g+15],16,530742520);n=md5_hh(n,m,l,o,p[g+2],23,-995338651);o=md5_ii(o,n,m,l,p[g+0],6,-198630844);l=md5_ii(l,o,n,m,p[g+7],10,1126891415);m=md5_ii(m,l,o,n,p[g+14],15,-1416354905);n=md5_ii(n,m,l,o,p[g+5],21,-57434055);o=md5_ii(o,n,m,l,p[g+12],6,1700485571);l=md5_ii(l,o,n,m,p[g+3],10,-1894986606);m=md5_ii(m,l,o,n,p[g+10],15,-1051523);n=md5_ii(n,m,l,o,p[g+1],21,-2054922799);o=md5_ii(o,n,m,l,p[g+8],6,1873313359);l=md5_ii(l,o,n,m,p[g+15],10,-30611744);m=md5_ii(m,l,o,n,p[g+6],15,-1560198380);n=md5_ii(n,m,l,o,p[g+13],21,1309151649);o=md5_ii(o,n,m,l,p[g+4],6,-145523070);l=md5_ii(l,o,n,m,p[g+11],10,-1120210379);m=md5_ii(m,l,o,n,p[g+2],15,718787259);n=md5_ii(n,m,l,o,p[g+9],21,-343485551);o=safe_add(o,j);n=safe_add(n,h);m=safe_add(m,f);l=safe_add(l,e)}return Array(o,n,m,l)}function md5_cmn(h,e,d,c,g,f){return safe_add(bit_rol(safe_add(safe_add(e,h),safe_add(c,f)),g),d)}function md5_ff(g,f,k,j,e,i,h){return md5_cmn((f&k)|((~f)&j),g,f,e,i,h)}function md5_gg(g,f,k,j,e,i,h){return md5_cmn((f&j)|(k&(~j)),g,f,e,i,h)}function md5_hh(g,f,k,j,e,i,h){return md5_cmn(f^k^j,g,f,e,i,h)}function md5_ii(g,f,k,j,e,i,h){return md5_cmn(k^(f|(~j)),g,f,e,i,h)}function safe_add(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))};/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS 180-1
 * Version 2.2 Copyright Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */
var hexcase=0;var b64pad="";function hex_sha1(a){return rstr2hex(rstr_sha1(str2rstr_utf8(a)))}function hex_hmac_sha1(a,b){return rstr2hex(rstr_hmac_sha1(str2rstr_utf8(a),str2rstr_utf8(b)))}function sha1_vm_test(){return hex_sha1("abc").toLowerCase()=="a9993e364706816aba3e25717850c26c9cd0d89d"}function rstr_sha1(a){return binb2rstr(binb_sha1(rstr2binb(a),a.length*8))}function rstr_hmac_sha1(c,f){var e=rstr2binb(c);if(e.length>16){e=binb_sha1(e,c.length*8)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=binb_sha1(a.concat(rstr2binb(f)),512+f.length*8);return binb2rstr(binb_sha1(d.concat(g),512+160))}function rstr2hex(c){try{hexcase}catch(g){hexcase=0}var f=hexcase?"0123456789ABCDEF":"0123456789abcdef";var b="";var a;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);b+=f.charAt((a>>>4)&15)+f.charAt(a&15)}return b}function str2rstr_utf8(c){var b="";var d=-1;var a,e;while(++d<c.length){a=c.charCodeAt(d);e=d+1<c.length?c.charCodeAt(d+1):0;if(55296<=a&&a<=56319&&56320<=e&&e<=57343){a=65536+((a&1023)<<10)+(e&1023);d++}if(a<=127){b+=String.fromCharCode(a)}else{if(a<=2047){b+=String.fromCharCode(192|((a>>>6)&31),128|(a&63))}else{if(a<=65535){b+=String.fromCharCode(224|((a>>>12)&15),128|((a>>>6)&63),128|(a&63))}else{if(a<=2097151){b+=String.fromCharCode(240|((a>>>18)&7),128|((a>>>12)&63),128|((a>>>6)&63),128|(a&63))}}}}}return b}function rstr2binb(b){var a=Array(b.length>>2);for(var c=0;c<a.length;c++){a[c]=0}for(var c=0;c<b.length*8;c+=8){a[c>>5]|=(b.charCodeAt(c/8)&255)<<(24-c%32)}return a}function binb2rstr(b){var a="";for(var c=0;c<b.length*32;c+=8){a+=String.fromCharCode((b[c>>5]>>>(24-c%32))&255)}return a}function binb_sha1(v,o){v[o>>5]|=128<<(24-o%32);v[((o+64>>9)<<4)+15]=o;var y=Array(80);var u=1732584193;var s=-271733879;var r=-1732584194;var q=271733878;var p=-1009589776;for(var l=0;l<v.length;l+=16){var n=u;var m=s;var k=r;var h=q;var f=p;for(var g=0;g<80;g++){if(g<16){y[g]=v[l+g]}else{y[g]=bit_rol(y[g-3]^y[g-8]^y[g-14]^y[g-16],1)}var z=safe_add(safe_add(bit_rol(u,5),sha1_ft(g,s,r,q)),safe_add(safe_add(p,y[g]),sha1_kt(g)));p=q;q=r;r=bit_rol(s,30);s=u;u=z}u=safe_add(u,n);s=safe_add(s,m);r=safe_add(r,k);q=safe_add(q,h);p=safe_add(p,f)}return Array(u,s,r,q,p)}function sha1_ft(e,a,g,f){if(e<20){return(a&g)|((~a)&f)}if(e<40){return a^g^f}if(e<60){return(a&g)|(a&f)|(g&f)}return a^g^f}function sha1_kt(a){return(a<20)?1518500249:(a<40)?1859775393:(a<60)?-1894007588:-899497514}function safe_add(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))};/*! Cookies.js - 0.3.1; Copyright (c) 2013, Scott Hamper; http://www.opensource.org/licenses/MIT */
(function(e){"use strict";var a=function(b,d,c){return 1===arguments.length?a.get(b):a.set(b,d,c)};a._document=document;a._navigator=navigator;a.defaults={path:"/"};a.get=function(b){a._cachedDocumentCookie!==a._document.cookie&&a._renewCache();return a._cache[b]};a.set=function(b,d,c){c=a._getExtendedOptions(c);c.expires=a._getExpiresDate(d===e?-1:c.expires);a._document.cookie=a._generateCookieString(b,d,c);return a};a.expire=function(b,d){return a.set(b,e,d)};a._getExtendedOptions=function(b){return{path:b&&
b.path||a.defaults.path,domain:b&&b.domain||a.defaults.domain,expires:b&&b.expires||a.defaults.expires,secure:b&&b.secure!==e?b.secure:a.defaults.secure}};a._isValidDate=function(b){return"[object Date]"===Object.prototype.toString.call(b)&&!isNaN(b.getTime())};a._getExpiresDate=function(b,d){d=d||new Date;switch(typeof b){case "number":b=new Date(d.getTime()+1E3*b);break;case "string":b=new Date(b)}if(b&&!a._isValidDate(b))throw Error("`expires` parameter cannot be converted to a valid Date instance");
return b};a._generateCookieString=function(b,a,c){b=encodeURIComponent(b);a=(a+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);c=c||{};b=b+"="+a+(c.path?";path="+c.path:"");b+=c.domain?";domain="+c.domain:"";b+=c.expires?";expires="+c.expires.toGMTString():"";return b+=c.secure?";secure":""};a._getCookieObjectFromString=function(b){var d={};b=b?b.split("; "):[];for(var c=0;c<b.length;c++){var f=a._getKeyValuePairFromCookieString(b[c]);d[f.key]===e&&(d[f.key]=f.value)}return d};a._getKeyValuePairFromCookieString=
function(b){var a=b.indexOf("="),a=0>a?b.length:a;return{key:decodeURIComponent(b.substr(0,a)),value:decodeURIComponent(b.substr(a+1))}};a._renewCache=function(){a._cache=a._getCookieObjectFromString(a._document.cookie);a._cachedDocumentCookie=a._document.cookie};a._areEnabled=function(){return a._navigator.cookieEnabled||"1"===a.set("cookies.js",1).get("cookies.js")};a.enabled=a._areEnabled();"function"===typeof define&&define.amd?define(function(){return a}):"undefined"!==typeof exports?("undefined"!==
typeof module&&module.exports&&(exports=module.exports=a),exports.Cookies=a):window.Cookies=a})();