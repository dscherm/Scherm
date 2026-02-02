(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function nm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var th={exports:{}},bo={},nh={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zi=Symbol.for("react.element"),sm=Symbol.for("react.portal"),im=Symbol.for("react.fragment"),rm=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),lm=Symbol.for("react.context"),cm=Symbol.for("react.forward_ref"),um=Symbol.for("react.suspense"),dm=Symbol.for("react.memo"),hm=Symbol.for("react.lazy"),bu=Symbol.iterator;function pm(e){return e===null||typeof e!="object"?null:(e=bu&&e[bu]||e["@@iterator"],typeof e=="function"?e:null)}var sh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ih=Object.assign,rh={};function Ps(e,t,n){this.props=e,this.context=t,this.refs=rh,this.updater=n||sh}Ps.prototype.isReactComponent={};Ps.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ps.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function oh(){}oh.prototype=Ps.prototype;function Ol(e,t,n){this.props=e,this.context=t,this.refs=rh,this.updater=n||sh}var Ml=Ol.prototype=new oh;Ml.constructor=Ol;ih(Ml,Ps.prototype);Ml.isPureReactComponent=!0;var Su=Array.isArray,ah=Object.prototype.hasOwnProperty,Fl={current:null},lh={key:!0,ref:!0,__self:!0,__source:!0};function ch(e,t,n){var i,r={},a=null,l=null;if(t!=null)for(i in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)ah.call(t,i)&&!lh.hasOwnProperty(i)&&(r[i]=t[i]);var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){for(var h=Array(c),m=0;m<c;m++)h[m]=arguments[m+2];r.children=h}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)r[i]===void 0&&(r[i]=c[i]);return{$$typeof:zi,type:e,key:a,ref:l,props:r,_owner:Fl.current}}function fm(e,t){return{$$typeof:zi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===zi}function mm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ku=/\/+/g;function sa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mm(""+e.key):t.toString(36)}function Rr(e,t,n,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case zi:case sm:l=!0}}if(l)return l=e,r=r(l),e=i===""?"."+sa(l,0):i,Su(r)?(n="",e!=null&&(n=e.replace(ku,"$&/")+"/"),Rr(r,t,n,"",function(m){return m})):r!=null&&(Ul(r)&&(r=fm(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(ku,"$&/")+"/")+e)),t.push(r)),1;if(l=0,i=i===""?".":i+":",Su(e))for(var c=0;c<e.length;c++){a=e[c];var h=i+sa(a,c);l+=Rr(a,t,n,h,r)}else if(h=pm(e),typeof h=="function")for(e=h.call(e),c=0;!(a=e.next()).done;)a=a.value,h=i+sa(a,c++),l+=Rr(a,t,n,h,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function mr(e,t,n){if(e==null)return e;var i=[],r=0;return Rr(e,i,"","",function(a){return t.call(n,a,r++)}),i}function gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},_r={transition:null},ym={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:_r,ReactCurrentOwner:Fl};function uh(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:mr,forEach:function(e,t,n){mr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mr(e,function(){t++}),t},toArray:function(e){return mr(e,function(t){return t})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=Ps;ee.Fragment=im;ee.Profiler=om;ee.PureComponent=Ol;ee.StrictMode=rm;ee.Suspense=um;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;ee.act=uh;ee.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=ih({},e.props),r=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Fl.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(h in t)ah.call(t,h)&&!lh.hasOwnProperty(h)&&(i[h]=t[h]===void 0&&c!==void 0?c[h]:t[h])}var h=arguments.length-2;if(h===1)i.children=n;else if(1<h){c=Array(h);for(var m=0;m<h;m++)c[m]=arguments[m+2];i.children=c}return{$$typeof:zi,type:e.type,key:r,ref:a,props:i,_owner:l}};ee.createContext=function(e){return e={$$typeof:lm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:am,_context:e},e.Consumer=e};ee.createElement=ch;ee.createFactory=function(e){var t=ch.bind(null,e);return t.type=e,t};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:cm,render:e}};ee.isValidElement=Ul;ee.lazy=function(e){return{$$typeof:hm,_payload:{_status:-1,_result:e},_init:gm}};ee.memo=function(e,t){return{$$typeof:dm,type:e,compare:t===void 0?null:t}};ee.startTransition=function(e){var t=_r.transition;_r.transition={};try{e()}finally{_r.transition=t}};ee.unstable_act=uh;ee.useCallback=function(e,t){return Ke.current.useCallback(e,t)};ee.useContext=function(e){return Ke.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};ee.useEffect=function(e,t){return Ke.current.useEffect(e,t)};ee.useId=function(){return Ke.current.useId()};ee.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};ee.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};ee.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};ee.useMemo=function(e,t){return Ke.current.useMemo(e,t)};ee.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};ee.useRef=function(e){return Ke.current.useRef(e)};ee.useState=function(e){return Ke.current.useState(e)};ee.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};ee.useTransition=function(){return Ke.current.useTransition()};ee.version="18.3.1";nh.exports=ee;var I=nh.exports;const vm=nm(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm=I,wm=Symbol.for("react.element"),jm=Symbol.for("react.fragment"),bm=Object.prototype.hasOwnProperty,Sm=xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,km={key:!0,ref:!0,__self:!0,__source:!0};function dh(e,t,n){var i,r={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(i in t)bm.call(t,i)&&!km.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:wm,type:e,key:a,ref:l,props:r,_owner:Sm.current}}bo.Fragment=jm;bo.jsx=dh;bo.jsxs=dh;th.exports=bo;var s=th.exports,Ma={},hh={exports:{}},at={},ph={exports:{}},fh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(U,G){var X=U.length;U.push(G);e:for(;0<X;){var J=X-1>>>1,Z=U[J];if(0<r(Z,G))U[J]=G,U[X]=Z,X=J;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var G=U[0],X=U.pop();if(X!==G){U[0]=X;e:for(var J=0,Z=U.length,H=Z>>>1;J<H;){var K=2*(J+1)-1,q=U[K],B=K+1,Y=U[B];if(0>r(q,X))B<Z&&0>r(Y,q)?(U[J]=Y,U[B]=X,J=B):(U[J]=q,U[K]=X,J=K);else if(B<Z&&0>r(Y,X))U[J]=Y,U[B]=X,J=B;else break e}}return G}function r(U,G){var X=U.sortIndex-G.sortIndex;return X!==0?X:U.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var h=[],m=[],E=1,j=null,b=3,k=!1,C=!1,A=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(U){for(var G=n(m);G!==null;){if(G.callback===null)i(m);else if(G.startTime<=U)i(m),G.sortIndex=G.expirationTime,t(h,G);else break;G=n(m)}}function R(U){if(A=!1,S(U),!C)if(n(h)!==null)C=!0,te(L);else{var G=n(m);G!==null&&oe(R,G.startTime-U)}}function L(U,G){C=!1,A&&(A=!1,g(f),f=-1),k=!0;var X=b;try{for(S(G),j=n(h);j!==null&&(!(j.expirationTime>G)||U&&!P());){var J=j.callback;if(typeof J=="function"){j.callback=null,b=j.priorityLevel;var Z=J(j.expirationTime<=G);G=e.unstable_now(),typeof Z=="function"?j.callback=Z:j===n(h)&&i(h),S(G)}else i(h);j=n(h)}if(j!==null)var H=!0;else{var K=n(m);K!==null&&oe(R,K.startTime-G),H=!1}return H}finally{j=null,b=X,k=!1}}var M=!1,x=null,f=-1,w=5,T=-1;function P(){return!(e.unstable_now()-T<w)}function N(){if(x!==null){var U=e.unstable_now();T=U;var G=!0;try{G=x(!0,U)}finally{G?v():(M=!1,x=null)}}else M=!1}var v;if(typeof p=="function")v=function(){p(N)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,V=Q.port2;Q.port1.onmessage=N,v=function(){V.postMessage(null)}}else v=function(){_(N,0)};function te(U){x=U,M||(M=!0,v())}function oe(U,G){f=_(function(){U(e.unstable_now())},G)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){C||k||(C=!0,te(L))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return n(h)},e.unstable_next=function(U){switch(b){case 1:case 2:case 3:var G=3;break;default:G=b}var X=b;b=G;try{return U()}finally{b=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=b;b=U;try{return G()}finally{b=X}},e.unstable_scheduleCallback=function(U,G,X){var J=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?J+X:J):X=J,U){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=X+Z,U={id:E++,callback:G,priorityLevel:U,startTime:X,expirationTime:Z,sortIndex:-1},X>J?(U.sortIndex=X,t(m,U),n(h)===null&&U===n(m)&&(A?(g(f),f=-1):A=!0,oe(R,X-J))):(U.sortIndex=Z,t(h,U),C||k||(C=!0,te(L))),U},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(U){var G=b;return function(){var X=b;b=G;try{return U.apply(this,arguments)}finally{b=X}}}})(fh);ph.exports=fh;var Cm=ph.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm=I,ot=Cm;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mh=new Set,ki={};function Gn(e,t){js(e,t),js(e+"Capture",t)}function js(e,t){for(ki[e]=t,e=0;e<t.length;e++)mh.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fa=Object.prototype.hasOwnProperty,Tm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cu={},Nu={};function Em(e){return Fa.call(Nu,e)?!0:Fa.call(Cu,e)?!1:Tm.test(e)?Nu[e]=!0:(Cu[e]=!0,!1)}function Pm(e,t,n,i){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Am(e,t,n,i){if(t===null||typeof t>"u"||Pm(e,t,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Qe(e,t,n,i,r,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hl=/[\-:]([a-z])/g;function Bl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hl,Bl);Fe[t]=new Qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hl,Bl);Fe[t]=new Qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hl,Bl);Fe[t]=new Qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zl(e,t,n,i){var r=Fe.hasOwnProperty(t)?Fe[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Am(t,n,r,i)&&(n=null),i||r===null?Em(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,i=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?e.setAttributeNS(i,t,n):e.setAttribute(t,n))))}var tn=Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Ua=Symbol.for("react.profiler"),gh=Symbol.for("react.provider"),yh=Symbol.for("react.context"),$l=Symbol.for("react.forward_ref"),Ha=Symbol.for("react.suspense"),Ba=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),vh=Symbol.for("react.offscreen"),Tu=Symbol.iterator;function ei(e){return e===null||typeof e!="object"?null:(e=Tu&&e[Tu]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,ia;function li(e){if(ia===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ia=t&&t[1]||""}return`
`+ia+e}var ra=!1;function oa(e,t){if(!e||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var i=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){i=m}e.call(t.prototype)}else{try{throw Error()}catch(m){i=m}e()}}catch(m){if(m&&i&&typeof m.stack=="string"){for(var r=m.stack.split(`
`),a=i.stack.split(`
`),l=r.length-1,c=a.length-1;1<=l&&0<=c&&r[l]!==a[c];)c--;for(;1<=l&&0<=c;l--,c--)if(r[l]!==a[c]){if(l!==1||c!==1)do if(l--,c--,0>c||r[l]!==a[c]){var h=`
`+r[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=c);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?li(e):""}function Im(e){switch(e.tag){case 5:return li(e.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return e=oa(e.type,!1),e;case 11:return e=oa(e.type.render,!1),e;case 1:return e=oa(e.type,!0),e;default:return""}}function za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ns:return"Fragment";case ts:return"Portal";case Ua:return"Profiler";case Wl:return"StrictMode";case Ha:return"Suspense";case Ba:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yh:return(e.displayName||"Context")+".Consumer";case gh:return(e._context.displayName||"Context")+".Provider";case $l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vl:return t=e.displayName||null,t!==null?t:za(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return za(e(t))}catch{}}return null}function Dm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(t);case 8:return t===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rm(e){var t=xh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Rm(e))}function wh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=xh(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Vr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:i,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jh(e,t){t=t.checked,t!=null&&zl(e,"checked",t,!1)}function $a(e,t){jh(e,t);var n=Cn(t.value),i=t.type;if(n!=null)i==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Va(e,t.type,n):t.hasOwnProperty("defaultValue")&&Va(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Va(e,t,n){(t!=="number"||Vr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function ps(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Ya(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(ci(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function bh(e,t){var n=Cn(t.value),i=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),i!=null&&(e.defaultValue=""+i)}function Iu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ga(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vr,kh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_m=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(e){_m.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pi[t]=pi[e]})});function Ch(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pi.hasOwnProperty(e)&&pi[e]?(""+t).trim():t+"px"}function Nh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ch(n,t[n],i);n==="float"&&(n="cssFloat"),i?e.setProperty(n,r):e[n]=r}}var Lm=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xa(e,t){if(t){if(Lm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qa=null;function Yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qa=null,fs=null,ms=null;function Du(e){if(e=Vi(e)){if(typeof qa!="function")throw Error(F(280));var t=e.stateNode;t&&(t=To(t),qa(e.stateNode,e.type,t))}}function Th(e){fs?ms?ms.push(e):ms=[e]:fs=e}function Eh(){if(fs){var e=fs,t=ms;if(ms=fs=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function Ph(e,t){return e(t)}function Ah(){}var aa=!1;function Ih(e,t,n){if(aa)return e(t,n);aa=!0;try{return Ph(e,t,n)}finally{aa=!1,(fs!==null||ms!==null)&&(Ah(),Eh())}}function Ni(e,t){var n=e.stateNode;if(n===null)return null;var i=To(n);if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var Ja=!1;if(Qt)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{Ja=!1}function Om(e,t,n,i,r,a,l,c,h){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(E){this.onError(E)}}var fi=!1,Yr=null,Gr=!1,Za=null,Mm={onError:function(e){fi=!0,Yr=e}};function Fm(e,t,n,i,r,a,l,c,h){fi=!1,Yr=null,Om.apply(Mm,arguments)}function Um(e,t,n,i,r,a,l,c,h){if(Fm.apply(this,arguments),fi){if(fi){var m=Yr;fi=!1,Yr=null}else throw Error(F(198));Gr||(Gr=!0,Za=m)}}function Xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ru(e){if(Xn(e)!==e)throw Error(F(188))}function Hm(e){var t=e.alternate;if(!t){if(t=Xn(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Ru(r),e;if(a===i)return Ru(r),t;a=a.sibling}throw Error(F(188))}if(n.return!==i.return)n=r,i=a;else{for(var l=!1,c=r.child;c;){if(c===n){l=!0,n=r,i=a;break}if(c===i){l=!0,i=r,n=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===n){l=!0,n=a,i=r;break}if(c===i){l=!0,i=a,n=r;break}c=c.sibling}if(!l)throw Error(F(189))}}if(n.alternate!==i)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Rh(e){return e=Hm(e),e!==null?_h(e):null}function _h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_h(e);if(t!==null)return t;e=e.sibling}return null}var Lh=ot.unstable_scheduleCallback,_u=ot.unstable_cancelCallback,Bm=ot.unstable_shouldYield,zm=ot.unstable_requestPaint,Ne=ot.unstable_now,Wm=ot.unstable_getCurrentPriorityLevel,Gl=ot.unstable_ImmediatePriority,Oh=ot.unstable_UserBlockingPriority,Xr=ot.unstable_NormalPriority,$m=ot.unstable_LowPriority,Mh=ot.unstable_IdlePriority,So=null,Ft=null;function Vm(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:Xm,Ym=Math.log,Gm=Math.LN2;function Xm(e){return e>>>=0,e===0?32:31-(Ym(e)/Gm|0)|0}var xr=64,wr=4194304;function ui(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kr(e,t){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~r;c!==0?i=ui(c):(a&=l,a!==0&&(i=ui(a)))}else l=n&~r,l!==0?i=ui(l):a!==0&&(i=ui(a));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(i&4&&(i|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)n=31-Pt(t),r=1<<n,i|=e[n],t&=~r;return i}function Km(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Pt(a),c=1<<l,h=r[l];h===-1?(!(c&n)||c&i)&&(r[l]=Km(c,t)):h<=t&&(e.expiredLanes|=c),a&=~c}}function el(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fh(){var e=xr;return xr<<=1,!(xr&4194240)&&(xr=64),e}function la(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Pt(n),a=1<<r;t[r]=0,i[r]=-1,e[r]=-1,n&=~a}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Pt(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}var le=0;function Uh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hh,Kl,Bh,zh,Wh,tl=!1,jr=[],gn=null,yn=null,vn=null,Ti=new Map,Ei=new Map,hn=[],Jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lu(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function ni(e,t,n,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},t!==null&&(t=Vi(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Zm(e,t,n,i,r){switch(t){case"focusin":return gn=ni(gn,e,t,n,i,r),!0;case"dragenter":return yn=ni(yn,e,t,n,i,r),!0;case"mouseover":return vn=ni(vn,e,t,n,i,r),!0;case"pointerover":var a=r.pointerId;return Ti.set(a,ni(Ti.get(a)||null,e,t,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Ei.set(a,ni(Ei.get(a)||null,e,t,n,i,r)),!0}return!1}function $h(e){var t=Mn(e.target);if(t!==null){var n=Xn(t);if(n!==null){if(t=n.tag,t===13){if(t=Dh(n),t!==null){e.blockedOn=t,Wh(e.priority,function(){Bh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Qa=i,n.target.dispatchEvent(i),Qa=null}else return t=Vi(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ou(e,t,n){Lr(e)&&n.delete(t)}function eg(){tl=!1,gn!==null&&Lr(gn)&&(gn=null),yn!==null&&Lr(yn)&&(yn=null),vn!==null&&Lr(vn)&&(vn=null),Ti.forEach(Ou),Ei.forEach(Ou)}function si(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,eg)))}function Pi(e){function t(r){return si(r,e)}if(0<jr.length){si(jr[0],e);for(var n=1;n<jr.length;n++){var i=jr[n];i.blockedOn===e&&(i.blockedOn=null)}}for(gn!==null&&si(gn,e),yn!==null&&si(yn,e),vn!==null&&si(vn,e),Ti.forEach(t),Ei.forEach(t),n=0;n<hn.length;n++)i=hn[n],i.blockedOn===e&&(i.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)$h(n),n.blockedOn===null&&hn.shift()}var gs=tn.ReactCurrentBatchConfig,Qr=!0;function tg(e,t,n,i){var r=le,a=gs.transition;gs.transition=null;try{le=1,Ql(e,t,n,i)}finally{le=r,gs.transition=a}}function ng(e,t,n,i){var r=le,a=gs.transition;gs.transition=null;try{le=4,Ql(e,t,n,i)}finally{le=r,gs.transition=a}}function Ql(e,t,n,i){if(Qr){var r=nl(e,t,n,i);if(r===null)va(e,t,i,qr,n),Lu(e,i);else if(Zm(r,e,t,n,i))i.stopPropagation();else if(Lu(e,i),t&4&&-1<Jm.indexOf(e)){for(;r!==null;){var a=Vi(r);if(a!==null&&Hh(a),a=nl(e,t,n,i),a===null&&va(e,t,i,qr,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else va(e,t,i,null,n)}}var qr=null;function nl(e,t,n,i){if(qr=null,e=Yl(i),e=Mn(e),e!==null)if(t=Xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qr=e,null}function Vh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wm()){case Gl:return 1;case Oh:return 4;case Xr:case $m:return 16;case Mh:return 536870912;default:return 16}default:return 16}}var fn=null,ql=null,Or=null;function Yh(){if(Or)return Or;var e,t=ql,n=t.length,i,r="value"in fn?fn.value:fn.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var l=n-e;for(i=1;i<=l&&t[n-i]===r[a-i];i++);return Or=r.slice(e,1<i?1-i:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Mu(){return!1}function lt(e){function t(n,i,r,a,l){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?br:Mu,this.isPropagationStopped=Mu,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=lt(As),$i=je({},As,{view:0,detail:0}),sg=lt($i),ca,ua,ii,ko=je({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(ca=e.screenX-ii.screenX,ua=e.screenY-ii.screenY):ua=ca=0,ii=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),Fu=lt(ko),ig=je({},ko,{dataTransfer:0}),rg=lt(ig),og=je({},$i,{relatedTarget:0}),da=lt(og),ag=je({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),lg=lt(ag),cg=je({},As,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ug=lt(cg),dg=je({},As,{data:0}),Uu=lt(dg),hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fg[e])?!!t[e]:!1}function Zl(){return mg}var gg=je({},$i,{key:function(e){if(e.key){var t=hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yg=lt(gg),vg=je({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=lt(vg),xg=je({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),wg=lt(xg),jg=je({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),bg=lt(jg),Sg=je({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kg=lt(Sg),Cg=[9,13,27,32],ec=Qt&&"CompositionEvent"in window,mi=null;Qt&&"documentMode"in document&&(mi=document.documentMode);var Ng=Qt&&"TextEvent"in window&&!mi,Gh=Qt&&(!ec||mi&&8<mi&&11>=mi),Bu=" ",zu=!1;function Xh(e,t){switch(e){case"keyup":return Cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ss=!1;function Tg(e,t){switch(e){case"compositionend":return Kh(t);case"keypress":return t.which!==32?null:(zu=!0,Bu);case"textInput":return e=t.data,e===Bu&&zu?null:e;default:return null}}function Eg(e,t){if(ss)return e==="compositionend"||!ec&&Xh(e,t)?(e=Yh(),Or=ql=fn=null,ss=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gh&&t.locale!=="ko"?null:t.data;default:return null}}var Pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pg[e.type]:t==="textarea"}function Qh(e,t,n,i){Th(i),t=Jr(t,"onChange"),0<t.length&&(n=new Jl("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var gi=null,Ai=null;function Ag(e){ap(e,0)}function Co(e){var t=os(e);if(wh(t))return e}function Ig(e,t){if(e==="change")return t}var qh=!1;if(Qt){var ha;if(Qt){var pa="oninput"in document;if(!pa){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),pa=typeof $u.oninput=="function"}ha=pa}else ha=!1;qh=ha&&(!document.documentMode||9<document.documentMode)}function Vu(){gi&&(gi.detachEvent("onpropertychange",Jh),Ai=gi=null)}function Jh(e){if(e.propertyName==="value"&&Co(Ai)){var t=[];Qh(t,Ai,e,Yl(e)),Ih(Ag,t)}}function Dg(e,t,n){e==="focusin"?(Vu(),gi=t,Ai=n,gi.attachEvent("onpropertychange",Jh)):e==="focusout"&&Vu()}function Rg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Ai)}function _g(e,t){if(e==="click")return Co(t)}function Lg(e,t){if(e==="input"||e==="change")return Co(t)}function Og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:Og;function Ii(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Fa.call(t,r)||!It(e[r],t[r]))return!1}return!0}function Yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gu(e,t){var n=Yu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yu(n)}}function Zh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ep(){for(var e=window,t=Vr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vr(e.document)}return t}function tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Mg(e){var t=ep(),n=e.focusedElem,i=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zh(n.ownerDocument.documentElement,n)){if(i!==null&&tc(n)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=Gu(n,a);var l=Gu(n,i);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fg=Qt&&"documentMode"in document&&11>=document.documentMode,is=null,sl=null,yi=null,il=!1;function Xu(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;il||is==null||is!==Vr(i)||(i=is,"selectionStart"in i&&tc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),yi&&Ii(yi,i)||(yi=i,i=Jr(sl,"onSelect"),0<i.length&&(t=new Jl("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=is)))}function Sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rs={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionend:Sr("Transition","TransitionEnd")},fa={},tp={};Qt&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function No(e){if(fa[e])return fa[e];if(!rs[e])return e;var t=rs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tp)return fa[e]=t[n];return e}var np=No("animationend"),sp=No("animationiteration"),ip=No("animationstart"),rp=No("transitionend"),op=new Map,Ku="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(e,t){op.set(e,t),Gn(t,[e])}for(var ma=0;ma<Ku.length;ma++){var ga=Ku[ma],Ug=ga.toLowerCase(),Hg=ga[0].toUpperCase()+ga.slice(1);Tn(Ug,"on"+Hg)}Tn(np,"onAnimationEnd");Tn(sp,"onAnimationIteration");Tn(ip,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(rp,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function Qu(e,t,n){var i=e.type||"unknown-event";e.currentTarget=n,Um(i,t,void 0,e),e.currentTarget=null}function ap(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;e:{var a=void 0;if(t)for(var l=i.length-1;0<=l;l--){var c=i[l],h=c.instance,m=c.currentTarget;if(c=c.listener,h!==a&&r.isPropagationStopped())break e;Qu(r,c,m),a=h}else for(l=0;l<i.length;l++){if(c=i[l],h=c.instance,m=c.currentTarget,c=c.listener,h!==a&&r.isPropagationStopped())break e;Qu(r,c,m),a=h}}}if(Gr)throw e=Za,Gr=!1,Za=null,e}function fe(e,t){var n=t[cl];n===void 0&&(n=t[cl]=new Set);var i=e+"__bubble";n.has(i)||(lp(t,e,2,!1),n.add(i))}function ya(e,t,n){var i=0;t&&(i|=4),lp(n,e,i,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[kr]){e[kr]=!0,mh.forEach(function(n){n!=="selectionchange"&&(Bg.has(n)||ya(n,!1,e),ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,ya("selectionchange",!1,t))}}function lp(e,t,n,i){switch(Vh(t)){case 1:var r=tg;break;case 4:r=ng;break;default:r=Ql}n=r.bind(null,t,n,e),r=void 0,!Ja||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function va(e,t,n,i,r){var a=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var c=i.stateNode.containerInfo;if(c===r||c.nodeType===8&&c.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===r||h.nodeType===8&&h.parentNode===r))return;l=l.return}for(;c!==null;){if(l=Mn(c),l===null)return;if(h=l.tag,h===5||h===6){i=a=l;continue e}c=c.parentNode}}i=i.return}Ih(function(){var m=a,E=Yl(n),j=[];e:{var b=op.get(e);if(b!==void 0){var k=Jl,C=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":k=yg;break;case"focusin":C="focus",k=da;break;case"focusout":C="blur",k=da;break;case"beforeblur":case"afterblur":k=da;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=wg;break;case np:case sp:case ip:k=lg;break;case rp:k=bg;break;case"scroll":k=sg;break;case"wheel":k=kg;break;case"copy":case"cut":case"paste":k=ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Hu}var A=(t&4)!==0,_=!A&&e==="scroll",g=A?b!==null?b+"Capture":null:b;A=[];for(var p=m,S;p!==null;){S=p;var R=S.stateNode;if(S.tag===5&&R!==null&&(S=R,g!==null&&(R=Ni(p,g),R!=null&&A.push(Ri(p,R,S)))),_)break;p=p.return}0<A.length&&(b=new k(b,C,null,n,E),j.push({event:b,listeners:A}))}}if(!(t&7)){e:{if(b=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",b&&n!==Qa&&(C=n.relatedTarget||n.fromElement)&&(Mn(C)||C[qt]))break e;if((k||b)&&(b=E.window===E?E:(b=E.ownerDocument)?b.defaultView||b.parentWindow:window,k?(C=n.relatedTarget||n.toElement,k=m,C=C?Mn(C):null,C!==null&&(_=Xn(C),C!==_||C.tag!==5&&C.tag!==6)&&(C=null)):(k=null,C=m),k!==C)){if(A=Fu,R="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(A=Hu,R="onPointerLeave",g="onPointerEnter",p="pointer"),_=k==null?b:os(k),S=C==null?b:os(C),b=new A(R,p+"leave",k,n,E),b.target=_,b.relatedTarget=S,R=null,Mn(E)===m&&(A=new A(g,p+"enter",C,n,E),A.target=S,A.relatedTarget=_,R=A),_=R,k&&C)t:{for(A=k,g=C,p=0,S=A;S;S=es(S))p++;for(S=0,R=g;R;R=es(R))S++;for(;0<p-S;)A=es(A),p--;for(;0<S-p;)g=es(g),S--;for(;p--;){if(A===g||g!==null&&A===g.alternate)break t;A=es(A),g=es(g)}A=null}else A=null;k!==null&&qu(j,b,k,A,!1),C!==null&&_!==null&&qu(j,_,C,A,!0)}}e:{if(b=m?os(m):window,k=b.nodeName&&b.nodeName.toLowerCase(),k==="select"||k==="input"&&b.type==="file")var L=Ig;else if(Wu(b))if(qh)L=Lg;else{L=Rg;var M=Dg}else(k=b.nodeName)&&k.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(L=_g);if(L&&(L=L(e,m))){Qh(j,L,n,E);break e}M&&M(e,b,m),e==="focusout"&&(M=b._wrapperState)&&M.controlled&&b.type==="number"&&Va(b,"number",b.value)}switch(M=m?os(m):window,e){case"focusin":(Wu(M)||M.contentEditable==="true")&&(is=M,sl=m,yi=null);break;case"focusout":yi=sl=is=null;break;case"mousedown":il=!0;break;case"contextmenu":case"mouseup":case"dragend":il=!1,Xu(j,n,E);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":Xu(j,n,E)}var x;if(ec)e:{switch(e){case"compositionstart":var f="onCompositionStart";break e;case"compositionend":f="onCompositionEnd";break e;case"compositionupdate":f="onCompositionUpdate";break e}f=void 0}else ss?Xh(e,n)&&(f="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(f="onCompositionStart");f&&(Gh&&n.locale!=="ko"&&(ss||f!=="onCompositionStart"?f==="onCompositionEnd"&&ss&&(x=Yh()):(fn=E,ql="value"in fn?fn.value:fn.textContent,ss=!0)),M=Jr(m,f),0<M.length&&(f=new Uu(f,e,null,n,E),j.push({event:f,listeners:M}),x?f.data=x:(x=Kh(n),x!==null&&(f.data=x)))),(x=Ng?Tg(e,n):Eg(e,n))&&(m=Jr(m,"onBeforeInput"),0<m.length&&(E=new Uu("onBeforeInput","beforeinput",null,n,E),j.push({event:E,listeners:m}),E.data=x))}ap(j,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ni(e,n),a!=null&&i.unshift(Ri(e,a,r)),a=Ni(e,t),a!=null&&i.push(Ri(e,a,r))),e=e.return}return i}function es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qu(e,t,n,i,r){for(var a=t._reactName,l=[];n!==null&&n!==i;){var c=n,h=c.alternate,m=c.stateNode;if(h!==null&&h===i)break;c.tag===5&&m!==null&&(c=m,r?(h=Ni(n,a),h!=null&&l.unshift(Ri(n,h,c))):r||(h=Ni(n,a),h!=null&&l.push(Ri(n,h,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var zg=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function Ju(e){return(typeof e=="string"?e:""+e).replace(zg,`
`).replace(Wg,"")}function Cr(e,t,n){if(t=Ju(t),Ju(e)!==t&&n)throw Error(F(425))}function Zr(){}var rl=null,ol=null;function al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ll=typeof setTimeout=="function"?setTimeout:void 0,$g=typeof clearTimeout=="function"?clearTimeout:void 0,Zu=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zu<"u"?function(e){return Zu.resolve(null).then(e).catch(Yg)}:ll;function Yg(e){setTimeout(function(){throw e})}function xa(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){e.removeChild(r),Pi(t);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pi(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ed(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Is,_i="__reactProps$"+Is,qt="__reactContainer$"+Is,cl="__reactEvents$"+Is,Gg="__reactListeners$"+Is,Xg="__reactHandles$"+Is;function Mn(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ed(e);e!==null;){if(n=e[Mt])return n;e=ed(e)}return t}e=n,n=e.parentNode}return null}function Vi(e){return e=e[Mt]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function os(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function To(e){return e[_i]||null}var ul=[],as=-1;function En(e){return{current:e}}function ge(e){0>as||(e.current=ul[as],ul[as]=null,as--)}function he(e,t){as++,ul[as]=e.current,e.current=t}var Nn={},$e=En(Nn),Ze=En(!1),zn=Nn;function bs(e,t){var n=e.type.contextTypes;if(!n)return Nn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function et(e){return e=e.childContextTypes,e!=null}function eo(){ge(Ze),ge($e)}function td(e,t,n){if($e.current!==Nn)throw Error(F(168));he($e,t),he(Ze,n)}function cp(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(F(108,Dm(e)||"Unknown",r));return je({},n,i)}function to(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,zn=$e.current,he($e,e),he(Ze,Ze.current),!0}function nd(e,t,n){var i=e.stateNode;if(!i)throw Error(F(169));n?(e=cp(e,t,zn),i.__reactInternalMemoizedMergedChildContext=e,ge(Ze),ge($e),he($e,e)):ge(Ze),he(Ze,n)}var $t=null,Eo=!1,wa=!1;function up(e){$t===null?$t=[e]:$t.push(e)}function Kg(e){Eo=!0,up(e)}function Pn(){if(!wa&&$t!==null){wa=!0;var e=0,t=le;try{var n=$t;for(le=1;e<n.length;e++){var i=n[e];do i=i(!0);while(i!==null)}$t=null,Eo=!1}catch(r){throw $t!==null&&($t=$t.slice(e+1)),Lh(Gl,Pn),r}finally{le=t,wa=!1}}return null}var ls=[],cs=0,no=null,so=0,ht=[],pt=0,Wn=null,Vt=1,Yt="";function Ln(e,t){ls[cs++]=so,ls[cs++]=no,no=e,so=t}function dp(e,t,n){ht[pt++]=Vt,ht[pt++]=Yt,ht[pt++]=Wn,Wn=e;var i=Vt;e=Yt;var r=32-Pt(i)-1;i&=~(1<<r),n+=1;var a=32-Pt(t)+r;if(30<a){var l=r-r%5;a=(i&(1<<l)-1).toString(32),i>>=l,r-=l,Vt=1<<32-Pt(t)+r|n<<r|i,Yt=a+e}else Vt=1<<a|n<<r|i,Yt=e}function nc(e){e.return!==null&&(Ln(e,1),dp(e,1,0))}function sc(e){for(;e===no;)no=ls[--cs],ls[cs]=null,so=ls[--cs],ls[cs]=null;for(;e===Wn;)Wn=ht[--pt],ht[pt]=null,Yt=ht[--pt],ht[pt]=null,Vt=ht[--pt],ht[pt]=null}var rt=null,it=null,ye=!1,bt=null;function hp(e,t){var n=ft(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,it=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:Vt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ft(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,it=null,!0):!1;default:return!1}}function dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hl(e){if(ye){var t=it;if(t){var n=t;if(!sd(e,t)){if(dl(e))throw Error(F(418));t=xn(n.nextSibling);var i=rt;t&&sd(e,t)?hp(i,n):(e.flags=e.flags&-4097|2,ye=!1,rt=e)}}else{if(dl(e))throw Error(F(418));e.flags=e.flags&-4097|2,ye=!1,rt=e}}}function id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function Nr(e){if(e!==rt)return!1;if(!ye)return id(e),ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!al(e.type,e.memoizedProps)),t&&(t=it)){if(dl(e))throw pp(),Error(F(418));for(;t;)hp(e,t),t=xn(t.nextSibling)}if(id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=rt?xn(e.stateNode.nextSibling):null;return!0}function pp(){for(var e=it;e;)e=xn(e.nextSibling)}function Ss(){it=rt=null,ye=!1}function ic(e){bt===null?bt=[e]:bt.push(e)}var Qg=tn.ReactCurrentBatchConfig;function ri(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var i=n.stateNode}if(!i)throw Error(F(147,e));var r=i,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var c=r.refs;l===null?delete c[a]:c[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rd(e){var t=e._init;return t(e._payload)}function fp(e){function t(g,p){if(e){var S=g.deletions;S===null?(g.deletions=[p],g.flags|=16):S.push(p)}}function n(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function i(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function r(g,p){return g=Sn(g,p),g.index=0,g.sibling=null,g}function a(g,p,S){return g.index=S,e?(S=g.alternate,S!==null?(S=S.index,S<p?(g.flags|=2,p):S):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function c(g,p,S,R){return p===null||p.tag!==6?(p=Ta(S,g.mode,R),p.return=g,p):(p=r(p,S),p.return=g,p)}function h(g,p,S,R){var L=S.type;return L===ns?E(g,p,S.props.children,R,S.key):p!==null&&(p.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===un&&rd(L)===p.type)?(R=r(p,S.props),R.ref=ri(g,p,S),R.return=g,R):(R=$r(S.type,S.key,S.props,null,g.mode,R),R.ref=ri(g,p,S),R.return=g,R)}function m(g,p,S,R){return p===null||p.tag!==4||p.stateNode.containerInfo!==S.containerInfo||p.stateNode.implementation!==S.implementation?(p=Ea(S,g.mode,R),p.return=g,p):(p=r(p,S.children||[]),p.return=g,p)}function E(g,p,S,R,L){return p===null||p.tag!==7?(p=Bn(S,g.mode,R,L),p.return=g,p):(p=r(p,S),p.return=g,p)}function j(g,p,S){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ta(""+p,g.mode,S),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case gr:return S=$r(p.type,p.key,p.props,null,g.mode,S),S.ref=ri(g,null,p),S.return=g,S;case ts:return p=Ea(p,g.mode,S),p.return=g,p;case un:var R=p._init;return j(g,R(p._payload),S)}if(ci(p)||ei(p))return p=Bn(p,g.mode,S,null),p.return=g,p;Tr(g,p)}return null}function b(g,p,S,R){var L=p!==null?p.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return L!==null?null:c(g,p,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gr:return S.key===L?h(g,p,S,R):null;case ts:return S.key===L?m(g,p,S,R):null;case un:return L=S._init,b(g,p,L(S._payload),R)}if(ci(S)||ei(S))return L!==null?null:E(g,p,S,R,null);Tr(g,S)}return null}function k(g,p,S,R,L){if(typeof R=="string"&&R!==""||typeof R=="number")return g=g.get(S)||null,c(p,g,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case gr:return g=g.get(R.key===null?S:R.key)||null,h(p,g,R,L);case ts:return g=g.get(R.key===null?S:R.key)||null,m(p,g,R,L);case un:var M=R._init;return k(g,p,S,M(R._payload),L)}if(ci(R)||ei(R))return g=g.get(S)||null,E(p,g,R,L,null);Tr(p,R)}return null}function C(g,p,S,R){for(var L=null,M=null,x=p,f=p=0,w=null;x!==null&&f<S.length;f++){x.index>f?(w=x,x=null):w=x.sibling;var T=b(g,x,S[f],R);if(T===null){x===null&&(x=w);break}e&&x&&T.alternate===null&&t(g,x),p=a(T,p,f),M===null?L=T:M.sibling=T,M=T,x=w}if(f===S.length)return n(g,x),ye&&Ln(g,f),L;if(x===null){for(;f<S.length;f++)x=j(g,S[f],R),x!==null&&(p=a(x,p,f),M===null?L=x:M.sibling=x,M=x);return ye&&Ln(g,f),L}for(x=i(g,x);f<S.length;f++)w=k(x,g,f,S[f],R),w!==null&&(e&&w.alternate!==null&&x.delete(w.key===null?f:w.key),p=a(w,p,f),M===null?L=w:M.sibling=w,M=w);return e&&x.forEach(function(P){return t(g,P)}),ye&&Ln(g,f),L}function A(g,p,S,R){var L=ei(S);if(typeof L!="function")throw Error(F(150));if(S=L.call(S),S==null)throw Error(F(151));for(var M=L=null,x=p,f=p=0,w=null,T=S.next();x!==null&&!T.done;f++,T=S.next()){x.index>f?(w=x,x=null):w=x.sibling;var P=b(g,x,T.value,R);if(P===null){x===null&&(x=w);break}e&&x&&P.alternate===null&&t(g,x),p=a(P,p,f),M===null?L=P:M.sibling=P,M=P,x=w}if(T.done)return n(g,x),ye&&Ln(g,f),L;if(x===null){for(;!T.done;f++,T=S.next())T=j(g,T.value,R),T!==null&&(p=a(T,p,f),M===null?L=T:M.sibling=T,M=T);return ye&&Ln(g,f),L}for(x=i(g,x);!T.done;f++,T=S.next())T=k(x,g,f,T.value,R),T!==null&&(e&&T.alternate!==null&&x.delete(T.key===null?f:T.key),p=a(T,p,f),M===null?L=T:M.sibling=T,M=T);return e&&x.forEach(function(N){return t(g,N)}),ye&&Ln(g,f),L}function _(g,p,S,R){if(typeof S=="object"&&S!==null&&S.type===ns&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case gr:e:{for(var L=S.key,M=p;M!==null;){if(M.key===L){if(L=S.type,L===ns){if(M.tag===7){n(g,M.sibling),p=r(M,S.props.children),p.return=g,g=p;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===un&&rd(L)===M.type){n(g,M.sibling),p=r(M,S.props),p.ref=ri(g,M,S),p.return=g,g=p;break e}n(g,M);break}else t(g,M);M=M.sibling}S.type===ns?(p=Bn(S.props.children,g.mode,R,S.key),p.return=g,g=p):(R=$r(S.type,S.key,S.props,null,g.mode,R),R.ref=ri(g,p,S),R.return=g,g=R)}return l(g);case ts:e:{for(M=S.key;p!==null;){if(p.key===M)if(p.tag===4&&p.stateNode.containerInfo===S.containerInfo&&p.stateNode.implementation===S.implementation){n(g,p.sibling),p=r(p,S.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else t(g,p);p=p.sibling}p=Ea(S,g.mode,R),p.return=g,g=p}return l(g);case un:return M=S._init,_(g,p,M(S._payload),R)}if(ci(S))return C(g,p,S,R);if(ei(S))return A(g,p,S,R);Tr(g,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,p!==null&&p.tag===6?(n(g,p.sibling),p=r(p,S),p.return=g,g=p):(n(g,p),p=Ta(S,g.mode,R),p.return=g,g=p),l(g)):n(g,p)}return _}var ks=fp(!0),mp=fp(!1),io=En(null),ro=null,us=null,rc=null;function oc(){rc=us=ro=null}function ac(e){var t=io.current;ge(io),e._currentValue=t}function pl(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ys(e,t){ro=e,rc=us=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(rc!==e)if(e={context:e,memoizedValue:t,next:null},us===null){if(ro===null)throw Error(F(308));us=e,ro.dependencies={lanes:0,firstContext:e}}else us=us.next=e;return t}var Fn=null;function lc(e){Fn===null?Fn=[e]:Fn.push(e)}function gp(e,t,n,i){var r=t.interleaved;return r===null?(n.next=n,lc(t)):(n.next=r.next,r.next=n),t.interleaved=n,Jt(e,i)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,re&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,Jt(e,n)}return r=i.interleaved,r===null?(t.next=t,lc(i)):(t.next=r.next,r.next=t),i.interleaved=t,Jt(e,n)}function Fr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Xl(e,n)}}function od(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,i){var r=e.updateQueue;dn=!1;var a=r.firstBaseUpdate,l=r.lastBaseUpdate,c=r.shared.pending;if(c!==null){r.shared.pending=null;var h=c,m=h.next;h.next=null,l===null?a=m:l.next=m,l=h;var E=e.alternate;E!==null&&(E=E.updateQueue,c=E.lastBaseUpdate,c!==l&&(c===null?E.firstBaseUpdate=m:c.next=m,E.lastBaseUpdate=h))}if(a!==null){var j=r.baseState;l=0,E=m=h=null,c=a;do{var b=c.lane,k=c.eventTime;if((i&b)===b){E!==null&&(E=E.next={eventTime:k,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var C=e,A=c;switch(b=t,k=n,A.tag){case 1:if(C=A.payload,typeof C=="function"){j=C.call(k,j,b);break e}j=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=A.payload,b=typeof C=="function"?C.call(k,j,b):C,b==null)break e;j=je({},j,b);break e;case 2:dn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,b=r.effects,b===null?r.effects=[c]:b.push(c))}else k={eventTime:k,lane:b,tag:c.tag,payload:c.payload,callback:c.callback,next:null},E===null?(m=E=k,h=j):E=E.next=k,l|=b;if(c=c.next,c===null){if(c=r.shared.pending,c===null)break;b=c,c=b.next,b.next=null,r.lastBaseUpdate=b,r.shared.pending=null}}while(!0);if(E===null&&(h=j),r.baseState=h,r.firstBaseUpdate=m,r.lastBaseUpdate=E,t=r.shared.interleaved,t!==null){r=t;do l|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);Vn|=l,e.lanes=l,e.memoizedState=j}}function ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(F(191,r));r.call(i)}}}var Yi={},Ut=En(Yi),Li=En(Yi),Oi=En(Yi);function Un(e){if(e===Yi)throw Error(F(174));return e}function uc(e,t){switch(he(Oi,t),he(Li,e),he(Ut,Yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ga(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ga(t,e)}ge(Ut),he(Ut,t)}function Cs(){ge(Ut),ge(Li),ge(Oi)}function vp(e){Un(Oi.current);var t=Un(Ut.current),n=Ga(t,e.type);t!==n&&(he(Li,e),he(Ut,n))}function dc(e){Li.current===e&&(ge(Ut),ge(Li))}var xe=En(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ja=[];function hc(){for(var e=0;e<ja.length;e++)ja[e]._workInProgressVersionPrimary=null;ja.length=0}var Ur=tn.ReactCurrentDispatcher,ba=tn.ReactCurrentBatchConfig,$n=0,we=null,Pe=null,De=null,lo=!1,vi=!1,Mi=0,qg=0;function Be(){throw Error(F(321))}function pc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function fc(e,t,n,i,r,a){if($n=a,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ur.current=e===null||e.memoizedState===null?ty:ny,e=n(i,r),vi){a=0;do{if(vi=!1,Mi=0,25<=a)throw Error(F(301));a+=1,De=Pe=null,t.updateQueue=null,Ur.current=sy,e=n(i,r)}while(vi)}if(Ur.current=co,t=Pe!==null&&Pe.next!==null,$n=0,De=Pe=we=null,lo=!1,t)throw Error(F(300));return e}function mc(){var e=Mi!==0;return Mi=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?we.memoizedState=De=e:De=De.next=e,De}function yt(){if(Pe===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=De===null?we.memoizedState:De.next;if(t!==null)De=t,Pe=e;else{if(e===null)throw Error(F(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},De===null?we.memoizedState=De=e:De=De.next=e}return De}function Fi(e,t){return typeof t=="function"?t(e):t}function Sa(e){var t=yt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var i=Pe,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var l=r.next;r.next=a.next,a.next=l}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var c=l=null,h=null,m=a;do{var E=m.lane;if(($n&E)===E)h!==null&&(h=h.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),i=m.hasEagerState?m.eagerState:e(i,m.action);else{var j={lane:E,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};h===null?(c=h=j,l=i):h=h.next=j,we.lanes|=E,Vn|=E}m=m.next}while(m!==null&&m!==a);h===null?l=i:h.next=c,It(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseState=l,t.baseQueue=h,n.lastRenderedState=i}if(e=n.interleaved,e!==null){r=e;do a=r.lane,we.lanes|=a,Vn|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ka(e){var t=yt(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do a=e(a,l.action),l=l.next;while(l!==r);It(a,t.memoizedState)||(Je=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function xp(){}function wp(e,t){var n=we,i=yt(),r=t(),a=!It(i.memoizedState,r);if(a&&(i.memoizedState=r,Je=!0),i=i.queue,gc(Sp.bind(null,n,i,e),[e]),i.getSnapshot!==t||a||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Ui(9,bp.bind(null,n,i,r,t),void 0,null),Re===null)throw Error(F(349));$n&30||jp(n,t,r)}return r}function jp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bp(e,t,n,i){t.value=n,t.getSnapshot=i,kp(t)&&Cp(e)}function Sp(e,t,n){return n(function(){kp(t)&&Cp(e)})}function kp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Cp(e){var t=Jt(e,1);t!==null&&At(t,e,1,-1)}function ld(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fi,lastRenderedState:e},t.queue=e,e=e.dispatch=ey.bind(null,we,e),[t.memoizedState,e]}function Ui(e,t,n,i){return e={tag:e,create:t,destroy:n,deps:i,next:null},t=we.updateQueue,t===null?(t={lastEffect:null,stores:null},we.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e)),e}function Np(){return yt().memoizedState}function Hr(e,t,n,i){var r=Lt();we.flags|=e,r.memoizedState=Ui(1|t,n,void 0,i===void 0?null:i)}function Po(e,t,n,i){var r=yt();i=i===void 0?null:i;var a=void 0;if(Pe!==null){var l=Pe.memoizedState;if(a=l.destroy,i!==null&&pc(i,l.deps)){r.memoizedState=Ui(t,n,a,i);return}}we.flags|=e,r.memoizedState=Ui(1|t,n,a,i)}function cd(e,t){return Hr(8390656,8,e,t)}function gc(e,t){return Po(2048,8,e,t)}function Tp(e,t){return Po(4,2,e,t)}function Ep(e,t){return Po(4,4,e,t)}function Pp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ap(e,t,n){return n=n!=null?n.concat([e]):null,Po(4,4,Pp.bind(null,t,e),n)}function yc(){}function Ip(e,t){var n=yt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&pc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Dp(e,t){var n=yt();t=t===void 0?null:t;var i=n.memoizedState;return i!==null&&t!==null&&pc(t,i[1])?i[0]:(e=e(),n.memoizedState=[e,t],e)}function Rp(e,t,n){return $n&21?(It(n,t)||(n=Fh(),we.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function Jg(e,t){var n=le;le=n!==0&&4>n?n:4,e(!0);var i=ba.transition;ba.transition={};try{e(!1),t()}finally{le=n,ba.transition=i}}function _p(){return yt().memoizedState}function Zg(e,t,n){var i=bn(e);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Lp(e))Op(t,n);else if(n=gp(e,t,n,i),n!==null){var r=Ge();At(n,e,i,r),Mp(n,t,i)}}function ey(e,t,n){var i=bn(e),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lp(e))Op(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,c=a(l,n);if(r.hasEagerState=!0,r.eagerState=c,It(c,l)){var h=t.interleaved;h===null?(r.next=r,lc(t)):(r.next=h.next,h.next=r),t.interleaved=r;return}}catch{}finally{}n=gp(e,t,r,i),n!==null&&(r=Ge(),At(n,e,i,r),Mp(n,t,i))}}function Lp(e){var t=e.alternate;return e===we||t!==null&&t===we}function Op(e,t){vi=lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Mp(e,t,n){if(n&4194240){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Xl(e,n)}}var co={readContext:gt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},ty={readContext:gt,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:cd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4194308,4,Pp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hr(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var i=Lt();return t=n!==void 0?n(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=Zg.bind(null,we,e),[i.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:ld,useDebugValue:yc,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=ld(!1),t=e[0];return e=Jg.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=we,r=Lt();if(ye){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),Re===null)throw Error(F(349));$n&30||jp(i,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,cd(Sp.bind(null,i,a,e),[e]),i.flags|=2048,Ui(9,bp.bind(null,i,a,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Re.identifierPrefix;if(ye){var n=Yt,i=Vt;n=(i&~(1<<32-Pt(i)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ny={readContext:gt,useCallback:Ip,useContext:gt,useEffect:gc,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:Ep,useMemo:Dp,useReducer:Sa,useRef:Np,useState:function(){return Sa(Fi)},useDebugValue:yc,useDeferredValue:function(e){var t=yt();return Rp(t,Pe.memoizedState,e)},useTransition:function(){var e=Sa(Fi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:xp,useSyncExternalStore:wp,useId:_p,unstable_isNewReconciler:!1},sy={readContext:gt,useCallback:Ip,useContext:gt,useEffect:gc,useImperativeHandle:Ap,useInsertionEffect:Tp,useLayoutEffect:Ep,useMemo:Dp,useReducer:ka,useRef:Np,useState:function(){return ka(Fi)},useDebugValue:yc,useDeferredValue:function(e){var t=yt();return Pe===null?t.memoizedState=e:Rp(t,Pe.memoizedState,e)},useTransition:function(){var e=ka(Fi)[0],t=yt().memoizedState;return[e,t]},useMutableSource:xp,useSyncExternalStore:wp,useId:_p,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fl(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ao={isMounted:function(e){return(e=e._reactInternals)?Xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ge(),r=bn(e),a=Kt(i,r);a.payload=t,n!=null&&(a.callback=n),t=wn(e,a,r),t!==null&&(At(t,e,r,i),Fr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ge(),r=bn(e),a=Kt(i,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=wn(e,a,r),t!==null&&(At(t,e,r,i),Fr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),i=bn(e),r=Kt(n,i);r.tag=2,t!=null&&(r.callback=t),t=wn(e,r,i),t!==null&&(At(t,e,i,n),Fr(t,e,i))}};function ud(e,t,n,i,r,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,l):t.prototype&&t.prototype.isPureReactComponent?!Ii(n,i)||!Ii(r,a):!0}function Fp(e,t,n){var i=!1,r=Nn,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(r=et(t)?zn:$e.current,i=t.contextTypes,a=(i=i!=null)?bs(e,r):Nn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ao,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function dd(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Ao.enqueueReplaceState(t,t.state,null)}function ml(e,t,n,i){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},cc(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=gt(a):(a=et(t)?zn:$e.current,r.context=bs(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(fl(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Ao.enqueueReplaceState(r,r.state,null),oo(e,n,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ns(e,t){try{var n="",i=t;do n+=Im(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function Ca(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var iy=typeof WeakMap=="function"?WeakMap:Map;function Up(e,t,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var i=t.value;return n.callback=function(){ho||(ho=!0,Nl=i),gl(e,t)},n}function Hp(e,t,n){n=Kt(-1,n),n.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;n.payload=function(){return i(r)},n.callback=function(){gl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){gl(e,t),typeof i!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function hd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new iy;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(r.add(n),e=vy.bind(null,e,t,n),t.then(e,e))}function pd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fd(e,t,n,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var ry=tn.ReactCurrentOwner,Je=!1;function Ye(e,t,n,i){t.child=e===null?mp(t,null,n,i):ks(t,e.child,n,i)}function md(e,t,n,i,r){n=n.render;var a=t.ref;return ys(t,r),i=fc(e,t,n,i,a,r),n=mc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Zt(e,t,r)):(ye&&n&&nc(t),t.flags|=1,Ye(e,t,i,r),t.child)}function gd(e,t,n,i,r){if(e===null){var a=n.type;return typeof a=="function"&&!Cc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Bp(e,t,a,i,r)):(e=$r(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ii,n(l,i)&&e.ref===t.ref)return Zt(e,t,r)}return t.flags|=1,e=Sn(a,i),e.ref=t.ref,e.return=t,t.child=e}function Bp(e,t,n,i,r){if(e!==null){var a=e.memoizedProps;if(Ii(a,i)&&e.ref===t.ref)if(Je=!1,t.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,Zt(e,t,r)}return yl(e,t,n,i,r)}function zp(e,t,n){var i=t.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(hs,nt),nt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,he(hs,nt),nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,he(hs,nt),nt|=i}else a!==null?(i=a.baseLanes|n,t.memoizedState=null):i=n,he(hs,nt),nt|=i;return Ye(e,t,r,n),t.child}function Wp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function yl(e,t,n,i,r){var a=et(n)?zn:$e.current;return a=bs(t,a),ys(t,r),n=fc(e,t,n,i,a,r),i=mc(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Zt(e,t,r)):(ye&&i&&nc(t),t.flags|=1,Ye(e,t,n,r),t.child)}function yd(e,t,n,i,r){if(et(n)){var a=!0;to(t)}else a=!1;if(ys(t,r),t.stateNode===null)Br(e,t),Fp(t,n,i),ml(t,n,i,r),i=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var h=l.context,m=n.contextType;typeof m=="object"&&m!==null?m=gt(m):(m=et(n)?zn:$e.current,m=bs(t,m));var E=n.getDerivedStateFromProps,j=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function";j||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==i||h!==m)&&dd(t,l,i,m),dn=!1;var b=t.memoizedState;l.state=b,oo(t,i,l,r),h=t.memoizedState,c!==i||b!==h||Ze.current||dn?(typeof E=="function"&&(fl(t,n,E,i),h=t.memoizedState),(c=dn||ud(t,n,c,i,b,h,m))?(j||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),l.props=i,l.state=h,l.context=m,i=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,yp(e,t),c=t.memoizedProps,m=t.type===t.elementType?c:wt(t.type,c),l.props=m,j=t.pendingProps,b=l.context,h=n.contextType,typeof h=="object"&&h!==null?h=gt(h):(h=et(n)?zn:$e.current,h=bs(t,h));var k=n.getDerivedStateFromProps;(E=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==j||b!==h)&&dd(t,l,i,h),dn=!1,b=t.memoizedState,l.state=b,oo(t,i,l,r);var C=t.memoizedState;c!==j||b!==C||Ze.current||dn?(typeof k=="function"&&(fl(t,n,k,i),C=t.memoizedState),(m=dn||ud(t,n,m,i,b,C,h)||!1)?(E||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,C,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,C,h)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=C),l.props=i,l.state=C,l.context=h,i=m):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),i=!1)}return vl(e,t,n,i,a,r)}function vl(e,t,n,i,r,a){Wp(e,t);var l=(t.flags&128)!==0;if(!i&&!l)return r&&nd(t,n,!1),Zt(e,t,a);i=t.stateNode,ry.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&l?(t.child=ks(t,e.child,null,a),t.child=ks(t,null,c,a)):Ye(e,t,c,a),t.memoizedState=i.state,r&&nd(t,n,!0),t.child}function $p(e){var t=e.stateNode;t.pendingContext?td(e,t.pendingContext,t.pendingContext!==t.context):t.context&&td(e,t.context,!1),uc(e,t.containerInfo)}function vd(e,t,n,i,r){return Ss(),ic(r),t.flags|=256,Ye(e,t,n,i),t.child}var xl={dehydrated:null,treeContext:null,retryLane:0};function wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vp(e,t,n){var i=t.pendingProps,r=xe.current,a=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(r&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),he(xe,r&1),e===null)return hl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=i.children,e=i.fallback,a?(i=t.mode,a=t.child,l={mode:"hidden",children:l},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=Ro(l,i,0,null),e=Bn(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=wl(n),t.memoizedState=xl,e):vc(t,l));if(r=e.memoizedState,r!==null&&(c=r.dehydrated,c!==null))return oy(e,t,l,i,c,r,n);if(a){a=i.fallback,l=t.mode,r=e.child,c=r.sibling;var h={mode:"hidden",children:i.children};return!(l&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=h,t.deletions=null):(i=Sn(r,h),i.subtreeFlags=r.subtreeFlags&14680064),c!==null?a=Sn(c,a):(a=Bn(a,l,n,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,l=e.child.memoizedState,l=l===null?wl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=xl,i}return a=e.child,e=a.sibling,i=Sn(a,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=n),i.return=t,i.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function vc(e,t){return t=Ro({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Er(e,t,n,i){return i!==null&&ic(i),ks(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oy(e,t,n,i,r,a,l){if(n)return t.flags&256?(t.flags&=-257,i=Ca(Error(F(422))),Er(e,t,l,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=i.fallback,r=t.mode,i=Ro({mode:"visible",children:i.children},r,0,null),a=Bn(a,r,l,null),a.flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,t.mode&1&&ks(t,e.child,null,l),t.child.memoizedState=wl(l),t.memoizedState=xl,a);if(!(t.mode&1))return Er(e,t,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var c=i.dgst;return i=c,a=Error(F(419)),i=Ca(a,i,void 0),Er(e,t,l,i)}if(c=(l&e.childLanes)!==0,Je||c){if(i=Re,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Jt(e,r),At(i,e,r,-1))}return kc(),i=Ca(Error(F(421))),Er(e,t,l,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=xy.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,it=xn(r.nextSibling),rt=t,ye=!0,bt=null,e!==null&&(ht[pt++]=Vt,ht[pt++]=Yt,ht[pt++]=Wn,Vt=e.id,Yt=e.overflow,Wn=t),t=vc(t,i.children),t.flags|=4096,t)}function xd(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),pl(e.return,t,n)}function Na(e,t,n,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Yp(e,t,n){var i=t.pendingProps,r=i.revealOrder,a=i.tail;if(Ye(e,t,i.children,n),i=xe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,n,t);else if(e.tag===19)xd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(he(xe,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Na(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&ao(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Na(t,!0,n,null,a);break;case"together":Na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=Sn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Sn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ay(e,t,n){switch(t.tag){case 3:$p(t),Ss();break;case 5:vp(t);break;case 1:et(t.type)&&to(t);break;case 4:uc(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;he(io,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(he(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?Vp(e,t,n):(he(xe,xe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);he(xe,xe.current&1);break;case 19:if(i=(n&t.childLanes)!==0,e.flags&128){if(i)return Yp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),he(xe,xe.current),i)break;return null;case 22:case 23:return t.lanes=0,zp(e,t,n)}return Zt(e,t,n)}var Gp,jl,Xp,Kp;Gp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jl=function(){};Xp=function(e,t,n,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Un(Ut.current);var a=null;switch(n){case"input":r=Wa(e,r),i=Wa(e,i),a=[];break;case"select":r=je({},r,{value:void 0}),i=je({},i,{value:void 0}),a=[];break;case"textarea":r=Ya(e,r),i=Ya(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Zr)}Xa(n,i);var l;n=null;for(m in r)if(!i.hasOwnProperty(m)&&r.hasOwnProperty(m)&&r[m]!=null)if(m==="style"){var c=r[m];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(ki.hasOwnProperty(m)?a||(a=[]):(a=a||[]).push(m,null));for(m in i){var h=i[m];if(c=r!=null?r[m]:void 0,i.hasOwnProperty(m)&&h!==c&&(h!=null||c!=null))if(m==="style")if(c){for(l in c)!c.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in h)h.hasOwnProperty(l)&&c[l]!==h[l]&&(n||(n={}),n[l]=h[l])}else n||(a||(a=[]),a.push(m,n)),n=h;else m==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,c=c?c.__html:void 0,h!=null&&c!==h&&(a=a||[]).push(m,h)):m==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(m,""+h):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(ki.hasOwnProperty(m)?(h!=null&&m==="onScroll"&&fe("scroll",e),a||c===h||(a=[])):(a=a||[]).push(m,h))}n&&(a=a||[]).push("style",n);var m=a;(t.updateQueue=m)&&(t.flags|=4)}};Kp=function(e,t,n,i){n!==i&&(t.flags|=4)};function oi(e,t){if(!ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function ly(e,t,n){var i=t.pendingProps;switch(sc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return et(t.type)&&eo(),ze(t),null;case 3:return i=t.stateNode,Cs(),ge(Ze),ge($e),hc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Nr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(Pl(bt),bt=null))),jl(e,t),ze(t),null;case 5:dc(t);var r=Un(Oi.current);if(n=t.type,e!==null&&t.stateNode!=null)Xp(e,t,n,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(F(166));return ze(t),null}if(e=Un(Ut.current),Nr(t)){i=t.stateNode,n=t.type;var a=t.memoizedProps;switch(i[Mt]=t,i[_i]=a,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",i),fe("close",i);break;case"iframe":case"object":case"embed":fe("load",i);break;case"video":case"audio":for(r=0;r<di.length;r++)fe(di[r],i);break;case"source":fe("error",i);break;case"img":case"image":case"link":fe("error",i),fe("load",i);break;case"details":fe("toggle",i);break;case"input":Eu(i,a),fe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},fe("invalid",i);break;case"textarea":Au(i,a),fe("invalid",i)}Xa(n,a),r=null;for(var l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="children"?typeof c=="string"?i.textContent!==c&&(a.suppressHydrationWarning!==!0&&Cr(i.textContent,c,e),r=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&Cr(i.textContent,c,e),r=["children",""+c]):ki.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&fe("scroll",i)}switch(n){case"input":yr(i),Pu(i,a,!0);break;case"textarea":yr(i),Iu(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Zr)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=l.createElement(n,{is:i.is}):(e=l.createElement(n),n==="select"&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,n),e[Mt]=t,e[_i]=i,Gp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ka(n,i),n){case"dialog":fe("cancel",e),fe("close",e),r=i;break;case"iframe":case"object":case"embed":fe("load",e),r=i;break;case"video":case"audio":for(r=0;r<di.length;r++)fe(di[r],e);r=i;break;case"source":fe("error",e),r=i;break;case"img":case"image":case"link":fe("error",e),fe("load",e),r=i;break;case"details":fe("toggle",e),r=i;break;case"input":Eu(e,i),r=Wa(e,i),fe("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=je({},i,{value:void 0}),fe("invalid",e);break;case"textarea":Au(e,i),r=Ya(e,i),fe("invalid",e);break;default:r=i}Xa(n,r),c=r;for(a in c)if(c.hasOwnProperty(a)){var h=c[a];a==="style"?Nh(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&kh(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Ci(e,h):typeof h=="number"&&Ci(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ki.hasOwnProperty(a)?h!=null&&a==="onScroll"&&fe("scroll",e):h!=null&&zl(e,a,h,l))}switch(n){case"input":yr(e),Pu(e,i,!1);break;case"textarea":yr(e),Iu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Cn(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?ps(e,!!i.multiple,a,!1):i.defaultValue!=null&&ps(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Kp(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(F(166));if(n=Un(Oi.current),Un(Ut.current),Nr(t)){if(i=t.stateNode,n=t.memoizedProps,i[Mt]=t,(a=i.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:Cr(i.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(i.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mt]=t,t.stateNode=i}return ze(t),null;case 13:if(ge(xe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ye&&it!==null&&t.mode&1&&!(t.flags&128))pp(),Ss(),t.flags|=98560,a=!1;else if(a=Nr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[Mt]=t}else Ss(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),a=!1}else bt!==null&&(Pl(bt),bt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Ae===0&&(Ae=3):kc())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return Cs(),jl(e,t),e===null&&Di(t.stateNode.containerInfo),ze(t),null;case 10:return ac(t.type._context),ze(t),null;case 17:return et(t.type)&&eo(),ze(t),null;case 19:if(ge(xe),a=t.memoizedState,a===null)return ze(t),null;if(i=(t.flags&128)!==0,l=a.rendering,l===null)if(i)oi(a,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ao(e),l!==null){for(t.flags|=128,oi(a,!1),i=l.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)a=n,e=i,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return he(xe,xe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ne()>Ts&&(t.flags|=128,i=!0,oi(a,!1),t.lanes=4194304)}else{if(!i)if(e=ao(l),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ye)return ze(t),null}else 2*Ne()-a.renderingStartTime>Ts&&n!==1073741824&&(t.flags|=128,i=!0,oi(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ne(),t.sibling=null,n=xe.current,he(xe,i?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Sc(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?nt&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function cy(e,t){switch(sc(t),t.tag){case 1:return et(t.type)&&eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Cs(),ge(Ze),ge($e),hc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dc(t),null;case 13:if(ge(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));Ss()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(xe),null;case 4:return Cs(),null;case 10:return ac(t.type._context),null;case 22:case 23:return Sc(),null;case 24:return null;default:return null}}var Pr=!1,We=!1,uy=typeof WeakSet=="function"?WeakSet:Set,$=null;function ds(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Se(e,t,i)}else n.current=null}function bl(e,t,n){try{n()}catch(i){Se(e,t,i)}}var wd=!1;function dy(e,t){if(rl=Qr,e=ep(),tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,c=-1,h=-1,m=0,E=0,j=e,b=null;t:for(;;){for(var k;j!==n||r!==0&&j.nodeType!==3||(c=l+r),j!==a||i!==0&&j.nodeType!==3||(h=l+i),j.nodeType===3&&(l+=j.nodeValue.length),(k=j.firstChild)!==null;)b=j,j=k;for(;;){if(j===e)break t;if(b===n&&++m===r&&(c=l),b===a&&++E===i&&(h=l),(k=j.nextSibling)!==null)break;j=b,b=j.parentNode}j=k}n=c===-1||h===-1?null:{start:c,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(ol={focusedElem:e,selectionRange:n},Qr=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var C=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var A=C.memoizedProps,_=C.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?A:wt(t.type,A),_);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(R){Se(t,t.return,R)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return C=wd,wd=!1,C}function xi(e,t,n){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&bl(t,n,a)}r=r.next}while(r!==i)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.create;n.destroy=i()}n=n.next}while(n!==t)}}function Sl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qp(e){var t=e.alternate;t!==null&&(e.alternate=null,Qp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[_i],delete t[cl],delete t[Gg],delete t[Xg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qp(e){return e.tag===5||e.tag===3||e.tag===4}function jd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zr));else if(i!==4&&(e=e.child,e!==null))for(kl(e,t,n),e=e.sibling;e!==null;)kl(e,t,n),e=e.sibling}function Cl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Cl(e,t,n),e=e.sibling;e!==null;)Cl(e,t,n),e=e.sibling}var Oe=null,jt=!1;function cn(e,t,n){for(n=n.child;n!==null;)Jp(e,t,n),n=n.sibling}function Jp(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:We||ds(n,t);case 6:var i=Oe,r=jt;Oe=null,cn(e,t,n),Oe=i,jt=r,Oe!==null&&(jt?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(jt?(e=Oe,n=n.stateNode,e.nodeType===8?xa(e.parentNode,n):e.nodeType===1&&xa(e,n),Pi(e)):xa(Oe,n.stateNode));break;case 4:i=Oe,r=jt,Oe=n.stateNode.containerInfo,jt=!0,cn(e,t,n),Oe=i,jt=r;break;case 0:case 11:case 14:case 15:if(!We&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&bl(n,t,l),r=r.next}while(r!==i)}cn(e,t,n);break;case 1:if(!We&&(ds(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(c){Se(n,t,c)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(We=(i=We)||n.memoizedState!==null,cn(e,t,n),We=i):cn(e,t,n);break;default:cn(e,t,n)}}function bd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uy),t.forEach(function(i){var r=wy.bind(null,e,i);n.has(i)||(n.add(i),i.then(r,r))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Oe=c.stateNode,jt=!1;break e;case 3:Oe=c.stateNode.containerInfo,jt=!0;break e;case 4:Oe=c.stateNode.containerInfo,jt=!0;break e}c=c.return}if(Oe===null)throw Error(F(160));Jp(a,l,r),Oe=null,jt=!1;var h=r.alternate;h!==null&&(h.return=null),r.return=null}catch(m){Se(r,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zp(t,e),t=t.sibling}function Zp(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),_t(e),i&4){try{xi(3,e,e.return),Io(3,e)}catch(A){Se(e,e.return,A)}try{xi(5,e,e.return)}catch(A){Se(e,e.return,A)}}break;case 1:xt(t,e),_t(e),i&512&&n!==null&&ds(n,n.return);break;case 5:if(xt(t,e),_t(e),i&512&&n!==null&&ds(n,n.return),e.flags&32){var r=e.stateNode;try{Ci(r,"")}catch(A){Se(e,e.return,A)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,c=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&jh(r,a),Ka(c,l);var m=Ka(c,a);for(l=0;l<h.length;l+=2){var E=h[l],j=h[l+1];E==="style"?Nh(r,j):E==="dangerouslySetInnerHTML"?kh(r,j):E==="children"?Ci(r,j):zl(r,E,j,m)}switch(c){case"input":$a(r,a);break;case"textarea":bh(r,a);break;case"select":var b=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var k=a.value;k!=null?ps(r,!!a.multiple,k,!1):b!==!!a.multiple&&(a.defaultValue!=null?ps(r,!!a.multiple,a.defaultValue,!0):ps(r,!!a.multiple,a.multiple?[]:"",!1))}r[_i]=a}catch(A){Se(e,e.return,A)}}break;case 6:if(xt(t,e),_t(e),i&4){if(e.stateNode===null)throw Error(F(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(A){Se(e,e.return,A)}}break;case 3:if(xt(t,e),_t(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(A){Se(e,e.return,A)}break;case 4:xt(t,e),_t(e);break;case 13:xt(t,e),_t(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(jc=Ne())),i&4&&bd(e);break;case 22:if(E=n!==null&&n.memoizedState!==null,e.mode&1?(We=(m=We)||E,xt(t,e),We=m):xt(t,e),_t(e),i&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!E&&e.mode&1)for($=e,E=e.child;E!==null;){for(j=$=E;$!==null;){switch(b=$,k=b.child,b.tag){case 0:case 11:case 14:case 15:xi(4,b,b.return);break;case 1:ds(b,b.return);var C=b.stateNode;if(typeof C.componentWillUnmount=="function"){i=b,n=b.return;try{t=i,C.props=t.memoizedProps,C.state=t.memoizedState,C.componentWillUnmount()}catch(A){Se(i,n,A)}}break;case 5:ds(b,b.return);break;case 22:if(b.memoizedState!==null){kd(j);continue}}k!==null?(k.return=b,$=k):kd(j)}E=E.sibling}e:for(E=null,j=e;;){if(j.tag===5){if(E===null){E=j;try{r=j.stateNode,m?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=j.stateNode,h=j.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,c.style.display=Ch("display",l))}catch(A){Se(e,e.return,A)}}}else if(j.tag===6){if(E===null)try{j.stateNode.nodeValue=m?"":j.memoizedProps}catch(A){Se(e,e.return,A)}}else if((j.tag!==22&&j.tag!==23||j.memoizedState===null||j===e)&&j.child!==null){j.child.return=j,j=j.child;continue}if(j===e)break e;for(;j.sibling===null;){if(j.return===null||j.return===e)break e;E===j&&(E=null),j=j.return}E===j&&(E=null),j.sibling.return=j.return,j=j.sibling}}break;case 19:xt(t,e),_t(e),i&4&&bd(e);break;case 21:break;default:xt(t,e),_t(e)}}function _t(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(qp(n)){var i=n;break e}n=n.return}throw Error(F(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ci(r,""),i.flags&=-33);var a=jd(e);Cl(e,a,r);break;case 3:case 4:var l=i.stateNode.containerInfo,c=jd(e);kl(e,c,l);break;default:throw Error(F(161))}}catch(h){Se(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hy(e,t,n){$=e,ef(e)}function ef(e,t,n){for(var i=(e.mode&1)!==0;$!==null;){var r=$,a=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||Pr;if(!l){var c=r.alternate,h=c!==null&&c.memoizedState!==null||We;c=Pr;var m=We;if(Pr=l,(We=h)&&!m)for($=r;$!==null;)l=$,h=l.child,l.tag===22&&l.memoizedState!==null?Cd(r):h!==null?(h.return=l,$=h):Cd(r);for(;a!==null;)$=a,ef(a),a=a.sibling;$=r,Pr=c,We=m}Sd(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,$=a):Sd(e)}}function Sd(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:We||Io(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!We)if(n===null)i.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ad(t,a,i);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ad(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var E=m.memoizedState;if(E!==null){var j=E.dehydrated;j!==null&&Pi(j)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}We||t.flags&512&&Sl(t)}catch(b){Se(t,t.return,b)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function kd(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function Cd(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(h){Se(t,n,h)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(h){Se(t,r,h)}}var a=t.return;try{Sl(t)}catch(h){Se(t,a,h)}break;case 5:var l=t.return;try{Sl(t)}catch(h){Se(t,l,h)}}}catch(h){Se(t,t.return,h)}if(t===e){$=null;break}var c=t.sibling;if(c!==null){c.return=t.return,$=c;break}$=t.return}}var py=Math.ceil,uo=tn.ReactCurrentDispatcher,xc=tn.ReactCurrentOwner,mt=tn.ReactCurrentBatchConfig,re=0,Re=null,Te=null,Me=0,nt=0,hs=En(0),Ae=0,Hi=null,Vn=0,Do=0,wc=0,wi=null,qe=null,jc=0,Ts=1/0,Wt=null,ho=!1,Nl=null,jn=null,Ar=!1,mn=null,po=0,ji=0,Tl=null,zr=-1,Wr=0;function Ge(){return re&6?Ne():zr!==-1?zr:zr=Ne()}function bn(e){return e.mode&1?re&2&&Me!==0?Me&-Me:Qg.transition!==null?(Wr===0&&(Wr=Fh()),Wr):(e=le,e!==0||(e=window.event,e=e===void 0?16:Vh(e.type)),e):1}function At(e,t,n,i){if(50<ji)throw ji=0,Tl=null,Error(F(185));Wi(e,n,i),(!(re&2)||e!==Re)&&(e===Re&&(!(re&2)&&(Do|=n),Ae===4&&pn(e,Me)),tt(e,i),n===1&&re===0&&!(t.mode&1)&&(Ts=Ne()+500,Eo&&Pn()))}function tt(e,t){var n=e.callbackNode;Qm(e,t);var i=Kr(e,e===Re?Me:0);if(i===0)n!==null&&_u(n),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(n!=null&&_u(n),t===1)e.tag===0?Kg(Nd.bind(null,e)):up(Nd.bind(null,e)),Vg(function(){!(re&6)&&Pn()}),n=null;else{switch(Uh(i)){case 1:n=Gl;break;case 4:n=Oh;break;case 16:n=Xr;break;case 536870912:n=Mh;break;default:n=Xr}n=cf(n,tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tf(e,t){if(zr=-1,Wr=0,re&6)throw Error(F(327));var n=e.callbackNode;if(vs()&&e.callbackNode!==n)return null;var i=Kr(e,e===Re?Me:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=fo(e,i);else{t=i;var r=re;re|=2;var a=sf();(Re!==e||Me!==t)&&(Wt=null,Ts=Ne()+500,Hn(e,t));do try{gy();break}catch(c){nf(e,c)}while(!0);oc(),uo.current=a,re=r,Te!==null?t=0:(Re=null,Me=0,t=Ae)}if(t!==0){if(t===2&&(r=el(e),r!==0&&(i=r,t=El(e,r))),t===1)throw n=Hi,Hn(e,0),pn(e,i),tt(e,Ne()),n;if(t===6)pn(e,i);else{if(r=e.current.alternate,!(i&30)&&!fy(r)&&(t=fo(e,i),t===2&&(a=el(e),a!==0&&(i=a,t=El(e,a))),t===1))throw n=Hi,Hn(e,0),pn(e,i),tt(e,Ne()),n;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(F(345));case 2:On(e,qe,Wt);break;case 3:if(pn(e,i),(i&130023424)===i&&(t=jc+500-Ne(),10<t)){if(Kr(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){Ge(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=ll(On.bind(null,e,qe,Wt),t);break}On(e,qe,Wt);break;case 4:if(pn(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var l=31-Pt(i);a=1<<l,l=t[l],l>r&&(r=l),i&=~a}if(i=r,i=Ne()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*py(i/1960))-i,10<i){e.timeoutHandle=ll(On.bind(null,e,qe,Wt),i);break}On(e,qe,Wt);break;case 5:On(e,qe,Wt);break;default:throw Error(F(329))}}}return tt(e,Ne()),e.callbackNode===n?tf.bind(null,e):null}function El(e,t){var n=wi;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=fo(e,t),e!==2&&(t=qe,qe=n,t!==null&&Pl(t)),e}function Pl(e){qe===null?qe=e:qe.push.apply(qe,e)}function fy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!It(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~wc,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),i=1<<n;e[n]=-1,t&=~i}}function Nd(e){if(re&6)throw Error(F(327));vs();var t=Kr(e,0);if(!(t&1))return tt(e,Ne()),null;var n=fo(e,t);if(e.tag!==0&&n===2){var i=el(e);i!==0&&(t=i,n=El(e,i))}if(n===1)throw n=Hi,Hn(e,0),pn(e,t),tt(e,Ne()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,On(e,qe,Wt),tt(e,Ne()),null}function bc(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Ts=Ne()+500,Eo&&Pn())}}function Yn(e){mn!==null&&mn.tag===0&&!(re&6)&&vs();var t=re;re|=1;var n=mt.transition,i=le;try{if(mt.transition=null,le=1,e)return e()}finally{le=i,mt.transition=n,re=t,!(re&6)&&Pn()}}function Sc(){nt=hs.current,ge(hs)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$g(n)),Te!==null)for(n=Te.return;n!==null;){var i=n;switch(sc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&eo();break;case 3:Cs(),ge(Ze),ge($e),hc();break;case 5:dc(i);break;case 4:Cs();break;case 13:ge(xe);break;case 19:ge(xe);break;case 10:ac(i.type._context);break;case 22:case 23:Sc()}n=n.return}if(Re=e,Te=e=Sn(e.current,null),Me=nt=t,Ae=0,Hi=null,wc=Do=Vn=0,qe=wi=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var l=a.next;a.next=r,i.next=l}n.pending=i}Fn=null}return e}function nf(e,t){do{var n=Te;try{if(oc(),Ur.current=co,lo){for(var i=we.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lo=!1}if($n=0,De=Pe=we=null,vi=!1,Mi=0,xc.current=null,n===null||n.return===null){Ae=1,Hi=t,Te=null;break}e:{var a=e,l=n.return,c=n,h=t;if(t=Me,c.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var m=h,E=c,j=E.tag;if(!(E.mode&1)&&(j===0||j===11||j===15)){var b=E.alternate;b?(E.updateQueue=b.updateQueue,E.memoizedState=b.memoizedState,E.lanes=b.lanes):(E.updateQueue=null,E.memoizedState=null)}var k=pd(l);if(k!==null){k.flags&=-257,fd(k,l,c,a,t),k.mode&1&&hd(a,m,t),t=k,h=m;var C=t.updateQueue;if(C===null){var A=new Set;A.add(h),t.updateQueue=A}else C.add(h);break e}else{if(!(t&1)){hd(a,m,t),kc();break e}h=Error(F(426))}}else if(ye&&c.mode&1){var _=pd(l);if(_!==null){!(_.flags&65536)&&(_.flags|=256),fd(_,l,c,a,t),ic(Ns(h,c));break e}}a=h=Ns(h,c),Ae!==4&&(Ae=2),wi===null?wi=[a]:wi.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=Up(a,h,t);od(a,g);break e;case 1:c=h;var p=a.type,S=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(jn===null||!jn.has(S)))){a.flags|=65536,t&=-t,a.lanes|=t;var R=Hp(a,c,t);od(a,R);break e}}a=a.return}while(a!==null)}of(n)}catch(L){t=L,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function sf(){var e=uo.current;return uo.current=co,e===null?co:e}function kc(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Re===null||!(Vn&268435455)&&!(Do&268435455)||pn(Re,Me)}function fo(e,t){var n=re;re|=2;var i=sf();(Re!==e||Me!==t)&&(Wt=null,Hn(e,t));do try{my();break}catch(r){nf(e,r)}while(!0);if(oc(),re=n,uo.current=i,Te!==null)throw Error(F(261));return Re=null,Me=0,Ae}function my(){for(;Te!==null;)rf(Te)}function gy(){for(;Te!==null&&!Bm();)rf(Te)}function rf(e){var t=lf(e.alternate,e,nt);e.memoizedProps=e.pendingProps,t===null?of(e):Te=t,xc.current=null}function of(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cy(n,t),n!==null){n.flags&=32767,Te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Te=null;return}}else if(n=ly(n,t,nt),n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);Ae===0&&(Ae=5)}function On(e,t,n){var i=le,r=mt.transition;try{mt.transition=null,le=1,yy(e,t,n,i)}finally{mt.transition=r,le=i}return null}function yy(e,t,n,i){do vs();while(mn!==null);if(re&6)throw Error(F(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(qm(e,a),e===Re&&(Te=Re=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ar||(Ar=!0,cf(Xr,function(){return vs(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=mt.transition,mt.transition=null;var l=le;le=1;var c=re;re|=4,xc.current=null,dy(e,n),Zp(n,e),Mg(ol),Qr=!!rl,ol=rl=null,e.current=n,hy(n),zm(),re=c,le=l,mt.transition=a}else e.current=n;if(Ar&&(Ar=!1,mn=e,po=r),a=e.pendingLanes,a===0&&(jn=null),Vm(n.stateNode),tt(e,Ne()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ho)throw ho=!1,e=Nl,Nl=null,e;return po&1&&e.tag!==0&&vs(),a=e.pendingLanes,a&1?e===Tl?ji++:(ji=0,Tl=e):ji=0,Pn(),null}function vs(){if(mn!==null){var e=Uh(po),t=mt.transition,n=le;try{if(mt.transition=null,le=16>e?16:e,mn===null)var i=!1;else{if(e=mn,mn=null,po=0,re&6)throw Error(F(331));var r=re;for(re|=4,$=e.current;$!==null;){var a=$,l=a.child;if($.flags&16){var c=a.deletions;if(c!==null){for(var h=0;h<c.length;h++){var m=c[h];for($=m;$!==null;){var E=$;switch(E.tag){case 0:case 11:case 15:xi(8,E,a)}var j=E.child;if(j!==null)j.return=E,$=j;else for(;$!==null;){E=$;var b=E.sibling,k=E.return;if(Qp(E),E===m){$=null;break}if(b!==null){b.return=k,$=b;break}$=k}}}var C=a.alternate;if(C!==null){var A=C.child;if(A!==null){C.child=null;do{var _=A.sibling;A.sibling=null,A=_}while(A!==null)}}$=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,$=l;else e:for(;$!==null;){if(a=$,a.flags&2048)switch(a.tag){case 0:case 11:case 15:xi(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,$=g;break e}$=a.return}}var p=e.current;for($=p;$!==null;){l=$;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,$=S;else e:for(l=p;$!==null;){if(c=$,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Io(9,c)}}catch(L){Se(c,c.return,L)}if(c===l){$=null;break e}var R=c.sibling;if(R!==null){R.return=c.return,$=R;break e}$=c.return}}if(re=r,Pn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(So,e)}catch{}i=!0}return i}finally{le=n,mt.transition=t}}return!1}function Td(e,t,n){t=Ns(n,t),t=Up(e,t,1),e=wn(e,t,1),t=Ge(),e!==null&&(Wi(e,1,t),tt(e,t))}function Se(e,t,n){if(e.tag===3)Td(e,e,n);else for(;t!==null;){if(t.tag===3){Td(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(jn===null||!jn.has(i))){e=Ns(n,e),e=Hp(t,e,1),t=wn(t,e,1),e=Ge(),t!==null&&(Wi(t,1,e),tt(t,e));break}}t=t.return}}function vy(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(Me&n)===n&&(Ae===4||Ae===3&&(Me&130023424)===Me&&500>Ne()-jc?Hn(e,0):wc|=n),tt(e,t)}function af(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=Ge();e=Jt(e,t),e!==null&&(Wi(e,t,n),tt(e,n))}function xy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),af(e,n)}function wy(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(F(314))}i!==null&&i.delete(t),af(e,n)}var lf;lf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,ay(e,t,n);Je=!!(e.flags&131072)}else Je=!1,ye&&t.flags&1048576&&dp(t,so,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Br(e,t),e=t.pendingProps;var r=bs(t,$e.current);ys(t,n),r=fc(null,t,i,e,r,n);var a=mc();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(i)?(a=!0,to(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cc(t),r.updater=Ao,t.stateNode=r,r._reactInternals=t,ml(t,i,e,n),t=vl(null,t,i,!0,a,n)):(t.tag=0,ye&&a&&nc(t),Ye(null,t,r,n),t=t.child),t;case 16:i=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=by(i),e=wt(i,e),r){case 0:t=yl(null,t,i,e,n);break e;case 1:t=yd(null,t,i,e,n);break e;case 11:t=md(null,t,i,e,n);break e;case 14:t=gd(null,t,i,wt(i.type,e),n);break e}throw Error(F(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:wt(i,r),yl(e,t,i,r,n);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:wt(i,r),yd(e,t,i,r,n);case 3:e:{if($p(t),e===null)throw Error(F(387));i=t.pendingProps,a=t.memoizedState,r=a.element,yp(e,t),oo(t,i,null,n);var l=t.memoizedState;if(i=l.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=Ns(Error(F(423)),t),t=vd(e,t,i,n,r);break e}else if(i!==r){r=Ns(Error(F(424)),t),t=vd(e,t,i,n,r);break e}else for(it=xn(t.stateNode.containerInfo.firstChild),rt=t,ye=!0,bt=null,n=mp(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),i===r){t=Zt(e,t,n);break e}Ye(e,t,i,n)}t=t.child}return t;case 5:return vp(t),e===null&&hl(t),i=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,l=r.children,al(i,r)?l=null:a!==null&&al(i,a)&&(t.flags|=32),Wp(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&hl(t),null;case 13:return Vp(e,t,n);case 4:return uc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ks(t,null,i,n):Ye(e,t,i,n),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:wt(i,r),md(e,t,i,r,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,a=t.memoizedProps,l=r.value,he(io,i._currentValue),i._currentValue=l,a!==null)if(It(a.value,l)){if(a.children===r.children&&!Ze.current){t=Zt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){l=a.child;for(var h=c.firstContext;h!==null;){if(h.context===i){if(a.tag===1){h=Kt(-1,n&-n),h.tag=2;var m=a.updateQueue;if(m!==null){m=m.shared;var E=m.pending;E===null?h.next=h:(h.next=E.next,E.next=h),m.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),pl(a.return,n,t),c.lanes|=n;break}h=h.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(F(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),pl(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}Ye(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,ys(t,n),r=gt(r),i=i(r),t.flags|=1,Ye(e,t,i,n),t.child;case 14:return i=t.type,r=wt(i,t.pendingProps),r=wt(i.type,r),gd(e,t,i,r,n);case 15:return Bp(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:wt(i,r),Br(e,t),t.tag=1,et(i)?(e=!0,to(t)):e=!1,ys(t,n),Fp(t,i,r),ml(t,i,r,n),vl(null,t,i,!0,e,n);case 19:return Yp(e,t,n);case 22:return zp(e,t,n)}throw Error(F(156,t.tag))};function cf(e,t){return Lh(e,t)}function jy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,t,n,i){return new jy(e,t,n,i)}function Cc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function by(e){if(typeof e=="function")return Cc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$l)return 11;if(e===Vl)return 14}return 2}function Sn(e,t){var n=e.alternate;return n===null?(n=ft(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,i,r,a){var l=2;if(i=e,typeof e=="function")Cc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ns:return Bn(n.children,r,a,t);case Wl:l=8,r|=8;break;case Ua:return e=ft(12,n,t,r|2),e.elementType=Ua,e.lanes=a,e;case Ha:return e=ft(13,n,t,r),e.elementType=Ha,e.lanes=a,e;case Ba:return e=ft(19,n,t,r),e.elementType=Ba,e.lanes=a,e;case vh:return Ro(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gh:l=10;break e;case yh:l=9;break e;case $l:l=11;break e;case Vl:l=14;break e;case un:l=16,i=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=ft(l,n,t,r),t.elementType=e,t.type=i,t.lanes=a,t}function Bn(e,t,n,i){return e=ft(7,e,i,t),e.lanes=n,e}function Ro(e,t,n,i){return e=ft(22,e,i,t),e.elementType=vh,e.lanes=n,e.stateNode={isHidden:!1},e}function Ta(e,t,n){return e=ft(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sy(e,t,n,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=la(0),this.expirationTimes=la(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=la(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nc(e,t,n,i,r,a,l,c,h){return e=new Sy(e,t,n,c,h),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ft(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cc(a),e}function ky(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}function uf(e){if(!e)return Nn;e=e._reactInternals;e:{if(Xn(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(et(n))return cp(e,n,t)}return t}function df(e,t,n,i,r,a,l,c,h){return e=Nc(n,i,!0,e,r,a,l,c,h),e.context=uf(null),n=e.current,i=Ge(),r=bn(n),a=Kt(i,r),a.callback=t??null,wn(n,a,r),e.current.lanes=r,Wi(e,r,i),tt(e,i),e}function _o(e,t,n,i){var r=t.current,a=Ge(),l=bn(r);return n=uf(n),t.context===null?t.context=n:t.pendingContext=n,t=Kt(a,l),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=wn(r,t,l),e!==null&&(At(e,r,l,a),Fr(e,r,l)),l}function mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ed(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tc(e,t){Ed(e,t),(e=e.alternate)&&Ed(e,t)}function Cy(){return null}var hf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ec(e){this._internalRoot=e}Lo.prototype.render=Ec.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));_o(e,t,null,null)};Lo.prototype.unmount=Ec.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){_o(null,e,null,null)}),t[qt]=null}};function Lo(e){this._internalRoot=e}Lo.prototype.unstable_scheduleHydration=function(e){if(e){var t=zh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&$h(e)}};function Pc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pd(){}function Ny(e,t,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var m=mo(l);a.call(m)}}var l=df(t,i,e,0,null,!1,!1,"",Pd);return e._reactRootContainer=l,e[qt]=l.current,Di(e.nodeType===8?e.parentNode:e),Yn(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var c=i;i=function(){var m=mo(h);c.call(m)}}var h=Nc(e,0,!1,null,null,!1,!1,"",Pd);return e._reactRootContainer=h,e[qt]=h.current,Di(e.nodeType===8?e.parentNode:e),Yn(function(){_o(t,h,n,i)}),h}function Mo(e,t,n,i,r){var a=n._reactRootContainer;if(a){var l=a;if(typeof r=="function"){var c=r;r=function(){var h=mo(l);c.call(h)}}_o(t,l,e,r)}else l=Ny(n,t,e,r,i);return mo(l)}Hh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ui(t.pendingLanes);n!==0&&(Xl(t,n|1),tt(t,Ne()),!(re&6)&&(Ts=Ne()+500,Pn()))}break;case 13:Yn(function(){var i=Jt(e,1);if(i!==null){var r=Ge();At(i,e,1,r)}}),Tc(e,1)}};Kl=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=Ge();At(t,e,134217728,n)}Tc(e,134217728)}};Bh=function(e){if(e.tag===13){var t=bn(e),n=Jt(e,t);if(n!==null){var i=Ge();At(n,e,t,i)}Tc(e,t)}};zh=function(){return le};Wh=function(e,t){var n=le;try{return le=e,t()}finally{le=n}};qa=function(e,t,n){switch(t){case"input":if($a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=To(i);if(!r)throw Error(F(90));wh(i),$a(i,r)}}}break;case"textarea":bh(e,n);break;case"select":t=n.value,t!=null&&ps(e,!!n.multiple,t,!1)}};Ph=bc;Ah=Yn;var Ty={usingClientEntryPoint:!1,Events:[Vi,os,To,Th,Eh,bc]},ai={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ey={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rh(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||Cy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ir=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ir.isDisabled&&Ir.supportsFiber)try{So=Ir.inject(Ey),Ft=Ir}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ty;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(t))throw Error(F(200));return ky(e,t,null,n)};at.createRoot=function(e,t){if(!Pc(e))throw Error(F(299));var n=!1,i="",r=hf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Nc(e,1,!1,null,null,n,!1,i,r),e[qt]=t.current,Di(e.nodeType===8?e.parentNode:e),new Ec(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Rh(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return Yn(e)};at.hydrate=function(e,t,n){if(!Oo(t))throw Error(F(200));return Mo(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!Pc(e))throw Error(F(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",l=hf;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=df(t,null,e,1,n??null,r,!1,a,l),e[qt]=t.current,Di(e),i)for(e=0;e<i.length;e++)n=i[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new Lo(t)};at.render=function(e,t,n){if(!Oo(t))throw Error(F(200));return Mo(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!Oo(e))throw Error(F(40));return e._reactRootContainer?(Yn(function(){Mo(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};at.unstable_batchedUpdates=bc;at.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!Oo(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Mo(e,t,n,!1,i)};at.version="18.3.1-next-f1338f8080-20240426";function pf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pf)}catch(e){console.error(e)}}pf(),hh.exports=at;var Py=hh.exports,Ad=Py;Ma.createRoot=Ad.createRoot,Ma.hydrateRoot=Ad.hydrateRoot;const Es={cryptography:[{id:"crypto-1",title:"Caesar Cipher Basics",difficulty:"Easy",points:10,description:"Julius Caesar used a simple cipher to protect his messages. In a Caesar cipher, each letter is shifted by a fixed number of positions in the alphabet.",learningObjective:"Understand how substitution ciphers work and practice decryption techniques.",vocabularyTerms:["caesar-cipher","cipher","encryption","decryption","plaintext","ciphertext"],prompt:`The following message was encrypted with a Caesar cipher using a shift of 3:

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
D) Throw it away`,hints:["USB drives can contain malware","The label is designed to make you curious","Never plug unknown devices into any computer","IT/Security has safe ways to examine it","Options C and D are both safe, but C is most helpful","The flag is FLAG{C}"],answer:"C",flag:"FLAG{C}",explanation:'This is "USB baiting". The label exploits curiosity. Never plug unknown USB drives into any computer. Report to IT/Security who can safely examine it in an isolated environment.'}]},Ay=()=>Object.values(Es).flat(),Iy=e=>Ay().find(t=>t.id===e),hi={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},Dy={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]},ce={PORT_SCAN:"port-scan",BRUTE_FORCE_SSH:"brute-force-ssh",SQL_INJECTION:"sql-injection",DATA_EXFILTRATION:"data-exfiltration",DDOS:"ddos",DNS_TUNNELING:"dns-tunneling"},ff={[ce.PORT_SCAN]:{name:"Port Scan",description:"An attacker is scanning multiple ports on your system to find open services.",severity:"medium",indicators:["Single source IP connecting to many different ports","Sequential or rapid port probing","SYN packets without completing handshake"],mitigation:"Block the scanning IP address"},[ce.BRUTE_FORCE_SSH]:{name:"SSH Brute Force",description:"An attacker is attempting to guess SSH credentials through repeated login attempts.",severity:"high",indicators:["Multiple failed SSH authentication attempts","Same source IP with repeated connections to port 22","Various username attempts (root, admin, user)"],mitigation:"Block the attacking IP and implement rate limiting"},[ce.SQL_INJECTION]:{name:"SQL Injection",description:"An attacker is attempting to inject malicious SQL code through web requests.",severity:"critical",indicators:["HTTP requests containing SQL keywords (SELECT, UNION, DROP)","Special characters in URL parameters (', --, ;)","Attempts to manipulate database queries"],mitigation:"Block the source IP and review web application security"},[ce.DATA_EXFILTRATION]:{name:"Data Exfiltration",description:"Large amounts of data are being transferred to an external IP address.",severity:"critical",indicators:["Unusually large outbound data transfers","Data sent to unfamiliar external IPs","Sustained high-bandwidth connections"],mitigation:"Block the external IP and investigate compromised system"},[ce.DDOS]:{name:"DDoS Attack",description:"Multiple sources are flooding the network with traffic to overwhelm services.",severity:"high",indicators:["High volume of traffic from many sources","Repeated requests to same destination","Network bandwidth saturation"],mitigation:"Enable rate limiting and block attacking IPs"},[ce.DNS_TUNNELING]:{name:"DNS Tunneling",description:"Data is being exfiltrated through encoded DNS queries.",severity:"high",indicators:["Unusual DNS query patterns","Long subdomain names with encoded data","High volume of TXT record queries"],mitigation:"Block suspicious DNS queries and investigate endpoint"}},Ry={[ce.PORT_SCAN]:{windowSeconds:10,thresholds:{uniquePortsFromSameSource:5,packetsPerSecond:3},check:(e,t=1e4)=>{const n=Date.now(),i=e.filter(a=>new Date(a.timestamp).getTime()>n-t),r={};i.forEach(a=>{r[a.sourceIP]||(r[a.sourceIP]=new Set),r[a.sourceIP].add(a.destPort)});for(const[a,l]of Object.entries(r))if(l.size>=5)return{detected:!0,attackerIP:a,evidence:`${l.size} ports scanned`};return{detected:!1}}},[ce.BRUTE_FORCE_SSH]:{windowSeconds:30,thresholds:{failedAttemptsFromSameSource:5},check:(e,t=3e4)=>{const n=Date.now(),i=e.filter(a=>new Date(a.timestamp).getTime()>n-t&&a.protocol==="SSH"&&a.info.toLowerCase().includes("failed")),r={};i.forEach(a=>{r[a.sourceIP]=(r[a.sourceIP]||0)+1});for(const[a,l]of Object.entries(r))if(l>=5)return{detected:!0,attackerIP:a,evidence:`${l} failed SSH attempts`};return{detected:!1}}},[ce.SQL_INJECTION]:{patterns:[/('|"|;|--|\/\*|\*\/|union|select|insert|update|delete|drop|exec|execute)/i,/(or|and)\s+['"]?\d+['"]?\s*=\s*['"]?\d+/i,/'\s*(or|and)\s*'[^']*'\s*=\s*'/i],check:e=>{const t=e.filter(n=>n.protocol==="HTTP"&&n.isMalicious&&n.attackType===ce.SQL_INJECTION);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} SQL injection attempts`}:{detected:!1}}},[ce.DATA_EXFILTRATION]:{thresholds:{bytesPerWindow:1e5,windowSeconds:30},check:(e,t=3e4)=>{const n=Date.now(),i=e.filter(a=>new Date(a.timestamp).getTime()>n-t),r={};i.forEach(a=>{!a.destIP.startsWith("192.168.")&&!a.destIP.startsWith("10.")&&!a.destIP.startsWith("172.16.")&&(r[a.destIP]=(r[a.destIP]||0)+a.length)});for(const[a,l]of Object.entries(r))if(l>=1e5)return{detected:!0,attackerIP:a,evidence:`${Math.round(l/1024)}KB exfiltrated`};return{detected:!1}}},[ce.DNS_TUNNELING]:{check:e=>{const t=e.filter(n=>n.protocol==="DNS"&&n.isMalicious&&n.attackType===ce.DNS_TUNNELING);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} suspicious DNS queries`}:{detected:!1}}}},Nt=[{id:"port-scan-basic",name:"Port Scan Detection",difficulty:"Easy",points:25,description:"A suspicious IP address is probing your network, scanning multiple ports to find vulnerable services. Identify and block the attacker.",learningObjective:"Learn to recognize port scanning behavior by observing sequential port connections from a single source.",attackType:ce.PORT_SCAN,duration:60,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:3},hints:["Look for a single IP connecting to many different ports","Port scanners often use sequential port numbers","The attacker IP will have connections to ports like 21, 22, 23, 80, 443, etc."],backgroundTraffic:{packetsPerSecond:1,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:8,packetsPerSecond:1.5,attackerIP:"185.220.101.42",targetPorts:[21,22,23,25,80,110,143,443,445,3389,8080,8443]}},{id:"ssh-brute-force",name:"SSH Brute Force Attack",difficulty:"Medium",points:35,description:"An attacker is attempting to gain unauthorized access by guessing SSH credentials. Multiple failed login attempts indicate a brute force attack in progress.",learningObjective:"Understand how brute force attacks work and learn to identify repeated authentication failures.",attackType:ce.BRUTE_FORCE_SSH,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for repeated SSH connections from the same IP","Failed authentication messages are a key indicator","Brute force attacks try common usernames: root, admin, user"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:10,packetsPerSecond:1,attackerIP:"198.51.100.77",targetPort:22,usernames:["root","admin","administrator","user","guest","test"]}},{id:"sql-injection-probe",name:"SQL Injection Probing",difficulty:"Medium",points:40,description:"Malicious HTTP requests containing SQL injection payloads are targeting your web application. These attacks attempt to manipulate database queries.",learningObjective:"Learn to identify SQL injection patterns in HTTP requests and understand common injection techniques.",attackType:ce.SQL_INJECTION,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:4},hints:[`Look for special characters in HTTP requests: ' " ; --`,"SQL keywords like UNION, SELECT, DROP are red flags","Check URL parameters and POST data for suspicious patterns"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:10,packetsPerSecond:.75,attackerIP:"203.0.113.99",targetPort:80}},{id:"data-exfiltration",name:"Data Exfiltration",difficulty:"Medium",points:40,description:"A compromised internal system is sending large amounts of data to an external IP. This could indicate stolen data being transferred out of the network.",learningObjective:"Learn to detect unusual outbound traffic patterns that may indicate data theft.",attackType:ce.DATA_EXFILTRATION,duration:120,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for unusually large packet sizes going outbound","The destination IP will be external (not 192.168.x.x or 10.x.x.x)","Look for sustained transfers to the same external destination"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:12,packetsPerSecond:1,attackerIP:"45.33.32.156",sourceIP:"192.168.1.105",minPacketSize:5e3,maxPacketSize:15e3}}],_y=()=>Nt.reduce((e,t)=>e+t.points,0),Ly=()=>({total:Nt.length,easy:Nt.filter(e=>e.difficulty==="Easy").length,medium:Nt.filter(e=>e.difficulty==="Medium").length,hard:Nt.filter(e=>e.difficulty==="Hard").length,totalPoints:_y()}),Ac={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
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
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function Oy(e){const t=Ac[e];if(!t)return[];const n=[];for(const i of t.days)n.push(...i.exercises);return n}const me={"cyber-range":{id:"cyber-range",name:"Cybersecurity",description:"Interactive cybersecurity challenges and simulations",color:"#00ff88",icon:"🔐",units:[{id:"cryptography",name:"Cryptography",description:"Learn encryption, decryption, and cipher techniques",challengeCount:5},{id:"network",name:"Network Security",description:"Understand firewalls, ports, and network protocols",challengeCount:4},{id:"password",name:"Password Security",description:"Create strong passwords and understand attacks",challengeCount:4},{id:"web",name:"Web Security",description:"Learn about XSS, SQL injection, and secure coding",challengeCount:3},{id:"social",name:"Social Engineering",description:"Recognize phishing and manipulation tactics",challengeCount:3},{id:"network-monitor",name:"Network Monitor",description:"Real-time packet analysis and threat detection",challengeCount:1,isScenario:!0}]},"arrays-loops":{id:"arrays-loops",name:"Programming",description:"Arrays, loops, and traversal with p5.js",color:"#00d4ff",icon:"💻",units:[{id:"week1",name:"Week 1: Arrays Basics",description:"Store collections of values and access by index",exerciseCount:8},{id:"week2",name:"Week 2: Loops Basics",description:"Use for-loops and while-loops to repeat instructions",exerciseCount:8},{id:"week3",name:"Week 3: Traversing Arrays",description:"Loop through arrays to process every element",exerciseCount:7},{id:"week4",name:"Week 4: Filtering & 2D Arrays",description:"Filter arrays and work with grids",exerciseCount:8}]},"ap-csp":{id:"ap-csp",name:"AP CSP Exam Prep",description:"Pseudocode translation and flowchart interpretation",color:"#ff6b9d",icon:"📝",units:[{id:"pseudocode",name:"Pseudocode",description:"Translate between AP CSP pseudocode and JavaScript",exerciseCount:30},{id:"flowcharts",name:"Flowcharts",description:"Read, interpret, and build flowcharts",exerciseCount:20}]}},xs=[{id:"assignment",title:"Assignment & Variables",pseudocode:"a ← expression",javascript:"let a = expression;",explanation:"The arrow (←) assigns a value to a variable. In pseudocode, you don't need to declare variables with let/const - just use the arrow to create and assign.",examples:[{pseudocode:"x ← 5",javascript:"let x = 5;"},{pseudocode:'name ← "Alice"',javascript:'let name = "Alice";'},{pseudocode:"total ← price + tax",javascript:"let total = price + tax;"},{pseudocode:"x ← x + 1",javascript:"x = x + 1; // or x++"}],keyPoints:["← is the assignment operator (like = in JavaScript)","Variables are created automatically when first assigned","Can reassign variables without re-declaring"]},{id:"display-input",title:"Display & Input",pseudocode:`DISPLAY(expression)
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
}`,javascript:"// Checks if path is clear before moving"}],keyPoints:["Robot starts somewhere on a grid","Black squares are walls/obstacles","Robot can only move to white/open squares","CAN_MOVE returns true/false"]}],Tt=[{id:"ps-001",topic:"assignment",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`x ← 10
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
DISPLAY(max)`,blankAnswers:{blank1:["1","0"],blank2:[">","> max"],blank3:["n"]},hints:["Start with the first element (index 1 in pseudocode)","Check if current is greater than max","Update max to the new larger value"],explanation:"Initialize max to first element, then compare each n. If n > max, update max to n."}],Al=[{id:"oval",name:"Oval / Terminator",purpose:"Start or End of the program/algorithm",description:"Every flowchart must have a Start and End. The oval shape indicates where the flow begins and where it terminates.",examples:["Start","End","Begin","Stop"],color:"#10b981",shape:"ellipse"},{id:"rectangle",name:"Rectangle / Process",purpose:"An action, calculation, or process step",description:'Represents any processing operation: assignments, calculations, or actions. This is where the actual "work" happens.',examples:["total ← price + tax","count ← count + 1","Send email","Calculate average"],color:"#3b82f6",shape:"rectangle"},{id:"diamond",name:"Diamond / Decision",purpose:"A yes/no question or condition check",description:"Used for branching logic (if/else). The condition is written inside, and two arrows come out: one for Yes/True and one for No/False.",examples:["Is x > 10?","age ≥ 18?","Found?","Done?"],color:"#f59e0b",shape:"diamond"},{id:"parallelogram",name:"Parallelogram / Input-Output",purpose:"Getting input or showing output",description:"Represents data entering the system (input from user) or leaving it (display/print). Think DISPLAY and INPUT operations.",examples:["Get user name",'Display "Hello"',"INPUT age","Print result"],color:"#8b5cf6",shape:"parallelogram"},{id:"arrow",name:"Arrow / Flow Line",purpose:"Shows direction of flow",description:"Connects shapes and shows the order of operations. Flow typically goes top-to-bottom and left-to-right. Arrows point to the next step.",examples:["→","↓","←","↑"],color:"#6b7280",shape:"arrow"}],My=[{id:"fc-ex-001",title:"Simple Greeting",description:'A basic flowchart that displays "Hello World"',difficulty:"beginner",pseudocode:'DISPLAY("Hello World")',nodes:[{id:"start",type:"oval",position:{x:150,y:0},data:{label:"Start"}},{id:"output",type:"parallelogram",position:{x:100,y:100},data:{label:'Display "Hello World"'}},{id:"end",type:"oval",position:{x:150,y:200},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"output"},{id:"e2",source:"output",target:"end"}]},{id:"fc-ex-002",title:"Input and Output",description:"Get user's name and greet them",difficulty:"beginner",pseudocode:`name ← INPUT()
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
DISPLAY(max)`,nodes:[{id:"start",type:"oval",position:{x:250,y:0},data:{label:"Start"}},{id:"input-a",type:"parallelogram",position:{x:205,y:60},data:{label:"Input a"}},{id:"input-b",type:"parallelogram",position:{x:205,y:115},data:{label:"Input b"}},{id:"input-c",type:"parallelogram",position:{x:205,y:170},data:{label:"Input c"}},{id:"dec1",type:"diamond",position:{x:210,y:240},data:{label:"a ≥ b AND a ≥ c?"}},{id:"max-a",type:"rectangle",position:{x:50,y:330},data:{label:"max ← a"}},{id:"dec2",type:"diamond",position:{x:330,y:330},data:{label:"b ≥ c?"}},{id:"max-b",type:"rectangle",position:{x:260,y:420},data:{label:"max ← b"}},{id:"max-c",type:"rectangle",position:{x:400,y:420},data:{label:"max ← c"}},{id:"output",type:"parallelogram",position:{x:205,y:510},data:{label:"Display max"}},{id:"end",type:"oval",position:{x:250,y:590},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"input-a"},{id:"e2",source:"input-a",target:"input-b"},{id:"e3",source:"input-b",target:"input-c"},{id:"e4",source:"input-c",target:"dec1"},{id:"e5",source:"dec1",target:"max-a",label:"Yes"},{id:"e6",source:"dec1",target:"dec2",label:"No"},{id:"e7",source:"dec2",target:"max-b",label:"Yes"},{id:"e8",source:"dec2",target:"max-c",label:"No"},{id:"e9",source:"max-a",target:"output"},{id:"e10",source:"max-b",target:"output"},{id:"e11",source:"max-c",target:"output"},{id:"e12",source:"output",target:"end"}]}],Gt=[{id:"fc-001",title:"Simple Decision Trace",difficulty:"beginner",type:"interpret",description:"Follow the flowchart to determine the output.",question:"What will be displayed if x = 7?",flowchartRef:"fc-ex-003",answer:"Positive",hints:["Start at the top and follow the arrows","At the diamond, check: is 7 > 0?","Follow the path that matches the answer"],explanation:'Starting at Start, we reach the decision "x > 0?". Since 7 > 0 is true (Yes), we follow the Yes path to display "Positive".'},{id:"fc-002",title:"Pass/Fail Check",difficulty:"beginner",type:"interpret",description:"Determine the output for a given input.",question:"What will be displayed if score = 55?",flowchartRef:"fc-ex-004",answer:"Fail",hints:["Input score = 55","Check the condition: is 55 ≥ 60?","Follow the appropriate path"],explanation:`55 is not ≥ 60 (it's less than 60), so the condition is false (No). Following the No path leads to displaying "Fail".`},{id:"fc-003",title:"Exact Boundary",difficulty:"beginner",type:"interpret",description:"Test a boundary condition.",question:"What will be displayed if score = 60?",flowchartRef:"fc-ex-004",answer:"Pass",hints:["60 is exactly the passing score","Is 60 ≥ 60?",'The ≥ means "greater than OR equal to"'],explanation:'60 is equal to 60, and since the condition uses ≥ (greater than or equal), 60 ≥ 60 is true. Output: "Pass".'},{id:"fc-004",title:"Loop Trace",difficulty:"intermediate",type:"interpret",description:"Trace through a counting loop.",question:"What numbers will be displayed by this flowchart?",flowchartRef:"fc-ex-005",answer:"1, 2, 3, 4, 5",hints:["count starts at 1","Loop continues while count is NOT > 5","After displaying, count increases by 1"],explanation:"count: 1 (display 1, count=2), 2 (display 2, count=3), 3 (display 3, count=4), 4 (display 4, count=5), 5 (display 5, count=6). When count=6, 6>5 is true, so loop exits."},{id:"fc-005",title:"Sum Calculation",difficulty:"intermediate",type:"interpret",description:"Calculate the result of a summation loop.",question:"If n = 4, what is the final value of sum displayed?",flowchartRef:"fc-ex-006",answer:"10",hints:["sum starts at 0, i starts at 1","Add i to sum, then increment i","1 + 2 + 3 + 4 = ?"],explanation:"Loop iterations: i=1: sum=0+1=1. i=2: sum=1+2=3. i=3: sum=3+3=6. i=4: sum=6+4=10. When i=5, 5>4 is true, exit and display 10."},{id:"fc-006",title:"Maximum of Three",difficulty:"intermediate",type:"interpret",description:"Determine which variable holds the maximum.",question:"If a=5, b=8, c=3, what path does the flowchart take and what is displayed?",flowchartRef:"fc-ex-007",answer:"8 (max ← b)",hints:["First check: is a ≥ b AND a ≥ c?","If not, check: is b ≥ c?","Follow the true condition"],explanation:"a=5 ≥ b=8? No, so first condition is false. Go to second decision: b=8 ≥ c=3? Yes, so max ← b = 8."},{id:"fc-007",title:"Identify Symbols",difficulty:"beginner",type:"symbol-match",description:"Match each flowchart symbol to its purpose.",question:"Match each shape to what it represents:",items:[{shape:"oval",options:["Start/End","Decision","Process","Input/Output"]},{shape:"diamond",options:["Start/End","Decision","Process","Input/Output"]},{shape:"rectangle",options:["Start/End","Decision","Process","Input/Output"]},{shape:"parallelogram",options:["Start/End","Decision","Process","Input/Output"]}],answer:{oval:"Start/End",diamond:"Decision",rectangle:"Process",parallelogram:"Input/Output"},hints:["Ovals are at the beginning and end","Diamonds ask yes/no questions","Rectangles do work/calculations"],explanation:"Oval = Start/End (terminators), Diamond = Decision (branching), Rectangle = Process (actions/calculations), Parallelogram = Input/Output (data flow)."},{id:"fc-008",title:"What Shape?",difficulty:"beginner",type:"multiple-choice",description:"Choose the correct shape for a given action.",question:'Which shape would you use for the statement: "Display the result"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Parallelogram",hints:["Display is a type of output","Parallelograms handle data entering or leaving the system"],explanation:"DISPLAY is an output operation, which is represented by a parallelogram (Input/Output symbol)."},{id:"fc-009",title:"Decision Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a condition.",question:'Which shape represents the statement: "IF score >= 60"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Diamond",hints:["IF statements check a condition","Conditions result in yes/no answers"],explanation:"IF statements are decisions that branch the flow based on a condition. Diamonds represent decisions with Yes/No paths."},{id:"fc-010",title:"Process Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a calculation.",question:'Which shape would you use for: "total ← total + price"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Rectangle",hints:["This is a calculation/assignment","No input, output, or decision happening"],explanation:"Assignment and calculations are processes represented by rectangles. This adds price to total - a processing step."},{id:"fc-011",title:"Build: Even or Odd",difficulty:"beginner",type:"build",description:"Create a flowchart to check if a number is even or odd.",requirements:["Start with a Start oval","Get a number from the user (Input)","Check if the number MOD 2 equals 0",'Display "Even" if yes, "Odd" if no',"End with an End oval"],pseudocode:`num ← INPUT()
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
}`,hints:["Initialize before the loop","Decision that loops back = REPEAT UNTIL","Code inside loop is the body"],explanation:'The arrow looping back indicates repetition. The decision "count > 5?" with a loop-back path becomes REPEAT UNTIL (count > 5).'},{id:"fc-018",title:"Loop Count",difficulty:"intermediate",type:"multiple-choice",description:"Analyze loop behavior.",question:'In a flowchart, a loop has initialization "i ← 1", condition "i > 10?", and increment "i ← i + 2". How many times does the loop body execute?',options:["5 times","6 times","10 times","11 times"],answer:"5 times",hints:["List out the values of i","i starts at 1, increases by 2 each time","Loop continues while i ≤ 10"],explanation:"i values: 1, 3, 5, 7, 9 (all ≤ 10, so loop runs). When i becomes 11, 11 > 10 is true and loop exits. Ran 5 times."},{id:"fc-019",title:"Flowchart Purpose",difficulty:"beginner",type:"multiple-choice",description:"Understand what flowcharts are for.",question:"What is the main purpose of a flowchart?",options:["To write executable code","To visually represent the logic and flow of an algorithm","To store data in a program","To test code for bugs"],answer:"To visually represent the logic and flow of an algorithm",hints:["Flowcharts are visual tools","They show steps and decisions","They're used before or alongside coding"],explanation:"Flowcharts provide a visual representation of how an algorithm works, showing the sequence of steps, decisions, and loops. They help plan and communicate logic before writing actual code."},{id:"fc-020",title:"Arrow Direction",difficulty:"beginner",type:"multiple-choice",description:"Understand flow direction.",question:"In a standard flowchart, what is the typical direction of flow?",options:["Right to left","Bottom to top","Top to bottom, left to right","Randomly in any direction"],answer:"Top to bottom, left to right",hints:["Think about how you read text",'Where is "Start" usually placed?','Where is "End" usually placed?'],explanation:"Flowcharts follow a top-to-bottom, left-to-right flow by convention. Start is at the top, End is at the bottom, and operations flow downward. This makes flowcharts easy to read like text."}],Fy=({studentName:e,totalPoints:t,assignments:n,completedChallenges:i,completedScenarios:r,completedExercises:a,completedPseudocode:l=[],completedFlowcharts:c=[],onSelectCategory:h,onSelectNetworkMonitor:m,onSelectWeek:E,onSelectAPCSP:j})=>{const b=n.some(f=>f.type==="cyber-range"),k=n.some(f=>f.type==="arrays-loops"),C=n.some(f=>f.type==="ap-csp"),A=f=>{if(f==="network-monitor")return{completed:r.length,total:Nt.length,percentage:Nt.length>0?r.length/Nt.length*100:0};const w=Es[f]||[],T=w.filter(P=>i.includes(P.id)).length;return{completed:T,total:w.length,percentage:w.length>0?T/w.length*100:0}},_=f=>{const w=Oy(f),T=w.filter(P=>a.includes(P.id)).length;return{completed:T,total:w.length,percentage:w.length>0?T/w.length*100:0}},g=f=>f==="pseudocode"?{completed:l.length,total:Tt.length,percentage:Tt.length>0?l.length/Tt.length*100:0}:{completed:c.length,total:Gt.length,percentage:Gt.length>0?c.length/Gt.length*100:0},p=i.length+r.length,S=a.length,R=l.length+c.length,L=[{id:"cryptography",name:"Cryptography",icon:"[ CRYPTO ]",description:"Encryption, ciphers, and secure communication"},{id:"network",name:"Network Security",icon:"[ NETWORK ]",description:"Network protocols, ports, and traffic analysis"},{id:"password",name:"Password Security",icon:"[ PASSWD ]",description:"Password strength and authentication"},{id:"web",name:"Web Security",icon:"[ WEB ]",description:"Web vulnerabilities and secure coding"},{id:"social",name:"Social Engineering",icon:"[ SOCIAL ]",description:"Manipulation tactics and security awareness"},{id:"network-monitor",name:"Network Monitor",icon:"[ MONITOR ]",description:"Real-time traffic analysis",isScenario:!0}],M=[{id:"pseudocode",name:"Pseudocode",icon:"[ CODE ]",description:"Translate between AP CSP pseudocode and JavaScript"},{id:"flowcharts",name:"Flowcharts",icon:"[ FLOW ]",description:"Read, interpret, and build flowcharts"}],x=b||k||C;return s.jsxs("div",{className:"unified-dashboard",children:[s.jsxs("div",{className:"welcome-section",children:[s.jsxs("h1",{children:["Welcome, ",e,"!"]}),s.jsx("p",{children:"Complete your assigned work below. Track your progress across both cybersecurity and programming content."})]}),s.jsxs("div",{className:"stats",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("span",{className:"stat-value",children:t}),s.jsx("span",{className:"stat-label",children:"Total Points"})]}),s.jsxs("div",{className:"stat-card cyber",children:[s.jsx("span",{className:"stat-value",children:p}),s.jsx("span",{className:"stat-label",children:"Cyber Challenges"})]}),s.jsxs("div",{className:"stat-card programming",children:[s.jsx("span",{className:"stat-value",children:S}),s.jsx("span",{className:"stat-label",children:"Programming Exercises"})]}),s.jsxs("div",{className:"stat-card apcsp",children:[s.jsx("span",{className:"stat-value",children:R}),s.jsx("span",{className:"stat-label",children:"AP CSP Exercises"})]})]}),x?s.jsxs(s.Fragment,{children:[b&&s.jsxs("section",{className:"content-section cyber-section",children:[s.jsxs("h2",{className:"section-title cyber",children:[s.jsx("span",{className:"section-icon",children:me["cyber-range"].icon}),"Cybersecurity Challenges"]}),s.jsx("div",{className:"categories",children:L.map(f=>{const w=A(f.id);return s.jsxs("div",{className:"category-card cyber",onClick:()=>f.isScenario?m():h(f.id),children:[s.jsx("div",{className:"category-icon",children:f.icon}),s.jsx("h3",{children:f.name}),s.jsx("p",{className:"category-description",children:f.description}),s.jsxs("p",{className:"category-progress-text",children:[w.completed," / ",w.total," completed"]}),s.jsx("div",{className:"category-progress",children:s.jsx("div",{className:"category-progress-bar cyber",style:{width:`${w.percentage}%`}})})]},f.id)})})]}),k&&s.jsxs("section",{className:"content-section programming-section",children:[s.jsxs("h2",{className:"section-title programming",children:[s.jsx("span",{className:"section-icon",children:me["arrays-loops"].icon}),"Programming Exercises"]}),s.jsx("div",{className:"categories",children:Object.entries(Ac).map(([f,w])=>{const T=_(f),P=f.replace("week","");return s.jsxs("div",{className:"category-card programming",onClick:()=>E(f),children:[s.jsxs("div",{className:"category-icon",children:["[ WEEK ",P," ]"]}),s.jsx("h3",{children:w.title}),s.jsx("p",{className:"category-description",children:w.bigIdea}),s.jsxs("p",{className:"category-progress-text",children:[T.completed," / ",T.total," completed"]}),s.jsx("div",{className:"category-progress",children:s.jsx("div",{className:"category-progress-bar programming",style:{width:`${T.percentage}%`}})})]},f)})})]}),C&&s.jsxs("section",{className:"content-section apcsp-section",children:[s.jsxs("h2",{className:"section-title apcsp",children:[s.jsx("span",{className:"section-icon",children:me["ap-csp"].icon}),"AP CSP Exam Prep"]}),s.jsx("div",{className:"categories",children:M.map(f=>{const w=g(f.id);return s.jsxs("div",{className:"category-card apcsp",onClick:()=>j(f.id),children:[s.jsx("div",{className:"category-icon",children:f.icon}),s.jsx("h3",{children:f.name}),s.jsx("p",{className:"category-description",children:f.description}),s.jsxs("p",{className:"category-progress-text",children:[w.completed," / ",w.total," completed"]}),s.jsx("div",{className:"category-progress",children:s.jsx("div",{className:"category-progress-bar apcsp",style:{width:`${w.percentage}%`}})})]},f.id)})})]})]}):s.jsxs("div",{className:"no-assignments",children:[s.jsx("div",{className:"no-assignments-icon",children:"[ WAITING ]"}),s.jsx("h2",{children:"No Assignments Yet"}),s.jsx("p",{children:"Your teacher hasn't assigned any content yet. Check back soon!"})]}),s.jsxs("div",{className:"learning-objectives",children:[s.jsx("h3",{children:"About This Platform"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Complete assigned challenges and exercises at your own pace"}),s.jsx("li",{children:"Earn points by completing each activity"}),s.jsx("li",{children:"Your progress is automatically saved"}),s.jsx("li",{children:"Access vocabulary terms for help with key concepts"})]})]})]})},Uy=[{id:"60s",name:"60s Space Age",description:"Atomic era optimism",preview:["#ff6b35","#00b4d8","#ffd93d","#f8f9fa"]},{id:"70s",name:"70s Retro Tech",description:"Earth tones meet chrome",preview:["#d4a373","#e07a5f","#81b29a","#f4a261"]},{id:"80s",name:"80s Neon Grid",description:"Cyberpunk terminal",preview:["#00ffff","#ff00ff","#39ff14","#0a0a0f"]},{id:"90s",name:"90s Y2K Chrome",description:"Millennium tech bubble",preview:["#7b68ee","#00ced1","#c0c0c0","#191970"]}];function Ic({onClose:e}){const[t,n]=I.useState(()=>localStorage.getItem("cyberrange-theme")||"80s");I.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("cyberrange-theme",t)},[t]);const i=r=>{n(r)};return s.jsx("div",{className:"theme-switcher-overlay",onClick:e,children:s.jsxs("div",{className:"theme-switcher-modal",onClick:r=>r.stopPropagation(),children:[s.jsxs("div",{className:"theme-switcher-header",children:[s.jsx("h2",{children:"Choose Your Era"}),s.jsx("p",{children:"Select a retrofuturistic theme"}),s.jsx("button",{className:"close-btn",onClick:e,children:"×"})]}),s.jsx("div",{className:"theme-grid",children:Uy.map(r=>s.jsxs("div",{className:`theme-card ${t===r.id?"active":""}`,onClick:()=>i(r.id),children:[s.jsx("div",{className:"theme-preview",children:r.preview.map((a,l)=>s.jsx("div",{className:"preview-color",style:{backgroundColor:a}},l))}),s.jsxs("div",{className:"theme-info",children:[s.jsx("h3",{children:r.name}),s.jsx("p",{children:r.description})]}),t===r.id&&s.jsx("div",{className:"theme-active-badge",children:"ACTIVE"})]},r.id))})]})})}function Dc(){I.useEffect(()=>{const e=localStorage.getItem("cyberrange-theme")||"80s";document.documentElement.setAttribute("data-theme",e)},[])}/**
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
 */const mf=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Hy=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const a=e[n++];t[i++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=e[n++],l=e[n++],c=e[n++],h=((r&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{const a=e[n++],l=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(a&63)<<6|l&63)}}return t.join("")},By={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const a=e[r],l=r+1<e.length,c=l?e[r+1]:0,h=r+2<e.length,m=h?e[r+2]:0,E=a>>2,j=(a&3)<<4|c>>4;let b=(c&15)<<2|m>>6,k=m&63;h||(k=64,l||(b=64)),i.push(n[E],n[j],n[b],n[k])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(mf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Hy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const a=n[e.charAt(r++)],c=r<e.length?n[e.charAt(r)]:0;++r;const m=r<e.length?n[e.charAt(r)]:64;++r;const j=r<e.length?n[e.charAt(r)]:64;if(++r,a==null||c==null||m==null||j==null)throw new zy;const b=a<<2|c>>4;if(i.push(b),m!==64){const k=c<<4&240|m>>2;if(i.push(k),j!==64){const C=m<<6&192|j;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class zy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wy=function(e){const t=mf(e);return By.encodeByteArray(t,!0)},gf=function(e){return Wy(e).replace(/\./g,"")};function $y(){try{return typeof indexedDB=="object"}catch{return!1}}function Vy(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var a;t(((a=r.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const Yy="FirebaseError";class Ds extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=Yy,Object.setPrototypeOf(this,Ds.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yf.prototype.create)}}class yf{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,a=this.errors[t],l=a?Gy(a,i):"Error",c=`${this.serviceName}: ${l} (${r}).`;return new Ds(r,c,i)}}function Gy(e,t){return e.replace(Xy,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const Xy=/\{\$([^}]+)}/g;class go{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var de;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(de||(de={}));const Ky={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Qy=de.INFO,qy={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Jy=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=qy[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vf{constructor(t){this.name=t,this._logLevel=Qy,this._logHandler=Jy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in de))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ky[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...t),this._logHandler(this,de.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...t),this._logHandler(this,de.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,de.INFO,...t),this._logHandler(this,de.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,de.WARN,...t),this._logHandler(this,de.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...t),this._logHandler(this,de.ERROR,...t)}}const Zy=(e,t)=>t.some(n=>e instanceof n);let Id,Dd;function e0(){return Id||(Id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t0(){return Dd||(Dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xf=new WeakMap,Il=new WeakMap,wf=new WeakMap,Pa=new WeakMap,Rc=new WeakMap;function n0(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",l)},a=()=>{n(kn(e.result)),r()},l=()=>{i(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&xf.set(n,e)}).catch(()=>{}),Rc.set(t,e),t}function s0(e){if(Il.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",l),e.removeEventListener("abort",l)},a=()=>{n(),r()},l=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",l),e.addEventListener("abort",l)});Il.set(e,t)}let Dl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Il.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function i0(e){Dl=e(Dl)}function r0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Aa(this),t,...n);return wf.set(i,t.sort?t.sort():[t]),kn(i)}:t0().includes(e)?function(...t){return e.apply(Aa(this),t),kn(xf.get(this))}:function(...t){return kn(e.apply(Aa(this),t))}}function o0(e){return typeof e=="function"?r0(e):(e instanceof IDBTransaction&&s0(e),Zy(e,e0())?new Proxy(e,Dl):e)}function kn(e){if(e instanceof IDBRequest)return n0(e);if(Pa.has(e))return Pa.get(e);const t=o0(e);return t!==e&&(Pa.set(e,t),Rc.set(t,e)),t}const Aa=e=>Rc.get(e);function a0(e,t,{blocked:n,upgrade:i,blocking:r,terminated:a}={}){const l=indexedDB.open(e,t),c=kn(l);return i&&l.addEventListener("upgradeneeded",h=>{i(kn(l.result),h.oldVersion,h.newVersion,kn(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{a&&h.addEventListener("close",()=>a()),r&&h.addEventListener("versionchange",m=>r(m.oldVersion,m.newVersion,m))}).catch(()=>{}),c}const l0=["get","getKey","getAll","getAllKeys","count"],c0=["put","add","delete","clear"],Ia=new Map;function Rd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ia.get(t))return Ia.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=c0.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||l0.includes(n)))return;const a=async function(l,...c){const h=this.transaction(l,r?"readwrite":"readonly");let m=h.store;return i&&(m=m.index(c.shift())),(await Promise.all([m[n](...c),r&&h.done]))[0]};return Ia.set(t,a),a}i0(e=>({...e,get:(t,n,i)=>Rd(t,n)||e.get(t,n,i),has:(t,n)=>!!Rd(t,n)||e.has(t,n)}));/**
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
 */class u0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(d0(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function d0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Rl="@firebase/app",_d="0.10.13";/**
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
 */const en=new vf("@firebase/app"),h0="@firebase/app-compat",p0="@firebase/analytics-compat",f0="@firebase/analytics",m0="@firebase/app-check-compat",g0="@firebase/app-check",y0="@firebase/auth",v0="@firebase/auth-compat",x0="@firebase/database",w0="@firebase/data-connect",j0="@firebase/database-compat",b0="@firebase/functions",S0="@firebase/functions-compat",k0="@firebase/installations",C0="@firebase/installations-compat",N0="@firebase/messaging",T0="@firebase/messaging-compat",E0="@firebase/performance",P0="@firebase/performance-compat",A0="@firebase/remote-config",I0="@firebase/remote-config-compat",D0="@firebase/storage",R0="@firebase/storage-compat",_0="@firebase/firestore",L0="@firebase/vertexai-preview",O0="@firebase/firestore-compat",M0="firebase",F0="10.14.1",U0={[Rl]:"fire-core",[h0]:"fire-core-compat",[f0]:"fire-analytics",[p0]:"fire-analytics-compat",[g0]:"fire-app-check",[m0]:"fire-app-check-compat",[y0]:"fire-auth",[v0]:"fire-auth-compat",[x0]:"fire-rtdb",[w0]:"fire-data-connect",[j0]:"fire-rtdb-compat",[b0]:"fire-fn",[S0]:"fire-fn-compat",[k0]:"fire-iid",[C0]:"fire-iid-compat",[N0]:"fire-fcm",[T0]:"fire-fcm-compat",[E0]:"fire-perf",[P0]:"fire-perf-compat",[A0]:"fire-rc",[I0]:"fire-rc-compat",[D0]:"fire-gcs",[R0]:"fire-gcs-compat",[_0]:"fire-fst",[O0]:"fire-fst-compat",[L0]:"fire-vertex","fire-js":"fire-js",[M0]:"fire-js-all"};/**
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
 */const H0=new Map,B0=new Map,Ld=new Map;function Od(e,t){try{e.container.addComponent(t)}catch(n){en.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function yo(e){const t=e.name;if(Ld.has(t))return en.debug(`There were multiple attempts to register component ${t}.`),!1;Ld.set(t,e);for(const n of H0.values())Od(n,e);for(const n of B0.values())Od(n,e);return!0}/**
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
 */const z0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_c=new yf("app","Firebase",z0);/**
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
 */const W0=F0;function ws(e,t,n){var i;let r=(i=U0[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const c=[`Unable to register library "${r}" with version "${t}":`];a&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),en.warn(c.join(" "));return}yo(new go(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const $0="firebase-heartbeat-database",V0=1,Bi="firebase-heartbeat-store";let Da=null;function jf(){return Da||(Da=a0($0,V0,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(e=>{throw _c.create("idb-open",{originalErrorMessage:e.message})})),Da}async function Y0(e){try{const n=(await jf()).transaction(Bi),i=await n.objectStore(Bi).get(bf(e));return await n.done,i}catch(t){if(t instanceof Ds)en.warn(t.message);else{const n=_c.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});en.warn(n.message)}}}async function Md(e,t){try{const i=(await jf()).transaction(Bi,"readwrite");await i.objectStore(Bi).put(t,bf(e)),await i.done}catch(n){if(n instanceof Ds)en.warn(n.message);else{const i=_c.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(i.message)}}}function bf(e){return`${e.name}!${e.options.appId}`}/**
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
 */const G0=1024,X0=30*24*60*60*1e3;class K0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new q0(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Fd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=X0}),this._storage.overwrite(this._heartbeatsCache))}catch(i){en.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fd(),{heartbeatsToSend:i,unsentEntries:r}=Q0(this._heartbeatsCache.heartbeats),a=gf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return en.warn(n),""}}}function Fd(){return new Date().toISOString().substring(0,10)}function Q0(e,t=G0){const n=[];let i=e.slice();for(const r of e){const a=n.find(l=>l.agent===r.agent);if(a){if(a.dates.push(r.date),Ud(n)>t){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ud(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class q0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $y()?Vy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Y0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Md(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ud(e){return gf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function J0(e){yo(new go("platform-logger",t=>new u0(t),"PRIVATE")),yo(new go("heartbeat",t=>new K0(t),"PRIVATE")),ws(Rl,_d,e),ws(Rl,_d,"esm2017"),ws("fire-js","")}J0("");var Z0="firebase",ev="10.14.1";/**
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
 */ws(Z0,ev,"app");var Hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sf;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(x,f){function w(){}w.prototype=f.prototype,x.D=f.prototype,x.prototype=new w,x.prototype.constructor=x,x.C=function(T,P,N){for(var v=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)v[Q-2]=arguments[Q];return f.prototype[P].apply(T,v)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(x,f,w){w||(w=0);var T=Array(16);if(typeof f=="string")for(var P=0;16>P;++P)T[P]=f.charCodeAt(w++)|f.charCodeAt(w++)<<8|f.charCodeAt(w++)<<16|f.charCodeAt(w++)<<24;else for(P=0;16>P;++P)T[P]=f[w++]|f[w++]<<8|f[w++]<<16|f[w++]<<24;f=x.g[0],w=x.g[1],P=x.g[2];var N=x.g[3],v=f+(N^w&(P^N))+T[0]+3614090360&4294967295;f=w+(v<<7&4294967295|v>>>25),v=N+(P^f&(w^P))+T[1]+3905402710&4294967295,N=f+(v<<12&4294967295|v>>>20),v=P+(w^N&(f^w))+T[2]+606105819&4294967295,P=N+(v<<17&4294967295|v>>>15),v=w+(f^P&(N^f))+T[3]+3250441966&4294967295,w=P+(v<<22&4294967295|v>>>10),v=f+(N^w&(P^N))+T[4]+4118548399&4294967295,f=w+(v<<7&4294967295|v>>>25),v=N+(P^f&(w^P))+T[5]+1200080426&4294967295,N=f+(v<<12&4294967295|v>>>20),v=P+(w^N&(f^w))+T[6]+2821735955&4294967295,P=N+(v<<17&4294967295|v>>>15),v=w+(f^P&(N^f))+T[7]+4249261313&4294967295,w=P+(v<<22&4294967295|v>>>10),v=f+(N^w&(P^N))+T[8]+1770035416&4294967295,f=w+(v<<7&4294967295|v>>>25),v=N+(P^f&(w^P))+T[9]+2336552879&4294967295,N=f+(v<<12&4294967295|v>>>20),v=P+(w^N&(f^w))+T[10]+4294925233&4294967295,P=N+(v<<17&4294967295|v>>>15),v=w+(f^P&(N^f))+T[11]+2304563134&4294967295,w=P+(v<<22&4294967295|v>>>10),v=f+(N^w&(P^N))+T[12]+1804603682&4294967295,f=w+(v<<7&4294967295|v>>>25),v=N+(P^f&(w^P))+T[13]+4254626195&4294967295,N=f+(v<<12&4294967295|v>>>20),v=P+(w^N&(f^w))+T[14]+2792965006&4294967295,P=N+(v<<17&4294967295|v>>>15),v=w+(f^P&(N^f))+T[15]+1236535329&4294967295,w=P+(v<<22&4294967295|v>>>10),v=f+(P^N&(w^P))+T[1]+4129170786&4294967295,f=w+(v<<5&4294967295|v>>>27),v=N+(w^P&(f^w))+T[6]+3225465664&4294967295,N=f+(v<<9&4294967295|v>>>23),v=P+(f^w&(N^f))+T[11]+643717713&4294967295,P=N+(v<<14&4294967295|v>>>18),v=w+(N^f&(P^N))+T[0]+3921069994&4294967295,w=P+(v<<20&4294967295|v>>>12),v=f+(P^N&(w^P))+T[5]+3593408605&4294967295,f=w+(v<<5&4294967295|v>>>27),v=N+(w^P&(f^w))+T[10]+38016083&4294967295,N=f+(v<<9&4294967295|v>>>23),v=P+(f^w&(N^f))+T[15]+3634488961&4294967295,P=N+(v<<14&4294967295|v>>>18),v=w+(N^f&(P^N))+T[4]+3889429448&4294967295,w=P+(v<<20&4294967295|v>>>12),v=f+(P^N&(w^P))+T[9]+568446438&4294967295,f=w+(v<<5&4294967295|v>>>27),v=N+(w^P&(f^w))+T[14]+3275163606&4294967295,N=f+(v<<9&4294967295|v>>>23),v=P+(f^w&(N^f))+T[3]+4107603335&4294967295,P=N+(v<<14&4294967295|v>>>18),v=w+(N^f&(P^N))+T[8]+1163531501&4294967295,w=P+(v<<20&4294967295|v>>>12),v=f+(P^N&(w^P))+T[13]+2850285829&4294967295,f=w+(v<<5&4294967295|v>>>27),v=N+(w^P&(f^w))+T[2]+4243563512&4294967295,N=f+(v<<9&4294967295|v>>>23),v=P+(f^w&(N^f))+T[7]+1735328473&4294967295,P=N+(v<<14&4294967295|v>>>18),v=w+(N^f&(P^N))+T[12]+2368359562&4294967295,w=P+(v<<20&4294967295|v>>>12),v=f+(w^P^N)+T[5]+4294588738&4294967295,f=w+(v<<4&4294967295|v>>>28),v=N+(f^w^P)+T[8]+2272392833&4294967295,N=f+(v<<11&4294967295|v>>>21),v=P+(N^f^w)+T[11]+1839030562&4294967295,P=N+(v<<16&4294967295|v>>>16),v=w+(P^N^f)+T[14]+4259657740&4294967295,w=P+(v<<23&4294967295|v>>>9),v=f+(w^P^N)+T[1]+2763975236&4294967295,f=w+(v<<4&4294967295|v>>>28),v=N+(f^w^P)+T[4]+1272893353&4294967295,N=f+(v<<11&4294967295|v>>>21),v=P+(N^f^w)+T[7]+4139469664&4294967295,P=N+(v<<16&4294967295|v>>>16),v=w+(P^N^f)+T[10]+3200236656&4294967295,w=P+(v<<23&4294967295|v>>>9),v=f+(w^P^N)+T[13]+681279174&4294967295,f=w+(v<<4&4294967295|v>>>28),v=N+(f^w^P)+T[0]+3936430074&4294967295,N=f+(v<<11&4294967295|v>>>21),v=P+(N^f^w)+T[3]+3572445317&4294967295,P=N+(v<<16&4294967295|v>>>16),v=w+(P^N^f)+T[6]+76029189&4294967295,w=P+(v<<23&4294967295|v>>>9),v=f+(w^P^N)+T[9]+3654602809&4294967295,f=w+(v<<4&4294967295|v>>>28),v=N+(f^w^P)+T[12]+3873151461&4294967295,N=f+(v<<11&4294967295|v>>>21),v=P+(N^f^w)+T[15]+530742520&4294967295,P=N+(v<<16&4294967295|v>>>16),v=w+(P^N^f)+T[2]+3299628645&4294967295,w=P+(v<<23&4294967295|v>>>9),v=f+(P^(w|~N))+T[0]+4096336452&4294967295,f=w+(v<<6&4294967295|v>>>26),v=N+(w^(f|~P))+T[7]+1126891415&4294967295,N=f+(v<<10&4294967295|v>>>22),v=P+(f^(N|~w))+T[14]+2878612391&4294967295,P=N+(v<<15&4294967295|v>>>17),v=w+(N^(P|~f))+T[5]+4237533241&4294967295,w=P+(v<<21&4294967295|v>>>11),v=f+(P^(w|~N))+T[12]+1700485571&4294967295,f=w+(v<<6&4294967295|v>>>26),v=N+(w^(f|~P))+T[3]+2399980690&4294967295,N=f+(v<<10&4294967295|v>>>22),v=P+(f^(N|~w))+T[10]+4293915773&4294967295,P=N+(v<<15&4294967295|v>>>17),v=w+(N^(P|~f))+T[1]+2240044497&4294967295,w=P+(v<<21&4294967295|v>>>11),v=f+(P^(w|~N))+T[8]+1873313359&4294967295,f=w+(v<<6&4294967295|v>>>26),v=N+(w^(f|~P))+T[15]+4264355552&4294967295,N=f+(v<<10&4294967295|v>>>22),v=P+(f^(N|~w))+T[6]+2734768916&4294967295,P=N+(v<<15&4294967295|v>>>17),v=w+(N^(P|~f))+T[13]+1309151649&4294967295,w=P+(v<<21&4294967295|v>>>11),v=f+(P^(w|~N))+T[4]+4149444226&4294967295,f=w+(v<<6&4294967295|v>>>26),v=N+(w^(f|~P))+T[11]+3174756917&4294967295,N=f+(v<<10&4294967295|v>>>22),v=P+(f^(N|~w))+T[2]+718787259&4294967295,P=N+(v<<15&4294967295|v>>>17),v=w+(N^(P|~f))+T[9]+3951481745&4294967295,x.g[0]=x.g[0]+f&4294967295,x.g[1]=x.g[1]+(P+(v<<21&4294967295|v>>>11))&4294967295,x.g[2]=x.g[2]+P&4294967295,x.g[3]=x.g[3]+N&4294967295}i.prototype.u=function(x,f){f===void 0&&(f=x.length);for(var w=f-this.blockSize,T=this.B,P=this.h,N=0;N<f;){if(P==0)for(;N<=w;)r(this,x,N),N+=this.blockSize;if(typeof x=="string"){for(;N<f;)if(T[P++]=x.charCodeAt(N++),P==this.blockSize){r(this,T),P=0;break}}else for(;N<f;)if(T[P++]=x[N++],P==this.blockSize){r(this,T),P=0;break}}this.h=P,this.o+=f},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var f=1;f<x.length-8;++f)x[f]=0;var w=8*this.o;for(f=x.length-8;f<x.length;++f)x[f]=w&255,w/=256;for(this.u(x),x=Array(16),f=w=0;4>f;++f)for(var T=0;32>T;T+=8)x[w++]=this.g[f]>>>T&255;return x};function a(x,f){var w=c;return Object.prototype.hasOwnProperty.call(w,x)?w[x]:w[x]=f(x)}function l(x,f){this.h=f;for(var w=[],T=!0,P=x.length-1;0<=P;P--){var N=x[P]|0;T&&N==f||(w[P]=N,T=!1)}this.g=w}var c={};function h(x){return-128<=x&&128>x?a(x,function(f){return new l([f|0],0>f?-1:0)}):new l([x|0],0>x?-1:0)}function m(x){if(isNaN(x)||!isFinite(x))return j;if(0>x)return _(m(-x));for(var f=[],w=1,T=0;x>=w;T++)f[T]=x/w|0,w*=4294967296;return new l(f,0)}function E(x,f){if(x.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(x.charAt(0)=="-")return _(E(x.substring(1),f));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=m(Math.pow(f,8)),T=j,P=0;P<x.length;P+=8){var N=Math.min(8,x.length-P),v=parseInt(x.substring(P,P+N),f);8>N?(N=m(Math.pow(f,N)),T=T.j(N).add(m(v))):(T=T.j(w),T=T.add(m(v)))}return T}var j=h(0),b=h(1),k=h(16777216);e=l.prototype,e.m=function(){if(A(this))return-_(this).m();for(var x=0,f=1,w=0;w<this.g.length;w++){var T=this.i(w);x+=(0<=T?T:4294967296+T)*f,f*=4294967296}return x},e.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(C(this))return"0";if(A(this))return"-"+_(this).toString(x);for(var f=m(Math.pow(x,6)),w=this,T="";;){var P=R(w,f).g;w=g(w,P.j(f));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(x);if(w=P,C(w))return N+T;for(;6>N.length;)N="0"+N;T=N+T}},e.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function C(x){if(x.h!=0)return!1;for(var f=0;f<x.g.length;f++)if(x.g[f]!=0)return!1;return!0}function A(x){return x.h==-1}e.l=function(x){return x=g(this,x),A(x)?-1:C(x)?0:1};function _(x){for(var f=x.g.length,w=[],T=0;T<f;T++)w[T]=~x.g[T];return new l(w,~x.h).add(b)}e.abs=function(){return A(this)?_(this):this},e.add=function(x){for(var f=Math.max(this.g.length,x.g.length),w=[],T=0,P=0;P<=f;P++){var N=T+(this.i(P)&65535)+(x.i(P)&65535),v=(N>>>16)+(this.i(P)>>>16)+(x.i(P)>>>16);T=v>>>16,N&=65535,v&=65535,w[P]=v<<16|N}return new l(w,w[w.length-1]&-2147483648?-1:0)};function g(x,f){return x.add(_(f))}e.j=function(x){if(C(this)||C(x))return j;if(A(this))return A(x)?_(this).j(_(x)):_(_(this).j(x));if(A(x))return _(this.j(_(x)));if(0>this.l(k)&&0>x.l(k))return m(this.m()*x.m());for(var f=this.g.length+x.g.length,w=[],T=0;T<2*f;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var P=0;P<x.g.length;P++){var N=this.i(T)>>>16,v=this.i(T)&65535,Q=x.i(P)>>>16,V=x.i(P)&65535;w[2*T+2*P]+=v*V,p(w,2*T+2*P),w[2*T+2*P+1]+=N*V,p(w,2*T+2*P+1),w[2*T+2*P+1]+=v*Q,p(w,2*T+2*P+1),w[2*T+2*P+2]+=N*Q,p(w,2*T+2*P+2)}for(T=0;T<f;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=f;T<2*f;T++)w[T]=0;return new l(w,0)};function p(x,f){for(;(x[f]&65535)!=x[f];)x[f+1]+=x[f]>>>16,x[f]&=65535,f++}function S(x,f){this.g=x,this.h=f}function R(x,f){if(C(f))throw Error("division by zero");if(C(x))return new S(j,j);if(A(x))return f=R(_(x),f),new S(_(f.g),_(f.h));if(A(f))return f=R(x,_(f)),new S(_(f.g),f.h);if(30<x.g.length){if(A(x)||A(f))throw Error("slowDivide_ only works with positive integers.");for(var w=b,T=f;0>=T.l(x);)w=L(w),T=L(T);var P=M(w,1),N=M(T,1);for(T=M(T,2),w=M(w,2);!C(T);){var v=N.add(T);0>=v.l(x)&&(P=P.add(w),N=v),T=M(T,1),w=M(w,1)}return f=g(x,P.j(f)),new S(P,f)}for(P=j;0<=x.l(f);){for(w=Math.max(1,Math.floor(x.m()/f.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),N=m(w),v=N.j(f);A(v)||0<v.l(x);)w-=T,N=m(w),v=N.j(f);C(N)&&(N=b),P=P.add(N),x=g(x,v)}return new S(P,x)}e.A=function(x){return R(this,x).h},e.and=function(x){for(var f=Math.max(this.g.length,x.g.length),w=[],T=0;T<f;T++)w[T]=this.i(T)&x.i(T);return new l(w,this.h&x.h)},e.or=function(x){for(var f=Math.max(this.g.length,x.g.length),w=[],T=0;T<f;T++)w[T]=this.i(T)|x.i(T);return new l(w,this.h|x.h)},e.xor=function(x){for(var f=Math.max(this.g.length,x.g.length),w=[],T=0;T<f;T++)w[T]=this.i(T)^x.i(T);return new l(w,this.h^x.h)};function L(x){for(var f=x.g.length+1,w=[],T=0;T<f;T++)w[T]=x.i(T)<<1|x.i(T-1)>>>31;return new l(w,x.h)}function M(x,f){var w=f>>5;f%=32;for(var T=x.g.length-w,P=[],N=0;N<T;N++)P[N]=0<f?x.i(N+w)>>>f|x.i(N+w+1)<<32-f:x.i(N+w);return new l(P,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=E,Sf=l}).apply(typeof Hd<"u"?Hd:typeof self<"u"?self:typeof window<"u"?window:{});var Dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Dr=="object"&&Dr];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=n(this);function r(o,u){if(u)e:{var d=i;o=o.split(".");for(var y=0;y<o.length-1;y++){var D=o[y];if(!(D in d))break e;d=d[D]}o=o[o.length-1],y=d[o],u=u(y),u!=y&&u!=null&&t(d,o,{configurable:!0,writable:!0,value:u})}}function a(o,u){o instanceof String&&(o+="");var d=0,y=!1,D={next:function(){if(!y&&d<o.length){var O=d++;return{value:u(O,o[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}r("Array.prototype.values",function(o){return o||function(){return a(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function h(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function m(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function E(o,u,d){return o.call.apply(o.bind,arguments)}function j(o,u,d){if(!o)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),o.apply(u,D)}}return function(){return o.apply(u,arguments)}}function b(o,u,d){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:j,b.apply(null,arguments)}function k(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),o.apply(this,y)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(y,D,O){for(var z=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)z[ue-2]=arguments[ue];return u.prototype[D].apply(y,z)}}function A(o){const u=o.length;if(0<u){const d=Array(u);for(let y=0;y<u;y++)d[y]=o[y];return d}return[]}function _(o,u){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(h(y)){const D=o.length||0,O=y.length||0;o.length=D+O;for(let z=0;z<O;z++)o[D+z]=y[z]}else o.push(y)}}class g{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function p(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function R(o){return R[" "](o),o}R[" "]=function(){};var L=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function M(o,u,d){for(const y in o)u.call(d,o[y],y,o)}function x(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function f(o){const u={};for(const d in o)u[d]=o[d];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(d in y)o[d]=y[d];for(let O=0;O<w.length;O++)d=w[O],Object.prototype.hasOwnProperty.call(y,d)&&(o[d]=y[d])}}function P(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function N(o){c.setTimeout(()=>{throw o},0)}function v(){var o=G;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Q{constructor(){this.h=this.g=null}add(u,d){const y=V.get();y.set(u,d),this.h?this.h.next=y:this.g=y,this.h=y}}var V=new g(()=>new te,o=>o.reset());class te{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,U=!1,G=new Q,X=()=>{const o=c.Promise.resolve(void 0);oe=()=>{o.then(J)}};var J=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){N(d)}var u=V;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}U=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var K=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function q(o,u){if(H.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,y=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(L){e:{try{R(u.nodeName);var D=!0;break e}catch{}D=!1}D||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:B[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&q.aa.h.call(this)}}C(q,H);var B={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),ie=0;function ve(o,u,d,y,D){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!y,this.ha=D,this.key=++ie,this.da=this.fa=!1}function ke(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function be(o){this.src=o,this.g={},this.h=0}be.prototype.add=function(o,u,d,y,D){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var z=nn(o,u,y,D);return-1<z?(u=o[z],d||(u.fa=!1)):(u=new ve(u,this.src,O,!!y,D),u.fa=d,o.push(u)),u};function ut(o,u){var d=u.type;if(d in o.g){var y=o.g[d],D=Array.prototype.indexOf.call(y,u,void 0),O;(O=0<=D)&&Array.prototype.splice.call(y,D,1),O&&(ke(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function nn(o,u,d,y){for(var D=0;D<o.length;++D){var O=o[D];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==y)return D}return-1}var Dt="closure_lm_"+(1e6*Math.random()|0),Ht={};function sn(o,u,d,y,D){if(Array.isArray(u)){for(var O=0;O<u.length;O++)sn(o,u[O],d,y,D);return null}return d=Qi(d),o&&o[Y]?o.K(u,d,m(y)?!!y.capture:!1,D):Uo(o,u,d,!1,y,D)}function Uo(o,u,d,y,D,O){if(!u)throw Error("Invalid event type");var z=m(D)?!!D.capture:!!D,ue=Os(o);if(ue||(o[Dt]=ue=new be(o)),d=ue.add(u,d,y,z,O),d.proxy)return d;if(y=Ho(),d.proxy=y,y.src=o,y.listener=d,o.addEventListener)K||(D=z),D===void 0&&(D=!1),o.addEventListener(u.toString(),y,D);else if(o.attachEvent)o.attachEvent(Ki(u.toString()),y);else if(o.addListener&&o.removeListener)o.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ho(){function o(d){return u.call(o.src,o.listener,d)}const u=Bo;return o}function Xi(o,u,d,y,D){if(Array.isArray(u))for(var O=0;O<u.length;O++)Xi(o,u[O],d,y,D);else y=m(y)?!!y.capture:!!y,d=Qi(d),o&&o[Y]?(o=o.i,u=String(u).toString(),u in o.g&&(O=o.g[u],d=nn(O,d,y,D),-1<d&&(ke(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete o.g[u],o.h--)))):o&&(o=Os(o))&&(u=o.g[u.toString()],o=-1,u&&(o=nn(u,d,y,D)),(d=-1<o?u[o]:null)&&An(d))}function An(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[Y])ut(u.i,o);else{var d=o.type,y=o.proxy;u.removeEventListener?u.removeEventListener(d,y,o.capture):u.detachEvent?u.detachEvent(Ki(d),y):u.addListener&&u.removeListener&&u.removeListener(y),(d=Os(u))?(ut(d,o),d.h==0&&(d.src=null,u[Dt]=null)):ke(o)}}}function Ki(o){return o in Ht?Ht[o]:Ht[o]="on"+o}function Bo(o,u){if(o.da)o=!0;else{u=new q(u,this);var d=o.listener,y=o.ha||o.src;o.fa&&An(o),o=d.call(y,u)}return o}function Os(o){return o=o[Dt],o instanceof be?o:null}var Ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qi(o){return typeof o=="function"?o:(o[Ms]||(o[Ms]=function(u){return o.handleEvent(u)}),o[Ms])}function Ie(){Z.call(this),this.i=new be(this),this.M=this,this.F=null}C(Ie,Z),Ie.prototype[Y]=!0,Ie.prototype.removeEventListener=function(o,u,d,y){Xi(this,o,u,d,y)};function _e(o,u){var d,y=o.F;if(y)for(d=[];y;y=y.F)d.push(y);if(o=o.M,y=u.type||u,typeof u=="string")u=new H(u,o);else if(u instanceof H)u.target=u.target||o;else{var D=u;u=new H(y,o),T(u,D)}if(D=!0,d)for(var O=d.length-1;0<=O;O--){var z=u.g=d[O];D=Kn(z,y,!0,u)&&D}if(z=u.g=o,D=Kn(z,y,!0,u)&&D,D=Kn(z,y,!1,u)&&D,d)for(O=0;O<d.length;O++)z=u.g=d[O],D=Kn(z,y,!1,u)&&D}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],y=0;y<d.length;y++)ke(d[y]);delete o.g[u],o.h--}}this.F=null},Ie.prototype.K=function(o,u,d,y){return this.i.add(String(o),u,!1,d,y)},Ie.prototype.L=function(o,u,d,y){return this.i.add(String(o),u,!0,d,y)};function Kn(o,u,d,y){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var D=!0,O=0;O<u.length;++O){var z=u[O];if(z&&!z.da&&z.capture==d){var ue=z.listener,Le=z.ha||z.src;z.fa&&ut(o.i,z),D=ue.call(Le,y)!==!1&&D}}return D&&!y.defaultPrevented}function qi(o,u,d){if(typeof o=="function")d&&(o=b(o,d));else if(o&&typeof o.handleEvent=="function")o=b(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ji(o){o.g=qi(()=>{o.g=null,o.i&&(o.i=!1,Ji(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Fs extends Z{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ji(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(o){Z.call(this),this.h=o,this.g={}}C(In,Z);var Us=[];function Zi(o){M(o.g,function(u,d){this.g.hasOwnProperty(d)&&An(u)},o),o.g={}}In.prototype.N=function(){In.aa.N.call(this),Zi(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rn=c.JSON.stringify,Hs=c.JSON.parse,zo=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Bs(){}Bs.prototype.h=null;function er(o){return o.h||(o.h=o.i())}function Wo(){}var W={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ne(){H.call(this,"d")}C(ne,H);function Ee(){H.call(this,"c")}C(Ee,H);var Rt={},tr=null;function zs(){return tr=tr||new Ie}Rt.La="serverreachability";function nr(o){H.call(this,Rt.La,o)}C(nr,H);function Ws(o){const u=zs();_e(u,new nr(u))}Rt.STAT_EVENT="statevent";function Oc(o,u){H.call(this,Rt.STAT_EVENT,o),this.stat=u}C(Oc,H);function Ve(o){const u=zs();_e(u,new Oc(u,o))}Rt.Ma="timingevent";function Mc(o,u){H.call(this,Rt.Ma,o),this.size=u}C(Mc,H);function $s(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function Df(o,u,d,y,D,O){o.info(function(){if(o.g)if(O)for(var z="",ue=O.split("&"),Le=0;Le<ue.length;Le++){var ae=ue[Le].split("=");if(1<ae.length){var Ue=ae[0];ae=ae[1];var He=Ue.split("_");z=2<=He.length&&He[1]=="type"?z+(Ue+"="+ae+"&"):z+(Ue+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+u+`
`+d+`
`+z})}function Rf(o,u,d,y,D,O,z){o.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+u+`
`+d+`
`+O+" "+z})}function Qn(o,u,d,y){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Lf(o,d)+(y?" "+y:"")})}function _f(o,u){o.info(function(){return"TIMEOUT: "+u})}Vs.prototype.info=function(){};function Lf(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var y=d[o];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var O=D[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<D.length;z++)D[z]=""}}}}return rn(d)}catch{return u}}var $o={NO_ERROR:0,TIMEOUT:8},Of={},Vo;function sr(){}C(sr,Bs),sr.prototype.g=function(){return new XMLHttpRequest},sr.prototype.i=function(){return{}},Vo=new sr;function on(o,u,d,y){this.j=o,this.i=u,this.l=d,this.R=y||1,this.U=new In(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fc}function Fc(){this.i=null,this.g="",this.h=!1}var Uc={},Yo={};function Go(o,u,d){o.L=1,o.v=ar(Bt(u)),o.m=d,o.P=!0,Hc(o,null)}function Hc(o,u){o.F=Date.now(),ir(o),o.A=Bt(o.v);var d=o.A,y=o.R;Array.isArray(y)||(y=[String(y)]),eu(d.i,"t",y),o.C=0,d=o.j.J,o.h=new Fc,o.g=vu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Fs(b(o.Y,o,o.g),o.O)),u=o.U,d=o.g,y=o.ca;var D="readystatechange";Array.isArray(D)||(D&&(Us[0]=D.toString()),D=Us);for(var O=0;O<D.length;O++){var z=sn(d,D[O],y||u.handleEvent,!1,u.h||u);if(!z)break;u.g[z.key]=z}u=o.H?f(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ws(),Df(o.i,o.u,o.A,o.l,o.R,o.m)}on.prototype.ca=function(o){o=o.target;const u=this.M;u&&zt(o)==3?u.j():this.Y(o)},on.prototype.Y=function(o){try{if(o==this.g)e:{const He=zt(this.g);var u=this.g.Ba();const Zn=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||au(this.g)))){this.J||He!=4||u==7||(u==8||0>=Zn?Ws(3):Ws(2)),Xo(this);var d=this.g.Z();this.X=d;t:if(Bc(this)){var y=au(this.g);o="";var D=y.length,O=zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),Ys(this);var z="";break t}this.h.i=new c.TextDecoder}for(u=0;u<D;u++)this.h.h=!0,o+=this.h.i.decode(y[u],{stream:!(O&&u==D-1)});y.length=0,this.h.g+=o,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,Rf(this.i,this.u,this.A,this.l,this.R,He,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Le=this.g;if((ue=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(ue)){var ae=ue;break t}}ae=null}if(d=ae)Qn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ko(this,d);else{this.o=!1,this.s=3,Ve(12),Dn(this),Ys(this);break e}}if(this.P){d=!0;let vt;for(;!this.J&&this.C<z.length;)if(vt=Mf(this,z),vt==Yo){He==4&&(this.s=4,Ve(14),d=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(vt==Uc){this.s=4,Ve(15),Qn(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else Qn(this.i,this.l,vt,null),Ko(this,vt);if(Bc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||z.length!=0||this.h.h||(this.s=1,Ve(16),d=!1),this.o=this.o&&d,!d)Qn(this.i,this.l,z,"[Invalid Chunked Response]"),Dn(this),Ys(this);else if(0<z.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),ta(Ue),Ue.M=!0,Ve(11))}}else Qn(this.i,this.l,z,null),Ko(this,z);He==4&&Dn(this),this.o&&!this.J&&(He==4?fu(this.j,this):(this.o=!1,ir(this)))}else em(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,Ve(12)):(this.s=0,Ve(13)),Dn(this),Ys(this)}}}catch{}finally{}};function Bc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Mf(o,u){var d=o.C,y=u.indexOf(`
`,d);return y==-1?Yo:(d=Number(u.substring(d,y)),isNaN(d)?Uc:(y+=1,y+d>u.length?Yo:(u=u.slice(y,y+d),o.C=y+d,u)))}on.prototype.cancel=function(){this.J=!0,Dn(this)};function ir(o){o.S=Date.now()+o.I,zc(o,o.I)}function zc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=$s(b(o.ba,o),u)}function Xo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}on.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(_f(this.i,this.A),this.L!=2&&(Ws(),Ve(17)),Dn(this),this.s=2,Ys(this)):zc(this,this.S-o)};function Ys(o){o.j.G==0||o.J||fu(o.j,o)}function Dn(o){Xo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Zi(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ko(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Qo(d.h,o))){if(!o.K&&Qo(d.h,o)&&d.G==3){try{var y=d.Da.g.parse(u)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)pr(d),dr(d);else break e;ea(d),Ve(18)}}else d.za=D[1],0<d.za-d.T&&37500>D[2]&&d.F&&d.v==0&&!d.C&&(d.C=$s(b(d.Za,d),6e3));if(1>=Vc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else _n(d,11)}else if((o.K||d.g==o)&&pr(d),!p(u))for(D=d.Da.g.parse(u),u=0;u<D.length;u++){let ae=D[u];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const Ue=ae[3];Ue!=null&&(d.la=Ue,d.j.info("VER="+d.la));const He=ae[4];He!=null&&(d.Aa=He,d.j.info("SVER="+d.Aa));const Zn=ae[5];Zn!=null&&typeof Zn=="number"&&0<Zn&&(y=1.5*Zn,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const vt=o.g;if(vt){const fr=vt.g?vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fr){var O=y.h;O.g||fr.indexOf("spdy")==-1&&fr.indexOf("quic")==-1&&fr.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(qo(O,O.h),O.h=null))}if(y.D){const na=vt.g?vt.g.getResponseHeader("X-HTTP-Session-Id"):null;na&&(y.ya=na,pe(y.I,y.D,na))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var z=o;if(y.qa=yu(y,y.J?y.ia:null,y.W),z.K){Yc(y.h,z);var ue=z,Le=y.L;Le&&(ue.I=Le),ue.B&&(Xo(ue),ir(ue)),y.g=z}else hu(y);0<d.i.length&&hr(d)}else ae[0]!="stop"&&ae[0]!="close"||_n(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?_n(d,7):Zo(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}Ws(4)}catch{}}var Ff=class{constructor(o,u){this.g=o,this.map=u}};function Wc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $c(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Vc(o){return o.h?1:o.g?o.g.size:0}function Qo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function qo(o,u){o.g?o.g.add(u):o.h=u}function Yc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Wc.prototype.cancel=function(){if(this.i=Gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Gc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return A(o.i)}function Uf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(h(o)){for(var u=[],d=o.length,y=0;y<d;y++)u.push(o[y]);return u}u=[],d=0;for(y in o)u[d++]=o[y];return u}function Hf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(h(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const y in o)u[d++]=y;return u}}}function Xc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(h(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=Hf(o),y=Uf(o),D=y.length,O=0;O<D;O++)u.call(void 0,y[O],d&&d[O],o)}var Kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bf(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var y=o[d].indexOf("="),D=null;if(0<=y){var O=o[d].substring(0,y);D=o[d].substring(y+1)}else O=o[d];u(O,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Rn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Rn){this.h=o.h,rr(this,o.j),this.o=o.o,this.g=o.g,or(this,o.s),this.l=o.l;var u=o.i,d=new Ks;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Qc(this,d),this.m=o.m}else o&&(u=String(o).match(Kc))?(this.h=!1,rr(this,u[1]||"",!0),this.o=Gs(u[2]||""),this.g=Gs(u[3]||"",!0),or(this,u[4]),this.l=Gs(u[5]||"",!0),Qc(this,u[6]||"",!0),this.m=Gs(u[7]||"")):(this.h=!1,this.i=new Ks(null,this.h))}Rn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Xs(u,qc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Xs(u,qc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Xs(d,d.charAt(0)=="/"?$f:Wf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Xs(d,Yf)),o.join("")};function Bt(o){return new Rn(o)}function rr(o,u,d){o.j=d?Gs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function or(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Qc(o,u,d){u instanceof Ks?(o.i=u,Gf(o.i,o.h)):(d||(u=Xs(u,Vf)),o.i=new Ks(u,o.h))}function pe(o,u,d){o.i.set(u,d)}function ar(o){return pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Gs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,zf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function zf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var qc=/[#\/\?@]/g,Wf=/[#\?:]/g,$f=/[#\?]/g,Vf=/[#\?@]/g,Yf=/#/g;function Ks(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&Bf(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}e=Ks.prototype,e.add=function(o,u){an(this),this.i=null,o=qn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Jc(o,u){an(o),u=qn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Zc(o,u){return an(o),u=qn(o,u),o.g.has(u)}e.forEach=function(o,u){an(this),this.g.forEach(function(d,y){d.forEach(function(D){o.call(u,D,y,this)},this)},this)},e.na=function(){an(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let y=0;y<u.length;y++){const D=o[y];for(let O=0;O<D.length;O++)d.push(u[y])}return d},e.V=function(o){an(this);let u=[];if(typeof o=="string")Zc(this,o)&&(u=u.concat(this.g.get(qn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},e.set=function(o,u){return an(this),this.i=null,o=qn(this,o),Zc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},e.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function eu(o,u,d){Jc(o,u),0<d.length&&(o.i=null,o.g.set(qn(o,u),A(d)),o.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var y=u[d];const O=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var D=O;z[y]!==""&&(D+="="+encodeURIComponent(String(z[y]))),o.push(D)}}return this.i=o.join("&")};function qn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Gf(o,u){u&&!o.j&&(an(o),o.i=null,o.g.forEach(function(d,y){var D=y.toLowerCase();y!=D&&(Jc(this,y),eu(this,D,d))},o)),o.j=u}function Xf(o,u){const d=new Vs;if(c.Image){const y=new Image;y.onload=k(ln,d,"TestLoadImage: loaded",!0,u,y),y.onerror=k(ln,d,"TestLoadImage: error",!1,u,y),y.onabort=k(ln,d,"TestLoadImage: abort",!1,u,y),y.ontimeout=k(ln,d,"TestLoadImage: timeout",!1,u,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=o}else u(!1)}function Kf(o,u){const d=new Vs,y=new AbortController,D=setTimeout(()=>{y.abort(),ln(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:y.signal}).then(O=>{clearTimeout(D),O.ok?ln(d,"TestPingServer: ok",!0,u):ln(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(D),ln(d,"TestPingServer: error",!1,u)})}function ln(o,u,d,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(d)}catch{}}function Qf(){this.g=new zo}function qf(o,u,d){const y=d||"";try{Xc(o,function(D,O){let z=D;m(D)&&(z=rn(D)),u.push(y+O+"="+encodeURIComponent(z))})}catch(D){throw u.push(y+"type="+encodeURIComponent("_badmap")),D}}function lr(o){this.l=o.Ub||null,this.j=o.eb||!1}C(lr,Bs),lr.prototype.g=function(){return new cr(this.l,this.j)},lr.prototype.i=function(o){return function(){return o}}({});function cr(o,u){Ie.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(cr,Ie),e=cr.prototype,e.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,qs(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qs(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function tu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Qs(this):qs(this),this.readyState==3&&tu(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Qs(this))},e.Qa=function(o){this.g&&(this.response=o,Qs(this))},e.ga=function(){this.g&&Qs(this)};function Qs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,qs(o)}e.setRequestHeader=function(o,u){this.u.append(o,u)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function qs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function nu(o){let u="";return M(o,function(d,y){u+=y,u+=":",u+=d,u+=`\r
`}),u}function Jo(o,u,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=nu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):pe(o,u,d))}function Ce(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ce,Ie);var Jf=/^https?$/i,Zf=["POST","PUT"];e=Ce.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,u,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vo.g(),this.v=this.o?er(this.o):er(Vo),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(O){su(this,O);return}if(o=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)d.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())d.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),D=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Zf,u,void 0))||y||D||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of d)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ou(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){su(this,O)}};function su(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,iu(o),ur(o)}function iu(o){o.A||(o.A=!0,_e(o,"complete"),_e(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,_e(this,"complete"),_e(this,"abort"),ur(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ur(this,!0)),Ce.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?ru(this):this.bb())},e.bb=function(){ru(this)};function ru(o){if(o.h&&typeof l<"u"&&(!o.v[1]||zt(o)!=4||o.Z()!=2)){if(o.u&&zt(o)==4)qi(o.Ea,0,o);else if(_e(o,"readystatechange"),zt(o)==4){o.h=!1;try{const z=o.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var y;if(y=z===0){var D=String(o.D).match(Kc)[1]||null;!D&&c.self&&c.self.location&&(D=c.self.location.protocol.slice(0,-1)),y=!Jf.test(D?D.toLowerCase():"")}d=y}if(d)_e(o,"complete"),_e(o,"success");else{o.m=6;try{var O=2<zt(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",iu(o)}}finally{ur(o)}}}}function ur(o,u){if(o.g){ou(o);const d=o.g,y=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||_e(o,"ready");try{d.onreadystatechange=y}catch{}}}function ou(o){o.I&&(c.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function zt(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<zt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Hs(u)}};function au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function em(o){const u={};o=(o.g&&2<=zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<o.length;y++){if(p(o[y]))continue;var d=P(o[y]);const D=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[D]||[];u[D]=O,O.push(d)}x(u,function(y){return y.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Js(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function lu(o){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Js("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Js("baseRetryDelayMs",5e3,o),this.cb=Js("retryDelaySeedMs",1e4,o),this.Wa=Js("forwardChannelMaxRetries",2,o),this.wa=Js("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Wc(o&&o.concurrentRequestLimit),this.Da=new Qf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=lu.prototype,e.la=8,e.G=1,e.connect=function(o,u,d,y){Ve(0),this.W=o,this.H=u||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=yu(this,null,this.W),hr(this)};function Zo(o){if(cu(o),o.G==3){var u=o.U++,d=Bt(o.I);if(pe(d,"SID",o.K),pe(d,"RID",u),pe(d,"TYPE","terminate"),Zs(o,d),u=new on(o,o.j,u),u.L=2,u.v=ar(Bt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=vu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ir(u)}gu(o)}function dr(o){o.g&&(ta(o),o.g.cancel(),o.g=null)}function cu(o){dr(o),o.u&&(c.clearTimeout(o.u),o.u=null),pr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function hr(o){if(!$c(o.h)&&!o.s){o.s=!0;var u=o.Ga;oe||X(),U||(oe(),U=!0),G.add(u,o),o.B=0}}function tm(o,u){return Vc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=$s(b(o.Ga,o,u),mu(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const D=new on(this,this.j,o);let O=this.o;if(this.S&&(O?(O=f(O),T(O,this.S)):O=this.S),this.m!==null||this.O||(D.H=O,O=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(u+=y,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=du(this,D,u),d=Bt(this.I),pe(d,"RID",o),pe(d,"CVER",22),this.D&&pe(d,"X-HTTP-Session-Id",this.D),Zs(this,d),O&&(this.O?u="headers="+encodeURIComponent(String(nu(O)))+"&"+u:this.m&&Jo(d,this.m,O)),qo(this.h,D),this.Ua&&pe(d,"TYPE","init"),this.P?(pe(d,"$req",u),pe(d,"SID","null"),D.T=!0,Go(D,d,null)):Go(D,d,u),this.G=2}}else this.G==3&&(o?uu(this,o):this.i.length==0||$c(this.h)||uu(this))};function uu(o,u){var d;u?d=u.l:d=o.U++;const y=Bt(o.I);pe(y,"SID",o.K),pe(y,"RID",d),pe(y,"AID",o.T),Zs(o,y),o.m&&o.o&&Jo(y,o.m,o.o),d=new on(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=du(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),qo(o.h,d),Go(d,y,u)}function Zs(o,u){o.H&&M(o.H,function(d,y){pe(u,y,d)}),o.l&&Xc({},function(d,y){pe(u,y,d)})}function du(o,u,d){d=Math.min(o.i.length,d);var y=o.l?b(o.l.Na,o.l,o):null;e:{var D=o.i;let O=-1;for(;;){const z=["count="+d];O==-1?0<d?(O=D[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let ue=!0;for(let Le=0;Le<d;Le++){let ae=D[Le].g;const Ue=D[Le].map;if(ae-=O,0>ae)O=Math.max(0,D[Le].g-100),ue=!1;else try{qf(Ue,z,"req"+ae+"_")}catch{y&&y(Ue)}}if(ue){y=z.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,y}function hu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;oe||X(),U||(oe(),U=!0),G.add(u,o),o.v=0}}function ea(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=$s(b(o.Fa,o),mu(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,pu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=$s(b(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ve(10),dr(this),pu(this))};function ta(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function pu(o){o.g=new on(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Bt(o.qa);pe(u,"RID","rpc"),pe(u,"SID",o.K),pe(u,"AID",o.T),pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&pe(u,"TO",o.ja),pe(u,"TYPE","xmlhttp"),Zs(o,u),o.m&&o.o&&Jo(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ar(Bt(u)),d.m=null,d.P=!0,Hc(d,o)}e.Za=function(){this.C!=null&&(this.C=null,dr(this),ea(this),Ve(19))};function pr(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function fu(o,u){var d=null;if(o.g==u){pr(o),ta(o),o.g=null;var y=2}else if(Qo(o.h,u))d=u.D,Yc(o.h,u),y=1;else return;if(o.G!=0){if(u.o)if(y==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var D=o.B;y=zs(),_e(y,new Mc(y,d)),hr(o)}else hu(o);else if(D=u.s,D==3||D==0&&0<u.X||!(y==1&&tm(o,u)||y==2&&ea(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),D){case 1:_n(o,5);break;case 4:_n(o,10);break;case 3:_n(o,6);break;default:_n(o,2)}}}function mu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function _n(o,u){if(o.j.info("Error code "+u),u==2){var d=b(o.fb,o),y=o.Xa;const D=!y;y=new Rn(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||rr(y,"https"),ar(y),D?Xf(y.toString(),d):Kf(y.toString(),d)}else Ve(2);o.G=0,o.l&&o.l.sa(u),gu(o),cu(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ve(2)):(this.j.info("Failed to ping google.com"),Ve(1))};function gu(o){if(o.G=0,o.ka=[],o.l){const u=Gc(o.h);(u.length!=0||o.i.length!=0)&&(_(o.ka,u),_(o.ka,o.i),o.h.i.length=0,A(o.i),o.i.length=0),o.l.ra()}}function yu(o,u,d){var y=d instanceof Rn?Bt(d):new Rn(d);if(y.g!="")u&&(y.g=u+"."+y.g),or(y,y.s);else{var D=c.location;y=D.protocol,u=u?u+"."+D.hostname:D.hostname,D=+D.port;var O=new Rn(null);y&&rr(O,y),u&&(O.g=u),D&&or(O,D),d&&(O.l=d),y=O}return d=o.D,u=o.ya,d&&u&&pe(y,d,u),pe(y,"VER",o.la),Zs(o,y),y}function vu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ce(new lr({eb:d})):new Ce(o.pa),u.Ha(o.J),u}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function xu(){}e=xu.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function dt(o,u){Ie.call(this),this.g=new lu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!p(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!p(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Jn(this)}C(dt,Ie),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Zo(this.g)},dt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=rn(o),o=d);u.i.push(new Ff(u.Ya++,o)),u.G==3&&hr(u)},dt.prototype.N=function(){this.g.l=null,delete this.j,Zo(this.g),delete this.g,dt.aa.N.call(this)};function wu(o){ne.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(wu,ne);function ju(){Ee.call(this),this.status=1}C(ju,Ee);function Jn(o){this.g=o}C(Jn,xu),Jn.prototype.ua=function(){_e(this.g,"a")},Jn.prototype.ta=function(o){_e(this.g,new wu(o))},Jn.prototype.sa=function(o){_e(this.g,new ju)},Jn.prototype.ra=function(){_e(this.g,"b")},dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,$o.NO_ERROR=0,$o.TIMEOUT=8,$o.HTTP_ERROR=6,Of.COMPLETE="complete",Wo.EventType=W,W.OPEN="a",W.CLOSE="b",W.ERROR="c",W.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha}).apply(typeof Dr<"u"?Dr:typeof self<"u"?self:typeof window<"u"?window:{});const Bd="@firebase/firestore";/**
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
 */class st{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let Fo="10.14.0";/**
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
 */const vo=new vf("@firebase/firestore");function Et(e,...t){if(vo.logLevel<=de.DEBUG){const n=t.map(Cf);vo.debug(`Firestore (${Fo}): ${e}`,...n)}}function kf(e,...t){if(vo.logLevel<=de.ERROR){const n=t.map(Cf);vo.error(`Firestore (${Fo}): ${e}`,...n)}}function Cf(e){if(typeof e=="string")return e;try{/**
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
 */function Nf(e="Unexpected state"){const t=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: `+e;throw kf(t),new Error(t)}function bi(e,t){e||Nf()}/**
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
 */const kt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Ct extends Ds{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Si{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class tv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class sv{constructor(t){this.t=t,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){bi(this.o===void 0);let i=this.i;const r=h=>this.i!==i?(i=this.i,n(h)):Promise.resolve();let a=new Si;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Si,t.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const h=a;t.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},c=h=>{Et("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(Et("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Si)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Et("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(bi(typeof i.accessToken=="string"),new tv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return bi(t===null||typeof t=="string"),new st(t)}}class iv{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=st.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rv{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new iv(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ov{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class av{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){bi(this.o===void 0);const i=a=>{a.error!=null&&Et("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,Et("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>i(a))};const r=a=>{Et("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>r(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?r(a):Et("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(bi(typeof n.token=="string"),this.R=n.token,new ov(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function lv(e){return e.name==="IndexedDbTransactionError"}class xo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xo&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var zd,se;(se=zd||(zd={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Sf([4294967295,4294967295],0);function Ra(){return typeof document<"u"?document:null}/**
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
 */class cv{constructor(t,n,i=1e3,r=1.5,a=6e4){this.ui=t,this.timerId=n,this.ko=i,this.qo=r,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-i);r>0&&Et("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Lc{constructor(t,n,i,r,a){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=a,this.deferred=new Si,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,a){const l=Date.now()+i,c=new Lc(t,n,l,r,a);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ct(kt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Wd,$d;($d=Wd||(Wd={})).ea="default",$d.Cache="cache";/**
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
 */function uv(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Vd=new Map;function dv(e,t,n,i){if(t===!0&&i===!0)throw new Ct(kt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class Yd{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Ct(kt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ct(kt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}dv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uv((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new Ct(kt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new Ct(kt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new Ct(kt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hv{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ct(kt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Ct(kt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yd(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new nv;switch(i.type){case"firstParty":return new rv(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ct(kt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=Vd.get(n);i&&(Et("ComponentProvider","Removing Datastore"),Vd.delete(n),i.terminate())}(this),Promise.resolve()}}/**
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
 */class Gd{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new cv(this,"async_queue_retry"),this.Vu=()=>{const i=Ra();i&&Et("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const n=Ra();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Ra();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Si;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!lv(t))throw t;Et("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const r=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(i);throw kf("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=n,n}enqueueAfterDelay(t,n,i){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const r=Lc.createAndSchedule(this,t,n,i,a=>this.yu(a));return this.Tu.push(r),r}fu(){this.Eu&&Nf()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class pv extends hv{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=new Gd,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Gd(t),this._firestoreClient=void 0,await t}}}(function(t,n=!0){(function(r){Fo=r})(W0),yo(new go("firestore",(i,{instanceIdentifier:r,options:a})=>{const l=i.getProvider("app").getImmediate(),c=new pv(new sv(i.getProvider("auth-internal")),new av(i.getProvider("app-check-internal")),function(m,E){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new Ct(kt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(m.options.projectId,E)}(l,r),l);return a=Object.assign({useFetchStreams:n},a),c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),ws(Bd,"4.7.3",t),ws(Bd,"4.7.3","esm2017")})();const Xe=()=>!0;console.log("Running in Demo Mode - using localStorage for data storage");const Tf="cyberRangeDemo",ct=()=>{try{const e=localStorage.getItem(Tf);return e?JSON.parse(e):{students:{},classes:{},assignments:{},teachers:{}}}catch{return{students:{},classes:{},assignments:{},teachers:{}}}},Rs=e=>{localStorage.setItem(Tf,JSON.stringify(e))},Xt=new Map,Ef=e=>{const t=Xt.get(e)||[],n=ct();t.forEach(i=>{if(e.startsWith("class:")){const r=e.replace("class:",""),a=Object.values(n.students).filter(l=>l.classCode===r);i(a.map(l=>({...l,lastActivity:l.lastActivity?new Date(l.lastActivity):null,lastLogin:l.lastLogin?new Date(l.lastLogin):null})))}else if(e.startsWith("assignments:")){const r=e.replace("assignments:",""),a=Object.values(n.assignments[r]||{});i(a.map(l=>({...l,dueDate:l.dueDate?new Date(l.dueDate):null,createdAt:l.createdAt?new Date(l.createdAt):null,assignedAt:l.assignedAt?new Date(l.assignedAt):null})))}})},fv=async(e,t,n)=>{if(Xe()){const i=ct();if(!i.students[e])return;i.students[e].submissions||(i.students[e].submissions={}),i.students[e].submissions[t]={answer:n.answer,isCorrect:n.isCorrect,exerciseType:n.exerciseType,exerciseTitle:n.exerciseTitle,submittedAt:new Date().toISOString()},i.students[e].lastActivity=new Date().toISOString(),Rs(i);return}},mv=async e=>{if(Xe()){const t=ct(),n=[];return Object.entries(t.students).filter(([i,r])=>r.classCode===e).forEach(([i,r])=>{r.submissions&&Object.entries(r.submissions).forEach(([a,l])=>{n.push({studentId:i,studentName:r.name,exerciseId:a,...l})})}),n}return[]},gv=async e=>Xe()&&ct().classes[e]||null,yv=(e,t)=>{if(Xe()){const n=`class:${e}`,i=Xt.get(n)||[];i.push(t),Xt.set(n,i);const r=ct(),a=Object.entries(r.students).filter(([l,c])=>c.classCode===e).map(([l,c])=>({id:l,...c,lastActivity:c.lastActivity?new Date(c.lastActivity):null,lastLogin:c.lastLogin?new Date(c.lastLogin):null}));return t(a),()=>{const l=Xt.get(n)||[];Xt.set(n,l.filter(c=>c!==t))}}return t([]),()=>{}},Pf=(e,t)=>{if(Xe()){const n=`assignments:${e}`,i=Xt.get(n)||[];i.push(t),Xt.set(n,i);const r=ct(),a=Object.entries(r.assignments[e]||{}).map(([l,c])=>({id:l,...c,dueDate:c.dueDate?new Date(c.dueDate):null,createdAt:c.createdAt?new Date(c.createdAt):null,assignedAt:c.assignedAt?new Date(c.assignedAt):null}));return t(a),()=>{const l=Xt.get(n)||[];Xt.set(n,l.filter(c=>c!==t))}}return t([]),()=>{}},vv=async(e,t)=>{if(Xe()){const n=ct();n.assignments[e]||(n.assignments[e]={});const i=`assignment_${Date.now()}`;return n.assignments[e][i]={type:t.type,items:t.items||[],title:t.title,assignedAt:new Date().toISOString(),createdAt:new Date().toISOString(),dueDate:t.dueDate||null},Rs(n),Ef(`assignments:${e}`),{id:i}}return null},xv=async(e,t)=>{if(Xe()){const n=ct();n.assignments[e]&&n.assignments[e][t]&&(delete n.assignments[e][t],Rs(n),Ef(`assignments:${e}`));return}},wv=async(e,t,n)=>{const i=t.toLowerCase().replace(/[^a-z0-9]/g,"_");if(console.log("Registering teacher:",{teacherId:i,email:t,isDemoMode:Xe(),dbAvailable:!1}),Xe()){const r=ct();if(r.teachers||(r.teachers={}),r.teachers[i])throw new Error("An account with this email already exists");return r.teachers[i]={name:e,email:t.toLowerCase(),password:n,createdAt:new Date().toISOString(),classes:[]},Rs(r),console.log("Teacher registered in demo mode:",i),{id:i,name:e,email:t.toLowerCase(),classes:[]}}throw console.error("Firebase db is not initialized for teacher registration!"),new Error("Database not available. Please check Firebase configuration.")},jv=async(e,t)=>{const n=e.toLowerCase().replace(/[^a-z0-9]/g,"_");if(console.log("Teacher login attempt:",{teacherId:n,isDemoMode:Xe(),dbAvailable:!1}),Xe()){const i=ct();i.teachers||(i.teachers={});const r=i.teachers[n];if(!r)throw new Error("No account found with this email");if(r.password!==t)throw new Error("Incorrect password");return console.log("Teacher logged in via demo mode:",n),{id:n,name:r.name,email:r.email,classes:r.classes||[]}}throw console.error("Firebase db is not initialized for teacher login!"),new Error("Database not available. Please check Firebase configuration.")},bv=async e=>{if(Xe()){const t=ct();return!t.teachers||!t.teachers[e]?[]:(t.teachers[e].classes||[]).map(i=>t.classes[i]).filter(Boolean)}return[]},Sv=async(e,t)=>{const n=Cv();if(console.log("Creating class:",{teacherId:e,className:t,classCode:n,isDemoMode:Xe(),dbAvailable:!1}),Xe()){const i=ct();if(i.teachers||(i.teachers={}),!i.teachers[e])throw new Error("Teacher not found");return i.classes[n]={name:t,teacherId:e,teacher:i.teachers[e].name,classCode:n,createdAt:new Date().toISOString(),isActive:!0},i.assignments[n]={},i.teachers[e].classes||(i.teachers[e].classes=[]),i.teachers[e].classes.push(n),Rs(i),console.log("Class created in demo mode:",n),i.classes[n]}throw console.error("Firebase db is not initialized!"),new Error("Database not available. Please check Firebase configuration.")},kv=async(e,t)=>{if(Xe()){const n=ct();if(!n.teachers||!n.teachers[e])throw new Error("Teacher not found");return n.teachers[e].classes=(n.teachers[e].classes||[]).filter(i=>i!==t),delete n.classes[t],delete n.assignments[t],Object.keys(n.students).forEach(i=>{n.students[i].classCode===t&&delete n.students[i]}),Rs(n),!0}return!1},Cv=()=>{const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="";for(let n=0;n<6;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},Nv=({onLogin:e,onBack:t})=>{const[n,i]=I.useState("login"),[r,a]=I.useState(""),[l,c]=I.useState(""),[h,m]=I.useState(""),[E,j]=I.useState(""),[b,k]=I.useState(""),[C,A]=I.useState(!1),_=async p=>{if(p.preventDefault(),k(""),!l.trim()){k("Please enter your email");return}if(!h){k("Please enter your password");return}A(!0);try{const S=await jv(l,h);e(S)}catch(S){k(S.message||"Login failed. Please try again.")}A(!1)},g=async p=>{if(p.preventDefault(),k(""),!r.trim()){k("Please enter your name");return}if(!l.trim()){k("Please enter your email");return}if(!h){k("Please enter a password");return}if(h.length<4){k("Password must be at least 4 characters");return}if(h!==E){k("Passwords do not match");return}A(!0);try{const S=await wv(r,l,h);e(S)}catch(S){k(S.message||"Registration failed. Please try again.")}A(!1)};return s.jsx("div",{className:"login-container",children:s.jsxs("div",{className:"login-card",children:[s.jsxs("div",{className:"login-header",children:[s.jsx("h1",{children:"Teacher Portal"}),s.jsx("p",{children:"Manage your classes and students"})]}),s.jsxs("div",{className:"login-tabs",children:[s.jsx("button",{className:`tab-btn ${n==="login"?"active":""}`,onClick:()=>{i("login"),k("")},children:"Sign In"}),s.jsx("button",{className:`tab-btn ${n==="register"?"active":""}`,onClick:()=>{i("register"),k("")},children:"Create Account"})]}),n==="login"?s.jsxs("form",{onSubmit:_,className:"login-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"email",children:"Email"}),s.jsx("input",{type:"email",id:"email",placeholder:"teacher@school.edu",value:l,onChange:p=>c(p.target.value),disabled:C})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",placeholder:"Enter your password",value:h,onChange:p=>m(p.target.value),disabled:C})]}),b&&s.jsx("div",{className:"error-message",children:b}),s.jsx("button",{type:"submit",className:"btn-primary",disabled:C,children:C?"Signing in...":"Sign In"})]}):s.jsxs("form",{onSubmit:g,className:"login-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"name",children:"Your Name"}),s.jsx("input",{type:"text",id:"name",placeholder:"Ms. Smith",value:r,onChange:p=>a(p.target.value),disabled:C})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"regEmail",children:"Email"}),s.jsx("input",{type:"email",id:"regEmail",placeholder:"teacher@school.edu",value:l,onChange:p=>c(p.target.value),disabled:C})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"regPassword",children:"Password"}),s.jsx("input",{type:"password",id:"regPassword",placeholder:"Create a password",value:h,onChange:p=>m(p.target.value),disabled:C})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),s.jsx("input",{type:"password",id:"confirmPassword",placeholder:"Confirm your password",value:E,onChange:p=>j(p.target.value),disabled:C})]}),b&&s.jsx("div",{className:"error-message",children:b}),s.jsx("button",{type:"submit",className:"btn-primary",disabled:C,children:C?"Creating Account...":"Create Account"})]}),s.jsx("div",{className:"login-footer",children:s.jsx("button",{className:"btn-link",onClick:t,children:"Back to Student Login"})})]})})},Tv=({teacher:e,onSelectClass:t,onLogout:n})=>{Dc();const[i,r]=I.useState([]),[a,l]=I.useState(!0),[c,h]=I.useState(!1),[m,E]=I.useState(""),[j,b]=I.useState(!1),[k,C]=I.useState(""),[A,_]=I.useState(!1);I.useEffect(()=>{g()},[e.id]);const g=async()=>{l(!0);try{const L=await bv(e.id);r(L)}catch(L){console.error("Error loading classes:",L)}l(!1)},p=async L=>{if(L.preventDefault(),C(""),!m.trim()){C("Please enter a class name");return}b(!0);try{const M=await Sv(e.id,m.trim());r([...i,M]),E(""),h(!1)}catch(M){C(M.message||"Failed to create class")}b(!1)},S=async(L,M)=>{if(window.confirm(`Are you sure you want to delete "${M}"? This will remove all student data and cannot be undone.`))try{await kv(e.id,L),r(i.filter(x=>x.classCode!==L))}catch(x){alert("Failed to delete class: "+x.message)}},R=L=>{navigator.clipboard.writeText(L)};return s.jsxs("div",{className:"teacher-home",children:[s.jsxs("header",{className:"th-header",children:[s.jsxs("div",{className:"th-title",children:[s.jsx("h1",{children:"Teacher Dashboard"}),s.jsxs("p",{children:["Welcome back, ",e.name]})]}),s.jsxs("div",{className:"th-actions",children:[s.jsx("button",{className:"theme-btn nav-btn",onClick:()=>_(!0),children:"Theme"}),s.jsx("button",{className:"logout-btn",onClick:n,children:"Logout"})]})]}),s.jsxs("div",{className:"th-content",children:[s.jsxs("div",{className:"th-section-header",children:[s.jsx("h2",{children:"Your Classes"}),s.jsx("button",{className:"btn-primary",onClick:()=>h(!0),children:"+ Create New Class"})]}),a?s.jsx("div",{className:"loading-message",children:"Loading classes..."}):i.length===0?s.jsxs("div",{className:"no-classes",children:[s.jsx("div",{className:"no-classes-icon",children:"[ CLASSES ]"}),s.jsx("h3",{children:"No Classes Yet"}),s.jsx("p",{children:"Create your first class to get started. Students will use the class code to join."}),s.jsx("button",{className:"btn-primary",onClick:()=>h(!0),children:"Create Your First Class"})]}):s.jsx("div",{className:"classes-grid",children:i.map(L=>s.jsxs("div",{className:"class-card",children:[s.jsxs("div",{className:"class-card-header",children:[s.jsx("h3",{children:L.name}),s.jsx("button",{className:"delete-btn",onClick:M=>{M.stopPropagation(),S(L.classCode,L.name)},title:"Delete class",children:"×"})]}),s.jsxs("div",{className:"class-code-section",children:[s.jsx("span",{className:"class-code-label",children:"Class Code:"}),s.jsxs("div",{className:"class-code-display",children:[s.jsx("span",{className:"code",children:L.classCode}),s.jsx("button",{className:"copy-btn",onClick:M=>{M.stopPropagation(),R(L.classCode)},title:"Copy code",children:"Copy"})]})]}),s.jsx("p",{className:"class-hint",children:"Share this code with students to join"}),s.jsx("button",{className:"btn-primary open-btn",onClick:()=>t(L.classCode),children:"Open Dashboard"})]},L.classCode))})]}),c&&s.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:s.jsxs("div",{className:"modal-content",onClick:L=>L.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsx("h2",{children:"Create New Class"}),s.jsx("button",{className:"close-btn",onClick:()=>h(!1),children:"×"})]}),s.jsxs("form",{onSubmit:p,children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{htmlFor:"className",children:"Class Name"}),s.jsx("input",{type:"text",id:"className",placeholder:"e.g., Period 3 Cybersecurity",value:m,onChange:L=>E(L.target.value),disabled:j,autoFocus:!0})]}),k&&s.jsx("div",{className:"error-message",children:k}),s.jsxs("div",{className:"modal-actions",children:[s.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>h(!1),disabled:j,children:"Cancel"}),s.jsx("button",{type:"submit",className:"btn-primary",disabled:j,children:j?"Creating...":"Create Class"})]})]})]})}),A&&s.jsx(Ic,{onClose:()=>_(!1)})]})},Ev=({category:e,completedChallenges:t,onSelectChallenge:n})=>{const i={cryptography:"Cryptography",network:"Network Security",password:"Password Security",web:"Web Security",social:"Social Engineering"},r=Es[e]||[];return s.jsxs("div",{children:[s.jsxs("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:[i[e]," Challenges"]}),s.jsxs("div",{className:"learning-objectives",children:[s.jsx("h3",{children:"Learning Objectives"}),s.jsx("ul",{children:(Dy[e]||[]).map((a,l)=>s.jsx("li",{children:a},l))})]}),s.jsx("div",{className:"challenge-list",children:r.map(a=>{const l=t.includes(a.id);return s.jsxs("div",{className:`challenge-item ${l?"completed":""}`,onClick:()=>n(a.id),children:[s.jsxs("div",{className:"challenge-info",children:[s.jsx("h3",{children:a.title}),s.jsxs("p",{style:{color:"#b0b0b0",margin:"0.5rem 0"},children:[a.description.substring(0,120),"..."]}),s.jsxs("div",{className:"challenge-meta",children:[s.jsx("span",{className:`difficulty ${a.difficulty}`,children:a.difficulty}),s.jsxs("span",{className:"points",children:[a.points," points"]})]})]}),s.jsx("div",{className:"challenge-status",children:l?"✅":"🔒"})]},a.id)})})]})},Pv=({challengeId:e,onComplete:t,onBack:n,isCompleted:i,onSubmit:r})=>{const[a,l]=I.useState(""),[c,h]=I.useState(!1),[m,E]=I.useState(null),[j,b]=I.useState(i),[k,C]=I.useState(null),A=Iy(e);if(!A)return s.jsx("div",{children:"Challenge not found"});const _=()=>{var L,M;const p=a.trim().toUpperCase(),R=[(L=A.answer)==null?void 0:L.toUpperCase(),(M=A.flag)==null?void 0:M.toUpperCase()].filter(Boolean).some(x=>p===x||p.includes(x));r&&r({exerciseId:e,answer:a,isCorrect:R,exerciseType:"challenge",exerciseTitle:A.title}),R?(E({type:"success",message:"Correct! Well done!"}),b(!0),t(e,A.points)):E({type:"error",message:"Incorrect. Try again or check the hints!"})},g=p=>{C(k===p?null:p)};return s.jsxs("div",{className:"challenge-detail",children:[s.jsxs("div",{className:"challenge-header",children:[s.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:s.jsxs("div",{children:[s.jsx("h2",{children:A.title}),s.jsxs("div",{className:"challenge-meta",style:{marginTop:"1rem"},children:[s.jsx("span",{className:`difficulty ${A.difficulty}`,children:A.difficulty}),s.jsxs("span",{className:"points",children:[A.points," points"]}),i&&s.jsx("span",{style:{color:"#4caf50",fontWeight:"bold"},children:"✅ Completed"})]})]})}),s.jsxs("div",{className:"learning-objective",children:[s.jsx("strong",{children:"Learning Objective:"})," ",A.learningObjective]}),s.jsx("p",{style:{marginTop:"1rem",lineHeight:"1.6"},children:A.description})]}),A.vocabularyTerms&&A.vocabularyTerms.length>0&&s.jsxs("div",{className:"vocabulary-section",children:[s.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Key Vocabulary"}),s.jsx("div",{className:"vocabulary-tags",children:A.vocabularyTerms.map(p=>{const S=hi[p];return S?s.jsx("div",{className:"vocab-tag",onClick:()=>g(p),style:{borderColor:k===p?"#00ff88":"transparent"},children:S.term},p):null})}),k&&hi[k]&&s.jsxs("div",{style:{background:"rgba(0, 255, 136, 0.1)",padding:"1rem",borderRadius:"5px",marginTop:"1rem",borderLeft:"4px solid #00ff88"},children:[s.jsx("strong",{style:{color:"#00ff88"},children:hi[k].term}),s.jsx("p",{style:{marginTop:"0.5rem"},children:hi[k].definition})]})]}),s.jsxs("div",{children:[s.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Challenge"}),s.jsx("div",{className:"challenge-prompt",children:A.prompt})]}),A.hints&&A.hints.length>0&&s.jsxs("div",{className:"hints-section",children:[s.jsx("button",{className:"hints-toggle",onClick:()=>h(!c),children:c?"🔽 Hide Hints":"💡 Show Hints"}),c&&s.jsx("ul",{className:"hints-list",children:A.hints.map((p,S)=>s.jsxs("li",{className:"hint-item",children:["Hint ",S+1,": ",p]},S))})]}),!i&&s.jsxs("div",{className:"answer-section",children:[s.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Submit Your Answer"}),s.jsx("input",{type:"text",className:"answer-input",placeholder:"Enter your answer or flag here...",value:a,onChange:p=>l(p.target.value),onKeyPress:p=>p.key==="Enter"&&_()}),s.jsx("button",{className:"submit-btn",onClick:_,disabled:!a.trim(),children:"Submit Answer"})]}),m&&s.jsx("div",{className:`feedback ${m.type}`,children:m.message}),j&&A.explanation&&s.jsxs("div",{className:"explanation",children:[s.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Explanation"}),s.jsx("p",{children:A.explanation})]}),s.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Challenges"})]})},Av=()=>{const[e,t]=I.useState("all"),n=["all","Cryptography","Network Security","Password Security","Web Security","Social Engineering","General"],i=Object.values(hi).filter(r=>e==="all"?!0:r.category===e);return s.jsxs("div",{className:"vocabulary-page",children:[s.jsx("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Cybersecurity Vocabulary"}),s.jsx("p",{style:{marginBottom:"2rem",color:"#b0b0b0"},children:"Build your cybersecurity knowledge by learning these key terms and concepts."}),s.jsx("div",{className:"vocab-categories",children:n.map(r=>s.jsx("button",{className:`vocab-category-btn ${e===r?"active":""}`,onClick:()=>t(r),children:r==="all"?"All Terms":r},r))}),s.jsxs("div",{style:{marginTop:"1rem",color:"#b0b0b0"},children:["Showing ",i.length," term",i.length!==1?"s":""]}),s.jsx("div",{className:"vocab-list",children:i.map((r,a)=>s.jsxs("div",{className:"vocab-card",children:[s.jsx("span",{className:"vocab-category",children:r.category}),s.jsx("h3",{children:r.term}),s.jsx("p",{style:{color:"#e0e0e0",marginTop:"0.5rem"},children:r.definition})]},a))}),i.length===0&&s.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"#b0b0b0"},children:"No vocabulary terms found for this category."})]})},Af={TCP:{name:"TCP",color:"#4fc3f7",port:null},UDP:{name:"UDP",color:"#81c784",port:null},HTTP:{name:"HTTP",color:"#64b5f6",port:80},HTTPS:{name:"HTTPS",color:"#7986cb",port:443},SSH:{name:"SSH",color:"#ffb74d",port:22},DNS:{name:"DNS",color:"#ba68c8",port:53},FTP:{name:"FTP",color:"#f06292",port:21},SMTP:{name:"SMTP",color:"#4db6ac",port:25},ICMP:{name:"ICMP",color:"#90a4ae",port:null}},Ot={SYN:"SYN",ACK:"ACK",PSH:"PSH","SYN-ACK":"SYN-ACK"},Xd=[{prefix:"192.168.1.",range:[1,254]},{prefix:"10.0.0.",range:[1,254]},{prefix:"172.16.0.",range:[1,254]}],Kd=["203.0.113.","198.51.100.","185.220.101.","45.33.32.","104.21.35.","8.8.8."],Qd=[80,443,53,22,21,25,3389,8080,3306,5432],wo={normal:["GET /index.html HTTP/1.1","GET /api/users HTTP/1.1","POST /api/login HTTP/1.1","GET /images/logo.png HTTP/1.1","GET /css/styles.css HTTP/1.1","GET /js/app.js HTTP/1.1","GET /api/products HTTP/1.1","POST /api/cart HTTP/1.1","GET /favicon.ico HTTP/1.1","GET /api/status HTTP/1.1"],sqlInjection:["GET /api/users?id=1' OR '1'='1 HTTP/1.1","POST /login?user=admin'-- HTTP/1.1","GET /search?q='; DROP TABLE users;-- HTTP/1.1","GET /api/product?id=1 UNION SELECT * FROM passwords HTTP/1.1","POST /api/auth?username=admin' OR 1=1-- HTTP/1.1","GET /page?id=1; SELECT * FROM users HTTP/1.1","GET /api/data?filter=' OR ''=' HTTP/1.1"]},jo={normal:["A google.com","A microsoft.com","A github.com","AAAA cloudflare.com","MX company.com","A cdn.example.com","A api.service.com","A www.example.org"],tunneling:["TXT aGVsbG8gd29ybGQ.evil.com","TXT ZGF0YWV4ZmlsdHJhdGlvbg.malware.net","TXT c2VjcmV0LWRhdGE.suspicious.io","A cmd-exec-001.c2server.com","TXT YmFzZTY0ZW5jb2RlZA.tunnel.net"]},qd={normal:["SSH-2.0-OpenSSH_8.4 connection established","Key exchange: ECDH SHA256","User authentication successful","Session opened for user admin"]},Jd={tcp:{min:40,max:1500},udp:{min:28,max:65535},http:{min:200,max:8e3},dns:{min:28,max:512},ssh:{min:40,max:2e3},icmp:{min:28,max:1500}},_s=(e={})=>({id:Math.random().toString(36).substr(2,9),timestamp:new Date().toISOString(),sourceIP:"0.0.0.0",destIP:"0.0.0.0",sourcePort:0,destPort:0,protocol:"TCP",length:0,flags:"",info:"",payload:"",isMalicious:!1,attackType:null,flaggedByUser:!1,...e}),_l=()=>{const e=Xd[Math.floor(Math.random()*Xd.length)],t=Math.floor(Math.random()*(e.range[1]-e.range[0]))+e.range[0];return e.prefix+t},Iv=()=>{const e=Kd[Math.floor(Math.random()*Kd.length)],t=Math.floor(Math.random()*254)+1;return e+t},St=(e=!0)=>e?Qd[Math.floor(Math.random()*Qd.length)]:Math.floor(Math.random()*65535)+1,Gi=(e="tcp")=>{const t=Jd[e.toLowerCase()]||Jd.tcp;return Math.floor(Math.random()*(t.max-t.min))+t.min};let Zd=0;const Ls=()=>(Zd++,`pkt-${Date.now()}-${Zd}`),Dv=(e=["HTTP","HTTPS","DNS","TCP"])=>{const t=e[Math.floor(Math.random()*e.length)],n=_l(),i=Math.random()>.3?Iv():_l();let r,a,l,c;switch(t){case"HTTP":r=80,a=St(!1),l=wo.normal[Math.floor(Math.random()*wo.normal.length)],c=Ot.ACK;break;case"HTTPS":r=443,a=St(!1),l="TLS Application Data",c=Ot.ACK;break;case"DNS":r=53,a=St(!1),l=jo.normal[Math.floor(Math.random()*jo.normal.length)],c="";break;case"SSH":r=22,a=St(!1),l=qd.normal[Math.floor(Math.random()*qd.normal.length)],c=Ot.ACK;break;default:r=St(!0),a=St(!1),l="TCP segment",c=[Ot.ACK,Ot.PSH,Ot["SYN-ACK"]][Math.floor(Math.random()*3)]}return _s({id:Ls(),timestamp:new Date().toISOString(),sourceIP:n,destIP:i,sourcePort:a,destPort:r,protocol:t,length:Gi(t.toLowerCase()),flags:c,info:l,payload:"",isMalicious:!1,attackType:null})},Rv=(e,t,n)=>_s({id:Ls(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:n,protocol:"TCP",length:Gi("tcp"),flags:Ot.SYN,info:`SYN scan to port ${n}`,payload:"",isMalicious:!0,attackType:ce.PORT_SCAN}),_v=(e,t,n)=>{const i=[`Authentication failed for ${n}`,`Invalid password for ${n}`,`Failed password for ${n} from ${e}`],r=i[Math.floor(Math.random()*i.length)];return _s({id:Ls(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:22,protocol:"SSH",length:Gi("ssh"),flags:Ot.ACK,info:r,payload:`SSH-2.0-OpenSSH_7.9 [AUTH FAIL: ${n}]`,isMalicious:!0,attackType:ce.BRUTE_FORCE_SSH})},Lv=(e,t)=>{const n=wo.sqlInjection[Math.floor(Math.random()*wo.sqlInjection.length)];return _s({id:Ls(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:80,protocol:"HTTP",length:Gi("http"),flags:Ot.PSH,info:n,payload:n,isMalicious:!0,attackType:ce.SQL_INJECTION})},Ov=(e,t,n=5e3,i=15e3)=>{const r=Math.floor(Math.random()*(i-n))+n;return _s({id:Ls(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:443,protocol:"HTTPS",length:r,flags:Ot.PSH,info:`Large outbound transfer (${Math.round(r/1024)}KB)`,payload:`[Encrypted data: ${r} bytes]`,isMalicious:!0,attackType:ce.DATA_EXFILTRATION})},Mv=(e,t)=>{const n=jo.tunneling[Math.floor(Math.random()*jo.tunneling.length)];return _s({id:Ls(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:St(!1),destPort:53,protocol:"DNS",length:Gi("dns"),flags:"",info:n,payload:n,isMalicious:!0,attackType:ce.DNS_TUNNELING})};class Fv{constructor(t){this.scenario=t,this.isRunning=!1,this.attackStarted=!1,this.attackPortIndex=0,this.attackUsernameIndex=0,this.elapsedTime=0,this.targetIP=_l(),this.blockedIPs=new Set}start(){this.isRunning=!0,this.attackStarted=!1,this.elapsedTime=0}stop(){this.isRunning=!1}blockIP(t){this.blockedIPs.add(t)}unblockIP(t){this.blockedIPs.delete(t)}isIPBlocked(t){return this.blockedIPs.has(t)}generatePackets(t){if(!this.isRunning)return[];this.elapsedTime+=t;const n=[],{backgroundTraffic:i,attackConfig:r}=this.scenario,a=Math.round(i.packetsPerSecond*t);for(let l=0;l<a;l++)n.push(Dv(i.protocols));if(this.elapsedTime>=r.startDelay&&(this.attackStarted=!0),this.attackStarted&&!this.isIPBlocked(r.attackerIP)){const l=Math.round(r.packetsPerSecond*t);for(let c=0;c<l;c++){const h=this.generateAttackPacket();h&&n.push(h)}}return n}generateAttackPacket(){const{attackType:t,attackConfig:n}=this.scenario;switch(t){case ce.PORT_SCAN:{const i=n.targetPorts[this.attackPortIndex%n.targetPorts.length];return this.attackPortIndex++,Rv(n.attackerIP,this.targetIP,i)}case ce.BRUTE_FORCE_SSH:{const i=n.usernames[this.attackUsernameIndex%n.usernames.length];return this.attackUsernameIndex++,_v(n.attackerIP,this.targetIP,i)}case ce.SQL_INJECTION:return Lv(n.attackerIP,this.targetIP);case ce.DATA_EXFILTRATION:return Ov(n.sourceIP,n.attackerIP,n.minPacketSize,n.maxPacketSize);case ce.DNS_TUNNELING:return Mv(n.sourceIP||this.targetIP,"8.8.8.8");default:return null}}getAttackerIP(){return this.scenario.attackConfig.attackerIP}}const Uv=(e,t=3e4)=>{const n=[];for(const[i,r]of Object.entries(Ry))if(r.check){const a=r.check(e,t);a.detected&&n.push({type:i,attackerIP:a.attackerIP,evidence:a.evidence,timestamp:new Date().toISOString(),...ff[i]})}return n},Hv=(e,t)=>{let n=0;const i=[],r=e.flaggedPackets.filter(m=>m.isMalicious),a=e.flaggedPackets.filter(m=>!m.isMalicious);if(r.length>0){const m=r.length*5;n+=m,i.push({action:"Correctly flagged malicious packets",count:r.length,points:m})}if(a.length>0){const m=a.length*2;n-=m,i.push({action:"False positive flags (penalty)",count:a.length,points:-m})}e.identifiedAttackType===t.attackType&&(n+=15,i.push({action:"Correctly identified attack type",count:1,points:15}));const l=t.attackConfig.attackerIP,c=e.blockedIPs.includes(l),h=e.blockedIPs.filter(m=>m!==l);if(c&&(n+=10,i.push({action:"Blocked attacker IP",count:1,points:10})),h.length>0){const m=h.length*5;n-=m,i.push({action:"Incorrectly blocked innocent IP (penalty)",count:h.length,points:-m})}return e.completedUnderTimeLimit&&n>0&&(n+=5,i.push({action:"Completed under time limit",count:1,points:5})),{total:Math.max(0,n),maxPossible:t.points,breakdown:i,passed:n>=t.points*.6}},Bv=(e,t,n)=>{const i=t.successCriteria,r={allMet:!0,details:[]};if(i.mustBlockAttacker){const a=e.blockedIPs.includes(t.attackConfig.attackerIP);r.details.push({criterion:"Block attacker IP",met:a,description:a?"Attacker IP blocked":"Attacker IP not blocked"}),a||(r.allMet=!1)}if(i.mustIdentifyAttackType){const a=e.identifiedAttackType===t.attackType;r.details.push({criterion:"Identify attack type",met:a,description:a?"Attack type correctly identified":"Attack type not identified"}),a||(r.allMet=!1)}if(i.minMaliciousPacketsFlagged){const a=e.flaggedPackets.filter(c=>c.isMalicious).length,l=a>=i.minMaliciousPacketsFlagged;r.details.push({criterion:`Flag at least ${i.minMaliciousPacketsFlagged} malicious packets`,met:l,description:`Flagged ${a} malicious packets`}),l||(r.allMet=!1)}return r},eh=e=>{switch(e){case"critical":return"#f44336";case"high":return"#ff9800";case"medium":return"#ffeb3b";case"low":return"#4caf50";default:return"#90a4ae"}},Ll=e=>{var t;return((t=ff[e])==null?void 0:t.name)||e},zv=({scenarios:e,completedScenarios:t,onSelectScenario:n})=>{const i=Ly(),r=c=>t.includes(c),a=c=>c.toLowerCase(),l=()=>e.filter(c=>t.includes(c.id)).reduce((c,h)=>c+h.points,0);return s.jsxs("div",{className:"scenario-selector",children:[s.jsxs("div",{className:"scenario-stats",children:[s.jsxs("div",{className:"scenario-stat",children:[s.jsx("span",{className:"stat-value",children:t.length}),s.jsx("span",{className:"stat-label",children:"Completed"})]}),s.jsxs("div",{className:"scenario-stat",children:[s.jsx("span",{className:"stat-value",children:i.total}),s.jsx("span",{className:"stat-label",children:"Total Scenarios"})]}),s.jsxs("div",{className:"scenario-stat",children:[s.jsx("span",{className:"stat-value",children:l()}),s.jsx("span",{className:"stat-label",children:"Points Earned"})]}),s.jsxs("div",{className:"scenario-stat",children:[s.jsx("span",{className:"stat-value",children:i.totalPoints}),s.jsx("span",{className:"stat-label",children:"Total Points"})]})]}),s.jsx("div",{className:"scenario-grid",children:e.map(c=>{const h=r(c.id);return s.jsxs("div",{className:`scenario-card ${h?"completed":""}`,onClick:()=>n(c),children:[h&&s.jsxs("div",{className:"completed-badge",children:[s.jsx("span",{className:"checkmark",children:"✓"}),"Completed"]}),s.jsxs("div",{className:"scenario-header",children:[s.jsx("h3",{children:c.name}),s.jsx("span",{className:`difficulty ${a(c.difficulty)}`,children:c.difficulty})]}),s.jsx("p",{className:"scenario-description",children:c.description}),s.jsxs("div",{className:"scenario-meta",children:[s.jsxs("div",{className:"meta-item",children:[s.jsx("span",{className:"meta-icon",children:"🎯"}),s.jsxs("span",{children:[c.points," points"]})]}),s.jsxs("div",{className:"meta-item",children:[s.jsx("span",{className:"meta-icon",children:"⏱"}),s.jsxs("span",{children:[c.duration,"s"]})]})]}),s.jsxs("div",{className:"scenario-objective",children:[s.jsx("strong",{children:"Learning Objective:"}),s.jsx("p",{children:c.learningObjective})]}),s.jsx("button",{className:"btn-start",children:h?"Play Again":"Start Scenario"})]},c.id)})})]})},Wv=({packets:e,selectedPacket:t,flaggedPackets:n,onSelectPacket:i,onFlagPacket:r})=>{const a=I.useRef(null),l=I.useRef(!0);I.useEffect(()=>{a.current&&l.current&&(a.current.scrollTop=a.current.scrollHeight)},[e]);const c=()=>{if(a.current){const{scrollTop:k,scrollHeight:C,clientHeight:A}=a.current;l.current=k+A>=C-50}},h=k=>new Date(k).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:2}),m=k=>{var C;return((C=Af[k])==null?void 0:C.color)||"#90a4ae"},E=k=>n.some(C=>C.id===k.id),j=k=>{i(k)},b=(k,C)=>{k.stopPropagation(),r(C)};return s.jsxs("div",{className:"packet-list-container",children:[s.jsxs("div",{className:"packet-list-header",children:[s.jsx("h3",{children:"Live Traffic"}),s.jsxs("span",{className:"packet-count",children:[e.length," packets"]})]}),s.jsxs("div",{className:"packet-table-header",children:[s.jsx("div",{className:"col-flag"}),s.jsx("div",{className:"col-time",children:"Time"}),s.jsx("div",{className:"col-src",children:"Source"}),s.jsx("div",{className:"col-dst",children:"Destination"}),s.jsx("div",{className:"col-proto",children:"Protocol"}),s.jsx("div",{className:"col-len",children:"Length"}),s.jsx("div",{className:"col-info",children:"Info"})]}),s.jsxs("div",{className:"packet-list",ref:a,onScroll:c,children:[e.map(k=>s.jsxs("div",{className:`packet-row
              ${(t==null?void 0:t.id)===k.id?"selected":""}
              ${k.isMalicious?"malicious":""}
              ${E(k)?"flagged":""}
            `,onClick:()=>j(k),children:[s.jsx("div",{className:"col-flag",children:s.jsx("button",{className:`flag-btn ${E(k)?"flagged":""}`,onClick:C=>b(C,k),title:E(k)?"Unflag packet":"Flag as suspicious",children:E(k)?"⚑":"⚐"})}),s.jsx("div",{className:"col-time",children:h(k.timestamp)}),s.jsxs("div",{className:"col-src",children:[s.jsx("span",{className:"ip",children:k.sourceIP}),s.jsxs("span",{className:"port",children:[":",k.sourcePort]})]}),s.jsxs("div",{className:"col-dst",children:[s.jsx("span",{className:"ip",children:k.destIP}),s.jsxs("span",{className:"port",children:[":",k.destPort]})]}),s.jsx("div",{className:"col-proto",children:s.jsx("span",{className:"protocol-badge",style:{backgroundColor:m(k.protocol)},children:k.protocol})}),s.jsx("div",{className:"col-len",children:k.length}),s.jsx("div",{className:"col-info",title:k.info,children:k.info})]},k.id)),e.length===0&&s.jsx("div",{className:"packet-list-empty",children:"Waiting for network traffic..."})]})]})},$v=({packet:e,onFlagPacket:t})=>{if(!e)return s.jsx("div",{className:"packet-detail",children:s.jsx("div",{className:"packet-detail-empty",children:"Select a packet to view details"})});const n=r=>new Date(r).toLocaleString("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,hour12:!1}),i=r=>{var a;return((a=Af[r])==null?void 0:a.color)||"#90a4ae"};return s.jsxs("div",{className:"packet-detail",children:[s.jsxs("div",{className:"packet-detail-header",children:[s.jsx("h4",{children:"Packet Details"}),s.jsx("div",{className:"packet-detail-actions",children:s.jsx("button",{className:`flag-btn-lg ${e.flaggedByUser?"flagged":""}`,onClick:()=>t(e),children:e.flaggedByUser?"⚑ Flagged":"⚐ Flag as Suspicious"})})]}),s.jsxs("div",{className:"packet-detail-content",children:[s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"General"}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Packet ID"}),s.jsx("span",{className:"detail-value mono",children:e.id})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Timestamp"}),s.jsx("span",{className:"detail-value",children:n(e.timestamp)})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Protocol"}),s.jsx("span",{className:"detail-value protocol-badge",style:{backgroundColor:i(e.protocol)},children:e.protocol})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Length"}),s.jsxs("span",{className:"detail-value",children:[e.length," bytes"]})]})]})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"Source"}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"IP Address"}),s.jsx("span",{className:"detail-value mono",children:e.sourceIP})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Port"}),s.jsx("span",{className:"detail-value",children:e.sourcePort})]})]})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"Destination"}),s.jsxs("div",{className:"detail-grid",children:[s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"IP Address"}),s.jsx("span",{className:"detail-value mono",children:e.destIP})]}),s.jsxs("div",{className:"detail-item",children:[s.jsx("span",{className:"detail-label",children:"Port"}),s.jsx("span",{className:"detail-value",children:e.destPort})]})]})]}),e.flags&&s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"TCP Flags"}),s.jsx("div",{className:"detail-item",children:s.jsx("span",{className:"detail-value mono",children:e.flags})})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"Info"}),s.jsx("div",{className:"detail-item full-width",children:s.jsx("span",{className:"detail-value info-box mono",children:e.info})})]}),e.payload&&s.jsxs("div",{className:"detail-section",children:[s.jsx("h5",{children:"Payload"}),s.jsx("div",{className:"detail-item full-width",children:s.jsx("pre",{className:"payload-box",children:e.payload})})]}),e.isMalicious&&s.jsxs("div",{className:"detail-section malicious-warning",children:[s.jsx("h5",{children:"Warning"}),s.jsxs("div",{className:"warning-content",children:[s.jsx("span",{className:"warning-icon",children:"⚠"}),s.jsxs("div",{children:[s.jsx("strong",{children:"Potentially Malicious Traffic"}),e.attackType&&s.jsxs("p",{children:["Attack Type: ",Ll(e.attackType)]})]})]})]})]})]})},Vv=({alerts:e,onBlockIP:t})=>{const n=i=>new Date(i).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return s.jsxs("div",{className:"alert-panel",children:[s.jsxs("div",{className:"alert-panel-header",children:[s.jsx("h4",{children:"Threat Alerts"}),e.length>0&&s.jsx("span",{className:"alert-count",children:e.length})]}),s.jsx("div",{className:"alert-list",children:e.length===0?s.jsxs("div",{className:"alert-empty",children:[s.jsx("span",{className:"alert-empty-icon",children:"🛡"}),s.jsx("p",{children:"No threats detected yet"}),s.jsx("p",{className:"alert-empty-hint",children:"Monitoring network traffic..."})]}):e.map((i,r)=>s.jsxs("div",{className:"alert-item",style:{borderLeftColor:eh(i.severity)},children:[s.jsxs("div",{className:"alert-header",children:[s.jsx("span",{className:"alert-severity",style:{backgroundColor:eh(i.severity)},children:i.severity.toUpperCase()}),s.jsx("span",{className:"alert-time",children:n(i.timestamp)})]}),s.jsx("div",{className:"alert-title",children:i.name}),s.jsx("div",{className:"alert-description",children:i.description}),s.jsxs("div",{className:"alert-details",children:[s.jsxs("div",{className:"alert-evidence",children:[s.jsx("strong",{children:"Evidence:"})," ",i.evidence]}),s.jsxs("div",{className:"alert-ip",children:[s.jsx("strong",{children:"Source IP:"}),s.jsx("span",{className:"mono",children:i.attackerIP})]})]}),s.jsxs("div",{className:"alert-indicators",children:[s.jsx("strong",{children:"Indicators:"}),s.jsx("ul",{children:i.indicators.slice(0,2).map((a,l)=>s.jsx("li",{children:a},l))})]}),s.jsx("div",{className:"alert-actions",children:s.jsxs("button",{className:"btn-block",onClick:()=>t(i.attackerIP),children:["Block ",i.attackerIP]})})]},`${i.type}-${i.attackerIP}-${r}`))})]})},Yv=({blockedIPs:e,attackTypes:t,identifiedAttackType:n,onBlockIP:i,onUnblockIP:r,onIdentifyAttack:a,hints:l})=>{const[c,h]=I.useState(""),[m,E]=I.useState(!1),j=b=>{b.preventDefault();const k=c.trim();k&&/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(k)&&(i(k),h(""))};return s.jsxs("div",{className:"action-panel",children:[s.jsxs("div",{className:"action-section",children:[s.jsx("h4",{children:"Identify Attack Type"}),s.jsx("p",{className:"action-hint",children:"What type of attack is occurring?"}),s.jsx("div",{className:"attack-type-grid",children:t.map(b=>s.jsx("button",{className:`attack-type-btn ${n===b?"selected":""}`,onClick:()=>a(b),children:Ll(b)},b))}),n&&s.jsxs("div",{className:"selected-attack",children:["Selected: ",s.jsx("strong",{children:Ll(n)})]})]}),s.jsxs("div",{className:"action-section",children:[s.jsx("h4",{children:"Firewall Rules"}),s.jsxs("form",{onSubmit:j,className:"block-ip-form",children:[s.jsx("input",{type:"text",placeholder:"Enter IP to block (e.g., 192.168.1.100)",value:c,onChange:b=>h(b.target.value),className:"ip-input"}),s.jsx("button",{type:"submit",className:"btn-block-submit",children:"Block IP"})]}),s.jsxs("div",{className:"blocked-ips",children:[s.jsxs("h5",{children:["Blocked IPs (",e.length,")"]}),e.length===0?s.jsx("p",{className:"no-blocked",children:"No IPs blocked yet"}):s.jsx("ul",{className:"blocked-ip-list",children:e.map(b=>s.jsxs("li",{className:"blocked-ip-item",children:[s.jsx("span",{className:"mono",children:b}),s.jsx("button",{className:"btn-unblock",onClick:()=>r(b),title:"Unblock this IP",children:"×"})]},b))})]})]}),s.jsxs("div",{className:"action-section hints-section",children:[s.jsxs("button",{className:"hints-toggle",onClick:()=>E(!m),children:[m?"Hide Hints":"Show Hints"," 💡"]}),m&&l&&l.length>0&&s.jsx("div",{className:"hints-list",children:l.map((b,k)=>s.jsxs("div",{className:"hint-item",children:[s.jsx("span",{className:"hint-number",children:k+1}),s.jsx("span",{className:"hint-text",children:b})]},k))})]})]})},Gv=({completedScenarios:e,onCompleteScenario:t,onBack:n})=>{const[i,r]=I.useState(null),[a,l]=I.useState(!1),[c,h]=I.useState(0),[m,E]=I.useState(!1),[j,b]=I.useState([]),[k,C]=I.useState(null),[A,_]=I.useState({total:0,perSecond:0,bytes:0}),[g,p]=I.useState(!1),[S,R]=I.useState(.5),[L,M]=I.useState([]),[x,f]=I.useState([]),[w,T]=I.useState(null),[P,N]=I.useState([]),[v,Q]=I.useState(null),V=I.useRef(null),te=I.useRef(null),oe=I.useRef(Date.now()),U=I.useCallback(B=>{r(B),h(B.duration),b([]),M([]),f([]),T(null),N([]),C(null),Q(null),E(!1),V.current=new Fv(B),V.current.start(),l(!0),oe.current=Date.now()},[]),G=I.useCallback(()=>{l(!1),V.current&&V.current.stop(),te.current&&clearInterval(te.current)},[]),X=I.useCallback(()=>{if(G(),E(!0),!i)return;const B={flaggedPackets:L,blockedIPs:x,identifiedAttackType:w,completedUnderTimeLimit:c>0},Y=Hv(B,i),ie=Bv(B,i);Q({score:Y,criteria:ie,passed:Y.passed&&ie.allMet}),Y.passed&&ie.allMet&&t(i.id,Y.total)},[i,L,x,w,c,j,G,t]);I.useEffect(()=>{if(!(!a||!V.current))return te.current=setInterval(()=>{if(g){oe.current=Date.now();return}const B=Date.now(),Y=(B-oe.current)/1e3;oe.current=B;const ie=Y*S,ve=V.current.generatePackets(ie);b(ke=>[...ke,...ve].slice(-200)),h(ke=>{const be=Math.max(0,ke-Y);return be<=0&&X(),be}),_(ke=>({total:ke.total+ve.length,perSecond:Math.round(ve.length/(Y||.001)),bytes:ke.bytes+ve.reduce((be,ut)=>be+ut.length,0)}))},400),()=>{te.current&&clearInterval(te.current)}},[a,g,S,X]),I.useEffect(()=>{if(!a||j.length<5)return;const B=Uv(j,3e4);B.length>0&&N(Y=>{const ie=B.filter(ve=>!Y.some(ke=>ke.type===ve.type&&ke.attackerIP===ve.attackerIP));return[...Y,...ie]})},[j,a]);const J=I.useCallback(B=>{M(Y=>Y.some(ve=>ve.id===B.id)?Y.filter(ve=>ve.id!==B.id):[...Y,B]),b(Y=>Y.map(ie=>ie.id===B.id?{...ie,flaggedByUser:!ie.flaggedByUser}:ie))},[]),Z=I.useCallback(B=>{V.current&&V.current.blockIP(B),f(Y=>Y.includes(B)?Y:[...Y,B])},[]),H=I.useCallback(B=>{V.current&&V.current.unblockIP(B),f(Y=>Y.filter(ie=>ie!==B))},[]),K=I.useCallback(B=>{T(B)},[]),q=I.useCallback(()=>{G(),r(null),b([]),Q(null),E(!1)},[G]);return i?m&&v?s.jsxs("div",{className:"network-monitor",children:[s.jsxs("div",{className:"nm-header",children:[s.jsx("h2",{children:"Scenario Complete"}),s.jsx("h3",{children:i.name})]}),s.jsxs("div",{className:"nm-results",children:[s.jsxs("div",{className:`results-summary ${v.passed?"passed":"failed"}`,children:[s.jsx("div",{className:"result-icon",children:v.passed?"✓":"✗"}),s.jsx("h3",{children:v.passed?"Mission Accomplished!":"Mission Failed"}),s.jsxs("div",{className:"result-score",children:["Score: ",v.score.total," / ",v.score.maxPossible," points"]})]}),s.jsxs("div",{className:"results-breakdown",children:[s.jsx("h4",{children:"Score Breakdown"}),v.score.breakdown.map((B,Y)=>s.jsxs("div",{className:`breakdown-item ${B.points>=0?"positive":"negative"}`,children:[s.jsx("span",{children:B.action}),s.jsxs("span",{className:"breakdown-count",children:["x",B.count]}),s.jsxs("span",{className:"breakdown-points",children:[B.points>=0?"+":"",B.points]})]},Y))]}),s.jsxs("div",{className:"results-criteria",children:[s.jsx("h4",{children:"Success Criteria"}),v.criteria.details.map((B,Y)=>s.jsxs("div",{className:`criteria-item ${B.met?"met":"not-met"}`,children:[s.jsx("span",{className:"criteria-icon",children:B.met?"✓":"✗"}),s.jsx("span",{children:B.criterion}),s.jsx("span",{className:"criteria-desc",children:B.description})]},Y))]}),s.jsxs("div",{className:"results-actions",children:[s.jsx("button",{className:"btn-primary",onClick:()=>U(i),children:"Try Again"}),s.jsx("button",{className:"btn-secondary",onClick:q,children:"Choose Another Scenario"})]})]})]}):s.jsxs("div",{className:"network-monitor",children:[s.jsxs("div",{className:"nm-header",children:[s.jsx("button",{className:"back-btn",onClick:q,children:"← Back"}),s.jsxs("div",{className:"nm-title-section",children:[s.jsx("h2",{children:i.name}),s.jsx("span",{className:`difficulty ${i.difficulty}`,children:i.difficulty})]}),s.jsxs("div",{className:"nm-stats",children:[s.jsxs("div",{className:"stat",children:[s.jsx("span",{className:"stat-value",children:Math.ceil(c)}),s.jsx("span",{className:"stat-label",children:"Time Left"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("span",{className:"stat-value",children:A.total}),s.jsx("span",{className:"stat-label",children:"Packets"})]}),s.jsxs("div",{className:"stat",children:[s.jsxs("span",{className:"stat-value",children:[A.perSecond,"/s"]}),s.jsx("span",{className:"stat-label",children:"Rate"})]}),s.jsxs("div",{className:"stat",children:[s.jsxs("span",{className:"stat-value",children:[Math.round(A.bytes/1024),"KB"]}),s.jsx("span",{className:"stat-label",children:"Data"})]})]}),s.jsxs("div",{className:"nm-controls",children:[s.jsx("button",{className:`btn-pause ${g?"paused":""}`,onClick:()=>p(!g),title:g?"Resume packet capture":"Pause to analyze packets",children:g?"▶ Resume":"⏸ Pause"}),s.jsxs("div",{className:"speed-control",children:[s.jsx("label",{children:"Speed:"}),s.jsxs("select",{value:S,onChange:B=>R(parseFloat(B.target.value)),title:"Adjust packet speed for easier analysis",children:[s.jsx("option",{value:"0.25",children:"0.25x (Very Slow)"}),s.jsx("option",{value:"0.5",children:"0.5x (Slow - Recommended)"}),s.jsx("option",{value:"1",children:"1x (Normal)"}),s.jsx("option",{value:"2",children:"2x (Fast)"})]})]})]}),s.jsx("button",{className:"btn-complete",onClick:X,children:"Complete Mission"})]}),s.jsxs("div",{className:"nm-objective",children:[s.jsx("strong",{children:"Objective:"})," ",i.description]}),s.jsxs("div",{className:"nm-main-content",children:[s.jsx("div",{className:"nm-left-panel",children:s.jsx(Wv,{packets:j,selectedPacket:k,flaggedPackets:L,onSelectPacket:C,onFlagPacket:J})}),s.jsxs("div",{className:"nm-right-panel",children:[s.jsx(Vv,{alerts:P,onBlockIP:Z}),s.jsx(Yv,{blockedIPs:x,attackTypes:Object.values(ce),identifiedAttackType:w,onBlockIP:Z,onUnblockIP:H,onIdentifyAttack:K,hints:i.hints})]})]}),s.jsx("div",{className:"nm-bottom-panel",children:s.jsx($v,{packet:k,onFlagPacket:J})})]}):s.jsxs("div",{className:"network-monitor",children:[s.jsxs("div",{className:"nm-header",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Dashboard"}),s.jsx("h2",{children:"Network Monitor"}),s.jsx("p",{className:"nm-subtitle",children:"Learn to detect and respond to cyber attacks in real-time"})]}),s.jsx(zv,{scenarios:Nt,completedScenarios:e,onSelectScenario:U})]})},Xv=()=>{const[e,t]=I.useState(""),[n,i]=I.useState(3),[r,a]=I.useState("encrypt"),[l,c]=I.useState(""),h=(j,b,k=!0)=>{const C=k?b:26-b;return j.toUpperCase().split("").map(A=>{if(A>="A"&&A<="Z"){const _=(A.charCodeAt(0)-65+C)%26+65;return String.fromCharCode(_)}return A}).join("")},m=()=>{const j=h(e,parseInt(n),r==="encrypt");c(j)},E=()=>{let j=[];for(let b=1;b<=25;b++)j.push(`Shift ${b}: ${h(e,b,!1)}`);c(j.join(`
`))};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Caesar Cipher Tool"}),s.jsx("div",{className:"tool-description",children:"The Caesar cipher shifts each letter by a fixed number of positions in the alphabet."}),s.jsxs("div",{className:"tool-controls",children:[s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Mode:"}),s.jsxs("select",{value:r,onChange:j=>a(j.target.value),children:[s.jsx("option",{value:"encrypt",children:"Encrypt"}),s.jsx("option",{value:"decrypt",children:"Decrypt"})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Shift (1-25):"}),s.jsx("input",{type:"number",min:"1",max:"25",value:n,onChange:j=>i(j.target.value)})]})]}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Input Text:"}),s.jsx("textarea",{value:e,onChange:j=>t(j.target.value),placeholder:"Enter text to encrypt or decrypt...",rows:3})]}),s.jsxs("div",{className:"tool-buttons",children:[s.jsx("button",{className:"tool-btn primary",onClick:m,children:r==="encrypt"?"Encrypt":"Decrypt"}),s.jsx("button",{className:"tool-btn secondary",onClick:E,children:"Brute Force (Try All Shifts)"})]}),l&&s.jsxs("div",{className:"tool-output",children:[s.jsx("label",{children:"Output:"}),s.jsx("pre",{children:l})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"Alphabet Reference"}),s.jsxs("div",{className:"alphabet-row",children:[s.jsx("div",{children:"Plain:"}),s.jsx("div",{className:"alphabet",children:"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"})]}),s.jsxs("div",{className:"alphabet-row",children:[s.jsxs("div",{children:["Shift ",n,":"]}),s.jsx("div",{className:"alphabet",children:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(j=>h(j,parseInt(n),!0)).join(" ")})]})]})]})},Kv=()=>{const[e,t]=I.useState(""),[n,i]=I.useState({}),r=async h=>{if(window.crypto&&window.crypto.subtle){const E=new TextEncoder().encode(h);try{const j=await a(h),b=await crypto.subtle.digest("SHA-1",E),k=await crypto.subtle.digest("SHA-256",E);return{md5:j,sha1:Array.from(new Uint8Array(b)).map(C=>C.toString(16).padStart(2,"0")).join(""),sha256:Array.from(new Uint8Array(k)).map(C=>C.toString(16).padStart(2,"0")).join("")}}catch{return l(h)}}return l(h)},a=h=>{let m=0;for(let j=0;j<h.length;j++){const b=h.charCodeAt(j);m=(m<<5)-m+b,m=m&m}const E=Math.abs(m).toString(16).padStart(8,"0");return(E+E+E+E).substring(0,32)},l=h=>{const m=a(h);return{md5:m,sha1:(m+m.substring(0,8)).substring(0,40),sha256:(m+m).substring(0,64)}},c=async()=>{if(e){const h=await r(e);i(h)}};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Hash Generator"}),s.jsx("div",{className:"tool-description",children:'Hash functions create a unique "fingerprint" of data. They are one-way functions - you cannot reverse a hash to get the original input.'}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Input Text:"}),s.jsx("textarea",{value:e,onChange:h=>t(h.target.value),placeholder:"Enter text to hash...",rows:2})]}),s.jsx("button",{className:"tool-btn primary",onClick:c,children:"Generate Hashes"}),Object.keys(n).length>0&&s.jsxs("div",{className:"tool-output",children:[s.jsxs("div",{className:"hash-result",children:[s.jsx("label",{children:"MD5 (32 chars - INSECURE):"}),s.jsx("code",{className:"hash-value",children:n.md5})]}),s.jsxs("div",{className:"hash-result",children:[s.jsx("label",{children:"SHA-1 (40 chars - INSECURE):"}),s.jsx("code",{className:"hash-value",children:n.sha1})]}),s.jsxs("div",{className:"hash-result",children:[s.jsx("label",{children:"SHA-256 (64 chars - SECURE):"}),s.jsx("code",{className:"hash-value",children:n.sha256})]})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"Hash Properties"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Deterministic:"})," Same input = same hash"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"One-way:"})," Cannot reverse to get input"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Avalanche effect:"})," Small change = completely different hash"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Fixed size:"})," Any input produces same length output"]})]})]})]})},Qv=()=>{const[e,t]=I.useState(""),[n,i]=I.useState(""),[r,a]=I.useState("encode"),l=()=>{try{i(r==="encode"?btoa(e):atob(e))}catch{i("Error: Invalid input for "+r)}};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Base64 Encoder/Decoder"}),s.jsx("div",{className:"tool-description",children:"Base64 is an encoding scheme (NOT encryption!) that converts binary data to ASCII text. It's commonly used for transmitting data."}),s.jsx("div",{className:"tool-controls",children:s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Mode:"}),s.jsxs("select",{value:r,onChange:c=>a(c.target.value),children:[s.jsx("option",{value:"encode",children:"Encode"}),s.jsx("option",{value:"decode",children:"Decode"})]})]})}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Input:"}),s.jsx("textarea",{value:e,onChange:c=>t(c.target.value),placeholder:r==="encode"?"Enter text to encode...":"Enter Base64 to decode...",rows:3})]}),s.jsx("button",{className:"tool-btn primary",onClick:l,children:r==="encode"?"Encode to Base64":"Decode from Base64"}),n&&s.jsxs("div",{className:"tool-output",children:[s.jsx("label",{children:"Output:"}),s.jsx("pre",{children:n})]}),s.jsx("div",{className:"tool-warning",children:'Base64 is NOT encryption! Anyone can decode Base64. Never use it to "secure" sensitive data.'})]})},qv=()=>{const[e,t]=I.useState(""),[n,i]=I.useState(""),[r,a]=I.useState("textToHex"),l=m=>m.split("").map(E=>E.charCodeAt(0).toString(16).padStart(2,"0")).join(""),c=m=>{const E=m.replace(/\s/g,"");let j="";for(let b=0;b<E.length;b+=2)j+=String.fromCharCode(parseInt(E.substr(b,2),16));return j},h=()=>{try{i(r==="textToHex"?l(e):c(e))}catch{i("Error: Invalid input")}};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Hex Converter"}),s.jsx("div",{className:"tool-description",children:"Hexadecimal is base-16 (0-9, A-F). Each pair of hex digits represents one byte (ASCII character)."}),s.jsx("div",{className:"tool-controls",children:s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Mode:"}),s.jsxs("select",{value:r,onChange:m=>a(m.target.value),children:[s.jsx("option",{value:"textToHex",children:"Text → Hex"}),s.jsx("option",{value:"hexToText",children:"Hex → Text"})]})]})}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Input:"}),s.jsx("textarea",{value:e,onChange:m=>t(m.target.value),placeholder:r==="textToHex"?"Enter text...":"Enter hex (e.g., 48454c4c4f)...",rows:2})]}),s.jsx("button",{className:"tool-btn primary",onClick:h,children:"Convert"}),n&&s.jsxs("div",{className:"tool-output",children:[s.jsx("label",{children:"Output:"}),s.jsx("pre",{children:n})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"ASCII Reference"}),s.jsxs("div",{className:"ascii-table",children:[s.jsx("span",{children:"A=41"})," ",s.jsx("span",{children:"B=42"})," ",s.jsx("span",{children:"C=43"})," ",s.jsx("span",{children:"0=30"})," ",s.jsx("span",{children:"1=31"})]})]})]})},Jv=()=>{const[e,t]=I.useState("192.168.1.100"),[n,i]=I.useState(!1),[r,a]=I.useState([]),l=[{port:21,service:"FTP",status:"closed"},{port:22,service:"SSH",status:"open"},{port:23,service:"Telnet",status:"closed"},{port:25,service:"SMTP",status:"closed"},{port:53,service:"DNS",status:"closed"},{port:80,service:"HTTP",status:"open"},{port:443,service:"HTTPS",status:"open"},{port:445,service:"SMB",status:"closed"},{port:3306,service:"MySQL",status:"closed"},{port:3389,service:"RDP",status:"filtered"}],c=()=>{i(!0),a([]);let h=0;const m=setInterval(()=>{if(h<l.length){const E={...l[h]};Math.random()>.7&&E.status==="closed"&&(E.status="open"),a(j=>[...j,E]),h++}else clearInterval(m),i(!1)},300)};return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Port Scanner Simulator"}),s.jsxs("div",{className:"tool-description",children:["Port scanning discovers which ports are open on a target system, revealing running services.",s.jsx("strong",{children:" Note: Only scan systems you own or have permission to test!"})]}),s.jsxs("div",{className:"tool-input",children:[s.jsx("label",{children:"Target IP (Simulated):"}),s.jsx("input",{type:"text",value:e,onChange:h=>t(h.target.value),placeholder:"192.168.1.100"})]}),s.jsx("button",{className:"tool-btn primary",onClick:c,disabled:n,children:n?"Scanning...":"Start Scan"}),r.length>0&&s.jsxs("div",{className:"tool-output",children:[s.jsxs("label",{children:["Scan Results for ",e,":"]}),s.jsxs("table",{className:"scan-results",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Port"}),s.jsx("th",{children:"Service"}),s.jsx("th",{children:"Status"})]})}),s.jsx("tbody",{children:r.map((h,m)=>s.jsxs("tr",{className:`port-${h.status}`,children:[s.jsx("td",{children:h.port}),s.jsx("td",{children:h.service}),s.jsx("td",{className:`status-${h.status}`,children:h.status.toUpperCase()})]},m))})]})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"Port Status Meanings"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{className:"status-open",children:"OPEN:"})," Service is accepting connections"]}),s.jsxs("li",{children:[s.jsx("strong",{className:"status-closed",children:"CLOSED:"})," Port responds but no service"]}),s.jsxs("li",{children:[s.jsx("strong",{className:"status-filtered",children:"FILTERED:"})," Firewall blocking probe"]})]})]})]})},Zv=()=>{const[e,t]=I.useState(""),[n,i]=I.useState(""),[r,a]=I.useState(""),[l,c]=I.useState(""),[h,m]=I.useState(""),[E,j]=I.useState(""),b=()=>{let C=[];e&&C.push(`site:${e}`),n&&C.push(`filetype:${n}`),r&&C.push(`inurl:${r}`),l&&C.push(`intitle:${l}`),h&&C.push(`"${h}"`),j(C.join(" "))},k=[{name:"Find Login Pages",dork:"site:example.com inurl:login OR inurl:signin"},{name:"Find PDF Documents",dork:"site:example.com filetype:pdf"},{name:"Find Exposed Configs",dork:"filetype:env OR filetype:config"},{name:"Find Directory Listings",dork:'intitle:"index of"'}];return s.jsxs("div",{className:"tool-container",children:[s.jsx("h3",{children:"Google Dork Builder"}),s.jsx("div",{className:"tool-description",children:"Build advanced Google search queries to find specific information. Use responsibly for authorized security testing only."}),s.jsxs("div",{className:"dork-builder",children:[s.jsxs("div",{className:"dork-inputs",children:[s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"site: (domain)"}),s.jsx("input",{type:"text",value:e,onChange:C=>t(C.target.value),placeholder:"example.com"})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"filetype:"}),s.jsxs("select",{value:n,onChange:C=>i(C.target.value),children:[s.jsx("option",{value:"",children:"None"}),s.jsx("option",{value:"pdf",children:"PDF"}),s.jsx("option",{value:"doc",children:"DOC"}),s.jsx("option",{value:"xls",children:"XLS"}),s.jsx("option",{value:"txt",children:"TXT"}),s.jsx("option",{value:"sql",children:"SQL"})]})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"inurl:"}),s.jsx("input",{type:"text",value:r,onChange:C=>a(C.target.value),placeholder:"admin"})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"intitle:"}),s.jsx("input",{type:"text",value:l,onChange:C=>c(C.target.value),placeholder:"login"})]}),s.jsxs("div",{className:"control-group",children:[s.jsx("label",{children:"Keyword:"}),s.jsx("input",{type:"text",value:h,onChange:C=>m(C.target.value),placeholder:"confidential"})]})]}),s.jsx("button",{className:"tool-btn primary",onClick:b,children:"Build Dork"}),E&&s.jsxs("div",{className:"tool-output",children:[s.jsx("label",{children:"Generated Dork:"}),s.jsx("code",{className:"dork-result",children:E})]})]}),s.jsxs("div",{className:"tool-reference",children:[s.jsx("h4",{children:"Preset Examples"}),s.jsx("div",{className:"preset-dorks",children:k.map((C,A)=>s.jsxs("div",{className:"preset-item",children:[s.jsxs("strong",{children:[C.name,":"]}),s.jsx("code",{children:C.dork})]},A))})]}),s.jsx("div",{className:"tool-warning",children:"Only use Google dorking for authorized security testing or educational purposes."})]})},ex=({onBack:e})=>{var a;const[t,n]=I.useState(null),i=[{id:"caesar",name:"Caesar Cipher",icon:"🔐",category:"Cryptography",component:Xv},{id:"hash",name:"Hash Generator",icon:"#️⃣",category:"Cryptography",component:Kv},{id:"base64",name:"Base64 Encoder",icon:"📝",category:"Encoding",component:Qv},{id:"hex",name:"Hex Converter",icon:"🔢",category:"Encoding",component:qv},{id:"portscan",name:"Port Scanner",icon:"🔍",category:"Network",component:Jv},{id:"dork",name:"Google Dork Builder",icon:"🔎",category:"Reconnaissance",component:Zv}],r=t?(a=i.find(l=>l.id===t))==null?void 0:a.component:null;return s.jsxs("div",{className:"interactive-tools",children:[s.jsxs("div",{className:"tools-header",children:[s.jsx("h2",{children:"Interactive Security Tools"}),s.jsx("p",{children:"Hands-on tools to practice cybersecurity concepts"})]}),t?s.jsxs("div",{className:"tool-view",children:[s.jsx("button",{className:"back-btn",onClick:()=>n(null),children:"← Back to Tools"}),r&&s.jsx(r,{})]}):s.jsx("div",{className:"tools-grid",children:i.map(l=>s.jsxs("div",{className:"tool-card",onClick:()=>n(l.id),children:[s.jsx("div",{className:"tool-icon",children:l.icon}),s.jsx("h3",{children:l.name}),s.jsx("span",{className:"tool-category",children:l.category})]},l.id))}),s.jsx("button",{className:"back-btn",onClick:e,style:{marginTop:"2rem"},children:"← Back to Dashboard"})]})},tx=({onLogin:e,onTeacherLogin:t})=>{const[n,i]=I.useState(""),[r,a]=I.useState(""),[l,c]=I.useState(""),[h,m]=I.useState(!1);return s.jsx("div",{className:"login-container",children:s.jsxs("div",{className:"login-card",children:[s.jsxs("div",{className:"login-header",children:[s.jsx("h1",{children:"CyberEd Range"}),s.jsx("p",{children:"Setup Required"})]}),s.jsxs("div",{className:"setup-warning",children:[s.jsx("h3",{children:"Firebase Configuration Needed"}),s.jsx("p",{children:"To enable multi-student mode, please configure Firebase:"}),s.jsxs("ol",{children:[s.jsxs("li",{children:["Create a Firebase project at ",s.jsx("a",{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer",children:"console.firebase.google.com"})]}),s.jsx("li",{children:"Enable Firestore Database"}),s.jsxs("li",{children:["Copy your config to ",s.jsx("code",{children:"src/config/firebase.js"})]}),s.jsxs("li",{children:["Or create a ",s.jsx("code",{children:".env"})," file with VITE_FIREBASE_* variables"]})]}),s.jsx("button",{className:"btn-primary",onClick:()=>e({id:"demo",name:"Demo User",classCode:"DEMO"}),children:"Continue in Demo Mode"})]})]})})},nx=({classCode:e,assignments:t,onAssignmentCreated:n})=>{const[i,r]=I.useState(null),[a,l]=I.useState(null),c=j=>t.some(b=>b.type===j),h=async j=>{if(c(j)){alert(`${me[j].name} is already assigned to this class.`);return}r(j);try{const b=me[j].units.map(k=>k.id);await vv(e,{type:j,items:b,title:me[j].name}),n&&n()}catch(b){console.error("Error creating assignment:",b),alert("Failed to create assignment. Please try again.")}finally{r(null)}},m=async j=>{if(confirm("Are you sure you want to remove this module assignment?")){l(j);try{await xv(e,j)}catch(b){console.error("Error deleting assignment:",b),alert("Failed to delete assignment.")}finally{l(null)}}},E=j=>j?new Date(j).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Unknown";return s.jsxs("div",{className:"assignment-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("h3",{children:"Module Assignments"}),s.jsx("p",{className:"am-subtitle",children:"Assign entire modules to give students access to all content within."})]}),s.jsxs("div",{className:"am-modules",children:[s.jsxs("div",{className:`am-module-card cyber ${c("cyber-range")?"assigned":""}`,children:[s.jsx("div",{className:"am-module-icon",children:me["cyber-range"].icon}),s.jsxs("div",{className:"am-module-info",children:[s.jsx("h4",{children:me["cyber-range"].name}),s.jsx("p",{children:me["cyber-range"].description}),s.jsxs("span",{className:"am-module-count",children:[me["cyber-range"].units.length," categories"]})]}),s.jsx("div",{className:"am-module-action",children:c("cyber-range")?s.jsxs("div",{className:"am-assigned-info",children:[s.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),s.jsx("button",{className:"am-remove-btn",onClick:()=>{const j=t.find(b=>b.type==="cyber-range");j&&m(j.id)},disabled:a,children:"Remove"})]}):s.jsx("button",{className:"am-btn cyber",onClick:()=>h("cyber-range"),disabled:i==="cyber-range",children:i==="cyber-range"?"Assigning...":"Assign Module"})})]}),s.jsxs("div",{className:`am-module-card programming ${c("arrays-loops")?"assigned":""}`,children:[s.jsx("div",{className:"am-module-icon",children:me["arrays-loops"].icon}),s.jsxs("div",{className:"am-module-info",children:[s.jsx("h4",{children:me["arrays-loops"].name}),s.jsx("p",{children:me["arrays-loops"].description}),s.jsxs("span",{className:"am-module-count",children:[me["arrays-loops"].units.length," weeks"]})]}),s.jsx("div",{className:"am-module-action",children:c("arrays-loops")?s.jsxs("div",{className:"am-assigned-info",children:[s.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),s.jsx("button",{className:"am-remove-btn",onClick:()=>{const j=t.find(b=>b.type==="arrays-loops");j&&m(j.id)},disabled:a,children:"Remove"})]}):s.jsx("button",{className:"am-btn programming",onClick:()=>h("arrays-loops"),disabled:i==="arrays-loops",children:i==="arrays-loops"?"Assigning...":"Assign Module"})})]}),s.jsxs("div",{className:`am-module-card apcsp ${c("ap-csp")?"assigned":""}`,children:[s.jsx("div",{className:"am-module-icon",children:me["ap-csp"].icon}),s.jsxs("div",{className:"am-module-info",children:[s.jsx("h4",{children:me["ap-csp"].name}),s.jsx("p",{children:me["ap-csp"].description}),s.jsxs("span",{className:"am-module-count",children:[me["ap-csp"].units.length," modules"]})]}),s.jsx("div",{className:"am-module-action",children:c("ap-csp")?s.jsxs("div",{className:"am-assigned-info",children:[s.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),s.jsx("button",{className:"am-remove-btn",onClick:()=>{const j=t.find(b=>b.type==="ap-csp");j&&m(j.id)},disabled:a,children:"Remove"})]}):s.jsx("button",{className:"am-btn apcsp",onClick:()=>h("ap-csp"),disabled:i==="ap-csp",children:i==="ap-csp"?"Assigning...":"Assign Module"})})]})]}),t.length>0&&s.jsxs("div",{className:"am-current",children:[s.jsx("h4",{children:"Current Assignments"}),t.map(j=>{var b,k,C;return s.jsxs("div",{className:"am-current-item",children:[s.jsxs("span",{className:"am-type-badge",style:{backgroundColor:((b=me[j.type])==null?void 0:b.color)||"#888"},children:[(k=me[j.type])==null?void 0:k.icon," ",(C=me[j.type])==null?void 0:C.name]}),s.jsxs("span",{className:"am-date",children:["Assigned: ",E(j.assignedAt)]})]},j.id)})]})]})},sx=({classCode:e})=>{const[t,n]=I.useState(null),[i,r]=I.useState(null),[a,l]=I.useState(null),[c,h]=I.useState("list"),m=(C,A)=>{if(C==="cyber-range")return Es[A]||[];if(C==="arrays-loops"){const _=Ac[A];if(!_||!_.days)return[];const g=[];return _.days.forEach(p=>{p.exercises&&p.exercises.forEach(S=>{g.push({...S,dayTitle:p.title,dayNumber:p.day})})}),g}else if(C==="ap-csp")return[];return[]},E=C=>{n(C),r(null),l(null),h("list")},j=C=>{r(C),l(null),h("list")},b=()=>{a?l(null):i?(r(null),h("list")):t&&n(null)},k=()=>{window.print()};if(!t)return s.jsxs("div",{className:"activity-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("h3",{children:"Activity Manager & Answer Keys"}),s.jsx("p",{className:"am-subtitle",children:"View activities, exemplar responses, and answer keys for each module"})]}),s.jsx("div",{className:"am-modules",children:Object.entries(me).map(([C,A])=>s.jsxs("div",{className:`am-module-card ${C}`,onClick:()=>E(C),style:{cursor:"pointer"},children:[s.jsx("div",{className:"am-module-icon",children:A.icon}),s.jsxs("div",{className:"am-module-info",children:[s.jsx("h4",{children:A.name}),s.jsx("p",{children:A.description}),s.jsxs("span",{className:"am-module-count",children:[A.units.length," ",C==="arrays-loops"?"weeks":"units"]})]}),s.jsx("div",{className:"am-module-arrow",children:"→"})]},C))})]});if(t&&!i){const C=me[t];return s.jsxs("div",{className:"activity-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("button",{className:"am-back-btn",onClick:b,children:"← Back"}),s.jsxs("h3",{children:[C.icon," ",C.name]}),s.jsx("p",{className:"am-subtitle",children:"Select a unit to view activities and answer keys"})]}),s.jsx("div",{className:"am-units-list",children:C.units.map(A=>{const _=m(t,A.id);return s.jsxs("div",{className:"am-unit-card",onClick:()=>j(A.id),style:{cursor:"pointer"},children:[s.jsxs("div",{className:"am-unit-info",children:[s.jsx("h4",{children:A.name}),s.jsx("p",{children:A.description})]}),s.jsxs("div",{className:"am-unit-stats",children:[s.jsxs("span",{className:"am-activity-count",children:[_.length," activities"]}),s.jsx("span",{className:"am-arrow",children:"→"})]})]},A.id)})})]})}if(t&&i&&!a){const A=me[t].units.find(g=>g.id===i),_=m(t,i);return s.jsxs("div",{className:"activity-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("button",{className:"am-back-btn",onClick:b,children:"← Back"}),s.jsx("h3",{children:(A==null?void 0:A.name)||i}),s.jsxs("p",{className:"am-subtitle",children:[_.length," activities"]})]}),s.jsxs("div",{className:"am-view-toggle",children:[s.jsx("button",{className:`am-toggle-btn ${c==="list"?"active":""}`,onClick:()=>h("list"),children:"Activity List"}),s.jsx("button",{className:`am-toggle-btn ${c==="answerKey"?"active":""}`,onClick:()=>h("answerKey"),children:"📋 Answer Key"}),c==="answerKey"&&s.jsx("button",{className:"am-print-btn",onClick:k,children:"🖨️ Print"})]}),c==="list"?s.jsx("div",{className:"am-activities-list",children:_.length===0?s.jsxs("div",{className:"am-empty",children:[s.jsx("p",{children:"No activities found for this unit."}),s.jsx("p",{className:"am-empty-hint",children:"Activities for AP CSP modules are managed in the pseudocode and flowchart data files."})]}):_.map((g,p)=>s.jsxs("div",{className:"am-activity-card",children:[s.jsxs("div",{className:"am-activity-header",children:[s.jsxs("span",{className:"am-activity-number",children:["#",p+1]}),s.jsx("h4",{children:g.title||g.name||`Activity ${p+1}`}),g.difficulty&&s.jsx("span",{className:`am-difficulty ${g.difficulty.toLowerCase()}`,children:g.difficulty})]}),s.jsxs("div",{className:"am-activity-body",children:[g.description&&s.jsx("p",{className:"am-activity-desc",children:g.description}),g.dayTitle&&s.jsxs("p",{className:"am-activity-day",children:["Day ",g.dayNumber,": ",g.dayTitle]}),s.jsx("div",{className:"am-activity-meta",children:g.points&&s.jsxs("span",{className:"am-points",children:[g.points," pts"]})})]}),s.jsx("div",{className:"am-activity-actions",children:s.jsx("button",{className:"am-view-btn",onClick:()=>l(g),children:"View Details & Answer"})})]},g.id||p))}):s.jsxs("div",{className:"am-answer-key",children:[s.jsxs("div",{className:"am-answer-key-header",children:[s.jsxs("h2",{children:["📋 Answer Key: ",A==null?void 0:A.name]}),s.jsx("p",{children:"Exemplar responses and solutions for all activities"})]}),_.map((g,p)=>s.jsxs("div",{className:"am-answer-item",children:[s.jsxs("div",{className:"am-answer-question",children:[s.jsxs("span",{className:"am-answer-num",children:["#",p+1]}),s.jsxs("div",{className:"am-answer-title",children:[s.jsx("strong",{children:g.title||g.name}),s.jsxs("span",{className:"am-answer-points",children:[g.points," pts"]})]})]}),g.prompt&&s.jsxs("div",{className:"am-answer-prompt",children:[s.jsx("label",{children:"Challenge/Prompt:"}),s.jsx("pre",{children:g.prompt})]}),s.jsxs("div",{className:"am-answer-response",children:[g.flag&&s.jsxs("div",{className:"am-answer-box flag",children:[s.jsx("label",{children:"🚩 Flag:"}),s.jsx("code",{children:g.flag})]}),g.answer&&s.jsxs("div",{className:"am-answer-box answer",children:[s.jsx("label",{children:"✓ Answer:"}),s.jsx("code",{children:typeof g.answer=="object"?JSON.stringify(g.answer):g.answer})]}),g.explanation&&s.jsxs("div",{className:"am-answer-box explanation",children:[s.jsx("label",{children:"📝 Explanation:"}),s.jsx("p",{children:g.explanation})]}),g.solutionCode&&s.jsxs("div",{className:"am-answer-box solution",children:[s.jsx("label",{children:"💻 Exemplar Code Solution:"}),s.jsx("pre",{className:"am-code-block",children:g.solutionCode})]}),g.rubric&&s.jsxs("div",{className:"am-answer-box rubric",children:[s.jsx("label",{children:"📊 Grading Rubric:"}),s.jsx("ul",{className:"am-rubric-list",children:Object.entries(g.rubric).map(([S,R])=>s.jsxs("li",{children:[s.jsxs("strong",{children:[S,":"]})," ",R]},S))})]}),g.hints&&g.hints.length>0&&s.jsxs("div",{className:"am-answer-box hints",children:[s.jsx("label",{children:"💡 Hints (for scaffolding):"}),s.jsx("ol",{children:g.hints.map((S,R)=>s.jsx("li",{children:S},R))})]}),g.learningObjective&&s.jsxs("div",{className:"am-answer-box objective",children:[s.jsx("label",{children:"🎯 Learning Objective:"}),s.jsx("p",{children:g.learningObjective})]})]})]},g.id||p))]})]})}return a?s.jsxs("div",{className:"activity-manager",children:[s.jsxs("div",{className:"am-header",children:[s.jsx("button",{className:"am-back-btn",onClick:b,children:"← Back to List"}),s.jsx("h3",{children:a.title||a.name}),s.jsx("button",{className:"am-print-btn",onClick:k,children:"🖨️ Print"})]}),s.jsxs("div",{className:"am-activity-detail",children:[s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"📋 Activity Overview"}),s.jsxs("div",{className:"am-detail-row",children:[s.jsx("label",{children:"Title:"}),s.jsx("span",{children:a.title||a.name})]}),a.difficulty&&s.jsxs("div",{className:"am-detail-row",children:[s.jsx("label",{children:"Difficulty:"}),s.jsx("span",{className:`am-difficulty ${a.difficulty.toLowerCase()}`,children:a.difficulty})]}),a.points&&s.jsxs("div",{className:"am-detail-row",children:[s.jsx("label",{children:"Points:"}),s.jsx("span",{children:a.points})]}),a.dayTitle&&s.jsxs("div",{className:"am-detail-row",children:[s.jsx("label",{children:"Day:"}),s.jsxs("span",{children:["Day ",a.dayNumber,": ",a.dayTitle]})]})]}),a.description&&s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"📖 Description"}),s.jsx("p",{children:a.description})]}),a.learningObjective&&s.jsxs("div",{className:"am-detail-section objective",children:[s.jsx("h4",{children:"🎯 Learning Objective"}),s.jsx("p",{children:a.learningObjective})]}),a.prompt&&s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"❓ Challenge/Prompt"}),s.jsx("pre",{className:"am-prompt-block",children:a.prompt})]}),s.jsxs("div",{className:"am-teacher-section",children:[s.jsx("h4",{children:"🔑 TEACHER ANSWER KEY"}),a.flag&&s.jsxs("div",{className:"am-answer-box flag",children:[s.jsx("label",{children:"🚩 Flag:"}),s.jsx("code",{className:"am-flag",children:a.flag})]}),a.answer&&s.jsxs("div",{className:"am-answer-box answer",children:[s.jsx("label",{children:"✓ Correct Answer:"}),s.jsx("code",{className:"am-answer",children:typeof a.answer=="object"?JSON.stringify(a.answer,null,2):a.answer})]}),a.solutionCode&&s.jsxs("div",{className:"am-answer-box solution",children:[s.jsx("label",{children:"💻 Exemplar Code Solution:"}),s.jsx("pre",{className:"am-code-block",children:a.solutionCode})]}),a.explanation&&s.jsxs("div",{className:"am-answer-box explanation",children:[s.jsx("label",{children:"📝 Explanation for Students:"}),s.jsx("p",{children:a.explanation})]})]}),a.hints&&a.hints.length>0&&s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"💡 Hints (for scaffolding)"}),s.jsx("ol",{className:"am-hints-list",children:a.hints.map((C,A)=>s.jsx("li",{children:C},A))})]}),a.rubric&&s.jsxs("div",{className:"am-detail-section rubric",children:[s.jsx("h4",{children:"📊 Grading Rubric"}),s.jsxs("table",{className:"am-rubric-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Criterion"}),s.jsx("th",{children:"Description"})]})}),s.jsx("tbody",{children:Object.entries(a.rubric).map(([C,A])=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("strong",{children:C})}),s.jsx("td",{children:A})]},C))})]})]}),a.vocabularyTerms&&a.vocabularyTerms.length>0&&s.jsxs("div",{className:"am-detail-section",children:[s.jsx("h4",{children:"📚 Related Vocabulary"}),s.jsx("div",{className:"am-vocab-tags",children:a.vocabularyTerms.map((C,A)=>s.jsx("span",{className:"am-vocab-tag",children:C},A))})]})]})]}):null},ix=({classCode:e})=>{const[t,n]=I.useState(null);return s.jsxs("div",{className:"module-editor",children:[s.jsxs("div",{className:"me-header",children:[s.jsx("h3",{children:"Module Content"}),s.jsx("p",{className:"me-subtitle",children:"View and manage module content for your class."})]}),s.jsx("div",{className:"me-modules",children:Object.entries(me).map(([i,r])=>s.jsxs("div",{className:`me-module-card ${t===i?"selected":""}`,onClick:()=>n(t===i?null:i),children:[s.jsxs("div",{className:"me-module-header",children:[s.jsx("span",{className:"me-module-icon",children:r.icon}),s.jsx("h4",{children:r.name})]}),s.jsx("p",{className:"me-module-description",children:r.description}),s.jsxs("span",{className:"me-unit-count",children:[r.units.length," units"]}),t===i&&s.jsxs("div",{className:"me-units-list",children:[s.jsx("h5",{children:"Units:"}),s.jsx("ul",{children:r.units.map(a=>s.jsxs("li",{children:[s.jsx("strong",{children:a.name}),s.jsx("span",{className:"me-unit-desc",children:a.description})]},a.id))})]})]},i))})]})},rx=({classCode:e})=>{const[t,n]=I.useState([]),[i,r]=I.useState(!0),[a,l]=I.useState("all"),[c,h]=I.useState("all"),[m,E]=I.useState(""),[j,b]=I.useState(null);I.useEffect(()=>{k()},[e]);const k=async()=>{r(!0);try{const p=await mv(e);p.sort((S,R)=>{const L=S.submittedAt?new Date(S.submittedAt).getTime():0;return(R.submittedAt?new Date(R.submittedAt).getTime():0)-L}),n(p)}catch(p){console.error("Error loading submissions:",p)}r(!1)},C=t.filter(p=>{var S,R,L;if(a==="correct"&&!p.isCorrect||a==="incorrect"&&p.isCorrect||c!=="all"&&p.exerciseType!==c)return!1;if(m){const M=m.toLowerCase(),x=(S=p.studentName)==null?void 0:S.toLowerCase().includes(M),f=(R=p.exerciseTitle)==null?void 0:R.toLowerCase().includes(M),w=(L=p.exerciseId)==null?void 0:L.toLowerCase().includes(M);if(!x&&!f&&!w)return!1}return!0}),A=p=>p?(typeof p=="string"?new Date(p):p).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0}):"Unknown",_=p=>{switch(p){case"challenge":return"#00ff88";case"pseudocode":return"#ff6b9d";case"flowchart":return"#ff6b9d";case"programming":return"#00d4ff";default:return"#888"}},g=p=>{switch(p){case"challenge":return"Cyber Challenge";case"pseudocode":return"Pseudocode";case"flowchart":return"Flowchart";case"programming":return"Programming";default:return p}};return i?s.jsx("div",{className:"submission-viewer",children:s.jsx("div",{className:"loading-message",children:"Loading submissions..."})}):s.jsxs("div",{className:"submission-viewer",children:[s.jsxs("div",{className:"sv-header",children:[s.jsx("h3",{children:"Student Submissions"}),s.jsx("p",{className:"sv-subtitle",children:"View and review student answers across all exercises."})]}),s.jsxs("div",{className:"sv-filters",children:[s.jsxs("div",{className:"sv-filter-group",children:[s.jsx("label",{children:"Status:"}),s.jsxs("select",{value:a,onChange:p=>l(p.target.value),children:[s.jsx("option",{value:"all",children:"All Submissions"}),s.jsx("option",{value:"correct",children:"Correct Only"}),s.jsx("option",{value:"incorrect",children:"Incorrect Only"})]})]}),s.jsxs("div",{className:"sv-filter-group",children:[s.jsx("label",{children:"Type:"}),s.jsxs("select",{value:c,onChange:p=>h(p.target.value),children:[s.jsx("option",{value:"all",children:"All Types"}),s.jsx("option",{value:"challenge",children:"Cyber Challenges"}),s.jsx("option",{value:"pseudocode",children:"Pseudocode"}),s.jsx("option",{value:"flowchart",children:"Flowcharts"}),s.jsx("option",{value:"programming",children:"Programming"})]})]}),s.jsxs("div",{className:"sv-filter-group",children:[s.jsx("label",{children:"Search:"}),s.jsx("input",{type:"text",placeholder:"Student name or exercise...",value:m,onChange:p=>E(p.target.value)})]}),s.jsx("button",{className:"sv-refresh-btn",onClick:k,children:"Refresh"})]}),C.length===0?s.jsxs("div",{className:"sv-empty",children:[s.jsx("div",{className:"sv-empty-icon",children:"[ NO SUBMISSIONS ]"}),s.jsx("p",{children:"No submissions match your filters."}),t.length===0&&s.jsx("p",{className:"sv-hint",children:"Students' answers will appear here when they submit exercises."})]}):s.jsxs("div",{className:"sv-list",children:[s.jsxs("div",{className:"sv-stats",children:["Showing ",C.length," of ",t.length," submissions",a==="incorrect"&&s.jsxs("span",{className:"sv-stat-highlight",children:[" (",C.length," need review)"]})]}),C.map((p,S)=>s.jsxs("div",{className:`sv-submission-card ${p.isCorrect?"correct":"incorrect"} ${j===S?"expanded":""}`,children:[s.jsxs("div",{className:"sv-submission-header",onClick:()=>b(j===S?null:S),children:[s.jsxs("div",{className:"sv-submission-info",children:[s.jsx("span",{className:"sv-student-name",children:p.studentName}),s.jsx("span",{className:"sv-type-badge",style:{backgroundColor:_(p.exerciseType)},children:g(p.exerciseType)}),s.jsx("span",{className:`sv-status-badge ${p.isCorrect?"correct":"incorrect"}`,children:p.isCorrect?"✓ Correct":"✗ Incorrect"})]}),s.jsxs("div",{className:"sv-submission-meta",children:[s.jsx("span",{className:"sv-exercise-title",children:p.exerciseTitle||p.exerciseId}),s.jsx("span",{className:"sv-date",children:A(p.submittedAt)})]}),s.jsx("span",{className:"sv-expand-icon",children:j===S?"▼":"▶"})]}),j===S&&s.jsx("div",{className:"sv-submission-content",children:s.jsxs("div",{className:"sv-answer-section",children:[s.jsx("h4",{children:"Student's Answer:"}),s.jsx("pre",{className:"sv-answer-code",children:p.answer})]})})]},`${p.studentId}-${p.exerciseId}-${S}`))]})]})},ox=({classCode:e,onBack:t})=>{var f,w,T,P;Dc();const[n,i]=I.useState([]),[r,a]=I.useState(null),[l,c]=I.useState([]),[h,m]=I.useState(!0),[E,j]=I.useState(null),[b,k]=I.useState("points"),[C,A]=I.useState("students"),[_,g]=I.useState(!1),p=Object.values(Es).flat().length,S=Nt.length;I.useEffect(()=>{(async()=>{const V=await gv(e);a(V)})();const v=yv(e,V=>{i(V),m(!1)}),Q=Pf(e,V=>{c(V)});return()=>{v(),Q()}},[e]);const R=[...n].sort((N,v)=>{var Q,V;switch(b){case"points":return v.totalPoints-N.totalPoints;case"name":return N.name.localeCompare(v.name);case"activity":const te=((Q=N.lastActivity)==null?void 0:Q.getTime())||0;return(((V=v.lastActivity)==null?void 0:V.getTime())||0)-te;default:return 0}}),L=N=>{if(!N)return{status:"never",label:"Never active",color:"#666"};const Q=new Date-N,V=Math.floor(Q/6e4);if(V<5)return{status:"active",label:"Active now",color:"#4caf50"};if(V<30)return{status:"recent",label:`${V}m ago`,color:"#ff9800"};if(V<60)return{status:"idle",label:`${V}m ago`,color:"#f44336"};const te=Math.floor(V/60);return te<24?{status:"idle",label:`${te}h ago`,color:"#f44336"}:{status:"inactive",label:`${Math.floor(te/24)}d ago`,color:"#666"}},M=(N,v)=>v>0?Math.round(N/v*100):0,x={totalStudents:n.length,activeStudents:n.filter(N=>{const v=L(N.lastActivity);return v.status==="active"||v.status==="recent"}).length,avgPoints:n.length>0?Math.round(n.reduce((N,v)=>N+v.totalPoints,0)/n.length):0,avgChallenges:n.length>0?Math.round(n.reduce((N,v)=>{var Q;return N+(((Q=v.completedChallenges)==null?void 0:Q.length)||0)},0)/n.length):0};return h?s.jsx("div",{className:"teacher-dashboard",children:s.jsxs("div",{className:"loading-screen",children:[s.jsx("div",{className:"loading-spinner"}),s.jsx("p",{children:"Loading class data..."})]})}):s.jsxs("div",{className:"teacher-dashboard",children:[s.jsxs("header",{className:"td-header",children:[s.jsx("button",{className:"back-btn",onClick:t,children:"← Exit Dashboard"}),s.jsxs("div",{className:"td-title",children:[s.jsx("h1",{children:(r==null?void 0:r.name)||"Class Dashboard"}),s.jsxs("div",{className:"class-code-badge",children:["Class Code: ",s.jsx("strong",{children:e})]})]}),s.jsx("button",{className:"theme-btn nav-btn",onClick:()=>g(!0),title:"Change Theme",children:"Theme"})]}),s.jsxs("div",{className:"td-stats",children:[s.jsxs("div",{className:"td-stat-card",children:[s.jsx("span",{className:"td-stat-value",children:x.totalStudents}),s.jsx("span",{className:"td-stat-label",children:"Total Students"})]}),s.jsxs("div",{className:"td-stat-card active",children:[s.jsx("span",{className:"td-stat-value",children:x.activeStudents}),s.jsx("span",{className:"td-stat-label",children:"Currently Active"})]}),s.jsxs("div",{className:"td-stat-card",children:[s.jsx("span",{className:"td-stat-value",children:x.avgPoints}),s.jsx("span",{className:"td-stat-label",children:"Avg Points"})]}),s.jsxs("div",{className:"td-stat-card",children:[s.jsx("span",{className:"td-stat-value",children:x.avgChallenges}),s.jsx("span",{className:"td-stat-label",children:"Avg Challenges Done"})]})]}),s.jsxs("div",{className:"td-tabs",children:[s.jsx("button",{className:`td-tab ${C==="students"?"active":""}`,onClick:()=>A("students"),children:"Students"}),s.jsx("button",{className:`td-tab ${C==="submissions"?"active":""}`,onClick:()=>A("submissions"),children:"Submissions"}),s.jsx("button",{className:`td-tab ${C==="assignments"?"active":""}`,onClick:()=>A("assignments"),children:"Module Assignments"}),s.jsx("button",{className:`td-tab ${C==="activities"?"active":""}`,onClick:()=>A("activities"),children:"View Activities"}),s.jsx("button",{className:`td-tab ${C==="modules"?"active":""}`,onClick:()=>A("modules"),children:"Modules"})]}),C==="submissions"&&s.jsx(rx,{classCode:e}),C==="assignments"&&s.jsx(nx,{classCode:e,assignments:l}),C==="activities"&&s.jsx(sx,{classCode:e}),C==="modules"&&s.jsx(ix,{classCode:e}),C==="students"&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"td-controls",children:[s.jsxs("div",{className:"sort-controls",children:[s.jsx("label",{children:"Sort by:"}),s.jsxs("select",{value:b,onChange:N=>k(N.target.value),children:[s.jsx("option",{value:"points",children:"Points (High to Low)"}),s.jsx("option",{value:"name",children:"Name (A-Z)"}),s.jsx("option",{value:"activity",children:"Recent Activity"})]})]}),s.jsx("button",{className:"btn-refresh",onClick:()=>window.location.reload(),children:"Refresh"})]}),s.jsxs("div",{className:"td-content",children:[s.jsxs("div",{className:"student-list-panel",children:[s.jsxs("h2",{children:["Students (",n.length,")"]}),n.length===0?s.jsxs("div",{className:"no-students",children:[s.jsx("p",{children:"No students have joined yet."}),s.jsxs("p",{children:["Share the class code: ",s.jsx("strong",{children:e})]})]}):s.jsx("div",{className:"student-list",children:R.map((N,v)=>{var V,te,oe,U;const Q=L(N.lastActivity);return M(((V=N.completedChallenges)==null?void 0:V.length)||0,p),M(((te=N.completedScenarios)==null?void 0:te.length)||0,S),s.jsxs("div",{className:`student-card ${(E==null?void 0:E.id)===N.id?"selected":""}`,onClick:()=>j(N),children:[s.jsxs("div",{className:"student-rank",children:["#",v+1]}),s.jsxs("div",{className:"student-info",children:[s.jsx("div",{className:"student-name",children:N.name}),s.jsxs("div",{className:"student-activity",style:{color:Q.color},children:[s.jsx("span",{className:`activity-dot ${Q.status}`}),Q.label]})]}),s.jsxs("div",{className:"student-progress",children:[s.jsxs("div",{className:"progress-item",children:[s.jsx("span",{className:"progress-value",children:N.totalPoints}),s.jsx("span",{className:"progress-label",children:"pts"})]}),s.jsxs("div",{className:"progress-item",children:[s.jsx("span",{className:"progress-value",children:((oe=N.completedChallenges)==null?void 0:oe.length)||0}),s.jsx("span",{className:"progress-label",children:"challenges"})]}),s.jsxs("div",{className:"progress-item",children:[s.jsx("span",{className:"progress-value",children:((U=N.completedScenarios)==null?void 0:U.length)||0}),s.jsx("span",{className:"progress-label",children:"scenarios"})]})]})]},N.id)})})]}),s.jsx("div",{className:"student-detail-panel",children:E?s.jsxs(s.Fragment,{children:[s.jsx("h2",{children:E.name}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h3",{children:"Overall Progress"}),s.jsx("div",{className:"detail-stats",children:s.jsxs("div",{className:"detail-stat",children:[s.jsx("span",{className:"detail-stat-value",children:E.totalPoints}),s.jsx("span",{className:"detail-stat-label",children:"Total Points"})]})})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("h3",{children:["Challenges (",((f=E.completedChallenges)==null?void 0:f.length)||0,"/",p,")"]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill",style:{width:`${M(((w=E.completedChallenges)==null?void 0:w.length)||0,p)}%`}})}),s.jsx("div",{className:"completed-list",children:Object.entries(Es).map(([N,v])=>{const Q=v.filter(V=>{var te;return(te=E.completedChallenges)==null?void 0:te.includes(V.id)});return Q.length===0?null:s.jsxs("div",{className:"category-progress",children:[s.jsx("h4",{children:N}),s.jsx("ul",{children:Q.map(V=>s.jsxs("li",{children:[V.title," (+",V.points,"pts)"]},V.id))})]},N)})})]}),s.jsxs("div",{className:"detail-section",children:[s.jsxs("h3",{children:["Network Monitor (",((T=E.completedScenarios)==null?void 0:T.length)||0,"/",S,")"]}),s.jsx("div",{className:"progress-bar-container",children:s.jsx("div",{className:"progress-bar-fill scenario",style:{width:`${M(((P=E.completedScenarios)==null?void 0:P.length)||0,S)}%`}})}),s.jsx("div",{className:"completed-list",children:s.jsx("ul",{children:Nt.filter(N=>{var v;return(v=E.completedScenarios)==null?void 0:v.includes(N.id)}).map(N=>s.jsxs("li",{children:[N.name," (+",N.points,"pts)"]},N.id))})})]})]}):s.jsx("div",{className:"no-selection",children:s.jsx("p",{children:"Select a student to view details"})})})]})]}),_&&s.jsx(Ic,{onClose:()=>g(!1)})]})},If={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
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
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function ax(e){for(const t of Object.values(If))for(const n of t.days)for(const i of n.exercises)if(i.id===e)return i;return null}const lx={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},cx={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]};function ux({weekKey:e,onSelectExercise:t,onBack:n,completedExercises:i}){const r=If[e],a=e.replace("week",""),l=cx[e]||[],c=h=>`difficulty difficulty-${h.toLowerCase()}`;return s.jsxs("div",{className:"week-view",children:[s.jsx("button",{className:"back-button",onClick:n,children:"← Back to Dashboard"}),s.jsxs("div",{className:"week-header-large",children:[s.jsxs("h1",{children:["Week ",a,": ",r.title]}),s.jsx("p",{className:"big-idea",children:r.bigIdea})]}),s.jsxs("div",{className:"learning-objectives",children:[s.jsx("h3",{children:"Learning Objectives"}),s.jsx("ul",{children:l.map((h,m)=>s.jsx("li",{children:h},m))})]}),s.jsx("div",{className:"days-list",children:r.days.map(h=>s.jsxs("div",{className:"day-section",children:[s.jsxs("div",{className:"day-header",children:[s.jsxs("h2",{children:["Day ",h.day,": ",h.title]}),s.jsx("p",{className:"day-objective",children:h.objective})]}),s.jsx("div",{className:"exercises-grid",children:h.exercises.map(m=>{const E=i.includes(m.id);return s.jsxs("div",{className:`exercise-card ${E?"completed":""} ${m.isProject?"project-card":""}`,onClick:()=>t(m.id),children:[s.jsxs("div",{className:"exercise-header",children:[s.jsx("span",{className:c(m.difficulty),children:m.difficulty}),s.jsxs("span",{className:"points",children:[m.points," pts"]})]}),s.jsxs("h3",{className:"exercise-title",children:[m.isProject&&"🎮 ",m.isCapstone&&"🏆 ",m.title]}),s.jsx("p",{className:"exercise-description",children:m.description}),E&&s.jsx("div",{className:"completed-badge",children:"✓ Completed"})]},m.id)})}),h.exitTicket&&s.jsxs("div",{className:"exit-ticket",children:[s.jsx("strong",{children:"Exit Ticket:"})," ",h.exitTicket]})]},h.day))})]})}const _a=()=>new Promise((e,t)=>{if(window.p5&&typeof window.p5=="function"){e(window.p5);return}const n=document.querySelector('script[src*="p5.min.js"]');if(n){n.addEventListener("load",()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))}),n.addEventListener("error",()=>t(new Error("Failed to load p5.js")));return}const i=document.createElement("script");i.src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js",i.async=!0,i.onload=()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))},i.onerror=()=>t(new Error("Failed to load p5.js")),document.head.appendChild(i)});function dx({exerciseId:e,onBack:t,onComplete:n,isCompleted:i,onSubmit:r}){const a=ax(e),[l,c]=I.useState((a==null?void 0:a.starterCode)||""),[h,m]=I.useState([]),[E,j]=I.useState(!1),[b,k]=I.useState(!1),[C,A]=I.useState(null),[_,g]=I.useState(!1),[p,S]=I.useState(null),R=I.useRef(null),L=I.useRef(null);if(I.useEffect(()=>{_a().then(()=>{g(!0),S(null)}).catch(N=>{console.error("Failed to load p5.js:",N),S(N.message)})},[]),I.useEffect(()=>{a&&(c(a.starterCode),m([]),j(!1))},[e]),I.useEffect(()=>()=>{L.current&&(L.current.remove(),L.current=null)},[]),!a)return s.jsxs("div",{className:"exercise-detail",children:[s.jsx("button",{className:"back-button",onClick:t,children:"← Back"}),s.jsx("p",{children:"Exercise not found"})]});const M=async()=>{L.current&&(L.current.remove(),L.current=null),R.current&&(R.current.innerHTML=""),k(!0);try{(!window.p5||typeof window.p5!="function")&&(R.current&&(R.current.innerHTML='<div class="canvas-placeholder">Loading p5.js...</div>'),await _a());const N=["setup","draw","preload","mousePressed","mouseReleased","mouseClicked","mouseMoved","mouseDragged","mouseWheel","doubleClicked","keyPressed","keyReleased","keyTyped","touchStarted","touchMoved","touchEnded","windowResized"];let v=l;N.forEach(V=>{const te=new RegExp(`function\\s+${V}\\s*\\(`,"g");v=v.replace(te,`p.${V} = function(`)});const Q=V=>{new Function("p",`
          with (p) {
            ${v}
          }
        `)(V)};L.current=new window.p5(Q,R.current)}catch(N){console.error("Code error:",N),R.current&&(R.current.innerHTML=`<div class="error-message">Error: ${N.message}</div>`)}},x=()=>{L.current&&(L.current.remove(),L.current=null),k(!1),R.current&&(R.current.innerHTML='<div class="canvas-placeholder">Click "Run Code" to see your sketch</div>')},f=()=>{c(a.starterCode),x()},w=N=>{h.includes(N)||m([...h,N])},T=()=>{i||(r&&r({exerciseId:a.id,answer:l,isCorrect:!0,exerciseType:"programming",exerciseTitle:a.title}),n(a.id,a.points))},P=N=>`difficulty difficulty-${N.toLowerCase()}`;return s.jsxs("div",{className:"exercise-detail",children:[s.jsx("button",{className:"back-button",onClick:t,children:"← Back to Week"}),s.jsxs("div",{className:"exercise-header-detail",children:[s.jsxs("div",{className:"exercise-meta",children:[s.jsx("span",{className:P(a.difficulty),children:a.difficulty}),s.jsxs("span",{className:"points",children:[a.points," pts"]}),a.isProject&&s.jsx("span",{className:"project-badge",children:"Mini-Project"}),a.isCapstone&&s.jsx("span",{className:"capstone-badge",children:"Capstone"})]}),s.jsx("h1",{children:a.title}),s.jsx("p",{className:"exercise-description-large",children:a.description})]}),a.vocabularyTerms&&a.vocabularyTerms.length>0&&s.jsxs("div",{className:"vocab-tags",children:[s.jsx("span",{className:"vocab-label",children:"Key Terms:"}),a.vocabularyTerms.map(N=>{const v=lx[N];return v?s.jsx("button",{className:"vocab-tag",onClick:()=>A(v),children:v.term},N):null})]}),C&&s.jsx("div",{className:"vocab-popup",onClick:()=>A(null),children:s.jsxs("div",{className:"vocab-popup-content",onClick:N=>N.stopPropagation(),children:[s.jsx("h3",{children:C.term}),s.jsx("p",{children:C.definition}),C.example&&s.jsx("code",{className:"vocab-example",children:C.example}),s.jsx("button",{onClick:()=>A(null),children:"Close"})]})}),s.jsxs("div",{className:"prompt-box",children:[s.jsx("h3",{children:"Challenge"}),s.jsx("pre",{children:a.prompt})]}),s.jsxs("div",{className:"editor-container",children:[s.jsxs("div",{className:"code-section",children:[s.jsxs("div",{className:"code-header",children:[s.jsx("h3",{children:"Your Code"}),s.jsxs("div",{className:"code-actions",children:[s.jsx("button",{onClick:M,className:"run-btn",children:"▶ Run"}),s.jsx("button",{onClick:x,className:"stop-btn",children:"⬛ Stop"}),s.jsx("button",{onClick:f,className:"reset-btn",children:"↺ Reset"})]})]}),s.jsx("textarea",{className:"code-editor",value:l,onChange:N=>c(N.target.value),spellCheck:!1})]}),s.jsxs("div",{className:"canvas-section",children:[s.jsx("h3",{children:"Output"}),s.jsx("div",{ref:R,className:"canvas-container",children:p?s.jsxs("div",{className:"error-message",children:["Failed to load p5.js: ",p,s.jsx("button",{onClick:()=>{S(null),_a().then(()=>g(!0)).catch(N=>S(N.message))},style:{marginTop:"10px",display:"block"},children:"Retry"})]}):_?s.jsx("div",{className:"canvas-placeholder",children:'Click "Run Code" to see your sketch'}):s.jsx("div",{className:"canvas-placeholder",children:"Loading p5.js..."})})]})]}),s.jsxs("div",{className:"hints-section",children:[s.jsx("h3",{children:"Hints"}),s.jsx("div",{className:"hints-list",children:a.hints.map((N,v)=>s.jsx("div",{className:"hint-item",children:h.includes(v)?s.jsxs("div",{className:"hint-revealed",children:[s.jsxs("span",{className:"hint-number",children:["Hint ",v+1,":"]})," ",N]}):s.jsxs("button",{className:"hint-button",onClick:()=>w(v),children:["Reveal Hint ",v+1]})},v))})]}),a.rubric&&s.jsxs("div",{className:"rubric-section",children:[s.jsx("h3",{children:"Rubric"}),s.jsx("ul",{className:"rubric-list",children:Object.entries(a.rubric).map(([N,v])=>s.jsxs("li",{children:[s.jsxs("strong",{children:[N,":"]})," ",v]},N))})]}),s.jsx("div",{className:"complete-section",children:i?s.jsxs("div",{className:"already-completed",children:["✓ You've completed this exercise! (",a.points," points earned)"]}):s.jsxs("button",{className:"complete-button",onClick:T,children:["Mark as Complete (+",a.points," points)"]})})]})}function hx({completedExercises:e=[],onSelectTopic:t,onSelectExercise:n,onBack:i}){const[r,a]=I.useState("all"),[l,c]=I.useState("all"),[h,m]=I.useState("learn"),E=new Set(e),j=I.useMemo(()=>{const g={};return xs.forEach(p=>{g[p.id]=Tt.filter(S=>S.topic===p.id)}),g},[]),b=[{id:"all",label:"All Types"},{id:"pseudocode-to-js",label:"Pseudocode → JS"},{id:"js-to-pseudocode",label:"JS → Pseudocode"},{id:"fill-blank",label:"Fill in Blank"},{id:"trace",label:"Code Tracing"},{id:"multiple-choice",label:"Multiple Choice"}],k=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],C=I.useMemo(()=>Tt.filter(g=>!(r!=="all"&&g.difficulty!==r||l!=="all"&&g.type!==l)),[r,l]),A=g=>{const p=j[g]||[];return{completed:p.filter(R=>E.has(R.id)).length,total:p.length}},_={completed:E.size,total:Tt.length};return s.jsxs("div",{className:"pseudocode-hub",children:[s.jsx("button",{className:"back-btn",onClick:i,children:"← Back to Dashboard"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ CODE ]"}),s.jsx("h1",{children:"AP CSP Pseudocode"}),s.jsx("p",{children:"Learn to translate between AP CSP pseudocode and JavaScript"})]}),s.jsxs("div",{className:"progress-bar-container",children:[s.jsxs("div",{className:"progress-label",children:["Overall Progress: ",_.completed," / ",_.total," exercises"]}),s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill apcsp",style:{width:`${_.completed/_.total*100}%`}})})]}),s.jsxs("div",{className:"hub-tabs",children:[s.jsx("button",{className:`hub-tab ${h==="learn"?"active":""}`,onClick:()=>m("learn"),children:"Learn Topics"}),s.jsx("button",{className:`hub-tab ${h==="practice"?"active":""}`,onClick:()=>m("practice"),children:"Practice Exercises"})]}),h==="learn"&&s.jsx("div",{className:"topics-grid",children:xs.map(g=>{const p=A(g.id),S=p.total>0?p.completed/p.total*100:0;return s.jsxs("div",{className:"topic-card",onClick:()=>t(g.id),children:[s.jsx("h3",{children:g.title}),s.jsx("div",{className:"topic-code",children:s.jsx("code",{children:g.pseudocode})}),s.jsx("div",{className:"topic-arrow",children:"↓"}),s.jsx("div",{className:"topic-code js",children:s.jsx("code",{children:g.javascript})}),s.jsxs("p",{className:"topic-explanation",children:[g.explanation.substring(0,100),"..."]}),s.jsxs("div",{className:"topic-progress",children:[s.jsxs("span",{children:[p.completed,"/",p.total," exercises"]}),s.jsx("div",{className:"progress-bar small",children:s.jsx("div",{className:"progress-fill apcsp",style:{width:`${S}%`}})})]})]},g.id)})}),h==="practice"&&s.jsxs("div",{className:"practice-section",children:[s.jsxs("div",{className:"filter-bar",children:[s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Difficulty:"}),s.jsx("select",{value:r,onChange:g=>a(g.target.value),children:k.map(g=>s.jsx("option",{value:g.id,children:g.label},g.id))})]}),s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Type:"}),s.jsx("select",{value:l,onChange:g=>c(g.target.value),children:b.map(g=>s.jsx("option",{value:g.id,children:g.label},g.id))})]})]}),s.jsx("div",{className:"exercises-list",children:C.map(g=>{const p=E.has(g.id),S=xs.find(R=>R.id===g.topic);return s.jsxs("div",{className:`exercise-card ${p?"completed":""}`,onClick:()=>n(g.id),children:[s.jsx("div",{className:"exercise-status",children:p?"✓":"○"}),s.jsxs("div",{className:"exercise-content",children:[s.jsx("h4",{children:(S==null?void 0:S.title)||"Unknown Topic"}),s.jsx("p",{className:"exercise-type",children:g.type.replace(/-/g," ")}),s.jsx("p",{className:"exercise-prompt",children:g.prompt})]}),s.jsx("div",{className:`difficulty-badge ${g.difficulty}`,children:g.difficulty})]},g.id)})})]})]})}function px({topicId:e,onBack:t,onSelectExercise:n}){const[i,r]=I.useState(0),a=xs.findIndex(h=>h.id===e),l=xs[a],c=Tt.filter(h=>h.topic===e).slice(0,5);return l?s.jsxs("div",{className:"topic-lesson",children:[s.jsx("button",{className:"back-btn",onClick:t,children:"← Back to Pseudocode Hub"}),s.jsxs("div",{className:"lesson-header",children:[s.jsx("h1",{children:l.title}),s.jsx("p",{children:l.explanation})]}),s.jsxs("div",{className:"comparison-box",children:[s.jsxs("div",{className:"comparison-side pseudocode",children:[s.jsx("h3",{children:"Pseudocode"}),s.jsx("div",{className:"code-panel",children:s.jsx("pre",{children:l.pseudocode})})]}),s.jsxs("div",{className:"comparison-side javascript",children:[s.jsx("h3",{children:"JavaScript"}),s.jsx("div",{className:"code-panel",children:s.jsx("pre",{children:l.javascript})})]})]}),l.examples&&l.examples.length>0&&s.jsxs("div",{className:"examples-list",children:[s.jsx("h3",{children:"Examples"}),l.examples.map((h,m)=>s.jsxs("div",{className:"example-item",children:[s.jsxs("div",{className:"code-panel",children:[s.jsx("div",{className:"code-panel-header given",children:"Pseudocode"}),s.jsx("pre",{children:h.pseudocode})]}),s.jsxs("div",{className:"code-panel",children:[s.jsx("div",{className:"code-panel-header answer",children:"JavaScript"}),s.jsx("pre",{children:h.javascript})]})]},m))]}),l.keyPoints&&l.keyPoints.length>0&&s.jsxs("div",{className:"key-points",children:[s.jsx("h3",{children:"Key Points"}),s.jsx("ul",{children:l.keyPoints.map((h,m)=>s.jsx("li",{children:h},m))})]}),c.length>0&&s.jsxs("div",{className:"related-exercises",children:[s.jsx("h3",{children:"Practice Exercises"}),s.jsx("div",{className:"exercises-list",children:c.map(h=>s.jsxs("div",{className:"exercise-card",onClick:()=>n(h.id),children:[s.jsxs("div",{className:"exercise-content",children:[s.jsx("h4",{children:h.type.replace(/-/g," ")}),s.jsx("p",{className:"exercise-prompt",children:h.prompt})]}),s.jsx("div",{className:`difficulty-badge ${h.difficulty}`,children:h.difficulty})]},h.id))})]})]}):s.jsxs("div",{className:"topic-lesson",children:[s.jsx("button",{className:"back-btn",onClick:t,children:"← Back"}),s.jsxs("div",{className:"error-message",children:[s.jsx("h1",{children:"Topic Not Found"}),s.jsx("p",{children:"This topic doesn't exist."})]})]})}function fx({exerciseId:e,onComplete:t,onBack:n,isCompleted:i,onNextExercise:r,allExerciseIds:a=[],onSubmit:l}){var X,J,Z;const c=Tt.find(H=>H.id===e),h=c?xs.find(H=>H.id===c.topic):null,[m,E]=I.useState(""),[j,b]=I.useState({}),[k,C]=I.useState(!1),[A,_]=I.useState(!1),[g,p]=I.useState(!1),[S,R]=I.useState(0),[L,M]=I.useState(!1),[x,f]=I.useState(0);I.useEffect(()=>{E(""),b({}),C(!1),_(!1),p(!1),R(0),M(!1),f(0)},[e]);const T=(()=>{if(!a||a.length===0){const K=Tt.findIndex(q=>q.id===e);return K>=0&&K<Tt.length-1?Tt[K+1].id:null}const H=a.indexOf(e);return H>=0&&H<a.length-1?a[H+1]:null})();if(I.useMemo(()=>{if((c==null?void 0:c.type)!=="fill-blank"||!(c!=null&&c.template))return null;const H=[],K=/___(\w+)___/g;let q;for(;(q=K.exec(c.template))!==null;)H.push({id:q[1],position:q.index});return H},[c]),!c)return s.jsxs("div",{className:"translation-exercise",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),s.jsxs("div",{className:"error-message",children:[s.jsx("h1",{children:"Exercise Not Found"}),s.jsx("p",{children:"This exercise doesn't exist."})]})]});const P=H=>H.replace(/<--/g,"←").replace(/<-/g,"←").replace(/←/g,"←").replace(/:=/g,"←").replace(/!=/g,"≠").replace(/<>/g,"≠").replace(/>=/g,"≥").replace(/<=/g,"≤").replace(/DISPLAY\s*\(\s*/gi,"DISPLAY(").replace(/DISPLAY\s+([^(\n]+)/gi,"DISPLAY($1)").replace(/\)\s*\)/g,")").replace(/INPUT\s*\(\s*\)/gi,"INPUT()").replace(/\s+/g," ").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/\s*,\s*/g,",").split(`
`).map(K=>K.trim()).filter(K=>K.length>0).join(`
`).trim().toLowerCase(),N=H=>H.replace(/\b(var|const)\b/g,"let").replace(/;+/g,";").replace(/\s+/g," ").replace(/\s*;\s*/g,";").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/;$/gm,"").split(`
`).map(K=>K.trim()).filter(K=>K.length>0).join(`
`).trim().toLowerCase(),v=(H,K,q)=>{const B=q?P:N,Y=B(H),ie=B(K);if(Y===ie)return!0;const ve=Y.replace(/\n/g," ").replace(/\s+/g," "),ke=ie.replace(/\n/g," ").replace(/\s+/g," ");if(ve===ke)return!0;const be=ut=>ut.replace(/[;\s]/g,"");return be(Y)===be(ie)},Q=(H,K)=>{const q=be=>be.toString().toLowerCase().trim().replace(/\s+/g," ").replace(/\s*=\s*/g,"=").replace(/[,;\n]+/g,",").replace(/\s+and\s+/gi,",").replace(/\s*,\s*/g,",").replace(/,+$/,"").replace(/^,+/,""),B=q(H),Y=q(K);if(B===Y)return!0;if(Y.includes("=")){const be=Dt=>{const Ht=Dt.split(",").filter(sn=>sn.includes("="));return new Set(Ht.map(sn=>sn.trim()))},ut=be(B),nn=be(Y);if(ut.size===nn.size){let Dt=!0;if(nn.forEach(Ht=>{ut.has(Ht)||(Dt=!1)}),Dt)return!0}}const ie=B.match(/\d+/g)||[],ve=Y.match(/\d+/g)||[];if(ie.length===1&&ve.length===1&&ie[0]===ve[0])return!0;const ke=be=>be.replace(/[^a-z0-9]/g,"");return ke(B)===ke(Y)},V=()=>{var q;let H=!1;const K=c.type==="js-to-pseudocode";if(c.type==="fill-blank"){if(c.blankAnswers)H=Object.entries(c.blankAnswers).every(([B,Y])=>{const ie=(j[B]||"").trim().toLowerCase();return Array.isArray(Y)?Y.some(ve=>ve.toLowerCase()===ie):Y.toLowerCase()===ie});else if(c.answer){const B=m.trim().toLowerCase(),Y=c.answer.toString().trim().toLowerCase();H=B===Y,!H&&c.acceptableAnswers&&(H=c.acceptableAnswers.some(ie=>B===ie.toString().trim().toLowerCase()))}}else c.type==="trace"||c.type==="multiple-choice"?(H=Q(m,c.answer),!H&&c.acceptableAnswers&&(H=c.acceptableAnswers.some(B=>Q(m,B)))):(H=v(m,c.answer,K),!H&&c.acceptableAnswers&&(H=c.acceptableAnswers.some(B=>v(m,B,K))));if(_(H),C(!0),H||f(B=>B+1),l){const B=c.type==="fill-blank"&&c.blankAnswers?JSON.stringify(j):m;l({exerciseId:c.id,answer:B,isCorrect:H,exerciseType:"pseudocode",exerciseTitle:((q=c.prompt)==null?void 0:q.substring(0,50))||c.id})}H&&!i&&t(c.id,10)},te=()=>{C(!1),_(!1),M(!1)},oe=()=>{T&&r?r(T):n()},U=()=>{var H;S<(((H=c.hints)==null?void 0:H.length)||0)-1&&R(S+1)},G=()=>{if(c.template){const H=c.template.split(/(___\w+___)/g);return s.jsx("div",{className:"fill-blank-container",children:s.jsx("pre",{className:"fill-blank-code",children:H.map((K,q)=>{const B=K.match(/___(\w+)___/);if(B){const Y=B[1];return s.jsx("input",{type:"text",className:`fill-blank-input ${k?A?"correct":"incorrect":""}`,value:j[Y]||"",onChange:ie=>b({...j,[Y]:ie.target.value}),placeholder:"...",disabled:k&&A},q)}return s.jsx("span",{children:K},q)})})})}if(c.given){const H=c.given.split(/(_{2,})/g);return s.jsx("div",{className:"fill-blank-container",children:s.jsx("pre",{className:"fill-blank-code",children:H.map((K,q)=>/^_{2,}$/.test(K)?s.jsx("input",{type:"text",className:`fill-blank-input ${k?A?"correct":"incorrect":""}`,value:m,onChange:B=>E(B.target.value),placeholder:"...",disabled:k&&A},q):s.jsx("span",{children:K},q))})})}return null};return s.jsxs("div",{className:"translation-exercise",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Pseudocode Hub"}),s.jsxs("div",{className:"exercise-header",children:[s.jsx("h1",{children:(h==null?void 0:h.title)||"Translation Exercise"}),s.jsxs("div",{className:"exercise-meta",children:[s.jsx("span",{className:`difficulty-badge ${c.difficulty}`,children:c.difficulty}),s.jsx("span",{className:"exercise-type-badge",children:c.type.replace(/-/g," ")}),i&&s.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),s.jsx("p",{className:"exercise-prompt-text",children:c.prompt}),c.type==="fill-blank"?G():c.type==="trace"||c.type==="multiple-choice"?s.jsxs("div",{className:"trace-exercise",children:[s.jsxs("div",{className:"code-panel full-width",children:[s.jsx("div",{className:"code-panel-header given",children:(X=c.given)!=null&&X.includes("←")||(J=c.given)!=null&&J.includes("DISPLAY")||(Z=c.given)!=null&&Z.includes("REPEAT")?"Pseudocode":"Code"}),s.jsx("div",{className:"code-panel-content",children:s.jsx("pre",{children:c.given})})]}),c.type==="multiple-choice"&&c.options?s.jsx("div",{className:"multiple-choice-options",children:c.options.map((H,K)=>s.jsxs("label",{className:`mc-option ${m===H?"selected":""} ${k?H===c.answer?"correct-answer":m===H&&!A?"wrong-answer":"":""}`,children:[s.jsx("input",{type:"radio",name:"mc-answer",value:H,checked:m===H,onChange:q=>E(q.target.value),disabled:k&&A}),s.jsx("span",{children:H})]},K))}):s.jsxs("div",{className:"trace-answer",children:[s.jsx("label",{children:"Your Answer:"}),s.jsx("input",{type:"text",value:m,onChange:H=>E(H.target.value),placeholder:"Enter the result...",disabled:k&&A,className:"trace-input"})]})]}):s.jsxs("div",{className:"code-panels",children:[s.jsxs("div",{className:"code-panel",children:[s.jsx("div",{className:"code-panel-header given",children:c.type==="pseudocode-to-js"?"Pseudocode":"JavaScript"}),s.jsx("div",{className:"code-panel-content",children:s.jsx("pre",{children:c.given})})]}),s.jsxs("div",{className:"code-panel",children:[s.jsx("div",{className:"code-panel-header answer",children:c.type==="pseudocode-to-js"?"Your JavaScript":"Your Pseudocode"}),s.jsx("div",{className:"code-panel-content",children:s.jsx("textarea",{value:m,onChange:H=>E(H.target.value),placeholder:"Type your answer here...",disabled:k&&A})})]})]}),(c.type==="pseudocode-to-js"||c.type==="js-to-pseudocode")&&s.jsx("div",{className:"format-help",children:s.jsxs("details",{children:[s.jsx("summary",{children:"Accepted formats"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("code",{children:"←"})," or ",s.jsx("code",{children:"<--"})," or ",s.jsx("code",{children:"<-"})," for assignment"]}),s.jsxs("li",{children:[s.jsx("code",{children:"DISPLAY(x)"})," or ",s.jsx("code",{children:"DISPLAY x"})," for output"]}),s.jsxs("li",{children:[s.jsx("code",{children:"≠"})," or ",s.jsx("code",{children:"!="})," or ",s.jsx("code",{children:"<>"})," for not equal"]}),s.jsxs("li",{children:[s.jsx("code",{children:"≥"})," or ",s.jsx("code",{children:">="})," and ",s.jsx("code",{children:"≤"})," or ",s.jsx("code",{children:"<="})]}),s.jsx("li",{children:"Spacing and newlines are flexible"})]})]})}),s.jsx("div",{className:"exercise-actions",children:k?s.jsx(s.Fragment,{children:!A&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"action-btn",onClick:te,children:"Try Again"}),(c.type==="pseudocode-to-js"||c.type==="js-to-pseudocode")&&s.jsx("button",{className:"action-btn highlight-btn",onClick:()=>M(!L),children:L?"Hide Errors":"Highlight Errors"}),x>=5&&s.jsx("button",{className:"action-btn skip-btn",onClick:oe,children:"Skip Activity →"})]})}):s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"action-btn",onClick:()=>p(!g),children:g?"Hide Hints":"Show Hints"}),s.jsx("button",{className:"action-btn primary",onClick:V,disabled:c.type==="fill-blank"&&c.blankAnswers?Object.keys(j).length===0:!m.trim(),children:"Check Answer"})]})}),g&&c.hints&&c.hints.length>0&&s.jsxs("div",{className:"hint-box",children:[s.jsx("h4",{children:"Hints"}),s.jsx("ul",{children:c.hints.slice(0,S+1).map((H,K)=>s.jsx("li",{children:H},K))}),S<c.hints.length-1&&s.jsx("button",{className:"action-btn",onClick:U,children:"Show Next Hint"})]}),k&&s.jsx("div",{className:`result-box ${A?"correct":"incorrect"}`,children:A?s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"✓ Correct!"}),s.jsx("p",{children:"Great job! You've mastered this translation."}),T&&r&&s.jsx("button",{className:"action-btn primary next-activity-btn",onClick:()=>r(T),children:"Next Activity →"}),!T&&s.jsx("p",{className:"completion-message",children:"You've completed all exercises in this section!"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"✗ Not Quite"}),s.jsx("p",{children:"Check your answer and try again."}),s.jsxs("p",{className:"attempt-counter",children:["Attempt ",x," of 5",x>=5&&" - You can now skip this activity"]})]})}),k&&!A&&s.jsxs("div",{className:"explanation-box",children:[s.jsx("h4",{children:"Explanation"}),s.jsx("p",{children:c.explanation})]})]})}const La=[{id:"trace-1",title:"Simple Counter",code:`count ← 0
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
DISPLAY(sum)`,steps:[{line:1,action:"list ← [3, 7, 2]",variables:{list:[3,7,2],sum:void 0},output:""},{line:2,action:"sum ← 0",variables:{list:[3,7,2],sum:0},output:""},{line:3,action:"FOR EACH item IN list (item=3)",variables:{list:[3,7,2],sum:0,item:3},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:3,item:3},output:""},{line:3,action:"FOR EACH item IN list (item=7)",variables:{list:[3,7,2],sum:3,item:7},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:10,item:7},output:""},{line:3,action:"FOR EACH item IN list (item=2)",variables:{list:[3,7,2],sum:10,item:2},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:12,item:2},output:""},{line:7,action:"DISPLAY(sum)",variables:{list:[3,7,2],sum:12,item:2},output:"12"}]}];function mx({onBack:e}){const[t,n]=I.useState(La[0]),[i,r]=I.useState(0),[a,l]=I.useState(!1),c=t.steps[i],h=Object.keys((c==null?void 0:c.variables)||{}),m=()=>{i<t.steps.length-1&&r(i+1)},E=()=>{i>0&&r(i-1)},j=()=>{r(0),l(!1)};return s.jsxs("div",{className:"code-tracer",children:[s.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ TRACE ]"}),s.jsx("h1",{children:"Code Tracer"}),s.jsx("p",{children:"Step through pseudocode and track variable values"})]}),s.jsxs("div",{className:"tracer-example-select",children:[s.jsx("label",{children:"Select Example:"}),s.jsx("select",{value:t.id,onChange:b=>{const k=La.find(C=>C.id===b.target.value);n(k),r(0)},children:La.map(b=>s.jsx("option",{value:b.id,children:b.title},b.id))})]}),s.jsxs("div",{className:"tracer-layout",children:[s.jsxs("div",{className:"tracer-code-panel",children:[s.jsx("h3",{children:"Code"}),s.jsx("pre",{className:"tracer-code",children:t.code.split(`
`).map((b,k)=>s.jsxs("div",{className:`code-line ${(c==null?void 0:c.line)===k+1?"current":""}`,children:[s.jsx("span",{className:"line-number",children:k+1}),s.jsx("span",{className:"line-content",children:b})]},k))})]}),s.jsxs("div",{className:"tracer-state-panel",children:[s.jsx("h3",{children:"Variables"}),s.jsxs("table",{className:"trace-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Variable"}),s.jsx("th",{children:"Value"})]})}),s.jsx("tbody",{children:h.map(b=>s.jsxs("tr",{children:[s.jsx("td",{children:b}),s.jsx("td",{children:(c==null?void 0:c.variables[b])===void 0?"—":JSON.stringify(c==null?void 0:c.variables[b])})]},b))})]}),s.jsx("h3",{children:"Output"}),s.jsx("div",{className:"tracer-output",children:s.jsx("pre",{children:(c==null?void 0:c.output)||"(no output yet)"})})]})]}),s.jsxs("div",{className:"tracer-controls",children:[s.jsx("button",{className:"tracer-btn",onClick:j,children:"Reset"}),s.jsx("button",{className:"tracer-btn",onClick:E,disabled:i===0,children:"← Prev"}),s.jsxs("span",{className:"step-counter",children:["Step ",i+1," / ",t.steps.length]}),s.jsx("button",{className:"tracer-btn",onClick:m,disabled:i===t.steps.length-1,children:"Next →"})]}),s.jsxs("div",{className:"current-action",children:[s.jsx("strong",{children:"Current Action:"})," ",c==null?void 0:c.action]})]})}const Oa=[{id:"robot-1",title:"Simple Path",description:"Move the robot to the goal (green square).",gridSize:5,start:{x:0,y:2,direction:"right"},goal:{x:4,y:2},obstacles:[],code:`REPEAT 4 TIMES
{
   MOVE_FORWARD()
}`,solution:["MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD"]},{id:"robot-2",title:"Turn and Move",description:"Navigate around to reach the goal.",gridSize:5,start:{x:0,y:0,direction:"right"},goal:{x:2,y:2},obstacles:[{x:1,y:0},{x:2,y:0}],code:`MOVE_FORWARD()
ROTATE_RIGHT()
MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()`,solution:["MOVE_FORWARD","ROTATE_RIGHT","MOVE_FORWARD","MOVE_FORWARD","ROTATE_LEFT","MOVE_FORWARD"]}];function gx({onBack:e}){const[t,n]=I.useState(Oa[0]),[i,r]=I.useState(t.start),[a,l]=I.useState(-1),[c,h]=I.useState(!1),m=()=>{r(t.start),l(-1),h(!1)},E=()=>{const k=t.solution;if(a>=k.length-1)return;const C=a+1,A=k[C];let _={...i};if(A==="MOVE_FORWARD")switch(i.direction){case"up":_.y=Math.max(0,i.y-1);break;case"down":_.y=Math.min(t.gridSize-1,i.y+1);break;case"left":_.x=Math.max(0,i.x-1);break;case"right":_.x=Math.min(t.gridSize-1,i.x+1);break}else if(A==="ROTATE_RIGHT"){const g=["up","right","down","left"],p=g.indexOf(i.direction);_.direction=g[(p+1)%4]}else if(A==="ROTATE_LEFT"){const g=["up","right","down","left"],p=g.indexOf(i.direction);_.direction=g[(p+3)%4]}r(_),l(C),_.x===t.goal.x&&_.y===t.goal.y&&h(!0)},j=()=>{m();let k=-1;const C=setInterval(()=>{if(k++,k>=t.solution.length){clearInterval(C);return}E()},500)},b=()=>{const k=[];for(let C=0;C<t.gridSize;C++)for(let A=0;A<t.gridSize;A++){const _=i.x===A&&i.y===C,g=t.goal.x===A&&t.goal.y===C,p=t.obstacles.some(R=>R.x===A&&R.y===C);let S="grid-cell";p&&(S+=" obstacle"),g&&(S+=" goal"),_&&(S+=" robot"),k.push(s.jsxs("div",{className:S,children:[_&&s.jsxs("span",{className:"robot-arrow",children:[i.direction==="up"&&"↑",i.direction==="down"&&"↓",i.direction==="left"&&"←",i.direction==="right"&&"→"]}),g&&!_&&"★"]},`${A}-${C}`))}return k};return s.jsxs("div",{className:"robot-grid-page",children:[s.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ ROBOT ]"}),s.jsx("h1",{children:"Robot Navigation"}),s.jsx("p",{children:"Practice AP CSP robot commands"})]}),s.jsxs("div",{className:"challenge-selector",children:[s.jsx("label",{children:"Challenge:"}),s.jsx("select",{value:t.id,onChange:k=>{const C=Oa.find(A=>A.id===k.target.value);n(C),r(C.start),l(-1),h(!1)},children:Oa.map(k=>s.jsx("option",{value:k.id,children:k.title},k.id))})]}),s.jsx("p",{className:"challenge-desc",children:t.description}),s.jsxs("div",{className:"robot-layout",children:[s.jsx("div",{className:"grid-container",children:s.jsx("div",{className:"robot-grid",style:{gridTemplateColumns:`repeat(${t.gridSize}, 1fr)`,gridTemplateRows:`repeat(${t.gridSize}, 1fr)`},children:b()})}),s.jsxs("div",{className:"code-panel",children:[s.jsx("h3",{children:"Pseudocode"}),s.jsx("pre",{children:t.code})]})]}),s.jsxs("div",{className:"robot-controls",children:[s.jsx("button",{className:"tracer-btn",onClick:m,children:"Reset"}),s.jsx("button",{className:"tracer-btn",onClick:E,disabled:c,children:"Step"}),s.jsx("button",{className:"tracer-btn primary",onClick:j,children:"Run All"})]}),c&&s.jsxs("div",{className:"result-box correct",children:[s.jsx("h3",{children:"✓ Goal Reached!"}),s.jsx("p",{children:"The robot successfully navigated to the goal."})]})]})}function yx({completedExercises:e=[],onSelectExercise:t,onSelectBuilder:n,onSelectSymbols:i,onBack:r}){const[a,l]=I.useState("all"),[c,h]=I.useState("learn"),m=new Set(e),E=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],j=I.useMemo(()=>Gt.filter(k=>!(a!=="all"&&k.difficulty!==a)),[a]),b={completed:m.size,total:Gt.length};return s.jsxs("div",{className:"flowchart-hub",children:[s.jsx("button",{className:"back-btn",onClick:r,children:"← Back to Dashboard"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ FLOW ]"}),s.jsx("h1",{children:"Flowcharts"}),s.jsx("p",{children:"Learn to read, interpret, and create flowcharts"})]}),s.jsxs("div",{className:"progress-bar-container",children:[s.jsxs("div",{className:"progress-label",children:["Overall Progress: ",b.completed," / ",b.total," exercises"]}),s.jsx("div",{className:"progress-bar",children:s.jsx("div",{className:"progress-fill apcsp",style:{width:`${b.completed/b.total*100}%`}})})]}),s.jsxs("div",{className:"hub-tabs",children:[s.jsx("button",{className:`hub-tab ${c==="learn"?"active":""}`,onClick:()=>h("learn"),children:"Learn Symbols"}),s.jsx("button",{className:`hub-tab ${c==="practice"?"active":""}`,onClick:()=>h("practice"),children:"Practice"}),s.jsx("button",{className:`hub-tab ${c==="builder"?"active":""}`,onClick:()=>h("builder"),children:"Build"})]}),c==="learn"&&s.jsxs("div",{className:"symbols-section",children:[s.jsx("h2",{children:"Flowchart Symbols"}),s.jsx("p",{className:"section-intro",children:"Learn the standard flowchart symbols used in AP CSP."}),s.jsx("div",{className:"symbols-grid",children:Al.map(k=>s.jsxs("div",{className:"symbol-card",style:{borderColor:k.color},children:[s.jsxs("div",{className:"symbol-shape",style:{color:k.color},children:[k.id==="oval"&&"⬭",k.id==="rectangle"&&"▭",k.id==="diamond"&&"◇",k.id==="parallelogram"&&"▱",k.id==="arrow"&&"→"]}),s.jsx("h3",{children:k.name}),s.jsx("p",{className:"symbol-purpose",children:k.purpose}),s.jsx("p",{className:"symbol-desc",children:k.description})]},k.id))}),s.jsx("button",{className:"action-btn",onClick:i,children:"View Full Symbol Guide →"})]}),c==="practice"&&s.jsxs("div",{className:"practice-section",children:[s.jsx("div",{className:"filter-bar",children:s.jsxs("div",{className:"filter-group",children:[s.jsx("label",{children:"Difficulty:"}),s.jsx("select",{value:a,onChange:k=>l(k.target.value),children:E.map(k=>s.jsx("option",{value:k.id,children:k.label},k.id))})]})}),s.jsx("div",{className:"exercises-list",children:j.map(k=>{const C=m.has(k.id);return s.jsxs("div",{className:`exercise-card ${C?"completed":""}`,onClick:()=>t(k.id),children:[s.jsx("div",{className:"exercise-status",children:C?"✓":"○"}),s.jsxs("div",{className:"exercise-content",children:[s.jsx("h4",{children:k.title}),s.jsx("p",{className:"exercise-type",children:k.type}),s.jsx("p",{className:"exercise-prompt",children:k.question})]}),s.jsx("div",{className:`difficulty-badge ${k.difficulty}`,children:k.difficulty})]},k.id)})})]}),c==="builder"&&s.jsx("div",{className:"builder-section",children:s.jsxs("div",{className:"builder-intro",children:[s.jsx("h2",{children:"Flowchart Builder"}),s.jsx("p",{children:"Create your own flowcharts using drag-and-drop!"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Drag symbols from the palette onto the canvas"}),s.jsx("li",{children:"Connect nodes with arrows to show flow"}),s.jsx("li",{children:"Edit text inside each shape"}),s.jsx("li",{children:"Export your flowchart as an image"})]}),s.jsx("button",{className:"action-btn primary",onClick:n,children:"Open Flowchart Builder →"})]})})]})}function vx({onBack:e}){const[t,n]=I.useState(Al[0].id);return s.jsxs("div",{className:"symbol-lesson",children:[s.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ SHAPES ]"}),s.jsx("h1",{children:"Flowchart Symbols"}),s.jsx("p",{children:"Learn the standard flowchart symbols used in AP CSP"})]}),s.jsx("div",{className:"symbols-detail-list",children:Al.map(i=>s.jsxs("div",{className:`symbol-detail-card ${t===i.id?"expanded":""}`,onClick:()=>n(t===i.id?null:i.id),children:[s.jsxs("div",{className:"symbol-header",children:[s.jsxs("div",{className:"symbol-preview",style:{color:i.color},children:[i.id==="oval"&&"⬭",i.id==="rectangle"&&"▭",i.id==="diamond"&&"◇",i.id==="parallelogram"&&"▱",i.id==="arrow"&&"→"]}),s.jsxs("div",{className:"symbol-info",children:[s.jsx("h3",{style:{color:i.color},children:i.name}),s.jsx("p",{children:i.purpose})]}),s.jsx("span",{className:"expand-icon",children:t===i.id?"−":"+"})]}),t===i.id&&s.jsxs("div",{className:"symbol-details",children:[s.jsx("p",{className:"symbol-description",children:i.description}),s.jsxs("div",{className:"symbol-examples",children:[s.jsx("h4",{children:"Examples:"}),s.jsx("ul",{children:i.examples.map((r,a)=>s.jsx("li",{children:r},a))})]})]})]},i.id))}),s.jsxs("div",{className:"symbol-tips",children:[s.jsx("h3",{children:"Tips for Reading Flowcharts"}),s.jsxs("ul",{children:[s.jsxs("li",{children:["Always start at the ",s.jsx("strong",{children:"oval"}),' labeled "Start"']}),s.jsxs("li",{children:["Follow the ",s.jsx("strong",{children:"arrows"})," to determine the order of operations"]}),s.jsxs("li",{children:["At a ",s.jsx("strong",{children:"diamond"}),", evaluate the condition to choose which path to follow"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Rectangles"})," contain actions - execute them in order"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Parallelograms"})," show input/output operations"]}),s.jsxs("li",{children:["End at the ",s.jsx("strong",{children:"oval"}),' labeled "End"']})]})]})]})}function xx({flowchartId:e,onBack:t}){return s.jsxs("div",{className:"flowchart-viewer",children:[s.jsx("button",{className:"back-btn",onClick:t,children:"← Back to Flowcharts"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("h1",{children:"Flowchart Viewer"}),s.jsx("p",{children:"View and study example flowcharts"})]}),s.jsx("div",{className:"flowchart-display",children:s.jsxs("div",{className:"coming-soon",children:[s.jsx("h2",{children:"Interactive Flowchart Viewer"}),s.jsx("p",{children:"This feature displays interactive flowcharts for studying."}),s.jsxs("p",{children:["Flowchart ID: ",e]})]})})]})}function wx({onBack:e}){var A;const[t,n]=I.useState([{id:"1",type:"oval",label:"Start",x:200,y:50},{id:"2",type:"rectangle",label:"Process",x:200,y:150},{id:"3",type:"oval",label:"End",x:200,y:250}]),[i,r]=I.useState(null),[a,l]=I.useState(null),c=I.useRef({x:0,y:0}),h=I.useRef(null),m=(_,g)=>{var R;_.preventDefault();const p=t.find(L=>L.id===g);if(!p)return;const S=(R=h.current)==null?void 0:R.getBoundingClientRect();S&&(c.current={x:_.clientX-S.left-p.x,y:_.clientY-S.top-p.y},l(g),r(g))},E=I.useCallback(_=>{if(!a||!h.current)return;const g=h.current.getBoundingClientRect(),p=_.clientX-g.left-c.current.x,S=_.clientY-g.top-c.current.y,R=Math.max(0,Math.min(p,g.width-100)),L=Math.max(0,Math.min(S,g.height-50));n(M=>M.map(x=>x.id===a?{...x,x:R,y:L}:x))},[a]),j=I.useCallback(()=>{l(null)},[]),b=_=>{const g={oval:"Start/End",rectangle:"Process",diamond:"Decision?",parallelogram:"Input/Output"},p={id:Date.now().toString(),type:_,label:g[_],x:200+Math.random()*100,y:100+Math.random()*200};n([...t,p])},k=(_,g)=>{n(t.map(p=>p.id===_?{...p,label:g}:p))},C=_=>{n(t.filter(g=>g.id!==_)),r(null)};return s.jsxs("div",{className:"flowchart-builder-page",children:[s.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),s.jsxs("div",{className:"hub-header",children:[s.jsx("div",{className:"hub-icon",children:"[ BUILD ]"}),s.jsx("h1",{children:"Flowchart Builder"}),s.jsx("p",{children:"Create your own flowcharts"})]}),s.jsxs("div",{className:"builder-layout",children:[s.jsxs("div",{className:"symbol-palette",children:[s.jsx("h3",{children:"Symbols"}),s.jsxs("button",{className:"palette-btn",onClick:()=>b("oval"),children:[s.jsx("span",{className:"symbol-icon",children:"⬭"})," Oval"]}),s.jsxs("button",{className:"palette-btn",onClick:()=>b("rectangle"),children:[s.jsx("span",{className:"symbol-icon",children:"▭"})," Rectangle"]}),s.jsxs("button",{className:"palette-btn",onClick:()=>b("diamond"),children:[s.jsx("span",{className:"symbol-icon",children:"◇"})," Diamond"]}),s.jsxs("button",{className:"palette-btn",onClick:()=>b("parallelogram"),children:[s.jsx("span",{className:"symbol-icon",children:"▱"})," Parallelogram"]})]}),s.jsx("div",{className:"builder-canvas",children:s.jsx("div",{className:"canvas-area",ref:h,onMouseMove:E,onMouseUp:j,onMouseLeave:j,children:t.map(_=>s.jsxs("div",{className:`builder-node ${_.type} ${i===_.id?"selected":""} ${a===_.id?"dragging":""}`,style:{left:_.x,top:_.y},onMouseDown:g=>m(g,_.id),children:[_.type==="oval"&&s.jsx("span",{className:"node-shape oval-shape",children:_.label}),_.type==="rectangle"&&s.jsx("span",{className:"node-shape rect-shape",children:_.label}),_.type==="diamond"&&s.jsx("span",{className:"node-shape diamond-shape",children:_.label}),_.type==="parallelogram"&&s.jsx("span",{className:"node-shape para-shape",children:_.label})]},_.id))})}),i&&s.jsxs("div",{className:"node-editor",children:[s.jsx("h3",{children:"Edit Node"}),s.jsx("input",{type:"text",value:((A=t.find(_=>_.id===i))==null?void 0:A.label)||"",onChange:_=>k(i,_.target.value),placeholder:"Enter label..."}),s.jsx("button",{className:"action-btn",onClick:()=>C(i),children:"Delete Node"})]})]}),s.jsx("div",{className:"builder-tips",children:s.jsx("p",{children:"Click a symbol to add it. Drag nodes to move them. Click a node to edit or delete it."})})]})}function jx({exerciseId:e,onComplete:t,onBack:n,isCompleted:i,onNextExercise:r,allExerciseIds:a=[],onSubmit:l}){const c=Gt.find(P=>P.id===e),[h,m]=I.useState(""),[E,j]=I.useState(!1),[b,k]=I.useState(!1),[C,A]=I.useState(!1),[_,g]=I.useState(0),[p,S]=I.useState(0);I.useEffect(()=>{m(""),j(!1),k(!1),A(!1),g(0),S(0)},[e]);const L=(()=>{if(!a||a.length===0){const N=Gt.findIndex(v=>v.id===e);return N>=0&&N<Gt.length-1?Gt[N+1].id:null}const P=a.indexOf(e);return P>=0&&P<a.length-1?a[P+1]:null})(),M=I.useMemo(()=>c!=null&&c.flowchartRef?My.find(P=>P.id===c.flowchartRef):null,[c]);if(!c)return s.jsxs("div",{className:"flowchart-exercise",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),s.jsx("div",{className:"error-message",children:s.jsx("h1",{children:"Exercise Not Found"})})]});const x=(P,N)=>{const v=J=>J.toString().toLowerCase().trim().replace(/\s+/g," ").replace(/\s*=\s*/g,"=").replace(/[,;\n]+/g,",").replace(/\s*,\s*/g,","),Q=v(P),V=v(N);if(Q===V)return!0;if(V.includes("=")){const J=K=>{const q=K.split(",").filter(B=>B.includes("="));return new Set(q.map(B=>B.trim()))},Z=J(Q),H=J(V);if(Z.size===H.size){let K=!0;if(H.forEach(q=>{Z.has(q)||(K=!1)}),K)return!0}}const te=Q.match(/\d+/g)||[],oe=V.match(/\d+/g)||[];if(te.length===1&&oe.length===1&&te[0]===oe[0])return!0;const U=J=>J.replace(/[^a-z0-9]/g,"");if(U(Q)===U(V))return!0;const X=V.split(/[\s()]+/).filter(J=>J.length>0)[0];return!!(Q.includes(X)||X.includes(Q))},f=()=>{var N;let P=x(h,c.answer);!P&&c.acceptableAnswers&&(P=c.acceptableAnswers.some(v=>x(h,v))),k(P),j(!0),P||S(v=>v+1),l&&l({exerciseId:c.id,answer:h,isCorrect:P,exerciseType:"flowchart",exerciseTitle:((N=c.question)==null?void 0:N.substring(0,50))||c.id}),P&&!i&&t(c.id,10)},w=()=>{j(!1),k(!1)},T=()=>{L&&r?r(L):n()};return s.jsxs("div",{className:"flowchart-exercise",children:[s.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Flowcharts"}),s.jsxs("div",{className:"exercise-header",children:[s.jsx("h1",{children:c.title}),s.jsxs("div",{className:"exercise-meta",children:[s.jsx("span",{className:`difficulty-badge ${c.difficulty}`,children:c.difficulty}),s.jsx("span",{className:"exercise-type-badge",children:c.type}),i&&s.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),s.jsx("p",{className:"exercise-description",children:c.description}),M&&s.jsxs("div",{className:"flowchart-reference",children:[s.jsx("h3",{children:"Flowchart"}),s.jsx(xx,{flowchartData:M,showBackButton:!1})]}),s.jsxs("div",{className:"flowchart-question",children:[s.jsx("h3",{children:"Question"}),s.jsx("p",{className:"question-text",children:c.question})]}),s.jsxs("div",{className:"answer-section",children:[s.jsx("label",{children:"Your Answer:"}),s.jsx("input",{type:"text",value:h,onChange:P=>m(P.target.value),placeholder:"Type your answer...",disabled:E&&b,onKeyPress:P=>P.key==="Enter"&&h.trim()&&f()})]}),s.jsx("div",{className:"exercise-actions",children:E?s.jsx(s.Fragment,{children:!b&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"action-btn",onClick:w,children:"Try Again"}),p>=5&&s.jsx("button",{className:"action-btn skip-btn",onClick:T,children:"Skip Activity →"})]})}):s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"action-btn",onClick:()=>A(!C),children:C?"Hide Hints":"Show Hints"}),s.jsx("button",{className:"action-btn primary",onClick:f,disabled:!h.trim(),children:"Check Answer"})]})}),C&&c.hints&&c.hints.length>0&&s.jsxs("div",{className:"hint-box",children:[s.jsx("h4",{children:"Hints"}),s.jsx("ul",{children:c.hints.slice(0,_+1).map((P,N)=>s.jsx("li",{children:P},N))}),_<c.hints.length-1&&s.jsx("button",{className:"action-btn",onClick:()=>g(_+1),children:"Show Next Hint"})]}),E&&s.jsx("div",{className:`result-box ${b?"correct":"incorrect"}`,children:b?s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"✓ Correct!"}),s.jsx("p",{children:"You correctly interpreted the flowchart."}),L&&r&&s.jsx("button",{className:"action-btn primary next-activity-btn",onClick:()=>r(L),children:"Next Activity →"}),!L&&s.jsx("p",{className:"completion-message",children:"You've completed all flowchart exercises!"})]}):s.jsxs(s.Fragment,{children:[s.jsx("h3",{children:"✗ Not Quite"}),s.jsx("p",{children:"Check your answer and try again."}),s.jsxs("p",{className:"attempt-counter",children:["Attempt ",p," of 5",p>=5&&" - You can now skip this activity"]})]})}),E&&c.explanation&&s.jsxs("div",{className:"explanation-box",children:[s.jsx("h4",{children:"Explanation"}),s.jsx("p",{children:c.explanation})]})]})}function bx(){Dc();const[e,t]=I.useState(null),[n,i]=I.useState(null),[r,a]=I.useState(null),[l,c]=I.useState(!1),[h,m]=I.useState(!1),[E,j]=I.useState("dashboard"),[b,k]=I.useState(null),[C,A]=I.useState(null),[_,g]=I.useState([]),[p,S]=I.useState([]),[R,L]=I.useState([]),[M,x]=I.useState(0),f=I.useRef(null),[w,T]=I.useState([]),[P,N]=I.useState(null),[v,Q]=I.useState(null),[V,te]=I.useState([]),[oe,U]=I.useState([]),[G,X]=I.useState({}),[J,Z]=I.useState(null),[H,K]=I.useState(null),[q,B]=I.useState(null);I.useEffect(()=>{const W=localStorage.getItem("cyberrange-session");if(W)try{const Ee=JSON.parse(W);Ee.user&&(t(Ee.user),Y(Ee.user))}catch(Ee){console.error("Error loading session:",Ee)}const ne=localStorage.getItem("cyberrange-teacher-session");if(ne)try{const Ee=JSON.parse(ne);Ee.teacher&&i(Ee.teacher)}catch(Ee){console.error("Error loading teacher session:",Ee)}return()=>{f.current&&(f.current(),f.current=null)}},[]);const Y=async W=>{if(ie(),W.classCode){T([]);const ne=Pf(W.classCode,Ee=>{T(Ee)});f.current=ne}},ie=()=>{const W=localStorage.getItem("cyberrange-progress");if(W)try{const ne=JSON.parse(W);g(ne.completed||[]),S(ne.completedScenarios||[]),L(ne.completedExercises||[]),te(ne.completedPseudocode||[]),U(ne.completedFlowcharts||[]),X(ne.exitTicketResponses||{}),x(ne.points||0)}catch(ne){console.error("Error loading local progress:",ne)}},ve=I.useCallback(async(W,ne,Ee,Rt,tr,zs,nr)=>{localStorage.setItem("cyberrange-progress",JSON.stringify({completed:W,completedScenarios:ne,completedExercises:Ee,completedPseudocode:Rt,completedFlowcharts:tr,exitTicketResponses:zs,points:nr}))},[e]);I.useEffect(()=>{e&&ve(_,p,R,V,oe,G,M)},[_,p,R,V,oe,G,M,e,ve]);const ke=W=>{f.current&&(f.current(),f.current=null),t(W),localStorage.setItem("cyberrange-session",JSON.stringify({user:W})),W.completedChallenges&&(g(W.completedChallenges),S(W.completedScenarios||[]),L(W.completedExercises||[]),x(W.totalPoints||0)),Y(W)},be=W=>{i(W),c(!1),localStorage.setItem("cyberrange-teacher-session",JSON.stringify({teacher:W}))},ut=W=>{a(W)},nn=()=>{a(null)},Dt=()=>{i(null),a(null),c(!1),localStorage.removeItem("cyberrange-teacher-session")},Ht=()=>{f.current&&(f.current(),f.current=null),t(null),a(null),g([]),S([]),L([]),te([]),U([]),X({}),T([]),x(0),j("dashboard"),N(null),Q(null),Z(null),K(null),B(null),localStorage.removeItem("cyberrange-session")},sn=W=>{k(W),j("challenges")},Uo=W=>{A(W),j("challenge-detail")},Ho=(W,ne)=>{_.includes(W)||(g([..._,W]),x(M+ne))},Xi=()=>{A(null),j("challenges")},An=()=>{k(null),A(null),j("dashboard")},Ki=(W,ne)=>{p.includes(W)||(S([...p,W]),x(M+ne))},Bo=()=>{window.confirm("Are you sure you want to reset all progress? This cannot be undone.")&&(g([]),S([]),L([]),te([]),U([]),X({}),x(0),localStorage.removeItem("cyberrange-progress"),j("dashboard"))},Os=W=>{N(W),j("week")},Ms=W=>{Q(W),j("exercise-detail")},Qi=(W,ne)=>{R.includes(W)||(L([...R,W]),x(M+ne))},Ie=(W,ne,Ee)=>{X(Rt=>({...Rt,[W]:ne}))},_e=()=>{Q(null),j("week")},Kn=()=>{N(null),j("dashboard")},qi=W=>{j(W==="pseudocode"?"pseudocode-hub":"flowchart-hub")},Ji=W=>{Z(W),j("topic-lesson")},Fs=W=>{K(W),j("pseudocode-exercise")},In=(W,ne)=>{V.includes(W)||(te([...V,W]),x(M+ne))},Us=W=>{B(W),j("flowchart-exercise")},Zi=(W,ne)=>{oe.includes(W)||(U([...oe,W]),x(M+ne))},rn=async W=>{if(!(!e||e.id==="demo"))try{await fv(e.id,W.exerciseId,{answer:W.answer,isCorrect:W.isCorrect,exerciseType:W.exerciseType,exerciseTitle:W.exerciseTitle})}catch(ne){console.error("Error saving submission:",ne)}},Hs=()=>{j("dashboard")},zo=()=>{j("dashboard")},Bs=()=>{Z(null),j("pseudocode-hub")},er=()=>{K(null),j("pseudocode-hub")},Wo=()=>{B(null),j("flowchart-hub")};return l?s.jsx(Nv,{onLogin:be,onBack:()=>c(!1)}):n&&!r?s.jsx(Tv,{teacher:n,onSelectClass:ut,onLogout:Dt}):n&&r?s.jsx(ox,{classCode:r,onBack:nn}):e?s.jsxs("div",{className:"app",children:[s.jsx("header",{className:"header",children:s.jsxs("div",{className:"header-content",children:[s.jsx("div",{className:"logo",children:"CyberEd Range"}),s.jsxs("nav",{className:"nav",children:[s.jsx("button",{className:`nav-btn ${E==="dashboard"?"active":""}`,onClick:An,children:"Dashboard"}),s.jsx("button",{className:`nav-btn ${E==="network-monitor"?"active":""}`,onClick:()=>j("network-monitor"),children:"Network Monitor"}),s.jsx("button",{className:`nav-btn ${E==="tools"?"active":""}`,onClick:()=>j("tools"),children:"Tools"}),s.jsx("button",{className:`nav-btn ${E==="vocabulary"?"active":""}`,onClick:()=>j("vocabulary"),children:"Vocabulary"}),s.jsx("button",{className:"nav-btn theme-btn",onClick:()=>m(!0),title:"Change Theme",children:"Theme"}),s.jsx("button",{className:"nav-btn",onClick:Bo,style:{background:"rgba(244, 67, 54, 0.2)",borderColor:"#f44336"},children:"Reset"}),s.jsxs("div",{className:"user-info",children:[s.jsx("span",{className:"user-name",children:e==null?void 0:e.name}),s.jsx("span",{className:"user-class",children:e==null?void 0:e.classCode}),s.jsx("button",{className:"logout-btn",onClick:Ht,children:"Logout"})]})]})]})}),s.jsxs("main",{className:"main-content",children:[E==="dashboard"&&s.jsx(Fy,{studentName:e==null?void 0:e.name,totalPoints:M,assignments:w,completedChallenges:_,completedScenarios:p,completedExercises:R,completedPseudocode:V,completedFlowcharts:oe,onSelectCategory:sn,onSelectNetworkMonitor:()=>j("network-monitor"),onSelectWeek:Os,onSelectAPCSP:qi}),E==="challenges"&&b&&s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"back-btn",onClick:An,children:"Back to Dashboard"}),s.jsx("div",{style:{marginTop:"1rem"},children:s.jsx(Ev,{category:b,completedChallenges:_,onSelectChallenge:Uo})})]}),E==="challenge-detail"&&C&&s.jsx(Pv,{challengeId:C,onComplete:Ho,onBack:Xi,isCompleted:_.includes(C),onSubmit:rn}),E==="week"&&P&&s.jsx(ux,{weekKey:P,onSelectExercise:Ms,onBack:Kn,completedExercises:R,exitTicketResponses:G,onSubmitExitTicket:Ie}),E==="exercise-detail"&&v&&s.jsx(dx,{exerciseId:v,onComplete:Qi,onBack:_e,isCompleted:R.includes(v),onSubmit:rn}),E==="vocabulary"&&s.jsx(Av,{}),E==="tools"&&s.jsx(ex,{}),E==="network-monitor"&&s.jsx(Gv,{completedScenarios:p,onCompleteScenario:Ki,onBack:An}),E==="pseudocode-hub"&&s.jsx(hx,{completedExercises:V,onSelectTopic:Ji,onSelectExercise:Fs,onBack:Hs}),E==="topic-lesson"&&J&&s.jsx(px,{topicId:J,onBack:Bs,onSelectExercise:Fs}),E==="pseudocode-exercise"&&H&&s.jsx(fx,{exerciseId:H,onComplete:In,onBack:er,isCompleted:V.includes(H),onNextExercise:Fs,onSubmit:rn}),E==="code-tracer"&&s.jsx(mx,{onBack:Hs}),E==="robot-grid"&&s.jsx(gx,{onBack:Hs}),E==="flowchart-hub"&&s.jsx(yx,{completedExercises:oe,onSelectExercise:Us,onSelectBuilder:()=>j("flowchart-builder"),onSelectSymbols:()=>j("symbol-lesson"),onBack:zo}),E==="symbol-lesson"&&s.jsx(vx,{onBack:()=>j("flowchart-hub")}),E==="flowchart-exercise"&&q&&s.jsx(jx,{exerciseId:q,onComplete:Zi,onBack:Wo,isCompleted:oe.includes(q),onNextExercise:Us,onSubmit:rn}),E==="flowchart-builder"&&s.jsx(wx,{onBack:()=>j("flowchart-hub")})]}),h&&s.jsx(Ic,{onClose:()=>m(!1)})]}):s.jsx(tx,{onLogin:ke,onTeacherLogin:()=>c(!0)})}Ma.createRoot(document.getElementById("root")).render(s.jsx(vm.StrictMode,{children:s.jsx(bx,{})}));
