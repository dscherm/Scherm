(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Yf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gd={exports:{}},so={},Yd={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),Xf=Symbol.for("react.portal"),Kf=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),tm=Symbol.for("react.suspense"),nm=Symbol.for("react.memo"),im=Symbol.for("react.lazy"),pu=Symbol.iterator;function rm(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var Xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kd=Object.assign,Qd={};function vi(e,t,n){this.props=e,this.context=t,this.refs=Qd,this.updater=n||Xd}vi.prototype.isReactComponent={};vi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qd(){}qd.prototype=vi.prototype;function Tl(e,t,n){this.props=e,this.context=t,this.refs=Qd,this.updater=n||Xd}var Nl=Tl.prototype=new qd;Nl.constructor=Tl;Kd(Nl,vi.prototype);Nl.isPureReactComponent=!0;var fu=Array.isArray,Jd=Object.prototype.hasOwnProperty,El={current:null},Zd={key:!0,ref:!0,__self:!0,__source:!0};function eh(e,t,n){var i,o={},a=null,l=null;if(t!=null)for(i in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Jd.call(t,i)&&!Zd.hasOwnProperty(i)&&(o[i]=t[i]);var u=arguments.length-2;if(u===1)o.children=n;else if(1<u){for(var h=Array(u),g=0;g<u;g++)h[g]=arguments[g+2];o.children=h}if(e&&e.defaultProps)for(i in u=e.defaultProps,u)o[i]===void 0&&(o[i]=u[i]);return{$$typeof:Pr,type:e,key:a,ref:l,props:o,_owner:El.current}}function sm(e,t){return{$$typeof:Pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function om(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mu=/\/+/g;function Yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?om(""+e.key):t.toString(36)}function ys(e,t,n,i,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Pr:case Xf:l=!0}}if(l)return l=e,o=o(l),e=i===""?"."+Yo(l,0):i,fu(o)?(n="",e!=null&&(n=e.replace(mu,"$&/")+"/"),ys(o,t,n,"",function(g){return g})):o!=null&&(Pl(o)&&(o=sm(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(mu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,i=i===""?".":i+":",fu(e))for(var u=0;u<e.length;u++){a=e[u];var h=i+Yo(a,u);l+=ys(a,t,n,h,o)}else if(h=rm(e),typeof h=="function")for(e=h.call(e),u=0;!(a=e.next()).done;)a=a.value,h=i+Yo(a,u++),l+=ys(a,t,n,h,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Zr(e,t,n){if(e==null)return e;var i=[],o=0;return ys(e,i,"","",function(a){return t.call(n,a,o++)}),i}function am(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},vs={transition:null},lm={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:vs,ReactCurrentOwner:El};function th(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:Zr,forEach:function(e,t,n){Zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zr(e,function(){t++}),t},toArray:function(e){return Zr(e,function(t){return t})||[]},only:function(e){if(!Pl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=vi;X.Fragment=Kf;X.Profiler=qf;X.PureComponent=Tl;X.StrictMode=Qf;X.Suspense=tm;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;X.act=th;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Kd({},e.props),o=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=El.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(h in t)Jd.call(t,h)&&!Zd.hasOwnProperty(h)&&(i[h]=t[h]===void 0&&u!==void 0?u[h]:t[h])}var h=arguments.length-2;if(h===1)i.children=n;else if(1<h){u=Array(h);for(var g=0;g<h;g++)u[g]=arguments[g+2];i.children=u}return{$$typeof:Pr,type:e.type,key:o,ref:a,props:i,_owner:l}};X.createContext=function(e){return e={$$typeof:Zf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jf,_context:e},e.Consumer=e};X.createElement=eh;X.createFactory=function(e){var t=eh.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:em,render:e}};X.isValidElement=Pl;X.lazy=function(e){return{$$typeof:im,_payload:{_status:-1,_result:e},_init:am}};X.memo=function(e,t){return{$$typeof:nm,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=vs.transition;vs.transition={};try{e()}finally{vs.transition=t}};X.unstable_act=th;X.useCallback=function(e,t){return Be.current.useCallback(e,t)};X.useContext=function(e){return Be.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};X.useEffect=function(e,t){return Be.current.useEffect(e,t)};X.useId=function(){return Be.current.useId()};X.useImperativeHandle=function(e,t,n){return Be.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Be.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Be.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Be.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Be.current.useReducer(e,t,n)};X.useRef=function(e){return Be.current.useRef(e)};X.useState=function(e){return Be.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Be.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Be.current.useTransition()};X.version="18.3.1";Yd.exports=X;var _=Yd.exports;const cm=Yf(_);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=_,dm=Symbol.for("react.element"),hm=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,fm=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mm={key:!0,ref:!0,__self:!0,__source:!0};function nh(e,t,n){var i,o={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(i in t)pm.call(t,i)&&!mm.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:dm,type:e,key:a,ref:l,props:o,_owner:fm.current}}so.Fragment=hm;so.jsx=nh;so.jsxs=nh;Gd.exports=so;var r=Gd.exports,Na={},ih={exports:{}},tt={},rh={exports:{}},sh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,V){var G=z.length;z.push(V);e:for(;0<G;){var ne=G-1>>>1,H=z[ne];if(0<o(H,V))z[ne]=V,z[G]=H,G=ne;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var V=z[0],G=z.pop();if(G!==V){z[0]=G;e:for(var ne=0,H=z.length,$=H>>>1;ne<$;){var J=2*(ne+1)-1,ae=z[J],we=J+1,Ke=z[we];if(0>o(ae,G))we<H&&0>o(Ke,ae)?(z[ne]=Ke,z[we]=G,ne=we):(z[ne]=ae,z[J]=G,ne=J);else if(we<H&&0>o(Ke,G))z[ne]=Ke,z[we]=G,ne=we;else break e}}return V}function o(z,V){var G=z.sortIndex-V.sortIndex;return G!==0?G:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var h=[],g=[],P=1,E=null,S=3,T=!1,N=!1,I=!1,L=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(z){for(var V=n(g);V!==null;){if(V.callback===null)i(g);else if(V.startTime<=z)i(g),V.sortIndex=V.expirationTime,t(h,V);else break;V=n(g)}}function R(z){if(I=!1,j(z),!N)if(n(h)!==null)N=!0,ye(M);else{var V=n(g);V!==null&&Se(R,V.startTime-z)}}function M(z,V){N=!1,I&&(I=!1,m(p),p=-1),T=!0;var G=S;try{for(j(V),E=n(h);E!==null&&(!(E.expirationTime>V)||z&&!k());){var ne=E.callback;if(typeof ne=="function"){E.callback=null,S=E.priorityLevel;var H=ne(E.expirationTime<=V);V=e.unstable_now(),typeof H=="function"?E.callback=H:E===n(h)&&i(h),j(V)}else i(h);E=n(h)}if(E!==null)var $=!0;else{var J=n(g);J!==null&&Se(R,J.startTime-V),$=!1}return $}finally{E=null,S=G,T=!1}}var F=!1,C=null,p=-1,y=5,v=-1;function k(){return!(e.unstable_now()-v<y)}function b(){if(C!==null){var z=e.unstable_now();v=z;var V=!0;try{V=C(!0,z)}finally{V?x():(F=!1,C=null)}}else F=!1}var x;if(typeof w=="function")x=function(){w(b)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,te=Y.port2;Y.port1.onmessage=b,x=function(){te.postMessage(null)}}else x=function(){L(b,0)};function ye(z){C=z,F||(F=!0,x())}function Se(z,V){p=L(function(){z(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){N||T||(N=!0,ye(M))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return n(h)},e.unstable_next=function(z){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var G=S;S=V;try{return z()}finally{S=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=S;S=z;try{return V()}finally{S=G}},e.unstable_scheduleCallback=function(z,V,G){var ne=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ne+G:ne):G=ne,z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=G+H,z={id:P++,callback:V,priorityLevel:z,startTime:G,expirationTime:H,sortIndex:-1},G>ne?(z.sortIndex=G,t(g,z),n(h)===null&&z===n(g)&&(I?(m(p),p=-1):I=!0,Se(R,G-ne))):(z.sortIndex=H,t(h,z),N||T||(N=!0,ye(M))),z},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(z){var V=S;return function(){var G=S;S=V;try{return z.apply(this,arguments)}finally{S=G}}}})(sh);rh.exports=sh;var gm=rh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=_,et=gm;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oh=new Set,dr={};function Rn(e,t){ui(e,t),ui(e+"Capture",t)}function ui(e,t){for(dr[e]=t,e=0;e<t.length;e++)oh.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,vm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},yu={};function xm(e){return Ea.call(yu,e)?!0:Ea.call(gu,e)?!1:vm.test(e)?yu[e]=!0:(gu[e]=!0,!1)}function wm(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function km(e,t,n,i){if(t===null||typeof t>"u"||wm(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,i,o,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Il(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Al,Il);Re[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Al,Il);Re[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Al,Il);Re[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rl(e,t,n,i){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(km(t,n,o,i)&&(n=null),i||o===null?xm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,i=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var Ht=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,es=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),Pa=Symbol.for("react.profiler"),ah=Symbol.for("react.provider"),lh=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),Aa=Symbol.for("react.suspense"),Ia=Symbol.for("react.suspense_list"),Ll=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),ch=Symbol.for("react.offscreen"),vu=Symbol.iterator;function Hi(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Xo;function Ki(e){if(Xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||""}return`
`+Xo+e}var Ko=!1;function Qo(e,t){if(!e||Ko)return"";Ko=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var i=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){i=g}e.call(t.prototype)}else{try{throw Error()}catch(g){i=g}e()}}catch(g){if(g&&i&&typeof g.stack=="string"){for(var o=g.stack.split(`
`),a=i.stack.split(`
`),l=o.length-1,u=a.length-1;1<=l&&0<=u&&o[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(o[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||o[l]!==a[u]){var h=`
`+o[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=u);break}}}finally{Ko=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ki(e):""}function Sm(e){switch(e.tag){case 5:return Ki(e.type);case 16:return Ki("Lazy");case 13:return Ki("Suspense");case 19:return Ki("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function Ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Wn:return"Portal";case Pa:return"Profiler";case Dl:return"StrictMode";case Aa:return"Suspense";case Ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lh:return(e.displayName||"Context")+".Consumer";case ah:return(e._context.displayName||"Context")+".Provider";case _l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ll:return t=e.displayName||null,t!==null?t:Ra(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return Ra(e(t))}catch{}}return null}function Cm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(t);case 8:return t===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function un(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jm(e){var t=uh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){i=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ts(e){e._valueTracker||(e._valueTracker=jm(e))}function dh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=uh(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=un(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hh(e,t){t=t.checked,t!=null&&Rl(e,"checked",t,!1)}function _a(e,t){hh(e,t);var n=un(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?La(e,t.type,n):t.hasOwnProperty("defaultValue")&&La(e,t.type,un(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function La(e,t,n){(t!=="number"||Ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qi=Array.isArray;function ti(e,t,n,i){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+un(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ku(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Qi(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:un(n)}}function ph(e,t){var n=un(t.value),i=un(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ns,mh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ns.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bm=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){bm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function gh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function yh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,o=gh(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,o):e[n]=o}}var Tm=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,t){if(t){if(Tm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var za=null;function Ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ha=null,ni=null,ii=null;function Cu(e){if(e=Rr(e)){if(typeof Ha!="function")throw Error(O(280));var t=e.stateNode;t&&(t=uo(t),Ha(e.stateNode,e.type,t))}}function vh(e){ni?ii?ii.push(e):ii=[e]:ni=e}function xh(){if(ni){var e=ni,t=ii;if(ii=ni=null,Cu(e),t)for(e=0;e<t.length;e++)Cu(t[e])}}function wh(e,t){return e(t)}function kh(){}var qo=!1;function Sh(e,t,n){if(qo)return e(t,n);qo=!0;try{return wh(e,t,n)}finally{qo=!1,(ni!==null||ii!==null)&&(kh(),xh())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var i=uo(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var Ba=!1;if(Ot)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){Ba=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Ba=!1}function Nm(e,t,n,i,o,a,l,u,h){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(P){this.onError(P)}}var tr=!1,As=null,Is=!1,Wa=null,Em={onError:function(e){tr=!0,As=e}};function Pm(e,t,n,i,o,a,l,u,h){tr=!1,As=null,Nm.apply(Em,arguments)}function Am(e,t,n,i,o,a,l,u,h){if(Pm.apply(this,arguments),tr){if(tr){var g=As;tr=!1,As=null}else throw Error(O(198));Is||(Is=!0,Wa=g)}}function Dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ch(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ju(e){if(Dn(e)!==e)throw Error(O(188))}function Im(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,i=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return ju(o),e;if(a===i)return ju(o),t;a=a.sibling}throw Error(O(188))}if(n.return!==i.return)n=o,i=a;else{for(var l=!1,u=o.child;u;){if(u===n){l=!0,n=o,i=a;break}if(u===i){l=!0,i=o,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,i=o;break}if(u===i){l=!0,i=a,n=o;break}u=u.sibling}if(!l)throw Error(O(189))}}if(n.alternate!==i)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function jh(e){return e=Im(e),e!==null?bh(e):null}function bh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bh(e);if(t!==null)return t;e=e.sibling}return null}var Th=et.unstable_scheduleCallback,bu=et.unstable_cancelCallback,Rm=et.unstable_shouldYield,Dm=et.unstable_requestPaint,xe=et.unstable_now,_m=et.unstable_getCurrentPriorityLevel,Ml=et.unstable_ImmediatePriority,Nh=et.unstable_UserBlockingPriority,Rs=et.unstable_NormalPriority,Lm=et.unstable_LowPriority,Eh=et.unstable_IdlePriority,oo=null,Nt=null;function Om(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(oo,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Um,Mm=Math.log,Fm=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(Mm(e)/Fm|0)|0}var is=64,rs=4194304;function qi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,o=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~o;u!==0?i=qi(u):(a&=l,a!==0&&(i=qi(a)))}else l=n&~o,l!==0?i=qi(l):a!==0&&(i=qi(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-wt(t),o=1<<n,i|=e[n],t&=~o;return i}function zm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-wt(a),u=1<<l,h=o[l];h===-1?(!(u&n)||u&i)&&(o[l]=zm(u,t)):h<=t&&(e.expiredLanes|=u),a&=~u}}function Va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ph(){var e=is;return is<<=1,!(is&4194240)&&(is=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=n}function Bm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-wt(n),a=1<<o;t[o]=0,i[o]=-1,e[o]=-1,n&=~a}}function Fl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-wt(n),o=1<<i;o&t|e[i]&t&&(e[i]|=t),n&=~o}}var ee=0;function Ah(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ih,Ul,Rh,Dh,_h,$a=!1,ss=[],Zt=null,en=null,tn=null,fr=new Map,mr=new Map,Kt=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tu(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(t.pointerId)}}function Wi(e,t,n,i,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Rr(t),t!==null&&Ul(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vm(e,t,n,i,o){switch(t){case"focusin":return Zt=Wi(Zt,e,t,n,i,o),!0;case"dragenter":return en=Wi(en,e,t,n,i,o),!0;case"mouseover":return tn=Wi(tn,e,t,n,i,o),!0;case"pointerover":var a=o.pointerId;return fr.set(a,Wi(fr.get(a)||null,e,t,n,i,o)),!0;case"gotpointercapture":return a=o.pointerId,mr.set(a,Wi(mr.get(a)||null,e,t,n,i,o)),!0}return!1}function Lh(e){var t=Sn(e.target);if(t!==null){var n=Dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ch(n),t!==null){e.blockedOn=t,_h(e.priority,function(){Rh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);za=i,n.target.dispatchEvent(i),za=null}else return t=Rr(n),t!==null&&Ul(t),e.blockedOn=n,!1;t.shift()}return!0}function Nu(e,t,n){xs(e)&&n.delete(t)}function $m(){$a=!1,Zt!==null&&xs(Zt)&&(Zt=null),en!==null&&xs(en)&&(en=null),tn!==null&&xs(tn)&&(tn=null),fr.forEach(Nu),mr.forEach(Nu)}function Vi(e,t){e.blockedOn===t&&(e.blockedOn=null,$a||($a=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,$m)))}function gr(e){function t(o){return Vi(o,e)}if(0<ss.length){Vi(ss[0],e);for(var n=1;n<ss.length;n++){var i=ss[n];i.blockedOn===e&&(i.blockedOn=null)}}for(Zt!==null&&Vi(Zt,e),en!==null&&Vi(en,e),tn!==null&&Vi(tn,e),fr.forEach(t),mr.forEach(t),n=0;n<Kt.length;n++)i=Kt[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Lh(n),n.blockedOn===null&&Kt.shift()}var ri=Ht.ReactCurrentBatchConfig,_s=!0;function Gm(e,t,n,i){var o=ee,a=ri.transition;ri.transition=null;try{ee=1,zl(e,t,n,i)}finally{ee=o,ri.transition=a}}function Ym(e,t,n,i){var o=ee,a=ri.transition;ri.transition=null;try{ee=4,zl(e,t,n,i)}finally{ee=o,ri.transition=a}}function zl(e,t,n,i){if(_s){var o=Ga(e,t,n,i);if(o===null)la(e,t,i,Ls,n),Tu(e,i);else if(Vm(o,e,t,n,i))i.stopPropagation();else if(Tu(e,i),t&4&&-1<Wm.indexOf(e)){for(;o!==null;){var a=Rr(o);if(a!==null&&Ih(a),a=Ga(e,t,n,i),a===null&&la(e,t,i,Ls,n),a===o)break;o=a}o!==null&&i.stopPropagation()}else la(e,t,i,null,n)}}var Ls=null;function Ga(e,t,n,i){if(Ls=null,e=Ol(i),e=Sn(e),e!==null)if(t=Dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ch(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ls=e,null}function Oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_m()){case Ml:return 1;case Nh:return 4;case Rs:case Lm:return 16;case Eh:return 536870912;default:return 16}default:return 16}}var qt=null,Hl=null,ws=null;function Mh(){if(ws)return ws;var e,t=Hl,n=t.length,i,o="value"in qt?qt.value:qt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(i=1;i<=l&&t[n-i]===o[a-i];i++);return ws=o.slice(e,1<i?1-i:void 0)}function ks(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function os(){return!0}function Eu(){return!1}function nt(e){function t(n,i,o,a,l){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?os:Eu,this.isPropagationStopped=Eu,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=os)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=os)},persist:function(){},isPersistent:os}),t}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=nt(xi),Ir=me({},xi,{view:0,detail:0}),Xm=nt(Ir),Zo,ea,$i,ao=me({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$i&&($i&&e.type==="mousemove"?(Zo=e.screenX-$i.screenX,ea=e.screenY-$i.screenY):ea=Zo=0,$i=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:ea}}),Pu=nt(ao),Km=me({},ao,{dataTransfer:0}),Qm=nt(Km),qm=me({},Ir,{relatedTarget:0}),ta=nt(qm),Jm=me({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=nt(Jm),eg=me({},xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tg=nt(eg),ng=me({},xi,{data:0}),Au=nt(ng),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function og(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sg[e])?!!t[e]:!1}function Wl(){return og}var ag=me({},Ir,{key:function(e){if(e.key){var t=ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ks(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(e){return e.type==="keypress"?ks(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ks(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lg=nt(ag),cg=me({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=nt(cg),ug=me({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),dg=nt(ug),hg=me({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),pg=nt(hg),fg=me({},ao,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=nt(fg),gg=[9,13,27,32],Vl=Ot&&"CompositionEvent"in window,nr=null;Ot&&"documentMode"in document&&(nr=document.documentMode);var yg=Ot&&"TextEvent"in window&&!nr,Fh=Ot&&(!Vl||nr&&8<nr&&11>=nr),Ru=" ",Du=!1;function Uh(e,t){switch(e){case"keyup":return gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function vg(e,t){switch(e){case"compositionend":return zh(t);case"keypress":return t.which!==32?null:(Du=!0,Ru);case"textInput":return e=t.data,e===Ru&&Du?null:e;default:return null}}function xg(e,t){if($n)return e==="compositionend"||!Vl&&Uh(e,t)?(e=Mh(),ws=Hl=qt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fh&&t.locale!=="ko"?null:t.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wg[e.type]:t==="textarea"}function Hh(e,t,n,i){vh(i),t=Os(t,"onChange"),0<t.length&&(n=new Bl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var ir=null,yr=null;function kg(e){Jh(e,0)}function lo(e){var t=Xn(e);if(dh(t))return e}function Sg(e,t){if(e==="change")return t}var Bh=!1;if(Ot){var na;if(Ot){var ia="oninput"in document;if(!ia){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),ia=typeof Lu.oninput=="function"}na=ia}else na=!1;Bh=na&&(!document.documentMode||9<document.documentMode)}function Ou(){ir&&(ir.detachEvent("onpropertychange",Wh),yr=ir=null)}function Wh(e){if(e.propertyName==="value"&&lo(yr)){var t=[];Hh(t,yr,e,Ol(e)),Sh(kg,t)}}function Cg(e,t,n){e==="focusin"?(Ou(),ir=t,yr=n,ir.attachEvent("onpropertychange",Wh)):e==="focusout"&&Ou()}function jg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(yr)}function bg(e,t){if(e==="click")return lo(t)}function Tg(e,t){if(e==="input"||e==="change")return lo(t)}function Ng(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Ng;function vr(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Ea.call(t,o)||!St(e[o],t[o]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,t){var n=Mu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function Vh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $h(){for(var e=window,t=Ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ps(e.document)}return t}function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eg(e){var t=$h(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vh(n.ownerDocument.documentElement,n)){if(i!==null&&$l(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(i.start,o);i=i.end===void 0?a:Math.min(i.end,o),!e.extend&&a>i&&(o=i,i=a,a=o),o=Fu(n,a);var l=Fu(n,i);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pg=Ot&&"documentMode"in document&&11>=document.documentMode,Gn=null,Ya=null,rr=null,Xa=!1;function Uu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xa||Gn==null||Gn!==Ps(i)||(i=Gn,"selectionStart"in i&&$l(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),rr&&vr(rr,i)||(rr=i,i=Os(Ya,"onSelect"),0<i.length&&(t=new Bl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Gn)))}function as(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionend:as("Transition","TransitionEnd")},ra={},Gh={};Ot&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function co(e){if(ra[e])return ra[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gh)return ra[e]=t[n];return e}var Yh=co("animationend"),Xh=co("animationiteration"),Kh=co("animationstart"),Qh=co("transitionend"),qh=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){qh.set(e,t),Rn(t,[e])}for(var sa=0;sa<zu.length;sa++){var oa=zu[sa],Ag=oa.toLowerCase(),Ig=oa[0].toUpperCase()+oa.slice(1);hn(Ag,"on"+Ig)}hn(Yh,"onAnimationEnd");hn(Xh,"onAnimationIteration");hn(Kh,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Qh,"onTransitionEnd");ui("onMouseEnter",["mouseout","mouseover"]);ui("onMouseLeave",["mouseout","mouseover"]);ui("onPointerEnter",["pointerout","pointerover"]);ui("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));function Hu(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Am(i,t,void 0,e),e.currentTarget=null}function Jh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var l=i.length-1;0<=l;l--){var u=i[l],h=u.instance,g=u.currentTarget;if(u=u.listener,h!==a&&o.isPropagationStopped())break e;Hu(o,u,g),a=h}else for(l=0;l<i.length;l++){if(u=i[l],h=u.instance,g=u.currentTarget,u=u.listener,h!==a&&o.isPropagationStopped())break e;Hu(o,u,g),a=h}}}if(Is)throw e=Wa,Is=!1,Wa=null,e}function ce(e,t){var n=t[Za];n===void 0&&(n=t[Za]=new Set);var i=e+"__bubble";n.has(i)||(Zh(t,e,2,!1),n.add(i))}function aa(e,t,n){var i=0;t&&(i|=4),Zh(n,e,i,t)}var ls="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[ls]){e[ls]=!0,oh.forEach(function(n){n!=="selectionchange"&&(Rg.has(n)||aa(n,!1,e),aa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ls]||(t[ls]=!0,aa("selectionchange",!1,t))}}function Zh(e,t,n,i){switch(Oh(t)){case 1:var o=Gm;break;case 4:o=Ym;break;default:o=zl}n=o.bind(null,t,n,e),o=void 0,!Ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function la(e,t,n,i,o){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var u=i.stateNode.containerInfo;if(u===o||u.nodeType===8&&u.parentNode===o)break;if(l===4)for(l=i.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===o||h.nodeType===8&&h.parentNode===o))return;l=l.return}for(;u!==null;){if(l=Sn(u),l===null)return;if(h=l.tag,h===5||h===6){i=a=l;continue e}u=u.parentNode}}i=i.return}Sh(function(){var g=a,P=Ol(n),E=[];e:{var S=qh.get(e);if(S!==void 0){var T=Bl,N=e;switch(e){case"keypress":if(ks(n)===0)break e;case"keydown":case"keyup":T=lg;break;case"focusin":N="focus",T=ta;break;case"focusout":N="blur",T=ta;break;case"beforeblur":case"afterblur":T=ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=dg;break;case Yh:case Xh:case Kh:T=Zm;break;case Qh:T=pg;break;case"scroll":T=Xm;break;case"wheel":T=mg;break;case"copy":case"cut":case"paste":T=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Iu}var I=(t&4)!==0,L=!I&&e==="scroll",m=I?S!==null?S+"Capture":null:S;I=[];for(var w=g,j;w!==null;){j=w;var R=j.stateNode;if(j.tag===5&&R!==null&&(j=R,m!==null&&(R=pr(w,m),R!=null&&I.push(wr(w,R,j)))),L)break;w=w.return}0<I.length&&(S=new T(S,N,null,n,P),E.push({event:S,listeners:I}))}}if(!(t&7)){e:{if(S=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",S&&n!==za&&(N=n.relatedTarget||n.fromElement)&&(Sn(N)||N[Mt]))break e;if((T||S)&&(S=P.window===P?P:(S=P.ownerDocument)?S.defaultView||S.parentWindow:window,T?(N=n.relatedTarget||n.toElement,T=g,N=N?Sn(N):null,N!==null&&(L=Dn(N),N!==L||N.tag!==5&&N.tag!==6)&&(N=null)):(T=null,N=g),T!==N)){if(I=Pu,R="onMouseLeave",m="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(I=Iu,R="onPointerLeave",m="onPointerEnter",w="pointer"),L=T==null?S:Xn(T),j=N==null?S:Xn(N),S=new I(R,w+"leave",T,n,P),S.target=L,S.relatedTarget=j,R=null,Sn(P)===g&&(I=new I(m,w+"enter",N,n,P),I.target=j,I.relatedTarget=L,R=I),L=R,T&&N)t:{for(I=T,m=N,w=0,j=I;j;j=Bn(j))w++;for(j=0,R=m;R;R=Bn(R))j++;for(;0<w-j;)I=Bn(I),w--;for(;0<j-w;)m=Bn(m),j--;for(;w--;){if(I===m||m!==null&&I===m.alternate)break t;I=Bn(I),m=Bn(m)}I=null}else I=null;T!==null&&Bu(E,S,T,I,!1),N!==null&&L!==null&&Bu(E,L,N,I,!0)}}e:{if(S=g?Xn(g):window,T=S.nodeName&&S.nodeName.toLowerCase(),T==="select"||T==="input"&&S.type==="file")var M=Sg;else if(_u(S))if(Bh)M=Tg;else{M=jg;var F=Cg}else(T=S.nodeName)&&T.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(M=bg);if(M&&(M=M(e,g))){Hh(E,M,n,P);break e}F&&F(e,S,g),e==="focusout"&&(F=S._wrapperState)&&F.controlled&&S.type==="number"&&La(S,"number",S.value)}switch(F=g?Xn(g):window,e){case"focusin":(_u(F)||F.contentEditable==="true")&&(Gn=F,Ya=g,rr=null);break;case"focusout":rr=Ya=Gn=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Uu(E,n,P);break;case"selectionchange":if(Pg)break;case"keydown":case"keyup":Uu(E,n,P)}var C;if(Vl)e:{switch(e){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else $n?Uh(e,n)&&(p="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Fh&&n.locale!=="ko"&&($n||p!=="onCompositionStart"?p==="onCompositionEnd"&&$n&&(C=Mh()):(qt=P,Hl="value"in qt?qt.value:qt.textContent,$n=!0)),F=Os(g,p),0<F.length&&(p=new Au(p,e,null,n,P),E.push({event:p,listeners:F}),C?p.data=C:(C=zh(n),C!==null&&(p.data=C)))),(C=yg?vg(e,n):xg(e,n))&&(g=Os(g,"onBeforeInput"),0<g.length&&(P=new Au("onBeforeInput","beforeinput",null,n,P),E.push({event:P,listeners:g}),P.data=C))}Jh(E,t)})}function wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Os(e,t){for(var n=t+"Capture",i=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=pr(e,n),a!=null&&i.unshift(wr(e,a,o)),a=pr(e,t),a!=null&&i.push(wr(e,a,o))),e=e.return}return i}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bu(e,t,n,i,o){for(var a=t._reactName,l=[];n!==null&&n!==i;){var u=n,h=u.alternate,g=u.stateNode;if(h!==null&&h===i)break;u.tag===5&&g!==null&&(u=g,o?(h=pr(n,a),h!=null&&l.unshift(wr(n,h,u))):o||(h=pr(n,a),h!=null&&l.push(wr(n,h,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Dg=/\r\n?/g,_g=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Dg,`
`).replace(_g,"")}function cs(e,t,n){if(t=Wu(t),Wu(e)!==t&&n)throw Error(O(425))}function Ms(){}var Ka=null,Qa=null;function qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ja=typeof setTimeout=="function"?setTimeout:void 0,Lg=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,Og=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(Mg)}:Ja;function Mg(e){setTimeout(function(){throw e})}function ca(e,t){var n=t,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(i===0){e.removeChild(o),gr(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=o}while(n);gr(t)}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Tt="__reactFiber$"+wi,kr="__reactProps$"+wi,Mt="__reactContainer$"+wi,Za="__reactEvents$"+wi,Fg="__reactListeners$"+wi,Ug="__reactHandles$"+wi;function Sn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$u(e);e!==null;){if(n=e[Tt])return n;e=$u(e)}return t}e=n,n=e.parentNode}return null}function Rr(e){return e=e[Tt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function uo(e){return e[kr]||null}var el=[],Kn=-1;function pn(e){return{current:e}}function ue(e){0>Kn||(e.current=el[Kn],el[Kn]=null,Kn--)}function oe(e,t){Kn++,el[Kn]=e.current,e.current=t}var dn={},Fe=pn(dn),Ge=pn(!1),Nn=dn;function di(e,t){var n=e.type.contextTypes;if(!n)return dn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function Fs(){ue(Ge),ue(Fe)}function Gu(e,t,n){if(Fe.current!==dn)throw Error(O(168));oe(Fe,t),oe(Ge,n)}function ep(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(O(108,Cm(e)||"Unknown",o));return me({},n,i)}function Us(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Nn=Fe.current,oe(Fe,e),oe(Ge,Ge.current),!0}function Yu(e,t,n){var i=e.stateNode;if(!i)throw Error(O(169));n?(e=ep(e,t,Nn),i.__reactInternalMemoizedMergedChildContext=e,ue(Ge),ue(Fe),oe(Fe,e)):ue(Ge),oe(Ge,n)}var Rt=null,ho=!1,ua=!1;function tp(e){Rt===null?Rt=[e]:Rt.push(e)}function zg(e){ho=!0,tp(e)}function fn(){if(!ua&&Rt!==null){ua=!0;var e=0,t=ee;try{var n=Rt;for(ee=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}Rt=null,ho=!1}catch(o){throw Rt!==null&&(Rt=Rt.slice(e+1)),Th(Ml,fn),o}finally{ee=t,ua=!1}}return null}var Qn=[],qn=0,zs=null,Hs=0,rt=[],st=0,En=null,Dt=1,_t="";function wn(e,t){Qn[qn++]=Hs,Qn[qn++]=zs,zs=e,Hs=t}function np(e,t,n){rt[st++]=Dt,rt[st++]=_t,rt[st++]=En,En=e;var i=Dt;e=_t;var o=32-wt(i)-1;i&=~(1<<o),n+=1;var a=32-wt(t)+o;if(30<a){var l=o-o%5;a=(i&(1<<l)-1).toString(32),i>>=l,o-=l,Dt=1<<32-wt(t)+o|n<<o|i,_t=a+e}else Dt=1<<a|n<<o|i,_t=e}function Gl(e){e.return!==null&&(wn(e,1),np(e,1,0))}function Yl(e){for(;e===zs;)zs=Qn[--qn],Qn[qn]=null,Hs=Qn[--qn],Qn[qn]=null;for(;e===En;)En=rt[--st],rt[st]=null,_t=rt[--st],rt[st]=null,Dt=rt[--st],rt[st]=null}var Ze=null,Je=null,he=!1,ft=null;function ip(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Je=nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Je=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Dt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Je=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nl(e){if(he){var t=Je;if(t){var n=t;if(!Xu(e,t)){if(tl(e))throw Error(O(418));t=nn(n.nextSibling);var i=Ze;t&&Xu(e,t)?ip(i,n):(e.flags=e.flags&-4097|2,he=!1,Ze=e)}}else{if(tl(e))throw Error(O(418));e.flags=e.flags&-4097|2,he=!1,Ze=e}}}function Ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function us(e){if(e!==Ze)return!1;if(!he)return Ku(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qa(e.type,e.memoizedProps)),t&&(t=Je)){if(tl(e))throw rp(),Error(O(418));for(;t;)ip(e,t),t=nn(t.nextSibling)}if(Ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Je=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Je=null}}else Je=Ze?nn(e.stateNode.nextSibling):null;return!0}function rp(){for(var e=Je;e;)e=nn(e.nextSibling)}function hi(){Je=Ze=null,he=!1}function Xl(e){ft===null?ft=[e]:ft.push(e)}var Hg=Ht.ReactCurrentBatchConfig;function Gi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var i=n.stateNode}if(!i)throw Error(O(147,e));var o=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=o.refs;l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function ds(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qu(e){var t=e._init;return t(e._payload)}function sp(e){function t(m,w){if(e){var j=m.deletions;j===null?(m.deletions=[w],m.flags|=16):j.push(w)}}function n(m,w){if(!e)return null;for(;w!==null;)t(m,w),w=w.sibling;return null}function i(m,w){for(m=new Map;w!==null;)w.key!==null?m.set(w.key,w):m.set(w.index,w),w=w.sibling;return m}function o(m,w){return m=an(m,w),m.index=0,m.sibling=null,m}function a(m,w,j){return m.index=j,e?(j=m.alternate,j!==null?(j=j.index,j<w?(m.flags|=2,w):j):(m.flags|=2,w)):(m.flags|=1048576,w)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,w,j,R){return w===null||w.tag!==6?(w=ya(j,m.mode,R),w.return=m,w):(w=o(w,j),w.return=m,w)}function h(m,w,j,R){var M=j.type;return M===Vn?P(m,w,j.props.children,R,j.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yt&&Qu(M)===w.type)?(R=o(w,j.props),R.ref=Gi(m,w,j),R.return=m,R):(R=Es(j.type,j.key,j.props,null,m.mode,R),R.ref=Gi(m,w,j),R.return=m,R)}function g(m,w,j,R){return w===null||w.tag!==4||w.stateNode.containerInfo!==j.containerInfo||w.stateNode.implementation!==j.implementation?(w=va(j,m.mode,R),w.return=m,w):(w=o(w,j.children||[]),w.return=m,w)}function P(m,w,j,R,M){return w===null||w.tag!==7?(w=Tn(j,m.mode,R,M),w.return=m,w):(w=o(w,j),w.return=m,w)}function E(m,w,j){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ya(""+w,m.mode,j),w.return=m,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case es:return j=Es(w.type,w.key,w.props,null,m.mode,j),j.ref=Gi(m,null,w),j.return=m,j;case Wn:return w=va(w,m.mode,j),w.return=m,w;case Yt:var R=w._init;return E(m,R(w._payload),j)}if(Qi(w)||Hi(w))return w=Tn(w,m.mode,j,null),w.return=m,w;ds(m,w)}return null}function S(m,w,j,R){var M=w!==null?w.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return M!==null?null:u(m,w,""+j,R);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case es:return j.key===M?h(m,w,j,R):null;case Wn:return j.key===M?g(m,w,j,R):null;case Yt:return M=j._init,S(m,w,M(j._payload),R)}if(Qi(j)||Hi(j))return M!==null?null:P(m,w,j,R,null);ds(m,j)}return null}function T(m,w,j,R,M){if(typeof R=="string"&&R!==""||typeof R=="number")return m=m.get(j)||null,u(w,m,""+R,M);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case es:return m=m.get(R.key===null?j:R.key)||null,h(w,m,R,M);case Wn:return m=m.get(R.key===null?j:R.key)||null,g(w,m,R,M);case Yt:var F=R._init;return T(m,w,j,F(R._payload),M)}if(Qi(R)||Hi(R))return m=m.get(j)||null,P(w,m,R,M,null);ds(w,R)}return null}function N(m,w,j,R){for(var M=null,F=null,C=w,p=w=0,y=null;C!==null&&p<j.length;p++){C.index>p?(y=C,C=null):y=C.sibling;var v=S(m,C,j[p],R);if(v===null){C===null&&(C=y);break}e&&C&&v.alternate===null&&t(m,C),w=a(v,w,p),F===null?M=v:F.sibling=v,F=v,C=y}if(p===j.length)return n(m,C),he&&wn(m,p),M;if(C===null){for(;p<j.length;p++)C=E(m,j[p],R),C!==null&&(w=a(C,w,p),F===null?M=C:F.sibling=C,F=C);return he&&wn(m,p),M}for(C=i(m,C);p<j.length;p++)y=T(C,m,p,j[p],R),y!==null&&(e&&y.alternate!==null&&C.delete(y.key===null?p:y.key),w=a(y,w,p),F===null?M=y:F.sibling=y,F=y);return e&&C.forEach(function(k){return t(m,k)}),he&&wn(m,p),M}function I(m,w,j,R){var M=Hi(j);if(typeof M!="function")throw Error(O(150));if(j=M.call(j),j==null)throw Error(O(151));for(var F=M=null,C=w,p=w=0,y=null,v=j.next();C!==null&&!v.done;p++,v=j.next()){C.index>p?(y=C,C=null):y=C.sibling;var k=S(m,C,v.value,R);if(k===null){C===null&&(C=y);break}e&&C&&k.alternate===null&&t(m,C),w=a(k,w,p),F===null?M=k:F.sibling=k,F=k,C=y}if(v.done)return n(m,C),he&&wn(m,p),M;if(C===null){for(;!v.done;p++,v=j.next())v=E(m,v.value,R),v!==null&&(w=a(v,w,p),F===null?M=v:F.sibling=v,F=v);return he&&wn(m,p),M}for(C=i(m,C);!v.done;p++,v=j.next())v=T(C,m,p,v.value,R),v!==null&&(e&&v.alternate!==null&&C.delete(v.key===null?p:v.key),w=a(v,w,p),F===null?M=v:F.sibling=v,F=v);return e&&C.forEach(function(b){return t(m,b)}),he&&wn(m,p),M}function L(m,w,j,R){if(typeof j=="object"&&j!==null&&j.type===Vn&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case es:e:{for(var M=j.key,F=w;F!==null;){if(F.key===M){if(M=j.type,M===Vn){if(F.tag===7){n(m,F.sibling),w=o(F,j.props.children),w.return=m,m=w;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yt&&Qu(M)===F.type){n(m,F.sibling),w=o(F,j.props),w.ref=Gi(m,F,j),w.return=m,m=w;break e}n(m,F);break}else t(m,F);F=F.sibling}j.type===Vn?(w=Tn(j.props.children,m.mode,R,j.key),w.return=m,m=w):(R=Es(j.type,j.key,j.props,null,m.mode,R),R.ref=Gi(m,w,j),R.return=m,m=R)}return l(m);case Wn:e:{for(F=j.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===j.containerInfo&&w.stateNode.implementation===j.implementation){n(m,w.sibling),w=o(w,j.children||[]),w.return=m,m=w;break e}else{n(m,w);break}else t(m,w);w=w.sibling}w=va(j,m.mode,R),w.return=m,m=w}return l(m);case Yt:return F=j._init,L(m,w,F(j._payload),R)}if(Qi(j))return N(m,w,j,R);if(Hi(j))return I(m,w,j,R);ds(m,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,w!==null&&w.tag===6?(n(m,w.sibling),w=o(w,j),w.return=m,m=w):(n(m,w),w=ya(j,m.mode,R),w.return=m,m=w),l(m)):n(m,w)}return L}var pi=sp(!0),op=sp(!1),Bs=pn(null),Ws=null,Jn=null,Kl=null;function Ql(){Kl=Jn=Ws=null}function ql(e){var t=Bs.current;ue(Bs),e._currentValue=t}function il(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function si(e,t){Ws=e,Kl=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&($e=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(Ws===null)throw Error(O(308));Jn=e,Ws.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var Cn=null;function Jl(e){Cn===null?Cn=[e]:Cn.push(e)}function ap(e,t,n,i){var o=t.interleaved;return o===null?(n.next=n,Jl(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ft(e,i)}function Ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xt=!1;function Zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,Q&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,Ft(e,n)}return o=i.interleaved,o===null?(t.next=t,Jl(i)):(t.next=o.next,o.next=t),i.interleaved=t,Ft(e,n)}function Ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Fl(e,n)}}function qu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vs(e,t,n,i){var o=e.updateQueue;Xt=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,u=o.shared.pending;if(u!==null){o.shared.pending=null;var h=u,g=h.next;h.next=null,l===null?a=g:l.next=g,l=h;var P=e.alternate;P!==null&&(P=P.updateQueue,u=P.lastBaseUpdate,u!==l&&(u===null?P.firstBaseUpdate=g:u.next=g,P.lastBaseUpdate=h))}if(a!==null){var E=o.baseState;l=0,P=g=h=null,u=a;do{var S=u.lane,T=u.eventTime;if((i&S)===S){P!==null&&(P=P.next={eventTime:T,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var N=e,I=u;switch(S=t,T=n,I.tag){case 1:if(N=I.payload,typeof N=="function"){E=N.call(T,E,S);break e}E=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=I.payload,S=typeof N=="function"?N.call(T,E,S):N,S==null)break e;E=me({},E,S);break e;case 2:Xt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,S=o.effects,S===null?o.effects=[u]:S.push(u))}else T={eventTime:T,lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},P===null?(g=P=T,h=E):P=P.next=T,l|=S;if(u=u.next,u===null){if(u=o.shared.pending,u===null)break;S=u,u=S.next,S.next=null,o.lastBaseUpdate=S,o.shared.pending=null}}while(!0);if(P===null&&(h=E),o.baseState=h,o.firstBaseUpdate=g,o.lastBaseUpdate=P,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);An|=l,e.lanes=l,e.memoizedState=E}}function Ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=n,typeof o!="function")throw Error(O(191,o));o.call(i)}}}var Dr={},Et=pn(Dr),Sr=pn(Dr),Cr=pn(Dr);function jn(e){if(e===Dr)throw Error(O(174));return e}function ec(e,t){switch(oe(Cr,t),oe(Sr,e),oe(Et,Dr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ma(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ma(t,e)}ue(Et),oe(Et,t)}function fi(){ue(Et),ue(Sr),ue(Cr)}function cp(e){jn(Cr.current);var t=jn(Et.current),n=Ma(t,e.type);t!==n&&(oe(Sr,e),oe(Et,n))}function tc(e){Sr.current===e&&(ue(Et),ue(Sr))}var pe=pn(0);function $s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=[];function nc(){for(var e=0;e<da.length;e++)da[e]._workInProgressVersionPrimary=null;da.length=0}var Cs=Ht.ReactCurrentDispatcher,ha=Ht.ReactCurrentBatchConfig,Pn=0,fe=null,Ce=null,Te=null,Gs=!1,sr=!1,jr=0,Bg=0;function Le(){throw Error(O(321))}function ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function rc(e,t,n,i,o,a){if(Pn=a,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cs.current=e===null||e.memoizedState===null?Gg:Yg,e=n(i,o),sr){a=0;do{if(sr=!1,jr=0,25<=a)throw Error(O(301));a+=1,Te=Ce=null,t.updateQueue=null,Cs.current=Xg,e=n(i,o)}while(sr)}if(Cs.current=Ys,t=Ce!==null&&Ce.next!==null,Pn=0,Te=Ce=fe=null,Gs=!1,t)throw Error(O(300));return e}function sc(){var e=jr!==0;return jr=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?fe.memoizedState=Te=e:Te=Te.next=e,Te}function ct(){if(Ce===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Te===null?fe.memoizedState:Te.next;if(t!==null)Te=t,Ce=e;else{if(e===null)throw Error(O(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Te===null?fe.memoizedState=Te=e:Te=Te.next=e}return Te}function br(e,t){return typeof t=="function"?t(e):t}function pa(e){var t=ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var i=Ce,o=i.baseQueue,a=n.pending;if(a!==null){if(o!==null){var l=o.next;o.next=a.next,a.next=l}i.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,i=i.baseState;var u=l=null,h=null,g=a;do{var P=g.lane;if((Pn&P)===P)h!==null&&(h=h.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),i=g.hasEagerState?g.eagerState:e(i,g.action);else{var E={lane:P,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};h===null?(u=h=E,l=i):h=h.next=E,fe.lanes|=P,An|=P}g=g.next}while(g!==null&&g!==a);h===null?l=i:h.next=u,St(i,t.memoizedState)||($e=!0),t.memoizedState=i,t.baseState=l,t.baseQueue=h,n.lastRenderedState=i}if(e=n.interleaved,e!==null){o=e;do a=o.lane,fe.lanes|=a,An|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fa(e){var t=ct(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do a=e(a,l.action),l=l.next;while(l!==o);St(a,t.memoizedState)||($e=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function up(){}function dp(e,t){var n=fe,i=ct(),o=t(),a=!St(i.memoizedState,o);if(a&&(i.memoizedState=o,$e=!0),i=i.queue,oc(fp.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Tr(9,pp.bind(null,n,i,o,t),void 0,null),Ne===null)throw Error(O(349));Pn&30||hp(n,t,o)}return o}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pp(e,t,n,i){t.value=n,t.getSnapshot=i,mp(t)&&gp(e)}function fp(e,t,n){return n(function(){mp(t)&&gp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function gp(e){var t=Ft(e,1);t!==null&&kt(t,e,1,-1)}function Zu(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},t.queue=e,e=e.dispatch=$g.bind(null,fe,e),[t.memoizedState,e]}function Tr(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function yp(){return ct().memoizedState}function js(e,t,n,i){var o=jt();fe.flags|=e,o.memoizedState=Tr(1|t,n,void 0,i===void 0?null:i)}function po(e,t,n,i){var o=ct();i=i===void 0?null:i;var a=void 0;if(Ce!==null){var l=Ce.memoizedState;if(a=l.destroy,i!==null&&ic(i,l.deps)){o.memoizedState=Tr(t,n,a,i);return}}fe.flags|=e,o.memoizedState=Tr(1|t,n,a,i)}function ed(e,t){return js(8390656,8,e,t)}function oc(e,t){return po(2048,8,e,t)}function vp(e,t){return po(4,2,e,t)}function xp(e,t){return po(4,4,e,t)}function wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,po(4,4,wp.bind(null,t,e),n)}function ac(){}function Sp(e,t){var n=ct();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ic(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Cp(e,t){var n=ct();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&ic(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function jp(e,t,n){return Pn&21?(St(n,t)||(n=Ph(),fe.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,$e=!0),e.memoizedState=n)}function Wg(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var i=ha.transition;ha.transition={};try{e(!1),t()}finally{ee=n,ha.transition=i}}function bp(){return ct().memoizedState}function Vg(e,t,n){var i=on(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tp(e))Np(t,n);else if(n=ap(e,t,n,i),n!==null){var o=He();kt(n,e,i,o),Ep(n,t,i)}}function $g(e,t,n){var i=on(e),o={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tp(e))Np(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(o.hasEagerState=!0,o.eagerState=u,St(u,l)){var h=t.interleaved;h===null?(o.next=o,Jl(t)):(o.next=h.next,h.next=o),t.interleaved=o;return}}catch{}finally{}n=ap(e,t,o,i),n!==null&&(o=He(),kt(n,e,i,o),Ep(n,t,i))}}function Tp(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function Np(e,t){sr=Gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ep(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Fl(e,n)}}var Ys={readContext:lt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Gg={readContext:lt,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,js(4194308,4,wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return js(4194308,4,e,t)},useInsertionEffect:function(e,t){return js(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=jt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Vg.bind(null,fe,e),[i.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:ac,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=Wg.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=fe,o=jt();if(he){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Ne===null)throw Error(O(349));Pn&30||hp(i,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,ed(fp.bind(null,i,a,e),[e]),i.flags|=2048,Tr(9,pp.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=jt(),t=Ne.identifierPrefix;if(he){var n=_t,i=Dt;n=(i&~(1<<32-wt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yg={readContext:lt,useCallback:Sp,useContext:lt,useEffect:oc,useImperativeHandle:kp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:Cp,useReducer:pa,useRef:yp,useState:function(){return pa(br)},useDebugValue:ac,useDeferredValue:function(e){var t=ct();return jp(t,Ce.memoizedState,e)},useTransition:function(){var e=pa(br)[0],t=ct().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:dp,useId:bp,unstable_isNewReconciler:!1},Xg={readContext:lt,useCallback:Sp,useContext:lt,useEffect:oc,useImperativeHandle:kp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:Cp,useReducer:fa,useRef:yp,useState:function(){return fa(br)},useDebugValue:ac,useDeferredValue:function(e){var t=ct();return Ce===null?t.memoizedState=e:jp(t,Ce.memoizedState,e)},useTransition:function(){var e=fa(br)[0],t=ct().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:dp,useId:bp,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=He(),o=on(e),a=Lt(i,o);a.payload=t,n!=null&&(a.callback=n),t=rn(e,a,o),t!==null&&(kt(t,e,o,i),Ss(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=He(),o=on(e),a=Lt(i,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=rn(e,a,o),t!==null&&(kt(t,e,o,i),Ss(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),i=on(e),o=Lt(n,i);o.tag=2,t!=null&&(o.callback=t),t=rn(e,o,i),t!==null&&(kt(t,e,i,n),Ss(t,e,i))}};function td(e,t,n,i,o,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,l):t.prototype&&t.prototype.isPureReactComponent?!vr(n,i)||!vr(o,a):!0}function Pp(e,t,n){var i=!1,o=dn,a=t.contextType;return typeof a=="object"&&a!==null?a=lt(a):(o=Ye(t)?Nn:Fe.current,i=t.contextTypes,a=(i=i!=null)?di(e,o):dn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function nd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,i){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Zl(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=lt(a):(a=Ye(t)?Nn:Fe.current,o.context=di(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(rl(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fo.enqueueReplaceState(o,o.state,null),Vs(e,n,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function mi(e,t){try{var n="",i=t;do n+=Sm(i),i=i.return;while(i);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ma(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kg=typeof WeakMap=="function"?WeakMap:Map;function Ap(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){Ks||(Ks=!0,gl=i),ol(e,t)},n}function Ip(e,t,n){n=Lt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;n.payload=function(){return i(o)},n.callback=function(){ol(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ol(e,t),typeof i!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function id(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Kg;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(n)||(o.add(n),e=cy.bind(null,e,t,n),t.then(e,e))}function rd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sd(e,t,n,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,rn(n,t,1))),n.lanes|=1),e)}var Qg=Ht.ReactCurrentOwner,$e=!1;function ze(e,t,n,i){t.child=e===null?op(t,null,n,i):pi(t,e.child,n,i)}function od(e,t,n,i,o){n=n.render;var a=t.ref;return si(t,o),i=rc(e,t,n,i,a,o),n=sc(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(he&&n&&Gl(t),t.flags|=1,ze(e,t,i,o),t.child)}function ad(e,t,n,i,o){if(e===null){var a=n.type;return typeof a=="function"&&!mc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Rp(e,t,a,i,o)):(e=Es(n.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:vr,n(l,i)&&e.ref===t.ref)return Ut(e,t,o)}return t.flags|=1,e=an(a,i),e.ref=t.ref,e.return=t,t.child=e}function Rp(e,t,n,i,o){if(e!==null){var a=e.memoizedProps;if(vr(a,i)&&e.ref===t.ref)if($e=!1,t.pendingProps=i=a,(e.lanes&o)!==0)e.flags&131072&&($e=!0);else return t.lanes=e.lanes,Ut(e,t,o)}return al(e,t,n,i,o)}function Dp(e,t,n){var i=t.pendingProps,o=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(ei,Qe),Qe|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(ei,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,oe(ei,Qe),Qe|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,oe(ei,Qe),Qe|=i;return ze(e,t,o,n),t.child}function _p(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function al(e,t,n,i,o){var a=Ye(n)?Nn:Fe.current;return a=di(t,a),si(t,o),n=rc(e,t,n,i,a,o),i=sc(),e!==null&&!$e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(he&&i&&Gl(t),t.flags|=1,ze(e,t,n,o),t.child)}function ld(e,t,n,i,o){if(Ye(n)){var a=!0;Us(t)}else a=!1;if(si(t,o),t.stateNode===null)bs(e,t),Pp(t,n,i),sl(t,n,i,o),i=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var h=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=lt(g):(g=Ye(n)?Nn:Fe.current,g=di(t,g));var P=n.getDerivedStateFromProps,E=typeof P=="function"||typeof l.getSnapshotBeforeUpdate=="function";E||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==i||h!==g)&&nd(t,l,i,g),Xt=!1;var S=t.memoizedState;l.state=S,Vs(t,i,l,o),h=t.memoizedState,u!==i||S!==h||Ge.current||Xt?(typeof P=="function"&&(rl(t,n,P,i),h=t.memoizedState),(u=Xt||td(t,n,u,i,S,h,g))?(E||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),l.props=i,l.state=h,l.context=g,i=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,lp(e,t),u=t.memoizedProps,g=t.type===t.elementType?u:ht(t.type,u),l.props=g,E=t.pendingProps,S=l.context,h=n.contextType,typeof h=="object"&&h!==null?h=lt(h):(h=Ye(n)?Nn:Fe.current,h=di(t,h));var T=n.getDerivedStateFromProps;(P=typeof T=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==E||S!==h)&&nd(t,l,i,h),Xt=!1,S=t.memoizedState,l.state=S,Vs(t,i,l,o);var N=t.memoizedState;u!==E||S!==N||Ge.current||Xt?(typeof T=="function"&&(rl(t,n,T,i),N=t.memoizedState),(g=Xt||td(t,n,g,i,S,N,h)||!1)?(P||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,N,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,N,h)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),l.props=i,l.state=N,l.context=h,i=g):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),i=!1)}return ll(e,t,n,i,a,o)}function ll(e,t,n,i,o,a){_p(e,t);var l=(t.flags&128)!==0;if(!i&&!l)return o&&Yu(t,n,!1),Ut(e,t,a);i=t.stateNode,Qg.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&l?(t.child=pi(t,e.child,null,a),t.child=pi(t,null,u,a)):ze(e,t,u,a),t.memoizedState=i.state,o&&Yu(t,n,!0),t.child}function Lp(e){var t=e.stateNode;t.pendingContext?Gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gu(e,t.context,!1),ec(e,t.containerInfo)}function cd(e,t,n,i,o){return hi(),Xl(o),t.flags|=256,ze(e,t,n,i),t.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Op(e,t,n){var i=t.pendingProps,o=pe.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(o&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),oe(pe,o&1),e===null)return nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=i.children,e=i.fallback,a?(i=t.mode,a=t.child,l={mode:"hidden",children:l},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=yo(l,i,0,null),e=Tn(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ul(n),t.memoizedState=cl,e):lc(t,l));if(o=e.memoizedState,o!==null&&(u=o.dehydrated,u!==null))return qg(e,t,l,i,u,o,n);if(a){a=i.fallback,l=t.mode,o=e.child,u=o.sibling;var h={mode:"hidden",children:i.children};return!(l&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=h,t.deletions=null):(i=an(o,h),i.subtreeFlags=o.subtreeFlags&14680064),u!==null?a=an(u,a):(a=Tn(a,l,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,l=e.child.memoizedState,l=l===null?ul(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=cl,i}return a=e.child,e=a.sibling,i=an(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function lc(e,t){return t=yo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,i){return i!==null&&Xl(i),pi(t,e.child,null,n),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qg(e,t,n,i,o,a,l){if(n)return t.flags&256?(t.flags&=-257,i=ma(Error(O(422))),hs(e,t,l,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,o=t.mode,i=yo({mode:"visible",children:i.children},o,0,null),a=Tn(a,o,l,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&pi(t,e.child,null,l),t.child.memoizedState=ul(l),t.memoizedState=cl,a);if(!(t.mode&1))return hs(e,t,l,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var u=i.dgst;return i=u,a=Error(O(419)),i=ma(a,i,void 0),hs(e,t,l,i)}if(u=(l&e.childLanes)!==0,$e||u){if(i=Ne,i!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|l)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Ft(e,o),kt(i,e,o,-1))}return fc(),i=ma(Error(O(421))),hs(e,t,l,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=uy.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Je=nn(o.nextSibling),Ze=t,he=!0,ft=null,e!==null&&(rt[st++]=Dt,rt[st++]=_t,rt[st++]=En,Dt=e.id,_t=e.overflow,En=t),t=lc(t,i.children),t.flags|=4096,t)}function ud(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),il(e.return,t,n)}function ga(e,t,n,i,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=o)}function Mp(e,t,n){var i=t.pendingProps,o=i.revealOrder,a=i.tail;if(ze(e,t,i.children,n),i=pe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,n,t);else if(e.tag===19)ud(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(oe(pe,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$s(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ga(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$s(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ga(t,!0,n,null,a);break;case"together":ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jg(e,t,n){switch(t.tag){case 3:Lp(t),hi();break;case 5:cp(t);break;case 1:Ye(t.type)&&Us(t);break;case 4:ec(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;oe(Bs,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(oe(pe,pe.current&1),t.flags|=128,null):n&t.child.childLanes?Op(e,t,n):(oe(pe,pe.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);oe(pe,pe.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return Mp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),oe(pe,pe.current),i)break;return null;case 22:case 23:return t.lanes=0,Dp(e,t,n)}return Ut(e,t,n)}var Fp,dl,Up,zp;Fp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dl=function(){};Up=function(e,t,n,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,jn(Et.current);var a=null;switch(n){case"input":o=Da(e,o),i=Da(e,i),a=[];break;case"select":o=me({},o,{value:void 0}),i=me({},i,{value:void 0}),a=[];break;case"textarea":o=Oa(e,o),i=Oa(e,i),a=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ms)}Fa(n,i);var l;n=null;for(g in o)if(!i.hasOwnProperty(g)&&o.hasOwnProperty(g)&&o[g]!=null)if(g==="style"){var u=o[g];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(dr.hasOwnProperty(g)?a||(a=[]):(a=a||[]).push(g,null));for(g in i){var h=i[g];if(u=o!=null?o[g]:void 0,i.hasOwnProperty(g)&&h!==u&&(h!=null||u!=null))if(g==="style")if(u){for(l in u)!u.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in h)h.hasOwnProperty(l)&&u[l]!==h[l]&&(n||(n={}),n[l]=h[l])}else n||(a||(a=[]),a.push(g,n)),n=h;else g==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(a=a||[]).push(g,h)):g==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(g,""+h):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(dr.hasOwnProperty(g)?(h!=null&&g==="onScroll"&&ce("scroll",e),a||u===h||(a=[])):(a=a||[]).push(g,h))}n&&(a=a||[]).push("style",n);var g=a;(t.updateQueue=g)&&(t.flags|=4)}};zp=function(e,t,n,i){n!==i&&(t.flags|=4)};function Yi(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Zg(e,t,n){var i=t.pendingProps;switch(Yl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ye(t.type)&&Fs(),Oe(t),null;case 3:return i=t.stateNode,fi(),ue(Ge),ue(Fe),nc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(us(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(xl(ft),ft=null))),dl(e,t),Oe(t),null;case 5:tc(t);var o=jn(Cr.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(O(166));return Oe(t),null}if(e=jn(Et.current),us(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[Tt]=t,i[kr]=a,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",i),ce("close",i);break;case"iframe":case"object":case"embed":ce("load",i);break;case"video":case"audio":for(o=0;o<Ji.length;o++)ce(Ji[o],i);break;case"source":ce("error",i);break;case"img":case"image":case"link":ce("error",i),ce("load",i);break;case"details":ce("toggle",i);break;case"input":xu(i,a),ce("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},ce("invalid",i);break;case"textarea":ku(i,a),ce("invalid",i)}Fa(n,a),o=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?i.textContent!==u&&(a.suppressHydrationWarning!==!0&&cs(i.textContent,u,e),o=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&cs(i.textContent,u,e),o=["children",""+u]):dr.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&ce("scroll",i)}switch(n){case"input":ts(i),wu(i,a,!0);break;case"textarea":ts(i),Su(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Ms)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=l.createElement(n,{is:i.is}):(e=l.createElement(n),n==="select"&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,n),e[Tt]=t,e[kr]=i,Fp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ua(n,i),n){case"dialog":ce("cancel",e),ce("close",e),o=i;break;case"iframe":case"object":case"embed":ce("load",e),o=i;break;case"video":case"audio":for(o=0;o<Ji.length;o++)ce(Ji[o],e);o=i;break;case"source":ce("error",e),o=i;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=i;break;case"details":ce("toggle",e),o=i;break;case"input":xu(e,i),o=Da(e,i),ce("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=me({},i,{value:void 0}),ce("invalid",e);break;case"textarea":ku(e,i),o=Oa(e,i),ce("invalid",e);break;default:o=i}Fa(n,o),u=o;for(a in u)if(u.hasOwnProperty(a)){var h=u[a];a==="style"?yh(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&mh(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&hr(e,h):typeof h=="number"&&hr(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(dr.hasOwnProperty(a)?h!=null&&a==="onScroll"&&ce("scroll",e):h!=null&&Rl(e,a,h,l))}switch(n){case"input":ts(e),wu(e,i,!1);break;case"textarea":ts(e),Su(e);break;case"option":i.value!=null&&e.setAttribute("value",""+un(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?ti(e,!!i.multiple,a,!1):i.defaultValue!=null&&ti(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ms)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)zp(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(O(166));if(n=jn(Cr.current),jn(Et.current),us(t)){if(i=t.stateNode,n=t.memoizedProps,i[Tt]=t,(a=i.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:cs(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cs(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Tt]=t,t.stateNode=i}return Oe(t),null;case 13:if(ue(pe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&Je!==null&&t.mode&1&&!(t.flags&128))rp(),hi(),t.flags|=98560,a=!1;else if(a=us(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(O(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(O(317));a[Tt]=t}else hi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),a=!1}else ft!==null&&(xl(ft),ft=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?je===0&&(je=3):fc())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return fi(),dl(e,t),e===null&&xr(t.stateNode.containerInfo),Oe(t),null;case 10:return ql(t.type._context),Oe(t),null;case 17:return Ye(t.type)&&Fs(),Oe(t),null;case 19:if(ue(pe),a=t.memoizedState,a===null)return Oe(t),null;if(i=(t.flags&128)!==0,l=a.rendering,l===null)if(i)Yi(a,!1);else{if(je!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=$s(e),l!==null){for(t.flags|=128,Yi(a,!1),i=l.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(pe,pe.current&1|2),t.child}e=e.sibling}a.tail!==null&&xe()>gi&&(t.flags|=128,i=!0,Yi(a,!1),t.lanes=4194304)}else{if(!i)if(e=$s(l),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!he)return Oe(t),null}else 2*xe()-a.renderingStartTime>gi&&n!==1073741824&&(t.flags|=128,i=!0,Yi(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=xe(),t.sibling=null,n=pe.current,oe(pe,i?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return pc(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Qe&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function ey(e,t){switch(Yl(t),t.tag){case 1:return Ye(t.type)&&Fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(),ue(Ge),ue(Fe),nc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tc(t),null;case 13:if(ue(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(pe),null;case 4:return fi(),null;case 10:return ql(t.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var ps=!1,Me=!1,ty=typeof WeakSet=="function"?WeakSet:Set,B=null;function Zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ge(e,t,i)}else n.current=null}function hl(e,t,n){try{n()}catch(i){ge(e,t,i)}}var dd=!1;function ny(e,t){if(Ka=_s,e=$h(),$l(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,h=-1,g=0,P=0,E=e,S=null;t:for(;;){for(var T;E!==n||o!==0&&E.nodeType!==3||(u=l+o),E!==a||i!==0&&E.nodeType!==3||(h=l+i),E.nodeType===3&&(l+=E.nodeValue.length),(T=E.firstChild)!==null;)S=E,E=T;for(;;){if(E===e)break t;if(S===n&&++g===o&&(u=l),S===a&&++P===i&&(h=l),(T=E.nextSibling)!==null)break;E=S,S=E.parentNode}E=T}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qa={focusedElem:e,selectionRange:n},_s=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var I=N.memoizedProps,L=N.memoizedState,m=t.stateNode,w=m.getSnapshotBeforeUpdate(t.elementType===t.type?I:ht(t.type,I),L);m.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var j=t.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(R){ge(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return N=dd,dd=!1,N}function or(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&hl(t,n,a)}o=o.next}while(o!==i)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Hp(e){var t=e.alternate;t!==null&&(e.alternate=null,Hp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[kr],delete t[Za],delete t[Fg],delete t[Ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bp(e){return e.tag===5||e.tag===3||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ms));else if(i!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function ml(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}var Ae=null,pt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)Wp(e,t,n),n=n.sibling}function Wp(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(oo,n)}catch{}switch(n.tag){case 5:Me||Zn(n,t);case 6:var i=Ae,o=pt;Ae=null,Gt(e,t,n),Ae=i,pt=o,Ae!==null&&(pt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(pt?(e=Ae,n=n.stateNode,e.nodeType===8?ca(e.parentNode,n):e.nodeType===1&&ca(e,n),gr(e)):ca(Ae,n.stateNode));break;case 4:i=Ae,o=pt,Ae=n.stateNode.containerInfo,pt=!0,Gt(e,t,n),Ae=i,pt=o;break;case 0:case 11:case 14:case 15:if(!Me&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var a=o,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&hl(n,t,l),o=o.next}while(o!==i)}Gt(e,t,n);break;case 1:if(!Me&&(Zn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(u){ge(n,t,u)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Me=(i=Me)||n.memoizedState!==null,Gt(e,t,n),Me=i):Gt(e,t,n);break;default:Gt(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ty),t.forEach(function(i){var o=dy.bind(null,e,i);n.has(i)||(n.add(i),i.then(o,o))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ae=u.stateNode,pt=!1;break e;case 3:Ae=u.stateNode.containerInfo,pt=!0;break e;case 4:Ae=u.stateNode.containerInfo,pt=!0;break e}u=u.return}if(Ae===null)throw Error(O(160));Wp(a,l,o),Ae=null,pt=!1;var h=o.alternate;h!==null&&(h.return=null),o.return=null}catch(g){ge(o,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vp(t,e),t=t.sibling}function Vp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),Ct(e),i&4){try{or(3,e,e.return),mo(3,e)}catch(I){ge(e,e.return,I)}try{or(5,e,e.return)}catch(I){ge(e,e.return,I)}}break;case 1:dt(t,e),Ct(e),i&512&&n!==null&&Zn(n,n.return);break;case 5:if(dt(t,e),Ct(e),i&512&&n!==null&&Zn(n,n.return),e.flags&32){var o=e.stateNode;try{hr(o,"")}catch(I){ge(e,e.return,I)}}if(i&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&hh(o,a),Ua(u,l);var g=Ua(u,a);for(l=0;l<h.length;l+=2){var P=h[l],E=h[l+1];P==="style"?yh(o,E):P==="dangerouslySetInnerHTML"?mh(o,E):P==="children"?hr(o,E):Rl(o,P,E,g)}switch(u){case"input":_a(o,a);break;case"textarea":ph(o,a);break;case"select":var S=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var T=a.value;T!=null?ti(o,!!a.multiple,T,!1):S!==!!a.multiple&&(a.defaultValue!=null?ti(o,!!a.multiple,a.defaultValue,!0):ti(o,!!a.multiple,a.multiple?[]:"",!1))}o[kr]=a}catch(I){ge(e,e.return,I)}}break;case 6:if(dt(t,e),Ct(e),i&4){if(e.stateNode===null)throw Error(O(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(I){ge(e,e.return,I)}}break;case 3:if(dt(t,e),Ct(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(I){ge(e,e.return,I)}break;case 4:dt(t,e),Ct(e);break;case 13:dt(t,e),Ct(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(dc=xe())),i&4&&pd(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(g=Me)||P,dt(t,e),Me=g):dt(t,e),Ct(e),i&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!P&&e.mode&1)for(B=e,P=e.child;P!==null;){for(E=B=P;B!==null;){switch(S=B,T=S.child,S.tag){case 0:case 11:case 14:case 15:or(4,S,S.return);break;case 1:Zn(S,S.return);var N=S.stateNode;if(typeof N.componentWillUnmount=="function"){i=S,n=S.return;try{t=i,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(I){ge(i,n,I)}}break;case 5:Zn(S,S.return);break;case 22:if(S.memoizedState!==null){md(E);continue}}T!==null?(T.return=S,B=T):md(E)}P=P.sibling}e:for(P=null,E=e;;){if(E.tag===5){if(P===null){P=E;try{o=E.stateNode,g?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=E.stateNode,h=E.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=gh("display",l))}catch(I){ge(e,e.return,I)}}}else if(E.tag===6){if(P===null)try{E.stateNode.nodeValue=g?"":E.memoizedProps}catch(I){ge(e,e.return,I)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;P===E&&(P=null),E=E.return}P===E&&(P=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:dt(t,e),Ct(e),i&4&&pd(e);break;case 21:break;default:dt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bp(n)){var i=n;break e}n=n.return}throw Error(O(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(hr(o,""),i.flags&=-33);var a=hd(e);ml(e,a,o);break;case 3:case 4:var l=i.stateNode.containerInfo,u=hd(e);fl(e,u,l);break;default:throw Error(O(161))}}catch(h){ge(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function iy(e,t,n){B=e,$p(e)}function $p(e,t,n){for(var i=(e.mode&1)!==0;B!==null;){var o=B,a=o.child;if(o.tag===22&&i){var l=o.memoizedState!==null||ps;if(!l){var u=o.alternate,h=u!==null&&u.memoizedState!==null||Me;u=ps;var g=Me;if(ps=l,(Me=h)&&!g)for(B=o;B!==null;)l=B,h=l.child,l.tag===22&&l.memoizedState!==null?gd(o):h!==null?(h.return=l,B=h):gd(o);for(;a!==null;)B=a,$p(a),a=a.sibling;B=o,ps=u,Me=g}fd(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,B=a):fd(e)}}function fd(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||mo(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Me)if(n===null)i.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);i.componentDidUpdate(o,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ju(t,a,i);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ju(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var P=g.memoizedState;if(P!==null){var E=P.dehydrated;E!==null&&gr(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Me||t.flags&512&&pl(t)}catch(S){ge(t,t.return,S)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function md(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function gd(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(h){ge(t,n,h)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(h){ge(t,o,h)}}var a=t.return;try{pl(t)}catch(h){ge(t,a,h)}break;case 5:var l=t.return;try{pl(t)}catch(h){ge(t,l,h)}}}catch(h){ge(t,t.return,h)}if(t===e){B=null;break}var u=t.sibling;if(u!==null){u.return=t.return,B=u;break}B=t.return}}var ry=Math.ceil,Xs=Ht.ReactCurrentDispatcher,cc=Ht.ReactCurrentOwner,at=Ht.ReactCurrentBatchConfig,Q=0,Ne=null,ke=null,Ie=0,Qe=0,ei=pn(0),je=0,Nr=null,An=0,go=0,uc=0,ar=null,Ve=null,dc=0,gi=1/0,It=null,Ks=!1,gl=null,sn=null,fs=!1,Jt=null,Qs=0,lr=0,yl=null,Ts=-1,Ns=0;function He(){return Q&6?xe():Ts!==-1?Ts:Ts=xe()}function on(e){return e.mode&1?Q&2&&Ie!==0?Ie&-Ie:Hg.transition!==null?(Ns===0&&(Ns=Ph()),Ns):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Oh(e.type)),e):1}function kt(e,t,n,i){if(50<lr)throw lr=0,yl=null,Error(O(185));Ar(e,n,i),(!(Q&2)||e!==Ne)&&(e===Ne&&(!(Q&2)&&(go|=n),je===4&&Qt(e,Ie)),Xe(e,i),n===1&&Q===0&&!(t.mode&1)&&(gi=xe()+500,ho&&fn()))}function Xe(e,t){var n=e.callbackNode;Hm(e,t);var i=Ds(e,e===Ne?Ie:0);if(i===0)n!==null&&bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&bu(n),t===1)e.tag===0?zg(yd.bind(null,e)):tp(yd.bind(null,e)),Og(function(){!(Q&6)&&fn()}),n=null;else{switch(Ah(i)){case 1:n=Ml;break;case 4:n=Nh;break;case 16:n=Rs;break;case 536870912:n=Eh;break;default:n=Rs}n=Zp(n,Gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gp(e,t){if(Ts=-1,Ns=0,Q&6)throw Error(O(327));var n=e.callbackNode;if(oi()&&e.callbackNode!==n)return null;var i=Ds(e,e===Ne?Ie:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=qs(e,i);else{t=i;var o=Q;Q|=2;var a=Xp();(Ne!==e||Ie!==t)&&(It=null,gi=xe()+500,bn(e,t));do try{ay();break}catch(u){Yp(e,u)}while(!0);Ql(),Xs.current=a,Q=o,ke!==null?t=0:(Ne=null,Ie=0,t=je)}if(t!==0){if(t===2&&(o=Va(e),o!==0&&(i=o,t=vl(e,o))),t===1)throw n=Nr,bn(e,0),Qt(e,i),Xe(e,xe()),n;if(t===6)Qt(e,i);else{if(o=e.current.alternate,!(i&30)&&!sy(o)&&(t=qs(e,i),t===2&&(a=Va(e),a!==0&&(i=a,t=vl(e,a))),t===1))throw n=Nr,bn(e,0),Qt(e,i),Xe(e,xe()),n;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(O(345));case 2:kn(e,Ve,It);break;case 3:if(Qt(e,i),(i&130023424)===i&&(t=dc+500-xe(),10<t)){if(Ds(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){He(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ja(kn.bind(null,e,Ve,It),t);break}kn(e,Ve,It);break;case 4:if(Qt(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var l=31-wt(i);a=1<<l,l=t[l],l>o&&(o=l),i&=~a}if(i=o,i=xe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ry(i/1960))-i,10<i){e.timeoutHandle=Ja(kn.bind(null,e,Ve,It),i);break}kn(e,Ve,It);break;case 5:kn(e,Ve,It);break;default:throw Error(O(329))}}}return Xe(e,xe()),e.callbackNode===n?Gp.bind(null,e):null}function vl(e,t){var n=ar;return e.current.memoizedState.isDehydrated&&(bn(e,t).flags|=256),e=qs(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&xl(t)),e}function xl(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function sy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var o=n[i],a=o.getSnapshot;o=o.value;try{if(!St(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~uc,t&=~go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wt(t),i=1<<n;e[n]=-1,t&=~i}}function yd(e){if(Q&6)throw Error(O(327));oi();var t=Ds(e,0);if(!(t&1))return Xe(e,xe()),null;var n=qs(e,t);if(e.tag!==0&&n===2){var i=Va(e);i!==0&&(t=i,n=vl(e,i))}if(n===1)throw n=Nr,bn(e,0),Qt(e,t),Xe(e,xe()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kn(e,Ve,It),Xe(e,xe()),null}function hc(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(gi=xe()+500,ho&&fn())}}function In(e){Jt!==null&&Jt.tag===0&&!(Q&6)&&oi();var t=Q;Q|=1;var n=at.transition,i=ee;try{if(at.transition=null,ee=1,e)return e()}finally{ee=i,at.transition=n,Q=t,!(Q&6)&&fn()}}function pc(){Qe=ei.current,ue(ei)}function bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lg(n)),ke!==null)for(n=ke.return;n!==null;){var i=n;switch(Yl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fs();break;case 3:fi(),ue(Ge),ue(Fe),nc();break;case 5:tc(i);break;case 4:fi();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:ql(i.type._context);break;case 22:case 23:pc()}n=n.return}if(Ne=e,ke=e=an(e.current,null),Ie=Qe=t,je=0,Nr=null,uc=go=An=0,Ve=ar=null,Cn!==null){for(t=0;t<Cn.length;t++)if(n=Cn[t],i=n.interleaved,i!==null){n.interleaved=null;var o=i.next,a=n.pending;if(a!==null){var l=a.next;a.next=o,i.next=l}n.pending=i}Cn=null}return e}function Yp(e,t){do{var n=ke;try{if(Ql(),Cs.current=Ys,Gs){for(var i=fe.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Gs=!1}if(Pn=0,Te=Ce=fe=null,sr=!1,jr=0,cc.current=null,n===null||n.return===null){je=1,Nr=t,ke=null;break}e:{var a=e,l=n.return,u=n,h=t;if(t=Ie,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var g=h,P=u,E=P.tag;if(!(P.mode&1)&&(E===0||E===11||E===15)){var S=P.alternate;S?(P.updateQueue=S.updateQueue,P.memoizedState=S.memoizedState,P.lanes=S.lanes):(P.updateQueue=null,P.memoizedState=null)}var T=rd(l);if(T!==null){T.flags&=-257,sd(T,l,u,a,t),T.mode&1&&id(a,g,t),t=T,h=g;var N=t.updateQueue;if(N===null){var I=new Set;I.add(h),t.updateQueue=I}else N.add(h);break e}else{if(!(t&1)){id(a,g,t),fc();break e}h=Error(O(426))}}else if(he&&u.mode&1){var L=rd(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),sd(L,l,u,a,t),Xl(mi(h,u));break e}}a=h=mi(h,u),je!==4&&(je=2),ar===null?ar=[a]:ar.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Ap(a,h,t);qu(a,m);break e;case 1:u=h;var w=a.type,j=a.stateNode;if(!(a.flags&128)&&(typeof w.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(sn===null||!sn.has(j)))){a.flags|=65536,t&=-t,a.lanes|=t;var R=Ip(a,u,t);qu(a,R);break e}}a=a.return}while(a!==null)}Qp(n)}catch(M){t=M,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Xp(){var e=Xs.current;return Xs.current=Ys,e===null?Ys:e}function fc(){(je===0||je===3||je===2)&&(je=4),Ne===null||!(An&268435455)&&!(go&268435455)||Qt(Ne,Ie)}function qs(e,t){var n=Q;Q|=2;var i=Xp();(Ne!==e||Ie!==t)&&(It=null,bn(e,t));do try{oy();break}catch(o){Yp(e,o)}while(!0);if(Ql(),Q=n,Xs.current=i,ke!==null)throw Error(O(261));return Ne=null,Ie=0,je}function oy(){for(;ke!==null;)Kp(ke)}function ay(){for(;ke!==null&&!Rm();)Kp(ke)}function Kp(e){var t=Jp(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Qp(e):ke=t,cc.current=null}function Qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ey(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{je=6,ke=null;return}}else if(n=Zg(n,t,Qe),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);je===0&&(je=5)}function kn(e,t,n){var i=ee,o=at.transition;try{at.transition=null,ee=1,ly(e,t,n,i)}finally{at.transition=o,ee=i}return null}function ly(e,t,n,i){do oi();while(Jt!==null);if(Q&6)throw Error(O(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Bm(e,a),e===Ne&&(ke=Ne=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fs||(fs=!0,Zp(Rs,function(){return oi(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=at.transition,at.transition=null;var l=ee;ee=1;var u=Q;Q|=4,cc.current=null,ny(e,n),Vp(n,e),Eg(Qa),_s=!!Ka,Qa=Ka=null,e.current=n,iy(n),Dm(),Q=u,ee=l,at.transition=a}else e.current=n;if(fs&&(fs=!1,Jt=e,Qs=o),a=e.pendingLanes,a===0&&(sn=null),Om(n.stateNode),Xe(e,xe()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],i(o.value,{componentStack:o.stack,digest:o.digest});if(Ks)throw Ks=!1,e=gl,gl=null,e;return Qs&1&&e.tag!==0&&oi(),a=e.pendingLanes,a&1?e===yl?lr++:(lr=0,yl=e):lr=0,fn(),null}function oi(){if(Jt!==null){var e=Ah(Qs),t=at.transition,n=ee;try{if(at.transition=null,ee=16>e?16:e,Jt===null)var i=!1;else{if(e=Jt,Jt=null,Qs=0,Q&6)throw Error(O(331));var o=Q;for(Q|=4,B=e.current;B!==null;){var a=B,l=a.child;if(B.flags&16){var u=a.deletions;if(u!==null){for(var h=0;h<u.length;h++){var g=u[h];for(B=g;B!==null;){var P=B;switch(P.tag){case 0:case 11:case 15:or(8,P,a)}var E=P.child;if(E!==null)E.return=P,B=E;else for(;B!==null;){P=B;var S=P.sibling,T=P.return;if(Hp(P),P===g){B=null;break}if(S!==null){S.return=T,B=S;break}B=T}}}var N=a.alternate;if(N!==null){var I=N.child;if(I!==null){N.child=null;do{var L=I.sibling;I.sibling=null,I=L}while(I!==null)}}B=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,B=l;else e:for(;B!==null;){if(a=B,a.flags&2048)switch(a.tag){case 0:case 11:case 15:or(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,B=m;break e}B=a.return}}var w=e.current;for(B=w;B!==null;){l=B;var j=l.child;if(l.subtreeFlags&2064&&j!==null)j.return=l,B=j;else e:for(l=w;B!==null;){if(u=B,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:mo(9,u)}}catch(M){ge(u,u.return,M)}if(u===l){B=null;break e}var R=u.sibling;if(R!==null){R.return=u.return,B=R;break e}B=u.return}}if(Q=o,fn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(oo,e)}catch{}i=!0}return i}finally{ee=n,at.transition=t}}return!1}function vd(e,t,n){t=mi(n,t),t=Ap(e,t,1),e=rn(e,t,1),t=He(),e!==null&&(Ar(e,1,t),Xe(e,t))}function ge(e,t,n){if(e.tag===3)vd(e,e,n);else for(;t!==null;){if(t.tag===3){vd(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sn===null||!sn.has(i))){e=mi(n,e),e=Ip(t,e,1),t=rn(t,e,1),e=He(),t!==null&&(Ar(t,1,e),Xe(t,e));break}}t=t.return}}function cy(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Ie&n)===n&&(je===4||je===3&&(Ie&130023424)===Ie&&500>xe()-dc?bn(e,0):uc|=n),Xe(e,t)}function qp(e,t){t===0&&(e.mode&1?(t=rs,rs<<=1,!(rs&130023424)&&(rs=4194304)):t=1);var n=He();e=Ft(e,t),e!==null&&(Ar(e,t,n),Xe(e,n))}function uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qp(e,n)}function dy(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(O(314))}i!==null&&i.delete(t),qp(e,n)}var Jp;Jp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)$e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return $e=!1,Jg(e,t,n);$e=!!(e.flags&131072)}else $e=!1,he&&t.flags&1048576&&np(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;bs(e,t),e=t.pendingProps;var o=di(t,Fe.current);si(t,n),o=rc(null,t,i,e,o,n);var a=sc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(i)?(a=!0,Us(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Zl(t),o.updater=fo,t.stateNode=o,o._reactInternals=t,sl(t,i,e,n),t=ll(null,t,i,!0,a,n)):(t.tag=0,he&&a&&Gl(t),ze(null,t,o,n),t=t.child),t;case 16:i=t.elementType;e:{switch(bs(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=py(i),e=ht(i,e),o){case 0:t=al(null,t,i,e,n);break e;case 1:t=ld(null,t,i,e,n);break e;case 11:t=od(null,t,i,e,n);break e;case 14:t=ad(null,t,i,ht(i.type,e),n);break e}throw Error(O(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:ht(i,o),al(e,t,i,o,n);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:ht(i,o),ld(e,t,i,o,n);case 3:e:{if(Lp(t),e===null)throw Error(O(387));i=t.pendingProps,a=t.memoizedState,o=a.element,lp(e,t),Vs(t,i,null,n);var l=t.memoizedState;if(i=l.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=mi(Error(O(423)),t),t=cd(e,t,i,n,o);break e}else if(i!==o){o=mi(Error(O(424)),t),t=cd(e,t,i,n,o);break e}else for(Je=nn(t.stateNode.containerInfo.firstChild),Ze=t,he=!0,ft=null,n=op(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hi(),i===o){t=Ut(e,t,n);break e}ze(e,t,i,n)}t=t.child}return t;case 5:return cp(t),e===null&&nl(t),i=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,l=o.children,qa(i,o)?l=null:a!==null&&qa(i,a)&&(t.flags|=32),_p(e,t),ze(e,t,l,n),t.child;case 6:return e===null&&nl(t),null;case 13:return Op(e,t,n);case 4:return ec(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=pi(t,null,i,n):ze(e,t,i,n),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:ht(i,o),od(e,t,i,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,oe(Bs,i._currentValue),i._currentValue=l,a!==null)if(St(a.value,l)){if(a.children===o.children&&!Ge.current){t=Ut(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var h=u.firstContext;h!==null;){if(h.context===i){if(a.tag===1){h=Lt(-1,n&-n),h.tag=2;var g=a.updateQueue;if(g!==null){g=g.shared;var P=g.pending;P===null?h.next=h:(h.next=P.next,P.next=h),g.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),il(a.return,n,t),u.lanes|=n;break}h=h.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(O(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),il(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,si(t,n),o=lt(o),i=i(o),t.flags|=1,ze(e,t,i,n),t.child;case 14:return i=t.type,o=ht(i,t.pendingProps),o=ht(i.type,o),ad(e,t,i,o,n);case 15:return Rp(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:ht(i,o),bs(e,t),t.tag=1,Ye(i)?(e=!0,Us(t)):e=!1,si(t,n),Pp(t,i,o),sl(t,i,o,n),ll(null,t,i,!0,e,n);case 19:return Mp(e,t,n);case 22:return Dp(e,t,n)}throw Error(O(156,t.tag))};function Zp(e,t){return Th(e,t)}function hy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,i){return new hy(e,t,n,i)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function py(e){if(typeof e=="function")return mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===Ll)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Es(e,t,n,i,o,a){var l=2;if(i=e,typeof e=="function")mc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vn:return Tn(n.children,o,a,t);case Dl:l=8,o|=8;break;case Pa:return e=ot(12,n,t,o|2),e.elementType=Pa,e.lanes=a,e;case Aa:return e=ot(13,n,t,o),e.elementType=Aa,e.lanes=a,e;case Ia:return e=ot(19,n,t,o),e.elementType=Ia,e.lanes=a,e;case ch:return yo(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ah:l=10;break e;case lh:l=9;break e;case _l:l=11;break e;case Ll:l=14;break e;case Yt:l=16,i=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=ot(l,n,t,o),t.elementType=e,t.type=i,t.lanes=a,t}function Tn(e,t,n,i){return e=ot(7,e,i,t),e.lanes=n,e}function yo(e,t,n,i){return e=ot(22,e,i,t),e.elementType=ch,e.lanes=n,e.stateNode={isHidden:!1},e}function ya(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function va(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fy(e,t,n,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function gc(e,t,n,i,o,a,l,u,h){return e=new fy(e,t,n,u,h),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ot(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(a),e}function my(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function ef(e){if(!e)return dn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(Ye(n))return ep(e,n,t)}return t}function tf(e,t,n,i,o,a,l,u,h){return e=gc(n,i,!0,e,o,a,l,u,h),e.context=ef(null),n=e.current,i=He(),o=on(n),a=Lt(i,o),a.callback=t??null,rn(n,a,o),e.current.lanes=o,Ar(e,o,i),Xe(e,i),e}function vo(e,t,n,i){var o=t.current,a=He(),l=on(o);return n=ef(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(a,l),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=rn(o,t,l),e!==null&&(kt(e,o,l,a),Ss(e,o,l)),l}function Js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function gy(){return null}var nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function vc(e){this._internalRoot=e}xo.prototype.render=vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));vo(e,t,null,null)};xo.prototype.unmount=vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){vo(null,e,null,null)}),t[Mt]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Lh(e)}};function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function yy(e,t,n,i,o){if(o){if(typeof i=="function"){var a=i;i=function(){var g=Js(l);a.call(g)}}var l=tf(t,i,e,0,null,!1,!1,"",wd);return e._reactRootContainer=l,e[Mt]=l.current,xr(e.nodeType===8?e.parentNode:e),In(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var u=i;i=function(){var g=Js(h);u.call(g)}}var h=gc(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=h,e[Mt]=h.current,xr(e.nodeType===8?e.parentNode:e),In(function(){vo(t,h,n,i)}),h}function ko(e,t,n,i,o){var a=n._reactRootContainer;if(a){var l=a;if(typeof o=="function"){var u=o;o=function(){var h=Js(l);u.call(h)}}vo(t,l,e,o)}else l=yy(n,t,e,o,i);return Js(l)}Ih=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=qi(t.pendingLanes);n!==0&&(Fl(t,n|1),Xe(t,xe()),!(Q&6)&&(gi=xe()+500,fn()))}break;case 13:In(function(){var i=Ft(e,1);if(i!==null){var o=He();kt(i,e,1,o)}}),yc(e,1)}};Ul=function(e){if(e.tag===13){var t=Ft(e,134217728);if(t!==null){var n=He();kt(t,e,134217728,n)}yc(e,134217728)}};Rh=function(e){if(e.tag===13){var t=on(e),n=Ft(e,t);if(n!==null){var i=He();kt(n,e,t,i)}yc(e,t)}};Dh=function(){return ee};_h=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Ha=function(e,t,n){switch(t){case"input":if(_a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var o=uo(i);if(!o)throw Error(O(90));dh(i),_a(i,o)}}}break;case"textarea":ph(e,n);break;case"select":t=n.value,t!=null&&ti(e,!!n.multiple,t,!1)}};wh=hc;kh=In;var vy={usingClientEntryPoint:!1,Events:[Rr,Xn,uo,vh,xh,hc]},Xi={findFiberByHostInstance:Sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xy={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=jh(e),e===null?null:e.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ms=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ms.isDisabled&&ms.supportsFiber)try{oo=ms.inject(xy),Nt=ms}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(t))throw Error(O(200));return my(e,t,null,n)};tt.createRoot=function(e,t){if(!xc(e))throw Error(O(299));var n=!1,i="",o=nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=gc(e,1,!1,null,null,n,!1,i,o),e[Mt]=t.current,xr(e.nodeType===8?e.parentNode:e),new vc(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=jh(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return In(e)};tt.hydrate=function(e,t,n){if(!wo(t))throw Error(O(200));return ko(null,e,t,!0,n)};tt.hydrateRoot=function(e,t,n){if(!xc(e))throw Error(O(405));var i=n!=null&&n.hydratedSources||null,o=!1,a="",l=nf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tf(t,null,e,1,n??null,o,!1,a,l),e[Mt]=t.current,xr(e),i)for(e=0;e<i.length;e++)n=i[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new xo(t)};tt.render=function(e,t,n){if(!wo(t))throw Error(O(200));return ko(null,e,t,!1,n)};tt.unmountComponentAtNode=function(e){if(!wo(e))throw Error(O(40));return e._reactRootContainer?(In(function(){ko(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};tt.unstable_batchedUpdates=hc;tt.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!wo(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return ko(e,t,n,!1,i)};tt.version="18.3.1-next-f1338f8080-20240426";function rf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf)}catch(e){console.error(e)}}rf(),ih.exports=tt;var wy=ih.exports,kd=wy;Na.createRoot=kd.createRoot,Na.hydrateRoot=kd.hydrateRoot;const yi={cryptography:[{id:"crypto-1",title:"Caesar Cipher Basics",difficulty:"Easy",points:10,description:"Julius Caesar used a simple cipher to protect his messages. In a Caesar cipher, each letter is shifted by a fixed number of positions in the alphabet.",learningObjective:"Understand how substitution ciphers work and practice decryption techniques.",vocabularyTerms:["caesar-cipher","cipher","encryption","decryption","plaintext","ciphertext"],prompt:`The following message was encrypted with a Caesar cipher using a shift of 3:

FBEHU UDQJH LV IXQ!

Decrypt the message to find the flag.`,hints:["Each letter is shifted 3 positions forward in the alphabet","To decrypt, shift each letter 3 positions backward","A becomes D, B becomes E, C becomes F, etc.","The flag format is: FLAG{...}"],answer:"CYBER RANGE IS FUN!",flag:"FLAG{CYBER_RANGE_IS_FUN}",explanation:"In a Caesar cipher with shift 3, F→C, B→Y, E→B, H→E, U→R, and so on. By shifting each letter back 3 positions, we decrypt the message."},{id:"crypto-2",title:"Base64 Encoding",difficulty:"Easy",points:15,description:"Base64 is an encoding scheme that converts binary data into ASCII text. It's commonly used to transmit data over text-based protocols.",learningObjective:"Learn to recognize and decode Base64-encoded data.",vocabularyTerms:["base64","encryption","plaintext"],prompt:`You intercepted this encoded message:

RkxBR3tCQVNFNjRfSVNfTk9UX0VOQ1JZUFRJT059

Decode it to retrieve the flag. Remember: Base64 is encoding, not encryption!`,hints:["This is Base64 encoding, not encryption","Base64 strings often end with = or == for padding","Use a Base64 decoder tool or write a decoder","The decoded text will be readable"],answer:"FLAG{BASE64_IS_NOT_ENCRYPTION}",flag:"FLAG{BASE64_IS_NOT_ENCRYPTION}",explanation:"Base64 is an encoding scheme, not encryption. It converts binary data to text but provides no security. Anyone can easily decode it."},{id:"crypto-3",title:"Hex Decoder",difficulty:"Easy",points:15,description:"Hexadecimal (hex) is a base-16 number system often used to represent binary data in a readable format.",learningObjective:"Learn to convert hexadecimal data to ASCII text.",vocabularyTerms:["encryption","plaintext","ciphertext"],prompt:`Convert this hexadecimal string to ASCII to find the flag:

464c41477b4845585f54305f415343494960207d

Hint: Each pair of hex digits represents one ASCII character.`,hints:["Hex uses digits 0-9 and letters A-F","Each pair of hex characters represents one byte",'46 in hex = 70 in decimal = "F" in ASCII',"Convert each pair to get the full message"],answer:"FLAG{HEX_T0_ASCII!}",flag:"FLAG{HEX_T0_ASCII!}",explanation:"Hexadecimal is often used to represent data. By converting each hex pair to its ASCII equivalent, we reveal the hidden message."},{id:"crypto-4",title:"ROT13 Message",difficulty:"Medium",points:20,description:"ROT13 is a special case of the Caesar cipher with a shift of 13. It's interesting because applying it twice returns the original text.",learningObjective:"Understand ROT13 and why it's symmetric.",vocabularyTerms:["caesar-cipher","cipher","encryption","decryption"],prompt:`Decrypt this ROT13 message:

SYNT{EBG13_VF_FLZZRGEVP}

ROT13 shifts each letter 13 positions. What makes this cipher special?`,hints:["ROT13 shifts each letter exactly 13 positions","Since the alphabet has 26 letters, ROT13 is its own inverse","Applying ROT13 twice gives you back the original text","A↔N, B↔O, C↔P, etc."],answer:"FLAG{ROT13_IS_SYMMETRIC}",flag:"FLAG{ROT13_IS_SYMMETRIC}",explanation:"ROT13 is symmetric because the alphabet has 26 letters. Shifting 13 positions twice (13+13=26) brings you back to the start."},{id:"crypto-5",title:"Hash Detective",difficulty:"Medium",points:25,description:"Cryptographic hash functions create a unique fingerprint of data. They are one-way functions, meaning you can't reverse them.",learningObjective:"Understand hashing and learn to identify different hash types.",vocabularyTerms:["hash","encryption"],prompt:`You found these hashes in a database. Identify which hash algorithm was likely used:

1. 5d41402abc4b2a76b9719d911017c592
2. 356a192b7913b04c54574d18c28d46e6395428ab
3. 8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918

Hash lengths: MD5=32, SHA-1=40, SHA-256=64 characters`,hints:["Count the characters in each hash","MD5 hashes are 32 hex characters long","SHA-1 hashes are 40 hex characters long","SHA-256 hashes are 64 hex characters long","The flag format is: FLAG{ALGO1_ALGO2_ALGO3}"],answer:"FLAG{MD5_SHA1_SHA256}",flag:"FLAG{MD5_SHA1_SHA256}",explanation:"Hash functions produce fixed-length outputs. By counting characters, you can identify: 32=MD5, 40=SHA-1, 64=SHA-256. MD5 and SHA-1 are now considered insecure."}],network:[{id:"network-1",title:"Common Ports",difficulty:"Easy",points:10,description:"Network services communicate through ports. Knowing common port numbers helps identify services and potential vulnerabilities.",learningObjective:"Learn common network ports and their associated services.",vocabularyTerms:["port","protocol","firewall"],prompt:`Match these port numbers to their services:

Port 80: ?
Port 443: ?
Port 22: ?
Port 21: ?

Services: SSH, HTTP, HTTPS, FTP

Enter the flag: FLAG{SERVICE_80_443_22_21}`,hints:["Port 80 is for unencrypted web traffic","Port 443 is for encrypted web traffic","Port 22 is for secure shell access","Port 21 is for file transfer","Format: FLAG{HTTP_HTTPS_SSH_FTP}"],answer:"FLAG{HTTP_HTTPS_SSH_FTP}",flag:"FLAG{HTTP_HTTPS_SSH_FTP}",explanation:"Common ports: HTTP=80, HTTPS=443, SSH=22, FTP=21. Knowing these helps identify services running on a network and potential security issues."},{id:"network-2",title:"IP Address Classes",difficulty:"Medium",points:20,description:"IP addresses are divided into classes based on their range. Understanding IP addressing is fundamental to networking.",learningObjective:"Understand IP address structure and private IP ranges.",vocabularyTerms:["ip-address","protocol"],prompt:`Which of these IP addresses is a private (non-routable) IP address?

A) 8.8.8.8
B) 192.168.1.1
C) 74.125.224.72
D) 151.101.1.140

Private IP ranges:
- 10.0.0.0 to 10.255.255.255
- 172.16.0.0 to 172.31.255.255
- 192.168.0.0 to 192.168.255.255`,hints:["Private IPs cannot be accessed from the internet","192.168.x.x is a common private IP range","Your home router likely uses 192.168.1.1","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:"192.168.1.1 is a private IP address used within local networks. Private IPs are not routable on the internet, providing an extra layer of security."},{id:"network-3",title:"Protocol Detective",difficulty:"Medium",points:25,description:"Different protocols serve different purposes in network communication. Understanding them is key to network security.",learningObjective:"Identify network protocols and understand their security implications.",vocabularyTerms:["protocol","port","encryption"],prompt:`Analyze this network traffic log:

Connection 1: Port 23 - Telnet session
Connection 2: Port 22 - SSH session
Connection 3: Port 80 - HTTP session
Connection 4: Port 443 - HTTPS session

Which connections transmit data in PLAINTEXT (unencrypted)?
Enter as FLAG{PORT_PORT_PORT} in ascending order`,hints:["Telnet (23) sends data unencrypted","SSH (22) encrypts all data","HTTP (80) is unencrypted","HTTPS (443) is encrypted with SSL/TLS","List the unencrypted ports: 23, 80"],answer:"FLAG{23_80}",flag:"FLAG{23_80}",explanation:"Telnet and HTTP transmit data in plaintext, making them vulnerable to eavesdropping. Always use encrypted alternatives: SSH instead of Telnet, HTTPS instead of HTTP."},{id:"network-4",title:"Firewall Rules",difficulty:"Hard",points:30,description:"Firewalls use rules to control network traffic. Understanding firewall rules helps protect networks from threats.",learningObjective:"Learn how firewall rules work to protect networks.",vocabularyTerms:["firewall","port","protocol","ip-address"],prompt:`A firewall has these rules (processed in order):

1. ALLOW: Source 192.168.1.0/24, Port ANY
2. DENY: Port 23
3. ALLOW: Port 80
4. ALLOW: Port 443
5. DENY: ALL

Can a computer at 192.168.1.50 access Telnet (port 23)?
Can a computer at 10.0.0.5 access HTTP (port 80)?`,hints:["Firewall rules are processed top to bottom","192.168.1.50 matches rule 1 (allow all ports from that subnet)","Rule 1 comes before rule 2, so it takes precedence","10.0.0.5 doesn't match rule 1, so it continues to other rules","Answer: FLAG{YES_YES} or FLAG{YES_NO} or FLAG{NO_YES} or FLAG{NO_NO}"],answer:"FLAG{YES_YES}",flag:"FLAG{YES_YES}",explanation:"Firewalls process rules in order. 192.168.1.50 matches rule 1 (ALLOW all ports) first. 10.0.0.5 skips rule 1, but matches rule 3 (ALLOW port 80)."}],password:[{id:"password-1",title:"Password Strength 101",difficulty:"Easy",points:10,description:"Strong passwords are your first line of defense. Learn what makes a password secure.",learningObjective:"Understand the characteristics of strong passwords.",vocabularyTerms:["password-strength","brute-force","authentication"],prompt:`Which password is the STRONGEST?

A) password123
B) P@ssw0rd!
C) Tr0ub4dor&3
D) correct-horse-battery-staple-2024

Consider: length, complexity, predictability, and entropy.`,hints:["Length is one of the most important factors","Option A is too common and simple","Option B is a common pattern (letter substitution)","Option C is medium strength but short","Option D is long and uses random words (passphrase)","The flag is FLAG{D}"],answer:"D",flag:"FLAG{D}",explanation:'Long passphrases with random words are stronger than short complex passwords. "correct-horse-battery-staple-2024" has high entropy and is harder to crack than "P@ssw0rd!".'},{id:"password-2",title:"Brute Force Math",difficulty:"Medium",points:20,description:"Understanding password combination math helps you create stronger passwords.",learningObjective:"Calculate password strength and understand brute force attacks.",vocabularyTerms:["brute-force","password-strength"],prompt:`A 4-digit PIN has how many possible combinations?

Digits available: 0-9 (10 digits)
PIN length: 4 digits

Calculate: 10 × 10 × 10 × 10 = ?

If a brute force attack tries 1000 PINs per second, how many seconds to try all combinations?`,hints:["10 choices for each of 4 positions","10^4 = 10,000 possible combinations","10,000 combinations ÷ 1000 per second = 10 seconds","The flag is FLAG{10000_10}"],answer:"FLAG{10000_10}",flag:"FLAG{10000_10}",explanation:"4-digit PINs have only 10,000 combinations (10^4). At 1000 guesses/second, all combinations can be tried in 10 seconds. This shows why longer passwords are crucial!"},{id:"password-3",title:"Common Password Patterns",difficulty:"Medium",points:20,description:"Attackers use dictionaries of common passwords. Avoid predictable patterns!",learningObjective:"Recognize and avoid common password patterns.",vocabularyTerms:["brute-force","password-strength"],prompt:`These passwords were found in a breach. Identify the pattern:

- Password1
- Welcome1
- Qwerty123
- Letmein1
- Admin2024

What do they have in common? The flag describes the pattern: FLAG{PATTERN_TYPE}`,hints:["Look at the structure of each password","They all use common words","They all end with numbers",'This is "word + digits" pattern',"The flag is FLAG{COMMON_WORD_PLUS_DIGITS}"],answer:"FLAG{COMMON_WORD_PLUS_DIGITS}",flag:"FLAG{COMMON_WORD_PLUS_DIGITS}",explanation:"These passwords follow the pattern: common word + digits. Attackers know this pattern and include it in their attacks. Avoid predictable patterns!"},{id:"password-4",title:"Password Hashing",difficulty:"Hard",points:30,description:"Systems store password hashes, not plaintext passwords. Understanding hashing is crucial for security.",learningObjective:"Understand how password hashing protects credentials.",vocabularyTerms:["hash","encryption","authentication"],prompt:`A database stores these password hashes:

User1: 5f4dcc3b5aa765d61d8327deb882cf99
User2: 5f4dcc3b5aa765d61d8327deb882cf99
User3: 098f6bcd4621d373cade4e832627b4f6

What does it mean that User1 and User2 have the SAME hash?

A) They have the same username
B) They have the same password
C) Their accounts are linked
D) The database is corrupted`,hints:["Hash functions are deterministic","Same input always produces same output","If two hashes match, the passwords match","This is why salting is important","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:'Identical hashes mean identical passwords. This is why modern systems use "salting" - adding random data before hashing so identical passwords produce different hashes.'}],web:[{id:"web-1",title:"URL Analysis",difficulty:"Easy",points:10,description:"URLs can reveal a lot about a website and potential security issues. Learn to analyze them critically.",learningObjective:"Identify suspicious URLs and understand URL structure.",vocabularyTerms:["phishing","protocol"],prompt:`Which URL is most likely a PHISHING attempt?

A) https://www.google.com/search
B) http://goog1e.com/signin
C) https://mail.google.com/mail
D) https://drive.google.com/drive

Look carefully at each domain name!`,hints:["Check the spelling of the domain name","Look for character substitution (1 instead of l)",'goog1e.com uses the number "1" instead of letter "l"',"Also note: it uses HTTP not HTTPS","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:'goog1e.com uses "1" instead of "l" (typosquatting). Also uses HTTP instead of HTTPS. Always check domain spelling and use HTTPS for sensitive sites!'},{id:"web-2",title:"SQL Injection Basics",difficulty:"Medium",points:25,description:"SQL injection is a common web vulnerability where attackers insert malicious SQL code into input fields.",learningObjective:"Understand how SQL injection attacks work and how to prevent them.",vocabularyTerms:["sql-injection","vulnerability","exploit"],prompt:`A login form uses this SQL query:

SELECT * FROM users WHERE username='USER_INPUT' AND password='PASS_INPUT'

An attacker enters:
Username: admin'--
Password: anything

What does the query become? Will the attacker bypass login?

(-- is a SQL comment)`,hints:["Substitute the inputs into the query","The query becomes: SELECT * FROM users WHERE username='admin'--' AND password='anything'","Everything after -- is commented out","The password check is bypassed!","The flag is FLAG{YES_BYPASSED}"],answer:"FLAG{YES_BYPASSED}",flag:"FLAG{YES_BYPASSED}",explanation:"The ' closes the username string, and -- comments out the rest. The query becomes: SELECT * FROM users WHERE username='admin' (password check ignored). Always use parameterized queries!"},{id:"web-3",title:"XSS Detection",difficulty:"Medium",points:25,description:"Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into web pages viewed by other users.",learningObjective:"Identify XSS vulnerabilities and understand their impact.",vocabularyTerms:["xss","vulnerability","exploit"],prompt:`A website displays user comments without sanitization:

<div>USER_COMMENT</div>

An attacker posts this comment:
<script>alert("XSS")<\/script>

What happens when other users view the page?

A) The script tag is displayed as text
B) The script executes in users' browsers
C) The comment is blocked
D) Nothing happens`,hints:["Without sanitization, HTML/JavaScript is executed","The browser sees <script> and runs it","This is a stored XSS vulnerability","The script runs in every visitor's browser","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:"Without input sanitization, the browser executes the script tag. This is XSS. Attackers can steal cookies, redirect users, or deface pages. Always sanitize user input!"},{id:"web-4",title:"HTTPS vs HTTP",difficulty:"Easy",points:15,description:"HTTPS encrypts communication between browsers and servers, protecting against eavesdropping.",learningObjective:"Understand the importance of HTTPS for web security.",vocabularyTerms:["protocol","encryption"],prompt:`You're logging into your bank account. The URL is:

http://www.mybank.com/login

What's the security risk?

A) No risk, HTTP is fine
B) Password is sent in plaintext, visible to eavesdroppers
C) The bank might be fake
D) Both B and C`,hints:["HTTP sends all data unencrypted","Anyone monitoring the network can see your password","Legitimate banks always use HTTPS for login","HTTP also means no authentication of the server","The flag is FLAG{D}"],answer:"D",flag:"FLAG{D}",explanation:"HTTP sends data in plaintext (including passwords), and doesn't authenticate the server. Real banks use HTTPS. Always check for HTTPS and the padlock icon!"}],social:[{id:"social-1",title:"Phishing Email Detection",difficulty:"Easy",points:10,description:"Phishing emails try to trick you into revealing sensitive information. Learn to spot the red flags.",learningObjective:"Identify common phishing email indicators.",vocabularyTerms:["phishing","social-engineering"],prompt:`You receive this email:

From: security@amaz0n-support.com
Subject: URGENT: Your account will be closed!

"Dear Customer,
Your Amazon account has suspicious activity. Click here immediately to verify your identity or your account will be permanently closed within 24 hours!

Click: http://amaz0n-verify.tk/account"

How many red flags can you identify?`,hints:["Check the sender domain: amaz0n (with a zero)","Creates urgency and fear","Suspicious URL (amaz0n-verify.tk)",'Generic greeting ("Dear Customer")',"There are at least 4 red flags","Flag format: FLAG{NUMBER_OF_RED_FLAGS}"],answer:"FLAG{4}",flag:"FLAG{4}",explanation:"Red flags: (1) Fake domain (amaz0n), (2) Creates urgency, (3) Suspicious URL, (4) Generic greeting. Legitimate companies don't threaten account closure via email."},{id:"social-2",title:"Pretexting Scenario",difficulty:"Medium",points:20,description:"Pretexting is creating a false scenario to trick people into revealing information.",learningObjective:"Recognize pretexting attacks and social engineering tactics.",vocabularyTerms:["social-engineering","phishing"],prompt:`You receive a call:

"Hi, this is Jake from IT. We're upgrading the network and need to verify user accounts. Can you confirm your username and password so I can update your profile?"

What should you do?

A) Provide the information to be helpful
B) Ask for a call-back number and verify with IT
C) Hang up immediately
D) Give username but not password`,hints:["IT should never ask for your password","Verify the identity before sharing any info","Call back through official channels","This is a pretexting attack","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:"Never give credentials over the phone. Ask for a callback number and verify through official IT channels. Legitimate IT staff never ask for passwords."},{id:"social-3",title:"Tailgating Attack",difficulty:"Medium",points:20,description:"Tailgating is when unauthorized people follow authorized personnel into restricted areas.",learningObjective:"Understand physical security and social engineering in the real world.",vocabularyTerms:["social-engineering","authentication","authorization"],prompt:`You're entering your office building with your badge. Someone behind you says:

"Oh, I forgot my badge! Can you hold the door? I work in accounting."

What's the best response?

A) Hold the door to be polite
B) Tell them to use the visitor entrance
C) Let them in if they seem trustworthy
D) Ignore them and let the door close`,hints:["Security protocols exist for a reason","Attackers exploit politeness","This is called tailgating or piggybacking","Visitor entrance provides proper verification","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:"Politely direct them to the visitor entrance where they can get a temporary badge. Tailgating is a common physical security breach. Don't let politeness override security."},{id:"social-4",title:"USB Baiting",difficulty:"Hard",points:25,description:"Attackers sometimes leave infected USB drives in public places, hoping curious people will plug them in.",learningObjective:"Understand the risks of unknown physical media and social engineering tactics.",vocabularyTerms:["social-engineering","malware","exploit"],prompt:`You find a USB drive in the parking lot labeled "Executive Salaries 2024".

What should you do?

A) Plug it into your work computer to find the owner
B) Plug it into your personal computer to check contents
C) Take it to IT/Security without plugging it in
D) Throw it away`,hints:["USB drives can contain malware","The label is designed to make you curious","Never plug unknown devices into any computer","IT/Security has safe ways to examine it","Options C and D are both safe, but C is most helpful","The flag is FLAG{C}"],answer:"C",flag:"FLAG{C}",explanation:'This is "USB baiting". The label exploits curiosity. Never plug unknown USB drives into any computer. Report to IT/Security who can safely examine it in an isolated environment.'}]},ky=()=>Object.values(yi).flat(),Sy=e=>ky().find(t=>t.id===e),Zi={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},Cy={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]},ie={PORT_SCAN:"port-scan",BRUTE_FORCE_SSH:"brute-force-ssh",SQL_INJECTION:"sql-injection",DATA_EXFILTRATION:"data-exfiltration",DDOS:"ddos",DNS_TUNNELING:"dns-tunneling"},sf={[ie.PORT_SCAN]:{name:"Port Scan",description:"An attacker is scanning multiple ports on your system to find open services.",severity:"medium",indicators:["Single source IP connecting to many different ports","Sequential or rapid port probing","SYN packets without completing handshake"],mitigation:"Block the scanning IP address"},[ie.BRUTE_FORCE_SSH]:{name:"SSH Brute Force",description:"An attacker is attempting to guess SSH credentials through repeated login attempts.",severity:"high",indicators:["Multiple failed SSH authentication attempts","Same source IP with repeated connections to port 22","Various username attempts (root, admin, user)"],mitigation:"Block the attacking IP and implement rate limiting"},[ie.SQL_INJECTION]:{name:"SQL Injection",description:"An attacker is attempting to inject malicious SQL code through web requests.",severity:"critical",indicators:["HTTP requests containing SQL keywords (SELECT, UNION, DROP)","Special characters in URL parameters (', --, ;)","Attempts to manipulate database queries"],mitigation:"Block the source IP and review web application security"},[ie.DATA_EXFILTRATION]:{name:"Data Exfiltration",description:"Large amounts of data are being transferred to an external IP address.",severity:"critical",indicators:["Unusually large outbound data transfers","Data sent to unfamiliar external IPs","Sustained high-bandwidth connections"],mitigation:"Block the external IP and investigate compromised system"},[ie.DDOS]:{name:"DDoS Attack",description:"Multiple sources are flooding the network with traffic to overwhelm services.",severity:"high",indicators:["High volume of traffic from many sources","Repeated requests to same destination","Network bandwidth saturation"],mitigation:"Enable rate limiting and block attacking IPs"},[ie.DNS_TUNNELING]:{name:"DNS Tunneling",description:"Data is being exfiltrated through encoded DNS queries.",severity:"high",indicators:["Unusual DNS query patterns","Long subdomain names with encoded data","High volume of TXT record queries"],mitigation:"Block suspicious DNS queries and investigate endpoint"}},jy={[ie.PORT_SCAN]:{windowSeconds:10,thresholds:{uniquePortsFromSameSource:5,packetsPerSecond:3},check:(e,t=1e4)=>{const n=Date.now(),i=e.filter(a=>new Date(a.timestamp).getTime()>n-t),o={};i.forEach(a=>{o[a.sourceIP]||(o[a.sourceIP]=new Set),o[a.sourceIP].add(a.destPort)});for(const[a,l]of Object.entries(o))if(l.size>=5)return{detected:!0,attackerIP:a,evidence:`${l.size} ports scanned`};return{detected:!1}}},[ie.BRUTE_FORCE_SSH]:{windowSeconds:30,thresholds:{failedAttemptsFromSameSource:5},check:(e,t=3e4)=>{const n=Date.now(),i=e.filter(a=>new Date(a.timestamp).getTime()>n-t&&a.protocol==="SSH"&&a.info.toLowerCase().includes("failed")),o={};i.forEach(a=>{o[a.sourceIP]=(o[a.sourceIP]||0)+1});for(const[a,l]of Object.entries(o))if(l>=5)return{detected:!0,attackerIP:a,evidence:`${l} failed SSH attempts`};return{detected:!1}}},[ie.SQL_INJECTION]:{patterns:[/('|"|;|--|\/\*|\*\/|union|select|insert|update|delete|drop|exec|execute)/i,/(or|and)\s+['"]?\d+['"]?\s*=\s*['"]?\d+/i,/'\s*(or|and)\s*'[^']*'\s*=\s*'/i],check:e=>{const t=e.filter(n=>n.protocol==="HTTP"&&n.isMalicious&&n.attackType===ie.SQL_INJECTION);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} SQL injection attempts`}:{detected:!1}}},[ie.DATA_EXFILTRATION]:{thresholds:{bytesPerWindow:1e5,windowSeconds:30},check:(e,t=3e4)=>{const n=Date.now(),i=e.filter(a=>new Date(a.timestamp).getTime()>n-t),o={};i.forEach(a=>{!a.destIP.startsWith("192.168.")&&!a.destIP.startsWith("10.")&&!a.destIP.startsWith("172.16.")&&(o[a.destIP]=(o[a.destIP]||0)+a.length)});for(const[a,l]of Object.entries(o))if(l>=1e5)return{detected:!0,attackerIP:a,evidence:`${Math.round(l/1024)}KB exfiltrated`};return{detected:!1}}},[ie.DNS_TUNNELING]:{check:e=>{const t=e.filter(n=>n.protocol==="DNS"&&n.isMalicious&&n.attackType===ie.DNS_TUNNELING);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} suspicious DNS queries`}:{detected:!1}}}},vt=[{id:"port-scan-basic",name:"Port Scan Detection",difficulty:"Easy",points:25,description:"A suspicious IP address is probing your network, scanning multiple ports to find vulnerable services. Identify and block the attacker.",learningObjective:"Learn to recognize port scanning behavior by observing sequential port connections from a single source.",attackType:ie.PORT_SCAN,duration:60,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:3},hints:["Look for a single IP connecting to many different ports","Port scanners often use sequential port numbers","The attacker IP will have connections to ports like 21, 22, 23, 80, 443, etc."],backgroundTraffic:{packetsPerSecond:2,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:5,packetsPerSecond:3,attackerIP:"185.220.101.42",targetPorts:[21,22,23,25,80,110,143,443,445,3389,8080,8443]}},{id:"ssh-brute-force",name:"SSH Brute Force Attack",difficulty:"Medium",points:35,description:"An attacker is attempting to gain unauthorized access by guessing SSH credentials. Multiple failed login attempts indicate a brute force attack in progress.",learningObjective:"Understand how brute force attacks work and learn to identify repeated authentication failures.",attackType:ie.BRUTE_FORCE_SSH,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for repeated SSH connections from the same IP","Failed authentication messages are a key indicator","Brute force attacks try common usernames: root, admin, user"],backgroundTraffic:{packetsPerSecond:3,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:8,packetsPerSecond:2,attackerIP:"198.51.100.77",targetPort:22,usernames:["root","admin","administrator","user","guest","test"]}},{id:"sql-injection-probe",name:"SQL Injection Probing",difficulty:"Medium",points:40,description:"Malicious HTTP requests containing SQL injection payloads are targeting your web application. These attacks attempt to manipulate database queries.",learningObjective:"Learn to identify SQL injection patterns in HTTP requests and understand common injection techniques.",attackType:ie.SQL_INJECTION,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:4},hints:[`Look for special characters in HTTP requests: ' " ; --`,"SQL keywords like UNION, SELECT, DROP are red flags","Check URL parameters and POST data for suspicious patterns"],backgroundTraffic:{packetsPerSecond:4,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:6,packetsPerSecond:1.5,attackerIP:"203.0.113.99",targetPort:80}},{id:"data-exfiltration",name:"Data Exfiltration",difficulty:"Medium",points:40,description:"A compromised internal system is sending large amounts of data to an external IP. This could indicate stolen data being transferred out of the network.",learningObjective:"Learn to detect unusual outbound traffic patterns that may indicate data theft.",attackType:ie.DATA_EXFILTRATION,duration:120,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for unusually large packet sizes going outbound","The destination IP will be external (not 192.168.x.x or 10.x.x.x)","Look for sustained transfers to the same external destination"],backgroundTraffic:{packetsPerSecond:3,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:10,packetsPerSecond:2,attackerIP:"45.33.32.156",sourceIP:"192.168.1.105",minPacketSize:5e3,maxPacketSize:15e3}}],by=()=>vt.reduce((e,t)=>e+t.points,0),Ty=()=>({total:vt.length,easy:vt.filter(e=>e.difficulty==="Easy").length,medium:vt.filter(e=>e.difficulty==="Medium").length,hard:vt.filter(e=>e.difficulty==="Hard").length,totalPoints:by()}),wc={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
  createCanvas(800, 500);
  // Create your palette array here
}

function draw() {
  // Use palette[0] for background
  background(240);
}`,solutionCode:`let palette = ["red", "orange", "yellow", "green", "blue"];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(palette[0]);
}`,hints:["Arrays are created with square brackets: let arr = []","Put strings in quotes inside the brackets","Access elements with arrayName[index]","The first element is at index 0"],vocabularyTerms:["array","index","element"]},{id:"w1d1-2",title:"First, Last, Middle",difficulty:"Easy",points:10,description:"Access different positions in an array",prompt:"Given an array of words, display the first word, last word, and middle word on screen.",starterCode:`let words = ["loop", "array", "pixel", "code", "mouse"];

function setup() {
  createCanvas(800, 500);
  textSize(32);
}

function draw() {
  background(220);
  // Display first word at y=100
  // Display last word at y=200
  // Display middle word at y=300
}`,solutionCode:`let words = ["loop", "array", "pixel", "code", "mouse"];

function setup() {
  createCanvas(800, 500);
  textSize(32);
}

function draw() {
  background(220);
  text("First: " + words[0], 50, 100);
  text("Last: " + words[words.length - 1], 50, 200);
  text("Middle: " + words[Math.floor(words.length / 2)], 50, 300);
}`,hints:["First element is at index 0","Last element is at index array.length - 1","Middle index is Math.floor(array.length / 2)"],vocabularyTerms:["array","index","length"]},{id:"w1d1-3",title:"Random Word Display",difficulty:"Easy",points:15,description:"Pick and display a random element from an array",prompt:"Display a random word from the array. Click to show a new random word.",starterCode:`let words = ["loop", "array", "pixel", "code", "mouse"];
let currentWord = "";

function setup() {
  createCanvas(800, 500);
  textSize(48);
  textAlign(CENTER, CENTER);
  // Pick initial random word
}

function draw() {
  background(220);
  text(currentWord, width/2, height/2);
}

function mousePressed() {
  // Pick new random word
}`,solutionCode:`let words = ["loop", "array", "pixel", "code", "mouse"];
let currentWord = "";

function setup() {
  createCanvas(800, 500);
  textSize(48);
  textAlign(CENTER, CENTER);
  currentWord = words[floor(random(words.length))];
}

function draw() {
  background(220);
  text(currentWord, width/2, height/2);
}

function mousePressed() {
  currentWord = words[floor(random(words.length))];
}`,hints:["random(n) gives a number from 0 to n","floor() rounds down to a whole number","Use random(words.length) to get a valid index"],vocabularyTerms:["array","random","index"]}],exitTicket:"What does words[0] mean in an array called words?"},{day:2,title:"Push and Pop",objective:"Add and remove items with push() and pop()",exercises:[{id:"w1d2-1",title:"Click to Add",difficulty:"Easy",points:10,description:"Use push() to add mouse positions to an array",prompt:"Click anywhere to add that X position to an array. Draw circles at all saved positions.",starterCode:`let xs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw circles at each saved x position
}

function mousePressed() {
  // Add mouseX to the array
}`,solutionCode:`let xs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], height / 2, 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
}`,hints:["push() adds to the end of an array","Use a for loop to go through all elements","xs.length tells you how many items"],vocabularyTerms:["push","array","length"]},{id:"w1d2-2",title:"Undo with Pop",difficulty:"Easy",points:15,description:"Use pop() to remove the last item",prompt:"Click to add dots. Press 'U' to undo (remove) the last dot.",starterCode:`let xs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], height / 2, 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
}

function keyPressed() {
  // If key is 'U', remove last item
}`,solutionCode:`let xs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], height / 2, 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
}

function keyPressed() {
  if (key == 'U' || key == 'u') {
    xs.pop();
  }
}`,hints:["pop() removes the last element","Check which key was pressed with key == 'U'","pop() returns the removed item (but you don't need to use it)"],vocabularyTerms:["pop","push","keyPressed"]}],exitTicket:"What's the difference between push() and pop()?"},{day:3,title:"Parallel Arrays",objective:"Use multiple arrays to store related data",exercises:[{id:"w1d3-1",title:"X and Y Positions",difficulty:"Medium",points:15,description:"Store both x and y coordinates in parallel arrays",prompt:"Click to place dots. Store x positions in one array and y positions in another.",starterCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw circles at each (xs[i], ys[i]) position
}

function mousePressed() {
  // Add mouseX to xs and mouseY to ys
}`,solutionCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], ys[i], 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
}`,hints:["Parallel arrays have the same length","Index i refers to the same item in both arrays","Push to both arrays at the same time"],vocabularyTerms:["parallel-arrays","index","push"]},{id:"w1d3-2",title:"Three Parallel Arrays",difficulty:"Medium",points:20,description:"Add random sizes to each dot",prompt:"Extend the previous exercise: also store a random size for each dot.",starterCode:`let xs = [];
let ys = [];
let sizes = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw circles with their individual sizes
}

function mousePressed() {
  // Add position and random size (10-50)
}`,solutionCode:`let xs = [];
let ys = [];
let sizes = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], ys[i], sizes[i]);
  }
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
  sizes.push(random(10, 50));
}`,hints:["random(10, 50) gives a number between 10 and 50","All three arrays must stay the same length","Use sizes[i] for the diameter of each circle"],vocabularyTerms:["parallel-arrays","random"]}],exitTicket:"Why must parallel arrays always have the same length?"},{day:4,title:"Random Selection",objective:"Select random elements and change array values",exercises:[{id:"w1d4-1",title:"Color Switcher",difficulty:"Easy",points:10,description:"Click to pick a random background color from a palette",prompt:"Each click should pick a new random color from your palette array.",starterCode:`let colors = ["red", "orange", "yellow", "green", "blue"];
let currentColor;

function setup() {
  createCanvas(800, 500);
  currentColor = colors[0];
}

function draw() {
  background(currentColor);
}

function mousePressed() {
  // Pick random color from array
}`,solutionCode:`let colors = ["red", "orange", "yellow", "green", "blue"];
let currentColor;

function setup() {
  createCanvas(800, 500);
  currentColor = colors[0];
}

function draw() {
  background(currentColor);
}

function mousePressed() {
  let index = floor(random(colors.length));
  currentColor = colors[index];
}`,hints:["Get array length with colors.length","random(n) gives 0 to n-1 (but as a decimal)","floor() rounds down to an integer"],vocabularyTerms:["random","index","floor"]}],exitTicket:"Why do we need floor() when picking a random index?"},{day:5,title:"Mini-Project: Click Collector",objective:"Build a complete interactive sketch using arrays",exercises:[{id:"w1d5-project",title:"Click Collector",difficulty:"Medium",points:50,isProject:!0,description:"Create an interactive dot collector with undo and clear features",prompt:`Build a sketch where:
- Click to place colored dots
- Press 'U' to undo last dot
- Press 'C' to clear all dots
- Each dot has a random color`,starterCode:`let xs = [];
let ys = [];
let colors = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(255);
  // Draw all dots with their colors
}

function mousePressed() {
  // Add new dot with random color
}

function keyPressed() {
  // U = undo, C = clear
}`,solutionCode:`let xs = [];
let ys = [];
let cs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(255);
  for (let i = 0; i < xs.length; i++) {
    fill(cs[i]);
    noStroke();
    circle(xs[i], ys[i], 30);
  }

  // Show count
  fill(0);
  textSize(16);
  text("Dots: " + xs.length, 10, 20);
  text("U = Undo | C = Clear", 10, 40);
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
  cs.push(color(random(255), random(255), random(255)));
}

function keyPressed() {
  if (key == 'U' || key == 'u') {
    xs.pop();
    ys.pop();
    cs.pop();
  }
  if (key == 'C' || key == 'c') {
    xs = [];
    ys = [];
    cs = [];
  }
}`,hints:["Use color(r, g, b) to create a color object","Pop from ALL arrays when undoing","Set arrays to [] to clear them"],vocabularyTerms:["parallel-arrays","push","pop"],rubric:{functionality:"Click adds dots, U undoes, C clears",arrays:"Uses parallel arrays correctly",colors:"Each dot has random color",display:"Shows helpful information to user"}}]}]},week2:{title:"Loops Basics",bigIdea:"Loops repeat instructions efficiently.",days:[{day:6,title:"For Loops",objective:"Use for-loops to repeat drawing commands",exercises:[{id:"w2d6-1",title:"Row of Circles",difficulty:"Easy",points:10,description:"Draw 10 circles in a row using a for-loop",prompt:"Use a for-loop to draw 10 circles evenly spaced across the canvas.",starterCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Use a for-loop to draw 10 circles
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < 10; i++) {
    let x = 80 + i * 70;
    circle(x, height / 2, 40);
  }
}`,hints:["for (let i = 0; i < 10; i++) repeats 10 times","Use i to calculate different x positions","Multiply i by a spacing value"],vocabularyTerms:["for-loop","iteration","loop-variable"]},{id:"w2d6-2",title:"Spacing Formula",difficulty:"Medium",points:15,description:"Calculate spacing to fit any number of circles",prompt:"Draw n circles that are always evenly spaced, regardless of the value of n.",starterCode:`let n = 8;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw n circles evenly spaced
  // Formula: x = width / (n + 1) * (i + 1)
}`,solutionCode:`let n = 8;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  let spacing = width / (n + 1);
  for (let i = 0; i < n; i++) {
    let x = spacing * (i + 1);
    circle(x, height / 2, 30);
  }
}`,hints:["Divide width by (n + 1) to get spacing","Multiply spacing by (i + 1) for each position","Try changing n to see if it still works"],vocabularyTerms:["for-loop","spacing"]}],exitTicket:"What are the three parts of a for-loop declaration?"},{day:7,title:"Loop Patterns",objective:"Use loop variables to create visual patterns",exercises:[{id:"w2d7-1",title:"Staircase",difficulty:"Medium",points:15,description:"Draw a staircase pattern using a loop",prompt:"Draw rectangles that form a staircase going up from left to right.",starterCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw staircase: each step shifts right and up
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < 10; i++) {
    rect(50 + i * 50, 400 - i * 30, 40, 30);
  }
}`,hints:["X position increases with i","Y position decreases with i (going up)","Use i * stepSize for both"],vocabularyTerms:["for-loop","pattern"]},{id:"w2d7-2",title:"Growing Circles",difficulty:"Medium",points:15,description:"Draw circles that grow in size",prompt:"Draw 8 circles where each one is larger than the last.",starterCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw circles with increasing size
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
  noFill();
}

function draw() {
  background(240);
  for (let i = 0; i < 8; i++) {
    let size = 20 + i * 20;
    circle(width / 2, height / 2, size);
  }
}`,hints:["Size can also depend on i","Start with a base size and add i * increment","noFill() makes circles hollow"],vocabularyTerms:["for-loop","loop-variable"]}],exitTicket:"How can you make each loop iteration draw something different?"},{day:8,title:"Animation with Loops",objective:"Combine loops with animation",exercises:[{id:"w2d8-1",title:"Moving Object",difficulty:"Easy",points:10,description:"Animate a circle moving across the screen",prompt:"Make a circle move from left to right, resetting when it goes off screen.",starterCode:`let x = 0;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw and move the circle
  // Reset when off screen
}`,solutionCode:`let x = 0;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  circle(x, height / 2, 40);
  x += 3;
  if (x > width) {
    x = 0;
  }
}`,hints:["Increment x each frame","Check if x > width to reset","The draw() function is already a loop!"],vocabularyTerms:["animation","frame","conditional"]},{id:"w2d8-2",title:"Multiple Moving Objects",difficulty:"Medium",points:20,description:"Animate multiple circles at different speeds",prompt:"Create 5 circles at different y positions, each moving at a different speed.",starterCode:`let xs = [0, 0, 0, 0, 0];
let speeds = [1, 2, 3, 4, 5];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Move and draw all circles
}`,solutionCode:`let xs = [0, 0, 0, 0, 0];
let speeds = [1, 2, 3, 4, 5];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < 5; i++) {
    let y = 100 + i * 80;
    circle(xs[i], y, 30);
    xs[i] += speeds[i];
    if (xs[i] > width) {
      xs[i] = 0;
    }
  }
}`,hints:["Each circle has its own x in the array","Each circle has its own speed","Update each x by its corresponding speed"],vocabularyTerms:["animation","parallel-arrays","for-loop"]}],exitTicket:"Why don't we need a for-loop to make something animate?"},{day:9,title:"While Loops",objective:"Use while-loops for conditional repetition",exercises:[{id:"w2d9-1",title:"Dice Roller",difficulty:"Easy",points:10,description:"Roll dice until you get a 6",prompt:"Use a while-loop to count how many rolls it takes to get a 6.",starterCode:`function setup() {
  createCanvas(800, 500);
  textSize(24);

  let rolls = 0;
  let value = 0;

  // While loop: keep rolling until value is 6

  text("Rolled a 6 after " + rolls + " rolls", 50, 100);
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
  textSize(24);

  let rolls = 0;
  let value = 0;

  while (value != 6) {
    value = floor(random(1, 7));
    rolls++;
  }

  text("Rolled a 6 after " + rolls + " rolls", 50, 100);
}`,hints:["while (condition) repeats until condition is false","random(1, 7) gives 1-6 (not including 7)","Increment rolls inside the loop"],vocabularyTerms:["while-loop","condition","random"]},{id:"w2d9-2",title:"Random Dots Until Full",difficulty:"Medium",points:15,description:"Place random dots until you have 100",prompt:"Use a while-loop to place 100 random dots on the canvas.",starterCode:`function setup() {
  createCanvas(800, 500);
  background(240);

  let count = 0;

  // While loop: place dots until count reaches 100
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
  background(240);

  let count = 0;

  while (count < 100) {
    let x = random(width);
    let y = random(height);
    point(x, y);
    count++;
  }
}`,hints:["while (count < 100) runs until count is 100","Place one dot per iteration","Don't forget to increment count!"],vocabularyTerms:["while-loop","random","iteration"]}],exitTicket:"When would you use a while-loop instead of a for-loop?"},{day:10,title:"Mini-Project: Pattern Poster Generator",objective:"Create an interactive pattern generator using loops",exercises:[{id:"w2d10-project",title:"Pattern Poster Generator",difficulty:"Medium",points:50,isProject:!0,description:"Create a tool that generates different loop-based patterns",prompt:`Build a sketch where:
- Press 1-5 to show different patterns
- Each pattern uses loops creatively
- Press 'R' to randomize parameters`,starterCode:`let mode = 1;
let param1 = 20;
let param2 = 40;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(255);

  if (mode == 1) {
    // Pattern 1: Row of circles
  }

  if (mode == 2) {
    // Pattern 2: Grid of squares
  }

  // Add more patterns...
}

function keyPressed() {
  // Switch modes with 1-5
  // R to randomize
}`,solutionCode:`let mode = 1;
let count = 15;
let spacing = 40;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(30);
  stroke(0, 255, 150);
  noFill();

  if (mode == 1) {
    // Circles in a row
    for (let i = 0; i < count; i++) {
      let x = spacing + i * spacing;
      circle(x, height / 2, 30);
    }
  }

  if (mode == 2) {
    // Staircase
    fill(0, 255, 150);
    for (let i = 0; i < count; i++) {
      rect(50 + i * spacing, 400 - i * 25, 30, 30);
    }
  }

  if (mode == 3) {
    // Concentric circles
    for (let i = 0; i < count; i++) {
      circle(width / 2, height / 2, i * spacing);
    }
  }

  if (mode == 4) {
    // Random dots
    for (let i = 0; i < count * 10; i++) {
      point(random(width), random(height));
    }
  }

  if (mode == 5) {
    // Spiral
    for (let i = 0; i < count * 20; i++) {
      let angle = i * 0.1;
      let r = i * 0.5;
      let x = width / 2 + cos(angle) * r;
      let y = height / 2 + sin(angle) * r;
      point(x, y);
    }
  }

  // Instructions
  fill(255);
  noStroke();
  text("Mode: " + mode + " | Keys 1-5 to change | R to randomize", 10, 20);
}

function keyPressed() {
  if (key >= '1' && key <= '5') {
    mode = int(key);
  }
  if (key == 'R' || key == 'r') {
    count = floor(random(10, 25));
    spacing = floor(random(20, 50));
  }
}`,hints:["Use if (mode == n) to show different patterns","Each pattern should use a for-loop","Parameters like count and spacing make patterns adjustable"],vocabularyTerms:["for-loop","pattern","parameter"],rubric:{patterns:"At least 3 different loop patterns",switching:"Keys switch between patterns",randomize:"R randomizes parameters",creativity:"Patterns are visually interesting"}}]}]},week3:{title:"Traversing Arrays",bigIdea:"Loops + arrays = traversal. Read and update every element.",days:[{day:11,title:"Traversal Basics",objective:"Loop through arrays to draw many objects",exercises:[{id:"w3d11-1",title:"Draw All Points",difficulty:"Easy",points:10,description:"Traverse an array to draw all stored points",prompt:"Click to add points. Use a loop to draw a circle at every saved position.",starterCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Traverse arrays and draw all circles
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
}`,solutionCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], ys[i], 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
}`,hints:["Traversal means visiting every element","Loop from 0 to array.length","Use i as the index for both arrays"],vocabularyTerms:["traversal","for-loop","array"]}],exitTicket:"What does 'traversing an array' mean?"},{day:12,title:"Computing Values",objective:"Traverse to compute min, max, and average",exercises:[{id:"w3d12-1",title:"Sum and Average",difficulty:"Medium",points:15,description:"Calculate the average of array values",prompt:"Given an array of scores, calculate and display the average.",starterCode:`let scores = [85, 92, 78, 95, 88, 72, 90];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let sum = 0;
  // Calculate sum by traversing

  let average = 0;
  // Calculate average

  text("Average: " + average, 50, 100);
}`,solutionCode:`let scores = [85, 92, 78, 95, 88, 72, 90];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  let average = sum / scores.length;

  text("Average: " + average.toFixed(1), 50, 100);
}`,hints:["Start sum at 0","Add each element to sum","Divide sum by length for average"],vocabularyTerms:["traversal","accumulator","average"]},{id:"w3d12-2",title:"Find Min and Max",difficulty:"Medium",points:20,description:"Find the smallest and largest values",prompt:"Traverse the array to find both minimum and maximum values.",starterCode:`let nums = [34, 67, 12, 89, 45, 23, 78];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let minVal = nums[0];
  let maxVal = nums[0];

  // Traverse to find min and max

  text("Min: " + minVal, 50, 100);
  text("Max: " + maxVal, 50, 150);
}`,solutionCode:`let nums = [34, 67, 12, 89, 45, 23, 78];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let minVal = nums[0];
  let maxVal = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minVal) {
      minVal = nums[i];
    }
    if (nums[i] > maxVal) {
      maxVal = nums[i];
    }
  }

  text("Min: " + minVal, 50, 100);
  text("Max: " + maxVal, 50, 150);
}`,hints:["Start min and max with first element","Compare each element to current min/max","Update if you find a smaller/larger value"],vocabularyTerms:["traversal","minimum","maximum"]}],exitTicket:"Why do we initialize min and max with the first array element?"},{day:13,title:"Conditional Highlighting",objective:"Traverse with conditions to highlight specific elements",exercises:[{id:"w3d13-1",title:"Closest to Mouse",difficulty:"Medium",points:20,description:"Find and highlight the point closest to the mouse",prompt:"Traverse all points to find which one is closest to the mouse, and highlight it.",starterCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
  // Add some initial points
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
  }
}

function draw() {
  background(240);

  // Find closest point index
  let closestIndex = -1;
  let closestDist = Infinity;

  // Traverse to find closest

  // Draw all points, highlight closest
}`,solutionCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
  }
}

function draw() {
  background(240);

  let closestIndex = -1;
  let closestDist = Infinity;

  for (let i = 0; i < xs.length; i++) {
    let d = dist(mouseX, mouseY, xs[i], ys[i]);
    if (d < closestDist) {
      closestDist = d;
      closestIndex = i;
    }
  }

  for (let i = 0; i < xs.length; i++) {
    if (i == closestIndex) {
      fill(255, 0, 0);
      circle(xs[i], ys[i], 30);
    } else {
      fill(100);
      circle(xs[i], ys[i], 20);
    }
  }
}`,hints:["dist() calculates distance between two points","Infinity is larger than any number","Track both the closest distance AND index"],vocabularyTerms:["traversal","dist","conditional"]}],exitTicket:"Why do we need two separate loops in the closest-point solution?"},{day:14,title:"Updating Elements",objective:"Traverse to modify array values",exercises:[{id:"w3d14-1",title:"Moving All Points",difficulty:"Medium",points:15,description:"Add velocity to make all points move",prompt:"Each point has a velocity. Update all positions each frame.",starterCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
    vx.push(random(-2, 2));
    vy.push(random(-2, 2));
  }
}

function draw() {
  background(240);

  // Traverse: update positions and draw
}`,solutionCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
    vx.push(random(-2, 2));
    vy.push(random(-2, 2));
  }
}

function draw() {
  background(240);

  for (let i = 0; i < xs.length; i++) {
    xs[i] += vx[i];
    ys[i] += vy[i];
    circle(xs[i], ys[i], 20);
  }
}`,hints:["vx and vy are velocity (speed + direction)","Add velocity to position each frame","xs[i] += vx[i] updates the position"],vocabularyTerms:["traversal","velocity","update"]},{id:"w3d14-2",title:"Bounce Off Walls",difficulty:"Medium",points:20,description:"Make points bounce when they hit edges",prompt:"Extend the moving points: reverse velocity when hitting walls.",starterCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
    vx.push(random(-3, 3));
    vy.push(random(-3, 3));
  }
}

function draw() {
  background(240);

  for (let i = 0; i < xs.length; i++) {
    // Update position

    // Bounce off walls

    circle(xs[i], ys[i], 20);
  }
}`,solutionCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
    vx.push(random(-3, 3));
    vy.push(random(-3, 3));
  }
}

function draw() {
  background(240);

  for (let i = 0; i < xs.length; i++) {
    xs[i] += vx[i];
    ys[i] += vy[i];

    if (xs[i] < 0 || xs[i] > width) {
      vx[i] *= -1;
    }
    if (ys[i] < 0 || ys[i] > height) {
      vy[i] *= -1;
    }

    circle(xs[i], ys[i], 20);
  }
}`,hints:["Check if position is outside bounds","Multiply velocity by -1 to reverse","Check x and y separately"],vocabularyTerms:["traversal","bounce","conditional"]}],exitTicket:"How do you reverse a velocity value?"},{day:15,title:"Mini-Project: Particle Fountain",objective:"Create a particle system with spawning and removal",exercises:[{id:"w3d15-project",title:"Particle Fountain",difficulty:"Hard",points:50,isProject:!0,description:"Create an interactive particle system",prompt:`Build a particle fountain:
- Click to spawn burst of particles
- Particles have gravity
- Particles shrink over time
- Remove particles when too small`,starterCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];
let life = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(0);

  // Traverse backwards (important for removal!)
  for (let i = xs.length - 1; i >= 0; i--) {
    // Update position
    // Apply gravity
    // Decrease life
    // Draw particle
    // Remove if dead
  }
}

function mousePressed() {
  // Spawn 20 particles at mouse position
}`,solutionCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];
let life = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(0);

  for (let i = xs.length - 1; i >= 0; i--) {
    // Update
    xs[i] += vx[i];
    ys[i] += vy[i];
    vy[i] += 0.2; // gravity
    life[i] -= 2;

    // Draw
    fill(255, life[i] * 2.5);
    noStroke();
    circle(xs[i], ys[i], life[i] / 3);

    // Remove dead particles
    if (life[i] <= 0) {
      xs.splice(i, 1);
      ys.splice(i, 1);
      vx.splice(i, 1);
      vy.splice(i, 1);
      life.splice(i, 1);
    }
  }

  // UI
  fill(255);
  text("Particles: " + xs.length, 10, 20);
  text("Click to spawn", 10, 40);
}

function mousePressed() {
  for (let i = 0; i < 20; i++) {
    xs.push(mouseX);
    ys.push(mouseY);
    vx.push(random(-3, 3));
    vy.push(random(-6, -1));
    life.push(100);
  }
}`,hints:["Loop BACKWARDS when removing elements","splice(i, 1) removes element at index i","Gravity: add to vy each frame","Life decreases; remove when <= 0"],vocabularyTerms:["traversal","splice","particle-system"],rubric:{spawning:"Click spawns multiple particles",physics:"Gravity affects particles",lifecycle:"Particles shrink and are removed",visuals:"Particles look good (fade, color, etc.)"}}]}]},week4:{title:"Filtering and 2D Arrays",bigIdea:"Traversal can filter, transform, and work with grids.",days:[{day:16,title:"Filtering",objective:"Keep only elements that match a condition",exercises:[{id:"w4d16-1",title:"Filter Big Numbers",difficulty:"Medium",points:15,description:"Create a new array with only values above 50",prompt:"Given an array of numbers, create a new array containing only values greater than 50.",starterCode:`let nums = [10, 40, 70, 20, 90, 55, 30, 85];

function setup() {
  createCanvas(800, 500);
  textSize(20);

  let big = [];

  // Filter: keep only nums > 50

  text("Original: " + nums.join(", "), 50, 100);
  text("Filtered: " + big.join(", "), 50, 150);
}`,solutionCode:`let nums = [10, 40, 70, 20, 90, 55, 30, 85];

function setup() {
  createCanvas(800, 500);
  textSize(20);

  let big = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 50) {
      big.push(nums[i]);
    }
  }

  text("Original: " + nums.join(", "), 50, 100);
  text("Filtered: " + big.join(", "), 50, 150);
}`,hints:["Create an empty result array","Traverse the original array","Push elements that match the condition"],vocabularyTerms:["filter","traversal","conditional"]},{id:"w4d16-2",title:"Visual Filter",difficulty:"Medium",points:20,description:"Draw only particles on the right side",prompt:"Only draw particles whose x position is greater than width/2.",starterCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 50; i++) {
    xs.push(random(width));
    ys.push(random(height));
  }
}

function draw() {
  background(240);

  // Draw line at center
  stroke(200);
  line(width / 2, 0, width / 2, height);

  // Only draw dots on right side
  noStroke();
  fill(0, 150, 255);
}`,solutionCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 50; i++) {
    xs.push(random(width));
    ys.push(random(height));
  }
}

function draw() {
  background(240);

  stroke(200);
  line(width / 2, 0, width / 2, height);

  noStroke();
  fill(0, 150, 255);

  for (let i = 0; i < xs.length; i++) {
    if (xs[i] > width / 2) {
      circle(xs[i], ys[i], 15);
    }
  }

  fill(0);
  text("Showing only right-side dots", 10, 20);
}`,hints:["You don't need to create a new array","Just add a condition before drawing","Only draw if x > width/2"],vocabularyTerms:["filter","conditional","traversal"]}],exitTicket:"What's the difference between filtering into a new array vs filtering during drawing?"},{day:17,title:"Reducing",objective:"Compute a single value from an array",exercises:[{id:"w4d17-1",title:"Total Score",difficulty:"Easy",points:10,description:"Sum all values to get a total",prompt:"Calculate the total score from an array of point values.",starterCode:`let points = [10, 25, 15, 30, 20, 5];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let total = 0;

  // Calculate total

  text("Total Points: " + total, 50, 100);
}`,solutionCode:`let points = [10, 25, 15, 30, 20, 5];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let total = 0;

  for (let i = 0; i < points.length; i++) {
    total += points[i];
  }

  text("Total Points: " + total, 50, 100);
}`,hints:["Start with total = 0","Add each element to total","This is called 'reducing' to a single value"],vocabularyTerms:["reduce","accumulator","sum"]},{id:"w4d17-2",title:"Energy Meter",difficulty:"Medium",points:20,description:"Sum particle sizes to show total 'energy'",prompt:"Create particles with random sizes. Show total 'energy' (sum of all sizes) as a bar.",starterCode:`let sizes = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 20; i++) {
    sizes.push(random(10, 50));
  }
}

function draw() {
  background(240);

  // Calculate total energy
  let energy = 0;

  // Draw energy bar

  // Draw particles
}`,solutionCode:`let xs = [];
let ys = [];
let sizes = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 20; i++) {
    xs.push(random(100, width - 100));
    ys.push(random(100, height - 50));
    sizes.push(random(10, 50));
  }
}

function draw() {
  background(240);

  // Calculate total energy
  let energy = 0;
  for (let i = 0; i < sizes.length; i++) {
    energy += sizes[i];
  }

  // Draw energy bar
  fill(100);
  rect(50, 20, 300, 20);
  fill(0, 200, 100);
  rect(50, 20, energy / 2, 20);
  fill(0);
  text("Energy: " + floor(energy), 360, 35);

  // Draw particles
  for (let i = 0; i < xs.length; i++) {
    fill(0, 150, 255, 150);
    circle(xs[i], ys[i], sizes[i]);
  }
}`,hints:["Sum all sizes to get energy","Draw a bar proportional to energy","Scale the bar width appropriately"],vocabularyTerms:["reduce","sum","visualization"]}],exitTicket:"What does 'reducing' an array mean?"},{day:18,title:"2D Arrays and Grids",objective:"Use nested loops to create and draw grids",exercises:[{id:"w4d18-1",title:"Draw a Grid",difficulty:"Medium",points:15,description:"Use nested loops to draw a grid of squares",prompt:"Draw a 10x10 grid of squares using nested for-loops.",starterCode:`function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  // Nested loops: rows and columns
  // Each cell is 50x50 pixels
}`,solutionCode:`function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let x = col * 50;
      let y = row * 50;
      stroke(0);
      noFill();
      rect(x, y, 50, 50);
    }
  }
}`,hints:["Outer loop controls rows","Inner loop controls columns","x depends on col, y depends on row"],vocabularyTerms:["nested-loop","grid","2d-array"]},{id:"w4d18-2",title:"Checkerboard",difficulty:"Medium",points:20,description:"Color the grid like a checkerboard",prompt:"Make alternating squares black and white like a checkerboard.",starterCode:`function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let x = col * 50;
      let y = row * 50;

      // Alternate colors based on row + col

      rect(x, y, 50, 50);
    }
  }
}`,solutionCode:`function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let x = col * 50;
      let y = row * 50;

      if ((row + col) % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }

      noStroke();
      rect(x, y, 50, 50);
    }
  }
}`,hints:["(row + col) % 2 alternates between 0 and 1","Use this to choose between two colors","% is the modulo (remainder) operator"],vocabularyTerms:["nested-loop","modulo","pattern"]}],exitTicket:"What does (row + col) % 2 calculate?"},{day:19,title:"2D Array Data",objective:"Store and access data in a 2D array",exercises:[{id:"w4d19-1",title:"Random Walls",difficulty:"Medium",points:20,description:"Create a 2D array where some cells are walls",prompt:"Create a 2D array grid where 0=floor and 1=wall. Draw walls as black squares.",starterCode:`let grid = [];

function setup() {
  createCanvas(500, 500);

  // Initialize 2D array
  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      // 20% chance of wall
    }
  }
}

function draw() {
  background(220);

  // Draw grid based on values
}`,solutionCode:`let grid = [];

function setup() {
  createCanvas(500, 500);

  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      grid[r][c] = random() < 0.2 ? 1 : 0;
    }
  }
}

function draw() {
  background(220);

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let x = c * 50;
      let y = r * 50;

      if (grid[r][c] == 1) {
        fill(0);
      } else {
        fill(255);
      }

      stroke(100);
      rect(x, y, 50, 50);
    }
  }
}`,hints:["grid[r] = [] creates a row","grid[r][c] accesses row r, column c","random() < 0.2 is true 20% of the time"],vocabularyTerms:["2d-array","grid","random"]},{id:"w4d19-2",title:"Player Movement",difficulty:"Hard",points:25,description:"Add a player that moves on the grid",prompt:"Add arrow key movement. The player cannot move into walls.",starterCode:`let grid = [];
let playerR = 0;
let playerC = 0;

function setup() {
  createCanvas(500, 500);

  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      grid[r][c] = random() < 0.2 ? 1 : 0;
    }
  }
  grid[0][0] = 0; // Start clear
}

function draw() {
  // Draw grid and player
}

function keyPressed() {
  // Move player with arrow keys
  // Don't allow moving into walls
}`,solutionCode:`let grid = [];
let playerR = 0;
let playerC = 0;

function setup() {
  createCanvas(500, 500);

  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      grid[r][c] = random() < 0.2 ? 1 : 0;
    }
  }
  grid[0][0] = 0;
}

function draw() {
  background(220);

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let x = c * 50;
      let y = r * 50;

      if (grid[r][c] == 1) {
        fill(40);
      } else {
        fill(200);
      }
      stroke(100);
      rect(x, y, 50, 50);
    }
  }

  // Draw player
  fill(0, 150, 255);
  rect(playerC * 50 + 5, playerR * 50 + 5, 40, 40);
}

function keyPressed() {
  let newR = playerR;
  let newC = playerC;

  if (keyCode == UP_ARROW) newR--;
  if (keyCode == DOWN_ARROW) newR++;
  if (keyCode == LEFT_ARROW) newC--;
  if (keyCode == RIGHT_ARROW) newC++;

  // Check bounds and walls
  if (newR >= 0 && newR < 10 && newC >= 0 && newC < 10) {
    if (grid[newR][newC] != 1) {
      playerR = newR;
      playerC = newC;
    }
  }
}`,hints:["Calculate new position first, don't move yet","Check if new position is in bounds","Check if new position is not a wall","Only then update player position"],vocabularyTerms:["2d-array","collision","keyCode"]}],exitTicket:"How do you check if a grid cell is a wall before moving?"},{day:20,title:"Final Capstone Project",objective:"Apply all concepts in a complete project",exercises:[{id:"w4d20-capstone",title:"Grid Adventure Game",difficulty:"Hard",points:100,isProject:!0,isCapstone:!0,description:"Create a complete grid-based game",prompt:`Build a Grid Adventure Game:
- 2D array map (0=floor, 1=wall, 2=goal, 3=coin)
- Player moves with arrow keys
- Collect coins for points
- Reach the goal to win
- Display score and instructions`,starterCode:`let grid = [];
let playerR = 0;
let playerC = 0;
let score = 0;
let gameWon = false;

function setup() {
  createCanvas(500, 550);
  initializeMap();
}

function initializeMap() {
  // Create 10x10 grid
  // Place walls, coins, and goal
}

function draw() {
  background(30);

  if (gameWon) {
    // Show win screen
  } else {
    // Draw map
    // Draw player
    // Draw UI
  }
}

function keyPressed() {
  if (gameWon) return;

  // Handle movement
  // Check for coin collection
  // Check for goal reached
}`,solutionCode:`let grid = [];
let playerR = 0;
let playerC = 0;
let score = 0;
let gameWon = false;

function setup() {
  createCanvas(500, 550);
  initializeMap();
}

function initializeMap() {
  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      let rand = random();
      if (rand < 0.15) {
        grid[r][c] = 1; // wall
      } else if (rand < 0.25) {
        grid[r][c] = 3; // coin
      } else {
        grid[r][c] = 0; // floor
      }
    }
  }
  grid[0][0] = 0; // start
  grid[9][9] = 2; // goal
}

function draw() {
  background(30);

  if (gameWon) {
    textSize(48);
    fill(0, 255, 150);
    textAlign(CENTER, CENTER);
    text("YOU WIN!", width / 2, height / 2 - 30);
    textSize(24);
    text("Score: " + score, width / 2, height / 2 + 20);
    text("Press R to restart", width / 2, height / 2 + 60);
    return;
  }

  // Draw grid
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let x = c * 50;
      let y = r * 50;

      if (grid[r][c] == 1) {
        fill(60);
      } else if (grid[r][c] == 2) {
        fill(0, 255, 150);
      } else if (grid[r][c] == 3) {
        fill(255, 215, 0);
      } else {
        fill(40);
      }

      stroke(80);
      rect(x, y, 50, 50);

      if (grid[r][c] == 3) {
        fill(255, 180, 0);
        circle(x + 25, y + 25, 20);
      }
    }
  }

  // Draw player
  fill(0, 150, 255);
  noStroke();
  rect(playerC * 50 + 8, playerR * 50 + 8, 34, 34, 5);

  // UI
  fill(255);
  textSize(16);
  textAlign(LEFT, CENTER);
  text("Score: " + score + " | Arrow keys to move | Reach the green goal!", 10, 525);
}

function keyPressed() {
  if (gameWon) {
    if (key == 'R' || key == 'r') {
      score = 0;
      playerR = 0;
      playerC = 0;
      gameWon = false;
      initializeMap();
    }
    return;
  }

  let newR = playerR;
  let newC = playerC;

  if (keyCode == UP_ARROW) newR--;
  if (keyCode == DOWN_ARROW) newR++;
  if (keyCode == LEFT_ARROW) newC--;
  if (keyCode == RIGHT_ARROW) newC++;

  if (newR >= 0 && newR < 10 && newC >= 0 && newC < 10) {
    if (grid[newR][newC] != 1) {
      playerR = newR;
      playerC = newC;

      // Collect coin
      if (grid[playerR][playerC] == 3) {
        score += 10;
        grid[playerR][playerC] = 0;
      }

      // Check win
      if (grid[playerR][playerC] == 2) {
        gameWon = true;
      }
    }
  }
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function Ny(e){const t=wc[e];if(!t)return[];const n=[];for(const i of t.days)n.push(...i.exercises);return n}const de={"cyber-range":{id:"cyber-range",name:"Cybersecurity",description:"Interactive cybersecurity challenges and simulations",color:"#00ff88",icon:"🔐",units:[{id:"cryptography",name:"Cryptography",description:"Learn encryption, decryption, and cipher techniques",challengeCount:5},{id:"network",name:"Network Security",description:"Understand firewalls, ports, and network protocols",challengeCount:4},{id:"password",name:"Password Security",description:"Create strong passwords and understand attacks",challengeCount:4},{id:"web",name:"Web Security",description:"Learn about XSS, SQL injection, and secure coding",challengeCount:3},{id:"social",name:"Social Engineering",description:"Recognize phishing and manipulation tactics",challengeCount:3},{id:"network-monitor",name:"Network Monitor",description:"Real-time packet analysis and threat detection",challengeCount:1,isScenario:!0}]},"arrays-loops":{id:"arrays-loops",name:"Programming",description:"Arrays, loops, and traversal with p5.js",color:"#00d4ff",icon:"💻",units:[{id:"week1",name:"Week 1: Arrays Basics",description:"Store collections of values and access by index",exerciseCount:8},{id:"week2",name:"Week 2: Loops Basics",description:"Use for-loops and while-loops to repeat instructions",exerciseCount:8},{id:"week3",name:"Week 3: Traversing Arrays",description:"Loop through arrays to process every element",exerciseCount:7},{id:"week4",name:"Week 4: Filtering & 2D Arrays",description:"Filter arrays and work with grids",exerciseCount:8}]},"ap-csp":{id:"ap-csp",name:"AP CSP Exam Prep",description:"Pseudocode translation and flowchart interpretation",color:"#ff6b9d",icon:"📝",units:[{id:"pseudocode",name:"Pseudocode",description:"Translate between AP CSP pseudocode and JavaScript",exerciseCount:30},{id:"flowcharts",name:"Flowcharts",description:"Read, interpret, and build flowcharts",exerciseCount:20}]}},ai=[{id:"assignment",title:"Assignment & Variables",pseudocode:"a ← expression",javascript:"let a = expression;",explanation:"The arrow (←) assigns a value to a variable. In pseudocode, you don't need to declare variables with let/const - just use the arrow to create and assign.",examples:[{pseudocode:"x ← 5",javascript:"let x = 5;"},{pseudocode:'name ← "Alice"',javascript:'let name = "Alice";'},{pseudocode:"total ← price + tax",javascript:"let total = price + tax;"},{pseudocode:"x ← x + 1",javascript:"x = x + 1; // or x++"}],keyPoints:["← is the assignment operator (like = in JavaScript)","Variables are created automatically when first assigned","Can reassign variables without re-declaring"]},{id:"display-input",title:"Display & Input",pseudocode:`DISPLAY(expression)
INPUT()`,javascript:`console.log(expression);
prompt();`,explanation:"DISPLAY shows output to the user. INPUT gets user input. In JavaScript, console.log() prints to console and prompt() shows a dialog.",examples:[{pseudocode:'DISPLAY("Hello")',javascript:'console.log("Hello");'},{pseudocode:"DISPLAY(x)",javascript:"console.log(x);"},{pseudocode:"name ← INPUT()",javascript:"let name = prompt();"},{pseudocode:'DISPLAY("Sum is " + total)',javascript:'console.log("Sum is " + total);'}],keyPoints:["DISPLAY can show text, numbers, or expressions","INPUT waits for and returns user input","Strings can be concatenated with +"]},{id:"arithmetic",title:"Arithmetic Operators",pseudocode:"a + b, a - b, a * b, a / b, a MOD b",javascript:"a + b, a - b, a * b, a / b, a % b",explanation:"Most arithmetic operators are the same. The key difference is MOD (modulo/remainder) which is % in JavaScript.",examples:[{pseudocode:"sum ← 5 + 3",javascript:"let sum = 5 + 3;"},{pseudocode:"remainder ← 17 MOD 5",javascript:"let remainder = 17 % 5; // equals 2"},{pseudocode:"avg ← total / count",javascript:"let avg = total / count;"},{pseudocode:"isEven ← (num MOD 2) = 0",javascript:"let isEven = (num % 2) === 0;"}],keyPoints:["MOD gives the remainder after division","17 MOD 5 = 2 (because 17 = 5*3 + 2)","MOD is useful for checking even/odd, cycling values"]},{id:"random",title:"Random Numbers",pseudocode:"RANDOM(a, b)",javascript:"Math.floor(Math.random() * (b - a + 1)) + a",explanation:"RANDOM(a, b) returns a random integer from a to b, inclusive. JavaScript's Math.random() returns 0-1, so we need a formula to get integers in a range.",examples:[{pseudocode:"dice ← RANDOM(1, 6)",javascript:"let dice = Math.floor(Math.random() * 6) + 1;"},{pseudocode:"coin ← RANDOM(0, 1)",javascript:"let coin = Math.floor(Math.random() * 2);"},{pseudocode:"percent ← RANDOM(1, 100)",javascript:"let percent = Math.floor(Math.random() * 100) + 1;"}],keyPoints:["RANDOM is inclusive on both ends","RANDOM(1, 6) can return 1, 2, 3, 4, 5, or 6","Often used for simulations and games"]},{id:"relational",title:"Relational Operators",pseudocode:"a = b, a ≠ b, a > b, a < b, a ≥ b, a ≤ b",javascript:"a === b, a !== b, a > b, a < b, a >= b, a <= b",explanation:"Relational operators compare values and return true/false. Note: In pseudocode, = is comparison (not assignment), while JavaScript uses === for comparison.",examples:[{pseudocode:"IF (x = 5)",javascript:"if (x === 5)"},{pseudocode:"IF (age ≥ 18)",javascript:"if (age >= 18)"},{pseudocode:'IF (name ≠ "admin")',javascript:'if (name !== "admin")'},{pseudocode:"result ← (a > b)",javascript:"let result = (a > b);"}],keyPoints:["Pseudocode uses = for comparison, JS uses ===","≠ becomes !== in JavaScript","≥ and ≤ become >= and <= in JavaScript"]},{id:"boolean",title:"Boolean Operators",pseudocode:"NOT condition, cond1 AND cond2, cond1 OR cond2",javascript:"!condition, cond1 && cond2, cond1 || cond2",explanation:"Boolean operators combine or negate conditions. NOT flips true/false, AND requires both true, OR requires at least one true.",examples:[{pseudocode:"IF (NOT found)",javascript:"if (!found)"},{pseudocode:"IF (age ≥ 13 AND age ≤ 19)",javascript:"if (age >= 13 && age <= 19)"},{pseudocode:'IF (day = "Sat" OR day = "Sun")',javascript:'if (day === "Sat" || day === "Sun")'},{pseudocode:"canVote ← (age ≥ 18 AND citizen)",javascript:"let canVote = (age >= 18 && citizen);"}],keyPoints:["NOT/! flips true to false and false to true","AND/&& is true only if BOTH conditions are true","OR/|| is true if AT LEAST ONE condition is true"]},{id:"selection",title:"Selection (IF/ELSE)",pseudocode:`IF (condition)
{
   statements
}
ELSE
{
   statements
}`,javascript:`if (condition) {
   statements;
} else {
   statements;
}`,explanation:"Selection structures let code make decisions. If the condition is true, the first block runs; otherwise the ELSE block runs (if present).",examples:[{pseudocode:`IF (score ≥ 60)
{
   DISPLAY("Pass")
}
ELSE
{
   DISPLAY("Fail")
}`,javascript:`if (score >= 60) {
   console.log("Pass");
} else {
   console.log("Fail");
}`},{pseudocode:`IF (x > 0)
{
   sign ← "positive"
}`,javascript:`if (x > 0) {
   sign = "positive";
}`}],keyPoints:["Curly braces {} mark the beginning and end of blocks","ELSE is optional","Can nest IF statements inside each other"]},{id:"iteration-repeat",title:"Iteration: REPEAT n TIMES",pseudocode:`REPEAT n TIMES
{
   statements
}`,javascript:`for (let i = 0; i < n; i++) {
   statements;
}`,explanation:"REPEAT n TIMES runs the block exactly n times. In JavaScript, we use a for loop with a counter variable.",examples:[{pseudocode:`REPEAT 5 TIMES
{
   DISPLAY("Hello")
}`,javascript:`for (let i = 0; i < 5; i++) {
   console.log("Hello");
}`},{pseudocode:`total ← 0
REPEAT 10 TIMES
{
   total ← total + 1
}`,javascript:`let total = 0;
for (let i = 0; i < 10; i++) {
   total = total + 1;
}`}],keyPoints:["The loop runs exactly n times","The counter variable (i) is NOT available in pseudocode","Use when you know how many times to repeat"]},{id:"iteration-until",title:"Iteration: REPEAT UNTIL",pseudocode:`REPEAT UNTIL (condition)
{
   statements
}`,javascript:`while (!condition) {
   statements;
}`,explanation:"REPEAT UNTIL keeps running until the condition becomes true. In JavaScript, we use while with the OPPOSITE condition.",examples:[{pseudocode:`REPEAT UNTIL (count ≥ 10)
{
   count ← count + 1
}`,javascript:`while (count < 10) {
   count = count + 1;
}`},{pseudocode:`REPEAT UNTIL (found = true)
{
   DISPLAY("Searching...")
}`,javascript:`while (!found) {
   console.log("Searching...");
}`}],keyPoints:["Loops UNTIL condition is TRUE","JavaScript while loops WHILE condition is TRUE","So we negate: REPEAT UNTIL (x) → while (!x)","Careful of infinite loops!"]},{id:"iteration-foreach",title:"Iteration: FOR EACH",pseudocode:`FOR EACH item IN list
{
   statements
}`,javascript:`for (let item of list) {
   statements;
}`,explanation:"FOR EACH processes every item in a list one at a time. The variable takes on each value in the list sequentially.",examples:[{pseudocode:`FOR EACH num IN numbers
{
   DISPLAY(num)
}`,javascript:`for (let num of numbers) {
   console.log(num);
}`},{pseudocode:`total ← 0
FOR EACH score IN scores
{
   total ← total + score
}`,javascript:`let total = 0;
for (let score of scores) {
   total = total + score;
}`}],keyPoints:["Automatically goes through all items","Item variable changes each iteration","Great for processing all elements in a list"]},{id:"lists-basics",title:"Lists: Basics",pseudocode:`list ← [item1, item2, item3]
list[index]`,javascript:`let list = [item1, item2, item3];
list[index]`,explanation:"Lists store multiple values. CRITICAL DIFFERENCE: Pseudocode lists are 1-indexed (first item at position 1), while JavaScript arrays are 0-indexed (first item at position 0).",examples:[{pseudocode:"nums ← [10, 20, 30]",javascript:"let nums = [10, 20, 30];"},{pseudocode:"first ← nums[1]  // gets 10",javascript:"let first = nums[0];  // gets 10"},{pseudocode:"last ← nums[3]   // gets 30",javascript:"let last = nums[2];   // gets 30"},{pseudocode:"nums[2] ← 25     // changes 20 to 25",javascript:"nums[1] = 25;         // changes 20 to 25"}],keyPoints:["PSEUDOCODE: First element is at index 1","JAVASCRIPT: First element is at index 0","This is a VERY common source of errors!","Pseudocode index = JavaScript index + 1"]},{id:"lists-operations",title:"Lists: Operations",pseudocode:`APPEND(list, value)
INSERT(list, index, value)
REMOVE(list, index)
LENGTH(list)`,javascript:`list.push(value)
list.splice(index, 0, value)
list.splice(index, 1)
list.length`,explanation:"Pseudocode has built-in list operations. Remember that pseudocode indices start at 1!",examples:[{pseudocode:"APPEND(nums, 40)",javascript:"nums.push(40);"},{pseudocode:"INSERT(nums, 2, 15)  // insert at position 2",javascript:"nums.splice(1, 0, 15);  // insert at index 1"},{pseudocode:"REMOVE(nums, 1)      // remove first item",javascript:"nums.splice(0, 1);      // remove first item"},{pseudocode:"size ← LENGTH(nums)",javascript:"let size = nums.length;"}],keyPoints:["APPEND adds to the end of the list","INSERT puts value at specific position, shifts others","REMOVE deletes item at position, shifts others down","LENGTH returns the number of items"]},{id:"procedures",title:"Procedures (Functions)",pseudocode:`PROCEDURE name(param1, param2)
{
   statements
   RETURN expression
}`,javascript:`function name(param1, param2) {
   statements;
   return expression;
}`,explanation:"Procedures are reusable blocks of code. They can take parameters and return values.",examples:[{pseudocode:`PROCEDURE square(n)
{
   RETURN n * n
}`,javascript:`function square(n) {
   return n * n;
}`},{pseudocode:`PROCEDURE greet(name)
{
   DISPLAY("Hello, " + name)
}`,javascript:`function greet(name) {
   console.log("Hello, " + name);
}`},{pseudocode:"result ← square(5)",javascript:"let result = square(5);"}],keyPoints:["PROCEDURE = function","Parameters are inputs to the procedure","RETURN sends a value back to the caller","Procedures without RETURN just do actions"]},{id:"robot",title:"Robot Commands",pseudocode:`MOVE_FORWARD()
ROTATE_LEFT()
ROTATE_RIGHT()
CAN_MOVE(direction)`,javascript:`// Robot commands are visual - not directly translated
// direction can be: "forward", "backward", "left", "right"`,explanation:"Robot commands control a virtual robot on a grid. These are used in AP CSP for visual algorithm problems.",examples:[{pseudocode:"MOVE_FORWARD()",javascript:"// Moves robot one square in facing direction"},{pseudocode:"ROTATE_LEFT()",javascript:"// Turns robot 90° counterclockwise"},{pseudocode:"ROTATE_RIGHT()",javascript:"// Turns robot 90° clockwise"},{pseudocode:`IF (CAN_MOVE(forward))
{
   MOVE_FORWARD()
}`,javascript:"// Checks if path is clear before moving"}],keyPoints:["Robot starts somewhere on a grid","Black squares are walls/obstacles","Robot can only move to white/open squares","CAN_MOVE returns true/false"]}],ln=[{id:"ps-001",topic:"assignment",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`x ← 10
y ← x + 5
DISPLAY(y)`,answer:`let x = 10;
let y = x + 5;
console.log(y);`,acceptableAnswers:[`let x = 10;
let y = x + 5;
console.log(y);`,`var x = 10;
var y = x + 5;
console.log(y);`,`const x = 10;
const y = x + 5;
console.log(y);`],hints:["← becomes = with let/var/const","DISPLAY becomes console.log()"],explanation:"Assignment uses = in JavaScript. The arrow (←) maps directly to equals (=). DISPLAY maps to console.log()."},{id:"ps-002",topic:"assignment",difficulty:"beginner",type:"js-to-pseudocode",prompt:"Convert this JavaScript to pseudocode:",given:`let score = 100;
score = score - 15;
console.log(score);`,answer:`score ← 100
score ← score - 15
DISPLAY(score)`,hints:["= becomes ←","console.log becomes DISPLAY","No semicolons in pseudocode"],explanation:"JavaScript equals (=) becomes arrow (←). Remove let/const/var keywords and semicolons."},{id:"ps-003",topic:"assignment",difficulty:"beginner",type:"trace",prompt:"What is the value of result after this code runs?",given:`a ← 5
b ← 3
a ← a + b
result ← a * 2`,answer:"16",hints:["Trace each line step by step","a changes from 5 to 8","Then result is 8 * 2"],explanation:"a starts at 5, b is 3. Then a becomes 5+3=8. Finally result is 8*2=16."},{id:"ps-004",topic:"assignment",difficulty:"intermediate",type:"trace",prompt:"What values do x, y, and z have after this code runs?",given:`x ← 10
y ← x
x ← 20
z ← x + y`,answer:"x = 20, y = 10, z = 30",hints:["y gets a COPY of x's value","Changing x later doesn't affect y"],explanation:"When y ← x runs, y gets a copy of 10. Later x changes to 20, but y stays 10. So z = 20 + 10 = 30."},{id:"ps-005",topic:"arithmetic",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`remainder ← 17 MOD 5
DISPLAY(remainder)`,answer:`let remainder = 17 % 5;
console.log(remainder);`,hints:["MOD becomes %","This is the modulo/remainder operator"],explanation:"MOD in pseudocode is % in JavaScript. Both give the remainder after division. 17 MOD 5 = 2 because 17 = 5*3 + 2."},{id:"ps-006",topic:"arithmetic",difficulty:"beginner",type:"trace",prompt:"What is displayed when this code runs?",given:`a ← 20
b ← 7
result ← a MOD b
DISPLAY(result)`,answer:"6",hints:["MOD gives the remainder","20 divided by 7 is 2 with remainder 6"],explanation:"20 ÷ 7 = 2 remainder 6. So 20 MOD 7 = 6."},{id:"ps-007",topic:"arithmetic",difficulty:"intermediate",type:"trace",prompt:"What is displayed?",given:`num ← 25
isEven ← (num MOD 2) = 0
DISPLAY(isEven)`,answer:"false",hints:["First calculate num MOD 2","Then check if it equals 0"],explanation:"25 MOD 2 = 1 (25 is odd). Is 1 = 0? No, so isEven is false."},{id:"ps-008",topic:"arithmetic",difficulty:"intermediate",type:"fill-blank",prompt:"Fill in the blank to check if a number is divisible by 3:",given:"isDivisible ← (num ___ 3) = 0",answer:"MOD",hints:["What operator gives the remainder?","A number divisible by 3 has remainder 0"],explanation:"num MOD 3 gives the remainder when dividing by 3. If the remainder is 0, the number is divisible by 3."},{id:"ps-009",topic:"random",difficulty:"beginner",type:"multiple-choice",prompt:"Which values could dice possibly have after this runs?",given:"dice ← RANDOM(1, 6)",options:["Only 1 or 6","Any integer from 1 to 6","Any decimal from 1 to 6","Any integer from 0 to 6"],answer:"Any integer from 1 to 6",hints:["RANDOM returns integers","RANDOM is inclusive on both ends"],explanation:"RANDOM(1, 6) returns a random integer from 1 to 6, inclusive. It could be 1, 2, 3, 4, 5, or 6."},{id:"ps-010",topic:"random",difficulty:"intermediate",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:"dice ← RANDOM(1, 6)",answer:"let dice = Math.floor(Math.random() * 6) + 1;",hints:["Math.random() gives 0 to 0.999...","Multiply by range, floor it, add minimum"],explanation:"Math.random() returns 0 to 0.999... Multiply by 6 to get 0 to 5.999..., floor to get 0-5, add 1 to get 1-6."},{id:"ps-011",topic:"relational",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`IF (score = 100)
{
   DISPLAY("Perfect!")
}`,answer:`if (score === 100) {
   console.log("Perfect!");
}`,hints:["Pseudocode = for comparison becomes === in JS","DISPLAY becomes console.log"],explanation:"In pseudocode, = is comparison. In JavaScript, use === for comparison (== works but === is safer)."},{id:"ps-012",topic:"relational",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`IF (age ≥ 18 AND age ≤ 65)
{
   DISPLAY("Working age")
}`,answer:`if (age >= 18 && age <= 65) {
   console.log("Working age");
}`,hints:["≥ becomes >=","AND becomes &&"],explanation:"≥ becomes >=, ≤ becomes <=, AND becomes &&. This checks if age is between 18 and 65 inclusive."},{id:"ps-013",topic:"boolean",difficulty:"intermediate",type:"trace",prompt:"What is displayed?",given:`x ← 10
y ← 5
result ← (x > y) AND (x ≠ 10)
DISPLAY(result)`,answer:"false",hints:["Evaluate each condition separately","AND requires BOTH to be true"],explanation:"(x > y) is true (10 > 5). (x ≠ 10) is false (x IS 10). true AND false = false."},{id:"ps-014",topic:"boolean",difficulty:"intermediate",type:"trace",prompt:"What is displayed?",given:`a ← true
b ← false
result ← NOT (a AND b)
DISPLAY(result)`,answer:"true",hints:["First evaluate inside parentheses","Then apply NOT"],explanation:"a AND b = true AND false = false. NOT false = true."},{id:"ps-015",topic:"selection",difficulty:"beginner",type:"trace",prompt:"What is displayed when score = 75?",given:`IF (score ≥ 60)
{
   DISPLAY("Pass")
}
ELSE
{
   DISPLAY("Fail")
}`,answer:"Pass",hints:["Check if 75 ≥ 60","If true, run the first block"],explanation:'75 ≥ 60 is true, so "Pass" is displayed.'},{id:"ps-016",topic:"selection",difficulty:"intermediate",type:"trace",prompt:"What is displayed when x = 7?",given:`IF (x > 10)
{
   DISPLAY("Large")
}
ELSE
{
   IF (x > 5)
   {
      DISPLAY("Medium")
   }
   ELSE
   {
      DISPLAY("Small")
   }
}`,answer:"Medium",hints:["First check if x > 10","If false, go to ELSE and check x > 5"],explanation:'7 > 10 is false, so we go to ELSE. Then 7 > 5 is true, so "Medium" is displayed.'},{id:"ps-017",topic:"selection",difficulty:"intermediate",type:"js-to-pseudocode",prompt:"Convert this JavaScript to pseudocode:",given:`if (temperature > 30) {
   console.log("Hot");
} else if (temperature > 20) {
   console.log("Warm");
} else {
   console.log("Cold");
}`,answer:`IF (temperature > 30)
{
   DISPLAY("Hot")
}
ELSE
{
   IF (temperature > 20)
   {
      DISPLAY("Warm")
   }
   ELSE
   {
      DISPLAY("Cold")
   }
}`,hints:["else if becomes nested IF in ELSE","No semicolons in pseudocode"],explanation:"JavaScript else if is written as nested IF statements inside ELSE blocks in AP pseudocode."},{id:"ps-018",topic:"iteration-repeat",difficulty:"beginner",type:"trace",prompt:"What is the final value of count?",given:`count ← 0
REPEAT 4 TIMES
{
   count ← count + 1
}`,answer:"4",hints:["The loop runs exactly 4 times","Each time, count increases by 1"],explanation:"Starting at 0, count increases by 1 each of the 4 iterations: 0→1→2→3→4."},{id:"ps-019",topic:"iteration-repeat",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`REPEAT 3 TIMES
{
   DISPLAY("Hello")
}`,answer:`for (let i = 0; i < 3; i++) {
   console.log("Hello");
}`,hints:["Use a for loop","Loop runs while i < 3, starting from 0"],explanation:"REPEAT n TIMES becomes for (let i = 0; i < n; i++). The loop variable i counts from 0 to n-1."},{id:"ps-020",topic:"iteration-repeat",difficulty:"intermediate",type:"trace",prompt:"What is displayed?",given:`sum ← 0
REPEAT 5 TIMES
{
   sum ← sum + 2
}
DISPLAY(sum)`,answer:"10",hints:["Track sum through each iteration","sum increases by 2 each time"],explanation:"sum: 0→2→4→6→8→10. After 5 iterations adding 2 each time, sum is 10."},{id:"ps-021",topic:"iteration-until",difficulty:"intermediate",type:"trace",prompt:"How many times does the loop run?",given:`x ← 1
REPEAT UNTIL (x > 5)
{
   x ← x + 1
}`,answer:"5",hints:["Loop stops when x > 5","Track x: starts at 1, ends > 5"],explanation:"x: 1→2→3→4→5→6. When x becomes 6, x > 5 is true and loop stops. Ran 5 times."},{id:"ps-022",topic:"iteration-until",difficulty:"intermediate",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`REPEAT UNTIL (count = 0)
{
   DISPLAY(count)
   count ← count - 1
}`,answer:`while (count !== 0) {
   console.log(count);
   count = count - 1;
}`,hints:["REPEAT UNTIL becomes while with opposite condition","UNTIL (x = 0) → while (x !== 0)"],explanation:"REPEAT UNTIL (condition) → while (NOT condition). The loop continues UNTIL condition is true, meaning it runs WHILE condition is false."},{id:"ps-023",topic:"iteration-foreach",difficulty:"beginner",type:"trace",prompt:"What is displayed?",given:`nums ← [2, 4, 6]
FOR EACH n IN nums
{
   DISPLAY(n)
}`,answer:`2
4
6`,hints:["Loop processes each item in order","Three items means three displays"],explanation:"The loop iterates through each element: first 2, then 4, then 6."},{id:"ps-024",topic:"iteration-foreach",difficulty:"intermediate",type:"trace",prompt:"What is the final value of total?",given:`scores ← [85, 90, 78, 92]
total ← 0
FOR EACH s IN scores
{
   total ← total + s
}`,answer:"345",hints:["Add each score to total","85 + 90 + 78 + 92"],explanation:"total: 0→85→175→253→345. This calculates the sum of all scores."},{id:"ps-025",topic:"lists-basics",difficulty:"beginner",type:"trace",prompt:"What is displayed? (Remember: pseudocode lists are 1-indexed)",given:`colors ← ["red", "green", "blue"]
DISPLAY(colors[2])`,answer:"green",hints:["Index 1 is the first item in pseudocode","Index 2 is the second item"],explanation:'In pseudocode, colors[1]="red", colors[2]="green", colors[3]="blue". So colors[2] is "green".'},{id:"ps-026",topic:"lists-basics",difficulty:"intermediate",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript (watch the indexing!):",given:`nums ← [10, 20, 30]
DISPLAY(nums[1])`,answer:`let nums = [10, 20, 30];
console.log(nums[0]);`,hints:["Pseudocode index 1 = JavaScript index 0","Subtract 1 from pseudocode index"],explanation:"Pseudocode is 1-indexed, JavaScript is 0-indexed. nums[1] in pseudocode (first element) is nums[0] in JavaScript."},{id:"ps-027",topic:"lists-basics",difficulty:"intermediate",type:"trace",prompt:"What is displayed?",given:`nums ← [5, 10, 15, 20]
nums[3] ← 99
DISPLAY(nums[3])`,answer:"99",hints:["We change the value at index 3","Then display that same index"],explanation:"nums[3] (which was 15) gets changed to 99, then we display nums[3] which is now 99."},{id:"ps-028",topic:"lists-operations",difficulty:"intermediate",type:"trace",prompt:"What does the list look like after this code?",given:`items ← ["a", "b", "c"]
APPEND(items, "d")
INSERT(items, 2, "x")`,answer:'["a", "x", "b", "c", "d"]',hints:["APPEND adds to end","INSERT puts item at position, shifts others right"],explanation:'After APPEND: ["a","b","c","d"]. Then INSERT at position 2: ["a","x","b","c","d"]. "x" goes in position 2, pushing everything else right.'},{id:"ps-029",topic:"lists-operations",difficulty:"intermediate",type:"trace",prompt:"What is displayed?",given:`nums ← [1, 2, 3, 4, 5]
REMOVE(nums, 2)
DISPLAY(LENGTH(nums))
DISPLAY(nums[2])`,answer:`4
3`,hints:["REMOVE deletes item at index 2","Remaining items shift down","LENGTH gives count of items"],explanation:"After REMOVE(nums, 2): [1,3,4,5]. LENGTH is 4. nums[2] is now 3 (was originally at position 3)."},{id:"ps-030",topic:"lists-operations",difficulty:"intermediate",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`APPEND(list, value)
REMOVE(list, 1)`,answer:`list.push(value);
list.splice(0, 1);`,hints:["APPEND becomes push()","REMOVE at index 1 in pseudocode = index 0 in JS","splice(index, 1) removes 1 item at index"],explanation:"APPEND→push(). For REMOVE, convert index (pseudocode 1 = JS 0) and use splice(index, 1) to remove 1 element."},{id:"ps-031",topic:"procedures",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`PROCEDURE double(n)
{
   RETURN n * 2
}`,answer:`function double(n) {
   return n * 2;
}`,hints:["PROCEDURE becomes function","RETURN becomes return"],explanation:"PROCEDURE maps to function, RETURN maps to return. The structure is very similar."},{id:"ps-032",topic:"procedures",difficulty:"intermediate",type:"trace",prompt:"What is displayed?",given:`PROCEDURE add(a, b)
{
   RETURN a + b
}

x ← add(5, 3)
y ← add(x, 2)
DISPLAY(y)`,answer:"10",hints:["First call: add(5, 3) = 8","Second call: add(8, 2) = 10"],explanation:"add(5, 3) returns 8, so x = 8. Then add(8, 2) returns 10, so y = 10."},{id:"ps-033",topic:"procedures",difficulty:"intermediate",type:"trace",prompt:"What is displayed?",given:`PROCEDURE mystery(n)
{
   IF (n < 0)
   {
      RETURN -n
   }
   RETURN n
}

DISPLAY(mystery(-5))
DISPLAY(mystery(3))`,answer:`5
3`,hints:["This procedure returns absolute value","If n is negative, return -n (positive)","If n is positive, return n"],explanation:"mystery(-5): -5 < 0 is true, so return -(-5) = 5. mystery(3): 3 < 0 is false, so return 3."},{id:"ps-034",topic:"procedures",difficulty:"advanced",type:"trace",prompt:"What is displayed?",given:`PROCEDURE sumList(nums)
{
   total ← 0
   FOR EACH n IN nums
   {
      total ← total + n
   }
   RETURN total
}

data ← [1, 2, 3, 4]
DISPLAY(sumList(data))`,answer:"10",hints:["The procedure loops through all numbers","It adds them to total","1+2+3+4 = 10"],explanation:"sumList iterates through [1,2,3,4], adding each to total: 0+1+2+3+4 = 10."},{id:"ps-035",topic:"robot",difficulty:"beginner",type:"robot-trace",prompt:"If the robot starts at position (2,2) facing right, where does it end up?",given:`MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()`,answer:"Position (4,3) facing up",gridSize:5,startPosition:{x:2,y:2,direction:"right"},hints:["Right means moving in +x direction","ROTATE_LEFT from right = facing up","Up means moving in +y direction"],explanation:"Start (2,2) facing right. Move forward twice: (3,2)→(4,2). Rotate left: now facing up. Move forward: (4,3)."},{id:"ps-036",topic:"robot",difficulty:"intermediate",type:"robot-trace",prompt:"How many squares does the robot move through (including start)?",given:`REPEAT 3 TIMES
{
   MOVE_FORWARD()
   ROTATE_RIGHT()
}`,answer:"4",startPosition:{x:1,y:1,direction:"up"},hints:["Track each MOVE_FORWARD","Start position counts as 1","Three moves total"],explanation:"Start counts as 1. Three MOVE_FORWARD commands = 3 more positions. Total: 4 squares visited."},{id:"ps-037",topic:"mixed",difficulty:"advanced",type:"trace",prompt:"What is the final value of count?",given:`list ← [3, 1, 4, 1, 5, 9, 2, 6]
count ← 0
FOR EACH num IN list
{
   IF (num > 3)
   {
      count ← count + 1
   }
}`,answer:"4",hints:["Count how many numbers are > 3","Check each: 3,1,4,1,5,9,2,6"],explanation:"Numbers > 3: 4, 5, 9, 6. That's 4 numbers."},{id:"ps-038",topic:"mixed",difficulty:"advanced",type:"trace",prompt:"What is displayed?",given:`nums ← [5, 2, 8, 1, 9]
max ← nums[1]
FOR EACH n IN nums
{
   IF (n > max)
   {
      max ← n
   }
}
DISPLAY(max)`,answer:"9",hints:["This finds the maximum value","max starts at first element (5)","Updates whenever we find something bigger"],explanation:"max starts at 5. Comparing: 5>5? no, 2>5? no, 8>5? yes→max=8, 1>8? no, 9>8? yes→max=9. Final: 9."},{id:"ps-039",topic:"mixed",difficulty:"advanced",type:"trace",prompt:"What is displayed?",given:`PROCEDURE countEvens(list)
{
   count ← 0
   FOR EACH num IN list
   {
      IF ((num MOD 2) = 0)
      {
         count ← count + 1
      }
   }
   RETURN count
}

nums ← [1, 2, 3, 4, 5, 6]
DISPLAY(countEvens(nums))`,answer:"3",hints:["MOD 2 = 0 means even","Check each number in the list","Count: 2, 4, 6 are even"],explanation:"Even numbers (divisible by 2): 2, 4, 6. That's 3 even numbers."},{id:"ps-040",topic:"mixed",difficulty:"advanced",type:"pseudocode-to-js",prompt:"Convert this complete program to JavaScript:",given:`scores ← [85, 92, 78, 90, 88]
total ← 0
FOR EACH s IN scores
{
   total ← total + s
}
average ← total / LENGTH(scores)
IF (average ≥ 80)
{
   DISPLAY("Good job!")
}
ELSE
{
   DISPLAY("Keep trying")
}`,answer:`let scores = [85, 92, 78, 90, 88];
let total = 0;
for (let s of scores) {
   total = total + s;
}
let average = total / scores.length;
if (average >= 80) {
   console.log("Good job!");
} else {
   console.log("Keep trying");
}`,hints:["Convert each construct one at a time","LENGTH(x) becomes x.length","FOR EACH becomes for...of"],explanation:"This program calculates the average of scores and displays a message based on whether it's above 80."},{id:"ps-041",topic:"assignment",difficulty:"beginner",type:"fill-blank",prompt:"Fill in the blanks to complete this pseudocode that calculates the area of a rectangle:",template:`width ← 5
height ← 3
area ← ___blank1___ * ___blank2___
DISPLAY(area)`,blankAnswers:{blank1:["width","height"],blank2:["width","height"]},hints:["Area = width × height","Fill in the variable names"],explanation:"The area of a rectangle is width multiplied by height. Either order works."},{id:"ps-042",topic:"selection",difficulty:"beginner",type:"fill-blank",prompt:"Fill in the blanks to check if a number is positive:",template:`num ← 7
___blank1___ (num ___blank2___ 0)
{
   DISPLAY("Positive")
}`,blankAnswers:{blank1:["if","IF"],blank2:[">","> 0",">0"]},hints:["Use IF to check a condition","Positive means greater than 0"],explanation:"Use IF to check the condition, and > to compare if num is greater than 0."},{id:"ps-043",topic:"iteration",difficulty:"beginner",type:"fill-blank",prompt:"Fill in the blanks to display numbers 1 to 5:",template:`i ← 1
REPEAT ___blank1___ TIMES
{
   DISPLAY(___blank2___)
   i ← i + 1
}`,blankAnswers:{blank1:["5","five"],blank2:["i"]},hints:["We want to display 5 numbers","Display the loop counter variable"],explanation:"REPEAT 5 TIMES runs the loop 5 times, and DISPLAY(i) shows the current counter."},{id:"ps-044",topic:"lists",difficulty:"intermediate",type:"fill-blank",prompt:"Fill in the blanks to add up all numbers in a list:",template:`numbers ← [10, 20, 30]
sum ← ___blank1___
FOR EACH num IN ___blank2___
{
   sum ← sum + ___blank3___
}
DISPLAY(sum)`,blankAnswers:{blank1:["0","0.0"],blank2:["numbers"],blank3:["num"]},hints:["Initialize sum to zero","Loop through the list variable","Add each element to sum"],explanation:"Start sum at 0, loop through numbers, and add each num to sum."},{id:"ps-045",topic:"procedures",difficulty:"intermediate",type:"fill-blank",prompt:"Fill in the blanks to complete a procedure that doubles a number:",template:`___blank1___ double(x)
{
   result ← x ___blank2___ 2
   ___blank3___ result
}

answer ← double(5)
DISPLAY(answer)`,blankAnswers:{blank1:["procedure","PROCEDURE"],blank2:["*","×"],blank3:["return","RETURN"]},hints:["PROCEDURE defines a function","Multiply by 2 to double","RETURN sends back the result"],explanation:"PROCEDURE defines the function, * multiplies, and RETURN sends back the value."},{id:"ps-046",topic:"boolean",difficulty:"intermediate",type:"fill-blank",prompt:"Fill in the blanks to check if a person can vote (18+ and citizen):",template:`age ← 21
isCitizen ← true

IF (age ≥ 18 ___blank1___ isCitizen)
{
   DISPLAY("Can vote")
}`,blankAnswers:{blank1:["and","AND","&&"]},hints:["Both conditions must be true","Use a boolean operator"],explanation:"AND requires both conditions to be true - must be 18+ AND a citizen to vote."},{id:"ps-047",topic:"random",difficulty:"intermediate",type:"fill-blank",prompt:"Fill in the blanks to simulate rolling a 6-sided die:",template:`roll ← ___blank1___(___blank2___, ___blank3___)
DISPLAY(roll)`,blankAnswers:{blank1:["random","RANDOM"],blank2:["1"],blank3:["6"]},hints:["RANDOM generates random numbers","A die shows 1 through 6"],explanation:"RANDOM(1, 6) generates a random integer from 1 to 6 inclusive."},{id:"ps-048",topic:"lists",difficulty:"advanced",type:"fill-blank",prompt:"Fill in the blanks to find the maximum value in a list:",template:`nums ← [3, 7, 2, 9, 4]
max ← nums[___blank1___]

FOR EACH n IN nums
{
   IF (n ___blank2___ max)
   {
      max ← ___blank3___
   }
}
DISPLAY(max)`,blankAnswers:{blank1:["1","0"],blank2:[">","> max"],blank3:["n"]},hints:["Start with the first element (index 1 in pseudocode)","Check if current is greater than max","Update max to the new larger value"],explanation:"Initialize max to first element, then compare each n. If n > max, update max to n."}],wl=[{id:"oval",name:"Oval / Terminator",purpose:"Start or End of the program/algorithm",description:"Every flowchart must have a Start and End. The oval shape indicates where the flow begins and where it terminates.",examples:["Start","End","Begin","Stop"],color:"#10b981",shape:"ellipse"},{id:"rectangle",name:"Rectangle / Process",purpose:"An action, calculation, or process step",description:'Represents any processing operation: assignments, calculations, or actions. This is where the actual "work" happens.',examples:["total ← price + tax","count ← count + 1","Send email","Calculate average"],color:"#3b82f6",shape:"rectangle"},{id:"diamond",name:"Diamond / Decision",purpose:"A yes/no question or condition check",description:"Used for branching logic (if/else). The condition is written inside, and two arrows come out: one for Yes/True and one for No/False.",examples:["Is x > 10?","age ≥ 18?","Found?","Done?"],color:"#f59e0b",shape:"diamond"},{id:"parallelogram",name:"Parallelogram / Input-Output",purpose:"Getting input or showing output",description:"Represents data entering the system (input from user) or leaving it (display/print). Think DISPLAY and INPUT operations.",examples:["Get user name",'Display "Hello"',"INPUT age","Print result"],color:"#8b5cf6",shape:"parallelogram"},{id:"arrow",name:"Arrow / Flow Line",purpose:"Shows direction of flow",description:"Connects shapes and shows the order of operations. Flow typically goes top-to-bottom and left-to-right. Arrows point to the next step.",examples:["→","↓","←","↑"],color:"#6b7280",shape:"arrow"}],li=[{id:"fc-001",title:"Simple Decision Trace",difficulty:"beginner",type:"interpret",description:"Follow the flowchart to determine the output.",question:"What will be displayed if x = 7?",flowchartRef:"fc-ex-003",answer:"Positive",hints:["Start at the top and follow the arrows","At the diamond, check: is 7 > 0?","Follow the path that matches the answer"],explanation:'Starting at Start, we reach the decision "x > 0?". Since 7 > 0 is true (Yes), we follow the Yes path to display "Positive".'},{id:"fc-002",title:"Pass/Fail Check",difficulty:"beginner",type:"interpret",description:"Determine the output for a given input.",question:"What will be displayed if score = 55?",flowchartRef:"fc-ex-004",answer:"Fail",hints:["Input score = 55","Check the condition: is 55 ≥ 60?","Follow the appropriate path"],explanation:`55 is not ≥ 60 (it's less than 60), so the condition is false (No). Following the No path leads to displaying "Fail".`},{id:"fc-003",title:"Exact Boundary",difficulty:"beginner",type:"interpret",description:"Test a boundary condition.",question:"What will be displayed if score = 60?",flowchartRef:"fc-ex-004",answer:"Pass",hints:["60 is exactly the passing score","Is 60 ≥ 60?",'The ≥ means "greater than OR equal to"'],explanation:'60 is equal to 60, and since the condition uses ≥ (greater than or equal), 60 ≥ 60 is true. Output: "Pass".'},{id:"fc-004",title:"Loop Trace",difficulty:"intermediate",type:"interpret",description:"Trace through a counting loop.",question:"What numbers will be displayed by this flowchart?",flowchartRef:"fc-ex-005",answer:"1, 2, 3, 4, 5",hints:["count starts at 1","Loop continues while count is NOT > 5","After displaying, count increases by 1"],explanation:"count: 1 (display 1, count=2), 2 (display 2, count=3), 3 (display 3, count=4), 4 (display 4, count=5), 5 (display 5, count=6). When count=6, 6>5 is true, so loop exits."},{id:"fc-005",title:"Sum Calculation",difficulty:"intermediate",type:"interpret",description:"Calculate the result of a summation loop.",question:"If n = 4, what is the final value of sum displayed?",flowchartRef:"fc-ex-006",answer:"10",hints:["sum starts at 0, i starts at 1","Add i to sum, then increment i","1 + 2 + 3 + 4 = ?"],explanation:"Loop iterations: i=1: sum=0+1=1. i=2: sum=1+2=3. i=3: sum=3+3=6. i=4: sum=6+4=10. When i=5, 5>4 is true, exit and display 10."},{id:"fc-006",title:"Maximum of Three",difficulty:"intermediate",type:"interpret",description:"Determine which variable holds the maximum.",question:"If a=5, b=8, c=3, what path does the flowchart take and what is displayed?",flowchartRef:"fc-ex-007",answer:"8 (max ← b)",hints:["First check: is a ≥ b AND a ≥ c?","If not, check: is b ≥ c?","Follow the true condition"],explanation:"a=5 ≥ b=8? No, so first condition is false. Go to second decision: b=8 ≥ c=3? Yes, so max ← b = 8."},{id:"fc-007",title:"Identify Symbols",difficulty:"beginner",type:"symbol-match",description:"Match each flowchart symbol to its purpose.",question:"Match each shape to what it represents:",items:[{shape:"oval",options:["Start/End","Decision","Process","Input/Output"]},{shape:"diamond",options:["Start/End","Decision","Process","Input/Output"]},{shape:"rectangle",options:["Start/End","Decision","Process","Input/Output"]},{shape:"parallelogram",options:["Start/End","Decision","Process","Input/Output"]}],answer:{oval:"Start/End",diamond:"Decision",rectangle:"Process",parallelogram:"Input/Output"},hints:["Ovals are at the beginning and end","Diamonds ask yes/no questions","Rectangles do work/calculations"],explanation:"Oval = Start/End (terminators), Diamond = Decision (branching), Rectangle = Process (actions/calculations), Parallelogram = Input/Output (data flow)."},{id:"fc-008",title:"What Shape?",difficulty:"beginner",type:"multiple-choice",description:"Choose the correct shape for a given action.",question:'Which shape would you use for the statement: "Display the result"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Parallelogram",hints:["Display is a type of output","Parallelograms handle data entering or leaving the system"],explanation:"DISPLAY is an output operation, which is represented by a parallelogram (Input/Output symbol)."},{id:"fc-009",title:"Decision Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a condition.",question:'Which shape represents the statement: "IF score >= 60"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Diamond",hints:["IF statements check a condition","Conditions result in yes/no answers"],explanation:"IF statements are decisions that branch the flow based on a condition. Diamonds represent decisions with Yes/No paths."},{id:"fc-010",title:"Process Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a calculation.",question:'Which shape would you use for: "total ← total + price"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Rectangle",hints:["This is a calculation/assignment","No input, output, or decision happening"],explanation:"Assignment and calculations are processes represented by rectangles. This adds price to total - a processing step."},{id:"fc-011",title:"Build: Even or Odd",difficulty:"beginner",type:"build",description:"Create a flowchart to check if a number is even or odd.",requirements:["Start with a Start oval","Get a number from the user (Input)","Check if the number MOD 2 equals 0",'Display "Even" if yes, "Odd" if no',"End with an End oval"],pseudocode:`num ← INPUT()
IF ((num MOD 2) = 0)
{
   DISPLAY("Even")
}
ELSE
{
   DISPLAY("Odd")
}`,expectedNodes:["start","input","decision","even-output","odd-output","end"],hints:["You need 6 shapes total","The decision checks (num MOD 2) = 0","Both output paths must lead to End"],sampleSolution:{nodes:[{id:"start",type:"oval",position:{x:200,y:0},data:{label:"Start"}},{id:"input",type:"parallelogram",position:{x:155,y:70},data:{label:"Input num"}},{id:"decision",type:"diamond",position:{x:165,y:150},data:{label:"(num MOD 2) = 0?"}},{id:"even",type:"parallelogram",position:{x:50,y:250},data:{label:'Display "Even"'}},{id:"odd",type:"parallelogram",position:{x:280,y:250},data:{label:'Display "Odd"'}},{id:"end",type:"oval",position:{x:200,y:350},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"input"},{id:"e2",source:"input",target:"decision"},{id:"e3",source:"decision",target:"even",label:"Yes"},{id:"e4",source:"decision",target:"odd",label:"No"},{id:"e5",source:"even",target:"end"},{id:"e6",source:"odd",target:"end"}]}},{id:"fc-012",title:"Build: Countdown",difficulty:"intermediate",type:"build",description:"Create a flowchart for a countdown from 5 to 1.",requirements:["Start with count = 5","Loop while count > 0","Display count","Decrease count by 1","End when count reaches 0"],pseudocode:`count ← 5
REPEAT UNTIL (count = 0)
{
   DISPLAY(count)
   count ← count - 1
}`,expectedNodes:["start","init","decision","output","decrement","end"],hints:["Initialize count before the loop","The decision checks count > 0 (or count = 0)","Don't forget the loop back arrow"],sampleSolution:{nodes:[{id:"start",type:"oval",position:{x:200,y:0},data:{label:"Start"}},{id:"init",type:"rectangle",position:{x:150,y:70},data:{label:"count ← 5"}},{id:"decision",type:"diamond",position:{x:175,y:150},data:{label:"count = 0?"}},{id:"output",type:"parallelogram",position:{x:50,y:250},data:{label:"Display count"}},{id:"decrement",type:"rectangle",position:{x:50,y:330},data:{label:"count ← count - 1"}},{id:"end",type:"oval",position:{x:330,y:180},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"init"},{id:"e2",source:"init",target:"decision"},{id:"e3",source:"decision",target:"output",label:"No"},{id:"e4",source:"decision",target:"end",label:"Yes"},{id:"e5",source:"output",target:"decrement"},{id:"e6",source:"decrement",target:"decision"}]}},{id:"fc-013",title:"Build: Grade Calculator",difficulty:"intermediate",type:"build",description:"Create a flowchart that assigns letter grades based on score.",requirements:["Get score from user",'If score ≥ 90, grade is "A"','Else if score ≥ 80, grade is "B"','Else if score ≥ 70, grade is "C"','Else grade is "F"',"Display the grade"],pseudocode:`score ← INPUT()
IF (score ≥ 90)
{
   grade ← "A"
}
ELSE
{
   IF (score ≥ 80)
   {
      grade ← "B"
   }
   ELSE
   {
      IF (score ≥ 70)
      {
         grade ← "C"
      }
      ELSE
      {
         grade ← "F"
      }
   }
}
DISPLAY(grade)`,hints:["You'll need multiple diamond shapes","Each decision leads to either an assignment or another decision","All paths must eventually lead to the display and end"]},{id:"fc-014",title:"Find the Error",difficulty:"intermediate",type:"fix",description:"This flowchart has an error. Can you find it?",question:"What is wrong with this flowchart?",flowchartData:{nodes:[{id:"start",type:"oval",position:{x:200,y:0},data:{label:"Start"}},{id:"init",type:"rectangle",position:{x:150,y:70},data:{label:"count ← 1"}},{id:"decision",type:"diamond",position:{x:175,y:150},data:{label:"count ≤ 5?"}},{id:"output",type:"parallelogram",position:{x:50,y:250},data:{label:"Display count"}},{id:"end",type:"oval",position:{x:330,y:180},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"init"},{id:"e2",source:"init",target:"decision"},{id:"e3",source:"decision",target:"output",label:"Yes"},{id:"e4",source:"decision",target:"end",label:"No"},{id:"e5",source:"output",target:"decision"}]},answer:"Missing increment step - count never changes, causing infinite loop",options:["Missing Start","Missing increment (count ← count + 1)","Wrong condition","Missing End"],hints:["What changes count?","Will count ever be > 5?","Think about what happens in the loop"],explanation:'The flowchart displays count and loops back to the decision, but count never increases. Without "count ← count + 1", count stays 1 forever - an infinite loop!'},{id:"fc-015",title:"Dead End",difficulty:"intermediate",type:"fix",description:"Find the structural error in this flowchart.",question:"What structural problem exists?",flowchartData:{nodes:[{id:"start",type:"oval",position:{x:200,y:0},data:{label:"Start"}},{id:"decision",type:"diamond",position:{x:175,y:80},data:{label:"x > 0?"}},{id:"positive",type:"parallelogram",position:{x:50,y:180},data:{label:'Display "Positive"'}},{id:"negative",type:"parallelogram",position:{x:280,y:180},data:{label:'Display "Negative"'}},{id:"end",type:"oval",position:{x:50,y:280},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"decision"},{id:"e2",source:"decision",target:"positive",label:"Yes"},{id:"e3",source:"decision",target:"negative",label:"No"},{id:"e4",source:"positive",target:"end"}]},answer:`The "Negative" path doesn't connect to End - it's a dead end`,options:["Missing Start","Missing decision labels","Negative path doesn't reach End","Missing loop"],hints:["Follow both paths from the decision","Do both paths reach the End?",'What happens after displaying "Negative"?'],explanation:'The "Positive" path connects to End, but the "Negative" path just stops after displaying. Every path in a flowchart must eventually reach an End terminator.'},{id:"fc-016",title:"Convert to Pseudocode",difficulty:"intermediate",type:"flowchart-to-code",description:"Write the pseudocode that matches this flowchart.",flowchartRef:"fc-ex-003",answer:`IF (x > 0)
{
   DISPLAY("Positive")
}
ELSE
{
   DISPLAY("Not positive")
}`,hints:["Start with the decision","Diamond = IF statement","Two outputs = IF-ELSE"],explanation:'The diamond with "x > 0?" becomes an IF condition. The two paths become the IF block (Yes) and ELSE block (No).'},{id:"fc-017",title:"Loop to Pseudocode",difficulty:"intermediate",type:"flowchart-to-code",description:"Write the pseudocode for this loop flowchart.",flowchartRef:"fc-ex-005",answer:`count ← 1
REPEAT UNTIL (count > 5)
{
   DISPLAY(count)
   count ← count + 1
}`,hints:["Initialize before the loop","Decision that loops back = REPEAT UNTIL","Code inside loop is the body"],explanation:'The arrow looping back indicates repetition. The decision "count > 5?" with a loop-back path becomes REPEAT UNTIL (count > 5).'},{id:"fc-018",title:"Loop Count",difficulty:"intermediate",type:"multiple-choice",description:"Analyze loop behavior.",question:'In a flowchart, a loop has initialization "i ← 1", condition "i > 10?", and increment "i ← i + 2". How many times does the loop body execute?',options:["5 times","6 times","10 times","11 times"],answer:"5 times",hints:["List out the values of i","i starts at 1, increases by 2 each time","Loop continues while i ≤ 10"],explanation:"i values: 1, 3, 5, 7, 9 (all ≤ 10, so loop runs). When i becomes 11, 11 > 10 is true and loop exits. Ran 5 times."},{id:"fc-019",title:"Flowchart Purpose",difficulty:"beginner",type:"multiple-choice",description:"Understand what flowcharts are for.",question:"What is the main purpose of a flowchart?",options:["To write executable code","To visually represent the logic and flow of an algorithm","To store data in a program","To test code for bugs"],answer:"To visually represent the logic and flow of an algorithm",hints:["Flowcharts are visual tools","They show steps and decisions","They're used before or alongside coding"],explanation:"Flowcharts provide a visual representation of how an algorithm works, showing the sequence of steps, decisions, and loops. They help plan and communicate logic before writing actual code."},{id:"fc-020",title:"Arrow Direction",difficulty:"beginner",type:"multiple-choice",description:"Understand flow direction.",question:"In a standard flowchart, what is the typical direction of flow?",options:["Right to left","Bottom to top","Top to bottom, left to right","Randomly in any direction"],answer:"Top to bottom, left to right",hints:["Think about how you read text",'Where is "Start" usually placed?','Where is "End" usually placed?'],explanation:"Flowcharts follow a top-to-bottom, left-to-right flow by convention. Start is at the top, End is at the bottom, and operations flow downward. This makes flowcharts easy to read like text."}],Ey=({studentName:e,totalPoints:t,assignments:n,completedChallenges:i,completedScenarios:o,completedExercises:a,completedPseudocode:l=[],completedFlowcharts:u=[],onSelectCategory:h,onSelectNetworkMonitor:g,onSelectWeek:P,onSelectAPCSP:E})=>{const S=n.some(p=>p.type==="cyber-range"),T=n.some(p=>p.type==="arrays-loops"),N=n.some(p=>p.type==="ap-csp"),I=p=>{if(p==="network-monitor")return{completed:o.length,total:vt.length,percentage:vt.length>0?o.length/vt.length*100:0};const y=yi[p]||[],v=y.filter(k=>i.includes(k.id)).length;return{completed:v,total:y.length,percentage:y.length>0?v/y.length*100:0}},L=p=>{const y=Ny(p),v=y.filter(k=>a.includes(k.id)).length;return{completed:v,total:y.length,percentage:y.length>0?v/y.length*100:0}},m=p=>p==="pseudocode"?{completed:l.length,total:ln.length,percentage:ln.length>0?l.length/ln.length*100:0}:{completed:u.length,total:li.length,percentage:li.length>0?u.length/li.length*100:0},w=i.length+o.length,j=a.length,R=l.length+u.length,M=[{id:"cryptography",name:"Cryptography",icon:"[ CRYPTO ]",description:"Encryption, ciphers, and secure communication"},{id:"network",name:"Network Security",icon:"[ NETWORK ]",description:"Network protocols, ports, and traffic analysis"},{id:"password",name:"Password Security",icon:"[ PASSWD ]",description:"Password strength and authentication"},{id:"web",name:"Web Security",icon:"[ WEB ]",description:"Web vulnerabilities and secure coding"},{id:"social",name:"Social Engineering",icon:"[ SOCIAL ]",description:"Manipulation tactics and security awareness"},{id:"network-monitor",name:"Network Monitor",icon:"[ MONITOR ]",description:"Real-time traffic analysis",isScenario:!0}],F=[{id:"pseudocode",name:"Pseudocode",icon:"[ CODE ]",description:"Translate between AP CSP pseudocode and JavaScript"},{id:"flowcharts",name:"Flowcharts",icon:"[ FLOW ]",description:"Read, interpret, and build flowcharts"}],C=S||T||N;return r.jsxs("div",{className:"unified-dashboard",children:[r.jsxs("div",{className:"welcome-section",children:[r.jsxs("h1",{children:["Welcome, ",e,"!"]}),r.jsx("p",{children:"Complete your assigned work below. Track your progress across both cybersecurity and programming content."})]}),r.jsxs("div",{className:"stats",children:[r.jsxs("div",{className:"stat-card",children:[r.jsx("span",{className:"stat-value",children:t}),r.jsx("span",{className:"stat-label",children:"Total Points"})]}),r.jsxs("div",{className:"stat-card cyber",children:[r.jsx("span",{className:"stat-value",children:w}),r.jsx("span",{className:"stat-label",children:"Cyber Challenges"})]}),r.jsxs("div",{className:"stat-card programming",children:[r.jsx("span",{className:"stat-value",children:j}),r.jsx("span",{className:"stat-label",children:"Programming Exercises"})]}),r.jsxs("div",{className:"stat-card apcsp",children:[r.jsx("span",{className:"stat-value",children:R}),r.jsx("span",{className:"stat-label",children:"AP CSP Exercises"})]})]}),C?r.jsxs(r.Fragment,{children:[S&&r.jsxs("section",{className:"content-section cyber-section",children:[r.jsxs("h2",{className:"section-title cyber",children:[r.jsx("span",{className:"section-icon",children:de["cyber-range"].icon}),"Cybersecurity Challenges"]}),r.jsx("div",{className:"categories",children:M.map(p=>{const y=I(p.id);return r.jsxs("div",{className:"category-card cyber",onClick:()=>p.isScenario?g():h(p.id),children:[r.jsx("div",{className:"category-icon",children:p.icon}),r.jsx("h3",{children:p.name}),r.jsx("p",{className:"category-description",children:p.description}),r.jsxs("p",{className:"category-progress-text",children:[y.completed," / ",y.total," completed"]}),r.jsx("div",{className:"category-progress",children:r.jsx("div",{className:"category-progress-bar cyber",style:{width:`${y.percentage}%`}})})]},p.id)})})]}),T&&r.jsxs("section",{className:"content-section programming-section",children:[r.jsxs("h2",{className:"section-title programming",children:[r.jsx("span",{className:"section-icon",children:de["arrays-loops"].icon}),"Programming Exercises"]}),r.jsx("div",{className:"categories",children:Object.entries(wc).map(([p,y])=>{const v=L(p),k=p.replace("week","");return r.jsxs("div",{className:"category-card programming",onClick:()=>P(p),children:[r.jsxs("div",{className:"category-icon",children:["[ WEEK ",k," ]"]}),r.jsx("h3",{children:y.title}),r.jsx("p",{className:"category-description",children:y.bigIdea}),r.jsxs("p",{className:"category-progress-text",children:[v.completed," / ",v.total," completed"]}),r.jsx("div",{className:"category-progress",children:r.jsx("div",{className:"category-progress-bar programming",style:{width:`${v.percentage}%`}})})]},p)})})]}),N&&r.jsxs("section",{className:"content-section apcsp-section",children:[r.jsxs("h2",{className:"section-title apcsp",children:[r.jsx("span",{className:"section-icon",children:de["ap-csp"].icon}),"AP CSP Exam Prep"]}),r.jsx("div",{className:"categories",children:F.map(p=>{const y=m(p.id);return r.jsxs("div",{className:"category-card apcsp",onClick:()=>E(p.id),children:[r.jsx("div",{className:"category-icon",children:p.icon}),r.jsx("h3",{children:p.name}),r.jsx("p",{className:"category-description",children:p.description}),r.jsxs("p",{className:"category-progress-text",children:[y.completed," / ",y.total," completed"]}),r.jsx("div",{className:"category-progress",children:r.jsx("div",{className:"category-progress-bar apcsp",style:{width:`${y.percentage}%`}})})]},p.id)})})]})]}):r.jsxs("div",{className:"no-assignments",children:[r.jsx("div",{className:"no-assignments-icon",children:"[ WAITING ]"}),r.jsx("h2",{children:"No Assignments Yet"}),r.jsx("p",{children:"Your teacher hasn't assigned any content yet. Check back soon!"})]}),r.jsxs("div",{className:"learning-objectives",children:[r.jsx("h3",{children:"About This Platform"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Complete assigned challenges and exercises at your own pace"}),r.jsx("li",{children:"Earn points by completing each activity"}),r.jsx("li",{children:"Your progress is automatically saved"}),r.jsx("li",{children:"Access vocabulary terms for help with key concepts"})]})]})]})},Py=({category:e,completedChallenges:t,onSelectChallenge:n})=>{const i={cryptography:"Cryptography",network:"Network Security",password:"Password Security",web:"Web Security",social:"Social Engineering"},o=yi[e]||[];return r.jsxs("div",{children:[r.jsxs("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:[i[e]," Challenges"]}),r.jsxs("div",{className:"learning-objectives",children:[r.jsx("h3",{children:"Learning Objectives"}),r.jsx("ul",{children:(Cy[e]||[]).map((a,l)=>r.jsx("li",{children:a},l))})]}),r.jsx("div",{className:"challenge-list",children:o.map(a=>{const l=t.includes(a.id);return r.jsxs("div",{className:`challenge-item ${l?"completed":""}`,onClick:()=>n(a.id),children:[r.jsxs("div",{className:"challenge-info",children:[r.jsx("h3",{children:a.title}),r.jsxs("p",{style:{color:"#b0b0b0",margin:"0.5rem 0"},children:[a.description.substring(0,120),"..."]}),r.jsxs("div",{className:"challenge-meta",children:[r.jsx("span",{className:`difficulty ${a.difficulty}`,children:a.difficulty}),r.jsxs("span",{className:"points",children:[a.points," points"]})]})]}),r.jsx("div",{className:"challenge-status",children:l?"✅":"🔒"})]},a.id)})})]})},Ay=({challengeId:e,onComplete:t,onBack:n,isCompleted:i})=>{const[o,a]=_.useState(""),[l,u]=_.useState(!1),[h,g]=_.useState(null),[P,E]=_.useState(i),[S,T]=_.useState(null),N=Sy(e);if(!N)return r.jsx("div",{children:"Challenge not found"});const I=()=>{var R,M;const m=o.trim().toUpperCase();[(R=N.answer)==null?void 0:R.toUpperCase(),(M=N.flag)==null?void 0:M.toUpperCase()].filter(Boolean).some(F=>m===F||m.includes(F))?(g({type:"success",message:"Correct! Well done!"}),E(!0),t(e,N.points)):g({type:"error",message:"Incorrect. Try again or check the hints!"})},L=m=>{T(S===m?null:m)};return r.jsxs("div",{className:"challenge-detail",children:[r.jsxs("div",{className:"challenge-header",children:[r.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:r.jsxs("div",{children:[r.jsx("h2",{children:N.title}),r.jsxs("div",{className:"challenge-meta",style:{marginTop:"1rem"},children:[r.jsx("span",{className:`difficulty ${N.difficulty}`,children:N.difficulty}),r.jsxs("span",{className:"points",children:[N.points," points"]}),i&&r.jsx("span",{style:{color:"#4caf50",fontWeight:"bold"},children:"✅ Completed"})]})]})}),r.jsxs("div",{className:"learning-objective",children:[r.jsx("strong",{children:"Learning Objective:"})," ",N.learningObjective]}),r.jsx("p",{style:{marginTop:"1rem",lineHeight:"1.6"},children:N.description})]}),N.vocabularyTerms&&N.vocabularyTerms.length>0&&r.jsxs("div",{className:"vocabulary-section",children:[r.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Key Vocabulary"}),r.jsx("div",{className:"vocabulary-tags",children:N.vocabularyTerms.map(m=>{const w=Zi[m];return w?r.jsx("div",{className:"vocab-tag",onClick:()=>L(m),style:{borderColor:S===m?"#00ff88":"transparent"},children:w.term},m):null})}),S&&Zi[S]&&r.jsxs("div",{style:{background:"rgba(0, 255, 136, 0.1)",padding:"1rem",borderRadius:"5px",marginTop:"1rem",borderLeft:"4px solid #00ff88"},children:[r.jsx("strong",{style:{color:"#00ff88"},children:Zi[S].term}),r.jsx("p",{style:{marginTop:"0.5rem"},children:Zi[S].definition})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Challenge"}),r.jsx("div",{className:"challenge-prompt",children:N.prompt})]}),N.hints&&N.hints.length>0&&r.jsxs("div",{className:"hints-section",children:[r.jsx("button",{className:"hints-toggle",onClick:()=>u(!l),children:l?"🔽 Hide Hints":"💡 Show Hints"}),l&&r.jsx("ul",{className:"hints-list",children:N.hints.map((m,w)=>r.jsxs("li",{className:"hint-item",children:["Hint ",w+1,": ",m]},w))})]}),!i&&r.jsxs("div",{className:"answer-section",children:[r.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Submit Your Answer"}),r.jsx("input",{type:"text",className:"answer-input",placeholder:"Enter your answer or flag here...",value:o,onChange:m=>a(m.target.value),onKeyPress:m=>m.key==="Enter"&&I()}),r.jsx("button",{className:"submit-btn",onClick:I,disabled:!o.trim(),children:"Submit Answer"})]}),h&&r.jsx("div",{className:`feedback ${h.type}`,children:h.message}),P&&N.explanation&&r.jsxs("div",{className:"explanation",children:[r.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Explanation"}),r.jsx("p",{children:N.explanation})]}),r.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Challenges"})]})},Iy=()=>{const[e,t]=_.useState("all"),n=["all","Cryptography","Network Security","Password Security","Web Security","Social Engineering","General"],i=Object.values(Zi).filter(o=>e==="all"?!0:o.category===e);return r.jsxs("div",{className:"vocabulary-page",children:[r.jsx("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Cybersecurity Vocabulary"}),r.jsx("p",{style:{marginBottom:"2rem",color:"#b0b0b0"},children:"Build your cybersecurity knowledge by learning these key terms and concepts."}),r.jsx("div",{className:"vocab-categories",children:n.map(o=>r.jsx("button",{className:`vocab-category-btn ${e===o?"active":""}`,onClick:()=>t(o),children:o==="all"?"All Terms":o},o))}),r.jsxs("div",{style:{marginTop:"1rem",color:"#b0b0b0"},children:["Showing ",i.length," term",i.length!==1?"s":""]}),r.jsx("div",{className:"vocab-list",children:i.map((o,a)=>r.jsxs("div",{className:"vocab-card",children:[r.jsx("span",{className:"vocab-category",children:o.category}),r.jsx("h3",{children:o.term}),r.jsx("p",{style:{color:"#e0e0e0",marginTop:"0.5rem"},children:o.definition})]},a))}),i.length===0&&r.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"#b0b0b0"},children:"No vocabulary terms found for this category."})]})},of={TCP:{name:"TCP",color:"#4fc3f7",port:null},UDP:{name:"UDP",color:"#81c784",port:null},HTTP:{name:"HTTP",color:"#64b5f6",port:80},HTTPS:{name:"HTTPS",color:"#7986cb",port:443},SSH:{name:"SSH",color:"#ffb74d",port:22},DNS:{name:"DNS",color:"#ba68c8",port:53},FTP:{name:"FTP",color:"#f06292",port:21},SMTP:{name:"SMTP",color:"#4db6ac",port:25},ICMP:{name:"ICMP",color:"#90a4ae",port:null}},bt={SYN:"SYN",ACK:"ACK",PSH:"PSH","SYN-ACK":"SYN-ACK"},Sd=[{prefix:"192.168.1.",range:[1,254]},{prefix:"10.0.0.",range:[1,254]},{prefix:"172.16.0.",range:[1,254]}],Cd=["203.0.113.","198.51.100.","185.220.101.","45.33.32.","104.21.35.","8.8.8."],jd=[80,443,53,22,21,25,3389,8080,3306,5432],Zs={normal:["GET /index.html HTTP/1.1","GET /api/users HTTP/1.1","POST /api/login HTTP/1.1","GET /images/logo.png HTTP/1.1","GET /css/styles.css HTTP/1.1","GET /js/app.js HTTP/1.1","GET /api/products HTTP/1.1","POST /api/cart HTTP/1.1","GET /favicon.ico HTTP/1.1","GET /api/status HTTP/1.1"],sqlInjection:["GET /api/users?id=1' OR '1'='1 HTTP/1.1","POST /login?user=admin'-- HTTP/1.1","GET /search?q='; DROP TABLE users;-- HTTP/1.1","GET /api/product?id=1 UNION SELECT * FROM passwords HTTP/1.1","POST /api/auth?username=admin' OR 1=1-- HTTP/1.1","GET /page?id=1; SELECT * FROM users HTTP/1.1","GET /api/data?filter=' OR ''=' HTTP/1.1"]},eo={normal:["A google.com","A microsoft.com","A github.com","AAAA cloudflare.com","MX company.com","A cdn.example.com","A api.service.com","A www.example.org"],tunneling:["TXT aGVsbG8gd29ybGQ.evil.com","TXT ZGF0YWV4ZmlsdHJhdGlvbg.malware.net","TXT c2VjcmV0LWRhdGE.suspicious.io","A cmd-exec-001.c2server.com","TXT YmFzZTY0ZW5jb2RlZA.tunnel.net"]},bd={normal:["SSH-2.0-OpenSSH_8.4 connection established","Key exchange: ECDH SHA256","User authentication successful","Session opened for user admin"]},Td={tcp:{min:40,max:1500},udp:{min:28,max:65535},http:{min:200,max:8e3},dns:{min:28,max:512},ssh:{min:40,max:2e3},icmp:{min:28,max:1500}},ki=(e={})=>({id:Math.random().toString(36).substr(2,9),timestamp:new Date().toISOString(),sourceIP:"0.0.0.0",destIP:"0.0.0.0",sourcePort:0,destPort:0,protocol:"TCP",length:0,flags:"",info:"",payload:"",isMalicious:!1,attackType:null,flaggedByUser:!1,...e}),kl=()=>{const e=Sd[Math.floor(Math.random()*Sd.length)],t=Math.floor(Math.random()*(e.range[1]-e.range[0]))+e.range[0];return e.prefix+t},Ry=()=>{const e=Cd[Math.floor(Math.random()*Cd.length)],t=Math.floor(Math.random()*254)+1;return e+t},mt=(e=!0)=>e?jd[Math.floor(Math.random()*jd.length)]:Math.floor(Math.random()*65535)+1,_r=(e="tcp")=>{const t=Td[e.toLowerCase()]||Td.tcp;return Math.floor(Math.random()*(t.max-t.min))+t.min};let Nd=0;const Si=()=>(Nd++,`pkt-${Date.now()}-${Nd}`),Dy=(e=["HTTP","HTTPS","DNS","TCP"])=>{const t=e[Math.floor(Math.random()*e.length)],n=kl(),i=Math.random()>.3?Ry():kl();let o,a,l,u;switch(t){case"HTTP":o=80,a=mt(!1),l=Zs.normal[Math.floor(Math.random()*Zs.normal.length)],u=bt.ACK;break;case"HTTPS":o=443,a=mt(!1),l="TLS Application Data",u=bt.ACK;break;case"DNS":o=53,a=mt(!1),l=eo.normal[Math.floor(Math.random()*eo.normal.length)],u="";break;case"SSH":o=22,a=mt(!1),l=bd.normal[Math.floor(Math.random()*bd.normal.length)],u=bt.ACK;break;default:o=mt(!0),a=mt(!1),l="TCP segment",u=[bt.ACK,bt.PSH,bt["SYN-ACK"]][Math.floor(Math.random()*3)]}return ki({id:Si(),timestamp:new Date().toISOString(),sourceIP:n,destIP:i,sourcePort:a,destPort:o,protocol:t,length:_r(t.toLowerCase()),flags:u,info:l,payload:"",isMalicious:!1,attackType:null})},_y=(e,t,n)=>ki({id:Si(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:mt(!1),destPort:n,protocol:"TCP",length:_r("tcp"),flags:bt.SYN,info:`SYN scan to port ${n}`,payload:"",isMalicious:!0,attackType:ie.PORT_SCAN}),Ly=(e,t,n)=>{const i=[`Authentication failed for ${n}`,`Invalid password for ${n}`,`Failed password for ${n} from ${e}`],o=i[Math.floor(Math.random()*i.length)];return ki({id:Si(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:mt(!1),destPort:22,protocol:"SSH",length:_r("ssh"),flags:bt.ACK,info:o,payload:`SSH-2.0-OpenSSH_7.9 [AUTH FAIL: ${n}]`,isMalicious:!0,attackType:ie.BRUTE_FORCE_SSH})},Oy=(e,t)=>{const n=Zs.sqlInjection[Math.floor(Math.random()*Zs.sqlInjection.length)];return ki({id:Si(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:mt(!1),destPort:80,protocol:"HTTP",length:_r("http"),flags:bt.PSH,info:n,payload:n,isMalicious:!0,attackType:ie.SQL_INJECTION})},My=(e,t,n=5e3,i=15e3)=>{const o=Math.floor(Math.random()*(i-n))+n;return ki({id:Si(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:mt(!1),destPort:443,protocol:"HTTPS",length:o,flags:bt.PSH,info:`Large outbound transfer (${Math.round(o/1024)}KB)`,payload:`[Encrypted data: ${o} bytes]`,isMalicious:!0,attackType:ie.DATA_EXFILTRATION})},Fy=(e,t)=>{const n=eo.tunneling[Math.floor(Math.random()*eo.tunneling.length)];return ki({id:Si(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:mt(!1),destPort:53,protocol:"DNS",length:_r("dns"),flags:"",info:n,payload:n,isMalicious:!0,attackType:ie.DNS_TUNNELING})};class Uy{constructor(t){this.scenario=t,this.isRunning=!1,this.attackStarted=!1,this.attackPortIndex=0,this.attackUsernameIndex=0,this.elapsedTime=0,this.targetIP=kl(),this.blockedIPs=new Set}start(){this.isRunning=!0,this.attackStarted=!1,this.elapsedTime=0}stop(){this.isRunning=!1}blockIP(t){this.blockedIPs.add(t)}unblockIP(t){this.blockedIPs.delete(t)}isIPBlocked(t){return this.blockedIPs.has(t)}generatePackets(t){if(!this.isRunning)return[];this.elapsedTime+=t;const n=[],{backgroundTraffic:i,attackConfig:o}=this.scenario,a=Math.round(i.packetsPerSecond*t);for(let l=0;l<a;l++)n.push(Dy(i.protocols));if(this.elapsedTime>=o.startDelay&&(this.attackStarted=!0),this.attackStarted&&!this.isIPBlocked(o.attackerIP)){const l=Math.round(o.packetsPerSecond*t);for(let u=0;u<l;u++){const h=this.generateAttackPacket();h&&n.push(h)}}return n}generateAttackPacket(){const{attackType:t,attackConfig:n}=this.scenario;switch(t){case ie.PORT_SCAN:{const i=n.targetPorts[this.attackPortIndex%n.targetPorts.length];return this.attackPortIndex++,_y(n.attackerIP,this.targetIP,i)}case ie.BRUTE_FORCE_SSH:{const i=n.usernames[this.attackUsernameIndex%n.usernames.length];return this.attackUsernameIndex++,Ly(n.attackerIP,this.targetIP,i)}case ie.SQL_INJECTION:return Oy(n.attackerIP,this.targetIP);case ie.DATA_EXFILTRATION:return My(n.sourceIP,n.attackerIP,n.minPacketSize,n.maxPacketSize);case ie.DNS_TUNNELING:return Fy(n.sourceIP||this.targetIP,"8.8.8.8");default:return null}}getAttackerIP(){return this.scenario.attackConfig.attackerIP}}const zy=(e,t=3e4)=>{const n=[];for(const[i,o]of Object.entries(jy))if(o.check){const a=o.check(e,t);a.detected&&n.push({type:i,attackerIP:a.attackerIP,evidence:a.evidence,timestamp:new Date().toISOString(),...sf[i]})}return n},Hy=(e,t)=>{let n=0;const i=[],o=e.flaggedPackets.filter(g=>g.isMalicious),a=e.flaggedPackets.filter(g=>!g.isMalicious);if(o.length>0){const g=o.length*5;n+=g,i.push({action:"Correctly flagged malicious packets",count:o.length,points:g})}if(a.length>0){const g=a.length*2;n-=g,i.push({action:"False positive flags (penalty)",count:a.length,points:-g})}e.identifiedAttackType===t.attackType&&(n+=15,i.push({action:"Correctly identified attack type",count:1,points:15}));const l=t.attackConfig.attackerIP,u=e.blockedIPs.includes(l),h=e.blockedIPs.filter(g=>g!==l);if(u&&(n+=10,i.push({action:"Blocked attacker IP",count:1,points:10})),h.length>0){const g=h.length*5;n-=g,i.push({action:"Incorrectly blocked innocent IP (penalty)",count:h.length,points:-g})}return e.completedUnderTimeLimit&&n>0&&(n+=5,i.push({action:"Completed under time limit",count:1,points:5})),{total:Math.max(0,n),maxPossible:t.points,breakdown:i,passed:n>=t.points*.6}},By=(e,t,n)=>{const i=t.successCriteria,o={allMet:!0,details:[]};if(i.mustBlockAttacker){const a=e.blockedIPs.includes(t.attackConfig.attackerIP);o.details.push({criterion:"Block attacker IP",met:a,description:a?"Attacker IP blocked":"Attacker IP not blocked"}),a||(o.allMet=!1)}if(i.mustIdentifyAttackType){const a=e.identifiedAttackType===t.attackType;o.details.push({criterion:"Identify attack type",met:a,description:a?"Attack type correctly identified":"Attack type not identified"}),a||(o.allMet=!1)}if(i.minMaliciousPacketsFlagged){const a=e.flaggedPackets.filter(u=>u.isMalicious).length,l=a>=i.minMaliciousPacketsFlagged;o.details.push({criterion:`Flag at least ${i.minMaliciousPacketsFlagged} malicious packets`,met:l,description:`Flagged ${a} malicious packets`}),l||(o.allMet=!1)}return o},Ed=e=>{switch(e){case"critical":return"#f44336";case"high":return"#ff9800";case"medium":return"#ffeb3b";case"low":return"#4caf50";default:return"#90a4ae"}},Sl=e=>{var t;return((t=sf[e])==null?void 0:t.name)||e},Wy=({scenarios:e,completedScenarios:t,onSelectScenario:n})=>{const i=Ty(),o=u=>t.includes(u),a=u=>u.toLowerCase(),l=()=>e.filter(u=>t.includes(u.id)).reduce((u,h)=>u+h.points,0);return r.jsxs("div",{className:"scenario-selector",children:[r.jsxs("div",{className:"scenario-stats",children:[r.jsxs("div",{className:"scenario-stat",children:[r.jsx("span",{className:"stat-value",children:t.length}),r.jsx("span",{className:"stat-label",children:"Completed"})]}),r.jsxs("div",{className:"scenario-stat",children:[r.jsx("span",{className:"stat-value",children:i.total}),r.jsx("span",{className:"stat-label",children:"Total Scenarios"})]}),r.jsxs("div",{className:"scenario-stat",children:[r.jsx("span",{className:"stat-value",children:l()}),r.jsx("span",{className:"stat-label",children:"Points Earned"})]}),r.jsxs("div",{className:"scenario-stat",children:[r.jsx("span",{className:"stat-value",children:i.totalPoints}),r.jsx("span",{className:"stat-label",children:"Total Points"})]})]}),r.jsx("div",{className:"scenario-grid",children:e.map(u=>{const h=o(u.id);return r.jsxs("div",{className:`scenario-card ${h?"completed":""}`,onClick:()=>n(u),children:[h&&r.jsxs("div",{className:"completed-badge",children:[r.jsx("span",{className:"checkmark",children:"✓"}),"Completed"]}),r.jsxs("div",{className:"scenario-header",children:[r.jsx("h3",{children:u.name}),r.jsx("span",{className:`difficulty ${a(u.difficulty)}`,children:u.difficulty})]}),r.jsx("p",{className:"scenario-description",children:u.description}),r.jsxs("div",{className:"scenario-meta",children:[r.jsxs("div",{className:"meta-item",children:[r.jsx("span",{className:"meta-icon",children:"🎯"}),r.jsxs("span",{children:[u.points," points"]})]}),r.jsxs("div",{className:"meta-item",children:[r.jsx("span",{className:"meta-icon",children:"⏱"}),r.jsxs("span",{children:[u.duration,"s"]})]})]}),r.jsxs("div",{className:"scenario-objective",children:[r.jsx("strong",{children:"Learning Objective:"}),r.jsx("p",{children:u.learningObjective})]}),r.jsx("button",{className:"btn-start",children:h?"Play Again":"Start Scenario"})]},u.id)})})]})},Vy=({packets:e,selectedPacket:t,flaggedPackets:n,onSelectPacket:i,onFlagPacket:o})=>{const a=_.useRef(null),l=_.useRef(!0);_.useEffect(()=>{a.current&&l.current&&(a.current.scrollTop=a.current.scrollHeight)},[e]);const u=()=>{if(a.current){const{scrollTop:T,scrollHeight:N,clientHeight:I}=a.current;l.current=T+I>=N-50}},h=T=>new Date(T).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:2}),g=T=>{var N;return((N=of[T])==null?void 0:N.color)||"#90a4ae"},P=T=>n.some(N=>N.id===T.id),E=T=>{i(T)},S=(T,N)=>{T.stopPropagation(),o(N)};return r.jsxs("div",{className:"packet-list-container",children:[r.jsxs("div",{className:"packet-list-header",children:[r.jsx("h3",{children:"Live Traffic"}),r.jsxs("span",{className:"packet-count",children:[e.length," packets"]})]}),r.jsxs("div",{className:"packet-table-header",children:[r.jsx("div",{className:"col-flag"}),r.jsx("div",{className:"col-time",children:"Time"}),r.jsx("div",{className:"col-src",children:"Source"}),r.jsx("div",{className:"col-dst",children:"Destination"}),r.jsx("div",{className:"col-proto",children:"Protocol"}),r.jsx("div",{className:"col-len",children:"Length"}),r.jsx("div",{className:"col-info",children:"Info"})]}),r.jsxs("div",{className:"packet-list",ref:a,onScroll:u,children:[e.map(T=>r.jsxs("div",{className:`packet-row
              ${(t==null?void 0:t.id)===T.id?"selected":""}
              ${T.isMalicious?"malicious":""}
              ${P(T)?"flagged":""}
            `,onClick:()=>E(T),children:[r.jsx("div",{className:"col-flag",children:r.jsx("button",{className:`flag-btn ${P(T)?"flagged":""}`,onClick:N=>S(N,T),title:P(T)?"Unflag packet":"Flag as suspicious",children:P(T)?"⚑":"⚐"})}),r.jsx("div",{className:"col-time",children:h(T.timestamp)}),r.jsxs("div",{className:"col-src",children:[r.jsx("span",{className:"ip",children:T.sourceIP}),r.jsxs("span",{className:"port",children:[":",T.sourcePort]})]}),r.jsxs("div",{className:"col-dst",children:[r.jsx("span",{className:"ip",children:T.destIP}),r.jsxs("span",{className:"port",children:[":",T.destPort]})]}),r.jsx("div",{className:"col-proto",children:r.jsx("span",{className:"protocol-badge",style:{backgroundColor:g(T.protocol)},children:T.protocol})}),r.jsx("div",{className:"col-len",children:T.length}),r.jsx("div",{className:"col-info",title:T.info,children:T.info})]},T.id)),e.length===0&&r.jsx("div",{className:"packet-list-empty",children:"Waiting for network traffic..."})]})]})},$y=({packet:e,onFlagPacket:t})=>{if(!e)return r.jsx("div",{className:"packet-detail",children:r.jsx("div",{className:"packet-detail-empty",children:"Select a packet to view details"})});const n=o=>new Date(o).toLocaleString("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,hour12:!1}),i=o=>{var a;return((a=of[o])==null?void 0:a.color)||"#90a4ae"};return r.jsxs("div",{className:"packet-detail",children:[r.jsxs("div",{className:"packet-detail-header",children:[r.jsx("h4",{children:"Packet Details"}),r.jsx("div",{className:"packet-detail-actions",children:r.jsx("button",{className:`flag-btn-lg ${e.flaggedByUser?"flagged":""}`,onClick:()=>t(e),children:e.flaggedByUser?"⚑ Flagged":"⚐ Flag as Suspicious"})})]}),r.jsxs("div",{className:"packet-detail-content",children:[r.jsxs("div",{className:"detail-section",children:[r.jsx("h5",{children:"General"}),r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Packet ID"}),r.jsx("span",{className:"detail-value mono",children:e.id})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Timestamp"}),r.jsx("span",{className:"detail-value",children:n(e.timestamp)})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Protocol"}),r.jsx("span",{className:"detail-value protocol-badge",style:{backgroundColor:i(e.protocol)},children:e.protocol})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Length"}),r.jsxs("span",{className:"detail-value",children:[e.length," bytes"]})]})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h5",{children:"Source"}),r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"IP Address"}),r.jsx("span",{className:"detail-value mono",children:e.sourceIP})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Port"}),r.jsx("span",{className:"detail-value",children:e.sourcePort})]})]})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h5",{children:"Destination"}),r.jsxs("div",{className:"detail-grid",children:[r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"IP Address"}),r.jsx("span",{className:"detail-value mono",children:e.destIP})]}),r.jsxs("div",{className:"detail-item",children:[r.jsx("span",{className:"detail-label",children:"Port"}),r.jsx("span",{className:"detail-value",children:e.destPort})]})]})]}),e.flags&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h5",{children:"TCP Flags"}),r.jsx("div",{className:"detail-item",children:r.jsx("span",{className:"detail-value mono",children:e.flags})})]}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h5",{children:"Info"}),r.jsx("div",{className:"detail-item full-width",children:r.jsx("span",{className:"detail-value info-box mono",children:e.info})})]}),e.payload&&r.jsxs("div",{className:"detail-section",children:[r.jsx("h5",{children:"Payload"}),r.jsx("div",{className:"detail-item full-width",children:r.jsx("pre",{className:"payload-box",children:e.payload})})]}),e.isMalicious&&r.jsxs("div",{className:"detail-section malicious-warning",children:[r.jsx("h5",{children:"Warning"}),r.jsxs("div",{className:"warning-content",children:[r.jsx("span",{className:"warning-icon",children:"⚠"}),r.jsxs("div",{children:[r.jsx("strong",{children:"Potentially Malicious Traffic"}),e.attackType&&r.jsxs("p",{children:["Attack Type: ",Sl(e.attackType)]})]})]})]})]})]})},Gy=({alerts:e,onBlockIP:t})=>{const n=i=>new Date(i).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return r.jsxs("div",{className:"alert-panel",children:[r.jsxs("div",{className:"alert-panel-header",children:[r.jsx("h4",{children:"Threat Alerts"}),e.length>0&&r.jsx("span",{className:"alert-count",children:e.length})]}),r.jsx("div",{className:"alert-list",children:e.length===0?r.jsxs("div",{className:"alert-empty",children:[r.jsx("span",{className:"alert-empty-icon",children:"🛡"}),r.jsx("p",{children:"No threats detected yet"}),r.jsx("p",{className:"alert-empty-hint",children:"Monitoring network traffic..."})]}):e.map((i,o)=>r.jsxs("div",{className:"alert-item",style:{borderLeftColor:Ed(i.severity)},children:[r.jsxs("div",{className:"alert-header",children:[r.jsx("span",{className:"alert-severity",style:{backgroundColor:Ed(i.severity)},children:i.severity.toUpperCase()}),r.jsx("span",{className:"alert-time",children:n(i.timestamp)})]}),r.jsx("div",{className:"alert-title",children:i.name}),r.jsx("div",{className:"alert-description",children:i.description}),r.jsxs("div",{className:"alert-details",children:[r.jsxs("div",{className:"alert-evidence",children:[r.jsx("strong",{children:"Evidence:"})," ",i.evidence]}),r.jsxs("div",{className:"alert-ip",children:[r.jsx("strong",{children:"Source IP:"}),r.jsx("span",{className:"mono",children:i.attackerIP})]})]}),r.jsxs("div",{className:"alert-indicators",children:[r.jsx("strong",{children:"Indicators:"}),r.jsx("ul",{children:i.indicators.slice(0,2).map((a,l)=>r.jsx("li",{children:a},l))})]}),r.jsx("div",{className:"alert-actions",children:r.jsxs("button",{className:"btn-block",onClick:()=>t(i.attackerIP),children:["Block ",i.attackerIP]})})]},`${i.type}-${i.attackerIP}-${o}`))})]})},Yy=({blockedIPs:e,attackTypes:t,identifiedAttackType:n,onBlockIP:i,onUnblockIP:o,onIdentifyAttack:a,hints:l})=>{const[u,h]=_.useState(""),[g,P]=_.useState(!1),E=S=>{S.preventDefault();const T=u.trim();T&&/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(T)&&(i(T),h(""))};return r.jsxs("div",{className:"action-panel",children:[r.jsxs("div",{className:"action-section",children:[r.jsx("h4",{children:"Identify Attack Type"}),r.jsx("p",{className:"action-hint",children:"What type of attack is occurring?"}),r.jsx("div",{className:"attack-type-grid",children:t.map(S=>r.jsx("button",{className:`attack-type-btn ${n===S?"selected":""}`,onClick:()=>a(S),children:Sl(S)},S))}),n&&r.jsxs("div",{className:"selected-attack",children:["Selected: ",r.jsx("strong",{children:Sl(n)})]})]}),r.jsxs("div",{className:"action-section",children:[r.jsx("h4",{children:"Firewall Rules"}),r.jsxs("form",{onSubmit:E,className:"block-ip-form",children:[r.jsx("input",{type:"text",placeholder:"Enter IP to block (e.g., 192.168.1.100)",value:u,onChange:S=>h(S.target.value),className:"ip-input"}),r.jsx("button",{type:"submit",className:"btn-block-submit",children:"Block IP"})]}),r.jsxs("div",{className:"blocked-ips",children:[r.jsxs("h5",{children:["Blocked IPs (",e.length,")"]}),e.length===0?r.jsx("p",{className:"no-blocked",children:"No IPs blocked yet"}):r.jsx("ul",{className:"blocked-ip-list",children:e.map(S=>r.jsxs("li",{className:"blocked-ip-item",children:[r.jsx("span",{className:"mono",children:S}),r.jsx("button",{className:"btn-unblock",onClick:()=>o(S),title:"Unblock this IP",children:"×"})]},S))})]})]}),r.jsxs("div",{className:"action-section hints-section",children:[r.jsxs("button",{className:"hints-toggle",onClick:()=>P(!g),children:[g?"Hide Hints":"Show Hints"," 💡"]}),g&&l&&l.length>0&&r.jsx("div",{className:"hints-list",children:l.map((S,T)=>r.jsxs("div",{className:"hint-item",children:[r.jsx("span",{className:"hint-number",children:T+1}),r.jsx("span",{className:"hint-text",children:S})]},T))})]})]})},Xy=({completedScenarios:e,onCompleteScenario:t,onBack:n})=>{const[i,o]=_.useState(null),[a,l]=_.useState(!1),[u,h]=_.useState(0),[g,P]=_.useState(!1),[E,S]=_.useState([]),[T,N]=_.useState(null),[I,L]=_.useState({total:0,perSecond:0,bytes:0}),[m,w]=_.useState([]),[j,R]=_.useState([]),[M,F]=_.useState(null),[C,p]=_.useState([]),[y,v]=_.useState(null),k=_.useRef(null),b=_.useRef(null),x=_.useRef(Date.now()),Y=_.useCallback(H=>{o(H),h(H.duration),S([]),w([]),R([]),F(null),p([]),N(null),v(null),P(!1),k.current=new Uy(H),k.current.start(),l(!0),x.current=Date.now()},[]),te=_.useCallback(()=>{l(!1),k.current&&k.current.stop(),b.current&&clearInterval(b.current)},[]),ye=_.useCallback(()=>{if(te(),P(!0),!i)return;const H={flaggedPackets:m,blockedIPs:j,identifiedAttackType:M,completedUnderTimeLimit:u>0},$=Hy(H,i),J=By(H,i);v({score:$,criteria:J,passed:$.passed&&J.allMet}),$.passed&&J.allMet&&t(i.id,$.total)},[i,m,j,M,u,E,te,t]);_.useEffect(()=>{if(!(!a||!k.current))return b.current=setInterval(()=>{const H=Date.now(),$=(H-x.current)/1e3;x.current=H;const J=k.current.generatePackets($);S(ae=>[...ae,...J].slice(-200)),h(ae=>{const we=Math.max(0,ae-$);return we<=0&&ye(),we}),L(ae=>({total:ae.total+J.length,perSecond:Math.round(J.length/$),bytes:ae.bytes+J.reduce((we,Ke)=>we+Ke.length,0)}))},200),()=>{b.current&&clearInterval(b.current)}},[a,ye]),_.useEffect(()=>{if(!a||E.length<5)return;const H=zy(E,3e4);H.length>0&&p($=>{const J=H.filter(ae=>!$.some(we=>we.type===ae.type&&we.attackerIP===ae.attackerIP));return[...$,...J]})},[E,a]);const Se=_.useCallback(H=>{w($=>$.some(ae=>ae.id===H.id)?$.filter(ae=>ae.id!==H.id):[...$,H]),S($=>$.map(J=>J.id===H.id?{...J,flaggedByUser:!J.flaggedByUser}:J))},[]),z=_.useCallback(H=>{k.current&&k.current.blockIP(H),R($=>$.includes(H)?$:[...$,H])},[]),V=_.useCallback(H=>{k.current&&k.current.unblockIP(H),R($=>$.filter(J=>J!==H))},[]),G=_.useCallback(H=>{F(H)},[]),ne=_.useCallback(()=>{te(),o(null),S([]),v(null),P(!1)},[te]);return i?g&&y?r.jsxs("div",{className:"network-monitor",children:[r.jsxs("div",{className:"nm-header",children:[r.jsx("h2",{children:"Scenario Complete"}),r.jsx("h3",{children:i.name})]}),r.jsxs("div",{className:"nm-results",children:[r.jsxs("div",{className:`results-summary ${y.passed?"passed":"failed"}`,children:[r.jsx("div",{className:"result-icon",children:y.passed?"✓":"✗"}),r.jsx("h3",{children:y.passed?"Mission Accomplished!":"Mission Failed"}),r.jsxs("div",{className:"result-score",children:["Score: ",y.score.total," / ",y.score.maxPossible," points"]})]}),r.jsxs("div",{className:"results-breakdown",children:[r.jsx("h4",{children:"Score Breakdown"}),y.score.breakdown.map((H,$)=>r.jsxs("div",{className:`breakdown-item ${H.points>=0?"positive":"negative"}`,children:[r.jsx("span",{children:H.action}),r.jsxs("span",{className:"breakdown-count",children:["x",H.count]}),r.jsxs("span",{className:"breakdown-points",children:[H.points>=0?"+":"",H.points]})]},$))]}),r.jsxs("div",{className:"results-criteria",children:[r.jsx("h4",{children:"Success Criteria"}),y.criteria.details.map((H,$)=>r.jsxs("div",{className:`criteria-item ${H.met?"met":"not-met"}`,children:[r.jsx("span",{className:"criteria-icon",children:H.met?"✓":"✗"}),r.jsx("span",{children:H.criterion}),r.jsx("span",{className:"criteria-desc",children:H.description})]},$))]}),r.jsxs("div",{className:"results-actions",children:[r.jsx("button",{className:"btn-primary",onClick:()=>Y(i),children:"Try Again"}),r.jsx("button",{className:"btn-secondary",onClick:ne,children:"Choose Another Scenario"})]})]})]}):r.jsxs("div",{className:"network-monitor",children:[r.jsxs("div",{className:"nm-header",children:[r.jsx("button",{className:"back-btn",onClick:ne,children:"← Back"}),r.jsxs("div",{className:"nm-title-section",children:[r.jsx("h2",{children:i.name}),r.jsx("span",{className:`difficulty ${i.difficulty}`,children:i.difficulty})]}),r.jsxs("div",{className:"nm-stats",children:[r.jsxs("div",{className:"stat",children:[r.jsx("span",{className:"stat-value",children:Math.ceil(u)}),r.jsx("span",{className:"stat-label",children:"Time Left"})]}),r.jsxs("div",{className:"stat",children:[r.jsx("span",{className:"stat-value",children:I.total}),r.jsx("span",{className:"stat-label",children:"Packets"})]}),r.jsxs("div",{className:"stat",children:[r.jsxs("span",{className:"stat-value",children:[I.perSecond,"/s"]}),r.jsx("span",{className:"stat-label",children:"Rate"})]}),r.jsxs("div",{className:"stat",children:[r.jsxs("span",{className:"stat-value",children:[Math.round(I.bytes/1024),"KB"]}),r.jsx("span",{className:"stat-label",children:"Data"})]})]}),r.jsx("button",{className:"btn-complete",onClick:ye,children:"Complete Mission"})]}),r.jsxs("div",{className:"nm-objective",children:[r.jsx("strong",{children:"Objective:"})," ",i.description]}),r.jsxs("div",{className:"nm-main-content",children:[r.jsx("div",{className:"nm-left-panel",children:r.jsx(Vy,{packets:E,selectedPacket:T,flaggedPackets:m,onSelectPacket:N,onFlagPacket:Se})}),r.jsxs("div",{className:"nm-right-panel",children:[r.jsx(Gy,{alerts:C,onBlockIP:z}),r.jsx(Yy,{blockedIPs:j,attackTypes:Object.values(ie),identifiedAttackType:M,onBlockIP:z,onUnblockIP:V,onIdentifyAttack:G,hints:i.hints})]})]}),r.jsx("div",{className:"nm-bottom-panel",children:r.jsx($y,{packet:T,onFlagPacket:Se})})]}):r.jsxs("div",{className:"network-monitor",children:[r.jsxs("div",{className:"nm-header",children:[r.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Dashboard"}),r.jsx("h2",{children:"Network Monitor"}),r.jsx("p",{className:"nm-subtitle",children:"Learn to detect and respond to cyber attacks in real-time"})]}),r.jsx(Wy,{scenarios:vt,completedScenarios:e,onSelectScenario:Y})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Ky=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=e[n++];t[i++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=e[n++],l=e[n++],u=e[n++],h=((o&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{const a=e[n++],l=e[n++];t[i++]=String.fromCharCode((o&15)<<12|(a&63)<<6|l&63)}}return t.join("")},Qy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<e.length;o+=3){const a=e[o],l=o+1<e.length,u=l?e[o+1]:0,h=o+2<e.length,g=h?e[o+2]:0,P=a>>2,E=(a&3)<<4|u>>4;let S=(u&15)<<2|g>>6,T=g&63;h||(T=64,l||(S=64)),i.push(n[P],n[E],n[S],n[T])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(af(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ky(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<e.length;){const a=n[e.charAt(o++)],u=o<e.length?n[e.charAt(o)]:0;++o;const g=o<e.length?n[e.charAt(o)]:64;++o;const E=o<e.length?n[e.charAt(o)]:64;if(++o,a==null||u==null||g==null||E==null)throw new qy;const S=a<<2|u>>4;if(i.push(S),g!==64){const T=u<<4&240|g>>2;if(i.push(T),E!==64){const N=g<<6&192|E;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jy=function(e){const t=af(e);return Qy.encodeByteArray(t,!0)},lf=function(e){return Jy(e).replace(/\./g,"")};function Zy(){try{return typeof indexedDB=="object"}catch{return!1}}function e0(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var a;t(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="FirebaseError";class Ci extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=t0,Object.setPrototypeOf(this,Ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cf.prototype.create)}}class cf{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},o=`${this.service}/${t}`,a=this.errors[t],l=a?n0(a,i):"Error",u=`${this.serviceName}: ${l} (${o}).`;return new Ci(o,u,i)}}function n0(e,t){return e.replace(i0,(n,i)=>{const o=t[i];return o!=null?String(o):`<${i}?>`})}const i0=/\{\$([^}]+)}/g;class to{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const r0={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},s0=se.INFO,o0={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},a0=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),o=o0[t];if(o)console[o](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uf{constructor(t){this.name=t,this._logLevel=s0,this._logHandler=a0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?r0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const l0=(e,t)=>t.some(n=>e instanceof n);let Pd,Ad;function c0(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u0(){return Ad||(Ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const df=new WeakMap,Cl=new WeakMap,hf=new WeakMap,xa=new WeakMap,kc=new WeakMap;function d0(e){const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("success",a),e.removeEventListener("error",l)},a=()=>{n(cn(e.result)),o()},l=()=>{i(e.error),o()};e.addEventListener("success",a),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&df.set(n,e)}).catch(()=>{}),kc.set(t,e),t}function h0(e){if(Cl.has(e))return;const t=new Promise((n,i)=>{const o=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",l),e.removeEventListener("abort",l)},a=()=>{n(),o()},l=()=>{i(e.error||new DOMException("AbortError","AbortError")),o()};e.addEventListener("complete",a),e.addEventListener("error",l),e.addEventListener("abort",l)});Cl.set(e,t)}let jl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Cl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function p0(e){jl=e(jl)}function f0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(wa(this),t,...n);return hf.set(i,t.sort?t.sort():[t]),cn(i)}:u0().includes(e)?function(...t){return e.apply(wa(this),t),cn(df.get(this))}:function(...t){return cn(e.apply(wa(this),t))}}function m0(e){return typeof e=="function"?f0(e):(e instanceof IDBTransaction&&h0(e),l0(e,c0())?new Proxy(e,jl):e)}function cn(e){if(e instanceof IDBRequest)return d0(e);if(xa.has(e))return xa.get(e);const t=m0(e);return t!==e&&(xa.set(e,t),kc.set(t,e)),t}const wa=e=>kc.get(e);function g0(e,t,{blocked:n,upgrade:i,blocking:o,terminated:a}={}){const l=indexedDB.open(e,t),u=cn(l);return i&&l.addEventListener("upgradeneeded",h=>{i(cn(l.result),h.oldVersion,h.newVersion,cn(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{a&&h.addEventListener("close",()=>a()),o&&h.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),u}const y0=["get","getKey","getAll","getAllKeys","count"],v0=["put","add","delete","clear"],ka=new Map;function Id(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ka.get(t))return ka.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=v0.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||y0.includes(n)))return;const a=async function(l,...u){const h=this.transaction(l,o?"readwrite":"readonly");let g=h.store;return i&&(g=g.index(u.shift())),(await Promise.all([g[n](...u),o&&h.done]))[0]};return ka.set(t,a),a}p0(e=>({...e,get:(t,n,i)=>Id(t,n)||e.get(t,n,i),has:(t,n)=>!!Id(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(w0(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function w0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const bl="@firebase/app",Rd="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new uf("@firebase/app"),k0="@firebase/app-compat",S0="@firebase/analytics-compat",C0="@firebase/analytics",j0="@firebase/app-check-compat",b0="@firebase/app-check",T0="@firebase/auth",N0="@firebase/auth-compat",E0="@firebase/database",P0="@firebase/data-connect",A0="@firebase/database-compat",I0="@firebase/functions",R0="@firebase/functions-compat",D0="@firebase/installations",_0="@firebase/installations-compat",L0="@firebase/messaging",O0="@firebase/messaging-compat",M0="@firebase/performance",F0="@firebase/performance-compat",U0="@firebase/remote-config",z0="@firebase/remote-config-compat",H0="@firebase/storage",B0="@firebase/storage-compat",W0="@firebase/firestore",V0="@firebase/vertexai-preview",$0="@firebase/firestore-compat",G0="firebase",Y0="10.14.1",X0={[bl]:"fire-core",[k0]:"fire-core-compat",[C0]:"fire-analytics",[S0]:"fire-analytics-compat",[b0]:"fire-app-check",[j0]:"fire-app-check-compat",[T0]:"fire-auth",[N0]:"fire-auth-compat",[E0]:"fire-rtdb",[P0]:"fire-data-connect",[A0]:"fire-rtdb-compat",[I0]:"fire-fn",[R0]:"fire-fn-compat",[D0]:"fire-iid",[_0]:"fire-iid-compat",[L0]:"fire-fcm",[O0]:"fire-fcm-compat",[M0]:"fire-perf",[F0]:"fire-perf-compat",[U0]:"fire-rc",[z0]:"fire-rc-compat",[H0]:"fire-gcs",[B0]:"fire-gcs-compat",[W0]:"fire-fst",[$0]:"fire-fst-compat",[V0]:"fire-vertex","fire-js":"fire-js",[G0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new Map,Q0=new Map,Dd=new Map;function _d(e,t){try{e.container.addComponent(t)}catch(n){zt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function no(e){const t=e.name;if(Dd.has(t))return zt.debug(`There were multiple attempts to register component ${t}.`),!1;Dd.set(t,e);for(const n of K0.values())_d(n,e);for(const n of Q0.values())_d(n,e);return!0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sc=new cf("app","Firebase",q0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0=Y0;function ci(e,t,n){var i;let o=(i=X0[e])!==null&&i!==void 0?i:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const u=[`Unable to register library "${o}" with version "${t}":`];a&&u.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),zt.warn(u.join(" "));return}no(new to(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebase-heartbeat-database",ev=1,Er="firebase-heartbeat-store";let Sa=null;function pf(){return Sa||(Sa=g0(Z0,ev,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Er)}catch(n){console.warn(n)}}}}).catch(e=>{throw Sc.create("idb-open",{originalErrorMessage:e.message})})),Sa}async function tv(e){try{const n=(await pf()).transaction(Er),i=await n.objectStore(Er).get(ff(e));return await n.done,i}catch(t){if(t instanceof Ci)zt.warn(t.message);else{const n=Sc.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});zt.warn(n.message)}}}async function Ld(e,t){try{const i=(await pf()).transaction(Er,"readwrite");await i.objectStore(Er).put(t,ff(e)),await i.done}catch(n){if(n instanceof Ci)zt.warn(n.message);else{const i=Sc.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(i.message)}}}function ff(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=1024,iv=30*24*60*60*1e3;class rv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ov(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Od();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=iv}),this._storage.overwrite(this._heartbeatsCache))}catch(i){zt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Od(),{heartbeatsToSend:i,unsentEntries:o}=sv(this._heartbeatsCache.heartbeats),a=lf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return zt.warn(n),""}}}function Od(){return new Date().toISOString().substring(0,10)}function sv(e,t=nv){const n=[];let i=e.slice();for(const o of e){const a=n.find(l=>l.agent===o.agent);if(a){if(a.dates.push(o.date),Md(n)>t){a.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Md(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class ov{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zy()?e0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Md(e){return lf(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(e){no(new to("platform-logger",t=>new x0(t),"PRIVATE")),no(new to("heartbeat",t=>new rv(t),"PRIVATE")),ci(bl,Rd,e),ci(bl,Rd,"esm2017"),ci("fire-js","")}av("");var lv="firebase",cv="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci(lv,cv,"app");var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mf;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,p){function y(){}y.prototype=p.prototype,C.D=p.prototype,C.prototype=new y,C.prototype.constructor=C,C.C=function(v,k,b){for(var x=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)x[Y-2]=arguments[Y];return p.prototype[k].apply(v,x)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,p,y){y||(y=0);var v=Array(16);if(typeof p=="string")for(var k=0;16>k;++k)v[k]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(k=0;16>k;++k)v[k]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=C.g[0],y=C.g[1],k=C.g[2];var b=C.g[3],x=p+(b^y&(k^b))+v[0]+3614090360&4294967295;p=y+(x<<7&4294967295|x>>>25),x=b+(k^p&(y^k))+v[1]+3905402710&4294967295,b=p+(x<<12&4294967295|x>>>20),x=k+(y^b&(p^y))+v[2]+606105819&4294967295,k=b+(x<<17&4294967295|x>>>15),x=y+(p^k&(b^p))+v[3]+3250441966&4294967295,y=k+(x<<22&4294967295|x>>>10),x=p+(b^y&(k^b))+v[4]+4118548399&4294967295,p=y+(x<<7&4294967295|x>>>25),x=b+(k^p&(y^k))+v[5]+1200080426&4294967295,b=p+(x<<12&4294967295|x>>>20),x=k+(y^b&(p^y))+v[6]+2821735955&4294967295,k=b+(x<<17&4294967295|x>>>15),x=y+(p^k&(b^p))+v[7]+4249261313&4294967295,y=k+(x<<22&4294967295|x>>>10),x=p+(b^y&(k^b))+v[8]+1770035416&4294967295,p=y+(x<<7&4294967295|x>>>25),x=b+(k^p&(y^k))+v[9]+2336552879&4294967295,b=p+(x<<12&4294967295|x>>>20),x=k+(y^b&(p^y))+v[10]+4294925233&4294967295,k=b+(x<<17&4294967295|x>>>15),x=y+(p^k&(b^p))+v[11]+2304563134&4294967295,y=k+(x<<22&4294967295|x>>>10),x=p+(b^y&(k^b))+v[12]+1804603682&4294967295,p=y+(x<<7&4294967295|x>>>25),x=b+(k^p&(y^k))+v[13]+4254626195&4294967295,b=p+(x<<12&4294967295|x>>>20),x=k+(y^b&(p^y))+v[14]+2792965006&4294967295,k=b+(x<<17&4294967295|x>>>15),x=y+(p^k&(b^p))+v[15]+1236535329&4294967295,y=k+(x<<22&4294967295|x>>>10),x=p+(k^b&(y^k))+v[1]+4129170786&4294967295,p=y+(x<<5&4294967295|x>>>27),x=b+(y^k&(p^y))+v[6]+3225465664&4294967295,b=p+(x<<9&4294967295|x>>>23),x=k+(p^y&(b^p))+v[11]+643717713&4294967295,k=b+(x<<14&4294967295|x>>>18),x=y+(b^p&(k^b))+v[0]+3921069994&4294967295,y=k+(x<<20&4294967295|x>>>12),x=p+(k^b&(y^k))+v[5]+3593408605&4294967295,p=y+(x<<5&4294967295|x>>>27),x=b+(y^k&(p^y))+v[10]+38016083&4294967295,b=p+(x<<9&4294967295|x>>>23),x=k+(p^y&(b^p))+v[15]+3634488961&4294967295,k=b+(x<<14&4294967295|x>>>18),x=y+(b^p&(k^b))+v[4]+3889429448&4294967295,y=k+(x<<20&4294967295|x>>>12),x=p+(k^b&(y^k))+v[9]+568446438&4294967295,p=y+(x<<5&4294967295|x>>>27),x=b+(y^k&(p^y))+v[14]+3275163606&4294967295,b=p+(x<<9&4294967295|x>>>23),x=k+(p^y&(b^p))+v[3]+4107603335&4294967295,k=b+(x<<14&4294967295|x>>>18),x=y+(b^p&(k^b))+v[8]+1163531501&4294967295,y=k+(x<<20&4294967295|x>>>12),x=p+(k^b&(y^k))+v[13]+2850285829&4294967295,p=y+(x<<5&4294967295|x>>>27),x=b+(y^k&(p^y))+v[2]+4243563512&4294967295,b=p+(x<<9&4294967295|x>>>23),x=k+(p^y&(b^p))+v[7]+1735328473&4294967295,k=b+(x<<14&4294967295|x>>>18),x=y+(b^p&(k^b))+v[12]+2368359562&4294967295,y=k+(x<<20&4294967295|x>>>12),x=p+(y^k^b)+v[5]+4294588738&4294967295,p=y+(x<<4&4294967295|x>>>28),x=b+(p^y^k)+v[8]+2272392833&4294967295,b=p+(x<<11&4294967295|x>>>21),x=k+(b^p^y)+v[11]+1839030562&4294967295,k=b+(x<<16&4294967295|x>>>16),x=y+(k^b^p)+v[14]+4259657740&4294967295,y=k+(x<<23&4294967295|x>>>9),x=p+(y^k^b)+v[1]+2763975236&4294967295,p=y+(x<<4&4294967295|x>>>28),x=b+(p^y^k)+v[4]+1272893353&4294967295,b=p+(x<<11&4294967295|x>>>21),x=k+(b^p^y)+v[7]+4139469664&4294967295,k=b+(x<<16&4294967295|x>>>16),x=y+(k^b^p)+v[10]+3200236656&4294967295,y=k+(x<<23&4294967295|x>>>9),x=p+(y^k^b)+v[13]+681279174&4294967295,p=y+(x<<4&4294967295|x>>>28),x=b+(p^y^k)+v[0]+3936430074&4294967295,b=p+(x<<11&4294967295|x>>>21),x=k+(b^p^y)+v[3]+3572445317&4294967295,k=b+(x<<16&4294967295|x>>>16),x=y+(k^b^p)+v[6]+76029189&4294967295,y=k+(x<<23&4294967295|x>>>9),x=p+(y^k^b)+v[9]+3654602809&4294967295,p=y+(x<<4&4294967295|x>>>28),x=b+(p^y^k)+v[12]+3873151461&4294967295,b=p+(x<<11&4294967295|x>>>21),x=k+(b^p^y)+v[15]+530742520&4294967295,k=b+(x<<16&4294967295|x>>>16),x=y+(k^b^p)+v[2]+3299628645&4294967295,y=k+(x<<23&4294967295|x>>>9),x=p+(k^(y|~b))+v[0]+4096336452&4294967295,p=y+(x<<6&4294967295|x>>>26),x=b+(y^(p|~k))+v[7]+1126891415&4294967295,b=p+(x<<10&4294967295|x>>>22),x=k+(p^(b|~y))+v[14]+2878612391&4294967295,k=b+(x<<15&4294967295|x>>>17),x=y+(b^(k|~p))+v[5]+4237533241&4294967295,y=k+(x<<21&4294967295|x>>>11),x=p+(k^(y|~b))+v[12]+1700485571&4294967295,p=y+(x<<6&4294967295|x>>>26),x=b+(y^(p|~k))+v[3]+2399980690&4294967295,b=p+(x<<10&4294967295|x>>>22),x=k+(p^(b|~y))+v[10]+4293915773&4294967295,k=b+(x<<15&4294967295|x>>>17),x=y+(b^(k|~p))+v[1]+2240044497&4294967295,y=k+(x<<21&4294967295|x>>>11),x=p+(k^(y|~b))+v[8]+1873313359&4294967295,p=y+(x<<6&4294967295|x>>>26),x=b+(y^(p|~k))+v[15]+4264355552&4294967295,b=p+(x<<10&4294967295|x>>>22),x=k+(p^(b|~y))+v[6]+2734768916&4294967295,k=b+(x<<15&4294967295|x>>>17),x=y+(b^(k|~p))+v[13]+1309151649&4294967295,y=k+(x<<21&4294967295|x>>>11),x=p+(k^(y|~b))+v[4]+4149444226&4294967295,p=y+(x<<6&4294967295|x>>>26),x=b+(y^(p|~k))+v[11]+3174756917&4294967295,b=p+(x<<10&4294967295|x>>>22),x=k+(p^(b|~y))+v[2]+718787259&4294967295,k=b+(x<<15&4294967295|x>>>17),x=y+(b^(k|~p))+v[9]+3951481745&4294967295,C.g[0]=C.g[0]+p&4294967295,C.g[1]=C.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,C.g[2]=C.g[2]+k&4294967295,C.g[3]=C.g[3]+b&4294967295}i.prototype.u=function(C,p){p===void 0&&(p=C.length);for(var y=p-this.blockSize,v=this.B,k=this.h,b=0;b<p;){if(k==0)for(;b<=y;)o(this,C,b),b+=this.blockSize;if(typeof C=="string"){for(;b<p;)if(v[k++]=C.charCodeAt(b++),k==this.blockSize){o(this,v),k=0;break}}else for(;b<p;)if(v[k++]=C[b++],k==this.blockSize){o(this,v),k=0;break}}this.h=k,this.o+=p},i.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var p=1;p<C.length-8;++p)C[p]=0;var y=8*this.o;for(p=C.length-8;p<C.length;++p)C[p]=y&255,y/=256;for(this.u(C),C=Array(16),p=y=0;4>p;++p)for(var v=0;32>v;v+=8)C[y++]=this.g[p]>>>v&255;return C};function a(C,p){var y=u;return Object.prototype.hasOwnProperty.call(y,C)?y[C]:y[C]=p(C)}function l(C,p){this.h=p;for(var y=[],v=!0,k=C.length-1;0<=k;k--){var b=C[k]|0;v&&b==p||(y[k]=b,v=!1)}this.g=y}var u={};function h(C){return-128<=C&&128>C?a(C,function(p){return new l([p|0],0>p?-1:0)}):new l([C|0],0>C?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return E;if(0>C)return L(g(-C));for(var p=[],y=1,v=0;C>=y;v++)p[v]=C/y|0,y*=4294967296;return new l(p,0)}function P(C,p){if(C.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(C.charAt(0)=="-")return L(P(C.substring(1),p));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=g(Math.pow(p,8)),v=E,k=0;k<C.length;k+=8){var b=Math.min(8,C.length-k),x=parseInt(C.substring(k,k+b),p);8>b?(b=g(Math.pow(p,b)),v=v.j(b).add(g(x))):(v=v.j(y),v=v.add(g(x)))}return v}var E=h(0),S=h(1),T=h(16777216);e=l.prototype,e.m=function(){if(I(this))return-L(this).m();for(var C=0,p=1,y=0;y<this.g.length;y++){var v=this.i(y);C+=(0<=v?v:4294967296+v)*p,p*=4294967296}return C},e.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(N(this))return"0";if(I(this))return"-"+L(this).toString(C);for(var p=g(Math.pow(C,6)),y=this,v="";;){var k=R(y,p).g;y=m(y,k.j(p));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(C);if(y=k,N(y))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},e.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function N(C){if(C.h!=0)return!1;for(var p=0;p<C.g.length;p++)if(C.g[p]!=0)return!1;return!0}function I(C){return C.h==-1}e.l=function(C){return C=m(this,C),I(C)?-1:N(C)?0:1};function L(C){for(var p=C.g.length,y=[],v=0;v<p;v++)y[v]=~C.g[v];return new l(y,~C.h).add(S)}e.abs=function(){return I(this)?L(this):this},e.add=function(C){for(var p=Math.max(this.g.length,C.g.length),y=[],v=0,k=0;k<=p;k++){var b=v+(this.i(k)&65535)+(C.i(k)&65535),x=(b>>>16)+(this.i(k)>>>16)+(C.i(k)>>>16);v=x>>>16,b&=65535,x&=65535,y[k]=x<<16|b}return new l(y,y[y.length-1]&-2147483648?-1:0)};function m(C,p){return C.add(L(p))}e.j=function(C){if(N(this)||N(C))return E;if(I(this))return I(C)?L(this).j(L(C)):L(L(this).j(C));if(I(C))return L(this.j(L(C)));if(0>this.l(T)&&0>C.l(T))return g(this.m()*C.m());for(var p=this.g.length+C.g.length,y=[],v=0;v<2*p;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var k=0;k<C.g.length;k++){var b=this.i(v)>>>16,x=this.i(v)&65535,Y=C.i(k)>>>16,te=C.i(k)&65535;y[2*v+2*k]+=x*te,w(y,2*v+2*k),y[2*v+2*k+1]+=b*te,w(y,2*v+2*k+1),y[2*v+2*k+1]+=x*Y,w(y,2*v+2*k+1),y[2*v+2*k+2]+=b*Y,w(y,2*v+2*k+2)}for(v=0;v<p;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=p;v<2*p;v++)y[v]=0;return new l(y,0)};function w(C,p){for(;(C[p]&65535)!=C[p];)C[p+1]+=C[p]>>>16,C[p]&=65535,p++}function j(C,p){this.g=C,this.h=p}function R(C,p){if(N(p))throw Error("division by zero");if(N(C))return new j(E,E);if(I(C))return p=R(L(C),p),new j(L(p.g),L(p.h));if(I(p))return p=R(C,L(p)),new j(L(p.g),p.h);if(30<C.g.length){if(I(C)||I(p))throw Error("slowDivide_ only works with positive integers.");for(var y=S,v=p;0>=v.l(C);)y=M(y),v=M(v);var k=F(y,1),b=F(v,1);for(v=F(v,2),y=F(y,2);!N(v);){var x=b.add(v);0>=x.l(C)&&(k=k.add(y),b=x),v=F(v,1),y=F(y,1)}return p=m(C,k.j(p)),new j(k,p)}for(k=E;0<=C.l(p);){for(y=Math.max(1,Math.floor(C.m()/p.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=g(y),x=b.j(p);I(x)||0<x.l(C);)y-=v,b=g(y),x=b.j(p);N(b)&&(b=S),k=k.add(b),C=m(C,x)}return new j(k,C)}e.A=function(C){return R(this,C).h},e.and=function(C){for(var p=Math.max(this.g.length,C.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)&C.i(v);return new l(y,this.h&C.h)},e.or=function(C){for(var p=Math.max(this.g.length,C.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)|C.i(v);return new l(y,this.h|C.h)},e.xor=function(C){for(var p=Math.max(this.g.length,C.g.length),y=[],v=0;v<p;v++)y[v]=this.i(v)^C.i(v);return new l(y,this.h^C.h)};function M(C){for(var p=C.g.length+1,y=[],v=0;v<p;v++)y[v]=C.i(v)<<1|C.i(v-1)>>>31;return new l(y,C.h)}function F(C,p){var y=p>>5;p%=32;for(var v=C.g.length-y,k=[],b=0;b<v;b++)k[b]=0<p?C.i(b+y)>>>p|C.i(b+y+1)<<32-p:C.i(b+y);return new l(k,C.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=g,l.fromString=P,mf=l}).apply(typeof Fd<"u"?Fd:typeof self<"u"?self:typeof window<"u"?window:{});var gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,d){return s==Array.prototype||s==Object.prototype||(s[c]=d.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof gs=="object"&&gs];for(var c=0;c<s.length;++c){var d=s[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=n(this);function o(s,c){if(c)e:{var d=i;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in d))break e;d=d[A]}s=s[s.length-1],f=d[s],c=c(f),c!=f&&c!=null&&t(d,s,{configurable:!0,writable:!0,value:c})}}function a(s,c){s instanceof String&&(s+="");var d=0,f=!1,A={next:function(){if(!f&&d<s.length){var D=d++;return{value:c(D,s[D]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}o("Array.prototype.values",function(s){return s||function(){return a(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function g(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function P(s,c,d){return s.call.apply(s.bind,arguments)}function E(s,c,d){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),s.apply(c,A)}}return function(){return s.apply(c,arguments)}}function S(s,c,d){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?P:E,S.apply(null,arguments)}function T(s,c){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function N(s,c){function d(){}d.prototype=c.prototype,s.aa=c.prototype,s.prototype=new d,s.prototype.constructor=s,s.Qb=function(f,A,D){for(var U=Array(arguments.length-2),re=2;re<arguments.length;re++)U[re-2]=arguments[re];return c.prototype[A].apply(f,U)}}function I(s){const c=s.length;if(0<c){const d=Array(c);for(let f=0;f<c;f++)d[f]=s[f];return d}return[]}function L(s,c){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(h(f)){const A=s.length||0,D=f.length||0;s.length=A+D;for(let U=0;U<D;U++)s[A+U]=f[U]}else s.push(f)}}class m{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(s){return/^[\s\xa0]*$/.test(s)}function j(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function R(s){return R[" "](s),s}R[" "]=function(){};var M=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function F(s,c,d){for(const f in s)c.call(d,s[f],f,s)}function C(s,c){for(const d in s)c.call(void 0,s[d],d,s)}function p(s){const c={};for(const d in s)c[d]=s[d];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,c){let d,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(d in f)s[d]=f[d];for(let D=0;D<y.length;D++)d=y[D],Object.prototype.hasOwnProperty.call(f,d)&&(s[d]=f[d])}}function k(s){var c=1;s=s.split(":");const d=[];for(;0<c&&s.length;)d.push(s.shift()),c--;return s.length&&d.push(s.join(":")),d}function b(s){u.setTimeout(()=>{throw s},0)}function x(){var s=V;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Y{constructor(){this.h=this.g=null}add(c,d){const f=te.get();f.set(c,d),this.h?this.h.next=f:this.g=f,this.h=f}}var te=new m(()=>new ye,s=>s.reset());class ye{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Se,z=!1,V=new Y,G=()=>{const s=u.Promise.resolve(void 0);Se=()=>{s.then(ne)}};var ne=()=>{for(var s;s=x();){try{s.h.call(s.g)}catch(d){b(d)}var c=te;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}z=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const d=()=>{};u.addEventListener("test",d,c),u.removeEventListener("test",d,c)}catch{}return s}();function ae(s,c){if($.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var d=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(M){e:{try{R(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else d=="mouseover"?c=s.fromElement:d=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:we[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ae.aa.h.call(this)}}N(ae,$);var we={2:"touch",3:"pen",4:"mouse"};ae.prototype.h=function(){ae.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ke="closure_listenable_"+(1e6*Math.random()|0),Co=0;function jo(s,c,d,f,A){this.listener=s,this.proxy=null,this.src=c,this.type=d,this.capture=!!f,this.ha=A,this.key=++Co,this.da=this.fa=!1}function Bt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function _n(s){this.src=s,this.g={},this.h=0}_n.prototype.add=function(s,c,d,f,A){var D=s.toString();s=this.g[D],s||(s=this.g[D]=[],this.h++);var U=bi(s,c,f,A);return-1<U?(c=s[U],d||(c.fa=!1)):(c=new jo(c,this.src,D,!!f,A),c.fa=d,s.push(c)),c};function ji(s,c){var d=c.type;if(d in s.g){var f=s.g[d],A=Array.prototype.indexOf.call(f,c,void 0),D;(D=0<=A)&&Array.prototype.splice.call(f,A,1),D&&(Bt(c),s.g[d].length==0&&(delete s.g[d],s.h--))}}function bi(s,c,d,f){for(var A=0;A<s.length;++A){var D=s[A];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==f)return A}return-1}var Ti="closure_lm_"+(1e6*Math.random()|0),Ni={};function Lr(s,c,d,f,A){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Lr(s,c[D],d,f,A);return null}return d=Fr(d),s&&s[Ke]?s.K(c,d,g(f)?!!f.capture:!1,A):bo(s,c,d,!1,f,A)}function bo(s,c,d,f,A,D){if(!c)throw Error("Invalid event type");var U=g(A)?!!A.capture:!!A,re=Ei(s);if(re||(s[Ti]=re=new _n(s)),d=re.add(c,d,f,U,D),d.proxy)return d;if(f=To(),d.proxy=f,f.src=s,f.listener=d,s.addEventListener)J||(A=U),A===void 0&&(A=!1),s.addEventListener(c.toString(),f,A);else if(s.attachEvent)s.attachEvent(Mr(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function To(){function s(d){return c.call(s.src,s.listener,d)}const c=No;return s}function Or(s,c,d,f,A){if(Array.isArray(c))for(var D=0;D<c.length;D++)Or(s,c[D],d,f,A);else f=g(f)?!!f.capture:!!f,d=Fr(d),s&&s[Ke]?(s=s.i,c=String(c).toString(),c in s.g&&(D=s.g[c],d=bi(D,d,f,A),-1<d&&(Bt(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete s.g[c],s.h--)))):s&&(s=Ei(s))&&(c=s.g[c.toString()],s=-1,c&&(s=bi(c,d,f,A)),(d=-1<s?c[s]:null)&&Ln(d))}function Ln(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[Ke])ji(c.i,s);else{var d=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(d,f,s.capture):c.detachEvent?c.detachEvent(Mr(d),f):c.addListener&&c.removeListener&&c.removeListener(f),(d=Ei(c))?(ji(d,s),d.h==0&&(d.src=null,c[Ti]=null)):Bt(s)}}}function Mr(s){return s in Ni?Ni[s]:Ni[s]="on"+s}function No(s,c){if(s.da)s=!0;else{c=new ae(c,this);var d=s.listener,f=s.ha||s.src;s.fa&&Ln(s),s=d.call(f,c)}return s}function Ei(s){return s=s[Ti],s instanceof _n?s:null}var mn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fr(s){return typeof s=="function"?s:(s[mn]||(s[mn]=function(c){return s.handleEvent(c)}),s[mn])}function be(){H.call(this),this.i=new _n(this),this.M=this,this.F=null}N(be,H),be.prototype[Ke]=!0,be.prototype.removeEventListener=function(s,c,d,f){Or(this,s,c,d,f)};function Ee(s,c){var d,f=s.F;if(f)for(d=[];f;f=f.F)d.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new $(c,s);else if(c instanceof $)c.target=c.target||s;else{var A=c;c=new $(f,s),v(c,A)}if(A=!0,d)for(var D=d.length-1;0<=D;D--){var U=c.g=d[D];A=On(U,f,!0,c)&&A}if(U=c.g=s,A=On(U,f,!0,c)&&A,A=On(U,f,!1,c)&&A,d)for(D=0;D<d.length;D++)U=c.g=d[D],A=On(U,f,!1,c)&&A}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var d=s.g[c],f=0;f<d.length;f++)Bt(d[f]);delete s.g[c],s.h--}}this.F=null},be.prototype.K=function(s,c,d,f){return this.i.add(String(s),c,!1,d,f)},be.prototype.L=function(s,c,d,f){return this.i.add(String(s),c,!0,d,f)};function On(s,c,d,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,D=0;D<c.length;++D){var U=c[D];if(U&&!U.da&&U.capture==d){var re=U.listener,Pe=U.ha||U.src;U.fa&&ji(s.i,U),A=re.call(Pe,f)!==!1&&A}}return A&&!f.defaultPrevented}function W(s,c,d){if(typeof s=="function")d&&(s=S(s,d));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function Z(s){s.g=W(()=>{s.g=null,s.i&&(s.i=!1,Z(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Eo extends H{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Z(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gn(s){H.call(this),this.h=s,this.g={}}N(gn,H);var Ur=[];function zr(s){F(s.g,function(c,d){this.g.hasOwnProperty(d)&&Ln(c)},s),s.g={}}gn.prototype.N=function(){gn.aa.N.call(this),zr(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Po=u.JSON.stringify,wf=u.JSON.parse,kf=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Ao(){}Ao.prototype.h=null;function jc(s){return s.h||(s.h=s.i())}function Sf(){}var Pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Io(){$.call(this,"d")}N(Io,$);function Ro(){$.call(this,"c")}N(Ro,$);var Mn={},bc=null;function Do(){return bc=bc||new be}Mn.La="serverreachability";function Tc(s){$.call(this,Mn.La,s)}N(Tc,$);function Ai(s){const c=Do();Ee(c,new Tc(c))}Mn.STAT_EVENT="statevent";function Nc(s,c){$.call(this,Mn.STAT_EVENT,s),this.stat=c}N(Nc,$);function Ue(s){const c=Do();Ee(c,new Nc(c,s))}Mn.Ma="timingevent";function Ec(s,c){$.call(this,Mn.Ma,s),this.size=c}N(Ec,$);function Ii(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function Ri(){this.g=!0}Ri.prototype.xa=function(){this.g=!1};function Cf(s,c,d,f,A,D){s.info(function(){if(s.g)if(D)for(var U="",re=D.split("&"),Pe=0;Pe<re.length;Pe++){var q=re[Pe].split("=");if(1<q.length){var De=q[0];q=q[1];var _e=De.split("_");U=2<=_e.length&&_e[1]=="type"?U+(De+"="+q+"&"):U+(De+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+d+`
`+U})}function jf(s,c,d,f,A,D,U){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+d+`
`+D+" "+U})}function Fn(s,c,d,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Tf(s,d)+(f?" "+f:"")})}function bf(s,c){s.info(function(){return"TIMEOUT: "+c})}Ri.prototype.info=function(){};function Tf(s,c){if(!s.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(s=0;s<d.length;s++)if(Array.isArray(d[s])){var f=d[s];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var D=A[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<A.length;U++)A[U]=""}}}}return Po(d)}catch{return c}}var _o={NO_ERROR:0,TIMEOUT:8},Nf={},Lo;function Hr(){}N(Hr,Ao),Hr.prototype.g=function(){return new XMLHttpRequest},Hr.prototype.i=function(){return{}},Lo=new Hr;function Wt(s,c,d,f){this.j=s,this.i=c,this.l=d,this.R=f||1,this.U=new gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pc}function Pc(){this.i=null,this.g="",this.h=!1}var Ac={},Oo={};function Mo(s,c,d){s.L=1,s.v=$r(Pt(c)),s.m=d,s.P=!0,Ic(s,null)}function Ic(s,c){s.F=Date.now(),Br(s),s.A=Pt(s.v);var d=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),$c(d.i,"t",f),s.C=0,d=s.j.J,s.h=new Pc,s.g=cu(s.j,d?c:null,!s.m),0<s.O&&(s.M=new Eo(S(s.Y,s,s.g),s.O)),c=s.U,d=s.g,f=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ur[0]=A.toString()),A=Ur);for(var D=0;D<A.length;D++){var U=Lr(d,A[D],f||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),Ai(),Cf(s.i,s.u,s.A,s.l,s.R,s.m)}Wt.prototype.ca=function(s){s=s.target;const c=this.M;c&&At(s)==3?c.j():this.Y(s)},Wt.prototype.Y=function(s){try{if(s==this.g)e:{const _e=At(this.g);var c=this.g.Ba();const Hn=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||Jc(this.g)))){this.J||_e!=4||c==7||(c==8||0>=Hn?Ai(3):Ai(2)),Fo(this);var d=this.g.Z();this.X=d;t:if(Rc(this)){var f=Jc(this.g);s="";var A=f.length,D=At(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),Di(this);var U="";break t}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(D&&c==A-1)});f.length=0,this.h.g+=s,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,jf(this.i,this.u,this.A,this.l,this.R,_e,d),this.o){if(this.T&&!this.K){t:{if(this.g){var re,Pe=this.g;if((re=Pe.g?Pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(re)){var q=re;break t}}q=null}if(d=q)Fn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uo(this,d);else{this.o=!1,this.s=3,Ue(12),yn(this),Di(this);break e}}if(this.P){d=!0;let ut;for(;!this.J&&this.C<U.length;)if(ut=Ef(this,U),ut==Oo){_e==4&&(this.s=4,Ue(14),d=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(ut==Ac){this.s=4,Ue(15),Fn(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Fn(this.i,this.l,ut,null),Uo(this,ut);if(Rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||U.length!=0||this.h.h||(this.s=1,Ue(16),d=!1),this.o=this.o&&d,!d)Fn(this.i,this.l,U,"[Invalid Chunked Response]"),yn(this),Di(this);else if(0<U.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),$o(De),De.M=!0,Ue(11))}}else Fn(this.i,this.l,U,null),Uo(this,U);_e==4&&yn(this),this.o&&!this.J&&(_e==4?su(this.j,this):(this.o=!1,Br(this)))}else $f(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),yn(this),Di(this)}}}catch{}finally{}};function Rc(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Ef(s,c){var d=s.C,f=c.indexOf(`
`,d);return f==-1?Oo:(d=Number(c.substring(d,f)),isNaN(d)?Ac:(f+=1,f+d>c.length?Oo:(c=c.slice(f,f+d),s.C=f+d,c)))}Wt.prototype.cancel=function(){this.J=!0,yn(this)};function Br(s){s.S=Date.now()+s.I,Dc(s,s.I)}function Dc(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Ii(S(s.ba,s),c)}function Fo(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Wt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(bf(this.i,this.A),this.L!=2&&(Ai(),Ue(17)),yn(this),this.s=2,Di(this)):Dc(this,this.S-s)};function Di(s){s.j.G==0||s.J||su(s.j,s)}function yn(s){Fo(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,zr(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Uo(s,c){try{var d=s.j;if(d.G!=0&&(d.g==s||zo(d.h,s))){if(!s.K&&zo(d.h,s)&&d.G==3){try{var f=d.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<s.F)qr(d),Kr(d);else break e;Vo(d),Ue(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ii(S(d.Za,d),6e3));if(1>=Oc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else xn(d,11)}else if((s.K||d.g==s)&&qr(d),!w(c))for(A=d.Da.g.parse(c),c=0;c<A.length;c++){let q=A[c];if(d.T=q[0],q=q[1],d.G==2)if(q[0]=="c"){d.K=q[1],d.ia=q[2];const De=q[3];De!=null&&(d.la=De,d.j.info("VER="+d.la));const _e=q[4];_e!=null&&(d.Aa=_e,d.j.info("SVER="+d.Aa));const Hn=q[5];Hn!=null&&typeof Hn=="number"&&0<Hn&&(f=1.5*Hn,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const ut=s.g;if(ut){const Jr=ut.g?ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jr){var D=f.h;D.g||Jr.indexOf("spdy")==-1&&Jr.indexOf("quic")==-1&&Jr.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Ho(D,D.h),D.h=null))}if(f.D){const Go=ut.g?ut.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(f.ya=Go,le(f.I,f.D,Go))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-s.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var U=s;if(f.qa=lu(f,f.J?f.ia:null,f.W),U.K){Mc(f.h,U);var re=U,Pe=f.L;Pe&&(re.I=Pe),re.B&&(Fo(re),Br(re)),f.g=U}else iu(f);0<d.i.length&&Qr(d)}else q[0]!="stop"&&q[0]!="close"||xn(d,7);else d.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?xn(d,7):Wo(d):q[0]!="noop"&&d.l&&d.l.ta(q),d.v=0)}}Ai(4)}catch{}}var Pf=class{constructor(s,c){this.g=s,this.map=c}};function _c(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lc(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Oc(s){return s.h?1:s.g?s.g.size:0}function zo(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Ho(s,c){s.g?s.g.add(c):s.h=c}function Mc(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}_c.prototype.cancel=function(){if(this.i=Fc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Fc(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const d of s.g.values())c=c.concat(d.D);return c}return I(s.i)}function Af(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],d=s.length,f=0;f<d;f++)c.push(s[f]);return c}c=[],d=0;for(f in s)c[d++]=s[f];return c}function If(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var d=0;d<s;d++)c.push(d);return c}c=[],d=0;for(const f in s)c[d++]=f;return c}}}function Uc(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var d=If(s),f=Af(s),A=f.length,D=0;D<A;D++)c.call(void 0,f[D],d&&d[D],s)}var zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rf(s,c){if(s){s=s.split("&");for(var d=0;d<s.length;d++){var f=s[d].indexOf("="),A=null;if(0<=f){var D=s[d].substring(0,f);A=s[d].substring(f+1)}else D=s[d];c(D,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function vn(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof vn){this.h=s.h,Wr(this,s.j),this.o=s.o,this.g=s.g,Vr(this,s.s),this.l=s.l;var c=s.i,d=new Oi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Hc(this,d),this.m=s.m}else s&&(c=String(s).match(zc))?(this.h=!1,Wr(this,c[1]||"",!0),this.o=_i(c[2]||""),this.g=_i(c[3]||"",!0),Vr(this,c[4]),this.l=_i(c[5]||"",!0),Hc(this,c[6]||"",!0),this.m=_i(c[7]||"")):(this.h=!1,this.i=new Oi(null,this.h))}vn.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Li(c,Bc,!0),":");var d=this.g;return(d||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Li(c,Bc,!0),"@"),s.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&s.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&s.push("/"),s.push(Li(d,d.charAt(0)=="/"?Lf:_f,!0))),(d=this.i.toString())&&s.push("?",d),(d=this.m)&&s.push("#",Li(d,Mf)),s.join("")};function Pt(s){return new vn(s)}function Wr(s,c,d){s.j=d?_i(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Vr(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function Hc(s,c,d){c instanceof Oi?(s.i=c,Ff(s.i,s.h)):(d||(c=Li(c,Of)),s.i=new Oi(c,s.h))}function le(s,c,d){s.i.set(c,d)}function $r(s){return le(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function _i(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Li(s,c,d){return typeof s=="string"?(s=encodeURI(s).replace(c,Df),d&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Df(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Bc=/[#\/\?@]/g,_f=/[#\?:]/g,Lf=/[#\?]/g,Of=/[#\?@]/g,Mf=/#/g;function Oi(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Vt(s){s.g||(s.g=new Map,s.h=0,s.i&&Rf(s.i,function(c,d){s.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}e=Oi.prototype,e.add=function(s,c){Vt(this),this.i=null,s=Un(this,s);var d=this.g.get(s);return d||this.g.set(s,d=[]),d.push(c),this.h+=1,this};function Wc(s,c){Vt(s),c=Un(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Vc(s,c){return Vt(s),c=Un(s,c),s.g.has(c)}e.forEach=function(s,c){Vt(this),this.g.forEach(function(d,f){d.forEach(function(A){s.call(c,A,f,this)},this)},this)},e.na=function(){Vt(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let f=0;f<c.length;f++){const A=s[f];for(let D=0;D<A.length;D++)d.push(c[f])}return d},e.V=function(s){Vt(this);let c=[];if(typeof s=="string")Vc(this,s)&&(c=c.concat(this.g.get(Un(this,s))));else{s=Array.from(this.g.values());for(let d=0;d<s.length;d++)c=c.concat(s[d])}return c},e.set=function(s,c){return Vt(this),this.i=null,s=Un(this,s),Vc(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},e.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function $c(s,c,d){Wc(s,c),0<d.length&&(s.i=null,s.g.set(Un(s,c),I(d)),s.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var f=c[d];const D=encodeURIComponent(String(f)),U=this.V(f);for(f=0;f<U.length;f++){var A=D;U[f]!==""&&(A+="="+encodeURIComponent(String(U[f]))),s.push(A)}}return this.i=s.join("&")};function Un(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Ff(s,c){c&&!s.j&&(Vt(s),s.i=null,s.g.forEach(function(d,f){var A=f.toLowerCase();f!=A&&(Wc(this,f),$c(this,A,d))},s)),s.j=c}function Uf(s,c){const d=new Ri;if(u.Image){const f=new Image;f.onload=T($t,d,"TestLoadImage: loaded",!0,c,f),f.onerror=T($t,d,"TestLoadImage: error",!1,c,f),f.onabort=T($t,d,"TestLoadImage: abort",!1,c,f),f.ontimeout=T($t,d,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function zf(s,c){const d=new Ri,f=new AbortController,A=setTimeout(()=>{f.abort(),$t(d,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(D=>{clearTimeout(A),D.ok?$t(d,"TestPingServer: ok",!0,c):$t(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),$t(d,"TestPingServer: error",!1,c)})}function $t(s,c,d,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(d)}catch{}}function Hf(){this.g=new kf}function Bf(s,c,d){const f=d||"";try{Uc(s,function(A,D){let U=A;g(A)&&(U=Po(A)),c.push(f+D+"="+encodeURIComponent(U))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function Gr(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Gr,Ao),Gr.prototype.g=function(){return new Yr(this.l,this.j)},Gr.prototype.i=function(s){return function(){return s}}({});function Yr(s,c){be.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Yr,be),e=Yr.prototype,e.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Fi(this)},e.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=0},e.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gc(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gc(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}e.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Mi(this):Fi(this),this.readyState==3&&Gc(this)}},e.Ra=function(s){this.g&&(this.response=this.responseText=s,Mi(this))},e.Qa=function(s){this.g&&(this.response=s,Mi(this))},e.ga=function(){this.g&&Mi(this)};function Mi(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Fi(s)}e.setRequestHeader=function(s,c){this.u.append(s,c)},e.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,s.push(d[0]+": "+d[1]),d=c.next();return s.join(`\r
`)};function Fi(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Yc(s){let c="";return F(s,function(d,f){c+=f,c+=":",c+=d,c+=`\r
`}),c}function Bo(s,c,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=Yc(d),typeof s=="string"?d!=null&&encodeURIComponent(String(d)):le(s,c,d))}function ve(s){be.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ve,be);var Wf=/^https?$/i,Vf=["POST","PUT"];e=ve.prototype,e.Ha=function(s){this.J=s},e.ea=function(s,c,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lo.g(),this.v=this.o?jc(this.o):jc(Lo),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(D){Xc(this,D);return}if(s=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)d.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const D of f.keys())d.set(D,f.get(D));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),A=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Vf,c,void 0))||f||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qc(this),this.u=!0,this.g.send(s),this.u=!1}catch(D){Xc(this,D)}};function Xc(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Kc(s),Xr(s)}function Kc(s){s.A||(s.A=!0,Ee(s,"complete"),Ee(s,"error"))}e.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ee(this,"complete"),Ee(this,"abort"),Xr(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xr(this,!0)),ve.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Qc(this):this.bb())},e.bb=function(){Qc(this)};function Qc(s){if(s.h&&typeof l<"u"&&(!s.v[1]||At(s)!=4||s.Z()!=2)){if(s.u&&At(s)==4)W(s.Ea,0,s);else if(Ee(s,"readystatechange"),At(s)==4){s.h=!1;try{const U=s.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var f;if(f=U===0){var A=String(s.D).match(zc)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Wf.test(A?A.toLowerCase():"")}d=f}if(d)Ee(s,"complete"),Ee(s,"success");else{s.m=6;try{var D=2<At(s)?s.g.statusText:""}catch{D=""}s.l=D+" ["+s.Z()+"]",Kc(s)}}finally{Xr(s)}}}}function Xr(s,c){if(s.g){qc(s);const d=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||Ee(s,"ready");try{d.onreadystatechange=f}catch{}}}function qc(s){s.I&&(u.clearTimeout(s.I),s.I=null)}e.isActive=function(){return!!this.g};function At(s){return s.g?s.g.readyState:0}e.Z=function(){try{return 2<At(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),wf(c)}};function Jc(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function $f(s){const c={};s=(s.g&&2<=At(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(w(s[f]))continue;var d=k(s[f]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[A]||[];c[A]=D,D.push(d)}C(c,function(f){return f.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(s,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[s]||c}function Zc(s){this.Aa=0,this.i=[],this.j=new Ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ui("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ui("baseRetryDelayMs",5e3,s),this.cb=Ui("retryDelaySeedMs",1e4,s),this.Wa=Ui("forwardChannelMaxRetries",2,s),this.wa=Ui("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new _c(s&&s.concurrentRequestLimit),this.Da=new Hf,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Zc.prototype,e.la=8,e.G=1,e.connect=function(s,c,d,f){Ue(0),this.W=s,this.H=c||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=lu(this,null,this.W),Qr(this)};function Wo(s){if(eu(s),s.G==3){var c=s.U++,d=Pt(s.I);if(le(d,"SID",s.K),le(d,"RID",c),le(d,"TYPE","terminate"),zi(s,d),c=new Wt(s,s.j,c),c.L=2,c.v=$r(Pt(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=c.v,d=!0),d||(c.g=cu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Br(c)}au(s)}function Kr(s){s.g&&($o(s),s.g.cancel(),s.g=null)}function eu(s){Kr(s),s.u&&(u.clearTimeout(s.u),s.u=null),qr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Qr(s){if(!Lc(s.h)&&!s.s){s.s=!0;var c=s.Ga;Se||G(),z||(Se(),z=!0),V.add(c,s),s.B=0}}function Gf(s,c){return Oc(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Ii(S(s.Ga,s,c),ou(s,s.B)),s.B++,!0)}e.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new Wt(this,this.j,s);let D=this.o;if(this.S&&(D?(D=p(D),v(D,this.S)):D=this.S),this.m!==null||this.O||(A.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=nu(this,A,c),d=Pt(this.I),le(d,"RID",s),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),zi(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(Yc(D)))+"&"+c:this.m&&Bo(d,this.m,D)),Ho(this.h,A),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",c),le(d,"SID","null"),A.T=!0,Mo(A,d,null)):Mo(A,d,c),this.G=2}}else this.G==3&&(s?tu(this,s):this.i.length==0||Lc(this.h)||tu(this))};function tu(s,c){var d;c?d=c.l:d=s.U++;const f=Pt(s.I);le(f,"SID",s.K),le(f,"RID",d),le(f,"AID",s.T),zi(s,f),s.m&&s.o&&Bo(f,s.m,s.o),d=new Wt(s,s.j,d,s.B+1),s.m===null&&(d.H=s.o),c&&(s.i=c.D.concat(s.i)),c=nu(s,d,1e3),d.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ho(s.h,d),Mo(d,f,c)}function zi(s,c){s.H&&F(s.H,function(d,f){le(c,f,d)}),s.l&&Uc({},function(d,f){le(c,f,d)})}function nu(s,c,d){d=Math.min(s.i.length,d);var f=s.l?S(s.l.Na,s.l,s):null;e:{var A=s.i;let D=-1;for(;;){const U=["count="+d];D==-1?0<d?(D=A[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let re=!0;for(let Pe=0;Pe<d;Pe++){let q=A[Pe].g;const De=A[Pe].map;if(q-=D,0>q)D=Math.max(0,A[Pe].g-100),re=!1;else try{Bf(De,U,"req"+q+"_")}catch{f&&f(De)}}if(re){f=U.join("&");break e}}}return s=s.i.splice(0,d),c.D=s,f}function iu(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;Se||G(),z||(Se(),z=!0),V.add(c,s),s.v=0}}function Vo(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Ii(S(s.Fa,s),ou(s,s.v)),s.v++,!0)}e.Fa=function(){if(this.u=null,ru(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Ii(S(this.ab,this),s)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ue(10),Kr(this),ru(this))};function $o(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function ru(s){s.g=new Wt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=Pt(s.qa);le(c,"RID","rpc"),le(c,"SID",s.K),le(c,"AID",s.T),le(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&le(c,"TO",s.ja),le(c,"TYPE","xmlhttp"),zi(s,c),s.m&&s.o&&Bo(c,s.m,s.o),s.L&&(s.g.I=s.L);var d=s.g;s=s.ia,d.L=1,d.v=$r(Pt(c)),d.m=null,d.P=!0,Ic(d,s)}e.Za=function(){this.C!=null&&(this.C=null,Kr(this),Vo(this),Ue(19))};function qr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function su(s,c){var d=null;if(s.g==c){qr(s),$o(s),s.g=null;var f=2}else if(zo(s.h,c))d=c.D,Mc(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var A=s.B;f=Do(),Ee(f,new Ec(f,d)),Qr(s)}else iu(s);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Gf(s,c)||f==2&&Vo(s)))switch(d&&0<d.length&&(c=s.h,c.i=c.i.concat(d)),A){case 1:xn(s,5);break;case 4:xn(s,10);break;case 3:xn(s,6);break;default:xn(s,2)}}}function ou(s,c){let d=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(d*=2),d*c}function xn(s,c){if(s.j.info("Error code "+c),c==2){var d=S(s.fb,s),f=s.Xa;const A=!f;f=new vn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Wr(f,"https"),$r(f),A?Uf(f.toString(),d):zf(f.toString(),d)}else Ue(2);s.G=0,s.l&&s.l.sa(c),au(s),eu(s)}e.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function au(s){if(s.G=0,s.ka=[],s.l){const c=Fc(s.h);(c.length!=0||s.i.length!=0)&&(L(s.ka,c),L(s.ka,s.i),s.h.i.length=0,I(s.i),s.i.length=0),s.l.ra()}}function lu(s,c,d){var f=d instanceof vn?Pt(d):new vn(d);if(f.g!="")c&&(f.g=c+"."+f.g),Vr(f,f.s);else{var A=u.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var D=new vn(null);f&&Wr(D,f),c&&(D.g=c),A&&Vr(D,A),d&&(D.l=d),f=D}return d=s.D,c=s.ya,d&&c&&le(f,d,c),le(f,"VER",s.la),zi(s,f),f}function cu(s,c,d){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ve(new Gr({eb:d})):new ve(s.pa),c.Ha(s.J),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function uu(){}e=uu.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function it(s,c){be.call(this),this.g=new Zc(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!w(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new zn(this)}N(it,be),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){Wo(this.g)},it.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var d={};d.__data__=s,s=d}else this.u&&(d={},d.__data__=Po(s),s=d);c.i.push(new Pf(c.Ya++,s)),c.G==3&&Qr(c)},it.prototype.N=function(){this.g.l=null,delete this.j,Wo(this.g),delete this.g,it.aa.N.call(this)};function du(s){Io.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const d in c){s=d;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}N(du,Io);function hu(){Ro.call(this),this.status=1}N(hu,Ro);function zn(s){this.g=s}N(zn,uu),zn.prototype.ua=function(){Ee(this.g,"a")},zn.prototype.ta=function(s){Ee(this.g,new du(s))},zn.prototype.sa=function(s){Ee(this.g,new hu)},zn.prototype.ra=function(){Ee(this.g,"b")},it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,_o.NO_ERROR=0,_o.TIMEOUT=8,_o.HTTP_ERROR=6,Nf.COMPLETE="complete",Sf.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",be.prototype.listen=be.prototype.K,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha}).apply(typeof gs<"u"?gs:typeof self<"u"?self:typeof window<"u"?window:{});const Ud="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let So="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new uf("@firebase/firestore");function xt(e,...t){if(io.logLevel<=se.DEBUG){const n=t.map(yf);io.debug(`Firestore (${So}): ${e}`,...n)}}function gf(e,...t){if(io.logLevel<=se.ERROR){const n=t.map(yf);io.error(`Firestore (${So}): ${e}`,...n)}}function yf(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(e="Unexpected state"){const t=`FIRESTORE (${So}) INTERNAL ASSERTION FAILED: `+e;throw gf(t),new Error(t)}function cr(e,t){e||vf()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class yt extends Ci{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class hv{constructor(t){this.t=t,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){cr(this.o===void 0);let i=this.i;const o=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let a=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new ur,t.enqueueRetryable(()=>o(this.currentUser))};const l=()=>{const h=a;t.enqueueRetryable(async()=>{await h.promise,await o(this.currentUser)})},u=h=>{xt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(xt("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new ur)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(xt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(cr(typeof i.accessToken=="string"),new uv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return cr(t===null||typeof t=="string"),new qe(t)}}class pv{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fv{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new pv(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gv{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){cr(this.o===void 0);const i=a=>{a.error!=null&&xt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,xt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>i(a))};const o=a=>{xt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?o(a):xt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(cr(typeof n.token=="string"),this.R=n.token,new mv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function yv(e){return e.name==="IndexedDbTransactionError"}class ro{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ro&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zd,K;(K=zd||(zd={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new mf([4294967295,4294967295],0);function Ca(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(t,n,i=1e3,o=1.5,a=6e4){this.ui=t,this.timerId=n,this.ko=i,this.qo=o,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,n-i);o>0&&xt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,n,i,o,a){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=o,this.removalCallback=a,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,o,a){const l=Date.now()+i,u=new Cc(t,n,l,o,a);return u.start(i),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new yt(gt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Hd,Bd;(Bd=Hd||(Hd={})).ea="default",Bd.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Map;function wv(e,t,n,i){if(t===!0&&i===!0)throw new yt(gt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new yt(gt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new yt(gt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xv((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new yt(gt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new yt(gt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new yt(gt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kv{constructor(t,n,i,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new yt(gt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new yt(gt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vd(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new dv;switch(i.type){case"firstParty":return new fv(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new yt(gt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Wd.get(n);i&&(xt("ComponentProvider","Removing Datastore"),Wd.delete(n),i.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vv(this,"async_queue_retry"),this.Vu=()=>{const i=Ca();i&&xt("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const n=Ca();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Ca();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new ur;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!yv(t))throw t;xt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const o=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(i);throw gf("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=n,n}enqueueAfterDelay(t,n,i){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const o=Cc.createAndSchedule(this,t,n,i,a=>this.yu(a));return this.Tu.push(o),o}fu(){this.Eu&&vf()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Sv extends kv{constructor(t,n,i,o){super(t,n,i,o),this.type="firestore",this._queue=new $d,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $d(t),this._firestoreClient=void 0,await t}}}(function(t,n=!0){(function(o){So=o})(J0),no(new to("firestore",(i,{instanceIdentifier:o,options:a})=>{const l=i.getProvider("app").getImmediate(),u=new Sv(new hv(i.getProvider("auth-internal")),new gv(i.getProvider("app-check-internal")),function(g,P){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new yt(gt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(g.options.projectId,P)}(l,o),l);return a=Object.assign({useFetchStreams:n},a),u._setSettings(a),u},"PUBLIC").setMultipleInstances(!0)),ci(Ud,"4.7.3",t),ci(Ud,"4.7.3","esm2017")})();const Cv=async e=>null,jv=(e,t)=>(t([]),()=>{}),bv=(e,t)=>(t([]),()=>{}),Tv=async(e,t)=>null,Nv=async(e,t)=>{},Ev=({onLogin:e,onTeacherMode:t})=>{const[n,i]=_.useState("student"),[o,a]=_.useState(""),[l,u]=_.useState(""),[h,g]=_.useState(""),[P,E]=_.useState(""),[S,T]=_.useState(""),[N,I]=_.useState(!1),[L,m]=_.useState("");return r.jsx("div",{className:"login-container",children:r.jsxs("div",{className:"login-card",children:[r.jsxs("div",{className:"login-header",children:[r.jsx("h1",{children:"CyberEd Range"}),r.jsx("p",{children:"Setup Required"})]}),r.jsxs("div",{className:"setup-warning",children:[r.jsx("h3",{children:"Firebase Configuration Needed"}),r.jsx("p",{children:"To enable multi-student mode, please configure Firebase:"}),r.jsxs("ol",{children:[r.jsxs("li",{children:["Create a Firebase project at ",r.jsx("a",{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer",children:"console.firebase.google.com"})]}),r.jsx("li",{children:"Enable Firestore Database"}),r.jsxs("li",{children:["Copy your config to ",r.jsx("code",{children:"src/config/firebase.js"})]}),r.jsxs("li",{children:["Or create a ",r.jsx("code",{children:".env"})," file with VITE_FIREBASE_* variables"]})]}),r.jsx("button",{className:"btn-primary",onClick:()=>e({id:"demo",name:"Demo User",classCode:"DEMO"}),children:"Continue in Demo Mode"})]})]})})},Pv=({classCode:e,assignments:t,onAssignmentCreated:n})=>{const[i,o]=_.useState(null),[a,l]=_.useState(null),u=E=>t.some(S=>S.type===E),h=async E=>{if(u(E)){alert(`${de[E].name} is already assigned to this class.`);return}o(E);try{const S=de[E].units.map(T=>T.id);await Tv(e,{type:E,items:S,title:de[E].name}),n&&n()}catch(S){console.error("Error creating assignment:",S),alert("Failed to create assignment. Please try again.")}finally{o(null)}},g=async E=>{if(confirm("Are you sure you want to remove this module assignment?")){l(E);try{await Nv(e,E)}catch(S){console.error("Error deleting assignment:",S),alert("Failed to delete assignment.")}finally{l(null)}}},P=E=>E?new Date(E).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Unknown";return r.jsxs("div",{className:"assignment-manager",children:[r.jsxs("div",{className:"am-header",children:[r.jsx("h3",{children:"Module Assignments"}),r.jsx("p",{className:"am-subtitle",children:"Assign entire modules to give students access to all content within."})]}),r.jsxs("div",{className:"am-modules",children:[r.jsxs("div",{className:`am-module-card cyber ${u("cyber-range")?"assigned":""}`,children:[r.jsx("div",{className:"am-module-icon",children:de["cyber-range"].icon}),r.jsxs("div",{className:"am-module-info",children:[r.jsx("h4",{children:de["cyber-range"].name}),r.jsx("p",{children:de["cyber-range"].description}),r.jsxs("span",{className:"am-module-count",children:[de["cyber-range"].units.length," categories"]})]}),r.jsx("div",{className:"am-module-action",children:u("cyber-range")?r.jsxs("div",{className:"am-assigned-info",children:[r.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),r.jsx("button",{className:"am-remove-btn",onClick:()=>{const E=t.find(S=>S.type==="cyber-range");E&&g(E.id)},disabled:a,children:"Remove"})]}):r.jsx("button",{className:"am-btn cyber",onClick:()=>h("cyber-range"),disabled:i==="cyber-range",children:i==="cyber-range"?"Assigning...":"Assign Module"})})]}),r.jsxs("div",{className:`am-module-card programming ${u("arrays-loops")?"assigned":""}`,children:[r.jsx("div",{className:"am-module-icon",children:de["arrays-loops"].icon}),r.jsxs("div",{className:"am-module-info",children:[r.jsx("h4",{children:de["arrays-loops"].name}),r.jsx("p",{children:de["arrays-loops"].description}),r.jsxs("span",{className:"am-module-count",children:[de["arrays-loops"].units.length," weeks"]})]}),r.jsx("div",{className:"am-module-action",children:u("arrays-loops")?r.jsxs("div",{className:"am-assigned-info",children:[r.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),r.jsx("button",{className:"am-remove-btn",onClick:()=>{const E=t.find(S=>S.type==="arrays-loops");E&&g(E.id)},disabled:a,children:"Remove"})]}):r.jsx("button",{className:"am-btn programming",onClick:()=>h("arrays-loops"),disabled:i==="arrays-loops",children:i==="arrays-loops"?"Assigning...":"Assign Module"})})]}),r.jsxs("div",{className:`am-module-card apcsp ${u("ap-csp")?"assigned":""}`,children:[r.jsx("div",{className:"am-module-icon",children:de["ap-csp"].icon}),r.jsxs("div",{className:"am-module-info",children:[r.jsx("h4",{children:de["ap-csp"].name}),r.jsx("p",{children:de["ap-csp"].description}),r.jsxs("span",{className:"am-module-count",children:[de["ap-csp"].units.length," modules"]})]}),r.jsx("div",{className:"am-module-action",children:u("ap-csp")?r.jsxs("div",{className:"am-assigned-info",children:[r.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),r.jsx("button",{className:"am-remove-btn",onClick:()=>{const E=t.find(S=>S.type==="ap-csp");E&&g(E.id)},disabled:a,children:"Remove"})]}):r.jsx("button",{className:"am-btn apcsp",onClick:()=>h("ap-csp"),disabled:i==="ap-csp",children:i==="ap-csp"?"Assigning...":"Assign Module"})})]})]}),t.length>0&&r.jsxs("div",{className:"am-current",children:[r.jsx("h4",{children:"Current Assignments"}),t.map(E=>{var S,T,N;return r.jsxs("div",{className:"am-current-item",children:[r.jsxs("span",{className:"am-type-badge",style:{backgroundColor:((S=de[E.type])==null?void 0:S.color)||"#888"},children:[(T=de[E.type])==null?void 0:T.icon," ",(N=de[E.type])==null?void 0:N.name]}),r.jsxs("span",{className:"am-date",children:["Assigned: ",P(E.assignedAt)]})]},E.id)})]})]})},Av=({classCode:e})=>{const[t,n]=_.useState(null),[i,o]=_.useState(null),[a,l]=_.useState(null),[u,h]=_.useState("list"),g=(N,I)=>{if(N==="cyber-range")return yi[I]||[];if(N==="arrays-loops"){const L=wc[I];if(!L||!L.days)return[];const m=[];return L.days.forEach(w=>{w.exercises&&w.exercises.forEach(j=>{m.push({...j,dayTitle:w.title,dayNumber:w.day})})}),m}else if(N==="ap-csp")return[];return[]},P=N=>{n(N),o(null),l(null),h("list")},E=N=>{o(N),l(null),h("list")},S=()=>{a?l(null):i?(o(null),h("list")):t&&n(null)},T=()=>{window.print()};if(!t)return r.jsxs("div",{className:"activity-manager",children:[r.jsxs("div",{className:"am-header",children:[r.jsx("h3",{children:"Activity Manager & Answer Keys"}),r.jsx("p",{className:"am-subtitle",children:"View activities, exemplar responses, and answer keys for each module"})]}),r.jsx("div",{className:"am-modules",children:Object.entries(de).map(([N,I])=>r.jsxs("div",{className:`am-module-card ${N}`,onClick:()=>P(N),style:{cursor:"pointer"},children:[r.jsx("div",{className:"am-module-icon",children:I.icon}),r.jsxs("div",{className:"am-module-info",children:[r.jsx("h4",{children:I.name}),r.jsx("p",{children:I.description}),r.jsxs("span",{className:"am-module-count",children:[I.units.length," ",N==="arrays-loops"?"weeks":"units"]})]}),r.jsx("div",{className:"am-module-arrow",children:"→"})]},N))})]});if(t&&!i){const N=de[t];return r.jsxs("div",{className:"activity-manager",children:[r.jsxs("div",{className:"am-header",children:[r.jsx("button",{className:"am-back-btn",onClick:S,children:"← Back"}),r.jsxs("h3",{children:[N.icon," ",N.name]}),r.jsx("p",{className:"am-subtitle",children:"Select a unit to view activities and answer keys"})]}),r.jsx("div",{className:"am-units-list",children:N.units.map(I=>{const L=g(t,I.id);return r.jsxs("div",{className:"am-unit-card",onClick:()=>E(I.id),style:{cursor:"pointer"},children:[r.jsxs("div",{className:"am-unit-info",children:[r.jsx("h4",{children:I.name}),r.jsx("p",{children:I.description})]}),r.jsxs("div",{className:"am-unit-stats",children:[r.jsxs("span",{className:"am-activity-count",children:[L.length," activities"]}),r.jsx("span",{className:"am-arrow",children:"→"})]})]},I.id)})})]})}if(t&&i&&!a){const I=de[t].units.find(m=>m.id===i),L=g(t,i);return r.jsxs("div",{className:"activity-manager",children:[r.jsxs("div",{className:"am-header",children:[r.jsx("button",{className:"am-back-btn",onClick:S,children:"← Back"}),r.jsx("h3",{children:(I==null?void 0:I.name)||i}),r.jsxs("p",{className:"am-subtitle",children:[L.length," activities"]})]}),r.jsxs("div",{className:"am-view-toggle",children:[r.jsx("button",{className:`am-toggle-btn ${u==="list"?"active":""}`,onClick:()=>h("list"),children:"Activity List"}),r.jsx("button",{className:`am-toggle-btn ${u==="answerKey"?"active":""}`,onClick:()=>h("answerKey"),children:"📋 Answer Key"}),u==="answerKey"&&r.jsx("button",{className:"am-print-btn",onClick:T,children:"🖨️ Print"})]}),u==="list"?r.jsx("div",{className:"am-activities-list",children:L.length===0?r.jsxs("div",{className:"am-empty",children:[r.jsx("p",{children:"No activities found for this unit."}),r.jsx("p",{className:"am-empty-hint",children:"Activities for AP CSP modules are managed in the pseudocode and flowchart data files."})]}):L.map((m,w)=>r.jsxs("div",{className:"am-activity-card",children:[r.jsxs("div",{className:"am-activity-header",children:[r.jsxs("span",{className:"am-activity-number",children:["#",w+1]}),r.jsx("h4",{children:m.title||m.name||`Activity ${w+1}`}),m.difficulty&&r.jsx("span",{className:`am-difficulty ${m.difficulty.toLowerCase()}`,children:m.difficulty})]}),r.jsxs("div",{className:"am-activity-body",children:[m.description&&r.jsx("p",{className:"am-activity-desc",children:m.description}),m.dayTitle&&r.jsxs("p",{className:"am-activity-day",children:["Day ",m.dayNumber,": ",m.dayTitle]}),r.jsx("div",{className:"am-activity-meta",children:m.points&&r.jsxs("span",{className:"am-points",children:[m.points," pts"]})})]}),r.jsx("div",{className:"am-activity-actions",children:r.jsx("button",{className:"am-view-btn",onClick:()=>l(m),children:"View Details & Answer"})})]},m.id||w))}):r.jsxs("div",{className:"am-answer-key",children:[r.jsxs("div",{className:"am-answer-key-header",children:[r.jsxs("h2",{children:["📋 Answer Key: ",I==null?void 0:I.name]}),r.jsx("p",{children:"Exemplar responses and solutions for all activities"})]}),L.map((m,w)=>r.jsxs("div",{className:"am-answer-item",children:[r.jsxs("div",{className:"am-answer-question",children:[r.jsxs("span",{className:"am-answer-num",children:["#",w+1]}),r.jsxs("div",{className:"am-answer-title",children:[r.jsx("strong",{children:m.title||m.name}),r.jsxs("span",{className:"am-answer-points",children:[m.points," pts"]})]})]}),m.prompt&&r.jsxs("div",{className:"am-answer-prompt",children:[r.jsx("label",{children:"Challenge/Prompt:"}),r.jsx("pre",{children:m.prompt})]}),r.jsxs("div",{className:"am-answer-response",children:[m.flag&&r.jsxs("div",{className:"am-answer-box flag",children:[r.jsx("label",{children:"🚩 Flag:"}),r.jsx("code",{children:m.flag})]}),m.answer&&r.jsxs("div",{className:"am-answer-box answer",children:[r.jsx("label",{children:"✓ Answer:"}),r.jsx("code",{children:typeof m.answer=="object"?JSON.stringify(m.answer):m.answer})]}),m.explanation&&r.jsxs("div",{className:"am-answer-box explanation",children:[r.jsx("label",{children:"📝 Explanation:"}),r.jsx("p",{children:m.explanation})]}),m.solutionCode&&r.jsxs("div",{className:"am-answer-box solution",children:[r.jsx("label",{children:"💻 Exemplar Code Solution:"}),r.jsx("pre",{className:"am-code-block",children:m.solutionCode})]}),m.rubric&&r.jsxs("div",{className:"am-answer-box rubric",children:[r.jsx("label",{children:"📊 Grading Rubric:"}),r.jsx("ul",{className:"am-rubric-list",children:Object.entries(m.rubric).map(([j,R])=>r.jsxs("li",{children:[r.jsxs("strong",{children:[j,":"]})," ",R]},j))})]}),m.hints&&m.hints.length>0&&r.jsxs("div",{className:"am-answer-box hints",children:[r.jsx("label",{children:"💡 Hints (for scaffolding):"}),r.jsx("ol",{children:m.hints.map((j,R)=>r.jsx("li",{children:j},R))})]}),m.learningObjective&&r.jsxs("div",{className:"am-answer-box objective",children:[r.jsx("label",{children:"🎯 Learning Objective:"}),r.jsx("p",{children:m.learningObjective})]})]})]},m.id||w))]})]})}return a?r.jsxs("div",{className:"activity-manager",children:[r.jsxs("div",{className:"am-header",children:[r.jsx("button",{className:"am-back-btn",onClick:S,children:"← Back to List"}),r.jsx("h3",{children:a.title||a.name}),r.jsx("button",{className:"am-print-btn",onClick:T,children:"🖨️ Print"})]}),r.jsxs("div",{className:"am-activity-detail",children:[r.jsxs("div",{className:"am-detail-section",children:[r.jsx("h4",{children:"📋 Activity Overview"}),r.jsxs("div",{className:"am-detail-row",children:[r.jsx("label",{children:"Title:"}),r.jsx("span",{children:a.title||a.name})]}),a.difficulty&&r.jsxs("div",{className:"am-detail-row",children:[r.jsx("label",{children:"Difficulty:"}),r.jsx("span",{className:`am-difficulty ${a.difficulty.toLowerCase()}`,children:a.difficulty})]}),a.points&&r.jsxs("div",{className:"am-detail-row",children:[r.jsx("label",{children:"Points:"}),r.jsx("span",{children:a.points})]}),a.dayTitle&&r.jsxs("div",{className:"am-detail-row",children:[r.jsx("label",{children:"Day:"}),r.jsxs("span",{children:["Day ",a.dayNumber,": ",a.dayTitle]})]})]}),a.description&&r.jsxs("div",{className:"am-detail-section",children:[r.jsx("h4",{children:"📖 Description"}),r.jsx("p",{children:a.description})]}),a.learningObjective&&r.jsxs("div",{className:"am-detail-section objective",children:[r.jsx("h4",{children:"🎯 Learning Objective"}),r.jsx("p",{children:a.learningObjective})]}),a.prompt&&r.jsxs("div",{className:"am-detail-section",children:[r.jsx("h4",{children:"❓ Challenge/Prompt"}),r.jsx("pre",{className:"am-prompt-block",children:a.prompt})]}),r.jsxs("div",{className:"am-teacher-section",children:[r.jsx("h4",{children:"🔑 TEACHER ANSWER KEY"}),a.flag&&r.jsxs("div",{className:"am-answer-box flag",children:[r.jsx("label",{children:"🚩 Flag:"}),r.jsx("code",{className:"am-flag",children:a.flag})]}),a.answer&&r.jsxs("div",{className:"am-answer-box answer",children:[r.jsx("label",{children:"✓ Correct Answer:"}),r.jsx("code",{className:"am-answer",children:typeof a.answer=="object"?JSON.stringify(a.answer,null,2):a.answer})]}),a.solutionCode&&r.jsxs("div",{className:"am-answer-box solution",children:[r.jsx("label",{children:"💻 Exemplar Code Solution:"}),r.jsx("pre",{className:"am-code-block",children:a.solutionCode})]}),a.explanation&&r.jsxs("div",{className:"am-answer-box explanation",children:[r.jsx("label",{children:"📝 Explanation for Students:"}),r.jsx("p",{children:a.explanation})]})]}),a.hints&&a.hints.length>0&&r.jsxs("div",{className:"am-detail-section",children:[r.jsx("h4",{children:"💡 Hints (for scaffolding)"}),r.jsx("ol",{className:"am-hints-list",children:a.hints.map((N,I)=>r.jsx("li",{children:N},I))})]}),a.rubric&&r.jsxs("div",{className:"am-detail-section rubric",children:[r.jsx("h4",{children:"📊 Grading Rubric"}),r.jsxs("table",{className:"am-rubric-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Criterion"}),r.jsx("th",{children:"Description"})]})}),r.jsx("tbody",{children:Object.entries(a.rubric).map(([N,I])=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("strong",{children:N})}),r.jsx("td",{children:I})]},N))})]})]}),a.vocabularyTerms&&a.vocabularyTerms.length>0&&r.jsxs("div",{className:"am-detail-section",children:[r.jsx("h4",{children:"📚 Related Vocabulary"}),r.jsx("div",{className:"am-vocab-tags",children:a.vocabularyTerms.map((N,I)=>r.jsx("span",{className:"am-vocab-tag",children:N},I))})]})]})]}):null},Iv=({classCode:e,onBack:t})=>{var F,C,p,y;const[n,i]=_.useState([]),[o,a]=_.useState(null),[l,u]=_.useState([]),[h,g]=_.useState(!0),[P,E]=_.useState(null),[S,T]=_.useState("points"),[N,I]=_.useState("students"),L=Object.values(yi).flat().length,m=vt.length;_.useEffect(()=>{(async()=>{const x=await Cv();a(x)})();const k=jv(e,x=>{i(x),g(!1)}),b=bv(e,x=>{u(x)});return()=>{k(),b()}},[e]);const w=[...n].sort((v,k)=>{var b,x;switch(S){case"points":return k.totalPoints-v.totalPoints;case"name":return v.name.localeCompare(k.name);case"activity":const Y=((b=v.lastActivity)==null?void 0:b.getTime())||0;return(((x=k.lastActivity)==null?void 0:x.getTime())||0)-Y;default:return 0}}),j=v=>{if(!v)return{status:"never",label:"Never active",color:"#666"};const b=new Date-v,x=Math.floor(b/6e4);if(x<5)return{status:"active",label:"Active now",color:"#4caf50"};if(x<30)return{status:"recent",label:`${x}m ago`,color:"#ff9800"};if(x<60)return{status:"idle",label:`${x}m ago`,color:"#f44336"};const Y=Math.floor(x/60);return Y<24?{status:"idle",label:`${Y}h ago`,color:"#f44336"}:{status:"inactive",label:`${Math.floor(Y/24)}d ago`,color:"#666"}},R=(v,k)=>k>0?Math.round(v/k*100):0,M={totalStudents:n.length,activeStudents:n.filter(v=>{const k=j(v.lastActivity);return k.status==="active"||k.status==="recent"}).length,avgPoints:n.length>0?Math.round(n.reduce((v,k)=>v+k.totalPoints,0)/n.length):0,avgChallenges:n.length>0?Math.round(n.reduce((v,k)=>{var b;return v+(((b=k.completedChallenges)==null?void 0:b.length)||0)},0)/n.length):0};return h?r.jsx("div",{className:"teacher-dashboard",children:r.jsxs("div",{className:"loading-screen",children:[r.jsx("div",{className:"loading-spinner"}),r.jsx("p",{children:"Loading class data..."})]})}):r.jsxs("div",{className:"teacher-dashboard",children:[r.jsxs("header",{className:"td-header",children:[r.jsx("button",{className:"back-btn",onClick:t,children:"← Exit Dashboard"}),r.jsxs("div",{className:"td-title",children:[r.jsx("h1",{children:(o==null?void 0:o.name)||"Class Dashboard"}),r.jsxs("div",{className:"class-code-badge",children:["Class Code: ",r.jsx("strong",{children:e})]})]})]}),r.jsxs("div",{className:"td-stats",children:[r.jsxs("div",{className:"td-stat-card",children:[r.jsx("span",{className:"td-stat-value",children:M.totalStudents}),r.jsx("span",{className:"td-stat-label",children:"Total Students"})]}),r.jsxs("div",{className:"td-stat-card active",children:[r.jsx("span",{className:"td-stat-value",children:M.activeStudents}),r.jsx("span",{className:"td-stat-label",children:"Currently Active"})]}),r.jsxs("div",{className:"td-stat-card",children:[r.jsx("span",{className:"td-stat-value",children:M.avgPoints}),r.jsx("span",{className:"td-stat-label",children:"Avg Points"})]}),r.jsxs("div",{className:"td-stat-card",children:[r.jsx("span",{className:"td-stat-value",children:M.avgChallenges}),r.jsx("span",{className:"td-stat-label",children:"Avg Challenges Done"})]})]}),r.jsxs("div",{className:"td-tabs",children:[r.jsx("button",{className:`td-tab ${N==="students"?"active":""}`,onClick:()=>I("students"),children:"Students"}),r.jsx("button",{className:`td-tab ${N==="assignments"?"active":""}`,onClick:()=>I("assignments"),children:"Module Assignments"}),r.jsx("button",{className:`td-tab ${N==="activities"?"active":""}`,onClick:()=>I("activities"),children:"View Activities"})]}),N==="assignments"&&r.jsx(Pv,{classCode:e,assignments:l}),N==="activities"&&r.jsx(Av,{classCode:e}),N==="students"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"td-controls",children:[r.jsxs("div",{className:"sort-controls",children:[r.jsx("label",{children:"Sort by:"}),r.jsxs("select",{value:S,onChange:v=>T(v.target.value),children:[r.jsx("option",{value:"points",children:"Points (High to Low)"}),r.jsx("option",{value:"name",children:"Name (A-Z)"}),r.jsx("option",{value:"activity",children:"Recent Activity"})]})]}),r.jsx("button",{className:"btn-refresh",onClick:()=>window.location.reload(),children:"Refresh"})]}),r.jsxs("div",{className:"td-content",children:[r.jsxs("div",{className:"student-list-panel",children:[r.jsxs("h2",{children:["Students (",n.length,")"]}),n.length===0?r.jsxs("div",{className:"no-students",children:[r.jsx("p",{children:"No students have joined yet."}),r.jsxs("p",{children:["Share the class code: ",r.jsx("strong",{children:e})]})]}):r.jsx("div",{className:"student-list",children:w.map((v,k)=>{var x,Y,te,ye;const b=j(v.lastActivity);return R(((x=v.completedChallenges)==null?void 0:x.length)||0,L),R(((Y=v.completedScenarios)==null?void 0:Y.length)||0,m),r.jsxs("div",{className:`student-card ${(P==null?void 0:P.id)===v.id?"selected":""}`,onClick:()=>E(v),children:[r.jsxs("div",{className:"student-rank",children:["#",k+1]}),r.jsxs("div",{className:"student-info",children:[r.jsx("div",{className:"student-name",children:v.name}),r.jsxs("div",{className:"student-activity",style:{color:b.color},children:[r.jsx("span",{className:`activity-dot ${b.status}`}),b.label]})]}),r.jsxs("div",{className:"student-progress",children:[r.jsxs("div",{className:"progress-item",children:[r.jsx("span",{className:"progress-value",children:v.totalPoints}),r.jsx("span",{className:"progress-label",children:"pts"})]}),r.jsxs("div",{className:"progress-item",children:[r.jsx("span",{className:"progress-value",children:((te=v.completedChallenges)==null?void 0:te.length)||0}),r.jsx("span",{className:"progress-label",children:"challenges"})]}),r.jsxs("div",{className:"progress-item",children:[r.jsx("span",{className:"progress-value",children:((ye=v.completedScenarios)==null?void 0:ye.length)||0}),r.jsx("span",{className:"progress-label",children:"scenarios"})]})]})]},v.id)})})]}),r.jsx("div",{className:"student-detail-panel",children:P?r.jsxs(r.Fragment,{children:[r.jsx("h2",{children:P.name}),r.jsxs("div",{className:"detail-section",children:[r.jsx("h3",{children:"Overall Progress"}),r.jsx("div",{className:"detail-stats",children:r.jsxs("div",{className:"detail-stat",children:[r.jsx("span",{className:"detail-stat-value",children:P.totalPoints}),r.jsx("span",{className:"detail-stat-label",children:"Total Points"})]})})]}),r.jsxs("div",{className:"detail-section",children:[r.jsxs("h3",{children:["Challenges (",((F=P.completedChallenges)==null?void 0:F.length)||0,"/",L,")"]}),r.jsx("div",{className:"progress-bar-container",children:r.jsx("div",{className:"progress-bar-fill",style:{width:`${R(((C=P.completedChallenges)==null?void 0:C.length)||0,L)}%`}})}),r.jsx("div",{className:"completed-list",children:Object.entries(yi).map(([v,k])=>{const b=k.filter(x=>{var Y;return(Y=P.completedChallenges)==null?void 0:Y.includes(x.id)});return b.length===0?null:r.jsxs("div",{className:"category-progress",children:[r.jsx("h4",{children:v}),r.jsx("ul",{children:b.map(x=>r.jsxs("li",{children:[x.title," (+",x.points,"pts)"]},x.id))})]},v)})})]}),r.jsxs("div",{className:"detail-section",children:[r.jsxs("h3",{children:["Network Monitor (",((p=P.completedScenarios)==null?void 0:p.length)||0,"/",m,")"]}),r.jsx("div",{className:"progress-bar-container",children:r.jsx("div",{className:"progress-bar-fill scenario",style:{width:`${R(((y=P.completedScenarios)==null?void 0:y.length)||0,m)}%`}})}),r.jsx("div",{className:"completed-list",children:r.jsx("ul",{children:vt.filter(v=>{var k;return(k=P.completedScenarios)==null?void 0:k.includes(v.id)}).map(v=>r.jsxs("li",{children:[v.name," (+",v.points,"pts)"]},v.id))})})]})]}):r.jsx("div",{className:"no-selection",children:r.jsx("p",{children:"Select a student to view details"})})})]})]})]})},xf={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
  createCanvas(800, 500);
  // Create your palette array here
}

function draw() {
  // Use palette[0] for background
  background(240);
}`,solutionCode:`let palette = ["red", "orange", "yellow", "green", "blue"];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(palette[0]);
}`,hints:["Arrays are created with square brackets: let arr = []","Put strings in quotes inside the brackets","Access elements with arrayName[index]","The first element is at index 0"],vocabularyTerms:["array","index","element"]},{id:"w1d1-2",title:"First, Last, Middle",difficulty:"Easy",points:10,description:"Access different positions in an array",prompt:"Given an array of words, display the first word, last word, and middle word on screen.",starterCode:`let words = ["loop", "array", "pixel", "code", "mouse"];

function setup() {
  createCanvas(800, 500);
  textSize(32);
}

function draw() {
  background(220);
  // Display first word at y=100
  // Display last word at y=200
  // Display middle word at y=300
}`,solutionCode:`let words = ["loop", "array", "pixel", "code", "mouse"];

function setup() {
  createCanvas(800, 500);
  textSize(32);
}

function draw() {
  background(220);
  text("First: " + words[0], 50, 100);
  text("Last: " + words[words.length - 1], 50, 200);
  text("Middle: " + words[Math.floor(words.length / 2)], 50, 300);
}`,hints:["First element is at index 0","Last element is at index array.length - 1","Middle index is Math.floor(array.length / 2)"],vocabularyTerms:["array","index","length"]},{id:"w1d1-3",title:"Random Word Display",difficulty:"Easy",points:15,description:"Pick and display a random element from an array",prompt:"Display a random word from the array. Click to show a new random word.",starterCode:`let words = ["loop", "array", "pixel", "code", "mouse"];
let currentWord = "";

function setup() {
  createCanvas(800, 500);
  textSize(48);
  textAlign(CENTER, CENTER);
  // Pick initial random word
}

function draw() {
  background(220);
  text(currentWord, width/2, height/2);
}

function mousePressed() {
  // Pick new random word
}`,solutionCode:`let words = ["loop", "array", "pixel", "code", "mouse"];
let currentWord = "";

function setup() {
  createCanvas(800, 500);
  textSize(48);
  textAlign(CENTER, CENTER);
  currentWord = words[floor(random(words.length))];
}

function draw() {
  background(220);
  text(currentWord, width/2, height/2);
}

function mousePressed() {
  currentWord = words[floor(random(words.length))];
}`,hints:["random(n) gives a number from 0 to n","floor() rounds down to a whole number","Use random(words.length) to get a valid index"],vocabularyTerms:["array","random","index"]}],exitTicket:"What does words[0] mean in an array called words?"},{day:2,title:"Push and Pop",objective:"Add and remove items with push() and pop()",exercises:[{id:"w1d2-1",title:"Click to Add",difficulty:"Easy",points:10,description:"Use push() to add mouse positions to an array",prompt:"Click anywhere to add that X position to an array. Draw circles at all saved positions.",starterCode:`let xs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw circles at each saved x position
}

function mousePressed() {
  // Add mouseX to the array
}`,solutionCode:`let xs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], height / 2, 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
}`,hints:["push() adds to the end of an array","Use a for loop to go through all elements","xs.length tells you how many items"],vocabularyTerms:["push","array","length"]},{id:"w1d2-2",title:"Undo with Pop",difficulty:"Easy",points:15,description:"Use pop() to remove the last item",prompt:"Click to add dots. Press 'U' to undo (remove) the last dot.",starterCode:`let xs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], height / 2, 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
}

function keyPressed() {
  // If key is 'U', remove last item
}`,solutionCode:`let xs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], height / 2, 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
}

function keyPressed() {
  if (key == 'U' || key == 'u') {
    xs.pop();
  }
}`,hints:["pop() removes the last element","Check which key was pressed with key == 'U'","pop() returns the removed item (but you don't need to use it)"],vocabularyTerms:["pop","push","keyPressed"]}],exitTicket:"What's the difference between push() and pop()?"},{day:3,title:"Parallel Arrays",objective:"Use multiple arrays to store related data",exercises:[{id:"w1d3-1",title:"X and Y Positions",difficulty:"Medium",points:15,description:"Store both x and y coordinates in parallel arrays",prompt:"Click to place dots. Store x positions in one array and y positions in another.",starterCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw circles at each (xs[i], ys[i]) position
}

function mousePressed() {
  // Add mouseX to xs and mouseY to ys
}`,solutionCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], ys[i], 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
}`,hints:["Parallel arrays have the same length","Index i refers to the same item in both arrays","Push to both arrays at the same time"],vocabularyTerms:["parallel-arrays","index","push"]},{id:"w1d3-2",title:"Three Parallel Arrays",difficulty:"Medium",points:20,description:"Add random sizes to each dot",prompt:"Extend the previous exercise: also store a random size for each dot.",starterCode:`let xs = [];
let ys = [];
let sizes = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw circles with their individual sizes
}

function mousePressed() {
  // Add position and random size (10-50)
}`,solutionCode:`let xs = [];
let ys = [];
let sizes = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], ys[i], sizes[i]);
  }
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
  sizes.push(random(10, 50));
}`,hints:["random(10, 50) gives a number between 10 and 50","All three arrays must stay the same length","Use sizes[i] for the diameter of each circle"],vocabularyTerms:["parallel-arrays","random"]}],exitTicket:"Why must parallel arrays always have the same length?"},{day:4,title:"Random Selection",objective:"Select random elements and change array values",exercises:[{id:"w1d4-1",title:"Color Switcher",difficulty:"Easy",points:10,description:"Click to pick a random background color from a palette",prompt:"Each click should pick a new random color from your palette array.",starterCode:`let colors = ["red", "orange", "yellow", "green", "blue"];
let currentColor;

function setup() {
  createCanvas(800, 500);
  currentColor = colors[0];
}

function draw() {
  background(currentColor);
}

function mousePressed() {
  // Pick random color from array
}`,solutionCode:`let colors = ["red", "orange", "yellow", "green", "blue"];
let currentColor;

function setup() {
  createCanvas(800, 500);
  currentColor = colors[0];
}

function draw() {
  background(currentColor);
}

function mousePressed() {
  let index = floor(random(colors.length));
  currentColor = colors[index];
}`,hints:["Get array length with colors.length","random(n) gives 0 to n-1 (but as a decimal)","floor() rounds down to an integer"],vocabularyTerms:["random","index","floor"]}],exitTicket:"Why do we need floor() when picking a random index?"},{day:5,title:"Mini-Project: Click Collector",objective:"Build a complete interactive sketch using arrays",exercises:[{id:"w1d5-project",title:"Click Collector",difficulty:"Medium",points:50,isProject:!0,description:"Create an interactive dot collector with undo and clear features",prompt:`Build a sketch where:
- Click to place colored dots
- Press 'U' to undo last dot
- Press 'C' to clear all dots
- Each dot has a random color`,starterCode:`let xs = [];
let ys = [];
let colors = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(255);
  // Draw all dots with their colors
}

function mousePressed() {
  // Add new dot with random color
}

function keyPressed() {
  // U = undo, C = clear
}`,solutionCode:`let xs = [];
let ys = [];
let cs = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(255);
  for (let i = 0; i < xs.length; i++) {
    fill(cs[i]);
    noStroke();
    circle(xs[i], ys[i], 30);
  }

  // Show count
  fill(0);
  textSize(16);
  text("Dots: " + xs.length, 10, 20);
  text("U = Undo | C = Clear", 10, 40);
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
  cs.push(color(random(255), random(255), random(255)));
}

function keyPressed() {
  if (key == 'U' || key == 'u') {
    xs.pop();
    ys.pop();
    cs.pop();
  }
  if (key == 'C' || key == 'c') {
    xs = [];
    ys = [];
    cs = [];
  }
}`,hints:["Use color(r, g, b) to create a color object","Pop from ALL arrays when undoing","Set arrays to [] to clear them"],vocabularyTerms:["parallel-arrays","push","pop"],rubric:{functionality:"Click adds dots, U undoes, C clears",arrays:"Uses parallel arrays correctly",colors:"Each dot has random color",display:"Shows helpful information to user"}}]}]},week2:{title:"Loops Basics",bigIdea:"Loops repeat instructions efficiently.",days:[{day:6,title:"For Loops",objective:"Use for-loops to repeat drawing commands",exercises:[{id:"w2d6-1",title:"Row of Circles",difficulty:"Easy",points:10,description:"Draw 10 circles in a row using a for-loop",prompt:"Use a for-loop to draw 10 circles evenly spaced across the canvas.",starterCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Use a for-loop to draw 10 circles
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < 10; i++) {
    let x = 80 + i * 70;
    circle(x, height / 2, 40);
  }
}`,hints:["for (let i = 0; i < 10; i++) repeats 10 times","Use i to calculate different x positions","Multiply i by a spacing value"],vocabularyTerms:["for-loop","iteration","loop-variable"]},{id:"w2d6-2",title:"Spacing Formula",difficulty:"Medium",points:15,description:"Calculate spacing to fit any number of circles",prompt:"Draw n circles that are always evenly spaced, regardless of the value of n.",starterCode:`let n = 8;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw n circles evenly spaced
  // Formula: x = width / (n + 1) * (i + 1)
}`,solutionCode:`let n = 8;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  let spacing = width / (n + 1);
  for (let i = 0; i < n; i++) {
    let x = spacing * (i + 1);
    circle(x, height / 2, 30);
  }
}`,hints:["Divide width by (n + 1) to get spacing","Multiply spacing by (i + 1) for each position","Try changing n to see if it still works"],vocabularyTerms:["for-loop","spacing"]}],exitTicket:"What are the three parts of a for-loop declaration?"},{day:7,title:"Loop Patterns",objective:"Use loop variables to create visual patterns",exercises:[{id:"w2d7-1",title:"Staircase",difficulty:"Medium",points:15,description:"Draw a staircase pattern using a loop",prompt:"Draw rectangles that form a staircase going up from left to right.",starterCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw staircase: each step shifts right and up
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < 10; i++) {
    rect(50 + i * 50, 400 - i * 30, 40, 30);
  }
}`,hints:["X position increases with i","Y position decreases with i (going up)","Use i * stepSize for both"],vocabularyTerms:["for-loop","pattern"]},{id:"w2d7-2",title:"Growing Circles",difficulty:"Medium",points:15,description:"Draw circles that grow in size",prompt:"Draw 8 circles where each one is larger than the last.",starterCode:`function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw circles with increasing size
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
  noFill();
}

function draw() {
  background(240);
  for (let i = 0; i < 8; i++) {
    let size = 20 + i * 20;
    circle(width / 2, height / 2, size);
  }
}`,hints:["Size can also depend on i","Start with a base size and add i * increment","noFill() makes circles hollow"],vocabularyTerms:["for-loop","loop-variable"]}],exitTicket:"How can you make each loop iteration draw something different?"},{day:8,title:"Animation with Loops",objective:"Combine loops with animation",exercises:[{id:"w2d8-1",title:"Moving Object",difficulty:"Easy",points:10,description:"Animate a circle moving across the screen",prompt:"Make a circle move from left to right, resetting when it goes off screen.",starterCode:`let x = 0;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Draw and move the circle
  // Reset when off screen
}`,solutionCode:`let x = 0;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  circle(x, height / 2, 40);
  x += 3;
  if (x > width) {
    x = 0;
  }
}`,hints:["Increment x each frame","Check if x > width to reset","The draw() function is already a loop!"],vocabularyTerms:["animation","frame","conditional"]},{id:"w2d8-2",title:"Multiple Moving Objects",difficulty:"Medium",points:20,description:"Animate multiple circles at different speeds",prompt:"Create 5 circles at different y positions, each moving at a different speed.",starterCode:`let xs = [0, 0, 0, 0, 0];
let speeds = [1, 2, 3, 4, 5];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Move and draw all circles
}`,solutionCode:`let xs = [0, 0, 0, 0, 0];
let speeds = [1, 2, 3, 4, 5];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < 5; i++) {
    let y = 100 + i * 80;
    circle(xs[i], y, 30);
    xs[i] += speeds[i];
    if (xs[i] > width) {
      xs[i] = 0;
    }
  }
}`,hints:["Each circle has its own x in the array","Each circle has its own speed","Update each x by its corresponding speed"],vocabularyTerms:["animation","parallel-arrays","for-loop"]}],exitTicket:"Why don't we need a for-loop to make something animate?"},{day:9,title:"While Loops",objective:"Use while-loops for conditional repetition",exercises:[{id:"w2d9-1",title:"Dice Roller",difficulty:"Easy",points:10,description:"Roll dice until you get a 6",prompt:"Use a while-loop to count how many rolls it takes to get a 6.",starterCode:`function setup() {
  createCanvas(800, 500);
  textSize(24);

  let rolls = 0;
  let value = 0;

  // While loop: keep rolling until value is 6

  text("Rolled a 6 after " + rolls + " rolls", 50, 100);
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
  textSize(24);

  let rolls = 0;
  let value = 0;

  while (value != 6) {
    value = floor(random(1, 7));
    rolls++;
  }

  text("Rolled a 6 after " + rolls + " rolls", 50, 100);
}`,hints:["while (condition) repeats until condition is false","random(1, 7) gives 1-6 (not including 7)","Increment rolls inside the loop"],vocabularyTerms:["while-loop","condition","random"]},{id:"w2d9-2",title:"Random Dots Until Full",difficulty:"Medium",points:15,description:"Place random dots until you have 100",prompt:"Use a while-loop to place 100 random dots on the canvas.",starterCode:`function setup() {
  createCanvas(800, 500);
  background(240);

  let count = 0;

  // While loop: place dots until count reaches 100
}`,solutionCode:`function setup() {
  createCanvas(800, 500);
  background(240);

  let count = 0;

  while (count < 100) {
    let x = random(width);
    let y = random(height);
    point(x, y);
    count++;
  }
}`,hints:["while (count < 100) runs until count is 100","Place one dot per iteration","Don't forget to increment count!"],vocabularyTerms:["while-loop","random","iteration"]}],exitTicket:"When would you use a while-loop instead of a for-loop?"},{day:10,title:"Mini-Project: Pattern Poster Generator",objective:"Create an interactive pattern generator using loops",exercises:[{id:"w2d10-project",title:"Pattern Poster Generator",difficulty:"Medium",points:50,isProject:!0,description:"Create a tool that generates different loop-based patterns",prompt:`Build a sketch where:
- Press 1-5 to show different patterns
- Each pattern uses loops creatively
- Press 'R' to randomize parameters`,starterCode:`let mode = 1;
let param1 = 20;
let param2 = 40;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(255);

  if (mode == 1) {
    // Pattern 1: Row of circles
  }

  if (mode == 2) {
    // Pattern 2: Grid of squares
  }

  // Add more patterns...
}

function keyPressed() {
  // Switch modes with 1-5
  // R to randomize
}`,solutionCode:`let mode = 1;
let count = 15;
let spacing = 40;

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(30);
  stroke(0, 255, 150);
  noFill();

  if (mode == 1) {
    // Circles in a row
    for (let i = 0; i < count; i++) {
      let x = spacing + i * spacing;
      circle(x, height / 2, 30);
    }
  }

  if (mode == 2) {
    // Staircase
    fill(0, 255, 150);
    for (let i = 0; i < count; i++) {
      rect(50 + i * spacing, 400 - i * 25, 30, 30);
    }
  }

  if (mode == 3) {
    // Concentric circles
    for (let i = 0; i < count; i++) {
      circle(width / 2, height / 2, i * spacing);
    }
  }

  if (mode == 4) {
    // Random dots
    for (let i = 0; i < count * 10; i++) {
      point(random(width), random(height));
    }
  }

  if (mode == 5) {
    // Spiral
    for (let i = 0; i < count * 20; i++) {
      let angle = i * 0.1;
      let r = i * 0.5;
      let x = width / 2 + cos(angle) * r;
      let y = height / 2 + sin(angle) * r;
      point(x, y);
    }
  }

  // Instructions
  fill(255);
  noStroke();
  text("Mode: " + mode + " | Keys 1-5 to change | R to randomize", 10, 20);
}

function keyPressed() {
  if (key >= '1' && key <= '5') {
    mode = int(key);
  }
  if (key == 'R' || key == 'r') {
    count = floor(random(10, 25));
    spacing = floor(random(20, 50));
  }
}`,hints:["Use if (mode == n) to show different patterns","Each pattern should use a for-loop","Parameters like count and spacing make patterns adjustable"],vocabularyTerms:["for-loop","pattern","parameter"],rubric:{patterns:"At least 3 different loop patterns",switching:"Keys switch between patterns",randomize:"R randomizes parameters",creativity:"Patterns are visually interesting"}}]}]},week3:{title:"Traversing Arrays",bigIdea:"Loops + arrays = traversal. Read and update every element.",days:[{day:11,title:"Traversal Basics",objective:"Loop through arrays to draw many objects",exercises:[{id:"w3d11-1",title:"Draw All Points",difficulty:"Easy",points:10,description:"Traverse an array to draw all stored points",prompt:"Click to add points. Use a loop to draw a circle at every saved position.",starterCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  // Traverse arrays and draw all circles
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
}`,solutionCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);
  for (let i = 0; i < xs.length; i++) {
    circle(xs[i], ys[i], 20);
  }
}

function mousePressed() {
  xs.push(mouseX);
  ys.push(mouseY);
}`,hints:["Traversal means visiting every element","Loop from 0 to array.length","Use i as the index for both arrays"],vocabularyTerms:["traversal","for-loop","array"]}],exitTicket:"What does 'traversing an array' mean?"},{day:12,title:"Computing Values",objective:"Traverse to compute min, max, and average",exercises:[{id:"w3d12-1",title:"Sum and Average",difficulty:"Medium",points:15,description:"Calculate the average of array values",prompt:"Given an array of scores, calculate and display the average.",starterCode:`let scores = [85, 92, 78, 95, 88, 72, 90];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let sum = 0;
  // Calculate sum by traversing

  let average = 0;
  // Calculate average

  text("Average: " + average, 50, 100);
}`,solutionCode:`let scores = [85, 92, 78, 95, 88, 72, 90];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  let average = sum / scores.length;

  text("Average: " + average.toFixed(1), 50, 100);
}`,hints:["Start sum at 0","Add each element to sum","Divide sum by length for average"],vocabularyTerms:["traversal","accumulator","average"]},{id:"w3d12-2",title:"Find Min and Max",difficulty:"Medium",points:20,description:"Find the smallest and largest values",prompt:"Traverse the array to find both minimum and maximum values.",starterCode:`let nums = [34, 67, 12, 89, 45, 23, 78];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let minVal = nums[0];
  let maxVal = nums[0];

  // Traverse to find min and max

  text("Min: " + minVal, 50, 100);
  text("Max: " + maxVal, 50, 150);
}`,solutionCode:`let nums = [34, 67, 12, 89, 45, 23, 78];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let minVal = nums[0];
  let maxVal = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minVal) {
      minVal = nums[i];
    }
    if (nums[i] > maxVal) {
      maxVal = nums[i];
    }
  }

  text("Min: " + minVal, 50, 100);
  text("Max: " + maxVal, 50, 150);
}`,hints:["Start min and max with first element","Compare each element to current min/max","Update if you find a smaller/larger value"],vocabularyTerms:["traversal","minimum","maximum"]}],exitTicket:"Why do we initialize min and max with the first array element?"},{day:13,title:"Conditional Highlighting",objective:"Traverse with conditions to highlight specific elements",exercises:[{id:"w3d13-1",title:"Closest to Mouse",difficulty:"Medium",points:20,description:"Find and highlight the point closest to the mouse",prompt:"Traverse all points to find which one is closest to the mouse, and highlight it.",starterCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
  // Add some initial points
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
  }
}

function draw() {
  background(240);

  // Find closest point index
  let closestIndex = -1;
  let closestDist = Infinity;

  // Traverse to find closest

  // Draw all points, highlight closest
}`,solutionCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
  }
}

function draw() {
  background(240);

  let closestIndex = -1;
  let closestDist = Infinity;

  for (let i = 0; i < xs.length; i++) {
    let d = dist(mouseX, mouseY, xs[i], ys[i]);
    if (d < closestDist) {
      closestDist = d;
      closestIndex = i;
    }
  }

  for (let i = 0; i < xs.length; i++) {
    if (i == closestIndex) {
      fill(255, 0, 0);
      circle(xs[i], ys[i], 30);
    } else {
      fill(100);
      circle(xs[i], ys[i], 20);
    }
  }
}`,hints:["dist() calculates distance between two points","Infinity is larger than any number","Track both the closest distance AND index"],vocabularyTerms:["traversal","dist","conditional"]}],exitTicket:"Why do we need two separate loops in the closest-point solution?"},{day:14,title:"Updating Elements",objective:"Traverse to modify array values",exercises:[{id:"w3d14-1",title:"Moving All Points",difficulty:"Medium",points:15,description:"Add velocity to make all points move",prompt:"Each point has a velocity. Update all positions each frame.",starterCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
    vx.push(random(-2, 2));
    vy.push(random(-2, 2));
  }
}

function draw() {
  background(240);

  // Traverse: update positions and draw
}`,solutionCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
    vx.push(random(-2, 2));
    vy.push(random(-2, 2));
  }
}

function draw() {
  background(240);

  for (let i = 0; i < xs.length; i++) {
    xs[i] += vx[i];
    ys[i] += vy[i];
    circle(xs[i], ys[i], 20);
  }
}`,hints:["vx and vy are velocity (speed + direction)","Add velocity to position each frame","xs[i] += vx[i] updates the position"],vocabularyTerms:["traversal","velocity","update"]},{id:"w3d14-2",title:"Bounce Off Walls",difficulty:"Medium",points:20,description:"Make points bounce when they hit edges",prompt:"Extend the moving points: reverse velocity when hitting walls.",starterCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
    vx.push(random(-3, 3));
    vy.push(random(-3, 3));
  }
}

function draw() {
  background(240);

  for (let i = 0; i < xs.length; i++) {
    // Update position

    // Bounce off walls

    circle(xs[i], ys[i], 20);
  }
}`,solutionCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    xs.push(random(width));
    ys.push(random(height));
    vx.push(random(-3, 3));
    vy.push(random(-3, 3));
  }
}

function draw() {
  background(240);

  for (let i = 0; i < xs.length; i++) {
    xs[i] += vx[i];
    ys[i] += vy[i];

    if (xs[i] < 0 || xs[i] > width) {
      vx[i] *= -1;
    }
    if (ys[i] < 0 || ys[i] > height) {
      vy[i] *= -1;
    }

    circle(xs[i], ys[i], 20);
  }
}`,hints:["Check if position is outside bounds","Multiply velocity by -1 to reverse","Check x and y separately"],vocabularyTerms:["traversal","bounce","conditional"]}],exitTicket:"How do you reverse a velocity value?"},{day:15,title:"Mini-Project: Particle Fountain",objective:"Create a particle system with spawning and removal",exercises:[{id:"w3d15-project",title:"Particle Fountain",difficulty:"Hard",points:50,isProject:!0,description:"Create an interactive particle system",prompt:`Build a particle fountain:
- Click to spawn burst of particles
- Particles have gravity
- Particles shrink over time
- Remove particles when too small`,starterCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];
let life = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(0);

  // Traverse backwards (important for removal!)
  for (let i = xs.length - 1; i >= 0; i--) {
    // Update position
    // Apply gravity
    // Decrease life
    // Draw particle
    // Remove if dead
  }
}

function mousePressed() {
  // Spawn 20 particles at mouse position
}`,solutionCode:`let xs = [];
let ys = [];
let vx = [];
let vy = [];
let life = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(0);

  for (let i = xs.length - 1; i >= 0; i--) {
    // Update
    xs[i] += vx[i];
    ys[i] += vy[i];
    vy[i] += 0.2; // gravity
    life[i] -= 2;

    // Draw
    fill(255, life[i] * 2.5);
    noStroke();
    circle(xs[i], ys[i], life[i] / 3);

    // Remove dead particles
    if (life[i] <= 0) {
      xs.splice(i, 1);
      ys.splice(i, 1);
      vx.splice(i, 1);
      vy.splice(i, 1);
      life.splice(i, 1);
    }
  }

  // UI
  fill(255);
  text("Particles: " + xs.length, 10, 20);
  text("Click to spawn", 10, 40);
}

function mousePressed() {
  for (let i = 0; i < 20; i++) {
    xs.push(mouseX);
    ys.push(mouseY);
    vx.push(random(-3, 3));
    vy.push(random(-6, -1));
    life.push(100);
  }
}`,hints:["Loop BACKWARDS when removing elements","splice(i, 1) removes element at index i","Gravity: add to vy each frame","Life decreases; remove when <= 0"],vocabularyTerms:["traversal","splice","particle-system"],rubric:{spawning:"Click spawns multiple particles",physics:"Gravity affects particles",lifecycle:"Particles shrink and are removed",visuals:"Particles look good (fade, color, etc.)"}}]}]},week4:{title:"Filtering and 2D Arrays",bigIdea:"Traversal can filter, transform, and work with grids.",days:[{day:16,title:"Filtering",objective:"Keep only elements that match a condition",exercises:[{id:"w4d16-1",title:"Filter Big Numbers",difficulty:"Medium",points:15,description:"Create a new array with only values above 50",prompt:"Given an array of numbers, create a new array containing only values greater than 50.",starterCode:`let nums = [10, 40, 70, 20, 90, 55, 30, 85];

function setup() {
  createCanvas(800, 500);
  textSize(20);

  let big = [];

  // Filter: keep only nums > 50

  text("Original: " + nums.join(", "), 50, 100);
  text("Filtered: " + big.join(", "), 50, 150);
}`,solutionCode:`let nums = [10, 40, 70, 20, 90, 55, 30, 85];

function setup() {
  createCanvas(800, 500);
  textSize(20);

  let big = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 50) {
      big.push(nums[i]);
    }
  }

  text("Original: " + nums.join(", "), 50, 100);
  text("Filtered: " + big.join(", "), 50, 150);
}`,hints:["Create an empty result array","Traverse the original array","Push elements that match the condition"],vocabularyTerms:["filter","traversal","conditional"]},{id:"w4d16-2",title:"Visual Filter",difficulty:"Medium",points:20,description:"Draw only particles on the right side",prompt:"Only draw particles whose x position is greater than width/2.",starterCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 50; i++) {
    xs.push(random(width));
    ys.push(random(height));
  }
}

function draw() {
  background(240);

  // Draw line at center
  stroke(200);
  line(width / 2, 0, width / 2, height);

  // Only draw dots on right side
  noStroke();
  fill(0, 150, 255);
}`,solutionCode:`let xs = [];
let ys = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 50; i++) {
    xs.push(random(width));
    ys.push(random(height));
  }
}

function draw() {
  background(240);

  stroke(200);
  line(width / 2, 0, width / 2, height);

  noStroke();
  fill(0, 150, 255);

  for (let i = 0; i < xs.length; i++) {
    if (xs[i] > width / 2) {
      circle(xs[i], ys[i], 15);
    }
  }

  fill(0);
  text("Showing only right-side dots", 10, 20);
}`,hints:["You don't need to create a new array","Just add a condition before drawing","Only draw if x > width/2"],vocabularyTerms:["filter","conditional","traversal"]}],exitTicket:"What's the difference between filtering into a new array vs filtering during drawing?"},{day:17,title:"Reducing",objective:"Compute a single value from an array",exercises:[{id:"w4d17-1",title:"Total Score",difficulty:"Easy",points:10,description:"Sum all values to get a total",prompt:"Calculate the total score from an array of point values.",starterCode:`let points = [10, 25, 15, 30, 20, 5];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let total = 0;

  // Calculate total

  text("Total Points: " + total, 50, 100);
}`,solutionCode:`let points = [10, 25, 15, 30, 20, 5];

function setup() {
  createCanvas(800, 500);
  textSize(24);

  let total = 0;

  for (let i = 0; i < points.length; i++) {
    total += points[i];
  }

  text("Total Points: " + total, 50, 100);
}`,hints:["Start with total = 0","Add each element to total","This is called 'reducing' to a single value"],vocabularyTerms:["reduce","accumulator","sum"]},{id:"w4d17-2",title:"Energy Meter",difficulty:"Medium",points:20,description:"Sum particle sizes to show total 'energy'",prompt:"Create particles with random sizes. Show total 'energy' (sum of all sizes) as a bar.",starterCode:`let sizes = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 20; i++) {
    sizes.push(random(10, 50));
  }
}

function draw() {
  background(240);

  // Calculate total energy
  let energy = 0;

  // Draw energy bar

  // Draw particles
}`,solutionCode:`let xs = [];
let ys = [];
let sizes = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 20; i++) {
    xs.push(random(100, width - 100));
    ys.push(random(100, height - 50));
    sizes.push(random(10, 50));
  }
}

function draw() {
  background(240);

  // Calculate total energy
  let energy = 0;
  for (let i = 0; i < sizes.length; i++) {
    energy += sizes[i];
  }

  // Draw energy bar
  fill(100);
  rect(50, 20, 300, 20);
  fill(0, 200, 100);
  rect(50, 20, energy / 2, 20);
  fill(0);
  text("Energy: " + floor(energy), 360, 35);

  // Draw particles
  for (let i = 0; i < xs.length; i++) {
    fill(0, 150, 255, 150);
    circle(xs[i], ys[i], sizes[i]);
  }
}`,hints:["Sum all sizes to get energy","Draw a bar proportional to energy","Scale the bar width appropriately"],vocabularyTerms:["reduce","sum","visualization"]}],exitTicket:"What does 'reducing' an array mean?"},{day:18,title:"2D Arrays and Grids",objective:"Use nested loops to create and draw grids",exercises:[{id:"w4d18-1",title:"Draw a Grid",difficulty:"Medium",points:15,description:"Use nested loops to draw a grid of squares",prompt:"Draw a 10x10 grid of squares using nested for-loops.",starterCode:`function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  // Nested loops: rows and columns
  // Each cell is 50x50 pixels
}`,solutionCode:`function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let x = col * 50;
      let y = row * 50;
      stroke(0);
      noFill();
      rect(x, y, 50, 50);
    }
  }
}`,hints:["Outer loop controls rows","Inner loop controls columns","x depends on col, y depends on row"],vocabularyTerms:["nested-loop","grid","2d-array"]},{id:"w4d18-2",title:"Checkerboard",difficulty:"Medium",points:20,description:"Color the grid like a checkerboard",prompt:"Make alternating squares black and white like a checkerboard.",starterCode:`function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let x = col * 50;
      let y = row * 50;

      // Alternate colors based on row + col

      rect(x, y, 50, 50);
    }
  }
}`,solutionCode:`function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      let x = col * 50;
      let y = row * 50;

      if ((row + col) % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }

      noStroke();
      rect(x, y, 50, 50);
    }
  }
}`,hints:["(row + col) % 2 alternates between 0 and 1","Use this to choose between two colors","% is the modulo (remainder) operator"],vocabularyTerms:["nested-loop","modulo","pattern"]}],exitTicket:"What does (row + col) % 2 calculate?"},{day:19,title:"2D Array Data",objective:"Store and access data in a 2D array",exercises:[{id:"w4d19-1",title:"Random Walls",difficulty:"Medium",points:20,description:"Create a 2D array where some cells are walls",prompt:"Create a 2D array grid where 0=floor and 1=wall. Draw walls as black squares.",starterCode:`let grid = [];

function setup() {
  createCanvas(500, 500);

  // Initialize 2D array
  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      // 20% chance of wall
    }
  }
}

function draw() {
  background(220);

  // Draw grid based on values
}`,solutionCode:`let grid = [];

function setup() {
  createCanvas(500, 500);

  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      grid[r][c] = random() < 0.2 ? 1 : 0;
    }
  }
}

function draw() {
  background(220);

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let x = c * 50;
      let y = r * 50;

      if (grid[r][c] == 1) {
        fill(0);
      } else {
        fill(255);
      }

      stroke(100);
      rect(x, y, 50, 50);
    }
  }
}`,hints:["grid[r] = [] creates a row","grid[r][c] accesses row r, column c","random() < 0.2 is true 20% of the time"],vocabularyTerms:["2d-array","grid","random"]},{id:"w4d19-2",title:"Player Movement",difficulty:"Hard",points:25,description:"Add a player that moves on the grid",prompt:"Add arrow key movement. The player cannot move into walls.",starterCode:`let grid = [];
let playerR = 0;
let playerC = 0;

function setup() {
  createCanvas(500, 500);

  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      grid[r][c] = random() < 0.2 ? 1 : 0;
    }
  }
  grid[0][0] = 0; // Start clear
}

function draw() {
  // Draw grid and player
}

function keyPressed() {
  // Move player with arrow keys
  // Don't allow moving into walls
}`,solutionCode:`let grid = [];
let playerR = 0;
let playerC = 0;

function setup() {
  createCanvas(500, 500);

  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      grid[r][c] = random() < 0.2 ? 1 : 0;
    }
  }
  grid[0][0] = 0;
}

function draw() {
  background(220);

  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let x = c * 50;
      let y = r * 50;

      if (grid[r][c] == 1) {
        fill(40);
      } else {
        fill(200);
      }
      stroke(100);
      rect(x, y, 50, 50);
    }
  }

  // Draw player
  fill(0, 150, 255);
  rect(playerC * 50 + 5, playerR * 50 + 5, 40, 40);
}

function keyPressed() {
  let newR = playerR;
  let newC = playerC;

  if (keyCode == UP_ARROW) newR--;
  if (keyCode == DOWN_ARROW) newR++;
  if (keyCode == LEFT_ARROW) newC--;
  if (keyCode == RIGHT_ARROW) newC++;

  // Check bounds and walls
  if (newR >= 0 && newR < 10 && newC >= 0 && newC < 10) {
    if (grid[newR][newC] != 1) {
      playerR = newR;
      playerC = newC;
    }
  }
}`,hints:["Calculate new position first, don't move yet","Check if new position is in bounds","Check if new position is not a wall","Only then update player position"],vocabularyTerms:["2d-array","collision","keyCode"]}],exitTicket:"How do you check if a grid cell is a wall before moving?"},{day:20,title:"Final Capstone Project",objective:"Apply all concepts in a complete project",exercises:[{id:"w4d20-capstone",title:"Grid Adventure Game",difficulty:"Hard",points:100,isProject:!0,isCapstone:!0,description:"Create a complete grid-based game",prompt:`Build a Grid Adventure Game:
- 2D array map (0=floor, 1=wall, 2=goal, 3=coin)
- Player moves with arrow keys
- Collect coins for points
- Reach the goal to win
- Display score and instructions`,starterCode:`let grid = [];
let playerR = 0;
let playerC = 0;
let score = 0;
let gameWon = false;

function setup() {
  createCanvas(500, 550);
  initializeMap();
}

function initializeMap() {
  // Create 10x10 grid
  // Place walls, coins, and goal
}

function draw() {
  background(30);

  if (gameWon) {
    // Show win screen
  } else {
    // Draw map
    // Draw player
    // Draw UI
  }
}

function keyPressed() {
  if (gameWon) return;

  // Handle movement
  // Check for coin collection
  // Check for goal reached
}`,solutionCode:`let grid = [];
let playerR = 0;
let playerC = 0;
let score = 0;
let gameWon = false;

function setup() {
  createCanvas(500, 550);
  initializeMap();
}

function initializeMap() {
  for (let r = 0; r < 10; r++) {
    grid[r] = [];
    for (let c = 0; c < 10; c++) {
      let rand = random();
      if (rand < 0.15) {
        grid[r][c] = 1; // wall
      } else if (rand < 0.25) {
        grid[r][c] = 3; // coin
      } else {
        grid[r][c] = 0; // floor
      }
    }
  }
  grid[0][0] = 0; // start
  grid[9][9] = 2; // goal
}

function draw() {
  background(30);

  if (gameWon) {
    textSize(48);
    fill(0, 255, 150);
    textAlign(CENTER, CENTER);
    text("YOU WIN!", width / 2, height / 2 - 30);
    textSize(24);
    text("Score: " + score, width / 2, height / 2 + 20);
    text("Press R to restart", width / 2, height / 2 + 60);
    return;
  }

  // Draw grid
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 10; c++) {
      let x = c * 50;
      let y = r * 50;

      if (grid[r][c] == 1) {
        fill(60);
      } else if (grid[r][c] == 2) {
        fill(0, 255, 150);
      } else if (grid[r][c] == 3) {
        fill(255, 215, 0);
      } else {
        fill(40);
      }

      stroke(80);
      rect(x, y, 50, 50);

      if (grid[r][c] == 3) {
        fill(255, 180, 0);
        circle(x + 25, y + 25, 20);
      }
    }
  }

  // Draw player
  fill(0, 150, 255);
  noStroke();
  rect(playerC * 50 + 8, playerR * 50 + 8, 34, 34, 5);

  // UI
  fill(255);
  textSize(16);
  textAlign(LEFT, CENTER);
  text("Score: " + score + " | Arrow keys to move | Reach the green goal!", 10, 525);
}

function keyPressed() {
  if (gameWon) {
    if (key == 'R' || key == 'r') {
      score = 0;
      playerR = 0;
      playerC = 0;
      gameWon = false;
      initializeMap();
    }
    return;
  }

  let newR = playerR;
  let newC = playerC;

  if (keyCode == UP_ARROW) newR--;
  if (keyCode == DOWN_ARROW) newR++;
  if (keyCode == LEFT_ARROW) newC--;
  if (keyCode == RIGHT_ARROW) newC++;

  if (newR >= 0 && newR < 10 && newC >= 0 && newC < 10) {
    if (grid[newR][newC] != 1) {
      playerR = newR;
      playerC = newC;

      // Collect coin
      if (grid[playerR][playerC] == 3) {
        score += 10;
        grid[playerR][playerC] = 0;
      }

      // Check win
      if (grid[playerR][playerC] == 2) {
        gameWon = true;
      }
    }
  }
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function Rv(e){for(const t of Object.values(xf))for(const n of t.days)for(const i of n.exercises)if(i.id===e)return i;return null}const Dv={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},_v={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]};function Lv({weekKey:e,onSelectExercise:t,onBack:n,completedExercises:i}){const o=xf[e],a=e.replace("week",""),l=_v[e]||[],u=h=>`difficulty difficulty-${h.toLowerCase()}`;return r.jsxs("div",{className:"week-view",children:[r.jsx("button",{className:"back-button",onClick:n,children:"← Back to Dashboard"}),r.jsxs("div",{className:"week-header-large",children:[r.jsxs("h1",{children:["Week ",a,": ",o.title]}),r.jsx("p",{className:"big-idea",children:o.bigIdea})]}),r.jsxs("div",{className:"learning-objectives",children:[r.jsx("h3",{children:"Learning Objectives"}),r.jsx("ul",{children:l.map((h,g)=>r.jsx("li",{children:h},g))})]}),r.jsx("div",{className:"days-list",children:o.days.map(h=>r.jsxs("div",{className:"day-section",children:[r.jsxs("div",{className:"day-header",children:[r.jsxs("h2",{children:["Day ",h.day,": ",h.title]}),r.jsx("p",{className:"day-objective",children:h.objective})]}),r.jsx("div",{className:"exercises-grid",children:h.exercises.map(g=>{const P=i.includes(g.id);return r.jsxs("div",{className:`exercise-card ${P?"completed":""} ${g.isProject?"project-card":""}`,onClick:()=>t(g.id),children:[r.jsxs("div",{className:"exercise-header",children:[r.jsx("span",{className:u(g.difficulty),children:g.difficulty}),r.jsxs("span",{className:"points",children:[g.points," pts"]})]}),r.jsxs("h3",{className:"exercise-title",children:[g.isProject&&"🎮 ",g.isCapstone&&"🏆 ",g.title]}),r.jsx("p",{className:"exercise-description",children:g.description}),P&&r.jsx("div",{className:"completed-badge",children:"✓ Completed"})]},g.id)})}),h.exitTicket&&r.jsxs("div",{className:"exit-ticket",children:[r.jsx("strong",{children:"Exit Ticket:"})," ",h.exitTicket]})]},h.day))})]})}const ja=()=>new Promise((e,t)=>{if(window.p5&&typeof window.p5=="function"){e(window.p5);return}const n=document.querySelector('script[src*="p5.min.js"]');if(n){n.addEventListener("load",()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))}),n.addEventListener("error",()=>t(new Error("Failed to load p5.js")));return}const i=document.createElement("script");i.src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js",i.async=!0,i.onload=()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))},i.onerror=()=>t(new Error("Failed to load p5.js")),document.head.appendChild(i)});function Ov({exerciseId:e,onBack:t,onComplete:n,isCompleted:i}){const o=Rv(e),[a,l]=_.useState((o==null?void 0:o.starterCode)||""),[u,h]=_.useState([]),[g,P]=_.useState(!1),[E,S]=_.useState(!1),[T,N]=_.useState(null),[I,L]=_.useState(!1),[m,w]=_.useState(null),j=_.useRef(null),R=_.useRef(null);if(_.useEffect(()=>{ja().then(()=>{L(!0),w(null)}).catch(b=>{console.error("Failed to load p5.js:",b),w(b.message)})},[]),_.useEffect(()=>{o&&(l(o.starterCode),h([]),P(!1))},[e]),_.useEffect(()=>()=>{R.current&&(R.current.remove(),R.current=null)},[]),!o)return r.jsxs("div",{className:"exercise-detail",children:[r.jsx("button",{className:"back-button",onClick:t,children:"← Back"}),r.jsx("p",{children:"Exercise not found"})]});const M=async()=>{R.current&&(R.current.remove(),R.current=null),j.current&&(j.current.innerHTML=""),S(!0);try{(!window.p5||typeof window.p5!="function")&&(j.current&&(j.current.innerHTML='<div class="canvas-placeholder">Loading p5.js...</div>'),await ja());const b=["setup","draw","preload","mousePressed","mouseReleased","mouseClicked","mouseMoved","mouseDragged","mouseWheel","doubleClicked","keyPressed","keyReleased","keyTyped","touchStarted","touchMoved","touchEnded","windowResized"];let x=a;b.forEach(te=>{const ye=new RegExp(`function\\s+${te}\\s*\\(`,"g");x=x.replace(ye,`p.${te} = function(`)});const Y=te=>{new Function("p",`
          with (p) {
            ${x}
          }
        `)(te)};R.current=new window.p5(Y,j.current)}catch(b){console.error("Code error:",b),j.current&&(j.current.innerHTML=`<div class="error-message">Error: ${b.message}</div>`)}},F=()=>{R.current&&(R.current.remove(),R.current=null),S(!1),j.current&&(j.current.innerHTML='<div class="canvas-placeholder">Click "Run Code" to see your sketch</div>')},C=()=>{l(o.starterCode),F()},p=b=>{u.includes(b)||h([...u,b])},y=()=>{P(!0),l(o.solutionCode)},v=()=>{i||n(o.id,o.points)},k=b=>`difficulty difficulty-${b.toLowerCase()}`;return r.jsxs("div",{className:"exercise-detail",children:[r.jsx("button",{className:"back-button",onClick:t,children:"← Back to Week"}),r.jsxs("div",{className:"exercise-header-detail",children:[r.jsxs("div",{className:"exercise-meta",children:[r.jsx("span",{className:k(o.difficulty),children:o.difficulty}),r.jsxs("span",{className:"points",children:[o.points," pts"]}),o.isProject&&r.jsx("span",{className:"project-badge",children:"Mini-Project"}),o.isCapstone&&r.jsx("span",{className:"capstone-badge",children:"Capstone"})]}),r.jsx("h1",{children:o.title}),r.jsx("p",{className:"exercise-description-large",children:o.description})]}),o.vocabularyTerms&&o.vocabularyTerms.length>0&&r.jsxs("div",{className:"vocab-tags",children:[r.jsx("span",{className:"vocab-label",children:"Key Terms:"}),o.vocabularyTerms.map(b=>{const x=Dv[b];return x?r.jsx("button",{className:"vocab-tag",onClick:()=>N(x),children:x.term},b):null})]}),T&&r.jsx("div",{className:"vocab-popup",onClick:()=>N(null),children:r.jsxs("div",{className:"vocab-popup-content",onClick:b=>b.stopPropagation(),children:[r.jsx("h3",{children:T.term}),r.jsx("p",{children:T.definition}),T.example&&r.jsx("code",{className:"vocab-example",children:T.example}),r.jsx("button",{onClick:()=>N(null),children:"Close"})]})}),r.jsxs("div",{className:"prompt-box",children:[r.jsx("h3",{children:"Challenge"}),r.jsx("pre",{children:o.prompt})]}),r.jsxs("div",{className:"editor-container",children:[r.jsxs("div",{className:"code-section",children:[r.jsxs("div",{className:"code-header",children:[r.jsx("h3",{children:"Your Code"}),r.jsxs("div",{className:"code-actions",children:[r.jsx("button",{onClick:M,className:"run-btn",children:"▶ Run"}),r.jsx("button",{onClick:F,className:"stop-btn",children:"⬛ Stop"}),r.jsx("button",{onClick:C,className:"reset-btn",children:"↺ Reset"})]})]}),r.jsx("textarea",{className:"code-editor",value:a,onChange:b=>l(b.target.value),spellCheck:!1})]}),r.jsxs("div",{className:"canvas-section",children:[r.jsx("h3",{children:"Output"}),r.jsx("div",{ref:j,className:"canvas-container",children:m?r.jsxs("div",{className:"error-message",children:["Failed to load p5.js: ",m,r.jsx("button",{onClick:()=>{w(null),ja().then(()=>L(!0)).catch(b=>w(b.message))},style:{marginTop:"10px",display:"block"},children:"Retry"})]}):I?r.jsx("div",{className:"canvas-placeholder",children:'Click "Run Code" to see your sketch'}):r.jsx("div",{className:"canvas-placeholder",children:"Loading p5.js..."})})]})]}),r.jsxs("div",{className:"hints-section",children:[r.jsx("h3",{children:"Hints"}),r.jsx("div",{className:"hints-list",children:o.hints.map((b,x)=>r.jsx("div",{className:"hint-item",children:u.includes(x)?r.jsxs("div",{className:"hint-revealed",children:[r.jsxs("span",{className:"hint-number",children:["Hint ",x+1,":"]})," ",b]}):r.jsxs("button",{className:"hint-button",onClick:()=>p(x),children:["Reveal Hint ",x+1]})},x))})]}),r.jsx("div",{className:"solution-section",children:g?r.jsxs("div",{className:"solution-revealed",children:[r.jsx("h3",{children:"Solution"}),r.jsx("pre",{className:"solution-code",children:o.solutionCode})]}):r.jsx("button",{className:"solution-button",onClick:y,children:"Show Solution (try on your own first!)"})}),o.rubric&&r.jsxs("div",{className:"rubric-section",children:[r.jsx("h3",{children:"Rubric"}),r.jsx("ul",{className:"rubric-list",children:Object.entries(o.rubric).map(([b,x])=>r.jsxs("li",{children:[r.jsxs("strong",{children:[b,":"]})," ",x]},b))})]}),r.jsx("div",{className:"complete-section",children:i?r.jsxs("div",{className:"already-completed",children:["✓ You've completed this exercise! (",o.points," points earned)"]}):r.jsxs("button",{className:"complete-button",onClick:v,children:["Mark as Complete (+",o.points," points)"]})})]})}function Mv({completedExercises:e=[],onSelectTopic:t,onSelectExercise:n,onBack:i}){const[o,a]=_.useState("all"),[l,u]=_.useState("all"),[h,g]=_.useState("learn"),P=new Set(e),E=_.useMemo(()=>{const m={};return ai.forEach(w=>{m[w.id]=ln.filter(j=>j.topic===w.id)}),m},[]),S=[{id:"all",label:"All Types"},{id:"pseudocode-to-js",label:"Pseudocode → JS"},{id:"js-to-pseudocode",label:"JS → Pseudocode"},{id:"fill-blank",label:"Fill in Blank"},{id:"trace",label:"Code Tracing"},{id:"multiple-choice",label:"Multiple Choice"}],T=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],N=_.useMemo(()=>ln.filter(m=>!(o!=="all"&&m.difficulty!==o||l!=="all"&&m.type!==l)),[o,l]),I=m=>{const w=E[m]||[];return{completed:w.filter(R=>P.has(R.id)).length,total:w.length}},L={completed:P.size,total:ln.length};return r.jsxs("div",{className:"pseudocode-hub",children:[r.jsx("button",{className:"back-btn",onClick:i,children:"← Back to Dashboard"}),r.jsxs("div",{className:"hub-header",children:[r.jsx("div",{className:"hub-icon",children:"[ CODE ]"}),r.jsx("h1",{children:"AP CSP Pseudocode"}),r.jsx("p",{children:"Learn to translate between AP CSP pseudocode and JavaScript"})]}),r.jsxs("div",{className:"progress-bar-container",children:[r.jsxs("div",{className:"progress-label",children:["Overall Progress: ",L.completed," / ",L.total," exercises"]}),r.jsx("div",{className:"progress-bar",children:r.jsx("div",{className:"progress-fill apcsp",style:{width:`${L.completed/L.total*100}%`}})})]}),r.jsxs("div",{className:"hub-tabs",children:[r.jsx("button",{className:`hub-tab ${h==="learn"?"active":""}`,onClick:()=>g("learn"),children:"Learn Topics"}),r.jsx("button",{className:`hub-tab ${h==="practice"?"active":""}`,onClick:()=>g("practice"),children:"Practice Exercises"})]}),h==="learn"&&r.jsx("div",{className:"topics-grid",children:ai.map(m=>{const w=I(m.id),j=w.total>0?w.completed/w.total*100:0;return r.jsxs("div",{className:"topic-card",onClick:()=>t(m.id),children:[r.jsx("h3",{children:m.title}),r.jsx("div",{className:"topic-code",children:r.jsx("code",{children:m.pseudocode})}),r.jsx("div",{className:"topic-arrow",children:"↓"}),r.jsx("div",{className:"topic-code js",children:r.jsx("code",{children:m.javascript})}),r.jsxs("p",{className:"topic-explanation",children:[m.explanation.substring(0,100),"..."]}),r.jsxs("div",{className:"topic-progress",children:[r.jsxs("span",{children:[w.completed,"/",w.total," exercises"]}),r.jsx("div",{className:"progress-bar small",children:r.jsx("div",{className:"progress-fill apcsp",style:{width:`${j}%`}})})]})]},m.id)})}),h==="practice"&&r.jsxs("div",{className:"practice-section",children:[r.jsxs("div",{className:"filter-bar",children:[r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Difficulty:"}),r.jsx("select",{value:o,onChange:m=>a(m.target.value),children:T.map(m=>r.jsx("option",{value:m.id,children:m.label},m.id))})]}),r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Type:"}),r.jsx("select",{value:l,onChange:m=>u(m.target.value),children:S.map(m=>r.jsx("option",{value:m.id,children:m.label},m.id))})]})]}),r.jsx("div",{className:"exercises-list",children:N.map(m=>{const w=P.has(m.id),j=ai.find(R=>R.id===m.topic);return r.jsxs("div",{className:`exercise-card ${w?"completed":""}`,onClick:()=>n(m.id),children:[r.jsx("div",{className:"exercise-status",children:w?"✓":"○"}),r.jsxs("div",{className:"exercise-content",children:[r.jsx("h4",{children:(j==null?void 0:j.title)||"Unknown Topic"}),r.jsx("p",{className:"exercise-type",children:m.type.replace(/-/g," ")}),r.jsx("p",{className:"exercise-prompt",children:m.prompt})]}),r.jsx("div",{className:`difficulty-badge ${m.difficulty}`,children:m.difficulty})]},m.id)})})]})]})}function Fv({topicId:e,onBack:t,onSelectExercise:n}){const[i,o]=_.useState(0),a=ai.findIndex(h=>h.id===e),l=ai[a],u=ln.filter(h=>h.topic===e).slice(0,5);return l?r.jsxs("div",{className:"topic-lesson",children:[r.jsx("button",{className:"back-btn",onClick:t,children:"← Back to Pseudocode Hub"}),r.jsxs("div",{className:"lesson-header",children:[r.jsx("h1",{children:l.title}),r.jsx("p",{children:l.explanation})]}),r.jsxs("div",{className:"comparison-box",children:[r.jsxs("div",{className:"comparison-side pseudocode",children:[r.jsx("h3",{children:"Pseudocode"}),r.jsx("div",{className:"code-panel",children:r.jsx("pre",{children:l.pseudocode})})]}),r.jsxs("div",{className:"comparison-side javascript",children:[r.jsx("h3",{children:"JavaScript"}),r.jsx("div",{className:"code-panel",children:r.jsx("pre",{children:l.javascript})})]})]}),l.examples&&l.examples.length>0&&r.jsxs("div",{className:"examples-list",children:[r.jsx("h3",{children:"Examples"}),l.examples.map((h,g)=>r.jsxs("div",{className:"example-item",children:[r.jsxs("div",{className:"code-panel",children:[r.jsx("div",{className:"code-panel-header given",children:"Pseudocode"}),r.jsx("pre",{children:h.pseudocode})]}),r.jsxs("div",{className:"code-panel",children:[r.jsx("div",{className:"code-panel-header answer",children:"JavaScript"}),r.jsx("pre",{children:h.javascript})]})]},g))]}),l.keyPoints&&l.keyPoints.length>0&&r.jsxs("div",{className:"key-points",children:[r.jsx("h3",{children:"Key Points"}),r.jsx("ul",{children:l.keyPoints.map((h,g)=>r.jsx("li",{children:h},g))})]}),u.length>0&&r.jsxs("div",{className:"related-exercises",children:[r.jsx("h3",{children:"Practice Exercises"}),r.jsx("div",{className:"exercises-list",children:u.map(h=>r.jsxs("div",{className:"exercise-card",onClick:()=>n(h.id),children:[r.jsxs("div",{className:"exercise-content",children:[r.jsx("h4",{children:h.type.replace(/-/g," ")}),r.jsx("p",{className:"exercise-prompt",children:h.prompt})]}),r.jsx("div",{className:`difficulty-badge ${h.difficulty}`,children:h.difficulty})]},h.id))})]})]}):r.jsxs("div",{className:"topic-lesson",children:[r.jsx("button",{className:"back-btn",onClick:t,children:"← Back"}),r.jsxs("div",{className:"error-message",children:[r.jsx("h1",{children:"Topic Not Found"}),r.jsx("p",{children:"This topic doesn't exist."})]})]})}function Uv({exerciseId:e,onComplete:t,onBack:n,isCompleted:i}){const o=ln.find(y=>y.id===e),a=o?ai.find(y=>y.id===o.topic):null,[l,u]=_.useState(""),[h,g]=_.useState({}),[P,E]=_.useState(!1),[S,T]=_.useState(!1),[N,I]=_.useState(!1),[L,m]=_.useState(0);if(_.useMemo(()=>{if((o==null?void 0:o.type)!=="fill-blank"||!(o!=null&&o.template))return null;const y=[],v=/___(\w+)___/g;let k;for(;(k=v.exec(o.template))!==null;)y.push({id:k[1],position:k.index});return y},[o]),!o)return r.jsxs("div",{className:"translation-exercise",children:[r.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),r.jsxs("div",{className:"error-message",children:[r.jsx("h1",{children:"Exercise Not Found"}),r.jsx("p",{children:"This exercise doesn't exist."})]})]});const w=y=>y.replace(/<--/g,"←").replace(/<-/g,"←").replace(/←/g,"←").replace(/:=/g,"←").replace(/!=/g,"≠").replace(/<>/g,"≠").replace(/>=/g,"≥").replace(/<=/g,"≤").replace(/DISPLAY\s*\(\s*/gi,"DISPLAY(").replace(/DISPLAY\s+([^(\n]+)/gi,"DISPLAY($1)").replace(/\)\s*\)/g,")").replace(/INPUT\s*\(\s*\)/gi,"INPUT()").replace(/\s+/g," ").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/\s*,\s*/g,",").split(`
`).map(v=>v.trim()).filter(v=>v.length>0).join(`
`).trim().toLowerCase(),j=y=>y.replace(/\b(var|const)\b/g,"let").replace(/;+/g,";").replace(/\s+/g," ").replace(/\s*;\s*/g,";").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/;$/gm,"").split(`
`).map(v=>v.trim()).filter(v=>v.length>0).join(`
`).trim().toLowerCase(),R=(y,v,k)=>{const b=k?w:j,x=b(y),Y=b(v);if(x===Y)return!0;const te=x.replace(/\n/g," ").replace(/\s+/g," "),ye=Y.replace(/\n/g," ").replace(/\s+/g," ");if(te===ye)return!0;const Se=z=>z.replace(/[;\s]/g,"");return Se(x)===Se(Y)},M=()=>{let y=!1;const v=o.type==="js-to-pseudocode";o.type==="fill-blank"?y=Object.entries(o.blankAnswers||{}).every(([k,b])=>{const x=(h[k]||"").trim().toLowerCase();return Array.isArray(b)?b.some(Y=>Y.toLowerCase()===x):b.toLowerCase()===x}):(y=R(l,o.answer,v),!y&&o.acceptableAnswers&&(y=o.acceptableAnswers.some(k=>R(l,k,v)))),T(y),E(!0),y&&!i&&t(o.id,10)},F=()=>{u(""),g({}),E(!1),T(!1),I(!1),m(0)},C=()=>{var y;L<(((y=o.hints)==null?void 0:y.length)||0)-1&&m(L+1)},p=()=>{if(!o.template)return null;const y=o.template.split(/(___\w+___)/g);return r.jsx("div",{className:"fill-blank-container",children:r.jsx("pre",{className:"fill-blank-code",children:y.map((v,k)=>{const b=v.match(/___(\w+)___/);if(b){const x=b[1];return r.jsx("input",{type:"text",className:`fill-blank-input ${P?S?"correct":"incorrect":""}`,value:h[x]||"",onChange:Y=>g({...h,[x]:Y.target.value}),placeholder:"...",disabled:P&&S},k)}return r.jsx("span",{children:v},k)})})})};return r.jsxs("div",{className:"translation-exercise",children:[r.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Pseudocode Hub"}),r.jsxs("div",{className:"exercise-header",children:[r.jsx("h1",{children:(a==null?void 0:a.title)||"Translation Exercise"}),r.jsxs("div",{className:"exercise-meta",children:[r.jsx("span",{className:`difficulty-badge ${o.difficulty}`,children:o.difficulty}),r.jsx("span",{className:"exercise-type-badge",children:o.type.replace(/-/g," ")}),i&&r.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),r.jsx("p",{className:"exercise-prompt-text",children:o.prompt}),o.type==="fill-blank"?p():r.jsxs("div",{className:"code-panels",children:[r.jsxs("div",{className:"code-panel",children:[r.jsx("div",{className:"code-panel-header given",children:o.type==="pseudocode-to-js"?"Pseudocode":"JavaScript"}),r.jsx("div",{className:"code-panel-content",children:r.jsx("pre",{children:o.given})})]}),r.jsxs("div",{className:"code-panel",children:[r.jsx("div",{className:"code-panel-header answer",children:o.type==="pseudocode-to-js"?"Your JavaScript":"Your Pseudocode"}),r.jsx("div",{className:"code-panel-content",children:r.jsx("textarea",{value:l,onChange:y=>u(y.target.value),placeholder:"Type your answer here...",disabled:P&&S})})]})]}),r.jsx("div",{className:"format-help",children:r.jsxs("details",{children:[r.jsx("summary",{children:"Accepted formats"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("code",{children:"←"})," or ",r.jsx("code",{children:"<--"})," or ",r.jsx("code",{children:"<-"})," for assignment"]}),r.jsxs("li",{children:[r.jsx("code",{children:"DISPLAY(x)"})," or ",r.jsx("code",{children:"DISPLAY x"})," for output"]}),r.jsxs("li",{children:[r.jsx("code",{children:"≠"})," or ",r.jsx("code",{children:"!="})," or ",r.jsx("code",{children:"<>"})," for not equal"]}),r.jsxs("li",{children:[r.jsx("code",{children:"≥"})," or ",r.jsx("code",{children:">="})," and ",r.jsx("code",{children:"≤"})," or ",r.jsx("code",{children:"<="})]}),r.jsx("li",{children:"Spacing and newlines are flexible"})]})]})}),r.jsx("div",{className:"exercise-actions",children:P?r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"action-btn",onClick:F,children:"Try Again"}),!S&&r.jsx("button",{className:"action-btn",onClick:()=>{o.type==="fill-blank"?g(o.blankAnswers||{}):u(o.answer)},children:"Show Solution"})]}):r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"action-btn",onClick:()=>I(!N),children:N?"Hide Hints":"Show Hints"}),r.jsx("button",{className:"action-btn primary",onClick:M,disabled:o.type==="fill-blank"?Object.keys(h).length===0:!l.trim(),children:"Check Answer"})]})}),N&&o.hints&&o.hints.length>0&&r.jsxs("div",{className:"hint-box",children:[r.jsx("h4",{children:"Hints"}),r.jsx("ul",{children:o.hints.slice(0,L+1).map((y,v)=>r.jsx("li",{children:y},v))}),L<o.hints.length-1&&r.jsx("button",{className:"action-btn",onClick:C,children:"Show Next Hint"})]}),P&&r.jsx("div",{className:`result-box ${S?"correct":"incorrect"}`,children:S?r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"✓ Correct!"}),r.jsx("p",{children:"Great job! You've mastered this translation."})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"✗ Not Quite"}),r.jsx("p",{children:"Check your answer and try again, or view the solution."})]})}),P&&!S&&r.jsxs("div",{className:"explanation-box",children:[r.jsx("h4",{children:"Explanation"}),r.jsx("p",{children:o.explanation})]})]})}const ba=[{id:"trace-1",title:"Simple Counter",code:`count ← 0
REPEAT 3 TIMES
{
   count ← count + 1
   DISPLAY(count)
}`,steps:[{line:1,action:"count ← 0",variables:{count:0},output:""},{line:2,action:"REPEAT 3 TIMES (iteration 1)",variables:{count:0},output:""},{line:4,action:"count ← count + 1",variables:{count:1},output:""},{line:5,action:"DISPLAY(count)",variables:{count:1},output:"1"},{line:2,action:"REPEAT 3 TIMES (iteration 2)",variables:{count:1},output:"1"},{line:4,action:"count ← count + 1",variables:{count:2},output:"1"},{line:5,action:"DISPLAY(count)",variables:{count:2},output:`1
2`},{line:2,action:"REPEAT 3 TIMES (iteration 3)",variables:{count:2},output:`1
2`},{line:4,action:"count ← count + 1",variables:{count:3},output:`1
2`},{line:5,action:"DISPLAY(count)",variables:{count:3},output:`1
2
3`}]},{id:"trace-2",title:"Sum of List",code:`list ← [3, 7, 2]
sum ← 0
FOR EACH item IN list
{
   sum ← sum + item
}
DISPLAY(sum)`,steps:[{line:1,action:"list ← [3, 7, 2]",variables:{list:[3,7,2],sum:void 0},output:""},{line:2,action:"sum ← 0",variables:{list:[3,7,2],sum:0},output:""},{line:3,action:"FOR EACH item IN list (item=3)",variables:{list:[3,7,2],sum:0,item:3},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:3,item:3},output:""},{line:3,action:"FOR EACH item IN list (item=7)",variables:{list:[3,7,2],sum:3,item:7},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:10,item:7},output:""},{line:3,action:"FOR EACH item IN list (item=2)",variables:{list:[3,7,2],sum:10,item:2},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:12,item:2},output:""},{line:7,action:"DISPLAY(sum)",variables:{list:[3,7,2],sum:12,item:2},output:"12"}]}];function zv({onBack:e}){const[t,n]=_.useState(ba[0]),[i,o]=_.useState(0),[a,l]=_.useState(!1),u=t.steps[i],h=Object.keys((u==null?void 0:u.variables)||{}),g=()=>{i<t.steps.length-1&&o(i+1)},P=()=>{i>0&&o(i-1)},E=()=>{o(0),l(!1)};return r.jsxs("div",{className:"code-tracer",children:[r.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),r.jsxs("div",{className:"hub-header",children:[r.jsx("div",{className:"hub-icon",children:"[ TRACE ]"}),r.jsx("h1",{children:"Code Tracer"}),r.jsx("p",{children:"Step through pseudocode and track variable values"})]}),r.jsxs("div",{className:"tracer-example-select",children:[r.jsx("label",{children:"Select Example:"}),r.jsx("select",{value:t.id,onChange:S=>{const T=ba.find(N=>N.id===S.target.value);n(T),o(0)},children:ba.map(S=>r.jsx("option",{value:S.id,children:S.title},S.id))})]}),r.jsxs("div",{className:"tracer-layout",children:[r.jsxs("div",{className:"tracer-code-panel",children:[r.jsx("h3",{children:"Code"}),r.jsx("pre",{className:"tracer-code",children:t.code.split(`
`).map((S,T)=>r.jsxs("div",{className:`code-line ${(u==null?void 0:u.line)===T+1?"current":""}`,children:[r.jsx("span",{className:"line-number",children:T+1}),r.jsx("span",{className:"line-content",children:S})]},T))})]}),r.jsxs("div",{className:"tracer-state-panel",children:[r.jsx("h3",{children:"Variables"}),r.jsxs("table",{className:"trace-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Variable"}),r.jsx("th",{children:"Value"})]})}),r.jsx("tbody",{children:h.map(S=>r.jsxs("tr",{children:[r.jsx("td",{children:S}),r.jsx("td",{children:(u==null?void 0:u.variables[S])===void 0?"—":JSON.stringify(u==null?void 0:u.variables[S])})]},S))})]}),r.jsx("h3",{children:"Output"}),r.jsx("div",{className:"tracer-output",children:r.jsx("pre",{children:(u==null?void 0:u.output)||"(no output yet)"})})]})]}),r.jsxs("div",{className:"tracer-controls",children:[r.jsx("button",{className:"tracer-btn",onClick:E,children:"Reset"}),r.jsx("button",{className:"tracer-btn",onClick:P,disabled:i===0,children:"← Prev"}),r.jsxs("span",{className:"step-counter",children:["Step ",i+1," / ",t.steps.length]}),r.jsx("button",{className:"tracer-btn",onClick:g,disabled:i===t.steps.length-1,children:"Next →"})]}),r.jsxs("div",{className:"current-action",children:[r.jsx("strong",{children:"Current Action:"})," ",u==null?void 0:u.action]})]})}const Ta=[{id:"robot-1",title:"Simple Path",description:"Move the robot to the goal (green square).",gridSize:5,start:{x:0,y:2,direction:"right"},goal:{x:4,y:2},obstacles:[],code:`REPEAT 4 TIMES
{
   MOVE_FORWARD()
}`,solution:["MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD"]},{id:"robot-2",title:"Turn and Move",description:"Navigate around to reach the goal.",gridSize:5,start:{x:0,y:0,direction:"right"},goal:{x:2,y:2},obstacles:[{x:1,y:0},{x:2,y:0}],code:`MOVE_FORWARD()
ROTATE_RIGHT()
MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()`,solution:["MOVE_FORWARD","ROTATE_RIGHT","MOVE_FORWARD","MOVE_FORWARD","ROTATE_LEFT","MOVE_FORWARD"]}];function Hv({onBack:e}){const[t,n]=_.useState(Ta[0]),[i,o]=_.useState(t.start),[a,l]=_.useState(-1),[u,h]=_.useState(!1),g=()=>{o(t.start),l(-1),h(!1)},P=()=>{const T=t.solution;if(a>=T.length-1)return;const N=a+1,I=T[N];let L={...i};if(I==="MOVE_FORWARD")switch(i.direction){case"up":L.y=Math.max(0,i.y-1);break;case"down":L.y=Math.min(t.gridSize-1,i.y+1);break;case"left":L.x=Math.max(0,i.x-1);break;case"right":L.x=Math.min(t.gridSize-1,i.x+1);break}else if(I==="ROTATE_RIGHT"){const m=["up","right","down","left"],w=m.indexOf(i.direction);L.direction=m[(w+1)%4]}else if(I==="ROTATE_LEFT"){const m=["up","right","down","left"],w=m.indexOf(i.direction);L.direction=m[(w+3)%4]}o(L),l(N),L.x===t.goal.x&&L.y===t.goal.y&&h(!0)},E=()=>{g();let T=-1;const N=setInterval(()=>{if(T++,T>=t.solution.length){clearInterval(N);return}P()},500)},S=()=>{const T=[];for(let N=0;N<t.gridSize;N++)for(let I=0;I<t.gridSize;I++){const L=i.x===I&&i.y===N,m=t.goal.x===I&&t.goal.y===N,w=t.obstacles.some(R=>R.x===I&&R.y===N);let j="grid-cell";w&&(j+=" obstacle"),m&&(j+=" goal"),L&&(j+=" robot"),T.push(r.jsxs("div",{className:j,children:[L&&r.jsxs("span",{className:"robot-arrow",children:[i.direction==="up"&&"↑",i.direction==="down"&&"↓",i.direction==="left"&&"←",i.direction==="right"&&"→"]}),m&&!L&&"★"]},`${I}-${N}`))}return T};return r.jsxs("div",{className:"robot-grid-page",children:[r.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),r.jsxs("div",{className:"hub-header",children:[r.jsx("div",{className:"hub-icon",children:"[ ROBOT ]"}),r.jsx("h1",{children:"Robot Navigation"}),r.jsx("p",{children:"Practice AP CSP robot commands"})]}),r.jsxs("div",{className:"challenge-selector",children:[r.jsx("label",{children:"Challenge:"}),r.jsx("select",{value:t.id,onChange:T=>{const N=Ta.find(I=>I.id===T.target.value);n(N),o(N.start),l(-1),h(!1)},children:Ta.map(T=>r.jsx("option",{value:T.id,children:T.title},T.id))})]}),r.jsx("p",{className:"challenge-desc",children:t.description}),r.jsxs("div",{className:"robot-layout",children:[r.jsx("div",{className:"grid-container",children:r.jsx("div",{className:"robot-grid",style:{gridTemplateColumns:`repeat(${t.gridSize}, 1fr)`,gridTemplateRows:`repeat(${t.gridSize}, 1fr)`},children:S()})}),r.jsxs("div",{className:"code-panel",children:[r.jsx("h3",{children:"Pseudocode"}),r.jsx("pre",{children:t.code})]})]}),r.jsxs("div",{className:"robot-controls",children:[r.jsx("button",{className:"tracer-btn",onClick:g,children:"Reset"}),r.jsx("button",{className:"tracer-btn",onClick:P,disabled:u,children:"Step"}),r.jsx("button",{className:"tracer-btn primary",onClick:E,children:"Run All"})]}),u&&r.jsxs("div",{className:"result-box correct",children:[r.jsx("h3",{children:"✓ Goal Reached!"}),r.jsx("p",{children:"The robot successfully navigated to the goal."})]})]})}function Bv({completedExercises:e=[],onSelectExercise:t,onSelectBuilder:n,onSelectSymbols:i,onBack:o}){const[a,l]=_.useState("all"),[u,h]=_.useState("learn"),g=new Set(e),P=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],E=_.useMemo(()=>li.filter(T=>!(a!=="all"&&T.difficulty!==a)),[a]),S={completed:g.size,total:li.length};return r.jsxs("div",{className:"flowchart-hub",children:[r.jsx("button",{className:"back-btn",onClick:o,children:"← Back to Dashboard"}),r.jsxs("div",{className:"hub-header",children:[r.jsx("div",{className:"hub-icon",children:"[ FLOW ]"}),r.jsx("h1",{children:"Flowcharts"}),r.jsx("p",{children:"Learn to read, interpret, and create flowcharts"})]}),r.jsxs("div",{className:"progress-bar-container",children:[r.jsxs("div",{className:"progress-label",children:["Overall Progress: ",S.completed," / ",S.total," exercises"]}),r.jsx("div",{className:"progress-bar",children:r.jsx("div",{className:"progress-fill apcsp",style:{width:`${S.completed/S.total*100}%`}})})]}),r.jsxs("div",{className:"hub-tabs",children:[r.jsx("button",{className:`hub-tab ${u==="learn"?"active":""}`,onClick:()=>h("learn"),children:"Learn Symbols"}),r.jsx("button",{className:`hub-tab ${u==="practice"?"active":""}`,onClick:()=>h("practice"),children:"Practice"}),r.jsx("button",{className:`hub-tab ${u==="builder"?"active":""}`,onClick:()=>h("builder"),children:"Build"})]}),u==="learn"&&r.jsxs("div",{className:"symbols-section",children:[r.jsx("h2",{children:"Flowchart Symbols"}),r.jsx("p",{className:"section-intro",children:"Learn the standard flowchart symbols used in AP CSP."}),r.jsx("div",{className:"symbols-grid",children:wl.map(T=>r.jsxs("div",{className:"symbol-card",style:{borderColor:T.color},children:[r.jsxs("div",{className:"symbol-shape",style:{color:T.color},children:[T.id==="oval"&&"⬭",T.id==="rectangle"&&"▭",T.id==="diamond"&&"◇",T.id==="parallelogram"&&"▱",T.id==="arrow"&&"→"]}),r.jsx("h3",{children:T.name}),r.jsx("p",{className:"symbol-purpose",children:T.purpose}),r.jsx("p",{className:"symbol-desc",children:T.description})]},T.id))}),r.jsx("button",{className:"action-btn",onClick:i,children:"View Full Symbol Guide →"})]}),u==="practice"&&r.jsxs("div",{className:"practice-section",children:[r.jsx("div",{className:"filter-bar",children:r.jsxs("div",{className:"filter-group",children:[r.jsx("label",{children:"Difficulty:"}),r.jsx("select",{value:a,onChange:T=>l(T.target.value),children:P.map(T=>r.jsx("option",{value:T.id,children:T.label},T.id))})]})}),r.jsx("div",{className:"exercises-list",children:E.map(T=>{const N=g.has(T.id);return r.jsxs("div",{className:`exercise-card ${N?"completed":""}`,onClick:()=>t(T.id),children:[r.jsx("div",{className:"exercise-status",children:N?"✓":"○"}),r.jsxs("div",{className:"exercise-content",children:[r.jsx("h4",{children:T.title}),r.jsx("p",{className:"exercise-type",children:T.type}),r.jsx("p",{className:"exercise-prompt",children:T.question})]}),r.jsx("div",{className:`difficulty-badge ${T.difficulty}`,children:T.difficulty})]},T.id)})})]}),u==="builder"&&r.jsx("div",{className:"builder-section",children:r.jsxs("div",{className:"builder-intro",children:[r.jsx("h2",{children:"Flowchart Builder"}),r.jsx("p",{children:"Create your own flowcharts using drag-and-drop!"}),r.jsxs("ul",{children:[r.jsx("li",{children:"Drag symbols from the palette onto the canvas"}),r.jsx("li",{children:"Connect nodes with arrows to show flow"}),r.jsx("li",{children:"Edit text inside each shape"}),r.jsx("li",{children:"Export your flowchart as an image"})]}),r.jsx("button",{className:"action-btn primary",onClick:n,children:"Open Flowchart Builder →"})]})})]})}function Wv({onBack:e}){const[t,n]=_.useState(wl[0].id);return r.jsxs("div",{className:"symbol-lesson",children:[r.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),r.jsxs("div",{className:"hub-header",children:[r.jsx("div",{className:"hub-icon",children:"[ SHAPES ]"}),r.jsx("h1",{children:"Flowchart Symbols"}),r.jsx("p",{children:"Learn the standard flowchart symbols used in AP CSP"})]}),r.jsx("div",{className:"symbols-detail-list",children:wl.map(i=>r.jsxs("div",{className:`symbol-detail-card ${t===i.id?"expanded":""}`,onClick:()=>n(t===i.id?null:i.id),children:[r.jsxs("div",{className:"symbol-header",children:[r.jsxs("div",{className:"symbol-preview",style:{color:i.color},children:[i.id==="oval"&&"⬭",i.id==="rectangle"&&"▭",i.id==="diamond"&&"◇",i.id==="parallelogram"&&"▱",i.id==="arrow"&&"→"]}),r.jsxs("div",{className:"symbol-info",children:[r.jsx("h3",{style:{color:i.color},children:i.name}),r.jsx("p",{children:i.purpose})]}),r.jsx("span",{className:"expand-icon",children:t===i.id?"−":"+"})]}),t===i.id&&r.jsxs("div",{className:"symbol-details",children:[r.jsx("p",{className:"symbol-description",children:i.description}),r.jsxs("div",{className:"symbol-examples",children:[r.jsx("h4",{children:"Examples:"}),r.jsx("ul",{children:i.examples.map((o,a)=>r.jsx("li",{children:o},a))})]})]})]},i.id))}),r.jsxs("div",{className:"symbol-tips",children:[r.jsx("h3",{children:"Tips for Reading Flowcharts"}),r.jsxs("ul",{children:[r.jsxs("li",{children:["Always start at the ",r.jsx("strong",{children:"oval"}),' labeled "Start"']}),r.jsxs("li",{children:["Follow the ",r.jsx("strong",{children:"arrows"})," to determine the order of operations"]}),r.jsxs("li",{children:["At a ",r.jsx("strong",{children:"diamond"}),", evaluate the condition to choose which path to follow"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Rectangles"})," contain actions - execute them in order"]}),r.jsxs("li",{children:[r.jsx("strong",{children:"Parallelograms"})," show input/output operations"]}),r.jsxs("li",{children:["End at the ",r.jsx("strong",{children:"oval"}),' labeled "End"']})]})]})]})}function Vv({onBack:e}){var h;const[t,n]=_.useState([{id:"1",type:"oval",label:"Start",x:200,y:50},{id:"2",type:"rectangle",label:"Process",x:200,y:150},{id:"3",type:"oval",label:"End",x:200,y:250}]),[i,o]=_.useState(null),a=g=>{const P={oval:"Start/End",rectangle:"Process",diamond:"Decision?",parallelogram:"Input/Output"},E={id:Date.now().toString(),type:g,label:P[g],x:200+Math.random()*100,y:100+Math.random()*200};n([...t,E])},l=(g,P)=>{n(t.map(E=>E.id===g?{...E,label:P}:E))},u=g=>{n(t.filter(P=>P.id!==g)),o(null)};return r.jsxs("div",{className:"flowchart-builder-page",children:[r.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),r.jsxs("div",{className:"hub-header",children:[r.jsx("div",{className:"hub-icon",children:"[ BUILD ]"}),r.jsx("h1",{children:"Flowchart Builder"}),r.jsx("p",{children:"Create your own flowcharts"})]}),r.jsxs("div",{className:"builder-layout",children:[r.jsxs("div",{className:"symbol-palette",children:[r.jsx("h3",{children:"Symbols"}),r.jsxs("button",{className:"palette-btn",onClick:()=>a("oval"),children:[r.jsx("span",{className:"symbol-icon",children:"⬭"})," Oval"]}),r.jsxs("button",{className:"palette-btn",onClick:()=>a("rectangle"),children:[r.jsx("span",{className:"symbol-icon",children:"▭"})," Rectangle"]}),r.jsxs("button",{className:"palette-btn",onClick:()=>a("diamond"),children:[r.jsx("span",{className:"symbol-icon",children:"◇"})," Diamond"]}),r.jsxs("button",{className:"palette-btn",onClick:()=>a("parallelogram"),children:[r.jsx("span",{className:"symbol-icon",children:"▱"})," Parallelogram"]})]}),r.jsx("div",{className:"builder-canvas",children:r.jsx("div",{className:"canvas-area",children:t.map(g=>r.jsxs("div",{className:`builder-node ${g.type} ${i===g.id?"selected":""}`,style:{left:g.x,top:g.y},onClick:()=>o(g.id),children:[g.type==="oval"&&r.jsx("span",{className:"node-shape oval-shape",children:g.label}),g.type==="rectangle"&&r.jsx("span",{className:"node-shape rect-shape",children:g.label}),g.type==="diamond"&&r.jsx("span",{className:"node-shape diamond-shape",children:g.label}),g.type==="parallelogram"&&r.jsx("span",{className:"node-shape para-shape",children:g.label})]},g.id))})}),i&&r.jsxs("div",{className:"node-editor",children:[r.jsx("h3",{children:"Edit Node"}),r.jsx("input",{type:"text",value:((h=t.find(g=>g.id===i))==null?void 0:h.label)||"",onChange:g=>l(i,g.target.value),placeholder:"Enter label..."}),r.jsx("button",{className:"action-btn",onClick:()=>u(i),children:"Delete Node"})]})]}),r.jsx("div",{className:"builder-tips",children:r.jsx("p",{children:"Click a symbol to add it. Click a node to edit or delete it."})})]})}function $v({exerciseId:e,onComplete:t,onBack:n,isCompleted:i}){const o=li.find(m=>m.id===e),[a,l]=_.useState(""),[u,h]=_.useState(!1),[g,P]=_.useState(!1),[E,S]=_.useState(!1),[T,N]=_.useState(0);if(!o)return r.jsxs("div",{className:"flowchart-exercise",children:[r.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),r.jsx("div",{className:"error-message",children:r.jsx("h1",{children:"Exercise Not Found"})})]});const I=()=>{const m=a.trim().toLowerCase(),w=o.answer.trim().toLowerCase(),j=m===w;P(j),h(!0),j&&!i&&t(o.id,10)},L=()=>{l(""),h(!1),P(!1),S(!1),N(0)};return r.jsxs("div",{className:"flowchart-exercise",children:[r.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Flowcharts"}),r.jsxs("div",{className:"exercise-header",children:[r.jsx("h1",{children:o.title}),r.jsxs("div",{className:"exercise-meta",children:[r.jsx("span",{className:`difficulty-badge ${o.difficulty}`,children:o.difficulty}),r.jsx("span",{className:"exercise-type-badge",children:o.type}),i&&r.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),r.jsx("p",{className:"exercise-description",children:o.description}),r.jsxs("div",{className:"flowchart-question",children:[r.jsx("h3",{children:"Question"}),r.jsx("p",{className:"question-text",children:o.question})]}),r.jsxs("div",{className:"answer-section",children:[r.jsx("label",{children:"Your Answer:"}),r.jsx("input",{type:"text",value:a,onChange:m=>l(m.target.value),placeholder:"Type your answer...",disabled:u&&g})]}),r.jsx("div",{className:"exercise-actions",children:u?r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"action-btn",onClick:L,children:"Try Again"}),!g&&r.jsx("button",{className:"action-btn",onClick:()=>l(o.answer),children:"Show Solution"})]}):r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"action-btn",onClick:()=>S(!E),children:E?"Hide Hints":"Show Hints"}),r.jsx("button",{className:"action-btn primary",onClick:I,disabled:!a.trim(),children:"Check Answer"})]})}),E&&o.hints&&o.hints.length>0&&r.jsxs("div",{className:"hint-box",children:[r.jsx("h4",{children:"Hints"}),r.jsx("ul",{children:o.hints.slice(0,T+1).map((m,w)=>r.jsx("li",{children:m},w))}),T<o.hints.length-1&&r.jsx("button",{className:"action-btn",onClick:()=>N(T+1),children:"Show Next Hint"})]}),u&&r.jsx("div",{className:`result-box ${g?"correct":"incorrect"}`,children:g?r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"✓ Correct!"}),r.jsx("p",{children:"You correctly interpreted the flowchart."})]}):r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"✗ Not Quite"}),r.jsx("p",{children:"Check your answer and try again."})]})}),u&&o.explanation&&r.jsxs("div",{className:"explanation-box",children:[r.jsx("h4",{children:"Explanation"}),r.jsx("p",{children:o.explanation})]})]})}function Gv(){const[e,t]=_.useState(null),[n,i]=_.useState(!1),[o,a]=_.useState(null),[l,u]=_.useState("dashboard"),[h,g]=_.useState(null),[P,E]=_.useState(null),[S,T]=_.useState([]),[N,I]=_.useState([]),[L,m]=_.useState([]),[w,j]=_.useState(0),[R,M]=_.useState([]),[F,C]=_.useState(null),[p,y]=_.useState(null),[v,k]=_.useState([]),[b,x]=_.useState([]),[Y,te]=_.useState(null),[ye,Se]=_.useState(null),[z,V]=_.useState(null);_.useEffect(()=>{const W=localStorage.getItem("cyberrange-session");if(W)try{const Z=JSON.parse(W);Z.user&&(t(Z.user),G(Z.user))}catch(Z){console.error("Error loading session:",Z)}},[]);const G=async W=>{ne()},ne=()=>{const W=localStorage.getItem("cyberrange-progress");if(W)try{const Z=JSON.parse(W);T(Z.completed||[]),I(Z.completedScenarios||[]),m(Z.completedExercises||[]),k(Z.completedPseudocode||[]),x(Z.completedFlowcharts||[]),j(Z.points||0)}catch(Z){console.error("Error loading local progress:",Z)}},H=_.useCallback(async(W,Z,Eo,gn,Ur,zr)=>{localStorage.setItem("cyberrange-progress",JSON.stringify({completed:W,completedScenarios:Z,completedExercises:Eo,completedPseudocode:gn,completedFlowcharts:Ur,points:zr}))},[e]);_.useEffect(()=>{e&&H(S,N,L,v,b,w)},[S,N,L,v,b,w,e,H]);const $=W=>{t(W),i(!1),localStorage.setItem("cyberrange-session",JSON.stringify({user:W})),W.completedChallenges&&(T(W.completedChallenges),I(W.completedScenarios||[]),m(W.completedExercises||[]),j(W.totalPoints||0)),G()},J=W=>{i(!0),a(W)},ae=()=>{t(null),i(!1),a(null),T([]),I([]),m([]),k([]),x([]),M([]),j(0),u("dashboard"),C(null),y(null),te(null),Se(null),V(null),localStorage.removeItem("cyberrange-session")},we=W=>{g(W),u("challenges")},Ke=W=>{E(W),u("challenge-detail")},Co=(W,Z)=>{S.includes(W)||(T([...S,W]),j(w+Z))},jo=()=>{E(null),u("challenges")},Bt=()=>{g(null),E(null),u("dashboard")},_n=(W,Z)=>{N.includes(W)||(I([...N,W]),j(w+Z))},ji=()=>{window.confirm("Are you sure you want to reset all progress? This cannot be undone.")&&(T([]),I([]),m([]),k([]),x([]),j(0),localStorage.removeItem("cyberrange-progress"),u("dashboard"))},bi=W=>{C(W),u("week")},Ti=W=>{y(W),u("exercise-detail")},Ni=(W,Z)=>{L.includes(W)||(m([...L,W]),j(w+Z))},Lr=()=>{y(null),u("week")},bo=()=>{C(null),u("dashboard")},To=W=>{u(W==="pseudocode"?"pseudocode-hub":"flowchart-hub")},Or=W=>{te(W),u("topic-lesson")},Ln=W=>{Se(W),u("pseudocode-exercise")},Mr=(W,Z)=>{v.includes(W)||(k([...v,W]),j(w+Z))},No=W=>{V(W),u("flowchart-exercise")},Ei=(W,Z)=>{b.includes(W)||(x([...b,W]),j(w+Z))},mn=()=>{u("dashboard")},Fr=()=>{u("dashboard")},be=()=>{te(null),u("pseudocode-hub")},Ee=()=>{Se(null),u("pseudocode-hub")},On=()=>{V(null),u("flowchart-hub")};return!e&&!n?r.jsx(Ev,{onLogin:$,onTeacherMode:J}):n&&o?r.jsx(Iv,{classCode:o,onBack:()=>{i(!1),a(null)}}):r.jsxs("div",{className:"app",children:[r.jsx("header",{className:"header",children:r.jsxs("div",{className:"header-content",children:[r.jsx("div",{className:"logo",children:"CyberEd Range"}),r.jsxs("nav",{className:"nav",children:[r.jsx("button",{className:`nav-btn ${l==="dashboard"?"active":""}`,onClick:Bt,children:"Dashboard"}),r.jsx("button",{className:`nav-btn ${l==="network-monitor"?"active":""}`,onClick:()=>u("network-monitor"),children:"Network Monitor"}),r.jsx("button",{className:`nav-btn ${l==="vocabulary"?"active":""}`,onClick:()=>u("vocabulary"),children:"Vocabulary"}),r.jsx("button",{className:"nav-btn",onClick:ji,style:{background:"rgba(244, 67, 54, 0.2)",borderColor:"#f44336"},children:"Reset"}),r.jsxs("div",{className:"user-info",children:[r.jsx("span",{className:"user-name",children:e==null?void 0:e.name}),r.jsx("span",{className:"user-class",children:e==null?void 0:e.classCode}),r.jsx("button",{className:"logout-btn",onClick:ae,children:"Logout"})]})]})]})}),r.jsxs("main",{className:"main-content",children:[l==="dashboard"&&r.jsx(Ey,{studentName:e==null?void 0:e.name,totalPoints:w,assignments:R,completedChallenges:S,completedScenarios:N,completedExercises:L,completedPseudocode:v,completedFlowcharts:b,onSelectCategory:we,onSelectNetworkMonitor:()=>u("network-monitor"),onSelectWeek:bi,onSelectAPCSP:To}),l==="challenges"&&h&&r.jsxs(r.Fragment,{children:[r.jsx("button",{className:"back-btn",onClick:Bt,children:"Back to Dashboard"}),r.jsx("div",{style:{marginTop:"1rem"},children:r.jsx(Py,{category:h,completedChallenges:S,onSelectChallenge:Ke})})]}),l==="challenge-detail"&&P&&r.jsx(Ay,{challengeId:P,onComplete:Co,onBack:jo,isCompleted:S.includes(P)}),l==="week"&&F&&r.jsx(Lv,{weekKey:F,onSelectExercise:Ti,onBack:bo,completedExercises:L}),l==="exercise-detail"&&p&&r.jsx(Ov,{exerciseId:p,onComplete:Ni,onBack:Lr,isCompleted:L.includes(p)}),l==="vocabulary"&&r.jsx(Iy,{}),l==="network-monitor"&&r.jsx(Xy,{completedScenarios:N,onCompleteScenario:_n,onBack:Bt}),l==="pseudocode-hub"&&r.jsx(Mv,{completedExercises:v,onSelectTopic:Or,onSelectExercise:Ln,onBack:mn}),l==="topic-lesson"&&Y&&r.jsx(Fv,{topicId:Y,onBack:be,onSelectExercise:Ln}),l==="pseudocode-exercise"&&ye&&r.jsx(Uv,{exerciseId:ye,onComplete:Mr,onBack:Ee,isCompleted:v.includes(ye)}),l==="code-tracer"&&r.jsx(zv,{onBack:mn}),l==="robot-grid"&&r.jsx(Hv,{onBack:mn}),l==="flowchart-hub"&&r.jsx(Bv,{completedExercises:b,onSelectExercise:No,onSelectBuilder:()=>u("flowchart-builder"),onSelectSymbols:()=>u("symbol-lesson"),onBack:Fr}),l==="symbol-lesson"&&r.jsx(Wv,{onBack:()=>u("flowchart-hub")}),l==="flowchart-exercise"&&z&&r.jsx($v,{exerciseId:z,onComplete:Ei,onBack:On,isCompleted:b.includes(z)}),l==="flowchart-builder"&&r.jsx(Vv,{onBack:()=>u("flowchart-hub")})]})]})}Na.createRoot(document.getElementById("root")).render(r.jsx(cm.StrictMode,{children:r.jsx(Gv,{})}));
