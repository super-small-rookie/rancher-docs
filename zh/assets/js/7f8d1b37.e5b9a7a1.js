"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[68306],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,h=d["".concat(u,".").concat(c)]||d[c]||s[c]||o;return r?n.createElement(h,i(i({ref:t},m),{},{components:r})):n.createElement(h,i({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16570:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"\u914d\u7f6e PrometheusRule",weight:3},u=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",id:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",title:"\u914d\u7f6e PrometheusRule",description:"PrometheusRule \u5b9a\u4e49\u4e86\u4e00\u7ec4 Prometheus \u544a\u8b66\u548c/\u6216\u8bb0\u5f55\u89c4\u5219\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"\u914d\u7f6e PrometheusRule",weight:3},sidebar:"tutorialSidebar",previous:{title:"Prometheus \u914d\u7f6e",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"},next:{title:"\u8bbe\u7f6e\u6307\u5357",permalink:"/zh/pages-for-subheaders/istio-setup-guide"}},m={},s=[{value:"\u5728 Rancher UI \u4e2d\u521b\u5efa PrometheusRule",id:"\u5728-rancher-ui-\u4e2d\u521b\u5efa-prometheusrule",level:3},{value:"\u5173\u4e8e PrometheusRule \u81ea\u5b9a\u4e49\u8d44\u6e90",id:"\u5173\u4e8e-prometheusrule-\u81ea\u5b9a\u4e49\u8d44\u6e90",level:3},{value:"\u89c4\u5219\u7ec4",id:"\u89c4\u5219\u7ec4",level:3},{value:"\u544a\u8b66\u89c4\u5219",id:"\u544a\u8b66\u89c4\u5219",level:3},{value:"\u8bb0\u5f55\u89c4\u5219",id:"\u8bb0\u5f55\u89c4\u5219",level:3}],d={toc:s};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"PrometheusRule \u5b9a\u4e49\u4e86\u4e00\u7ec4 Prometheus \u544a\u8b66\u548c/\u6216\u8bb0\u5f55\u89c4\u5219\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u8282\u53c2\u8003\u5047\u8bbe\u4f60\u5df2\u7ecf\u719f\u6089 Monitoring \u7ec4\u4ef6\u7684\u534f\u540c\u5de5\u4f5c\u65b9\u5f0f\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"\u672c\u8282"),"\u3002"))),(0,o.kt)("h3",{id:"\u5728-rancher-ui-\u4e2d\u521b\u5efa-prometheusrule"},"\u5728 Rancher UI \u4e2d\u521b\u5efa PrometheusRule"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5df2\u5b89\u88c5 Monitoring \u5e94\u7528\u3002"))),(0,o.kt)("p",null,"\u8981\u5728 Rancher UI \u4e2d\u521b\u5efa\u89c4\u5219\u7ec4\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u521b\u5efa\u89c4\u5219\u7ec4\u7684\u96c6\u7fa4\u3002\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u76d1\u63a7 > \u9ad8\u7ea7\u9009\u9879"),"\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"PrometheusRules"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165",(0,o.kt)("strong",{parentName:"li"},"\u7ec4\u540d\u79f0"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u89c4\u5219\u3002\u5728 Rancher \u7684 UI \u4e2d\uff0c\u89c4\u5219\u7ec4\u9700\u8981\u5305\u542b\u544a\u8b66\u89c4\u5219\u6216\u8bb0\u5f55\u89c4\u5219\uff0c\u4f46\u4e0d\u80fd\u540c\u65f6\u5305\u542b\u4e24\u8005\u3002\u5982\u9700\u83b7\u53d6\u586b\u5199\u8868\u5355\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605\u4e0b\u65b9\u7684\u914d\u7f6e\u9009\u9879\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u544a\u8b66\u53ef\u4ee5\u5411\u63a5\u6536\u5668\u53d1\u9001\u901a\u77e5\u3002"),(0,o.kt)("h3",{id:"\u5173\u4e8e-prometheusrule-\u81ea\u5b9a\u4e49\u8d44\u6e90"},"\u5173\u4e8e PrometheusRule \u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,o.kt)("p",null,"\u5f53\u4f60\u5b9a\u4e49\u89c4\u5219\u65f6\uff08\u5728 PrometheusRule \u8d44\u6e90\u7684 RuleGroup \u4e2d\u58f0\u660e\uff09\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#rule"},"\u89c4\u5219\u672c\u8eab\u7684\u89c4\u8303"),"\u4f1a\u5305\u542b\u6807\u7b7e\uff0c\u7136\u540e Alertmanager \u4f1a\u4f7f\u7528\u8fd9\u4e9b\u6807\u7b7e\u6765\u786e\u5b9a\u63a5\u6536\u6b64\u544a\u8b66\u7684\u8def\u7531\u3002\u4f8b\u5982\uff0c\u6807\u7b7e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"team: front-end")," \u7684\u544a\u8b66\u5c06\u200b\u200b\u53d1\u9001\u5230\u4e0e\u8be5\u6807\u7b7e\u5339\u914d\u7684\u6240\u6709\u8def\u7531\u3002"),(0,o.kt)("p",null,"Prometheus \u89c4\u5219\u6587\u4ef6\u4fdd\u5b58\u5728 PrometheusRule \u81ea\u5b9a\u4e49\u8d44\u6e90\u4e2d\u3002PrometheusRule \u652f\u6301\u5b9a\u4e49\u4e00\u4e2a\u6216\u591a\u4e2a RuleGroup\u3002\u6bcf\u4e2a RuleGroup \u7531\u4e00\u7ec4 Rule \u5bf9\u8c61\u7ec4\u6210\uff0c\u6bcf\u4e2a Rule \u5bf9\u8c61\u5747\u80fd\u8868\u793a\u544a\u8b66\u6216\u8bb0\u5f55\u89c4\u5219\uff0c\u5e76\u5177\u6709\u4ee5\u4e0b\u5b57\u6bb5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65b0\u544a\u8b66\u6216\u8bb0\u5f55\u7684\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},"\u65b0\u544a\u8b66\u6216\u8bb0\u5f55\u7684 PromQL \u8868\u8fbe\u5f0f"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u6807\u8bb0\u544a\u8b66\u6216\u8bb0\u5f55\u7684\u6807\u7b7e\uff08\u4f8b\u5982\u96c6\u7fa4\u540d\u79f0\u6216\u4e25\u91cd\u6027\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u9700\u8981\u5728\u544a\u8b66\u901a\u77e5\u4e0a\u663e\u793a\u7684\u5176\u4ed6\u91cd\u8981\u4fe1\u606f\u8fdb\u884c\u7f16\u7801\u7684\u6ce8\u91ca\uff08\u4f8b\u5982\u6458\u8981\u3001\u63cf\u8ff0\u3001\u6d88\u606f\u3001Runbook URL \u7b49\uff09\u3002\u8bb0\u5f55\u89c4\u5219\u4e0d\u9700\u8981\u6b64\u5b57\u6bb5\u3002")),(0,o.kt)("p",null,"\u6709\u5173\u53ef\u4ee5\u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#prometheusrulespec"},"Prometheus Operator \u89c4\u8303\u3002")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Prometheus \u5bf9\u8c61\u4e2d\u7684\u6807\u7b7e\u9009\u62e9\u5668\u5b57\u6bb5 ",(0,o.kt)("inlineCode",{parentName:"p"},"ruleSelector")," \u6765\u5b9a\u4e49\u8981\u6302\u8f7d\u5230 Prometheus \u7684\u89c4\u5219\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u67e5\u770b\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605 Prometheus \u6587\u6863\u4e2d\u7684",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/"},"\u8bb0\u5f55\u89c4\u5219"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"},"\u544a\u8b66\u89c4\u5219"),"\u3002"),(0,o.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u89c4\u5219\u7ec4"},"\u89c4\u5219\u7ec4"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u7ec4\u540d\u79f0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7ec4\u7684\u540d\u79f0\u3002\u5728\u89c4\u5219\u6587\u4ef6\u4e2d\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u8986\u76d6\u7ec4\u95f4\u9694"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7ec4\u4e2d\u89c4\u5219\u7684\u8bc4\u4f30\u65f6\u95f4\u95f4\u9694\uff08\u5355\u4f4d\uff1a\u79d2\uff09\u3002")))),(0,o.kt)("h3",{id:"\u544a\u8b66\u89c4\u5219"},"\u544a\u8b66\u89c4\u5219"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"},"\u544a\u8b66\u89c4\u5219"),"\u53ef\u4ee5\u8ba9\u4f60\u6839\u636e PromQL\uff08Prometheus \u67e5\u8be2\u8bed\u8a00\uff09\u8868\u8fbe\u5f0f\u6765\u5b9a\u4e49\u544a\u8b66\u6761\u4ef6\uff0c\u5e76\u5c06\u89e6\u53d1\u544a\u8b66\u7684\u901a\u77e5\u53d1\u9001\u5230\u5916\u90e8\u670d\u52a1\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u544a\u8b66\u540d\u79f0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u544a\u8b66\u7684\u540d\u79f0\u3002\u5fc5\u987b\u662f\u6709\u6548\u7684\u6807\u7b7e\u503c\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u544a\u8b66\u89e6\u53d1\u7b49\u5f85\u65f6\u95f4"),(0,o.kt)("td",{parentName:"tr",align:null},"\u65f6\u957f\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002\u5f53\u544a\u8b66\u89e6\u53d1\u65f6\u95f4\u5230\u8fbe\u8be5\u6307\u5b9a\u65f6\u957f\u65f6\uff0c\u5219\u89c6\u4e3a\u89e6\u53d1\u3002\u5f53\u544a\u8b66\u672a\u89e6\u53d1\u8db3\u591f\u957f\u7684\u65f6\u95f4\uff0c\u5219\u89c6\u4e3a\u5f85\u5904\u7406\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PromQL \u8868\u8fbe\u5f0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8981\u8bc4\u4f30\u7684 PromQL \u8868\u8fbe\u5f0f\u3002Prometheus \u5c06\u5728\u6bcf\u4e2a\u8bc4\u4f30\u5468\u671f\u8bc4\u4f30\u6b64 PromQL \u8868\u8fbe\u5f0f\u7684\u5f53\u524d\u503c\uff0c\u5e76\u4e14\u6240\u6709\u751f\u6210\u7684\u65f6\u95f4\u5e8f\u5217\u90fd\u5c06\u6210\u4e3a\u5f85\u5904\u7406/\u89e6\u53d1\u544a\u8b66\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"Prometheus \u6587\u6863"),"\u6216\u6211\u4eec\u7684 ",(0,o.kt)("a",{parentName:"td",href:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},"PromQL \u8868\u8fbe\u5f0f\u793a\u4f8b"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Labels"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e3a\u6bcf\u4e2a\u544a\u8b66\u6dfb\u52a0\u6216\u8986\u76d6\u7684\u6807\u7b7e\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u4e25\u91cd\u7a0b\u5ea6"),(0,o.kt)("td",{parentName:"tr",align:null},"\u542f\u7528\u540e\uff0c\u6807\u7b7e\u200b\u200b\u4f1a\u9644\u52a0\u5230\u544a\u8b66\u6216\u8bb0\u5f55\u4e2d\uff0c\u8fd9\u4e9b\u6807\u7b7e\u901a\u8fc7\u4e25\u91cd\u7a0b\u5ea6\u6765\u6807\u8bc6\u544a\u8b66/\u8bb0\u5f55\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u4e25\u91cd\u7a0b\u5ea6 Label \u503c"),(0,o.kt)("td",{parentName:"tr",align:null},"Critical\uff0cwarning \u6216 none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6ce8\u91ca"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6ce8\u91ca\u662f\u4e00\u7ec4\u4fe1\u606f\u6807\u7b7e\uff0c\u53ef\u7528\u4e8e\u5b58\u50a8\u66f4\u957f\u7684\u9644\u52a0\u4fe1\u606f\uff0c\u4f8b\u5982\u544a\u8b66\u63cf\u8ff0\u6216 Runbook \u94fe\u63a5\u3002",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Runbook"},"Runbook")," \u662f\u4e00\u7ec4\u6709\u5173\u5982\u4f55\u5904\u7406\u544a\u8b66\u7684\u6587\u6863\u3002\u6ce8\u91ca\u503c\u53ef\u4ee5\u662f",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/#templating"},"\u6a21\u677f\u5316"),"\u7684\u3002")))),(0,o.kt)("h3",{id:"\u8bb0\u5f55\u89c4\u5219"},"\u8bb0\u5f55\u89c4\u5219"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#recording-rules"},"\u8bb0\u5f55\u89c4\u5219"),"\u5141\u8bb8\u4f60\u9884\u5148\u8ba1\u7b97\u5e38\u7528\u6216\u8ba1\u7b97\u91cf\u5927\u7684 PromQL\uff08Prometheus \u67e5\u8be2\u8bed\u8a00\uff09\u8868\u8fbe\u5f0f\uff0c\u5e76\u5c06\u5176\u7ed3\u679c\u4fdd\u5b58\u4e3a\u4e00\u7ec4\u65b0\u7684\u65f6\u95f4\u5e8f\u5217\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u65f6\u95f4\u5e8f\u5217\u540d\u79f0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8981\u8f93\u51fa\u7684\u65f6\u95f4\u5e8f\u5217\u7684\u540d\u79f0\u3002\u5fc5\u987b\u662f\u6709\u6548\u7684\u6307\u6807\u540d\u79f0\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PromQL \u8868\u8fbe\u5f0f"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8981\u8bc4\u4f30\u7684 PromQL \u8868\u8fbe\u5f0f\u3002Prometheus \u5c06\u5728\u6bcf\u4e2a\u8bc4\u4f30\u5468\u671f\u8bc4\u4f30\u6b64 PromQL \u8868\u8fbe\u5f0f\u7684\u5f53\u524d\u503c\uff0c\u5e76\u4e14\u5c06\u7ed3\u679c\u8bb0\u5f55\u4e3a\u4e00\u7ec4\u65b0\u7684\u65f6\u95f4\u5e8f\u5217\uff0c\u5176\u6307\u6807\u540d\u79f0\u7531\u201c\u8bb0\u5f55\u201d\u6307\u5b9a\u3002\u6709\u5173\u8868\u8fbe\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"Prometheus \u6587\u6863"),"\u6216\u6211\u4eec\u7684 ",(0,o.kt)("a",{parentName:"td",href:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},"PromQL \u8868\u8fbe\u5f0f\u793a\u4f8b"),"\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Labels"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5728\u5b58\u50a8\u7ed3\u679c\u4e4b\u524d\u8981\u6dfb\u52a0\u6216\u8986\u76d6\u7684\u6807\u7b7e\u3002")))))}c.isMDXComponent=!0}}]);