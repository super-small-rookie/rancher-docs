"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84936],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),g=o,p=h["".concat(l,".").concat(g)]||h[g]||d[g]||i;return n?r.createElement(p,a(a({ref:t},c),{},{components:n})):r.createElement(p,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"User ID Tracking in Audit Logs",weight:110},l=void 0,u={unversionedId:"troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs",id:"troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs",title:"User ID Tracking in Audit Logs",description:"The following audit logs are used in Rancher to track events occuring on the local and downstream clusters:",source:"@site/docs/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs",permalink:"/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"User ID Tracking in Audit Logs",weight:110},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/troubleshooting/other-troubleshooting-tips/logging"},next:{title:"Rotation of Expired Webhook Certificates",permalink:"/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"}},c={},d=[{value:"Feature Description",id:"feature-description",level:3}],h={toc:d};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following audit logs are used in Rancher to track events occuring on the local and downstream clusters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/audit-log/"},"Kubernetes Audit Logs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"},"Rancher API Audit Logs"))),(0,i.kt)("p",null,"Audit logs in Rancher v2.6 have been enhanced to include the external Identity Provider name (common name of the user in the external Auth provider) in both the Rancher and downstream Kubernetes audit logs."),(0,i.kt)("p",null,"Before v2.6, a Rancher Admin could not trace an event from the Rancher audit logs and into the Kubernetes audit logs without knowing the mapping of the external Identity Provider username to the userId (",(0,i.kt)("inlineCode",{parentName:"p"},"u-xXXX"),") used in Rancher.\nTo know this mapping, the cluster admins needed to have access to Rancher API, UI, and the local management cluster."),(0,i.kt)("p",null,"Now with this feature, a downstream cluster admin should be able to look at the Kubernetes audit logs and know which specific external Identity Provider (IDP) user performed an action without needing to view anything in Rancher.\nIf the audit logs are shipped off of the cluster, a user of the logging system should be able to identify the user in the external Identity Provider system.",(0,i.kt)("br",{parentName:"p"}),"\n","A Rancher Admin should now be able to view Rancher audit logs and follow through to the Kubernetes audit log by using the external Identity Provider username."),(0,i.kt)("h3",{id:"feature-description"},"Feature Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'When Kubernetes Audit logs are enabled on the downstream cluster, in each event that is logged, the external Identity Provider\'s username is now logged for each request, at the "metadata" level.'),(0,i.kt)("li",{parentName:"ul"},"When Rancher API Audit logs are enabled on the Rancher installation, the external Identity Provider's username is also logged now at the ",(0,i.kt)("inlineCode",{parentName:"li"},"auditLog.level=1")," for each request that hits the Rancher API server, including the login requests.")))}g.isMDXComponent=!0}}]);