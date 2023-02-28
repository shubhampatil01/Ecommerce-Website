/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

var h=Object.create;var i=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var O=(e,n)=>{for(var t in n)i(e,t,{get:n[t],enumerable:!0})},p=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let s of P(n))!E.call(e,s)&&s!==t&&i(e,s,{get:()=>n[s],enumerable:!(r=C(n,s))||r.enumerable});return e};var m=(e,n,t)=>(t=e!=null?h(x(e)):{},p(n||!e||!e.__esModule?i(t,"default",{value:e,enumerable:!0}):t,e)),w=e=>p(i({},"__esModule",{value:!0}),e);var q={};O(q,{getCredential:()=>l});module.exports=w(q);var g=m(require("http")),a=process.env.REMOTE_CONTAINERS_IPC;function l(e){let n="";process.stdin.setEncoding("utf8"),process.stdin.on("data",t=>{n+=t,(n===`
`||n.indexOf(`

`,n.length-2)!==-1)&&(process.stdin.pause(),f(e,n).catch(console.error))}),process.stdin.on("end",()=>{f(e,n).catch(console.error)})}async function f(e,n){let t=await S({args:e,stdin:n});t||process.exit(-1);let{stdout:r,stderr:s,code:o}=JSON.parse(t);r&&process.stdout.write(r),s&&process.stderr.write(s),o&&process.exit(o)}function S(e){return new Promise(n=>{let t=JSON.stringify(e);if(!a){console.error("Dev Containers CLI: RPC pipe not configured. Message: "+t),n(void 0);return}let s=g.request({socketPath:a,path:"/",method:"POST"},o=>{let d=[];o.setEncoding("utf8"),o.on("data",c=>{d.push(c)}),o.on("error",c=>u("Error in response",c)),o.on("end",()=>{n(d.join(""))})});s.on("error",o=>u("Error in request",o)),s.write(t),s.end()})}function u(...e){console.error("Unable to connect to VS Code Dev Containers extension."),console.error(...e),process.exit(1)}l(process.argv.slice(2));0&&(module.exports={getCredential});
//# sourceMappingURL=remoteContainersCLI.js.map