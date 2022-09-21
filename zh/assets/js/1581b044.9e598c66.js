"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64647],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(r),f=a,h=g["".concat(u,".").concat(f)]||g[f]||s[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},70202:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"\u96c6\u7fa4\u5de5\u5177\uff1aLogging\uff0cMonitoring \u548c\u53ef\u89c6\u5316",weight:2033},u=void 0,c={unversionedId:"reference-guides/rancher-cluster-tools",id:"reference-guides/rancher-cluster-tools",title:"\u96c6\u7fa4\u5de5\u5177\uff1aLogging\uff0cMonitoring \u548c\u53ef\u89c6\u5316",description:"Rancher \u5305\u542b Kubernetes \u4e2d\u672a\u5305\u542b\u7684\u5404\u79cd\u5de5\u5177\u6765\u534f\u52a9\u4f60\u8fdb\u884c DevOps \u64cd\u4f5c\u3002Rancher \u53ef\u4ee5\u4e0e\u5916\u90e8\u670d\u52a1\u96c6\u6210\uff0c\u8ba9\u4f60\u7684\u96c6\u7fa4\u66f4\u9ad8\u6548\u5730\u8fd0\u884c\u3002\u5de5\u5177\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/rancher-cluster-tools.md",sourceDirName:"reference-guides",slug:"/reference-guides/rancher-cluster-tools",permalink:"/zh/reference-guides/rancher-cluster-tools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/rancher-cluster-tools.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"\u96c6\u7fa4\u5de5\u5177\uff1aLogging\uff0cMonitoring \u548c\u53ef\u89c6\u5316",weight:2033},sidebar:"tutorialSidebar",previous:{title:"API \u4ee4\u724c",permalink:"/zh/reference-guides/about-the-api/api-tokens"},next:{title:"\u9879\u76ee\u5de5\u5177\uff1aLogging\uff0cMonitoring \u548c\u53ef\u89c6\u5316",permalink:"/zh/reference-guides/rancher-project-tools"}},p={},s=[{value:"Logging",id:"logging",level:2},{value:"\u76d1\u63a7\u548c\u544a\u8b66",id:"\u76d1\u63a7\u548c\u544a\u8b66",level:2},{value:"Istio",id:"istio",level:2},{value:"OPA Gatekeeper",id:"opa-gatekeeper",level:2},{value:"CIS \u626b\u63cf",id:"cis-\u626b\u63cf",level:2}],g={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher \u5305\u542b Kubernetes \u4e2d\u672a\u5305\u542b\u7684\u5404\u79cd\u5de5\u5177\u6765\u534f\u52a9\u4f60\u8fdb\u884c DevOps \u64cd\u4f5c\u3002Rancher \u53ef\u4ee5\u4e0e\u5916\u90e8\u670d\u52a1\u96c6\u6210\uff0c\u8ba9\u4f60\u7684\u96c6\u7fa4\u66f4\u9ad8\u6548\u5730\u8fd0\u884c\u3002\u5de5\u5177\u5206\u4e3a\u4ee5\u4e0b\u51e0\u7c7b\uff1a"),(0,o.kt)("h2",{id:"logging"},"Logging"),(0,o.kt)("p",null,"Logging \u652f\u6301\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u548c\u5206\u6790\u96c6\u7fa4\u7684\u72b6\u6001"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684\u73af\u5883\u4e2d\u53d1\u73b0\u8d8b\u52bf"),(0,o.kt)("li",{parentName:"ul"},"\u5c06\u65e5\u5fd7\u4fdd\u5b58\u5230\u96c6\u7fa4\u5916\u90e8\u7684\u5b89\u5168\u4f4d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u968f\u65f6\u4e86\u89e3\u5bb9\u5668\u5d29\u6e83\u3001pod \u9a71\u9010\u6216\u8282\u70b9\u6b7b\u4ea1\u7b49\u4e8b\u4ef6"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u8f7b\u677e\u5730\u8c03\u8bd5\u548c\u89e3\u51b3\u95ee\u9898")),(0,o.kt)("p",null,"Rancher \u53ef\u4ee5\u4e0e Elasticsearch\u3001splunk\u3001kafka\u3001syslog \u548c fluentd \u96c6\u6210\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/logging"},"Logging \u6587\u6863"),"\u3002"),(0,o.kt)("h2",{id:"\u76d1\u63a7\u548c\u544a\u8b66"},"\u76d1\u63a7\u548c\u544a\u8b66"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher\uff0c\u901a\u8fc7\u4e1a\u754c\u9886\u5148\u5e76\u5f00\u6e90\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," \u6765\u76d1\u63a7\u96c6\u7fa4\u8282\u70b9\u3001Kubernetes \u7ec4\u4ef6\u548c\u8f6f\u4ef6\u90e8\u7f72\u7684\u72b6\u6001\u548c\u8fdb\u7a0b\u3002"),(0,o.kt)("p",null,"\u542f\u7528\u76d1\u63a7\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u544a\u8b66\u548c\u901a\u77e5\u5668\u6765\u914d\u7f6e\u63a5\u6536\u544a\u8b66\u7684\u673a\u5236\u3002"),(0,o.kt)("p",null,"\u901a\u77e5\u5668\u662f\u901a\u77e5\u4f60\u544a\u8b66\u4e8b\u4ef6\u7684\u670d\u52a1\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u901a\u77e5\u5668\u6765\u5411\u6700\u9002\u5408\u91c7\u53d6\u7ea0\u6b63\u63aa\u65bd\u7684\u5458\u5de5\u53d1\u9001\u544a\u8b66\u901a\u77e5\u3002\u652f\u6301\u4f7f\u7528 Slack\u3001\u7535\u5b50\u90ae\u4ef6\u3001PagerDuty\u3001\u5fae\u4fe1\u548c webhook \u53d1\u9001\u901a\u77e5\u3002"),(0,o.kt)("p",null,"\u544a\u8b66\u662f\u89e6\u53d1\u8fd9\u4e9b\u901a\u77e5\u7684\u89c4\u5219\u3002\u5728\u63a5\u6536\u544a\u8b66\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5728 Rancher \u4e2d\u914d\u7f6e\u4e00\u4e2a\u6216\u591a\u4e2a\u901a\u77e5\u5668\u3002\u4f60\u53ef\u4ee5\u5728\u96c6\u7fa4\u6216\u9879\u76ee\u7ea7\u522b\u8bbe\u7f6e\u544a\u8b66\u8303\u56f4\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/monitoring-and-alerting"},"\u76d1\u63a7\u6587\u6863"),"\u3002"),(0,o.kt)("h2",{id:"istio"},"Istio"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," \u662f\u4e00\u79cd\u5f00\u6e90\u5de5\u5177\uff0c\u53ef\u4ee5\u8ba9 DevOps \u56e2\u961f\u66f4\u8f7b\u677e\u5730\u89c2\u5bdf\u3001\u63a7\u5236\u3001\u6392\u67e5\u5e76\u4fdd\u62a4\u590d\u6742\u7684\u5fae\u670d\u52a1\u7f51\u7edc\u4e2d\u7684\u6d41\u91cf\u3002"),(0,o.kt)("p",null,"Rancher v2.5 \u6539\u8fdb\u4e86\u4e0e Istio \u7684\u96c6\u6210\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/istio"},"Istio \u6587\u6863"),"\u3002"),(0,o.kt)("h2",{id:"opa-gatekeeper"},"OPA Gatekeeper"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper"},"OPA Gatekeeper")," \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u5b83\u5bf9 OPA \u548c Kubernetes \u8fdb\u884c\u4e86\u96c6\u6210\uff0c\u4ee5\u901a\u8fc7\u8bb8\u53ef\u63a7\u5236\u5668 Webhook \u63d0\u4f9b\u7b56\u7565\u63a7\u5236\u3002\u6709\u5173\u5982\u4f55\u5728 Rancher \u4e2d\u542f\u7528 Gatekeeper \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/opa-gatekeeper"},"OPA Gatekeeper"),"\u3002"),(0,o.kt)("h2",{id:"cis-\u626b\u63cf"},"CIS \u626b\u63cf"),(0,o.kt)("p",null,"Rancher \u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u5b89\u5168\u626b\u63cf\u6765\u68c0\u67e5 Kubernetes \u662f\u5426\u6309\u7167 CIS Kubernetes Benchmark \u4e2d\u5b9a\u4e49\u7684\u5b89\u5168\u6700\u4f73\u5b9e\u8df5\u8fdb\u884c\u90e8\u7f72\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/cis-scan-guides"},"CIS \u626b\u63cf\u6587\u6863"),"\u3002"))}f.isMDXComponent=!0}}]);