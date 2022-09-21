"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68707],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=i(n),b=o,d=f["".concat(c,".").concat(b)]||f[b]||p[b]||a;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],u={title:"Kubernetes \u7ec4\u4ef6",weight:100},c=void 0,i={unversionedId:"pages-for-subheaders/kubernetes-components",id:"pages-for-subheaders/kubernetes-components",title:"Kubernetes \u7ec4\u4ef6",description:"\u672c\u6587\u5217\u51fa\u7684\u547d\u4ee4\u548c\u6b65\u9aa4\u9002\u7528\u4e8e Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u7684\u6838\u5fc3 Kubernetes \u7ec4\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/kubernetes-components.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/kubernetes-components",permalink:"/zh/pages-for-subheaders/kubernetes-components",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/kubernetes-components.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"Kubernetes \u7ec4\u4ef6",weight:100},sidebar:"tutorialSidebar",previous:{title:"\u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting"},next:{title:"etcd \u8282\u70b9\u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"}},l={},p=[],f={toc:p};function b(e){var t=e.components,u=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u5217\u51fa\u7684\u547d\u4ee4\u548c\u6b65\u9aa4\u9002\u7528\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes")," \u96c6\u7fa4\u4e0a\u7684\u6838\u5fc3 Kubernetes \u7ec4\u4ef6\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u5305\u62ec\u4ee5\u4e0b\u7c7b\u522b\u7684\u6545\u969c\u6392\u9664\u63d0\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"},"etcd \u8282\u70b9\u6545\u969c\u6392\u9664")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes"},"Controlplane \u8282\u70b9\u6545\u969c\u6392\u9664")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"},"nginx-proxy \u8282\u70b9\u6545\u969c\u6392\u9664")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/troubleshooting/kubernetes-components/troubleshooting-worker-nodes-and-generic-components"},"Worker \u8282\u70b9\u548c\u901a\u7528\u7ec4\u4ef6\u6545\u969c\u6392\u9664"))),(0,a.kt)("h1",{id:"kubernetes-\u7ec4\u4ef6\u56fe"},"Kubernetes \u7ec4\u4ef6\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u96c6\u7fa4\u56fe",src:n(56492).Z,width:"772",height:"1145"}),(0,a.kt)("br",null)),(0,a.kt)("sup",null,"\u7ebf\u6761\u8868\u793a\u7ec4\u4ef6\u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u800c\u989c\u8272\u7eaf\u7cb9\u7528\u4e8e\u89c6\u89c9\u8f85\u52a9\u3002"))}b.isMDXComponent=!0},56492:function(e,t,n){t.Z=n.p+"assets/images/clusterdiagram-2b66ee124fed594265b3bc07fa1f145d.svg"}}]);