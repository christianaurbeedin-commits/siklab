(function(){"use strict";const zt={config:{apiKey:"AIzaSyBLGlSChy5HxCrMDDbCQ3xIDk-GIp-QiWk",authDomain:"siklab-mlqshs.firebaseapp.com",databaseURL:"https://siklab-mlqshs-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"siklab-mlqshs",storageBucket:"siklab-mlqshs.firebasestorage.app",messagingSenderId:"419155543365",appId:"1:419155543365:web:241b6a2033e4e1ee09ea2c"},vapidKey:"BBuCYZL6x8egS1CPQK2v6vr7wQ2jIkOyta5V1E6hWVk6YKuI5haZES579hoIrOVIcB7m6F4MR4zzyhHC2nvVGMg",pagesUrl:"https://christianaurbeedin-commits.github.io/siklab/",apkUrl:"https://christianaurbeedin-commits.github.io/siklab/SIKLAB.apk"},yh=zt.config&&zt.config.apiKey&&!/PASTE/.test(zt.config.apiKey);self.SIKLAB_FB={config:yh?zt.config:null,vapidKey:/PASTE/.test(zt.vapidKey)?"":zt.vapidKey,pagesUrl:/YOUR-GITHUB/.test(zt.pagesUrl)?"":zt.pagesUrl,apkUrl:/YOUR-GITHUB/.test(zt.apkUrl)?"":zt.apkUrl,build:990824},yh||console.warn("[SIKLAB] src/firebase-config.js is not filled in yet, so the game runs offline (no school server).");const u_=()=>{};/**
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
 */const Bh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const U=function(n,e){if(!n)throw Hr(e)},Hr=function(n){return new Error("Firebase Database ("+Bh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Dh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},h_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,x=l?n[s+2]:0,h=i>>2,u=(i&3)<<4|a>>4;let f=(a&15)<<2|x>>6,p=x&63;l||(p=64,o||(f=64)),r.push(t[h],t[u],t[f],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Dh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):h_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const x=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||x==null||u==null)throw new d_;const f=i<<2|a>>4;if(r.push(f),x!==64){const p=a<<4&240|x>>2;if(r.push(p),u!==64){const A=x<<6&192|u;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class d_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vh=function(n){const e=Dh(n);return Fc.encodeByteArray(e,!0)},ta=function(n){return vh(n).replace(/\./g,"")},na=function(n){try{return Fc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function f_(n){return Fh(void 0,n)}function Fh(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!E_(t)||(n[t]=Fh(n[t],e[t]));return n}function E_(n){return n!=="__proto__"}/**
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
 */function wh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const p_=()=>wh().__FIREBASE_DEFAULTS__,m_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},g_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&na(n[1]);return e&&JSON.parse(e)},ra=()=>{try{return u_()||p_()||m_()||g_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},__=n=>{var e,t;return(t=(e=ra())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},C_=n=>{const e=__(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ih=()=>{var n;return(n=ra())===null||n===void 0?void 0:n.config},A_=n=>{var e;return(e=ra())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function tr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Th(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function y_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ta(JSON.stringify(t)),ta(JSON.stringify(o)),""].join(".")}const ci={};function B_(){const n={prod:[],emulator:[]};for(const e of Object.keys(ci))ci[e]?n.emulator.push(e):n.prod.push(e);return n}function D_(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let bh=!1;function v_(n,e){if(typeof window>"u"||typeof document>"u"||!tr(window.location.host)||ci[n]===e||ci[n]||bh)return;ci[n]=e;function t(f){return`__firebase__banner__${f}`}const r="__firebase__banner",i=B_().prod.length>0;function o(){const f=document.getElementById(r);f&&f.remove()}function a(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function l(f,p){f.setAttribute("width","24"),f.setAttribute("id",p),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function x(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{bh=!0,o()},f}function h(f,p){f.setAttribute("id",p),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function u(){const f=D_(r),p=t("text"),A=document.getElementById(p)||document.createElement("span"),w=t("learnmore"),v=document.getElementById(w)||document.createElement("a"),R=t("preprendIcon"),V=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const T=f.element;a(T),h(v,w);const I=x();l(V,R),T.append(V,A,v,I),document.body.appendChild(T)}i?(A.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
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
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function kh(){var n;const e=(n=ra())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function F_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function w_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ph(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function I_(){const n=Qe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function T_(){return Bh.NODE_ADMIN===!0}function Sh(){return!kh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rh(){return!kh()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Ic(){try{return typeof indexedDB=="object"}catch{return!1}}function Nh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function b_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const k_="FirebaseError";class $t extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=k_,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?P_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $t(s,a,r)}}function P_(n,e){return n.replace(S_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const S_=/\{\$([^}]+)}/g;/**
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
 */function li(n){return JSON.parse(n)}function Ue(n){return JSON.stringify(n)}/**
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
 */const Oh=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=li(na(i[0])||""),t=li(na(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},R_=function(n){const e=Oh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},N_=function(n){const e=Oh(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function kt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function rr(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Tc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sa(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Qr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Vh(i)&&Vh(o)){if(!Qr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Vh(n){return n!==null&&typeof n=="object"}/**
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
 */function bc(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ui(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class O_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)r[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],x,h;for(let u=0;u<80;u++){u<40?u<20?(x=a^i&(o^a),h=1518500249):(x=i^o^a,h=1859775393):u<60?(x=i&o|a&(i|o),h=2400959708):(x=i^o^a,h=3395469782);const f=(s<<5|s>>>27)+x+l+h+r[u]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function V_(n,e){const t=new M_(n,e);return t.subscribe.bind(t)}class M_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");L_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=kc),s.error===void 0&&(s.error=kc),s.complete===void 0&&(s.complete=kc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function L_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function kc(){}function Yr(n,e){return`${n} failed: ${e} argument `}/**
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
 */const U_=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,U(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ia=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ce(n){return n&&n._delegate?n._delegate:n}class vt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const sr="[DEFAULT]";/**
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
 */class j_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bt;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(z_(e))try{this.getOrInitializeService({instanceIdentifier:sr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=sr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=sr){return this.instances.has(e)}getOptions(e=sr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q_(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=sr){return this.component?this.component.multipleInstances?e:sr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q_(n){return n===sr?void 0:n}function z_(n){return n.instantiationMode==="EAGER"}/**
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
 */class $_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new j_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const W_={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},K_=se.INFO,G_={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},H_=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=G_[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oa{constructor(e){this.name=e,this._logLevel=K_,this._logHandler=H_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?W_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Q_=(n,e)=>e.some(t=>n instanceof t);let Mh,Lh;function Y_(){return Mh||(Mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X_(){return Lh||(Lh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uh=new WeakMap,Pc=new WeakMap,jh=new WeakMap,Sc=new WeakMap,Rc=new WeakMap;function J_(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(tn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Uh.set(t,n)}).catch(()=>{}),Rc.set(e,n),e}function Z_(n){if(Pc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Pc.set(n,e)}let Nc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function eC(n){Nc=n(Nc)}function tC(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Oc(this),e,...t);return jh.set(r,e.sort?e.sort():[e]),tn(r)}:X_().includes(n)?function(...e){return n.apply(Oc(this),e),tn(Uh.get(this))}:function(...e){return tn(n.apply(Oc(this),e))}}function nC(n){return typeof n=="function"?tC(n):(n instanceof IDBTransaction&&Z_(n),Q_(n,Y_())?new Proxy(n,Nc):n)}function tn(n){if(n instanceof IDBRequest)return J_(n);if(Sc.has(n))return Sc.get(n);const e=nC(n);return e!==n&&(Sc.set(n,e),Rc.set(e,n)),e}const Oc=n=>Rc.get(n);function aa(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(tn(o.result),l.oldVersion,l.newVersion,tn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",x=>s(x.oldVersion,x.newVersion,x))}).catch(()=>{}),a}function Vc(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),tn(t).then(()=>{})}const rC=["get","getKey","getAll","getAllKeys","count"],sC=["put","add","delete","clear"],Mc=new Map;function qh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Mc.get(e))return Mc.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=sC.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rC.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let x=l.store;return r&&(x=x.index(a.shift())),(await Promise.all([x[t](...a),s&&l.done]))[0]};return Mc.set(e,i),i}eC(n=>({...n,get:(e,t,r)=>qh(e,t)||n.get(e,t,r),has:(e,t)=>!!qh(e,t)||n.has(e,t)}));/**
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
 */class iC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(oC(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function oC(n){const e=n.getComponent();return e?.type==="VERSION"}const Lc="@firebase/app",zh="0.13.2";/**
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
 */const nn=new oa("@firebase/app"),aC="@firebase/app-compat",cC="@firebase/analytics-compat",lC="@firebase/analytics",xC="@firebase/app-check-compat",uC="@firebase/app-check",hC="@firebase/auth",dC="@firebase/auth-compat",fC="@firebase/database",EC="@firebase/data-connect",pC="@firebase/database-compat",mC="@firebase/functions",gC="@firebase/functions-compat",_C="@firebase/installations",CC="@firebase/installations-compat",AC="@firebase/messaging",yC="@firebase/messaging-compat",BC="@firebase/performance",DC="@firebase/performance-compat",vC="@firebase/remote-config",FC="@firebase/remote-config-compat",wC="@firebase/storage",IC="@firebase/storage-compat",TC="@firebase/firestore",bC="@firebase/ai",kC="@firebase/firestore-compat",PC="firebase",SC="11.10.0";/**
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
 */const Uc="[DEFAULT]",RC={[Lc]:"fire-core",[aC]:"fire-core-compat",[lC]:"fire-analytics",[cC]:"fire-analytics-compat",[uC]:"fire-app-check",[xC]:"fire-app-check-compat",[hC]:"fire-auth",[dC]:"fire-auth-compat",[fC]:"fire-rtdb",[EC]:"fire-data-connect",[pC]:"fire-rtdb-compat",[mC]:"fire-fn",[gC]:"fire-fn-compat",[_C]:"fire-iid",[CC]:"fire-iid-compat",[AC]:"fire-fcm",[yC]:"fire-fcm-compat",[BC]:"fire-perf",[DC]:"fire-perf-compat",[vC]:"fire-rc",[FC]:"fire-rc-compat",[wC]:"fire-gcs",[IC]:"fire-gcs-compat",[TC]:"fire-fst",[kC]:"fire-fst-compat",[bC]:"fire-vertex","fire-js":"fire-js",[PC]:"fire-js-all"};/**
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
 */const ca=new Map,NC=new Map,jc=new Map;function $h(n,e){try{n.container.addComponent(e)}catch(t){nn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Pt(n){const e=n.name;if(jc.has(e))return nn.debug(`There were multiple attempts to register component ${e}.`),!1;jc.set(e,n);for(const t of ca.values())$h(t,n);for(const t of NC.values())$h(t,n);return!0}function Xr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ft(n){return n==null?!1:n.settings!==void 0}/**
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
 */const OC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new nr("app","Firebase",OC);/**
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
 */class VC{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const hi=SC;function Wh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});if(t||(t=Ih()),!t)throw _n.create("no-options");const i=ca.get(s);if(i){if(Qr(t,i.options)&&Qr(r,i.config))return i;throw _n.create("duplicate-app",{appName:s})}const o=new $_(s);for(const l of jc.values())o.addComponent(l);const a=new VC(t,r,o);return ca.set(s,a),a}function Kh(n=Uc){const e=ca.get(n);if(!e&&n===Uc&&Ih())return Wh();if(!e)throw _n.create("no-app",{appName:n});return e}function ht(n,e,t){var r;let s=(r=RC[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nn.warn(a.join(" "));return}Pt(new vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const MC="firebase-heartbeat-database",LC=1,di="firebase-heartbeat-store";let qc=null;function Gh(){return qc||(qc=aa(MC,LC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(di)}catch(t){console.warn(t)}}}}).catch(n=>{throw _n.create("idb-open",{originalErrorMessage:n.message})})),qc}async function UC(n){try{const t=(await Gh()).transaction(di),r=await t.objectStore(di).get(Qh(n));return await t.done,r}catch(e){if(e instanceof $t)nn.warn(e.message);else{const t=_n.create("idb-get",{originalErrorMessage:e?.message});nn.warn(t.message)}}}async function Hh(n,e){try{const r=(await Gh()).transaction(di,"readwrite");await r.objectStore(di).put(e,Qh(n)),await r.done}catch(t){if(t instanceof $t)nn.warn(t.message);else{const r=_n.create("idb-set",{originalErrorMessage:t?.message});nn.warn(r.message)}}}function Qh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const jC=1024,qC=30;class zC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new WC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>qC){const o=KC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yh(),{heartbeatsToSend:r,unsentEntries:s}=$C(this._heartbeatsCache.heartbeats),i=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return nn.warn(t),""}}}function Yh(){return new Date().toISOString().substring(0,10)}function $C(n,e=jC){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Xh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class WC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ic()?Nh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await UC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xh(n){return ta(JSON.stringify({version:2,heartbeats:n})).length}function KC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function GC(n){Pt(new vt("platform-logger",e=>new iC(e),"PRIVATE")),Pt(new vt("heartbeat",e=>new zC(e),"PRIVATE")),ht(Lc,zh,n),ht(Lc,zh,"esm2017"),ht("fire-js","")}GC("");var HC="firebase",QC="11.10.0";/**
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
 */ht(HC,QC,"app");function Jh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}typeof SuppressedError=="function"&&SuppressedError;function Zh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YC=Zh,ed=new nr("auth","Firebase",Zh());/**
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
 */const la=new oa("@firebase/auth");function XC(n,...e){la.logLevel<=se.WARN&&la.warn(`Auth (${hi}): ${n}`,...e)}function xa(n,...e){la.logLevel<=se.ERROR&&la.error(`Auth (${hi}): ${n}`,...e)}/**
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
 */function ir(n,...e){throw $c(n,...e)}function zc(n,...e){return $c(n,...e)}function td(n,e,t){const r=Object.assign(Object.assign({},YC()),{[e]:t});return new nr("auth","Firebase",r).create(e,{appName:n.name})}function Cn(n){return td(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $c(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ed.create(n,...e)}function oe(n,e,...t){if(!n)throw $c(e,...t)}function rn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xa(e),new Error(e)}function ua(n,e){n||rn(e)}function JC(){return nd()==="http:"||nd()==="https:"}function nd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function ZC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JC()||w_()||"connection"in navigator)?navigator.onLine:!0}function eA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class fi{constructor(e,t){this.shortDelay=e,this.longDelay=t,ua(t>e,"Short delay should be less than long delay!"),this.isMobile=wc()||Ph()}get(){return ZC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tA(n,e){ua(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class rd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],sA=new fi(3e4,6e4);function or(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function An(n,e,t,r,s={}){return sd(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=bc(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const x=Object.assign({method:e,headers:l},i);return F_()||(x.referrerPolicy="no-referrer"),n.emulatorConfig&&tr(n.emulatorConfig.host)&&(x.credentials="include"),rd.fetch()(await id(n,n.config.apiHost,t,a),x)})}async function sd(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},nA),e);try{const s=new oA(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw da(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,x]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw da(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw da(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(x)throw td(n,h,x);ir(n,h)}}catch(s){if(s instanceof $t)throw s;ir(n,"network-request-failed",{message:String(s)})}}async function ha(n,e,t,r,s={}){const i=await An(n,e,t,r,s);return"mfaPendingCredential"in i&&ir(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function id(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?tA(n.config,s):`${n.config.apiScheme}://${s}`;return rA.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function iA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(zc(this.auth,"network-request-failed")),sA.get())})}}function da(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=zc(n,e,r);return s.customData._tokenResponse=t,s}function od(n){return n!==void 0&&n.enterprise!==void 0}class aA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return iA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function cA(n,e){return An(n,"GET","/v2/recaptchaConfig",or(n,e))}/**
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
 */async function lA(n,e){return An(n,"POST","/v1/accounts:delete",e)}async function fa(n,e){return An(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ei(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xA(n,e=!1){const t=ce(n),r=await t.getIdToken(e),s=Kc(r);oe(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Ei(Wc(s.auth_time)),issuedAtTime:Ei(Wc(s.iat)),expirationTime:Ei(Wc(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Wc(n){return Number(n)*1e3}function Kc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return xa("JWT malformed, contained fewer than 3 sections"),null;try{const s=na(t);return s?JSON.parse(s):(xa("Failed to decode base64 JWT payload"),null)}catch(s){return xa("Caught error parsing JWT payload as JSON",s?.toString()),null}}function ad(n){const e=Kc(n);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $t&&uA(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function uA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class hA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ea(n){var e;const t=n.auth,r=await n.getIdToken(),s=await pi(n,fa(t,{idToken:r}));oe(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cd(i.providerUserInfo):[],a=fA(n.providerData,o),l=n.isAnonymous,x=!(n.email&&i.passwordHash)&&!a?.length,h=l?x:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Gc(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function dA(n){const e=ce(n);await Ea(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fA(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cd(n){return n.map(e=>{var{providerId:t}=e,r=Jh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function EA(n,e){const t=await sd(n,{},async()=>{const r=bc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await id(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&tr(n.emulatorConfig.host)&&(l.credentials="include"),rd.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pA(n,e){return An(n,"POST","/v2/accounts:revokeToken",or(n,e))}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ad(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const t=ad(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await EA(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Jr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
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
 */function yn(n,e){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class St{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Jh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await pi(this,this.stsTokenManager.getToken(this.auth,e));return oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return xA(this,e)}reload(){return dA(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ea(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await pi(this,lA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,l,x,h;const u=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,p=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,v=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,R=(x=t.createdAt)!==null&&x!==void 0?x:void 0,V=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:I,isAnonymous:b,providerData:k,stsTokenManager:g}=t;oe(T&&g,e,"internal-error");const m=Jr.fromJSON(this.name,g);oe(typeof T=="string",e,"internal-error"),yn(u,e.name),yn(f,e.name),oe(typeof I=="boolean",e,"internal-error"),oe(typeof b=="boolean",e,"internal-error"),yn(p,e.name),yn(A,e.name),yn(w,e.name),yn(v,e.name),yn(R,e.name),yn(V,e.name);const C=new St({uid:T,auth:e,email:f,emailVerified:I,displayName:u,isAnonymous:b,photoURL:A,phoneNumber:p,tenantId:w,stsTokenManager:m,createdAt:R,lastLoginAt:V});return k&&Array.isArray(k)&&(C.providerData=k.map(B=>Object.assign({},B))),v&&(C._redirectEventId=v),C}static async _fromIdTokenResponse(e,t,r=!1){const s=new Jr;s.updateFromServerResponse(t);const i=new St({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ea(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new Jr;a.updateFromIdToken(r);const l=new St({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),x={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(l,x),l}}/**
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
 */const ld=new Map;function ar(n){ua(n instanceof Function,"Expected a class definition");let e=ld.get(n);return e?(ua(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ld.set(n,e),e)}/**
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
 */class xd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xd.type="NONE";const ud=xd;/**
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
 */function Hc(n,e,t){return`firebase:${n}:${e}:${t}`}class Zr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hc("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await fa(this.auth,{idToken:e}).catch(()=>{});return t?St._fromGetAccountInfoResponse(this.auth,t,e):null}return St._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Zr(ar(ud),e,r);const s=(await Promise.all(t.map(async x=>{if(await x._isAvailable())return x}))).filter(x=>x);let i=s[0]||ar(ud);const o=Hc(r,e.config.apiKey,e.name);let a=null;for(const x of t)try{const h=await x._get(o);if(h){let u;if(typeof h=="string"){const f=await fa(e,{idToken:h}).catch(()=>{});if(!f)break;u=await St._fromGetAccountInfoResponse(e,f,h)}else u=St._fromJSON(e,h);x!==i&&(a=u),i=x;break}}catch{}const l=s.filter(x=>x._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Zr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async x=>{if(x!==i)try{await x._remove(o)}catch{}})),new Zr(i,e,r))}}/**
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
 */function hd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ed(e))return"Blackberry";if(pd(e))return"Webos";if(gA(e))return"Safari";if((e.includes("chrome/")||_A(e))&&!e.includes("edge/"))return"Chrome";if(fd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function mA(n=Qe()){return/firefox\//i.test(n)}function gA(n=Qe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _A(n=Qe()){return/crios\//i.test(n)}function dd(n=Qe()){return/iemobile/i.test(n)}function fd(n=Qe()){return/android/i.test(n)}function Ed(n=Qe()){return/blackberry/i.test(n)}function pd(n=Qe()){return/webos/i.test(n)}function CA(n=Qe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function AA(){return I_()&&document.documentMode===10}function yA(n=Qe()){return CA(n)||fd(n)||pd(n)||Ed(n)||/windows phone/i.test(n)||dd(n)}/**
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
 */function md(n,e=[]){let t;switch(n){case"Browser":t=hd(Qe());break;case"Worker":t=`${hd(Qe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hi}/${r}`}/**
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
 */class BA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function DA(n,e={}){return An(n,"GET","/v2/passwordPolicy",or(n,e))}/**
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
 */const vA=6;class FA{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:vA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class wA{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gd(this),this.idTokenSubscription=new gd(this),this.beforeStateQueue=new BA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ed,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ar(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fa(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ea(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Cn(this));const t=e?ce(e):null;return t&&oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DA(this),t=new FA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await pA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ar(e)||this._popupRedirectResolver;oe(t,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[ar(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=md(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&XC(`Error while retrieving App Check token: ${t.error}`),t?.token}}function mi(n){return ce(n)}class gd{constructor(e){this.auth=e,this.observer=null,this.addObserver=V_(t=>this.observer=t)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IA(n){Qc=n}function TA(n){return Qc.loadJS(n)}function bA(){return Qc.recaptchaEnterpriseScript}class kA{constructor(){this.enterprise=new PA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class PA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const SA="recaptcha-enterprise",_d="NO_RECAPTCHA";class RA{constructor(e){this.type=SA,this.auth=mi(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{cA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const x=new aA(l);return i.tenantId==null?i._agentRecaptchaConfig=x:i._tenantRecaptchaConfigs[i.tenantId]=x,o(x.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;od(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(x=>{o(x)}).catch(()=>{o(_d)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!t&&od(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=bA();l.length!==0&&(l+=a),TA(l).then(()=>{s(a,i,o)}).catch(x=>{o(x)})}}).catch(a=>{o(a)})})}}async function Cd(n,e,t,r=!1,s=!1){const i=new RA(n);let o;if(s)o=_d;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,x=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:x,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Yc(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Cd(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Cd(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
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
 */function NA(n,e){const t=Xr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Qr(i,e??{}))return s;ir(s,"already-initialized")}return t.initialize({options:e})}function OA(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ar);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
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
 */class VA{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,t){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function MA(n,e){return An(n,"POST","/v1/accounts:update",e)}async function LA(n,e){return An(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function UA(n,e){return ha(n,"POST","/v1/accounts:signInWithPassword",or(n,e))}/**
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
 */async function jA(n,e){return ha(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}async function qA(n,e){return ha(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}/**
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
 */class gi extends VA{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new gi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new gi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yc(e,t,"signInWithPassword",UA);case"emailLink":return jA(e,{email:this._email,oobCode:this._password});default:ir(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yc(e,r,"signUpPassword",LA);case"emailLink":return qA(e,{idToken:t,email:this._email,oobCode:this._password});default:ir(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */function zA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $A(n){const e=xi(ui(n)).link,t=e?xi(ui(e)).deep_link_id:null,r=xi(ui(n)).deep_link_id;return(r?xi(ui(r)).link:null)||r||t||e||n}class Xc{constructor(e){var t,r,s,i,o,a;const l=xi(ui(e)),x=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,u=zA((s=l.mode)!==null&&s!==void 0?s:null);oe(x&&h&&u,"argument-error"),this.apiKey=x,this.operation=u,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=$A(e);try{return new Xc(t)}catch{return null}}}/**
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
 */class cr{constructor(){this.providerId=cr.PROVIDER_ID}static credential(e,t){return gi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Xc.parseLink(t);return oe(r,"argument-error"),gi._fromEmailAndCode(e,r.code,r.tenantId)}}cr.PROVIDER_ID="password",cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */async function WA(n,e){return ha(n,"POST","/v1/accounts:signUp",or(n,e))}/**
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
 */class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await St._fromIdTokenResponse(e,r,s),o=Ad(r);return new es({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Ad(r);return new es({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Ad(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class pa extends $t{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new pa(e,t,r,s)}}function yd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pa._fromErrorAndOperation(n,i,e,r):i})}/**
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
 */async function KA(n,e,t=!1){const{auth:r}=n;if(Ft(r.app))return Promise.reject(Cn(r));const s="reauthenticate";try{const i=await pi(n,yd(r,s,e,n),t);oe(i.idToken,r,"internal-error");const o=Kc(i.idToken);oe(o,r,"internal-error");const{sub:a}=o;return oe(n.uid===a,r,"user-mismatch"),es._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&ir(r,"user-mismatch"),i}}/**
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
 */async function GA(n,e,t=!1){if(Ft(n.app))return Promise.reject(Cn(n));const r="signIn",s=await yd(n,r,e),i=await es._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function HA(n,e){return GA(mi(n),e)}async function QA(n,e){return KA(ce(n),e)}/**
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
 */async function Bd(n){const e=mi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YA(n,e,t){if(Ft(n.app))return Promise.reject(Cn(n));const r=mi(n),o=await Yc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bd(n),l}),a=await es._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function XA(n,e,t){return Ft(n.app)?Promise.reject(Cn(n)):HA(ce(n),cr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bd(n),r})}function Dd(n,e){return JA(ce(n),null,e)}async function JA(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(i.password=t);const o=await pi(n,MA(r,i));await n._updateTokensIfNecessary(o,!0)}function vd(n,e,t,r){return ce(n).onAuthStateChanged(e,t,r)}function ZA(n){return ce(n).signOut()}const ma="__sak";/**
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
 */class Fd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ma,"1"),this.storage.removeItem(ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const e6=1e3,t6=10;class wd extends Fd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);AA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,t6):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},e6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}wd.type="LOCAL";const n6=wd;/**
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
 */class r6 extends Fd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}r6.type="SESSION";/**
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
 */function s6(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ga(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async x=>x(t.origin,i)),l=await s6(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ga.receivers=[];/**
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
 */function i6(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class o6{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const x=i6("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const f=u;if(f.data.eventId===x)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:x,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Id(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Td(){return typeof Id().WorkerGlobalScope<"u"&&typeof Id().importScripts=="function"}async function a6(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c6(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function l6(){return Td()?self:null}/**
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
 */const bd="firebaseLocalStorageDb",x6=1,_a="firebaseLocalStorage",kd="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ca(n,e){return n.transaction([_a],e?"readwrite":"readonly").objectStore(_a)}function u6(){const n=indexedDB.deleteDatabase(bd);return new _i(n).toPromise()}function Jc(){const n=indexedDB.open(bd,x6);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_a,{keyPath:kd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_a)?e(r):(r.close(),await u6(),e(await Jc()))})})}async function Pd(n,e,t){const r=Ca(n,!0).put({[kd]:e,value:t});return new _i(r).toPromise()}async function h6(n,e){const t=Ca(n,!1).get(e),r=await new _i(t).toPromise();return r===void 0?null:r.value}function Sd(n,e){const t=Ca(n,!0).delete(e);return new _i(t).toPromise()}const d6=800,f6=3;class Rd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>f6)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Td()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ga._getInstance(l6()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await a6(),!this.activeServiceWorker)return;this.sender=new o6(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||c6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jc();return await Pd(e,ma,"1"),await Sd(e,ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>h6(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ca(s,!1).getAll();return new _i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rd.type="LOCAL";const E6=Rd;new fi(3e4,6e4);/**
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
 */new fi(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new fi(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new fi(5e3,15e3);var Nd="@firebase/auth",Od="1.10.8";/**
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
 */class p6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function m6(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function g6(n){Pt(new vt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:md(n)},x=new wA(r,s,i,l);return OA(x,t),x},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Pt(new vt("auth-internal",e=>{const t=mi(e.getProvider("auth").getImmediate());return(r=>new p6(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ht(Nd,Od,m6(n)),ht(Nd,Od,"esm2017")}/**
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
 */const _6=300;A_("authIdTokenMaxAge");function C6(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}IA({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=zc("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",C6().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),g6("Browser");var Vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bn,Md;(function(){var n;/** @license

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function e(g,m){function C(){}C.prototype=m.prototype,g.D=m.prototype,g.prototype=new C,g.prototype.constructor=g,g.C=function(B,D,F){for(var y=Array(arguments.length-2),$=2;$<arguments.length;$++)y[$-2]=arguments[$];return m.prototype[D].apply(B,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(g,m,C){C||(C=0);var B=Array(16);if(typeof m=="string")for(var D=0;16>D;++D)B[D]=m.charCodeAt(C++)|m.charCodeAt(C++)<<8|m.charCodeAt(C++)<<16|m.charCodeAt(C++)<<24;else for(D=0;16>D;++D)B[D]=m[C++]|m[C++]<<8|m[C++]<<16|m[C++]<<24;m=g.g[0],C=g.g[1],D=g.g[2];var F=g.g[3],y=m+(F^C&(D^F))+B[0]+3614090360&4294967295;m=C+(y<<7&4294967295|y>>>25),y=F+(D^m&(C^D))+B[1]+3905402710&4294967295,F=m+(y<<12&4294967295|y>>>20),y=D+(C^F&(m^C))+B[2]+606105819&4294967295,D=F+(y<<17&4294967295|y>>>15),y=C+(m^D&(F^m))+B[3]+3250441966&4294967295,C=D+(y<<22&4294967295|y>>>10),y=m+(F^C&(D^F))+B[4]+4118548399&4294967295,m=C+(y<<7&4294967295|y>>>25),y=F+(D^m&(C^D))+B[5]+1200080426&4294967295,F=m+(y<<12&4294967295|y>>>20),y=D+(C^F&(m^C))+B[6]+2821735955&4294967295,D=F+(y<<17&4294967295|y>>>15),y=C+(m^D&(F^m))+B[7]+4249261313&4294967295,C=D+(y<<22&4294967295|y>>>10),y=m+(F^C&(D^F))+B[8]+1770035416&4294967295,m=C+(y<<7&4294967295|y>>>25),y=F+(D^m&(C^D))+B[9]+2336552879&4294967295,F=m+(y<<12&4294967295|y>>>20),y=D+(C^F&(m^C))+B[10]+4294925233&4294967295,D=F+(y<<17&4294967295|y>>>15),y=C+(m^D&(F^m))+B[11]+2304563134&4294967295,C=D+(y<<22&4294967295|y>>>10),y=m+(F^C&(D^F))+B[12]+1804603682&4294967295,m=C+(y<<7&4294967295|y>>>25),y=F+(D^m&(C^D))+B[13]+4254626195&4294967295,F=m+(y<<12&4294967295|y>>>20),y=D+(C^F&(m^C))+B[14]+2792965006&4294967295,D=F+(y<<17&4294967295|y>>>15),y=C+(m^D&(F^m))+B[15]+1236535329&4294967295,C=D+(y<<22&4294967295|y>>>10),y=m+(D^F&(C^D))+B[1]+4129170786&4294967295,m=C+(y<<5&4294967295|y>>>27),y=F+(C^D&(m^C))+B[6]+3225465664&4294967295,F=m+(y<<9&4294967295|y>>>23),y=D+(m^C&(F^m))+B[11]+643717713&4294967295,D=F+(y<<14&4294967295|y>>>18),y=C+(F^m&(D^F))+B[0]+3921069994&4294967295,C=D+(y<<20&4294967295|y>>>12),y=m+(D^F&(C^D))+B[5]+3593408605&4294967295,m=C+(y<<5&4294967295|y>>>27),y=F+(C^D&(m^C))+B[10]+38016083&4294967295,F=m+(y<<9&4294967295|y>>>23),y=D+(m^C&(F^m))+B[15]+3634488961&4294967295,D=F+(y<<14&4294967295|y>>>18),y=C+(F^m&(D^F))+B[4]+3889429448&4294967295,C=D+(y<<20&4294967295|y>>>12),y=m+(D^F&(C^D))+B[9]+568446438&4294967295,m=C+(y<<5&4294967295|y>>>27),y=F+(C^D&(m^C))+B[14]+3275163606&4294967295,F=m+(y<<9&4294967295|y>>>23),y=D+(m^C&(F^m))+B[3]+4107603335&4294967295,D=F+(y<<14&4294967295|y>>>18),y=C+(F^m&(D^F))+B[8]+1163531501&4294967295,C=D+(y<<20&4294967295|y>>>12),y=m+(D^F&(C^D))+B[13]+2850285829&4294967295,m=C+(y<<5&4294967295|y>>>27),y=F+(C^D&(m^C))+B[2]+4243563512&4294967295,F=m+(y<<9&4294967295|y>>>23),y=D+(m^C&(F^m))+B[7]+1735328473&4294967295,D=F+(y<<14&4294967295|y>>>18),y=C+(F^m&(D^F))+B[12]+2368359562&4294967295,C=D+(y<<20&4294967295|y>>>12),y=m+(C^D^F)+B[5]+4294588738&4294967295,m=C+(y<<4&4294967295|y>>>28),y=F+(m^C^D)+B[8]+2272392833&4294967295,F=m+(y<<11&4294967295|y>>>21),y=D+(F^m^C)+B[11]+1839030562&4294967295,D=F+(y<<16&4294967295|y>>>16),y=C+(D^F^m)+B[14]+4259657740&4294967295,C=D+(y<<23&4294967295|y>>>9),y=m+(C^D^F)+B[1]+2763975236&4294967295,m=C+(y<<4&4294967295|y>>>28),y=F+(m^C^D)+B[4]+1272893353&4294967295,F=m+(y<<11&4294967295|y>>>21),y=D+(F^m^C)+B[7]+4139469664&4294967295,D=F+(y<<16&4294967295|y>>>16),y=C+(D^F^m)+B[10]+3200236656&4294967295,C=D+(y<<23&4294967295|y>>>9),y=m+(C^D^F)+B[13]+681279174&4294967295,m=C+(y<<4&4294967295|y>>>28),y=F+(m^C^D)+B[0]+3936430074&4294967295,F=m+(y<<11&4294967295|y>>>21),y=D+(F^m^C)+B[3]+3572445317&4294967295,D=F+(y<<16&4294967295|y>>>16),y=C+(D^F^m)+B[6]+76029189&4294967295,C=D+(y<<23&4294967295|y>>>9),y=m+(C^D^F)+B[9]+3654602809&4294967295,m=C+(y<<4&4294967295|y>>>28),y=F+(m^C^D)+B[12]+3873151461&4294967295,F=m+(y<<11&4294967295|y>>>21),y=D+(F^m^C)+B[15]+530742520&4294967295,D=F+(y<<16&4294967295|y>>>16),y=C+(D^F^m)+B[2]+3299628645&4294967295,C=D+(y<<23&4294967295|y>>>9),y=m+(D^(C|~F))+B[0]+4096336452&4294967295,m=C+(y<<6&4294967295|y>>>26),y=F+(C^(m|~D))+B[7]+1126891415&4294967295,F=m+(y<<10&4294967295|y>>>22),y=D+(m^(F|~C))+B[14]+2878612391&4294967295,D=F+(y<<15&4294967295|y>>>17),y=C+(F^(D|~m))+B[5]+4237533241&4294967295,C=D+(y<<21&4294967295|y>>>11),y=m+(D^(C|~F))+B[12]+1700485571&4294967295,m=C+(y<<6&4294967295|y>>>26),y=F+(C^(m|~D))+B[3]+2399980690&4294967295,F=m+(y<<10&4294967295|y>>>22),y=D+(m^(F|~C))+B[10]+4293915773&4294967295,D=F+(y<<15&4294967295|y>>>17),y=C+(F^(D|~m))+B[1]+2240044497&4294967295,C=D+(y<<21&4294967295|y>>>11),y=m+(D^(C|~F))+B[8]+1873313359&4294967295,m=C+(y<<6&4294967295|y>>>26),y=F+(C^(m|~D))+B[15]+4264355552&4294967295,F=m+(y<<10&4294967295|y>>>22),y=D+(m^(F|~C))+B[6]+2734768916&4294967295,D=F+(y<<15&4294967295|y>>>17),y=C+(F^(D|~m))+B[13]+1309151649&4294967295,C=D+(y<<21&4294967295|y>>>11),y=m+(D^(C|~F))+B[4]+4149444226&4294967295,m=C+(y<<6&4294967295|y>>>26),y=F+(C^(m|~D))+B[11]+3174756917&4294967295,F=m+(y<<10&4294967295|y>>>22),y=D+(m^(F|~C))+B[2]+718787259&4294967295,D=F+(y<<15&4294967295|y>>>17),y=C+(F^(D|~m))+B[9]+3951481745&4294967295,g.g[0]=g.g[0]+m&4294967295,g.g[1]=g.g[1]+(D+(y<<21&4294967295|y>>>11))&4294967295,g.g[2]=g.g[2]+D&4294967295,g.g[3]=g.g[3]+F&4294967295}r.prototype.u=function(g,m){m===void 0&&(m=g.length);for(var C=m-this.blockSize,B=this.B,D=this.h,F=0;F<m;){if(D==0)for(;F<=C;)s(this,g,F),F+=this.blockSize;if(typeof g=="string"){for(;F<m;)if(B[D++]=g.charCodeAt(F++),D==this.blockSize){s(this,B),D=0;break}}else for(;F<m;)if(B[D++]=g[F++],D==this.blockSize){s(this,B),D=0;break}}this.h=D,this.o+=m},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var m=1;m<g.length-8;++m)g[m]=0;var C=8*this.o;for(m=g.length-8;m<g.length;++m)g[m]=C&255,C/=256;for(this.u(g),g=Array(16),m=C=0;4>m;++m)for(var B=0;32>B;B+=8)g[C++]=this.g[m]>>>B&255;return g};function i(g,m){var C=a;return Object.prototype.hasOwnProperty.call(C,g)?C[g]:C[g]=m(g)}function o(g,m){this.h=m;for(var C=[],B=!0,D=g.length-1;0<=D;D--){var F=g[D]|0;B&&F==m||(C[D]=F,B=!1)}this.g=C}var a={};function l(g){return-128<=g&&128>g?i(g,function(m){return new o([m|0],0>m?-1:0)}):new o([g|0],0>g?-1:0)}function x(g){if(isNaN(g)||!isFinite(g))return u;if(0>g)return v(x(-g));for(var m=[],C=1,B=0;g>=C;B++)m[B]=g/C|0,C*=4294967296;return new o(m,0)}function h(g,m){if(g.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(g.charAt(0)=="-")return v(h(g.substring(1),m));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=x(Math.pow(m,8)),B=u,D=0;D<g.length;D+=8){var F=Math.min(8,g.length-D),y=parseInt(g.substring(D,D+F),m);8>F?(F=x(Math.pow(m,F)),B=B.j(F).add(x(y))):(B=B.j(C),B=B.add(x(y)))}return B}var u=l(0),f=l(1),p=l(16777216);n=o.prototype,n.m=function(){if(w(this))return-v(this).m();for(var g=0,m=1,C=0;C<this.g.length;C++){var B=this.i(C);g+=(0<=B?B:4294967296+B)*m,m*=4294967296}return g},n.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(A(this))return"0";if(w(this))return"-"+v(this).toString(g);for(var m=x(Math.pow(g,6)),C=this,B="";;){var D=I(C,m).g;C=R(C,D.j(m));var F=((0<C.g.length?C.g[0]:C.h)>>>0).toString(g);if(C=D,A(C))return F+B;for(;6>F.length;)F="0"+F;B=F+B}},n.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function A(g){if(g.h!=0)return!1;for(var m=0;m<g.g.length;m++)if(g.g[m]!=0)return!1;return!0}function w(g){return g.h==-1}n.l=function(g){return g=R(this,g),w(g)?-1:A(g)?0:1};function v(g){for(var m=g.g.length,C=[],B=0;B<m;B++)C[B]=~g.g[B];return new o(C,~g.h).add(f)}n.abs=function(){return w(this)?v(this):this},n.add=function(g){for(var m=Math.max(this.g.length,g.g.length),C=[],B=0,D=0;D<=m;D++){var F=B+(this.i(D)&65535)+(g.i(D)&65535),y=(F>>>16)+(this.i(D)>>>16)+(g.i(D)>>>16);B=y>>>16,F&=65535,y&=65535,C[D]=y<<16|F}return new o(C,C[C.length-1]&-2147483648?-1:0)};function R(g,m){return g.add(v(m))}n.j=function(g){if(A(this)||A(g))return u;if(w(this))return w(g)?v(this).j(v(g)):v(v(this).j(g));if(w(g))return v(this.j(v(g)));if(0>this.l(p)&&0>g.l(p))return x(this.m()*g.m());for(var m=this.g.length+g.g.length,C=[],B=0;B<2*m;B++)C[B]=0;for(B=0;B<this.g.length;B++)for(var D=0;D<g.g.length;D++){var F=this.i(B)>>>16,y=this.i(B)&65535,$=g.i(D)>>>16,K=g.i(D)&65535;C[2*B+2*D]+=y*K,V(C,2*B+2*D),C[2*B+2*D+1]+=F*K,V(C,2*B+2*D+1),C[2*B+2*D+1]+=y*$,V(C,2*B+2*D+1),C[2*B+2*D+2]+=F*$,V(C,2*B+2*D+2)}for(B=0;B<m;B++)C[B]=C[2*B+1]<<16|C[2*B];for(B=m;B<2*m;B++)C[B]=0;return new o(C,0)};function V(g,m){for(;(g[m]&65535)!=g[m];)g[m+1]+=g[m]>>>16,g[m]&=65535,m++}function T(g,m){this.g=g,this.h=m}function I(g,m){if(A(m))throw Error("division by zero");if(A(g))return new T(u,u);if(w(g))return m=I(v(g),m),new T(v(m.g),v(m.h));if(w(m))return m=I(g,v(m)),new T(v(m.g),m.h);if(30<g.g.length){if(w(g)||w(m))throw Error("slowDivide_ only works with positive integers.");for(var C=f,B=m;0>=B.l(g);)C=b(C),B=b(B);var D=k(C,1),F=k(B,1);for(B=k(B,2),C=k(C,2);!A(B);){var y=F.add(B);0>=y.l(g)&&(D=D.add(C),F=y),B=k(B,1),C=k(C,1)}return m=R(g,D.j(m)),new T(D,m)}for(D=u;0<=g.l(m);){for(C=Math.max(1,Math.floor(g.m()/m.m())),B=Math.ceil(Math.log(C)/Math.LN2),B=48>=B?1:Math.pow(2,B-48),F=x(C),y=F.j(m);w(y)||0<y.l(g);)C-=B,F=x(C),y=F.j(m);A(F)&&(F=f),D=D.add(F),g=R(g,y)}return new T(D,g)}n.A=function(g){return I(this,g).h},n.and=function(g){for(var m=Math.max(this.g.length,g.g.length),C=[],B=0;B<m;B++)C[B]=this.i(B)&g.i(B);return new o(C,this.h&g.h)},n.or=function(g){for(var m=Math.max(this.g.length,g.g.length),C=[],B=0;B<m;B++)C[B]=this.i(B)|g.i(B);return new o(C,this.h|g.h)},n.xor=function(g){for(var m=Math.max(this.g.length,g.g.length),C=[],B=0;B<m;B++)C[B]=this.i(B)^g.i(B);return new o(C,this.h^g.h)};function b(g){for(var m=g.g.length+1,C=[],B=0;B<m;B++)C[B]=g.i(B)<<1|g.i(B-1)>>>31;return new o(C,g.h)}function k(g,m){var C=m>>5;m%=32;for(var B=g.g.length-C,D=[],F=0;F<B;F++)D[F]=0<m?g.i(F+C)>>>m|g.i(F+C+1)<<32-m:g.i(F+C);return new o(D,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Md=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=x,o.fromString=h,Bn=o}).apply(typeof Vd<"u"?Vd:typeof self<"u"?self:typeof window<"u"?window:{});var Aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ld,Ci,Ud,ya,Zc,jd,qd,zd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,E){return c==Array.prototype||c==Object.prototype||(c[d]=E.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Aa=="object"&&Aa];for(var d=0;d<c.length;++d){var E=c[d];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=t(this);function s(c,d){if(d)e:{var E=r;c=c.split(".");for(var _=0;_<c.length-1;_++){var S=c[_];if(!(S in E))break e;E=E[S]}c=c[c.length-1],_=E[c],d=d(_),d!=_&&d!=null&&e(E,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var E=0,_=!1,S={next:function(){if(!_&&E<c.length){var N=E++;return{value:d(N,c[N]),done:!1}}return _=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,E){return E})}});/** @license

   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function x(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function h(c,d,E){return c.call.apply(c.bind,arguments)}function u(c,d,E){if(!c)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,_),c.apply(d,S)}}return function(){return c.apply(d,arguments)}}function f(c,d,E){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:u,f.apply(null,arguments)}function p(c,d){var E=Array.prototype.slice.call(arguments,1);return function(){var _=E.slice();return _.push.apply(_,arguments),c.apply(this,_)}}function A(c,d){function E(){}E.prototype=d.prototype,c.aa=d.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(_,S,N){for(var j=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)j[ye-2]=arguments[ye];return d.prototype[S].apply(_,j)}}function w(c){const d=c.length;if(0<d){const E=Array(d);for(let _=0;_<d;_++)E[_]=c[_];return E}return[]}function v(c,d){for(let E=1;E<arguments.length;E++){const _=arguments[E];if(l(_)){const S=c.length||0,N=_.length||0;c.length=S+N;for(let j=0;j<N;j++)c[S+j]=_[j]}else c.push(_)}}class R{constructor(d,E){this.i=d,this.j=E,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function V(c){return/^[\s\xa0]*$/.test(c)}function T(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function I(c){return I[" "](c),c}I[" "]=function(){};var b=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function k(c,d,E){for(const _ in c)d.call(E,c[_],_,c)}function g(c,d){for(const E in c)d.call(void 0,c[E],E,c)}function m(c){const d={};for(const E in c)d[E]=c[E];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(c,d){let E,_;for(let S=1;S<arguments.length;S++){_=arguments[S];for(E in _)c[E]=_[E];for(let N=0;N<C.length;N++)E=C[N],Object.prototype.hasOwnProperty.call(_,E)&&(c[E]=_[E])}}function D(c){var d=1;c=c.split(":");const E=[];for(;0<d&&c.length;)E.push(c.shift()),d--;return c.length&&E.push(c.join(":")),E}function F(c){a.setTimeout(()=>{throw c},0)}function y(){var c=Ce;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class ${constructor(){this.h=this.g=null}add(d,E){const _=K.get();_.set(d,E),this.h?this.h.next=_:this.g=_,this.h=_}}var K=new R(()=>new ie,c=>c.reset());class ie{constructor(){this.next=this.g=this.h=null}set(d,E){this.h=d,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let H,xe=!1,Ce=new $,De=()=>{const c=a.Promise.resolve(void 0);H=()=>{c.then(Y)}};var Y=()=>{for(var c;c=y();){try{c.h.call(c.g)}catch(E){F(E)}var d=K;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}xe=!1};function Ee(){this.s=this.s,this.C=this.C}Ee.prototype.s=!1,Ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Z=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};a.addEventListener("test",E,d),a.removeEventListener("test",E,d)}catch{}return c})();function Lt(c,d){if(he.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,_=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(b){e:{try{I(d.nodeName);var S=!0;break e}catch{}S=!1}S||(d=null)}}else E=="mouseover"?d=c.fromElement:E=="mouseout"&&(d=c.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:rt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Lt.aa.h.call(this)}}A(Lt,he);var rt={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),ti=0;function Tt(c,d,E,_,S){this.listener=c,this.proxy=null,this.src=d,this.type=E,this.capture=!!_,this.ha=S,this.key=++ti,this.da=this.fa=!1}function ni(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ut(c){this.src=c,this.g={},this.h=0}Ut.prototype.add=function(c,d,E,_,S){var N=c.toString();c=this.g[N],c||(c=this.g[N]=[],this.h++);var j=Yn(c,d,_,S);return-1<j?(d=c[j],E||(d.fa=!1)):(d=new Tt(d,this.src,N,!!_,S),d.fa=E,c.push(d)),d};function jo(c,d){var E=d.type;if(E in c.g){var _=c.g[E],S=Array.prototype.indexOf.call(_,d,void 0),N;(N=0<=S)&&Array.prototype.splice.call(_,S,1),N&&(ni(d),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Yn(c,d,E,_){for(var S=0;S<c.length;++S){var N=c[S];if(!N.da&&N.listener==d&&N.capture==!!E&&N.ha==_)return S}return-1}var En="closure_lm_"+(1e6*Math.random()|0),jt={};function Xn(c,d,E,_,S){if(Array.isArray(d)){for(var N=0;N<d.length;N++)Xn(c,d[N],E,_,S);return null}return E=Eg(E),c&&c[Re]?c.K(d,E,x(_)?!!_.capture:!1,S):ri(c,d,E,!1,_,S)}function ri(c,d,E,_,S,N){if(!d)throw Error("Invalid event type");var j=x(S)?!!S.capture:!!S,ye=rh(c);if(ye||(c[En]=ye=new Ut(c)),E=ye.add(d,E,_,j,N),E.proxy)return E;if(_=zr(),E.proxy=_,_.src=c,_.listener=E,c.addEventListener)Z||(S=j),S===void 0&&(S=!1),c.addEventListener(d.toString(),_,S);else if(c.attachEvent)c.attachEvent(Bt(d.toString()),_);else if(c.addListener&&c.removeListener)c.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return E}function zr(){function c(E){return d.call(c.src,c.listener,E)}const d=vF;return c}function yt(c,d,E,_,S){if(Array.isArray(d))for(var N=0;N<d.length;N++)yt(c,d[N],E,_,S);else _=x(_)?!!_.capture:!!_,E=Eg(E),c&&c[Re]?(c=c.i,d=String(d).toString(),d in c.g&&(N=c.g[d],E=Yn(N,E,_,S),-1<E&&(ni(N[E]),Array.prototype.splice.call(N,E,1),N.length==0&&(delete c.g[d],c.h--)))):c&&(c=rh(c))&&(d=c.g[d.toString()],c=-1,d&&(c=Yn(d,E,_,S)),(E=-1<c?d[c]:null)&&nh(E))}function nh(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[Re])jo(d.i,c);else{var E=c.type,_=c.proxy;d.removeEventListener?d.removeEventListener(E,_,c.capture):d.detachEvent?d.detachEvent(Bt(E),_):d.addListener&&d.removeListener&&d.removeListener(_),(E=rh(d))?(jo(E,c),E.h==0&&(E.src=null,d[En]=null)):ni(c)}}}function Bt(c){return c in jt?jt[c]:jt[c]="on"+c}function vF(c,d){if(c.da)c=!0;else{d=new Lt(d,this);var E=c.listener,_=c.ha||c.src;c.fa&&nh(c),c=E.call(_,d)}return c}function rh(c){return c=c[En],c instanceof Ut?c:null}var sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eg(c){return typeof c=="function"?c:(c[sh]||(c[sh]=function(d){return c.handleEvent(d)}),c[sh])}function st(){Ee.call(this),this.i=new Ut(this),this.M=this,this.F=null}A(st,Ee),st.prototype[Re]=!0,st.prototype.removeEventListener=function(c,d,E,_){yt(this,c,d,E,_)};function xt(c,d){var E,_=c.F;if(_)for(E=[];_;_=_.F)E.push(_);if(c=c.M,_=d.type||d,typeof d=="string")d=new he(d,c);else if(d instanceof he)d.target=d.target||c;else{var S=d;d=new he(_,c),B(d,S)}if(S=!0,E)for(var N=E.length-1;0<=N;N--){var j=d.g=E[N];S=xc(j,_,!0,d)&&S}if(j=d.g=c,S=xc(j,_,!0,d)&&S,S=xc(j,_,!1,d)&&S,E)for(N=0;N<E.length;N++)j=d.g=E[N],S=xc(j,_,!1,d)&&S}st.prototype.N=function(){if(st.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var E=c.g[d],_=0;_<E.length;_++)ni(E[_]);delete c.g[d],c.h--}}this.F=null},st.prototype.K=function(c,d,E,_){return this.i.add(String(c),d,!1,E,_)},st.prototype.L=function(c,d,E,_){return this.i.add(String(c),d,!0,E,_)};function xc(c,d,E,_){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var S=!0,N=0;N<d.length;++N){var j=d[N];if(j&&!j.da&&j.capture==E){var ye=j.listener,Ye=j.ha||j.src;j.fa&&jo(c.i,j),S=ye.call(Ye,_)!==!1&&S}}return S&&!_.defaultPrevented}function pg(c,d,E){if(typeof c=="function")E&&(c=f(c,E));else if(c&&typeof c.handleEvent=="function")c=f(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function mg(c){c.g=pg(()=>{c.g=null,c.i&&(c.i=!1,mg(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class FF extends Ee{constructor(d,E){super(),this.m=d,this.l=E,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:mg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qo(c){Ee.call(this),this.h=c,this.g={}}A(qo,Ee);var gg=[];function _g(c){k(c.g,function(d,E){this.g.hasOwnProperty(E)&&nh(d)},c),c.g={}}qo.prototype.N=function(){qo.aa.N.call(this),_g(this)},qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ih=a.JSON.stringify,wF=a.JSON.parse,IF=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function oh(){}oh.prototype.h=null;function Cg(c){return c.h||(c.h=c.i())}function Ag(){}var zo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ah(){he.call(this,"d")}A(ah,he);function ch(){he.call(this,"c")}A(ch,he);var $r={},yg=null;function uc(){return yg=yg||new st}$r.La="serverreachability";function Bg(c){he.call(this,$r.La,c)}A(Bg,he);function $o(c){const d=uc();xt(d,new Bg(d))}$r.STAT_EVENT="statevent";function Dg(c,d){he.call(this,$r.STAT_EVENT,c),this.stat=d}A(Dg,he);function ut(c){const d=uc();xt(d,new Dg(d,c))}$r.Ma="timingevent";function vg(c,d){he.call(this,$r.Ma,c),this.size=d}A(vg,he);function Wo(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function Ko(){this.g=!0}Ko.prototype.xa=function(){this.g=!1};function TF(c,d,E,_,S,N){c.info(function(){if(c.g)if(N)for(var j="",ye=N.split("&"),Ye=0;Ye<ye.length;Ye++){var de=ye[Ye].split("=");if(1<de.length){var it=de[0];de=de[1];var ot=it.split("_");j=2<=ot.length&&ot[1]=="type"?j+(it+"="+de+"&"):j+(it+"=redacted&")}}else j=null;else j=N;return"XMLHTTP REQ ("+_+") [attempt "+S+"]: "+d+`
`+E+`
`+j})}function bF(c,d,E,_,S,N,j){c.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+S+"]: "+d+`
`+E+`
`+N+" "+j})}function si(c,d,E,_){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+PF(c,E)+(_?" "+_:"")})}function kF(c,d){c.info(function(){return"TIMEOUT: "+d})}Ko.prototype.info=function(){};function PF(c,d){if(!c.g)return d;if(!d)return null;try{var E=JSON.parse(d);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var _=E[c];if(!(2>_.length)){var S=_[1];if(Array.isArray(S)&&!(1>S.length)){var N=S[0];if(N!="noop"&&N!="stop"&&N!="close")for(var j=1;j<S.length;j++)S[j]=""}}}}return ih(E)}catch{return d}}var hc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lh;function dc(){}A(dc,oh),dc.prototype.g=function(){return new XMLHttpRequest},dc.prototype.i=function(){return{}},lh=new dc;function Jn(c,d,E,_){this.j=c,this.i=d,this.l=E,this.R=_||1,this.U=new qo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wg}function wg(){this.i=null,this.g="",this.h=!1}var Ig={},xh={};function uh(c,d,E){c.L=1,c.v=mc(pn(d)),c.m=E,c.P=!0,Tg(c,null)}function Tg(c,d){c.F=Date.now(),fc(c),c.A=pn(c.v);var E=c.A,_=c.R;Array.isArray(_)||(_=[String(_)]),zg(E.i,"t",_),c.C=0,E=c.j.J,c.h=new wg,c.g=a_(c.j,E?d:null,!c.m),0<c.O&&(c.M=new FF(f(c.Y,c,c.g),c.O)),d=c.U,E=c.g,_=c.ca;var S="readystatechange";Array.isArray(S)||(S&&(gg[0]=S.toString()),S=gg);for(var N=0;N<S.length;N++){var j=Xn(E,S[N],_||d.handleEvent,!1,d.h||d);if(!j)break;d.g[j.key]=j}d=c.H?m(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),$o(),TF(c.i,c.u,c.A,c.l,c.R,c.m)}Jn.prototype.ca=function(c){c=c.target;const d=this.M;d&&mn(c)==3?d.j():this.Y(c)},Jn.prototype.Y=function(c){try{if(c==this.g)e:{const ot=mn(this.g);var d=this.g.Ba();const ai=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||Yg(this.g)))){this.J||ot!=4||d==7||(d==8||0>=ai?$o(3):$o(2)),hh(this);var E=this.g.Z();this.X=E;t:if(bg(this)){var _=Yg(this.g);c="";var S=_.length,N=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wr(this),Go(this);var j="";break t}this.h.i=new a.TextDecoder}for(d=0;d<S;d++)this.h.h=!0,c+=this.h.i.decode(_[d],{stream:!(N&&d==S-1)});_.length=0,this.h.g+=c,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=E==200,bF(this.i,this.u,this.A,this.l,this.R,ot,E),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Ye=this.g;if((ye=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(ye)){var de=ye;break t}}de=null}if(E=de)si(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dh(this,E);else{this.o=!1,this.s=3,ut(12),Wr(this),Go(this);break e}}if(this.P){E=!0;let qt;for(;!this.J&&this.C<j.length;)if(qt=SF(this,j),qt==xh){ot==4&&(this.s=4,ut(14),E=!1),si(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Ig){this.s=4,ut(15),si(this.i,this.l,j,"[Invalid Chunk]"),E=!1;break}else si(this.i,this.l,qt,null),dh(this,qt);if(bg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||j.length!=0||this.h.h||(this.s=1,ut(16),E=!1),this.o=this.o&&E,!E)si(this.i,this.l,j,"[Invalid Chunked Response]"),Wr(this),Go(this);else if(0<j.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),_h(it),it.M=!0,ut(11))}}else si(this.i,this.l,j,null),dh(this,j);ot==4&&Wr(this),this.o&&!this.J&&(ot==4?r_(this.j,this):(this.o=!1,fc(this)))}else YF(this.g),E==400&&0<j.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),Wr(this),Go(this)}}}catch{}finally{}};function bg(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function SF(c,d){var E=c.C,_=d.indexOf(`
`,E);return _==-1?xh:(E=Number(d.substring(E,_)),isNaN(E)?Ig:(_+=1,_+E>d.length?xh:(d=d.slice(_,_+E),c.C=_+E,d)))}Jn.prototype.cancel=function(){this.J=!0,Wr(this)};function fc(c){c.S=Date.now()+c.I,kg(c,c.I)}function kg(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Wo(f(c.ba,c),d)}function hh(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Jn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(kF(this.i,this.A),this.L!=2&&($o(),ut(17)),Wr(this),this.s=2,Go(this)):kg(this,this.S-c)};function Go(c){c.j.G==0||c.J||r_(c.j,c)}function Wr(c){hh(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,_g(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function dh(c,d){try{var E=c.j;if(E.G!=0&&(E.g==c||fh(E.h,c))){if(!c.K&&fh(E.h,c)&&E.G==3){try{var _=E.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var S=_;if(S[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)Bc(E),Ac(E);else break e;gh(E),ut(18)}}else E.za=S[1],0<E.za-E.T&&37500>S[2]&&E.F&&E.v==0&&!E.C&&(E.C=Wo(f(E.Za,E),6e3));if(1>=Rg(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Gr(E,11)}else if((c.K||E.g==c)&&Bc(E),!V(d))for(S=E.Da.g.parse(d),d=0;d<S.length;d++){let de=S[d];if(E.T=de[0],de=de[1],E.G==2)if(de[0]=="c"){E.K=de[1],E.ia=de[2];const it=de[3];it!=null&&(E.la=it,E.j.info("VER="+E.la));const ot=de[4];ot!=null&&(E.Aa=ot,E.j.info("SVER="+E.Aa));const ai=de[5];ai!=null&&typeof ai=="number"&&0<ai&&(_=1.5*ai,E.L=_,E.j.info("backChannelRequestTimeoutMs_="+_)),_=E;const qt=c.g;if(qt){const vc=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vc){var N=_.h;N.g||vc.indexOf("spdy")==-1&&vc.indexOf("quic")==-1&&vc.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Eh(N,N.h),N.h=null))}if(_.D){const Ch=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ch&&(_.ya=Ch,ve(_.I,_.D,Ch))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),_=E;var j=c;if(_.qa=o_(_,_.J?_.ia:null,_.W),j.K){Ng(_.h,j);var ye=j,Ye=_.L;Ye&&(ye.I=Ye),ye.B&&(hh(ye),fc(ye)),_.g=j}else t_(_);0<E.i.length&&yc(E)}else de[0]!="stop"&&de[0]!="close"||Gr(E,7);else E.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Gr(E,7):mh(E):de[0]!="noop"&&E.l&&E.l.ta(de),E.v=0)}}$o(4)}catch{}}var RF=class{constructor(c,d){this.g=c,this.map=d}};function Pg(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sg(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Rg(c){return c.h?1:c.g?c.g.size:0}function fh(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function Eh(c,d){c.g?c.g.add(d):c.h=d}function Ng(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Pg.prototype.cancel=function(){if(this.i=Og(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Og(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const E of c.g.values())d=d.concat(E.D);return d}return w(c.i)}function NF(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],E=c.length,_=0;_<E;_++)d.push(c[_]);return d}d=[],E=0;for(_ in c)d[E++]=c[_];return d}function OF(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var E=0;E<c;E++)d.push(E);return d}d=[],E=0;for(const _ in c)d[E++]=_;return d}}}function Vg(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var E=OF(c),_=NF(c),S=_.length,N=0;N<S;N++)d.call(void 0,_[N],E&&E[N],c)}var Mg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VF(c,d){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var _=c[E].indexOf("="),S=null;if(0<=_){var N=c[E].substring(0,_);S=c[E].substring(_+1)}else N=c[E];d(N,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function Kr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Kr){this.h=c.h,Ec(this,c.j),this.o=c.o,this.g=c.g,pc(this,c.s),this.l=c.l;var d=c.i,E=new Yo;E.i=d.i,d.g&&(E.g=new Map(d.g),E.h=d.h),Lg(this,E),this.m=c.m}else c&&(d=String(c).match(Mg))?(this.h=!1,Ec(this,d[1]||"",!0),this.o=Ho(d[2]||""),this.g=Ho(d[3]||"",!0),pc(this,d[4]),this.l=Ho(d[5]||"",!0),Lg(this,d[6]||"",!0),this.m=Ho(d[7]||"")):(this.h=!1,this.i=new Yo(null,this.h))}Kr.prototype.toString=function(){var c=[],d=this.j;d&&c.push(Qo(d,Ug,!0),":");var E=this.g;return(E||d=="file")&&(c.push("//"),(d=this.o)&&c.push(Qo(d,Ug,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(Qo(E,E.charAt(0)=="/"?UF:LF,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",Qo(E,qF)),c.join("")};function pn(c){return new Kr(c)}function Ec(c,d,E){c.j=E?Ho(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function pc(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function Lg(c,d,E){d instanceof Yo?(c.i=d,zF(c.i,c.h)):(E||(d=Qo(d,jF)),c.i=new Yo(d,c.h))}function ve(c,d,E){c.i.set(d,E)}function mc(c){return ve(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Ho(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Qo(c,d,E){return typeof c=="string"?(c=encodeURI(c).replace(d,MF),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function MF(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ug=/[#\/\?@]/g,LF=/[#\?:]/g,UF=/[#\?]/g,jF=/[#\?@]/g,qF=/#/g;function Yo(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Zn(c){c.g||(c.g=new Map,c.h=0,c.i&&VF(c.i,function(d,E){c.add(decodeURIComponent(d.replace(/\+/g," ")),E)}))}n=Yo.prototype,n.add=function(c,d){Zn(this),this.i=null,c=ii(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(d),this.h+=1,this};function jg(c,d){Zn(c),d=ii(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function qg(c,d){return Zn(c),d=ii(c,d),c.g.has(d)}n.forEach=function(c,d){Zn(this),this.g.forEach(function(E,_){E.forEach(function(S){c.call(d,S,_,this)},this)},this)},n.na=function(){Zn(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),E=[];for(let _=0;_<d.length;_++){const S=c[_];for(let N=0;N<S.length;N++)E.push(d[_])}return E},n.V=function(c){Zn(this);let d=[];if(typeof c=="string")qg(this,c)&&(d=d.concat(this.g.get(ii(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)d=d.concat(c[E])}return d},n.set=function(c,d){return Zn(this),this.i=null,c=ii(this,c),qg(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},n.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function zg(c,d,E){jg(c,d),0<E.length&&(c.i=null,c.g.set(ii(c,d),w(E)),c.h+=E.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var E=0;E<d.length;E++){var _=d[E];const N=encodeURIComponent(String(_)),j=this.V(_);for(_=0;_<j.length;_++){var S=N;j[_]!==""&&(S+="="+encodeURIComponent(String(j[_]))),c.push(S)}}return this.i=c.join("&")};function ii(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function zF(c,d){d&&!c.j&&(Zn(c),c.i=null,c.g.forEach(function(E,_){var S=_.toLowerCase();_!=S&&(jg(this,_),zg(this,S,E))},c)),c.j=d}function $F(c,d){const E=new Ko;if(a.Image){const _=new Image;_.onload=p(er,E,"TestLoadImage: loaded",!0,d,_),_.onerror=p(er,E,"TestLoadImage: error",!1,d,_),_.onabort=p(er,E,"TestLoadImage: abort",!1,d,_),_.ontimeout=p(er,E,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=c}else d(!1)}function WF(c,d){const E=new Ko,_=new AbortController,S=setTimeout(()=>{_.abort(),er(E,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:_.signal}).then(N=>{clearTimeout(S),N.ok?er(E,"TestPingServer: ok",!0,d):er(E,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(S),er(E,"TestPingServer: error",!1,d)})}function er(c,d,E,_,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),_(E)}catch{}}function KF(){this.g=new IF}function GF(c,d,E){const _=E||"";try{Vg(c,function(S,N){let j=S;x(S)&&(j=ih(S)),d.push(_+N+"="+encodeURIComponent(j))})}catch(S){throw d.push(_+"type="+encodeURIComponent("_badmap")),S}}function gc(c){this.l=c.Ub||null,this.j=c.eb||!1}A(gc,oh),gc.prototype.g=function(){return new _c(this.l,this.j)},gc.prototype.i=(function(c){return function(){return c}})({});function _c(c,d){st.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(_c,st),n=_c.prototype,n.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,Jo(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xo(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Jo(this)),this.g&&(this.readyState=3,Jo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$g(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function $g(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?Xo(this):Jo(this),this.readyState==3&&$g(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Xo(this))},n.Qa=function(c){this.g&&(this.response=c,Xo(this))},n.ga=function(){this.g&&Xo(this)};function Xo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Jo(c)}n.setRequestHeader=function(c,d){this.u.append(c,d)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var E=d.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=d.next();return c.join(`\r
`)};function Jo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(_c.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Wg(c){let d="";return k(c,function(E,_){d+=_,d+=":",d+=E,d+=`\r
`}),d}function ph(c,d,E){e:{for(_ in E){var _=!1;break e}_=!0}_||(E=Wg(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):ve(c,d,E))}function Ne(c){st.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ne,st);var HF=/^https?$/i,QF=["POST","PUT"];n=Ne.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,d,E,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lh.g(),this.v=this.o?Cg(this.o):Cg(lh),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(N){Kg(this,N);return}if(c=E||"",E=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var S in _)E.set(S,_[S]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const N of _.keys())E.set(N,_.get(N));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(E.keys()).find(N=>N.toLowerCase()=="content-type"),S=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(QF,d,void 0))||_||S||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of E)this.g.setRequestHeader(N,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qg(this),this.u=!0,this.g.send(c),this.u=!1}catch(N){Kg(this,N)}};function Kg(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,Gg(c),Cc(c)}function Gg(c){c.A||(c.A=!0,xt(c,"complete"),xt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,xt(this,"complete"),xt(this,"abort"),Cc(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cc(this,!0)),Ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Hg(this):this.bb())},n.bb=function(){Hg(this)};function Hg(c){if(c.h&&typeof o<"u"&&(!c.v[1]||mn(c)!=4||c.Z()!=2)){if(c.u&&mn(c)==4)pg(c.Ea,0,c);else if(xt(c,"readystatechange"),mn(c)==4){c.h=!1;try{const j=c.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var E;if(!(E=d)){var _;if(_=j===0){var S=String(c.D).match(Mg)[1]||null;!S&&a.self&&a.self.location&&(S=a.self.location.protocol.slice(0,-1)),_=!HF.test(S?S.toLowerCase():"")}E=_}if(E)xt(c,"complete"),xt(c,"success");else{c.m=6;try{var N=2<mn(c)?c.g.statusText:""}catch{N=""}c.l=N+" ["+c.Z()+"]",Gg(c)}}finally{Cc(c)}}}}function Cc(c,d){if(c.g){Qg(c);const E=c.g,_=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||xt(c,"ready");try{E.onreadystatechange=_}catch{}}}function Qg(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function mn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),wF(d)}};function Yg(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function YF(c){const d={};c=(c.g&&2<=mn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<c.length;_++){if(V(c[_]))continue;var E=D(c[_]);const S=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const N=d[S]||[];d[S]=N,N.push(E)}g(d,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zo(c,d,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||d}function Xg(c){this.Aa=0,this.i=[],this.j=new Ko,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zo("baseRetryDelayMs",5e3,c),this.cb=Zo("retryDelaySeedMs",1e4,c),this.Wa=Zo("forwardChannelMaxRetries",2,c),this.wa=Zo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Pg(c&&c.concurrentRequestLimit),this.Da=new KF,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xg.prototype,n.la=8,n.G=1,n.connect=function(c,d,E,_){ut(0),this.W=c,this.H=d||{},E&&_!==void 0&&(this.H.OSID=E,this.H.OAID=_),this.F=this.X,this.I=o_(this,null,this.W),yc(this)};function mh(c){if(Jg(c),c.G==3){var d=c.U++,E=pn(c.I);if(ve(E,"SID",c.K),ve(E,"RID",d),ve(E,"TYPE","terminate"),ea(c,E),d=new Jn(c,c.j,d),d.L=2,d.v=mc(pn(E)),E=!1,a.navigator&&a.navigator.sendBeacon)try{E=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!E&&a.Image&&(new Image().src=d.v,E=!0),E||(d.g=a_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),fc(d)}i_(c)}function Ac(c){c.g&&(_h(c),c.g.cancel(),c.g=null)}function Jg(c){Ac(c),c.u&&(a.clearTimeout(c.u),c.u=null),Bc(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function yc(c){if(!Sg(c.h)&&!c.s){c.s=!0;var d=c.Ga;H||De(),xe||(H(),xe=!0),Ce.add(d,c),c.B=0}}function XF(c,d){return Rg(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Wo(f(c.Ga,c,d),s_(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const S=new Jn(this,this.j,c);let N=this.o;if(this.S&&(N?(N=m(N),B(N,this.S)):N=this.S),this.m!==null||this.O||(S.H=N,N=null),this.P)e:{for(var d=0,E=0;E<this.i.length;E++){t:{var _=this.i[E];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=E;break e}if(d===4096||E===this.i.length-1){d=E+1;break e}}d=1e3}else d=1e3;d=e_(this,S,d),E=pn(this.I),ve(E,"RID",c),ve(E,"CVER",22),this.D&&ve(E,"X-HTTP-Session-Id",this.D),ea(this,E),N&&(this.O?d="headers="+encodeURIComponent(String(Wg(N)))+"&"+d:this.m&&ph(E,this.m,N)),Eh(this.h,S),this.Ua&&ve(E,"TYPE","init"),this.P?(ve(E,"$req",d),ve(E,"SID","null"),S.T=!0,uh(S,E,null)):uh(S,E,d),this.G=2}}else this.G==3&&(c?Zg(this,c):this.i.length==0||Sg(this.h)||Zg(this))};function Zg(c,d){var E;d?E=d.l:E=c.U++;const _=pn(c.I);ve(_,"SID",c.K),ve(_,"RID",E),ve(_,"AID",c.T),ea(c,_),c.m&&c.o&&ph(_,c.m,c.o),E=new Jn(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),d&&(c.i=d.D.concat(c.i)),d=e_(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Eh(c.h,E),uh(E,_,d)}function ea(c,d){c.H&&k(c.H,function(E,_){ve(d,_,E)}),c.l&&Vg({},function(E,_){ve(d,_,E)})}function e_(c,d,E){E=Math.min(c.i.length,E);var _=c.l?f(c.l.Na,c.l,c):null;e:{var S=c.i;let N=-1;for(;;){const j=["count="+E];N==-1?0<E?(N=S[0].g,j.push("ofs="+N)):N=0:j.push("ofs="+N);let ye=!0;for(let Ye=0;Ye<E;Ye++){let de=S[Ye].g;const it=S[Ye].map;if(de-=N,0>de)N=Math.max(0,S[Ye].g-100),ye=!1;else try{GF(it,j,"req"+de+"_")}catch{_&&_(it)}}if(ye){_=j.join("&");break e}}}return c=c.i.splice(0,E),d.D=c,_}function t_(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;H||De(),xe||(H(),xe=!0),Ce.add(d,c),c.v=0}}function gh(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Wo(f(c.Fa,c),s_(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,n_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Wo(f(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),Ac(this),n_(this))};function _h(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function n_(c){c.g=new Jn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=pn(c.qa);ve(d,"RID","rpc"),ve(d,"SID",c.K),ve(d,"AID",c.T),ve(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&ve(d,"TO",c.ja),ve(d,"TYPE","xmlhttp"),ea(c,d),c.m&&c.o&&ph(d,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=mc(pn(d)),E.m=null,E.P=!0,Tg(E,c)}n.Za=function(){this.C!=null&&(this.C=null,Ac(this),gh(this),ut(19))};function Bc(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function r_(c,d){var E=null;if(c.g==d){Bc(c),_h(c),c.g=null;var _=2}else if(fh(c.h,d))E=d.D,Ng(c.h,d),_=1;else return;if(c.G!=0){if(d.o)if(_==1){E=d.m?d.m.length:0,d=Date.now()-d.F;var S=c.B;_=uc(),xt(_,new vg(_,E)),yc(c)}else t_(c);else if(S=d.s,S==3||S==0&&0<d.X||!(_==1&&XF(c,d)||_==2&&gh(c)))switch(E&&0<E.length&&(d=c.h,d.i=d.i.concat(E)),S){case 1:Gr(c,5);break;case 4:Gr(c,10);break;case 3:Gr(c,6);break;default:Gr(c,2)}}}function s_(c,d){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*d}function Gr(c,d){if(c.j.info("Error code "+d),d==2){var E=f(c.fb,c),_=c.Xa;const S=!_;_=new Kr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ec(_,"https"),mc(_),S?$F(_.toString(),E):WF(_.toString(),E)}else ut(2);c.G=0,c.l&&c.l.sa(d),i_(c),Jg(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function i_(c){if(c.G=0,c.ka=[],c.l){const d=Og(c.h);(d.length!=0||c.i.length!=0)&&(v(c.ka,d),v(c.ka,c.i),c.h.i.length=0,w(c.i),c.i.length=0),c.l.ra()}}function o_(c,d,E){var _=E instanceof Kr?pn(E):new Kr(E);if(_.g!="")d&&(_.g=d+"."+_.g),pc(_,_.s);else{var S=a.location;_=S.protocol,d=d?d+"."+S.hostname:S.hostname,S=+S.port;var N=new Kr(null);_&&Ec(N,_),d&&(N.g=d),S&&pc(N,S),E&&(N.l=E),_=N}return E=c.D,d=c.ya,E&&d&&ve(_,E,d),ve(_,"VER",c.la),ea(c,_),_}function a_(c,d,E){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new Ne(new gc({eb:E})):new Ne(c.pa),d.Ha(c.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function c_(){}n=c_.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Dc(){}Dc.prototype.g=function(c,d){return new Dt(c,d)};function Dt(c,d){st.call(this),this.g=new Xg(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!V(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!V(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new oi(this)}A(Dt,st),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){mh(this.g)},Dt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=ih(c),c=E);d.i.push(new RF(d.Ya++,c)),d.G==3&&yc(d)},Dt.prototype.N=function(){this.g.l=null,delete this.j,mh(this.g),delete this.g,Dt.aa.N.call(this)};function l_(c){ah.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const E in d){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}A(l_,ah);function x_(){ch.call(this),this.status=1}A(x_,ch);function oi(c){this.g=c}A(oi,c_),oi.prototype.ua=function(){xt(this.g,"a")},oi.prototype.ta=function(c){xt(this.g,new l_(c))},oi.prototype.sa=function(c){xt(this.g,new x_)},oi.prototype.ra=function(){xt(this.g,"b")},Dc.prototype.createWebChannel=Dc.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,zd=function(){return new Dc},qd=function(){return uc()},jd=$r,Zc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hc.NO_ERROR=0,hc.TIMEOUT=8,hc.HTTP_ERROR=6,ya=hc,Fg.COMPLETE="complete",Ud=Fg,Ag.EventType=zo,zo.OPEN="a",zo.CLOSE="b",zo.ERROR="c",zo.MESSAGE="d",st.prototype.listen=st.prototype.K,Ci=Ag,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,Ld=Ne}).apply(typeof Aa<"u"?Aa:typeof self<"u"?self:typeof window<"u"?window:{});const $d="@firebase/firestore",Wd="4.8.0";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let ts="11.10.0";/**
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
 */const lr=new oa("@firebase/firestore");function ns(){return lr.logLevel}function M(n,...e){if(lr.logLevel<=se.DEBUG){const t=e.map(el);lr.debug(`Firestore (${ts}): ${n}`,...t)}}function Oe(n,...e){if(lr.logLevel<=se.ERROR){const t=e.map(el);lr.error(`Firestore (${ts}): ${n}`,...t)}}function Dn(n,...e){if(lr.logLevel<=se.WARN){const t=e.map(el);lr.warn(`Firestore (${ts}): ${n}`,...t)}}function el(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function z(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Kd(n,r,t)}function Kd(n,e,t){let r=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Oe(r),new Error(r)}function G(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Kd(e,s,r)}function W(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends $t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class A6{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class y6{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Xe.UNAUTHENTICATED)))}shutdown(){}}class B6{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){G(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wt)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(G(typeof r.accessToken=="string",31837,{l:r}),new A6(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return G(e===null||typeof e=="string",2055,{h:e}),new Xe(e)}}class D6{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class v6{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new D6(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Xe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F6{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){G(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Gd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(G(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Gd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function w6(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Hd(){return new TextEncoder}/**
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
 */class tl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=w6(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function J(n,e){return n<e?-1:n>e?1:0}function nl(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return J(r,s);{const i=Hd(),o=I6(i.encode(Qd(n,t)),i.encode(Qd(e,t)));return o!==0?o:J(r,s)}}t+=r>65535?2:1}return J(n.length,e.length)}function Qd(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function I6(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return J(n[t],e[t]);return J(n.length,e.length)}function rs(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}function Yd(n){return n+"\0"}/**
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
 */const Xd="__name__";class Kt{constructor(e,t,r){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&z(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Kt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Kt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return J(e.length,t.length)}static compareSegments(e,t){const r=Kt.isNumericId(e),s=Kt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Kt.extractNumericId(e).compare(Kt.extractNumericId(t)):nl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Bn.fromString(e.substring(4,e.length-2))}}class fe extends Kt{construct(e,t,r){return new fe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new fe(t)}static emptyPath(){return new fe([])}}const T6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends Kt{construct(e,t,r){return new Ie(e,t,r)}static isValidIdentifier(e){return T6.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xd}static keyField(){return new Ie([Xd])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new L(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new L(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}/**
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
 */function Jd(n,e,t){if(!t)throw new L(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function b6(n,e,t,r){if(e===!0&&r===!0)throw new L(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Zd(n){if(!q.isDocumentKey(n))throw new L(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ef(n){if(q.isDocumentKey(n))throw new L(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function tf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ba(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function dt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ba(n);throw new L(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function k6(n,e){if(e<=0)throw new L(O.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Me(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ai(n,e){if(!tf(n))throw new L(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new L(O.INVALID_ARGUMENT,t);return!0}/**
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
 */const nf=-62135596800,rf=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*rf);return new pe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<nf)throw new L(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rf}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ai(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Me("string",pe._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new pe(0,0))}static max(){return new Q(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ss=-1;class Da{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function rl(n){return n.fields.find((e=>e.kind===2))}function xr(n){return n.fields.filter((e=>e.kind!==2))}Da.UNKNOWN_ID=-1;class va{constructor(e,t){this.fieldPath=e,this.kind=t}}class yi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new yi(0,mt.min())}}function sf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new pe(t+1,0):new pe(t,r));return new mt(s,q.empty(),e)}function of(n){return new mt(n.readTime,n.key,ss)}class mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mt(Q.min(),q.empty(),ss)}static max(){return new mt(Q.max(),q.empty(),ss)}}function sl(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
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
 */const af="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function vn(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==af)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,r)=>{t(e)}))}static reject(e){return new P(((t,r)=>{r(e)}))}static waitFor(e){return new P(((t,r)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&t()}),(l=>r(l)))})),o=!0,i===s&&t()}))}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next((s=>s?P.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new P(((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const x=l;t(e[x]).next((h=>{o[x]=h,++a,a===i&&r(o)}),(h=>s(h)))}}))}static doWhile(e,t){return new P(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}/**
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
 */const gt="SimpleDb";class Fa{static open(e,t,r,s){try{return new Fa(t,e.transaction(s,r))}catch(i){throw new Bi(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Wt,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Bi(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=il(r.target.error);this.S.reject(new Bi(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(M(gt,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new S6(t)}}class Fn{static delete(e){return M(gt,"Removing database:",e),ur(wh().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Ic())return!1;if(Fn.F())return!0;const e=Qe(),t=Fn.M(e),r=0<t&&t<10,s=lf(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,Fn.M(Qe())===12.2&&Oe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(M(gt,"Opening database:",this.name),this.db=await new Promise(((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new Bi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new L(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new L(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Bi(e,o))},s.onupgradeneeded=i=>{M(gt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next((()=>{M(gt,"Database upgrade to version "+this.version+" complete")}))}})),this.db.addEventListener("close",(t=>{const r=t.target;this.L=r.version}),{passive:!0})),this.db.addEventListener("versionchange",(t=>{var r;t.newVersion===null&&(Dn('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))}),{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=Fa.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next((x=>(a.v(),x))).catch((x=>(a.abort(x),P.reject(x)))).toPromise();return l.catch((()=>{})),await a.D,l}catch(a){const l=a,x=l.name!=="FirebaseError"&&o<3;if(M(gt,"Transaction failed with error:",l.message,"Retrying:",x),this.close(),!x)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function lf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class P6{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return ur(this.$.delete())}}class Bi extends L{constructor(e,t){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function wn(n){return n.name==="IndexedDbTransactionError"}class S6{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(M(gt,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(M(gt,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ur(r)}add(e){return M(gt,"ADD",this.store.name,e,e),ur(this.store.add(e))}get(e){return ur(this.store.get(e)).next((t=>(t===void 0&&(t=null),M(gt,"GET",this.store.name,e,t),t)))}delete(e){return M(gt,"DELETE",this.store.name,e),ur(this.store.delete(e))}count(){return M(gt,"COUNT",this.store.name),ur(this.store.count())}j(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P(((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}}))}{const i=this.cursor(r),o=[];return this.J(i,((a,l)=>{o.push(l)})).next((()=>o))}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new P(((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}}))}Y(e,t){M(gt,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Z=!1;const s=this.cursor(r);return this.J(s,((i,o,a)=>a.delete()))}X(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.J(s,t)}ee(e){const t=this.cursor({});return new P(((r,s)=>{t.onerror=i=>{const o=il(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((a=>{a?o.continue():r()})):r()}}))}J(e,t){const r=[];return new P(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new P6(a),x=t(a.primaryKey,a.value,l);if(x instanceof P){const h=x.catch((u=>(l.done(),P.reject(u))));r.push(h)}l.isDone?s():l.W===null?a.continue():a.continue(l.W)}})).next((()=>P.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ur(n){return new P(((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=il(r.target.error);t(s)}}))}let xf=!1;function il(n){const e=Fn.M(Qe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new L("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xf||(xf=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Di="IndexBackfiller";class R6{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){M(Di,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.te.re();M(Di,`Documents written: ${t}`)}catch(t){wn(t)?M(Di,"Ignoring IndexedDB error during index backfill: ",t):await vn(t)}await this.ne(6e4)}))}}class N6{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.ie(t,e)))}ie(e,t){const r=new Set;let s=t,i=!0;return P.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return M(Di,`Processing collection: ${o}`),this.se(e,o,s).next((a=>{s-=a,r.add(o)}));i=!1})))).next((()=>t-s))}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this.oe(s,i))).next((a=>(M(Di,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a)))).next((()=>o.size))}))))}oe(e,t){let r=e;return t.changes.forEach(((s,i)=>{const o=of(i);sl(o,r)>0&&(r=o)})),new mt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ft{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ft.ue=-1;/**
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
 */const hr=-1;function wa(n){return n==null}function vi(n){return n===0&&1/n==-1/0}function uf(n){return typeof n=="number"&&Number.isInteger(n)&&!vi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ia="";function Je(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hf(e)),e=O6(n.get(t),e);return hf(e)}function O6(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ia:t+="";break;default:t+=i}}return t}function hf(n){return n+Ia+""}function Gt(n){const e=n.length;if(G(e>=2,64408,{path:n}),e===2)return G(n.charAt(0)===Ia&&n.charAt(1)==="",56145,{path:n}),fe.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(Ia,i);switch((o<0||o>t)&&z(50515,{path:n}),n.charAt(o+1)){case"":const a=n.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:z(61167,{path:n})}i=o+2}return new fe(r)}/**
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
 */const dr="remoteDocuments",Fi="owner",is="owner",wi="mutationQueues",V6="userId",Rt="mutations",df="batchId",fr="userMutationsIndex",ff=["userId","batchId"];/**
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
 */function Ta(n,e){return[n,Je(e)]}function Ef(n,e,t){return[n,Je(e),t]}const M6={},os="documentMutations",ba="remoteDocumentsV14",L6=["prefixPath","collectionGroup","readTime","documentId"],ka="documentKeyIndex",U6=["prefixPath","collectionGroup","documentId"],pf="collectionGroupIndex",j6=["collectionGroup","readTime","prefixPath","documentId"],Ii="remoteDocumentGlobal",ol="remoteDocumentGlobalKey",as="targets",mf="queryTargetsIndex",q6=["canonicalId","targetId"],cs="targetDocuments",z6=["targetId","path"],al="documentTargetsIndex",$6=["path","targetId"],Pa="targetGlobalKey",Er="targetGlobal",Ti="collectionParents",W6=["collectionId","parent"],ls="clientMetadata",K6="clientId",Sa="bundles",G6="bundleId",Ra="namedQueries",H6="name",cl="indexConfiguration",Q6="indexId",ll="collectionGroupIndex",Y6="collectionGroup",bi="indexState",X6=["indexId","uid"],gf="sequenceNumberIndex",J6=["uid","sequenceNumber"],ki="indexEntries",Z6=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],_f="documentKeyIndex",e5=["indexId","uid","orderedDocumentKey"],Na="documentOverlays",t5=["userId","collectionPath","documentId"],xl="collectionPathOverlayIndex",n5=["userId","collectionPath","largestBatchId"],Cf="collectionGroupOverlayIndex",r5=["userId","collectionGroup","largestBatchId"],ul="globals",s5="name",Af=[wi,Rt,os,dr,as,Fi,Er,cs,ls,Ii,Ti,Sa,Ra],i5=[...Af,Na],yf=[wi,Rt,os,ba,as,Fi,Er,cs,ls,Ii,Ti,Sa,Ra,Na],Bf=yf,hl=[...Bf,cl,bi,ki],o5=hl,Df=[...hl,ul],a5=Df;/**
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
 */class dl extends cf{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function je(n,e){const t=W(n);return Fn.N(t.ce,e)}/**
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
 */function vf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function In(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ff(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Te=class Ah{constructor(e,t){this.comparator=e,this.root=t||Tn.EMPTY}insert(e,t){return new Ah(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tn.BLACK,null,null))}remove(e){return new Ah(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Oa(this.root,e,this.comparator,!0)}},Oa=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Tn=class gn{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??gn.RED,this.left=s??gn.EMPTY,this.right=i??gn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new gn(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return gn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}};Tn.EMPTY=null,Tn.RED=!0,Tn.BLACK=!1,Tn.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wf(this.data.getIterator())}getIteratorFrom(e){return new wf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new me(this.comparator);return t.data=e,t}}class wf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function xs(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Et{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new Et([])}unionWith(e){let t=new me(Ie.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rs(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class If extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new If("Invalid base64 string: "+i):i}})(e);return new Ve(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const c5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sn(n){if(G(!!n,39018),typeof n=="string"){let e=0;const t=c5.exec(n);if(G(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(n.seconds),nanos:Fe(n.nanos)}}function Fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function on(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
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
 */const Tf="server_timestamp",bf="__type__",kf="__previous_value__",Pf="__local_write_time__";function fl(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[bf])===null||t===void 0?void 0:t.stringValue)===Tf}function Va(n){const e=n.mapValue.fields[kf];return fl(e)?Va(e):e}function Pi(n){const e=sn(n.mapValue.fields[Pf].timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class l5{constructor(e,t,r,s,i,o,a,l,x,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=x,this.isUsingEmulator=h}}const Ma="(default)";class pr{constructor(e,t){this.projectId=e,this.database=t||Ma}static empty(){return new pr("","")}get isDefaultDatabase(){return this.database===Ma}isEqual(e){return e instanceof pr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const El="__type__",Sf="__max__",bn={mapValue:{fields:{__type__:{stringValue:Sf}}}},pl="__vector__",us="value",La={nullValue:"NULL_VALUE"};function kn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fl(n)?4:Mf(n)?9007199254740991:qa(n)?10:11:z(28295,{value:n})}function Ht(n,e){if(n===e)return!0;const t=kn(n);if(t!==kn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pi(n).isEqual(Pi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=sn(s.timestampValue),a=sn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return on(s.bytesValue).isEqual(on(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),a=Fe(i.doubleValue);return o===a?vi(o)===vi(a):isNaN(o)&&isNaN(a)}return!1})(n,e);case 9:return rs(n.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(vf(o)!==vf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ht(o[l],a[l])))return!1;return!0})(n,e);default:return z(52216,{left:n})}}function Si(n,e){return(n.values||[]).find((t=>Ht(t,e)))!==void 0}function Pn(n,e){if(n===e)return 0;const t=kn(n),r=kn(e);if(t!==r)return J(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(n,e);case 3:return Rf(n.timestampValue,e.timestampValue);case 4:return Rf(Pi(n),Pi(e));case 5:return nl(n.stringValue,e.stringValue);case 6:return(function(i,o){const a=on(i),l=on(o);return a.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),l=o.split("/");for(let x=0;x<a.length&&x<l.length;x++){const h=J(a[x],l[x]);if(h!==0)return h}return J(a.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=J(Fe(i.latitude),Fe(o.latitude));return a!==0?a:J(Fe(i.longitude),Fe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Nf(n.arrayValue,e.arrayValue);case 10:return(function(i,o){var a,l,x,h;const u=i.fields||{},f=o.fields||{},p=(a=u[us])===null||a===void 0?void 0:a.arrayValue,A=(l=f[us])===null||l===void 0?void 0:l.arrayValue,w=J(((x=p?.values)===null||x===void 0?void 0:x.length)||0,((h=A?.values)===null||h===void 0?void 0:h.length)||0);return w!==0?w:Nf(p,A)})(n.mapValue,e.mapValue);case 11:return(function(i,o){if(i===bn.mapValue&&o===bn.mapValue)return 0;if(i===bn.mapValue)return 1;if(o===bn.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),x=o.fields||{},h=Object.keys(x);l.sort(),h.sort();for(let u=0;u<l.length&&u<h.length;++u){const f=nl(l[u],h[u]);if(f!==0)return f;const p=Pn(a[l[u]],x[h[u]]);if(p!==0)return p}return J(l.length,h.length)})(n.mapValue,e.mapValue);default:throw z(23264,{le:t})}}function Rf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=sn(n),r=sn(e),s=J(t.seconds,r.seconds);return s!==0?s:J(t.nanos,r.nanos)}function Nf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Pn(t[s],r[s]);if(i)return i}return J(t.length,r.length)}function hs(n){return ml(n)}function ml(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=sn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return on(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return q.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=ml(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ml(t.fields[o])}`;return s+"}"})(n.mapValue):z(61005,{value:n})}function Ua(n){switch(kn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Va(n);return e?16+Ua(e):16;case 5:return 2*n.stringValue.length;case 6:return on(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ua(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return In(r.fields,((i,o)=>{s+=i.length+Ua(o)})),s})(n.mapValue);default:throw z(13486,{value:n})}}function Ri(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function gl(n){return!!n&&"integerValue"in n}function Ni(n){return!!n&&"arrayValue"in n}function Of(n){return!!n&&"nullValue"in n}function Vf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ja(n){return!!n&&"mapValue"in n}function qa(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[El])===null||t===void 0?void 0:t.stringValue)===pl}function Oi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return In(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Oi(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Oi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Mf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Sf}const Lf={mapValue:{fields:{[El]:{stringValue:pl},[us]:{arrayValue:{}}}}};function x5(n){return"nullValue"in n?La:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ri(pr.empty(),q.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?qa(n)?Lf:{mapValue:{}}:z(35942,{value:n})}function u5(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ri(pr.empty(),q.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?Lf:"mapValue"in n?qa(n)?{mapValue:{}}:bn:z(61959,{value:n})}function Uf(n,e){const t=Pn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function jf(n,e){const t=Pn(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ja(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(t)}setAll(e){let t=Ie.emptyPath(),r={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Oi(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ja(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){In(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Ze(Oi(this.value))}}function qf(n){const e=[];return In(n.fields,((t,r)=>{const s=new Ie([t]);if(ja(r)){const i=qf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Et(e)}/**
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
 */class Pe{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pe(e,0,Q.min(),Q.min(),Q.min(),Ze.empty(),0)}static newFoundDocument(e,t,r,s){return new Pe(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new Pe(e,2,t,Q.min(),Q.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,Q.min(),Q.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ds{constructor(e,t){this.position=e,this.inclusive=t}}function zf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),t.key):r=Pn(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function $f(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ht(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vi{constructor(e,t="asc"){this.field=e,this.dir=t}}function h5(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Wf{}class ae extends Wf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new d5(e,t,r):t==="array-contains"?new p5(e,r):t==="in"?new Xf(e,r):t==="not-in"?new m5(e,r):t==="array-contains-any"?new g5(e,r):new ae(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new f5(e,r):new E5(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Pn(t,this.value)):t!==null&&kn(this.value)===kn(t)&&this.matchesComparison(Pn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ge extends Wf{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new ge(e,t)}matches(e){return fs(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function fs(n){return n.op==="and"}function _l(n){return n.op==="or"}function Cl(n){return Kf(n)&&fs(n)}function Kf(n){for(const e of n.filters)if(e instanceof ge)return!1;return!0}function Al(n){if(n instanceof ae)return n.field.canonicalString()+n.op.toString()+hs(n.value);if(Cl(n))return n.filters.map((e=>Al(e))).join(",");{const e=n.filters.map((t=>Al(t))).join(",");return`${n.op}(${e})`}}function Gf(n,e){return n instanceof ae?(function(r,s){return s instanceof ae&&r.op===s.op&&r.field.isEqual(s.field)&&Ht(r.value,s.value)})(n,e):n instanceof ge?(function(r,s){return s instanceof ge&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,a)=>i&&Gf(o,s.filters[a])),!0):!1})(n,e):void z(19439)}function Hf(n,e){const t=n.filters.concat(e);return ge.create(t,n.op)}function Qf(n){return n instanceof ae?(function(t){return`${t.field.canonicalString()} ${t.op} ${hs(t.value)}`})(n):n instanceof ge?(function(t){return t.op.toString()+" {"+t.getFilters().map(Qf).join(" ,")+"}"})(n):"Filter"}class d5 extends ae{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class f5 extends ae{constructor(e,t){super(e,"in",t),this.keys=Yf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class E5 extends ae{constructor(e,t){super(e,"not-in",t),this.keys=Yf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Yf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>q.fromName(r.referenceValue)))}class p5 extends ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ni(t)&&Si(t.arrayValue,this.value)}}class Xf extends ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Si(this.value.arrayValue,t)}}class m5 extends ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Si(this.value.arrayValue,t)}}class g5 extends ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ni(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Si(this.value.arrayValue,r)))}}/**
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
 */class _5{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Pe=null}}function yl(n,e=null,t=[],r=[],s=null,i=null,o=null){return new _5(n,e,t,r,s,i,o)}function mr(n){const e=W(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Al(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),wa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>hs(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>hs(r))).join(",")),e.Pe=t}return e.Pe}function Mi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!h5(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Gf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$f(n.startAt,e.startAt)&&$f(n.endAt,e.endAt)}function za(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function $a(n,e){return n.filters.filter((t=>t instanceof ae&&t.field.isEqual(e)))}function Jf(n,e,t){let r=La,s=!0;for(const i of $a(n,e)){let o=La,a=!0;switch(i.op){case"<":case"<=":o=x5(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=La}Uf({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Uf({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Zf(n,e,t){let r=bn,s=!0;for(const i of $a(n,e)){let o=bn,a=!0;switch(i.op){case">=":case">":o=u5(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=bn}jf({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];jf({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Es{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function eE(n,e,t,r,s,i,o,a){return new Es(n,e,t,r,s,i,o,a)}function Li(n){return new Es(n)}function tE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nE(n){return n.collectionGroup!==null}function Ui(n){const e=W(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new me(Ie.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((x=>{x.isInequality()&&(a=a.add(x.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Vi(i,r))})),t.has(Ie.keyField().canonicalString())||e.Te.push(new Vi(Ie.keyField(),r))}return e.Te}function _t(n){const e=W(n);return e.Ie||(e.Ie=C5(e,Ui(n))),e.Ie}function C5(n,e){if(n.limitType==="F")return yl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Vi(s.field,i)}));const t=n.endAt?new ds(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ds(n.startAt.position,n.startAt.inclusive):null;return yl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Bl(n,e){const t=n.filters.concat([e]);return new Es(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Wa(n,e,t){return new Es(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ka(n,e){return Mi(_t(n),_t(e))&&n.limitType===e.limitType}function rE(n){return`${mr(_t(n))}|lt:${n.limitType}`}function ps(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Qf(s))).join(", ")}]`),wa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>hs(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>hs(s))).join(",")),`Target(${r})`})(_t(n))}; limitType=${n.limitType})`}function ji(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(o,a,l){const x=zf(o,a,l);return o.inclusive?x<=0:x<0})(r.startAt,Ui(r),s)||r.endAt&&!(function(o,a,l){const x=zf(o,a,l);return o.inclusive?x>=0:x>0})(r.endAt,Ui(r),s))})(n,e)}function sE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function iE(n){return(e,t)=>{let r=!1;for(const s of Ui(n)){const i=A5(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function A5(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):(function(i,o,a){const l=o.data.field(i),x=a.data.field(i);return l!==null&&x!==null?Pn(l,x):z(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z(19790,{direction:n.dir})}}/**
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
 */class an{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){In(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ff(this.inner)}size(){return this.innerSize}}/**
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
 */const y5=new Te(q.comparator);function Ct(){return y5}const oE=new Te(q.comparator);function qi(...n){let e=oE;for(const t of n)e=e.insert(t.key,t);return e}function aE(n){let e=oE;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Qt(){return zi()}function cE(){return zi()}function zi(){return new an((n=>n.toString()),((n,e)=>n.isEqual(e)))}const B5=new Te(q.comparator),D5=new me(q.comparator);function ee(...n){let e=D5;for(const t of n)e=e.add(t);return e}const v5=new me(J);function Dl(){return v5}/**
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
 */function vl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vi(e)?"-0":e}}function lE(n){return{integerValue:""+n}}function xE(n,e){return uf(e)?lE(e):vl(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ga{constructor(){this._=void 0}}function F5(n,e,t){return n instanceof ms?(function(s,i){const o={fields:{[bf]:{stringValue:Tf},[Pf]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fl(i)&&(i=Va(i)),i&&(o.fields[kf]=i),{mapValue:o}})(t,e):n instanceof gs?hE(n,e):n instanceof _s?dE(n,e):(function(s,i){const o=uE(s,i),a=fE(o)+fE(s.Ee);return gl(o)&&gl(s.Ee)?lE(a):vl(s.serializer,a)})(n,e)}function w5(n,e,t){return n instanceof gs?hE(n,e):n instanceof _s?dE(n,e):t}function uE(n,e){return n instanceof Cs?(function(r){return gl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ms extends Ga{}class gs extends Ga{constructor(e){super(),this.elements=e}}function hE(n,e){const t=EE(e);for(const r of n.elements)t.some((s=>Ht(s,r)))||t.push(r);return{arrayValue:{values:t}}}class _s extends Ga{constructor(e){super(),this.elements=e}}function dE(n,e){let t=EE(e);for(const r of n.elements)t=t.filter((s=>!Ht(s,r)));return{arrayValue:{values:t}}}class Cs extends Ga{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function fE(n){return Fe(n.integerValue||n.doubleValue)}function EE(n){return Ni(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Fl{constructor(e,t){this.field=e,this.transform=t}}function I5(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof gs&&s instanceof gs||r instanceof _s&&s instanceof _s?rs(r.elements,s.elements,Ht):r instanceof Cs&&s instanceof Cs?Ht(r.Ee,s.Ee):r instanceof ms&&s instanceof ms})(n.transform,e.transform)}class T5{constructor(e,t){this.version=e,this.transformResults=t}}class qe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qe}static exists(e){return new qe(void 0,e)}static updateTime(e){return new qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Qa{}function pE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Wi(n.key,qe.none()):new As(n.key,n.data,qe.none());{const t=n.data,r=Ze.empty();let s=new me(Ie.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new cn(n.key,r,new Et(s.toArray()),qe.none())}}function b5(n,e,t){n instanceof As?(function(s,i,o){const a=s.value.clone(),l=_E(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,e,t):n instanceof cn?(function(s,i,o){if(!Ha(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=_E(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(gE(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function $i(n,e,t,r){return n instanceof As?(function(i,o,a,l){if(!Ha(i.precondition,o))return a;const x=i.value.clone(),h=CE(i.fieldTransforms,l,o);return x.setAll(h),o.convertToFoundDocument(o.version,x).setHasLocalMutations(),null})(n,e,t,r):n instanceof cn?(function(i,o,a,l){if(!Ha(i.precondition,o))return a;const x=CE(i.fieldTransforms,l,o),h=o.data;return h.setAll(gE(i)),h.setAll(x),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((u=>u.field)))})(n,e,t,r):(function(i,o,a){return Ha(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,e,t)}function k5(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=uE(r.transform,s||null);i!=null&&(t===null&&(t=Ze.empty()),t.set(r.field,i))}return t||null}function mE(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rs(r,s,((i,o)=>I5(i,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class As extends Qa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cn extends Qa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gE(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function _E(n,e,t){const r=new Map;G(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,w5(o,a,t[s]))}return r}function CE(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,F5(i,o,e))}return r}class Wi extends Qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AE extends Qa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wl{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&b5(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=$i(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=$i(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cE();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const l=pE(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ee())}isEqual(e){return this.batchId===e.batchId&&rs(this.mutations,e.mutations,((t,r)=>mE(t,r)))&&rs(this.baseMutations,e.baseMutations,((t,r)=>mE(t,r)))}}class Il{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){G(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return B5})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Il(e,t,r,s)}}/**
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
 */class Tl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class P5{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Le,le;function S5(n){switch(n){case O.OK:return z(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function yE(n){if(n===void 0)return Oe("GRPC error has no .code"),O.UNKNOWN;switch(n){case Le.OK:return O.OK;case Le.CANCELLED:return O.CANCELLED;case Le.UNKNOWN:return O.UNKNOWN;case Le.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Le.INTERNAL:return O.INTERNAL;case Le.UNAVAILABLE:return O.UNAVAILABLE;case Le.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Le.NOT_FOUND:return O.NOT_FOUND;case Le.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Le.ABORTED:return O.ABORTED;case Le.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Le.DATA_LOSS:return O.DATA_LOSS;default:return z(39323,{code:n})}}(le=Le||(Le={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const R5=new Bn([4294967295,4294967295],0);function BE(n){const e=Hd().encode(n),t=new Md;return t.update(e),new Uint8Array(t.digest())}function DE(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Bn([t,r],0),new Bn([s,i],0)]}class bl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ki(`Invalid padding: ${t}`);if(r<0)throw new Ki(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ki(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ki(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Bn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Bn.fromNumber(r)));return s.compare(R5)===1&&(s=new Bn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=BE(e),[r,s]=DE(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new bl(i,s,t);return r.forEach((a=>o.insert(a))),o}insert(e){if(this.fe===0)return;const t=BE(e),[r,s]=DE(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ki extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Hi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gi(Q.min(),s,new Te(J),Ct(),ee())}}class Hi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hi(r,t,ee(),ee(),ee())}}/**
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
 */class Ya{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class vE{constructor(e,t){this.targetId=e,this.De=t}}class FE{constructor(e,t,r=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class wE{constructor(){this.ve=0,this.Ce=IE(),this.Fe=Ve.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ee(),t=ee(),r=ee();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:z(38017,{changeType:i})}})),new Hi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=IE()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class N5{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ct(),this.je=Xa(),this.Je=Xa(),this.He=new Te(J)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(za(i))if(r===0){const o=new q(i.path);this.Xe(t,o,Pe.newNoDocument(o,Q.min()))}else G(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const a=this._t(e),l=a?this.ut(a,e,o):1;if(l!==0){this.rt(t);const x=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,x)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=on(r).toUint8Array()}catch(l){if(l instanceof If)return Dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new bl(o,s,i)}catch(l){return Dn(l instanceof Ki?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.fe===0?null:a}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,o)=>{const a=this.st(o);if(a){if(i.current&&za(a.target)){const l=new q(a.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,Pe.newNoDocument(l,e))}i.Ne&&(t.set(o,i.Le()),i.ke())}}));let r=ee();this.Je.forEach(((i,o)=>{let a=!0;o.forEachWhile((l=>{const x=this.st(l);return!x||x.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Gi(e,t,this.He,this.ze,r);return this.ze=Ct(),this.je=Xa(),this.Je=Xa(),this.He=new Te(J),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new wE,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new me(J),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new me(J),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new wE),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Xa(){return new Te(q.comparator)}function IE(){return new Te(q.comparator)}const O5={asc:"ASCENDING",desc:"DESCENDING"},V5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},M5={and:"AND",or:"OR"};class L5{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kl(n,e){return n.useProto3Json||wa(e)?e:{value:e}}function ys(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function U5(n,e){return ys(n,e.toTimestamp())}function at(n){return G(!!n,49232),Q.fromTimestamp((function(t){const r=sn(t);return new pe(r.seconds,r.nanos)})(n))}function Pl(n,e){return Sl(n,e).canonicalString()}function Sl(n,e){const t=(function(s){return new fe(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function bE(n){const e=fe.fromString(n);return G(UE(e),10190,{key:e.toString()}),e}function Ja(n,e){return Pl(n.databaseId,e.path)}function gr(n,e){const t=bE(e);if(t.get(1)!==n.databaseId.projectId)throw new L(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(SE(t))}function kE(n,e){return Pl(n.databaseId,e)}function PE(n){const e=bE(n);return e.length===4?fe.emptyPath():SE(e)}function Rl(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function SE(n){return G(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function RE(n,e,t){return{name:Ja(n,e),fields:t.value.mapValue.fields}}function j5(n,e,t){const r=gr(n,e.name),s=at(e.updateTime),i=e.createTime?at(e.createTime):Q.min(),o=new Ze({mapValue:{fields:e.fields}}),a=Pe.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function q5(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(x){return x==="NO_CHANGE"?0:x==="ADD"?1:x==="REMOVE"?2:x==="CURRENT"?3:x==="RESET"?4:z(39313,{state:x})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(x,h){return x.useProto3Json?(G(h===void 0||typeof h=="string",58123),Ve.fromBase64String(h||"")):(G(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Ve.fromUint8Array(h||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(x){const h=x.code===void 0?O.UNKNOWN:yE(x.code);return new L(h,x.message||"")})(o);t=new FE(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gr(n,r.document.name),i=at(r.document.updateTime),o=r.document.createTime?at(r.document.createTime):Q.min(),a=new Ze({mapValue:{fields:r.document.fields}}),l=Pe.newFoundDocument(s,i,o,a),x=r.targetIds||[],h=r.removedTargetIds||[];t=new Ya(x,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gr(n,r.document),i=r.readTime?at(r.readTime):Q.min(),o=Pe.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Ya([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gr(n,r.document),i=r.removedTargetIds||[];t=new Ya([],i,s,null)}else{if(!("filter"in e))return z(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new P5(s,i),a=r.targetId;t=new vE(a,o)}}return t}function Za(n,e){let t;if(e instanceof As)t={update:RE(n,e.key,e.value)};else if(e instanceof Wi)t={delete:Ja(n,e.key)};else if(e instanceof cn)t={update:RE(n,e.key,e.data),updateMask:H5(e.fieldMask)};else{if(!(e instanceof AE))return z(16599,{Rt:e.type});t={verify:Ja(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const a=o.transform;if(a instanceof ms)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof gs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _s)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Cs)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw z(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:U5(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z(27497)})(n,e.precondition)),t}function Nl(n,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?qe.updateTime(at(i.updateTime)):i.exists!==void 0?qe.exists(i.exists):qe.none()})(e.currentDocument):qe.none(),r=e.updateTransforms?e.updateTransforms.map((s=>(function(o,a){let l=null;if("setToServerValue"in a)G(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new ms;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new gs(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new _s(h)}else"increment"in a?l=new Cs(o,a.increment):z(16584,{proto:a});const x=Ie.fromServerFormat(a.fieldPath);return new Fl(x,l)})(n,s))):[];if(e.update){e.update.name;const s=gr(n,e.update.name),i=new Ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(l){const x=l.fieldPaths||[];return new Et(x.map((h=>Ie.fromServerFormat(h))))})(e.updateMask);return new cn(s,i,o,t,r)}return new As(s,i,t,r)}if(e.delete){const s=gr(n,e.delete);return new Wi(s,t)}if(e.verify){const s=gr(n,e.verify);return new AE(s,t)}return z(1463,{proto:e})}function z5(n,e){return n&&n.length>0?(G(e!==void 0,14353),n.map((t=>(function(s,i){let o=s.updateTime?at(s.updateTime):at(i);return o.isEqual(Q.min())&&(o=at(i)),new T5(o,s.transformResults||[])})(t,e)))):[]}function NE(n,e){return{documents:[kE(n,e.path)]}}function OE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=kE(n,s);const i=(function(x){if(x.length!==0)return LE(ge.create(x,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(x){if(x.length!==0)return x.map((h=>(function(f){return{field:Bs(f.field),direction:W5(f.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=kl(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(x){return{before:x.inclusive,values:x.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(x){return{before:!x.inclusive,values:x.position}})(e.endAt)),{Vt:t,parent:s}}function VE(n){let e=PE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){G(r===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(u){const f=ME(u);return f instanceof ge&&Cl(f)?f.getFilters():[f]})(t.where));let o=[];t.orderBy&&(o=(function(u){return u.map((f=>(function(A){return new Vi(Ds(A.field),(function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(f)))})(t.orderBy));let a=null;t.limit&&(a=(function(u){let f;return f=typeof u=="object"?u.value:u,wa(f)?null:f})(t.limit));let l=null;t.startAt&&(l=(function(u){const f=!!u.before,p=u.values||[];return new ds(p,f)})(t.startAt));let x=null;return t.endAt&&(x=(function(u){const f=!u.before,p=u.values||[];return new ds(p,f)})(t.endAt)),eE(e,s,o,i,a,"F",l,x)}function $5(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ME(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ds(t.unaryFilter.field);return ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(t.unaryFilter.field);return ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ds(t.unaryFilter.field);return ae.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(t.unaryFilter.field);return ae.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ae.create(Ds(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ge.create(t.compositeFilter.filters.map((r=>ME(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(n):z(30097,{filter:n})}function W5(n){return O5[n]}function K5(n){return V5[n]}function G5(n){return M5[n]}function Bs(n){return{fieldPath:n.canonicalString()}}function Ds(n){return Ie.fromServerFormat(n.fieldPath)}function LE(n){return n instanceof ae?(function(t){if(t.op==="=="){if(Vf(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NAN"}};if(Of(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Vf(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NOT_NAN"}};if(Of(t.value))return{unaryFilter:{field:Bs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bs(t.field),op:K5(t.op),value:t.value}}})(n):n instanceof ge?(function(t){const r=t.getFilters().map((s=>LE(s)));return r.length===1?r[0]:{compositeFilter:{op:G5(t.op),filters:r}}})(n):z(54877,{filter:n})}function H5(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function UE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ln{constructor(e,t,r,s,i=Q.min(),o=Q.min(),a=Ve.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jE{constructor(e){this.gt=e}}function Q5(n,e){let t;if(e.document)t=j5(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),s=Cr(e.noDocument.readTime);t=Pe.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return z(56709);{const r=q.fromSegments(e.unknownDocument.path),s=Cr(e.unknownDocument.version);t=Pe.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime((function(s){const i=new pe(s[0],s[1]);return Q.fromTimestamp(i)})(e.readTime)),t}function qE(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:e0(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(i,o){return{name:Ja(i,o.key),fields:o.data.value.mapValue.fields,updateTime:ys(i,o.version.toTimestamp()),createTime:ys(i,o.createTime.toTimestamp())}})(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:_r(e.version)};else{if(!e.isUnknownDocument())return z(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:_r(e.version)}}return r}function e0(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function _r(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Cr(n){const e=new pe(n.seconds,n.nanoseconds);return Q.fromTimestamp(e)}function Ar(n,e){const t=(e.baseMutations||[]).map((i=>Nl(n.gt,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map((i=>Nl(n.gt,i))),s=pe.fromMillis(e.localWriteTimeMs);return new wl(e.batchId,s,t,r)}function Qi(n){const e=Cr(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Cr(n.lastLimboFreeSnapshotVersion):Q.min();let r;return r=(function(i){return i.documents!==void 0})(n.query)?(function(i){const o=i.documents.length;return G(o===1,1966,{count:o}),_t(Li(PE(i.documents[0])))})(n.query):(function(i){return _t(VE(i))})(n.query),new ln(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ve.fromBase64String(n.resumeToken))}function zE(n,e){const t=_r(e.snapshotVersion),r=_r(e.lastLimboFreeSnapshotVersion);let s;s=za(e.target)?NE(n.gt,e.target):OE(n.gt,e.target).Vt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:mr(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function $E(n){const e=VE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Wa(e,e.limit,"L"):e}function Ol(n,e){return new Tl(e.largestBatchId,Nl(n.gt,e.overlayMutation))}function WE(n,e){const t=e.path.lastSegment();return[n,Je(e.path.popLast()),t]}function KE(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:_r(r.readTime),documentKey:Je(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class Y5{getBundleMetadata(e,t){return GE(e).get(t).next((r=>{if(r)return(function(i){return{id:i.bundleId,createTime:Cr(i.createTime),version:i.version}})(r)}))}saveBundleMetadata(e,t){return GE(e).put((function(s){return{bundleId:s.id,createTime:_r(at(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return HE(e).get(t).next((r=>{if(r)return(function(i){return{name:i.name,query:$E(i.bundledQuery),readTime:Cr(i.readTime)}})(r)}))}saveNamedQuery(e,t){return HE(e).put((function(s){return{name:s.name,readTime:_r(at(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function GE(n){return je(n,Sa)}function HE(n){return je(n,Ra)}/**
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
 */class t0{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const r=t.uid||"";return new t0(e,r)}getOverlay(e,t){return Yi(e).get(WE(this.userId,t)).next((r=>r?Ol(this.serializer,r):null))}getOverlays(e,t){const r=Qt();return P.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){const s=[];return r.forEach(((i,o)=>{const a=new Tl(t,o);s.push(this.wt(e,a))})),P.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach((o=>s.add(Je(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Yi(e).Y(xl,a))})),P.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Qt(),i=Je(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Yi(e).j(xl,o).next((a=>{for(const l of a){const x=Ol(this.serializer,l);s.set(x.getKey(),x)}return s}))}getOverlaysForCollectionGroup(e,t,r,s){const i=Qt();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Yi(e).X({index:Cf,range:a},((l,x,h)=>{const u=Ol(this.serializer,x);i.size()<s||u.largestBatchId===o?(i.set(u.getKey(),u),o=u.largestBatchId):h.done()})).next((()=>i))}wt(e,t){return Yi(e).put((function(s,i,o){const[a,l,x]=WE(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:x,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Za(s.gt,o.mutation)}})(this.serializer,this.userId,t))}}function Yi(n){return je(n,Na)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class X5{St(e){return je(e,ul)}getSessionToken(e){return this.St(e).get("sessionToken").next((t=>{const r=t?.value;return r?Ve.fromUint8Array(r):Ve.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class yr{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(Fe(e.integerValue));else if("doubleValue"in e){const r=Fe(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),vi(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=sn(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(on(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?Mf(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):qa(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):z(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const r=e.fields||{};this.Ct(t,55);for(const s of Object.keys(r))this.xt(s,t),this.Dt(r[s],t)}Lt(e,t){var r,s;const i=e.fields||{};this.Ct(t,53);const o=us,a=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.Ct(t,15),t.Ft(Fe(a)),this.xt(o,t),this.Dt(i[o],t)}qt(e,t){const r=e.values||[];this.Ct(t,50);for(const s of r)this.Dt(s,t)}Bt(e,t){this.Ct(t,37),q.fromName(e).path.forEach((r=>{this.Ct(t,60),this.$t(r,t)}))}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}yr.Ut=new yr;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=255;function J5(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function QE(n){const e=64-(function(r){let s=0;for(let i=0;i<8;++i){const o=J5(255&r[i]);if(s+=o,o!==8)break}return s})(n);return Math.ceil(e/8)}class Z5{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{const s=t.codePointAt(0);this.Wt(240|s>>>18),this.Wt(128|63&s>>>12),this.Wt(128|63&s>>>6),this.Wt(128|63&s)}}this.Gt()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{const s=t.codePointAt(0);this.jt(240|s>>>18),this.jt(128|63&s>>>12),this.jt(128|63&s>>>6),this.jt(128|63&s)}}this.Jt()}Zt(e){const t=this.Xt(e),r=QE(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}tn(e){const t=this.Xt(e),r=QE(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}nn(){this.rn(vs),this.rn(255)}sn(){this._n(vs),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===vs?(this.rn(vs),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===vs?(this._n(vs),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class ey{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class ty{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class Xi{constructor(){this.un=new Z5,this.cn=new ey(this.un),this.ln=new ty(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class Br{constructor(e,t,r,s){this.Pn=e,this.Tn=t,this.In=r,this.dn=s}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new Br(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:n0(this.In),directionalValue:n0(this.dn),orderedDocumentKey:n0(t),documentKey:r.path.toArray()}}Rn(e,t,r){const s=this.An(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Sn(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=YE(n.In,e.In),t!==0?t:(t=YE(n.dn,e.dn),t!==0?t:q.comparator(n.Tn,e.Tn)))}function YE(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function n0(n){return Rh()?(function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r})(n):n}function XE(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(n)}class JE{constructor(e){this.Vn=new me(((t,r)=>Ie.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(G(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=rl(e);if(t!==void 0&&!this.yn(t))return!1;const r=xr(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.yn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Vn.size>0){const a=this.Vn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=r[i];if(!this.wn(a,l)||!this.Sn(this.mn[o++],l))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.mn.length||!this.Sn(this.mn[o++],a))return!1}return!0}bn(){if(this.gn)return null;let e=new me(Ie.comparator);const t=[];for(const r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new va(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new va(r.field,0))}for(const r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new va(r.field,r.dir==="asc"?0:1)));return new Da(Da.UNKNOWN_ID,this.collectionId,t,yi.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function ZE(n){var e,t;if(G(n instanceof ae||n instanceof ge,20012),n instanceof ae){if(n instanceof Xf){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((i=>ae.create(n.field,"==",i))))||[];return ge.create(s,"or")}return n}const r=n.filters.map((s=>ZE(s)));return ge.create(r,n.op)}function ny(n){if(n.getFilters().length===0)return[];const e=Ll(ZE(n));return G(e9(e),7391),Vl(e)||Ml(e)?[e]:e.getFilters()}function Vl(n){return n instanceof ae}function Ml(n){return n instanceof ge&&Cl(n)}function e9(n){return Vl(n)||Ml(n)||(function(t){if(t instanceof ge&&_l(t)){for(const r of t.getFilters())if(!Vl(r)&&!Ml(r))return!1;return!0}return!1})(n)}function Ll(n){if(G(n instanceof ae||n instanceof ge,34018),n instanceof ae)return n;if(n.filters.length===1)return Ll(n.filters[0]);const e=n.filters.map((r=>Ll(r)));let t=ge.create(e,n.op);return t=r0(t),e9(t)?t:(G(t instanceof ge,64498),G(fs(t),40251),G(t.filters.length>1,57927),t.filters.reduce(((r,s)=>Ul(r,s))))}function Ul(n,e){let t;return G(n instanceof ae||n instanceof ge,38388),G(e instanceof ae||e instanceof ge,25473),t=n instanceof ae?e instanceof ae?(function(s,i){return ge.create([s,i],"and")})(n,e):t9(n,e):e instanceof ae?t9(e,n):(function(s,i){if(G(s.filters.length>0&&i.filters.length>0,48005),fs(s)&&fs(i))return Hf(s,i.getFilters());const o=_l(s)?s:i,a=_l(s)?i:s,l=o.filters.map((x=>Ul(x,a)));return ge.create(l,"or")})(n,e),r0(t)}function t9(n,e){if(fs(e))return Hf(e,n.getFilters());{const t=e.filters.map((r=>Ul(n,r)));return ge.create(t,"or")}}function r0(n){if(G(n instanceof ae||n instanceof ge,11850),n instanceof ae)return n;const e=n.getFilters();if(e.length===1)return r0(e[0]);if(Kf(n))return n;const t=e.map((s=>r0(s))),r=[];return t.forEach((s=>{s instanceof ae?r.push(s):s instanceof ge&&(s.op===n.op?r.push(...s.filters):r.push(s))})),r.length===1?r[0]:ge.create(r,n.op)}/**
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
 */class ry{constructor(){this.Dn=new jl}addToCollectionParentIndex(e,t){return this.Dn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(mt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(mt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class jl{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new me(fe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new me(fe.comparator)).toArray()}}/**
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
 */const n9="IndexedDbIndexManager",s0=new Uint8Array(0);class sy{constructor(e,t){this.databaseId=t,this.vn=new jl,this.Cn=new an((r=>mr(r)),((r,s)=>Mi(r,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const i={collectionId:r,parent:Je(s)};return r9(e).put(i)}return P.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Yd(t),""],!1,!0);return r9(e).j(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Gt(o.parent))}return r}))}addFieldIndex(e,t){const r=Ji(e),s=(function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map((l=>[l.fieldPath.canonicalString(),l.kind]))}})(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=ws(e);return i.next((a=>{o.put(KE(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const r=Ji(e),s=ws(e),i=Fs(e);return r.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Ji(e),r=Fs(e),s=ws(e);return t.Y().next((()=>r.Y())).next((()=>s.Y()))}createTargetIndexes(e,t){return P.forEach(this.Fn(t),(r=>this.getIndexType(e,r).next((s=>{if(s===0||s===1){const i=new JE(r).bn();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const r=Fs(e);let s=!0;const i=new Map;return P.forEach(this.Fn(t),(o=>this.Mn(e,o).next((a=>{s&&(s=!!a),i.set(o,a)})))).next((()=>{if(s){let o=ee();const a=[];return P.forEach(i,((l,x)=>{M(n9,`Using index ${(function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map((I=>`${I.fieldPath}:${I.kind}`)).join(",")}`})(l)} to execute ${mr(t)}`);const h=(function(T,I){const b=rl(I);if(b===void 0)return null;for(const k of $a(T,b.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null})(x,l),u=(function(T,I){const b=new Map;for(const k of xr(I))for(const g of $a(T,k.fieldPath))switch(g.op){case"==":case"in":b.set(k.fieldPath.canonicalString(),g.value);break;case"not-in":case"!=":return b.set(k.fieldPath.canonicalString(),g.value),Array.from(b.values())}return null})(x,l),f=(function(T,I){const b=[];let k=!0;for(const g of xr(I)){const m=g.kind===0?Jf(T,g.fieldPath,T.startAt):Zf(T,g.fieldPath,T.startAt);b.push(m.value),k&&(k=m.inclusive)}return new ds(b,k)})(x,l),p=(function(T,I){const b=[];let k=!0;for(const g of xr(I)){const m=g.kind===0?Zf(T,g.fieldPath,T.endAt):Jf(T,g.fieldPath,T.endAt);b.push(m.value),k&&(k=m.inclusive)}return new ds(b,k)})(x,l),A=this.xn(l,x,f),w=this.xn(l,x,p),v=this.On(l,x,u),R=this.Nn(l.indexId,h,A,f.inclusive,w,p.inclusive,v);return P.forEach(R,(V=>r.H(V,t.limit).next((T=>{T.forEach((I=>{const b=q.fromSegments(I.documentKey);o.has(b)||(o=o.add(b),a.push(b))}))}))))})).next((()=>a))}return P.resolve(null)}))}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=ny(ge.create(e.filters,"and")).map((r=>yl(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Cn.set(e,t),t)}Nn(e,t,r,s,i,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),x=l/(t!=null?t.length:1),h=[];for(let u=0;u<l;++u){const f=t?this.Bn(t[u/x]):s0,p=this.Ln(e,f,r[u%x],s),A=this.kn(e,f,i[u%x],o),w=a.map((v=>this.Ln(e,f,v,!0)));h.push(...this.createRange(p,A,w))}return h}Ln(e,t,r,s){const i=new Br(e,q.empty(),t,r);return s?i:i.En()}kn(e,t,r,s){const i=new Br(e,q.empty(),t,r);return s?i.En():i}Mn(e,t){const r=new JE(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const a of i)r.pn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o}))}getIndexType(e,t){let r=2;const s=this.Fn(t);return P.forEach(s,(i=>this.Mn(e,i).next((o=>{o?r!==0&&o.fields.length<(function(l){let x=new me(Ie.comparator),h=!1;for(const u of l.filters)for(const f of u.getFlattenedFilters())f.field.isKeyField()||(f.op==="array-contains"||f.op==="array-contains-any"?h=!0:x=x.add(f.field));for(const u of l.orderBy)u.field.isKeyField()||(x=x.add(u.field));return x.size+(h?1:0)})(i)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&r===2?1:r))}qn(e,t){const r=new Xi;for(const s of xr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.hn(s.kind);yr.Ut.bt(i,o)}return r.an()}Bn(e){const t=new Xi;return yr.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const r=new Xi;return yr.Ut.bt(Ri(this.databaseId,t),r.hn((function(i){const o=xr(i);return o.length===0?0:o[o.length-1].kind})(e))),r.an()}On(e,t,r){if(r===null)return[];let s=[];s.push(new Xi);let i=0;for(const o of xr(e)){const a=r[i++];for(const l of s)if(this.$n(t,o.fieldPath)&&Ni(a))s=this.Un(s,o,a);else{const x=l.hn(o.kind);yr.Ut.bt(a,x)}}return this.Kn(s)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const l=new Xi;l.seed(a.an()),yr.Ut.bt(o,l.hn(t.kind)),i.push(l)}return i}$n(e,t){return!!e.filters.find((r=>r instanceof ae&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=Ji(e),s=ws(e);return(t?r.j(ll,IDBKeyRange.bound(t,t)):r.j()).next((i=>{const o=[];return P.forEach(i,(a=>s.get([a.indexId,this.uid]).next((l=>{o.push((function(h,u){const f=u?new yi(u.sequenceNumber,new mt(Cr(u.readTime),new q(Gt(u.documentKey)),u.largestBatchId)):yi.empty(),p=h.fields.map((([A,w])=>new va(Ie.fromServerFormat(A),w)));return new Da(h.indexId,h.collectionGroup,p,f)})(a,l))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:J(r.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const s=Ji(e),i=ws(e);return this.Wn(e).next((o=>s.j(ll,IDBKeyRange.bound(t,t)).next((a=>P.forEach(a,(l=>i.put(KE(l.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return P.forEach(t,((s,i)=>{const o=r.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((a=>(r.set(s.collectionGroup,a),P.forEach(a,(l=>this.Gn(e,s,l).next((x=>{const h=this.zn(i,l);return x.isEqual(h)?P.resolve():this.jn(e,i,l,x,h)})))))))}))}Jn(e,t,r,s){return Fs(e).put(s.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,s){return Fs(e).delete(s.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){const s=Fs(e);let i=new me(Sn);return s.X({index:_f,range:IDBKeyRange.only([r.indexId,this.uid,n0(this.Qn(r,t))])},((o,a)=>{i=i.add(new Br(r.indexId,t,XE(a.arrayValue),XE(a.directionalValue)))})).next((()=>i))}zn(e,t){let r=new me(Sn);const s=this.qn(t,e);if(s==null)return r;const i=rl(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ni(o))for(const a of o.arrayValue.values||[])r=r.add(new Br(t.indexId,e.key,this.Bn(a),s))}else r=r.add(new Br(t.indexId,e.key,s0,s));return r}jn(e,t,r,s,i){M(n9,"Updating index entries for document '%s'",t.key);const o=[];return(function(l,x,h,u,f){const p=l.getIterator(),A=x.getIterator();let w=xs(p),v=xs(A);for(;w||v;){let R=!1,V=!1;if(w&&v){const T=h(w,v);T<0?V=!0:T>0&&(R=!0)}else w!=null?V=!0:R=!0;R?(u(v),v=xs(A)):V?(f(w),w=xs(p)):(w=xs(p),v=xs(A))}})(s,i,Sn,(a=>{o.push(this.Jn(e,t,r,a))}),(a=>{o.push(this.Hn(e,t,r,a))})),P.waitFor(o)}Wn(e){let t=1;return ws(e).X({index:gf,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,a)=>Sn(o,a))).filter(((o,a,l)=>!a||Sn(o,l[a-1])!==0));const s=[];s.push(e);for(const o of r){const a=Sn(o,e),l=Sn(o,t);if(a===0)s[0]=e.En();else if(a>0&&l<0)s.push(o),s.push(o.En());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Yn(s[o],s[o+1]))return[];const a=s[o].Rn(this.uid,s0,q.empty()),l=s[o+1].Rn(this.uid,s0,q.empty());i.push(IDBKeyRange.bound(a,l))}return i}Yn(e,t){return Sn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(s9)}getMinOffset(e,t){return P.mapArray(this.Fn(t),(r=>this.Mn(e,r).next((s=>s||z(44426))))).next(s9)}}function r9(n){return je(n,Ti)}function Fs(n){return je(n,ki)}function Ji(n){return je(n,cl)}function ws(n){return je(n,bi)}function s9(n){G(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;sl(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new mt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const i9={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},o9=41943040;class et{static withCacheSize(e){return new et(e,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function a9(n,e,t){const r=n.store(Rt),s=n.store(os),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.X({range:o},((h,u,f)=>(a++,f.delete())));i.push(l.next((()=>{G(a===1,47070,{batchId:t.batchId})})));const x=[];for(const h of t.mutations){const u=Ef(e,h.key.path,t.batchId);i.push(s.delete(u)),x.push(h.key)}return P.waitFor(i).next((()=>x))}function i0(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw z(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */et.DEFAULT_COLLECTION_PERCENTILE=10,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,et.DEFAULT=new et(o9,et.DEFAULT_COLLECTION_PERCENTILE,et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),et.DISABLED=new et(-1,0,0);class o0{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Zn={}}static yt(e,t,r,s){G(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new o0(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Rn(e).X({index:fr,range:r},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,s){const i=Is(e),o=Rn(e);return o.add({}).next((a=>{G(typeof a=="number",49019);const l=new wl(a,t,r,s),x=(function(p,A,w){const v=w.baseMutations.map((V=>Za(p.gt,V))),R=w.mutations.map((V=>Za(p.gt,V)));return{userId:A,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:v,mutations:R}})(this.serializer,this.userId,l),h=[];let u=new me(((f,p)=>J(f.canonicalString(),p.canonicalString())));for(const f of s){const p=Ef(this.userId,f.key.path,a);u=u.add(f.key.path.popLast()),h.push(o.put(x)),h.push(i.put(p,M6))}return u.forEach((f=>{h.push(this.indexManager.addToCollectionParentIndex(e,f))})),e.addOnCommittedListener((()=>{this.Zn[a]=l.keys()})),P.waitFor(h).next((()=>l))}))}lookupMutationBatch(e,t){return Rn(e).get(t).next((r=>r?(G(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Ar(this.serializer,r)):null))}Xn(e,t){return this.Zn[t]?P.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const s=r.keys();return this.Zn[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return Rn(e).X({index:fr,range:s},((o,a,l)=>{a.userId===this.userId&&(G(a.batchId>=r,47524,{er:r}),i=Ar(this.serializer,a)),l.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=hr;return Rn(e).X({index:fr,range:t,reverse:!0},((s,i,o)=>{r=i.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,hr],[this.userId,Number.POSITIVE_INFINITY]);return Rn(e).j(fr,t).next((r=>r.map((s=>Ar(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ta(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Is(e).X({range:s},((o,a,l)=>{const[x,h,u]=o,f=Gt(h);if(x===this.userId&&t.path.isEqual(f))return Rn(e).get(u).next((p=>{if(!p)throw z(61480,{tr:o,batchId:u});G(p.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:p.userId,batchId:u}),i.push(Ar(this.serializer,p))}));l.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(J);const s=[];return t.forEach((i=>{const o=Ta(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=Is(e).X({range:a},((x,h,u)=>{const[f,p,A]=x,w=Gt(p);f===this.userId&&i.path.isEqual(w)?r=r.add(A):u.done()}));s.push(l)})),P.waitFor(s).next((()=>this.nr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=Ta(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new me(J);return Is(e).X({range:o},((l,x,h)=>{const[u,f,p]=l,A=Gt(f);u===this.userId&&r.isPrefixOf(A)?A.length===s&&(a=a.add(p)):h.done()})).next((()=>this.nr(e,a)))}nr(e,t){const r=[],s=[];return t.forEach((i=>{s.push(Rn(e).get(i).next((o=>{if(o===null)throw z(35274,{batchId:i});G(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(Ar(this.serializer,o))})))})),P.waitFor(s).next((()=>r))}removeMutationBatch(e,t){return a9(e.ce,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.rr(t.batchId)})),P.forEach(r,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return P.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return Is(e).X({range:r},((i,o,a)=>{if(i[0]===this.userId){const l=Gt(i[1]);s.push(l)}else a.done()})).next((()=>{G(s.length===0,56720,{ir:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return c9(e,this.userId,t)}sr(e){return l9(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:hr,lastStreamToken:""}))}}function c9(n,e,t){const r=Ta(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Is(n).X({range:i,Z:!0},((a,l,x)=>{const[h,u,f]=a;h===e&&u===s&&(o=!0),x.done()})).next((()=>o))}function Rn(n){return je(n,Rt)}function Is(n){return je(n,os)}function l9(n){return je(n,wi)}/**
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
 */class Dr{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Dr(0)}static ur(){return new Dr(-1)}}/**
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
 */class iy{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next((t=>{const r=new Dr(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.cr(e).next((t=>Q.fromTimestamp(new pe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.cr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.cr(e).next((s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.lr(e,s))))}addTargetData(e,t){return this.hr(e,t).next((()=>this.cr(e).next((r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Ts(e).delete(t.targetId))).next((()=>this.cr(e))).next((r=>(G(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r))))}removeTargets(e,t,r){let s=0;const i=[];return Ts(e).X(((o,a)=>{const l=Qi(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))})).next((()=>P.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Ts(e).X(((r,s)=>{const i=Qi(s);t(i)}))}cr(e){return x9(e).get(Pa).next((t=>(G(t!==null,2888),t)))}lr(e,t){return x9(e).put(Pa,t)}hr(e,t){return Ts(e).put(zE(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next((t=>t.targetCount))}getTargetData(e,t){const r=mr(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Ts(e).X({range:s,index:mf},((o,a,l)=>{const x=Qi(a);Mi(t,x.target)&&(i=x,l.done())})).next((()=>i))}addMatchingKeys(e,t,r){const s=[],i=Nn(e);return t.forEach((o=>{const a=Je(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))})),P.waitFor(s)}removeMatchingKeys(e,t,r){const s=Nn(e);return P.forEach(t,(i=>{const o=Je(i.path);return P.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])}))}removeMatchingKeysForTargetId(e,t){const r=Nn(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Nn(e);let i=ee();return s.X({range:r,Z:!0},((o,a,l)=>{const x=Gt(o[1]),h=new q(x);i=i.add(h)})).next((()=>i))}containsKey(e,t){const r=Je(t.path),s=IDBKeyRange.bound([r],[Yd(r)],!1,!0);let i=0;return Nn(e).X({index:al,Z:!0,range:s},(([o,a],l,x)=>{o!==0&&(i++,x.done())})).next((()=>i>0))}Et(e,t){return Ts(e).get(t).next((r=>r?Qi(r):null))}}function Ts(n){return je(n,as)}function x9(n){return je(n,Er)}function Nn(n){return je(n,cs)}/**
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
 */const u9="LruGarbageCollector",h9=1048576;function d9([n,e],[t,r]){const s=J(n,t);return s===0?J(e,r):s}class oy{constructor(e){this.Tr=e,this.buffer=new me(d9),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();d9(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class f9{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){M(u9,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wn(t)?M(u9,"Ignoring IndexedDB error during garbage collection: ",t):await vn(t)}await this.Rr(3e5)}))}}class ay{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(ft.ue);const r=new oy(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(i9)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),i9):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,o,a,l,x;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((u=>(u>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${u}`),s=this.params.maximumSequenceNumbersToCollect):s=u,o=Date.now(),this.nthSequenceNumber(e,s)))).next((u=>(r=u,a=Date.now(),this.removeTargets(e,r,t)))).next((u=>(i=u,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((u=>(x=Date.now(),ns()<=se.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${u} documents in `+(x-l)+`ms
Total Duration: ${x-h}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:u}))))}}function E9(n,e){return new ay(n,e)}/**
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
 */class cy{constructor(e,t){this.db=e,this.garbageCollector=E9(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,((r,s)=>t(s)))}addReference(e,t,r){return a0(e,r)}removeReference(e,t,r){return a0(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return a0(e,t)}Sr(e,t){return(function(s,i){let o=!1;return l9(s).ee((a=>c9(s,a,i).next((l=>(l&&(o=!0),P.resolve(!l)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.wr(e,((o,a)=>{if(a<=t){const l=this.Sr(e,o).next((x=>{if(!x)return i++,r.getEntry(e,o).next((()=>(r.removeEntry(o,Q.min()),Nn(e).delete((function(u){return[0,Je(u.path)]})(o)))))}));s.push(l)}})).next((()=>P.waitFor(s))).next((()=>r.apply(e))).next((()=>i))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return a0(e,t)}wr(e,t){const r=Nn(e);let s,i=ft.ue;return r.X({index:al},(([o,a],{path:l,sequenceNumber:x})=>{o===0?(i!==ft.ue&&t(new q(Gt(s)),i),i=x,s=l):i=ft.ue})).next((()=>{i!==ft.ue&&t(new q(Gt(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function a0(n,e){return Nn(n).put((function(r,s){return{targetId:0,path:Je(r.path),sequenceNumber:s}})(e,n.currentSequenceNumber))}/**
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
 */class p9{constructor(){this.changes=new an((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ly{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return vr(e).put(r)}removeEntry(e,t,r){return vr(e).delete((function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],e0(o),a[a.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.br(e,r))))}getEntry(e,t){let r=Pe.newInvalidDocument(t);return vr(e).X({index:ka,range:IDBKeyRange.only(Zi(t))},((s,i)=>{r=this.Dr(t,i)})).next((()=>r))}vr(e,t){let r={size:0,document:Pe.newInvalidDocument(t)};return vr(e).X({index:ka,range:IDBKeyRange.only(Zi(t))},((s,i)=>{r={document:this.Dr(t,i),size:i0(i)}})).next((()=>r))}getEntries(e,t){let r=Ct();return this.Cr(e,t,((s,i)=>{const o=this.Dr(s,i);r=r.insert(s,o)})).next((()=>r))}Fr(e,t){let r=Ct(),s=new Te(q.comparator);return this.Cr(e,t,((i,o)=>{const a=this.Dr(i,o);r=r.insert(i,a),s=s.insert(i,i0(o))})).next((()=>({documents:r,Mr:s})))}Cr(e,t,r){if(t.isEmpty())return P.resolve();let s=new me(C9);t.forEach((l=>s=s.add(l)));const i=IDBKeyRange.bound(Zi(s.first()),Zi(s.last())),o=s.getIterator();let a=o.getNext();return vr(e).X({index:ka,range:i},((l,x,h)=>{const u=q.fromSegments([...x.prefixPath,x.collectionGroup,x.documentId]);for(;a&&C9(a,u)<0;)r(a,null),a=o.getNext();a&&a.isEqual(u)&&(r(a,x),a=o.hasNext()?o.getNext():null),a?h.G(Zi(a)):h.done()})).next((()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),e0(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return vr(e).j(IDBKeyRange.bound(a,l,!0)).next((x=>{i?.incrementDocumentReadCount(x.length);let h=Ct();for(const u of x){const f=this.Dr(q.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);f.isFoundDocument()&&(ji(t,f)||s.has(f.key))&&(h=h.insert(f.key,f))}return h}))}getAllFromCollectionGroup(e,t,r,s){let i=Ct();const o=_9(t,r),a=_9(t,mt.max());return vr(e).X({index:pf,range:IDBKeyRange.bound(o,a,!0)},((l,x,h)=>{const u=this.Dr(q.fromSegments(x.prefixPath.concat(x.collectionGroup,x.documentId)),x);i=i.insert(u.key,u),i.size===s&&h.done()})).next((()=>i))}newChangeBuffer(e){return new xy(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return g9(e).get(ol).next((t=>(G(!!t,20021),t)))}br(e,t){return g9(e).put(ol,t)}Dr(e,t){if(t){const r=Q5(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return Pe.newInvalidDocument(e)}}function m9(n){return new ly(n)}class xy extends p9{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new an((r=>r.toString()),((r,s)=>r.isEqual(s)))}applyChanges(e){const t=[];let r=0,s=new me(((i,o)=>J(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const a=this.Nr.get(i);if(t.push(this.Or.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=qE(this.Or.serializer,o);s=s.add(i.path.popLast());const x=i0(l);r+=x-a.size,t.push(this.Or.addEntry(e,i,l))}else if(r-=a.size,this.trackRemovals){const l=qE(this.Or.serializer,o.convertToNoDocument(Q.min()));t.push(this.Or.addEntry(e,i,l))}})),s.forEach((i=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.Or.updateMetadata(e,r)),P.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next((r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Or.Fr(e,t).next((({documents:r,Mr:s})=>(s.forEach(((i,o)=>{this.Nr.set(i,{size:o,readTime:r.get(i).readTime})})),r)))}}function g9(n){return je(n,Ii)}function vr(n){return je(n,ba)}function Zi(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function _9(n,e){const t=e.documentKey.path.toArray();return[n,e0(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function C9(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=J(t[i],r[i]),s)return s;return s=J(t.length,r.length),s||(s=J(t[t.length-2],r[r.length-2]),s||J(t[t.length-1],r[r.length-1]))}/**
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
 *//**
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
 */class uy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class A9{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&$i(r.mutation,s,Et.empty(),pe.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ee()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ee()){const s=Qt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let o=qi();return i.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Qt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ee())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,r,s){let i=Ct();const o=zi(),a=(function(){return zi()})();return t.forEach(((l,x)=>{const h=r.get(x.key);s.has(x.key)&&(h===void 0||h.mutation instanceof cn)?i=i.insert(x.key,x):h!==void 0?(o.set(x.key,h.mutation.getFieldMask()),$i(h.mutation,x,h.mutation.getFieldMask(),pe.now())):o.set(x.key,Et.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((x,h)=>o.set(x,h))),t.forEach(((x,h)=>{var u;return a.set(x,new uy(h,(u=o.get(x))!==null&&u!==void 0?u:null))})),a)))}recalculateAndSaveOverlays(e,t){const r=zi();let s=new Te(((o,a)=>o-a)),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const x=t.get(l);if(x===null)return;let h=r.get(l)||Et.empty();h=a.applyToLocalView(x,h),r.set(l,h);const u=(s.get(a.batchId)||ee()).add(l);s=s.insert(a.batchId,u)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),x=l.key,h=l.value,u=cE();h.forEach((f=>{if(!i.has(f)){const p=pE(t.get(f),r.get(f));p!==null&&u.set(f,p),i=i.add(f)}})),o.push(this.documentOverlayCache.saveOverlays(e,x,u))}return P.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(Qt());let a=ss,l=i;return o.next((x=>P.forEach(x,((h,u)=>(a<u.largestBatchId&&(a=u.largestBatchId),i.get(h)?P.resolve():this.remoteDocumentCache.getEntry(e,h).next((f=>{l=l.insert(h,f)}))))).next((()=>this.populateOverlays(e,x,i))).next((()=>this.computeViews(e,l,x,ee()))).next((h=>({batchId:a,changes:aE(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next((r=>{let s=qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=qi();return this.indexManager.getCollectionParents(e,i).next((a=>P.forEach(a,(l=>{const x=(function(u,f){return new Es(f,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,x,r,s).next((h=>{h.forEach(((u,f)=>{o=o.insert(u,f)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((o=>{i.forEach(((l,x)=>{const h=x.getKey();o.get(h)===null&&(o=o.insert(h,Pe.newInvalidDocument(h)))}));let a=qi();return o.forEach(((l,x)=>{const h=i.get(l);h!==void 0&&$i(h.mutation,x,Et.empty(),pe.now()),ji(t,x)&&(a=a.insert(l,x))})),a}))}}/**
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
 */class hy{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return P.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:at(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:$E(s.bundledQuery),readTime:at(s.readTime)}})(t)),P.resolve()}}/**
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
 */class dy{constructor(){this.overlays=new Te(q.comparator),this.kr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Qt();return P.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=Qt(),i=t.length+1,o=new q(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,x=l.getKey();if(!t.isPrefixOf(x.path))break;x.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Te(((x,h)=>x-h));const o=this.overlays.getIterator();for(;o.hasNext();){const x=o.getNext().value;if(x.getKey().getCollectionGroup()===t&&x.largestBatchId>r){let h=i.get(x.largestBatchId);h===null&&(h=Qt(),i=i.insert(x.largestBatchId,h)),h.set(x.getKey(),x)}}const a=Qt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((x,h)=>a.set(x,h))),!(a.size()>=s)););return P.resolve(a)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Tl(t,r));let i=this.kr.get(t);i===void 0&&(i=ee(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class fy{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class ql{constructor(){this.qr=new me(ze.Qr),this.$r=new me(ze.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new ze(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new ze(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new q(new fe([])),r=new ze(t,e),s=new ze(t,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new q(new fe([])),r=new ze(t,e),s=new ze(t,e+1);let i=ee();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ze(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return q.comparator(e.key,t.key)||J(e.Hr,t.Hr)}static Ur(e,t){return J(e.Hr,t.Hr)||q.comparator(e.key,t.key)}}/**
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
 */class Ey{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new me(ze.Qr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wl(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?hr:this.er-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ze(t,0),s=new ze(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const a=this.Zr(o.Hr);i.push(a)})),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new me(J);return t.forEach((s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(a=>{r=r.add(a.Hr)}))})),P.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new ze(new q(i),0);let a=new me(J);return this.Yr.forEachWhile((l=>{const x=l.key.path;return!!r.isPrefixOf(x)&&(x.length===s&&(a=a.add(l.Hr)),!0)}),o),P.resolve(this.ei(a))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){G(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return P.forEach(t.mutations,(s=>{const i=new ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new ze(t,0),s=this.Yr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class py{constructor(e){this.ni=e,this.docs=(function(){return new Te(q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let r=Ct();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Pe.newInvalidDocument(s))})),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ct();const o=t.path,a=new q(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:x,value:{document:h}}=l.getNext();if(!o.isPrefixOf(x.path))break;x.path.length>o.length+1||sl(of(h),r)<=0||(s.has(h.key)||ji(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){z(9500)}ri(e,t){return P.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new my(this)}getSize(e){return P.resolve(this.size)}}class my extends p9{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),P.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class gy{constructor(e){this.persistence=e,this.ii=new an((t=>mr(t)),Mi),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.si=0,this.oi=new ql,this.targetCount=0,this._i=Dr.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),P.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Dr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.hr(t),P.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),P.waitFor(i).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.oi.containsKey(t))}}/**
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
 */class zl{constructor(e,t){this.ai={},this.overlays={},this.ui=new ft(0),this.ci=!1,this.ci=!0,this.li=new fy,this.referenceDelegate=e(this),this.hi=new gy(this),this.indexManager=new ry,this.remoteDocumentCache=(function(s){return new py(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new jE(t),this.Ti=new hy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new dy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Ey(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new _y(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return P.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class _y extends cf{constructor(e){super(),this.currentSequenceNumber=e}}class c0{constructor(e){this.persistence=e,this.Ai=new ql,this.Ri=null}static Vi(e){return new c0(e)}get mi(){if(this.Ri)return this.Ri;throw z(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,(r=>{const s=q.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,Q.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return P.or([()=>P.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class l0{constructor(e,t){this.persistence=e,this.gi=new an((r=>Je(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=E9(this,t)}static Vi(e,t){return new l0(e,t)}Ii(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return P.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?P.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,t).next((a=>{a||(r++,i.removeEntry(o,Q.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ua(e.data.value)),t}Sr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Cy{constructor(e){this.serializer=e}q(e,t,r,s){const i=new Fa("createOrUpgrade",t);r<1&&s>=1&&((function(l){l.createObjectStore(Fi)})(e),(function(l){l.createObjectStore(wi,{keyPath:V6}),l.createObjectStore(Rt,{keyPath:df,autoIncrement:!0}).createIndex(fr,ff,{unique:!0}),l.createObjectStore(os)})(e),y9(e),(function(l){l.createObjectStore(dr)})(e));let o=P.resolve();return r<3&&s>=3&&(r!==0&&((function(l){l.deleteObjectStore(cs),l.deleteObjectStore(as),l.deleteObjectStore(Er)})(e),y9(e)),o=o.next((()=>(function(l){const x=l.store(Er),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return x.put(Pa,h)})(i)))),r<4&&s>=4&&(r!==0&&(o=o.next((()=>(function(l,x){return x.store(Rt).j().next((u=>{l.deleteObjectStore(Rt),l.createObjectStore(Rt,{keyPath:df,autoIncrement:!0}).createIndex(fr,ff,{unique:!0});const f=x.store(Rt),p=u.map((A=>f.put(A)));return P.waitFor(p)}))})(e,i)))),o=o.next((()=>{(function(l){l.createObjectStore(ls,{keyPath:K6})})(e)}))),r<5&&s>=5&&(o=o.next((()=>this.pi(i)))),r<6&&s>=6&&(o=o.next((()=>((function(l){l.createObjectStore(Ii)})(e),this.yi(i))))),r<7&&s>=7&&(o=o.next((()=>this.wi(i)))),r<8&&s>=8&&(o=o.next((()=>this.Si(e,i)))),r<9&&s>=9&&(o=o.next((()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&s>=10&&(o=o.next((()=>this.bi(i)))),r<11&&s>=11&&(o=o.next((()=>{(function(l){l.createObjectStore(Sa,{keyPath:G6})})(e),(function(l){l.createObjectStore(Ra,{keyPath:H6})})(e)}))),r<12&&s>=12&&(o=o.next((()=>{(function(l){const x=l.createObjectStore(Na,{keyPath:t5});x.createIndex(xl,n5,{unique:!1}),x.createIndex(Cf,r5,{unique:!1})})(e)}))),r<13&&s>=13&&(o=o.next((()=>(function(l){const x=l.createObjectStore(ba,{keyPath:L6});x.createIndex(ka,U6),x.createIndex(pf,j6)})(e))).next((()=>this.Di(e,i))).next((()=>e.deleteObjectStore(dr)))),r<14&&s>=14&&(o=o.next((()=>this.Ci(e,i)))),r<15&&s>=15&&(o=o.next((()=>(function(l){l.createObjectStore(cl,{keyPath:Q6,autoIncrement:!0}).createIndex(ll,Y6,{unique:!1}),l.createObjectStore(bi,{keyPath:X6}).createIndex(gf,J6,{unique:!1}),l.createObjectStore(ki,{keyPath:Z6}).createIndex(_f,e5,{unique:!1})})(e)))),r<16&&s>=16&&(o=o.next((()=>{t.objectStore(bi).clear()})).next((()=>{t.objectStore(ki).clear()}))),r<17&&s>=17&&(o=o.next((()=>{(function(l){l.createObjectStore(ul,{keyPath:s5})})(e)}))),r<18&&s>=18&&Rh()&&(o=o.next((()=>{t.objectStore(bi).clear()})).next((()=>{t.objectStore(ki).clear()}))),o}yi(e){let t=0;return e.store(dr).X(((r,s)=>{t+=i0(s)})).next((()=>{const r={byteSize:t};return e.store(Ii).put(ol,r)}))}pi(e){const t=e.store(wi),r=e.store(Rt);return t.j().next((s=>P.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,hr],[i.userId,i.lastAcknowledgedBatchId]);return r.j(fr,o).next((a=>P.forEach(a,(l=>{G(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const x=Ar(this.serializer,l);return a9(e,i.userId,x).next((()=>{}))}))))}))))}wi(e){const t=e.store(cs),r=e.store(dr);return e.store(Er).get(Pa).next((s=>{const i=[];return r.X(((o,a)=>{const l=new fe(o),x=(function(u){return[0,Je(u)]})(l);i.push(t.get(x).next((h=>h?P.resolve():(u=>t.put({targetId:0,path:Je(u),sequenceNumber:s.highestListenSequenceNumber}))(l))))})).next((()=>P.waitFor(i)))}))}Si(e,t){e.createObjectStore(Ti,{keyPath:W6});const r=t.store(Ti),s=new jl,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Je(l)})}};return t.store(dr).X({Z:!0},((o,a)=>{const l=new fe(o);return i(l.popLast())})).next((()=>t.store(os).X({Z:!0},(([o,a,l],x)=>{const h=Gt(a);return i(h.popLast())}))))}bi(e){const t=e.store(as);return t.X(((r,s)=>{const i=Qi(s),o=zE(this.serializer,i);return t.put(o)}))}Di(e,t){const r=t.store(dr),s=[];return r.X(((i,o)=>{const a=t.store(ba),l=(function(u){return u.document?new q(fe.fromString(u.document.name).popFirst(5)):u.noDocument?q.fromSegments(u.noDocument.path):u.unknownDocument?q.fromSegments(u.unknownDocument.path):z(36783)})(o).path.toArray(),x={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(x))})).next((()=>P.waitFor(s)))}Ci(e,t){const r=t.store(Rt),s=m9(this.serializer),i=new zl(c0.Vi,this.serializer.gt);return r.j().next((o=>{const a=new Map;return o.forEach((l=>{var x;let h=(x=a.get(l.userId))!==null&&x!==void 0?x:ee();Ar(this.serializer,l).keys().forEach((u=>h=h.add(u))),a.set(l.userId,h)})),P.forEach(a,((l,x)=>{const h=new Xe(x),u=t0.yt(this.serializer,h),f=i.getIndexManager(h),p=o0.yt(h,this.serializer,f,i.referenceDelegate);return new A9(s,p,u,f).recalculateAndSaveOverlaysForDocumentKeys(new dl(t,ft.ue),l).next()}))}))}}function y9(n){n.createObjectStore(cs,{keyPath:z6}).createIndex(al,$6,{unique:!0}),n.createObjectStore(as,{keyPath:"targetId"}).createIndex(mf,q6,{unique:!0}),n.createObjectStore(Er)}const On="IndexedDbPersistence",$l=18e5,Wl=5e3,Kl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Ay="main";class Gl{constructor(e,t,r,s,i,o,a,l,x,h,u=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=i,this.window=o,this.document=a,this.Mi=x,this.xi=h,this.Oi=u,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=f=>Promise.resolve(),!Gl.C())throw new L(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new cy(this,s),this.Qi=t+Ay,this.serializer=new jE(l),this.$i=new Fn(this.Qi,this.Oi,new Cy(this.serializer)),this.li=new X5,this.hi=new iy(this.referenceDelegate,this.serializer),this.remoteDocumentCache=m9(this.serializer),this.Ti=new Y5,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,h===!1&&Oe(On,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new L(O.FAILED_PRECONDITION,Kl);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.hi.getHighestSequenceNumber(e)))})).then((e=>{this.ui=new ft(e,this.Mi)})).then((()=>{this.ci=!0})).catch((e=>(this.$i&&this.$i.close(),Promise.reject(e))))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget((async()=>{this.started&&await this.Ki()})))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>x0(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Ji(e).next((t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))))}))})).next((()=>this.Hi(e))).next((t=>this.isPrimary&&!t?this.Yi(e).next((()=>!1)):!!t&&this.Zi(e).next((()=>!0)))))).catch((e=>{if(wn(e))return M(On,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return M(On,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable((()=>this.qi(e))),this.isPrimary=e}))}Ji(e){return eo(e).get(is).next((t=>P.resolve(this.Xi(t))))}es(e){return x0(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,$l)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=je(t,ls);return r.j().next((s=>{const i=this.rs(s,$l),o=s.filter((a=>i.indexOf(a)===-1));return P.forEach(o,(a=>r.delete(a.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ki().then((()=>this.ts())).then((()=>this.zi()))))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?P.resolve(!0):eo(e).get(is).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Wl)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new L(O.FAILED_PRECONDITION,Kl);return!1}}return!(!this.networkEnabled||!this.inForeground)||x0(e).j().next((r=>this.rs(r,Wl).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&M(On,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[Fi,ls],(e=>{const t=new dl(e,ft.ue);return this.Yi(t).next((()=>this.es(t)))})),this.$i.close(),this.hs()}rs(e,t){return e.filter((r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId)))}Ps(){return this.runTransaction("getActiveClients","readonly",(e=>x0(e).j().next((t=>this.rs(t,$l).map((r=>r.clientId))))))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return o0.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sy(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return t0.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){M(On,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(l){return l===18?a5:l===17?Df:l===16?o5:l===15?hl:l===14?Bf:l===13?yf:l===12?i5:l===11?Af:void z(60245)})(this.Oi);let o;return this.$i.runTransaction(e,s,i,(a=>(o=new dl(a,this.ui?this.ui.next():ft.ue),t==="readwrite-primary"?this.Ji(o).next((l=>!!l||this.Hi(o))).next((l=>{if(!l)throw Oe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable((()=>this.qi(!1))),new L(O.FAILED_PRECONDITION,af);return r(o)})).next((l=>this.Zi(o).next((()=>l)))):this.Ts(o).next((()=>r(o)))))).then((a=>(o.raiseOnCommittedEvent(),a)))}Ts(e){return eo(e).get(is).next((t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Wl)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new L(O.FAILED_PRECONDITION,Kl)}))}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return eo(e).put(is,t)}static C(){return Fn.C()}Yi(e){const t=eo(e);return t.get(is).next((r=>this.Xi(r)?(M(On,"Releasing primary lease."),t.delete(is)):P.resolve()))}ns(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Oe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki())))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;Sh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return M(On,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Oe(On,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){Oe("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function eo(n){return je(n,Fi)}function x0(n){return je(n,ls)}function B9(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Hl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ee(),s=ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hl(e,t.fromCache,r,s)}}/**
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
 */class yy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class D9{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Sh()?8:lf(Qe())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new yy;return this.ws(e,t,o).next((a=>{if(i.result=a,this.Rs)return this.Ss(e,t,o,a.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(ns()<=se.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",ps(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(ns()<=se.DEBUG&&M("QueryEngine","Query:",ps(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(ns()<=se.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",ps(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):P.resolve())}ps(e,t){if(tE(t))return P.resolve(null);let r=_t(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Wa(t,null,"F"),r=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ee(...i);return this.gs.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,r).next((l=>{const x=this.bs(t,a);return this.Ds(t,x,o,l.readTime)?this.ps(e,Wa(t,null,"F")):this.vs(e,x,t,l)}))))})))))}ys(e,t,r,s){return tE(t)||s.isEqual(Q.min())?P.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(t,i);return this.Ds(t,o,r,s)?P.resolve(null):(ns()<=se.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ps(t)),this.vs(e,o,t,sf(s,ss)).next((a=>a)))}))}bs(e,t){let r=new me(iE(e));return t.forEach(((s,i)=>{ji(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return ns()<=se.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",ps(t)),this.gs.getDocumentsMatchingQuery(e,t,mt.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const Ql="LocalStore",By=3e8;class Dy{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Te(J),this.Ms=new an((i=>mr(i)),Mi),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new A9(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function v9(n,e,t,r){return new Dy(n,e,t,r)}async function F9(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],a=[];let l=ee();for(const x of s){o.push(x.batchId);for(const h of x.mutations)l=l.add(h.key)}for(const x of i){a.push(x.batchId);for(const h of x.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next((x=>({Bs:x,removedBatchIds:o,addedBatchIds:a})))}))}))}function vy(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(a,l,x,h){const u=x.batch,f=u.keys();let p=P.resolve();return f.forEach((A=>{p=p.next((()=>h.getEntry(l,A))).next((w=>{const v=x.docVersions.get(A);G(v!==null,48541),w.version.compareTo(v)<0&&(u.applyToRemoteDocument(w,x),w.isValidDocument()&&(w.setReadTime(x.commitVersion),h.addEntry(w)))}))})),p.next((()=>a.mutationQueue.removeMutationBatch(l,u)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(a){let l=ee();for(let x=0;x<a.mutationResults.length;++x)a.mutationResults[x].transformResults.length>0&&(l=l.add(a.batch.mutations[x].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function w9(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Fy(n,e){const t=W(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const a=[];e.targetChanges.forEach(((h,u)=>{const f=s.get(u);if(!f)return;a.push(t.hi.removeMatchingKeys(i,h.removedDocuments,u).next((()=>t.hi.addMatchingKeys(i,h.addedDocuments,u))));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(u)!==null?p=p.withResumeToken(Ve.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,r)),s=s.insert(u,p),(function(w,v,R){return w.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=By?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0})(f,p,h)&&a.push(t.hi.updateTargetData(i,p))}));let l=Ct(),x=ee();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(wy(i,o,e.documentUpdates).next((h=>{l=h.Ls,x=h.ks}))),!r.isEqual(Q.min())){const h=t.hi.getLastRemoteSnapshotVersion(i).next((u=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));a.push(h)}return P.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,x))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function wy(n,e,t){let r=ee(),s=ee();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let o=Ct();return t.forEach(((a,l)=>{const x=i.get(a);l.isFoundDocument()!==x.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!x.isValidDocument()||l.version.compareTo(x.version)>0||l.version.compareTo(x.version)===0&&x.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):M(Ql,"Ignoring outdated watch update for ",a,". Current version:",x.version," Watch version:",l.version)})),{Ls:o,ks:s}}))}function Iy(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=hr),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function u0(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,P.resolve(s)):t.hi.allocateTargetId(r).next((o=>(s=new ln(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function bs(n,e,t){const r=W(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!wn(o))throw o;M(Ql,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Yl(n,e,t){const r=W(n);let s=Q.min(),i=ee();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,x,h){const u=W(l),f=u.Ms.get(h);return f!==void 0?P.resolve(u.Fs.get(f)):u.hi.getTargetData(x,h)})(r,o,_t(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,a.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?i:ee()))).next((a=>(b9(r,sE(e),a),{documents:a,qs:i})))))}function I9(n,e){const t=W(n),r=W(t.hi),s=t.Fs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",(i=>r.Et(i,e).next((o=>o?o.target:null))))}function T9(n,e){const t=W(n),r=t.xs.get(e)||Q.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.Os.getAllFromCollectionGroup(s,e,sf(r,ss),Number.MAX_SAFE_INTEGER))).then((s=>(b9(t,e,s),s)))}function b9(n,e,t){let r=n.xs.get(e)||Q.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}/**
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
 */const k9="firestore_clients";function P9(n,e){return`${k9}_${n}_${e}`}const S9="firestore_mutations";function R9(n,e,t){let r=`${S9}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const N9="firestore_targets";function Xl(n,e){return`${N9}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Yt="SharedClientState";class h0{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Ks(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new L(s.error.code,s.error.message))),o?new h0(e,t,s.state,i):(Oe(Yt,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class to{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ks(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new L(r.error.code,r.error.message))),i?new to(e,r.state,s):(Oe(Yt,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class d0{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Dl();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=uf(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new d0(e,i):(Oe(Yt,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Jl{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Jl(t.clientId,t.onlineState):(Oe(Yt,`Failed to parse online state: ${e}`),null)}}class Zl{constructor(){this.activeTargetIds=Dl()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ex{constructor(e,t,r,s,i){this.window=e,this.Fi=t,this.persistenceKey=r,this.js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new Te(J),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=P9(this.persistenceKey,this.js),this.eo=(function(l){return`firestore_sequence_number_${l}`})(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new Zl),this.no=new RegExp(`^${k9}_${o}_([^_]*)$`),this.ro=new RegExp(`^${S9}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${N9}_${o}_(\\d+)$`),this.so=(function(l){return`firestore_online_state_${l}`})(this.persistenceKey),this.oo=(function(l){return`firestore_bundle_loaded_v2_${l}`})(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const r of e){if(r===this.js)continue;const s=this.getItem(P9(this.persistenceKey,r));if(s){const i=d0.Ks(r,s);i&&(this.Ys=this.Ys.insert(i.clientId,i))}}this._o();const t=this.storage.getItem(this.so);if(t){const r=this.ao(t);r&&this.uo(r)}for(const r of this.Zs)this.Hs(r);this.Zs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach(((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,r){this.lo(e,t,r),this.ho(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Xl(this.persistenceKey,e));if(s){const i=to.Ks(e,s);i&&(r=i.state)}}return t&&this.Po.Gs(e),this._o(),r}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Xl(this.persistenceKey,e))}updateQueryState(e,t,r){this.To(e,t,r)}handleUserChange(e,t,r){t.forEach((s=>{this.ho(s)})),this.currentUser=e,r.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return M(Yt,"READ",e,t),t}setItem(e,t){M(Yt,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){M(Yt,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(M(Yt,"EVENT",t.key,t.newValue),t.key===this.Xs)return void Oe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){const r=this.Ao(t.key);return this.Ro(r,null)}{const r=this.Vo(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.mo(t.key,t.newValue);if(r)return this.fo(r)}}else if(this.io.test(t.key)){if(t.newValue!==null){const r=this.po(t.key,t.newValue);if(r)return this.yo(r)}}else if(t.key===this.so){if(t.newValue!==null){const r=this.ao(t.newValue);if(r)return this.uo(r)}}else if(t.key===this.eo){const r=(function(i){let o=ft.ue;if(i!=null)try{const a=JSON.parse(i);G(typeof a=="number",30636,{wo:i}),o=a}catch(a){Oe(Yt,"Failed to read sequence number from WebStorage",a)}return o})(t.newValue);r!==ft.ue&&this.sequenceNumberHandler(r)}else if(t.key===this.oo){const r=this.So(t.newValue);await Promise.all(r.map((s=>this.syncEngine.bo(s))))}}}else this.Zs.push(t)}))}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,r){const s=new h0(this.currentUser,e,t,r),i=R9(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ws())}ho(e){const t=R9(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,r){const s=Xl(this.persistenceKey,e),i=new to(e,t,r);this.setItem(s,i.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const r=this.Ao(e);return d0.Ks(r,t)}mo(e,t){const r=this.ro.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return h0.Ks(new Xe(i),s,t)}po(e,t){const r=this.io.exec(e),s=Number(r[1]);return to.Ks(s,t)}ao(e){return Jl.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);M(Yt,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Ys.insert(e,t):this.Ys.remove(e),s=this.co(this.Ys),i=this.co(r),o=[],a=[];return i.forEach((l=>{s.has(l)||o.push(l)})),s.forEach((l=>{i.has(l)||a.push(l)})),this.syncEngine.Co(o,a).then((()=>{this.Ys=r}))}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=Dl();return e.forEach(((r,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class O9{constructor(){this.Fo=new Zl,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Zl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ty{xo(e){}shutdown(){}}/**
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
 */const V9="ConnectivityMonitor";class M9{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){M(V9,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){M(V9,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let f0=null;function tx(){return f0===null?f0=(function(){return 268435456+Math.round(2147483648*Math.random())})():f0++,"0x"+f0.toString(16)}/**
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
 */const nx="RestConnection",by={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ky{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ma?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=tx(),a=this.Go(e,t.toUriEncodedString());M(nx,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:x}=new URL(a),h=tr(x);return this.jo(e,a,l,r,h).then((u=>(M(nx,`Received RPC '${e}' ${o}: `,u),u)),(u=>{throw Dn(nx,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u}))}Jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ts})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=by[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Py{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const tt="WebChannelConnection";class Sy extends ky{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const o=tx();return new Promise(((a,l)=>{const x=new Ld;x.setWithCredentials(!0),x.listenOnce(Ud.COMPLETE,(()=>{try{switch(x.getLastErrorCode()){case ya.NO_ERROR:const u=x.getResponseJson();M(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(u)),a(u);break;case ya.TIMEOUT:M(tt,`RPC '${e}' ${o} timed out`),l(new L(O.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const f=x.getStatus();if(M(tt,`RPC '${e}' ${o} failed with status:`,f,"response text:",x.getResponseText()),f>0){let p=x.getResponseJson();Array.isArray(p)&&(p=p[0]);const A=p?.error;if(A&&A.status&&A.message){const w=(function(R){const V=R.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(V)>=0?V:O.UNKNOWN})(A.status);l(new L(w,A.message))}else l(new L(O.UNKNOWN,"Server responded with status "+x.getStatus()))}else l(new L(O.UNAVAILABLE,"Connection failed."));break;default:z(9055,{c_:e,streamId:o,l_:x.getLastErrorCode(),h_:x.getLastError()})}}finally{M(tt,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(s);M(tt,`RPC '${e}' ${o} sending request:`,s),x.send(t,"POST",h,r,15)}))}P_(e,t,r){const s=tx(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zd(),a=qd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},x=this.longPollingOptions.timeoutSeconds;x!==void 0&&(l.longPollingTimeout=Math.round(1e3*x)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");M(tt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const u=o.createWebChannel(h,l);this.T_(u);let f=!1,p=!1;const A=new Py({Ho:v=>{p?M(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(f||(M(tt,`Opening RPC '${e}' stream ${s} transport.`),u.open(),f=!0),M(tt,`RPC '${e}' stream ${s} sending:`,v),u.send(v))},Yo:()=>u.close()}),w=(v,R,V)=>{v.listen(R,(T=>{try{V(T)}catch(I){setTimeout((()=>{throw I}),0)}}))};return w(u,Ci.EventType.OPEN,(()=>{p||(M(tt,`RPC '${e}' stream ${s} transport opened.`),A.s_())})),w(u,Ci.EventType.CLOSE,(()=>{p||(p=!0,M(tt,`RPC '${e}' stream ${s} transport closed`),A.__(),this.I_(u))})),w(u,Ci.EventType.ERROR,(v=>{p||(p=!0,Dn(tt,`RPC '${e}' stream ${s} transport errored. Name:`,v.name,"Message:",v.message),A.__(new L(O.UNAVAILABLE,"The operation could not be completed")))})),w(u,Ci.EventType.MESSAGE,(v=>{var R;if(!p){const V=v.data[0];G(!!V,16349);const T=V,I=T?.error||((R=T[0])===null||R===void 0?void 0:R.error);if(I){M(tt,`RPC '${e}' stream ${s} received error:`,I);const b=I.status;let k=(function(C){const B=Le[C];if(B!==void 0)return yE(B)})(b),g=I.message;k===void 0&&(k=O.INTERNAL,g="Unknown error status: "+b+" with message "+I.message),p=!0,A.__(new L(k,g)),u.close()}else M(tt,`RPC '${e}' stream ${s} received:`,V),A.a_(V)}})),w(a,jd.STAT_EVENT,(v=>{v.stat===Zc.PROXY?M(tt,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Zc.NOPROXY&&M(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{A.o_()}),0),A}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}/**
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
 *//**
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
 */function L9(){return typeof window<"u"?window:null}function E0(){return typeof document<"u"?document:null}/**
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
 */function p0(n){return new L5(n,!0)}/**
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
 */class U9{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const j9="PersistentStream";class q9{constructor(e,t,r,s,i,o,a,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new U9(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Oe(t.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new L(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return M(j9,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(M(j9,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ry extends q9{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=q5(this.serializer,e),r=(function(i){if(!("targetChange"in i))return Q.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?at(o.readTime):Q.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Rl(this.serializer),t.addTarget=(function(i,o){let a;const l=o.target;if(a=za(l)?{documents:NE(i,l)}:{query:OE(i,l).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=TE(i,o.resumeToken);const x=kl(i,o.expectedCount);x!==null&&(a.expectedCount=x)}else if(o.snapshotVersion.compareTo(Q.min())>0){a.readTime=ys(i,o.snapshotVersion.toTimestamp());const x=kl(i,o.expectedCount);x!==null&&(a.expectedCount=x)}return a})(this.serializer,e);const r=$5(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Rl(this.serializer),t.removeTarget=e,this.k_(t)}}class Ny extends q9{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return G(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,G(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){G(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=z5(e.writeResults,e.commitTime),r=at(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Rl(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Za(this.serializer,r)))};this.k_(t)}}/**
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
 */class Oy{}class Vy extends Oy{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new L(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Sl(t,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(O.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Jo(e,Sl(t,r),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(O.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class My{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Oe(t),this._a=!1):M("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Fr="RemoteStore";class Ly{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{wr(this)&&(M(Fr,"Restarting streams for network reachability change."),await(async function(l){const x=W(l);x.Ia.add(4),await no(x),x.Aa.set("Unknown"),x.Ia.delete(4),await m0(x)})(this))}))})),this.Aa=new My(r,s)}}async function m0(n){if(wr(n))for(const e of n.da)await e(!0)}async function no(n){for(const e of n.da)await e(!1)}function g0(n,e){const t=W(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ix(t)?sx(t):Ss(t).x_()&&rx(t,e))}function ks(n,e){const t=W(n),r=Ss(t);t.Ta.delete(e),r.x_()&&z9(t,e),t.Ta.size===0&&(r.x_()?r.B_():wr(t)&&t.Aa.set("Unknown"))}function rx(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ss(n).H_(e)}function z9(n,e){n.Ra.$e(e),Ss(n).Y_(e)}function sx(n){n.Ra=new N5({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Ss(n).start(),n.Aa.aa()}function ix(n){return wr(n)&&!Ss(n).M_()&&n.Ta.size>0}function wr(n){return W(n).Ia.size===0}function $9(n){n.Ra=void 0}async function Uy(n){n.Aa.set("Online")}async function jy(n){n.Ta.forEach(((e,t)=>{rx(n,e)}))}async function qy(n,e){$9(n),ix(n)?(n.Aa.la(e),sx(n)):n.Aa.set("Unknown")}async function zy(n,e,t){if(n.Aa.set("Online"),e instanceof FE&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))})(n,e)}catch(r){M(Fr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _0(n,r)}else if(e instanceof Ya?n.Ra.Ye(e):e instanceof vE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Q.min()))try{const r=await w9(n.localStore);t.compareTo(r)>=0&&await(function(i,o){const a=i.Ra.Pt(o);return a.targetChanges.forEach(((l,x)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ta.get(x);h&&i.Ta.set(x,h.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,x)=>{const h=i.Ta.get(l);if(!h)return;i.Ta.set(l,h.withResumeToken(Ve.EMPTY_BYTE_STRING,h.snapshotVersion)),z9(i,l);const u=new ln(h.target,l,x,h.sequenceNumber);rx(i,u)})),i.remoteSyncer.applyRemoteEvent(a)})(n,t)}catch(r){M(Fr,"Failed to raise snapshot:",r),await _0(n,r)}}async function _0(n,e,t){if(!wn(e))throw e;n.Ia.add(1),await no(n),n.Aa.set("Offline"),t||(t=()=>w9(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(Fr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await m0(n)}))}function W9(n,e){return e().catch((t=>_0(n,t,e)))}async function Ps(n){const e=W(n),t=Vn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:hr;for(;$y(e);)try{const s=await Iy(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Wy(e,s)}catch(s){await _0(e,s)}K9(e)&&G9(e)}function $y(n){return wr(n)&&n.Pa.length<10}function Wy(n,e){n.Pa.push(e);const t=Vn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function K9(n){return wr(n)&&!Vn(n).M_()&&n.Pa.length>0}function G9(n){Vn(n).start()}async function Ky(n){Vn(n).na()}async function Gy(n){const e=Vn(n);for(const t of n.Pa)e.X_(t.mutations)}async function Hy(n,e,t){const r=n.Pa.shift(),s=Il.from(r,e,t);await W9(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ps(n)}async function Qy(n,e){e&&Vn(n).Z_&&await(async function(r,s){if((function(o){return S5(o)&&o!==O.ABORTED})(s.code)){const i=r.Pa.shift();Vn(r).N_(),await W9(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ps(r)}})(n,e),K9(n)&&G9(n)}async function H9(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),M(Fr,"RemoteStore received new credentials");const r=wr(t);t.Ia.add(3),await no(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await m0(t)}async function ox(n,e){const t=W(n);e?(t.Ia.delete(2),await m0(t)):e||(t.Ia.add(2),await no(t),t.Aa.set("Unknown"))}function Ss(n){return n.Va||(n.Va=(function(t,r,s){const i=W(t);return i.ia(),new Ry(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Uy.bind(null,n),e_:jy.bind(null,n),n_:qy.bind(null,n),J_:zy.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),ix(n)?sx(n):n.Aa.set("Unknown")):(await n.Va.stop(),$9(n))}))),n.Va}function Vn(n){return n.ma||(n.ma=(function(t,r,s){const i=W(t);return i.ia(),new Ny(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Ky.bind(null,n),n_:Qy.bind(null,n),ea:Gy.bind(null,n),ta:Hy.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Ps(n)):(await n.ma.stop(),n.Pa.length>0&&(M(Fr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class ax{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new ax(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cx(n,e){if(Oe("AsyncQueue",`${e}: ${n}`),wn(n))return new L(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Rs{static emptySet(e){return new Rs(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=qi(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Q9{constructor(){this.fa=new Te(q.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):z(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ns{constructor(e,t,r,s,i,o,a,l,x){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=x}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Ns(e,t,Rs.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Yy{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Xy{constructor(){this.queries=Y9(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=W(t),i=s.queries;s.queries=Y9(),i.forEach(((o,a)=>{for(const l of a.wa)l.onError(r)}))})(this,new L(O.ABORTED,"Firestore shutting down"))}}function Y9(){return new an((n=>rE(n)),Ka)}async function lx(n,e){const t=W(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new Yy,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=cx(o,`Initialization of query '${ps(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&ux(t)}async function xx(n,e){const t=W(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Jy(n,e){const t=W(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.wa)a.Ca(s)&&(r=!0);o.ya=s}}r&&ux(t)}function Zy(n,e,t){const r=W(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function ux(n){n.Da.forEach((e=>{e.next()}))}var hx,X9;(X9=hx||(hx={})).Fa="default",X9.Cache="cache";class dx{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==hx.Cache}}/**
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
 */class J9{constructor(e){this.key=e}}class Z9{constructor(e){this.key=e}}class e1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ee(),this.mutatedKeys=ee(),this.Xa=iE(e),this.eu=new Rs(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Q9,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,x=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((h,u)=>{const f=s.get(h),p=ji(this.query,u)?u:null,A=!!f&&this.mutatedKeys.has(f.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;f&&p?f.data.isEqual(p.data)?A!==w&&(r.track({type:3,doc:p}),v=!0):this.iu(f,p)||(r.track({type:2,doc:p}),v=!0,(l&&this.Xa(p,l)>0||x&&this.Xa(p,x)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),v=!0):f&&!p&&(r.track({type:1,doc:f}),v=!0,(l||x)&&(a=!0)),v&&(p?(o=o.add(p),i=w?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:a,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((h,u)=>(function(p,A){const w=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{At:v})}};return w(p)-w(A)})(h.type,u.type)||this.Xa(h.doc,u.doc))),this.su(r),s=s!=null&&s;const a=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,x=l!==this.Ya;return this.Ya=l,o.length!==0||x?{snapshot:new Ns(this.query,e.eu,i,o,e.mutatedKeys,l===0,x,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Q9,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ee(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Z9(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new J9(r))})),t}uu(e){this.Ha=e.qs,this.Za=ee();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ns.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Os="SyncEngine";class t1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class n1{constructor(e){this.key=e,this.lu=!1}}class r1{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new an((a=>rE(a)),Ka),this.Tu=new Map,this.Iu=new Set,this.du=new Te(q.comparator),this.Eu=new Map,this.Au=new ql,this.Ru={},this.Vu=new Map,this.mu=Dr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function s1(n,e,t=!0){const r=C0(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await ep(r,e,t,!0),s}async function i1(n,e){const t=C0(n);await ep(t,e,!0,!1)}async function ep(n,e,t,r){const s=await u0(n.localStore,_t(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await fx(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&g0(n.remoteStore,s),a}async function fx(n,e,t,r,s){n.gu=(u,f,p)=>(async function(w,v,R,V){let T=v.view.nu(R);T.Ds&&(T=await Yl(w.localStore,v.query,!1).then((({documents:g})=>v.view.nu(g,T))));const I=V&&V.targetChanges.get(v.targetId),b=V&&V.targetMismatches.get(v.targetId)!=null,k=v.view.applyChanges(T,w.isPrimaryClient,I,b);return mx(w,v.targetId,k._u),k.snapshot})(n,u,f,p);const i=await Yl(n.localStore,e,!0),o=new e1(e,i.qs),a=o.nu(i.documents),l=Hi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),x=o.applyChanges(a,n.isPrimaryClient,l);mx(n,t,x._u);const h=new t1(e,t,o);return n.Pu.set(e,h),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),x.snapshot}async function o1(n,e,t){const r=W(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Ka(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bs(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ks(r.remoteStore,s.targetId),Vs(r,s.targetId)})).catch(vn)):(Vs(r,s.targetId),await bs(r.localStore,s.targetId,!0))}async function a1(n,e){const t=W(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ks(t.remoteStore,r.targetId))}async function c1(n,e,t){const r=_x(n);try{const s=await(function(o,a){const l=W(o),x=pe.now(),h=a.reduce(((p,A)=>p.add(A.key)),ee());let u,f;return l.persistence.runTransaction("Locally write mutations","readwrite",(p=>{let A=Ct(),w=ee();return l.Os.getEntries(p,h).next((v=>{A=v,A.forEach(((R,V)=>{V.isValidDocument()||(w=w.add(R))}))})).next((()=>l.localDocuments.getOverlayedDocuments(p,A))).next((v=>{u=v;const R=[];for(const V of a){const T=k5(V,u.get(V.key).overlayedDocument);T!=null&&R.push(new cn(V.key,T,qf(T.value.mapValue),qe.exists(!0)))}return l.mutationQueue.addMutationBatch(p,x,R,a)})).next((v=>{f=v;const R=v.applyToLocalDocumentSet(u,w);return l.documentOverlayCache.saveOverlays(p,v.batchId,R)}))})).then((()=>({batchId:f.batchId,changes:aE(u)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,a,l){let x=o.Ru[o.currentUser.toKey()];x||(x=new Te(J)),x=x.insert(a,l),o.Ru[o.currentUser.toKey()]=x})(r,s.batchId,t),await Mn(r,s.changes),await Ps(r.remoteStore)}catch(s){const i=cx(s,"Failed to persist write");t.reject(i)}}async function tp(n,e){const t=W(n);try{const r=await Fy(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Eu.get(i);o&&(G(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?G(o.lu,14607):s.removedDocuments.size>0&&(G(o.lu,42227),o.lu=!1))})),await Mn(t,r,e)}catch(r){await vn(r)}}function np(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const l=W(o);l.onlineState=a;let x=!1;l.queries.forEach(((h,u)=>{for(const f of u.wa)f.va(a)&&(x=!0)})),x&&ux(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function l1(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Te(q.comparator);o=o.insert(i,Pe.newNoDocument(i,Q.min()));const a=ee().add(i),l=new Gi(Q.min(),new Map,new Te(J),o,a);await tp(r,l),r.du=r.du.remove(i),r.Eu.delete(e),gx(r)}else await bs(r.localStore,e,!1).then((()=>Vs(r,e,t))).catch(vn)}async function x1(n,e){const t=W(n),r=e.batch.batchId;try{const s=await vy(t.localStore,e);px(t,r,null),Ex(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Mn(t,s)}catch(s){await vn(s)}}async function u1(n,e,t){const r=W(n);try{const s=await(function(o,a){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(x=>{let h;return l.mutationQueue.lookupMutationBatch(x,a).next((u=>(G(u!==null,37113),h=u.keys(),l.mutationQueue.removeMutationBatch(x,u)))).next((()=>l.mutationQueue.performConsistencyCheck(x))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(x,h,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(x,h))).next((()=>l.localDocuments.getDocuments(x,h)))}))})(r.localStore,e);px(r,e,t),Ex(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Mn(r,s)}catch(s){await vn(s)}}function Ex(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function px(n,e,t){const r=W(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Vs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||rp(n,r)}))}function rp(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ks(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),gx(n))}function mx(n,e,t){for(const r of t)r instanceof J9?(n.Au.addReference(r.key,e),h1(n,r)):r instanceof Z9?(M(Os,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||rp(n,r.key)):z(19791,{yu:r})}function h1(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(M(Os,"New document in limbo: "+t),n.Iu.add(r),gx(n))}function gx(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new q(fe.fromString(e)),r=n.mu.next();n.Eu.set(r,new n1(t)),n.du=n.du.insert(t,r),g0(n.remoteStore,new ln(_t(Li(t.path)),r,"TargetPurposeLimboResolution",ft.ue))}}async function Mn(n,e,t){const r=W(n),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((a,l)=>{o.push(r.gu(l,e,t).then((x=>{var h;if((x||t)&&r.isPrimaryClient){const u=x?!x.fromCache:(h=t?.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,u?"current":"not-current")}if(x){s.push(x);const u=Hl.Es(l.targetId,x);i.push(u)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(l,x){const h=W(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(u=>P.forEach(x,(f=>P.forEach(f.Is,(p=>h.persistence.referenceDelegate.addReference(u,f.targetId,p))).next((()=>P.forEach(f.ds,(p=>h.persistence.referenceDelegate.removeReference(u,f.targetId,p)))))))))}catch(u){if(!wn(u))throw u;M(Ql,"Failed to update sequence numbers: "+u)}for(const u of x){const f=u.targetId;if(!u.fromCache){const p=h.Fs.get(f),A=p.snapshotVersion,w=p.withLastLimboFreeSnapshotVersion(A);h.Fs=h.Fs.insert(f,w)}}})(r.localStore,i))}async function d1(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){M(Os,"User change. New user:",e.toKey());const r=await F9(t.localStore,e);t.currentUser=e,(function(i,o){i.Vu.forEach((a=>{a.forEach((l=>{l.reject(new L(O.CANCELLED,o))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mn(t,r.Bs)}}function f1(n,e){const t=W(n),r=t.Eu.get(e);if(r&&r.lu)return ee().add(r.key);{let s=ee();const i=t.Tu.get(e);if(!i)return s;for(const o of i){const a=t.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}async function E1(n,e){const t=W(n),r=await Yl(t.localStore,e.query,!0),s=e.view.uu(r);return t.isPrimaryClient&&mx(t,e.targetId,s._u),s}async function p1(n,e){const t=W(n);return T9(t.localStore,e).then((r=>Mn(t,r)))}async function m1(n,e,t,r){const s=W(n),i=await(function(a,l){const x=W(a),h=W(x.mutationQueue);return x.persistence.runTransaction("Lookup mutation documents","readonly",(u=>h.Xn(u,l).next((f=>f?x.localDocuments.getDocuments(u,f):P.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Ps(s.remoteStore):t==="acknowledged"||t==="rejected"?(px(s,e,r||null),Ex(s,e),(function(a,l){W(W(a).mutationQueue).rr(l)})(s.localStore,e)):z(6720,"Unknown batchState",{wu:t}),await Mn(s,i)):M(Os,"Cannot apply mutation batch with id: "+e)}async function g1(n,e){const t=W(n);if(C0(t),_x(t),e===!0&&t.fu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await sp(t,r.toArray());t.fu=!0,await ox(t.remoteStore,!0);for(const i of s)g0(t.remoteStore,i)}else if(e===!1&&t.fu!==!1){const r=[];let s=Promise.resolve();t.Tu.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then((()=>(Vs(t,o),bs(t.localStore,o,!0)))),ks(t.remoteStore,o)})),await s,await sp(t,r),(function(o){const a=W(o);a.Eu.forEach(((l,x)=>{ks(a.remoteStore,x)})),a.Au.jr(),a.Eu=new Map,a.du=new Te(q.comparator)})(t),t.fu=!1,await ox(t.remoteStore,!1)}}async function sp(n,e,t){const r=W(n),s=[],i=[];for(const o of e){let a;const l=r.Tu.get(o);if(l&&l.length!==0){a=await u0(r.localStore,_t(l[0]));for(const x of l){const h=r.Pu.get(x),u=await E1(r,h);u.snapshot&&i.push(u.snapshot)}}else{const x=await I9(r.localStore,o);a=await u0(r.localStore,x),await fx(r,ip(x),o,!1,a.resumeToken)}s.push(a)}return r.hu.J_(i),s}function ip(n){return eE(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function _1(n){return(function(t){return W(W(t).persistence).Ps()})(W(n).localStore)}async function C1(n,e,t,r){const s=W(n);if(s.fu)return void M(Os,"Ignoring unexpected query state notification.");const i=s.Tu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await T9(s.localStore,sE(i[0])),a=Gi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ve.EMPTY_BYTE_STRING);await Mn(s,o,a);break}case"rejected":await bs(s.localStore,e,!0),Vs(s,e,r);break;default:z(64155,t)}}async function A1(n,e,t){const r=C0(n);if(r.fu){for(const s of e){if(r.Tu.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){M(Os,"Adding an already active target "+s);continue}const i=await I9(r.localStore,s),o=await u0(r.localStore,i);await fx(r,ip(i),o.targetId,!1,o.resumeToken),g0(r.remoteStore,o)}for(const s of t)r.Tu.has(s)&&await bs(r.localStore,s,!1).then((()=>{ks(r.remoteStore,s),Vs(r,s)})).catch(vn)}}function C0(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=tp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=f1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=l1.bind(null,e),e.hu.J_=Jy.bind(null,e.eventManager),e.hu.pu=Zy.bind(null,e.eventManager),e}function _x(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=u1.bind(null,e),e}class ro{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=p0(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return v9(this.persistence,new D9,e.initialUser,this.serializer)}Du(e){return new zl(c0.Vi,this.serializer)}bu(e){return new O9}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ro.provider={build:()=>new ro};class op extends ro{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){G(this.persistence.referenceDelegate instanceof l0,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new f9(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?et.withCacheSize(this.cacheSizeBytes):et.DEFAULT;return new zl((r=>l0.Vi(r,t)),this.serializer)}}class ap extends ro{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await _x(this.Mu.syncEngine),await Ps(this.Mu.remoteStore),await this.persistence.ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}vu(e){return v9(this.persistence,new D9,e.initialUser,this.serializer)}Cu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new f9(r,e.asyncQueue,t)}Fu(e,t){const r=new N6(t,this.persistence);return new R6(e.asyncQueue,r)}Du(e){const t=B9(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?et.withCacheSize(this.cacheSizeBytes):et.DEFAULT;return new Gl(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,L9(),E0(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new O9}}class y1 extends ap{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof ex&&(this.sharedClientState.syncEngine={Do:m1.bind(null,t),vo:C1.bind(null,t),Co:A1.bind(null,t),Ps:_1.bind(null,t),bo:p1.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji((async r=>{await g1(this.Mu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())}))}bu(e){const t=L9();if(!ex.C(t))throw new L(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=B9(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ex(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Ms{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>np(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=d1.bind(null,this.syncEngine),await ox(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Xy})()}createDatastore(e){const t=p0(e.databaseInfo.databaseId),r=(function(i){return new Sy(i)})(e.databaseInfo);return(function(i,o,a,l){return new Vy(i,o,a,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,o,a){return new Ly(r,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>np(this.syncEngine,t,0)),(function(){return M9.C()?new M9:new Ty})())}createSyncEngine(e,t){return(function(s,i,o,a,l,x,h){const u=new r1(s,i,o,a,l,x);return h&&(u.fu=!0),u})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=W(s);M(Fr,"RemoteStore shutting down."),i.Ia.add(5),await no(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ms.provider={build:()=>new Ms};/**
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
 *//**
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
 */class Cx{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Oe("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Ln="FirestoreClient";class B1{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=tl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{M(Ln,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(M(Ln,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=cx(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ax(n,e){n.asyncQueue.verifyOperationInProgress(),M(Ln,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await F9(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Dn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{M("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Dn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function cp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await D1(n);M(Ln,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>H9(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>H9(e.remoteStore,s))),n._onlineComponents=e}async function D1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Ln,"Using user provided OfflineComponentProvider");try{await Ax(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Dn("Error using user provided cache. Falling back to memory cache: "+t),await Ax(n,new ro)}}else M(Ln,"Using default OfflineComponentProvider"),await Ax(n,new op(void 0));return n._offlineComponents}async function lp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Ln,"Using user provided OnlineComponentProvider"),await cp(n,n._uninitializedComponentsProvider._online)):(M(Ln,"Using default OnlineComponentProvider"),await cp(n,new Ms))),n._onlineComponents}function v1(n){return lp(n).then((e=>e.syncEngine))}async function A0(n){const e=await lp(n),t=e.eventManager;return t.onListen=s1.bind(null,e.syncEngine),t.onUnlisten=o1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=i1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=a1.bind(null,e.syncEngine),t}function F1(n,e,t={}){const r=new Wt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,x){const h=new Cx({next:f=>{h.Ou(),o.enqueueAndForget((()=>xx(i,u)));const p=f.docs.has(a);!p&&f.fromCache?x.reject(new L(O.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?x.reject(new L(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):x.resolve(f)},error:f=>x.reject(f)}),u=new dx(Li(a.path),h,{includeMetadataChanges:!0,ka:!0});return lx(i,u)})(await A0(n),n.asyncQueue,e,t,r))),r.promise}function w1(n,e,t={}){const r=new Wt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,l,x){const h=new Cx({next:f=>{h.Ou(),o.enqueueAndForget((()=>xx(i,u))),f.fromCache&&l.source==="server"?x.reject(new L(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):x.resolve(f)},error:f=>x.reject(f)}),u=new dx(a,h,{includeMetadataChanges:!0,ka:!0});return lx(i,u)})(await A0(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function xp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const up=new Map;/**
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
 */const I1="firestore.googleapis.com",hp=!0;class dp{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=I1,this.ssl=hp}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:hp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=o9;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<h9)throw new L(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}b6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yx{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new y6;switch(r.type){case"firstParty":return new v6(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=up.get(t);r&&(M("ComponentProvider","Removing Datastore"),up.delete(t),r.terminate())})(this),Promise.resolve()}}/**
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
 */class xn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xn(this.firestore,e,this._query)}}class Se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Se(this.firestore,e,this._key)}toJSON(){return{type:Se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ai(t,Se._jsonSchema))return new Se(e,r||null,new q(fe.fromString(t.referencePath)))}}Se._jsonSchemaVersion="firestore/documentReference/1.0",Se._jsonSchema={type:Me("string",Se._jsonSchemaVersion),referencePath:Me("string")};class Un extends xn{constructor(e,t,r){super(e,t,Li(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Se(this.firestore,null,new q(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function T1(n,e,...t){if(n=ce(n),Jd("collection","path",e),n instanceof yx){const r=fe.fromString(e,...t);return ef(r),new Un(n,null,r)}{if(!(n instanceof Se||n instanceof Un))throw new L(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return ef(r),new Un(n.firestore,null,r)}}function Bx(n,e,...t){if(n=ce(n),arguments.length===1&&(e=tl.newId()),Jd("doc","path",e),n instanceof yx){const r=fe.fromString(e,...t);return Zd(r),new Se(n,null,new q(r))}{if(!(n instanceof Se||n instanceof Un))throw new L(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(fe.fromString(e,...t));return Zd(r),new Se(n.firestore,n instanceof Un?n.converter:null,new q(r))}}/**
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
 */const fp="AsyncQueue";class Ep{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new U9(this,"async_queue_retry"),this.oc=()=>{const r=E0();r&&M(fp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=E0();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=E0();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Wt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!wn(e))throw e;M(fp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Oe("INTERNAL UNHANDLED ERROR: ",pp(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=ax.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&z(47125,{hc:pp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function pp(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function mp(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Xt extends yx{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ep,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ep(e),this._firestoreClient=void 0,await e}}}function gp(n,e,t){t||(t=Ma);const r=Xr(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Qr(i,e))return s;throw new L(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<h9)throw new L(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&tr(e.host)&&Th(e.host),r.initialize({options:e,instanceIdentifier:t})}function so(n){if(n._terminated)throw new L(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||b1(n),n._firestoreClient}function b1(n){var e,t,r;const s=n._freezeSettings(),i=(function(a,l,x,h){return new l5(a,l,x,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,xp(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new B1(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(a){const l=a?._online.build();return{_offline:a?._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class wt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wt(Ve.fromBase64String(e))}catch(t){throw new L(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new wt(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ai(e,wt._jsonSchema))return wt.fromBase64String(e.bytes)}}wt._jsonSchemaVersion="firestore/bytes/1.0",wt._jsonSchema={type:Me("string",wt._jsonSchemaVersion),bytes:Me("string")};/**
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
 */class io{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oo{constructor(e){this._methodName=e}}/**
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
 */class Jt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jt._jsonSchemaVersion}}static fromJSON(e){if(Ai(e,Jt._jsonSchema))return new Jt(e.latitude,e.longitude)}}Jt._jsonSchemaVersion="firestore/geoPoint/1.0",Jt._jsonSchema={type:Me("string",Jt._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Zt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Zt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ai(e,Zt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Zt(e.vectorValues);throw new L(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zt._jsonSchemaVersion="firestore/vectorValue/1.0",Zt._jsonSchema={type:Me("string",Zt._jsonSchemaVersion),vectorValues:Me("object")};/**
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
 */const k1=/^__.*__$/;class P1{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cn(e,this.data,this.fieldMask,t,this.fieldTransforms):new As(e,this.data,t,this.fieldTransforms)}}class _p{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new cn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{Ec:n})}}class Dx{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Dx(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return y0(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Cp(this.Ec)&&k1.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class S1{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||p0(e)}Dc(e,t,r,s=!1){return new Dx({Ec:e,methodName:t,bc:r,path:Ie.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ao(n){const e=n._freezeSettings(),t=p0(n._databaseId);return new S1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function vx(n,e,t,r,s,i={}){const o=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Ix("Data must be an object, but it was:",o,r);const a=Bp(r,o);let l,x;if(i.merge)l=new Et(o.fieldMask),x=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const u of i.mergeFields){const f=Tx(e,u,t);if(!o.contains(f))throw new L(O.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);vp(h,f)||h.push(f)}l=new Et(h),x=o.fieldTransforms.filter((u=>l.covers(u.field)))}else l=null,x=o.fieldTransforms;return new P1(new Ze(a),l,x)}class co extends oo{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof co}}class Fx extends oo{_toFieldTransform(e){return new Fl(e.path,new ms)}isEqual(e){return e instanceof Fx}}class wx extends oo{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new Cs(e.serializer,xE(e.serializer,this.Cc));return new Fl(e.path,t)}isEqual(e){return e instanceof wx&&this.Cc===e.Cc}}function Ap(n,e,t,r){const s=n.Dc(1,e,t);Ix("Data must be an object, but it was:",s,r);const i=[],o=Ze.empty();In(r,((l,x)=>{const h=bx(e,l,t);x=ce(x);const u=s.gc(h);if(x instanceof co)i.push(h);else{const f=lo(x,u);f!=null&&(i.push(h),o.set(h,f))}}));const a=new Et(i);return new _p(o,a,s.fieldTransforms)}function yp(n,e,t,r,s,i){const o=n.Dc(1,e,t),a=[Tx(e,r,t)],l=[s];if(i.length%2!=0)throw new L(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Tx(e,i[f])),l.push(i[f+1]);const x=[],h=Ze.empty();for(let f=a.length-1;f>=0;--f)if(!vp(x,a[f])){const p=a[f];let A=l[f];A=ce(A);const w=o.gc(p);if(A instanceof co)x.push(p);else{const v=lo(A,w);v!=null&&(x.push(p),h.set(p,v))}}const u=new Et(x);return new _p(h,u,o.fieldTransforms)}function R1(n,e,t,r=!1){return lo(t,n.Dc(r?4:3,e))}function lo(n,e){if(Dp(n=ce(n)))return Ix("Unsupported field value:",e,n),Bp(n,e);if(n instanceof oo)return(function(r,s){if(!Cp(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const a of r){let l=lo(a,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=pe.fromDate(r);return{timestampValue:ys(s.serializer,i)}}if(r instanceof pe){const i=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ys(s.serializer,i)}}if(r instanceof Jt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wt)return{bytesValue:TE(s.serializer,r._byteString)};if(r instanceof Se){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Zt)return(function(o,a){return{mapValue:{fields:{[El]:{stringValue:pl},[us]:{arrayValue:{values:o.toArray().map((x=>{if(typeof x!="number")throw a.wc("VectorValues must only contain numeric values.");return vl(a.serializer,x)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Ba(r)}`)})(n,e)}function Bp(n,e){const t={};return Ff(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):In(n,((r,s)=>{const i=lo(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Dp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pe||n instanceof Jt||n instanceof wt||n instanceof Se||n instanceof oo||n instanceof Zt)}function Ix(n,e,t){if(!Dp(t)||!tf(t)){const r=Ba(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Tx(n,e,t){if((e=ce(e))instanceof io)return e._internalPath;if(typeof e=="string")return bx(n,e);throw y0("Field path arguments must be of type string or ",n,!1,void 0,t)}const N1=new RegExp("[~\\*/\\[\\]]");function bx(n,e,t){if(e.search(N1)>=0)throw y0(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new io(...e.split("."))._internalPath}catch{throw y0(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function y0(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new L(O.INVALID_ARGUMENT,a+n+l)}function vp(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Fp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new O1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(B0("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class O1 extends Fp{data(){return super.data()}}function B0(n,e){return typeof e=="string"?bx(n,e):e instanceof io?e._internalPath:e._delegate._internalPath}/**
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
 */function wp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kx{}class Px extends kx{}function V1(n,e,...t){let r=[];e instanceof kx&&r.push(e),r=r.concat(t),(function(i){const o=i.filter((l=>l instanceof Sx)).length,a=i.filter((l=>l instanceof D0)).length;if(o>1||o>0&&a>0)throw new L(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class D0 extends Px{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new D0(e,t,r)}_apply(e){const t=this._parse(e);return bp(e._query,t),new xn(e.firestore,e.converter,Bl(e._query,t))}_parse(e){const t=ao(e.firestore);return(function(i,o,a,l,x,h,u){let f;if(x.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new L(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Tp(u,h);const A=[];for(const w of u)A.push(Ip(l,i,w));f={arrayValue:{values:A}}}else f=Ip(l,i,u)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Tp(u,h),f=R1(a,o,u,h==="in"||h==="not-in");return ae.create(x,h,f)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function M1(n,e,t){const r=e,s=B0("where",n);return D0._create(s,r,t)}class Sx extends kx{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sx(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)bp(o,l),o=Bl(o,l)})(e._query,t),new xn(e.firestore,e.converter,Bl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rx extends Px{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Rx(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new L(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vi(i,o)})(e._query,this._field,this._direction);return new xn(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Es(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function L1(n,e="asc"){const t=e,r=B0("orderBy",n);return Rx._create(r,t)}class Nx extends Px{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Nx(e,t,r)}_apply(e){return new xn(e.firestore,e.converter,Wa(e._query,this._limit,this._limitType))}}function U1(n){return k6("limit",n),Nx._create("limit",n,"F")}function Ip(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new L(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nE(e)&&t.indexOf("/")!==-1)throw new L(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(fe.fromString(t));if(!q.isDocumentKey(r))throw new L(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ri(n,new q(r))}if(t instanceof Se)return Ri(n,t._key);throw new L(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ba(t)}.`)}function Tp(n,e){if(!Array.isArray(n)||n.length===0)throw new L(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bp(n,e){const t=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class j1{convertValue(e,t="none"){switch(kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(on(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return In(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[us].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>Fe(o.doubleValue)));return new Zt(i)}convertGeoPoint(e){return new Jt(Fe(e.latitude),Fe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Va(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Pi(e));default:return null}}convertTimestamp(e){const t=sn(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=fe.fromString(e);G(UE(r),9688,{name:e});const s=new pr(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||Oe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Ox(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class xo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ir extends Fp{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new v0(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(B0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ir._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ir._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ir._jsonSchema={type:Me("string",Ir._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class v0 extends Ir{data(e={}){return super.data(e)}}class Tr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new xo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new v0(this._firestore,this._userDataWriter,r.key,r,new xo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{const l=new v0(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const l=new v0(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let x=-1,h=-1;return a.type!==0&&(x=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:q1(a.type),doc:l,oldIndex:x,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Tr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function q1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
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
 */function z1(n){n=dt(n,Se);const e=dt(n.firestore,Xt);return F1(so(e),n._key).then((t=>Pp(e,n,t)))}Tr._jsonSchemaVersion="firestore/querySnapshot/1.0",Tr._jsonSchema={type:Me("string",Tr._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};class Vx extends j1{constructor(e){super(),this.firestore=e}convertBytes(e){return new wt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Se(this.firestore,null,t)}}function $1(n){n=dt(n,xn);const e=dt(n.firestore,Xt),t=so(e),r=new Vx(e);return wp(n._query),w1(t,n._query).then((s=>new Tr(e,r,n,s)))}function W1(n,e,t){n=dt(n,Se);const r=dt(n.firestore,Xt),s=Ox(n.converter,e,t);return uo(r,[vx(ao(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,qe.none())])}function K1(n,e,t,...r){n=dt(n,Se);const s=dt(n.firestore,Xt),i=ao(s);let o;return o=typeof(e=ce(e))=="string"||e instanceof io?yp(i,"updateDoc",n._key,e,t,r):Ap(i,"updateDoc",n._key,e),uo(s,[o.toMutation(n._key,qe.exists(!0))])}function G1(n){return uo(dt(n.firestore,Xt),[new Wi(n._key,qe.none())])}function H1(n,e){const t=dt(n.firestore,Xt),r=Bx(n),s=Ox(n.converter,e);return uo(t,[vx(ao(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,qe.exists(!1))]).then((()=>r))}function kp(n,...e){var t,r,s;n=ce(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||mp(e[o])||(i=e[o++]);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(mp(e[o])){const u=e[o];e[o]=(t=u.next)===null||t===void 0?void 0:t.bind(u),e[o+1]=(r=u.error)===null||r===void 0?void 0:r.bind(u),e[o+2]=(s=u.complete)===null||s===void 0?void 0:s.bind(u)}let l,x,h;if(n instanceof Se)x=dt(n.firestore,Xt),h=Li(n._key.path),l={next:u=>{e[o]&&e[o](Pp(x,n,u))},error:e[o+1],complete:e[o+2]};else{const u=dt(n,xn);x=dt(u.firestore,Xt),h=u._query;const f=new Vx(x);l={next:p=>{e[o]&&e[o](new Tr(x,f,u,p))},error:e[o+1],complete:e[o+2]},wp(n._query)}return(function(f,p,A,w){const v=new Cx(w),R=new dx(p,v,A);return f.asyncQueue.enqueueAndForget((async()=>lx(await A0(f),R))),()=>{v.Ou(),f.asyncQueue.enqueueAndForget((async()=>xx(await A0(f),R)))}})(so(x),h,a,l)}function uo(n,e){return(function(r,s){const i=new Wt;return r.asyncQueue.enqueueAndForget((async()=>c1(await v1(r),s,i))),i.promise})(so(n),e)}function Pp(n,e,t){const r=t.docs.get(e._key),s=new Vx(n);return new Ir(n,s,e._key,r,new xo(t.hasPendingWrites,t.fromCache),e.converter)}class Q1{constructor(e){this.kind="memory",this._onlineComponentProvider=Ms.provider,e?.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new op(void 0)}}toJSON(){return{kind:this.kind}}}class Y1{constructor(e){let t;this.kind="persistent",e?.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=tB(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function X1(n){return new Q1(n)}function J1(n){return new Y1(n)}class Z1{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ms.provider,this._offlineComponentProvider={build:t=>new ap(t,e?.cacheSizeBytes,this.forceOwnership)}}}class eB{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Ms.provider,this._offlineComponentProvider={build:t=>new y1(t,e?.cacheSizeBytes)}}}function tB(n){return new Z1(void 0)}function nB(){return new eB}/**
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
 */class rB{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ao(e)}set(e,t,r){this._verifyNotCommitted();const s=Mx(e,this._firestore),i=Ox(s.converter,t,r),o=vx(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,qe.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Mx(e,this._firestore);let o;return o=typeof(t=ce(t))=="string"||t instanceof io?yp(this._dataReader,"WriteBatch.update",i._key,t,r,s):Ap(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,qe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Mx(e,this._firestore);return this._mutations=this._mutations.concat(new Wi(t._key,qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Mx(n,e){if((n=ce(n)).firestore!==e)throw new L(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */function sB(){return new co("deleteField")}function iB(){return new Fx("serverTimestamp")}function oB(n){return new wx("increment",n)}/**
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
 */function aB(n){return so(n=dt(n,Xt)),new rB(n,(e=>uo(n,e)))}(function(e,t=!0){(function(s){ts=s})(hi),Pt(new vt("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Xt(new B6(r.getProvider("auth-internal")),new F6(o,r.getProvider("app-check-internal")),(function(x,h){if(!Object.prototype.hasOwnProperty.apply(x.options,["projectId"]))throw new L(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pr(x.options.projectId,h)})(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),ht($d,Wd,e),ht($d,Wd,"esm2017")})();const Sp="@firebase/database",Rp="1.0.20";/**
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
 */let Np="";function cB(n){Np=n}/**
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
 */class lB{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:li(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class xB{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return kt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Op=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lB(e)}}catch{}return new xB},br=Op("localStorage"),uB=Op("sessionStorage");/**
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
 */const Ls=new oa("@firebase/database"),Vp=(function(){let n=1;return function(){return n++}})(),Mp=function(n){const e=U_(n),t=new O_;t.update(e);const r=t.digest();return Fc.encodeByteArray(r)},ho=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ho.apply(null,r):typeof r=="object"?e+=Ue(r):e+=r,e+=" "}return e};let fo=null,Lp=!0;const hB=function(n,e){U(!0,"Can't turn on custom loggers persistently."),Ls.logLevel=se.VERBOSE,fo=Ls.log.bind(Ls)},$e=function(...n){if(Lp===!0&&(Lp=!1,fo===null&&uB.get("logging_enabled")===!0&&hB()),fo){const e=ho.apply(null,n);fo(e)}},Eo=function(n){return function(...e){$e(n,...e)}},Lx=function(...n){const e="FIREBASE INTERNAL ERROR: "+ho(...n);Ls.error(e)},un=function(...n){const e=`FIREBASE FATAL ERROR: ${ho(...n)}`;throw Ls.error(e),new Error(e)},ct=function(...n){const e="FIREBASE WARNING: "+ho(...n);Ls.warn(e)},dB=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},F0=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},fB=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Us="[MIN_NAME]",kr="[MAX_NAME]",Pr=function(n,e){if(n===e)return 0;if(n===Us||e===kr)return-1;if(e===Us||n===kr)return 1;{const t=qp(n),r=qp(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},EB=function(n,e){return n===e?0:n<e?-1:1},po=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ue(e))},Ux=function(n){if(typeof n!="object"||n===null)return Ue(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Ue(e[r]),t+=":",t+=Ux(n[e[r]]);return t+="}",t},Up=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function We(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const jp=function(n){U(!F0(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,l;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const x=[];for(l=t;l;l-=1)x.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)x.push(i%2?1:0),i=Math.floor(i/2);x.push(s?1:0),x.reverse();const h=x.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(h.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},pB=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mB=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function gB(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const _B=new RegExp("^-?(0*)\\d{1,10}$"),CB=-2147483648,AB=2147483647,qp=function(n){if(_B.test(n)){const e=Number(n);if(e>=CB&&e<=AB)return e}return null},js=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ct("Exception was thrown by user callback.",t),e},Math.floor(0))}},yB=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mo=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class BB{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Ft(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class DB{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?($e("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class w0{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}w0.OWNER="owner";/**
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
 */const jx="5",zp="v",$p="s",Wp="r",Kp="f",Gp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Hp="ls",Qp="p",qx="ac",Yp="websocket",Xp="long_polling";/**
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
 */class Jp{constructor(e,t,r,s,i=!1,o="",a=!1,l=!1,x=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=x,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=br.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&br.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function vB(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Zp(n,e,t){U(typeof e=="string","typeof type must == string"),U(typeof t=="object","typeof params must == object");let r;if(e===Yp)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Xp)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vB(n)&&(t.ns=n.namespace);const s=[];return We(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class FB{constructor(){this.counters_={}}incrementCounter(e,t=1){kt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return f_(this.counters_)}}/**
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
 */const zx={},$x={};function Wx(n){const e=n.toString();return zx[e]||(zx[e]=new FB),zx[e]}function wB(n,e){const t=n.toString();return $x[t]||($x[t]=e()),$x[t]}/**
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
 */class IB{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&js(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const em="start",TB="close",bB="pLPCommand",kB="pRTLPCB",tm="id",nm="pw",rm="ser",PB="cb",SB="seg",RB="ts",NB="d",OB="dframe",sm=1870,im=30,VB=sm-im,MB=25e3,LB=3e4;class qs{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Eo(e),this.stats_=Wx(t),this.urlFn=l=>(this.appCheckToken&&(l[qx]=this.appCheckToken),Zp(t,Xp,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new IB(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(LB)),fB(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kx((...i)=>{const[o,a,l,x,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===em)this.id=a,this.password=l;else if(o===TB)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[em]="t",r[rm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[PB]=this.scriptTagHolder.uniqueCallbackIdentifier),r[zp]=jx,this.transportSessionId&&(r[$p]=this.transportSessionId),this.lastSessionId&&(r[Hp]=this.lastSessionId),this.applicationId&&(r[Qp]=this.applicationId),this.appCheckToken&&(r[qx]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gp.test(location.hostname)&&(r[Wp]=Kp);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qs.forceAllow_=!0}static forceDisallow(){qs.forceDisallow_=!0}static isAvailable(){return qs.forceAllow_?!0:!qs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!pB()&&!mB()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=vh(t),s=Up(r,VB);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[OB]="t",r[tm]=e,r[nm]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ue(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Kx{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Vp(),window[bB+this.uniqueCallbackIdentifier]=e,window[kB+this.uniqueCallbackIdentifier]=t,this.myIFrame=Kx.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$e("frame writing exception"),a.stack&&$e(a.stack),$e(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$e("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tm]=this.myID,e[nm]=this.myPW,e[rm]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+im+r.length<=sm;){const o=this.pendingSegs.shift();r=r+"&"+SB+s+"="+o.seg+"&"+RB+s+"="+o.ts+"&"+NB+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(MB)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{$e("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const UB=16384,jB=45e3;let I0=null;typeof MozWebSocket<"u"?I0=MozWebSocket:typeof WebSocket<"u"&&(I0=WebSocket);class Nt{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Eo(this.connId),this.stats_=Wx(t),this.connURL=Nt.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[zp]=jx,typeof location<"u"&&location.hostname&&Gp.test(location.hostname)&&(o[Wp]=Kp),t&&(o[$p]=t),r&&(o[Hp]=r),s&&(o[qx]=s),i&&(o[Qp]=i),Zp(e,Yp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,br.set("previous_websocket_failure",!0);try{let r;T_(),this.mySock=new I0(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&I0!==null&&!Nt.forceDisallow_}static previouslyFailed(){return br.isInMemoryStorage||br.get("previous_websocket_failure")===!0}markConnectionHealthy(){br.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=li(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(U(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=Up(t,UB);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jB))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nt.responsesRequiredToBeHealthy=2,Nt.healthyTimeout=3e4;/**
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
 */class go{static get ALL_TRANSPORTS(){return[qs,Nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Nt&&Nt.isAvailable();let r=t&&!Nt.previouslyFailed();if(e.webSocketOnly&&(t||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Nt];else{const s=this.transports_=[];for(const i of go.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);go.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}go.globalTransportInitialized_=!1;/**
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
 */const qB=6e4,zB=5e3,$B=10*1024,WB=100*1024,Gx="t",om="d",KB="s",am="r",GB="e",cm="o",lm="a",xm="n",um="p",HB="h";class QB{constructor(e,t,r,s,i,o,a,l,x,h){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=x,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Eo("c:"+this.id+":"),this.transportManager_=new go(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=mo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>WB?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$B?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gx in e){const t=e[Gx];t===lm?this.upgradeIfSecondaryHealthy_():t===am?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===cm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=po("t",e),r=po("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:um,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=po("t",e),r=po("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=po(Gx,e);if(om in e){const r=e[om];if(t===HB){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===xm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===KB?this.onConnectionShutdown_(r):t===am?this.onReset_(r):t===GB?Lx("Server Error: "+r):t===cm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lx("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),jx!==r&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),mo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qB))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zB))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:um,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(br.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class hm{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class dm{constructor(e){this.allowedEvents_=e,this.listeners_={},U(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){U(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class T0 extends dm{static getInstance(){return new T0}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!wc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return U(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const fm=32,Em=768;class _e{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ue(){return new _e("")}function te(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function jn(n){return n.pieces_.length-n.pieceNum_}function Ae(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new _e(n.pieces_,e)}function Hx(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function YB(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function _o(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function pm(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new _e(e,0)}function be(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new _e(t,0)}function ne(n){return n.pieceNum_>=n.pieces_.length}function lt(n,e){const t=te(n),r=te(e);if(t===null)return e;if(t===r)return lt(Ae(n),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function XB(n,e){const t=_o(n,0),r=_o(e,0);for(let s=0;s<t.length&&s<r.length;s++){const i=Pr(t[s],r[s]);if(i!==0)return i}return t.length===r.length?0:t.length<r.length?-1:1}function Qx(n,e){if(jn(n)!==jn(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function It(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(jn(n)>jn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class JB{constructor(e,t){this.errorPrefix_=t,this.parts_=_o(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ia(this.parts_[r]);mm(this)}}function ZB(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ia(e),mm(n)}function eD(n){const e=n.parts_.pop();n.byteLength_-=ia(e),n.parts_.length>0&&(n.byteLength_-=1)}function mm(n){if(n.byteLength_>Em)throw new Error(n.errorPrefix_+"has a key path longer than "+Em+" bytes ("+n.byteLength_+").");if(n.parts_.length>fm)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fm+") or object contains a cycle "+Sr(n))}function Sr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Yx extends dm{static getInstance(){return new Yx}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return U(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Co=1e3,tD=300*1e3,gm=30*1e3,nD=1.3,rD=3e4,sD="server_kill",_m=3;class hn extends hm{constructor(e,t,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=hn.nextPersistentConnectionId_++,this.log_=Eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Co,this.maxReconnectDelay_=tD,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yx.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&T0.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(Ue(i)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new bt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,x=a.s;hn.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),x!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(x,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&kt(e,"w")){const r=rr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||N_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=R_(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Lx("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Co,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Co,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rD&&(this.reconnectDelay_=Co),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+hn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},x=function(u){U(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:x};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?$e("getToken() completed but was canceled"):($e("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new QB(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,p=>{ct(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(sD)},i))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ct(u),l())}}}interrupt(e){$e("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$e("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tc(this.interruptReasons_)&&(this.reconnectDelay_=Co,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>Ux(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new _e(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){$e("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_m&&(this.reconnectDelay_=gm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){$e("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_m&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Np.replace(/\./g,"-")]=1,wc()?e["framework.cordova"]=1:Ph()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=T0.getInstance().currentlyOnline();return Tc(this.interruptReasons_)&&e}}hn.nextPersistentConnectionId_=0,hn.nextConnectionId_=0;/**
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
 */class re{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new re(e,t)}}/**
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
 */class b0{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new re(Us,e),s=new re(Us,t);return this.compare(r,s)!==0}minPost(){return re.MIN}}/**
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
 */let k0;class Cm extends b0{static get __EMPTY_NODE(){return k0}static set __EMPTY_NODE(e){k0=e}compare(e,t){return Pr(e.name,t.name)}isDefinedOn(e){throw Hr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return re.MIN}maxPost(){return new re(kr,k0)}makePost(e,t){return U(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,k0)}toString(){return".key"}}const zs=new Cm;/**
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
 */class P0{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ke.RED,this.left=s??pt.EMPTY_NODE,this.right=i??pt.EMPTY_NODE}copy(e,t,r,s,i){return new Ke(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return pt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0,Ke.BLACK=!1;class iD{copy(e,t,r,s,i){return this}insert(e,t,r){return new Ke(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,t=pt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new pt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new P0(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new P0(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new P0(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new P0(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new iD;/**
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
 */function oD(n,e){return Pr(n.name,e.name)}function Xx(n,e){return Pr(n,e)}/**
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
 */let Jx;function aD(n){Jx=n}const Am=function(n){return typeof n=="number"?"number:"+jp(n):"string:"+n},ym=function(n){if(n.isLeafNode()){const e=n.val();U(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kt(e,".sv"),"Priority must be a string or number.")}else U(n===Jx||n.isEmpty(),"priority of unexpected type.");U(n===Jx||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Bm;class Ge{static set __childrenNodeConstructor(e){Bm=e}static get __childrenNodeConstructor(){return Bm}constructor(e,t=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,U(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ym(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ne(e)?this:te(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=te(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(U(r!==".priority"||jn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Am(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=jp(this.value_):e+=this.value_,this.lazyHash_=Mp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=Ge.VALUE_TYPE_ORDER.indexOf(t),i=Ge.VALUE_TYPE_ORDER.indexOf(r);return U(s>=0,"Unknown leaf type: "+t),U(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Dm,vm;function cD(n){Dm=n}function lD(n){vm=n}class xD extends b0{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?Pr(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return re.MIN}maxPost(){return new re(kr,new Ge("[PRIORITY-POST]",vm))}makePost(e,t){const r=Dm(e);return new re(t,new Ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const we=new xD;/**
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
 */const uD=Math.log(2);class hD{constructor(e){const t=i=>parseInt(Math.log(i)/uD,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const S0=function(n,e,t,r){n.sort(e);const s=function(l,x){const h=x-l;let u,f;if(h===0)return null;if(h===1)return u=n[l],f=t?t(u):u,new Ke(f,u.node,Ke.BLACK,null,null);{const p=parseInt(h/2,10)+l,A=s(l,p),w=s(p+1,x);return u=n[p],f=t?t(u):u,new Ke(f,u.node,Ke.BLACK,A,w)}},i=function(l){let x=null,h=null,u=n.length;const f=function(A,w){const v=u-A,R=u;u-=A;const V=s(v+1,R),T=n[v],I=t?t(T):T;p(new Ke(I,T.node,w,null,V))},p=function(A){x?(x.left=A,x=A):(h=A,x=A)};for(let A=0;A<l.count;++A){const w=l.nextBitIsOne(),v=Math.pow(2,l.count-(A+1));w?f(v,Ke.BLACK):(f(v,Ke.BLACK),f(v,Ke.RED))}return h},o=new hD(n.length),a=i(o);return new pt(r||e,a)};/**
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
 */let Zx;const $s={};class dn{static get Default(){return U($s&&we,"ChildrenNode.ts has not been loaded"),Zx=Zx||new dn({".priority":$s},{".priority":we}),Zx}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=rr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof pt?t:null}hasIndex(e){return kt(this.indexSet_,e.toString())}addIndex(e,t){U(e!==zs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(re.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=S0(r,e.getCompare()):a=$s;const l=e.toString(),x=Object.assign({},this.indexSet_);x[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new dn(h,x)}addToIndexes(e,t){const r=sa(this.indexes_,(s,i)=>{const o=rr(this.indexSet_,i);if(U(o,"Missing index implementation for "+i),s===$s)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(re.Wrap);let x=l.getNext();for(;x;)x.name!==e.name&&a.push(x),x=l.getNext();return a.push(e),S0(a,o.getCompare())}else return $s;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new re(e.name,a))),l.insert(e,e.node)}});return new dn(r,this.indexSet_)}removeFromIndexes(e,t){const r=sa(this.indexes_,s=>{if(s===$s)return s;{const i=t.get(e.name);return i?s.remove(new re(e.name,i)):s}});return new dn(r,this.indexSet_)}}/**
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
 */let Ao;class X{static get EMPTY_NODE(){return Ao||(Ao=new X(new pt(Xx),null,dn.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ym(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ao}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ao:t}}getChild(e){const t=te(e);return t===null?this:this.getImmediateChild(t).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(U(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new re(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ao:this.priorityNode_;return new X(s,o,i)}}updateChild(e,t){const r=te(e);if(r===null)return t;{U(te(e)!==".priority"||jn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ae(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(we,(o,a)=>{t[o]=a.val(e),r++,i&&X.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Am(this.getPriority().val())+":"),this.forEachChild(we,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Mp(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new re(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new re(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new re(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,re.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yo?-1:0}withIndex(e){if(e===zs||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===zs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(we),s=t.getIterator(we);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===zs?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dD extends X{constructor(){super(new pt(Xx),X.EMPTY_NODE,dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const yo=new dD;Object.defineProperties(re,{MIN:{value:new re(Us,X.EMPTY_NODE)},MAX:{value:new re(kr,yo)}}),Cm.__EMPTY_NODE=X.EMPTY_NODE,Ge.__childrenNodeConstructor=X,aD(yo),lD(yo);/**
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
 */const fD=!0;function ke(n,e=null){if(n===null)return X.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),U(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ge(t,ke(e))}if(!(n instanceof Array)&&fD){const t=[];let r=!1;if(We(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ke(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new re(o,l)))}}),t.length===0)return X.EMPTY_NODE;const i=S0(t,oD,o=>o.name,Xx);if(r){const o=S0(t,we.getCompare());return new X(i,ke(e),new dn({".priority":o},{".priority":we}))}else return new X(i,ke(e),dn.Default)}else{let t=X.EMPTY_NODE;return We(n,(r,s)=>{if(kt(n,r)&&r.substring(0,1)!=="."){const i=ke(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(ke(e))}}cD(ke);/**
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
 */class ED extends b0{constructor(e){super(),this.indexPath_=e,U(!ne(e)&&te(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?Pr(e.name,t.name):i}makePost(e,t){const r=ke(e),s=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(t,s)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,yo);return new re(kr,e)}toString(){return _o(this.indexPath_,0).join("/")}}/**
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
 */class pD extends b0{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Pr(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,t){const r=ke(e);return new re(t,r)}toString(){return".value"}}const mD=new pD;/**
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
 */function Fm(n){return{type:"value",snapshotNode:n}}function Ws(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Bo(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Do(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function gD(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class eu{constructor(e){this.index_=e}updateChild(e,t,r,s,i,o){U(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(t)?o.trackChildChange(Bo(t,a)):U(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ws(t,r)):o.trackChildChange(Do(t,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(we,(s,i)=>{t.hasChild(s)||r.trackChildChange(Bo(s,i))}),t.isLeafNode()||t.forEachChild(we,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Do(s,i,o))}else r.trackChildChange(Ws(s,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class vo{constructor(e){this.indexedFilter_=new eu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vo.getStartPost_(e),this.endPost_=vo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,s,i,o){return this.matches(new re(t,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,s,i,o)}updateFullNode(e,t,r){t.isLeafNode()&&(t=X.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(X.EMPTY_NODE);const i=this;return t.forEachChild(we,(o,a)=>{i.matches(new re(o,a))||(s=s.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class _D{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new vo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,s,i,o){return this.rangedFilter_.matches(new re(t,r))||(r=X.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,s,i,o):this.fullLimitUpdateChild_(e,t,r,i,o)}updateFullNode(e,t,r){let s;if(t.isLeafNode()||t.isEmpty())s=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=X.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(X.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,s,i){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,p)=>u(p,f)}else o=this.index_.getCompare();const a=e;U(a.numChildren()===this.limit_,"");const l=new re(t,r),x=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,x,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(h&&!r.isEmpty()&&p>=0)return i?.trackChildChange(Do(t,r,u)),a.updateImmediateChild(t,r);{i?.trackChildChange(Bo(t,u));const w=a.updateImmediateChild(t,X.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i?.trackChildChange(Ws(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:h&&o(x,l)>=0?(i!=null&&(i.trackChildChange(Bo(x.name,x.node)),i.trackChildChange(Ws(t,r))),a.updateImmediateChild(t,r).updateImmediateChild(x.name,X.EMPTY_NODE)):e}}/**
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
 */class tu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=we}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Us}hasEnd(){return this.endSet_}getIndexEndValue(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:kr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===we}copy(){const e=new tu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function CD(n){return n.loadsAllData()?new eu(n.getIndex()):n.hasLimit()?new _D(n):new vo(n)}function wm(n){const e={};if(n.isDefault())return e;let t;if(n.index_===we?t="$priority":n.index_===mD?t="$value":n.index_===zs?t="$key":(U(n.index_ instanceof ED,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ue(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Ue(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Ue(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Ue(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Ue(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Im(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==we&&(e.i=n.index_.toString()),e}/**
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
 */class R0 extends hm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Eo("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=R0.getListenId_(e,r),a={};this.listens_[o]=a;const l=wm(e._queryParams);this.restRequest_(i+".json",l,(x,h)=>{let u=h;if(x===404&&(u=null,x=null),x===null&&this.onDataUpdate_(i,u,!1,r),rr(this.listens_,o)===a){let f;x?x===401?f="permission_denied":f="rest_error:"+x:f="ok",s(f,null)}})}unlisten(e,t){const r=R0.getListenId_(e,t);delete this.listens_[r]}get(e){const t=wm(e._queryParams),r=e._path.toString(),s=new bt;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bc(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=li(a.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class AD{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function N0(){return{value:null,children:new Map}}function Ks(n,e,t){if(ne(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=te(e);n.children.has(r)||n.children.set(r,N0());const s=n.children.get(r);e=Ae(e),Ks(s,e,t)}}function nu(n,e){if(ne(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(we,(r,s)=>{Ks(n,new _e(r),s)}),nu(n,e)}}else if(n.children.size>0){const t=te(e);return e=Ae(e),n.children.has(t)&&nu(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function ru(n,e,t){n.value!==null?t(e,n.value):yD(n,(r,s)=>{const i=new _e(e.toString()+"/"+r);ru(s,i,t)})}function yD(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class BD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&We(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
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
 */const Tm=10*1e3,DD=30*1e3,vD=300*1e3;class FD{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new BD(e);const r=Tm+(DD-Tm)*Math.random();mo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;We(e,(s,i)=>{i>0&&kt(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),mo(this.reportStats_.bind(this),Math.floor(Math.random()*2*vD))}}/**
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
 */var Ot;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ot||(Ot={}));function su(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ou(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class O0{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Ot.ACK_USER_WRITE,this.source=su()}operationForChild(e){if(ne(this.path)){if(this.affectedTree.value!=null)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new _e(e));return new O0(ue(),t,this.revert)}}else return U(te(this.path)===e,"operationForChild called for unrelated child."),new O0(Ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fo{constructor(e,t){this.source=e,this.path=t,this.type=Ot.LISTEN_COMPLETE}operationForChild(e){return ne(this.path)?new Fo(this.source,ue()):new Fo(this.source,Ae(this.path))}}/**
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
 */class Rr{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Ot.OVERWRITE}operationForChild(e){return ne(this.path)?new Rr(this.source,ue(),this.snap.getImmediateChild(e)):new Rr(this.source,Ae(this.path),this.snap)}}/**
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
 */class Gs{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Ot.MERGE}operationForChild(e){if(ne(this.path)){const t=this.children.subtree(new _e(e));return t.isEmpty()?null:t.value?new Rr(this.source,ue(),t.value):new Gs(this.source,ue(),t)}else return U(te(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gs(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class qn{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ne(e))return this.isFullyInitialized()&&!this.filtered_;const t=te(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class wD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ID(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(gD(o.childName,o.snapshotNode))}),wo(n,s,"child_removed",e,r,t),wo(n,s,"child_added",e,r,t),wo(n,s,"child_moved",i,r,t),wo(n,s,"child_changed",e,r,t),wo(n,s,"value",e,r,t),s}function wo(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,l)=>bD(n,a,l)),o.forEach(a=>{const l=TD(n,a,i);s.forEach(x=>{x.respondsTo(a.type)&&e.push(x.createEvent(l,n.query_))})})}function TD(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function bD(n,e,t){if(e.childName==null||t.childName==null)throw Hr("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),s=new re(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
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
 */function V0(n,e){return{eventCache:n,serverCache:e}}function Io(n,e,t,r){return V0(new qn(e,t,r),n.serverCache)}function bm(n,e,t,r){return V0(n.eventCache,new qn(e,t,r))}function M0(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Nr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let au;const kD=()=>(au||(au=new pt(EB)),au);class Be{static fromObject(e){let t=new Be(null);return We(e,(r,s)=>{t=t.set(new _e(r),s)}),t}constructor(e,t=kD()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ue(),value:this.value};if(ne(e))return null;{const r=te(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ae(e),t);return i!=null?{path:be(new _e(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ne(e))return this;{const t=te(e),r=this.children.get(t);return r!==null?r.subtree(Ae(e)):new Be(null)}}set(e,t){if(ne(e))return new Be(t,this.children);{const r=te(e),i=(this.children.get(r)||new Be(null)).set(Ae(e),t),o=this.children.insert(r,i);return new Be(this.value,o)}}remove(e){if(ne(e))return this.children.isEmpty()?new Be(null):new Be(null,this.children);{const t=te(e),r=this.children.get(t);if(r){const s=r.remove(Ae(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new Be(null):new Be(this.value,i)}else return this}}get(e){if(ne(e))return this.value;{const t=te(e),r=this.children.get(t);return r?r.get(Ae(e)):null}}setTree(e,t){if(ne(e))return t;{const r=te(e),i=(this.children.get(r)||new Be(null)).setTree(Ae(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Be(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(be(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,ue(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(ne(e))return null;{const i=te(e),o=this.children.get(i);return o?o.findOnPath_(Ae(e),be(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ue(),t)}foreachOnPath_(e,t,r){if(ne(e))return this;{this.value&&r(t,this.value);const s=te(e),i=this.children.get(s);return i?i.foreachOnPath_(Ae(e),be(t,s),r):new Be(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(be(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new Be(null))}}function To(n,e,t){if(ne(e))return new Vt(new Be(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=lt(s,e);return i=i.updateChild(o,t),new Vt(n.writeTree_.set(s,i))}else{const s=new Be(t),i=n.writeTree_.setTree(e,s);return new Vt(i)}}}function cu(n,e,t){let r=n;return We(t,(s,i)=>{r=To(r,be(e,s),i)}),r}function km(n,e){if(ne(e))return Vt.empty();{const t=n.writeTree_.setTree(e,new Be(null));return new Vt(t)}}function lu(n,e){return Or(n,e)!=null}function Or(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(lt(t.path,e)):null}function Pm(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(we,(r,s)=>{e.push(new re(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new re(r,s.value))}),e}function zn(n,e){if(ne(e))return n;{const t=Or(n,e);return t!=null?new Vt(new Be(t)):new Vt(n.writeTree_.subtree(e))}}function xu(n){return n.writeTree_.isEmpty()}function Hs(n,e){return Sm(ue(),n.writeTree_,e)}function Sm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(U(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=Sm(be(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(be(n,".priority"),r)),t}}/**
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
 */function L0(n,e){return Mm(e,n)}function PD(n,e,t,r,s){U(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=To(n.visibleWrites,e,t)),n.lastWriteId=r}function SD(n,e,t,r){U(r>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:r,visible:!0}),n.visibleWrites=cu(n.visibleWrites,e,t),n.lastWriteId=r}function RD(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function ND(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);U(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&OD(a,r.path)?s=!1:It(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return VD(n),!0;if(r.snap)n.visibleWrites=km(n.visibleWrites,r.path);else{const a=r.children;We(a,l=>{n.visibleWrites=km(n.visibleWrites,be(r.path,l))})}return!0}else return!1}function OD(n,e){if(n.snap)return It(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&It(be(n.path,t),e))return!0;return!1}function VD(n){n.visibleWrites=Rm(n.allWrites,MD,ue()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function MD(n){return n.visible}function Rm(n,e,t){let r=Vt.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)It(t,o)?(a=lt(t,o),r=To(r,a,i.snap)):It(o,t)&&(a=lt(o,t),r=To(r,ue(),i.snap.getChild(a)));else if(i.children){if(It(t,o))a=lt(t,o),r=cu(r,a,i.children);else if(It(o,t))if(a=lt(o,t),ne(a))r=cu(r,ue(),i.children);else{const l=rr(i.children,te(a));if(l){const x=l.getChild(Ae(a));r=To(r,ue(),x)}}}else throw Hr("WriteRecord should have .snap or .children")}}return r}function Nm(n,e,t,r,s){if(!r&&!s){const i=Or(n.visibleWrites,e);if(i!=null)return i;{const o=zn(n.visibleWrites,e);if(xu(o))return t;if(t==null&&!lu(o,ue()))return null;{const a=t||X.EMPTY_NODE;return Hs(o,a)}}}else{const i=zn(n.visibleWrites,e);if(!s&&xu(i))return t;if(!s&&t==null&&!lu(i,ue()))return null;{const o=function(x){return(x.visible||s)&&(!r||!~r.indexOf(x.writeId))&&(It(x.path,e)||It(e,x.path))},a=Rm(n.allWrites,o,e),l=t||X.EMPTY_NODE;return Hs(a,l)}}}function LD(n,e,t){let r=X.EMPTY_NODE;const s=Or(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(we,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=zn(n.visibleWrites,e);return t.forEachChild(we,(o,a)=>{const l=Hs(zn(i,new _e(o)),a);r=r.updateImmediateChild(o,l)}),Pm(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=zn(n.visibleWrites,e);return Pm(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function UD(n,e,t,r,s){U(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=be(e,t);if(lu(n.visibleWrites,i))return null;{const o=zn(n.visibleWrites,i);return xu(o)?s.getChild(t):Hs(o,s.getChild(t))}}function jD(n,e,t,r){const s=be(e,t),i=Or(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=zn(n.visibleWrites,s);return Hs(o,r.getNode().getImmediateChild(t))}else return null}function qD(n,e){return Or(n.visibleWrites,e)}function zD(n,e,t,r,s,i,o){let a;const l=zn(n.visibleWrites,e),x=Or(l,ue());if(x!=null)a=x;else if(t!=null)a=Hs(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&h.length<s;)u(p,r)!==0&&h.push(p),p=f.getNext();return h}else return[]}function $D(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function U0(n,e,t,r){return Nm(n.writeTree,n.treePath,e,t,r)}function uu(n,e){return LD(n.writeTree,n.treePath,e)}function Om(n,e,t,r){return UD(n.writeTree,n.treePath,e,t,r)}function j0(n,e){return qD(n.writeTree,be(n.treePath,e))}function WD(n,e,t,r,s,i){return zD(n.writeTree,n.treePath,e,t,r,s,i)}function hu(n,e,t){return jD(n.writeTree,n.treePath,e,t)}function Vm(n,e){return Mm(be(n.treePath,e),n.writeTree)}function Mm(n,e){return{treePath:n,writeTree:e}}/**
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
 */class KD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;U(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),U(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,Do(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,Bo(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,Ws(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,Do(r,e.snapshotNode,s.oldSnap));else throw Hr("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class GD{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Lm=new GD;class du{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hu(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),i=WD(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function HD(n){return{filter:n}}function QD(n,e){U(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),U(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function YD(n,e,t,r,s){const i=new KD;let o,a;if(t.type===Ot.OVERWRITE){const x=t;x.source.fromUser?o=fu(n,e,x.path,x.snap,r,s,i):(U(x.source.fromServer,"Unknown source."),a=x.source.tagged||e.serverCache.isFiltered()&&!ne(x.path),o=q0(n,e,x.path,x.snap,r,s,a,i))}else if(t.type===Ot.MERGE){const x=t;x.source.fromUser?o=JD(n,e,x.path,x.children,r,s,i):(U(x.source.fromServer,"Unknown source."),a=x.source.tagged||e.serverCache.isFiltered(),o=Eu(n,e,x.path,x.children,r,s,a,i))}else if(t.type===Ot.ACK_USER_WRITE){const x=t;x.revert?o=t7(n,e,x.path,r,s,i):o=ZD(n,e,x.path,x.affectedTree,r,s,i)}else if(t.type===Ot.LISTEN_COMPLETE)o=e7(n,e,t.path,r,i);else throw Hr("Unknown operation type: "+t.type);const l=i.getChanges();return XD(e,o,l),{viewCache:o,changes:l}}function XD(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=M0(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(Fm(M0(e)))}}function Um(n,e,t,r,s,i){const o=e.eventCache;if(j0(r,t)!=null)return e;{let a,l;if(ne(t))if(U(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const x=Nr(e),h=x instanceof X?x:X.EMPTY_NODE,u=uu(r,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const x=U0(r,Nr(e));a=n.filter.updateFullNode(e.eventCache.getNode(),x,i)}else{const x=te(t);if(x===".priority"){U(jn(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Om(r,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=Ae(t);let u;if(o.isCompleteForChild(x)){l=e.serverCache.getNode();const f=Om(r,t,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(x).updateChild(h,f):u=o.getNode().getImmediateChild(x)}else u=hu(r,x,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),x,u,h,s,i):a=o.getNode()}}return Io(e,a,o.isFullyInitialized()||ne(t),n.filter.filtersNodes())}}function q0(n,e,t,r,s,i,o,a){const l=e.serverCache;let x;const h=o?n.filter:n.filter.getIndexedFilter();if(ne(t))x=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,r);x=h.updateFullNode(l.getNode(),p,null)}else{const p=te(t);if(!l.isCompleteForPath(t)&&jn(t)>1)return e;const A=Ae(t),v=l.getNode().getImmediateChild(p).updateChild(A,r);p===".priority"?x=h.updatePriority(l.getNode(),v):x=h.updateChild(l.getNode(),p,v,A,Lm,null)}const u=bm(e,x,l.isFullyInitialized()||ne(t),h.filtersNodes()),f=new du(s,u,i);return Um(n,u,t,s,f,a)}function fu(n,e,t,r,s,i,o){const a=e.eventCache;let l,x;const h=new du(s,e,i);if(ne(t))x=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Io(e,x,!0,n.filter.filtersNodes());else{const u=te(t);if(u===".priority")x=n.filter.updatePriority(e.eventCache.getNode(),r),l=Io(e,x,a.isFullyInitialized(),a.isFiltered());else{const f=Ae(t),p=a.getNode().getImmediateChild(u);let A;if(ne(f))A=r;else{const w=h.getCompleteChild(u);w!=null?Hx(f)===".priority"&&w.getChild(pm(f)).isEmpty()?A=w:A=w.updateChild(f,r):A=X.EMPTY_NODE}if(p.equals(A))l=e;else{const w=n.filter.updateChild(a.getNode(),u,A,f,h,o);l=Io(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function jm(n,e){return n.eventCache.isCompleteForChild(e)}function JD(n,e,t,r,s,i,o){let a=e;return r.foreach((l,x)=>{const h=be(t,l);jm(e,te(h))&&(a=fu(n,a,h,x,s,i,o))}),r.foreach((l,x)=>{const h=be(t,l);jm(e,te(h))||(a=fu(n,a,h,x,s,i,o))}),a}function qm(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Eu(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,x;ne(t)?x=r:x=new Be(null).setTree(t,r);const h=e.serverCache.getNode();return x.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),A=qm(n,p,f);l=q0(n,l,new _e(u),A,s,i,o,a)}}),x.children.inorderTraversal((u,f)=>{const p=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!p){const A=e.serverCache.getNode().getImmediateChild(u),w=qm(n,A,f);l=q0(n,l,new _e(u),w,s,i,o,a)}}),l}function ZD(n,e,t,r,s,i,o){if(j0(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ne(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return q0(n,e,t,l.getNode().getChild(t),s,i,a,o);if(ne(t)){let x=new Be(null);return l.getNode().forEachChild(zs,(h,u)=>{x=x.set(new _e(h),u)}),Eu(n,e,t,x,s,i,a,o)}else return e}else{let x=new Be(null);return r.foreach((h,u)=>{const f=be(t,h);l.isCompleteForPath(f)&&(x=x.set(h,l.getNode().getChild(f)))}),Eu(n,e,t,x,s,i,a,o)}}function e7(n,e,t,r,s){const i=e.serverCache,o=bm(e,i.getNode(),i.isFullyInitialized()||ne(t),i.isFiltered());return Um(n,o,t,r,Lm,s)}function t7(n,e,t,r,s,i){let o;if(j0(r,t)!=null)return e;{const a=new du(r,e,s),l=e.eventCache.getNode();let x;if(ne(t)||te(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=U0(r,Nr(e));else{const u=e.serverCache.getNode();U(u instanceof X,"serverChildren would be complete if leaf node"),h=uu(r,u)}h=h,x=n.filter.updateFullNode(l,h,i)}else{const h=te(t);let u=hu(r,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?x=n.filter.updateChild(l,h,u,Ae(t),a,i):e.eventCache.getNode().hasChild(h)?x=n.filter.updateChild(l,h,X.EMPTY_NODE,Ae(t),a,i):x=l,x.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=U0(r,Nr(e)),o.isLeafNode()&&(x=n.filter.updateFullNode(x,o,i)))}return o=e.serverCache.isFullyInitialized()||j0(r,ue())!=null,Io(e,x,o,n.filter.filtersNodes())}}/**
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
 */class n7{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new eu(r.getIndex()),i=CD(r);this.processor_=HD(i);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(X.EMPTY_NODE,o.getNode(),null),x=i.updateFullNode(X.EMPTY_NODE,a.getNode(),null),h=new qn(l,o.isFullyInitialized(),s.filtersNodes()),u=new qn(x,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=V0(u,h),this.eventGenerator_=new wD(this.query_)}get query(){return this.query_}}function r7(n){return n.viewCache_.serverCache.getNode()}function s7(n){return M0(n.viewCache_)}function i7(n,e){const t=Nr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ne(e)&&!t.getImmediateChild(te(e)).isEmpty())?t.getChild(e):null}function zm(n){return n.eventRegistrations_.length===0}function o7(n,e){n.eventRegistrations_.push(e)}function $m(n,e,t){const r=[];if(t){U(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<n.eventRegistrations_.length;++i){const o=n.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(i+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return r}function Wm(n,e,t,r){e.type===Ot.MERGE&&e.source.queryId!==null&&(U(Nr(n.viewCache_),"We should always have a full cache before handling merges"),U(M0(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=YD(n.processor_,s,e,t,r);return QD(n.processor_,i.viewCache),U(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,Km(n,i.changes,i.viewCache.eventCache.getNode(),null)}function a7(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(we,(i,o)=>{r.push(Ws(i,o))}),t.isFullyInitialized()&&r.push(Fm(t.getNode())),Km(n,r,t.getNode(),e)}function Km(n,e,t,r){const s=r?[r]:n.eventRegistrations_;return ID(n.eventGenerator_,e,t,s)}/**
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
 */let z0;class Gm{constructor(){this.views=new Map}}function c7(n){U(!z0,"__referenceConstructor has already been defined"),z0=n}function l7(){return U(z0,"Reference.ts has not been loaded"),z0}function x7(n){return n.views.size===0}function pu(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return U(i!=null,"SyncTree gave us an op for an invalid query."),Wm(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(Wm(o,e,t,r));return i}}function Hm(n,e,t,r,s){const i=e._queryIdentifier,o=n.views.get(i);if(!o){let a=U0(t,s?r:null),l=!1;a?l=!0:r instanceof X?(a=uu(t,r),l=!1):(a=X.EMPTY_NODE,l=!1);const x=V0(new qn(a,l,!1),new qn(r,s,!1));return new n7(e,x)}return o}function u7(n,e,t,r,s,i){const o=Hm(n,e,r,s,i);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),o7(o,t),a7(o,t)}function h7(n,e,t,r){const s=e._queryIdentifier,i=[];let o=[];const a=Wn(n);if(s==="default")for(const[l,x]of n.views.entries())o=o.concat($m(x,t,r)),zm(x)&&(n.views.delete(l),x.query._queryParams.loadsAllData()||i.push(x.query));else{const l=n.views.get(s);l&&(o=o.concat($m(l,t,r)),zm(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Wn(n)&&i.push(new(l7())(e._repo,e._path)),{removed:i,events:o}}function Qm(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function $n(n,e){let t=null;for(const r of n.views.values())t=t||i7(r,e);return t}function Ym(n,e){if(e._queryParams.loadsAllData())return $0(n);{const r=e._queryIdentifier;return n.views.get(r)}}function Xm(n,e){return Ym(n,e)!=null}function Wn(n){return $0(n)!=null}function $0(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let W0;function d7(n){U(!W0,"__referenceConstructor has already been defined"),W0=n}function f7(){return U(W0,"Reference.ts has not been loaded"),W0}let E7=1;class Jm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Be(null),this.pendingWriteTree_=$D(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function mu(n,e,t,r,s){return PD(n.pendingWriteTree_,e,t,r,s),s?Qs(n,new Rr(su(),e,t)):[]}function p7(n,e,t,r){SD(n.pendingWriteTree_,e,t,r);const s=Be.fromObject(t);return Qs(n,new Gs(su(),e,s))}function Kn(n,e,t=!1){const r=RD(n.pendingWriteTree_,e);if(ND(n.pendingWriteTree_,e)){let i=new Be(null);return r.snap!=null?i=i.set(ue(),!0):We(r.children,o=>{i=i.set(new _e(o),!0)}),Qs(n,new O0(r.path,i,t))}else return[]}function bo(n,e,t){return Qs(n,new Rr(iu(),e,t))}function m7(n,e,t){const r=Be.fromObject(t);return Qs(n,new Gs(iu(),e,r))}function g7(n,e){return Qs(n,new Fo(iu(),e))}function _7(n,e,t){const r=_u(n,t);if(r){const s=Cu(r),i=s.path,o=s.queryId,a=lt(i,e),l=new Fo(ou(o),a);return Au(n,i,l)}else return[]}function K0(n,e,t,r,s=!1){const i=e._path,o=n.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Xm(o,e))){const l=h7(o,e,t,r);x7(o)&&(n.syncPointTree_=n.syncPointTree_.remove(i));const x=l.removed;if(a=l.events,!s){const h=x.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(i,(f,p)=>Wn(p));if(h&&!u){const f=n.syncPointTree_.subtree(i);if(!f.isEmpty()){const p=y7(f);for(let A=0;A<p.length;++A){const w=p[A],v=w.query,R=n8(n,w);n.listenProvider_.startListening(Po(v),ko(n,v),R.hashFn,R.onComplete)}}}!u&&x.length>0&&!r&&(h?n.listenProvider_.stopListening(Po(e),null):x.forEach(f=>{const p=n.queryToTagMap.get(H0(f));n.listenProvider_.stopListening(Po(f),p)}))}B7(n,x)}return a}function Zm(n,e,t,r){const s=_u(n,r);if(s!=null){const i=Cu(s),o=i.path,a=i.queryId,l=lt(o,e),x=new Rr(ou(a),l,t);return Au(n,o,x)}else return[]}function C7(n,e,t,r){const s=_u(n,r);if(s){const i=Cu(s),o=i.path,a=i.queryId,l=lt(o,e),x=Be.fromObject(t),h=new Gs(ou(a),l,x);return Au(n,o,h)}else return[]}function gu(n,e,t,r=!1){const s=e._path;let i=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,p)=>{const A=lt(f,s);i=i||$n(p,A),o=o||Wn(p)});let a=n.syncPointTree_.get(s);a?(o=o||Wn(a),i=i||$n(a,ue())):(a=new Gm,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=X.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,A)=>{const w=$n(A,ue());w&&(i=i.updateImmediateChild(p,w))}));const x=Xm(a,e);if(!x&&!e._queryParams.loadsAllData()){const f=H0(e);U(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=D7();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const h=L0(n.pendingWriteTree_,s);let u=u7(a,e,t,h,i,l);if(!x&&!o&&!r){const f=Ym(a,e);u=u.concat(v7(n,e,f))}return u}function G0(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),x=$n(a,l);if(x)return x});return Nm(s,e,i,t,!0)}function A7(n,e){const t=e._path;let r=null;n.syncPointTree_.foreachOnPath(t,(x,h)=>{const u=lt(x,t);r=r||$n(h,u)});let s=n.syncPointTree_.get(t);s?r=r||$n(s,ue()):(s=new Gm,n.syncPointTree_=n.syncPointTree_.set(t,s));const i=r!=null,o=i?new qn(r,!0,!1):null,a=L0(n.pendingWriteTree_,e._path),l=Hm(s,e,a,i?o.getNode():X.EMPTY_NODE,i);return s7(l)}function Qs(n,e){return e8(e,n.syncPointTree_,null,L0(n.pendingWriteTree_,ue()))}function e8(n,e,t,r){if(ne(n.path))return t8(n,e,t,r);{const s=e.get(ue());t==null&&s!=null&&(t=$n(s,ue()));let i=[];const o=te(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const x=t?t.getImmediateChild(o):null,h=Vm(r,o);i=i.concat(e8(a,l,x,h))}return s&&(i=i.concat(pu(s,n,r,t))),i}}function t8(n,e,t,r){const s=e.get(ue());t==null&&s!=null&&(t=$n(s,ue()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,x=Vm(r,o),h=n.operationForChild(o);h&&(i=i.concat(t8(h,a,l,x)))}),s&&(i=i.concat(pu(s,n,r,t))),i}function n8(n,e){const t=e.query,r=ko(n,t);return{hashFn:()=>(r7(e)||X.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?_7(n,t._path,r):g7(n,t._path);{const i=gB(s,t);return K0(n,t,null,i)}}}}function ko(n,e){const t=H0(e);return n.queryToTagMap.get(t)}function H0(n){return n._path.toString()+"$"+n._queryIdentifier}function _u(n,e){return n.tagToQueryMap.get(e)}function Cu(n){const e=n.indexOf("$");return U(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new _e(n.substr(0,e))}}function Au(n,e,t){const r=n.syncPointTree_.get(e);U(r,"Missing sync point for query tag that we're tracking");const s=L0(n.pendingWriteTree_,e);return pu(r,t,s,null)}function y7(n){return n.fold((e,t,r)=>{if(t&&Wn(t))return[$0(t)];{let s=[];return t&&(s=Qm(t)),We(r,(i,o)=>{s=s.concat(o)}),s}})}function Po(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(f7())(n._repo,n._path):n}function B7(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const s=H0(r),i=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(i)}}}function D7(){return E7++}function v7(n,e,t){const r=e._path,s=ko(n,e),i=n8(n,t),o=n.listenProvider_.startListening(Po(e),s,i.hashFn,i.onComplete),a=n.syncPointTree_.subtree(r);if(s)U(!Wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((x,h,u)=>{if(!ne(x)&&h&&Wn(h))return[$0(h).query];{let f=[];return h&&(f=f.concat(Qm(h).map(p=>p.query))),We(u,(p,A)=>{f=f.concat(A)}),f}});for(let x=0;x<l.length;++x){const h=l[x];n.listenProvider_.stopListening(Po(h),ko(n,h))}}return o}/**
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
 */class yu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new yu(t)}node(){return this.node_}}class Bu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=be(this.path_,e);return new Bu(this.syncTree_,t)}node(){return G0(this.syncTree_,this.path_)}}const F7=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},r8=function(n,e,t){if(!n||typeof n!="object")return n;if(U(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return w7(n[".sv"],e,t);if(typeof n[".sv"]=="object")return I7(n[".sv"],e);U(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},w7=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:U(!1,"Unexpected server value: "+n)}},I7=function(n,e,t){n.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&U(!1,"Unexpected increment value: "+r);const s=e.node();if(U(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},s8=function(n,e,t,r){return vu(e,new Bu(t,n),r)},Du=function(n,e,t){return vu(n,new yu(e),t)};function vu(n,e,t){const r=n.getPriority().val(),s=r8(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=r8(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Ge(a,ke(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ge(s))),o.forEachChild(we,(a,l)=>{const x=vu(l,e.getImmediateChild(a),t);x!==l&&(i=i.updateImmediateChild(a,x))}),i}}/**
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
 */class Fu{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function Q0(n,e){let t=e instanceof _e?e:new _e(e),r=n,s=te(t);for(;s!==null;){const i=rr(r.node.children,s)||{children:{},childCount:0};r=new Fu(s,r,i),t=Ae(t),s=te(t)}return r}function Vr(n){return n.node.value}function wu(n,e){n.node.value=e,Iu(n)}function i8(n){return n.node.childCount>0}function T7(n){return Vr(n)===void 0&&!i8(n)}function Y0(n,e){We(n.node.children,(t,r)=>{e(new Fu(t,n,r))})}function o8(n,e,t,r){t&&e(n),Y0(n,s=>{o8(s,e,!0)})}function b7(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function So(n){return new _e(n.parent===null?n.name:So(n.parent)+"/"+n.name)}function Iu(n){n.parent!==null&&k7(n.parent,n.name,n)}function k7(n,e,t){const r=T7(t),s=kt(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,Iu(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Iu(n))}/**
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
 */const P7=/[\[\].#$\/\u0000-\u001F\u007F]/,S7=/[\[\].#$\u0000-\u001F\u007F]/,Tu=10*1024*1024,bu=function(n){return typeof n=="string"&&n.length!==0&&!P7.test(n)},a8=function(n){return typeof n=="string"&&n.length!==0&&!S7.test(n)},R7=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),a8(n)},ku=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!F0(n)||n&&typeof n=="object"&&kt(n,".sv")},X0=function(n,e,t,r){r&&e===void 0||Ro(Yr(n,"value"),e,t)},Ro=function(n,e,t){const r=t instanceof _e?new JB(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Sr(r));if(typeof e=="function")throw new Error(n+"contains a function "+Sr(r)+" with contents = "+e.toString());if(F0(e))throw new Error(n+"contains "+e.toString()+" "+Sr(r));if(typeof e=="string"&&e.length>Tu/3&&ia(e)>Tu)throw new Error(n+"contains a string greater than "+Tu+" utf8 bytes "+Sr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(We(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!bu(o)))throw new Error(n+" contains an invalid key ("+o+") "+Sr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZB(r,o),Ro(n,a,r),eD(r)}),s&&i)throw new Error(n+' contains ".value" child '+Sr(r)+" in addition to actual children.")}},N7=function(n,e){let t,r;for(t=0;t<e.length;t++){r=e[t];const i=_o(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!bu(i[o]))throw new Error(n+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(XB);let s=null;for(t=0;t<e.length;t++){if(r=e[t],s!==null&&It(s,r))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},c8=function(n,e,t,r){const s=Yr(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];We(e,(o,a)=>{const l=new _e(o);if(Ro(s,a,be(t,l)),Hx(l)===".priority"&&!ku(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),N7(s,i)},O7=function(n,e,t){if(F0(e))throw new Error(Yr(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ku(e))throw new Error(Yr(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},l8=function(n,e,t,r){if(!a8(t))throw new Error(Yr(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},V7=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),l8(n,e,t)},Gn=function(n,e){if(te(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},M7=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!R7(t))throw new Error(Yr(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class L7{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function J0(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!Qx(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function x8(n,e,t){J0(n,t),u8(n,r=>Qx(r,e))}function At(n,e,t){J0(n,t),u8(n,r=>It(r,e)||It(e,r))}function u8(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(U7(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function U7(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();fo&&$e("event: "+t.toString()),js(r)}}}/**
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
 */const h8="repo_interrupt",j7=25;class q7{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new L7,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=N0(),this.transactionQueueTree_=new Fu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function z7(n,e,t){if(n.stats_=Wx(n.repoInfo_),n.forceRestClient_||yB())n.server_=new R0(n.repoInfo_,(r,s,i,o)=>{f8(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>E8(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new hn(n.repoInfo_,e,(r,s,i,o)=>{f8(n,r,s,i,o)},r=>{E8(n,r)},r=>{$7(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=wB(n.repoInfo_,()=>new FD(n.stats_,n.server_)),n.infoData_=new AD,n.infoSyncTree_=new Jm({startListening:(r,s,i,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=bo(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pu(n,"connected",!1),n.serverSyncTree_=new Jm({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,l)=>{const x=o(a,l);At(n.eventQueue_,r._path,x)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function d8(n){const t=n.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function No(n){return F7({timestamp:d8(n)})}function f8(n,e,t,r,s){n.dataUpdateCount++;const i=new _e(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const l=sa(t,x=>ke(x));o=C7(n.serverSyncTree_,i,l,s)}else{const l=ke(t);o=Zm(n.serverSyncTree_,i,l,s)}else if(r){const l=sa(t,x=>ke(x));o=m7(n.serverSyncTree_,i,l)}else{const l=ke(t);o=bo(n.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Xs(n,i)),At(n.eventQueue_,a,o)}function E8(n,e){Pu(n,"connected",e),e===!1&&H7(n)}function $7(n,e){We(e,(t,r)=>{Pu(n,t,r)})}function Pu(n,e,t){const r=new _e("/.info/"+e),s=ke(t);n.infoData_.updateSnapshot(r,s);const i=bo(n.infoSyncTree_,r,s);At(n.eventQueue_,r,i)}function Z0(n){return n.nextWriteId_++}function W7(n,e,t){const r=A7(n.serverSyncTree_,e);return r!=null?Promise.resolve(r):n.server_.get(e).then(s=>{const i=ke(s).withIndex(e._queryParams.getIndex());gu(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=bo(n.serverSyncTree_,e._path,i);else{const a=ko(n.serverSyncTree_,e);o=Zm(n.serverSyncTree_,e._path,i,a)}return At(n.eventQueue_,e._path,o),K0(n.serverSyncTree_,e,t,null,!0),i},s=>(Ys(n,"get for query "+Ue(e)+" failed: "+s),Promise.reject(new Error(s))))}function K7(n,e,t,r,s){Ys(n,"set",{path:e.toString(),value:t,priority:r});const i=No(n),o=ke(t,r),a=G0(n.serverSyncTree_,e),l=Du(o,a,i),x=Z0(n),h=mu(n.serverSyncTree_,e,l,x,!0);J0(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const A=f==="ok";A||ct("set at "+e+" failed: "+f);const w=Kn(n.serverSyncTree_,x,!A);At(n.eventQueue_,e,w),Hn(n,s,f,p)});const u=Ru(n,e);Xs(n,u),At(n.eventQueue_,u,[])}function G7(n,e,t,r){Ys(n,"update",{path:e.toString(),value:t});let s=!0;const i=No(n),o={};if(We(t,(a,l)=>{s=!1,o[a]=s8(be(e,a),ke(l),n.serverSyncTree_,i)}),s)$e("update() called with empty data.  Don't do anything."),Hn(n,r,"ok",void 0);else{const a=Z0(n),l=p7(n.serverSyncTree_,e,o,a);J0(n.eventQueue_,l),n.server_.merge(e.toString(),t,(x,h)=>{const u=x==="ok";u||ct("update at "+e+" failed: "+x);const f=Kn(n.serverSyncTree_,a,!u),p=f.length>0?Xs(n,e):e;At(n.eventQueue_,p,f),Hn(n,r,x,h)}),We(t,x=>{const h=Ru(n,be(e,x));Xs(n,h)}),At(n.eventQueue_,e,[])}}function H7(n){Ys(n,"onDisconnectEvents");const e=No(n),t=N0();ru(n.onDisconnect_,ue(),(s,i)=>{const o=s8(s,i,n.serverSyncTree_,e);Ks(t,s,o)});let r=[];ru(t,ue(),(s,i)=>{r=r.concat(bo(n.serverSyncTree_,s,i));const o=Ru(n,s);Xs(n,o)}),n.onDisconnect_=N0(),At(n.eventQueue_,ue(),r)}function Q7(n,e,t){n.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&nu(n.onDisconnect_,e),Hn(n,t,r,s)})}function p8(n,e,t,r){const s=ke(t);n.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&Ks(n.onDisconnect_,e,s),Hn(n,r,i,o)})}function Y7(n,e,t,r,s){const i=ke(t,r);n.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&Ks(n.onDisconnect_,e,i),Hn(n,s,o,a)})}function X7(n,e,t,r){if(Tc(t)){$e("onDisconnect().update() called with empty data.  Don't do anything."),Hn(n,r,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(s,i)=>{s==="ok"&&We(t,(o,a)=>{const l=ke(a);Ks(n.onDisconnect_,be(e,o),l)}),Hn(n,r,s,i)})}function J7(n,e,t){let r;te(e._path)===".info"?r=gu(n.infoSyncTree_,e,t):r=gu(n.serverSyncTree_,e,t),x8(n.eventQueue_,e._path,r)}function m8(n,e,t){let r;te(e._path)===".info"?r=K0(n.infoSyncTree_,e,t):r=K0(n.serverSyncTree_,e,t),x8(n.eventQueue_,e._path,r)}function g8(n){n.persistentConnection_&&n.persistentConnection_.interrupt(h8)}function Z7(n){n.persistentConnection_&&n.persistentConnection_.resume(h8)}function Ys(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),$e(t,...e)}function Hn(n,e,t,r){e&&js(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function ev(n,e,t,r,s,i){Ys(n,"transaction on "+e);const o={path:e,update:t,onComplete:r,status:null,order:Vp(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Su(n,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ro("transaction failed: Data returned ",l,o.path),o.status=0;const x=Q0(n.transactionQueueTree_,e),h=Vr(x)||[];h.push(o),wu(x,h);let u;typeof l=="object"&&l!==null&&kt(l,".priority")?(u=rr(l,".priority"),U(ku(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(G0(n.serverSyncTree_,e)||X.EMPTY_NODE).getPriority().val();const f=No(n),p=ke(l,u),A=Du(p,a,f);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=A,o.currentWriteId=Z0(n);const w=mu(n.serverSyncTree_,e,A,o.currentWriteId,o.applyLocally);At(n.eventQueue_,e,w),ec(n,n.transactionQueueTree_)}}function Su(n,e,t){return G0(n.serverSyncTree_,e,t)||X.EMPTY_NODE}function ec(n,e=n.transactionQueueTree_){if(e||tc(n,e),Vr(e)){const t=C8(n,e);U(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&tv(n,So(e),t)}else i8(e)&&Y0(e,t=>{ec(n,t)})}function tv(n,e,t){const r=t.map(x=>x.currentWriteId),s=Su(n,e,r);let i=s;const o=s.hash();for(let x=0;x<t.length;x++){const h=t[x];U(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=lt(e,h.path);i=i.updateChild(u,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;n.server_.put(l.toString(),a,x=>{Ys(n,"transaction put response",{path:l.toString(),status:x});let h=[];if(x==="ok"){const u=[];for(let f=0;f<t.length;f++)t[f].status=2,h=h.concat(Kn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&u.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();tc(n,Q0(n.transactionQueueTree_,e)),ec(n,n.transactionQueueTree_),At(n.eventQueue_,e,h);for(let f=0;f<u.length;f++)js(u[f])}else{if(x==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ct("transaction at "+l.toString()+" failed: "+x);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=x}Xs(n,e)}},o)}function Xs(n,e){const t=_8(n,e),r=So(t),s=C8(n,t);return nv(n,s,r),r}function nv(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],x=lt(t,l.path);let h=!1,u;if(U(x!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Kn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=j7)h=!0,u="maxretry",s=s.concat(Kn(n.serverSyncTree_,l.currentWriteId,!0));else{const f=Su(n,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Ro("transaction failed: Data returned ",p,l.path);let A=ke(p);typeof p=="object"&&p!=null&&kt(p,".priority")||(A=A.updatePriority(f.getPriority()));const v=l.currentWriteId,R=No(n),V=Du(A,f,R);l.currentOutputSnapshotRaw=A,l.currentOutputSnapshotResolved=V,l.currentWriteId=Z0(n),o.splice(o.indexOf(v),1),s=s.concat(mu(n.serverSyncTree_,l.path,V,l.currentWriteId,l.applyLocally)),s=s.concat(Kn(n.serverSyncTree_,v,!0))}else h=!0,u="nodata",s=s.concat(Kn(n.serverSyncTree_,l.currentWriteId,!0))}At(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,(function(f){setTimeout(f,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}tc(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)js(r[a]);ec(n,n.transactionQueueTree_)}function _8(n,e){let t,r=n.transactionQueueTree_;for(t=te(e);t!==null&&Vr(r)===void 0;)r=Q0(r,t),e=Ae(e),t=te(e);return r}function C8(n,e){const t=[];return A8(n,e,t),t.sort((r,s)=>r.order-s.order),t}function A8(n,e,t){const r=Vr(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);Y0(e,s=>{A8(n,s,t)})}function tc(n,e){const t=Vr(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,wu(e,t.length>0?t:void 0)}Y0(e,r=>{tc(n,r)})}function Ru(n,e){const t=So(_8(n,e)),r=Q0(n.transactionQueueTree_,e);return b7(r,s=>{Nu(n,s)}),Nu(n,r),o8(r,s=>{Nu(n,s)}),t}function Nu(n,e){const t=Vr(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(U(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(U(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Kn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?wu(e,void 0):t.length=i+1,At(n.eventQueue_,So(e),s);for(let o=0;o<r.length;o++)js(r[o])}}/**
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
 */function rv(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function sv(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ct(`Invalid query segment '${t}' in query '${n}'`)}return e}const y8=function(n,e){const t=iv(n),r=t.namespace;t.domain==="firebase.com"&&un(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||dB();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Jp(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new _e(t.pathString)}},iv=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",l=443;if(typeof n=="string"){let x=n.indexOf("//");x>=0&&(a=n.substring(0,x-1),n=n.substring(x+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=rv(n.substring(h,u)));const f=sv(n.substring(Math.min(n.length,u)));x=e.indexOf(":"),x>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(x+1),10)):x=e.length;const p=e.slice(0,x);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const A=e.indexOf(".");r=e.substring(0,A).toLowerCase(),t=e.substring(A+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */const B8="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ov=(function(){let n=0;const e=[];return function(t){const r=t===n;n=t;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=B8.charAt(t%64),t=Math.floor(t/64);U(t===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=B8.charAt(e[s]);return U(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class D8{constructor(e,t,r,s){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class v8{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class F8{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return U(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class av{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new bt;return Q7(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Gn("OnDisconnect.remove",this._path);const e=new bt;return p8(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Gn("OnDisconnect.set",this._path),X0("OnDisconnect.set",e,this._path,!1);const t=new bt;return p8(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Gn("OnDisconnect.setWithPriority",this._path),X0("OnDisconnect.setWithPriority",e,this._path,!1),O7("OnDisconnect.setWithPriority",t);const r=new bt;return Y7(this._repo,this._path,e,t,r.wrapCallback(()=>{})),r.promise}update(e){Gn("OnDisconnect.update",this._path),c8("OnDisconnect.update",e,this._path);const t=new bt;return X7(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Ou{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return ne(this._path)?null:Hx(this._path)}get ref(){return new Mt(this._repo,this._path)}get _queryIdentifier(){const e=Im(this._queryParams),t=Ux(e);return t==="{}"?"default":t}get _queryObject(){return Im(this._queryParams)}isEqual(e){if(e=ce(e),!(e instanceof Ou))return!1;const t=this._repo===e._repo,r=Qx(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+YB(this._path)}}class Mt extends Ou{constructor(e,t){super(e,t,new tu,!1)}get parent(){const e=pm(this._path);return e===null?null:new Mt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Mr{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new _e(e),r=Js(this.ref,e);return new Mr(this._node.getChild(t),r,we)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Mr(s,Js(this.ref,r),we)))}hasChild(e){const t=new _e(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function en(n,e){return n=ce(n),n._checkNotDeleted("ref"),e!==void 0?Js(n._root,e):n._root}function Js(n,e){return n=ce(n),te(n._path)===null?V7("child","path",e):l8("child","path",e),new Mt(n._repo,be(n._path,e))}function w8(n){return n=ce(n),new av(n._repo,n._path)}function cv(n,e){n=ce(n),Gn("push",n._path),X0("push",e,n._path,!0);const t=d8(n._repo),r=ov(t),s=Js(n,r),i=Js(n,r);let o;return e!=null?o=Vu(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function lv(n){return Gn("remove",n._path),Vu(n,null)}function Vu(n,e){n=ce(n),Gn("set",n._path),X0("set",e,n._path,!1);const t=new bt;return K7(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function xv(n,e){c8("update",e,n._path);const t=new bt;return G7(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function uv(n){n=ce(n);const e=new F8(()=>{}),t=new nc(e);return W7(n._repo,n,t).then(r=>new Mr(r,new Mt(n._repo,n._path),n._queryParams.getIndex()))}class nc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new D8("value",this,new Mr(e.snapshotNode,new Mt(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new v8(this,e,t):null}matches(e){return e instanceof nc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Mu{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new v8(this,e,t):null}createEvent(e,t){U(e.childName!=null,"Child events should have a childName.");const r=Js(new Mt(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new D8(e.type,this,new Mr(e.snapshotNode,r,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Mu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function I8(n,e,t,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=t,x=(h,u)=>{m8(n._repo,n,a),l(h,u)};x.userCallback=t.userCallback,x.context=t.context,t=x}const o=new F8(t,i||void 0),a=e==="value"?new nc(o):new Mu(e,o);return J7(n._repo,n,a),()=>m8(n._repo,n,a)}function T8(n,e,t,r){return I8(n,"value",e,t,r)}function hv(n,e,t,r){return I8(n,"child_added",e,t,r)}c7(Mt),d7(Mt);/**
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
 */const dv="FIREBASE_DATABASE_EMULATOR_HOST",Lu={};let fv=!1;function Ev(n,e,t,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=tr(i);n.repoInfo_=new Jp(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function pv(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$e("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=y8(i,s),a=o.repoInfo,l;typeof process<"u"&&process.env&&(l=process.env[dv]),l?(i=`http://${l}?ns=${a.namespace}`,o=y8(i,s),a=o.repoInfo):o.repoInfo.secure;const x=new DB(n.name,n.options,e);M7("Invalid Firebase Database URL",o),ne(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const h=gv(a,n,x,new BB(n,t));return new _v(h,n)}function mv(n,e){const t=Lu[e];(!t||t[n.key]!==n)&&un(`Database ${e}(${n.repoInfo_}) has already been deleted.`),g8(n),delete t[n.key]}function gv(n,e,t,r){let s=Lu[e.name];s||(s={},Lu[e.name]=s);let i=s[n.toURLString()];return i&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new q7(n,fv,t,r),s[n.toURLString()]=i,i}class _v{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(z7(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mt(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mv(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function Cv(n=Kh(),e){const t=Xr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=C_("database");r&&Av(t,...r)}return t}function Av(n,e,t,r={}){n=ce(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Qr(r,i.repoInfo_.emulatorOptions))return;un("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new w0(w0.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:y_(r.mockUserToken,n.app.options.projectId);o=new w0(a)}tr(e)&&(Th(e),v_("Database",!0)),Ev(i,s,r,o)}function yv(n){n=ce(n),n._checkNotDeleted("goOffline"),g8(n._repo)}function Bv(n){n=ce(n),n._checkNotDeleted("goOnline"),Z7(n._repo)}/**
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
 */function Dv(n){cB(hi),Pt(new vt("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return pv(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),ht(Sp,Rp,n),ht(Sp,Rp,"esm2017")}/**
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
 */const vv={".sv":"timestamp"};function Fv(){return vv}/**
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
 */class wv{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Iv(n,e,t){var r;if(n=ce(n),Gn("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new bt,o=(l,x,h)=>{let u=null;l?i.reject(l):(u=new Mr(h,new Mt(n._repo,n._path),we),i.resolve(new wv(x,u)))},a=T8(n,()=>{});return ev(n._repo,n._path,e,o,a,s),i.promise}hn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)},hn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)},Dv();const b8="@firebase/installations",Uu="0.6.18";/**
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
 */const k8=1e4,P8=`w:${Uu}`,S8="FIS_v2",Tv="https://firebaseinstallations.googleapis.com/v1",bv=3600*1e3,kv="installations",Pv="Installations";/**
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
 */const Sv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Lr=new nr(kv,Pv,Sv);function R8(n){return n instanceof $t&&n.code.includes("request-failed")}/**
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
 */function N8({projectId:n}){return`${Tv}/projects/${n}/installations`}function O8(n){return{token:n.token,requestStatus:2,expiresIn:Nv(n.expiresIn),creationTime:Date.now()}}async function V8(n,e){const r=(await e.json()).error;return Lr.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function M8({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Rv(n,{refreshToken:e}){const t=M8(n);return t.append("Authorization",Ov(e)),t}async function L8(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Nv(n){return Number(n.replace("s","000"))}function Ov(n){return`${S8} ${n}`}/**
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
 */async function Vv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=N8(n),s=M8(n),i=e.getImmediate({optional:!0});if(i){const x=await i.getHeartbeatsHeader();x&&s.append("x-firebase-client",x)}const o={fid:t,authVersion:S8,appId:n.appId,sdkVersion:P8},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await L8(()=>fetch(r,a));if(l.ok){const x=await l.json();return{fid:x.fid||t,registrationStatus:2,refreshToken:x.refreshToken,authToken:O8(x.authToken)}}else throw await V8("Create Installation",l)}/**
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
 */function U8(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Mv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Lv=/^[cdef][\w-]{21}$/,ju="";function Uv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=jv(n);return Lv.test(t)?t:ju}catch{return ju}}function jv(n){return Mv(n).substr(0,22)}/**
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
 */function rc(n){return`${n.appName}!${n.appId}`}/**
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
 */const j8=new Map;function q8(n,e){const t=rc(n);z8(t,e),qv(t,e)}function z8(n,e){const t=j8.get(n);if(t)for(const r of t)r(e)}function qv(n,e){const t=zv();t&&t.postMessage({key:n,fid:e}),$v()}let Ur=null;function zv(){return!Ur&&"BroadcastChannel"in self&&(Ur=new BroadcastChannel("[Firebase] FID Change"),Ur.onmessage=n=>{z8(n.data.key,n.data.fid)}),Ur}function $v(){j8.size===0&&Ur&&(Ur.close(),Ur=null)}/**
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
 */const Wv="firebase-installations-database",Kv=1,jr="firebase-installations-store";let qu=null;function zu(){return qu||(qu=aa(Wv,Kv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(jr)}}})),qu}async function sc(n,e){const t=rc(n),s=(await zu()).transaction(jr,"readwrite"),i=s.objectStore(jr),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&q8(n,e.fid),e}async function $8(n){const e=rc(n),r=(await zu()).transaction(jr,"readwrite");await r.objectStore(jr).delete(e),await r.done}async function ic(n,e){const t=rc(n),s=(await zu()).transaction(jr,"readwrite"),i=s.objectStore(jr),o=await i.get(t),a=e(o);return a===void 0?await i.delete(t):await i.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&q8(n,a.fid),a}/**
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
 */async function $u(n){let e;const t=await ic(n.appConfig,r=>{const s=Gv(r),i=Hv(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ju?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Gv(n){const e=n||{fid:Uv(),registrationStatus:0};return K8(e)}function Hv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Lr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Qv(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Yv(n)}:{installationEntry:e}}async function Qv(n,e){try{const t=await Vv(n,e);return sc(n.appConfig,t)}catch(t){throw R8(t)&&t.customData.serverCode===409?await $8(n.appConfig):await sc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Yv(n){let e=await W8(n.appConfig);for(;e.registrationStatus===1;)await U8(100),e=await W8(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await $u(n);return r||t}return e}function W8(n){return ic(n,e=>{if(!e)throw Lr.create("installation-not-found");return K8(e)})}function K8(n){return Xv(n)?{fid:n.fid,registrationStatus:0}:n}function Xv(n){return n.registrationStatus===1&&n.registrationTime+k8<Date.now()}/**
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
 */async function Jv({appConfig:n,heartbeatServiceProvider:e},t){const r=Zv(n,t),s=Rv(n,t),i=e.getImmediate({optional:!0});if(i){const x=await i.getHeartbeatsHeader();x&&s.append("x-firebase-client",x)}const o={installation:{sdkVersion:P8,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await L8(()=>fetch(r,a));if(l.ok){const x=await l.json();return O8(x)}else throw await V8("Generate Auth Token",l)}function Zv(n,{fid:e}){return`${N8(n)}/${e}/authTokens:generate`}/**
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
 */async function Wu(n,e=!1){let t;const r=await ic(n.appConfig,i=>{if(!H8(i))throw Lr.create("not-registered");const o=i.authToken;if(!e&&n4(o))return i;if(o.requestStatus===1)return t=e4(n,e),i;{if(!navigator.onLine)throw Lr.create("app-offline");const a=s4(i);return t=t4(n,a),a}});return t?await t:r.authToken}async function e4(n,e){let t=await G8(n.appConfig);for(;t.authToken.requestStatus===1;)await U8(100),t=await G8(n.appConfig);const r=t.authToken;return r.requestStatus===0?Wu(n,e):r}function G8(n){return ic(n,e=>{if(!H8(e))throw Lr.create("not-registered");const t=e.authToken;return i4(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function t4(n,e){try{const t=await Jv(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await sc(n.appConfig,r),t}catch(t){if(R8(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await $8(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sc(n.appConfig,r)}throw t}}function H8(n){return n!==void 0&&n.registrationStatus===2}function n4(n){return n.requestStatus===2&&!r4(n)}function r4(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+bv}function s4(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function i4(n){return n.requestStatus===1&&n.requestTime+k8<Date.now()}/**
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
 */async function o4(n){const e=n,{installationEntry:t,registrationPromise:r}=await $u(e);return r?r.catch(console.error):Wu(e).catch(console.error),t.fid}/**
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
 */async function a4(n,e=!1){const t=n;return await c4(t),(await Wu(t,e)).token}async function c4(n){const{registrationPromise:e}=await $u(n);e&&await e}/**
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
 */function l4(n){if(!n||!n.options)throw Ku("App Configuration");if(!n.name)throw Ku("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Ku(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Ku(n){return Lr.create("missing-app-config-values",{valueName:n})}/**
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
 */const Q8="installations",x4="installations-internal",u4=n=>{const e=n.getProvider("app").getImmediate(),t=l4(e),r=Xr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},h4=n=>{const e=n.getProvider("app").getImmediate(),t=Xr(e,Q8).getImmediate();return{getId:()=>o4(t),getToken:s=>a4(t,s)}};function d4(){Pt(new vt(Q8,u4,"PUBLIC")),Pt(new vt(x4,h4,"PRIVATE"))}d4(),ht(b8,Uu),ht(b8,Uu,"esm2017");/**
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
 */const f4="/firebase-messaging-sw.js",E4="/firebase-cloud-messaging-push-scope",Y8="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",p4="https://fcmregistrations.googleapis.com/v1",X8="google.c.a.c_id",m4="google.c.a.c_l",g4="google.c.a.ts",_4="google.c.a.e",J8=1e4;var Z8;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Z8||(Z8={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Oo;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Oo||(Oo={}));/**
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
 */function fn(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function C4(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Gu="fcm_token_details_db",A4=5,eg="fcm_token_object_Store";async function y4(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Gu))return null;let e=null;return(await aa(Gu,A4,{upgrade:async(r,s,i,o)=>{var a;if(s<2||!r.objectStoreNames.contains(eg))return;const l=o.objectStore(eg),x=await l.index("fcmSenderId").get(n);if(await l.clear(),!!x){if(s===2){const h=x;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:fn(h.vapidKey)}}}else if(s===3){const h=x;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:fn(h.auth),p256dh:fn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:fn(h.vapidKey)}}}else if(s===4){const h=x;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:fn(h.auth),p256dh:fn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:fn(h.vapidKey)}}}}}})).close(),await Vc(Gu),await Vc("fcm_vapid_details_db"),await Vc("undefined"),B4(e)?e:null}function B4(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const D4="firebase-messaging-database",v4=1,Vo="firebase-messaging-store";let Hu=null;function tg(){return Hu||(Hu=aa(D4,v4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vo)}}})),Hu}async function F4(n){const e=ng(n),r=await(await tg()).transaction(Vo).objectStore(Vo).get(e);if(r)return r;{const s=await y4(n.appConfig.senderId);if(s)return await Qu(n,s),s}}async function Qu(n,e){const t=ng(n),s=(await tg()).transaction(Vo,"readwrite");return await s.objectStore(Vo).put(e,t),await s.done,e}function ng({appConfig:n}){return n.appId}/**
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
 */const w4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},nt=new nr("messaging","Messaging",w4);/**
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
 */async function I4(n,e){const t=await Xu(n),r=rg(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(Yu(n.appConfig),s)).json()}catch(o){throw nt.create("token-subscribe-failed",{errorInfo:o?.toString()})}if(i.error){const o=i.error.message;throw nt.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw nt.create("token-subscribe-no-token");return i.token}async function T4(n,e){const t=await Xu(n),r=rg(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Yu(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw nt.create("token-update-failed",{errorInfo:o?.toString()})}if(i.error){const o=i.error.message;throw nt.create("token-update-failed",{errorInfo:o})}if(!i.token)throw nt.create("token-update-no-token");return i.token}async function b4(n,e){const r={method:"DELETE",headers:await Xu(n)};try{const i=await(await fetch(`${Yu(n.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw nt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw nt.create("token-unsubscribe-failed",{errorInfo:s?.toString()})}}function Yu({projectId:n}){return`${p4}/projects/${n}/registrations`}async function Xu({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function rg({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==Y8&&(s.web.applicationPubKey=r),s}/**
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
 */const k4=10080*60*1e3;async function P4(n){const e=await R4(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:fn(e.getKey("auth")),p256dh:fn(e.getKey("p256dh"))},r=await F4(n.firebaseDependencies);if(r){if(N4(r.subscriptionOptions,t))return Date.now()>=r.createTime+k4?S4(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await b4(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return sg(n.firebaseDependencies,t)}else return sg(n.firebaseDependencies,t)}async function S4(n,e){try{const t=await T4(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Qu(n.firebaseDependencies,r),t}catch(t){throw t}}async function sg(n,e){const r={token:await I4(n,e),createTime:Date.now(),subscriptionOptions:e};return await Qu(n,r),r.token}async function R4(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:C4(e)})}function N4(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
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
 */function ig(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return O4(e,n),V4(e,n),M4(e,n),e}function O4(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function V4(n,e){e.data&&(n.data=e.data)}function M4(n,e){var t,r,s,i,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;a&&(n.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(n.fcmOptions.analyticsLabel=l)}/**
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
 */function L4(n){return typeof n=="object"&&!!n&&X8 in n}/**
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
 */function U4(n){if(!n||!n.options)throw Ju("App Configuration Object");if(!n.name)throw Ju("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Ju(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Ju(n){return nt.create("missing-app-config-values",{valueName:n})}/**
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
 */class j4{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=U4(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function q4(n){try{n.swRegistration=await navigator.serviceWorker.register(f4,{scope:E4}),n.swRegistration.update().catch(()=>{}),await z4(n.swRegistration)}catch(e){throw nt.create("failed-service-worker-registration",{browserErrorMessage:e?.message})}}async function z4(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${J8} ms`)),J8),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var o;((o=i.target)===null||o===void 0?void 0:o.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
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
 */async function $4(n,e){if(!e&&!n.swRegistration&&await q4(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw nt.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function W4(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Y8)}/**
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
 */async function og(n,e){if(!navigator)throw nt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw nt.create("permission-blocked");return await W4(n,e?.vapidKey),await $4(n,e?.serviceWorkerRegistration),P4(n)}/**
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
 */async function K4(n,e,t){const r=G4(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[X8],message_name:t[m4],message_time:t[g4],message_device_time:Math.floor(Date.now()/1e3)})}function G4(n){switch(n){case Oo.NOTIFICATION_CLICKED:return"notification_open";case Oo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function H4(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Oo.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(ig(t)):n.onMessageHandler.next(ig(t)));const r=t.data;L4(r)&&r[_4]==="1"&&await K4(n,t.messageType,r)}const ag="@firebase/messaging",cg="0.12.22";/**
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
 */const Q4=n=>{const e=new j4(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>H4(e,t)),e},Y4=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>og(e,r)}};function X4(){Pt(new vt("messaging",Q4,"PUBLIC")),Pt(new vt("messaging-internal",Y4,"PRIVATE")),ht(ag,cg),ht(ag,cg,"esm2017")}/**
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
 */async function oc(){try{await Nh()}catch{return!1}return typeof window<"u"&&Ic()&&b_()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function J4(n,e){if(!navigator)throw nt.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function lg(n=Kh()){return oc().then(e=>{if(!e)throw nt.create("unsupported-browser")},e=>{throw nt.create("indexed-db-unsupported")}),Xr(ce(n),"messaging").getImmediate()}async function Z4(n,e){return n=ce(n),og(n,e)}function eF(n,e){return n=ce(n),J4(n,e)}X4();/*! Capacitor: https://capacitorjs.com/ - MIT License */var Zs;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(Zs||(Zs={}));class Zu extends Error{constructor(e,t,r){super(e),this.message=e,this.code=t,this.data=r}}const tF=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},nF=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},r=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:tF(n),i=()=>s()!=="web",o=u=>{const f=x.get(u);return!!(f?.platforms.has(s())||a(u))},a=u=>{var f;return(f=t.PluginHeaders)===null||f===void 0?void 0:f.find(p=>p.name===u)},l=u=>n.console.error(u),x=new Map,h=(u,f={})=>{const p=x.get(u);if(p)return console.warn(`Capacitor plugin "${u}" already registered. Cannot register plugins twice.`),p.proxy;const A=s(),w=a(u);let v;const R=async()=>(!v&&A in f?v=typeof f[A]=="function"?v=await f[A]():v=f[A]:e!==null&&!v&&"web"in f&&(v=typeof f.web=="function"?v=await f.web():v=f.web),v),V=(m,C)=>{var B,D;if(w){const F=w?.methods.find(y=>C===y.name);if(F)return F.rtype==="promise"?y=>t.nativePromise(u,C.toString(),y):(y,$)=>t.nativeCallback(u,C.toString(),y,$);if(m)return(B=m[C])===null||B===void 0?void 0:B.bind(m)}else{if(m)return(D=m[C])===null||D===void 0?void 0:D.bind(m);throw new Zu(`"${u}" plugin is not implemented on ${A}`,Zs.Unimplemented)}},T=m=>{let C;const B=(...D)=>{const F=R().then(y=>{const $=V(y,m);if($){const K=$(...D);return C=K?.remove,K}else throw new Zu(`"${u}.${m}()" is not implemented on ${A}`,Zs.Unimplemented)});return m==="addListener"&&(F.remove=async()=>C()),F};return B.toString=()=>`${m.toString()}() { [capacitor code] }`,Object.defineProperty(B,"name",{value:m,writable:!1,configurable:!1}),B},I=T("addListener"),b=T("removeListener"),k=(m,C)=>{const B=I({eventName:m},C),D=async()=>{const y=await B;b({eventName:m,callbackId:y},C)},F=new Promise(y=>B.then(()=>y({remove:D})));return F.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await D()},F},g=new Proxy({},{get(m,C){switch(C){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return w?k:I;case"removeListener":return b;default:return T(C)}}});return r[u]=g,x.set(u,{name:u,proxy:g,platforms:new Set([...Object.keys(f),...w?[A]:[]])}),g};return t.convertFileSrc||(t.convertFileSrc=u=>u),t.getPlatform=s,t.handleError=l,t.isNativePlatform=i,t.isPluginAvailable=o,t.registerPlugin=h,t.Exception=Zu,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},Mo=(n=>n.Capacitor=nF(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ei=Mo.registerPlugin;class Lo{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(t);const i=this.windowListeners[e];i&&!i.registered&&this.addWindowListener(i),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,t);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,r){const s=this.listeners[e];if(!s){if(r){let i=this.retainedEventArguments[e];i||(i=[]),i.push(t),this.retainedEventArguments[e]=i}return}s.forEach(i=>i(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:r=>{this.notifyListeners(t,r)}}}unimplemented(e="not implemented"){return new Mo.Exception(e,Zs.Unimplemented)}unavailable(e="not available"){return new Mo.Exception(e,Zs.Unavailable)}async removeListener(e,t){const r=this.listeners[e];if(!r)return;const s=r.indexOf(t);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(r=>{this.notifyListeners(e,r)}))}}const xg=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),ug=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class rF extends Lo{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[s,i]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=ug(s).trim(),i=ug(i).trim(),t[s]=i}),t}async setCookie(e){try{const t=xg(e.key),r=xg(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",i=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${r||""}${s}; path=${i}; ${o};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}ei("CapacitorCookies",{web:()=>new rF});const sF=async n=>new Promise((e,t)=>{const r=new FileReader;r.onload=()=>{const s=r.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>t(s),r.readAsDataURL(n)}),iF=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,i,o)=>(s[i]=n[e[o]],s),{})},oF=(n,e=!0)=>n?Object.entries(n).reduce((r,s)=>{const[i,o]=s;let a,l;return Array.isArray(o)?(l="",o.forEach(x=>{a=e?encodeURIComponent(x):x,l+=`${i}=${a}&`}),l.slice(0,-1)):(a=e?encodeURIComponent(o):o,l=`${i}=${a}`),`${r}&${l}`},"").substr(1):null,hg=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=iF(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[o,a]of Object.entries(n.data||{}))i.set(o,a);t.body=i.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const i=new FormData;if(n.data instanceof FormData)n.data.forEach((a,l)=>{i.append(l,a)});else for(const a of Object.keys(n.data))i.append(a,n.data[a]);t.body=i;const o=new Headers(t.headers);o.delete("content-type"),t.headers=o}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class aF extends Lo{async request(e){const t=hg(e,e.webFetchExtra),r=oF(e.params,e.shouldEncodeUrlParams),s=r?`${e.url}?${r}`:e.url,i=await fetch(s,t),o=i.headers.get("content-type")||"";let{responseType:a="text"}=i.ok?e:{};o.includes("application/json")&&(a="json");let l,x;switch(a){case"arraybuffer":case"blob":x=await i.blob(),l=await sF(x);break;case"json":l=await i.json();break;case"document":case"text":default:l=await i.text()}const h={};return i.headers.forEach((u,f)=>{h[f]=u}),{data:l,headers:h,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}ei("CapacitorHttp",{web:()=>new aF});const qr=ei("PushNotifications",{}),Uo=ei("App",{web:()=>Promise.resolve().then(()=>CF).then(n=>new n.AppWeb)});function cF(n){n.CapacitorUtils.Synapse=new Proxy({},{get(e,t){return new Proxy({},{get(r,s){return(i,o,a)=>{const l=n.Capacitor.Plugins[t];if(l===void 0){a(new Error(`Capacitor plugin ${t} not found`));return}if(typeof l[s]!="function"){a(new Error(`Method ${s} not found in Capacitor plugin ${t}`));return}(async()=>{try{const x=await l[s](i);o(x)}catch(x){a(x)}})()}}})}})}function lF(n){n.CapacitorUtils.Synapse=new Proxy({},{get(e,t){return n.cordova.plugins[t]}})}function xF(n=!1){typeof window>"u"||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!n?cF(window):window.cordova!==void 0&&lF(window))}var eh;(function(n){n.Documents="DOCUMENTS",n.Data="DATA",n.Library="LIBRARY",n.Cache="CACHE",n.External="EXTERNAL",n.ExternalStorage="EXTERNAL_STORAGE",n.ExternalCache="EXTERNAL_CACHE",n.LibraryNoCloud="LIBRARY_NO_CLOUD",n.Temporary="TEMPORARY"})(eh||(eh={}));var th;(function(n){n.UTF8="utf8",n.ASCII="ascii",n.UTF16="utf16"})(th||(th={}));const uF=ei("Filesystem",{web:()=>Promise.resolve().then(()=>yF).then(n=>new n.FilesystemWeb)});xF();const hF=ei("Share",{web:()=>Promise.resolve().then(()=>DF).then(n=>new n.ShareWeb)});function dF(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ac={exports:{}},fF=ac.exports,dg;function EF(){return dg||(dg=1,(function(n,e){(function(r,s){n.exports=s()})(typeof self<"u"?self:fF,function(){return(function(t){var r={};function s(i){if(r[i])return r[i].exports;var o=r[i]={i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=t,s.c=r,s.d=function(i,o,a){s.o(i,o)||Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:a})},s.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(o,"a",o),o},s.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},s.p="",s(s.s=3)})([(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=(function(){function o(a,l){this.width=l,this.height=a.length/l,this.data=a}return o.createEmpty=function(a,l){return new o(new Uint8ClampedArray(a*l),a)},o.prototype.get=function(a,l){return a<0||a>=this.width||l<0||l>=this.height?!1:!!this.data[l*this.width+a]},o.prototype.set=function(a,l,x){this.data[l*this.width+a]=x?1:0},o.prototype.setRegion=function(a,l,x,h,u){for(var f=l;f<l+h;f++)for(var p=a;p<a+x;p++)this.set(p,f,!!u)},o})();r.BitMatrix=i}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=s(2);function o(l,x){return l^x}r.addOrSubtractGF=o;var a=(function(){function l(x,h,u){this.primitive=x,this.size=h,this.generatorBase=u,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var f=1,p=0;p<this.size;p++)this.expTable[p]=f,f=f*2,f>=this.size&&(f=(f^this.primitive)&this.size-1);for(var p=0;p<this.size-1;p++)this.logTable[this.expTable[p]]=p;this.zero=new i.default(this,Uint8ClampedArray.from([0])),this.one=new i.default(this,Uint8ClampedArray.from([1]))}return l.prototype.multiply=function(x,h){return x===0||h===0?0:this.expTable[(this.logTable[x]+this.logTable[h])%(this.size-1)]},l.prototype.inverse=function(x){if(x===0)throw new Error("Can't invert 0");return this.expTable[this.size-this.logTable[x]-1]},l.prototype.buildMonomial=function(x,h){if(x<0)throw new Error("Invalid monomial degree less than 0");if(h===0)return this.zero;var u=new Uint8ClampedArray(x+1);return u[0]=h,new i.default(this,u)},l.prototype.log=function(x){if(x===0)throw new Error("Can't take log(0)");return this.logTable[x]},l.prototype.exp=function(x){return this.expTable[x]},l})();r.default=a}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=s(1),o=(function(){function a(l,x){if(x.length===0)throw new Error("No coefficients.");this.field=l;var h=x.length;if(h>1&&x[0]===0){for(var u=1;u<h&&x[u]===0;)u++;if(u===h)this.coefficients=l.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(h-u);for(var f=0;f<this.coefficients.length;f++)this.coefficients[f]=x[u+f]}}else this.coefficients=x}return a.prototype.degree=function(){return this.coefficients.length-1},a.prototype.isZero=function(){return this.coefficients[0]===0},a.prototype.getCoefficient=function(l){return this.coefficients[this.coefficients.length-1-l]},a.prototype.addOrSubtract=function(l){var x;if(this.isZero())return l;if(l.isZero())return this;var h=this.coefficients,u=l.coefficients;h.length>u.length&&(x=[u,h],h=x[0],u=x[1]);for(var f=new Uint8ClampedArray(u.length),p=u.length-h.length,A=0;A<p;A++)f[A]=u[A];for(var A=p;A<u.length;A++)f[A]=i.addOrSubtractGF(h[A-p],u[A]);return new a(this.field,f)},a.prototype.multiply=function(l){if(l===0)return this.field.zero;if(l===1)return this;for(var x=this.coefficients.length,h=new Uint8ClampedArray(x),u=0;u<x;u++)h[u]=this.field.multiply(this.coefficients[u],l);return new a(this.field,h)},a.prototype.multiplyPoly=function(l){if(this.isZero()||l.isZero())return this.field.zero;for(var x=this.coefficients,h=x.length,u=l.coefficients,f=u.length,p=new Uint8ClampedArray(h+f-1),A=0;A<h;A++)for(var w=x[A],v=0;v<f;v++)p[A+v]=i.addOrSubtractGF(p[A+v],this.field.multiply(w,u[v]));return new a(this.field,p)},a.prototype.multiplyByMonomial=function(l,x){if(l<0)throw new Error("Invalid degree less than 0");if(x===0)return this.field.zero;for(var h=this.coefficients.length,u=new Uint8ClampedArray(h+l),f=0;f<h;f++)u[f]=this.field.multiply(this.coefficients[f],x);return new a(this.field,u)},a.prototype.evaluateAt=function(l){var x=0;if(l===0)return this.getCoefficient(0);var h=this.coefficients.length;if(l===1)return this.coefficients.forEach(function(f){x=i.addOrSubtractGF(x,f)}),x;x=this.coefficients[0];for(var u=1;u<h;u++)x=i.addOrSubtractGF(this.field.multiply(l,x),this.coefficients[u]);return x},a})();r.default=o}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=s(4),o=s(5),a=s(11),l=s(12);function x(f){var p=l.locate(f);if(!p)return null;for(var A=0,w=p;A<w.length;A++){var v=w[A],R=a.extract(f,v),V=o.decode(R.matrix);if(V)return{binaryData:V.bytes,data:V.text,chunks:V.chunks,version:V.version,location:{topRightCorner:R.mappingFunction(v.dimension,0),topLeftCorner:R.mappingFunction(0,0),bottomRightCorner:R.mappingFunction(v.dimension,v.dimension),bottomLeftCorner:R.mappingFunction(0,v.dimension),topRightFinderPattern:v.topRight,topLeftFinderPattern:v.topLeft,bottomLeftFinderPattern:v.bottomLeft,bottomRightAlignmentPattern:v.alignmentPattern}}}return null}var h={inversionAttempts:"attemptBoth"};function u(f,p,A,w){w===void 0&&(w={});var v=h;Object.keys(v||{}).forEach(function(g){v[g]=w[g]||v[g]});var R=v.inversionAttempts==="attemptBoth"||v.inversionAttempts==="invertFirst",V=v.inversionAttempts==="onlyInvert"||v.inversionAttempts==="invertFirst",T=i.binarize(f,p,A,R),I=T.binarized,b=T.inverted,k=x(V?b:I);return!k&&(v.inversionAttempts==="attemptBoth"||v.inversionAttempts==="invertFirst")&&(k=x(V?I:b)),k}u.default=u,r.default=u}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=s(0),o=8,a=24;function l(u,f,p){return u<f?f:u>p?p:u}var x=(function(){function u(f,p){this.width=f,this.data=new Uint8ClampedArray(f*p)}return u.prototype.get=function(f,p){return this.data[p*this.width+f]},u.prototype.set=function(f,p,A){this.data[p*this.width+f]=A},u})();function h(u,f,p,A){if(u.length!==f*p*4)throw new Error("Malformed data passed to binarizer.");for(var w=new x(f,p),v=0;v<f;v++)for(var R=0;R<p;R++){var V=u[(R*f+v)*4+0],T=u[(R*f+v)*4+1],I=u[(R*f+v)*4+2];w.set(v,R,.2126*V+.7152*T+.0722*I)}for(var b=Math.ceil(f/o),k=Math.ceil(p/o),g=new x(b,k),m=0;m<k;m++)for(var C=0;C<b;C++){for(var B=0,D=1/0,F=0,R=0;R<o;R++)for(var v=0;v<o;v++){var y=w.get(C*o+v,m*o+R);B+=y,D=Math.min(D,y),F=Math.max(F,y)}var $=B/Math.pow(o,2);if(F-D<=a&&($=D/2,m>0&&C>0)){var K=(g.get(C,m-1)+2*g.get(C-1,m)+g.get(C-1,m-1))/4;D<K&&($=K)}g.set(C,m,$)}var ie=i.BitMatrix.createEmpty(f,p),H=null;A&&(H=i.BitMatrix.createEmpty(f,p));for(var m=0;m<k;m++)for(var C=0;C<b;C++){for(var xe=l(C,2,b-3),Ce=l(m,2,k-3),B=0,De=-2;De<=2;De++)for(var Y=-2;Y<=2;Y++)B+=g.get(xe+De,Ce+Y);for(var Ee=B/25,De=0;De<o;De++)for(var Y=0;Y<o;Y++){var v=C*o+De,R=m*o+Y,he=w.get(v,R);ie.set(v,R,he<=Ee),A&&H.set(v,R,!(he<=Ee))}}return A?{binarized:ie,inverted:H}:{binarized:ie}}r.binarize=h}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=s(0),o=s(6),a=s(9),l=s(10);function x(I,b){for(var k=I^b,g=0;k;)g++,k&=k-1;return g}function h(I,b){return b<<1|I}var u=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],f=[function(I){return(I.y+I.x)%2===0},function(I){return I.y%2===0},function(I){return I.x%3===0},function(I){return(I.y+I.x)%3===0},function(I){return(Math.floor(I.y/2)+Math.floor(I.x/3))%2===0},function(I){return I.x*I.y%2+I.x*I.y%3===0},function(I){return(I.y*I.x%2+I.y*I.x%3)%2===0},function(I){return((I.y+I.x)%2+I.y*I.x%3)%2===0}];function p(I){var b=17+4*I.versionNumber,k=i.BitMatrix.createEmpty(b,b);k.setRegion(0,0,9,9,!0),k.setRegion(b-8,0,8,9,!0),k.setRegion(0,b-8,9,8,!0);for(var g=0,m=I.alignmentPatternCenters;g<m.length;g++)for(var C=m[g],B=0,D=I.alignmentPatternCenters;B<D.length;B++){var F=D[B];C===6&&F===6||C===6&&F===b-7||C===b-7&&F===6||k.setRegion(C-2,F-2,5,5,!0)}return k.setRegion(6,9,1,b-17,!0),k.setRegion(9,6,b-17,1,!0),I.versionNumber>6&&(k.setRegion(b-11,0,3,6,!0),k.setRegion(0,b-11,6,3,!0)),k}function A(I,b,k){for(var g=f[k.dataMask],m=I.height,C=p(b),B=[],D=0,F=0,y=!0,$=m-1;$>0;$-=2){$===6&&$--;for(var K=0;K<m;K++)for(var ie=y?m-1-K:K,H=0;H<2;H++){var xe=$-H;if(!C.get(xe,ie)){F++;var Ce=I.get(xe,ie);g({y:ie,x:xe})&&(Ce=!Ce),D=h(Ce,D),F===8&&(B.push(D),F=0,D=0)}}y=!y}return B}function w(I){var b=I.height,k=Math.floor((b-17)/4);if(k<=6)return l.VERSIONS[k-1];for(var g=0,m=5;m>=0;m--)for(var C=b-9;C>=b-11;C--)g=h(I.get(C,m),g);for(var B=0,C=5;C>=0;C--)for(var m=b-9;m>=b-11;m--)B=h(I.get(C,m),B);for(var D=1/0,F,y=0,$=l.VERSIONS;y<$.length;y++){var K=$[y];if(K.infoBits===g||K.infoBits===B)return K;var ie=x(g,K.infoBits);ie<D&&(F=K,D=ie),ie=x(B,K.infoBits),ie<D&&(F=K,D=ie)}if(D<=3)return F}function v(I){for(var b=0,k=0;k<=8;k++)k!==6&&(b=h(I.get(k,8),b));for(var g=7;g>=0;g--)g!==6&&(b=h(I.get(8,g),b));for(var m=I.height,C=0,g=m-1;g>=m-7;g--)C=h(I.get(8,g),C);for(var k=m-8;k<m;k++)C=h(I.get(k,8),C);for(var B=1/0,D=null,F=0,y=u;F<y.length;F++){var $=y[F],K=$.bits,ie=$.formatInfo;if(K===b||K===C)return ie;var H=x(b,K);H<B&&(D=ie,B=H),b!==C&&(H=x(C,K),H<B&&(D=ie,B=H))}return B<=3?D:null}function R(I,b,k){var g=b.errorCorrectionLevels[k],m=[],C=0;if(g.ecBlocks.forEach(function(Ce){for(var De=0;De<Ce.numBlocks;De++)m.push({numDataCodewords:Ce.dataCodewordsPerBlock,codewords:[]}),C+=Ce.dataCodewordsPerBlock+g.ecCodewordsPerBlock}),I.length<C)return null;I=I.slice(0,C);for(var B=g.ecBlocks[0].dataCodewordsPerBlock,D=0;D<B;D++)for(var F=0,y=m;F<y.length;F++){var $=y[F];$.codewords.push(I.shift())}if(g.ecBlocks.length>1)for(var K=g.ecBlocks[0].numBlocks,ie=g.ecBlocks[1].numBlocks,D=0;D<ie;D++)m[K+D].codewords.push(I.shift());for(;I.length>0;)for(var H=0,xe=m;H<xe.length;H++){var $=xe[H];$.codewords.push(I.shift())}return m}function V(I){var b=w(I);if(!b)return null;var k=v(I);if(!k)return null;var g=A(I,b,k),m=R(g,b,k.errorCorrectionLevel);if(!m)return null;for(var C=m.reduce(function(H,xe){return H+xe.numDataCodewords},0),B=new Uint8ClampedArray(C),D=0,F=0,y=m;F<y.length;F++){var $=y[F],K=a.decode($.codewords,$.codewords.length-$.numDataCodewords);if(!K)return null;for(var ie=0;ie<$.numDataCodewords;ie++)B[D++]=K[ie]}try{return o.decode(B,b.versionNumber)}catch{return null}}function T(I){if(I==null)return null;var b=V(I);if(b)return b;for(var k=0;k<I.width;k++)for(var g=k+1;g<I.height;g++)I.get(k,g)!==I.get(g,k)&&(I.set(k,g,!I.get(k,g)),I.set(g,k,!I.get(g,k)));return V(I)}r.decode=T}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=s(7),o=s(8),a;(function(w){w.Numeric="numeric",w.Alphanumeric="alphanumeric",w.Byte="byte",w.Kanji="kanji",w.ECI="eci"})(a=r.Mode||(r.Mode={}));var l;(function(w){w[w.Terminator=0]="Terminator",w[w.Numeric=1]="Numeric",w[w.Alphanumeric=2]="Alphanumeric",w[w.Byte=4]="Byte",w[w.Kanji=8]="Kanji",w[w.ECI=7]="ECI"})(l||(l={}));function x(w,v){for(var R=[],V="",T=[10,12,14][v],I=w.readBits(T);I>=3;){var b=w.readBits(10);if(b>=1e3)throw new Error("Invalid numeric value above 999");var k=Math.floor(b/100),g=Math.floor(b/10)%10,m=b%10;R.push(48+k,48+g,48+m),V+=k.toString()+g.toString()+m.toString(),I-=3}if(I===2){var b=w.readBits(7);if(b>=100)throw new Error("Invalid numeric value above 99");var k=Math.floor(b/10),g=b%10;R.push(48+k,48+g),V+=k.toString()+g.toString()}else if(I===1){var b=w.readBits(4);if(b>=10)throw new Error("Invalid numeric value above 9");R.push(48+b),V+=b.toString()}return{bytes:R,text:V}}var h=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function u(w,v){for(var R=[],V="",T=[9,11,13][v],I=w.readBits(T);I>=2;){var b=w.readBits(11),k=Math.floor(b/45),g=b%45;R.push(h[k].charCodeAt(0),h[g].charCodeAt(0)),V+=h[k]+h[g],I-=2}if(I===1){var k=w.readBits(6);R.push(h[k].charCodeAt(0)),V+=h[k]}return{bytes:R,text:V}}function f(w,v){for(var R=[],V="",T=[8,16,16][v],I=w.readBits(T),b=0;b<I;b++){var k=w.readBits(8);R.push(k)}try{V+=decodeURIComponent(R.map(function(g){return"%"+("0"+g.toString(16)).substr(-2)}).join(""))}catch{}return{bytes:R,text:V}}function p(w,v){for(var R=[],V="",T=[8,10,12][v],I=w.readBits(T),b=0;b<I;b++){var k=w.readBits(13),g=Math.floor(k/192)<<8|k%192;g<7936?g+=33088:g+=49472,R.push(g>>8,g&255),V+=String.fromCharCode(o.shiftJISTable[g])}return{bytes:R,text:V}}function A(w,v){for(var R,V,T,I,b=new i.BitStream(w),k=v<=9?0:v<=26?1:2,g={text:"",bytes:[],chunks:[],version:v};b.available()>=4;){var m=b.readBits(4);if(m===l.Terminator)return g;if(m===l.ECI)b.readBits(1)===0?g.chunks.push({type:a.ECI,assignmentNumber:b.readBits(7)}):b.readBits(1)===0?g.chunks.push({type:a.ECI,assignmentNumber:b.readBits(14)}):b.readBits(1)===0?g.chunks.push({type:a.ECI,assignmentNumber:b.readBits(21)}):g.chunks.push({type:a.ECI,assignmentNumber:-1});else if(m===l.Numeric){var C=x(b,k);g.text+=C.text,(R=g.bytes).push.apply(R,C.bytes),g.chunks.push({type:a.Numeric,text:C.text})}else if(m===l.Alphanumeric){var B=u(b,k);g.text+=B.text,(V=g.bytes).push.apply(V,B.bytes),g.chunks.push({type:a.Alphanumeric,text:B.text})}else if(m===l.Byte){var D=f(b,k);g.text+=D.text,(T=g.bytes).push.apply(T,D.bytes),g.chunks.push({type:a.Byte,bytes:D.bytes,text:D.text})}else if(m===l.Kanji){var F=p(b,k);g.text+=F.text,(I=g.bytes).push.apply(I,F.bytes),g.chunks.push({type:a.Kanji,bytes:F.bytes,text:F.text})}}if(b.available()===0||b.readBits(b.available())===0)return g}r.decode=A}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=(function(){function o(a){this.byteOffset=0,this.bitOffset=0,this.bytes=a}return o.prototype.readBits=function(a){if(a<1||a>32||a>this.available())throw new Error("Cannot read "+a.toString()+" bits");var l=0;if(this.bitOffset>0){var x=8-this.bitOffset,h=a<x?a:x,u=x-h,f=255>>8-h<<u;l=(this.bytes[this.byteOffset]&f)>>u,a-=h,this.bitOffset+=h,this.bitOffset===8&&(this.bitOffset=0,this.byteOffset++)}if(a>0){for(;a>=8;)l=l<<8|this.bytes[this.byteOffset]&255,this.byteOffset++,a-=8;if(a>0){var u=8-a,f=255>>u<<u;l=l<<a|(this.bytes[this.byteOffset]&f)>>u,this.bitOffset+=a}}return l},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o})();r.BitStream=i}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=s(1),o=s(2);function a(u,f,p,A){var w;f.degree()<p.degree()&&(w=[p,f],f=w[0],p=w[1]);for(var v=f,R=p,V=u.zero,T=u.one;R.degree()>=A/2;){var I=v,b=V;if(v=R,V=T,v.isZero())return null;R=I;for(var k=u.zero,g=v.getCoefficient(v.degree()),m=u.inverse(g);R.degree()>=v.degree()&&!R.isZero();){var C=R.degree()-v.degree(),B=u.multiply(R.getCoefficient(R.degree()),m);k=k.addOrSubtract(u.buildMonomial(C,B)),R=R.addOrSubtract(v.multiplyByMonomial(C,B))}if(T=k.multiplyPoly(V).addOrSubtract(b),R.degree()>=v.degree())return null}var D=T.getCoefficient(0);if(D===0)return null;var F=u.inverse(D);return[T.multiply(F),R.multiply(F)]}function l(u,f){var p=f.degree();if(p===1)return[f.getCoefficient(1)];for(var A=new Array(p),w=0,v=1;v<u.size&&w<p;v++)f.evaluateAt(v)===0&&(A[w]=u.inverse(v),w++);return w!==p?null:A}function x(u,f,p){for(var A=p.length,w=new Array(A),v=0;v<A;v++){for(var R=u.inverse(p[v]),V=1,T=0;T<A;T++)v!==T&&(V=u.multiply(V,i.addOrSubtractGF(1,u.multiply(p[T],R))));w[v]=u.multiply(f.evaluateAt(R),u.inverse(V)),u.generatorBase!==0&&(w[v]=u.multiply(w[v],R))}return w}function h(u,f){var p=new Uint8ClampedArray(u.length);p.set(u);for(var A=new i.default(285,256,0),w=new o.default(A,p),v=new Uint8ClampedArray(f),R=!1,V=0;V<f;V++){var T=w.evaluateAt(A.exp(V+A.generatorBase));v[v.length-1-V]=T,T!==0&&(R=!0)}if(!R)return p;var I=new o.default(A,v),b=a(A,A.buildMonomial(f,1),I,f);if(b===null)return null;var k=l(A,b[0]);if(k==null)return null;for(var g=x(A,b[1],k),m=0;m<k.length;m++){var C=p.length-1-A.log(k[m]);if(C<0)return null;p[C]=i.addOrSubtractGF(p[C],g[m])}return p}r.decode=h}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=s(0);function o(h,u,f,p){var A=h.x-u.x+f.x-p.x,w=h.y-u.y+f.y-p.y;if(A===0&&w===0)return{a11:u.x-h.x,a12:u.y-h.y,a13:0,a21:f.x-u.x,a22:f.y-u.y,a23:0,a31:h.x,a32:h.y,a33:1};var v=u.x-f.x,R=p.x-f.x,V=u.y-f.y,T=p.y-f.y,I=v*T-R*V,b=(A*T-R*w)/I,k=(v*w-A*V)/I;return{a11:u.x-h.x+b*u.x,a12:u.y-h.y+b*u.y,a13:b,a21:p.x-h.x+k*p.x,a22:p.y-h.y+k*p.y,a23:k,a31:h.x,a32:h.y,a33:1}}function a(h,u,f,p){var A=o(h,u,f,p);return{a11:A.a22*A.a33-A.a23*A.a32,a12:A.a13*A.a32-A.a12*A.a33,a13:A.a12*A.a23-A.a13*A.a22,a21:A.a23*A.a31-A.a21*A.a33,a22:A.a11*A.a33-A.a13*A.a31,a23:A.a13*A.a21-A.a11*A.a23,a31:A.a21*A.a32-A.a22*A.a31,a32:A.a12*A.a31-A.a11*A.a32,a33:A.a11*A.a22-A.a12*A.a21}}function l(h,u){return{a11:h.a11*u.a11+h.a21*u.a12+h.a31*u.a13,a12:h.a12*u.a11+h.a22*u.a12+h.a32*u.a13,a13:h.a13*u.a11+h.a23*u.a12+h.a33*u.a13,a21:h.a11*u.a21+h.a21*u.a22+h.a31*u.a23,a22:h.a12*u.a21+h.a22*u.a22+h.a32*u.a23,a23:h.a13*u.a21+h.a23*u.a22+h.a33*u.a23,a31:h.a11*u.a31+h.a21*u.a32+h.a31*u.a33,a32:h.a12*u.a31+h.a22*u.a32+h.a32*u.a33,a33:h.a13*u.a31+h.a23*u.a32+h.a33*u.a33}}function x(h,u){for(var f=a({x:3.5,y:3.5},{x:u.dimension-3.5,y:3.5},{x:u.dimension-6.5,y:u.dimension-6.5},{x:3.5,y:u.dimension-3.5}),p=o(u.topLeft,u.topRight,u.alignmentPattern,u.bottomLeft),A=l(p,f),w=i.BitMatrix.createEmpty(u.dimension,u.dimension),v=function(k,g){var m=A.a13*k+A.a23*g+A.a33;return{x:(A.a11*k+A.a21*g+A.a31)/m,y:(A.a12*k+A.a22*g+A.a32)/m}},R=0;R<u.dimension;R++)for(var V=0;V<u.dimension;V++){var T=V+.5,I=R+.5,b=v(T,I);w.set(V,R,h.get(Math.floor(b.x),Math.floor(b.y)))}return{matrix:w,mappingFunction:v}}r.extract=x}),(function(t,r,s){Object.defineProperty(r,"__esModule",{value:!0});var i=4,o=.5,a=1.5,l=function(T,I){return Math.sqrt(Math.pow(I.x-T.x,2)+Math.pow(I.y-T.y,2))};function x(T){return T.reduce(function(I,b){return I+b})}function h(T,I,b){var k,g,m,C,B=l(T,I),D=l(I,b),F=l(T,b),y,$,K;return D>=B&&D>=F?(k=[I,T,b],y=k[0],$=k[1],K=k[2]):F>=D&&F>=B?(g=[T,I,b],y=g[0],$=g[1],K=g[2]):(m=[T,b,I],y=m[0],$=m[1],K=m[2]),(K.x-$.x)*(y.y-$.y)-(K.y-$.y)*(y.x-$.x)<0&&(C=[K,y],y=C[0],K=C[1]),{bottomLeft:y,topLeft:$,topRight:K}}function u(T,I,b,k){var g=(x(p(T,b,k,5))/7+x(p(T,I,k,5))/7+x(p(b,T,k,5))/7+x(p(I,T,k,5))/7)/4;if(g<1)throw new Error("Invalid module size");var m=Math.round(l(T,I)/g),C=Math.round(l(T,b)/g),B=Math.floor((m+C)/2)+7;switch(B%4){case 0:B++;break;case 2:B--;break}return{dimension:B,moduleSize:g}}function f(T,I,b,k){var g=[{x:Math.floor(T.x),y:Math.floor(T.y)}],m=Math.abs(I.y-T.y)>Math.abs(I.x-T.x),C,B,D,F;m?(C=Math.floor(T.y),B=Math.floor(T.x),D=Math.floor(I.y),F=Math.floor(I.x)):(C=Math.floor(T.x),B=Math.floor(T.y),D=Math.floor(I.x),F=Math.floor(I.y));for(var y=Math.abs(D-C),$=Math.abs(F-B),K=Math.floor(-y/2),ie=C<D?1:-1,H=B<F?1:-1,xe=!0,Ce=C,De=B;Ce!==D+ie;Ce+=ie){var Y=m?De:Ce,Ee=m?Ce:De;if(b.get(Y,Ee)!==xe&&(xe=!xe,g.push({x:Y,y:Ee}),g.length===k+1))break;if(K+=$,K>0){if(De===F)break;De+=H,K-=y}}for(var he=[],Z=0;Z<k;Z++)g[Z]&&g[Z+1]?he.push(l(g[Z],g[Z+1])):he.push(0);return he}function p(T,I,b,k){var g,m=I.y-T.y,C=I.x-T.x,B=f(T,I,b,Math.ceil(k/2)),D=f(T,{x:T.x-C,y:T.y-m},b,Math.ceil(k/2)),F=B.shift()+D.shift()-1;return(g=D.concat(F)).concat.apply(g,B)}function A(T,I){var b=x(T)/x(I),k=0;return I.forEach(function(g,m){k+=Math.pow(T[m]-g*b,2)}),{averageSize:b,error:k}}function w(T,I,b){try{var k=p(T,{x:-1,y:T.y},b,I.length),g=p(T,{x:T.x,y:-1},b,I.length),m={x:Math.max(0,T.x-T.y)-1,y:Math.max(0,T.y-T.x)-1},C=p(T,m,b,I.length),B={x:Math.min(b.width,T.x+T.y)+1,y:Math.min(b.height,T.y+T.x)+1},D=p(T,B,b,I.length),F=A(k,I),y=A(g,I),$=A(C,I),K=A(D,I),ie=Math.sqrt(F.error*F.error+y.error*y.error+$.error*$.error+K.error*K.error),H=(F.averageSize+y.averageSize+$.averageSize+K.averageSize)/4,xe=(Math.pow(F.averageSize-H,2)+Math.pow(y.averageSize-H,2)+Math.pow($.averageSize-H,2)+Math.pow(K.averageSize-H,2))/H;return ie+xe}catch{return 1/0}}function v(T,I){for(var b=Math.round(I.x);T.get(b,Math.round(I.y));)b--;for(var k=Math.round(I.x);T.get(k,Math.round(I.y));)k++;for(var g=(b+k)/2,m=Math.round(I.y);T.get(Math.round(g),m);)m--;for(var C=Math.round(I.y);T.get(Math.round(g),C);)C++;var B=(m+C)/2;return{x:g,y:B}}function R(T){for(var I=[],b=[],k=[],g=[],m=function(Y){for(var Ee=0,he=!1,Z=[0,0,0,0,0],Lt=function(Re){var ti=T.get(Re,Y);if(ti===he)Ee++;else{Z=[Z[1],Z[2],Z[3],Z[4],Ee],Ee=1,he=ti;var Tt=x(Z)/7,ni=Math.abs(Z[0]-Tt)<Tt&&Math.abs(Z[1]-Tt)<Tt&&Math.abs(Z[2]-3*Tt)<3*Tt&&Math.abs(Z[3]-Tt)<Tt&&Math.abs(Z[4]-Tt)<Tt&&!ti,Ut=x(Z.slice(-3))/3,jo=Math.abs(Z[2]-Ut)<Ut&&Math.abs(Z[3]-Ut)<Ut&&Math.abs(Z[4]-Ut)<Ut&&ti;if(ni){var Yn=Re-Z[3]-Z[4],En=Yn-Z[2],jt={startX:En,endX:Yn,y:Y},Xn=b.filter(function(yt){return En>=yt.bottom.startX&&En<=yt.bottom.endX||Yn>=yt.bottom.startX&&En<=yt.bottom.endX||En<=yt.bottom.startX&&Yn>=yt.bottom.endX&&Z[2]/(yt.bottom.endX-yt.bottom.startX)<a&&Z[2]/(yt.bottom.endX-yt.bottom.startX)>o});Xn.length>0?Xn[0].bottom=jt:b.push({top:jt,bottom:jt})}if(jo){var ri=Re-Z[4],zr=ri-Z[3],jt={startX:zr,y:Y,endX:ri},Xn=g.filter(function(Bt){return zr>=Bt.bottom.startX&&zr<=Bt.bottom.endX||ri>=Bt.bottom.startX&&zr<=Bt.bottom.endX||zr<=Bt.bottom.startX&&ri>=Bt.bottom.endX&&Z[2]/(Bt.bottom.endX-Bt.bottom.startX)<a&&Z[2]/(Bt.bottom.endX-Bt.bottom.startX)>o});Xn.length>0?Xn[0].bottom=jt:g.push({top:jt,bottom:jt})}}},rt=-1;rt<=T.width;rt++)Lt(rt);I.push.apply(I,b.filter(function(Re){return Re.bottom.y!==Y&&Re.bottom.y-Re.top.y>=2})),b=b.filter(function(Re){return Re.bottom.y===Y}),k.push.apply(k,g.filter(function(Re){return Re.bottom.y!==Y})),g=g.filter(function(Re){return Re.bottom.y===Y})},C=0;C<=T.height;C++)m(C);I.push.apply(I,b.filter(function(Y){return Y.bottom.y-Y.top.y>=2})),k.push.apply(k,g);var B=I.filter(function(Y){return Y.bottom.y-Y.top.y>=2}).map(function(Y){var Ee=(Y.top.startX+Y.top.endX+Y.bottom.startX+Y.bottom.endX)/4,he=(Y.top.y+Y.bottom.y+1)/2;if(T.get(Math.round(Ee),Math.round(he))){var Z=[Y.top.endX-Y.top.startX,Y.bottom.endX-Y.bottom.startX,Y.bottom.y-Y.top.y+1],Lt=x(Z)/Z.length,rt=w({x:Math.round(Ee),y:Math.round(he)},[1,1,3,1,1],T);return{score:rt,x:Ee,y:he,size:Lt}}}).filter(function(Y){return!!Y}).sort(function(Y,Ee){return Y.score-Ee.score}).map(function(Y,Ee,he){if(Ee>i)return null;var Z=he.filter(function(rt,Re){return Ee!==Re}).map(function(rt){return{x:rt.x,y:rt.y,score:rt.score+Math.pow(rt.size-Y.size,2)/Y.size,size:rt.size}}).sort(function(rt,Re){return rt.score-Re.score});if(Z.length<2)return null;var Lt=Y.score+Z[0].score+Z[1].score;return{points:[Y].concat(Z.slice(0,2)),score:Lt}}).filter(function(Y){return!!Y}).sort(function(Y,Ee){return Y.score-Ee.score});if(B.length===0)return null;var D=h(B[0].points[0],B[0].points[1],B[0].points[2]),F=D.topRight,y=D.topLeft,$=D.bottomLeft,K=V(T,k,F,y,$),ie=[];K&&ie.push({alignmentPattern:{x:K.alignmentPattern.x,y:K.alignmentPattern.y},bottomLeft:{x:$.x,y:$.y},dimension:K.dimension,topLeft:{x:y.x,y:y.y},topRight:{x:F.x,y:F.y}});var H=v(T,F),xe=v(T,y),Ce=v(T,$),De=V(T,k,H,xe,Ce);return De&&ie.push({alignmentPattern:{x:De.alignmentPattern.x,y:De.alignmentPattern.y},bottomLeft:{x:Ce.x,y:Ce.y},topLeft:{x:xe.x,y:xe.y},topRight:{x:H.x,y:H.y},dimension:De.dimension}),ie.length===0?null:ie}r.locate=R;function V(T,I,b,k,g){var m,C,B;try{m=u(k,b,g,T),C=m.dimension,B=m.moduleSize}catch{return null}var D={x:b.x-k.x+g.x,y:b.y-k.y+g.y},F=(l(k,g)+l(k,b))/2/B,y=1-3/F,$={x:k.x+y*(D.x-k.x),y:k.y+y*(D.y-k.y)},K=I.map(function(H){var xe=(H.top.startX+H.top.endX+H.bottom.startX+H.bottom.endX)/4,Ce=(H.top.y+H.bottom.y+1)/2;if(T.get(Math.floor(xe),Math.floor(Ce))){var De=[H.top.endX-H.top.startX,H.bottom.endX-H.bottom.startX,H.bottom.y-H.top.y+1];x(De)/De.length;var Y=w({x:Math.floor(xe),y:Math.floor(Ce)},[1,1,1],T),Ee=Y+l({x:xe,y:Ce},$);return{x:xe,y:Ce,score:Ee}}}).filter(function(H){return!!H}).sort(function(H,xe){return H.score-xe.score}),ie=F>=15&&K.length?K[0]:$;return{alignmentPattern:ie,dimension:C}}})]).default})})(ac)),ac.exports}var pF=EF();const mF=dF(pF),Qn=self.SIKLAB_FB||{},He={ready:!1,native:!1,platform:"web",err:null,cfg:{pages:Qn.pagesUrl||"",apk:Qn.apkUrl||"",build:+Qn.build||0}};self.FB=He;try{He.native=Mo.isNativePlatform(),He.platform=Mo.getPlatform()}catch{}function cc(n,e){try{self.dispatchEvent(new CustomEvent(n,{detail:e}))}catch{}}if(!Qn.config||!Qn.config.apiKey)He.err="no-config";else{const n=Wh(Qn.config),e=NA(n,{persistence:[E6,n6]});let t;try{t=gp(n,{localCache:J1({tabManager:nB()})})}catch{t=gp(n,{localCache:X1()})}let r=null;const s=()=>(r||(r=Cv(n)),r),i=u=>Bx(t,...String(u).split("/")),o=u=>T1(t,...String(u).split("/")),a=u=>u.exists()?Object.assign({id:u.id},u.data()):null,l=(u,f)=>{f=f||{};const p=[];return(f.where||[]).forEach(A=>p.push(M1(A[0],A[1],A[2]))),f.order&&p.push(L1(f.order[0],f.order[1]||"asc")),f.limit&&p.push(U1(f.limit)),V1(o(u),...p)},x=u=>{if(u&&typeof u=="object"&&!Array.isArray(u)){if(u.$ts)return iB();if(u.$inc!==void 0)return oB(u.$inc);if(u.$del)return sB();const f={};for(const p of Object.keys(u))f[p]=x(u[p]);return f}return Array.isArray(u)?u.map(x):u};Object.assign(He,{user:()=>e.currentUser?{uid:e.currentUser.uid,email:e.currentUser.email}:null,onAuth:u=>vd(e,f=>u(f?{uid:f.uid,email:f.email}:null)),signUp:async(u,f)=>(await YA(e,u,f)).user.uid,signIn:async(u,f)=>(await XA(e,u,f)).user.uid,signOut:()=>ZA(e),deleteMe:()=>e.currentUser?e.currentUser.delete():null,changePw:async(u,f)=>{const p=e.currentUser;if(!p)throw new Error("not-signed-in");try{await Dd(p,f)}catch(A){if(u)await QA(p,cr.credential(p.email,u)),await Dd(p,f);else throw A}},get:async u=>a(await z1(i(u))),set:(u,f,p)=>W1(i(u),x(f),p?{merge:!0}:{}),update:(u,f)=>K1(i(u),x(f)),del:u=>G1(i(u)),add:async(u,f)=>(await H1(o(u),x(f))).id,query:async(u,f)=>(await $1(l(u,f))).docs.map(a),listenDoc:(u,f,p)=>kp(i(u),A=>f(a(A)),A=>p&&p(A)),listenQ:(u,f,p,A)=>kp(l(u,f),w=>p(w.docs.map(a),w.docChanges().map(v=>({type:v.type,id:v.doc.id}))),w=>A&&A(w)),batch:async u=>{const f=aB(t);u.forEach(([p,A,w])=>{p==="set"?f.set(i(A),x(w)):p==="merge"?f.set(i(A),x(w),{merge:!0}):p==="update"?f.update(i(A),x(w)):p==="del"&&f.delete(i(A))}),await f.commit()},newId:u=>Bx(o(u)).id,rt:{online:u=>{const f=s();u?Bv(f):yv(f)},on:(u,f)=>T8(en(s(),u),p=>f(p.val()),()=>f(null)),onAdd:(u,f)=>hv(en(s(),u),p=>f(p.key,p.val())),get:async u=>(await uv(en(s(),u))).val(),set:(u,f)=>Vu(en(s(),u),f),update:(u,f)=>xv(en(s(),u),f),remove:u=>lv(en(s(),u)),push:(u,f)=>cv(en(s(),u),f).key,disc:(u,f)=>{const p=w8(en(s(),u));return f===null?p.remove():p.set(f)},cancelDisc:u=>w8(en(s(),u)).cancel(),tx:(u,f)=>Iv(en(s(),u),f).then(p=>({ok:p.committed,val:p.snapshot.val()})),ts:Fv}});let h=null;He.push={supported:async()=>He.native||await oc().catch(()=>!1),onMessage:u=>{h=u},enable:async()=>{if(He.native){let v=await qr.checkPermissions();return v.receive!=="granted"&&(v=await qr.requestPermissions()),v.receive!=="granted"?{ok:!1,why:"denied"}:await new Promise(async R=>{const V=setTimeout(()=>R({ok:!1,why:"timeout"}),15e3);await qr.addListener("registration",T=>{clearTimeout(V),R({ok:!0,token:T.value,plat:"android"})}),await qr.addListener("registrationError",T=>{clearTimeout(V),R({ok:!1,why:String(T&&T.error||"error")})}),await qr.register()})}const u=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,f=matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;if(!await oc().catch(()=>!1))return{ok:!1,why:u&&!f?"ios-home":"unsupported"};if(!Qn.vapidKey)return{ok:!1,why:"no-vapid"};if(await Notification.requestPermission()!=="granted")return{ok:!1,why:"denied"};const A=await navigator.serviceWorker.register("firebase-messaging-sw.js"),w=await Z4(lg(n),{vapidKey:Qn.vapidKey,serviceWorkerRegistration:A});return w?{ok:!0,token:w,plat:"web"}:{ok:!1,why:"no-token"}}},He.native?(qr.addListener("pushNotificationReceived",u=>h&&h({title:u.title,body:u.body,data:u.data||{},tapped:!1})),qr.addListener("pushNotificationActionPerformed",u=>h&&h({title:u.notification.title,body:u.notification.body,data:u.notification.data||{},tapped:!0}))):oc().then(u=>{u&&eF(lg(n),f=>h&&h({title:f.notification&&f.notification.title,body:f.notification&&f.notification.body,data:f.data||{},tapped:!1}))}).catch(()=>{}),He.ready=!0,vd(e,()=>{He.authReady||(He.authReady=!0,cc("fbready",{ok:!0}))})}He.qr=(n,e,t)=>{try{const r=mF(n,e,t,{inversionAttempts:"dontInvert"});return r?r.data:null}catch{return null}};const gF=async n=>{const e=n instanceof Blob?n:new Blob([n]);return await new Promise((t,r)=>{const s=new FileReader;s.onload=()=>t(String(s.result).split(",")[1]),s.onerror=r,s.readAsDataURL(e)})};He.saveFile=async(n,e,t)=>{if(!He.native)return!1;const r=String(n||"file").replace(/[^\w.\- ]+/g,"_").slice(0,80),s=await uF.writeFile({path:r,data:await gF(e),directory:eh.Cache});try{await hF.share({title:r,url:s.uri,dialogTitle:"Save or send "+r})}catch(i){if(!/cancel/i.test(String(i&&i.message)))throw i}return!0},He.native&&(Uo.addListener("backButton",()=>cc("fbback",{})),Uo.addListener("appStateChange",n=>cc("fbstate",{active:n.isActive})),He.exitApp=()=>Uo.minimizeApp?Uo.minimizeApp():Uo.exitApp()),He.err&&cc("fbready",{ok:!1});class _F extends Lo{constructor(){super(),this.handleVisibilityChange=()=>{const e={isActive:document.hidden!==!0};this.notifyListeners("appStateChange",e),document.hidden?this.notifyListeners("pause",null):this.notifyListeners("resume",null)},document.addEventListener("visibilitychange",this.handleVisibilityChange,!1)}exitApp(){throw this.unimplemented("Not implemented on web.")}async getInfo(){throw this.unimplemented("Not implemented on web.")}async getLaunchUrl(){return{url:""}}async getState(){return{isActive:document.hidden!==!0}}async minimizeApp(){throw this.unimplemented("Not implemented on web.")}async toggleBackButtonHandler(){throw this.unimplemented("Not implemented on web.")}}const CF=Object.freeze(Object.defineProperty({__proto__:null,AppWeb:_F},Symbol.toStringTag,{value:"Module"}));function fg(n){const e=n.split("/").filter(r=>r!=="."),t=[];return e.forEach(r=>{r===".."&&t.length>0&&t[t.length-1]!==".."?t.pop():t.push(r)}),t.join("/")}function AF(n,e){n=fg(n),e=fg(e);const t=n.split("/"),r=e.split("/");return n!==e&&t.every((s,i)=>s===r[i])}class lc extends Lo{constructor(){super(...arguments),this.DB_VERSION=1,this.DB_NAME="Disc",this._writeCmds=["add","put","delete"],this.downloadFile=async e=>{var t,r;const s=hg(e,e.webFetchExtra),i=await fetch(e.url,s);let o;if(!e.progress)o=await i.blob();else if(!i?.body)o=new Blob;else{const l=i.body.getReader();let x=0;const h=[],u=i.headers.get("content-type"),f=parseInt(i.headers.get("content-length")||"0",10);for(;;){const{done:w,value:v}=await l.read();if(w)break;h.push(v),x+=v?.length||0;const R={url:e.url,bytes:x,contentLength:f};this.notifyListeners("progress",R)}const p=new Uint8Array(x);let A=0;for(const w of h)typeof w>"u"||(p.set(w,A),A+=w.length);o=new Blob([p.buffer],{type:u||void 0})}return{path:(await this.writeFile({path:e.path,directory:(t=e.directory)!==null&&t!==void 0?t:void 0,recursive:(r=e.recursive)!==null&&r!==void 0?r:!1,data:o})).uri,blob:o}}}readFileInChunks(e,t){throw this.unavailable("Method not implemented.")}async initDb(){if(this._db!==void 0)return this._db;if(!("indexedDB"in window))throw this.unavailable("This browser doesn't support IndexedDB");return new Promise((e,t)=>{const r=indexedDB.open(this.DB_NAME,this.DB_VERSION);r.onupgradeneeded=lc.doUpgrade,r.onsuccess=()=>{this._db=r.result,e(r.result)},r.onerror=()=>t(r.error),r.onblocked=()=>{console.warn("db blocked")}})}static doUpgrade(e){const r=e.target.result;switch(e.oldVersion){case 0:case 1:default:r.objectStoreNames.contains("FileStorage")&&r.deleteObjectStore("FileStorage"),r.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}}async dbRequest(e,t){const r=this._writeCmds.indexOf(e)!==-1?"readwrite":"readonly";return this.initDb().then(s=>new Promise((i,o)=>{const x=s.transaction(["FileStorage"],r).objectStore("FileStorage")[e](...t);x.onsuccess=()=>i(x.result),x.onerror=()=>o(x.error)}))}async dbIndexRequest(e,t,r){const s=this._writeCmds.indexOf(t)!==-1?"readwrite":"readonly";return this.initDb().then(i=>new Promise((o,a)=>{const u=i.transaction(["FileStorage"],s).objectStore("FileStorage").index(e)[t](...r);u.onsuccess=()=>o(u.result),u.onerror=()=>a(u.error)}))}getPath(e,t){const r=t!==void 0?t.replace(/^[/]+|[/]+$/g,""):"";let s="";return e!==void 0&&(s+="/"+e),t!==""&&(s+="/"+r),s}async clear(){(await this.initDb()).transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear()}async readFile(e){const t=this.getPath(e.directory,e.path),r=await this.dbRequest("get",[t]);if(r===void 0)throw Error("File does not exist.");return{data:r.content?r.content:""}}async writeFile(e){const t=this.getPath(e.directory,e.path);let r=e.data;const s=e.encoding,i=e.recursive,o=await this.dbRequest("get",[t]);if(o&&o.type==="directory")throw Error("The supplied path is a directory.");const a=t.substr(0,t.lastIndexOf("/"));if(await this.dbRequest("get",[a])===void 0){const u=a.indexOf("/",1);if(u!==-1){const f=a.substr(u);await this.mkdir({path:f,directory:e.directory,recursive:i})}}if(!s&&!(r instanceof Blob)&&(r=r.indexOf(",")>=0?r.split(",")[1]:r,!this.isBase64String(r)))throw Error("The supplied data is not valid base64 content.");const x=Date.now(),h={path:t,folder:a,type:"file",size:r instanceof Blob?r.size:r.length,ctime:x,mtime:x,content:r};return await this.dbRequest("put",[h]),{uri:h.path}}async appendFile(e){const t=this.getPath(e.directory,e.path);let r=e.data;const s=e.encoding,i=t.substr(0,t.lastIndexOf("/")),o=Date.now();let a=o;const l=await this.dbRequest("get",[t]);if(l&&l.type==="directory")throw Error("The supplied path is a directory.");if(await this.dbRequest("get",[i])===void 0){const u=i.indexOf("/",1);if(u!==-1){const f=i.substr(u);await this.mkdir({path:f,directory:e.directory,recursive:!0})}}if(!s&&!this.isBase64String(r))throw Error("The supplied data is not valid base64 content.");if(l!==void 0){if(l.content instanceof Blob)throw Error("The occupied entry contains a Blob object which cannot be appended to.");l.content!==void 0&&!s?r=btoa(atob(l.content)+atob(r)):r=l.content+r,a=l.ctime}const h={path:t,folder:i,type:"file",size:r.length,ctime:a,mtime:o,content:r};await this.dbRequest("put",[h])}async deleteFile(e){const t=this.getPath(e.directory,e.path);if(await this.dbRequest("get",[t])===void 0)throw Error("File does not exist.");if((await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])).length!==0)throw Error("Folder is not empty.");await this.dbRequest("delete",[t])}async mkdir(e){const t=this.getPath(e.directory,e.path),r=e.recursive,s=t.substr(0,t.lastIndexOf("/")),i=(t.match(/\//g)||[]).length,o=await this.dbRequest("get",[s]),a=await this.dbRequest("get",[t]);if(i===1)throw Error("Cannot create Root directory");if(a!==void 0)throw Error("Current directory does already exist.");if(!r&&i!==2&&o===void 0)throw Error("Parent directory must exist");if(r&&i!==2&&o===void 0){const h=s.substr(s.indexOf("/",1));await this.mkdir({path:h,directory:e.directory,recursive:r})}const l=Date.now(),x={path:t,folder:s,type:"directory",size:0,ctime:l,mtime:l};await this.dbRequest("put",[x])}async rmdir(e){const{path:t,directory:r,recursive:s}=e,i=this.getPath(r,t),o=await this.dbRequest("get",[i]);if(o===void 0)throw Error("Folder does not exist.");if(o.type!=="directory")throw Error("Requested path is not a directory");const a=await this.readdir({path:t,directory:r});if(a.files.length!==0&&!s)throw Error("Folder is not empty");for(const l of a.files){const x=`${t}/${l.name}`;(await this.stat({path:x,directory:r})).type==="file"?await this.deleteFile({path:x,directory:r}):await this.rmdir({path:x,directory:r,recursive:s})}await this.dbRequest("delete",[i])}async readdir(e){const t=this.getPath(e.directory,e.path),r=await this.dbRequest("get",[t]);if(e.path!==""&&r===void 0)throw Error("Folder does not exist.");const s=await this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)]);return{files:await Promise.all(s.map(async o=>{let a=await this.dbRequest("get",[o]);return a===void 0&&(a=await this.dbRequest("get",[o+"/"])),{name:o.substring(t.length+1),type:a.type,size:a.size,ctime:a.ctime,mtime:a.mtime,uri:a.path}}))}}async getUri(e){const t=this.getPath(e.directory,e.path);let r=await this.dbRequest("get",[t]);return r===void 0&&(r=await this.dbRequest("get",[t+"/"])),{uri:r?.path||t}}async stat(e){const t=this.getPath(e.directory,e.path);let r=await this.dbRequest("get",[t]);if(r===void 0&&(r=await this.dbRequest("get",[t+"/"])),r===void 0)throw Error("Entry does not exist.");return{name:r.path.substring(t.length+1),type:r.type,size:r.size,ctime:r.ctime,mtime:r.mtime,uri:r.path}}async rename(e){await this._copy(e,!0)}async copy(e){return this._copy(e,!1)}async requestPermissions(){return{publicStorage:"granted"}}async checkPermissions(){return{publicStorage:"granted"}}async _copy(e,t=!1){let{toDirectory:r}=e;const{to:s,from:i,directory:o}=e;if(!s||!i)throw Error("Both to and from must be provided");r||(r=o);const a=this.getPath(o,i),l=this.getPath(r,s);if(a===l)return{uri:l};if(AF(a,l))throw Error("To path cannot contain the from path");let x;try{x=await this.stat({path:s,directory:r})}catch{const A=s.split("/");A.pop();const w=A.join("/");if(A.length>0&&(await this.stat({path:w,directory:r})).type!=="directory")throw new Error("Parent directory of the to path is a file")}if(x&&x.type==="directory")throw new Error("Cannot overwrite a directory with a file");const h=await this.stat({path:i,directory:o}),u=async(p,A,w)=>{const v=this.getPath(r,p),R=await this.dbRequest("get",[v]);R.ctime=A,R.mtime=w,await this.dbRequest("put",[R])},f=h.ctime?h.ctime:Date.now();switch(h.type){case"file":{const p=await this.readFile({path:i,directory:o});t&&await this.deleteFile({path:i,directory:o});let A;!(p.data instanceof Blob)&&!this.isBase64String(p.data)&&(A=th.UTF8);const w=await this.writeFile({path:s,directory:r,data:p.data,encoding:A});return t&&await u(s,f,h.mtime),w}case"directory":{if(x)throw Error("Cannot move a directory over an existing object");try{await this.mkdir({path:s,directory:r,recursive:!1}),t&&await u(s,f,h.mtime)}catch{}const p=(await this.readdir({path:i,directory:o})).files;for(const A of p)await this._copy({from:`${i}/${A.name}`,to:`${s}/${A.name}`,directory:o,toDirectory:r},t);t&&await this.rmdir({path:i,directory:o})}}return{uri:l}}isBase64String(e){try{return btoa(atob(e))==e}catch{return!1}}}lc._debug=!0;const yF=Object.freeze(Object.defineProperty({__proto__:null,FilesystemWeb:lc},Symbol.toStringTag,{value:"Module"}));class BF extends Lo{async canShare(){return typeof navigator>"u"||!navigator.share?{value:!1}:{value:!0}}async share(e){if(typeof navigator>"u"||!navigator.share)throw this.unavailable("Share API not available in this browser");return await navigator.share({title:e.title,text:e.text,url:e.url}),{}}}const DF=Object.freeze(Object.defineProperty({__proto__:null,ShareWeb:BF},Symbol.toStringTag,{value:"Module"}))})();
