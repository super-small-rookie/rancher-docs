"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41246],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return g}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=a,f=p["".concat(u,".").concat(g)]||p[g]||d[g]||o;return r?t.createElement(f,i(i({ref:n},c),{},{components:r})):t.createElement(f,i({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},48673:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",weight:5},u=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",description:"\u5728\u672c\u6587\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u901a\u8fc7\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f\u6765\u663e\u793a\u7279\u5b9a\u5bb9\u5668\u7684\u6307\u6807\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f",weight:5},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Monitoring",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"},next:{title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"}},c={},d=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u767b\u5f55 Grafana",id:"\u767b\u5f55-grafana",level:3},{value:"\u83b7\u53d6\u652f\u6301 Grafana \u9762\u677f\u7684 PromQL \u67e5\u8be2",id:"\u83b7\u53d6\u652f\u6301-grafana-\u9762\u677f\u7684-promql-\u67e5\u8be2",level:3}],p={toc:d};function g(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u901a\u8fc7\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f\u6765\u663e\u793a\u7279\u5b9a\u5bb9\u5668\u7684\u6307\u6807\u3002"),(0,o.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"\u5728\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5148\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u5e94\u7528\u3002"),(0,o.kt)("p",null,"\u8981\u67e5\u770b\u6307\u5411\u5916\u90e8\u76d1\u63a7 UI\uff08\u5305\u62ec Grafana \u4eea\u8868\u677f\uff09\u7684\u94fe\u63a5\uff0c\u4f60\u81f3\u5c11\u9700\u8981\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"/zh/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#%E5%85%B7%E6%9C%89-rancher-%E6%9D%83%E9%99%90%E7%9A%84%E7%94%A8%E6%88%B7"},"project-member \u89d2\u8272"),"\u3002"),(0,o.kt)("h3",{id:"\u767b\u5f55-grafana"},"\u767b\u5f55 Grafana"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728 Rancher UI \u4e2d\uff0c\u8f6c\u5230\u8981\u81ea\u5b9a\u4e49\u7684\u4eea\u8868\u677f\u7684\u96c6\u7fa4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u76d1\u63a7"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Grafana"),"\u3002Grafana \u4eea\u8868\u677f\u5c06\u5728\u65b0\u9009\u9879\u5361\u4e2d\u6253\u5f00\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5de6\u4e0b\u89d2\u7684\u767b\u5f55\u56fe\u6807\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Sign In"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 Grafana\u3002Grafana \u5b9e\u4f8b\u7684\u9ed8\u8ba4 Admin \u7528\u6237\u540d\u548c\u5bc6\u7801\u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"admin/prom-operator"),"\uff08\u65e0\u8bba\u8c01\u62e5\u6709\u5bc6\u7801\uff0c\u90fd\u9700\u8981 Rancher \u7684\u96c6\u7fa4\u7ba1\u7406\u5458\u6743\u9650\u624d\u80fd\u8bbf\u95ee Grafana \u5b9e\u4f8b\uff09\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u90e8\u7f72\u6216\u5347\u7ea7 Chart \u65f6\u66ff\u6362\u51ed\u8bc1\u3002")),(0,o.kt)("h3",{id:"\u83b7\u53d6\u652f\u6301-grafana-\u9762\u677f\u7684-promql-\u67e5\u8be2"},"\u83b7\u53d6\u652f\u6301 Grafana \u9762\u677f\u7684 PromQL \u67e5\u8be2"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4efb\u4f55\u9762\u677f\uff0c\u4f60\u53ef\u4ee5\u5355\u51fb\u6807\u9898\u5e76\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore")," \u4ee5\u83b7\u53d6\u652f\u6301\u56fe\u5f62\u7684 PromQL \u67e5\u8be2\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u8981\u83b7\u53d6 Alertmanager \u5bb9\u5668\u7684 CPU \u4f7f\u7528\u7387\uff0c\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"CPU Utilization > Inspect"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Data")," \u9009\u9879\u5361\u5c06\u57fa\u7840\u6570\u636e\u663e\u793a\u4e3a\u65f6\u95f4\u5e8f\u5217\uff0c\u7b2c\u4e00\u5217\u662f\u65f6\u95f4\uff0c\u7b2c\u4e8c\u5217\u662f PromQL \u67e5\u8be2\u7ed3\u679c\u3002\u590d\u5236 PromQL \u67e5\u8be2\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'(1 - (avg(irate({__name__=~"node_cpu_seconds_total|windows_cpu_time_total",mode="idle"}[5m])))) * 100\n')),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 Grafana \u9762\u677f\u4e2d\u4fee\u6539\u67e5\u8be2\uff0c\u6216\u4f7f\u7528\u8be5\u67e5\u8be2\u521b\u5efa\u65b0\u7684 Grafana \u9762\u677f\u3002"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels/panel-editor/"},"\u7f16\u8f91\u9762\u677f\u7684 Grafana \u6587\u6863")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels/add-a-panel/"},"\u5411\u4eea\u8868\u677f\u6dfb\u52a0\u9762\u677f\u7684 Grafana \u6587\u6863"))))}g.isMDXComponent=!0}}]);