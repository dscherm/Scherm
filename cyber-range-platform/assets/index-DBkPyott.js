(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function Gf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vd={exports:{}},io={},$d={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),Yf=Symbol.for("react.portal"),Xf=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),Qf=Symbol.for("react.profiler"),qf=Symbol.for("react.provider"),Jf=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),em=Symbol.for("react.suspense"),tm=Symbol.for("react.memo"),nm=Symbol.for("react.lazy"),du=Symbol.iterator;function rm(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var Gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yd=Object.assign,Xd={};function gr(e,t,n){this.props=e,this.context=t,this.refs=Xd,this.updater=n||Gd}gr.prototype.isReactComponent={};gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kd(){}Kd.prototype=gr.prototype;function bl(e,t,n){this.props=e,this.context=t,this.refs=Xd,this.updater=n||Gd}var jl=bl.prototype=new Kd;jl.constructor=bl;Yd(jl,gr.prototype);jl.isPureReactComponent=!0;var hu=Array.isArray,Qd=Object.prototype.hasOwnProperty,El={current:null},qd={key:!0,ref:!0,__self:!0,__source:!0};function Jd(e,t,n){var r,s={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Qd.call(t,r)&&!qd.hasOwnProperty(r)&&(s[r]=t[r]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var h=Array(u),g=0;g<u;g++)h[g]=arguments[g+2];s.children=h}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return{$$typeof:Ni,type:e,key:a,ref:l,props:s,_owner:El.current}}function im(e,t){return{$$typeof:Ni,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Nl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ni}function sm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pu=/\/+/g;function Go(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sm(""+e.key):t.toString(36)}function gs(e,t,n,r,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ni:case Yf:l=!0}}if(l)return l=e,s=s(l),e=r===""?"."+Go(l,0):r,hu(s)?(n="",e!=null&&(n=e.replace(pu,"$&/")+"/"),gs(s,t,n,"",function(g){return g})):s!=null&&(Nl(s)&&(s=im(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(pu,"$&/")+"/")+e)),t.push(s)),1;if(l=0,r=r===""?".":r+":",hu(e))for(var u=0;u<e.length;u++){a=e[u];var h=r+Go(a,u);l+=gs(a,t,n,h,s)}else if(h=rm(e),typeof h=="function")for(e=h.call(e),u=0;!(a=e.next()).done;)a=a.value,h=r+Go(a,u++),l+=gs(a,t,n,h,s);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ji(e,t,n){if(e==null)return e;var r=[],s=0;return gs(e,r,"","",function(a){return t.call(n,a,s++)}),r}function om(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},ys={transition:null},am={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ys,ReactCurrentOwner:El};function Zd(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:Ji,forEach:function(e,t,n){Ji(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ji(e,function(){t++}),t},toArray:function(e){return Ji(e,function(t){return t})||[]},only:function(e){if(!Nl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=gr;Y.Fragment=Xf;Y.Profiler=Qf;Y.PureComponent=bl;Y.StrictMode=Kf;Y.Suspense=em;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=am;Y.act=Zd;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yd({},e.props),s=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=El.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(h in t)Qd.call(t,h)&&!qd.hasOwnProperty(h)&&(r[h]=t[h]===void 0&&u!==void 0?u[h]:t[h])}var h=arguments.length-2;if(h===1)r.children=n;else if(1<h){u=Array(h);for(var g=0;g<h;g++)u[g]=arguments[g+2];r.children=u}return{$$typeof:Ni,type:e.type,key:s,ref:a,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:Jf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qf,_context:e},e.Consumer=e};Y.createElement=Jd;Y.createFactory=function(e){var t=Jd.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Zf,render:e}};Y.isValidElement=Nl;Y.lazy=function(e){return{$$typeof:nm,_payload:{_status:-1,_result:e},_init:om}};Y.memo=function(e,t){return{$$typeof:tm,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=ys.transition;ys.transition={};try{e()}finally{ys.transition=t}};Y.unstable_act=Zd;Y.useCallback=function(e,t){return He.current.useCallback(e,t)};Y.useContext=function(e){return He.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return He.current.useDeferredValue(e)};Y.useEffect=function(e,t){return He.current.useEffect(e,t)};Y.useId=function(){return He.current.useId()};Y.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return He.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};Y.useRef=function(e){return He.current.useRef(e)};Y.useState=function(e){return He.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return He.current.useTransition()};Y.version="18.3.1";$d.exports=Y;var L=$d.exports;const lm=Gf(L);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=L,um=Symbol.for("react.element"),dm=Symbol.for("react.fragment"),hm=Object.prototype.hasOwnProperty,pm=cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fm={key:!0,ref:!0,__self:!0,__source:!0};function eh(e,t,n){var r,s={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)hm.call(t,r)&&!fm.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:um,type:e,key:a,ref:l,props:s,_owner:pm.current}}io.Fragment=dm;io.jsx=eh;io.jsxs=eh;Vd.exports=io;var o=Vd.exports,ja={},th={exports:{}},et={},nh={exports:{}},rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,V){var G=z.length;z.push(V);e:for(;0<G;){var ee=G-1>>>1,H=z[ee];if(0<s(H,V))z[ee]=V,z[G]=H,G=ee;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var V=z[0],G=z.pop();if(G!==V){z[0]=G;e:for(var ee=0,H=z.length,$=H>>>1;ee<$;){var q=2*(ee+1)-1,oe=z[q],ye=q+1,Xe=z[ye];if(0>s(oe,G))ye<H&&0>s(Xe,oe)?(z[ee]=Xe,z[ye]=G,ee=ye):(z[ee]=oe,z[q]=G,ee=q);else if(ye<H&&0>s(Xe,G))z[ee]=Xe,z[ye]=G,ee=ye;else break e}}return V}function s(z,V){var G=z.sortIndex-V.sortIndex;return G!==0?G:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var h=[],g=[],N=1,P=null,C=3,b=!1,E=!1,I=!1,O=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(z){for(var V=n(g);V!==null;){if(V.callback===null)r(g);else if(V.startTime<=z)r(g),V.sortIndex=V.expirationTime,t(h,V);else break;V=n(g)}}function _(z){if(I=!1,T(z),!E)if(n(h)!==null)E=!0,Me(F);else{var V=n(g);V!==null&&xe(_,V.startTime-z)}}function F(z,V){E=!1,I&&(I=!1,v(p),p=-1),b=!0;var G=C;try{for(T(V),P=n(h);P!==null&&(!(P.expirationTime>V)||z&&!S());){var ee=P.callback;if(typeof ee=="function"){P.callback=null,C=P.priorityLevel;var H=ee(P.expirationTime<=V);V=e.unstable_now(),typeof H=="function"?P.callback=H:P===n(h)&&r(h),T(V)}else r(h);P=n(h)}if(P!==null)var $=!0;else{var q=n(g);q!==null&&xe(_,q.startTime-V),$=!1}return $}finally{P=null,C=G,b=!1}}var D=!1,w=null,p=-1,f=5,y=-1;function S(){return!(e.unstable_now()-y<f)}function j(){if(w!==null){var z=e.unstable_now();y=z;var V=!0;try{V=w(!0,z)}finally{V?k():(D=!1,w=null)}}else D=!1}var k;if(typeof x=="function")k=function(){x(j)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Se=ie.port2;ie.port1.onmessage=j,k=function(){Se.postMessage(null)}}else k=function(){O(j,0)};function Me(z){w=z,D||(D=!0,k())}function xe(z,V){p=O(function(){z(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){E||b||(E=!0,Me(F))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return n(h)},e.unstable_next=function(z){switch(C){case 1:case 2:case 3:var V=3;break;default:V=C}var G=C;C=V;try{return z()}finally{C=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=C;C=z;try{return V()}finally{C=G}},e.unstable_scheduleCallback=function(z,V,G){var ee=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ee+G:ee):G=ee,z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=G+H,z={id:N++,callback:V,priorityLevel:z,startTime:G,expirationTime:H,sortIndex:-1},G>ee?(z.sortIndex=G,t(g,z),n(h)===null&&z===n(g)&&(I?(v(p),p=-1):I=!0,xe(_,G-ee))):(z.sortIndex=H,t(h,z),E||b||(E=!0,Me(F))),z},e.unstable_shouldYield=S,e.unstable_wrapCallback=function(z){var V=C;return function(){var G=C;C=V;try{return z.apply(this,arguments)}finally{C=G}}}})(rh);nh.exports=rh;var mm=nh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm=L,Ze=mm;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ih=new Set,ci={};function In(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(ci[e]=t,e=0;e<t.length;e++)ih.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,ym=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fu={},mu={};function vm(e){return Ea.call(mu,e)?!0:Ea.call(fu,e)?!1:ym.test(e)?mu[e]=!0:(fu[e]=!0,!1)}function xm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wm(e,t,n,r){if(t===null||typeof t>"u"||xm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,s,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Pl=/[\-:]([a-z])/g;function Al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Pl,Al);Ae[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Pl,Al);Ae[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pl,Al);Ae[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Il(e,t,n,r){var s=Ae.hasOwnProperty(t)?Ae[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wm(t,n,s,r)&&(n=null),r||s===null?vm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=gm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zi=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),Wn=Symbol.for("react.fragment"),Rl=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),sh=Symbol.for("react.provider"),oh=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),Pa=Symbol.for("react.suspense"),Aa=Symbol.for("react.suspense_list"),Dl=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),ah=Symbol.for("react.offscreen"),gu=Symbol.iterator;function Ur(e){return e===null||typeof e!="object"?null:(e=gu&&e[gu]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,Yo;function Yr(e){if(Yo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yo=t&&t[1]||""}return`
`+Yo+e}var Xo=!1;function Ko(e,t){if(!e||Xo)return"";Xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var s=g.stack.split(`
`),a=r.stack.split(`
`),l=s.length-1,u=a.length-1;1<=l&&0<=u&&s[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(s[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||s[l]!==a[u]){var h=`
`+s[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=u);break}}}finally{Xo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yr(e):""}function km(e){switch(e.tag){case 5:return Yr(e.type);case 16:return Yr("Lazy");case 13:return Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function Ia(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wn:return"Fragment";case Bn:return"Portal";case Na:return"Profiler";case Rl:return"StrictMode";case Pa:return"Suspense";case Aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oh:return(e.displayName||"Context")+".Consumer";case sh:return(e._context.displayName||"Context")+".Provider";case _l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dl:return t=e.displayName||null,t!==null?t:Ia(e.type)||"Memo";case Gt:t=e._payload,e=e._init;try{return Ia(e(t))}catch{}}return null}function Sm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ia(t);case 8:return t===Rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cm(e){var t=lh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function es(e){e._valueTracker||(e._valueTracker=Cm(e))}function ch(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ra(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uh(e,t){t=t.checked,t!=null&&Il(e,"checked",t,!1)}function _a(e,t){uh(e,t);var n=cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Da(e,t.type,n):t.hasOwnProperty("defaultValue")&&Da(e,t.type,cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function vu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Da(e,t,n){(t!=="number"||Ns(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function La(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Xr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cn(n)}}function dh(e,t){var n=cn(t.value),r=cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function wu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ts,ph=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ts=ts||document.createElement("div"),ts.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ts.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tm=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(e){Tm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jr[t]=Jr[e]})});function fh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Jr.hasOwnProperty(e)&&Jr[e]?(""+t).trim():t+"px"}function mh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=fh(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var bm=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ma(e,t){if(t){if(bm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ua=null;function Ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,tr=null,nr=null;function ku(e){if(e=Ii(e)){if(typeof za!="function")throw Error(M(280));var t=e.stateNode;t&&(t=co(t),za(e.stateNode,e.type,t))}}function gh(e){tr?nr?nr.push(e):nr=[e]:tr=e}function yh(){if(tr){var e=tr,t=nr;if(nr=tr=null,ku(e),t)for(e=0;e<t.length;e++)ku(t[e])}}function vh(e,t){return e(t)}function xh(){}var Qo=!1;function wh(e,t,n){if(Qo)return e(t,n);Qo=!0;try{return vh(e,t,n)}finally{Qo=!1,(tr!==null||nr!==null)&&(xh(),yh())}}function di(e,t){var n=e.stateNode;if(n===null)return null;var r=co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Ha=!1;if(Lt)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Ha=!1}function jm(e,t,n,r,s,a,l,u,h){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(N){this.onError(N)}}var Zr=!1,Ps=null,As=!1,Ba=null,Em={onError:function(e){Zr=!0,Ps=e}};function Nm(e,t,n,r,s,a,l,u,h){Zr=!1,Ps=null,jm.apply(Em,arguments)}function Pm(e,t,n,r,s,a,l,u,h){if(Nm.apply(this,arguments),Zr){if(Zr){var g=Ps;Zr=!1,Ps=null}else throw Error(M(198));As||(As=!0,Ba=g)}}function Rn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function kh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Su(e){if(Rn(e)!==e)throw Error(M(188))}function Am(e){var t=e.alternate;if(!t){if(t=Rn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return Su(s),e;if(a===r)return Su(s),t;a=a.sibling}throw Error(M(188))}if(n.return!==r.return)n=s,r=a;else{for(var l=!1,u=s.child;u;){if(u===n){l=!0,n=s,r=a;break}if(u===r){l=!0,r=s,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,r=s;break}if(u===r){l=!0,r=a,n=s;break}u=u.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Sh(e){return e=Am(e),e!==null?Ch(e):null}function Ch(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ch(e);if(t!==null)return t;e=e.sibling}return null}var Th=Ze.unstable_scheduleCallback,Cu=Ze.unstable_cancelCallback,Im=Ze.unstable_shouldYield,Rm=Ze.unstable_requestPaint,ge=Ze.unstable_now,_m=Ze.unstable_getCurrentPriorityLevel,Ol=Ze.unstable_ImmediatePriority,bh=Ze.unstable_UserBlockingPriority,Is=Ze.unstable_NormalPriority,Dm=Ze.unstable_LowPriority,jh=Ze.unstable_IdlePriority,so=null,jt=null;function Lm(e){if(jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Fm,Om=Math.log,Mm=Math.LN2;function Fm(e){return e>>>=0,e===0?32:31-(Om(e)/Mm|0)|0}var ns=64,rs=4194304;function Kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~s;u!==0?r=Kr(u):(a&=l,a!==0&&(r=Kr(a)))}else l=n&~s,l!==0?r=Kr(l):a!==0&&(r=Kr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),s=1<<n,r|=e[n],t&=~s;return r}function Um(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-xt(a),u=1<<l,h=s[l];h===-1?(!(u&n)||u&r)&&(s[l]=Um(u,t)):h<=t&&(e.expiredLanes|=u),a&=~u}}function Wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eh(){var e=ns;return ns<<=1,!(ns&4194240)&&(ns=64),e}function qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Hm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-xt(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function Ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Z=0;function Nh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ph,Fl,Ah,Ih,Rh,Va=!1,is=[],Jt=null,Zt=null,en=null,hi=new Map,pi=new Map,Xt=[],Bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tu(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pi.delete(t.pointerId)}}function Hr(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Ii(t),t!==null&&Fl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Wm(e,t,n,r,s){switch(t){case"focusin":return Jt=Hr(Jt,e,t,n,r,s),!0;case"dragenter":return Zt=Hr(Zt,e,t,n,r,s),!0;case"mouseover":return en=Hr(en,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return hi.set(a,Hr(hi.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,pi.set(a,Hr(pi.get(a)||null,e,t,n,r,s)),!0}return!1}function _h(e){var t=kn(e.target);if(t!==null){var n=Rn(t);if(n!==null){if(t=n.tag,t===13){if(t=kh(n),t!==null){e.blockedOn=t,Rh(e.priority,function(){Ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ua=r,n.target.dispatchEvent(r),Ua=null}else return t=Ii(n),t!==null&&Fl(t),e.blockedOn=n,!1;t.shift()}return!0}function bu(e,t,n){vs(e)&&n.delete(t)}function Vm(){Va=!1,Jt!==null&&vs(Jt)&&(Jt=null),Zt!==null&&vs(Zt)&&(Zt=null),en!==null&&vs(en)&&(en=null),hi.forEach(bu),pi.forEach(bu)}function Br(e,t){e.blockedOn===t&&(e.blockedOn=null,Va||(Va=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,Vm)))}function fi(e){function t(s){return Br(s,e)}if(0<is.length){Br(is[0],e);for(var n=1;n<is.length;n++){var r=is[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Br(Jt,e),Zt!==null&&Br(Zt,e),en!==null&&Br(en,e),hi.forEach(t),pi.forEach(t),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)_h(n),n.blockedOn===null&&Xt.shift()}var rr=zt.ReactCurrentBatchConfig,_s=!0;function $m(e,t,n,r){var s=Z,a=rr.transition;rr.transition=null;try{Z=1,Ul(e,t,n,r)}finally{Z=s,rr.transition=a}}function Gm(e,t,n,r){var s=Z,a=rr.transition;rr.transition=null;try{Z=4,Ul(e,t,n,r)}finally{Z=s,rr.transition=a}}function Ul(e,t,n,r){if(_s){var s=$a(e,t,n,r);if(s===null)aa(e,t,r,Ds,n),Tu(e,r);else if(Wm(s,e,t,n,r))r.stopPropagation();else if(Tu(e,r),t&4&&-1<Bm.indexOf(e)){for(;s!==null;){var a=Ii(s);if(a!==null&&Ph(a),a=$a(e,t,n,r),a===null&&aa(e,t,r,Ds,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else aa(e,t,r,null,n)}}var Ds=null;function $a(e,t,n,r){if(Ds=null,e=Ll(r),e=kn(e),e!==null)if(t=Rn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=kh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ds=e,null}function Dh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_m()){case Ol:return 1;case bh:return 4;case Is:case Dm:return 16;case jh:return 536870912;default:return 16}default:return 16}}var Qt=null,zl=null,xs=null;function Lh(){if(xs)return xs;var e,t=zl,n=t.length,r,s="value"in Qt?Qt.value:Qt.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===s[a-r];r++);return xs=s.slice(e,1<r?1-r:void 0)}function ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ss(){return!0}function ju(){return!1}function tt(e){function t(n,r,s,a,l){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ss:ju,this.isPropagationStopped=ju,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ss)},persist:function(){},isPersistent:ss}),t}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=tt(yr),Ai=pe({},yr,{view:0,detail:0}),Ym=tt(Ai),Jo,Zo,Wr,oo=pe({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(Jo=e.screenX-Wr.screenX,Zo=e.screenY-Wr.screenY):Zo=Jo=0,Wr=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Zo}}),Eu=tt(oo),Xm=pe({},oo,{dataTransfer:0}),Km=tt(Xm),Qm=pe({},Ai,{relatedTarget:0}),ea=tt(Qm),qm=pe({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jm=tt(qm),Zm=pe({},yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eg=tt(Zm),tg=pe({},yr,{data:0}),Nu=tt(tg),ng={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ig[e])?!!t[e]:!1}function Bl(){return sg}var og=pe({},Ai,{key:function(e){if(e.key){var t=ng[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ag=tt(og),lg=pe({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pu=tt(lg),cg=pe({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),ug=tt(cg),dg=pe({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=tt(dg),pg=pe({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fg=tt(pg),mg=[9,13,27,32],Wl=Lt&&"CompositionEvent"in window,ei=null;Lt&&"documentMode"in document&&(ei=document.documentMode);var gg=Lt&&"TextEvent"in window&&!ei,Oh=Lt&&(!Wl||ei&&8<ei&&11>=ei),Au=" ",Iu=!1;function Mh(e,t){switch(e){case"keyup":return mg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function yg(e,t){switch(e){case"compositionend":return Fh(t);case"keypress":return t.which!==32?null:(Iu=!0,Au);case"textInput":return e=t.data,e===Au&&Iu?null:e;default:return null}}function vg(e,t){if(Vn)return e==="compositionend"||!Wl&&Mh(e,t)?(e=Lh(),xs=zl=Qt=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Oh&&t.locale!=="ko"?null:t.data;default:return null}}var xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xg[e.type]:t==="textarea"}function Uh(e,t,n,r){gh(r),t=Ls(t,"onChange"),0<t.length&&(n=new Hl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ti=null,mi=null;function wg(e){Qh(e,0)}function ao(e){var t=Yn(e);if(ch(t))return e}function kg(e,t){if(e==="change")return t}var zh=!1;if(Lt){var ta;if(Lt){var na="oninput"in document;if(!na){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),na=typeof _u.oninput=="function"}ta=na}else ta=!1;zh=ta&&(!document.documentMode||9<document.documentMode)}function Du(){ti&&(ti.detachEvent("onpropertychange",Hh),mi=ti=null)}function Hh(e){if(e.propertyName==="value"&&ao(mi)){var t=[];Uh(t,mi,e,Ll(e)),wh(wg,t)}}function Sg(e,t,n){e==="focusin"?(Du(),ti=t,mi=n,ti.attachEvent("onpropertychange",Hh)):e==="focusout"&&Du()}function Cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ao(mi)}function Tg(e,t){if(e==="click")return ao(t)}function bg(e,t){if(e==="input"||e==="change")return ao(t)}function jg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:jg;function gi(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ea.call(t,s)||!kt(e[s],t[s]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ou(e,t){var n=Lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lu(n)}}function Bh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wh(){for(var e=window,t=Ns();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ns(e.document)}return t}function Vl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eg(e){var t=Wh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bh(n.ownerDocument.documentElement,n)){if(r!==null&&Vl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=Ou(n,a);var l=Ou(n,r);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ng=Lt&&"documentMode"in document&&11>=document.documentMode,$n=null,Ga=null,ni=null,Ya=!1;function Mu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ya||$n==null||$n!==Ns(r)||(r=$n,"selectionStart"in r&&Vl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&gi(ni,r)||(ni=r,r=Ls(Ga,"onSelect"),0<r.length&&(t=new Hl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$n)))}function os(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:os("Animation","AnimationEnd"),animationiteration:os("Animation","AnimationIteration"),animationstart:os("Animation","AnimationStart"),transitionend:os("Transition","TransitionEnd")},ra={},Vh={};Lt&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function lo(e){if(ra[e])return ra[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vh)return ra[e]=t[n];return e}var $h=lo("animationend"),Gh=lo("animationiteration"),Yh=lo("animationstart"),Xh=lo("transitionend"),Kh=new Map,Fu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dn(e,t){Kh.set(e,t),In(t,[e])}for(var ia=0;ia<Fu.length;ia++){var sa=Fu[ia],Pg=sa.toLowerCase(),Ag=sa[0].toUpperCase()+sa.slice(1);dn(Pg,"on"+Ag)}dn($h,"onAnimationEnd");dn(Gh,"onAnimationIteration");dn(Yh,"onAnimationStart");dn("dblclick","onDoubleClick");dn("focusin","onFocus");dn("focusout","onBlur");dn(Xh,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ig=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Uu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Pm(r,t,void 0,e),e.currentTarget=null}function Qh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],h=u.instance,g=u.currentTarget;if(u=u.listener,h!==a&&s.isPropagationStopped())break e;Uu(s,u,g),a=h}else for(l=0;l<r.length;l++){if(u=r[l],h=u.instance,g=u.currentTarget,u=u.listener,h!==a&&s.isPropagationStopped())break e;Uu(s,u,g),a=h}}}if(As)throw e=Ba,As=!1,Ba=null,e}function le(e,t){var n=t[Ja];n===void 0&&(n=t[Ja]=new Set);var r=e+"__bubble";n.has(r)||(qh(t,e,2,!1),n.add(r))}function oa(e,t,n){var r=0;t&&(r|=4),qh(n,e,r,t)}var as="_reactListening"+Math.random().toString(36).slice(2);function yi(e){if(!e[as]){e[as]=!0,ih.forEach(function(n){n!=="selectionchange"&&(Ig.has(n)||oa(n,!1,e),oa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[as]||(t[as]=!0,oa("selectionchange",!1,t))}}function qh(e,t,n,r){switch(Dh(t)){case 1:var s=$m;break;case 4:s=Gm;break;default:s=Ul}n=s.bind(null,t,n,e),s=void 0,!Ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function aa(e,t,n,r,s){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(l===4)for(l=r.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;l=l.return}for(;u!==null;){if(l=kn(u),l===null)return;if(h=l.tag,h===5||h===6){r=a=l;continue e}u=u.parentNode}}r=r.return}wh(function(){var g=a,N=Ll(n),P=[];e:{var C=Kh.get(e);if(C!==void 0){var b=Hl,E=e;switch(e){case"keypress":if(ws(n)===0)break e;case"keydown":case"keyup":b=ag;break;case"focusin":E="focus",b=ea;break;case"focusout":E="blur",b=ea;break;case"beforeblur":case"afterblur":b=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=ug;break;case $h:case Gh:case Yh:b=Jm;break;case Xh:b=hg;break;case"scroll":b=Ym;break;case"wheel":b=fg;break;case"copy":case"cut":case"paste":b=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Pu}var I=(t&4)!==0,O=!I&&e==="scroll",v=I?C!==null?C+"Capture":null:C;I=[];for(var x=g,T;x!==null;){T=x;var _=T.stateNode;if(T.tag===5&&_!==null&&(T=_,v!==null&&(_=di(x,v),_!=null&&I.push(vi(x,_,T)))),O)break;x=x.return}0<I.length&&(C=new b(C,E,null,n,N),P.push({event:C,listeners:I}))}}if(!(t&7)){e:{if(C=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",C&&n!==Ua&&(E=n.relatedTarget||n.fromElement)&&(kn(E)||E[Ot]))break e;if((b||C)&&(C=N.window===N?N:(C=N.ownerDocument)?C.defaultView||C.parentWindow:window,b?(E=n.relatedTarget||n.toElement,b=g,E=E?kn(E):null,E!==null&&(O=Rn(E),E!==O||E.tag!==5&&E.tag!==6)&&(E=null)):(b=null,E=g),b!==E)){if(I=Eu,_="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(I=Pu,_="onPointerLeave",v="onPointerEnter",x="pointer"),O=b==null?C:Yn(b),T=E==null?C:Yn(E),C=new I(_,x+"leave",b,n,N),C.target=O,C.relatedTarget=T,_=null,kn(N)===g&&(I=new I(v,x+"enter",E,n,N),I.target=T,I.relatedTarget=O,_=I),O=_,b&&E)t:{for(I=b,v=E,x=0,T=I;T;T=Hn(T))x++;for(T=0,_=v;_;_=Hn(_))T++;for(;0<x-T;)I=Hn(I),x--;for(;0<T-x;)v=Hn(v),T--;for(;x--;){if(I===v||v!==null&&I===v.alternate)break t;I=Hn(I),v=Hn(v)}I=null}else I=null;b!==null&&zu(P,C,b,I,!1),E!==null&&O!==null&&zu(P,O,E,I,!0)}}e:{if(C=g?Yn(g):window,b=C.nodeName&&C.nodeName.toLowerCase(),b==="select"||b==="input"&&C.type==="file")var F=kg;else if(Ru(C))if(zh)F=bg;else{F=Cg;var D=Sg}else(b=C.nodeName)&&b.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(F=Tg);if(F&&(F=F(e,g))){Uh(P,F,n,N);break e}D&&D(e,C,g),e==="focusout"&&(D=C._wrapperState)&&D.controlled&&C.type==="number"&&Da(C,"number",C.value)}switch(D=g?Yn(g):window,e){case"focusin":(Ru(D)||D.contentEditable==="true")&&($n=D,Ga=g,ni=null);break;case"focusout":ni=Ga=$n=null;break;case"mousedown":Ya=!0;break;case"contextmenu":case"mouseup":case"dragend":Ya=!1,Mu(P,n,N);break;case"selectionchange":if(Ng)break;case"keydown":case"keyup":Mu(P,n,N)}var w;if(Wl)e:{switch(e){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else Vn?Mh(e,n)&&(p="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Oh&&n.locale!=="ko"&&(Vn||p!=="onCompositionStart"?p==="onCompositionEnd"&&Vn&&(w=Lh()):(Qt=N,zl="value"in Qt?Qt.value:Qt.textContent,Vn=!0)),D=Ls(g,p),0<D.length&&(p=new Nu(p,e,null,n,N),P.push({event:p,listeners:D}),w?p.data=w:(w=Fh(n),w!==null&&(p.data=w)))),(w=gg?yg(e,n):vg(e,n))&&(g=Ls(g,"onBeforeInput"),0<g.length&&(N=new Nu("onBeforeInput","beforeinput",null,n,N),P.push({event:N,listeners:g}),N.data=w))}Qh(P,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ls(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=di(e,n),a!=null&&r.unshift(vi(e,a,s)),a=di(e,t),a!=null&&r.push(vi(e,a,s))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,n,r,s){for(var a=t._reactName,l=[];n!==null&&n!==r;){var u=n,h=u.alternate,g=u.stateNode;if(h!==null&&h===r)break;u.tag===5&&g!==null&&(u=g,s?(h=di(n,a),h!=null&&l.unshift(vi(n,h,u))):s||(h=di(n,a),h!=null&&l.push(vi(n,h,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Rg=/\r\n?/g,_g=/\u0000|\uFFFD/g;function Hu(e){return(typeof e=="string"?e:""+e).replace(Rg,`
`).replace(_g,"")}function ls(e,t,n){if(t=Hu(t),Hu(e)!==t&&n)throw Error(M(425))}function Os(){}var Xa=null,Ka=null;function Qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,Bu=typeof Promise=="function"?Promise:void 0,Lg=typeof queueMicrotask=="function"?queueMicrotask:typeof Bu<"u"?function(e){return Bu.resolve(null).then(e).catch(Og)}:qa;function Og(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);fi(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),bt="__reactFiber$"+vr,xi="__reactProps$"+vr,Ot="__reactContainer$"+vr,Ja="__reactEvents$"+vr,Mg="__reactListeners$"+vr,Fg="__reactHandles$"+vr;function kn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wu(e);e!==null;){if(n=e[bt])return n;e=Wu(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[bt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function co(e){return e[xi]||null}var Za=[],Xn=-1;function hn(e){return{current:e}}function ce(e){0>Xn||(e.current=Za[Xn],Za[Xn]=null,Xn--)}function se(e,t){Xn++,Za[Xn]=e.current,e.current=t}var un={},Oe=hn(un),$e=hn(!1),jn=un;function ur(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ge(e){return e=e.childContextTypes,e!=null}function Ms(){ce($e),ce(Oe)}function Vu(e,t,n){if(Oe.current!==un)throw Error(M(168));se(Oe,t),se($e,n)}function Jh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(M(108,Sm(e)||"Unknown",s));return pe({},n,r)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,jn=Oe.current,se(Oe,e),se($e,$e.current),!0}function $u(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Jh(e,t,jn),r.__reactInternalMemoizedMergedChildContext=e,ce($e),ce(Oe),se(Oe,e)):ce($e),se($e,n)}var It=null,uo=!1,ca=!1;function Zh(e){It===null?It=[e]:It.push(e)}function Ug(e){uo=!0,Zh(e)}function pn(){if(!ca&&It!==null){ca=!0;var e=0,t=Z;try{var n=It;for(Z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,uo=!1}catch(s){throw It!==null&&(It=It.slice(e+1)),Th(Ol,pn),s}finally{Z=t,ca=!1}}return null}var Kn=[],Qn=0,Us=null,zs=0,rt=[],it=0,En=null,Rt=1,_t="";function xn(e,t){Kn[Qn++]=zs,Kn[Qn++]=Us,Us=e,zs=t}function ep(e,t,n){rt[it++]=Rt,rt[it++]=_t,rt[it++]=En,En=e;var r=Rt;e=_t;var s=32-xt(r)-1;r&=~(1<<s),n+=1;var a=32-xt(t)+s;if(30<a){var l=s-s%5;a=(r&(1<<l)-1).toString(32),r>>=l,s-=l,Rt=1<<32-xt(t)+s|n<<s|r,_t=a+e}else Rt=1<<a|n<<s|r,_t=e}function $l(e){e.return!==null&&(xn(e,1),ep(e,1,0))}function Gl(e){for(;e===Us;)Us=Kn[--Qn],Kn[Qn]=null,zs=Kn[--Qn],Kn[Qn]=null;for(;e===En;)En=rt[--it],rt[it]=null,_t=rt[--it],rt[it]=null,Rt=rt[--it],rt[it]=null}var Je=null,qe=null,ue=!1,pt=null;function tp(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,qe=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Rt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,qe=null,!0):!1;default:return!1}}function el(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tl(e){if(ue){var t=qe;if(t){var n=t;if(!Gu(e,t)){if(el(e))throw Error(M(418));t=tn(n.nextSibling);var r=Je;t&&Gu(e,t)?tp(r,n):(e.flags=e.flags&-4097|2,ue=!1,Je=e)}}else{if(el(e))throw Error(M(418));e.flags=e.flags&-4097|2,ue=!1,Je=e}}}function Yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function cs(e){if(e!==Je)return!1;if(!ue)return Yu(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qa(e.type,e.memoizedProps)),t&&(t=qe)){if(el(e))throw np(),Error(M(418));for(;t;)tp(e,t),t=tn(t.nextSibling)}if(Yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Je?tn(e.stateNode.nextSibling):null;return!0}function np(){for(var e=qe;e;)e=tn(e.nextSibling)}function dr(){qe=Je=null,ue=!1}function Yl(e){pt===null?pt=[e]:pt.push(e)}var zg=zt.ReactCurrentBatchConfig;function Vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=s.refs;l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function us(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xu(e){var t=e._init;return t(e._payload)}function rp(e){function t(v,x){if(e){var T=v.deletions;T===null?(v.deletions=[x],v.flags|=16):T.push(x)}}function n(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function r(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function s(v,x){return v=on(v,x),v.index=0,v.sibling=null,v}function a(v,x,T){return v.index=T,e?(T=v.alternate,T!==null?(T=T.index,T<x?(v.flags|=2,x):T):(v.flags|=2,x)):(v.flags|=1048576,x)}function l(v){return e&&v.alternate===null&&(v.flags|=2),v}function u(v,x,T,_){return x===null||x.tag!==6?(x=ga(T,v.mode,_),x.return=v,x):(x=s(x,T),x.return=v,x)}function h(v,x,T,_){var F=T.type;return F===Wn?N(v,x,T.props.children,_,T.key):x!==null&&(x.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Gt&&Xu(F)===x.type)?(_=s(x,T.props),_.ref=Vr(v,x,T),_.return=v,_):(_=Es(T.type,T.key,T.props,null,v.mode,_),_.ref=Vr(v,x,T),_.return=v,_)}function g(v,x,T,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==T.containerInfo||x.stateNode.implementation!==T.implementation?(x=ya(T,v.mode,_),x.return=v,x):(x=s(x,T.children||[]),x.return=v,x)}function N(v,x,T,_,F){return x===null||x.tag!==7?(x=bn(T,v.mode,_,F),x.return=v,x):(x=s(x,T),x.return=v,x)}function P(v,x,T){if(typeof x=="string"&&x!==""||typeof x=="number")return x=ga(""+x,v.mode,T),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zi:return T=Es(x.type,x.key,x.props,null,v.mode,T),T.ref=Vr(v,null,x),T.return=v,T;case Bn:return x=ya(x,v.mode,T),x.return=v,x;case Gt:var _=x._init;return P(v,_(x._payload),T)}if(Xr(x)||Ur(x))return x=bn(x,v.mode,T,null),x.return=v,x;us(v,x)}return null}function C(v,x,T,_){var F=x!==null?x.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return F!==null?null:u(v,x,""+T,_);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Zi:return T.key===F?h(v,x,T,_):null;case Bn:return T.key===F?g(v,x,T,_):null;case Gt:return F=T._init,C(v,x,F(T._payload),_)}if(Xr(T)||Ur(T))return F!==null?null:N(v,x,T,_,null);us(v,T)}return null}function b(v,x,T,_,F){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(T)||null,u(x,v,""+_,F);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zi:return v=v.get(_.key===null?T:_.key)||null,h(x,v,_,F);case Bn:return v=v.get(_.key===null?T:_.key)||null,g(x,v,_,F);case Gt:var D=_._init;return b(v,x,T,D(_._payload),F)}if(Xr(_)||Ur(_))return v=v.get(T)||null,N(x,v,_,F,null);us(x,_)}return null}function E(v,x,T,_){for(var F=null,D=null,w=x,p=x=0,f=null;w!==null&&p<T.length;p++){w.index>p?(f=w,w=null):f=w.sibling;var y=C(v,w,T[p],_);if(y===null){w===null&&(w=f);break}e&&w&&y.alternate===null&&t(v,w),x=a(y,x,p),D===null?F=y:D.sibling=y,D=y,w=f}if(p===T.length)return n(v,w),ue&&xn(v,p),F;if(w===null){for(;p<T.length;p++)w=P(v,T[p],_),w!==null&&(x=a(w,x,p),D===null?F=w:D.sibling=w,D=w);return ue&&xn(v,p),F}for(w=r(v,w);p<T.length;p++)f=b(w,v,p,T[p],_),f!==null&&(e&&f.alternate!==null&&w.delete(f.key===null?p:f.key),x=a(f,x,p),D===null?F=f:D.sibling=f,D=f);return e&&w.forEach(function(S){return t(v,S)}),ue&&xn(v,p),F}function I(v,x,T,_){var F=Ur(T);if(typeof F!="function")throw Error(M(150));if(T=F.call(T),T==null)throw Error(M(151));for(var D=F=null,w=x,p=x=0,f=null,y=T.next();w!==null&&!y.done;p++,y=T.next()){w.index>p?(f=w,w=null):f=w.sibling;var S=C(v,w,y.value,_);if(S===null){w===null&&(w=f);break}e&&w&&S.alternate===null&&t(v,w),x=a(S,x,p),D===null?F=S:D.sibling=S,D=S,w=f}if(y.done)return n(v,w),ue&&xn(v,p),F;if(w===null){for(;!y.done;p++,y=T.next())y=P(v,y.value,_),y!==null&&(x=a(y,x,p),D===null?F=y:D.sibling=y,D=y);return ue&&xn(v,p),F}for(w=r(v,w);!y.done;p++,y=T.next())y=b(w,v,p,y.value,_),y!==null&&(e&&y.alternate!==null&&w.delete(y.key===null?p:y.key),x=a(y,x,p),D===null?F=y:D.sibling=y,D=y);return e&&w.forEach(function(j){return t(v,j)}),ue&&xn(v,p),F}function O(v,x,T,_){if(typeof T=="object"&&T!==null&&T.type===Wn&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Zi:e:{for(var F=T.key,D=x;D!==null;){if(D.key===F){if(F=T.type,F===Wn){if(D.tag===7){n(v,D.sibling),x=s(D,T.props.children),x.return=v,v=x;break e}}else if(D.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Gt&&Xu(F)===D.type){n(v,D.sibling),x=s(D,T.props),x.ref=Vr(v,D,T),x.return=v,v=x;break e}n(v,D);break}else t(v,D);D=D.sibling}T.type===Wn?(x=bn(T.props.children,v.mode,_,T.key),x.return=v,v=x):(_=Es(T.type,T.key,T.props,null,v.mode,_),_.ref=Vr(v,x,T),_.return=v,v=_)}return l(v);case Bn:e:{for(D=T.key;x!==null;){if(x.key===D)if(x.tag===4&&x.stateNode.containerInfo===T.containerInfo&&x.stateNode.implementation===T.implementation){n(v,x.sibling),x=s(x,T.children||[]),x.return=v,v=x;break e}else{n(v,x);break}else t(v,x);x=x.sibling}x=ya(T,v.mode,_),x.return=v,v=x}return l(v);case Gt:return D=T._init,O(v,x,D(T._payload),_)}if(Xr(T))return E(v,x,T,_);if(Ur(T))return I(v,x,T,_);us(v,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,x!==null&&x.tag===6?(n(v,x.sibling),x=s(x,T),x.return=v,v=x):(n(v,x),x=ga(T,v.mode,_),x.return=v,v=x),l(v)):n(v,x)}return O}var hr=rp(!0),ip=rp(!1),Hs=hn(null),Bs=null,qn=null,Xl=null;function Kl(){Xl=qn=Bs=null}function Ql(e){var t=Hs.current;ce(Hs),e._currentValue=t}function nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Bs=e,Xl=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Xl!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(Bs===null)throw Error(M(308));qn=e,Bs.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var Sn=null;function ql(e){Sn===null?Sn=[e]:Sn.push(e)}function sp(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,ql(t)):(n.next=s.next,s.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Yt=!1;function Jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Mt(e,n)}return s=r.interleaved,s===null?(t.next=t,ql(r)):(t.next=s.next,s.next=t),r.interleaved=t,Mt(e,n)}function ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ml(e,n)}}function Ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ws(e,t,n,r){var s=e.updateQueue;Yt=!1;var a=s.firstBaseUpdate,l=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var h=u,g=h.next;h.next=null,l===null?a=g:l.next=g,l=h;var N=e.alternate;N!==null&&(N=N.updateQueue,u=N.lastBaseUpdate,u!==l&&(u===null?N.firstBaseUpdate=g:u.next=g,N.lastBaseUpdate=h))}if(a!==null){var P=s.baseState;l=0,N=g=h=null,u=a;do{var C=u.lane,b=u.eventTime;if((r&C)===C){N!==null&&(N=N.next={eventTime:b,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var E=e,I=u;switch(C=t,b=n,I.tag){case 1:if(E=I.payload,typeof E=="function"){P=E.call(b,P,C);break e}P=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=I.payload,C=typeof E=="function"?E.call(b,P,C):E,C==null)break e;P=pe({},P,C);break e;case 2:Yt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,C=s.effects,C===null?s.effects=[u]:C.push(u))}else b={eventTime:b,lane:C,tag:u.tag,payload:u.payload,callback:u.callback,next:null},N===null?(g=N=b,h=P):N=N.next=b,l|=C;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;C=u,u=C.next,C.next=null,s.lastBaseUpdate=C,s.shared.pending=null}}while(!0);if(N===null&&(h=P),s.baseState=h,s.firstBaseUpdate=g,s.lastBaseUpdate=N,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);Pn|=l,e.lanes=l,e.memoizedState=P}}function Qu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(M(191,s));s.call(r)}}}var Ri={},Et=hn(Ri),wi=hn(Ri),ki=hn(Ri);function Cn(e){if(e===Ri)throw Error(M(174));return e}function Zl(e,t){switch(se(ki,t),se(wi,e),se(Et,Ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Oa(t,e)}ce(Et),se(Et,t)}function pr(){ce(Et),ce(wi),ce(ki)}function ap(e){Cn(ki.current);var t=Cn(Et.current),n=Oa(t,e.type);t!==n&&(se(wi,e),se(Et,n))}function ec(e){wi.current===e&&(ce(Et),ce(wi))}var de=hn(0);function Vs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=[];function tc(){for(var e=0;e<ua.length;e++)ua[e]._workInProgressVersionPrimary=null;ua.length=0}var Ss=zt.ReactCurrentDispatcher,da=zt.ReactCurrentBatchConfig,Nn=0,he=null,we=null,Te=null,$s=!1,ri=!1,Si=0,Hg=0;function _e(){throw Error(M(321))}function nc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kt(e[n],t[n]))return!1;return!0}function rc(e,t,n,r,s,a){if(Nn=a,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ss.current=e===null||e.memoizedState===null?$g:Gg,e=n(r,s),ri){a=0;do{if(ri=!1,Si=0,25<=a)throw Error(M(301));a+=1,Te=we=null,t.updateQueue=null,Ss.current=Yg,e=n(r,s)}while(ri)}if(Ss.current=Gs,t=we!==null&&we.next!==null,Nn=0,Te=we=he=null,$s=!1,t)throw Error(M(300));return e}function ic(){var e=Si!==0;return Si=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?he.memoizedState=Te=e:Te=Te.next=e,Te}function lt(){if(we===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Te===null?he.memoizedState:Te.next;if(t!==null)Te=t,we=e;else{if(e===null)throw Error(M(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Te===null?he.memoizedState=Te=e:Te=Te.next=e}return Te}function Ci(e,t){return typeof t=="function"?t(e):t}function ha(e){var t=lt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=we,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var l=s.next;s.next=a.next,a.next=l}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var u=l=null,h=null,g=a;do{var N=g.lane;if((Nn&N)===N)h!==null&&(h=h.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var P={lane:N,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};h===null?(u=h=P,l=r):h=h.next=P,he.lanes|=N,Pn|=N}g=g.next}while(g!==null&&g!==a);h===null?l=r:h.next=u,kt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,he.lanes|=a,Pn|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function pa(e){var t=lt(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do a=e(a,l.action),l=l.next;while(l!==s);kt(a,t.memoizedState)||(Ve=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function lp(){}function cp(e,t){var n=he,r=lt(),s=t(),a=!kt(r.memoizedState,s);if(a&&(r.memoizedState=s,Ve=!0),r=r.queue,sc(hp.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Ti(9,dp.bind(null,n,r,s,t),void 0,null),be===null)throw Error(M(349));Nn&30||up(n,t,s)}return s}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dp(e,t,n,r){t.value=n,t.getSnapshot=r,pp(t)&&fp(e)}function hp(e,t,n){return n(function(){pp(t)&&fp(e)})}function pp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kt(e,n)}catch{return!0}}function fp(e){var t=Mt(e,1);t!==null&&wt(t,e,1,-1)}function qu(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:e},t.queue=e,e=e.dispatch=Vg.bind(null,he,e),[t.memoizedState,e]}function Ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mp(){return lt().memoizedState}function Cs(e,t,n,r){var s=Ct();he.flags|=e,s.memoizedState=Ti(1|t,n,void 0,r===void 0?null:r)}function ho(e,t,n,r){var s=lt();r=r===void 0?null:r;var a=void 0;if(we!==null){var l=we.memoizedState;if(a=l.destroy,r!==null&&nc(r,l.deps)){s.memoizedState=Ti(t,n,a,r);return}}he.flags|=e,s.memoizedState=Ti(1|t,n,a,r)}function Ju(e,t){return Cs(8390656,8,e,t)}function sc(e,t){return ho(2048,8,e,t)}function gp(e,t){return ho(4,2,e,t)}function yp(e,t){return ho(4,4,e,t)}function vp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xp(e,t,n){return n=n!=null?n.concat([e]):null,ho(4,4,vp.bind(null,t,e),n)}function oc(){}function wp(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kp(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&nc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sp(e,t,n){return Nn&21?(kt(n,t)||(n=Eh(),he.lanes|=n,Pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function Bg(e,t){var n=Z;Z=n!==0&&4>n?n:4,e(!0);var r=da.transition;da.transition={};try{e(!1),t()}finally{Z=n,da.transition=r}}function Cp(){return lt().memoizedState}function Wg(e,t,n){var r=sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tp(e))bp(t,n);else if(n=sp(e,t,n,r),n!==null){var s=ze();wt(n,e,r,s),jp(n,t,r)}}function Vg(e,t,n){var r=sn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tp(e))bp(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(s.hasEagerState=!0,s.eagerState=u,kt(u,l)){var h=t.interleaved;h===null?(s.next=s,ql(t)):(s.next=h.next,h.next=s),t.interleaved=s;return}}catch{}finally{}n=sp(e,t,s,r),n!==null&&(s=ze(),wt(n,e,r,s),jp(n,t,r))}}function Tp(e){var t=e.alternate;return e===he||t!==null&&t===he}function bp(e,t){ri=$s=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ml(e,n)}}var Gs={readContext:at,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useInsertionEffect:_e,useLayoutEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useMutableSource:_e,useSyncExternalStore:_e,useId:_e,unstable_isNewReconciler:!1},$g={readContext:at,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cs(4194308,4,vp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cs(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wg.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:qu,useDebugValue:oc,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=qu(!1),t=e[0];return e=Bg.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,s=Ct();if(ue){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),be===null)throw Error(M(349));Nn&30||up(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Ju(hp.bind(null,r,a,e),[e]),r.flags|=2048,Ti(9,dp.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ct(),t=be.identifierPrefix;if(ue){var n=_t,r=Rt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gg={readContext:at,useCallback:wp,useContext:at,useEffect:sc,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:kp,useReducer:ha,useRef:mp,useState:function(){return ha(Ci)},useDebugValue:oc,useDeferredValue:function(e){var t=lt();return Sp(t,we.memoizedState,e)},useTransition:function(){var e=ha(Ci)[0],t=lt().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:cp,useId:Cp,unstable_isNewReconciler:!1},Yg={readContext:at,useCallback:wp,useContext:at,useEffect:sc,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:kp,useReducer:pa,useRef:mp,useState:function(){return pa(Ci)},useDebugValue:oc,useDeferredValue:function(e){var t=lt();return we===null?t.memoizedState=e:Sp(t,we.memoizedState,e)},useTransition:function(){var e=pa(Ci)[0],t=lt().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:cp,useId:Cp,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var po={isMounted:function(e){return(e=e._reactInternals)?Rn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ze(),s=sn(e),a=Dt(r,s);a.payload=t,n!=null&&(a.callback=n),t=nn(e,a,s),t!==null&&(wt(t,e,s,r),ks(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ze(),s=sn(e),a=Dt(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=nn(e,a,s),t!==null&&(wt(t,e,s,r),ks(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ze(),r=sn(e),s=Dt(n,r);s.tag=2,t!=null&&(s.callback=t),t=nn(e,s,r),t!==null&&(wt(t,e,r,n),ks(t,e,r))}};function Zu(e,t,n,r,s,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!gi(n,r)||!gi(s,a):!0}function Ep(e,t,n){var r=!1,s=un,a=t.contextType;return typeof a=="object"&&a!==null?a=at(a):(s=Ge(t)?jn:Oe.current,r=t.contextTypes,a=(r=r!=null)?ur(e,s):un),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function ed(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function il(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Jl(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=at(a):(a=Ge(t)?jn:Oe.current,s.context=ur(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(rl(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&po.enqueueReplaceState(s,s.state,null),Ws(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function fr(e,t){try{var n="",r=t;do n+=km(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function fa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function Np(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xs||(Xs=!0,ml=r),sl(e,t)},n}function Pp(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){sl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){sl(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function td(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xg;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=ly.bind(null,e,t,n),t.then(e,e))}function nd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var Kg=zt.ReactCurrentOwner,Ve=!1;function Ue(e,t,n,r){t.child=e===null?ip(t,null,n,r):hr(t,e.child,n,r)}function id(e,t,n,r,s){n=n.render;var a=t.ref;return ir(t,s),r=rc(e,t,n,r,a,s),n=ic(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ft(e,t,s)):(ue&&n&&$l(t),t.flags|=1,Ue(e,t,r,s),t.child)}function sd(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!fc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ap(e,t,a,r,s)):(e=Es(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&s)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:gi,n(l,r)&&e.ref===t.ref)return Ft(e,t,s)}return t.flags|=1,e=on(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ap(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(gi(a,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=a,(e.lanes&s)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Ft(e,t,s)}return ol(e,t,n,r,s)}function Ip(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Zn,Ke),Ke|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Zn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,se(Zn,Ke),Ke|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,se(Zn,Ke),Ke|=r;return Ue(e,t,s,n),t.child}function Rp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ol(e,t,n,r,s){var a=Ge(n)?jn:Oe.current;return a=ur(t,a),ir(t,s),n=rc(e,t,n,r,a,s),r=ic(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Ft(e,t,s)):(ue&&r&&$l(t),t.flags|=1,Ue(e,t,n,s),t.child)}function od(e,t,n,r,s){if(Ge(n)){var a=!0;Fs(t)}else a=!1;if(ir(t,s),t.stateNode===null)Ts(e,t),Ep(t,n,r),il(t,n,r,s),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var h=l.context,g=n.contextType;typeof g=="object"&&g!==null?g=at(g):(g=Ge(n)?jn:Oe.current,g=ur(t,g));var N=n.getDerivedStateFromProps,P=typeof N=="function"||typeof l.getSnapshotBeforeUpdate=="function";P||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||h!==g)&&ed(t,l,r,g),Yt=!1;var C=t.memoizedState;l.state=C,Ws(t,r,l,s),h=t.memoizedState,u!==r||C!==h||$e.current||Yt?(typeof N=="function"&&(rl(t,n,N,r),h=t.memoizedState),(u=Yt||Zu(t,n,u,r,C,h,g))?(P||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),l.props=r,l.state=h,l.context=g,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,op(e,t),u=t.memoizedProps,g=t.type===t.elementType?u:dt(t.type,u),l.props=g,P=t.pendingProps,C=l.context,h=n.contextType,typeof h=="object"&&h!==null?h=at(h):(h=Ge(n)?jn:Oe.current,h=ur(t,h));var b=n.getDerivedStateFromProps;(N=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==P||C!==h)&&ed(t,l,r,h),Yt=!1,C=t.memoizedState,l.state=C,Ws(t,r,l,s);var E=t.memoizedState;u!==P||C!==E||$e.current||Yt?(typeof b=="function"&&(rl(t,n,b,r),E=t.memoizedState),(g=Yt||Zu(t,n,g,r,C,E,h)||!1)?(N||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,E,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,E,h)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),l.props=r,l.state=E,l.context=h,r=g):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return al(e,t,n,r,a,s)}function al(e,t,n,r,s,a){Rp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return s&&$u(t,n,!1),Ft(e,t,a);r=t.stateNode,Kg.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=hr(t,e.child,null,a),t.child=hr(t,null,u,a)):Ue(e,t,u,a),t.memoizedState=r.state,s&&$u(t,n,!0),t.child}function _p(e){var t=e.stateNode;t.pendingContext?Vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vu(e,t.context,!1),Zl(e,t.containerInfo)}function ad(e,t,n,r,s){return dr(),Yl(s),t.flags|=256,Ue(e,t,n,r),t.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dp(e,t,n){var r=t.pendingProps,s=de.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(s&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),se(de,s&1),e===null)return tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=go(l,r,0,null),e=bn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=cl(n),t.memoizedState=ll,e):ac(t,l));if(s=e.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return Qg(e,t,l,r,u,s,n);if(a){a=r.fallback,l=t.mode,s=e.child,u=s.sibling;var h={mode:"hidden",children:r.children};return!(l&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=on(s,h),r.subtreeFlags=s.subtreeFlags&14680064),u!==null?a=on(u,a):(a=bn(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?cl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=ll,r}return a=e.child,e=a.sibling,r=on(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ac(e,t){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ds(e,t,n,r){return r!==null&&Yl(r),hr(t,e.child,null,n),e=ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qg(e,t,n,r,s,a,l){if(n)return t.flags&256?(t.flags&=-257,r=fa(Error(M(422))),ds(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=go({mode:"visible",children:r.children},s,0,null),a=bn(a,s,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&hr(t,e.child,null,l),t.child.memoizedState=cl(l),t.memoizedState=ll,a);if(!(t.mode&1))return ds(e,t,l,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var u=r.dgst;return r=u,a=Error(M(419)),r=fa(a,r,void 0),ds(e,t,l,r)}if(u=(l&e.childLanes)!==0,Ve||u){if(r=be,r!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|l)?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Mt(e,s),wt(r,e,s,-1))}return pc(),r=fa(Error(M(421))),ds(e,t,l,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=cy.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,qe=tn(s.nextSibling),Je=t,ue=!0,pt=null,e!==null&&(rt[it++]=Rt,rt[it++]=_t,rt[it++]=En,Rt=e.id,_t=e.overflow,En=t),t=ac(t,r.children),t.flags|=4096,t)}function ld(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nl(e.return,t,n)}function ma(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Lp(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(Ue(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,n,t);else if(e.tag===19)ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(de,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Vs(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ma(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Vs(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ma(t,!0,n,null,a);break;case"together":ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ts(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qg(e,t,n){switch(t.tag){case 3:_p(t),dr();break;case 5:ap(t);break;case 1:Ge(t.type)&&Fs(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;se(Hs,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?Dp(e,t,n):(se(de,de.current&1),e=Ft(e,t,n),e!==null?e.sibling:null);se(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lp(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),se(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,Ip(e,t,n)}return Ft(e,t,n)}var Op,ul,Mp,Fp;Op=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ul=function(){};Mp=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Cn(Et.current);var a=null;switch(n){case"input":s=Ra(e,s),r=Ra(e,r),a=[];break;case"select":s=pe({},s,{value:void 0}),r=pe({},r,{value:void 0}),a=[];break;case"textarea":s=La(e,s),r=La(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Os)}Ma(n,r);var l;n=null;for(g in s)if(!r.hasOwnProperty(g)&&s.hasOwnProperty(g)&&s[g]!=null)if(g==="style"){var u=s[g];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(ci.hasOwnProperty(g)?a||(a=[]):(a=a||[]).push(g,null));for(g in r){var h=r[g];if(u=s!=null?s[g]:void 0,r.hasOwnProperty(g)&&h!==u&&(h!=null||u!=null))if(g==="style")if(u){for(l in u)!u.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in h)h.hasOwnProperty(l)&&u[l]!==h[l]&&(n||(n={}),n[l]=h[l])}else n||(a||(a=[]),a.push(g,n)),n=h;else g==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(a=a||[]).push(g,h)):g==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(g,""+h):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(ci.hasOwnProperty(g)?(h!=null&&g==="onScroll"&&le("scroll",e),a||u===h||(a=[])):(a=a||[]).push(g,h))}n&&(a=a||[]).push("style",n);var g=a;(t.updateQueue=g)&&(t.flags|=4)}};Fp=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jg(e,t,n){var r=t.pendingProps;switch(Gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return Ge(t.type)&&Ms(),De(t),null;case 3:return r=t.stateNode,pr(),ce($e),ce(Oe),tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(cs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(vl(pt),pt=null))),ul(e,t),De(t),null;case 5:ec(t);var s=Cn(ki.current);if(n=t.type,e!==null&&t.stateNode!=null)Mp(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return De(t),null}if(e=Cn(Et.current),cs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[bt]=t,r[xi]=a,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(s=0;s<Qr.length;s++)le(Qr[s],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":yu(r,a),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},le("invalid",r);break;case"textarea":xu(r,a),le("invalid",r)}Ma(n,a),s=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?r.textContent!==u&&(a.suppressHydrationWarning!==!0&&ls(r.textContent,u,e),s=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&ls(r.textContent,u,e),s=["children",""+u]):ci.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&le("scroll",r)}switch(n){case"input":es(r),vu(r,a,!0);break;case"textarea":es(r),wu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Os)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[bt]=t,e[xi]=r,Op(e,t,!1,!1),t.stateNode=e;e:{switch(l=Fa(n,r),n){case"dialog":le("cancel",e),le("close",e),s=r;break;case"iframe":case"object":case"embed":le("load",e),s=r;break;case"video":case"audio":for(s=0;s<Qr.length;s++)le(Qr[s],e);s=r;break;case"source":le("error",e),s=r;break;case"img":case"image":case"link":le("error",e),le("load",e),s=r;break;case"details":le("toggle",e),s=r;break;case"input":yu(e,r),s=Ra(e,r),le("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=pe({},r,{value:void 0}),le("invalid",e);break;case"textarea":xu(e,r),s=La(e,r),le("invalid",e);break;default:s=r}Ma(n,s),u=s;for(a in u)if(u.hasOwnProperty(a)){var h=u[a];a==="style"?mh(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&ph(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&ui(e,h):typeof h=="number"&&ui(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ci.hasOwnProperty(a)?h!=null&&a==="onScroll"&&le("scroll",e):h!=null&&Il(e,a,h,l))}switch(n){case"input":es(e),vu(e,r,!1);break;case"textarea":es(e),wu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?er(e,!!r.multiple,a,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)Fp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Cn(ki.current),Cn(Et.current),cs(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(a=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:ls(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ls(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return De(t),null;case 13:if(ce(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&qe!==null&&t.mode&1&&!(t.flags&128))np(),dr(),t.flags|=98560,a=!1;else if(a=cs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(M(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(M(317));a[bt]=t}else dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),a=!1}else pt!==null&&(vl(pt),pt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?ke===0&&(ke=3):pc())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return pr(),ul(e,t),e===null&&yi(t.stateNode.containerInfo),De(t),null;case 10:return Ql(t.type._context),De(t),null;case 17:return Ge(t.type)&&Ms(),De(t),null;case 19:if(ce(de),a=t.memoizedState,a===null)return De(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)$r(a,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Vs(e),l!==null){for(t.flags|=128,$r(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(de,de.current&1|2),t.child}e=e.sibling}a.tail!==null&&ge()>mr&&(t.flags|=128,r=!0,$r(a,!1),t.lanes=4194304)}else{if(!r)if(e=Vs(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ue)return De(t),null}else 2*ge()-a.renderingStartTime>mr&&n!==1073741824&&(t.flags|=128,r=!0,$r(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ge(),t.sibling=null,n=de.current,se(de,r?n&1|2:n&1),t):(De(t),null);case 22:case 23:return hc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function Zg(e,t){switch(Gl(t),t.tag){case 1:return Ge(t.type)&&Ms(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),ce($e),ce(Oe),tc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ec(t),null;case 13:if(ce(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(de),null;case 4:return pr(),null;case 10:return Ql(t.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var hs=!1,Le=!1,ey=typeof WeakSet=="function"?WeakSet:Set,B=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function dl(e,t,n){try{n()}catch(r){fe(e,t,r)}}var cd=!1;function ty(e,t){if(Xa=_s,e=Wh(),Vl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,h=-1,g=0,N=0,P=e,C=null;t:for(;;){for(var b;P!==n||s!==0&&P.nodeType!==3||(u=l+s),P!==a||r!==0&&P.nodeType!==3||(h=l+r),P.nodeType===3&&(l+=P.nodeValue.length),(b=P.firstChild)!==null;)C=P,P=b;for(;;){if(P===e)break t;if(C===n&&++g===s&&(u=l),C===a&&++N===r&&(h=l),(b=P.nextSibling)!==null)break;P=C,C=P.parentNode}P=b}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ka={focusedElem:e,selectionRange:n},_s=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var I=E.memoizedProps,O=E.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?I:dt(t.type,I),O);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var T=t.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(_){fe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return E=cd,cd=!1,E}function ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&dl(t,n,a)}s=s.next}while(s!==r)}}function fo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Up(e){var t=e.alternate;t!==null&&(e.alternate=null,Up(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[xi],delete t[Ja],delete t[Mg],delete t[Fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zp(e){return e.tag===5||e.tag===3||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Os));else if(r!==4&&(e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}var Ne=null,ht=!1;function $t(e,t,n){for(n=n.child;n!==null;)Hp(e,t,n),n=n.sibling}function Hp(e,t,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:Le||Jn(n,t);case 6:var r=Ne,s=ht;Ne=null,$t(e,t,n),Ne=r,ht=s,Ne!==null&&(ht?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(ht?(e=Ne,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),fi(e)):la(Ne,n.stateNode));break;case 4:r=Ne,s=ht,Ne=n.stateNode.containerInfo,ht=!0,$t(e,t,n),Ne=r,ht=s;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&dl(n,t,l),s=s.next}while(s!==r)}$t(e,t,n);break;case 1:if(!Le&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){fe(n,t,u)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,$t(e,t,n),Le=r):$t(e,t,n);break;default:$t(e,t,n)}}function dd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ey),t.forEach(function(r){var s=uy.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ne=u.stateNode,ht=!1;break e;case 3:Ne=u.stateNode.containerInfo,ht=!0;break e;case 4:Ne=u.stateNode.containerInfo,ht=!0;break e}u=u.return}if(Ne===null)throw Error(M(160));Hp(a,l,s),Ne=null,ht=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(g){fe(s,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bp(t,e),t=t.sibling}function Bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),St(e),r&4){try{ii(3,e,e.return),fo(3,e)}catch(I){fe(e,e.return,I)}try{ii(5,e,e.return)}catch(I){fe(e,e.return,I)}}break;case 1:ut(t,e),St(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(ut(t,e),St(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var s=e.stateNode;try{ui(s,"")}catch(I){fe(e,e.return,I)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&uh(s,a),Fa(u,l);var g=Fa(u,a);for(l=0;l<h.length;l+=2){var N=h[l],P=h[l+1];N==="style"?mh(s,P):N==="dangerouslySetInnerHTML"?ph(s,P):N==="children"?ui(s,P):Il(s,N,P,g)}switch(u){case"input":_a(s,a);break;case"textarea":dh(s,a);break;case"select":var C=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var b=a.value;b!=null?er(s,!!a.multiple,b,!1):C!==!!a.multiple&&(a.defaultValue!=null?er(s,!!a.multiple,a.defaultValue,!0):er(s,!!a.multiple,a.multiple?[]:"",!1))}s[xi]=a}catch(I){fe(e,e.return,I)}}break;case 6:if(ut(t,e),St(e),r&4){if(e.stateNode===null)throw Error(M(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(I){fe(e,e.return,I)}}break;case 3:if(ut(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(I){fe(e,e.return,I)}break;case 4:ut(t,e),St(e);break;case 13:ut(t,e),St(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(uc=ge())),r&4&&dd(e);break;case 22:if(N=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(g=Le)||N,ut(t,e),Le=g):ut(t,e),St(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!N&&e.mode&1)for(B=e,N=e.child;N!==null;){for(P=B=N;B!==null;){switch(C=B,b=C.child,C.tag){case 0:case 11:case 14:case 15:ii(4,C,C.return);break;case 1:Jn(C,C.return);var E=C.stateNode;if(typeof E.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(I){fe(r,n,I)}}break;case 5:Jn(C,C.return);break;case 22:if(C.memoizedState!==null){pd(P);continue}}b!==null?(b.return=C,B=b):pd(P)}N=N.sibling}e:for(N=null,P=e;;){if(P.tag===5){if(N===null){N=P;try{s=P.stateNode,g?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=P.stateNode,h=P.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=fh("display",l))}catch(I){fe(e,e.return,I)}}}else if(P.tag===6){if(N===null)try{P.stateNode.nodeValue=g?"":P.memoizedProps}catch(I){fe(e,e.return,I)}}else if((P.tag!==22&&P.tag!==23||P.memoizedState===null||P===e)&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===e)break e;for(;P.sibling===null;){if(P.return===null||P.return===e)break e;N===P&&(N=null),P=P.return}N===P&&(N=null),P.sibling.return=P.return,P=P.sibling}}break;case 19:ut(t,e),St(e),r&4&&dd(e);break;case 21:break;default:ut(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zp(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ui(s,""),r.flags&=-33);var a=ud(e);fl(e,a,s);break;case 3:case 4:var l=r.stateNode.containerInfo,u=ud(e);pl(e,u,l);break;default:throw Error(M(161))}}catch(h){fe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ny(e,t,n){B=e,Wp(e)}function Wp(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var s=B,a=s.child;if(s.tag===22&&r){var l=s.memoizedState!==null||hs;if(!l){var u=s.alternate,h=u!==null&&u.memoizedState!==null||Le;u=hs;var g=Le;if(hs=l,(Le=h)&&!g)for(B=s;B!==null;)l=B,h=l.child,l.tag===22&&l.memoizedState!==null?fd(s):h!==null?(h.return=l,B=h):fd(s);for(;a!==null;)B=a,Wp(a),a=a.sibling;B=s,hs=u,Le=g}hd(e)}else s.subtreeFlags&8772&&a!==null?(a.return=s,B=a):hd(e)}}function hd(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||fo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Qu(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qu(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var N=g.memoizedState;if(N!==null){var P=N.dehydrated;P!==null&&fi(P)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Le||t.flags&512&&hl(t)}catch(C){fe(t,t.return,C)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function pd(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function fd(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fo(4,t)}catch(h){fe(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(h){fe(t,s,h)}}var a=t.return;try{hl(t)}catch(h){fe(t,a,h)}break;case 5:var l=t.return;try{hl(t)}catch(h){fe(t,l,h)}}}catch(h){fe(t,t.return,h)}if(t===e){B=null;break}var u=t.sibling;if(u!==null){u.return=t.return,B=u;break}B=t.return}}var ry=Math.ceil,Ys=zt.ReactCurrentDispatcher,lc=zt.ReactCurrentOwner,ot=zt.ReactCurrentBatchConfig,K=0,be=null,ve=null,Pe=0,Ke=0,Zn=hn(0),ke=0,bi=null,Pn=0,mo=0,cc=0,si=null,We=null,uc=0,mr=1/0,At=null,Xs=!1,ml=null,rn=null,ps=!1,qt=null,Ks=0,oi=0,gl=null,bs=-1,js=0;function ze(){return K&6?ge():bs!==-1?bs:bs=ge()}function sn(e){return e.mode&1?K&2&&Pe!==0?Pe&-Pe:zg.transition!==null?(js===0&&(js=Eh()),js):(e=Z,e!==0||(e=window.event,e=e===void 0?16:Dh(e.type)),e):1}function wt(e,t,n,r){if(50<oi)throw oi=0,gl=null,Error(M(185));Pi(e,n,r),(!(K&2)||e!==be)&&(e===be&&(!(K&2)&&(mo|=n),ke===4&&Kt(e,Pe)),Ye(e,r),n===1&&K===0&&!(t.mode&1)&&(mr=ge()+500,uo&&pn()))}function Ye(e,t){var n=e.callbackNode;zm(e,t);var r=Rs(e,e===be?Pe:0);if(r===0)n!==null&&Cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Cu(n),t===1)e.tag===0?Ug(md.bind(null,e)):Zh(md.bind(null,e)),Lg(function(){!(K&6)&&pn()}),n=null;else{switch(Nh(r)){case 1:n=Ol;break;case 4:n=bh;break;case 16:n=Is;break;case 536870912:n=jh;break;default:n=Is}n=qp(n,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vp(e,t){if(bs=-1,js=0,K&6)throw Error(M(327));var n=e.callbackNode;if(sr()&&e.callbackNode!==n)return null;var r=Rs(e,e===be?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Qs(e,r);else{t=r;var s=K;K|=2;var a=Gp();(be!==e||Pe!==t)&&(At=null,mr=ge()+500,Tn(e,t));do try{oy();break}catch(u){$p(e,u)}while(!0);Kl(),Ys.current=a,K=s,ve!==null?t=0:(be=null,Pe=0,t=ke)}if(t!==0){if(t===2&&(s=Wa(e),s!==0&&(r=s,t=yl(e,s))),t===1)throw n=bi,Tn(e,0),Kt(e,r),Ye(e,ge()),n;if(t===6)Kt(e,r);else{if(s=e.current.alternate,!(r&30)&&!iy(s)&&(t=Qs(e,r),t===2&&(a=Wa(e),a!==0&&(r=a,t=yl(e,a))),t===1))throw n=bi,Tn(e,0),Kt(e,r),Ye(e,ge()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:wn(e,We,At);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=uc+500-ge(),10<t)){if(Rs(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=qa(wn.bind(null,e,We,At),t);break}wn(e,We,At);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var l=31-xt(r);a=1<<l,l=t[l],l>s&&(s=l),r&=~a}if(r=s,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ry(r/1960))-r,10<r){e.timeoutHandle=qa(wn.bind(null,e,We,At),r);break}wn(e,We,At);break;case 5:wn(e,We,At);break;default:throw Error(M(329))}}}return Ye(e,ge()),e.callbackNode===n?Vp.bind(null,e):null}function yl(e,t){var n=si;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=Qs(e,t),e!==2&&(t=We,We=n,t!==null&&vl(t)),e}function vl(e){We===null?We=e:We.push.apply(We,e)}function iy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!kt(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~cc,t&=~mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function md(e){if(K&6)throw Error(M(327));sr();var t=Rs(e,0);if(!(t&1))return Ye(e,ge()),null;var n=Qs(e,t);if(e.tag!==0&&n===2){var r=Wa(e);r!==0&&(t=r,n=yl(e,r))}if(n===1)throw n=bi,Tn(e,0),Kt(e,t),Ye(e,ge()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,We,At),Ye(e,ge()),null}function dc(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(mr=ge()+500,uo&&pn())}}function An(e){qt!==null&&qt.tag===0&&!(K&6)&&sr();var t=K;K|=1;var n=ot.transition,r=Z;try{if(ot.transition=null,Z=1,e)return e()}finally{Z=r,ot.transition=n,K=t,!(K&6)&&pn()}}function hc(){Ke=Zn.current,ce(Zn)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dg(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Gl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ms();break;case 3:pr(),ce($e),ce(Oe),tc();break;case 5:ec(r);break;case 4:pr();break;case 13:ce(de);break;case 19:ce(de);break;case 10:Ql(r.type._context);break;case 22:case 23:hc()}n=n.return}if(be=e,ve=e=on(e.current,null),Pe=Ke=t,ke=0,bi=null,cc=mo=Pn=0,We=si=null,Sn!==null){for(t=0;t<Sn.length;t++)if(n=Sn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=s,r.next=l}n.pending=r}Sn=null}return e}function $p(e,t){do{var n=ve;try{if(Kl(),Ss.current=Gs,$s){for(var r=he.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}$s=!1}if(Nn=0,Te=we=he=null,ri=!1,Si=0,lc.current=null,n===null||n.return===null){ke=1,bi=t,ve=null;break}e:{var a=e,l=n.return,u=n,h=t;if(t=Pe,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var g=h,N=u,P=N.tag;if(!(N.mode&1)&&(P===0||P===11||P===15)){var C=N.alternate;C?(N.updateQueue=C.updateQueue,N.memoizedState=C.memoizedState,N.lanes=C.lanes):(N.updateQueue=null,N.memoizedState=null)}var b=nd(l);if(b!==null){b.flags&=-257,rd(b,l,u,a,t),b.mode&1&&td(a,g,t),t=b,h=g;var E=t.updateQueue;if(E===null){var I=new Set;I.add(h),t.updateQueue=I}else E.add(h);break e}else{if(!(t&1)){td(a,g,t),pc();break e}h=Error(M(426))}}else if(ue&&u.mode&1){var O=nd(l);if(O!==null){!(O.flags&65536)&&(O.flags|=256),rd(O,l,u,a,t),Yl(fr(h,u));break e}}a=h=fr(h,u),ke!==4&&(ke=2),si===null?si=[a]:si.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var v=Np(a,h,t);Ku(a,v);break e;case 1:u=h;var x=a.type,T=a.stateNode;if(!(a.flags&128)&&(typeof x.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(rn===null||!rn.has(T)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=Pp(a,u,t);Ku(a,_);break e}}a=a.return}while(a!==null)}Xp(n)}catch(F){t=F,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Gp(){var e=Ys.current;return Ys.current=Gs,e===null?Gs:e}function pc(){(ke===0||ke===3||ke===2)&&(ke=4),be===null||!(Pn&268435455)&&!(mo&268435455)||Kt(be,Pe)}function Qs(e,t){var n=K;K|=2;var r=Gp();(be!==e||Pe!==t)&&(At=null,Tn(e,t));do try{sy();break}catch(s){$p(e,s)}while(!0);if(Kl(),K=n,Ys.current=r,ve!==null)throw Error(M(261));return be=null,Pe=0,ke}function sy(){for(;ve!==null;)Yp(ve)}function oy(){for(;ve!==null&&!Im();)Yp(ve)}function Yp(e){var t=Qp(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Xp(e):ve=t,lc.current=null}function Xp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zg(n,t),n!==null){n.flags&=32767,ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,ve=null;return}}else if(n=Jg(n,t,Ke),n!==null){ve=n;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);ke===0&&(ke=5)}function wn(e,t,n){var r=Z,s=ot.transition;try{ot.transition=null,Z=1,ay(e,t,n,r)}finally{ot.transition=s,Z=r}return null}function ay(e,t,n,r){do sr();while(qt!==null);if(K&6)throw Error(M(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Hm(e,a),e===be&&(ve=be=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ps||(ps=!0,qp(Is,function(){return sr(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=ot.transition,ot.transition=null;var l=Z;Z=1;var u=K;K|=4,lc.current=null,ty(e,n),Bp(n,e),Eg(Ka),_s=!!Xa,Ka=Xa=null,e.current=n,ny(n),Rm(),K=u,Z=l,ot.transition=a}else e.current=n;if(ps&&(ps=!1,qt=e,Ks=s),a=e.pendingLanes,a===0&&(rn=null),Lm(n.stateNode),Ye(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Xs)throw Xs=!1,e=ml,ml=null,e;return Ks&1&&e.tag!==0&&sr(),a=e.pendingLanes,a&1?e===gl?oi++:(oi=0,gl=e):oi=0,pn(),null}function sr(){if(qt!==null){var e=Nh(Ks),t=ot.transition,n=Z;try{if(ot.transition=null,Z=16>e?16:e,qt===null)var r=!1;else{if(e=qt,qt=null,Ks=0,K&6)throw Error(M(331));var s=K;for(K|=4,B=e.current;B!==null;){var a=B,l=a.child;if(B.flags&16){var u=a.deletions;if(u!==null){for(var h=0;h<u.length;h++){var g=u[h];for(B=g;B!==null;){var N=B;switch(N.tag){case 0:case 11:case 15:ii(8,N,a)}var P=N.child;if(P!==null)P.return=N,B=P;else for(;B!==null;){N=B;var C=N.sibling,b=N.return;if(Up(N),N===g){B=null;break}if(C!==null){C.return=b,B=C;break}B=b}}}var E=a.alternate;if(E!==null){var I=E.child;if(I!==null){E.child=null;do{var O=I.sibling;I.sibling=null,I=O}while(I!==null)}}B=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,B=l;else e:for(;B!==null;){if(a=B,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ii(9,a,a.return)}var v=a.sibling;if(v!==null){v.return=a.return,B=v;break e}B=a.return}}var x=e.current;for(B=x;B!==null;){l=B;var T=l.child;if(l.subtreeFlags&2064&&T!==null)T.return=l,B=T;else e:for(l=x;B!==null;){if(u=B,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:fo(9,u)}}catch(F){fe(u,u.return,F)}if(u===l){B=null;break e}var _=u.sibling;if(_!==null){_.return=u.return,B=_;break e}B=u.return}}if(K=s,pn(),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(so,e)}catch{}r=!0}return r}finally{Z=n,ot.transition=t}}return!1}function gd(e,t,n){t=fr(n,t),t=Np(e,t,1),e=nn(e,t,1),t=ze(),e!==null&&(Pi(e,1,t),Ye(e,t))}function fe(e,t,n){if(e.tag===3)gd(e,e,n);else for(;t!==null;){if(t.tag===3){gd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=fr(n,e),e=Pp(t,e,1),t=nn(t,e,1),e=ze(),t!==null&&(Pi(t,1,e),Ye(t,e));break}}t=t.return}}function ly(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Pe&n)===n&&(ke===4||ke===3&&(Pe&130023424)===Pe&&500>ge()-uc?Tn(e,0):cc|=n),Ye(e,t)}function Kp(e,t){t===0&&(e.mode&1?(t=rs,rs<<=1,!(rs&130023424)&&(rs=4194304)):t=1);var n=ze();e=Mt(e,t),e!==null&&(Pi(e,t,n),Ye(e,n))}function cy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kp(e,n)}function uy(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Kp(e,n)}var Qp;Qp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,qg(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ue&&t.flags&1048576&&ep(t,zs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ts(e,t),e=t.pendingProps;var s=ur(t,Oe.current);ir(t,n),s=rc(null,t,r,e,s,n);var a=ic();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ge(r)?(a=!0,Fs(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Jl(t),s.updater=po,t.stateNode=s,s._reactInternals=t,il(t,r,e,n),t=al(null,t,r,!0,a,n)):(t.tag=0,ue&&a&&$l(t),Ue(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ts(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=hy(r),e=dt(r,e),s){case 0:t=ol(null,t,r,e,n);break e;case 1:t=od(null,t,r,e,n);break e;case 11:t=id(null,t,r,e,n);break e;case 14:t=sd(null,t,r,dt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:dt(r,s),ol(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:dt(r,s),od(e,t,r,s,n);case 3:e:{if(_p(t),e===null)throw Error(M(387));r=t.pendingProps,a=t.memoizedState,s=a.element,op(e,t),Ws(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=fr(Error(M(423)),t),t=ad(e,t,r,n,s);break e}else if(r!==s){s=fr(Error(M(424)),t),t=ad(e,t,r,n,s);break e}else for(qe=tn(t.stateNode.containerInfo.firstChild),Je=t,ue=!0,pt=null,n=ip(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dr(),r===s){t=Ft(e,t,n);break e}Ue(e,t,r,n)}t=t.child}return t;case 5:return ap(t),e===null&&tl(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,l=s.children,Qa(r,s)?l=null:a!==null&&Qa(r,a)&&(t.flags|=32),Rp(e,t),Ue(e,t,l,n),t.child;case 6:return e===null&&tl(t),null;case 13:return Dp(e,t,n);case 4:return Zl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):Ue(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:dt(r,s),id(e,t,r,s,n);case 7:return Ue(e,t,t.pendingProps,n),t.child;case 8:return Ue(e,t,t.pendingProps.children,n),t.child;case 12:return Ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,l=s.value,se(Hs,r._currentValue),r._currentValue=l,a!==null)if(kt(a.value,l)){if(a.children===s.children&&!$e.current){t=Ft(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var h=u.firstContext;h!==null;){if(h.context===r){if(a.tag===1){h=Dt(-1,n&-n),h.tag=2;var g=a.updateQueue;if(g!==null){g=g.shared;var N=g.pending;N===null?h.next=h:(h.next=N.next,N.next=h),g.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),nl(a.return,n,t),u.lanes|=n;break}h=h.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(M(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),nl(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Ue(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,ir(t,n),s=at(s),r=r(s),t.flags|=1,Ue(e,t,r,n),t.child;case 14:return r=t.type,s=dt(r,t.pendingProps),s=dt(r.type,s),sd(e,t,r,s,n);case 15:return Ap(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:dt(r,s),Ts(e,t),t.tag=1,Ge(r)?(e=!0,Fs(t)):e=!1,ir(t,n),Ep(t,r,s),il(t,r,s,n),al(null,t,r,!0,e,n);case 19:return Lp(e,t,n);case 22:return Ip(e,t,n)}throw Error(M(156,t.tag))};function qp(e,t){return Th(e,t)}function dy(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new dy(e,t,n,r)}function fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hy(e){if(typeof e=="function")return fc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===Dl)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Es(e,t,n,r,s,a){var l=2;if(r=e,typeof e=="function")fc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Wn:return bn(n.children,s,a,t);case Rl:l=8,s|=8;break;case Na:return e=st(12,n,t,s|2),e.elementType=Na,e.lanes=a,e;case Pa:return e=st(13,n,t,s),e.elementType=Pa,e.lanes=a,e;case Aa:return e=st(19,n,t,s),e.elementType=Aa,e.lanes=a,e;case ah:return go(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sh:l=10;break e;case oh:l=9;break e;case _l:l=11;break e;case Dl:l=14;break e;case Gt:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=st(l,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function bn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=st(22,e,r,t),e.elementType=ah,e.lanes=n,e.stateNode={isHidden:!1},e}function ga(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function ya(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function py(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qo(0),this.expirationTimes=qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qo(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function mc(e,t,n,r,s,a,l,u,h){return e=new py(e,t,n,u,h),t===1?(t=1,a===!0&&(t|=8)):t=0,a=st(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jl(a),e}function fy(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jp(e){if(!e)return un;e=e._reactInternals;e:{if(Rn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ge(n))return Jh(e,n,t)}return t}function Zp(e,t,n,r,s,a,l,u,h){return e=mc(n,r,!0,e,s,a,l,u,h),e.context=Jp(null),n=e.current,r=ze(),s=sn(n),a=Dt(r,s),a.callback=t??null,nn(n,a,s),e.current.lanes=s,Pi(e,s,r),Ye(e,r),e}function yo(e,t,n,r){var s=t.current,a=ze(),l=sn(s);return n=Jp(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(s,t,l),e!==null&&(wt(e,s,l,a),ks(e,s,l)),l}function qs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gc(e,t){yd(e,t),(e=e.alternate)&&yd(e,t)}function my(){return null}var ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function yc(e){this._internalRoot=e}vo.prototype.render=yc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));yo(e,t,null,null)};vo.prototype.unmount=yc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){yo(null,e,null,null)}),t[Ot]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ih();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xt.length&&t!==0&&t<Xt[n].priority;n++);Xt.splice(n,0,e),n===0&&_h(e)}};function vc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vd(){}function gy(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var g=qs(l);a.call(g)}}var l=Zp(t,r,e,0,null,!1,!1,"",vd);return e._reactRootContainer=l,e[Ot]=l.current,yi(e.nodeType===8?e.parentNode:e),An(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var u=r;r=function(){var g=qs(h);u.call(g)}}var h=mc(e,0,!1,null,null,!1,!1,"",vd);return e._reactRootContainer=h,e[Ot]=h.current,yi(e.nodeType===8?e.parentNode:e),An(function(){yo(t,h,n,r)}),h}function wo(e,t,n,r,s){var a=n._reactRootContainer;if(a){var l=a;if(typeof s=="function"){var u=s;s=function(){var h=qs(l);u.call(h)}}yo(t,l,e,s)}else l=gy(n,t,e,s,r);return qs(l)}Ph=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kr(t.pendingLanes);n!==0&&(Ml(t,n|1),Ye(t,ge()),!(K&6)&&(mr=ge()+500,pn()))}break;case 13:An(function(){var r=Mt(e,1);if(r!==null){var s=ze();wt(r,e,1,s)}}),gc(e,1)}};Fl=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=ze();wt(t,e,134217728,n)}gc(e,134217728)}};Ah=function(e){if(e.tag===13){var t=sn(e),n=Mt(e,t);if(n!==null){var r=ze();wt(n,e,t,r)}gc(e,t)}};Ih=function(){return Z};Rh=function(e,t){var n=Z;try{return Z=e,t()}finally{Z=n}};za=function(e,t,n){switch(t){case"input":if(_a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=co(r);if(!s)throw Error(M(90));ch(r),_a(r,s)}}}break;case"textarea":dh(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};vh=dc;xh=An;var yy={usingClientEntryPoint:!1,Events:[Ii,Yn,co,gh,yh,dc]},Gr={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vy={bundleType:Gr.bundleType,version:Gr.version,rendererPackageName:Gr.rendererPackageName,rendererConfig:Gr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sh(e),e===null?null:e.stateNode},findFiberByHostInstance:Gr.findFiberByHostInstance||my,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fs.isDisabled&&fs.supportsFiber)try{so=fs.inject(vy),jt=fs}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vc(t))throw Error(M(200));return fy(e,t,null,n)};et.createRoot=function(e,t){if(!vc(e))throw Error(M(299));var n=!1,r="",s=ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=mc(e,1,!1,null,null,n,!1,r,s),e[Ot]=t.current,yi(e.nodeType===8?e.parentNode:e),new yc(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Sh(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return An(e)};et.hydrate=function(e,t,n){if(!xo(t))throw Error(M(200));return wo(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!vc(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",l=ef;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Zp(t,null,e,1,n??null,s,!1,a,l),e[Ot]=t.current,yi(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new vo(t)};et.render=function(e,t,n){if(!xo(t))throw Error(M(200));return wo(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!xo(e))throw Error(M(40));return e._reactRootContainer?(An(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};et.unstable_batchedUpdates=dc;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return wo(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function tf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tf)}catch(e){console.error(e)}}tf(),th.exports=et;var xy=th.exports,xd=xy;ja.createRoot=xd.createRoot,ja.hydrateRoot=xd.hydrateRoot;const ji={cryptography:[{id:"crypto-1",title:"Caesar Cipher Basics",difficulty:"Easy",points:10,description:"Julius Caesar used a simple cipher to protect his messages. In a Caesar cipher, each letter is shifted by a fixed number of positions in the alphabet.",learningObjective:"Understand how substitution ciphers work and practice decryption techniques.",vocabularyTerms:["caesar-cipher","cipher","encryption","decryption","plaintext","ciphertext"],prompt:`The following message was encrypted with a Caesar cipher using a shift of 3:

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
D) Throw it away`,hints:["USB drives can contain malware","The label is designed to make you curious","Never plug unknown devices into any computer","IT/Security has safe ways to examine it","Options C and D are both safe, but C is most helpful","The flag is FLAG{C}"],answer:"C",flag:"FLAG{C}",explanation:'This is "USB baiting". The label exploits curiosity. Never plug unknown USB drives into any computer. Report to IT/Security who can safely examine it in an isolated environment.'}]},wy=()=>Object.values(ji).flat(),ky=e=>wy().find(t=>t.id===e),qr={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},Sy={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]},te={PORT_SCAN:"port-scan",BRUTE_FORCE_SSH:"brute-force-ssh",SQL_INJECTION:"sql-injection",DATA_EXFILTRATION:"data-exfiltration",DDOS:"ddos",DNS_TUNNELING:"dns-tunneling"},nf={[te.PORT_SCAN]:{name:"Port Scan",description:"An attacker is scanning multiple ports on your system to find open services.",severity:"medium",indicators:["Single source IP connecting to many different ports","Sequential or rapid port probing","SYN packets without completing handshake"],mitigation:"Block the scanning IP address"},[te.BRUTE_FORCE_SSH]:{name:"SSH Brute Force",description:"An attacker is attempting to guess SSH credentials through repeated login attempts.",severity:"high",indicators:["Multiple failed SSH authentication attempts","Same source IP with repeated connections to port 22","Various username attempts (root, admin, user)"],mitigation:"Block the attacking IP and implement rate limiting"},[te.SQL_INJECTION]:{name:"SQL Injection",description:"An attacker is attempting to inject malicious SQL code through web requests.",severity:"critical",indicators:["HTTP requests containing SQL keywords (SELECT, UNION, DROP)","Special characters in URL parameters (', --, ;)","Attempts to manipulate database queries"],mitigation:"Block the source IP and review web application security"},[te.DATA_EXFILTRATION]:{name:"Data Exfiltration",description:"Large amounts of data are being transferred to an external IP address.",severity:"critical",indicators:["Unusually large outbound data transfers","Data sent to unfamiliar external IPs","Sustained high-bandwidth connections"],mitigation:"Block the external IP and investigate compromised system"},[te.DDOS]:{name:"DDoS Attack",description:"Multiple sources are flooding the network with traffic to overwhelm services.",severity:"high",indicators:["High volume of traffic from many sources","Repeated requests to same destination","Network bandwidth saturation"],mitigation:"Enable rate limiting and block attacking IPs"},[te.DNS_TUNNELING]:{name:"DNS Tunneling",description:"Data is being exfiltrated through encoded DNS queries.",severity:"high",indicators:["Unusual DNS query patterns","Long subdomain names with encoded data","High volume of TXT record queries"],mitigation:"Block suspicious DNS queries and investigate endpoint"}},Cy={[te.PORT_SCAN]:{windowSeconds:10,thresholds:{uniquePortsFromSameSource:5,packetsPerSecond:3},check:(e,t=1e4)=>{const n=Date.now(),r=e.filter(a=>new Date(a.timestamp).getTime()>n-t),s={};r.forEach(a=>{s[a.sourceIP]||(s[a.sourceIP]=new Set),s[a.sourceIP].add(a.destPort)});for(const[a,l]of Object.entries(s))if(l.size>=5)return{detected:!0,attackerIP:a,evidence:`${l.size} ports scanned`};return{detected:!1}}},[te.BRUTE_FORCE_SSH]:{windowSeconds:30,thresholds:{failedAttemptsFromSameSource:5},check:(e,t=3e4)=>{const n=Date.now(),r=e.filter(a=>new Date(a.timestamp).getTime()>n-t&&a.protocol==="SSH"&&a.info.toLowerCase().includes("failed")),s={};r.forEach(a=>{s[a.sourceIP]=(s[a.sourceIP]||0)+1});for(const[a,l]of Object.entries(s))if(l>=5)return{detected:!0,attackerIP:a,evidence:`${l} failed SSH attempts`};return{detected:!1}}},[te.SQL_INJECTION]:{patterns:[/('|"|;|--|\/\*|\*\/|union|select|insert|update|delete|drop|exec|execute)/i,/(or|and)\s+['"]?\d+['"]?\s*=\s*['"]?\d+/i,/'\s*(or|and)\s*'[^']*'\s*=\s*'/i],check:e=>{const t=e.filter(n=>n.protocol==="HTTP"&&n.isMalicious&&n.attackType===te.SQL_INJECTION);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} SQL injection attempts`}:{detected:!1}}},[te.DATA_EXFILTRATION]:{thresholds:{bytesPerWindow:1e5,windowSeconds:30},check:(e,t=3e4)=>{const n=Date.now(),r=e.filter(a=>new Date(a.timestamp).getTime()>n-t),s={};r.forEach(a=>{!a.destIP.startsWith("192.168.")&&!a.destIP.startsWith("10.")&&!a.destIP.startsWith("172.16.")&&(s[a.destIP]=(s[a.destIP]||0)+a.length)});for(const[a,l]of Object.entries(s))if(l>=1e5)return{detected:!0,attackerIP:a,evidence:`${Math.round(l/1024)}KB exfiltrated`};return{detected:!1}}},[te.DNS_TUNNELING]:{check:e=>{const t=e.filter(n=>n.protocol==="DNS"&&n.isMalicious&&n.attackType===te.DNS_TUNNELING);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} suspicious DNS queries`}:{detected:!1}}}},yt=[{id:"port-scan-basic",name:"Port Scan Detection",difficulty:"Easy",points:25,description:"A suspicious IP address is probing your network, scanning multiple ports to find vulnerable services. Identify and block the attacker.",learningObjective:"Learn to recognize port scanning behavior by observing sequential port connections from a single source.",attackType:te.PORT_SCAN,duration:60,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:3},hints:["Look for a single IP connecting to many different ports","Port scanners often use sequential port numbers","The attacker IP will have connections to ports like 21, 22, 23, 80, 443, etc."],backgroundTraffic:{packetsPerSecond:2,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:5,packetsPerSecond:3,attackerIP:"185.220.101.42",targetPorts:[21,22,23,25,80,110,143,443,445,3389,8080,8443]}},{id:"ssh-brute-force",name:"SSH Brute Force Attack",difficulty:"Medium",points:35,description:"An attacker is attempting to gain unauthorized access by guessing SSH credentials. Multiple failed login attempts indicate a brute force attack in progress.",learningObjective:"Understand how brute force attacks work and learn to identify repeated authentication failures.",attackType:te.BRUTE_FORCE_SSH,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for repeated SSH connections from the same IP","Failed authentication messages are a key indicator","Brute force attacks try common usernames: root, admin, user"],backgroundTraffic:{packetsPerSecond:3,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:8,packetsPerSecond:2,attackerIP:"198.51.100.77",targetPort:22,usernames:["root","admin","administrator","user","guest","test"]}},{id:"sql-injection-probe",name:"SQL Injection Probing",difficulty:"Medium",points:40,description:"Malicious HTTP requests containing SQL injection payloads are targeting your web application. These attacks attempt to manipulate database queries.",learningObjective:"Learn to identify SQL injection patterns in HTTP requests and understand common injection techniques.",attackType:te.SQL_INJECTION,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:4},hints:[`Look for special characters in HTTP requests: ' " ; --`,"SQL keywords like UNION, SELECT, DROP are red flags","Check URL parameters and POST data for suspicious patterns"],backgroundTraffic:{packetsPerSecond:4,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:6,packetsPerSecond:1.5,attackerIP:"203.0.113.99",targetPort:80}},{id:"data-exfiltration",name:"Data Exfiltration",difficulty:"Medium",points:40,description:"A compromised internal system is sending large amounts of data to an external IP. This could indicate stolen data being transferred out of the network.",learningObjective:"Learn to detect unusual outbound traffic patterns that may indicate data theft.",attackType:te.DATA_EXFILTRATION,duration:120,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for unusually large packet sizes going outbound","The destination IP will be external (not 192.168.x.x or 10.x.x.x)","Look for sustained transfers to the same external destination"],backgroundTraffic:{packetsPerSecond:3,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:10,packetsPerSecond:2,attackerIP:"45.33.32.156",sourceIP:"192.168.1.105",minPacketSize:5e3,maxPacketSize:15e3}}],Ty=()=>yt.reduce((e,t)=>e+t.points,0),by=()=>({total:yt.length,easy:yt.filter(e=>e.difficulty==="Easy").length,medium:yt.filter(e=>e.difficulty==="Medium").length,hard:yt.filter(e=>e.difficulty==="Hard").length,totalPoints:Ty()}),rf={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
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
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function jy(e){const t=rf[e];if(!t)return[];const n=[];for(const r of t.days)n.push(...r.exercises);return n}const va={"cyber-range":{icon:"🔐"},"arrays-loops":{icon:"💻"},"ap-csp":{icon:"📝"}},or=[{id:"assignment",title:"Assignment & Variables",pseudocode:"a ← expression",javascript:"let a = expression;",explanation:"The arrow (←) assigns a value to a variable. In pseudocode, you don't need to declare variables with let/const - just use the arrow to create and assign.",examples:[{pseudocode:"x ← 5",javascript:"let x = 5;"},{pseudocode:'name ← "Alice"',javascript:'let name = "Alice";'},{pseudocode:"total ← price + tax",javascript:"let total = price + tax;"},{pseudocode:"x ← x + 1",javascript:"x = x + 1; // or x++"}],keyPoints:["← is the assignment operator (like = in JavaScript)","Variables are created automatically when first assigned","Can reassign variables without re-declaring"]},{id:"display-input",title:"Display & Input",pseudocode:`DISPLAY(expression)
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
}`,javascript:"// Checks if path is clear before moving"}],keyPoints:["Robot starts somewhere on a grid","Black squares are walls/obstacles","Robot can only move to white/open squares","CAN_MOVE returns true/false"]}],an=[{id:"ps-001",topic:"assignment",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`x ← 10
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
DISPLAY(max)`,blankAnswers:{blank1:["1","0"],blank2:[">","> max"],blank3:["n"]},hints:["Start with the first element (index 1 in pseudocode)","Check if current is greater than max","Update max to the new larger value"],explanation:"Initialize max to first element, then compare each n. If n > max, update max to n."}],xl=[{id:"oval",name:"Oval / Terminator",purpose:"Start or End of the program/algorithm",description:"Every flowchart must have a Start and End. The oval shape indicates where the flow begins and where it terminates.",examples:["Start","End","Begin","Stop"],color:"#10b981",shape:"ellipse"},{id:"rectangle",name:"Rectangle / Process",purpose:"An action, calculation, or process step",description:'Represents any processing operation: assignments, calculations, or actions. This is where the actual "work" happens.',examples:["total ← price + tax","count ← count + 1","Send email","Calculate average"],color:"#3b82f6",shape:"rectangle"},{id:"diamond",name:"Diamond / Decision",purpose:"A yes/no question or condition check",description:"Used for branching logic (if/else). The condition is written inside, and two arrows come out: one for Yes/True and one for No/False.",examples:["Is x > 10?","age ≥ 18?","Found?","Done?"],color:"#f59e0b",shape:"diamond"},{id:"parallelogram",name:"Parallelogram / Input-Output",purpose:"Getting input or showing output",description:"Represents data entering the system (input from user) or leaving it (display/print). Think DISPLAY and INPUT operations.",examples:["Get user name",'Display "Hello"',"INPUT age","Print result"],color:"#8b5cf6",shape:"parallelogram"},{id:"arrow",name:"Arrow / Flow Line",purpose:"Shows direction of flow",description:"Connects shapes and shows the order of operations. Flow typically goes top-to-bottom and left-to-right. Arrows point to the next step.",examples:["→","↓","←","↑"],color:"#6b7280",shape:"arrow"}],ar=[{id:"fc-001",title:"Simple Decision Trace",difficulty:"beginner",type:"interpret",description:"Follow the flowchart to determine the output.",question:"What will be displayed if x = 7?",flowchartRef:"fc-ex-003",answer:"Positive",hints:["Start at the top and follow the arrows","At the diamond, check: is 7 > 0?","Follow the path that matches the answer"],explanation:'Starting at Start, we reach the decision "x > 0?". Since 7 > 0 is true (Yes), we follow the Yes path to display "Positive".'},{id:"fc-002",title:"Pass/Fail Check",difficulty:"beginner",type:"interpret",description:"Determine the output for a given input.",question:"What will be displayed if score = 55?",flowchartRef:"fc-ex-004",answer:"Fail",hints:["Input score = 55","Check the condition: is 55 ≥ 60?","Follow the appropriate path"],explanation:`55 is not ≥ 60 (it's less than 60), so the condition is false (No). Following the No path leads to displaying "Fail".`},{id:"fc-003",title:"Exact Boundary",difficulty:"beginner",type:"interpret",description:"Test a boundary condition.",question:"What will be displayed if score = 60?",flowchartRef:"fc-ex-004",answer:"Pass",hints:["60 is exactly the passing score","Is 60 ≥ 60?",'The ≥ means "greater than OR equal to"'],explanation:'60 is equal to 60, and since the condition uses ≥ (greater than or equal), 60 ≥ 60 is true. Output: "Pass".'},{id:"fc-004",title:"Loop Trace",difficulty:"intermediate",type:"interpret",description:"Trace through a counting loop.",question:"What numbers will be displayed by this flowchart?",flowchartRef:"fc-ex-005",answer:"1, 2, 3, 4, 5",hints:["count starts at 1","Loop continues while count is NOT > 5","After displaying, count increases by 1"],explanation:"count: 1 (display 1, count=2), 2 (display 2, count=3), 3 (display 3, count=4), 4 (display 4, count=5), 5 (display 5, count=6). When count=6, 6>5 is true, so loop exits."},{id:"fc-005",title:"Sum Calculation",difficulty:"intermediate",type:"interpret",description:"Calculate the result of a summation loop.",question:"If n = 4, what is the final value of sum displayed?",flowchartRef:"fc-ex-006",answer:"10",hints:["sum starts at 0, i starts at 1","Add i to sum, then increment i","1 + 2 + 3 + 4 = ?"],explanation:"Loop iterations: i=1: sum=0+1=1. i=2: sum=1+2=3. i=3: sum=3+3=6. i=4: sum=6+4=10. When i=5, 5>4 is true, exit and display 10."},{id:"fc-006",title:"Maximum of Three",difficulty:"intermediate",type:"interpret",description:"Determine which variable holds the maximum.",question:"If a=5, b=8, c=3, what path does the flowchart take and what is displayed?",flowchartRef:"fc-ex-007",answer:"8 (max ← b)",hints:["First check: is a ≥ b AND a ≥ c?","If not, check: is b ≥ c?","Follow the true condition"],explanation:"a=5 ≥ b=8? No, so first condition is false. Go to second decision: b=8 ≥ c=3? Yes, so max ← b = 8."},{id:"fc-007",title:"Identify Symbols",difficulty:"beginner",type:"symbol-match",description:"Match each flowchart symbol to its purpose.",question:"Match each shape to what it represents:",items:[{shape:"oval",options:["Start/End","Decision","Process","Input/Output"]},{shape:"diamond",options:["Start/End","Decision","Process","Input/Output"]},{shape:"rectangle",options:["Start/End","Decision","Process","Input/Output"]},{shape:"parallelogram",options:["Start/End","Decision","Process","Input/Output"]}],answer:{oval:"Start/End",diamond:"Decision",rectangle:"Process",parallelogram:"Input/Output"},hints:["Ovals are at the beginning and end","Diamonds ask yes/no questions","Rectangles do work/calculations"],explanation:"Oval = Start/End (terminators), Diamond = Decision (branching), Rectangle = Process (actions/calculations), Parallelogram = Input/Output (data flow)."},{id:"fc-008",title:"What Shape?",difficulty:"beginner",type:"multiple-choice",description:"Choose the correct shape for a given action.",question:'Which shape would you use for the statement: "Display the result"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Parallelogram",hints:["Display is a type of output","Parallelograms handle data entering or leaving the system"],explanation:"DISPLAY is an output operation, which is represented by a parallelogram (Input/Output symbol)."},{id:"fc-009",title:"Decision Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a condition.",question:'Which shape represents the statement: "IF score >= 60"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Diamond",hints:["IF statements check a condition","Conditions result in yes/no answers"],explanation:"IF statements are decisions that branch the flow based on a condition. Diamonds represent decisions with Yes/No paths."},{id:"fc-010",title:"Process Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a calculation.",question:'Which shape would you use for: "total ← total + price"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Rectangle",hints:["This is a calculation/assignment","No input, output, or decision happening"],explanation:"Assignment and calculations are processes represented by rectangles. This adds price to total - a processing step."},{id:"fc-011",title:"Build: Even or Odd",difficulty:"beginner",type:"build",description:"Create a flowchart to check if a number is even or odd.",requirements:["Start with a Start oval","Get a number from the user (Input)","Check if the number MOD 2 equals 0",'Display "Even" if yes, "Odd" if no',"End with an End oval"],pseudocode:`num ← INPUT()
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
}`,hints:["Initialize before the loop","Decision that loops back = REPEAT UNTIL","Code inside loop is the body"],explanation:'The arrow looping back indicates repetition. The decision "count > 5?" with a loop-back path becomes REPEAT UNTIL (count > 5).'},{id:"fc-018",title:"Loop Count",difficulty:"intermediate",type:"multiple-choice",description:"Analyze loop behavior.",question:'In a flowchart, a loop has initialization "i ← 1", condition "i > 10?", and increment "i ← i + 2". How many times does the loop body execute?',options:["5 times","6 times","10 times","11 times"],answer:"5 times",hints:["List out the values of i","i starts at 1, increases by 2 each time","Loop continues while i ≤ 10"],explanation:"i values: 1, 3, 5, 7, 9 (all ≤ 10, so loop runs). When i becomes 11, 11 > 10 is true and loop exits. Ran 5 times."},{id:"fc-019",title:"Flowchart Purpose",difficulty:"beginner",type:"multiple-choice",description:"Understand what flowcharts are for.",question:"What is the main purpose of a flowchart?",options:["To write executable code","To visually represent the logic and flow of an algorithm","To store data in a program","To test code for bugs"],answer:"To visually represent the logic and flow of an algorithm",hints:["Flowcharts are visual tools","They show steps and decisions","They're used before or alongside coding"],explanation:"Flowcharts provide a visual representation of how an algorithm works, showing the sequence of steps, decisions, and loops. They help plan and communicate logic before writing actual code."},{id:"fc-020",title:"Arrow Direction",difficulty:"beginner",type:"multiple-choice",description:"Understand flow direction.",question:"In a standard flowchart, what is the typical direction of flow?",options:["Right to left","Bottom to top","Top to bottom, left to right","Randomly in any direction"],answer:"Top to bottom, left to right",hints:["Think about how you read text",'Where is "Start" usually placed?','Where is "End" usually placed?'],explanation:"Flowcharts follow a top-to-bottom, left-to-right flow by convention. Start is at the top, End is at the bottom, and operations flow downward. This makes flowcharts easy to read like text."}],Ey=({studentName:e,totalPoints:t,assignments:n,completedChallenges:r,completedScenarios:s,completedExercises:a,completedPseudocode:l=[],completedFlowcharts:u=[],onSelectCategory:h,onSelectNetworkMonitor:g,onSelectWeek:N,onSelectAPCSP:P})=>{const C=n.some(p=>p.type==="cyber-range"),b=n.some(p=>p.type==="arrays-loops"),E=n.some(p=>p.type==="ap-csp"),I=p=>{if(p==="network-monitor")return{completed:s.length,total:yt.length,percentage:yt.length>0?s.length/yt.length*100:0};const f=ji[p]||[],y=f.filter(S=>r.includes(S.id)).length;return{completed:y,total:f.length,percentage:f.length>0?y/f.length*100:0}},O=p=>{const f=jy(p),y=f.filter(S=>a.includes(S.id)).length;return{completed:y,total:f.length,percentage:f.length>0?y/f.length*100:0}},v=p=>p==="pseudocode"?{completed:l.length,total:an.length,percentage:an.length>0?l.length/an.length*100:0}:{completed:u.length,total:ar.length,percentage:ar.length>0?u.length/ar.length*100:0},x=r.length+s.length,T=a.length,_=l.length+u.length,F=[{id:"cryptography",name:"Cryptography",icon:"[ CRYPTO ]",description:"Encryption, ciphers, and secure communication"},{id:"network",name:"Network Security",icon:"[ NETWORK ]",description:"Network protocols, ports, and traffic analysis"},{id:"password",name:"Password Security",icon:"[ PASSWD ]",description:"Password strength and authentication"},{id:"web",name:"Web Security",icon:"[ WEB ]",description:"Web vulnerabilities and secure coding"},{id:"social",name:"Social Engineering",icon:"[ SOCIAL ]",description:"Manipulation tactics and security awareness"},{id:"network-monitor",name:"Network Monitor",icon:"[ MONITOR ]",description:"Real-time traffic analysis",isScenario:!0}],D=[{id:"pseudocode",name:"Pseudocode",icon:"[ CODE ]",description:"Translate between AP CSP pseudocode and JavaScript"},{id:"flowcharts",name:"Flowcharts",icon:"[ FLOW ]",description:"Read, interpret, and build flowcharts"}],w=C||b||E;return o.jsxs("div",{className:"unified-dashboard",children:[o.jsxs("div",{className:"welcome-section",children:[o.jsxs("h1",{children:["Welcome, ",e,"!"]}),o.jsx("p",{children:"Complete your assigned work below. Track your progress across both cybersecurity and programming content."})]}),o.jsxs("div",{className:"stats",children:[o.jsxs("div",{className:"stat-card",children:[o.jsx("span",{className:"stat-value",children:t}),o.jsx("span",{className:"stat-label",children:"Total Points"})]}),o.jsxs("div",{className:"stat-card cyber",children:[o.jsx("span",{className:"stat-value",children:x}),o.jsx("span",{className:"stat-label",children:"Cyber Challenges"})]}),o.jsxs("div",{className:"stat-card programming",children:[o.jsx("span",{className:"stat-value",children:T}),o.jsx("span",{className:"stat-label",children:"Programming Exercises"})]}),o.jsxs("div",{className:"stat-card apcsp",children:[o.jsx("span",{className:"stat-value",children:_}),o.jsx("span",{className:"stat-label",children:"AP CSP Exercises"})]})]}),w?o.jsxs(o.Fragment,{children:[C&&o.jsxs("section",{className:"content-section cyber-section",children:[o.jsxs("h2",{className:"section-title cyber",children:[o.jsx("span",{className:"section-icon",children:va["cyber-range"].icon}),"Cybersecurity Challenges"]}),o.jsx("div",{className:"categories",children:F.map(p=>{const f=I(p.id);return o.jsxs("div",{className:"category-card cyber",onClick:()=>p.isScenario?g():h(p.id),children:[o.jsx("div",{className:"category-icon",children:p.icon}),o.jsx("h3",{children:p.name}),o.jsx("p",{className:"category-description",children:p.description}),o.jsxs("p",{className:"category-progress-text",children:[f.completed," / ",f.total," completed"]}),o.jsx("div",{className:"category-progress",children:o.jsx("div",{className:"category-progress-bar cyber",style:{width:`${f.percentage}%`}})})]},p.id)})})]}),b&&o.jsxs("section",{className:"content-section programming-section",children:[o.jsxs("h2",{className:"section-title programming",children:[o.jsx("span",{className:"section-icon",children:va["arrays-loops"].icon}),"Programming Exercises"]}),o.jsx("div",{className:"categories",children:Object.entries(rf).map(([p,f])=>{const y=O(p),S=p.replace("week","");return o.jsxs("div",{className:"category-card programming",onClick:()=>N(p),children:[o.jsxs("div",{className:"category-icon",children:["[ WEEK ",S," ]"]}),o.jsx("h3",{children:f.title}),o.jsx("p",{className:"category-description",children:f.bigIdea}),o.jsxs("p",{className:"category-progress-text",children:[y.completed," / ",y.total," completed"]}),o.jsx("div",{className:"category-progress",children:o.jsx("div",{className:"category-progress-bar programming",style:{width:`${y.percentage}%`}})})]},p)})})]}),E&&o.jsxs("section",{className:"content-section apcsp-section",children:[o.jsxs("h2",{className:"section-title apcsp",children:[o.jsx("span",{className:"section-icon",children:va["ap-csp"].icon}),"AP CSP Exam Prep"]}),o.jsx("div",{className:"categories",children:D.map(p=>{const f=v(p.id);return o.jsxs("div",{className:"category-card apcsp",onClick:()=>P(p.id),children:[o.jsx("div",{className:"category-icon",children:p.icon}),o.jsx("h3",{children:p.name}),o.jsx("p",{className:"category-description",children:p.description}),o.jsxs("p",{className:"category-progress-text",children:[f.completed," / ",f.total," completed"]}),o.jsx("div",{className:"category-progress",children:o.jsx("div",{className:"category-progress-bar apcsp",style:{width:`${f.percentage}%`}})})]},p.id)})})]})]}):o.jsxs("div",{className:"no-assignments",children:[o.jsx("div",{className:"no-assignments-icon",children:"[ WAITING ]"}),o.jsx("h2",{children:"No Assignments Yet"}),o.jsx("p",{children:"Your teacher hasn't assigned any content yet. Check back soon!"})]}),o.jsxs("div",{className:"learning-objectives",children:[o.jsx("h3",{children:"About This Platform"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Complete assigned challenges and exercises at your own pace"}),o.jsx("li",{children:"Earn points by completing each activity"}),o.jsx("li",{children:"Your progress is automatically saved"}),o.jsx("li",{children:"Access vocabulary terms for help with key concepts"})]})]})]})},Ny=({category:e,completedChallenges:t,onSelectChallenge:n})=>{const r={cryptography:"Cryptography",network:"Network Security",password:"Password Security",web:"Web Security",social:"Social Engineering"},s=ji[e]||[];return o.jsxs("div",{children:[o.jsxs("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:[r[e]," Challenges"]}),o.jsxs("div",{className:"learning-objectives",children:[o.jsx("h3",{children:"Learning Objectives"}),o.jsx("ul",{children:(Sy[e]||[]).map((a,l)=>o.jsx("li",{children:a},l))})]}),o.jsx("div",{className:"challenge-list",children:s.map(a=>{const l=t.includes(a.id);return o.jsxs("div",{className:`challenge-item ${l?"completed":""}`,onClick:()=>n(a.id),children:[o.jsxs("div",{className:"challenge-info",children:[o.jsx("h3",{children:a.title}),o.jsxs("p",{style:{color:"#b0b0b0",margin:"0.5rem 0"},children:[a.description.substring(0,120),"..."]}),o.jsxs("div",{className:"challenge-meta",children:[o.jsx("span",{className:`difficulty ${a.difficulty}`,children:a.difficulty}),o.jsxs("span",{className:"points",children:[a.points," points"]})]})]}),o.jsx("div",{className:"challenge-status",children:l?"✅":"🔒"})]},a.id)})})]})},Py=({challengeId:e,onComplete:t,onBack:n,isCompleted:r})=>{const[s,a]=L.useState(""),[l,u]=L.useState(!1),[h,g]=L.useState(null),[N,P]=L.useState(r),[C,b]=L.useState(null),E=ky(e);if(!E)return o.jsx("div",{children:"Challenge not found"});const I=()=>{var _,F;const v=s.trim().toUpperCase();[(_=E.answer)==null?void 0:_.toUpperCase(),(F=E.flag)==null?void 0:F.toUpperCase()].filter(Boolean).some(D=>v===D||v.includes(D))?(g({type:"success",message:"Correct! Well done!"}),P(!0),t(e,E.points)):g({type:"error",message:"Incorrect. Try again or check the hints!"})},O=v=>{b(C===v?null:v)};return o.jsxs("div",{className:"challenge-detail",children:[o.jsxs("div",{className:"challenge-header",children:[o.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:o.jsxs("div",{children:[o.jsx("h2",{children:E.title}),o.jsxs("div",{className:"challenge-meta",style:{marginTop:"1rem"},children:[o.jsx("span",{className:`difficulty ${E.difficulty}`,children:E.difficulty}),o.jsxs("span",{className:"points",children:[E.points," points"]}),r&&o.jsx("span",{style:{color:"#4caf50",fontWeight:"bold"},children:"✅ Completed"})]})]})}),o.jsxs("div",{className:"learning-objective",children:[o.jsx("strong",{children:"Learning Objective:"})," ",E.learningObjective]}),o.jsx("p",{style:{marginTop:"1rem",lineHeight:"1.6"},children:E.description})]}),E.vocabularyTerms&&E.vocabularyTerms.length>0&&o.jsxs("div",{className:"vocabulary-section",children:[o.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Key Vocabulary"}),o.jsx("div",{className:"vocabulary-tags",children:E.vocabularyTerms.map(v=>{const x=qr[v];return x?o.jsx("div",{className:"vocab-tag",onClick:()=>O(v),style:{borderColor:C===v?"#00ff88":"transparent"},children:x.term},v):null})}),C&&qr[C]&&o.jsxs("div",{style:{background:"rgba(0, 255, 136, 0.1)",padding:"1rem",borderRadius:"5px",marginTop:"1rem",borderLeft:"4px solid #00ff88"},children:[o.jsx("strong",{style:{color:"#00ff88"},children:qr[C].term}),o.jsx("p",{style:{marginTop:"0.5rem"},children:qr[C].definition})]})]}),o.jsxs("div",{children:[o.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Challenge"}),o.jsx("div",{className:"challenge-prompt",children:E.prompt})]}),E.hints&&E.hints.length>0&&o.jsxs("div",{className:"hints-section",children:[o.jsx("button",{className:"hints-toggle",onClick:()=>u(!l),children:l?"🔽 Hide Hints":"💡 Show Hints"}),l&&o.jsx("ul",{className:"hints-list",children:E.hints.map((v,x)=>o.jsxs("li",{className:"hint-item",children:["Hint ",x+1,": ",v]},x))})]}),!r&&o.jsxs("div",{className:"answer-section",children:[o.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Submit Your Answer"}),o.jsx("input",{type:"text",className:"answer-input",placeholder:"Enter your answer or flag here...",value:s,onChange:v=>a(v.target.value),onKeyPress:v=>v.key==="Enter"&&I()}),o.jsx("button",{className:"submit-btn",onClick:I,disabled:!s.trim(),children:"Submit Answer"})]}),h&&o.jsx("div",{className:`feedback ${h.type}`,children:h.message}),N&&E.explanation&&o.jsxs("div",{className:"explanation",children:[o.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Explanation"}),o.jsx("p",{children:E.explanation})]}),o.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Challenges"})]})},Ay=()=>{const[e,t]=L.useState("all"),n=["all","Cryptography","Network Security","Password Security","Web Security","Social Engineering","General"],r=Object.values(qr).filter(s=>e==="all"?!0:s.category===e);return o.jsxs("div",{className:"vocabulary-page",children:[o.jsx("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Cybersecurity Vocabulary"}),o.jsx("p",{style:{marginBottom:"2rem",color:"#b0b0b0"},children:"Build your cybersecurity knowledge by learning these key terms and concepts."}),o.jsx("div",{className:"vocab-categories",children:n.map(s=>o.jsx("button",{className:`vocab-category-btn ${e===s?"active":""}`,onClick:()=>t(s),children:s==="all"?"All Terms":s},s))}),o.jsxs("div",{style:{marginTop:"1rem",color:"#b0b0b0"},children:["Showing ",r.length," term",r.length!==1?"s":""]}),o.jsx("div",{className:"vocab-list",children:r.map((s,a)=>o.jsxs("div",{className:"vocab-card",children:[o.jsx("span",{className:"vocab-category",children:s.category}),o.jsx("h3",{children:s.term}),o.jsx("p",{style:{color:"#e0e0e0",marginTop:"0.5rem"},children:s.definition})]},a))}),r.length===0&&o.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"#b0b0b0"},children:"No vocabulary terms found for this category."})]})},sf={TCP:{name:"TCP",color:"#4fc3f7",port:null},UDP:{name:"UDP",color:"#81c784",port:null},HTTP:{name:"HTTP",color:"#64b5f6",port:80},HTTPS:{name:"HTTPS",color:"#7986cb",port:443},SSH:{name:"SSH",color:"#ffb74d",port:22},DNS:{name:"DNS",color:"#ba68c8",port:53},FTP:{name:"FTP",color:"#f06292",port:21},SMTP:{name:"SMTP",color:"#4db6ac",port:25},ICMP:{name:"ICMP",color:"#90a4ae",port:null}},Tt={SYN:"SYN",ACK:"ACK",PSH:"PSH","SYN-ACK":"SYN-ACK"},wd=[{prefix:"192.168.1.",range:[1,254]},{prefix:"10.0.0.",range:[1,254]},{prefix:"172.16.0.",range:[1,254]}],kd=["203.0.113.","198.51.100.","185.220.101.","45.33.32.","104.21.35.","8.8.8."],Sd=[80,443,53,22,21,25,3389,8080,3306,5432],Js={normal:["GET /index.html HTTP/1.1","GET /api/users HTTP/1.1","POST /api/login HTTP/1.1","GET /images/logo.png HTTP/1.1","GET /css/styles.css HTTP/1.1","GET /js/app.js HTTP/1.1","GET /api/products HTTP/1.1","POST /api/cart HTTP/1.1","GET /favicon.ico HTTP/1.1","GET /api/status HTTP/1.1"],sqlInjection:["GET /api/users?id=1' OR '1'='1 HTTP/1.1","POST /login?user=admin'-- HTTP/1.1","GET /search?q='; DROP TABLE users;-- HTTP/1.1","GET /api/product?id=1 UNION SELECT * FROM passwords HTTP/1.1","POST /api/auth?username=admin' OR 1=1-- HTTP/1.1","GET /page?id=1; SELECT * FROM users HTTP/1.1","GET /api/data?filter=' OR ''=' HTTP/1.1"]},Zs={normal:["A google.com","A microsoft.com","A github.com","AAAA cloudflare.com","MX company.com","A cdn.example.com","A api.service.com","A www.example.org"],tunneling:["TXT aGVsbG8gd29ybGQ.evil.com","TXT ZGF0YWV4ZmlsdHJhdGlvbg.malware.net","TXT c2VjcmV0LWRhdGE.suspicious.io","A cmd-exec-001.c2server.com","TXT YmFzZTY0ZW5jb2RlZA.tunnel.net"]},Cd={normal:["SSH-2.0-OpenSSH_8.4 connection established","Key exchange: ECDH SHA256","User authentication successful","Session opened for user admin"]},Td={tcp:{min:40,max:1500},udp:{min:28,max:65535},http:{min:200,max:8e3},dns:{min:28,max:512},ssh:{min:40,max:2e3},icmp:{min:28,max:1500}},xr=(e={})=>({id:Math.random().toString(36).substr(2,9),timestamp:new Date().toISOString(),sourceIP:"0.0.0.0",destIP:"0.0.0.0",sourcePort:0,destPort:0,protocol:"TCP",length:0,flags:"",info:"",payload:"",isMalicious:!1,attackType:null,flaggedByUser:!1,...e}),wl=()=>{const e=wd[Math.floor(Math.random()*wd.length)],t=Math.floor(Math.random()*(e.range[1]-e.range[0]))+e.range[0];return e.prefix+t},Iy=()=>{const e=kd[Math.floor(Math.random()*kd.length)],t=Math.floor(Math.random()*254)+1;return e+t},ft=(e=!0)=>e?Sd[Math.floor(Math.random()*Sd.length)]:Math.floor(Math.random()*65535)+1,_i=(e="tcp")=>{const t=Td[e.toLowerCase()]||Td.tcp;return Math.floor(Math.random()*(t.max-t.min))+t.min};let bd=0;const wr=()=>(bd++,`pkt-${Date.now()}-${bd}`),Ry=(e=["HTTP","HTTPS","DNS","TCP"])=>{const t=e[Math.floor(Math.random()*e.length)],n=wl(),r=Math.random()>.3?Iy():wl();let s,a,l,u;switch(t){case"HTTP":s=80,a=ft(!1),l=Js.normal[Math.floor(Math.random()*Js.normal.length)],u=Tt.ACK;break;case"HTTPS":s=443,a=ft(!1),l="TLS Application Data",u=Tt.ACK;break;case"DNS":s=53,a=ft(!1),l=Zs.normal[Math.floor(Math.random()*Zs.normal.length)],u="";break;case"SSH":s=22,a=ft(!1),l=Cd.normal[Math.floor(Math.random()*Cd.normal.length)],u=Tt.ACK;break;default:s=ft(!0),a=ft(!1),l="TCP segment",u=[Tt.ACK,Tt.PSH,Tt["SYN-ACK"]][Math.floor(Math.random()*3)]}return xr({id:wr(),timestamp:new Date().toISOString(),sourceIP:n,destIP:r,sourcePort:a,destPort:s,protocol:t,length:_i(t.toLowerCase()),flags:u,info:l,payload:"",isMalicious:!1,attackType:null})},_y=(e,t,n)=>xr({id:wr(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:ft(!1),destPort:n,protocol:"TCP",length:_i("tcp"),flags:Tt.SYN,info:`SYN scan to port ${n}`,payload:"",isMalicious:!0,attackType:te.PORT_SCAN}),Dy=(e,t,n)=>{const r=[`Authentication failed for ${n}`,`Invalid password for ${n}`,`Failed password for ${n} from ${e}`],s=r[Math.floor(Math.random()*r.length)];return xr({id:wr(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:ft(!1),destPort:22,protocol:"SSH",length:_i("ssh"),flags:Tt.ACK,info:s,payload:`SSH-2.0-OpenSSH_7.9 [AUTH FAIL: ${n}]`,isMalicious:!0,attackType:te.BRUTE_FORCE_SSH})},Ly=(e,t)=>{const n=Js.sqlInjection[Math.floor(Math.random()*Js.sqlInjection.length)];return xr({id:wr(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:ft(!1),destPort:80,protocol:"HTTP",length:_i("http"),flags:Tt.PSH,info:n,payload:n,isMalicious:!0,attackType:te.SQL_INJECTION})},Oy=(e,t,n=5e3,r=15e3)=>{const s=Math.floor(Math.random()*(r-n))+n;return xr({id:wr(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:ft(!1),destPort:443,protocol:"HTTPS",length:s,flags:Tt.PSH,info:`Large outbound transfer (${Math.round(s/1024)}KB)`,payload:`[Encrypted data: ${s} bytes]`,isMalicious:!0,attackType:te.DATA_EXFILTRATION})},My=(e,t)=>{const n=Zs.tunneling[Math.floor(Math.random()*Zs.tunneling.length)];return xr({id:wr(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:ft(!1),destPort:53,protocol:"DNS",length:_i("dns"),flags:"",info:n,payload:n,isMalicious:!0,attackType:te.DNS_TUNNELING})};class Fy{constructor(t){this.scenario=t,this.isRunning=!1,this.attackStarted=!1,this.attackPortIndex=0,this.attackUsernameIndex=0,this.elapsedTime=0,this.targetIP=wl(),this.blockedIPs=new Set}start(){this.isRunning=!0,this.attackStarted=!1,this.elapsedTime=0}stop(){this.isRunning=!1}blockIP(t){this.blockedIPs.add(t)}unblockIP(t){this.blockedIPs.delete(t)}isIPBlocked(t){return this.blockedIPs.has(t)}generatePackets(t){if(!this.isRunning)return[];this.elapsedTime+=t;const n=[],{backgroundTraffic:r,attackConfig:s}=this.scenario,a=Math.round(r.packetsPerSecond*t);for(let l=0;l<a;l++)n.push(Ry(r.protocols));if(this.elapsedTime>=s.startDelay&&(this.attackStarted=!0),this.attackStarted&&!this.isIPBlocked(s.attackerIP)){const l=Math.round(s.packetsPerSecond*t);for(let u=0;u<l;u++){const h=this.generateAttackPacket();h&&n.push(h)}}return n}generateAttackPacket(){const{attackType:t,attackConfig:n}=this.scenario;switch(t){case te.PORT_SCAN:{const r=n.targetPorts[this.attackPortIndex%n.targetPorts.length];return this.attackPortIndex++,_y(n.attackerIP,this.targetIP,r)}case te.BRUTE_FORCE_SSH:{const r=n.usernames[this.attackUsernameIndex%n.usernames.length];return this.attackUsernameIndex++,Dy(n.attackerIP,this.targetIP,r)}case te.SQL_INJECTION:return Ly(n.attackerIP,this.targetIP);case te.DATA_EXFILTRATION:return Oy(n.sourceIP,n.attackerIP,n.minPacketSize,n.maxPacketSize);case te.DNS_TUNNELING:return My(n.sourceIP||this.targetIP,"8.8.8.8");default:return null}}getAttackerIP(){return this.scenario.attackConfig.attackerIP}}const Uy=(e,t=3e4)=>{const n=[];for(const[r,s]of Object.entries(Cy))if(s.check){const a=s.check(e,t);a.detected&&n.push({type:r,attackerIP:a.attackerIP,evidence:a.evidence,timestamp:new Date().toISOString(),...nf[r]})}return n},zy=(e,t)=>{let n=0;const r=[],s=e.flaggedPackets.filter(g=>g.isMalicious),a=e.flaggedPackets.filter(g=>!g.isMalicious);if(s.length>0){const g=s.length*5;n+=g,r.push({action:"Correctly flagged malicious packets",count:s.length,points:g})}if(a.length>0){const g=a.length*2;n-=g,r.push({action:"False positive flags (penalty)",count:a.length,points:-g})}e.identifiedAttackType===t.attackType&&(n+=15,r.push({action:"Correctly identified attack type",count:1,points:15}));const l=t.attackConfig.attackerIP,u=e.blockedIPs.includes(l),h=e.blockedIPs.filter(g=>g!==l);if(u&&(n+=10,r.push({action:"Blocked attacker IP",count:1,points:10})),h.length>0){const g=h.length*5;n-=g,r.push({action:"Incorrectly blocked innocent IP (penalty)",count:h.length,points:-g})}return e.completedUnderTimeLimit&&n>0&&(n+=5,r.push({action:"Completed under time limit",count:1,points:5})),{total:Math.max(0,n),maxPossible:t.points,breakdown:r,passed:n>=t.points*.6}},Hy=(e,t,n)=>{const r=t.successCriteria,s={allMet:!0,details:[]};if(r.mustBlockAttacker){const a=e.blockedIPs.includes(t.attackConfig.attackerIP);s.details.push({criterion:"Block attacker IP",met:a,description:a?"Attacker IP blocked":"Attacker IP not blocked"}),a||(s.allMet=!1)}if(r.mustIdentifyAttackType){const a=e.identifiedAttackType===t.attackType;s.details.push({criterion:"Identify attack type",met:a,description:a?"Attack type correctly identified":"Attack type not identified"}),a||(s.allMet=!1)}if(r.minMaliciousPacketsFlagged){const a=e.flaggedPackets.filter(u=>u.isMalicious).length,l=a>=r.minMaliciousPacketsFlagged;s.details.push({criterion:`Flag at least ${r.minMaliciousPacketsFlagged} malicious packets`,met:l,description:`Flagged ${a} malicious packets`}),l||(s.allMet=!1)}return s},jd=e=>{switch(e){case"critical":return"#f44336";case"high":return"#ff9800";case"medium":return"#ffeb3b";case"low":return"#4caf50";default:return"#90a4ae"}},kl=e=>{var t;return((t=nf[e])==null?void 0:t.name)||e},By=({scenarios:e,completedScenarios:t,onSelectScenario:n})=>{const r=by(),s=u=>t.includes(u),a=u=>u.toLowerCase(),l=()=>e.filter(u=>t.includes(u.id)).reduce((u,h)=>u+h.points,0);return o.jsxs("div",{className:"scenario-selector",children:[o.jsxs("div",{className:"scenario-stats",children:[o.jsxs("div",{className:"scenario-stat",children:[o.jsx("span",{className:"stat-value",children:t.length}),o.jsx("span",{className:"stat-label",children:"Completed"})]}),o.jsxs("div",{className:"scenario-stat",children:[o.jsx("span",{className:"stat-value",children:r.total}),o.jsx("span",{className:"stat-label",children:"Total Scenarios"})]}),o.jsxs("div",{className:"scenario-stat",children:[o.jsx("span",{className:"stat-value",children:l()}),o.jsx("span",{className:"stat-label",children:"Points Earned"})]}),o.jsxs("div",{className:"scenario-stat",children:[o.jsx("span",{className:"stat-value",children:r.totalPoints}),o.jsx("span",{className:"stat-label",children:"Total Points"})]})]}),o.jsx("div",{className:"scenario-grid",children:e.map(u=>{const h=s(u.id);return o.jsxs("div",{className:`scenario-card ${h?"completed":""}`,onClick:()=>n(u),children:[h&&o.jsxs("div",{className:"completed-badge",children:[o.jsx("span",{className:"checkmark",children:"✓"}),"Completed"]}),o.jsxs("div",{className:"scenario-header",children:[o.jsx("h3",{children:u.name}),o.jsx("span",{className:`difficulty ${a(u.difficulty)}`,children:u.difficulty})]}),o.jsx("p",{className:"scenario-description",children:u.description}),o.jsxs("div",{className:"scenario-meta",children:[o.jsxs("div",{className:"meta-item",children:[o.jsx("span",{className:"meta-icon",children:"🎯"}),o.jsxs("span",{children:[u.points," points"]})]}),o.jsxs("div",{className:"meta-item",children:[o.jsx("span",{className:"meta-icon",children:"⏱"}),o.jsxs("span",{children:[u.duration,"s"]})]})]}),o.jsxs("div",{className:"scenario-objective",children:[o.jsx("strong",{children:"Learning Objective:"}),o.jsx("p",{children:u.learningObjective})]}),o.jsx("button",{className:"btn-start",children:h?"Play Again":"Start Scenario"})]},u.id)})})]})},Wy=({packets:e,selectedPacket:t,flaggedPackets:n,onSelectPacket:r,onFlagPacket:s})=>{const a=L.useRef(null),l=L.useRef(!0);L.useEffect(()=>{a.current&&l.current&&(a.current.scrollTop=a.current.scrollHeight)},[e]);const u=()=>{if(a.current){const{scrollTop:b,scrollHeight:E,clientHeight:I}=a.current;l.current=b+I>=E-50}},h=b=>new Date(b).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:2}),g=b=>{var E;return((E=sf[b])==null?void 0:E.color)||"#90a4ae"},N=b=>n.some(E=>E.id===b.id),P=b=>{r(b)},C=(b,E)=>{b.stopPropagation(),s(E)};return o.jsxs("div",{className:"packet-list-container",children:[o.jsxs("div",{className:"packet-list-header",children:[o.jsx("h3",{children:"Live Traffic"}),o.jsxs("span",{className:"packet-count",children:[e.length," packets"]})]}),o.jsxs("div",{className:"packet-table-header",children:[o.jsx("div",{className:"col-flag"}),o.jsx("div",{className:"col-time",children:"Time"}),o.jsx("div",{className:"col-src",children:"Source"}),o.jsx("div",{className:"col-dst",children:"Destination"}),o.jsx("div",{className:"col-proto",children:"Protocol"}),o.jsx("div",{className:"col-len",children:"Length"}),o.jsx("div",{className:"col-info",children:"Info"})]}),o.jsxs("div",{className:"packet-list",ref:a,onScroll:u,children:[e.map(b=>o.jsxs("div",{className:`packet-row
              ${(t==null?void 0:t.id)===b.id?"selected":""}
              ${b.isMalicious?"malicious":""}
              ${N(b)?"flagged":""}
            `,onClick:()=>P(b),children:[o.jsx("div",{className:"col-flag",children:o.jsx("button",{className:`flag-btn ${N(b)?"flagged":""}`,onClick:E=>C(E,b),title:N(b)?"Unflag packet":"Flag as suspicious",children:N(b)?"⚑":"⚐"})}),o.jsx("div",{className:"col-time",children:h(b.timestamp)}),o.jsxs("div",{className:"col-src",children:[o.jsx("span",{className:"ip",children:b.sourceIP}),o.jsxs("span",{className:"port",children:[":",b.sourcePort]})]}),o.jsxs("div",{className:"col-dst",children:[o.jsx("span",{className:"ip",children:b.destIP}),o.jsxs("span",{className:"port",children:[":",b.destPort]})]}),o.jsx("div",{className:"col-proto",children:o.jsx("span",{className:"protocol-badge",style:{backgroundColor:g(b.protocol)},children:b.protocol})}),o.jsx("div",{className:"col-len",children:b.length}),o.jsx("div",{className:"col-info",title:b.info,children:b.info})]},b.id)),e.length===0&&o.jsx("div",{className:"packet-list-empty",children:"Waiting for network traffic..."})]})]})},Vy=({packet:e,onFlagPacket:t})=>{if(!e)return o.jsx("div",{className:"packet-detail",children:o.jsx("div",{className:"packet-detail-empty",children:"Select a packet to view details"})});const n=s=>new Date(s).toLocaleString("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,hour12:!1}),r=s=>{var a;return((a=sf[s])==null?void 0:a.color)||"#90a4ae"};return o.jsxs("div",{className:"packet-detail",children:[o.jsxs("div",{className:"packet-detail-header",children:[o.jsx("h4",{children:"Packet Details"}),o.jsx("div",{className:"packet-detail-actions",children:o.jsx("button",{className:`flag-btn-lg ${e.flaggedByUser?"flagged":""}`,onClick:()=>t(e),children:e.flaggedByUser?"⚑ Flagged":"⚐ Flag as Suspicious"})})]}),o.jsxs("div",{className:"packet-detail-content",children:[o.jsxs("div",{className:"detail-section",children:[o.jsx("h5",{children:"General"}),o.jsxs("div",{className:"detail-grid",children:[o.jsxs("div",{className:"detail-item",children:[o.jsx("span",{className:"detail-label",children:"Packet ID"}),o.jsx("span",{className:"detail-value mono",children:e.id})]}),o.jsxs("div",{className:"detail-item",children:[o.jsx("span",{className:"detail-label",children:"Timestamp"}),o.jsx("span",{className:"detail-value",children:n(e.timestamp)})]}),o.jsxs("div",{className:"detail-item",children:[o.jsx("span",{className:"detail-label",children:"Protocol"}),o.jsx("span",{className:"detail-value protocol-badge",style:{backgroundColor:r(e.protocol)},children:e.protocol})]}),o.jsxs("div",{className:"detail-item",children:[o.jsx("span",{className:"detail-label",children:"Length"}),o.jsxs("span",{className:"detail-value",children:[e.length," bytes"]})]})]})]}),o.jsxs("div",{className:"detail-section",children:[o.jsx("h5",{children:"Source"}),o.jsxs("div",{className:"detail-grid",children:[o.jsxs("div",{className:"detail-item",children:[o.jsx("span",{className:"detail-label",children:"IP Address"}),o.jsx("span",{className:"detail-value mono",children:e.sourceIP})]}),o.jsxs("div",{className:"detail-item",children:[o.jsx("span",{className:"detail-label",children:"Port"}),o.jsx("span",{className:"detail-value",children:e.sourcePort})]})]})]}),o.jsxs("div",{className:"detail-section",children:[o.jsx("h5",{children:"Destination"}),o.jsxs("div",{className:"detail-grid",children:[o.jsxs("div",{className:"detail-item",children:[o.jsx("span",{className:"detail-label",children:"IP Address"}),o.jsx("span",{className:"detail-value mono",children:e.destIP})]}),o.jsxs("div",{className:"detail-item",children:[o.jsx("span",{className:"detail-label",children:"Port"}),o.jsx("span",{className:"detail-value",children:e.destPort})]})]})]}),e.flags&&o.jsxs("div",{className:"detail-section",children:[o.jsx("h5",{children:"TCP Flags"}),o.jsx("div",{className:"detail-item",children:o.jsx("span",{className:"detail-value mono",children:e.flags})})]}),o.jsxs("div",{className:"detail-section",children:[o.jsx("h5",{children:"Info"}),o.jsx("div",{className:"detail-item full-width",children:o.jsx("span",{className:"detail-value info-box mono",children:e.info})})]}),e.payload&&o.jsxs("div",{className:"detail-section",children:[o.jsx("h5",{children:"Payload"}),o.jsx("div",{className:"detail-item full-width",children:o.jsx("pre",{className:"payload-box",children:e.payload})})]}),e.isMalicious&&o.jsxs("div",{className:"detail-section malicious-warning",children:[o.jsx("h5",{children:"Warning"}),o.jsxs("div",{className:"warning-content",children:[o.jsx("span",{className:"warning-icon",children:"⚠"}),o.jsxs("div",{children:[o.jsx("strong",{children:"Potentially Malicious Traffic"}),e.attackType&&o.jsxs("p",{children:["Attack Type: ",kl(e.attackType)]})]})]})]})]})]})},$y=({alerts:e,onBlockIP:t})=>{const n=r=>new Date(r).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return o.jsxs("div",{className:"alert-panel",children:[o.jsxs("div",{className:"alert-panel-header",children:[o.jsx("h4",{children:"Threat Alerts"}),e.length>0&&o.jsx("span",{className:"alert-count",children:e.length})]}),o.jsx("div",{className:"alert-list",children:e.length===0?o.jsxs("div",{className:"alert-empty",children:[o.jsx("span",{className:"alert-empty-icon",children:"🛡"}),o.jsx("p",{children:"No threats detected yet"}),o.jsx("p",{className:"alert-empty-hint",children:"Monitoring network traffic..."})]}):e.map((r,s)=>o.jsxs("div",{className:"alert-item",style:{borderLeftColor:jd(r.severity)},children:[o.jsxs("div",{className:"alert-header",children:[o.jsx("span",{className:"alert-severity",style:{backgroundColor:jd(r.severity)},children:r.severity.toUpperCase()}),o.jsx("span",{className:"alert-time",children:n(r.timestamp)})]}),o.jsx("div",{className:"alert-title",children:r.name}),o.jsx("div",{className:"alert-description",children:r.description}),o.jsxs("div",{className:"alert-details",children:[o.jsxs("div",{className:"alert-evidence",children:[o.jsx("strong",{children:"Evidence:"})," ",r.evidence]}),o.jsxs("div",{className:"alert-ip",children:[o.jsx("strong",{children:"Source IP:"}),o.jsx("span",{className:"mono",children:r.attackerIP})]})]}),o.jsxs("div",{className:"alert-indicators",children:[o.jsx("strong",{children:"Indicators:"}),o.jsx("ul",{children:r.indicators.slice(0,2).map((a,l)=>o.jsx("li",{children:a},l))})]}),o.jsx("div",{className:"alert-actions",children:o.jsxs("button",{className:"btn-block",onClick:()=>t(r.attackerIP),children:["Block ",r.attackerIP]})})]},`${r.type}-${r.attackerIP}-${s}`))})]})},Gy=({blockedIPs:e,attackTypes:t,identifiedAttackType:n,onBlockIP:r,onUnblockIP:s,onIdentifyAttack:a,hints:l})=>{const[u,h]=L.useState(""),[g,N]=L.useState(!1),P=C=>{C.preventDefault();const b=u.trim();b&&/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(b)&&(r(b),h(""))};return o.jsxs("div",{className:"action-panel",children:[o.jsxs("div",{className:"action-section",children:[o.jsx("h4",{children:"Identify Attack Type"}),o.jsx("p",{className:"action-hint",children:"What type of attack is occurring?"}),o.jsx("div",{className:"attack-type-grid",children:t.map(C=>o.jsx("button",{className:`attack-type-btn ${n===C?"selected":""}`,onClick:()=>a(C),children:kl(C)},C))}),n&&o.jsxs("div",{className:"selected-attack",children:["Selected: ",o.jsx("strong",{children:kl(n)})]})]}),o.jsxs("div",{className:"action-section",children:[o.jsx("h4",{children:"Firewall Rules"}),o.jsxs("form",{onSubmit:P,className:"block-ip-form",children:[o.jsx("input",{type:"text",placeholder:"Enter IP to block (e.g., 192.168.1.100)",value:u,onChange:C=>h(C.target.value),className:"ip-input"}),o.jsx("button",{type:"submit",className:"btn-block-submit",children:"Block IP"})]}),o.jsxs("div",{className:"blocked-ips",children:[o.jsxs("h5",{children:["Blocked IPs (",e.length,")"]}),e.length===0?o.jsx("p",{className:"no-blocked",children:"No IPs blocked yet"}):o.jsx("ul",{className:"blocked-ip-list",children:e.map(C=>o.jsxs("li",{className:"blocked-ip-item",children:[o.jsx("span",{className:"mono",children:C}),o.jsx("button",{className:"btn-unblock",onClick:()=>s(C),title:"Unblock this IP",children:"×"})]},C))})]})]}),o.jsxs("div",{className:"action-section hints-section",children:[o.jsxs("button",{className:"hints-toggle",onClick:()=>N(!g),children:[g?"Hide Hints":"Show Hints"," 💡"]}),g&&l&&l.length>0&&o.jsx("div",{className:"hints-list",children:l.map((C,b)=>o.jsxs("div",{className:"hint-item",children:[o.jsx("span",{className:"hint-number",children:b+1}),o.jsx("span",{className:"hint-text",children:C})]},b))})]})]})},Yy=({completedScenarios:e,onCompleteScenario:t,onBack:n})=>{const[r,s]=L.useState(null),[a,l]=L.useState(!1),[u,h]=L.useState(0),[g,N]=L.useState(!1),[P,C]=L.useState([]),[b,E]=L.useState(null),[I,O]=L.useState({total:0,perSecond:0,bytes:0}),[v,x]=L.useState([]),[T,_]=L.useState([]),[F,D]=L.useState(null),[w,p]=L.useState([]),[f,y]=L.useState(null),S=L.useRef(null),j=L.useRef(null),k=L.useRef(Date.now()),ie=L.useCallback(H=>{s(H),h(H.duration),C([]),x([]),_([]),D(null),p([]),E(null),y(null),N(!1),S.current=new Fy(H),S.current.start(),l(!0),k.current=Date.now()},[]),Se=L.useCallback(()=>{l(!1),S.current&&S.current.stop(),j.current&&clearInterval(j.current)},[]),Me=L.useCallback(()=>{if(Se(),N(!0),!r)return;const H={flaggedPackets:v,blockedIPs:T,identifiedAttackType:F,completedUnderTimeLimit:u>0},$=zy(H,r),q=Hy(H,r);y({score:$,criteria:q,passed:$.passed&&q.allMet}),$.passed&&q.allMet&&t(r.id,$.total)},[r,v,T,F,u,P,Se,t]);L.useEffect(()=>{if(!(!a||!S.current))return j.current=setInterval(()=>{const H=Date.now(),$=(H-k.current)/1e3;k.current=H;const q=S.current.generatePackets($);C(oe=>[...oe,...q].slice(-200)),h(oe=>{const ye=Math.max(0,oe-$);return ye<=0&&Me(),ye}),O(oe=>({total:oe.total+q.length,perSecond:Math.round(q.length/$),bytes:oe.bytes+q.reduce((ye,Xe)=>ye+Xe.length,0)}))},200),()=>{j.current&&clearInterval(j.current)}},[a,Me]),L.useEffect(()=>{if(!a||P.length<5)return;const H=Uy(P,3e4);H.length>0&&p($=>{const q=H.filter(oe=>!$.some(ye=>ye.type===oe.type&&ye.attackerIP===oe.attackerIP));return[...$,...q]})},[P,a]);const xe=L.useCallback(H=>{x($=>$.some(oe=>oe.id===H.id)?$.filter(oe=>oe.id!==H.id):[...$,H]),C($=>$.map(q=>q.id===H.id?{...q,flaggedByUser:!q.flaggedByUser}:q))},[]),z=L.useCallback(H=>{S.current&&S.current.blockIP(H),_($=>$.includes(H)?$:[...$,H])},[]),V=L.useCallback(H=>{S.current&&S.current.unblockIP(H),_($=>$.filter(q=>q!==H))},[]),G=L.useCallback(H=>{D(H)},[]),ee=L.useCallback(()=>{Se(),s(null),C([]),y(null),N(!1)},[Se]);return r?g&&f?o.jsxs("div",{className:"network-monitor",children:[o.jsxs("div",{className:"nm-header",children:[o.jsx("h2",{children:"Scenario Complete"}),o.jsx("h3",{children:r.name})]}),o.jsxs("div",{className:"nm-results",children:[o.jsxs("div",{className:`results-summary ${f.passed?"passed":"failed"}`,children:[o.jsx("div",{className:"result-icon",children:f.passed?"✓":"✗"}),o.jsx("h3",{children:f.passed?"Mission Accomplished!":"Mission Failed"}),o.jsxs("div",{className:"result-score",children:["Score: ",f.score.total," / ",f.score.maxPossible," points"]})]}),o.jsxs("div",{className:"results-breakdown",children:[o.jsx("h4",{children:"Score Breakdown"}),f.score.breakdown.map((H,$)=>o.jsxs("div",{className:`breakdown-item ${H.points>=0?"positive":"negative"}`,children:[o.jsx("span",{children:H.action}),o.jsxs("span",{className:"breakdown-count",children:["x",H.count]}),o.jsxs("span",{className:"breakdown-points",children:[H.points>=0?"+":"",H.points]})]},$))]}),o.jsxs("div",{className:"results-criteria",children:[o.jsx("h4",{children:"Success Criteria"}),f.criteria.details.map((H,$)=>o.jsxs("div",{className:`criteria-item ${H.met?"met":"not-met"}`,children:[o.jsx("span",{className:"criteria-icon",children:H.met?"✓":"✗"}),o.jsx("span",{children:H.criterion}),o.jsx("span",{className:"criteria-desc",children:H.description})]},$))]}),o.jsxs("div",{className:"results-actions",children:[o.jsx("button",{className:"btn-primary",onClick:()=>ie(r),children:"Try Again"}),o.jsx("button",{className:"btn-secondary",onClick:ee,children:"Choose Another Scenario"})]})]})]}):o.jsxs("div",{className:"network-monitor",children:[o.jsxs("div",{className:"nm-header",children:[o.jsx("button",{className:"back-btn",onClick:ee,children:"← Back"}),o.jsxs("div",{className:"nm-title-section",children:[o.jsx("h2",{children:r.name}),o.jsx("span",{className:`difficulty ${r.difficulty}`,children:r.difficulty})]}),o.jsxs("div",{className:"nm-stats",children:[o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat-value",children:Math.ceil(u)}),o.jsx("span",{className:"stat-label",children:"Time Left"})]}),o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat-value",children:I.total}),o.jsx("span",{className:"stat-label",children:"Packets"})]}),o.jsxs("div",{className:"stat",children:[o.jsxs("span",{className:"stat-value",children:[I.perSecond,"/s"]}),o.jsx("span",{className:"stat-label",children:"Rate"})]}),o.jsxs("div",{className:"stat",children:[o.jsxs("span",{className:"stat-value",children:[Math.round(I.bytes/1024),"KB"]}),o.jsx("span",{className:"stat-label",children:"Data"})]})]}),o.jsx("button",{className:"btn-complete",onClick:Me,children:"Complete Mission"})]}),o.jsxs("div",{className:"nm-objective",children:[o.jsx("strong",{children:"Objective:"})," ",r.description]}),o.jsxs("div",{className:"nm-main-content",children:[o.jsx("div",{className:"nm-left-panel",children:o.jsx(Wy,{packets:P,selectedPacket:b,flaggedPackets:v,onSelectPacket:E,onFlagPacket:xe})}),o.jsxs("div",{className:"nm-right-panel",children:[o.jsx($y,{alerts:w,onBlockIP:z}),o.jsx(Gy,{blockedIPs:T,attackTypes:Object.values(te),identifiedAttackType:F,onBlockIP:z,onUnblockIP:V,onIdentifyAttack:G,hints:r.hints})]})]}),o.jsx("div",{className:"nm-bottom-panel",children:o.jsx(Vy,{packet:b,onFlagPacket:xe})})]}):o.jsxs("div",{className:"network-monitor",children:[o.jsxs("div",{className:"nm-header",children:[o.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Dashboard"}),o.jsx("h2",{children:"Network Monitor"}),o.jsx("p",{className:"nm-subtitle",children:"Learn to detect and respond to cyber attacks in real-time"})]}),o.jsx(By,{scenarios:yt,completedScenarios:e,onSelectScenario:ie})]})};/**
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
 */const of=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Xy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=e[n++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=e[n++],l=e[n++],u=e[n++],h=((s&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const a=e[n++],l=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|l&63)}}return t.join("")},Ky={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const a=e[s],l=s+1<e.length,u=l?e[s+1]:0,h=s+2<e.length,g=h?e[s+2]:0,N=a>>2,P=(a&3)<<4|u>>4;let C=(u&15)<<2|g>>6,b=g&63;h||(b=64,l||(C=64)),r.push(n[N],n[P],n[C],n[b])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(of(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Xy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const a=n[e.charAt(s++)],u=s<e.length?n[e.charAt(s)]:0;++s;const g=s<e.length?n[e.charAt(s)]:64;++s;const P=s<e.length?n[e.charAt(s)]:64;if(++s,a==null||u==null||g==null||P==null)throw new Qy;const C=a<<2|u>>4;if(r.push(C),g!==64){const b=u<<4&240|g>>2;if(r.push(b),P!==64){const E=g<<6&192|P;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Qy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qy=function(e){const t=of(e);return Ky.encodeByteArray(t,!0)},af=function(e){return qy(e).replace(/\./g,"")};function Jy(){try{return typeof indexedDB=="object"}catch{return!1}}function Zy(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;t(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const e0="FirebaseError";class kr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=e0,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lf.prototype.create)}}class lf{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,a=this.errors[t],l=a?t0(a,r):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new kr(s,u,r)}}function t0(e,t){return e.replace(n0,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const n0=/\{\$([^}]+)}/g;class eo{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const r0={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},i0=re.INFO,s0={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},o0=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=s0[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cf{constructor(t){this.name=t,this._logLevel=i0,this._logHandler=o0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?r0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const a0=(e,t)=>t.some(n=>e instanceof n);let Ed,Nd;function l0(){return Ed||(Ed=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function c0(){return Nd||(Nd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uf=new WeakMap,Sl=new WeakMap,df=new WeakMap,xa=new WeakMap,xc=new WeakMap;function u0(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",l)},a=()=>{n(ln(e.result)),s()},l=()=>{r(e.error),s()};e.addEventListener("success",a),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&uf.set(n,e)}).catch(()=>{}),xc.set(t,e),t}function d0(e){if(Sl.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",l),e.removeEventListener("abort",l)},a=()=>{n(),s()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",a),e.addEventListener("error",l),e.addEventListener("abort",l)});Sl.set(e,t)}let Cl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||df.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function h0(e){Cl=e(Cl)}function p0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(wa(this),t,...n);return df.set(r,t.sort?t.sort():[t]),ln(r)}:c0().includes(e)?function(...t){return e.apply(wa(this),t),ln(uf.get(this))}:function(...t){return ln(e.apply(wa(this),t))}}function f0(e){return typeof e=="function"?p0(e):(e instanceof IDBTransaction&&d0(e),a0(e,l0())?new Proxy(e,Cl):e)}function ln(e){if(e instanceof IDBRequest)return u0(e);if(xa.has(e))return xa.get(e);const t=f0(e);return t!==e&&(xa.set(e,t),xc.set(t,e)),t}const wa=e=>xc.get(e);function m0(e,t,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const l=indexedDB.open(e,t),u=ln(l);return r&&l.addEventListener("upgradeneeded",h=>{r(ln(l.result),h.oldVersion,h.newVersion,ln(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{a&&h.addEventListener("close",()=>a()),s&&h.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),u}const g0=["get","getKey","getAll","getAllKeys","count"],y0=["put","add","delete","clear"],ka=new Map;function Pd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ka.get(t))return ka.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=y0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||g0.includes(n)))return;const a=async function(l,...u){const h=this.transaction(l,s?"readwrite":"readonly");let g=h.store;return r&&(g=g.index(u.shift())),(await Promise.all([g[n](...u),s&&h.done]))[0]};return ka.set(t,a),a}h0(e=>({...e,get:(t,n,r)=>Pd(t,n)||e.get(t,n,r),has:(t,n)=>!!Pd(t,n)||e.has(t,n)}));/**
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
 */class v0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(x0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function x0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Tl="@firebase/app",Ad="0.10.13";/**
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
 */const Ut=new cf("@firebase/app"),w0="@firebase/app-compat",k0="@firebase/analytics-compat",S0="@firebase/analytics",C0="@firebase/app-check-compat",T0="@firebase/app-check",b0="@firebase/auth",j0="@firebase/auth-compat",E0="@firebase/database",N0="@firebase/data-connect",P0="@firebase/database-compat",A0="@firebase/functions",I0="@firebase/functions-compat",R0="@firebase/installations",_0="@firebase/installations-compat",D0="@firebase/messaging",L0="@firebase/messaging-compat",O0="@firebase/performance",M0="@firebase/performance-compat",F0="@firebase/remote-config",U0="@firebase/remote-config-compat",z0="@firebase/storage",H0="@firebase/storage-compat",B0="@firebase/firestore",W0="@firebase/vertexai-preview",V0="@firebase/firestore-compat",$0="firebase",G0="10.14.1",Y0={[Tl]:"fire-core",[w0]:"fire-core-compat",[S0]:"fire-analytics",[k0]:"fire-analytics-compat",[T0]:"fire-app-check",[C0]:"fire-app-check-compat",[b0]:"fire-auth",[j0]:"fire-auth-compat",[E0]:"fire-rtdb",[N0]:"fire-data-connect",[P0]:"fire-rtdb-compat",[A0]:"fire-fn",[I0]:"fire-fn-compat",[R0]:"fire-iid",[_0]:"fire-iid-compat",[D0]:"fire-fcm",[L0]:"fire-fcm-compat",[O0]:"fire-perf",[M0]:"fire-perf-compat",[F0]:"fire-rc",[U0]:"fire-rc-compat",[z0]:"fire-gcs",[H0]:"fire-gcs-compat",[B0]:"fire-fst",[V0]:"fire-fst-compat",[W0]:"fire-vertex","fire-js":"fire-js",[$0]:"fire-js-all"};/**
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
 */const X0=new Map,K0=new Map,Id=new Map;function Rd(e,t){try{e.container.addComponent(t)}catch(n){Ut.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function to(e){const t=e.name;if(Id.has(t))return Ut.debug(`There were multiple attempts to register component ${t}.`),!1;Id.set(t,e);for(const n of X0.values())Rd(n,e);for(const n of K0.values())Rd(n,e);return!0}/**
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
 */const Q0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wc=new lf("app","Firebase",Q0);/**
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
 */const q0=G0;function lr(e,t,n){var r;let s=(r=Y0[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const a=s.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const u=[`Unable to register library "${s}" with version "${t}":`];a&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ut.warn(u.join(" "));return}to(new eo(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const J0="firebase-heartbeat-database",Z0=1,Ei="firebase-heartbeat-store";let Sa=null;function hf(){return Sa||(Sa=m0(J0,Z0,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ei)}catch(n){console.warn(n)}}}}).catch(e=>{throw wc.create("idb-open",{originalErrorMessage:e.message})})),Sa}async function ev(e){try{const n=(await hf()).transaction(Ei),r=await n.objectStore(Ei).get(pf(e));return await n.done,r}catch(t){if(t instanceof kr)Ut.warn(t.message);else{const n=wc.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(n.message)}}}async function _d(e,t){try{const r=(await hf()).transaction(Ei,"readwrite");await r.objectStore(Ei).put(t,pf(e)),await r.done}catch(n){if(n instanceof kr)Ut.warn(n.message);else{const r=wc.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function pf(e){return`${e.name}!${e.options.appId}`}/**
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
 */const tv=1024,nv=30*24*60*60*1e3;class rv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Dd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=nv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dd(),{heartbeatsToSend:r,unsentEntries:s}=iv(this._heartbeatsCache.heartbeats),a=af(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Ut.warn(n),""}}}function Dd(){return new Date().toISOString().substring(0,10)}function iv(e,t=tv){const n=[];let r=e.slice();for(const s of e){const a=n.find(l=>l.agent===s.agent);if(a){if(a.dates.push(s.date),Ld(n)>t){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ld(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jy()?Zy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ev(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return _d(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ld(e){return af(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ov(e){to(new eo("platform-logger",t=>new v0(t),"PRIVATE")),to(new eo("heartbeat",t=>new rv(t),"PRIVATE")),lr(Tl,Ad,e),lr(Tl,Ad,"esm2017"),lr("fire-js","")}ov("");var av="firebase",lv="10.14.1";/**
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
 */lr(av,lv,"app");var Od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ff;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,p){function f(){}f.prototype=p.prototype,w.D=p.prototype,w.prototype=new f,w.prototype.constructor=w,w.C=function(y,S,j){for(var k=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)k[ie-2]=arguments[ie];return p.prototype[S].apply(y,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,p,f){f||(f=0);var y=Array(16);if(typeof p=="string")for(var S=0;16>S;++S)y[S]=p.charCodeAt(f++)|p.charCodeAt(f++)<<8|p.charCodeAt(f++)<<16|p.charCodeAt(f++)<<24;else for(S=0;16>S;++S)y[S]=p[f++]|p[f++]<<8|p[f++]<<16|p[f++]<<24;p=w.g[0],f=w.g[1],S=w.g[2];var j=w.g[3],k=p+(j^f&(S^j))+y[0]+3614090360&4294967295;p=f+(k<<7&4294967295|k>>>25),k=j+(S^p&(f^S))+y[1]+3905402710&4294967295,j=p+(k<<12&4294967295|k>>>20),k=S+(f^j&(p^f))+y[2]+606105819&4294967295,S=j+(k<<17&4294967295|k>>>15),k=f+(p^S&(j^p))+y[3]+3250441966&4294967295,f=S+(k<<22&4294967295|k>>>10),k=p+(j^f&(S^j))+y[4]+4118548399&4294967295,p=f+(k<<7&4294967295|k>>>25),k=j+(S^p&(f^S))+y[5]+1200080426&4294967295,j=p+(k<<12&4294967295|k>>>20),k=S+(f^j&(p^f))+y[6]+2821735955&4294967295,S=j+(k<<17&4294967295|k>>>15),k=f+(p^S&(j^p))+y[7]+4249261313&4294967295,f=S+(k<<22&4294967295|k>>>10),k=p+(j^f&(S^j))+y[8]+1770035416&4294967295,p=f+(k<<7&4294967295|k>>>25),k=j+(S^p&(f^S))+y[9]+2336552879&4294967295,j=p+(k<<12&4294967295|k>>>20),k=S+(f^j&(p^f))+y[10]+4294925233&4294967295,S=j+(k<<17&4294967295|k>>>15),k=f+(p^S&(j^p))+y[11]+2304563134&4294967295,f=S+(k<<22&4294967295|k>>>10),k=p+(j^f&(S^j))+y[12]+1804603682&4294967295,p=f+(k<<7&4294967295|k>>>25),k=j+(S^p&(f^S))+y[13]+4254626195&4294967295,j=p+(k<<12&4294967295|k>>>20),k=S+(f^j&(p^f))+y[14]+2792965006&4294967295,S=j+(k<<17&4294967295|k>>>15),k=f+(p^S&(j^p))+y[15]+1236535329&4294967295,f=S+(k<<22&4294967295|k>>>10),k=p+(S^j&(f^S))+y[1]+4129170786&4294967295,p=f+(k<<5&4294967295|k>>>27),k=j+(f^S&(p^f))+y[6]+3225465664&4294967295,j=p+(k<<9&4294967295|k>>>23),k=S+(p^f&(j^p))+y[11]+643717713&4294967295,S=j+(k<<14&4294967295|k>>>18),k=f+(j^p&(S^j))+y[0]+3921069994&4294967295,f=S+(k<<20&4294967295|k>>>12),k=p+(S^j&(f^S))+y[5]+3593408605&4294967295,p=f+(k<<5&4294967295|k>>>27),k=j+(f^S&(p^f))+y[10]+38016083&4294967295,j=p+(k<<9&4294967295|k>>>23),k=S+(p^f&(j^p))+y[15]+3634488961&4294967295,S=j+(k<<14&4294967295|k>>>18),k=f+(j^p&(S^j))+y[4]+3889429448&4294967295,f=S+(k<<20&4294967295|k>>>12),k=p+(S^j&(f^S))+y[9]+568446438&4294967295,p=f+(k<<5&4294967295|k>>>27),k=j+(f^S&(p^f))+y[14]+3275163606&4294967295,j=p+(k<<9&4294967295|k>>>23),k=S+(p^f&(j^p))+y[3]+4107603335&4294967295,S=j+(k<<14&4294967295|k>>>18),k=f+(j^p&(S^j))+y[8]+1163531501&4294967295,f=S+(k<<20&4294967295|k>>>12),k=p+(S^j&(f^S))+y[13]+2850285829&4294967295,p=f+(k<<5&4294967295|k>>>27),k=j+(f^S&(p^f))+y[2]+4243563512&4294967295,j=p+(k<<9&4294967295|k>>>23),k=S+(p^f&(j^p))+y[7]+1735328473&4294967295,S=j+(k<<14&4294967295|k>>>18),k=f+(j^p&(S^j))+y[12]+2368359562&4294967295,f=S+(k<<20&4294967295|k>>>12),k=p+(f^S^j)+y[5]+4294588738&4294967295,p=f+(k<<4&4294967295|k>>>28),k=j+(p^f^S)+y[8]+2272392833&4294967295,j=p+(k<<11&4294967295|k>>>21),k=S+(j^p^f)+y[11]+1839030562&4294967295,S=j+(k<<16&4294967295|k>>>16),k=f+(S^j^p)+y[14]+4259657740&4294967295,f=S+(k<<23&4294967295|k>>>9),k=p+(f^S^j)+y[1]+2763975236&4294967295,p=f+(k<<4&4294967295|k>>>28),k=j+(p^f^S)+y[4]+1272893353&4294967295,j=p+(k<<11&4294967295|k>>>21),k=S+(j^p^f)+y[7]+4139469664&4294967295,S=j+(k<<16&4294967295|k>>>16),k=f+(S^j^p)+y[10]+3200236656&4294967295,f=S+(k<<23&4294967295|k>>>9),k=p+(f^S^j)+y[13]+681279174&4294967295,p=f+(k<<4&4294967295|k>>>28),k=j+(p^f^S)+y[0]+3936430074&4294967295,j=p+(k<<11&4294967295|k>>>21),k=S+(j^p^f)+y[3]+3572445317&4294967295,S=j+(k<<16&4294967295|k>>>16),k=f+(S^j^p)+y[6]+76029189&4294967295,f=S+(k<<23&4294967295|k>>>9),k=p+(f^S^j)+y[9]+3654602809&4294967295,p=f+(k<<4&4294967295|k>>>28),k=j+(p^f^S)+y[12]+3873151461&4294967295,j=p+(k<<11&4294967295|k>>>21),k=S+(j^p^f)+y[15]+530742520&4294967295,S=j+(k<<16&4294967295|k>>>16),k=f+(S^j^p)+y[2]+3299628645&4294967295,f=S+(k<<23&4294967295|k>>>9),k=p+(S^(f|~j))+y[0]+4096336452&4294967295,p=f+(k<<6&4294967295|k>>>26),k=j+(f^(p|~S))+y[7]+1126891415&4294967295,j=p+(k<<10&4294967295|k>>>22),k=S+(p^(j|~f))+y[14]+2878612391&4294967295,S=j+(k<<15&4294967295|k>>>17),k=f+(j^(S|~p))+y[5]+4237533241&4294967295,f=S+(k<<21&4294967295|k>>>11),k=p+(S^(f|~j))+y[12]+1700485571&4294967295,p=f+(k<<6&4294967295|k>>>26),k=j+(f^(p|~S))+y[3]+2399980690&4294967295,j=p+(k<<10&4294967295|k>>>22),k=S+(p^(j|~f))+y[10]+4293915773&4294967295,S=j+(k<<15&4294967295|k>>>17),k=f+(j^(S|~p))+y[1]+2240044497&4294967295,f=S+(k<<21&4294967295|k>>>11),k=p+(S^(f|~j))+y[8]+1873313359&4294967295,p=f+(k<<6&4294967295|k>>>26),k=j+(f^(p|~S))+y[15]+4264355552&4294967295,j=p+(k<<10&4294967295|k>>>22),k=S+(p^(j|~f))+y[6]+2734768916&4294967295,S=j+(k<<15&4294967295|k>>>17),k=f+(j^(S|~p))+y[13]+1309151649&4294967295,f=S+(k<<21&4294967295|k>>>11),k=p+(S^(f|~j))+y[4]+4149444226&4294967295,p=f+(k<<6&4294967295|k>>>26),k=j+(f^(p|~S))+y[11]+3174756917&4294967295,j=p+(k<<10&4294967295|k>>>22),k=S+(p^(j|~f))+y[2]+718787259&4294967295,S=j+(k<<15&4294967295|k>>>17),k=f+(j^(S|~p))+y[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(S+(k<<21&4294967295|k>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+j&4294967295}r.prototype.u=function(w,p){p===void 0&&(p=w.length);for(var f=p-this.blockSize,y=this.B,S=this.h,j=0;j<p;){if(S==0)for(;j<=f;)s(this,w,j),j+=this.blockSize;if(typeof w=="string"){for(;j<p;)if(y[S++]=w.charCodeAt(j++),S==this.blockSize){s(this,y),S=0;break}}else for(;j<p;)if(y[S++]=w[j++],S==this.blockSize){s(this,y),S=0;break}}this.h=S,this.o+=p},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;var f=8*this.o;for(p=w.length-8;p<w.length;++p)w[p]=f&255,f/=256;for(this.u(w),w=Array(16),p=f=0;4>p;++p)for(var y=0;32>y;y+=8)w[f++]=this.g[p]>>>y&255;return w};function a(w,p){var f=u;return Object.prototype.hasOwnProperty.call(f,w)?f[w]:f[w]=p(w)}function l(w,p){this.h=p;for(var f=[],y=!0,S=w.length-1;0<=S;S--){var j=w[S]|0;y&&j==p||(f[S]=j,y=!1)}this.g=f}var u={};function h(w){return-128<=w&&128>w?a(w,function(p){return new l([p|0],0>p?-1:0)}):new l([w|0],0>w?-1:0)}function g(w){if(isNaN(w)||!isFinite(w))return P;if(0>w)return O(g(-w));for(var p=[],f=1,y=0;w>=f;y++)p[y]=w/f|0,f*=4294967296;return new l(p,0)}function N(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return O(N(w.substring(1),p));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=g(Math.pow(p,8)),y=P,S=0;S<w.length;S+=8){var j=Math.min(8,w.length-S),k=parseInt(w.substring(S,S+j),p);8>j?(j=g(Math.pow(p,j)),y=y.j(j).add(g(k))):(y=y.j(f),y=y.add(g(k)))}return y}var P=h(0),C=h(1),b=h(16777216);e=l.prototype,e.m=function(){if(I(this))return-O(this).m();for(var w=0,p=1,f=0;f<this.g.length;f++){var y=this.i(f);w+=(0<=y?y:4294967296+y)*p,p*=4294967296}return w},e.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(E(this))return"0";if(I(this))return"-"+O(this).toString(w);for(var p=g(Math.pow(w,6)),f=this,y="";;){var S=_(f,p).g;f=v(f,S.j(p));var j=((0<f.g.length?f.g[0]:f.h)>>>0).toString(w);if(f=S,E(f))return j+y;for(;6>j.length;)j="0"+j;y=j+y}},e.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function E(w){if(w.h!=0)return!1;for(var p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function I(w){return w.h==-1}e.l=function(w){return w=v(this,w),I(w)?-1:E(w)?0:1};function O(w){for(var p=w.g.length,f=[],y=0;y<p;y++)f[y]=~w.g[y];return new l(f,~w.h).add(C)}e.abs=function(){return I(this)?O(this):this},e.add=function(w){for(var p=Math.max(this.g.length,w.g.length),f=[],y=0,S=0;S<=p;S++){var j=y+(this.i(S)&65535)+(w.i(S)&65535),k=(j>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);y=k>>>16,j&=65535,k&=65535,f[S]=k<<16|j}return new l(f,f[f.length-1]&-2147483648?-1:0)};function v(w,p){return w.add(O(p))}e.j=function(w){if(E(this)||E(w))return P;if(I(this))return I(w)?O(this).j(O(w)):O(O(this).j(w));if(I(w))return O(this.j(O(w)));if(0>this.l(b)&&0>w.l(b))return g(this.m()*w.m());for(var p=this.g.length+w.g.length,f=[],y=0;y<2*p;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(var S=0;S<w.g.length;S++){var j=this.i(y)>>>16,k=this.i(y)&65535,ie=w.i(S)>>>16,Se=w.i(S)&65535;f[2*y+2*S]+=k*Se,x(f,2*y+2*S),f[2*y+2*S+1]+=j*Se,x(f,2*y+2*S+1),f[2*y+2*S+1]+=k*ie,x(f,2*y+2*S+1),f[2*y+2*S+2]+=j*ie,x(f,2*y+2*S+2)}for(y=0;y<p;y++)f[y]=f[2*y+1]<<16|f[2*y];for(y=p;y<2*p;y++)f[y]=0;return new l(f,0)};function x(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function T(w,p){this.g=w,this.h=p}function _(w,p){if(E(p))throw Error("division by zero");if(E(w))return new T(P,P);if(I(w))return p=_(O(w),p),new T(O(p.g),O(p.h));if(I(p))return p=_(w,O(p)),new T(O(p.g),p.h);if(30<w.g.length){if(I(w)||I(p))throw Error("slowDivide_ only works with positive integers.");for(var f=C,y=p;0>=y.l(w);)f=F(f),y=F(y);var S=D(f,1),j=D(y,1);for(y=D(y,2),f=D(f,2);!E(y);){var k=j.add(y);0>=k.l(w)&&(S=S.add(f),j=k),y=D(y,1),f=D(f,1)}return p=v(w,S.j(p)),new T(S,p)}for(S=P;0<=w.l(p);){for(f=Math.max(1,Math.floor(w.m()/p.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),j=g(f),k=j.j(p);I(k)||0<k.l(w);)f-=y,j=g(f),k=j.j(p);E(j)&&(j=C),S=S.add(j),w=v(w,k)}return new T(S,w)}e.A=function(w){return _(this,w).h},e.and=function(w){for(var p=Math.max(this.g.length,w.g.length),f=[],y=0;y<p;y++)f[y]=this.i(y)&w.i(y);return new l(f,this.h&w.h)},e.or=function(w){for(var p=Math.max(this.g.length,w.g.length),f=[],y=0;y<p;y++)f[y]=this.i(y)|w.i(y);return new l(f,this.h|w.h)},e.xor=function(w){for(var p=Math.max(this.g.length,w.g.length),f=[],y=0;y<p;y++)f[y]=this.i(y)^w.i(y);return new l(f,this.h^w.h)};function F(w){for(var p=w.g.length+1,f=[],y=0;y<p;y++)f[y]=w.i(y)<<1|w.i(y-1)>>>31;return new l(f,w.h)}function D(w,p){var f=p>>5;p%=32;for(var y=w.g.length-f,S=[],j=0;j<y;j++)S[j]=0<p?w.i(j+f)>>>p|w.i(j+f+1)<<32-p:w.i(j+f);return new l(S,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=g,l.fromString=N,ff=l}).apply(typeof Od<"u"?Od:typeof self<"u"?self:typeof window<"u"?window:{});var ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,d){return i==Array.prototype||i==Object.prototype||(i[c]=d.value),i};function n(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ms=="object"&&ms];for(var c=0;c<i.length;++c){var d=i[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(i,c){if(c)e:{var d=r;i=i.split(".");for(var m=0;m<i.length-1;m++){var A=i[m];if(!(A in d))break e;d=d[A]}i=i[i.length-1],m=d[i],c=c(m),c!=m&&c!=null&&t(d,i,{configurable:!0,writable:!0,value:c})}}function a(i,c){i instanceof String&&(i+="");var d=0,m=!1,A={next:function(){if(!m&&d<i.length){var R=d++;return{value:c(R,i[R]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return a(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function g(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function N(i,c,d){return i.call.apply(i.bind,arguments)}function P(i,c,d){if(!i)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),i.apply(c,A)}}return function(){return i.apply(c,arguments)}}function C(i,c,d){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?N:P,C.apply(null,arguments)}function b(i,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),i.apply(this,m)}}function E(i,c){function d(){}d.prototype=c.prototype,i.aa=c.prototype,i.prototype=new d,i.prototype.constructor=i,i.Qb=function(m,A,R){for(var U=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)U[ne-2]=arguments[ne];return c.prototype[A].apply(m,U)}}function I(i){const c=i.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=i[m];return d}return[]}function O(i,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(h(m)){const A=i.length||0,R=m.length||0;i.length=A+R;for(let U=0;U<R;U++)i[A+U]=m[U]}else i.push(m)}}class v{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(i){return/^[\s\xa0]*$/.test(i)}function T(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function _(i){return _[" "](i),i}_[" "]=function(){};var F=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function D(i,c,d){for(const m in i)c.call(d,i[m],m,i)}function w(i,c){for(const d in i)c.call(void 0,i[d],d,i)}function p(i){const c={};for(const d in i)c[d]=i[d];return c}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,c){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)i[d]=m[d];for(let R=0;R<f.length;R++)d=f[R],Object.prototype.hasOwnProperty.call(m,d)&&(i[d]=m[d])}}function S(i){var c=1;i=i.split(":");const d=[];for(;0<c&&i.length;)d.push(i.shift()),c--;return i.length&&d.push(i.join(":")),d}function j(i){u.setTimeout(()=>{throw i},0)}function k(){var i=V;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class ie{constructor(){this.h=this.g=null}add(c,d){const m=Se.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Se=new v(()=>new Me,i=>i.reset());class Me{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let xe,z=!1,V=new ie,G=()=>{const i=u.Promise.resolve(void 0);xe=()=>{i.then(ee)}};var ee=()=>{for(var i;i=k();){try{i.h.call(i.g)}catch(d){j(d)}var c=Se;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}z=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var q=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const d=()=>{};u.addEventListener("test",d,c),u.removeEventListener("test",d,c)}catch{}return i}();function oe(i,c){if($.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var d=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(F){e:{try{_(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else d=="mouseover"?c=i.fromElement:d=="mouseout"&&(c=i.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:ye[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&oe.aa.h.call(this)}}E(oe,$);var ye={2:"touch",3:"pen",4:"mouse"};oe.prototype.h=function(){oe.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Xe="closure_listenable_"+(1e6*Math.random()|0),So=0;function Co(i,c,d,m,A){this.listener=i,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=A,this.key=++So,this.da=this.fa=!1}function Ht(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function _n(i){this.src=i,this.g={},this.h=0}_n.prototype.add=function(i,c,d,m,A){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var U=Cr(i,c,m,A);return-1<U?(c=i[U],d||(c.fa=!1)):(c=new Co(c,this.src,R,!!m,A),c.fa=d,i.push(c)),c};function Sr(i,c){var d=c.type;if(d in i.g){var m=i.g[d],A=Array.prototype.indexOf.call(m,c,void 0),R;(R=0<=A)&&Array.prototype.splice.call(m,A,1),R&&(Ht(c),i.g[d].length==0&&(delete i.g[d],i.h--))}}function Cr(i,c,d,m){for(var A=0;A<i.length;++A){var R=i[A];if(!R.da&&R.listener==c&&R.capture==!!d&&R.ha==m)return A}return-1}var Tr="closure_lm_"+(1e6*Math.random()|0),br={};function Di(i,c,d,m,A){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Di(i,c[R],d,m,A);return null}return d=Mi(d),i&&i[Xe]?i.K(c,d,g(m)?!!m.capture:!1,A):To(i,c,d,!1,m,A)}function To(i,c,d,m,A,R){if(!c)throw Error("Invalid event type");var U=g(A)?!!A.capture:!!A,ne=jr(i);if(ne||(i[Tr]=ne=new _n(i)),d=ne.add(c,d,m,U,R),d.proxy)return d;if(m=bo(),d.proxy=m,m.src=i,m.listener=d,i.addEventListener)q||(A=U),A===void 0&&(A=!1),i.addEventListener(c.toString(),m,A);else if(i.attachEvent)i.attachEvent(Oi(c.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function bo(){function i(d){return c.call(i.src,i.listener,d)}const c=jo;return i}function Li(i,c,d,m,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)Li(i,c[R],d,m,A);else m=g(m)?!!m.capture:!!m,d=Mi(d),i&&i[Xe]?(i=i.i,c=String(c).toString(),c in i.g&&(R=i.g[c],d=Cr(R,d,m,A),-1<d&&(Ht(R[d]),Array.prototype.splice.call(R,d,1),R.length==0&&(delete i.g[c],i.h--)))):i&&(i=jr(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Cr(c,d,m,A)),(d=-1<i?c[i]:null)&&Dn(d))}function Dn(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Xe])Sr(c.i,i);else{var d=i.type,m=i.proxy;c.removeEventListener?c.removeEventListener(d,m,i.capture):c.detachEvent?c.detachEvent(Oi(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=jr(c))?(Sr(d,i),d.h==0&&(d.src=null,c[Tr]=null)):Ht(i)}}}function Oi(i){return i in br?br[i]:br[i]="on"+i}function jo(i,c){if(i.da)i=!0;else{c=new oe(c,this);var d=i.listener,m=i.ha||i.src;i.fa&&Dn(i),i=d.call(m,c)}return i}function jr(i){return i=i[Tr],i instanceof _n?i:null}var fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mi(i){return typeof i=="function"?i:(i[fn]||(i[fn]=function(c){return i.handleEvent(c)}),i[fn])}function Ce(){H.call(this),this.i=new _n(this),this.M=this,this.F=null}E(Ce,H),Ce.prototype[Xe]=!0,Ce.prototype.removeEventListener=function(i,c,d,m){Li(this,i,c,d,m)};function je(i,c){var d,m=i.F;if(m)for(d=[];m;m=m.F)d.push(m);if(i=i.M,m=c.type||c,typeof c=="string")c=new $(c,i);else if(c instanceof $)c.target=c.target||i;else{var A=c;c=new $(m,i),y(c,A)}if(A=!0,d)for(var R=d.length-1;0<=R;R--){var U=c.g=d[R];A=Ln(U,m,!0,c)&&A}if(U=c.g=i,A=Ln(U,m,!0,c)&&A,A=Ln(U,m,!1,c)&&A,d)for(R=0;R<d.length;R++)U=c.g=d[R],A=Ln(U,m,!1,c)&&A}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var d=i.g[c],m=0;m<d.length;m++)Ht(d[m]);delete i.g[c],i.h--}}this.F=null},Ce.prototype.K=function(i,c,d,m){return this.i.add(String(i),c,!1,d,m)},Ce.prototype.L=function(i,c,d,m){return this.i.add(String(i),c,!0,d,m)};function Ln(i,c,d,m){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,R=0;R<c.length;++R){var U=c[R];if(U&&!U.da&&U.capture==d){var ne=U.listener,Ee=U.ha||U.src;U.fa&&Sr(i.i,U),A=ne.call(Ee,m)!==!1&&A}}return A&&!m.defaultPrevented}function W(i,c,d){if(typeof i=="function")d&&(i=C(i,d));else if(i&&typeof i.handleEvent=="function")i=C(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function J(i){i.g=W(()=>{i.g=null,i.i&&(i.i=!1,J(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Eo extends H{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mn(i){H.call(this),this.h=i,this.g={}}E(mn,H);var Fi=[];function Ui(i){D(i.g,function(c,d){this.g.hasOwnProperty(d)&&Dn(c)},i),i.g={}}mn.prototype.N=function(){mn.aa.N.call(this),Ui(this)},mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var No=u.JSON.stringify,xf=u.JSON.parse,wf=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Po(){}Po.prototype.h=null;function Sc(i){return i.h||(i.h=i.i())}function kf(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ao(){$.call(this,"d")}E(Ao,$);function Io(){$.call(this,"c")}E(Io,$);var On={},Cc=null;function Ro(){return Cc=Cc||new Ce}On.La="serverreachability";function Tc(i){$.call(this,On.La,i)}E(Tc,$);function Nr(i){const c=Ro();je(c,new Tc(c))}On.STAT_EVENT="statevent";function bc(i,c){$.call(this,On.STAT_EVENT,i),this.stat=c}E(bc,$);function Fe(i){const c=Ro();je(c,new bc(c,i))}On.Ma="timingevent";function jc(i,c){$.call(this,On.Ma,i),this.size=c}E(jc,$);function Pr(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function Sf(i,c,d,m,A,R){i.info(function(){if(i.g)if(R)for(var U="",ne=R.split("&"),Ee=0;Ee<ne.length;Ee++){var Q=ne[Ee].split("=");if(1<Q.length){var Ie=Q[0];Q=Q[1];var Re=Ie.split("_");U=2<=Re.length&&Re[1]=="type"?U+(Ie+"="+Q+"&"):U+(Ie+"=redacted&")}}else U=null;else U=R;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+c+`
`+d+`
`+U})}function Cf(i,c,d,m,A,R,U){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+c+`
`+d+`
`+R+" "+U})}function Mn(i,c,d,m){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+bf(i,d)+(m?" "+m:"")})}function Tf(i,c){i.info(function(){return"TIMEOUT: "+c})}Ar.prototype.info=function(){};function bf(i,c){if(!i.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(i=0;i<d.length;i++)if(Array.isArray(d[i])){var m=d[i];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var U=1;U<A.length;U++)A[U]=""}}}}return No(d)}catch{return c}}var _o={NO_ERROR:0,TIMEOUT:8},jf={},Do;function zi(){}E(zi,Po),zi.prototype.g=function(){return new XMLHttpRequest},zi.prototype.i=function(){return{}},Do=new zi;function Bt(i,c,d,m){this.j=i,this.i=c,this.l=d,this.R=m||1,this.U=new mn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ec}function Ec(){this.i=null,this.g="",this.h=!1}var Nc={},Lo={};function Oo(i,c,d){i.L=1,i.v=Vi(Nt(c)),i.m=d,i.P=!0,Pc(i,null)}function Pc(i,c){i.F=Date.now(),Hi(i),i.A=Nt(i.v);var d=i.A,m=i.R;Array.isArray(m)||(m=[String(m)]),Wc(d.i,"t",m),i.C=0,d=i.j.J,i.h=new Ec,i.g=au(i.j,d?c:null,!i.m),0<i.O&&(i.M=new Eo(C(i.Y,i,i.g),i.O)),c=i.U,d=i.g,m=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Fi[0]=A.toString()),A=Fi);for(var R=0;R<A.length;R++){var U=Di(d,A[R],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Nr(),Sf(i.i,i.u,i.A,i.l,i.R,i.m)}Bt.prototype.ca=function(i){i=i.target;const c=this.M;c&&Pt(i)==3?c.j():this.Y(i)},Bt.prototype.Y=function(i){try{if(i==this.g)e:{const Re=Pt(this.g);var c=this.g.Ba();const zn=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||Qc(this.g)))){this.J||Re!=4||c==7||(c==8||0>=zn?Nr(3):Nr(2)),Mo(this);var d=this.g.Z();this.X=d;t:if(Ac(this)){var m=Qc(this.g);i="";var A=m.length,R=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),Ir(this);var U="";break t}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,i+=this.h.i.decode(m[c],{stream:!(R&&c==A-1)});m.length=0,this.h.g+=i,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,Cf(this.i,this.u,this.A,this.l,this.R,Re,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,Ee=this.g;if((ne=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(ne)){var Q=ne;break t}}Q=null}if(d=Q)Mn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fo(this,d);else{this.o=!1,this.s=3,Fe(12),gn(this),Ir(this);break e}}if(this.P){d=!0;let ct;for(;!this.J&&this.C<U.length;)if(ct=Ef(this,U),ct==Lo){Re==4&&(this.s=4,Fe(14),d=!1),Mn(this.i,this.l,null,"[Incomplete Response]");break}else if(ct==Nc){this.s=4,Fe(15),Mn(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Mn(this.i,this.l,ct,null),Fo(this,ct);if(Ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||U.length!=0||this.h.h||(this.s=1,Fe(16),d=!1),this.o=this.o&&d,!d)Mn(this.i,this.l,U,"[Invalid Chunked Response]"),gn(this),Ir(this);else if(0<U.length&&!this.W){this.W=!0;var Ie=this.j;Ie.g==this&&Ie.ba&&!Ie.M&&(Ie.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Vo(Ie),Ie.M=!0,Fe(11))}}else Mn(this.i,this.l,U,null),Fo(this,U);Re==4&&gn(this),this.o&&!this.J&&(Re==4?ru(this.j,this):(this.o=!1,Hi(this)))}else Vf(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),gn(this),Ir(this)}}}catch{}finally{}};function Ac(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Ef(i,c){var d=i.C,m=c.indexOf(`
`,d);return m==-1?Lo:(d=Number(c.substring(d,m)),isNaN(d)?Nc:(m+=1,m+d>c.length?Lo:(c=c.slice(m,m+d),i.C=m+d,c)))}Bt.prototype.cancel=function(){this.J=!0,gn(this)};function Hi(i){i.S=Date.now()+i.I,Ic(i,i.I)}function Ic(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Pr(C(i.ba,i),c)}function Mo(i){i.B&&(u.clearTimeout(i.B),i.B=null)}Bt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Tf(this.i,this.A),this.L!=2&&(Nr(),Fe(17)),gn(this),this.s=2,Ir(this)):Ic(this,this.S-i)};function Ir(i){i.j.G==0||i.J||ru(i.j,i)}function gn(i){Mo(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,Ui(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Fo(i,c){try{var d=i.j;if(d.G!=0&&(d.g==i||Uo(d.h,i))){if(!i.K&&Uo(d.h,i)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<i.F)Qi(d),Xi(d);else break e;Wo(d),Fe(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Pr(C(d.Za,d),6e3));if(1>=Dc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else vn(d,11)}else if((i.K||d.g==i)&&Qi(d),!x(c))for(A=d.Da.g.parse(c),c=0;c<A.length;c++){let Q=A[c];if(d.T=Q[0],Q=Q[1],d.G==2)if(Q[0]=="c"){d.K=Q[1],d.ia=Q[2];const Ie=Q[3];Ie!=null&&(d.la=Ie,d.j.info("VER="+d.la));const Re=Q[4];Re!=null&&(d.Aa=Re,d.j.info("SVER="+d.Aa));const zn=Q[5];zn!=null&&typeof zn=="number"&&0<zn&&(m=1.5*zn,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const ct=i.g;if(ct){const qi=ct.g?ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var R=m.h;R.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(zo(R,R.h),R.h=null))}if(m.D){const $o=ct.g?ct.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(m.ya=$o,ae(m.I,m.D,$o))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-i.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var U=i;if(m.qa=ou(m,m.J?m.ia:null,m.W),U.K){Lc(m.h,U);var ne=U,Ee=m.L;Ee&&(ne.I=Ee),ne.B&&(Mo(ne),Hi(ne)),m.g=U}else tu(m);0<d.i.length&&Ki(d)}else Q[0]!="stop"&&Q[0]!="close"||vn(d,7);else d.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?vn(d,7):Bo(d):Q[0]!="noop"&&d.l&&d.l.ta(Q),d.v=0)}}Nr(4)}catch{}}var Nf=class{constructor(i,c){this.g=i,this.map=c}};function Rc(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function _c(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Dc(i){return i.h?1:i.g?i.g.size:0}function Uo(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function zo(i,c){i.g?i.g.add(c):i.h=c}function Lc(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Rc.prototype.cancel=function(){if(this.i=Oc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Oc(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const d of i.g.values())c=c.concat(d.D);return c}return I(i.i)}function Pf(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],d=i.length,m=0;m<d;m++)c.push(i[m]);return c}c=[],d=0;for(m in i)c[d++]=i[m];return c}function Af(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var d=0;d<i;d++)c.push(d);return c}c=[],d=0;for(const m in i)c[d++]=m;return c}}}function Mc(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var d=Af(i),m=Pf(i),A=m.length,R=0;R<A;R++)c.call(void 0,m[R],d&&d[R],i)}var Fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function If(i,c){if(i){i=i.split("&");for(var d=0;d<i.length;d++){var m=i[d].indexOf("="),A=null;if(0<=m){var R=i[d].substring(0,m);A=i[d].substring(m+1)}else R=i[d];c(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function yn(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof yn){this.h=i.h,Bi(this,i.j),this.o=i.o,this.g=i.g,Wi(this,i.s),this.l=i.l;var c=i.i,d=new Dr;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Uc(this,d),this.m=i.m}else i&&(c=String(i).match(Fc))?(this.h=!1,Bi(this,c[1]||"",!0),this.o=Rr(c[2]||""),this.g=Rr(c[3]||"",!0),Wi(this,c[4]),this.l=Rr(c[5]||"",!0),Uc(this,c[6]||"",!0),this.m=Rr(c[7]||"")):(this.h=!1,this.i=new Dr(null,this.h))}yn.prototype.toString=function(){var i=[],c=this.j;c&&i.push(_r(c,zc,!0),":");var d=this.g;return(d||c=="file")&&(i.push("//"),(c=this.o)&&i.push(_r(c,zc,!0),"@"),i.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&i.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&i.push("/"),i.push(_r(d,d.charAt(0)=="/"?Df:_f,!0))),(d=this.i.toString())&&i.push("?",d),(d=this.m)&&i.push("#",_r(d,Of)),i.join("")};function Nt(i){return new yn(i)}function Bi(i,c,d){i.j=d?Rr(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Wi(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function Uc(i,c,d){c instanceof Dr?(i.i=c,Mf(i.i,i.h)):(d||(c=_r(c,Lf)),i.i=new Dr(c,i.h))}function ae(i,c,d){i.i.set(c,d)}function Vi(i){return ae(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Rr(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function _r(i,c,d){return typeof i=="string"?(i=encodeURI(i).replace(c,Rf),d&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Rf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var zc=/[#\/\?@]/g,_f=/[#\?:]/g,Df=/[#\?]/g,Lf=/[#\?@]/g,Of=/#/g;function Dr(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Wt(i){i.g||(i.g=new Map,i.h=0,i.i&&If(i.i,function(c,d){i.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}e=Dr.prototype,e.add=function(i,c){Wt(this),this.i=null,i=Fn(this,i);var d=this.g.get(i);return d||this.g.set(i,d=[]),d.push(c),this.h+=1,this};function Hc(i,c){Wt(i),c=Fn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Bc(i,c){return Wt(i),c=Fn(i,c),i.g.has(c)}e.forEach=function(i,c){Wt(this),this.g.forEach(function(d,m){d.forEach(function(A){i.call(c,A,m,this)},this)},this)},e.na=function(){Wt(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const A=i[m];for(let R=0;R<A.length;R++)d.push(c[m])}return d},e.V=function(i){Wt(this);let c=[];if(typeof i=="string")Bc(this,i)&&(c=c.concat(this.g.get(Fn(this,i))));else{i=Array.from(this.g.values());for(let d=0;d<i.length;d++)c=c.concat(i[d])}return c},e.set=function(i,c){return Wt(this),this.i=null,i=Fn(this,i),Bc(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},e.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function Wc(i,c,d){Hc(i,c),0<d.length&&(i.i=null,i.g.set(Fn(i,c),I(d)),i.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const R=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var A=R;U[m]!==""&&(A+="="+encodeURIComponent(String(U[m]))),i.push(A)}}return this.i=i.join("&")};function Fn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Mf(i,c){c&&!i.j&&(Wt(i),i.i=null,i.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(Hc(this,m),Wc(this,A,d))},i)),i.j=c}function Ff(i,c){const d=new Ar;if(u.Image){const m=new Image;m.onload=b(Vt,d,"TestLoadImage: loaded",!0,c,m),m.onerror=b(Vt,d,"TestLoadImage: error",!1,c,m),m.onabort=b(Vt,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=b(Vt,d,"TestLoadImage: timeout",!1,c,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else c(!1)}function Uf(i,c){const d=new Ar,m=new AbortController,A=setTimeout(()=>{m.abort(),Vt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:m.signal}).then(R=>{clearTimeout(A),R.ok?Vt(d,"TestPingServer: ok",!0,c):Vt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),Vt(d,"TestPingServer: error",!1,c)})}function Vt(i,c,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function zf(){this.g=new wf}function Hf(i,c,d){const m=d||"";try{Mc(i,function(A,R){let U=A;g(A)&&(U=No(A)),c.push(m+R+"="+encodeURIComponent(U))})}catch(A){throw c.push(m+"type="+encodeURIComponent("_badmap")),A}}function $i(i){this.l=i.Ub||null,this.j=i.eb||!1}E($i,Po),$i.prototype.g=function(){return new Gi(this.l,this.j)},$i.prototype.i=function(i){return function(){return i}}({});function Gi(i,c){Ce.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Gi,Ce),e=Gi.prototype,e.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,Or(this)},e.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=0},e.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vc(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vc(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}e.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Lr(this):Or(this),this.readyState==3&&Vc(this)}},e.Ra=function(i){this.g&&(this.response=this.responseText=i,Lr(this))},e.Qa=function(i){this.g&&(this.response=i,Lr(this))},e.ga=function(){this.g&&Lr(this)};function Lr(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Or(i)}e.setRequestHeader=function(i,c){this.u.append(i,c)},e.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,i.push(d[0]+": "+d[1]),d=c.next();return i.join(`\r
`)};function Or(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function $c(i){let c="";return D(i,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Ho(i,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=$c(d),typeof i=="string"?d!=null&&encodeURIComponent(String(d)):ae(i,c,d))}function me(i){Ce.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(me,Ce);var Bf=/^https?$/i,Wf=["POST","PUT"];e=me.prototype,e.Ha=function(i){this.J=i},e.ea=function(i,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Do.g(),this.v=this.o?Sc(this.o):Sc(Do),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){Gc(this,R);return}if(i=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const R of m.keys())d.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(R=>R.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Wf,c,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,U]of d)this.g.setRequestHeader(R,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kc(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Gc(this,R)}};function Gc(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,Yc(i),Yi(i)}function Yc(i){i.A||(i.A=!0,je(i,"complete"),je(i,"error"))}e.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,je(this,"complete"),je(this,"abort"),Yi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yi(this,!0)),me.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Xc(this):this.bb())},e.bb=function(){Xc(this)};function Xc(i){if(i.h&&typeof l<"u"&&(!i.v[1]||Pt(i)!=4||i.Z()!=2)){if(i.u&&Pt(i)==4)W(i.Ea,0,i);else if(je(i,"readystatechange"),Pt(i)==4){i.h=!1;try{const U=i.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=U===0){var A=String(i.D).match(Fc)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!Bf.test(A?A.toLowerCase():"")}d=m}if(d)je(i,"complete"),je(i,"success");else{i.m=6;try{var R=2<Pt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Yc(i)}}finally{Yi(i)}}}}function Yi(i,c){if(i.g){Kc(i);const d=i.g,m=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||je(i,"ready");try{d.onreadystatechange=m}catch{}}}function Kc(i){i.I&&(u.clearTimeout(i.I),i.I=null)}e.isActive=function(){return!!this.g};function Pt(i){return i.g?i.g.readyState:0}e.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),xf(c)}};function Qc(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Vf(i){const c={};i=(i.g&&2<=Pt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<i.length;m++){if(x(i[m]))continue;var d=S(i[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const R=c[A]||[];c[A]=R,R.push(d)}w(c,function(m){return m.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mr(i,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[i]||c}function qc(i){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mr("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mr("baseRetryDelayMs",5e3,i),this.cb=Mr("retryDelaySeedMs",1e4,i),this.Wa=Mr("forwardChannelMaxRetries",2,i),this.wa=Mr("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Rc(i&&i.concurrentRequestLimit),this.Da=new zf,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=qc.prototype,e.la=8,e.G=1,e.connect=function(i,c,d,m){Fe(0),this.W=i,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ou(this,null,this.W),Ki(this)};function Bo(i){if(Jc(i),i.G==3){var c=i.U++,d=Nt(i.I);if(ae(d,"SID",i.K),ae(d,"RID",c),ae(d,"TYPE","terminate"),Fr(i,d),c=new Bt(i,i.j,c),c.L=2,c.v=Vi(Nt(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=c.v,d=!0),d||(c.g=au(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Hi(c)}su(i)}function Xi(i){i.g&&(Vo(i),i.g.cancel(),i.g=null)}function Jc(i){Xi(i),i.u&&(u.clearTimeout(i.u),i.u=null),Qi(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Ki(i){if(!_c(i.h)&&!i.s){i.s=!0;var c=i.Ga;xe||G(),z||(xe(),z=!0),V.add(c,i),i.B=0}}function $f(i,c){return Dc(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Pr(C(i.Ga,i,c),iu(i,i.B)),i.B++,!0)}e.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const A=new Bt(this,this.j,i);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=eu(this,A,c),d=Nt(this.I),ae(d,"RID",i),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),Fr(this,d),R&&(this.O?c="headers="+encodeURIComponent(String($c(R)))+"&"+c:this.m&&Ho(d,this.m,R)),zo(this.h,A),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",c),ae(d,"SID","null"),A.T=!0,Oo(A,d,null)):Oo(A,d,c),this.G=2}}else this.G==3&&(i?Zc(this,i):this.i.length==0||_c(this.h)||Zc(this))};function Zc(i,c){var d;c?d=c.l:d=i.U++;const m=Nt(i.I);ae(m,"SID",i.K),ae(m,"RID",d),ae(m,"AID",i.T),Fr(i,m),i.m&&i.o&&Ho(m,i.m,i.o),d=new Bt(i,i.j,d,i.B+1),i.m===null&&(d.H=i.o),c&&(i.i=c.D.concat(i.i)),c=eu(i,d,1e3),d.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),zo(i.h,d),Oo(d,m,c)}function Fr(i,c){i.H&&D(i.H,function(d,m){ae(c,m,d)}),i.l&&Mc({},function(d,m){ae(c,m,d)})}function eu(i,c,d){d=Math.min(i.i.length,d);var m=i.l?C(i.l.Na,i.l,i):null;e:{var A=i.i;let R=-1;for(;;){const U=["count="+d];R==-1?0<d?(R=A[0].g,U.push("ofs="+R)):R=0:U.push("ofs="+R);let ne=!0;for(let Ee=0;Ee<d;Ee++){let Q=A[Ee].g;const Ie=A[Ee].map;if(Q-=R,0>Q)R=Math.max(0,A[Ee].g-100),ne=!1;else try{Hf(Ie,U,"req"+Q+"_")}catch{m&&m(Ie)}}if(ne){m=U.join("&");break e}}}return i=i.i.splice(0,d),c.D=i,m}function tu(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;xe||G(),z||(xe(),z=!0),V.add(c,i),i.v=0}}function Wo(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Pr(C(i.Fa,i),iu(i,i.v)),i.v++,!0)}e.Fa=function(){if(this.u=null,nu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Pr(C(this.ab,this),i)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),Xi(this),nu(this))};function Vo(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function nu(i){i.g=new Bt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Nt(i.qa);ae(c,"RID","rpc"),ae(c,"SID",i.K),ae(c,"AID",i.T),ae(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&ae(c,"TO",i.ja),ae(c,"TYPE","xmlhttp"),Fr(i,c),i.m&&i.o&&Ho(c,i.m,i.o),i.L&&(i.g.I=i.L);var d=i.g;i=i.ia,d.L=1,d.v=Vi(Nt(c)),d.m=null,d.P=!0,Pc(d,i)}e.Za=function(){this.C!=null&&(this.C=null,Xi(this),Wo(this),Fe(19))};function Qi(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function ru(i,c){var d=null;if(i.g==c){Qi(i),Vo(i),i.g=null;var m=2}else if(Uo(i.h,c))d=c.D,Lc(i.h,c),m=1;else return;if(i.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var A=i.B;m=Ro(),je(m,new jc(m,d)),Ki(i)}else tu(i);else if(A=c.s,A==3||A==0&&0<c.X||!(m==1&&$f(i,c)||m==2&&Wo(i)))switch(d&&0<d.length&&(c=i.h,c.i=c.i.concat(d)),A){case 1:vn(i,5);break;case 4:vn(i,10);break;case 3:vn(i,6);break;default:vn(i,2)}}}function iu(i,c){let d=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(d*=2),d*c}function vn(i,c){if(i.j.info("Error code "+c),c==2){var d=C(i.fb,i),m=i.Xa;const A=!m;m=new yn(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Bi(m,"https"),Vi(m),A?Ff(m.toString(),d):Uf(m.toString(),d)}else Fe(2);i.G=0,i.l&&i.l.sa(c),su(i),Jc(i)}e.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function su(i){if(i.G=0,i.ka=[],i.l){const c=Oc(i.h);(c.length!=0||i.i.length!=0)&&(O(i.ka,c),O(i.ka,i.i),i.h.i.length=0,I(i.i),i.i.length=0),i.l.ra()}}function ou(i,c,d){var m=d instanceof yn?Nt(d):new yn(d);if(m.g!="")c&&(m.g=c+"."+m.g),Wi(m,m.s);else{var A=u.location;m=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var R=new yn(null);m&&Bi(R,m),c&&(R.g=c),A&&Wi(R,A),d&&(R.l=d),m=R}return d=i.D,c=i.ya,d&&c&&ae(m,d,c),ae(m,"VER",i.la),Fr(i,m),m}function au(i,c,d){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new me(new $i({eb:d})):new me(i.pa),c.Ha(i.J),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function lu(){}e=lu.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function nt(i,c){Ce.call(this),this.g=new qc(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!x(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!x(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Un(this)}E(nt,Ce),nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},nt.prototype.close=function(){Bo(this.g)},nt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var d={};d.__data__=i,i=d}else this.u&&(d={},d.__data__=No(i),i=d);c.i.push(new Nf(c.Ya++,i)),c.G==3&&Ki(c)},nt.prototype.N=function(){this.g.l=null,delete this.j,Bo(this.g),delete this.g,nt.aa.N.call(this)};function cu(i){Ao.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const d in c){i=d;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}E(cu,Ao);function uu(){Io.call(this),this.status=1}E(uu,Io);function Un(i){this.g=i}E(Un,lu),Un.prototype.ua=function(){je(this.g,"a")},Un.prototype.ta=function(i){je(this.g,new cu(i))},Un.prototype.sa=function(i){je(this.g,new uu)},Un.prototype.ra=function(){je(this.g,"b")},nt.prototype.send=nt.prototype.o,nt.prototype.open=nt.prototype.m,nt.prototype.close=nt.prototype.close,_o.NO_ERROR=0,_o.TIMEOUT=8,_o.HTTP_ERROR=6,jf.COMPLETE="complete",kf.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha}).apply(typeof ms<"u"?ms:typeof self<"u"?self:typeof window<"u"?window:{});const Md="@firebase/firestore";/**
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
 */class Qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
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
 */let ko="10.14.0";/**
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
 */const no=new cf("@firebase/firestore");function vt(e,...t){if(no.logLevel<=re.DEBUG){const n=t.map(gf);no.debug(`Firestore (${ko}): ${e}`,...n)}}function mf(e,...t){if(no.logLevel<=re.ERROR){const n=t.map(gf);no.error(`Firestore (${ko}): ${e}`,...n)}}function gf(e){if(typeof e=="string")return e;try{/**
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
 */function yf(e="Unexpected state"){const t=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+e;throw mf(t),new Error(t)}function ai(e,t){e||yf()}/**
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
 */const mt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class gt extends kr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class li{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class cv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class uv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class dv{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){ai(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let a=new li;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new li,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const h=a;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{vt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(vt("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new li)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(vt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ai(typeof r.accessToken=="string"),new cv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ai(t===null||typeof t=="string"),new Qe(t)}}class hv{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pv{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new hv(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mv{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){ai(this.o===void 0);const r=a=>{a.error!=null&&vt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,vt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>r(a))};const s=a=>{vt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):vt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ai(typeof n.token=="string"),this.R=n.token,new fv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function gv(e){return e.name==="IndexedDbTransactionError"}class ro{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ro&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Fd,X;(X=Fd||(Fd={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ff([4294967295,4294967295],0);function Ca(){return typeof document<"u"?document:null}/**
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
 */class yv{constructor(t,n,r=1e3,s=1.5,a=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=s,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&vt("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class kc{constructor(t,n,r,s,a){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,a){const l=Date.now()+r,u=new kc(t,n,l,s,a);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new gt(mt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ud,zd;(zd=Ud||(Ud={})).ea="default",zd.Cache="cache";/**
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
 */function vv(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Hd=new Map;function xv(e,t,n,r){if(t===!0&&r===!0)throw new gt(mt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class Bd{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new gt(mt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new gt(mt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vv((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new gt(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new gt(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new gt(mt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wv{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new gt(mt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new gt(mt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bd(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uv;switch(r.type){case"firstParty":return new pv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new gt(mt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hd.get(n);r&&(vt("ComponentProvider","Removing Datastore"),Hd.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class Wd{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new yv(this,"async_queue_retry"),this.Vu=()=>{const r=Ca();r&&vt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Ca();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Ca();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new li;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!gv(t))throw t;vt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw mf("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const s=kc.createAndSchedule(this,t,n,r,a=>this.yu(a));return this.Tu.push(s),s}fu(){this.Eu&&yf()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class kv extends wv{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=new Wd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wd(t),this._firestoreClient=void 0,await t}}}(function(t,n=!0){(function(s){ko=s})(q0),to(new eo("firestore",(r,{instanceIdentifier:s,options:a})=>{const l=r.getProvider("app").getImmediate(),u=new kv(new dv(r.getProvider("auth-internal")),new mv(r.getProvider("app-check-internal")),function(g,N){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new gt(mt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(g.options.projectId,N)}(l,s),l);return a=Object.assign({useFetchStreams:n},a),u._setSettings(a),u},"PUBLIC").setMultipleInstances(!0)),lr(Md,"4.7.3",t),lr(Md,"4.7.3","esm2017")})();const Sv=async e=>null,Cv=(e,t)=>(t([]),()=>{}),Tv=({onLogin:e,onTeacherMode:t})=>{const[n,r]=L.useState("student"),[s,a]=L.useState(""),[l,u]=L.useState(""),[h,g]=L.useState(""),[N,P]=L.useState(""),[C,b]=L.useState(""),[E,I]=L.useState(!1),[O,v]=L.useState("");return o.jsx("div",{className:"login-container",children:o.jsxs("div",{className:"login-card",children:[o.jsxs("div",{className:"login-header",children:[o.jsx("h1",{children:"CyberEd Range"}),o.jsx("p",{children:"Setup Required"})]}),o.jsxs("div",{className:"setup-warning",children:[o.jsx("h3",{children:"Firebase Configuration Needed"}),o.jsx("p",{children:"To enable multi-student mode, please configure Firebase:"}),o.jsxs("ol",{children:[o.jsxs("li",{children:["Create a Firebase project at ",o.jsx("a",{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer",children:"console.firebase.google.com"})]}),o.jsx("li",{children:"Enable Firestore Database"}),o.jsxs("li",{children:["Copy your config to ",o.jsx("code",{children:"src/config/firebase.js"})]}),o.jsxs("li",{children:["Or create a ",o.jsx("code",{children:".env"})," file with VITE_FIREBASE_* variables"]})]}),o.jsx("button",{className:"btn-primary",onClick:()=>e({id:"demo",name:"Demo User",classCode:"DEMO"}),children:"Continue in Demo Mode"})]})]})})},bv=({classCode:e,onBack:t})=>{var x,T,_,F;const[n,r]=L.useState([]),[s,a]=L.useState(null),[l,u]=L.useState(!0),[h,g]=L.useState(null),[N,P]=L.useState("points"),C=Object.values(ji).flat().length,b=yt.length;L.useEffect(()=>{(async()=>{const p=await Sv();a(p)})();const w=Cv(e,p=>{r(p),u(!1)});return()=>w()},[e]);const E=[...n].sort((D,w)=>{var p,f;switch(N){case"points":return w.totalPoints-D.totalPoints;case"name":return D.name.localeCompare(w.name);case"activity":const y=((p=D.lastActivity)==null?void 0:p.getTime())||0;return(((f=w.lastActivity)==null?void 0:f.getTime())||0)-y;default:return 0}}),I=D=>{if(!D)return{status:"never",label:"Never active",color:"#666"};const p=new Date-D,f=Math.floor(p/6e4);if(f<5)return{status:"active",label:"Active now",color:"#4caf50"};if(f<30)return{status:"recent",label:`${f}m ago`,color:"#ff9800"};if(f<60)return{status:"idle",label:`${f}m ago`,color:"#f44336"};const y=Math.floor(f/60);return y<24?{status:"idle",label:`${y}h ago`,color:"#f44336"}:{status:"inactive",label:`${Math.floor(y/24)}d ago`,color:"#666"}},O=(D,w)=>w>0?Math.round(D/w*100):0,v={totalStudents:n.length,activeStudents:n.filter(D=>{const w=I(D.lastActivity);return w.status==="active"||w.status==="recent"}).length,avgPoints:n.length>0?Math.round(n.reduce((D,w)=>D+w.totalPoints,0)/n.length):0,avgChallenges:n.length>0?Math.round(n.reduce((D,w)=>{var p;return D+(((p=w.completedChallenges)==null?void 0:p.length)||0)},0)/n.length):0};return l?o.jsx("div",{className:"teacher-dashboard",children:o.jsxs("div",{className:"loading-screen",children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("p",{children:"Loading class data..."})]})}):o.jsxs("div",{className:"teacher-dashboard",children:[o.jsxs("header",{className:"td-header",children:[o.jsx("button",{className:"back-btn",onClick:t,children:"← Exit Dashboard"}),o.jsxs("div",{className:"td-title",children:[o.jsx("h1",{children:(s==null?void 0:s.name)||"Class Dashboard"}),o.jsxs("div",{className:"class-code-badge",children:["Class Code: ",o.jsx("strong",{children:e})]})]})]}),o.jsxs("div",{className:"td-stats",children:[o.jsxs("div",{className:"td-stat-card",children:[o.jsx("span",{className:"td-stat-value",children:v.totalStudents}),o.jsx("span",{className:"td-stat-label",children:"Total Students"})]}),o.jsxs("div",{className:"td-stat-card active",children:[o.jsx("span",{className:"td-stat-value",children:v.activeStudents}),o.jsx("span",{className:"td-stat-label",children:"Currently Active"})]}),o.jsxs("div",{className:"td-stat-card",children:[o.jsx("span",{className:"td-stat-value",children:v.avgPoints}),o.jsx("span",{className:"td-stat-label",children:"Avg Points"})]}),o.jsxs("div",{className:"td-stat-card",children:[o.jsx("span",{className:"td-stat-value",children:v.avgChallenges}),o.jsx("span",{className:"td-stat-label",children:"Avg Challenges Done"})]})]}),o.jsxs("div",{className:"td-controls",children:[o.jsxs("div",{className:"sort-controls",children:[o.jsx("label",{children:"Sort by:"}),o.jsxs("select",{value:N,onChange:D=>P(D.target.value),children:[o.jsx("option",{value:"points",children:"Points (High to Low)"}),o.jsx("option",{value:"name",children:"Name (A-Z)"}),o.jsx("option",{value:"activity",children:"Recent Activity"})]})]}),o.jsx("button",{className:"btn-refresh",onClick:()=>window.location.reload(),children:"Refresh"})]}),o.jsxs("div",{className:"td-content",children:[o.jsxs("div",{className:"student-list-panel",children:[o.jsxs("h2",{children:["Students (",n.length,")"]}),n.length===0?o.jsxs("div",{className:"no-students",children:[o.jsx("p",{children:"No students have joined yet."}),o.jsxs("p",{children:["Share the class code: ",o.jsx("strong",{children:e})]})]}):o.jsx("div",{className:"student-list",children:E.map((D,w)=>{var f,y,S,j;const p=I(D.lastActivity);return O(((f=D.completedChallenges)==null?void 0:f.length)||0,C),O(((y=D.completedScenarios)==null?void 0:y.length)||0,b),o.jsxs("div",{className:`student-card ${(h==null?void 0:h.id)===D.id?"selected":""}`,onClick:()=>g(D),children:[o.jsxs("div",{className:"student-rank",children:["#",w+1]}),o.jsxs("div",{className:"student-info",children:[o.jsx("div",{className:"student-name",children:D.name}),o.jsxs("div",{className:"student-activity",style:{color:p.color},children:[o.jsx("span",{className:`activity-dot ${p.status}`}),p.label]})]}),o.jsxs("div",{className:"student-progress",children:[o.jsxs("div",{className:"progress-item",children:[o.jsx("span",{className:"progress-value",children:D.totalPoints}),o.jsx("span",{className:"progress-label",children:"pts"})]}),o.jsxs("div",{className:"progress-item",children:[o.jsx("span",{className:"progress-value",children:((S=D.completedChallenges)==null?void 0:S.length)||0}),o.jsx("span",{className:"progress-label",children:"challenges"})]}),o.jsxs("div",{className:"progress-item",children:[o.jsx("span",{className:"progress-value",children:((j=D.completedScenarios)==null?void 0:j.length)||0}),o.jsx("span",{className:"progress-label",children:"scenarios"})]})]})]},D.id)})})]}),o.jsx("div",{className:"student-detail-panel",children:h?o.jsxs(o.Fragment,{children:[o.jsx("h2",{children:h.name}),o.jsxs("div",{className:"detail-section",children:[o.jsx("h3",{children:"Overall Progress"}),o.jsx("div",{className:"detail-stats",children:o.jsxs("div",{className:"detail-stat",children:[o.jsx("span",{className:"detail-stat-value",children:h.totalPoints}),o.jsx("span",{className:"detail-stat-label",children:"Total Points"})]})})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("h3",{children:["Challenges (",((x=h.completedChallenges)==null?void 0:x.length)||0,"/",C,")"]}),o.jsx("div",{className:"progress-bar-container",children:o.jsx("div",{className:"progress-bar-fill",style:{width:`${O(((T=h.completedChallenges)==null?void 0:T.length)||0,C)}%`}})}),o.jsx("div",{className:"completed-list",children:Object.entries(ji).map(([D,w])=>{const p=w.filter(f=>{var y;return(y=h.completedChallenges)==null?void 0:y.includes(f.id)});return p.length===0?null:o.jsxs("div",{className:"category-progress",children:[o.jsx("h4",{children:D}),o.jsx("ul",{children:p.map(f=>o.jsxs("li",{children:[f.title," (+",f.points,"pts)"]},f.id))})]},D)})})]}),o.jsxs("div",{className:"detail-section",children:[o.jsxs("h3",{children:["Network Monitor (",((_=h.completedScenarios)==null?void 0:_.length)||0,"/",b,")"]}),o.jsx("div",{className:"progress-bar-container",children:o.jsx("div",{className:"progress-bar-fill scenario",style:{width:`${O(((F=h.completedScenarios)==null?void 0:F.length)||0,b)}%`}})}),o.jsx("div",{className:"completed-list",children:o.jsx("ul",{children:yt.filter(D=>{var w;return(w=h.completedScenarios)==null?void 0:w.includes(D.id)}).map(D=>o.jsxs("li",{children:[D.name," (+",D.points,"pts)"]},D.id))})})]})]}):o.jsx("div",{className:"no-selection",children:o.jsx("p",{children:"Select a student to view details"})})})]})]})},vf={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
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
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function jv(e){for(const t of Object.values(vf))for(const n of t.days)for(const r of n.exercises)if(r.id===e)return r;return null}const Ev={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},Nv={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]};function Pv({weekKey:e,onSelectExercise:t,onBack:n,completedExercises:r}){const s=vf[e],a=e.replace("week",""),l=Nv[e]||[],u=h=>`difficulty difficulty-${h.toLowerCase()}`;return o.jsxs("div",{className:"week-view",children:[o.jsx("button",{className:"back-button",onClick:n,children:"← Back to Dashboard"}),o.jsxs("div",{className:"week-header-large",children:[o.jsxs("h1",{children:["Week ",a,": ",s.title]}),o.jsx("p",{className:"big-idea",children:s.bigIdea})]}),o.jsxs("div",{className:"learning-objectives",children:[o.jsx("h3",{children:"Learning Objectives"}),o.jsx("ul",{children:l.map((h,g)=>o.jsx("li",{children:h},g))})]}),o.jsx("div",{className:"days-list",children:s.days.map(h=>o.jsxs("div",{className:"day-section",children:[o.jsxs("div",{className:"day-header",children:[o.jsxs("h2",{children:["Day ",h.day,": ",h.title]}),o.jsx("p",{className:"day-objective",children:h.objective})]}),o.jsx("div",{className:"exercises-grid",children:h.exercises.map(g=>{const N=r.includes(g.id);return o.jsxs("div",{className:`exercise-card ${N?"completed":""} ${g.isProject?"project-card":""}`,onClick:()=>t(g.id),children:[o.jsxs("div",{className:"exercise-header",children:[o.jsx("span",{className:u(g.difficulty),children:g.difficulty}),o.jsxs("span",{className:"points",children:[g.points," pts"]})]}),o.jsxs("h3",{className:"exercise-title",children:[g.isProject&&"🎮 ",g.isCapstone&&"🏆 ",g.title]}),o.jsx("p",{className:"exercise-description",children:g.description}),N&&o.jsx("div",{className:"completed-badge",children:"✓ Completed"})]},g.id)})}),h.exitTicket&&o.jsxs("div",{className:"exit-ticket",children:[o.jsx("strong",{children:"Exit Ticket:"})," ",h.exitTicket]})]},h.day))})]})}function Av({exerciseId:e,onBack:t,onComplete:n,isCompleted:r}){const s=jv(e),[a,l]=L.useState((s==null?void 0:s.starterCode)||""),[u,h]=L.useState([]),[g,N]=L.useState(!1),[P,C]=L.useState(!1),[b,E]=L.useState(null),I=L.useRef(null),O=L.useRef(null);if(L.useEffect(()=>{s&&(l(s.starterCode),h([]),N(!1))},[e]),L.useEffect(()=>()=>{O.current&&(O.current.remove(),O.current=null)},[]),!s)return o.jsxs("div",{className:"exercise-detail",children:[o.jsx("button",{className:"back-button",onClick:t,children:"← Back"}),o.jsx("p",{children:"Exercise not found"})]});const v=()=>{O.current&&(O.current.remove(),O.current=null),I.current&&(I.current.innerHTML=""),C(!0);try{const p=f=>{new Function("p",`
          with (p) {
            ${a}
          }
        `)(f)};O.current=new window.p5(p,I.current)}catch(p){console.error("Code error:",p),I.current&&(I.current.innerHTML=`<div class="error-message">Error: ${p.message}</div>`)}},x=()=>{O.current&&(O.current.remove(),O.current=null),C(!1),I.current&&(I.current.innerHTML='<div class="canvas-placeholder">Click "Run Code" to see your sketch</div>')},T=()=>{l(s.starterCode),x()},_=p=>{u.includes(p)||h([...u,p])},F=()=>{N(!0),l(s.solutionCode)},D=()=>{r||n(s.id,s.points)},w=p=>`difficulty difficulty-${p.toLowerCase()}`;return o.jsxs("div",{className:"exercise-detail",children:[o.jsx("button",{className:"back-button",onClick:t,children:"← Back to Week"}),o.jsxs("div",{className:"exercise-header-detail",children:[o.jsxs("div",{className:"exercise-meta",children:[o.jsx("span",{className:w(s.difficulty),children:s.difficulty}),o.jsxs("span",{className:"points",children:[s.points," pts"]}),s.isProject&&o.jsx("span",{className:"project-badge",children:"Mini-Project"}),s.isCapstone&&o.jsx("span",{className:"capstone-badge",children:"Capstone"})]}),o.jsx("h1",{children:s.title}),o.jsx("p",{className:"exercise-description-large",children:s.description})]}),s.vocabularyTerms&&s.vocabularyTerms.length>0&&o.jsxs("div",{className:"vocab-tags",children:[o.jsx("span",{className:"vocab-label",children:"Key Terms:"}),s.vocabularyTerms.map(p=>{const f=Ev[p];return f?o.jsx("button",{className:"vocab-tag",onClick:()=>E(f),children:f.term},p):null})]}),b&&o.jsx("div",{className:"vocab-popup",onClick:()=>E(null),children:o.jsxs("div",{className:"vocab-popup-content",onClick:p=>p.stopPropagation(),children:[o.jsx("h3",{children:b.term}),o.jsx("p",{children:b.definition}),b.example&&o.jsx("code",{className:"vocab-example",children:b.example}),o.jsx("button",{onClick:()=>E(null),children:"Close"})]})}),o.jsxs("div",{className:"prompt-box",children:[o.jsx("h3",{children:"Challenge"}),o.jsx("pre",{children:s.prompt})]}),o.jsxs("div",{className:"editor-container",children:[o.jsxs("div",{className:"code-section",children:[o.jsxs("div",{className:"code-header",children:[o.jsx("h3",{children:"Your Code"}),o.jsxs("div",{className:"code-actions",children:[o.jsx("button",{onClick:v,className:"run-btn",children:"▶ Run"}),o.jsx("button",{onClick:x,className:"stop-btn",children:"⬛ Stop"}),o.jsx("button",{onClick:T,className:"reset-btn",children:"↺ Reset"})]})]}),o.jsx("textarea",{className:"code-editor",value:a,onChange:p=>l(p.target.value),spellCheck:!1})]}),o.jsxs("div",{className:"canvas-section",children:[o.jsx("h3",{children:"Output"}),o.jsx("div",{ref:I,className:"canvas-container",children:o.jsx("div",{className:"canvas-placeholder",children:'Click "Run Code" to see your sketch'})})]})]}),o.jsxs("div",{className:"hints-section",children:[o.jsx("h3",{children:"Hints"}),o.jsx("div",{className:"hints-list",children:s.hints.map((p,f)=>o.jsx("div",{className:"hint-item",children:u.includes(f)?o.jsxs("div",{className:"hint-revealed",children:[o.jsxs("span",{className:"hint-number",children:["Hint ",f+1,":"]})," ",p]}):o.jsxs("button",{className:"hint-button",onClick:()=>_(f),children:["Reveal Hint ",f+1]})},f))})]}),o.jsx("div",{className:"solution-section",children:g?o.jsxs("div",{className:"solution-revealed",children:[o.jsx("h3",{children:"Solution"}),o.jsx("pre",{className:"solution-code",children:s.solutionCode})]}):o.jsx("button",{className:"solution-button",onClick:F,children:"Show Solution (try on your own first!)"})}),s.rubric&&o.jsxs("div",{className:"rubric-section",children:[o.jsx("h3",{children:"Rubric"}),o.jsx("ul",{className:"rubric-list",children:Object.entries(s.rubric).map(([p,f])=>o.jsxs("li",{children:[o.jsxs("strong",{children:[p,":"]})," ",f]},p))})]}),o.jsx("div",{className:"complete-section",children:r?o.jsxs("div",{className:"already-completed",children:["✓ You've completed this exercise! (",s.points," points earned)"]}):o.jsxs("button",{className:"complete-button",onClick:D,children:["Mark as Complete (+",s.points," points)"]})})]})}function Iv({completedExercises:e=[],onSelectTopic:t,onSelectExercise:n,onBack:r}){const[s,a]=L.useState("all"),[l,u]=L.useState("all"),[h,g]=L.useState("learn"),N=new Set(e),P=L.useMemo(()=>{const v={};return or.forEach(x=>{v[x.id]=an.filter(T=>T.topic===x.id)}),v},[]),C=[{id:"all",label:"All Types"},{id:"pseudocode-to-js",label:"Pseudocode → JS"},{id:"js-to-pseudocode",label:"JS → Pseudocode"},{id:"fill-blank",label:"Fill in Blank"},{id:"trace",label:"Code Tracing"},{id:"multiple-choice",label:"Multiple Choice"}],b=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],E=L.useMemo(()=>an.filter(v=>!(s!=="all"&&v.difficulty!==s||l!=="all"&&v.type!==l)),[s,l]),I=v=>{const x=P[v]||[];return{completed:x.filter(_=>N.has(_.id)).length,total:x.length}},O={completed:N.size,total:an.length};return o.jsxs("div",{className:"pseudocode-hub",children:[o.jsx("button",{className:"back-btn",onClick:r,children:"← Back to Dashboard"}),o.jsxs("div",{className:"hub-header",children:[o.jsx("div",{className:"hub-icon",children:"[ CODE ]"}),o.jsx("h1",{children:"AP CSP Pseudocode"}),o.jsx("p",{children:"Learn to translate between AP CSP pseudocode and JavaScript"})]}),o.jsxs("div",{className:"progress-bar-container",children:[o.jsxs("div",{className:"progress-label",children:["Overall Progress: ",O.completed," / ",O.total," exercises"]}),o.jsx("div",{className:"progress-bar",children:o.jsx("div",{className:"progress-fill apcsp",style:{width:`${O.completed/O.total*100}%`}})})]}),o.jsxs("div",{className:"hub-tabs",children:[o.jsx("button",{className:`hub-tab ${h==="learn"?"active":""}`,onClick:()=>g("learn"),children:"Learn Topics"}),o.jsx("button",{className:`hub-tab ${h==="practice"?"active":""}`,onClick:()=>g("practice"),children:"Practice Exercises"})]}),h==="learn"&&o.jsx("div",{className:"topics-grid",children:or.map(v=>{const x=I(v.id),T=x.total>0?x.completed/x.total*100:0;return o.jsxs("div",{className:"topic-card",onClick:()=>t(v.id),children:[o.jsx("h3",{children:v.title}),o.jsx("div",{className:"topic-code",children:o.jsx("code",{children:v.pseudocode})}),o.jsx("div",{className:"topic-arrow",children:"↓"}),o.jsx("div",{className:"topic-code js",children:o.jsx("code",{children:v.javascript})}),o.jsxs("p",{className:"topic-explanation",children:[v.explanation.substring(0,100),"..."]}),o.jsxs("div",{className:"topic-progress",children:[o.jsxs("span",{children:[x.completed,"/",x.total," exercises"]}),o.jsx("div",{className:"progress-bar small",children:o.jsx("div",{className:"progress-fill apcsp",style:{width:`${T}%`}})})]})]},v.id)})}),h==="practice"&&o.jsxs("div",{className:"practice-section",children:[o.jsxs("div",{className:"filter-bar",children:[o.jsxs("div",{className:"filter-group",children:[o.jsx("label",{children:"Difficulty:"}),o.jsx("select",{value:s,onChange:v=>a(v.target.value),children:b.map(v=>o.jsx("option",{value:v.id,children:v.label},v.id))})]}),o.jsxs("div",{className:"filter-group",children:[o.jsx("label",{children:"Type:"}),o.jsx("select",{value:l,onChange:v=>u(v.target.value),children:C.map(v=>o.jsx("option",{value:v.id,children:v.label},v.id))})]})]}),o.jsx("div",{className:"exercises-list",children:E.map(v=>{const x=N.has(v.id),T=or.find(_=>_.id===v.topic);return o.jsxs("div",{className:`exercise-card ${x?"completed":""}`,onClick:()=>n(v.id),children:[o.jsx("div",{className:"exercise-status",children:x?"✓":"○"}),o.jsxs("div",{className:"exercise-content",children:[o.jsx("h4",{children:(T==null?void 0:T.title)||"Unknown Topic"}),o.jsx("p",{className:"exercise-type",children:v.type.replace(/-/g," ")}),o.jsx("p",{className:"exercise-prompt",children:v.prompt})]}),o.jsx("div",{className:`difficulty-badge ${v.difficulty}`,children:v.difficulty})]},v.id)})})]})]})}function Rv({topicId:e,onBack:t,onSelectExercise:n}){const[r,s]=L.useState(0),a=or.findIndex(h=>h.id===e),l=or[a],u=an.filter(h=>h.topic===e).slice(0,5);return l?o.jsxs("div",{className:"topic-lesson",children:[o.jsx("button",{className:"back-btn",onClick:t,children:"← Back to Pseudocode Hub"}),o.jsxs("div",{className:"lesson-header",children:[o.jsx("h1",{children:l.title}),o.jsx("p",{children:l.explanation})]}),o.jsxs("div",{className:"comparison-box",children:[o.jsxs("div",{className:"comparison-side pseudocode",children:[o.jsx("h3",{children:"Pseudocode"}),o.jsx("div",{className:"code-panel",children:o.jsx("pre",{children:l.pseudocode})})]}),o.jsxs("div",{className:"comparison-side javascript",children:[o.jsx("h3",{children:"JavaScript"}),o.jsx("div",{className:"code-panel",children:o.jsx("pre",{children:l.javascript})})]})]}),l.examples&&l.examples.length>0&&o.jsxs("div",{className:"examples-list",children:[o.jsx("h3",{children:"Examples"}),l.examples.map((h,g)=>o.jsxs("div",{className:"example-item",children:[o.jsxs("div",{className:"code-panel",children:[o.jsx("div",{className:"code-panel-header given",children:"Pseudocode"}),o.jsx("pre",{children:h.pseudocode})]}),o.jsxs("div",{className:"code-panel",children:[o.jsx("div",{className:"code-panel-header answer",children:"JavaScript"}),o.jsx("pre",{children:h.javascript})]})]},g))]}),l.keyPoints&&l.keyPoints.length>0&&o.jsxs("div",{className:"key-points",children:[o.jsx("h3",{children:"Key Points"}),o.jsx("ul",{children:l.keyPoints.map((h,g)=>o.jsx("li",{children:h},g))})]}),u.length>0&&o.jsxs("div",{className:"related-exercises",children:[o.jsx("h3",{children:"Practice Exercises"}),o.jsx("div",{className:"exercises-list",children:u.map(h=>o.jsxs("div",{className:"exercise-card",onClick:()=>n(h.id),children:[o.jsxs("div",{className:"exercise-content",children:[o.jsx("h4",{children:h.type.replace(/-/g," ")}),o.jsx("p",{className:"exercise-prompt",children:h.prompt})]}),o.jsx("div",{className:`difficulty-badge ${h.difficulty}`,children:h.difficulty})]},h.id))})]})]}):o.jsxs("div",{className:"topic-lesson",children:[o.jsx("button",{className:"back-btn",onClick:t,children:"← Back"}),o.jsxs("div",{className:"error-message",children:[o.jsx("h1",{children:"Topic Not Found"}),o.jsx("p",{children:"This topic doesn't exist."})]})]})}function _v({exerciseId:e,onComplete:t,onBack:n,isCompleted:r}){const s=an.find(f=>f.id===e),a=s?or.find(f=>f.id===s.topic):null,[l,u]=L.useState(""),[h,g]=L.useState({}),[N,P]=L.useState(!1),[C,b]=L.useState(!1),[E,I]=L.useState(!1),[O,v]=L.useState(0);if(L.useMemo(()=>{if((s==null?void 0:s.type)!=="fill-blank"||!(s!=null&&s.template))return null;const f=[],y=/___(\w+)___/g;let S;for(;(S=y.exec(s.template))!==null;)f.push({id:S[1],position:S.index});return f},[s]),!s)return o.jsxs("div",{className:"translation-exercise",children:[o.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),o.jsxs("div",{className:"error-message",children:[o.jsx("h1",{children:"Exercise Not Found"}),o.jsx("p",{children:"This exercise doesn't exist."})]})]});const x=f=>f.replace(/<--/g,"←").replace(/<-/g,"←").replace(/←/g,"←").replace(/:=/g,"←").replace(/!=/g,"≠").replace(/<>/g,"≠").replace(/>=/g,"≥").replace(/<=/g,"≤").replace(/DISPLAY\s*\(\s*/gi,"DISPLAY(").replace(/DISPLAY\s+([^(\n]+)/gi,"DISPLAY($1)").replace(/\)\s*\)/g,")").replace(/INPUT\s*\(\s*\)/gi,"INPUT()").replace(/\s+/g," ").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/\s*,\s*/g,",").split(`
`).map(y=>y.trim()).filter(y=>y.length>0).join(`
`).trim().toLowerCase(),T=f=>f.replace(/\b(var|const)\b/g,"let").replace(/;+/g,";").replace(/\s+/g," ").replace(/\s*;\s*/g,";").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/;$/gm,"").split(`
`).map(y=>y.trim()).filter(y=>y.length>0).join(`
`).trim().toLowerCase(),_=(f,y,S)=>{const j=S?x:T,k=j(f),ie=j(y);if(k===ie)return!0;const Se=k.replace(/\n/g," ").replace(/\s+/g," "),Me=ie.replace(/\n/g," ").replace(/\s+/g," ");if(Se===Me)return!0;const xe=z=>z.replace(/[;\s]/g,"");return xe(k)===xe(ie)},F=()=>{let f=!1;const y=s.type==="js-to-pseudocode";s.type==="fill-blank"?f=Object.entries(s.blankAnswers||{}).every(([S,j])=>{const k=(h[S]||"").trim().toLowerCase();return Array.isArray(j)?j.some(ie=>ie.toLowerCase()===k):j.toLowerCase()===k}):(f=_(l,s.answer,y),!f&&s.acceptableAnswers&&(f=s.acceptableAnswers.some(S=>_(l,S,y)))),b(f),P(!0),f&&!r&&t(s.id,10)},D=()=>{u(""),g({}),P(!1),b(!1),I(!1),v(0)},w=()=>{var f;O<(((f=s.hints)==null?void 0:f.length)||0)-1&&v(O+1)},p=()=>{if(!s.template)return null;const f=s.template.split(/(___\w+___)/g);return o.jsx("div",{className:"fill-blank-container",children:o.jsx("pre",{className:"fill-blank-code",children:f.map((y,S)=>{const j=y.match(/___(\w+)___/);if(j){const k=j[1];return o.jsx("input",{type:"text",className:`fill-blank-input ${N?C?"correct":"incorrect":""}`,value:h[k]||"",onChange:ie=>g({...h,[k]:ie.target.value}),placeholder:"...",disabled:N&&C},S)}return o.jsx("span",{children:y},S)})})})};return o.jsxs("div",{className:"translation-exercise",children:[o.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Pseudocode Hub"}),o.jsxs("div",{className:"exercise-header",children:[o.jsx("h1",{children:(a==null?void 0:a.title)||"Translation Exercise"}),o.jsxs("div",{className:"exercise-meta",children:[o.jsx("span",{className:`difficulty-badge ${s.difficulty}`,children:s.difficulty}),o.jsx("span",{className:"exercise-type-badge",children:s.type.replace(/-/g," ")}),r&&o.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),o.jsx("p",{className:"exercise-prompt-text",children:s.prompt}),s.type==="fill-blank"?p():o.jsxs("div",{className:"code-panels",children:[o.jsxs("div",{className:"code-panel",children:[o.jsx("div",{className:"code-panel-header given",children:s.type==="pseudocode-to-js"?"Pseudocode":"JavaScript"}),o.jsx("div",{className:"code-panel-content",children:o.jsx("pre",{children:s.given})})]}),o.jsxs("div",{className:"code-panel",children:[o.jsx("div",{className:"code-panel-header answer",children:s.type==="pseudocode-to-js"?"Your JavaScript":"Your Pseudocode"}),o.jsx("div",{className:"code-panel-content",children:o.jsx("textarea",{value:l,onChange:f=>u(f.target.value),placeholder:"Type your answer here...",disabled:N&&C})})]})]}),o.jsx("div",{className:"format-help",children:o.jsxs("details",{children:[o.jsx("summary",{children:"Accepted formats"}),o.jsxs("ul",{children:[o.jsxs("li",{children:[o.jsx("code",{children:"←"})," or ",o.jsx("code",{children:"<--"})," or ",o.jsx("code",{children:"<-"})," for assignment"]}),o.jsxs("li",{children:[o.jsx("code",{children:"DISPLAY(x)"})," or ",o.jsx("code",{children:"DISPLAY x"})," for output"]}),o.jsxs("li",{children:[o.jsx("code",{children:"≠"})," or ",o.jsx("code",{children:"!="})," or ",o.jsx("code",{children:"<>"})," for not equal"]}),o.jsxs("li",{children:[o.jsx("code",{children:"≥"})," or ",o.jsx("code",{children:">="})," and ",o.jsx("code",{children:"≤"})," or ",o.jsx("code",{children:"<="})]}),o.jsx("li",{children:"Spacing and newlines are flexible"})]})]})}),o.jsx("div",{className:"exercise-actions",children:N?o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"action-btn",onClick:D,children:"Try Again"}),!C&&o.jsx("button",{className:"action-btn",onClick:()=>{s.type==="fill-blank"?g(s.blankAnswers||{}):u(s.answer)},children:"Show Solution"})]}):o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"action-btn",onClick:()=>I(!E),children:E?"Hide Hints":"Show Hints"}),o.jsx("button",{className:"action-btn primary",onClick:F,disabled:s.type==="fill-blank"?Object.keys(h).length===0:!l.trim(),children:"Check Answer"})]})}),E&&s.hints&&s.hints.length>0&&o.jsxs("div",{className:"hint-box",children:[o.jsx("h4",{children:"Hints"}),o.jsx("ul",{children:s.hints.slice(0,O+1).map((f,y)=>o.jsx("li",{children:f},y))}),O<s.hints.length-1&&o.jsx("button",{className:"action-btn",onClick:w,children:"Show Next Hint"})]}),N&&o.jsx("div",{className:`result-box ${C?"correct":"incorrect"}`,children:C?o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"✓ Correct!"}),o.jsx("p",{children:"Great job! You've mastered this translation."})]}):o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"✗ Not Quite"}),o.jsx("p",{children:"Check your answer and try again, or view the solution."})]})}),N&&!C&&o.jsxs("div",{className:"explanation-box",children:[o.jsx("h4",{children:"Explanation"}),o.jsx("p",{children:s.explanation})]})]})}const Ta=[{id:"trace-1",title:"Simple Counter",code:`count ← 0
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
DISPLAY(sum)`,steps:[{line:1,action:"list ← [3, 7, 2]",variables:{list:[3,7,2],sum:void 0},output:""},{line:2,action:"sum ← 0",variables:{list:[3,7,2],sum:0},output:""},{line:3,action:"FOR EACH item IN list (item=3)",variables:{list:[3,7,2],sum:0,item:3},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:3,item:3},output:""},{line:3,action:"FOR EACH item IN list (item=7)",variables:{list:[3,7,2],sum:3,item:7},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:10,item:7},output:""},{line:3,action:"FOR EACH item IN list (item=2)",variables:{list:[3,7,2],sum:10,item:2},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:12,item:2},output:""},{line:7,action:"DISPLAY(sum)",variables:{list:[3,7,2],sum:12,item:2},output:"12"}]}];function Dv({onBack:e}){const[t,n]=L.useState(Ta[0]),[r,s]=L.useState(0),[a,l]=L.useState(!1),u=t.steps[r],h=Object.keys((u==null?void 0:u.variables)||{}),g=()=>{r<t.steps.length-1&&s(r+1)},N=()=>{r>0&&s(r-1)},P=()=>{s(0),l(!1)};return o.jsxs("div",{className:"code-tracer",children:[o.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),o.jsxs("div",{className:"hub-header",children:[o.jsx("div",{className:"hub-icon",children:"[ TRACE ]"}),o.jsx("h1",{children:"Code Tracer"}),o.jsx("p",{children:"Step through pseudocode and track variable values"})]}),o.jsxs("div",{className:"tracer-example-select",children:[o.jsx("label",{children:"Select Example:"}),o.jsx("select",{value:t.id,onChange:C=>{const b=Ta.find(E=>E.id===C.target.value);n(b),s(0)},children:Ta.map(C=>o.jsx("option",{value:C.id,children:C.title},C.id))})]}),o.jsxs("div",{className:"tracer-layout",children:[o.jsxs("div",{className:"tracer-code-panel",children:[o.jsx("h3",{children:"Code"}),o.jsx("pre",{className:"tracer-code",children:t.code.split(`
`).map((C,b)=>o.jsxs("div",{className:`code-line ${(u==null?void 0:u.line)===b+1?"current":""}`,children:[o.jsx("span",{className:"line-number",children:b+1}),o.jsx("span",{className:"line-content",children:C})]},b))})]}),o.jsxs("div",{className:"tracer-state-panel",children:[o.jsx("h3",{children:"Variables"}),o.jsxs("table",{className:"trace-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Variable"}),o.jsx("th",{children:"Value"})]})}),o.jsx("tbody",{children:h.map(C=>o.jsxs("tr",{children:[o.jsx("td",{children:C}),o.jsx("td",{children:(u==null?void 0:u.variables[C])===void 0?"—":JSON.stringify(u==null?void 0:u.variables[C])})]},C))})]}),o.jsx("h3",{children:"Output"}),o.jsx("div",{className:"tracer-output",children:o.jsx("pre",{children:(u==null?void 0:u.output)||"(no output yet)"})})]})]}),o.jsxs("div",{className:"tracer-controls",children:[o.jsx("button",{className:"tracer-btn",onClick:P,children:"Reset"}),o.jsx("button",{className:"tracer-btn",onClick:N,disabled:r===0,children:"← Prev"}),o.jsxs("span",{className:"step-counter",children:["Step ",r+1," / ",t.steps.length]}),o.jsx("button",{className:"tracer-btn",onClick:g,disabled:r===t.steps.length-1,children:"Next →"})]}),o.jsxs("div",{className:"current-action",children:[o.jsx("strong",{children:"Current Action:"})," ",u==null?void 0:u.action]})]})}const ba=[{id:"robot-1",title:"Simple Path",description:"Move the robot to the goal (green square).",gridSize:5,start:{x:0,y:2,direction:"right"},goal:{x:4,y:2},obstacles:[],code:`REPEAT 4 TIMES
{
   MOVE_FORWARD()
}`,solution:["MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD"]},{id:"robot-2",title:"Turn and Move",description:"Navigate around to reach the goal.",gridSize:5,start:{x:0,y:0,direction:"right"},goal:{x:2,y:2},obstacles:[{x:1,y:0},{x:2,y:0}],code:`MOVE_FORWARD()
ROTATE_RIGHT()
MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()`,solution:["MOVE_FORWARD","ROTATE_RIGHT","MOVE_FORWARD","MOVE_FORWARD","ROTATE_LEFT","MOVE_FORWARD"]}];function Lv({onBack:e}){const[t,n]=L.useState(ba[0]),[r,s]=L.useState(t.start),[a,l]=L.useState(-1),[u,h]=L.useState(!1),g=()=>{s(t.start),l(-1),h(!1)},N=()=>{const b=t.solution;if(a>=b.length-1)return;const E=a+1,I=b[E];let O={...r};if(I==="MOVE_FORWARD")switch(r.direction){case"up":O.y=Math.max(0,r.y-1);break;case"down":O.y=Math.min(t.gridSize-1,r.y+1);break;case"left":O.x=Math.max(0,r.x-1);break;case"right":O.x=Math.min(t.gridSize-1,r.x+1);break}else if(I==="ROTATE_RIGHT"){const v=["up","right","down","left"],x=v.indexOf(r.direction);O.direction=v[(x+1)%4]}else if(I==="ROTATE_LEFT"){const v=["up","right","down","left"],x=v.indexOf(r.direction);O.direction=v[(x+3)%4]}s(O),l(E),O.x===t.goal.x&&O.y===t.goal.y&&h(!0)},P=()=>{g();let b=-1;const E=setInterval(()=>{if(b++,b>=t.solution.length){clearInterval(E);return}N()},500)},C=()=>{const b=[];for(let E=0;E<t.gridSize;E++)for(let I=0;I<t.gridSize;I++){const O=r.x===I&&r.y===E,v=t.goal.x===I&&t.goal.y===E,x=t.obstacles.some(_=>_.x===I&&_.y===E);let T="grid-cell";x&&(T+=" obstacle"),v&&(T+=" goal"),O&&(T+=" robot"),b.push(o.jsxs("div",{className:T,children:[O&&o.jsxs("span",{className:"robot-arrow",children:[r.direction==="up"&&"↑",r.direction==="down"&&"↓",r.direction==="left"&&"←",r.direction==="right"&&"→"]}),v&&!O&&"★"]},`${I}-${E}`))}return b};return o.jsxs("div",{className:"robot-grid-page",children:[o.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),o.jsxs("div",{className:"hub-header",children:[o.jsx("div",{className:"hub-icon",children:"[ ROBOT ]"}),o.jsx("h1",{children:"Robot Navigation"}),o.jsx("p",{children:"Practice AP CSP robot commands"})]}),o.jsxs("div",{className:"challenge-selector",children:[o.jsx("label",{children:"Challenge:"}),o.jsx("select",{value:t.id,onChange:b=>{const E=ba.find(I=>I.id===b.target.value);n(E),s(E.start),l(-1),h(!1)},children:ba.map(b=>o.jsx("option",{value:b.id,children:b.title},b.id))})]}),o.jsx("p",{className:"challenge-desc",children:t.description}),o.jsxs("div",{className:"robot-layout",children:[o.jsx("div",{className:"grid-container",children:o.jsx("div",{className:"robot-grid",style:{gridTemplateColumns:`repeat(${t.gridSize}, 1fr)`,gridTemplateRows:`repeat(${t.gridSize}, 1fr)`},children:C()})}),o.jsxs("div",{className:"code-panel",children:[o.jsx("h3",{children:"Pseudocode"}),o.jsx("pre",{children:t.code})]})]}),o.jsxs("div",{className:"robot-controls",children:[o.jsx("button",{className:"tracer-btn",onClick:g,children:"Reset"}),o.jsx("button",{className:"tracer-btn",onClick:N,disabled:u,children:"Step"}),o.jsx("button",{className:"tracer-btn primary",onClick:P,children:"Run All"})]}),u&&o.jsxs("div",{className:"result-box correct",children:[o.jsx("h3",{children:"✓ Goal Reached!"}),o.jsx("p",{children:"The robot successfully navigated to the goal."})]})]})}function Ov({completedExercises:e=[],onSelectExercise:t,onSelectBuilder:n,onSelectSymbols:r,onBack:s}){const[a,l]=L.useState("all"),[u,h]=L.useState("learn"),g=new Set(e),N=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],P=L.useMemo(()=>ar.filter(b=>!(a!=="all"&&b.difficulty!==a)),[a]),C={completed:g.size,total:ar.length};return o.jsxs("div",{className:"flowchart-hub",children:[o.jsx("button",{className:"back-btn",onClick:s,children:"← Back to Dashboard"}),o.jsxs("div",{className:"hub-header",children:[o.jsx("div",{className:"hub-icon",children:"[ FLOW ]"}),o.jsx("h1",{children:"Flowcharts"}),o.jsx("p",{children:"Learn to read, interpret, and create flowcharts"})]}),o.jsxs("div",{className:"progress-bar-container",children:[o.jsxs("div",{className:"progress-label",children:["Overall Progress: ",C.completed," / ",C.total," exercises"]}),o.jsx("div",{className:"progress-bar",children:o.jsx("div",{className:"progress-fill apcsp",style:{width:`${C.completed/C.total*100}%`}})})]}),o.jsxs("div",{className:"hub-tabs",children:[o.jsx("button",{className:`hub-tab ${u==="learn"?"active":""}`,onClick:()=>h("learn"),children:"Learn Symbols"}),o.jsx("button",{className:`hub-tab ${u==="practice"?"active":""}`,onClick:()=>h("practice"),children:"Practice"}),o.jsx("button",{className:`hub-tab ${u==="builder"?"active":""}`,onClick:()=>h("builder"),children:"Build"})]}),u==="learn"&&o.jsxs("div",{className:"symbols-section",children:[o.jsx("h2",{children:"Flowchart Symbols"}),o.jsx("p",{className:"section-intro",children:"Learn the standard flowchart symbols used in AP CSP."}),o.jsx("div",{className:"symbols-grid",children:xl.map(b=>o.jsxs("div",{className:"symbol-card",style:{borderColor:b.color},children:[o.jsxs("div",{className:"symbol-shape",style:{color:b.color},children:[b.id==="oval"&&"⬭",b.id==="rectangle"&&"▭",b.id==="diamond"&&"◇",b.id==="parallelogram"&&"▱",b.id==="arrow"&&"→"]}),o.jsx("h3",{children:b.name}),o.jsx("p",{className:"symbol-purpose",children:b.purpose}),o.jsx("p",{className:"symbol-desc",children:b.description})]},b.id))}),o.jsx("button",{className:"action-btn",onClick:r,children:"View Full Symbol Guide →"})]}),u==="practice"&&o.jsxs("div",{className:"practice-section",children:[o.jsx("div",{className:"filter-bar",children:o.jsxs("div",{className:"filter-group",children:[o.jsx("label",{children:"Difficulty:"}),o.jsx("select",{value:a,onChange:b=>l(b.target.value),children:N.map(b=>o.jsx("option",{value:b.id,children:b.label},b.id))})]})}),o.jsx("div",{className:"exercises-list",children:P.map(b=>{const E=g.has(b.id);return o.jsxs("div",{className:`exercise-card ${E?"completed":""}`,onClick:()=>t(b.id),children:[o.jsx("div",{className:"exercise-status",children:E?"✓":"○"}),o.jsxs("div",{className:"exercise-content",children:[o.jsx("h4",{children:b.title}),o.jsx("p",{className:"exercise-type",children:b.type}),o.jsx("p",{className:"exercise-prompt",children:b.question})]}),o.jsx("div",{className:`difficulty-badge ${b.difficulty}`,children:b.difficulty})]},b.id)})})]}),u==="builder"&&o.jsx("div",{className:"builder-section",children:o.jsxs("div",{className:"builder-intro",children:[o.jsx("h2",{children:"Flowchart Builder"}),o.jsx("p",{children:"Create your own flowcharts using drag-and-drop!"}),o.jsxs("ul",{children:[o.jsx("li",{children:"Drag symbols from the palette onto the canvas"}),o.jsx("li",{children:"Connect nodes with arrows to show flow"}),o.jsx("li",{children:"Edit text inside each shape"}),o.jsx("li",{children:"Export your flowchart as an image"})]}),o.jsx("button",{className:"action-btn primary",onClick:n,children:"Open Flowchart Builder →"})]})})]})}function Mv({onBack:e}){const[t,n]=L.useState(xl[0].id);return o.jsxs("div",{className:"symbol-lesson",children:[o.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),o.jsxs("div",{className:"hub-header",children:[o.jsx("div",{className:"hub-icon",children:"[ SHAPES ]"}),o.jsx("h1",{children:"Flowchart Symbols"}),o.jsx("p",{children:"Learn the standard flowchart symbols used in AP CSP"})]}),o.jsx("div",{className:"symbols-detail-list",children:xl.map(r=>o.jsxs("div",{className:`symbol-detail-card ${t===r.id?"expanded":""}`,onClick:()=>n(t===r.id?null:r.id),children:[o.jsxs("div",{className:"symbol-header",children:[o.jsxs("div",{className:"symbol-preview",style:{color:r.color},children:[r.id==="oval"&&"⬭",r.id==="rectangle"&&"▭",r.id==="diamond"&&"◇",r.id==="parallelogram"&&"▱",r.id==="arrow"&&"→"]}),o.jsxs("div",{className:"symbol-info",children:[o.jsx("h3",{style:{color:r.color},children:r.name}),o.jsx("p",{children:r.purpose})]}),o.jsx("span",{className:"expand-icon",children:t===r.id?"−":"+"})]}),t===r.id&&o.jsxs("div",{className:"symbol-details",children:[o.jsx("p",{className:"symbol-description",children:r.description}),o.jsxs("div",{className:"symbol-examples",children:[o.jsx("h4",{children:"Examples:"}),o.jsx("ul",{children:r.examples.map((s,a)=>o.jsx("li",{children:s},a))})]})]})]},r.id))}),o.jsxs("div",{className:"symbol-tips",children:[o.jsx("h3",{children:"Tips for Reading Flowcharts"}),o.jsxs("ul",{children:[o.jsxs("li",{children:["Always start at the ",o.jsx("strong",{children:"oval"}),' labeled "Start"']}),o.jsxs("li",{children:["Follow the ",o.jsx("strong",{children:"arrows"})," to determine the order of operations"]}),o.jsxs("li",{children:["At a ",o.jsx("strong",{children:"diamond"}),", evaluate the condition to choose which path to follow"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Rectangles"})," contain actions - execute them in order"]}),o.jsxs("li",{children:[o.jsx("strong",{children:"Parallelograms"})," show input/output operations"]}),o.jsxs("li",{children:["End at the ",o.jsx("strong",{children:"oval"}),' labeled "End"']})]})]})]})}function Fv({onBack:e}){var h;const[t,n]=L.useState([{id:"1",type:"oval",label:"Start",x:200,y:50},{id:"2",type:"rectangle",label:"Process",x:200,y:150},{id:"3",type:"oval",label:"End",x:200,y:250}]),[r,s]=L.useState(null),a=g=>{const N={oval:"Start/End",rectangle:"Process",diamond:"Decision?",parallelogram:"Input/Output"},P={id:Date.now().toString(),type:g,label:N[g],x:200+Math.random()*100,y:100+Math.random()*200};n([...t,P])},l=(g,N)=>{n(t.map(P=>P.id===g?{...P,label:N}:P))},u=g=>{n(t.filter(N=>N.id!==g)),s(null)};return o.jsxs("div",{className:"flowchart-builder-page",children:[o.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),o.jsxs("div",{className:"hub-header",children:[o.jsx("div",{className:"hub-icon",children:"[ BUILD ]"}),o.jsx("h1",{children:"Flowchart Builder"}),o.jsx("p",{children:"Create your own flowcharts"})]}),o.jsxs("div",{className:"builder-layout",children:[o.jsxs("div",{className:"symbol-palette",children:[o.jsx("h3",{children:"Symbols"}),o.jsxs("button",{className:"palette-btn",onClick:()=>a("oval"),children:[o.jsx("span",{className:"symbol-icon",children:"⬭"})," Oval"]}),o.jsxs("button",{className:"palette-btn",onClick:()=>a("rectangle"),children:[o.jsx("span",{className:"symbol-icon",children:"▭"})," Rectangle"]}),o.jsxs("button",{className:"palette-btn",onClick:()=>a("diamond"),children:[o.jsx("span",{className:"symbol-icon",children:"◇"})," Diamond"]}),o.jsxs("button",{className:"palette-btn",onClick:()=>a("parallelogram"),children:[o.jsx("span",{className:"symbol-icon",children:"▱"})," Parallelogram"]})]}),o.jsx("div",{className:"builder-canvas",children:o.jsx("div",{className:"canvas-area",children:t.map(g=>o.jsxs("div",{className:`builder-node ${g.type} ${r===g.id?"selected":""}`,style:{left:g.x,top:g.y},onClick:()=>s(g.id),children:[g.type==="oval"&&o.jsx("span",{className:"node-shape oval-shape",children:g.label}),g.type==="rectangle"&&o.jsx("span",{className:"node-shape rect-shape",children:g.label}),g.type==="diamond"&&o.jsx("span",{className:"node-shape diamond-shape",children:g.label}),g.type==="parallelogram"&&o.jsx("span",{className:"node-shape para-shape",children:g.label})]},g.id))})}),r&&o.jsxs("div",{className:"node-editor",children:[o.jsx("h3",{children:"Edit Node"}),o.jsx("input",{type:"text",value:((h=t.find(g=>g.id===r))==null?void 0:h.label)||"",onChange:g=>l(r,g.target.value),placeholder:"Enter label..."}),o.jsx("button",{className:"action-btn",onClick:()=>u(r),children:"Delete Node"})]})]}),o.jsx("div",{className:"builder-tips",children:o.jsx("p",{children:"Click a symbol to add it. Click a node to edit or delete it."})})]})}function Uv({exerciseId:e,onComplete:t,onBack:n,isCompleted:r}){const s=ar.find(v=>v.id===e),[a,l]=L.useState(""),[u,h]=L.useState(!1),[g,N]=L.useState(!1),[P,C]=L.useState(!1),[b,E]=L.useState(0);if(!s)return o.jsxs("div",{className:"flowchart-exercise",children:[o.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),o.jsx("div",{className:"error-message",children:o.jsx("h1",{children:"Exercise Not Found"})})]});const I=()=>{const v=a.trim().toLowerCase(),x=s.answer.trim().toLowerCase(),T=v===x;N(T),h(!0),T&&!r&&t(s.id,10)},O=()=>{l(""),h(!1),N(!1),C(!1),E(0)};return o.jsxs("div",{className:"flowchart-exercise",children:[o.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Flowcharts"}),o.jsxs("div",{className:"exercise-header",children:[o.jsx("h1",{children:s.title}),o.jsxs("div",{className:"exercise-meta",children:[o.jsx("span",{className:`difficulty-badge ${s.difficulty}`,children:s.difficulty}),o.jsx("span",{className:"exercise-type-badge",children:s.type}),r&&o.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),o.jsx("p",{className:"exercise-description",children:s.description}),o.jsxs("div",{className:"flowchart-question",children:[o.jsx("h3",{children:"Question"}),o.jsx("p",{className:"question-text",children:s.question})]}),o.jsxs("div",{className:"answer-section",children:[o.jsx("label",{children:"Your Answer:"}),o.jsx("input",{type:"text",value:a,onChange:v=>l(v.target.value),placeholder:"Type your answer...",disabled:u&&g})]}),o.jsx("div",{className:"exercise-actions",children:u?o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"action-btn",onClick:O,children:"Try Again"}),!g&&o.jsx("button",{className:"action-btn",onClick:()=>l(s.answer),children:"Show Solution"})]}):o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"action-btn",onClick:()=>C(!P),children:P?"Hide Hints":"Show Hints"}),o.jsx("button",{className:"action-btn primary",onClick:I,disabled:!a.trim(),children:"Check Answer"})]})}),P&&s.hints&&s.hints.length>0&&o.jsxs("div",{className:"hint-box",children:[o.jsx("h4",{children:"Hints"}),o.jsx("ul",{children:s.hints.slice(0,b+1).map((v,x)=>o.jsx("li",{children:v},x))}),b<s.hints.length-1&&o.jsx("button",{className:"action-btn",onClick:()=>E(b+1),children:"Show Next Hint"})]}),u&&o.jsx("div",{className:`result-box ${g?"correct":"incorrect"}`,children:g?o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"✓ Correct!"}),o.jsx("p",{children:"You correctly interpreted the flowchart."})]}):o.jsxs(o.Fragment,{children:[o.jsx("h3",{children:"✗ Not Quite"}),o.jsx("p",{children:"Check your answer and try again."})]})}),u&&s.explanation&&o.jsxs("div",{className:"explanation-box",children:[o.jsx("h4",{children:"Explanation"}),o.jsx("p",{children:s.explanation})]})]})}function zv(){const[e,t]=L.useState(null),[n,r]=L.useState(!1),[s,a]=L.useState(null),[l,u]=L.useState("dashboard"),[h,g]=L.useState(null),[N,P]=L.useState(null),[C,b]=L.useState([]),[E,I]=L.useState([]),[O,v]=L.useState([]),[x,T]=L.useState(0),[_,F]=L.useState([]),[D,w]=L.useState(null),[p,f]=L.useState(null),[y,S]=L.useState([]),[j,k]=L.useState([]),[ie,Se]=L.useState(null),[Me,xe]=L.useState(null),[z,V]=L.useState(null);L.useEffect(()=>{const W=localStorage.getItem("cyberrange-session");if(W)try{const J=JSON.parse(W);J.user&&(t(J.user),G(J.user))}catch(J){console.error("Error loading session:",J)}},[]);const G=async W=>{ee()},ee=()=>{const W=localStorage.getItem("cyberrange-progress");if(W)try{const J=JSON.parse(W);b(J.completed||[]),I(J.completedScenarios||[]),v(J.completedExercises||[]),S(J.completedPseudocode||[]),k(J.completedFlowcharts||[]),T(J.points||0)}catch(J){console.error("Error loading local progress:",J)}},H=L.useCallback(async(W,J,Eo,mn,Fi,Ui)=>{localStorage.setItem("cyberrange-progress",JSON.stringify({completed:W,completedScenarios:J,completedExercises:Eo,completedPseudocode:mn,completedFlowcharts:Fi,points:Ui}))},[e]);L.useEffect(()=>{e&&H(C,E,O,y,j,x)},[C,E,O,y,j,x,e,H]);const $=W=>{t(W),r(!1),localStorage.setItem("cyberrange-session",JSON.stringify({user:W})),W.completedChallenges&&(b(W.completedChallenges),I(W.completedScenarios||[]),v(W.completedExercises||[]),T(W.totalPoints||0)),G()},q=W=>{r(!0),a(W)},oe=()=>{t(null),r(!1),a(null),b([]),I([]),v([]),S([]),k([]),F([]),T(0),u("dashboard"),w(null),f(null),Se(null),xe(null),V(null),localStorage.removeItem("cyberrange-session")},ye=W=>{g(W),u("challenges")},Xe=W=>{P(W),u("challenge-detail")},So=(W,J)=>{C.includes(W)||(b([...C,W]),T(x+J))},Co=()=>{P(null),u("challenges")},Ht=()=>{g(null),P(null),u("dashboard")},_n=(W,J)=>{E.includes(W)||(I([...E,W]),T(x+J))},Sr=()=>{window.confirm("Are you sure you want to reset all progress? This cannot be undone.")&&(b([]),I([]),v([]),S([]),k([]),T(0),localStorage.removeItem("cyberrange-progress"),u("dashboard"))},Cr=W=>{w(W),u("week")},Tr=W=>{f(W),u("exercise-detail")},br=(W,J)=>{O.includes(W)||(v([...O,W]),T(x+J))},Di=()=>{f(null),u("week")},To=()=>{w(null),u("dashboard")},bo=W=>{u(W==="pseudocode"?"pseudocode-hub":"flowchart-hub")},Li=W=>{Se(W),u("topic-lesson")},Dn=W=>{xe(W),u("pseudocode-exercise")},Oi=(W,J)=>{y.includes(W)||(S([...y,W]),T(x+J))},jo=W=>{V(W),u("flowchart-exercise")},jr=(W,J)=>{j.includes(W)||(k([...j,W]),T(x+J))},fn=()=>{u("dashboard")},Mi=()=>{u("dashboard")},Ce=()=>{Se(null),u("pseudocode-hub")},je=()=>{xe(null),u("pseudocode-hub")},Ln=()=>{V(null),u("flowchart-hub")};return!e&&!n?o.jsx(Tv,{onLogin:$,onTeacherMode:q}):n&&s?o.jsx(bv,{classCode:s,onBack:()=>{r(!1),a(null)}}):o.jsxs("div",{className:"app",children:[o.jsx("header",{className:"header",children:o.jsxs("div",{className:"header-content",children:[o.jsx("div",{className:"logo",children:"CyberEd Range"}),o.jsxs("nav",{className:"nav",children:[o.jsx("button",{className:`nav-btn ${l==="dashboard"?"active":""}`,onClick:Ht,children:"Dashboard"}),o.jsx("button",{className:`nav-btn ${l==="network-monitor"?"active":""}`,onClick:()=>u("network-monitor"),children:"Network Monitor"}),o.jsx("button",{className:`nav-btn ${l==="vocabulary"?"active":""}`,onClick:()=>u("vocabulary"),children:"Vocabulary"}),o.jsx("button",{className:"nav-btn",onClick:Sr,style:{background:"rgba(244, 67, 54, 0.2)",borderColor:"#f44336"},children:"Reset"}),o.jsxs("div",{className:"user-info",children:[o.jsx("span",{className:"user-name",children:e==null?void 0:e.name}),o.jsx("span",{className:"user-class",children:e==null?void 0:e.classCode}),o.jsx("button",{className:"logout-btn",onClick:oe,children:"Logout"})]})]})]})}),o.jsxs("main",{className:"main-content",children:[l==="dashboard"&&o.jsx(Ey,{studentName:e==null?void 0:e.name,totalPoints:x,assignments:_,completedChallenges:C,completedScenarios:E,completedExercises:O,completedPseudocode:y,completedFlowcharts:j,onSelectCategory:ye,onSelectNetworkMonitor:()=>u("network-monitor"),onSelectWeek:Cr,onSelectAPCSP:bo}),l==="challenges"&&h&&o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"back-btn",onClick:Ht,children:"Back to Dashboard"}),o.jsx("div",{style:{marginTop:"1rem"},children:o.jsx(Ny,{category:h,completedChallenges:C,onSelectChallenge:Xe})})]}),l==="challenge-detail"&&N&&o.jsx(Py,{challengeId:N,onComplete:So,onBack:Co,isCompleted:C.includes(N)}),l==="week"&&D&&o.jsx(Pv,{weekKey:D,onSelectExercise:Tr,onBack:To,completedExercises:O}),l==="exercise-detail"&&p&&o.jsx(Av,{exerciseId:p,onComplete:br,onBack:Di,isCompleted:O.includes(p)}),l==="vocabulary"&&o.jsx(Ay,{}),l==="network-monitor"&&o.jsx(Yy,{completedScenarios:E,onCompleteScenario:_n,onBack:Ht}),l==="pseudocode-hub"&&o.jsx(Iv,{completedExercises:y,onSelectTopic:Li,onSelectExercise:Dn,onBack:fn}),l==="topic-lesson"&&ie&&o.jsx(Rv,{topicId:ie,onBack:Ce,onSelectExercise:Dn}),l==="pseudocode-exercise"&&Me&&o.jsx(_v,{exerciseId:Me,onComplete:Oi,onBack:je,isCompleted:y.includes(Me)}),l==="code-tracer"&&o.jsx(Dv,{onBack:fn}),l==="robot-grid"&&o.jsx(Lv,{onBack:fn}),l==="flowchart-hub"&&o.jsx(Ov,{completedExercises:j,onSelectExercise:jo,onSelectBuilder:()=>u("flowchart-builder"),onSelectSymbols:()=>u("symbol-lesson"),onBack:Mi}),l==="symbol-lesson"&&o.jsx(Mv,{onBack:()=>u("flowchart-hub")}),l==="flowchart-exercise"&&z&&o.jsx(Uv,{exerciseId:z,onComplete:jr,onBack:Ln,isCompleted:j.includes(z)}),l==="flowchart-builder"&&o.jsx(Fv,{onBack:()=>u("flowchart-hub")})]})]})}ja.createRoot(document.getElementById("root")).render(o.jsx(lm.StrictMode,{children:o.jsx(zv,{})}));
