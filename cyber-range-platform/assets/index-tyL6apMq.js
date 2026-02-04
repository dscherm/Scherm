(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function lf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mh={exports:{}},La={},fh={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr=Symbol.for("react.element"),cf=Symbol.for("react.portal"),df=Symbol.for("react.fragment"),uf=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),pf=Symbol.for("react.provider"),mf=Symbol.for("react.context"),ff=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),yf=Symbol.for("react.memo"),xf=Symbol.for("react.lazy"),Ld=Symbol.iterator;function vf(e){return e===null||typeof e!="object"?null:(e=Ld&&e[Ld]||e["@@iterator"],typeof e=="function"?e:null)}var gh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},yh=Object.assign,xh={};function Fn(e,t,s){this.props=e,this.context=t,this.refs=xh,this.updater=s||gh}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vh(){}vh.prototype=Fn.prototype;function Zl(e,t,s){this.props=e,this.context=t,this.refs=xh,this.updater=s||gh}var ec=Zl.prototype=new vh;ec.constructor=Zl;yh(ec,Fn.prototype);ec.isPureReactComponent=!0;var Od=Array.isArray,wh=Object.prototype.hasOwnProperty,tc={current:null},bh={key:!0,ref:!0,__self:!0,__source:!0};function kh(e,t,s){var i,r={},o=null,l=null;if(t!=null)for(i in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)wh.call(t,i)&&!bh.hasOwnProperty(i)&&(r[i]=t[i]);var c=arguments.length-2;if(c===1)r.children=s;else if(1<c){for(var h=Array(c),p=0;p<c;p++)h[p]=arguments[p+2];r.children=h}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)r[i]===void 0&&(r[i]=c[i]);return{$$typeof:tr,type:e,key:o,ref:l,props:r,_owner:tc.current}}function wf(e,t){return{$$typeof:tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sc(e){return typeof e=="object"&&e!==null&&e.$$typeof===tr}function bf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(s){return t[s]})}var _d=/\/+/g;function vo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bf(""+e.key):t.toString(36)}function Gr(e,t,s,i,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case tr:case cf:l=!0}}if(l)return l=e,r=r(l),e=i===""?"."+vo(l,0):i,Od(r)?(s="",e!=null&&(s=e.replace(_d,"$&/")+"/"),Gr(r,t,s,"",function(p){return p})):r!=null&&(sc(r)&&(r=wf(r,s+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(_d,"$&/")+"/")+e)),t.push(r)),1;if(l=0,i=i===""?".":i+":",Od(e))for(var c=0;c<e.length;c++){o=e[c];var h=i+vo(o,c);l+=Gr(o,t,s,h,r)}else if(h=vf(e),typeof h=="function")for(e=h.call(e),c=0;!(o=e.next()).done;)o=o.value,h=i+vo(o,c++),l+=Gr(o,t,s,h,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Pr(e,t,s){if(e==null)return e;var i=[],r=0;return Gr(e,i,"","",function(o){return t.call(s,o,r++)}),i}function kf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(s){(e._status===0||e._status===-1)&&(e._status=1,e._result=s)},function(s){(e._status===0||e._status===-1)&&(e._status=2,e._result=s)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},$r={transition:null},jf={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:$r,ReactCurrentOwner:tc};function jh(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Pr,forEach:function(e,t,s){Pr(e,function(){t.apply(this,arguments)},s)},count:function(e){var t=0;return Pr(e,function(){t++}),t},toArray:function(e){return Pr(e,function(t){return t})||[]},only:function(e){if(!sc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=Fn;ne.Fragment=df;ne.Profiler=hf;ne.PureComponent=Zl;ne.StrictMode=uf;ne.Suspense=gf;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jf;ne.act=jh;ne.cloneElement=function(e,t,s){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=yh({},e.props),r=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=tc.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(h in t)wh.call(t,h)&&!bh.hasOwnProperty(h)&&(i[h]=t[h]===void 0&&c!==void 0?c[h]:t[h])}var h=arguments.length-2;if(h===1)i.children=s;else if(1<h){c=Array(h);for(var p=0;p<h;p++)c[p]=arguments[p+2];i.children=c}return{$$typeof:tr,type:e.type,key:r,ref:o,props:i,_owner:l}};ne.createContext=function(e){return e={$$typeof:mf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:pf,_context:e},e.Consumer=e};ne.createElement=kh;ne.createFactory=function(e){var t=kh.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:ff,render:e}};ne.isValidElement=sc;ne.lazy=function(e){return{$$typeof:xf,_payload:{_status:-1,_result:e},_init:kf}};ne.memo=function(e,t){return{$$typeof:yf,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=$r.transition;$r.transition={};try{e()}finally{$r.transition=t}};ne.unstable_act=jh;ne.useCallback=function(e,t){return Xe.current.useCallback(e,t)};ne.useContext=function(e){return Xe.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};ne.useEffect=function(e,t){return Xe.current.useEffect(e,t)};ne.useId=function(){return Xe.current.useId()};ne.useImperativeHandle=function(e,t,s){return Xe.current.useImperativeHandle(e,t,s)};ne.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return Xe.current.useMemo(e,t)};ne.useReducer=function(e,t,s){return Xe.current.useReducer(e,t,s)};ne.useRef=function(e){return Xe.current.useRef(e)};ne.useState=function(e){return Xe.current.useState(e)};ne.useSyncExternalStore=function(e,t,s){return Xe.current.useSyncExternalStore(e,t,s)};ne.useTransition=function(){return Xe.current.useTransition()};ne.version="18.3.1";fh.exports=ne;var A=fh.exports;const Sf=lf(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf=A,Tf=Symbol.for("react.element"),Nf=Symbol.for("react.fragment"),Pf=Object.prototype.hasOwnProperty,Ef=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Af={key:!0,ref:!0,__self:!0,__source:!0};function Sh(e,t,s){var i,r={},o=null,l=null;s!==void 0&&(o=""+s),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(i in t)Pf.call(t,i)&&!Af.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)r[i]===void 0&&(r[i]=t[i]);return{$$typeof:Tf,type:e,key:o,ref:l,props:r,_owner:Ef.current}}La.Fragment=Nf;La.jsx=Sh;La.jsxs=Sh;mh.exports=La;var n=mh.exports,el={},Ch={exports:{}},dt={},Th={exports:{}},Nh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,H){var z=_.length;_.push(H);e:for(;0<z;){var $=z-1>>>1,Z=_[$];if(0<r(Z,H))_[$]=H,_[z]=Z,z=$;else break e}}function s(_){return _.length===0?null:_[0]}function i(_){if(_.length===0)return null;var H=_[0],z=_.pop();if(z!==H){_[0]=z;e:for(var $=0,Z=_.length,W=Z>>>1;$<W;){var J=2*($+1)-1,ee=_[J],Y=J+1,q=_[Y];if(0>r(ee,z))Y<Z&&0>r(q,ee)?(_[$]=q,_[Y]=z,$=Y):(_[$]=ee,_[J]=z,$=J);else if(Y<Z&&0>r(q,z))_[$]=q,_[Y]=z,$=Y;else break e}}return H}function r(_,H){var z=_.sortIndex-H.sortIndex;return z!==0?z:_.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var h=[],p=[],w=1,x=null,v=3,C=!1,N=!1,I=!1,R=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(_){for(var H=s(p);H!==null;){if(H.callback===null)i(p);else if(H.startTime<=_)i(p),H.sortIndex=H.expirationTime,t(h,H);else break;H=s(p)}}function D(_){if(I=!1,S(_),!N)if(s(h)!==null)N=!0,K(O);else{var H=s(p);H!==null&&se(D,H.startTime-_)}}function O(_,H){N=!1,I&&(I=!1,m(g),g=-1),C=!0;var z=v;try{for(S(H),x=s(h);x!==null&&(!(x.expirationTime>H)||_&&!P());){var $=x.callback;if(typeof $=="function"){x.callback=null,v=x.priorityLevel;var Z=$(x.expirationTime<=H);H=e.unstable_now(),typeof Z=="function"?x.callback=Z:x===s(h)&&i(h),S(H)}else i(h);x=s(h)}if(x!==null)var W=!0;else{var J=s(p);J!==null&&se(D,J.startTime-H),W=!1}return W}finally{x=null,v=z,C=!1}}var F=!1,b=null,g=-1,T=5,j=-1;function P(){return!(e.unstable_now()-j<T)}function E(){if(b!==null){var _=e.unstable_now();j=_;var H=!0;try{H=b(!0,_)}finally{H?k():(F=!1,b=null)}}else F=!1}var k;if(typeof f=="function")k=function(){f(E)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,U=Q.port2;Q.port1.onmessage=E,k=function(){U.postMessage(null)}}else k=function(){R(E,0)};function K(_){b=_,F||(F=!0,k())}function se(_,H){g=R(function(){_(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){N||C||(N=!0,K(O))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return s(h)},e.unstable_next=function(_){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var z=v;v=H;try{return _()}finally{v=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,H){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var z=v;v=_;try{return H()}finally{v=z}},e.unstable_scheduleCallback=function(_,H,z){var $=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,_){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,_={id:w++,callback:H,priorityLevel:_,startTime:z,expirationTime:Z,sortIndex:-1},z>$?(_.sortIndex=z,t(p,_),s(h)===null&&_===s(p)&&(I?(m(g),g=-1):I=!0,se(D,z-$))):(_.sortIndex=Z,t(h,_),N||C||(N=!0,K(O))),_},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(_){var H=v;return function(){var z=v;v=H;try{return _.apply(this,arguments)}finally{v=z}}}})(Nh);Th.exports=Nh;var If=Th.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=A,ct=If;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,s=1;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ph=new Set,Mi={};function Qs(e,t){En(e,t),En(e+"Capture",t)}function En(e,t){for(Mi[e]=t,e=0;e<t.length;e++)Ph.add(t[e])}var ts=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tl=Object.prototype.hasOwnProperty,Rf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Md={},Fd={};function Lf(e){return tl.call(Fd,e)?!0:tl.call(Md,e)?!1:Rf.test(e)?Fd[e]=!0:(Md[e]=!0,!1)}function Of(e,t,s,i){if(s!==null&&s.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:s!==null?!s.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _f(e,t,s,i){if(t===null||typeof t>"u"||Of(e,t,s,i))return!0;if(i)return!1;if(s!==null)switch(s.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ke(e,t,s,i,r,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=s,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var nc=/[\-:]([a-z])/g;function ic(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(nc,ic);ze[t]=new Ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(nc,ic);ze[t]=new Ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(nc,ic);ze[t]=new Ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function rc(e,t,s,i){var r=ze.hasOwnProperty(t)?ze[t]:null;(r!==null?r.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_f(t,s,r,i)&&(s=null),i||r===null?Lf(t)&&(s===null?e.removeAttribute(t):e.setAttribute(t,""+s)):r.mustUseProperty?e[r.propertyName]=s===null?r.type===3?!1:"":s:(t=r.attributeName,i=r.attributeNamespace,s===null?e.removeAttribute(t):(r=r.type,s=r===3||r===4&&s===!0?"":""+s,i?e.setAttributeNS(i,t,s):e.setAttribute(t,s))))}var as=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Er=Symbol.for("react.element"),ln=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),Eh=Symbol.for("react.provider"),Ah=Symbol.for("react.context"),oc=Symbol.for("react.forward_ref"),nl=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),lc=Symbol.for("react.memo"),hs=Symbol.for("react.lazy"),Ih=Symbol.for("react.offscreen"),zd=Symbol.iterator;function mi(e){return e===null||typeof e!="object"?null:(e=zd&&e[zd]||e["@@iterator"],typeof e=="function"?e:null)}var je=Object.assign,wo;function ki(e){if(wo===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);wo=t&&t[1]||""}return`
`+wo+e}var bo=!1;function ko(e,t){if(!e||bo)return"";bo=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var i=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){i=p}e.call(t.prototype)}else{try{throw Error()}catch(p){i=p}e()}}catch(p){if(p&&i&&typeof p.stack=="string"){for(var r=p.stack.split(`
`),o=i.stack.split(`
`),l=r.length-1,c=o.length-1;1<=l&&0<=c&&r[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(r[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||r[l]!==o[c]){var h=`
`+r[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=c);break}}}finally{bo=!1,Error.prepareStackTrace=s}return(e=e?e.displayName||e.name:"")?ki(e):""}function Mf(e){switch(e.tag){case 5:return ki(e.type);case 16:return ki("Lazy");case 13:return ki("Suspense");case 19:return ki("SuspenseList");case 0:case 2:case 15:return e=ko(e.type,!1),e;case 11:return e=ko(e.type.render,!1),e;case 1:return e=ko(e.type,!0),e;default:return""}}function rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case ln:return"Portal";case sl:return"Profiler";case ac:return"StrictMode";case nl:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ah:return(e.displayName||"Context")+".Consumer";case Eh:return(e._context.displayName||"Context")+".Provider";case oc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lc:return t=e.displayName||null,t!==null?t:rl(e.type)||"Memo";case hs:t=e._payload,e=e._init;try{return rl(e(t))}catch{}}return null}function Ff(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rl(t);case 8:return t===ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ns(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Dh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zf(e){var t=Dh(e)?"checked":"value",s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var r=s.get,o=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ar(e){e._valueTracker||(e._valueTracker=zf(e))}function Rh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),i="";return e&&(i=Dh(e)?e.checked?"true":"false":e.value),e=i,e!==s?(t.setValue(e),!0):!1}function ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function al(e,t){var s=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??e._wrapperState.initialChecked})}function Hd(e,t){var s=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;s=Ns(t.value!=null?t.value:s),e._wrapperState={initialChecked:i,initialValue:s,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Lh(e,t){t=t.checked,t!=null&&rc(e,"checked",t,!1)}function ol(e,t){Lh(e,t);var s=Ns(t.value),i=t.type;if(s!=null)i==="number"?(s===0&&e.value===""||e.value!=s)&&(e.value=""+s):e.value!==""+s&&(e.value=""+s);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ll(e,t.type,s):t.hasOwnProperty("defaultValue")&&ll(e,t.type,Ns(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ud(e,t,s){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,s||t===e.value||(e.value=t),e.defaultValue=t}s=e.name,s!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,s!==""&&(e.name=s)}function ll(e,t,s){(t!=="number"||ia(e.ownerDocument)!==e)&&(s==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+s&&(e.defaultValue=""+s))}var ji=Array.isArray;function bn(e,t,s,i){if(e=e.options,t){t={};for(var r=0;r<s.length;r++)t["$"+s[r]]=!0;for(s=0;s<e.length;s++)r=t.hasOwnProperty("$"+e[s].value),e[s].selected!==r&&(e[s].selected=r),r&&i&&(e[s].defaultSelected=!0)}else{for(s=""+Ns(s),t=null,r=0;r<e.length;r++){if(e[r].value===s){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bd(e,t){var s=t.value;if(s==null){if(s=t.children,t=t.defaultValue,s!=null){if(t!=null)throw Error(B(92));if(ji(s)){if(1<s.length)throw Error(B(93));s=s[0]}t=s}t==null&&(t=""),s=t}e._wrapperState={initialValue:Ns(s)}}function Oh(e,t){var s=Ns(t.value),i=Ns(t.defaultValue);s!=null&&(s=""+s,s!==e.value&&(e.value=s),t.defaultValue==null&&e.defaultValue!==s&&(e.defaultValue=s)),i!=null&&(e.defaultValue=""+i)}function Wd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _h(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_h(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,Mh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,s,i,r){MSApp.execUnsafeLocalFunction(function(){return e(t,s,i,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fi(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hf=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(e){Hf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ti[t]=Ti[e]})});function Fh(e,t,s){return t==null||typeof t=="boolean"||t===""?"":s||typeof t!="number"||t===0||Ti.hasOwnProperty(e)&&Ti[e]?(""+t).trim():t+"px"}function zh(e,t){e=e.style;for(var s in t)if(t.hasOwnProperty(s)){var i=s.indexOf("--")===0,r=Fh(s,t[s],i);s==="float"&&(s="cssFloat"),i?e.setProperty(s,r):e[s]=r}}var Uf=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ul(e,t){if(t){if(Uf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pl=null;function cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ml=null,kn=null,jn=null;function Yd(e){if(e=ir(e)){if(typeof ml!="function")throw Error(B(280));var t=e.stateNode;t&&(t=za(t),ml(e.stateNode,e.type,t))}}function Hh(e){kn?jn?jn.push(e):jn=[e]:kn=e}function Uh(){if(kn){var e=kn,t=jn;if(jn=kn=null,Yd(e),t)for(e=0;e<t.length;e++)Yd(t[e])}}function Bh(e,t){return e(t)}function Wh(){}var jo=!1;function Yh(e,t,s){if(jo)return e(t,s);jo=!0;try{return Bh(e,t,s)}finally{jo=!1,(kn!==null||jn!==null)&&(Wh(),Uh())}}function zi(e,t){var s=e.stateNode;if(s===null)return null;var i=za(s);if(i===null)return null;s=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(B(231,t,typeof s));return s}var fl=!1;if(ts)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){fl=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{fl=!1}function Bf(e,t,s,i,r,o,l,c,h){var p=Array.prototype.slice.call(arguments,3);try{t.apply(s,p)}catch(w){this.onError(w)}}var Ni=!1,ra=null,aa=!1,gl=null,Wf={onError:function(e){Ni=!0,ra=e}};function Yf(e,t,s,i,r,o,l,c,h){Ni=!1,ra=null,Bf.apply(Wf,arguments)}function Vf(e,t,s,i,r,o,l,c,h){if(Yf.apply(this,arguments),Ni){if(Ni){var p=ra;Ni=!1,ra=null}else throw Error(B(198));aa||(aa=!0,gl=p)}}function Zs(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function Vh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vd(e){if(Zs(e)!==e)throw Error(B(188))}function Gf(e){var t=e.alternate;if(!t){if(t=Zs(e),t===null)throw Error(B(188));return t!==e?null:e}for(var s=e,i=t;;){var r=s.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){s=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===s)return Vd(r),e;if(o===i)return Vd(r),t;o=o.sibling}throw Error(B(188))}if(s.return!==i.return)s=r,i=o;else{for(var l=!1,c=r.child;c;){if(c===s){l=!0,s=r,i=o;break}if(c===i){l=!0,i=r,s=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===s){l=!0,s=o,i=r;break}if(c===i){l=!0,i=o,s=r;break}c=c.sibling}if(!l)throw Error(B(189))}}if(s.alternate!==i)throw Error(B(190))}if(s.tag!==3)throw Error(B(188));return s.stateNode.current===s?e:t}function Gh(e){return e=Gf(e),e!==null?$h(e):null}function $h(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$h(e);if(t!==null)return t;e=e.sibling}return null}var qh=ct.unstable_scheduleCallback,Gd=ct.unstable_cancelCallback,$f=ct.unstable_shouldYield,qf=ct.unstable_requestPaint,Te=ct.unstable_now,Xf=ct.unstable_getCurrentPriorityLevel,dc=ct.unstable_ImmediatePriority,Xh=ct.unstable_UserBlockingPriority,oa=ct.unstable_NormalPriority,Kf=ct.unstable_LowPriority,Kh=ct.unstable_IdlePriority,Oa=null,Ut=null;function Jf(e){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Oa,e,void 0,(e.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:eg,Qf=Math.log,Zf=Math.LN2;function eg(e){return e>>>=0,e===0?32:31-(Qf(e)/Zf|0)|0}var Dr=64,Rr=4194304;function Si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function la(e,t){var s=e.pendingLanes;if(s===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes,l=s&268435455;if(l!==0){var c=l&~r;c!==0?i=Si(c):(o&=l,o!==0&&(i=Si(o)))}else l=s&~r,l!==0?i=Si(l):o!==0&&(i=Si(o));if(i===0)return 0;if(t!==0&&t!==i&&!(t&r)&&(r=i&-i,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(i&4&&(i|=s&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)s=31-It(t),r=1<<s,i|=e[s],t&=~r;return i}function tg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sg(e,t){for(var s=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-It(o),c=1<<l,h=r[l];h===-1?(!(c&s)||c&i)&&(r[l]=tg(c,t)):h<=t&&(e.expiredLanes|=c),o&=~c}}function yl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jh(){var e=Dr;return Dr<<=1,!(Dr&4194240)&&(Dr=64),e}function So(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function sr(e,t,s){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=s}function ng(e,t){var s=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<s;){var r=31-It(s),o=1<<r;t[r]=0,i[r]=-1,e[r]=-1,s&=~o}}function uc(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var i=31-It(s),r=1<<i;r&t|e[i]&t&&(e[i]|=t),s&=~r}}var ce=0;function Qh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zh,hc,ep,tp,sp,xl=!1,Lr=[],xs=null,vs=null,ws=null,Hi=new Map,Ui=new Map,ms=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(e,t){switch(e){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":vs=null;break;case"mouseover":case"mouseout":ws=null;break;case"pointerover":case"pointerout":Hi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(t.pointerId)}}function gi(e,t,s,i,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:s,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},t!==null&&(t=ir(t),t!==null&&hc(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function rg(e,t,s,i,r){switch(t){case"focusin":return xs=gi(xs,e,t,s,i,r),!0;case"dragenter":return vs=gi(vs,e,t,s,i,r),!0;case"mouseover":return ws=gi(ws,e,t,s,i,r),!0;case"pointerover":var o=r.pointerId;return Hi.set(o,gi(Hi.get(o)||null,e,t,s,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ui.set(o,gi(Ui.get(o)||null,e,t,s,i,r)),!0}return!1}function np(e){var t=Bs(e.target);if(t!==null){var s=Zs(t);if(s!==null){if(t=s.tag,t===13){if(t=Vh(s),t!==null){e.blockedOn=t,sp(e.priority,function(){ep(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);pl=i,s.target.dispatchEvent(i),pl=null}else return t=ir(s),t!==null&&hc(t),e.blockedOn=s,!1;t.shift()}return!0}function qd(e,t,s){qr(e)&&s.delete(t)}function ag(){xl=!1,xs!==null&&qr(xs)&&(xs=null),vs!==null&&qr(vs)&&(vs=null),ws!==null&&qr(ws)&&(ws=null),Hi.forEach(qd),Ui.forEach(qd)}function yi(e,t){e.blockedOn===t&&(e.blockedOn=null,xl||(xl=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,ag)))}function Bi(e){function t(r){return yi(r,e)}if(0<Lr.length){yi(Lr[0],e);for(var s=1;s<Lr.length;s++){var i=Lr[s];i.blockedOn===e&&(i.blockedOn=null)}}for(xs!==null&&yi(xs,e),vs!==null&&yi(vs,e),ws!==null&&yi(ws,e),Hi.forEach(t),Ui.forEach(t),s=0;s<ms.length;s++)i=ms[s],i.blockedOn===e&&(i.blockedOn=null);for(;0<ms.length&&(s=ms[0],s.blockedOn===null);)np(s),s.blockedOn===null&&ms.shift()}var Sn=as.ReactCurrentBatchConfig,ca=!0;function og(e,t,s,i){var r=ce,o=Sn.transition;Sn.transition=null;try{ce=1,pc(e,t,s,i)}finally{ce=r,Sn.transition=o}}function lg(e,t,s,i){var r=ce,o=Sn.transition;Sn.transition=null;try{ce=4,pc(e,t,s,i)}finally{ce=r,Sn.transition=o}}function pc(e,t,s,i){if(ca){var r=vl(e,t,s,i);if(r===null)Lo(e,t,i,da,s),$d(e,i);else if(rg(r,e,t,s,i))i.stopPropagation();else if($d(e,i),t&4&&-1<ig.indexOf(e)){for(;r!==null;){var o=ir(r);if(o!==null&&Zh(o),o=vl(e,t,s,i),o===null&&Lo(e,t,i,da,s),o===r)break;r=o}r!==null&&i.stopPropagation()}else Lo(e,t,i,null,s)}}var da=null;function vl(e,t,s,i){if(da=null,e=cc(i),e=Bs(e),e!==null)if(t=Zs(e),t===null)e=null;else if(s=t.tag,s===13){if(e=Vh(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return da=e,null}function ip(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xf()){case dc:return 1;case Xh:return 4;case oa:case Kf:return 16;case Kh:return 536870912;default:return 16}default:return 16}}var gs=null,mc=null,Xr=null;function rp(){if(Xr)return Xr;var e,t=mc,s=t.length,i,r="value"in gs?gs.value:gs.textContent,o=r.length;for(e=0;e<s&&t[e]===r[e];e++);var l=s-e;for(i=1;i<=l&&t[s-i]===r[o-i];i++);return Xr=r.slice(e,1<i?1-i:void 0)}function Kr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function Xd(){return!1}function ut(e){function t(s,i,r,o,l){this._reactName=s,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(s=e[c],this[c]=s?s(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Or:Xd,this.isPropagationStopped=Xd,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=ut(zn),nr=je({},zn,{view:0,detail:0}),cg=ut(nr),Co,To,xi,_a=je({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(Co=e.screenX-xi.screenX,To=e.screenY-xi.screenY):To=Co=0,xi=e),Co)},movementY:function(e){return"movementY"in e?e.movementY:To}}),Kd=ut(_a),dg=je({},_a,{dataTransfer:0}),ug=ut(dg),hg=je({},nr,{relatedTarget:0}),No=ut(hg),pg=je({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),mg=ut(pg),fg=je({},zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gg=ut(fg),yg=je({},zn,{data:0}),Jd=ut(yg),xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=wg[e])?!!t[e]:!1}function gc(){return bg}var kg=je({},nr,{key:function(e){if(e.key){var t=xg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(e){return e.type==="keypress"?Kr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jg=ut(kg),Sg=je({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=ut(Sg),Cg=je({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),Tg=ut(Cg),Ng=je({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pg=ut(Ng),Eg=je({},_a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=ut(Eg),Ig=[9,13,27,32],yc=ts&&"CompositionEvent"in window,Pi=null;ts&&"documentMode"in document&&(Pi=document.documentMode);var Dg=ts&&"TextEvent"in window&&!Pi,ap=ts&&(!yc||Pi&&8<Pi&&11>=Pi),Zd=" ",eu=!1;function op(e,t){switch(e){case"keyup":return Ig.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Rg(e,t){switch(e){case"compositionend":return lp(t);case"keypress":return t.which!==32?null:(eu=!0,Zd);case"textInput":return e=t.data,e===Zd&&eu?null:e;default:return null}}function Lg(e,t){if(dn)return e==="compositionend"||!yc&&op(e,t)?(e=rp(),Xr=mc=gs=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ap&&t.locale!=="ko"?null:t.data;default:return null}}var Og={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Og[e.type]:t==="textarea"}function cp(e,t,s,i){Hh(i),t=ua(t,"onChange"),0<t.length&&(s=new fc("onChange","change",null,s,i),e.push({event:s,listeners:t}))}var Ei=null,Wi=null;function _g(e){wp(e,0)}function Ma(e){var t=pn(e);if(Rh(t))return e}function Mg(e,t){if(e==="change")return t}var dp=!1;if(ts){var Po;if(ts){var Eo="oninput"in document;if(!Eo){var su=document.createElement("div");su.setAttribute("oninput","return;"),Eo=typeof su.oninput=="function"}Po=Eo}else Po=!1;dp=Po&&(!document.documentMode||9<document.documentMode)}function nu(){Ei&&(Ei.detachEvent("onpropertychange",up),Wi=Ei=null)}function up(e){if(e.propertyName==="value"&&Ma(Wi)){var t=[];cp(t,Wi,e,cc(e)),Yh(_g,t)}}function Fg(e,t,s){e==="focusin"?(nu(),Ei=t,Wi=s,Ei.attachEvent("onpropertychange",up)):e==="focusout"&&nu()}function zg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(Wi)}function Hg(e,t){if(e==="click")return Ma(t)}function Ug(e,t){if(e==="input"||e==="change")return Ma(t)}function Bg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:Bg;function Yi(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var r=s[i];if(!tl.call(t,r)||!Rt(e[r],t[r]))return!1}return!0}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ru(e,t){var s=iu(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=t&&i>=t)return{node:s,offset:t-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=iu(s)}}function hp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function pp(){for(var e=window,t=ia();t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=ia(e.document)}return t}function xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wg(e){var t=pp(),s=e.focusedElem,i=e.selectionRange;if(t!==s&&s&&s.ownerDocument&&hp(s.ownerDocument.documentElement,s)){if(i!==null&&xc(s)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in s)s.selectionStart=t,s.selectionEnd=Math.min(e,s.value.length);else if(e=(t=s.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=s.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!e.extend&&o>i&&(r=i,i=o,o=r),r=ru(s,o);var l=ru(s,i);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>i?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=s;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<t.length;s++)e=t[s],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yg=ts&&"documentMode"in document&&11>=document.documentMode,un=null,wl=null,Ai=null,bl=!1;function au(e,t,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;bl||un==null||un!==ia(i)||(i=un,"selectionStart"in i&&xc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ai&&Yi(Ai,i)||(Ai=i,i=ua(wl,"onSelect"),0<i.length&&(t=new fc("onSelect","select",null,t,s),e.push({event:t,listeners:i}),t.target=un)))}function _r(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var hn={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionend:_r("Transition","TransitionEnd")},Ao={},mp={};ts&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function Fa(e){if(Ao[e])return Ao[e];if(!hn[e])return e;var t=hn[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in mp)return Ao[e]=t[s];return e}var fp=Fa("animationend"),gp=Fa("animationiteration"),yp=Fa("animationstart"),xp=Fa("transitionend"),vp=new Map,ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Es(e,t){vp.set(e,t),Qs(t,[e])}for(var Io=0;Io<ou.length;Io++){var Do=ou[Io],Vg=Do.toLowerCase(),Gg=Do[0].toUpperCase()+Do.slice(1);Es(Vg,"on"+Gg)}Es(fp,"onAnimationEnd");Es(gp,"onAnimationIteration");Es(yp,"onAnimationStart");Es("dblclick","onDoubleClick");Es("focusin","onFocus");Es("focusout","onBlur");Es(xp,"onTransitionEnd");En("onMouseEnter",["mouseout","mouseover"]);En("onMouseLeave",["mouseout","mouseover"]);En("onPointerEnter",["pointerout","pointerover"]);En("onPointerLeave",["pointerout","pointerover"]);Qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$g=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ci));function lu(e,t,s){var i=e.type||"unknown-event";e.currentTarget=s,Vf(i,t,void 0,e),e.currentTarget=null}function wp(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],r=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var l=i.length-1;0<=l;l--){var c=i[l],h=c.instance,p=c.currentTarget;if(c=c.listener,h!==o&&r.isPropagationStopped())break e;lu(r,c,p),o=h}else for(l=0;l<i.length;l++){if(c=i[l],h=c.instance,p=c.currentTarget,c=c.listener,h!==o&&r.isPropagationStopped())break e;lu(r,c,p),o=h}}}if(aa)throw e=gl,aa=!1,gl=null,e}function fe(e,t){var s=t[Tl];s===void 0&&(s=t[Tl]=new Set);var i=e+"__bubble";s.has(i)||(bp(t,e,2,!1),s.add(i))}function Ro(e,t,s){var i=0;t&&(i|=4),bp(s,e,i,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function Vi(e){if(!e[Mr]){e[Mr]=!0,Ph.forEach(function(s){s!=="selectionchange"&&($g.has(s)||Ro(s,!1,e),Ro(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,Ro("selectionchange",!1,t))}}function bp(e,t,s,i){switch(ip(t)){case 1:var r=og;break;case 4:r=lg;break;default:r=pc}s=r.bind(null,t,s,e),r=void 0,!fl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,s,{capture:!0,passive:r}):e.addEventListener(t,s,!0):r!==void 0?e.addEventListener(t,s,{passive:r}):e.addEventListener(t,s,!1)}function Lo(e,t,s,i,r){var o=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var c=i.stateNode.containerInfo;if(c===r||c.nodeType===8&&c.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===r||h.nodeType===8&&h.parentNode===r))return;l=l.return}for(;c!==null;){if(l=Bs(c),l===null)return;if(h=l.tag,h===5||h===6){i=o=l;continue e}c=c.parentNode}}i=i.return}Yh(function(){var p=o,w=cc(s),x=[];e:{var v=vp.get(e);if(v!==void 0){var C=fc,N=e;switch(e){case"keypress":if(Kr(s)===0)break e;case"keydown":case"keyup":C=jg;break;case"focusin":N="focus",C=No;break;case"focusout":N="blur",C=No;break;case"beforeblur":case"afterblur":C=No;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Tg;break;case fp:case gp:case yp:C=mg;break;case xp:C=Pg;break;case"scroll":C=cg;break;case"wheel":C=Ag;break;case"copy":case"cut":case"paste":C=gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Qd}var I=(t&4)!==0,R=!I&&e==="scroll",m=I?v!==null?v+"Capture":null:v;I=[];for(var f=p,S;f!==null;){S=f;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,m!==null&&(D=zi(f,m),D!=null&&I.push(Gi(f,D,S)))),R)break;f=f.return}0<I.length&&(v=new C(v,N,null,s,w),x.push({event:v,listeners:I}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",v&&s!==pl&&(N=s.relatedTarget||s.fromElement)&&(Bs(N)||N[ss]))break e;if((C||v)&&(v=w.window===w?w:(v=w.ownerDocument)?v.defaultView||v.parentWindow:window,C?(N=s.relatedTarget||s.toElement,C=p,N=N?Bs(N):null,N!==null&&(R=Zs(N),N!==R||N.tag!==5&&N.tag!==6)&&(N=null)):(C=null,N=p),C!==N)){if(I=Kd,D="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(I=Qd,D="onPointerLeave",m="onPointerEnter",f="pointer"),R=C==null?v:pn(C),S=N==null?v:pn(N),v=new I(D,f+"leave",C,s,w),v.target=R,v.relatedTarget=S,D=null,Bs(w)===p&&(I=new I(m,f+"enter",N,s,w),I.target=S,I.relatedTarget=R,D=I),R=D,C&&N)t:{for(I=C,m=N,f=0,S=I;S;S=on(S))f++;for(S=0,D=m;D;D=on(D))S++;for(;0<f-S;)I=on(I),f--;for(;0<S-f;)m=on(m),S--;for(;f--;){if(I===m||m!==null&&I===m.alternate)break t;I=on(I),m=on(m)}I=null}else I=null;C!==null&&cu(x,v,C,I,!1),N!==null&&R!==null&&cu(x,R,N,I,!0)}}e:{if(v=p?pn(p):window,C=v.nodeName&&v.nodeName.toLowerCase(),C==="select"||C==="input"&&v.type==="file")var O=Mg;else if(tu(v))if(dp)O=Ug;else{O=zg;var F=Fg}else(C=v.nodeName)&&C.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(O=Hg);if(O&&(O=O(e,p))){cp(x,O,s,w);break e}F&&F(e,v,p),e==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&ll(v,"number",v.value)}switch(F=p?pn(p):window,e){case"focusin":(tu(F)||F.contentEditable==="true")&&(un=F,wl=p,Ai=null);break;case"focusout":Ai=wl=un=null;break;case"mousedown":bl=!0;break;case"contextmenu":case"mouseup":case"dragend":bl=!1,au(x,s,w);break;case"selectionchange":if(Yg)break;case"keydown":case"keyup":au(x,s,w)}var b;if(yc)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else dn?op(e,s)&&(g="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(g="onCompositionStart");g&&(ap&&s.locale!=="ko"&&(dn||g!=="onCompositionStart"?g==="onCompositionEnd"&&dn&&(b=rp()):(gs=w,mc="value"in gs?gs.value:gs.textContent,dn=!0)),F=ua(p,g),0<F.length&&(g=new Jd(g,e,null,s,w),x.push({event:g,listeners:F}),b?g.data=b:(b=lp(s),b!==null&&(g.data=b)))),(b=Dg?Rg(e,s):Lg(e,s))&&(p=ua(p,"onBeforeInput"),0<p.length&&(w=new Jd("onBeforeInput","beforeinput",null,s,w),x.push({event:w,listeners:p}),w.data=b))}wp(x,t)})}function Gi(e,t,s){return{instance:e,listener:t,currentTarget:s}}function ua(e,t){for(var s=t+"Capture",i=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=zi(e,s),o!=null&&i.unshift(Gi(e,o,r)),o=zi(e,t),o!=null&&i.push(Gi(e,o,r))),e=e.return}return i}function on(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,t,s,i,r){for(var o=t._reactName,l=[];s!==null&&s!==i;){var c=s,h=c.alternate,p=c.stateNode;if(h!==null&&h===i)break;c.tag===5&&p!==null&&(c=p,r?(h=zi(s,o),h!=null&&l.unshift(Gi(s,h,c))):r||(h=zi(s,o),h!=null&&l.push(Gi(s,h,c)))),s=s.return}l.length!==0&&e.push({event:t,listeners:l})}var qg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(qg,`
`).replace(Xg,"")}function Fr(e,t,s){if(t=du(t),du(e)!==t&&s)throw Error(B(425))}function ha(){}var kl=null,jl=null;function Sl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cl=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,uu=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof uu<"u"?function(e){return uu.resolve(null).then(e).catch(Qg)}:Cl;function Qg(e){setTimeout(function(){throw e})}function Oo(e,t){var s=t,i=0;do{var r=s.nextSibling;if(e.removeChild(s),r&&r.nodeType===8)if(s=r.data,s==="/$"){if(i===0){e.removeChild(r),Bi(t);return}i--}else s!=="$"&&s!=="$?"&&s!=="$!"||i++;s=r}while(s);Bi(t)}function bs(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"){if(t===0)return e;t--}else s==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Hn,$i="__reactProps$"+Hn,ss="__reactContainer$"+Hn,Tl="__reactEvents$"+Hn,Zg="__reactListeners$"+Hn,e0="__reactHandles$"+Hn;function Bs(e){var t=e[Ht];if(t)return t;for(var s=e.parentNode;s;){if(t=s[ss]||s[Ht]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=hu(e);e!==null;){if(s=e[Ht])return s;e=hu(e)}return t}e=s,s=e.parentNode}return null}function ir(e){return e=e[Ht]||e[ss],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function za(e){return e[$i]||null}var Nl=[],mn=-1;function As(e){return{current:e}}function ge(e){0>mn||(e.current=Nl[mn],Nl[mn]=null,mn--)}function pe(e,t){mn++,Nl[mn]=e.current,e.current=t}var Ps={},Ve=As(Ps),tt=As(!1),$s=Ps;function An(e,t){var s=e.type.contextTypes;if(!s)return Ps;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in s)r[o]=t[o];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function st(e){return e=e.childContextTypes,e!=null}function pa(){ge(tt),ge(Ve)}function pu(e,t,s){if(Ve.current!==Ps)throw Error(B(168));pe(Ve,t),pe(tt,s)}function kp(e,t,s){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return s;i=i.getChildContext();for(var r in i)if(!(r in t))throw Error(B(108,Ff(e)||"Unknown",r));return je({},s,i)}function ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ps,$s=Ve.current,pe(Ve,e),pe(tt,tt.current),!0}function mu(e,t,s){var i=e.stateNode;if(!i)throw Error(B(169));s?(e=kp(e,t,$s),i.__reactInternalMemoizedMergedChildContext=e,ge(tt),ge(Ve),pe(Ve,e)):ge(tt),pe(tt,s)}var qt=null,Ha=!1,_o=!1;function jp(e){qt===null?qt=[e]:qt.push(e)}function t0(e){Ha=!0,jp(e)}function Is(){if(!_o&&qt!==null){_o=!0;var e=0,t=ce;try{var s=qt;for(ce=1;e<s.length;e++){var i=s[e];do i=i(!0);while(i!==null)}qt=null,Ha=!1}catch(r){throw qt!==null&&(qt=qt.slice(e+1)),qh(dc,Is),r}finally{ce=t,_o=!1}}return null}var fn=[],gn=0,fa=null,ga=0,mt=[],ft=0,qs=null,Xt=1,Kt="";function Hs(e,t){fn[gn++]=ga,fn[gn++]=fa,fa=e,ga=t}function Sp(e,t,s){mt[ft++]=Xt,mt[ft++]=Kt,mt[ft++]=qs,qs=e;var i=Xt;e=Kt;var r=32-It(i)-1;i&=~(1<<r),s+=1;var o=32-It(t)+r;if(30<o){var l=r-r%5;o=(i&(1<<l)-1).toString(32),i>>=l,r-=l,Xt=1<<32-It(t)+r|s<<r|i,Kt=o+e}else Xt=1<<o|s<<r|i,Kt=e}function vc(e){e.return!==null&&(Hs(e,1),Sp(e,1,0))}function wc(e){for(;e===fa;)fa=fn[--gn],fn[gn]=null,ga=fn[--gn],fn[gn]=null;for(;e===qs;)qs=mt[--ft],mt[ft]=null,Kt=mt[--ft],mt[ft]=null,Xt=mt[--ft],mt[ft]=null}var lt=null,ot=null,xe=!1,St=null;function Cp(e,t){var s=gt(5,null,null,0);s.elementType="DELETED",s.stateNode=t,s.return=e,t=e.deletions,t===null?(e.deletions=[s],e.flags|=16):t.push(s)}function fu(e,t){switch(e.tag){case 5:var s=e.type;return t=t.nodeType!==1||s.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,ot=bs(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,ot=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(s=qs!==null?{id:Xt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:s,retryLane:1073741824},s=gt(18,null,null,0),s.stateNode=t,s.return=e,e.child=s,lt=e,ot=null,!0):!1;default:return!1}}function Pl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function El(e){if(xe){var t=ot;if(t){var s=t;if(!fu(e,t)){if(Pl(e))throw Error(B(418));t=bs(s.nextSibling);var i=lt;t&&fu(e,t)?Cp(i,s):(e.flags=e.flags&-4097|2,xe=!1,lt=e)}}else{if(Pl(e))throw Error(B(418));e.flags=e.flags&-4097|2,xe=!1,lt=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function zr(e){if(e!==lt)return!1;if(!xe)return gu(e),xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Sl(e.type,e.memoizedProps)),t&&(t=ot)){if(Pl(e))throw Tp(),Error(B(418));for(;t;)Cp(e,t),t=bs(t.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"){if(t===0){ot=bs(e.nextSibling);break e}t--}else s!=="$"&&s!=="$!"&&s!=="$?"||t++}e=e.nextSibling}ot=null}}else ot=lt?bs(e.stateNode.nextSibling):null;return!0}function Tp(){for(var e=ot;e;)e=bs(e.nextSibling)}function In(){ot=lt=null,xe=!1}function bc(e){St===null?St=[e]:St.push(e)}var s0=as.ReactCurrentBatchConfig;function vi(e,t,s){if(e=s.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(B(309));var i=s.stateNode}if(!i)throw Error(B(147,e));var r=i,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var c=r.refs;l===null?delete c[o]:c[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(B(284));if(!s._owner)throw Error(B(290,e))}return e}function Hr(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function Np(e){function t(m,f){if(e){var S=m.deletions;S===null?(m.deletions=[f],m.flags|=16):S.push(f)}}function s(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function i(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function r(m,f){return m=Cs(m,f),m.index=0,m.sibling=null,m}function o(m,f,S){return m.index=S,e?(S=m.alternate,S!==null?(S=S.index,S<f?(m.flags|=2,f):S):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,f,S,D){return f===null||f.tag!==6?(f=Wo(S,m.mode,D),f.return=m,f):(f=r(f,S),f.return=m,f)}function h(m,f,S,D){var O=S.type;return O===cn?w(m,f,S.props.children,D,S.key):f!==null&&(f.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===hs&&yu(O)===f.type)?(D=r(f,S.props),D.ref=vi(m,f,S),D.return=m,D):(D=na(S.type,S.key,S.props,null,m.mode,D),D.ref=vi(m,f,S),D.return=m,D)}function p(m,f,S,D){return f===null||f.tag!==4||f.stateNode.containerInfo!==S.containerInfo||f.stateNode.implementation!==S.implementation?(f=Yo(S,m.mode,D),f.return=m,f):(f=r(f,S.children||[]),f.return=m,f)}function w(m,f,S,D,O){return f===null||f.tag!==7?(f=Gs(S,m.mode,D,O),f.return=m,f):(f=r(f,S),f.return=m,f)}function x(m,f,S){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wo(""+f,m.mode,S),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Er:return S=na(f.type,f.key,f.props,null,m.mode,S),S.ref=vi(m,null,f),S.return=m,S;case ln:return f=Yo(f,m.mode,S),f.return=m,f;case hs:var D=f._init;return x(m,D(f._payload),S)}if(ji(f)||mi(f))return f=Gs(f,m.mode,S,null),f.return=m,f;Hr(m,f)}return null}function v(m,f,S,D){var O=f!==null?f.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:c(m,f,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Er:return S.key===O?h(m,f,S,D):null;case ln:return S.key===O?p(m,f,S,D):null;case hs:return O=S._init,v(m,f,O(S._payload),D)}if(ji(S)||mi(S))return O!==null?null:w(m,f,S,D,null);Hr(m,S)}return null}function C(m,f,S,D,O){if(typeof D=="string"&&D!==""||typeof D=="number")return m=m.get(S)||null,c(f,m,""+D,O);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Er:return m=m.get(D.key===null?S:D.key)||null,h(f,m,D,O);case ln:return m=m.get(D.key===null?S:D.key)||null,p(f,m,D,O);case hs:var F=D._init;return C(m,f,S,F(D._payload),O)}if(ji(D)||mi(D))return m=m.get(S)||null,w(f,m,D,O,null);Hr(f,D)}return null}function N(m,f,S,D){for(var O=null,F=null,b=f,g=f=0,T=null;b!==null&&g<S.length;g++){b.index>g?(T=b,b=null):T=b.sibling;var j=v(m,b,S[g],D);if(j===null){b===null&&(b=T);break}e&&b&&j.alternate===null&&t(m,b),f=o(j,f,g),F===null?O=j:F.sibling=j,F=j,b=T}if(g===S.length)return s(m,b),xe&&Hs(m,g),O;if(b===null){for(;g<S.length;g++)b=x(m,S[g],D),b!==null&&(f=o(b,f,g),F===null?O=b:F.sibling=b,F=b);return xe&&Hs(m,g),O}for(b=i(m,b);g<S.length;g++)T=C(b,m,g,S[g],D),T!==null&&(e&&T.alternate!==null&&b.delete(T.key===null?g:T.key),f=o(T,f,g),F===null?O=T:F.sibling=T,F=T);return e&&b.forEach(function(P){return t(m,P)}),xe&&Hs(m,g),O}function I(m,f,S,D){var O=mi(S);if(typeof O!="function")throw Error(B(150));if(S=O.call(S),S==null)throw Error(B(151));for(var F=O=null,b=f,g=f=0,T=null,j=S.next();b!==null&&!j.done;g++,j=S.next()){b.index>g?(T=b,b=null):T=b.sibling;var P=v(m,b,j.value,D);if(P===null){b===null&&(b=T);break}e&&b&&P.alternate===null&&t(m,b),f=o(P,f,g),F===null?O=P:F.sibling=P,F=P,b=T}if(j.done)return s(m,b),xe&&Hs(m,g),O;if(b===null){for(;!j.done;g++,j=S.next())j=x(m,j.value,D),j!==null&&(f=o(j,f,g),F===null?O=j:F.sibling=j,F=j);return xe&&Hs(m,g),O}for(b=i(m,b);!j.done;g++,j=S.next())j=C(b,m,g,j.value,D),j!==null&&(e&&j.alternate!==null&&b.delete(j.key===null?g:j.key),f=o(j,f,g),F===null?O=j:F.sibling=j,F=j);return e&&b.forEach(function(E){return t(m,E)}),xe&&Hs(m,g),O}function R(m,f,S,D){if(typeof S=="object"&&S!==null&&S.type===cn&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Er:e:{for(var O=S.key,F=f;F!==null;){if(F.key===O){if(O=S.type,O===cn){if(F.tag===7){s(m,F.sibling),f=r(F,S.props.children),f.return=m,m=f;break e}}else if(F.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===hs&&yu(O)===F.type){s(m,F.sibling),f=r(F,S.props),f.ref=vi(m,F,S),f.return=m,m=f;break e}s(m,F);break}else t(m,F);F=F.sibling}S.type===cn?(f=Gs(S.props.children,m.mode,D,S.key),f.return=m,m=f):(D=na(S.type,S.key,S.props,null,m.mode,D),D.ref=vi(m,f,S),D.return=m,m=D)}return l(m);case ln:e:{for(F=S.key;f!==null;){if(f.key===F)if(f.tag===4&&f.stateNode.containerInfo===S.containerInfo&&f.stateNode.implementation===S.implementation){s(m,f.sibling),f=r(f,S.children||[]),f.return=m,m=f;break e}else{s(m,f);break}else t(m,f);f=f.sibling}f=Yo(S,m.mode,D),f.return=m,m=f}return l(m);case hs:return F=S._init,R(m,f,F(S._payload),D)}if(ji(S))return N(m,f,S,D);if(mi(S))return I(m,f,S,D);Hr(m,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,f!==null&&f.tag===6?(s(m,f.sibling),f=r(f,S),f.return=m,m=f):(s(m,f),f=Wo(S,m.mode,D),f.return=m,m=f),l(m)):s(m,f)}return R}var Dn=Np(!0),Pp=Np(!1),ya=As(null),xa=null,yn=null,kc=null;function jc(){kc=yn=xa=null}function Sc(e){var t=ya.current;ge(ya),e._currentValue=t}function Al(e,t,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===s)break;e=e.return}}function Cn(e,t){xa=e,kc=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(kc!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(xa===null)throw Error(B(308));yn=e,xa.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Ws=null;function Cc(e){Ws===null?Ws=[e]:Ws.push(e)}function Ep(e,t,s,i){var r=t.interleaved;return r===null?(s.next=s,Cc(t)):(s.next=r.next,r.next=s),t.interleaved=s,ns(e,i)}function ns(e,t){e.lanes|=t;var s=e.alternate;for(s!==null&&(s.lanes|=t),s=e,e=e.return;e!==null;)e.childLanes|=t,s=e.alternate,s!==null&&(s.childLanes|=t),s=e,e=e.return;return s.tag===3?s.stateNode:null}var ps=!1;function Tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ap(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function es(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ks(e,t,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,oe&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,ns(e,s)}return r=i.interleaved,r===null?(t.next=t,Cc(i)):(t.next=r.next,r.next=t),i.interleaved=t,ns(e,s)}function Jr(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,uc(e,s)}}function xu(e,t){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var r=null,o=null;if(s=s.firstBaseUpdate,s!==null){do{var l={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};o===null?r=o=l:o=o.next=l,s=s.next}while(s!==null);o===null?r=o=t:o=o.next=t}else r=o=t;s={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}function va(e,t,s,i){var r=e.updateQueue;ps=!1;var o=r.firstBaseUpdate,l=r.lastBaseUpdate,c=r.shared.pending;if(c!==null){r.shared.pending=null;var h=c,p=h.next;h.next=null,l===null?o=p:l.next=p,l=h;var w=e.alternate;w!==null&&(w=w.updateQueue,c=w.lastBaseUpdate,c!==l&&(c===null?w.firstBaseUpdate=p:c.next=p,w.lastBaseUpdate=h))}if(o!==null){var x=r.baseState;l=0,w=p=h=null,c=o;do{var v=c.lane,C=c.eventTime;if((i&v)===v){w!==null&&(w=w.next={eventTime:C,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var N=e,I=c;switch(v=t,C=s,I.tag){case 1:if(N=I.payload,typeof N=="function"){x=N.call(C,x,v);break e}x=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=I.payload,v=typeof N=="function"?N.call(C,x,v):N,v==null)break e;x=je({},x,v);break e;case 2:ps=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,v=r.effects,v===null?r.effects=[c]:v.push(c))}else C={eventTime:C,lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},w===null?(p=w=C,h=x):w=w.next=C,l|=v;if(c=c.next,c===null){if(c=r.shared.pending,c===null)break;v=c,c=v.next,v.next=null,r.lastBaseUpdate=v,r.shared.pending=null}}while(!0);if(w===null&&(h=x),r.baseState=h,r.firstBaseUpdate=p,r.lastBaseUpdate=w,t=r.shared.interleaved,t!==null){r=t;do l|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);Ks|=l,e.lanes=l,e.memoizedState=x}}function vu(e,t,s){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],r=i.callback;if(r!==null){if(i.callback=null,i=s,typeof r!="function")throw Error(B(191,r));r.call(i)}}}var rr={},Bt=As(rr),qi=As(rr),Xi=As(rr);function Ys(e){if(e===rr)throw Error(B(174));return e}function Nc(e,t){switch(pe(Xi,t),pe(qi,e),pe(Bt,rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}ge(Bt),pe(Bt,t)}function Rn(){ge(Bt),ge(qi),ge(Xi)}function Ip(e){Ys(Xi.current);var t=Ys(Bt.current),s=dl(t,e.type);t!==s&&(pe(qi,e),pe(Bt,s))}function Pc(e){qi.current===e&&(ge(Bt),ge(qi))}var be=As(0);function wa(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function Ec(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var Qr=as.ReactCurrentDispatcher,Fo=as.ReactCurrentBatchConfig,Xs=0,ke=null,Pe=null,De=null,ba=!1,Ii=!1,Ki=0,n0=0;function Be(){throw Error(B(321))}function Ac(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Rt(e[s],t[s]))return!1;return!0}function Ic(e,t,s,i,r,o){if(Xs=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Qr.current=e===null||e.memoizedState===null?o0:l0,e=s(i,r),Ii){o=0;do{if(Ii=!1,Ki=0,25<=o)throw Error(B(301));o+=1,De=Pe=null,t.updateQueue=null,Qr.current=c0,e=s(i,r)}while(Ii)}if(Qr.current=ka,t=Pe!==null&&Pe.next!==null,Xs=0,De=Pe=ke=null,ba=!1,t)throw Error(B(300));return e}function Dc(){var e=Ki!==0;return Ki=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ke.memoizedState=De=e:De=De.next=e,De}function vt(){if(Pe===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=De===null?ke.memoizedState:De.next;if(t!==null)De=t,Pe=e;else{if(e===null)throw Error(B(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},De===null?ke.memoizedState=De=e:De=De.next=e}return De}function Ji(e,t){return typeof t=="function"?t(e):t}function zo(e){var t=vt(),s=t.queue;if(s===null)throw Error(B(311));s.lastRenderedReducer=e;var i=Pe,r=i.baseQueue,o=s.pending;if(o!==null){if(r!==null){var l=r.next;r.next=o.next,o.next=l}i.baseQueue=r=o,s.pending=null}if(r!==null){o=r.next,i=i.baseState;var c=l=null,h=null,p=o;do{var w=p.lane;if((Xs&w)===w)h!==null&&(h=h.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),i=p.hasEagerState?p.eagerState:e(i,p.action);else{var x={lane:w,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};h===null?(c=h=x,l=i):h=h.next=x,ke.lanes|=w,Ks|=w}p=p.next}while(p!==null&&p!==o);h===null?l=i:h.next=c,Rt(i,t.memoizedState)||(et=!0),t.memoizedState=i,t.baseState=l,t.baseQueue=h,s.lastRenderedState=i}if(e=s.interleaved,e!==null){r=e;do o=r.lane,ke.lanes|=o,Ks|=o,r=r.next;while(r!==e)}else r===null&&(s.lanes=0);return[t.memoizedState,s.dispatch]}function Ho(e){var t=vt(),s=t.queue;if(s===null)throw Error(B(311));s.lastRenderedReducer=e;var i=s.dispatch,r=s.pending,o=t.memoizedState;if(r!==null){s.pending=null;var l=r=r.next;do o=e(o,l.action),l=l.next;while(l!==r);Rt(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),s.lastRenderedState=o}return[o,i]}function Dp(){}function Rp(e,t){var s=ke,i=vt(),r=t(),o=!Rt(i.memoizedState,r);if(o&&(i.memoizedState=r,et=!0),i=i.queue,Rc(_p.bind(null,s,i,e),[e]),i.getSnapshot!==t||o||De!==null&&De.memoizedState.tag&1){if(s.flags|=2048,Qi(9,Op.bind(null,s,i,r,t),void 0,null),Re===null)throw Error(B(349));Xs&30||Lp(s,t,r)}return r}function Lp(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Op(e,t,s,i){t.value=s,t.getSnapshot=i,Mp(t)&&Fp(e)}function _p(e,t,s){return s(function(){Mp(t)&&Fp(e)})}function Mp(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Rt(e,s)}catch{return!0}}function Fp(e){var t=ns(e,1);t!==null&&Dt(t,e,1,-1)}function wu(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},t.queue=e,e=e.dispatch=a0.bind(null,ke,e),[t.memoizedState,e]}function Qi(e,t,s,i){return e={tag:e,create:t,destroy:s,deps:i,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(s=t.lastEffect,s===null?t.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,t.lastEffect=e)),e}function zp(){return vt().memoizedState}function Zr(e,t,s,i){var r=Ft();ke.flags|=e,r.memoizedState=Qi(1|t,s,void 0,i===void 0?null:i)}function Ua(e,t,s,i){var r=vt();i=i===void 0?null:i;var o=void 0;if(Pe!==null){var l=Pe.memoizedState;if(o=l.destroy,i!==null&&Ac(i,l.deps)){r.memoizedState=Qi(t,s,o,i);return}}ke.flags|=e,r.memoizedState=Qi(1|t,s,o,i)}function bu(e,t){return Zr(8390656,8,e,t)}function Rc(e,t){return Ua(2048,8,e,t)}function Hp(e,t){return Ua(4,2,e,t)}function Up(e,t){return Ua(4,4,e,t)}function Bp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wp(e,t,s){return s=s!=null?s.concat([e]):null,Ua(4,4,Bp.bind(null,t,e),s)}function Lc(){}function Yp(e,t){var s=vt();t=t===void 0?null:t;var i=s.memoizedState;return i!==null&&t!==null&&Ac(t,i[1])?i[0]:(s.memoizedState=[e,t],e)}function Vp(e,t){var s=vt();t=t===void 0?null:t;var i=s.memoizedState;return i!==null&&t!==null&&Ac(t,i[1])?i[0]:(e=e(),s.memoizedState=[e,t],e)}function Gp(e,t,s){return Xs&21?(Rt(s,t)||(s=Jh(),ke.lanes|=s,Ks|=s,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=s)}function i0(e,t){var s=ce;ce=s!==0&&4>s?s:4,e(!0);var i=Fo.transition;Fo.transition={};try{e(!1),t()}finally{ce=s,Fo.transition=i}}function $p(){return vt().memoizedState}function r0(e,t,s){var i=Ss(e);if(s={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null},qp(e))Xp(t,s);else if(s=Ep(e,t,s,i),s!==null){var r=$e();Dt(s,e,i,r),Kp(s,t,i)}}function a0(e,t,s){var i=Ss(e),r={lane:i,action:s,hasEagerState:!1,eagerState:null,next:null};if(qp(e))Xp(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,c=o(l,s);if(r.hasEagerState=!0,r.eagerState=c,Rt(c,l)){var h=t.interleaved;h===null?(r.next=r,Cc(t)):(r.next=h.next,h.next=r),t.interleaved=r;return}}catch{}finally{}s=Ep(e,t,r,i),s!==null&&(r=$e(),Dt(s,e,i,r),Kp(s,t,i))}}function qp(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Xp(e,t){Ii=ba=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function Kp(e,t,s){if(s&4194240){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,uc(e,s)}}var ka={readContext:xt,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useInsertionEffect:Be,useLayoutEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useMutableSource:Be,useSyncExternalStore:Be,useId:Be,unstable_isNewReconciler:!1},o0={readContext:xt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:bu,useImperativeHandle:function(e,t,s){return s=s!=null?s.concat([e]):null,Zr(4194308,4,Bp.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zr(4,2,e,t)},useMemo:function(e,t){var s=Ft();return t=t===void 0?null:t,e=e(),s.memoizedState=[e,t],e},useReducer:function(e,t,s){var i=Ft();return t=s!==void 0?s(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=r0.bind(null,ke,e),[i.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:wu,useDebugValue:Lc,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=wu(!1),t=e[0];return e=i0.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,s){var i=ke,r=Ft();if(xe){if(s===void 0)throw Error(B(407));s=s()}else{if(s=t(),Re===null)throw Error(B(349));Xs&30||Lp(i,t,s)}r.memoizedState=s;var o={value:s,getSnapshot:t};return r.queue=o,bu(_p.bind(null,i,o,e),[e]),i.flags|=2048,Qi(9,Op.bind(null,i,o,s,t),void 0,null),s},useId:function(){var e=Ft(),t=Re.identifierPrefix;if(xe){var s=Kt,i=Xt;s=(i&~(1<<32-It(i)-1)).toString(32)+s,t=":"+t+"R"+s,s=Ki++,0<s&&(t+="H"+s.toString(32)),t+=":"}else s=n0++,t=":"+t+"r"+s.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},l0={readContext:xt,useCallback:Yp,useContext:xt,useEffect:Rc,useImperativeHandle:Wp,useInsertionEffect:Hp,useLayoutEffect:Up,useMemo:Vp,useReducer:zo,useRef:zp,useState:function(){return zo(Ji)},useDebugValue:Lc,useDeferredValue:function(e){var t=vt();return Gp(t,Pe.memoizedState,e)},useTransition:function(){var e=zo(Ji)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Dp,useSyncExternalStore:Rp,useId:$p,unstable_isNewReconciler:!1},c0={readContext:xt,useCallback:Yp,useContext:xt,useEffect:Rc,useImperativeHandle:Wp,useInsertionEffect:Hp,useLayoutEffect:Up,useMemo:Vp,useReducer:Ho,useRef:zp,useState:function(){return Ho(Ji)},useDebugValue:Lc,useDeferredValue:function(e){var t=vt();return Pe===null?t.memoizedState=e:Gp(t,Pe.memoizedState,e)},useTransition:function(){var e=Ho(Ji)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Dp,useSyncExternalStore:Rp,useId:$p,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=je({},t),e=e.defaultProps;for(var s in e)t[s]===void 0&&(t[s]=e[s]);return t}return t}function Il(e,t,s,i){t=e.memoizedState,s=s(i,t),s=s==null?t:je({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ba={isMounted:function(e){return(e=e._reactInternals)?Zs(e)===e:!1},enqueueSetState:function(e,t,s){e=e._reactInternals;var i=$e(),r=Ss(e),o=es(i,r);o.payload=t,s!=null&&(o.callback=s),t=ks(e,o,r),t!==null&&(Dt(t,e,r,i),Jr(t,e,r))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var i=$e(),r=Ss(e),o=es(i,r);o.tag=1,o.payload=t,s!=null&&(o.callback=s),t=ks(e,o,r),t!==null&&(Dt(t,e,r,i),Jr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=$e(),i=Ss(e),r=es(s,i);r.tag=2,t!=null&&(r.callback=t),t=ks(e,r,i),t!==null&&(Dt(t,e,i,s),Jr(t,e,i))}};function ku(e,t,s,i,r,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,l):t.prototype&&t.prototype.isPureReactComponent?!Yi(s,i)||!Yi(r,o):!0}function Jp(e,t,s){var i=!1,r=Ps,o=t.contextType;return typeof o=="object"&&o!==null?o=xt(o):(r=st(t)?$s:Ve.current,i=t.contextTypes,o=(i=i!=null)?An(e,r):Ps),t=new t(s,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function ju(e,t,s,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,i),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function Dl(e,t,s,i){var r=e.stateNode;r.props=s,r.state=e.memoizedState,r.refs={},Tc(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=xt(o):(o=st(t)?$s:Ve.current,r.context=An(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Il(e,t,o,s),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&Ba.enqueueReplaceState(r,r.state,null),va(e,s,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ln(e,t){try{var s="",i=t;do s+=Mf(i),i=i.return;while(i);var r=s}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function Uo(e,t,s){return{value:e,source:null,stack:s??null,digest:t??null}}function Rl(e,t){try{console.error(t.value)}catch(s){setTimeout(function(){throw s})}}var d0=typeof WeakMap=="function"?WeakMap:Map;function Qp(e,t,s){s=es(-1,s),s.tag=3,s.payload={element:null};var i=t.value;return s.callback=function(){Sa||(Sa=!0,Wl=i),Rl(e,t)},s}function Zp(e,t,s){s=es(-1,s),s.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=t.value;s.payload=function(){return i(r)},s.callback=function(){Rl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(s.callback=function(){Rl(e,t),typeof i!="function"&&(js===null?js=new Set([this]):js.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),s}function Su(e,t,s){var i=e.pingCache;if(i===null){i=e.pingCache=new d0;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(s)||(r.add(s),e=S0.bind(null,e,t,s),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tu(e,t,s,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(t=es(-1,1),t.tag=2,ks(s,t,1))),s.lanes|=1),e)}var u0=as.ReactCurrentOwner,et=!1;function Ge(e,t,s,i){t.child=e===null?Pp(t,null,s,i):Dn(t,e.child,s,i)}function Nu(e,t,s,i,r){s=s.render;var o=t.ref;return Cn(t,r),i=Ic(e,t,s,i,o,r),s=Dc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,is(e,t,r)):(xe&&s&&vc(t),t.flags|=1,Ge(e,t,i,r),t.child)}function Pu(e,t,s,i,r){if(e===null){var o=s.type;return typeof o=="function"&&!Bc(o)&&o.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(t.tag=15,t.type=o,em(e,t,o,i,r)):(e=na(s.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var l=o.memoizedProps;if(s=s.compare,s=s!==null?s:Yi,s(l,i)&&e.ref===t.ref)return is(e,t,r)}return t.flags|=1,e=Cs(o,i),e.ref=t.ref,e.return=t,t.child=e}function em(e,t,s,i,r){if(e!==null){var o=e.memoizedProps;if(Yi(o,i)&&e.ref===t.ref)if(et=!1,t.pendingProps=i=o,(e.lanes&r)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,is(e,t,r)}return Ll(e,t,s,i,r)}function tm(e,t,s){var i=t.pendingProps,r=i.children,o=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(vn,rt),rt|=s;else{if(!(s&1073741824))return e=o!==null?o.baseLanes|s:s,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,pe(vn,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:s,pe(vn,rt),rt|=i}else o!==null?(i=o.baseLanes|s,t.memoizedState=null):i=s,pe(vn,rt),rt|=i;return Ge(e,t,r,s),t.child}function sm(e,t){var s=t.ref;(e===null&&s!==null||e!==null&&e.ref!==s)&&(t.flags|=512,t.flags|=2097152)}function Ll(e,t,s,i,r){var o=st(s)?$s:Ve.current;return o=An(t,o),Cn(t,r),s=Ic(e,t,s,i,o,r),i=Dc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,is(e,t,r)):(xe&&i&&vc(t),t.flags|=1,Ge(e,t,s,r),t.child)}function Eu(e,t,s,i,r){if(st(s)){var o=!0;ma(t)}else o=!1;if(Cn(t,r),t.stateNode===null)ea(e,t),Jp(t,s,i),Dl(t,s,i,r),i=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var h=l.context,p=s.contextType;typeof p=="object"&&p!==null?p=xt(p):(p=st(s)?$s:Ve.current,p=An(t,p));var w=s.getDerivedStateFromProps,x=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function";x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==i||h!==p)&&ju(t,l,i,p),ps=!1;var v=t.memoizedState;l.state=v,va(t,i,l,r),h=t.memoizedState,c!==i||v!==h||tt.current||ps?(typeof w=="function"&&(Il(t,s,w,i),h=t.memoizedState),(c=ps||ku(t,s,c,i,v,h,p))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),l.props=i,l.state=h,l.context=p,i=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,Ap(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:kt(t.type,c),l.props=p,x=t.pendingProps,v=l.context,h=s.contextType,typeof h=="object"&&h!==null?h=xt(h):(h=st(s)?$s:Ve.current,h=An(t,h));var C=s.getDerivedStateFromProps;(w=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==x||v!==h)&&ju(t,l,i,h),ps=!1,v=t.memoizedState,l.state=v,va(t,i,l,r);var N=t.memoizedState;c!==x||v!==N||tt.current||ps?(typeof C=="function"&&(Il(t,s,C,i),N=t.memoizedState),(p=ps||ku(t,s,p,i,v,N,h)||!1)?(w||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,N,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,N,h)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),l.props=i,l.state=N,l.context=h,i=p):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),i=!1)}return Ol(e,t,s,i,o,r)}function Ol(e,t,s,i,r,o){sm(e,t);var l=(t.flags&128)!==0;if(!i&&!l)return r&&mu(t,s,!1),is(e,t,o);i=t.stateNode,u0.current=t;var c=l&&typeof s.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&l?(t.child=Dn(t,e.child,null,o),t.child=Dn(t,null,c,o)):Ge(e,t,c,o),t.memoizedState=i.state,r&&mu(t,s,!0),t.child}function nm(e){var t=e.stateNode;t.pendingContext?pu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pu(e,t.context,!1),Nc(e,t.containerInfo)}function Au(e,t,s,i,r){return In(),bc(r),t.flags|=256,Ge(e,t,s,i),t.child}var _l={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function im(e,t,s){var i=t.pendingProps,r=be.current,o=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(r&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),pe(be,r&1),e===null)return El(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=i.children,e=i.fallback,o?(i=t.mode,o=t.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Va(l,i,0,null),e=Gs(e,i,s,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ml(s),t.memoizedState=_l,e):Oc(t,l));if(r=e.memoizedState,r!==null&&(c=r.dehydrated,c!==null))return h0(e,t,l,i,c,r,s);if(o){o=i.fallback,l=t.mode,r=e.child,c=r.sibling;var h={mode:"hidden",children:i.children};return!(l&1)&&t.child!==r?(i=t.child,i.childLanes=0,i.pendingProps=h,t.deletions=null):(i=Cs(r,h),i.subtreeFlags=r.subtreeFlags&14680064),c!==null?o=Cs(c,o):(o=Gs(o,l,s,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,i=o,o=t.child,l=e.child.memoizedState,l=l===null?Ml(s):{baseLanes:l.baseLanes|s,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~s,t.memoizedState=_l,i}return o=e.child,e=o.sibling,i=Cs(o,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=s),i.return=t,i.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=i,t.memoizedState=null,i}function Oc(e,t){return t=Va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ur(e,t,s,i){return i!==null&&bc(i),Dn(t,e.child,null,s),e=Oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function h0(e,t,s,i,r,o,l){if(s)return t.flags&256?(t.flags&=-257,i=Uo(Error(B(422))),Ur(e,t,l,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=i.fallback,r=t.mode,i=Va({mode:"visible",children:i.children},r,0,null),o=Gs(o,r,l,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Dn(t,e.child,null,l),t.child.memoizedState=Ml(l),t.memoizedState=_l,o);if(!(t.mode&1))return Ur(e,t,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(B(419)),i=Uo(o,i,void 0),Ur(e,t,l,i)}if(c=(l&e.childLanes)!==0,et||c){if(i=Re,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,ns(e,r),Dt(i,e,r,-1))}return Uc(),i=Uo(Error(B(421))),Ur(e,t,l,i)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=C0.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,ot=bs(r.nextSibling),lt=t,xe=!0,St=null,e!==null&&(mt[ft++]=Xt,mt[ft++]=Kt,mt[ft++]=qs,Xt=e.id,Kt=e.overflow,qs=t),t=Oc(t,i.children),t.flags|=4096,t)}function Iu(e,t,s){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Al(e.return,t,s)}function Bo(e,t,s,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=s,o.tailMode=r)}function rm(e,t,s){var i=t.pendingProps,r=i.revealOrder,o=i.tail;if(Ge(e,t,i.children,s),i=be.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Iu(e,s,t);else if(e.tag===19)Iu(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(pe(be,i),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(s=t.child,r=null;s!==null;)e=s.alternate,e!==null&&wa(e)===null&&(r=s),s=s.sibling;s=r,s===null?(r=t.child,t.child=null):(r=s.sibling,s.sibling=null),Bo(t,!1,r,s,o);break;case"backwards":for(s=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&wa(e)===null){t.child=r;break}e=r.sibling,r.sibling=s,s=r,r=e}Bo(t,!0,s,null,o);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function is(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Ks|=t.lanes,!(s&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,s=Cs(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Cs(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function p0(e,t,s){switch(t.tag){case 3:nm(t),In();break;case 5:Ip(t);break;case 1:st(t.type)&&ma(t);break;case 4:Nc(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,r=t.memoizedProps.value;pe(ya,i._currentValue),i._currentValue=r;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(pe(be,be.current&1),t.flags|=128,null):s&t.child.childLanes?im(e,t,s):(pe(be,be.current&1),e=is(e,t,s),e!==null?e.sibling:null);pe(be,be.current&1);break;case 19:if(i=(s&t.childLanes)!==0,e.flags&128){if(i)return rm(e,t,s);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pe(be,be.current),i)break;return null;case 22:case 23:return t.lanes=0,tm(e,t,s)}return is(e,t,s)}var am,Fl,om,lm;am=function(e,t){for(var s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return;s=s.return}s.sibling.return=s.return,s=s.sibling}};Fl=function(){};om=function(e,t,s,i){var r=e.memoizedProps;if(r!==i){e=t.stateNode,Ys(Bt.current);var o=null;switch(s){case"input":r=al(e,r),i=al(e,i),o=[];break;case"select":r=je({},r,{value:void 0}),i=je({},i,{value:void 0}),o=[];break;case"textarea":r=cl(e,r),i=cl(e,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=ha)}ul(s,i);var l;s=null;for(p in r)if(!i.hasOwnProperty(p)&&r.hasOwnProperty(p)&&r[p]!=null)if(p==="style"){var c=r[p];for(l in c)c.hasOwnProperty(l)&&(s||(s={}),s[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Mi.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in i){var h=i[p];if(c=r!=null?r[p]:void 0,i.hasOwnProperty(p)&&h!==c&&(h!=null||c!=null))if(p==="style")if(c){for(l in c)!c.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(s||(s={}),s[l]="");for(l in h)h.hasOwnProperty(l)&&c[l]!==h[l]&&(s||(s={}),s[l]=h[l])}else s||(o||(o=[]),o.push(p,s)),s=h;else p==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,c=c?c.__html:void 0,h!=null&&c!==h&&(o=o||[]).push(p,h)):p==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(p,""+h):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Mi.hasOwnProperty(p)?(h!=null&&p==="onScroll"&&fe("scroll",e),o||c===h||(o=[])):(o=o||[]).push(p,h))}s&&(o=o||[]).push("style",s);var p=o;(t.updateQueue=p)&&(t.flags|=4)}};lm=function(e,t,s,i){s!==i&&(t.flags|=4)};function wi(e,t){if(!xe)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(t)for(var r=e.child;r!==null;)s|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)s|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=s,t}function m0(e,t,s){var i=t.pendingProps;switch(wc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return st(t.type)&&pa(),We(t),null;case 3:return i=t.stateNode,Rn(),ge(tt),ge(Ve),Ec(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,St!==null&&(Gl(St),St=null))),Fl(e,t),We(t),null;case 5:Pc(t);var r=Ys(Xi.current);if(s=t.type,e!==null&&t.stateNode!=null)om(e,t,s,i,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(B(166));return We(t),null}if(e=Ys(Bt.current),zr(t)){i=t.stateNode,s=t.type;var o=t.memoizedProps;switch(i[Ht]=t,i[$i]=o,e=(t.mode&1)!==0,s){case"dialog":fe("cancel",i),fe("close",i);break;case"iframe":case"object":case"embed":fe("load",i);break;case"video":case"audio":for(r=0;r<Ci.length;r++)fe(Ci[r],i);break;case"source":fe("error",i);break;case"img":case"image":case"link":fe("error",i),fe("load",i);break;case"details":fe("toggle",i);break;case"input":Hd(i,o),fe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},fe("invalid",i);break;case"textarea":Bd(i,o),fe("invalid",i)}ul(s,o),r=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?i.textContent!==c&&(o.suppressHydrationWarning!==!0&&Fr(i.textContent,c,e),r=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&Fr(i.textContent,c,e),r=["children",""+c]):Mi.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&fe("scroll",i)}switch(s){case"input":Ar(i),Ud(i,o,!0);break;case"textarea":Ar(i),Wd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=ha)}i=r,t.updateQueue=i,i!==null&&(t.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_h(s)),e==="http://www.w3.org/1999/xhtml"?s==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=l.createElement(s,{is:i.is}):(e=l.createElement(s),s==="select"&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,s),e[Ht]=t,e[$i]=i,am(e,t,!1,!1),t.stateNode=e;e:{switch(l=hl(s,i),s){case"dialog":fe("cancel",e),fe("close",e),r=i;break;case"iframe":case"object":case"embed":fe("load",e),r=i;break;case"video":case"audio":for(r=0;r<Ci.length;r++)fe(Ci[r],e);r=i;break;case"source":fe("error",e),r=i;break;case"img":case"image":case"link":fe("error",e),fe("load",e),r=i;break;case"details":fe("toggle",e),r=i;break;case"input":Hd(e,i),r=al(e,i),fe("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=je({},i,{value:void 0}),fe("invalid",e);break;case"textarea":Bd(e,i),r=cl(e,i),fe("invalid",e);break;default:r=i}ul(s,r),c=r;for(o in c)if(c.hasOwnProperty(o)){var h=c[o];o==="style"?zh(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Mh(e,h)):o==="children"?typeof h=="string"?(s!=="textarea"||h!=="")&&Fi(e,h):typeof h=="number"&&Fi(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mi.hasOwnProperty(o)?h!=null&&o==="onScroll"&&fe("scroll",e):h!=null&&rc(e,o,h,l))}switch(s){case"input":Ar(e),Ud(e,i,!1);break;case"textarea":Ar(e),Wd(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Ns(i.value));break;case"select":e.multiple=!!i.multiple,o=i.value,o!=null?bn(e,!!i.multiple,o,!1):i.defaultValue!=null&&bn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=ha)}switch(s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)lm(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(B(166));if(s=Ys(Xi.current),Ys(Bt.current),zr(t)){if(i=t.stateNode,s=t.memoizedProps,i[Ht]=t,(o=i.nodeValue!==s)&&(e=lt,e!==null))switch(e.tag){case 3:Fr(i.nodeValue,s,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fr(i.nodeValue,s,(e.mode&1)!==0)}o&&(t.flags|=4)}else i=(s.nodeType===9?s:s.ownerDocument).createTextNode(i),i[Ht]=t,t.stateNode=i}return We(t),null;case 13:if(ge(be),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(xe&&ot!==null&&t.mode&1&&!(t.flags&128))Tp(),In(),t.flags|=98560,o=!1;else if(o=zr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Ht]=t}else In(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else St!==null&&(Gl(St),St=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=s,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||be.current&1?Ee===0&&(Ee=3):Uc())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Rn(),Fl(e,t),e===null&&Vi(t.stateNode.containerInfo),We(t),null;case 10:return Sc(t.type._context),We(t),null;case 17:return st(t.type)&&pa(),We(t),null;case 19:if(ge(be),o=t.memoizedState,o===null)return We(t),null;if(i=(t.flags&128)!==0,l=o.rendering,l===null)if(i)wi(o,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=wa(e),l!==null){for(t.flags|=128,wi(o,!1),i=l.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=s,s=t.child;s!==null;)o=s,e=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),s=s.sibling;return pe(be,be.current&1|2),t.child}e=e.sibling}o.tail!==null&&Te()>On&&(t.flags|=128,i=!0,wi(o,!1),t.lanes=4194304)}else{if(!i)if(e=wa(l),e!==null){if(t.flags|=128,i=!0,s=e.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),wi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!xe)return We(t),null}else 2*Te()-o.renderingStartTime>On&&s!==1073741824&&(t.flags|=128,i=!0,wi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(s=o.last,s!==null?s.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Te(),t.sibling=null,s=be.current,pe(be,i?s&1|2:s&1),t):(We(t),null);case 22:case 23:return Hc(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?rt&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function f0(e,t){switch(wc(t),t.tag){case 1:return st(t.type)&&pa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),ge(tt),ge(Ve),Ec(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pc(t),null;case 13:if(ge(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(be),null;case 4:return Rn(),null;case 10:return Sc(t.type._context),null;case 22:case 23:return Hc(),null;case 24:return null;default:return null}}var Br=!1,Ye=!1,g0=typeof WeakSet=="function"?WeakSet:Set,X=null;function xn(e,t){var s=e.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(i){Se(e,t,i)}else s.current=null}function zl(e,t,s){try{s()}catch(i){Se(e,t,i)}}var Du=!1;function y0(e,t){if(kl=ca,e=pp(),xc(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{s.nodeType,o.nodeType}catch{s=null;break e}var l=0,c=-1,h=-1,p=0,w=0,x=e,v=null;t:for(;;){for(var C;x!==s||r!==0&&x.nodeType!==3||(c=l+r),x!==o||i!==0&&x.nodeType!==3||(h=l+i),x.nodeType===3&&(l+=x.nodeValue.length),(C=x.firstChild)!==null;)v=x,x=C;for(;;){if(x===e)break t;if(v===s&&++p===r&&(c=l),v===o&&++w===i&&(h=l),(C=x.nextSibling)!==null)break;x=v,v=x.parentNode}x=C}s=c===-1||h===-1?null:{start:c,end:h}}else s=null}s=s||{start:0,end:0}}else s=null;for(jl={focusedElem:e,selectionRange:s},ca=!1,X=t;X!==null;)if(t=X,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,X=e;else for(;X!==null;){t=X;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var I=N.memoizedProps,R=N.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?I:kt(t.type,I),R);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(D){Se(t,t.return,D)}if(e=t.sibling,e!==null){e.return=t.return,X=e;break}X=t.return}return N=Du,Du=!1,N}function Di(e,t,s){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&zl(t,s,o)}r=r.next}while(r!==i)}}function Wa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var i=s.create;s.destroy=i()}s=s.next}while(s!==t)}}function Hl(e){var t=e.ref;if(t!==null){var s=e.stateNode;switch(e.tag){case 5:e=s;break;default:e=s}typeof t=="function"?t(e):t.current=e}}function cm(e){var t=e.alternate;t!==null&&(e.alternate=null,cm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[$i],delete t[Tl],delete t[Zg],delete t[e0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dm(e){return e.tag===5||e.tag===3||e.tag===4}function Ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.nodeType===8?s.parentNode.insertBefore(e,t):s.insertBefore(e,t):(s.nodeType===8?(t=s.parentNode,t.insertBefore(e,s)):(t=s,t.appendChild(e)),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=ha));else if(i!==4&&(e=e.child,e!==null))for(Ul(e,t,s),e=e.sibling;e!==null;)Ul(e,t,s),e=e.sibling}function Bl(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Bl(e,t,s),e=e.sibling;e!==null;)Bl(e,t,s),e=e.sibling}var Me=null,jt=!1;function us(e,t,s){for(s=s.child;s!==null;)um(e,t,s),s=s.sibling}function um(e,t,s){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Oa,s)}catch{}switch(s.tag){case 5:Ye||xn(s,t);case 6:var i=Me,r=jt;Me=null,us(e,t,s),Me=i,jt=r,Me!==null&&(jt?(e=Me,s=s.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)):Me.removeChild(s.stateNode));break;case 18:Me!==null&&(jt?(e=Me,s=s.stateNode,e.nodeType===8?Oo(e.parentNode,s):e.nodeType===1&&Oo(e,s),Bi(e)):Oo(Me,s.stateNode));break;case 4:i=Me,r=jt,Me=s.stateNode.containerInfo,jt=!0,us(e,t,s),Me=i,jt=r;break;case 0:case 11:case 14:case 15:if(!Ye&&(i=s.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&zl(s,t,l),r=r.next}while(r!==i)}us(e,t,s);break;case 1:if(!Ye&&(xn(s,t),i=s.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=s.memoizedProps,i.state=s.memoizedState,i.componentWillUnmount()}catch(c){Se(s,t,c)}us(e,t,s);break;case 21:us(e,t,s);break;case 22:s.mode&1?(Ye=(i=Ye)||s.memoizedState!==null,us(e,t,s),Ye=i):us(e,t,s);break;default:us(e,t,s)}}function Lu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var s=e.stateNode;s===null&&(s=e.stateNode=new g0),t.forEach(function(i){var r=T0.bind(null,e,i);s.has(i)||(s.add(i),i.then(r,r))})}}function bt(e,t){var s=t.deletions;if(s!==null)for(var i=0;i<s.length;i++){var r=s[i];try{var o=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:Me=c.stateNode,jt=!1;break e;case 3:Me=c.stateNode.containerInfo,jt=!0;break e;case 4:Me=c.stateNode.containerInfo,jt=!0;break e}c=c.return}if(Me===null)throw Error(B(160));um(o,l,r),Me=null,jt=!1;var h=r.alternate;h!==null&&(h.return=null),r.return=null}catch(p){Se(r,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hm(t,e),t=t.sibling}function hm(e,t){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Mt(e),i&4){try{Di(3,e,e.return),Wa(3,e)}catch(I){Se(e,e.return,I)}try{Di(5,e,e.return)}catch(I){Se(e,e.return,I)}}break;case 1:bt(t,e),Mt(e),i&512&&s!==null&&xn(s,s.return);break;case 5:if(bt(t,e),Mt(e),i&512&&s!==null&&xn(s,s.return),e.flags&32){var r=e.stateNode;try{Fi(r,"")}catch(I){Se(e,e.return,I)}}if(i&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,l=s!==null?s.memoizedProps:o,c=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Lh(r,o),hl(c,l);var p=hl(c,o);for(l=0;l<h.length;l+=2){var w=h[l],x=h[l+1];w==="style"?zh(r,x):w==="dangerouslySetInnerHTML"?Mh(r,x):w==="children"?Fi(r,x):rc(r,w,x,p)}switch(c){case"input":ol(r,o);break;case"textarea":Oh(r,o);break;case"select":var v=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var C=o.value;C!=null?bn(r,!!o.multiple,C,!1):v!==!!o.multiple&&(o.defaultValue!=null?bn(r,!!o.multiple,o.defaultValue,!0):bn(r,!!o.multiple,o.multiple?[]:"",!1))}r[$i]=o}catch(I){Se(e,e.return,I)}}break;case 6:if(bt(t,e),Mt(e),i&4){if(e.stateNode===null)throw Error(B(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(I){Se(e,e.return,I)}}break;case 3:if(bt(t,e),Mt(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{Bi(t.containerInfo)}catch(I){Se(e,e.return,I)}break;case 4:bt(t,e),Mt(e);break;case 13:bt(t,e),Mt(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Fc=Te())),i&4&&Lu(e);break;case 22:if(w=s!==null&&s.memoizedState!==null,e.mode&1?(Ye=(p=Ye)||w,bt(t,e),Ye=p):bt(t,e),Mt(e),i&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!w&&e.mode&1)for(X=e,w=e.child;w!==null;){for(x=X=w;X!==null;){switch(v=X,C=v.child,v.tag){case 0:case 11:case 14:case 15:Di(4,v,v.return);break;case 1:xn(v,v.return);var N=v.stateNode;if(typeof N.componentWillUnmount=="function"){i=v,s=v.return;try{t=i,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(I){Se(i,s,I)}}break;case 5:xn(v,v.return);break;case 22:if(v.memoizedState!==null){_u(x);continue}}C!==null?(C.return=v,X=C):_u(x)}w=w.sibling}e:for(w=null,x=e;;){if(x.tag===5){if(w===null){w=x;try{r=x.stateNode,p?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=x.stateNode,h=x.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,c.style.display=Fh("display",l))}catch(I){Se(e,e.return,I)}}}else if(x.tag===6){if(w===null)try{x.stateNode.nodeValue=p?"":x.memoizedProps}catch(I){Se(e,e.return,I)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;w===x&&(w=null),x=x.return}w===x&&(w=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:bt(t,e),Mt(e),i&4&&Lu(e);break;case 21:break;default:bt(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var s=e.return;s!==null;){if(dm(s)){var i=s;break e}s=s.return}throw Error(B(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fi(r,""),i.flags&=-33);var o=Ru(e);Bl(e,o,r);break;case 3:case 4:var l=i.stateNode.containerInfo,c=Ru(e);Ul(e,c,l);break;default:throw Error(B(161))}}catch(h){Se(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x0(e,t,s){X=e,pm(e)}function pm(e,t,s){for(var i=(e.mode&1)!==0;X!==null;){var r=X,o=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||Br;if(!l){var c=r.alternate,h=c!==null&&c.memoizedState!==null||Ye;c=Br;var p=Ye;if(Br=l,(Ye=h)&&!p)for(X=r;X!==null;)l=X,h=l.child,l.tag===22&&l.memoizedState!==null?Mu(r):h!==null?(h.return=l,X=h):Mu(r);for(;o!==null;)X=o,pm(o),o=o.sibling;X=r,Br=c,Ye=p}Ou(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,X=o):Ou(e)}}function Ou(e){for(;X!==null;){var t=X;if(t.flags&8772){var s=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Wa(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Ye)if(s===null)i.componentDidMount();else{var r=t.elementType===t.type?s.memoizedProps:kt(t.type,s.memoizedProps);i.componentDidUpdate(r,s.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vu(t,o,i);break;case 3:var l=t.updateQueue;if(l!==null){if(s=null,t.child!==null)switch(t.child.tag){case 5:s=t.child.stateNode;break;case 1:s=t.child.stateNode}vu(t,l,s)}break;case 5:var c=t.stateNode;if(s===null&&t.flags&4){s=c;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&s.focus();break;case"img":h.src&&(s.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var w=p.memoizedState;if(w!==null){var x=w.dehydrated;x!==null&&Bi(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ye||t.flags&512&&Hl(t)}catch(v){Se(t,t.return,v)}}if(t===e){X=null;break}if(s=t.sibling,s!==null){s.return=t.return,X=s;break}X=t.return}}function _u(e){for(;X!==null;){var t=X;if(t===e){X=null;break}var s=t.sibling;if(s!==null){s.return=t.return,X=s;break}X=t.return}}function Mu(e){for(;X!==null;){var t=X;try{switch(t.tag){case 0:case 11:case 15:var s=t.return;try{Wa(4,t)}catch(h){Se(t,s,h)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var r=t.return;try{i.componentDidMount()}catch(h){Se(t,r,h)}}var o=t.return;try{Hl(t)}catch(h){Se(t,o,h)}break;case 5:var l=t.return;try{Hl(t)}catch(h){Se(t,l,h)}}}catch(h){Se(t,t.return,h)}if(t===e){X=null;break}var c=t.sibling;if(c!==null){c.return=t.return,X=c;break}X=t.return}}var v0=Math.ceil,ja=as.ReactCurrentDispatcher,_c=as.ReactCurrentOwner,yt=as.ReactCurrentBatchConfig,oe=0,Re=null,Ne=null,Fe=0,rt=0,vn=As(0),Ee=0,Zi=null,Ks=0,Ya=0,Mc=0,Ri=null,Ze=null,Fc=0,On=1/0,$t=null,Sa=!1,Wl=null,js=null,Wr=!1,ys=null,Ca=0,Li=0,Yl=null,ta=-1,sa=0;function $e(){return oe&6?Te():ta!==-1?ta:ta=Te()}function Ss(e){return e.mode&1?oe&2&&Fe!==0?Fe&-Fe:s0.transition!==null?(sa===0&&(sa=Jh()),sa):(e=ce,e!==0||(e=window.event,e=e===void 0?16:ip(e.type)),e):1}function Dt(e,t,s,i){if(50<Li)throw Li=0,Yl=null,Error(B(185));sr(e,s,i),(!(oe&2)||e!==Re)&&(e===Re&&(!(oe&2)&&(Ya|=s),Ee===4&&fs(e,Fe)),nt(e,i),s===1&&oe===0&&!(t.mode&1)&&(On=Te()+500,Ha&&Is()))}function nt(e,t){var s=e.callbackNode;sg(e,t);var i=la(e,e===Re?Fe:0);if(i===0)s!==null&&Gd(s),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(s!=null&&Gd(s),t===1)e.tag===0?t0(Fu.bind(null,e)):jp(Fu.bind(null,e)),Jg(function(){!(oe&6)&&Is()}),s=null;else{switch(Qh(i)){case 1:s=dc;break;case 4:s=Xh;break;case 16:s=oa;break;case 536870912:s=Kh;break;default:s=oa}s=bm(s,mm.bind(null,e))}e.callbackPriority=t,e.callbackNode=s}}function mm(e,t){if(ta=-1,sa=0,oe&6)throw Error(B(327));var s=e.callbackNode;if(Tn()&&e.callbackNode!==s)return null;var i=la(e,e===Re?Fe:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Ta(e,i);else{t=i;var r=oe;oe|=2;var o=gm();(Re!==e||Fe!==t)&&($t=null,On=Te()+500,Vs(e,t));do try{k0();break}catch(c){fm(e,c)}while(!0);jc(),ja.current=o,oe=r,Ne!==null?t=0:(Re=null,Fe=0,t=Ee)}if(t!==0){if(t===2&&(r=yl(e),r!==0&&(i=r,t=Vl(e,r))),t===1)throw s=Zi,Vs(e,0),fs(e,i),nt(e,Te()),s;if(t===6)fs(e,i);else{if(r=e.current.alternate,!(i&30)&&!w0(r)&&(t=Ta(e,i),t===2&&(o=yl(e),o!==0&&(i=o,t=Vl(e,o))),t===1))throw s=Zi,Vs(e,0),fs(e,i),nt(e,Te()),s;switch(e.finishedWork=r,e.finishedLanes=i,t){case 0:case 1:throw Error(B(345));case 2:Us(e,Ze,$t);break;case 3:if(fs(e,i),(i&130023424)===i&&(t=Fc+500-Te(),10<t)){if(la(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){$e(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Cl(Us.bind(null,e,Ze,$t),t);break}Us(e,Ze,$t);break;case 4:if(fs(e,i),(i&4194240)===i)break;for(t=e.eventTimes,r=-1;0<i;){var l=31-It(i);o=1<<l,l=t[l],l>r&&(r=l),i&=~o}if(i=r,i=Te()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*v0(i/1960))-i,10<i){e.timeoutHandle=Cl(Us.bind(null,e,Ze,$t),i);break}Us(e,Ze,$t);break;case 5:Us(e,Ze,$t);break;default:throw Error(B(329))}}}return nt(e,Te()),e.callbackNode===s?mm.bind(null,e):null}function Vl(e,t){var s=Ri;return e.current.memoizedState.isDehydrated&&(Vs(e,t).flags|=256),e=Ta(e,t),e!==2&&(t=Ze,Ze=s,t!==null&&Gl(t)),e}function Gl(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function w0(e){for(var t=e;;){if(t.flags&16384){var s=t.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var i=0;i<s.length;i++){var r=s[i],o=r.getSnapshot;r=r.value;try{if(!Rt(o(),r))return!1}catch{return!1}}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fs(e,t){for(t&=~Mc,t&=~Ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var s=31-It(t),i=1<<s;e[s]=-1,t&=~i}}function Fu(e){if(oe&6)throw Error(B(327));Tn();var t=la(e,0);if(!(t&1))return nt(e,Te()),null;var s=Ta(e,t);if(e.tag!==0&&s===2){var i=yl(e);i!==0&&(t=i,s=Vl(e,i))}if(s===1)throw s=Zi,Vs(e,0),fs(e,t),nt(e,Te()),s;if(s===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Us(e,Ze,$t),nt(e,Te()),null}function zc(e,t){var s=oe;oe|=1;try{return e(t)}finally{oe=s,oe===0&&(On=Te()+500,Ha&&Is())}}function Js(e){ys!==null&&ys.tag===0&&!(oe&6)&&Tn();var t=oe;oe|=1;var s=yt.transition,i=ce;try{if(yt.transition=null,ce=1,e)return e()}finally{ce=i,yt.transition=s,oe=t,!(oe&6)&&Is()}}function Hc(){rt=vn.current,ge(vn)}function Vs(e,t){e.finishedWork=null,e.finishedLanes=0;var s=e.timeoutHandle;if(s!==-1&&(e.timeoutHandle=-1,Kg(s)),Ne!==null)for(s=Ne.return;s!==null;){var i=s;switch(wc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&pa();break;case 3:Rn(),ge(tt),ge(Ve),Ec();break;case 5:Pc(i);break;case 4:Rn();break;case 13:ge(be);break;case 19:ge(be);break;case 10:Sc(i.type._context);break;case 22:case 23:Hc()}s=s.return}if(Re=e,Ne=e=Cs(e.current,null),Fe=rt=t,Ee=0,Zi=null,Mc=Ya=Ks=0,Ze=Ri=null,Ws!==null){for(t=0;t<Ws.length;t++)if(s=Ws[t],i=s.interleaved,i!==null){s.interleaved=null;var r=i.next,o=s.pending;if(o!==null){var l=o.next;o.next=r,i.next=l}s.pending=i}Ws=null}return e}function fm(e,t){do{var s=Ne;try{if(jc(),Qr.current=ka,ba){for(var i=ke.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ba=!1}if(Xs=0,De=Pe=ke=null,Ii=!1,Ki=0,_c.current=null,s===null||s.return===null){Ee=1,Zi=t,Ne=null;break}e:{var o=e,l=s.return,c=s,h=t;if(t=Fe,c.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var p=h,w=c,x=w.tag;if(!(w.mode&1)&&(x===0||x===11||x===15)){var v=w.alternate;v?(w.updateQueue=v.updateQueue,w.memoizedState=v.memoizedState,w.lanes=v.lanes):(w.updateQueue=null,w.memoizedState=null)}var C=Cu(l);if(C!==null){C.flags&=-257,Tu(C,l,c,o,t),C.mode&1&&Su(o,p,t),t=C,h=p;var N=t.updateQueue;if(N===null){var I=new Set;I.add(h),t.updateQueue=I}else N.add(h);break e}else{if(!(t&1)){Su(o,p,t),Uc();break e}h=Error(B(426))}}else if(xe&&c.mode&1){var R=Cu(l);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Tu(R,l,c,o,t),bc(Ln(h,c));break e}}o=h=Ln(h,c),Ee!==4&&(Ee=2),Ri===null?Ri=[o]:Ri.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Qp(o,h,t);xu(o,m);break e;case 1:c=h;var f=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(js===null||!js.has(S)))){o.flags|=65536,t&=-t,o.lanes|=t;var D=Zp(o,c,t);xu(o,D);break e}}o=o.return}while(o!==null)}xm(s)}catch(O){t=O,Ne===s&&s!==null&&(Ne=s=s.return);continue}break}while(!0)}function gm(){var e=ja.current;return ja.current=ka,e===null?ka:e}function Uc(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Re===null||!(Ks&268435455)&&!(Ya&268435455)||fs(Re,Fe)}function Ta(e,t){var s=oe;oe|=2;var i=gm();(Re!==e||Fe!==t)&&($t=null,Vs(e,t));do try{b0();break}catch(r){fm(e,r)}while(!0);if(jc(),oe=s,ja.current=i,Ne!==null)throw Error(B(261));return Re=null,Fe=0,Ee}function b0(){for(;Ne!==null;)ym(Ne)}function k0(){for(;Ne!==null&&!$f();)ym(Ne)}function ym(e){var t=wm(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?xm(e):Ne=t,_c.current=null}function xm(e){var t=e;do{var s=t.alternate;if(e=t.return,t.flags&32768){if(s=f0(s,t),s!==null){s.flags&=32767,Ne=s;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,Ne=null;return}}else if(s=m0(s,t,rt),s!==null){Ne=s;return}if(t=t.sibling,t!==null){Ne=t;return}Ne=t=e}while(t!==null);Ee===0&&(Ee=5)}function Us(e,t,s){var i=ce,r=yt.transition;try{yt.transition=null,ce=1,j0(e,t,s,i)}finally{yt.transition=r,ce=i}return null}function j0(e,t,s,i){do Tn();while(ys!==null);if(oe&6)throw Error(B(327));s=e.finishedWork;var r=e.finishedLanes;if(s===null)return null;if(e.finishedWork=null,e.finishedLanes=0,s===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=s.lanes|s.childLanes;if(ng(e,o),e===Re&&(Ne=Re=null,Fe=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Wr||(Wr=!0,bm(oa,function(){return Tn(),null})),o=(s.flags&15990)!==0,s.subtreeFlags&15990||o){o=yt.transition,yt.transition=null;var l=ce;ce=1;var c=oe;oe|=4,_c.current=null,y0(e,s),hm(s,e),Wg(jl),ca=!!kl,jl=kl=null,e.current=s,x0(s),qf(),oe=c,ce=l,yt.transition=o}else e.current=s;if(Wr&&(Wr=!1,ys=e,Ca=r),o=e.pendingLanes,o===0&&(js=null),Jf(s.stateNode),nt(e,Te()),t!==null)for(i=e.onRecoverableError,s=0;s<t.length;s++)r=t[s],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sa)throw Sa=!1,e=Wl,Wl=null,e;return Ca&1&&e.tag!==0&&Tn(),o=e.pendingLanes,o&1?e===Yl?Li++:(Li=0,Yl=e):Li=0,Is(),null}function Tn(){if(ys!==null){var e=Qh(Ca),t=yt.transition,s=ce;try{if(yt.transition=null,ce=16>e?16:e,ys===null)var i=!1;else{if(e=ys,ys=null,Ca=0,oe&6)throw Error(B(331));var r=oe;for(oe|=4,X=e.current;X!==null;){var o=X,l=o.child;if(X.flags&16){var c=o.deletions;if(c!==null){for(var h=0;h<c.length;h++){var p=c[h];for(X=p;X!==null;){var w=X;switch(w.tag){case 0:case 11:case 15:Di(8,w,o)}var x=w.child;if(x!==null)x.return=w,X=x;else for(;X!==null;){w=X;var v=w.sibling,C=w.return;if(cm(w),w===p){X=null;break}if(v!==null){v.return=C,X=v;break}X=C}}}var N=o.alternate;if(N!==null){var I=N.child;if(I!==null){N.child=null;do{var R=I.sibling;I.sibling=null,I=R}while(I!==null)}}X=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,X=l;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Di(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,X=m;break e}X=o.return}}var f=e.current;for(X=f;X!==null;){l=X;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,X=S;else e:for(l=f;X!==null;){if(c=X,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Wa(9,c)}}catch(O){Se(c,c.return,O)}if(c===l){X=null;break e}var D=c.sibling;if(D!==null){D.return=c.return,X=D;break e}X=c.return}}if(oe=r,Is(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Oa,e)}catch{}i=!0}return i}finally{ce=s,yt.transition=t}}return!1}function zu(e,t,s){t=Ln(s,t),t=Qp(e,t,1),e=ks(e,t,1),t=$e(),e!==null&&(sr(e,1,t),nt(e,t))}function Se(e,t,s){if(e.tag===3)zu(e,e,s);else for(;t!==null;){if(t.tag===3){zu(t,e,s);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(js===null||!js.has(i))){e=Ln(s,e),e=Zp(t,e,1),t=ks(t,e,1),e=$e(),t!==null&&(sr(t,1,e),nt(t,e));break}}t=t.return}}function S0(e,t,s){var i=e.pingCache;i!==null&&i.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&s,Re===e&&(Fe&s)===s&&(Ee===4||Ee===3&&(Fe&130023424)===Fe&&500>Te()-Fc?Vs(e,0):Mc|=s),nt(e,t)}function vm(e,t){t===0&&(e.mode&1?(t=Rr,Rr<<=1,!(Rr&130023424)&&(Rr=4194304)):t=1);var s=$e();e=ns(e,t),e!==null&&(sr(e,t,s),nt(e,s))}function C0(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),vm(e,s)}function T0(e,t){var s=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(s=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(B(314))}i!==null&&i.delete(t),vm(e,s)}var wm;wm=function(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&s)&&!(t.flags&128))return et=!1,p0(e,t,s);et=!!(e.flags&131072)}else et=!1,xe&&t.flags&1048576&&Sp(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ea(e,t),e=t.pendingProps;var r=An(t,Ve.current);Cn(t,s),r=Ic(null,t,i,e,r,s);var o=Dc();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(i)?(o=!0,ma(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Tc(t),r.updater=Ba,t.stateNode=r,r._reactInternals=t,Dl(t,i,e,s),t=Ol(null,t,i,!0,o,s)):(t.tag=0,xe&&o&&vc(t),Ge(null,t,r,s),t=t.child),t;case 16:i=t.elementType;e:{switch(ea(e,t),e=t.pendingProps,r=i._init,i=r(i._payload),t.type=i,r=t.tag=P0(i),e=kt(i,e),r){case 0:t=Ll(null,t,i,e,s);break e;case 1:t=Eu(null,t,i,e,s);break e;case 11:t=Nu(null,t,i,e,s);break e;case 14:t=Pu(null,t,i,kt(i.type,e),s);break e}throw Error(B(306,i,""))}return t;case 0:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:kt(i,r),Ll(e,t,i,r,s);case 1:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:kt(i,r),Eu(e,t,i,r,s);case 3:e:{if(nm(t),e===null)throw Error(B(387));i=t.pendingProps,o=t.memoizedState,r=o.element,Ap(e,t),va(t,i,null,s);var l=t.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=Ln(Error(B(423)),t),t=Au(e,t,i,s,r);break e}else if(i!==r){r=Ln(Error(B(424)),t),t=Au(e,t,i,s,r);break e}else for(ot=bs(t.stateNode.containerInfo.firstChild),lt=t,xe=!0,St=null,s=Pp(t,null,i,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(In(),i===r){t=is(e,t,s);break e}Ge(e,t,i,s)}t=t.child}return t;case 5:return Ip(t),e===null&&El(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,l=r.children,Sl(i,r)?l=null:o!==null&&Sl(i,o)&&(t.flags|=32),sm(e,t),Ge(e,t,l,s),t.child;case 6:return e===null&&El(t),null;case 13:return im(e,t,s);case 4:return Nc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Dn(t,null,i,s):Ge(e,t,i,s),t.child;case 11:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:kt(i,r),Nu(e,t,i,r,s);case 7:return Ge(e,t,t.pendingProps,s),t.child;case 8:return Ge(e,t,t.pendingProps.children,s),t.child;case 12:return Ge(e,t,t.pendingProps.children,s),t.child;case 10:e:{if(i=t.type._context,r=t.pendingProps,o=t.memoizedProps,l=r.value,pe(ya,i._currentValue),i._currentValue=l,o!==null)if(Rt(o.value,l)){if(o.children===r.children&&!tt.current){t=is(e,t,s);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var h=c.firstContext;h!==null;){if(h.context===i){if(o.tag===1){h=es(-1,s&-s),h.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var w=p.pending;w===null?h.next=h:(h.next=w.next,w.next=h),p.pending=h}}o.lanes|=s,h=o.alternate,h!==null&&(h.lanes|=s),Al(o.return,s,t),c.lanes|=s;break}h=h.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(B(341));l.lanes|=s,c=l.alternate,c!==null&&(c.lanes|=s),Al(l,s,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ge(e,t,r.children,s),t=t.child}return t;case 9:return r=t.type,i=t.pendingProps.children,Cn(t,s),r=xt(r),i=i(r),t.flags|=1,Ge(e,t,i,s),t.child;case 14:return i=t.type,r=kt(i,t.pendingProps),r=kt(i.type,r),Pu(e,t,i,r,s);case 15:return em(e,t,t.type,t.pendingProps,s);case 17:return i=t.type,r=t.pendingProps,r=t.elementType===i?r:kt(i,r),ea(e,t),t.tag=1,st(i)?(e=!0,ma(t)):e=!1,Cn(t,s),Jp(t,i,r),Dl(t,i,r,s),Ol(null,t,i,!0,e,s);case 19:return rm(e,t,s);case 22:return tm(e,t,s)}throw Error(B(156,t.tag))};function bm(e,t){return qh(e,t)}function N0(e,t,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,s,i){return new N0(e,t,s,i)}function Bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function P0(e){if(typeof e=="function")return Bc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oc)return 11;if(e===lc)return 14}return 2}function Cs(e,t){var s=e.alternate;return s===null?(s=gt(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&14680064,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s}function na(e,t,s,i,r,o){var l=2;if(i=e,typeof e=="function")Bc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cn:return Gs(s.children,r,o,t);case ac:l=8,r|=8;break;case sl:return e=gt(12,s,t,r|2),e.elementType=sl,e.lanes=o,e;case nl:return e=gt(13,s,t,r),e.elementType=nl,e.lanes=o,e;case il:return e=gt(19,s,t,r),e.elementType=il,e.lanes=o,e;case Ih:return Va(s,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eh:l=10;break e;case Ah:l=9;break e;case oc:l=11;break e;case lc:l=14;break e;case hs:l=16,i=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=gt(l,s,t,r),t.elementType=e,t.type=i,t.lanes=o,t}function Gs(e,t,s,i){return e=gt(7,e,i,t),e.lanes=s,e}function Va(e,t,s,i){return e=gt(22,e,i,t),e.elementType=Ih,e.lanes=s,e.stateNode={isHidden:!1},e}function Wo(e,t,s){return e=gt(6,e,null,t),e.lanes=s,e}function Yo(e,t,s){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function E0(e,t,s,i,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=So(0),this.expirationTimes=So(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Wc(e,t,s,i,r,o,l,c,h){return e=new E0(e,t,s,c,h),t===1?(t=1,o===!0&&(t|=8)):t=0,o=gt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:i,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(o),e}function A0(e,t,s){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ln,key:i==null?null:""+i,children:e,containerInfo:t,implementation:s}}function km(e){if(!e)return Ps;e=e._reactInternals;e:{if(Zs(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var s=e.type;if(st(s))return kp(e,s,t)}return t}function jm(e,t,s,i,r,o,l,c,h){return e=Wc(s,i,!0,e,r,o,l,c,h),e.context=km(null),s=e.current,i=$e(),r=Ss(s),o=es(i,r),o.callback=t??null,ks(s,o,r),e.current.lanes=r,sr(e,r,i),nt(e,i),e}function Ga(e,t,s,i){var r=t.current,o=$e(),l=Ss(r);return s=km(s),t.context===null?t.context=s:t.pendingContext=s,t=es(o,l),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=ks(r,t,l),e!==null&&(Dt(e,r,l,o),Jr(e,r,l)),l}function Na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Yc(e,t){Hu(e,t),(e=e.alternate)&&Hu(e,t)}function I0(){return null}var Sm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vc(e){this._internalRoot=e}$a.prototype.render=Vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Ga(e,t,null,null)};$a.prototype.unmount=Vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Js(function(){Ga(null,e,null,null)}),t[ss]=null}};function $a(e){this._internalRoot=e}$a.prototype.unstable_scheduleHydration=function(e){if(e){var t=tp();e={blockedOn:null,target:e,priority:t};for(var s=0;s<ms.length&&t!==0&&t<ms[s].priority;s++);ms.splice(s,0,e),s===0&&np(e)}};function Gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uu(){}function D0(e,t,s,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var p=Na(l);o.call(p)}}var l=jm(t,i,e,0,null,!1,!1,"",Uu);return e._reactRootContainer=l,e[ss]=l.current,Vi(e.nodeType===8?e.parentNode:e),Js(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var c=i;i=function(){var p=Na(h);c.call(p)}}var h=Wc(e,0,!1,null,null,!1,!1,"",Uu);return e._reactRootContainer=h,e[ss]=h.current,Vi(e.nodeType===8?e.parentNode:e),Js(function(){Ga(t,h,s,i)}),h}function Xa(e,t,s,i,r){var o=s._reactRootContainer;if(o){var l=o;if(typeof r=="function"){var c=r;r=function(){var h=Na(l);c.call(h)}}Ga(t,l,e,r)}else l=D0(s,t,e,r,i);return Na(l)}Zh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var s=Si(t.pendingLanes);s!==0&&(uc(t,s|1),nt(t,Te()),!(oe&6)&&(On=Te()+500,Is()))}break;case 13:Js(function(){var i=ns(e,1);if(i!==null){var r=$e();Dt(i,e,1,r)}}),Yc(e,1)}};hc=function(e){if(e.tag===13){var t=ns(e,134217728);if(t!==null){var s=$e();Dt(t,e,134217728,s)}Yc(e,134217728)}};ep=function(e){if(e.tag===13){var t=Ss(e),s=ns(e,t);if(s!==null){var i=$e();Dt(s,e,t,i)}Yc(e,t)}};tp=function(){return ce};sp=function(e,t){var s=ce;try{return ce=e,t()}finally{ce=s}};ml=function(e,t,s){switch(t){case"input":if(ol(e,s),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<s.length;t++){var i=s[t];if(i!==e&&i.form===e.form){var r=za(i);if(!r)throw Error(B(90));Rh(i),ol(i,r)}}}break;case"textarea":Oh(e,s);break;case"select":t=s.value,t!=null&&bn(e,!!s.multiple,t,!1)}};Bh=zc;Wh=Js;var R0={usingClientEntryPoint:!1,Events:[ir,pn,za,Hh,Uh,zc]},bi={findFiberByHostInstance:Bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L0={bundleType:bi.bundleType,version:bi.version,rendererPackageName:bi.rendererPackageName,rendererConfig:bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:as.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gh(e),e===null?null:e.stateNode},findFiberByHostInstance:bi.findFiberByHostInstance||I0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yr.isDisabled&&Yr.supportsFiber)try{Oa=Yr.inject(L0),Ut=Yr}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;dt.createPortal=function(e,t){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gc(t))throw Error(B(200));return A0(e,t,null,s)};dt.createRoot=function(e,t){if(!Gc(e))throw Error(B(299));var s=!1,i="",r=Sm;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Wc(e,1,!1,null,null,s,!1,i,r),e[ss]=t.current,Vi(e.nodeType===8?e.parentNode:e),new Vc(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Gh(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return Js(e)};dt.hydrate=function(e,t,s){if(!qa(t))throw Error(B(200));return Xa(null,e,t,!0,s)};dt.hydrateRoot=function(e,t,s){if(!Gc(e))throw Error(B(405));var i=s!=null&&s.hydratedSources||null,r=!1,o="",l=Sm;if(s!=null&&(s.unstable_strictMode===!0&&(r=!0),s.identifierPrefix!==void 0&&(o=s.identifierPrefix),s.onRecoverableError!==void 0&&(l=s.onRecoverableError)),t=jm(t,null,e,1,s??null,r,!1,o,l),e[ss]=t.current,Vi(e),i)for(e=0;e<i.length;e++)s=i[e],r=s._getVersion,r=r(s._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[s,r]:t.mutableSourceEagerHydrationData.push(s,r);return new $a(t)};dt.render=function(e,t,s){if(!qa(t))throw Error(B(200));return Xa(null,e,t,!1,s)};dt.unmountComponentAtNode=function(e){if(!qa(e))throw Error(B(40));return e._reactRootContainer?(Js(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[ss]=null})}),!0):!1};dt.unstable_batchedUpdates=zc;dt.unstable_renderSubtreeIntoContainer=function(e,t,s,i){if(!qa(s))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Xa(e,t,s,!1,i)};dt.version="18.3.1-next-f1338f8080-20240426";function Cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm)}catch(e){console.error(e)}}Cm(),Ch.exports=dt;var O0=Ch.exports,Bu=O0;el.createRoot=Bu.createRoot,el.hydrateRoot=Bu.hydrateRoot;const _n={cryptography:[{id:"crypto-1",title:"Caesar Cipher Basics",difficulty:"Easy",points:10,description:"Julius Caesar used a simple cipher to protect his messages. In a Caesar cipher, each letter is shifted by a fixed number of positions in the alphabet.",learningObjective:"Understand how substitution ciphers work and practice decryption techniques.",vocabularyTerms:["caesar-cipher","cipher","encryption","decryption","plaintext","ciphertext"],learn:{title:"Understanding Caesar Ciphers",concept:`A Caesar cipher is one of the simplest and oldest encryption techniques. It works by shifting each letter in the message by a fixed number of positions in the alphabet.

For example, with a shift of 3:
- A becomes D
- B becomes E
- C becomes F
- And so on...

The shift value is called the "key". To decrypt, you simply shift in the opposite direction.`,example:`Encrypt "HELLO" with shift 1:
H → I
E → F
L → M
L → M
O → P

Result: "IFMMP"`,keyPoints:["Caesar cipher is a substitution cipher - each letter is replaced by another",'The "key" is the number of positions to shift',"To decrypt, shift in the opposite direction","There are only 25 possible keys, making it easy to crack by trying all shifts"]},prompt:`The following message was encrypted with a Caesar cipher using a shift of 3:

FBEHU UDQJH LV IXQ!

Decrypt the message to find the flag.`,hints:["Each letter is shifted 3 positions forward in the alphabet","To decrypt, shift each letter 3 positions backward","A becomes D, B becomes E, C becomes F, etc.","The flag format is: FLAG{...}"],answer:"CYBER RANGE IS FUN!",flag:"FLAG{CYBER_RANGE_IS_FUN}",explanation:"In a Caesar cipher with shift 3, F→C, B→Y, E→B, H→E, U→R, and so on. By shifting each letter back 3 positions, we decrypt the message."},{id:"crypto-2",title:"Base64 Encoding",difficulty:"Easy",points:15,description:"Base64 is an encoding scheme that converts binary data into ASCII text. It's commonly used to transmit data over text-based protocols.",learningObjective:"Learn to recognize and decode Base64-encoded data.",vocabularyTerms:["base64","encryption","plaintext"],learn:{title:"Base64 Encoding vs Encryption",concept:`Base64 is an ENCODING scheme, not encryption. This is an important distinction!

Encoding: Transforms data into a different format for transmission (anyone can decode it)
Encryption: Protects data using a secret key (only key holders can decrypt)

Base64 converts binary data into 64 safe ASCII characters (A-Z, a-z, 0-9, +, /). It's used when you need to send binary data over text-only channels like email.`,example:`The text "Hi" in Base64:
"Hi" → SGk=

Common uses of Base64:
- Email attachments
- Embedding images in HTML/CSS
- Storing binary data in JSON
- URL-safe data transmission`,keyPoints:["Base64 is encoding, NOT encryption - it provides zero security","Anyone can decode Base64 without any key","Base64 strings often end with = or == (padding)","Base64 makes data about 33% larger","Use Base64 for data transport, not security"]},prompt:`You intercepted this encoded message:

RkxBR3tCQVNFNjRfSVNfTk9UX0VOQ1JZUFRJT059

Decode it to retrieve the flag. Remember: Base64 is encoding, not encryption!`,hints:["This is Base64 encoding, not encryption","Base64 strings often end with = or == for padding","Use a Base64 decoder tool or write a decoder","The decoded text will be readable"],answer:"FLAG{BASE64_IS_NOT_ENCRYPTION}",flag:"FLAG{BASE64_IS_NOT_ENCRYPTION}",explanation:"Base64 is an encoding scheme, not encryption. It converts binary data to text but provides no security. Anyone can easily decode it."},{id:"crypto-3",title:"Hex Decoder",difficulty:"Easy",points:15,description:"Hexadecimal (hex) is a base-16 number system often used to represent binary data in a readable format.",learningObjective:"Learn to convert hexadecimal data to ASCII text.",vocabularyTerms:["encryption","plaintext","ciphertext"],learn:{title:"Hexadecimal and ASCII",concept:`Hexadecimal (hex) is a base-16 number system using digits 0-9 and letters A-F.

Why hex? Computers work in binary (base-2), but binary is hard to read. Hex is a compact way to represent binary data - each hex digit represents exactly 4 binary bits.

ASCII assigns numbers to characters. For example:
- 'A' = 65 (decimal) = 41 (hex)
- 'a' = 97 (decimal) = 61 (hex)`,example:`Convert hex "48656C6C6F" to text:
48 = 72 decimal = 'H'
65 = 101 decimal = 'e'
6C = 108 decimal = 'l'
6C = 108 decimal = 'l'
6F = 111 decimal = 'o'

Result: "Hello"`,keyPoints:["Hex uses 16 digits: 0-9 and A-F","Each pair of hex digits = one byte = one ASCII character","Hex is commonly used in programming, debugging, and cybersecurity","Like Base64, hex encoding is NOT encryption - just representation"]},prompt:`Convert this hexadecimal string to ASCII to find the flag:

464c41477b4845585f54305f415343494960207d

Hint: Each pair of hex digits represents one ASCII character.`,hints:["Hex uses digits 0-9 and letters A-F","Each pair of hex characters represents one byte",'46 in hex = 70 in decimal = "F" in ASCII',"Convert each pair to get the full message"],answer:"FLAG{HEX_T0_ASCII!}",flag:"FLAG{HEX_T0_ASCII!}",explanation:"Hexadecimal is often used to represent data. By converting each hex pair to its ASCII equivalent, we reveal the hidden message."},{id:"crypto-4",title:"ROT13 Message",difficulty:"Medium",points:20,description:"ROT13 is a special case of the Caesar cipher with a shift of 13. It's interesting because applying it twice returns the original text.",learningObjective:"Understand ROT13 and why it's symmetric.",vocabularyTerms:["caesar-cipher","cipher","encryption","decryption"],learn:{title:"ROT13: A Symmetric Cipher",concept:`ROT13 ("rotate by 13") is a special Caesar cipher that shifts letters exactly 13 positions.

Why is 13 special? The English alphabet has 26 letters. Shifting by 13 means:
- A ↔ N (position 1 ↔ position 14)
- B ↔ O (position 2 ↔ position 15)
- ...and so on

This makes ROT13 "symmetric" - applying it twice returns the original text!
encrypt(decrypt(text)) = text`,example:`ROT13 substitution:
A↔N  B↔O  C↔P  D↔Q  E↔R  F↔S  G↔T
H↔U  I↔V  J↔W  K↔X  L↔Y  M↔Z

"URYYB" → ROT13 → "HELLO"
"HELLO" → ROT13 → "URYYB"`,keyPoints:["ROT13 shifts each letter exactly 13 positions","It's symmetric: the same operation encrypts AND decrypts","ROT13 is NOT secure - it's easy to crack","Often used to hide spoilers or puzzle answers online","Numbers and symbols are not affected by ROT13"]},prompt:`Decrypt this ROT13 message:

SYNT{EBG13_VF_FLZZRGEVP}

ROT13 shifts each letter 13 positions. What makes this cipher special?`,hints:["ROT13 shifts each letter exactly 13 positions","Since the alphabet has 26 letters, ROT13 is its own inverse","Applying ROT13 twice gives you back the original text","A↔N, B↔O, C↔P, etc."],answer:"FLAG{ROT13_IS_SYMMETRIC}",flag:"FLAG{ROT13_IS_SYMMETRIC}",explanation:"ROT13 is symmetric because the alphabet has 26 letters. Shifting 13 positions twice (13+13=26) brings you back to the start."},{id:"crypto-5",title:"Hash Detective",difficulty:"Medium",points:25,description:"Cryptographic hash functions create a unique fingerprint of data. They are one-way functions, meaning you can't reverse them.",learningObjective:"Understand hashing and learn to identify different hash types.",vocabularyTerms:["hash","encryption"],learn:{title:"Cryptographic Hash Functions",concept:`A hash function takes any input and produces a fixed-length "fingerprint" (hash).

Key properties of cryptographic hashes:
1. Deterministic: Same input always = same hash
2. One-way: Can't reverse the hash to find input
3. Fixed length: Output is always the same size
4. Avalanche effect: Tiny input change = completely different hash
5. Collision resistant: Hard to find two inputs with same hash`,example:`Common hash algorithms and their output lengths:
MD5:     32 hex chars (128 bits) - INSECURE
SHA-1:   40 hex chars (160 bits) - INSECURE
SHA-256: 64 hex chars (256 bits) - SECURE

Example MD5:
"hello" → 5d41402abc4b2a76b9719d911017c592
"Hello" → 8b1a9953c4611296a827abf8c47804d7
(Capital H = completely different hash!)`,keyPoints:['Hashes are one-way - you cannot "unhash" data',"Used for password storage, file verification, digital signatures","MD5 and SHA-1 are now considered insecure (broken)","SHA-256 and SHA-3 are currently recommended","You can identify hash types by counting characters"]},prompt:`You found these hashes in a database. Identify which hash algorithm was likely used:

1. 5d41402abc4b2a76b9719d911017c592
2. 356a192b7913b04c54574d18c28d46e6395428ab
3. 8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918

Hash lengths: MD5=32, SHA-1=40, SHA-256=64 characters`,hints:["Count the characters in each hash","MD5 hashes are 32 hex characters long","SHA-1 hashes are 40 hex characters long","SHA-256 hashes are 64 hex characters long","The flag format is: FLAG{ALGO1_ALGO2_ALGO3}"],answer:"FLAG{MD5_SHA1_SHA256}",flag:"FLAG{MD5_SHA1_SHA256}",explanation:"Hash functions produce fixed-length outputs. By counting characters, you can identify: 32=MD5, 40=SHA-1, 64=SHA-256. MD5 and SHA-1 are now considered insecure."}],network:[{id:"network-1",title:"Common Ports",difficulty:"Easy",points:10,description:"Network services communicate through ports. Knowing common port numbers helps identify services and potential vulnerabilities.",learningObjective:"Learn common network ports and their associated services.",vocabularyTerms:["port","protocol","firewall"],learn:{title:"Network Ports and Services",concept:`A port is like an apartment number for network services. While an IP address gets traffic to the right computer, the port number directs it to the right application.

Ports range from 0-65535:
- Well-known ports (0-1023): Reserved for common services
- Registered ports (1024-49151): Registered applications
- Dynamic ports (49152-65535): Temporary connections`,example:`Essential ports to memorize:
Port 20/21 - FTP (File Transfer)
Port 22    - SSH (Secure Shell)
Port 23    - Telnet (INSECURE!)
Port 25    - SMTP (Email sending)
Port 53    - DNS (Domain names)
Port 80    - HTTP (Web)
Port 443   - HTTPS (Secure web)
Port 3389  - RDP (Remote Desktop)`,keyPoints:["Ports let multiple services run on one IP address","Knowing common ports helps identify running services","Open ports can be potential attack vectors","Security scans often check for open/vulnerable ports","Some ports (like 23-Telnet) are inherently insecure"]},prompt:`Match these port numbers to their services:

Port 80: ?
Port 443: ?
Port 22: ?
Port 21: ?

Services: SSH, HTTP, HTTPS, FTP

Enter the flag: FLAG{SERVICE_80_443_22_21}`,hints:["Port 80 is for unencrypted web traffic","Port 443 is for encrypted web traffic","Port 22 is for secure shell access","Port 21 is for file transfer","Format: FLAG{HTTP_HTTPS_SSH_FTP}"],answer:"FLAG{HTTP_HTTPS_SSH_FTP}",flag:"FLAG{HTTP_HTTPS_SSH_FTP}",explanation:"Common ports: HTTP=80, HTTPS=443, SSH=22, FTP=21. Knowing these helps identify services running on a network and potential security issues."},{id:"network-2",title:"IP Address Classes",difficulty:"Medium",points:20,description:"IP addresses are divided into classes based on their range. Understanding IP addressing is fundamental to networking.",learningObjective:"Understand IP address structure and private IP ranges.",vocabularyTerms:["ip-address","protocol"],learn:{title:"Private vs Public IP Addresses",concept:`Every device on the internet needs an IP address. But there aren't enough addresses for every device, so we use private IPs for local networks.

Private IP ranges (cannot be routed on internet):
- 10.0.0.0 to 10.255.255.255 (Class A)
- 172.16.0.0 to 172.31.255.255 (Class B)
- 192.168.0.0 to 192.168.255.255 (Class C)

Your home router has a public IP (internet-facing) and assigns private IPs to your devices. This is called NAT (Network Address Translation).`,example:`Your network might look like:
Internet ↔ Router (Public: 73.45.123.89)
              ↓
    Private Network (192.168.1.0/24)
    - Your PC: 192.168.1.100
    - Phone: 192.168.1.101
    - Laptop: 192.168.1.102`,keyPoints:["Private IPs can only communicate within local networks","192.168.x.x is the most common home network range","Routers use NAT to translate between private and public IPs","Private IPs provide a layer of security (not directly reachable from internet)","The same private IP can be used in millions of different networks"]},prompt:`Which of these IP addresses is a private (non-routable) IP address?

A) 8.8.8.8
B) 192.168.1.1
C) 74.125.224.72
D) 151.101.1.140

Private IP ranges:
- 10.0.0.0 to 10.255.255.255
- 172.16.0.0 to 172.31.255.255
- 192.168.0.0 to 192.168.255.255`,hints:["Private IPs cannot be accessed from the internet","192.168.x.x is a common private IP range","Your home router likely uses 192.168.1.1","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:"192.168.1.1 is a private IP address used within local networks. Private IPs are not routable on the internet, providing an extra layer of security."},{id:"network-3",title:"Protocol Detective",difficulty:"Medium",points:25,description:"Different protocols serve different purposes in network communication. Understanding them is key to network security.",learningObjective:"Identify network protocols and understand their security implications.",vocabularyTerms:["protocol","port","encryption"],learn:{title:"Encrypted vs Unencrypted Protocols",concept:`Network protocols can transmit data in two ways:
1. Plaintext (unencrypted) - Anyone who intercepts can read it
2. Encrypted - Only authorized parties can read it

Legacy protocols were designed before security was a priority. Modern equivalents add encryption:
- Telnet → SSH (Secure Shell)
- HTTP → HTTPS
- FTP → SFTP or FTPS`,example:`INSECURE (plaintext):
- HTTP (port 80): Web traffic visible
- Telnet (port 23): Commands/passwords visible
- FTP (port 21): Credentials visible

SECURE (encrypted):
- HTTPS (port 443): TLS encrypted
- SSH (port 22): Encrypted shell
- SFTP (port 22): Encrypted file transfer`,keyPoints:["Unencrypted protocols expose all data to eavesdroppers","On public WiFi, anyone can capture plaintext traffic","Always prefer encrypted alternatives (HTTPS, SSH, SFTP)","Check for HTTPS and the padlock icon on sensitive sites","Legacy protocols (Telnet, HTTP) should be avoided for sensitive data"]},prompt:`Analyze this network traffic log:

Connection 1: Port 23 - Telnet session
Connection 2: Port 22 - SSH session
Connection 3: Port 80 - HTTP session
Connection 4: Port 443 - HTTPS session

Which connections transmit data in PLAINTEXT (unencrypted)?
Enter as FLAG{PORT_PORT_PORT} in ascending order`,hints:["Telnet (23) sends data unencrypted","SSH (22) encrypts all data","HTTP (80) is unencrypted","HTTPS (443) is encrypted with SSL/TLS","List the unencrypted ports: 23, 80"],answer:"FLAG{23_80}",flag:"FLAG{23_80}",explanation:"Telnet and HTTP transmit data in plaintext, making them vulnerable to eavesdropping. Always use encrypted alternatives: SSH instead of Telnet, HTTPS instead of HTTP."},{id:"network-4",title:"Firewall Rules",difficulty:"Hard",points:30,description:"Firewalls use rules to control network traffic. Understanding firewall rules helps protect networks from threats.",learningObjective:"Learn how firewall rules work to protect networks.",vocabularyTerms:["firewall","port","protocol","ip-address"],learn:{title:"How Firewalls Process Rules",concept:`A firewall is like a security guard that checks every packet entering or leaving a network. It uses a list of rules to decide what traffic to allow or deny.

Key principles:
1. Rules are processed top-to-bottom (order matters!)
2. First matching rule wins
3. More specific rules should come before general rules
4. Usually ends with a "deny all" rule for safety`,example:`Sample firewall ruleset:
Rule 1: ALLOW TCP port 443 (HTTPS)
Rule 2: ALLOW TCP port 80 (HTTP)
Rule 3: DENY TCP port 23 (block Telnet)
Rule 4: ALLOW TCP from 192.168.1.0/24
Rule 5: DENY ALL (default deny)

A packet to port 23 from 192.168.1.50:
- Doesn't match rule 1 or 2
- Matches rule 3 → DENIED
- Never reaches rule 4!`,keyPoints:["Firewalls process rules in order - first match wins","Put more specific rules before general rules",'Always end with a "deny all" default rule',"Whitelisting (allow specific, deny rest) is more secure","Misconfigured firewall rules are a common security issue"]},prompt:`A firewall has these rules (processed in order):

1. ALLOW: Source 192.168.1.0/24, Port ANY
2. DENY: Port 23
3. ALLOW: Port 80
4. ALLOW: Port 443
5. DENY: ALL

Can a computer at 192.168.1.50 access Telnet (port 23)?
Can a computer at 10.0.0.5 access HTTP (port 80)?`,hints:["Firewall rules are processed top to bottom","192.168.1.50 matches rule 1 (allow all ports from that subnet)","Rule 1 comes before rule 2, so it takes precedence","10.0.0.5 doesn't match rule 1, so it continues to other rules","Answer: FLAG{YES_YES} or FLAG{YES_NO} or FLAG{NO_YES} or FLAG{NO_NO}"],answer:"FLAG{YES_YES}",flag:"FLAG{YES_YES}",explanation:"Firewalls process rules in order. 192.168.1.50 matches rule 1 (ALLOW all ports) first. 10.0.0.5 skips rule 1, but matches rule 3 (ALLOW port 80)."}],password:[{id:"password-1",title:"Password Strength 101",difficulty:"Easy",points:10,description:"Strong passwords are your first line of defense. Learn what makes a password secure.",learningObjective:"Understand the characteristics of strong passwords.",vocabularyTerms:["password-strength","brute-force","authentication"],learn:{title:"What Makes a Password Strong?",concept:`Password strength is measured by "entropy" - how unpredictable it is. More entropy = harder to guess.

Factors that increase strength:
1. LENGTH - Most important! Each character exponentially increases combinations
2. Randomness - Unpredictable patterns
3. Character variety - Letters, numbers, symbols

Counter-intuitively, a long passphrase like "correct-horse-battery-staple" is often stronger than a short complex password like "P@ssw0rd!".`,example:`Compare these passwords:
"password" - 8 chars, common word = VERY WEAK
"P@ssw0rd!" - 9 chars, predictable substitutions = WEAK
"Tr0ub4dor&3" - 11 chars, random-looking = MEDIUM
"MyDogAte4PurpleBananas!" - 24 chars, passphrase = STRONG`,keyPoints:["Length beats complexity - longer is always better","Avoid common words and patterns","Passphrases (random words together) are strong and memorable","Never reuse passwords across different sites","Use a password manager to generate and store strong passwords"]},prompt:`Which password is the STRONGEST?

A) password123
B) P@ssw0rd!
C) Tr0ub4dor&3
D) correct-horse-battery-staple-2024

Consider: length, complexity, predictability, and entropy.`,hints:["Length is one of the most important factors","Option A is too common and simple","Option B is a common pattern (letter substitution)","Option C is medium strength but short","Option D is long and uses random words (passphrase)","The flag is FLAG{D}"],answer:"D",flag:"FLAG{D}",explanation:'Long passphrases with random words are stronger than short complex passwords. "correct-horse-battery-staple-2024" has high entropy and is harder to crack than "P@ssw0rd!".'},{id:"password-2",title:"Brute Force Math",difficulty:"Medium",points:20,description:"Understanding password combination math helps you create stronger passwords.",learningObjective:"Calculate password strength and understand brute force attacks.",vocabularyTerms:["brute-force","password-strength"],learn:{title:"The Math Behind Brute Force",concept:`A brute force attack tries every possible combination until it finds the right one.

Formula: combinations = (character set size)^(password length)

Character sets:
- Digits only (0-9): 10 characters
- Lowercase (a-z): 26 characters
- Upper + lower: 52 characters
- All printable: ~95 characters

Adding ONE character multiplies combinations by the set size!`,example:`4-digit PIN (10 digits):
10^4 = 10,000 combinations

8-char lowercase password (26 letters):
26^8 = 208,827,064,576 combinations

8-char mixed case + digits (62 chars):
62^8 = 218,340,105,584,896 combinations

Modern computers can try billions per second!`,keyPoints:["Each additional character multiplies difficulty","A 4-digit PIN has only 10,000 combinations","Attackers use specialized hardware (GPUs) for speed","Simple passwords can be cracked in seconds","This is why minimum length requirements exist"]},prompt:`A 4-digit PIN has how many possible combinations?

Digits available: 0-9 (10 digits)
PIN length: 4 digits

Calculate: 10 × 10 × 10 × 10 = ?

If a brute force attack tries 1000 PINs per second, how many seconds to try all combinations?`,hints:["10 choices for each of 4 positions","10^4 = 10,000 possible combinations","10,000 combinations ÷ 1000 per second = 10 seconds","The flag is FLAG{10000_10}"],answer:"FLAG{10000_10}",flag:"FLAG{10000_10}",explanation:"4-digit PINs have only 10,000 combinations (10^4). At 1000 guesses/second, all combinations can be tried in 10 seconds. This shows why longer passwords are crucial!"},{id:"password-3",title:"Common Password Patterns",difficulty:"Medium",points:20,description:"Attackers use dictionaries of common passwords. Avoid predictable patterns!",learningObjective:"Recognize and avoid common password patterns.",vocabularyTerms:["brute-force","password-strength"],learn:{title:"Dictionary Attacks and Common Patterns",concept:`Instead of trying every combination, attackers first try common passwords and patterns. This is called a dictionary attack.

Common patterns attackers know:
- Word + numbers (Password1, Admin2024)
- Keyboard patterns (qwerty, 123456)
- Character substitution (P@ssw0rd, H3ll0)
- Name + numbers (John1990, Sarah123)
- Season + year (Summer2024, Winter23)`,example:`Top 10 most common passwords (avoid these!):
1. 123456
2. password
3. 123456789
4. 12345678
5. 12345
6. 1234567
7. qwerty
8. 111111
9. 123123
10. abc123

Attackers try these FIRST!`,keyPoints:["Attackers have lists of millions of common passwords","Predictable substitutions (@ for a, 0 for o) are well-known","Dictionary attacks are much faster than brute force","Avoid personal info (names, birthdays, pets)","Random word combinations (passphrases) resist dictionary attacks"]},prompt:`These passwords were found in a breach. Identify the pattern:

- Password1
- Welcome1
- Qwerty123
- Letmein1
- Admin2024

What do they have in common? The flag describes the pattern: FLAG{PATTERN_TYPE}`,hints:["Look at the structure of each password","They all use common words","They all end with numbers",'This is "word + digits" pattern',"The flag is FLAG{COMMON_WORD_PLUS_DIGITS}"],answer:"FLAG{COMMON_WORD_PLUS_DIGITS}",flag:"FLAG{COMMON_WORD_PLUS_DIGITS}",explanation:"These passwords follow the pattern: common word + digits. Attackers know this pattern and include it in their attacks. Avoid predictable patterns!"},{id:"password-4",title:"Password Hashing",difficulty:"Hard",points:30,description:"Systems store password hashes, not plaintext passwords. Understanding hashing is crucial for security.",learningObjective:"Understand how password hashing protects credentials.",vocabularyTerms:["hash","encryption","authentication"],learn:{title:"Password Storage and Hashing",concept:`Secure systems NEVER store your actual password! Instead, they store a hash.

When you create an account:
1. You enter password "MySecret123"
2. System hashes it: hash("MySecret123") → "a1b2c3d4..."
3. Only the hash is stored in the database

When you log in:
1. You enter your password
2. System hashes your input
3. Compares hash to stored hash
4. If they match, access granted!`,example:`Password database looks like:
user      | password_hash
----------|----------------------------------
alice     | 5f4dcc3b5aa765d61d8327deb882cf99
bob       | 5f4dcc3b5aa765d61d8327deb882cf99
carol     | 098f6bcd4621d373cade4e832627b4f6

Problem: Alice and Bob have the SAME hash!
This means they have the same password.
Attackers can exploit this - that's why we add "salt".`,keyPoints:["Passwords are hashed, not encrypted (one-way)","Even database admins should not know your password","Same password = same hash (without salting)","Salting adds random data before hashing","Modern systems use bcrypt, scrypt, or Argon2 (slow hashes)"]},prompt:`A database stores these password hashes:

User1: 5f4dcc3b5aa765d61d8327deb882cf99
User2: 5f4dcc3b5aa765d61d8327deb882cf99
User3: 098f6bcd4621d373cade4e832627b4f6

What does it mean that User1 and User2 have the SAME hash?

A) They have the same username
B) They have the same password
C) Their accounts are linked
D) The database is corrupted`,hints:["Hash functions are deterministic","Same input always produces same output","If two hashes match, the passwords match","This is why salting is important","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:'Identical hashes mean identical passwords. This is why modern systems use "salting" - adding random data before hashing so identical passwords produce different hashes.'}],web:[{id:"web-1",title:"URL Analysis",difficulty:"Easy",points:10,description:"URLs can reveal a lot about a website and potential security issues. Learn to analyze them critically.",learningObjective:"Identify suspicious URLs and understand URL structure.",vocabularyTerms:["phishing","protocol"],learn:{title:"Analyzing URLs for Security",concept:`A URL (Uniform Resource Locator) has several parts to examine:

https://www.example.com:443/path/page?query=value
|        |              |   |         |
protocol domain        port path      query string

Attackers manipulate URLs to trick users:
- Typosquatting: g00gle.com (zeros instead of o's)
- Subdomain tricks: google.evil.com (evil.com is the real domain)
- Homograph attacks: Using similar-looking Unicode characters`,example:`Spot the fake:
✓ https://www.google.com
✗ http://www.g00gle.com (zeros)
✗ https://google.security-check.com (wrong domain!)
✗ https://www.google.com.evil.net (subdomain trick)

Always check:
1. Is it HTTPS?
2. Is the domain spelled correctly?
3. What comes before .com/.org/.net?`,keyPoints:["The domain (before first /) is what matters most","Subdomains can make fake sites look legitimate","Typosquatting uses misspellings to trick users","HTTP means unencrypted - be cautious with sensitive data","When in doubt, type the URL manually instead of clicking links"]},prompt:`Which URL is most likely a PHISHING attempt?

A) https://www.google.com/search
B) http://goog1e.com/signin
C) https://mail.google.com/mail
D) https://drive.google.com/drive

Look carefully at each domain name!`,hints:["Check the spelling of the domain name","Look for character substitution (1 instead of l)",'goog1e.com uses the number "1" instead of letter "l"',"Also note: it uses HTTP not HTTPS","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:'goog1e.com uses "1" instead of "l" (typosquatting). Also uses HTTP instead of HTTPS. Always check domain spelling and use HTTPS for sensitive sites!'},{id:"web-2",title:"SQL Injection Basics",difficulty:"Medium",points:25,description:"SQL injection is a common web vulnerability where attackers insert malicious SQL code into input fields.",learningObjective:"Understand how SQL injection attacks work and how to prevent them.",vocabularyTerms:["sql-injection","vulnerability","exploit"],learn:{title:"Understanding SQL Injection",concept:`SQL injection (SQLi) happens when user input is inserted directly into database queries without proper handling.

Vulnerable code pattern:
query = "SELECT * FROM users WHERE name='" + userInput + "'"

If userInput is: admin'--
The query becomes:
SELECT * FROM users WHERE name='admin'--'

The ' closes the string, and -- comments out the rest!`,example:`Attack examples:
' OR '1'='1          - Always true condition
admin'--             - Comment out rest of query
'; DROP TABLE users; - Delete entire table!

Vulnerable query:
"SELECT * FROM users WHERE id=" + userInput

Input: 1 OR 1=1
Result: Returns ALL users!`,keyPoints:["Never concatenate user input directly into SQL queries","Use parameterized queries (prepared statements) instead","SQLi is consistently in the OWASP Top 10 vulnerabilities","Attackers can read, modify, or delete database data","Input validation alone is NOT sufficient protection"]},prompt:`A login form uses this SQL query:

SELECT * FROM users WHERE username='USER_INPUT' AND password='PASS_INPUT'

An attacker enters:
Username: admin'--
Password: anything

What does the query become? Will the attacker bypass login?

(-- is a SQL comment)`,hints:["Substitute the inputs into the query","The query becomes: SELECT * FROM users WHERE username='admin'--' AND password='anything'","Everything after -- is commented out","The password check is bypassed!","The flag is FLAG{YES_BYPASSED}"],answer:"FLAG{YES_BYPASSED}",flag:"FLAG{YES_BYPASSED}",explanation:"The ' closes the username string, and -- comments out the rest. The query becomes: SELECT * FROM users WHERE username='admin' (password check ignored). Always use parameterized queries!"},{id:"web-3",title:"XSS Detection",difficulty:"Medium",points:25,description:"Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into web pages viewed by other users.",learningObjective:"Identify XSS vulnerabilities and understand their impact.",vocabularyTerms:["xss","vulnerability","exploit"],learn:{title:"Cross-Site Scripting (XSS)",concept:`XSS occurs when a website displays user input without sanitizing it. Attackers inject JavaScript that runs in other users' browsers.

Types of XSS:
1. Stored XSS - Script saved in database, affects all viewers
2. Reflected XSS - Script in URL, requires victim to click link
3. DOM XSS - Client-side JavaScript vulnerability

Impact: Steal cookies/sessions, redirect users, deface site, keylogging`,example:`Vulnerable code:
<div>Welcome, <?php echo $_GET['name']; ?></div>

Attack URL:
site.com/?name=<script>alert('XSS')<\/script>

The browser sees:
<div>Welcome, <script>alert('XSS')<\/script></div>

The script executes in the victim's browser!`,keyPoints:["Always sanitize/escape user input before displaying it","XSS lets attackers run code in victims' browsers","Stolen session cookies = account takeover","Use Content Security Policy (CSP) headers for defense","Encoding output: < becomes &lt;, > becomes &gt;"]},prompt:`A website displays user comments without sanitization:

<div>USER_COMMENT</div>

An attacker posts this comment:
<script>alert("XSS")<\/script>

What happens when other users view the page?

A) The script tag is displayed as text
B) The script executes in users' browsers
C) The comment is blocked
D) Nothing happens`,hints:["Without sanitization, HTML/JavaScript is executed","The browser sees <script> and runs it","This is a stored XSS vulnerability","The script runs in every visitor's browser","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:"Without input sanitization, the browser executes the script tag. This is XSS. Attackers can steal cookies, redirect users, or deface pages. Always sanitize user input!"},{id:"web-4",title:"HTTPS vs HTTP",difficulty:"Easy",points:15,description:"HTTPS encrypts communication between browsers and servers, protecting against eavesdropping.",learningObjective:"Understand the importance of HTTPS for web security.",vocabularyTerms:["protocol","encryption"],learn:{title:"HTTP vs HTTPS Security",concept:`HTTP (Hypertext Transfer Protocol) sends data in plaintext - anyone monitoring the network can read everything.

HTTPS adds TLS (Transport Layer Security) encryption:
- Data is encrypted between your browser and the server
- A certificate verifies the server's identity
- Prevents man-in-the-middle attacks

The "S" in HTTPS = "Secure"`,example:`On public WiFi with HTTP:
You → "password=MySecret123" → Server
         ↑
    Attacker can see: "password=MySecret123"

With HTTPS:
You → [encrypted data] → Server
         ↑
    Attacker sees: "X#@!$%^&*..."

Look for:
- https:// in the URL
- 🔒 Padlock icon in browser`,keyPoints:["HTTPS encrypts all data between browser and server","Never enter passwords or sensitive data on HTTP sites","The padlock icon indicates HTTPS is active","HTTPS also verifies website identity via certificates","Public WiFi makes HTTP especially dangerous"]},prompt:`You're logging into your bank account. The URL is:

http://www.mybank.com/login

What's the security risk?

A) No risk, HTTP is fine
B) Password is sent in plaintext, visible to eavesdroppers
C) The bank might be fake
D) Both B and C`,hints:["HTTP sends all data unencrypted","Anyone monitoring the network can see your password","Legitimate banks always use HTTPS for login","HTTP also means no authentication of the server","The flag is FLAG{D}"],answer:"D",flag:"FLAG{D}",explanation:"HTTP sends data in plaintext (including passwords), and doesn't authenticate the server. Real banks use HTTPS. Always check for HTTPS and the padlock icon!"}],social:[{id:"social-1",title:"Phishing Email Detection",difficulty:"Easy",points:10,description:"Phishing emails try to trick you into revealing sensitive information. Learn to spot the red flags.",learningObjective:"Identify common phishing email indicators.",vocabularyTerms:["phishing","social-engineering"],learn:{title:"Recognizing Phishing Emails",concept:`Phishing emails impersonate legitimate organizations to steal credentials, money, or install malware.

Red flags to watch for:
1. Sender address - Look closely at the domain
2. Urgency/threats - "Account will be closed!"
3. Generic greetings - "Dear Customer" instead of your name
4. Suspicious links - Hover to see real URL
5. Grammar/spelling errors
6. Requests for sensitive information`,example:`Phishing email red flags:
From: support@amaz0n-security.com
      ↑ Wrong domain! (0 not o)

Subject: URGENT: Verify NOW or lose access!
         ↑ Creates panic/urgency

"Dear Valued Customer,"
 ↑ Generic, not personalized

Click here: http://bit.ly/a1b2c3
            ↑ Shortened URL hides destination`,keyPoints:["Always check the sender's email domain carefully","Legitimate companies don't threaten account closure via email","Never click links - go directly to the official website","When in doubt, contact the company through official channels","Phishing is the #1 way attackers gain initial access"]},prompt:`You receive this email:

From: security@amaz0n-support.com
Subject: URGENT: Your account will be closed!

"Dear Customer,
Your Amazon account has suspicious activity. Click here immediately to verify your identity or your account will be permanently closed within 24 hours!

Click: http://amaz0n-verify.tk/account"

How many red flags can you identify?`,hints:["Check the sender domain: amaz0n (with a zero)","Creates urgency and fear","Suspicious URL (amaz0n-verify.tk)",'Generic greeting ("Dear Customer")',"There are at least 4 red flags","Flag format: FLAG{NUMBER_OF_RED_FLAGS}"],answer:"FLAG{4}",flag:"FLAG{4}",explanation:"Red flags: (1) Fake domain (amaz0n), (2) Creates urgency, (3) Suspicious URL, (4) Generic greeting. Legitimate companies don't threaten account closure via email."},{id:"social-2",title:"Pretexting Scenario",difficulty:"Medium",points:20,description:"Pretexting is creating a false scenario to trick people into revealing information.",learningObjective:"Recognize pretexting attacks and social engineering tactics.",vocabularyTerms:["social-engineering","phishing"],learn:{title:"Pretexting and Social Engineering",concept:`Pretexting is creating a fabricated scenario (pretext) to manipulate someone into revealing information or performing an action.

Attackers often pose as:
- IT support ("I need to verify your password")
- Management ("The CEO needs this done urgently")
- Vendors ("Updating your account information")
- Government/law enforcement ("IRS audit")

They exploit trust, authority, and helpfulness.`,example:`Pretexting attack call:
"Hi, this is Mike from the IT department.
We're seeing suspicious activity on your account
and need to verify your credentials to secure it.
Can you confirm your password so I can check
the access logs?"

Red flags:
- IT should NEVER ask for your password
- Creates urgency with "suspicious activity"
- No way to verify caller's identity`,keyPoints:["Legitimate IT staff will NEVER ask for your password","Always verify identity through official channels","Call back using a number YOU look up, not one they provide","Attackers exploit helpfulness and fear of authority","When pressured for urgent action, slow down and verify"]},prompt:`You receive a call:

"Hi, this is Jake from IT. We're upgrading the network and need to verify user accounts. Can you confirm your username and password so I can update your profile?"

What should you do?

A) Provide the information to be helpful
B) Ask for a call-back number and verify with IT
C) Hang up immediately
D) Give username but not password`,hints:["IT should never ask for your password","Verify the identity before sharing any info","Call back through official channels","This is a pretexting attack","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:"Never give credentials over the phone. Ask for a callback number and verify through official IT channels. Legitimate IT staff never ask for passwords."},{id:"social-3",title:"Tailgating Attack",difficulty:"Medium",points:20,description:"Tailgating is when unauthorized people follow authorized personnel into restricted areas.",learningObjective:"Understand physical security and social engineering in the real world.",vocabularyTerms:["social-engineering","authentication","authorization"],learn:{title:"Physical Security: Tailgating",concept:`Tailgating (or piggybacking) is a physical security attack where an unauthorized person follows an authorized person through a secured entrance.

Attackers exploit:
- Politeness ("Can you hold the door?")
- Social pressure (seeming rude by not helping)
- Fake excuses ("Forgot my badge", "Hands are full")

Physical access can be just as dangerous as digital access - once inside, attackers can steal data, plant devices, or cause damage.`,example:`Tailgating scenario:
You badge into your office building.
Someone behind you says: "Oh, I work in
accounting on the 3rd floor. I left my
badge in my car - can you hold the door?"

They might:
- Actually work there (but should use visitor process)
- Be a malicious actor seeking physical access
- Be testing your security awareness

Correct response: Politely direct them to reception.`,keyPoints:["Don't hold secured doors open for anyone","Politely redirect people to visitor entrances/reception","Report people wandering without visible badges","Physical security is part of overall cybersecurity","Attackers count on politeness to bypass controls"]},prompt:`You're entering your office building with your badge. Someone behind you says:

"Oh, I forgot my badge! Can you hold the door? I work in accounting."

What's the best response?

A) Hold the door to be polite
B) Tell them to use the visitor entrance
C) Let them in if they seem trustworthy
D) Ignore them and let the door close`,hints:["Security protocols exist for a reason","Attackers exploit politeness","This is called tailgating or piggybacking","Visitor entrance provides proper verification","The flag is FLAG{B}"],answer:"B",flag:"FLAG{B}",explanation:"Politely direct them to the visitor entrance where they can get a temporary badge. Tailgating is a common physical security breach. Don't let politeness override security."},{id:"social-4",title:"USB Baiting",difficulty:"Hard",points:25,description:"Attackers sometimes leave infected USB drives in public places, hoping curious people will plug them in.",learningObjective:"Understand the risks of unknown physical media and social engineering tactics.",vocabularyTerms:["social-engineering","malware","exploit"],learn:{title:"USB Baiting and Physical Media Attacks",concept:`USB baiting is when attackers leave malware-infected USB drives in locations where targets will find them. The drives are often labeled with enticing text to encourage curiosity.

Common labels used:
- "Confidential", "Salary Information", "Layoff List"
- "Photos", "Personal"
- Company logos/names

When plugged in, the USB can:
- Auto-run malware
- Impersonate a keyboard (HID attack)
- Steal data once infected`,example:`USB attack types:
1. Autorun malware - Executes when plugged in
2. BadUSB - USB pretends to be a keyboard and
   types commands to download malware
3. USB Rubber Ducky - Specialized attack device
4. Data exfiltration - Steals files automatically

Real incident: Stuxnet worm spread to Iranian
nuclear facilities via infected USB drives.`,keyPoints:["NEVER plug unknown USB devices into any computer","Curiosity-inducing labels are intentional bait","USB attacks can compromise systems instantly","Report found USB drives to IT/Security","Some attacks work even with autorun disabled (HID attacks)"]},prompt:`You find a USB drive in the parking lot labeled "Executive Salaries 2024".

What should you do?

A) Plug it into your work computer to find the owner
B) Plug it into your personal computer to check contents
C) Take it to IT/Security without plugging it in
D) Throw it away`,hints:["USB drives can contain malware","The label is designed to make you curious","Never plug unknown devices into any computer","IT/Security has safe ways to examine it","Options C and D are both safe, but C is most helpful","The flag is FLAG{C}"],answer:"C",flag:"FLAG{C}",explanation:'This is "USB baiting". The label exploits curiosity. Never plug unknown USB drives into any computer. Report to IT/Security who can safely examine it in an isolated environment.'}]},_0=()=>Object.values(_n).flat(),M0=e=>_0().find(t=>t.id===e),wn={array:{term:"Array",definition:"A data structure that stores multiple values in a single variable. Access elements using an index number starting at 0.",category:"Arrays",example:"let colors = ['red', 'green', 'blue'];"},index:{term:"Index",definition:"The position number of an element in an array. Arrays are zero-indexed, meaning the first element is at index 0.",category:"Arrays",example:"colors[0] returns 'red' (the first element)"},element:{term:"Element",definition:"A single item stored in an array at a specific index position.",category:"Arrays"},length:{term:"Length",definition:"A property that returns how many elements are in an array. Access with array.length.",category:"Arrays",example:"['a','b','c'].length returns 3"},push:{term:"push()",definition:"An array method that adds a new element to the END of an array.",category:"Arrays",example:"arr.push(5) adds 5 to the end"},pop:{term:"pop()",definition:"An array method that removes and returns the LAST element from an array.",category:"Arrays",example:"arr.pop() removes the last item"},splice:{term:"splice()",definition:"An array method that can remove elements at any position. splice(index, count) removes 'count' elements starting at 'index'.",category:"Arrays",example:"arr.splice(2, 1) removes 1 element at index 2"},"parallel-arrays":{term:"Parallel Arrays",definition:"Multiple arrays that store related data, where index i in each array refers to the same item. Must stay the same length.",category:"Arrays",example:"names[i] and scores[i] refer to the same person"},"2d-array":{term:"2D Array",definition:"An array of arrays, creating a grid structure. Access with grid[row][col].",category:"Arrays",example:"grid[3][5] accesses row 3, column 5"},"for-loop":{term:"For Loop",definition:"A loop that repeats a specific number of times. Has three parts: initialization, condition, and increment.",category:"Loops",example:"for (let i = 0; i < 10; i++) { }"},"while-loop":{term:"While Loop",definition:"A loop that repeats as long as a condition is true. Use when you don't know how many times to repeat.",category:"Loops",example:"while (x < 100) { x += 10; }"},"nested-loop":{term:"Nested Loop",definition:"A loop inside another loop. The inner loop runs completely for each iteration of the outer loop. Used for grids.",category:"Loops",example:"for (row) { for (col) { } } creates a grid"},"loop-variable":{term:"Loop Variable",definition:"The variable (often i, j, or index) that changes each iteration. Use it to access array elements or calculate positions.",category:"Loops"},iteration:{term:"Iteration",definition:"One execution of the loop body. A loop with 10 iterations runs its code 10 times.",category:"Loops"},"infinite-loop":{term:"Infinite Loop",definition:"A loop that never ends because its condition is always true. Usually a bug - crashes the program!",category:"Loops"},traversal:{term:"Traversal",definition:"Visiting every element in an array, usually with a for-loop. The foundation of array processing.",category:"Traversal",example:"for (let i = 0; i < arr.length; i++) { }"},accumulator:{term:"Accumulator",definition:"A variable that collects or combines values during traversal. Often used for sum, count, or building strings.",category:"Traversal",example:"let sum = 0; for (...) { sum += arr[i]; }"},filter:{term:"Filter",definition:"Traversal that keeps only elements matching a condition, creating a new smaller array.",category:"Traversal",example:"Keep only numbers greater than 50"},reduce:{term:"Reduce",definition:"Traversal that combines all elements into a single value (sum, product, max, etc.).",category:"Traversal",example:"Sum all elements to get a total"},minimum:{term:"Minimum",definition:"The smallest value in an array. Found by traversing and tracking the smallest seen so far.",category:"Traversal"},maximum:{term:"Maximum",definition:"The largest value in an array. Found by traversing and tracking the largest seen so far.",category:"Traversal"},average:{term:"Average",definition:"The sum of all values divided by the count. Requires traversing to sum, then dividing by length.",category:"Traversal"},random:{term:"random()",definition:"p5.js function that generates random numbers. random(n) gives 0 to n. random(a, b) gives a to b.",category:"p5.js",example:"random(100) gives 0-99.999"},floor:{term:"floor()",definition:"Rounds a number DOWN to the nearest integer. Essential for random array indexes.",category:"p5.js",example:"floor(3.7) returns 3"},dist:{term:"dist()",definition:"Calculates the distance between two points. dist(x1, y1, x2, y2) returns the distance.",category:"p5.js",example:"dist(0, 0, 3, 4) returns 5"},keyPressed:{term:"keyPressed()",definition:"A p5.js function that runs once when any key is pressed. Use 'key' for letters, 'keyCode' for special keys.",category:"p5.js"},keyCode:{term:"keyCode",definition:"A variable containing the code of the last key pressed. Use with UP_ARROW, DOWN_ARROW, etc.",category:"p5.js",example:"if (keyCode == UP_ARROW) { }"},animation:{term:"Animation",definition:"Creating motion by changing values each frame. The draw() function runs 60 times per second.",category:"p5.js"},frame:{term:"Frame",definition:"One execution of the draw() function. At 60fps, draw() runs 60 times per second.",category:"p5.js"},conditional:{term:"Conditional",definition:"Code that only runs when a condition is true. Uses if, else if, and else.",category:"Concepts",example:"if (x > 50) { }"},modulo:{term:"Modulo (%)",definition:"The remainder after division. Useful for alternating patterns and wrapping values.",category:"Concepts",example:"7 % 3 = 1 (remainder of 7÷3)"},velocity:{term:"Velocity",definition:"Speed with direction. Add velocity to position each frame to create movement.",category:"Concepts",example:"x += vx; y += vy;"},bounce:{term:"Bounce",definition:"Reversing velocity when hitting a boundary. Multiply velocity by -1 to reverse direction.",category:"Concepts",example:"if (x > width) vx *= -1;"},collision:{term:"Collision",definition:"When two objects overlap or touch. Check positions to detect and respond to collisions.",category:"Concepts"},"particle-system":{term:"Particle System",definition:"A collection of many small objects (particles) that are created, updated, and removed over time.",category:"Concepts"},"game-loop":{term:"Game Loop",definition:"The cycle of update→draw that runs every frame. In p5.js, draw() is the game loop.",category:"Concepts"},state:{term:"State",definition:"The current condition of the program stored in variables. Game state might include score, level, player position.",category:"Concepts"},parameter:{term:"Parameter",definition:"A value that controls how something works. Changing parameters changes behavior without rewriting code.",category:"Concepts"},pattern:{term:"Pattern",definition:"A repeated visual design created with loops. Loop variables determine position, size, color of each element.",category:"Concepts"},grid:{term:"Grid",definition:"A 2D arrangement of cells in rows and columns. Created with nested loops or 2D arrays.",category:"Concepts"},spacing:{term:"Spacing",definition:"The distance between repeated elements. Calculate with width/(count+1) for even distribution.",category:"Concepts"},sum:{term:"Sum",definition:"The total when adding all values together. Calculate by traversing with an accumulator.",category:"Concepts"},visualization:{term:"Visualization",definition:"Representing data visually using shapes, colors, and positions. Arrays become visible!",category:"Concepts"}},F0={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]},de={PORT_SCAN:"port-scan",BRUTE_FORCE_SSH:"brute-force-ssh",SQL_INJECTION:"sql-injection",DATA_EXFILTRATION:"data-exfiltration",DDOS:"ddos",DNS_TUNNELING:"dns-tunneling"},Tm={[de.PORT_SCAN]:{name:"Port Scan",description:"An attacker is scanning multiple ports on your system to find open services.",severity:"medium",indicators:["Single source IP connecting to many different ports","Sequential or rapid port probing","SYN packets without completing handshake"],mitigation:"Block the scanning IP address"},[de.BRUTE_FORCE_SSH]:{name:"SSH Brute Force",description:"An attacker is attempting to guess SSH credentials through repeated login attempts.",severity:"high",indicators:["Multiple failed SSH authentication attempts","Same source IP with repeated connections to port 22","Various username attempts (root, admin, user)"],mitigation:"Block the attacking IP and implement rate limiting"},[de.SQL_INJECTION]:{name:"SQL Injection",description:"An attacker is attempting to inject malicious SQL code through web requests.",severity:"critical",indicators:["HTTP requests containing SQL keywords (SELECT, UNION, DROP)","Special characters in URL parameters (', --, ;)","Attempts to manipulate database queries"],mitigation:"Block the source IP and review web application security"},[de.DATA_EXFILTRATION]:{name:"Data Exfiltration",description:"Large amounts of data are being transferred to an external IP address.",severity:"critical",indicators:["Unusually large outbound data transfers","Data sent to unfamiliar external IPs","Sustained high-bandwidth connections"],mitigation:"Block the external IP and investigate compromised system"},[de.DDOS]:{name:"DDoS Attack",description:"Multiple sources are flooding the network with traffic to overwhelm services.",severity:"high",indicators:["High volume of traffic from many sources","Repeated requests to same destination","Network bandwidth saturation"],mitigation:"Enable rate limiting and block attacking IPs"},[de.DNS_TUNNELING]:{name:"DNS Tunneling",description:"Data is being exfiltrated through encoded DNS queries.",severity:"high",indicators:["Unusual DNS query patterns","Long subdomain names with encoded data","High volume of TXT record queries"],mitigation:"Block suspicious DNS queries and investigate endpoint"}},z0={[de.PORT_SCAN]:{windowSeconds:10,thresholds:{uniquePortsFromSameSource:5,packetsPerSecond:3},check:(e,t=1e4)=>{const s=Date.now(),i=e.filter(o=>new Date(o.timestamp).getTime()>s-t),r={};i.forEach(o=>{r[o.sourceIP]||(r[o.sourceIP]=new Set),r[o.sourceIP].add(o.destPort)});for(const[o,l]of Object.entries(r))if(l.size>=5)return{detected:!0,attackerIP:o,evidence:`${l.size} ports scanned`};return{detected:!1}}},[de.BRUTE_FORCE_SSH]:{windowSeconds:30,thresholds:{failedAttemptsFromSameSource:5},check:(e,t=3e4)=>{const s=Date.now(),i=e.filter(o=>new Date(o.timestamp).getTime()>s-t&&o.protocol==="SSH"&&o.info.toLowerCase().includes("failed")),r={};i.forEach(o=>{r[o.sourceIP]=(r[o.sourceIP]||0)+1});for(const[o,l]of Object.entries(r))if(l>=5)return{detected:!0,attackerIP:o,evidence:`${l} failed SSH attempts`};return{detected:!1}}},[de.SQL_INJECTION]:{patterns:[/('|"|;|--|\/\*|\*\/|union|select|insert|update|delete|drop|exec|execute)/i,/(or|and)\s+['"]?\d+['"]?\s*=\s*['"]?\d+/i,/'\s*(or|and)\s*'[^']*'\s*=\s*'/i],check:e=>{const t=e.filter(s=>s.protocol==="HTTP"&&s.isMalicious&&s.attackType===de.SQL_INJECTION);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} SQL injection attempts`}:{detected:!1}}},[de.DATA_EXFILTRATION]:{thresholds:{bytesPerWindow:1e5,windowSeconds:30},check:(e,t=3e4)=>{const s=Date.now(),i=e.filter(o=>new Date(o.timestamp).getTime()>s-t),r={};i.forEach(o=>{!o.destIP.startsWith("192.168.")&&!o.destIP.startsWith("10.")&&!o.destIP.startsWith("172.16.")&&(r[o.destIP]=(r[o.destIP]||0)+o.length)});for(const[o,l]of Object.entries(r))if(l>=1e5)return{detected:!0,attackerIP:o,evidence:`${Math.round(l/1024)}KB exfiltrated`};return{detected:!1}}},[de.DNS_TUNNELING]:{check:e=>{const t=e.filter(s=>s.protocol==="DNS"&&s.isMalicious&&s.attackType===de.DNS_TUNNELING);return t.length>=3?{detected:!0,attackerIP:t[0].sourceIP,evidence:`${t.length} suspicious DNS queries`}:{detected:!1}}}},Pt=[{id:"port-scan-basic",name:"Port Scan Detection",difficulty:"Easy",points:25,description:"A suspicious IP address is probing your network, scanning multiple ports to find vulnerable services. Identify and block the attacker.",learningObjective:"Learn to recognize port scanning behavior by observing sequential port connections from a single source.",attackType:de.PORT_SCAN,duration:60,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:3},hints:["Look for a single IP connecting to many different ports","Port scanners often use sequential port numbers","The attacker IP will have connections to ports like 21, 22, 23, 80, 443, etc."],backgroundTraffic:{packetsPerSecond:1,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:8,packetsPerSecond:1.5,attackerIP:"185.220.101.42",targetPorts:[21,22,23,25,80,110,143,443,445,3389,8080,8443]}},{id:"ssh-brute-force",name:"SSH Brute Force Attack",difficulty:"Medium",points:35,description:"An attacker is attempting to gain unauthorized access by guessing SSH credentials. Multiple failed login attempts indicate a brute force attack in progress.",learningObjective:"Understand how brute force attacks work and learn to identify repeated authentication failures.",attackType:de.BRUTE_FORCE_SSH,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for repeated SSH connections from the same IP","Failed authentication messages are a key indicator","Brute force attacks try common usernames: root, admin, user"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:10,packetsPerSecond:1,attackerIP:"198.51.100.77",targetPort:22,usernames:["root","admin","administrator","user","guest","test"]}},{id:"sql-injection-probe",name:"SQL Injection Probing",difficulty:"Medium",points:40,description:"Malicious HTTP requests containing SQL injection payloads are targeting your web application. These attacks attempt to manipulate database queries.",learningObjective:"Learn to identify SQL injection patterns in HTTP requests and understand common injection techniques.",attackType:de.SQL_INJECTION,duration:90,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:4},hints:[`Look for special characters in HTTP requests: ' " ; --`,"SQL keywords like UNION, SELECT, DROP are red flags","Check URL parameters and POST data for suspicious patterns"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS"]},attackConfig:{startDelay:10,packetsPerSecond:.75,attackerIP:"203.0.113.99",targetPort:80}},{id:"data-exfiltration",name:"Data Exfiltration",difficulty:"Medium",points:40,description:"A compromised internal system is sending large amounts of data to an external IP. This could indicate stolen data being transferred out of the network.",learningObjective:"Learn to detect unusual outbound traffic patterns that may indicate data theft.",attackType:de.DATA_EXFILTRATION,duration:120,successCriteria:{mustBlockAttacker:!0,mustIdentifyAttackType:!0,minMaliciousPacketsFlagged:5},hints:["Watch for unusually large packet sizes going outbound","The destination IP will be external (not 192.168.x.x or 10.x.x.x)","Look for sustained transfers to the same external destination"],backgroundTraffic:{packetsPerSecond:1.5,protocols:["HTTP","HTTPS","DNS","TCP"]},attackConfig:{startDelay:12,packetsPerSecond:1,attackerIP:"45.33.32.156",sourceIP:"192.168.1.105",minPacketSize:5e3,maxPacketSize:15e3}}],H0=()=>Pt.reduce((e,t)=>e+t.points,0),U0=()=>({total:Pt.length,easy:Pt.filter(e=>e.difficulty==="Easy").length,medium:Pt.filter(e=>e.difficulty==="Medium").length,hard:Pt.filter(e=>e.difficulty==="Hard").length,totalPoints:H0()}),ar={week1:{title:"Arrays Basics",bigIdea:"Arrays store collections of values that we can access by index.",days:[{day:1,title:"Intro to Arrays",objective:"Store multiple values in an array and access by index",exercises:[{id:"w1d1-1",title:"Color Palette Array",difficulty:"Easy",points:10,description:"Create an array of 5 color names and display them",explanation:{title:"What is an Array?",concept:`An array is a collection of values stored together under one name. Think of it like a row of boxes, each with a number (index) starting at 0.

Instead of creating separate variables:
let color1 = "red";
let color2 = "blue";
let color3 = "green";

You can use one array:
let colors = ["red", "blue", "green"];`,example:`// Creating an array of numbers
let scores = [95, 87, 72, 88, 91];

// Accessing elements by index
console.log(scores[0]); // 95 (first element)
console.log(scores[2]); // 72 (third element)
console.log(scores[4]); // 91 (fifth element)`,keyPoints:["Arrays hold multiple values in a single variable","Elements are accessed using index numbers","Indexes start at 0, not 1","Use square brackets [] to create arrays and access elements"]},prompt:"Create an array called `palette` with 5 colors. Use `palette[0]` to set the background color.",starterCode:`function setup() {
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
}`,hints:["Arrays are created with square brackets: let arr = []","Put strings in quotes inside the brackets","Access elements with arrayName[index]","The first element is at index 0"],vocabularyTerms:["array","index","element"],resources:[{title:"background()",url:"https://p5js.org/reference/p5/background/"},{title:"createCanvas()",url:"https://p5js.org/reference/p5/createCanvas/"}]},{id:"w1d1-2",title:"First, Last, Middle",difficulty:"Easy",points:10,description:"Access different positions in an array",explanation:{title:"Accessing Array Elements by Index",concept:`Every element in an array has a position number called an INDEX. The key rules:
- First element: index 0 (not 1!)
- Last element: index array.length - 1
- Middle element: index Math.floor(array.length / 2)

Why length - 1 for the last element?
An array with 5 items has indexes 0, 1, 2, 3, 4
The length is 5, but the last index is 4!`,example:`let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// Length is 5

// First element
console.log(fruits[0]); // "apple"

// Last element
console.log(fruits[fruits.length - 1]); // "elderberry"
// fruits.length - 1 = 5 - 1 = 4

// Middle element
let middleIndex = Math.floor(fruits.length / 2); // 2
console.log(fruits[middleIndex]); // "cherry"`,keyPoints:["Indexes start at 0, not 1","The last index is always length - 1","Use Math.floor() to get a whole number for the middle","array.length gives the total count of elements"]},prompt:"Given an array of words, display the first word, last word, and middle word on screen.",starterCode:`let words = ["loop", "array", "pixel", "code", "mouse"];

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
}`,hints:["First element is at index 0","Last element is at index array.length - 1","Middle index is Math.floor(array.length / 2)"],vocabularyTerms:["array","index","length"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"background()",url:"https://p5js.org/reference/p5/background/"}]},{id:"w1d1-3",title:"Random Word Display",difficulty:"Easy",points:15,description:"Pick and display a random element from an array",explanation:{title:"Picking Random Array Elements",concept:`To pick a random element from an array, you need a random INDEX (not a random value).

The pattern:
1. Generate a random number from 0 to length
2. Round it DOWN to get a valid index
3. Use that index to access the array

Why floor()? Because random() gives decimals like 2.7, but indexes must be whole numbers like 2.`,example:`let animals = ["cat", "dog", "bird", "fish"];

// random(4) gives something like 2.73
// floor(2.73) gives 2
// animals[2] gives "bird"

let randomIndex = floor(random(animals.length));
let randomAnimal = animals[randomIndex];

// Or in one line:
let pick = animals[floor(random(animals.length))];`,keyPoints:["random(n) gives a decimal from 0 up to (but not including) n","floor() rounds DOWN to the nearest integer","This pattern works for any array size","Never use random() directly as an index - always floor() it!"]},prompt:"Display a random word from the array. Click to show a new random word.",starterCode:`let words = ["loop", "array", "pixel", "code", "mouse"];
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
}`,hints:["random(n) gives a number from 0 to n","floor() rounds down to a whole number","Use random(words.length) to get a valid index"],vocabularyTerms:["array","random","index"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textAlign()",url:"https://p5js.org/reference/p5/textAlign/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"floor()",url:"https://p5js.org/reference/p5/floor/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}]}],exitTicket:"What does words[0] mean in an array called words?"},{day:2,title:"Push and Pop",objective:"Add and remove items with push() and pop()",exercises:[{id:"w1d2-1",title:"Click to Add",difficulty:"Easy",points:10,description:"Use push() to add mouse positions to an array",explanation:{title:"Adding Elements with push()",concept:`Arrays can grow! The push() method adds a new element to the end of an array.

Before push: ["a", "b", "c"]
After push("d"): ["a", "b", "c", "d"]

This is perfect for when you don't know ahead of time how many items you'll have - like tracking mouse clicks!`,example:`let fruits = ["apple", "banana"];
console.log(fruits); // ["apple", "banana"]

fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]

fruits.push("grape");
console.log(fruits); // ["apple", "banana", "orange", "grape"]`,keyPoints:["push() adds to the END of an array","The array grows by one each time you push","You can push any value: numbers, strings, objects","push() returns the new length of the array"]},prompt:"Click anywhere to add that X position to an array. Draw circles at all saved positions.",starterCode:`let xs = [];

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
}`,hints:["push() adds to the end of an array","Use a for loop to go through all elements","xs.length tells you how many items"],vocabularyTerms:["push","array","length"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"mouseX / mouseY",url:"https://p5js.org/reference/p5/mouseX/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]},{id:"w1d2-2",title:"Undo with Pop",difficulty:"Easy",points:15,description:"Use pop() to remove the last item",explanation:{title:"Removing Elements with pop()",concept:`The pop() method removes the LAST element from an array - like an "undo" button!

Before pop: ["a", "b", "c", "d"]
After pop:  ["a", "b", "c"]

pop() is the opposite of push():
- push() adds to the end
- pop() removes from the end

This makes arrays perfect for undo features!`,example:`let actions = ["draw", "color", "resize", "move"];

// Remove the last action (undo)
let removed = actions.pop();
console.log(removed);  // "move"
console.log(actions);  // ["draw", "color", "resize"]

// Pop again
actions.pop();
console.log(actions);  // ["draw", "color"]

// Pop returns the removed item (useful sometimes!)`,keyPoints:["pop() removes the LAST element from an array","The array shrinks by one each time","pop() returns the removed element","Calling pop() on an empty array returns undefined"]},prompt:"Click to add dots. Press 'U' to undo (remove) the last dot.",starterCode:`let xs = [];

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
}`,hints:["pop() removes the last element","Check which key was pressed with key == 'U'","pop() returns the removed item (but you don't need to use it)"],vocabularyTerms:["pop","push","keyPressed"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"},{title:"key",url:"https://p5js.org/reference/p5/key/"}]}],exitTicket:"What's the difference between push() and pop()?"},{day:3,title:"Parallel Arrays",objective:"Use multiple arrays to store related data",exercises:[{id:"w1d3-1",title:"X and Y Positions",difficulty:"Medium",points:15,description:"Store both x and y coordinates in parallel arrays",explanation:{title:"Parallel Arrays",concept:`Parallel arrays are multiple arrays that work together. The same index in each array refers to the same "thing".

For a point, you need BOTH x AND y. We use two arrays:
- xs[0] and ys[0] = coordinates of point 0
- xs[1] and ys[1] = coordinates of point 1
- And so on...

The key rule: keep them the same length!`,example:`// Parallel arrays for student data
let names = ["Alice", "Bob", "Carol"];
let scores = [95, 87, 92];
let grades = ["A", "B", "A"];

// names[1], scores[1], and grades[1] all refer to Bob
console.log(names[1] + " got " + scores[1]); // "Bob got 87"`,keyPoints:["Parallel arrays store related data at matching indexes","Index i in one array corresponds to index i in another","When you push to one, push to all of them","When you pop from one, pop from all of them"]},prompt:"Click to place dots. Store x positions in one array and y positions in another.",starterCode:`let xs = [];
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
}`,hints:["Parallel arrays have the same length","Index i refers to the same item in both arrays","Push to both arrays at the same time"],vocabularyTerms:["parallel-arrays","index","push"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"mouseX / mouseY",url:"https://p5js.org/reference/p5/mouseX/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}]},{id:"w1d3-2",title:"Three Parallel Arrays",difficulty:"Medium",points:20,description:"Add random sizes to each dot",explanation:{title:"Scaling Up: More Parallel Arrays",concept:`You can have ANY number of parallel arrays! Each array stores one property:
- xs[] stores x positions
- ys[] stores y positions
- sizes[] stores sizes
- colors[] stores colors
- ...and so on!

The golden rule: THE SAME INDEX refers to the same object across ALL arrays.

xs[3], ys[3], sizes[3], colors[3] = all properties of item #3`,example:`let xs = [];
let ys = [];
let sizes = [];
let colors = [];

function addCircle(x, y) {
  xs.push(x);
  ys.push(y);
  sizes.push(random(10, 50));
  colors.push(color(random(255), random(255), random(255)));
}

// Draw all circles
for (let i = 0; i < xs.length; i++) {
  fill(colors[i]);
  circle(xs[i], ys[i], sizes[i]);
}`,keyPoints:["Add one element to EACH array when creating an object","Remove from ALL arrays when deleting (keep them synchronized!)","Loop using one array's length - they should all be equal","Later you'll learn about objects - a cleaner way to group data"]},prompt:"Extend the previous exercise: also store a random size for each dot.",starterCode:`let xs = [];
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
}`,hints:["random(10, 50) gives a number between 10 and 50","All three arrays must stay the same length","Use sizes[i] for the diameter of each circle"],vocabularyTerms:["parallel-arrays","random"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}]}],exitTicket:"Why must parallel arrays always have the same length?"},{day:4,title:"Random Selection",objective:"Select random elements and change array values",exercises:[{id:"w1d4-1",title:"Color Switcher",difficulty:"Easy",points:10,description:"Click to pick a random background color from a palette",explanation:{title:"Random Selection from Arrays",concept:`Arrays are perfect for storing options you want to choose from randomly!

Instead of writing complex if/else chains:
if (choice == 1) color = "red";
else if (choice == 2) color = "blue";
...

Just pick randomly from an array:
let color = colors[floor(random(colors.length))];

This works for colors, words, sounds, images - anything!`,example:`// Array of options
let greetings = ["Hello!", "Hi there!", "Hey!", "Howdy!"];

// Pick a random greeting
function getRandomGreeting() {
  let index = floor(random(greetings.length));
  return greetings[index];
}

// Use it
console.log(getRandomGreeting()); // Random greeting each time!`,keyPoints:["Store your options in an array","Use floor(random(array.length)) to get a random index","This pattern scales to any number of options","Easy to add/remove options - just change the array!"]},prompt:"Each click should pick a new random color from your palette array.",starterCode:`let colors = ["red", "orange", "yellow", "green", "blue"];
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
}`,hints:["Get array length with colors.length","random(n) gives 0 to n-1 (but as a decimal)","floor() rounds down to an integer"],vocabularyTerms:["random","index","floor"],resources:[{title:"background()",url:"https://p5js.org/reference/p5/background/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"floor()",url:"https://p5js.org/reference/p5/floor/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}]}],exitTicket:"Why do we need floor() when picking a random index?"},{day:5,title:"Mini-Project: Click Collector",objective:"Build a complete interactive sketch using arrays",exercises:[{id:"w1d5-project",title:"Click Collector",difficulty:"Medium",points:50,isProject:!0,description:"Create an interactive dot collector with undo and clear features",explanation:{title:"Combining Array Operations",concept:`This project combines everything from Week 1:
1. Parallel arrays - store x, y, and color together
2. push() - add new dots when clicking
3. pop() - remove last dot for undo
4. Resetting arrays - set to [] to clear all

The key insight: parallel arrays must always stay synchronized!`,example:`// Always modify parallel arrays together
function addDot() {
  xs.push(mouseX);
  ys.push(mouseY);
  colors.push(randomColor());
}

function undoLastDot() {
  xs.pop();
  ys.pop();
  colors.pop();
}

function clearAll() {
  xs = [];
  ys = [];
  colors = [];
}`,keyPoints:["Keep parallel arrays synchronized","push() to all arrays together when adding","pop() from all arrays together when removing","Set arrays to [] to clear them completely"]},prompt:`Build a sketch where:
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
}`,hints:["Use color(r, g, b) to create a color object","Pop from ALL arrays when undoing","Set arrays to [] to clear them"],vocabularyTerms:["parallel-arrays","push","pop"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"},{title:"color()",url:"https://p5js.org/reference/p5/color/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"}],rubric:{functionality:"Click adds dots, U undoes, C clears",arrays:"Uses parallel arrays correctly",colors:"Each dot has random color",display:"Shows helpful information to user"}}]}]},week2:{title:"Loops Basics",bigIdea:"Loops repeat instructions efficiently.",days:[{day:6,title:"For Loops",objective:"Use for-loops to repeat drawing commands",exercises:[{id:"w2d6-1",title:"Row of Circles",difficulty:"Easy",points:10,description:"Draw 10 circles in a row using a for-loop",explanation:{title:"The For Loop",concept:`A for-loop repeats code a specific number of times. It has three parts:
1. Initialization: let i = 0 (start at 0)
2. Condition: i < 10 (keep going while true)
3. Update: i++ (add 1 after each loop)

for (let i = 0; i < 10; i++) {
  // This code runs 10 times
  // i goes: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
}`,example:`// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5

// Draw 5 circles at different x positions
for (let i = 0; i < 5; i++) {
  let x = 50 + i * 100; // x = 50, 150, 250, 350, 450
  circle(x, 200, 40);
}`,keyPoints:["i is the loop variable (you can name it anything)","i++ is shorthand for i = i + 1","The loop stops when the condition becomes false","Use i to calculate different values each time"]},prompt:"Use a for-loop to draw 10 circles evenly spaced across the canvas.",starterCode:`function setup() {
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
}`,hints:["for (let i = 0; i < 10; i++) repeats 10 times","Use i to calculate different x positions","Multiply i by a spacing value"],vocabularyTerms:["for-loop","iteration","loop-variable"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"height",url:"https://p5js.org/reference/p5/height/"},{title:"width",url:"https://p5js.org/reference/p5/width/"}]},{id:"w2d6-2",title:"Spacing Formula",difficulty:"Medium",points:15,description:"Calculate spacing to fit any number of circles",explanation:{title:"Dynamic Spacing with Math",concept:`Hardcoding spacing values (like 50, 100, etc.) breaks when you change the count. Instead, CALCULATE the spacing based on the canvas size and number of items.

The formula: spacing = width / (n + 1)
Position of item i: spacing * (i + 1)

Why n + 1? Because we need n items plus margins on both sides!

|  •  •  •  •  |  ← 4 items need 5 gaps`,example:`let n = 6; // Try changing this!

function draw() {
  background(240);
  let spacing = width / (n + 1);

  for (let i = 0; i < n; i++) {
    let x = spacing * (i + 1);
    circle(x, height/2, 30);
  }
}

// With n=6 and width=700:
// spacing = 700/7 = 100
// Circles at: 100, 200, 300, 400, 500, 600`,keyPoints:["Calculate spacing from canvas size, don't hardcode it","spacing = totalSize / (count + 1) for even distribution","Position = spacing * (index + 1)","This pattern adapts automatically when n changes"]},prompt:"Draw n circles that are always evenly spaced, regardless of the value of n.",starterCode:`let n = 8;

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
}`,hints:["Divide width by (n + 1) to get spacing","Multiply spacing by (i + 1) for each position","Try changing n to see if it still works"],vocabularyTerms:["for-loop","spacing"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"What are the three parts of a for-loop declaration?"},{day:7,title:"Loop Patterns",objective:"Use loop variables to create visual patterns",exercises:[{id:"w2d7-1",title:"Staircase",difficulty:"Medium",points:15,description:"Draw a staircase pattern using a loop",explanation:{title:"Using Loop Variables for Position",concept:`The loop variable i isn't just a counter - it's a tool for creating patterns!

For a staircase:
- X position INCREASES with i (moving right)
- Y position DECREASES with i (moving up)

Each iteration draws at a different spot:
i=0: bottom-left
i=1: one step right and up
i=2: another step right and up
...`,example:`// Staircase going UP and RIGHT
for (let i = 0; i < 10; i++) {
  let x = 50 + i * 60;    // Move right: 50, 110, 170, ...
  let y = 400 - i * 35;   // Move up: 400, 365, 330, ...
  rect(x, y, 50, 30);
}

// The pattern:
// x increases → moves RIGHT
// y decreases → moves UP (remember: y=0 is TOP!)`,keyPoints:["Use i to calculate both x and y positions","i * stepSize creates evenly spaced steps","Subtracting from y moves things UP","Adding to x moves things RIGHT"]},prompt:"Draw rectangles that form a staircase going up from left to right.",starterCode:`function setup() {
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
}`,hints:["X position increases with i","Y position decreases with i (going up)","Use i * stepSize for both"],vocabularyTerms:["for-loop","pattern"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"background()",url:"https://p5js.org/reference/p5/background/"}]},{id:"w2d7-2",title:"Growing Circles",difficulty:"Medium",points:15,description:"Draw circles that grow in size",explanation:{title:"Loop Variables for Size",concept:`Loop variables can control ANY property - not just position! You can make size, color, opacity, or anything else change with each iteration.

For growing circles:
size = baseSize + i * increment

i=0: size = 20 + 0*15 = 20
i=1: size = 20 + 1*15 = 35
i=2: size = 20 + 2*15 = 50
...`,example:`// Concentric circles (same center, growing size)
noFill();
for (let i = 0; i < 8; i++) {
  let size = 30 + i * 25;
  circle(width/2, height/2, size);
}

// Or circles in a row, each bigger
for (let i = 0; i < 8; i++) {
  let x = 50 + i * 80;
  let size = 20 + i * 10;
  circle(x, height/2, size);
}`,keyPoints:["size = baseSize + i * increment creates growth","noFill() lets you see overlapping circles","Combine position AND size changes for cool effects","The loop variable i can affect multiple properties at once"]},prompt:"Draw 8 circles where each one is larger than the last.",starterCode:`function setup() {
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
}`,hints:["Size can also depend on i","Start with a base size and add i * increment","noFill() makes circles hollow"],vocabularyTerms:["for-loop","loop-variable"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"noFill()",url:"https://p5js.org/reference/p5/noFill/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"How can you make each loop iteration draw something different?"},{day:8,title:"Animation with Loops",objective:"Combine loops with animation",exercises:[{id:"w2d8-1",title:"Moving Object",difficulty:"Easy",points:10,description:"Animate a circle moving across the screen",explanation:{title:"Animation: The draw() Loop",concept:`Here's the secret: draw() IS a loop! It runs about 60 times per second automatically.

To animate:
1. Store position in a variable OUTSIDE draw()
2. Draw the object at that position
3. Change the position slightly
4. Repeat (draw() handles this!)

Each frame shows the object in a slightly different spot = animation!`,example:`let x = 0; // Position variable (outside draw)

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(240);     // Clear previous frame
  circle(x, 250, 40);  // Draw at current position
  x = x + 3;           // Move for next frame

  // Wrap around when off screen
  if (x > width) {
    x = 0;
  }
}`,keyPoints:["draw() runs ~60 times per second automatically","Store position in a global variable (outside functions)","Change the position each frame to create movement","Use if-statements to wrap around or bounce"]},prompt:"Make a circle move from left to right, resetting when it goes off screen.",starterCode:`let x = 0;

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
}`,hints:["Increment x each frame","Check if x > width to reset","The draw() function is already a loop!"],vocabularyTerms:["animation","frame","conditional"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]},{id:"w2d8-2",title:"Multiple Moving Objects",difficulty:"Medium",points:20,description:"Animate multiple circles at different speeds",explanation:{title:"Arrays for Animation",concept:`To animate MULTIPLE objects, use arrays to store each object's position and properties.

Pattern:
- xs[] stores x positions
- speeds[] stores how fast each moves
- Loop through them to update and draw ALL

Each object has its own entry in the arrays, so they can move independently!`,example:`let xs = [0, 0, 0];        // Starting positions
let speeds = [2, 4, 6];    // Different speeds

function draw() {
  background(240);

  for (let i = 0; i < xs.length; i++) {
    // Draw this circle
    let y = 100 + i * 100;  // Different y for each
    circle(xs[i], y, 30);

    // Move this circle
    xs[i] += speeds[i];

    // Wrap around
    if (xs[i] > width) {
      xs[i] = 0;
    }
  }
}`,keyPoints:["Use arrays to track multiple objects' states","Each object can have its own speed, color, size, etc.","Loop through arrays to update and draw all objects","This is the foundation of particle systems and games!"]},prompt:"Create 5 circles at different y positions, each moving at a different speed.",starterCode:`let xs = [0, 0, 0, 0, 0];
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
}`,hints:["Each circle has its own x in the array","Each circle has its own speed","Update each x by its corresponding speed"],vocabularyTerms:["animation","parallel-arrays","for-loop"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"background()",url:"https://p5js.org/reference/p5/background/"}]}],exitTicket:"Why don't we need a for-loop to make something animate?"},{day:9,title:"While Loops",objective:"Use while-loops for conditional repetition",exercises:[{id:"w2d9-1",title:"Dice Roller",difficulty:"Easy",points:10,description:"Roll dice until you get a 6",explanation:{title:"The While Loop",concept:`A while-loop repeats as long as a condition is true. You don't need to know how many times it will run!

while (condition) {
  // Keep doing this...
}

Use while when:
- You don't know how many times to loop
- You're waiting for something to happen
- You want to keep going until a condition changes`,example:`// Keep rolling until you get a 6
let roll = 0;
let attempts = 0;

while (roll != 6) {
  roll = floor(random(1, 7));
  attempts++;
}

console.log("Got 6 after " + attempts + " rolls!");`,keyPoints:["while loops run an unknown number of times","The condition is checked BEFORE each iteration","Make sure something changes to avoid infinite loops!","Use for-loops when you know the count, while-loops when you don't"]},prompt:"Use a while-loop to count how many rolls it takes to get a 6.",starterCode:`function setup() {
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
}`,hints:["while (condition) repeats until condition is false","random(1, 7) gives 1-6 (not including 7)","Increment rolls inside the loop"],vocabularyTerms:["while-loop","condition","random"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"floor()",url:"https://p5js.org/reference/p5/floor/"}]},{id:"w2d9-2",title:"Random Dots Until Full",difficulty:"Medium",points:15,description:"Place random dots until you have 100",explanation:{title:"Counting with While Loops",concept:`While loops are great when you want to do something a certain number of times but prefer the "keep going until..." mindset.

while (count < target) {
  // Do something
  count++;
}

This keeps going UNTIL count reaches the target. Don't forget to increment count, or you'll have an infinite loop!`,example:`let count = 0;

while (count < 50) {
  // Place a random dot
  let x = random(width);
  let y = random(height);
  point(x, y);

  count++;  // IMPORTANT: don't forget this!
}

// After the loop, count is 50 and we have 50 dots

// You COULD use a for-loop instead, but while
// makes the "keep going until full" idea clearer.`,keyPoints:["while (count < n) runs exactly n times (if you count++)","Initialize count before the loop","Increment count INSIDE the loop","Forgetting count++ causes an infinite loop!"]},prompt:"Use a while-loop to place 100 random dots on the canvas.",starterCode:`function setup() {
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
}`,hints:["while (count < 100) runs until count is 100","Place one dot per iteration","Don't forget to increment count!"],vocabularyTerms:["while-loop","random","iteration"],resources:[{title:"point()",url:"https://p5js.org/reference/p5/point/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"When would you use a while-loop instead of a for-loop?"},{day:10,title:"Mini-Project: Pattern Poster Generator",objective:"Create an interactive pattern generator using loops",exercises:[{id:"w2d10-project",title:"Pattern Poster Generator",difficulty:"Medium",points:50,isProject:!0,description:"Create a tool that generates different loop-based patterns",explanation:{title:"Building Interactive Tools",concept:`This project combines loops with user interaction to create a tool, not just a sketch.

Key concepts:
1. MODE variable - tracks which pattern to show
2. PARAMETERS - values that can change (count, spacing, colors)
3. KEY HANDLING - switch modes and randomize

The pattern:
if (mode == 1) { drawPattern1(); }
if (mode == 2) { drawPattern2(); }
...`,example:`let mode = 1;
let count = 10;
let spacing = 30;

function draw() {
  background(30);

  if (mode == 1) {
    // Circles in a row
    for (let i = 0; i < count; i++) {
      circle(50 + i * spacing, height/2, 20);
    }
  }

  if (mode == 2) {
    // Concentric circles
    for (let i = 0; i < count; i++) {
      circle(width/2, height/2, i * spacing);
    }
  }
}

function keyPressed() {
  if (key == '1') mode = 1;
  if (key == '2') mode = 2;
  if (key == 'r') {
    count = floor(random(5, 20));
    spacing = floor(random(20, 50));
  }
}`,keyPoints:["Use a mode variable to track which pattern to show","Parameters let users customize without changing code","keyPressed() handles user input","Each pattern should use loops creatively"]},prompt:`Build a sketch where:
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
}`,hints:["Use if (mode == n) to show different patterns","Each pattern should use a for-loop","Parameters like count and spacing make patterns adjustable"],vocabularyTerms:["for-loop","pattern","parameter"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"point()",url:"https://p5js.org/reference/p5/point/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"noFill()",url:"https://p5js.org/reference/p5/noFill/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"cos()",url:"https://p5js.org/reference/p5/cos/"},{title:"sin()",url:"https://p5js.org/reference/p5/sin/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"}],rubric:{patterns:"At least 3 different loop patterns",switching:"Keys switch between patterns",randomize:"R randomizes parameters",creativity:"Patterns are visually interesting"}}]}]},week3:{title:"Traversing Arrays",bigIdea:"Loops + arrays = traversal. Read and update every element.",days:[{day:11,title:"Traversal Basics",objective:"Loop through arrays to draw many objects",exercises:[{id:"w3d11-1",title:"Draw All Points",difficulty:"Easy",points:10,description:"Traverse an array to draw all stored points",explanation:{title:"Array Traversal",concept:`Traversal means visiting every element in an array, one by one. The pattern is simple:

for (let i = 0; i < array.length; i++) {
  // Do something with array[i]
}

This is incredibly useful for:
- Drawing all items
- Finding specific values
- Calculating totals
- Updating all elements`,example:`let temperatures = [72, 68, 75, 80, 77];

// Traverse to print all temperatures
for (let i = 0; i < temperatures.length; i++) {
  console.log("Day " + i + ": " + temperatures[i] + "°F");
}

// Output:
// Day 0: 72°F
// Day 1: 68°F
// ... and so on`,keyPoints:["Use array.length in the condition (never hardcode the size)","i goes from 0 to length - 1","array[i] accesses each element in order","Traversal is the foundation of many array operations"]},prompt:"Click to add points. Use a loop to draw a circle at every saved position.",starterCode:`let xs = [];
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
}`,hints:["Traversal means visiting every element","Loop from 0 to array.length","Use i as the index for both arrays"],vocabularyTerms:["traversal","for-loop","array"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"mouseX / mouseY",url:"https://p5js.org/reference/p5/mouseX/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}]}],exitTicket:"What does 'traversing an array' mean?"},{day:12,title:"Computing Values",objective:"Traverse to compute min, max, and average",exercises:[{id:"w3d12-1",title:"Sum and Average",difficulty:"Medium",points:15,description:"Calculate the average of array values",explanation:{title:"The Accumulator Pattern",concept:`To calculate a sum (and then average), use the ACCUMULATOR pattern:
1. Start with a variable set to 0
2. Traverse the array
3. Add each element to the accumulator
4. After the loop, you have the total!

Average = sum / count

This pattern works for adding, counting, or combining values.`,example:`let grades = [85, 92, 78, 90, 88];

// Accumulator pattern for sum
let sum = 0;  // Start at 0
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];  // Add each element
}
// sum is now 433

// Calculate average
let average = sum / grades.length;
// average is 86.6

// Display nicely
console.log(average.toFixed(1)); // "86.6"`,keyPoints:["Initialize the accumulator to 0 before the loop","Use += to add each element to the accumulator","Divide by array.length for the average","toFixed(n) rounds to n decimal places"]},prompt:"Given an array of scores, calculate and display the average.",starterCode:`let scores = [85, 92, 78, 95, 88, 72, 90];

function setup() {
  createCanvas(800, 500);
  background(240);
  textSize(24);
  fill(0);

  let sum = 0;
  // Calculate sum by traversing

  let average = 0;
  // Calculate average

  text("Average: " + average, 50, 100);
}`,solutionCode:`let scores = [85, 92, 78, 95, 88, 72, 90];

function setup() {
  createCanvas(800, 500);
  background(240);
  textSize(24);
  fill(0);

  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  let average = sum / scores.length;

  text("Average: " + average.toFixed(1), 50, 100);
}`,hints:["Start sum at 0","Add each element to sum","Divide sum by length for average"],vocabularyTerms:["traversal","accumulator","average"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"}]},{id:"w3d12-2",title:"Find Min and Max",difficulty:"Medium",points:20,description:"Find the smallest and largest values",explanation:{title:"Finding Minimum and Maximum",concept:`To find min/max, compare each element against the current best:

1. Initialize min and max to the FIRST element
2. Traverse the array
3. If current element < min, update min
4. If current element > max, update max

Why start with first element (not 0)?
- If all values are negative, 0 would be wrong for max
- The first element is guaranteed to be in the array!`,example:`let temps = [-5, 12, 8, -2, 15, 3];

let min = temps[0];  // Start with first: -5
let max = temps[0];  // Start with first: -5

for (let i = 0; i < temps.length; i++) {
  if (temps[i] < min) {
    min = temps[i];  // Found smaller value
  }
  if (temps[i] > max) {
    max = temps[i];  // Found larger value
  }
}

console.log("Min: " + min);  // -5
console.log("Max: " + max);  // 15`,keyPoints:["Initialize min/max with the first element, not 0","Use < for finding minimum, > for finding maximum","Update only when you find a better value","This pattern finds extremes in any collection"]},prompt:"Traverse the array to find both minimum and maximum values.",starterCode:`let nums = [34, 67, 12, 89, 45, 23, 78];

function setup() {
  createCanvas(800, 500);
  background(240);
  textSize(24);
  fill(0);

  let minVal = nums[0];
  let maxVal = nums[0];

  // Traverse to find min and max

  text("Min: " + minVal, 50, 100);
  text("Max: " + maxVal, 50, 150);
}`,solutionCode:`let nums = [34, 67, 12, 89, 45, 23, 78];

function setup() {
  createCanvas(800, 500);
  background(240);
  textSize(24);
  fill(0);

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
}`,hints:["Start min and max with first element","Compare each element to current min/max","Update if you find a smaller/larger value"],vocabularyTerms:["traversal","minimum","maximum"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"}]}],exitTicket:"Why do we initialize min and max with the first array element?"},{day:13,title:"Conditional Highlighting",objective:"Traverse with conditions to highlight specific elements",exercises:[{id:"w3d13-1",title:"Closest to Mouse",difficulty:"Medium",points:20,description:"Find and highlight the point closest to the mouse",explanation:{title:"Finding the Closest Element",concept:`Finding the "closest" element combines min-finding with distance calculation.

Pattern:
1. Start with closestDist = Infinity (infinitely far)
2. Traverse and calculate distance to each element
3. If distance < closestDist, update closestDist AND save the index
4. After loop, you know WHICH element is closest

Use Infinity as starting distance so any real distance will be smaller.`,example:`let xs = [100, 200, 300, 400];
let ys = [150, 250, 100, 300];

let closestIndex = -1;
let closestDist = Infinity;

for (let i = 0; i < xs.length; i++) {
  let d = dist(mouseX, mouseY, xs[i], ys[i]);
  if (d < closestDist) {
    closestDist = d;
    closestIndex = i;
  }
}

// closestIndex now points to the nearest point
// Use it to highlight that point differently`,keyPoints:["dist(x1, y1, x2, y2) calculates distance between two points","Infinity is larger than any number - perfect for initializing 'closest'","Track both the distance AND the index","Two loops: one to find closest, one to draw (with highlighting)"]},prompt:"Traverse all points to find which one is closest to the mouse, and highlight it.",starterCode:`let xs = [];
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
}`,hints:["dist() calculates distance between two points","Infinity is larger than any number","Track both the closest distance AND index"],vocabularyTerms:["traversal","dist","conditional"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"dist()",url:"https://p5js.org/reference/p5/dist/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"mouseX / mouseY",url:"https://p5js.org/reference/p5/mouseX/"}]}],exitTicket:"Why do we need two separate loops in the closest-point solution?"},{day:14,title:"Updating Elements",objective:"Traverse to modify array values",exercises:[{id:"w3d14-1",title:"Moving All Points",difficulty:"Medium",points:15,description:"Add velocity to make all points move",explanation:{title:"Velocity: Position + Change",concept:`Velocity is the CHANGE in position each frame. To animate smoothly:

position = position + velocity

Or with arrays:
xs[i] = xs[i] + vx[i]  (or xs[i] += vx[i])

Store velocity as parallel arrays (vx for x-velocity, vy for y-velocity).
Positive velocity = move right/down
Negative velocity = move left/up`,example:`let xs = [100, 200, 300];
let ys = [100, 200, 300];
let vx = [2, -1, 3];    // x velocities
let vy = [1, 2, -1];    // y velocities

function draw() {
  background(240);

  for (let i = 0; i < xs.length; i++) {
    // Update position
    xs[i] += vx[i];
    ys[i] += vy[i];

    // Draw
    circle(xs[i], ys[i], 20);
  }
}`,keyPoints:["Velocity is how much position changes each frame","Use += to update: position += velocity","vx and vy are parallel arrays to xs and ys","Positive = right/down, negative = left/up"]},prompt:"Each point has a velocity. Update all positions each frame.",starterCode:`let xs = [];
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
}`,hints:["vx and vy are velocity (speed + direction)","Add velocity to position each frame","xs[i] += vx[i] updates the position"],vocabularyTerms:["traversal","velocity","update"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]},{id:"w3d14-2",title:"Bounce Off Walls",difficulty:"Medium",points:20,description:"Make points bounce when they hit edges",explanation:{title:"Bouncing: Reversing Velocity",concept:`To make objects bounce, reverse their velocity when they hit a wall.

Hitting left/right wall? Reverse x-velocity: vx = vx * -1
Hitting top/bottom wall? Reverse y-velocity: vy = vy * -1

Check each direction separately:
- x < 0 or x > width → reverse vx
- y < 0 or y > height → reverse vy`,example:`for (let i = 0; i < xs.length; i++) {
  // Update position
  xs[i] += vx[i];
  ys[i] += vy[i];

  // Bounce off left/right walls
  if (xs[i] < 0 || xs[i] > width) {
    vx[i] *= -1;  // Reverse x direction
  }

  // Bounce off top/bottom walls
  if (ys[i] < 0 || ys[i] > height) {
    vy[i] *= -1;  // Reverse y direction
  }

  circle(xs[i], ys[i], 20);
}`,keyPoints:["Multiply velocity by -1 to reverse direction","*= -1 is shorthand for variable = variable * -1","Check x and y bounds separately","|| means OR - true if either condition is true"]},prompt:"Extend the moving points: reverse velocity when hitting walls.",starterCode:`let xs = [];
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
}`,hints:["Check if position is outside bounds","Multiply velocity by -1 to reverse","Check x and y separately"],vocabularyTerms:["traversal","bounce","conditional"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"How do you reverse a velocity value?"},{day:15,title:"Mini-Project: Particle Fountain",objective:"Create a particle system with spawning and removal",exercises:[{id:"w3d15-project",title:"Particle Fountain",difficulty:"Hard",points:50,isProject:!0,description:"Create an interactive particle system",explanation:{title:"Particle Systems and Element Removal",concept:`A particle system manages many objects that are born, live, and die:
1. Spawn: push() new particles with position, velocity, life
2. Update: move particles, apply gravity, decrease life
3. Remove: splice() dead particles from arrays

IMPORTANT: When removing elements, loop BACKWARDS!
Why? Removing shifts all later elements down, messing up indexes.`,example:`// WRONG - skips elements when removing
for (let i = 0; i < arr.length; i++) {
  if (shouldRemove(arr[i])) {
    arr.splice(i, 1); // Later elements shift!
  }
}

// CORRECT - loop backwards
for (let i = arr.length - 1; i >= 0; i--) {
  if (shouldRemove(arr[i])) {
    arr.splice(i, 1); // Safe - earlier elements unaffected
  }
}`,keyPoints:["Loop BACKWARDS when removing elements with splice()","splice(i, 1) removes 1 element at index i","Gravity: add a constant to vy each frame","Life decreases over time, remove when <= 0"]},prompt:`Build a particle fountain:
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
}`,hints:["Loop BACKWARDS when removing elements","splice(i, 1) removes element at index i","Gravity: add to vy each frame","Life decreases; remove when <= 0"],vocabularyTerms:["traversal","splice","particle-system"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}],rubric:{spawning:"Click spawns multiple particles",physics:"Gravity affects particles",lifecycle:"Particles shrink and are removed",visuals:"Particles look good (fade, color, etc.)"}}]}]},pixelWeek:{title:"Pixel Array Project",bigIdea:"The canvas is just an array of pixels. Traverse it to create stunning visual effects.",isCulminating:!0,prerequisiteWeeks:["week1","week2","week3"],days:[{day:"P1",title:"Understanding the Pixel Array",objective:"Learn how pixels are stored in a 1D array and access individual pixel colors",exercises:[{id:"pw-p1-1",title:"Meet the Pixels",difficulty:"Medium",points:15,description:"Load and explore the pixel array to understand its structure",explanation:{title:"The Pixel Array Structure",concept:`In p5.js, every pixel on your canvas is stored in a giant 1D array called pixels[]. Each pixel needs FOUR values (Red, Green, Blue, Alpha), so a single pixel takes up 4 slots in the array!

For a pixel at position (x, y), the formula to find its starting index is:
index = (x + y * width) * 4

Then:
- pixels[index + 0] = Red (0-255)
- pixels[index + 1] = Green (0-255)
- pixels[index + 2] = Blue (0-255)
- pixels[index + 3] = Alpha (0-255)

IMPORTANT: You must call loadPixels() before reading and updatePixels() after writing!`,example:`// Check if a pixel is "bright"
function setup() {
  createCanvas(400, 400);
  background(100, 200, 150);
  loadPixels();
  let x = 200, y = 200;
  let index = (x + y * width) * 4;
  let brightness = (pixels[index] + pixels[index+1] + pixels[index+2]) / 3;
  console.log(brightness > 127 ? "Bright!" : "Dark!");
}`,keyPoints:["Each pixel takes 4 slots in the array (R, G, B, A)","Index formula: (x + y * width) * 4","Must call loadPixels() before reading pixels","Must call updatePixels() after modifying pixels"]},prompt:"Load the pixel array and display the RGBA values of a specific pixel. Click anywhere to see that pixel's color values.",starterCode:`function setup() {
  createCanvas(400, 400);
  fill(255, 0, 0); rect(0, 0, 200, 200);
  fill(0, 255, 0); rect(200, 0, 200, 200);
  fill(0, 0, 255); rect(0, 200, 200, 200);
  fill(255, 255, 0); rect(200, 200, 200, 200);
}

function draw() {}

function mousePressed() {
  // Load the pixel array
  // Calculate the index: (x + y * width) * 4
  // Get R, G, B, A values and display them
  console.log("Click position: " + mouseX + ", " + mouseY);
}`,solutionCode:`function setup() {
  createCanvas(400, 400);
  fill(255, 0, 0); rect(0, 0, 200, 200);
  fill(0, 255, 0); rect(200, 0, 200, 200);
  fill(0, 0, 255); rect(0, 200, 200, 200);
  fill(255, 255, 0); rect(200, 200, 200, 200);
  textSize(14);
}

function draw() {}

function mousePressed() {
  loadPixels();
  let x = floor(mouseX), y = floor(mouseY);
  if (x >= 0 && x < width && y >= 0 && y < height) {
    let index = (x + y * width) * 4;
    let r = pixels[index], g = pixels[index+1], b = pixels[index+2], a = pixels[index+3];
    console.log("R:" + r + " G:" + g + " B:" + b + " A:" + a);
    fill(0); rect(10, 10, 200, 60);
    fill(255); text("Pixel at (" + x + ", " + y + ")", 20, 30);
    text("R:" + r + " G:" + g + " B:" + b, 20, 50);
    fill(r, g, b); rect(20, 55, 30, 15);
  }
}`,hints:["loadPixels() must be called first","Use floor() for mouse position","Index formula: (x + y * width) * 4"],vocabularyTerms:["pixels","loadPixels","index"]},{id:"pw-p1-2",title:"Paint a Single Pixel",difficulty:"Medium",points:15,description:"Modify individual pixels by writing to the pixel array",prompt:"Create a simple pixel painter. Click or drag to paint red pixels.",starterCode:`function setup() {
  createCanvas(400, 400);
  background(0);
  pixelDensity(1);
}

function mousePressed() {
  // Load pixels, calculate index, set to red, update pixels
}

function mouseDragged() { mousePressed(); }`,solutionCode:`function setup() {
  createCanvas(400, 400);
  background(0);
  pixelDensity(1);
}

function mousePressed() {
  loadPixels();
  let x = floor(mouseX), y = floor(mouseY);
  if (x >= 0 && x < width && y >= 0 && y < height) {
    let index = (x + y * width) * 4;
    pixels[index] = 255; pixels[index+1] = 0; pixels[index+2] = 0; pixels[index+3] = 255;
    updatePixels();
  }
}

function mouseDragged() { mousePressed(); }`,hints:["Use pixelDensity(1)","Set all four RGBA values","Call updatePixels() after"],vocabularyTerms:["pixels","updatePixels"]}],exitTicket:"What is the formula for the pixel array index at position (x, y)?"},{day:"P2",title:"Traversing All Pixels",objective:"Use nested loops to process every pixel",exercises:[{id:"pw-p2-1",title:"Fill the Canvas",difficulty:"Medium",points:20,description:"Use nested loops to set every pixel to cyan",prompt:"Use nested for-loops to fill the canvas with cyan by setting pixels directly.",starterCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  loadPixels();
  // Nested loops: outer for y, inner for x
  // Set each pixel to cyan (R=0, G=255, B=255)
  updatePixels();
}`,solutionCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      pixels[index] = 0; pixels[index+1] = 255; pixels[index+2] = 255; pixels[index+3] = 255;
    }
  }
  updatePixels();
}`,hints:["Outer loop for y, inner for x","Calculate index inside inner loop"],vocabularyTerms:["nested-loop","traversal"]},{id:"pw-p2-2",title:"Horizontal Gradient",difficulty:"Medium",points:20,description:"Create a gradient from black to white",prompt:"Create a horizontal gradient using map() to convert x position to brightness.",starterCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      // Use map(x, 0, width, 0, 255) for brightness
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}`,solutionCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let b = map(x, 0, width, 0, 255);
      pixels[index] = b; pixels[index+1] = b; pixels[index+2] = b; pixels[index+3] = 255;
    }
  }
  updatePixels();
}`,hints:["map(x, 0, width, 0, 255)","Set R, G, B to same value for grayscale"],vocabularyTerms:["map","gradient"]}],exitTicket:"Why do we need nested loops to traverse all pixels?"},{day:"P3",title:"Dynamic Effects",objective:"Create animated and interactive pixel effects",exercises:[{id:"pw-p3-1",title:"Mouse Glow",difficulty:"Hard",points:30,description:"Create a glow effect that follows the mouse",prompt:"Make pixels brighter when close to the mouse using dist() and map().",starterCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      // Calculate distance from pixel to mouse
      // Map distance to brightness (close=bright, far=dark)
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}`,solutionCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let d = dist(x, y, mouseX, mouseY);
      let b = map(d, 0, 150, 255, 0);
      b = constrain(b, 0, 255);
      pixels[index] = b; pixels[index+1] = b*0.7; pixels[index+2] = b*0.2; pixels[index+3] = 255;
    }
  }
  updatePixels();
}`,hints:["dist(x, y, mouseX, mouseY)","Use constrain() to keep values valid"],vocabularyTerms:["dist","constrain"]}],exitTicket:"How do you create a distance-based glow effect?"},{day:"P4",title:"Image Processing",objective:"Apply filters to transform images",exercises:[{id:"pw-p4-1",title:"Invert Colors",difficulty:"Medium",points:20,description:"Create a negative image by inverting colors",prompt:"Invert colors by subtracting each RGB value from 255.",starterCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(50, 100, 200);
  fill(255, 0, 0); circle(100, 100, 100);
  fill(0, 255, 0); circle(200, 200, 100);

  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    // Invert: 255 - value
  }
  updatePixels();
}`,solutionCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(50, 100, 200);
  fill(255, 0, 0); circle(100, 100, 100);
  fill(0, 255, 0); circle(200, 200, 100);

  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] = 255 - pixels[i];
    pixels[i+1] = 255 - pixels[i+1];
    pixels[i+2] = 255 - pixels[i+2];
  }
  updatePixels();
}`,hints:["Loop by 4s","newValue = 255 - oldValue"],vocabularyTerms:["invert","filter"]},{id:"pw-p4-2",title:"Grayscale",difficulty:"Medium",points:20,description:"Convert to grayscale by averaging RGB",prompt:"Convert each pixel to grayscale by averaging R, G, B values.",starterCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(100, 150, 255);
  fill('red'); circle(100, 100, 80);
  fill('green'); circle(200, 150, 80);
  fill('blue'); circle(300, 100, 80);

  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    // gray = (R + G + B) / 3
  }
  updatePixels();
}`,solutionCode:`function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(100, 150, 255);
  fill('red'); circle(100, 100, 80);
  fill('green'); circle(200, 150, 80);
  fill('blue'); circle(300, 100, 80);

  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let gray = (pixels[i] + pixels[i+1] + pixels[i+2]) / 3;
    pixels[i] = gray; pixels[i+1] = gray; pixels[i+2] = gray;
  }
  updatePixels();
}`,hints:["Average = (R + G + B) / 3","Set all channels to same value"],vocabularyTerms:["grayscale","brightness"]}],exitTicket:"How do you convert color to grayscale?"},{day:"P5",title:"Culminating Project",objective:"Build a pixel art editor",exercises:[{id:"pw-p5-project",title:"Pixel Art Creator",difficulty:"Hard",points:75,isProject:!0,description:"Build an interactive pixel art editor with tools and effects",prompt:`Create a pixel art editor:
- Click/drag to paint
- R/G/B keys change color
- 1=invert, 2=grayscale
- C=clear`,starterCode:`let currentColor;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(255);
  currentColor = color(0);
  showUI();
}

function showUI() {
  fill(50); rect(0, 360, width, 40);
  fill(255); text("R/G/B=color | 1=invert 2=gray | C=clear", 10, 385);
  fill(currentColor); rect(360, 365, 30, 30);
}

function mouseDragged() {
  if (mouseY < 360) {
    // Paint pixels
  }
}

function keyPressed() {
  if (key == 'r') currentColor = color(255, 0, 0);
  if (key == 'c') background(255);
  showUI();
}`,solutionCode:`let currentColor;
let brushSize = 5;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(255);
  currentColor = color(0);
  showUI();
}

function showUI() {
  fill(50); rect(0, 360, width, 40);
  fill(255); textSize(11);
  text("R/G/B/K=color | 1=invert 2=gray | C=clear", 10, 385);
  fill(currentColor); stroke(255); rect(360, 365, 30, 30); noStroke();
}

function paintAt(px, py) {
  if (py >= 360) return;
  loadPixels();
  let r = red(currentColor), g = green(currentColor), b = blue(currentColor);
  for (let dy = -brushSize; dy <= brushSize; dy++) {
    for (let dx = -brushSize; dx <= brushSize; dx++) {
      let x = px + dx, y = py + dy;
      if (x >= 0 && x < width && y >= 0 && y < 360) {
        let i = (x + y * width) * 4;
        pixels[i] = r; pixels[i+1] = g; pixels[i+2] = b; pixels[i+3] = 255;
      }
    }
  }
  updatePixels();
}

function mouseDragged() { paintAt(floor(mouseX), floor(mouseY)); }
function mousePressed() { if (mouseY < 360) paintAt(floor(mouseX), floor(mouseY)); }

function keyPressed() {
  if (key == 'r') currentColor = color(255, 0, 0);
  if (key == 'g') currentColor = color(0, 255, 0);
  if (key == 'b') currentColor = color(0, 0, 255);
  if (key == 'k') currentColor = color(0);
  if (key == '1') applyInvert();
  if (key == '2') applyGray();
  if (key == 'c') background(255);
  showUI();
}

function applyInvert() {
  loadPixels();
  for (let y = 0; y < 360; y++) {
    for (let x = 0; x < width; x++) {
      let i = (x + y * width) * 4;
      pixels[i] = 255-pixels[i]; pixels[i+1] = 255-pixels[i+1]; pixels[i+2] = 255-pixels[i+2];
    }
  }
  updatePixels();
}

function applyGray() {
  loadPixels();
  for (let y = 0; y < 360; y++) {
    for (let x = 0; x < width; x++) {
      let i = (x + y * width) * 4;
      let g = (pixels[i] + pixels[i+1] + pixels[i+2]) / 3;
      pixels[i] = g; pixels[i+1] = g; pixels[i+2] = g;
    }
  }
  updatePixels();
}`,hints:["Use nested loops for brush","Stop at y=360 for UI area"],vocabularyTerms:["pixels","traversal","interactive"],rubric:{painting:"Can draw by clicking/dragging",colors:"Multiple colors via keyboard",effects:"Invert and grayscale work",clear:"C clears the canvas"}}]}]},week4:{title:"Filtering and 2D Arrays",bigIdea:"Traversal can filter, transform, and work with grids.",days:[{day:16,title:"Filtering",objective:"Keep only elements that match a condition",exercises:[{id:"w4d16-1",title:"Filter Big Numbers",difficulty:"Medium",points:15,description:"Create a new array with only values above 50",explanation:{title:"Filtering: Keep What Matches",concept:`Filtering creates a NEW array containing only elements that pass a test.

Pattern:
1. Create an empty result array
2. Traverse the original array
3. If element passes the test, push it to result
4. The result array has only matching elements

This is different from traversal: you're building a new, smaller array.`,example:`let scores = [45, 82, 67, 91, 38, 73];
let passing = [];  // New array for passing scores

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 70) {  // The test/condition
    passing.push(scores[i]);  // Keep it!
  }
}

// passing is now [82, 91, 73]
// scores is unchanged: [45, 82, 67, 91, 38, 73]`,keyPoints:["Filtering creates a NEW array, doesn't modify the original","Only elements that pass the condition are included","The result array can be any size (including empty!)","Common pattern: create empty array → traverse → conditionally push"]},prompt:"Given an array of numbers, create a new array containing only values greater than 50.",starterCode:`let nums = [10, 40, 70, 20, 90, 55, 30, 85];

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
}`,hints:["Create an empty result array","Traverse the original array","Push elements that match the condition"],vocabularyTerms:["filter","traversal","conditional"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"}]},{id:"w4d16-2",title:"Visual Filter",difficulty:"Medium",points:20,description:"Draw only particles on the right side",explanation:{title:"Filtering During Drawing",concept:`Sometimes you don't need a new array - you can filter WHILE drawing!

Instead of creating a filtered array:
- Traverse all elements
- Check the condition
- Only DRAW elements that pass

This is simpler when you just want to show/hide things temporarily.`,example:`let xs = [50, 200, 350, 500, 650];
let ys = [100, 200, 150, 250, 300];

function draw() {
  background(240);
  line(width/2, 0, width/2, height); // Divider

  for (let i = 0; i < xs.length; i++) {
    // Only draw dots on the right side
    if (xs[i] > width / 2) {
      circle(xs[i], ys[i], 20);
    }
  }
}
// xs[0]=50 and xs[1]=200 are NOT drawn (left side)
// xs[2]=350, xs[3]=500, xs[4]=650 ARE drawn (right side)`,keyPoints:["Filter during draw: add if-statement before drawing","The array stays unchanged - you just skip some elements","Useful for toggleable visibility or dynamic filters","No new array needed - just conditional drawing"]},prompt:"Only draw particles whose x position is greater than width/2.",starterCode:`let xs = [];
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
}`,hints:["You don't need to create a new array","Just add a condition before drawing","Only draw if x > width/2"],vocabularyTerms:["filter","conditional","traversal"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"line()",url:"https://p5js.org/reference/p5/line/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"},{title:"width",url:"https://p5js.org/reference/p5/width/"},{title:"height",url:"https://p5js.org/reference/p5/height/"}]}],exitTicket:"What's the difference between filtering into a new array vs filtering during drawing?"},{day:17,title:"Reducing",objective:"Compute a single value from an array",exercises:[{id:"w4d17-1",title:"Total Score",difficulty:"Easy",points:10,description:"Sum all values to get a total",explanation:{title:"Reducing: Many Values → One Value",concept:`Reducing (also called "folding") combines all array elements into a SINGLE result.

Common reductions:
- Sum: add all values → one total
- Product: multiply all values → one result
- Count: count matching elements → one number
- Concatenation: combine strings → one string

Pattern: start with initial value, update it for each element.`,example:`let prices = [10, 25, 15, 30];

// Reduce to sum (total)
let total = 0;
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}
// total = 80

// Reduce to product
let product = 1;  // Start at 1 for multiplication!
for (let i = 0; i < prices.length; i++) {
  product *= prices[i];
}
// product = 112500`,keyPoints:["Start with an appropriate initial value (0 for sum, 1 for product)","Update the accumulator with each element","After the loop, you have ONE value","Reduction turns an array into a single result"]},prompt:"Calculate the total score from an array of point values.",starterCode:`let points = [10, 25, 15, 30, 20, 5];

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
}`,hints:["Start with total = 0","Add each element to total","This is called 'reducing' to a single value"],vocabularyTerms:["reduce","accumulator","sum"],resources:[{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"}]},{id:"w4d17-2",title:"Energy Meter",difficulty:"Medium",points:20,description:"Sum particle sizes to show total 'energy'",explanation:{title:"Visualizing Reduced Values",concept:`Reducing is useful for creating summary visualizations like meters, bars, and gauges.

Pattern:
1. Reduce array to get a single value (e.g., total energy)
2. Draw a visual representation (bar, text, gauge)
3. Update every frame as values change

The bar width can be proportional to the total value.`,example:`let sizes = [20, 35, 15, 40];

function draw() {
  background(240);

  // Reduce: sum all sizes
  let totalEnergy = 0;
  for (let i = 0; i < sizes.length; i++) {
    totalEnergy += sizes[i];
  }
  // totalEnergy = 110

  // Visualize as a bar
  fill(100);
  rect(50, 20, 200, 20);  // Background bar
  fill(0, 200, 100);
  rect(50, 20, totalEnergy, 20);  // Fill based on total
  text("Energy: " + totalEnergy, 260, 35);
}`,keyPoints:["Reduce first to get the summary value","Use that value to control visual properties (width, height, color)","Recalculate each frame if values can change","Scale the visualization to fit your UI"]},prompt:"Create particles with random sizes. Show total 'energy' (sum of all sizes) as a bar.",starterCode:`let sizes = [];

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
}`,hints:["Sum all sizes to get energy","Draw a bar proportional to energy","Scale the bar width appropriately"],vocabularyTerms:["reduce","sum","visualization"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"floor()",url:"https://p5js.org/reference/p5/floor/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}]}],exitTicket:"What does 'reducing' an array mean?"},{day:18,title:"2D Arrays and Grids",objective:"Use nested loops to create and draw grids",exercises:[{id:"w4d18-1",title:"Draw a Grid",difficulty:"Medium",points:15,description:"Use nested loops to draw a grid of squares",explanation:{title:"Nested Loops and Grids",concept:`To draw a grid, you need TWO loops - one nested inside the other:
- Outer loop: controls ROWS (vertical position)
- Inner loop: controls COLUMNS (horizontal position)

for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 5; col++) {
    // This runs 25 times (5 rows × 5 columns)
    // row goes: 0,0,0,0,0, 1,1,1,1,1, 2,2,2,2,2...
    // col goes: 0,1,2,3,4, 0,1,2,3,4, 0,1,2,3,4...
  }
}`,example:`// Draw a 3x3 grid of 50px squares
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    let x = col * 50;  // 0, 50, 100
    let y = row * 50;  // 0, 50, 100
    rect(x, y, 50, 50);
  }
}`,keyPoints:["Outer loop controls rows (y direction)","Inner loop controls columns (x direction)","x position depends on col, y position depends on row","Total iterations = rows × columns"]},prompt:"Draw a 10x10 grid of squares using nested for-loops.",starterCode:`function setup() {
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
}`,hints:["Outer loop controls rows","Inner loop controls columns","x depends on col, y depends on row"],vocabularyTerms:["nested-loop","grid","2d-array"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"noFill()",url:"https://p5js.org/reference/p5/noFill/"}]},{id:"w4d18-2",title:"Checkerboard",difficulty:"Medium",points:20,description:"Color the grid like a checkerboard",explanation:{title:"The Modulo Pattern for Alternation",concept:`To alternate colors in a grid, use the modulo operator (%).

The trick: (row + col) % 2 alternates between 0 and 1!

Row 0: 0+0=0, 0+1=1, 0+2=0, 0+3=1... (starts white)
Row 1: 1+0=1, 1+1=0, 1+2=1, 1+3=0... (starts black)
Row 2: 2+0=0, 2+1=1, 2+2=0, 2+3=1... (starts white)

This creates the checkerboard pattern automatically!`,example:`for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    let x = col * 50;
    let y = row * 50;

    // Modulo magic!
    if ((row + col) % 2 == 0) {
      fill(255);  // White
    } else {
      fill(0);    // Black
    }

    rect(x, y, 50, 50);
  }
}`,keyPoints:["% is modulo - gives the remainder after division","x % 2 is 0 for even numbers, 1 for odd numbers","(row + col) % 2 creates a checkerboard pattern","Use this pattern for any alternating grid effect"]},prompt:"Make alternating squares black and white like a checkerboard.",starterCode:`function setup() {
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
}`,hints:["(row + col) % 2 alternates between 0 and 1","Use this to choose between two colors","% is the modulo (remainder) operator"],vocabularyTerms:["nested-loop","modulo","pattern"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"}]}],exitTicket:"What does (row + col) % 2 calculate?"},{day:19,title:"2D Array Data",objective:"Store and access data in a 2D array",exercises:[{id:"w4d19-1",title:"Random Walls",difficulty:"Medium",points:20,description:"Create a 2D array where some cells are walls",explanation:{title:"2D Arrays: Arrays of Arrays",concept:`A 2D array is an array where each element is ANOTHER array. This creates a grid!

Accessing: grid[row][col]
- First index: which row (which inner array)
- Second index: which column (which element in that array)

Creating a 2D array:
1. Create the outer array
2. For each row, create an inner array
3. Fill each cell with a value`,example:`let grid = [];

// Create a 3x3 grid
for (let r = 0; r < 3; r++) {
  grid[r] = [];  // Create row r
  for (let c = 0; c < 3; c++) {
    grid[r][c] = 0;  // Set cell to 0
  }
}

// Grid looks like:
// [[0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]]

// Access: grid[1][2] = middle row, right column
grid[1][2] = 1;  // Put a wall there`,keyPoints:["grid[r] = [] creates a new row (inner array)","grid[r][c] accesses row r, column c","Build with nested loops: outer for rows, inner for columns","Values can represent anything: 0=floor, 1=wall, 2=goal, etc."]},prompt:"Create a 2D array grid where 0=floor and 1=wall. Draw walls as black squares.",starterCode:`let grid = [];

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
}`,hints:["grid[r] = [] creates a row","grid[r][c] accesses row r, column c","random() < 0.2 is true 20% of the time"],vocabularyTerms:["2d-array","grid","random"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}]},{id:"w4d19-2",title:"Player Movement",difficulty:"Hard",points:25,description:"Add a player that moves on the grid",explanation:{title:"Grid-Based Movement and Collision",concept:`For grid-based games, the player's position is stored as (row, col) - not pixels!

Movement pattern:
1. Calculate the NEW position based on key pressed
2. Check if new position is valid (in bounds AND not a wall)
3. Only move if valid

This is called "collision detection" - checking BEFORE moving.`,example:`let playerR = 0;
let playerC = 0;

function keyPressed() {
  let newR = playerR;
  let newC = playerC;

  // Calculate new position
  if (keyCode == UP_ARROW) newR--;
  if (keyCode == DOWN_ARROW) newR++;
  if (keyCode == LEFT_ARROW) newC--;
  if (keyCode == RIGHT_ARROW) newC++;

  // Check bounds
  if (newR < 0 || newR >= 10) return;
  if (newC < 0 || newC >= 10) return;

  // Check for wall
  if (grid[newR][newC] == 1) return;

  // All clear - move!
  playerR = newR;
  playerC = newC;
}`,keyPoints:["Store player position as grid coordinates (row, col), not pixels","Calculate new position BEFORE moving","Check bounds: is the new position inside the grid?","Check collision: is the new position a wall?","Only update position if all checks pass"]},prompt:"Add arrow key movement. The player cannot move into walls.",starterCode:`let grid = [];
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
}`,hints:["Calculate new position first, don't move yet","Check if new position is in bounds","Check if new position is not a wall","Only then update player position"],vocabularyTerms:["2d-array","collision","keyCode"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"},{title:"keyCode",url:"https://p5js.org/reference/p5/keyCode/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}]}],exitTicket:"How do you check if a grid cell is a wall before moving?"},{day:20,title:"Final Capstone Project",objective:"Apply all concepts in a complete project",exercises:[{id:"w4d20-capstone",title:"Grid Adventure Game",difficulty:"Hard",points:100,isProject:!0,isCapstone:!0,description:"Create a complete grid-based game",explanation:{title:"2D Arrays for Game Maps",concept:`A 2D array is an array of arrays - perfect for grids!

grid[row][col] accesses a specific cell
Different values represent different tile types:
- 0 = floor (can walk)
- 1 = wall (blocked)
- 2 = goal
- 3 = coin

To check before moving:
1. Calculate new position
2. Check bounds (is it inside the grid?)
3. Check collision (is it a wall?)
4. Only then update player position`,example:`// Create a 2D array
let grid = [];
for (let r = 0; r < 10; r++) {
  grid[r] = [];  // Create each row
  for (let c = 0; c < 10; c++) {
    grid[r][c] = 0;  // Fill with floors
  }
}

// Place a wall
grid[3][5] = 1;

// Check before moving
if (grid[newRow][newCol] != 1) {
  // Not a wall, can move!
  playerRow = newRow;
  playerCol = newCol;
}`,keyPoints:["2D arrays: grid[row][col] for row, column access","Use numbers to represent different tile types","Always check bounds before accessing grid cells","Check the destination BEFORE moving the player"]},prompt:`Build a Grid Adventure Game:
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
}`,hints:["Initialize the grid with nested loops","Use different numbers for different tile types","Check what tile player moves onto","Change coin tiles to floor after collection"],vocabularyTerms:["2d-array","game-loop","collision","state"],resources:[{title:"rect()",url:"https://p5js.org/reference/p5/rect/"},{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"fill()",url:"https://p5js.org/reference/p5/fill/"},{title:"stroke()",url:"https://p5js.org/reference/p5/stroke/"},{title:"noStroke()",url:"https://p5js.org/reference/p5/noStroke/"},{title:"text()",url:"https://p5js.org/reference/p5/text/"},{title:"textSize()",url:"https://p5js.org/reference/p5/textSize/"},{title:"textAlign()",url:"https://p5js.org/reference/p5/textAlign/"},{title:"keyPressed()",url:"https://p5js.org/reference/p5/keyPressed/"},{title:"keyCode",url:"https://p5js.org/reference/p5/keyCode/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}],rubric:{grid:"10x10 grid displays correctly",tiles:"Different tile types visible (floor, wall, goal, coin)",movement:"Player moves with arrow keys",collision:"Cannot walk through walls",coins:"Coins can be collected, score increases",goal:"Reaching goal triggers win state",ui:"Score and instructions displayed",polish:"Game is visually clear and playable"}}]}]}};function B0(e){for(const t of Object.values(ar))for(const s of t.days)for(const i of s.exercises)if(i.id===e)return i;return null}function W0(e){const t=ar[e];if(!t)return[];const s=[];for(const i of t.days)s.push(...i.exercises);return s}const re={"cyber-range":{id:"cyber-range",name:"Cybersecurity",description:"Interactive cybersecurity challenges and simulations",color:"#00ff88",icon:"🔐",units:[{id:"cryptography",name:"Cryptography",description:"Learn encryption, decryption, and cipher techniques",challengeCount:5},{id:"network",name:"Network Security",description:"Understand firewalls, ports, and network protocols",challengeCount:4},{id:"password",name:"Password Security",description:"Create strong passwords and understand attacks",challengeCount:4},{id:"web",name:"Web Security",description:"Learn about XSS, SQL injection, and secure coding",challengeCount:3},{id:"social",name:"Social Engineering",description:"Recognize phishing and manipulation tactics",challengeCount:3},{id:"network-monitor",name:"Network Monitor",description:"Real-time packet analysis and threat detection",challengeCount:1,isScenario:!0}]},"arrays-loops":{id:"arrays-loops",name:"Programming",description:"Arrays, loops, and traversal with p5.js",color:"#00d4ff",icon:"💻",units:[{id:"week1",name:"Week 1: Arrays Basics",description:"Store collections of values and access by index",exerciseCount:8},{id:"week2",name:"Week 2: Loops Basics",description:"Use for-loops and while-loops to repeat instructions",exerciseCount:8},{id:"week3",name:"Week 3: Traversing Arrays",description:"Loop through arrays to process every element",exerciseCount:7},{id:"week4",name:"Week 4: Filtering & 2D Arrays",description:"Filter arrays and work with grids",exerciseCount:8}]},"ap-csp":{id:"ap-csp",name:"AP CSP Exam Prep",description:"Pseudocode translation and flowchart interpretation",color:"#ff6b9d",icon:"📝",units:[{id:"pseudocode",name:"Pseudocode",description:"Translate between AP CSP pseudocode and JavaScript",exerciseCount:30},{id:"flowcharts",name:"Flowcharts",description:"Read, interpret, and build flowcharts",exerciseCount:20}]},"data-apis":{id:"data-apis",name:"Data & APIs",description:"Fetch data from APIs, visualize with maps & charts, build servers",color:"#4ecdc4",icon:"🌐",units:[{id:"week1",name:"Week 1: Fetching Data",description:"JSON, fetch(), async/await, and error handling",exerciseCount:13},{id:"week2",name:"Week 2: Visualization",description:"Auto-updating data, Leaflet maps, and Chart.js",exerciseCount:10},{id:"week3",name:"Week 3: Server-Side",description:"Node.js, Express, REST APIs, and databases",exerciseCount:9},{id:"week4",name:"Week 4: Deployment",description:"Environment variables, API proxies, and deployment",exerciseCount:9}]},"objects-images":{id:"objects-images",name:"Objects & Images",description:"Object-oriented programming, arrays of objects, interaction, and image sprites with p5.js",color:"#ff9f43",icon:"🎨",units:[{id:"week1",name:"Week 1: Arrays of Objects & Interaction",description:"Classes, arrays of objects, mouse interaction, and removal",exerciseCount:10},{id:"week2",name:"Week 2: Object Communication & Images",description:"Collision detection, nested loops, and image sprites",exerciseCount:8}]}},Nn=[{id:"assignment",title:"Assignment & Variables",pseudocode:"a ← expression",javascript:"let a = expression;",explanation:"The arrow (←) assigns a value to a variable. In pseudocode, you don't need to declare variables with let/const - just use the arrow to create and assign.",examples:[{pseudocode:"x ← 5",javascript:"let x = 5;"},{pseudocode:'name ← "Alice"',javascript:'let name = "Alice";'},{pseudocode:"total ← price + tax",javascript:"let total = price + tax;"},{pseudocode:"x ← x + 1",javascript:"x = x + 1; // or x++"}],keyPoints:["← is the assignment operator (like = in JavaScript)","Variables are created automatically when first assigned","Can reassign variables without re-declaring"]},{id:"display-input",title:"Display & Input",pseudocode:`DISPLAY(expression)
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
DISPLAY(max)`,blankAnswers:{blank1:["1","0"],blank2:[">","> max"],blank3:["n"]},hints:["Start with the first element (index 1 in pseudocode)","Check if current is greater than max","Update max to the new larger value"],explanation:"Initialize max to first element, then compare each n. If n > max, update max to n."}],$l=[{id:"oval",name:"Oval / Terminator",purpose:"Start or End of the program/algorithm",description:"Every flowchart must have a Start and End. The oval shape indicates where the flow begins and where it terminates.",examples:["Start","End","Begin","Stop"],color:"#10b981",shape:"ellipse"},{id:"rectangle",name:"Rectangle / Process",purpose:"An action, calculation, or process step",description:'Represents any processing operation: assignments, calculations, or actions. This is where the actual "work" happens.',examples:["total ← price + tax","count ← count + 1","Send email","Calculate average"],color:"#3b82f6",shape:"rectangle"},{id:"diamond",name:"Diamond / Decision",purpose:"A yes/no question or condition check",description:"Used for branching logic (if/else). The condition is written inside, and two arrows come out: one for Yes/True and one for No/False.",examples:["Is x > 10?","age ≥ 18?","Found?","Done?"],color:"#f59e0b",shape:"diamond"},{id:"parallelogram",name:"Parallelogram / Input-Output",purpose:"Getting input or showing output",description:"Represents data entering the system (input from user) or leaving it (display/print). Think DISPLAY and INPUT operations.",examples:["Get user name",'Display "Hello"',"INPUT age","Print result"],color:"#8b5cf6",shape:"parallelogram"},{id:"arrow",name:"Arrow / Flow Line",purpose:"Shows direction of flow",description:"Connects shapes and shows the order of operations. Flow typically goes top-to-bottom and left-to-right. Arrows point to the next step.",examples:["→","↓","←","↑"],color:"#6b7280",shape:"arrow"}],Y0=[{id:"fc-ex-001",title:"Simple Greeting",description:'A basic flowchart that displays "Hello World"',difficulty:"beginner",pseudocode:'DISPLAY("Hello World")',nodes:[{id:"start",type:"oval",position:{x:150,y:0},data:{label:"Start"}},{id:"output",type:"parallelogram",position:{x:100,y:100},data:{label:'Display "Hello World"'}},{id:"end",type:"oval",position:{x:150,y:200},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"output"},{id:"e2",source:"output",target:"end"}]},{id:"fc-ex-002",title:"Input and Output",description:"Get user's name and greet them",difficulty:"beginner",pseudocode:`name ← INPUT()
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
DISPLAY(max)`,nodes:[{id:"start",type:"oval",position:{x:250,y:0},data:{label:"Start"}},{id:"input-a",type:"parallelogram",position:{x:205,y:60},data:{label:"Input a"}},{id:"input-b",type:"parallelogram",position:{x:205,y:115},data:{label:"Input b"}},{id:"input-c",type:"parallelogram",position:{x:205,y:170},data:{label:"Input c"}},{id:"dec1",type:"diamond",position:{x:210,y:240},data:{label:"a ≥ b AND a ≥ c?"}},{id:"max-a",type:"rectangle",position:{x:50,y:330},data:{label:"max ← a"}},{id:"dec2",type:"diamond",position:{x:330,y:330},data:{label:"b ≥ c?"}},{id:"max-b",type:"rectangle",position:{x:260,y:420},data:{label:"max ← b"}},{id:"max-c",type:"rectangle",position:{x:400,y:420},data:{label:"max ← c"}},{id:"output",type:"parallelogram",position:{x:205,y:510},data:{label:"Display max"}},{id:"end",type:"oval",position:{x:250,y:590},data:{label:"End"}}],edges:[{id:"e1",source:"start",target:"input-a"},{id:"e2",source:"input-a",target:"input-b"},{id:"e3",source:"input-b",target:"input-c"},{id:"e4",source:"input-c",target:"dec1"},{id:"e5",source:"dec1",target:"max-a",label:"Yes"},{id:"e6",source:"dec1",target:"dec2",label:"No"},{id:"e7",source:"dec2",target:"max-b",label:"Yes"},{id:"e8",source:"dec2",target:"max-c",label:"No"},{id:"e9",source:"max-a",target:"output"},{id:"e10",source:"max-b",target:"output"},{id:"e11",source:"max-c",target:"output"},{id:"e12",source:"output",target:"end"}]}],Jt=[{id:"fc-001",title:"Simple Decision Trace",difficulty:"beginner",type:"interpret",description:"Follow the flowchart to determine the output.",question:"What will be displayed if x = 7?",flowchartRef:"fc-ex-003",answer:"Positive",hints:["Start at the top and follow the arrows","At the diamond, check: is 7 > 0?","Follow the path that matches the answer"],explanation:'Starting at Start, we reach the decision "x > 0?". Since 7 > 0 is true (Yes), we follow the Yes path to display "Positive".'},{id:"fc-002",title:"Pass/Fail Check",difficulty:"beginner",type:"interpret",description:"Determine the output for a given input.",question:"What will be displayed if score = 55?",flowchartRef:"fc-ex-004",answer:"Fail",hints:["Input score = 55","Check the condition: is 55 ≥ 60?","Follow the appropriate path"],explanation:`55 is not ≥ 60 (it's less than 60), so the condition is false (No). Following the No path leads to displaying "Fail".`},{id:"fc-003",title:"Exact Boundary",difficulty:"beginner",type:"interpret",description:"Test a boundary condition.",question:"What will be displayed if score = 60?",flowchartRef:"fc-ex-004",answer:"Pass",hints:["60 is exactly the passing score","Is 60 ≥ 60?",'The ≥ means "greater than OR equal to"'],explanation:'60 is equal to 60, and since the condition uses ≥ (greater than or equal), 60 ≥ 60 is true. Output: "Pass".'},{id:"fc-004",title:"Loop Trace",difficulty:"intermediate",type:"interpret",description:"Trace through a counting loop.",question:"What numbers will be displayed by this flowchart?",flowchartRef:"fc-ex-005",answer:"1, 2, 3, 4, 5",hints:["count starts at 1","Loop continues while count is NOT > 5","After displaying, count increases by 1"],explanation:"count: 1 (display 1, count=2), 2 (display 2, count=3), 3 (display 3, count=4), 4 (display 4, count=5), 5 (display 5, count=6). When count=6, 6>5 is true, so loop exits."},{id:"fc-005",title:"Sum Calculation",difficulty:"intermediate",type:"interpret",description:"Calculate the result of a summation loop.",question:"If n = 4, what is the final value of sum displayed?",flowchartRef:"fc-ex-006",answer:"10",hints:["sum starts at 0, i starts at 1","Add i to sum, then increment i","1 + 2 + 3 + 4 = ?"],explanation:"Loop iterations: i=1: sum=0+1=1. i=2: sum=1+2=3. i=3: sum=3+3=6. i=4: sum=6+4=10. When i=5, 5>4 is true, exit and display 10."},{id:"fc-006",title:"Maximum of Three",difficulty:"intermediate",type:"interpret",description:"Determine which variable holds the maximum.",question:"If a=5, b=8, c=3, what path does the flowchart take and what is displayed?",flowchartRef:"fc-ex-007",answer:"8 (max ← b)",hints:["First check: is a ≥ b AND a ≥ c?","If not, check: is b ≥ c?","Follow the true condition"],explanation:"a=5 ≥ b=8? No, so first condition is false. Go to second decision: b=8 ≥ c=3? Yes, so max ← b = 8."},{id:"fc-007",title:"Identify Symbols",difficulty:"beginner",type:"symbol-match",description:"Match each flowchart symbol to its purpose.",question:"Match each shape to what it represents:",items:[{shape:"oval",options:["Start/End","Decision","Process","Input/Output"]},{shape:"diamond",options:["Start/End","Decision","Process","Input/Output"]},{shape:"rectangle",options:["Start/End","Decision","Process","Input/Output"]},{shape:"parallelogram",options:["Start/End","Decision","Process","Input/Output"]}],answer:{oval:"Start/End",diamond:"Decision",rectangle:"Process",parallelogram:"Input/Output"},hints:["Ovals are at the beginning and end","Diamonds ask yes/no questions","Rectangles do work/calculations"],explanation:"Oval = Start/End (terminators), Diamond = Decision (branching), Rectangle = Process (actions/calculations), Parallelogram = Input/Output (data flow)."},{id:"fc-008",title:"What Shape?",difficulty:"beginner",type:"multiple-choice",description:"Choose the correct shape for a given action.",question:'Which shape would you use for the statement: "Display the result"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Parallelogram",hints:["Display is a type of output","Parallelograms handle data entering or leaving the system"],explanation:"DISPLAY is an output operation, which is represented by a parallelogram (Input/Output symbol)."},{id:"fc-009",title:"Decision Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a condition.",question:'Which shape represents the statement: "IF score >= 60"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Diamond",hints:["IF statements check a condition","Conditions result in yes/no answers"],explanation:"IF statements are decisions that branch the flow based on a condition. Diamonds represent decisions with Yes/No paths."},{id:"fc-010",title:"Process Shape",difficulty:"beginner",type:"multiple-choice",description:"Identify the correct shape for a calculation.",question:'Which shape would you use for: "total ← total + price"?',options:["Oval","Rectangle","Diamond","Parallelogram"],answer:"Rectangle",hints:["This is a calculation/assignment","No input, output, or decision happening"],explanation:"Assignment and calculations are processes represented by rectangles. This adds price to total - a processing step."},{id:"fc-011",title:"Build: Even or Odd",difficulty:"beginner",type:"build",description:"Create a flowchart to check if a number is even or odd.",requirements:["Start with a Start oval","Get a number from the user (Input)","Check if the number MOD 2 equals 0",'Display "Even" if yes, "Odd" if no',"End with an End oval"],pseudocode:`num ← INPUT()
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
}`,hints:["Initialize before the loop","Decision that loops back = REPEAT UNTIL","Code inside loop is the body"],explanation:'The arrow looping back indicates repetition. The decision "count > 5?" with a loop-back path becomes REPEAT UNTIL (count > 5).'},{id:"fc-018",title:"Loop Count",difficulty:"intermediate",type:"multiple-choice",description:"Analyze loop behavior.",question:'In a flowchart, a loop has initialization "i ← 1", condition "i > 10?", and increment "i ← i + 2". How many times does the loop body execute?',options:["5 times","6 times","10 times","11 times"],answer:"5 times",hints:["List out the values of i","i starts at 1, increases by 2 each time","Loop continues while i ≤ 10"],explanation:"i values: 1, 3, 5, 7, 9 (all ≤ 10, so loop runs). When i becomes 11, 11 > 10 is true and loop exits. Ran 5 times."},{id:"fc-019",title:"Flowchart Purpose",difficulty:"beginner",type:"multiple-choice",description:"Understand what flowcharts are for.",question:"What is the main purpose of a flowchart?",options:["To write executable code","To visually represent the logic and flow of an algorithm","To store data in a program","To test code for bugs"],answer:"To visually represent the logic and flow of an algorithm",hints:["Flowcharts are visual tools","They show steps and decisions","They're used before or alongside coding"],explanation:"Flowcharts provide a visual representation of how an algorithm works, showing the sequence of steps, decisions, and loops. They help plan and communicate logic before writing actual code."},{id:"fc-020",title:"Arrow Direction",difficulty:"beginner",type:"multiple-choice",description:"Understand flow direction.",question:"In a standard flowchart, what is the typical direction of flow?",options:["Right to left","Bottom to top","Top to bottom, left to right","Randomly in any direction"],answer:"Top to bottom, left to right",hints:["Think about how you read text",'Where is "Start" usually placed?','Where is "End" usually placed?'],explanation:"Flowcharts follow a top-to-bottom, left-to-right flow by convention. Start is at the top, End is at the bottom, and operations flow downward. This makes flowcharts easy to read like text."}],$c={week1:{title:"Fetching & Displaying Data",bigIdea:"Data from the internet can be loaded and displayed using fetch() and JavaScript.",days:[{day:1,title:"Introduction to Data & APIs",objective:"Understand what APIs are and why they matter",exercises:[{id:"d1d1-1",title:"API Explorer",difficulty:"Easy",points:10,description:"View raw JSON data from a public API in the console",explanation:{title:"What is an API?",concept:`API stands for "Application Programming Interface". Think of it as a waiter in a restaurant:
- You (the client) make a request
- The API delivers your request to the kitchen (server)
- The API brings back the response (data)

APIs let programs talk to each other. When you fetch data from a weather service, you're using their API.

Most APIs return data in JSON format - a way to structure data that JavaScript can easily understand.`,example:`// Basic fetch pattern
fetch('https://api.example.com/data')
  .then(response => response.json())  // Convert to JSON
  .then(data => {
    console.log(data);  // Use the data
  });

// JSON looks like this:
{
  "name": "ISS",
  "latitude": 51.5,
  "longitude": -0.1,
  "speed": 27600
}`,keyPoints:["APIs are how programs share data over the internet","fetch() is JavaScript's way to request data from APIs","JSON (JavaScript Object Notation) is the common data format",".then() handles the asynchronous response"]},prompt:"Use fetch() to get data from the ISS location API and log it to the console. The API URL is: https://api.wheretheiss.at/v1/satellites/25544",starterCode:`// This exercise runs in the browser console
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

*/`,hints:["Build and test each piece separately","Server: environment variables, database, API proxy","Client: geolocation, fetch, display, error handling","Deploy: set environment variables in hosting dashboard"],vocabularyTerms:["full-stack","deployment","capstone","production"],rubric:{geolocation:"Gets user's location and fetches weather (15 pts)","city-search":"Can search weather by city name (10 pts)","api-proxy":"Server proxies API calls, key hidden (15 pts)",database:"Search history saved and displayed (15 pts)",display:"Weather displayed beautifully with p5.js (15 pts)","error-handling":"Graceful error states and loading (10 pts)",deployment:"App deployed and working online (20 pts)"},requiresNode:!0}]}]}};function V0(e){for(const t of Object.values($c))for(const s of t.days)for(const i of s.exercises)if(i.id===e)return i;return null}function G0(e){const t=$c[e];if(!t)return[];const s=[];for(const i of t.days)s.push(...i.exercises);return s}const qc=$c,$0=G0,Mn={week1:{title:"Arrays of Objects & Interaction",bigIdea:"Objects combine data and behavior. Arrays of objects let us manage many entities with their own properties and methods.",days:[{day:1,title:"Arrays of Objects",objective:"Create and manage arrays of objects using classes",exercises:[{id:"oi-w1d1-1",title:"Bubble Array",difficulty:"Easy",points:10,description:"Create an array of Bubble objects that float upward",prompt:"Create a Bubble class with x, y, r properties and display(), move() methods. Create an array of 20 bubbles that float up and wrap around.",explanation:{title:"Arrays of Objects: Combining Classes with Arrays",concept:`When we have many similar things in our program (bubbles, enemies, particles), we need two powerful tools working together:

1. **Classes** define the blueprint for each object (what properties and behaviors it has)
2. **Arrays** store multiple objects so we can manage them all

Instead of creating separate variables like \`bubble1\`, \`bubble2\`, \`bubble3\`... we create ONE array that holds ALL our bubbles!

**The Pattern:**
- Define a class with a constructor and methods
- Create an empty array
- Use a loop to create objects and push them to the array
- Use another loop to update and display all objects`,example:`// EXAMPLE: Array of Star objects (different from bubbles!)
// This shows the same pattern with a different object type

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(2, 6);
    this.twinkle = random(0.02, 0.08);
    this.brightness = random(150, 255);
  }

  display() {
    // Twinkle effect
    let b = this.brightness + sin(frameCount * this.twinkle) * 50;
    fill(255, 255, 200, b);
    noStroke();
    circle(this.x, this.y, this.size);
  }
}

let stars = [];  // Empty array to hold all stars

function setup() {
  createCanvas(800, 500);
  // Create 100 stars using a loop
  for (let i = 0; i < 100; i++) {
    stars.push(new Star(random(width), random(height)));
  }
}

function draw() {
  background(20, 20, 50);  // Night sky
  // Display ALL stars using a loop
  for (let star of stars) {
    star.display();
  }
}`,keyPoints:["Classes are blueprints - they define what each object will have","Arrays hold multiple objects of the same type","Use push() to add new objects to an array","Use a for...of loop to access each object in the array","Each object has its own independent properties"]},starterCode:`// Create your Bubble class here
class Bubble {
  constructor(x, y) {
    // Add properties: x, y, r (radius), speed
  }

  display() {
    // Draw the bubble as a circle
  }

  move() {
    // Move upward and wrap around when off screen
  }
}

let bubbles = [];

function setup() {
  createCanvas(800, 500);
  // Create 20 bubbles using a loop
}

function draw() {
  background(200, 220, 255);
  // Display and move all bubbles using a loop
}`,solutionCode:`class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(15, 40);
    this.speed = random(1, 3);
  }

  display() {
    fill(100, 150, 255, 150);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }

  move() {
    this.y -= this.speed;
    this.x += random(-0.5, 0.5);
    if (this.y < -this.r) {
      this.y = height + this.r;
    }
  }
}

let bubbles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 20; i++) {
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function draw() {
  background(200, 220, 255);
  for (let bubble of bubbles) {
    bubble.display();
    bubble.move();
  }
}`,hints:["Use 'this.x' to store properties in the constructor","Create bubbles in a for loop in setup()","Use bubbles.push(new Bubble(...)) to add to the array","Loop through the array and call display() and move() on each"],vocabularyTerms:["class","constructor","instance","array of objects"],resources:[{title:"circle()",url:"https://p5js.org/reference/p5/circle/"},{title:"random()",url:"https://p5js.org/reference/p5/random/"}]},{id:"oi-w1d1-2",title:"Colorful Bubbles",difficulty:"Medium",points:15,description:"Extend bubbles with random colors and varying speeds",prompt:"Add a color property to each bubble. Smaller bubbles should move faster. Display the bubble count on screen.",explanation:{title:"Object Properties: Making Each Instance Unique",concept:`Every object created from a class can have different property values! This is what makes object-oriented programming powerful.

When we create a new object, the constructor runs and sets up that specific object's properties. By using random() values, each object becomes unique.

**Connecting Properties:**
We can also make properties depend on each other. For example:
- Smaller objects move faster
- Brighter objects are larger
- Older objects fade out

The \`map()\` function is perfect for converting one range of values to another!`,example:`// EXAMPLE: Raindrops with connected properties
// Longer raindrops fall faster (connected properties)

class Raindrop {
  constructor(x) {
    this.x = x;
    this.y = random(-100, 0);  // Start above screen
    this.length = random(10, 30);  // Random length
    // Longer drops fall faster! map() converts length range to speed range
    this.speed = map(this.length, 10, 30, 3, 8);
    // Longer drops are also more visible
    this.alpha = map(this.length, 10, 30, 100, 255);
  }

  display() {
    stroke(150, 200, 255, this.alpha);
    strokeWeight(2);
    line(this.x, this.y, this.x, this.y + this.length);
  }

  fall() {
    this.y += this.speed;
    // Reset when off bottom
    if (this.y > height) {
      this.y = random(-100, -10);
      this.x = random(width);
    }
  }
}

let raindrops = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 200; i++) {
    raindrops.push(new Raindrop(random(width)));
  }
}

function draw() {
  background(50, 60, 80);
  for (let drop of raindrops) {
    drop.fall();
    drop.display();
  }
  fill(255);
  text("Raindrops: " + raindrops.length, 20, 30);
}`,keyPoints:["Each object has its own copy of all properties","Use random() in constructor for variety","map(value, start1, stop1, start2, stop2) converts ranges","Properties can depend on each other for realistic behavior","Use text() to display information on the canvas"]},starterCode:`class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(15, 40);
    // Add color property using color()
    // Calculate speed based on size (smaller = faster) using map()
  }

  display() {
    // Use this.color for fill
    circle(this.x, this.y, this.r * 2);
  }

  move() {
    this.y -= this.speed;
    if (this.y < -this.r) this.y = height + this.r;
  }
}

let bubbles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 30; i++) {
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function draw() {
  background(200, 220, 255);
  for (let bubble of bubbles) {
    bubble.display();
    bubble.move();
  }
  // Display bubble count using text()
}`,solutionCode:`class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(15, 40);
    this.color = color(random(255), random(255), random(255), 150);
    this.speed = map(this.r, 15, 40, 3, 1);
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }

  move() {
    this.y -= this.speed;
    this.x += random(-0.5, 0.5);
    if (this.y < -this.r) this.y = height + this.r;
  }
}

let bubbles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 30; i++) {
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function draw() {
  background(200, 220, 255);
  for (let bubble of bubbles) {
    bubble.display();
    bubble.move();
  }
  fill(0);
  textSize(20);
  text("Bubbles: " + bubbles.length, 20, 30);
}`,hints:["Use color() to create a random color with alpha","Use map() to convert size range to speed range","map(this.r, 15, 40, 3, 1) makes small bubbles fast"],vocabularyTerms:["property","map","encapsulation"],resources:[{title:"color()",url:"https://p5js.org/reference/p5/color/"},{title:"map()",url:"https://p5js.org/reference/p5/map/"}]}],exitTicket:"What are two advantages of using an array of objects instead of parallel arrays?"},{day:2,title:"Building Object Classes",objective:"Design classes with meaningful properties and methods",exercises:[{id:"oi-w1d2-1",title:"Creature Class",difficulty:"Medium",points:10,description:"Build a creature class with custom appearance and behaviors",prompt:"Design a Creature class with at least 4 properties (x, y, size, color) and 2 methods (display, move). Create 10 creatures that move across the screen.",explanation:{title:"Designing Classes: Properties + Methods = Complete Objects",concept:`A well-designed class has two parts:

**Properties (Data)** - What the object HAS
- Position (x, y)
- Size, color, speed
- Any values that describe the object

**Methods (Behaviors)** - What the object DOES
- display() - how to draw it
- move() - how it moves
- Any actions the object can perform

**Tips for Good Class Design:**
1. Group related data together
2. Methods should modify the object's own properties
3. Use \`this.propertyName\` to access properties in methods
4. Use push() and pop() to isolate drawing transformations`,example:`// EXAMPLE: Spaceship class (different from creature!)
// Shows the same design pattern with a different theme

class Spaceship {
  constructor(x, y) {
    // PROPERTIES - what the spaceship HAS
    this.x = x;
    this.y = y;
    this.size = random(30, 50);
    this.angle = 0;  // Direction it's facing
    this.thrustPower = 0;
    this.color = color(random(100, 200), random(100, 200), 255);
  }

  // METHODS - what the spaceship DOES
  display() {
    push();  // Save drawing state
    translate(this.x, this.y);
    rotate(this.angle);

    // Body
    fill(this.color);
    triangle(0, -this.size/2, -this.size/3, this.size/2, this.size/3, this.size/2);

    // Cockpit
    fill(200, 255, 255);
    ellipse(0, 0, this.size/3, this.size/4);

    // Thrust flame (when moving)
    if (this.thrustPower > 0) {
      fill(255, 150, 0);
      triangle(0, this.size/2, -this.size/4, this.size/2 + this.thrustPower * 10,
               this.size/4, this.size/2 + this.thrustPower * 10);
    }

    pop();  // Restore drawing state
  }

  thrust(power) {
    this.thrustPower = power;
    // Move in direction we're facing
    this.x += cos(this.angle - HALF_PI) * power * 2;
    this.y += sin(this.angle - HALF_PI) * power * 2;
  }

  turn(dir) {
    this.angle += dir * 0.1;
  }
}

let ships = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 5; i++) {
    ships.push(new Spaceship(random(width), random(height)));
  }
}

function draw() {
  background(20);
  for (let ship of ships) {
    ship.thrust(random(0.5, 1.5));  // Random gentle thrust
    ship.turn(random(-1, 1));       // Random turning
    ship.display();

    // Wrap around screen
    if (ship.x < 0) ship.x = width;
    if (ship.x > width) ship.x = 0;
    if (ship.y < 0) ship.y = height;
    if (ship.y > height) ship.y = 0;
  }
}`,keyPoints:["Properties store data, methods perform actions","Use this.propertyName inside methods","push()/pop() keep transformations from affecting other objects","translate() moves the drawing origin to the object's position","Methods can call other methods using this.methodName()"]},starterCode:`class Creature {
  constructor(x, y, size) {
    // Initialize at least 4 properties
  }

  display() {
    // Draw your creature using push/translate/pop
    // Be creative with shapes!
  }

  move() {
    // Move the creature with some interesting motion
    // Don't forget screen wrapping!
  }
}

let creatures = [];

function setup() {
  createCanvas(800, 500);
  // Create 10 creatures
}

function draw() {
  background(220);
  // Update and display all creatures
}`,solutionCode:`class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color(random(255), random(255), random(255));
    this.speed = map(size, 20, 60, 3, 1);
    this.direction = random(TWO_PI);
  }

  display() {
    push();
    translate(this.x, this.y);

    // Body
    fill(this.color);
    noStroke();
    ellipse(0, 0, this.size, this.size * 0.6);

    // Eye
    fill(255);
    ellipse(this.size * 0.2, -this.size * 0.1, this.size * 0.2);
    fill(0);
    ellipse(this.size * 0.25, -this.size * 0.1, this.size * 0.1);

    pop();
  }

  move() {
    this.x += cos(this.direction) * this.speed;
    this.y += sin(this.direction) * this.speed;
    this.direction += random(-0.1, 0.1);

    // Wrap around
    if (this.x > width + this.size) this.x = -this.size;
    if (this.x < -this.size) this.x = width + this.size;
    if (this.y > height + this.size) this.y = -this.size;
    if (this.y < -this.size) this.y = height + this.size;
  }
}

let creatures = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    creatures.push(new Creature(random(width), random(height), random(20, 60)));
  }
}

function draw() {
  background(220);
  for (let creature of creatures) {
    creature.move();
    creature.display();
  }
}`,hints:["Use push() and pop() to isolate transformations","translate() to center drawing at the creature's position","Use sin() and cos() with an angle for smooth wandering"],vocabularyTerms:["method","property","constructor parameters"],resources:[{title:"push()",url:"https://p5js.org/reference/p5/push/"},{title:"translate()",url:"https://p5js.org/reference/p5/translate/"}]},{id:"oi-w1d2-2",title:"Add Behaviors",difficulty:"Medium",points:15,description:"Add additional methods to your creature class",prompt:"Add a grow() method that slowly increases size (max 100) and a changeColor() method that shifts the color over time.",explanation:{title:"Multiple Methods: Giving Objects Complex Behaviors",concept:`Objects can have many methods, each handling a specific behavior. This keeps code organized and makes objects more capable.

**Common Method Patterns:**
- \`update()\` - Called every frame to change state
- \`display()\` - Draw the object
- \`reset()\` - Return to starting state
- Custom methods for specific behaviors

**HSB Color Mode:**
When you want smooth color transitions, HSB (Hue, Saturation, Brightness) mode is easier than RGB:
- Hue (0-360): The color itself (red→orange→yellow→green→blue→purple→red)
- Saturation (0-100): How vivid the color is
- Brightness (0-100): How light/dark`,example:`// EXAMPLE: Firefly class with multiple behaviors
// Shows grow, glow, and move methods

class Firefly {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.baseSize = random(5, 10);
    this.currentSize = this.baseSize;
    this.glowIntensity = 0;
    this.glowDirection = 1;  // 1 = getting brighter, -1 = getting dimmer
    this.angle = random(TWO_PI);
  }

  // Method 1: Pulsing glow effect
  glow() {
    this.glowIntensity += 0.05 * this.glowDirection;
    if (this.glowIntensity > 1) {
      this.glowIntensity = 1;
      this.glowDirection = -1;
    }
    if (this.glowIntensity < 0) {
      this.glowIntensity = 0;
      this.glowDirection = 1;
    }
  }

  // Method 2: Grow when near mouse
  grow() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 100) {
      this.currentSize = lerp(this.currentSize, this.baseSize * 2, 0.1);
    } else {
      this.currentSize = lerp(this.currentSize, this.baseSize, 0.1);
    }
  }

  // Method 3: Wandering movement
  wander() {
    this.angle += random(-0.2, 0.2);
    this.x += cos(this.angle) * 1;
    this.y += sin(this.angle) * 1;

    // Keep on screen
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  display() {
    // Outer glow
    let glowSize = this.currentSize * 3 * this.glowIntensity;
    fill(255, 255, 100, 50 * this.glowIntensity);
    noStroke();
    circle(this.x, this.y, glowSize);

    // Body
    fill(50);
    circle(this.x, this.y, this.currentSize);

    // Light
    fill(255, 255, 100, 255 * this.glowIntensity);
    circle(this.x, this.y, this.currentSize * 0.6);
  }
}

let fireflies = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 30; i++) {
    fireflies.push(new Firefly(random(width), random(height)));
  }
}

function draw() {
  background(20, 30, 50);

  for (let ff of fireflies) {
    ff.glow();    // Call each method
    ff.grow();
    ff.wander();
    ff.display();
  }
}`,keyPoints:["Each method should do ONE specific thing","Methods can modify any of the object's properties","Call multiple methods in draw() to combine behaviors","lerp(current, target, amount) creates smooth transitions","HSB color mode makes hue cycling easy"]},starterCode:`class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.hue = random(360);  // For HSB color
    this.speed = 2;
  }

  display() {
    colorMode(HSB);
    fill(this.hue, 80, 90);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size * 0.7);
    colorMode(RGB);
  }

  move() {
    this.x += this.speed;
    if (this.x > width + this.size) this.x = -this.size;
  }

  grow() {
    // Increase size slowly, max 100
  }

  changeColor() {
    // Gradually shift the hue
  }
}

let creatures = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 8; i++) {
    creatures.push(new Creature(random(width), random(height), random(20, 40)));
  }
}

function draw() {
  background(220);
  for (let creature of creatures) {
    creature.move();
    creature.grow();
    creature.changeColor();
    creature.display();
  }
}`,solutionCode:`class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.hue = random(360);
    this.speed = 2;
  }

  display() {
    colorMode(HSB);
    fill(this.hue, 80, 90);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size * 0.7);
    colorMode(RGB);
  }

  move() {
    this.x += this.speed;
    if (this.x > width + this.size) this.x = -this.size;
  }

  grow() {
    if (this.size < 100) {
      this.size += 0.1;
    }
  }

  changeColor() {
    this.hue = (this.hue + 0.5) % 360;
  }
}

let creatures = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 8; i++) {
    creatures.push(new Creature(random(width), random(height), random(20, 40)));
  }
}

function draw() {
  background(220);
  for (let creature of creatures) {
    creature.move();
    creature.grow();
    creature.changeColor();
    creature.display();
  }
}`,hints:["Use if (this.size < 100) to check before growing","HSB color mode makes hue shifting easy","Use modulo (%) to wrap hue around at 360"],vocabularyTerms:["method","encapsulation","HSB color"],resources:[{title:"colorMode()",url:"https://p5js.org/reference/p5/colorMode/"}]}],exitTicket:"What's the difference between a property and a method?"},{day:3,title:"Mouse Interaction with Objects",objective:"Implement hover and click detection for objects",exercises:[{id:"oi-w1d3-1",title:"Hover Highlight",difficulty:"Medium",points:15,description:"Highlight circles when the mouse hovers over them",prompt:"Create an array of circles. Add a contains() method that returns true if a point is inside. Highlight circles when hovered.",explanation:{title:"Mouse Detection: Is the Point Inside the Shape?",concept:`To make objects interactive, we need to detect when the mouse is "inside" them. For circles, this is a distance check!

**The Key Insight:**
A point is inside a circle if the distance from the point to the circle's center is less than the radius.

**The dist() Function:**
\`dist(x1, y1, x2, y2)\` returns the distance between two points. p5.js calculates this using the Pythagorean theorem for us!

**The contains() Method Pattern:**
\`\`\`javascript
contains(px, py) {
  let d = dist(px, py, this.x, this.y);
  return d < this.r;  // Returns true or false
}
\`\`\`

Then check: \`if (myObject.contains(mouseX, mouseY)) { ... }\``,example:`// EXAMPLE: Clickable buttons using contains()
// Different from circles - shows rectangles!

class Button {
  constructor(x, y, w, h, label) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.isHovered = false;
  }

  // For rectangles, check if point is within bounds
  contains(px, py) {
    return px > this.x &&
           px < this.x + this.w &&
           py > this.y &&
           py < this.y + this.h;
  }

  update() {
    this.isHovered = this.contains(mouseX, mouseY);
  }

  display() {
    // Change appearance based on hover state
    if (this.isHovered) {
      fill(100, 200, 255);
      cursor(HAND);  // Change cursor to hand
    } else {
      fill(200);
      cursor(ARROW);
    }

    stroke(0);
    strokeWeight(this.isHovered ? 3 : 1);
    rect(this.x, this.y, this.w, this.h, 5);  // Rounded corners

    // Label
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(this.label, this.x + this.w/2, this.y + this.h/2);
  }
}

let buttons = [];

function setup() {
  createCanvas(800, 500);
  buttons.push(new Button(100, 200, 120, 50, "Start"));
  buttons.push(new Button(250, 200, 120, 50, "Options"));
  buttons.push(new Button(400, 200, 120, 50, "Quit"));
}

function draw() {
  background(240);

  // Reset cursor (in case no button is hovered)
  cursor(ARROW);

  for (let btn of buttons) {
    btn.update();
    btn.display();
  }
}

function mousePressed() {
  for (let btn of buttons) {
    if (btn.contains(mouseX, mouseY)) {
      console.log("Clicked: " + btn.label);
    }
  }
}`,keyPoints:["dist(x1, y1, x2, y2) calculates distance between points","For circles: point is inside if dist < radius","For rectangles: check x and y bounds separately","contains() returns a boolean (true/false)","Check hover state in draw() (runs every frame)"]},starterCode:`class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color(100, 150, 255);
  }

  contains(px, py) {
    // Return true if point (px, py) is inside this circle
    // Hint: use dist() and compare to this.r
  }

  display() {
    // Check if mouse is hovering, change appearance accordingly
    fill(this.color);
    circle(this.x, this.y, this.r * 2);
  }
}

let circles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(random(100, 700), random(100, 400), random(30, 60)));
  }
}

function draw() {
  background(220);
  for (let c of circles) {
    c.display();
  }
}`,solutionCode:`class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.baseColor = color(100, 150, 255);
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    return d < this.r;
  }

  display() {
    if (this.contains(mouseX, mouseY)) {
      fill(255, 200, 100);
      stroke(255, 100, 0);
      strokeWeight(3);
      cursor(HAND);
    } else {
      fill(this.baseColor);
      noStroke();
    }
    circle(this.x, this.y, this.r * 2);
  }
}

let circles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(random(100, 700), random(100, 400), random(30, 60)));
  }
}

function draw() {
  background(220);
  cursor(ARROW);
  for (let c of circles) {
    c.display();
  }
}`,hints:["Use dist() to calculate distance from point to center","Return d < this.r to check if inside","Call contains(mouseX, mouseY) in display()"],vocabularyTerms:["dist","rollover","contains"],resources:[{title:"dist()",url:"https://p5js.org/reference/p5/dist/"},{title:"cursor()",url:"https://p5js.org/reference/p5/cursor/"}]},{id:"oi-w1d3-2",title:"Clickable Objects",difficulty:"Medium",points:15,description:"Make objects respond to mouse clicks",prompt:"Add click functionality. Clicking a circle toggles its 'selected' state. Display count of selected circles.",explanation:{title:"Click Handling: Toggling Object States",concept:`To handle clicks on objects, we combine two things:
1. **mousePressed() function** - Called once when mouse is clicked
2. **contains() method** - Check if click was on this object

**Toggle Pattern:**
\`this.selected = !this.selected;\` flips true↔false

**Important Difference:**
- **mousePressed()** - Runs ONCE when clicked
- **mouseIsPressed** - Is true WHILE button is held
- **draw()** - Runs 60 times per second

For clicking objects, use mousePressed() so the action happens once, not 60 times!`,example:`// EXAMPLE: Light switches that toggle on/off
// Different from circles - shows toggle state!

class LightSwitch {
  constructor(x, y, label) {
    this.x = x;
    this.y = y;
    this.isOn = false;  // Toggle state
    this.label = label;
  }

  contains(px, py) {
    return px > this.x - 30 && px < this.x + 30 &&
           py > this.y - 40 && py < this.y + 40;
  }

  toggle() {
    if (this.contains(mouseX, mouseY)) {
      this.isOn = !this.isOn;  // Flip the boolean!
      return true;  // Let caller know we toggled
    }
    return false;
  }

  display() {
    // Switch plate
    fill(200);
    stroke(100);
    strokeWeight(2);
    rect(this.x - 30, this.y - 40, 60, 80, 5);

    // Switch toggle
    if (this.isOn) {
      fill(100, 255, 100);
      rect(this.x - 15, this.y - 30, 30, 25, 3);  // Up position
    } else {
      fill(150);
      rect(this.x - 15, this.y + 5, 30, 25, 3);   // Down position
    }

    // Label
    fill(0);
    noStroke();
    textAlign(CENTER);
    text(this.label, this.x, this.y + 60);

    // Light indicator
    if (this.isOn) {
      fill(255, 255, 0, 150);
      circle(this.x, this.y - 80, 40);
    }
  }
}

let switches = [];

function setup() {
  createCanvas(800, 500);
  switches.push(new LightSwitch(150, 250, "Kitchen"));
  switches.push(new LightSwitch(300, 250, "Living Room"));
  switches.push(new LightSwitch(450, 250, "Bedroom"));
}

function draw() {
  // Background changes based on lights
  let onCount = switches.filter(s => s.isOn).length;
  let brightness = map(onCount, 0, switches.length, 50, 240);
  background(brightness);

  for (let sw of switches) {
    sw.display();
  }

  fill(0);
  textSize(20);
  text("Lights on: " + onCount + "/" + switches.length, 20, 30);
}

function mousePressed() {
  for (let sw of switches) {
    sw.toggle();
  }
}`,keyPoints:["mousePressed() runs once per click","Toggle with: value = !value","contains() checks if click was on object","filter() can count objects matching a condition","Return early if you only want one object to respond"]},starterCode:`class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.selected = false;
  }

  contains(px, py) {
    return dist(px, py, this.x, this.y) < this.r;
  }

  clicked() {
    // Toggle selected if mouse is inside
  }

  display() {
    if (this.selected) {
      fill(100, 255, 100);
      stroke(0, 150, 0);
      strokeWeight(3);
    } else if (this.contains(mouseX, mouseY)) {
      fill(255, 200, 100);
      noStroke();
    } else {
      fill(100, 150, 255);
      noStroke();
    }
    circle(this.x, this.y, this.r * 2);
  }
}

let circles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(random(100, 700), random(100, 400), random(30, 50)));
  }
}

function draw() {
  background(220);
  for (let c of circles) {
    c.display();
  }
  // Display selected count
}

function mousePressed() {
  // Call clicked() on each circle
}`,solutionCode:`class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.selected = false;
  }

  contains(px, py) {
    return dist(px, py, this.x, this.y) < this.r;
  }

  clicked() {
    if (this.contains(mouseX, mouseY)) {
      this.selected = !this.selected;
    }
  }

  display() {
    if (this.selected) {
      fill(100, 255, 100);
      stroke(0, 150, 0);
      strokeWeight(3);
    } else if (this.contains(mouseX, mouseY)) {
      fill(255, 200, 100);
      noStroke();
    } else {
      fill(100, 150, 255);
      noStroke();
    }
    circle(this.x, this.y, this.r * 2);
  }
}

let circles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    circles.push(new Circle(random(100, 700), random(100, 400), random(30, 50)));
  }
}

function draw() {
  background(220);
  for (let c of circles) {
    c.display();
  }

  let selectedCount = circles.filter(c => c.selected).length;
  fill(0);
  textSize(20);
  text("Selected: " + selectedCount + "/" + circles.length, 20, 30);
}

function mousePressed() {
  for (let c of circles) {
    c.clicked();
  }
}`,hints:["Toggle with: this.selected = !this.selected","Use filter() to count selected circles","Call each circle's clicked() in mousePressed()"],vocabularyTerms:["toggle","mousePressed","filter"],resources:[{title:"mousePressed()",url:"https://p5js.org/reference/p5/mousePressed/"}]}],exitTicket:"Write the condition to check if the mouse is inside a circle at (cx, cy) with radius r."},{day:4,title:"Removing Objects from Arrays",objective:"Safely remove objects using reverse iteration",exercises:[{id:"oi-w1d4-1",title:"Click to Remove",difficulty:"Medium",points:15,description:"Remove objects when clicked using splice()",prompt:"Create bubbles that can be popped (removed) when clicked. Use reverse iteration to avoid skipping elements.",explanation:{title:"Removing from Arrays: The Backward Loop Trick",concept:`When you remove an element from an array, all elements after it shift down. This causes a problem with forward loops!

**The Problem with Forward Loops:**
\`\`\`
Array: [A, B, C, D, E]
       Index: 0  1  2  3  4

At i=2, we remove C:
Array: [A, B, D, E]
       Index: 0  1  2  3

Now i becomes 3, but D moved to index 2!
We SKIPPED D!
\`\`\`

**The Solution: Loop Backward!**
Start from the end. When we remove something, only indices ABOVE our current position shift - we've already checked those!

**splice(index, count):**
- Removes \`count\` elements starting at \`index\`
- \`splice(2, 1)\` removes one element at index 2`,example:`// EXAMPLE: Asteroids that can be shot
// Different from bubbles - shows projectile removal too!

class Asteroid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 50);
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.rotation = 0;
    this.rotSpeed = random(-0.05, 0.05);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotSpeed;

    // Wrap around screen
    if (this.x < -this.size) this.x = width + this.size;
    if (this.x > width + this.size) this.x = -this.size;
    if (this.y < -this.size) this.y = height + this.size;
    if (this.y > height + this.size) this.y = -this.size;
  }

  contains(px, py) {
    return dist(px, py, this.x, this.y) < this.size / 2;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    fill(100, 80, 60);
    stroke(60);
    strokeWeight(2);
    // Draw irregular asteroid shape
    beginShape();
    for (let a = 0; a < TWO_PI; a += PI/4) {
      let r = this.size/2 + random(-5, 5);
      vertex(cos(a) * r, sin(a) * r);
    }
    endShape(CLOSE);
    pop();
  }
}

let asteroids = [];
let destroyed = 0;

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid(random(width), random(height)));
  }
}

function draw() {
  background(20);

  // BACKWARD LOOP for safe removal
  for (let i = asteroids.length - 1; i >= 0; i--) {
    asteroids[i].move();
    asteroids[i].display();
  }

  // Respawn if all destroyed
  if (asteroids.length === 0) {
    for (let i = 0; i < 10; i++) {
      asteroids.push(new Asteroid(random(width), random(height)));
    }
    destroyed = 0;
  }

  fill(255);
  textSize(18);
  text("Click asteroids to destroy! Destroyed: " + destroyed, 20, 30);
  text("Remaining: " + asteroids.length, 20, 55);
}

function mousePressed() {
  // BACKWARD LOOP for removal
  for (let i = asteroids.length - 1; i >= 0; i--) {
    if (asteroids[i].contains(mouseX, mouseY)) {
      asteroids.splice(i, 1);  // Remove this asteroid
      destroyed++;
    }
  }
}`,keyPoints:["splice(index, 1) removes one element at index","Forward loops SKIP elements after removal","Backward loops: for (let i = arr.length - 1; i >= 0; i--)","Indices only shift ABOVE the removed position","Always use backward loops when removing during iteration"]},starterCode:`class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(20, 40);
    this.color = color(random(255), random(255), random(255), 180);
  }

  contains(px, py) {
    return dist(px, py, this.x, this.y) < this.r;
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

let bubbles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 20; i++) {
    bubbles.push(new Bubble(random(100, 700), random(100, 400)));
  }
}

function draw() {
  background(200, 220, 255);
  for (let bubble of bubbles) {
    bubble.display();
  }
  fill(0);
  text("Bubbles: " + bubbles.length + " | Click to pop!", 20, 30);
}

function mousePressed() {
  // Loop BACKWARDS and use splice() to remove clicked bubbles
}`,solutionCode:`class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(20, 40);
    this.color = color(random(255), random(255), random(255), 180);
  }

  contains(px, py) {
    return dist(px, py, this.x, this.y) < this.r;
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

let bubbles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 20; i++) {
    bubbles.push(new Bubble(random(100, 700), random(100, 400)));
  }
}

function draw() {
  background(200, 220, 255);
  for (let bubble of bubbles) {
    bubble.display();
  }
  fill(0);
  textSize(18);
  text("Bubbles: " + bubbles.length + " | Click to pop!", 20, 30);
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}`,hints:["Loop from length-1 down to 0","Use splice(i, 1) to remove one element at index i","Backward loops prevent skipping after removal"],vocabularyTerms:["splice","reverse iteration","array mutation"],resources:[{title:"splice()",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"}]},{id:"oi-w1d4-2",title:"Auto-Remove at Edge",difficulty:"Medium",points:15,description:"Automatically remove objects that leave the screen",prompt:"Bubbles float upward. Remove them when they go off the top. Spawn new bubbles from the bottom to keep the count steady.",explanation:{title:"Object Lifecycle: Spawn, Live, Die",concept:`Many objects in games and simulations have a lifecycle:
1. **Spawn** - Object is created (pushed to array)
2. **Live** - Object exists, updates, displays
3. **Die** - Object is removed (spliced from array)

**Common Removal Conditions:**
- Off screen (projectiles, particles)
- Health reaches zero (enemies)
- Collected (coins, power-ups)
- Time expired (temporary effects)
- User interaction (clicked)

**Continuous Spawning Pattern:**
When objects are removed, spawn new ones to maintain a steady count or create an endless stream of objects.`,example:`// EXAMPLE: Falling leaves with lifecycle
// Different from bubbles - falls down, has rotation!

class Leaf {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(15, 30);
    this.rotation = random(TWO_PI);
    this.rotSpeed = random(-0.05, 0.05);
    this.fallSpeed = random(1, 3);
    this.swayAmount = random(0.5, 2);
    this.swayOffset = random(TWO_PI);
    // Random autumn color
    this.hue = random(15, 45);  // Orange to yellow range
  }

  fall() {
    this.y += this.fallSpeed;
    this.x += sin(frameCount * 0.02 + this.swayOffset) * this.swayAmount;
    this.rotation += this.rotSpeed;
  }

  isOffScreen() {
    return this.y > height + this.size;  // Below the canvas
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotation);

    colorMode(HSB);
    fill(this.hue, 80, 90);
    noStroke();

    // Leaf shape
    beginShape();
    vertex(0, -this.size/2);
    bezierVertex(this.size/2, -this.size/4, this.size/2, this.size/4, 0, this.size/2);
    bezierVertex(-this.size/2, this.size/4, -this.size/2, -this.size/4, 0, -this.size/2);
    endShape();

    // Stem
    stroke(30, 70, 50);
    strokeWeight(1);
    line(0, 0, 0, this.size/2);

    colorMode(RGB);
    pop();
  }
}

let leaves = [];

function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(200, 220, 255);

  // Spawn new leaves randomly
  if (random() < 0.05) {  // 5% chance each frame
    leaves.push(new Leaf(random(width), -30));
  }

  // BACKWARD LOOP for removal
  for (let i = leaves.length - 1; i >= 0; i--) {
    leaves[i].fall();
    leaves[i].display();

    if (leaves[i].isOffScreen()) {
      leaves.splice(i, 1);
    }
  }

  fill(0);
  textSize(16);
  text("Falling leaves: " + leaves.length, 20, 30);
}`,keyPoints:["isOffScreen() returns true when object should be removed","Check the removal condition AFTER moving the object","Spawn new objects with push(new Object(...))","Use random() < probability for random spawning","Backward loop handles both update AND removal"]},starterCode:`class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(15, 35);
    this.speed = random(1, 3);
  }

  move() {
    this.y -= this.speed;
    this.x += random(-0.5, 0.5);
  }

  isOffScreen() {
    // Return true if bubble is above the canvas
  }

  display() {
    fill(100, 180, 255, 150);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

let bubbles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 15; i++) {
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function draw() {
  background(200, 220, 255);

  // Loop backwards for removal
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].move();
    bubbles[i].display();

    // Remove if off screen, spawn replacement at bottom
  }

  fill(0);
  text("Bubbles: " + bubbles.length, 20, 30);
}`,solutionCode:`class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(15, 35);
    this.speed = random(1, 3);
  }

  move() {
    this.y -= this.speed;
    this.x += random(-0.5, 0.5);
  }

  isOffScreen() {
    return this.y < -this.r;
  }

  display() {
    fill(100, 180, 255, 150);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

let bubbles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 15; i++) {
    bubbles.push(new Bubble(random(width), random(height)));
  }
}

function draw() {
  background(200, 220, 255);

  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].move();
    bubbles[i].display();

    if (bubbles[i].isOffScreen()) {
      bubbles.splice(i, 1);
      bubbles.push(new Bubble(random(width), height + 20));
    }
  }

  fill(0);
  textSize(18);
  text("Bubbles: " + bubbles.length, 20, 30);
}`,hints:["isOffScreen: return this.y < -this.r","After splice, push a new bubble at y = height + 20","This creates infinite rising bubbles"],vocabularyTerms:["lifecycle","spawn","continuous spawning"],resources:[]}],exitTicket:"Why must we loop backwards when removing elements from an array?"},{day:5,title:"Mini-Project: Object Garden",objective:"Integrate all Week 1 concepts in a complete project",exercises:[{id:"oi-w1d5-project",title:"Object Garden",difficulty:"Hard",points:50,description:"Create an interactive garden with multiple object types",prompt:"Build an Object Garden where you can spawn different types of objects (flowers, butterflies), interact with them (hover effects), and remove them (click to remove). Include at least 2 different object classes.",explanation:{title:"Project Integration: Combining Everything You've Learned",concept:`This project combines ALL the skills from Week 1:

**Object-Oriented Programming:**
- Define classes with constructors, properties, and methods
- Create multiple different object types

**Arrays of Objects:**
- Store objects in arrays
- Iterate through arrays to update and display

**Mouse Interaction:**
- Detect hover with contains()
- Handle clicks to spawn or remove

**Array Removal:**
- Use backward loops with splice()
- Implement click-to-remove and auto-removal

**Project Planning Tips:**
1. Start with ONE class, get it working
2. Add interaction to that class
3. Then add a second class
4. Finally, combine everything`,example:`// EXAMPLE: Aquarium with fish and bubbles
// Different from garden - underwater theme!

class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(30, 60);
    this.speed = map(this.size, 30, 60, 2, 0.5);
    this.color = color(random(255), random(150, 255), random(100, 200));
    this.direction = random() > 0.5 ? 1 : -1;
  }

  swim() {
    this.x += this.speed * this.direction;
    this.y += sin(frameCount * 0.05 + this.x * 0.01) * 0.5;

    if (this.x > width + this.size) { this.x = -this.size; this.direction = 1; }
    if (this.x < -this.size) { this.x = width + this.size; this.direction = -1; }
  }

  contains(px, py) {
    return dist(px, py, this.x, this.y) < this.size / 2;
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.direction, 1);  // Flip based on direction

    // Body
    fill(this.color);
    noStroke();
    ellipse(0, 0, this.size, this.size * 0.5);

    // Tail
    triangle(-this.size/2, 0, -this.size * 0.8, -this.size * 0.3, -this.size * 0.8, this.size * 0.3);

    // Eye
    fill(255);
    ellipse(this.size * 0.2, -this.size * 0.05, this.size * 0.15);
    fill(0);
    ellipse(this.size * 0.22, -this.size * 0.05, this.size * 0.08);

    pop();
  }
}

class AquaBubble {
  constructor(x) {
    this.x = x;
    this.y = height + 10;
    this.size = random(5, 15);
    this.speed = random(0.5, 2);
  }

  rise() {
    this.y -= this.speed;
    this.x += sin(frameCount * 0.1 + this.y * 0.1) * 0.5;
  }

  isOffScreen() {
    return this.y < -this.size;
  }

  display() {
    fill(255, 255, 255, 100);
    stroke(255, 255, 255, 150);
    strokeWeight(1);
    circle(this.x, this.y, this.size);
  }
}

let fish = [];
let bubbles = [];

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 8; i++) {
    fish.push(new Fish(random(width), random(100, height - 100)));
  }
}

function draw() {
  // Water gradient background
  for (let y = 0; y < height; y++) {
    let c = lerpColor(color(0, 100, 150), color(0, 50, 100), y / height);
    stroke(c);
    line(0, y, width, y);
  }

  // Spawn bubbles randomly
  if (random() < 0.03) {
    bubbles.push(new AquaBubble(random(width)));
  }

  // Update bubbles (backward loop)
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].rise();
    bubbles[i].display();
    if (bubbles[i].isOffScreen()) {
      bubbles.splice(i, 1);
    }
  }

  // Update fish
  for (let f of fish) {
    f.swim();
    f.display();
  }

  fill(255);
  textSize(14);
  text("Fish: " + fish.length + " | Bubbles: " + bubbles.length, 10, 20);
  text("Click to add fish | Press C to clear", 10, 40);
}

function mousePressed() {
  // Click on fish to remove, or add new fish
  for (let i = fish.length - 1; i >= 0; i--) {
    if (fish[i].contains(mouseX, mouseY)) {
      fish.splice(i, 1);
      return;
    }
  }
  fish.push(new Fish(mouseX, mouseY));
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    fish = [];
    bubbles = [];
  }
}`,keyPoints:["Plan before coding - sketch your objects","Build one feature at a time","Test each feature before adding the next","Multiple arrays can store different object types","Use return after handling click to avoid multiple actions"]},starterCode:`// Object Garden Project
// Requirements:
// - At least 2 object classes (e.g., Flower, Butterfly)
// - Spawn objects via mouse click or keyboard
// - Remove objects via click
// - Hover effects
// - Display object counts

class Flower {
  constructor(x, y) {
    // Properties: position, size, color, etc.
  }

  display() {
    // Draw flower with push/translate/pop
  }

  contains(px, py) {
    // Return true if point is inside
  }
}

class Butterfly {
  constructor(x, y) {
    // Properties: position, wing color, angle, speed
  }

  display() {
    // Draw butterfly with animated wings
  }

  move() {
    // Wandering movement
  }

  contains(px, py) {
    // Return true if point is inside
  }
}

let flowers = [];
let butterflies = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // Draw sky and ground
  // Display and update all objects (backward loops!)
  // Show instructions and counts
}

function mousePressed() {
  // Check for clicks on objects (remove them)
  // Or spawn new flower if clicking on ground
}

function keyPressed() {
  // Spawn butterfly on 'B' key
  // Clear all on 'C' key
}`,solutionCode:`class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(25, 45);
    this.petalColor = color(random(200, 255), random(100, 200), random(150, 255));
    this.sway = random(TWO_PI);
  }

  display() {
    let swayAmount = sin(frameCount * 0.05 + this.sway) * 3;
    push();
    translate(this.x + swayAmount, this.y);

    stroke(50, 150, 50);
    strokeWeight(3);
    line(0, 0, 0, 30);

    noStroke();
    fill(this.petalColor);
    for (let i = 0; i < 6; i++) {
      let angle = (TWO_PI / 6) * i;
      let px = cos(angle) * this.size * 0.4;
      let py = sin(angle) * this.size * 0.4 - this.size * 0.3;
      ellipse(px, py, this.size * 0.4, this.size * 0.6);
    }

    fill(255, 200, 50);
    circle(0, -this.size * 0.3, this.size * 0.3);
    pop();
  }

  contains(px, py) {
    return dist(px, py, this.x, this.y - this.size * 0.3) < this.size * 0.6;
  }
}

class Butterfly {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.wingColor = color(random(255), random(255), random(255), 200);
    this.angle = random(TWO_PI);
    this.speed = random(1, 2);
  }

  display() {
    push();
    translate(this.x, this.y);
    let wingAngle = sin(frameCount * 0.3) * 0.5;

    noStroke();
    fill(this.wingColor);
    push();
    rotate(-wingAngle);
    ellipse(-10, 0, 20, 30);
    pop();
    push();
    rotate(wingAngle);
    ellipse(10, 0, 20, 30);
    pop();

    fill(50);
    ellipse(0, 0, 6, 20);
    pop();
  }

  move() {
    this.angle += random(-0.1, 0.1);
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    if (this.x < -20) this.x = width + 20;
    if (this.x > width + 20) this.x = -20;
    if (this.y < -20) this.y = height - 100;
    if (this.y > height - 100) this.y = -20;
  }

  contains(px, py) {
    return dist(px, py, this.x, this.y) < 20;
  }
}

let flowers = [];
let butterflies = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 235);
  fill(100, 180, 100);
  noStroke();
  rect(0, height - 100, width, 100);

  for (let i = flowers.length - 1; i >= 0; i--) {
    flowers[i].display();
  }

  for (let i = butterflies.length - 1; i >= 0; i--) {
    butterflies[i].move();
    butterflies[i].display();
  }

  fill(0);
  textSize(14);
  text("Click ground to plant flower | B = butterfly | C = clear | Click objects to remove", 10, 20);
  text("Flowers: " + flowers.length + " | Butterflies: " + butterflies.length, 10, 40);
}

function mousePressed() {
  for (let i = butterflies.length - 1; i >= 0; i--) {
    if (butterflies[i].contains(mouseX, mouseY)) {
      butterflies.splice(i, 1);
      return;
    }
  }

  for (let i = flowers.length - 1; i >= 0; i--) {
    if (flowers[i].contains(mouseX, mouseY)) {
      flowers.splice(i, 1);
      return;
    }
  }

  if (mouseY > height - 100) {
    flowers.push(new Flower(mouseX, mouseY));
  }
}

function keyPressed() {
  if (key === 'b' || key === 'B') {
    butterflies.push(new Butterfly(random(width), random(50, height - 150)));
  }
  if (key === 'c' || key === 'C') {
    flowers = [];
    butterflies = [];
  }
}`,hints:["Start with one class, then add the second","Test each feature independently","Use return after removing to prevent multiple removals"],vocabularyTerms:["integration","game loop","user experience"],resources:[]}],exitTicket:"What Week 1 concepts did you use in your project?"}]},week2:{title:"Object Communication & Images",bigIdea:"Objects can detect and respond to each other. Images transform objects from shapes to real graphics.",days:[{day:6,title:"Object Communication Part 1",objective:"Implement collision detection between two objects",exercises:[{id:"oi-w2d6-1",title:"Collision Detection",difficulty:"Medium",points:15,description:"Detect when two circles overlap",prompt:"Create two balls that move around. Add an intersects() method that checks if they overlap. Change their color when colliding.",explanation:{title:"Collision Detection: When Do Two Circles Touch?",concept:`In games and simulations, objects need to know when they touch each other. For circles, this is a simple distance check!

**The Formula:**
Two circles overlap when the distance between their centers is less than the sum of their radii.

\`\`\`
distance < radius1 + radius2  →  COLLISION!
distance >= radius1 + radius2 →  NO COLLISION
\`\`\`

**Visual:**
\`\`\`
Not colliding:     Colliding:
  ○     ○           ○○
  r1    r2         r1r2
  |--d--|          |-d-|
  d > r1+r2        d < r1+r2
\`\`\`

**The intersects() Method:**
Pass another object to check collision against:
\`\`\`javascript
intersects(other) {
  let d = dist(this.x, this.y, other.x, other.y);
  return d < this.r + other.r;
}
\`\`\``,example:`// EXAMPLE: Planets orbiting and detecting proximity
// Different from balls - shows orbital motion!

class Planet {
  constructor(orbitRadius, size, speed, col) {
    this.orbitRadius = orbitRadius;
    this.angle = random(TWO_PI);
    this.size = size;
    this.speed = speed;
    this.color = col;
    this.x = 0;
    this.y = 0;
  }

  orbit(centerX, centerY) {
    this.angle += this.speed;
    this.x = centerX + cos(this.angle) * this.orbitRadius;
    this.y = centerY + sin(this.angle) * this.orbitRadius;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < (this.size + other.size) / 2;  // Using diameter, so divide by 2
  }

  display(highlight) {
    if (highlight) {
      fill(255, 0, 0);
      // Draw warning ring
      noFill();
      stroke(255, 0, 0);
      strokeWeight(2);
      circle(this.x, this.y, this.size + 20);
    } else {
      fill(this.color);
    }
    noStroke();
    circle(this.x, this.y, this.size);
  }
}

let planets = [];
let sunX, sunY;

function setup() {
  createCanvas(800, 500);
  sunX = width / 2;
  sunY = height / 2;

  // Create planets at different orbits
  planets.push(new Planet(80, 20, 0.03, color(200, 100, 50)));
  planets.push(new Planet(130, 30, 0.02, color(50, 150, 200)));
  planets.push(new Planet(180, 25, 0.015, color(150, 200, 100)));
}

function draw() {
  background(20);

  // Draw sun
  fill(255, 200, 50);
  circle(sunX, sunY, 60);

  // Update planet positions
  for (let planet of planets) {
    planet.orbit(sunX, sunY);
  }

  // Check for close encounters
  let anyCollision = false;
  for (let i = 0; i < planets.length; i++) {
    for (let j = i + 1; j < planets.length; j++) {
      if (planets[i].intersects(planets[j])) {
        planets[i].display(true);
        planets[j].display(true);
        anyCollision = true;
      }
    }
  }

  // Display planets not in collision
  for (let planet of planets) {
    planet.display(false);
  }

  fill(255);
  textSize(16);
  text("Watch for planetary close encounters!", 20, 30);
  if (anyCollision) {
    fill(255, 0, 0);
    text("WARNING: Collision detected!", 20, 55);
  }
}`,keyPoints:["Collision formula: dist < radius1 + radius2","intersects(other) takes another object as parameter","this refers to current object, other to passed object","Return true/false for collision state","Separate detection from response (check first, react after)"]},starterCode:`class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(30, 50);
    this.vx = random(-3, 3);
    this.vy = random(-3, 3);
    this.baseColor = color(random(255), random(255), random(255));
    this.color = this.baseColor;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < this.r || this.x > width - this.r) this.vx *= -1;
    if (this.y < this.r || this.y > height - this.r) this.vy *= -1;
  }

  intersects(other) {
    // Return true if this ball overlaps other ball
    // Use dist() and compare to sum of radii
  }

  highlight() {
    this.color = color(255, 0, 0);
  }

  resetColor() {
    this.color = this.baseColor;
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

let ball1, ball2;

function setup() {
  createCanvas(800, 500);
  ball1 = new Ball(200, 250);
  ball2 = new Ball(600, 250);
}

function draw() {
  background(220);

  ball1.resetColor();
  ball2.resetColor();

  // Check collision using intersects() and highlight both if true

  ball1.move();
  ball2.move();
  ball1.display();
  ball2.display();
}`,solutionCode:`class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(30, 50);
    this.vx = random(-3, 3);
    this.vy = random(-3, 3);
    this.baseColor = color(random(255), random(255), random(255));
    this.color = this.baseColor;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < this.r || this.x > width - this.r) this.vx *= -1;
    if (this.y < this.r || this.y > height - this.r) this.vy *= -1;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
  }

  highlight() {
    this.color = color(255, 0, 0);
  }

  resetColor() {
    this.color = this.baseColor;
  }

  display() {
    fill(this.color);
    noStroke();
    circle(this.x, this.y, this.r * 2);
  }
}

let ball1, ball2;

function setup() {
  createCanvas(800, 500);
  ball1 = new Ball(200, 250);
  ball2 = new Ball(600, 250);
}

function draw() {
  background(220);

  ball1.resetColor();
  ball2.resetColor();

  if (ball1.intersects(ball2)) {
    ball1.highlight();
    ball2.highlight();
  }

  ball1.move();
  ball2.move();
  ball1.display();
  ball2.display();

  fill(0);
  text("Watch for collisions!", 20, 30);
}`,hints:["Collision formula: dist < radius1 + radius2","Use dist(this.x, this.y, other.x, other.y)","this refers to this ball, other to the passed ball"],vocabularyTerms:["collision detection","intersection","dist"],resources:[{title:"dist()",url:"https://p5js.org/reference/p5/dist/"}]},{id:"oi-w2d6-2",title:"Collision Response",difficulty:"Hard",points:15,description:"Make balls react to collisions by bouncing apart",prompt:"When balls collide, swap their velocities (simple bounce). Add a collision counter.",explanation:{title:"Collision Response: Making Objects React",concept:`Detecting collision is only half the battle - we also need objects to REACT!

**Simple Bounce (Velocity Swap):**
The easiest collision response is to swap velocities:
\`\`\`javascript
// Swap vx
let tempVx = ball1.vx;
ball1.vx = ball2.vx;
ball2.vx = tempVx;

// Swap vy
let tempVy = ball1.vy;
ball1.vy = ball2.vy;
ball2.vy = tempVy;
\`\`\`

**Why This Works:**
- If ball1 was moving right and ball2 left, they swap directions
- Creates the illusion of bouncing off each other
- Not physically accurate, but looks decent!

**Collision Counter:**
Track how many collisions have occurred for scoring or statistics.`,example:`// EXAMPLE: Bumper cars with score tracking
// Different from balls - shows directional cars!

class BumperCar {
  constructor(x, y, playerColor) {
    this.x = x;
    this.y = y;
    this.angle = random(TWO_PI);
    this.speed = 2;
    this.vx = cos(this.angle) * this.speed;
    this.vy = sin(this.angle) * this.speed;
    this.size = 40;
    this.color = playerColor;
    this.hits = 0;  // Personal hit counter
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off walls
    if (this.x < this.size || this.x > width - this.size) {
      this.vx *= -1;
    }
    if (this.y < this.size || this.y > height - this.size) {
      this.vy *= -1;
    }

    // Update angle to face direction of movement
    this.angle = atan2(this.vy, this.vx);
  }

  intersects(other) {
    return dist(this.x, this.y, other.x, other.y) < this.size;
  }

  collideWith(other) {
    // Swap velocities
    let tempVx = this.vx;
    let tempVy = this.vy;
    this.vx = other.vx;
    this.vy = other.vy;
    other.vx = tempVx;
    other.vy = tempVy;

    // Both cars get a hit point
    this.hits++;
    other.hits++;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    // Car body
    fill(this.color);
    stroke(0);
    strokeWeight(2);
    rectMode(CENTER);
    rect(0, 0, this.size * 1.2, this.size * 0.7, 5);

    // Bumper (front)
    fill(100);
    rect(this.size * 0.4, 0, this.size * 0.3, this.size * 0.5, 3);

    pop();

    // Hit counter above car
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(12);
    text(this.hits, this.x, this.y - this.size * 0.6);
  }
}

let cars = [];
let totalCollisions = 0;

function setup() {
  createCanvas(800, 500);
  cars.push(new BumperCar(200, 250, color(255, 100, 100)));
  cars.push(new BumperCar(600, 250, color(100, 100, 255)));
  cars.push(new BumperCar(400, 150, color(100, 255, 100)));
  cars.push(new BumperCar(400, 350, color(255, 255, 100)));
}

function draw() {
  background(50, 80, 50);  // Green arena

  // Draw arena border
  noFill();
  stroke(255, 200, 0);
  strokeWeight(10);
  rect(20, 20, width - 40, height - 40, 10);

  // Check collisions between all pairs
  for (let i = 0; i < cars.length; i++) {
    for (let j = i + 1; j < cars.length; j++) {
      if (cars[i].intersects(cars[j])) {
        cars[i].collideWith(cars[j]);
        totalCollisions++;
      }
    }
  }

  // Move and display all cars
  for (let car of cars) {
    car.move();
    car.display();
  }

  // Scoreboard
  fill(255);
  textSize(18);
  textAlign(LEFT);
  text("Total Bumps: " + totalCollisions, 30, 50);
}`,keyPoints:["Collision response happens AFTER detection","Velocity swap is the simplest bounce response","Use temp variables when swapping values","Track collisions for scoring or statistics","Can add effects (flash, sound) on collision"]},starterCode:`// Use the Ball class from exercise oi-w2d6-1
// Add collision response

let balls = [];
let collisionCount = 0;

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 5; i++) {
    balls.push(new Ball(random(100, 700), random(100, 400)));
  }
}

function draw() {
  background(220);

  // Check collisions between all pairs using nested loops
  // When collision detected, swap velocities and increment counter

  for (let ball of balls) {
    ball.move();
    ball.display();
  }

  fill(0);
  text("Collisions: " + collisionCount, 20, 30);
}`,solutionCode:`class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(20, 40);
    this.vx = random(-3, 3);
    this.vy = random(-3, 3);
    this.color = color(random(255), random(255), random(255));
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < this.r || this.x > width - this.r) this.vx *= -1;
    if (this.y < this.r || this.y > height - this.r) this.vy *= -1;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return d < this.r + other.r;
  }

  display() {
    fill(this.color);
    stroke(0);
    strokeWeight(2);
    circle(this.x, this.y, this.r * 2);
  }
}

let balls = [];
let collisionCount = 0;

function setup() {
  createCanvas(800, 500);
  for (let i = 0; i < 5; i++) {
    balls.push(new Ball(random(100, 700), random(100, 400)));
  }
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      if (balls[i].intersects(balls[j])) {
        let tempVx = balls[i].vx;
        let tempVy = balls[i].vy;
        balls[i].vx = balls[j].vx;
        balls[i].vy = balls[j].vy;
        balls[j].vx = tempVx;
        balls[j].vy = tempVy;
        collisionCount++;
      }
    }
  }

  for (let ball of balls) {
    ball.move();
    ball.display();
  }

  fill(0);
  textSize(20);
  text("Collisions: " + collisionCount, 20, 30);
}`,hints:["Use nested loops: j = i + 1 to avoid duplicates","Swap velocities using a temp variable","Increment counter inside the collision check"],vocabularyTerms:["velocity swap","bounce","nested loop"],resources:[]}],exitTicket:"What is the formula for detecting if two circles overlap?"},{day:7,title:"Object Communication Part 2",objective:"Use nested loops to check all object pairs",exercises:[{id:"oi-w2d7-1",title:"All Pairs Detection",difficulty:"Medium",points:15,description:"Check collisions between all balls in an array",prompt:"Create 10 balls. Use nested loops with j = i + 1 to check every unique pair. Highlight colliding balls.",explanation:{title:"Nested Loops: Checking Every Pair",concept:`With multiple objects, we need to check each object against every OTHER object. This requires nested loops!

**The Problem:**
- 5 objects = 10 unique pairs to check
- 10 objects = 45 unique pairs
- Formula: n objects = n*(n-1)/2 pairs

**The Solution - Optimized Nested Loops:**
\`\`\`javascript
for (let i = 0; i < objects.length; i++) {
  for (let j = i + 1; j < objects.length; j++) {
    // Check objects[i] against objects[j]
  }
}
\`\`\`

**Why j = i + 1?**
- Avoids checking object against itself (i == j)
- Avoids checking same pair twice (A-B and B-A)
- Cuts checks roughly in half!`,example:`// Brief example shown in the prompt
// See full lesson for detailed example`,keyPoints:["j = i + 1 avoids self-comparison and duplicates","n objects = n*(n-1)/2 pairs to check","Both objects in a pair should be affected","This is O(n²) complexity - careful with many objects"]},starterCode:"// Starter code here",solutionCode:"// Solution code here",hints:["Use j = i + 1 pattern"],vocabularyTerms:["nested loop","all-vs-all"],resources:[]},{id:"oi-w2d7-2",title:"Repulsion System",difficulty:"Hard",points:15,description:"Make objects push away from each other",prompt:"When balls overlap, push them apart based on direction between centers.",explanation:{title:"Repulsion Forces: Pushing Objects Apart",concept:`Instead of just swapping velocities, we can calculate a push direction and apply forces!

**The Pattern:**
1. Calculate direction from object A to object B
2. Normalize (make it length 1)
3. Apply as force: A moves away, B moves opposite

\`\`\`javascript
let dx = other.x - this.x;
let dy = other.y - this.y;
let d = dist(this.x, this.y, other.x, other.y);
// Normalize and apply
this.vx -= (dx/d) * force;
this.vy -= (dy/d) * force;
\`\`\``,example:"// See full lesson for detailed example",keyPoints:["Calculate direction vector between centers","Normalize by dividing by distance","Apply opposite forces to each object"]},starterCode:"// Starter code here",solutionCode:"// Solution code here",hints:["Normalize direction by dividing by distance"],vocabularyTerms:["repulsion","normalize","force"],resources:[]}],exitTicket:"Why do we start the inner loop at j = i + 1?"},{day:8,title:"Loading and Displaying Images",objective:"Load images with preload() and display with image()",exercises:[{id:"oi-w2d8-1",title:"Display Image",difficulty:"Easy",points:10,description:"Load and display an image",prompt:"Load an image in preload() and display it at different sizes.",explanation:{title:"Loading Images: The preload() Pattern",concept:`Images take time to load from disk. If we try to use them before they're ready, we get errors!

**The Solution: preload()**
p5.js provides a special function that runs BEFORE setup() and WAITS for everything to load.

\`\`\`javascript
let img;

function preload() {
  img = loadImage("picture.png");  // Loads and waits
}

function setup() {
  // img is guaranteed to be ready here!
}
\`\`\`

**Displaying Images:**
\`\`\`javascript
image(img, x, y);           // Original size
image(img, x, y, w, h);     // Custom size
imageMode(CENTER);          // Position from center
\`\`\``,example:"// See full lesson for detailed example",keyPoints:["preload() runs before setup() and waits","loadImage() loads an image file","image() displays with optional size parameters","imageMode(CENTER) changes positioning"]},starterCode:"// Starter code here",solutionCode:"// Solution code here",hints:["Use loadImage() in preload()"],vocabularyTerms:["preload","loadImage","image"],resources:[]},{id:"oi-w2d8-2",title:"Multiple Images",difficulty:"Medium",points:15,description:"Load multiple images into an array",prompt:"Load 3+ images and create a simple gallery with click navigation.",explanation:{title:"Image Arrays: Managing Multiple Images",concept:`Just like objects, images can be stored in arrays!

\`\`\`javascript
let images = [];

function preload() {
  images.push(loadImage("img1.png"));
  images.push(loadImage("img2.png"));
  images.push(loadImage("img3.png"));
}
\`\`\`

Then access with images[0], images[1], etc.`,example:"// See full lesson for detailed example",keyPoints:["Store images in arrays with push()","Access by index: images[0], images[1]","Cycle with modulo: index = (index + 1) % length"]},starterCode:"// Starter code here",solutionCode:"// Solution code here",hints:["Use images.push(loadImage(...))"],vocabularyTerms:["image array","gallery"],resources:[]}],exitTicket:"Why must we load images in preload()?"},{day:9,title:"Objects & Images",objective:"Combine images with object classes",exercises:[{id:"oi-w2d9-1",title:"Image Objects",difficulty:"Medium",points:15,description:"Create objects that display images",prompt:"Create a Bug class that accepts an image in its constructor.",explanation:{title:"Image + Objects: The Sprite Pattern",concept:`Pass images to object constructors - load once, use many times!

\`\`\`javascript
// In preload: load once
let bugImg = loadImage("bug.png");

// In setup: pass to many objects
for (let i = 0; i < 10; i++) {
  bugs.push(new Bug(x, y, bugImg));
}

// In class: store and use
class Bug {
  constructor(x, y, img) {
    this.img = img;  // Store reference
  }

  display() {
    image(this.img, this.x, this.y, this.size, this.size);
  }
}
\`\`\``,example:"// See full lesson for detailed example",keyPoints:["Load image once in preload()","Pass to constructor as parameter","Store with this.img = img","Use in display() with image()"]},starterCode:"// Starter code here",solutionCode:"// Solution code here",hints:["Store this.img = img in constructor"],vocabularyTerms:["sprite","image reference"],resources:[]},{id:"oi-w2d9-2",title:"Multiple Sprite Types",difficulty:"Hard",points:15,description:"Create a mini-game with different image objects",prompt:"Create player, coins, and check collection.",explanation:{title:"Game Objects: Putting It All Together",concept:`Combine everything: images + objects + collision + removal!

Different object types, each with their own image:
- Player (keyboard controlled)
- Collectibles (coins, gems)
- Enemies (moving obstacles)

All using the same patterns we've learned!`,example:"// See full lesson for detailed example",keyPoints:["Different classes for different object types","Each class can have different images","Use collision detection for collection","Track score and win/lose conditions"]},starterCode:"// Starter code here",solutionCode:"// Solution code here",hints:["Use keyIsDown() for smooth movement"],vocabularyTerms:["game objects","collection"],resources:[]}],exitTicket:"Explain how to get an image into an object's display() method."},{day:10,title:"Capstone Project",objective:"Integrate all concepts",exercises:[{id:"oi-w2d10-capstone",title:"Interactive Image Gallery or Game",difficulty:"Hard",points:100,description:"Create a complete project using all concepts",prompt:"Build either an Interactive Image Gallery OR a Simple Collection Game with 2+ classes, arrays, images, interaction, and collision.",explanation:{title:"Capstone: Everything Together!",concept:`This project demonstrates mastery of ALL unit concepts:

**Week 1 Skills:**
- Object-Oriented Programming (classes)
- Arrays of Objects
- Mouse Interaction (hover, click)
- Array Removal (splice, backward loops)

**Week 2 Skills:**
- Collision Detection
- Nested Loops (all pairs)
- Image Loading (preload)
- Image Objects (sprites)

**Project Tips:**
1. Plan your classes first
2. Build incrementally
3. Test each feature
4. Polish at the end`,example:"// See full lesson for starter templates",keyPoints:["Plan before coding","Build one feature at a time","Test frequently","Apply all unit concepts"]},starterCode:"// Full starter templates in lesson file",solutionCode:"// Multiple solution examples in lesson file",hints:["Start simple, add features incrementally"],vocabularyTerms:["capstone","integration"],resources:[]}],exitTicket:"What concepts from this unit did you use in your capstone?"}]}};function q0(e){const t=Mn[e];if(!t)return[];const s=[];for(const i of t.days)for(const r of i.exercises)s.push(r);return s}function X0(e){for(const t of Object.keys(Mn)){const s=Mn[t];for(const i of s.days)for(const r of i.exercises)if(r.id===e)return r}return null}const K0=({studentName:e,totalPoints:t,assignments:s,completedChallenges:i,completedScenarios:r,completedExercises:o,completedPseudocode:l=[],completedFlowcharts:c=[],completedDataApisExercises:h=[],completedObjectsImagesExercises:p=[],onSelectCategory:w,onSelectNetworkMonitor:x,onSelectWeek:v,onSelectAPCSP:C,onSelectDataApisWeek:N,onSelectObjectsImagesWeek:I})=>{const R=s.some(_=>_.type==="cyber-range"),m=s.some(_=>_.type==="arrays-loops"),f=s.some(_=>_.type==="ap-csp"),S=s.some(_=>_.type==="data-apis"),D=s.some(_=>_.type==="objects-images"),O=_=>{if(_==="network-monitor")return{completed:r.length,total:Pt.length,percentage:Pt.length>0?r.length/Pt.length*100:0};const H=_n[_]||[],z=H.filter($=>i.includes($.id)).length;return{completed:z,total:H.length,percentage:H.length>0?z/H.length*100:0}},F=_=>{const H=W0(_),z=H.filter($=>o.includes($.id)).length;return{completed:z,total:H.length,percentage:H.length>0?z/H.length*100:0}},b=_=>_==="pseudocode"?{completed:l.length,total:Et.length,percentage:Et.length>0?l.length/Et.length*100:0}:{completed:c.length,total:Jt.length,percentage:Jt.length>0?c.length/Jt.length*100:0},g=_=>{const H=$0(_),z=H.filter($=>h.includes($.id)).length;return{completed:z,total:H.length,percentage:H.length>0?z/H.length*100:0}},T=_=>{const H=q0(_),z=H.filter($=>p.includes($.id)).length;return{completed:z,total:H.length,percentage:H.length>0?z/H.length*100:0}},j=i.length+r.length,P=o.length,E=l.length+c.length,k=h.length,Q=p.length,U=[{id:"cryptography",name:"Cryptography",icon:"[ CRYPTO ]",description:"Encryption, ciphers, and secure communication"},{id:"network",name:"Network Security",icon:"[ NETWORK ]",description:"Network protocols, ports, and traffic analysis"},{id:"password",name:"Password Security",icon:"[ PASSWD ]",description:"Password strength and authentication"},{id:"web",name:"Web Security",icon:"[ WEB ]",description:"Web vulnerabilities and secure coding"},{id:"social",name:"Social Engineering",icon:"[ SOCIAL ]",description:"Manipulation tactics and security awareness"},{id:"network-monitor",name:"Network Monitor",icon:"[ MONITOR ]",description:"Real-time traffic analysis",isScenario:!0}],K=[{id:"pseudocode",name:"Pseudocode",icon:"[ CODE ]",description:"Translate between AP CSP pseudocode and JavaScript"},{id:"flowcharts",name:"Flowcharts",icon:"[ FLOW ]",description:"Read, interpret, and build flowcharts"}],se=R||m||f||S||D;return n.jsxs("div",{className:"unified-dashboard",children:[n.jsxs("div",{className:"welcome-section",children:[n.jsxs("h1",{children:["Welcome, ",e,"!"]}),n.jsx("p",{children:"Complete your assigned work below. Track your progress across both cybersecurity and programming content."})]}),n.jsxs("div",{className:"stats",children:[n.jsxs("div",{className:"stat-card",children:[n.jsx("span",{className:"stat-value",children:t}),n.jsx("span",{className:"stat-label",children:"Total Points"})]}),n.jsxs("div",{className:"stat-card cyber",children:[n.jsx("span",{className:"stat-value",children:j}),n.jsx("span",{className:"stat-label",children:"Cyber Challenges"})]}),n.jsxs("div",{className:"stat-card programming",children:[n.jsx("span",{className:"stat-value",children:P}),n.jsx("span",{className:"stat-label",children:"Programming Exercises"})]}),n.jsxs("div",{className:"stat-card apcsp",children:[n.jsx("span",{className:"stat-value",children:E}),n.jsx("span",{className:"stat-label",children:"AP CSP Exercises"})]}),n.jsxs("div",{className:"stat-card data-apis",children:[n.jsx("span",{className:"stat-value",children:k}),n.jsx("span",{className:"stat-label",children:"Data & APIs"})]}),n.jsxs("div",{className:"stat-card objects-images",children:[n.jsx("span",{className:"stat-value",children:Q}),n.jsx("span",{className:"stat-label",children:"Objects & Images"})]})]}),se?n.jsxs(n.Fragment,{children:[R&&n.jsxs("section",{className:"content-section cyber-section",children:[n.jsxs("h2",{className:"section-title cyber",children:[n.jsx("span",{className:"section-icon",children:re["cyber-range"].icon}),"Cybersecurity Challenges"]}),n.jsx("div",{className:"categories",children:U.map(_=>{const H=O(_.id);return n.jsxs("div",{className:"category-card cyber",onClick:()=>_.isScenario?x():w(_.id),children:[n.jsx("div",{className:"category-icon",children:_.icon}),n.jsx("h3",{children:_.name}),n.jsx("p",{className:"category-description",children:_.description}),n.jsxs("p",{className:"category-progress-text",children:[H.completed," / ",H.total," completed"]}),n.jsx("div",{className:"category-progress",children:n.jsx("div",{className:"category-progress-bar cyber",style:{width:`${H.percentage}%`}})})]},_.id)})})]}),m&&n.jsxs("section",{className:"content-section programming-section",children:[n.jsxs("h2",{className:"section-title programming",children:[n.jsx("span",{className:"section-icon",children:re["arrays-loops"].icon}),"Programming Exercises"]}),n.jsx("div",{className:"categories",children:Object.entries(ar).map(([_,H])=>{const z=F(_),$=_.replace("week","");return n.jsxs("div",{className:"category-card programming",onClick:()=>v(_),children:[n.jsxs("div",{className:"category-icon",children:["[ WEEK ",$," ]"]}),n.jsx("h3",{children:H.title}),n.jsx("p",{className:"category-description",children:H.bigIdea}),n.jsxs("p",{className:"category-progress-text",children:[z.completed," / ",z.total," completed"]}),n.jsx("div",{className:"category-progress",children:n.jsx("div",{className:"category-progress-bar programming",style:{width:`${z.percentage}%`}})})]},_)})})]}),f&&n.jsxs("section",{className:"content-section apcsp-section",children:[n.jsxs("h2",{className:"section-title apcsp",children:[n.jsx("span",{className:"section-icon",children:re["ap-csp"].icon}),"AP CSP Exam Prep"]}),n.jsx("div",{className:"categories",children:K.map(_=>{const H=b(_.id);return n.jsxs("div",{className:"category-card apcsp",onClick:()=>C(_.id),children:[n.jsx("div",{className:"category-icon",children:_.icon}),n.jsx("h3",{children:_.name}),n.jsx("p",{className:"category-description",children:_.description}),n.jsxs("p",{className:"category-progress-text",children:[H.completed," / ",H.total," completed"]}),n.jsx("div",{className:"category-progress",children:n.jsx("div",{className:"category-progress-bar apcsp",style:{width:`${H.percentage}%`}})})]},_.id)})})]}),S&&n.jsxs("section",{className:"content-section data-apis-section",children:[n.jsxs("h2",{className:"section-title data-apis",children:[n.jsx("span",{className:"section-icon",children:re["data-apis"].icon}),"Data & APIs"]}),n.jsx("div",{className:"categories",children:Object.entries(qc).map(([_,H])=>{const z=g(_),$=_.replace("week","");return n.jsxs("div",{className:"category-card data-apis",onClick:()=>N(_),children:[n.jsxs("div",{className:"category-icon",children:["[ WEEK ",$," ]"]}),n.jsx("h3",{children:H.title}),n.jsx("p",{className:"category-description",children:H.bigIdea}),n.jsxs("p",{className:"category-progress-text",children:[z.completed," / ",z.total," completed"]}),n.jsx("div",{className:"category-progress",children:n.jsx("div",{className:"category-progress-bar data-apis",style:{width:`${z.percentage}%`}})})]},_)})})]}),D&&n.jsxs("section",{className:"content-section objects-images-section",children:[n.jsxs("h2",{className:"section-title objects-images",children:[n.jsx("span",{className:"section-icon",children:re["objects-images"].icon}),"Objects & Images"]}),n.jsx("div",{className:"categories",children:Object.entries(Mn).map(([_,H])=>{const z=T(_),$=_.replace("week","");return n.jsxs("div",{className:"category-card objects-images",onClick:()=>I(_),children:[n.jsxs("div",{className:"category-icon",children:["[ WEEK ",$," ]"]}),n.jsx("h3",{children:H.title}),n.jsx("p",{className:"category-description",children:H.bigIdea}),n.jsxs("p",{className:"category-progress-text",children:[z.completed," / ",z.total," completed"]}),n.jsx("div",{className:"category-progress",children:n.jsx("div",{className:"category-progress-bar objects-images",style:{width:`${z.percentage}%`}})})]},_)})})]})]}):n.jsxs("div",{className:"no-assignments",children:[n.jsx("div",{className:"no-assignments-icon",children:"[ WAITING ]"}),n.jsx("h2",{children:"No Assignments Yet"}),n.jsx("p",{children:"Your teacher hasn't assigned any content yet. Check back soon!"})]}),n.jsxs("div",{className:"learning-objectives",children:[n.jsx("h3",{children:"About This Platform"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Complete assigned challenges and exercises at your own pace"}),n.jsx("li",{children:"Earn points by completing each activity"}),n.jsx("li",{children:"Your progress is automatically saved"}),n.jsx("li",{children:"Access vocabulary terms for help with key concepts"})]})]})]})},J0=[{id:"60s",name:"60s Space Age",description:"Atomic era optimism",preview:["#ff6b35","#00b4d8","#ffd93d","#f8f9fa"]},{id:"70s",name:"70s Retro Tech",description:"Earth tones meet chrome",preview:["#d4a373","#e07a5f","#81b29a","#f4a261"]},{id:"80s",name:"80s Neon Grid",description:"Cyberpunk terminal",preview:["#00ffff","#ff00ff","#39ff14","#0a0a0f"]},{id:"90s",name:"90s Y2K Chrome",description:"Millennium tech bubble",preview:["#7b68ee","#00ced1","#c0c0c0","#191970"]}];function Xc({onClose:e}){const[t,s]=A.useState(()=>localStorage.getItem("cyberrange-theme")||"80s");A.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("cyberrange-theme",t)},[t]);const i=r=>{s(r)};return n.jsx("div",{className:"theme-switcher-overlay",onClick:e,children:n.jsxs("div",{className:"theme-switcher-modal",onClick:r=>r.stopPropagation(),children:[n.jsxs("div",{className:"theme-switcher-header",children:[n.jsx("h2",{children:"Choose Your Era"}),n.jsx("p",{children:"Select a retrofuturistic theme"}),n.jsx("button",{className:"close-btn",onClick:e,children:"×"})]}),n.jsx("div",{className:"theme-grid",children:J0.map(r=>n.jsxs("div",{className:`theme-card ${t===r.id?"active":""}`,onClick:()=>i(r.id),children:[n.jsx("div",{className:"theme-preview",children:r.preview.map((o,l)=>n.jsx("div",{className:"preview-color",style:{backgroundColor:o}},l))}),n.jsxs("div",{className:"theme-info",children:[n.jsx("h3",{children:r.name}),n.jsx("p",{children:r.description})]}),t===r.id&&n.jsx("div",{className:"theme-active-badge",children:"ACTIVE"})]},r.id))})]})})}function Kc(){A.useEffect(()=>{const e=localStorage.getItem("cyberrange-theme")||"80s";document.documentElement.setAttribute("data-theme",e)},[])}/**
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
 */const Nm=function(e){const t=[];let s=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[s++]=r:r<2048?(t[s++]=r>>6|192,t[s++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[s++]=r>>18|240,t[s++]=r>>12&63|128,t[s++]=r>>6&63|128,t[s++]=r&63|128):(t[s++]=r>>12|224,t[s++]=r>>6&63|128,t[s++]=r&63|128)}return t},Q0=function(e){const t=[];let s=0,i=0;for(;s<e.length;){const r=e[s++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[s++];t[i++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=e[s++],l=e[s++],c=e[s++],h=((r&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(h>>10)),t[i++]=String.fromCharCode(56320+(h&1023))}else{const o=e[s++],l=e[s++];t[i++]=String.fromCharCode((r&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Z0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const o=e[r],l=r+1<e.length,c=l?e[r+1]:0,h=r+2<e.length,p=h?e[r+2]:0,w=o>>2,x=(o&3)<<4|c>>4;let v=(c&15)<<2|p>>6,C=p&63;h||(C=64,l||(v=64)),i.push(s[w],s[x],s[v],s[C])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Nm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Q0(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const s=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const o=s[e.charAt(r++)],c=r<e.length?s[e.charAt(r)]:0;++r;const p=r<e.length?s[e.charAt(r)]:64;++r;const x=r<e.length?s[e.charAt(r)]:64;if(++r,o==null||c==null||p==null||x==null)throw new ey;const v=o<<2|c>>4;if(i.push(v),p!==64){const C=c<<4&240|p>>2;if(i.push(C),x!==64){const N=p<<6&192|x;i.push(N)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ey extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ty=function(e){const t=Nm(e);return Z0.encodeByteArray(t,!0)},Pm=function(e){return ty(e).replace(/\./g,"")};function sy(){try{return typeof indexedDB=="object"}catch{return!1}}function ny(){return new Promise((e,t)=>{try{let s=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),s||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{s=!1},r.onerror=()=>{var o;t(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(s){t(s)}})}/**
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
 */const iy="FirebaseError";class Un extends Error{constructor(t,s,i){super(s),this.code=t,this.customData=i,this.name=iy,Object.setPrototypeOf(this,Un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Em.prototype.create)}}class Em{constructor(t,s,i){this.service=t,this.serviceName=s,this.errors=i}create(t,...s){const i=s[0]||{},r=`${this.service}/${t}`,o=this.errors[t],l=o?ry(o,i):"Error",c=`${this.serviceName}: ${l} (${r}).`;return new Un(r,c,i)}}function ry(e,t){return e.replace(ay,(s,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const ay=/\{\$([^}]+)}/g;class Pa{constructor(t,s,i){this.name=t,this.instanceFactory=s,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var he;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(he||(he={}));const oy={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},ly=he.INFO,cy={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},dy=(e,t,...s)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=cy[t];if(r)console[r](`[${i}]  ${e.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Am{constructor(t){this.name=t,this._logLevel=ly,this._logHandler=dy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in he))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?oy[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...t),this._logHandler(this,he.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...t),this._logHandler(this,he.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,he.INFO,...t),this._logHandler(this,he.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,he.WARN,...t),this._logHandler(this,he.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...t),this._logHandler(this,he.ERROR,...t)}}const uy=(e,t)=>t.some(s=>e instanceof s);let Wu,Yu;function hy(){return Wu||(Wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function py(){return Yu||(Yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Im=new WeakMap,ql=new WeakMap,Dm=new WeakMap,Vo=new WeakMap,Jc=new WeakMap;function my(e){const t=new Promise((s,i)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",l)},o=()=>{s(Ts(e.result)),r()},l=()=>{i(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",l)});return t.then(s=>{s instanceof IDBCursor&&Im.set(s,e)}).catch(()=>{}),Jc.set(t,e),t}function fy(e){if(ql.has(e))return;const t=new Promise((s,i)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",l),e.removeEventListener("abort",l)},o=()=>{s(),r()},l=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",l),e.addEventListener("abort",l)});ql.set(e,t)}let Xl={get(e,t,s){if(e instanceof IDBTransaction){if(t==="done")return ql.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Dm.get(e);if(t==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return Ts(e[t])},set(e,t,s){return e[t]=s,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gy(e){Xl=e(Xl)}function yy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...s){const i=e.call(Go(this),t,...s);return Dm.set(i,t.sort?t.sort():[t]),Ts(i)}:py().includes(e)?function(...t){return e.apply(Go(this),t),Ts(Im.get(this))}:function(...t){return Ts(e.apply(Go(this),t))}}function xy(e){return typeof e=="function"?yy(e):(e instanceof IDBTransaction&&fy(e),uy(e,hy())?new Proxy(e,Xl):e)}function Ts(e){if(e instanceof IDBRequest)return my(e);if(Vo.has(e))return Vo.get(e);const t=xy(e);return t!==e&&(Vo.set(e,t),Jc.set(t,e)),t}const Go=e=>Jc.get(e);function vy(e,t,{blocked:s,upgrade:i,blocking:r,terminated:o}={}){const l=indexedDB.open(e,t),c=Ts(l);return i&&l.addEventListener("upgradeneeded",h=>{i(Ts(l.result),h.oldVersion,h.newVersion,Ts(l.transaction),h)}),s&&l.addEventListener("blocked",h=>s(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",p=>r(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const wy=["get","getKey","getAll","getAllKeys","count"],by=["put","add","delete","clear"],$o=new Map;function Vu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if($o.get(t))return $o.get(t);const s=t.replace(/FromIndex$/,""),i=t!==s,r=by.includes(s);if(!(s in(i?IDBIndex:IDBObjectStore).prototype)||!(r||wy.includes(s)))return;const o=async function(l,...c){const h=this.transaction(l,r?"readwrite":"readonly");let p=h.store;return i&&(p=p.index(c.shift())),(await Promise.all([p[s](...c),r&&h.done]))[0]};return $o.set(t,o),o}gy(e=>({...e,get:(t,s,i)=>Vu(t,s)||e.get(t,s,i),has:(t,s)=>!!Vu(t,s)||e.has(t,s)}));/**
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
 */class ky{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(jy(s)){const i=s.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(s=>s).join(" ")}}function jy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Kl="@firebase/app",Gu="0.10.13";/**
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
 */const rs=new Am("@firebase/app"),Sy="@firebase/app-compat",Cy="@firebase/analytics-compat",Ty="@firebase/analytics",Ny="@firebase/app-check-compat",Py="@firebase/app-check",Ey="@firebase/auth",Ay="@firebase/auth-compat",Iy="@firebase/database",Dy="@firebase/data-connect",Ry="@firebase/database-compat",Ly="@firebase/functions",Oy="@firebase/functions-compat",_y="@firebase/installations",My="@firebase/installations-compat",Fy="@firebase/messaging",zy="@firebase/messaging-compat",Hy="@firebase/performance",Uy="@firebase/performance-compat",By="@firebase/remote-config",Wy="@firebase/remote-config-compat",Yy="@firebase/storage",Vy="@firebase/storage-compat",Gy="@firebase/firestore",$y="@firebase/vertexai-preview",qy="@firebase/firestore-compat",Xy="firebase",Ky="10.14.1",Jy={[Kl]:"fire-core",[Sy]:"fire-core-compat",[Ty]:"fire-analytics",[Cy]:"fire-analytics-compat",[Py]:"fire-app-check",[Ny]:"fire-app-check-compat",[Ey]:"fire-auth",[Ay]:"fire-auth-compat",[Iy]:"fire-rtdb",[Dy]:"fire-data-connect",[Ry]:"fire-rtdb-compat",[Ly]:"fire-fn",[Oy]:"fire-fn-compat",[_y]:"fire-iid",[My]:"fire-iid-compat",[Fy]:"fire-fcm",[zy]:"fire-fcm-compat",[Hy]:"fire-perf",[Uy]:"fire-perf-compat",[By]:"fire-rc",[Wy]:"fire-rc-compat",[Yy]:"fire-gcs",[Vy]:"fire-gcs-compat",[Gy]:"fire-fst",[qy]:"fire-fst-compat",[$y]:"fire-vertex","fire-js":"fire-js",[Xy]:"fire-js-all"};/**
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
 */const Qy=new Map,Zy=new Map,$u=new Map;function qu(e,t){try{e.container.addComponent(t)}catch(s){rs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,s)}}function Ea(e){const t=e.name;if($u.has(t))return rs.debug(`There were multiple attempts to register component ${t}.`),!1;$u.set(t,e);for(const s of Qy.values())qu(s,e);for(const s of Zy.values())qu(s,e);return!0}/**
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
 */const ex={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qc=new Em("app","Firebase",ex);/**
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
 */const tx=Ky;function Pn(e,t,s){var i;let r=(i=Jy[e])!==null&&i!==void 0?i:e;s&&(r+=`-${s}`);const o=r.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${r}" with version "${t}":`];o&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rs.warn(c.join(" "));return}Ea(new Pa(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const sx="firebase-heartbeat-database",nx=1,er="firebase-heartbeat-store";let qo=null;function Rm(){return qo||(qo=vy(sx,nx,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(er)}catch(s){console.warn(s)}}}}).catch(e=>{throw Qc.create("idb-open",{originalErrorMessage:e.message})})),qo}async function ix(e){try{const s=(await Rm()).transaction(er),i=await s.objectStore(er).get(Lm(e));return await s.done,i}catch(t){if(t instanceof Un)rs.warn(t.message);else{const s=Qc.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});rs.warn(s.message)}}}async function Xu(e,t){try{const i=(await Rm()).transaction(er,"readwrite");await i.objectStore(er).put(t,Lm(e)),await i.done}catch(s){if(s instanceof Un)rs.warn(s.message);else{const i=Qc.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});rs.warn(i.message)}}}function Lm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const rx=1024,ax=30*24*60*60*1e3;class ox{constructor(t){this.container=t,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new cx(s),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,s;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ku();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=ax}),this._storage.overwrite(this._heartbeatsCache))}catch(i){rs.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=Ku(),{heartbeatsToSend:i,unsentEntries:r}=lx(this._heartbeatsCache.heartbeats),o=Pm(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=s,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(s){return rs.warn(s),""}}}function Ku(){return new Date().toISOString().substring(0,10)}function lx(e,t=rx){const s=[];let i=e.slice();for(const r of e){const o=s.find(l=>l.agent===r.agent);if(o){if(o.dates.push(r.date),Ju(s)>t){o.dates.pop();break}}else if(s.push({agent:r.agent,dates:[r.date]}),Ju(s)>t){s.pop();break}i=i.slice(1)}return{heartbeatsToSend:s,unsentEntries:i}}class cx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sy()?ny().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await ix(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var s;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xu(this.app,{lastSentHeartbeatDate:(s=t.lastSentHeartbeatDate)!==null&&s!==void 0?s:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var s;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xu(this.app,{lastSentHeartbeatDate:(s=t.lastSentHeartbeatDate)!==null&&s!==void 0?s:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ju(e){return Pm(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function dx(e){Ea(new Pa("platform-logger",t=>new ky(t),"PRIVATE")),Ea(new Pa("heartbeat",t=>new ox(t),"PRIVATE")),Pn(Kl,Gu,e),Pn(Kl,Gu,"esm2017"),Pn("fire-js","")}dx("");var ux="firebase",hx="10.14.1";/**
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
 */Pn(ux,hx,"app");var Qu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Om;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(b,g){function T(){}T.prototype=g.prototype,b.D=g.prototype,b.prototype=new T,b.prototype.constructor=b,b.C=function(j,P,E){for(var k=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)k[Q-2]=arguments[Q];return g.prototype[P].apply(j,k)}}function s(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,s),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,g,T){T||(T=0);var j=Array(16);if(typeof g=="string")for(var P=0;16>P;++P)j[P]=g.charCodeAt(T++)|g.charCodeAt(T++)<<8|g.charCodeAt(T++)<<16|g.charCodeAt(T++)<<24;else for(P=0;16>P;++P)j[P]=g[T++]|g[T++]<<8|g[T++]<<16|g[T++]<<24;g=b.g[0],T=b.g[1],P=b.g[2];var E=b.g[3],k=g+(E^T&(P^E))+j[0]+3614090360&4294967295;g=T+(k<<7&4294967295|k>>>25),k=E+(P^g&(T^P))+j[1]+3905402710&4294967295,E=g+(k<<12&4294967295|k>>>20),k=P+(T^E&(g^T))+j[2]+606105819&4294967295,P=E+(k<<17&4294967295|k>>>15),k=T+(g^P&(E^g))+j[3]+3250441966&4294967295,T=P+(k<<22&4294967295|k>>>10),k=g+(E^T&(P^E))+j[4]+4118548399&4294967295,g=T+(k<<7&4294967295|k>>>25),k=E+(P^g&(T^P))+j[5]+1200080426&4294967295,E=g+(k<<12&4294967295|k>>>20),k=P+(T^E&(g^T))+j[6]+2821735955&4294967295,P=E+(k<<17&4294967295|k>>>15),k=T+(g^P&(E^g))+j[7]+4249261313&4294967295,T=P+(k<<22&4294967295|k>>>10),k=g+(E^T&(P^E))+j[8]+1770035416&4294967295,g=T+(k<<7&4294967295|k>>>25),k=E+(P^g&(T^P))+j[9]+2336552879&4294967295,E=g+(k<<12&4294967295|k>>>20),k=P+(T^E&(g^T))+j[10]+4294925233&4294967295,P=E+(k<<17&4294967295|k>>>15),k=T+(g^P&(E^g))+j[11]+2304563134&4294967295,T=P+(k<<22&4294967295|k>>>10),k=g+(E^T&(P^E))+j[12]+1804603682&4294967295,g=T+(k<<7&4294967295|k>>>25),k=E+(P^g&(T^P))+j[13]+4254626195&4294967295,E=g+(k<<12&4294967295|k>>>20),k=P+(T^E&(g^T))+j[14]+2792965006&4294967295,P=E+(k<<17&4294967295|k>>>15),k=T+(g^P&(E^g))+j[15]+1236535329&4294967295,T=P+(k<<22&4294967295|k>>>10),k=g+(P^E&(T^P))+j[1]+4129170786&4294967295,g=T+(k<<5&4294967295|k>>>27),k=E+(T^P&(g^T))+j[6]+3225465664&4294967295,E=g+(k<<9&4294967295|k>>>23),k=P+(g^T&(E^g))+j[11]+643717713&4294967295,P=E+(k<<14&4294967295|k>>>18),k=T+(E^g&(P^E))+j[0]+3921069994&4294967295,T=P+(k<<20&4294967295|k>>>12),k=g+(P^E&(T^P))+j[5]+3593408605&4294967295,g=T+(k<<5&4294967295|k>>>27),k=E+(T^P&(g^T))+j[10]+38016083&4294967295,E=g+(k<<9&4294967295|k>>>23),k=P+(g^T&(E^g))+j[15]+3634488961&4294967295,P=E+(k<<14&4294967295|k>>>18),k=T+(E^g&(P^E))+j[4]+3889429448&4294967295,T=P+(k<<20&4294967295|k>>>12),k=g+(P^E&(T^P))+j[9]+568446438&4294967295,g=T+(k<<5&4294967295|k>>>27),k=E+(T^P&(g^T))+j[14]+3275163606&4294967295,E=g+(k<<9&4294967295|k>>>23),k=P+(g^T&(E^g))+j[3]+4107603335&4294967295,P=E+(k<<14&4294967295|k>>>18),k=T+(E^g&(P^E))+j[8]+1163531501&4294967295,T=P+(k<<20&4294967295|k>>>12),k=g+(P^E&(T^P))+j[13]+2850285829&4294967295,g=T+(k<<5&4294967295|k>>>27),k=E+(T^P&(g^T))+j[2]+4243563512&4294967295,E=g+(k<<9&4294967295|k>>>23),k=P+(g^T&(E^g))+j[7]+1735328473&4294967295,P=E+(k<<14&4294967295|k>>>18),k=T+(E^g&(P^E))+j[12]+2368359562&4294967295,T=P+(k<<20&4294967295|k>>>12),k=g+(T^P^E)+j[5]+4294588738&4294967295,g=T+(k<<4&4294967295|k>>>28),k=E+(g^T^P)+j[8]+2272392833&4294967295,E=g+(k<<11&4294967295|k>>>21),k=P+(E^g^T)+j[11]+1839030562&4294967295,P=E+(k<<16&4294967295|k>>>16),k=T+(P^E^g)+j[14]+4259657740&4294967295,T=P+(k<<23&4294967295|k>>>9),k=g+(T^P^E)+j[1]+2763975236&4294967295,g=T+(k<<4&4294967295|k>>>28),k=E+(g^T^P)+j[4]+1272893353&4294967295,E=g+(k<<11&4294967295|k>>>21),k=P+(E^g^T)+j[7]+4139469664&4294967295,P=E+(k<<16&4294967295|k>>>16),k=T+(P^E^g)+j[10]+3200236656&4294967295,T=P+(k<<23&4294967295|k>>>9),k=g+(T^P^E)+j[13]+681279174&4294967295,g=T+(k<<4&4294967295|k>>>28),k=E+(g^T^P)+j[0]+3936430074&4294967295,E=g+(k<<11&4294967295|k>>>21),k=P+(E^g^T)+j[3]+3572445317&4294967295,P=E+(k<<16&4294967295|k>>>16),k=T+(P^E^g)+j[6]+76029189&4294967295,T=P+(k<<23&4294967295|k>>>9),k=g+(T^P^E)+j[9]+3654602809&4294967295,g=T+(k<<4&4294967295|k>>>28),k=E+(g^T^P)+j[12]+3873151461&4294967295,E=g+(k<<11&4294967295|k>>>21),k=P+(E^g^T)+j[15]+530742520&4294967295,P=E+(k<<16&4294967295|k>>>16),k=T+(P^E^g)+j[2]+3299628645&4294967295,T=P+(k<<23&4294967295|k>>>9),k=g+(P^(T|~E))+j[0]+4096336452&4294967295,g=T+(k<<6&4294967295|k>>>26),k=E+(T^(g|~P))+j[7]+1126891415&4294967295,E=g+(k<<10&4294967295|k>>>22),k=P+(g^(E|~T))+j[14]+2878612391&4294967295,P=E+(k<<15&4294967295|k>>>17),k=T+(E^(P|~g))+j[5]+4237533241&4294967295,T=P+(k<<21&4294967295|k>>>11),k=g+(P^(T|~E))+j[12]+1700485571&4294967295,g=T+(k<<6&4294967295|k>>>26),k=E+(T^(g|~P))+j[3]+2399980690&4294967295,E=g+(k<<10&4294967295|k>>>22),k=P+(g^(E|~T))+j[10]+4293915773&4294967295,P=E+(k<<15&4294967295|k>>>17),k=T+(E^(P|~g))+j[1]+2240044497&4294967295,T=P+(k<<21&4294967295|k>>>11),k=g+(P^(T|~E))+j[8]+1873313359&4294967295,g=T+(k<<6&4294967295|k>>>26),k=E+(T^(g|~P))+j[15]+4264355552&4294967295,E=g+(k<<10&4294967295|k>>>22),k=P+(g^(E|~T))+j[6]+2734768916&4294967295,P=E+(k<<15&4294967295|k>>>17),k=T+(E^(P|~g))+j[13]+1309151649&4294967295,T=P+(k<<21&4294967295|k>>>11),k=g+(P^(T|~E))+j[4]+4149444226&4294967295,g=T+(k<<6&4294967295|k>>>26),k=E+(T^(g|~P))+j[11]+3174756917&4294967295,E=g+(k<<10&4294967295|k>>>22),k=P+(g^(E|~T))+j[2]+718787259&4294967295,P=E+(k<<15&4294967295|k>>>17),k=T+(E^(P|~g))+j[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(P+(k<<21&4294967295|k>>>11))&4294967295,b.g[2]=b.g[2]+P&4294967295,b.g[3]=b.g[3]+E&4294967295}i.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var T=g-this.blockSize,j=this.B,P=this.h,E=0;E<g;){if(P==0)for(;E<=T;)r(this,b,E),E+=this.blockSize;if(typeof b=="string"){for(;E<g;)if(j[P++]=b.charCodeAt(E++),P==this.blockSize){r(this,j),P=0;break}}else for(;E<g;)if(j[P++]=b[E++],P==this.blockSize){r(this,j),P=0;break}}this.h=P,this.o+=g},i.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var T=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=T&255,T/=256;for(this.u(b),b=Array(16),g=T=0;4>g;++g)for(var j=0;32>j;j+=8)b[T++]=this.g[g]>>>j&255;return b};function o(b,g){var T=c;return Object.prototype.hasOwnProperty.call(T,b)?T[b]:T[b]=g(b)}function l(b,g){this.h=g;for(var T=[],j=!0,P=b.length-1;0<=P;P--){var E=b[P]|0;j&&E==g||(T[P]=E,j=!1)}this.g=T}var c={};function h(b){return-128<=b&&128>b?o(b,function(g){return new l([g|0],0>g?-1:0)}):new l([b|0],0>b?-1:0)}function p(b){if(isNaN(b)||!isFinite(b))return x;if(0>b)return R(p(-b));for(var g=[],T=1,j=0;b>=T;j++)g[j]=b/T|0,T*=4294967296;return new l(g,0)}function w(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return R(w(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=p(Math.pow(g,8)),j=x,P=0;P<b.length;P+=8){var E=Math.min(8,b.length-P),k=parseInt(b.substring(P,P+E),g);8>E?(E=p(Math.pow(g,E)),j=j.j(E).add(p(k))):(j=j.j(T),j=j.add(p(k)))}return j}var x=h(0),v=h(1),C=h(16777216);e=l.prototype,e.m=function(){if(I(this))return-R(this).m();for(var b=0,g=1,T=0;T<this.g.length;T++){var j=this.i(T);b+=(0<=j?j:4294967296+j)*g,g*=4294967296}return b},e.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(I(this))return"-"+R(this).toString(b);for(var g=p(Math.pow(b,6)),T=this,j="";;){var P=D(T,g).g;T=m(T,P.j(g));var E=((0<T.g.length?T.g[0]:T.h)>>>0).toString(b);if(T=P,N(T))return E+j;for(;6>E.length;)E="0"+E;j=E+j}},e.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function I(b){return b.h==-1}e.l=function(b){return b=m(this,b),I(b)?-1:N(b)?0:1};function R(b){for(var g=b.g.length,T=[],j=0;j<g;j++)T[j]=~b.g[j];return new l(T,~b.h).add(v)}e.abs=function(){return I(this)?R(this):this},e.add=function(b){for(var g=Math.max(this.g.length,b.g.length),T=[],j=0,P=0;P<=g;P++){var E=j+(this.i(P)&65535)+(b.i(P)&65535),k=(E>>>16)+(this.i(P)>>>16)+(b.i(P)>>>16);j=k>>>16,E&=65535,k&=65535,T[P]=k<<16|E}return new l(T,T[T.length-1]&-2147483648?-1:0)};function m(b,g){return b.add(R(g))}e.j=function(b){if(N(this)||N(b))return x;if(I(this))return I(b)?R(this).j(R(b)):R(R(this).j(b));if(I(b))return R(this.j(R(b)));if(0>this.l(C)&&0>b.l(C))return p(this.m()*b.m());for(var g=this.g.length+b.g.length,T=[],j=0;j<2*g;j++)T[j]=0;for(j=0;j<this.g.length;j++)for(var P=0;P<b.g.length;P++){var E=this.i(j)>>>16,k=this.i(j)&65535,Q=b.i(P)>>>16,U=b.i(P)&65535;T[2*j+2*P]+=k*U,f(T,2*j+2*P),T[2*j+2*P+1]+=E*U,f(T,2*j+2*P+1),T[2*j+2*P+1]+=k*Q,f(T,2*j+2*P+1),T[2*j+2*P+2]+=E*Q,f(T,2*j+2*P+2)}for(j=0;j<g;j++)T[j]=T[2*j+1]<<16|T[2*j];for(j=g;j<2*g;j++)T[j]=0;return new l(T,0)};function f(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function S(b,g){this.g=b,this.h=g}function D(b,g){if(N(g))throw Error("division by zero");if(N(b))return new S(x,x);if(I(b))return g=D(R(b),g),new S(R(g.g),R(g.h));if(I(g))return g=D(b,R(g)),new S(R(g.g),g.h);if(30<b.g.length){if(I(b)||I(g))throw Error("slowDivide_ only works with positive integers.");for(var T=v,j=g;0>=j.l(b);)T=O(T),j=O(j);var P=F(T,1),E=F(j,1);for(j=F(j,2),T=F(T,2);!N(j);){var k=E.add(j);0>=k.l(b)&&(P=P.add(T),E=k),j=F(j,1),T=F(T,1)}return g=m(b,P.j(g)),new S(P,g)}for(P=x;0<=b.l(g);){for(T=Math.max(1,Math.floor(b.m()/g.m())),j=Math.ceil(Math.log(T)/Math.LN2),j=48>=j?1:Math.pow(2,j-48),E=p(T),k=E.j(g);I(k)||0<k.l(b);)T-=j,E=p(T),k=E.j(g);N(E)&&(E=v),P=P.add(E),b=m(b,k)}return new S(P,b)}e.A=function(b){return D(this,b).h},e.and=function(b){for(var g=Math.max(this.g.length,b.g.length),T=[],j=0;j<g;j++)T[j]=this.i(j)&b.i(j);return new l(T,this.h&b.h)},e.or=function(b){for(var g=Math.max(this.g.length,b.g.length),T=[],j=0;j<g;j++)T[j]=this.i(j)|b.i(j);return new l(T,this.h|b.h)},e.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),T=[],j=0;j<g;j++)T[j]=this.i(j)^b.i(j);return new l(T,this.h^b.h)};function O(b){for(var g=b.g.length+1,T=[],j=0;j<g;j++)T[j]=b.i(j)<<1|b.i(j-1)>>>31;return new l(T,b.h)}function F(b,g){var T=g>>5;g%=32;for(var j=b.g.length-T,P=[],E=0;E<j;E++)P[E]=0<g?b.i(E+T)>>>g|b.i(E+T+1)<<32-g:b.i(E+T);return new l(P,b.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=w,Om=l}).apply(typeof Qu<"u"?Qu:typeof self<"u"?self:typeof window<"u"?window:{});var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,u){return a==Array.prototype||a==Object.prototype||(a[d]=u.value),a};function s(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vr=="object"&&Vr];for(var d=0;d<a.length;++d){var u=a[d];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=s(this);function r(a,d){if(d)e:{var u=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var L=a[y];if(!(L in u))break e;u=u[L]}a=a[a.length-1],y=u[a],d=d(y),d!=y&&d!=null&&t(u,a,{configurable:!0,writable:!0,value:d})}}function o(a,d){a instanceof String&&(a+="");var u=0,y=!1,L={next:function(){if(!y&&u<a.length){var M=u++;return{value:d(M,a[M]),done:!1}}return y=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}r("Array.prototype.values",function(a){return a||function(){return o(this,function(d,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function h(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function p(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function w(a,d,u){return a.call.apply(a.bind,arguments)}function x(a,d,u){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,y),a.apply(d,L)}}return function(){return a.apply(d,arguments)}}function v(a,d,u){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:x,v.apply(null,arguments)}function C(a,d){var u=Array.prototype.slice.call(arguments,1);return function(){var y=u.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function N(a,d){function u(){}u.prototype=d.prototype,a.aa=d.prototype,a.prototype=new u,a.prototype.constructor=a,a.Qb=function(y,L,M){for(var G=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)G[ue-2]=arguments[ue];return d.prototype[L].apply(y,G)}}function I(a){const d=a.length;if(0<d){const u=Array(d);for(let y=0;y<d;y++)u[y]=a[y];return u}return[]}function R(a,d){for(let u=1;u<arguments.length;u++){const y=arguments[u];if(h(y)){const L=a.length||0,M=y.length||0;a.length=L+M;for(let G=0;G<M;G++)a[L+G]=y[G]}else a.push(y)}}class m{constructor(d,u){this.i=d,this.j=u,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function f(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var O=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(a,d,u){for(const y in a)d.call(u,a[y],y,a)}function b(a,d){for(const u in a)d.call(void 0,a[u],u,a)}function g(a){const d={};for(const u in a)d[u]=a[u];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(a,d){let u,y;for(let L=1;L<arguments.length;L++){y=arguments[L];for(u in y)a[u]=y[u];for(let M=0;M<T.length;M++)u=T[M],Object.prototype.hasOwnProperty.call(y,u)&&(a[u]=y[u])}}function P(a){var d=1;a=a.split(":");const u=[];for(;0<d&&a.length;)u.push(a.shift()),d--;return a.length&&u.push(a.join(":")),u}function E(a){c.setTimeout(()=>{throw a},0)}function k(){var a=H;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class Q{constructor(){this.h=this.g=null}add(d,u){const y=U.get();y.set(d,u),this.h?this.h.next=y:this.g=y,this.h=y}}var U=new m(()=>new K,a=>a.reset());class K{constructor(){this.next=this.g=this.h=null}set(d,u){this.h=d,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let se,_=!1,H=new Q,z=()=>{const a=c.Promise.resolve(void 0);se=()=>{a.then($)}};var $=()=>{for(var a;a=k();){try{a.h.call(a.g)}catch(u){E(u)}var d=U;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}_=!1};function Z(){this.s=this.s,this.C=this.C}Z.prototype.s=!1,Z.prototype.ma=function(){this.s||(this.s=!0,this.N())},Z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function W(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}W.prototype.h=function(){this.defaultPrevented=!0};var J=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const u=()=>{};c.addEventListener("test",u,d),c.removeEventListener("test",u,d)}catch{}return a}();function ee(a,d){if(W.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var u=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(O){e:{try{D(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else u=="mouseover"?d=a.fromElement:u=="mouseout"&&(d=a.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Y[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ee.aa.h.call(this)}}N(ee,W);var Y={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var q="closure_listenable_"+(1e6*Math.random()|0),ie=0;function ve(a,d,u,y,L){this.listener=a,this.proxy=null,this.src=d,this.type=u,this.capture=!!y,this.ha=L,this.key=++ie,this.da=this.fa=!1}function we(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ye(a){this.src=a,this.g={},this.h=0}ye.prototype.add=function(a,d,u,y,L){var M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);var G=Qe(a,d,y,L);return-1<G?(d=a[G],u||(d.fa=!1)):(d=new ve(d,this.src,M,!!y,L),d.fa=u,a.push(d)),d};function Je(a,d){var u=d.type;if(u in a.g){var y=a.g[u],L=Array.prototype.indexOf.call(y,d,void 0),M;(M=0<=L)&&Array.prototype.splice.call(y,L,1),M&&(we(d),a.g[u].length==0&&(delete a.g[u],a.h--))}}function Qe(a,d,u,y){for(var L=0;L<a.length;++L){var M=a[L];if(!M.da&&M.listener==d&&M.capture==!!u&&M.ha==y)return L}return-1}var it="closure_lm_"+(1e6*Math.random()|0),Lt={};function Ot(a,d,u,y,L){if(Array.isArray(d)){for(var M=0;M<d.length;M++)Ot(a,d[M],u,y,L);return null}return u=lr(u),a&&a[q]?a.K(d,u,p(y)?!!y.capture:!1,L):Vn(a,d,u,!1,y,L)}function Vn(a,d,u,y,L,M){if(!d)throw Error("Invalid event type");var G=p(L)?!!L.capture:!!L,ue=Kn(a);if(ue||(a[it]=ue=new ye(a)),u=ue.add(d,u,y,G,M),u.proxy)return u;if(y=Gn(),u.proxy=y,y.src=a,y.listener=u,a.addEventListener)J||(L=G),L===void 0&&(L=!1),a.addEventListener(d.toString(),y,L);else if(a.attachEvent)a.attachEvent(Xn(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Gn(){function a(u){return d.call(a.src,a.listener,u)}const d=Qa;return a}function $n(a,d,u,y,L){if(Array.isArray(d))for(var M=0;M<d.length;M++)$n(a,d[M],u,y,L);else y=p(y)?!!y.capture:!!y,u=lr(u),a&&a[q]?(a=a.i,d=String(d).toString(),d in a.g&&(M=a.g[d],u=Qe(M,u,y,L),-1<u&&(we(M[u]),Array.prototype.splice.call(M,u,1),M.length==0&&(delete a.g[d],a.h--)))):a&&(a=Kn(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Qe(d,u,y,L)),(u=-1<a?d[a]:null)&&qn(u))}function qn(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[q])Je(d.i,a);else{var u=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(u,y,a.capture):d.detachEvent?d.detachEvent(Xn(u),y):d.addListener&&d.removeListener&&d.removeListener(y),(u=Kn(d))?(Je(u,a),u.h==0&&(u.src=null,d[it]=null)):we(a)}}}function Xn(a){return a in Lt?Lt[a]:Lt[a]="on"+a}function Qa(a,d){if(a.da)a=!0;else{d=new ee(d,this);var u=a.listener,y=a.ha||a.src;a.fa&&qn(a),a=u.call(y,d)}return a}function Kn(a){return a=a[it],a instanceof ye?a:null}var Jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function lr(a){return typeof a=="function"?a:(a[Jn]||(a[Jn]=function(d){return a.handleEvent(d)}),a[Jn])}function Ae(){Z.call(this),this.i=new ye(this),this.M=this,this.F=null}N(Ae,Z),Ae.prototype[q]=!0,Ae.prototype.removeEventListener=function(a,d,u,y){$n(this,a,d,u,y)};function Le(a,d){var u,y=a.F;if(y)for(u=[];y;y=y.F)u.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new W(d,a);else if(d instanceof W)d.target=d.target||a;else{var L=d;d=new W(y,a),j(d,L)}if(L=!0,u)for(var M=u.length-1;0<=M;M--){var G=d.g=u[M];L=en(G,y,!0,d)&&L}if(G=d.g=a,L=en(G,y,!0,d)&&L,L=en(G,y,!1,d)&&L,u)for(M=0;M<u.length;M++)G=d.g=u[M],L=en(G,y,!1,d)&&L}Ae.prototype.N=function(){if(Ae.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var u=a.g[d],y=0;y<u.length;y++)we(u[y]);delete a.g[d],a.h--}}this.F=null},Ae.prototype.K=function(a,d,u,y){return this.i.add(String(a),d,!1,u,y)},Ae.prototype.L=function(a,d,u,y){return this.i.add(String(a),d,!0,u,y)};function en(a,d,u,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,M=0;M<d.length;++M){var G=d[M];if(G&&!G.da&&G.capture==u){var ue=G.listener,_e=G.ha||G.src;G.fa&&Je(a.i,G),L=ue.call(_e,y)!==!1&&L}}return L&&!y.defaultPrevented}function cr(a,d,u){if(typeof a=="function")u&&(a=v(a,u));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function dr(a){a.g=cr(()=>{a.g=null,a.i&&(a.i=!1,dr(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Za extends Z{constructor(d,u){super(),this.m=d,this.l=u,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:dr(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(a){Z.call(this),this.h=a,this.g={}}N(_t,Z);var ur=[];function hr(a){F(a.g,function(d,u){this.g.hasOwnProperty(u)&&qn(d)},a),a.g={}}_t.prototype.N=function(){_t.aa.N.call(this),hr(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qn=c.JSON.stringify,eo=c.JSON.parse,to=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Zn(){}Zn.prototype.h=null;function pr(a){return a.h||(a.h=a.i())}function so(){}var Ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ei(){W.call(this,"d")}N(ei,W);function Rs(){W.call(this,"c")}N(Rs,W);var os={},ti=null;function si(){return ti=ti||new Ae}os.La="serverreachability";function Wt(a){W.call(this,os.La,a)}N(Wt,W);function Yt(a){const d=si();Le(d,new Wt(d))}os.STAT_EVENT="statevent";function mr(a,d){W.call(this,os.STAT_EVENT,a),this.stat=d}N(mr,W);function Oe(a){const d=si();Le(d,new mr(d,a))}os.Ma="timingevent";function fr(a,d){W.call(this,os.Ma,a),this.size=d}N(fr,W);function Ls(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function Os(){this.g=!0}Os.prototype.xa=function(){this.g=!1};function no(a,d,u,y,L,M){a.info(function(){if(a.g)if(M)for(var G="",ue=M.split("&"),_e=0;_e<ue.length;_e++){var le=ue[_e].split("=");if(1<le.length){var He=le[0];le=le[1];var Ue=He.split("_");G=2<=Ue.length&&Ue[1]=="type"?G+(He+"="+le+"&"):G+(He+"=redacted&")}}else G=null;else G=M;return"XMLHTTP REQ ("+y+") [attempt "+L+"]: "+d+`
`+u+`
`+G})}function io(a,d,u,y,L,M,G){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+L+"]: "+d+`
`+u+`
`+M+" "+G})}function ls(a,d,u,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+ao(a,u)+(y?" "+y:"")})}function ro(a,d){a.info(function(){return"TIMEOUT: "+d})}Os.prototype.info=function(){};function ao(a,d){if(!a.g)return d;if(!d)return null;try{var u=JSON.parse(d);if(u){for(a=0;a<u.length;a++)if(Array.isArray(u[a])){var y=u[a];if(!(2>y.length)){var L=y[1];if(Array.isArray(L)&&!(1>L.length)){var M=L[0];if(M!="noop"&&M!="stop"&&M!="close")for(var G=1;G<L.length;G++)L[G]=""}}}}return Qn(u)}catch{return d}}var ni={NO_ERROR:0,TIMEOUT:8},oo={},ii;function tn(){}N(tn,Zn),tn.prototype.g=function(){return new XMLHttpRequest},tn.prototype.i=function(){return{}},ii=new tn;function V(a,d,u,y){this.j=a,this.i=d,this.l=u,this.R=y||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new te}function te(){this.i=null,this.g="",this.h=!1}var Ie={},_s={};function ri(a,d,u){a.L=1,a.v=wr(Vt(d)),a.m=u,a.P=!0,gr(a,null)}function gr(a,d){a.F=Date.now(),sn(a),a.A=Vt(a.v);var u=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),hd(u.i,"t",y),a.C=0,u=a.j.J,a.h=new te,a.g=Ad(a.j,u?d:null,!a.m),0<a.O&&(a.M=new Za(v(a.Y,a,a.g),a.O)),d=a.U,u=a.g,y=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(ur[0]=L.toString()),L=ur);for(var M=0;M<L.length;M++){var G=Ot(u,L[M],y||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Yt(),no(a.i,a.u,a.A,a.l,a.R,a.m)}V.prototype.ca=function(a){a=a.target;const d=this.M;d&&Gt(a)==3?d.j():this.Y(a)},V.prototype.Y=function(a){try{if(a==this.g)e:{const Ue=Gt(this.g);var d=this.g.Ba();const an=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||vd(this.g)))){this.J||Ue!=4||d==7||(d==8||0>=an?Yt(3):Yt(2)),co(this);var u=this.g.Z();this.X=u;t:if(yr(this)){var y=vd(this.g);a="";var L=y.length,M=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ms(this),ai(this);var G="";break t}this.h.i=new c.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,a+=this.h.i.decode(y[d],{stream:!(M&&d==L-1)});y.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=u==200,io(this.i,this.u,this.A,this.l,this.R,Ue,u),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,_e=this.g;if((ue=_e.g?_e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(ue)){var le=ue;break t}}le=null}if(u=le)ls(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uo(this,u);else{this.o=!1,this.s=3,Oe(12),Ms(this),ai(this);break e}}if(this.P){u=!0;let wt;for(;!this.J&&this.C<G.length;)if(wt=lo(this,G),wt==_s){Ue==4&&(this.s=4,Oe(14),u=!1),ls(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Ie){this.s=4,Oe(15),ls(this.i,this.l,G,"[Invalid Chunk]"),u=!1;break}else ls(this.i,this.l,wt,null),uo(this,wt);if(yr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||G.length!=0||this.h.h||(this.s=1,Oe(16),u=!1),this.o=this.o&&u,!u)ls(this.i,this.l,G,"[Invalid Chunked Response]"),Ms(this),ai(this);else if(0<G.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),yo(He),He.M=!0,Oe(11))}}else ls(this.i,this.l,G,null),uo(this,G);Ue==4&&Ms(this),this.o&&!this.J&&(Ue==4?Td(this.j,this):(this.o=!1,sn(this)))}else af(this.g),u==400&&0<G.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),Ms(this),ai(this)}}}catch{}finally{}};function yr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function lo(a,d){var u=a.C,y=d.indexOf(`
`,u);return y==-1?_s:(u=Number(d.substring(u,y)),isNaN(u)?Ie:(y+=1,y+u>d.length?_s:(d=d.slice(y,y+u),a.C=y+u,d)))}V.prototype.cancel=function(){this.J=!0,Ms(this)};function sn(a){a.S=Date.now()+a.I,ed(a,a.I)}function ed(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ls(v(a.ba,a),d)}function co(a){a.B&&(c.clearTimeout(a.B),a.B=null)}V.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ro(this.i,this.A),this.L!=2&&(Yt(),Oe(17)),Ms(this),this.s=2,ai(this)):ed(this,this.S-a)};function ai(a){a.j.G==0||a.J||Td(a.j,a)}function Ms(a){co(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,hr(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function uo(a,d){try{var u=a.j;if(u.G!=0&&(u.g==a||ho(u.h,a))){if(!a.K&&ho(u.h,a)&&u.G==3){try{var y=u.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var L=y;if(L[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<a.F)Tr(u),Sr(u);else break e;go(u),Oe(18)}}else u.za=L[1],0<u.za-u.T&&37500>L[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ls(v(u.Za,u),6e3));if(1>=nd(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else zs(u,11)}else if((a.K||u.g==a)&&Tr(u),!f(d))for(L=u.Da.g.parse(d),d=0;d<L.length;d++){let le=L[d];if(u.T=le[0],le=le[1],u.G==2)if(le[0]=="c"){u.K=le[1],u.ia=le[2];const He=le[3];He!=null&&(u.la=He,u.j.info("VER="+u.la));const Ue=le[4];Ue!=null&&(u.Aa=Ue,u.j.info("SVER="+u.Aa));const an=le[5];an!=null&&typeof an=="number"&&0<an&&(y=1.5*an,u.L=y,u.j.info("backChannelRequestTimeoutMs_="+y)),y=u;const wt=a.g;if(wt){const Nr=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nr){var M=y.h;M.g||Nr.indexOf("spdy")==-1&&Nr.indexOf("quic")==-1&&Nr.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(po(M,M.h),M.h=null))}if(y.D){const xo=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(y.ya=xo,me(y.I,y.D,xo))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-a.F,u.j.info("Handshake RTT: "+u.R+"ms")),y=u;var G=a;if(y.qa=Ed(y,y.J?y.ia:null,y.W),G.K){id(y.h,G);var ue=G,_e=y.L;_e&&(ue.I=_e),ue.B&&(co(ue),sn(ue)),y.g=G}else Sd(y);0<u.i.length&&Cr(u)}else le[0]!="stop"&&le[0]!="close"||zs(u,7);else u.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?zs(u,7):fo(u):le[0]!="noop"&&u.l&&u.l.ta(le),u.v=0)}}Yt(4)}catch{}}var Wm=class{constructor(a,d){this.g=a,this.map=d}};function td(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nd(a){return a.h?1:a.g?a.g.size:0}function ho(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function po(a,d){a.g?a.g.add(d):a.h=d}function id(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}td.prototype.cancel=function(){if(this.i=rd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function rd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const u of a.g.values())d=d.concat(u.D);return d}return I(a.i)}function Ym(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(h(a)){for(var d=[],u=a.length,y=0;y<u;y++)d.push(a[y]);return d}d=[],u=0;for(y in a)d[u++]=a[y];return d}function Vm(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(h(a)||typeof a=="string"){var d=[];a=a.length;for(var u=0;u<a;u++)d.push(u);return d}d=[],u=0;for(const y in a)d[u++]=y;return d}}}function ad(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(h(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var u=Vm(a),y=Ym(a),L=y.length,M=0;M<L;M++)d.call(void 0,y[M],u&&u[M],a)}var od=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Gm(a,d){if(a){a=a.split("&");for(var u=0;u<a.length;u++){var y=a[u].indexOf("="),L=null;if(0<=y){var M=a[u].substring(0,y);L=a[u].substring(y+1)}else M=a[u];d(M,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Fs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Fs){this.h=a.h,xr(this,a.j),this.o=a.o,this.g=a.g,vr(this,a.s),this.l=a.l;var d=a.i,u=new ci;u.i=d.i,d.g&&(u.g=new Map(d.g),u.h=d.h),ld(this,u),this.m=a.m}else a&&(d=String(a).match(od))?(this.h=!1,xr(this,d[1]||"",!0),this.o=oi(d[2]||""),this.g=oi(d[3]||"",!0),vr(this,d[4]),this.l=oi(d[5]||"",!0),ld(this,d[6]||"",!0),this.m=oi(d[7]||"")):(this.h=!1,this.i=new ci(null,this.h))}Fs.prototype.toString=function(){var a=[],d=this.j;d&&a.push(li(d,cd,!0),":");var u=this.g;return(u||d=="file")&&(a.push("//"),(d=this.o)&&a.push(li(d,cd,!0),"@"),a.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&a.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&a.push("/"),a.push(li(u,u.charAt(0)=="/"?Xm:qm,!0))),(u=this.i.toString())&&a.push("?",u),(u=this.m)&&a.push("#",li(u,Jm)),a.join("")};function Vt(a){return new Fs(a)}function xr(a,d,u){a.j=u?oi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function vr(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function ld(a,d,u){d instanceof ci?(a.i=d,Qm(a.i,a.h)):(u||(d=li(d,Km)),a.i=new ci(d,a.h))}function me(a,d,u){a.i.set(d,u)}function wr(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function oi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function li(a,d,u){return typeof a=="string"?(a=encodeURI(a).replace(d,$m),u&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $m(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cd=/[#\/\?@]/g,qm=/[#\?:]/g,Xm=/[#\?]/g,Km=/[#\?@]/g,Jm=/#/g;function ci(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function cs(a){a.g||(a.g=new Map,a.h=0,a.i&&Gm(a.i,function(d,u){a.add(decodeURIComponent(d.replace(/\+/g," ")),u)}))}e=ci.prototype,e.add=function(a,d){cs(this),this.i=null,a=nn(this,a);var u=this.g.get(a);return u||this.g.set(a,u=[]),u.push(d),this.h+=1,this};function dd(a,d){cs(a),d=nn(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ud(a,d){return cs(a),d=nn(a,d),a.g.has(d)}e.forEach=function(a,d){cs(this),this.g.forEach(function(u,y){u.forEach(function(L){a.call(d,L,y,this)},this)},this)},e.na=function(){cs(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),u=[];for(let y=0;y<d.length;y++){const L=a[y];for(let M=0;M<L.length;M++)u.push(d[y])}return u},e.V=function(a){cs(this);let d=[];if(typeof a=="string")ud(this,a)&&(d=d.concat(this.g.get(nn(this,a))));else{a=Array.from(this.g.values());for(let u=0;u<a.length;u++)d=d.concat(a[u])}return d},e.set=function(a,d){return cs(this),this.i=null,a=nn(this,a),ud(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},e.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function hd(a,d,u){dd(a,d),0<u.length&&(a.i=null,a.g.set(nn(a,d),I(u)),a.h+=u.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var u=0;u<d.length;u++){var y=d[u];const M=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var L=M;G[y]!==""&&(L+="="+encodeURIComponent(String(G[y]))),a.push(L)}}return this.i=a.join("&")};function nn(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Qm(a,d){d&&!a.j&&(cs(a),a.i=null,a.g.forEach(function(u,y){var L=y.toLowerCase();y!=L&&(dd(this,y),hd(this,L,u))},a)),a.j=d}function Zm(a,d){const u=new Os;if(c.Image){const y=new Image;y.onload=C(ds,u,"TestLoadImage: loaded",!0,d,y),y.onerror=C(ds,u,"TestLoadImage: error",!1,d,y),y.onabort=C(ds,u,"TestLoadImage: abort",!1,d,y),y.ontimeout=C(ds,u,"TestLoadImage: timeout",!1,d,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function ef(a,d){const u=new Os,y=new AbortController,L=setTimeout(()=>{y.abort(),ds(u,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(M=>{clearTimeout(L),M.ok?ds(u,"TestPingServer: ok",!0,d):ds(u,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),ds(u,"TestPingServer: error",!1,d)})}function ds(a,d,u,y,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),y(u)}catch{}}function tf(){this.g=new to}function sf(a,d,u){const y=u||"";try{ad(a,function(L,M){let G=L;p(L)&&(G=Qn(L)),d.push(y+M+"="+encodeURIComponent(G))})}catch(L){throw d.push(y+"type="+encodeURIComponent("_badmap")),L}}function br(a){this.l=a.Ub||null,this.j=a.eb||!1}N(br,Zn),br.prototype.g=function(){return new kr(this.l,this.j)},br.prototype.i=function(a){return function(){return a}}({});function kr(a,d){Ae.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(kr,Ae),e=kr.prototype,e.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,ui(this)},e.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,di(this)),this.readyState=0},e.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function pd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}e.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?di(this):ui(this),this.readyState==3&&pd(this)}},e.Ra=function(a){this.g&&(this.response=this.responseText=a,di(this))},e.Qa=function(a){this.g&&(this.response=a,di(this))},e.ga=function(){this.g&&di(this)};function di(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ui(a)}e.setRequestHeader=function(a,d){this.u.append(a,d)},e.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var u=d.next();!u.done;)u=u.value,a.push(u[0]+": "+u[1]),u=d.next();return a.join(`\r
`)};function ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function md(a){let d="";return F(a,function(u,y){d+=y,d+=":",d+=u,d+=`\r
`}),d}function mo(a,d,u){e:{for(y in u){var y=!1;break e}y=!0}y||(u=md(u),typeof a=="string"?u!=null&&encodeURIComponent(String(u)):me(a,d,u))}function Ce(a){Ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Ce,Ae);var nf=/^https?$/i,rf=["POST","PUT"];e=Ce.prototype,e.Ha=function(a){this.J=a},e.ea=function(a,d,u,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?pr(this.o):pr(ii),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(M){fd(this,M);return}if(a=u||"",u=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var L in y)u.set(L,y[L]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const M of y.keys())u.set(M,y.get(M));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(u.keys()).find(M=>M.toLowerCase()=="content-type"),L=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rf,d,void 0))||y||L||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,G]of u)this.g.setRequestHeader(M,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xd(this),this.u=!0,this.g.send(a),this.u=!1}catch(M){fd(this,M)}};function fd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,gd(a),jr(a)}function gd(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}e.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Le(this,"complete"),Le(this,"abort"),jr(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jr(this,!0)),Ce.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?yd(this):this.bb())},e.bb=function(){yd(this)};function yd(a){if(a.h&&typeof l<"u"&&(!a.v[1]||Gt(a)!=4||a.Z()!=2)){if(a.u&&Gt(a)==4)cr(a.Ea,0,a);else if(Le(a,"readystatechange"),Gt(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var u;if(!(u=d)){var y;if(y=G===0){var L=String(a.D).match(od)[1]||null;!L&&c.self&&c.self.location&&(L=c.self.location.protocol.slice(0,-1)),y=!nf.test(L?L.toLowerCase():"")}u=y}if(u)Le(a,"complete"),Le(a,"success");else{a.m=6;try{var M=2<Gt(a)?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.Z()+"]",gd(a)}}finally{jr(a)}}}}function jr(a,d){if(a.g){xd(a);const u=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||Le(a,"ready");try{u.onreadystatechange=y}catch{}}}function xd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}e.isActive=function(){return!!this.g};function Gt(a){return a.g?a.g.readyState:0}e.Z=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),eo(d)}};function vd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function af(a){const d={};a=(a.g&&2<=Gt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(f(a[y]))continue;var u=P(a[y]);const L=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const M=d[L]||[];d[L]=M,M.push(u)}b(d,function(y){return y.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hi(a,d,u){return u&&u.internalChannelParams&&u.internalChannelParams[a]||d}function wd(a){this.Aa=0,this.i=[],this.j=new Os,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hi("baseRetryDelayMs",5e3,a),this.cb=hi("retryDelaySeedMs",1e4,a),this.Wa=hi("forwardChannelMaxRetries",2,a),this.wa=hi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new td(a&&a.concurrentRequestLimit),this.Da=new tf,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=wd.prototype,e.la=8,e.G=1,e.connect=function(a,d,u,y){Oe(0),this.W=a,this.H=d||{},u&&y!==void 0&&(this.H.OSID=u,this.H.OAID=y),this.F=this.X,this.I=Ed(this,null,this.W),Cr(this)};function fo(a){if(bd(a),a.G==3){var d=a.U++,u=Vt(a.I);if(me(u,"SID",a.K),me(u,"RID",d),me(u,"TYPE","terminate"),pi(a,u),d=new V(a,a.j,d),d.L=2,d.v=wr(Vt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=d.v,u=!0),u||(d.g=Ad(d.j,null),d.g.ea(d.v)),d.F=Date.now(),sn(d)}Pd(a)}function Sr(a){a.g&&(yo(a),a.g.cancel(),a.g=null)}function bd(a){Sr(a),a.u&&(c.clearTimeout(a.u),a.u=null),Tr(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Cr(a){if(!sd(a.h)&&!a.s){a.s=!0;var d=a.Ga;se||z(),_||(se(),_=!0),H.add(d,a),a.B=0}}function of(a,d){return nd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ls(v(a.Ga,a,d),Nd(a,a.B)),a.B++,!0)}e.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new V(this,this.j,a);let M=this.o;if(this.S&&(M?(M=g(M),j(M,this.S)):M=this.S),this.m!==null||this.O||(L.H=M,M=null),this.P)e:{for(var d=0,u=0;u<this.i.length;u++){t:{var y=this.i[u];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=u;break e}if(d===4096||u===this.i.length-1){d=u+1;break e}}d=1e3}else d=1e3;d=jd(this,L,d),u=Vt(this.I),me(u,"RID",a),me(u,"CVER",22),this.D&&me(u,"X-HTTP-Session-Id",this.D),pi(this,u),M&&(this.O?d="headers="+encodeURIComponent(String(md(M)))+"&"+d:this.m&&mo(u,this.m,M)),po(this.h,L),this.Ua&&me(u,"TYPE","init"),this.P?(me(u,"$req",d),me(u,"SID","null"),L.T=!0,ri(L,u,null)):ri(L,u,d),this.G=2}}else this.G==3&&(a?kd(this,a):this.i.length==0||sd(this.h)||kd(this))};function kd(a,d){var u;d?u=d.l:u=a.U++;const y=Vt(a.I);me(y,"SID",a.K),me(y,"RID",u),me(y,"AID",a.T),pi(a,y),a.m&&a.o&&mo(y,a.m,a.o),u=new V(a,a.j,u,a.B+1),a.m===null&&(u.H=a.o),d&&(a.i=d.D.concat(a.i)),d=jd(a,u,1e3),u.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),po(a.h,u),ri(u,y,d)}function pi(a,d){a.H&&F(a.H,function(u,y){me(d,y,u)}),a.l&&ad({},function(u,y){me(d,y,u)})}function jd(a,d,u){u=Math.min(a.i.length,u);var y=a.l?v(a.l.Na,a.l,a):null;e:{var L=a.i;let M=-1;for(;;){const G=["count="+u];M==-1?0<u?(M=L[0].g,G.push("ofs="+M)):M=0:G.push("ofs="+M);let ue=!0;for(let _e=0;_e<u;_e++){let le=L[_e].g;const He=L[_e].map;if(le-=M,0>le)M=Math.max(0,L[_e].g-100),ue=!1;else try{sf(He,G,"req"+le+"_")}catch{y&&y(He)}}if(ue){y=G.join("&");break e}}}return a=a.i.splice(0,u),d.D=a,y}function Sd(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;se||z(),_||(se(),_=!0),H.add(d,a),a.v=0}}function go(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ls(v(a.Fa,a),Nd(a,a.v)),a.v++,!0)}e.Fa=function(){if(this.u=null,Cd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ls(v(this.ab,this),a)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),Sr(this),Cd(this))};function yo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Cd(a){a.g=new V(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Vt(a.qa);me(d,"RID","rpc"),me(d,"SID",a.K),me(d,"AID",a.T),me(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(d,"TO",a.ja),me(d,"TYPE","xmlhttp"),pi(a,d),a.m&&a.o&&mo(d,a.m,a.o),a.L&&(a.g.I=a.L);var u=a.g;a=a.ia,u.L=1,u.v=wr(Vt(d)),u.m=null,u.P=!0,gr(u,a)}e.Za=function(){this.C!=null&&(this.C=null,Sr(this),go(this),Oe(19))};function Tr(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Td(a,d){var u=null;if(a.g==d){Tr(a),yo(a),a.g=null;var y=2}else if(ho(a.h,d))u=d.D,id(a.h,d),y=1;else return;if(a.G!=0){if(d.o)if(y==1){u=d.m?d.m.length:0,d=Date.now()-d.F;var L=a.B;y=si(),Le(y,new fr(y,u)),Cr(a)}else Sd(a);else if(L=d.s,L==3||L==0&&0<d.X||!(y==1&&of(a,d)||y==2&&go(a)))switch(u&&0<u.length&&(d=a.h,d.i=d.i.concat(u)),L){case 1:zs(a,5);break;case 4:zs(a,10);break;case 3:zs(a,6);break;default:zs(a,2)}}}function Nd(a,d){let u=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(u*=2),u*d}function zs(a,d){if(a.j.info("Error code "+d),d==2){var u=v(a.fb,a),y=a.Xa;const L=!y;y=new Fs(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||xr(y,"https"),wr(y),L?Zm(y.toString(),u):ef(y.toString(),u)}else Oe(2);a.G=0,a.l&&a.l.sa(d),Pd(a),bd(a)}e.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function Pd(a){if(a.G=0,a.ka=[],a.l){const d=rd(a.h);(d.length!=0||a.i.length!=0)&&(R(a.ka,d),R(a.ka,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.ra()}}function Ed(a,d,u){var y=u instanceof Fs?Vt(u):new Fs(u);if(y.g!="")d&&(y.g=d+"."+y.g),vr(y,y.s);else{var L=c.location;y=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var M=new Fs(null);y&&xr(M,y),d&&(M.g=d),L&&vr(M,L),u&&(M.l=u),y=M}return u=a.D,d=a.ya,u&&d&&me(y,u,d),me(y,"VER",a.la),pi(a,y),y}function Ad(a,d,u){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ce(new br({eb:u})):new Ce(a.pa),d.Ha(a.J),d}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Id(){}e=Id.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function pt(a,d){Ae.call(this),this.g=new wd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!f(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!f(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new rn(this)}N(pt,Ae),pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){fo(this.g)},pt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var u={};u.__data__=a,a=u}else this.u&&(u={},u.__data__=Qn(a),a=u);d.i.push(new Wm(d.Ya++,a)),d.G==3&&Cr(d)},pt.prototype.N=function(){this.g.l=null,delete this.j,fo(this.g),delete this.g,pt.aa.N.call(this)};function Dd(a){ei.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const u in d){a=u;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}N(Dd,ei);function Rd(){Rs.call(this),this.status=1}N(Rd,Rs);function rn(a){this.g=a}N(rn,Id),rn.prototype.ua=function(){Le(this.g,"a")},rn.prototype.ta=function(a){Le(this.g,new Dd(a))},rn.prototype.sa=function(a){Le(this.g,new Rd)},rn.prototype.ra=function(){Le(this.g,"b")},pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,ni.NO_ERROR=0,ni.TIMEOUT=8,ni.HTTP_ERROR=6,oo.COMPLETE="complete",so.EventType=Ds,Ds.OPEN="a",Ds.CLOSE="b",Ds.ERROR="c",Ds.MESSAGE="d",Ae.prototype.listen=Ae.prototype.K,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha}).apply(typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{});const Zu="@firebase/firestore";/**
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
 */class at{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
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
 */let Ka="10.14.0";/**
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
 */const Aa=new Am("@firebase/firestore");function At(e,...t){if(Aa.logLevel<=he.DEBUG){const s=t.map(Mm);Aa.debug(`Firestore (${Ka}): ${e}`,...s)}}function _m(e,...t){if(Aa.logLevel<=he.ERROR){const s=t.map(Mm);Aa.error(`Firestore (${Ka}): ${e}`,...s)}}function Mm(e){if(typeof e=="string")return e;try{/**
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
*/return function(s){return JSON.stringify(s)}(e)}catch{return e}}/**
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
 */function Fm(e="Unexpected state"){const t=`FIRESTORE (${Ka}) INTERNAL ASSERTION FAILED: `+e;throw _m(t),new Error(t)}function Oi(e,t){e||Fm()}/**
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
 */const Tt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Nt extends Un{constructor(t,s){super(t,s),this.code=t,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _i{constructor(){this.promise=new Promise((t,s)=>{this.resolve=t,this.reject=s})}}/**
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
 */class px{constructor(t,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,s){t.enqueueRetryable(()=>s(at.UNAUTHENTICATED))}shutdown(){}}class fx{constructor(t){this.t=t,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,s){Oi(this.o===void 0);let i=this.i;const r=h=>this.i!==i?(i=this.i,s(h)):Promise.resolve();let o=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _i,t.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},c=h=>{At("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(At("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _i)}},0),l()}getToken(){const t=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(i=>this.i!==t?(At("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Oi(typeof i.accessToken=="string"),new px(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Oi(t===null||typeof t=="string"),new at(t)}}class gx{constructor(t,s,i){this.l=t,this.h=s,this.P=i,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yx{constructor(t,s,i){this.l=t,this.h=s,this.P=i}getToken(){return Promise.resolve(new gx(this.l,this.h,this.P))}start(t,s){t.enqueueRetryable(()=>s(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xx{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vx{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,s){Oi(this.o===void 0);const i=o=>{o.error!=null&&At("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,At("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?s(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const r=o=>{At("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):At("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(s=>s?(Oi(typeof s.token=="string"),this.R=s.token,new xx(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function wx(e){return e.name==="IndexedDbTransactionError"}class Ia{constructor(t,s){this.projectId=t,this.database=s||"(default)"}static empty(){return new Ia("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ia&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var eh,ae;(ae=eh||(eh={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Om([4294967295,4294967295],0);function Xo(){return typeof document<"u"?document:null}/**
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
 */class bx{constructor(t,s,i=1e3,r=1.5,o=6e4){this.ui=t,this.timerId=s,this.ko=i,this.qo=r,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const s=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),r=Math.max(0,s-i);r>0&&At("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${s} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Zc{constructor(t,s,i,r,o){this.asyncQueue=t,this.timerId=s,this.targetTimeMs=i,this.op=r,this.removalCallback=o,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,s,i,r,o){const l=Date.now()+i,c=new Zc(t,s,l,r,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Nt(Tt.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var th,sh;(sh=th||(th={})).ea="default",sh.Cache="cache";/**
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
 */function kx(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const nh=new Map;function jx(e,t,s,i){if(t===!0&&i===!0)throw new Nt(Tt.INVALID_ARGUMENT,`${e} and ${s} cannot be used together.`)}/**
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
 */class ih{constructor(t){var s,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Nt(Tt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(s=t.ssl)===null||s===void 0||s;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Nt(Tt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}jx("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kx((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Nt(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Nt(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Nt(Tt.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Sx{constructor(t,s,i,r){this._authCredentials=t,this._appCheckCredentials=s,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ih({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Nt(Tt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new Nt(Tt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ih(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new mx;switch(i.type){case"firstParty":return new yx(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Nt(Tt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const i=nh.get(s);i&&(At("ComponentProvider","Removing Datastore"),nh.delete(s),i.terminate())}(this),Promise.resolve()}}/**
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
 */class rh{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bx(this,"async_queue_retry"),this.Vu=()=>{const i=Xo();i&&At("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const s=Xo();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const s=Xo();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const s=new _i;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!wx(t))throw t;At("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const s=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const r=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(i);throw _m("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.du=!1,i))));return this.mu=s,s}enqueueAfterDelay(t,s,i){this.fu(),this.Ru.indexOf(t)>-1&&(s=0);const r=Zc.createAndSchedule(this,t,s,i,o=>this.yu(o));return this.Tu.push(r),r}fu(){this.Eu&&Fm()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const s of this.Tu)if(s.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((s,i)=>s.targetTimeMs-i.targetTimeMs);for(const s of this.Tu)if(s.skipDelay(),t!=="all"&&s.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const s=this.Tu.indexOf(t);this.Tu.splice(s,1)}}class Cx extends Sx{constructor(t,s,i,r){super(t,s,i,r),this.type="firestore",this._queue=new rh,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new rh(t),this._firestoreClient=void 0,await t}}}(function(t,s=!0){(function(r){Ka=r})(tx),Ea(new Pa("firestore",(i,{instanceIdentifier:r,options:o})=>{const l=i.getProvider("app").getImmediate(),c=new Cx(new fx(i.getProvider("auth-internal")),new vx(i.getProvider("app-check-internal")),function(p,w){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new Nt(Tt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ia(p.options.projectId,w)}(l,r),l);return o=Object.assign({useFetchStreams:s},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Pn(Zu,"4.7.3",t),Pn(Zu,"4.7.3","esm2017")})();const qe=()=>!0;console.log("Running in Demo Mode - using localStorage for data storage");const zm="cyberRangeDemo",ht=()=>{try{const e=localStorage.getItem(zm);return e?JSON.parse(e):{students:{},classes:{},assignments:{},teachers:{}}}catch{return{students:{},classes:{},assignments:{},teachers:{}}}},Bn=e=>{localStorage.setItem(zm,JSON.stringify(e))},Qt=new Map,Hm=e=>{const t=Qt.get(e)||[],s=ht();t.forEach(i=>{if(e.startsWith("class:")){const r=e.replace("class:",""),o=Object.values(s.students).filter(l=>l.classCode===r);i(o.map(l=>({...l,lastActivity:l.lastActivity?new Date(l.lastActivity):null,lastLogin:l.lastLogin?new Date(l.lastLogin):null})))}else if(e.startsWith("assignments:")){const r=e.replace("assignments:",""),o=Object.values(s.assignments[r]||{});i(o.map(l=>({...l,dueDate:l.dueDate?new Date(l.dueDate):null,createdAt:l.createdAt?new Date(l.createdAt):null,assignedAt:l.assignedAt?new Date(l.assignedAt):null})))}})},Tx=async(e,t,s)=>{if(qe()){const i=ht();if(!i.students[e])return;i.students[e].submissions||(i.students[e].submissions={}),i.students[e].submissions[t]={answer:s.answer,isCorrect:s.isCorrect,exerciseType:s.exerciseType,exerciseTitle:s.exerciseTitle,submittedAt:new Date().toISOString()},i.students[e].lastActivity=new Date().toISOString(),Bn(i);return}},Nx=async e=>{if(qe()){const t=ht(),s=[];return Object.entries(t.students).filter(([i,r])=>r.classCode===e).forEach(([i,r])=>{r.submissions&&Object.entries(r.submissions).forEach(([o,l])=>{s.push({studentId:i,studentName:r.name,exerciseId:o,...l})})}),s}return[]},Px=async e=>qe()&&ht().classes[e]||null,Ex=(e,t)=>{if(qe()){const s=`class:${e}`,i=Qt.get(s)||[];i.push(t),Qt.set(s,i);const r=ht(),o=Object.entries(r.students).filter(([l,c])=>c.classCode===e).map(([l,c])=>({id:l,...c,lastActivity:c.lastActivity?new Date(c.lastActivity):null,lastLogin:c.lastLogin?new Date(c.lastLogin):null}));return t(o),()=>{const l=Qt.get(s)||[];Qt.set(s,l.filter(c=>c!==t))}}return t([]),()=>{}},Um=(e,t)=>{if(qe()){const s=`assignments:${e}`,i=Qt.get(s)||[];i.push(t),Qt.set(s,i);const r=ht(),o=Object.entries(r.assignments[e]||{}).map(([l,c])=>({id:l,...c,dueDate:c.dueDate?new Date(c.dueDate):null,createdAt:c.createdAt?new Date(c.createdAt):null,assignedAt:c.assignedAt?new Date(c.assignedAt):null}));return t(o),()=>{const l=Qt.get(s)||[];Qt.set(s,l.filter(c=>c!==t))}}return t([]),()=>{}},Ax=async(e,t)=>{if(qe()){const s=ht();s.assignments[e]||(s.assignments[e]={});const i=`assignment_${Date.now()}`;return s.assignments[e][i]={type:t.type,items:t.items||[],title:t.title,assignedAt:new Date().toISOString(),createdAt:new Date().toISOString(),dueDate:t.dueDate||null},Bn(s),Hm(`assignments:${e}`),{id:i}}return null},Ix=async(e,t)=>{if(qe()){const s=ht();s.assignments[e]&&s.assignments[e][t]&&(delete s.assignments[e][t],Bn(s),Hm(`assignments:${e}`));return}},Dx=async(e,t,s)=>{const i=t.toLowerCase().replace(/[^a-z0-9]/g,"_");if(console.log("Registering teacher:",{teacherId:i,email:t,isDemoMode:qe(),dbAvailable:!1}),qe()){const r=ht();if(r.teachers||(r.teachers={}),r.teachers[i])throw new Error("An account with this email already exists");return r.teachers[i]={name:e,email:t.toLowerCase(),password:s,createdAt:new Date().toISOString(),classes:[]},Bn(r),console.log("Teacher registered in demo mode:",i),{id:i,name:e,email:t.toLowerCase(),classes:[]}}throw console.error("Firebase db is not initialized for teacher registration!"),new Error("Database not available. Please check Firebase configuration.")},Rx=async(e,t)=>{const s=e.toLowerCase().replace(/[^a-z0-9]/g,"_");if(console.log("Teacher login attempt:",{teacherId:s,isDemoMode:qe(),dbAvailable:!1}),qe()){const i=ht();i.teachers||(i.teachers={});const r=i.teachers[s];if(!r)throw new Error("No account found with this email");if(r.password!==t)throw new Error("Incorrect password");return console.log("Teacher logged in via demo mode:",s),{id:s,name:r.name,email:r.email,classes:r.classes||[]}}throw console.error("Firebase db is not initialized for teacher login!"),new Error("Database not available. Please check Firebase configuration.")},Lx=async e=>{if(qe()){const t=ht();return!t.teachers||!t.teachers[e]?[]:(t.teachers[e].classes||[]).map(i=>t.classes[i]).filter(Boolean)}return[]},Ox=async(e,t)=>{const s=Mx();if(console.log("Creating class:",{teacherId:e,className:t,classCode:s,isDemoMode:qe(),dbAvailable:!1}),qe()){const i=ht();if(i.teachers||(i.teachers={}),!i.teachers[e])throw new Error("Teacher not found");return i.classes[s]={name:t,teacherId:e,teacher:i.teachers[e].name,classCode:s,createdAt:new Date().toISOString(),isActive:!0},i.assignments[s]={},i.teachers[e].classes||(i.teachers[e].classes=[]),i.teachers[e].classes.push(s),Bn(i),console.log("Class created in demo mode:",s),i.classes[s]}throw console.error("Firebase db is not initialized!"),new Error("Database not available. Please check Firebase configuration.")},_x=async(e,t)=>{if(qe()){const s=ht();if(!s.teachers||!s.teachers[e])throw new Error("Teacher not found");return s.teachers[e].classes=(s.teachers[e].classes||[]).filter(i=>i!==t),delete s.classes[t],delete s.assignments[t],Object.keys(s.students).forEach(i=>{s.students[i].classCode===t&&delete s.students[i]}),Bn(s),!0}return!1},Mx=()=>{const e="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";let t="";for(let s=0;s<6;s++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},Fx=({onLogin:e,onBack:t})=>{const[s,i]=A.useState("login"),[r,o]=A.useState(""),[l,c]=A.useState(""),[h,p]=A.useState(""),[w,x]=A.useState(""),[v,C]=A.useState(""),[N,I]=A.useState(!1),R=async f=>{if(f.preventDefault(),C(""),!l.trim()){C("Please enter your email");return}if(!h){C("Please enter your password");return}I(!0);try{const S=await Rx(l,h);e(S)}catch(S){C(S.message||"Login failed. Please try again.")}I(!1)},m=async f=>{if(f.preventDefault(),C(""),!r.trim()){C("Please enter your name");return}if(!l.trim()){C("Please enter your email");return}if(!h){C("Please enter a password");return}if(h.length<4){C("Password must be at least 4 characters");return}if(h!==w){C("Passwords do not match");return}I(!0);try{const S=await Dx(r,l,h);e(S)}catch(S){C(S.message||"Registration failed. Please try again.")}I(!1)};return n.jsx("div",{className:"login-container",children:n.jsxs("div",{className:"login-card",children:[n.jsxs("div",{className:"login-header",children:[n.jsx("h1",{children:"Teacher Portal"}),n.jsx("p",{children:"Manage your classes and students"})]}),n.jsxs("div",{className:"login-tabs",children:[n.jsx("button",{className:`tab-btn ${s==="login"?"active":""}`,onClick:()=>{i("login"),C("")},children:"Sign In"}),n.jsx("button",{className:`tab-btn ${s==="register"?"active":""}`,onClick:()=>{i("register"),C("")},children:"Create Account"})]}),s==="login"?n.jsxs("form",{onSubmit:R,className:"login-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"email",children:"Email"}),n.jsx("input",{type:"email",id:"email",placeholder:"teacher@school.edu",value:l,onChange:f=>c(f.target.value),disabled:N})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"password",children:"Password"}),n.jsx("input",{type:"password",id:"password",placeholder:"Enter your password",value:h,onChange:f=>p(f.target.value),disabled:N})]}),v&&n.jsx("div",{className:"error-message",children:v}),n.jsx("button",{type:"submit",className:"btn-primary",disabled:N,children:N?"Signing in...":"Sign In"})]}):n.jsxs("form",{onSubmit:m,className:"login-form",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"name",children:"Your Name"}),n.jsx("input",{type:"text",id:"name",placeholder:"Ms. Smith",value:r,onChange:f=>o(f.target.value),disabled:N})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"regEmail",children:"Email"}),n.jsx("input",{type:"email",id:"regEmail",placeholder:"teacher@school.edu",value:l,onChange:f=>c(f.target.value),disabled:N})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"regPassword",children:"Password"}),n.jsx("input",{type:"password",id:"regPassword",placeholder:"Create a password",value:h,onChange:f=>p(f.target.value),disabled:N})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),n.jsx("input",{type:"password",id:"confirmPassword",placeholder:"Confirm your password",value:w,onChange:f=>x(f.target.value),disabled:N})]}),v&&n.jsx("div",{className:"error-message",children:v}),n.jsx("button",{type:"submit",className:"btn-primary",disabled:N,children:N?"Creating Account...":"Create Account"})]}),n.jsx("div",{className:"login-footer",children:n.jsx("button",{className:"btn-link",onClick:t,children:"Back to Student Login"})})]})})},zx=({teacher:e,onSelectClass:t,onLogout:s})=>{Kc();const[i,r]=A.useState([]),[o,l]=A.useState(!0),[c,h]=A.useState(!1),[p,w]=A.useState(""),[x,v]=A.useState(!1),[C,N]=A.useState(""),[I,R]=A.useState(!1);A.useEffect(()=>{m()},[e.id]);const m=async()=>{l(!0);try{const O=await Lx(e.id);r(O)}catch(O){console.error("Error loading classes:",O)}l(!1)},f=async O=>{if(O.preventDefault(),N(""),!p.trim()){N("Please enter a class name");return}v(!0);try{const F=await Ox(e.id,p.trim());r([...i,F]),w(""),h(!1)}catch(F){N(F.message||"Failed to create class")}v(!1)},S=async(O,F)=>{if(window.confirm(`Are you sure you want to delete "${F}"? This will remove all student data and cannot be undone.`))try{await _x(e.id,O),r(i.filter(b=>b.classCode!==O))}catch(b){alert("Failed to delete class: "+b.message)}},D=O=>{navigator.clipboard.writeText(O)};return n.jsxs("div",{className:"teacher-home",children:[n.jsxs("header",{className:"th-header",children:[n.jsxs("div",{className:"th-title",children:[n.jsx("h1",{children:"Teacher Dashboard"}),n.jsxs("p",{children:["Welcome back, ",e.name]})]}),n.jsxs("div",{className:"th-actions",children:[n.jsx("button",{className:"theme-btn nav-btn",onClick:()=>R(!0),children:"Theme"}),n.jsx("button",{className:"logout-btn",onClick:s,children:"Logout"})]})]}),n.jsxs("div",{className:"th-content",children:[n.jsxs("div",{className:"th-section-header",children:[n.jsx("h2",{children:"Your Classes"}),n.jsx("button",{className:"btn-primary",onClick:()=>h(!0),children:"+ Create New Class"})]}),o?n.jsx("div",{className:"loading-message",children:"Loading classes..."}):i.length===0?n.jsxs("div",{className:"no-classes",children:[n.jsx("div",{className:"no-classes-icon",children:"[ CLASSES ]"}),n.jsx("h3",{children:"No Classes Yet"}),n.jsx("p",{children:"Create your first class to get started. Students will use the class code to join."}),n.jsx("button",{className:"btn-primary",onClick:()=>h(!0),children:"Create Your First Class"})]}):n.jsx("div",{className:"classes-grid",children:i.map(O=>n.jsxs("div",{className:"class-card",children:[n.jsxs("div",{className:"class-card-header",children:[n.jsx("h3",{children:O.name}),n.jsx("button",{className:"delete-btn",onClick:F=>{F.stopPropagation(),S(O.classCode,O.name)},title:"Delete class",children:"×"})]}),n.jsxs("div",{className:"class-code-section",children:[n.jsx("span",{className:"class-code-label",children:"Class Code:"}),n.jsxs("div",{className:"class-code-display",children:[n.jsx("span",{className:"code",children:O.classCode}),n.jsx("button",{className:"copy-btn",onClick:F=>{F.stopPropagation(),D(O.classCode)},title:"Copy code",children:"Copy"})]})]}),n.jsx("p",{className:"class-hint",children:"Share this code with students to join"}),n.jsx("button",{className:"btn-primary open-btn",onClick:()=>t(O.classCode),children:"Open Dashboard"})]},O.classCode))})]}),c&&n.jsx("div",{className:"modal-overlay",onClick:()=>h(!1),children:n.jsxs("div",{className:"modal-content",onClick:O=>O.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{children:"Create New Class"}),n.jsx("button",{className:"close-btn",onClick:()=>h(!1),children:"×"})]}),n.jsxs("form",{onSubmit:f,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"className",children:"Class Name"}),n.jsx("input",{type:"text",id:"className",placeholder:"e.g., Period 3 Cybersecurity",value:p,onChange:O=>w(O.target.value),disabled:x,autoFocus:!0})]}),C&&n.jsx("div",{className:"error-message",children:C}),n.jsxs("div",{className:"modal-actions",children:[n.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>h(!1),disabled:x,children:"Cancel"}),n.jsx("button",{type:"submit",className:"btn-primary",disabled:x,children:x?"Creating...":"Create Class"})]})]})]})}),I&&n.jsx(Xc,{onClose:()=>R(!1)})]})},Hx=({category:e,completedChallenges:t,onSelectChallenge:s})=>{const i={cryptography:"Cryptography",network:"Network Security",password:"Password Security",web:"Web Security",social:"Social Engineering"},r=_n[e]||[];return n.jsxs("div",{children:[n.jsxs("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:[i[e]," Challenges"]}),n.jsxs("div",{className:"learning-objectives",children:[n.jsx("h3",{children:"Learning Objectives"}),n.jsx("ul",{children:(F0[e]||[]).map((o,l)=>n.jsx("li",{children:o},l))})]}),n.jsx("div",{className:"challenge-list",children:r.map(o=>{const l=t.includes(o.id);return n.jsxs("div",{className:`challenge-item ${l?"completed":""}`,onClick:()=>s(o.id),children:[n.jsxs("div",{className:"challenge-info",children:[n.jsx("h3",{children:o.title}),n.jsxs("p",{style:{color:"#b0b0b0",margin:"0.5rem 0"},children:[o.description.substring(0,120),"..."]}),n.jsxs("div",{className:"challenge-meta",children:[n.jsx("span",{className:`difficulty ${o.difficulty}`,children:o.difficulty}),n.jsxs("span",{className:"points",children:[o.points," points"]})]})]}),n.jsx("div",{className:"challenge-status",children:l?"✅":"🔒"})]},o.id)})})]})},Ux=({challengeId:e,onComplete:t,onBack:s,isCompleted:i,onSubmit:r})=>{const[o,l]=A.useState(""),[c,h]=A.useState(!1),[p,w]=A.useState(null),[x,v]=A.useState(i),[C,N]=A.useState(!1),[I,R]=A.useState(null),m=M0(e);if(!m)return n.jsx("div",{children:"Challenge not found"});const f=()=>{var b,g;const D=o.trim().toUpperCase(),F=[(b=m.answer)==null?void 0:b.toUpperCase(),(g=m.flag)==null?void 0:g.toUpperCase()].filter(Boolean).some(T=>D===T||D.includes(T));r&&r({exerciseId:e,answer:o,isCorrect:F,exerciseType:"challenge",exerciseTitle:m.title}),F?(w({type:"success",message:"Correct! Well done!"}),v(!0),t(e,m.points)):w({type:"error",message:"Incorrect. Try again or check the hints!"})},S=D=>{R(I===D?null:D)};return n.jsxs("div",{className:"challenge-detail",children:[n.jsxs("div",{className:"challenge-header",children:[n.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:n.jsxs("div",{children:[n.jsx("h2",{children:m.title}),n.jsxs("div",{className:"challenge-meta",style:{marginTop:"1rem"},children:[n.jsx("span",{className:`difficulty ${m.difficulty}`,children:m.difficulty}),n.jsxs("span",{className:"points",children:[m.points," points"]}),i&&n.jsx("span",{style:{color:"#4caf50",fontWeight:"bold"},children:"✅ Completed"})]})]})}),n.jsxs("div",{className:"learning-objective",children:[n.jsx("strong",{children:"Learning Objective:"})," ",m.learningObjective]}),n.jsx("p",{style:{marginTop:"1rem",lineHeight:"1.6"},children:m.description})]}),m.learn&&n.jsxs("div",{className:"explanation-section",children:[n.jsxs("button",{className:`explanation-toggle ${C?"open":""}`,onClick:()=>N(!C),children:[n.jsx("span",{className:"toggle-icon",children:C?"▼":"▶"}),n.jsxs("span",{className:"toggle-text",children:["📚 Learn: ",m.learn.title]})]}),C&&n.jsxs("div",{className:"explanation-content",children:[n.jsxs("div",{className:"concept-section",children:[n.jsx("h4",{children:"Concept"}),n.jsx("pre",{className:"concept-text",children:m.learn.concept})]}),m.learn.example&&n.jsxs("div",{className:"example-section",children:[n.jsx("h4",{children:"Example"}),n.jsx("pre",{className:"example-code",children:n.jsx("code",{children:m.learn.example})})]}),m.learn.keyPoints&&m.learn.keyPoints.length>0&&n.jsxs("div",{className:"key-points-section",children:[n.jsx("h4",{children:"Key Points"}),n.jsx("ul",{children:m.learn.keyPoints.map((D,O)=>n.jsx("li",{children:D},O))})]})]})]}),m.vocabularyTerms&&m.vocabularyTerms.length>0&&n.jsxs("div",{className:"vocabulary-section",children:[n.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Key Vocabulary"}),n.jsx("div",{className:"vocabulary-tags",children:m.vocabularyTerms.map(D=>{const O=wn[D];return O?n.jsx("div",{className:"vocab-tag",onClick:()=>S(D),style:{borderColor:I===D?"#00ff88":"transparent"},children:O.term},D):null})}),I&&wn[I]&&n.jsxs("div",{style:{background:"rgba(0, 255, 136, 0.1)",padding:"1rem",borderRadius:"5px",marginTop:"1rem",borderLeft:"4px solid #00ff88"},children:[n.jsx("strong",{style:{color:"#00ff88"},children:wn[I].term}),n.jsx("p",{style:{marginTop:"0.5rem"},children:wn[I].definition})]})]}),n.jsxs("div",{children:[n.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Challenge"}),n.jsx("div",{className:"challenge-prompt",children:m.prompt})]}),m.hints&&m.hints.length>0&&n.jsxs("div",{className:"hints-section",children:[n.jsx("button",{className:"hints-toggle",onClick:()=>h(!c),children:c?"🔽 Hide Hints":"💡 Show Hints"}),c&&n.jsx("ul",{className:"hints-list",children:m.hints.map((D,O)=>n.jsxs("li",{className:"hint-item",children:["Hint ",O+1,": ",D]},O))})]}),!i&&n.jsxs("div",{className:"answer-section",children:[n.jsx("h3",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Submit Your Answer"}),n.jsx("input",{type:"text",className:"answer-input",placeholder:"Enter your answer or flag here...",value:o,onChange:D=>l(D.target.value),onKeyPress:D=>D.key==="Enter"&&f()}),n.jsx("button",{className:"submit-btn",onClick:f,disabled:!o.trim(),children:"Submit Answer"})]}),p&&n.jsx("div",{className:`feedback ${p.type}`,children:p.message}),x&&m.explanation&&n.jsxs("div",{className:"explanation",children:[n.jsx("h3",{style:{color:"#00ff88",marginBottom:"0.5rem"},children:"Explanation"}),n.jsx("p",{children:m.explanation})]}),n.jsx("button",{className:"back-btn",onClick:s,children:"← Back to Challenges"})]})},Bx=()=>{const[e,t]=A.useState("all"),s=["all","Cryptography","Network Security","Password Security","Web Security","Social Engineering","General"],i=Object.values(wn).filter(r=>e==="all"?!0:r.category===e);return n.jsxs("div",{className:"vocabulary-page",children:[n.jsx("h2",{style:{color:"#00ff88",marginBottom:"1rem"},children:"Cybersecurity Vocabulary"}),n.jsx("p",{style:{marginBottom:"2rem",color:"#b0b0b0"},children:"Build your cybersecurity knowledge by learning these key terms and concepts."}),n.jsx("div",{className:"vocab-categories",children:s.map(r=>n.jsx("button",{className:`vocab-category-btn ${e===r?"active":""}`,onClick:()=>t(r),children:r==="all"?"All Terms":r},r))}),n.jsxs("div",{style:{marginTop:"1rem",color:"#b0b0b0"},children:["Showing ",i.length," term",i.length!==1?"s":""]}),n.jsx("div",{className:"vocab-list",children:i.map((r,o)=>n.jsxs("div",{className:"vocab-card",children:[n.jsx("span",{className:"vocab-category",children:r.category}),n.jsx("h3",{children:r.term}),n.jsx("p",{style:{color:"#e0e0e0",marginTop:"0.5rem"},children:r.definition})]},o))}),i.length===0&&n.jsx("div",{style:{textAlign:"center",padding:"3rem",color:"#b0b0b0"},children:"No vocabulary terms found for this category."})]})},Bm={TCP:{name:"TCP",color:"#4fc3f7",port:null},UDP:{name:"UDP",color:"#81c784",port:null},HTTP:{name:"HTTP",color:"#64b5f6",port:80},HTTPS:{name:"HTTPS",color:"#7986cb",port:443},SSH:{name:"SSH",color:"#ffb74d",port:22},DNS:{name:"DNS",color:"#ba68c8",port:53},FTP:{name:"FTP",color:"#f06292",port:21},SMTP:{name:"SMTP",color:"#4db6ac",port:25},ICMP:{name:"ICMP",color:"#90a4ae",port:null}},zt={SYN:"SYN",ACK:"ACK",PSH:"PSH","SYN-ACK":"SYN-ACK"},ah=[{prefix:"192.168.1.",range:[1,254]},{prefix:"10.0.0.",range:[1,254]},{prefix:"172.16.0.",range:[1,254]}],oh=["203.0.113.","198.51.100.","185.220.101.","45.33.32.","104.21.35.","8.8.8."],lh=[80,443,53,22,21,25,3389,8080,3306,5432],Da={normal:["GET /index.html HTTP/1.1","GET /api/users HTTP/1.1","POST /api/login HTTP/1.1","GET /images/logo.png HTTP/1.1","GET /css/styles.css HTTP/1.1","GET /js/app.js HTTP/1.1","GET /api/products HTTP/1.1","POST /api/cart HTTP/1.1","GET /favicon.ico HTTP/1.1","GET /api/status HTTP/1.1"],sqlInjection:["GET /api/users?id=1' OR '1'='1 HTTP/1.1","POST /login?user=admin'-- HTTP/1.1","GET /search?q='; DROP TABLE users;-- HTTP/1.1","GET /api/product?id=1 UNION SELECT * FROM passwords HTTP/1.1","POST /api/auth?username=admin' OR 1=1-- HTTP/1.1","GET /page?id=1; SELECT * FROM users HTTP/1.1","GET /api/data?filter=' OR ''=' HTTP/1.1"]},Ra={normal:["A google.com","A microsoft.com","A github.com","AAAA cloudflare.com","MX company.com","A cdn.example.com","A api.service.com","A www.example.org"],tunneling:["TXT aGVsbG8gd29ybGQ.evil.com","TXT ZGF0YWV4ZmlsdHJhdGlvbg.malware.net","TXT c2VjcmV0LWRhdGE.suspicious.io","A cmd-exec-001.c2server.com","TXT YmFzZTY0ZW5jb2RlZA.tunnel.net"]},ch={normal:["SSH-2.0-OpenSSH_8.4 connection established","Key exchange: ECDH SHA256","User authentication successful","Session opened for user admin"]},dh={tcp:{min:40,max:1500},udp:{min:28,max:65535},http:{min:200,max:8e3},dns:{min:28,max:512},ssh:{min:40,max:2e3},icmp:{min:28,max:1500}},Wn=(e={})=>({id:Math.random().toString(36).substr(2,9),timestamp:new Date().toISOString(),sourceIP:"0.0.0.0",destIP:"0.0.0.0",sourcePort:0,destPort:0,protocol:"TCP",length:0,flags:"",info:"",payload:"",isMalicious:!1,attackType:null,flaggedByUser:!1,...e}),Jl=()=>{const e=ah[Math.floor(Math.random()*ah.length)],t=Math.floor(Math.random()*(e.range[1]-e.range[0]))+e.range[0];return e.prefix+t},Wx=()=>{const e=oh[Math.floor(Math.random()*oh.length)],t=Math.floor(Math.random()*254)+1;return e+t},Ct=(e=!0)=>e?lh[Math.floor(Math.random()*lh.length)]:Math.floor(Math.random()*65535)+1,or=(e="tcp")=>{const t=dh[e.toLowerCase()]||dh.tcp;return Math.floor(Math.random()*(t.max-t.min))+t.min};let uh=0;const Yn=()=>(uh++,`pkt-${Date.now()}-${uh}`),Yx=(e=["HTTP","HTTPS","DNS","TCP"])=>{const t=e[Math.floor(Math.random()*e.length)],s=Jl(),i=Math.random()>.3?Wx():Jl();let r,o,l,c;switch(t){case"HTTP":r=80,o=Ct(!1),l=Da.normal[Math.floor(Math.random()*Da.normal.length)],c=zt.ACK;break;case"HTTPS":r=443,o=Ct(!1),l="TLS Application Data",c=zt.ACK;break;case"DNS":r=53,o=Ct(!1),l=Ra.normal[Math.floor(Math.random()*Ra.normal.length)],c="";break;case"SSH":r=22,o=Ct(!1),l=ch.normal[Math.floor(Math.random()*ch.normal.length)],c=zt.ACK;break;default:r=Ct(!0),o=Ct(!1),l="TCP segment",c=[zt.ACK,zt.PSH,zt["SYN-ACK"]][Math.floor(Math.random()*3)]}return Wn({id:Yn(),timestamp:new Date().toISOString(),sourceIP:s,destIP:i,sourcePort:o,destPort:r,protocol:t,length:or(t.toLowerCase()),flags:c,info:l,payload:"",isMalicious:!1,attackType:null})},Vx=(e,t,s)=>Wn({id:Yn(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:Ct(!1),destPort:s,protocol:"TCP",length:or("tcp"),flags:zt.SYN,info:`SYN scan to port ${s}`,payload:"",isMalicious:!0,attackType:de.PORT_SCAN}),Gx=(e,t,s)=>{const i=[`Authentication failed for ${s}`,`Invalid password for ${s}`,`Failed password for ${s} from ${e}`],r=i[Math.floor(Math.random()*i.length)];return Wn({id:Yn(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:Ct(!1),destPort:22,protocol:"SSH",length:or("ssh"),flags:zt.ACK,info:r,payload:`SSH-2.0-OpenSSH_7.9 [AUTH FAIL: ${s}]`,isMalicious:!0,attackType:de.BRUTE_FORCE_SSH})},$x=(e,t)=>{const s=Da.sqlInjection[Math.floor(Math.random()*Da.sqlInjection.length)];return Wn({id:Yn(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:Ct(!1),destPort:80,protocol:"HTTP",length:or("http"),flags:zt.PSH,info:s,payload:s,isMalicious:!0,attackType:de.SQL_INJECTION})},qx=(e,t,s=5e3,i=15e3)=>{const r=Math.floor(Math.random()*(i-s))+s;return Wn({id:Yn(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:Ct(!1),destPort:443,protocol:"HTTPS",length:r,flags:zt.PSH,info:`Large outbound transfer (${Math.round(r/1024)}KB)`,payload:`[Encrypted data: ${r} bytes]`,isMalicious:!0,attackType:de.DATA_EXFILTRATION})},Xx=(e,t)=>{const s=Ra.tunneling[Math.floor(Math.random()*Ra.tunneling.length)];return Wn({id:Yn(),timestamp:new Date().toISOString(),sourceIP:e,destIP:t,sourcePort:Ct(!1),destPort:53,protocol:"DNS",length:or("dns"),flags:"",info:s,payload:s,isMalicious:!0,attackType:de.DNS_TUNNELING})};class Kx{constructor(t){this.scenario=t,this.isRunning=!1,this.attackStarted=!1,this.attackPortIndex=0,this.attackUsernameIndex=0,this.elapsedTime=0,this.targetIP=Jl(),this.blockedIPs=new Set}start(){this.isRunning=!0,this.attackStarted=!1,this.elapsedTime=0}stop(){this.isRunning=!1}blockIP(t){this.blockedIPs.add(t)}unblockIP(t){this.blockedIPs.delete(t)}isIPBlocked(t){return this.blockedIPs.has(t)}generatePackets(t){if(!this.isRunning)return[];this.elapsedTime+=t;const s=[],{backgroundTraffic:i,attackConfig:r}=this.scenario,o=Math.round(i.packetsPerSecond*t);for(let l=0;l<o;l++)s.push(Yx(i.protocols));if(this.elapsedTime>=r.startDelay&&(this.attackStarted=!0),this.attackStarted&&!this.isIPBlocked(r.attackerIP)){const l=Math.round(r.packetsPerSecond*t);for(let c=0;c<l;c++){const h=this.generateAttackPacket();h&&s.push(h)}}return s}generateAttackPacket(){const{attackType:t,attackConfig:s}=this.scenario;switch(t){case de.PORT_SCAN:{const i=s.targetPorts[this.attackPortIndex%s.targetPorts.length];return this.attackPortIndex++,Vx(s.attackerIP,this.targetIP,i)}case de.BRUTE_FORCE_SSH:{const i=s.usernames[this.attackUsernameIndex%s.usernames.length];return this.attackUsernameIndex++,Gx(s.attackerIP,this.targetIP,i)}case de.SQL_INJECTION:return $x(s.attackerIP,this.targetIP);case de.DATA_EXFILTRATION:return qx(s.sourceIP,s.attackerIP,s.minPacketSize,s.maxPacketSize);case de.DNS_TUNNELING:return Xx(s.sourceIP||this.targetIP,"8.8.8.8");default:return null}}getAttackerIP(){return this.scenario.attackConfig.attackerIP}}const Jx=(e,t=3e4)=>{const s=[];for(const[i,r]of Object.entries(z0))if(r.check){const o=r.check(e,t);o.detected&&s.push({type:i,attackerIP:o.attackerIP,evidence:o.evidence,timestamp:new Date().toISOString(),...Tm[i]})}return s},Qx=(e,t)=>{let s=0;const i=[],r=e.flaggedPackets.filter(p=>p.isMalicious),o=e.flaggedPackets.filter(p=>!p.isMalicious);if(r.length>0){const p=r.length*5;s+=p,i.push({action:"Correctly flagged malicious packets",count:r.length,points:p})}if(o.length>0){const p=o.length*2;s-=p,i.push({action:"False positive flags (penalty)",count:o.length,points:-p})}e.identifiedAttackType===t.attackType&&(s+=15,i.push({action:"Correctly identified attack type",count:1,points:15}));const l=t.attackConfig.attackerIP,c=e.blockedIPs.includes(l),h=e.blockedIPs.filter(p=>p!==l);if(c&&(s+=10,i.push({action:"Blocked attacker IP",count:1,points:10})),h.length>0){const p=h.length*5;s-=p,i.push({action:"Incorrectly blocked innocent IP (penalty)",count:h.length,points:-p})}return e.completedUnderTimeLimit&&s>0&&(s+=5,i.push({action:"Completed under time limit",count:1,points:5})),{total:Math.max(0,s),maxPossible:t.points,breakdown:i,passed:s>=t.points*.6}},Zx=(e,t,s)=>{const i=t.successCriteria,r={allMet:!0,details:[]};if(i.mustBlockAttacker){const o=e.blockedIPs.includes(t.attackConfig.attackerIP);r.details.push({criterion:"Block attacker IP",met:o,description:o?"Attacker IP blocked":"Attacker IP not blocked"}),o||(r.allMet=!1)}if(i.mustIdentifyAttackType){const o=e.identifiedAttackType===t.attackType;r.details.push({criterion:"Identify attack type",met:o,description:o?"Attack type correctly identified":"Attack type not identified"}),o||(r.allMet=!1)}if(i.minMaliciousPacketsFlagged){const o=e.flaggedPackets.filter(c=>c.isMalicious).length,l=o>=i.minMaliciousPacketsFlagged;r.details.push({criterion:`Flag at least ${i.minMaliciousPacketsFlagged} malicious packets`,met:l,description:`Flagged ${o} malicious packets`}),l||(r.allMet=!1)}return r},hh=e=>{switch(e){case"critical":return"#f44336";case"high":return"#ff9800";case"medium":return"#ffeb3b";case"low":return"#4caf50";default:return"#90a4ae"}},Ql=e=>{var t;return((t=Tm[e])==null?void 0:t.name)||e},ev=({scenarios:e,completedScenarios:t,onSelectScenario:s})=>{const i=U0(),r=c=>t.includes(c),o=c=>c.toLowerCase(),l=()=>e.filter(c=>t.includes(c.id)).reduce((c,h)=>c+h.points,0);return n.jsxs("div",{className:"scenario-selector",children:[n.jsxs("div",{className:"scenario-stats",children:[n.jsxs("div",{className:"scenario-stat",children:[n.jsx("span",{className:"stat-value",children:t.length}),n.jsx("span",{className:"stat-label",children:"Completed"})]}),n.jsxs("div",{className:"scenario-stat",children:[n.jsx("span",{className:"stat-value",children:i.total}),n.jsx("span",{className:"stat-label",children:"Total Scenarios"})]}),n.jsxs("div",{className:"scenario-stat",children:[n.jsx("span",{className:"stat-value",children:l()}),n.jsx("span",{className:"stat-label",children:"Points Earned"})]}),n.jsxs("div",{className:"scenario-stat",children:[n.jsx("span",{className:"stat-value",children:i.totalPoints}),n.jsx("span",{className:"stat-label",children:"Total Points"})]})]}),n.jsx("div",{className:"scenario-grid",children:e.map(c=>{const h=r(c.id);return n.jsxs("div",{className:`scenario-card ${h?"completed":""}`,onClick:()=>s(c),children:[h&&n.jsxs("div",{className:"completed-badge",children:[n.jsx("span",{className:"checkmark",children:"✓"}),"Completed"]}),n.jsxs("div",{className:"scenario-header",children:[n.jsx("h3",{children:c.name}),n.jsx("span",{className:`difficulty ${o(c.difficulty)}`,children:c.difficulty})]}),n.jsx("p",{className:"scenario-description",children:c.description}),n.jsxs("div",{className:"scenario-meta",children:[n.jsxs("div",{className:"meta-item",children:[n.jsx("span",{className:"meta-icon",children:"🎯"}),n.jsxs("span",{children:[c.points," points"]})]}),n.jsxs("div",{className:"meta-item",children:[n.jsx("span",{className:"meta-icon",children:"⏱"}),n.jsxs("span",{children:[c.duration,"s"]})]})]}),n.jsxs("div",{className:"scenario-objective",children:[n.jsx("strong",{children:"Learning Objective:"}),n.jsx("p",{children:c.learningObjective})]}),n.jsx("button",{className:"btn-start",children:h?"Play Again":"Start Scenario"})]},c.id)})})]})},tv=({packets:e,selectedPacket:t,flaggedPackets:s,onSelectPacket:i,onFlagPacket:r})=>{const o=A.useRef(null),l=A.useRef(!0);A.useEffect(()=>{o.current&&l.current&&(o.current.scrollTop=o.current.scrollHeight)},[e]);const c=()=>{if(o.current){const{scrollTop:C,scrollHeight:N,clientHeight:I}=o.current;l.current=C+I>=N-50}},h=C=>new Date(C).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:2}),p=C=>{var N;return((N=Bm[C])==null?void 0:N.color)||"#90a4ae"},w=C=>s.some(N=>N.id===C.id),x=C=>{i(C)},v=(C,N)=>{C.stopPropagation(),r(N)};return n.jsxs("div",{className:"packet-list-container",children:[n.jsxs("div",{className:"packet-list-header",children:[n.jsx("h3",{children:"Live Traffic"}),n.jsxs("span",{className:"packet-count",children:[e.length," packets"]})]}),n.jsxs("div",{className:"packet-table-header",children:[n.jsx("div",{className:"col-flag"}),n.jsx("div",{className:"col-time",children:"Time"}),n.jsx("div",{className:"col-src",children:"Source"}),n.jsx("div",{className:"col-dst",children:"Destination"}),n.jsx("div",{className:"col-proto",children:"Protocol"}),n.jsx("div",{className:"col-len",children:"Length"}),n.jsx("div",{className:"col-info",children:"Info"})]}),n.jsxs("div",{className:"packet-list",ref:o,onScroll:c,children:[e.map(C=>n.jsxs("div",{className:`packet-row
              ${(t==null?void 0:t.id)===C.id?"selected":""}
              ${C.isMalicious?"malicious":""}
              ${w(C)?"flagged":""}
            `,onClick:()=>x(C),children:[n.jsx("div",{className:"col-flag",children:n.jsx("button",{className:`flag-btn ${w(C)?"flagged":""}`,onClick:N=>v(N,C),title:w(C)?"Unflag packet":"Flag as suspicious",children:w(C)?"⚑":"⚐"})}),n.jsx("div",{className:"col-time",children:h(C.timestamp)}),n.jsxs("div",{className:"col-src",children:[n.jsx("span",{className:"ip",children:C.sourceIP}),n.jsxs("span",{className:"port",children:[":",C.sourcePort]})]}),n.jsxs("div",{className:"col-dst",children:[n.jsx("span",{className:"ip",children:C.destIP}),n.jsxs("span",{className:"port",children:[":",C.destPort]})]}),n.jsx("div",{className:"col-proto",children:n.jsx("span",{className:"protocol-badge",style:{backgroundColor:p(C.protocol)},children:C.protocol})}),n.jsx("div",{className:"col-len",children:C.length}),n.jsx("div",{className:"col-info",title:C.info,children:C.info})]},C.id)),e.length===0&&n.jsx("div",{className:"packet-list-empty",children:"Waiting for network traffic..."})]})]})},sv=({packet:e,onFlagPacket:t})=>{if(!e)return n.jsx("div",{className:"packet-detail",children:n.jsx("div",{className:"packet-detail-empty",children:"Select a packet to view details"})});const s=r=>new Date(r).toLocaleString("en-US",{year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",fractionalSecondDigits:3,hour12:!1}),i=r=>{var o;return((o=Bm[r])==null?void 0:o.color)||"#90a4ae"};return n.jsxs("div",{className:"packet-detail",children:[n.jsxs("div",{className:"packet-detail-header",children:[n.jsx("h4",{children:"Packet Details"}),n.jsx("div",{className:"packet-detail-actions",children:n.jsx("button",{className:`flag-btn-lg ${e.flaggedByUser?"flagged":""}`,onClick:()=>t(e),children:e.flaggedByUser?"⚑ Flagged":"⚐ Flag as Suspicious"})})]}),n.jsxs("div",{className:"packet-detail-content",children:[n.jsxs("div",{className:"detail-section",children:[n.jsx("h5",{children:"General"}),n.jsxs("div",{className:"detail-grid",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"Packet ID"}),n.jsx("span",{className:"detail-value mono",children:e.id})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"Timestamp"}),n.jsx("span",{className:"detail-value",children:s(e.timestamp)})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"Protocol"}),n.jsx("span",{className:"detail-value protocol-badge",style:{backgroundColor:i(e.protocol)},children:e.protocol})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"Length"}),n.jsxs("span",{className:"detail-value",children:[e.length," bytes"]})]})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h5",{children:"Source"}),n.jsxs("div",{className:"detail-grid",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"IP Address"}),n.jsx("span",{className:"detail-value mono",children:e.sourceIP})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"Port"}),n.jsx("span",{className:"detail-value",children:e.sourcePort})]})]})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h5",{children:"Destination"}),n.jsxs("div",{className:"detail-grid",children:[n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"IP Address"}),n.jsx("span",{className:"detail-value mono",children:e.destIP})]}),n.jsxs("div",{className:"detail-item",children:[n.jsx("span",{className:"detail-label",children:"Port"}),n.jsx("span",{className:"detail-value",children:e.destPort})]})]})]}),e.flags&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h5",{children:"TCP Flags"}),n.jsx("div",{className:"detail-item",children:n.jsx("span",{className:"detail-value mono",children:e.flags})})]}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h5",{children:"Info"}),n.jsx("div",{className:"detail-item full-width",children:n.jsx("span",{className:"detail-value info-box mono",children:e.info})})]}),e.payload&&n.jsxs("div",{className:"detail-section",children:[n.jsx("h5",{children:"Payload"}),n.jsx("div",{className:"detail-item full-width",children:n.jsx("pre",{className:"payload-box",children:e.payload})})]}),e.isMalicious&&n.jsxs("div",{className:"detail-section malicious-warning",children:[n.jsx("h5",{children:"Warning"}),n.jsxs("div",{className:"warning-content",children:[n.jsx("span",{className:"warning-icon",children:"⚠"}),n.jsxs("div",{children:[n.jsx("strong",{children:"Potentially Malicious Traffic"}),e.attackType&&n.jsxs("p",{children:["Attack Type: ",Ql(e.attackType)]})]})]})]})]})]})},nv=({alerts:e,onBlockIP:t})=>{const s=i=>new Date(i).toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});return n.jsxs("div",{className:"alert-panel",children:[n.jsxs("div",{className:"alert-panel-header",children:[n.jsx("h4",{children:"Threat Alerts"}),e.length>0&&n.jsx("span",{className:"alert-count",children:e.length})]}),n.jsx("div",{className:"alert-list",children:e.length===0?n.jsxs("div",{className:"alert-empty",children:[n.jsx("span",{className:"alert-empty-icon",children:"🛡"}),n.jsx("p",{children:"No threats detected yet"}),n.jsx("p",{className:"alert-empty-hint",children:"Monitoring network traffic..."})]}):e.map((i,r)=>n.jsxs("div",{className:"alert-item",style:{borderLeftColor:hh(i.severity)},children:[n.jsxs("div",{className:"alert-header",children:[n.jsx("span",{className:"alert-severity",style:{backgroundColor:hh(i.severity)},children:i.severity.toUpperCase()}),n.jsx("span",{className:"alert-time",children:s(i.timestamp)})]}),n.jsx("div",{className:"alert-title",children:i.name}),n.jsx("div",{className:"alert-description",children:i.description}),n.jsxs("div",{className:"alert-details",children:[n.jsxs("div",{className:"alert-evidence",children:[n.jsx("strong",{children:"Evidence:"})," ",i.evidence]}),n.jsxs("div",{className:"alert-ip",children:[n.jsx("strong",{children:"Source IP:"}),n.jsx("span",{className:"mono",children:i.attackerIP})]})]}),n.jsxs("div",{className:"alert-indicators",children:[n.jsx("strong",{children:"Indicators:"}),n.jsx("ul",{children:i.indicators.slice(0,2).map((o,l)=>n.jsx("li",{children:o},l))})]}),n.jsx("div",{className:"alert-actions",children:n.jsxs("button",{className:"btn-block",onClick:()=>t(i.attackerIP),children:["Block ",i.attackerIP]})})]},`${i.type}-${i.attackerIP}-${r}`))})]})},iv=({blockedIPs:e,attackTypes:t,identifiedAttackType:s,onBlockIP:i,onUnblockIP:r,onIdentifyAttack:o,hints:l})=>{const[c,h]=A.useState(""),[p,w]=A.useState(!1),x=v=>{v.preventDefault();const C=c.trim();C&&/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(C)&&(i(C),h(""))};return n.jsxs("div",{className:"action-panel",children:[n.jsxs("div",{className:"action-section",children:[n.jsx("h4",{children:"Identify Attack Type"}),n.jsx("p",{className:"action-hint",children:"What type of attack is occurring?"}),n.jsx("div",{className:"attack-type-grid",children:t.map(v=>n.jsx("button",{className:`attack-type-btn ${s===v?"selected":""}`,onClick:()=>o(v),children:Ql(v)},v))}),s&&n.jsxs("div",{className:"selected-attack",children:["Selected: ",n.jsx("strong",{children:Ql(s)})]})]}),n.jsxs("div",{className:"action-section",children:[n.jsx("h4",{children:"Firewall Rules"}),n.jsxs("form",{onSubmit:x,className:"block-ip-form",children:[n.jsx("input",{type:"text",placeholder:"Enter IP to block (e.g., 192.168.1.100)",value:c,onChange:v=>h(v.target.value),className:"ip-input"}),n.jsx("button",{type:"submit",className:"btn-block-submit",children:"Block IP"})]}),n.jsxs("div",{className:"blocked-ips",children:[n.jsxs("h5",{children:["Blocked IPs (",e.length,")"]}),e.length===0?n.jsx("p",{className:"no-blocked",children:"No IPs blocked yet"}):n.jsx("ul",{className:"blocked-ip-list",children:e.map(v=>n.jsxs("li",{className:"blocked-ip-item",children:[n.jsx("span",{className:"mono",children:v}),n.jsx("button",{className:"btn-unblock",onClick:()=>r(v),title:"Unblock this IP",children:"×"})]},v))})]})]}),n.jsxs("div",{className:"action-section hints-section",children:[n.jsxs("button",{className:"hints-toggle",onClick:()=>w(!p),children:[p?"Hide Hints":"Show Hints"," 💡"]}),p&&l&&l.length>0&&n.jsx("div",{className:"hints-list",children:l.map((v,C)=>n.jsxs("div",{className:"hint-item",children:[n.jsx("span",{className:"hint-number",children:C+1}),n.jsx("span",{className:"hint-text",children:v})]},C))})]})]})},rv=({completedScenarios:e,onCompleteScenario:t,onBack:s})=>{const[i,r]=A.useState(null),[o,l]=A.useState(!1),[c,h]=A.useState(0),[p,w]=A.useState(!1),[x,v]=A.useState([]),[C,N]=A.useState(null),[I,R]=A.useState({total:0,perSecond:0,bytes:0}),[m,f]=A.useState(!1),[S,D]=A.useState(.5),[O,F]=A.useState([]),[b,g]=A.useState([]),[T,j]=A.useState(null),[P,E]=A.useState([]),[k,Q]=A.useState(null),U=A.useRef(null),K=A.useRef(null),se=A.useRef(Date.now()),_=A.useCallback(Y=>{r(Y),h(Y.duration),v([]),F([]),g([]),j(null),E([]),N(null),Q(null),w(!1),U.current=new Kx(Y),U.current.start(),l(!0),se.current=Date.now()},[]),H=A.useCallback(()=>{l(!1),U.current&&U.current.stop(),K.current&&clearInterval(K.current)},[]),z=A.useCallback(()=>{if(H(),w(!0),!i)return;const Y={flaggedPackets:O,blockedIPs:b,identifiedAttackType:T,completedUnderTimeLimit:c>0},q=Qx(Y,i),ie=Zx(Y,i);Q({score:q,criteria:ie,passed:q.passed&&ie.allMet}),q.passed&&ie.allMet&&t(i.id,q.total)},[i,O,b,T,c,x,H,t]);A.useEffect(()=>{if(!(!o||!U.current))return K.current=setInterval(()=>{if(m){se.current=Date.now();return}const Y=Date.now(),q=(Y-se.current)/1e3;se.current=Y;const ie=q*S,ve=U.current.generatePackets(ie);v(we=>[...we,...ve].slice(-200)),h(we=>{const ye=Math.max(0,we-q);return ye<=0&&z(),ye}),R(we=>({total:we.total+ve.length,perSecond:Math.round(ve.length/(q||.001)),bytes:we.bytes+ve.reduce((ye,Je)=>ye+Je.length,0)}))},400),()=>{K.current&&clearInterval(K.current)}},[o,m,S,z]),A.useEffect(()=>{if(!o||x.length<5)return;const Y=Jx(x,3e4);Y.length>0&&E(q=>{const ie=Y.filter(ve=>!q.some(we=>we.type===ve.type&&we.attackerIP===ve.attackerIP));return[...q,...ie]})},[x,o]);const $=A.useCallback(Y=>{F(q=>q.some(ve=>ve.id===Y.id)?q.filter(ve=>ve.id!==Y.id):[...q,Y]),v(q=>q.map(ie=>ie.id===Y.id?{...ie,flaggedByUser:!ie.flaggedByUser}:ie))},[]),Z=A.useCallback(Y=>{U.current&&U.current.blockIP(Y),g(q=>q.includes(Y)?q:[...q,Y])},[]),W=A.useCallback(Y=>{U.current&&U.current.unblockIP(Y),g(q=>q.filter(ie=>ie!==Y))},[]),J=A.useCallback(Y=>{j(Y)},[]),ee=A.useCallback(()=>{H(),r(null),v([]),Q(null),w(!1)},[H]);return i?p&&k?n.jsxs("div",{className:"network-monitor",children:[n.jsxs("div",{className:"nm-header",children:[n.jsx("h2",{children:"Scenario Complete"}),n.jsx("h3",{children:i.name})]}),n.jsxs("div",{className:"nm-results",children:[n.jsxs("div",{className:`results-summary ${k.passed?"passed":"failed"}`,children:[n.jsx("div",{className:"result-icon",children:k.passed?"✓":"✗"}),n.jsx("h3",{children:k.passed?"Mission Accomplished!":"Mission Failed"}),n.jsxs("div",{className:"result-score",children:["Score: ",k.score.total," / ",k.score.maxPossible," points"]})]}),n.jsxs("div",{className:"results-breakdown",children:[n.jsx("h4",{children:"Score Breakdown"}),k.score.breakdown.map((Y,q)=>n.jsxs("div",{className:`breakdown-item ${Y.points>=0?"positive":"negative"}`,children:[n.jsx("span",{children:Y.action}),n.jsxs("span",{className:"breakdown-count",children:["x",Y.count]}),n.jsxs("span",{className:"breakdown-points",children:[Y.points>=0?"+":"",Y.points]})]},q))]}),n.jsxs("div",{className:"results-criteria",children:[n.jsx("h4",{children:"Success Criteria"}),k.criteria.details.map((Y,q)=>n.jsxs("div",{className:`criteria-item ${Y.met?"met":"not-met"}`,children:[n.jsx("span",{className:"criteria-icon",children:Y.met?"✓":"✗"}),n.jsx("span",{children:Y.criterion}),n.jsx("span",{className:"criteria-desc",children:Y.description})]},q))]}),n.jsxs("div",{className:"results-actions",children:[n.jsx("button",{className:"btn-primary",onClick:()=>_(i),children:"Try Again"}),n.jsx("button",{className:"btn-secondary",onClick:ee,children:"Choose Another Scenario"})]})]})]}):n.jsxs("div",{className:"network-monitor",children:[n.jsxs("div",{className:"nm-header",children:[n.jsx("button",{className:"back-btn",onClick:ee,children:"← Back"}),n.jsxs("div",{className:"nm-title-section",children:[n.jsx("h2",{children:i.name}),n.jsx("span",{className:`difficulty ${i.difficulty}`,children:i.difficulty})]}),n.jsxs("div",{className:"nm-stats",children:[n.jsxs("div",{className:"stat",children:[n.jsx("span",{className:"stat-value",children:Math.ceil(c)}),n.jsx("span",{className:"stat-label",children:"Time Left"})]}),n.jsxs("div",{className:"stat",children:[n.jsx("span",{className:"stat-value",children:I.total}),n.jsx("span",{className:"stat-label",children:"Packets"})]}),n.jsxs("div",{className:"stat",children:[n.jsxs("span",{className:"stat-value",children:[I.perSecond,"/s"]}),n.jsx("span",{className:"stat-label",children:"Rate"})]}),n.jsxs("div",{className:"stat",children:[n.jsxs("span",{className:"stat-value",children:[Math.round(I.bytes/1024),"KB"]}),n.jsx("span",{className:"stat-label",children:"Data"})]})]}),n.jsxs("div",{className:"nm-controls",children:[n.jsx("button",{className:`btn-pause ${m?"paused":""}`,onClick:()=>f(!m),title:m?"Resume packet capture":"Pause to analyze packets",children:m?"▶ Resume":"⏸ Pause"}),n.jsxs("div",{className:"speed-control",children:[n.jsx("label",{children:"Speed:"}),n.jsxs("select",{value:S,onChange:Y=>D(parseFloat(Y.target.value)),title:"Adjust packet speed for easier analysis",children:[n.jsx("option",{value:"0.25",children:"0.25x (Very Slow)"}),n.jsx("option",{value:"0.5",children:"0.5x (Slow - Recommended)"}),n.jsx("option",{value:"1",children:"1x (Normal)"}),n.jsx("option",{value:"2",children:"2x (Fast)"})]})]})]}),n.jsx("button",{className:"btn-complete",onClick:z,children:"Complete Mission"})]}),n.jsxs("div",{className:"nm-objective",children:[n.jsx("strong",{children:"Objective:"})," ",i.description]}),n.jsxs("div",{className:"nm-main-content",children:[n.jsx("div",{className:"nm-left-panel",children:n.jsx(tv,{packets:x,selectedPacket:C,flaggedPackets:O,onSelectPacket:N,onFlagPacket:$})}),n.jsxs("div",{className:"nm-right-panel",children:[n.jsx(nv,{alerts:P,onBlockIP:Z}),n.jsx(iv,{blockedIPs:b,attackTypes:Object.values(de),identifiedAttackType:T,onBlockIP:Z,onUnblockIP:W,onIdentifyAttack:J,hints:i.hints})]})]}),n.jsx("div",{className:"nm-bottom-panel",children:n.jsx(sv,{packet:C,onFlagPacket:$})})]}):n.jsxs("div",{className:"network-monitor",children:[n.jsxs("div",{className:"nm-header",children:[n.jsx("button",{className:"back-btn",onClick:s,children:"← Back to Dashboard"}),n.jsx("h2",{children:"Network Monitor"}),n.jsx("p",{className:"nm-subtitle",children:"Learn to detect and respond to cyber attacks in real-time"})]}),n.jsx(ev,{scenarios:Pt,completedScenarios:e,onSelectScenario:_})]})},av=()=>{const[e,t]=A.useState(""),[s,i]=A.useState(3),[r,o]=A.useState("encrypt"),[l,c]=A.useState(""),h=(x,v,C=!0)=>{const N=C?v:26-v;return x.toUpperCase().split("").map(I=>{if(I>="A"&&I<="Z"){const R=(I.charCodeAt(0)-65+N)%26+65;return String.fromCharCode(R)}return I}).join("")},p=()=>{const x=h(e,parseInt(s),r==="encrypt");c(x)},w=()=>{let x=[];for(let v=1;v<=25;v++)x.push(`Shift ${v}: ${h(e,v,!1)}`);c(x.join(`
`))};return n.jsxs("div",{className:"tool-container",children:[n.jsx("h3",{children:"Caesar Cipher Tool"}),n.jsx("div",{className:"tool-description",children:"The Caesar cipher shifts each letter by a fixed number of positions in the alphabet."}),n.jsxs("div",{className:"tool-controls",children:[n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"Mode:"}),n.jsxs("select",{value:r,onChange:x=>o(x.target.value),children:[n.jsx("option",{value:"encrypt",children:"Encrypt"}),n.jsx("option",{value:"decrypt",children:"Decrypt"})]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"Shift (1-25):"}),n.jsx("input",{type:"number",min:"1",max:"25",value:s,onChange:x=>i(x.target.value)})]})]}),n.jsxs("div",{className:"tool-input",children:[n.jsx("label",{children:"Input Text:"}),n.jsx("textarea",{value:e,onChange:x=>t(x.target.value),placeholder:"Enter text to encrypt or decrypt...",rows:3})]}),n.jsxs("div",{className:"tool-buttons",children:[n.jsx("button",{className:"tool-btn primary",onClick:p,children:r==="encrypt"?"Encrypt":"Decrypt"}),n.jsx("button",{className:"tool-btn secondary",onClick:w,children:"Brute Force (Try All Shifts)"})]}),l&&n.jsxs("div",{className:"tool-output",children:[n.jsx("label",{children:"Output:"}),n.jsx("pre",{children:l})]}),n.jsxs("div",{className:"tool-reference",children:[n.jsx("h4",{children:"Alphabet Reference"}),n.jsxs("div",{className:"alphabet-row",children:[n.jsx("div",{children:"Plain:"}),n.jsx("div",{className:"alphabet",children:"A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"})]}),n.jsxs("div",{className:"alphabet-row",children:[n.jsxs("div",{children:["Shift ",s,":"]}),n.jsx("div",{className:"alphabet",children:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(x=>h(x,parseInt(s),!0)).join(" ")})]})]})]})},ov=()=>{const[e,t]=A.useState(""),[s,i]=A.useState({}),r=async h=>{if(window.crypto&&window.crypto.subtle){const w=new TextEncoder().encode(h);try{const x=await o(h),v=await crypto.subtle.digest("SHA-1",w),C=await crypto.subtle.digest("SHA-256",w);return{md5:x,sha1:Array.from(new Uint8Array(v)).map(N=>N.toString(16).padStart(2,"0")).join(""),sha256:Array.from(new Uint8Array(C)).map(N=>N.toString(16).padStart(2,"0")).join("")}}catch{return l(h)}}return l(h)},o=h=>{let p=0;for(let x=0;x<h.length;x++){const v=h.charCodeAt(x);p=(p<<5)-p+v,p=p&p}const w=Math.abs(p).toString(16).padStart(8,"0");return(w+w+w+w).substring(0,32)},l=h=>{const p=o(h);return{md5:p,sha1:(p+p.substring(0,8)).substring(0,40),sha256:(p+p).substring(0,64)}},c=async()=>{if(e){const h=await r(e);i(h)}};return n.jsxs("div",{className:"tool-container",children:[n.jsx("h3",{children:"Hash Generator"}),n.jsx("div",{className:"tool-description",children:'Hash functions create a unique "fingerprint" of data. They are one-way functions - you cannot reverse a hash to get the original input.'}),n.jsxs("div",{className:"tool-input",children:[n.jsx("label",{children:"Input Text:"}),n.jsx("textarea",{value:e,onChange:h=>t(h.target.value),placeholder:"Enter text to hash...",rows:2})]}),n.jsx("button",{className:"tool-btn primary",onClick:c,children:"Generate Hashes"}),Object.keys(s).length>0&&n.jsxs("div",{className:"tool-output",children:[n.jsxs("div",{className:"hash-result",children:[n.jsx("label",{children:"MD5 (32 chars - INSECURE):"}),n.jsx("code",{className:"hash-value",children:s.md5})]}),n.jsxs("div",{className:"hash-result",children:[n.jsx("label",{children:"SHA-1 (40 chars - INSECURE):"}),n.jsx("code",{className:"hash-value",children:s.sha1})]}),n.jsxs("div",{className:"hash-result",children:[n.jsx("label",{children:"SHA-256 (64 chars - SECURE):"}),n.jsx("code",{className:"hash-value",children:s.sha256})]})]}),n.jsxs("div",{className:"tool-reference",children:[n.jsx("h4",{children:"Hash Properties"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{children:"Deterministic:"})," Same input = same hash"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"One-way:"})," Cannot reverse to get input"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Avalanche effect:"})," Small change = completely different hash"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Fixed size:"})," Any input produces same length output"]})]})]})]})},lv=()=>{const[e,t]=A.useState(""),[s,i]=A.useState(""),[r,o]=A.useState("encode"),l=()=>{try{i(r==="encode"?btoa(e):atob(e))}catch{i("Error: Invalid input for "+r)}};return n.jsxs("div",{className:"tool-container",children:[n.jsx("h3",{children:"Base64 Encoder/Decoder"}),n.jsx("div",{className:"tool-description",children:"Base64 is an encoding scheme (NOT encryption!) that converts binary data to ASCII text. It's commonly used for transmitting data."}),n.jsx("div",{className:"tool-controls",children:n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"Mode:"}),n.jsxs("select",{value:r,onChange:c=>o(c.target.value),children:[n.jsx("option",{value:"encode",children:"Encode"}),n.jsx("option",{value:"decode",children:"Decode"})]})]})}),n.jsxs("div",{className:"tool-input",children:[n.jsx("label",{children:"Input:"}),n.jsx("textarea",{value:e,onChange:c=>t(c.target.value),placeholder:r==="encode"?"Enter text to encode...":"Enter Base64 to decode...",rows:3})]}),n.jsx("button",{className:"tool-btn primary",onClick:l,children:r==="encode"?"Encode to Base64":"Decode from Base64"}),s&&n.jsxs("div",{className:"tool-output",children:[n.jsx("label",{children:"Output:"}),n.jsx("pre",{children:s})]}),n.jsx("div",{className:"tool-warning",children:'Base64 is NOT encryption! Anyone can decode Base64. Never use it to "secure" sensitive data.'})]})},cv=()=>{const[e,t]=A.useState(""),[s,i]=A.useState(""),[r,o]=A.useState("textToHex"),l=p=>p.split("").map(w=>w.charCodeAt(0).toString(16).padStart(2,"0")).join(""),c=p=>{const w=p.replace(/\s/g,"");let x="";for(let v=0;v<w.length;v+=2)x+=String.fromCharCode(parseInt(w.substr(v,2),16));return x},h=()=>{try{i(r==="textToHex"?l(e):c(e))}catch{i("Error: Invalid input")}};return n.jsxs("div",{className:"tool-container",children:[n.jsx("h3",{children:"Hex Converter"}),n.jsx("div",{className:"tool-description",children:"Hexadecimal is base-16 (0-9, A-F). Each pair of hex digits represents one byte (ASCII character)."}),n.jsx("div",{className:"tool-controls",children:n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"Mode:"}),n.jsxs("select",{value:r,onChange:p=>o(p.target.value),children:[n.jsx("option",{value:"textToHex",children:"Text → Hex"}),n.jsx("option",{value:"hexToText",children:"Hex → Text"})]})]})}),n.jsxs("div",{className:"tool-input",children:[n.jsx("label",{children:"Input:"}),n.jsx("textarea",{value:e,onChange:p=>t(p.target.value),placeholder:r==="textToHex"?"Enter text...":"Enter hex (e.g., 48454c4c4f)...",rows:2})]}),n.jsx("button",{className:"tool-btn primary",onClick:h,children:"Convert"}),s&&n.jsxs("div",{className:"tool-output",children:[n.jsx("label",{children:"Output:"}),n.jsx("pre",{children:s})]}),n.jsxs("div",{className:"tool-reference",children:[n.jsx("h4",{children:"ASCII Reference"}),n.jsxs("div",{className:"ascii-table",children:[n.jsx("span",{children:"A=41"})," ",n.jsx("span",{children:"B=42"})," ",n.jsx("span",{children:"C=43"})," ",n.jsx("span",{children:"0=30"})," ",n.jsx("span",{children:"1=31"})]})]})]})},dv=()=>{const[e,t]=A.useState("192.168.1.100"),[s,i]=A.useState(!1),[r,o]=A.useState([]),l=[{port:21,service:"FTP",status:"closed"},{port:22,service:"SSH",status:"open"},{port:23,service:"Telnet",status:"closed"},{port:25,service:"SMTP",status:"closed"},{port:53,service:"DNS",status:"closed"},{port:80,service:"HTTP",status:"open"},{port:443,service:"HTTPS",status:"open"},{port:445,service:"SMB",status:"closed"},{port:3306,service:"MySQL",status:"closed"},{port:3389,service:"RDP",status:"filtered"}],c=()=>{i(!0),o([]);let h=0;const p=setInterval(()=>{if(h<l.length){const w={...l[h]};Math.random()>.7&&w.status==="closed"&&(w.status="open"),o(x=>[...x,w]),h++}else clearInterval(p),i(!1)},300)};return n.jsxs("div",{className:"tool-container",children:[n.jsx("h3",{children:"Port Scanner Simulator"}),n.jsxs("div",{className:"tool-description",children:["Port scanning discovers which ports are open on a target system, revealing running services.",n.jsx("strong",{children:" Note: Only scan systems you own or have permission to test!"})]}),n.jsxs("div",{className:"tool-input",children:[n.jsx("label",{children:"Target IP (Simulated):"}),n.jsx("input",{type:"text",value:e,onChange:h=>t(h.target.value),placeholder:"192.168.1.100"})]}),n.jsx("button",{className:"tool-btn primary",onClick:c,disabled:s,children:s?"Scanning...":"Start Scan"}),r.length>0&&n.jsxs("div",{className:"tool-output",children:[n.jsxs("label",{children:["Scan Results for ",e,":"]}),n.jsxs("table",{className:"scan-results",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Port"}),n.jsx("th",{children:"Service"}),n.jsx("th",{children:"Status"})]})}),n.jsx("tbody",{children:r.map((h,p)=>n.jsxs("tr",{className:`port-${h.status}`,children:[n.jsx("td",{children:h.port}),n.jsx("td",{children:h.service}),n.jsx("td",{className:`status-${h.status}`,children:h.status.toUpperCase()})]},p))})]})]}),n.jsxs("div",{className:"tool-reference",children:[n.jsx("h4",{children:"Port Status Meanings"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("strong",{className:"status-open",children:"OPEN:"})," Service is accepting connections"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"status-closed",children:"CLOSED:"})," Port responds but no service"]}),n.jsxs("li",{children:[n.jsx("strong",{className:"status-filtered",children:"FILTERED:"})," Firewall blocking probe"]})]})]})]})},uv=()=>{const[e,t]=A.useState(""),[s,i]=A.useState(""),[r,o]=A.useState(""),[l,c]=A.useState(""),[h,p]=A.useState(""),[w,x]=A.useState(""),v=()=>{let N=[];e&&N.push(`site:${e}`),s&&N.push(`filetype:${s}`),r&&N.push(`inurl:${r}`),l&&N.push(`intitle:${l}`),h&&N.push(`"${h}"`),x(N.join(" "))},C=[{name:"Find Login Pages",dork:"site:example.com inurl:login OR inurl:signin"},{name:"Find PDF Documents",dork:"site:example.com filetype:pdf"},{name:"Find Exposed Configs",dork:"filetype:env OR filetype:config"},{name:"Find Directory Listings",dork:'intitle:"index of"'}];return n.jsxs("div",{className:"tool-container",children:[n.jsx("h3",{children:"Google Dork Builder"}),n.jsx("div",{className:"tool-description",children:"Build advanced Google search queries to find specific information. Use responsibly for authorized security testing only."}),n.jsxs("div",{className:"dork-builder",children:[n.jsxs("div",{className:"dork-inputs",children:[n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"site: (domain)"}),n.jsx("input",{type:"text",value:e,onChange:N=>t(N.target.value),placeholder:"example.com"})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"filetype:"}),n.jsxs("select",{value:s,onChange:N=>i(N.target.value),children:[n.jsx("option",{value:"",children:"None"}),n.jsx("option",{value:"pdf",children:"PDF"}),n.jsx("option",{value:"doc",children:"DOC"}),n.jsx("option",{value:"xls",children:"XLS"}),n.jsx("option",{value:"txt",children:"TXT"}),n.jsx("option",{value:"sql",children:"SQL"})]})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"inurl:"}),n.jsx("input",{type:"text",value:r,onChange:N=>o(N.target.value),placeholder:"admin"})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"intitle:"}),n.jsx("input",{type:"text",value:l,onChange:N=>c(N.target.value),placeholder:"login"})]}),n.jsxs("div",{className:"control-group",children:[n.jsx("label",{children:"Keyword:"}),n.jsx("input",{type:"text",value:h,onChange:N=>p(N.target.value),placeholder:"confidential"})]})]}),n.jsx("button",{className:"tool-btn primary",onClick:v,children:"Build Dork"}),w&&n.jsxs("div",{className:"tool-output",children:[n.jsx("label",{children:"Generated Dork:"}),n.jsx("code",{className:"dork-result",children:w})]})]}),n.jsxs("div",{className:"tool-reference",children:[n.jsx("h4",{children:"Preset Examples"}),n.jsx("div",{className:"preset-dorks",children:C.map((N,I)=>n.jsxs("div",{className:"preset-item",children:[n.jsxs("strong",{children:[N.name,":"]}),n.jsx("code",{children:N.dork})]},I))})]}),n.jsx("div",{className:"tool-warning",children:"Only use Google dorking for authorized security testing or educational purposes."})]})},hv=({onBack:e})=>{var o;const[t,s]=A.useState(null),i=[{id:"caesar",name:"Caesar Cipher",icon:"🔐",category:"Cryptography",component:av},{id:"hash",name:"Hash Generator",icon:"#️⃣",category:"Cryptography",component:ov},{id:"base64",name:"Base64 Encoder",icon:"📝",category:"Encoding",component:lv},{id:"hex",name:"Hex Converter",icon:"🔢",category:"Encoding",component:cv},{id:"portscan",name:"Port Scanner",icon:"🔍",category:"Network",component:dv},{id:"dork",name:"Google Dork Builder",icon:"🔎",category:"Reconnaissance",component:uv}],r=t?(o=i.find(l=>l.id===t))==null?void 0:o.component:null;return n.jsxs("div",{className:"interactive-tools",children:[n.jsxs("div",{className:"tools-header",children:[n.jsx("h2",{children:"Interactive Security Tools"}),n.jsx("p",{children:"Hands-on tools to practice cybersecurity concepts"})]}),t?n.jsxs("div",{className:"tool-view",children:[n.jsx("button",{className:"back-btn",onClick:()=>s(null),children:"← Back to Tools"}),r&&n.jsx(r,{})]}):n.jsx("div",{className:"tools-grid",children:i.map(l=>n.jsxs("div",{className:"tool-card",onClick:()=>s(l.id),children:[n.jsx("div",{className:"tool-icon",children:l.icon}),n.jsx("h3",{children:l.name}),n.jsx("span",{className:"tool-category",children:l.category})]},l.id))}),n.jsx("button",{className:"back-btn",onClick:e,style:{marginTop:"2rem"},children:"← Back to Dashboard"})]})},pv=({onLogin:e,onTeacherLogin:t})=>{const[s,i]=A.useState(""),[r,o]=A.useState(""),[l,c]=A.useState(""),[h,p]=A.useState(!1);return n.jsx("div",{className:"login-container",children:n.jsxs("div",{className:"login-card",children:[n.jsxs("div",{className:"login-header",children:[n.jsx("h1",{children:"CyberEd Range"}),n.jsx("p",{children:"Setup Required"})]}),n.jsxs("div",{className:"setup-warning",children:[n.jsx("h3",{children:"Firebase Configuration Needed"}),n.jsx("p",{children:"To enable multi-student mode, please configure Firebase:"}),n.jsxs("ol",{children:[n.jsxs("li",{children:["Create a Firebase project at ",n.jsx("a",{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer",children:"console.firebase.google.com"})]}),n.jsx("li",{children:"Enable Firestore Database"}),n.jsxs("li",{children:["Copy your config to ",n.jsx("code",{children:"src/config/firebase.js"})]}),n.jsxs("li",{children:["Or create a ",n.jsx("code",{children:".env"})," file with VITE_FIREBASE_* variables"]})]}),n.jsx("button",{className:"btn-primary",onClick:()=>e({id:"demo",name:"Demo User",classCode:"DEMO"}),children:"Continue in Demo Mode"})]})]})})},mv=({classCode:e,assignments:t,onAssignmentCreated:s})=>{const[i,r]=A.useState(null),[o,l]=A.useState(null),c=x=>t.some(v=>v.type===x),h=async x=>{if(c(x)){alert(`${re[x].name} is already assigned to this class.`);return}r(x);try{const v=re[x].units.map(C=>C.id);await Ax(e,{type:x,items:v,title:re[x].name}),s&&s()}catch(v){console.error("Error creating assignment:",v),alert("Failed to create assignment. Please try again.")}finally{r(null)}},p=async x=>{if(confirm("Are you sure you want to remove this module assignment?")){l(x);try{await Ix(e,x)}catch(v){console.error("Error deleting assignment:",v),alert("Failed to delete assignment.")}finally{l(null)}}},w=x=>x?new Date(x).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Unknown";return n.jsxs("div",{className:"assignment-manager",children:[n.jsxs("div",{className:"am-header",children:[n.jsx("h3",{children:"Module Assignments"}),n.jsx("p",{className:"am-subtitle",children:"Assign entire modules to give students access to all content within."})]}),n.jsxs("div",{className:"am-modules",children:[n.jsxs("div",{className:`am-module-card cyber ${c("cyber-range")?"assigned":""}`,children:[n.jsx("div",{className:"am-module-icon",children:re["cyber-range"].icon}),n.jsxs("div",{className:"am-module-info",children:[n.jsx("h4",{children:re["cyber-range"].name}),n.jsx("p",{children:re["cyber-range"].description}),n.jsxs("span",{className:"am-module-count",children:[re["cyber-range"].units.length," categories"]})]}),n.jsx("div",{className:"am-module-action",children:c("cyber-range")?n.jsxs("div",{className:"am-assigned-info",children:[n.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),n.jsx("button",{className:"am-remove-btn",onClick:()=>{const x=t.find(v=>v.type==="cyber-range");x&&p(x.id)},disabled:o,children:"Remove"})]}):n.jsx("button",{className:"am-btn cyber",onClick:()=>h("cyber-range"),disabled:i==="cyber-range",children:i==="cyber-range"?"Assigning...":"Assign Module"})})]}),n.jsxs("div",{className:`am-module-card programming ${c("arrays-loops")?"assigned":""}`,children:[n.jsx("div",{className:"am-module-icon",children:re["arrays-loops"].icon}),n.jsxs("div",{className:"am-module-info",children:[n.jsx("h4",{children:re["arrays-loops"].name}),n.jsx("p",{children:re["arrays-loops"].description}),n.jsxs("span",{className:"am-module-count",children:[re["arrays-loops"].units.length," weeks"]})]}),n.jsx("div",{className:"am-module-action",children:c("arrays-loops")?n.jsxs("div",{className:"am-assigned-info",children:[n.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),n.jsx("button",{className:"am-remove-btn",onClick:()=>{const x=t.find(v=>v.type==="arrays-loops");x&&p(x.id)},disabled:o,children:"Remove"})]}):n.jsx("button",{className:"am-btn programming",onClick:()=>h("arrays-loops"),disabled:i==="arrays-loops",children:i==="arrays-loops"?"Assigning...":"Assign Module"})})]}),n.jsxs("div",{className:`am-module-card apcsp ${c("ap-csp")?"assigned":""}`,children:[n.jsx("div",{className:"am-module-icon",children:re["ap-csp"].icon}),n.jsxs("div",{className:"am-module-info",children:[n.jsx("h4",{children:re["ap-csp"].name}),n.jsx("p",{children:re["ap-csp"].description}),n.jsxs("span",{className:"am-module-count",children:[re["ap-csp"].units.length," modules"]})]}),n.jsx("div",{className:"am-module-action",children:c("ap-csp")?n.jsxs("div",{className:"am-assigned-info",children:[n.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),n.jsx("button",{className:"am-remove-btn",onClick:()=>{const x=t.find(v=>v.type==="ap-csp");x&&p(x.id)},disabled:o,children:"Remove"})]}):n.jsx("button",{className:"am-btn apcsp",onClick:()=>h("ap-csp"),disabled:i==="ap-csp",children:i==="ap-csp"?"Assigning...":"Assign Module"})})]}),n.jsxs("div",{className:`am-module-card data-apis ${c("data-apis")?"assigned":""}`,children:[n.jsx("div",{className:"am-module-icon",children:re["data-apis"].icon}),n.jsxs("div",{className:"am-module-info",children:[n.jsx("h4",{children:re["data-apis"].name}),n.jsx("p",{children:re["data-apis"].description}),n.jsxs("span",{className:"am-module-count",children:[re["data-apis"].units.length," weeks"]})]}),n.jsx("div",{className:"am-module-action",children:c("data-apis")?n.jsxs("div",{className:"am-assigned-info",children:[n.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),n.jsx("button",{className:"am-remove-btn",onClick:()=>{const x=t.find(v=>v.type==="data-apis");x&&p(x.id)},disabled:o,children:"Remove"})]}):n.jsx("button",{className:"am-btn data-apis",onClick:()=>h("data-apis"),disabled:i==="data-apis",children:i==="data-apis"?"Assigning...":"Assign Module"})})]}),n.jsxs("div",{className:`am-module-card objects-images ${c("objects-images")?"assigned":""}`,children:[n.jsx("div",{className:"am-module-icon",children:re["objects-images"].icon}),n.jsxs("div",{className:"am-module-info",children:[n.jsx("h4",{children:re["objects-images"].name}),n.jsx("p",{children:re["objects-images"].description}),n.jsxs("span",{className:"am-module-count",children:[re["objects-images"].units.length," weeks"]})]}),n.jsx("div",{className:"am-module-action",children:c("objects-images")?n.jsxs("div",{className:"am-assigned-info",children:[n.jsx("span",{className:"am-assigned-badge",children:"Assigned"}),n.jsx("button",{className:"am-remove-btn",onClick:()=>{const x=t.find(v=>v.type==="objects-images");x&&p(x.id)},disabled:o,children:"Remove"})]}):n.jsx("button",{className:"am-btn objects-images",onClick:()=>h("objects-images"),disabled:i==="objects-images",children:i==="objects-images"?"Assigning...":"Assign Module"})})]})]}),t.length>0&&n.jsxs("div",{className:"am-current",children:[n.jsx("h4",{children:"Current Assignments"}),t.map(x=>{var v,C,N;return n.jsxs("div",{className:"am-current-item",children:[n.jsxs("span",{className:"am-type-badge",style:{backgroundColor:((v=re[x.type])==null?void 0:v.color)||"#888"},children:[(C=re[x.type])==null?void 0:C.icon," ",(N=re[x.type])==null?void 0:N.name]}),n.jsxs("span",{className:"am-date",children:["Assigned: ",w(x.assignedAt)]})]},x.id)})]})]})},fv=({classCode:e})=>{const[t,s]=A.useState(null),[i,r]=A.useState(null),[o,l]=A.useState(null),[c,h]=A.useState("list"),p=(N,I)=>{if(N==="cyber-range")return _n[I]||[];if(N==="arrays-loops"){const R=ar[I];if(!R||!R.days)return[];const m=[];return R.days.forEach(f=>{f.exercises&&f.exercises.forEach(S=>{m.push({...S,dayTitle:f.title,dayNumber:f.day})})}),m}else if(N==="data-apis"){const R=qc[I];if(!R||!R.days)return[];const m=[];return R.days.forEach(f=>{f.exercises&&f.exercises.forEach(S=>{m.push({...S,dayTitle:f.title,dayNumber:f.day})})}),m}else if(N==="objects-images"){const R=Mn[I];if(!R||!R.days)return[];const m=[];return R.days.forEach(f=>{f.exercises&&f.exercises.forEach(S=>{m.push({...S,dayTitle:f.title,dayNumber:f.day})})}),m}else if(N==="ap-csp")return[];return[]},w=N=>{s(N),r(null),l(null),h("list")},x=N=>{r(N),l(null),h("list")},v=()=>{o?l(null):i?(r(null),h("list")):t&&s(null)},C=()=>{window.print()};if(!t)return n.jsxs("div",{className:"activity-manager",children:[n.jsxs("div",{className:"am-header",children:[n.jsx("h3",{children:"Activity Manager & Answer Keys"}),n.jsx("p",{className:"am-subtitle",children:"View activities, exemplar responses, and answer keys for each module"})]}),n.jsx("div",{className:"am-modules",children:Object.entries(re).map(([N,I])=>n.jsxs("div",{className:`am-module-card ${N}`,onClick:()=>w(N),style:{cursor:"pointer"},children:[n.jsx("div",{className:"am-module-icon",children:I.icon}),n.jsxs("div",{className:"am-module-info",children:[n.jsx("h4",{children:I.name}),n.jsx("p",{children:I.description}),n.jsxs("span",{className:"am-module-count",children:[I.units.length," ",N==="arrays-loops"?"weeks":"units"]})]}),n.jsx("div",{className:"am-module-arrow",children:"→"})]},N))})]});if(t&&!i){const N=re[t];return n.jsxs("div",{className:"activity-manager",children:[n.jsxs("div",{className:"am-header",children:[n.jsx("button",{className:"am-back-btn",onClick:v,children:"← Back"}),n.jsxs("h3",{children:[N.icon," ",N.name]}),n.jsx("p",{className:"am-subtitle",children:"Select a unit to view activities and answer keys"})]}),n.jsx("div",{className:"am-units-list",children:N.units.map(I=>{const R=p(t,I.id);return n.jsxs("div",{className:"am-unit-card",onClick:()=>x(I.id),style:{cursor:"pointer"},children:[n.jsxs("div",{className:"am-unit-info",children:[n.jsx("h4",{children:I.name}),n.jsx("p",{children:I.description})]}),n.jsxs("div",{className:"am-unit-stats",children:[n.jsxs("span",{className:"am-activity-count",children:[R.length," activities"]}),n.jsx("span",{className:"am-arrow",children:"→"})]})]},I.id)})})]})}if(t&&i&&!o){const I=re[t].units.find(m=>m.id===i),R=p(t,i);return n.jsxs("div",{className:"activity-manager",children:[n.jsxs("div",{className:"am-header",children:[n.jsx("button",{className:"am-back-btn",onClick:v,children:"← Back"}),n.jsx("h3",{children:(I==null?void 0:I.name)||i}),n.jsxs("p",{className:"am-subtitle",children:[R.length," activities"]})]}),n.jsxs("div",{className:"am-view-toggle",children:[n.jsx("button",{className:`am-toggle-btn ${c==="list"?"active":""}`,onClick:()=>h("list"),children:"Activity List"}),n.jsx("button",{className:`am-toggle-btn ${c==="answerKey"?"active":""}`,onClick:()=>h("answerKey"),children:"📋 Answer Key"}),c==="answerKey"&&n.jsx("button",{className:"am-print-btn",onClick:C,children:"🖨️ Print"})]}),c==="list"?n.jsx("div",{className:"am-activities-list",children:R.length===0?n.jsxs("div",{className:"am-empty",children:[n.jsx("p",{children:"No activities found for this unit."}),n.jsx("p",{className:"am-empty-hint",children:"Activities for AP CSP modules are managed in the pseudocode and flowchart data files."})]}):R.map((m,f)=>n.jsxs("div",{className:"am-activity-card",children:[n.jsxs("div",{className:"am-activity-header",children:[n.jsxs("span",{className:"am-activity-number",children:["#",f+1]}),n.jsx("h4",{children:m.title||m.name||`Activity ${f+1}`}),m.difficulty&&n.jsx("span",{className:`am-difficulty ${m.difficulty.toLowerCase()}`,children:m.difficulty})]}),n.jsxs("div",{className:"am-activity-body",children:[m.description&&n.jsx("p",{className:"am-activity-desc",children:m.description}),m.dayTitle&&n.jsxs("p",{className:"am-activity-day",children:["Day ",m.dayNumber,": ",m.dayTitle]}),n.jsx("div",{className:"am-activity-meta",children:m.points&&n.jsxs("span",{className:"am-points",children:[m.points," pts"]})})]}),n.jsx("div",{className:"am-activity-actions",children:n.jsx("button",{className:"am-view-btn",onClick:()=>l(m),children:"View Details & Answer"})})]},m.id||f))}):n.jsxs("div",{className:"am-answer-key",children:[n.jsxs("div",{className:"am-answer-key-header",children:[n.jsxs("h2",{children:["📋 Answer Key: ",I==null?void 0:I.name]}),n.jsx("p",{children:"Exemplar responses and solutions for all activities"})]}),R.map((m,f)=>n.jsxs("div",{className:"am-answer-item",children:[n.jsxs("div",{className:"am-answer-question",children:[n.jsxs("span",{className:"am-answer-num",children:["#",f+1]}),n.jsxs("div",{className:"am-answer-title",children:[n.jsx("strong",{children:m.title||m.name}),n.jsxs("span",{className:"am-answer-points",children:[m.points," pts"]})]})]}),m.prompt&&n.jsxs("div",{className:"am-answer-prompt",children:[n.jsx("label",{children:"Challenge/Prompt:"}),n.jsx("pre",{children:m.prompt})]}),n.jsxs("div",{className:"am-answer-response",children:[m.flag&&n.jsxs("div",{className:"am-answer-box flag",children:[n.jsx("label",{children:"🚩 Flag:"}),n.jsx("code",{children:m.flag})]}),m.answer&&n.jsxs("div",{className:"am-answer-box answer",children:[n.jsx("label",{children:"✓ Answer:"}),n.jsx("code",{children:typeof m.answer=="object"?JSON.stringify(m.answer):m.answer})]}),m.explanation&&n.jsxs("div",{className:"am-answer-box explanation",children:[n.jsx("label",{children:"📝 Explanation:"}),n.jsx("p",{children:m.explanation})]}),m.solutionCode&&n.jsxs("div",{className:"am-answer-box solution",children:[n.jsx("label",{children:"💻 Exemplar Code Solution:"}),n.jsx("pre",{className:"am-code-block",children:m.solutionCode})]}),m.rubric&&n.jsxs("div",{className:"am-answer-box rubric",children:[n.jsx("label",{children:"📊 Grading Rubric:"}),n.jsx("ul",{className:"am-rubric-list",children:Object.entries(m.rubric).map(([S,D])=>n.jsxs("li",{children:[n.jsxs("strong",{children:[S,":"]})," ",D]},S))})]}),m.hints&&m.hints.length>0&&n.jsxs("div",{className:"am-answer-box hints",children:[n.jsx("label",{children:"💡 Hints (for scaffolding):"}),n.jsx("ol",{children:m.hints.map((S,D)=>n.jsx("li",{children:S},D))})]}),m.learningObjective&&n.jsxs("div",{className:"am-answer-box objective",children:[n.jsx("label",{children:"🎯 Learning Objective:"}),n.jsx("p",{children:m.learningObjective})]})]})]},m.id||f))]})]})}return o?n.jsxs("div",{className:"activity-manager",children:[n.jsxs("div",{className:"am-header",children:[n.jsx("button",{className:"am-back-btn",onClick:v,children:"← Back to List"}),n.jsx("h3",{children:o.title||o.name}),n.jsx("button",{className:"am-print-btn",onClick:C,children:"🖨️ Print"})]}),n.jsxs("div",{className:"am-activity-detail",children:[n.jsxs("div",{className:"am-detail-section",children:[n.jsx("h4",{children:"📋 Activity Overview"}),n.jsxs("div",{className:"am-detail-row",children:[n.jsx("label",{children:"Title:"}),n.jsx("span",{children:o.title||o.name})]}),o.difficulty&&n.jsxs("div",{className:"am-detail-row",children:[n.jsx("label",{children:"Difficulty:"}),n.jsx("span",{className:`am-difficulty ${o.difficulty.toLowerCase()}`,children:o.difficulty})]}),o.points&&n.jsxs("div",{className:"am-detail-row",children:[n.jsx("label",{children:"Points:"}),n.jsx("span",{children:o.points})]}),o.dayTitle&&n.jsxs("div",{className:"am-detail-row",children:[n.jsx("label",{children:"Day:"}),n.jsxs("span",{children:["Day ",o.dayNumber,": ",o.dayTitle]})]})]}),o.description&&n.jsxs("div",{className:"am-detail-section",children:[n.jsx("h4",{children:"📖 Description"}),n.jsx("p",{children:o.description})]}),o.learningObjective&&n.jsxs("div",{className:"am-detail-section objective",children:[n.jsx("h4",{children:"🎯 Learning Objective"}),n.jsx("p",{children:o.learningObjective})]}),o.prompt&&n.jsxs("div",{className:"am-detail-section",children:[n.jsx("h4",{children:"❓ Challenge/Prompt"}),n.jsx("pre",{className:"am-prompt-block",children:o.prompt})]}),n.jsxs("div",{className:"am-teacher-section",children:[n.jsx("h4",{children:"🔑 TEACHER ANSWER KEY"}),o.flag&&n.jsxs("div",{className:"am-answer-box flag",children:[n.jsx("label",{children:"🚩 Flag:"}),n.jsx("code",{className:"am-flag",children:o.flag})]}),o.answer&&n.jsxs("div",{className:"am-answer-box answer",children:[n.jsx("label",{children:"✓ Correct Answer:"}),n.jsx("code",{className:"am-answer",children:typeof o.answer=="object"?JSON.stringify(o.answer,null,2):o.answer})]}),o.solutionCode&&n.jsxs("div",{className:"am-answer-box solution",children:[n.jsx("label",{children:"💻 Exemplar Code Solution:"}),n.jsx("pre",{className:"am-code-block",children:o.solutionCode})]}),o.explanation&&n.jsxs("div",{className:"am-answer-box explanation",children:[n.jsx("label",{children:"📝 Explanation for Students:"}),n.jsx("p",{children:o.explanation})]})]}),o.hints&&o.hints.length>0&&n.jsxs("div",{className:"am-detail-section",children:[n.jsx("h4",{children:"💡 Hints (for scaffolding)"}),n.jsx("ol",{className:"am-hints-list",children:o.hints.map((N,I)=>n.jsx("li",{children:N},I))})]}),o.rubric&&n.jsxs("div",{className:"am-detail-section rubric",children:[n.jsx("h4",{children:"📊 Grading Rubric"}),n.jsxs("table",{className:"am-rubric-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Criterion"}),n.jsx("th",{children:"Description"})]})}),n.jsx("tbody",{children:Object.entries(o.rubric).map(([N,I])=>n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("strong",{children:N})}),n.jsx("td",{children:I})]},N))})]})]}),o.vocabularyTerms&&o.vocabularyTerms.length>0&&n.jsxs("div",{className:"am-detail-section",children:[n.jsx("h4",{children:"📚 Related Vocabulary"}),n.jsx("div",{className:"am-vocab-tags",children:o.vocabularyTerms.map((N,I)=>n.jsx("span",{className:"am-vocab-tag",children:N},I))})]})]})]}):null},gv=({classCode:e})=>{const[t,s]=A.useState(null);return n.jsxs("div",{className:"module-editor",children:[n.jsxs("div",{className:"me-header",children:[n.jsx("h3",{children:"Module Content"}),n.jsx("p",{className:"me-subtitle",children:"View and manage module content for your class."})]}),n.jsx("div",{className:"me-modules",children:Object.entries(re).map(([i,r])=>n.jsxs("div",{className:`me-module-card ${t===i?"selected":""}`,onClick:()=>s(t===i?null:i),children:[n.jsxs("div",{className:"me-module-header",children:[n.jsx("span",{className:"me-module-icon",children:r.icon}),n.jsx("h4",{children:r.name})]}),n.jsx("p",{className:"me-module-description",children:r.description}),n.jsxs("span",{className:"me-unit-count",children:[r.units.length," units"]}),t===i&&n.jsxs("div",{className:"me-units-list",children:[n.jsx("h5",{children:"Units:"}),n.jsx("ul",{children:r.units.map(o=>n.jsxs("li",{children:[n.jsx("strong",{children:o.name}),n.jsx("span",{className:"me-unit-desc",children:o.description})]},o.id))})]})]},i))})]})},yv=({classCode:e})=>{const[t,s]=A.useState([]),[i,r]=A.useState(!0),[o,l]=A.useState("all"),[c,h]=A.useState("all"),[p,w]=A.useState(""),[x,v]=A.useState(null);A.useEffect(()=>{C()},[e]);const C=async()=>{r(!0);try{const f=await Nx(e);f.sort((S,D)=>{const O=S.submittedAt?new Date(S.submittedAt).getTime():0;return(D.submittedAt?new Date(D.submittedAt).getTime():0)-O}),s(f)}catch(f){console.error("Error loading submissions:",f)}r(!1)},N=t.filter(f=>{var S,D,O;if(o==="correct"&&!f.isCorrect||o==="incorrect"&&f.isCorrect||c!=="all"&&f.exerciseType!==c)return!1;if(p){const F=p.toLowerCase(),b=(S=f.studentName)==null?void 0:S.toLowerCase().includes(F),g=(D=f.exerciseTitle)==null?void 0:D.toLowerCase().includes(F),T=(O=f.exerciseId)==null?void 0:O.toLowerCase().includes(F);if(!b&&!g&&!T)return!1}return!0}),I=f=>f?(typeof f=="string"?new Date(f):f).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0}):"Unknown",R=f=>{switch(f){case"challenge":return"#00ff88";case"pseudocode":return"#ff6b9d";case"flowchart":return"#ff6b9d";case"programming":return"#00d4ff";default:return"#888"}},m=f=>{switch(f){case"challenge":return"Cyber Challenge";case"pseudocode":return"Pseudocode";case"flowchart":return"Flowchart";case"programming":return"Programming";default:return f}};return i?n.jsx("div",{className:"submission-viewer",children:n.jsx("div",{className:"loading-message",children:"Loading submissions..."})}):n.jsxs("div",{className:"submission-viewer",children:[n.jsxs("div",{className:"sv-header",children:[n.jsx("h3",{children:"Student Submissions"}),n.jsx("p",{className:"sv-subtitle",children:"View and review student answers across all exercises."})]}),n.jsxs("div",{className:"sv-filters",children:[n.jsxs("div",{className:"sv-filter-group",children:[n.jsx("label",{children:"Status:"}),n.jsxs("select",{value:o,onChange:f=>l(f.target.value),children:[n.jsx("option",{value:"all",children:"All Submissions"}),n.jsx("option",{value:"correct",children:"Correct Only"}),n.jsx("option",{value:"incorrect",children:"Incorrect Only"})]})]}),n.jsxs("div",{className:"sv-filter-group",children:[n.jsx("label",{children:"Type:"}),n.jsxs("select",{value:c,onChange:f=>h(f.target.value),children:[n.jsx("option",{value:"all",children:"All Types"}),n.jsx("option",{value:"challenge",children:"Cyber Challenges"}),n.jsx("option",{value:"pseudocode",children:"Pseudocode"}),n.jsx("option",{value:"flowchart",children:"Flowcharts"}),n.jsx("option",{value:"programming",children:"Programming"})]})]}),n.jsxs("div",{className:"sv-filter-group",children:[n.jsx("label",{children:"Search:"}),n.jsx("input",{type:"text",placeholder:"Student name or exercise...",value:p,onChange:f=>w(f.target.value)})]}),n.jsx("button",{className:"sv-refresh-btn",onClick:C,children:"Refresh"})]}),N.length===0?n.jsxs("div",{className:"sv-empty",children:[n.jsx("div",{className:"sv-empty-icon",children:"[ NO SUBMISSIONS ]"}),n.jsx("p",{children:"No submissions match your filters."}),t.length===0&&n.jsx("p",{className:"sv-hint",children:"Students' answers will appear here when they submit exercises."})]}):n.jsxs("div",{className:"sv-list",children:[n.jsxs("div",{className:"sv-stats",children:["Showing ",N.length," of ",t.length," submissions",o==="incorrect"&&n.jsxs("span",{className:"sv-stat-highlight",children:[" (",N.length," need review)"]})]}),N.map((f,S)=>n.jsxs("div",{className:`sv-submission-card ${f.isCorrect?"correct":"incorrect"} ${x===S?"expanded":""}`,children:[n.jsxs("div",{className:"sv-submission-header",onClick:()=>v(x===S?null:S),children:[n.jsxs("div",{className:"sv-submission-info",children:[n.jsx("span",{className:"sv-student-name",children:f.studentName}),n.jsx("span",{className:"sv-type-badge",style:{backgroundColor:R(f.exerciseType)},children:m(f.exerciseType)}),n.jsx("span",{className:`sv-status-badge ${f.isCorrect?"correct":"incorrect"}`,children:f.isCorrect?"✓ Correct":"✗ Incorrect"})]}),n.jsxs("div",{className:"sv-submission-meta",children:[n.jsx("span",{className:"sv-exercise-title",children:f.exerciseTitle||f.exerciseId}),n.jsx("span",{className:"sv-date",children:I(f.submittedAt)})]}),n.jsx("span",{className:"sv-expand-icon",children:x===S?"▼":"▶"})]}),x===S&&n.jsx("div",{className:"sv-submission-content",children:n.jsxs("div",{className:"sv-answer-section",children:[n.jsx("h4",{children:"Student's Answer:"}),n.jsx("pre",{className:"sv-answer-code",children:f.answer})]})})]},`${f.studentId}-${f.exerciseId}-${S}`))]})]})},xv=({classCode:e,onBack:t})=>{var g,T,j,P;Kc();const[s,i]=A.useState([]),[r,o]=A.useState(null),[l,c]=A.useState([]),[h,p]=A.useState(!0),[w,x]=A.useState(null),[v,C]=A.useState("points"),[N,I]=A.useState("students"),[R,m]=A.useState(!1),f=Object.values(_n).flat().length,S=Pt.length;A.useEffect(()=>{(async()=>{const U=await Px(e);o(U)})();const k=Ex(e,U=>{i(U),p(!1)}),Q=Um(e,U=>{c(U)});return()=>{k(),Q()}},[e]);const D=[...s].sort((E,k)=>{var Q,U;switch(v){case"points":return k.totalPoints-E.totalPoints;case"name":return E.name.localeCompare(k.name);case"activity":const K=((Q=E.lastActivity)==null?void 0:Q.getTime())||0;return(((U=k.lastActivity)==null?void 0:U.getTime())||0)-K;default:return 0}}),O=E=>{if(!E)return{status:"never",label:"Never active",color:"#666"};const Q=new Date-E,U=Math.floor(Q/6e4);if(U<5)return{status:"active",label:"Active now",color:"#4caf50"};if(U<30)return{status:"recent",label:`${U}m ago`,color:"#ff9800"};if(U<60)return{status:"idle",label:`${U}m ago`,color:"#f44336"};const K=Math.floor(U/60);return K<24?{status:"idle",label:`${K}h ago`,color:"#f44336"}:{status:"inactive",label:`${Math.floor(K/24)}d ago`,color:"#666"}},F=(E,k)=>k>0?Math.round(E/k*100):0,b={totalStudents:s.length,activeStudents:s.filter(E=>{const k=O(E.lastActivity);return k.status==="active"||k.status==="recent"}).length,avgPoints:s.length>0?Math.round(s.reduce((E,k)=>E+k.totalPoints,0)/s.length):0,avgChallenges:s.length>0?Math.round(s.reduce((E,k)=>{var Q;return E+(((Q=k.completedChallenges)==null?void 0:Q.length)||0)},0)/s.length):0};return h?n.jsx("div",{className:"teacher-dashboard",children:n.jsxs("div",{className:"loading-screen",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{children:"Loading class data..."})]})}):n.jsxs("div",{className:"teacher-dashboard",children:[n.jsxs("header",{className:"td-header",children:[n.jsx("button",{className:"back-btn",onClick:t,children:"← Exit Dashboard"}),n.jsxs("div",{className:"td-title",children:[n.jsx("h1",{children:(r==null?void 0:r.name)||"Class Dashboard"}),n.jsxs("div",{className:"class-code-badge",children:["Class Code: ",n.jsx("strong",{children:e})]})]}),n.jsx("button",{className:"theme-btn nav-btn",onClick:()=>m(!0),title:"Change Theme",children:"Theme"})]}),n.jsxs("div",{className:"td-stats",children:[n.jsxs("div",{className:"td-stat-card",children:[n.jsx("span",{className:"td-stat-value",children:b.totalStudents}),n.jsx("span",{className:"td-stat-label",children:"Total Students"})]}),n.jsxs("div",{className:"td-stat-card active",children:[n.jsx("span",{className:"td-stat-value",children:b.activeStudents}),n.jsx("span",{className:"td-stat-label",children:"Currently Active"})]}),n.jsxs("div",{className:"td-stat-card",children:[n.jsx("span",{className:"td-stat-value",children:b.avgPoints}),n.jsx("span",{className:"td-stat-label",children:"Avg Points"})]}),n.jsxs("div",{className:"td-stat-card",children:[n.jsx("span",{className:"td-stat-value",children:b.avgChallenges}),n.jsx("span",{className:"td-stat-label",children:"Avg Challenges Done"})]})]}),n.jsxs("div",{className:"td-tabs",children:[n.jsx("button",{className:`td-tab ${N==="students"?"active":""}`,onClick:()=>I("students"),children:"Students"}),n.jsx("button",{className:`td-tab ${N==="submissions"?"active":""}`,onClick:()=>I("submissions"),children:"Submissions"}),n.jsx("button",{className:`td-tab ${N==="assignments"?"active":""}`,onClick:()=>I("assignments"),children:"Module Assignments"}),n.jsx("button",{className:`td-tab ${N==="activities"?"active":""}`,onClick:()=>I("activities"),children:"View Activities"}),n.jsx("button",{className:`td-tab ${N==="modules"?"active":""}`,onClick:()=>I("modules"),children:"Modules"})]}),N==="submissions"&&n.jsx(yv,{classCode:e}),N==="assignments"&&n.jsx(mv,{classCode:e,assignments:l}),N==="activities"&&n.jsx(fv,{classCode:e}),N==="modules"&&n.jsx(gv,{classCode:e}),N==="students"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"td-controls",children:[n.jsxs("div",{className:"sort-controls",children:[n.jsx("label",{children:"Sort by:"}),n.jsxs("select",{value:v,onChange:E=>C(E.target.value),children:[n.jsx("option",{value:"points",children:"Points (High to Low)"}),n.jsx("option",{value:"name",children:"Name (A-Z)"}),n.jsx("option",{value:"activity",children:"Recent Activity"})]})]}),n.jsx("button",{className:"btn-refresh",onClick:()=>window.location.reload(),children:"Refresh"})]}),n.jsxs("div",{className:"td-content",children:[n.jsxs("div",{className:"student-list-panel",children:[n.jsxs("h2",{children:["Students (",s.length,")"]}),s.length===0?n.jsxs("div",{className:"no-students",children:[n.jsx("p",{children:"No students have joined yet."}),n.jsxs("p",{children:["Share the class code: ",n.jsx("strong",{children:e})]})]}):n.jsx("div",{className:"student-list",children:D.map((E,k)=>{var U,K,se,_;const Q=O(E.lastActivity);return F(((U=E.completedChallenges)==null?void 0:U.length)||0,f),F(((K=E.completedScenarios)==null?void 0:K.length)||0,S),n.jsxs("div",{className:`student-card ${(w==null?void 0:w.id)===E.id?"selected":""}`,onClick:()=>x(E),children:[n.jsxs("div",{className:"student-rank",children:["#",k+1]}),n.jsxs("div",{className:"student-info",children:[n.jsx("div",{className:"student-name",children:E.name}),n.jsxs("div",{className:"student-activity",style:{color:Q.color},children:[n.jsx("span",{className:`activity-dot ${Q.status}`}),Q.label]})]}),n.jsxs("div",{className:"student-progress",children:[n.jsxs("div",{className:"progress-item",children:[n.jsx("span",{className:"progress-value",children:E.totalPoints}),n.jsx("span",{className:"progress-label",children:"pts"})]}),n.jsxs("div",{className:"progress-item",children:[n.jsx("span",{className:"progress-value",children:((se=E.completedChallenges)==null?void 0:se.length)||0}),n.jsx("span",{className:"progress-label",children:"challenges"})]}),n.jsxs("div",{className:"progress-item",children:[n.jsx("span",{className:"progress-value",children:((_=E.completedScenarios)==null?void 0:_.length)||0}),n.jsx("span",{className:"progress-label",children:"scenarios"})]})]})]},E.id)})})]}),n.jsx("div",{className:"student-detail-panel",children:w?n.jsxs(n.Fragment,{children:[n.jsx("h2",{children:w.name}),n.jsxs("div",{className:"detail-section",children:[n.jsx("h3",{children:"Overall Progress"}),n.jsx("div",{className:"detail-stats",children:n.jsxs("div",{className:"detail-stat",children:[n.jsx("span",{className:"detail-stat-value",children:w.totalPoints}),n.jsx("span",{className:"detail-stat-label",children:"Total Points"})]})})]}),n.jsxs("div",{className:"detail-section",children:[n.jsxs("h3",{children:["Challenges (",((g=w.completedChallenges)==null?void 0:g.length)||0,"/",f,")"]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill",style:{width:`${F(((T=w.completedChallenges)==null?void 0:T.length)||0,f)}%`}})}),n.jsx("div",{className:"completed-list",children:Object.entries(_n).map(([E,k])=>{const Q=k.filter(U=>{var K;return(K=w.completedChallenges)==null?void 0:K.includes(U.id)});return Q.length===0?null:n.jsxs("div",{className:"category-progress",children:[n.jsx("h4",{children:E}),n.jsx("ul",{children:Q.map(U=>n.jsxs("li",{children:[U.title," (+",U.points,"pts)"]},U.id))})]},E)})})]}),n.jsxs("div",{className:"detail-section",children:[n.jsxs("h3",{children:["Network Monitor (",((j=w.completedScenarios)==null?void 0:j.length)||0,"/",S,")"]}),n.jsx("div",{className:"progress-bar-container",children:n.jsx("div",{className:"progress-bar-fill scenario",style:{width:`${F(((P=w.completedScenarios)==null?void 0:P.length)||0,S)}%`}})}),n.jsx("div",{className:"completed-list",children:n.jsx("ul",{children:Pt.filter(E=>{var k;return(k=w.completedScenarios)==null?void 0:k.includes(E.id)}).map(E=>n.jsxs("li",{children:[E.name," (+",E.points,"pts)"]},E.id))})})]})]}):n.jsx("div",{className:"no-selection",children:n.jsx("p",{children:"Select a student to view details"})})})]})]}),R&&n.jsx(Xc,{onClose:()=>m(!1)})]})},vv={week1:["Create and initialize arrays with multiple values","Access array elements using index notation","Use push() and pop() to add and remove elements","Work with parallel arrays to store related data","Select random elements from arrays"],week2:["Write for-loops with correct syntax","Use loop variables to create patterns","Animate objects using the draw() loop","Use while-loops for conditional repetition","Create visual patterns with loops"],week3:["Traverse arrays to process every element","Calculate sum, average, min, and max","Find specific elements with conditions","Update array values during traversal","Remove elements safely (backwards loop)"],week4:["Filter arrays to keep matching elements","Reduce arrays to single values","Create 2D arrays for grid data","Use nested loops for grid operations","Build a complete game using all concepts"]};function wv({weekKey:e,onSelectExercise:t,onBack:s,completedExercises:i}){const r=ar[e],o=e==="pixelWeek",l=o?"★":e.replace("week",""),c=vv[e]||[],h=p=>`difficulty difficulty-${p.toLowerCase()}`;return n.jsxs("div",{className:"week-view",children:[n.jsx("button",{className:"back-button",onClick:s,children:"← Back to Dashboard"}),n.jsxs("div",{className:"week-header-large",children:[n.jsx("h1",{children:o?`${r.title}`:`Week ${l}: ${r.title}`}),o&&n.jsx("div",{className:"culminating-badge",style:{marginBottom:"1rem",display:"inline-block"},children:"🎯 Culminating Project (Combines Weeks 1-3)"}),n.jsx("p",{className:"big-idea",children:r.bigIdea})]}),n.jsxs("div",{className:"learning-objectives",children:[n.jsx("h3",{children:"Learning Objectives"}),n.jsx("ul",{children:c.map((p,w)=>n.jsx("li",{children:p},w))})]}),n.jsx("div",{className:"days-list",children:r.days.map(p=>n.jsxs("div",{className:"day-section",children:[n.jsxs("div",{className:"day-header",children:[n.jsxs("h2",{children:["Day ",p.day,": ",p.title]}),n.jsx("p",{className:"day-objective",children:p.objective})]}),n.jsx("div",{className:"exercises-grid",children:p.exercises.map(w=>{const x=i.includes(w.id);return n.jsxs("div",{className:`exercise-card ${x?"completed":""} ${w.isProject?"project-card":""}`,onClick:()=>t(w.id),children:[n.jsxs("div",{className:"exercise-header",children:[n.jsx("span",{className:h(w.difficulty),children:w.difficulty}),n.jsxs("span",{className:"points",children:[w.points," pts"]})]}),n.jsxs("h3",{className:"exercise-title",children:[w.isProject&&"🎮 ",w.isCapstone&&"🏆 ",w.title]}),n.jsx("p",{className:"exercise-description",children:w.description}),x&&n.jsx("div",{className:"completed-badge",children:"✓ Completed"})]},w.id)})}),p.exitTicket&&n.jsxs("div",{className:"exit-ticket",children:[n.jsx("strong",{children:"Exit Ticket:"})," ",p.exitTicket]})]},p.day))})]})}const Ko=()=>new Promise((e,t)=>{if(window.p5&&typeof window.p5=="function"){e(window.p5);return}const s=document.querySelector('script[src*="p5.min.js"]');if(s){s.addEventListener("load",()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))}),s.addEventListener("error",()=>t(new Error("Failed to load p5.js")));return}const i=document.createElement("script");i.src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js",i.async=!0,i.onload=()=>{window.p5&&typeof window.p5=="function"?e(window.p5):t(new Error("p5.js loaded but window.p5 is not available"))},i.onerror=()=>t(new Error("Failed to load p5.js")),document.head.appendChild(i)});function bv({exerciseId:e,onBack:t,onComplete:s,isCompleted:i,onSubmit:r}){const o=B0(e),[l,c]=A.useState((o==null?void 0:o.starterCode)||""),[h,p]=A.useState([]),[w,x]=A.useState(!1),[v,C]=A.useState(!1),[N,I]=A.useState(!1),[R,m]=A.useState(null),[f,S]=A.useState(!1),[D,O]=A.useState(null),F=A.useRef(null),b=A.useRef(null);if(A.useEffect(()=>{Ko().then(()=>{S(!0),O(null)}).catch(U=>{console.error("Failed to load p5.js:",U),O(U.message)})},[]),A.useEffect(()=>{o&&(c(o.starterCode),p([]),x(!1),C(!1))},[e]),A.useEffect(()=>()=>{b.current&&(b.current.remove(),b.current=null)},[]),!o)return n.jsxs("div",{className:"exercise-detail",children:[n.jsx("button",{className:"back-button",onClick:t,children:"← Back"}),n.jsx("p",{children:"Exercise not found"})]});const g=async()=>{b.current&&(b.current.remove(),b.current=null),F.current&&(F.current.innerHTML=""),I(!0);try{(!window.p5||typeof window.p5!="function")&&(F.current&&(F.current.innerHTML='<div class="canvas-placeholder">Loading p5.js...</div>'),await Ko());const U=["setup","draw","preload","mousePressed","mouseReleased","mouseClicked","mouseMoved","mouseDragged","mouseWheel","doubleClicked","keyPressed","keyReleased","keyTyped","touchStarted","touchMoved","touchEnded","windowResized"];let K=l;U.forEach(_=>{const H=new RegExp(`function\\s+${_}\\s*\\(`,"g");K=K.replace(H,`p.${_} = function(`)});const se=_=>{new Function("p",`
          with (p) {
            ${K}
          }
        `)(_)};b.current=new window.p5(se,F.current)}catch(U){console.error("Code error:",U),F.current&&(F.current.innerHTML=`<div class="error-message">Error: ${U.message}</div>`)}},T=()=>{b.current&&(b.current.remove(),b.current=null),I(!1)},j=()=>{c(o.starterCode),T()},P=U=>{h.includes(U)||p([...h,U])},E=()=>{x(!0),c(o.solutionCode)},k=()=>{i||(r&&r({exerciseId:o.id,answer:l,isCorrect:!0,exerciseType:"programming",exerciseTitle:o.title}),s(o.id,o.points))},Q=U=>`difficulty difficulty-${U.toLowerCase()}`;return n.jsxs("div",{className:"exercise-detail",children:[n.jsx("button",{className:"back-button",onClick:t,children:"← Back to Week"}),n.jsxs("div",{className:"exercise-header-detail",children:[n.jsxs("div",{className:"exercise-meta",children:[n.jsx("span",{className:Q(o.difficulty),children:o.difficulty}),n.jsxs("span",{className:"points",children:[o.points," pts"]}),o.isProject&&n.jsx("span",{className:"project-badge",children:"Mini-Project"}),o.isCapstone&&n.jsx("span",{className:"capstone-badge",children:"Capstone"})]}),n.jsx("h1",{children:o.title}),n.jsx("p",{className:"exercise-description-large",children:o.description})]}),o.explanation&&n.jsxs("div",{className:"explanation-section",children:[n.jsxs("button",{className:`explanation-toggle ${v?"open":""}`,onClick:()=>C(!v),children:[n.jsx("span",{className:"toggle-icon",children:v?"▼":"▶"}),n.jsxs("span",{className:"toggle-text",children:["📚 Learn: ",o.explanation.title]})]}),v&&n.jsxs("div",{className:"explanation-content",children:[n.jsxs("div",{className:"concept-section",children:[n.jsx("h4",{children:"Concept"}),n.jsx("pre",{className:"concept-text",children:o.explanation.concept})]}),o.explanation.example&&n.jsxs("div",{className:"example-section",children:[n.jsx("h4",{children:"Example (Different from this exercise!)"}),n.jsx("pre",{className:"example-code",children:n.jsx("code",{children:o.explanation.example})})]}),o.explanation.keyPoints&&o.explanation.keyPoints.length>0&&n.jsxs("div",{className:"key-points-section",children:[n.jsx("h4",{children:"Key Points"}),n.jsx("ul",{children:o.explanation.keyPoints.map((U,K)=>n.jsx("li",{children:U},K))})]})]})]}),o.vocabularyTerms&&o.vocabularyTerms.length>0&&n.jsxs("div",{className:"vocab-tags",children:[n.jsx("span",{className:"vocab-label",children:"Key Terms:"}),o.vocabularyTerms.map(U=>{const K=wn[U];return K?n.jsx("button",{className:"vocab-tag",onClick:()=>m(K),children:K.term},U):null})]}),R&&n.jsx("div",{className:"vocab-popup",onClick:()=>m(null),children:n.jsxs("div",{className:"vocab-popup-content",onClick:U=>U.stopPropagation(),children:[n.jsx("h3",{children:R.term}),n.jsx("p",{children:R.definition}),R.example&&n.jsx("code",{className:"vocab-example",children:R.example}),n.jsx("button",{onClick:()=>m(null),children:"Close"})]})}),n.jsxs("div",{className:"prompt-box",children:[n.jsx("h3",{children:"Challenge"}),n.jsx("pre",{children:o.prompt})]}),n.jsxs("div",{className:"editor-container",children:[n.jsxs("div",{className:"code-section",children:[n.jsxs("div",{className:"code-header",children:[n.jsx("h3",{children:"Your Code"}),n.jsxs("div",{className:"code-actions",children:[n.jsx("button",{onClick:g,className:"run-btn",children:"▶ Run"}),n.jsx("button",{onClick:T,className:"stop-btn",children:"⬛ Stop"}),n.jsx("button",{onClick:j,className:"reset-btn",children:"↺ Reset"})]})]}),n.jsx("textarea",{className:"code-editor",value:l,onChange:U=>c(U.target.value),spellCheck:!1})]}),n.jsxs("div",{className:"canvas-section",children:[n.jsx("h3",{children:"Output"}),n.jsxs("div",{className:"canvas-wrapper",style:{position:"relative",minHeight:"300px"},children:[n.jsx("div",{ref:F,className:"canvas-container",style:{position:"absolute",top:0,left:0,right:0,bottom:0}}),!N&&n.jsx("div",{className:"canvas-overlay",style:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#000",borderRadius:"8px"},children:D?n.jsxs("div",{className:"error-message",children:["Failed to load p5.js: ",D,n.jsx("button",{onClick:()=>{O(null),Ko().then(()=>S(!0)).catch(U=>O(U.message))},style:{marginTop:"10px",display:"block"},children:"Retry"})]}):f?n.jsx("div",{className:"canvas-placeholder",children:'Click "Run Code" to see your sketch'}):n.jsx("div",{className:"canvas-placeholder",children:"Loading p5.js..."})})]})]})]}),n.jsxs("div",{className:"hints-section",children:[n.jsx("h3",{children:"Hints"}),n.jsx("div",{className:"hints-list",children:o.hints.map((U,K)=>n.jsx("div",{className:"hint-item",children:h.includes(K)?n.jsxs("div",{className:"hint-revealed",children:[n.jsxs("span",{className:"hint-number",children:["Hint ",K+1,":"]})," ",U]}):n.jsxs("button",{className:"hint-button",onClick:()=>P(K),children:["Reveal Hint ",K+1]})},K))})]}),o.resources&&o.resources.length>0&&n.jsxs("div",{className:"resources-section",children:[n.jsx("h3",{children:"p5.js Reference"}),n.jsx("div",{className:"resources-list",children:o.resources.map((U,K)=>n.jsx("a",{href:U.url,target:"_blank",rel:"noopener noreferrer",className:"resource-link",children:U.title},K))})]}),n.jsx("div",{className:"solution-section",children:w?n.jsxs("div",{className:"solution-revealed",children:[n.jsx("h3",{children:"Solution"}),n.jsx("pre",{className:"solution-code",children:o.solutionCode})]}):n.jsx("button",{className:"solution-button",onClick:E,children:"Show Solution (try on your own first!)"})}),o.rubric&&n.jsxs("div",{className:"rubric-section",children:[n.jsx("h3",{children:"Rubric"}),n.jsx("ul",{className:"rubric-list",children:Object.entries(o.rubric).map(([U,K])=>n.jsxs("li",{children:[n.jsxs("strong",{children:[U,":"]})," ",K]},U))})]}),n.jsx("div",{className:"complete-section",children:i?n.jsxs("div",{className:"already-completed",children:["✓ You've completed this exercise! (",o.points," points earned)"]}):n.jsxs("button",{className:"complete-button",onClick:k,children:["Mark as Complete (+",o.points," points)"]})})]})}function kv({completedExercises:e=[],onSelectTopic:t,onSelectExercise:s,onBack:i}){const[r,o]=A.useState("all"),[l,c]=A.useState("all"),[h,p]=A.useState("learn"),w=new Set(e),x=A.useMemo(()=>{const m={};return Nn.forEach(f=>{m[f.id]=Et.filter(S=>S.topic===f.id)}),m},[]),v=[{id:"all",label:"All Types"},{id:"pseudocode-to-js",label:"Pseudocode → JS"},{id:"js-to-pseudocode",label:"JS → Pseudocode"},{id:"fill-blank",label:"Fill in Blank"},{id:"trace",label:"Code Tracing"},{id:"multiple-choice",label:"Multiple Choice"}],C=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],N=A.useMemo(()=>Et.filter(m=>!(r!=="all"&&m.difficulty!==r||l!=="all"&&m.type!==l)),[r,l]),I=m=>{const f=x[m]||[];return{completed:f.filter(D=>w.has(D.id)).length,total:f.length}},R={completed:w.size,total:Et.length};return n.jsxs("div",{className:"pseudocode-hub",children:[n.jsx("button",{className:"back-btn",onClick:i,children:"← Back to Dashboard"}),n.jsxs("div",{className:"hub-header",children:[n.jsx("div",{className:"hub-icon",children:"[ CODE ]"}),n.jsx("h1",{children:"AP CSP Pseudocode"}),n.jsx("p",{children:"Learn to translate between AP CSP pseudocode and JavaScript"})]}),n.jsxs("div",{className:"progress-bar-container",children:[n.jsxs("div",{className:"progress-label",children:["Overall Progress: ",R.completed," / ",R.total," exercises"]}),n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill apcsp",style:{width:`${R.completed/R.total*100}%`}})})]}),n.jsxs("div",{className:"hub-tabs",children:[n.jsx("button",{className:`hub-tab ${h==="learn"?"active":""}`,onClick:()=>p("learn"),children:"Learn Topics"}),n.jsx("button",{className:`hub-tab ${h==="practice"?"active":""}`,onClick:()=>p("practice"),children:"Practice Exercises"})]}),h==="learn"&&n.jsx("div",{className:"topics-grid",children:Nn.map(m=>{const f=I(m.id),S=f.total>0?f.completed/f.total*100:0;return n.jsxs("div",{className:"topic-card",onClick:()=>t(m.id),children:[n.jsx("h3",{children:m.title}),n.jsx("div",{className:"topic-code",children:n.jsx("code",{children:m.pseudocode})}),n.jsx("div",{className:"topic-arrow",children:"↓"}),n.jsx("div",{className:"topic-code js",children:n.jsx("code",{children:m.javascript})}),n.jsxs("p",{className:"topic-explanation",children:[m.explanation.substring(0,100),"..."]}),n.jsxs("div",{className:"topic-progress",children:[n.jsxs("span",{children:[f.completed,"/",f.total," exercises"]}),n.jsx("div",{className:"progress-bar small",children:n.jsx("div",{className:"progress-fill apcsp",style:{width:`${S}%`}})})]})]},m.id)})}),h==="practice"&&n.jsxs("div",{className:"practice-section",children:[n.jsxs("div",{className:"filter-bar",children:[n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Difficulty:"}),n.jsx("select",{value:r,onChange:m=>o(m.target.value),children:C.map(m=>n.jsx("option",{value:m.id,children:m.label},m.id))})]}),n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Type:"}),n.jsx("select",{value:l,onChange:m=>c(m.target.value),children:v.map(m=>n.jsx("option",{value:m.id,children:m.label},m.id))})]})]}),n.jsx("div",{className:"exercises-list",children:N.map(m=>{const f=w.has(m.id),S=Nn.find(D=>D.id===m.topic);return n.jsxs("div",{className:`exercise-card ${f?"completed":""}`,onClick:()=>s(m.id),children:[n.jsx("div",{className:"exercise-status",children:f?"✓":"○"}),n.jsxs("div",{className:"exercise-content",children:[n.jsx("h4",{children:(S==null?void 0:S.title)||"Unknown Topic"}),n.jsx("p",{className:"exercise-type",children:m.type.replace(/-/g," ")}),n.jsx("p",{className:"exercise-prompt",children:m.prompt})]}),n.jsx("div",{className:`difficulty-badge ${m.difficulty}`,children:m.difficulty})]},m.id)})})]})]})}function jv({topicId:e,onBack:t,onSelectExercise:s}){const[i,r]=A.useState(0),o=Nn.findIndex(h=>h.id===e),l=Nn[o],c=Et.filter(h=>h.topic===e).slice(0,5);return l?n.jsxs("div",{className:"topic-lesson",children:[n.jsx("button",{className:"back-btn",onClick:t,children:"← Back to Pseudocode Hub"}),n.jsxs("div",{className:"lesson-header",children:[n.jsx("h1",{children:l.title}),n.jsx("p",{children:l.explanation})]}),n.jsxs("div",{className:"comparison-box",children:[n.jsxs("div",{className:"comparison-side pseudocode",children:[n.jsx("h3",{children:"Pseudocode"}),n.jsx("div",{className:"code-panel",children:n.jsx("pre",{children:l.pseudocode})})]}),n.jsxs("div",{className:"comparison-side javascript",children:[n.jsx("h3",{children:"JavaScript"}),n.jsx("div",{className:"code-panel",children:n.jsx("pre",{children:l.javascript})})]})]}),l.examples&&l.examples.length>0&&n.jsxs("div",{className:"examples-list",children:[n.jsx("h3",{children:"Examples"}),l.examples.map((h,p)=>n.jsxs("div",{className:"example-item",children:[n.jsxs("div",{className:"code-panel",children:[n.jsx("div",{className:"code-panel-header given",children:"Pseudocode"}),n.jsx("pre",{children:h.pseudocode})]}),n.jsxs("div",{className:"code-panel",children:[n.jsx("div",{className:"code-panel-header answer",children:"JavaScript"}),n.jsx("pre",{children:h.javascript})]})]},p))]}),l.keyPoints&&l.keyPoints.length>0&&n.jsxs("div",{className:"key-points",children:[n.jsx("h3",{children:"Key Points"}),n.jsx("ul",{children:l.keyPoints.map((h,p)=>n.jsx("li",{children:h},p))})]}),c.length>0&&n.jsxs("div",{className:"related-exercises",children:[n.jsx("h3",{children:"Practice Exercises"}),n.jsx("div",{className:"exercises-list",children:c.map(h=>n.jsxs("div",{className:"exercise-card",onClick:()=>s(h.id),children:[n.jsxs("div",{className:"exercise-content",children:[n.jsx("h4",{children:h.type.replace(/-/g," ")}),n.jsx("p",{className:"exercise-prompt",children:h.prompt})]}),n.jsx("div",{className:`difficulty-badge ${h.difficulty}`,children:h.difficulty})]},h.id))})]})]}):n.jsxs("div",{className:"topic-lesson",children:[n.jsx("button",{className:"back-btn",onClick:t,children:"← Back"}),n.jsxs("div",{className:"error-message",children:[n.jsx("h1",{children:"Topic Not Found"}),n.jsx("p",{children:"This topic doesn't exist."})]})]})}function Sv({exerciseId:e,onComplete:t,onBack:s,isCompleted:i,onNextExercise:r,allExerciseIds:o=[],onSubmit:l}){var z,$,Z;const c=Et.find(W=>W.id===e),h=c?Nn.find(W=>W.id===c.topic):null,[p,w]=A.useState(""),[x,v]=A.useState({}),[C,N]=A.useState(!1),[I,R]=A.useState(!1),[m,f]=A.useState(!1),[S,D]=A.useState(0),[O,F]=A.useState(!1),[b,g]=A.useState(0);A.useEffect(()=>{w(""),v({}),N(!1),R(!1),f(!1),D(0),F(!1),g(0)},[e]);const j=(()=>{if(!o||o.length===0){const J=Et.findIndex(ee=>ee.id===e);return J>=0&&J<Et.length-1?Et[J+1].id:null}const W=o.indexOf(e);return W>=0&&W<o.length-1?o[W+1]:null})();if(A.useMemo(()=>{if((c==null?void 0:c.type)!=="fill-blank"||!(c!=null&&c.template))return null;const W=[],J=/___(\w+)___/g;let ee;for(;(ee=J.exec(c.template))!==null;)W.push({id:ee[1],position:ee.index});return W},[c]),!c)return n.jsxs("div",{className:"translation-exercise",children:[n.jsx("button",{className:"back-btn",onClick:s,children:"← Back"}),n.jsxs("div",{className:"error-message",children:[n.jsx("h1",{children:"Exercise Not Found"}),n.jsx("p",{children:"This exercise doesn't exist."})]})]});const P=W=>W.replace(/<--/g,"←").replace(/<-/g,"←").replace(/←/g,"←").replace(/:=/g,"←").replace(/!=/g,"≠").replace(/<>/g,"≠").replace(/>=/g,"≥").replace(/<=/g,"≤").replace(/DISPLAY\s*\(\s*/gi,"DISPLAY(").replace(/DISPLAY\s+([^(\n]+)/gi,"DISPLAY($1)").replace(/\)\s*\)/g,")").replace(/INPUT\s*\(\s*\)/gi,"INPUT()").replace(/\s+/g," ").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/\s*,\s*/g,",").split(`
`).map(J=>J.trim()).filter(J=>J.length>0).join(`
`).trim().toLowerCase(),E=W=>W.replace(/\b(var|const)\b/g,"let").replace(/;+/g,";").replace(/\s+/g," ").replace(/\s*;\s*/g,";").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/\s*\(\s*/g,"(").replace(/\s*\)\s*/g,")").replace(/;$/gm,"").split(`
`).map(J=>J.trim()).filter(J=>J.length>0).join(`
`).trim().toLowerCase(),k=(W,J,ee)=>{const Y=ee?P:E,q=Y(W),ie=Y(J);if(q===ie)return!0;const ve=q.replace(/\n/g," ").replace(/\s+/g," "),we=ie.replace(/\n/g," ").replace(/\s+/g," ");if(ve===we)return!0;const ye=Je=>Je.replace(/[;\s]/g,"");return ye(q)===ye(ie)},Q=(W,J)=>{const ee=ye=>ye.toString().toLowerCase().trim().replace(/\s+/g," ").replace(/\s*=\s*/g,"=").replace(/[,;\n]+/g,",").replace(/\s+and\s+/gi,",").replace(/\s*,\s*/g,",").replace(/,+$/,"").replace(/^,+/,""),Y=ee(W),q=ee(J);if(Y===q)return!0;if(q.includes("=")){const ye=it=>{const Lt=it.split(",").filter(Ot=>Ot.includes("="));return new Set(Lt.map(Ot=>Ot.trim()))},Je=ye(Y),Qe=ye(q);if(Je.size===Qe.size){let it=!0;if(Qe.forEach(Lt=>{Je.has(Lt)||(it=!1)}),it)return!0}}const ie=Y.match(/\d+/g)||[],ve=q.match(/\d+/g)||[];if(ie.length===1&&ve.length===1&&ie[0]===ve[0])return!0;const we=ye=>ye.replace(/[^a-z0-9]/g,"");return we(Y)===we(q)},U=()=>{var ee;let W=!1;const J=c.type==="js-to-pseudocode";if(c.type==="fill-blank"){if(c.blankAnswers)W=Object.entries(c.blankAnswers).every(([Y,q])=>{const ie=(x[Y]||"").trim().toLowerCase();return Array.isArray(q)?q.some(ve=>ve.toLowerCase()===ie):q.toLowerCase()===ie});else if(c.answer){const Y=p.trim().toLowerCase(),q=c.answer.toString().trim().toLowerCase();W=Y===q,!W&&c.acceptableAnswers&&(W=c.acceptableAnswers.some(ie=>Y===ie.toString().trim().toLowerCase()))}}else c.type==="trace"||c.type==="multiple-choice"?(W=Q(p,c.answer),!W&&c.acceptableAnswers&&(W=c.acceptableAnswers.some(Y=>Q(p,Y)))):(W=k(p,c.answer,J),!W&&c.acceptableAnswers&&(W=c.acceptableAnswers.some(Y=>k(p,Y,J))));if(R(W),N(!0),W||g(Y=>Y+1),l){const Y=c.type==="fill-blank"&&c.blankAnswers?JSON.stringify(x):p;l({exerciseId:c.id,answer:Y,isCorrect:W,exerciseType:"pseudocode",exerciseTitle:((ee=c.prompt)==null?void 0:ee.substring(0,50))||c.id})}W&&!i&&t(c.id,10)},K=()=>{N(!1),R(!1),F(!1)},se=()=>{j&&r?r(j):s()},_=()=>{var W;S<(((W=c.hints)==null?void 0:W.length)||0)-1&&D(S+1)},H=()=>{if(c.template){const W=c.template.split(/(___\w+___)/g);return n.jsx("div",{className:"fill-blank-container",children:n.jsx("pre",{className:"fill-blank-code",children:W.map((J,ee)=>{const Y=J.match(/___(\w+)___/);if(Y){const q=Y[1];return n.jsx("input",{type:"text",className:`fill-blank-input ${C?I?"correct":"incorrect":""}`,value:x[q]||"",onChange:ie=>v({...x,[q]:ie.target.value}),placeholder:"...",disabled:C&&I},ee)}return n.jsx("span",{children:J},ee)})})})}if(c.given){const W=c.given.split(/(_{2,})/g);return n.jsx("div",{className:"fill-blank-container",children:n.jsx("pre",{className:"fill-blank-code",children:W.map((J,ee)=>/^_{2,}$/.test(J)?n.jsx("input",{type:"text",className:`fill-blank-input ${C?I?"correct":"incorrect":""}`,value:p,onChange:Y=>w(Y.target.value),placeholder:"...",disabled:C&&I},ee):n.jsx("span",{children:J},ee))})})}return null};return n.jsxs("div",{className:"translation-exercise",children:[n.jsx("button",{className:"back-btn",onClick:s,children:"← Back to Pseudocode Hub"}),n.jsxs("div",{className:"exercise-header",children:[n.jsx("h1",{children:(h==null?void 0:h.title)||"Translation Exercise"}),n.jsxs("div",{className:"exercise-meta",children:[n.jsx("span",{className:`difficulty-badge ${c.difficulty}`,children:c.difficulty}),n.jsx("span",{className:"exercise-type-badge",children:c.type.replace(/-/g," ")}),i&&n.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),n.jsx("p",{className:"exercise-prompt-text",children:c.prompt}),c.type==="fill-blank"?H():c.type==="trace"||c.type==="multiple-choice"?n.jsxs("div",{className:"trace-exercise",children:[n.jsxs("div",{className:"code-panel full-width",children:[n.jsx("div",{className:"code-panel-header given",children:(z=c.given)!=null&&z.includes("←")||($=c.given)!=null&&$.includes("DISPLAY")||(Z=c.given)!=null&&Z.includes("REPEAT")?"Pseudocode":"Code"}),n.jsx("div",{className:"code-panel-content",children:n.jsx("pre",{children:c.given})})]}),c.type==="multiple-choice"&&c.options?n.jsx("div",{className:"multiple-choice-options",children:c.options.map((W,J)=>n.jsxs("label",{className:`mc-option ${p===W?"selected":""} ${C?W===c.answer?"correct-answer":p===W&&!I?"wrong-answer":"":""}`,children:[n.jsx("input",{type:"radio",name:"mc-answer",value:W,checked:p===W,onChange:ee=>w(ee.target.value),disabled:C&&I}),n.jsx("span",{children:W})]},J))}):n.jsxs("div",{className:"trace-answer",children:[n.jsx("label",{children:"Your Answer:"}),n.jsx("input",{type:"text",value:p,onChange:W=>w(W.target.value),placeholder:"Enter the result...",disabled:C&&I,className:"trace-input"})]})]}):n.jsxs("div",{className:"code-panels",children:[n.jsxs("div",{className:"code-panel",children:[n.jsx("div",{className:"code-panel-header given",children:c.type==="pseudocode-to-js"?"Pseudocode":"JavaScript"}),n.jsx("div",{className:"code-panel-content",children:n.jsx("pre",{children:c.given})})]}),n.jsxs("div",{className:"code-panel",children:[n.jsx("div",{className:"code-panel-header answer",children:c.type==="pseudocode-to-js"?"Your JavaScript":"Your Pseudocode"}),n.jsx("div",{className:"code-panel-content",children:n.jsx("textarea",{value:p,onChange:W=>w(W.target.value),placeholder:"Type your answer here...",disabled:C&&I})})]})]}),(c.type==="pseudocode-to-js"||c.type==="js-to-pseudocode")&&n.jsx("div",{className:"format-help",children:n.jsxs("details",{children:[n.jsx("summary",{children:"Accepted formats"}),n.jsxs("ul",{children:[n.jsxs("li",{children:[n.jsx("code",{children:"←"})," or ",n.jsx("code",{children:"<--"})," or ",n.jsx("code",{children:"<-"})," for assignment"]}),n.jsxs("li",{children:[n.jsx("code",{children:"DISPLAY(x)"})," or ",n.jsx("code",{children:"DISPLAY x"})," for output"]}),n.jsxs("li",{children:[n.jsx("code",{children:"≠"})," or ",n.jsx("code",{children:"!="})," or ",n.jsx("code",{children:"<>"})," for not equal"]}),n.jsxs("li",{children:[n.jsx("code",{children:"≥"})," or ",n.jsx("code",{children:">="})," and ",n.jsx("code",{children:"≤"})," or ",n.jsx("code",{children:"<="})]}),n.jsx("li",{children:"Spacing and newlines are flexible"})]})]})}),n.jsx("div",{className:"exercise-actions",children:C?n.jsx(n.Fragment,{children:!I&&n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"action-btn",onClick:K,children:"Try Again"}),(c.type==="pseudocode-to-js"||c.type==="js-to-pseudocode")&&n.jsx("button",{className:"action-btn highlight-btn",onClick:()=>F(!O),children:O?"Hide Errors":"Highlight Errors"}),b>=5&&n.jsx("button",{className:"action-btn skip-btn",onClick:se,children:"Skip Activity →"})]})}):n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"action-btn",onClick:()=>f(!m),children:m?"Hide Hints":"Show Hints"}),n.jsx("button",{className:"action-btn primary",onClick:U,disabled:c.type==="fill-blank"&&c.blankAnswers?Object.keys(x).length===0:!p.trim(),children:"Check Answer"})]})}),m&&c.hints&&c.hints.length>0&&n.jsxs("div",{className:"hint-box",children:[n.jsx("h4",{children:"Hints"}),n.jsx("ul",{children:c.hints.slice(0,S+1).map((W,J)=>n.jsx("li",{children:W},J))}),S<c.hints.length-1&&n.jsx("button",{className:"action-btn",onClick:_,children:"Show Next Hint"})]}),C&&n.jsx("div",{className:`result-box ${I?"correct":"incorrect"}`,children:I?n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:"✓ Correct!"}),n.jsx("p",{children:"Great job! You've mastered this translation."}),j&&r&&n.jsx("button",{className:"action-btn primary next-activity-btn",onClick:()=>r(j),children:"Next Activity →"}),!j&&n.jsx("p",{className:"completion-message",children:"You've completed all exercises in this section!"})]}):n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:"✗ Not Quite"}),n.jsx("p",{children:"Check your answer and try again."}),n.jsxs("p",{className:"attempt-counter",children:["Attempt ",b," of 5",b>=5&&" - You can now skip this activity"]})]})}),C&&!I&&n.jsxs("div",{className:"explanation-box",children:[n.jsx("h4",{children:"Explanation"}),n.jsx("p",{children:c.explanation})]})]})}const Jo=[{id:"trace-1",title:"Simple Counter",code:`count ← 0
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
DISPLAY(sum)`,steps:[{line:1,action:"list ← [3, 7, 2]",variables:{list:[3,7,2],sum:void 0},output:""},{line:2,action:"sum ← 0",variables:{list:[3,7,2],sum:0},output:""},{line:3,action:"FOR EACH item IN list (item=3)",variables:{list:[3,7,2],sum:0,item:3},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:3,item:3},output:""},{line:3,action:"FOR EACH item IN list (item=7)",variables:{list:[3,7,2],sum:3,item:7},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:10,item:7},output:""},{line:3,action:"FOR EACH item IN list (item=2)",variables:{list:[3,7,2],sum:10,item:2},output:""},{line:5,action:"sum ← sum + item",variables:{list:[3,7,2],sum:12,item:2},output:""},{line:7,action:"DISPLAY(sum)",variables:{list:[3,7,2],sum:12,item:2},output:"12"}]}];function Cv({onBack:e}){const[t,s]=A.useState(Jo[0]),[i,r]=A.useState(0),[o,l]=A.useState(!1),c=t.steps[i],h=Object.keys((c==null?void 0:c.variables)||{}),p=()=>{i<t.steps.length-1&&r(i+1)},w=()=>{i>0&&r(i-1)},x=()=>{r(0),l(!1)};return n.jsxs("div",{className:"code-tracer",children:[n.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),n.jsxs("div",{className:"hub-header",children:[n.jsx("div",{className:"hub-icon",children:"[ TRACE ]"}),n.jsx("h1",{children:"Code Tracer"}),n.jsx("p",{children:"Step through pseudocode and track variable values"})]}),n.jsxs("div",{className:"tracer-example-select",children:[n.jsx("label",{children:"Select Example:"}),n.jsx("select",{value:t.id,onChange:v=>{const C=Jo.find(N=>N.id===v.target.value);s(C),r(0)},children:Jo.map(v=>n.jsx("option",{value:v.id,children:v.title},v.id))})]}),n.jsxs("div",{className:"tracer-layout",children:[n.jsxs("div",{className:"tracer-code-panel",children:[n.jsx("h3",{children:"Code"}),n.jsx("pre",{className:"tracer-code",children:t.code.split(`
`).map((v,C)=>n.jsxs("div",{className:`code-line ${(c==null?void 0:c.line)===C+1?"current":""}`,children:[n.jsx("span",{className:"line-number",children:C+1}),n.jsx("span",{className:"line-content",children:v})]},C))})]}),n.jsxs("div",{className:"tracer-state-panel",children:[n.jsx("h3",{children:"Variables"}),n.jsxs("table",{className:"trace-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:"Variable"}),n.jsx("th",{children:"Value"})]})}),n.jsx("tbody",{children:h.map(v=>n.jsxs("tr",{children:[n.jsx("td",{children:v}),n.jsx("td",{children:(c==null?void 0:c.variables[v])===void 0?"—":JSON.stringify(c==null?void 0:c.variables[v])})]},v))})]}),n.jsx("h3",{children:"Output"}),n.jsx("div",{className:"tracer-output",children:n.jsx("pre",{children:(c==null?void 0:c.output)||"(no output yet)"})})]})]}),n.jsxs("div",{className:"tracer-controls",children:[n.jsx("button",{className:"tracer-btn",onClick:x,children:"Reset"}),n.jsx("button",{className:"tracer-btn",onClick:w,disabled:i===0,children:"← Prev"}),n.jsxs("span",{className:"step-counter",children:["Step ",i+1," / ",t.steps.length]}),n.jsx("button",{className:"tracer-btn",onClick:p,disabled:i===t.steps.length-1,children:"Next →"})]}),n.jsxs("div",{className:"current-action",children:[n.jsx("strong",{children:"Current Action:"})," ",c==null?void 0:c.action]})]})}const Qo=[{id:"robot-1",title:"Simple Path",description:"Move the robot to the goal (green square).",gridSize:5,start:{x:0,y:2,direction:"right"},goal:{x:4,y:2},obstacles:[],code:`REPEAT 4 TIMES
{
   MOVE_FORWARD()
}`,solution:["MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD","MOVE_FORWARD"]},{id:"robot-2",title:"Turn and Move",description:"Navigate around to reach the goal.",gridSize:5,start:{x:0,y:0,direction:"right"},goal:{x:2,y:2},obstacles:[{x:1,y:0},{x:2,y:0}],code:`MOVE_FORWARD()
ROTATE_RIGHT()
MOVE_FORWARD()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()`,solution:["MOVE_FORWARD","ROTATE_RIGHT","MOVE_FORWARD","MOVE_FORWARD","ROTATE_LEFT","MOVE_FORWARD"]}];function Tv({onBack:e}){const[t,s]=A.useState(Qo[0]),[i,r]=A.useState(t.start),[o,l]=A.useState(-1),[c,h]=A.useState(!1),p=()=>{r(t.start),l(-1),h(!1)},w=()=>{const C=t.solution;if(o>=C.length-1)return;const N=o+1,I=C[N];let R={...i};if(I==="MOVE_FORWARD")switch(i.direction){case"up":R.y=Math.max(0,i.y-1);break;case"down":R.y=Math.min(t.gridSize-1,i.y+1);break;case"left":R.x=Math.max(0,i.x-1);break;case"right":R.x=Math.min(t.gridSize-1,i.x+1);break}else if(I==="ROTATE_RIGHT"){const m=["up","right","down","left"],f=m.indexOf(i.direction);R.direction=m[(f+1)%4]}else if(I==="ROTATE_LEFT"){const m=["up","right","down","left"],f=m.indexOf(i.direction);R.direction=m[(f+3)%4]}r(R),l(N),R.x===t.goal.x&&R.y===t.goal.y&&h(!0)},x=()=>{p();let C=-1;const N=setInterval(()=>{if(C++,C>=t.solution.length){clearInterval(N);return}w()},500)},v=()=>{const C=[];for(let N=0;N<t.gridSize;N++)for(let I=0;I<t.gridSize;I++){const R=i.x===I&&i.y===N,m=t.goal.x===I&&t.goal.y===N,f=t.obstacles.some(D=>D.x===I&&D.y===N);let S="grid-cell";f&&(S+=" obstacle"),m&&(S+=" goal"),R&&(S+=" robot"),C.push(n.jsxs("div",{className:S,children:[R&&n.jsxs("span",{className:"robot-arrow",children:[i.direction==="up"&&"↑",i.direction==="down"&&"↓",i.direction==="left"&&"←",i.direction==="right"&&"→"]}),m&&!R&&"★"]},`${I}-${N}`))}return C};return n.jsxs("div",{className:"robot-grid-page",children:[n.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Pseudocode Hub"}),n.jsxs("div",{className:"hub-header",children:[n.jsx("div",{className:"hub-icon",children:"[ ROBOT ]"}),n.jsx("h1",{children:"Robot Navigation"}),n.jsx("p",{children:"Practice AP CSP robot commands"})]}),n.jsxs("div",{className:"challenge-selector",children:[n.jsx("label",{children:"Challenge:"}),n.jsx("select",{value:t.id,onChange:C=>{const N=Qo.find(I=>I.id===C.target.value);s(N),r(N.start),l(-1),h(!1)},children:Qo.map(C=>n.jsx("option",{value:C.id,children:C.title},C.id))})]}),n.jsx("p",{className:"challenge-desc",children:t.description}),n.jsxs("div",{className:"robot-layout",children:[n.jsx("div",{className:"grid-container",children:n.jsx("div",{className:"robot-grid",style:{gridTemplateColumns:`repeat(${t.gridSize}, 1fr)`,gridTemplateRows:`repeat(${t.gridSize}, 1fr)`},children:v()})}),n.jsxs("div",{className:"code-panel",children:[n.jsx("h3",{children:"Pseudocode"}),n.jsx("pre",{children:t.code})]})]}),n.jsxs("div",{className:"robot-controls",children:[n.jsx("button",{className:"tracer-btn",onClick:p,children:"Reset"}),n.jsx("button",{className:"tracer-btn",onClick:w,disabled:c,children:"Step"}),n.jsx("button",{className:"tracer-btn primary",onClick:x,children:"Run All"})]}),c&&n.jsxs("div",{className:"result-box correct",children:[n.jsx("h3",{children:"✓ Goal Reached!"}),n.jsx("p",{children:"The robot successfully navigated to the goal."})]})]})}function Nv({completedExercises:e=[],onSelectExercise:t,onSelectBuilder:s,onSelectSymbols:i,onBack:r}){const[o,l]=A.useState("all"),[c,h]=A.useState("learn"),p=new Set(e),w=[{id:"all",label:"All Levels"},{id:"beginner",label:"Beginner"},{id:"intermediate",label:"Intermediate"},{id:"advanced",label:"Advanced"}],x=A.useMemo(()=>Jt.filter(C=>!(o!=="all"&&C.difficulty!==o)),[o]),v={completed:p.size,total:Jt.length};return n.jsxs("div",{className:"flowchart-hub",children:[n.jsx("button",{className:"back-btn",onClick:r,children:"← Back to Dashboard"}),n.jsxs("div",{className:"hub-header",children:[n.jsx("div",{className:"hub-icon",children:"[ FLOW ]"}),n.jsx("h1",{children:"Flowcharts"}),n.jsx("p",{children:"Learn to read, interpret, and create flowcharts"})]}),n.jsxs("div",{className:"progress-bar-container",children:[n.jsxs("div",{className:"progress-label",children:["Overall Progress: ",v.completed," / ",v.total," exercises"]}),n.jsx("div",{className:"progress-bar",children:n.jsx("div",{className:"progress-fill apcsp",style:{width:`${v.completed/v.total*100}%`}})})]}),n.jsxs("div",{className:"hub-tabs",children:[n.jsx("button",{className:`hub-tab ${c==="learn"?"active":""}`,onClick:()=>h("learn"),children:"Learn Symbols"}),n.jsx("button",{className:`hub-tab ${c==="practice"?"active":""}`,onClick:()=>h("practice"),children:"Practice"}),n.jsx("button",{className:`hub-tab ${c==="builder"?"active":""}`,onClick:()=>h("builder"),children:"Build"})]}),c==="learn"&&n.jsxs("div",{className:"symbols-section",children:[n.jsx("h2",{children:"Flowchart Symbols"}),n.jsx("p",{className:"section-intro",children:"Learn the standard flowchart symbols used in AP CSP."}),n.jsx("div",{className:"symbols-grid",children:$l.map(C=>n.jsxs("div",{className:"symbol-card",style:{borderColor:C.color},children:[n.jsxs("div",{className:"symbol-shape",style:{color:C.color},children:[C.id==="oval"&&"⬭",C.id==="rectangle"&&"▭",C.id==="diamond"&&"◇",C.id==="parallelogram"&&"▱",C.id==="arrow"&&"→"]}),n.jsx("h3",{children:C.name}),n.jsx("p",{className:"symbol-purpose",children:C.purpose}),n.jsx("p",{className:"symbol-desc",children:C.description})]},C.id))}),n.jsx("button",{className:"action-btn",onClick:i,children:"View Full Symbol Guide →"})]}),c==="practice"&&n.jsxs("div",{className:"practice-section",children:[n.jsx("div",{className:"filter-bar",children:n.jsxs("div",{className:"filter-group",children:[n.jsx("label",{children:"Difficulty:"}),n.jsx("select",{value:o,onChange:C=>l(C.target.value),children:w.map(C=>n.jsx("option",{value:C.id,children:C.label},C.id))})]})}),n.jsx("div",{className:"exercises-list",children:x.map(C=>{const N=p.has(C.id);return n.jsxs("div",{className:`exercise-card ${N?"completed":""}`,onClick:()=>t(C.id),children:[n.jsx("div",{className:"exercise-status",children:N?"✓":"○"}),n.jsxs("div",{className:"exercise-content",children:[n.jsx("h4",{children:C.title}),n.jsx("p",{className:"exercise-type",children:C.type}),n.jsx("p",{className:"exercise-prompt",children:C.question})]}),n.jsx("div",{className:`difficulty-badge ${C.difficulty}`,children:C.difficulty})]},C.id)})})]}),c==="builder"&&n.jsx("div",{className:"builder-section",children:n.jsxs("div",{className:"builder-intro",children:[n.jsx("h2",{children:"Flowchart Builder"}),n.jsx("p",{children:"Create your own flowcharts using drag-and-drop!"}),n.jsxs("ul",{children:[n.jsx("li",{children:"Drag symbols from the palette onto the canvas"}),n.jsx("li",{children:"Connect nodes with arrows to show flow"}),n.jsx("li",{children:"Edit text inside each shape"}),n.jsx("li",{children:"Export your flowchart as an image"})]}),n.jsx("button",{className:"action-btn primary",onClick:s,children:"Open Flowchart Builder →"})]})})]})}function Pv({onBack:e}){const[t,s]=A.useState($l[0].id);return n.jsxs("div",{className:"symbol-lesson",children:[n.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),n.jsxs("div",{className:"hub-header",children:[n.jsx("div",{className:"hub-icon",children:"[ SHAPES ]"}),n.jsx("h1",{children:"Flowchart Symbols"}),n.jsx("p",{children:"Learn the standard flowchart symbols used in AP CSP"})]}),n.jsx("div",{className:"symbols-detail-list",children:$l.map(i=>n.jsxs("div",{className:`symbol-detail-card ${t===i.id?"expanded":""}`,onClick:()=>s(t===i.id?null:i.id),children:[n.jsxs("div",{className:"symbol-header",children:[n.jsxs("div",{className:"symbol-preview",style:{color:i.color},children:[i.id==="oval"&&"⬭",i.id==="rectangle"&&"▭",i.id==="diamond"&&"◇",i.id==="parallelogram"&&"▱",i.id==="arrow"&&"→"]}),n.jsxs("div",{className:"symbol-info",children:[n.jsx("h3",{style:{color:i.color},children:i.name}),n.jsx("p",{children:i.purpose})]}),n.jsx("span",{className:"expand-icon",children:t===i.id?"−":"+"})]}),t===i.id&&n.jsxs("div",{className:"symbol-details",children:[n.jsx("p",{className:"symbol-description",children:i.description}),n.jsxs("div",{className:"symbol-examples",children:[n.jsx("h4",{children:"Examples:"}),n.jsx("ul",{children:i.examples.map((r,o)=>n.jsx("li",{children:r},o))})]})]})]},i.id))}),n.jsxs("div",{className:"symbol-tips",children:[n.jsx("h3",{children:"Tips for Reading Flowcharts"}),n.jsxs("ul",{children:[n.jsxs("li",{children:["Always start at the ",n.jsx("strong",{children:"oval"}),' labeled "Start"']}),n.jsxs("li",{children:["Follow the ",n.jsx("strong",{children:"arrows"})," to determine the order of operations"]}),n.jsxs("li",{children:["At a ",n.jsx("strong",{children:"diamond"}),", evaluate the condition to choose which path to follow"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Rectangles"})," contain actions - execute them in order"]}),n.jsxs("li",{children:[n.jsx("strong",{children:"Parallelograms"})," show input/output operations"]}),n.jsxs("li",{children:["End at the ",n.jsx("strong",{children:"oval"}),' labeled "End"']})]})]})]})}function Ev({flowchartId:e,onBack:t}){return n.jsxs("div",{className:"flowchart-viewer",children:[n.jsx("button",{className:"back-btn",onClick:t,children:"← Back to Flowcharts"}),n.jsxs("div",{className:"hub-header",children:[n.jsx("h1",{children:"Flowchart Viewer"}),n.jsx("p",{children:"View and study example flowcharts"})]}),n.jsx("div",{className:"flowchart-display",children:n.jsxs("div",{className:"coming-soon",children:[n.jsx("h2",{children:"Interactive Flowchart Viewer"}),n.jsx("p",{children:"This feature displays interactive flowcharts for studying."}),n.jsxs("p",{children:["Flowchart ID: ",e]})]})})]})}function Av({onBack:e}){var I;const[t,s]=A.useState([{id:"1",type:"oval",label:"Start",x:200,y:50},{id:"2",type:"rectangle",label:"Process",x:200,y:150},{id:"3",type:"oval",label:"End",x:200,y:250}]),[i,r]=A.useState(null),[o,l]=A.useState(null),c=A.useRef({x:0,y:0}),h=A.useRef(null),p=(R,m)=>{var D;R.preventDefault();const f=t.find(O=>O.id===m);if(!f)return;const S=(D=h.current)==null?void 0:D.getBoundingClientRect();S&&(c.current={x:R.clientX-S.left-f.x,y:R.clientY-S.top-f.y},l(m),r(m))},w=A.useCallback(R=>{if(!o||!h.current)return;const m=h.current.getBoundingClientRect(),f=R.clientX-m.left-c.current.x,S=R.clientY-m.top-c.current.y,D=Math.max(0,Math.min(f,m.width-100)),O=Math.max(0,Math.min(S,m.height-50));s(F=>F.map(b=>b.id===o?{...b,x:D,y:O}:b))},[o]),x=A.useCallback(()=>{l(null)},[]),v=R=>{const m={oval:"Start/End",rectangle:"Process",diamond:"Decision?",parallelogram:"Input/Output"},f={id:Date.now().toString(),type:R,label:m[R],x:200+Math.random()*100,y:100+Math.random()*200};s([...t,f])},C=(R,m)=>{s(t.map(f=>f.id===R?{...f,label:m}:f))},N=R=>{s(t.filter(m=>m.id!==R)),r(null)};return n.jsxs("div",{className:"flowchart-builder-page",children:[n.jsx("button",{className:"back-btn",onClick:e,children:"← Back to Flowcharts"}),n.jsxs("div",{className:"hub-header",children:[n.jsx("div",{className:"hub-icon",children:"[ BUILD ]"}),n.jsx("h1",{children:"Flowchart Builder"}),n.jsx("p",{children:"Create your own flowcharts"})]}),n.jsxs("div",{className:"builder-layout",children:[n.jsxs("div",{className:"symbol-palette",children:[n.jsx("h3",{children:"Symbols"}),n.jsxs("button",{className:"palette-btn",onClick:()=>v("oval"),children:[n.jsx("span",{className:"symbol-icon",children:"⬭"})," Oval"]}),n.jsxs("button",{className:"palette-btn",onClick:()=>v("rectangle"),children:[n.jsx("span",{className:"symbol-icon",children:"▭"})," Rectangle"]}),n.jsxs("button",{className:"palette-btn",onClick:()=>v("diamond"),children:[n.jsx("span",{className:"symbol-icon",children:"◇"})," Diamond"]}),n.jsxs("button",{className:"palette-btn",onClick:()=>v("parallelogram"),children:[n.jsx("span",{className:"symbol-icon",children:"▱"})," Parallelogram"]})]}),n.jsx("div",{className:"builder-canvas",children:n.jsx("div",{className:"canvas-area",ref:h,onMouseMove:w,onMouseUp:x,onMouseLeave:x,children:t.map(R=>n.jsxs("div",{className:`builder-node ${R.type} ${i===R.id?"selected":""} ${o===R.id?"dragging":""}`,style:{left:R.x,top:R.y},onMouseDown:m=>p(m,R.id),children:[R.type==="oval"&&n.jsx("span",{className:"node-shape oval-shape",children:R.label}),R.type==="rectangle"&&n.jsx("span",{className:"node-shape rect-shape",children:R.label}),R.type==="diamond"&&n.jsx("span",{className:"node-shape diamond-shape",children:R.label}),R.type==="parallelogram"&&n.jsx("span",{className:"node-shape para-shape",children:R.label})]},R.id))})}),i&&n.jsxs("div",{className:"node-editor",children:[n.jsx("h3",{children:"Edit Node"}),n.jsx("input",{type:"text",value:((I=t.find(R=>R.id===i))==null?void 0:I.label)||"",onChange:R=>C(i,R.target.value),placeholder:"Enter label..."}),n.jsx("button",{className:"action-btn",onClick:()=>N(i),children:"Delete Node"})]})]}),n.jsx("div",{className:"builder-tips",children:n.jsx("p",{children:"Click a symbol to add it. Drag nodes to move them. Click a node to edit or delete it."})})]})}function Iv({exerciseId:e,onComplete:t,onBack:s,isCompleted:i,onNextExercise:r,allExerciseIds:o=[],onSubmit:l}){const c=Jt.find(P=>P.id===e),[h,p]=A.useState(""),[w,x]=A.useState(!1),[v,C]=A.useState(!1),[N,I]=A.useState(!1),[R,m]=A.useState(0),[f,S]=A.useState(0);A.useEffect(()=>{p(""),x(!1),C(!1),I(!1),m(0),S(0)},[e]);const O=(()=>{if(!o||o.length===0){const E=Jt.findIndex(k=>k.id===e);return E>=0&&E<Jt.length-1?Jt[E+1].id:null}const P=o.indexOf(e);return P>=0&&P<o.length-1?o[P+1]:null})(),F=A.useMemo(()=>c!=null&&c.flowchartRef?Y0.find(P=>P.id===c.flowchartRef):null,[c]);if(!c)return n.jsxs("div",{className:"flowchart-exercise",children:[n.jsx("button",{className:"back-btn",onClick:s,children:"← Back"}),n.jsx("div",{className:"error-message",children:n.jsx("h1",{children:"Exercise Not Found"})})]});const b=(P,E)=>{const k=$=>$.toString().toLowerCase().trim().replace(/\s+/g," ").replace(/\s*=\s*/g,"=").replace(/[,;\n]+/g,",").replace(/\s*,\s*/g,","),Q=k(P),U=k(E);if(Q===U)return!0;if(U.includes("=")){const $=J=>{const ee=J.split(",").filter(Y=>Y.includes("="));return new Set(ee.map(Y=>Y.trim()))},Z=$(Q),W=$(U);if(Z.size===W.size){let J=!0;if(W.forEach(ee=>{Z.has(ee)||(J=!1)}),J)return!0}}const K=Q.match(/\d+/g)||[],se=U.match(/\d+/g)||[];if(K.length===1&&se.length===1&&K[0]===se[0])return!0;const _=$=>$.replace(/[^a-z0-9]/g,"");if(_(Q)===_(U))return!0;const z=U.split(/[\s()]+/).filter($=>$.length>0)[0];return!!(Q.includes(z)||z.includes(Q))},g=()=>{var E;let P=b(h,c.answer);!P&&c.acceptableAnswers&&(P=c.acceptableAnswers.some(k=>b(h,k))),C(P),x(!0),P||S(k=>k+1),l&&l({exerciseId:c.id,answer:h,isCorrect:P,exerciseType:"flowchart",exerciseTitle:((E=c.question)==null?void 0:E.substring(0,50))||c.id}),P&&!i&&t(c.id,10)},T=()=>{x(!1),C(!1)},j=()=>{O&&r?r(O):s()};return n.jsxs("div",{className:"flowchart-exercise",children:[n.jsx("button",{className:"back-btn",onClick:s,children:"← Back to Flowcharts"}),n.jsxs("div",{className:"exercise-header",children:[n.jsx("h1",{children:c.title}),n.jsxs("div",{className:"exercise-meta",children:[n.jsx("span",{className:`difficulty-badge ${c.difficulty}`,children:c.difficulty}),n.jsx("span",{className:"exercise-type-badge",children:c.type}),i&&n.jsx("span",{className:"completed-badge",children:"✓ Completed"})]})]}),n.jsx("p",{className:"exercise-description",children:c.description}),F&&n.jsxs("div",{className:"flowchart-reference",children:[n.jsx("h3",{children:"Flowchart"}),n.jsx(Ev,{flowchartData:F,showBackButton:!1})]}),n.jsxs("div",{className:"flowchart-question",children:[n.jsx("h3",{children:"Question"}),n.jsx("p",{className:"question-text",children:c.question})]}),n.jsxs("div",{className:"answer-section",children:[n.jsx("label",{children:"Your Answer:"}),n.jsx("input",{type:"text",value:h,onChange:P=>p(P.target.value),placeholder:"Type your answer...",disabled:w&&v,onKeyPress:P=>P.key==="Enter"&&h.trim()&&g()})]}),n.jsx("div",{className:"exercise-actions",children:w?n.jsx(n.Fragment,{children:!v&&n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"action-btn",onClick:T,children:"Try Again"}),f>=5&&n.jsx("button",{className:"action-btn skip-btn",onClick:j,children:"Skip Activity →"})]})}):n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"action-btn",onClick:()=>I(!N),children:N?"Hide Hints":"Show Hints"}),n.jsx("button",{className:"action-btn primary",onClick:g,disabled:!h.trim(),children:"Check Answer"})]})}),N&&c.hints&&c.hints.length>0&&n.jsxs("div",{className:"hint-box",children:[n.jsx("h4",{children:"Hints"}),n.jsx("ul",{children:c.hints.slice(0,R+1).map((P,E)=>n.jsx("li",{children:P},E))}),R<c.hints.length-1&&n.jsx("button",{className:"action-btn",onClick:()=>m(R+1),children:"Show Next Hint"})]}),w&&n.jsx("div",{className:`result-box ${v?"correct":"incorrect"}`,children:v?n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:"✓ Correct!"}),n.jsx("p",{children:"You correctly interpreted the flowchart."}),O&&r&&n.jsx("button",{className:"action-btn primary next-activity-btn",onClick:()=>r(O),children:"Next Activity →"}),!O&&n.jsx("p",{className:"completion-message",children:"You've completed all flowchart exercises!"})]}):n.jsxs(n.Fragment,{children:[n.jsx("h3",{children:"✗ Not Quite"}),n.jsx("p",{children:"Check your answer and try again."}),n.jsxs("p",{className:"attempt-counter",children:["Attempt ",f," of 5",f>=5&&" - You can now skip this activity"]})]})}),w&&c.explanation&&n.jsxs("div",{className:"explanation-box",children:[n.jsx("h4",{children:"Explanation"}),n.jsx("p",{children:c.explanation})]})]})}function Dv({weekKey:e,onSelectExercise:t,onBack:s,completedExercises:i}){const r=qc[e],o=e.replace("week","");if(!r)return n.jsxs("div",{className:"week-view",children:[n.jsx("button",{className:"back-button",onClick:s,children:"← Back to Dashboard"}),n.jsx("p",{children:"Week not found"})]});const l=p=>`difficulty difficulty-${p.toLowerCase()}`,c=p=>p.isCapstone?"🏆":p.isProject?"🎮":p.requiresNode?"⚙️":"",h=p=>p.isCapstone?n.jsx("span",{className:"capstone-badge",children:"Capstone"}):p.isProject?n.jsx("span",{className:"project-badge",children:"Project"}):p.requiresNode?n.jsx("span",{className:"node-badge",children:"Node.js"}):null;return n.jsxs("div",{className:"week-view data-apis-week",children:[n.jsx("button",{className:"back-button",onClick:s,children:"← Back to Dashboard"}),n.jsxs("div",{className:"week-header-large",children:[n.jsxs("h1",{children:["Week ",o,": ",r.title]}),n.jsx("p",{className:"big-idea",children:r.bigIdea})]}),n.jsxs("div",{className:"learning-objectives",children:[n.jsx("h3",{children:"Learning Objectives"}),n.jsx("ul",{children:r.learningObjectives&&r.learningObjectives.map((p,w)=>n.jsx("li",{children:p},w))})]}),n.jsx("div",{className:"days-list",children:r.days.map(p=>n.jsxs("div",{className:"day-section",children:[n.jsxs("div",{className:"day-header",children:[n.jsxs("h2",{children:["Day ",p.day,": ",p.title]}),n.jsx("p",{className:"day-objective",children:p.objective})]}),n.jsx("div",{className:"exercises-grid",children:p.exercises.map(w=>{const x=i.includes(w.id);return n.jsxs("div",{className:`exercise-card ${x?"completed":""} ${w.isProject?"project-card":""} ${w.isCapstone?"capstone-card":""}`,onClick:()=>t(w.id),children:[n.jsxs("div",{className:"exercise-header",children:[n.jsx("span",{className:l(w.difficulty),children:w.difficulty}),n.jsxs("span",{className:"points",children:[w.points," pts"]})]}),n.jsxs("h3",{className:"exercise-title",children:[c(w)," ",w.title]}),n.jsx("p",{className:"exercise-description",children:w.description}),n.jsx("div",{className:"exercise-badges",children:h(w)}),x&&n.jsx("div",{className:"completed-badge",children:"✓ Completed"})]},w.id)})}),p.exitTicket&&n.jsxs("div",{className:"exit-ticket",children:[n.jsx("strong",{children:"Exit Ticket:"})," ",p.exitTicket]})]},p.day))})]})}const Zt={week1:{title:"Fetching & Displaying Data",terms:[{id:"json",term:"JSON",definition:"JavaScript Object Notation - a lightweight text format for storing and exchanging data between systems.",example:'{"name": "Alice", "age": 25, "hobbies": ["coding", "music"]}',relatedTerms:["parse","stringify","object"],week:1,day:1},{id:"parse",term:"Parse",definition:"Converting a JSON string into a JavaScript object that can be used in code.",example:`let obj = JSON.parse('{"name": "Alice"}'); // obj.name = "Alice"`,relatedTerms:["json","stringify"],week:1,day:1},{id:"stringify",term:"Stringify",definition:"Converting a JavaScript object into a JSON string for storage or transmission.",example:`let str = JSON.stringify({name: "Alice"}); // '{"name":"Alice"}'`,relatedTerms:["json","parse"],week:1,day:1},{id:"key-value-pair",term:"Key-Value Pair",definition:"A property name (key) and its associated data (value) in JSON or JavaScript objects.",example:'"name": "Alice" - "name" is the key, "Alice" is the value',relatedTerms:["json","object"],week:1,day:1},{id:"nested-data",term:"Nested Data",definition:"Objects or arrays contained inside other objects or arrays, creating hierarchical data structures.",example:'{"user": {"address": {"city": "Seattle"}}} // Access: data.user.address.city',relatedTerms:["json","object","array"],week:1,day:1},{id:"data-type",term:"Data Type",definition:"The classification of data that determines what values it can hold (string, number, boolean, array, object, null).",example:'string: "hello", number: 42, boolean: true, array: [1,2,3], object: {}, null: null',relatedTerms:["json"],week:1,day:1},{id:"api",term:"API",definition:"Application Programming Interface - a set of rules that allows different software applications to communicate with each other.",example:"Weather API provides weather data; your app sends a request and receives temperature, conditions, etc.",relatedTerms:["fetch","endpoint","request","response"],week:1,day:2},{id:"fetch",term:"fetch()",definition:"A JavaScript function that makes HTTP requests to retrieve data from URLs/APIs.",example:"fetch('https://api.example.com/data').then(response => response.json())",relatedTerms:["api","promise","async"],week:1,day:2},{id:"promise",term:"Promise",definition:"An object representing an operation that will complete in the future, either successfully (fulfilled) or with an error (rejected).",example:"fetch() returns a Promise that resolves when data arrives",relatedTerms:["async","await","then"],week:1,day:2},{id:"then",term:".then()",definition:"A method used to handle the result of a Promise when it completes successfully.",example:"fetch(url).then(response => response.json()).then(data => console.log(data))",relatedTerms:["promise","callback","async"],week:1,day:2},{id:"response",term:"Response",definition:"The data returned from a server after making a request, including status code, headers, and body.",example:"response.ok // true if status 200-299; response.json() // parse body as JSON",relatedTerms:["request","fetch","status-code"],week:1,day:2},{id:"callback",term:"Callback",definition:"A function passed as an argument to another function, to be executed later when an operation completes.",example:".then(data => { console.log(data); }) // Arrow function is the callback",relatedTerms:["promise","async"],week:1,day:2},{id:"asynchronous",term:"Asynchronous",definition:"Code that doesn't block execution - other code can run while waiting for an operation to complete.",example:"fetch() is asynchronous - code after it runs while waiting for the server response",relatedTerms:["synchronous","async","await"],week:1,day:3},{id:"synchronous",term:"Synchronous",definition:"Code that runs line by line, with each line waiting for the previous one to complete before executing.",example:"let x = 1; let y = 2; let z = x + y; // Each line waits for the previous",relatedTerms:["asynchronous"],week:1,day:3},{id:"async",term:"async",definition:"A keyword that marks a function as asynchronous, allowing the use of await inside it.",example:"async function loadData() { ... }",relatedTerms:["await","promise","asynchronous"],week:1,day:3},{id:"await",term:"await",definition:"A keyword that pauses an async function until a Promise resolves, then returns the result.",example:"let data = await fetch(url).then(r => r.json()); // Waits for fetch to complete",relatedTerms:["async","promise"],week:1,day:3},{id:"try-catch",term:"try/catch",definition:"A JavaScript structure for handling errors - code in 'try' runs, and if it fails, 'catch' handles the error.",example:"try { riskyCode(); } catch (error) { console.log('Error:', error.message); }",relatedTerms:["error","throw"],week:1,day:4},{id:"throw",term:"throw",definition:"A keyword used to manually trigger an error, which can be caught by a catch block.",example:"if (!data) throw new Error('Data not found');",relatedTerms:["try-catch","error"],week:1,day:4},{id:"error-object",term:"Error Object",definition:"A JavaScript object containing information about an error, including message and stack trace.",example:"catch (error) { console.log(error.message); // 'Network error' }",relatedTerms:["try-catch","throw"],week:1,day:4},{id:"status-code",term:"Status Code",definition:"A three-digit HTTP response number indicating the result of a request (200=OK, 404=Not Found, 500=Server Error).",example:"if (response.status === 404) { throw new Error('Not found'); }",relatedTerms:["response","http"],week:1,day:4},{id:"graceful-degradation",term:"Graceful Degradation",definition:"Designing an application to continue functioning (with reduced features) when errors occur.",example:"If weather API fails, show cached data or 'Data unavailable' instead of crashing",relatedTerms:["error-handling"],week:1,day:4}]},week2:{title:"Live Data & Visualization",terms:[{id:"setinterval",term:"setInterval()",definition:"A function that runs specified code repeatedly at set time intervals (in milliseconds).",example:"setInterval(updateData, 5000); // Runs updateData every 5 seconds",relatedTerms:["clearinterval","polling"],week:2,day:6},{id:"clearinterval",term:"clearInterval()",definition:"A function that stops a running interval using its ID.",example:"let id = setInterval(func, 1000); clearInterval(id); // Stops the interval",relatedTerms:["setinterval"],week:2,day:6},{id:"interval-id",term:"Interval ID",definition:"A unique number returned by setInterval() used to identify and stop that specific interval.",example:"let intervalId = setInterval(func, 1000); // intervalId is a number like 42",relatedTerms:["setinterval","clearinterval"],week:2,day:6},{id:"polling",term:"Polling",definition:"Repeatedly checking for new data at regular intervals by making periodic API requests.",example:"Check ISS position every 5 seconds by calling the API in a setInterval",relatedTerms:["setinterval","real-time"],week:2,day:6},{id:"real-time",term:"Real-time",definition:"Data that updates as changes happen, providing current information without manual refresh.",example:"Stock prices updating every second, live sports scores",relatedTerms:["polling","setinterval"],week:2,day:6},{id:"refresh-rate",term:"Refresh Rate",definition:"How frequently data is updated, typically measured in seconds or milliseconds.",example:"A 5-second refresh rate means new data is fetched every 5 seconds",relatedTerms:["polling","setinterval"],week:2,day:6},{id:"leaflet",term:"Leaflet.js",definition:"An open-source JavaScript library for creating interactive, mobile-friendly maps.",example:"let map = L.map('mapDiv').setView([47.6, -122.3], 13);",relatedTerms:["latitude","longitude","marker"],week:2,day:7},{id:"latitude",term:"Latitude",definition:"The north-south position on Earth, measured in degrees from -90 (South Pole) to 90 (North Pole).",example:"Seattle's latitude is approximately 47.6 degrees north",relatedTerms:["longitude","coordinates"],week:2,day:7},{id:"longitude",term:"Longitude",definition:"The east-west position on Earth, measured in degrees from -180 to 180, with 0 at the Prime Meridian.",example:"Seattle's longitude is approximately -122.3 degrees west",relatedTerms:["latitude","coordinates"],week:2,day:7},{id:"marker",term:"Marker",definition:"A visual indicator placed on a map at specific coordinates to show a location.",example:"L.marker([47.6, -122.3]).addTo(map).bindPopup('Seattle');",relatedTerms:["leaflet","popup"],week:2,day:7},{id:"popup",term:"Popup",definition:"A small information window that appears when clicking or hovering over a map marker.",example:"marker.bindPopup('<b>Seattle</b><br>The Emerald City');",relatedTerms:["marker","leaflet"],week:2,day:7},{id:"tile-layer",term:"Tile Layer",definition:"The background map images loaded in tiles (small squares) that make up the visible map.",example:"L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);",relatedTerms:["leaflet"],week:2,day:7},{id:"geojson",term:"GeoJSON",definition:"A JSON format specifically designed for encoding geographic data structures.",example:'{"type": "Point", "coordinates": [-122.3, 47.6]}',relatedTerms:["json","leaflet"],week:2,day:7},{id:"chartjs",term:"Chart.js",definition:"A JavaScript library for creating responsive, animated charts and graphs.",example:"new Chart(ctx, { type: 'bar', data: {...}, options: {...} });",relatedTerms:["dataset","labels","canvas"],week:2,day:8},{id:"dataset",term:"Dataset",definition:"A collection of data values to be displayed in a chart, along with styling options.",example:"datasets: [{ label: 'Sales', data: [10, 20, 30], backgroundColor: 'blue' }]",relatedTerms:["chartjs","labels"],week:2,day:8},{id:"labels",term:"Labels",definition:"Text identifying data points in a chart, typically shown on the x-axis.",example:"labels: ['January', 'February', 'March']",relatedTerms:["chartjs","dataset"],week:2,day:8},{id:"legend",term:"Legend",definition:"A key explaining what different colors, lines, or markers represent in a chart.",example:"The legend shows 'Temperature' in red and 'Humidity' in blue",relatedTerms:["chartjs"],week:2,day:8},{id:"axes",term:"Axes",definition:"The x (horizontal) and y (vertical) reference lines in a chart that define the scale.",example:"options: { scales: { y: { beginAtZero: true } } }",relatedTerms:["chartjs"],week:2,day:8},{id:"promise-all",term:"Promise.all()",definition:"Runs multiple promises simultaneously and returns when ALL complete (fails if any fails).",example:"let [a, b] = await Promise.all([fetch(url1), fetch(url2)]);",relatedTerms:["promise","promise-allsettled"],week:2,day:9},{id:"promise-allsettled",term:"Promise.allSettled()",definition:"Runs multiple promises and returns results for all, even if some fail.",example:"let results = await Promise.allSettled([fetch(url1), fetch(url2)]); // [{status:'fulfilled'}, {status:'rejected'}]",relatedTerms:["promise","promise-all"],week:2,day:9},{id:"parallel-loading",term:"Parallel Loading",definition:"Fetching multiple resources at the same time rather than one after another.",example:"Using Promise.all() to load weather, news, and stock data simultaneously",relatedTerms:["sequential-loading","promise-all"],week:2,day:9},{id:"sequential-loading",term:"Sequential Loading",definition:"Fetching resources one after another, waiting for each to complete before starting the next.",example:"await fetch(url1); await fetch(url2); // Slower than parallel",relatedTerms:["parallel-loading"],week:2,day:9},{id:"data-aggregation",term:"Data Aggregation",definition:"Combining data from multiple sources into a unified display or dataset.",example:"A dashboard showing weather from one API and news from another",relatedTerms:["dashboard"],week:2,day:9},{id:"dashboard",term:"Dashboard",definition:"A single display showing multiple data visualizations and information panels.",example:"A weather dashboard with map, forecast chart, and current conditions",relatedTerms:["data-aggregation","chartjs","leaflet"],week:2,day:9}]},week3:{title:"Server-Side JavaScript",terms:[{id:"nodejs",term:"Node.js",definition:"A JavaScript runtime that allows running JavaScript code outside of a web browser, typically on servers.",example:"Run 'node server.js' in terminal to execute JavaScript server-side",relatedTerms:["runtime","npm"],week:3,day:11},{id:"runtime",term:"Runtime",definition:"The environment where code executes, providing necessary resources and APIs.",example:"Browser runtime has 'document' and 'window'; Node.js runtime has 'fs' and 'process'",relatedTerms:["nodejs"],week:3,day:11},{id:"npm",term:"npm",definition:"Node Package Manager - a tool for installing, managing, and sharing JavaScript packages.",example:"npm install express // Installs the Express package",relatedTerms:["package-json","nodejs"],week:3,day:11},{id:"package-json",term:"package.json",definition:"A file that describes a Node.js project, including its name, version, scripts, and dependencies.",example:'{"name": "my-app", "dependencies": {"express": "^4.18.0"}}',relatedTerms:["npm","dependencies"],week:3,day:11},{id:"module",term:"Module",definition:"A reusable piece of code that can be imported into other files using require() or import.",example:"const express = require('express'); // Imports the express module",relatedTerms:["require","npm"],week:3,day:11},{id:"require",term:"require()",definition:"A Node.js function used to import modules, packages, or local files.",example:"const fs = require('fs'); // Built-in module; const myFile = require('./myFile'); // Local file",relatedTerms:["module","nodejs"],week:3,day:11},{id:"terminal",term:"Terminal/CLI",definition:"A text-based interface for running commands on your computer.",example:"Open terminal, type 'node app.js', press Enter to run your code",relatedTerms:["nodejs"],week:3,day:11},{id:"express",term:"Express.js",definition:"A minimal and flexible web framework for Node.js that simplifies building web servers and APIs.",example:"const app = express(); app.get('/', (req, res) => res.send('Hello'));",relatedTerms:["nodejs","route","middleware"],week:3,day:12},{id:"server",term:"Server",definition:"A program that listens for incoming requests and sends back responses, running continuously.",example:"app.listen(3000) starts a server on port 3000",relatedTerms:["express","port"],week:3,day:12},{id:"route",term:"Route",definition:"A URL path that the server responds to, combined with an HTTP method.",example:"app.get('/about', handler) // Responds to GET requests at /about",relatedTerms:["express","endpoint"],week:3,day:12},{id:"request-object",term:"Request (req)",definition:"An object containing all information about an incoming HTTP request (URL, headers, body, parameters).",example:"req.params.id // URL parameter; req.query.search // Query string; req.body // POST data",relatedTerms:["response-object","express"],week:3,day:12},{id:"response-object",term:"Response (res)",definition:"An object used to send data back to the client, including status codes and body content.",example:"res.json({data: 'hello'}); res.status(404).send('Not found');",relatedTerms:["request-object","express"],week:3,day:12},{id:"port",term:"Port",definition:"A number identifying where a server listens for connections (like an apartment number for the internet).",example:"app.listen(3000) // Server listens on port 3000, access at localhost:3000",relatedTerms:["server"],week:3,day:12},{id:"middleware",term:"Middleware",definition:"Functions that run between receiving a request and sending a response, processing or modifying data.",example:"app.use(express.json()); // Middleware that parses JSON request bodies",relatedTerms:["express"],week:3,day:12},{id:"url-parameter",term:"URL Parameter",definition:"A dynamic value embedded in the URL path, defined with a colon in the route.",example:"app.get('/users/:id', ...) // req.params.id captures the value",relatedTerms:["query-string","route"],week:3,day:13},{id:"query-string",term:"Query String",definition:"Key-value pairs appended to a URL after a question mark, used for optional parameters.",example:"/search?q=javascript&limit=10 // req.query = {q: 'javascript', limit: '10'}",relatedTerms:["url-parameter"],week:3,day:13},{id:"request-body",term:"Request Body",definition:"Data sent with POST/PUT requests, typically containing form data or JSON.",example:"fetch(url, {method: 'POST', body: JSON.stringify({name: 'Alice'})})",relatedTerms:["post","json"],week:3,day:13},{id:"post",term:"POST",definition:"An HTTP method used to send data to a server, typically to create new resources.",example:"app.post('/users', (req, res) => { // Create new user from req.body })",relatedTerms:["get","put","delete","crud"],week:3,day:13},{id:"put",term:"PUT",definition:"An HTTP method used to update existing resources on a server.",example:"app.put('/users/:id', (req, res) => { // Update user with req.body })",relatedTerms:["post","crud"],week:3,day:13},{id:"delete-method",term:"DELETE",definition:"An HTTP method used to remove resources from a server.",example:"app.delete('/users/:id', (req, res) => { // Delete user by id })",relatedTerms:["crud"],week:3,day:13},{id:"crud",term:"CRUD",definition:"The four basic database operations: Create, Read, Update, Delete.",example:"POST=Create, GET=Read, PUT=Update, DELETE=Delete",relatedTerms:["post","get","put","delete-method"],week:3,day:13},{id:"database",term:"Database",definition:"An organized system for storing, retrieving, and managing data that persists beyond program execution.",example:"NeDB stores data in a file; MongoDB stores in a server; both persist data",relatedTerms:["nedb","collection","document"],week:3,day:14},{id:"persistent-storage",term:"Persistent Storage",definition:"Data storage that survives program restarts, unlike variables which are lost when the program stops.",example:"Database files, localStorage, and files on disk are persistent; RAM is not",relatedTerms:["database"],week:3,day:14},{id:"nedb",term:"NeDB",definition:"A lightweight, embedded NoSQL database for Node.js that stores data in local files.",example:"const db = new Datastore({filename: 'data.db', autoload: true});",relatedTerms:["database","document"],week:3,day:14},{id:"collection",term:"Collection",definition:"A group of related database records, similar to a table in SQL databases.",example:"A 'users' collection contains all user documents",relatedTerms:["database","document"],week:3,day:14},{id:"document",term:"Document",definition:"A single record in a NoSQL database, typically a JavaScript object with an _id field.",example:'{_id: "abc123", name: "Alice", email: "alice@mail.com"}',relatedTerms:["collection","nedb"],week:3,day:14},{id:"query",term:"Query",definition:"A request to find specific data in a database using criteria or filters.",example:"db.find({age: {$gt: 18}}) // Find documents where age > 18",relatedTerms:["database","crud"],week:3,day:14},{id:"insert",term:"Insert",definition:"Adding a new document/record to a database collection.",example:"db.insert({name: 'Alice'}, callback) // Adds new document",relatedTerms:["crud","database"],week:3,day:14}]},week4:{title:"APIs with Keys & Deployment",terms:[{id:"environment-variable",term:"Environment Variable",definition:"A variable set outside the code that's available to the running program, used for configuration and secrets.",example:"process.env.API_KEY // Reads API_KEY from the environment",relatedTerms:["dotenv","env-file"],week:4,day:16},{id:"env-file",term:".env File",definition:"A file containing environment variables in KEY=value format, loaded at application start.",example:"API_KEY=abc123\\nPORT=3000\\nDEBUG=true",relatedTerms:["environment-variable","dotenv"],week:4,day:16},{id:"dotenv",term:"dotenv",definition:"An npm package that loads environment variables from a .env file into process.env.",example:"require('dotenv').config(); // Now process.env.API_KEY works",relatedTerms:["environment-variable","env-file"],week:4,day:16},{id:"secret",term:"Secret",definition:"Sensitive data like API keys, passwords, or tokens that must not be exposed in code.",example:"API keys, database passwords, JWT secrets, OAuth tokens",relatedTerms:["environment-variable","gitignore"],week:4,day:16},{id:"gitignore",term:".gitignore",definition:"A file that tells Git which files/folders to exclude from version control.",example:".env\\nnode_modules/\\n*.log // These won't be committed to Git",relatedTerms:["secret","env-file"],week:4,day:16},{id:"configuration",term:"Configuration",definition:"Settings that change between environments (development, testing, production).",example:"Database URL, API keys, debug mode, port numbers",relatedTerms:["environment-variable"],week:4,day:16},{id:"api-key",term:"API Key",definition:"A secret code that identifies your application to an API, often required for access or tracking usage.",example:"appid=abc123def456 // Added to API requests for authentication",relatedTerms:["secret","proxy"],week:4,day:17},{id:"proxy",term:"Proxy",definition:"A server that makes requests on behalf of another client, often used to hide secrets.",example:"Browser → Your Server (adds API key) → External API",relatedTerms:["api-key","server-side"],week:4,day:17},{id:"client-side",term:"Client-side",definition:"Code that runs in the user's browser, visible and accessible to users.",example:"JavaScript in HTML files, React apps - users can view source code",relatedTerms:["server-side"],week:4,day:17},{id:"server-side",term:"Server-side",definition:"Code that runs on your server, hidden from users and able to access secrets.",example:"Node.js/Express code - users cannot see this code or its variables",relatedTerms:["client-side","proxy"],week:4,day:17},{id:"endpoint",term:"Endpoint",definition:"A specific URL path that handles requests, part of an API.",example:"/api/weather is an endpoint; /api/users/:id is another endpoint",relatedTerms:["route","api"],week:4,day:17},{id:"forward",term:"Forward",definition:"Passing a request from one place to another, typically from proxy to external API.",example:"Proxy receives /api/weather, forwards to api.openweathermap.org",relatedTerms:["proxy"],week:4,day:17},{id:"cors",term:"CORS",definition:"Cross-Origin Resource Sharing - security rules that control which websites can make requests to your API.",example:"Browser blocks requests to different domains unless CORS headers allow it",relatedTerms:["proxy"],week:4,day:17},{id:"deployment",term:"Deployment",definition:"The process of making an application available on the internet for users to access.",example:"Uploading code to Glitch, Render, or Vercel to make it publicly accessible",relatedTerms:["hosting","production"],week:4,day:18},{id:"hosting",term:"Hosting",definition:"A service that runs your application on servers connected to the internet 24/7.",example:"Glitch, Render, Heroku, AWS - services that host your app",relatedTerms:["deployment","production"],week:4,day:18},{id:"production",term:"Production",definition:"The live, deployed version of your application that real users access.",example:"https://myapp.glitch.me is the production URL",relatedTerms:["development","deployment"],week:4,day:18},{id:"development",term:"Development",definition:"The local version of your application used for testing and building features.",example:"http://localhost:3000 is your development environment",relatedTerms:["production"],week:4,day:18},{id:"domain",term:"Domain",definition:"The URL address where your application can be accessed on the internet.",example:"myapp.glitch.me, example.com, weather-app.onrender.com",relatedTerms:["deployment","hosting"],week:4,day:18},{id:"build",term:"Build",definition:"The process of preparing code for production, often including optimization and bundling.",example:"npm run build // Creates optimized production files",relatedTerms:["deployment"],week:4,day:18}]}};function Ja(){return[...Zt.week1.terms,...Zt.week2.terms,...Zt.week3.terms,...Zt.week4.terms]}function Rv(e){var s;const t=`week${e}`;return((s=Zt[t])==null?void 0:s.terms)||[]}function Lv(e){return Ja().find(s=>s.id===e)}function Ov(e){const t=Ja(),s=e.toLowerCase();return t.filter(i=>i.term.toLowerCase().includes(s)||i.definition.toLowerCase().includes(s))}function _v(){return{total:Ja().length,week1:Zt.week1.terms.length,week2:Zt.week2.terms.length,week3:Zt.week3.terms.length,week4:Zt.week4.terms.length}}const Zo=e=>new Promise((t,s)=>{if(document.querySelector(`script[src="${e}"]`)){t();return}const r=document.createElement("script");r.src=e,r.async=!0,r.onload=t,r.onerror=s,document.head.appendChild(r)}),Mv=e=>new Promise(t=>{if(document.querySelector(`link[href="${e}"]`)){t();return}const i=document.createElement("link");i.rel="stylesheet",i.href=e,i.onload=t,document.head.appendChild(i)});function Fv({exerciseId:e,onBack:t,onComplete:s,isCompleted:i,onSubmit:r}){const o=V0(e),[l,c]=A.useState(""),[h,p]=A.useState(""),[w,x]=A.useState("client"),[v,C]=A.useState([]),[N,I]=A.useState(!1),[R,m]=A.useState(!1),[f,S]=A.useState(!1),[D,O]=A.useState(""),[F,b]=A.useState(null),[g,T]=A.useState(!1);A.useRef(null);const j=A.useRef(null);if(A.useEffect(()=>{o&&(c(o.starterCode||""),p(o.serverCode||""),C([]),I(!1),m(!1),O(""),x(o.requiresNode?"server":"client"))},[e,o]),A.useEffect(()=>{o&&(async()=>{var $,Z;try{o!=null&&o.requiresNode||await Zo("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"),($=o==null?void 0:o.libraries)!=null&&$.includes("chartjs")&&await Zo("https://cdn.jsdelivr.net/npm/chart.js"),(Z=o==null?void 0:o.libraries)!=null&&Z.includes("leaflet")&&(await Mv("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"),await Zo("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js")),T(!0)}catch(W){console.error("Failed to load scripts:",W)}})()},[o]),!o)return n.jsxs("div",{className:"exercise-detail",children:[n.jsx("button",{className:"back-button",onClick:t,children:"← Back"}),n.jsx("p",{children:"Exercise not found"})]});const P=()=>{if(S(!0),O(""),o.requiresNode)O(`
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
      `.trim());else try{const z=E(l);if(j.current){const $=j.current,Z=$.contentDocument||$.contentWindow.document;Z.open(),Z.write(z),Z.close()}O("Code running in preview...")}catch(z){O(`Error: ${z.message}`)}},E=z=>{var Y,q;const $=(Y=o.libraries)==null?void 0:Y.includes("leaflet"),Z=(q=o.libraries)==null?void 0:q.includes("chartjs"),W=!$&&!Z;let J="",ee="";return W&&(J+='<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"><\/script>'),$&&(ee+='<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />',J+='<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"><\/script>'),Z&&(J+='<script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>'),`
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
  ${ee}
  ${J}
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
      ${z}
    } catch(e) {
      console.error(e.message);
    }
  <\/script>
</body>
</html>
    `},k=()=>{if(S(!1),j.current){const z=j.current.contentDocument||j.current.contentWindow.document;z.open(),z.write('<html><body style="background:#1a1a2e;color:#888;padding:20px;">Click "Run Code" to see your output</body></html>'),z.close()}},Q=()=>{c(o.starterCode||""),p(o.serverCode||""),k()},U=z=>{v.includes(z)||C([...v,z])},K=()=>{I(!0),c(o.solutionCode||"")},se=()=>{i||(r&&r({exerciseId:o.id,answer:l,isCorrect:!0,exerciseType:"data-apis",exerciseTitle:o.title}),s(o.id,o.points))},_=z=>`difficulty difficulty-${z.toLowerCase()}`,H=z=>{navigator.clipboard.writeText(z).then(()=>{alert("Code copied to clipboard!")})};return n.jsxs("div",{className:"exercise-detail data-apis-exercise",children:[n.jsx("button",{className:"back-button",onClick:t,children:"← Back to Week"}),n.jsxs("div",{className:"exercise-header-detail",children:[n.jsxs("div",{className:"exercise-meta",children:[n.jsx("span",{className:_(o.difficulty),children:o.difficulty}),n.jsxs("span",{className:"points",children:[o.points," pts"]}),o.isProject&&n.jsx("span",{className:"project-badge",children:"Project"}),o.isCapstone&&n.jsx("span",{className:"capstone-badge",children:"Capstone"}),o.requiresNode&&n.jsx("span",{className:"node-badge",children:"Node.js Required"})]}),n.jsx("h1",{children:o.title}),n.jsx("p",{className:"exercise-description-large",children:o.description})]}),o.explanation&&n.jsxs("div",{className:"explanation-section",children:[n.jsxs("button",{className:`explanation-toggle ${R?"open":""}`,onClick:()=>m(!R),children:[n.jsx("span",{className:"toggle-icon",children:R?"▼":"▶"}),n.jsxs("span",{className:"toggle-text",children:["📚 Learn: ",o.explanation.title]})]}),R&&n.jsxs("div",{className:"explanation-content",children:[n.jsxs("div",{className:"concept-section",children:[n.jsx("h4",{children:"Concept"}),n.jsx("pre",{className:"concept-text",children:o.explanation.concept})]}),o.explanation.example&&n.jsxs("div",{className:"example-section",children:[n.jsx("h4",{children:"Example (Different from this exercise!)"}),n.jsx("pre",{className:"example-code",children:n.jsx("code",{children:o.explanation.example})})]}),o.explanation.keyPoints&&o.explanation.keyPoints.length>0&&n.jsxs("div",{className:"key-points-section",children:[n.jsx("h4",{children:"Key Points"}),n.jsx("ul",{children:o.explanation.keyPoints.map((z,$)=>n.jsx("li",{children:z},$))})]})]})]}),o.vocabularyTerms&&o.vocabularyTerms.length>0&&n.jsxs("div",{className:"vocab-tags",children:[n.jsx("span",{className:"vocab-label",children:"Key Terms:"}),o.vocabularyTerms.map(z=>{const $=Lv(z);return $?n.jsx("button",{className:"vocab-tag",onClick:()=>b($),children:$.term},z):null})]}),F&&n.jsx("div",{className:"vocab-popup",onClick:()=>b(null),children:n.jsxs("div",{className:"vocab-popup-content",onClick:z=>z.stopPropagation(),children:[n.jsx("h3",{children:F.term}),n.jsx("p",{children:F.definition}),F.example&&n.jsx("pre",{className:"vocab-example",children:n.jsx("code",{children:F.example})}),n.jsx("button",{onClick:()=>b(null),children:"Close"})]})}),n.jsxs("div",{className:"prompt-box",children:[n.jsx("h3",{children:"Challenge"}),n.jsx("pre",{children:o.prompt})]}),o.serverCode&&n.jsxs("div",{className:"code-tabs",children:[n.jsx("button",{className:`tab-btn ${w==="client"?"active":""}`,onClick:()=>x("client"),children:"📄 Client Code"}),n.jsx("button",{className:`tab-btn ${w==="server"?"active":""}`,onClick:()=>x("server"),children:"⚙️ Server Code"})]}),n.jsxs("div",{className:"editor-container",children:[n.jsxs("div",{className:"code-section",children:[n.jsxs("div",{className:"code-header",children:[n.jsx("h3",{children:w==="server"?"Server Code (server.js)":"Your Code"}),n.jsxs("div",{className:"code-actions",children:[n.jsx("button",{onClick:P,className:"run-btn",children:"▶ Run"}),n.jsx("button",{onClick:k,className:"stop-btn",children:"⬛ Stop"}),n.jsx("button",{onClick:Q,className:"reset-btn",children:"↺ Reset"}),n.jsx("button",{onClick:()=>H(w==="server"?h:l),className:"copy-btn",children:"📋 Copy"})]})]}),n.jsx("textarea",{className:"code-editor",value:w==="server"?h:l,onChange:z=>w==="server"?p(z.target.value):c(z.target.value),spellCheck:!1})]}),n.jsxs("div",{className:"canvas-section",children:[n.jsx("h3",{children:"Output"}),o.requiresNode?n.jsx("div",{className:"output-container node-output",children:n.jsx("pre",{children:D||'Click "Run" to see instructions for running this Node.js exercise.'})}):n.jsx("div",{className:"preview-container",children:n.jsx("iframe",{ref:j,title:"Code Preview",className:"code-preview-iframe",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals"})})]})]}),n.jsxs("div",{className:"hints-section",children:[n.jsx("h3",{children:"Hints"}),n.jsx("div",{className:"hints-list",children:o.hints&&o.hints.map((z,$)=>n.jsx("div",{className:"hint-item",children:v.includes($)?n.jsxs("div",{className:"hint-revealed",children:[n.jsxs("span",{className:"hint-number",children:["Hint ",$+1,":"]})," ",z]}):n.jsxs("button",{className:"hint-button",onClick:()=>U($),children:["Reveal Hint ",$+1]})},$))})]}),o.resources&&o.resources.length>0&&n.jsxs("div",{className:"resources-section",children:[n.jsx("h3",{children:"Resources"}),n.jsx("div",{className:"resources-list",children:o.resources.map((z,$)=>n.jsx("a",{href:z.url,target:"_blank",rel:"noopener noreferrer",className:"resource-link",children:z.title},$))})]}),n.jsx("div",{className:"solution-section",children:N?n.jsxs("div",{className:"solution-revealed",children:[n.jsx("h3",{children:"Solution"}),n.jsx("pre",{className:"solution-code",children:o.solutionCode})]}):n.jsx("button",{className:"solution-button",onClick:K,children:"Show Solution (try on your own first!)"})}),n.jsx("div",{className:"complete-section",children:i?n.jsxs("div",{className:"already-completed",children:["✓ You've completed this exercise! (",o.points," points earned)"]}):n.jsxs("button",{className:"complete-button",onClick:se,children:["Mark as Complete (+",o.points," points)"]})})]})}const zv=({onBack:e})=>{const[t,s]=A.useState("all"),[i,r]=A.useState(""),[o,l]=A.useState(null),c=_v(),h=[{key:"all",label:"All Terms",count:c.total},{key:"1",label:"Week 1: Fetching Data",count:c.week1},{key:"2",label:"Week 2: Visualization",count:c.week2},{key:"3",label:"Week 3: Server-Side",count:c.week3},{key:"4",label:"Week 4: Deployment",count:c.week4}];let p=[];i.trim()?p=Ov(i):t==="all"?p=Ja():p=Rv(parseInt(t));const w={};t!=="all"&&!i&&p.forEach(v=>{const C=`Day ${v.day}`;w[C]||(w[C]=[]),w[C].push(v)});const x=v=>{l(o===v?null:v)};return n.jsxs("div",{className:"vocabulary-page data-apis-vocab",children:[e&&n.jsx("button",{className:"back-button",onClick:e,children:"← Back to Dashboard"}),n.jsx("h2",{style:{color:"#4ecdc4",marginBottom:"0.5rem"},children:"Data & APIs Vocabulary"}),n.jsx("p",{style:{marginBottom:"1.5rem",color:"#b0b0b0"},children:"Master these key terms to understand data fetching, APIs, and full-stack development."}),n.jsxs("div",{className:"vocab-search",children:[n.jsx("input",{type:"text",placeholder:"Search terms...",value:i,onChange:v=>r(v.target.value),className:"vocab-search-input"}),i&&n.jsx("button",{className:"vocab-search-clear",onClick:()=>r(""),children:"✕"})]}),n.jsx("div",{className:"vocab-categories",children:h.map(v=>n.jsxs("button",{className:`vocab-category-btn ${t===v.key?"active":""}`,onClick:()=>{s(v.key),r("")},children:[v.label,n.jsxs("span",{className:"vocab-count",children:["(",v.count,")"]})]},v.key))}),n.jsxs("div",{style:{marginTop:"1rem",color:"#b0b0b0"},children:["Showing ",p.length," term",p.length!==1?"s":"",i&&` matching "${i}"`]}),t!=="all"&&!i?n.jsx("div",{className:"vocab-grouped",children:Object.entries(w).map(([v,C])=>n.jsxs("div",{className:"vocab-day-group",children:[n.jsx("h3",{className:"vocab-day-header",children:v}),n.jsx("div",{className:"vocab-list",children:C.map(N=>n.jsx(ph,{term:N,expanded:o===N.id,onToggle:()=>x(N.id)},N.id))})]},v))}):n.jsx("div",{className:"vocab-list",children:p.map(v=>n.jsx(ph,{term:v,expanded:o===v.id,onToggle:()=>x(v.id),showWeek:t==="all"},v.id))}),p.length===0&&n.jsxs("div",{style:{textAlign:"center",padding:"3rem",color:"#b0b0b0"},children:["No vocabulary terms found.",i&&" Try a different search term."]})]})},ph=({term:e,expanded:t,onToggle:s,showWeek:i})=>n.jsxs("div",{className:`vocab-card ${t?"expanded":""}`,onClick:s,children:[n.jsxs("div",{className:"vocab-card-header",children:[n.jsxs("div",{className:"vocab-card-meta",children:[i&&n.jsxs("span",{className:"vocab-week-badge",children:["Week ",e.week]}),n.jsxs("span",{className:"vocab-day-badge",children:["Day ",e.day]})]}),n.jsx("h3",{className:"vocab-term",children:e.term}),n.jsx("span",{className:"vocab-expand-icon",children:t?"−":"+"})]}),n.jsx("p",{className:"vocab-definition",children:e.definition}),t&&n.jsxs("div",{className:"vocab-expanded-content",children:[e.example&&n.jsxs("div",{className:"vocab-example-section",children:[n.jsx("strong",{children:"Example:"}),n.jsx("pre",{className:"vocab-example-code",children:n.jsx("code",{children:e.example})})]}),e.relatedTerms&&e.relatedTerms.length>0&&n.jsxs("div",{className:"vocab-related",children:[n.jsx("strong",{children:"Related:"}),n.jsx("div",{className:"vocab-related-tags",children:e.relatedTerms.map(r=>n.jsx("span",{className:"vocab-related-tag",children:r},r))})]})]})]});function Hv({weekKey:e,onSelectExercise:t,onBack:s,completedExercises:i}){const r=Mn[e],o=e.replace("week","");if(!r)return n.jsxs("div",{className:"week-view",children:[n.jsx("button",{className:"back-button",onClick:s,children:"← Back to Dashboard"}),n.jsx("p",{children:"Week not found"})]});const l=p=>`difficulty difficulty-${p.toLowerCase()}`,c=p=>p.id.includes("capstone")?"🏆":p.difficulty==="Hard"?"⭐":"",h=p=>p.id.includes("capstone")?n.jsx("span",{className:"capstone-badge",children:"Capstone"}):null;return n.jsxs("div",{className:"week-view objects-images-week",children:[n.jsx("button",{className:"back-button",onClick:s,children:"← Back to Dashboard"}),n.jsxs("div",{className:"week-header-large",children:[n.jsxs("h1",{children:["Week ",o,": ",r.title]}),n.jsx("p",{className:"big-idea",children:r.bigIdea})]}),n.jsxs("div",{className:"learning-objectives",children:[n.jsx("h3",{children:"Big Idea"}),n.jsx("p",{children:r.bigIdea})]}),n.jsx("div",{className:"days-list",children:r.days.map(p=>n.jsxs("div",{className:"day-section",children:[n.jsxs("div",{className:"day-header",children:[n.jsxs("h2",{children:["Day ",p.day,": ",p.title]}),n.jsx("p",{className:"day-objective",children:p.objective})]}),n.jsx("div",{className:"exercises-grid",children:p.exercises.map(w=>{const x=i.includes(w.id);return n.jsxs("div",{className:`exercise-card ${x?"completed":""} ${w.id.includes("capstone")?"capstone-card":""}`,onClick:()=>t(w.id),children:[n.jsxs("div",{className:"exercise-header",children:[n.jsx("span",{className:l(w.difficulty),children:w.difficulty}),n.jsxs("span",{className:"points",children:[w.points," pts"]})]}),n.jsxs("h3",{className:"exercise-title",children:[c(w)," ",w.title]}),n.jsx("p",{className:"exercise-description",children:w.description}),n.jsx("div",{className:"exercise-badges",children:h(w)}),x&&n.jsx("div",{className:"completed-badge",children:"✓ Completed"})]},w.id)})}),p.exitTicket&&n.jsxs("div",{className:"exit-ticket",children:[n.jsx("strong",{children:"Exit Ticket:"})," ",p.exitTicket]})]},p.day))})]})}function Uv({exerciseId:e,onBack:t,onComplete:s,isCompleted:i,onSubmit:r}){const o=X0(e),[l,c]=A.useState(""),[h,p]=A.useState([]),[w,x]=A.useState(!1),[v,C]=A.useState(!1),[N,I]=A.useState(!1),R=A.useRef(null);if(A.useEffect(()=>{o&&(c(o.starterCode||""),p([]),x(!1),C(!1))},[e,o]),!o)return n.jsxs("div",{className:"exercise-detail",children:[n.jsx("button",{className:"back-button",onClick:t,children:"← Back"}),n.jsx("p",{children:"Exercise not found"})]});const m=()=>{I(!0);try{const j=f(l);if(R.current){const P=R.current,E=P.contentDocument||P.contentWindow.document;E.open(),E.write(j),E.close()}}catch(j){console.error("Error running code:",j)}},f=j=>`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; padding: 10px; font-family: Arial, sans-serif; background: #1a1a2e; color: white; overflow: hidden; }
    canvas { display: block; }
    #console-output {
      background: #0d0d1a;
      border: 1px solid #333;
      padding: 10px;
      margin-top: 10px;
      font-family: monospace;
      font-size: 12px;
      max-height: 100px;
      overflow-y: auto;
      white-space: pre-wrap;
    }
    .log-entry { color: #00ff88; margin: 2px 0; }
    .error-entry { color: #ff6b6b; margin: 2px 0; }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"><\/script>
</head>
<body>
  <div id="app"></div>
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

    window.onerror = function(msg, url, lineNo, columnNo, error) {
      console.error(msg + ' (line ' + lineNo + ')');
      return false;
    };

    try {
      ${j}
    } catch(e) {
      console.error(e.message);
    }
  <\/script>
</body>
</html>
    `,S=()=>{if(I(!1),R.current){const j=R.current.contentDocument||R.current.contentWindow.document;j.open(),j.write('<html><body style="background:#1a1a2e;color:#888;padding:20px;font-family:Arial;">Click "Run Code" to see your output</body></html>'),j.close()}},D=()=>{c(o.starterCode||""),S()},O=j=>{h.includes(j)||p([...h,j])},F=()=>{x(!0),c(o.solutionCode||"")},b=()=>{i||(r&&r({exerciseId:o.id,answer:l,isCorrect:!0,exerciseType:"objects-images",exerciseTitle:o.title}),s(o.id,o.points))},g=j=>`difficulty difficulty-${j.toLowerCase()}`,T=j=>{navigator.clipboard.writeText(j).then(()=>{alert("Code copied to clipboard!")})};return n.jsxs("div",{className:"exercise-detail objects-images-exercise",children:[n.jsx("button",{className:"back-button",onClick:t,children:"← Back to Week"}),n.jsxs("div",{className:"exercise-header-detail",children:[n.jsxs("div",{className:"exercise-meta",children:[n.jsx("span",{className:g(o.difficulty),children:o.difficulty}),n.jsxs("span",{className:"points",children:[o.points," pts"]}),o.id.includes("capstone")&&n.jsx("span",{className:"capstone-badge",children:"Capstone"})]}),n.jsx("h1",{children:o.title}),n.jsx("p",{className:"exercise-description-large",children:o.description})]}),o.explanation&&n.jsxs("div",{className:"explanation-section",children:[n.jsxs("button",{className:`explanation-toggle ${v?"open":""}`,onClick:()=>C(!v),children:[n.jsx("span",{className:"toggle-icon",children:v?"▼":"▶"}),n.jsxs("span",{className:"toggle-text",children:["📚 Learn: ",o.explanation.title]})]}),v&&n.jsxs("div",{className:"explanation-content",children:[n.jsxs("div",{className:"concept-section",children:[n.jsx("h4",{children:"Concept"}),n.jsx("pre",{className:"concept-text",children:o.explanation.concept})]}),o.explanation.example&&n.jsxs("div",{className:"example-section",children:[n.jsx("h4",{children:"Example (Different from this exercise!)"}),n.jsx("pre",{className:"example-code",children:n.jsx("code",{children:o.explanation.example})})]}),o.explanation.keyPoints&&o.explanation.keyPoints.length>0&&n.jsxs("div",{className:"key-points-section",children:[n.jsx("h4",{children:"Key Points"}),n.jsx("ul",{children:o.explanation.keyPoints.map((j,P)=>n.jsx("li",{children:j},P))})]})]})]}),o.vocabularyTerms&&o.vocabularyTerms.length>0&&n.jsxs("div",{className:"vocab-tags",children:[n.jsx("span",{className:"vocab-label",children:"Key Terms:"}),o.vocabularyTerms.map((j,P)=>n.jsx("span",{className:"vocab-tag",children:j},P))]}),n.jsxs("div",{className:"prompt-box",children:[n.jsx("h3",{children:"Challenge"}),n.jsx("pre",{children:o.prompt})]}),n.jsxs("div",{className:"editor-container",children:[n.jsxs("div",{className:"code-section",children:[n.jsxs("div",{className:"code-header",children:[n.jsx("h3",{children:"Your Code"}),n.jsxs("div",{className:"code-actions",children:[n.jsx("button",{onClick:m,className:"run-btn",children:"▶ Run"}),n.jsx("button",{onClick:S,className:"stop-btn",children:"⬛ Stop"}),n.jsx("button",{onClick:D,className:"reset-btn",children:"↺ Reset"}),n.jsx("button",{onClick:()=>T(l),className:"copy-btn",children:"📋 Copy"})]})]}),n.jsx("textarea",{className:"code-editor",value:l,onChange:j=>c(j.target.value),spellCheck:!1})]}),n.jsxs("div",{className:"canvas-section",children:[n.jsx("h3",{children:"Output"}),n.jsx("div",{className:"preview-container",children:n.jsx("iframe",{ref:R,title:"Code Preview",className:"code-preview-iframe",sandbox:"allow-scripts allow-same-origin"})})]})]}),n.jsxs("div",{className:"hints-section",children:[n.jsx("h3",{children:"Hints"}),n.jsx("div",{className:"hints-list",children:o.hints&&o.hints.map((j,P)=>n.jsx("div",{className:"hint-item",children:h.includes(P)?n.jsxs("div",{className:"hint-revealed",children:[n.jsxs("span",{className:"hint-number",children:["Hint ",P+1,":"]})," ",j]}):n.jsxs("button",{className:"hint-button",onClick:()=>O(P),children:["Reveal Hint ",P+1]})},P))})]}),o.resources&&o.resources.length>0&&n.jsxs("div",{className:"resources-section",children:[n.jsx("h3",{children:"Resources"}),n.jsx("div",{className:"resources-list",children:o.resources.map((j,P)=>n.jsx("a",{href:j.url,target:"_blank",rel:"noopener noreferrer",className:"resource-link",children:j.title},P))})]}),n.jsx("div",{className:"solution-section",children:w?n.jsxs("div",{className:"solution-revealed",children:[n.jsx("h3",{children:"Solution"}),n.jsx("pre",{className:"solution-code",children:o.solutionCode})]}):n.jsx("button",{className:"solution-button",onClick:F,children:"Show Solution (try on your own first!)"})}),n.jsx("div",{className:"complete-section",children:i?n.jsxs("div",{className:"already-completed",children:["✓ You've completed this exercise! (",o.points," points earned)"]}):n.jsxs("button",{className:"complete-button",onClick:b,children:["Mark as Complete (+",o.points," points)"]})})]})}function Bv(){Kc();const[e,t]=A.useState(null),[s,i]=A.useState(null),[r,o]=A.useState(null),[l,c]=A.useState(!1),[h,p]=A.useState(!1),[w,x]=A.useState("dashboard"),[v,C]=A.useState(null),[N,I]=A.useState(null),[R,m]=A.useState([]),[f,S]=A.useState([]),[D,O]=A.useState([]),[F,b]=A.useState(0),g=A.useRef(null),[T,j]=A.useState([]),[P,E]=A.useState(null),[k,Q]=A.useState(null),[U,K]=A.useState([]),[se,_]=A.useState([]),[H,z]=A.useState({}),[$,Z]=A.useState(null),[W,J]=A.useState(null),[ee,Y]=A.useState(null),[q,ie]=A.useState([]),[ve,we]=A.useState(null),[ye,Je]=A.useState(null),[Qe,it]=A.useState([]),[Lt,Ot]=A.useState(null),[Vn,Gn]=A.useState(null);A.useEffect(()=>{const V=localStorage.getItem("cyberrange-session");if(V)try{const Ie=JSON.parse(V);Ie.user&&(t(Ie.user),$n(Ie.user))}catch(Ie){console.error("Error loading session:",Ie)}const te=localStorage.getItem("cyberrange-teacher-session");if(te)try{const Ie=JSON.parse(te);Ie.teacher&&i(Ie.teacher)}catch(Ie){console.error("Error loading teacher session:",Ie)}return()=>{g.current&&(g.current(),g.current=null)}},[]);const $n=async V=>{if(qn(),V.classCode){j([]);const te=Um(V.classCode,Ie=>{j(Ie)});g.current=te}},qn=()=>{const V=localStorage.getItem("cyberrange-progress");if(V)try{const te=JSON.parse(V);m(te.completed||[]),S(te.completedScenarios||[]),O(te.completedExercises||[]),K(te.completedPseudocode||[]),_(te.completedFlowcharts||[]),ie(te.completedDataApisExercises||[]),it(te.completedObjectsImagesExercises||[]),z(te.exitTicketResponses||{}),b(te.points||0)}catch(te){console.error("Error loading local progress:",te)}},Xn=A.useCallback(async(V,te,Ie,_s,ri,gr,yr,lo,sn)=>{localStorage.setItem("cyberrange-progress",JSON.stringify({completed:V,completedScenarios:te,completedExercises:Ie,completedPseudocode:_s,completedFlowcharts:ri,completedDataApisExercises:gr,completedObjectsImagesExercises:yr,exitTicketResponses:lo,points:sn}))},[e]);A.useEffect(()=>{e&&Xn(R,f,D,U,se,q,Qe,H,F)},[R,f,D,U,se,q,Qe,H,F,e,Xn]);const Qa=V=>{g.current&&(g.current(),g.current=null),t(V),localStorage.setItem("cyberrange-session",JSON.stringify({user:V})),V.completedChallenges&&(m(V.completedChallenges),S(V.completedScenarios||[]),O(V.completedExercises||[]),b(V.totalPoints||0)),$n(V)},Kn=V=>{i(V),c(!1),localStorage.setItem("cyberrange-teacher-session",JSON.stringify({teacher:V}))},Jn=V=>{o(V)},lr=()=>{o(null)},Ae=()=>{i(null),o(null),c(!1),localStorage.removeItem("cyberrange-teacher-session")},Le=()=>{g.current&&(g.current(),g.current=null),t(null),o(null),m([]),S([]),O([]),K([]),_([]),ie([]),it([]),z({}),j([]),b(0),x("dashboard"),E(null),Q(null),Z(null),J(null),Y(null),we(null),Je(null),Ot(null),Gn(null),localStorage.removeItem("cyberrange-session")},en=V=>{C(V),x("challenges")},cr=V=>{I(V),x("challenge-detail")},dr=(V,te)=>{R.includes(V)||(m([...R,V]),b(F+te))},Za=()=>{I(null),x("challenges")},_t=()=>{C(null),I(null),x("dashboard")},ur=(V,te)=>{f.includes(V)||(S([...f,V]),b(F+te))},hr=()=>{window.confirm("Are you sure you want to reset all progress? This cannot be undone.")&&(m([]),S([]),O([]),K([]),_([]),ie([]),it([]),z({}),b(0),localStorage.removeItem("cyberrange-progress"),x("dashboard"))},Qn=V=>{E(V),x("week")},eo=V=>{Q(V),x("exercise-detail")},to=(V,te)=>{D.includes(V)||(O([...D,V]),b(F+te))},Zn=(V,te,Ie)=>{z(_s=>({..._s,[V]:te}))},pr=()=>{Q(null),x("week")},so=()=>{E(null),x("dashboard")},Ds=V=>{x(V==="pseudocode"?"pseudocode-hub":"flowchart-hub")},ei=V=>{Z(V),x("topic-lesson")},Rs=V=>{J(V),x("pseudocode-exercise")},os=(V,te)=>{U.includes(V)||(K([...U,V]),b(F+te))},ti=V=>{Y(V),x("flowchart-exercise")},si=(V,te)=>{se.includes(V)||(_([...se,V]),b(F+te))},Wt=async V=>{if(!(!e||e.id==="demo"))try{await Tx(e.id,V.exerciseId,{answer:V.answer,isCorrect:V.isCorrect,exerciseType:V.exerciseType,exerciseTitle:V.exerciseTitle})}catch(te){console.error("Error saving submission:",te)}},Yt=()=>{x("dashboard")},mr=()=>{x("dashboard")},Oe=()=>{Z(null),x("pseudocode-hub")},fr=()=>{J(null),x("pseudocode-hub")},Ls=()=>{Y(null),x("flowchart-hub")},Os=V=>{we(V),x("data-apis-week")},no=V=>{Je(V),x("data-apis-exercise")},io=(V,te)=>{q.includes(V)||(ie([...q,V]),b(F+te))},ls=()=>{Je(null),x("data-apis-week")},ro=()=>{we(null),x("dashboard")},ao=V=>{Ot(V),x("objects-images-week")},ni=V=>{Gn(V),x("objects-images-exercise")},oo=(V,te)=>{Qe.includes(V)||(it([...Qe,V]),b(F+te))},ii=()=>{Gn(null),x("objects-images-week")},tn=()=>{Ot(null),x("dashboard")};return l?n.jsx(Fx,{onLogin:Kn,onBack:()=>c(!1)}):s&&!r?n.jsx(zx,{teacher:s,onSelectClass:Jn,onLogout:Ae}):s&&r?n.jsx(xv,{classCode:r,onBack:lr}):e?n.jsxs("div",{className:"app",children:[n.jsx("header",{className:"header",children:n.jsxs("div",{className:"header-content",children:[n.jsx("div",{className:"logo",children:"CyberEd Range"}),n.jsxs("nav",{className:"nav",children:[n.jsx("button",{className:`nav-btn ${w==="dashboard"?"active":""}`,onClick:_t,children:"Dashboard"}),n.jsx("button",{className:`nav-btn ${w==="network-monitor"?"active":""}`,onClick:()=>x("network-monitor"),children:"Network Monitor"}),n.jsx("button",{className:`nav-btn ${w==="tools"?"active":""}`,onClick:()=>x("tools"),children:"Tools"}),n.jsx("button",{className:`nav-btn ${w==="vocabulary"?"active":""}`,onClick:()=>x("vocabulary"),children:"Vocabulary"}),n.jsx("button",{className:"nav-btn theme-btn",onClick:()=>p(!0),title:"Change Theme",children:"Theme"}),n.jsx("button",{className:"nav-btn",onClick:hr,style:{background:"rgba(244, 67, 54, 0.2)",borderColor:"#f44336"},children:"Reset"}),n.jsxs("div",{className:"user-info",children:[n.jsx("span",{className:"user-name",children:e==null?void 0:e.name}),n.jsx("span",{className:"user-class",children:e==null?void 0:e.classCode}),n.jsx("button",{className:"logout-btn",onClick:Le,children:"Logout"})]})]})]})}),n.jsxs("main",{className:"main-content",children:[w==="dashboard"&&n.jsx(K0,{studentName:e==null?void 0:e.name,totalPoints:F,assignments:T,completedChallenges:R,completedScenarios:f,completedExercises:D,completedPseudocode:U,completedFlowcharts:se,completedDataApisExercises:q,completedObjectsImagesExercises:Qe,onSelectCategory:en,onSelectNetworkMonitor:()=>x("network-monitor"),onSelectWeek:Qn,onSelectAPCSP:Ds,onSelectDataApisWeek:Os,onSelectObjectsImagesWeek:ao}),w==="challenges"&&v&&n.jsxs(n.Fragment,{children:[n.jsx("button",{className:"back-btn",onClick:_t,children:"Back to Dashboard"}),n.jsx("div",{style:{marginTop:"1rem"},children:n.jsx(Hx,{category:v,completedChallenges:R,onSelectChallenge:cr})})]}),w==="challenge-detail"&&N&&n.jsx(Ux,{challengeId:N,onComplete:dr,onBack:Za,isCompleted:R.includes(N),onSubmit:Wt}),w==="week"&&P&&n.jsx(wv,{weekKey:P,onSelectExercise:eo,onBack:so,completedExercises:D,exitTicketResponses:H,onSubmitExitTicket:Zn}),w==="exercise-detail"&&k&&n.jsx(bv,{exerciseId:k,onComplete:to,onBack:pr,isCompleted:D.includes(k),onSubmit:Wt}),w==="vocabulary"&&n.jsx(Bx,{}),w==="tools"&&n.jsx(hv,{}),w==="network-monitor"&&n.jsx(rv,{completedScenarios:f,onCompleteScenario:ur,onBack:_t}),w==="pseudocode-hub"&&n.jsx(kv,{completedExercises:U,onSelectTopic:ei,onSelectExercise:Rs,onBack:Yt}),w==="topic-lesson"&&$&&n.jsx(jv,{topicId:$,onBack:Oe,onSelectExercise:Rs}),w==="pseudocode-exercise"&&W&&n.jsx(Sv,{exerciseId:W,onComplete:os,onBack:fr,isCompleted:U.includes(W),onNextExercise:Rs,onSubmit:Wt}),w==="code-tracer"&&n.jsx(Cv,{onBack:Yt}),w==="robot-grid"&&n.jsx(Tv,{onBack:Yt}),w==="flowchart-hub"&&n.jsx(Nv,{completedExercises:se,onSelectExercise:ti,onSelectBuilder:()=>x("flowchart-builder"),onSelectSymbols:()=>x("symbol-lesson"),onBack:mr}),w==="symbol-lesson"&&n.jsx(Pv,{onBack:()=>x("flowchart-hub")}),w==="flowchart-exercise"&&ee&&n.jsx(Iv,{exerciseId:ee,onComplete:si,onBack:Ls,isCompleted:se.includes(ee),onNextExercise:ti,onSubmit:Wt}),w==="flowchart-builder"&&n.jsx(Av,{onBack:()=>x("flowchart-hub")}),w==="data-apis-week"&&ve&&n.jsx(Dv,{weekKey:ve,onSelectExercise:no,onBack:ro,completedExercises:q}),w==="data-apis-exercise"&&ye&&n.jsx(Fv,{exerciseId:ye,onComplete:io,onBack:ls,isCompleted:q.includes(ye),onSubmit:Wt}),w==="data-apis-vocabulary"&&n.jsx(zv,{onBack:_t}),w==="objects-images-week"&&Lt&&n.jsx(Hv,{weekKey:Lt,onSelectExercise:ni,onBack:tn,completedExercises:Qe}),w==="objects-images-exercise"&&Vn&&n.jsx(Uv,{exerciseId:Vn,onComplete:oo,onBack:ii,isCompleted:Qe.includes(Vn),onSubmit:Wt})]}),h&&n.jsx(Xc,{onClose:()=>p(!1)})]}):n.jsx(pv,{onLogin:Qa,onTeacherLogin:()=>c(!0)})}el.createRoot(document.getElementById("root")).render(n.jsx(Sf.StrictMode,{children:n.jsx(Bv,{})}));
