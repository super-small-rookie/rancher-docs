"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1233],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,f=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return r?o.createElement(f,a(a({ref:t},u),{},{components:r})):o.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},68073:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"Rotation of Expired Webhook Certificates",weight:120},s=void 0,l={unversionedId:"troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",id:"troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",title:"Rotation of Expired Webhook Certificates",description:"For Rancher versions that have rancher-webhook installed, certain versions created certificates that will expire after one year. It will be necessary for you to rotate your webhook certificate if the certificate did not renew.",source:"@site/docs/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",permalink:"/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Rotation of Expired Webhook Certificates",weight:120},sidebar:"tutorialSidebar",previous:{title:"User ID Tracking in Audit Logs",permalink:"/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs"},next:{title:"Contributing to Rancher",permalink:"/contribute-to-rancher"}},u={},p=[{value:"1. Users with cluster access, run the following commands:",id:"1-users-with-cluster-access-run-the-following-commands",level:5},{value:"2. Users with no cluster access via <code>kubectl</code>:",id:"2-users-with-no-cluster-access-via-kubectl",level:5}],h={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For Rancher versions that have ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-webhook")," installed, certain versions created certificates that will expire after one year. It will be necessary for you to rotate your webhook certificate if the certificate did not renew."),(0,i.kt)("p",null,"In Rancher v2.6.3 and up, rancher-webhook deployments will automatically renew their TLS certificate when it is within 30 or fewer days of its expiration date. If you are using v2.6.2 or below, there are two methods to work around this issue:"),(0,i.kt)("h5",{id:"1-users-with-cluster-access-run-the-following-commands"},"1. Users with cluster access, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl delete secret -n cattle-system cattle-webhook-tls\nkubectl delete mutatingwebhookconfigurations.admissionregistration.k8s.io --ignore-not-found=true rancher.cattle.io\nkubectl delete pod -n cattle-system -l app=rancher-webhook\n")),(0,i.kt)("h5",{id:"2-users-with-no-cluster-access-via-kubectl"},"2. Users with no cluster access via ",(0,i.kt)("inlineCode",{parentName:"h5"},"kubectl"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-webhook-tls")," secret in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace in the local cluster.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher.cattle.io")," mutating webhook")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-webhook")," pod in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace in the local cluster."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The webhook certificate expiration issue is not specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-webhook-tls")," as listed in the examples. You will fill in your expired certificate secret accordingly."))))}d.isMDXComponent=!0}}]);