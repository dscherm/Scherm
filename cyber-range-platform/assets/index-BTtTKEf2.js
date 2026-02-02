(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function lf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dp={exports:{}},Ta={},up={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vr=Symbol.for("react.element"),cf=Symbol.for("react.portal"),df=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),pf=Symbol.for("react.profiler"),hf=Symbol.for("react.provider"),mf=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),yf=Symbol.for("react.memo"),vf=Symbol.for("react.lazy"),Ad=Symbol.iterator;function xf(e){return e===null||typeof e!="object"?null:(e=Ad&&e[Ad]||e["@@iterator"],typeof e=="function"?e:null)}var pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hp=Object.assign,mp={};function Is(e,t,n){this.props=e,this.context=t,this.refs=mp,this.updater=n||pp}Is.prototype.isReactComponent={};Is.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Is.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fp(){}fp.prototype=Is.prototype;function Vl(e,t,n){this.props=e,this.context=t,this.refs=mp,this.updater=n||pp}var $l=Vl.prototype=new fp;$l.constructor=Vl;hp($l,Is.prototype);$l.isPureReactComponent=!0;var Id=Array.isArray,gp=Object.prototype.hasOwnProperty,Gl={current:null},yp={key:!0,ref:!0,__self:!0,__source:!0};function vp(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)gp.call(t,r)&&!yp.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var p=Array(c),h=0;h<c;h++)p[h]=arguments[h+2];i.children=p}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:Vr,type:e,key:o,ref:l,props:i,_owner:Gl.current}}function wf(e,t){return{$$typeof:Vr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vr}function bf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Dd=/\/+/g;function uo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bf(""+e.key):t.toString(36)}function Fi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Vr:case cf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+uo(l,0):r,Id(i)?(n="",e!=null&&(n=e.replace(Dd,"$&/")+"/"),Fi(i,t,n,"",function(h){return h})):i!=null&&(ql(i)&&(i=wf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Dd,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Id(e))for(var c=0;c<e.length;c++){o=e[c];var p=r+uo(o,c);l+=Fi(o,t,n,p,i)}else if(p=xf(e),typeof p=="function")for(e=p.call(e),c=0;!(o=e.next()).done;)o=o.value,p=r+uo(o,c++),l+=Fi(o,t,n,p,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function wi(e,t,n){if(e==null)return e;var r=[],i=0;return Fi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function kf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},zi={transition:null},jf={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:zi,ReactCurrentOwner:Gl};function xp(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:wi,forEach:function(e,t,n){wi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wi(e,function(){t++}),t},toArray:function(e){return wi(e,function(t){return t})||[]},only:function(e){if(!ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};se.Component=Is;se.Fragment=df;se.Profiler=pf;se.PureComponent=Vl;se.StrictMode=uf;se.Suspense=gf;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;se.act=xp;se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=hp({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Gl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(p in t)gp.call(t,p)&&!yp.hasOwnProperty(p)&&(r[p]=t[p]===void 0&&c!==void 0?c[p]:t[p])}var p=arguments.length-2;if(p===1)r.children=n;else if(1<p){c=Array(p);for(var h=0;h<p;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:Vr,type:e.type,key:i,ref:o,props:r,_owner:l}};se.createContext=function(e){return e={$$typeof:mf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hf,_context:e},e.Consumer=e};se.createElement=vp;se.createFactory=function(e){var t=vp.bind(null,e);return t.type=e,t};se.createRef=function(){return{current:null}};se.forwardRef=function(e){return{$$typeof:ff,render:e}};se.isValidElement=ql;se.lazy=function(e){return{$$typeof:vf,_payload:{_status:-1,_result:e},_init:kf}};se.memo=function(e,t){return{$$typeof:yf,type:e,compare:t===void 0?null:t}};se.startTransition=function(e){var t=zi.transition;zi.transition={};try{e()}finally{zi.transition=t}};se.unstable_act=xp;se.useCallback=function(e,t){return Xe.current.useCallback(e,t)};se.useContext=function(e){return Xe.current.useContext(e)};se.useDebugValue=function(){};se.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};se.useEffect=function(e,t){return Xe.current.useEffect(e,t)};se.useId=function(){return Xe.current.useId()};se.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};se.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};se.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};se.useMemo=function(e,t){return Xe.current.useMemo(e,t)};se.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};se.useRef=function(e){return Xe.current.useRef(e)};se.useState=function(e){return Xe.current.useState(e)};se.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};se.useTransition=function(){return Xe.current.useTransition()};se.version="18.3.1";up.exports=se;var I=up.exports;const Sf=lf(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf=I,Tf=Symbol.for("react.element"),Nf=Symbol.for("react.fragment"),Ef=Object.prototype.hasOwnProperty,Pf=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Af={key:!0,ref:!0,__self:!0,__source:!0};function wp(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ef.call(t,r)&&!Af.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Tf,type:e,key:o,ref:l,props:i,_owner:Pf.current}}Ta.Fragment=Nf;Ta.jsx=wp;Ta.jsxs=wp;dp.exports=Ta;var s=dp.exports,$o={},bp={exports:{}},lt={},kp={exports:{}},jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,V){var G=F.length;F.push(V);e:for(;0<G;){var Q=G-1>>>1,Z=F[Q];if(0<i(Z,V))F[Q]=V,F[G]=Z,G=Q;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var V=F[0],G=F.pop();if(G!==V){F[0]=G;e:for(var Q=0,Z=F.length,H=Z>>>1;Q<H;){var K=2*(Q+1)-1,ee=F[K],B=K+1,X=F[B];if(0>i(ee,G))B<Z&&0>i(X,ee)?(F[Q]=X,F[B]=G,Q=B):(F[Q]=ee,F[K]=G,Q=K);else if(B<Z&&0>i(X,G))F[Q]=X,F[B]=G,Q=B;else break e}}return V}function i(F,V){var G=F.sortIndex-V.sortIndex;return G!==0?G:F.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var p=[],h=[],S=1,w=null,x=3,j=!1,C=!1,A=!1,L=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(F){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=F)r(h),V.sortIndex=V.expirationTime,t(p,V);else break;V=n(h)}}function D(F){if(A=!1,k(F),!C)if(n(p)!==null)C=!0,J(_);else{var V=n(h);V!==null&&ne(D,V.startTime-F)}}function _(F,V){C=!1,A&&(A=!1,g(y),y=-1),j=!0;var G=x;try{for(k(V),w=n(p);w!==null&&(!(w.expirationTime>V)||F&&!P());){var Q=w.callback;if(typeof Q=="function"){w.callback=null,x=w.priorityLevel;var Z=Q(w.expirationTime<=V);V=e.unstable_now(),typeof Z=="function"?w.callback=Z:w===n(p)&&r(p),k(V)}else r(p);w=n(p)}if(w!==null)var H=!0;else{var K=n(h);K!==null&&ne(D,K.startTime-V),H=!1}return H}finally{w=null,x=G,j=!1}}var M=!1,b=null,y=-1,T=5,N=-1;function P(){return!(e.unstable_now()-N<T)}function E(){if(b!==null){var F=e.unstable_now();N=F;var V=!0;try{V=b(!0,F)}finally{V?f():(M=!1,b=null)}}else M=!1}var f;if(typeof m=="function")f=function(){m(E)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,W=z.port2;z.port1.onmessage=E,f=function(){W.postMessage(null)}}else f=function(){L(E,0)};function J(F){b=F,M||(M=!0,f())}function ne(F,V){y=L(function(){F(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){C||j||(C=!0,J(_))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(F){switch(x){case 1:case 2:case 3:var V=3;break;default:V=x}var G=x;x=V;try{return F()}finally{x=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,V){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var G=x;x=F;try{return V()}finally{x=G}},e.unstable_scheduleCallback=function(F,V,G){var Q=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Q+G:Q):G=Q,F){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=G+Z,F={id:S++,callback:V,priorityLevel:F,startTime:G,expirationTime:Z,sortIndex:-1},G>Q?(F.sortIndex=G,t(h,F),n(p)===null&&F===n(h)&&(A?(g(y),y=-1):A=!0,ne(D,G-Q))):(F.sortIndex=Z,t(p,F),C||j||(C=!0,J(_))),F},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(F){var V=x;return function(){var G=x;x=V;try{return F.apply(this,arguments)}finally{x=G}}}})(jp);kp.exports=jp;var If=kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=I,ot=If;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sp=new Set,Nr={};function Kn(e,t){js(e,t),js(e+"Capture",t)}function js(e,t){for(Nr[e]=t,e=0;e<t.length;e++)Sp.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=Object.prototype.hasOwnProperty,Rf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rd={},Ld={};function Lf(e){return Go.call(Ld,e)?!0:Go.call(Rd,e)?!1:Rf.test(e)?Ld[e]=!0:(Rd[e]=!0,!1)}function _f(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Of(e,t,n,r){if(t===null||typeof t>"u"||_f(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Xl=/[\-:]([a-z])/g;function Kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Xl,Kl);ze[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Xl,Kl);ze[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Xl,Kl);ze[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Jl(e,t,n,r){var i=ze.hasOwnProperty(t)?ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Of(t,n,i,r)&&(n=null),r||i===null?Lf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bi=Symbol.for("react.element"),ss=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),Ql=Symbol.for("react.strict_mode"),qo=Symbol.for("react.profiler"),Cp=Symbol.for("react.provider"),Tp=Symbol.for("react.context"),Zl=Symbol.for("react.forward_ref"),Xo=Symbol.for("react.suspense"),Ko=Symbol.for("react.suspense_list"),ec=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),Np=Symbol.for("react.offscreen"),_d=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=_d&&e[_d]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,po;function ur(e){if(po===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);po=t&&t[1]||""}return`
`+po+e}var ho=!1;function mo(e,t){if(!e||ho)return"";ho=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,c=o.length-1;1<=l&&0<=c&&i[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==o[c]){var p=`
`+i[l].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),p}while(1<=l&&0<=c);break}}}finally{ho=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function Mf(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=mo(e.type,!1),e;case 11:return e=mo(e.type.render,!1),e;case 1:return e=mo(e.type,!0),e;default:return""}}function Jo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case rs:return"Fragment";case ss:return"Portal";case qo:return"Profiler";case Ql:return"StrictMode";case Xo:return"Suspense";case Ko:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tp:return(e.displayName||"Context")+".Consumer";case Cp:return(e._context.displayName||"Context")+".Provider";case Zl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ec:return t=e.displayName||null,t!==null?t:Jo(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return Jo(e(t))}catch{}}return null}function Ff(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jo(t);case 8:return t===Ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zf(e){var t=Ep(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ki(e){e._valueTracker||(e._valueTracker=zf(e))}function Pp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ep(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qo(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Od(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ap(e,t){t=t.checked,t!=null&&Jl(e,"checked",t,!1)}function Zo(e,t){Ap(e,t);var n=Nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?el(e,t.type,n):t.hasOwnProperty("defaultValue")&&el(e,t.type,Nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Md(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function el(e,t,n){(t!=="number"||Ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pr=Array.isArray;function fs(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(pr(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nn(n)}}function Ip(e,t){var n=Nn(t.value),r=Nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ji,Rp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ji=ji||document.createElement("div"),ji.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ji.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uf=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Uf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function Lp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function _p(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hf=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sl(e,t){if(t){if(Hf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function rl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var il=null;function tc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var al=null,gs=null,ys=null;function Ud(e){if(e=qr(e)){if(typeof al!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Ia(t),al(e.stateNode,e.type,t))}}function Op(e){gs?ys?ys.push(e):ys=[e]:gs=e}function Mp(){if(gs){var e=gs,t=ys;if(ys=gs=null,Ud(e),t)for(e=0;e<t.length;e++)Ud(t[e])}}function Fp(e,t){return e(t)}function zp(){}var fo=!1;function Up(e,t,n){if(fo)return e(t,n);fo=!0;try{return Fp(e,t,n)}finally{fo=!1,(gs!==null||ys!==null)&&(zp(),Mp())}}function Pr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ia(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var ol=!1;if(Qt)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){ol=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{ol=!1}function Bf(e,t,n,r,i,o,l,c,p){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(S){this.onError(S)}}var yr=!1,Ji=null,Qi=!1,ll=null,Wf={onError:function(e){yr=!0,Ji=e}};function Yf(e,t,n,r,i,o,l,c,p){yr=!1,Ji=null,Bf.apply(Wf,arguments)}function Vf(e,t,n,r,i,o,l,c,p){if(Yf.apply(this,arguments),yr){if(yr){var h=Ji;yr=!1,Ji=null}else throw Error(U(198));Qi||(Qi=!0,ll=h)}}function Jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hd(e){if(Jn(e)!==e)throw Error(U(188))}function $f(e){var t=e.alternate;if(!t){if(t=Jn(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Hd(i),e;if(o===r)return Hd(i),t;o=o.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function Bp(e){return e=$f(e),e!==null?Wp(e):null}function Wp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wp(e);if(t!==null)return t;e=e.sibling}return null}var Yp=ot.unstable_scheduleCallback,Bd=ot.unstable_cancelCallback,Gf=ot.unstable_shouldYield,qf=ot.unstable_requestPaint,Ne=ot.unstable_now,Xf=ot.unstable_getCurrentPriorityLevel,nc=ot.unstable_ImmediatePriority,Vp=ot.unstable_UserBlockingPriority,Zi=ot.unstable_NormalPriority,Kf=ot.unstable_LowPriority,$p=ot.unstable_IdlePriority,Na=null,zt=null;function Jf(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Na,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:eg,Qf=Math.log,Zf=Math.LN2;function eg(e){return e>>>=0,e===0?32:31-(Qf(e)/Zf|0)|0}var Si=64,Ci=4194304;function hr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ea(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?r=hr(c):(o&=l,o!==0&&(r=hr(o)))}else l=n&~i,l!==0?r=hr(l):o!==0&&(r=hr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-At(t),i=1<<n,r|=e[n],t&=~i;return r}function tg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ng(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-At(o),c=1<<l,p=i[l];p===-1?(!(c&n)||c&r)&&(i[l]=tg(c,t)):p<=t&&(e.expiredLanes|=c),o&=~c}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gp(){var e=Si;return Si<<=1,!(Si&4194240)&&(Si=64),e}function go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $r(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=n}function sg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-At(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-At(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ce=0;function qp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xp,rc,Kp,Jp,Qp,dl=!1,Ti=[],vn=null,xn=null,wn=null,Ar=new Map,Ir=new Map,mn=[],rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wd(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ir.delete(t.pointerId)}}function ir(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=qr(t),t!==null&&rc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ig(e,t,n,r,i){switch(t){case"focusin":return vn=ir(vn,e,t,n,r,i),!0;case"dragenter":return xn=ir(xn,e,t,n,r,i),!0;case"mouseover":return wn=ir(wn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ar.set(o,ir(Ar.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ir.set(o,ir(Ir.get(o)||null,e,t,n,r,i)),!0}return!1}function Zp(e){var t=Un(e.target);if(t!==null){var n=Jn(t);if(n!==null){if(t=n.tag,t===13){if(t=Hp(n),t!==null){e.blockedOn=t,Qp(e.priority,function(){Kp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);il=r,n.target.dispatchEvent(r),il=null}else return t=qr(n),t!==null&&rc(t),e.blockedOn=n,!1;t.shift()}return!0}function Yd(e,t,n){Ui(e)&&n.delete(t)}function ag(){dl=!1,vn!==null&&Ui(vn)&&(vn=null),xn!==null&&Ui(xn)&&(xn=null),wn!==null&&Ui(wn)&&(wn=null),Ar.forEach(Yd),Ir.forEach(Yd)}function ar(e,t){e.blockedOn===t&&(e.blockedOn=null,dl||(dl=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,ag)))}function Dr(e){function t(i){return ar(i,e)}if(0<Ti.length){ar(Ti[0],e);for(var n=1;n<Ti.length;n++){var r=Ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&ar(vn,e),xn!==null&&ar(xn,e),wn!==null&&ar(wn,e),Ar.forEach(t),Ir.forEach(t),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)Zp(n),n.blockedOn===null&&mn.shift()}var vs=sn.ReactCurrentBatchConfig,ta=!0;function og(e,t,n,r){var i=ce,o=vs.transition;vs.transition=null;try{ce=1,ic(e,t,n,r)}finally{ce=i,vs.transition=o}}function lg(e,t,n,r){var i=ce,o=vs.transition;vs.transition=null;try{ce=4,ic(e,t,n,r)}finally{ce=i,vs.transition=o}}function ic(e,t,n,r){if(ta){var i=ul(e,t,n,r);if(i===null)To(e,t,r,na,n),Wd(e,r);else if(ig(i,e,t,n,r))r.stopPropagation();else if(Wd(e,r),t&4&&-1<rg.indexOf(e)){for(;i!==null;){var o=qr(i);if(o!==null&&Xp(o),o=ul(e,t,n,r),o===null&&To(e,t,r,na,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else To(e,t,r,null,n)}}var na=null;function ul(e,t,n,r){if(na=null,e=tc(r),e=Un(e),e!==null)if(t=Jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return na=e,null}function eh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xf()){case nc:return 1;case Vp:return 4;case Zi:case Kf:return 16;case $p:return 536870912;default:return 16}default:return 16}}var gn=null,ac=null,Hi=null;function th(){if(Hi)return Hi;var e,t=ac,n=t.length,r,i="value"in gn?gn.value:gn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Hi=i.slice(e,1<r?1-r:void 0)}function Bi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function Vd(){return!1}function ct(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ni:Vd,this.isPropagationStopped=Vd,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=ct(Ds),Gr=je({},Ds,{view:0,detail:0}),cg=ct(Gr),yo,vo,or,Ea=je({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(yo=e.screenX-or.screenX,vo=e.screenY-or.screenY):vo=yo=0,or=e),yo)},movementY:function(e){return"movementY"in e?e.movementY:vo}}),$d=ct(Ea),dg=je({},Ea,{dataTransfer:0}),ug=ct(dg),pg=je({},Gr,{relatedTarget:0}),xo=ct(pg),hg=je({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),mg=ct(hg),fg=je({},Ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gg=ct(fg),yg=je({},Ds,{data:0}),Gd=ct(yg),vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wg[e])?!!t[e]:!1}function lc(){return bg}var kg=je({},Gr,{key:function(e){if(e.key){var t=vg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jg=ct(kg),Sg=je({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=ct(Sg),Cg=je({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),Tg=ct(Cg),Ng=je({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Eg=ct(Ng),Pg=je({},Ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=ct(Pg),Ig=[9,13,27,32],cc=Qt&&"CompositionEvent"in window,vr=null;Qt&&"documentMode"in document&&(vr=document.documentMode);var Dg=Qt&&"TextEvent"in window&&!vr,nh=Qt&&(!cc||vr&&8<vr&&11>=vr),Xd=" ",Kd=!1;function sh(e,t){switch(e){case"keyup":return Ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var is=!1;function Rg(e,t){switch(e){case"compositionend":return rh(t);case"keypress":return t.which!==32?null:(Kd=!0,Xd);case"textInput":return e=t.data,e===Xd&&Kd?null:e;default:return null}}function Lg(e,t){if(is)return e==="compositionend"||!cc&&sh(e,t)?(e=th(),Hi=ac=gn=null,is=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nh&&t.locale!=="ko"?null:t.data;default:return null}}var _g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_g[e.type]:t==="textarea"}function ih(e,t,n,r){Op(r),t=sa(t,"onChange"),0<t.length&&(n=new oc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var xr=null,Rr=null;function Og(e){gh(e,0)}function Pa(e){var t=ls(e);if(Pp(t))return e}function Mg(e,t){if(e==="change")return t}var ah=!1;if(Qt){var wo;if(Qt){var bo="oninput"in document;if(!bo){var Qd=document.createElement("div");Qd.setAttribute("oninput","return;"),bo=typeof Qd.oninput=="function"}wo=bo}else wo=!1;ah=wo&&(!document.documentMode||9<document.documentMode)}function Zd(){xr&&(xr.detachEvent("onpropertychange",oh),Rr=xr=null)}function oh(e){if(e.propertyName==="value"&&Pa(Rr)){var t=[];ih(t,Rr,e,tc(e)),Up(Og,t)}}function Fg(e,t,n){e==="focusin"?(Zd(),xr=t,Rr=n,xr.attachEvent("onpropertychange",oh)):e==="focusout"&&Zd()}function zg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pa(Rr)}function Ug(e,t){if(e==="click")return Pa(t)}function Hg(e,t){if(e==="input"||e==="change")return Pa(t)}function Bg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Bg;function Lr(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Go.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var n=eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eu(n)}}function lh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ch(){for(var e=window,t=Ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ki(e.document)}return t}function dc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wg(e){var t=ch(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lh(n.ownerDocument.documentElement,n)){if(r!==null&&dc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=tu(n,o);var l=tu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yg=Qt&&"documentMode"in document&&11>=document.documentMode,as=null,pl=null,wr=null,hl=!1;function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hl||as==null||as!==Ki(r)||(r=as,"selectionStart"in r&&dc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wr&&Lr(wr,r)||(wr=r,r=sa(pl,"onSelect"),0<r.length&&(t=new oc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=as)))}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var os={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},ko={},dh={};Qt&&(dh=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Aa(e){if(ko[e])return ko[e];if(!os[e])return e;var t=os[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in dh)return ko[e]=t[n];return e}var uh=Aa("animationend"),ph=Aa("animationiteration"),hh=Aa("animationstart"),mh=Aa("transitionend"),fh=new Map,su="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){fh.set(e,t),Kn(t,[e])}for(var jo=0;jo<su.length;jo++){var So=su[jo],Vg=So.toLowerCase(),$g=So[0].toUpperCase()+So.slice(1);Pn(Vg,"on"+$g)}Pn(uh,"onAnimationEnd");Pn(ph,"onAnimationIteration");Pn(hh,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(mh,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vf(r,t,void 0,e),e.currentTarget=null}function gh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var c=r[l],p=c.instance,h=c.currentTarget;if(c=c.listener,p!==o&&i.isPropagationStopped())break e;ru(i,c,h),o=p}else for(l=0;l<r.length;l++){if(c=r[l],p=c.instance,h=c.currentTarget,c=c.listener,p!==o&&i.isPropagationStopped())break e;ru(i,c,h),o=p}}}if(Qi)throw e=ll,Qi=!1,ll=null,e}function fe(e,t){var n=t[vl];n===void 0&&(n=t[vl]=new Set);var r=e+"__bubble";n.has(r)||(yh(t,e,2,!1),n.add(r))}function Co(e,t,n){var r=0;t&&(r|=4),yh(n,e,r,t)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[Pi]){e[Pi]=!0,Sp.forEach(function(n){n!=="selectionchange"&&(Gg.has(n)||Co(n,!1,e),Co(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pi]||(t[Pi]=!0,Co("selectionchange",!1,t))}}function yh(e,t,n,r){switch(eh(t)){case 1:var i=og;break;case 4:i=lg;break;default:i=ic}n=i.bind(null,t,n,e),i=void 0,!ol||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function To(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var p=l.tag;if((p===3||p===4)&&(p=l.stateNode.containerInfo,p===i||p.nodeType===8&&p.parentNode===i))return;l=l.return}for(;c!==null;){if(l=Un(c),l===null)return;if(p=l.tag,p===5||p===6){r=o=l;continue e}c=c.parentNode}}r=r.return}Up(function(){var h=o,S=tc(n),w=[];e:{var x=fh.get(e);if(x!==void 0){var j=oc,C=e;switch(e){case"keypress":if(Bi(n)===0)break e;case"keydown":case"keyup":j=jg;break;case"focusin":C="focus",j=xo;break;case"focusout":C="blur",j=xo;break;case"beforeblur":case"afterblur":j=xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=$d;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Tg;break;case uh:case ph:case hh:j=mg;break;case mh:j=Eg;break;case"scroll":j=cg;break;case"wheel":j=Ag;break;case"copy":case"cut":case"paste":j=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=qd}var A=(t&4)!==0,L=!A&&e==="scroll",g=A?x!==null?x+"Capture":null:x;A=[];for(var m=h,k;m!==null;){k=m;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,g!==null&&(D=Pr(m,g),D!=null&&A.push(Or(m,D,k)))),L)break;m=m.return}0<A.length&&(x=new j(x,C,null,n,S),w.push({event:x,listeners:A}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",x&&n!==il&&(C=n.relatedTarget||n.fromElement)&&(Un(C)||C[Zt]))break e;if((j||x)&&(x=S.window===S?S:(x=S.ownerDocument)?x.defaultView||x.parentWindow:window,j?(C=n.relatedTarget||n.toElement,j=h,C=C?Un(C):null,C!==null&&(L=Jn(C),C!==L||C.tag!==5&&C.tag!==6)&&(C=null)):(j=null,C=h),j!==C)){if(A=$d,D="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=qd,D="onPointerLeave",g="onPointerEnter",m="pointer"),L=j==null?x:ls(j),k=C==null?x:ls(C),x=new A(D,m+"leave",j,n,S),x.target=L,x.relatedTarget=k,D=null,Un(S)===h&&(A=new A(g,m+"enter",C,n,S),A.target=k,A.relatedTarget=L,D=A),L=D,j&&C)t:{for(A=j,g=C,m=0,k=A;k;k=ns(k))m++;for(k=0,D=g;D;D=ns(D))k++;for(;0<m-k;)A=ns(A),m--;for(;0<k-m;)g=ns(g),k--;for(;m--;){if(A===g||g!==null&&A===g.alternate)break t;A=ns(A),g=ns(g)}A=null}else A=null;j!==null&&iu(w,x,j,A,!1),C!==null&&L!==null&&iu(w,L,C,A,!0)}}e:{if(x=h?ls(h):window,j=x.nodeName&&x.nodeName.toLowerCase(),j==="select"||j==="input"&&x.type==="file")var _=Mg;else if(Jd(x))if(ah)_=Hg;else{_=zg;var M=Fg}else(j=x.nodeName)&&j.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(_=Ug);if(_&&(_=_(e,h))){ih(w,_,n,S);break e}M&&M(e,x,h),e==="focusout"&&(M=x._wrapperState)&&M.controlled&&x.type==="number"&&el(x,"number",x.value)}switch(M=h?ls(h):window,e){case"focusin":(Jd(M)||M.contentEditable==="true")&&(as=M,pl=h,wr=null);break;case"focusout":wr=pl=as=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,nu(w,n,S);break;case"selectionchange":if(Yg)break;case"keydown":case"keyup":nu(w,n,S)}var b;if(cc)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else is?sh(e,n)&&(y="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(nh&&n.locale!=="ko"&&(is||y!=="onCompositionStart"?y==="onCompositionEnd"&&is&&(b=th()):(gn=S,ac="value"in gn?gn.value:gn.textContent,is=!0)),M=sa(h,y),0<M.length&&(y=new Gd(y,e,null,n,S),w.push({event:y,listeners:M}),b?y.data=b:(b=rh(n),b!==null&&(y.data=b)))),(b=Dg?Rg(e,n):Lg(e,n))&&(h=sa(h,"onBeforeInput"),0<h.length&&(S=new Gd("onBeforeInput","beforeinput",null,n,S),w.push({event:S,listeners:h}),S.data=b))}gh(w,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sa(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pr(e,n),o!=null&&r.unshift(Or(e,o,i)),o=Pr(e,t),o!=null&&r.push(Or(e,o,i))),e=e.return}return r}function ns(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function iu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var c=n,p=c.alternate,h=c.stateNode;if(p!==null&&p===r)break;c.tag===5&&h!==null&&(c=h,i?(p=Pr(n,o),p!=null&&l.unshift(Or(n,p,c))):i||(p=Pr(n,o),p!=null&&l.push(Or(n,p,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var qg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function au(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Xg,"")}function Ai(e,t,n){if(t=au(t),au(e)!==t&&n)throw Error(U(425))}function ra(){}var ml=null,fl=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yl=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(e){return ou.resolve(null).then(e).catch(Qg)}:yl;function Qg(e){setTimeout(function(){throw e})}function No(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Dr(t)}function bn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Rs,Mr="__reactProps$"+Rs,Zt="__reactContainer$"+Rs,vl="__reactEvents$"+Rs,Zg="__reactListeners$"+Rs,e0="__reactHandles$"+Rs;function Un(e){var t=e[Ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[Ft])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function qr(e){return e=e[Ft]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ls(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Ia(e){return e[Mr]||null}var xl=[],cs=-1;function An(e){return{current:e}}function ge(e){0>cs||(e.current=xl[cs],xl[cs]=null,cs--)}function he(e,t){cs++,xl[cs]=e.current,e.current=t}var En={},Ve=An(En),et=An(!1),Vn=En;function Ss(e,t){var n=e.type.contextTypes;if(!n)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function ia(){ge(et),ge(Ve)}function cu(e,t,n){if(Ve.current!==En)throw Error(U(168));he(Ve,t),he(et,n)}function vh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,Ff(e)||"Unknown",i));return je({},n,r)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Vn=Ve.current,he(Ve,e),he(et,et.current),!0}function du(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=vh(e,t,Vn),r.__reactInternalMemoizedMergedChildContext=e,ge(et),ge(Ve),he(Ve,e)):ge(et),he(et,n)}var Vt=null,Da=!1,Eo=!1;function xh(e){Vt===null?Vt=[e]:Vt.push(e)}function t0(e){Da=!0,xh(e)}function In(){if(!Eo&&Vt!==null){Eo=!0;var e=0,t=ce;try{var n=Vt;for(ce=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vt=null,Da=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(e+1)),Yp(nc,In),i}finally{ce=t,Eo=!1}}return null}var ds=[],us=0,oa=null,la=0,pt=[],ht=0,$n=null,$t=1,Gt="";function Fn(e,t){ds[us++]=la,ds[us++]=oa,oa=e,la=t}function wh(e,t,n){pt[ht++]=$t,pt[ht++]=Gt,pt[ht++]=$n,$n=e;var r=$t;e=Gt;var i=32-At(r)-1;r&=~(1<<i),n+=1;var o=32-At(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,$t=1<<32-At(t)+i|n<<i|r,Gt=o+e}else $t=1<<o|n<<i|r,Gt=e}function uc(e){e.return!==null&&(Fn(e,1),wh(e,1,0))}function pc(e){for(;e===oa;)oa=ds[--us],ds[us]=null,la=ds[--us],ds[us]=null;for(;e===$n;)$n=pt[--ht],pt[ht]=null,Gt=pt[--ht],pt[ht]=null,$t=pt[--ht],pt[ht]=null}var at=null,it=null,ve=!1,jt=null;function bh(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,it=bn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:$t,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,it=null,!0):!1;default:return!1}}function wl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bl(e){if(ve){var t=it;if(t){var n=t;if(!uu(e,t)){if(wl(e))throw Error(U(418));t=bn(n.nextSibling);var r=at;t&&uu(e,t)?bh(r,n):(e.flags=e.flags&-4097|2,ve=!1,at=e)}}else{if(wl(e))throw Error(U(418));e.flags=e.flags&-4097|2,ve=!1,at=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Ii(e){if(e!==at)return!1;if(!ve)return pu(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=it)){if(wl(e))throw kh(),Error(U(418));for(;t;)bh(e,t),t=bn(t.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=bn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=at?bn(e.stateNode.nextSibling):null;return!0}function kh(){for(var e=it;e;)e=bn(e.nextSibling)}function Cs(){it=at=null,ve=!1}function hc(e){jt===null?jt=[e]:jt.push(e)}var n0=sn.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var c=i.refs;l===null?delete c[o]:c[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Di(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hu(e){var t=e._init;return t(e._payload)}function jh(e){function t(g,m){if(e){var k=g.deletions;k===null?(g.deletions=[m],g.flags|=16):k.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Cn(g,m),g.index=0,g.sibling=null,g}function o(g,m,k){return g.index=k,e?(k=g.alternate,k!==null?(k=k.index,k<m?(g.flags|=2,m):k):(g.flags|=2,m)):(g.flags|=1048576,m)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,m,k,D){return m===null||m.tag!==6?(m=_o(k,g.mode,D),m.return=g,m):(m=i(m,k),m.return=g,m)}function p(g,m,k,D){var _=k.type;return _===rs?S(g,m,k.props.children,D,k.key):m!==null&&(m.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===pn&&hu(_)===m.type)?(D=i(m,k.props),D.ref=lr(g,m,k),D.return=g,D):(D=Xi(k.type,k.key,k.props,null,g.mode,D),D.ref=lr(g,m,k),D.return=g,D)}function h(g,m,k,D){return m===null||m.tag!==4||m.stateNode.containerInfo!==k.containerInfo||m.stateNode.implementation!==k.implementation?(m=Oo(k,g.mode,D),m.return=g,m):(m=i(m,k.children||[]),m.return=g,m)}function S(g,m,k,D,_){return m===null||m.tag!==7?(m=Yn(k,g.mode,D,_),m.return=g,m):(m=i(m,k),m.return=g,m)}function w(g,m,k){if(typeof m=="string"&&m!==""||typeof m=="number")return m=_o(""+m,g.mode,k),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bi:return k=Xi(m.type,m.key,m.props,null,g.mode,k),k.ref=lr(g,null,m),k.return=g,k;case ss:return m=Oo(m,g.mode,k),m.return=g,m;case pn:var D=m._init;return w(g,D(m._payload),k)}if(pr(m)||sr(m))return m=Yn(m,g.mode,k,null),m.return=g,m;Di(g,m)}return null}function x(g,m,k,D){var _=m!==null?m.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return _!==null?null:c(g,m,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case bi:return k.key===_?p(g,m,k,D):null;case ss:return k.key===_?h(g,m,k,D):null;case pn:return _=k._init,x(g,m,_(k._payload),D)}if(pr(k)||sr(k))return _!==null?null:S(g,m,k,D,null);Di(g,k)}return null}function j(g,m,k,D,_){if(typeof D=="string"&&D!==""||typeof D=="number")return g=g.get(k)||null,c(m,g,""+D,_);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case bi:return g=g.get(D.key===null?k:D.key)||null,p(m,g,D,_);case ss:return g=g.get(D.key===null?k:D.key)||null,h(m,g,D,_);case pn:var M=D._init;return j(g,m,k,M(D._payload),_)}if(pr(D)||sr(D))return g=g.get(k)||null,S(m,g,D,_,null);Di(m,D)}return null}function C(g,m,k,D){for(var _=null,M=null,b=m,y=m=0,T=null;b!==null&&y<k.length;y++){b.index>y?(T=b,b=null):T=b.sibling;var N=x(g,b,k[y],D);if(N===null){b===null&&(b=T);break}e&&b&&N.alternate===null&&t(g,b),m=o(N,m,y),M===null?_=N:M.sibling=N,M=N,b=T}if(y===k.length)return n(g,b),ve&&Fn(g,y),_;if(b===null){for(;y<k.length;y++)b=w(g,k[y],D),b!==null&&(m=o(b,m,y),M===null?_=b:M.sibling=b,M=b);return ve&&Fn(g,y),_}for(b=r(g,b);y<k.length;y++)T=j(b,g,y,k[y],D),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?y:T.key),m=o(T,m,y),M===null?_=T:M.sibling=T,M=T);return e&&b.forEach(function(P){return t(g,P)}),ve&&Fn(g,y),_}function A(g,m,k,D){var _=sr(k);if(typeof _!="function")throw Error(U(150));if(k=_.call(k),k==null)throw Error(U(151));for(var M=_=null,b=m,y=m=0,T=null,N=k.next();b!==null&&!N.done;y++,N=k.next()){b.index>y?(T=b,b=null):T=b.sibling;var P=x(g,b,N.value,D);if(P===null){b===null&&(b=T);break}e&&b&&P.alternate===null&&t(g,b),m=o(P,m,y),M===null?_=P:M.sibling=P,M=P,b=T}if(N.done)return n(g,b),ve&&Fn(g,y),_;if(b===null){for(;!N.done;y++,N=k.next())N=w(g,N.value,D),N!==null&&(m=o(N,m,y),M===null?_=N:M.sibling=N,M=N);return ve&&Fn(g,y),_}for(b=r(g,b);!N.done;y++,N=k.next())N=j(b,g,y,N.value,D),N!==null&&(e&&N.alternate!==null&&b.delete(N.key===null?y:N.key),m=o(N,m,y),M===null?_=N:M.sibling=N,M=N);return e&&b.forEach(function(E){return t(g,E)}),ve&&Fn(g,y),_}function L(g,m,k,D){if(typeof k=="object"&&k!==null&&k.type===rs&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case bi:e:{for(var _=k.key,M=m;M!==null;){if(M.key===_){if(_=k.type,_===rs){if(M.tag===7){n(g,M.sibling),m=i(M,k.props.children),m.return=g,g=m;break e}}else if(M.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===pn&&hu(_)===M.type){n(g,M.sibling),m=i(M,k.props),m.ref=lr(g,M,k),m.return=g,g=m;break e}n(g,M);break}else t(g,M);M=M.sibling}k.type===rs?(m=Yn(k.props.children,g.mode,D,k.key),m.return=g,g=m):(D=Xi(k.type,k.key,k.props,null,g.mode,D),D.ref=lr(g,m,k),D.return=g,g=D)}return l(g);case ss:e:{for(M=k.key;m!==null;){if(m.key===M)if(m.tag===4&&m.stateNode.containerInfo===k.containerInfo&&m.stateNode.implementation===k.implementation){n(g,m.sibling),m=i(m,k.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=Oo(k,g.mode,D),m.return=g,g=m}return l(g);case pn:return M=k._init,L(g,m,M(k._payload),D)}if(pr(k))return C(g,m,k,D);if(sr(k))return A(g,m,k,D);Di(g,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,k),m.return=g,g=m):(n(g,m),m=_o(k,g.mode,D),m.return=g,g=m),l(g)):n(g,m)}return L}var Ts=jh(!0),Sh=jh(!1),ca=An(null),da=null,ps=null,mc=null;function fc(){mc=ps=da=null}function gc(e){var t=ca.current;ge(ca),e._currentValue=t}function kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xs(e,t){da=e,mc=ps=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(mc!==e)if(e={context:e,memoizedValue:t,next:null},ps===null){if(da===null)throw Error(U(308));ps=e,da.dependencies={lanes:0,firstContext:e}}else ps=ps.next=e;return t}var Hn=null;function yc(e){Hn===null?Hn=[e]:Hn.push(e)}function Ch(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,yc(t)):(n.next=i.next,i.next=n),t.interleaved=n,en(e,r)}function en(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hn=!1;function vc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Th(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,en(e,n)}return i=r.interleaved,i===null?(t.next=t,yc(r)):(t.next=i.next,i.next=t),r.interleaved=t,en(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sc(e,n)}}function mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ua(e,t,n,r){var i=e.updateQueue;hn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var p=c,h=p.next;p.next=null,l===null?o=h:l.next=h,l=p;var S=e.alternate;S!==null&&(S=S.updateQueue,c=S.lastBaseUpdate,c!==l&&(c===null?S.firstBaseUpdate=h:c.next=h,S.lastBaseUpdate=p))}if(o!==null){var w=i.baseState;l=0,S=h=p=null,c=o;do{var x=c.lane,j=c.eventTime;if((r&x)===x){S!==null&&(S=S.next={eventTime:j,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var C=e,A=c;switch(x=t,j=n,A.tag){case 1:if(C=A.payload,typeof C=="function"){w=C.call(j,w,x);break e}w=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=A.payload,x=typeof C=="function"?C.call(j,w,x):C,x==null)break e;w=je({},w,x);break e;case 2:hn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[c]:x.push(c))}else j={eventTime:j,lane:x,tag:c.tag,payload:c.payload,callback:c.callback,next:null},S===null?(h=S=j,p=w):S=S.next=j,l|=x;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;x=c,c=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(S===null&&(p=w),i.baseState=p,i.firstBaseUpdate=h,i.lastBaseUpdate=S,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);qn|=l,e.lanes=l,e.memoizedState=w}}function fu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var Xr={},Ut=An(Xr),Fr=An(Xr),zr=An(Xr);function Bn(e){if(e===Xr)throw Error(U(174));return e}function xc(e,t){switch(he(zr,t),he(Fr,e),he(Ut,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nl(t,e)}ge(Ut),he(Ut,t)}function Ns(){ge(Ut),ge(Fr),ge(zr)}function Nh(e){Bn(zr.current);var t=Bn(Ut.current),n=nl(t,e.type);t!==n&&(he(Fr,e),he(Ut,n))}function wc(e){Fr.current===e&&(ge(Ut),ge(Fr))}var be=An(0);function pa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Po=[];function bc(){for(var e=0;e<Po.length;e++)Po[e]._workInProgressVersionPrimary=null;Po.length=0}var Yi=sn.ReactCurrentDispatcher,Ao=sn.ReactCurrentBatchConfig,Gn=0,ke=null,Pe=null,Ie=null,ha=!1,br=!1,Ur=0,s0=0;function Be(){throw Error(U(321))}function kc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function jc(e,t,n,r,i,o){if(Gn=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yi.current=e===null||e.memoizedState===null?o0:l0,e=n(r,i),br){o=0;do{if(br=!1,Ur=0,25<=o)throw Error(U(301));o+=1,Ie=Pe=null,t.updateQueue=null,Yi.current=c0,e=n(r,i)}while(br)}if(Yi.current=ma,t=Pe!==null&&Pe.next!==null,Gn=0,Ie=Pe=ke=null,ha=!1,t)throw Error(U(300));return e}function Sc(){var e=Ur!==0;return Ur=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ke.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function yt(){if(Pe===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Ie===null?ke.memoizedState:Ie.next;if(t!==null)Ie=t,Pe=e;else{if(e===null)throw Error(U(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ie===null?ke.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Hr(e,t){return typeof t=="function"?t(e):t}function Io(e){var t=yt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=Pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var c=l=null,p=null,h=o;do{var S=h.lane;if((Gn&S)===S)p!==null&&(p=p.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var w={lane:S,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};p===null?(c=p=w,l=r):p=p.next=w,ke.lanes|=S,qn|=S}h=h.next}while(h!==null&&h!==o);p===null?l=r:p.next=c,Dt(r,t.memoizedState)||(Ze=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=p,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Do(e){var t=yt(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Dt(o,t.memoizedState)||(Ze=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Eh(){}function Ph(e,t){var n=ke,r=yt(),i=t(),o=!Dt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ze=!0),r=r.queue,Cc(Dh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ie!==null&&Ie.memoizedState.tag&1){if(n.flags|=2048,Br(9,Ih.bind(null,n,r,i,t),void 0,null),De===null)throw Error(U(349));Gn&30||Ah(n,t,i)}return i}function Ah(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ih(e,t,n,r){t.value=n,t.getSnapshot=r,Rh(t)&&Lh(e)}function Dh(e,t,n){return n(function(){Rh(t)&&Lh(e)})}function Rh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Lh(e){var t=en(e,1);t!==null&&It(t,e,1,-1)}function gu(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hr,lastRenderedState:e},t.queue=e,e=e.dispatch=a0.bind(null,ke,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _h(){return yt().memoizedState}function Vi(e,t,n,r){var i=Ot();ke.flags|=e,i.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function Ra(e,t,n,r){var i=yt();r=r===void 0?null:r;var o=void 0;if(Pe!==null){var l=Pe.memoizedState;if(o=l.destroy,r!==null&&kc(r,l.deps)){i.memoizedState=Br(t,n,o,r);return}}ke.flags|=e,i.memoizedState=Br(1|t,n,o,r)}function yu(e,t){return Vi(8390656,8,e,t)}function Cc(e,t){return Ra(2048,8,e,t)}function Oh(e,t){return Ra(4,2,e,t)}function Mh(e,t){return Ra(4,4,e,t)}function Fh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zh(e,t,n){return n=n!=null?n.concat([e]):null,Ra(4,4,Fh.bind(null,t,e),n)}function Tc(){}function Uh(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hh(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&kc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bh(e,t,n){return Gn&21?(Dt(n,t)||(n=Gp(),ke.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=n)}function r0(e,t){var n=ce;ce=n!==0&&4>n?n:4,e(!0);var r=Ao.transition;Ao.transition={};try{e(!1),t()}finally{ce=n,Ao.transition=r}}function Wh(){return yt().memoizedState}function i0(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yh(e))Vh(t,n);else if(n=Ch(e,t,n,r),n!==null){var i=Ge();It(n,e,r,i),$h(n,t,r)}}function a0(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yh(e))Vh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,c=o(l,n);if(i.hasEagerState=!0,i.eagerState=c,Dt(c,l)){var p=t.interleaved;p===null?(i.next=i,yc(t)):(i.next=p.next,p.next=i),t.interleaved=i;return}}catch{}finally{}n=Ch(e,t,i,r),n!==null&&(i=Ge(),It(n,e,r,i),$h(n,t,r))}}function Yh(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Vh(e,t){br=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $h(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sc(e,n)}}var ma={readContext:gt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},o0={readContext:gt,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vi(4194308,4,Fh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vi(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=i0.bind(null,ke,e),[r.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:gu,useDebugValue:Tc,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=gu(!1),t=e[0];return e=r0.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ke,i=Ot();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),De===null)throw Error(U(349));Gn&30||Ah(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,yu(Dh.bind(null,r,o,e),[e]),r.flags|=2048,Br(9,Ih.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ot(),t=De.identifierPrefix;if(ve){var n=Gt,r=$t;n=(r&~(1<<32-At(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=s0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},l0={readContext:gt,useCallback:Uh,useContext:gt,useEffect:Cc,useImperativeHandle:zh,useInsertionEffect:Oh,useLayoutEffect:Mh,useMemo:Hh,useReducer:Io,useRef:_h,useState:function(){return Io(Hr)},useDebugValue:Tc,useDeferredValue:function(e){var t=yt();return Bh(t,Pe.memoizedState,e)},useTransition:function(){var e=Io(Hr)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:Ph,useId:Wh,unstable_isNewReconciler:!1},c0={readContext:gt,useCallback:Uh,useContext:gt,useEffect:Cc,useImperativeHandle:zh,useInsertionEffect:Oh,useLayoutEffect:Mh,useMemo:Hh,useReducer:Do,useRef:_h,useState:function(){return Do(Hr)},useDebugValue:Tc,useDeferredValue:function(e){var t=yt();return Pe===null?t.memoizedState=e:Bh(t,Pe.memoizedState,e)},useTransition:function(){var e=Do(Hr)[0],t=yt().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:Ph,useId:Wh,unstable_isNewReconciler:!1};function bt(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var La={isMounted:function(e){return(e=e._reactInternals)?Jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=Sn(e),o=Jt(r,i);o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(It(t,e,i,r),Wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),i=Sn(e),o=Jt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(It(t,e,i,r),Wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=Sn(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,r),t!==null&&(It(t,e,r,n),Wi(t,e,r))}};function vu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,o):!0}function Gh(e,t,n){var r=!1,i=En,o=t.contextType;return typeof o=="object"&&o!==null?o=gt(o):(i=tt(t)?Vn:Ve.current,r=t.contextTypes,o=(r=r!=null)?Ss(e,i):En),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=La,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&La.enqueueReplaceState(t,t.state,null)}function Sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},vc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=gt(o):(o=tt(t)?Vn:Ve.current,i.context=Ss(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(jl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&La.enqueueReplaceState(i,i.state,null),ua(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Es(e,t){try{var n="",r=t;do n+=Mf(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ro(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d0=typeof WeakMap=="function"?WeakMap:Map;function qh(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ga||(ga=!0,_l=r),Cl(e,t)},n}function Xh(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Cl(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=S0.bind(null,e,t,n),t.then(e,e))}function bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var u0=sn.ReactCurrentOwner,Ze=!1;function $e(e,t,n,r){t.child=e===null?Sh(t,null,n,r):Ts(t,e.child,n,r)}function ju(e,t,n,r,i){n=n.render;var o=t.ref;return xs(t,i),r=jc(e,t,n,r,o,i),n=Sc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tn(e,t,i)):(ve&&n&&uc(t),t.flags|=1,$e(e,t,r,i),t.child)}function Su(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Lc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Kh(e,t,o,r,i)):(e=Xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(l,r)&&e.ref===t.ref)return tn(e,t,i)}return t.flags|=1,e=Cn(o,r),e.ref=t.ref,e.return=t,t.child=e}function Kh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Lr(o,r)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,tn(e,t,i)}return Tl(e,t,n,r,i)}function Jh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(ms,st),st|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(ms,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,he(ms,st),st|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,he(ms,st),st|=r;return $e(e,t,i,n),t.child}function Qh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,i){var o=tt(n)?Vn:Ve.current;return o=Ss(t,o),xs(t,i),n=jc(e,t,n,r,o,i),r=Sc(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,tn(e,t,i)):(ve&&r&&uc(t),t.flags|=1,$e(e,t,n,i),t.child)}function Cu(e,t,n,r,i){if(tt(n)){var o=!0;aa(t)}else o=!1;if(xs(t,i),t.stateNode===null)$i(e,t),Gh(t,n,r),Sl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var p=l.context,h=n.contextType;typeof h=="object"&&h!==null?h=gt(h):(h=tt(n)?Vn:Ve.current,h=Ss(t,h));var S=n.getDerivedStateFromProps,w=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function";w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==r||p!==h)&&xu(t,l,r,h),hn=!1;var x=t.memoizedState;l.state=x,ua(t,r,l,i),p=t.memoizedState,c!==r||x!==p||et.current||hn?(typeof S=="function"&&(jl(t,n,S,r),p=t.memoizedState),(c=hn||vu(t,n,c,r,x,p,h))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=p),l.props=r,l.state=p,l.context=h,r=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Th(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:bt(t.type,c),l.props=h,w=t.pendingProps,x=l.context,p=n.contextType,typeof p=="object"&&p!==null?p=gt(p):(p=tt(n)?Vn:Ve.current,p=Ss(t,p));var j=n.getDerivedStateFromProps;(S=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==w||x!==p)&&xu(t,l,r,p),hn=!1,x=t.memoizedState,l.state=x,ua(t,r,l,i);var C=t.memoizedState;c!==w||x!==C||et.current||hn?(typeof j=="function"&&(jl(t,n,j,r),C=t.memoizedState),(h=hn||vu(t,n,h,r,x,C,p)||!1)?(S||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,C,p),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,C,p)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=C),l.props=r,l.state=C,l.context=p,r=h):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,o,i)}function Nl(e,t,n,r,i,o){Qh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&du(t,n,!1),tn(e,t,o);r=t.stateNode,u0.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ts(t,e.child,null,o),t.child=Ts(t,null,c,o)):$e(e,t,c,o),t.memoizedState=r.state,i&&du(t,n,!0),t.child}function Zh(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),xc(e,t.containerInfo)}function Tu(e,t,n,r,i){return Cs(),hc(i),t.flags|=256,$e(e,t,n,r),t.child}var El={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function em(e,t,n){var r=t.pendingProps,i=be.current,o=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),he(be,i&1),e===null)return bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ma(l,r,0,null),e=Yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Pl(n),t.memoizedState=El,e):Nc(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return p0(e,t,l,r,c,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,c=i.sibling;var p={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=p,t.deletions=null):(r=Cn(i,p),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=Cn(c,o):(o=Yn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Pl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=El,r}return o=e.child,e=o.sibling,r=Cn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nc(e,t){return t=Ma({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ri(e,t,n,r){return r!==null&&hc(r),Ts(t,e.child,null,n),e=Nc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ro(Error(U(422))),Ri(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ma({mode:"visible",children:r.children},i,0,null),o=Yn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ts(t,e.child,null,l),t.child.memoizedState=Pl(l),t.memoizedState=El,o);if(!(t.mode&1))return Ri(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(U(419)),r=Ro(o,r,void 0),Ri(e,t,l,r)}if(c=(l&e.childLanes)!==0,Ze||c){if(r=De,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,en(e,i),It(r,e,i,-1))}return Rc(),r=Ro(Error(U(421))),Ri(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=C0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,it=bn(i.nextSibling),at=t,ve=!0,jt=null,e!==null&&(pt[ht++]=$t,pt[ht++]=Gt,pt[ht++]=$n,$t=e.id,Gt=e.overflow,$n=t),t=Nc(t,r.children),t.flags|=4096,t)}function Nu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kl(e.return,t,n)}function Lo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function tm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if($e(e,t,r.children,n),r=be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nu(e,n,t);else if(e.tag===19)Nu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(he(be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Lo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Lo(t,!0,n,null,o);break;case"together":Lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $i(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function tn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function h0(e,t,n){switch(t.tag){case 3:Zh(t),Cs();break;case 5:Nh(t);break;case 1:tt(t.type)&&aa(t);break;case 4:xc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;he(ca,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(he(be,be.current&1),t.flags|=128,null):n&t.child.childLanes?em(e,t,n):(he(be,be.current&1),e=tn(e,t,n),e!==null?e.sibling:null);he(be,be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return tm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(be,be.current),r)break;return null;case 22:case 23:return t.lanes=0,Jh(e,t,n)}return tn(e,t,n)}var nm,Al,sm,rm;nm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Al=function(){};sm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bn(Ut.current);var o=null;switch(n){case"input":i=Qo(e,i),r=Qo(e,r),o=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),o=[];break;case"textarea":i=tl(e,i),r=tl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ra)}sl(n,r);var l;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Nr.hasOwnProperty(h)?o||(o=[]):(o=o||[]).push(h,null));for(h in r){var p=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&p!==c&&(p!=null||c!=null))if(h==="style")if(c){for(l in c)!c.hasOwnProperty(l)||p&&p.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in p)p.hasOwnProperty(l)&&c[l]!==p[l]&&(n||(n={}),n[l]=p[l])}else n||(o||(o=[]),o.push(h,n)),n=p;else h==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,c=c?c.__html:void 0,p!=null&&c!==p&&(o=o||[]).push(h,p)):h==="children"?typeof p!="string"&&typeof p!="number"||(o=o||[]).push(h,""+p):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(h)?(p!=null&&h==="onScroll"&&fe("scroll",e),o||c===p||(o=[])):(o=o||[]).push(h,p))}n&&(o=o||[]).push("style",n);var h=o;(t.updateQueue=h)&&(t.flags|=4)}};rm=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function m0(e,t,n){var r=t.pendingProps;switch(pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return tt(t.type)&&ia(),We(t),null;case 3:return r=t.stateNode,Ns(),ge(et),ge(Ve),bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(Fl(jt),jt=null))),Al(e,t),We(t),null;case 5:wc(t);var i=Bn(zr.current);if(n=t.type,e!==null&&t.stateNode!=null)sm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return We(t),null}if(e=Bn(Ut.current),Ii(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ft]=t,r[Mr]=o,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<mr.length;i++)fe(mr[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Od(r,o),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},fe("invalid",r);break;case"textarea":Fd(r,o),fe("invalid",r)}sl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&Ai(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&Ai(r.textContent,c,e),i=["children",""+c]):Nr.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&fe("scroll",r)}switch(n){case"input":ki(r),Md(r,o,!0);break;case"textarea":ki(r),zd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ra)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ft]=t,e[Mr]=r,nm(e,t,!1,!1),t.stateNode=e;e:{switch(l=rl(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<mr.length;i++)fe(mr[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":Od(e,r),i=Qo(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Fd(e,r),i=tl(e,r),fe("invalid",e);break;default:i=r}sl(n,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var p=c[o];o==="style"?_p(e,p):o==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Rp(e,p)):o==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&Er(e,p):typeof p=="number"&&Er(e,""+p):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Nr.hasOwnProperty(o)?p!=null&&o==="onScroll"&&fe("scroll",e):p!=null&&Jl(e,o,p,l))}switch(n){case"input":ki(e),Md(e,r,!1);break;case"textarea":ki(e),zd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?fs(e,!!r.multiple,o,!1):r.defaultValue!=null&&fs(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)rm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Bn(zr.current),Bn(Ut.current),Ii(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ft]=t,(o=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Ai(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ai(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=t,t.stateNode=r}return We(t),null;case 13:if(ge(be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&it!==null&&t.mode&1&&!(t.flags&128))kh(),Cs(),t.flags|=98560,o=!1;else if(o=Ii(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(U(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(U(317));o[Ft]=t}else Cs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else jt!==null&&(Fl(jt),jt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||be.current&1?Ae===0&&(Ae=3):Rc())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Ns(),Al(e,t),e===null&&_r(t.stateNode.containerInfo),We(t),null;case 10:return gc(t.type._context),We(t),null;case 17:return tt(t.type)&&ia(),We(t),null;case 19:if(ge(be),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)cr(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=pa(e),l!==null){for(t.flags|=128,cr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(be,be.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ne()>Ps&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304)}else{if(!r)if(e=pa(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ve)return We(t),null}else 2*Ne()-o.renderingStartTime>Ps&&n!==1073741824&&(t.flags|=128,r=!0,cr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ne(),t.sibling=null,n=be.current,he(be,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Dc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function f0(e,t){switch(pc(t),t.tag){case 1:return tt(t.type)&&ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ns(),ge(et),ge(Ve),bc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wc(t),null;case 13:if(ge(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Cs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(be),null;case 4:return Ns(),null;case 10:return gc(t.type._context),null;case 22:case 23:return Dc(),null;case 24:return null;default:return null}}var Li=!1,Ye=!1,g0=typeof WeakSet=="function"?WeakSet:Set,q=null;function hs(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function Il(e,t,n){try{n()}catch(r){Se(e,t,r)}}var Eu=!1;function y0(e,t){if(ml=ta,e=ch(),dc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,c=-1,p=-1,h=0,S=0,w=e,x=null;t:for(;;){for(var j;w!==n||i!==0&&w.nodeType!==3||(c=l+i),w!==o||r!==0&&w.nodeType!==3||(p=l+r),w.nodeType===3&&(l+=w.nodeValue.length),(j=w.firstChild)!==null;)x=w,w=j;for(;;){if(w===e)break t;if(x===n&&++h===i&&(c=l),x===o&&++S===r&&(p=l),(j=w.nextSibling)!==null)break;w=x,x=w.parentNode}w=j}n=c===-1||p===-1?null:{start:c,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(fl={focusedElem:e,selectionRange:n},ta=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var A=C.memoizedProps,L=C.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?A:bt(t.type,A),L);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var k=t.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Se(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return C=Eu,Eu=!1,C}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Il(t,n,o)}i=i.next}while(i!==r)}}function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function im(e){var t=e.alternate;t!==null&&(e.alternate=null,im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ft],delete t[Mr],delete t[vl],delete t[Zg],delete t[e0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function am(e){return e.tag===5||e.tag===3||e.tag===4}function Pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ra));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}function Ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ll(e,t,n),e=e.sibling;e!==null;)Ll(e,t,n),e=e.sibling}var Me=null,kt=!1;function un(e,t,n){for(n=n.child;n!==null;)om(e,t,n),n=n.sibling}function om(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Na,n)}catch{}switch(n.tag){case 5:Ye||hs(n,t);case 6:var r=Me,i=kt;Me=null,un(e,t,n),Me=r,kt=i,Me!==null&&(kt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(kt?(e=Me,n=n.stateNode,e.nodeType===8?No(e.parentNode,n):e.nodeType===1&&No(e,n),Dr(e)):No(Me,n.stateNode));break;case 4:r=Me,i=kt,Me=n.stateNode.containerInfo,kt=!0,un(e,t,n),Me=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Il(n,t,l),i=i.next}while(i!==r)}un(e,t,n);break;case 1:if(!Ye&&(hs(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Se(n,t,c)}un(e,t,n);break;case 21:un(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,un(e,t,n),Ye=r):un(e,t,n);break;default:un(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new g0),t.forEach(function(r){var i=T0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Me=c.stateNode,kt=!1;break e;case 3:Me=c.stateNode.containerInfo,kt=!0;break e;case 4:Me=c.stateNode.containerInfo,kt=!0;break e}c=c.return}if(Me===null)throw Error(U(160));om(o,l,i),Me=null,kt=!1;var p=i.alternate;p!==null&&(p.return=null),i.return=null}catch(h){Se(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lm(t,e),t=t.sibling}function lm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),_t(e),r&4){try{kr(3,e,e.return),_a(3,e)}catch(A){Se(e,e.return,A)}try{kr(5,e,e.return)}catch(A){Se(e,e.return,A)}}break;case 1:wt(t,e),_t(e),r&512&&n!==null&&hs(n,n.return);break;case 5:if(wt(t,e),_t(e),r&512&&n!==null&&hs(n,n.return),e.flags&32){var i=e.stateNode;try{Er(i,"")}catch(A){Se(e,e.return,A)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,c=e.type,p=e.updateQueue;if(e.updateQueue=null,p!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Ap(i,o),rl(c,l);var h=rl(c,o);for(l=0;l<p.length;l+=2){var S=p[l],w=p[l+1];S==="style"?_p(i,w):S==="dangerouslySetInnerHTML"?Rp(i,w):S==="children"?Er(i,w):Jl(i,S,w,h)}switch(c){case"input":Zo(i,o);break;case"textarea":Ip(i,o);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var j=o.value;j!=null?fs(i,!!o.multiple,j,!1):x!==!!o.multiple&&(o.defaultValue!=null?fs(i,!!o.multiple,o.defaultValue,!0):fs(i,!!o.multiple,o.multiple?[]:"",!1))}i[Mr]=o}catch(A){Se(e,e.return,A)}}break;case 6:if(wt(t,e),_t(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(A){Se(e,e.return,A)}}break;case 3:if(wt(t,e),_t(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(A){Se(e,e.return,A)}break;case 4:wt(t,e),_t(e);break;case 13:wt(t,e),_t(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ac=Ne())),r&4&&Au(e);break;case 22:if(S=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(h=Ye)||S,wt(t,e),Ye=h):wt(t,e),_t(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!S&&e.mode&1)for(q=e,S=e.child;S!==null;){for(w=q=S;q!==null;){switch(x=q,j=x.child,x.tag){case 0:case 11:case 14:case 15:kr(4,x,x.return);break;case 1:hs(x,x.return);var C=x.stateNode;if(typeof C.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(A){Se(r,n,A)}}break;case 5:hs(x,x.return);break;case 22:if(x.memoizedState!==null){Du(w);continue}}j!==null?(j.return=x,q=j):Du(w)}S=S.sibling}e:for(S=null,w=e;;){if(w.tag===5){if(S===null){S=w;try{i=w.stateNode,h?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=w.stateNode,p=w.memoizedProps.style,l=p!=null&&p.hasOwnProperty("display")?p.display:null,c.style.display=Lp("display",l))}catch(A){Se(e,e.return,A)}}}else if(w.tag===6){if(S===null)try{w.stateNode.nodeValue=h?"":w.memoizedProps}catch(A){Se(e,e.return,A)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;S===w&&(S=null),w=w.return}S===w&&(S=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:wt(t,e),_t(e),r&4&&Au(e);break;case 21:break;default:wt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(am(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Er(i,""),r.flags&=-33);var o=Pu(e);Ll(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Pu(e);Rl(e,c,l);break;default:throw Error(U(161))}}catch(p){Se(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function v0(e,t,n){q=e,cm(e)}function cm(e,t,n){for(var r=(e.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Li;if(!l){var c=i.alternate,p=c!==null&&c.memoizedState!==null||Ye;c=Li;var h=Ye;if(Li=l,(Ye=p)&&!h)for(q=i;q!==null;)l=q,p=l.child,l.tag===22&&l.memoizedState!==null?Ru(i):p!==null?(p.return=l,q=p):Ru(i);for(;o!==null;)q=o,cm(o),o=o.sibling;q=i,Li=c,Ye=h}Iu(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):Iu(e)}}function Iu(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||_a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:bt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&fu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fu(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var p=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var S=h.memoizedState;if(S!==null){var w=S.dehydrated;w!==null&&Dr(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Ye||t.flags&512&&Dl(t)}catch(x){Se(t,t.return,x)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function Du(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Ru(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_a(4,t)}catch(p){Se(t,n,p)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(p){Se(t,i,p)}}var o=t.return;try{Dl(t)}catch(p){Se(t,o,p)}break;case 5:var l=t.return;try{Dl(t)}catch(p){Se(t,l,p)}}}catch(p){Se(t,t.return,p)}if(t===e){q=null;break}var c=t.sibling;if(c!==null){c.return=t.return,q=c;break}q=t.return}}var x0=Math.ceil,fa=sn.ReactCurrentDispatcher,Ec=sn.ReactCurrentOwner,ft=sn.ReactCurrentBatchConfig,ae=0,De=null,Ee=null,Fe=0,st=0,ms=An(0),Ae=0,Wr=null,qn=0,Oa=0,Pc=0,jr=null,Qe=null,Ac=0,Ps=1/0,Yt=null,ga=!1,_l=null,jn=null,_i=!1,yn=null,ya=0,Sr=0,Ol=null,Gi=-1,qi=0;function Ge(){return ae&6?Ne():Gi!==-1?Gi:Gi=Ne()}function Sn(e){return e.mode&1?ae&2&&Fe!==0?Fe&-Fe:n0.transition!==null?(qi===0&&(qi=Gp()),qi):(e=ce,e!==0||(e=window.event,e=e===void 0?16:eh(e.type)),e):1}function It(e,t,n,r){if(50<Sr)throw Sr=0,Ol=null,Error(U(185));$r(e,n,r),(!(ae&2)||e!==De)&&(e===De&&(!(ae&2)&&(Oa|=n),Ae===4&&fn(e,Fe)),nt(e,r),n===1&&ae===0&&!(t.mode&1)&&(Ps=Ne()+500,Da&&In()))}function nt(e,t){var n=e.callbackNode;ng(e,t);var r=ea(e,e===De?Fe:0);if(r===0)n!==null&&Bd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bd(n),t===1)e.tag===0?t0(Lu.bind(null,e)):xh(Lu.bind(null,e)),Jg(function(){!(ae&6)&&In()}),n=null;else{switch(qp(r)){case 1:n=nc;break;case 4:n=Vp;break;case 16:n=Zi;break;case 536870912:n=$p;break;default:n=Zi}n=ym(n,dm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function dm(e,t){if(Gi=-1,qi=0,ae&6)throw Error(U(327));var n=e.callbackNode;if(ws()&&e.callbackNode!==n)return null;var r=ea(e,e===De?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=va(e,r);else{t=r;var i=ae;ae|=2;var o=pm();(De!==e||Fe!==t)&&(Yt=null,Ps=Ne()+500,Wn(e,t));do try{k0();break}catch(c){um(e,c)}while(!0);fc(),fa.current=o,ae=i,Ee!==null?t=0:(De=null,Fe=0,t=Ae)}if(t!==0){if(t===2&&(i=cl(e),i!==0&&(r=i,t=Ml(e,i))),t===1)throw n=Wr,Wn(e,0),fn(e,r),nt(e,Ne()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!w0(i)&&(t=va(e,r),t===2&&(o=cl(e),o!==0&&(r=o,t=Ml(e,o))),t===1))throw n=Wr,Wn(e,0),fn(e,r),nt(e,Ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:zn(e,Qe,Yt);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=Ac+500-Ne(),10<t)){if(ea(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yl(zn.bind(null,e,Qe,Yt),t);break}zn(e,Qe,Yt);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-At(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x0(r/1960))-r,10<r){e.timeoutHandle=yl(zn.bind(null,e,Qe,Yt),r);break}zn(e,Qe,Yt);break;case 5:zn(e,Qe,Yt);break;default:throw Error(U(329))}}}return nt(e,Ne()),e.callbackNode===n?dm.bind(null,e):null}function Ml(e,t){var n=jr;return e.current.memoizedState.isDehydrated&&(Wn(e,t).flags|=256),e=va(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&Fl(t)),e}function Fl(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function w0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~Pc,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-At(t),r=1<<n;e[n]=-1,t&=~r}}function Lu(e){if(ae&6)throw Error(U(327));ws();var t=ea(e,0);if(!(t&1))return nt(e,Ne()),null;var n=va(e,t);if(e.tag!==0&&n===2){var r=cl(e);r!==0&&(t=r,n=Ml(e,r))}if(n===1)throw n=Wr,Wn(e,0),fn(e,t),nt(e,Ne()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,Qe,Yt),nt(e,Ne()),null}function Ic(e,t){var n=ae;ae|=1;try{return e(t)}finally{ae=n,ae===0&&(Ps=Ne()+500,Da&&In())}}function Xn(e){yn!==null&&yn.tag===0&&!(ae&6)&&ws();var t=ae;ae|=1;var n=ft.transition,r=ce;try{if(ft.transition=null,ce=1,e)return e()}finally{ce=r,ft.transition=n,ae=t,!(ae&6)&&In()}}function Dc(){st=ms.current,ge(ms)}function Wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kg(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ia();break;case 3:Ns(),ge(et),ge(Ve),bc();break;case 5:wc(r);break;case 4:Ns();break;case 13:ge(be);break;case 19:ge(be);break;case 10:gc(r.type._context);break;case 22:case 23:Dc()}n=n.return}if(De=e,Ee=e=Cn(e.current,null),Fe=st=t,Ae=0,Wr=null,Pc=Oa=qn=0,Qe=jr=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Hn=null}return e}function um(e,t){do{var n=Ee;try{if(fc(),Yi.current=ma,ha){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ha=!1}if(Gn=0,Ie=Pe=ke=null,br=!1,Ur=0,Ec.current=null,n===null||n.return===null){Ae=1,Wr=t,Ee=null;break}e:{var o=e,l=n.return,c=n,p=t;if(t=Fe,c.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var h=p,S=c,w=S.tag;if(!(S.mode&1)&&(w===0||w===11||w===15)){var x=S.alternate;x?(S.updateQueue=x.updateQueue,S.memoizedState=x.memoizedState,S.lanes=x.lanes):(S.updateQueue=null,S.memoizedState=null)}var j=bu(l);if(j!==null){j.flags&=-257,ku(j,l,c,o,t),j.mode&1&&wu(o,h,t),t=j,p=h;var C=t.updateQueue;if(C===null){var A=new Set;A.add(p),t.updateQueue=A}else C.add(p);break e}else{if(!(t&1)){wu(o,h,t),Rc();break e}p=Error(U(426))}}else if(ve&&c.mode&1){var L=bu(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),ku(L,l,c,o,t),hc(Es(p,c));break e}}o=p=Es(p,c),Ae!==4&&(Ae=2),jr===null?jr=[o]:jr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=qh(o,p,t);mu(o,g);break e;case 1:c=p;var m=o.type,k=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(jn===null||!jn.has(k)))){o.flags|=65536,t&=-t,o.lanes|=t;var D=Xh(o,c,t);mu(o,D);break e}}o=o.return}while(o!==null)}mm(n)}catch(_){t=_,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(!0)}function pm(){var e=fa.current;return fa.current=ma,e===null?ma:e}function Rc(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),De===null||!(qn&268435455)&&!(Oa&268435455)||fn(De,Fe)}function va(e,t){var n=ae;ae|=2;var r=pm();(De!==e||Fe!==t)&&(Yt=null,Wn(e,t));do try{b0();break}catch(i){um(e,i)}while(!0);if(fc(),ae=n,fa.current=r,Ee!==null)throw Error(U(261));return De=null,Fe=0,Ae}function b0(){for(;Ee!==null;)hm(Ee)}function k0(){for(;Ee!==null&&!Gf();)hm(Ee)}function hm(e){var t=gm(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?mm(e):Ee=t,Ec.current=null}function mm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=f0(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Ee=null;return}}else if(n=m0(n,t,st),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);Ae===0&&(Ae=5)}function zn(e,t,n){var r=ce,i=ft.transition;try{ft.transition=null,ce=1,j0(e,t,n,r)}finally{ft.transition=i,ce=r}return null}function j0(e,t,n,r){do ws();while(yn!==null);if(ae&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sg(e,o),e===De&&(Ee=De=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_i||(_i=!0,ym(Zi,function(){return ws(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ft.transition,ft.transition=null;var l=ce;ce=1;var c=ae;ae|=4,Ec.current=null,y0(e,n),lm(n,e),Wg(fl),ta=!!ml,fl=ml=null,e.current=n,v0(n),qf(),ae=c,ce=l,ft.transition=o}else e.current=n;if(_i&&(_i=!1,yn=e,ya=i),o=e.pendingLanes,o===0&&(jn=null),Jf(n.stateNode),nt(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ga)throw ga=!1,e=_l,_l=null,e;return ya&1&&e.tag!==0&&ws(),o=e.pendingLanes,o&1?e===Ol?Sr++:(Sr=0,Ol=e):Sr=0,In(),null}function ws(){if(yn!==null){var e=qp(ya),t=ft.transition,n=ce;try{if(ft.transition=null,ce=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,ya=0,ae&6)throw Error(U(331));var i=ae;for(ae|=4,q=e.current;q!==null;){var o=q,l=o.child;if(q.flags&16){var c=o.deletions;if(c!==null){for(var p=0;p<c.length;p++){var h=c[p];for(q=h;q!==null;){var S=q;switch(S.tag){case 0:case 11:case 15:kr(8,S,o)}var w=S.child;if(w!==null)w.return=S,q=w;else for(;q!==null;){S=q;var x=S.sibling,j=S.return;if(im(S),S===h){q=null;break}if(x!==null){x.return=j,q=x;break}q=j}}}var C=o.alternate;if(C!==null){var A=C.child;if(A!==null){C.child=null;do{var L=A.sibling;A.sibling=null,A=L}while(A!==null)}}q=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,q=l;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kr(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,q=g;break e}q=o.return}}var m=e.current;for(q=m;q!==null;){l=q;var k=l.child;if(l.subtreeFlags&2064&&k!==null)k.return=l,q=k;else e:for(l=m;q!==null;){if(c=q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:_a(9,c)}}catch(_){Se(c,c.return,_)}if(c===l){q=null;break e}var D=c.sibling;if(D!==null){D.return=c.return,q=D;break e}q=c.return}}if(ae=i,In(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Na,e)}catch{}r=!0}return r}finally{ce=n,ft.transition=t}}return!1}function _u(e,t,n){t=Es(n,t),t=qh(e,t,1),e=kn(e,t,1),t=Ge(),e!==null&&($r(e,1,t),nt(e,t))}function Se(e,t,n){if(e.tag===3)_u(e,e,n);else for(;t!==null;){if(t.tag===3){_u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=Es(n,e),e=Xh(t,e,1),t=kn(t,e,1),e=Ge(),t!==null&&($r(t,1,e),nt(t,e));break}}t=t.return}}function S0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Fe&n)===n&&(Ae===4||Ae===3&&(Fe&130023424)===Fe&&500>Ne()-Ac?Wn(e,0):Pc|=n),nt(e,t)}function fm(e,t){t===0&&(e.mode&1?(t=Ci,Ci<<=1,!(Ci&130023424)&&(Ci=4194304)):t=1);var n=Ge();e=en(e,t),e!==null&&($r(e,t,n),nt(e,n))}function C0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fm(e,n)}function T0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),fm(e,n)}var gm;gm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ze=!1,h0(e,t,n);Ze=!!(e.flags&131072)}else Ze=!1,ve&&t.flags&1048576&&wh(t,la,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$i(e,t),e=t.pendingProps;var i=Ss(t,Ve.current);xs(t,n),i=jc(null,t,r,e,i,n);var o=Sc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(o=!0,aa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vc(t),i.updater=La,t.stateNode=i,i._reactInternals=t,Sl(t,r,e,n),t=Nl(null,t,r,!0,o,n)):(t.tag=0,ve&&o&&uc(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($i(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=E0(r),e=bt(r,e),i){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Su(null,t,r,bt(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),Tl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),Cu(e,t,r,i,n);case 3:e:{if(Zh(t),e===null)throw Error(U(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Th(e,t),ua(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Es(Error(U(423)),t),t=Tu(e,t,r,n,i);break e}else if(r!==i){i=Es(Error(U(424)),t),t=Tu(e,t,r,n,i);break e}else for(it=bn(t.stateNode.containerInfo.firstChild),at=t,ve=!0,jt=null,n=Sh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),r===i){t=tn(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return Nh(t),e===null&&bl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,gl(r,i)?l=null:o!==null&&gl(r,o)&&(t.flags|=32),Qh(e,t),$e(e,t,l,n),t.child;case 6:return e===null&&bl(t),null;case 13:return em(e,t,n);case 4:return xc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ts(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),ju(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,he(ca,r._currentValue),r._currentValue=l,o!==null)if(Dt(o.value,l)){if(o.children===i.children&&!et.current){t=tn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var p=c.firstContext;p!==null;){if(p.context===r){if(o.tag===1){p=Jt(-1,n&-n),p.tag=2;var h=o.updateQueue;if(h!==null){h=h.shared;var S=h.pending;S===null?p.next=p:(p.next=S.next,S.next=p),h.pending=p}}o.lanes|=n,p=o.alternate,p!==null&&(p.lanes|=n),kl(o.return,n,t),c.lanes|=n;break}p=p.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(U(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),kl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xs(t,n),i=gt(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=bt(r,t.pendingProps),i=bt(r.type,i),Su(e,t,r,i,n);case 15:return Kh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:bt(r,i),$i(e,t),t.tag=1,tt(r)?(e=!0,aa(t)):e=!1,xs(t,n),Gh(t,r,i),Sl(t,r,i,n),Nl(null,t,r,!0,e,n);case 19:return tm(e,t,n);case 22:return Jh(e,t,n)}throw Error(U(156,t.tag))};function ym(e,t){return Yp(e,t)}function N0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new N0(e,t,n,r)}function Lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E0(e){if(typeof e=="function")return Lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zl)return 11;if(e===ec)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Lc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case rs:return Yn(n.children,i,o,t);case Ql:l=8,i|=8;break;case qo:return e=mt(12,n,t,i|2),e.elementType=qo,e.lanes=o,e;case Xo:return e=mt(13,n,t,i),e.elementType=Xo,e.lanes=o,e;case Ko:return e=mt(19,n,t,i),e.elementType=Ko,e.lanes=o,e;case Np:return Ma(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cp:l=10;break e;case Tp:l=9;break e;case Zl:l=11;break e;case ec:l=14;break e;case pn:l=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=mt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Ma(e,t,n,r){return e=mt(22,e,r,t),e.elementType=Np,e.lanes=n,e.stateNode={isHidden:!1},e}function _o(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Oo(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=go(0),this.expirationTimes=go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _c(e,t,n,r,i,o,l,c,p){return e=new P0(e,t,n,c,p),t===1?(t=1,o===!0&&(t|=8)):t=0,o=mt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vc(o),e}function A0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ss,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function vm(e){if(!e)return En;e=e._reactInternals;e:{if(Jn(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(tt(n))return vh(e,n,t)}return t}function xm(e,t,n,r,i,o,l,c,p){return e=_c(n,r,!0,e,i,o,l,c,p),e.context=vm(null),n=e.current,r=Ge(),i=Sn(n),o=Jt(r,i),o.callback=t??null,kn(n,o,i),e.current.lanes=i,$r(e,i,r),nt(e,r),e}function Fa(e,t,n,r){var i=t.current,o=Ge(),l=Sn(i);return n=vm(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(i,t,l),e!==null&&(It(e,i,l,o),Wi(e,i,l)),l}function xa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ou(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Oc(e,t){Ou(e,t),(e=e.alternate)&&Ou(e,t)}function I0(){return null}var wm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mc(e){this._internalRoot=e}za.prototype.render=Mc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Fa(e,t,null,null)};za.prototype.unmount=Mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){Fa(null,e,null,null)}),t[Zt]=null}};function za(e){this._internalRoot=e}za.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mn.length&&t!==0&&t<mn[n].priority;n++);mn.splice(n,0,e),n===0&&Zp(e)}};function Fc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function D0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var h=xa(l);o.call(h)}}var l=xm(t,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=l,e[Zt]=l.current,_r(e.nodeType===8?e.parentNode:e),Xn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=xa(p);c.call(h)}}var p=_c(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=p,e[Zt]=p.current,_r(e.nodeType===8?e.parentNode:e),Xn(function(){Fa(t,p,n,r)}),p}function Ha(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var c=i;i=function(){var p=xa(l);c.call(p)}}Fa(t,l,e,i)}else l=D0(n,t,e,i,r);return xa(l)}Xp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hr(t.pendingLanes);n!==0&&(sc(t,n|1),nt(t,Ne()),!(ae&6)&&(Ps=Ne()+500,In()))}break;case 13:Xn(function(){var r=en(e,1);if(r!==null){var i=Ge();It(r,e,1,i)}}),Oc(e,1)}};rc=function(e){if(e.tag===13){var t=en(e,134217728);if(t!==null){var n=Ge();It(t,e,134217728,n)}Oc(e,134217728)}};Kp=function(e){if(e.tag===13){var t=Sn(e),n=en(e,t);if(n!==null){var r=Ge();It(n,e,t,r)}Oc(e,t)}};Jp=function(){return ce};Qp=function(e,t){var n=ce;try{return ce=e,t()}finally{ce=n}};al=function(e,t,n){switch(t){case"input":if(Zo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ia(r);if(!i)throw Error(U(90));Pp(r),Zo(r,i)}}}break;case"textarea":Ip(e,n);break;case"select":t=n.value,t!=null&&fs(e,!!n.multiple,t,!1)}};Fp=Ic;zp=Xn;var R0={usingClientEntryPoint:!1,Events:[qr,ls,Ia,Op,Mp,Ic]},dr={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L0={bundleType:dr.bundleType,version:dr.version,rendererPackageName:dr.rendererPackageName,rendererConfig:dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bp(e),e===null?null:e.stateNode},findFiberByHostInstance:dr.findFiberByHostInstance||I0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Na=Oi.inject(L0),zt=Oi}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fc(t))throw Error(U(200));return A0(e,t,null,n)};lt.createRoot=function(e,t){if(!Fc(e))throw Error(U(299));var n=!1,r="",i=wm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_c(e,1,!1,null,null,n,!1,r,i),e[Zt]=t.current,_r(e.nodeType===8?e.parentNode:e),new Mc(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Bp(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Xn(e)};lt.hydrate=function(e,t,n){if(!Ua(t))throw Error(U(200));return Ha(null,e,t,!0,n)};lt.hydrateRoot=function(e,t,n){if(!Fc(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=wm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=xm(t,null,e,1,n??null,i,!1,o,l),e[Zt]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new za(t)};lt.render=function(e,t,n){if(!Ua(t))throw Error(U(200));return Ha(null,e,t,!1,n)};lt.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(U(40));return e._reactRootContainer?(Xn(function(){Ha(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1};lt.unstable_batchedUpdates=Ic;lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ua(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Ha(e,t,n,!1,r)};lt.version="18.3.1-next-f1338f8080-20240426";function bm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bm)}catch(e){console.error(e)}}bm(),bp.exports=lt;var _0=bp.exports,Fu=_0;$o.createRoot=Fu.createRoot,$o.hydrateRoot=Fu.hydrateRoot;const As={cryptography:[{id:"crypto-1",title:"Caesar Cipher Basics",difficulty:"Easy",points:10,description:"Julius Caesar used a simple cipher to protect his messages. In a Caesar cipher, each letter is shifted by a fixed number of positions in the alphabet.",learningObjective:"Understand how substitution ciphers work and practice decryption techniques.",vocabularyTerms:["caesar-cipher","cipher","encryption","decryption","plaintext","ciphertext"],prompt:`The following message was encrypted with a Caesar cipher using a shift of 3:

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
D) Throw it away`,hints:["USB drives can contain malware","The label is designed to make you curious","Never plug unknown devices into any computer","IT/Security has safe ways to examine it","Options C and D are both safe, but C is most helpful","The flag is FLAG{C}"],answer:"C",flag:"FLAG{C}",explanation:'This is "USB baiting". The label exploits curiosity. Never plug unknown USB drives into any computer. Report to IT/Security who can safely examine it in an isolated environment.'}]},O0=()=>Object.values(As).flat(),M0=e=>O0().find(t=>t.id===e),fr={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},F0={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]},de={PORT_SCAN:"port-scan",BRUTE_FORCE_SSH:"brute-force-ssh",SQL_INJECTION:"sql-injection",DATA_EXFILTRATION:"data-exfiltration",DDOS:"ddos",DNS_TUNNELING:"dns-tunneling"},km={[de.PORT_SCAN]:{name:"Port Scan",description:"An attacker is scanning multiple ports on your system to find open services.",severity:"medium",indicators:["Single source IP connecting to many different ports","Sequential or rapid port probing","SYN packets without completing handshake"],mitigation:"Block the scanning IP address"},[de.BRUTE_FORCE_SSH]:{name:"SSH Brute Force",description:"An attacker is attempting to guess SSH credentials through repeated login attempts.",severity:"high",indicators:["Multiple failed SSH authentication attempts","Same source IP with repeated connections to port 22","Various username attempts (root, admin, user)"],mitigation:"Block the attacking IP and implement rate limiting"},[de.SQL_INJECTION]:{name:"SQL Injection",description:"An attacker is attempting to inject malicious SQL code through web requests.",severity:"critical",indicators:["HTTP requests containing SQL keywords (SELECT, UNION, DROP)","Special characters in URL parameters (', --, ;)","Attempts to manipulate database queries"],mitigation:"Block the source IP and review web application security"},[de.DATA_EXFILTRATION]:{name:"Data Exfiltration",description:"Large amounts of data are being transferred to an external IP address.",severity:"critical",indicators:["Unusually large outbound data transfers","Data sent to unfamiliar external IPs","Sustained high-bandwidth connections"],mitigation:"Block the external IP and investigate compromised system"},[de.DDOS]:{name:"DDoS Attack",description:"Multiple sources are flooding the network with traffic to overwhelm services.",severity:"high",indicators:["High volume of traffic from many sources","Repeated requests to same destination","Network bandwidth saturation"],mitigation:"Enable rate limiting and block attacking IPs"},[de.DNS_TUNNELING]:{name:"DNS Tunneling",description:"Data is being exfiltrated through encoded DNS queries.",severity:"high",indicators:["Unusual DNS query patterns","Long subdomain names with encoded data","High volume of TXT record queries"],mitigation:"Block suspicious DNS queries and investigate endpoint"}},z0={[de.PORT_SCAN]:{windowSeconds:10,thresholds:{uniquePortsFromSameSource:5,packetsPerSecond:3},check:(e,t=1e4)=>{const n=Date.now(),r=e.filter(o=>new Date(o.timestamp).getTime()>n-t),i={};r.forEach(o=>{i[o.sourceIP]||(i[o.sourceIP]=new Set),i[o.sourceIP].add(o.destPort)});for(const[o,l]of Object.entries(i))if(l.size>=5)return{detected:!0,attackerIP:o,evidence:`${l.size} ports scanned`};return{detected:!1}}},[de.BRUTE_FORCE_SSH]:{windowSeconds:30,thresholds:{failedAttemptsFromSameSource:5},check:(e,t=3e4)=>{const n=Date.now(),r=e.filter(o=>new Date(o.timestamp).getTime()>n-t&&o.protocol==="SSH"&&o.info.toLowerCase().includes("failed")),i={};r.forEach(o=>{i[o.sourceIP]=(i[o.sourceIP]||0)+1});for(const[o,l]of Object.entries(i))if(l>=5)return{detected:!0,attackerIP:o,evidence:`${l} failed SSH attempts`};return{detected:!1}}},[de.SQL_INJECTION]:{patterns:[/('|"|;|--|\/\*|\*\/|union|select|insert|update|delete|drop|exec|execute)/i,/(or|and)\s+['"]?\d+['"]?\s*=\s*['"]?\d+/i,/'\s*(or|and)\s*'[^']*'\s*=\s*'/i],check:e=>{const t=e.filter(n=>n.protocol==="HTTP"&&n.isMalicious&&n.attackType===de.SQL_INJECTION);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} SQL injection attempts`}:{detected:!1}}},[de.DATA_EXFILTRATION]:{thresholds:{bytesPerWindow:1e5,windowSeconds:30},check:(e,t=3e4)=>{const n=Date.now(),r=e.filter(o=>new Date(o.timestamp).getTime()>n-t),i={};r.forEach(o=>{!o.destIP.startsWith("192.168.")&&!o.destIP.startsWith("10.")&&!o.destIP.startsWith("172.16.")&&(i[o.destIP]=(i[o.destIP]||0)+o.length)});for(const[o,l]of Object.entries(i))if(l>=1e5)return{detected:!0,attackerIP:o,evidence:`${Math.round(l/1024)}KB exfiltrated`};return{detected:!1}}},[de.DNS_TUNNELING]:{check:e=>{const t=e.filter(n=>n.protocol==="DNS"&&n.isMalicious&&n.attackType===de.DNS_TUNNELING);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} suspicious DNS queries`}:{detected:!1}}}},Nt=[{id:"port-scan-basic",name:"Port Scan Detection",difficulty:"Easy",points:25,description:"A suspicious IP address is probing your network, scanning multiple ports to find vulnerable services. Identify and block the attacker.",learningObjective:"Learn to recognize port scanning behavior by observing sequential port connections from a single source.",attackType:de.PORT_SCAN,duration:60,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:3},hints:["Look for a single IP connecting to many different ports","Port scanners often use sequential port numbers","The attacker IP will have connections to ports like 21, 22, 23, 80, 443, etc."],backgroundTraffic:{packetsPerSecond:1,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:8,packetsPerSecond:1.5,attackerIP:"185.220.101.42",targetPorts:[21,22,23,25,80,110,143,443,445,3389,8080,8443]}},{id:"ssh-brute-force",name:"SSH Brute Force Attack",difficulty:"Medium",points:35,description:"An attacker is attempting to gain unauthorized access by guessing SSH credentials. Multiple failed login attempts indicate a brute force attack in progress.",learningObjective:"Understand how brute force attacks work and learn to identify repeated authentication failures.",attackType:de.BRUTE_FORCE_SSH,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for repeated SSH connections from the same IP","Failed authentication messages are a key indicator","Brute force attacks try common usernames: root, admin, user"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:10,packetsPerSecond:1,attackerIP:"198.51.100.77",targetPort:22,usernames:["root","admin","administrator","user","guest","test"]}},{id:"sql-injection-probe",name:"SQL Injection Probing",difficulty:"Medium",points:40,description:"Malicious HTTP requests containing SQL injection payloads are targeting your web application. These attacks attempt to manipulate database queries.",learningObjective:"Learn to identify SQL injection patterns in HTTP requests and understand common injection techniques.",attackType:de.SQL_INJECTION,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:4},hints:[`Look for special characters in HTTP requests: ' " ; --`,"SQL keywords like UNION, SELECT, DROP are red flags","Check URL parameters and POST data for suspicious patterns"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:10,packetsPerSecond:.75,attackerIP:"203.0.113.99",targetPort:80}},{id:"data-exfiltration",name:"Data Exfiltration",difficulty:"Medium",points:40,description:"A compromised internal system is sending large amounts of data to an external IP. This could indicate stolen data being transferred out of the network.",learningObjective:"Learn to detect unusual outbound traffic patterns that may indicate data theft.",attackType:de.DATA_EXFILTRATION,duration:120,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for unusually large packet sizes going outbound","The destination IP will be external (not 192.168.x.x or 10.x.x.x)","Look for sustained transfers to the same external destination"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:12,packetsPerSecond:1,attackerIP:"45.33.32.156",sourceIP:"192.168.1.105",minPacketSize:5e3,maxPacketSize:15e3}}],U0=()=>Nt.reduce((e,t)=>e+t.points,0),H0=()=>({total:Nt.length,easy:Nt.filter(e=>e.difficulty==="Easy").length,medium:Nt.filter(e=>e.difficulty==="Medium").length,hard:Nt.filter(e=>e.difficulty==="Hard").length,totalPoints:U0()}),zc={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
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
}`,hints:["Arrays are created with square brackets: let arr = []","Put strings in quotes inside the brackets","Access elements with arrayName[index]","The first element is at index 0"],vocabularyTerms:["array","index","element"],resources:[{title:"background()",url:"https://p5js.org/reference/p5/background/"},{title:"createCanvas()",url:"https://p5js.org/reference/p5/createCanvas/"}]},{id:"w1d1-2",title:"First, Last, Middle",difficulty:"Easy",points:10,description:"Access different positions in an array",prompt:"Given an array of words, display the first word, last word, and middle word on screen.",starterCode:`let words = ["loop", "array", "pixel", "code", "mouse"];

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
}`,hints:["First element is at index 0","Last element is at index array.length - 1","Middle index is Math.floor(array.length / 2)"],vocabularyTerms:["array","index","length"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"background()",url:"https://p5js.org/reference/p5/background/"}]},{id:"w1d1-3",title:"Random Word Display",difficulty:"Easy",points:15,description:"Pick and display a random element from an array",prompt:"Display a random word from the array. Click to show a new random word.",starterCode:`let words = ["loop", "array", "pixel", "code", "mouse"];
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
}`,hints:["random(n) gives a number from 0 to n","floor() rounds down to a whole number","Use random(words.length) to get a valid index"],vocabularyTerms:["array","random","index"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textAlign()",url:"https://p5js.org/reference/p5/textAlign/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"floor()",url:"https://p5js.org/reference/p5/floor/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}]}],exitTicket:"What does words[0] mean in an array called words?"},{day:2,title:"Push and Pop",objective:"Add and remove items with push() and pop()",exercises:[{id:"w1d2-1",title:"Click to Add",difficulty:"Easy",points:10,description:"Use push() to add mouse positions to an array",prompt:"Click anywhere to add that X position to an array. Draw circles at all saved positions.",starterCode:`let xs = [];

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
}`,hints:["push() adds to the end of an array","Use a for loop to go through all elements","xs.length tells you how many items"],vocabularyTerms:["push","array","length"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"mouseX / mouseY",url:"https://p5js.org/reference/p5/mouseX/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]},{id:"w1d2-2",title:"Undo with Pop",difficulty:"Easy",points:15,description:"Use pop() to remove the last item",prompt:"Click to add dots. Press 'U' to undo (remove) the last dot.",starterCode:`let xs = [];

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
}`,hints:["pop() removes the last element","Check which key was pressed with key == 'U'","pop() returns the removed item (but you don't need to use it)"],vocabularyTerms:["pop","push","keyPressed"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"},{title:"key",url:"https://p5js.org/reference/p5/key/"}]}],exitTicket:"What's the difference between push() and pop()?"},{day:3,title:"Parallel Arrays",objective:"Use multiple arrays to store related data",exercises:[{id:"w1d3-1",title:"X and Y Positions",difficulty:"Medium",points:15,description:"Store both x and y coordinates in parallel arrays",prompt:"Click to place dots. Store x positions in one array and y positions in another.",starterCode:`let xs = [];
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
}`,hints:["Parallel arrays have the same length","Index i refers to the same item in both arrays","Push to both arrays at the same time"],vocabularyTerms:["parallel-arrays","index","push"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"mouseX / mouseY",url:"https://p5js.org/reference/p5/mouseX/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}]},{id:"w1d3-2",title:"Three Parallel Arrays",difficulty:"Medium",points:20,description:"Add random sizes to each dot",prompt:"Extend the previous exercise: also store a random size for each dot.",starterCode:`let xs = [];
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
}`,hints:["random(10, 50) gives a number between 10 and 50","All three arrays must stay the same length","Use sizes[i] for the diameter of each circle"],vocabularyTerms:["parallel-arrays","random"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}]}],exitTicket:"Why must parallel arrays always have the same length?"},{day:4,title:"Random Selection",objective:"Select random elements and change array values",exercises:[{id:"w1d4-1",title:"Color Switcher",difficulty:"Easy",points:10,description:"Click to pick a random background color from a palette",prompt:"Each click should pick a new random color from your palette array.",starterCode:`let colors = ["red", "orange", "yellow", "green", "blue"];
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
}`,hints:["Get array length with colors.length","random(n) gives 0 to n-1 (but as a decimal)","floor() rounds down to an integer"],vocabularyTerms:["random","index","floor"],resources:[{title:"background()",url:"https://p5js.org/reference/p5/background/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"floor()",url:"https://p5js.org/reference/p5/floor/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}]}],exitTicket:"Why do we need floor() when picking a random index?"},{day:5,title:"Mini-Project: Click Collector",objective:"Build a complete interactive sketch using arrays",exercises:[{id:"w1d5-project",title:"Click Collector",difficulty:"Medium",points:50,isProject:!0,description:"Create an interactive dot collector with undo and clear features",prompt:`Build a sketch where:
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
}`,hints:["Use color(r, g, b) to create a color object","Pop from ALL arrays when undoing","Set arrays to [] to clear them"],vocabularyTerms:["parallel-arrays","push","pop"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"},{title:"color()",url:"https://p5js.org/reference/p5/color/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"}],rubric:{functionality:"Click adds dots, U undoes, C clears",arrays:"Uses parallel arrays correctly",colors:"Each dot has random color",display:"Shows helpful information to user"}}]}]},week2:{title:"Loops Basics",bigIdea:"Loops repeat instructions efficiently.",days:[{day:6,title:"For Loops",objective:"Use for-loops to repeat drawing commands",exercises:[{id:"w2d6-1",title:"Row of Circles",difficulty:"Easy",points:10,description:"Draw 10 circles in a row using a for-loop",prompt:"Use a for-loop to draw 10 circles evenly spaced across the canvas.",starterCode:`function setup() {
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
}`,hints:["for (let i = 0; i < 10; i++) repeats 10 times","Use i to calculate different x positions","Multiply i by a spacing value"],vocabularyTerms:["for-loop","iteration","loop-variable"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"height",url:"https://p5js.org/reference/p5/height/"},{title:"width",url:"https://p5js.org/reference/p5/width/"}]},{id:"w2d6-2",title:"Spacing Formula",difficulty:"Medium",points:15,description:"Calculate spacing to fit any number of circles",prompt:"Draw n circles that are always evenly spaced, regardless of the value of n.",starterCode:`let n = 8;

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
}`,hints:["Divide width by (n + 1) to get spacing","Multiply spacing by (i + 1) for each position","Try changing n to see if it still works"],vocabularyTerms:["for-loop","spacing"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"What are the three parts of a for-loop declaration?"},{day:7,title:"Loop Patterns",objective:"Use loop variables to create visual patterns",exercises:[{id:"w2d7-1",title:"Staircase",difficulty:"Medium",points:15,description:"Draw a staircase pattern using a loop",prompt:"Draw rectangles that form a staircase going up from left to right.",starterCode:`function setup() {
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
}`,hints:["X position increases with i","Y position decreases with i (going up)","Use i * stepSize for both"],vocabularyTerms:["for-loop","pattern"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"background()",url:"https://p5js.org/reference/p5/background/"}]},{id:"w2d7-2",title:"Growing Circles",difficulty:"Medium",points:15,description:"Draw circles that grow in size",prompt:"Draw 8 circles where each one is larger than the last.",starterCode:`function setup() {
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
}`,hints:["Size can also depend on i","Start with a base size and add i * increment","noFill() makes circles hollow"],vocabularyTerms:["for-loop","loop-variable"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"noFill()",url:"https://p5js.org/reference/p5/noFill/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"How can you make each loop iteration draw something different?"},{day:8,title:"Animation with Loops",objective:"Combine loops with animation",exercises:[{id:"w2d8-1",title:"Moving Object",difficulty:"Easy",points:10,description:"Animate a circle moving across the screen",prompt:"Make a circle move from left to right, resetting when it goes off screen.",starterCode:`let x = 0;

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
}`,hints:["Increment x each frame","Check if x > width to reset","The draw() function is already a loop!"],vocabularyTerms:["animation","frame","conditional"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]},{id:"w2d8-2",title:"Multiple Moving Objects",difficulty:"Medium",points:20,description:"Animate multiple circles at different speeds",prompt:"Create 5 circles at different y positions, each moving at a different speed.",starterCode:`let xs = [0, 0, 0, 0, 0];
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
}`,hints:["Each circle has its own x in the array","Each circle has its own speed","Update each x by its corresponding speed"],vocabularyTerms:["animation","parallel-arrays","for-loop"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"background()",url:"https://p5js.org/reference/p5/background/"}]}],exitTicket:"Why don't we need a for-loop to make something animate?"},{day:9,title:"While Loops",objective:"Use while-loops for conditional repetition",exercises:[{id:"w2d9-1",title:"Dice Roller",difficulty:"Easy",points:10,description:"Roll dice until you get a 6",prompt:"Use a while-loop to count how many rolls it takes to get a 6.",starterCode:`function setup() {
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
}`,hints:["while (condition) repeats until condition is false","random(1, 7) gives 1-6 (not including 7)","Increment rolls inside the loop"],vocabularyTerms:["while-loop","condition","random"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"floor()",url:"https://p5js.org/reference/p5/floor/"}]},{id:"w2d9-2",title:"Random Dots Until Full",difficulty:"Medium",points:15,description:"Place random dots until you have 100",prompt:"Use a while-loop to place 100 random dots on the canvas.",starterCode:`function setup() {
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
}`,hints:["while (count < 100) runs until count is 100","Place one dot per iteration","Don't forget to increment count!"],vocabularyTerms:["while-loop","random","iteration"],resources:[{title:"point()",url:"https://p5js.org/reference/p5/point/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"When would you use a while-loop instead of a for-loop?"},{day:10,title:"Mini-Project: Pattern Poster Generator",objective:"Create an interactive pattern generator using loops",exercises:[{id:"w2d10-project",title:"Pattern Poster Generator",difficulty:"Medium",points:50,isProject:!0,description:"Create a tool that generates different loop-based patterns",prompt:`Build a sketch where:
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
}`,hints:["Use if (mode == n) to show different patterns","Each pattern should use a for-loop","Parameters like count and spacing make patterns adjustable"],vocabularyTerms:["for-loop","pattern","parameter"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"point()",url:"https://p5js.org/reference/p5/point/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"noFill()",url:"https://p5js.org/reference/p5/noFill/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"cos()",url:"https://p5js.org/reference/p5/cos/"},{title:"sin()",url:"https://p5js.org/reference/p5/sin/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"}],rubric:{patterns:"At least 3 different loop patterns",switching:"Keys switch between patterns",randomize:"R randomizes parameters",creativity:"Patterns are visually interesting"}}]}]},week3:{title:"Traversing Arrays",bigIdea:"Loops + arrays = traversal. Read and update every element.",days:[{day:11,title:"Traversal Basics",objective:"Loop through arrays to draw many objects",exercises:[{id:"w3d11-1",title:"Draw All Points",difficulty:"Easy",points:10,description:"Traverse an array to draw all stored points",prompt:"Click to add points. Use a loop to draw a circle at every saved position.",starterCode:`let xs = [];
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
}`,hints:["Traversal means visiting every element","Loop from 0 to array.length","Use i as the index for both arrays"],vocabularyTerms:["traversal","for-loop","array"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"mouseX / mouseY",url:"https://p5js.org/reference/p5/mouseX/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}]}],exitTicket:"What does 'traversing an array' mean?"},{day:12,title:"Computing Values",objective:"Traverse to compute min, max, and average",exercises:[{id:"w3d12-1",title:"Sum and Average",difficulty:"Medium",points:15,description:"Calculate the average of array values",prompt:"Given an array of scores, calculate and display the average.",starterCode:`let scores = [85, 92, 78, 95, 88, 72, 90];

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
}`,hints:["Start sum at 0","Add each element to sum","Divide sum by length for average"],vocabularyTerms:["traversal","accumulator","average"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"}]},{id:"w3d12-2",title:"Find Min and Max",difficulty:"Medium",points:20,description:"Find the smallest and largest values",prompt:"Traverse the array to find both minimum and maximum values.",starterCode:`let nums = [34, 67, 12, 89, 45, 23, 78];

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
}`,hints:["Start min and max with first element","Compare each element to current min/max","Update if you find a smaller/larger value"],vocabularyTerms:["traversal","minimum","maximum"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"}]}],exitTicket:"Why do we initialize min and max with the first array element?"},{day:13,title:"Conditional Highlighting",objective:"Traverse with conditions to highlight specific elements",exercises:[{id:"w3d13-1",title:"Closest to Mouse",difficulty:"Medium",points:20,description:"Find and highlight the point closest to the mouse",prompt:"Traverse all points to find which one is closest to the mouse, and highlight it.",starterCode:`let xs = [];
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
}`,hints:["dist() calculates distance between two points","Infinity is larger than any number","Track both the closest distance AND index"],vocabularyTerms:["traversal","dist","conditional"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"dist()",url:"https://p5js.org/reference/p5/dist/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"mouseX / mouseY",url:"https://p5js.org/reference/p5/mouseX/"}]}],exitTicket:"Why do we need two separate loops in the closest-point solution?"},{day:14,title:"Updating Elements",objective:"Traverse to modify array values",exercises:[{id:"w3d14-1",title:"Moving All Points",difficulty:"Medium",points:15,description:"Add velocity to make all points move",prompt:"Each point has a velocity. Update all positions each frame.",starterCode:`let xs = [];
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
}`,hints:["vx and vy are velocity (speed + direction)","Add velocity to position each frame","xs[i] += vx[i] updates the position"],vocabularyTerms:["traversal","velocity","update"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]},{id:"w3d14-2",title:"Bounce Off Walls",difficulty:"Medium",points:20,description:"Make points bounce when they hit edges",prompt:"Extend the moving points: reverse velocity when hitting walls.",starterCode:`let xs = [];
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
}`,hints:["Check if position is outside bounds","Multiply velocity by -1 to reverse","Check x and y separately"],vocabularyTerms:["traversal","bounce","conditional"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"How do you reverse a velocity value?"},{day:15,title:"Mini-Project: Particle Fountain",objective:"Create a particle system with spawning and removal",exercises:[{id:"w3d15-project",title:"Particle Fountain",difficulty:"Hard",points:50,isProject:!0,description:"Create an interactive particle system",prompt:`Build a particle fountain:
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
}`,hints:["Loop BACKWARDS when removing elements","splice(i, 1) removes element at index i","Gravity: add to vy each frame","Life decreases; remove when <= 0"],vocabularyTerms:["traversal","splice","particle-system"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}],rubric:{spawning:"Click spawns multiple particles",physics:"Gravity affects particles",lifecycle:"Particles shrink and are removed",visuals:"Particles look good (fade, color, etc.)"}}]}]},week4:{title:"Filtering and 2D Arrays",bigIdea:"Traversal can filter, transform, and work with grids.",days:[{day:16,title:"Filtering",objective:"Keep only elements that match a condition",exercises:[{id:"w4d16-1",title:"Filter Big Numbers",difficulty:"Medium",points:15,description:"Create a new array with only values above 50",prompt:"Given an array of numbers, create a new array containing only values greater than 50.",starterCode:`let nums = [10, 40, 70, 20, 90, 55, 30, 85];

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
}`,hints:["Create an empty result array","Traverse the original array","Push elements that match the condition"],vocabularyTerms:["filter","traversal","conditional"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"}]},{id:"w4d16-2",title:"Visual Filter",difficulty:"Medium",points:20,description:"Draw only particles on the right side",prompt:"Only draw particles whose x position is greater than width/2.",starterCode:`let xs = [];
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
}`,hints:["You don't need to create a new array","Just add a condition before drawing","Only draw if x > width/2"],vocabularyTerms:["filter","conditional","traversal"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"line()",url:"https://p5js.org/reference/p5/line/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"What's the difference between filtering into a new array vs filtering during drawing?"},{day:17,title:"Reducing",objective:"Compute a single value from an array",exercises:[{id:"w4d17-1",title:"Total Score",difficulty:"Easy",points:10,description:"Sum all values to get a total",prompt:"Calculate the total score from an array of point values.",starterCode:`let points = [10, 25, 15, 30, 20, 5];

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
}`,hints:["Start with total = 0","Add each element to total","This is called 'reducing' to a single value"],vocabularyTerms:["reduce","accumulator","sum"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"}]},{id:"w4d17-2",title:"Energy Meter",difficulty:"Medium",points:20,description:"Sum particle sizes to show total 'energy'",prompt:"Create particles with random sizes. Show total 'energy' (sum of all sizes) as a bar.",starterCode:`let sizes = [];

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
}`,hints:["Sum all sizes to get energy","Draw a bar proportional to energy","Scale the bar width appropriately"],vocabularyTerms:["reduce","sum","visualization"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"floor()",url:"https://p5js.org/reference/p5/floor/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}]}],exitTicket:"What does 'reducing' an array mean?"},{day:18,title:"2D Arrays and Grids",objective:"Use nested loops to create and draw grids",exercises:[{id:"w4d18-1",title:"Draw a Grid",difficulty:"Medium",points:15,description:"Use nested loops to draw a grid of squares",prompt:"Draw a 10x10 grid of squares using nested for-loops.",starterCode:`function setup() {
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
}`,hints:["Outer loop controls rows","Inner loop controls columns","x depends on col, y depends on row"],vocabularyTerms:["nested-loop","grid","2d-array"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"noFill()",url:"https://p5js.org/reference/p5/noFill/"}]},{id:"w4d18-2",title:"Checkerboard",difficulty:"Medium",points:20,description:"Color the grid like a checkerboard",prompt:"Make alternating squares black and white like a checkerboard.",starterCode:`function setup() {
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
}`,hints:["(row + col) % 2 alternates between 0 and 1","Use this to choose between two colors","% is the modulo (remainder) operator"],vocabularyTerms:["nested-loop","modulo","pattern"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"}]}],exitTicket:"What does (row + col) % 2 calculate?"},{day:19,title:"2D Array Data",objective:"Store and access data in a 2D array",exercises:[{id:"w4d19-1",title:"Random Walls",difficulty:"Medium",points:20,description:"Create a 2D array where some cells are walls",prompt:"Create a 2D array grid where 0=floor and 1=wall. Draw walls as black squares.",starterCode:`let grid = [];

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
}`,hints:["grid[r] = [] creates a row","grid[r][c] accesses row r, column c","random() < 0.2 is true 20% of the time"],vocabularyTerms:["2d-array","grid","random"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}]},{id:"w4d19-2",title:"Player Movement",difficulty:"Hard",points:25,description:"Add a player that moves on the grid",prompt:"Add arrow key movement. The player cannot move into walls.",starterCode:`let grid = [];
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
}`,hints:["Calculate new position first, don't move yet","Check if new position is in bounds","Check if new position is not a wall","Only then update player position"],vocabularyTerms:["2d-array","collision","keyCode"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"},{title:"keyCode",url:"https://p5js.org/reference/p5/keyCode/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}]}],exitTicket:"How do you check if a grid cell is a wall before moving?"},{day:20,title:"Final Capstone Project",objective:"Apply all concepts in a complete project",exercises:[{id:"w4d20-capstone",title:"Grid Adventure Game",difficulty:"Hard",points:100,isProject:!0,isCapstone:!0,description:"Create a complete grid-based game",prompt:`Build a Grid Adventure Game:
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
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"textAlign()",url:"https://p5js.org/reference/p5/textAlign/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"},{title:"keyCode",url:"https://p5js.org/reference/p5/keyCode/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function B0(e){const t=zc[e];if(!t)return[];const n=[];for(const r of t.days)n.push(...r.exercises);return n}const le={"cyber-range":{id:"cyber-range",name:"Cybersecurity",description:"Interactive cybersecurity challenges and simulations",color:"#00ff88",icon:"🔐",units:[{id:"cryptography",name:"Cryptography",description:"Learn encryption, decryption, and cipher techniques",challengeCount:5},{id:"network",name:"Network Security",description:"Understand firewalls, ports, and network protocols",challengeCount:4},{id:"password",name:"Password Security",description:"Create strong passwords and understand attacks",challengeCount:4},{id:"web",name:"Web Security",description:"Learn about XSS, SQL injection, and secure coding",challengeCount:3},{id:"social",name:"Social Engineering",description:"Recognize phishing and manipulation tactics",challengeCount:3},{id:"network-monitor",name:"Network Monitor",description:"Real-time packet analysis and threat detection",challengeCount:1,isScenario:!0}]},"arrays-loops":{id:"arrays-loops",name:"Programming",description:"Arrays, loops, and traversal with p5.js",color:"#00d4ff",icon:"💻",units:[{id:"week1",name:"Week 1: Arrays Basics",description:"Store collections of values and access by index",exerciseCount:8},{id:"week2",name:"Week 2: Loops Basics",description:"Use for-loops and while-loops to repeat instructions",exerciseCount:8},{id:"week3",name:"Week 3: Traversing Arrays",description:"Loop through arrays to process every element",exerciseCount:7},{id:"week4",name:"Week 4: Filtering & 2D Arrays",description:"Filter arrays and work with grids",exerciseCount:8}]},"ap-csp":{id:"ap-csp",name:"AP CSP Exam Prep",description:"Pseudocode translation and flowchart interpretation",color:"#ff6b9d",icon:"📝",units:[{id:"pseudocode",name:"Pseudocode",description:"Translate between AP CSP pseudocode and JavaScript",exerciseCount:30},{id:"flowcharts",name:"Flowcharts",description:"Read, interpret, and build flowcharts",exerciseCount:20}]},"data-apis":{id:"data-apis",name:"Data & APIs",description:"Fetch data from APIs, visualize with maps & charts, build servers",color:"#4ecdc4",icon:"🌐",units:[{id:"week1",name:"Week 1: Fetching Data",description:"JSON, fetch(), async/await, and error handling",exerciseCount:13},{id:"week2",name:"Week 2: Visualization",description:"Auto-updating data, Leaflet maps, and Chart.js",exerciseCount:10},{id:"week3",name:"Week 3: Server-Side",description:"Node.js, Express, REST APIs, and databases",exerciseCount:9},{id:"week4",name:"Week 4: Deployment",description:"Environment variables, API proxies, and deployment",exerciseCount:9}]}},bs=[{id:"assignment",title:"Assignment & Variables",pseudocode:"a ← expression",javascript:"let a = expression;",explanation:"The arrow (←) assigns a value to a variable. In pseudocode, you don't need to declare variables with let/const - just use the arrow to create and assign.",examples:[{pseudocode:"x ← 5",javascript:"let x = 5;"},{pseudocode:'name ← "Alice"',javascript:'let name = "Alice";'},{pseudocode:"total ← price + tax",javascript:"let total = price + tax;"},{pseudocode:"x ← x + 1",javascript:"x = x + 1; // or x++"}],keyPoints:["← is the assignment operator (like = in JavaScript)","Variables are created automatically when first assigned","Can reassign variables without re-declaring"]},{id:"display-input",title:"Display & Input",pseudocode:`DISPLAY(expression)
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
}`,javascript:"// Checks if path is clear before moving"}],keyPoints:["Robot starts somewhere on a grid","Black squares are walls/obstacles","Robot can only move to white/open squares","CAN_MOVE returns true/false"]}],Et=[{id:"ps-001",topic:"assignment",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`x ← 10
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
DISPLAY(max)`,blankAnswers:{blank1:["1","0"],blank2:[">","> max"],blank3:["n"]},hints:["Start with the first element (index 1 in pseudocode)","Check if current is greater than max","Update max to the new larger value"],explanation:"Initialize max to first element, then compare each n. If n > max, update max to n."}],zl=[{id:"oval",name:"Oval / Terminator",purpose:"Start or End of the program/algorithm",description:"Every flowchart must have a Start and End. The oval shape indicates where the flow begins and where it terminates.",examples:["Start","End","Begin","Stop"],color:"#10b981",shape:"ellipse"},{id:"rectangle",name:"Rectangle / Process",purpose:"An action, calculation, or process step",description:'Represents any processing operation: assignments, calculations, or actions. This is where the actual "work" happens.',examples:["total ← price + tax","count ← count + 1","Send email","Calculate average"],color:"#3b82f6",shape:"rectangle"},{id:"diamond",name:"Diamond / Decision",purpose:"A yes/no question or condition check",description:"Used for branching logic (if/else). The condition is written inside, and two arrows come out: one for Yes/True and one for No/False.",examples:["Is x > 10?","age ≥ 18?","Found?","Done?"],color:"#f59e0b",shape:"diamond"},{id:"parallelogram",name:"Parallelogram / Input-Output",purpose:"Getting input or showing output",description:"Represents data entering the system (input from user) or leaving it (display/print). Think DISPLAY and INPUT operations.",examples:["Get user name",'Display "Hello"',"INPUT age","Print result"],color:"#8b5cf6",shape:"parallelogram"},{id:"arrow",name:"Arrow / Flow Line",purpose:"Shows direction of flow",description:"Connects shapes and shows the order of operations. Flow typically goes top-to-bottom and left-to-right. Arrows point to the next step.",examples:["→","↓","←","↑"],color:"#6b7280",shape:"arrow"}],W0=[{id:"fc-ex-001",title:"Simple Greeting",description:'A basic flowchart that displays "Hello World"',difficulty:"beginner",pseudocode:'DISPLAY("Hello World")',nodes:[{id:"start",type:"oval",position:{x:150,y:0},data:{label:"Start"}},{id:"output",type:"parallelogram",position:{x:100,y:100},data:{label:'Display "Hello World"'}},{id:"end",type:"oval",position:{x:150,y:200},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"output"},{id:"e2",source:"output",target:"end"}]},{id:"fc-ex-002",title:"Input and Output",description:"Get user's name and greet them",difficulty:"beginner",pseudocode:`name ← INPUT()
DISPLAY("Hello, " + name)`,nodes:[{id:"start",type:"oval",position:{x:150,y:0},data:{label:"Start"}},{id:"input",type:"parallelogram",position:{x:100,y:80},data:{label:"Input name"}},{id:"output",type:"parallelogram",position:{x:100,y:160},data:{label:'Display "Hello, " + name'}},{id:"end",type:"oval",position:{x:150,y:240},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"input"},{id:"e2",source:"input",target:"output"},{id:"e3",source:"output",target:"end"}]},{id:"fc-ex-003",title:"Simple Decision",description:"Check if a number is positive or negative",difficulty:"beginner",pseudocode:`IF (x > 0)
{
   DISPLAY("Positive")
}
ELSE
{
   DISPLAY("Not positive")
}`,nodes:[{id:"start",type:"oval",position:{x:200,y:0},data:{label:"Start"}},{id:"decision",type:"diamond",position:{x:175,y:80},data:{label:"x > 0?"}},{id:"yes-output",type:"parallelogram",position:{x:50,y:180},data:{label:'Display "Positive"'}},{id:"no-output",type:"parallelogram",position:{x:270,y:180},data:{label:'Display "Not positive"'}},{id:"end",type:"oval",position:{x:200,y:280},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"decision"},{id:"e2",source:"decision",target:"yes-output",label:"Yes"},{id:"e3",source:"decision",target:"no-output",label:"No"},{id:"e4",source:"yes-output",target:"end"},{id:"e5",source:"no-output",target:"end"}]},{id:"fc-ex-004",title:"Pass or Fail",description:"Determine if a student passes based on score",difficulty:"beginner",pseudocode:`score ← INPUT()
IF (score ≥ 60)
{
   DISPLAY("Pass")
}
ELSE
{
   DISPLAY("Fail")
}`,nodes:[{id:"start",type:"oval",position:{x:200,y:0},data:{label:"Start"}},{id:"input",type:"parallelogram",position:{x:150,y:70},data:{label:"Input score"}},{id:"decision",type:"diamond",position:{x:175,y:150},data:{label:"score ≥ 60?"}},{id:"pass",type:"parallelogram",position:{x:50,y:250},data:{label:'Display "Pass"'}},{id:"fail",type:"parallelogram",position:{x:280,y:250},data:{label:'Display "Fail"'}},{id:"end",type:"oval",position:{x:200,y:350},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"input"},{id:"e2",source:"input",target:"decision"},{id:"e3",source:"decision",target:"pass",label:"Yes"},{id:"e4",source:"decision",target:"fail",label:"No"},{id:"e5",source:"pass",target:"end"},{id:"e6",source:"fail",target:"end"}]},{id:"fc-ex-005",title:"Simple Counter Loop",description:"Count from 1 to 5 using a loop",difficulty:"intermediate",pseudocode:`count ← 1
REPEAT UNTIL (count > 5)
{
   DISPLAY(count)
   count ← count + 1
}`,nodes:[{id:"start",type:"oval",position:{x:200,y:0},data:{label:"Start"}},{id:"init",type:"rectangle",position:{x:150,y:70},data:{label:"count ← 1"}},{id:"decision",type:"diamond",position:{x:175,y:150},data:{label:"count > 5?"}},{id:"output",type:"parallelogram",position:{x:50,y:250},data:{label:"Display count"}},{id:"increment",type:"rectangle",position:{x:50,y:330},data:{label:"count ← count + 1"}},{id:"end",type:"oval",position:{x:330,y:180},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"init"},{id:"e2",source:"init",target:"decision"},{id:"e3",source:"decision",target:"output",label:"No"},{id:"e4",source:"decision",target:"end",label:"Yes"},{id:"e5",source:"output",target:"increment"},{id:"e6",source:"increment",target:"decision"}]},{id:"fc-ex-006",title:"Sum of Numbers",description:"Calculate the sum of numbers from 1 to n",difficulty:"intermediate",pseudocode:`n ← INPUT()
sum ← 0
i ← 1
REPEAT UNTIL (i > n)
{
   sum ← sum + i
   i ← i + 1
}
DISPLAY(sum)`,nodes:[{id:"start",type:"oval",position:{x:200,y:0},data:{label:"Start"}},{id:"input",type:"parallelogram",position:{x:155,y:60},data:{label:"Input n"}},{id:"init-sum",type:"rectangle",position:{x:155,y:120},data:{label:"sum ← 0"}},{id:"init-i",type:"rectangle",position:{x:155,y:175},data:{label:"i ← 1"}},{id:"decision",type:"diamond",position:{x:175,y:245},data:{label:"i > n?"}},{id:"add",type:"rectangle",position:{x:30,y:330},data:{label:"sum ← sum + i"}},{id:"increment",type:"rectangle",position:{x:30,y:400},data:{label:"i ← i + 1"}},{id:"output",type:"parallelogram",position:{x:300,y:330},data:{label:"Display sum"}},{id:"end",type:"oval",position:{x:345,y:410},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"input"},{id:"e2",source:"input",target:"init-sum"},{id:"e3",source:"init-sum",target:"init-i"},{id:"e4",source:"init-i",target:"decision"},{id:"e5",source:"decision",target:"add",label:"No"},{id:"e6",source:"decision",target:"output",label:"Yes"},{id:"e7",source:"add",target:"increment"},{id:"e8",source:"increment",target:"decision"},{id:"e9",source:"output",target:"end"}]},{id:"fc-ex-007",title:"Find Maximum",description:"Find the largest of three numbers",difficulty:"intermediate",pseudocode:`a ← INPUT()
b ← INPUT()
c ← INPUT()
IF (a ≥ b AND a ≥ c)
{
   max ← a
}
ELSE
{
   IF (b ≥ c)
   {
      max ← b
   }
   ELSE
   {
      max ← c
   }
}
DISPLAY(max)`,nodes:[{id:"start",type:"oval",position:{x:250,y:0},data:{label:"Start"}},{id:"input-a",type:"parallelogram",position:{x:205,y:60},data:{label:"Input a"}},{id:"input-b",type:"parallelogram",position:{x:205,y:115},data:{label:"Input b"}},{id:"input-c",type:"parallelogram",position:{x:205,y:170},data:{label:"Input c"}},{id:"dec1",type:"diamond",position:{x:210,y:240},data:{label:"a ≥ b AND a ≥ c?"}},{id:"max-a",type:"rectangle",position:{x:50,y:330},data:{label:"max ← a"}},{id:"dec2",type:"diamond",position:{x:330,y:330},data:{label:"b ≥ c?"}},{id:"max-b",type:"rectangle",position:{x:260,y:420},data:{label:"max ← b"}},{id:"max-c",type:"rectangle",position:{x:400,y:420},data:{label:"max ← c"}},{id:"output",type:"parallelogram",position:{x:205,y:510},data:{label:"Display max"}},{id:"end",type:"oval",position:{x:250,y:590},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"input-a"},{id:"e2",source:"input-a",target:"input-b"},{id:"e3",source:"input-b",target:"input-c"},{id:"e4",source:"input-c",target:"dec1"},{id:"e5",source:"dec1",target:"max-a",label:"Yes"},{id:"e6",source:"dec1",target:"dec2",label:"No"},{id:"e7",source:"dec2",target:"max-b",label:"Yes"},{id:"e8",source:"dec2",target:"max-c",label:"No"},{id:"e9",source:"max-a",target:"output"},{id:"e10",source:"max-b",target:"output"},{id:"e11",source:"max-c",target:"output"},{id:"e12",source:"output",target:"end"}]}],qt=[{id:"fc-001",title:"Simple Decision Trace",difficulty:"beginner",type:"interpret",description:"Follow the flowchart to determine the output.",question:"What will be displayed if x = 7?",flowchartRef:"fc-ex-003",answer:"Positive",hints:["Start at the top and follow the arrows","At the diamond, check: is 7 > 0?","Follow the path that matches the answer"],explanation:'Starting at Start, we reach the decision "x > 0?". Since 7 > 0 is true (Yes), we follow the Yes path to display "Positive".'},{id:"fc-002",title:"Pass/Fail Check",difficulty:"beginner",type:"interpret",description:"Determine the output for a given input.",question:"What will be displayed if score = 55?",flowchartRef:"fc-ex-004",answer:"Fail",hints:["Input score = 55","Check the condition: is 55 ≥ 60?","Follow the appropriate path"],explanation:`55 is not ≥ 60 (it's less than 60), so the condition is false (No). Following the No path leads to displaying "Fail".`},{id:"fc-003",title:"Exact Boundary",difficulty:"beginner",type:"interpret",description:"Test a boundary condition.",question:"What will be displayed if score = 60?",flowchartRef:"fc-ex-004",answer:"Pass",hints:["60 is exactly the passing score","Is 60 ≥ 60?",'The ≥ means "greater than OR equal to"'],explanation:'60 is equal to 60, and since the condition uses ≥ (greater than or equal), 60 ≥ 60 is true. Output: "Pass".'},{id:"fc-004",title:"Loop Trace",difficulty:"intermediate",type:"interpret",description:"Trace through a counting loop.",question:"What numbers will be displayed by this flowchart?",flowchartRef:"fc-ex-005",answer:"1, 2, 3, 4, 5",hints:["count starts at 1","Loop continues while count is NOT > 5","After displaying, count increases by 1"],explanation:"count: 1 (display 1, count=2), 2 (display 2, count=3), 3 (display 3, count=4), 4 (display 4, count=5), 5 (display 5, count=6). When count=6, 6>5 is true, so loop exits."},{id:"fc-005",title:"Sum Calculation",difficulty:"intermediate",type:"interpret",description:"Calculate the result of a summation loop.",question:"If n = 4, what is the final value of sum displayed?",flowchartRef:"fc-ex-006",answer:"10",hints:["sum starts at 0, i starts at 1","Add i to sum, then increment i","1 + 2 + 3 + 4 = ?"],explanation:"Loop iterations: i=1: sum=0+1=1. i=2: sum=1+2=3. i=3: sum=3+3=6. i=4: sum=6+4=10. When i=5, 5>4 is true, exit and display 10."},{id:"fc-006",title:"Maximum of Three",difficulty:"intermediate",type:"interpret",description:"Determine which variable holds the maximum.",question:"If a=5, b=8, c=3, what path does the flowchart take and what is displayed?",flowchartRef:"fc-ex-007",answer:"8 (max ← b)",hints:["First check: is a ≥ b AND a ≥ c?","If not, check: is b ≥ c?","Follow the true condition"],explanation:"a=5 ≥ b=8? No, so first condition is false. Go to second decision: b=8 ≥ c=3? Yes, so max ← b = 8."},{id:"fc-007",title:"Identify Symbols",difficulty:"beginner",type:"symbol-match",description:"Match each flowchart symbol to its purpose.",question:"Match each shape to what it represents:",items:[{shape:"oval",options:["Start/End","Decision","Process","Input/Output"]},{shape:"diamond",options:["Start/End","Decision","Process","Input/Output"]},{shape:"rectangle",options:["Start/End","Decision","Process","Input/Output"]},{shape:"parallelogram",options:["Start/End","Decision","Process","Input/Output"]}],answer:{oval:"Start/End",diamond:"Decision",rectangle:"Process",parallelogram:"Input/Output"},hints:["Ovals are at the beginning and end","Diamonds ask yes/no questions","Rectangles do work/calculations"],explanation:"Oval = Start/End (terminators), Diamond = Decision (branching), Rectangle = Process (actions/calculations), Parallelogram = Input/Output (data flow)."},{id:"fc-008",title:"What Shape?",difficulty:"beginner",type:"multiple-choice",description:"Choose the correct shape for a given action.",question:'Which shape would you use for the statement: "Display the result"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Parallelogram",hints:["Display is a type of output","Parallelograms handle data entering or leaving the system"],explanation:"DISPLAY is an output operation, which is represented by a parallelogram (Input/Output symbol)."},{id:"fc-009",title:"Decision Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a condition.",question:'Which shape represents the statement: "IF score >= 60"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Diamond",hints:["IF statements check a condition","Conditions result in yes/no answers"],explanation:"IF statements are decisions that branch the flow based on a condition. Diamonds represent decisions with Yes/No paths."},{id:"fc-010",title:"Process Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a calculation.",question:'Which shape would you use for: "total ← total + price"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Rectangle",hints:["This is a calculation/assignment","No input, output, or decision happening"],explanation:"Assignment and calculations are processes represented by rectangles. This adds price to total - a processing step."},{id:"fc-011",title:"Build: Even or Odd",difficulty:"beginner",type:"build",description:"Create a flowchart to check if a number is even or odd.",requirements:["Start with a Start oval","Get a number from the user (Input)","Check if the number MOD 2 equals 0",'Display "Even" if yes, "Odd" if no',"End with an End oval"],pseudocode:`num ← INPUT()
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
}`,hints:["Initialize before the loop","Decision that loops back = REPEAT UNTIL","Code inside loop is the body"],explanation:'The arrow looping back indicates repetition. The decision "count > 5?" with a loop-back path becomes REPEAT UNTIL (count > 5).'},{id:"fc-018",title:"Loop Count",difficulty:"intermediate",type:"multiple-choice",description:"Analyze loop behavior.",question:'In a flowchart, a loop has initialization "i ← 1", condition "i > 10?", and increment "i ← i + 2". How many times does the loop body execute?',options:["5 times","6 times","10 times","11 times"],answer:"5 times",hints:["List out the values of i","i starts at 1, increases by 2 each time","Loop continues while i ≤ 10"],explanation:"i values: 1, 3, 5, 7, 9 (all ≤ 10, so loop runs). When i becomes 11, 11 > 10 is true and loop exits. Ran 5 times."},{id:"fc-019",title:"Flowchart Purpose",difficulty:"beginner",type:"multiple-choice",description:"Understand what flowcharts are for.",question:"What is the main purpose of a flowchart?",options:["To write executable code","To visually represent the logic and flow of an algorithm","To store data in a program","To test code for bugs"],answer:"To visually represent the logic and flow of an algorithm",hints:["Flowcharts are visual tools","They show steps and decisions","They're used before or alongside coding"],explanation:"Flowcharts provide a visual representation of how an algorithm works, showing the sequence of steps, decisions, and loops. They help plan and communicate logic before writing actual code."},{id:"fc-020",title:"Arrow Direction",difficulty:"beginner",type:"multiple-choice",description:"Understand flow direction.",question:"In a standard flowchart, what is the typical direction of flow?",options:["Right to left","Bottom to top","Top to bottom, left to right","Randomly in any direction"],answer:"Top to bottom, left to right",hints:["Think about how you read text",'Where is "Start" usually placed?','Where is "End" usually placed?'],explanation:"Flowcharts follow a top-to-bottom, left-to-right flow by convention. Start is at the top, End is at the bottom, and operations flow downward. This makes flowcharts easy to read like text."}],Uc={week1:{title:"Fetching & Displaying Data",bigIdea:"Data from the internet can be loaded and displayed using fetch() and JavaScript.",days:[{day:1,title:"Introduction to Data & APIs",objective:"Understand what APIs are and why they matter",exercises:[{id:"d1d1-1",title:"API Explorer",difficulty:"Easy",points:10,description:"View raw JSON data from a public API in the console",prompt:"Use fetch() to get data from the ISS location API and log it to the console. The API URL is: https://api.wheretheiss.at/v1/satellites/25544",starterCode:`// This exercise runs in the browser console
// We'll use p5.js to display results

let issData = null;

function setup() {
  createCanvas(800, 400);
  textSize(16);

  // Fetch ISS location data
  // Use: fetch(url).then(response => response.json()).then(data => ...)

}

function draw() {
  background(30);
  fill(255);

  if (issData) {
    text("ISS Location Data Loaded!", 50, 50);
    text("Check the console for the full data", 50, 80);
    // Display some data here
  } else {
    text("Loading data...", 50, 50);
  }
}`,solutionCode:`let issData = null;

function setup() {
  createCanvas(800, 400);
  textSize(16);

  // Fetch ISS location data
  fetch('https://api.wheretheiss.at/v1/satellites/25544')
    .then(response => response.json())
    .then(data => {
      console.log("Full API Response:", data);
      issData = data;
    });
}

function draw() {
  background(30);
  fill(255);

  if (issData) {
    text("ISS Location Data Loaded!", 50, 50);
    text("Timestamp: " + issData.timestamp, 50, 100);
    text("Latitude: " + issData.latitude, 50, 130);
    text("Longitude: " + issData.longitude, 50, 160);
    text("Message: " + issData.message, 50, 190);
  } else {
    text("Loading data...", 50, 50);
  }
}`,hints:["fetch() returns a Promise - use .then() to handle the result","The first .then() converts the response to JSON","The second .then() receives the actual data","Use console.log() to see the full data structure"],vocabularyTerms:["api","fetch","promise","json"],resources:[{title:"MDN: Fetch API",url:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},{title:"Where The ISS At API",url:"https://wheretheiss.at/w/developer"}]},{id:"d1d1-2",title:"API Response Anatomy",difficulty:"Easy",points:10,description:"Explore and display different parts of an API response",prompt:"Fetch a random joke from the Joke API and display the setup and punchline on the canvas.",starterCode:`let joke = null;

function setup() {
  createCanvas(800, 400);
  textSize(20);
  textAlign(CENTER, CENTER);

  // Fetch from: https://official-joke-api.appspot.com/random_joke

}

function draw() {
  background(50, 50, 80);
  fill(255);

  if (joke) {
    // Display joke.setup at y = height/3
    // Display joke.punchline at y = 2*height/3
  } else {
    text("Loading joke...", width/2, height/2);
  }
}

function mousePressed() {
  // Fetch a new joke when clicked
}`,solutionCode:`let joke = null;

function setup() {
  createCanvas(800, 400);
  textSize(20);
  textAlign(CENTER, CENTER);

  fetchJoke();
}

function fetchJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      joke = data;
      console.log(joke);
    });
}

function draw() {
  background(50, 50, 80);
  fill(255);

  if (joke) {
    fill(255, 255, 100);
    text(joke.setup, width/2, height/3);
    fill(100, 255, 100);
    text(joke.punchline, width/2, 2*height/3);

    fill(150);
    textSize(14);
    text("Click for a new joke!", width/2, height - 30);
    textSize(20);
  } else {
    text("Loading joke...", width/2, height/2);
  }
}

function mousePressed() {
  joke = null; // Show loading
  fetchJoke();
}`,hints:["The joke API returns an object with 'setup' and 'punchline' properties","Create a separate function for fetching to reuse it","Set joke to null before fetching to show loading state"],vocabularyTerms:["api","json","property","response"]}],exitTicket:"What are the two .then() calls doing when we fetch JSON data?"},{day:2,title:"Fetch Basics - Loading Text & Images",objective:"Use fetch() to load different types of content",exercises:[{id:"d1d2-1",title:"Fetch and Display Text",difficulty:"Easy",points:10,description:"Load a text file and display its contents",prompt:"Fetch the text content from a URL and display it on the canvas. We'll use a sample haiku.",starterCode:`let poemText = "";

function setup() {
  createCanvas(800, 400);
  textSize(24);
  textAlign(CENTER, CENTER);

  // For text, use response.text() instead of response.json()
  // Sample text URL (or use your own):
  // We'll simulate with a data URL for this exercise

  let haiku = "An old silent pond...\\nA frog jumps into the pond,\\nsplash! Silence again.";

  // In real usage, you would fetch from a URL like:
  // fetch('https://example.com/poem.txt')
  //   .then(response => response.text())
  //   .then(text => { poemText = text; });

  // For this exercise, simulate the fetch:
  simulateFetch();
}

function simulateFetch() {
  // Simulate async behavior
  setTimeout(() => {
    poemText = "An old silent pond...\\nA frog jumps into the pond,\\nsplash! Silence again.";
  }, 500);
}

function draw() {
  background(245, 240, 230);

  if (poemText) {
    fill(50);
    // Split by newline and display each line
    let lines = poemText.split('\\n');
    for (let i = 0; i < lines.length; i++) {
      text(lines[i], width/2, 120 + i * 50);
    }
  } else {
    fill(100);
    text("Loading...", width/2, height/2);
  }
}`,solutionCode:`let poemText = "";

function setup() {
  createCanvas(800, 400);
  textSize(24);
  textAlign(CENTER, CENTER);

  // Simulate fetching text (in real app, use actual URL)
  // fetch('https://example.com/poem.txt')
  //   .then(response => response.text())
  //   .then(text => { poemText = text; });

  simulateFetch();
}

function simulateFetch() {
  // Simulate network delay
  setTimeout(() => {
    poemText = "An old silent pond...\\nA frog jumps into the pond,\\nsplash! Silence again.";
  }, 500);
}

function draw() {
  background(245, 240, 230);

  // Decorative border
  noFill();
  stroke(150, 100, 50);
  strokeWeight(3);
  rect(50, 50, width-100, height-100);

  if (poemText) {
    fill(50, 30, 20);
    noStroke();
    let lines = poemText.split('\\n');
    for (let i = 0; i < lines.length; i++) {
      text(lines[i], width/2, 140 + i * 60);
    }

    fill(150);
    textSize(14);
    text("- Matsuo Basho", width/2, height - 80);
    textSize(24);
  } else {
    fill(100);
    text("Loading poem...", width/2, height/2);
  }
}`,hints:["For text files, use response.text() instead of response.json()","split('\\n') breaks a string into an array by newlines","Loop through the lines array to display each line"],vocabularyTerms:["fetch","text","response","split"]},{id:"d1d2-2",title:"Loading Images from URLs",difficulty:"Easy",points:15,description:"Load and display an image from a URL using p5.js",prompt:"Use loadImage() to fetch an image from a URL and display it on the canvas.",starterCode:`let catImage;
let imageLoaded = false;

function preload() {
  // loadImage() in preload() ensures image is ready before setup()
  // Use a placeholder image service:
  // https://placekitten.com/400/300
}

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(40);

  if (imageLoaded) {
    // Draw the image centered on canvas
    // image(img, x, y, width, height)
  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Loading image...", width/2, height/2);
  }
}`,solutionCode:`let catImage;
let imageLoaded = false;

function preload() {
  // loadImage() fetches the image before setup runs
  catImage = loadImage('https://placekitten.com/400/300',
    // Success callback
    () => { imageLoaded = true; },
    // Error callback
    () => { console.log("Failed to load image"); }
  );
}

function setup() {
  createCanvas(800, 500);
  imageMode(CENTER);
}

function draw() {
  background(40);

  if (imageLoaded) {
    // Draw image centered
    image(catImage, width/2, height/2);

    // Add a frame
    noFill();
    stroke(255);
    strokeWeight(4);
    rect(width/2 - 202, height/2 - 152, 404, 304);

    // Caption
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(16);
    text("Image loaded from URL!", width/2, height/2 + 180);
  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Loading image...", width/2, height/2);
  }
}`,hints:["preload() runs before setup() and waits for assets to load","loadImage() takes a URL and optional success/error callbacks","imageMode(CENTER) makes the x,y the center of the image"],vocabularyTerms:["preload","loadImage","callback","async"]},{id:"d1d2-3",title:"Random Image Gallery",difficulty:"Medium",points:15,description:"Create a gallery that loads random images on click",prompt:"Build a simple gallery that loads a new random image each time you click.",starterCode:`let currentImage;
let loading = true;

function setup() {
  createCanvas(800, 500);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  loadNewImage();
}

function loadNewImage() {
  loading = true;
  // Load random image using random dimensions
  // https://picsum.photos/WIDTH/HEIGHT returns a random image
}

function draw() {
  background(30);

  if (loading) {
    fill(255);
    textSize(24);
    text("Loading...", width/2, height/2);
  } else {
    // Draw image and instructions
  }
}

function mousePressed() {
  // Load a new random image
}`,solutionCode:`let currentImage;
let loading = true;
let imageCount = 0;

function setup() {
  createCanvas(800, 500);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
  loadNewImage();
}

function loadNewImage() {
  loading = true;
  // Add timestamp to prevent caching
  let url = 'https://picsum.photos/500/350?' + Date.now();

  loadImage(url,
    (img) => {
      currentImage = img;
      loading = false;
      imageCount++;
    },
    () => {
      console.log("Error loading image");
      loading = false;
    }
  );
}

function draw() {
  background(30);

  if (loading) {
    fill(255);
    textSize(24);
    text("Loading...", width/2, height/2);

    // Simple loading animation
    noFill();
    stroke(255);
    strokeWeight(3);
    let angle = frameCount * 0.1;
    arc(width/2, height/2 + 50, 40, 40, angle, angle + PI);
  } else if (currentImage) {
    // Draw image
    image(currentImage, width/2, height/2 - 20);

    // Frame
    noFill();
    stroke(255);
    strokeWeight(2);
    rect(width/2 - 252, height/2 - 197, 504, 354);

    // Info
    fill(255);
    noStroke();
    textSize(16);
    text("Image #" + imageCount + " | Click anywhere for a new image", width/2, height - 40);
  }
}

function mousePressed() {
  loadNewImage();
}`,hints:["Add a timestamp to the URL to prevent browser caching","Date.now() returns current time in milliseconds","Track loading state to show appropriate UI"],vocabularyTerms:["loadImage","callback","cache","async"]}],exitTicket:"What's the difference between response.json() and response.text()?"},{day:3,title:"Async/Await - Modern Fetching",objective:"Convert callback-based code to cleaner async/await syntax",exercises:[{id:"d1d3-1",title:"Async/Await Basics",difficulty:"Medium",points:15,description:"Rewrite fetch code using async/await instead of .then()",prompt:"Convert the .then() chain to use async/await syntax. This makes asynchronous code read more like synchronous code.",starterCode:`let userData = null;

function setup() {
  createCanvas(800, 400);
  textSize(16);

  // Original .then() version:
  // fetch('https://randomuser.me/api/')
  //   .then(response => response.json())
  //   .then(data => { userData = data.results[0]; });

  // Rewrite using async/await:
  getData();
}

async function getData() {
  // Use await to pause until the Promise resolves
  // let response = await fetch(url);
  // let data = await response.json();
}

function draw() {
  background(40, 44, 52);
  fill(255);

  if (userData) {
    text("Random User Profile", 50, 40);
    text("Name: " + userData.name.first + " " + userData.name.last, 50, 80);
    text("Email: " + userData.email, 50, 110);
    text("Country: " + userData.location.country, 50, 140);
  } else {
    text("Loading user data...", 50, 50);
  }
}`,solutionCode:`let userData = null;

function setup() {
  createCanvas(800, 400);
  textSize(16);
  getData();
}

async function getData() {
  // async/await version - much cleaner!
  let response = await fetch('https://randomuser.me/api/');
  let data = await response.json();
  userData = data.results[0];
  console.log("User loaded:", userData);
}

function draw() {
  background(40, 44, 52);
  fill(255);

  if (userData) {
    // Title
    textSize(24);
    fill(100, 200, 255);
    text("Random User Profile", 50, 40);

    // User info
    textSize(16);
    fill(255);
    text("Name: " + userData.name.first + " " + userData.name.last, 50, 90);
    text("Email: " + userData.email, 50, 120);
    text("City: " + userData.location.city, 50, 150);
    text("Country: " + userData.location.country, 50, 180);

    fill(150);
    text("Click to load new user", 50, 240);
  } else {
    text("Loading user data...", 50, 50);
  }
}

function mousePressed() {
  userData = null;
  getData();
}`,hints:["Add 'async' before the function keyword","Use 'await' before each Promise (fetch, response.json)","The code pauses at each await until the Promise resolves","This is just syntax sugar - it still runs asynchronously!"],vocabularyTerms:["async","await","promise","fetch"]},{id:"d1d3-2",title:"Error Handling with Try/Catch",difficulty:"Medium",points:15,description:"Add error handling to async code using try/catch",prompt:"Wrap the async fetch in a try/catch block to handle errors gracefully.",starterCode:`let data = null;
let errorMsg = null;

function setup() {
  createCanvas(800, 400);
  textSize(16);
  getData();
}

async function getData() {
  // Wrap in try/catch to handle errors
  // try {
  //   ... fetch code ...
  // } catch (error) {
  //   ... handle error ...
  // }

  // Use this URL (sometimes fails for demo):
  // 'https://randomuser.me/api/'

  // Or use a bad URL to see error handling:
  // 'https://fake-api-that-doesnt-exist.com/data'
}

function draw() {
  background(40, 44, 52);

  if (errorMsg) {
    fill(255, 100, 100);
    text("Error: " + errorMsg, 50, 50);
    text("Click to retry", 50, 80);
  } else if (data) {
    fill(100, 255, 100);
    text("Success! Data loaded.", 50, 50);
    fill(255);
    text("User: " + data.name.first, 50, 90);
  } else {
    fill(255);
    text("Loading...", 50, 50);
  }
}

function mousePressed() {
  data = null;
  errorMsg = null;
  getData();
}`,solutionCode:`let data = null;
let errorMsg = null;
let useBadUrl = false;

function setup() {
  createCanvas(800, 400);
  textSize(16);
  getData();
}

async function getData() {
  try {
    // Toggle between good and bad URL to test error handling
    let url = useBadUrl
      ? 'https://fake-api-that-doesnt-exist.com/data'
      : 'https://randomuser.me/api/';

    let response = await fetch(url);

    // Check if response is OK (status 200-299)
    if (!response.ok) {
      throw new Error('HTTP error! Status: ' + response.status);
    }

    let json = await response.json();
    data = json.results[0];
    errorMsg = null;

  } catch (error) {
    console.log("Caught error:", error);
    errorMsg = error.message;
    data = null;
  }
}

function draw() {
  background(40, 44, 52);

  if (errorMsg) {
    fill(255, 100, 100);
    textSize(20);
    text("Error!", 50, 50);
    textSize(14);
    text(errorMsg, 50, 80);

    fill(150);
    text("Click to retry", 50, 130);
    text("Press 'T' to toggle good/bad URL", 50, 150);

  } else if (data) {
    fill(100, 255, 100);
    textSize(20);
    text("Success!", 50, 50);

    textSize(16);
    fill(255);
    text("Name: " + data.name.first + " " + data.name.last, 50, 90);
    text("Email: " + data.email, 50, 120);

    fill(150);
    text("Click for new user | Press 'T' to toggle URL", 50, 180);

  } else {
    fill(255);
    text("Loading...", 50, 50);
  }

  // Show current URL mode
  fill(100);
  textSize(12);
  text("URL mode: " + (useBadUrl ? "BAD (will fail)" : "GOOD"), 50, height - 20);
}

function mousePressed() {
  data = null;
  errorMsg = null;
  getData();
}

function keyPressed() {
  if (key === 't' || key === 'T') {
    useBadUrl = !useBadUrl;
    data = null;
    errorMsg = null;
    getData();
  }
}`,hints:["Wrap async code in try { } catch (error) { }","Check response.ok to catch HTTP errors","throw new Error() creates an error you can catch","The catch block receives the error object"],vocabularyTerms:["try","catch","error","throw"]}],exitTicket:"Why is async/await often preferred over .then() chains?"},{day:4,title:"Working with CSV Data",objective:"Load, parse, and visualize tabular data from CSV files",exercises:[{id:"d1d4-1",title:"Understanding CSV Format",difficulty:"Easy",points:10,description:"Parse CSV text into usable data",prompt:"Parse a CSV string by splitting it into rows and columns, then display the data.",starterCode:`// CSV data as a string (normally loaded from a file)
let csvText = \`name,score,level
Alice,850,5
Bob,720,4
Charlie,990,6
Diana,680,3
Eve,810,5\`;

let rows = [];

function setup() {
  createCanvas(800, 400);
  textSize(16);

  // Parse the CSV:
  // 1. Split by newlines to get rows
  // 2. Split each row by commas to get columns

  let lines = csvText.split('\\n');
  // First line is headers
  // Remaining lines are data
}

function draw() {
  background(240);
  fill(0);

  // Display the parsed data as a table
  text("Name", 50, 50);
  text("Score", 200, 50);
  text("Level", 350, 50);

  // Draw rows...
}`,solutionCode:`let csvText = \`name,score,level
Alice,850,5
Bob,720,4
Charlie,990,6
Diana,680,3
Eve,810,5\`;

let headers = [];
let rows = [];

function setup() {
  createCanvas(800, 400);
  textSize(16);

  // Parse CSV
  let lines = csvText.split('\\n');
  headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    let values = lines[i].split(',');
    rows.push({
      name: values[0],
      score: parseInt(values[1]),
      level: parseInt(values[2])
    });
  }

  console.log("Headers:", headers);
  console.log("Rows:", rows);
}

function draw() {
  background(240);

  // Header row
  fill(50);
  textStyle(BOLD);
  text("Name", 50, 50);
  text("Score", 200, 50);
  text("Level", 350, 50);

  // Separator line
  stroke(150);
  line(50, 60, 450, 60);

  // Data rows
  textStyle(NORMAL);
  noStroke();
  for (let i = 0; i < rows.length; i++) {
    let y = 90 + i * 30;
    let row = rows[i];

    fill(0);
    text(row.name, 50, y);
    text(row.score, 200, y);
    text(row.level, 350, y);

    // Visual score bar
    fill(100, 150, 255);
    rect(200, y - 12, row.score / 10, 15);
  }

  fill(100);
  textSize(12);
  text("CSV parsed: " + rows.length + " data rows", 50, height - 20);
}`,hints:["split('\\n') breaks string into lines","split(',') breaks each line into values","The first line contains column headers","parseInt() converts string numbers to integers"],vocabularyTerms:["csv","parse","split","headers"]},{id:"d1d4-2",title:"Loading CSV with p5.js",difficulty:"Medium",points:15,description:"Use p5.js loadTable() to load and display CSV data",prompt:"Use loadTable() to load CSV data and display it. We'll create sample data inline.",starterCode:`let table;

function preload() {
  // For this exercise, we'll create the table manually
  // In real usage: table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 500);

  // Create a table manually (simulating loaded CSV)
  table = new p5.Table();
  table.addColumn('city');
  table.addColumn('population');
  table.addColumn('area');

  // Add rows of data
  let row = table.addRow();
  row.setString('city', 'Tokyo');
  row.setNum('population', 37400068);
  row.setNum('area', 2194);

  // Add more cities...
}

function draw() {
  background(30);
  fill(255);

  // Display table data
  // table.getRowCount() - number of rows
  // table.getString(row, column) - get string value
  // table.getNum(row, column) - get number value
}`,solutionCode:`let table;

function preload() {
  // Normally: table = loadTable('cities.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 500);
  textSize(14);

  // Create table manually
  table = new p5.Table();
  table.addColumn('city');
  table.addColumn('population');
  table.addColumn('area');

  // Add city data
  addCity('Tokyo', 37400068, 2194);
  addCity('Delhi', 28514000, 1484);
  addCity('Shanghai', 25582000, 6341);
  addCity('Sao Paulo', 21650000, 1521);
  addCity('Mexico City', 21581000, 1485);
  addCity('Cairo', 20076000, 3085);
  addCity('Mumbai', 19980000, 603);
  addCity('Beijing', 19618000, 16411);
}

function addCity(city, pop, area) {
  let row = table.addRow();
  row.setString('city', city);
  row.setNum('population', pop);
  row.setNum('area', area);
}

function draw() {
  background(30, 35, 45);

  // Title
  fill(100, 200, 255);
  textSize(20);
  text("World's Largest Cities", 50, 40);

  // Headers
  textSize(14);
  fill(150);
  text("City", 50, 80);
  text("Population", 200, 80);
  text("Density (per km²)", 350, 80);

  stroke(80);
  line(50, 90, 550, 90);

  // Data rows
  noStroke();
  let maxPop = 40000000;

  for (let r = 0; r < table.getRowCount(); r++) {
    let y = 115 + r * 35;

    let city = table.getString(r, 'city');
    let pop = table.getNum(r, 'population');
    let area = table.getNum(r, 'area');
    let density = Math.round(pop / area);

    // City name
    fill(255);
    text(city, 50, y);

    // Population with bar
    let barWidth = (pop / maxPop) * 120;
    fill(100, 180, 255, 150);
    rect(200, y - 12, barWidth, 16);
    fill(255);
    text((pop / 1000000).toFixed(1) + "M", 200 + barWidth + 5, y);

    // Density
    fill(200);
    text(density.toLocaleString(), 350, y);
  }

  // Footer
  fill(80);
  textSize(11);
  text("Data: table with " + table.getRowCount() + " rows, " + table.getColumnCount() + " columns", 50, height - 20);
}`,hints:["loadTable() loads CSV files in preload()","getRowCount() returns number of data rows","getString(row, col) and getNum(row, col) get values","Columns can be accessed by name if CSV has headers"],vocabularyTerms:["loadTable","csv","getRowCount","getString"]},{id:"d1d4-3",title:"Simple Bar Chart",difficulty:"Medium",points:20,description:"Create a bar chart visualization from data",prompt:"Build a bar chart showing the data values. Scale the bars to fit the canvas.",starterCode:`let data = [
  { label: "Jan", value: 65 },
  { label: "Feb", value: 78 },
  { label: "Mar", value: 52 },
  { label: "Apr", value: 91 },
  { label: "May", value: 83 },
  { label: "Jun", value: 70 }
];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(250);

  // Draw a bar chart
  // - Calculate bar width based on canvas and data length
  // - Scale bar heights to fit canvas
  // - Add labels and values

  // Find max value for scaling
  let maxVal = 0;
  for (let d of data) {
    if (d.value > maxVal) maxVal = d.value;
  }

  // Draw bars...
}`,solutionCode:`let data = [
  { label: "Jan", value: 65 },
  { label: "Feb", value: 78 },
  { label: "Mar", value: 52 },
  { label: "Apr", value: 91 },
  { label: "May", value: 83 },
  { label: "Jun", value: 70 }
];

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER);
}

function draw() {
  background(250);

  // Chart settings
  let chartLeft = 80;
  let chartRight = width - 50;
  let chartTop = 60;
  let chartBottom = height - 80;
  let chartHeight = chartBottom - chartTop;

  // Find max value
  let maxVal = 0;
  for (let d of data) {
    if (d.value > maxVal) maxVal = d.value;
  }
  maxVal = Math.ceil(maxVal / 10) * 10; // Round up to nearest 10

  // Draw title
  fill(50);
  textSize(20);
  text("Monthly Sales", width / 2, 35);

  // Draw axes
  stroke(150);
  strokeWeight(1);
  line(chartLeft, chartBottom, chartRight, chartBottom); // X axis
  line(chartLeft, chartTop, chartLeft, chartBottom); // Y axis

  // Y axis labels
  textSize(12);
  textAlign(RIGHT, CENTER);
  fill(100);
  noStroke();
  for (let i = 0; i <= 4; i++) {
    let y = map(i, 0, 4, chartBottom, chartTop);
    let val = Math.round((i / 4) * maxVal);
    text(val, chartLeft - 10, y);

    // Grid line
    stroke(230);
    line(chartLeft, y, chartRight, y);
    noStroke();
  }

  // Draw bars
  let barWidth = (chartRight - chartLeft) / data.length - 20;
  textAlign(CENTER);

  for (let i = 0; i < data.length; i++) {
    let x = chartLeft + 10 + i * ((chartRight - chartLeft) / data.length) + barWidth / 2;
    let barHeight = map(data[i].value, 0, maxVal, 0, chartHeight);
    let y = chartBottom - barHeight;

    // Bar
    fill(70, 130, 180);
    noStroke();
    rect(x - barWidth / 2, y, barWidth, barHeight, 3, 3, 0, 0);

    // Value label
    fill(50);
    textSize(14);
    text(data[i].value, x, y - 10);

    // X axis label
    fill(80);
    textSize(12);
    text(data[i].label, x, chartBottom + 20);
  }
}`,hints:["Find the maximum value first for scaling","map() converts a value from one range to another","Calculate bar width based on available space","Leave margins for labels and axes"],vocabularyTerms:["visualization","map","scale","chart"]}],exitTicket:"Why do we need to find the maximum value before drawing a bar chart?"},{day:5,title:"Working with JSON Data",objective:"Navigate and display data from JSON APIs",exercises:[{id:"d1d5-1",title:"JSON Structure Navigation",difficulty:"Easy",points:10,description:"Access nested properties in JSON data",prompt:"Given a JSON object with nested data, access and display different properties using dot notation.",starterCode:`let userData = {
  "id": 12345,
  "name": {
    "first": "Alex",
    "last": "Johnson"
  },
  "contact": {
    "email": "alex@example.com",
    "phone": {
      "home": "555-1234",
      "work": "555-5678"
    }
  },
  "hobbies": ["coding", "gaming", "hiking"],
  "active": true
};

function setup() {
  createCanvas(800, 500);
  textSize(16);
}

function draw() {
  background(40, 44, 52);
  fill(255);

  // Access and display nested properties:
  // - Full name (first + last)
  // - Email
  // - Work phone
  // - Second hobby
  // - Active status

  text("User Profile", 50, 40);

  // Your code here...
  // Example: userData.name.first gets "Alex"
  // Example: userData.hobbies[0] gets "coding"
}`,solutionCode:`let userData = {
  "id": 12345,
  "name": {
    "first": "Alex",
    "last": "Johnson"
  },
  "contact": {
    "email": "alex@example.com",
    "phone": {
      "home": "555-1234",
      "work": "555-5678"
    }
  },
  "hobbies": ["coding", "gaming", "hiking"],
  "active": true
};

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(40, 44, 52);

  // Title
  fill(100, 200, 255);
  textSize(24);
  text("User Profile", 50, 50);

  // Draw sections
  textSize(16);

  // Name (nested object)
  fill(180);
  text("Name:", 50, 100);
  fill(255);
  text(userData.name.first + " " + userData.name.last, 200, 100);

  // ID
  fill(180);
  text("ID:", 50, 130);
  fill(255);
  text(userData.id, 200, 130);

  // Email (nested)
  fill(180);
  text("Email:", 50, 160);
  fill(255);
  text(userData.contact.email, 200, 160);

  // Phone (deeply nested)
  fill(180);
  text("Work Phone:", 50, 190);
  fill(255);
  text(userData.contact.phone.work, 200, 190);

  // Hobbies (array)
  fill(180);
  text("Hobbies:", 50, 230);
  fill(255);
  for (let i = 0; i < userData.hobbies.length; i++) {
    text("• " + userData.hobbies[i], 200, 230 + i * 25);
  }

  // Active status (boolean)
  fill(180);
  text("Status:", 50, 320);
  if (userData.active) {
    fill(100, 255, 100);
    text("Active", 200, 320);
  } else {
    fill(255, 100, 100);
    text("Inactive", 200, 320);
  }

  // Show JSON path examples
  fill(80);
  textSize(12);
  text("Access patterns:", 50, 380);
  text("userData.name.first → '" + userData.name.first + "'", 50, 400);
  text("userData.contact.phone.work → '" + userData.contact.phone.work + "'", 50, 420);
  text("userData.hobbies[1] → '" + userData.hobbies[1] + "'", 50, 440);
}`,hints:["Use dot notation: object.property.nestedProperty","Arrays use bracket notation: array[index]","Combine both: object.arrayProperty[0]","Booleans can be used directly in if statements"],vocabularyTerms:["json","nested","dot-notation","property"]},{id:"d1d5-2",title:"Fetching and Displaying JSON",difficulty:"Medium",points:15,description:"Fetch JSON from an API and display it visually",prompt:"Fetch user data from the Random User API and create a profile card display.",starterCode:`let user = null;

function setup() {
  createCanvas(800, 500);
  loadUser();
}

async function loadUser() {
  // Fetch from: https://randomuser.me/api/
  // The response has a results array with one user object
}

function draw() {
  background(240);

  if (user) {
    // Create a profile card with:
    // - Name
    // - Email
    // - Location (city, country)
    // - Age
  } else {
    fill(100);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Loading user...", width/2, height/2);
  }
}

function mousePressed() {
  user = null;
  loadUser();
}`,solutionCode:`let user = null;
let userImage = null;

function setup() {
  createCanvas(800, 500);
  loadUser();
}

async function loadUser() {
  try {
    let response = await fetch('https://randomuser.me/api/');
    let data = await response.json();
    user = data.results[0];

    // Load user's profile picture
    userImage = loadImage(user.picture.large);

    console.log("User loaded:", user);
  } catch (error) {
    console.log("Error:", error);
  }
}

function draw() {
  // Gradient background
  for (let y = 0; y < height; y++) {
    let c = lerpColor(color(70, 80, 100), color(40, 45, 60), y / height);
    stroke(c);
    line(0, y, width, y);
  }

  if (user) {
    // Card background
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(width/2, height/2, 400, 350, 15);

    // Profile image
    if (userImage) {
      imageMode(CENTER);
      // Circular clip effect using a mask
      push();
      fill(255);
      circle(width/2, height/2 - 80, 120);
      imageMode(CENTER);
      image(userImage, width/2, height/2 - 80, 110, 110);
      pop();
    }

    // User info
    textAlign(CENTER);
    fill(50);
    textSize(24);
    text(user.name.first + " " + user.name.last, width/2, height/2 + 10);

    textSize(14);
    fill(100);
    text(user.email, width/2, height/2 + 40);

    fill(120);
    text(user.location.city + ", " + user.location.country, width/2, height/2 + 65);

    text("Age: " + user.dob.age, width/2, height/2 + 90);

    // Footer
    fill(150);
    textSize(12);
    text("Click anywhere for a new user", width/2, height/2 + 140);

  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Loading user...", width/2, height/2);
  }
}

function mousePressed() {
  user = null;
  userImage = null;
  loadUser();
}`,hints:["The API returns { results: [user] } - access results[0]","User has nested objects: name.first, location.city, dob.age","loadImage() can load the user's picture.large URL","Use async/await for cleaner code"],vocabularyTerms:["fetch","json","async","api"]},{id:"d1d5-3",title:"JSON Array Visualization",difficulty:"Medium",points:20,description:"Fetch and visualize an array of data from a JSON API",prompt:"Fetch multiple users and display them as cards. Navigate through them with arrow keys.",starterCode:`let users = [];
let currentIndex = 0;

function setup() {
  createCanvas(800, 500);
  loadUsers();
}

async function loadUsers() {
  // Fetch 5 users: https://randomuser.me/api/?results=5
}

function draw() {
  background(50);

  if (users.length > 0) {
    let user = users[currentIndex];
    // Display current user
    // Show navigation instructions
    // Show "Card X of Y"
  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    text("Loading users...", width/2, height/2);
  }
}

function keyPressed() {
  // LEFT_ARROW: previous user
  // RIGHT_ARROW: next user
}`,solutionCode:`let users = [];
let currentIndex = 0;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER);
  loadUsers();
}

async function loadUsers() {
  try {
    let response = await fetch('https://randomuser.me/api/?results=5');
    let data = await response.json();
    users = data.results;
    console.log("Loaded " + users.length + " users");
  } catch (error) {
    console.log("Error:", error);
  }
}

function draw() {
  background(30, 35, 45);

  if (users.length > 0) {
    let user = users[currentIndex];

    // Navigation dots
    for (let i = 0; i < users.length; i++) {
      if (i === currentIndex) {
        fill(100, 200, 255);
      } else {
        fill(80);
      }
      circle(width/2 - 40 + i * 20, 50, 10);
    }

    // Card
    fill(255);
    rectMode(CENTER);
    rect(width/2, height/2, 450, 300, 10);

    // User info
    fill(40);
    textSize(28);
    text(user.name.first + " " + user.name.last, width/2, height/2 - 60);

    textSize(16);
    fill(100);
    text(user.email, width/2, height/2 - 20);

    fill(80);
    text("Location: " + user.location.city + ", " + user.location.country, width/2, height/2 + 20);
    text("Age: " + user.dob.age + " | Gender: " + user.gender, width/2, height/2 + 50);
    text("Phone: " + user.phone, width/2, height/2 + 80);

    // Card counter
    fill(60);
    textSize(14);
    text("Card " + (currentIndex + 1) + " of " + users.length, width/2, height/2 + 120);

    // Navigation instructions
    fill(150);
    textSize(12);
    text("← → Arrow keys to navigate | Click to reload", width/2, height - 30);

  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("Loading users...", width/2, height/2);
  }
}

function keyPressed() {
  if (users.length === 0) return;

  if (keyCode === LEFT_ARROW) {
    currentIndex = (currentIndex - 1 + users.length) % users.length;
  }
  if (keyCode === RIGHT_ARROW) {
    currentIndex = (currentIndex + 1) % users.length;
  }
}

function mousePressed() {
  users = [];
  currentIndex = 0;
  loadUsers();
}`,hints:["Add ?results=5 to the URL to get multiple users","The response still has a results array, but with 5 users","Use modulo (%) to wrap around when navigating","Track currentIndex to show one user at a time"],vocabularyTerms:["array","json","navigation","index"]}],exitTicket:"How do you access the third item in an array that's a property of an object?"}]},week2:{title:"Live Data & Visualization",bigIdea:"Real-time data from public APIs can be visualized and updated continuously.",days:[{day:6,title:"Fetching from Public APIs",objective:"Find, evaluate, and use public APIs",exercises:[{id:"d2d6-1",title:"ISS Location Tracker",difficulty:"Medium",points:15,description:"Fetch and display the current location of the International Space Station",prompt:"Create a visualization that shows the ISS's current latitude and longitude, updating the display.",starterCode:`let issData = null;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER);
  fetchISS();
}

async function fetchISS() {
  // Fetch from: https://api.wheretheiss.at/v1/satellites/25544
  // Response format: { latitude, longitude, altitude, velocity, timestamp, ... }
}

function draw() {
  background(10, 15, 30);

  if (issData) {
    // Display:
    // - Latitude and Longitude
    // - Visual representation (circle on a simple world map)
    // - Timestamp of the data
  } else {
    fill(255);
    text("Loading ISS data...", width/2, height/2);
  }
}

function mousePressed() {
  fetchISS(); // Refresh on click
}`,solutionCode:`let issData = null;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER);
  fetchISS();
}

async function fetchISS() {
  try {
    let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    issData = await response.json();
    console.log("ISS Data:", issData);
  } catch (error) {
    console.log("Error fetching ISS:", error);
  }
}

function draw() {
  // Space background
  background(10, 15, 30);

  // Stars
  fill(255, 200);
  noStroke();
  randomSeed(42);
  for (let i = 0; i < 100; i++) {
    circle(random(width), random(height), random(1, 3));
  }

  if (issData && issData.message === "success") {
    let lat = parseFloat(issData.latitude);
    let lon = parseFloat(issData.longitude);

    // Title
    fill(255);
    textSize(24);
    text("International Space Station Tracker", width/2, 40);

    // Simple world map representation
    stroke(50, 80, 50);
    strokeWeight(1);
    noFill();
    rect(100, 120, 600, 300);

    // Grid lines
    stroke(30, 50, 30);
    for (let x = 100; x <= 700; x += 75) {
      line(x, 120, x, 420);
    }
    for (let y = 120; y <= 420; y += 60) {
      line(100, y, 700, y);
    }

    // Equator
    stroke(50, 100, 50);
    line(100, 270, 700, 270);

    // Prime meridian
    line(400, 120, 400, 420);

    // Map ISS position
    let x = map(lon, -180, 180, 100, 700);
    let y = map(lat, 90, -90, 120, 420);

    // ISS marker
    fill(255, 100, 100);
    noStroke();
    circle(x, y, 15);

    // Pulse effect
    noFill();
    stroke(255, 100, 100, 150);
    strokeWeight(2);
    let pulse = (frameCount % 60) / 60;
    circle(x, y, 15 + pulse * 30);

    // Coordinates display
    fill(255);
    textSize(16);
    text("Latitude: " + lat.toFixed(4) + "°", width/2, 460);
    text("Longitude: " + lon.toFixed(4) + "°", width/2, 480);

    // Timestamp
    fill(150);
    textSize(12);
    let date = new Date(issData.timestamp * 1000);
    text("Last updated: " + date.toLocaleTimeString(), width/2, 500);

  } else {
    fill(255);
    textSize(20);
    text("Loading ISS data...", width/2, height/2);
  }

  // Instructions
  fill(100);
  textSize(11);
  text("Click to refresh", width/2, height - 10);
}

function mousePressed() {
  fetchISS();
}`,hints:["Latitude ranges from -90 (South) to 90 (North)","Longitude ranges from -180 (West) to 180 (East)","Use map() to convert coordinates to screen positions","parseFloat() converts string numbers to floats"],vocabularyTerms:["api","latitude","longitude","map"],resources:[{title:"Where The ISS At API",url:"https://wheretheiss.at/w/developer"}]},{id:"d2d6-2",title:"Cat Fact Generator",difficulty:"Easy",points:10,description:"Fetch and display random cat facts from an API",prompt:"Create a fun cat fact display that fetches a new fact on each click.",starterCode:`let catFact = null;
let loading = false;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  textWrap(WORD);
  fetchFact();
}

async function fetchFact() {
  loading = true;
  // Fetch from: https://catfact.ninja/fact
  // Response: { fact: "...", length: 123 }
}

function draw() {
  background(255, 240, 230);

  if (loading) {
    fill(150);
    text("Loading...", width/2, height/2);
  } else if (catFact) {
    // Display the fact with nice styling
  }
}

function mousePressed() {
  fetchFact();
}`,solutionCode:`let catFact = null;
let loading = false;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  fetchFact();
}

async function fetchFact() {
  loading = true;
  catFact = null;

  try {
    let response = await fetch('https://catfact.ninja/fact');
    let data = await response.json();
    catFact = data.fact;
    loading = false;
  } catch (error) {
    console.log("Error:", error);
    catFact = "Failed to load fact. Click to try again.";
    loading = false;
  }
}

function draw() {
  // Warm background
  background(255, 248, 240);

  // Decorative header
  fill(255, 180, 150);
  noStroke();
  rect(0, 0, width, 80);

  // Title
  fill(80, 50, 30);
  textSize(32);
  textStyle(BOLD);
  text("Cat Facts!", width/2, 45);

  // Cat emoji decoration
  textSize(50);
  text("🐱", 80, 45);
  text("🐱", width - 80, 45);

  textStyle(NORMAL);

  if (loading) {
    fill(150);
    textSize(20);
    text("Loading...", width/2, height/2);
  } else if (catFact) {
    // Fact card
    fill(255);
    stroke(200);
    strokeWeight(2);
    rectMode(CENTER);
    rect(width/2, height/2, 600, 200, 15);

    // Fact text
    noStroke();
    fill(60);
    textSize(18);
    textWrap(WORD);
    text(catFact, width/2 - 270, height/2 - 70, 540, 150);

    // Character count
    fill(150);
    textSize(12);
    text("(" + catFact.length + " characters)", width/2, height/2 + 80);
  }

  // Footer
  fill(150);
  textSize(14);
  text("Click anywhere for a new fact!", width/2, height - 40);
}

function mousePressed() {
  fetchFact();
}`,hints:["The response has a 'fact' property with the text","textWrap(WORD) makes long text wrap at word boundaries","Set loading=true before fetch, false after","Use try/catch to handle errors gracefully"],vocabularyTerms:["api","fetch","async","response"]}],exitTicket:"What information do you need to know to use a public API?"},{day:7,title:"Mapping with Leaflet.js",objective:"Create interactive maps and place markers from data",exercises:[{id:"d2d7-1",title:"Your First Leaflet Map",difficulty:"Medium",points:15,description:"Create an interactive map using Leaflet.js",prompt:"Set up a basic Leaflet map and add a marker at a specific location. Note: This exercise uses HTML/JS outside p5.js.",starterCode:`// This exercise creates a Leaflet map
// The HTML needs: <div id="map" style="height: 400px;"></div>
// And Leaflet CSS/JS from CDN

// For p5.js integration, we'll create a canvas AND a map div

let mapDiv;
let myMap;

function setup() {
  // Create a canvas for title/info
  let canvas = createCanvas(800, 100);
  canvas.position(0, 0);

  // Create map container
  mapDiv = createDiv('');
  mapDiv.id('map');
  mapDiv.style('width', '800px');
  mapDiv.style('height', '400px');
  mapDiv.position(0, 100);

  // Initialize Leaflet map
  // Center on your city or a location you choose
  // Add tile layer
  // Add a marker
}

function draw() {
  background(50);
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text("My First Leaflet Map", width/2, 30);

  fill(150);
  textSize(14);
  text("Drag to pan, scroll to zoom", width/2, 60);
}`,solutionCode:`// Note: Requires Leaflet.js loaded in HTML
// <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
// <script src="https://unpkg.com/leaflet/dist/leaflet.js"><\/script>

let mapDiv;
let myMap;
let marker;

function setup() {
  let canvas = createCanvas(800, 100);
  canvas.position(0, 0);

  // Create map container
  mapDiv = createDiv('');
  mapDiv.id('map');
  mapDiv.style('width', '800px');
  mapDiv.style('height', '400px');
  mapDiv.position(0, 100);

  // Wait a moment for div to be ready
  setTimeout(initMap, 100);
}

function initMap() {
  // Initialize map centered on New York City
  myMap = L.map('map').setView([40.7128, -74.0060], 12);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(myMap);

  // Add a marker
  marker = L.marker([40.7128, -74.0060]).addTo(myMap);
  marker.bindPopup("<b>New York City</b><br>The Big Apple!").openPopup();

  // Add more markers
  L.marker([40.7484, -73.9857]).addTo(myMap)
    .bindPopup("Empire State Building");

  L.marker([40.6892, -74.0445]).addTo(myMap)
    .bindPopup("Statue of Liberty");
}

function draw() {
  background(40, 60, 80);
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("Interactive Map with Leaflet.js", width/2, 35);

  fill(180);
  textSize(14);
  text("Drag to pan • Scroll to zoom • Click markers for info", width/2, 65);
}`,hints:["L.map() creates the map, setView() sets center and zoom","L.tileLayer() adds the map images (tiles)","L.marker() adds clickable markers","bindPopup() adds a popup message to markers"],vocabularyTerms:["leaflet","marker","tile","popup"],resources:[{title:"Leaflet Quick Start",url:"https://leafletjs.com/examples/quick-start/"}]},{id:"d2d7-2",title:"ISS on the Map",difficulty:"Medium",points:20,description:"Plot the ISS location on a Leaflet map",prompt:"Combine the ISS API with Leaflet to show the space station's position on a real map.",starterCode:`let myMap;
let issMarker;

function setup() {
  let canvas = createCanvas(800, 80);
  canvas.position(0, 0);

  let mapDiv = createDiv('');
  mapDiv.id('map');
  mapDiv.style('width', '800px');
  mapDiv.style('height', '420px');
  mapDiv.position(0, 80);

  setTimeout(initMap, 100);
}

function initMap() {
  // Create map centered at 0,0 with zoom level 2 (world view)

  // Add tile layer

  // Add ISS marker (start at 0,0)

  // Fetch and update ISS position
  updateISS();
}

async function updateISS() {
  // Fetch ISS position
  // Update marker position
  // Update popup content
}

function draw() {
  background(20, 25, 40);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("ISS Location on World Map", width/2, 30);

  fill(150);
  textSize(12);
  text("The ISS orbits Earth every 90 minutes at 17,500 mph", width/2, 55);
}`,solutionCode:`let myMap;
let issMarker;
let issLat = 0;
let issLon = 0;

function setup() {
  let canvas = createCanvas(800, 80);
  canvas.position(0, 0);

  let mapDiv = createDiv('');
  mapDiv.id('map');
  mapDiv.style('width', '800px');
  mapDiv.style('height', '420px');
  mapDiv.position(0, 80);

  setTimeout(initMap, 100);
}

function initMap() {
  // World view
  myMap = L.map('map').setView([0, 0], 2);

  // Dark theme tiles
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap, © CARTO'
  }).addTo(myMap);

  // Custom ISS icon
  let issIcon = L.divIcon({
    html: '<div style="font-size: 24px;">🛰️</div>',
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  // Add marker
  issMarker = L.marker([0, 0], { icon: issIcon }).addTo(myMap);
  issMarker.bindPopup("Loading ISS position...");

  // Initial fetch
  updateISS();

  // Update every 5 seconds
  setInterval(updateISS, 5000);
}

async function updateISS() {
  try {
    let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    let data = await response.json();

    issLat = parseFloat(data.latitude);
    issLon = parseFloat(data.longitude);

    // Update marker position
    issMarker.setLatLng([issLat, issLon]);

    // Update popup
    issMarker.setPopupContent(
      "<b>International Space Station</b><br>" +
      "Lat: " + issLat.toFixed(4) + "<br>" +
      "Lon: " + issLon.toFixed(4) + "<br>" +
      "<small>Updated: " + new Date().toLocaleTimeString() + "</small>"
    );

  } catch (error) {
    console.log("Error:", error);
  }
}

function draw() {
  background(20, 25, 40);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("ISS Real-Time Tracker", width/2, 25);

  fill(100, 200, 255);
  textSize(14);
  text("Lat: " + issLat.toFixed(2) + "° | Lon: " + issLon.toFixed(2) + "°", width/2, 50);

  fill(100);
  textSize(11);
  text("Updates every 5 seconds", width/2, 70);
}`,hints:["setLatLng() moves an existing marker","setPopupContent() updates the popup text","L.divIcon() lets you use HTML/emoji as marker icons","Use setInterval() for automatic updates"],vocabularyTerms:["leaflet","marker","setLatLng","setInterval"]}],exitTicket:"What's the difference between setView() and setLatLng()?"},{day:8,title:"Real-Time Updates with setInterval",objective:"Create auto-updating data displays",exercises:[{id:"d2d8-1",title:"Auto-Refresh Data",difficulty:"Medium",points:15,description:"Create a display that automatically refreshes data at intervals",prompt:"Build a random number generator that updates every 2 seconds, showing history of previous values.",starterCode:`let currentValue = 0;
let history = [];
let maxHistory = 10;

function setup() {
  createCanvas(800, 500);

  // Start auto-update every 2 seconds
  // setInterval(functionName, milliseconds)

  updateValue(); // Initial value
}

function updateValue() {
  // Generate new random value
  // Add to history (keep only last 10)
  // Log timestamp
}

function draw() {
  background(30);

  // Display current value prominently
  // Show history as a list or graph
  // Show time since last update
}`,solutionCode:`let currentValue = 0;
let history = [];
let maxHistory = 10;
let lastUpdate = 0;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER);

  // Auto-update every 2 seconds
  setInterval(updateValue, 2000);

  updateValue();
}

function updateValue() {
  currentValue = floor(random(1, 100));
  history.unshift({ value: currentValue, time: new Date() });

  // Keep only last 10
  if (history.length > maxHistory) {
    history.pop();
  }

  lastUpdate = millis();
}

function draw() {
  background(25, 30, 40);

  // Current value
  fill(100, 200, 255);
  textSize(60);
  text(currentValue, width/2, 100);

  fill(150);
  textSize(16);
  text("Current Value", width/2, 140);

  // Time since update
  let elapsed = floor((millis() - lastUpdate) / 1000);
  fill(100);
  textSize(14);
  text("Next update in: " + (2 - elapsed) + "s", width/2, 170);

  // Progress bar for next update
  let progress = (millis() - lastUpdate) / 2000;
  fill(50);
  rect(width/2 - 100, 180, 200, 10, 5);
  fill(100, 200, 255);
  rect(width/2 - 100, 180, progress * 200, 10, 5);

  // History graph
  fill(255);
  textSize(16);
  text("History", width/2, 230);

  // Draw history as bars
  let barWidth = 60;
  let startX = width/2 - (history.length * barWidth) / 2;

  for (let i = 0; i < history.length; i++) {
    let x = startX + i * barWidth + barWidth/2;
    let h = map(history[i].value, 0, 100, 0, 150);

    // Bar
    fill(100, 200, 255, 200 - i * 15);
    noStroke();
    rectMode(CENTER);
    rect(x, 380 - h/2, barWidth - 10, h, 3);

    // Value
    fill(200);
    textSize(12);
    text(history[i].value, x, 320 - h);

    // Time
    fill(100);
    textSize(10);
    let t = history[i].time;
    text(t.toLocaleTimeString(), x, 420);
  }

  // Instructions
  fill(80);
  textSize(12);
  text("Auto-updates every 2 seconds | Click to force update", width/2, height - 20);
}

function mousePressed() {
  updateValue();
}`,hints:["setInterval(func, ms) calls func every ms milliseconds","unshift() adds to the beginning of an array","Track when the last update happened to show countdown","millis() returns time since sketch started"],vocabularyTerms:["setInterval","millis","polling","history"]},{id:"d2d8-2",title:"Live API Dashboard",difficulty:"Hard",points:20,description:"Create a dashboard that displays multiple auto-updating data sources",prompt:"Build a dashboard that fetches data from multiple APIs and updates them independently.",starterCode:`let issData = null;
let jokeData = null;
let factData = null;

function setup() {
  createCanvas(800, 600);

  // Set up different update intervals for each API
  // ISS: every 10 seconds
  // Joke: every 30 seconds
  // Fact: every 20 seconds

  // Initial fetches
  fetchAll();
}

async function fetchISS() {
  // https://api.wheretheiss.at/v1/satellites/25544
}

async function fetchJoke() {
  // https://official-joke-api.appspot.com/random_joke
}

async function fetchFact() {
  // https://catfact.ninja/fact
}

function fetchAll() {
  fetchISS();
  fetchJoke();
  fetchFact();
}

function draw() {
  background(30);

  // Draw three "cards" for each data source
  // Show last update time for each
  // Indicate loading states
}`,solutionCode:`let issData = null;
let jokeData = null;
let factData = null;

let issTime = null;
let jokeTime = null;
let factTime = null;

function setup() {
  createCanvas(800, 600);

  // Different intervals for each
  setInterval(fetchISS, 10000);   // 10 sec
  setInterval(fetchJoke, 30000);  // 30 sec
  setInterval(fetchFact, 20000);  // 20 sec

  fetchAll();
}

async function fetchISS() {
  try {
    let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    issData = await response.json();
    issTime = new Date();
  } catch (e) { console.log("ISS error:", e); }
}

async function fetchJoke() {
  try {
    let response = await fetch('https://official-joke-api.appspot.com/random_joke');
    jokeData = await response.json();
    jokeTime = new Date();
  } catch (e) { console.log("Joke error:", e); }
}

async function fetchFact() {
  try {
    let response = await fetch('https://catfact.ninja/fact');
    factData = await response.json();
    factTime = new Date();
  } catch (e) { console.log("Fact error:", e); }
}

function fetchAll() {
  fetchISS();
  fetchJoke();
  fetchFact();
}

function draw() {
  background(25, 30, 40);

  // Title
  fill(255);
  textSize(24);
  textAlign(CENTER);
  text("Live API Dashboard", width/2, 35);

  // Card dimensions
  let cardW = 240;
  let cardH = 200;
  let cardY = 80;

  // ISS Card
  drawCard(60, cardY, cardW, cardH, "ISS Location", "🛰️",
    issData ? [
      "Lat: " + parseFloat(issData.latitude).toFixed(2) + "°",
      "Lon: " + parseFloat(issData.longitude).toFixed(2) + "°"
    ] : ["Loading..."],
    issTime, 10
  );

  // Joke Card
  drawCard(60 + cardW + 20, cardY, cardW, cardH, "Random Joke", "😄",
    jokeData ? [
      jokeData.setup.substring(0, 30) + (jokeData.setup.length > 30 ? "..." : ""),
      jokeData.punchline.substring(0, 30) + (jokeData.punchline.length > 30 ? "..." : "")
    ] : ["Loading..."],
    jokeTime, 30
  );

  // Fact Card
  drawCard(60 + (cardW + 20) * 2, cardY, cardW, cardH, "Cat Fact", "🐱",
    factData ? [
      factData.fact.substring(0, 80) + (factData.fact.length > 80 ? "..." : "")
    ] : ["Loading..."],
    factTime, 20
  );

  // Instructions
  fill(80);
  textSize(11);
  text("Each card updates on its own schedule | Click to refresh all", width/2, height - 20);
}

function drawCard(x, y, w, h, title, emoji, lines, updateTime, interval) {
  // Card background
  fill(40, 45, 55);
  stroke(60);
  strokeWeight(1);
  rect(x, y, w, h, 10);

  // Emoji and title
  noStroke();
  textAlign(CENTER);
  textSize(30);
  text(emoji, x + w/2, y + 40);

  fill(200);
  textSize(14);
  text(title, x + w/2, y + 65);

  // Content
  textAlign(LEFT);
  fill(255);
  textSize(12);
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], x + 15, y + 95 + i * 18);
  }

  // Update info
  if (updateTime) {
    let ago = floor((Date.now() - updateTime.getTime()) / 1000);
    let next = interval - ago;

    fill(100);
    textSize(10);
    textAlign(CENTER);
    text("Updated " + ago + "s ago", x + w/2, y + h - 30);

    // Progress bar
    fill(50);
    rect(x + 20, y + h - 20, w - 40, 6, 3);
    fill(100, 200, 255);
    let progress = min(ago / interval, 1);
    rect(x + 20, y + h - 20, (w - 40) * progress, 6, 3);
  }
}

function mousePressed() {
  fetchAll();
}`,hints:["Each API can have its own setInterval","Track the last update time for each data source","Use try/catch so one failure doesn't break others","Create a reusable function for drawing cards"],vocabularyTerms:["dashboard","setInterval","multiple-apis","async"]}],exitTicket:"Why might you want different update intervals for different data sources?"},{day:9,title:"Data Visualization with Chart.js",objective:"Create professional charts and graphs",exercises:[{id:"d2d9-1",title:"Line Chart",difficulty:"Medium",points:15,description:"Create a line chart showing data over time",prompt:"Build a line chart using p5.js that shows temperature data over a week.",starterCode:`let temps = [
  { day: "Mon", high: 72, low: 58 },
  { day: "Tue", high: 75, low: 60 },
  { day: "Wed", high: 68, low: 55 },
  { day: "Thu", high: 70, low: 57 },
  { day: "Fri", high: 78, low: 62 },
  { day: "Sat", high: 82, low: 65 },
  { day: "Sun", high: 79, low: 63 }
];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(250);

  // Draw a line chart with:
  // - X axis: days of week
  // - Y axis: temperature
  // - Two lines: high (red) and low (blue)
  // - Labels and title
}`,solutionCode:`let temps = [
  { day: "Mon", high: 72, low: 58 },
  { day: "Tue", high: 75, low: 60 },
  { day: "Wed", high: 68, low: 55 },
  { day: "Thu", high: 70, low: 57 },
  { day: "Fri", high: 78, low: 62 },
  { day: "Sat", high: 82, low: 65 },
  { day: "Sun", high: 79, low: 63 }
];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(250);

  // Chart area
  let left = 80;
  let right = width - 50;
  let top = 80;
  let bottom = height - 80;

  // Title
  fill(50);
  textSize(22);
  textAlign(CENTER);
  text("Weekly Temperature", width/2, 40);

  // Y axis range
  let minTemp = 50;
  let maxTemp = 90;

  // Draw grid and axes
  stroke(220);
  strokeWeight(1);

  // Horizontal grid lines
  for (let t = minTemp; t <= maxTemp; t += 10) {
    let y = map(t, minTemp, maxTemp, bottom, top);
    line(left, y, right, y);

    // Y labels
    noStroke();
    fill(120);
    textAlign(RIGHT, CENTER);
    textSize(12);
    text(t + "°F", left - 10, y);
    stroke(220);
  }

  // Draw axes
  stroke(150);
  strokeWeight(2);
  line(left, top, left, bottom);
  line(left, bottom, right, bottom);

  // Calculate x positions
  let xSpacing = (right - left) / (temps.length - 1);

  // Draw high temperature line
  stroke(220, 80, 80);
  strokeWeight(3);
  noFill();
  beginShape();
  for (let i = 0; i < temps.length; i++) {
    let x = left + i * xSpacing;
    let y = map(temps[i].high, minTemp, maxTemp, bottom, top);
    vertex(x, y);
  }
  endShape();

  // Draw low temperature line
  stroke(80, 120, 220);
  beginShape();
  for (let i = 0; i < temps.length; i++) {
    let x = left + i * xSpacing;
    let y = map(temps[i].low, minTemp, maxTemp, bottom, top);
    vertex(x, y);
  }
  endShape();

  // Draw points and labels
  for (let i = 0; i < temps.length; i++) {
    let x = left + i * xSpacing;
    let yHigh = map(temps[i].high, minTemp, maxTemp, bottom, top);
    let yLow = map(temps[i].low, minTemp, maxTemp, bottom, top);

    // Points
    noStroke();
    fill(220, 80, 80);
    circle(x, yHigh, 10);
    fill(80, 120, 220);
    circle(x, yLow, 10);

    // X labels
    fill(80);
    textAlign(CENTER);
    textSize(12);
    text(temps[i].day, x, bottom + 20);

    // Value labels
    textSize(10);
    fill(180, 60, 60);
    text(temps[i].high, x, yHigh - 12);
    fill(60, 90, 180);
    text(temps[i].low, x, yLow + 18);
  }

  // Legend
  fill(220, 80, 80);
  rect(width - 120, 70, 15, 15);
  fill(80, 120, 220);
  rect(width - 120, 95, 15, 15);

  fill(80);
  textAlign(LEFT);
  textSize(12);
  text("High", width - 100, 82);
  text("Low", width - 100, 107);
}`,hints:["Use beginShape()/vertex()/endShape() for lines","map() converts data values to pixel positions","Draw grid lines first, then data, then labels","Use different colors for different data series"],vocabularyTerms:["line-chart","vertex","beginShape","map"]},{id:"d2d9-2",title:"Interactive Pie Chart",difficulty:"Medium",points:15,description:"Create a pie chart that highlights segments on hover",prompt:"Build a pie chart showing budget categories that highlights when you hover over a segment.",starterCode:`let budget = [
  { category: "Housing", amount: 1500, color: "#FF6384" },
  { category: "Food", amount: 600, color: "#36A2EB" },
  { category: "Transport", amount: 400, color: "#FFCE56" },
  { category: "Utilities", amount: 200, color: "#4BC0C0" },
  { category: "Entertainment", amount: 300, color: "#9966FF" }
];

function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);
}

function draw() {
  background(250);

  // Calculate total
  let total = 0;
  for (let item of budget) {
    total += item.amount;
  }

  // Draw pie chart
  // - Calculate angle for each segment
  // - Detect which segment mouse is over
  // - Highlight hovered segment
  // - Show legend
}`,solutionCode:`let budget = [
  { category: "Housing", amount: 1500, color: "#FF6384" },
  { category: "Food", amount: 600, color: "#36A2EB" },
  { category: "Transport", amount: 400, color: "#FFCE56" },
  { category: "Utilities", amount: 200, color: "#4BC0C0" },
  { category: "Entertainment", amount: 300, color: "#9966FF" }
];

let hoveredIndex = -1;

function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);
}

function draw() {
  background(250);

  // Calculate total
  let total = 0;
  for (let item of budget) {
    total += item.amount;
  }

  // Pie center and radius
  let cx = 300;
  let cy = height / 2;
  let radius = 150;

  // Title
  fill(50);
  textSize(22);
  textAlign(CENTER);
  text("Monthly Budget", cx, 40);

  // Find hovered segment
  hoveredIndex = -1;
  let distFromCenter = dist(mouseX, mouseY, cx, cy);

  if (distFromCenter < radius + 20) {
    let angle = atan2(mouseY - cy, mouseX - cx);
    if (angle < 0) angle += 360;

    let currentAngle = 0;
    for (let i = 0; i < budget.length; i++) {
      let segmentAngle = (budget[i].amount / total) * 360;
      if (angle >= currentAngle && angle < currentAngle + segmentAngle) {
        hoveredIndex = i;
        break;
      }
      currentAngle += segmentAngle;
    }
  }

  // Draw pie
  let startAngle = 0;

  for (let i = 0; i < budget.length; i++) {
    let segmentAngle = (budget[i].amount / total) * 360;

    // Determine if hovered
    let isHovered = (i === hoveredIndex);
    let r = isHovered ? radius + 15 : radius;

    // Draw segment
    fill(budget[i].color);
    stroke(255);
    strokeWeight(2);
    arc(cx, cy, r * 2, r * 2, startAngle, startAngle + segmentAngle, PIE);

    // Label on segment
    let midAngle = startAngle + segmentAngle / 2;
    let labelR = r * 0.6;
    let lx = cx + cos(midAngle) * labelR;
    let ly = cy + sin(midAngle) * labelR;

    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(12);
    let percent = ((budget[i].amount / total) * 100).toFixed(0);
    text(percent + "%", lx, ly);

    startAngle += segmentAngle;
  }

  // Legend
  let legendX = 520;
  let legendY = 120;

  fill(50);
  textSize(16);
  textAlign(LEFT);
  text("Categories", legendX, legendY - 20);

  for (let i = 0; i < budget.length; i++) {
    let y = legendY + i * 35;

    // Color box
    fill(budget[i].color);
    noStroke();
    rect(legendX, y, 20, 20, 3);

    // Text
    fill(i === hoveredIndex ? 0 : 80);
    textSize(14);
    text(budget[i].category, legendX + 30, y + 14);

    // Amount
    fill(i === hoveredIndex ? 0 : 120);
    textSize(12);
    text("$" + budget[i].amount, legendX + 150, y + 14);
  }

  // Tooltip for hovered
  if (hoveredIndex >= 0) {
    let item = budget[hoveredIndex];
    let percent = ((item.amount / total) * 100).toFixed(1);

    fill(50);
    textSize(18);
    textAlign(CENTER);
    text(item.category + ": $" + item.amount + " (" + percent + "%)", cx, cy + radius + 50);
  }

  // Total
  fill(100);
  textSize(14);
  textAlign(CENTER);
  text("Total: $" + total, cx, cy + radius + 80);
}`,hints:["arc() with PIE mode draws pie slices","Use atan2() to find angle from center to mouse","Increase radius for hovered segment to make it 'pop'","Calculate cumulative angles to determine which segment is hovered"],vocabularyTerms:["pie-chart","arc","atan2","hover"]}],exitTicket:"How do you calculate what percentage of a pie chart each segment should be?"},{day:10,title:"Mini-Project: ISS Tracker Dashboard",objective:"Create a complete data visualization project",exercises:[{id:"d2d10-project",title:"ISS Tracker Dashboard",difficulty:"Hard",points:50,isProject:!0,description:"Build a comprehensive ISS tracking dashboard with map and data display",prompt:`Create a dashboard that:
- Shows ISS location on a world map (using Leaflet or p5.js)
- Displays current coordinates
- Updates automatically every 10 seconds
- Shows a history of recent positions
- Displays last update time`,starterCode:`// ISS Tracker Dashboard
// Combines everything from Week 1-2

let issData = null;
let positionHistory = [];
let maxHistory = 20;
let lastUpdate = null;

function setup() {
  createCanvas(800, 600);

  // Initial fetch
  fetchISS();

  // Auto-update every 10 seconds
  setInterval(fetchISS, 10000);
}

async function fetchISS() {
  // Fetch ISS data
  // Add position to history
  // Update lastUpdate timestamp
}

function draw() {
  background(20, 25, 40);

  // Title and header section

  // World map visualization (p5.js version)
  // - Draw simple world outline or grid
  // - Plot current position
  // - Draw trajectory from history

  // Data panel
  // - Current lat/lon
  // - Last update time
  // - Position count in history

  // Instructions
}`,solutionCode:`// ISS Tracker Dashboard

let issData = null;
let positionHistory = [];
let maxHistory = 30;
let lastUpdate = null;

function setup() {
  createCanvas(900, 650);

  fetchISS();
  setInterval(fetchISS, 10000);
}

async function fetchISS() {
  try {
    let response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    issData = await response.json();

    // Add to history
    positionHistory.unshift({
      lat: parseFloat(issData.latitude),
      lon: parseFloat(issData.longitude),
      time: new Date()
    });

    // Limit history
    if (positionHistory.length > maxHistory) {
      positionHistory.pop();
    }

    lastUpdate = new Date();
  } catch (error) {
    console.log("Error:", error);
  }
}

function draw() {
  background(15, 20, 35);

  // Header
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text("International Space Station Tracker", width/2, 40);

  fill(100);
  textSize(12);
  text("Real-time position tracking | Updates every 10 seconds", width/2, 60);

  // Map area
  let mapX = 50;
  let mapY = 90;
  let mapW = 600;
  let mapH = 350;

  // Map background
  fill(25, 35, 55);
  stroke(40, 50, 70);
  strokeWeight(1);
  rect(mapX, mapY, mapW, mapH);

  // Grid lines
  stroke(35, 45, 65);
  // Longitude lines
  for (let lon = -180; lon <= 180; lon += 30) {
    let x = map(lon, -180, 180, mapX, mapX + mapW);
    line(x, mapY, x, mapY + mapH);
  }
  // Latitude lines
  for (let lat = -90; lat <= 90; lat += 30) {
    let y = map(lat, 90, -90, mapY, mapY + mapH);
    line(mapX, y, mapX + mapW, y);
  }

  // Equator and prime meridian
  stroke(50, 70, 90);
  strokeWeight(2);
  let eqY = map(0, 90, -90, mapY, mapY + mapH);
  line(mapX, eqY, mapX + mapW, eqY);
  let pmX = map(0, -180, 180, mapX, mapX + mapW);
  line(pmX, mapY, pmX, mapY + mapH);

  // Draw trajectory
  if (positionHistory.length > 1) {
    noFill();
    stroke(100, 150, 255, 100);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < positionHistory.length; i++) {
      let pos = positionHistory[i];
      let x = map(pos.lon, -180, 180, mapX, mapX + mapW);
      let y = map(pos.lat, 90, -90, mapY, mapY + mapH);
      vertex(x, y);
    }
    endShape();

    // Draw history points
    for (let i = 1; i < positionHistory.length; i++) {
      let pos = positionHistory[i];
      let x = map(pos.lon, -180, 180, mapX, mapX + mapW);
      let y = map(pos.lat, 90, -90, mapY, mapY + mapH);

      let alpha = map(i, 0, positionHistory.length, 200, 30);
      fill(100, 150, 255, alpha);
      noStroke();
      circle(x, y, 6);
    }
  }

  // Current position
  if (issData) {
    let lat = parseFloat(issData.latitude);
    let lon = parseFloat(issData.longitude);
    let x = map(lon, -180, 180, mapX, mapX + mapW);
    let y = map(lat, 90, -90, mapY, mapY + mapH);

    // Pulse effect
    let pulse = (sin(frameCount * 0.1) + 1) / 2;
    noFill();
    stroke(255, 100, 100, 100);
    strokeWeight(2);
    circle(x, y, 20 + pulse * 20);

    // ISS marker
    fill(255, 100, 100);
    noStroke();
    circle(x, y, 14);
    fill(255);
    textSize(10);
    textAlign(CENTER, CENTER);
    text("ISS", x, y);
  }

  // Map labels
  fill(80);
  textSize(10);
  textAlign(CENTER);
  text("-180°", mapX, mapY + mapH + 15);
  text("0°", mapX + mapW/2, mapY + mapH + 15);
  text("180°", mapX + mapW, mapY + mapH + 15);

  textAlign(RIGHT);
  text("90°N", mapX - 5, mapY + 5);
  text("0°", mapX - 5, mapY + mapH/2);
  text("90°S", mapX - 5, mapY + mapH);

  // Data panel
  let panelX = 680;
  let panelY = 90;
  let panelW = 190;

  fill(30, 40, 60);
  stroke(50, 60, 80);
  strokeWeight(1);
  rect(panelX, panelY, panelW, 350, 5);

  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("Current Position", panelX + panelW/2, panelY + 25);

  if (issData) {
    let lat = parseFloat(issData.latitude);
    let lon = parseFloat(issData.longitude);

    textAlign(LEFT);
    textSize(12);
    fill(150);
    text("Latitude:", panelX + 15, panelY + 60);
    text("Longitude:", panelX + 15, panelY + 100);

    fill(100, 200, 255);
    textSize(18);
    text(lat.toFixed(4) + "°", panelX + 15, panelY + 80);
    text(lon.toFixed(4) + "°", panelX + 15, panelY + 120);

    // Direction indicators
    fill(150);
    textSize(11);
    text(lat >= 0 ? "North" : "South", panelX + 130, panelY + 80);
    text(lon >= 0 ? "East" : "West", panelX + 130, panelY + 120);
  }

  // Update info
  fill(150);
  textSize(12);
  textAlign(LEFT);
  text("Last Update:", panelX + 15, panelY + 160);

  if (lastUpdate) {
    fill(255);
    textSize(11);
    text(lastUpdate.toLocaleTimeString(), panelX + 15, panelY + 178);

    // Time until next update
    let elapsed = floor((Date.now() - lastUpdate.getTime()) / 1000);
    let remaining = max(0, 10 - elapsed);

    fill(100);
    text("Next update: " + remaining + "s", panelX + 15, panelY + 198);

    // Progress bar
    fill(40);
    rect(panelX + 15, panelY + 210, panelW - 30, 8, 4);
    fill(100, 200, 255);
    let progress = min(elapsed / 10, 1);
    rect(panelX + 15, panelY + 210, (panelW - 30) * progress, 8, 4);
  }

  // History info
  fill(150);
  textSize(12);
  text("Position History:", panelX + 15, panelY + 250);
  fill(255);
  textSize(14);
  text(positionHistory.length + " / " + maxHistory, panelX + 15, panelY + 270);

  // Stats
  if (positionHistory.length > 1) {
    let first = positionHistory[positionHistory.length - 1];
    let last = positionHistory[0];
    let totalDist = dist(first.lon, first.lat, last.lon, last.lat);

    fill(150);
    textSize(11);
    text("Path span: " + totalDist.toFixed(1) + "°", panelX + 15, panelY + 300);
  }

  // Footer
  fill(80);
  textSize(11);
  textAlign(CENTER);
  text("The ISS orbits Earth every ~90 minutes at ~17,500 mph", width/2, height - 20);
  text("Click to force refresh", width/2, height - 6);
}

function mousePressed() {
  fetchISS();
}`,hints:["Use map() to convert lat/lon to screen coordinates","Store position history as array of objects","Draw trajectory using beginShape()/vertex()/endShape()","Show time-based info like 'next update in X seconds'"],vocabularyTerms:["dashboard","trajectory","real-time","api"],rubric:{"map-display":"ISS position shown on map representation (15 pts)","auto-update":"Data refreshes automatically every 10 seconds (10 pts)",coordinates:"Lat/lon displayed clearly with proper formatting (5 pts)",history:"Position history tracked and displayed (10 pts)","ui-polish":"Clean layout with update time and instructions (10 pts)"}}]}]},week3:{title:"Server-Side Basics (Node.js)",bigIdea:"Servers can store data persistently and keep API keys secret.",serverSide:!0,days:[{day:11,title:"Introduction to Node.js",objective:"Understand server-side JavaScript and set up Node.js",exercises:[{id:"d3d11-1",title:"Hello Node.js",difficulty:"Easy",points:10,description:"Write and run your first Node.js program",prompt:"Create a simple Node.js script that prints messages to the console. This exercise runs in Node.js, not the browser.",starterCode:`// Save this file as: hello.js
// Run with: node hello.js

// Print a greeting
console.log("Hello from Node.js!");

// Try these built-in Node features:

// 1. Print the current directory
// Hint: __dirname

// 2. Print the Node.js version
// Hint: process.version

// 3. Print the current date/time
// Hint: new Date()

// 4. Print a multi-line message
// Hint: Use template literals with backticks`,solutionCode:`// Save this file as: hello.js
// Run with: node hello.js

console.log("Hello from Node.js!");
console.log("==================");

// Current directory
console.log("Current directory:", __dirname);

// Node.js version
console.log("Node.js version:", process.version);

// Current date/time
console.log("Current time:", new Date().toLocaleString());

// Platform info
console.log("Platform:", process.platform);

// Multi-line message
console.log(\`
  Welcome to Server-Side JavaScript!

  With Node.js you can:
  - Build web servers
  - Read and write files
  - Connect to databases
  - Make API requests

  Let's get started!
\`);`,hints:["Node.js runs JavaScript outside the browser","__dirname gives the current folder path","process is a global object with system info","Use console.log() to print output"],vocabularyTerms:["nodejs","server","process","console"],requiresNode:!0},{id:"d3d11-2",title:"Reading Files with Node.js",difficulty:"Medium",points:15,description:"Use the fs module to read files from disk",prompt:"Read a text file using Node.js and display its contents. Create a sample data file first.",starterCode:`// Save as: readfile.js

// Step 1: First, create a file called 'message.txt' with some text

// Step 2: Import the file system module
const fs = require('fs');

// Step 3: Read the file
// Use fs.readFile() for async or fs.readFileSync() for sync

// Async version (recommended):
fs.readFile('message.txt', 'utf8', (error, data) => {
  if (error) {
    console.log("Error reading file:", error.message);
    return;
  }
  // Print the file contents
});

// Or try the sync version:
// const data = fs.readFileSync('message.txt', 'utf8');
// console.log(data);`,solutionCode:`// Save as: readfile.js
// First create message.txt with some content

const fs = require('fs');

console.log("Reading file...");
console.log("================\\n");

// Async version (non-blocking)
fs.readFile('message.txt', 'utf8', (error, data) => {
  if (error) {
    console.log("Error:", error.message);
    console.log("\\nMake sure message.txt exists in the same folder!");
    return;
  }

  console.log("File contents:");
  console.log("--------------");
  console.log(data);
  console.log("--------------");
  console.log("\\nFile length:", data.length, "characters");
  console.log("Line count:", data.split('\\n').length);
});

console.log("\\n(This prints while file is being read - async!)");

// ---- Alternative: Sync version ----
// This blocks until file is read
/*
try {
  const data = fs.readFileSync('message.txt', 'utf8');
  console.log("Contents:", data);
} catch (error) {
  console.log("Error:", error.message);
}
*/`,hints:["require('fs') imports the file system module","'utf8' encoding returns the text as a string","Async methods take a callback function","Always handle errors in file operations"],vocabularyTerms:["fs","require","readFile","callback"],requiresNode:!0}],exitTicket:"What's the difference between fs.readFile() and fs.readFileSync()?"},{day:12,title:"Building a Web Server with Express",objective:"Create a web server that responds to requests",exercises:[{id:"d3d12-1",title:"Your First Express Server",difficulty:"Medium",points:20,description:"Create a basic web server using Express.js",prompt:"Build a simple web server that responds to HTTP requests. Set up routes for different pages.",starterCode:`// Save as: server.js
// Run: npm init -y && npm install express
// Then: node server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// TODO: Add more routes
// app.get('/about', ...)
// app.get('/api/data', ...)

// Start the server
app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});`,solutionCode:`// Save as: server.js
// Setup: npm init -y && npm install express
// Run: node server.js
// Visit: http://localhost:3000

const express = require('express');
const app = express();
const PORT = 3000;

// Homepage route
app.get('/', (req, res) => {
  res.send(\`
    <html>
      <head>
        <title>My First Server</title>
        <style>
          body { font-family: Arial; max-width: 600px; margin: 50px auto; }
          a { margin-right: 15px; }
        </style>
      </head>
      <body>
        <h1>Welcome to My Server!</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/api/time">API: Time</a>
          <a href="/api/random">API: Random</a>
        </nav>
        <p>This server is running on Node.js with Express!</p>
      </body>
    </html>
  \`);
});

// About page
app.get('/about', (req, res) => {
  res.send(\`
    <h1>About This Server</h1>
    <p>Built with Express.js</p>
    <a href="/">Back to Home</a>
  \`);
});

// API route returning JSON
app.get('/api/time', (req, res) => {
  res.json({
    message: "Current server time",
    time: new Date().toISOString(),
    timestamp: Date.now()
  });
});

// API route with random data
app.get('/api/random', (req, res) => {
  res.json({
    number: Math.floor(Math.random() * 100),
    uuid: Math.random().toString(36).substring(2)
  });
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
  console.log('Press Ctrl+C to stop');
});`,hints:["app.get(path, handler) creates a route","res.send() sends HTML, res.json() sends JSON","The server runs until you stop it (Ctrl+C)","Visit localhost:3000 in your browser to test"],vocabularyTerms:["express","route","get","res","req"],requiresNode:!0,resources:[{title:"Express.js Getting Started",url:"https://expressjs.com/en/starter/hello-world.html"}]},{id:"d3d12-2",title:"Serving Static Files",difficulty:"Medium",points:15,description:"Configure Express to serve HTML, CSS, and JavaScript files",prompt:"Set up Express to serve static files from a 'public' folder, including an HTML page with p5.js.",starterCode:`// server.js
const express = require('express');
const app = express();

// Serve static files from 'public' folder
// app.use(express.static('public'));

// Your public folder should have:
// public/
//   index.html
//   sketch.js
//   style.css

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// ---- public/index.html ----
/*
<!DOCTYPE html>
<html>
<head>
  <title>p5.js Sketch</title>
  <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"><\/script>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>My p5.js Sketch</h1>
  <div id="canvas-container"></div>
  <script src="sketch.js"><\/script>
</body>
</html>
*/`,solutionCode:`// server.js
const express = require('express');
const app = express();
const path = require('path');

// Serve static files from 'public' folder
app.use(express.static('public'));

// API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    name: "p5.js Server",
    version: "1.0.0",
    endpoints: ["/", "/api/info"]
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
  console.log('Serving files from /public folder');
});

/*
Create these files in a 'public' folder:

---- public/index.html ----
<!DOCTYPE html>
<html>
<head>
  <title>p5.js with Express</title>
  <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"><\/script>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>p5.js Served by Express</h1>
  <div id="canvas-container"></div>
  <p id="server-info">Loading server info...</p>
  <script src="sketch.js"><\/script>
</body>
</html>

---- public/style.css ----
body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1a1a2e;
  color: white;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #00d9ff;
}

#canvas-container {
  border: 2px solid #00d9ff;
  border-radius: 10px;
  overflow: hidden;
}

---- public/sketch.js ----
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');

  // Fetch from our own API!
  fetch('/api/info')
    .then(res => res.json())
    .then(data => {
      document.getElementById('server-info').textContent =
        'Server: ' + data.name + ' v' + data.version;
    });
}

function draw() {
  background(30, 30, 50);

  // Interactive circle
  fill(0, 217, 255);
  noStroke();
  circle(mouseX, mouseY, 50);

  // Trail effect
  fill(0, 217, 255, 30);
  for (let i = 0; i < 10; i++) {
    circle(mouseX + random(-50, 50), mouseY + random(-50, 50), 20);
  }
}
*/`,hints:["express.static() middleware serves files automatically","Put index.html in public/ - it loads at the root URL","The p5.js sketch can fetch from your own API","Browser requests /sketch.js -> Express serves public/sketch.js"],vocabularyTerms:["static","middleware","public","serve"],requiresNode:!0}],exitTicket:"What does express.static() do?"},{day:13,title:"Geolocation & POST Requests",objective:"Send data from browser to server using POST",exercises:[{id:"d3d13-1",title:"Browser Geolocation",difficulty:"Medium",points:15,description:"Get the user's location using the Geolocation API",prompt:"Use the browser's Geolocation API to get the user's coordinates and display them with p5.js.",starterCode:`// This runs in the browser (p5.js sketch)

let userLocation = null;
let locationError = null;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);

  // Request location permission
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      // Success callback
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          accuracy: position.coords.accuracy
        };
      },
      // Error callback
      (error) => {
        locationError = error.message;
      }
    );
  } else {
    locationError = "Geolocation not supported";
  }
}

function draw() {
  background(30);
  fill(255);
  textSize(20);

  if (locationError) {
    fill(255, 100, 100);
    text("Error: " + locationError, width/2, height/2);
  } else if (userLocation) {
    // Display location info
  } else {
    text("Requesting location...", width/2, height/2);
    text("(Allow location access in your browser)", width/2, height/2 + 30);
  }
}`,solutionCode:`// Browser-side p5.js sketch

let userLocation = null;
let locationError = null;
let watchId = null;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);

  // Check for geolocation support
  if (!navigator.geolocation) {
    locationError = "Geolocation not supported by your browser";
    return;
  }

  // Get current position
  navigator.geolocation.getCurrentPosition(
    // Success
    (position) => {
      userLocation = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
        accuracy: position.coords.accuracy,
        timestamp: new Date(position.timestamp)
      };
      console.log("Location:", userLocation);
    },
    // Error
    (error) => {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          locationError = "Location permission denied";
          break;
        case error.POSITION_UNAVAILABLE:
          locationError = "Location unavailable";
          break;
        case error.TIMEOUT:
          locationError = "Location request timed out";
          break;
        default:
          locationError = error.message;
      }
    },
    // Options
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}

function draw() {
  background(25, 30, 45);

  // Title
  fill(100, 200, 255);
  textSize(28);
  text("Browser Geolocation", width/2, 40);

  if (locationError) {
    // Error state
    fill(255, 100, 100);
    textSize(20);
    text("Error: " + locationError, width/2, height/2);
    fill(150);
    textSize(14);
    text("Check your browser's location permissions", width/2, height/2 + 40);

  } else if (userLocation) {
    // Success state
    fill(255);
    textSize(18);

    // Location card
    fill(40, 50, 70);
    rectMode(CENTER);
    rect(width/2, height/2, 400, 250, 10);

    fill(255);
    textSize(16);
    text("Your Location", width/2, height/2 - 90);

    textSize(14);
    fill(200);
    text("Latitude", width/2 - 80, height/2 - 50);
    text("Longitude", width/2 + 80, height/2 - 50);

    fill(100, 255, 150);
    textSize(22);
    text(userLocation.lat.toFixed(6) + "°", width/2 - 80, height/2 - 20);
    text(userLocation.lon.toFixed(6) + "°", width/2 + 80, height/2 - 20);

    fill(150);
    textSize(12);
    text("Accuracy: ±" + userLocation.accuracy.toFixed(0) + " meters", width/2, height/2 + 30);
    text("Time: " + userLocation.timestamp.toLocaleTimeString(), width/2, height/2 + 50);

    // Compass visualization
    push();
    translate(width/2, height/2 + 100);
    stroke(100, 200, 255);
    strokeWeight(2);
    noFill();
    circle(0, 0, 60);
    fill(100, 200, 255);
    noStroke();
    triangle(0, -25, -8, 5, 8, 5);
    pop();

  } else {
    // Loading state
    fill(255);
    textSize(20);
    text("Requesting your location...", width/2, height/2 - 20);

    fill(150);
    textSize(14);
    text("Please allow location access when prompted", width/2, height/2 + 20);

    // Loading animation
    noFill();
    stroke(100, 200, 255);
    strokeWeight(3);
    let angle = frameCount * 0.1;
    arc(width/2, height/2 + 80, 40, 40, angle, angle + PI);
  }

  // Footer
  fill(80);
  textSize(11);
  noStroke();
  text("Location data stays in your browser (for now)", width/2, height - 20);
}`,hints:["navigator.geolocation.getCurrentPosition() gets location once","The success callback receives a position object","coords.latitude and coords.longitude are the coordinates","Always handle errors - users may deny permission"],vocabularyTerms:["geolocation","navigator","latitude","longitude"],resources:[{title:"MDN Geolocation API",url:"https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"}]},{id:"d3d13-2",title:"POST Request to Server",difficulty:"Hard",points:20,description:"Send data from browser to server using fetch POST",prompt:"Create a full-stack app where the browser sends location data to the server via POST request.",starterCode:`// ===== SERVER CODE (server.js) =====
const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());
app.use(express.static('public'));

// Store received locations (in memory for now)
let locations = [];

// POST endpoint to receive location
app.post('/api/checkin', (req, res) => {
  console.log('Received:', req.body);
  // TODO: Save the location data
  // TODO: Send response
});

// GET endpoint to retrieve locations
app.get('/api/locations', (req, res) => {
  // TODO: Return all locations
});

app.listen(3000, () => console.log('Server on port 3000'));


// ===== CLIENT CODE (public/sketch.js) =====
async function sendLocation(lat, lon) {
  // Use fetch with method: 'POST'
  // Set headers: { 'Content-Type': 'application/json' }
  // Set body: JSON.stringify({ lat, lon, timestamp: Date.now() })
}`,solutionCode:`// ===== SERVER CODE (server.js) =====
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// In-memory storage
let locations = [];

// Receive location check-in
app.post('/api/checkin', (req, res) => {
  const { lat, lon, timestamp } = req.body;

  if (!lat || !lon) {
    return res.status(400).json({ error: 'Missing lat or lon' });
  }

  const entry = {
    id: locations.length + 1,
    lat: parseFloat(lat),
    lon: parseFloat(lon),
    timestamp: timestamp || Date.now(),
    receivedAt: new Date().toISOString()
  };

  locations.push(entry);
  console.log('Check-in #' + entry.id + ':', entry.lat, entry.lon);

  res.json({
    success: true,
    message: 'Location saved!',
    entry: entry,
    totalCheckins: locations.length
  });
});

// Get all locations
app.get('/api/locations', (req, res) => {
  res.json({
    count: locations.length,
    locations: locations
  });
});

// Clear locations (for testing)
app.delete('/api/locations', (req, res) => {
  locations = [];
  res.json({ success: true, message: 'All locations cleared' });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


// ===== CLIENT CODE (public/sketch.js) =====
/*
let userLocation = null;
let serverResponse = null;
let checkinCount = 0;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(25, 30, 45);

  fill(100, 200, 255);
  textSize(24);
  text("Location Check-In App", width/2, 40);

  // Button
  let btnX = width/2, btnY = height/2;
  let isHover = dist(mouseX, mouseY, btnX, btnY) < 60;

  fill(isHover ? color(80, 180, 80) : color(60, 140, 60));
  circle(btnX, btnY, 120);

  fill(255);
  textSize(16);
  text("CHECK IN", btnX, btnY);

  // Status
  fill(150);
  textSize(14);
  if (serverResponse) {
    fill(100, 255, 150);
    text(serverResponse, width/2, height/2 + 100);
  }

  text("Total check-ins: " + checkinCount, width/2, height - 40);
}

function mousePressed() {
  // Check if button clicked
  if (dist(mouseX, mouseY, width/2, height/2) < 60) {
    doCheckin();
  }
}

async function doCheckin() {
  serverResponse = "Getting location...";

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      serverResponse = "Sending to server...";

      try {
        let response = await fetch('/api/checkin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            lat: lat,
            lon: lon,
            timestamp: Date.now()
          })
        });

        let data = await response.json();

        if (data.success) {
          serverResponse = "Checked in! (" + lat.toFixed(4) + ", " + lon.toFixed(4) + ")";
          checkinCount = data.totalCheckins;
        } else {
          serverResponse = "Error: " + data.error;
        }
      } catch (error) {
        serverResponse = "Network error: " + error.message;
      }
    },
    (error) => {
      serverResponse = "Location error: " + error.message;
    }
  );
}
*/`,hints:["app.use(express.json()) parses JSON request bodies","fetch() with method: 'POST' sends data to server","JSON.stringify() converts objects to JSON strings","req.body contains the parsed JSON on the server"],vocabularyTerms:["post","fetch","body","json"],requiresNode:!0}],exitTicket:"What Content-Type header do you need when sending JSON?"},{day:14,title:"Introduction to Databases",objective:"Store and retrieve data persistently using NeDB",exercises:[{id:"d3d14-1",title:"Database Basics with NeDB",difficulty:"Medium",points:20,description:"Use NeDB to store and retrieve data persistently",prompt:"Set up NeDB to store location check-ins that persist even when the server restarts.",starterCode:`// server.js
// Install: npm install nedb

const Datastore = require('nedb');

// Create/open database file
const db = new Datastore({
  filename: 'locations.db',
  autoload: true
});

// Insert a document
// db.insert({ ... }, callback);

// Find all documents
// db.find({}, callback);

// Find with query
// db.find({ field: value }, callback);

// Update a document
// db.update({ query }, { $set: { field: value } }, callback);

// Remove a document
// db.remove({ query }, callback);`,solutionCode:`// server.js
const express = require('express');
const Datastore = require('nedb');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Initialize database
const db = new Datastore({
  filename: 'locations.db',
  autoload: true
});

// CREATE - Add new location
app.post('/api/checkin', (req, res) => {
  const entry = {
    lat: req.body.lat,
    lon: req.body.lon,
    timestamp: req.body.timestamp || Date.now(),
    createdAt: new Date().toISOString()
  };

  db.insert(entry, (err, newDoc) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    console.log('Saved:', newDoc._id);
    res.json({ success: true, entry: newDoc });
  });
});

// READ - Get all locations
app.get('/api/locations', (req, res) => {
  db.find({}).sort({ timestamp: -1 }).exec((err, docs) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      count: docs.length,
      locations: docs
    });
  });
});

// READ - Get single location by ID
app.get('/api/locations/:id', (req, res) => {
  db.findOne({ _id: req.params.id }, (err, doc) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!doc) {
      return res.status(404).json({ error: 'Not found' });
    }
    res.json(doc);
  });
});

// UPDATE - Add note to a location
app.put('/api/locations/:id', (req, res) => {
  db.update(
    { _id: req.params.id },
    { $set: { note: req.body.note, updatedAt: new Date().toISOString() } },
    {},
    (err, numUpdated) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true, updated: numUpdated });
    }
  );
});

// DELETE - Remove a location
app.delete('/api/locations/:id', (req, res) => {
  db.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true, removed: numRemoved });
  });
});

// DELETE - Clear all locations
app.delete('/api/locations', (req, res) => {
  db.remove({}, { multi: true }, (err, numRemoved) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ success: true, removed: numRemoved });
  });
});

// Get statistics
app.get('/api/stats', (req, res) => {
  db.count({}, (err, count) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ totalLocations: count });
  });
});

app.listen(3000, () => {
  console.log('Server with database running at http://localhost:3000');
  console.log('Data stored in: locations.db');
});`,hints:["NeDB stores data in a file (like 'locations.db')","db.insert() adds new documents (records)","db.find({}) retrieves all documents","Documents get an automatic _id field"],vocabularyTerms:["database","nedb","insert","find","crud"],requiresNode:!0,resources:[{title:"NeDB GitHub",url:"https://github.com/louischatriot/nedb"}]},{id:"d3d14-2",title:"Query and Display Data",difficulty:"Medium",points:15,description:"Fetch data from your database and display it in p5.js",prompt:"Create a p5.js visualization that fetches locations from your database and displays them.",starterCode:`// public/sketch.js - Client side
let locations = [];
let loading = true;

function setup() {
  createCanvas(800, 600);
  fetchLocations();
}

async function fetchLocations() {
  // Fetch from your server's /api/locations endpoint
  // Store in the locations array
  // Set loading to false
}

function draw() {
  background(30);

  if (loading) {
    fill(255);
    textAlign(CENTER, CENTER);
    text("Loading data from database...", width/2, height/2);
  } else {
    // Display locations
    // Draw a simple map
    // Plot each location point
  }
}`,solutionCode:`// public/sketch.js
let locations = [];
let loading = true;
let error = null;

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER, CENTER);
  fetchLocations();
}

async function fetchLocations() {
  try {
    let response = await fetch('/api/locations');
    let data = await response.json();
    locations = data.locations || [];
    loading = false;
    console.log('Loaded', locations.length, 'locations');
  } catch (err) {
    error = err.message;
    loading = false;
  }
}

function draw() {
  background(25, 30, 45);

  // Title
  fill(100, 200, 255);
  textSize(24);
  text("Location Database Viewer", width/2, 30);

  if (loading) {
    fill(255);
    textSize(18);
    text("Loading from database...", width/2, height/2);
    return;
  }

  if (error) {
    fill(255, 100, 100);
    textSize(16);
    text("Error: " + error, width/2, height/2);
    return;
  }

  if (locations.length === 0) {
    fill(150);
    textSize(16);
    text("No locations in database yet.", width/2, height/2);
    text("Use the check-in feature to add some!", width/2, height/2 + 30);
    return;
  }

  // Draw map area
  let mapX = 50, mapY = 70;
  let mapW = 600, mapH = 400;

  fill(35, 45, 65);
  stroke(50, 60, 80);
  rect(mapX, mapY, mapW, mapH);

  // Grid
  stroke(45, 55, 75);
  for (let x = mapX; x <= mapX + mapW; x += 60) {
    line(x, mapY, x, mapY + mapH);
  }
  for (let y = mapY; y <= mapY + mapH; y += 40) {
    line(mapX, y, mapX + mapW, y);
  }

  // Plot locations
  noStroke();
  for (let i = 0; i < locations.length; i++) {
    let loc = locations[i];
    let x = map(loc.lon, -180, 180, mapX, mapX + mapW);
    let y = map(loc.lat, 90, -90, mapY, mapY + mapH);

    // Older points are dimmer
    let alpha = map(i, 0, locations.length, 255, 80);
    fill(100, 200, 255, alpha);
    circle(x, y, 12);

    // Most recent point highlighted
    if (i === 0) {
      fill(255, 100, 100);
      circle(x, y, 16);

      // Label
      fill(255);
      textSize(10);
      text("Latest", x, y - 15);
    }
  }

  // Data panel
  let panelX = 680;
  fill(40, 50, 70);
  stroke(60, 70, 90);
  rect(panelX, mapY, 190, mapH, 5);

  noStroke();
  fill(255);
  textSize(14);
  text("Database Info", panelX + 95, mapY + 25);

  textSize(12);
  fill(150);
  textAlign(LEFT);
  text("Total records:", panelX + 15, mapY + 60);
  fill(100, 255, 150);
  textSize(24);
  text(locations.length, panelX + 15, mapY + 90);

  // Latest entry details
  if (locations.length > 0) {
    let latest = locations[0];

    fill(150);
    textSize(11);
    text("Latest check-in:", panelX + 15, mapY + 130);

    fill(200);
    text("Lat: " + latest.lat.toFixed(4), panelX + 15, mapY + 150);
    text("Lon: " + latest.lon.toFixed(4), panelX + 15, mapY + 168);

    if (latest.createdAt) {
      let date = new Date(latest.createdAt);
      text("Time: " + date.toLocaleTimeString(), panelX + 15, mapY + 186);
    }
  }

  // Refresh button hint
  fill(100);
  textSize(10);
  textAlign(CENTER);
  text("Press 'R' to refresh", panelX + 95, mapY + mapH - 15);

  // Footer
  fill(80);
  textSize(11);
  text("Data persists in locations.db on the server", width/2, height - 15);
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    loading = true;
    fetchLocations();
  }
}`,hints:["fetch('/api/locations') gets data from YOUR server","await the response.json() to get the data","map() converts lat/lon to screen coordinates","Sort or filter data to show recent entries first"],vocabularyTerms:["fetch","query","display","map"]}],exitTicket:"Why is database storage better than storing data in a variable?"},{day:15,title:"Mini-Project: Data Selfie App",objective:"Build a complete full-stack location tracking application",exercises:[{id:"d3d15-project",title:"Data Selfie App",difficulty:"Hard",points:50,isProject:!0,description:"Create a full-stack app that records your location over time",prompt:`Build a 'Data Selfie' app that:
- Gets your location from the browser
- Sends it to your server via POST
- Stores it in a NeDB database
- Displays all your check-ins on a map
- Shows statistics about your data`,starterCode:`// This is a full-stack project!
// You need: server.js + public/index.html + public/sketch.js

// ===== server.js =====
const express = require('express');
const Datastore = require('nedb');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const db = new Datastore({ filename: 'selfie.db', autoload: true });

// POST /api/checkin - Save a new location
// GET /api/checkins - Get all check-ins
// GET /api/stats - Get statistics

app.listen(3000);

// ===== public/sketch.js =====
// - Get user's location
// - Button to "check in"
// - Display map with all check-ins
// - Show stats panel`,solutionCode:`// ===== server.js =====
const express = require('express');
const Datastore = require('nedb');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const db = new Datastore({ filename: 'selfie.db', autoload: true });

// Save check-in
app.post('/api/checkin', (req, res) => {
  const entry = {
    lat: req.body.lat,
    lon: req.body.lon,
    accuracy: req.body.accuracy,
    note: req.body.note || '',
    timestamp: Date.now(),
    date: new Date().toISOString()
  };

  db.insert(entry, (err, doc) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, entry: doc });
  });
});

// Get all check-ins
app.get('/api/checkins', (req, res) => {
  db.find({}).sort({ timestamp: -1 }).exec((err, docs) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ checkins: docs });
  });
});

// Get stats
app.get('/api/stats', (req, res) => {
  db.find({}, (err, docs) => {
    if (err) return res.status(500).json({ error: err.message });

    const stats = {
      totalCheckins: docs.length,
      firstCheckin: docs.length > 0 ? docs[docs.length-1].date : null,
      lastCheckin: docs.length > 0 ? docs[0].date : null
    };

    // Calculate bounds
    if (docs.length > 0) {
      stats.bounds = {
        minLat: Math.min(...docs.map(d => d.lat)),
        maxLat: Math.max(...docs.map(d => d.lat)),
        minLon: Math.min(...docs.map(d => d.lon)),
        maxLon: Math.max(...docs.map(d => d.lon))
      };
    }

    res.json(stats);
  });
});

// Delete all (for testing)
app.delete('/api/checkins', (req, res) => {
  db.remove({}, { multi: true }, (err, n) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ removed: n });
  });
});

app.listen(3000, () => console.log('Data Selfie running on http://localhost:3000'));


/* ===== public/sketch.js =====

let checkins = [];
let stats = null;
let userLocation = null;
let status = "Ready";
let mode = "map"; // "map" or "list"

function setup() {
  createCanvas(900, 650);
  loadData();
}

async function loadData() {
  try {
    let [checkinsRes, statsRes] = await Promise.all([
      fetch('/api/checkins').then(r => r.json()),
      fetch('/api/stats').then(r => r.json())
    ]);
    checkins = checkinsRes.checkins || [];
    stats = statsRes;
  } catch (e) {
    console.log("Error loading:", e);
  }
}

async function doCheckin() {
  status = "Getting location...";

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      status = "Saving...";
      try {
        let res = await fetch('/api/checkin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            accuracy: pos.coords.accuracy
          })
        });
        let data = await res.json();
        if (data.success) {
          status = "Saved!";
          loadData();
        }
      } catch (e) {
        status = "Error: " + e.message;
      }
    },
    (err) => { status = "Location error"; }
  );
}

function draw() {
  background(20, 25, 35);

  // Header
  fill(255);
  textSize(28);
  textAlign(CENTER);
  text("Data Selfie", width/2, 40);

  fill(100);
  textSize(12);
  text("Track your location over time", width/2, 60);

  // Check-in button
  let btnX = 120, btnY = 120;
  let hover = dist(mouseX, mouseY, btnX, btnY) < 40;
  fill(hover ? color(80, 200, 80) : color(60, 160, 60));
  circle(btnX, btnY, 80);
  fill(255);
  textSize(12);
  text("CHECK", btnX, btnY - 5);
  text("IN", btnX, btnY + 10);

  // Status
  fill(150);
  textSize(11);
  text(status, btnX, btnY + 60);

  // Stats panel
  drawStats(20, 180, 180, 200);

  // Map
  drawMap(220, 80, 450, 350);

  // Recent list
  drawRecent(700, 80, 180, 350);

  // Footer
  fill(60);
  textSize(10);
  textAlign(CENTER);
  text("Press R to refresh | Your data is stored locally on the server", width/2, height - 10);
}

function drawStats(x, y, w, h) {
  fill(30, 40, 55);
  stroke(50, 60, 80);
  rect(x, y, w, h, 5);

  noStroke();
  fill(100, 200, 255);
  textSize(14);
  textAlign(LEFT);
  text("Statistics", x + 15, y + 25);

  if (stats) {
    fill(200);
    textSize(11);
    text("Total check-ins:", x + 15, y + 55);
    fill(100, 255, 150);
    textSize(20);
    text(stats.totalCheckins, x + 15, y + 80);

    if (stats.lastCheckin) {
      fill(150);
      textSize(10);
      text("Last:", x + 15, y + 110);
      text(new Date(stats.lastCheckin).toLocaleDateString(), x + 15, y + 125);
    }
  }
}

function drawMap(x, y, w, h) {
  fill(30, 40, 55);
  stroke(50, 60, 80);
  rect(x, y, w, h);

  // Grid
  stroke(40, 50, 65);
  for (let gx = x; gx <= x + w; gx += 45) line(gx, y, gx, y + h);
  for (let gy = y; gy <= y + h; gy += 35) line(x, gy, x + w, gy);

  // Plot points
  if (checkins.length > 0 && stats && stats.bounds) {
    let b = stats.bounds;
    let padding = 0.001;

    for (let i = 0; i < checkins.length; i++) {
      let c = checkins[i];
      let px = map(c.lon, b.minLon - padding, b.maxLon + padding, x + 20, x + w - 20);
      let py = map(c.lat, b.maxLat + padding, b.minLat - padding, y + 20, y + h - 20);

      let alpha = map(i, 0, checkins.length, 255, 50);
      fill(100, 200, 255, alpha);
      noStroke();
      circle(px, py, i === 0 ? 14 : 8);
    }
  }

  noStroke();
  fill(100);
  textSize(10);
  textAlign(CENTER);
  text("Your check-in map", x + w/2, y + h + 15);
}

function drawRecent(x, y, w, h) {
  fill(30, 40, 55);
  stroke(50, 60, 80);
  rect(x, y, w, h, 5);

  noStroke();
  fill(100, 200, 255);
  textSize(12);
  textAlign(LEFT);
  text("Recent", x + 10, y + 20);

  let shown = Math.min(checkins.length, 8);
  for (let i = 0; i < shown; i++) {
    let c = checkins[i];
    let cy = y + 40 + i * 38;

    fill(255);
    textSize(10);
    text(c.lat.toFixed(4) + ", " + c.lon.toFixed(4), x + 10, cy);

    fill(100);
    textSize(9);
    text(new Date(c.timestamp).toLocaleTimeString(), x + 10, cy + 14);
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, 120, 120) < 40) {
    doCheckin();
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') loadData();
}

*/`,hints:["Build server first, then client","Test each endpoint with your browser or curl","Store lat, lon, timestamp, and any extra info","Use map() with calculated bounds to plot points"],vocabularyTerms:["full-stack","crud","database","geolocation"],rubric:{"server-setup":"Express server with NeDB database (10 pts)","checkin-post":"POST endpoint saves location data (10 pts)","data-retrieval":"GET endpoint returns all check-ins (10 pts)","client-display":"p5.js shows locations on map (10 pts)","ui-polish":"Clean UI with status, stats, and instructions (10 pts)"},requiresNode:!0}]}]},week4:{title:"APIs with Keys & Deployment",bigIdea:"Some APIs require authentication; environment variables keep secrets safe.",serverSide:!0,days:[{day:16,title:"APIs That Require Keys",objective:"Understand API authentication and sign up for API keys",exercises:[{id:"d4d16-1",title:"Getting an API Key",difficulty:"Easy",points:10,description:"Sign up for a free API key and make authenticated requests",prompt:"Get an API key from OpenWeatherMap and use it to fetch weather data. Note: Never put API keys in client-side code!",starterCode:`// This exercise is about understanding API keys
// DO NOT put real API keys in your code!

// Step 1: Sign up at https://openweathermap.org/api
// Step 2: Get your free API key
// Step 3: Understand the request format:

// Weather API URL format:
// https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric

// Example (with fake key):
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=abc123fake&units=metric

// The response includes:
// - main.temp (temperature)
// - main.humidity
// - weather[0].description
// - wind.speed

// For this exercise, we'll simulate the response
let weatherData = {
  "name": "London",
  "main": {
    "temp": 15.5,
    "humidity": 72,
    "pressure": 1015
  },
  "weather": [
    { "description": "scattered clouds", "icon": "03d" }
  ],
  "wind": { "speed": 4.5 }
};

function setup() {
  createCanvas(800, 400);
  // Display the weather data nicely
}

function draw() {
  background(50, 100, 150);
  // Create a weather display card
}`,solutionCode:`// Understanding API keys - simulated weather display
// Real API keys should NEVER be in client-side code!

let weatherData = {
  "name": "London",
  "main": {
    "temp": 15.5,
    "humidity": 72,
    "pressure": 1015
  },
  "weather": [
    { "description": "scattered clouds", "icon": "03d" }
  ],
  "wind": { "speed": 4.5 }
};

function setup() {
  createCanvas(800, 500);
}

function draw() {
  // Sky gradient
  for (let y = 0; y < height; y++) {
    let c = lerpColor(color(100, 150, 200), color(50, 100, 150), y / height);
    stroke(c);
    line(0, y, width, y);
  }

  // Weather card
  fill(255, 255, 255, 240);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/2, 400, 350, 20);

  // City name
  fill(50);
  textAlign(CENTER);
  textSize(32);
  text(weatherData.name, width/2, height/2 - 120);

  // Temperature
  textSize(72);
  fill(50, 100, 150);
  text(Math.round(weatherData.main.temp) + "°C", width/2, height/2 - 30);

  // Description
  textSize(20);
  fill(100);
  text(weatherData.weather[0].description, width/2, height/2 + 20);

  // Details
  textSize(14);
  fill(80);
  let details = [
    "Humidity: " + weatherData.main.humidity + "%",
    "Wind: " + weatherData.wind.speed + " m/s",
    "Pressure: " + weatherData.main.pressure + " hPa"
  ];
  for (let i = 0; i < details.length; i++) {
    text(details[i], width/2, height/2 + 70 + i * 25);
  }

  // Warning about API keys
  fill(200, 50, 50);
  textSize(11);
  text("API keys should be kept on the server, not in client code!", width/2, height - 40);

  fill(100);
  text("Real implementation coming in the next exercise...", width/2, height - 20);
}`,hints:["API keys are like passwords for APIs","Free tiers often have rate limits (e.g., 60 calls/minute)","NEVER expose API keys in frontend JavaScript","The server should make API calls and forward data to client"],vocabularyTerms:["api-key","authentication","rate-limit","free-tier"],resources:[{title:"OpenWeatherMap API",url:"https://openweathermap.org/api"}]},{id:"d4d16-2",title:"Handling API Errors",difficulty:"Medium",points:15,description:"Gracefully handle API errors and rate limits",prompt:"Build a robust API client that handles various error conditions gracefully.",starterCode:`// Error handling for API requests

let data = null;
let error = null;
let loading = false;

async function fetchData(url) {
  loading = true;
  error = null;

  try {
    let response = await fetch(url);

    // Check for HTTP errors
    if (!response.ok) {
      // Handle different status codes:
      // 401 - Unauthorized (bad API key)
      // 403 - Forbidden
      // 404 - Not found
      // 429 - Too many requests (rate limited)
      // 500 - Server error
    }

    data = await response.json();

  } catch (err) {
    // Network errors, JSON parse errors, etc.
    error = err.message;
  }

  loading = false;
}

function setup() {
  createCanvas(800, 400);
  // Simulate different error scenarios
}

function draw() {
  background(30);
  // Display data, loading state, or error
}`,solutionCode:`// Robust API error handling

let data = null;
let errorInfo = null;
let loading = false;
let lastFetch = 0;

// Simulate different API responses
let scenarios = [
  { name: "Success", status: 200, data: { message: "Data loaded!", value: 42 } },
  { name: "Bad API Key", status: 401, error: "Invalid API key" },
  { name: "Not Found", status: 404, error: "Resource not found" },
  { name: "Rate Limited", status: 429, error: "Too many requests. Try again later." },
  { name: "Server Error", status: 500, error: "Internal server error" },
  { name: "Network Error", status: 0, error: "Network connection failed" }
];
let currentScenario = 0;

async function simulateFetch() {
  loading = true;
  errorInfo = null;
  data = null;
  lastFetch = millis();

  // Simulate network delay
  await new Promise(r => setTimeout(r, 800));

  let scenario = scenarios[currentScenario];

  if (scenario.status === 200) {
    data = scenario.data;
  } else if (scenario.status === 0) {
    errorInfo = { type: "network", message: scenario.error };
  } else {
    errorInfo = {
      type: "http",
      status: scenario.status,
      message: scenario.error,
      retryable: scenario.status === 429 || scenario.status >= 500
    };
  }

  loading = false;
}

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  simulateFetch();
}

function draw() {
  background(25, 30, 40);

  // Title
  fill(100, 200, 255);
  textSize(24);
  text("API Error Handling Demo", width/2, 35);

  // Scenario buttons
  textSize(11);
  for (let i = 0; i < scenarios.length; i++) {
    let x = 80 + i * 110;
    let isActive = i === currentScenario;

    fill(isActive ? color(70, 130, 180) : color(50, 60, 80));
    rectMode(CENTER);
    rect(x, 80, 100, 30, 5);

    fill(255);
    text(scenarios[i].name, x, 80);
  }

  // Status display
  let centerY = height/2 + 30;

  if (loading) {
    fill(255);
    textSize(20);
    text("Loading...", width/2, centerY);

    // Spinner
    noFill();
    stroke(100, 200, 255);
    strokeWeight(3);
    let angle = (millis() - lastFetch) * 0.01;
    arc(width/2, centerY + 50, 40, 40, angle, angle + PI);
    noStroke();

  } else if (data) {
    // Success state
    fill(100, 255, 150);
    textSize(48);
    text("✓", width/2, centerY - 30);

    textSize(20);
    text("Success!", width/2, centerY + 20);

    fill(200);
    textSize(14);
    text("Data: " + JSON.stringify(data), width/2, centerY + 60);

  } else if (errorInfo) {
    // Error state
    fill(255, 100, 100);
    textSize(48);
    text("✕", width/2, centerY - 30);

    textSize(20);
    if (errorInfo.status) {
      text("Error " + errorInfo.status, width/2, centerY + 20);
    } else {
      text("Error", width/2, centerY + 20);
    }

    fill(200);
    textSize(14);
    text(errorInfo.message, width/2, centerY + 55);

    if (errorInfo.retryable) {
      fill(255, 200, 100);
      textSize(12);
      text("This error is retryable - try again in a moment", width/2, centerY + 90);
    }
  }

  // Instructions
  fill(100);
  textSize(12);
  text("Click a scenario button to simulate different API responses", width/2, height - 40);
  text("Press SPACE to retry current scenario", width/2, height - 20);
}

function mousePressed() {
  // Check scenario buttons
  for (let i = 0; i < scenarios.length; i++) {
    let x = 80 + i * 110;
    if (abs(mouseX - x) < 50 && abs(mouseY - 80) < 15) {
      currentScenario = i;
      simulateFetch();
      return;
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    simulateFetch();
  }
}`,hints:["Always check response.ok before parsing JSON","Different status codes mean different things","429 (rate limit) and 5xx errors are often retryable","Network errors are caught in the catch block"],vocabularyTerms:["status-code","error-handling","retry","rate-limit"]}],exitTicket:"Why should API keys never be in client-side JavaScript code?"},{day:17,title:"Environment Variables & Security",objective:"Keep API keys and secrets secure using environment variables",exercises:[{id:"d4d17-1",title:"Using dotenv",difficulty:"Medium",points:15,description:"Store secrets in environment variables using dotenv",prompt:"Set up dotenv to load API keys from a .env file instead of hardcoding them.",starterCode:`// server.js
// Install: npm install dotenv

// Step 1: Create a .env file (NOT committed to git!)
// .env contents:
// WEATHER_API_KEY=your_actual_key_here
// PORT=3000

// Step 2: Load environment variables
require('dotenv').config();

// Step 3: Access variables with process.env
const API_KEY = process.env.WEATHER_API_KEY;
const PORT = process.env.PORT || 3000;

// Step 4: Add .env to .gitignore!
// .gitignore contents:
// .env
// node_modules/

const express = require('express');
const app = express();

app.get('/api/weather/:city', async (req, res) => {
  // Use API_KEY here - it's safe on the server!
  // Make request to weather API
  // Return data to client
});

app.listen(PORT);`,solutionCode:`// server.js
require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.static('public'));

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const PORT = process.env.PORT || 3000;

// Check if API key is configured
if (!WEATHER_API_KEY) {
  console.error('ERROR: WEATHER_API_KEY not found in environment!');
  console.error('Create a .env file with: WEATHER_API_KEY=your_key_here');
  process.exit(1);
}

// Proxy route - client calls this, server calls real API
app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city;

  try {
    // Server-side fetch with secret API key
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${WEATHER_API_KEY}&units=metric\`;

    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 401) {
        return res.status(500).json({ error: 'Invalid API key configured' });
      }
      if (response.status === 404) {
        return res.status(404).json({ error: 'City not found' });
      }
      return res.status(response.status).json({ error: 'Weather API error' });
    }

    const data = await response.json();

    // Return only what client needs (don't expose everything)
    res.json({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      wind: data.wind.speed
    });

  } catch (error) {
    console.error('Weather fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Health check endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: !!WEATHER_API_KEY,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
  console.log(\`API Key configured: \${WEATHER_API_KEY ? 'Yes' : 'NO!'}\`);
});

/*
===== .env file (create this, never commit!) =====
WEATHER_API_KEY=your_openweathermap_key_here
PORT=3000

===== .gitignore =====
.env
node_modules/
*.db

===== public/sketch.js =====
// Client NEVER sees the API key!

let weather = null;
let city = "London";

async function getWeather() {
  try {
    // Call YOUR server, not the weather API directly
    let res = await fetch('/api/weather/' + city);
    weather = await res.json();
  } catch (e) {
    console.error(e);
  }
}
*/`,hints:["require('dotenv').config() loads the .env file","process.env.VARIABLE_NAME accesses variables",".env should NEVER be committed to git","Create a .env.example file with fake values as a template"],vocabularyTerms:["dotenv","environment-variable","gitignore","secret"],requiresNode:!0},{id:"d4d17-2",title:"Creating an API Proxy",difficulty:"Hard",points:20,description:"Build a server that proxies API requests, keeping keys secret",prompt:"Create a complete weather app where the server makes API calls and forwards data to the client.",starterCode:`// Complete weather proxy setup

// SERVER (server.js):
// - Load API key from .env
// - Create /api/weather/:city endpoint
// - Fetch from OpenWeatherMap
// - Return cleaned data to client

// CLIENT (public/sketch.js):
// - Text input for city name
// - Button to fetch weather
// - Display weather card
// - Handle errors gracefully`,solutionCode:`// ===== server.js =====
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

const API_KEY = process.env.WEATHER_API_KEY;

// Proxy endpoint
app.get('/api/weather/:city', async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const city = encodeURIComponent(req.params.city);
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({
        error: errorData.message || 'API error'
      });
    }

    const data = await response.json();

    res.json({
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      temp_min: Math.round(data.main.temp_min),
      temp_max: Math.round(data.main.temp_max),
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      wind_speed: data.wind.speed,
      clouds: data.clouds.all,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset
    });

  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Weather proxy on port \${PORT}\`));


/* ===== public/sketch.js =====

let weather = null;
let loading = false;
let error = null;
let cityInput;
let searchBtn;

function setup() {
  createCanvas(800, 600);

  // Create input elements
  cityInput = createInput('London');
  cityInput.position(width/2 - 120, 80);
  cityInput.size(180);
  cityInput.style('font-size', '16px');
  cityInput.style('padding', '8px');

  searchBtn = createButton('Get Weather');
  searchBtn.position(width/2 + 70, 80);
  searchBtn.style('font-size', '16px');
  searchBtn.style('padding', '8px 16px');
  searchBtn.mousePressed(fetchWeather);

  // Allow Enter key to search
  cityInput.elt.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') fetchWeather();
  });
}

async function fetchWeather() {
  let city = cityInput.value().trim();
  if (!city) return;

  loading = true;
  error = null;
  weather = null;

  try {
    let res = await fetch('/api/weather/' + encodeURIComponent(city));
    let data = await res.json();

    if (data.error) {
      error = data.error;
    } else {
      weather = data;
    }
  } catch (e) {
    error = 'Network error';
  }

  loading = false;
}

function draw() {
  // Gradient background
  for (let y = 0; y < height; y++) {
    let c = lerpColor(color(70, 130, 180), color(30, 60, 90), y/height);
    stroke(c);
    line(0, y, width, y);
  }

  // Title
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(28);
  text("Weather App", width/2, 45);

  fill(200);
  textSize(12);
  text("API key is safely stored on the server!", width/2, height - 20);

  let cardY = 200;

  if (loading) {
    fill(255);
    textSize(20);
    text("Loading...", width/2, cardY + 80);

  } else if (error) {
    fill(255, 100, 100);
    textSize(18);
    text("Error: " + error, width/2, cardY + 80);

  } else if (weather) {
    // Weather card
    fill(255, 255, 255, 230);
    rectMode(CENTER);
    rect(width/2, cardY + 100, 400, 280, 15);

    // City
    fill(50);
    textSize(28);
    text(weather.city + ", " + weather.country, width/2, cardY + 20);

    // Temperature
    textSize(64);
    fill(70, 130, 180);
    text(weather.temp + "°C", width/2, cardY + 90);

    // Description
    textSize(18);
    fill(100);
    text(weather.description, width/2, cardY + 130);

    // Details grid
    textSize(13);
    fill(80);
    textAlign(LEFT);
    let detailX = width/2 - 150;
    let detailY = cardY + 170;

    text("Feels like: " + weather.feels_like + "°C", detailX, detailY);
    text("Humidity: " + weather.humidity + "%", detailX, detailY + 25);
    text("Wind: " + weather.wind_speed + " m/s", detailX + 180, detailY);
    text("Clouds: " + weather.clouds + "%", detailX + 180, detailY + 25);

    textAlign(CENTER);
  } else {
    fill(200);
    textSize(16);
    text("Enter a city name and click 'Get Weather'", width/2, cardY + 80);
  }
}

*/`,hints:["The server acts as a middleman (proxy)","Client calls /api/weather/London (your server)","Server calls api.openweathermap.org with the key","Server returns only necessary data to client"],vocabularyTerms:["proxy","api-key","security","encodeURIComponent"],requiresNode:!0}],exitTicket:"What is an API proxy and why is it important?"},{day:18,title:"Server-Side API Calls",objective:"Make API calls from Node.js and combine multiple data sources",exercises:[{id:"d4d18-1",title:"Multiple API Mashup",difficulty:"Hard",points:20,description:"Combine data from multiple APIs on the server",prompt:"Create an endpoint that fetches from multiple APIs and combines the results.",starterCode:`// Combining multiple APIs on the server

// Example: Location + Weather + Time
// 1. Get coordinates from IP geolocation
// 2. Get weather for those coordinates
// 3. Get timezone info
// 4. Return combined data

app.get('/api/myinfo', async (req, res) => {
  try {
    // Fetch from multiple APIs
    // Combine the results
    // Return unified response
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`,solutionCode:`// server.js - Multi-API mashup
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));

const WEATHER_KEY = process.env.WEATHER_API_KEY;

// Mashup endpoint - combines multiple data sources
app.get('/api/dashboard', async (req, res) => {
  const city = req.query.city || 'London';

  try {
    // Fetch weather and additional data in parallel
    const [weatherRes, jokeRes, factRes] = await Promise.all([
      // Weather (if API key available)
      WEATHER_KEY
        ? fetch(\`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${WEATHER_KEY}&units=metric\`)
        : Promise.resolve(null),
      // Random joke (no key needed)
      fetch('https://official-joke-api.appspot.com/random_joke'),
      // Cat fact (no key needed)
      fetch('https://catfact.ninja/fact')
    ]);

    // Parse responses
    const weather = weatherRes ? await weatherRes.json() : null;
    const joke = await jokeRes.json();
    const fact = await factRes.json();

    // Combine into single response
    const dashboard = {
      timestamp: new Date().toISOString(),
      location: city,
      weather: weather ? {
        temp: Math.round(weather.main.temp),
        description: weather.weather[0].description,
        humidity: weather.main.humidity
      } : { error: 'No API key configured' },
      joke: {
        setup: joke.setup,
        punchline: joke.punchline
      },
      fact: fact.fact,
      serverInfo: {
        nodeVersion: process.version,
        uptime: Math.round(process.uptime())
      }
    };

    res.json(dashboard);

  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      error: 'Failed to fetch dashboard data',
      details: error.message
    });
  }
});

// Individual endpoints for testing
app.get('/api/joke', async (req, res) => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();
    res.json(joke);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/api/fact', async (req, res) => {
  try {
    const response = await fetch('https://catfact.ninja/fact');
    const fact = await response.json();
    res.json(fact);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Dashboard server on port \${PORT}\`));

/* Client-side can now fetch one endpoint and get everything:

async function loadDashboard() {
  const res = await fetch('/api/dashboard?city=Tokyo');
  const data = await res.json();
  // data.weather, data.joke, data.fact all available
}
*/`,hints:["Promise.all() runs multiple fetches in parallel","Parallel fetches are faster than sequential","Handle cases where some APIs fail but others succeed","Combine and clean data before sending to client"],vocabularyTerms:["mashup","Promise.all","parallel","aggregate"],requiresNode:!0},{id:"d4d18-2",title:"Caching API Responses",difficulty:"Hard",points:15,description:"Cache API responses to reduce calls and improve performance",prompt:"Add caching to your API proxy to avoid hitting rate limits and improve speed.",starterCode:`// Simple in-memory cache for API responses

const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

function getCached(key) {
  const item = cache.get(key);
  if (!item) return null;
  if (Date.now() > item.expiry) {
    cache.delete(key);
    return null;
  }
  return item.data;
}

function setCache(key, data) {
  cache.set(key, {
    data: data,
    expiry: Date.now() + CACHE_DURATION
  });
}

app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city.toLowerCase();

  // Check cache first
  const cached = getCached('weather_' + city);
  if (cached) {
    return res.json({ ...cached, fromCache: true });
  }

  // Fetch from API
  // Save to cache
  // Return response
});`,solutionCode:`// server.js with caching
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));

// Simple in-memory cache
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
let cacheHits = 0;
let cacheMisses = 0;

function getCached(key) {
  const item = cache.get(key);
  if (!item) return null;
  if (Date.now() > item.expiry) {
    cache.delete(key);
    return null;
  }
  return item.data;
}

function setCache(key, data) {
  cache.set(key, {
    data: data,
    expiry: Date.now() + CACHE_DURATION,
    cachedAt: new Date().toISOString()
  });
}

const API_KEY = process.env.WEATHER_API_KEY;

app.get('/api/weather/:city', async (req, res) => {
  const city = req.params.city.toLowerCase().trim();
  const cacheKey = 'weather_' + city;

  // Check cache first
  const cached = getCached(cacheKey);
  if (cached) {
    cacheHits++;
    console.log(\`Cache HIT for \${city}\`);
    return res.json({
      ...cached,
      _cache: { hit: true, cachedAt: cache.get(cacheKey).cachedAt }
    });
  }

  cacheMisses++;
  console.log(\`Cache MISS for \${city} - fetching from API\`);

  try {
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${encodeURIComponent(city)}&appid=\${API_KEY}&units=metric\`;
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({ error: 'City not found' });
    }

    const data = await response.json();

    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temp: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity
    };

    // Save to cache
    setCache(cacheKey, weatherData);

    res.json({
      ...weatherData,
      _cache: { hit: false, freshAt: new Date().toISOString() }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Cache statistics endpoint
app.get('/api/cache/stats', (req, res) => {
  res.json({
    size: cache.size,
    hits: cacheHits,
    misses: cacheMisses,
    hitRate: cacheHits + cacheMisses > 0
      ? ((cacheHits / (cacheHits + cacheMisses)) * 100).toFixed(1) + '%'
      : '0%',
    entries: Array.from(cache.keys())
  });
});

// Clear cache endpoint
app.delete('/api/cache', (req, res) => {
  const size = cache.size;
  cache.clear();
  cacheHits = 0;
  cacheMisses = 0;
  res.json({ cleared: size });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Cached weather server on port \${PORT}\`);
  console.log(\`Cache duration: \${CACHE_DURATION / 1000} seconds\`);
});`,hints:["Check cache before making API calls","Set reasonable expiry times based on data freshness needs","Track cache hits/misses to monitor effectiveness","Consider cache size limits for production"],vocabularyTerms:["cache","expiry","hit-rate","TTL"],requiresNode:!0}],exitTicket:"Why is caching API responses beneficial?"},{day:19,title:"Deployment Basics",objective:"Deploy your application to the web",exercises:[{id:"d4d19-1",title:"Preparing for Deployment",difficulty:"Medium",points:15,description:"Prepare your Node.js app for deployment",prompt:"Configure your app for deployment: proper PORT handling, environment variables, and production settings.",starterCode:`// Deployment-ready server.js

// 1. PORT should come from environment (hosting services set this)
const PORT = process.env.PORT || 3000;

// 2. Load env vars (but .env won't exist in production)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// 3. Trust proxy (for services like Heroku, Render)
// app.set('trust proxy', 1);

// 4. Add basic security headers
// Consider using 'helmet' package

// 5. Logging for debugging
console.log('Environment:', process.env.NODE_ENV);
console.log('Port:', PORT);

// 6. package.json needs:
// "scripts": { "start": "node server.js" }`,solutionCode:`// Production-ready server.js
const express = require('express');
const path = require('path');

// Load .env only in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

// Trust proxy for hosting services
app.set('trust proxy', 1);

// Security: disable x-powered-by header
app.disable('x-powered-by');

// Parse JSON
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Log requests in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(\`\${req.method} \${req.path}\`);
    next();
  });
}

// API routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    name: 'My Data App',
    version: '1.0.0',
    node: process.version
  });
});

// Your other API routes here...

// Catch-all: serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`
====================================
  Server running on port \${PORT}
  Environment: \${process.env.NODE_ENV || 'development'}

  Local: http://localhost:\${PORT}
====================================
  \`);
});

/* package.json should include:
{
  "name": "my-data-app",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "dotenv": "^16.0.0",
    "nedb": "^1.8.0"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
*/`,hints:["Always use process.env.PORT for hosting compatibility","Set NODE_ENV=production in hosting dashboard","Add a 'start' script to package.json","Specify node version in 'engines' field"],vocabularyTerms:["deployment","production","PORT","environment"],requiresNode:!0},{id:"d4d19-2",title:"Deploy to Glitch",difficulty:"Medium",points:20,description:"Deploy your app to Glitch for free hosting",prompt:"Follow the steps to deploy your Node.js application to Glitch and configure environment variables.",starterCode:`// Deploying to Glitch

// Step 1: Go to glitch.com and sign up
// Step 2: Click "New Project" -> "Import from GitHub" or "glitch-hello-express"
// Step 3: Edit server.js with your code
// Step 4: Add environment variables in .env (Glitch keeps them secret!)
// Step 5: Your app is live at https://your-project-name.glitch.me

// Glitch-specific notes:
// - Glitch automatically installs packages from package.json
// - Glitch auto-restarts on file changes
// - .env is NOT visible when you share/remix the project
// - Free tier sleeps after 5 minutes of inactivity

// To keep your Glitch project awake, you can use:
// - UptimeRobot (pings your URL every 5 minutes)
// - Or just let it sleep and wake on first request`,solutionCode:`// Glitch-ready server.js

const express = require('express');
const app = express();

// Glitch sets PORT automatically
const PORT = process.env.PORT || 3000;

// Glitch loads .env automatically
const API_KEY = process.env.WEATHER_API_KEY;

app.use(express.static('public'));
app.use(express.json());

// Health check (useful for monitoring services)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    host: req.hostname,
    time: new Date().toISOString()
  });
});

// Your API routes
app.get('/api/weather/:city', async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured in .env' });
  }

  try {
    const city = req.params.city;
    const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${API_KEY}&units=metric\`;

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(404).json({ error: 'City not found' });
    }

    const data = await response.json();
    res.json({
      city: data.name,
      temp: Math.round(data.main.temp),
      description: data.weather[0].description
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => {
  console.log('Server is running!');
  console.log(\`API Key configured: \${API_KEY ? 'Yes' : 'No - add WEATHER_API_KEY to .env'}\`);
});

/*
===== Glitch Deployment Checklist =====

1. [ ] Create account at glitch.com
2. [ ] New Project -> Import from GitHub (or start fresh)
3. [ ] Edit package.json - add all dependencies
4. [ ] Edit server.js with your code
5. [ ] Add secrets to .env file (click .env in file list)
      WEATHER_API_KEY=your_key_here
6. [ ] Create public/ folder with index.html, sketch.js
7. [ ] Click "Share" to get your live URL
8. [ ] Test your API: https://your-project.glitch.me/api/health

===== Your app is now live! =====
URL format: https://project-name.glitch.me
*/`,hints:["Glitch automatically loads .env variables","Your live URL is https://project-name.glitch.me","Check Logs (bottom left) for errors","Changes save and deploy automatically"],vocabularyTerms:["glitch","hosting","deploy","live"],requiresNode:!0,resources:[{title:"Glitch",url:"https://glitch.com"},{title:"Render",url:"https://render.com"}]}],exitTicket:"What environment variable must hosting services set for your server?"},{day:20,title:"Capstone Project: The Weather Here",objective:"Build and deploy a complete full-stack weather application",exercises:[{id:"d4d20-capstone",title:"The Weather Here",difficulty:"Hard",points:100,isProject:!0,isCapstone:!0,description:"Build a complete weather application with geolocation, database, and deployment",prompt:`Create 'The Weather Here' app that:
- Gets user's location
- Fetches weather for that location (via server proxy)
- Stores searches in a database
- Displays weather beautifully with p5.js
- Shows history of searches
- Deploys to the web`,starterCode:`// THE WEATHER HERE - Capstone Project
// Full-stack weather application

// ===== SERVER (server.js) =====
// Required functionality:
// - Express server with static files
// - Environment variables with dotenv
// - NeDB database for search history
// - POST /api/weather - save search and return weather
// - GET /api/history - get recent searches
// - Weather API proxy (key hidden)

// ===== CLIENT (public/sketch.js) =====
// Required functionality:
// - Get user geolocation
// - Button to check weather for current location
// - Search box for other cities
// - Beautiful weather display
// - History panel showing recent searches
// - Error handling and loading states

// ===== DEPLOYMENT =====
// - Deploy to Glitch, Render, or Railway
// - Set environment variables in hosting dashboard
// - Test live URL`,solutionCode:`// ===== server.js =====
require('dotenv').config();
const express = require('express');
const Datastore = require('nedb');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Database
const db = new Datastore({ filename: 'weather_history.db', autoload: true });

const WEATHER_KEY = process.env.WEATHER_API_KEY;

// Get weather and save to history
app.post('/api/weather', async (req, res) => {
  const { lat, lon, city } = req.body;

  if (!WEATHER_KEY) {
    return res.status(500).json({ error: 'Weather API key not configured' });
  }

  try {
    // Build URL based on input type
    let url;
    if (lat && lon) {
      url = \`https://api.openweathermap.org/data/2.5/weather?lat=\${lat}&lon=\${lon}&appid=\${WEATHER_KEY}&units=metric\`;
    } else if (city) {
      url = \`https://api.openweathermap.org/data/2.5/weather?q=\${encodeURIComponent(city)}&appid=\${WEATHER_KEY}&units=metric\`;
    } else {
      return res.status(400).json({ error: 'Provide lat/lon or city' });
    }

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Weather not found' });
    }

    const data = await response.json();

    const weather = {
      city: data.name,
      country: data.sys.country,
      lat: data.coord.lat,
      lon: data.coord.lon,
      temp: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      wind: data.wind.speed
    };

    // Save to history
    const historyEntry = {
      ...weather,
      timestamp: Date.now(),
      date: new Date().toISOString()
    };

    db.insert(historyEntry);

    res.json(weather);

  } catch (error) {
    console.error('Weather error:', error);
    res.status(500).json({ error: 'Failed to fetch weather' });
  }
});

// Get search history
app.get('/api/history', (req, res) => {
  db.find({})
    .sort({ timestamp: -1 })
    .limit(10)
    .exec((err, docs) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ history: docs });
    });
});

// Clear history
app.delete('/api/history', (req, res) => {
  db.remove({}, { multi: true }, (err, n) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ cleared: n });
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: !!WEATHER_KEY,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`The Weather Here running on port \${PORT}\`);
});


/* ===== public/sketch.js =====

let weather = null;
let history = [];
let loading = false;
let error = null;
let cityInput;

function setup() {
  createCanvas(900, 700);

  cityInput = createInput('');
  cityInput.attribute('placeholder', 'Enter city name');
  cityInput.position(330, 110);
  cityInput.size(180);
  cityInput.style('font-size', '14px');
  cityInput.style('padding', '8px');

  loadHistory();
}

async function getWeatherForLocation() {
  loading = true;
  error = null;

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      await fetchWeather({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    },
    (err) => {
      error = "Location access denied";
      loading = false;
    }
  );
}

async function getWeatherForCity() {
  const city = cityInput.value().trim();
  if (!city) return;
  await fetchWeather({ city });
}

async function fetchWeather(params) {
  loading = true;
  error = null;

  try {
    const res = await fetch('/api/weather', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });

    const data = await res.json();
    if (data.error) {
      error = data.error;
    } else {
      weather = data;
      loadHistory();
    }
  } catch (e) {
    error = 'Network error';
  }
  loading = false;
}

async function loadHistory() {
  try {
    const res = await fetch('/api/history');
    const data = await res.json();
    history = data.history || [];
  } catch (e) {
    console.log('History error:', e);
  }
}

function draw() {
  // Gradient sky
  for (let y = 0; y < height; y++) {
    let c = lerpColor(
      weather && weather.icon.includes('n') ? color(30, 40, 60) : color(100, 150, 200),
      weather && weather.icon.includes('n') ? color(15, 20, 35) : color(50, 100, 150),
      y / height
    );
    stroke(c);
    line(0, y, width, y);
  }

  noStroke();

  // Title
  fill(255);
  textAlign(CENTER);
  textSize(32);
  text("The Weather Here", width/2, 50);

  // Location button
  let btnX = 200, btnY = 120;
  let hoverLoc = dist(mouseX, mouseY, btnX, btnY) < 50;
  fill(hoverLoc ? color(80, 180, 80) : color(60, 140, 60));
  ellipse(btnX, btnY, 100, 40);
  fill(255);
  textSize(12);
  text("My Location", btnX, btnY + 4);

  // Search button
  let searchX = 570;
  let hoverSearch = dist(mouseX, mouseY, searchX, btnY) < 40;
  fill(hoverSearch ? color(80, 130, 180) : color(60, 110, 160));
  ellipse(searchX, btnY, 80, 40);
  fill(255);
  text("Search", searchX, btnY + 4);

  // Main weather display
  if (loading) {
    fill(255);
    textSize(20);
    text("Loading...", width/2, 300);
  } else if (error) {
    fill(255, 150, 150);
    textSize(18);
    text(error, width/2, 300);
  } else if (weather) {
    drawWeatherCard(width/2, 350);
  } else {
    fill(200);
    textSize(16);
    text("Click 'My Location' or search for a city", width/2, 300);
  }

  // History panel
  drawHistory();

  // Footer
  fill(150);
  textSize(10);
  text("Powered by OpenWeatherMap | Data stored locally", width/2, height - 15);
}

function drawWeatherCard(x, y) {
  // Card
  fill(255, 255, 255, 220);
  rectMode(CENTER);
  rect(x, y, 400, 300, 20);

  fill(50);
  textSize(28);
  text(weather.city + ", " + weather.country, x, y - 100);

  textSize(72);
  fill(50, 100, 150);
  text(weather.temp + "°C", x, y - 20);

  textSize(18);
  fill(100);
  text(weather.description, x, y + 30);

  textSize(13);
  fill(80);
  textAlign(LEFT);
  text("Feels like: " + weather.feels_like + "°C", x - 150, y + 80);
  text("Humidity: " + weather.humidity + "%", x - 150, y + 100);
  text("Wind: " + weather.wind + " m/s", x + 30, y + 80);
  textAlign(CENTER);
}

function drawHistory() {
  let panelX = 750;
  let panelY = 200;

  fill(30, 40, 60, 200);
  rectMode(CORNER);
  rect(panelX - 80, panelY - 30, 160, 380, 10);

  fill(200);
  textSize(14);
  textAlign(CENTER);
  text("Recent", panelX, panelY);

  textAlign(LEFT);
  textSize(11);
  for (let i = 0; i < Math.min(history.length, 8); i++) {
    let h = history[i];
    let hy = panelY + 30 + i * 42;

    fill(255);
    text(h.city, panelX - 70, hy);
    fill(180);
    text(h.temp + "°C", panelX - 70, hy + 15);
    fill(120);
    textSize(9);
    text(new Date(h.timestamp).toLocaleTimeString(), panelX - 70, hy + 28);
    textSize(11);
  }
}

function mousePressed() {
  // Location button
  if (dist(mouseX, mouseY, 200, 120) < 50) {
    getWeatherForLocation();
  }
  // Search button
  if (dist(mouseX, mouseY, 570, 120) < 40) {
    getWeatherForCity();
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    getWeatherForCity();
  }
}

*/`,hints:["Build and test each piece separately","Server: environment variables, database, API proxy","Client: geolocation, fetch, display, error handling","Deploy: set environment variables in hosting dashboard"],vocabularyTerms:["full-stack","deployment","capstone","production"],rubric:{geolocation:"Gets user's location and fetches weather (15 pts)","city-search":"Can search weather by city name (10 pts)","api-proxy":"Server proxies API calls, key hidden (15 pts)",database:"Search history saved and displayed (15 pts)",display:"Weather displayed beautifully with p5.js (15 pts)","error-handling":"Graceful error states and loading (10 pts)",deployment:"App deployed and working online (20 pts)"},requiresNode:!0}]}]}};function Y0(e){for(const t of Object.values(Uc))for(const n of t.days)for(const r of n.exercises)if(r.id===e)return r;return null}function V0(e){const t=Uc[e];if(!t)return[];const n=[];for(const r of t.days)n.push(...r.exercises);return n}const jm=Uc,$0=V0,G0=({studentName:e,totalPoints:t,assignments:n,completedChallenges:r,completedScenarios:i,completedExercises:o,completedPseudocode:l=[],completedFlowcharts:c=[],completedDataApisExercises:p=[],onSelectCategory:h,onSelectNetworkMonitor:S,onSelectWeek:w,onSelectAPCSP:x,onSelectDataApisWeek:j})=>{const C=n.some(f=>f.type==="cyber-range"),A=n.some(f=>f.type==="arrays-loops"),L=n.some(f=>f.type==="ap-csp"),g=n.some(f=>f.type==="data-apis"),m=f=>{if(f==="network-monitor")return{completed:i.length,total:Nt.length,percentage:Nt.length>0?i.length/Nt.length*100:0};const z=As[f]||[],W=z.filter(J=>r.includes(J.id)).length;return{completed:W,total:z.length,percentage:z.length>0?W/z.length*100:0}},k=f=>{const z=B0(f),W=z.filter(J=>o.includes(J.id)).length;return{completed:W,total:z.length,percentage:z.length>0?W/z.length*100:0}},D=f=>f==="pseudocode"?{completed:l.length,total:Et.length,percentage:Et.length>0?l.length/Et.length*100:0}:{completed:c.length,total:qt.length,percentage:qt.length>0?c.length/qt.length*100:0},_=f=>{const z=$0(f),W=z.filter(J=>p.includes(J.id)).length;return{completed:W,total:z.length,percentage:z.length>0?W/z.length*100:0}},M=r.length+i.length,b=o.length,y=l.length+c.length,T=p.length,N=[{id:"cryptography",name:"Cryptography",icon:"[ CRYPTO ]",description:"Encryption, ciphers, and secure communication"},{id:"network",name:"Network Security",icon:"[ NETWORK ]",description:"Network protocols, ports, and traffic analysis"},{id:"password",name:"Password Security",icon:"[ PASSWD ]",description:"Password strength and authentication"},{id:"web",name:"Web Security",icon:"[ WEB ]",description:"Web vulnerabilities and secure coding"},{id:"social",name:"Social Engineering",icon:"[ SOCIAL ]",description:"Manipulation tactics and security awareness"},{id:"network-monitor",name:"Network Monitor",icon:"[ MONITOR ]",description:"Real-time traffic analysis",isScenario:!0}],P=[{id:"pseudocode",name:"Pseudocode",icon:"[ CODE ]",description:"Translate between AP CSP pseudocode and JavaScript"},{id:"flowcharts",name:"Flowcharts",icon:"[ FLOW ]",description:"Read, interpret, and build flowcharts"}],E=C||A||L||g;return s.jsxs("div",{className:"unified-dashboard",children:[s.jsxs("div",{className:"welcome-section",children:[s.jsxs("h1",{children:["Welcome, ",e,"!"]}),s.jsx("p",{children:"Complete your assigned work below. Track your progress across both cybersecurity and programming content."})]}),s.jsxs("div",{className:"stats",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("span",{className:"stat-value",children:t}),s.jsx("span",{className:"stat-label",children:"Total Points"})]}),s.jsxs("div",{className:"stat-card cyber",children:[s.jsx("span",{className:"stat-value",children:M}),s.jsx("span",{className:"stat-label",children:"Cyber Challenges"})]}),s.jsxs("div",{className:"stat-card programming",children:[s.jsx("span",{className:"stat-value",children:b}),s.jsx("span",{className:"stat-label",children:"Programming Exercises"})]}),s.jsxs("div",{className:"stat-card apcsp",children:[s.jsx("span",{className:"stat-value",children:y}),s.jsx("span",{className:"stat-label",children:"AP CSP Exercises"})]}),s.jsxs("div",{className:"stat-card data-apis",children:[s.jsx("span",{className:"stat-value",children:T}),s.jsx("span",{className:"stat-label",children:"Data & APIs"})]})]}),E?s.jsxs(s.Fragment,{children:[C&&s.jsxs("section",{className:"content-section cyber-section",children:[s.jsxs("h2",{className:"section-title cyber",children:[s.jsx("span",{className:"section-icon",children:le["cyber-range"].icon}),"Cybersecurity Challenges"]}),s.jsx("div",{className:"categories",children:N.map(f=>{const z=m(f.id);return s.jsxs("div",{className:"category-card cyber",onClick:()=>f.isScenario?S():h(f.id),children:[s.jsx("div",{className:"category-icon",children:f.icon}),s.jsx("h3",{children:f.name}),s.jsx("p",{className:"category-description",children:f.description}),s.jsxs("p",{className:"category-progress-text",children:[z.completed," / ",z.total," completed"]}),s.jsx("div",{className:"category-progress",children:s.jsx("div",{className:"category-progress-bar cyber",style:{width:`${z.percentage}%`}})})]},f.id)})})]}),A&&s.jsxs("section",{className:"content-section programming-section",children:[s.jsxs("h2",{className:"section-title programming",children:[s.jsx("span",{className:"section-icon",children:le["arrays-loops"].icon}),"Programming Exercises"]}),s.jsx("div",{className:"categories",children:Object.entries(zc).map(([f,z])=>{const W=k(f),J=f.replace("week","");return s.jsxs("div",{className:"category-card programming",onClick:()=>w(f),children:[s.jsxs("div",{className:"category-icon",children:["[ WEEK ",J," ]"]}),s.jsx("h3",{children:z.title}),s.jsx("p",{className:"category-description",children:z.bigIdea}),s.jsxs("p",{className:"category-progress-text",children:[W.completed," / ",W.total," completed"]}),s.jsx("div",{className:"category-progress",children:s.jsx("div",{className:"category-progress-bar programming",style:{width:`${W.percentage}%`}})})]},f)})})]}),L&&s.jsxs("section",{className:"content-section apcsp-section",children:[s.jsxs("h2",{className:"section-title apcsp",children:[s.jsx("span",{className:"section-icon",children:le["ap-csp"].icon}),"AP CSP Exam Prep"]}),s.jsx("div",{className:"categories",children:P.map(f=>{const z=D(f.id);return s.jsxs("div",{className:"category-card apcsp",onClick:()=>x(f.id),children:[s.jsx("div",{className:"category-icon",children:f.icon}),s.jsx("h3",{children:f.name}),s.jsx("p",{className:"category-description",children:f.description}),s.jsxs("p",{className:"category-progress-text",children:[z.completed," / ",z.total," completed"]}),s.jsx("div",{className:"category-progress",children:s.jsx("div",{className:"category-progress-bar apcsp",style:{width:`${z.percentage}%`}})})]},f.id)})})]}),g&&s.jsxs("section",{className:"content-section data-apis-section",children:[s.jsxs("h2",{className:"section-title data-apis",children:[s.jsx("span",{className:"section-icon",children:le["data-apis"].icon}),"Data & APIs"]}),s.jsx("div",{className:"categories",children:Object.entries(jm).map(([f,z])=>{const W=_(f),J=f.replace("week","");return s.jsxs("div",{className:"category-card data-apis",onClick:()=>j(f),children:[s.jsxs("div",{className:"category-icon",children:["[ WEEK ",J," ]"]}),s.jsx("h3",{children:z.title}),s.jsx("p",{className:"category-description",children:z.bigIdea}),s.jsxs("p",{className:"category-progress-text",children:[W.completed," / ",W.total," completed"]}),s.jsx("div",{className:"category-progress",children:s.jsx("div",{className:"category-progress-bar data-apis",style:{width:`${W.percentage}%`}})})]},f)})})]})]}):s.jsxs("div",{className:"no-assignments",children:[s.jsx("div",{className:"no-assignments-icon",children:"[ WAITING ]"}),s.jsx("h2",{children:"No Assignments Yet"}),s.jsx("p",{children:"Your teacher hasn't assigned any content yet. Check back soon!"})]}),s.jsxs("div",{className:"learning-objectives",children:[s.jsx("h3",{children:"About This Platform"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Complete assigned challenges and exercises at your own pace"}),s.jsx("li",{children:"Earn points by completing each activity"}),s.jsx("li",{children:"Your progress is automatically saved"}),s.jsx("li",{children:"Access vocabulary terms for help with key concepts"})]})]})]})},q0=[{id:"60s",name:"60s Space Age",description:"Atomic era optimism",preview:["#ff6b35","#00b4d8","#ffd93d","#f8f9fa"]},{id:"70s",name:"70s Retro Tech",description:"Earth tones meet chrome",preview:["#d4a373","#e07a5f","#81b29a","#f4a261"]},{id:"80s",name:"80s Neon Grid",description:"Cyberpunk terminal",preview:["#00ffff","#ff00ff","#39ff14","#0a0a0f"]},{id:"90s",name:"90s Y2K Chrome",description:"Millennium tech bubble",preview:["#7b68ee","#00ced1","#c0c0c0","#191970"]}];function Hc({onClose:e}){const[t,n]=I.useState(()=>localStorage.getItem("cyberrange-theme")||"80s");I.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("cyberrange-theme",t)},[t]);const r=i=>{n(i)};return s.jsx("div",{className:"theme-switcher-overlay",onClick:e,children:s.jsxs("div",{className:"theme-switcher-modal",onClick:i=>i.stopPropagation(),children:[s.jsxs("div",{className:"theme-switcher-header",children:[s.jsx("h2",{children:"Choose Your Era"}),s.jsx("p",{children:"Select a retrofuturistic theme"}),s.jsx("button",{className:"close-btn",onClick:e,children:"×"})]}),s.jsx("div",{className:"theme-grid",children:q0.map(i=>s.jsxs("div",{className:`theme-card ${t===i.id?"active":""}`,onClick:()=>r(i.id),children:[s.jsx("div",{className:"theme-preview",children:i.preview.map((o,l)=>s.jsx("div",{className:"preview-color",style:{backgroundColor:o}},l))}),s.jsxs("div",{className:"theme-info",children:[s.jsx("h3",{children:i.name}),s.jsx("p",{children:i.description})]}),t===i.id&&s.jsx("div",{className:"theme-active-badge",children:"ACTIVE"})]},i.id))})]})})}function Bc(){I.useEffect(()=>{const e=localStorage.getItem("cyberrange-theme")||"80s";document.documentElement.setAttribute("data-theme",e)},[])}/**
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
 */const Sm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},X0=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],l=e[n++],c=e[n++],p=((i&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(p>>10)),t[r++]=String.fromCharCode(56320+(p&1023))}else{const o=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},K0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],l=i+1<e.length,c=l?e[i+1]:0,p=i+2<e.length,h=p?e[i+2]:0,S=o>>2,w=(o&3)<<4|c>>4;let x=(c&15)<<2|h>>6,j=h&63;p||(j=64,l||(x=64)),r.push(n[S],n[w],n[x],n[j])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Sm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):X0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const w=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||c==null||h==null||w==null)throw new J0;const x=o<<2|c>>4;if(r.push(x),h!==64){const j=c<<4&240|h>>2;if(r.push(j),w!==64){const C=h<<6&192|w;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class J0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Q0=function(e){const t=Sm(e);return K0.encodeByteArray(t,!0)},Cm=function(e){return Q0(e).replace(/\./g,"")};function Z0(){try{return typeof indexedDB=="object"}catch{return!1}}function ey(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const ty="FirebaseError";class Ls extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ty,Object.setPrototypeOf(this,Ls.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tm.prototype.create)}}class Tm{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?ny(o,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Ls(i,c,r)}}function ny(e,t){return e.replace(sy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const sy=/\{\$([^}]+)}/g;class wa{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var pe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(pe||(pe={}));const ry={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},iy=pe.INFO,ay={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},oy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ay[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Nm{constructor(t){this.name=t,this._logLevel=iy,this._logHandler=oy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in pe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ry[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...t),this._logHandler(this,pe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...t),this._logHandler(this,pe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...t),this._logHandler(this,pe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...t),this._logHandler(this,pe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...t),this._logHandler(this,pe.ERROR,...t)}}const ly=(e,t)=>t.some(n=>e instanceof n);let zu,Uu;function cy(){return zu||(zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dy(){return Uu||(Uu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Em=new WeakMap,Ul=new WeakMap,Pm=new WeakMap,Mo=new WeakMap,Wc=new WeakMap;function uy(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",l)},o=()=>{n(Tn(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&Em.set(n,e)}).catch(()=>{}),Wc.set(t,e),t}function py(e){if(Ul.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",l),e.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",l),e.addEventListener("abort",l)});Ul.set(e,t)}let Hl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ul.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Pm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hy(e){Hl=e(Hl)}function my(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fo(this),t,...n);return Pm.set(r,t.sort?t.sort():[t]),Tn(r)}:dy().includes(e)?function(...t){return e.apply(Fo(this),t),Tn(Em.get(this))}:function(...t){return Tn(e.apply(Fo(this),t))}}function fy(e){return typeof e=="function"?my(e):(e instanceof IDBTransaction&&py(e),ly(e,cy())?new Proxy(e,Hl):e)}function Tn(e){if(e instanceof IDBRequest)return uy(e);if(Mo.has(e))return Mo.get(e);const t=fy(e);return t!==e&&(Mo.set(e,t),Wc.set(t,e)),t}const Fo=e=>Wc.get(e);function gy(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(e,t),c=Tn(l);return r&&l.addEventListener("upgradeneeded",p=>{r(Tn(l.result),p.oldVersion,p.newVersion,Tn(l.transaction),p)}),n&&l.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),c.then(p=>{o&&p.addEventListener("close",()=>o()),i&&p.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const yy=["get","getKey","getAll","getAllKeys","count"],vy=["put","add","delete","clear"],zo=new Map;function Hu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(zo.get(t))return zo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=vy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yy.includes(n)))return;const o=async function(l,...c){const p=this.transaction(l,i?"readwrite":"readonly");let h=p.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&p.done]))[0]};return zo.set(t,o),o}hy(e=>({...e,get:(t,n,r)=>Hu(t,n)||e.get(t,n,r),has:(t,n)=>!!Hu(t,n)||e.has(t,n)}));/**
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
 */class xy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bl="@firebase/app",Bu="0.10.13";/**
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
 */const nn=new Nm("@firebase/app"),by="@firebase/app-compat",ky="@firebase/analytics-compat",jy="@firebase/analytics",Sy="@firebase/app-check-compat",Cy="@firebase/app-check",Ty="@firebase/auth",Ny="@firebase/auth-compat",Ey="@firebase/database",Py="@firebase/data-connect",Ay="@firebase/database-compat",Iy="@firebase/functions",Dy="@firebase/functions-compat",Ry="@firebase/installations",Ly="@firebase/installations-compat",_y="@firebase/messaging",Oy="@firebase/messaging-compat",My="@firebase/performance",Fy="@firebase/performance-compat",zy="@firebase/remote-config",Uy="@firebase/remote-config-compat",Hy="@firebase/storage",By="@firebase/storage-compat",Wy="@firebase/firestore",Yy="@firebase/vertexai-preview",Vy="@firebase/firestore-compat",$y="firebase",Gy="10.14.1",qy={[Bl]:"fire-core",[by]:"fire-core-compat",[jy]:"fire-analytics",[ky]:"fire-analytics-compat",[Cy]:"fire-app-check",[Sy]:"fire-app-check-compat",[Ty]:"fire-auth",[Ny]:"fire-auth-compat",[Ey]:"fire-rtdb",[Py]:"fire-data-connect",[Ay]:"fire-rtdb-compat",[Iy]:"fire-fn",[Dy]:"fire-fn-compat",[Ry]:"fire-iid",[Ly]:"fire-iid-compat",[_y]:"fire-fcm",[Oy]:"fire-fcm-compat",[My]:"fire-perf",[Fy]:"fire-perf-compat",[zy]:"fire-rc",[Uy]:"fire-rc-compat",[Hy]:"fire-gcs",[By]:"fire-gcs-compat",[Wy]:"fire-fst",[Vy]:"fire-fst-compat",[Yy]:"fire-vertex","fire-js":"fire-js",[$y]:"fire-js-all"};/**
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
 */const Xy=new Map,Ky=new Map,Wu=new Map;function Yu(e,t){try{e.container.addComponent(t)}catch(n){nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ba(e){const t=e.name;if(Wu.has(t))return nn.debug(`There were multiple attempts to register component ${t}.`),!1;Wu.set(t,e);for(const n of Xy.values())Yu(n,e);for(const n of Ky.values())Yu(n,e);return!0}/**
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
 */const Jy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yc=new Tm("app","Firebase",Jy);/**
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
 */const Qy=Gy;function ks(e,t,n){var r;let i=(r=qy[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),nn.warn(c.join(" "));return}ba(new wa(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Zy="firebase-heartbeat-database",ev=1,Yr="firebase-heartbeat-store";let Uo=null;function Am(){return Uo||(Uo=gy(Zy,ev,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Yr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Yc.create("idb-open",{originalErrorMessage:e.message})})),Uo}async function tv(e){try{const n=(await Am()).transaction(Yr),r=await n.objectStore(Yr).get(Im(e));return await n.done,r}catch(t){if(t instanceof Ls)nn.warn(t.message);else{const n=Yc.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});nn.warn(n.message)}}}async function Vu(e,t){try{const r=(await Am()).transaction(Yr,"readwrite");await r.objectStore(Yr).put(t,Im(e)),await r.done}catch(n){if(n instanceof Ls)nn.warn(n.message);else{const r=Yc.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});nn.warn(r.message)}}}function Im(e){return`${e.name}!${e.options.appId}`}/**
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
 */const nv=1024,sv=30*24*60*60*1e3;class rv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new av(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$u();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=sv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){nn.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$u(),{heartbeatsToSend:r,unsentEntries:i}=iv(this._heartbeatsCache.heartbeats),o=Cm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return nn.warn(n),""}}}function $u(){return new Date().toISOString().substring(0,10)}function iv(e,t=nv){const n=[];let r=e.slice();for(const i of e){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Gu(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gu(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class av{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z0()?ey().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vu(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Gu(e){return Cm(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ov(e){ba(new wa("platform-logger",t=>new xy(t),"PRIVATE")),ba(new wa("heartbeat",t=>new rv(t),"PRIVATE")),ks(Bl,Bu,e),ks(Bl,Bu,"esm2017"),ks("fire-js","")}ov("");var lv="firebase",cv="10.14.1";/**
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
 */ks(lv,cv,"app");var qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dm;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(b,y){function T(){}T.prototype=y.prototype,b.D=y.prototype,b.prototype=new T,b.prototype.constructor=b,b.C=function(N,P,E){for(var f=Array(arguments.length-2),z=2;z<arguments.length;z++)f[z-2]=arguments[z];return y.prototype[P].apply(N,f)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,T){T||(T=0);var N=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)N[P]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(P=0;16>P;++P)N[P]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=b.g[0],T=b.g[1],P=b.g[2];var E=b.g[3],f=y+(E^T&(P^E))+N[0]+3614090360&4294967295;y=T+(f<<7&4294967295|f>>>25),f=E+(P^y&(T^P))+N[1]+3905402710&4294967295,E=y+(f<<12&4294967295|f>>>20),f=P+(T^E&(y^T))+N[2]+606105819&4294967295,P=E+(f<<17&4294967295|f>>>15),f=T+(y^P&(E^y))+N[3]+3250441966&4294967295,T=P+(f<<22&4294967295|f>>>10),f=y+(E^T&(P^E))+N[4]+4118548399&4294967295,y=T+(f<<7&4294967295|f>>>25),f=E+(P^y&(T^P))+N[5]+1200080426&4294967295,E=y+(f<<12&4294967295|f>>>20),f=P+(T^E&(y^T))+N[6]+2821735955&4294967295,P=E+(f<<17&4294967295|f>>>15),f=T+(y^P&(E^y))+N[7]+4249261313&4294967295,T=P+(f<<22&4294967295|f>>>10),f=y+(E^T&(P^E))+N[8]+1770035416&4294967295,y=T+(f<<7&4294967295|f>>>25),f=E+(P^y&(T^P))+N[9]+2336552879&4294967295,E=y+(f<<12&4294967295|f>>>20),f=P+(T^E&(y^T))+N[10]+4294925233&4294967295,P=E+(f<<17&4294967295|f>>>15),f=T+(y^P&(E^y))+N[11]+2304563134&4294967295,T=P+(f<<22&4294967295|f>>>10),f=y+(E^T&(P^E))+N[12]+1804603682&4294967295,y=T+(f<<7&4294967295|f>>>25),f=E+(P^y&(T^P))+N[13]+4254626195&4294967295,E=y+(f<<12&4294967295|f>>>20),f=P+(T^E&(y^T))+N[14]+2792965006&4294967295,P=E+(f<<17&4294967295|f>>>15),f=T+(y^P&(E^y))+N[15]+1236535329&4294967295,T=P+(f<<22&4294967295|f>>>10),f=y+(P^E&(T^P))+N[1]+4129170786&4294967295,y=T+(f<<5&4294967295|f>>>27),f=E+(T^P&(y^T))+N[6]+3225465664&4294967295,E=y+(f<<9&4294967295|f>>>23),f=P+(y^T&(E^y))+N[11]+643717713&4294967295,P=E+(f<<14&4294967295|f>>>18),f=T+(E^y&(P^E))+N[0]+3921069994&4294967295,T=P+(f<<20&4294967295|f>>>12),f=y+(P^E&(T^P))+N[5]+3593408605&4294967295,y=T+(f<<5&4294967295|f>>>27),f=E+(T^P&(y^T))+N[10]+38016083&4294967295,E=y+(f<<9&4294967295|f>>>23),f=P+(y^T&(E^y))+N[15]+3634488961&4294967295,P=E+(f<<14&4294967295|f>>>18),f=T+(E^y&(P^E))+N[4]+3889429448&4294967295,T=P+(f<<20&4294967295|f>>>12),f=y+(P^E&(T^P))+N[9]+568446438&4294967295,y=T+(f<<5&4294967295|f>>>27),f=E+(T^P&(y^T))+N[14]+3275163606&4294967295,E=y+(f<<9&4294967295|f>>>23),f=P+(y^T&(E^y))+N[3]+4107603335&4294967295,P=E+(f<<14&4294967295|f>>>18),f=T+(E^y&(P^E))+N[8]+1163531501&4294967295,T=P+(f<<20&4294967295|f>>>12),f=y+(P^E&(T^P))+N[13]+2850285829&4294967295,y=T+(f<<5&4294967295|f>>>27),f=E+(T^P&(y^T))+N[2]+4243563512&4294967295,E=y+(f<<9&4294967295|f>>>23),f=P+(y^T&(E^y))+N[7]+1735328473&4294967295,P=E+(f<<14&4294967295|f>>>18),f=T+(E^y&(P^E))+N[12]+2368359562&4294967295,T=P+(f<<20&4294967295|f>>>12),f=y+(T^P^E)+N[5]+4294588738&4294967295,y=T+(f<<4&4294967295|f>>>28),f=E+(y^T^P)+N[8]+2272392833&4294967295,E=y+(f<<11&4294967295|f>>>21),f=P+(E^y^T)+N[11]+1839030562&4294967295,P=E+(f<<16&4294967295|f>>>16),f=T+(P^E^y)+N[14]+4259657740&4294967295,T=P+(f<<23&4294967295|f>>>9),f=y+(T^P^E)+N[1]+2763975236&4294967295,y=T+(f<<4&4294967295|f>>>28),f=E+(y^T^P)+N[4]+1272893353&4294967295,E=y+(f<<11&4294967295|f>>>21),f=P+(E^y^T)+N[7]+4139469664&4294967295,P=E+(f<<16&4294967295|f>>>16),f=T+(P^E^y)+N[10]+3200236656&4294967295,T=P+(f<<23&4294967295|f>>>9),f=y+(T^P^E)+N[13]+681279174&4294967295,y=T+(f<<4&4294967295|f>>>28),f=E+(y^T^P)+N[0]+3936430074&4294967295,E=y+(f<<11&4294967295|f>>>21),f=P+(E^y^T)+N[3]+3572445317&4294967295,P=E+(f<<16&4294967295|f>>>16),f=T+(P^E^y)+N[6]+76029189&4294967295,T=P+(f<<23&4294967295|f>>>9),f=y+(T^P^E)+N[9]+3654602809&4294967295,y=T+(f<<4&4294967295|f>>>28),f=E+(y^T^P)+N[12]+3873151461&4294967295,E=y+(f<<11&4294967295|f>>>21),f=P+(E^y^T)+N[15]+530742520&4294967295,P=E+(f<<16&4294967295|f>>>16),f=T+(P^E^y)+N[2]+3299628645&4294967295,T=P+(f<<23&4294967295|f>>>9),f=y+(P^(T|~E))+N[0]+4096336452&4294967295,y=T+(f<<6&4294967295|f>>>26),f=E+(T^(y|~P))+N[7]+1126891415&4294967295,E=y+(f<<10&4294967295|f>>>22),f=P+(y^(E|~T))+N[14]+2878612391&4294967295,P=E+(f<<15&4294967295|f>>>17),f=T+(E^(P|~y))+N[5]+4237533241&4294967295,T=P+(f<<21&4294967295|f>>>11),f=y+(P^(T|~E))+N[12]+1700485571&4294967295,y=T+(f<<6&4294967295|f>>>26),f=E+(T^(y|~P))+N[3]+2399980690&4294967295,E=y+(f<<10&4294967295|f>>>22),f=P+(y^(E|~T))+N[10]+4293915773&4294967295,P=E+(f<<15&4294967295|f>>>17),f=T+(E^(P|~y))+N[1]+2240044497&4294967295,T=P+(f<<21&4294967295|f>>>11),f=y+(P^(T|~E))+N[8]+1873313359&4294967295,y=T+(f<<6&4294967295|f>>>26),f=E+(T^(y|~P))+N[15]+4264355552&4294967295,E=y+(f<<10&4294967295|f>>>22),f=P+(y^(E|~T))+N[6]+2734768916&4294967295,P=E+(f<<15&4294967295|f>>>17),f=T+(E^(P|~y))+N[13]+1309151649&4294967295,T=P+(f<<21&4294967295|f>>>11),f=y+(P^(T|~E))+N[4]+4149444226&4294967295,y=T+(f<<6&4294967295|f>>>26),f=E+(T^(y|~P))+N[11]+3174756917&4294967295,E=y+(f<<10&4294967295|f>>>22),f=P+(y^(E|~T))+N[2]+718787259&4294967295,P=E+(f<<15&4294967295|f>>>17),f=T+(E^(P|~y))+N[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(P+(f<<21&4294967295|f>>>11))&4294967295,b.g[2]=b.g[2]+P&4294967295,b.g[3]=b.g[3]+E&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var T=y-this.blockSize,N=this.B,P=this.h,E=0;E<y;){if(P==0)for(;E<=T;)i(this,b,E),E+=this.blockSize;if(typeof b=="string"){for(;E<y;)if(N[P++]=b.charCodeAt(E++),P==this.blockSize){i(this,N),P=0;break}}else for(;E<y;)if(N[P++]=b[E++],P==this.blockSize){i(this,N),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var T=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=T&255,T/=256;for(this.u(b),b=Array(16),y=T=0;4>y;++y)for(var N=0;32>N;N+=8)b[T++]=this.g[y]>>>N&255;return b};function o(b,y){var T=c;return Object.prototype.hasOwnProperty.call(T,b)?T[b]:T[b]=y(b)}function l(b,y){this.h=y;for(var T=[],N=!0,P=b.length-1;0<=P;P--){var E=b[P]|0;N&&E==y||(T[P]=E,N=!1)}this.g=T}var c={};function p(b){return-128<=b&&128>b?o(b,function(y){return new l([y|0],0>y?-1:0)}):new l([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return w;if(0>b)return L(h(-b));for(var y=[],T=1,N=0;b>=T;N++)y[N]=b/T|0,T*=4294967296;return new l(y,0)}function S(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return L(S(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),N=w,P=0;P<b.length;P+=8){var E=Math.min(8,b.length-P),f=parseInt(b.substring(P,P+E),y);8>E?(E=h(Math.pow(y,E)),N=N.j(E).add(h(f))):(N=N.j(T),N=N.add(h(f)))}return N}var w=p(0),x=p(1),j=p(16777216);e=l.prototype,e.m=function(){if(A(this))return-L(this).m();for(var b=0,y=1,T=0;T<this.g.length;T++){var N=this.i(T);b+=(0<=N?N:4294967296+N)*y,y*=4294967296}return b},e.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(A(this))return"-"+L(this).toString(b);for(var y=h(Math.pow(b,6)),T=this,N="";;){var P=D(T,y).g;T=g(T,P.j(y));var E=((0<T.g.length?T.g[0]:T.h)>>>0).toString(b);if(T=P,C(T))return E+N;for(;6>E.length;)E="0"+E;N=E+N}},e.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function A(b){return b.h==-1}e.l=function(b){return b=g(this,b),A(b)?-1:C(b)?0:1};function L(b){for(var y=b.g.length,T=[],N=0;N<y;N++)T[N]=~b.g[N];return new l(T,~b.h).add(x)}e.abs=function(){return A(this)?L(this):this},e.add=function(b){for(var y=Math.max(this.g.length,b.g.length),T=[],N=0,P=0;P<=y;P++){var E=N+(this.i(P)&65535)+(b.i(P)&65535),f=(E>>>16)+(this.i(P)>>>16)+(b.i(P)>>>16);N=f>>>16,E&=65535,f&=65535,T[P]=f<<16|E}return new l(T,T[T.length-1]&-2147483648?-1:0)};function g(b,y){return b.add(L(y))}e.j=function(b){if(C(this)||C(b))return w;if(A(this))return A(b)?L(this).j(L(b)):L(L(this).j(b));if(A(b))return L(this.j(L(b)));if(0>this.l(j)&&0>b.l(j))return h(this.m()*b.m());for(var y=this.g.length+b.g.length,T=[],N=0;N<2*y;N++)T[N]=0;for(N=0;N<this.g.length;N++)for(var P=0;P<b.g.length;P++){var E=this.i(N)>>>16,f=this.i(N)&65535,z=b.i(P)>>>16,W=b.i(P)&65535;T[2*N+2*P]+=f*W,m(T,2*N+2*P),T[2*N+2*P+1]+=E*W,m(T,2*N+2*P+1),T[2*N+2*P+1]+=f*z,m(T,2*N+2*P+1),T[2*N+2*P+2]+=E*z,m(T,2*N+2*P+2)}for(N=0;N<y;N++)T[N]=T[2*N+1]<<16|T[2*N];for(N=y;N<2*y;N++)T[N]=0;return new l(T,0)};function m(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function k(b,y){this.g=b,this.h=y}function D(b,y){if(C(y))throw Error("division by zero");if(C(b))return new k(w,w);if(A(b))return y=D(L(b),y),new k(L(y.g),L(y.h));if(A(y))return y=D(b,L(y)),new k(L(y.g),y.h);if(30<b.g.length){if(A(b)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var T=x,N=y;0>=N.l(b);)T=_(T),N=_(N);var P=M(T,1),E=M(N,1);for(N=M(N,2),T=M(T,2);!C(N);){var f=E.add(N);0>=f.l(b)&&(P=P.add(T),E=f),N=M(N,1),T=M(T,1)}return y=g(b,P.j(y)),new k(P,y)}for(P=w;0<=b.l(y);){for(T=Math.max(1,Math.floor(b.m()/y.m())),N=Math.ceil(Math.log(T)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),E=h(T),f=E.j(y);A(f)||0<f.l(b);)T-=N,E=h(T),f=E.j(y);C(E)&&(E=x),P=P.add(E),b=g(b,f)}return new k(P,b)}e.A=function(b){return D(this,b).h},e.and=function(b){for(var y=Math.max(this.g.length,b.g.length),T=[],N=0;N<y;N++)T[N]=this.i(N)&b.i(N);return new l(T,this.h&b.h)},e.or=function(b){for(var y=Math.max(this.g.length,b.g.length),T=[],N=0;N<y;N++)T[N]=this.i(N)|b.i(N);return new l(T,this.h|b.h)},e.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),T=[],N=0;N<y;N++)T[N]=this.i(N)^b.i(N);return new l(T,this.h^b.h)};function _(b){for(var y=b.g.length+1,T=[],N=0;N<y;N++)T[N]=b.i(N)<<1|b.i(N-1)>>>31;return new l(T,b.h)}function M(b,y){var T=y>>5;y%=32;for(var N=b.g.length-T,P=[],E=0;E<N;E++)P[E]=0<y?b.i(E+T)>>>y|b.i(E+T+1)<<32-y:b.i(E+T);return new l(P,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=h,l.fromString=S,Dm=l}).apply(typeof qu<"u"?qu:typeof self<"u"?self:typeof window<"u"?window:{});var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,u){return a==Array.prototype||a==Object.prototype||(a[d]=u.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mi=="object"&&Mi];for(var d=0;d<a.length;++d){var u=a[d];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var u=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var R=a[v];if(!(R in u))break e;u=u[R]}a=a[a.length-1],v=u[a],d=d(v),d!=v&&d!=null&&t(u,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var u=0,v=!1,R={next:function(){if(!v&&u<a.length){var O=u++;return{value:d(O,a[O]),done:!1}}return v=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return o(this,function(d,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function p(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function h(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function S(a,d,u){return a.call.apply(a.bind,arguments)}function w(a,d,u){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,v),a.apply(d,R)}}return function(){return a.apply(d,arguments)}}function x(a,d,u){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:w,x.apply(null,arguments)}function j(a,d){var u=Array.prototype.slice.call(arguments,1);return function(){var v=u.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function C(a,d){function u(){}u.prototype=d.prototype,a.aa=d.prototype,a.prototype=new u,a.prototype.constructor=a,a.Qb=function(v,R,O){for(var Y=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)Y[ue-2]=arguments[ue];return d.prototype[R].apply(v,Y)}}function A(a){const d=a.length;if(0<d){const u=Array(d);for(let v=0;v<d;v++)u[v]=a[v];return u}return[]}function L(a,d){for(let u=1;u<arguments.length;u++){const v=arguments[u];if(p(v)){const R=a.length||0,O=v.length||0;a.length=R+O;for(let Y=0;Y<O;Y++)a[R+Y]=v[Y]}else a.push(v)}}class g{constructor(d,u){this.i=d,this.j=u,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function m(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var _=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function M(a,d,u){for(const v in a)d.call(u,a[v],v,a)}function b(a,d){for(const u in a)d.call(void 0,a[u],u,a)}function y(a){const d={};for(const u in a)d[u]=a[u];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(a,d){let u,v;for(let R=1;R<arguments.length;R++){v=arguments[R];for(u in v)a[u]=v[u];for(let O=0;O<T.length;O++)u=T[O],Object.prototype.hasOwnProperty.call(v,u)&&(a[u]=v[u])}}function P(a){var d=1;a=a.split(":");const u=[];for(;0<d&&a.length;)u.push(a.shift()),d--;return a.length&&u.push(a.join(":")),u}function E(a){c.setTimeout(()=>{throw a},0)}function f(){var a=V;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class z{constructor(){this.h=this.g=null}add(d,u){const v=W.get();v.set(d,u),this.h?this.h.next=v:this.g=v,this.h=v}}var W=new g(()=>new J,a=>a.reset());class J{constructor(){this.next=this.g=this.h=null}set(d,u){this.h=d,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,F=!1,V=new z,G=()=>{const a=c.Promise.resolve(void 0);ne=()=>{a.then(Q)}};var Q=()=>{for(var a;a=f();){try{a.h.call(a.g)}catch(u){E(u)}var d=W;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}F=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const u=()=>{};c.addEventListener("test",u,d),c.removeEventListener("test",u,d)}catch{}return a}();function ee(a,d){if(H.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var u=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(_){e:{try{D(d.nodeName);var R=!0;break e}catch{}R=!1}R||(d=null)}}else u=="mouseover"?d=a.fromElement:u=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:B[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ee.aa.h.call(this)}}C(ee,H);var B={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),re=0;function xe(a,d,u,v,R){this.listener=a,this.proxy=null,this.src=d,this.type=u,this.capture=!!v,this.ha=R,this.key=++re,this.da=this.fa=!1}function we(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,d,u,v,R){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var Y=Ht(a,d,v,R);return-1<Y?(d=a[Y],u||(d.fa=!1)):(d=new xe(d,this.src,O,!!v,R),d.fa=u,a.push(d)),d};function Je(a,d){var u=d.type;if(u in a.g){var v=a.g[u],R=Array.prototype.indexOf.call(v,d,void 0),O;(O=0<=R)&&Array.prototype.splice.call(v,R,1),O&&(we(d),a.g[u].length==0&&(delete a.g[u],a.h--))}}function Ht(a,d,u,v){for(var R=0;R<a.length;++R){var O=a[R];if(!O.da&&O.listener==d&&O.capture==!!u&&O.ha==v)return R}return-1}var Rt="closure_lm_"+(1e6*Math.random()|0),Lt={};function rn(a,d,u,v,R){if(Array.isArray(d)){for(var O=0;O<d.length;O++)rn(a,d[O],u,v,R);return null}return u=Zr(u),a&&a[X]?a.K(d,u,h(v)?!!v.capture:!1,R):Ya(a,d,u,!1,v,R)}function Ya(a,d,u,v,R,O){if(!d)throw Error("Invalid event type");var Y=h(R)?!!R.capture:!!R,ue=zs(a);if(ue||(a[Rt]=ue=new ye(a)),u=ue.add(d,u,v,Y,O),u.proxy)return u;if(v=Va(),u.proxy=v,v.src=a,v.listener=u,a.addEventListener)K||(R=Y),R===void 0&&(R=!1),a.addEventListener(d.toString(),v,R);else if(a.attachEvent)a.attachEvent(Qr(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Va(){function a(u){return d.call(a.src,a.listener,u)}const d=$a;return a}function Jr(a,d,u,v,R){if(Array.isArray(d))for(var O=0;O<d.length;O++)Jr(a,d[O],u,v,R);else v=h(v)?!!v.capture:!!v,u=Zr(u),a&&a[X]?(a=a.i,d=String(d).toString(),d in a.g&&(O=a.g[d],u=Ht(O,u,v,R),-1<u&&(we(O[u]),Array.prototype.splice.call(O,u,1),O.length==0&&(delete a.g[d],a.h--)))):a&&(a=zs(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Ht(d,u,v,R)),(u=-1<a?d[a]:null)&&Fs(u))}function Fs(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[X])Je(d.i,a);else{var u=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(u,v,a.capture):d.detachEvent?d.detachEvent(Qr(u),v):d.addListener&&d.removeListener&&d.removeListener(v),(u=zs(d))?(Je(u,a),u.h==0&&(u.src=null,d[Rt]=null)):we(a)}}}function Qr(a){return a in Lt?Lt[a]:Lt[a]="on"+a}function $a(a,d){if(a.da)a=!0;else{d=new ee(d,this);var u=a.listener,v=a.ha||a.src;a.fa&&Fs(a),a=u.call(v,d)}return a}function zs(a){return a=a[Rt],a instanceof ye?a:null}var Us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zr(a){return typeof a=="function"?a:(a[Us]||(a[Us]=function(d){return a.handleEvent(d)}),a[Us])}function Ce(){Z.call(this),this.i=new ye(this),this.M=this,this.F=null}C(Ce,Z),Ce.prototype[X]=!0,Ce.prototype.removeEventListener=function(a,d,u,v){Jr(this,a,d,u,v)};function Re(a,d){var u,v=a.F;if(v)for(u=[];v;v=v.F)u.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new H(d,a);else if(d instanceof H)d.target=d.target||a;else{var R=d;d=new H(v,a),N(d,R)}if(R=!0,u)for(var O=u.length-1;0<=O;O--){var Y=d.g=u[O];R=Qn(Y,v,!0,d)&&R}if(Y=d.g=a,R=Qn(Y,v,!0,d)&&R,R=Qn(Y,v,!1,d)&&R,u)for(O=0;O<u.length;O++)Y=d.g=u[O],R=Qn(Y,v,!1,d)&&R}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var u=a.g[d],v=0;v<u.length;v++)we(u[v]);delete a.g[d],a.h--}}this.F=null},Ce.prototype.K=function(a,d,u,v){return this.i.add(String(a),d,!1,u,v)},Ce.prototype.L=function(a,d,u,v){return this.i.add(String(a),d,!0,u,v)};function Qn(a,d,u,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var R=!0,O=0;O<d.length;++O){var Y=d[O];if(Y&&!Y.da&&Y.capture==u){var ue=Y.listener,Oe=Y.ha||Y.src;Y.fa&&Je(a.i,Y),R=ue.call(Oe,v)!==!1&&R}}return R&&!v.defaultPrevented}function ei(a,d,u){if(typeof a=="function")u&&(a=x(a,u));else if(a&&typeof a.handleEvent=="function")a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function ti(a){a.g=ei(()=>{a.g=null,a.i&&(a.i=!1,ti(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ga extends Z{constructor(d,u){super(),this.m=d,this.l=u,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ti(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dn(a){Z.call(this),this.h=a,this.g={}}C(Dn,Z);var ni=[];function si(a){M(a.g,function(d,u){this.g.hasOwnProperty(u)&&Fs(d)},a),a.g={}}Dn.prototype.N=function(){Dn.aa.N.call(this),si(this)},Dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hs=c.JSON.stringify,qa=c.JSON.parse,Bs=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ws(){}Ws.prototype.h=null;function Ys(a){return a.h||(a.h=a.i())}function Xa(){}var vt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rn(){H.call(this,"d")}C(Rn,H);function Vs(){H.call(this,"c")}C(Vs,H);var an={},ri=null;function $s(){return ri=ri||new Ce}an.La="serverreachability";function ii(a){H.call(this,an.La,a)}C(ii,H);function Ln(a){const d=$s();Re(d,new ii(d))}an.STAT_EVENT="statevent";function ai(a,d){H.call(this,an.STAT_EVENT,a),this.stat=d}C(ai,H);function Le(a){const d=$s();Re(d,new ai(d,a))}an.Ma="timingevent";function oi(a,d){H.call(this,an.Ma,a),this.size=d}C(oi,H);function $(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function te(){this.g=!0}te.prototype.xa=function(){this.g=!1};function _e(a,d,u,v,R,O){a.info(function(){if(a.g)if(O)for(var Y="",ue=O.split("&"),Oe=0;Oe<ue.length;Oe++){var oe=ue[Oe].split("=");if(1<oe.length){var Ue=oe[0];oe=oe[1];var He=Ue.split("_");Y=2<=He.length&&He[1]=="type"?Y+(Ue+"="+oe+"&"):Y+(Ue+"=redacted&")}}else Y=null;else Y=O;return"XMLHTTP REQ ("+v+") [attempt "+R+"]: "+d+`
`+u+`
`+Y})}function Gs(a,d,u,v,R,O,Y){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+R+"]: "+d+`
`+u+`
`+O+" "+Y})}function on(a,d,u,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Ja(a,u)+(v?" "+v:"")})}function Ka(a,d){a.info(function(){return"TIMEOUT: "+d})}te.prototype.info=function(){};function Ja(a,d){if(!a.g)return d;if(!d)return null;try{var u=JSON.parse(d);if(u){for(a=0;a<u.length;a++)if(Array.isArray(u[a])){var v=u[a];if(!(2>v.length)){var R=v[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var Y=1;Y<R.length;Y++)R[Y]=""}}}}return Hs(u)}catch{return d}}var qs={NO_ERROR:0,TIMEOUT:8},Hm={},Qa;function li(){}C(li,Ws),li.prototype.g=function(){return new XMLHttpRequest},li.prototype.i=function(){return{}},Qa=new li;function ln(a,d,u,v){this.j=a,this.i=d,this.l=u,this.R=v||1,this.U=new Dn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $c}function $c(){this.i=null,this.g="",this.h=!1}var Gc={},Za={};function eo(a,d,u){a.L=1,a.v=pi(Bt(d)),a.m=u,a.P=!0,qc(a,null)}function qc(a,d){a.F=Date.now(),ci(a),a.A=Bt(a.v);var u=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),ld(u.i,"t",v),a.C=0,u=a.j.J,a.h=new $c,a.g=Td(a.j,u?d:null,!a.m),0<a.O&&(a.M=new Ga(x(a.Y,a,a.g),a.O)),d=a.U,u=a.g,v=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(ni[0]=R.toString()),R=ni);for(var O=0;O<R.length;O++){var Y=rn(u,R[O],v||d.handleEvent,!1,d.h||d);if(!Y)break;d.g[Y.key]=Y}d=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ln(),_e(a.i,a.u,a.A,a.l,a.R,a.m)}ln.prototype.ca=function(a){a=a.target;const d=this.M;d&&Wt(a)==3?d.j():this.Y(a)},ln.prototype.Y=function(a){try{if(a==this.g)e:{const He=Wt(this.g);var d=this.g.Ba();const ts=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||fd(this.g)))){this.J||He!=4||d==7||(d==8||0>=ts?Ln(3):Ln(2)),to(this);var u=this.g.Z();this.X=u;t:if(Xc(this)){var v=fd(this.g);a="";var R=v.length,O=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_n(this),Xs(this);var Y="";break t}this.h.i=new c.TextDecoder}for(d=0;d<R;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(O&&d==R-1)});v.length=0,this.h.g+=a,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=u==200,Gs(this.i,this.u,this.A,this.l,this.R,He,u),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Oe=this.g;if((ue=Oe.g?Oe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(ue)){var oe=ue;break t}}oe=null}if(u=oe)on(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,no(this,u);else{this.o=!1,this.s=3,Le(12),_n(this),Xs(this);break e}}if(this.P){u=!0;let xt;for(;!this.J&&this.C<Y.length;)if(xt=Bm(this,Y),xt==Za){He==4&&(this.s=4,Le(14),u=!1),on(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Gc){this.s=4,Le(15),on(this.i,this.l,Y,"[Invalid Chunk]"),u=!1;break}else on(this.i,this.l,xt,null),no(this,xt);if(Xc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||Y.length!=0||this.h.h||(this.s=1,Le(16),u=!1),this.o=this.o&&u,!u)on(this.i,this.l,Y,"[Invalid Chunked Response]"),_n(this),Xs(this);else if(0<Y.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),lo(Ue),Ue.M=!0,Le(11))}}else on(this.i,this.l,Y,null),no(this,Y);He==4&&_n(this),this.o&&!this.J&&(He==4?kd(this.j,this):(this.o=!1,ci(this)))}else af(this.g),u==400&&0<Y.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),_n(this),Xs(this)}}}catch{}finally{}};function Xc(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Bm(a,d){var u=a.C,v=d.indexOf(`
`,u);return v==-1?Za:(u=Number(d.substring(u,v)),isNaN(u)?Gc:(v+=1,v+u>d.length?Za:(d=d.slice(v,v+u),a.C=v+u,d)))}ln.prototype.cancel=function(){this.J=!0,_n(this)};function ci(a){a.S=Date.now()+a.I,Kc(a,a.I)}function Kc(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=$(x(a.ba,a),d)}function to(a){a.B&&(c.clearTimeout(a.B),a.B=null)}ln.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ka(this.i,this.A),this.L!=2&&(Ln(),Le(17)),_n(this),this.s=2,Xs(this)):Kc(this,this.S-a)};function Xs(a){a.j.G==0||a.J||kd(a.j,a)}function _n(a){to(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,si(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function no(a,d){try{var u=a.j;if(u.G!=0&&(u.g==a||so(u.h,a))){if(!a.K&&so(u.h,a)&&u.G==3){try{var v=u.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var R=v;if(R[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<a.F)vi(u),gi(u);else break e;oo(u),Le(18)}}else u.za=R[1],0<u.za-u.T&&37500>R[2]&&u.F&&u.v==0&&!u.C&&(u.C=$(x(u.Za,u),6e3));if(1>=Zc(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Mn(u,11)}else if((a.K||u.g==a)&&vi(u),!m(d))for(R=u.Da.g.parse(d),d=0;d<R.length;d++){let oe=R[d];if(u.T=oe[0],oe=oe[1],u.G==2)if(oe[0]=="c"){u.K=oe[1],u.ia=oe[2];const Ue=oe[3];Ue!=null&&(u.la=Ue,u.j.info("VER="+u.la));const He=oe[4];He!=null&&(u.Aa=He,u.j.info("SVER="+u.Aa));const ts=oe[5];ts!=null&&typeof ts=="number"&&0<ts&&(v=1.5*ts,u.L=v,u.j.info("backChannelRequestTimeoutMs_="+v)),v=u;const xt=a.g;if(xt){const xi=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var O=v.h;O.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ro(O,O.h),O.h=null))}if(v.D){const co=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;co&&(v.ya=co,me(v.I,v.D,co))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-a.F,u.j.info("Handshake RTT: "+u.R+"ms")),v=u;var Y=a;if(v.qa=Cd(v,v.J?v.ia:null,v.W),Y.K){ed(v.h,Y);var ue=Y,Oe=v.L;Oe&&(ue.I=Oe),ue.B&&(to(ue),ci(ue)),v.g=Y}else wd(v);0<u.i.length&&yi(u)}else oe[0]!="stop"&&oe[0]!="close"||Mn(u,7);else u.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Mn(u,7):ao(u):oe[0]!="noop"&&u.l&&u.l.ta(oe),u.v=0)}}Ln(4)}catch{}}var Wm=class{constructor(a,d){this.g=a,this.map=d}};function Jc(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zc(a){return a.h?1:a.g?a.g.size:0}function so(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function ro(a,d){a.g?a.g.add(d):a.h=d}function ed(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Jc.prototype.cancel=function(){if(this.i=td(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function td(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const u of a.g.values())d=d.concat(u.D);return d}return A(a.i)}function Ym(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(p(a)){for(var d=[],u=a.length,v=0;v<u;v++)d.push(a[v]);return d}d=[],u=0;for(v in a)d[u++]=a[v];return d}function Vm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(p(a)||typeof a=="string"){var d=[];a=a.length;for(var u=0;u<a;u++)d.push(u);return d}d=[],u=0;for(const v in a)d[u++]=v;return d}}}function nd(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(p(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var u=Vm(a),v=Ym(a),R=v.length,O=0;O<R;O++)d.call(void 0,v[O],u&&u[O],a)}var sd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $m(a,d){if(a){a=a.split("&");for(var u=0;u<a.length;u++){var v=a[u].indexOf("="),R=null;if(0<=v){var O=a[u].substring(0,v);R=a[u].substring(v+1)}else O=a[u];d(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function On(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof On){this.h=a.h,di(this,a.j),this.o=a.o,this.g=a.g,ui(this,a.s),this.l=a.l;var d=a.i,u=new Qs;u.i=d.i,d.g&&(u.g=new Map(d.g),u.h=d.h),rd(this,u),this.m=a.m}else a&&(d=String(a).match(sd))?(this.h=!1,di(this,d[1]||"",!0),this.o=Ks(d[2]||""),this.g=Ks(d[3]||"",!0),ui(this,d[4]),this.l=Ks(d[5]||"",!0),rd(this,d[6]||"",!0),this.m=Ks(d[7]||"")):(this.h=!1,this.i=new Qs(null,this.h))}On.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Js(d,id,!0),":");var u=this.g;return(u||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Js(d,id,!0),"@"),a.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&a.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&a.push("/"),a.push(Js(u,u.charAt(0)=="/"?Xm:qm,!0))),(u=this.i.toString())&&a.push("?",u),(u=this.m)&&a.push("#",Js(u,Jm)),a.join("")};function Bt(a){return new On(a)}function di(a,d,u){a.j=u?Ks(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ui(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function rd(a,d,u){d instanceof Qs?(a.i=d,Qm(a.i,a.h)):(u||(d=Js(d,Km)),a.i=new Qs(d,a.h))}function me(a,d,u){a.i.set(d,u)}function pi(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ks(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Js(a,d,u){return typeof a=="string"?(a=encodeURI(a).replace(d,Gm),u&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Gm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var id=/[#\/\?@]/g,qm=/[#\?:]/g,Xm=/[#\?]/g,Km=/[#\?@]/g,Jm=/#/g;function Qs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function cn(a){a.g||(a.g=new Map,a.h=0,a.i&&$m(a.i,function(d,u){a.add(decodeURIComponent(d.replace(/\+/g," ")),u)}))}e=Qs.prototype,e.add=function(a,d){cn(this),this.i=null,a=Zn(this,a);var u=this.g.get(a);return u||this.g.set(a,u=[]),u.push(d),this.h+=1,this};function ad(a,d){cn(a),d=Zn(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function od(a,d){return cn(a),d=Zn(a,d),a.g.has(d)}e.forEach=function(a,d){cn(this),this.g.forEach(function(u,v){u.forEach(function(R){a.call(d,R,v,this)},this)},this)},e.na=function(){cn(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),u=[];for(let v=0;v<d.length;v++){const R=a[v];for(let O=0;O<R.length;O++)u.push(d[v])}return u},e.V=function(a){cn(this);let d=[];if(typeof a=="string")od(this,a)&&(d=d.concat(this.g.get(Zn(this,a))));else{a=Array.from(this.g.values());for(let u=0;u<a.length;u++)d=d.concat(a[u])}return d},e.set=function(a,d){return cn(this),this.i=null,a=Zn(this,a),od(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},e.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function ld(a,d,u){ad(a,d),0<u.length&&(a.i=null,a.g.set(Zn(a,d),A(u)),a.h+=u.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var u=0;u<d.length;u++){var v=d[u];const O=encodeURIComponent(String(v)),Y=this.V(v);for(v=0;v<Y.length;v++){var R=O;Y[v]!==""&&(R+="="+encodeURIComponent(String(Y[v]))),a.push(R)}}return this.i=a.join("&")};function Zn(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Qm(a,d){d&&!a.j&&(cn(a),a.i=null,a.g.forEach(function(u,v){var R=v.toLowerCase();v!=R&&(ad(this,v),ld(this,R,u))},a)),a.j=d}function Zm(a,d){const u=new te;if(c.Image){const v=new Image;v.onload=j(dn,u,"TestLoadImage: loaded",!0,d,v),v.onerror=j(dn,u,"TestLoadImage: error",!1,d,v),v.onabort=j(dn,u,"TestLoadImage: abort",!1,d,v),v.ontimeout=j(dn,u,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function ef(a,d){const u=new te,v=new AbortController,R=setTimeout(()=>{v.abort(),dn(u,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(O=>{clearTimeout(R),O.ok?dn(u,"TestPingServer: ok",!0,d):dn(u,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(R),dn(u,"TestPingServer: error",!1,d)})}function dn(a,d,u,v,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),v(u)}catch{}}function tf(){this.g=new Bs}function nf(a,d,u){const v=u||"";try{nd(a,function(R,O){let Y=R;h(R)&&(Y=Hs(R)),d.push(v+O+"="+encodeURIComponent(Y))})}catch(R){throw d.push(v+"type="+encodeURIComponent("_badmap")),R}}function hi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(hi,Ws),hi.prototype.g=function(){return new mi(this.l,this.j)},hi.prototype.i=function(a){return function(){return a}}({});function mi(a,d){Ce.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(mi,Ce),e=mi.prototype,e.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,er(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zs(this)),this.readyState=0},e.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,er(this)),this.g&&(this.readyState=3,er(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function cd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}e.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Zs(this):er(this),this.readyState==3&&cd(this)}},e.Ra=function(a){this.g&&(this.response=this.responseText=a,Zs(this))},e.Qa=function(a){this.g&&(this.response=a,Zs(this))},e.ga=function(){this.g&&Zs(this)};function Zs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,er(a)}e.setRequestHeader=function(a,d){this.u.append(a,d)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var u=d.next();!u.done;)u=u.value,a.push(u[0]+": "+u[1]),u=d.next();return a.join(`\r
`)};function er(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function dd(a){let d="";return M(a,function(u,v){d+=v,d+=":",d+=u,d+=`\r
`}),d}function io(a,d,u){e:{for(v in u){var v=!1;break e}v=!0}v||(u=dd(u),typeof a=="string"?u!=null&&encodeURIComponent(String(u)):me(a,d,u))}function Te(a){Ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Te,Ce);var sf=/^https?$/i,rf=["POST","PUT"];e=Te.prototype,e.Ha=function(a){this.J=a},e.ea=function(a,d,u,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qa.g(),this.v=this.o?Ys(this.o):Ys(Qa),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){ud(this,O);return}if(a=u||"",u=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var R in v)u.set(R,v[R]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const O of v.keys())u.set(O,v.get(O));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(u.keys()).find(O=>O.toLowerCase()=="content-type"),R=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rf,d,void 0))||v||R||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,Y]of u)this.g.setRequestHeader(O,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{md(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){ud(this,O)}};function ud(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,pd(a),fi(a)}function pd(a){a.A||(a.A=!0,Re(a,"complete"),Re(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Re(this,"complete"),Re(this,"abort"),fi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fi(this,!0)),Te.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?hd(this):this.bb())},e.bb=function(){hd(this)};function hd(a){if(a.h&&typeof l<"u"&&(!a.v[1]||Wt(a)!=4||a.Z()!=2)){if(a.u&&Wt(a)==4)ei(a.Ea,0,a);else if(Re(a,"readystatechange"),Wt(a)==4){a.h=!1;try{const Y=a.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var u;if(!(u=d)){var v;if(v=Y===0){var R=String(a.D).match(sd)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),v=!sf.test(R?R.toLowerCase():"")}u=v}if(u)Re(a,"complete"),Re(a,"success");else{a.m=6;try{var O=2<Wt(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",pd(a)}}finally{fi(a)}}}}function fi(a,d){if(a.g){md(a);const u=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Re(a,"ready");try{u.onreadystatechange=v}catch{}}}function md(a){a.I&&(c.clearTimeout(a.I),a.I=null)}e.isActive=function(){return!!this.g};function Wt(a){return a.g?a.g.readyState:0}e.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),qa(d)}};function fd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function af(a){const d={};a=(a.g&&2<=Wt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(m(a[v]))continue;var u=P(a[v]);const R=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const O=d[R]||[];d[R]=O,O.push(u)}b(d,function(v){return v.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tr(a,d,u){return u&&u.internalChannelParams&&u.internalChannelParams[a]||d}function gd(a){this.Aa=0,this.i=[],this.j=new te,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tr("baseRetryDelayMs",5e3,a),this.cb=tr("retryDelaySeedMs",1e4,a),this.Wa=tr("forwardChannelMaxRetries",2,a),this.wa=tr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Jc(a&&a.concurrentRequestLimit),this.Da=new tf,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=gd.prototype,e.la=8,e.G=1,e.connect=function(a,d,u,v){Le(0),this.W=a,this.H=d||{},u&&v!==void 0&&(this.H.OSID=u,this.H.OAID=v),this.F=this.X,this.I=Cd(this,null,this.W),yi(this)};function ao(a){if(yd(a),a.G==3){var d=a.U++,u=Bt(a.I);if(me(u,"SID",a.K),me(u,"RID",d),me(u,"TYPE","terminate"),nr(a,u),d=new ln(a,a.j,d),d.L=2,d.v=pi(Bt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=d.v,u=!0),u||(d.g=Td(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ci(d)}Sd(a)}function gi(a){a.g&&(lo(a),a.g.cancel(),a.g=null)}function yd(a){gi(a),a.u&&(c.clearTimeout(a.u),a.u=null),vi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function yi(a){if(!Qc(a.h)&&!a.s){a.s=!0;var d=a.Ga;ne||G(),F||(ne(),F=!0),V.add(d,a),a.B=0}}function of(a,d){return Zc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=$(x(a.Ga,a,d),jd(a,a.B)),a.B++,!0)}e.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new ln(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),N(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)e:{for(var d=0,u=0;u<this.i.length;u++){t:{var v=this.i[u];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=u;break e}if(d===4096||u===this.i.length-1){d=u+1;break e}}d=1e3}else d=1e3;d=xd(this,R,d),u=Bt(this.I),me(u,"RID",a),me(u,"CVER",22),this.D&&me(u,"X-HTTP-Session-Id",this.D),nr(this,u),O&&(this.O?d="headers="+encodeURIComponent(String(dd(O)))+"&"+d:this.m&&io(u,this.m,O)),ro(this.h,R),this.Ua&&me(u,"TYPE","init"),this.P?(me(u,"$req",d),me(u,"SID","null"),R.T=!0,eo(R,u,null)):eo(R,u,d),this.G=2}}else this.G==3&&(a?vd(this,a):this.i.length==0||Qc(this.h)||vd(this))};function vd(a,d){var u;d?u=d.l:u=a.U++;const v=Bt(a.I);me(v,"SID",a.K),me(v,"RID",u),me(v,"AID",a.T),nr(a,v),a.m&&a.o&&io(v,a.m,a.o),u=new ln(a,a.j,u,a.B+1),a.m===null&&(u.H=a.o),d&&(a.i=d.D.concat(a.i)),d=xd(a,u,1e3),u.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ro(a.h,u),eo(u,v,d)}function nr(a,d){a.H&&M(a.H,function(u,v){me(d,v,u)}),a.l&&nd({},function(u,v){me(d,v,u)})}function xd(a,d,u){u=Math.min(a.i.length,u);var v=a.l?x(a.l.Na,a.l,a):null;e:{var R=a.i;let O=-1;for(;;){const Y=["count="+u];O==-1?0<u?(O=R[0].g,Y.push("ofs="+O)):O=0:Y.push("ofs="+O);let ue=!0;for(let Oe=0;Oe<u;Oe++){let oe=R[Oe].g;const Ue=R[Oe].map;if(oe-=O,0>oe)O=Math.max(0,R[Oe].g-100),ue=!1;else try{nf(Ue,Y,"req"+oe+"_")}catch{v&&v(Ue)}}if(ue){v=Y.join("&");break e}}}return a=a.i.splice(0,u),d.D=a,v}function wd(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;ne||G(),F||(ne(),F=!0),V.add(d,a),a.v=0}}function oo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=$(x(a.Fa,a),jd(a,a.v)),a.v++,!0)}e.Fa=function(){if(this.u=null,bd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=$(x(this.ab,this),a)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),gi(this),bd(this))};function lo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function bd(a){a.g=new ln(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Bt(a.qa);me(d,"RID","rpc"),me(d,"SID",a.K),me(d,"AID",a.T),me(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(d,"TO",a.ja),me(d,"TYPE","xmlhttp"),nr(a,d),a.m&&a.o&&io(d,a.m,a.o),a.L&&(a.g.I=a.L);var u=a.g;a=a.ia,u.L=1,u.v=pi(Bt(d)),u.m=null,u.P=!0,qc(u,a)}e.Za=function(){this.C!=null&&(this.C=null,gi(this),oo(this),Le(19))};function vi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function kd(a,d){var u=null;if(a.g==d){vi(a),lo(a),a.g=null;var v=2}else if(so(a.h,d))u=d.D,ed(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){u=d.m?d.m.length:0,d=Date.now()-d.F;var R=a.B;v=$s(),Re(v,new oi(v,u)),yi(a)}else wd(a);else if(R=d.s,R==3||R==0&&0<d.X||!(v==1&&of(a,d)||v==2&&oo(a)))switch(u&&0<u.length&&(d=a.h,d.i=d.i.concat(u)),R){case 1:Mn(a,5);break;case 4:Mn(a,10);break;case 3:Mn(a,6);break;default:Mn(a,2)}}}function jd(a,d){let u=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(u*=2),u*d}function Mn(a,d){if(a.j.info("Error code "+d),d==2){var u=x(a.fb,a),v=a.Xa;const R=!v;v=new On(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||di(v,"https"),pi(v),R?Zm(v.toString(),u):ef(v.toString(),u)}else Le(2);a.G=0,a.l&&a.l.sa(d),Sd(a),yd(a)}e.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function Sd(a){if(a.G=0,a.ka=[],a.l){const d=td(a.h);(d.length!=0||a.i.length!=0)&&(L(a.ka,d),L(a.ka,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.ra()}}function Cd(a,d,u){var v=u instanceof On?Bt(u):new On(u);if(v.g!="")d&&(v.g=d+"."+v.g),ui(v,v.s);else{var R=c.location;v=R.protocol,d=d?d+"."+R.hostname:R.hostname,R=+R.port;var O=new On(null);v&&di(O,v),d&&(O.g=d),R&&ui(O,R),u&&(O.l=u),v=O}return u=a.D,d=a.ya,u&&d&&me(v,u,d),me(v,"VER",a.la),nr(a,v),v}function Td(a,d,u){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Te(new hi({eb:u})):new Te(a.pa),d.Ha(a.J),d}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nd(){}e=Nd.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function ut(a,d){Ce.call(this),this.g=new gd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!m(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!m(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new es(this)}C(ut,Ce),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){ao(this.g)},ut.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var u={};u.__data__=a,a=u}else this.u&&(u={},u.__data__=Hs(a),a=u);d.i.push(new Wm(d.Ya++,a)),d.G==3&&yi(d)},ut.prototype.N=function(){this.g.l=null,delete this.j,ao(this.g),delete this.g,ut.aa.N.call(this)};function Ed(a){Rn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const u in d){a=u;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}C(Ed,Rn);function Pd(){Vs.call(this),this.status=1}C(Pd,Vs);function es(a){this.g=a}C(es,Nd),es.prototype.ua=function(){Re(this.g,"a")},es.prototype.ta=function(a){Re(this.g,new Ed(a))},es.prototype.sa=function(a){Re(this.g,new Pd)},es.prototype.ra=function(){Re(this.g,"b")},ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,qs.NO_ERROR=0,qs.TIMEOUT=8,qs.HTTP_ERROR=6,Hm.COMPLETE="complete",Xa.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});const Xu="@firebase/firestore";/**
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
 */class rt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */let Ba="10.14.0";/**
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
 */const ka=new Nm("@firebase/firestore");function Pt(e,...t){if(ka.logLevel<=pe.DEBUG){const n=t.map(Lm);ka.debug(`Firestore (${Ba}): ${e}`,...n)}}function Rm(e,...t){if(ka.logLevel<=pe.ERROR){const n=t.map(Lm);ka.error(`Firestore (${Ba}): ${e}`,...n)}}function Lm(e){if(typeof e=="string")return e;try{/**
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
 */function _m(e="Unexpected state"){const t=`FIRESTORE (${Ba}) INTERNAL ASSERTION FAILED: `+e;throw Rm(t),new Error(t)}function Cr(e,t){e||_m()}/**
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
 */const Ct={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Tt extends Ls{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class dv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class uv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class pv{constructor(t){this.t=t,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Cr(this.o===void 0);let r=this.i;const i=p=>this.i!==r?(r=this.i,n(p)):Promise.resolve();let o=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Tr,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const p=o;t.enqueueRetryable(async()=>{await p.promise,await i(this.currentUser)})},c=p=>{Pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(p=>c(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?c(p):(Pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Tr)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Cr(typeof r.accessToken=="string"),new dv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Cr(t===null||typeof t=="string"),new rt(t)}}class hv{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mv{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new hv(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gv{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){Cr(this.o===void 0);const r=o=>{o.error!=null&&Pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,Pt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{Pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Cr(typeof n.token=="string"),this.R=n.token,new fv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function yv(e){return e.name==="IndexedDbTransactionError"}class ja{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ja&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Ku,ie;(ie=Ku||(Ku={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Dm([4294967295,4294967295],0);function Ho(){return typeof document<"u"?document:null}/**
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
 */class vv{constructor(t,n,r=1e3,i=1.5,o=6e4){this.ui=t,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Pt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Vc{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const l=Date.now()+r,c=new Vc(t,n,l,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Tt(Ct.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ju,Qu;(Qu=Ju||(Ju={})).ea="default",Qu.Cache="cache";/**
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
 */const Zu=new Map;function wv(e,t,n,r){if(t===!0&&r===!0)throw new Tt(Ct.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class ep{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Tt(Ct.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Tt(Ct.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xv((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Tt(Ct.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Tt(Ct.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Tt(Ct.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class bv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ep({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Tt(Ct.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Tt(Ct.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ep(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uv;switch(r.type){case"firstParty":return new mv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Tt(Ct.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zu.get(n);r&&(Pt("ComponentProvider","Removing Datastore"),Zu.delete(n),r.terminate())}(this),Promise.resolve()}}/**
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
 */class tp{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vv(this,"async_queue_retry"),this.Vu=()=>{const r=Ho();r&&Pt("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const n=Ho();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Ho();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!yv(t))throw t;Pt("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const i=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw Rm("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(t,n,r){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const i=Vc.createAndSchedule(this,t,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&_m()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class kv extends bv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new tp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new tp(t),this._firestoreClient=void 0,await t}}}(function(t,n=!0){(function(i){Ba=i})(Qy),ba(new wa("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new kv(new pv(r.getProvider("auth-internal")),new gv(r.getProvider("app-check-internal")),function(h,S){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Tt(Ct.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(h.options.projectId,S)}(l,i),l);return o=Object.assign({useFetchStreams:n},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),ks(Xu,"4.7.3",t),ks(Xu,"4.7.3","esm2017")})();const qe=()=>!0;console.log("Running in Demo Mode - using localStorage for data storage");const Om="cyberRangeDemo",dt=()=>{try{const e=localStorage.getItem(Om);return e?JSON.parse(e):{students:{},classes:{},assignments:{},teachers:{}}}catch{return{students:{},classes:{},assignments:{},teachers:{}}}},_s=e=>{localStorage.setItem(Om,JSON.stringify(e))},Xt=new Map,Mm=e=>{const t=Xt.get(e)||[],n=dt();t.forEach(r=>{if(e.startsWith("class:")){const i=e.replace("class:",""),o=Object.values(n.students).filter(l=>l.classCode===i);r(o.map(l=>({...l,lastActivity:l.lastActivity?new Date(l.lastActivity):null,lastLogin:l.lastLogin?new Date(l.lastLogin):null})))}else if(e.startsWith("assignments:")){const i=e.replace("assignments:",""),o=Object.values(n.assignments[i]||{});r(o.map(l=>({...l,dueDate:l.dueDate?new Date(l.dueDate):null,createdAt:l.createdAt?new Date(l.createdAt):null,assignedAt:l.assignedAt?new Date(l.assignedAt):null})))}})},jv=async(e,t,n)=>{if(qe()){const r=dt();if(!r.students[e])return;r.students[e].submissions||(r.students[e].submissions={}),r.students[e].submissions[t]={answer:n.answer,isCorrect:n.isCorrect,exerciseType:n.exerciseType,exerciseTitle:n.exerciseTitle,submittedAt:new Date().toISOString()},r.students[e].lastActivity=new Date().toISOString(),_s(r);return}},Sv=async e=>{if(qe()){const t=dt(),n=[];return Object.entries(t.students).filter(([r,i])=>i.classCode===e).forEach(([r,i])=>{i.submissions&&Object.entries(i.submissions).forEach(([o,l])=>{n.push({studentId:r,studentName:i.name,exerciseId:o,...l})})}),n}return[]},Cv=async e=>qe()&&dt().classes[e]||null,Tv=(e,t)=>{if(qe()){const n=`class:${e}`,r=Xt.get(n)||[];r.push(t),Xt.set(n,r);const i=dt(),o=Object.entries(i.students).filter(([l,c])=>c.classCode===e).map(([l,c])=>({id:l,...c,lastActivity:c.lastActivity?new Date(c.lastActivity):null,lastLogin:c.lastLogin?new Date(c.lastLogin):null}));return t(o),()=>{const l=Xt.get(n)||[];Xt.set(n,l.filter(c=>c!==t))}}return t([]),()=>{}},Fm=(e,t)=>{if(qe()){const n=`assignments:${e}`,r=Xt.get(n)||[];r.push(t),Xt.set(n,r);const i=dt(),o=Object.entries(i.assignments[e]||{}).map(([l,c])=>({id:l,...c,dueDate:c.dueDate?new Date(c.dueDate):null,createdAt:c.createdAt?new Date(c.createdAt):null,assignedAt:c.assignedAt?new Date(c.assignedAt):null}));return t(o),()=>{const l=Xt.get(n)||[];Xt.set(n,l.filter(c=>c!==t))}}return t([]),()=>{}},Nv=async(e,t)=>{if(qe()){const n=dt();n.assignments[e]||(n.assignments[e]={});const r=`assignment_${Date.now()}`;return n.assignments[e][r]={type:t.type,items:t.items||[],title:t.title,assignedAt:new Date().toISOString(),createdAt:new Date().toISOString(),dueDate:t.dueDate||null},_s(n),Mm(`assignments:${e}`),{id:r}}return null},Ev=async(e,t)=>{if(qe()){const n=dt();n.assignments[e]&&n.assignments[e][t]&&(delete n.assignments[e][t],_s(n),Mm(`assignments:${e}`));return}},Pv=async(e,t,n)=>{const r=t.toLowerCase().replace(/[^a-z0-9]/g,"_");if(console.log("Registering teacher:",{teacherId:r,email:t,isDemoMode:qe(),dbAvailable:!1}),qe()){const i=dt();if(i.teachers||(i.teachers={}),i.teachers[r])throw new Error("An account with this email already exists");return i.teachers[r]={name:e,email:t.toLowerCase(),password:n,createdAt:new Date().toISOString(),classes:[]},_s(i),console.log("Teacher registered in demo mode:",r),{id:r,name:e,email:t.toLowerCase(),classes:[]}}throw console.error("Firebase db is not initialized for teacher registration!"),new Error("Database not available. Please check Firebase configuration.")},Av=async(e,t)=>{const n=e.toLowerCase().replace(/[^a-z0-9]/g,"_");if(console.log("Teacher login attempt:",{teacherId:n,isDemoMode:qe(),dbAvailable:!1}),qe()){const r=dt();r.teachers||(r.teachers={});const i=r.teachers[n];if(!i)throw new Error("No account found with this email");if(i.password!==t)throw new Error("Incorrect password");return console.log("Teacher logged in via demo mode:",n),{id:n,name:i.name,email:i.email,classes:i.classes||[]}}throw console.error("Firebase db is not initialized for teacher login!"),new Error("Database not available. Please check Firebase configuration.")},Iv=async e=>{if(qe()){const t=dt();return!t.teachers||!t.teachers[e]?[]:(t.teachers[e].classes||[]).map(r=>t.classes[r]).filter(Boolean)}return[]},Dv=async(e,t)=>{const n=Lv();if(console.log("Creating class:",{teacherId:e,className:t,classCode:n,isDemoMode:qe(),dbAvailable:!1}),qe()){const r=dt();if(r.teachers||(r.teachers={}),!r.teachers[e])throw new Error("Teacher not found");return r.classes[n]={name:t,teacherId:e,teacher:r.teachers[e].name,classCode:n,createdAt:new Date().toISOString(),isActive:!0},r.assignments[n]={},r.teachers[e].classes||(r.teachers[e].classes=[]),r.teachers[e].classes.push(n),_s(r),console.log("Class created in demo mode:",n),r.classes[n]}throw console.error("Firebase db is not initialized!"),new Error("Database not available. Please check Firebase configuration.")},Rv=async(e,t)=>{if(qe()){const n=dt();if(!n.teachers||!n.teachers[e])throw new Error("Teacher not found");return n.teachers[e].classes=(n.teachers[e].classes||[]).filter(r=>r!==t),delete n.classes[t],delete n.assignments[t],Object.keys(n.students).forEach(r=>{n.students[r].classCode===t&&delete n.students[r]}),_s(n),!0}return!1},Lv=()=>{const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="";for(let n=0;n<6;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},_v=({onLogin:e,onBack:t})=>{const[n,r]=I.useState("login"),[i,o]=I.useState(""),[l,c]=I.useState(""),[p,h]=I.useState(""),[S,w]=I.useState(""),[x,j]=I.useState(""),[C,A]=I.useState(!1),L=async m=>{if(m.preventDefault(),j(""),!l.trim()){j("Please enter your email");return}if(!p){j("Please enter your password");return}A(!0);try{const k=await Av(l,p);e(k)}catch(k){j(k.message||"Login failed. Please try again.")}A(!1)},g=async m=>{if(m.preventDefault(),j(""),!i.trim()){j("Please enter your name");return}if(!l.trim()){j("Please enter your email");return}if(!p){j("Please enter a password");return}if(p.length<4){j("Password must be at least 4 characters");return}if(p!==S){j("Passwords do not match");return}A(!0);try{const k=await Pv(i,l,p);e(k)}catch(k){j(k.message||"Registration failed. Please try again.")}A(!1)};return s.jsx("div",{className:"login-container",children:s.jsxs("div",{className:"login-card",children:[s.jsxs("div",{className:"login-header",children:[s.jsx("h1",{children:"Teacher Portal"}),s.jsx("p",{children:"Manage your classes and students"})]}),s.jsxs("div",{className:"login-tabs",children:[s.jsx("button",{className:`tab-btn ${n==="login"?"active":""}`,onClick:()=>{r("login"),j("")},children:"Sign In"}),s.jsx("button",{className:`tab-btn ${n==="register"?"active":""}`,onClick:()=>{r("register"),j("")},children:"Create Account"})]}),n==="login"?s.jsxs("form",{onSubmit:L,className:"login-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"email",children:"Email"}),s.jsx("input",{type:"email",id:"email",placeholder:"teacher@school.edu",value:l,onChange:m=>c(m.target.value),disabled:C})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",placeholder:"Enter your password",value:p,onChange:m=>h(m.target.value),disabled:C})]}),x&&s.jsx("div",{className:"error-message",children:x}),s.jsx("button",{type:"submit",className:"btn-primary",disabled:C,children:C?"Signing in...":"Sign In"})]}):s.jsxs("form",{onSubmit:g,className:"login-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"name",children:"Your Name"}),s.jsx("input",{type:"text",id:"name",placeholder:"Ms. Smith",value:i,onChange:m=>o(m.target.value),disabled:C})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"regEmail",children:"Email"}),s.jsx("input",{type:"email",id:"regEmail",placeholder:"teacher@school.edu",value:l,onChange:m=>c(m.target.value),disabled:C})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"regPassword",children:"Password"}),s.jsx("input",{type:"password",id:"regPassword",placeholder:"Create a password",value:p,onChange:m=>h(m.target.value),disabled:C})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),s.jsx("input",{type:"password",id:"confirmPassword",placeholder:"Confirm your password",value:S,onChange:m=>w(m.target.value),disabled:C})]}),x&&s.jsx("div",{className:"error-message",children:x}),s.jsx("button",{type:"submit",className:"btn-primary",disabled:C,children:C?"Creating Account...":"Create Account"})]}),s.jsx("div",{className:"login-footer",children:s.jsx("button",{className:"btn-link",onClick:t,children:"Back to Student Login"})})]})})},Ov=({teacher:e,onSelectClass:t,onLogout:n})=>{Bc();const[r,i]=I.useState([]),[o,l]=I.useState(!0),[c,p]=I.useState(!1),[h,S]=I.useState(""),[w,x]=I.useState(!1),[j,C]=I.useState(""),[A,L]=I.useState(!1);I.useEffect(()=>{g()},[e.id]);const g=async()=>{l(!0);try{const _=await Iv(e.id);i(_)}catch(_){console.error("Error loading classes:",_)}l(!1)},m=async _=>{if(_.preventDefault(),C(""),!h.trim()){C("Please enter a class name");return}x(!0);try{const M=await Dv(e.id,h.trim());i([...r,M]),S(""),p(!1)}catch(M){C(M.message||"Failed to create class")}x(!1)},k=async(_,M)=>{if(window.confirm(`Are you sure you want to delete "${M}"? This will remove all student data and cannot be undone.`))try{await Rv(e.id,_),i(r.filter(b=>b.classCode!==_))}catch(b){alert("Failed to delete class: "+b.message)}},D=_=>{navigator.clipboard.writeText(_)};return s.jsxs("div",{className:"teacher-home",children:[s.jsxs("header",{className:"th-header",children:[s.jsxs("div",{className:"th-title",children:[s.jsx("h1",{children:"Teacher Dashboard"}),s.jsxs("p",{children:["Welcome back, ",e.name]})]}),s.jsxs("div",{className:"th-actions",children:[s.jsx("button",{className:"theme-btn nav-btn",onClick:()=>L(!0),children:"Theme"}),s.jsx("button",{className:"logout-btn",onClick:n,children:"Logout"})]})]}),s.jsxs("div",{className:"th-content",children:[s.jsxs("div",{className:"th-section-header",children:[s.jsx("h2",{children:"Your Classes"}),s.jsx("button",{className:"btn-primary",onClick:()=>p(!0),children:"+ Create New Class"})]}),o?s.jsx("div",{className:"loading-message",children:"Loading classes..."}):r.length===0?s.jsxs("div",{className:"no-classes",children:[s.jsx("div",{className:"no-classes-icon",children:"[ CLASSES ]"}),s.jsx("h3",{children:"No Classes Yet"}),s.jsx("p",{children:"Create your first class to get started. Students will use the class code to join."}),s.jsx("button",{className:"btn-primary",onClick:()=>p(!0),children:"Create Your First Class"})]}):s.jsx("div",{className:"classes-grid",children:r.map(_=>s.jsxs("div",{className:"class-card",children:[s.jsxs("div",{className:"class-card-header",children:[s.jsx("h3",{children:_.name}),s.jsx("button",{className:"delete-btn",onClick:M=>{M.stopPropagation(),k(_.classCode,_.name)},title:"Delete class",children:"×"})]}),s.jsxs("div",{className:"class-code-section",children:[s.jsx("span",{className:"class-code-label",children:"Class Code:"}),s.jsxs("div",{className:"class-code-display",children:[s.jsx("span",{className:"code",children:_.classCode}),s.jsx("button",{className:"copy-btn",onClick:M=>{M.stopPropagation(),D(_.classCode)},title:"Copy code",children:"Copy"})]})]}),s.jsx("p",{className:"class-hint",children:"Share this code with students to join"}),s.jsx("button",{className:"btn-primary open-btn",onClick:()=>t(_.classCode),children:"Open Dashboard"})]},_.classCode))})]}),c&&s.jsx("div",{className:"modal-overlay",onClick:()=>p(!1),children:s.jsxs("div",{className:"modal-content",onClick:_=>_.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Create New Class"}),s.jsx("button",{className:"close-btn",onClick:()=>p(!1),children:"×"})]}),s.jsxs("form",{onSubmit:m,children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"className",children:"Class Name"}),s.jsx("input",{type:"text",id:"className",placeholder:"e.g., Period 3 Cybersecurity",value:h,onChange:_=>S(_.target.value),disabled:w,autoFocus:!0})]}),j&&s.jsx("div",{className:"error-message",children:j}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>p(!1),disabled:w,children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn-primary",disabled:w,children:w?"Creating...":"Create Class"})]})]})]})}),A&&s.jsx(Hc,{onClose:()=>L(!1)})]})},Mv=({category:e,completedChallenges:t,onSelectChallenge:n})=>{const r={cryptography:"Cryptography",network:"Network Security",password:"Password Security",web:"Web Security",social:"Social Engineering"},i=As[e]||[];return s.jsxs("div",{children:[s.jsxs("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:[r[e]," Challenges"]}),s.jsxs("div",{className:"learning-objectives",children:[s.jsx("h3",{children:"Learning Objectives"}),s.jsx("ul",{children:(F0[e]||[]).map((o,l)=>s.jsx("li",{children:o},l))})]}),s.jsx("div",{className:"challenge-list",children:i.map(o=>{const l=t.includes(o.id);return s.jsxs("div",{className:`challenge-item ${l?"completed":""}`,onClick:()=>n(o.id),children:[s.jsxs("div",{className:"challenge-info",children:[s.jsx("h3",{children:o.title}),s.jsxs("p",{style:{color:"#b0b0b0",margin:"0.5rem 0"},children:[o.description.substring(0,120),"..."]}),s.jsxs("div",{className:"challenge-meta",children:[s.jsx("span",{className:`difficulty ${o.difficulty}`,children:o.difficulty}),s.jsxs("span",{className:"points",children:[o.points," points"]})]})]}),s.jsx("div",{className:"challenge-status",children:l?"✅":"🔒"})]},o.id)})})]})},Fv=({challengeId:e,onComplete:t,onBack:n,isCompleted:r,onSubmit:i})=>{const[o,l]=I.useState(""),[c,p]=I.useState(!1),[h,S]=I.useState(null),[w,x]=I.useState(r),[j,C]=I.useState(null),A=M0(e);if(!A)return s.jsx("div",{children:"Challenge not found"});const L=()=>{var _,M;const m=o.trim().toUpperCase(),D=[(_=A.answer)==null?void 0:_.toUpperCase(),(M=A.flag)==null?void 0:M.toUpperCase()].filter(Boolean).some(b=>m===b||m.includes(b));i&&i({exerciseId:e,answer:o,isCorrect:D,exerciseType:"challenge",exerciseTitle:A.title}),D?(S({type:"success",message:"Correct! Well done!"}),x(!0),t(e,A.points)):S({type:"error",message:"Incorrect. Try again or check the hints!"})},g=m=>{C(j===m?null:m)};return s.jsxs("div",{className:"challenge-detail",children:[s.jsxs("div",{className:"challenge-header",children:[s.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:s.jsxs("div",{children:[s.jsx("h2",{children:A.title}),s.jsxs("div",{className:"challenge-meta",style:{marginTop:"1rem"},children:[s.jsx("span",{className:`difficulty ${A.difficulty}`,children:A.difficulty}),s.jsxs("span",{className:"points",children:[A.points," points"]}),r&&s.jsx("span",{style:{color:"#4caf50",fontWeight:"bold"},children:"✅ Completed"})]})]})}),s.jsxs("div",{className:"learning-objective",children:[s.jsx("strong",{children:"Learning Objective:"})," ",A.learningObjective]}),s.jsx("p",{style:{marginTop:"1rem",lineHeight:"1.6"},children:A.description})]}),A.vocabularyTerms&&A.vocabularyTerms.length>0&&s.jsxs("div",{className:"vocabulary-section",children:[s.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Key Vocabulary"}),s.jsx("div",{className:"vocabulary-tags",children:A.vocabularyTerms.map(m=>{const k=fr[m];return k?s.jsx("div",{className:"vocab-tag",onClick:()=>g(m),style:{borderColor:j===m?"#00ff88":"transparent"},children:k.term},m):null})}),j&&fr[j]&&s.jsxs("div",{style:{background:"rgba(0, 255, 136, 0.1)",padding:"1rem",borderRadius:"5px",marginTop:"1rem",borderLeft:"4px solid #00ff88"},children:[s.jsx("strong",{style:{color:"#00ff88"},children:fr[j].term}),s.jsx("p",{style:{marginTop:"0.5rem"},children:fr[j].definition})]})]}),s.jsxs("div",{children:[s.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Challenge"}),s.jsx("div",{className:"challenge-prompt",children:A.prompt})]}),A.hints&&A.hints.length>0&&s.jsxs("div",{className:"hints-section",children:[s.jsx("button",{className:"hints-toggle",onClick:()=>p(!c),children:c?"🔽 Hide Hints":"💡 Show Hints"}),c&&s.jsx("ul",{className:"hints-list",children:A.hints.map((m,k)=>s.jsxs("li",{className:"hint-item",children:["Hint ",k+1,": ",m]},k))})]}),!r&&s.jsxs("div",{className:"answer-section",children:[s.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Submit Your Answer"}),s.jsx("input",{type:"text",className:"answer-input",placeholder:"Enter your answer or flag here...",value:o,onChange:m=>l(m.target.value),onKeyPress:m=>m.key==="Enter"&&L()}),s.jsx("button",{className:"submit-btn",onClick:L,disabled:!o.trim(),children:"Submit Answer"})]}),h&&s.jsx("div",{className:`feedback ${h.type}`,children:h.message}),w&&A.explanation&&s.jsxs("div",{className:"explanation",children:[s.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Explanation"}),s.jsx("p",{children:A.explanation})]}),s.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Challenges"})]})},zv=()=>{const[e,t]=I.useState("all"),n=["all","Cryptography","Network Security","Password Security","Web Security","Social Engineering","General"],r=Object.values(fr).filter(i=>e==="all"?!0:i.category===e);return s.jsxs("div",{className:"vocabulary-page",children:[s.jsx("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Cybersecurity Vocabulary"}),s.jsx("p",{style:{marginBottom:"2rem",color:"#b0b0b0"},children:"Build your cybersecurity knowledge by learning these key terms and concepts."}),s.jsx("div",{className:"vocab-categories",children:n.map(i=>s.jsx("button",{className:`vocab-category-btn ${e===i?"active":""}`,onClick:()=>t(i),children:i==="all"?"All Terms":i},i))}),s.jsxs("div",{style:{marginTop:"1rem",color:"#b0b0b0"},children:["Showing ",r.length," term",r.length!==1?"s":""]}),s.jsx("div",{className:"vocab-list",children:r.map((i,o)=>s.jsxs("div",{className:"vocab-card",children:[s.jsx("span",{className:"vocab-category",children:i.category}),s.jsx("h3",{children:i.term}),s.jsx("p",{style:{color:"#e0e0e0",marginTop:"0.5rem"},children:i.definition})]},o))}),r.length===0&&s.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"#b0b0b0"},children:"No vocabulary terms found for this category."})]})},zm={TCP:{name:"TCP",color:"#4fc3f7",port:null},UDP:{name:"UDP",color:"#81c784",port:null},HTTP:{name:"HTTP",color:"#64b5f6",port:80},HTTPS:{name:"HTTPS",color:"#7986cb",port:443},SSH:{name:"SSH",color:"#ffb74d",port:22},DNS:{name:"DNS",color:"#ba68c8",port:53},FTP:{name:"FTP",color:"#f06292",port:21},SMTP:{name:"SMTP",color:"#4db6ac",port:25},ICMP:{name:"ICMP",color:"#90a4ae",port:null}},Mt={SYN:"SYN",ACK:"ACK",PSH:"PSH","SYN-ACK":"SYN-ACK"},np=[{prefix:"192.168.1.",range:[1,254]},{prefix:"10.0.0.",range:[1,254]},{prefix:"172.16.0.",range:[1,254]}],sp=["203.0.113.","198.51.100.","185.220.101.","45.33.32.","104.21.35.","8.8.8."],rp=[80,443,53,22,21,25,3389,8080,3306,5432],Sa={normal:["GET /index.html HTTP/1.1","GET /api/users HTTP/1.1","POST /api/login HTTP/1.1","GET /images/logo.png HTTP/1.1","GET /css/styles.css HTTP/1.1","GET /js/app.js HTTP/1.1","GET /api/products HTTP/1.1","POST /api/cart HTTP/1.1","GET /favicon.ico HTTP/1.1","GET /api/status HTTP/1.1"],sqlInjection:["GET /api/users?id=1' OR '1'='1 HTTP/1.1","POST /login?user=admin'-- HTTP/1.1","GET /search?q='; DROP TABLE users;-- HTTP/1.1","GET /api/product?id=1 UNION SELECT * FROM passwords HTTP/1.1","POST /api/auth?username=admin' OR 1=1-- HTTP/1.1","GET /page?id=1; SELECT * FROM users HTTP/1.1","GET /api/data?filter=' OR ''=' HTTP/1.1"]},Ca={normal:["A google.com","A microsoft.com","A github.com","AAAA cloudflare.com","MX company.com","A cdn.example.com","A api.service.com","A www.example.org"],tunneling:["TXT aGVsbG8gd29ybGQ.evil.com","TXT ZGF0YWV4ZmlsdHJhdGlvbg.malware.net","TXT c2VjcmV0LWRhdGE.suspicious.io","A cmd-exec-001.c2server.com","TXT YmFzZTY0ZW5jb2RlZA.tunnel.net"]},ip={normal:["SSH-2.0-OpenSSH_8.4 connection established","Key exchange: ECDH SHA256","User authentication successful","Session opened for user admin"]},ap={tcp:{min:40,max:1500},udp:{min:28,max:65535},http:{min:200,max:8e3},dns:{min:28,max:512},ssh:{min:40,max:2e3},icmp:{min:28,max:1500}},Os=(e={})=>({id:Math.random().toString(36).substr(2,9),timestamp:new Date().toISOString(),sourceIP:"0.0.0.0",destIP:"0.0.0.0",sourcePort:0,destPort:0,protocol:"TCP",length:0,flags:"",info:"",payload:"",isMalicious:!1,attackType:null,flaggedByUser:!1,...e}),Wl=()=>{const e=np[Math.floor(Math.random()*np.length)],t=Math.floor(Math.random()*(e.range[1]-e.range[0]))+e.range[0];return e.prefix+t},Uv=()=>{const e=sp[Math.floor(Math.random()*sp.length)],t=Math.floor(Math.random()*254)+1;return e+t},St=(e=!0)=>e?rp[Math.floor(Math.random()*rp.length)]:Math.floor(Math.random()*65535)+1,Kr=(e="tcp")=>{const t=ap[e.toLowerCase()]||ap.tcp;return Math.floor(Math.random()*(t.max-t.min))+t.min};let op=0;const Ms=()=>(op++,`pkt-${Date.now()}-${op}`),Hv=(e=["HTTP","HTTPS","DNS","TCP"])=>{const t=e[Math.floor(Math.random()*e.length)],n=Wl(),r=Math.random()>.3?Uv():Wl();let i,o,l,c;switch(t){case"HTTP":i=80,o=St(!1),l=Sa.normal[Math.floor(Math.random()*Sa.normal.length)],c=Mt.ACK;break;case"HTTPS":i=443,o=St(!1),l="TLS Application Data",c=Mt.ACK;break;case"DNS":i=53,o=St(!1),l=Ca.normal[Math.floor(Math.random()*Ca.normal.length)],c="";break;case"SSH":i=22,o=St(!1),l=ip.normal[Math.floor(Math.random()*ip.normal.length)],c=Mt.ACK;break;default:i=St(!0),o=St(!1),l="TCP segment",c=[Mt.ACK,Mt.PSH,Mt["SYN-ACK"]][Math.floor(Math.random()*3)]}return Os({id:Ms(),timestamp:new Date().toISOString(),sourceIP:n,destIP:r,sourcePort:o,destPort:i,protocol:t,length:Kr(t.toLowerCase()),flags:c,info:l,payload:"",isMalicious:!1,attackType:null})},Bv=(e,t,n)=>Os({id:Ms(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:n,protocol:"TCP",length:Kr("tcp"),flags:Mt.SYN,info:`SYN scan to port ${n}`,payload:"",isMalicious:!0,attackType:de.PORT_SCAN}),Wv=(e,t,n)=>{const r=[`Authentication failed for ${n}`,`Invalid password for ${n}`,`Failed password for ${n} from ${e}`],i=r[Math.floor(Math.random()*r.length)];return Os({id:Ms(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:22,protocol:"SSH",length:Kr("ssh"),flags:Mt.ACK,info:i,payload:`SSH-2.0-OpenSSH_7.9 [AUTH FAIL: ${n}]`,isMalicious:!0,attackType:de.BRUTE_FORCE_SSH})},Yv=(e,t)=>{const n=Sa.sqlInjection[Math.floor(Math.random()*Sa.sqlInjection.length)];return Os({id:Ms(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:80,protocol:"HTTP",length:Kr("http"),flags:Mt.PSH,info:n,payload:n,isMalicious:!0,attackType:de.SQL_INJECTION})},Vv=(e,t,n=5e3,r=15e3)=>{const i=Math.floor(Math.random()*(r-n))+n;return Os({id:Ms(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:443,protocol:"HTTPS",length:i,flags:Mt.PSH,info:`Large outbound transfer (${Math.round(i/1024)}KB)`,payload:`[Encrypted data: ${i} bytes]`,isMalicious:!0,attackType:de.DATA_EXFILTRATION})},$v=(e,t)=>{const n=Ca.tunneling[Math.floor(Math.random()*Ca.tunneling.length)];return Os({id:Ms(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:53,protocol:"DNS",length:Kr("dns"),flags:"",info:n,payload:n,isMalicious:!0,attackType:de.DNS_TUNNELING})};class Gv{constructor(t){this.scenario=t,this.isRunning=!1,this.attackStarted=!1,this.attackPortIndex=0,this.attackUsernameIndex=0,this.elapsedTime=0,this.targetIP=Wl(),this.blockedIPs=new Set}start(){this.isRunning=!0,this.attackStarted=!1,this.elapsedTime=0}stop(){this.isRunning=!1}blockIP(t){this.blockedIPs.add(t)}unblockIP(t){this.blockedIPs.delete(t)}isIPBlocked(t){return this.blockedIPs.has(t)}generatePackets(t){if(!this.isRunning)return[];this.elapsedTime+=t;const n=[],{backgroundTraffic:r,attackConfig:i}=this.scenario,o=Math.round(r.packetsPerSecond*t);for(let l=0;l<o;l++)n.push(Hv(r.protocols));if(this.elapsedTime>=i.startDelay&&(this.attackStarted=!0),this.attackStarted&&!this.isIPBlocked(i.attackerIP)){const l=Math.round(i.packetsPerSecond*t);for(let c=0;c<l;c++){const p=this.generateAttackPacket();p&&n.push(p)}}return n}generateAttackPacket(){const{attackType:t,attackConfig:n}=this.scenario;switch(t){case de.PORT_SCAN:{const r=n.targetPorts[this.attackPortIndex%n.targetPorts.length];return this.attackPortIndex++,Bv(n.attackerIP,this.targetIP,r)}case de.BRUTE_FORCE_SSH:{const r=n.usernames[this.attackUsernameIndex%n.usernames.length];return this.attackUsernameIndex++,Wv(n.attackerIP,this.targetIP,r)}case de.SQL_INJECTION:return Yv(n.attackerIP,this.targetIP);case de.DATA_EXFILTRATION:return Vv(n.sourceIP,n.attackerIP,n.minPacketSize,n.maxPacketSize);case de.DNS_TUNNELING:return $v(n.sourceIP||this.targetIP,"8.8.8.8");default:return null}}getAttackerIP(){return this.scenario.attackConfig.attackerIP}}const qv=(e,t=3e4)=>{const n=[];for(const[r,i]of Object.entries(z0))if(i.check){const o=i.check(e,t);o.detected&&n.push({type:r,attackerIP:o.attackerIP,evidence:o.evidence,timestamp:new Date().toISOString(),...km[r]})}return n},Xv=(e,t)=>{let n=0;const r=[],i=e.flaggedPackets.filter(h=>h.isMalicious),o=e.flaggedPackets.filter(h=>!h.isMalicious);if(i.length>0){const h=i.length*5;n+=h,r.push({action:"Correctly flagged malicious packets",count:i.length,points:h})}if(o.length>0){const h=o.length*2;n-=h,r.push({action:"False positive flags (penalty)",count:o.length,points:-h})}e.identifiedAttackType===t.attackType&&(n+=15,r.push({action:"Correctly identified attack type",count:1,points:15}));const l=t.attackConfig.attackerIP,c=e.blockedIPs.includes(l),p=e.blockedIPs.filter(h=>h!==l);if(c&&(n+=10,r.push({action:"Blocked attacker IP",count:1,points:10})),p.length>0){const h=p.length*5;n-=h,r.push({action:"Incorrectly blocked innocent IP (penalty)",count:p.length,points:-h})}return e.completedUnderTimeLimit&&n>0&&(n+=5,r.push({action:"Completed under time limit",count:1,points:5})),{total:Math.max(0,n),maxPossible:t.points,breakdown:r,passed:n>=t.points*.6}},Kv=(e,t,n)=>{const r=t.successCriteria,i={allMet:!0,details:[]};if(r.mustBlockAttacker){const o=e.blockedIPs.includes(t.attackConfig.attackerIP);i.details.push({criterion:"Block attacker IP",met:o,description:o?"Attacker IP blocked":"Attacker IP not blocked"}),o||(i.allMet=!1)}if(r.mustIdentifyAttackType){const o=e.identifiedAttackType===t.attackType;i.details.push({criterion:"Identify attack type",met:o,description:o?"Attack type correctly identified":"Attack type not identified"}),o||(i.allMet=!1)}if(r.minMaliciousPacketsFlagged){const o=e.flaggedPackets.filter(c=>c.isMalicious).length,l=o>=r.minMaliciousPacketsFlagged;i.details.push({criterion:`Flag at least ${r.minMaliciousPacketsFlagged} malicious packets`,met:l,description:`Flagged ${o} malicious packets`}),l||(i.allMet=!1)}return i},lp=e=>{switch(e){case"critical":return"#f44336";case"high":return"#ff9800";case"medium":return"#ffeb3b";case"low":return"#4caf50";default:return"#90a4ae"}},Yl=e=>{var t;return((t=km[e])==null?void 0:t.name)||e},Jv=({scenarios:e,completedScenarios:t,onSelectScenario:n})=>{const r=H0(),i=c=>t.includes(c),o=c=>c.toLowerCase(),l=()=>e.filter(c=>t.includes(c.id)).reduce((c,p)=>c+p.points,0);return s.jsxs("div",{className:"scenario-selector",children:[s.jsxs("div",{className:"scenario-stats",children:[s.jsxs("div",{className:"scenario-stat",children:[s.jsx("span",{className:"stat-value",children:t.length}),s.jsx("span",{className:"stat-label",children:"Completed"})]}),s.jsxs("div",{className:"scenario-stat",children:[s.jsx("span",{className:"stat-value",children:r.total}),s.jsx("span",{className:"stat-label",children:"Total Scenarios"})]}),s.jsxs("div",{className:"scenario-stat",children:[s.jsx("span",{className:"stat-value",children:l()}),s.jsx("span",{className:"stat-label",children:"Points Earned"})]}),s.jsxs("div",{className:"scenario-stat",children:[s.jsx("span",{className:"stat-value",children:r.totalPoints}),s.jsx("span",{className:"stat-label",children:"Total Points"})]})]}),s.jsx("div",{className:"scenario-grid",children:e.map(c=>{const p=i(c.id);return s.jsxs("div",{className:`scenario-card ${p?"completed":""}`,onClick:()=>n(c),children:[p&&s.jsxs("div",{className:"completed-badge",children:[s.jsx("span",{className:"checkmark",children:"✓"}),"Completed"]}),s.jsxs("div",{className:"scenario-header",children:[s.jsx("h3",{children:c.name}),s.jsx("span",{className:`difficulty ${o(c.difficulty)}`,children:c.difficulty})]}),s.jsx("p",{className:"scenario-description",children:c.description}),s.jsxs("div",{className:"scenario-meta",children:[s.jsxs("div",{className:"meta-item",children:[s.jsx("span",{className:"meta-icon",children:"🎯"}),s.jsxs("span",{children:[c.points," points"]})]}),s.jsxs("div",{className:"meta-item",children:[s.jsx("span",{className:"meta-icon",children:"⏱"}),s.jsxs("span",{children:[c.duration,"s"]})]})]}),s.jsxs("div",{className:"scenario-objective",children:[s.jsx("strong",{children:"Learning Objective:"}),s.jsx("p",{children:c.learningObjective})]}),s.jsx("button",{className:"btn-start",children:p?"Play Again":"Start Scenario"})]},c.id)})})]})},Qv=({packets:e,selectedPacket:t,flaggedPackets:n,onSelectPacket:r,onFlagPacket:i})=>{const o=I.useRef(null),l=I.useRef(!0);I.useEffect(()=>{o.current&&l.current&&(o.current.scrollTop=o.current.scrollHeight)},[e]);const c=()=>{if(o.current){const{scrollTop:j,scrollHeight:C,clientHeight:A}=o.current;l.current=j+A>=C-50}},p=j=>new Date(j).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:2}),h=j=>{var C;return((C=zm[j])==null?void 0:C.color)||"#90a4ae"},S=j=>n.some(C=>C.id===j.id),w=j=>{r(j)},x=(j,C)=>{j.stopPropagation(),i(C)};return s.jsxs("div",{className:"packet-list-container",children:[s.jsxs("div",{className:"packet-list-header",children:[s.jsx("h3",{children:"Live Traffic"}),s.jsxs("span",{className:"packet-count",children:[e.length," packets"]})]}),s.jsxs("div",{className:"packet-table-header",children:[s.jsx("div",{className:"col-flag"}),s.jsx("div",{className:"col-time",children:"Time"}),s.jsx("div",{className:"col-src",children:"Source"}),s.jsx("div",{className:"col-dst",children:"Destination"}),s.jsx("div",{className:"col-proto",children:"Protocol"}),s.jsx("div",{className:"col-len",children:"Length"}),s.jsx("div",{className:"col-info",children:"Info"})]}),s.jsxs("div",{className:"packet-list",ref:o,onScroll:c,children:[e.map(j=>s.jsxs("div",{className:`packet-row
              ${(t==null?void 0:t.id)===j.id?"selected":""}
              ${j.isMalicious?"malicious":""}
              ${S(j)?"flagged":""}
            `,onClick:()=>w(j),children:[s.jsx("div",{className:"col-flag",children:s.jsx("button",{className:`flag-btn ${S(j)?"flagged":""}`,onClick:C=>x(C,j),title:S(j)?"Unflag packet":"Flag as suspicious",children:S(j)?"⚑":"⚐"})}),s.jsx("div",{className:"col-time",children:p(j.timestamp)}),s.jsxs("div",{className:"col-src",children:[s.jsx("span",{className:"ip",children:j.sourceIP}),s.jsxs("span",{className:"port",children:[":",j.sourcePort]})]}),s.jsxs("div",{className:"col-dst",children:[s.jsx("span",{className:"ip",children:j.destIP}),s.jsxs("span",{className:"port",children:[":",j.destPort]})]}),s.jsx("div",{className:"col-proto",children:s.jsx("span",{className:"protocol-badge",style:{backgroundColor:h(j.protocol)},children:j.protocol})}),s.jsx("div",{className:"col-len",children:j.length}),s.jsx("div",{className:"col-info",title:j.info,children:j.info})]},j.id)),e.length===0&&s.jsx("div",{className:"packet-list-empty",children:"Waiting for network traffic..."})]})]})},Zv=({packet:e,onFlagPacket:t})=>{if(!e)return s.jsx("div",{className:"packet-detail",children:s.jsx("div",{className:"packet-detail-empty",children:"Select a packet to view details"})});const n=i=>new Date(i).toLocaleString("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,hour12:!1}),r=i=>{var o;return((o=zm[i])==null?void 0:o.color)||"#90a4ae"};return s.jsxs("div",{className:"packet-detail",children:[s.jsxs("div",{className:"packet-detail-header",children:[s.jsx("h4",{children:"Packet Details"}),s.jsx("div",{className:"packet-detail-actions",children:s.jsx("button",{className:`flag-btn-lg ${e.flaggedByUser?"flagged":""}`,onClick:()=>t(e),children:e.flaggedByUser?"⚑ Flagged":"⚐ Flag as Suspicious"})})]}),s.jsxs("div",{className:"packet-detail-content",children:[s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"General"}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Packet ID"}),s.jsx("span",{className:"detail-value mono",children:e.id})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Timestamp"}),s.jsx("span",{className:"detail-value",children:n(e.timestamp)})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Protocol"}),s.jsx("span",{className:"detail-value protocol-badge",style:{backgroundColor:r(e.protocol)},children:e.protocol})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Length"}),s.jsxs("span",{className:"detail-value",children:[e.length," bytes"]})]})]})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"Source"}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"IP Address"}),s.jsx("span",{className:"detail-value mono",children:e.sourceIP})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Port"}),s.jsx("span",{className:"detail-value",children:e.sourcePort})]})]})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"Destination"}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"IP Address"}),s.jsx("span",{className:"detail-value mono",children:e.destIP})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Port"}),s.jsx("span",{className:"detail-value",children:e.destPort})]})]})]}),e.flags&&s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"TCP Flags"}),s.jsx("div",{className:"detail-item",children:s.jsx("span",{className:"detail-value mono",children:e.flags})})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"Info"}),s.jsx("div",{className:"detail-item full-width",children:s.jsx("span",{className:"detail-value info-box mono",children:e.info})})]}),e.payload&&s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"Payload"}),s.jsx("div",{className:"detail-item full-width",children:s.jsx("pre",{className:"payload-box",children:e.payload})})]}),e.isMalicious&&s.jsxs("div",{className:"detail-section malicious-warning",children:[s.jsx("h5",{children:"Warning"}),s.jsxs("div",{className:"warning-content",children:[s.jsx("span",{className:"warning-icon",children:"⚠"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Potentially Malicious Traffic"}),e.attackType&&s.jsxs("p",{children:["Attack Type: ",Yl(e.attackType)]})]})]})]})]})]})},ex=({alerts:e,onBlockIP:t})=>{const n=r=>new Date(r).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return s.jsxs("div",{className:"alert-panel",children:[s.jsxs("div",{className:"alert-panel-header",children:[s.jsx("h4",{children:"Threat Alerts"}),e.length>0&&s.jsx("span",{className:"alert-count",children:e.length})]}),s.jsx("div",{className:"alert-list",children:e.length===0?s.jsxs("div",{className:"alert-empty",children:[s.jsx("span",{className:"alert-empty-icon",children:"🛡"}),s.jsx("p",{children:"No threats detected yet"}),s.jsx("p",{className:"alert-empty-hint",children:"Monitoring network traffic..."})]}):e.map((r,i)=>s.jsxs("div",{className:"alert-item",style:{borderLeftColor:lp(r.severity)},children:[s.jsxs("div",{className:"alert-header",children:[s.jsx("span",{className:"alert-severity",style:{backgroundColor:lp(r.severity)},children:r.severity.toUpperCase()}),s.jsx("span",{className:"alert-time",children:n(r.timestamp)})]}),s.jsx("div",{className:"alert-title",children:r.name}),s.jsx("div",{className:"alert-description",children:r.description}),s.jsxs("div",{className:"alert-details",children:[s.jsxs("div",{className:"alert-evidence",children:[s.jsx("strong",{children:"Evidence:"})," ",r.evidence]}),s.jsxs("div",{className:"alert-ip",children:[s.jsx("strong",{children:"Source IP:"}),s.jsx("span",{className:"mono",children:r.attackerIP})]})]}),s.jsxs("div",{className:"alert-indicators",children:[s.jsx("strong",{children:"Indicators:"}),s.jsx("ul",{children:r.indicators.slice(0,2).map((o,l)=>s.jsx("li",{children:o},l))})]}),s.jsx("div",{className:"alert-actions",children:s.jsxs("button",{className:"btn-block",onClick:()=>t(r.attackerIP),children:["Block ",r.attackerIP]})})]},`${r.type}-${r.attackerIP}-${i}`))})]})},tx=({blockedIPs:e,attackTypes:t,identifiedAttackType:n,onBlockIP:r,onUnblockIP:i,onIdentifyAttack:o,hints:l})=>{const[c,p]=I.useState(""),[h,S]=I.useState(!1),w=x=>{x.preventDefault();const j=c.trim();j&&/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(j)&&(r(j),p(""))};return s.jsxs("div",{className:"action-panel",children:[s.jsxs("div",{className:"action-section",children:[s.jsx("h4",{children:"Identify Attack Type"}),s.jsx("p",{className:"action-hint",children:"What type of attack is occurring?"}),s.jsx("div",{className:"attack-type-grid",children:t.map(x=>s.jsx("button",{className:`attack-type-btn ${n===x?"selected":""}`,onClick:()=>o(x),children:Yl(x)},x))}),n&&s.jsxs("div",{className:"selected-attack",children:["Selected: ",s.jsx("strong",{children:Yl(n)})]})]}),s.jsxs("div",{className:"action-section",children:[s.jsx("h4",{children:"Firewall Rules"}),s.jsxs("form",{onSubmit:w,className:"block-ip-form",children:[s.jsx("input",{type:"text",placeholder:"Enter IP to block (e.g., 192.168.1.100)",value:c,onChange:x=>p(x.target.value),className:"ip-input"}),s.jsx("button",{type:"submit",className:"btn-block-submit",children:"Block IP"})]}),s.jsxs("div",{className:"blocked-ips",children:[s.jsxs("h5",{children:["Blocked IPs (",e.length,")"]}),e.length===0?s.jsx("p",{className:"no-blocked",children:"No IPs blocked yet"}):s.jsx("ul",{className:"blocked-ip-list",children:e.map(x=>s.jsxs("li",{className:"blocked-ip-item",children:[s.jsx("span",{className:"mono",children:x}),s.jsx("button",{className:"btn-unblock",onClick:()=>i(x),title:"Unblock this IP",children:"×"})]},x))})]})]}),s.jsxs("div",{className:"action-section hints-section",children:[s.jsxs("button",{className:"hints-toggle",onClick:()=>S(!h),children:[h?"Hide Hints":"Show Hints"," 💡"]}),h&&l&&l.length>0&&s.jsx("div",{className:"hints-list",children:l.map((x,j)=>s.jsxs("div",{className:"hint-item",children:[s.jsx("span",{className:"hint-number",children:j+1}),s.jsx("span",{className:"hint-text",children:x})]},j))})]})]})},nx=({completedScenarios:e,onCompleteScenario:t,onBack:n})=>{const[r,i]=I.useState(null),[o,l]=I.useState(!1),[c,p]=I.useState(0),[h,S]=I.useState(!1),[w,x]=I.useState([]),[j,C]=I.useState(null),[A,L]=I.useState({total:0,perSecond:0,bytes:0}),[g,m]=I.useState(!1),[k,D]=I.useState(.5),[_,M]=I.useState([]),[b,y]=I.useState([]),[T,N]=I.useState(null),[P,E]=I.useState([]),[f,z]=I.useState(null),W=I.useRef(null),J=I.useRef(null),ne=I.useRef(Date.now()),F=I.useCallback(B=>{i(B),p(B.duration),x([]),M([]),y([]),N(null),E([]),C(null),z(null),S(!1),W.current=new Gv(B),W.current.start(),l(!0),ne.current=Date.now()},[]),V=I.useCallback(()=>{l(!1),W.current&&W.current.stop(),J.current&&clearInterval(J.current)},[]),G=I.useCallback(()=>{if(V(),S(!0),!r)return;const B={flaggedPackets:_,blockedIPs:b,identifiedAttackType:T,completedUnderTimeLimit:c>0},X=Xv(B,r),re=Kv(B,r);z({score:X,criteria:re,passed:X.passed&&re.allMet}),X.passed&&re.allMet&&t(r.id,X.total)},[r,_,b,T,c,w,V,t]);I.useEffect(()=>{if(!(!o||!W.current))return J.current=setInterval(()=>{if(g){ne.current=Date.now();return}const B=Date.now(),X=(B-ne.current)/1e3;ne.current=B;const re=X*k,xe=W.current.generatePackets(re);x(we=>[...we,...xe].slice(-200)),p(we=>{const ye=Math.max(0,we-X);return ye<=0&&G(),ye}),L(we=>({total:we.total+xe.length,perSecond:Math.round(xe.length/(X||.001)),bytes:we.bytes+xe.reduce((ye,Je)=>ye+Je.length,0)}))},400),()=>{J.current&&clearInterval(J.current)}},[o,g,k,G]),I.useEffect(()=>{if(!o||w.length<5)return;const B=qv(w,3e4);B.length>0&&E(X=>{const re=B.filter(xe=>!X.some(we=>we.type===xe.type&&we.attackerIP===xe.attackerIP));return[...X,...re]})},[w,o]);const Q=I.useCallback(B=>{M(X=>X.some(xe=>xe.id===B.id)?X.filter(xe=>xe.id!==B.id):[...X,B]),x(X=>X.map(re=>re.id===B.id?{...re,flaggedByUser:!re.flaggedByUser}:re))},[]),Z=I.useCallback(B=>{W.current&&W.current.blockIP(B),y(X=>X.includes(B)?X:[...X,B])},[]),H=I.useCallback(B=>{W.current&&W.current.unblockIP(B),y(X=>X.filter(re=>re!==B))},[]),K=I.useCallback(B=>{N(B)},[]),ee=I.useCallback(()=>{V(),i(null),x([]),z(null),S(!1)},[V]);return r?h&&f?s.jsxs("div",{className:"network-monitor",children:[s.jsxs("div",{className:"nm-header",children:[s.jsx("h2",{children:"Scenario Complete"}),s.jsx("h3",{children:r.name})]}),s.jsxs("div",{className:"nm-results",children:[s.jsxs("div",{className:`results-summary ${f.passed?"passed":"failed"}`,children:[s.jsx("div",{className:"result-icon",children:f.passed?"✓":"✗"}),s.jsx("h3",{children:f.passed?"Mission Accomplished!":"Mission Failed"}),s.jsxs("div",{className:"result-score",children:["Score: ",f.score.total," / ",f.score.maxPossible," points"]})]}),s.jsxs("div",{className:"results-breakdown",children:[s.jsx("h4",{children:"Score Breakdown"}),f.score.breakdown.map((B,X)=>s.jsxs("div",{className:`breakdown-item ${B.points>=0?"positive":"negative"}`,children:[s.jsx("span",{children:B.action}),s.jsxs("span",{className:"breakdown-count",children:["x",B.count]}),s.jsxs("span",{className:"breakdown-points",children:[B.points>=0?"+":"",B.points]})]},X))]}),s.jsxs("div",{className:"results-criteria",children:[s.jsx("h4",{children:"Success Criteria"}),f.criteria.details.map((B,X)=>s.jsxs("div",{className:`criteria-item ${B.met?"met":"not-met"}`,children:[s.jsx("span",{className:"criteria-icon",children:B.met?"✓":"✗"}),s.jsx("span",{children:B.criterion}),s.jsx("span",{className:"criteria-desc",children:B.description})]},X))]}),s.jsxs("div",{className:"results-actions",children:[s.jsx("button",{className:"btn-primary",onClick:()=>F(r),children:"Try Again"}),s.jsx("button",{className:"btn-secondary",onClick:ee,children:"Choose Another Scenario"})]})]})]}):s.jsxs("div",{className:"network-monitor",children:[s.jsxs("div",{className:"nm-header",children:[s.jsx("button",{className:"back-btn",onClick:ee,children:"← Back"}),s.jsxs("div",{className:"nm-title-section",children:[s.jsx("h2",{children:r.name}),s.jsx("span",{className:`difficulty ${r.difficulty}`,children:r.difficulty})]}),s.jsxs("div",{className:"nm-stats",children:[s.jsxs("div",{className:"stat",children:[s.jsx("span",{className:"stat-value",children:Math.ceil(c)}),s.jsx("span",{className:"stat-label",children:"Time Left"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("span",{className:"stat-value",children:A.total}),s.jsx("span",{className:"stat-label",children:"Packets"})]}),s.jsxs("div",{className:"stat",children:[s.jsxs("span",{className:"stat-value",children:[A.perSecond,"/s"]}),s.jsx("span",{className:"stat-label",children:"Rate"})]}),s.jsxs("div",{className:"stat",children:[s.jsxs("span",{className:"stat-value",children:[Math.round(A.bytes/1024),"KB"]}),s.jsx("span",{className:"stat-label",children:"Data"})]})]}),s.jsxs("div",{className:"nm-controls",children:[s.jsx("button",{className:`btn-pause ${g?"paused":""}`,onClick:()=>m(!g),title:g?"Resume packet capture":"Pause to analyze packets",children:g?"▶ Resume":"⏸ Pause"}),s.jsxs("div",{className:"speed-control",children:[s.jsx("label",{children:"Speed:"}),s.jsxs("select",{value:k,onChange:B=>D(parseFloat(B.target.value)),title:"Adjust packet speed for easier analysis",children:[s.jsx("option",{value:"0.25",children:"0.25x (Very Slow)"}),s.jsx("option",{value:"0.5",children:"0.5x (Slow - Recommended)"}),s.jsx("option",{value:"1",children:"1x (Normal)"}),s.jsx("option",{value:"2",children:"2x (Fast)"})]})]})]}),s.jsx("button",{className:"btn-complete",onClick:G,children:"Complete Mission"})]}),s.jsxs("div",{className:"nm-objective",children:[s.jsx("strong",{children:"Objective:"})," ",r.description]}),s.jsxs("div",{className:"nm-main-content",children:[s.jsx("div",{className:"nm-left-panel",children:s.jsx(Qv,{packets:w,selectedPacket:j,flaggedPackets:_,onSelectPacket:C,onFlagPacket:Q})}),s.jsxs("div",{className:"nm-right-panel",children:[s.jsx(ex,{alerts:P,onBlockIP:Z}),s.jsx(tx,{blockedIPs:b,attackTypes:Object.values(de),identifiedAttackType:T,onBlockIP:Z,onUnblockIP:H,onIdentifyAttack:K,hints:r.hints})]})]}),s.jsx("div",{className:"nm-bottom-panel",children:s.jsx(Zv,{packet:j,onFlagPacket:Q})})]}):s.jsxs("div",{className:"network-monitor",children:[s.jsxs("div",{className:"nm-header",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Dashboard"}),s.jsx("h2",{children:"Network Monitor"}),s.jsx("p",{className:"nm-subtitle",children:"Learn to detect and respond to cyber attacks in real-time"})]}),s.jsx(Jv,{scenarios:Nt,completedScenarios:e,onSelectScenario:F})]})},sx=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(3),[i,o]=I.useState("encrypt"),[l,c]=I.useState(""),p=(w,x,j=!0)=>{const C=j?x:26-x;return w.toUpperCase().split("").map(A=>{if(A>="A"&&A<="Z"){const L=(A.charCodeAt(0)-65+C)%26+65;return String.fromCharCode(L)}return A}).join("")},h=()=>{const w=p(e,parseInt(n),i==="encrypt");c(w)},S=()=>{let w=[];for(let x=1;x<=25;x++)w.push(`Shift ${x}: ${p(e,x,!1)}`);c(w.join(`
`))};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Caesar Cipher Tool"}),s.jsx("div",{className:"tool-description",children:"The Caesar cipher shifts each letter by a fixed number of positions in the alphabet."}),s.jsxs("div",{className:"tool-controls",children:[s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Mode:"}),s.jsxs("select",{value:i,onChange:w=>o(w.target.value),children:[s.jsx("option",{value:"encrypt",children:"Encrypt"}),s.jsx("option",{value:"decrypt",children:"Decrypt"})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Shift (1-25):"}),s.jsx("input",{type:"number",min:"1",max:"25",value:n,onChange:w=>r(w.target.value)})]})]}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Input Text:"}),s.jsx("textarea",{value:e,onChange:w=>t(w.target.value),placeholder:"Enter text to encrypt or decrypt...",rows:3})]}),s.jsxs("div",{className:"tool-buttons",children:[s.jsx("button",{className:"tool-btn primary",onClick:h,children:i==="encrypt"?"Encrypt":"Decrypt"}),s.jsx("button",{className:"tool-btn secondary",onClick:S,children:"Brute Force (Try All Shifts)"})]}),l&&s.jsxs("div",{className:"tool-output",children:[s.jsx("label",{children:"Output:"}),s.jsx("pre",{children:l})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"Alphabet Reference"}),s.jsxs("div",{className:"alphabet-row",children:[s.jsx("div",{children:"Plain:"}),s.jsx("div",{className:"alphabet",children:"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"})]}),s.jsxs("div",{className:"alphabet-row",children:[s.jsxs("div",{children:["Shift ",n,":"]}),s.jsx("div",{className:"alphabet",children:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(w=>p(w,parseInt(n),!0)).join(" ")})]})]})]})},rx=()=>{const[e,t]=I.useState(""),[n,r]=I.useState({}),i=async p=>{if(window.crypto&&window.crypto.subtle){const S=new TextEncoder().encode(p);try{const w=await o(p),x=await crypto.subtle.digest("SHA-1",S),j=await crypto.subtle.digest("SHA-256",S);return{md5:w,sha1:Array.from(new Uint8Array(x)).map(C=>C.toString(16).padStart(2,"0")).join(""),sha256:Array.from(new Uint8Array(j)).map(C=>C.toString(16).padStart(2,"0")).join("")}}catch{return l(p)}}return l(p)},o=p=>{let h=0;for(let w=0;w<p.length;w++){const x=p.charCodeAt(w);h=(h<<5)-h+x,h=h&h}const S=Math.abs(h).toString(16).padStart(8,"0");return(S+S+S+S).substring(0,32)},l=p=>{const h=o(p);return{md5:h,sha1:(h+h.substring(0,8)).substring(0,40),sha256:(h+h).substring(0,64)}},c=async()=>{if(e){const p=await i(e);r(p)}};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Hash Generator"}),s.jsx("div",{className:"tool-description",children:'Hash functions create a unique "fingerprint" of data. They are one-way functions - you cannot reverse a hash to get the original input.'}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Input Text:"}),s.jsx("textarea",{value:e,onChange:p=>t(p.target.value),placeholder:"Enter text to hash...",rows:2})]}),s.jsx("button",{className:"tool-btn primary",onClick:c,children:"Generate Hashes"}),Object.keys(n).length>0&&s.jsxs("div",{className:"tool-output",children:[s.jsxs("div",{className:"hash-result",children:[s.jsx("label",{children:"MD5 (32 chars - INSECURE):"}),s.jsx("code",{className:"hash-value",children:n.md5})]}),s.jsxs("div",{className:"hash-result",children:[s.jsx("label",{children:"SHA-1 (40 chars - INSECURE):"}),s.jsx("code",{className:"hash-value",children:n.sha1})]}),s.jsxs("div",{className:"hash-result",children:[s.jsx("label",{children:"SHA-256 (64 chars - SECURE):"}),s.jsx("code",{className:"hash-value",children:n.sha256})]})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"Hash Properties"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Deterministic:"})," Same input = same hash"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"One-way:"})," Cannot reverse to get input"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Avalanche effect:"})," Small change = completely different hash"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Fixed size:"})," Any input produces same length output"]})]})]})]})},ix=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(""),[i,o]=I.useState("encode"),l=()=>{try{r(i==="encode"?btoa(e):atob(e))}catch{r("Error: Invalid input for "+i)}};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Base64 Encoder/Decoder"}),s.jsx("div",{className:"tool-description",children:"Base64 is an encoding scheme (NOT encryption!) that converts binary data to ASCII text. It's commonly used for transmitting data."}),s.jsx("div",{className:"tool-controls",children:s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Mode:"}),s.jsxs("select",{value:i,onChange:c=>o(c.target.value),children:[s.jsx("option",{value:"encode",children:"Encode"}),s.jsx("option",{value:"decode",children:"Decode"})]})]})}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Input:"}),s.jsx("textarea",{value:e,onChange:c=>t(c.target.value),placeholder:i==="encode"?"Enter text to encode...":"Enter Base64 to decode...",rows:3})]}),s.jsx("button",{className:"tool-btn primary",onClick:l,children:i==="encode"?"Encode to Base64":"Decode from Base64"}),n&&s.jsxs("div",{className:"tool-output",children:[s.jsx("label",{children:"Output:"}),s.jsx("pre",{children:n})]}),s.jsx("div",{className:"tool-warning",children:'Base64 is NOT encryption! Anyone can decode Base64. Never use it to "secure" sensitive data.'})]})},ax=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(""),[i,o]=I.useState("textToHex"),l=h=>h.split("").map(S=>S.charCodeAt(0).toString(16).padStart(2,"0")).join(""),c=h=>{const S=h.replace(/\s/g,"");let w="";for(let x=0;x<S.length;x+=2)w+=String.fromCharCode(parseInt(S.substr(x,2),16));return w},p=()=>{try{r(i==="textToHex"?l(e):c(e))}catch{r("Error: Invalid input")}};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Hex Converter"}),s.jsx("div",{className:"tool-description",children:"Hexadecimal is base-16 (0-9, A-F). Each pair of hex digits represents one byte (ASCII character)."}),s.jsx("div",{className:"tool-controls",children:s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Mode:"}),s.jsxs("select",{value:i,onChange:h=>o(h.target.value),children:[s.jsx("option",{value:"textToHex",children:"Text → Hex"}),s.jsx("option",{value:"hexToText",children:"Hex → Text"})]})]})}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Input:"}),s.jsx("textarea",{value:e,onChange:h=>t(h.target.value),placeholder:i==="textToHex"?"Enter text...":"Enter hex (e.g., 48454c4c4f)...",rows:2})]}),s.jsx("button",{className:"tool-btn primary",onClick:p,children:"Convert"}),n&&s.jsxs("div",{className:"tool-output",children:[s.jsx("label",{children:"Output:"}),s.jsx("pre",{children:n})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"ASCII Reference"}),s.jsxs("div",{className:"ascii-table",children:[s.jsx("span",{children:"A=41"})," ",s.jsx("span",{children:"B=42"})," ",s.jsx("span",{children:"C=43"})," ",s.jsx("span",{children:"0=30"})," ",s.jsx("span",{children:"1=31"})]})]})]})},ox=()=>{const[e,t]=I.useState("192.168.1.100"),[n,r]=I.useState(!1),[i,o]=I.useState([]),l=[{port:21,service:"FTP",status:"closed"},{port:22,service:"SSH",status:"open"},{port:23,service:"Telnet",status:"closed"},{port:25,service:"SMTP",status:"closed"},{port:53,service:"DNS",status:"closed"},{port:80,service:"HTTP",status:"open"},{port:443,service:"HTTPS",status:"open"},{port:445,service:"SMB",status:"closed"},{port:3306,service:"MySQL",status:"closed"},{port:3389,service:"RDP",status:"filtered"}],c=()=>{r(!0),o([]);let p=0;const h=setInterval(()=>{if(p<l.length){const S={...l[p]};Math.random()>.7&&S.status==="closed"&&(S.status="open"),o(w=>[...w,S]),p++}else clearInterval(h),r(!1)},300)};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Port Scanner Simulator"}),s.jsxs("div",{className:"tool-description",children:["Port scanning discovers which ports are open on a target system, revealing running services.",s.jsx("strong",{children:" Note: Only scan systems you own or have permission to test!"})]}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Target IP (Simulated):"}),s.jsx("input",{type:"text",value:e,onChange:p=>t(p.target.value),placeholder:"192.168.1.100"})]}),s.jsx("button",{className:"tool-btn primary",onClick:c,disabled:n,children:n?"Scanning...":"Start Scan"}),i.length>0&&s.jsxs("div",{className:"tool-output",children:[s.jsxs("label",{children:["Scan Results for ",e,":"]}),s.jsxs("table",{className:"scan-results",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Port"}),s.jsx("th",{children:"Service"}),s.jsx("th",{children:"Status"})]})}),s.jsx("tbody",{children:i.map((p,h)=>s.jsxs("tr",{className:`port-${p.status}`,children:[s.jsx("td",{children:p.port}),s.jsx("td",{children:p.service}),s.jsx("td",{className:`status-${p.status}`,children:p.status.toUpperCase()})]},h))})]})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"Port Status Meanings"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{className:"status-open",children:"OPEN:"})," Service is accepting connections"]}),s.jsxs("li",{children:[s.jsx("strong",{className:"status-closed",children:"CLOSED:"})," Port responds but no service"]}),s.jsxs("li",{children:[s.jsx("strong",{className:"status-filtered",children:"FILTERED:"})," Firewall blocking probe"]})]})]})]})},lx=()=>{const[e,t]=I.useState(""),[n,r]=I.useState(""),[i,o]=I.useState(""),[l,c]=I.useState(""),[p,h]=I.useState(""),[S,w]=I.useState(""),x=()=>{let C=[];e&&C.push(`site:${e}`),n&&C.push(`filetype:${n}`),i&&C.push(`inurl:${i}`),l&&C.push(`intitle:${l}`),p&&C.push(`"${p}"`),w(C.join(" "))},j=[{name:"Find Login Pages",dork:"site:example.com inurl:login OR inurl:signin"},{name:"Find PDF Documents",dork:"site:example.com filetype:pdf"},{name:"Find Exposed Configs",dork:"filetype:env OR filetype:config"},{name:"Find Directory Listings",dork:'intitle:"index of"'}];return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Google Dork Builder"}),s.jsx("div",{className:"tool-description",children:"Build advanced Google search queries to find specific information. Use responsibly for authorized security testing only."}),s.jsxs("div",{className:"dork-builder",children:[s.jsxs("div",{className:"dork-inputs",children:[s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"site: (domain)"}),s.jsx("input",{type:"text",value:e,onChange:C=>t(C.target.value),placeholder:"example.com"})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"filetype:"}),s.jsxs("select",{value:n,onChange:C=>r(C.target.value),children:[s.jsx("option",{value:"",children:"None"}),s.jsx("option",{value:"pdf",children:"PDF"}),s.jsx("option",{value:"doc",children:"DOC"}),s.jsx("option",{value:"xls",children:"XLS"}),s.jsx("option",{value:"txt",children:"TXT"}),s.jsx("option",{value:"sql",children:"SQL"})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"inurl:"}),s.jsx("input",{type:"text",value:i,onChange:C=>o(C.target.value),placeholder:"admin"})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"intitle:"}),s.jsx("input",{type:"text",value:l,onChange:C=>c(C.target.value),placeholder:"login"})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Keyword:"}),s.jsx("input",{type:"text",value:p,onChange:C=>h(C.target.value),placeholder:"confidential"})]})]}),s.jsx("button",{className:"tool-btn primary",onClick:x,children:"Build Dork"}),S&&s.jsxs("div",{className:"tool-output",children:[s.jsx("label",{children:"Generated Dork:"}),s.jsx("code",{className:"dork-result",children:S})]})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"Preset Examples"}),s.jsx("div",{className:"preset-dorks",children:j.map((C,A)=>s.jsxs("div",{className:"preset-item",children:[s.jsxs("strong",{children:[C.name,":"]}),s.jsx("code",{children:C.dork})]},A))})]}),s.jsx("div",{className:"tool-warning",children:"Only use Google dorking for authorized security testing or educational purposes."})]})},cx=({onBack:e})=>{var o;const[t,n]=I.useState(null),r=[{id:"caesar",name:"Caesar Cipher",icon:"🔐",category:"Cryptography",component:sx},{id:"hash",name:"Hash Generator",icon:"#️⃣",category:"Cryptography",component:rx},{id:"base64",name:"Base64 Encoder",icon:"📝",category:"Encoding",component:ix},{id:"hex",name:"Hex Converter",icon:"🔢",category:"Encoding",component:ax},{id:"portscan",name:"Port Scanner",icon:"🔍",category:"Network",component:ox},{id:"dork",name:"Google Dork Builder",icon:"🔎",category:"Reconnaissance",component:lx}],i=t?(o=r.find(l=>l.id===t))==null?void 0:o.component:null;return s.jsxs("div",{className:"interactive-tools",children:[s.jsxs("div",{className:"tools-header",children:[s.jsx("h2",{children:"Interactive Security Tools"}),s.jsx("p",{children:"Hands-on tools to practice cybersecurity concepts"})]}),t?s.jsxs("div",{className:"tool-view",children:[s.jsx("button",{className:"back-btn",onClick:()=>n(null),children:"← Back to Tools"}),i&&s.jsx(i,{})]}):s.jsx("div",{className:"tools-grid",children:r.map(l=>s.jsxs("div",{className:"tool-card",onClick:()=>n(l.id),children:[s.jsx("div",{className:"tool-icon",children:l.icon}),s.jsx("h3",{children:l.name}),s.jsx("span",{className:"tool-category",children:l.category})]},l.id))}),s.jsx("button",{className:"back-btn",onClick:e,style:{marginTop:"2rem"},children:"← Back to Dashboard"})]})},dx=({onLogin:e,onTeacherLogin:t})=>{const[n,r]=I.useState(""),[i,o]=I.useState(""),[l,c]=I.useState(""),[p,h]=I.useState(!1);return s.jsx("div",{className:"login-container",children:s.jsxs("div",{className:"login-card",children:[s.jsxs("div",{className:"login-header",children:[s.jsx("h1",{children:"CyberEd Range"}),s.jsx("p",{children:"Setup Required"})]}),s.jsxs("div",{className:"setup-warning",children:[s.jsx("h3",{children:"Firebase Configuration Needed"}),s.jsx("p",{children:"To enable multi-student mode, please configure Firebase:"}),s.jsxs("ol",{children:[s.jsxs("li",{children:["Create a Firebase project at ",s.jsx("a",{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer",children:"console.firebase.google.com"})]}),s.jsx("li",{children:"Enable Firestore Database"}),s.jsxs("li",{children:["Copy your config to ",s.jsx("code",{children:"src/config/firebase.js"})]}),s.jsxs("li",{children:["Or create a ",s.jsx("code",{children:".env"})," file with VITE_FIREBASE_* variables"]})]}),s.jsx("button",{className:"btn-primary",onClick:()=>e({id:"demo",name:"Demo User",classCode:"DEMO"}),children:"Continue in Demo Mode"})]})]})})},ux=({classCode:e,assignments:t,onAssignmentCreated:n})=>{const[r,i]=I.useState(null),[o,l]=I.useState(null),c=w=>t.some(x=>x.type===w),p=async w=>{if(c(w)){alert(`${le[w].name} is already assigned to this class.`);return}i(w);try{const x=le[w].units.map(j=>j.id);await Nv(e,{type:w,items:x,title:le[w].name}),n&&n()}catch(x){console.error("Error creating assignment:",x),alert("Failed to create assignment. Please try again.")}finally{i(null)}},h=async w=>{if(confirm("Are you sure you want to remove this module assignment?")){l(w);try{await Ev(e,w)}catch(x){console.error("Error deleting assignment:",x),alert("Failed to delete assignment.")}finally{l(null)}}},S=w=>w?new Date(w).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Unknown";return s.jsxs("div",{className:"assignment-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("h3",{children:"Module Assignments"}),s.jsx("p",{className:"am-subtitle",children:"Assign entire modules to give students access to all content within."})]}),s.jsxs("div",{className:"am-modules",children:[s.jsxs("div",{className:`am-module-card cyber ${c("cyber-range")?"assigned":""}`,children:[s.jsx("div",{className:"am-module-icon",children:le["cyber-range"].icon}),s.jsxs("div",{className:"am-module-info",children:[s.jsx("h4",{children:le["cyber-range"].name}),s.jsx("p",{children:le["cyber-range"].description}),s.jsxs("span",{className:"am-module-count",children:[le["cyber-range"].units.length," categories"]})]}),s.jsx("div",{className:"am-module-action",children:c("cyber-range")?s.jsxs("div",{className:"am-assigned-info",children:[s.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),s.jsx("button",{className:"am-remove-btn",onClick:()=>{const w=t.find(x=>x.type==="cyber-range");w&&h(w.id)},disabled:o,children:"Remove"})]}):s.jsx("button",{className:"am-btn cyber",onClick:()=>p("cyber-range"),disabled:r==="cyber-range",children:r==="cyber-range"?"Assigning...":"Assign Module"})})]}),s.jsxs("div",{className:`am-module-card programming ${c("arrays-loops")?"assigned":""}`,children:[s.jsx("div",{className:"am-module-icon",children:le["arrays-loops"].icon}),s.jsxs("div",{className:"am-module-info",children:[s.jsx("h4",{children:le["arrays-loops"].name}),s.jsx("p",{children:le["arrays-loops"].description}),s.jsxs("span",{className:"am-module-count",children:[le["arrays-loops"].units.length," weeks"]})]}),s.jsx("div",{className:"am-module-action",children:c("arrays-loops")?s.jsxs("div",{className:"am-assigned-info",children:[s.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),s.jsx("button",{className:"am-remove-btn",onClick:()=>{const w=t.find(x=>x.type==="arrays-loops");w&&h(w.id)},disabled:o,children:"Remove"})]}):s.jsx("button",{className:"am-btn programming",onClick:()=>p("arrays-loops"),disabled:r==="arrays-loops",children:r==="arrays-loops"?"Assigning...":"Assign Module"})})]}),s.jsxs("div",{className:`am-module-card apcsp ${c("ap-csp")?"assigned":""}`,children:[s.jsx("div",{className:"am-module-icon",children:le["ap-csp"].icon}),s.jsxs("div",{className:"am-module-info",children:[s.jsx("h4",{children:le["ap-csp"].name}),s.jsx("p",{children:le["ap-csp"].description}),s.jsxs("span",{className:"am-module-count",children:[le["ap-csp"].units.length," modules"]})]}),s.jsx("div",{className:"am-module-action",children:c("ap-csp")?s.jsxs("div",{className:"am-assigned-info",children:[s.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),s.jsx("button",{className:"am-remove-btn",onClick:()=>{const w=t.find(x=>x.type==="ap-csp");w&&h(w.id)},disabled:o,children:"Remove"})]}):s.jsx("button",{className:"am-btn apcsp",onClick:()=>p("ap-csp"),disabled:r==="ap-csp",children:r==="ap-csp"?"Assigning...":"Assign Module"})})]}),s.jsxs("div",{className:`am-module-card data-apis ${c("data-apis")?"assigned":""}`,children:[s.jsx("div",{className:"am-module-icon",children:le["data-apis"].icon}),s.jsxs("div",{className:"am-module-info",children:[s.jsx("h4",{children:le["data-apis"].name}),s.jsx("p",{children:le["data-apis"].description}),s.jsxs("span",{className:"am-module-count",children:[le["data-apis"].units.length," weeks"]})]}),s.jsx("div",{className:"am-module-action",children:c("data-apis")?s.jsxs("div",{className:"am-assigned-info",children:[s.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),s.jsx("button",{className:"am-remove-btn",onClick:()=>{const w=t.find(x=>x.type==="data-apis");w&&h(w.id)},disabled:o,children:"Remove"})]}):s.jsx("button",{className:"am-btn data-apis",onClick:()=>p("data-apis"),disabled:r==="data-apis",children:r==="data-apis"?"Assigning...":"Assign Module"})})]})]}),t.length>0&&s.jsxs("div",{className:"am-current",children:[s.jsx("h4",{children:"Current Assignments"}),t.map(w=>{var x,j,C;return s.jsxs("div",{className:"am-current-item",children:[s.jsxs("span",{className:"am-type-badge",style:{backgroundColor:((x=le[w.type])==null?void 0:x.color)||"#888"},children:[(j=le[w.type])==null?void 0:j.icon," ",(C=le[w.type])==null?void 0:C.name]}),s.jsxs("span",{className:"am-date",children:["Assigned: ",S(w.assignedAt)]})]},w.id)})]})]})},px=({classCode:e})=>{const[t,n]=I.useState(null),[r,i]=I.useState(null),[o,l]=I.useState(null),[c,p]=I.useState("list"),h=(C,A)=>{if(C==="cyber-range")return As[A]||[];if(C==="arrays-loops"){const L=zc[A];if(!L||!L.days)return[];const g=[];return L.days.forEach(m=>{m.exercises&&m.exercises.forEach(k=>{g.push({...k,dayTitle:m.title,dayNumber:m.day})})}),g}else if(C==="ap-csp")return[];return[]},S=C=>{n(C),i(null),l(null),p("list")},w=C=>{i(C),l(null),p("list")},x=()=>{o?l(null):r?(i(null),p("list")):t&&n(null)},j=()=>{window.print()};if(!t)return s.jsxs("div",{className:"activity-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("h3",{children:"Activity Manager & Answer Keys"}),s.jsx("p",{className:"am-subtitle",children:"View activities, exemplar responses, and answer keys for each module"})]}),s.jsx("div",{className:"am-modules",children:Object.entries(le).map(([C,A])=>s.jsxs("div",{className:`am-module-card ${C}`,onClick:()=>S(C),style:{cursor:"pointer"},children:[s.jsx("div",{className:"am-module-icon",children:A.icon}),s.jsxs("div",{className:"am-module-info",children:[s.jsx("h4",{children:A.name}),s.jsx("p",{children:A.description}),s.jsxs("span",{className:"am-module-count",children:[A.units.length," ",C==="arrays-loops"?"weeks":"units"]})]}),s.jsx("div",{className:"am-module-arrow",children:"→"})]},C))})]});if(t&&!r){const C=le[t];return s.jsxs("div",{className:"activity-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("button",{className:"am-back-btn",onClick:x,children:"← Back"}),s.jsxs("h3",{children:[C.icon," ",C.name]}),s.jsx("p",{className:"am-subtitle",children:"Select a unit to view activities and answer keys"})]}),s.jsx("div",{className:"am-units-list",children:C.units.map(A=>{const L=h(t,A.id);return s.jsxs("div",{className:"am-unit-card",onClick:()=>w(A.id),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"am-unit-info",children:[s.jsx("h4",{children:A.name}),s.jsx("p",{children:A.description})]}),s.jsxs("div",{className:"am-unit-stats",children:[s.jsxs("span",{className:"am-activity-count",children:[L.length," activities"]}),s.jsx("span",{className:"am-arrow",children:"→"})]})]},A.id)})})]})}if(t&&r&&!o){const A=le[t].units.find(g=>g.id===r),L=h(t,r);return s.jsxs("div",{className:"activity-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("button",{className:"am-back-btn",onClick:x,children:"← Back"}),s.jsx("h3",{children:(A==null?void 0:A.name)||r}),s.jsxs("p",{className:"am-subtitle",children:[L.length," activities"]})]}),s.jsxs("div",{className:"am-view-toggle",children:[s.jsx("button",{className:`am-toggle-btn ${c==="list"?"active":""}`,onClick:()=>p("list"),children:"Activity List"}),s.jsx("button",{className:`am-toggle-btn ${c==="answerKey"?"active":""}`,onClick:()=>p("answerKey"),children:"📋 Answer Key"}),c==="answerKey"&&s.jsx("button",{className:"am-print-btn",onClick:j,children:"🖨️ Print"})]}),c==="list"?s.jsx("div",{className:"am-activities-list",children:L.length===0?s.jsxs("div",{className:"am-empty",children:[s.jsx("p",{children:"No activities found for this unit."}),s.jsx("p",{className:"am-empty-hint",children:"Activities for AP CSP modules are managed in the pseudocode and flowchart data files."})]}):L.map((g,m)=>s.jsxs("div",{className:"am-activity-card",children:[s.jsxs("div",{className:"am-activity-header",children:[s.jsxs("span",{className:"am-activity-number",children:["#",m+1]}),s.jsx("h4",{children:g.title||g.name||`Activity ${m+1}`}),g.difficulty&&s.jsx("span",{className:`am-difficulty ${g.difficulty.toLowerCase()}`,children:g.difficulty})]}),s.jsxs("div",{className:"am-activity-body",children:[g.description&&s.jsx("p",{className:"am-activity-desc",children:g.description}),g.dayTitle&&s.jsxs("p",{className:"am-activity-day",children:["Day ",g.dayNumber,": ",g.dayTitle]}),s.jsx("div",{className:"am-activity-meta",children:g.points&&s.jsxs("span",{className:"am-points",children:[g.points," pts"]})})]}),s.jsx("div",{className:"am-activity-actions",children:s.jsx("button",{className:"am-view-btn",onClick:()=>l(g),children:"View Details & Answer"})})]},g.id||m))}):s.jsxs("div",{className:"am-answer-key",children:[s.jsxs("div",{className:"am-answer-key-header",children:[s.jsxs("h2",{children:["📋 Answer Key: ",A==null?void 0:A.name]}),s.jsx("p",{children:"Exemplar responses and solutions for all activities"})]}),L.map((g,m)=>s.jsxs("div",{className:"am-answer-item",children:[s.jsxs("div",{className:"am-answer-question",children:[s.jsxs("span",{className:"am-answer-num",children:["#",m+1]}),s.jsxs("div",{className:"am-answer-title",children:[s.jsx("strong",{children:g.title||g.name}),s.jsxs("span",{className:"am-answer-points",children:[g.points," pts"]})]})]}),g.prompt&&s.jsxs("div",{className:"am-answer-prompt",children:[s.jsx("label",{children:"Challenge/Prompt:"}),s.jsx("pre",{children:g.prompt})]}),s.jsxs("div",{className:"am-answer-response",children:[g.flag&&s.jsxs("div",{className:"am-answer-box flag",children:[s.jsx("label",{children:"🚩 Flag:"}),s.jsx("code",{children:g.flag})]}),g.answer&&s.jsxs("div",{className:"am-answer-box answer",children:[s.jsx("label",{children:"✓ Answer:"}),s.jsx("code",{children:typeof g.answer=="object"?JSON.stringify(g.answer):g.answer})]}),g.explanation&&s.jsxs("div",{className:"am-answer-box explanation",children:[s.jsx("label",{children:"📝 Explanation:"}),s.jsx("p",{children:g.explanation})]}),g.solutionCode&&s.jsxs("div",{className:"am-answer-box solution",children:[s.jsx("label",{children:"💻 Exemplar Code Solution:"}),s.jsx("pre",{className:"am-code-block",children:g.solutionCode})]}),g.rubric&&s.jsxs("div",{className:"am-answer-box rubric",children:[s.jsx("label",{children:"📊 Grading Rubric:"}),s.jsx("ul",{className:"am-rubric-list",children:Object.entries(g.rubric).map(([k,D])=>s.jsxs("li",{children:[s.jsxs("strong",{children:[k,":"]})," ",D]},k))})]}),g.hints&&g.hints.length>0&&s.jsxs("div",{className:"am-answer-box hints",children:[s.jsx("label",{children:"💡 Hints (for scaffolding):"}),s.jsx("ol",{children:g.hints.map((k,D)=>s.jsx("li",{children:k},D))})]}),g.learningObjective&&s.jsxs("div",{className:"am-answer-box objective",children:[s.jsx("label",{children:"🎯 Learning Objective:"}),s.jsx("p",{children:g.learningObjective})]})]})]},g.id||m))]})]})}return o?s.jsxs("div",{className:"activity-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("button",{className:"am-back-btn",onClick:x,children:"← Back to List"}),s.jsx("h3",{children:o.title||o.name}),s.jsx("button",{className:"am-print-btn",onClick:j,children:"🖨️ Print"})]}),s.jsxs("div",{className:"am-activity-detail",children:[s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"📋 Activity Overview"}),s.jsxs("div",{className:"am-detail-row",children:[s.jsx("label",{children:"Title:"}),s.jsx("span",{children:o.title||o.name})]}),o.difficulty&&s.jsxs("div",{className:"am-detail-row",children:[s.jsx("label",{children:"Difficulty:"}),s.jsx("span",{className:`am-difficulty ${o.difficulty.toLowerCase()}`,children:o.difficulty})]}),o.points&&s.jsxs("div",{className:"am-detail-row",children:[s.jsx("label",{children:"Points:"}),s.jsx("span",{children:o.points})]}),o.dayTitle&&s.jsxs("div",{className:"am-detail-row",children:[s.jsx("label",{children:"Day:"}),s.jsxs("span",{children:["Day ",o.dayNumber,": ",o.dayTitle]})]})]}),o.description&&s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"📖 Description"}),s.jsx("p",{children:o.description})]}),o.learningObjective&&s.jsxs("div",{className:"am-detail-section objective",children:[s.jsx("h4",{children:"🎯 Learning Objective"}),s.jsx("p",{children:o.learningObjective})]}),o.prompt&&s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"❓ Challenge/Prompt"}),s.jsx("pre",{className:"am-prompt-block",children:o.prompt})]}),s.jsxs("div",{className:"am-teacher-section",children:[s.jsx("h4",{children:"🔑 TEACHER ANSWER KEY"}),o.flag&&s.jsxs("div",{className:"am-answer-box flag",children:[s.jsx("label",{children:"🚩 Flag:"}),s.jsx("code",{className:"am-flag",children:o.flag})]}),o.answer&&s.jsxs("div",{className:"am-answer-box answer",children:[s.jsx("label",{children:"✓ Correct Answer:"}),s.jsx("code",{className:"am-answer",children:typeof o.answer=="object"?JSON.stringify(o.answer,null,2):o.answer})]}),o.solutionCode&&s.jsxs("div",{className:"am-answer-box solution",children:[s.jsx("label",{children:"💻 Exemplar Code Solution:"}),s.jsx("pre",{className:"am-code-block",children:o.solutionCode})]}),o.explanation&&s.jsxs("div",{className:"am-answer-box explanation",children:[s.jsx("label",{children:"📝 Explanation for Students:"}),s.jsx("p",{children:o.explanation})]})]}),o.hints&&o.hints.length>0&&s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"💡 Hints (for scaffolding)"}),s.jsx("ol",{className:"am-hints-list",children:o.hints.map((C,A)=>s.jsx("li",{children:C},A))})]}),o.rubric&&s.jsxs("div",{className:"am-detail-section rubric",children:[s.jsx("h4",{children:"📊 Grading Rubric"}),s.jsxs("table",{className:"am-rubric-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Criterion"}),s.jsx("th",{children:"Description"})]})}),s.jsx("tbody",{children:Object.entries(o.rubric).map(([C,A])=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:C})}),s.jsx("td",{children:A})]},C))})]})]}),o.vocabularyTerms&&o.vocabularyTerms.length>0&&s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"📚 Related Vocabulary"}),s.jsx("div",{className:"am-vocab-tags",children:o.vocabularyTerms.map((C,A)=>s.jsx("span",{className:"am-vocab-tag",children:C},A))})]})]})]}):null},hx=({classCode:e})=>{const[t,n]=I.useState(null);return s.jsxs("div",{className:"module-editor",children:[s.jsxs("div",{className:"me-header",children:[s.jsx("h3",{children:"Module Content"}),s.jsx("p",{className:"me-subtitle",children:"View and manage module content for your class."})]}),s.jsx("div",{className:"me-modules",children:Object.entries(le).map(([r,i])=>s.jsxs("div",{className:`me-module-card ${t===r?"selected":""}`,onClick:()=>n(t===r?null:r),children:[s.jsxs("div",{className:"me-module-header",children:[s.jsx("span",{className:"me-module-icon",children:i.icon}),s.jsx("h4",{children:i.name})]}),s.jsx("p",{className:"me-module-description",children:i.description}),s.jsxs("span",{className:"me-unit-count",children:[i.units.length," units"]}),t===r&&s.jsxs("div",{className:"me-units-list",children:[s.jsx("h5",{children:"Units:"}),s.jsx("ul",{children:i.units.map(o=>s.jsxs("li",{children:[s.jsx("strong",{children:o.name}),s.jsx("span",{className:"me-unit-desc",children:o.description})]},o.id))})]})]},r))})]})},mx=({classCode:e})=>{const[t,n]=I.useState([]),[r,i]=I.useState(!0),[o,l]=I.useState("all"),[c,p]=I.useState("all"),[h,S]=I.useState(""),[w,x]=I.useState(null);I.useEffect(()=>{j()},[e]);const j=async()=>{i(!0);try{const m=await Sv(e);m.sort((k,D)=>{const _=k.submittedAt?new Date(k.submittedAt).getTime():0;return(D.submittedAt?new Date(D.submittedAt).getTime():0)-_}),n(m)}catch(m){console.error("Error loading submissions:",m)}i(!1)},C=t.filter(m=>{var k,D,_;if(o==="correct"&&!m.isCorrect||o==="incorrect"&&m.isCorrect||c!=="all"&&m.exerciseType!==c)return!1;if(h){const M=h.toLowerCase(),b=(k=m.studentName)==null?void 0:k.toLowerCase().includes(M),y=(D=m.exerciseTitle)==null?void 0:D.toLowerCase().includes(M),T=(_=m.exerciseId)==null?void 0:_.toLowerCase().includes(M);if(!b&&!y&&!T)return!1}return!0}),A=m=>m?(typeof m=="string"?new Date(m):m).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0}):"Unknown",L=m=>{switch(m){case"challenge":return"#00ff88";case"pseudocode":return"#ff6b9d";case"flowchart":return"#ff6b9d";case"programming":return"#00d4ff";default:return"#888"}},g=m=>{switch(m){case"challenge":return"Cyber Challenge";case"pseudocode":return"Pseudocode";case"flowchart":return"Flowchart";case"programming":return"Programming";default:return m}};return r?s.jsx("div",{className:"submission-viewer",children:s.jsx("div",{className:"loading-message",children:"Loading submissions..."})}):s.jsxs("div",{className:"submission-viewer",children:[s.jsxs("div",{className:"sv-header",children:[s.jsx("h3",{children:"Student Submissions"}),s.jsx("p",{className:"sv-subtitle",children:"View and review student answers across all exercises."})]}),s.jsxs("div",{className:"sv-filters",children:[s.jsxs("div",{className:"sv-filter-group",children:[s.jsx("label",{children:"Status:"}),s.jsxs("select",{value:o,onChange:m=>l(m.target.value),children:[s.jsx("option",{value:"all",children:"All Submissions"}),s.jsx("option",{value:"correct",children:"Correct Only"}),s.jsx("option",{value:"incorrect",children:"Incorrect Only"})]})]}),s.jsxs("div",{className:"sv-filter-group",children:[s.jsx("label",{children:"Type:"}),s.jsxs("select",{value:c,onChange:m=>p(m.target.value),children:[s.jsx("option",{value:"all",children:"All Types"}),s.jsx("option",{value:"challenge",children:"Cyber Challenges"}),s.jsx("option",{value:"pseudocode",children:"Pseudocode"}),s.jsx("option",{value:"flowchart",children:"Flowcharts"}),s.jsx("option",{value:"programming",children:"Programming"})]})]}),s.jsxs("div",{className:"sv-filter-group",children:[s.jsx("label",{children:"Search:"}),s.jsx("input",{type:"text",placeholder:"Student name or exercise...",value:h,onChange:m=>S(m.target.value)})]}),s.jsx("button",{className:"sv-refresh-btn",onClick:j,children:"Refresh"})]}),C.length===0?s.jsxs("div",{className:"sv-empty",children:[s.jsx("div",{className:"sv-empty-icon",children:"[ NO SUBMISSIONS ]"}),s.jsx("p",{children:"No submissions match your filters."}),t.length===0&&s.jsx("p",{className:"sv-hint",children:"Students' answers will appear here when they submit exercises."})]}):s.jsxs("div",{className:"sv-list",children:[s.jsxs("div",{className:"sv-stats",children:["Showing ",C.length," of ",t.length," submissions",o==="incorrect"&&s.jsxs("span",{className:"sv-stat-highlight",children:[" (",C.length," need review)"]})]}),C.map((m,k)=>s.jsxs("div",{className:`sv-submission-card ${m.isCorrect?"correct":"incorrect"} ${w===k?"expanded":""}`,children:[s.jsxs("div",{className:"sv-submission-header",onClick:()=>x(w===k?null:k),children:[s.jsxs("div",{className:"sv-submission-info",children:[s.jsx("span",{className:"sv-student-name",children:m.studentName}),s.jsx("span",{className:"sv-type-badge",style:{backgroundColor:L(m.exerciseType)},children:g(m.exerciseType)}),s.jsx("span",{className:`sv-status-badge ${m.isCorrect?"correct":"incorrect"}`,children:m.isCorrect?"✓ Correct":"✗ Incorrect"})]}),s.jsxs("div",{className:"sv-submission-meta",children:[s.jsx("span",{className:"sv-exercise-title",children:m.exerciseTitle||m.exerciseId}),s.jsx("span",{className:"sv-date",children:A(m.submittedAt)})]}),s.jsx("span",{className:"sv-expand-icon",children:w===k?"▼":"▶"})]}),w===k&&s.jsx("div",{className:"sv-submission-content",children:s.jsxs("div",{className:"sv-answer-section",children:[s.jsx("h4",{children:"Student's Answer:"}),s.jsx("pre",{className:"sv-answer-code",children:m.answer})]})})]},`${m.studentId}-${m.exerciseId}-${k}`))]})]})},fx=({classCode:e,onBack:t})=>{var y,T,N,P;Bc();const[n,r]=I.useState([]),[i,o]=I.useState(null),[l,c]=I.useState([]),[p,h]=I.useState(!0),[S,w]=I.useState(null),[x,j]=I.useState("points"),[C,A]=I.useState("students"),[L,g]=I.useState(!1),m=Object.values(As).flat().length,k=Nt.length;I.useEffect(()=>{(async()=>{const W=await Cv(e);o(W)})();const f=Tv(e,W=>{r(W),h(!1)}),z=Fm(e,W=>{c(W)});return()=>{f(),z()}},[e]);const D=[...n].sort((E,f)=>{var z,W;switch(x){case"points":return f.totalPoints-E.totalPoints;case"name":return E.name.localeCompare(f.name);case"activity":const J=((z=E.lastActivity)==null?void 0:z.getTime())||0;return(((W=f.lastActivity)==null?void 0:W.getTime())||0)-J;default:return 0}}),_=E=>{if(!E)return{status:"never",label:"Never active",color:"#666"};const z=new Date-E,W=Math.floor(z/6e4);if(W<5)return{status:"active",label:"Active now",color:"#4caf50"};if(W<30)return{status:"recent",label:`${W}m ago`,color:"#ff9800"};if(W<60)return{status:"idle",label:`${W}m ago`,color:"#f44336"};const J=Math.floor(W/60);return J<24?{status:"idle",label:`${J}h ago`,color:"#f44336"}:{status:"inactive",label:`${Math.floor(J/24)}d ago`,color:"#666"}},M=(E,f)=>f>0?Math.round(E/f*100):0,b={totalStudents:n.length,activeStudents:n.filter(E=>{const f=_(E.lastActivity);return f.status==="active"||f.status==="recent"}).length,avgPoints:n.length>0?Math.round(n.reduce((E,f)=>E+f.totalPoints,0)/n.length):0,avgChallenges:n.length>0?Math.round(n.reduce((E,f)=>{var z;return E+(((z=f.completedChallenges)==null?void 0:z.length)||0)},0)/n.length):0};return p?s.jsx("div",{className:"teacher-dashboard",children:s.jsxs("div",{className:"loading-screen",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("p",{children:"Loading class data..."})]})}):s.jsxs("div",{className:"teacher-dashboard",children:[s.jsxs("header",{className:"td-header",children:[s.jsx("button",{className:"back-btn",onClick:t,children:"← Exit Dashboard"}),s.jsxs("div",{className:"td-title",children:[s.jsx("h1",{children:(i==null?void 0:i.name)||"Class Dashboard"}),s.jsxs("div",{className:"class-code-badge",children:["Class Code: ",s.jsx("strong",{children:e})]})]}),s.jsx("button",{className:"theme-btn nav-btn",onClick:()=>g(!0),title:"Change Theme",children:"Theme"})]}),s.jsxs("div",{className:"td-stats",children:[s.jsxs("div",{className:"td-stat-card",children:[s.jsx("span",{className:"td-stat-value",children:b.totalStudents}),s.jsx("span",{className:"td-stat-label",children:"Total Students"})]}),s.jsxs("div",{className:"td-stat-card active",children:[s.jsx("span",{className:"td-stat-value",children:b.activeStudents}),s.jsx("span",{className:"td-stat-label",children:"Currently Active"})]}),s.jsxs("div",{className:"td-stat-card",children:[s.jsx("span",{className:"td-stat-value",children:b.avgPoints}),s.jsx("span",{className:"td-stat-label",children:"Avg Points"})]}),s.jsxs("div",{className:"td-stat-card",children:[s.jsx("span",{className:"td-stat-value",children:b.avgChallenges}),s.jsx("span",{className:"td-stat-label",children:"Avg Challenges Done"})]})]}),s.jsxs("div",{className:"td-tabs",children:[s.jsx("button",{className:`td-tab ${C==="students"?"active":""}`,onClick:()=>A("students"),children:"Students"}),s.jsx("button",{className:`td-tab ${C==="submissions"?"active":""}`,onClick:()=>A("submissions"),children:"Submissions"}),s.jsx("button",{className:`td-tab ${C==="assignments"?"active":""}`,onClick:()=>A("assignments"),children:"Module Assignments"}),s.jsx("button",{className:`td-tab ${C==="activities"?"active":""}`,onClick:()=>A("activities"),children:"View Activities"}),s.jsx("button",{className:`td-tab ${C==="modules"?"active":""}`,onClick:()=>A("modules"),children:"Modules"})]}),C==="submissions"&&s.jsx(mx,{classCode:e}),C==="assignments"&&s.jsx(ux,{classCode:e,assignments:l}),C==="activities"&&s.jsx(px,{classCode:e}),C==="modules"&&s.jsx(hx,{classCode:e}),C==="students"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"td-controls",children:[s.jsxs("div",{className:"sort-controls",children:[s.jsx("label",{children:"Sort by:"}),s.jsxs("select",{value:x,onChange:E=>j(E.target.value),children:[s.jsx("option",{value:"points",children:"Points (High to Low)"}),s.jsx("option",{value:"name",children:"Name (A-Z)"}),s.jsx("option",{value:"activity",children:"Recent Activity"})]})]}),s.jsx("button",{className:"btn-refresh",onClick:()=>window.location.reload(),children:"Refresh"})]}),s.jsxs("div",{className:"td-content",children:[s.jsxs("div",{className:"student-list-panel",children:[s.jsxs("h2",{children:["Students (",n.length,")"]}),n.length===0?s.jsxs("div",{className:"no-students",children:[s.jsx("p",{children:"No students have joined yet."}),s.jsxs("p",{children:["Share the class code: ",s.jsx("strong",{children:e})]})]}):s.jsx("div",{className:"student-list",children:D.map((E,f)=>{var W,J,ne,F;const z=_(E.lastActivity);return M(((W=E.completedChallenges)==null?void 0:W.length)||0,m),M(((J=E.completedScenarios)==null?void 0:J.length)||0,k),s.jsxs("div",{className:`student-card ${(S==null?void 0:S.id)===E.id?"selected":""}`,onClick:()=>w(E),children:[s.jsxs("div",{className:"student-rank",children:["#",f+1]}),s.jsxs("div",{className:"student-info",children:[s.jsx("div",{className:"student-name",children:E.name}),s.jsxs("div",{className:"student-activity",style:{color:z.color},children:[s.jsx("span",{className:`activity-dot ${z.status}`}),z.label]})]}),s.jsxs("div",{className:"student-progress",children:[s.jsxs("div",{className:"progress-item",children:[s.jsx("span",{className:"progress-value",children:E.totalPoints}),s.jsx("span",{className:"progress-label",children:"pts"})]}),s.jsxs("div",{className:"progress-item",children:[s.jsx("span",{className:"progress-value",children:((ne=E.completedChallenges)==null?void 0:ne.length)||0}),s.jsx("span",{className:"progress-label",children:"challenges"})]}),s.jsxs("div",{className:"progress-item",children:[s.jsx("span",{className:"progress-value",children:((F=E.completedScenarios)==null?void 0:F.length)||0}),s.jsx("span",{className:"progress-label",children:"scenarios"})]})]})]},E.id)})})]}),s.jsx("div",{className:"student-detail-panel",children:S?s.jsxs(s.Fragment,{children:[s.jsx("h2",{children:S.name}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h3",{children:"Overall Progress"}),s.jsx("div",{className:"detail-stats",children:s.jsxs("div",{className:"detail-stat",children:[s.jsx("span",{className:"detail-stat-value",children:S.totalPoints}),s.jsx("span",{className:"detail-stat-label",children:"Total Points"})]})})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("h3",{children:["Challenges (",((y=S.completedChallenges)==null?void 0:y.length)||0,"/",m,")"]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${M(((T=S.completedChallenges)==null?void 0:T.length)||0,m)}%`}})}),s.jsx("div",{className:"completed-list",children:Object.entries(As).map(([E,f])=>{const z=f.filter(W=>{var J;return(J=S.completedChallenges)==null?void 0:J.includes(W.id)});return z.length===0?null:s.jsxs("div",{className:"category-progress",children:[s.jsx("h4",{children:E}),s.jsx("ul",{children:z.map(W=>s.jsxs("li",{children:[W.title," (+",W.points,"pts)"]},W.id))})]},E)})})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("h3",{children:["Network Monitor (",((N=S.completedScenarios)==null?void 0:N.length)||0,"/",k,")"]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill scenario",style:{width:`${M(((P=S.completedScenarios)==null?void 0:P.length)||0,k)}%`}})}),s.jsx("div",{className:"completed-list",children:s.jsx("ul",{children:Nt.filter(E=>{var f;return(f=S.completedScenarios)==null?void 0:f.includes(E.id)}).map(E=>s.jsxs("li",{children:[E.name," (+",E.points,"pts)"]},E.id))})})]})]}):s.jsx("div",{className:"no-selection",children:s.jsx("p",{children:"Select a student to view details"})})})]})]}),L&&s.jsx(Hc,{onClose:()=>g(!1)})]})},Um={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
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
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function gx(e){for(const t of Object.values(Um))for(const n of t.days)for(const r of n.exercises)if(r.id===e)return r;return null}const yx={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},vx={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]};function xx({weekKey:e,onSelectExercise:t,onBack:n,completedExercises:r}){const i=Um[e],o=e.replace("week",""),l=vx[e]||[],c=p=>`difficulty difficulty-${p.toLowerCase()}`;return s.jsxs("div",{className:"week-view",children:[s.jsx("button",{className:"back-button",onClick:n,children:"← Back to Dashboard"}),s.jsxs("div",{className:"week-header-large",children:[s.jsxs("h1",{children:["Week ",o,": ",i.title]}),s.jsx("p",{className:"big-idea",children:i.bigIdea})]}),s.jsxs("div",{className:"learning-objectives",children:[s.jsx("h3",{children:"Learning Objectives"}),s.jsx("ul",{children:l.map((p,h)=>s.jsx("li",{children:p},h))})]}),s.jsx("div",{className:"days-list",children:i.days.map(p=>s.jsxs("div",{className:"day-section",children:[s.jsxs("div",{className:"day-header",children:[s.jsxs("h2",{children:["Day ",p.day,": ",p.title]}),s.jsx("p",{className:"day-objective",children:p.objective})]}),s.jsx("div",{className:"exercises-grid",children:p.exercises.map(h=>{const S=r.includes(h.id);return s.jsxs("div",{className:`exercise-card ${S?"completed":""} ${h.isProject?"project-card":""}`,onClick:()=>t(h.id),children:[s.jsxs("div",{className:"exercise-header",children:[s.jsx("span",{className:c(h.difficulty),children:h.difficulty}),s.jsxs("span",{className:"points",children:[h.points," pts"]})]}),s.jsxs("h3",{className:"exercise-title",children:[h.isProject&&"🎮 ",h.isCapstone&&"🏆 ",h.title]}),s.jsx("p",{className:"exercise-description",children:h.description}),S&&s.jsx("div",{className:"completed-badge",children:"✓ Completed"})]},h.id)})}),p.exitTicket&&s.jsxs("div",{className:"exit-ticket",children:[s.jsx("strong",{children:"Exit Ticket:"})," ",p.exitTicket]})]},p.day))})]})}const Bo=()=>new Promise((e,t)=>{if(window.p5&&typeof window.p5=="function"){e(window.p5);return}const n=document.querySelector('script[src*="p5.min.js"]');if(n){n.addEventListener("load",()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))}),n.addEventListener("error",()=>t(new Error("Failed to load p5.js")));return}const r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js",r.async=!0,r.onload=()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))},r.onerror=()=>t(new Error("Failed to load p5.js")),document.head.appendChild(r)});function wx({exerciseId:e,onBack:t,onComplete:n,isCompleted:r,onSubmit:i}){const o=gx(e),[l,c]=I.useState((o==null?void 0:o.starterCode)||""),[p,h]=I.useState([]),[S,w]=I.useState(!1),[x,j]=I.useState(!1),[C,A]=I.useState(null),[L,g]=I.useState(!1),[m,k]=I.useState(null),D=I.useRef(null),_=I.useRef(null);if(I.useEffect(()=>{Bo().then(()=>{g(!0),k(null)}).catch(f=>{console.error("Failed to load p5.js:",f),k(f.message)})},[]),I.useEffect(()=>{o&&(c(o.starterCode),h([]),w(!1))},[e]),I.useEffect(()=>()=>{_.current&&(_.current.remove(),_.current=null)},[]),!o)return s.jsxs("div",{className:"exercise-detail",children:[s.jsx("button",{className:"back-button",onClick:t,children:"← Back"}),s.jsx("p",{children:"Exercise not found"})]});const M=async()=>{_.current&&(_.current.remove(),_.current=null),D.current&&(D.current.innerHTML=""),j(!0);try{(!window.p5||typeof window.p5!="function")&&(D.current&&(D.current.innerHTML='<div class="canvas-placeholder">Loading p5.js...</div>'),await Bo());const f=["setup","draw","preload","mousePressed","mouseReleased","mouseClicked","mouseMoved","mouseDragged","mouseWheel","doubleClicked","keyPressed","keyReleased","keyTyped","touchStarted","touchMoved","touchEnded","windowResized"];let z=l;f.forEach(J=>{const ne=new RegExp(`function\\s+${J}\\s*\\(`,"g");z=z.replace(ne,`p.${J} = function(`)});const W=J=>{new Function("p",`
          with (p) {
            ${z}
          }
        `)(J)};_.current=new window.p5(W,D.current)}catch(f){console.error("Code error:",f),D.current&&(D.current.innerHTML=`<div class="error-message">Error: ${f.message}</div>`)}},b=()=>{_.current&&(_.current.remove(),_.current=null),j(!1),D.current&&(D.current.innerHTML='<div class="canvas-placeholder">Click "Run Code" to see your sketch</div>')},y=()=>{c(o.starterCode),b()},T=f=>{p.includes(f)||h([...p,f])},N=()=>{w(!0),c(o.solutionCode)},P=()=>{r||(i&&i({exerciseId:o.id,answer:l,isCorrect:!0,exerciseType:"programming",exerciseTitle:o.title}),n(o.id,o.points))},E=f=>`difficulty difficulty-${f.toLowerCase()}`;return s.jsxs("div",{className:"exercise-detail",children:[s.jsx("button",{className:"back-button",onClick:t,children:"← Back to Week"}),s.jsxs("div",{className:"exercise-header-detail",children:[s.jsxs("div",{className:"exercise-meta",children:[s.jsx("span",{className:E(o.difficulty),children:o.difficulty}),s.jsxs("span",{className:"points",children:[o.points," pts"]}),o.isProject&&s.jsx("span",{className:"project-badge",children:"Mini-Project"}),o.isCapstone&&s.jsx("span",{className:"capstone-badge",children:"Capstone"})]}),s.jsx("h1",{children:o.title}),s.jsx("p",{className:"exercise-description-large",children:o.description})]}),o.vocabularyTerms&&o.vocabularyTerms.length>0&&s.jsxs("div",{className:"vocab-tags",children:[s.jsx("span",{className:"vocab-label",children:"Key Terms:"}),o.vocabularyTerms.map(f=>{const z=yx[f];return z?s.jsx("button",{className:"vocab-tag",onClick:()=>A(z),children:z.term},f):null})]}),C&&s.jsx("div",{className:"vocab-popup",onClick:()=>A(null),children:s.jsxs("div",{className:"vocab-popup-content",onClick:f=>f.stopPropagation(),children:[s.jsx("h3",{children:C.term}),s.jsx("p",{children:C.definition}),C.example&&s.jsx("code",{className:"vocab-example",children:C.example}),s.jsx("button",{onClick:()=>A(null),children:"Close"})]})}),s.jsxs("div",{className:"prompt-box",children:[s.jsx("h3",{children:"Challenge"}),s.jsx("pre",{children:o.prompt})]}),s.jsxs("div",{className:"editor-container",children:[s.jsxs("div",{className:"code-section",children:[s.jsxs("div",{className:"code-header",children:[s.jsx("h3",{children:"Your Code"}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{onClick:M,className:"run-btn",children:"▶ Run"}),s.jsx("button",{onClick:b,className:"stop-btn",children:"⬛ Stop"}),s.jsx("button",{onClick:y,className:"reset-btn",children:"↺ Reset"})]})]}),s.jsx("textarea",{className:"code-editor",value:l,onChange:f=>c(f.target.value),spellCheck:!1})]}),s.jsxs("div",{className:"canvas-section",children:[s.jsx("h3",{children:"Output"}),s.jsx("div",{ref:D,className:"canvas-container",children:m?s.jsxs("div",{className:"error-message",children:["Failed to load p5.js: ",m,s.jsx("button",{onClick:()=>{k(null),Bo().then(()=>g(!0)).catch(f=>k(f.message))},style:{marginTop:"10px",display:"block"},children:"Retry"})]}):L?s.jsx("div",{className:"canvas-placeholder",children:'Click "Run Code" to see your sketch'}):s.jsx("div",{className:"canvas-placeholder",children:"Loading p5.js..."})})]})]}),s.jsxs("div",{className:"hints-section",children:[s.jsx("h3",{children:"Hints"}),s.jsx("div",{className:"hints-list",children:o.hints.map((f,z)=>s.jsx("div",{className:"hint-item",children:p.includes(z)?s.jsxs("div",{className:"hint-revealed",children:[s.jsxs("span",{className:"hint-number",children:["Hint ",z+1,":"]})," ",f]}):s.jsxs("button",{className:"hint-button",onClick:()=>T(z),children:["Reveal Hint ",z+1]})},z))})]}),o.resources&&o.resources.length>0&&s.jsxs("div",{className:"resources-section",children:[s.jsx("h3",{children:"p5.js Reference"}),s.jsx("div",{className:"resources-list",children:o.resources.map((f,z)=>s.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",className:"resource-link",children:f.title},z))})]}),s.jsx("div",{className:"solution-section",children:S?s.jsxs("div",{className:"solution-revealed",children:[s.jsx("h3",{children:"Solution"}),s.jsx("pre",{className:"solution-code",children:o.solutionCode})]}):s.jsx("button",{className:"solution-button",onClick:N,children:"Show Solution (try on your own first!)"})}),o.rubric&&s.jsxs("div",{className:"rubric-section",children:[s.jsx("h3",{children:"Rubric"}),s.jsx("ul",{className:"rubric-list",children:Object.entries(o.rubric).map(([f,z])=>s.jsxs("li",{children:[s.jsxs("strong",{children:[f,":"]})," ",z]},f))})]}),s.jsx("div",{className:"complete-section",children:r?s.jsxs("div",{className:"already-completed",children:["✓ You've completed this exercise! (",o.points," points earned)"]}):s.jsxs("button",{className:"complete-button",onClick:P,children:["Mark as Complete (+",o.points," points)"]})})]})}function bx({completedExercises:e=[],onSelectTopic:t,onSelectExercise:n,onBack:r}){const[i,o]=I.useState("all"),[l,c]=I.useState("all"),[p,h]=I.useState("learn"),S=new Set(e),w=I.useMemo(()=>{const g={};return bs.forEach(m=>{g[m.id]=Et.filter(k=>k.topic===m.id)}),g},[]),x=[{id:"all",label:"All Types"},{id:"pseudocode-to-js",label:"Pseudocode → JS"},{id:"js-to-pseudocode",label:"JS → Pseudocode"},{id:"fill-blank",label:"Fill in Blank"},{id:"trace",label:"Code Tracing"},{id:"multiple-choice",label:"Multiple Choice"}],j=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],C=I.useMemo(()=>Et.filter(g=>!(i!=="all"&&g.difficulty!==i||l!=="all"&&g.type!==l)),[i,l]),A=g=>{const m=w[g]||[];return{completed:m.filter(D=>S.has(D.id)).length,total:m.length}},L={completed:S.size,total:Et.length};return s.jsxs("div",{className:"pseudocode-hub",children:[s.jsx("button",{className:"back-btn",onClick:r,children:"← Back to Dashboard"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ CODE ]"}),s.jsx("h1",{children:"AP CSP Pseudocode"}),s.jsx("p",{children:"Learn to translate between AP CSP pseudocode and JavaScript"})]}),s.jsxs("div",{className:"progress-bar-container",children:[s.jsxs("div",{className:"progress-label",children:["Overall Progress: ",L.completed," / ",L.total," exercises"]}),s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill apcsp",style:{width:`${L.completed/L.total*100}%`}})})]}),s.jsxs("div",{className:"hub-tabs",children:[s.jsx("button",{className:`hub-tab ${p==="learn"?"active":""}`,onClick:()=>h("learn"),children:"Learn Topics"}),s.jsx("button",{className:`hub-tab ${p==="practice"?"active":""}`,onClick:()=>h("practice"),children:"Practice Exercises"})]}),p==="learn"&&s.jsx("div",{className:"topics-grid",children:bs.map(g=>{const m=A(g.id),k=m.total>0?m.completed/m.total*100:0;return s.jsxs("div",{className:"topic-card",onClick:()=>t(g.id),children:[s.jsx("h3",{children:g.title}),s.jsx("div",{className:"topic-code",children:s.jsx("code",{children:g.pseudocode})}),s.jsx("div",{className:"topic-arrow",children:"↓"}),s.jsx("div",{className:"topic-code js",children:s.jsx("code",{children:g.javascript})}),s.jsxs("p",{className:"topic-explanation",children:[g.explanation.substring(0,100),"..."]}),s.jsxs("div",{className:"topic-progress",children:[s.jsxs("span",{children:[m.completed,"/",m.total," exercises"]}),s.jsx("div",{className:"progress-bar small",children:s.jsx("div",{className:"progress-fill apcsp",style:{width:`${k}%`}})})]})]},g.id)})}),p==="practice"&&s.jsxs("div",{className:"practice-section",children:[s.jsxs("div",{className:"filter-bar",children:[s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Difficulty:"}),s.jsx("select",{value:i,onChange:g=>o(g.target.value),children:j.map(g=>s.jsx("option",{value:g.id,children:g.label},g.id))})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Type:"}),s.jsx("select",{value:l,onChange:g=>c(g.target.value),children:x.map(g=>s.jsx("option",{value:g.id,children:g.label},g.id))})]})]}),s.jsx("div",{className:"exercises-list",children:C.map(g=>{const m=S.has(g.id),k=bs.find(D=>D.id===g.topic);return s.jsxs("div",{className:`exercise-card ${m?"completed":""}`,onClick:()=>n(g.id),children:[s.jsx("div",{className:"exercise-status",children:m?"✓":"○"}),s.jsxs("div",{className:"exercise-content",children:[s.jsx("h4",{children:(k==null?void 0:k.title)||"Unknown Topic"}),s.jsx("p",{className:"exercise-type",children:g.type.replace(/-/g," ")}),s.jsx("p",{className:"exercise-prompt",children:g.prompt})]}),s.jsx("div",{className:`difficulty-badge ${g.difficulty}`,children:g.difficulty})]},g.id)})})]})]})}function kx({topicId:e,onBack:t,onSelectExercise:n}){const[r,i]=I.useState(0),o=bs.findIndex(p=>p.id===e),l=bs[o],c=Et.filter(p=>p.topic===e).slice(0,5);return l?s.jsxs("div",{className:"topic-lesson",children:[s.jsx("button",{className:"back-btn",onClick:t,children:"← Back to Pseudocode Hub"}),s.jsxs("div",{className:"lesson-header",children:[s.jsx("h1",{children:l.title}),s.jsx("p",{children:l.explanation})]}),s.jsxs("div",{className:"comparison-box",children:[s.jsxs("div",{className:"comparison-side pseudocode",children:[s.jsx("h3",{children:"Pseudocode"}),s.jsx("div",{className:"code-panel",children:s.jsx("pre",{children:l.pseudocode})})]}),s.jsxs("div",{className:"comparison-side javascript",children:[s.jsx("h3",{children:"JavaScript"}),s.jsx("div",{className:"code-panel",children:s.jsx("pre",{children:l.javascript})})]})]}),l.examples&&l.examples.length>0&&s.jsxs("div",{className:"examples-list",children:[s.jsx("h3",{children:"Examples"}),l.examples.map((p,h)=>s.jsxs("div",{className:"example-item",children:[s.jsxs("div",{className:"code-panel",children:[s.jsx("div",{className:"code-panel-header given",children:"Pseudocode"}),s.jsx("pre",{children:p.pseudocode})]}),s.jsxs("div",{className:"code-panel",children:[s.jsx("div",{className:"code-panel-header answer",children:"JavaScript"}),s.jsx("pre",{children:p.javascript})]})]},h))]}),l.keyPoints&&l.keyPoints.length>0&&s.jsxs("div",{className:"key-points",children:[s.jsx("h3",{children:"Key Points"}),s.jsx("ul",{children:l.keyPoints.map((p,h)=>s.jsx("li",{children:p},h))})]}),c.length>0&&s.jsxs("div",{className:"related-exercises",children:[s.jsx("h3",{children:"Practice Exercises"}),s.jsx("div",{className:"exercises-list",children:c.map(p=>s.jsxs("div",{className:"exercise-card",onClick:()=>n(p.id),children:[s.jsxs("div",{className:"exercise-content",children:[s.jsx("h4",{children:p.type.replace(/-/g," ")}),s.jsx("p",{className:"exercise-prompt",children:p.prompt})]}),s.jsx("div",{className:`difficulty-badge ${p.difficulty}`,children:p.difficulty})]},p.id))})]})]}):s.jsxs("div",{className:"topic-lesson",children:[s.jsx("button",{className:"back-btn",onClick:t,children:"← Back"}),s.jsxs("div",{className:"error-message",children:[s.jsx("h1",{children:"Topic Not Found"}),s.jsx("p",{children:"This topic doesn't exist."})]})]})}function jx({exerciseId:e,onComplete:t,onBack:n,isCompleted:r,onNextExercise:i,allExerciseIds:o=[],onSubmit:l}){var G,Q,Z;const c=Et.find(H=>H.id===e),p=c?bs.find(H=>H.id===c.topic):null,[h,S]=I.useState(""),[w,x]=I.useState({}),[j,C]=I.useState(!1),[A,L]=I.useState(!1),[g,m]=I.useState(!1),[k,D]=I.useState(0),[_,M]=I.useState(!1),[b,y]=I.useState(0);I.useEffect(()=>{S(""),x({}),C(!1),L(!1),m(!1),D(0),M(!1),y(0)},[e]);const N=(()=>{if(!o||o.length===0){const K=Et.findIndex(ee=>ee.id===e);return K>=0&&K<Et.length-1?Et[K+1].id:null}const H=o.indexOf(e);return H>=0&&H<o.length-1?o[H+1]:null})();if(I.useMemo(()=>{if((c==null?void 0:c.type)!=="fill-blank"||!(c!=null&&c.template))return null;const H=[],K=/___(\w+)___/g;let ee;for(;(ee=K.exec(c.template))!==null;)H.push({id:ee[1],position:ee.index});return H},[c]),!c)return s.jsxs("div",{className:"translation-exercise",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),s.jsxs("div",{className:"error-message",children:[s.jsx("h1",{children:"Exercise Not Found"}),s.jsx("p",{children:"This exercise doesn't exist."})]})]});const P=H=>H.replace(/<--/g,"←").replace(/<-/g,"←").replace(/←/g,"←").replace(/:=/g,"←").replace(/!=/g,"≠").replace(/<>/g,"≠").replace(/>=/g,"≥").replace(/<=/g,"≤").replace(/DISPLAY\s*\(\s*/gi,"DISPLAY(").replace(/DISPLAY\s+([^(\n]+)/gi,"DISPLAY($1)").replace(/\)\s*\)/g,")").replace(/INPUT\s*\(\s*\)/gi,"INPUT()").replace(/\s+/g," ").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/\s*,\s*/g,",").split(`
`).map(K=>K.trim()).filter(K=>K.length>0).join(`
`).trim().toLowerCase(),E=H=>H.replace(/\b(var|const)\b/g,"let").replace(/;+/g,";").replace(/\s+/g," ").replace(/\s*;\s*/g,";").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/;$/gm,"").split(`
`).map(K=>K.trim()).filter(K=>K.length>0).join(`
`).trim().toLowerCase(),f=(H,K,ee)=>{const B=ee?P:E,X=B(H),re=B(K);if(X===re)return!0;const xe=X.replace(/\n/g," ").replace(/\s+/g," "),we=re.replace(/\n/g," ").replace(/\s+/g," ");if(xe===we)return!0;const ye=Je=>Je.replace(/[;\s]/g,"");return ye(X)===ye(re)},z=(H,K)=>{const ee=ye=>ye.toString().toLowerCase().trim().replace(/\s+/g," ").replace(/\s*=\s*/g,"=").replace(/[,;\n]+/g,",").replace(/\s+and\s+/gi,",").replace(/\s*,\s*/g,",").replace(/,+$/,"").replace(/^,+/,""),B=ee(H),X=ee(K);if(B===X)return!0;if(X.includes("=")){const ye=Rt=>{const Lt=Rt.split(",").filter(rn=>rn.includes("="));return new Set(Lt.map(rn=>rn.trim()))},Je=ye(B),Ht=ye(X);if(Je.size===Ht.size){let Rt=!0;if(Ht.forEach(Lt=>{Je.has(Lt)||(Rt=!1)}),Rt)return!0}}const re=B.match(/\d+/g)||[],xe=X.match(/\d+/g)||[];if(re.length===1&&xe.length===1&&re[0]===xe[0])return!0;const we=ye=>ye.replace(/[^a-z0-9]/g,"");return we(B)===we(X)},W=()=>{var ee;let H=!1;const K=c.type==="js-to-pseudocode";if(c.type==="fill-blank"){if(c.blankAnswers)H=Object.entries(c.blankAnswers).every(([B,X])=>{const re=(w[B]||"").trim().toLowerCase();return Array.isArray(X)?X.some(xe=>xe.toLowerCase()===re):X.toLowerCase()===re});else if(c.answer){const B=h.trim().toLowerCase(),X=c.answer.toString().trim().toLowerCase();H=B===X,!H&&c.acceptableAnswers&&(H=c.acceptableAnswers.some(re=>B===re.toString().trim().toLowerCase()))}}else c.type==="trace"||c.type==="multiple-choice"?(H=z(h,c.answer),!H&&c.acceptableAnswers&&(H=c.acceptableAnswers.some(B=>z(h,B)))):(H=f(h,c.answer,K),!H&&c.acceptableAnswers&&(H=c.acceptableAnswers.some(B=>f(h,B,K))));if(L(H),C(!0),H||y(B=>B+1),l){const B=c.type==="fill-blank"&&c.blankAnswers?JSON.stringify(w):h;l({exerciseId:c.id,answer:B,isCorrect:H,exerciseType:"pseudocode",exerciseTitle:((ee=c.prompt)==null?void 0:ee.substring(0,50))||c.id})}H&&!r&&t(c.id,10)},J=()=>{C(!1),L(!1),M(!1)},ne=()=>{N&&i?i(N):n()},F=()=>{var H;k<(((H=c.hints)==null?void 0:H.length)||0)-1&&D(k+1)},V=()=>{if(c.template){const H=c.template.split(/(___\w+___)/g);return s.jsx("div",{className:"fill-blank-container",children:s.jsx("pre",{className:"fill-blank-code",children:H.map((K,ee)=>{const B=K.match(/___(\w+)___/);if(B){const X=B[1];return s.jsx("input",{type:"text",className:`fill-blank-input ${j?A?"correct":"incorrect":""}`,value:w[X]||"",onChange:re=>x({...w,[X]:re.target.value}),placeholder:"...",disabled:j&&A},ee)}return s.jsx("span",{children:K},ee)})})})}if(c.given){const H=c.given.split(/(_{2,})/g);return s.jsx("div",{className:"fill-blank-container",children:s.jsx("pre",{className:"fill-blank-code",children:H.map((K,ee)=>/^_{2,}$/.test(K)?s.jsx("input",{type:"text",className:`fill-blank-input ${j?A?"correct":"incorrect":""}`,value:h,onChange:B=>S(B.target.value),placeholder:"...",disabled:j&&A},ee):s.jsx("span",{children:K},ee))})})}return null};return s.jsxs("div",{className:"translation-exercise",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Pseudocode Hub"}),s.jsxs("div",{className:"exercise-header",children:[s.jsx("h1",{children:(p==null?void 0:p.title)||"Translation Exercise"}),s.jsxs("div",{className:"exercise-meta",children:[s.jsx("span",{className:`difficulty-badge ${c.difficulty}`,children:c.difficulty}),s.jsx("span",{className:"exercise-type-badge",children:c.type.replace(/-/g," ")}),r&&s.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),s.jsx("p",{className:"exercise-prompt-text",children:c.prompt}),c.type==="fill-blank"?V():c.type==="trace"||c.type==="multiple-choice"?s.jsxs("div",{className:"trace-exercise",children:[s.jsxs("div",{className:"code-panel full-width",children:[s.jsx("div",{className:"code-panel-header given",children:(G=c.given)!=null&&G.includes("←")||(Q=c.given)!=null&&Q.includes("DISPLAY")||(Z=c.given)!=null&&Z.includes("REPEAT")?"Pseudocode":"Code"}),s.jsx("div",{className:"code-panel-content",children:s.jsx("pre",{children:c.given})})]}),c.type==="multiple-choice"&&c.options?s.jsx("div",{className:"multiple-choice-options",children:c.options.map((H,K)=>s.jsxs("label",{className:`mc-option ${h===H?"selected":""} ${j?H===c.answer?"correct-answer":h===H&&!A?"wrong-answer":"":""}`,children:[s.jsx("input",{type:"radio",name:"mc-answer",value:H,checked:h===H,onChange:ee=>S(ee.target.value),disabled:j&&A}),s.jsx("span",{children:H})]},K))}):s.jsxs("div",{className:"trace-answer",children:[s.jsx("label",{children:"Your Answer:"}),s.jsx("input",{type:"text",value:h,onChange:H=>S(H.target.value),placeholder:"Enter the result...",disabled:j&&A,className:"trace-input"})]})]}):s.jsxs("div",{className:"code-panels",children:[s.jsxs("div",{className:"code-panel",children:[s.jsx("div",{className:"code-panel-header given",children:c.type==="pseudocode-to-js"?"Pseudocode":"JavaScript"}),s.jsx("div",{className:"code-panel-content",children:s.jsx("pre",{children:c.given})})]}),s.jsxs("div",{className:"code-panel",children:[s.jsx("div",{className:"code-panel-header answer",children:c.type==="pseudocode-to-js"?"Your JavaScript":"Your Pseudocode"}),s.jsx("div",{className:"code-panel-content",children:s.jsx("textarea",{value:h,onChange:H=>S(H.target.value),placeholder:"Type your answer here...",disabled:j&&A})})]})]}),(c.type==="pseudocode-to-js"||c.type==="js-to-pseudocode")&&s.jsx("div",{className:"format-help",children:s.jsxs("details",{children:[s.jsx("summary",{children:"Accepted formats"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("code",{children:"←"})," or ",s.jsx("code",{children:"<--"})," or ",s.jsx("code",{children:"<-"})," for assignment"]}),s.jsxs("li",{children:[s.jsx("code",{children:"DISPLAY(x)"})," or ",s.jsx("code",{children:"DISPLAY x"})," for output"]}),s.jsxs("li",{children:[s.jsx("code",{children:"≠"})," or ",s.jsx("code",{children:"!="})," or ",s.jsx("code",{children:"<>"})," for not equal"]}),s.jsxs("li",{children:[s.jsx("code",{children:"≥"})," or ",s.jsx("code",{children:">="})," and ",s.jsx("code",{children:"≤"})," or ",s.jsx("code",{children:"<="})]}),s.jsx("li",{children:"Spacing and newlines are flexible"})]})]})}),s.jsx("div",{className:"exercise-actions",children:j?s.jsx(s.Fragment,{children:!A&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"action-btn",onClick:J,children:"Try Again"}),(c.type==="pseudocode-to-js"||c.type==="js-to-pseudocode")&&s.jsx("button",{className:"action-btn highlight-btn",onClick:()=>M(!_),children:_?"Hide Errors":"Highlight Errors"}),b>=5&&s.jsx("button",{className:"action-btn skip-btn",onClick:ne,children:"Skip Activity →"})]})}):s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"action-btn",onClick:()=>m(!g),children:g?"Hide Hints":"Show Hints"}),s.jsx("button",{className:"action-btn primary",onClick:W,disabled:c.type==="fill-blank"&&c.blankAnswers?Object.keys(w).length===0:!h.trim(),children:"Check Answer"})]})}),g&&c.hints&&c.hints.length>0&&s.jsxs("div",{className:"hint-box",children:[s.jsx("h4",{children:"Hints"}),s.jsx("ul",{children:c.hints.slice(0,k+1).map((H,K)=>s.jsx("li",{children:H},K))}),k<c.hints.length-1&&s.jsx("button",{className:"action-btn",onClick:F,children:"Show Next Hint"})]}),j&&s.jsx("div",{className:`result-box ${A?"correct":"incorrect"}`,children:A?s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"✓ Correct!"}),s.jsx("p",{children:"Great job! You've mastered this translation."}),N&&i&&s.jsx("button",{className:"action-btn primary next-activity-btn",onClick:()=>i(N),children:"Next Activity →"}),!N&&s.jsx("p",{className:"completion-message",children:"You've completed all exercises in this section!"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"✗ Not Quite"}),s.jsx("p",{children:"Check your answer and try again."}),s.jsxs("p",{className:"attempt-counter",children:["Attempt ",b," of 5",b>=5&&" - You can now skip this activity"]})]})}),j&&!A&&s.jsxs("div",{className:"explanation-box",children:[s.jsx("h4",{children:"Explanation"}),s.jsx("p",{children:c.explanation})]})]})}const Wo=[{id:"trace-1",title:"Simple Counter",code:`count ← 0
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
DISPLAY(sum)`,steps:[{line:1,action:"list ← [3, 7, 2]",variables:{list:[3,7,2],sum:void 0},output:""},{line:2,action:"sum ← 0",variables:{list:[3,7,2],sum:0},output:""},{line:3,action:"FOR EACH item IN list (item=3)",variables:{list:[3,7,2],sum:0,item:3},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:3,item:3},output:""},{line:3,action:"FOR EACH item IN list (item=7)",variables:{list:[3,7,2],sum:3,item:7},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:10,item:7},output:""},{line:3,action:"FOR EACH item IN list (item=2)",variables:{list:[3,7,2],sum:10,item:2},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:12,item:2},output:""},{line:7,action:"DISPLAY(sum)",variables:{list:[3,7,2],sum:12,item:2},output:"12"}]}];function Sx({onBack:e}){const[t,n]=I.useState(Wo[0]),[r,i]=I.useState(0),[o,l]=I.useState(!1),c=t.steps[r],p=Object.keys((c==null?void 0:c.variables)||{}),h=()=>{r<t.steps.length-1&&i(r+1)},S=()=>{r>0&&i(r-1)},w=()=>{i(0),l(!1)};return s.jsxs("div",{className:"code-tracer",children:[s.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ TRACE ]"}),s.jsx("h1",{children:"Code Tracer"}),s.jsx("p",{children:"Step through pseudocode and track variable values"})]}),s.jsxs("div",{className:"tracer-example-select",children:[s.jsx("label",{children:"Select Example:"}),s.jsx("select",{value:t.id,onChange:x=>{const j=Wo.find(C=>C.id===x.target.value);n(j),i(0)},children:Wo.map(x=>s.jsx("option",{value:x.id,children:x.title},x.id))})]}),s.jsxs("div",{className:"tracer-layout",children:[s.jsxs("div",{className:"tracer-code-panel",children:[s.jsx("h3",{children:"Code"}),s.jsx("pre",{className:"tracer-code",children:t.code.split(`
`).map((x,j)=>s.jsxs("div",{className:`code-line ${(c==null?void 0:c.line)===j+1?"current":""}`,children:[s.jsx("span",{className:"line-number",children:j+1}),s.jsx("span",{className:"line-content",children:x})]},j))})]}),s.jsxs("div",{className:"tracer-state-panel",children:[s.jsx("h3",{children:"Variables"}),s.jsxs("table",{className:"trace-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Variable"}),s.jsx("th",{children:"Value"})]})}),s.jsx("tbody",{children:p.map(x=>s.jsxs("tr",{children:[s.jsx("td",{children:x}),s.jsx("td",{children:(c==null?void 0:c.variables[x])===void 0?"—":JSON.stringify(c==null?void 0:c.variables[x])})]},x))})]}),s.jsx("h3",{children:"Output"}),s.jsx("div",{className:"tracer-output",children:s.jsx("pre",{children:(c==null?void 0:c.output)||"(no output yet)"})})]})]}),s.jsxs("div",{className:"tracer-controls",children:[s.jsx("button",{className:"tracer-btn",onClick:w,children:"Reset"}),s.jsx("button",{className:"tracer-btn",onClick:S,disabled:r===0,children:"← Prev"}),s.jsxs("span",{className:"step-counter",children:["Step ",r+1," / ",t.steps.length]}),s.jsx("button",{className:"tracer-btn",onClick:h,disabled:r===t.steps.length-1,children:"Next →"})]}),s.jsxs("div",{className:"current-action",children:[s.jsx("strong",{children:"Current Action:"})," ",c==null?void 0:c.action]})]})}const Yo=[{id:"robot-1",title:"Simple Path",description:"Move the robot to the goal (green square).",gridSize:5,start:{x:0,y:2,direction:"right"},goal:{x:4,y:2},obstacles:[],code:`REPEAT 4 TIMES
{
   MOVE_FORWARD()
}`,solution:["MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD"]},{id:"robot-2",title:"Turn and Move",description:"Navigate around to reach the goal.",gridSize:5,start:{x:0,y:0,direction:"right"},goal:{x:2,y:2},obstacles:[{x:1,y:0},{x:2,y:0}],code:`MOVE_FORWARD()
ROTATE_RIGHT()
MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()`,solution:["MOVE_FORWARD","ROTATE_RIGHT","MOVE_FORWARD","MOVE_FORWARD","ROTATE_LEFT","MOVE_FORWARD"]}];function Cx({onBack:e}){const[t,n]=I.useState(Yo[0]),[r,i]=I.useState(t.start),[o,l]=I.useState(-1),[c,p]=I.useState(!1),h=()=>{i(t.start),l(-1),p(!1)},S=()=>{const j=t.solution;if(o>=j.length-1)return;const C=o+1,A=j[C];let L={...r};if(A==="MOVE_FORWARD")switch(r.direction){case"up":L.y=Math.max(0,r.y-1);break;case"down":L.y=Math.min(t.gridSize-1,r.y+1);break;case"left":L.x=Math.max(0,r.x-1);break;case"right":L.x=Math.min(t.gridSize-1,r.x+1);break}else if(A==="ROTATE_RIGHT"){const g=["up","right","down","left"],m=g.indexOf(r.direction);L.direction=g[(m+1)%4]}else if(A==="ROTATE_LEFT"){const g=["up","right","down","left"],m=g.indexOf(r.direction);L.direction=g[(m+3)%4]}i(L),l(C),L.x===t.goal.x&&L.y===t.goal.y&&p(!0)},w=()=>{h();let j=-1;const C=setInterval(()=>{if(j++,j>=t.solution.length){clearInterval(C);return}S()},500)},x=()=>{const j=[];for(let C=0;C<t.gridSize;C++)for(let A=0;A<t.gridSize;A++){const L=r.x===A&&r.y===C,g=t.goal.x===A&&t.goal.y===C,m=t.obstacles.some(D=>D.x===A&&D.y===C);let k="grid-cell";m&&(k+=" obstacle"),g&&(k+=" goal"),L&&(k+=" robot"),j.push(s.jsxs("div",{className:k,children:[L&&s.jsxs("span",{className:"robot-arrow",children:[r.direction==="up"&&"↑",r.direction==="down"&&"↓",r.direction==="left"&&"←",r.direction==="right"&&"→"]}),g&&!L&&"★"]},`${A}-${C}`))}return j};return s.jsxs("div",{className:"robot-grid-page",children:[s.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ ROBOT ]"}),s.jsx("h1",{children:"Robot Navigation"}),s.jsx("p",{children:"Practice AP CSP robot commands"})]}),s.jsxs("div",{className:"challenge-selector",children:[s.jsx("label",{children:"Challenge:"}),s.jsx("select",{value:t.id,onChange:j=>{const C=Yo.find(A=>A.id===j.target.value);n(C),i(C.start),l(-1),p(!1)},children:Yo.map(j=>s.jsx("option",{value:j.id,children:j.title},j.id))})]}),s.jsx("p",{className:"challenge-desc",children:t.description}),s.jsxs("div",{className:"robot-layout",children:[s.jsx("div",{className:"grid-container",children:s.jsx("div",{className:"robot-grid",style:{gridTemplateColumns:`repeat(${t.gridSize}, 1fr)`,gridTemplateRows:`repeat(${t.gridSize}, 1fr)`},children:x()})}),s.jsxs("div",{className:"code-panel",children:[s.jsx("h3",{children:"Pseudocode"}),s.jsx("pre",{children:t.code})]})]}),s.jsxs("div",{className:"robot-controls",children:[s.jsx("button",{className:"tracer-btn",onClick:h,children:"Reset"}),s.jsx("button",{className:"tracer-btn",onClick:S,disabled:c,children:"Step"}),s.jsx("button",{className:"tracer-btn primary",onClick:w,children:"Run All"})]}),c&&s.jsxs("div",{className:"result-box correct",children:[s.jsx("h3",{children:"✓ Goal Reached!"}),s.jsx("p",{children:"The robot successfully navigated to the goal."})]})]})}function Tx({completedExercises:e=[],onSelectExercise:t,onSelectBuilder:n,onSelectSymbols:r,onBack:i}){const[o,l]=I.useState("all"),[c,p]=I.useState("learn"),h=new Set(e),S=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],w=I.useMemo(()=>qt.filter(j=>!(o!=="all"&&j.difficulty!==o)),[o]),x={completed:h.size,total:qt.length};return s.jsxs("div",{className:"flowchart-hub",children:[s.jsx("button",{className:"back-btn",onClick:i,children:"← Back to Dashboard"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ FLOW ]"}),s.jsx("h1",{children:"Flowcharts"}),s.jsx("p",{children:"Learn to read, interpret, and create flowcharts"})]}),s.jsxs("div",{className:"progress-bar-container",children:[s.jsxs("div",{className:"progress-label",children:["Overall Progress: ",x.completed," / ",x.total," exercises"]}),s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill apcsp",style:{width:`${x.completed/x.total*100}%`}})})]}),s.jsxs("div",{className:"hub-tabs",children:[s.jsx("button",{className:`hub-tab ${c==="learn"?"active":""}`,onClick:()=>p("learn"),children:"Learn Symbols"}),s.jsx("button",{className:`hub-tab ${c==="practice"?"active":""}`,onClick:()=>p("practice"),children:"Practice"}),s.jsx("button",{className:`hub-tab ${c==="builder"?"active":""}`,onClick:()=>p("builder"),children:"Build"})]}),c==="learn"&&s.jsxs("div",{className:"symbols-section",children:[s.jsx("h2",{children:"Flowchart Symbols"}),s.jsx("p",{className:"section-intro",children:"Learn the standard flowchart symbols used in AP CSP."}),s.jsx("div",{className:"symbols-grid",children:zl.map(j=>s.jsxs("div",{className:"symbol-card",style:{borderColor:j.color},children:[s.jsxs("div",{className:"symbol-shape",style:{color:j.color},children:[j.id==="oval"&&"⬭",j.id==="rectangle"&&"▭",j.id==="diamond"&&"◇",j.id==="parallelogram"&&"▱",j.id==="arrow"&&"→"]}),s.jsx("h3",{children:j.name}),s.jsx("p",{className:"symbol-purpose",children:j.purpose}),s.jsx("p",{className:"symbol-desc",children:j.description})]},j.id))}),s.jsx("button",{className:"action-btn",onClick:r,children:"View Full Symbol Guide →"})]}),c==="practice"&&s.jsxs("div",{className:"practice-section",children:[s.jsx("div",{className:"filter-bar",children:s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Difficulty:"}),s.jsx("select",{value:o,onChange:j=>l(j.target.value),children:S.map(j=>s.jsx("option",{value:j.id,children:j.label},j.id))})]})}),s.jsx("div",{className:"exercises-list",children:w.map(j=>{const C=h.has(j.id);return s.jsxs("div",{className:`exercise-card ${C?"completed":""}`,onClick:()=>t(j.id),children:[s.jsx("div",{className:"exercise-status",children:C?"✓":"○"}),s.jsxs("div",{className:"exercise-content",children:[s.jsx("h4",{children:j.title}),s.jsx("p",{className:"exercise-type",children:j.type}),s.jsx("p",{className:"exercise-prompt",children:j.question})]}),s.jsx("div",{className:`difficulty-badge ${j.difficulty}`,children:j.difficulty})]},j.id)})})]}),c==="builder"&&s.jsx("div",{className:"builder-section",children:s.jsxs("div",{className:"builder-intro",children:[s.jsx("h2",{children:"Flowchart Builder"}),s.jsx("p",{children:"Create your own flowcharts using drag-and-drop!"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Drag symbols from the palette onto the canvas"}),s.jsx("li",{children:"Connect nodes with arrows to show flow"}),s.jsx("li",{children:"Edit text inside each shape"}),s.jsx("li",{children:"Export your flowchart as an image"})]}),s.jsx("button",{className:"action-btn primary",onClick:n,children:"Open Flowchart Builder →"})]})})]})}function Nx({onBack:e}){const[t,n]=I.useState(zl[0].id);return s.jsxs("div",{className:"symbol-lesson",children:[s.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ SHAPES ]"}),s.jsx("h1",{children:"Flowchart Symbols"}),s.jsx("p",{children:"Learn the standard flowchart symbols used in AP CSP"})]}),s.jsx("div",{className:"symbols-detail-list",children:zl.map(r=>s.jsxs("div",{className:`symbol-detail-card ${t===r.id?"expanded":""}`,onClick:()=>n(t===r.id?null:r.id),children:[s.jsxs("div",{className:"symbol-header",children:[s.jsxs("div",{className:"symbol-preview",style:{color:r.color},children:[r.id==="oval"&&"⬭",r.id==="rectangle"&&"▭",r.id==="diamond"&&"◇",r.id==="parallelogram"&&"▱",r.id==="arrow"&&"→"]}),s.jsxs("div",{className:"symbol-info",children:[s.jsx("h3",{style:{color:r.color},children:r.name}),s.jsx("p",{children:r.purpose})]}),s.jsx("span",{className:"expand-icon",children:t===r.id?"−":"+"})]}),t===r.id&&s.jsxs("div",{className:"symbol-details",children:[s.jsx("p",{className:"symbol-description",children:r.description}),s.jsxs("div",{className:"symbol-examples",children:[s.jsx("h4",{children:"Examples:"}),s.jsx("ul",{children:r.examples.map((i,o)=>s.jsx("li",{children:i},o))})]})]})]},r.id))}),s.jsxs("div",{className:"symbol-tips",children:[s.jsx("h3",{children:"Tips for Reading Flowcharts"}),s.jsxs("ul",{children:[s.jsxs("li",{children:["Always start at the ",s.jsx("strong",{children:"oval"}),' labeled "Start"']}),s.jsxs("li",{children:["Follow the ",s.jsx("strong",{children:"arrows"})," to determine the order of operations"]}),s.jsxs("li",{children:["At a ",s.jsx("strong",{children:"diamond"}),", evaluate the condition to choose which path to follow"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Rectangles"})," contain actions - execute them in order"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Parallelograms"})," show input/output operations"]}),s.jsxs("li",{children:["End at the ",s.jsx("strong",{children:"oval"}),' labeled "End"']})]})]})]})}function Ex({flowchartId:e,onBack:t}){return s.jsxs("div",{className:"flowchart-viewer",children:[s.jsx("button",{className:"back-btn",onClick:t,children:"← Back to Flowcharts"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("h1",{children:"Flowchart Viewer"}),s.jsx("p",{children:"View and study example flowcharts"})]}),s.jsx("div",{className:"flowchart-display",children:s.jsxs("div",{className:"coming-soon",children:[s.jsx("h2",{children:"Interactive Flowchart Viewer"}),s.jsx("p",{children:"This feature displays interactive flowcharts for studying."}),s.jsxs("p",{children:["Flowchart ID: ",e]})]})})]})}function Px({onBack:e}){var A;const[t,n]=I.useState([{id:"1",type:"oval",label:"Start",x:200,y:50},{id:"2",type:"rectangle",label:"Process",x:200,y:150},{id:"3",type:"oval",label:"End",x:200,y:250}]),[r,i]=I.useState(null),[o,l]=I.useState(null),c=I.useRef({x:0,y:0}),p=I.useRef(null),h=(L,g)=>{var D;L.preventDefault();const m=t.find(_=>_.id===g);if(!m)return;const k=(D=p.current)==null?void 0:D.getBoundingClientRect();k&&(c.current={x:L.clientX-k.left-m.x,y:L.clientY-k.top-m.y},l(g),i(g))},S=I.useCallback(L=>{if(!o||!p.current)return;const g=p.current.getBoundingClientRect(),m=L.clientX-g.left-c.current.x,k=L.clientY-g.top-c.current.y,D=Math.max(0,Math.min(m,g.width-100)),_=Math.max(0,Math.min(k,g.height-50));n(M=>M.map(b=>b.id===o?{...b,x:D,y:_}:b))},[o]),w=I.useCallback(()=>{l(null)},[]),x=L=>{const g={oval:"Start/End",rectangle:"Process",diamond:"Decision?",parallelogram:"Input/Output"},m={id:Date.now().toString(),type:L,label:g[L],x:200+Math.random()*100,y:100+Math.random()*200};n([...t,m])},j=(L,g)=>{n(t.map(m=>m.id===L?{...m,label:g}:m))},C=L=>{n(t.filter(g=>g.id!==L)),i(null)};return s.jsxs("div",{className:"flowchart-builder-page",children:[s.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ BUILD ]"}),s.jsx("h1",{children:"Flowchart Builder"}),s.jsx("p",{children:"Create your own flowcharts"})]}),s.jsxs("div",{className:"builder-layout",children:[s.jsxs("div",{className:"symbol-palette",children:[s.jsx("h3",{children:"Symbols"}),s.jsxs("button",{className:"palette-btn",onClick:()=>x("oval"),children:[s.jsx("span",{className:"symbol-icon",children:"⬭"})," Oval"]}),s.jsxs("button",{className:"palette-btn",onClick:()=>x("rectangle"),children:[s.jsx("span",{className:"symbol-icon",children:"▭"})," Rectangle"]}),s.jsxs("button",{className:"palette-btn",onClick:()=>x("diamond"),children:[s.jsx("span",{className:"symbol-icon",children:"◇"})," Diamond"]}),s.jsxs("button",{className:"palette-btn",onClick:()=>x("parallelogram"),children:[s.jsx("span",{className:"symbol-icon",children:"▱"})," Parallelogram"]})]}),s.jsx("div",{className:"builder-canvas",children:s.jsx("div",{className:"canvas-area",ref:p,onMouseMove:S,onMouseUp:w,onMouseLeave:w,children:t.map(L=>s.jsxs("div",{className:`builder-node ${L.type} ${r===L.id?"selected":""} ${o===L.id?"dragging":""}`,style:{left:L.x,top:L.y},onMouseDown:g=>h(g,L.id),children:[L.type==="oval"&&s.jsx("span",{className:"node-shape oval-shape",children:L.label}),L.type==="rectangle"&&s.jsx("span",{className:"node-shape rect-shape",children:L.label}),L.type==="diamond"&&s.jsx("span",{className:"node-shape diamond-shape",children:L.label}),L.type==="parallelogram"&&s.jsx("span",{className:"node-shape para-shape",children:L.label})]},L.id))})}),r&&s.jsxs("div",{className:"node-editor",children:[s.jsx("h3",{children:"Edit Node"}),s.jsx("input",{type:"text",value:((A=t.find(L=>L.id===r))==null?void 0:A.label)||"",onChange:L=>j(r,L.target.value),placeholder:"Enter label..."}),s.jsx("button",{className:"action-btn",onClick:()=>C(r),children:"Delete Node"})]})]}),s.jsx("div",{className:"builder-tips",children:s.jsx("p",{children:"Click a symbol to add it. Drag nodes to move them. Click a node to edit or delete it."})})]})}function Ax({exerciseId:e,onComplete:t,onBack:n,isCompleted:r,onNextExercise:i,allExerciseIds:o=[],onSubmit:l}){const c=qt.find(P=>P.id===e),[p,h]=I.useState(""),[S,w]=I.useState(!1),[x,j]=I.useState(!1),[C,A]=I.useState(!1),[L,g]=I.useState(0),[m,k]=I.useState(0);I.useEffect(()=>{h(""),w(!1),j(!1),A(!1),g(0),k(0)},[e]);const _=(()=>{if(!o||o.length===0){const E=qt.findIndex(f=>f.id===e);return E>=0&&E<qt.length-1?qt[E+1].id:null}const P=o.indexOf(e);return P>=0&&P<o.length-1?o[P+1]:null})(),M=I.useMemo(()=>c!=null&&c.flowchartRef?W0.find(P=>P.id===c.flowchartRef):null,[c]);if(!c)return s.jsxs("div",{className:"flowchart-exercise",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),s.jsx("div",{className:"error-message",children:s.jsx("h1",{children:"Exercise Not Found"})})]});const b=(P,E)=>{const f=Q=>Q.toString().toLowerCase().trim().replace(/\s+/g," ").replace(/\s*=\s*/g,"=").replace(/[,;\n]+/g,",").replace(/\s*,\s*/g,","),z=f(P),W=f(E);if(z===W)return!0;if(W.includes("=")){const Q=K=>{const ee=K.split(",").filter(B=>B.includes("="));return new Set(ee.map(B=>B.trim()))},Z=Q(z),H=Q(W);if(Z.size===H.size){let K=!0;if(H.forEach(ee=>{Z.has(ee)||(K=!1)}),K)return!0}}const J=z.match(/\d+/g)||[],ne=W.match(/\d+/g)||[];if(J.length===1&&ne.length===1&&J[0]===ne[0])return!0;const F=Q=>Q.replace(/[^a-z0-9]/g,"");if(F(z)===F(W))return!0;const G=W.split(/[\s()]+/).filter(Q=>Q.length>0)[0];return!!(z.includes(G)||G.includes(z))},y=()=>{var E;let P=b(p,c.answer);!P&&c.acceptableAnswers&&(P=c.acceptableAnswers.some(f=>b(p,f))),j(P),w(!0),P||k(f=>f+1),l&&l({exerciseId:c.id,answer:p,isCorrect:P,exerciseType:"flowchart",exerciseTitle:((E=c.question)==null?void 0:E.substring(0,50))||c.id}),P&&!r&&t(c.id,10)},T=()=>{w(!1),j(!1)},N=()=>{_&&i?i(_):n()};return s.jsxs("div",{className:"flowchart-exercise",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Flowcharts"}),s.jsxs("div",{className:"exercise-header",children:[s.jsx("h1",{children:c.title}),s.jsxs("div",{className:"exercise-meta",children:[s.jsx("span",{className:`difficulty-badge ${c.difficulty}`,children:c.difficulty}),s.jsx("span",{className:"exercise-type-badge",children:c.type}),r&&s.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),s.jsx("p",{className:"exercise-description",children:c.description}),M&&s.jsxs("div",{className:"flowchart-reference",children:[s.jsx("h3",{children:"Flowchart"}),s.jsx(Ex,{flowchartData:M,showBackButton:!1})]}),s.jsxs("div",{className:"flowchart-question",children:[s.jsx("h3",{children:"Question"}),s.jsx("p",{className:"question-text",children:c.question})]}),s.jsxs("div",{className:"answer-section",children:[s.jsx("label",{children:"Your Answer:"}),s.jsx("input",{type:"text",value:p,onChange:P=>h(P.target.value),placeholder:"Type your answer...",disabled:S&&x,onKeyPress:P=>P.key==="Enter"&&p.trim()&&y()})]}),s.jsx("div",{className:"exercise-actions",children:S?s.jsx(s.Fragment,{children:!x&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"action-btn",onClick:T,children:"Try Again"}),m>=5&&s.jsx("button",{className:"action-btn skip-btn",onClick:N,children:"Skip Activity →"})]})}):s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"action-btn",onClick:()=>A(!C),children:C?"Hide Hints":"Show Hints"}),s.jsx("button",{className:"action-btn primary",onClick:y,disabled:!p.trim(),children:"Check Answer"})]})}),C&&c.hints&&c.hints.length>0&&s.jsxs("div",{className:"hint-box",children:[s.jsx("h4",{children:"Hints"}),s.jsx("ul",{children:c.hints.slice(0,L+1).map((P,E)=>s.jsx("li",{children:P},E))}),L<c.hints.length-1&&s.jsx("button",{className:"action-btn",onClick:()=>g(L+1),children:"Show Next Hint"})]}),S&&s.jsx("div",{className:`result-box ${x?"correct":"incorrect"}`,children:x?s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"✓ Correct!"}),s.jsx("p",{children:"You correctly interpreted the flowchart."}),_&&i&&s.jsx("button",{className:"action-btn primary next-activity-btn",onClick:()=>i(_),children:"Next Activity →"}),!_&&s.jsx("p",{className:"completion-message",children:"You've completed all flowchart exercises!"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"✗ Not Quite"}),s.jsx("p",{children:"Check your answer and try again."}),s.jsxs("p",{className:"attempt-counter",children:["Attempt ",m," of 5",m>=5&&" - You can now skip this activity"]})]})}),S&&c.explanation&&s.jsxs("div",{className:"explanation-box",children:[s.jsx("h4",{children:"Explanation"}),s.jsx("p",{children:c.explanation})]})]})}function Ix({weekKey:e,onSelectExercise:t,onBack:n,completedExercises:r}){const i=jm[e],o=e.replace("week","");if(!i)return s.jsxs("div",{className:"week-view",children:[s.jsx("button",{className:"back-button",onClick:n,children:"← Back to Dashboard"}),s.jsx("p",{children:"Week not found"})]});const l=h=>`difficulty difficulty-${h.toLowerCase()}`,c=h=>h.isCapstone?"🏆":h.isProject?"🎮":h.requiresNode?"⚙️":"",p=h=>h.isCapstone?s.jsx("span",{className:"capstone-badge",children:"Capstone"}):h.isProject?s.jsx("span",{className:"project-badge",children:"Project"}):h.requiresNode?s.jsx("span",{className:"node-badge",children:"Node.js"}):null;return s.jsxs("div",{className:"week-view data-apis-week",children:[s.jsx("button",{className:"back-button",onClick:n,children:"← Back to Dashboard"}),s.jsxs("div",{className:"week-header-large",children:[s.jsxs("h1",{children:["Week ",o,": ",i.title]}),s.jsx("p",{className:"big-idea",children:i.bigIdea})]}),s.jsxs("div",{className:"learning-objectives",children:[s.jsx("h3",{children:"Learning Objectives"}),s.jsx("ul",{children:i.learningObjectives&&i.learningObjectives.map((h,S)=>s.jsx("li",{children:h},S))})]}),s.jsx("div",{className:"days-list",children:i.days.map(h=>s.jsxs("div",{className:"day-section",children:[s.jsxs("div",{className:"day-header",children:[s.jsxs("h2",{children:["Day ",h.day,": ",h.title]}),s.jsx("p",{className:"day-objective",children:h.objective})]}),s.jsx("div",{className:"exercises-grid",children:h.exercises.map(S=>{const w=r.includes(S.id);return s.jsxs("div",{className:`exercise-card ${w?"completed":""} ${S.isProject?"project-card":""} ${S.isCapstone?"capstone-card":""}`,onClick:()=>t(S.id),children:[s.jsxs("div",{className:"exercise-header",children:[s.jsx("span",{className:l(S.difficulty),children:S.difficulty}),s.jsxs("span",{className:"points",children:[S.points," pts"]})]}),s.jsxs("h3",{className:"exercise-title",children:[c(S)," ",S.title]}),s.jsx("p",{className:"exercise-description",children:S.description}),s.jsx("div",{className:"exercise-badges",children:p(S)}),w&&s.jsx("div",{className:"completed-badge",children:"✓ Completed"})]},S.id)})}),h.exitTicket&&s.jsxs("div",{className:"exit-ticket",children:[s.jsx("strong",{children:"Exit Ticket:"})," ",h.exitTicket]})]},h.day))})]})}const Kt={week1:{title:"Fetching & Displaying Data",terms:[{id:"json",term:"JSON",definition:"JavaScript Object Notation - a lightweight text format for storing and exchanging data between systems.",example:'{"name": "Alice", "age": 25, "hobbies": ["coding", "music"]}',relatedTerms:["parse","stringify","object"],week:1,day:1},{id:"parse",term:"Parse",definition:"Converting a JSON string into a JavaScript object that can be used in code.",example:`let obj = JSON.parse('{"name": "Alice"}'); // obj.name = "Alice"`,relatedTerms:["json","stringify"],week:1,day:1},{id:"stringify",term:"Stringify",definition:"Converting a JavaScript object into a JSON string for storage or transmission.",example:`let str = JSON.stringify({name: "Alice"}); // '{"name":"Alice"}'`,relatedTerms:["json","parse"],week:1,day:1},{id:"key-value-pair",term:"Key-Value Pair",definition:"A property name (key) and its associated data (value) in JSON or JavaScript objects.",example:'"name": "Alice" - "name" is the key, "Alice" is the value',relatedTerms:["json","object"],week:1,day:1},{id:"nested-data",term:"Nested Data",definition:"Objects or arrays contained inside other objects or arrays, creating hierarchical data structures.",example:'{"user": {"address": {"city": "Seattle"}}} // Access: data.user.address.city',relatedTerms:["json","object","array"],week:1,day:1},{id:"data-type",term:"Data Type",definition:"The classification of data that determines what values it can hold (string, number, boolean, array, object, null).",example:'string: "hello", number: 42, boolean: true, array: [1,2,3], object: {}, null: null',relatedTerms:["json"],week:1,day:1},{id:"api",term:"API",definition:"Application Programming Interface - a set of rules that allows different software applications to communicate with each other.",example:"Weather API provides weather data; your app sends a request and receives temperature, conditions, etc.",relatedTerms:["fetch","endpoint","request","response"],week:1,day:2},{id:"fetch",term:"fetch()",definition:"A JavaScript function that makes HTTP requests to retrieve data from URLs/APIs.",example:"fetch('https://api.example.com/data').then(response => response.json())",relatedTerms:["api","promise","async"],week:1,day:2},{id:"promise",term:"Promise",definition:"An object representing an operation that will complete in the future, either successfully (fulfilled) or with an error (rejected).",example:"fetch() returns a Promise that resolves when data arrives",relatedTerms:["async","await","then"],week:1,day:2},{id:"then",term:".then()",definition:"A method used to handle the result of a Promise when it completes successfully.",example:"fetch(url).then(response => response.json()).then(data => console.log(data))",relatedTerms:["promise","callback","async"],week:1,day:2},{id:"response",term:"Response",definition:"The data returned from a server after making a request, including status code, headers, and body.",example:"response.ok // true if status 200-299; response.json() // parse body as JSON",relatedTerms:["request","fetch","status-code"],week:1,day:2},{id:"callback",term:"Callback",definition:"A function passed as an argument to another function, to be executed later when an operation completes.",example:".then(data => { console.log(data); }) // Arrow function is the callback",relatedTerms:["promise","async"],week:1,day:2},{id:"asynchronous",term:"Asynchronous",definition:"Code that doesn't block execution - other code can run while waiting for an operation to complete.",example:"fetch() is asynchronous - code after it runs while waiting for the server response",relatedTerms:["synchronous","async","await"],week:1,day:3},{id:"synchronous",term:"Synchronous",definition:"Code that runs line by line, with each line waiting for the previous one to complete before executing.",example:"let x = 1; let y = 2; let z = x + y; // Each line waits for the previous",relatedTerms:["asynchronous"],week:1,day:3},{id:"async",term:"async",definition:"A keyword that marks a function as asynchronous, allowing the use of await inside it.",example:"async function loadData() { ... }",relatedTerms:["await","promise","asynchronous"],week:1,day:3},{id:"await",term:"await",definition:"A keyword that pauses an async function until a Promise resolves, then returns the result.",example:"let data = await fetch(url).then(r => r.json()); // Waits for fetch to complete",relatedTerms:["async","promise"],week:1,day:3},{id:"try-catch",term:"try/catch",definition:"A JavaScript structure for handling errors - code in 'try' runs, and if it fails, 'catch' handles the error.",example:"try { riskyCode(); } catch (error) { console.log('Error:', error.message); }",relatedTerms:["error","throw"],week:1,day:4},{id:"throw",term:"throw",definition:"A keyword used to manually trigger an error, which can be caught by a catch block.",example:"if (!data) throw new Error('Data not found');",relatedTerms:["try-catch","error"],week:1,day:4},{id:"error-object",term:"Error Object",definition:"A JavaScript object containing information about an error, including message and stack trace.",example:"catch (error) { console.log(error.message); // 'Network error' }",relatedTerms:["try-catch","throw"],week:1,day:4},{id:"status-code",term:"Status Code",definition:"A three-digit HTTP response number indicating the result of a request (200=OK, 404=Not Found, 500=Server Error).",example:"if (response.status === 404) { throw new Error('Not found'); }",relatedTerms:["response","http"],week:1,day:4},{id:"graceful-degradation",term:"Graceful Degradation",definition:"Designing an application to continue functioning (with reduced features) when errors occur.",example:"If weather API fails, show cached data or 'Data unavailable' instead of crashing",relatedTerms:["error-handling"],week:1,day:4}]},week2:{title:"Live Data & Visualization",terms:[{id:"setinterval",term:"setInterval()",definition:"A function that runs specified code repeatedly at set time intervals (in milliseconds).",example:"setInterval(updateData, 5000); // Runs updateData every 5 seconds",relatedTerms:["clearinterval","polling"],week:2,day:6},{id:"clearinterval",term:"clearInterval()",definition:"A function that stops a running interval using its ID.",example:"let id = setInterval(func, 1000); clearInterval(id); // Stops the interval",relatedTerms:["setinterval"],week:2,day:6},{id:"interval-id",term:"Interval ID",definition:"A unique number returned by setInterval() used to identify and stop that specific interval.",example:"let intervalId = setInterval(func, 1000); // intervalId is a number like 42",relatedTerms:["setinterval","clearinterval"],week:2,day:6},{id:"polling",term:"Polling",definition:"Repeatedly checking for new data at regular intervals by making periodic API requests.",example:"Check ISS position every 5 seconds by calling the API in a setInterval",relatedTerms:["setinterval","real-time"],week:2,day:6},{id:"real-time",term:"Real-time",definition:"Data that updates as changes happen, providing current information without manual refresh.",example:"Stock prices updating every second, live sports scores",relatedTerms:["polling","setinterval"],week:2,day:6},{id:"refresh-rate",term:"Refresh Rate",definition:"How frequently data is updated, typically measured in seconds or milliseconds.",example:"A 5-second refresh rate means new data is fetched every 5 seconds",relatedTerms:["polling","setinterval"],week:2,day:6},{id:"leaflet",term:"Leaflet.js",definition:"An open-source JavaScript library for creating interactive, mobile-friendly maps.",example:"let map = L.map('mapDiv').setView([47.6, -122.3], 13);",relatedTerms:["latitude","longitude","marker"],week:2,day:7},{id:"latitude",term:"Latitude",definition:"The north-south position on Earth, measured in degrees from -90 (South Pole) to 90 (North Pole).",example:"Seattle's latitude is approximately 47.6 degrees north",relatedTerms:["longitude","coordinates"],week:2,day:7},{id:"longitude",term:"Longitude",definition:"The east-west position on Earth, measured in degrees from -180 to 180, with 0 at the Prime Meridian.",example:"Seattle's longitude is approximately -122.3 degrees west",relatedTerms:["latitude","coordinates"],week:2,day:7},{id:"marker",term:"Marker",definition:"A visual indicator placed on a map at specific coordinates to show a location.",example:"L.marker([47.6, -122.3]).addTo(map).bindPopup('Seattle');",relatedTerms:["leaflet","popup"],week:2,day:7},{id:"popup",term:"Popup",definition:"A small information window that appears when clicking or hovering over a map marker.",example:"marker.bindPopup('<b>Seattle</b><br>The Emerald City');",relatedTerms:["marker","leaflet"],week:2,day:7},{id:"tile-layer",term:"Tile Layer",definition:"The background map images loaded in tiles (small squares) that make up the visible map.",example:"L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);",relatedTerms:["leaflet"],week:2,day:7},{id:"geojson",term:"GeoJSON",definition:"A JSON format specifically designed for encoding geographic data structures.",example:'{"type": "Point", "coordinates": [-122.3, 47.6]}',relatedTerms:["json","leaflet"],week:2,day:7},{id:"chartjs",term:"Chart.js",definition:"A JavaScript library for creating responsive, animated charts and graphs.",example:"new Chart(ctx, { type: 'bar', data: {...}, options: {...} });",relatedTerms:["dataset","labels","canvas"],week:2,day:8},{id:"dataset",term:"Dataset",definition:"A collection of data values to be displayed in a chart, along with styling options.",example:"datasets: [{ label: 'Sales', data: [10, 20, 30], backgroundColor: 'blue' }]",relatedTerms:["chartjs","labels"],week:2,day:8},{id:"labels",term:"Labels",definition:"Text identifying data points in a chart, typically shown on the x-axis.",example:"labels: ['January', 'February', 'March']",relatedTerms:["chartjs","dataset"],week:2,day:8},{id:"legend",term:"Legend",definition:"A key explaining what different colors, lines, or markers represent in a chart.",example:"The legend shows 'Temperature' in red and 'Humidity' in blue",relatedTerms:["chartjs"],week:2,day:8},{id:"axes",term:"Axes",definition:"The x (horizontal) and y (vertical) reference lines in a chart that define the scale.",example:"options: { scales: { y: { beginAtZero: true } } }",relatedTerms:["chartjs"],week:2,day:8},{id:"promise-all",term:"Promise.all()",definition:"Runs multiple promises simultaneously and returns when ALL complete (fails if any fails).",example:"let [a, b] = await Promise.all([fetch(url1), fetch(url2)]);",relatedTerms:["promise","promise-allsettled"],week:2,day:9},{id:"promise-allsettled",term:"Promise.allSettled()",definition:"Runs multiple promises and returns results for all, even if some fail.",example:"let results = await Promise.allSettled([fetch(url1), fetch(url2)]); // [{status:'fulfilled'}, {status:'rejected'}]",relatedTerms:["promise","promise-all"],week:2,day:9},{id:"parallel-loading",term:"Parallel Loading",definition:"Fetching multiple resources at the same time rather than one after another.",example:"Using Promise.all() to load weather, news, and stock data simultaneously",relatedTerms:["sequential-loading","promise-all"],week:2,day:9},{id:"sequential-loading",term:"Sequential Loading",definition:"Fetching resources one after another, waiting for each to complete before starting the next.",example:"await fetch(url1); await fetch(url2); // Slower than parallel",relatedTerms:["parallel-loading"],week:2,day:9},{id:"data-aggregation",term:"Data Aggregation",definition:"Combining data from multiple sources into a unified display or dataset.",example:"A dashboard showing weather from one API and news from another",relatedTerms:["dashboard"],week:2,day:9},{id:"dashboard",term:"Dashboard",definition:"A single display showing multiple data visualizations and information panels.",example:"A weather dashboard with map, forecast chart, and current conditions",relatedTerms:["data-aggregation","chartjs","leaflet"],week:2,day:9}]},week3:{title:"Server-Side JavaScript",terms:[{id:"nodejs",term:"Node.js",definition:"A JavaScript runtime that allows running JavaScript code outside of a web browser, typically on servers.",example:"Run 'node server.js' in terminal to execute JavaScript server-side",relatedTerms:["runtime","npm"],week:3,day:11},{id:"runtime",term:"Runtime",definition:"The environment where code executes, providing necessary resources and APIs.",example:"Browser runtime has 'document' and 'window'; Node.js runtime has 'fs' and 'process'",relatedTerms:["nodejs"],week:3,day:11},{id:"npm",term:"npm",definition:"Node Package Manager - a tool for installing, managing, and sharing JavaScript packages.",example:"npm install express // Installs the Express package",relatedTerms:["package-json","nodejs"],week:3,day:11},{id:"package-json",term:"package.json",definition:"A file that describes a Node.js project, including its name, version, scripts, and dependencies.",example:'{"name": "my-app", "dependencies": {"express": "^4.18.0"}}',relatedTerms:["npm","dependencies"],week:3,day:11},{id:"module",term:"Module",definition:"A reusable piece of code that can be imported into other files using require() or import.",example:"const express = require('express'); // Imports the express module",relatedTerms:["require","npm"],week:3,day:11},{id:"require",term:"require()",definition:"A Node.js function used to import modules, packages, or local files.",example:"const fs = require('fs'); // Built-in module; const myFile = require('./myFile'); // Local file",relatedTerms:["module","nodejs"],week:3,day:11},{id:"terminal",term:"Terminal/CLI",definition:"A text-based interface for running commands on your computer.",example:"Open terminal, type 'node app.js', press Enter to run your code",relatedTerms:["nodejs"],week:3,day:11},{id:"express",term:"Express.js",definition:"A minimal and flexible web framework for Node.js that simplifies building web servers and APIs.",example:"const app = express(); app.get('/', (req, res) => res.send('Hello'));",relatedTerms:["nodejs","route","middleware"],week:3,day:12},{id:"server",term:"Server",definition:"A program that listens for incoming requests and sends back responses, running continuously.",example:"app.listen(3000) starts a server on port 3000",relatedTerms:["express","port"],week:3,day:12},{id:"route",term:"Route",definition:"A URL path that the server responds to, combined with an HTTP method.",example:"app.get('/about', handler) // Responds to GET requests at /about",relatedTerms:["express","endpoint"],week:3,day:12},{id:"request-object",term:"Request (req)",definition:"An object containing all information about an incoming HTTP request (URL, headers, body, parameters).",example:"req.params.id // URL parameter; req.query.search // Query string; req.body // POST data",relatedTerms:["response-object","express"],week:3,day:12},{id:"response-object",term:"Response (res)",definition:"An object used to send data back to the client, including status codes and body content.",example:"res.json({data: 'hello'}); res.status(404).send('Not found');",relatedTerms:["request-object","express"],week:3,day:12},{id:"port",term:"Port",definition:"A number identifying where a server listens for connections (like an apartment number for the internet).",example:"app.listen(3000) // Server listens on port 3000, access at localhost:3000",relatedTerms:["server"],week:3,day:12},{id:"middleware",term:"Middleware",definition:"Functions that run between receiving a request and sending a response, processing or modifying data.",example:"app.use(express.json()); // Middleware that parses JSON request bodies",relatedTerms:["express"],week:3,day:12},{id:"url-parameter",term:"URL Parameter",definition:"A dynamic value embedded in the URL path, defined with a colon in the route.",example:"app.get('/users/:id', ...) // req.params.id captures the value",relatedTerms:["query-string","route"],week:3,day:13},{id:"query-string",term:"Query String",definition:"Key-value pairs appended to a URL after a question mark, used for optional parameters.",example:"/search?q=javascript&limit=10 // req.query = {q: 'javascript', limit: '10'}",relatedTerms:["url-parameter"],week:3,day:13},{id:"request-body",term:"Request Body",definition:"Data sent with POST/PUT requests, typically containing form data or JSON.",example:"fetch(url, {method: 'POST', body: JSON.stringify({name: 'Alice'})})",relatedTerms:["post","json"],week:3,day:13},{id:"post",term:"POST",definition:"An HTTP method used to send data to a server, typically to create new resources.",example:"app.post('/users', (req, res) => { // Create new user from req.body })",relatedTerms:["get","put","delete","crud"],week:3,day:13},{id:"put",term:"PUT",definition:"An HTTP method used to update existing resources on a server.",example:"app.put('/users/:id', (req, res) => { // Update user with req.body })",relatedTerms:["post","crud"],week:3,day:13},{id:"delete-method",term:"DELETE",definition:"An HTTP method used to remove resources from a server.",example:"app.delete('/users/:id', (req, res) => { // Delete user by id })",relatedTerms:["crud"],week:3,day:13},{id:"crud",term:"CRUD",definition:"The four basic database operations: Create, Read, Update, Delete.",example:"POST=Create, GET=Read, PUT=Update, DELETE=Delete",relatedTerms:["post","get","put","delete-method"],week:3,day:13},{id:"database",term:"Database",definition:"An organized system for storing, retrieving, and managing data that persists beyond program execution.",example:"NeDB stores data in a file; MongoDB stores in a server; both persist data",relatedTerms:["nedb","collection","document"],week:3,day:14},{id:"persistent-storage",term:"Persistent Storage",definition:"Data storage that survives program restarts, unlike variables which are lost when the program stops.",example:"Database files, localStorage, and files on disk are persistent; RAM is not",relatedTerms:["database"],week:3,day:14},{id:"nedb",term:"NeDB",definition:"A lightweight, embedded NoSQL database for Node.js that stores data in local files.",example:"const db = new Datastore({filename: 'data.db', autoload: true});",relatedTerms:["database","document"],week:3,day:14},{id:"collection",term:"Collection",definition:"A group of related database records, similar to a table in SQL databases.",example:"A 'users' collection contains all user documents",relatedTerms:["database","document"],week:3,day:14},{id:"document",term:"Document",definition:"A single record in a NoSQL database, typically a JavaScript object with an _id field.",example:'{_id: "abc123", name: "Alice", email: "alice@mail.com"}',relatedTerms:["collection","nedb"],week:3,day:14},{id:"query",term:"Query",definition:"A request to find specific data in a database using criteria or filters.",example:"db.find({age: {$gt: 18}}) // Find documents where age > 18",relatedTerms:["database","crud"],week:3,day:14},{id:"insert",term:"Insert",definition:"Adding a new document/record to a database collection.",example:"db.insert({name: 'Alice'}, callback) // Adds new document",relatedTerms:["crud","database"],week:3,day:14}]},week4:{title:"APIs with Keys & Deployment",terms:[{id:"environment-variable",term:"Environment Variable",definition:"A variable set outside the code that's available to the running program, used for configuration and secrets.",example:"process.env.API_KEY // Reads API_KEY from the environment",relatedTerms:["dotenv","env-file"],week:4,day:16},{id:"env-file",term:".env File",definition:"A file containing environment variables in KEY=value format, loaded at application start.",example:"API_KEY=abc123\\nPORT=3000\\nDEBUG=true",relatedTerms:["environment-variable","dotenv"],week:4,day:16},{id:"dotenv",term:"dotenv",definition:"An npm package that loads environment variables from a .env file into process.env.",example:"require('dotenv').config(); // Now process.env.API_KEY works",relatedTerms:["environment-variable","env-file"],week:4,day:16},{id:"secret",term:"Secret",definition:"Sensitive data like API keys, passwords, or tokens that must not be exposed in code.",example:"API keys, database passwords, JWT secrets, OAuth tokens",relatedTerms:["environment-variable","gitignore"],week:4,day:16},{id:"gitignore",term:".gitignore",definition:"A file that tells Git which files/folders to exclude from version control.",example:".env\\nnode_modules/\\n*.log // These won't be committed to Git",relatedTerms:["secret","env-file"],week:4,day:16},{id:"configuration",term:"Configuration",definition:"Settings that change between environments (development, testing, production).",example:"Database URL, API keys, debug mode, port numbers",relatedTerms:["environment-variable"],week:4,day:16},{id:"api-key",term:"API Key",definition:"A secret code that identifies your application to an API, often required for access or tracking usage.",example:"appid=abc123def456 // Added to API requests for authentication",relatedTerms:["secret","proxy"],week:4,day:17},{id:"proxy",term:"Proxy",definition:"A server that makes requests on behalf of another client, often used to hide secrets.",example:"Browser → Your Server (adds API key) → External API",relatedTerms:["api-key","server-side"],week:4,day:17},{id:"client-side",term:"Client-side",definition:"Code that runs in the user's browser, visible and accessible to users.",example:"JavaScript in HTML files, React apps - users can view source code",relatedTerms:["server-side"],week:4,day:17},{id:"server-side",term:"Server-side",definition:"Code that runs on your server, hidden from users and able to access secrets.",example:"Node.js/Express code - users cannot see this code or its variables",relatedTerms:["client-side","proxy"],week:4,day:17},{id:"endpoint",term:"Endpoint",definition:"A specific URL path that handles requests, part of an API.",example:"/api/weather is an endpoint; /api/users/:id is another endpoint",relatedTerms:["route","api"],week:4,day:17},{id:"forward",term:"Forward",definition:"Passing a request from one place to another, typically from proxy to external API.",example:"Proxy receives /api/weather, forwards to api.openweathermap.org",relatedTerms:["proxy"],week:4,day:17},{id:"cors",term:"CORS",definition:"Cross-Origin Resource Sharing - security rules that control which websites can make requests to your API.",example:"Browser blocks requests to different domains unless CORS headers allow it",relatedTerms:["proxy"],week:4,day:17},{id:"deployment",term:"Deployment",definition:"The process of making an application available on the internet for users to access.",example:"Uploading code to Glitch, Render, or Vercel to make it publicly accessible",relatedTerms:["hosting","production"],week:4,day:18},{id:"hosting",term:"Hosting",definition:"A service that runs your application on servers connected to the internet 24/7.",example:"Glitch, Render, Heroku, AWS - services that host your app",relatedTerms:["deployment","production"],week:4,day:18},{id:"production",term:"Production",definition:"The live, deployed version of your application that real users access.",example:"https://myapp.glitch.me is the production URL",relatedTerms:["development","deployment"],week:4,day:18},{id:"development",term:"Development",definition:"The local version of your application used for testing and building features.",example:"http://localhost:3000 is your development environment",relatedTerms:["production"],week:4,day:18},{id:"domain",term:"Domain",definition:"The URL address where your application can be accessed on the internet.",example:"myapp.glitch.me, example.com, weather-app.onrender.com",relatedTerms:["deployment","hosting"],week:4,day:18},{id:"build",term:"Build",definition:"The process of preparing code for production, often including optimization and bundling.",example:"npm run build // Creates optimized production files",relatedTerms:["deployment"],week:4,day:18}]}};function Wa(){return[...Kt.week1.terms,...Kt.week2.terms,...Kt.week3.terms,...Kt.week4.terms]}function Dx(e){var n;const t=`week${e}`;return((n=Kt[t])==null?void 0:n.terms)||[]}function Rx(e){return Wa().find(n=>n.id===e)}function Lx(e){const t=Wa(),n=e.toLowerCase();return t.filter(r=>r.term.toLowerCase().includes(n)||r.definition.toLowerCase().includes(n))}function _x(){return{total:Wa().length,week1:Kt.week1.terms.length,week2:Kt.week2.terms.length,week3:Kt.week3.terms.length,week4:Kt.week4.terms.length}}const Vo=e=>new Promise((t,n)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}const i=document.createElement("script");i.src=e,i.async=!0,i.onload=t,i.onerror=n,document.head.appendChild(i)}),Ox=e=>new Promise(t=>{if(document.querySelector(`link[href="${e}"]`)){t();return}const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=t,document.head.appendChild(r)});function Mx({exerciseId:e,onBack:t,onComplete:n,isCompleted:r,onSubmit:i}){const o=Y0(e),[l,c]=I.useState(""),[p,h]=I.useState(""),[S,w]=I.useState("client"),[x,j]=I.useState([]),[C,A]=I.useState(!1),[L,g]=I.useState(!1),[m,k]=I.useState(""),[D,_]=I.useState(null),[M,b]=I.useState(!1);I.useRef(null);const y=I.useRef(null);if(I.useEffect(()=>{o&&(c(o.starterCode||""),h(o.serverCode||""),j([]),A(!1),k(""),w(o.requiresNode?"server":"client"))},[e,o]),I.useEffect(()=>{o&&(async()=>{var V,G;try{o!=null&&o.requiresNode||await Vo("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"),(V=o==null?void 0:o.libraries)!=null&&V.includes("chartjs")&&await Vo("https://cdn.jsdelivr.net/npm/chart.js"),(G=o==null?void 0:o.libraries)!=null&&G.includes("leaflet")&&(await Ox("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),await Vo("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js")),b(!0)}catch(Q){console.error("Failed to load scripts:",Q)}})()},[o]),!o)return s.jsxs("div",{className:"exercise-detail",children:[s.jsx("button",{className:"back-button",onClick:t,children:"← Back"}),s.jsx("p",{children:"Exercise not found"})]});const T=()=>{if(g(!0),k(""),o.requiresNode)k(`
=== Node.js Exercise ===

This exercise requires Node.js to run on your computer.

Steps to run:
1. Create a new folder for your project
2. Copy the server code to "server.js"
3. Run: npm init -y
4. Run: npm install express nedb dotenv
5. Run: node server.js
6. Open http://localhost:3000 in your browser

Your server code is ready in the "Server" tab.
      `.trim());else try{const F=N(l);if(y.current){const V=y.current,G=V.contentDocument||V.contentWindow.document;G.open(),G.write(F),G.close()}k("Code running in preview...")}catch(F){k(`Error: ${F.message}`)}},N=F=>{var K,ee;const V=(K=o.libraries)==null?void 0:K.includes("leaflet"),G=(ee=o.libraries)==null?void 0:ee.includes("chartjs"),Q=!V&&!G;let Z="",H="";return Q&&(Z+='<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"><\/script>'),V&&(H+='<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />',Z+='<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>'),G&&(Z+='<script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>'),`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; padding: 10px; font-family: Arial, sans-serif; background: #1a1a2e; color: white; }
    #map { height: 300px; width: 100%; }
    canvas { display: block; }
    #console-output {
      background: #0d0d1a;
      border: 1px solid #333;
      padding: 10px;
      margin-top: 10px;
      font-family: monospace;
      font-size: 12px;
      max-height: 150px;
      overflow-y: auto;
      white-space: pre-wrap;
    }
    .log-entry { color: #4ecdc4; margin: 2px 0; }
    .error-entry { color: #ff6b6b; margin: 2px 0; }
  </style>
  ${H}
  ${Z}
</head>
<body>
  <div id="app"></div>
  <div id="map"></div>
  <canvas id="myChart"></canvas>
  <div id="console-output"></div>
  <script>
    // Console output display
    const consoleDiv = document.getElementById('console-output');
    const originalLog = console.log;
    const originalError = console.error;

    function addToConsole(msg, isError) {
      const entry = document.createElement('div');
      entry.className = isError ? 'error-entry' : 'log-entry';
      entry.textContent = (isError ? 'ERROR: ' : '> ') + msg;
      consoleDiv.appendChild(entry);
      consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }

    console.log = function(...args) {
      const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
      addToConsole(msg, false);
      originalLog.apply(console, args);
    };

    console.error = function(...args) {
      const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
      addToConsole(msg, true);
      originalError.apply(console, args);
    };

    // Handle unhandled promise rejections (for fetch errors)
    window.addEventListener('unhandledrejection', function(event) {
      console.error('Promise rejected: ' + event.reason);
    });

    try {
      ${F}
    } catch(e) {
      console.error(e.message);
    }
  <\/script>
</body>
</html>
    `},P=()=>{if(g(!1),y.current){const F=y.current.contentDocument||y.current.contentWindow.document;F.open(),F.write('<html><body style="background:#1a1a2e;color:#888;padding:20px;">Click "Run Code" to see your output</body></html>'),F.close()}},E=()=>{c(o.starterCode||""),h(o.serverCode||""),P()},f=F=>{x.includes(F)||j([...x,F])},z=()=>{A(!0),c(o.solutionCode||"")},W=()=>{r||(i&&i({exerciseId:o.id,answer:l,isCorrect:!0,exerciseType:"data-apis",exerciseTitle:o.title}),n(o.id,o.points))},J=F=>`difficulty difficulty-${F.toLowerCase()}`,ne=F=>{navigator.clipboard.writeText(F).then(()=>{alert("Code copied to clipboard!")})};return s.jsxs("div",{className:"exercise-detail data-apis-exercise",children:[s.jsx("button",{className:"back-button",onClick:t,children:"← Back to Week"}),s.jsxs("div",{className:"exercise-header-detail",children:[s.jsxs("div",{className:"exercise-meta",children:[s.jsx("span",{className:J(o.difficulty),children:o.difficulty}),s.jsxs("span",{className:"points",children:[o.points," pts"]}),o.isProject&&s.jsx("span",{className:"project-badge",children:"Project"}),o.isCapstone&&s.jsx("span",{className:"capstone-badge",children:"Capstone"}),o.requiresNode&&s.jsx("span",{className:"node-badge",children:"Node.js Required"})]}),s.jsx("h1",{children:o.title}),s.jsx("p",{className:"exercise-description-large",children:o.description})]}),o.vocabularyTerms&&o.vocabularyTerms.length>0&&s.jsxs("div",{className:"vocab-tags",children:[s.jsx("span",{className:"vocab-label",children:"Key Terms:"}),o.vocabularyTerms.map(F=>{const V=Rx(F);return V?s.jsx("button",{className:"vocab-tag",onClick:()=>_(V),children:V.term},F):null})]}),D&&s.jsx("div",{className:"vocab-popup",onClick:()=>_(null),children:s.jsxs("div",{className:"vocab-popup-content",onClick:F=>F.stopPropagation(),children:[s.jsx("h3",{children:D.term}),s.jsx("p",{children:D.definition}),D.example&&s.jsx("pre",{className:"vocab-example",children:s.jsx("code",{children:D.example})}),s.jsx("button",{onClick:()=>_(null),children:"Close"})]})}),s.jsxs("div",{className:"prompt-box",children:[s.jsx("h3",{children:"Challenge"}),s.jsx("pre",{children:o.prompt})]}),o.serverCode&&s.jsxs("div",{className:"code-tabs",children:[s.jsx("button",{className:`tab-btn ${S==="client"?"active":""}`,onClick:()=>w("client"),children:"📄 Client Code"}),s.jsx("button",{className:`tab-btn ${S==="server"?"active":""}`,onClick:()=>w("server"),children:"⚙️ Server Code"})]}),s.jsxs("div",{className:"editor-container",children:[s.jsxs("div",{className:"code-section",children:[s.jsxs("div",{className:"code-header",children:[s.jsx("h3",{children:S==="server"?"Server Code (server.js)":"Your Code"}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{onClick:T,className:"run-btn",children:"▶ Run"}),s.jsx("button",{onClick:P,className:"stop-btn",children:"⬛ Stop"}),s.jsx("button",{onClick:E,className:"reset-btn",children:"↺ Reset"}),s.jsx("button",{onClick:()=>ne(S==="server"?p:l),className:"copy-btn",children:"📋 Copy"})]})]}),s.jsx("textarea",{className:"code-editor",value:S==="server"?p:l,onChange:F=>S==="server"?h(F.target.value):c(F.target.value),spellCheck:!1})]}),s.jsxs("div",{className:"canvas-section",children:[s.jsx("h3",{children:"Output"}),o.requiresNode?s.jsx("div",{className:"output-container node-output",children:s.jsx("pre",{children:m||'Click "Run" to see instructions for running this Node.js exercise.'})}):s.jsx("div",{className:"preview-container",children:s.jsx("iframe",{ref:y,title:"Code Preview",className:"code-preview-iframe",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals"})})]})]}),s.jsxs("div",{className:"hints-section",children:[s.jsx("h3",{children:"Hints"}),s.jsx("div",{className:"hints-list",children:o.hints&&o.hints.map((F,V)=>s.jsx("div",{className:"hint-item",children:x.includes(V)?s.jsxs("div",{className:"hint-revealed",children:[s.jsxs("span",{className:"hint-number",children:["Hint ",V+1,":"]})," ",F]}):s.jsxs("button",{className:"hint-button",onClick:()=>f(V),children:["Reveal Hint ",V+1]})},V))})]}),o.resources&&o.resources.length>0&&s.jsxs("div",{className:"resources-section",children:[s.jsx("h3",{children:"Resources"}),s.jsx("div",{className:"resources-list",children:o.resources.map((F,V)=>s.jsx("a",{href:F.url,target:"_blank",rel:"noopener noreferrer",className:"resource-link",children:F.title},V))})]}),s.jsx("div",{className:"solution-section",children:C?s.jsxs("div",{className:"solution-revealed",children:[s.jsx("h3",{children:"Solution"}),s.jsx("pre",{className:"solution-code",children:o.solutionCode})]}):s.jsx("button",{className:"solution-button",onClick:z,children:"Show Solution (try on your own first!)"})}),s.jsx("div",{className:"complete-section",children:r?s.jsxs("div",{className:"already-completed",children:["✓ You've completed this exercise! (",o.points," points earned)"]}):s.jsxs("button",{className:"complete-button",onClick:W,children:["Mark as Complete (+",o.points," points)"]})})]})}const Fx=({onBack:e})=>{const[t,n]=I.useState("all"),[r,i]=I.useState(""),[o,l]=I.useState(null),c=_x(),p=[{key:"all",label:"All Terms",count:c.total},{key:"1",label:"Week 1: Fetching Data",count:c.week1},{key:"2",label:"Week 2: Visualization",count:c.week2},{key:"3",label:"Week 3: Server-Side",count:c.week3},{key:"4",label:"Week 4: Deployment",count:c.week4}];let h=[];r.trim()?h=Lx(r):t==="all"?h=Wa():h=Dx(parseInt(t));const S={};t!=="all"&&!r&&h.forEach(x=>{const j=`Day ${x.day}`;S[j]||(S[j]=[]),S[j].push(x)});const w=x=>{l(o===x?null:x)};return s.jsxs("div",{className:"vocabulary-page data-apis-vocab",children:[e&&s.jsx("button",{className:"back-button",onClick:e,children:"← Back to Dashboard"}),s.jsx("h2",{style:{color:"#4ecdc4",marginBottom:"0.5rem"},children:"Data & APIs Vocabulary"}),s.jsx("p",{style:{marginBottom:"1.5rem",color:"#b0b0b0"},children:"Master these key terms to understand data fetching, APIs, and full-stack development."}),s.jsxs("div",{className:"vocab-search",children:[s.jsx("input",{type:"text",placeholder:"Search terms...",value:r,onChange:x=>i(x.target.value),className:"vocab-search-input"}),r&&s.jsx("button",{className:"vocab-search-clear",onClick:()=>i(""),children:"✕"})]}),s.jsx("div",{className:"vocab-categories",children:p.map(x=>s.jsxs("button",{className:`vocab-category-btn ${t===x.key?"active":""}`,onClick:()=>{n(x.key),i("")},children:[x.label,s.jsxs("span",{className:"vocab-count",children:["(",x.count,")"]})]},x.key))}),s.jsxs("div",{style:{marginTop:"1rem",color:"#b0b0b0"},children:["Showing ",h.length," term",h.length!==1?"s":"",r&&` matching "${r}"`]}),t!=="all"&&!r?s.jsx("div",{className:"vocab-grouped",children:Object.entries(S).map(([x,j])=>s.jsxs("div",{className:"vocab-day-group",children:[s.jsx("h3",{className:"vocab-day-header",children:x}),s.jsx("div",{className:"vocab-list",children:j.map(C=>s.jsx(cp,{term:C,expanded:o===C.id,onToggle:()=>w(C.id)},C.id))})]},x))}):s.jsx("div",{className:"vocab-list",children:h.map(x=>s.jsx(cp,{term:x,expanded:o===x.id,onToggle:()=>w(x.id),showWeek:t==="all"},x.id))}),h.length===0&&s.jsxs("div",{style:{textAlign:"center",padding:"3rem",color:"#b0b0b0"},children:["No vocabulary terms found.",r&&" Try a different search term."]})]})},cp=({term:e,expanded:t,onToggle:n,showWeek:r})=>s.jsxs("div",{className:`vocab-card ${t?"expanded":""}`,onClick:n,children:[s.jsxs("div",{className:"vocab-card-header",children:[s.jsxs("div",{className:"vocab-card-meta",children:[r&&s.jsxs("span",{className:"vocab-week-badge",children:["Week ",e.week]}),s.jsxs("span",{className:"vocab-day-badge",children:["Day ",e.day]})]}),s.jsx("h3",{className:"vocab-term",children:e.term}),s.jsx("span",{className:"vocab-expand-icon",children:t?"−":"+"})]}),s.jsx("p",{className:"vocab-definition",children:e.definition}),t&&s.jsxs("div",{className:"vocab-expanded-content",children:[e.example&&s.jsxs("div",{className:"vocab-example-section",children:[s.jsx("strong",{children:"Example:"}),s.jsx("pre",{className:"vocab-example-code",children:s.jsx("code",{children:e.example})})]}),e.relatedTerms&&e.relatedTerms.length>0&&s.jsxs("div",{className:"vocab-related",children:[s.jsx("strong",{children:"Related:"}),s.jsx("div",{className:"vocab-related-tags",children:e.relatedTerms.map(i=>s.jsx("span",{className:"vocab-related-tag",children:i},i))})]})]})]});function zx(){Bc();const[e,t]=I.useState(null),[n,r]=I.useState(null),[i,o]=I.useState(null),[l,c]=I.useState(!1),[p,h]=I.useState(!1),[S,w]=I.useState("dashboard"),[x,j]=I.useState(null),[C,A]=I.useState(null),[L,g]=I.useState([]),[m,k]=I.useState([]),[D,_]=I.useState([]),[M,b]=I.useState(0),y=I.useRef(null),[T,N]=I.useState([]),[P,E]=I.useState(null),[f,z]=I.useState(null),[W,J]=I.useState([]),[ne,F]=I.useState([]),[V,G]=I.useState({}),[Q,Z]=I.useState(null),[H,K]=I.useState(null),[ee,B]=I.useState(null),[X,re]=I.useState([]),[xe,we]=I.useState(null),[ye,Je]=I.useState(null);I.useEffect(()=>{const $=localStorage.getItem("cyberrange-session");if($)try{const _e=JSON.parse($);_e.user&&(t(_e.user),Ht(_e.user))}catch(_e){console.error("Error loading session:",_e)}const te=localStorage.getItem("cyberrange-teacher-session");if(te)try{const _e=JSON.parse(te);_e.teacher&&r(_e.teacher)}catch(_e){console.error("Error loading teacher session:",_e)}return()=>{y.current&&(y.current(),y.current=null)}},[]);const Ht=async $=>{if(Rt(),$.classCode){N([]);const te=Fm($.classCode,_e=>{N(_e)});y.current=te}},Rt=()=>{const $=localStorage.getItem("cyberrange-progress");if($)try{const te=JSON.parse($);g(te.completed||[]),k(te.completedScenarios||[]),_(te.completedExercises||[]),J(te.completedPseudocode||[]),F(te.completedFlowcharts||[]),re(te.completedDataApisExercises||[]),G(te.exitTicketResponses||{}),b(te.points||0)}catch(te){console.error("Error loading local progress:",te)}},Lt=I.useCallback(async($,te,_e,Gs,on,Ka,Ja,qs)=>{localStorage.setItem("cyberrange-progress",JSON.stringify({completed:$,completedScenarios:te,completedExercises:_e,completedPseudocode:Gs,completedFlowcharts:on,completedDataApisExercises:Ka,exitTicketResponses:Ja,points:qs}))},[e]);I.useEffect(()=>{e&&Lt(L,m,D,W,ne,X,V,M)},[L,m,D,W,ne,X,V,M,e,Lt]);const rn=$=>{y.current&&(y.current(),y.current=null),t($),localStorage.setItem("cyberrange-session",JSON.stringify({user:$})),$.completedChallenges&&(g($.completedChallenges),k($.completedScenarios||[]),_($.completedExercises||[]),b($.totalPoints||0)),Ht($)},Ya=$=>{r($),c(!1),localStorage.setItem("cyberrange-teacher-session",JSON.stringify({teacher:$}))},Va=$=>{o($)},Jr=()=>{o(null)},Fs=()=>{r(null),o(null),c(!1),localStorage.removeItem("cyberrange-teacher-session")},Qr=()=>{y.current&&(y.current(),y.current=null),t(null),o(null),g([]),k([]),_([]),J([]),F([]),re([]),G({}),N([]),b(0),w("dashboard"),E(null),z(null),Z(null),K(null),B(null),we(null),Je(null),localStorage.removeItem("cyberrange-session")},$a=$=>{j($),w("challenges")},zs=$=>{A($),w("challenge-detail")},Us=($,te)=>{L.includes($)||(g([...L,$]),b(M+te))},Zr=()=>{A(null),w("challenges")},Ce=()=>{j(null),A(null),w("dashboard")},Re=($,te)=>{m.includes($)||(k([...m,$]),b(M+te))},Qn=()=>{window.confirm("Are you sure you want to reset all progress? This cannot be undone.")&&(g([]),k([]),_([]),J([]),F([]),re([]),G({}),b(0),localStorage.removeItem("cyberrange-progress"),w("dashboard"))},ei=$=>{E($),w("week")},ti=$=>{z($),w("exercise-detail")},Ga=($,te)=>{D.includes($)||(_([...D,$]),b(M+te))},Dn=($,te,_e)=>{G(Gs=>({...Gs,[$]:te}))},ni=()=>{z(null),w("week")},si=()=>{E(null),w("dashboard")},Hs=$=>{w($==="pseudocode"?"pseudocode-hub":"flowchart-hub")},qa=$=>{Z($),w("topic-lesson")},Bs=$=>{K($),w("pseudocode-exercise")},Ws=($,te)=>{W.includes($)||(J([...W,$]),b(M+te))},Ys=$=>{B($),w("flowchart-exercise")},Xa=($,te)=>{ne.includes($)||(F([...ne,$]),b(M+te))},vt=async $=>{if(!(!e||e.id==="demo"))try{await jv(e.id,$.exerciseId,{answer:$.answer,isCorrect:$.isCorrect,exerciseType:$.exerciseType,exerciseTitle:$.exerciseTitle})}catch(te){console.error("Error saving submission:",te)}},Rn=()=>{w("dashboard")},Vs=()=>{w("dashboard")},an=()=>{Z(null),w("pseudocode-hub")},ri=()=>{K(null),w("pseudocode-hub")},$s=()=>{B(null),w("flowchart-hub")},ii=$=>{we($),w("data-apis-week")},Ln=$=>{Je($),w("data-apis-exercise")},ai=($,te)=>{X.includes($)||(re([...X,$]),b(M+te))},Le=()=>{Je(null),w("data-apis-week")},oi=()=>{we(null),w("dashboard")};return l?s.jsx(_v,{onLogin:Ya,onBack:()=>c(!1)}):n&&!i?s.jsx(Ov,{teacher:n,onSelectClass:Va,onLogout:Fs}):n&&i?s.jsx(fx,{classCode:i,onBack:Jr}):e?s.jsxs("div",{className:"app",children:[s.jsx("header",{className:"header",children:s.jsxs("div",{className:"header-content",children:[s.jsx("div",{className:"logo",children:"CyberEd Range"}),s.jsxs("nav",{className:"nav",children:[s.jsx("button",{className:`nav-btn ${S==="dashboard"?"active":""}`,onClick:Ce,children:"Dashboard"}),s.jsx("button",{className:`nav-btn ${S==="network-monitor"?"active":""}`,onClick:()=>w("network-monitor"),children:"Network Monitor"}),s.jsx("button",{className:`nav-btn ${S==="tools"?"active":""}`,onClick:()=>w("tools"),children:"Tools"}),s.jsx("button",{className:`nav-btn ${S==="vocabulary"?"active":""}`,onClick:()=>w("vocabulary"),children:"Vocabulary"}),s.jsx("button",{className:"nav-btn theme-btn",onClick:()=>h(!0),title:"Change Theme",children:"Theme"}),s.jsx("button",{className:"nav-btn",onClick:Qn,style:{background:"rgba(244, 67, 54, 0.2)",borderColor:"#f44336"},children:"Reset"}),s.jsxs("div",{className:"user-info",children:[s.jsx("span",{className:"user-name",children:e==null?void 0:e.name}),s.jsx("span",{className:"user-class",children:e==null?void 0:e.classCode}),s.jsx("button",{className:"logout-btn",onClick:Qr,children:"Logout"})]})]})]})}),s.jsxs("main",{className:"main-content",children:[S==="dashboard"&&s.jsx(G0,{studentName:e==null?void 0:e.name,totalPoints:M,assignments:T,completedChallenges:L,completedScenarios:m,completedExercises:D,completedPseudocode:W,completedFlowcharts:ne,completedDataApisExercises:X,onSelectCategory:$a,onSelectNetworkMonitor:()=>w("network-monitor"),onSelectWeek:ei,onSelectAPCSP:Hs,onSelectDataApisWeek:ii}),S==="challenges"&&x&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"back-btn",onClick:Ce,children:"Back to Dashboard"}),s.jsx("div",{style:{marginTop:"1rem"},children:s.jsx(Mv,{category:x,completedChallenges:L,onSelectChallenge:zs})})]}),S==="challenge-detail"&&C&&s.jsx(Fv,{challengeId:C,onComplete:Us,onBack:Zr,isCompleted:L.includes(C),onSubmit:vt}),S==="week"&&P&&s.jsx(xx,{weekKey:P,onSelectExercise:ti,onBack:si,completedExercises:D,exitTicketResponses:V,onSubmitExitTicket:Dn}),S==="exercise-detail"&&f&&s.jsx(wx,{exerciseId:f,onComplete:Ga,onBack:ni,isCompleted:D.includes(f),onSubmit:vt}),S==="vocabulary"&&s.jsx(zv,{}),S==="tools"&&s.jsx(cx,{}),S==="network-monitor"&&s.jsx(nx,{completedScenarios:m,onCompleteScenario:Re,onBack:Ce}),S==="pseudocode-hub"&&s.jsx(bx,{completedExercises:W,onSelectTopic:qa,onSelectExercise:Bs,onBack:Rn}),S==="topic-lesson"&&Q&&s.jsx(kx,{topicId:Q,onBack:an,onSelectExercise:Bs}),S==="pseudocode-exercise"&&H&&s.jsx(jx,{exerciseId:H,onComplete:Ws,onBack:ri,isCompleted:W.includes(H),onNextExercise:Bs,onSubmit:vt}),S==="code-tracer"&&s.jsx(Sx,{onBack:Rn}),S==="robot-grid"&&s.jsx(Cx,{onBack:Rn}),S==="flowchart-hub"&&s.jsx(Tx,{completedExercises:ne,onSelectExercise:Ys,onSelectBuilder:()=>w("flowchart-builder"),onSelectSymbols:()=>w("symbol-lesson"),onBack:Vs}),S==="symbol-lesson"&&s.jsx(Nx,{onBack:()=>w("flowchart-hub")}),S==="flowchart-exercise"&&ee&&s.jsx(Ax,{exerciseId:ee,onComplete:Xa,onBack:$s,isCompleted:ne.includes(ee),onNextExercise:Ys,onSubmit:vt}),S==="flowchart-builder"&&s.jsx(Px,{onBack:()=>w("flowchart-hub")}),S==="data-apis-week"&&xe&&s.jsx(Ix,{weekKey:xe,onSelectExercise:Ln,onBack:oi,completedExercises:X}),S==="data-apis-exercise"&&ye&&s.jsx(Mx,{exerciseId:ye,onComplete:ai,onBack:Le,isCompleted:X.includes(ye),onSubmit:vt}),S==="data-apis-vocabulary"&&s.jsx(Fx,{onBack:Ce})]}),p&&s.jsx(Hc,{onClose:()=>h(!1)})]}):s.jsx(dx,{onLogin:rn,onTeacherLogin:()=>c(!0)})}$o.createRoot(document.getElementById("root")).render(s.jsx(Sf.StrictMode,{children:s.jsx(zx,{})}));
