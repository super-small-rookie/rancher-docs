"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[75011],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(f,a(a({ref:e},c),{},{components:n})):i.createElement(f,a({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41693:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"\u5728\u5177\u6709 Pod \u5b89\u5168\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u542f\u7528 Istio",weight:1},s=void 0,p={unversionedId:"explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",id:"explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",title:"\u5728\u5177\u6709 Pod \u5b89\u5168\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u542f\u7528 Istio",description:"\u5982\u679c\u4f60\u542f\u7528\u4e86\u9650\u5236\u6027 Pod \u5b89\u5168\u7b56\u7565\uff08Pod Security Policy\uff09\uff0c\u7531\u4e8e Istio \u9700\u8981\u67d0\u4e9b\u6743\u9650\u624d\u80fd\u81ea\u884c\u5b89\u88c5\u548c\u7ba1\u7406 pod \u57fa\u7840\u8bbe\u65bd\uff0c\u56e0\u6b64 Istio \u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u914d\u7f6e\u4e00\u4e2a\u4e3a Istio \u542f\u7528\u4e86 PSP \u7684\u96c6\u7fa4\uff0c\u5e76\u8bbe\u7f6e Istio CNI \u63d2\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",sourceDirName:"explanations/integrations-in-rancher/istio/configuration-options",slug:"/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",permalink:"/zh/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/configuration-options/pod-security-policies.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"\u5728\u5177\u6709 Pod \u5b89\u5168\u7b56\u7565\u7684\u60c5\u51b5\u4e0b\u542f\u7528 Istio",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u9009\u9879",permalink:"/zh/pages-for-subheaders/configuration-options"},next:{title:"\u9009\u62e9\u5668\u548c\u6293\u53d6\u914d\u7f6e",permalink:"/zh/explanations/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"}},c={},u=[{value:"1. \u5c06 PodSecurityPolicy \u8bbe\u7f6e\u4e3a\u4e0d\u53d7\u9650\u5236",id:"1-\u5c06-podsecuritypolicy-\u8bbe\u7f6e\u4e3a\u4e0d\u53d7\u9650\u5236",level:3},{value:"2. \u542f\u7528 CNI",id:"2-\u542f\u7528-cni",level:3},{value:"3. \u9a8c\u8bc1 CNI \u662f\u5426\u6b63\u5e38\u5de5\u4f5c",id:"3-\u9a8c\u8bc1-cni-\u662f\u5426\u6b63\u5e38\u5de5\u4f5c",level:3}],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u542f\u7528\u4e86\u9650\u5236\u6027 Pod \u5b89\u5168\u7b56\u7565\uff08Pod Security Policy\uff09\uff0c\u7531\u4e8e Istio \u9700\u8981\u67d0\u4e9b\u6743\u9650\u624d\u80fd\u81ea\u884c\u5b89\u88c5\u548c\u7ba1\u7406 pod \u57fa\u7840\u8bbe\u65bd\uff0c\u56e0\u6b64 Istio \u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u914d\u7f6e\u4e00\u4e2a\u4e3a Istio \u542f\u7528\u4e86 PSP \u7684\u96c6\u7fa4\uff0c\u5e76\u8bbe\u7f6e Istio CNI \u63d2\u4ef6\u3002"),(0,o.kt)("p",null,"Istio CNI \u63d2\u4ef6\u4e0d\u518d\u8981\u6c42\u6bcf\u4e2a\u5e94\u7528 pod \u5177\u6709\u7279\u6743 ",(0,o.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," \u5bb9\u5668\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/additional-setup/cni"},"Istio CNI \u63d2\u4ef6\u6587\u6863"),"\u3002\u8bf7\u6ce8\u610f\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/about/feature-stages/"},"Istio CNI \u63d2\u4ef6\u5904\u4e8e alpha \u9636\u6bb5"),"\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u5fc5\u987b\u662f RKE Kubernetes \u96c6\u7fa4\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4f7f\u7528\u9ed8\u8ba4 PodSecurityPolicy \u521b\u5efa\u96c6\u7fa4\u3002")),(0,o.kt)("p",{parentName:"div"},"\u8981\u5728\u4f7f\u7528 Rancher UI \u521b\u5efa Kubernetes \u96c6\u7fa4\u65f6\u542f\u7528 Pod \u5b89\u5168\u7b56\u7565\u652f\u6301\uff0c\u8bf7\u8f6c\u5230",(0,o.kt)("b",null,"\u9ad8\u7ea7\u9009\u9879"),"\u3002\u5728 ",(0,o.kt)("b",null,"Pod \u5b89\u5168\u7b56\u7565\u652f\u6301"),"\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("b",null,"\u542f\u7528"),"\uff0c\u7136\u540e\u9009\u62e9\u4e00\u4e2a\u9ed8\u8ba4\u7684 pod \u5b89\u5168\u7b56\u7565\u3002"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-%E5%B0%86-podsecuritypolicy-%E8%AE%BE%E7%BD%AE%E4%B8%BA%E4%B8%8D%E5%8F%97%E9%99%90%E5%88%B6"},"\u5c06 PodSecurityPolicy \u8bbe\u7f6e\u4e3a\u4e0d\u53d7\u9650\u5236")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-%E5%90%AF%E7%94%A8-cni"},"\u542f\u7528 CNI")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-%E9%AA%8C%E8%AF%81-cni-%E6%98%AF%E5%90%A6%E6%AD%A3%E5%B8%B8%E5%B7%A5%E4%BD%9C"},"\u9a8c\u8bc1 CNI \u662f\u5426\u6b63\u5e38\u5de5\u4f5c"))),(0,o.kt)("h3",{id:"1-\u5c06-podsecuritypolicy-\u8bbe\u7f6e\u4e3a\u4e0d\u53d7\u9650\u5236"},"1. \u5c06 PodSecurityPolicy \u8bbe\u7f6e\u4e3a\u4e0d\u53d7\u9650\u5236"),(0,o.kt)("p",null,"\u4e0d\u53d7\u9650\u5236\u7684 PSP \u652f\u6301\u5b89\u88c5 Istio\u3002"),(0,o.kt)("p",null,"\u5728\u5b89\u88c5 Istio \u7684\u9879\u76ee\u6216\u8ba1\u5212\u5b89\u88c5 Istio \u7684\u9879\u76ee\u4e2d\uff0c\u5c06 PSP \u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"unrestricted"),"\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u627e\u5230",(0,o.kt)("strong",{parentName:"li"},"\u9879\u76ee: System"),"\uff0c\u7136\u540e\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06 Pod \u5b89\u5168\u7b56\u7565\u9009\u9879\u66f4\u6539\u4e3a\u4e0d\u53d7\u9650\u5236\uff0c\u7136\u540e\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,o.kt)("h3",{id:"2-\u542f\u7528-cni"},"2. \u542f\u7528 CNI"),(0,o.kt)("p",null,"\u901a\u8fc7",(0,o.kt)("strong",{parentName:"p"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u5b89\u88c5\u6216\u5347\u7ea7 Istio \u65f6\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u7ec4\u4ef6"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u4e2d",(0,o.kt)("strong",{parentName:"li"},"\u542f\u7528 CNI"),"\u65c1\u8fb9\u7684\u6846\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5b8c\u6210 Istio \u7684\u5b89\u88c5\u6216\u5347\u7ea7\u3002")),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u6765\u542f\u7528 CNI\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"istio_cni.enabled: true\n")),(0,o.kt)("p",null,"\u5728\u96c6\u7fa4\u4e2d\u542f\u7528 CNI \u540e\uff0cIstio \u5e94\u8be5\u80fd\u6210\u529f\u5b89\u88c5\u3002"),(0,o.kt)("h3",{id:"3-\u9a8c\u8bc1-cni-\u662f\u5426\u6b63\u5e38\u5de5\u4f5c"},"3. \u9a8c\u8bc1 CNI \u662f\u5426\u6b63\u5e38\u5de5\u4f5c"),(0,o.kt)("p",null,"\u901a\u8fc7\u90e8\u7f72",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/examples/bookinfo/"},"\u793a\u4f8b\u5e94\u7528"),"\u6216\u90e8\u7f72\u4f60\u81ea\u5df1\u7684\u5e94\u7528\uff0c\u6765\u9a8c\u8bc1 CNI \u662f\u5426\u6b63\u5e38\u5de5\u4f5c\u3002"))}m.isMDXComponent=!0}}]);