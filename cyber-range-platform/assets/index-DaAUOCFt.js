(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Yf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gd={exports:{}},ao={},Yd={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ii=Symbol.for("react.element"),Xf=Symbol.for("react.portal"),Kf=Symbol.for("react.fragment"),Qf=Symbol.for("react.strict_mode"),qf=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),em=Symbol.for("react.forward_ref"),tm=Symbol.for("react.suspense"),nm=Symbol.for("react.memo"),sm=Symbol.for("react.lazy"),pu=Symbol.iterator;function im(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var Xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kd=Object.assign,Qd={};function ks(e,t,n){this.props=e,this.context=t,this.refs=Qd,this.updater=n||Xd}ks.prototype.isReactComponent={};ks.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ks.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qd(){}qd.prototype=ks.prototype;function Nl(e,t,n){this.props=e,this.context=t,this.refs=Qd,this.updater=n||Xd}var Tl=Nl.prototype=new qd;Tl.constructor=Nl;Kd(Tl,ks.prototype);Tl.isPureReactComponent=!0;var fu=Array.isArray,Jd=Object.prototype.hasOwnProperty,El={current:null},Zd={key:!0,ref:!0,__self:!0,__source:!0};function eh(e,t,n){var s,r={},a=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Jd.call(t,s)&&!Zd.hasOwnProperty(s)&&(r[s]=t[s]);var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){for(var h=Array(u),p=0;p<u;p++)h[p]=arguments[p+2];r.children=h}if(e&&e.defaultProps)for(s in u=e.defaultProps,u)r[s]===void 0&&(r[s]=u[s]);return{$$typeof:Ii,type:e,key:a,ref:l,props:r,_owner:El.current}}function rm(e,t){return{$$typeof:Ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ii}function om(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mu=/\/+/g;function Yo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?om(""+e.key):t.toString(36)}function xr(e,t,n,s,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ii:case Xf:l=!0}}if(l)return l=e,r=r(l),e=s===""?"."+Yo(l,0):s,fu(r)?(n="",e!=null&&(n=e.replace(mu,"$&/")+"/"),xr(r,t,n,"",function(p){return p})):r!=null&&(Pl(r)&&(r=rm(r,n+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(mu,"$&/")+"/")+e)),t.push(r)),1;if(l=0,s=s===""?".":s+":",fu(e))for(var u=0;u<e.length;u++){a=e[u];var h=s+Yo(a,u);l+=xr(a,t,n,h,r)}else if(h=im(e),typeof h=="function")for(e=h.call(e),u=0;!(a=e.next()).done;)a=a.value,h=s+Yo(a,u++),l+=xr(a,t,n,h,r);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function tr(e,t,n){if(e==null)return e;var s=[],r=0;return xr(e,s,"","",function(a){return t.call(n,a,r++)}),s}function am(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},wr={transition:null},lm={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:wr,ReactCurrentOwner:El};function th(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:tr,forEach:function(e,t,n){tr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return tr(e,function(){t++}),t},toArray:function(e){return tr(e,function(t){return t})||[]},only:function(e){if(!Pl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=ks;X.Fragment=Kf;X.Profiler=qf;X.PureComponent=Nl;X.StrictMode=Qf;X.Suspense=tm;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lm;X.act=th;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Kd({},e.props),r=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=El.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(h in t)Jd.call(t,h)&&!Zd.hasOwnProperty(h)&&(s[h]=t[h]===void 0&&u!==void 0?u[h]:t[h])}var h=arguments.length-2;if(h===1)s.children=n;else if(1<h){u=Array(h);for(var p=0;p<h;p++)u[p]=arguments[p+2];s.children=u}return{$$typeof:Ii,type:e.type,key:r,ref:a,props:s,_owner:l}};X.createContext=function(e){return e={$$typeof:Zf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jf,_context:e},e.Consumer=e};X.createElement=eh;X.createFactory=function(e){var t=eh.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:em,render:e}};X.isValidElement=Pl;X.lazy=function(e){return{$$typeof:sm,_payload:{_status:-1,_result:e},_init:am}};X.memo=function(e,t){return{$$typeof:nm,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};X.unstable_act=th;X.useCallback=function(e,t){return Ve.current.useCallback(e,t)};X.useContext=function(e){return Ve.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ve.current.useEffect(e,t)};X.useId=function(){return Ve.current.useId()};X.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ve.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};X.useRef=function(e){return Ve.current.useRef(e)};X.useState=function(e){return Ve.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ve.current.useTransition()};X.version="18.3.1";Yd.exports=X;var R=Yd.exports;const cm=Yf(R);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=R,dm=Symbol.for("react.element"),hm=Symbol.for("react.fragment"),pm=Object.prototype.hasOwnProperty,fm=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mm={key:!0,ref:!0,__self:!0,__source:!0};function nh(e,t,n){var s,r={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)pm.call(t,s)&&!mm.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)r[s]===void 0&&(r[s]=t[s]);return{$$typeof:dm,type:e,key:a,ref:l,props:r,_owner:fm.current}}ao.Fragment=hm;ao.jsx=nh;ao.jsxs=nh;Gd.exports=ao;var i=Gd.exports,Ta={},sh={exports:{}},it={},ih={exports:{}},rh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(H,z){var $=H.length;H.push(z);e:for(;0<$;){var ne=$-1>>>1,q=H[ne];if(0<r(q,z))H[ne]=z,H[$]=q,$=ne;else break e}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var z=H[0],$=H.pop();if($!==z){H[0]=$;e:for(var ne=0,q=H.length,ae=q>>>1;ne<ae;){var Je=2*(ne+1)-1,Ge=H[Je],V=Je+1,Y=H[V];if(0>r(Ge,$))V<q&&0>r(Y,Ge)?(H[ne]=Y,H[V]=$,ne=V):(H[ne]=Ge,H[Je]=$,ne=Je);else if(V<q&&0>r(Y,$))H[ne]=Y,H[V]=$,ne=V;else break e}}return z}function r(H,z){var $=H.sortIndex-z.sortIndex;return $!==0?$:H.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var h=[],p=[],P=1,N=null,k=3,E=!1,j=!1,I=!1,L=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(H){for(var z=n(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=H)s(p),z.sortIndex=z.expirationTime,t(h,z);else break;z=n(p)}}function D(H){if(I=!1,b(H),!j)if(n(h)!==null)j=!0,pe(M);else{var z=n(p);z!==null&&ve(D,z.startTime-H)}}function M(H,z){j=!1,I&&(I=!1,m(f),f=-1),E=!0;var $=k;try{for(b(z),N=n(h);N!==null&&(!(N.expirationTime>z)||H&&!C());){var ne=N.callback;if(typeof ne=="function"){N.callback=null,k=N.priorityLevel;var q=ne(N.expirationTime<=z);z=e.unstable_now(),typeof q=="function"?N.callback=q:N===n(h)&&s(h),b(z)}else s(h);N=n(h)}if(N!==null)var ae=!0;else{var Je=n(p);Je!==null&&ve(D,Je.startTime-z),ae=!1}return ae}finally{N=null,k=$,E=!1}}var F=!1,S=null,f=-1,v=5,y=-1;function C(){return!(e.unstable_now()-y<v)}function T(){if(S!==null){var H=e.unstable_now();y=H;var z=!0;try{z=S(!0,H)}finally{z?x():(F=!1,S=null)}}else F=!1}var x;if(typeof w=="function")x=function(){w(T)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,K=G.port2;G.port1.onmessage=T,x=function(){K.postMessage(null)}}else x=function(){L(T,0)};function pe(H){S=H,F||(F=!0,x())}function ve(H,z){f=L(function(){H(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_continueExecution=function(){j||E||(j=!0,pe(M))},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return n(h)},e.unstable_next=function(H){switch(k){case 1:case 2:case 3:var z=3;break;default:z=k}var $=k;k=z;try{return H()}finally{k=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(H,z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var $=k;k=H;try{return z()}finally{k=$}},e.unstable_scheduleCallback=function(H,z,$){var ne=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,H){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=$+q,H={id:P++,callback:z,priorityLevel:H,startTime:$,expirationTime:q,sortIndex:-1},$>ne?(H.sortIndex=$,t(p,H),n(h)===null&&H===n(p)&&(I?(m(f),f=-1):I=!0,ve(D,$-ne))):(H.sortIndex=q,t(h,H),j||E||(j=!0,pe(M))),H},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(H){var z=k;return function(){var $=k;k=z;try{return H.apply(this,arguments)}finally{k=$}}}})(rh);ih.exports=rh;var gm=ih.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=R,st=gm;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oh=new Set,pi={};function On(e,t){ps(e,t),ps(e+"Capture",t)}function ps(e,t){for(pi[e]=t,e=0;e<t.length;e++)oh.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,vm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gu={},yu={};function xm(e){return Ea.call(yu,e)?!0:Ea.call(gu,e)?!1:vm.test(e)?yu[e]=!0:(gu[e]=!0,!1)}function wm(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function km(e,t,n,s){if(t===null||typeof t>"u"||wm(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,s,r,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var De={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){De[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];De[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){De[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){De[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){De[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){De[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){De[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){De[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){De[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Al=/[\-:]([a-z])/g;function Il(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Al,Il);De[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Al,Il);De[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Al,Il);De[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){De[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});De.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){De[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rl(e,t,n,s){var r=De.hasOwnProperty(t)?De[t]:null;(r!==null?r.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(km(t,n,r,s)&&(n=null),s||r===null?xm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,s=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var $t=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nr=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Yn=Symbol.for("react.fragment"),Dl=Symbol.for("react.strict_mode"),Pa=Symbol.for("react.profiler"),ah=Symbol.for("react.provider"),lh=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),Aa=Symbol.for("react.suspense"),Ia=Symbol.for("react.suspense_list"),Ll=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),ch=Symbol.for("react.offscreen"),vu=Symbol.iterator;function Ws(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Xo;function qs(e){if(Xo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xo=t&&t[1]||""}return`
`+Xo+e}var Ko=!1;function Qo(e,t){if(!e||Ko)return"";Ko=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var s=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){s=p}e.call(t.prototype)}else{try{throw Error()}catch(p){s=p}e()}}catch(p){if(p&&s&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),a=s.stack.split(`
`),l=r.length-1,u=a.length-1;1<=l&&0<=u&&r[l]!==a[u];)u--;for(;1<=l&&0<=u;l--,u--)if(r[l]!==a[u]){if(l!==1||u!==1)do if(l--,u--,0>u||r[l]!==a[u]){var h=`
`+r[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=u);break}}}finally{Ko=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qs(e):""}function jm(e){switch(e.tag){case 5:return qs(e.type);case 16:return qs("Lazy");case 13:return qs("Suspense");case 19:return qs("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function Ra(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yn:return"Fragment";case Gn:return"Portal";case Pa:return"Profiler";case Dl:return"StrictMode";case Aa:return"Suspense";case Ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lh:return(e.displayName||"Context")+".Consumer";case ah:return(e._context.displayName||"Context")+".Provider";case _l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ll:return t=e.displayName||null,t!==null?t:Ra(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Ra(e(t))}catch{}}return null}function Sm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ra(t);case 8:return t===Dl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cm(e){var t=uh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=Cm(e))}function dh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=uh(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Da(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function hh(e,t){t=t.checked,t!=null&&Rl(e,"checked",t,!1)}function _a(e,t){hh(e,t);var n=pn(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?La(e,t.type,n):t.hasOwnProperty("defaultValue")&&La(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function La(e,t,n){(t!=="number"||Ir(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Js=Array.isArray;function is(e,t,n,s){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&s&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Oa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ku(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(Js(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function ph(e,t){var n=pn(t.value),s=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ma(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ir,mh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ir=ir||document.createElement("div"),ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bm=["Webkit","ms","Moz","O"];Object.keys(ni).forEach(function(e){bm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ni[t]=ni[e]})});function gh(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ni.hasOwnProperty(e)&&ni[e]?(""+t).trim():t+"px"}function yh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,r=gh(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,r):e[n]=r}}var Nm=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fa(e,t){if(t){if(Nm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function Ua(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function Ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ba=null,rs=null,os=null;function Su(e){if(e=_i(e)){if(typeof Ba!="function")throw Error(O(280));var t=e.stateNode;t&&(t=po(t),Ba(e.stateNode,e.type,t))}}function vh(e){rs?os?os.push(e):os=[e]:rs=e}function xh(){if(rs){var e=rs,t=os;if(os=rs=null,Su(e),t)for(e=0;e<t.length;e++)Su(t[e])}}function wh(e,t){return e(t)}function kh(){}var qo=!1;function jh(e,t,n){if(qo)return e(t,n);qo=!0;try{return wh(e,t,n)}finally{qo=!1,(rs!==null||os!==null)&&(kh(),xh())}}function mi(e,t){var n=e.stateNode;if(n===null)return null;var s=po(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var za=!1;if(Ht)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){za=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{za=!1}function Tm(e,t,n,s,r,a,l,u,h){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(P){this.onError(P)}}var si=!1,Rr=null,Dr=!1,Wa=null,Em={onError:function(e){si=!0,Rr=e}};function Pm(e,t,n,s,r,a,l,u,h){si=!1,Rr=null,Tm.apply(Em,arguments)}function Am(e,t,n,s,r,a,l,u,h){if(Pm.apply(this,arguments),si){if(si){var p=Rr;si=!1,Rr=null}else throw Error(O(198));Dr||(Dr=!0,Wa=p)}}function Mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cu(e){if(Mn(e)!==e)throw Error(O(188))}function Im(e){var t=e.alternate;if(!t){if(t=Mn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,s=t;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(s=r.return,s!==null){n=s;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Cu(r),e;if(a===s)return Cu(r),t;a=a.sibling}throw Error(O(188))}if(n.return!==s.return)n=r,s=a;else{for(var l=!1,u=r.child;u;){if(u===n){l=!0,n=r,s=a;break}if(u===s){l=!0,s=r,n=a;break}u=u.sibling}if(!l){for(u=a.child;u;){if(u===n){l=!0,n=a,s=r;break}if(u===s){l=!0,s=a,n=r;break}u=u.sibling}if(!l)throw Error(O(189))}}if(n.alternate!==s)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Ch(e){return e=Im(e),e!==null?bh(e):null}function bh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bh(e);if(t!==null)return t;e=e.sibling}return null}var Nh=st.unstable_scheduleCallback,bu=st.unstable_cancelCallback,Rm=st.unstable_shouldYield,Dm=st.unstable_requestPaint,we=st.unstable_now,_m=st.unstable_getCurrentPriorityLevel,Ml=st.unstable_ImmediatePriority,Th=st.unstable_UserBlockingPriority,_r=st.unstable_NormalPriority,Lm=st.unstable_LowPriority,Eh=st.unstable_IdlePriority,lo=null,It=null;function Om(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(lo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Um,Mm=Math.log,Fm=Math.LN2;function Um(e){return e>>>=0,e===0?32:31-(Mm(e)/Fm|0)|0}var rr=64,or=4194304;function Zs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lr(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~r;u!==0?s=Zs(u):(a&=l,a!==0&&(s=Zs(a)))}else l=n&~r,l!==0?s=Zs(l):a!==0&&(s=Zs(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&r)&&(r=s&-s,a=t&-t,r>=a||r===16&&(a&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-Ct(t),r=1<<n,s|=e[n],t&=~r;return s}function Hm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bm(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Ct(a),u=1<<l,h=r[l];h===-1?(!(u&n)||u&s)&&(r[l]=Hm(u,t)):h<=t&&(e.expiredLanes|=u),a&=~u}}function Va(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ph(){var e=rr;return rr<<=1,!(rr&4194240)&&(rr=64),e}function Jo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function zm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Ct(n),a=1<<r;t[r]=0,s[r]=-1,e[r]=-1,n&=~a}}function Fl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Ct(n),r=1<<s;r&t|e[s]&t&&(e[s]|=t),n&=~r}}var te=0;function Ah(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ih,Ul,Rh,Dh,_h,$a=!1,ar=[],nn=null,sn=null,rn=null,gi=new Map,yi=new Map,Jt=[],Wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function $s(e,t,n,s,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:a,targetContainers:[r]},t!==null&&(t=_i(t),t!==null&&Ul(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Vm(e,t,n,s,r){switch(t){case"focusin":return nn=$s(nn,e,t,n,s,r),!0;case"dragenter":return sn=$s(sn,e,t,n,s,r),!0;case"mouseover":return rn=$s(rn,e,t,n,s,r),!0;case"pointerover":var a=r.pointerId;return gi.set(a,$s(gi.get(a)||null,e,t,n,s,r)),!0;case"gotpointercapture":return a=r.pointerId,yi.set(a,$s(yi.get(a)||null,e,t,n,s,r)),!0}return!1}function Lh(e){var t=Nn(e.target);if(t!==null){var n=Mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Sh(n),t!==null){e.blockedOn=t,_h(e.priority,function(){Rh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Ha=s,n.target.dispatchEvent(s),Ha=null}else return t=_i(n),t!==null&&Ul(t),e.blockedOn=n,!1;t.shift()}return!0}function Tu(e,t,n){kr(e)&&n.delete(t)}function $m(){$a=!1,nn!==null&&kr(nn)&&(nn=null),sn!==null&&kr(sn)&&(sn=null),rn!==null&&kr(rn)&&(rn=null),gi.forEach(Tu),yi.forEach(Tu)}function Gs(e,t){e.blockedOn===t&&(e.blockedOn=null,$a||($a=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,$m)))}function vi(e){function t(r){return Gs(r,e)}if(0<ar.length){Gs(ar[0],e);for(var n=1;n<ar.length;n++){var s=ar[n];s.blockedOn===e&&(s.blockedOn=null)}}for(nn!==null&&Gs(nn,e),sn!==null&&Gs(sn,e),rn!==null&&Gs(rn,e),gi.forEach(t),yi.forEach(t),n=0;n<Jt.length;n++)s=Jt[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)Lh(n),n.blockedOn===null&&Jt.shift()}var as=$t.ReactCurrentBatchConfig,Or=!0;function Gm(e,t,n,s){var r=te,a=as.transition;as.transition=null;try{te=1,Hl(e,t,n,s)}finally{te=r,as.transition=a}}function Ym(e,t,n,s){var r=te,a=as.transition;as.transition=null;try{te=4,Hl(e,t,n,s)}finally{te=r,as.transition=a}}function Hl(e,t,n,s){if(Or){var r=Ga(e,t,n,s);if(r===null)la(e,t,s,Mr,n),Nu(e,s);else if(Vm(r,e,t,n,s))s.stopPropagation();else if(Nu(e,s),t&4&&-1<Wm.indexOf(e)){for(;r!==null;){var a=_i(r);if(a!==null&&Ih(a),a=Ga(e,t,n,s),a===null&&la(e,t,s,Mr,n),a===r)break;r=a}r!==null&&s.stopPropagation()}else la(e,t,s,null,n)}}var Mr=null;function Ga(e,t,n,s){if(Mr=null,e=Ol(s),e=Nn(e),e!==null)if(t=Mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mr=e,null}function Oh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_m()){case Ml:return 1;case Th:return 4;case _r:case Lm:return 16;case Eh:return 536870912;default:return 16}default:return 16}}var en=null,Bl=null,jr=null;function Mh(){if(jr)return jr;var e,t=Bl,n=t.length,s,r="value"in en?en.value:en.textContent,a=r.length;for(e=0;e<n&&t[e]===r[e];e++);var l=n-e;for(s=1;s<=l&&t[n-s]===r[a-s];s++);return jr=r.slice(e,1<s?1-s:void 0)}function Sr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lr(){return!0}function Eu(){return!1}function rt(e){function t(n,s,r,a,l){this._reactName=n,this._targetInst=r,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?lr:Eu,this.isPropagationStopped=Eu,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lr)},persist:function(){},isPersistent:lr}),t}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=rt(js),Di=ge({},js,{view:0,detail:0}),Xm=rt(Di),Zo,ea,Ys,co=ge({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ys&&(Ys&&e.type==="mousemove"?(Zo=e.screenX-Ys.screenX,ea=e.screenY-Ys.screenY):ea=Zo=0,Ys=e),Zo)},movementY:function(e){return"movementY"in e?e.movementY:ea}}),Pu=rt(co),Km=ge({},co,{dataTransfer:0}),Qm=rt(Km),qm=ge({},Di,{relatedTarget:0}),ta=rt(qm),Jm=ge({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=rt(Jm),eg=ge({},js,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tg=rt(eg),ng=ge({},js,{data:0}),Au=rt(ng),sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function og(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rg[e])?!!t[e]:!1}function Wl(){return og}var ag=ge({},Di,{key:function(e){if(e.key){var t=sg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ig[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lg=rt(ag),cg=ge({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=rt(cg),ug=ge({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),dg=rt(ug),hg=ge({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),pg=rt(hg),fg=ge({},co,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=rt(fg),gg=[9,13,27,32],Vl=Ht&&"CompositionEvent"in window,ii=null;Ht&&"documentMode"in document&&(ii=document.documentMode);var yg=Ht&&"TextEvent"in window&&!ii,Fh=Ht&&(!Vl||ii&&8<ii&&11>=ii),Ru=" ",Du=!1;function Uh(e,t){switch(e){case"keyup":return gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function vg(e,t){switch(e){case"compositionend":return Hh(t);case"keypress":return t.which!==32?null:(Du=!0,Ru);case"textInput":return e=t.data,e===Ru&&Du?null:e;default:return null}}function xg(e,t){if(Xn)return e==="compositionend"||!Vl&&Uh(e,t)?(e=Mh(),jr=Bl=en=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fh&&t.locale!=="ko"?null:t.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wg[e.type]:t==="textarea"}function Bh(e,t,n,s){vh(s),t=Fr(t,"onChange"),0<t.length&&(n=new zl("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var ri=null,xi=null;function kg(e){Jh(e,0)}function uo(e){var t=qn(e);if(dh(t))return e}function jg(e,t){if(e==="change")return t}var zh=!1;if(Ht){var na;if(Ht){var sa="oninput"in document;if(!sa){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),sa=typeof Lu.oninput=="function"}na=sa}else na=!1;zh=na&&(!document.documentMode||9<document.documentMode)}function Ou(){ri&&(ri.detachEvent("onpropertychange",Wh),xi=ri=null)}function Wh(e){if(e.propertyName==="value"&&uo(xi)){var t=[];Bh(t,xi,e,Ol(e)),jh(kg,t)}}function Sg(e,t,n){e==="focusin"?(Ou(),ri=t,xi=n,ri.attachEvent("onpropertychange",Wh)):e==="focusout"&&Ou()}function Cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uo(xi)}function bg(e,t){if(e==="click")return uo(t)}function Ng(e,t){if(e==="input"||e==="change")return uo(t)}function Tg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:Tg;function wi(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var r=n[s];if(!Ea.call(t,r)||!Nt(e[r],t[r]))return!1}return!0}function Mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fu(e,t){var n=Mu(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mu(n)}}function Vh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $h(){for(var e=window,t=Ir();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Eg(e){var t=$h(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vh(n.ownerDocument.documentElement,n)){if(s!==null&&$l(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,a=Math.min(s.start,r);s=s.end===void 0?a:Math.min(s.end,r),!e.extend&&a>s&&(r=s,s=a,a=r),r=Fu(n,a);var l=Fu(n,s);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pg=Ht&&"documentMode"in document&&11>=document.documentMode,Kn=null,Ya=null,oi=null,Xa=!1;function Uu(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xa||Kn==null||Kn!==Ir(s)||(s=Kn,"selectionStart"in s&&$l(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),oi&&wi(oi,s)||(oi=s,s=Fr(Ya,"onSelect"),0<s.length&&(t=new zl("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Kn)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},ia={},Gh={};Ht&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function ho(e){if(ia[e])return ia[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gh)return ia[e]=t[n];return e}var Yh=ho("animationend"),Xh=ho("animationiteration"),Kh=ho("animationstart"),Qh=ho("transitionend"),qh=new Map,Hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,t){qh.set(e,t),On(t,[e])}for(var ra=0;ra<Hu.length;ra++){var oa=Hu[ra],Ag=oa.toLowerCase(),Ig=oa[0].toUpperCase()+oa.slice(1);mn(Ag,"on"+Ig)}mn(Yh,"onAnimationEnd");mn(Xh,"onAnimationIteration");mn(Kh,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(Qh,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);On("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));On("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));On("onBeforeInput",["compositionend","keypress","textInput","paste"]);On("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));On("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));On("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function Bu(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,Am(s,t,void 0,e),e.currentTarget=null}function Jh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],r=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var l=s.length-1;0<=l;l--){var u=s[l],h=u.instance,p=u.currentTarget;if(u=u.listener,h!==a&&r.isPropagationStopped())break e;Bu(r,u,p),a=h}else for(l=0;l<s.length;l++){if(u=s[l],h=u.instance,p=u.currentTarget,u=u.listener,h!==a&&r.isPropagationStopped())break e;Bu(r,u,p),a=h}}}if(Dr)throw e=Wa,Dr=!1,Wa=null,e}function ce(e,t){var n=t[Za];n===void 0&&(n=t[Za]=new Set);var s=e+"__bubble";n.has(s)||(Zh(t,e,2,!1),n.add(s))}function aa(e,t,n){var s=0;t&&(s|=4),Zh(n,e,s,t)}var ur="_reactListening"+Math.random().toString(36).slice(2);function ki(e){if(!e[ur]){e[ur]=!0,oh.forEach(function(n){n!=="selectionchange"&&(Rg.has(n)||aa(n,!1,e),aa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ur]||(t[ur]=!0,aa("selectionchange",!1,t))}}function Zh(e,t,n,s){switch(Oh(t)){case 1:var r=Gm;break;case 4:r=Ym;break;default:r=Hl}n=r.bind(null,t,n,e),r=void 0,!za||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function la(e,t,n,s,r){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var u=s.stateNode.containerInfo;if(u===r||u.nodeType===8&&u.parentNode===r)break;if(l===4)for(l=s.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===r||h.nodeType===8&&h.parentNode===r))return;l=l.return}for(;u!==null;){if(l=Nn(u),l===null)return;if(h=l.tag,h===5||h===6){s=a=l;continue e}u=u.parentNode}}s=s.return}jh(function(){var p=a,P=Ol(n),N=[];e:{var k=qh.get(e);if(k!==void 0){var E=zl,j=e;switch(e){case"keypress":if(Sr(n)===0)break e;case"keydown":case"keyup":E=lg;break;case"focusin":j="focus",E=ta;break;case"focusout":j="blur",E=ta;break;case"beforeblur":case"afterblur":E=ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Qm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=dg;break;case Yh:case Xh:case Kh:E=Zm;break;case Qh:E=pg;break;case"scroll":E=Xm;break;case"wheel":E=mg;break;case"copy":case"cut":case"paste":E=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Iu}var I=(t&4)!==0,L=!I&&e==="scroll",m=I?k!==null?k+"Capture":null:k;I=[];for(var w=p,b;w!==null;){b=w;var D=b.stateNode;if(b.tag===5&&D!==null&&(b=D,m!==null&&(D=mi(w,m),D!=null&&I.push(ji(w,D,b)))),L)break;w=w.return}0<I.length&&(k=new E(k,j,null,n,P),N.push({event:k,listeners:I}))}}if(!(t&7)){e:{if(k=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",k&&n!==Ha&&(j=n.relatedTarget||n.fromElement)&&(Nn(j)||j[Bt]))break e;if((E||k)&&(k=P.window===P?P:(k=P.ownerDocument)?k.defaultView||k.parentWindow:window,E?(j=n.relatedTarget||n.toElement,E=p,j=j?Nn(j):null,j!==null&&(L=Mn(j),j!==L||j.tag!==5&&j.tag!==6)&&(j=null)):(E=null,j=p),E!==j)){if(I=Pu,D="onMouseLeave",m="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(I=Iu,D="onPointerLeave",m="onPointerEnter",w="pointer"),L=E==null?k:qn(E),b=j==null?k:qn(j),k=new I(D,w+"leave",E,n,P),k.target=L,k.relatedTarget=b,D=null,Nn(P)===p&&(I=new I(m,w+"enter",j,n,P),I.target=b,I.relatedTarget=L,D=I),L=D,E&&j)t:{for(I=E,m=j,w=0,b=I;b;b=$n(b))w++;for(b=0,D=m;D;D=$n(D))b++;for(;0<w-b;)I=$n(I),w--;for(;0<b-w;)m=$n(m),b--;for(;w--;){if(I===m||m!==null&&I===m.alternate)break t;I=$n(I),m=$n(m)}I=null}else I=null;E!==null&&zu(N,k,E,I,!1),j!==null&&L!==null&&zu(N,L,j,I,!0)}}e:{if(k=p?qn(p):window,E=k.nodeName&&k.nodeName.toLowerCase(),E==="select"||E==="input"&&k.type==="file")var M=jg;else if(_u(k))if(zh)M=Ng;else{M=Cg;var F=Sg}else(E=k.nodeName)&&E.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(M=bg);if(M&&(M=M(e,p))){Bh(N,M,n,P);break e}F&&F(e,k,p),e==="focusout"&&(F=k._wrapperState)&&F.controlled&&k.type==="number"&&La(k,"number",k.value)}switch(F=p?qn(p):window,e){case"focusin":(_u(F)||F.contentEditable==="true")&&(Kn=F,Ya=p,oi=null);break;case"focusout":oi=Ya=Kn=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Uu(N,n,P);break;case"selectionchange":if(Pg)break;case"keydown":case"keyup":Uu(N,n,P)}var S;if(Vl)e:{switch(e){case"compositionstart":var f="onCompositionStart";break e;case"compositionend":f="onCompositionEnd";break e;case"compositionupdate":f="onCompositionUpdate";break e}f=void 0}else Xn?Uh(e,n)&&(f="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(f="onCompositionStart");f&&(Fh&&n.locale!=="ko"&&(Xn||f!=="onCompositionStart"?f==="onCompositionEnd"&&Xn&&(S=Mh()):(en=P,Bl="value"in en?en.value:en.textContent,Xn=!0)),F=Fr(p,f),0<F.length&&(f=new Au(f,e,null,n,P),N.push({event:f,listeners:F}),S?f.data=S:(S=Hh(n),S!==null&&(f.data=S)))),(S=yg?vg(e,n):xg(e,n))&&(p=Fr(p,"onBeforeInput"),0<p.length&&(P=new Au("onBeforeInput","beforeinput",null,n,P),N.push({event:P,listeners:p}),P.data=S))}Jh(N,t)})}function ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fr(e,t){for(var n=t+"Capture",s=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=mi(e,n),a!=null&&s.unshift(ji(e,a,r)),a=mi(e,t),a!=null&&s.push(ji(e,a,r))),e=e.return}return s}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,t,n,s,r){for(var a=t._reactName,l=[];n!==null&&n!==s;){var u=n,h=u.alternate,p=u.stateNode;if(h!==null&&h===s)break;u.tag===5&&p!==null&&(u=p,r?(h=mi(n,a),h!=null&&l.unshift(ji(n,h,u))):r||(h=mi(n,a),h!=null&&l.push(ji(n,h,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Dg=/\r\n?/g,_g=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Dg,`
`).replace(_g,"")}function dr(e,t,n){if(t=Wu(t),Wu(e)!==t&&n)throw Error(O(425))}function Ur(){}var Ka=null,Qa=null;function qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ja=typeof setTimeout=="function"?setTimeout:void 0,Lg=typeof clearTimeout=="function"?clearTimeout:void 0,Vu=typeof Promise=="function"?Promise:void 0,Og=typeof queueMicrotask=="function"?queueMicrotask:typeof Vu<"u"?function(e){return Vu.resolve(null).then(e).catch(Mg)}:Ja;function Mg(e){setTimeout(function(){throw e})}function ca(e,t){var n=t,s=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(s===0){e.removeChild(r),vi(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=r}while(n);vi(t)}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),At="__reactFiber$"+Ss,Si="__reactProps$"+Ss,Bt="__reactContainer$"+Ss,Za="__reactEvents$"+Ss,Fg="__reactListeners$"+Ss,Ug="__reactHandles$"+Ss;function Nn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$u(e);e!==null;){if(n=e[At])return n;e=$u(e)}return t}e=n,n=e.parentNode}return null}function _i(e){return e=e[At]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function po(e){return e[Si]||null}var el=[],Jn=-1;function gn(e){return{current:e}}function ue(e){0>Jn||(e.current=el[Jn],el[Jn]=null,Jn--)}function oe(e,t){Jn++,el[Jn]=e.current,e.current=t}var fn={},Ue=gn(fn),Ke=gn(!1),In=fn;function fs(e,t){var n=e.type.contextTypes;if(!n)return fn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function Qe(e){return e=e.childContextTypes,e!=null}function Hr(){ue(Ke),ue(Ue)}function Gu(e,t,n){if(Ue.current!==fn)throw Error(O(168));oe(Ue,t),oe(Ke,n)}function ep(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var r in s)if(!(r in t))throw Error(O(108,Sm(e)||"Unknown",r));return ge({},n,s)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,In=Ue.current,oe(Ue,e),oe(Ke,Ke.current),!0}function Yu(e,t,n){var s=e.stateNode;if(!s)throw Error(O(169));n?(e=ep(e,t,In),s.__reactInternalMemoizedMergedChildContext=e,ue(Ke),ue(Ue),oe(Ue,e)):ue(Ke),oe(Ke,n)}var Ot=null,fo=!1,ua=!1;function tp(e){Ot===null?Ot=[e]:Ot.push(e)}function Hg(e){fo=!0,tp(e)}function yn(){if(!ua&&Ot!==null){ua=!0;var e=0,t=te;try{var n=Ot;for(te=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Ot=null,fo=!1}catch(r){throw Ot!==null&&(Ot=Ot.slice(e+1)),Nh(Ml,yn),r}finally{te=t,ua=!1}}return null}var Zn=[],es=0,zr=null,Wr=0,lt=[],ct=0,Rn=null,Mt=1,Ft="";function Cn(e,t){Zn[es++]=Wr,Zn[es++]=zr,zr=e,Wr=t}function np(e,t,n){lt[ct++]=Mt,lt[ct++]=Ft,lt[ct++]=Rn,Rn=e;var s=Mt;e=Ft;var r=32-Ct(s)-1;s&=~(1<<r),n+=1;var a=32-Ct(t)+r;if(30<a){var l=r-r%5;a=(s&(1<<l)-1).toString(32),s>>=l,r-=l,Mt=1<<32-Ct(t)+r|n<<r|s,Ft=a+e}else Mt=1<<a|n<<r|s,Ft=e}function Gl(e){e.return!==null&&(Cn(e,1),np(e,1,0))}function Yl(e){for(;e===zr;)zr=Zn[--es],Zn[es]=null,Wr=Zn[--es],Zn[es]=null;for(;e===Rn;)Rn=lt[--ct],lt[ct]=null,Ft=lt[--ct],lt[ct]=null,Mt=lt[--ct],lt[ct]=null}var nt=null,tt=null,he=!1,vt=null;function sp(e,t){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=on(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Rn!==null?{id:Mt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nl(e){if(he){var t=tt;if(t){var n=t;if(!Xu(e,t)){if(tl(e))throw Error(O(418));t=on(n.nextSibling);var s=nt;t&&Xu(e,t)?sp(s,n):(e.flags=e.flags&-4097|2,he=!1,nt=e)}}else{if(tl(e))throw Error(O(418));e.flags=e.flags&-4097|2,he=!1,nt=e}}}function Ku(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function hr(e){if(e!==nt)return!1;if(!he)return Ku(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qa(e.type,e.memoizedProps)),t&&(t=tt)){if(tl(e))throw ip(),Error(O(418));for(;t;)sp(e,t),t=on(t.nextSibling)}if(Ku(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?on(e.stateNode.nextSibling):null;return!0}function ip(){for(var e=tt;e;)e=on(e.nextSibling)}function ms(){tt=nt=null,he=!1}function Xl(e){vt===null?vt=[e]:vt.push(e)}var Bg=$t.ReactCurrentBatchConfig;function Xs(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var s=n.stateNode}if(!s)throw Error(O(147,e));var r=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var u=r.refs;l===null?delete u[a]:u[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function pr(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qu(e){var t=e._init;return t(e._payload)}function rp(e){function t(m,w){if(e){var b=m.deletions;b===null?(m.deletions=[w],m.flags|=16):b.push(w)}}function n(m,w){if(!e)return null;for(;w!==null;)t(m,w),w=w.sibling;return null}function s(m,w){for(m=new Map;w!==null;)w.key!==null?m.set(w.key,w):m.set(w.index,w),w=w.sibling;return m}function r(m,w){return m=un(m,w),m.index=0,m.sibling=null,m}function a(m,w,b){return m.index=b,e?(b=m.alternate,b!==null?(b=b.index,b<w?(m.flags|=2,w):b):(m.flags|=2,w)):(m.flags|=1048576,w)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,w,b,D){return w===null||w.tag!==6?(w=ya(b,m.mode,D),w.return=m,w):(w=r(w,b),w.return=m,w)}function h(m,w,b,D){var M=b.type;return M===Yn?P(m,w,b.props.children,D,b.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Qt&&Qu(M)===w.type)?(D=r(w,b.props),D.ref=Xs(m,w,b),D.return=m,D):(D=Ar(b.type,b.key,b.props,null,m.mode,D),D.ref=Xs(m,w,b),D.return=m,D)}function p(m,w,b,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==b.containerInfo||w.stateNode.implementation!==b.implementation?(w=va(b,m.mode,D),w.return=m,w):(w=r(w,b.children||[]),w.return=m,w)}function P(m,w,b,D,M){return w===null||w.tag!==7?(w=An(b,m.mode,D,M),w.return=m,w):(w=r(w,b),w.return=m,w)}function N(m,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ya(""+w,m.mode,b),w.return=m,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case nr:return b=Ar(w.type,w.key,w.props,null,m.mode,b),b.ref=Xs(m,null,w),b.return=m,b;case Gn:return w=va(w,m.mode,b),w.return=m,w;case Qt:var D=w._init;return N(m,D(w._payload),b)}if(Js(w)||Ws(w))return w=An(w,m.mode,b,null),w.return=m,w;pr(m,w)}return null}function k(m,w,b,D){var M=w!==null?w.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return M!==null?null:u(m,w,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case nr:return b.key===M?h(m,w,b,D):null;case Gn:return b.key===M?p(m,w,b,D):null;case Qt:return M=b._init,k(m,w,M(b._payload),D)}if(Js(b)||Ws(b))return M!==null?null:P(m,w,b,D,null);pr(m,b)}return null}function E(m,w,b,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return m=m.get(b)||null,u(w,m,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case nr:return m=m.get(D.key===null?b:D.key)||null,h(w,m,D,M);case Gn:return m=m.get(D.key===null?b:D.key)||null,p(w,m,D,M);case Qt:var F=D._init;return E(m,w,b,F(D._payload),M)}if(Js(D)||Ws(D))return m=m.get(b)||null,P(w,m,D,M,null);pr(w,D)}return null}function j(m,w,b,D){for(var M=null,F=null,S=w,f=w=0,v=null;S!==null&&f<b.length;f++){S.index>f?(v=S,S=null):v=S.sibling;var y=k(m,S,b[f],D);if(y===null){S===null&&(S=v);break}e&&S&&y.alternate===null&&t(m,S),w=a(y,w,f),F===null?M=y:F.sibling=y,F=y,S=v}if(f===b.length)return n(m,S),he&&Cn(m,f),M;if(S===null){for(;f<b.length;f++)S=N(m,b[f],D),S!==null&&(w=a(S,w,f),F===null?M=S:F.sibling=S,F=S);return he&&Cn(m,f),M}for(S=s(m,S);f<b.length;f++)v=E(S,m,f,b[f],D),v!==null&&(e&&v.alternate!==null&&S.delete(v.key===null?f:v.key),w=a(v,w,f),F===null?M=v:F.sibling=v,F=v);return e&&S.forEach(function(C){return t(m,C)}),he&&Cn(m,f),M}function I(m,w,b,D){var M=Ws(b);if(typeof M!="function")throw Error(O(150));if(b=M.call(b),b==null)throw Error(O(151));for(var F=M=null,S=w,f=w=0,v=null,y=b.next();S!==null&&!y.done;f++,y=b.next()){S.index>f?(v=S,S=null):v=S.sibling;var C=k(m,S,y.value,D);if(C===null){S===null&&(S=v);break}e&&S&&C.alternate===null&&t(m,S),w=a(C,w,f),F===null?M=C:F.sibling=C,F=C,S=v}if(y.done)return n(m,S),he&&Cn(m,f),M;if(S===null){for(;!y.done;f++,y=b.next())y=N(m,y.value,D),y!==null&&(w=a(y,w,f),F===null?M=y:F.sibling=y,F=y);return he&&Cn(m,f),M}for(S=s(m,S);!y.done;f++,y=b.next())y=E(S,m,f,y.value,D),y!==null&&(e&&y.alternate!==null&&S.delete(y.key===null?f:y.key),w=a(y,w,f),F===null?M=y:F.sibling=y,F=y);return e&&S.forEach(function(T){return t(m,T)}),he&&Cn(m,f),M}function L(m,w,b,D){if(typeof b=="object"&&b!==null&&b.type===Yn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case nr:e:{for(var M=b.key,F=w;F!==null;){if(F.key===M){if(M=b.type,M===Yn){if(F.tag===7){n(m,F.sibling),w=r(F,b.props.children),w.return=m,m=w;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Qt&&Qu(M)===F.type){n(m,F.sibling),w=r(F,b.props),w.ref=Xs(m,F,b),w.return=m,m=w;break e}n(m,F);break}else t(m,F);F=F.sibling}b.type===Yn?(w=An(b.props.children,m.mode,D,b.key),w.return=m,m=w):(D=Ar(b.type,b.key,b.props,null,m.mode,D),D.ref=Xs(m,w,b),D.return=m,m=D)}return l(m);case Gn:e:{for(F=b.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===b.containerInfo&&w.stateNode.implementation===b.implementation){n(m,w.sibling),w=r(w,b.children||[]),w.return=m,m=w;break e}else{n(m,w);break}else t(m,w);w=w.sibling}w=va(b,m.mode,D),w.return=m,m=w}return l(m);case Qt:return F=b._init,L(m,w,F(b._payload),D)}if(Js(b))return j(m,w,b,D);if(Ws(b))return I(m,w,b,D);pr(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,w!==null&&w.tag===6?(n(m,w.sibling),w=r(w,b),w.return=m,m=w):(n(m,w),w=ya(b,m.mode,D),w.return=m,m=w),l(m)):n(m,w)}return L}var gs=rp(!0),op=rp(!1),Vr=gn(null),$r=null,ts=null,Kl=null;function Ql(){Kl=ts=$r=null}function ql(e){var t=Vr.current;ue(Vr),e._currentValue=t}function sl(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function ls(e,t){$r=e,Kl=ts=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Xe=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:t,next:null},ts===null){if($r===null)throw Error(O(308));ts=e,$r.dependencies={lanes:0,firstContext:e}}else ts=ts.next=e;return t}var Tn=null;function Jl(e){Tn===null?Tn=[e]:Tn.push(e)}function ap(e,t,n,s){var r=t.interleaved;return r===null?(n.next=n,Jl(t)):(n.next=r.next,r.next=n),t.interleaved=n,zt(e,s)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function Zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,J&2){var r=s.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),s.pending=t,zt(e,n)}return r=s.interleaved,r===null?(t.next=t,Jl(s)):(t.next=r.next,r.next=t),s.interleaved=t,zt(e,n)}function Cr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Fl(e,n)}}function qu(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?r=a=t:a=a.next=t}else r=a=t;n={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,s){var r=e.updateQueue;qt=!1;var a=r.firstBaseUpdate,l=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var h=u,p=h.next;h.next=null,l===null?a=p:l.next=p,l=h;var P=e.alternate;P!==null&&(P=P.updateQueue,u=P.lastBaseUpdate,u!==l&&(u===null?P.firstBaseUpdate=p:u.next=p,P.lastBaseUpdate=h))}if(a!==null){var N=r.baseState;l=0,P=p=h=null,u=a;do{var k=u.lane,E=u.eventTime;if((s&k)===k){P!==null&&(P=P.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var j=e,I=u;switch(k=t,E=n,I.tag){case 1:if(j=I.payload,typeof j=="function"){N=j.call(E,N,k);break e}N=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=I.payload,k=typeof j=="function"?j.call(E,N,k):j,k==null)break e;N=ge({},N,k);break e;case 2:qt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,k=r.effects,k===null?r.effects=[u]:k.push(u))}else E={eventTime:E,lane:k,tag:u.tag,payload:u.payload,callback:u.callback,next:null},P===null?(p=P=E,h=N):P=P.next=E,l|=k;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;k=u,u=k.next,k.next=null,r.lastBaseUpdate=k,r.shared.pending=null}}while(!0);if(P===null&&(h=N),r.baseState=h,r.firstBaseUpdate=p,r.lastBaseUpdate=P,t=r.shared.interleaved,t!==null){r=t;do l|=r.lane,r=r.next;while(r!==t)}else a===null&&(r.shared.lanes=0);_n|=l,e.lanes=l,e.memoizedState=N}}function Ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],r=s.callback;if(r!==null){if(s.callback=null,s=n,typeof r!="function")throw Error(O(191,r));r.call(s)}}}var Li={},Rt=gn(Li),Ci=gn(Li),bi=gn(Li);function En(e){if(e===Li)throw Error(O(174));return e}function ec(e,t){switch(oe(bi,t),oe(Ci,e),oe(Rt,Li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ma(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ma(t,e)}ue(Rt),oe(Rt,t)}function ys(){ue(Rt),ue(Ci),ue(bi)}function cp(e){En(bi.current);var t=En(Rt.current),n=Ma(t,e.type);t!==n&&(oe(Ci,e),oe(Rt,n))}function tc(e){Ci.current===e&&(ue(Rt),ue(Ci))}var fe=gn(0);function Yr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=[];function nc(){for(var e=0;e<da.length;e++)da[e]._workInProgressVersionPrimary=null;da.length=0}var br=$t.ReactCurrentDispatcher,ha=$t.ReactCurrentBatchConfig,Dn=0,me=null,Se=null,Te=null,Xr=!1,ai=!1,Ni=0,zg=0;function Oe(){throw Error(O(321))}function sc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function ic(e,t,n,s,r,a){if(Dn=a,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,br.current=e===null||e.memoizedState===null?Gg:Yg,e=n(s,r),ai){a=0;do{if(ai=!1,Ni=0,25<=a)throw Error(O(301));a+=1,Te=Se=null,t.updateQueue=null,br.current=Xg,e=n(s,r)}while(ai)}if(br.current=Kr,t=Se!==null&&Se.next!==null,Dn=0,Te=Se=me=null,Xr=!1,t)throw Error(O(300));return e}function rc(){var e=Ni!==0;return Ni=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?me.memoizedState=Te=e:Te=Te.next=e,Te}function pt(){if(Se===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Te===null?me.memoizedState:Te.next;if(t!==null)Te=t,Se=e;else{if(e===null)throw Error(O(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Te===null?me.memoizedState=Te=e:Te=Te.next=e}return Te}function Ti(e,t){return typeof t=="function"?t(e):t}function pa(e){var t=pt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var s=Se,r=s.baseQueue,a=n.pending;if(a!==null){if(r!==null){var l=r.next;r.next=a.next,a.next=l}s.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,s=s.baseState;var u=l=null,h=null,p=a;do{var P=p.lane;if((Dn&P)===P)h!==null&&(h=h.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),s=p.hasEagerState?p.eagerState:e(s,p.action);else{var N={lane:P,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};h===null?(u=h=N,l=s):h=h.next=N,me.lanes|=P,_n|=P}p=p.next}while(p!==null&&p!==a);h===null?l=s:h.next=u,Nt(s,t.memoizedState)||(Xe=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=h,n.lastRenderedState=s}if(e=n.interleaved,e!==null){r=e;do a=r.lane,me.lanes|=a,_n|=a,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fa(e){var t=pt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var s=n.dispatch,r=n.pending,a=t.memoizedState;if(r!==null){n.pending=null;var l=r=r.next;do a=e(a,l.action),l=l.next;while(l!==r);Nt(a,t.memoizedState)||(Xe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,s]}function up(){}function dp(e,t){var n=me,s=pt(),r=t(),a=!Nt(s.memoizedState,r);if(a&&(s.memoizedState=r,Xe=!0),s=s.queue,oc(fp.bind(null,n,s,e),[e]),s.getSnapshot!==t||a||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Ei(9,pp.bind(null,n,s,r,t),void 0,null),Ee===null)throw Error(O(349));Dn&30||hp(n,t,r)}return r}function hp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pp(e,t,n,s){t.value=n,t.getSnapshot=s,mp(t)&&gp(e)}function fp(e,t,n){return n(function(){mp(t)&&gp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function gp(e){var t=zt(e,1);t!==null&&bt(t,e,1,-1)}function Zu(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:e},t.queue=e,e=e.dispatch=$g.bind(null,me,e),[t.memoizedState,e]}function Ei(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function yp(){return pt().memoizedState}function Nr(e,t,n,s){var r=Et();me.flags|=e,r.memoizedState=Ei(1|t,n,void 0,s===void 0?null:s)}function mo(e,t,n,s){var r=pt();s=s===void 0?null:s;var a=void 0;if(Se!==null){var l=Se.memoizedState;if(a=l.destroy,s!==null&&sc(s,l.deps)){r.memoizedState=Ei(t,n,a,s);return}}me.flags|=e,r.memoizedState=Ei(1|t,n,a,s)}function ed(e,t){return Nr(8390656,8,e,t)}function oc(e,t){return mo(2048,8,e,t)}function vp(e,t){return mo(4,2,e,t)}function xp(e,t){return mo(4,4,e,t)}function wp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kp(e,t,n){return n=n!=null?n.concat([e]):null,mo(4,4,wp.bind(null,t,e),n)}function ac(){}function jp(e,t){var n=pt();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&sc(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Sp(e,t){var n=pt();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&sc(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Cp(e,t,n){return Dn&21?(Nt(n,t)||(n=Ph(),me.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Xe=!0),e.memoizedState=n)}function Wg(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var s=ha.transition;ha.transition={};try{e(!1),t()}finally{te=n,ha.transition=s}}function bp(){return pt().memoizedState}function Vg(e,t,n){var s=cn(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Np(e))Tp(t,n);else if(n=ap(e,t,n,s),n!==null){var r=We();bt(n,e,s,r),Ep(n,t,s)}}function $g(e,t,n){var s=cn(e),r={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Np(e))Tp(t,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,u=a(l,n);if(r.hasEagerState=!0,r.eagerState=u,Nt(u,l)){var h=t.interleaved;h===null?(r.next=r,Jl(t)):(r.next=h.next,h.next=r),t.interleaved=r;return}}catch{}finally{}n=ap(e,t,r,s),n!==null&&(r=We(),bt(n,e,s,r),Ep(n,t,s))}}function Np(e){var t=e.alternate;return e===me||t!==null&&t===me}function Tp(e,t){ai=Xr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ep(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Fl(e,n)}}var Kr={readContext:ht,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Gg={readContext:ht,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:ed,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Nr(4194308,4,wp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Nr(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=Et();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Vg.bind(null,me,e),[s.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Zu,useDebugValue:ac,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Zu(!1),t=e[0];return e=Wg.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=me,r=Et();if(he){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),Ee===null)throw Error(O(349));Dn&30||hp(s,t,n)}r.memoizedState=n;var a={value:n,getSnapshot:t};return r.queue=a,ed(fp.bind(null,s,a,e),[e]),s.flags|=2048,Ei(9,pp.bind(null,s,a,n,t),void 0,null),n},useId:function(){var e=Et(),t=Ee.identifierPrefix;if(he){var n=Ft,s=Mt;n=(s&~(1<<32-Ct(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ni++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yg={readContext:ht,useCallback:jp,useContext:ht,useEffect:oc,useImperativeHandle:kp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:Sp,useReducer:pa,useRef:yp,useState:function(){return pa(Ti)},useDebugValue:ac,useDeferredValue:function(e){var t=pt();return Cp(t,Se.memoizedState,e)},useTransition:function(){var e=pa(Ti)[0],t=pt().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:dp,useId:bp,unstable_isNewReconciler:!1},Xg={readContext:ht,useCallback:jp,useContext:ht,useEffect:oc,useImperativeHandle:kp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:Sp,useReducer:fa,useRef:yp,useState:function(){return fa(Ti)},useDebugValue:ac,useDeferredValue:function(e){var t=pt();return Se===null?t.memoizedState=e:Cp(t,Se.memoizedState,e)},useTransition:function(){var e=fa(Ti)[0],t=pt().memoizedState;return[e,t]},useMutableSource:up,useSyncExternalStore:dp,useId:bp,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function il(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var go={isMounted:function(e){return(e=e._reactInternals)?Mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=We(),r=cn(e),a=Ut(s,r);a.payload=t,n!=null&&(a.callback=n),t=an(e,a,r),t!==null&&(bt(t,e,r,s),Cr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=We(),r=cn(e),a=Ut(s,r);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=an(e,a,r),t!==null&&(bt(t,e,r,s),Cr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),s=cn(e),r=Ut(n,s);r.tag=2,t!=null&&(r.callback=t),t=an(e,r,s),t!==null&&(bt(t,e,s,n),Cr(t,e,s))}};function td(e,t,n,s,r,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,l):t.prototype&&t.prototype.isPureReactComponent?!wi(n,s)||!wi(r,a):!0}function Pp(e,t,n){var s=!1,r=fn,a=t.contextType;return typeof a=="object"&&a!==null?a=ht(a):(r=Qe(t)?In:Ue.current,s=t.contextTypes,a=(s=s!=null)?fs(e,r):fn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=go,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),t}function nd(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&go.enqueueReplaceState(t,t.state,null)}function rl(e,t,n,s){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},Zl(e);var a=t.contextType;typeof a=="object"&&a!==null?r.context=ht(a):(a=Qe(t)?In:Ue.current,r.context=fs(e,a)),r.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(il(e,t,a,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&go.enqueueReplaceState(r,r.state,null),Gr(e,n,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function vs(e,t){try{var n="",s=t;do n+=jm(s),s=s.return;while(s);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:r,digest:null}}function ma(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kg=typeof WeakMap=="function"?WeakMap:Map;function Ap(e,t,n){n=Ut(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){qr||(qr=!0,gl=s),ol(e,t)},n}function Ip(e,t,n){n=Ut(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=t.value;n.payload=function(){return s(r)},n.callback=function(){ol(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ol(e,t),typeof s!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function sd(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Kg;var r=new Set;s.set(t,r)}else r=s.get(t),r===void 0&&(r=new Set,s.set(t,r));r.has(n)||(r.add(n),e=cy.bind(null,e,t,n),t.then(e,e))}function id(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rd(e,t,n,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ut(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var Qg=$t.ReactCurrentOwner,Xe=!1;function ze(e,t,n,s){t.child=e===null?op(t,null,n,s):gs(t,e.child,n,s)}function od(e,t,n,s,r){n=n.render;var a=t.ref;return ls(t,r),s=ic(e,t,n,s,a,r),n=rc(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wt(e,t,r)):(he&&n&&Gl(t),t.flags|=1,ze(e,t,s,r),t.child)}function ad(e,t,n,s,r){if(e===null){var a=n.type;return typeof a=="function"&&!mc(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Rp(e,t,a,s,r)):(e=Ar(n.type,null,s,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&r)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:wi,n(l,s)&&e.ref===t.ref)return Wt(e,t,r)}return t.flags|=1,e=un(a,s),e.ref=t.ref,e.return=t,t.child=e}function Rp(e,t,n,s,r){if(e!==null){var a=e.memoizedProps;if(wi(a,s)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=s=a,(e.lanes&r)!==0)e.flags&131072&&(Xe=!0);else return t.lanes=e.lanes,Wt(e,t,r)}return al(e,t,n,s,r)}function Dp(e,t,n){var s=t.pendingProps,r=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(ss,Ze),Ze|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(ss,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:n,oe(ss,Ze),Ze|=s}else a!==null?(s=a.baseLanes|n,t.memoizedState=null):s=n,oe(ss,Ze),Ze|=s;return ze(e,t,r,n),t.child}function _p(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function al(e,t,n,s,r){var a=Qe(n)?In:Ue.current;return a=fs(t,a),ls(t,r),n=ic(e,t,n,s,a,r),s=rc(),e!==null&&!Xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Wt(e,t,r)):(he&&s&&Gl(t),t.flags|=1,ze(e,t,n,r),t.child)}function ld(e,t,n,s,r){if(Qe(n)){var a=!0;Br(t)}else a=!1;if(ls(t,r),t.stateNode===null)Tr(e,t),Pp(t,n,s),rl(t,n,s,r),s=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var h=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=ht(p):(p=Qe(n)?In:Ue.current,p=fs(t,p));var P=n.getDerivedStateFromProps,N=typeof P=="function"||typeof l.getSnapshotBeforeUpdate=="function";N||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==s||h!==p)&&nd(t,l,s,p),qt=!1;var k=t.memoizedState;l.state=k,Gr(t,s,l,r),h=t.memoizedState,u!==s||k!==h||Ke.current||qt?(typeof P=="function"&&(il(t,n,P,s),h=t.memoizedState),(u=qt||td(t,n,u,s,k,h,p))?(N||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=h),l.props=s,l.state=h,l.context=p,s=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,lp(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:gt(t.type,u),l.props=p,N=t.pendingProps,k=l.context,h=n.contextType,typeof h=="object"&&h!==null?h=ht(h):(h=Qe(n)?In:Ue.current,h=fs(t,h));var E=n.getDerivedStateFromProps;(P=typeof E=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==N||k!==h)&&nd(t,l,s,h),qt=!1,k=t.memoizedState,l.state=k,Gr(t,s,l,r);var j=t.memoizedState;u!==N||k!==j||Ke.current||qt?(typeof E=="function"&&(il(t,n,E,s),j=t.memoizedState),(p=qt||td(t,n,p,s,k,j,h)||!1)?(P||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,j,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,j,h)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=j),l.props=s,l.state=j,l.context=h,s=p):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),s=!1)}return ll(e,t,n,s,a,r)}function ll(e,t,n,s,r,a){_p(e,t);var l=(t.flags&128)!==0;if(!s&&!l)return r&&Yu(t,n,!1),Wt(e,t,a);s=t.stateNode,Qg.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&l?(t.child=gs(t,e.child,null,a),t.child=gs(t,null,u,a)):ze(e,t,u,a),t.memoizedState=s.state,r&&Yu(t,n,!0),t.child}function Lp(e){var t=e.stateNode;t.pendingContext?Gu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gu(e,t.context,!1),ec(e,t.containerInfo)}function cd(e,t,n,s,r){return ms(),Xl(r),t.flags|=256,ze(e,t,n,s),t.child}var cl={dehydrated:null,treeContext:null,retryLane:0};function ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Op(e,t,n){var s=t.pendingProps,r=fe.current,a=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(r&2)!==0),u?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),oe(fe,r&1),e===null)return nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,e=s.fallback,a?(s=t.mode,a=t.child,l={mode:"hidden",children:l},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=xo(l,s,0,null),e=An(e,s,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ul(n),t.memoizedState=cl,e):lc(t,l));if(r=e.memoizedState,r!==null&&(u=r.dehydrated,u!==null))return qg(e,t,l,s,u,r,n);if(a){a=s.fallback,l=t.mode,r=e.child,u=r.sibling;var h={mode:"hidden",children:s.children};return!(l&1)&&t.child!==r?(s=t.child,s.childLanes=0,s.pendingProps=h,t.deletions=null):(s=un(r,h),s.subtreeFlags=r.subtreeFlags&14680064),u!==null?a=un(u,a):(a=An(a,l,n,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,l=e.child.memoizedState,l=l===null?ul(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=cl,s}return a=e.child,e=a.sibling,s=un(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function lc(e,t){return t=xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fr(e,t,n,s){return s!==null&&Xl(s),gs(t,e.child,null,n),e=lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qg(e,t,n,s,r,a,l){if(n)return t.flags&256?(t.flags&=-257,s=ma(Error(O(422))),fr(e,t,l,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,r=t.mode,s=xo({mode:"visible",children:s.children},r,0,null),a=An(a,r,l,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&gs(t,e.child,null,l),t.child.memoizedState=ul(l),t.memoizedState=cl,a);if(!(t.mode&1))return fr(e,t,l,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var u=s.dgst;return s=u,a=Error(O(419)),s=ma(a,s,void 0),fr(e,t,l,s)}if(u=(l&e.childLanes)!==0,Xe||u){if(s=Ee,s!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|l)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,zt(e,r),bt(s,e,r,-1))}return fc(),s=ma(Error(O(421))),fr(e,t,l,s)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=uy.bind(null,e),r._reactRetry=t,null):(e=a.treeContext,tt=on(r.nextSibling),nt=t,he=!0,vt=null,e!==null&&(lt[ct++]=Mt,lt[ct++]=Ft,lt[ct++]=Rn,Mt=e.id,Ft=e.overflow,Rn=t),t=lc(t,s.children),t.flags|=4096,t)}function ud(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),sl(e.return,t,n)}function ga(e,t,n,s,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=n,a.tailMode=r)}function Mp(e,t,n){var s=t.pendingProps,r=s.revealOrder,a=s.tail;if(ze(e,t,s.children,n),s=fe.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,n,t);else if(e.tag===19)ud(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(oe(fe,s),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Yr(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),ga(t,!1,r,n,a);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Yr(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}ga(t,!0,n,null,a);break;case"together":ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Tr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jg(e,t,n){switch(t.tag){case 3:Lp(t),ms();break;case 5:cp(t);break;case 1:Qe(t.type)&&Br(t);break;case 4:ec(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,r=t.memoizedProps.value;oe(Vr,s._currentValue),s._currentValue=r;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(oe(fe,fe.current&1),t.flags|=128,null):n&t.child.childLanes?Op(e,t,n):(oe(fe,fe.current&1),e=Wt(e,t,n),e!==null?e.sibling:null);oe(fe,fe.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return Mp(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),oe(fe,fe.current),s)break;return null;case 22:case 23:return t.lanes=0,Dp(e,t,n)}return Wt(e,t,n)}var Fp,dl,Up,Hp;Fp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dl=function(){};Up=function(e,t,n,s){var r=e.memoizedProps;if(r!==s){e=t.stateNode,En(Rt.current);var a=null;switch(n){case"input":r=Da(e,r),s=Da(e,s),a=[];break;case"select":r=ge({},r,{value:void 0}),s=ge({},s,{value:void 0}),a=[];break;case"textarea":r=Oa(e,r),s=Oa(e,s),a=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ur)}Fa(n,s);var l;n=null;for(p in r)if(!s.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var u=r[p];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(pi.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in s){var h=s[p];if(u=r!=null?r[p]:void 0,s.hasOwnProperty(p)&&h!==u&&(h!=null||u!=null))if(p==="style")if(u){for(l in u)!u.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in h)h.hasOwnProperty(l)&&u[l]!==h[l]&&(n||(n={}),n[l]=h[l])}else n||(a||(a=[]),a.push(p,n)),n=h;else p==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(a=a||[]).push(p,h)):p==="children"?typeof h!="string"&&typeof h!="number"||(a=a||[]).push(p,""+h):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(pi.hasOwnProperty(p)?(h!=null&&p==="onScroll"&&ce("scroll",e),a||u===h||(a=[])):(a=a||[]).push(p,h))}n&&(a=a||[]).push("style",n);var p=a;(t.updateQueue=p)&&(t.flags|=4)}};Hp=function(e,t,n,s){n!==s&&(t.flags|=4)};function Ks(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Zg(e,t,n){var s=t.pendingProps;switch(Yl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return Qe(t.type)&&Hr(),Me(t),null;case 3:return s=t.stateNode,ys(),ue(Ke),ue(Ue),nc(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(xl(vt),vt=null))),dl(e,t),Me(t),null;case 5:tc(t);var r=En(bi.current);if(n=t.type,e!==null&&t.stateNode!=null)Up(e,t,n,s,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(O(166));return Me(t),null}if(e=En(Rt.current),hr(t)){s=t.stateNode,n=t.type;var a=t.memoizedProps;switch(s[At]=t,s[Si]=a,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",s),ce("close",s);break;case"iframe":case"object":case"embed":ce("load",s);break;case"video":case"audio":for(r=0;r<ei.length;r++)ce(ei[r],s);break;case"source":ce("error",s);break;case"img":case"image":case"link":ce("error",s),ce("load",s);break;case"details":ce("toggle",s);break;case"input":xu(s,a),ce("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},ce("invalid",s);break;case"textarea":ku(s,a),ce("invalid",s)}Fa(n,a),r=null;for(var l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="children"?typeof u=="string"?s.textContent!==u&&(a.suppressHydrationWarning!==!0&&dr(s.textContent,u,e),r=["children",u]):typeof u=="number"&&s.textContent!==""+u&&(a.suppressHydrationWarning!==!0&&dr(s.textContent,u,e),r=["children",""+u]):pi.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&ce("scroll",s)}switch(n){case"input":sr(s),wu(s,a,!0);break;case"textarea":sr(s),ju(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=Ur)}s=r,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(n,{is:s.is}):(e=l.createElement(n),n==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,n),e[At]=t,e[Si]=s,Fp(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ua(n,s),n){case"dialog":ce("cancel",e),ce("close",e),r=s;break;case"iframe":case"object":case"embed":ce("load",e),r=s;break;case"video":case"audio":for(r=0;r<ei.length;r++)ce(ei[r],e);r=s;break;case"source":ce("error",e),r=s;break;case"img":case"image":case"link":ce("error",e),ce("load",e),r=s;break;case"details":ce("toggle",e),r=s;break;case"input":xu(e,s),r=Da(e,s),ce("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=ge({},s,{value:void 0}),ce("invalid",e);break;case"textarea":ku(e,s),r=Oa(e,s),ce("invalid",e);break;default:r=s}Fa(n,r),u=r;for(a in u)if(u.hasOwnProperty(a)){var h=u[a];a==="style"?yh(e,h):a==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&mh(e,h)):a==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&fi(e,h):typeof h=="number"&&fi(e,""+h):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(pi.hasOwnProperty(a)?h!=null&&a==="onScroll"&&ce("scroll",e):h!=null&&Rl(e,a,h,l))}switch(n){case"input":sr(e),wu(e,s,!1);break;case"textarea":sr(e),ju(e);break;case"option":s.value!=null&&e.setAttribute("value",""+pn(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?is(e,!!s.multiple,a,!1):s.defaultValue!=null&&is(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Hp(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(O(166));if(n=En(bi.current),En(Rt.current),hr(t)){if(s=t.stateNode,n=t.memoizedProps,s[At]=t,(a=s.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:dr(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(s.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[At]=t,t.stateNode=s}return Me(t),null;case 13:if(ue(fe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&tt!==null&&t.mode&1&&!(t.flags&128))ip(),ms(),t.flags|=98560,a=!1;else if(a=hr(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(O(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(O(317));a[At]=t}else ms(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),a=!1}else vt!==null&&(xl(vt),vt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||fe.current&1?Ce===0&&(Ce=3):fc())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return ys(),dl(e,t),e===null&&ki(t.stateNode.containerInfo),Me(t),null;case 10:return ql(t.type._context),Me(t),null;case 17:return Qe(t.type)&&Hr(),Me(t),null;case 19:if(ue(fe),a=t.memoizedState,a===null)return Me(t),null;if(s=(t.flags&128)!==0,l=a.rendering,l===null)if(s)Ks(a,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Yr(e),l!==null){for(t.flags|=128,Ks(a,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)a=n,e=s,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(fe,fe.current&1|2),t.child}e=e.sibling}a.tail!==null&&we()>xs&&(t.flags|=128,s=!0,Ks(a,!1),t.lanes=4194304)}else{if(!s)if(e=Yr(l),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ks(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!he)return Me(t),null}else 2*we()-a.renderingStartTime>xs&&n!==1073741824&&(t.flags|=128,s=!0,Ks(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=we(),t.sibling=null,n=fe.current,oe(fe,s?n&1|2:n&1),t):(Me(t),null);case 22:case 23:return pc(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Ze&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function ey(e,t){switch(Yl(t),t.tag){case 1:return Qe(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ys(),ue(Ke),ue(Ue),nc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tc(t),null;case 13:if(ue(fe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(fe),null;case 4:return ys(),null;case 10:return ql(t.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var mr=!1,Fe=!1,ty=typeof WeakSet=="function"?WeakSet:Set,B=null;function ns(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){ye(e,t,s)}else n.current=null}function hl(e,t,n){try{n()}catch(s){ye(e,t,s)}}var dd=!1;function ny(e,t){if(Ka=Or,e=$h(),$l(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var r=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,u=-1,h=-1,p=0,P=0,N=e,k=null;t:for(;;){for(var E;N!==n||r!==0&&N.nodeType!==3||(u=l+r),N!==a||s!==0&&N.nodeType!==3||(h=l+s),N.nodeType===3&&(l+=N.nodeValue.length),(E=N.firstChild)!==null;)k=N,N=E;for(;;){if(N===e)break t;if(k===n&&++p===r&&(u=l),k===a&&++P===s&&(h=l),(E=N.nextSibling)!==null)break;N=k,k=N.parentNode}N=E}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qa={focusedElem:e,selectionRange:n},Or=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var I=j.memoizedProps,L=j.memoizedState,m=t.stateNode,w=m.getSnapshotBeforeUpdate(t.elementType===t.type?I:gt(t.type,I),L);m.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(D){ye(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return j=dd,dd=!1,j}function li(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&hl(t,n,a)}r=r.next}while(r!==s)}}function yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bp(e){var t=e.alternate;t!==null&&(e.alternate=null,Bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Si],delete t[Za],delete t[Fg],delete t[Ug])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zp(e){return e.tag===5||e.tag===3||e.tag===4}function hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(s!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function ml(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}var Ie=null,yt=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Wp(e,t,n),n=n.sibling}function Wp(e,t,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(lo,n)}catch{}switch(n.tag){case 5:Fe||ns(n,t);case 6:var s=Ie,r=yt;Ie=null,Kt(e,t,n),Ie=s,yt=r,Ie!==null&&(yt?(e=Ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(yt?(e=Ie,n=n.stateNode,e.nodeType===8?ca(e.parentNode,n):e.nodeType===1&&ca(e,n),vi(e)):ca(Ie,n.stateNode));break;case 4:s=Ie,r=yt,Ie=n.stateNode.containerInfo,yt=!0,Kt(e,t,n),Ie=s,yt=r;break;case 0:case 11:case 14:case 15:if(!Fe&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var a=r,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&hl(n,t,l),r=r.next}while(r!==s)}Kt(e,t,n);break;case 1:if(!Fe&&(ns(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(u){ye(n,t,u)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(Fe=(s=Fe)||n.memoizedState!==null,Kt(e,t,n),Fe=s):Kt(e,t,n);break;default:Kt(e,t,n)}}function pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ty),t.forEach(function(s){var r=dy.bind(null,e,s);n.has(s)||(n.add(s),s.then(r,r))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];try{var a=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ie=u.stateNode,yt=!1;break e;case 3:Ie=u.stateNode.containerInfo,yt=!0;break e;case 4:Ie=u.stateNode.containerInfo,yt=!0;break e}u=u.return}if(Ie===null)throw Error(O(160));Wp(a,l,r),Ie=null,yt=!1;var h=r.alternate;h!==null&&(h.return=null),r.return=null}catch(p){ye(r,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vp(t,e),t=t.sibling}function Vp(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Tt(e),s&4){try{li(3,e,e.return),yo(3,e)}catch(I){ye(e,e.return,I)}try{li(5,e,e.return)}catch(I){ye(e,e.return,I)}}break;case 1:mt(t,e),Tt(e),s&512&&n!==null&&ns(n,n.return);break;case 5:if(mt(t,e),Tt(e),s&512&&n!==null&&ns(n,n.return),e.flags&32){var r=e.stateNode;try{fi(r,"")}catch(I){ye(e,e.return,I)}}if(s&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&a.type==="radio"&&a.name!=null&&hh(r,a),Ua(u,l);var p=Ua(u,a);for(l=0;l<h.length;l+=2){var P=h[l],N=h[l+1];P==="style"?yh(r,N):P==="dangerouslySetInnerHTML"?mh(r,N):P==="children"?fi(r,N):Rl(r,P,N,p)}switch(u){case"input":_a(r,a);break;case"textarea":ph(r,a);break;case"select":var k=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var E=a.value;E!=null?is(r,!!a.multiple,E,!1):k!==!!a.multiple&&(a.defaultValue!=null?is(r,!!a.multiple,a.defaultValue,!0):is(r,!!a.multiple,a.multiple?[]:"",!1))}r[Si]=a}catch(I){ye(e,e.return,I)}}break;case 6:if(mt(t,e),Tt(e),s&4){if(e.stateNode===null)throw Error(O(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(I){ye(e,e.return,I)}}break;case 3:if(mt(t,e),Tt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{vi(t.containerInfo)}catch(I){ye(e,e.return,I)}break;case 4:mt(t,e),Tt(e);break;case 13:mt(t,e),Tt(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(dc=we())),s&4&&pd(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(Fe=(p=Fe)||P,mt(t,e),Fe=p):mt(t,e),Tt(e),s&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!P&&e.mode&1)for(B=e,P=e.child;P!==null;){for(N=B=P;B!==null;){switch(k=B,E=k.child,k.tag){case 0:case 11:case 14:case 15:li(4,k,k.return);break;case 1:ns(k,k.return);var j=k.stateNode;if(typeof j.componentWillUnmount=="function"){s=k,n=k.return;try{t=s,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(I){ye(s,n,I)}}break;case 5:ns(k,k.return);break;case 22:if(k.memoizedState!==null){md(N);continue}}E!==null?(E.return=k,B=E):md(N)}P=P.sibling}e:for(P=null,N=e;;){if(N.tag===5){if(P===null){P=N;try{r=N.stateNode,p?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(u=N.stateNode,h=N.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=gh("display",l))}catch(I){ye(e,e.return,I)}}}else if(N.tag===6){if(P===null)try{N.stateNode.nodeValue=p?"":N.memoizedProps}catch(I){ye(e,e.return,I)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;P===N&&(P=null),N=N.return}P===N&&(P=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:mt(t,e),Tt(e),s&4&&pd(e);break;case 21:break;default:mt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zp(n)){var s=n;break e}n=n.return}throw Error(O(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(fi(r,""),s.flags&=-33);var a=hd(e);ml(e,a,r);break;case 3:case 4:var l=s.stateNode.containerInfo,u=hd(e);fl(e,u,l);break;default:throw Error(O(161))}}catch(h){ye(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sy(e,t,n){B=e,$p(e)}function $p(e,t,n){for(var s=(e.mode&1)!==0;B!==null;){var r=B,a=r.child;if(r.tag===22&&s){var l=r.memoizedState!==null||mr;if(!l){var u=r.alternate,h=u!==null&&u.memoizedState!==null||Fe;u=mr;var p=Fe;if(mr=l,(Fe=h)&&!p)for(B=r;B!==null;)l=B,h=l.child,l.tag===22&&l.memoizedState!==null?gd(r):h!==null?(h.return=l,B=h):gd(r);for(;a!==null;)B=a,$p(a),a=a.sibling;B=r,mr=u,Fe=p}fd(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,B=a):fd(e)}}function fd(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Fe||yo(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!Fe)if(n===null)s.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);s.componentDidUpdate(r,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Ju(t,a,s);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ju(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var P=p.memoizedState;if(P!==null){var N=P.dehydrated;N!==null&&vi(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}Fe||t.flags&512&&pl(t)}catch(k){ye(t,t.return,k)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function md(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function gd(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yo(4,t)}catch(h){ye(t,n,h)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var r=t.return;try{s.componentDidMount()}catch(h){ye(t,r,h)}}var a=t.return;try{pl(t)}catch(h){ye(t,a,h)}break;case 5:var l=t.return;try{pl(t)}catch(h){ye(t,l,h)}}}catch(h){ye(t,t.return,h)}if(t===e){B=null;break}var u=t.sibling;if(u!==null){u.return=t.return,B=u;break}B=t.return}}var iy=Math.ceil,Qr=$t.ReactCurrentDispatcher,cc=$t.ReactCurrentOwner,dt=$t.ReactCurrentBatchConfig,J=0,Ee=null,ke=null,Re=0,Ze=0,ss=gn(0),Ce=0,Pi=null,_n=0,vo=0,uc=0,ci=null,Ye=null,dc=0,xs=1/0,Lt=null,qr=!1,gl=null,ln=null,gr=!1,tn=null,Jr=0,ui=0,yl=null,Er=-1,Pr=0;function We(){return J&6?we():Er!==-1?Er:Er=we()}function cn(e){return e.mode&1?J&2&&Re!==0?Re&-Re:Bg.transition!==null?(Pr===0&&(Pr=Ph()),Pr):(e=te,e!==0||(e=window.event,e=e===void 0?16:Oh(e.type)),e):1}function bt(e,t,n,s){if(50<ui)throw ui=0,yl=null,Error(O(185));Ri(e,n,s),(!(J&2)||e!==Ee)&&(e===Ee&&(!(J&2)&&(vo|=n),Ce===4&&Zt(e,Re)),qe(e,s),n===1&&J===0&&!(t.mode&1)&&(xs=we()+500,fo&&yn()))}function qe(e,t){var n=e.callbackNode;Bm(e,t);var s=Lr(e,e===Ee?Re:0);if(s===0)n!==null&&bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&bu(n),t===1)e.tag===0?Hg(yd.bind(null,e)):tp(yd.bind(null,e)),Og(function(){!(J&6)&&yn()}),n=null;else{switch(Ah(s)){case 1:n=Ml;break;case 4:n=Th;break;case 16:n=_r;break;case 536870912:n=Eh;break;default:n=_r}n=Zp(n,Gp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gp(e,t){if(Er=-1,Pr=0,J&6)throw Error(O(327));var n=e.callbackNode;if(cs()&&e.callbackNode!==n)return null;var s=Lr(e,e===Ee?Re:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Zr(e,s);else{t=s;var r=J;J|=2;var a=Xp();(Ee!==e||Re!==t)&&(Lt=null,xs=we()+500,Pn(e,t));do try{ay();break}catch(u){Yp(e,u)}while(!0);Ql(),Qr.current=a,J=r,ke!==null?t=0:(Ee=null,Re=0,t=Ce)}if(t!==0){if(t===2&&(r=Va(e),r!==0&&(s=r,t=vl(e,r))),t===1)throw n=Pi,Pn(e,0),Zt(e,s),qe(e,we()),n;if(t===6)Zt(e,s);else{if(r=e.current.alternate,!(s&30)&&!ry(r)&&(t=Zr(e,s),t===2&&(a=Va(e),a!==0&&(s=a,t=vl(e,a))),t===1))throw n=Pi,Pn(e,0),Zt(e,s),qe(e,we()),n;switch(e.finishedWork=r,e.finishedLanes=s,t){case 0:case 1:throw Error(O(345));case 2:bn(e,Ye,Lt);break;case 3:if(Zt(e,s),(s&130023424)===s&&(t=dc+500-we(),10<t)){if(Lr(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){We(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ja(bn.bind(null,e,Ye,Lt),t);break}bn(e,Ye,Lt);break;case 4:if(Zt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,r=-1;0<s;){var l=31-Ct(s);a=1<<l,l=t[l],l>r&&(r=l),s&=~a}if(s=r,s=we()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*iy(s/1960))-s,10<s){e.timeoutHandle=Ja(bn.bind(null,e,Ye,Lt),s);break}bn(e,Ye,Lt);break;case 5:bn(e,Ye,Lt);break;default:throw Error(O(329))}}}return qe(e,we()),e.callbackNode===n?Gp.bind(null,e):null}function vl(e,t){var n=ci;return e.current.memoizedState.isDehydrated&&(Pn(e,t).flags|=256),e=Zr(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&xl(t)),e}function xl(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function ry(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var r=n[s],a=r.getSnapshot;r=r.value;try{if(!Nt(a(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~uc,t&=~vo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),s=1<<n;e[n]=-1,t&=~s}}function yd(e){if(J&6)throw Error(O(327));cs();var t=Lr(e,0);if(!(t&1))return qe(e,we()),null;var n=Zr(e,t);if(e.tag!==0&&n===2){var s=Va(e);s!==0&&(t=s,n=vl(e,s))}if(n===1)throw n=Pi,Pn(e,0),Zt(e,t),qe(e,we()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Ye,Lt),qe(e,we()),null}function hc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(xs=we()+500,fo&&yn())}}function Ln(e){tn!==null&&tn.tag===0&&!(J&6)&&cs();var t=J;J|=1;var n=dt.transition,s=te;try{if(dt.transition=null,te=1,e)return e()}finally{te=s,dt.transition=n,J=t,!(J&6)&&yn()}}function pc(){Ze=ss.current,ue(ss)}function Pn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Lg(n)),ke!==null)for(n=ke.return;n!==null;){var s=n;switch(Yl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Hr();break;case 3:ys(),ue(Ke),ue(Ue),nc();break;case 5:tc(s);break;case 4:ys();break;case 13:ue(fe);break;case 19:ue(fe);break;case 10:ql(s.type._context);break;case 22:case 23:pc()}n=n.return}if(Ee=e,ke=e=un(e.current,null),Re=Ze=t,Ce=0,Pi=null,uc=vo=_n=0,Ye=ci=null,Tn!==null){for(t=0;t<Tn.length;t++)if(n=Tn[t],s=n.interleaved,s!==null){n.interleaved=null;var r=s.next,a=n.pending;if(a!==null){var l=a.next;a.next=r,s.next=l}n.pending=s}Tn=null}return e}function Yp(e,t){do{var n=ke;try{if(Ql(),br.current=Kr,Xr){for(var s=me.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Xr=!1}if(Dn=0,Te=Se=me=null,ai=!1,Ni=0,cc.current=null,n===null||n.return===null){Ce=1,Pi=t,ke=null;break}e:{var a=e,l=n.return,u=n,h=t;if(t=Re,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var p=h,P=u,N=P.tag;if(!(P.mode&1)&&(N===0||N===11||N===15)){var k=P.alternate;k?(P.updateQueue=k.updateQueue,P.memoizedState=k.memoizedState,P.lanes=k.lanes):(P.updateQueue=null,P.memoizedState=null)}var E=id(l);if(E!==null){E.flags&=-257,rd(E,l,u,a,t),E.mode&1&&sd(a,p,t),t=E,h=p;var j=t.updateQueue;if(j===null){var I=new Set;I.add(h),t.updateQueue=I}else j.add(h);break e}else{if(!(t&1)){sd(a,p,t),fc();break e}h=Error(O(426))}}else if(he&&u.mode&1){var L=id(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),rd(L,l,u,a,t),Xl(vs(h,u));break e}}a=h=vs(h,u),Ce!==4&&(Ce=2),ci===null?ci=[a]:ci.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=Ap(a,h,t);qu(a,m);break e;case 1:u=h;var w=a.type,b=a.stateNode;if(!(a.flags&128)&&(typeof w.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ln===null||!ln.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var D=Ip(a,u,t);qu(a,D);break e}}a=a.return}while(a!==null)}Qp(n)}catch(M){t=M,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Xp(){var e=Qr.current;return Qr.current=Kr,e===null?Kr:e}function fc(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Ee===null||!(_n&268435455)&&!(vo&268435455)||Zt(Ee,Re)}function Zr(e,t){var n=J;J|=2;var s=Xp();(Ee!==e||Re!==t)&&(Lt=null,Pn(e,t));do try{oy();break}catch(r){Yp(e,r)}while(!0);if(Ql(),J=n,Qr.current=s,ke!==null)throw Error(O(261));return Ee=null,Re=0,Ce}function oy(){for(;ke!==null;)Kp(ke)}function ay(){for(;ke!==null&&!Rm();)Kp(ke)}function Kp(e){var t=Jp(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Qp(e):ke=t,cc.current=null}function Qp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ey(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ke=null;return}}else if(n=Zg(n,t,Ze),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ce===0&&(Ce=5)}function bn(e,t,n){var s=te,r=dt.transition;try{dt.transition=null,te=1,ly(e,t,n,s)}finally{dt.transition=r,te=s}return null}function ly(e,t,n,s){do cs();while(tn!==null);if(J&6)throw Error(O(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(zm(e,a),e===Ee&&(ke=Ee=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gr||(gr=!0,Zp(_r,function(){return cs(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=dt.transition,dt.transition=null;var l=te;te=1;var u=J;J|=4,cc.current=null,ny(e,n),Vp(n,e),Eg(Qa),Or=!!Ka,Qa=Ka=null,e.current=n,sy(n),Dm(),J=u,te=l,dt.transition=a}else e.current=n;if(gr&&(gr=!1,tn=e,Jr=r),a=e.pendingLanes,a===0&&(ln=null),Om(n.stateNode),qe(e,we()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],s(r.value,{componentStack:r.stack,digest:r.digest});if(qr)throw qr=!1,e=gl,gl=null,e;return Jr&1&&e.tag!==0&&cs(),a=e.pendingLanes,a&1?e===yl?ui++:(ui=0,yl=e):ui=0,yn(),null}function cs(){if(tn!==null){var e=Ah(Jr),t=dt.transition,n=te;try{if(dt.transition=null,te=16>e?16:e,tn===null)var s=!1;else{if(e=tn,tn=null,Jr=0,J&6)throw Error(O(331));var r=J;for(J|=4,B=e.current;B!==null;){var a=B,l=a.child;if(B.flags&16){var u=a.deletions;if(u!==null){for(var h=0;h<u.length;h++){var p=u[h];for(B=p;B!==null;){var P=B;switch(P.tag){case 0:case 11:case 15:li(8,P,a)}var N=P.child;if(N!==null)N.return=P,B=N;else for(;B!==null;){P=B;var k=P.sibling,E=P.return;if(Bp(P),P===p){B=null;break}if(k!==null){k.return=E,B=k;break}B=E}}}var j=a.alternate;if(j!==null){var I=j.child;if(I!==null){j.child=null;do{var L=I.sibling;I.sibling=null,I=L}while(I!==null)}}B=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,B=l;else e:for(;B!==null;){if(a=B,a.flags&2048)switch(a.tag){case 0:case 11:case 15:li(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,B=m;break e}B=a.return}}var w=e.current;for(B=w;B!==null;){l=B;var b=l.child;if(l.subtreeFlags&2064&&b!==null)b.return=l,B=b;else e:for(l=w;B!==null;){if(u=B,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:yo(9,u)}}catch(M){ye(u,u.return,M)}if(u===l){B=null;break e}var D=u.sibling;if(D!==null){D.return=u.return,B=D;break e}B=u.return}}if(J=r,yn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(lo,e)}catch{}s=!0}return s}finally{te=n,dt.transition=t}}return!1}function vd(e,t,n){t=vs(n,t),t=Ap(e,t,1),e=an(e,t,1),t=We(),e!==null&&(Ri(e,1,t),qe(e,t))}function ye(e,t,n){if(e.tag===3)vd(e,e,n);else for(;t!==null;){if(t.tag===3){vd(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ln===null||!ln.has(s))){e=vs(n,e),e=Ip(t,e,1),t=an(t,e,1),e=We(),t!==null&&(Ri(t,1,e),qe(t,e));break}}t=t.return}}function cy(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(Re&n)===n&&(Ce===4||Ce===3&&(Re&130023424)===Re&&500>we()-dc?Pn(e,0):uc|=n),qe(e,t)}function qp(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=We();e=zt(e,t),e!==null&&(Ri(e,t,n),qe(e,n))}function uy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qp(e,n)}function dy(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(O(314))}s!==null&&s.delete(t),qp(e,n)}var Jp;Jp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Xe=!1,Jg(e,t,n);Xe=!!(e.flags&131072)}else Xe=!1,he&&t.flags&1048576&&np(t,Wr,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Tr(e,t),e=t.pendingProps;var r=fs(t,Ue.current);ls(t,n),r=ic(null,t,s,e,r,n);var a=rc();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(s)?(a=!0,Br(t)):a=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zl(t),r.updater=go,t.stateNode=r,r._reactInternals=t,rl(t,s,e,n),t=ll(null,t,s,!0,a,n)):(t.tag=0,he&&a&&Gl(t),ze(null,t,r,n),t=t.child),t;case 16:s=t.elementType;e:{switch(Tr(e,t),e=t.pendingProps,r=s._init,s=r(s._payload),t.type=s,r=t.tag=py(s),e=gt(s,e),r){case 0:t=al(null,t,s,e,n);break e;case 1:t=ld(null,t,s,e,n);break e;case 11:t=od(null,t,s,e,n);break e;case 14:t=ad(null,t,s,gt(s.type,e),n);break e}throw Error(O(306,s,""))}return t;case 0:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:gt(s,r),al(e,t,s,r,n);case 1:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:gt(s,r),ld(e,t,s,r,n);case 3:e:{if(Lp(t),e===null)throw Error(O(387));s=t.pendingProps,a=t.memoizedState,r=a.element,lp(e,t),Gr(t,s,null,n);var l=t.memoizedState;if(s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){r=vs(Error(O(423)),t),t=cd(e,t,s,n,r);break e}else if(s!==r){r=vs(Error(O(424)),t),t=cd(e,t,s,n,r);break e}else for(tt=on(t.stateNode.containerInfo.firstChild),nt=t,he=!0,vt=null,n=op(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),s===r){t=Wt(e,t,n);break e}ze(e,t,s,n)}t=t.child}return t;case 5:return cp(t),e===null&&nl(t),s=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,l=r.children,qa(s,r)?l=null:a!==null&&qa(s,a)&&(t.flags|=32),_p(e,t),ze(e,t,l,n),t.child;case 6:return e===null&&nl(t),null;case 13:return Op(e,t,n);case 4:return ec(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=gs(t,null,s,n):ze(e,t,s,n),t.child;case 11:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:gt(s,r),od(e,t,s,r,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,r=t.pendingProps,a=t.memoizedProps,l=r.value,oe(Vr,s._currentValue),s._currentValue=l,a!==null)if(Nt(a.value,l)){if(a.children===r.children&&!Ke.current){t=Wt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var u=a.dependencies;if(u!==null){l=a.child;for(var h=u.firstContext;h!==null;){if(h.context===s){if(a.tag===1){h=Ut(-1,n&-n),h.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var P=p.pending;P===null?h.next=h:(h.next=P.next,P.next=h),p.pending=h}}a.lanes|=n,h=a.alternate,h!==null&&(h.lanes|=n),sl(a.return,n,t),u.lanes|=n;break}h=h.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(O(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),sl(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}ze(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,s=t.pendingProps.children,ls(t,n),r=ht(r),s=s(r),t.flags|=1,ze(e,t,s,n),t.child;case 14:return s=t.type,r=gt(s,t.pendingProps),r=gt(s.type,r),ad(e,t,s,r,n);case 15:return Rp(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,r=t.pendingProps,r=t.elementType===s?r:gt(s,r),Tr(e,t),t.tag=1,Qe(s)?(e=!0,Br(t)):e=!1,ls(t,n),Pp(t,s,r),rl(t,s,r,n),ll(null,t,s,!0,e,n);case 19:return Mp(e,t,n);case 22:return Dp(e,t,n)}throw Error(O(156,t.tag))};function Zp(e,t){return Nh(e,t)}function hy(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,s){return new hy(e,t,n,s)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function py(e){if(typeof e=="function")return mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===Ll)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ar(e,t,n,s,r,a){var l=2;if(s=e,typeof e=="function")mc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Yn:return An(n.children,r,a,t);case Dl:l=8,r|=8;break;case Pa:return e=ut(12,n,t,r|2),e.elementType=Pa,e.lanes=a,e;case Aa:return e=ut(13,n,t,r),e.elementType=Aa,e.lanes=a,e;case Ia:return e=ut(19,n,t,r),e.elementType=Ia,e.lanes=a,e;case ch:return xo(n,r,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ah:l=10;break e;case lh:l=9;break e;case _l:l=11;break e;case Ll:l=14;break e;case Qt:l=16,s=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=ut(l,n,t,r),t.elementType=e,t.type=s,t.lanes=a,t}function An(e,t,n,s){return e=ut(7,e,s,t),e.lanes=n,e}function xo(e,t,n,s){return e=ut(22,e,s,t),e.elementType=ch,e.lanes=n,e.stateNode={isHidden:!1},e}function ya(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function va(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fy(e,t,n,s,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jo(0),this.expirationTimes=Jo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jo(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gc(e,t,n,s,r,a,l,u,h){return e=new fy(e,t,n,u,h),t===1?(t=1,a===!0&&(t|=8)):t=0,a=ut(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(a),e}function my(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function ef(e){if(!e)return fn;e=e._reactInternals;e:{if(Mn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(Qe(n))return ep(e,n,t)}return t}function tf(e,t,n,s,r,a,l,u,h){return e=gc(n,s,!0,e,r,a,l,u,h),e.context=ef(null),n=e.current,s=We(),r=cn(n),a=Ut(s,r),a.callback=t??null,an(n,a,r),e.current.lanes=r,Ri(e,r,s),qe(e,s),e}function wo(e,t,n,s){var r=t.current,a=We(),l=cn(r);return n=ef(n),t.context===null?t.context=n:t.pendingContext=n,t=Ut(a,l),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=an(r,t,l),e!==null&&(bt(e,r,l,a),Cr(e,r,l)),l}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yc(e,t){xd(e,t),(e=e.alternate)&&xd(e,t)}function gy(){return null}var nf=typeof reportError=="function"?reportError:function(e){console.error(e)};function vc(e){this._internalRoot=e}ko.prototype.render=vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));wo(e,t,null,null)};ko.prototype.unmount=vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){wo(null,e,null,null)}),t[Bt]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&Lh(e)}};function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function yy(e,t,n,s,r){if(r){if(typeof s=="function"){var a=s;s=function(){var p=eo(l);a.call(p)}}var l=tf(t,s,e,0,null,!1,!1,"",wd);return e._reactRootContainer=l,e[Bt]=l.current,ki(e.nodeType===8?e.parentNode:e),Ln(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var u=s;s=function(){var p=eo(h);u.call(p)}}var h=gc(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=h,e[Bt]=h.current,ki(e.nodeType===8?e.parentNode:e),Ln(function(){wo(t,h,n,s)}),h}function So(e,t,n,s,r){var a=n._reactRootContainer;if(a){var l=a;if(typeof r=="function"){var u=r;r=function(){var h=eo(l);u.call(h)}}wo(t,l,e,r)}else l=yy(n,t,e,r,s);return eo(l)}Ih=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zs(t.pendingLanes);n!==0&&(Fl(t,n|1),qe(t,we()),!(J&6)&&(xs=we()+500,yn()))}break;case 13:Ln(function(){var s=zt(e,1);if(s!==null){var r=We();bt(s,e,1,r)}}),yc(e,1)}};Ul=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=We();bt(t,e,134217728,n)}yc(e,134217728)}};Rh=function(e){if(e.tag===13){var t=cn(e),n=zt(e,t);if(n!==null){var s=We();bt(n,e,t,s)}yc(e,t)}};Dh=function(){return te};_h=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};Ba=function(e,t,n){switch(t){case"input":if(_a(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var r=po(s);if(!r)throw Error(O(90));dh(s),_a(s,r)}}}break;case"textarea":ph(e,n);break;case"select":t=n.value,t!=null&&is(e,!!n.multiple,t,!1)}};wh=hc;kh=Ln;var vy={usingClientEntryPoint:!1,Events:[_i,qn,po,vh,xh,hc]},Qs={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xy={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ch(e),e===null?null:e.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{lo=yr.inject(xy),It=yr}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(t))throw Error(O(200));return my(e,t,null,n)};it.createRoot=function(e,t){if(!xc(e))throw Error(O(299));var n=!1,s="",r=nf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=gc(e,1,!1,null,null,n,!1,s,r),e[Bt]=t.current,ki(e.nodeType===8?e.parentNode:e),new vc(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Ch(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Ln(e)};it.hydrate=function(e,t,n){if(!jo(t))throw Error(O(200));return So(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!xc(e))throw Error(O(405));var s=n!=null&&n.hydratedSources||null,r=!1,a="",l=nf;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=tf(t,null,e,1,n??null,r,!1,a,l),e[Bt]=t.current,ki(e),s)for(e=0;e<s.length;e++)n=s[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new ko(t)};it.render=function(e,t,n){if(!jo(t))throw Error(O(200));return So(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!jo(e))throw Error(O(40));return e._reactRootContainer?(Ln(function(){So(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1};it.unstable_batchedUpdates=hc;it.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!jo(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return So(e,t,n,!1,s)};it.version="18.3.1-next-f1338f8080-20240426";function sf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf)}catch(e){console.error(e)}}sf(),sh.exports=it;var wy=sh.exports,kd=wy;Ta.createRoot=kd.createRoot,Ta.hydrateRoot=kd.hydrateRoot;const ws={cryptography:[{id:"crypto-1",title:"Caesar Cipher Basics",difficulty:"Easy",points:10,description:"Julius Caesar used a simple cipher to protect his messages. In a Caesar cipher, each letter is shifted by a fixed number of positions in the alphabet.",learningObjective:"Understand how substitution ciphers work and practice decryption techniques.",vocabularyTerms:["caesar-cipher","cipher","encryption","decryption","plaintext","ciphertext"],prompt:`The following message was encrypted with a Caesar cipher using a shift of 3:

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
D) Throw it away`,hints:["USB drives can contain malware","The label is designed to make you curious","Never plug unknown devices into any computer","IT/Security has safe ways to examine it","Options C and D are both safe, but C is most helpful","The flag is FLAG{C}"],answer:"C",flag:"FLAG{C}",explanation:'This is "USB baiting". The label exploits curiosity. Never plug unknown USB drives into any computer. Report to IT/Security who can safely examine it in an isolated environment.'}]},ky=()=>Object.values(ws).flat(),jy=e=>ky().find(t=>t.id===e),ti={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},Sy={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]},se={PORT_SCAN:"port-scan",BRUTE_FORCE_SSH:"brute-force-ssh",SQL_INJECTION:"sql-injection",DATA_EXFILTRATION:"data-exfiltration",DDOS:"ddos",DNS_TUNNELING:"dns-tunneling"},rf={[se.PORT_SCAN]:{name:"Port Scan",description:"An attacker is scanning multiple ports on your system to find open services.",severity:"medium",indicators:["Single source IP connecting to many different ports","Sequential or rapid port probing","SYN packets without completing handshake"],mitigation:"Block the scanning IP address"},[se.BRUTE_FORCE_SSH]:{name:"SSH Brute Force",description:"An attacker is attempting to guess SSH credentials through repeated login attempts.",severity:"high",indicators:["Multiple failed SSH authentication attempts","Same source IP with repeated connections to port 22","Various username attempts (root, admin, user)"],mitigation:"Block the attacking IP and implement rate limiting"},[se.SQL_INJECTION]:{name:"SQL Injection",description:"An attacker is attempting to inject malicious SQL code through web requests.",severity:"critical",indicators:["HTTP requests containing SQL keywords (SELECT, UNION, DROP)","Special characters in URL parameters (', --, ;)","Attempts to manipulate database queries"],mitigation:"Block the source IP and review web application security"},[se.DATA_EXFILTRATION]:{name:"Data Exfiltration",description:"Large amounts of data are being transferred to an external IP address.",severity:"critical",indicators:["Unusually large outbound data transfers","Data sent to unfamiliar external IPs","Sustained high-bandwidth connections"],mitigation:"Block the external IP and investigate compromised system"},[se.DDOS]:{name:"DDoS Attack",description:"Multiple sources are flooding the network with traffic to overwhelm services.",severity:"high",indicators:["High volume of traffic from many sources","Repeated requests to same destination","Network bandwidth saturation"],mitigation:"Enable rate limiting and block attacking IPs"},[se.DNS_TUNNELING]:{name:"DNS Tunneling",description:"Data is being exfiltrated through encoded DNS queries.",severity:"high",indicators:["Unusual DNS query patterns","Long subdomain names with encoded data","High volume of TXT record queries"],mitigation:"Block suspicious DNS queries and investigate endpoint"}},Cy={[se.PORT_SCAN]:{windowSeconds:10,thresholds:{uniquePortsFromSameSource:5,packetsPerSecond:3},check:(e,t=1e4)=>{const n=Date.now(),s=e.filter(a=>new Date(a.timestamp).getTime()>n-t),r={};s.forEach(a=>{r[a.sourceIP]||(r[a.sourceIP]=new Set),r[a.sourceIP].add(a.destPort)});for(const[a,l]of Object.entries(r))if(l.size>=5)return{detected:!0,attackerIP:a,evidence:`${l.size} ports scanned`};return{detected:!1}}},[se.BRUTE_FORCE_SSH]:{windowSeconds:30,thresholds:{failedAttemptsFromSameSource:5},check:(e,t=3e4)=>{const n=Date.now(),s=e.filter(a=>new Date(a.timestamp).getTime()>n-t&&a.protocol==="SSH"&&a.info.toLowerCase().includes("failed")),r={};s.forEach(a=>{r[a.sourceIP]=(r[a.sourceIP]||0)+1});for(const[a,l]of Object.entries(r))if(l>=5)return{detected:!0,attackerIP:a,evidence:`${l} failed SSH attempts`};return{detected:!1}}},[se.SQL_INJECTION]:{patterns:[/('|"|;|--|\/\*|\*\/|union|select|insert|update|delete|drop|exec|execute)/i,/(or|and)\s+['"]?\d+['"]?\s*=\s*['"]?\d+/i,/'\s*(or|and)\s*'[^']*'\s*=\s*'/i],check:e=>{const t=e.filter(n=>n.protocol==="HTTP"&&n.isMalicious&&n.attackType===se.SQL_INJECTION);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} SQL injection attempts`}:{detected:!1}}},[se.DATA_EXFILTRATION]:{thresholds:{bytesPerWindow:1e5,windowSeconds:30},check:(e,t=3e4)=>{const n=Date.now(),s=e.filter(a=>new Date(a.timestamp).getTime()>n-t),r={};s.forEach(a=>{!a.destIP.startsWith("192.168.")&&!a.destIP.startsWith("10.")&&!a.destIP.startsWith("172.16.")&&(r[a.destIP]=(r[a.destIP]||0)+a.length)});for(const[a,l]of Object.entries(r))if(l>=1e5)return{detected:!0,attackerIP:a,evidence:`${Math.round(l/1024)}KB exfiltrated`};return{detected:!1}}},[se.DNS_TUNNELING]:{check:e=>{const t=e.filter(n=>n.protocol==="DNS"&&n.isMalicious&&n.attackType===se.DNS_TUNNELING);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} suspicious DNS queries`}:{detected:!1}}}},jt=[{id:"port-scan-basic",name:"Port Scan Detection",difficulty:"Easy",points:25,description:"A suspicious IP address is probing your network, scanning multiple ports to find vulnerable services. Identify and block the attacker.",learningObjective:"Learn to recognize port scanning behavior by observing sequential port connections from a single source.",attackType:se.PORT_SCAN,duration:60,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:3},hints:["Look for a single IP connecting to many different ports","Port scanners often use sequential port numbers","The attacker IP will have connections to ports like 21, 22, 23, 80, 443, etc."],backgroundTraffic:{packetsPerSecond:1,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:8,packetsPerSecond:1.5,attackerIP:"185.220.101.42",targetPorts:[21,22,23,25,80,110,143,443,445,3389,8080,8443]}},{id:"ssh-brute-force",name:"SSH Brute Force Attack",difficulty:"Medium",points:35,description:"An attacker is attempting to gain unauthorized access by guessing SSH credentials. Multiple failed login attempts indicate a brute force attack in progress.",learningObjective:"Understand how brute force attacks work and learn to identify repeated authentication failures.",attackType:se.BRUTE_FORCE_SSH,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for repeated SSH connections from the same IP","Failed authentication messages are a key indicator","Brute force attacks try common usernames: root, admin, user"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:10,packetsPerSecond:1,attackerIP:"198.51.100.77",targetPort:22,usernames:["root","admin","administrator","user","guest","test"]}},{id:"sql-injection-probe",name:"SQL Injection Probing",difficulty:"Medium",points:40,description:"Malicious HTTP requests containing SQL injection payloads are targeting your web application. These attacks attempt to manipulate database queries.",learningObjective:"Learn to identify SQL injection patterns in HTTP requests and understand common injection techniques.",attackType:se.SQL_INJECTION,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:4},hints:[`Look for special characters in HTTP requests: ' " ; --`,"SQL keywords like UNION, SELECT, DROP are red flags","Check URL parameters and POST data for suspicious patterns"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:10,packetsPerSecond:.75,attackerIP:"203.0.113.99",targetPort:80}},{id:"data-exfiltration",name:"Data Exfiltration",difficulty:"Medium",points:40,description:"A compromised internal system is sending large amounts of data to an external IP. This could indicate stolen data being transferred out of the network.",learningObjective:"Learn to detect unusual outbound traffic patterns that may indicate data theft.",attackType:se.DATA_EXFILTRATION,duration:120,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for unusually large packet sizes going outbound","The destination IP will be external (not 192.168.x.x or 10.x.x.x)","Look for sustained transfers to the same external destination"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:12,packetsPerSecond:1,attackerIP:"45.33.32.156",sourceIP:"192.168.1.105",minPacketSize:5e3,maxPacketSize:15e3}}],by=()=>jt.reduce((e,t)=>e+t.points,0),Ny=()=>({total:jt.length,easy:jt.filter(e=>e.difficulty==="Easy").length,medium:jt.filter(e=>e.difficulty==="Medium").length,hard:jt.filter(e=>e.difficulty==="Hard").length,totalPoints:by()}),wc={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
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
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function Ty(e){const t=wc[e];if(!t)return[];const n=[];for(const s of t.days)n.push(...s.exercises);return n}const de={"cyber-range":{id:"cyber-range",name:"Cybersecurity",description:"Interactive cybersecurity challenges and simulations",color:"#00ff88",icon:"🔐",units:[{id:"cryptography",name:"Cryptography",description:"Learn encryption, decryption, and cipher techniques",challengeCount:5},{id:"network",name:"Network Security",description:"Understand firewalls, ports, and network protocols",challengeCount:4},{id:"password",name:"Password Security",description:"Create strong passwords and understand attacks",challengeCount:4},{id:"web",name:"Web Security",description:"Learn about XSS, SQL injection, and secure coding",challengeCount:3},{id:"social",name:"Social Engineering",description:"Recognize phishing and manipulation tactics",challengeCount:3},{id:"network-monitor",name:"Network Monitor",description:"Real-time packet analysis and threat detection",challengeCount:1,isScenario:!0}]},"arrays-loops":{id:"arrays-loops",name:"Programming",description:"Arrays, loops, and traversal with p5.js",color:"#00d4ff",icon:"💻",units:[{id:"week1",name:"Week 1: Arrays Basics",description:"Store collections of values and access by index",exerciseCount:8},{id:"week2",name:"Week 2: Loops Basics",description:"Use for-loops and while-loops to repeat instructions",exerciseCount:8},{id:"week3",name:"Week 3: Traversing Arrays",description:"Loop through arrays to process every element",exerciseCount:7},{id:"week4",name:"Week 4: Filtering & 2D Arrays",description:"Filter arrays and work with grids",exerciseCount:8}]},"ap-csp":{id:"ap-csp",name:"AP CSP Exam Prep",description:"Pseudocode translation and flowchart interpretation",color:"#ff6b9d",icon:"📝",units:[{id:"pseudocode",name:"Pseudocode",description:"Translate between AP CSP pseudocode and JavaScript",exerciseCount:30},{id:"flowcharts",name:"Flowcharts",description:"Read, interpret, and build flowcharts",exerciseCount:20}]}},us=[{id:"assignment",title:"Assignment & Variables",pseudocode:"a ← expression",javascript:"let a = expression;",explanation:"The arrow (←) assigns a value to a variable. In pseudocode, you don't need to declare variables with let/const - just use the arrow to create and assign.",examples:[{pseudocode:"x ← 5",javascript:"let x = 5;"},{pseudocode:'name ← "Alice"',javascript:'let name = "Alice";'},{pseudocode:"total ← price + tax",javascript:"let total = price + tax;"},{pseudocode:"x ← x + 1",javascript:"x = x + 1; // or x++"}],keyPoints:["← is the assignment operator (like = in JavaScript)","Variables are created automatically when first assigned","Can reassign variables without re-declaring"]},{id:"display-input",title:"Display & Input",pseudocode:`DISPLAY(expression)
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
}`,javascript:"// Checks if path is clear before moving"}],keyPoints:["Robot starts somewhere on a grid","Black squares are walls/obstacles","Robot can only move to white/open squares","CAN_MOVE returns true/false"]}],dn=[{id:"ps-001",topic:"assignment",difficulty:"beginner",type:"pseudocode-to-js",prompt:"Convert this pseudocode to JavaScript:",given:`x ← 10
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
DISPLAY(max)`,blankAnswers:{blank1:["1","0"],blank2:[">","> max"],blank3:["n"]},hints:["Start with the first element (index 1 in pseudocode)","Check if current is greater than max","Update max to the new larger value"],explanation:"Initialize max to first element, then compare each n. If n > max, update max to n."}],wl=[{id:"oval",name:"Oval / Terminator",purpose:"Start or End of the program/algorithm",description:"Every flowchart must have a Start and End. The oval shape indicates where the flow begins and where it terminates.",examples:["Start","End","Begin","Stop"],color:"#10b981",shape:"ellipse"},{id:"rectangle",name:"Rectangle / Process",purpose:"An action, calculation, or process step",description:'Represents any processing operation: assignments, calculations, or actions. This is where the actual "work" happens.',examples:["total ← price + tax","count ← count + 1","Send email","Calculate average"],color:"#3b82f6",shape:"rectangle"},{id:"diamond",name:"Diamond / Decision",purpose:"A yes/no question or condition check",description:"Used for branching logic (if/else). The condition is written inside, and two arrows come out: one for Yes/True and one for No/False.",examples:["Is x > 10?","age ≥ 18?","Found?","Done?"],color:"#f59e0b",shape:"diamond"},{id:"parallelogram",name:"Parallelogram / Input-Output",purpose:"Getting input or showing output",description:"Represents data entering the system (input from user) or leaving it (display/print). Think DISPLAY and INPUT operations.",examples:["Get user name",'Display "Hello"',"INPUT age","Print result"],color:"#8b5cf6",shape:"parallelogram"},{id:"arrow",name:"Arrow / Flow Line",purpose:"Shows direction of flow",description:"Connects shapes and shows the order of operations. Flow typically goes top-to-bottom and left-to-right. Arrows point to the next step.",examples:["→","↓","←","↑"],color:"#6b7280",shape:"arrow"}],ds=[{id:"fc-001",title:"Simple Decision Trace",difficulty:"beginner",type:"interpret",description:"Follow the flowchart to determine the output.",question:"What will be displayed if x = 7?",flowchartRef:"fc-ex-003",answer:"Positive",hints:["Start at the top and follow the arrows","At the diamond, check: is 7 > 0?","Follow the path that matches the answer"],explanation:'Starting at Start, we reach the decision "x > 0?". Since 7 > 0 is true (Yes), we follow the Yes path to display "Positive".'},{id:"fc-002",title:"Pass/Fail Check",difficulty:"beginner",type:"interpret",description:"Determine the output for a given input.",question:"What will be displayed if score = 55?",flowchartRef:"fc-ex-004",answer:"Fail",hints:["Input score = 55","Check the condition: is 55 ≥ 60?","Follow the appropriate path"],explanation:`55 is not ≥ 60 (it's less than 60), so the condition is false (No). Following the No path leads to displaying "Fail".`},{id:"fc-003",title:"Exact Boundary",difficulty:"beginner",type:"interpret",description:"Test a boundary condition.",question:"What will be displayed if score = 60?",flowchartRef:"fc-ex-004",answer:"Pass",hints:["60 is exactly the passing score","Is 60 ≥ 60?",'The ≥ means "greater than OR equal to"'],explanation:'60 is equal to 60, and since the condition uses ≥ (greater than or equal), 60 ≥ 60 is true. Output: "Pass".'},{id:"fc-004",title:"Loop Trace",difficulty:"intermediate",type:"interpret",description:"Trace through a counting loop.",question:"What numbers will be displayed by this flowchart?",flowchartRef:"fc-ex-005",answer:"1, 2, 3, 4, 5",hints:["count starts at 1","Loop continues while count is NOT > 5","After displaying, count increases by 1"],explanation:"count: 1 (display 1, count=2), 2 (display 2, count=3), 3 (display 3, count=4), 4 (display 4, count=5), 5 (display 5, count=6). When count=6, 6>5 is true, so loop exits."},{id:"fc-005",title:"Sum Calculation",difficulty:"intermediate",type:"interpret",description:"Calculate the result of a summation loop.",question:"If n = 4, what is the final value of sum displayed?",flowchartRef:"fc-ex-006",answer:"10",hints:["sum starts at 0, i starts at 1","Add i to sum, then increment i","1 + 2 + 3 + 4 = ?"],explanation:"Loop iterations: i=1: sum=0+1=1. i=2: sum=1+2=3. i=3: sum=3+3=6. i=4: sum=6+4=10. When i=5, 5>4 is true, exit and display 10."},{id:"fc-006",title:"Maximum of Three",difficulty:"intermediate",type:"interpret",description:"Determine which variable holds the maximum.",question:"If a=5, b=8, c=3, what path does the flowchart take and what is displayed?",flowchartRef:"fc-ex-007",answer:"8 (max ← b)",hints:["First check: is a ≥ b AND a ≥ c?","If not, check: is b ≥ c?","Follow the true condition"],explanation:"a=5 ≥ b=8? No, so first condition is false. Go to second decision: b=8 ≥ c=3? Yes, so max ← b = 8."},{id:"fc-007",title:"Identify Symbols",difficulty:"beginner",type:"symbol-match",description:"Match each flowchart symbol to its purpose.",question:"Match each shape to what it represents:",items:[{shape:"oval",options:["Start/End","Decision","Process","Input/Output"]},{shape:"diamond",options:["Start/End","Decision","Process","Input/Output"]},{shape:"rectangle",options:["Start/End","Decision","Process","Input/Output"]},{shape:"parallelogram",options:["Start/End","Decision","Process","Input/Output"]}],answer:{oval:"Start/End",diamond:"Decision",rectangle:"Process",parallelogram:"Input/Output"},hints:["Ovals are at the beginning and end","Diamonds ask yes/no questions","Rectangles do work/calculations"],explanation:"Oval = Start/End (terminators), Diamond = Decision (branching), Rectangle = Process (actions/calculations), Parallelogram = Input/Output (data flow)."},{id:"fc-008",title:"What Shape?",difficulty:"beginner",type:"multiple-choice",description:"Choose the correct shape for a given action.",question:'Which shape would you use for the statement: "Display the result"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Parallelogram",hints:["Display is a type of output","Parallelograms handle data entering or leaving the system"],explanation:"DISPLAY is an output operation, which is represented by a parallelogram (Input/Output symbol)."},{id:"fc-009",title:"Decision Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a condition.",question:'Which shape represents the statement: "IF score >= 60"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Diamond",hints:["IF statements check a condition","Conditions result in yes/no answers"],explanation:"IF statements are decisions that branch the flow based on a condition. Diamonds represent decisions with Yes/No paths."},{id:"fc-010",title:"Process Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a calculation.",question:'Which shape would you use for: "total ← total + price"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Rectangle",hints:["This is a calculation/assignment","No input, output, or decision happening"],explanation:"Assignment and calculations are processes represented by rectangles. This adds price to total - a processing step."},{id:"fc-011",title:"Build: Even or Odd",difficulty:"beginner",type:"build",description:"Create a flowchart to check if a number is even or odd.",requirements:["Start with a Start oval","Get a number from the user (Input)","Check if the number MOD 2 equals 0",'Display "Even" if yes, "Odd" if no',"End with an End oval"],pseudocode:`num ← INPUT()
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
}`,hints:["Initialize before the loop","Decision that loops back = REPEAT UNTIL","Code inside loop is the body"],explanation:'The arrow looping back indicates repetition. The decision "count > 5?" with a loop-back path becomes REPEAT UNTIL (count > 5).'},{id:"fc-018",title:"Loop Count",difficulty:"intermediate",type:"multiple-choice",description:"Analyze loop behavior.",question:'In a flowchart, a loop has initialization "i ← 1", condition "i > 10?", and increment "i ← i + 2". How many times does the loop body execute?',options:["5 times","6 times","10 times","11 times"],answer:"5 times",hints:["List out the values of i","i starts at 1, increases by 2 each time","Loop continues while i ≤ 10"],explanation:"i values: 1, 3, 5, 7, 9 (all ≤ 10, so loop runs). When i becomes 11, 11 > 10 is true and loop exits. Ran 5 times."},{id:"fc-019",title:"Flowchart Purpose",difficulty:"beginner",type:"multiple-choice",description:"Understand what flowcharts are for.",question:"What is the main purpose of a flowchart?",options:["To write executable code","To visually represent the logic and flow of an algorithm","To store data in a program","To test code for bugs"],answer:"To visually represent the logic and flow of an algorithm",hints:["Flowcharts are visual tools","They show steps and decisions","They're used before or alongside coding"],explanation:"Flowcharts provide a visual representation of how an algorithm works, showing the sequence of steps, decisions, and loops. They help plan and communicate logic before writing actual code."},{id:"fc-020",title:"Arrow Direction",difficulty:"beginner",type:"multiple-choice",description:"Understand flow direction.",question:"In a standard flowchart, what is the typical direction of flow?",options:["Right to left","Bottom to top","Top to bottom, left to right","Randomly in any direction"],answer:"Top to bottom, left to right",hints:["Think about how you read text",'Where is "Start" usually placed?','Where is "End" usually placed?'],explanation:"Flowcharts follow a top-to-bottom, left-to-right flow by convention. Start is at the top, End is at the bottom, and operations flow downward. This makes flowcharts easy to read like text."}],Ey=({studentName:e,totalPoints:t,assignments:n,completedChallenges:s,completedScenarios:r,completedExercises:a,completedPseudocode:l=[],completedFlowcharts:u=[],onSelectCategory:h,onSelectNetworkMonitor:p,onSelectWeek:P,onSelectAPCSP:N})=>{const k=n.some(f=>f.type==="cyber-range"),E=n.some(f=>f.type==="arrays-loops"),j=n.some(f=>f.type==="ap-csp"),I=f=>{if(f==="network-monitor")return{completed:r.length,total:jt.length,percentage:jt.length>0?r.length/jt.length*100:0};const v=ws[f]||[],y=v.filter(C=>s.includes(C.id)).length;return{completed:y,total:v.length,percentage:v.length>0?y/v.length*100:0}},L=f=>{const v=Ty(f),y=v.filter(C=>a.includes(C.id)).length;return{completed:y,total:v.length,percentage:v.length>0?y/v.length*100:0}},m=f=>f==="pseudocode"?{completed:l.length,total:dn.length,percentage:dn.length>0?l.length/dn.length*100:0}:{completed:u.length,total:ds.length,percentage:ds.length>0?u.length/ds.length*100:0},w=s.length+r.length,b=a.length,D=l.length+u.length,M=[{id:"cryptography",name:"Cryptography",icon:"[ CRYPTO ]",description:"Encryption, ciphers, and secure communication"},{id:"network",name:"Network Security",icon:"[ NETWORK ]",description:"Network protocols, ports, and traffic analysis"},{id:"password",name:"Password Security",icon:"[ PASSWD ]",description:"Password strength and authentication"},{id:"web",name:"Web Security",icon:"[ WEB ]",description:"Web vulnerabilities and secure coding"},{id:"social",name:"Social Engineering",icon:"[ SOCIAL ]",description:"Manipulation tactics and security awareness"},{id:"network-monitor",name:"Network Monitor",icon:"[ MONITOR ]",description:"Real-time traffic analysis",isScenario:!0}],F=[{id:"pseudocode",name:"Pseudocode",icon:"[ CODE ]",description:"Translate between AP CSP pseudocode and JavaScript"},{id:"flowcharts",name:"Flowcharts",icon:"[ FLOW ]",description:"Read, interpret, and build flowcharts"}],S=k||E||j;return i.jsxs("div",{className:"unified-dashboard",children:[i.jsxs("div",{className:"welcome-section",children:[i.jsxs("h1",{children:["Welcome, ",e,"!"]}),i.jsx("p",{children:"Complete your assigned work below. Track your progress across both cybersecurity and programming content."})]}),i.jsxs("div",{className:"stats",children:[i.jsxs("div",{className:"stat-card",children:[i.jsx("span",{className:"stat-value",children:t}),i.jsx("span",{className:"stat-label",children:"Total Points"})]}),i.jsxs("div",{className:"stat-card cyber",children:[i.jsx("span",{className:"stat-value",children:w}),i.jsx("span",{className:"stat-label",children:"Cyber Challenges"})]}),i.jsxs("div",{className:"stat-card programming",children:[i.jsx("span",{className:"stat-value",children:b}),i.jsx("span",{className:"stat-label",children:"Programming Exercises"})]}),i.jsxs("div",{className:"stat-card apcsp",children:[i.jsx("span",{className:"stat-value",children:D}),i.jsx("span",{className:"stat-label",children:"AP CSP Exercises"})]})]}),S?i.jsxs(i.Fragment,{children:[k&&i.jsxs("section",{className:"content-section cyber-section",children:[i.jsxs("h2",{className:"section-title cyber",children:[i.jsx("span",{className:"section-icon",children:de["cyber-range"].icon}),"Cybersecurity Challenges"]}),i.jsx("div",{className:"categories",children:M.map(f=>{const v=I(f.id);return i.jsxs("div",{className:"category-card cyber",onClick:()=>f.isScenario?p():h(f.id),children:[i.jsx("div",{className:"category-icon",children:f.icon}),i.jsx("h3",{children:f.name}),i.jsx("p",{className:"category-description",children:f.description}),i.jsxs("p",{className:"category-progress-text",children:[v.completed," / ",v.total," completed"]}),i.jsx("div",{className:"category-progress",children:i.jsx("div",{className:"category-progress-bar cyber",style:{width:`${v.percentage}%`}})})]},f.id)})})]}),E&&i.jsxs("section",{className:"content-section programming-section",children:[i.jsxs("h2",{className:"section-title programming",children:[i.jsx("span",{className:"section-icon",children:de["arrays-loops"].icon}),"Programming Exercises"]}),i.jsx("div",{className:"categories",children:Object.entries(wc).map(([f,v])=>{const y=L(f),C=f.replace("week","");return i.jsxs("div",{className:"category-card programming",onClick:()=>P(f),children:[i.jsxs("div",{className:"category-icon",children:["[ WEEK ",C," ]"]}),i.jsx("h3",{children:v.title}),i.jsx("p",{className:"category-description",children:v.bigIdea}),i.jsxs("p",{className:"category-progress-text",children:[y.completed," / ",y.total," completed"]}),i.jsx("div",{className:"category-progress",children:i.jsx("div",{className:"category-progress-bar programming",style:{width:`${y.percentage}%`}})})]},f)})})]}),j&&i.jsxs("section",{className:"content-section apcsp-section",children:[i.jsxs("h2",{className:"section-title apcsp",children:[i.jsx("span",{className:"section-icon",children:de["ap-csp"].icon}),"AP CSP Exam Prep"]}),i.jsx("div",{className:"categories",children:F.map(f=>{const v=m(f.id);return i.jsxs("div",{className:"category-card apcsp",onClick:()=>N(f.id),children:[i.jsx("div",{className:"category-icon",children:f.icon}),i.jsx("h3",{children:f.name}),i.jsx("p",{className:"category-description",children:f.description}),i.jsxs("p",{className:"category-progress-text",children:[v.completed," / ",v.total," completed"]}),i.jsx("div",{className:"category-progress",children:i.jsx("div",{className:"category-progress-bar apcsp",style:{width:`${v.percentage}%`}})})]},f.id)})})]})]}):i.jsxs("div",{className:"no-assignments",children:[i.jsx("div",{className:"no-assignments-icon",children:"[ WAITING ]"}),i.jsx("h2",{children:"No Assignments Yet"}),i.jsx("p",{children:"Your teacher hasn't assigned any content yet. Check back soon!"})]}),i.jsxs("div",{className:"learning-objectives",children:[i.jsx("h3",{children:"About This Platform"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Complete assigned challenges and exercises at your own pace"}),i.jsx("li",{children:"Earn points by completing each activity"}),i.jsx("li",{children:"Your progress is automatically saved"}),i.jsx("li",{children:"Access vocabulary terms for help with key concepts"})]})]})]})},Py=({category:e,completedChallenges:t,onSelectChallenge:n})=>{const s={cryptography:"Cryptography",network:"Network Security",password:"Password Security",web:"Web Security",social:"Social Engineering"},r=ws[e]||[];return i.jsxs("div",{children:[i.jsxs("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:[s[e]," Challenges"]}),i.jsxs("div",{className:"learning-objectives",children:[i.jsx("h3",{children:"Learning Objectives"}),i.jsx("ul",{children:(Sy[e]||[]).map((a,l)=>i.jsx("li",{children:a},l))})]}),i.jsx("div",{className:"challenge-list",children:r.map(a=>{const l=t.includes(a.id);return i.jsxs("div",{className:`challenge-item ${l?"completed":""}`,onClick:()=>n(a.id),children:[i.jsxs("div",{className:"challenge-info",children:[i.jsx("h3",{children:a.title}),i.jsxs("p",{style:{color:"#b0b0b0",margin:"0.5rem 0"},children:[a.description.substring(0,120),"..."]}),i.jsxs("div",{className:"challenge-meta",children:[i.jsx("span",{className:`difficulty ${a.difficulty}`,children:a.difficulty}),i.jsxs("span",{className:"points",children:[a.points," points"]})]})]}),i.jsx("div",{className:"challenge-status",children:l?"✅":"🔒"})]},a.id)})})]})},Ay=({challengeId:e,onComplete:t,onBack:n,isCompleted:s})=>{const[r,a]=R.useState(""),[l,u]=R.useState(!1),[h,p]=R.useState(null),[P,N]=R.useState(s),[k,E]=R.useState(null),j=jy(e);if(!j)return i.jsx("div",{children:"Challenge not found"});const I=()=>{var D,M;const m=r.trim().toUpperCase();[(D=j.answer)==null?void 0:D.toUpperCase(),(M=j.flag)==null?void 0:M.toUpperCase()].filter(Boolean).some(F=>m===F||m.includes(F))?(p({type:"success",message:"Correct! Well done!"}),N(!0),t(e,j.points)):p({type:"error",message:"Incorrect. Try again or check the hints!"})},L=m=>{E(k===m?null:m)};return i.jsxs("div",{className:"challenge-detail",children:[i.jsxs("div",{className:"challenge-header",children:[i.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:i.jsxs("div",{children:[i.jsx("h2",{children:j.title}),i.jsxs("div",{className:"challenge-meta",style:{marginTop:"1rem"},children:[i.jsx("span",{className:`difficulty ${j.difficulty}`,children:j.difficulty}),i.jsxs("span",{className:"points",children:[j.points," points"]}),s&&i.jsx("span",{style:{color:"#4caf50",fontWeight:"bold"},children:"✅ Completed"})]})]})}),i.jsxs("div",{className:"learning-objective",children:[i.jsx("strong",{children:"Learning Objective:"})," ",j.learningObjective]}),i.jsx("p",{style:{marginTop:"1rem",lineHeight:"1.6"},children:j.description})]}),j.vocabularyTerms&&j.vocabularyTerms.length>0&&i.jsxs("div",{className:"vocabulary-section",children:[i.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Key Vocabulary"}),i.jsx("div",{className:"vocabulary-tags",children:j.vocabularyTerms.map(m=>{const w=ti[m];return w?i.jsx("div",{className:"vocab-tag",onClick:()=>L(m),style:{borderColor:k===m?"#00ff88":"transparent"},children:w.term},m):null})}),k&&ti[k]&&i.jsxs("div",{style:{background:"rgba(0, 255, 136, 0.1)",padding:"1rem",borderRadius:"5px",marginTop:"1rem",borderLeft:"4px solid #00ff88"},children:[i.jsx("strong",{style:{color:"#00ff88"},children:ti[k].term}),i.jsx("p",{style:{marginTop:"0.5rem"},children:ti[k].definition})]})]}),i.jsxs("div",{children:[i.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Challenge"}),i.jsx("div",{className:"challenge-prompt",children:j.prompt})]}),j.hints&&j.hints.length>0&&i.jsxs("div",{className:"hints-section",children:[i.jsx("button",{className:"hints-toggle",onClick:()=>u(!l),children:l?"🔽 Hide Hints":"💡 Show Hints"}),l&&i.jsx("ul",{className:"hints-list",children:j.hints.map((m,w)=>i.jsxs("li",{className:"hint-item",children:["Hint ",w+1,": ",m]},w))})]}),!s&&i.jsxs("div",{className:"answer-section",children:[i.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Submit Your Answer"}),i.jsx("input",{type:"text",className:"answer-input",placeholder:"Enter your answer or flag here...",value:r,onChange:m=>a(m.target.value),onKeyPress:m=>m.key==="Enter"&&I()}),i.jsx("button",{className:"submit-btn",onClick:I,disabled:!r.trim(),children:"Submit Answer"})]}),h&&i.jsx("div",{className:`feedback ${h.type}`,children:h.message}),P&&j.explanation&&i.jsxs("div",{className:"explanation",children:[i.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Explanation"}),i.jsx("p",{children:j.explanation})]}),i.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Challenges"})]})},Iy=()=>{const[e,t]=R.useState("all"),n=["all","Cryptography","Network Security","Password Security","Web Security","Social Engineering","General"],s=Object.values(ti).filter(r=>e==="all"?!0:r.category===e);return i.jsxs("div",{className:"vocabulary-page",children:[i.jsx("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Cybersecurity Vocabulary"}),i.jsx("p",{style:{marginBottom:"2rem",color:"#b0b0b0"},children:"Build your cybersecurity knowledge by learning these key terms and concepts."}),i.jsx("div",{className:"vocab-categories",children:n.map(r=>i.jsx("button",{className:`vocab-category-btn ${e===r?"active":""}`,onClick:()=>t(r),children:r==="all"?"All Terms":r},r))}),i.jsxs("div",{style:{marginTop:"1rem",color:"#b0b0b0"},children:["Showing ",s.length," term",s.length!==1?"s":""]}),i.jsx("div",{className:"vocab-list",children:s.map((r,a)=>i.jsxs("div",{className:"vocab-card",children:[i.jsx("span",{className:"vocab-category",children:r.category}),i.jsx("h3",{children:r.term}),i.jsx("p",{style:{color:"#e0e0e0",marginTop:"0.5rem"},children:r.definition})]},a))}),s.length===0&&i.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"#b0b0b0"},children:"No vocabulary terms found for this category."})]})},of={TCP:{name:"TCP",color:"#4fc3f7",port:null},UDP:{name:"UDP",color:"#81c784",port:null},HTTP:{name:"HTTP",color:"#64b5f6",port:80},HTTPS:{name:"HTTPS",color:"#7986cb",port:443},SSH:{name:"SSH",color:"#ffb74d",port:22},DNS:{name:"DNS",color:"#ba68c8",port:53},FTP:{name:"FTP",color:"#f06292",port:21},SMTP:{name:"SMTP",color:"#4db6ac",port:25},ICMP:{name:"ICMP",color:"#90a4ae",port:null}},Pt={SYN:"SYN",ACK:"ACK",PSH:"PSH","SYN-ACK":"SYN-ACK"},jd=[{prefix:"192.168.1.",range:[1,254]},{prefix:"10.0.0.",range:[1,254]},{prefix:"172.16.0.",range:[1,254]}],Sd=["203.0.113.","198.51.100.","185.220.101.","45.33.32.","104.21.35.","8.8.8."],Cd=[80,443,53,22,21,25,3389,8080,3306,5432],to={normal:["GET /index.html HTTP/1.1","GET /api/users HTTP/1.1","POST /api/login HTTP/1.1","GET /images/logo.png HTTP/1.1","GET /css/styles.css HTTP/1.1","GET /js/app.js HTTP/1.1","GET /api/products HTTP/1.1","POST /api/cart HTTP/1.1","GET /favicon.ico HTTP/1.1","GET /api/status HTTP/1.1"],sqlInjection:["GET /api/users?id=1' OR '1'='1 HTTP/1.1","POST /login?user=admin'-- HTTP/1.1","GET /search?q='; DROP TABLE users;-- HTTP/1.1","GET /api/product?id=1 UNION SELECT * FROM passwords HTTP/1.1","POST /api/auth?username=admin' OR 1=1-- HTTP/1.1","GET /page?id=1; SELECT * FROM users HTTP/1.1","GET /api/data?filter=' OR ''=' HTTP/1.1"]},no={normal:["A google.com","A microsoft.com","A github.com","AAAA cloudflare.com","MX company.com","A cdn.example.com","A api.service.com","A www.example.org"],tunneling:["TXT aGVsbG8gd29ybGQ.evil.com","TXT ZGF0YWV4ZmlsdHJhdGlvbg.malware.net","TXT c2VjcmV0LWRhdGE.suspicious.io","A cmd-exec-001.c2server.com","TXT YmFzZTY0ZW5jb2RlZA.tunnel.net"]},bd={normal:["SSH-2.0-OpenSSH_8.4 connection established","Key exchange: ECDH SHA256","User authentication successful","Session opened for user admin"]},Nd={tcp:{min:40,max:1500},udp:{min:28,max:65535},http:{min:200,max:8e3},dns:{min:28,max:512},ssh:{min:40,max:2e3},icmp:{min:28,max:1500}},Cs=(e={})=>({id:Math.random().toString(36).substr(2,9),timestamp:new Date().toISOString(),sourceIP:"0.0.0.0",destIP:"0.0.0.0",sourcePort:0,destPort:0,protocol:"TCP",length:0,flags:"",info:"",payload:"",isMalicious:!1,attackType:null,flaggedByUser:!1,...e}),kl=()=>{const e=jd[Math.floor(Math.random()*jd.length)],t=Math.floor(Math.random()*(e.range[1]-e.range[0]))+e.range[0];return e.prefix+t},Ry=()=>{const e=Sd[Math.floor(Math.random()*Sd.length)],t=Math.floor(Math.random()*254)+1;return e+t},xt=(e=!0)=>e?Cd[Math.floor(Math.random()*Cd.length)]:Math.floor(Math.random()*65535)+1,Oi=(e="tcp")=>{const t=Nd[e.toLowerCase()]||Nd.tcp;return Math.floor(Math.random()*(t.max-t.min))+t.min};let Td=0;const bs=()=>(Td++,`pkt-${Date.now()}-${Td}`),Dy=(e=["HTTP","HTTPS","DNS","TCP"])=>{const t=e[Math.floor(Math.random()*e.length)],n=kl(),s=Math.random()>.3?Ry():kl();let r,a,l,u;switch(t){case"HTTP":r=80,a=xt(!1),l=to.normal[Math.floor(Math.random()*to.normal.length)],u=Pt.ACK;break;case"HTTPS":r=443,a=xt(!1),l="TLS Application Data",u=Pt.ACK;break;case"DNS":r=53,a=xt(!1),l=no.normal[Math.floor(Math.random()*no.normal.length)],u="";break;case"SSH":r=22,a=xt(!1),l=bd.normal[Math.floor(Math.random()*bd.normal.length)],u=Pt.ACK;break;default:r=xt(!0),a=xt(!1),l="TCP segment",u=[Pt.ACK,Pt.PSH,Pt["SYN-ACK"]][Math.floor(Math.random()*3)]}return Cs({id:bs(),timestamp:new Date().toISOString(),sourceIP:n,destIP:s,sourcePort:a,destPort:r,protocol:t,length:Oi(t.toLowerCase()),flags:u,info:l,payload:"",isMalicious:!1,attackType:null})},_y=(e,t,n)=>Cs({id:bs(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:xt(!1),destPort:n,protocol:"TCP",length:Oi("tcp"),flags:Pt.SYN,info:`SYN scan to port ${n}`,payload:"",isMalicious:!0,attackType:se.PORT_SCAN}),Ly=(e,t,n)=>{const s=[`Authentication failed for ${n}`,`Invalid password for ${n}`,`Failed password for ${n} from ${e}`],r=s[Math.floor(Math.random()*s.length)];return Cs({id:bs(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:xt(!1),destPort:22,protocol:"SSH",length:Oi("ssh"),flags:Pt.ACK,info:r,payload:`SSH-2.0-OpenSSH_7.9 [AUTH FAIL: ${n}]`,isMalicious:!0,attackType:se.BRUTE_FORCE_SSH})},Oy=(e,t)=>{const n=to.sqlInjection[Math.floor(Math.random()*to.sqlInjection.length)];return Cs({id:bs(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:xt(!1),destPort:80,protocol:"HTTP",length:Oi("http"),flags:Pt.PSH,info:n,payload:n,isMalicious:!0,attackType:se.SQL_INJECTION})},My=(e,t,n=5e3,s=15e3)=>{const r=Math.floor(Math.random()*(s-n))+n;return Cs({id:bs(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:xt(!1),destPort:443,protocol:"HTTPS",length:r,flags:Pt.PSH,info:`Large outbound transfer (${Math.round(r/1024)}KB)`,payload:`[Encrypted data: ${r} bytes]`,isMalicious:!0,attackType:se.DATA_EXFILTRATION})},Fy=(e,t)=>{const n=no.tunneling[Math.floor(Math.random()*no.tunneling.length)];return Cs({id:bs(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:xt(!1),destPort:53,protocol:"DNS",length:Oi("dns"),flags:"",info:n,payload:n,isMalicious:!0,attackType:se.DNS_TUNNELING})};class Uy{constructor(t){this.scenario=t,this.isRunning=!1,this.attackStarted=!1,this.attackPortIndex=0,this.attackUsernameIndex=0,this.elapsedTime=0,this.targetIP=kl(),this.blockedIPs=new Set}start(){this.isRunning=!0,this.attackStarted=!1,this.elapsedTime=0}stop(){this.isRunning=!1}blockIP(t){this.blockedIPs.add(t)}unblockIP(t){this.blockedIPs.delete(t)}isIPBlocked(t){return this.blockedIPs.has(t)}generatePackets(t){if(!this.isRunning)return[];this.elapsedTime+=t;const n=[],{backgroundTraffic:s,attackConfig:r}=this.scenario,a=Math.round(s.packetsPerSecond*t);for(let l=0;l<a;l++)n.push(Dy(s.protocols));if(this.elapsedTime>=r.startDelay&&(this.attackStarted=!0),this.attackStarted&&!this.isIPBlocked(r.attackerIP)){const l=Math.round(r.packetsPerSecond*t);for(let u=0;u<l;u++){const h=this.generateAttackPacket();h&&n.push(h)}}return n}generateAttackPacket(){const{attackType:t,attackConfig:n}=this.scenario;switch(t){case se.PORT_SCAN:{const s=n.targetPorts[this.attackPortIndex%n.targetPorts.length];return this.attackPortIndex++,_y(n.attackerIP,this.targetIP,s)}case se.BRUTE_FORCE_SSH:{const s=n.usernames[this.attackUsernameIndex%n.usernames.length];return this.attackUsernameIndex++,Ly(n.attackerIP,this.targetIP,s)}case se.SQL_INJECTION:return Oy(n.attackerIP,this.targetIP);case se.DATA_EXFILTRATION:return My(n.sourceIP,n.attackerIP,n.minPacketSize,n.maxPacketSize);case se.DNS_TUNNELING:return Fy(n.sourceIP||this.targetIP,"8.8.8.8");default:return null}}getAttackerIP(){return this.scenario.attackConfig.attackerIP}}const Hy=(e,t=3e4)=>{const n=[];for(const[s,r]of Object.entries(Cy))if(r.check){const a=r.check(e,t);a.detected&&n.push({type:s,attackerIP:a.attackerIP,evidence:a.evidence,timestamp:new Date().toISOString(),...rf[s]})}return n},By=(e,t)=>{let n=0;const s=[],r=e.flaggedPackets.filter(p=>p.isMalicious),a=e.flaggedPackets.filter(p=>!p.isMalicious);if(r.length>0){const p=r.length*5;n+=p,s.push({action:"Correctly flagged malicious packets",count:r.length,points:p})}if(a.length>0){const p=a.length*2;n-=p,s.push({action:"False positive flags (penalty)",count:a.length,points:-p})}e.identifiedAttackType===t.attackType&&(n+=15,s.push({action:"Correctly identified attack type",count:1,points:15}));const l=t.attackConfig.attackerIP,u=e.blockedIPs.includes(l),h=e.blockedIPs.filter(p=>p!==l);if(u&&(n+=10,s.push({action:"Blocked attacker IP",count:1,points:10})),h.length>0){const p=h.length*5;n-=p,s.push({action:"Incorrectly blocked innocent IP (penalty)",count:h.length,points:-p})}return e.completedUnderTimeLimit&&n>0&&(n+=5,s.push({action:"Completed under time limit",count:1,points:5})),{total:Math.max(0,n),maxPossible:t.points,breakdown:s,passed:n>=t.points*.6}},zy=(e,t,n)=>{const s=t.successCriteria,r={allMet:!0,details:[]};if(s.mustBlockAttacker){const a=e.blockedIPs.includes(t.attackConfig.attackerIP);r.details.push({criterion:"Block attacker IP",met:a,description:a?"Attacker IP blocked":"Attacker IP not blocked"}),a||(r.allMet=!1)}if(s.mustIdentifyAttackType){const a=e.identifiedAttackType===t.attackType;r.details.push({criterion:"Identify attack type",met:a,description:a?"Attack type correctly identified":"Attack type not identified"}),a||(r.allMet=!1)}if(s.minMaliciousPacketsFlagged){const a=e.flaggedPackets.filter(u=>u.isMalicious).length,l=a>=s.minMaliciousPacketsFlagged;r.details.push({criterion:`Flag at least ${s.minMaliciousPacketsFlagged} malicious packets`,met:l,description:`Flagged ${a} malicious packets`}),l||(r.allMet=!1)}return r},Ed=e=>{switch(e){case"critical":return"#f44336";case"high":return"#ff9800";case"medium":return"#ffeb3b";case"low":return"#4caf50";default:return"#90a4ae"}},jl=e=>{var t;return((t=rf[e])==null?void 0:t.name)||e},Wy=({scenarios:e,completedScenarios:t,onSelectScenario:n})=>{const s=Ny(),r=u=>t.includes(u),a=u=>u.toLowerCase(),l=()=>e.filter(u=>t.includes(u.id)).reduce((u,h)=>u+h.points,0);return i.jsxs("div",{className:"scenario-selector",children:[i.jsxs("div",{className:"scenario-stats",children:[i.jsxs("div",{className:"scenario-stat",children:[i.jsx("span",{className:"stat-value",children:t.length}),i.jsx("span",{className:"stat-label",children:"Completed"})]}),i.jsxs("div",{className:"scenario-stat",children:[i.jsx("span",{className:"stat-value",children:s.total}),i.jsx("span",{className:"stat-label",children:"Total Scenarios"})]}),i.jsxs("div",{className:"scenario-stat",children:[i.jsx("span",{className:"stat-value",children:l()}),i.jsx("span",{className:"stat-label",children:"Points Earned"})]}),i.jsxs("div",{className:"scenario-stat",children:[i.jsx("span",{className:"stat-value",children:s.totalPoints}),i.jsx("span",{className:"stat-label",children:"Total Points"})]})]}),i.jsx("div",{className:"scenario-grid",children:e.map(u=>{const h=r(u.id);return i.jsxs("div",{className:`scenario-card ${h?"completed":""}`,onClick:()=>n(u),children:[h&&i.jsxs("div",{className:"completed-badge",children:[i.jsx("span",{className:"checkmark",children:"✓"}),"Completed"]}),i.jsxs("div",{className:"scenario-header",children:[i.jsx("h3",{children:u.name}),i.jsx("span",{className:`difficulty ${a(u.difficulty)}`,children:u.difficulty})]}),i.jsx("p",{className:"scenario-description",children:u.description}),i.jsxs("div",{className:"scenario-meta",children:[i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"🎯"}),i.jsxs("span",{children:[u.points," points"]})]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("span",{className:"meta-icon",children:"⏱"}),i.jsxs("span",{children:[u.duration,"s"]})]})]}),i.jsxs("div",{className:"scenario-objective",children:[i.jsx("strong",{children:"Learning Objective:"}),i.jsx("p",{children:u.learningObjective})]}),i.jsx("button",{className:"btn-start",children:h?"Play Again":"Start Scenario"})]},u.id)})})]})},Vy=({packets:e,selectedPacket:t,flaggedPackets:n,onSelectPacket:s,onFlagPacket:r})=>{const a=R.useRef(null),l=R.useRef(!0);R.useEffect(()=>{a.current&&l.current&&(a.current.scrollTop=a.current.scrollHeight)},[e]);const u=()=>{if(a.current){const{scrollTop:E,scrollHeight:j,clientHeight:I}=a.current;l.current=E+I>=j-50}},h=E=>new Date(E).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:2}),p=E=>{var j;return((j=of[E])==null?void 0:j.color)||"#90a4ae"},P=E=>n.some(j=>j.id===E.id),N=E=>{s(E)},k=(E,j)=>{E.stopPropagation(),r(j)};return i.jsxs("div",{className:"packet-list-container",children:[i.jsxs("div",{className:"packet-list-header",children:[i.jsx("h3",{children:"Live Traffic"}),i.jsxs("span",{className:"packet-count",children:[e.length," packets"]})]}),i.jsxs("div",{className:"packet-table-header",children:[i.jsx("div",{className:"col-flag"}),i.jsx("div",{className:"col-time",children:"Time"}),i.jsx("div",{className:"col-src",children:"Source"}),i.jsx("div",{className:"col-dst",children:"Destination"}),i.jsx("div",{className:"col-proto",children:"Protocol"}),i.jsx("div",{className:"col-len",children:"Length"}),i.jsx("div",{className:"col-info",children:"Info"})]}),i.jsxs("div",{className:"packet-list",ref:a,onScroll:u,children:[e.map(E=>i.jsxs("div",{className:`packet-row
              ${(t==null?void 0:t.id)===E.id?"selected":""}
              ${E.isMalicious?"malicious":""}
              ${P(E)?"flagged":""}
            `,onClick:()=>N(E),children:[i.jsx("div",{className:"col-flag",children:i.jsx("button",{className:`flag-btn ${P(E)?"flagged":""}`,onClick:j=>k(j,E),title:P(E)?"Unflag packet":"Flag as suspicious",children:P(E)?"⚑":"⚐"})}),i.jsx("div",{className:"col-time",children:h(E.timestamp)}),i.jsxs("div",{className:"col-src",children:[i.jsx("span",{className:"ip",children:E.sourceIP}),i.jsxs("span",{className:"port",children:[":",E.sourcePort]})]}),i.jsxs("div",{className:"col-dst",children:[i.jsx("span",{className:"ip",children:E.destIP}),i.jsxs("span",{className:"port",children:[":",E.destPort]})]}),i.jsx("div",{className:"col-proto",children:i.jsx("span",{className:"protocol-badge",style:{backgroundColor:p(E.protocol)},children:E.protocol})}),i.jsx("div",{className:"col-len",children:E.length}),i.jsx("div",{className:"col-info",title:E.info,children:E.info})]},E.id)),e.length===0&&i.jsx("div",{className:"packet-list-empty",children:"Waiting for network traffic..."})]})]})},$y=({packet:e,onFlagPacket:t})=>{if(!e)return i.jsx("div",{className:"packet-detail",children:i.jsx("div",{className:"packet-detail-empty",children:"Select a packet to view details"})});const n=r=>new Date(r).toLocaleString("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,hour12:!1}),s=r=>{var a;return((a=of[r])==null?void 0:a.color)||"#90a4ae"};return i.jsxs("div",{className:"packet-detail",children:[i.jsxs("div",{className:"packet-detail-header",children:[i.jsx("h4",{children:"Packet Details"}),i.jsx("div",{className:"packet-detail-actions",children:i.jsx("button",{className:`flag-btn-lg ${e.flaggedByUser?"flagged":""}`,onClick:()=>t(e),children:e.flaggedByUser?"⚑ Flagged":"⚐ Flag as Suspicious"})})]}),i.jsxs("div",{className:"packet-detail-content",children:[i.jsxs("div",{className:"detail-section",children:[i.jsx("h5",{children:"General"}),i.jsxs("div",{className:"detail-grid",children:[i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Packet ID"}),i.jsx("span",{className:"detail-value mono",children:e.id})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Timestamp"}),i.jsx("span",{className:"detail-value",children:n(e.timestamp)})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Protocol"}),i.jsx("span",{className:"detail-value protocol-badge",style:{backgroundColor:s(e.protocol)},children:e.protocol})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Length"}),i.jsxs("span",{className:"detail-value",children:[e.length," bytes"]})]})]})]}),i.jsxs("div",{className:"detail-section",children:[i.jsx("h5",{children:"Source"}),i.jsxs("div",{className:"detail-grid",children:[i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"IP Address"}),i.jsx("span",{className:"detail-value mono",children:e.sourceIP})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Port"}),i.jsx("span",{className:"detail-value",children:e.sourcePort})]})]})]}),i.jsxs("div",{className:"detail-section",children:[i.jsx("h5",{children:"Destination"}),i.jsxs("div",{className:"detail-grid",children:[i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"IP Address"}),i.jsx("span",{className:"detail-value mono",children:e.destIP})]}),i.jsxs("div",{className:"detail-item",children:[i.jsx("span",{className:"detail-label",children:"Port"}),i.jsx("span",{className:"detail-value",children:e.destPort})]})]})]}),e.flags&&i.jsxs("div",{className:"detail-section",children:[i.jsx("h5",{children:"TCP Flags"}),i.jsx("div",{className:"detail-item",children:i.jsx("span",{className:"detail-value mono",children:e.flags})})]}),i.jsxs("div",{className:"detail-section",children:[i.jsx("h5",{children:"Info"}),i.jsx("div",{className:"detail-item full-width",children:i.jsx("span",{className:"detail-value info-box mono",children:e.info})})]}),e.payload&&i.jsxs("div",{className:"detail-section",children:[i.jsx("h5",{children:"Payload"}),i.jsx("div",{className:"detail-item full-width",children:i.jsx("pre",{className:"payload-box",children:e.payload})})]}),e.isMalicious&&i.jsxs("div",{className:"detail-section malicious-warning",children:[i.jsx("h5",{children:"Warning"}),i.jsxs("div",{className:"warning-content",children:[i.jsx("span",{className:"warning-icon",children:"⚠"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Potentially Malicious Traffic"}),e.attackType&&i.jsxs("p",{children:["Attack Type: ",jl(e.attackType)]})]})]})]})]})]})},Gy=({alerts:e,onBlockIP:t})=>{const n=s=>new Date(s).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return i.jsxs("div",{className:"alert-panel",children:[i.jsxs("div",{className:"alert-panel-header",children:[i.jsx("h4",{children:"Threat Alerts"}),e.length>0&&i.jsx("span",{className:"alert-count",children:e.length})]}),i.jsx("div",{className:"alert-list",children:e.length===0?i.jsxs("div",{className:"alert-empty",children:[i.jsx("span",{className:"alert-empty-icon",children:"🛡"}),i.jsx("p",{children:"No threats detected yet"}),i.jsx("p",{className:"alert-empty-hint",children:"Monitoring network traffic..."})]}):e.map((s,r)=>i.jsxs("div",{className:"alert-item",style:{borderLeftColor:Ed(s.severity)},children:[i.jsxs("div",{className:"alert-header",children:[i.jsx("span",{className:"alert-severity",style:{backgroundColor:Ed(s.severity)},children:s.severity.toUpperCase()}),i.jsx("span",{className:"alert-time",children:n(s.timestamp)})]}),i.jsx("div",{className:"alert-title",children:s.name}),i.jsx("div",{className:"alert-description",children:s.description}),i.jsxs("div",{className:"alert-details",children:[i.jsxs("div",{className:"alert-evidence",children:[i.jsx("strong",{children:"Evidence:"})," ",s.evidence]}),i.jsxs("div",{className:"alert-ip",children:[i.jsx("strong",{children:"Source IP:"}),i.jsx("span",{className:"mono",children:s.attackerIP})]})]}),i.jsxs("div",{className:"alert-indicators",children:[i.jsx("strong",{children:"Indicators:"}),i.jsx("ul",{children:s.indicators.slice(0,2).map((a,l)=>i.jsx("li",{children:a},l))})]}),i.jsx("div",{className:"alert-actions",children:i.jsxs("button",{className:"btn-block",onClick:()=>t(s.attackerIP),children:["Block ",s.attackerIP]})})]},`${s.type}-${s.attackerIP}-${r}`))})]})},Yy=({blockedIPs:e,attackTypes:t,identifiedAttackType:n,onBlockIP:s,onUnblockIP:r,onIdentifyAttack:a,hints:l})=>{const[u,h]=R.useState(""),[p,P]=R.useState(!1),N=k=>{k.preventDefault();const E=u.trim();E&&/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(E)&&(s(E),h(""))};return i.jsxs("div",{className:"action-panel",children:[i.jsxs("div",{className:"action-section",children:[i.jsx("h4",{children:"Identify Attack Type"}),i.jsx("p",{className:"action-hint",children:"What type of attack is occurring?"}),i.jsx("div",{className:"attack-type-grid",children:t.map(k=>i.jsx("button",{className:`attack-type-btn ${n===k?"selected":""}`,onClick:()=>a(k),children:jl(k)},k))}),n&&i.jsxs("div",{className:"selected-attack",children:["Selected: ",i.jsx("strong",{children:jl(n)})]})]}),i.jsxs("div",{className:"action-section",children:[i.jsx("h4",{children:"Firewall Rules"}),i.jsxs("form",{onSubmit:N,className:"block-ip-form",children:[i.jsx("input",{type:"text",placeholder:"Enter IP to block (e.g., 192.168.1.100)",value:u,onChange:k=>h(k.target.value),className:"ip-input"}),i.jsx("button",{type:"submit",className:"btn-block-submit",children:"Block IP"})]}),i.jsxs("div",{className:"blocked-ips",children:[i.jsxs("h5",{children:["Blocked IPs (",e.length,")"]}),e.length===0?i.jsx("p",{className:"no-blocked",children:"No IPs blocked yet"}):i.jsx("ul",{className:"blocked-ip-list",children:e.map(k=>i.jsxs("li",{className:"blocked-ip-item",children:[i.jsx("span",{className:"mono",children:k}),i.jsx("button",{className:"btn-unblock",onClick:()=>r(k),title:"Unblock this IP",children:"×"})]},k))})]})]}),i.jsxs("div",{className:"action-section hints-section",children:[i.jsxs("button",{className:"hints-toggle",onClick:()=>P(!p),children:[p?"Hide Hints":"Show Hints"," 💡"]}),p&&l&&l.length>0&&i.jsx("div",{className:"hints-list",children:l.map((k,E)=>i.jsxs("div",{className:"hint-item",children:[i.jsx("span",{className:"hint-number",children:E+1}),i.jsx("span",{className:"hint-text",children:k})]},E))})]})]})},Xy=({completedScenarios:e,onCompleteScenario:t,onBack:n})=>{const[s,r]=R.useState(null),[a,l]=R.useState(!1),[u,h]=R.useState(0),[p,P]=R.useState(!1),[N,k]=R.useState([]),[E,j]=R.useState(null),[I,L]=R.useState({total:0,perSecond:0,bytes:0}),[m,w]=R.useState(!1),[b,D]=R.useState(.5),[M,F]=R.useState([]),[S,f]=R.useState([]),[v,y]=R.useState(null),[C,T]=R.useState([]),[x,G]=R.useState(null),K=R.useRef(null),pe=R.useRef(null),ve=R.useRef(Date.now()),H=R.useCallback(V=>{r(V),h(V.duration),k([]),F([]),f([]),y(null),T([]),j(null),G(null),P(!1),K.current=new Uy(V),K.current.start(),l(!0),ve.current=Date.now()},[]),z=R.useCallback(()=>{l(!1),K.current&&K.current.stop(),pe.current&&clearInterval(pe.current)},[]),$=R.useCallback(()=>{if(z(),P(!0),!s)return;const V={flaggedPackets:M,blockedIPs:S,identifiedAttackType:v,completedUnderTimeLimit:u>0},Y=By(V,s),je=zy(V,s);G({score:Y,criteria:je,passed:Y.passed&&je.allMet}),Y.passed&&je.allMet&&t(s.id,Y.total)},[s,M,S,v,u,N,z,t]);R.useEffect(()=>{if(!(!a||!K.current))return pe.current=setInterval(()=>{if(m){ve.current=Date.now();return}const V=Date.now(),Y=(V-ve.current)/1e3;ve.current=V;const je=Y*b,He=K.current.generatePackets(je);k(be=>[...be,...He].slice(-200)),h(be=>{const ot=Math.max(0,be-Y);return ot<=0&&$(),ot}),L(be=>({total:be.total+He.length,perSecond:Math.round(He.length/(Y||.001)),bytes:be.bytes+He.reduce((ot,vn)=>ot+vn.length,0)}))},400),()=>{pe.current&&clearInterval(pe.current)}},[a,m,b,$]),R.useEffect(()=>{if(!a||N.length<5)return;const V=Hy(N,3e4);V.length>0&&T(Y=>{const je=V.filter(He=>!Y.some(be=>be.type===He.type&&be.attackerIP===He.attackerIP));return[...Y,...je]})},[N,a]);const ne=R.useCallback(V=>{F(Y=>Y.some(He=>He.id===V.id)?Y.filter(He=>He.id!==V.id):[...Y,V]),k(Y=>Y.map(je=>je.id===V.id?{...je,flaggedByUser:!je.flaggedByUser}:je))},[]),q=R.useCallback(V=>{K.current&&K.current.blockIP(V),f(Y=>Y.includes(V)?Y:[...Y,V])},[]),ae=R.useCallback(V=>{K.current&&K.current.unblockIP(V),f(Y=>Y.filter(je=>je!==V))},[]),Je=R.useCallback(V=>{y(V)},[]),Ge=R.useCallback(()=>{z(),r(null),k([]),G(null),P(!1)},[z]);return s?p&&x?i.jsxs("div",{className:"network-monitor",children:[i.jsxs("div",{className:"nm-header",children:[i.jsx("h2",{children:"Scenario Complete"}),i.jsx("h3",{children:s.name})]}),i.jsxs("div",{className:"nm-results",children:[i.jsxs("div",{className:`results-summary ${x.passed?"passed":"failed"}`,children:[i.jsx("div",{className:"result-icon",children:x.passed?"✓":"✗"}),i.jsx("h3",{children:x.passed?"Mission Accomplished!":"Mission Failed"}),i.jsxs("div",{className:"result-score",children:["Score: ",x.score.total," / ",x.score.maxPossible," points"]})]}),i.jsxs("div",{className:"results-breakdown",children:[i.jsx("h4",{children:"Score Breakdown"}),x.score.breakdown.map((V,Y)=>i.jsxs("div",{className:`breakdown-item ${V.points>=0?"positive":"negative"}`,children:[i.jsx("span",{children:V.action}),i.jsxs("span",{className:"breakdown-count",children:["x",V.count]}),i.jsxs("span",{className:"breakdown-points",children:[V.points>=0?"+":"",V.points]})]},Y))]}),i.jsxs("div",{className:"results-criteria",children:[i.jsx("h4",{children:"Success Criteria"}),x.criteria.details.map((V,Y)=>i.jsxs("div",{className:`criteria-item ${V.met?"met":"not-met"}`,children:[i.jsx("span",{className:"criteria-icon",children:V.met?"✓":"✗"}),i.jsx("span",{children:V.criterion}),i.jsx("span",{className:"criteria-desc",children:V.description})]},Y))]}),i.jsxs("div",{className:"results-actions",children:[i.jsx("button",{className:"btn-primary",onClick:()=>H(s),children:"Try Again"}),i.jsx("button",{className:"btn-secondary",onClick:Ge,children:"Choose Another Scenario"})]})]})]}):i.jsxs("div",{className:"network-monitor",children:[i.jsxs("div",{className:"nm-header",children:[i.jsx("button",{className:"back-btn",onClick:Ge,children:"← Back"}),i.jsxs("div",{className:"nm-title-section",children:[i.jsx("h2",{children:s.name}),i.jsx("span",{className:`difficulty ${s.difficulty}`,children:s.difficulty})]}),i.jsxs("div",{className:"nm-stats",children:[i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-value",children:Math.ceil(u)}),i.jsx("span",{className:"stat-label",children:"Time Left"})]}),i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat-value",children:I.total}),i.jsx("span",{className:"stat-label",children:"Packets"})]}),i.jsxs("div",{className:"stat",children:[i.jsxs("span",{className:"stat-value",children:[I.perSecond,"/s"]}),i.jsx("span",{className:"stat-label",children:"Rate"})]}),i.jsxs("div",{className:"stat",children:[i.jsxs("span",{className:"stat-value",children:[Math.round(I.bytes/1024),"KB"]}),i.jsx("span",{className:"stat-label",children:"Data"})]})]}),i.jsxs("div",{className:"nm-controls",children:[i.jsx("button",{className:`btn-pause ${m?"paused":""}`,onClick:()=>w(!m),title:m?"Resume packet capture":"Pause to analyze packets",children:m?"▶ Resume":"⏸ Pause"}),i.jsxs("div",{className:"speed-control",children:[i.jsx("label",{children:"Speed:"}),i.jsxs("select",{value:b,onChange:V=>D(parseFloat(V.target.value)),title:"Adjust packet speed for easier analysis",children:[i.jsx("option",{value:"0.25",children:"0.25x (Very Slow)"}),i.jsx("option",{value:"0.5",children:"0.5x (Slow - Recommended)"}),i.jsx("option",{value:"1",children:"1x (Normal)"}),i.jsx("option",{value:"2",children:"2x (Fast)"})]})]})]}),i.jsx("button",{className:"btn-complete",onClick:$,children:"Complete Mission"})]}),i.jsxs("div",{className:"nm-objective",children:[i.jsx("strong",{children:"Objective:"})," ",s.description]}),i.jsxs("div",{className:"nm-main-content",children:[i.jsx("div",{className:"nm-left-panel",children:i.jsx(Vy,{packets:N,selectedPacket:E,flaggedPackets:M,onSelectPacket:j,onFlagPacket:ne})}),i.jsxs("div",{className:"nm-right-panel",children:[i.jsx(Gy,{alerts:C,onBlockIP:q}),i.jsx(Yy,{blockedIPs:S,attackTypes:Object.values(se),identifiedAttackType:v,onBlockIP:q,onUnblockIP:ae,onIdentifyAttack:Je,hints:s.hints})]})]}),i.jsx("div",{className:"nm-bottom-panel",children:i.jsx($y,{packet:E,onFlagPacket:ne})})]}):i.jsxs("div",{className:"network-monitor",children:[i.jsxs("div",{className:"nm-header",children:[i.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Dashboard"}),i.jsx("h2",{children:"Network Monitor"}),i.jsx("p",{className:"nm-subtitle",children:"Learn to detect and respond to cyber attacks in real-time"})]}),i.jsx(Wy,{scenarios:jt,completedScenarios:e,onSelectScenario:H})]})},Ky=()=>{const[e,t]=R.useState(""),[n,s]=R.useState(3),[r,a]=R.useState("encrypt"),[l,u]=R.useState(""),h=(N,k,E=!0)=>{const j=E?k:26-k;return N.toUpperCase().split("").map(I=>{if(I>="A"&&I<="Z"){const L=(I.charCodeAt(0)-65+j)%26+65;return String.fromCharCode(L)}return I}).join("")},p=()=>{const N=h(e,parseInt(n),r==="encrypt");u(N)},P=()=>{let N=[];for(let k=1;k<=25;k++)N.push(`Shift ${k}: ${h(e,k,!1)}`);u(N.join(`
`))};return i.jsxs("div",{className:"tool-container",children:[i.jsx("h3",{children:"Caesar Cipher Tool"}),i.jsx("div",{className:"tool-description",children:"The Caesar cipher shifts each letter by a fixed number of positions in the alphabet."}),i.jsxs("div",{className:"tool-controls",children:[i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Mode:"}),i.jsxs("select",{value:r,onChange:N=>a(N.target.value),children:[i.jsx("option",{value:"encrypt",children:"Encrypt"}),i.jsx("option",{value:"decrypt",children:"Decrypt"})]})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Shift (1-25):"}),i.jsx("input",{type:"number",min:"1",max:"25",value:n,onChange:N=>s(N.target.value)})]})]}),i.jsxs("div",{className:"tool-input",children:[i.jsx("label",{children:"Input Text:"}),i.jsx("textarea",{value:e,onChange:N=>t(N.target.value),placeholder:"Enter text to encrypt or decrypt...",rows:3})]}),i.jsxs("div",{className:"tool-buttons",children:[i.jsx("button",{className:"tool-btn primary",onClick:p,children:r==="encrypt"?"Encrypt":"Decrypt"}),i.jsx("button",{className:"tool-btn secondary",onClick:P,children:"Brute Force (Try All Shifts)"})]}),l&&i.jsxs("div",{className:"tool-output",children:[i.jsx("label",{children:"Output:"}),i.jsx("pre",{children:l})]}),i.jsxs("div",{className:"tool-reference",children:[i.jsx("h4",{children:"Alphabet Reference"}),i.jsxs("div",{className:"alphabet-row",children:[i.jsx("div",{children:"Plain:"}),i.jsx("div",{className:"alphabet",children:"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"})]}),i.jsxs("div",{className:"alphabet-row",children:[i.jsxs("div",{children:["Shift ",n,":"]}),i.jsx("div",{className:"alphabet",children:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(N=>h(N,parseInt(n),!0)).join(" ")})]})]})]})},Qy=()=>{const[e,t]=R.useState(""),[n,s]=R.useState({}),r=async h=>{if(window.crypto&&window.crypto.subtle){const P=new TextEncoder().encode(h);try{const N=await a(h),k=await crypto.subtle.digest("SHA-1",P),E=await crypto.subtle.digest("SHA-256",P);return{md5:N,sha1:Array.from(new Uint8Array(k)).map(j=>j.toString(16).padStart(2,"0")).join(""),sha256:Array.from(new Uint8Array(E)).map(j=>j.toString(16).padStart(2,"0")).join("")}}catch{return l(h)}}return l(h)},a=h=>{let p=0;for(let N=0;N<h.length;N++){const k=h.charCodeAt(N);p=(p<<5)-p+k,p=p&p}const P=Math.abs(p).toString(16).padStart(8,"0");return(P+P+P+P).substring(0,32)},l=h=>{const p=a(h);return{md5:p,sha1:(p+p.substring(0,8)).substring(0,40),sha256:(p+p).substring(0,64)}},u=async()=>{if(e){const h=await r(e);s(h)}};return i.jsxs("div",{className:"tool-container",children:[i.jsx("h3",{children:"Hash Generator"}),i.jsx("div",{className:"tool-description",children:'Hash functions create a unique "fingerprint" of data. They are one-way functions - you cannot reverse a hash to get the original input.'}),i.jsxs("div",{className:"tool-input",children:[i.jsx("label",{children:"Input Text:"}),i.jsx("textarea",{value:e,onChange:h=>t(h.target.value),placeholder:"Enter text to hash...",rows:2})]}),i.jsx("button",{className:"tool-btn primary",onClick:u,children:"Generate Hashes"}),Object.keys(n).length>0&&i.jsxs("div",{className:"tool-output",children:[i.jsxs("div",{className:"hash-result",children:[i.jsx("label",{children:"MD5 (32 chars - INSECURE):"}),i.jsx("code",{className:"hash-value",children:n.md5})]}),i.jsxs("div",{className:"hash-result",children:[i.jsx("label",{children:"SHA-1 (40 chars - INSECURE):"}),i.jsx("code",{className:"hash-value",children:n.sha1})]}),i.jsxs("div",{className:"hash-result",children:[i.jsx("label",{children:"SHA-256 (64 chars - SECURE):"}),i.jsx("code",{className:"hash-value",children:n.sha256})]})]}),i.jsxs("div",{className:"tool-reference",children:[i.jsx("h4",{children:"Hash Properties"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"Deterministic:"})," Same input = same hash"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"One-way:"})," Cannot reverse to get input"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Avalanche effect:"})," Small change = completely different hash"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Fixed size:"})," Any input produces same length output"]})]})]})]})},qy=()=>{const[e,t]=R.useState(""),[n,s]=R.useState(""),[r,a]=R.useState("encode"),l=()=>{try{s(r==="encode"?btoa(e):atob(e))}catch{s("Error: Invalid input for "+r)}};return i.jsxs("div",{className:"tool-container",children:[i.jsx("h3",{children:"Base64 Encoder/Decoder"}),i.jsx("div",{className:"tool-description",children:"Base64 is an encoding scheme (NOT encryption!) that converts binary data to ASCII text. It's commonly used for transmitting data."}),i.jsx("div",{className:"tool-controls",children:i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Mode:"}),i.jsxs("select",{value:r,onChange:u=>a(u.target.value),children:[i.jsx("option",{value:"encode",children:"Encode"}),i.jsx("option",{value:"decode",children:"Decode"})]})]})}),i.jsxs("div",{className:"tool-input",children:[i.jsx("label",{children:"Input:"}),i.jsx("textarea",{value:e,onChange:u=>t(u.target.value),placeholder:r==="encode"?"Enter text to encode...":"Enter Base64 to decode...",rows:3})]}),i.jsx("button",{className:"tool-btn primary",onClick:l,children:r==="encode"?"Encode to Base64":"Decode from Base64"}),n&&i.jsxs("div",{className:"tool-output",children:[i.jsx("label",{children:"Output:"}),i.jsx("pre",{children:n})]}),i.jsx("div",{className:"tool-warning",children:'Base64 is NOT encryption! Anyone can decode Base64. Never use it to "secure" sensitive data.'})]})},Jy=()=>{const[e,t]=R.useState(""),[n,s]=R.useState(""),[r,a]=R.useState("textToHex"),l=p=>p.split("").map(P=>P.charCodeAt(0).toString(16).padStart(2,"0")).join(""),u=p=>{const P=p.replace(/\s/g,"");let N="";for(let k=0;k<P.length;k+=2)N+=String.fromCharCode(parseInt(P.substr(k,2),16));return N},h=()=>{try{s(r==="textToHex"?l(e):u(e))}catch{s("Error: Invalid input")}};return i.jsxs("div",{className:"tool-container",children:[i.jsx("h3",{children:"Hex Converter"}),i.jsx("div",{className:"tool-description",children:"Hexadecimal is base-16 (0-9, A-F). Each pair of hex digits represents one byte (ASCII character)."}),i.jsx("div",{className:"tool-controls",children:i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Mode:"}),i.jsxs("select",{value:r,onChange:p=>a(p.target.value),children:[i.jsx("option",{value:"textToHex",children:"Text → Hex"}),i.jsx("option",{value:"hexToText",children:"Hex → Text"})]})]})}),i.jsxs("div",{className:"tool-input",children:[i.jsx("label",{children:"Input:"}),i.jsx("textarea",{value:e,onChange:p=>t(p.target.value),placeholder:r==="textToHex"?"Enter text...":"Enter hex (e.g., 48454c4c4f)...",rows:2})]}),i.jsx("button",{className:"tool-btn primary",onClick:h,children:"Convert"}),n&&i.jsxs("div",{className:"tool-output",children:[i.jsx("label",{children:"Output:"}),i.jsx("pre",{children:n})]}),i.jsxs("div",{className:"tool-reference",children:[i.jsx("h4",{children:"ASCII Reference"}),i.jsxs("div",{className:"ascii-table",children:[i.jsx("span",{children:"A=41"})," ",i.jsx("span",{children:"B=42"})," ",i.jsx("span",{children:"C=43"})," ",i.jsx("span",{children:"0=30"})," ",i.jsx("span",{children:"1=31"})]})]})]})},Zy=()=>{const[e,t]=R.useState("192.168.1.100"),[n,s]=R.useState(!1),[r,a]=R.useState([]),l=[{port:21,service:"FTP",status:"closed"},{port:22,service:"SSH",status:"open"},{port:23,service:"Telnet",status:"closed"},{port:25,service:"SMTP",status:"closed"},{port:53,service:"DNS",status:"closed"},{port:80,service:"HTTP",status:"open"},{port:443,service:"HTTPS",status:"open"},{port:445,service:"SMB",status:"closed"},{port:3306,service:"MySQL",status:"closed"},{port:3389,service:"RDP",status:"filtered"}],u=()=>{s(!0),a([]);let h=0;const p=setInterval(()=>{if(h<l.length){const P={...l[h]};Math.random()>.7&&P.status==="closed"&&(P.status="open"),a(N=>[...N,P]),h++}else clearInterval(p),s(!1)},300)};return i.jsxs("div",{className:"tool-container",children:[i.jsx("h3",{children:"Port Scanner Simulator"}),i.jsxs("div",{className:"tool-description",children:["Port scanning discovers which ports are open on a target system, revealing running services.",i.jsx("strong",{children:" Note: Only scan systems you own or have permission to test!"})]}),i.jsxs("div",{className:"tool-input",children:[i.jsx("label",{children:"Target IP (Simulated):"}),i.jsx("input",{type:"text",value:e,onChange:h=>t(h.target.value),placeholder:"192.168.1.100"})]}),i.jsx("button",{className:"tool-btn primary",onClick:u,disabled:n,children:n?"Scanning...":"Start Scan"}),r.length>0&&i.jsxs("div",{className:"tool-output",children:[i.jsxs("label",{children:["Scan Results for ",e,":"]}),i.jsxs("table",{className:"scan-results",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Port"}),i.jsx("th",{children:"Service"}),i.jsx("th",{children:"Status"})]})}),i.jsx("tbody",{children:r.map((h,p)=>i.jsxs("tr",{className:`port-${h.status}`,children:[i.jsx("td",{children:h.port}),i.jsx("td",{children:h.service}),i.jsx("td",{className:`status-${h.status}`,children:h.status.toUpperCase()})]},p))})]})]}),i.jsxs("div",{className:"tool-reference",children:[i.jsx("h4",{children:"Port Status Meanings"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{className:"status-open",children:"OPEN:"})," Service is accepting connections"]}),i.jsxs("li",{children:[i.jsx("strong",{className:"status-closed",children:"CLOSED:"})," Port responds but no service"]}),i.jsxs("li",{children:[i.jsx("strong",{className:"status-filtered",children:"FILTERED:"})," Firewall blocking probe"]})]})]})]})},e0=()=>{const[e,t]=R.useState(""),[n,s]=R.useState(""),[r,a]=R.useState(""),[l,u]=R.useState(""),[h,p]=R.useState(""),[P,N]=R.useState(""),k=()=>{let j=[];e&&j.push(`site:${e}`),n&&j.push(`filetype:${n}`),r&&j.push(`inurl:${r}`),l&&j.push(`intitle:${l}`),h&&j.push(`"${h}"`),N(j.join(" "))},E=[{name:"Find Login Pages",dork:"site:example.com inurl:login OR inurl:signin"},{name:"Find PDF Documents",dork:"site:example.com filetype:pdf"},{name:"Find Exposed Configs",dork:"filetype:env OR filetype:config"},{name:"Find Directory Listings",dork:'intitle:"index of"'}];return i.jsxs("div",{className:"tool-container",children:[i.jsx("h3",{children:"Google Dork Builder"}),i.jsx("div",{className:"tool-description",children:"Build advanced Google search queries to find specific information. Use responsibly for authorized security testing only."}),i.jsxs("div",{className:"dork-builder",children:[i.jsxs("div",{className:"dork-inputs",children:[i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"site: (domain)"}),i.jsx("input",{type:"text",value:e,onChange:j=>t(j.target.value),placeholder:"example.com"})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"filetype:"}),i.jsxs("select",{value:n,onChange:j=>s(j.target.value),children:[i.jsx("option",{value:"",children:"None"}),i.jsx("option",{value:"pdf",children:"PDF"}),i.jsx("option",{value:"doc",children:"DOC"}),i.jsx("option",{value:"xls",children:"XLS"}),i.jsx("option",{value:"txt",children:"TXT"}),i.jsx("option",{value:"sql",children:"SQL"})]})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"inurl:"}),i.jsx("input",{type:"text",value:r,onChange:j=>a(j.target.value),placeholder:"admin"})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"intitle:"}),i.jsx("input",{type:"text",value:l,onChange:j=>u(j.target.value),placeholder:"login"})]}),i.jsxs("div",{className:"control-group",children:[i.jsx("label",{children:"Keyword:"}),i.jsx("input",{type:"text",value:h,onChange:j=>p(j.target.value),placeholder:"confidential"})]})]}),i.jsx("button",{className:"tool-btn primary",onClick:k,children:"Build Dork"}),P&&i.jsxs("div",{className:"tool-output",children:[i.jsx("label",{children:"Generated Dork:"}),i.jsx("code",{className:"dork-result",children:P})]})]}),i.jsxs("div",{className:"tool-reference",children:[i.jsx("h4",{children:"Preset Examples"}),i.jsx("div",{className:"preset-dorks",children:E.map((j,I)=>i.jsxs("div",{className:"preset-item",children:[i.jsxs("strong",{children:[j.name,":"]}),i.jsx("code",{children:j.dork})]},I))})]}),i.jsx("div",{className:"tool-warning",children:"Only use Google dorking for authorized security testing or educational purposes."})]})},t0=({onBack:e})=>{var a;const[t,n]=R.useState(null),s=[{id:"caesar",name:"Caesar Cipher",icon:"🔐",category:"Cryptography",component:Ky},{id:"hash",name:"Hash Generator",icon:"#️⃣",category:"Cryptography",component:Qy},{id:"base64",name:"Base64 Encoder",icon:"📝",category:"Encoding",component:qy},{id:"hex",name:"Hex Converter",icon:"🔢",category:"Encoding",component:Jy},{id:"portscan",name:"Port Scanner",icon:"🔍",category:"Network",component:Zy},{id:"dork",name:"Google Dork Builder",icon:"🔎",category:"Reconnaissance",component:e0}],r=t?(a=s.find(l=>l.id===t))==null?void 0:a.component:null;return i.jsxs("div",{className:"interactive-tools",children:[i.jsxs("div",{className:"tools-header",children:[i.jsx("h2",{children:"Interactive Security Tools"}),i.jsx("p",{children:"Hands-on tools to practice cybersecurity concepts"})]}),t?i.jsxs("div",{className:"tool-view",children:[i.jsx("button",{className:"back-btn",onClick:()=>n(null),children:"← Back to Tools"}),r&&i.jsx(r,{})]}):i.jsx("div",{className:"tools-grid",children:s.map(l=>i.jsxs("div",{className:"tool-card",onClick:()=>n(l.id),children:[i.jsx("div",{className:"tool-icon",children:l.icon}),i.jsx("h3",{children:l.name}),i.jsx("span",{className:"tool-category",children:l.category})]},l.id))}),i.jsx("button",{className:"back-btn",onClick:e,style:{marginTop:"2rem"},children:"← Back to Dashboard"})]})};/**
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
 */const af=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},n0=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=e[n++];t[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=e[n++],l=e[n++],u=e[n++],h=((r&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;t[s++]=String.fromCharCode(55296+(h>>10)),t[s++]=String.fromCharCode(56320+(h&1023))}else{const a=e[n++],l=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|l&63)}}return t.join("")},s0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const a=e[r],l=r+1<e.length,u=l?e[r+1]:0,h=r+2<e.length,p=h?e[r+2]:0,P=a>>2,N=(a&3)<<4|u>>4;let k=(u&15)<<2|p>>6,E=p&63;h||(E=64,l||(k=64)),s.push(n[P],n[N],n[k],n[E])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(af(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):n0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const a=n[e.charAt(r++)],u=r<e.length?n[e.charAt(r)]:0;++r;const p=r<e.length?n[e.charAt(r)]:64;++r;const N=r<e.length?n[e.charAt(r)]:64;if(++r,a==null||u==null||p==null||N==null)throw new i0;const k=a<<2|u>>4;if(s.push(k),p!==64){const E=u<<4&240|p>>2;if(s.push(E),N!==64){const j=p<<6&192|N;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class i0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r0=function(e){const t=af(e);return s0.encodeByteArray(t,!0)},lf=function(e){return r0(e).replace(/\./g,"")};function o0(){try{return typeof indexedDB=="object"}catch{return!1}}function a0(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var a;t(((a=r.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const l0="FirebaseError";class Ns extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=l0,Object.setPrototypeOf(this,Ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cf.prototype.create)}}class cf{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,a=this.errors[t],l=a?c0(a,s):"Error",u=`${this.serviceName}: ${l} (${r}).`;return new Ns(r,u,s)}}function c0(e,t){return e.replace(u0,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const u0=/\{\$([^}]+)}/g;class so{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var re;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(re||(re={}));const d0={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},h0=re.INFO,p0={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},f0=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=p0[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uf{constructor(t){this.name=t,this._logLevel=h0,this._logHandler=f0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in re))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?d0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...t),this._logHandler(this,re.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...t),this._logHandler(this,re.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,re.INFO,...t),this._logHandler(this,re.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,re.WARN,...t),this._logHandler(this,re.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...t),this._logHandler(this,re.ERROR,...t)}}const m0=(e,t)=>t.some(n=>e instanceof n);let Pd,Ad;function g0(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function y0(){return Ad||(Ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const df=new WeakMap,Sl=new WeakMap,hf=new WeakMap,xa=new WeakMap,kc=new WeakMap;function v0(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",l)},a=()=>{n(hn(e.result)),r()},l=()=>{s(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&df.set(n,e)}).catch(()=>{}),kc.set(t,e),t}function x0(e){if(Sl.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",l),e.removeEventListener("abort",l)},a=()=>{n(),r()},l=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",l),e.addEventListener("abort",l)});Sl.set(e,t)}let Cl={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Sl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||hf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function w0(e){Cl=e(Cl)}function k0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(wa(this),t,...n);return hf.set(s,t.sort?t.sort():[t]),hn(s)}:y0().includes(e)?function(...t){return e.apply(wa(this),t),hn(df.get(this))}:function(...t){return hn(e.apply(wa(this),t))}}function j0(e){return typeof e=="function"?k0(e):(e instanceof IDBTransaction&&x0(e),m0(e,g0())?new Proxy(e,Cl):e)}function hn(e){if(e instanceof IDBRequest)return v0(e);if(xa.has(e))return xa.get(e);const t=j0(e);return t!==e&&(xa.set(e,t),kc.set(t,e)),t}const wa=e=>kc.get(e);function S0(e,t,{blocked:n,upgrade:s,blocking:r,terminated:a}={}){const l=indexedDB.open(e,t),u=hn(l);return s&&l.addEventListener("upgradeneeded",h=>{s(hn(l.result),h.oldVersion,h.newVersion,hn(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{a&&h.addEventListener("close",()=>a()),r&&h.addEventListener("versionchange",p=>r(p.oldVersion,p.newVersion,p))}).catch(()=>{}),u}const C0=["get","getKey","getAll","getAllKeys","count"],b0=["put","add","delete","clear"],ka=new Map;function Id(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ka.get(t))return ka.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=b0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||C0.includes(n)))return;const a=async function(l,...u){const h=this.transaction(l,r?"readwrite":"readonly");let p=h.store;return s&&(p=p.index(u.shift())),(await Promise.all([p[n](...u),r&&h.done]))[0]};return ka.set(t,a),a}w0(e=>({...e,get:(t,n,s)=>Id(t,n)||e.get(t,n,s),has:(t,n)=>!!Id(t,n)||e.has(t,n)}));/**
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
 */class N0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function T0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const bl="@firebase/app",Rd="0.10.13";/**
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
 */const Vt=new uf("@firebase/app"),E0="@firebase/app-compat",P0="@firebase/analytics-compat",A0="@firebase/analytics",I0="@firebase/app-check-compat",R0="@firebase/app-check",D0="@firebase/auth",_0="@firebase/auth-compat",L0="@firebase/database",O0="@firebase/data-connect",M0="@firebase/database-compat",F0="@firebase/functions",U0="@firebase/functions-compat",H0="@firebase/installations",B0="@firebase/installations-compat",z0="@firebase/messaging",W0="@firebase/messaging-compat",V0="@firebase/performance",$0="@firebase/performance-compat",G0="@firebase/remote-config",Y0="@firebase/remote-config-compat",X0="@firebase/storage",K0="@firebase/storage-compat",Q0="@firebase/firestore",q0="@firebase/vertexai-preview",J0="@firebase/firestore-compat",Z0="firebase",ev="10.14.1",tv={[bl]:"fire-core",[E0]:"fire-core-compat",[A0]:"fire-analytics",[P0]:"fire-analytics-compat",[R0]:"fire-app-check",[I0]:"fire-app-check-compat",[D0]:"fire-auth",[_0]:"fire-auth-compat",[L0]:"fire-rtdb",[O0]:"fire-data-connect",[M0]:"fire-rtdb-compat",[F0]:"fire-fn",[U0]:"fire-fn-compat",[H0]:"fire-iid",[B0]:"fire-iid-compat",[z0]:"fire-fcm",[W0]:"fire-fcm-compat",[V0]:"fire-perf",[$0]:"fire-perf-compat",[G0]:"fire-rc",[Y0]:"fire-rc-compat",[X0]:"fire-gcs",[K0]:"fire-gcs-compat",[Q0]:"fire-fst",[J0]:"fire-fst-compat",[q0]:"fire-vertex","fire-js":"fire-js",[Z0]:"fire-js-all"};/**
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
 */const nv=new Map,sv=new Map,Dd=new Map;function _d(e,t){try{e.container.addComponent(t)}catch(n){Vt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function io(e){const t=e.name;if(Dd.has(t))return Vt.debug(`There were multiple attempts to register component ${t}.`),!1;Dd.set(t,e);for(const n of nv.values())_d(n,e);for(const n of sv.values())_d(n,e);return!0}/**
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
 */const iv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jc=new cf("app","Firebase",iv);/**
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
 */const rv=ev;function hs(e,t,n){var s;let r=(s=tv[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const a=r.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const u=[`Unable to register library "${r}" with version "${t}":`];a&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vt.warn(u.join(" "));return}io(new so(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const ov="firebase-heartbeat-database",av=1,Ai="firebase-heartbeat-store";let ja=null;function pf(){return ja||(ja=S0(ov,av,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ai)}catch(n){console.warn(n)}}}}).catch(e=>{throw jc.create("idb-open",{originalErrorMessage:e.message})})),ja}async function lv(e){try{const n=(await pf()).transaction(Ai),s=await n.objectStore(Ai).get(ff(e));return await n.done,s}catch(t){if(t instanceof Ns)Vt.warn(t.message);else{const n=jc.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vt.warn(n.message)}}}async function Ld(e,t){try{const s=(await pf()).transaction(Ai,"readwrite");await s.objectStore(Ai).put(t,ff(e)),await s.done}catch(n){if(n instanceof Ns)Vt.warn(n.message);else{const s=jc.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vt.warn(s.message)}}}function ff(e){return`${e.name}!${e.options.appId}`}/**
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
 */const cv=1024,uv=30*24*60*60*1e3;class dv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Od();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=uv}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Vt.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Od(),{heartbeatsToSend:s,unsentEntries:r}=hv(this._heartbeatsCache.heartbeats),a=lf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Vt.warn(n),""}}}function Od(){return new Date().toISOString().substring(0,10)}function hv(e,t=cv){const n=[];let s=e.slice();for(const r of e){const a=n.find(l=>l.agent===r.agent);if(a){if(a.dates.push(r.date),Md(n)>t){a.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Md(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return o0()?a0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ld(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Md(e){return lf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function fv(e){io(new so("platform-logger",t=>new N0(t),"PRIVATE")),io(new so("heartbeat",t=>new dv(t),"PRIVATE")),hs(bl,Rd,e),hs(bl,Rd,"esm2017"),hs("fire-js","")}fv("");var mv="firebase",gv="10.14.1";/**
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
 */hs(mv,gv,"app");var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mf;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,f){function v(){}v.prototype=f.prototype,S.D=f.prototype,S.prototype=new v,S.prototype.constructor=S,S.C=function(y,C,T){for(var x=Array(arguments.length-2),G=2;G<arguments.length;G++)x[G-2]=arguments[G];return f.prototype[C].apply(y,x)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,f,v){v||(v=0);var y=Array(16);if(typeof f=="string")for(var C=0;16>C;++C)y[C]=f.charCodeAt(v++)|f.charCodeAt(v++)<<8|f.charCodeAt(v++)<<16|f.charCodeAt(v++)<<24;else for(C=0;16>C;++C)y[C]=f[v++]|f[v++]<<8|f[v++]<<16|f[v++]<<24;f=S.g[0],v=S.g[1],C=S.g[2];var T=S.g[3],x=f+(T^v&(C^T))+y[0]+3614090360&4294967295;f=v+(x<<7&4294967295|x>>>25),x=T+(C^f&(v^C))+y[1]+3905402710&4294967295,T=f+(x<<12&4294967295|x>>>20),x=C+(v^T&(f^v))+y[2]+606105819&4294967295,C=T+(x<<17&4294967295|x>>>15),x=v+(f^C&(T^f))+y[3]+3250441966&4294967295,v=C+(x<<22&4294967295|x>>>10),x=f+(T^v&(C^T))+y[4]+4118548399&4294967295,f=v+(x<<7&4294967295|x>>>25),x=T+(C^f&(v^C))+y[5]+1200080426&4294967295,T=f+(x<<12&4294967295|x>>>20),x=C+(v^T&(f^v))+y[6]+2821735955&4294967295,C=T+(x<<17&4294967295|x>>>15),x=v+(f^C&(T^f))+y[7]+4249261313&4294967295,v=C+(x<<22&4294967295|x>>>10),x=f+(T^v&(C^T))+y[8]+1770035416&4294967295,f=v+(x<<7&4294967295|x>>>25),x=T+(C^f&(v^C))+y[9]+2336552879&4294967295,T=f+(x<<12&4294967295|x>>>20),x=C+(v^T&(f^v))+y[10]+4294925233&4294967295,C=T+(x<<17&4294967295|x>>>15),x=v+(f^C&(T^f))+y[11]+2304563134&4294967295,v=C+(x<<22&4294967295|x>>>10),x=f+(T^v&(C^T))+y[12]+1804603682&4294967295,f=v+(x<<7&4294967295|x>>>25),x=T+(C^f&(v^C))+y[13]+4254626195&4294967295,T=f+(x<<12&4294967295|x>>>20),x=C+(v^T&(f^v))+y[14]+2792965006&4294967295,C=T+(x<<17&4294967295|x>>>15),x=v+(f^C&(T^f))+y[15]+1236535329&4294967295,v=C+(x<<22&4294967295|x>>>10),x=f+(C^T&(v^C))+y[1]+4129170786&4294967295,f=v+(x<<5&4294967295|x>>>27),x=T+(v^C&(f^v))+y[6]+3225465664&4294967295,T=f+(x<<9&4294967295|x>>>23),x=C+(f^v&(T^f))+y[11]+643717713&4294967295,C=T+(x<<14&4294967295|x>>>18),x=v+(T^f&(C^T))+y[0]+3921069994&4294967295,v=C+(x<<20&4294967295|x>>>12),x=f+(C^T&(v^C))+y[5]+3593408605&4294967295,f=v+(x<<5&4294967295|x>>>27),x=T+(v^C&(f^v))+y[10]+38016083&4294967295,T=f+(x<<9&4294967295|x>>>23),x=C+(f^v&(T^f))+y[15]+3634488961&4294967295,C=T+(x<<14&4294967295|x>>>18),x=v+(T^f&(C^T))+y[4]+3889429448&4294967295,v=C+(x<<20&4294967295|x>>>12),x=f+(C^T&(v^C))+y[9]+568446438&4294967295,f=v+(x<<5&4294967295|x>>>27),x=T+(v^C&(f^v))+y[14]+3275163606&4294967295,T=f+(x<<9&4294967295|x>>>23),x=C+(f^v&(T^f))+y[3]+4107603335&4294967295,C=T+(x<<14&4294967295|x>>>18),x=v+(T^f&(C^T))+y[8]+1163531501&4294967295,v=C+(x<<20&4294967295|x>>>12),x=f+(C^T&(v^C))+y[13]+2850285829&4294967295,f=v+(x<<5&4294967295|x>>>27),x=T+(v^C&(f^v))+y[2]+4243563512&4294967295,T=f+(x<<9&4294967295|x>>>23),x=C+(f^v&(T^f))+y[7]+1735328473&4294967295,C=T+(x<<14&4294967295|x>>>18),x=v+(T^f&(C^T))+y[12]+2368359562&4294967295,v=C+(x<<20&4294967295|x>>>12),x=f+(v^C^T)+y[5]+4294588738&4294967295,f=v+(x<<4&4294967295|x>>>28),x=T+(f^v^C)+y[8]+2272392833&4294967295,T=f+(x<<11&4294967295|x>>>21),x=C+(T^f^v)+y[11]+1839030562&4294967295,C=T+(x<<16&4294967295|x>>>16),x=v+(C^T^f)+y[14]+4259657740&4294967295,v=C+(x<<23&4294967295|x>>>9),x=f+(v^C^T)+y[1]+2763975236&4294967295,f=v+(x<<4&4294967295|x>>>28),x=T+(f^v^C)+y[4]+1272893353&4294967295,T=f+(x<<11&4294967295|x>>>21),x=C+(T^f^v)+y[7]+4139469664&4294967295,C=T+(x<<16&4294967295|x>>>16),x=v+(C^T^f)+y[10]+3200236656&4294967295,v=C+(x<<23&4294967295|x>>>9),x=f+(v^C^T)+y[13]+681279174&4294967295,f=v+(x<<4&4294967295|x>>>28),x=T+(f^v^C)+y[0]+3936430074&4294967295,T=f+(x<<11&4294967295|x>>>21),x=C+(T^f^v)+y[3]+3572445317&4294967295,C=T+(x<<16&4294967295|x>>>16),x=v+(C^T^f)+y[6]+76029189&4294967295,v=C+(x<<23&4294967295|x>>>9),x=f+(v^C^T)+y[9]+3654602809&4294967295,f=v+(x<<4&4294967295|x>>>28),x=T+(f^v^C)+y[12]+3873151461&4294967295,T=f+(x<<11&4294967295|x>>>21),x=C+(T^f^v)+y[15]+530742520&4294967295,C=T+(x<<16&4294967295|x>>>16),x=v+(C^T^f)+y[2]+3299628645&4294967295,v=C+(x<<23&4294967295|x>>>9),x=f+(C^(v|~T))+y[0]+4096336452&4294967295,f=v+(x<<6&4294967295|x>>>26),x=T+(v^(f|~C))+y[7]+1126891415&4294967295,T=f+(x<<10&4294967295|x>>>22),x=C+(f^(T|~v))+y[14]+2878612391&4294967295,C=T+(x<<15&4294967295|x>>>17),x=v+(T^(C|~f))+y[5]+4237533241&4294967295,v=C+(x<<21&4294967295|x>>>11),x=f+(C^(v|~T))+y[12]+1700485571&4294967295,f=v+(x<<6&4294967295|x>>>26),x=T+(v^(f|~C))+y[3]+2399980690&4294967295,T=f+(x<<10&4294967295|x>>>22),x=C+(f^(T|~v))+y[10]+4293915773&4294967295,C=T+(x<<15&4294967295|x>>>17),x=v+(T^(C|~f))+y[1]+2240044497&4294967295,v=C+(x<<21&4294967295|x>>>11),x=f+(C^(v|~T))+y[8]+1873313359&4294967295,f=v+(x<<6&4294967295|x>>>26),x=T+(v^(f|~C))+y[15]+4264355552&4294967295,T=f+(x<<10&4294967295|x>>>22),x=C+(f^(T|~v))+y[6]+2734768916&4294967295,C=T+(x<<15&4294967295|x>>>17),x=v+(T^(C|~f))+y[13]+1309151649&4294967295,v=C+(x<<21&4294967295|x>>>11),x=f+(C^(v|~T))+y[4]+4149444226&4294967295,f=v+(x<<6&4294967295|x>>>26),x=T+(v^(f|~C))+y[11]+3174756917&4294967295,T=f+(x<<10&4294967295|x>>>22),x=C+(f^(T|~v))+y[2]+718787259&4294967295,C=T+(x<<15&4294967295|x>>>17),x=v+(T^(C|~f))+y[9]+3951481745&4294967295,S.g[0]=S.g[0]+f&4294967295,S.g[1]=S.g[1]+(C+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+C&4294967295,S.g[3]=S.g[3]+T&4294967295}s.prototype.u=function(S,f){f===void 0&&(f=S.length);for(var v=f-this.blockSize,y=this.B,C=this.h,T=0;T<f;){if(C==0)for(;T<=v;)r(this,S,T),T+=this.blockSize;if(typeof S=="string"){for(;T<f;)if(y[C++]=S.charCodeAt(T++),C==this.blockSize){r(this,y),C=0;break}}else for(;T<f;)if(y[C++]=S[T++],C==this.blockSize){r(this,y),C=0;break}}this.h=C,this.o+=f},s.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var f=1;f<S.length-8;++f)S[f]=0;var v=8*this.o;for(f=S.length-8;f<S.length;++f)S[f]=v&255,v/=256;for(this.u(S),S=Array(16),f=v=0;4>f;++f)for(var y=0;32>y;y+=8)S[v++]=this.g[f]>>>y&255;return S};function a(S,f){var v=u;return Object.prototype.hasOwnProperty.call(v,S)?v[S]:v[S]=f(S)}function l(S,f){this.h=f;for(var v=[],y=!0,C=S.length-1;0<=C;C--){var T=S[C]|0;y&&T==f||(v[C]=T,y=!1)}this.g=v}var u={};function h(S){return-128<=S&&128>S?a(S,function(f){return new l([f|0],0>f?-1:0)}):new l([S|0],0>S?-1:0)}function p(S){if(isNaN(S)||!isFinite(S))return N;if(0>S)return L(p(-S));for(var f=[],v=1,y=0;S>=v;y++)f[y]=S/v|0,v*=4294967296;return new l(f,0)}function P(S,f){if(S.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(S.charAt(0)=="-")return L(P(S.substring(1),f));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=p(Math.pow(f,8)),y=N,C=0;C<S.length;C+=8){var T=Math.min(8,S.length-C),x=parseInt(S.substring(C,C+T),f);8>T?(T=p(Math.pow(f,T)),y=y.j(T).add(p(x))):(y=y.j(v),y=y.add(p(x)))}return y}var N=h(0),k=h(1),E=h(16777216);e=l.prototype,e.m=function(){if(I(this))return-L(this).m();for(var S=0,f=1,v=0;v<this.g.length;v++){var y=this.i(v);S+=(0<=y?y:4294967296+y)*f,f*=4294967296}return S},e.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(j(this))return"0";if(I(this))return"-"+L(this).toString(S);for(var f=p(Math.pow(S,6)),v=this,y="";;){var C=D(v,f).g;v=m(v,C.j(f));var T=((0<v.g.length?v.g[0]:v.h)>>>0).toString(S);if(v=C,j(v))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},e.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function j(S){if(S.h!=0)return!1;for(var f=0;f<S.g.length;f++)if(S.g[f]!=0)return!1;return!0}function I(S){return S.h==-1}e.l=function(S){return S=m(this,S),I(S)?-1:j(S)?0:1};function L(S){for(var f=S.g.length,v=[],y=0;y<f;y++)v[y]=~S.g[y];return new l(v,~S.h).add(k)}e.abs=function(){return I(this)?L(this):this},e.add=function(S){for(var f=Math.max(this.g.length,S.g.length),v=[],y=0,C=0;C<=f;C++){var T=y+(this.i(C)&65535)+(S.i(C)&65535),x=(T>>>16)+(this.i(C)>>>16)+(S.i(C)>>>16);y=x>>>16,T&=65535,x&=65535,v[C]=x<<16|T}return new l(v,v[v.length-1]&-2147483648?-1:0)};function m(S,f){return S.add(L(f))}e.j=function(S){if(j(this)||j(S))return N;if(I(this))return I(S)?L(this).j(L(S)):L(L(this).j(S));if(I(S))return L(this.j(L(S)));if(0>this.l(E)&&0>S.l(E))return p(this.m()*S.m());for(var f=this.g.length+S.g.length,v=[],y=0;y<2*f;y++)v[y]=0;for(y=0;y<this.g.length;y++)for(var C=0;C<S.g.length;C++){var T=this.i(y)>>>16,x=this.i(y)&65535,G=S.i(C)>>>16,K=S.i(C)&65535;v[2*y+2*C]+=x*K,w(v,2*y+2*C),v[2*y+2*C+1]+=T*K,w(v,2*y+2*C+1),v[2*y+2*C+1]+=x*G,w(v,2*y+2*C+1),v[2*y+2*C+2]+=T*G,w(v,2*y+2*C+2)}for(y=0;y<f;y++)v[y]=v[2*y+1]<<16|v[2*y];for(y=f;y<2*f;y++)v[y]=0;return new l(v,0)};function w(S,f){for(;(S[f]&65535)!=S[f];)S[f+1]+=S[f]>>>16,S[f]&=65535,f++}function b(S,f){this.g=S,this.h=f}function D(S,f){if(j(f))throw Error("division by zero");if(j(S))return new b(N,N);if(I(S))return f=D(L(S),f),new b(L(f.g),L(f.h));if(I(f))return f=D(S,L(f)),new b(L(f.g),f.h);if(30<S.g.length){if(I(S)||I(f))throw Error("slowDivide_ only works with positive integers.");for(var v=k,y=f;0>=y.l(S);)v=M(v),y=M(y);var C=F(v,1),T=F(y,1);for(y=F(y,2),v=F(v,2);!j(y);){var x=T.add(y);0>=x.l(S)&&(C=C.add(v),T=x),y=F(y,1),v=F(v,1)}return f=m(S,C.j(f)),new b(C,f)}for(C=N;0<=S.l(f);){for(v=Math.max(1,Math.floor(S.m()/f.m())),y=Math.ceil(Math.log(v)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=p(v),x=T.j(f);I(x)||0<x.l(S);)v-=y,T=p(v),x=T.j(f);j(T)&&(T=k),C=C.add(T),S=m(S,x)}return new b(C,S)}e.A=function(S){return D(this,S).h},e.and=function(S){for(var f=Math.max(this.g.length,S.g.length),v=[],y=0;y<f;y++)v[y]=this.i(y)&S.i(y);return new l(v,this.h&S.h)},e.or=function(S){for(var f=Math.max(this.g.length,S.g.length),v=[],y=0;y<f;y++)v[y]=this.i(y)|S.i(y);return new l(v,this.h|S.h)},e.xor=function(S){for(var f=Math.max(this.g.length,S.g.length),v=[],y=0;y<f;y++)v[y]=this.i(y)^S.i(y);return new l(v,this.h^S.h)};function M(S){for(var f=S.g.length+1,v=[],y=0;y<f;y++)v[y]=S.i(y)<<1|S.i(y-1)>>>31;return new l(v,S.h)}function F(S,f){var v=f>>5;f%=32;for(var y=S.g.length-v,C=[],T=0;T<y;T++)C[T]=0<f?S.i(T+v)>>>f|S.i(T+v+1)<<32-f:S.i(T+v);return new l(C,S.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=P,mf=l}).apply(typeof Fd<"u"?Fd:typeof self<"u"?self:typeof window<"u"?window:{});var vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof vr=="object"&&vr];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=n(this);function r(o,c){if(c)e:{var d=s;o=o.split(".");for(var g=0;g<o.length-1;g++){var A=o[g];if(!(A in d))break e;d=d[A]}o=o[o.length-1],g=d[o],c=c(g),c!=g&&c!=null&&t(d,o,{configurable:!0,writable:!0,value:c})}}function a(o,c){o instanceof String&&(o+="");var d=0,g=!1,A={next:function(){if(!g&&d<o.length){var _=d++;return{value:c(_,o[_]),done:!1}}return g=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}r("Array.prototype.values",function(o){return o||function(){return a(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function p(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function P(o,c,d){return o.call.apply(o.bind,arguments)}function N(o,c,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,g),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function k(o,c,d){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?P:N,k.apply(null,arguments)}function E(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function j(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,A,_){for(var U=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)U[ie-2]=arguments[ie];return c.prototype[A].apply(g,U)}}function I(o){const c=o.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=o[g];return d}return[]}function L(o,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(h(g)){const A=o.length||0,_=g.length||0;o.length=A+_;for(let U=0;U<_;U++)o[A+U]=g[U]}else o.push(g)}}class m{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(o){return/^[\s\xa0]*$/.test(o)}function b(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function D(o){return D[" "](o),o}D[" "]=function(){};var M=b().indexOf("Gecko")!=-1&&!(b().toLowerCase().indexOf("webkit")!=-1&&b().indexOf("Edge")==-1)&&!(b().indexOf("Trident")!=-1||b().indexOf("MSIE")!=-1)&&b().indexOf("Edge")==-1;function F(o,c,d){for(const g in o)c.call(d,o[g],g,o)}function S(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function f(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(o,c){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)o[d]=g[d];for(let _=0;_<v.length;_++)d=v[_],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function C(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function T(o){u.setTimeout(()=>{throw o},0)}function x(){var o=z;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class G{constructor(){this.h=this.g=null}add(c,d){const g=K.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var K=new m(()=>new pe,o=>o.reset());class pe{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,H=!1,z=new G,$=()=>{const o=u.Promise.resolve(void 0);ve=()=>{o.then(ne)}};var ne=()=>{for(var o;o=x();){try{o.h.call(o.g)}catch(d){T(d)}var c=K;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}H=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Je=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,c),u.removeEventListener("test",d,c)}catch{}return o}();function Ge(o,c){if(ae.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(M){e:{try{D(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:V[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ge.aa.h.call(this)}}j(Ge,ae);var V={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),je=0;function He(o,c,d,g,A){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=A,this.key=++je,this.da=this.fa=!1}function be(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ot(o){this.src=o,this.g={},this.h=0}ot.prototype.add=function(o,c,d,g,A){var _=o.toString();o=this.g[_],o||(o=this.g[_]=[],this.h++);var U=Ts(o,c,g,A);return-1<U?(c=o[U],d||(c.fa=!1)):(c=new He(c,this.src,_,!!g,A),c.fa=d,o.push(c)),c};function vn(o,c){var d=c.type;if(d in o.g){var g=o.g[d],A=Array.prototype.indexOf.call(g,c,void 0),_;(_=0<=A)&&Array.prototype.splice.call(g,A,1),_&&(be(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Ts(o,c,d,g){for(var A=0;A<o.length;++A){var _=o[A];if(!_.da&&_.listener==c&&_.capture==!!d&&_.ha==g)return A}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),Ps={};function Mi(o,c,d,g,A){if(Array.isArray(c)){for(var _=0;_<c.length;_++)Mi(o,c[_],d,g,A);return null}return d=Hi(d),o&&o[Y]?o.K(c,d,p(g)?!!g.capture:!1,A):bo(o,c,d,!1,g,A)}function bo(o,c,d,g,A,_){if(!c)throw Error("Invalid event type");var U=p(A)?!!A.capture:!!A,ie=As(o);if(ie||(o[Es]=ie=new ot(o)),d=ie.add(c,d,g,U,_),d.proxy)return d;if(g=No(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)Je||(A=U),A===void 0&&(A=!1),o.addEventListener(c.toString(),g,A);else if(o.attachEvent)o.attachEvent(Ui(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function No(){function o(d){return c.call(o.src,o.listener,d)}const c=To;return o}function Fi(o,c,d,g,A){if(Array.isArray(c))for(var _=0;_<c.length;_++)Fi(o,c[_],d,g,A);else g=p(g)?!!g.capture:!!g,d=Hi(d),o&&o[Y]?(o=o.i,c=String(c).toString(),c in o.g&&(_=o.g[c],d=Ts(_,d,g,A),-1<d&&(be(_[d]),Array.prototype.splice.call(_,d,1),_.length==0&&(delete o.g[c],o.h--)))):o&&(o=As(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Ts(c,d,g,A)),(d=-1<o?c[o]:null)&&Fn(d))}function Fn(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Y])vn(c.i,o);else{var d=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(d,g,o.capture):c.detachEvent?c.detachEvent(Ui(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=As(c))?(vn(d,o),d.h==0&&(d.src=null,c[Es]=null)):be(o)}}}function Ui(o){return o in Ps?Ps[o]:Ps[o]="on"+o}function To(o,c){if(o.da)o=!0;else{c=new Ge(c,this);var d=o.listener,g=o.ha||o.src;o.fa&&Fn(o),o=d.call(g,c)}return o}function As(o){return o=o[Es],o instanceof ot?o:null}var xn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hi(o){return typeof o=="function"?o:(o[xn]||(o[xn]=function(c){return o.handleEvent(c)}),o[xn])}function Ne(){q.call(this),this.i=new ot(this),this.M=this,this.F=null}j(Ne,q),Ne.prototype[Y]=!0,Ne.prototype.removeEventListener=function(o,c,d,g){Fi(this,o,c,d,g)};function Pe(o,c){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new ae(c,o);else if(c instanceof ae)c.target=c.target||o;else{var A=c;c=new ae(g,o),y(c,A)}if(A=!0,d)for(var _=d.length-1;0<=_;_--){var U=c.g=d[_];A=Un(U,g,!0,c)&&A}if(U=c.g=o,A=Un(U,g,!0,c)&&A,A=Un(U,g,!1,c)&&A,d)for(_=0;_<d.length;_++)U=c.g=d[_],A=Un(U,g,!1,c)&&A}Ne.prototype.N=function(){if(Ne.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],g=0;g<d.length;g++)be(d[g]);delete o.g[c],o.h--}}this.F=null},Ne.prototype.K=function(o,c,d,g){return this.i.add(String(o),c,!1,d,g)},Ne.prototype.L=function(o,c,d,g){return this.i.add(String(o),c,!0,d,g)};function Un(o,c,d,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,_=0;_<c.length;++_){var U=c[_];if(U&&!U.da&&U.capture==d){var ie=U.listener,Ae=U.ha||U.src;U.fa&&vn(o.i,U),A=ie.call(Ae,g)!==!1&&A}}return A&&!g.defaultPrevented}function W(o,c,d){if(typeof o=="function")d&&(o=k(o,d));else if(o&&typeof o.handleEvent=="function")o=k(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function ee(o){o.g=W(()=>{o.g=null,o.i&&(o.i=!1,ee(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Eo extends q{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ee(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wn(o){q.call(this),this.h=o,this.g={}}j(wn,q);var Bi=[];function zi(o){F(o.g,function(c,d){this.g.hasOwnProperty(d)&&Fn(c)},o),o.g={}}wn.prototype.N=function(){wn.aa.N.call(this),zi(this)},wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Po=u.JSON.stringify,wf=u.JSON.parse,kf=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ao(){}Ao.prototype.h=null;function Cc(o){return o.h||(o.h=o.i())}function jf(){}var Is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Io(){ae.call(this,"d")}j(Io,ae);function Ro(){ae.call(this,"c")}j(Ro,ae);var Hn={},bc=null;function Do(){return bc=bc||new Ne}Hn.La="serverreachability";function Nc(o){ae.call(this,Hn.La,o)}j(Nc,ae);function Rs(o){const c=Do();Pe(c,new Nc(c))}Hn.STAT_EVENT="statevent";function Tc(o,c){ae.call(this,Hn.STAT_EVENT,o),this.stat=c}j(Tc,ae);function Be(o){const c=Do();Pe(c,new Tc(c,o))}Hn.Ma="timingevent";function Ec(o,c){ae.call(this,Hn.Ma,o),this.size=c}j(Ec,ae);function Ds(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function Sf(o,c,d,g,A,_){o.info(function(){if(o.g)if(_)for(var U="",ie=_.split("&"),Ae=0;Ae<ie.length;Ae++){var Z=ie[Ae].split("=");if(1<Z.length){var _e=Z[0];Z=Z[1];var Le=_e.split("_");U=2<=Le.length&&Le[1]=="type"?U+(_e+"="+Z+"&"):U+(_e+"=redacted&")}}else U=null;else U=_;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+c+`
`+d+`
`+U})}function Cf(o,c,d,g,A,_,U){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+c+`
`+d+`
`+_+" "+U})}function Bn(o,c,d,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Nf(o,d)+(g?" "+g:"")})}function bf(o,c){o.info(function(){return"TIMEOUT: "+c})}_s.prototype.info=function(){};function Nf(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var A=g[1];if(Array.isArray(A)&&!(1>A.length)){var _=A[0];if(_!="noop"&&_!="stop"&&_!="close")for(var U=1;U<A.length;U++)A[U]=""}}}}return Po(d)}catch{return c}}var _o={NO_ERROR:0,TIMEOUT:8},Tf={},Lo;function Wi(){}j(Wi,Ao),Wi.prototype.g=function(){return new XMLHttpRequest},Wi.prototype.i=function(){return{}},Lo=new Wi;function Gt(o,c,d,g){this.j=o,this.i=c,this.l=d,this.R=g||1,this.U=new wn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pc}function Pc(){this.i=null,this.g="",this.h=!1}var Ac={},Oo={};function Mo(o,c,d){o.L=1,o.v=Yi(Dt(c)),o.m=d,o.P=!0,Ic(o,null)}function Ic(o,c){o.F=Date.now(),Vi(o),o.A=Dt(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),$c(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Pc,o.g=cu(o.j,d?c:null,!o.m),0<o.O&&(o.M=new Eo(k(o.Y,o,o.g),o.O)),c=o.U,d=o.g,g=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Bi[0]=A.toString()),A=Bi);for(var _=0;_<A.length;_++){var U=Mi(d,A[_],g||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=o.H?f(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Rs(),Sf(o.i,o.u,o.A,o.l,o.R,o.m)}Gt.prototype.ca=function(o){o=o.target;const c=this.M;c&&_t(o)==3?c.j():this.Y(o)},Gt.prototype.Y=function(o){try{if(o==this.g)e:{const Le=_t(this.g);var c=this.g.Ba();const Vn=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||Jc(this.g)))){this.J||Le!=4||c==7||(c==8||0>=Vn?Rs(3):Rs(2)),Fo(this);var d=this.g.Z();this.X=d;t:if(Rc(this)){var g=Jc(this.g);o="";var A=g.length,_=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),Ls(this);var U="";break t}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(g[c],{stream:!(_&&c==A-1)});g.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,Cf(this.i,this.u,this.A,this.l,this.R,Le,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Ae=this.g;if((ie=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(ie)){var Z=ie;break t}}Z=null}if(d=Z)Bn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uo(this,d);else{this.o=!1,this.s=3,Be(12),kn(this),Ls(this);break e}}if(this.P){d=!0;let ft;for(;!this.J&&this.C<U.length;)if(ft=Ef(this,U),ft==Oo){Le==4&&(this.s=4,Be(14),d=!1),Bn(this.i,this.l,null,"[Incomplete Response]");break}else if(ft==Ac){this.s=4,Be(15),Bn(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Bn(this.i,this.l,ft,null),Uo(this,ft);if(Rc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||U.length!=0||this.h.h||(this.s=1,Be(16),d=!1),this.o=this.o&&d,!d)Bn(this.i,this.l,U,"[Invalid Chunked Response]"),kn(this),Ls(this);else if(0<U.length&&!this.W){this.W=!0;var _e=this.j;_e.g==this&&_e.ba&&!_e.M&&(_e.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),$o(_e),_e.M=!0,Be(11))}}else Bn(this.i,this.l,U,null),Uo(this,U);Le==4&&kn(this),this.o&&!this.J&&(Le==4?ru(this.j,this):(this.o=!1,Vi(this)))}else $f(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,Be(12)):(this.s=0,Be(13)),kn(this),Ls(this)}}}catch{}finally{}};function Rc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ef(o,c){var d=o.C,g=c.indexOf(`
`,d);return g==-1?Oo:(d=Number(c.substring(d,g)),isNaN(d)?Ac:(g+=1,g+d>c.length?Oo:(c=c.slice(g,g+d),o.C=g+d,c)))}Gt.prototype.cancel=function(){this.J=!0,kn(this)};function Vi(o){o.S=Date.now()+o.I,Dc(o,o.I)}function Dc(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ds(k(o.ba,o),c)}function Fo(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Gt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(bf(this.i,this.A),this.L!=2&&(Rs(),Be(17)),kn(this),this.s=2,Ls(this)):Dc(this,this.S-o)};function Ls(o){o.j.G==0||o.J||ru(o.j,o)}function kn(o){Fo(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,zi(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Uo(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Ho(d.h,o))){if(!o.K&&Ho(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Zi(d),qi(d);else break e;Vo(d),Be(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ds(k(d.Za,d),6e3));if(1>=Oc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Sn(d,11)}else if((o.K||d.g==o)&&Zi(d),!w(c))for(A=d.Da.g.parse(c),c=0;c<A.length;c++){let Z=A[c];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const _e=Z[3];_e!=null&&(d.la=_e,d.j.info("VER="+d.la));const Le=Z[4];Le!=null&&(d.Aa=Le,d.j.info("SVER="+d.Aa));const Vn=Z[5];Vn!=null&&typeof Vn=="number"&&0<Vn&&(g=1.5*Vn,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const ft=o.g;if(ft){const er=ft.g?ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(er){var _=g.h;_.g||er.indexOf("spdy")==-1&&er.indexOf("quic")==-1&&er.indexOf("h2")==-1||(_.j=_.l,_.g=new Set,_.h&&(Bo(_,_.h),_.h=null))}if(g.D){const Go=ft.g?ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Go&&(g.ya=Go,le(g.I,g.D,Go))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var U=o;if(g.qa=lu(g,g.J?g.ia:null,g.W),U.K){Mc(g.h,U);var ie=U,Ae=g.L;Ae&&(ie.I=Ae),ie.B&&(Fo(ie),Vi(ie)),g.g=U}else su(g);0<d.i.length&&Ji(d)}else Z[0]!="stop"&&Z[0]!="close"||Sn(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Sn(d,7):Wo(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}Rs(4)}catch{}}var Pf=class{constructor(o,c){this.g=o,this.map=c}};function _c(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Lc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Oc(o){return o.h?1:o.g?o.g.size:0}function Ho(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Bo(o,c){o.g?o.g.add(c):o.h=c}function Mc(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}_c.prototype.cancel=function(){if(this.i=Fc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Fc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return I(o.i)}function Af(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(h(o)){for(var c=[],d=o.length,g=0;g<d;g++)c.push(o[g]);return c}c=[],d=0;for(g in o)c[d++]=o[g];return c}function If(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(h(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const g in o)c[d++]=g;return c}}}function Uc(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(h(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=If(o),g=Af(o),A=g.length,_=0;_<A;_++)c.call(void 0,g[_],d&&d[_],o)}var Hc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rf(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),A=null;if(0<=g){var _=o[d].substring(0,g);A=o[d].substring(g+1)}else _=o[d];c(_,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function jn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof jn){this.h=o.h,$i(this,o.j),this.o=o.o,this.g=o.g,Gi(this,o.s),this.l=o.l;var c=o.i,d=new Fs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Bc(this,d),this.m=o.m}else o&&(c=String(o).match(Hc))?(this.h=!1,$i(this,c[1]||"",!0),this.o=Os(c[2]||""),this.g=Os(c[3]||"",!0),Gi(this,c[4]),this.l=Os(c[5]||"",!0),Bc(this,c[6]||"",!0),this.m=Os(c[7]||"")):(this.h=!1,this.i=new Fs(null,this.h))}jn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Ms(c,zc,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ms(c,zc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ms(d,d.charAt(0)=="/"?Lf:_f,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ms(d,Mf)),o.join("")};function Dt(o){return new jn(o)}function $i(o,c,d){o.j=d?Os(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Gi(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Bc(o,c,d){c instanceof Fs?(o.i=c,Ff(o.i,o.h)):(d||(c=Ms(c,Of)),o.i=new Fs(c,o.h))}function le(o,c,d){o.i.set(c,d)}function Yi(o){return le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Os(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ms(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Df),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Df(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var zc=/[#\/\?@]/g,_f=/[#\?:]/g,Lf=/[#\?]/g,Of=/[#\?@]/g,Mf=/#/g;function Fs(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Yt(o){o.g||(o.g=new Map,o.h=0,o.i&&Rf(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}e=Fs.prototype,e.add=function(o,c){Yt(this),this.i=null,o=zn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Wc(o,c){Yt(o),c=zn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Vc(o,c){return Yt(o),c=zn(o,c),o.g.has(c)}e.forEach=function(o,c){Yt(this),this.g.forEach(function(d,g){d.forEach(function(A){o.call(c,A,g,this)},this)},this)},e.na=function(){Yt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const A=o[g];for(let _=0;_<A.length;_++)d.push(c[g])}return d},e.V=function(o){Yt(this);let c=[];if(typeof o=="string")Vc(this,o)&&(c=c.concat(this.g.get(zn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},e.set=function(o,c){return Yt(this),this.i=null,o=zn(this,o),Vc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},e.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function $c(o,c,d){Wc(o,c),0<d.length&&(o.i=null,o.g.set(zn(o,c),I(d)),o.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const _=encodeURIComponent(String(g)),U=this.V(g);for(g=0;g<U.length;g++){var A=_;U[g]!==""&&(A+="="+encodeURIComponent(String(U[g]))),o.push(A)}}return this.i=o.join("&")};function zn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Ff(o,c){c&&!o.j&&(Yt(o),o.i=null,o.g.forEach(function(d,g){var A=g.toLowerCase();g!=A&&(Wc(this,g),$c(this,A,d))},o)),o.j=c}function Uf(o,c){const d=new _s;if(u.Image){const g=new Image;g.onload=E(Xt,d,"TestLoadImage: loaded",!0,c,g),g.onerror=E(Xt,d,"TestLoadImage: error",!1,c,g),g.onabort=E(Xt,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=E(Xt,d,"TestLoadImage: timeout",!1,c,g),u.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function Hf(o,c){const d=new _s,g=new AbortController,A=setTimeout(()=>{g.abort(),Xt(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(_=>{clearTimeout(A),_.ok?Xt(d,"TestPingServer: ok",!0,c):Xt(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),Xt(d,"TestPingServer: error",!1,c)})}function Xt(o,c,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function Bf(){this.g=new kf}function zf(o,c,d){const g=d||"";try{Uc(o,function(A,_){let U=A;p(A)&&(U=Po(A)),c.push(g+_+"="+encodeURIComponent(U))})}catch(A){throw c.push(g+"type="+encodeURIComponent("_badmap")),A}}function Xi(o){this.l=o.Ub||null,this.j=o.eb||!1}j(Xi,Ao),Xi.prototype.g=function(){return new Ki(this.l,this.j)},Xi.prototype.i=function(o){return function(){return o}}({});function Ki(o,c){Ne.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(Ki,Ne),e=Ki.prototype,e.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Hs(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Us(this):Hs(this),this.readyState==3&&Gc(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,Us(this))},e.Qa=function(o){this.g&&(this.response=o,Us(this))},e.ga=function(){this.g&&Us(this)};function Us(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hs(o)}e.setRequestHeader=function(o,c){this.u.append(o,c)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Hs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Yc(o){let c="";return F(o,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function zo(o,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Yc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):le(o,c,d))}function xe(o){Ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(xe,Ne);var Wf=/^https?$/i,Vf=["POST","PUT"];e=xe.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Lo.g(),this.v=this.o?Cc(this.o):Cc(Lo),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(_){Xc(this,_);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const _ of g.keys())d.set(_,g.get(_));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(_=>_.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Vf,c,void 0))||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[_,U]of d)this.g.setRequestHeader(_,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qc(this),this.u=!0,this.g.send(o),this.u=!1}catch(_){Xc(this,_)}};function Xc(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Kc(o),Qi(o)}function Kc(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),Qi(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),xe.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Qc(this):this.bb())},e.bb=function(){Qc(this)};function Qc(o){if(o.h&&typeof l<"u"&&(!o.v[1]||_t(o)!=4||o.Z()!=2)){if(o.u&&_t(o)==4)W(o.Ea,0,o);else if(Pe(o,"readystatechange"),_t(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=U===0){var A=String(o.D).match(Hc)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),g=!Wf.test(A?A.toLowerCase():"")}d=g}if(d)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var _=2<_t(o)?o.g.statusText:""}catch{_=""}o.l=_+" ["+o.Z()+"]",Kc(o)}}finally{Qi(o)}}}}function Qi(o,c){if(o.g){qc(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Pe(o,"ready");try{d.onreadystatechange=g}catch{}}}function qc(o){o.I&&(u.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function _t(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),wf(c)}};function Jc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $f(o){const c={};o=(o.g&&2<=_t(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(w(o[g]))continue;var d=C(o[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const _=c[A]||[];c[A]=_,_.push(d)}S(c,function(g){return g.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bs(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Zc(o){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bs("baseRetryDelayMs",5e3,o),this.cb=Bs("retryDelaySeedMs",1e4,o),this.Wa=Bs("forwardChannelMaxRetries",2,o),this.wa=Bs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new _c(o&&o.concurrentRequestLimit),this.Da=new Bf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Zc.prototype,e.la=8,e.G=1,e.connect=function(o,c,d,g){Be(0),this.W=o,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=lu(this,null,this.W),Ji(this)};function Wo(o){if(eu(o),o.G==3){var c=o.U++,d=Dt(o.I);if(le(d,"SID",o.K),le(d,"RID",c),le(d,"TYPE","terminate"),zs(o,d),c=new Gt(o,o.j,c),c.L=2,c.v=Yi(Dt(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=c.v,d=!0),d||(c.g=cu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Vi(c)}au(o)}function qi(o){o.g&&($o(o),o.g.cancel(),o.g=null)}function eu(o){qi(o),o.u&&(u.clearTimeout(o.u),o.u=null),Zi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Ji(o){if(!Lc(o.h)&&!o.s){o.s=!0;var c=o.Ga;ve||$(),H||(ve(),H=!0),z.add(c,o),o.B=0}}function Gf(o,c){return Oc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ds(k(o.Ga,o,c),ou(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new Gt(this,this.j,o);let _=this.o;if(this.S&&(_?(_=f(_),y(_,this.S)):_=this.S),this.m!==null||this.O||(A.H=_,_=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=nu(this,A,c),d=Dt(this.I),le(d,"RID",o),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),zs(this,d),_&&(this.O?c="headers="+encodeURIComponent(String(Yc(_)))+"&"+c:this.m&&zo(d,this.m,_)),Bo(this.h,A),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",c),le(d,"SID","null"),A.T=!0,Mo(A,d,null)):Mo(A,d,c),this.G=2}}else this.G==3&&(o?tu(this,o):this.i.length==0||Lc(this.h)||tu(this))};function tu(o,c){var d;c?d=c.l:d=o.U++;const g=Dt(o.I);le(g,"SID",o.K),le(g,"RID",d),le(g,"AID",o.T),zs(o,g),o.m&&o.o&&zo(g,o.m,o.o),d=new Gt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=nu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Bo(o.h,d),Mo(d,g,c)}function zs(o,c){o.H&&F(o.H,function(d,g){le(c,g,d)}),o.l&&Uc({},function(d,g){le(c,g,d)})}function nu(o,c,d){d=Math.min(o.i.length,d);var g=o.l?k(o.l.Na,o.l,o):null;e:{var A=o.i;let _=-1;for(;;){const U=["count="+d];_==-1?0<d?(_=A[0].g,U.push("ofs="+_)):_=0:U.push("ofs="+_);let ie=!0;for(let Ae=0;Ae<d;Ae++){let Z=A[Ae].g;const _e=A[Ae].map;if(Z-=_,0>Z)_=Math.max(0,A[Ae].g-100),ie=!1;else try{zf(_e,U,"req"+Z+"_")}catch{g&&g(_e)}}if(ie){g=U.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,g}function su(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;ve||$(),H||(ve(),H=!0),z.add(c,o),o.v=0}}function Vo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ds(k(o.Fa,o),ou(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ds(k(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Be(10),qi(this),iu(this))};function $o(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function iu(o){o.g=new Gt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Dt(o.qa);le(c,"RID","rpc"),le(c,"SID",o.K),le(c,"AID",o.T),le(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&le(c,"TO",o.ja),le(c,"TYPE","xmlhttp"),zs(o,c),o.m&&o.o&&zo(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Yi(Dt(c)),d.m=null,d.P=!0,Ic(d,o)}e.Za=function(){this.C!=null&&(this.C=null,qi(this),Vo(this),Be(19))};function Zi(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function ru(o,c){var d=null;if(o.g==c){Zi(o),$o(o),o.g=null;var g=2}else if(Ho(o.h,c))d=c.D,Mc(o.h,c),g=1;else return;if(o.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;g=Do(),Pe(g,new Ec(g,d)),Ji(o)}else su(o);else if(A=c.s,A==3||A==0&&0<c.X||!(g==1&&Gf(o,c)||g==2&&Vo(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),A){case 1:Sn(o,5);break;case 4:Sn(o,10);break;case 3:Sn(o,6);break;default:Sn(o,2)}}}function ou(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Sn(o,c){if(o.j.info("Error code "+c),c==2){var d=k(o.fb,o),g=o.Xa;const A=!g;g=new jn(g||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||$i(g,"https"),Yi(g),A?Uf(g.toString(),d):Hf(g.toString(),d)}else Be(2);o.G=0,o.l&&o.l.sa(c),au(o),eu(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function au(o){if(o.G=0,o.ka=[],o.l){const c=Fc(o.h);(c.length!=0||o.i.length!=0)&&(L(o.ka,c),L(o.ka,o.i),o.h.i.length=0,I(o.i),o.i.length=0),o.l.ra()}}function lu(o,c,d){var g=d instanceof jn?Dt(d):new jn(d);if(g.g!="")c&&(g.g=c+"."+g.g),Gi(g,g.s);else{var A=u.location;g=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var _=new jn(null);g&&$i(_,g),c&&(_.g=c),A&&Gi(_,A),d&&(_.l=d),g=_}return d=o.D,c=o.ya,d&&c&&le(g,d,c),le(g,"VER",o.la),zs(o,g),g}function cu(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new xe(new Xi({eb:d})):new xe(o.pa),c.Ha(o.J),c}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function uu(){}e=uu.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function at(o,c){Ne.call(this),this.g=new Zc(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!w(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Wn(this)}j(at,Ne),at.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){Wo(this.g)},at.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Po(o),o=d);c.i.push(new Pf(c.Ya++,o)),c.G==3&&Ji(c)},at.prototype.N=function(){this.g.l=null,delete this.j,Wo(this.g),delete this.g,at.aa.N.call(this)};function du(o){Io.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}j(du,Io);function hu(){Ro.call(this),this.status=1}j(hu,Ro);function Wn(o){this.g=o}j(Wn,uu),Wn.prototype.ua=function(){Pe(this.g,"a")},Wn.prototype.ta=function(o){Pe(this.g,new du(o))},Wn.prototype.sa=function(o){Pe(this.g,new hu)},Wn.prototype.ra=function(){Pe(this.g,"b")},at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,_o.NO_ERROR=0,_o.TIMEOUT=8,_o.HTTP_ERROR=6,Tf.COMPLETE="complete",jf.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",Ne.prototype.listen=Ne.prototype.K,xe.prototype.listenOnce=xe.prototype.L,xe.prototype.getLastError=xe.prototype.Ka,xe.prototype.getLastErrorCode=xe.prototype.Ba,xe.prototype.getStatus=xe.prototype.Z,xe.prototype.getResponseJson=xe.prototype.Oa,xe.prototype.getResponseText=xe.prototype.oa,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Ha}).apply(typeof vr<"u"?vr:typeof self<"u"?self:typeof window<"u"?window:{});const Ud="@firebase/firestore";/**
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
 */class et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let Co="10.14.0";/**
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
 */const ro=new uf("@firebase/firestore");function St(e,...t){if(ro.logLevel<=re.DEBUG){const n=t.map(yf);ro.debug(`Firestore (${Co}): ${e}`,...n)}}function gf(e,...t){if(ro.logLevel<=re.ERROR){const n=t.map(yf);ro.error(`Firestore (${Co}): ${e}`,...n)}}function yf(e){if(typeof e=="string")return e;try{/**
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
 */function vf(e="Unexpected state"){const t=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+e;throw gf(t),new Error(t)}function di(e,t){e||vf()}/**
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
 */const wt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class kt extends Ns{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hi{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class yv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class xv{constructor(t){this.t=t,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){di(this.o===void 0);let s=this.i;const r=h=>this.i!==s?(s=this.i,n(h)):Promise.resolve();let a=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new hi,t.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const h=a;t.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},u=h=>{St("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(St("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new hi)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(St("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(di(typeof s.accessToken=="string"),new yv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return di(t===null||typeof t=="string"),new et(t)}}class wv{constructor(t,n,s){this.l=t,this.h=n,this.P=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kv{constructor(t,n,s){this.l=t,this.h=n,this.P=s}getToken(){return Promise.resolve(new wv(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sv{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){di(this.o===void 0);const s=a=>{a.error!=null&&St("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,St("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>s(a))};const r=a=>{St("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>r(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?r(a):St("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(di(typeof n.token=="string"),this.R=n.token,new jv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Cv(e){return e.name==="IndexedDbTransactionError"}class oo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new oo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof oo&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Hd,Q;(Q=Hd||(Hd={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new mf([4294967295,4294967295],0);function Sa(){return typeof document<"u"?document:null}/**
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
 */class bv{constructor(t,n,s=1e3,r=1.5,a=6e4){this.ui=t,this.timerId=n,this.ko=s,this.qo=r,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-s);r>0&&St("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Sc{constructor(t,n,s,r,a){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=a,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,r,a){const l=Date.now()+s,u=new Sc(t,n,l,r,a);return u.start(s),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new kt(wt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Bd,zd;(zd=Bd||(Bd={})).ea="default",zd.Cache="cache";/**
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
 */function Nv(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Wd=new Map;function Tv(e,t,n,s){if(t===!0&&s===!0)throw new kt(wt.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class Vd{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new kt(wt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new kt(wt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Tv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nv((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new kt(wt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new kt(wt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new kt(wt.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ev{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vd({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new kt(wt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new kt(wt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vd(t),t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new vv;switch(s.type){case"firstParty":return new kv(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new kt(wt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Wd.get(n);s&&(St("ComponentProvider","Removing Datastore"),Wd.delete(n),s.terminate())}(this),Promise.resolve()}}/**
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
 */class $d{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bv(this,"async_queue_retry"),this.Vu=()=>{const s=Sa();s&&St("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=t;const n=Sa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const n=Sa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new hi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Cv(t))throw t;St("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const n=this.mu.then(()=>(this.du=!0,t().catch(s=>{this.Eu=s,this.du=!1;const r=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(s);throw gf("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(t,n,s){this.fu(),this.Ru.indexOf(t)>-1&&(n=0);const r=Sc.createAndSchedule(this,t,n,s,a=>this.yu(a));return this.Tu.push(r),r}fu(){this.Eu&&vf()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const n of this.Tu)if(n.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const n=this.Tu.indexOf(t);this.Tu.splice(n,1)}}class Pv extends Ev{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new $d,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $d(t),this._firestoreClient=void 0,await t}}}(function(t,n=!0){(function(r){Co=r})(rv),io(new so("firestore",(s,{instanceIdentifier:r,options:a})=>{const l=s.getProvider("app").getImmediate(),u=new Pv(new xv(s.getProvider("auth-internal")),new Sv(s.getProvider("app-check-internal")),function(p,P){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new kt(wt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oo(p.options.projectId,P)}(l,r),l);return a=Object.assign({useFetchStreams:n},a),u._setSettings(a),u},"PUBLIC").setMultipleInstances(!0)),hs(Ud,"4.7.3",t),hs(Ud,"4.7.3","esm2017")})();const Av=async e=>null,Iv=(e,t)=>(t([]),()=>{}),Rv=(e,t)=>(t([]),()=>{}),Dv=async(e,t)=>null,_v=async(e,t)=>{},Lv=({onLogin:e,onTeacherMode:t})=>{const[n,s]=R.useState("student"),[r,a]=R.useState(""),[l,u]=R.useState(""),[h,p]=R.useState(""),[P,N]=R.useState(""),[k,E]=R.useState(""),[j,I]=R.useState(!1),[L,m]=R.useState("");return i.jsx("div",{className:"login-container",children:i.jsxs("div",{className:"login-card",children:[i.jsxs("div",{className:"login-header",children:[i.jsx("h1",{children:"CyberEd Range"}),i.jsx("p",{children:"Setup Required"})]}),i.jsxs("div",{className:"setup-warning",children:[i.jsx("h3",{children:"Firebase Configuration Needed"}),i.jsx("p",{children:"To enable multi-student mode, please configure Firebase:"}),i.jsxs("ol",{children:[i.jsxs("li",{children:["Create a Firebase project at ",i.jsx("a",{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer",children:"console.firebase.google.com"})]}),i.jsx("li",{children:"Enable Firestore Database"}),i.jsxs("li",{children:["Copy your config to ",i.jsx("code",{children:"src/config/firebase.js"})]}),i.jsxs("li",{children:["Or create a ",i.jsx("code",{children:".env"})," file with VITE_FIREBASE_* variables"]})]}),i.jsx("button",{className:"btn-primary",onClick:()=>e({id:"demo",name:"Demo User",classCode:"DEMO"}),children:"Continue in Demo Mode"})]})]})})},Ov=({classCode:e,assignments:t,onAssignmentCreated:n})=>{const[s,r]=R.useState(null),[a,l]=R.useState(null),u=N=>t.some(k=>k.type===N),h=async N=>{if(u(N)){alert(`${de[N].name} is already assigned to this class.`);return}r(N);try{const k=de[N].units.map(E=>E.id);await Dv(e,{type:N,items:k,title:de[N].name}),n&&n()}catch(k){console.error("Error creating assignment:",k),alert("Failed to create assignment. Please try again.")}finally{r(null)}},p=async N=>{if(confirm("Are you sure you want to remove this module assignment?")){l(N);try{await _v(e,N)}catch(k){console.error("Error deleting assignment:",k),alert("Failed to delete assignment.")}finally{l(null)}}},P=N=>N?new Date(N).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Unknown";return i.jsxs("div",{className:"assignment-manager",children:[i.jsxs("div",{className:"am-header",children:[i.jsx("h3",{children:"Module Assignments"}),i.jsx("p",{className:"am-subtitle",children:"Assign entire modules to give students access to all content within."})]}),i.jsxs("div",{className:"am-modules",children:[i.jsxs("div",{className:`am-module-card cyber ${u("cyber-range")?"assigned":""}`,children:[i.jsx("div",{className:"am-module-icon",children:de["cyber-range"].icon}),i.jsxs("div",{className:"am-module-info",children:[i.jsx("h4",{children:de["cyber-range"].name}),i.jsx("p",{children:de["cyber-range"].description}),i.jsxs("span",{className:"am-module-count",children:[de["cyber-range"].units.length," categories"]})]}),i.jsx("div",{className:"am-module-action",children:u("cyber-range")?i.jsxs("div",{className:"am-assigned-info",children:[i.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),i.jsx("button",{className:"am-remove-btn",onClick:()=>{const N=t.find(k=>k.type==="cyber-range");N&&p(N.id)},disabled:a,children:"Remove"})]}):i.jsx("button",{className:"am-btn cyber",onClick:()=>h("cyber-range"),disabled:s==="cyber-range",children:s==="cyber-range"?"Assigning...":"Assign Module"})})]}),i.jsxs("div",{className:`am-module-card programming ${u("arrays-loops")?"assigned":""}`,children:[i.jsx("div",{className:"am-module-icon",children:de["arrays-loops"].icon}),i.jsxs("div",{className:"am-module-info",children:[i.jsx("h4",{children:de["arrays-loops"].name}),i.jsx("p",{children:de["arrays-loops"].description}),i.jsxs("span",{className:"am-module-count",children:[de["arrays-loops"].units.length," weeks"]})]}),i.jsx("div",{className:"am-module-action",children:u("arrays-loops")?i.jsxs("div",{className:"am-assigned-info",children:[i.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),i.jsx("button",{className:"am-remove-btn",onClick:()=>{const N=t.find(k=>k.type==="arrays-loops");N&&p(N.id)},disabled:a,children:"Remove"})]}):i.jsx("button",{className:"am-btn programming",onClick:()=>h("arrays-loops"),disabled:s==="arrays-loops",children:s==="arrays-loops"?"Assigning...":"Assign Module"})})]}),i.jsxs("div",{className:`am-module-card apcsp ${u("ap-csp")?"assigned":""}`,children:[i.jsx("div",{className:"am-module-icon",children:de["ap-csp"].icon}),i.jsxs("div",{className:"am-module-info",children:[i.jsx("h4",{children:de["ap-csp"].name}),i.jsx("p",{children:de["ap-csp"].description}),i.jsxs("span",{className:"am-module-count",children:[de["ap-csp"].units.length," modules"]})]}),i.jsx("div",{className:"am-module-action",children:u("ap-csp")?i.jsxs("div",{className:"am-assigned-info",children:[i.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),i.jsx("button",{className:"am-remove-btn",onClick:()=>{const N=t.find(k=>k.type==="ap-csp");N&&p(N.id)},disabled:a,children:"Remove"})]}):i.jsx("button",{className:"am-btn apcsp",onClick:()=>h("ap-csp"),disabled:s==="ap-csp",children:s==="ap-csp"?"Assigning...":"Assign Module"})})]})]}),t.length>0&&i.jsxs("div",{className:"am-current",children:[i.jsx("h4",{children:"Current Assignments"}),t.map(N=>{var k,E,j;return i.jsxs("div",{className:"am-current-item",children:[i.jsxs("span",{className:"am-type-badge",style:{backgroundColor:((k=de[N.type])==null?void 0:k.color)||"#888"},children:[(E=de[N.type])==null?void 0:E.icon," ",(j=de[N.type])==null?void 0:j.name]}),i.jsxs("span",{className:"am-date",children:["Assigned: ",P(N.assignedAt)]})]},N.id)})]})]})},Mv=({classCode:e})=>{const[t,n]=R.useState(null),[s,r]=R.useState(null),[a,l]=R.useState(null),[u,h]=R.useState("list"),p=(j,I)=>{if(j==="cyber-range")return ws[I]||[];if(j==="arrays-loops"){const L=wc[I];if(!L||!L.days)return[];const m=[];return L.days.forEach(w=>{w.exercises&&w.exercises.forEach(b=>{m.push({...b,dayTitle:w.title,dayNumber:w.day})})}),m}else if(j==="ap-csp")return[];return[]},P=j=>{n(j),r(null),l(null),h("list")},N=j=>{r(j),l(null),h("list")},k=()=>{a?l(null):s?(r(null),h("list")):t&&n(null)},E=()=>{window.print()};if(!t)return i.jsxs("div",{className:"activity-manager",children:[i.jsxs("div",{className:"am-header",children:[i.jsx("h3",{children:"Activity Manager & Answer Keys"}),i.jsx("p",{className:"am-subtitle",children:"View activities, exemplar responses, and answer keys for each module"})]}),i.jsx("div",{className:"am-modules",children:Object.entries(de).map(([j,I])=>i.jsxs("div",{className:`am-module-card ${j}`,onClick:()=>P(j),style:{cursor:"pointer"},children:[i.jsx("div",{className:"am-module-icon",children:I.icon}),i.jsxs("div",{className:"am-module-info",children:[i.jsx("h4",{children:I.name}),i.jsx("p",{children:I.description}),i.jsxs("span",{className:"am-module-count",children:[I.units.length," ",j==="arrays-loops"?"weeks":"units"]})]}),i.jsx("div",{className:"am-module-arrow",children:"→"})]},j))})]});if(t&&!s){const j=de[t];return i.jsxs("div",{className:"activity-manager",children:[i.jsxs("div",{className:"am-header",children:[i.jsx("button",{className:"am-back-btn",onClick:k,children:"← Back"}),i.jsxs("h3",{children:[j.icon," ",j.name]}),i.jsx("p",{className:"am-subtitle",children:"Select a unit to view activities and answer keys"})]}),i.jsx("div",{className:"am-units-list",children:j.units.map(I=>{const L=p(t,I.id);return i.jsxs("div",{className:"am-unit-card",onClick:()=>N(I.id),style:{cursor:"pointer"},children:[i.jsxs("div",{className:"am-unit-info",children:[i.jsx("h4",{children:I.name}),i.jsx("p",{children:I.description})]}),i.jsxs("div",{className:"am-unit-stats",children:[i.jsxs("span",{className:"am-activity-count",children:[L.length," activities"]}),i.jsx("span",{className:"am-arrow",children:"→"})]})]},I.id)})})]})}if(t&&s&&!a){const I=de[t].units.find(m=>m.id===s),L=p(t,s);return i.jsxs("div",{className:"activity-manager",children:[i.jsxs("div",{className:"am-header",children:[i.jsx("button",{className:"am-back-btn",onClick:k,children:"← Back"}),i.jsx("h3",{children:(I==null?void 0:I.name)||s}),i.jsxs("p",{className:"am-subtitle",children:[L.length," activities"]})]}),i.jsxs("div",{className:"am-view-toggle",children:[i.jsx("button",{className:`am-toggle-btn ${u==="list"?"active":""}`,onClick:()=>h("list"),children:"Activity List"}),i.jsx("button",{className:`am-toggle-btn ${u==="answerKey"?"active":""}`,onClick:()=>h("answerKey"),children:"📋 Answer Key"}),u==="answerKey"&&i.jsx("button",{className:"am-print-btn",onClick:E,children:"🖨️ Print"})]}),u==="list"?i.jsx("div",{className:"am-activities-list",children:L.length===0?i.jsxs("div",{className:"am-empty",children:[i.jsx("p",{children:"No activities found for this unit."}),i.jsx("p",{className:"am-empty-hint",children:"Activities for AP CSP modules are managed in the pseudocode and flowchart data files."})]}):L.map((m,w)=>i.jsxs("div",{className:"am-activity-card",children:[i.jsxs("div",{className:"am-activity-header",children:[i.jsxs("span",{className:"am-activity-number",children:["#",w+1]}),i.jsx("h4",{children:m.title||m.name||`Activity ${w+1}`}),m.difficulty&&i.jsx("span",{className:`am-difficulty ${m.difficulty.toLowerCase()}`,children:m.difficulty})]}),i.jsxs("div",{className:"am-activity-body",children:[m.description&&i.jsx("p",{className:"am-activity-desc",children:m.description}),m.dayTitle&&i.jsxs("p",{className:"am-activity-day",children:["Day ",m.dayNumber,": ",m.dayTitle]}),i.jsx("div",{className:"am-activity-meta",children:m.points&&i.jsxs("span",{className:"am-points",children:[m.points," pts"]})})]}),i.jsx("div",{className:"am-activity-actions",children:i.jsx("button",{className:"am-view-btn",onClick:()=>l(m),children:"View Details & Answer"})})]},m.id||w))}):i.jsxs("div",{className:"am-answer-key",children:[i.jsxs("div",{className:"am-answer-key-header",children:[i.jsxs("h2",{children:["📋 Answer Key: ",I==null?void 0:I.name]}),i.jsx("p",{children:"Exemplar responses and solutions for all activities"})]}),L.map((m,w)=>i.jsxs("div",{className:"am-answer-item",children:[i.jsxs("div",{className:"am-answer-question",children:[i.jsxs("span",{className:"am-answer-num",children:["#",w+1]}),i.jsxs("div",{className:"am-answer-title",children:[i.jsx("strong",{children:m.title||m.name}),i.jsxs("span",{className:"am-answer-points",children:[m.points," pts"]})]})]}),m.prompt&&i.jsxs("div",{className:"am-answer-prompt",children:[i.jsx("label",{children:"Challenge/Prompt:"}),i.jsx("pre",{children:m.prompt})]}),i.jsxs("div",{className:"am-answer-response",children:[m.flag&&i.jsxs("div",{className:"am-answer-box flag",children:[i.jsx("label",{children:"🚩 Flag:"}),i.jsx("code",{children:m.flag})]}),m.answer&&i.jsxs("div",{className:"am-answer-box answer",children:[i.jsx("label",{children:"✓ Answer:"}),i.jsx("code",{children:typeof m.answer=="object"?JSON.stringify(m.answer):m.answer})]}),m.explanation&&i.jsxs("div",{className:"am-answer-box explanation",children:[i.jsx("label",{children:"📝 Explanation:"}),i.jsx("p",{children:m.explanation})]}),m.solutionCode&&i.jsxs("div",{className:"am-answer-box solution",children:[i.jsx("label",{children:"💻 Exemplar Code Solution:"}),i.jsx("pre",{className:"am-code-block",children:m.solutionCode})]}),m.rubric&&i.jsxs("div",{className:"am-answer-box rubric",children:[i.jsx("label",{children:"📊 Grading Rubric:"}),i.jsx("ul",{className:"am-rubric-list",children:Object.entries(m.rubric).map(([b,D])=>i.jsxs("li",{children:[i.jsxs("strong",{children:[b,":"]})," ",D]},b))})]}),m.hints&&m.hints.length>0&&i.jsxs("div",{className:"am-answer-box hints",children:[i.jsx("label",{children:"💡 Hints (for scaffolding):"}),i.jsx("ol",{children:m.hints.map((b,D)=>i.jsx("li",{children:b},D))})]}),m.learningObjective&&i.jsxs("div",{className:"am-answer-box objective",children:[i.jsx("label",{children:"🎯 Learning Objective:"}),i.jsx("p",{children:m.learningObjective})]})]})]},m.id||w))]})]})}return a?i.jsxs("div",{className:"activity-manager",children:[i.jsxs("div",{className:"am-header",children:[i.jsx("button",{className:"am-back-btn",onClick:k,children:"← Back to List"}),i.jsx("h3",{children:a.title||a.name}),i.jsx("button",{className:"am-print-btn",onClick:E,children:"🖨️ Print"})]}),i.jsxs("div",{className:"am-activity-detail",children:[i.jsxs("div",{className:"am-detail-section",children:[i.jsx("h4",{children:"📋 Activity Overview"}),i.jsxs("div",{className:"am-detail-row",children:[i.jsx("label",{children:"Title:"}),i.jsx("span",{children:a.title||a.name})]}),a.difficulty&&i.jsxs("div",{className:"am-detail-row",children:[i.jsx("label",{children:"Difficulty:"}),i.jsx("span",{className:`am-difficulty ${a.difficulty.toLowerCase()}`,children:a.difficulty})]}),a.points&&i.jsxs("div",{className:"am-detail-row",children:[i.jsx("label",{children:"Points:"}),i.jsx("span",{children:a.points})]}),a.dayTitle&&i.jsxs("div",{className:"am-detail-row",children:[i.jsx("label",{children:"Day:"}),i.jsxs("span",{children:["Day ",a.dayNumber,": ",a.dayTitle]})]})]}),a.description&&i.jsxs("div",{className:"am-detail-section",children:[i.jsx("h4",{children:"📖 Description"}),i.jsx("p",{children:a.description})]}),a.learningObjective&&i.jsxs("div",{className:"am-detail-section objective",children:[i.jsx("h4",{children:"🎯 Learning Objective"}),i.jsx("p",{children:a.learningObjective})]}),a.prompt&&i.jsxs("div",{className:"am-detail-section",children:[i.jsx("h4",{children:"❓ Challenge/Prompt"}),i.jsx("pre",{className:"am-prompt-block",children:a.prompt})]}),i.jsxs("div",{className:"am-teacher-section",children:[i.jsx("h4",{children:"🔑 TEACHER ANSWER KEY"}),a.flag&&i.jsxs("div",{className:"am-answer-box flag",children:[i.jsx("label",{children:"🚩 Flag:"}),i.jsx("code",{className:"am-flag",children:a.flag})]}),a.answer&&i.jsxs("div",{className:"am-answer-box answer",children:[i.jsx("label",{children:"✓ Correct Answer:"}),i.jsx("code",{className:"am-answer",children:typeof a.answer=="object"?JSON.stringify(a.answer,null,2):a.answer})]}),a.solutionCode&&i.jsxs("div",{className:"am-answer-box solution",children:[i.jsx("label",{children:"💻 Exemplar Code Solution:"}),i.jsx("pre",{className:"am-code-block",children:a.solutionCode})]}),a.explanation&&i.jsxs("div",{className:"am-answer-box explanation",children:[i.jsx("label",{children:"📝 Explanation for Students:"}),i.jsx("p",{children:a.explanation})]})]}),a.hints&&a.hints.length>0&&i.jsxs("div",{className:"am-detail-section",children:[i.jsx("h4",{children:"💡 Hints (for scaffolding)"}),i.jsx("ol",{className:"am-hints-list",children:a.hints.map((j,I)=>i.jsx("li",{children:j},I))})]}),a.rubric&&i.jsxs("div",{className:"am-detail-section rubric",children:[i.jsx("h4",{children:"📊 Grading Rubric"}),i.jsxs("table",{className:"am-rubric-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Criterion"}),i.jsx("th",{children:"Description"})]})}),i.jsx("tbody",{children:Object.entries(a.rubric).map(([j,I])=>i.jsxs("tr",{children:[i.jsx("td",{children:i.jsx("strong",{children:j})}),i.jsx("td",{children:I})]},j))})]})]}),a.vocabularyTerms&&a.vocabularyTerms.length>0&&i.jsxs("div",{className:"am-detail-section",children:[i.jsx("h4",{children:"📚 Related Vocabulary"}),i.jsx("div",{className:"am-vocab-tags",children:a.vocabularyTerms.map((j,I)=>i.jsx("span",{className:"am-vocab-tag",children:j},I))})]})]})]}):null},Fv=({classCode:e,onBack:t})=>{var F,S,f,v;const[n,s]=R.useState([]),[r,a]=R.useState(null),[l,u]=R.useState([]),[h,p]=R.useState(!0),[P,N]=R.useState(null),[k,E]=R.useState("points"),[j,I]=R.useState("students"),L=Object.values(ws).flat().length,m=jt.length;R.useEffect(()=>{(async()=>{const x=await Av();a(x)})();const C=Iv(e,x=>{s(x),p(!1)}),T=Rv(e,x=>{u(x)});return()=>{C(),T()}},[e]);const w=[...n].sort((y,C)=>{var T,x;switch(k){case"points":return C.totalPoints-y.totalPoints;case"name":return y.name.localeCompare(C.name);case"activity":const G=((T=y.lastActivity)==null?void 0:T.getTime())||0;return(((x=C.lastActivity)==null?void 0:x.getTime())||0)-G;default:return 0}}),b=y=>{if(!y)return{status:"never",label:"Never active",color:"#666"};const T=new Date-y,x=Math.floor(T/6e4);if(x<5)return{status:"active",label:"Active now",color:"#4caf50"};if(x<30)return{status:"recent",label:`${x}m ago`,color:"#ff9800"};if(x<60)return{status:"idle",label:`${x}m ago`,color:"#f44336"};const G=Math.floor(x/60);return G<24?{status:"idle",label:`${G}h ago`,color:"#f44336"}:{status:"inactive",label:`${Math.floor(G/24)}d ago`,color:"#666"}},D=(y,C)=>C>0?Math.round(y/C*100):0,M={totalStudents:n.length,activeStudents:n.filter(y=>{const C=b(y.lastActivity);return C.status==="active"||C.status==="recent"}).length,avgPoints:n.length>0?Math.round(n.reduce((y,C)=>y+C.totalPoints,0)/n.length):0,avgChallenges:n.length>0?Math.round(n.reduce((y,C)=>{var T;return y+(((T=C.completedChallenges)==null?void 0:T.length)||0)},0)/n.length):0};return h?i.jsx("div",{className:"teacher-dashboard",children:i.jsxs("div",{className:"loading-screen",children:[i.jsx("div",{className:"loading-spinner"}),i.jsx("p",{children:"Loading class data..."})]})}):i.jsxs("div",{className:"teacher-dashboard",children:[i.jsxs("header",{className:"td-header",children:[i.jsx("button",{className:"back-btn",onClick:t,children:"← Exit Dashboard"}),i.jsxs("div",{className:"td-title",children:[i.jsx("h1",{children:(r==null?void 0:r.name)||"Class Dashboard"}),i.jsxs("div",{className:"class-code-badge",children:["Class Code: ",i.jsx("strong",{children:e})]})]})]}),i.jsxs("div",{className:"td-stats",children:[i.jsxs("div",{className:"td-stat-card",children:[i.jsx("span",{className:"td-stat-value",children:M.totalStudents}),i.jsx("span",{className:"td-stat-label",children:"Total Students"})]}),i.jsxs("div",{className:"td-stat-card active",children:[i.jsx("span",{className:"td-stat-value",children:M.activeStudents}),i.jsx("span",{className:"td-stat-label",children:"Currently Active"})]}),i.jsxs("div",{className:"td-stat-card",children:[i.jsx("span",{className:"td-stat-value",children:M.avgPoints}),i.jsx("span",{className:"td-stat-label",children:"Avg Points"})]}),i.jsxs("div",{className:"td-stat-card",children:[i.jsx("span",{className:"td-stat-value",children:M.avgChallenges}),i.jsx("span",{className:"td-stat-label",children:"Avg Challenges Done"})]})]}),i.jsxs("div",{className:"td-tabs",children:[i.jsx("button",{className:`td-tab ${j==="students"?"active":""}`,onClick:()=>I("students"),children:"Students"}),i.jsx("button",{className:`td-tab ${j==="assignments"?"active":""}`,onClick:()=>I("assignments"),children:"Module Assignments"}),i.jsx("button",{className:`td-tab ${j==="activities"?"active":""}`,onClick:()=>I("activities"),children:"View Activities"})]}),j==="assignments"&&i.jsx(Ov,{classCode:e,assignments:l}),j==="activities"&&i.jsx(Mv,{classCode:e}),j==="students"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"td-controls",children:[i.jsxs("div",{className:"sort-controls",children:[i.jsx("label",{children:"Sort by:"}),i.jsxs("select",{value:k,onChange:y=>E(y.target.value),children:[i.jsx("option",{value:"points",children:"Points (High to Low)"}),i.jsx("option",{value:"name",children:"Name (A-Z)"}),i.jsx("option",{value:"activity",children:"Recent Activity"})]})]}),i.jsx("button",{className:"btn-refresh",onClick:()=>window.location.reload(),children:"Refresh"})]}),i.jsxs("div",{className:"td-content",children:[i.jsxs("div",{className:"student-list-panel",children:[i.jsxs("h2",{children:["Students (",n.length,")"]}),n.length===0?i.jsxs("div",{className:"no-students",children:[i.jsx("p",{children:"No students have joined yet."}),i.jsxs("p",{children:["Share the class code: ",i.jsx("strong",{children:e})]})]}):i.jsx("div",{className:"student-list",children:w.map((y,C)=>{var x,G,K,pe;const T=b(y.lastActivity);return D(((x=y.completedChallenges)==null?void 0:x.length)||0,L),D(((G=y.completedScenarios)==null?void 0:G.length)||0,m),i.jsxs("div",{className:`student-card ${(P==null?void 0:P.id)===y.id?"selected":""}`,onClick:()=>N(y),children:[i.jsxs("div",{className:"student-rank",children:["#",C+1]}),i.jsxs("div",{className:"student-info",children:[i.jsx("div",{className:"student-name",children:y.name}),i.jsxs("div",{className:"student-activity",style:{color:T.color},children:[i.jsx("span",{className:`activity-dot ${T.status}`}),T.label]})]}),i.jsxs("div",{className:"student-progress",children:[i.jsxs("div",{className:"progress-item",children:[i.jsx("span",{className:"progress-value",children:y.totalPoints}),i.jsx("span",{className:"progress-label",children:"pts"})]}),i.jsxs("div",{className:"progress-item",children:[i.jsx("span",{className:"progress-value",children:((K=y.completedChallenges)==null?void 0:K.length)||0}),i.jsx("span",{className:"progress-label",children:"challenges"})]}),i.jsxs("div",{className:"progress-item",children:[i.jsx("span",{className:"progress-value",children:((pe=y.completedScenarios)==null?void 0:pe.length)||0}),i.jsx("span",{className:"progress-label",children:"scenarios"})]})]})]},y.id)})})]}),i.jsx("div",{className:"student-detail-panel",children:P?i.jsxs(i.Fragment,{children:[i.jsx("h2",{children:P.name}),i.jsxs("div",{className:"detail-section",children:[i.jsx("h3",{children:"Overall Progress"}),i.jsx("div",{className:"detail-stats",children:i.jsxs("div",{className:"detail-stat",children:[i.jsx("span",{className:"detail-stat-value",children:P.totalPoints}),i.jsx("span",{className:"detail-stat-label",children:"Total Points"})]})})]}),i.jsxs("div",{className:"detail-section",children:[i.jsxs("h3",{children:["Challenges (",((F=P.completedChallenges)==null?void 0:F.length)||0,"/",L,")"]}),i.jsx("div",{className:"progress-bar-container",children:i.jsx("div",{className:"progress-bar-fill",style:{width:`${D(((S=P.completedChallenges)==null?void 0:S.length)||0,L)}%`}})}),i.jsx("div",{className:"completed-list",children:Object.entries(ws).map(([y,C])=>{const T=C.filter(x=>{var G;return(G=P.completedChallenges)==null?void 0:G.includes(x.id)});return T.length===0?null:i.jsxs("div",{className:"category-progress",children:[i.jsx("h4",{children:y}),i.jsx("ul",{children:T.map(x=>i.jsxs("li",{children:[x.title," (+",x.points,"pts)"]},x.id))})]},y)})})]}),i.jsxs("div",{className:"detail-section",children:[i.jsxs("h3",{children:["Network Monitor (",((f=P.completedScenarios)==null?void 0:f.length)||0,"/",m,")"]}),i.jsx("div",{className:"progress-bar-container",children:i.jsx("div",{className:"progress-bar-fill scenario",style:{width:`${D(((v=P.completedScenarios)==null?void 0:v.length)||0,m)}%`}})}),i.jsx("div",{className:"completed-list",children:i.jsx("ul",{children:jt.filter(y=>{var C;return(C=P.completedScenarios)==null?void 0:C.includes(y.id)}).map(y=>i.jsxs("li",{children:[y.name," (+",y.points,"pts)"]},y.id))})})]})]}):i.jsx("div",{className:"no-selection",children:i.jsx("p",{children:"Select a student to view details"})})})]})]})]})},xf={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
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
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function Uv(e){for(const t of Object.values(xf))for(const n of t.days)for(const s of n.exercises)if(s.id===e)return s;return null}const Hv={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},Bv={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]};function zv({weekKey:e,onSelectExercise:t,onBack:n,completedExercises:s}){const r=xf[e],a=e.replace("week",""),l=Bv[e]||[],u=h=>`difficulty difficulty-${h.toLowerCase()}`;return i.jsxs("div",{className:"week-view",children:[i.jsx("button",{className:"back-button",onClick:n,children:"← Back to Dashboard"}),i.jsxs("div",{className:"week-header-large",children:[i.jsxs("h1",{children:["Week ",a,": ",r.title]}),i.jsx("p",{className:"big-idea",children:r.bigIdea})]}),i.jsxs("div",{className:"learning-objectives",children:[i.jsx("h3",{children:"Learning Objectives"}),i.jsx("ul",{children:l.map((h,p)=>i.jsx("li",{children:h},p))})]}),i.jsx("div",{className:"days-list",children:r.days.map(h=>i.jsxs("div",{className:"day-section",children:[i.jsxs("div",{className:"day-header",children:[i.jsxs("h2",{children:["Day ",h.day,": ",h.title]}),i.jsx("p",{className:"day-objective",children:h.objective})]}),i.jsx("div",{className:"exercises-grid",children:h.exercises.map(p=>{const P=s.includes(p.id);return i.jsxs("div",{className:`exercise-card ${P?"completed":""} ${p.isProject?"project-card":""}`,onClick:()=>t(p.id),children:[i.jsxs("div",{className:"exercise-header",children:[i.jsx("span",{className:u(p.difficulty),children:p.difficulty}),i.jsxs("span",{className:"points",children:[p.points," pts"]})]}),i.jsxs("h3",{className:"exercise-title",children:[p.isProject&&"🎮 ",p.isCapstone&&"🏆 ",p.title]}),i.jsx("p",{className:"exercise-description",children:p.description}),P&&i.jsx("div",{className:"completed-badge",children:"✓ Completed"})]},p.id)})}),h.exitTicket&&i.jsxs("div",{className:"exit-ticket",children:[i.jsx("strong",{children:"Exit Ticket:"})," ",h.exitTicket]})]},h.day))})]})}const Ca=()=>new Promise((e,t)=>{if(window.p5&&typeof window.p5=="function"){e(window.p5);return}const n=document.querySelector('script[src*="p5.min.js"]');if(n){n.addEventListener("load",()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))}),n.addEventListener("error",()=>t(new Error("Failed to load p5.js")));return}const s=document.createElement("script");s.src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js",s.async=!0,s.onload=()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))},s.onerror=()=>t(new Error("Failed to load p5.js")),document.head.appendChild(s)});function Wv({exerciseId:e,onBack:t,onComplete:n,isCompleted:s}){const r=Uv(e),[a,l]=R.useState((r==null?void 0:r.starterCode)||""),[u,h]=R.useState([]),[p,P]=R.useState(!1),[N,k]=R.useState(!1),[E,j]=R.useState(null),[I,L]=R.useState(!1),[m,w]=R.useState(null),b=R.useRef(null),D=R.useRef(null);if(R.useEffect(()=>{Ca().then(()=>{L(!0),w(null)}).catch(T=>{console.error("Failed to load p5.js:",T),w(T.message)})},[]),R.useEffect(()=>{r&&(l(r.starterCode),h([]),P(!1))},[e]),R.useEffect(()=>()=>{D.current&&(D.current.remove(),D.current=null)},[]),!r)return i.jsxs("div",{className:"exercise-detail",children:[i.jsx("button",{className:"back-button",onClick:t,children:"← Back"}),i.jsx("p",{children:"Exercise not found"})]});const M=async()=>{D.current&&(D.current.remove(),D.current=null),b.current&&(b.current.innerHTML=""),k(!0);try{(!window.p5||typeof window.p5!="function")&&(b.current&&(b.current.innerHTML='<div class="canvas-placeholder">Loading p5.js...</div>'),await Ca());const T=["setup","draw","preload","mousePressed","mouseReleased","mouseClicked","mouseMoved","mouseDragged","mouseWheel","doubleClicked","keyPressed","keyReleased","keyTyped","touchStarted","touchMoved","touchEnded","windowResized"];let x=a;T.forEach(K=>{const pe=new RegExp(`function\\s+${K}\\s*\\(`,"g");x=x.replace(pe,`p.${K} = function(`)});const G=K=>{new Function("p",`
          with (p) {
            ${x}
          }
        `)(K)};D.current=new window.p5(G,b.current)}catch(T){console.error("Code error:",T),b.current&&(b.current.innerHTML=`<div class="error-message">Error: ${T.message}</div>`)}},F=()=>{D.current&&(D.current.remove(),D.current=null),k(!1),b.current&&(b.current.innerHTML='<div class="canvas-placeholder">Click "Run Code" to see your sketch</div>')},S=()=>{l(r.starterCode),F()},f=T=>{u.includes(T)||h([...u,T])},v=()=>{P(!0),l(r.solutionCode)},y=()=>{s||n(r.id,r.points)},C=T=>`difficulty difficulty-${T.toLowerCase()}`;return i.jsxs("div",{className:"exercise-detail",children:[i.jsx("button",{className:"back-button",onClick:t,children:"← Back to Week"}),i.jsxs("div",{className:"exercise-header-detail",children:[i.jsxs("div",{className:"exercise-meta",children:[i.jsx("span",{className:C(r.difficulty),children:r.difficulty}),i.jsxs("span",{className:"points",children:[r.points," pts"]}),r.isProject&&i.jsx("span",{className:"project-badge",children:"Mini-Project"}),r.isCapstone&&i.jsx("span",{className:"capstone-badge",children:"Capstone"})]}),i.jsx("h1",{children:r.title}),i.jsx("p",{className:"exercise-description-large",children:r.description})]}),r.vocabularyTerms&&r.vocabularyTerms.length>0&&i.jsxs("div",{className:"vocab-tags",children:[i.jsx("span",{className:"vocab-label",children:"Key Terms:"}),r.vocabularyTerms.map(T=>{const x=Hv[T];return x?i.jsx("button",{className:"vocab-tag",onClick:()=>j(x),children:x.term},T):null})]}),E&&i.jsx("div",{className:"vocab-popup",onClick:()=>j(null),children:i.jsxs("div",{className:"vocab-popup-content",onClick:T=>T.stopPropagation(),children:[i.jsx("h3",{children:E.term}),i.jsx("p",{children:E.definition}),E.example&&i.jsx("code",{className:"vocab-example",children:E.example}),i.jsx("button",{onClick:()=>j(null),children:"Close"})]})}),i.jsxs("div",{className:"prompt-box",children:[i.jsx("h3",{children:"Challenge"}),i.jsx("pre",{children:r.prompt})]}),i.jsxs("div",{className:"editor-container",children:[i.jsxs("div",{className:"code-section",children:[i.jsxs("div",{className:"code-header",children:[i.jsx("h3",{children:"Your Code"}),i.jsxs("div",{className:"code-actions",children:[i.jsx("button",{onClick:M,className:"run-btn",children:"▶ Run"}),i.jsx("button",{onClick:F,className:"stop-btn",children:"⬛ Stop"}),i.jsx("button",{onClick:S,className:"reset-btn",children:"↺ Reset"})]})]}),i.jsx("textarea",{className:"code-editor",value:a,onChange:T=>l(T.target.value),spellCheck:!1})]}),i.jsxs("div",{className:"canvas-section",children:[i.jsx("h3",{children:"Output"}),i.jsx("div",{ref:b,className:"canvas-container",children:m?i.jsxs("div",{className:"error-message",children:["Failed to load p5.js: ",m,i.jsx("button",{onClick:()=>{w(null),Ca().then(()=>L(!0)).catch(T=>w(T.message))},style:{marginTop:"10px",display:"block"},children:"Retry"})]}):I?i.jsx("div",{className:"canvas-placeholder",children:'Click "Run Code" to see your sketch'}):i.jsx("div",{className:"canvas-placeholder",children:"Loading p5.js..."})})]})]}),i.jsxs("div",{className:"hints-section",children:[i.jsx("h3",{children:"Hints"}),i.jsx("div",{className:"hints-list",children:r.hints.map((T,x)=>i.jsx("div",{className:"hint-item",children:u.includes(x)?i.jsxs("div",{className:"hint-revealed",children:[i.jsxs("span",{className:"hint-number",children:["Hint ",x+1,":"]})," ",T]}):i.jsxs("button",{className:"hint-button",onClick:()=>f(x),children:["Reveal Hint ",x+1]})},x))})]}),i.jsx("div",{className:"solution-section",children:p?i.jsxs("div",{className:"solution-revealed",children:[i.jsx("h3",{children:"Solution"}),i.jsx("pre",{className:"solution-code",children:r.solutionCode})]}):i.jsx("button",{className:"solution-button",onClick:v,children:"Show Solution (try on your own first!)"})}),r.rubric&&i.jsxs("div",{className:"rubric-section",children:[i.jsx("h3",{children:"Rubric"}),i.jsx("ul",{className:"rubric-list",children:Object.entries(r.rubric).map(([T,x])=>i.jsxs("li",{children:[i.jsxs("strong",{children:[T,":"]})," ",x]},T))})]}),i.jsx("div",{className:"complete-section",children:s?i.jsxs("div",{className:"already-completed",children:["✓ You've completed this exercise! (",r.points," points earned)"]}):i.jsxs("button",{className:"complete-button",onClick:y,children:["Mark as Complete (+",r.points," points)"]})})]})}function Vv({completedExercises:e=[],onSelectTopic:t,onSelectExercise:n,onBack:s}){const[r,a]=R.useState("all"),[l,u]=R.useState("all"),[h,p]=R.useState("learn"),P=new Set(e),N=R.useMemo(()=>{const m={};return us.forEach(w=>{m[w.id]=dn.filter(b=>b.topic===w.id)}),m},[]),k=[{id:"all",label:"All Types"},{id:"pseudocode-to-js",label:"Pseudocode → JS"},{id:"js-to-pseudocode",label:"JS → Pseudocode"},{id:"fill-blank",label:"Fill in Blank"},{id:"trace",label:"Code Tracing"},{id:"multiple-choice",label:"Multiple Choice"}],E=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],j=R.useMemo(()=>dn.filter(m=>!(r!=="all"&&m.difficulty!==r||l!=="all"&&m.type!==l)),[r,l]),I=m=>{const w=N[m]||[];return{completed:w.filter(D=>P.has(D.id)).length,total:w.length}},L={completed:P.size,total:dn.length};return i.jsxs("div",{className:"pseudocode-hub",children:[i.jsx("button",{className:"back-btn",onClick:s,children:"← Back to Dashboard"}),i.jsxs("div",{className:"hub-header",children:[i.jsx("div",{className:"hub-icon",children:"[ CODE ]"}),i.jsx("h1",{children:"AP CSP Pseudocode"}),i.jsx("p",{children:"Learn to translate between AP CSP pseudocode and JavaScript"})]}),i.jsxs("div",{className:"progress-bar-container",children:[i.jsxs("div",{className:"progress-label",children:["Overall Progress: ",L.completed," / ",L.total," exercises"]}),i.jsx("div",{className:"progress-bar",children:i.jsx("div",{className:"progress-fill apcsp",style:{width:`${L.completed/L.total*100}%`}})})]}),i.jsxs("div",{className:"hub-tabs",children:[i.jsx("button",{className:`hub-tab ${h==="learn"?"active":""}`,onClick:()=>p("learn"),children:"Learn Topics"}),i.jsx("button",{className:`hub-tab ${h==="practice"?"active":""}`,onClick:()=>p("practice"),children:"Practice Exercises"})]}),h==="learn"&&i.jsx("div",{className:"topics-grid",children:us.map(m=>{const w=I(m.id),b=w.total>0?w.completed/w.total*100:0;return i.jsxs("div",{className:"topic-card",onClick:()=>t(m.id),children:[i.jsx("h3",{children:m.title}),i.jsx("div",{className:"topic-code",children:i.jsx("code",{children:m.pseudocode})}),i.jsx("div",{className:"topic-arrow",children:"↓"}),i.jsx("div",{className:"topic-code js",children:i.jsx("code",{children:m.javascript})}),i.jsxs("p",{className:"topic-explanation",children:[m.explanation.substring(0,100),"..."]}),i.jsxs("div",{className:"topic-progress",children:[i.jsxs("span",{children:[w.completed,"/",w.total," exercises"]}),i.jsx("div",{className:"progress-bar small",children:i.jsx("div",{className:"progress-fill apcsp",style:{width:`${b}%`}})})]})]},m.id)})}),h==="practice"&&i.jsxs("div",{className:"practice-section",children:[i.jsxs("div",{className:"filter-bar",children:[i.jsxs("div",{className:"filter-group",children:[i.jsx("label",{children:"Difficulty:"}),i.jsx("select",{value:r,onChange:m=>a(m.target.value),children:E.map(m=>i.jsx("option",{value:m.id,children:m.label},m.id))})]}),i.jsxs("div",{className:"filter-group",children:[i.jsx("label",{children:"Type:"}),i.jsx("select",{value:l,onChange:m=>u(m.target.value),children:k.map(m=>i.jsx("option",{value:m.id,children:m.label},m.id))})]})]}),i.jsx("div",{className:"exercises-list",children:j.map(m=>{const w=P.has(m.id),b=us.find(D=>D.id===m.topic);return i.jsxs("div",{className:`exercise-card ${w?"completed":""}`,onClick:()=>n(m.id),children:[i.jsx("div",{className:"exercise-status",children:w?"✓":"○"}),i.jsxs("div",{className:"exercise-content",children:[i.jsx("h4",{children:(b==null?void 0:b.title)||"Unknown Topic"}),i.jsx("p",{className:"exercise-type",children:m.type.replace(/-/g," ")}),i.jsx("p",{className:"exercise-prompt",children:m.prompt})]}),i.jsx("div",{className:`difficulty-badge ${m.difficulty}`,children:m.difficulty})]},m.id)})})]})]})}function $v({topicId:e,onBack:t,onSelectExercise:n}){const[s,r]=R.useState(0),a=us.findIndex(h=>h.id===e),l=us[a],u=dn.filter(h=>h.topic===e).slice(0,5);return l?i.jsxs("div",{className:"topic-lesson",children:[i.jsx("button",{className:"back-btn",onClick:t,children:"← Back to Pseudocode Hub"}),i.jsxs("div",{className:"lesson-header",children:[i.jsx("h1",{children:l.title}),i.jsx("p",{children:l.explanation})]}),i.jsxs("div",{className:"comparison-box",children:[i.jsxs("div",{className:"comparison-side pseudocode",children:[i.jsx("h3",{children:"Pseudocode"}),i.jsx("div",{className:"code-panel",children:i.jsx("pre",{children:l.pseudocode})})]}),i.jsxs("div",{className:"comparison-side javascript",children:[i.jsx("h3",{children:"JavaScript"}),i.jsx("div",{className:"code-panel",children:i.jsx("pre",{children:l.javascript})})]})]}),l.examples&&l.examples.length>0&&i.jsxs("div",{className:"examples-list",children:[i.jsx("h3",{children:"Examples"}),l.examples.map((h,p)=>i.jsxs("div",{className:"example-item",children:[i.jsxs("div",{className:"code-panel",children:[i.jsx("div",{className:"code-panel-header given",children:"Pseudocode"}),i.jsx("pre",{children:h.pseudocode})]}),i.jsxs("div",{className:"code-panel",children:[i.jsx("div",{className:"code-panel-header answer",children:"JavaScript"}),i.jsx("pre",{children:h.javascript})]})]},p))]}),l.keyPoints&&l.keyPoints.length>0&&i.jsxs("div",{className:"key-points",children:[i.jsx("h3",{children:"Key Points"}),i.jsx("ul",{children:l.keyPoints.map((h,p)=>i.jsx("li",{children:h},p))})]}),u.length>0&&i.jsxs("div",{className:"related-exercises",children:[i.jsx("h3",{children:"Practice Exercises"}),i.jsx("div",{className:"exercises-list",children:u.map(h=>i.jsxs("div",{className:"exercise-card",onClick:()=>n(h.id),children:[i.jsxs("div",{className:"exercise-content",children:[i.jsx("h4",{children:h.type.replace(/-/g," ")}),i.jsx("p",{className:"exercise-prompt",children:h.prompt})]}),i.jsx("div",{className:`difficulty-badge ${h.difficulty}`,children:h.difficulty})]},h.id))})]})]}):i.jsxs("div",{className:"topic-lesson",children:[i.jsx("button",{className:"back-btn",onClick:t,children:"← Back"}),i.jsxs("div",{className:"error-message",children:[i.jsx("h1",{children:"Topic Not Found"}),i.jsx("p",{children:"This topic doesn't exist."})]})]})}function Gv({exerciseId:e,onComplete:t,onBack:n,isCompleted:s}){const r=dn.find(v=>v.id===e),a=r?us.find(v=>v.id===r.topic):null,[l,u]=R.useState(""),[h,p]=R.useState({}),[P,N]=R.useState(!1),[k,E]=R.useState(!1),[j,I]=R.useState(!1),[L,m]=R.useState(0);if(R.useMemo(()=>{if((r==null?void 0:r.type)!=="fill-blank"||!(r!=null&&r.template))return null;const v=[],y=/___(\w+)___/g;let C;for(;(C=y.exec(r.template))!==null;)v.push({id:C[1],position:C.index});return v},[r]),!r)return i.jsxs("div",{className:"translation-exercise",children:[i.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),i.jsxs("div",{className:"error-message",children:[i.jsx("h1",{children:"Exercise Not Found"}),i.jsx("p",{children:"This exercise doesn't exist."})]})]});const w=v=>v.replace(/<--/g,"←").replace(/<-/g,"←").replace(/←/g,"←").replace(/:=/g,"←").replace(/!=/g,"≠").replace(/<>/g,"≠").replace(/>=/g,"≥").replace(/<=/g,"≤").replace(/DISPLAY\s*\(\s*/gi,"DISPLAY(").replace(/DISPLAY\s+([^(\n]+)/gi,"DISPLAY($1)").replace(/\)\s*\)/g,")").replace(/INPUT\s*\(\s*\)/gi,"INPUT()").replace(/\s+/g," ").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/\s*,\s*/g,",").split(`
`).map(y=>y.trim()).filter(y=>y.length>0).join(`
`).trim().toLowerCase(),b=v=>v.replace(/\b(var|const)\b/g,"let").replace(/;+/g,";").replace(/\s+/g," ").replace(/\s*;\s*/g,";").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/;$/gm,"").split(`
`).map(y=>y.trim()).filter(y=>y.length>0).join(`
`).trim().toLowerCase(),D=(v,y,C)=>{const T=C?w:b,x=T(v),G=T(y);if(x===G)return!0;const K=x.replace(/\n/g," ").replace(/\s+/g," "),pe=G.replace(/\n/g," ").replace(/\s+/g," ");if(K===pe)return!0;const ve=H=>H.replace(/[;\s]/g,"");return ve(x)===ve(G)},M=()=>{let v=!1;const y=r.type==="js-to-pseudocode";r.type==="fill-blank"?v=Object.entries(r.blankAnswers||{}).every(([C,T])=>{const x=(h[C]||"").trim().toLowerCase();return Array.isArray(T)?T.some(G=>G.toLowerCase()===x):T.toLowerCase()===x}):(v=D(l,r.answer,y),!v&&r.acceptableAnswers&&(v=r.acceptableAnswers.some(C=>D(l,C,y)))),E(v),N(!0),v&&!s&&t(r.id,10)},F=()=>{u(""),p({}),N(!1),E(!1),I(!1),m(0)},S=()=>{var v;L<(((v=r.hints)==null?void 0:v.length)||0)-1&&m(L+1)},f=()=>{if(!r.template)return null;const v=r.template.split(/(___\w+___)/g);return i.jsx("div",{className:"fill-blank-container",children:i.jsx("pre",{className:"fill-blank-code",children:v.map((y,C)=>{const T=y.match(/___(\w+)___/);if(T){const x=T[1];return i.jsx("input",{type:"text",className:`fill-blank-input ${P?k?"correct":"incorrect":""}`,value:h[x]||"",onChange:G=>p({...h,[x]:G.target.value}),placeholder:"...",disabled:P&&k},C)}return i.jsx("span",{children:y},C)})})})};return i.jsxs("div",{className:"translation-exercise",children:[i.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Pseudocode Hub"}),i.jsxs("div",{className:"exercise-header",children:[i.jsx("h1",{children:(a==null?void 0:a.title)||"Translation Exercise"}),i.jsxs("div",{className:"exercise-meta",children:[i.jsx("span",{className:`difficulty-badge ${r.difficulty}`,children:r.difficulty}),i.jsx("span",{className:"exercise-type-badge",children:r.type.replace(/-/g," ")}),s&&i.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),i.jsx("p",{className:"exercise-prompt-text",children:r.prompt}),r.type==="fill-blank"?f():i.jsxs("div",{className:"code-panels",children:[i.jsxs("div",{className:"code-panel",children:[i.jsx("div",{className:"code-panel-header given",children:r.type==="pseudocode-to-js"?"Pseudocode":"JavaScript"}),i.jsx("div",{className:"code-panel-content",children:i.jsx("pre",{children:r.given})})]}),i.jsxs("div",{className:"code-panel",children:[i.jsx("div",{className:"code-panel-header answer",children:r.type==="pseudocode-to-js"?"Your JavaScript":"Your Pseudocode"}),i.jsx("div",{className:"code-panel-content",children:i.jsx("textarea",{value:l,onChange:v=>u(v.target.value),placeholder:"Type your answer here...",disabled:P&&k})})]})]}),i.jsx("div",{className:"format-help",children:i.jsxs("details",{children:[i.jsx("summary",{children:"Accepted formats"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("code",{children:"←"})," or ",i.jsx("code",{children:"<--"})," or ",i.jsx("code",{children:"<-"})," for assignment"]}),i.jsxs("li",{children:[i.jsx("code",{children:"DISPLAY(x)"})," or ",i.jsx("code",{children:"DISPLAY x"})," for output"]}),i.jsxs("li",{children:[i.jsx("code",{children:"≠"})," or ",i.jsx("code",{children:"!="})," or ",i.jsx("code",{children:"<>"})," for not equal"]}),i.jsxs("li",{children:[i.jsx("code",{children:"≥"})," or ",i.jsx("code",{children:">="})," and ",i.jsx("code",{children:"≤"})," or ",i.jsx("code",{children:"<="})]}),i.jsx("li",{children:"Spacing and newlines are flexible"})]})]})}),i.jsx("div",{className:"exercise-actions",children:P?i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"action-btn",onClick:F,children:"Try Again"}),!k&&i.jsx("button",{className:"action-btn",onClick:()=>{r.type==="fill-blank"?p(r.blankAnswers||{}):u(r.answer)},children:"Show Solution"})]}):i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"action-btn",onClick:()=>I(!j),children:j?"Hide Hints":"Show Hints"}),i.jsx("button",{className:"action-btn primary",onClick:M,disabled:r.type==="fill-blank"?Object.keys(h).length===0:!l.trim(),children:"Check Answer"})]})}),j&&r.hints&&r.hints.length>0&&i.jsxs("div",{className:"hint-box",children:[i.jsx("h4",{children:"Hints"}),i.jsx("ul",{children:r.hints.slice(0,L+1).map((v,y)=>i.jsx("li",{children:v},y))}),L<r.hints.length-1&&i.jsx("button",{className:"action-btn",onClick:S,children:"Show Next Hint"})]}),P&&i.jsx("div",{className:`result-box ${k?"correct":"incorrect"}`,children:k?i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"✓ Correct!"}),i.jsx("p",{children:"Great job! You've mastered this translation."})]}):i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"✗ Not Quite"}),i.jsx("p",{children:"Check your answer and try again, or view the solution."})]})}),P&&!k&&i.jsxs("div",{className:"explanation-box",children:[i.jsx("h4",{children:"Explanation"}),i.jsx("p",{children:r.explanation})]})]})}const ba=[{id:"trace-1",title:"Simple Counter",code:`count ← 0
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
DISPLAY(sum)`,steps:[{line:1,action:"list ← [3, 7, 2]",variables:{list:[3,7,2],sum:void 0},output:""},{line:2,action:"sum ← 0",variables:{list:[3,7,2],sum:0},output:""},{line:3,action:"FOR EACH item IN list (item=3)",variables:{list:[3,7,2],sum:0,item:3},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:3,item:3},output:""},{line:3,action:"FOR EACH item IN list (item=7)",variables:{list:[3,7,2],sum:3,item:7},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:10,item:7},output:""},{line:3,action:"FOR EACH item IN list (item=2)",variables:{list:[3,7,2],sum:10,item:2},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:12,item:2},output:""},{line:7,action:"DISPLAY(sum)",variables:{list:[3,7,2],sum:12,item:2},output:"12"}]}];function Yv({onBack:e}){const[t,n]=R.useState(ba[0]),[s,r]=R.useState(0),[a,l]=R.useState(!1),u=t.steps[s],h=Object.keys((u==null?void 0:u.variables)||{}),p=()=>{s<t.steps.length-1&&r(s+1)},P=()=>{s>0&&r(s-1)},N=()=>{r(0),l(!1)};return i.jsxs("div",{className:"code-tracer",children:[i.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),i.jsxs("div",{className:"hub-header",children:[i.jsx("div",{className:"hub-icon",children:"[ TRACE ]"}),i.jsx("h1",{children:"Code Tracer"}),i.jsx("p",{children:"Step through pseudocode and track variable values"})]}),i.jsxs("div",{className:"tracer-example-select",children:[i.jsx("label",{children:"Select Example:"}),i.jsx("select",{value:t.id,onChange:k=>{const E=ba.find(j=>j.id===k.target.value);n(E),r(0)},children:ba.map(k=>i.jsx("option",{value:k.id,children:k.title},k.id))})]}),i.jsxs("div",{className:"tracer-layout",children:[i.jsxs("div",{className:"tracer-code-panel",children:[i.jsx("h3",{children:"Code"}),i.jsx("pre",{className:"tracer-code",children:t.code.split(`
`).map((k,E)=>i.jsxs("div",{className:`code-line ${(u==null?void 0:u.line)===E+1?"current":""}`,children:[i.jsx("span",{className:"line-number",children:E+1}),i.jsx("span",{className:"line-content",children:k})]},E))})]}),i.jsxs("div",{className:"tracer-state-panel",children:[i.jsx("h3",{children:"Variables"}),i.jsxs("table",{className:"trace-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Variable"}),i.jsx("th",{children:"Value"})]})}),i.jsx("tbody",{children:h.map(k=>i.jsxs("tr",{children:[i.jsx("td",{children:k}),i.jsx("td",{children:(u==null?void 0:u.variables[k])===void 0?"—":JSON.stringify(u==null?void 0:u.variables[k])})]},k))})]}),i.jsx("h3",{children:"Output"}),i.jsx("div",{className:"tracer-output",children:i.jsx("pre",{children:(u==null?void 0:u.output)||"(no output yet)"})})]})]}),i.jsxs("div",{className:"tracer-controls",children:[i.jsx("button",{className:"tracer-btn",onClick:N,children:"Reset"}),i.jsx("button",{className:"tracer-btn",onClick:P,disabled:s===0,children:"← Prev"}),i.jsxs("span",{className:"step-counter",children:["Step ",s+1," / ",t.steps.length]}),i.jsx("button",{className:"tracer-btn",onClick:p,disabled:s===t.steps.length-1,children:"Next →"})]}),i.jsxs("div",{className:"current-action",children:[i.jsx("strong",{children:"Current Action:"})," ",u==null?void 0:u.action]})]})}const Na=[{id:"robot-1",title:"Simple Path",description:"Move the robot to the goal (green square).",gridSize:5,start:{x:0,y:2,direction:"right"},goal:{x:4,y:2},obstacles:[],code:`REPEAT 4 TIMES
{
   MOVE_FORWARD()
}`,solution:["MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD"]},{id:"robot-2",title:"Turn and Move",description:"Navigate around to reach the goal.",gridSize:5,start:{x:0,y:0,direction:"right"},goal:{x:2,y:2},obstacles:[{x:1,y:0},{x:2,y:0}],code:`MOVE_FORWARD()
ROTATE_RIGHT()
MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()`,solution:["MOVE_FORWARD","ROTATE_RIGHT","MOVE_FORWARD","MOVE_FORWARD","ROTATE_LEFT","MOVE_FORWARD"]}];function Xv({onBack:e}){const[t,n]=R.useState(Na[0]),[s,r]=R.useState(t.start),[a,l]=R.useState(-1),[u,h]=R.useState(!1),p=()=>{r(t.start),l(-1),h(!1)},P=()=>{const E=t.solution;if(a>=E.length-1)return;const j=a+1,I=E[j];let L={...s};if(I==="MOVE_FORWARD")switch(s.direction){case"up":L.y=Math.max(0,s.y-1);break;case"down":L.y=Math.min(t.gridSize-1,s.y+1);break;case"left":L.x=Math.max(0,s.x-1);break;case"right":L.x=Math.min(t.gridSize-1,s.x+1);break}else if(I==="ROTATE_RIGHT"){const m=["up","right","down","left"],w=m.indexOf(s.direction);L.direction=m[(w+1)%4]}else if(I==="ROTATE_LEFT"){const m=["up","right","down","left"],w=m.indexOf(s.direction);L.direction=m[(w+3)%4]}r(L),l(j),L.x===t.goal.x&&L.y===t.goal.y&&h(!0)},N=()=>{p();let E=-1;const j=setInterval(()=>{if(E++,E>=t.solution.length){clearInterval(j);return}P()},500)},k=()=>{const E=[];for(let j=0;j<t.gridSize;j++)for(let I=0;I<t.gridSize;I++){const L=s.x===I&&s.y===j,m=t.goal.x===I&&t.goal.y===j,w=t.obstacles.some(D=>D.x===I&&D.y===j);let b="grid-cell";w&&(b+=" obstacle"),m&&(b+=" goal"),L&&(b+=" robot"),E.push(i.jsxs("div",{className:b,children:[L&&i.jsxs("span",{className:"robot-arrow",children:[s.direction==="up"&&"↑",s.direction==="down"&&"↓",s.direction==="left"&&"←",s.direction==="right"&&"→"]}),m&&!L&&"★"]},`${I}-${j}`))}return E};return i.jsxs("div",{className:"robot-grid-page",children:[i.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),i.jsxs("div",{className:"hub-header",children:[i.jsx("div",{className:"hub-icon",children:"[ ROBOT ]"}),i.jsx("h1",{children:"Robot Navigation"}),i.jsx("p",{children:"Practice AP CSP robot commands"})]}),i.jsxs("div",{className:"challenge-selector",children:[i.jsx("label",{children:"Challenge:"}),i.jsx("select",{value:t.id,onChange:E=>{const j=Na.find(I=>I.id===E.target.value);n(j),r(j.start),l(-1),h(!1)},children:Na.map(E=>i.jsx("option",{value:E.id,children:E.title},E.id))})]}),i.jsx("p",{className:"challenge-desc",children:t.description}),i.jsxs("div",{className:"robot-layout",children:[i.jsx("div",{className:"grid-container",children:i.jsx("div",{className:"robot-grid",style:{gridTemplateColumns:`repeat(${t.gridSize}, 1fr)`,gridTemplateRows:`repeat(${t.gridSize}, 1fr)`},children:k()})}),i.jsxs("div",{className:"code-panel",children:[i.jsx("h3",{children:"Pseudocode"}),i.jsx("pre",{children:t.code})]})]}),i.jsxs("div",{className:"robot-controls",children:[i.jsx("button",{className:"tracer-btn",onClick:p,children:"Reset"}),i.jsx("button",{className:"tracer-btn",onClick:P,disabled:u,children:"Step"}),i.jsx("button",{className:"tracer-btn primary",onClick:N,children:"Run All"})]}),u&&i.jsxs("div",{className:"result-box correct",children:[i.jsx("h3",{children:"✓ Goal Reached!"}),i.jsx("p",{children:"The robot successfully navigated to the goal."})]})]})}function Kv({completedExercises:e=[],onSelectExercise:t,onSelectBuilder:n,onSelectSymbols:s,onBack:r}){const[a,l]=R.useState("all"),[u,h]=R.useState("learn"),p=new Set(e),P=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],N=R.useMemo(()=>ds.filter(E=>!(a!=="all"&&E.difficulty!==a)),[a]),k={completed:p.size,total:ds.length};return i.jsxs("div",{className:"flowchart-hub",children:[i.jsx("button",{className:"back-btn",onClick:r,children:"← Back to Dashboard"}),i.jsxs("div",{className:"hub-header",children:[i.jsx("div",{className:"hub-icon",children:"[ FLOW ]"}),i.jsx("h1",{children:"Flowcharts"}),i.jsx("p",{children:"Learn to read, interpret, and create flowcharts"})]}),i.jsxs("div",{className:"progress-bar-container",children:[i.jsxs("div",{className:"progress-label",children:["Overall Progress: ",k.completed," / ",k.total," exercises"]}),i.jsx("div",{className:"progress-bar",children:i.jsx("div",{className:"progress-fill apcsp",style:{width:`${k.completed/k.total*100}%`}})})]}),i.jsxs("div",{className:"hub-tabs",children:[i.jsx("button",{className:`hub-tab ${u==="learn"?"active":""}`,onClick:()=>h("learn"),children:"Learn Symbols"}),i.jsx("button",{className:`hub-tab ${u==="practice"?"active":""}`,onClick:()=>h("practice"),children:"Practice"}),i.jsx("button",{className:`hub-tab ${u==="builder"?"active":""}`,onClick:()=>h("builder"),children:"Build"})]}),u==="learn"&&i.jsxs("div",{className:"symbols-section",children:[i.jsx("h2",{children:"Flowchart Symbols"}),i.jsx("p",{className:"section-intro",children:"Learn the standard flowchart symbols used in AP CSP."}),i.jsx("div",{className:"symbols-grid",children:wl.map(E=>i.jsxs("div",{className:"symbol-card",style:{borderColor:E.color},children:[i.jsxs("div",{className:"symbol-shape",style:{color:E.color},children:[E.id==="oval"&&"⬭",E.id==="rectangle"&&"▭",E.id==="diamond"&&"◇",E.id==="parallelogram"&&"▱",E.id==="arrow"&&"→"]}),i.jsx("h3",{children:E.name}),i.jsx("p",{className:"symbol-purpose",children:E.purpose}),i.jsx("p",{className:"symbol-desc",children:E.description})]},E.id))}),i.jsx("button",{className:"action-btn",onClick:s,children:"View Full Symbol Guide →"})]}),u==="practice"&&i.jsxs("div",{className:"practice-section",children:[i.jsx("div",{className:"filter-bar",children:i.jsxs("div",{className:"filter-group",children:[i.jsx("label",{children:"Difficulty:"}),i.jsx("select",{value:a,onChange:E=>l(E.target.value),children:P.map(E=>i.jsx("option",{value:E.id,children:E.label},E.id))})]})}),i.jsx("div",{className:"exercises-list",children:N.map(E=>{const j=p.has(E.id);return i.jsxs("div",{className:`exercise-card ${j?"completed":""}`,onClick:()=>t(E.id),children:[i.jsx("div",{className:"exercise-status",children:j?"✓":"○"}),i.jsxs("div",{className:"exercise-content",children:[i.jsx("h4",{children:E.title}),i.jsx("p",{className:"exercise-type",children:E.type}),i.jsx("p",{className:"exercise-prompt",children:E.question})]}),i.jsx("div",{className:`difficulty-badge ${E.difficulty}`,children:E.difficulty})]},E.id)})})]}),u==="builder"&&i.jsx("div",{className:"builder-section",children:i.jsxs("div",{className:"builder-intro",children:[i.jsx("h2",{children:"Flowchart Builder"}),i.jsx("p",{children:"Create your own flowcharts using drag-and-drop!"}),i.jsxs("ul",{children:[i.jsx("li",{children:"Drag symbols from the palette onto the canvas"}),i.jsx("li",{children:"Connect nodes with arrows to show flow"}),i.jsx("li",{children:"Edit text inside each shape"}),i.jsx("li",{children:"Export your flowchart as an image"})]}),i.jsx("button",{className:"action-btn primary",onClick:n,children:"Open Flowchart Builder →"})]})})]})}function Qv({onBack:e}){const[t,n]=R.useState(wl[0].id);return i.jsxs("div",{className:"symbol-lesson",children:[i.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),i.jsxs("div",{className:"hub-header",children:[i.jsx("div",{className:"hub-icon",children:"[ SHAPES ]"}),i.jsx("h1",{children:"Flowchart Symbols"}),i.jsx("p",{children:"Learn the standard flowchart symbols used in AP CSP"})]}),i.jsx("div",{className:"symbols-detail-list",children:wl.map(s=>i.jsxs("div",{className:`symbol-detail-card ${t===s.id?"expanded":""}`,onClick:()=>n(t===s.id?null:s.id),children:[i.jsxs("div",{className:"symbol-header",children:[i.jsxs("div",{className:"symbol-preview",style:{color:s.color},children:[s.id==="oval"&&"⬭",s.id==="rectangle"&&"▭",s.id==="diamond"&&"◇",s.id==="parallelogram"&&"▱",s.id==="arrow"&&"→"]}),i.jsxs("div",{className:"symbol-info",children:[i.jsx("h3",{style:{color:s.color},children:s.name}),i.jsx("p",{children:s.purpose})]}),i.jsx("span",{className:"expand-icon",children:t===s.id?"−":"+"})]}),t===s.id&&i.jsxs("div",{className:"symbol-details",children:[i.jsx("p",{className:"symbol-description",children:s.description}),i.jsxs("div",{className:"symbol-examples",children:[i.jsx("h4",{children:"Examples:"}),i.jsx("ul",{children:s.examples.map((r,a)=>i.jsx("li",{children:r},a))})]})]})]},s.id))}),i.jsxs("div",{className:"symbol-tips",children:[i.jsx("h3",{children:"Tips for Reading Flowcharts"}),i.jsxs("ul",{children:[i.jsxs("li",{children:["Always start at the ",i.jsx("strong",{children:"oval"}),' labeled "Start"']}),i.jsxs("li",{children:["Follow the ",i.jsx("strong",{children:"arrows"})," to determine the order of operations"]}),i.jsxs("li",{children:["At a ",i.jsx("strong",{children:"diamond"}),", evaluate the condition to choose which path to follow"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Rectangles"})," contain actions - execute them in order"]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Parallelograms"})," show input/output operations"]}),i.jsxs("li",{children:["End at the ",i.jsx("strong",{children:"oval"}),' labeled "End"']})]})]})]})}function qv({onBack:e}){var h;const[t,n]=R.useState([{id:"1",type:"oval",label:"Start",x:200,y:50},{id:"2",type:"rectangle",label:"Process",x:200,y:150},{id:"3",type:"oval",label:"End",x:200,y:250}]),[s,r]=R.useState(null),a=p=>{const P={oval:"Start/End",rectangle:"Process",diamond:"Decision?",parallelogram:"Input/Output"},N={id:Date.now().toString(),type:p,label:P[p],x:200+Math.random()*100,y:100+Math.random()*200};n([...t,N])},l=(p,P)=>{n(t.map(N=>N.id===p?{...N,label:P}:N))},u=p=>{n(t.filter(P=>P.id!==p)),r(null)};return i.jsxs("div",{className:"flowchart-builder-page",children:[i.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),i.jsxs("div",{className:"hub-header",children:[i.jsx("div",{className:"hub-icon",children:"[ BUILD ]"}),i.jsx("h1",{children:"Flowchart Builder"}),i.jsx("p",{children:"Create your own flowcharts"})]}),i.jsxs("div",{className:"builder-layout",children:[i.jsxs("div",{className:"symbol-palette",children:[i.jsx("h3",{children:"Symbols"}),i.jsxs("button",{className:"palette-btn",onClick:()=>a("oval"),children:[i.jsx("span",{className:"symbol-icon",children:"⬭"})," Oval"]}),i.jsxs("button",{className:"palette-btn",onClick:()=>a("rectangle"),children:[i.jsx("span",{className:"symbol-icon",children:"▭"})," Rectangle"]}),i.jsxs("button",{className:"palette-btn",onClick:()=>a("diamond"),children:[i.jsx("span",{className:"symbol-icon",children:"◇"})," Diamond"]}),i.jsxs("button",{className:"palette-btn",onClick:()=>a("parallelogram"),children:[i.jsx("span",{className:"symbol-icon",children:"▱"})," Parallelogram"]})]}),i.jsx("div",{className:"builder-canvas",children:i.jsx("div",{className:"canvas-area",children:t.map(p=>i.jsxs("div",{className:`builder-node ${p.type} ${s===p.id?"selected":""}`,style:{left:p.x,top:p.y},onClick:()=>r(p.id),children:[p.type==="oval"&&i.jsx("span",{className:"node-shape oval-shape",children:p.label}),p.type==="rectangle"&&i.jsx("span",{className:"node-shape rect-shape",children:p.label}),p.type==="diamond"&&i.jsx("span",{className:"node-shape diamond-shape",children:p.label}),p.type==="parallelogram"&&i.jsx("span",{className:"node-shape para-shape",children:p.label})]},p.id))})}),s&&i.jsxs("div",{className:"node-editor",children:[i.jsx("h3",{children:"Edit Node"}),i.jsx("input",{type:"text",value:((h=t.find(p=>p.id===s))==null?void 0:h.label)||"",onChange:p=>l(s,p.target.value),placeholder:"Enter label..."}),i.jsx("button",{className:"action-btn",onClick:()=>u(s),children:"Delete Node"})]})]}),i.jsx("div",{className:"builder-tips",children:i.jsx("p",{children:"Click a symbol to add it. Click a node to edit or delete it."})})]})}function Jv({exerciseId:e,onComplete:t,onBack:n,isCompleted:s}){const r=ds.find(m=>m.id===e),[a,l]=R.useState(""),[u,h]=R.useState(!1),[p,P]=R.useState(!1),[N,k]=R.useState(!1),[E,j]=R.useState(0);if(!r)return i.jsxs("div",{className:"flowchart-exercise",children:[i.jsx("button",{className:"back-btn",onClick:n,children:"← Back"}),i.jsx("div",{className:"error-message",children:i.jsx("h1",{children:"Exercise Not Found"})})]});const I=()=>{const m=a.trim().toLowerCase(),w=r.answer.trim().toLowerCase(),b=m===w;P(b),h(!0),b&&!s&&t(r.id,10)},L=()=>{l(""),h(!1),P(!1),k(!1),j(0)};return i.jsxs("div",{className:"flowchart-exercise",children:[i.jsx("button",{className:"back-btn",onClick:n,children:"← Back to Flowcharts"}),i.jsxs("div",{className:"exercise-header",children:[i.jsx("h1",{children:r.title}),i.jsxs("div",{className:"exercise-meta",children:[i.jsx("span",{className:`difficulty-badge ${r.difficulty}`,children:r.difficulty}),i.jsx("span",{className:"exercise-type-badge",children:r.type}),s&&i.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),i.jsx("p",{className:"exercise-description",children:r.description}),i.jsxs("div",{className:"flowchart-question",children:[i.jsx("h3",{children:"Question"}),i.jsx("p",{className:"question-text",children:r.question})]}),i.jsxs("div",{className:"answer-section",children:[i.jsx("label",{children:"Your Answer:"}),i.jsx("input",{type:"text",value:a,onChange:m=>l(m.target.value),placeholder:"Type your answer...",disabled:u&&p})]}),i.jsx("div",{className:"exercise-actions",children:u?i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"action-btn",onClick:L,children:"Try Again"}),!p&&i.jsx("button",{className:"action-btn",onClick:()=>l(r.answer),children:"Show Solution"})]}):i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"action-btn",onClick:()=>k(!N),children:N?"Hide Hints":"Show Hints"}),i.jsx("button",{className:"action-btn primary",onClick:I,disabled:!a.trim(),children:"Check Answer"})]})}),N&&r.hints&&r.hints.length>0&&i.jsxs("div",{className:"hint-box",children:[i.jsx("h4",{children:"Hints"}),i.jsx("ul",{children:r.hints.slice(0,E+1).map((m,w)=>i.jsx("li",{children:m},w))}),E<r.hints.length-1&&i.jsx("button",{className:"action-btn",onClick:()=>j(E+1),children:"Show Next Hint"})]}),u&&i.jsx("div",{className:`result-box ${p?"correct":"incorrect"}`,children:p?i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"✓ Correct!"}),i.jsx("p",{children:"You correctly interpreted the flowchart."})]}):i.jsxs(i.Fragment,{children:[i.jsx("h3",{children:"✗ Not Quite"}),i.jsx("p",{children:"Check your answer and try again."})]})}),u&&r.explanation&&i.jsxs("div",{className:"explanation-box",children:[i.jsx("h4",{children:"Explanation"}),i.jsx("p",{children:r.explanation})]})]})}function Zv(){const[e,t]=R.useState(null),[n,s]=R.useState(!1),[r,a]=R.useState(null),[l,u]=R.useState("dashboard"),[h,p]=R.useState(null),[P,N]=R.useState(null),[k,E]=R.useState([]),[j,I]=R.useState([]),[L,m]=R.useState([]),[w,b]=R.useState(0),[D,M]=R.useState([]),[F,S]=R.useState(null),[f,v]=R.useState(null),[y,C]=R.useState([]),[T,x]=R.useState([]),[G,K]=R.useState(null),[pe,ve]=R.useState(null),[H,z]=R.useState(null);R.useEffect(()=>{const W=localStorage.getItem("cyberrange-session");if(W)try{const ee=JSON.parse(W);ee.user&&(t(ee.user),$(ee.user))}catch(ee){console.error("Error loading session:",ee)}},[]);const $=async W=>{ne()},ne=()=>{const W=localStorage.getItem("cyberrange-progress");if(W)try{const ee=JSON.parse(W);E(ee.completed||[]),I(ee.completedScenarios||[]),m(ee.completedExercises||[]),C(ee.completedPseudocode||[]),x(ee.completedFlowcharts||[]),b(ee.points||0)}catch(ee){console.error("Error loading local progress:",ee)}},q=R.useCallback(async(W,ee,Eo,wn,Bi,zi)=>{localStorage.setItem("cyberrange-progress",JSON.stringify({completed:W,completedScenarios:ee,completedExercises:Eo,completedPseudocode:wn,completedFlowcharts:Bi,points:zi}))},[e]);R.useEffect(()=>{e&&q(k,j,L,y,T,w)},[k,j,L,y,T,w,e,q]);const ae=W=>{t(W),s(!1),localStorage.setItem("cyberrange-session",JSON.stringify({user:W})),W.completedChallenges&&(E(W.completedChallenges),I(W.completedScenarios||[]),m(W.completedExercises||[]),b(W.totalPoints||0)),$()},Je=W=>{s(!0),a(W)},Ge=()=>{t(null),s(!1),a(null),E([]),I([]),m([]),C([]),x([]),M([]),b(0),u("dashboard"),S(null),v(null),K(null),ve(null),z(null),localStorage.removeItem("cyberrange-session")},V=W=>{p(W),u("challenges")},Y=W=>{N(W),u("challenge-detail")},je=(W,ee)=>{k.includes(W)||(E([...k,W]),b(w+ee))},He=()=>{N(null),u("challenges")},be=()=>{p(null),N(null),u("dashboard")},ot=(W,ee)=>{j.includes(W)||(I([...j,W]),b(w+ee))},vn=()=>{window.confirm("Are you sure you want to reset all progress? This cannot be undone.")&&(E([]),I([]),m([]),C([]),x([]),b(0),localStorage.removeItem("cyberrange-progress"),u("dashboard"))},Ts=W=>{S(W),u("week")},Es=W=>{v(W),u("exercise-detail")},Ps=(W,ee)=>{L.includes(W)||(m([...L,W]),b(w+ee))},Mi=()=>{v(null),u("week")},bo=()=>{S(null),u("dashboard")},No=W=>{u(W==="pseudocode"?"pseudocode-hub":"flowchart-hub")},Fi=W=>{K(W),u("topic-lesson")},Fn=W=>{ve(W),u("pseudocode-exercise")},Ui=(W,ee)=>{y.includes(W)||(C([...y,W]),b(w+ee))},To=W=>{z(W),u("flowchart-exercise")},As=(W,ee)=>{T.includes(W)||(x([...T,W]),b(w+ee))},xn=()=>{u("dashboard")},Hi=()=>{u("dashboard")},Ne=()=>{K(null),u("pseudocode-hub")},Pe=()=>{ve(null),u("pseudocode-hub")},Un=()=>{z(null),u("flowchart-hub")};return!e&&!n?i.jsx(Lv,{onLogin:ae,onTeacherMode:Je}):n&&r?i.jsx(Fv,{classCode:r,onBack:()=>{s(!1),a(null)}}):i.jsxs("div",{className:"app",children:[i.jsx("header",{className:"header",children:i.jsxs("div",{className:"header-content",children:[i.jsx("div",{className:"logo",children:"CyberEd Range"}),i.jsxs("nav",{className:"nav",children:[i.jsx("button",{className:`nav-btn ${l==="dashboard"?"active":""}`,onClick:be,children:"Dashboard"}),i.jsx("button",{className:`nav-btn ${l==="network-monitor"?"active":""}`,onClick:()=>u("network-monitor"),children:"Network Monitor"}),i.jsx("button",{className:`nav-btn ${l==="tools"?"active":""}`,onClick:()=>u("tools"),children:"Tools"}),i.jsx("button",{className:`nav-btn ${l==="vocabulary"?"active":""}`,onClick:()=>u("vocabulary"),children:"Vocabulary"}),i.jsx("button",{className:"nav-btn",onClick:vn,style:{background:"rgba(244, 67, 54, 0.2)",borderColor:"#f44336"},children:"Reset"}),i.jsxs("div",{className:"user-info",children:[i.jsx("span",{className:"user-name",children:e==null?void 0:e.name}),i.jsx("span",{className:"user-class",children:e==null?void 0:e.classCode}),i.jsx("button",{className:"logout-btn",onClick:Ge,children:"Logout"})]})]})]})}),i.jsxs("main",{className:"main-content",children:[l==="dashboard"&&i.jsx(Ey,{studentName:e==null?void 0:e.name,totalPoints:w,assignments:D,completedChallenges:k,completedScenarios:j,completedExercises:L,completedPseudocode:y,completedFlowcharts:T,onSelectCategory:V,onSelectNetworkMonitor:()=>u("network-monitor"),onSelectWeek:Ts,onSelectAPCSP:No}),l==="challenges"&&h&&i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"back-btn",onClick:be,children:"Back to Dashboard"}),i.jsx("div",{style:{marginTop:"1rem"},children:i.jsx(Py,{category:h,completedChallenges:k,onSelectChallenge:Y})})]}),l==="challenge-detail"&&P&&i.jsx(Ay,{challengeId:P,onComplete:je,onBack:He,isCompleted:k.includes(P)}),l==="week"&&F&&i.jsx(zv,{weekKey:F,onSelectExercise:Es,onBack:bo,completedExercises:L}),l==="exercise-detail"&&f&&i.jsx(Wv,{exerciseId:f,onComplete:Ps,onBack:Mi,isCompleted:L.includes(f)}),l==="vocabulary"&&i.jsx(Iy,{}),l==="tools"&&i.jsx(t0,{}),l==="network-monitor"&&i.jsx(Xy,{completedScenarios:j,onCompleteScenario:ot,onBack:be}),l==="pseudocode-hub"&&i.jsx(Vv,{completedExercises:y,onSelectTopic:Fi,onSelectExercise:Fn,onBack:xn}),l==="topic-lesson"&&G&&i.jsx($v,{topicId:G,onBack:Ne,onSelectExercise:Fn}),l==="pseudocode-exercise"&&pe&&i.jsx(Gv,{exerciseId:pe,onComplete:Ui,onBack:Pe,isCompleted:y.includes(pe)}),l==="code-tracer"&&i.jsx(Yv,{onBack:xn}),l==="robot-grid"&&i.jsx(Xv,{onBack:xn}),l==="flowchart-hub"&&i.jsx(Kv,{completedExercises:T,onSelectExercise:To,onSelectBuilder:()=>u("flowchart-builder"),onSelectSymbols:()=>u("symbol-lesson"),onBack:Hi}),l==="symbol-lesson"&&i.jsx(Qv,{onBack:()=>u("flowchart-hub")}),l==="flowchart-exercise"&&H&&i.jsx(Jv,{exerciseId:H,onComplete:As,onBack:Un,isCompleted:T.includes(H)}),l==="flowchart-builder"&&i.jsx(qv,{onBack:()=>u("flowchart-hub")})]})]})}Ta.createRoot(document.getElementById("root")).render(i.jsx(cm.StrictMode,{children:i.jsx(Zv,{})}));
