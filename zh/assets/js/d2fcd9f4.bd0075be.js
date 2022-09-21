"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81173],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",weight:2205},p=void 0,s={unversionedId:"pages-for-subheaders/use-new-nodes-in-an-infra-provider",id:"pages-for-subheaders/use-new-nodes-in-an-infra-provider",title:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",description:"\u5728 Rancher \u4e2d\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u6765\u521b\u5efa RKE \u6216 RKE2 \u96c6\u7fa4\u65f6\uff0c\u6bcf\u4e2a\u751f\u6210\u7684\u8282\u70b9\u6c60\u90fd\u4f1a\u663e\u793a\u5728\u65b0\u7684\u4e3b\u673a\u6c60\u9009\u9879\u5361\u4e2d\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u6765\u67e5\u770b\u4e3b\u673a\u6c60\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/use-new-nodes-in-an-infra-provider.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/use-new-nodes-in-an-infra-provider",permalink:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/use-new-nodes-in-an-infra-provider.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"\u5728\u4e91\u5382\u5546\u7684\u65b0\u8282\u70b9\u4e0a\u542f\u52a8 Kubernetes",weight:2205},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Rancher \u542f\u52a8 Kubernetes",permalink:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},next:{title:"\u521b\u5efa Amazon EC2 \u96c6\u7fa4",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster"}},c={},u=[{value:"RKE \u96c6\u7fa4",id:"rke-\u96c6\u7fa4",level:2},{value:"\u8282\u70b9\u6a21\u677f",id:"\u8282\u70b9\u6a21\u677f",level:3},{value:"\u8282\u70b9\u6807\u7b7e",id:"\u8282\u70b9\u6807\u7b7e",level:4},{value:"\u8282\u70b9\u6c61\u70b9",id:"\u8282\u70b9\u6c61\u70b9",level:4},{value:"\u8282\u70b9\u6a21\u677f\u7684\u7ba1\u7406\u5458\u63a7\u5236",id:"\u8282\u70b9\u6a21\u677f\u7684\u7ba1\u7406\u5458\u63a7\u5236",level:4},{value:"\u8282\u70b9\u6c60",id:"\u8282\u70b9\u6c60",level:3},{value:"\u8282\u70b9\u6c60\u6c61\u70b9",id:"\u8282\u70b9\u6c60\u6c61\u70b9",level:4},{value:"\u8282\u70b9\u81ea\u52a8\u66ff\u6362",id:"\u8282\u70b9\u81ea\u52a8\u66ff\u6362",level:4},{value:"\u542f\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362",id:"\u542f\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362",level:4},{value:"\u7981\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362",id:"\u7981\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362",level:4},{value:"\u4e91\u51ed\u8bc1",id:"\u4e91\u51ed\u8bc1",level:3},{value:"\u4e3b\u673a\u9a71\u52a8",id:"\u4e3b\u673a\u9a71\u52a8",level:3},{value:"RKE2 \u96c6\u7fa4",id:"rke2-\u96c6\u7fa4",level:2},{value:"\u8282\u70b9\u89d2\u8272",id:"\u8282\u70b9\u89d2\u8272",level:3}],d={toc:u};function k(e){var t=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728 Rancher \u4e2d\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u6765\u521b\u5efa RKE \u6216 RKE2 \u96c6\u7fa4\u65f6\uff0c\u6bcf\u4e2a\u751f\u6210\u7684\u8282\u70b9\u6c60\u90fd\u4f1a\u663e\u793a\u5728\u65b0\u7684",(0,l.kt)("strong",{parentName:"p"},"\u4e3b\u673a\u6c60"),"\u9009\u9879\u5361\u4e2d\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\u6765\u67e5\u770b\u4e3b\u673a\u6c60\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb RKE \u6216 RKE2 \u96c6\u7fa4\u7684\u540d\u79f0\u3002")),(0,l.kt)("h2",{id:"rke-\u96c6\u7fa4"},"RKE \u96c6\u7fa4"),(0,l.kt)("p",null,"\u4f7f\u7528 Rancher\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u8282\u70b9\u6a21\u677f"),"\u521b\u5efa\u8282\u70b9\u6c60\u3002\u6b64\u8282\u70b9\u6a21\u677f\u5b9a\u4e49\u4e86\u8981\u7528\u4e8e\u5728\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6216\u4e91\u5382\u5546\u4e2d\u542f\u52a8\u8282\u70b9\u7684\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u5728\u6258\u7ba1\u5728\u4e91\u5382\u5546\u7684\u8282\u70b9\u6c60\u4e0a\u5b89\u88c5 Kubernetes \u7684\u4e00\u4e2a\u597d\u5904\u662f\uff0c\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u4e0e\u96c6\u7fa4\u65ad\u5f00\u8fde\u63a5\uff0cRancher \u53ef\u4ee5\u81ea\u52a8\u521b\u5efa\u53e6\u4e00\u4e2a\u8282\u70b9\u5e76\u5c06\u5176\u52a0\u5165\u96c6\u7fa4\uff0c\u4ece\u800c\u786e\u4fdd\u8282\u70b9\u6c60\u7684\u6570\u91cf\u7b26\u5408\u8981\u6c42\u3002"),(0,l.kt)("p",null,"\u53ef\u7528\u4e8e\u521b\u5efa\u8282\u70b9\u6a21\u677f\u7684\u4e91\u63d0\u4f9b\u5546\u662f\u7531",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E4%B8%BB%E6%9C%BA%E9%A9%B1%E5%8A%A8"},"\u4e3b\u673a\u9a71\u52a8"),"\u51b3\u5b9a\u7684\u3002"),(0,l.kt)("h3",{id:"\u8282\u70b9\u6a21\u677f"},"\u8282\u70b9\u6a21\u677f"),(0,l.kt)("p",null,"\u8282\u70b9\u6a21\u677f\u4fdd\u5b58\u4e86\u7528\u4e8e\u5728\u7279\u5b9a\u4e91\u63d0\u4f9b\u5546\u4e2d\u914d\u7f6e\u8282\u70b9\u65f6\u8981\u4f7f\u7528\u7684\u53c2\u6570\u3002\u8fd9\u4e9b\u8282\u70b9\u53ef\u4ee5\u4ece UI \u542f\u52a8\u3002Rancher \u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine")," \u6765\u914d\u7f6e\u8fd9\u4e9b\u8282\u70b9\u3002\u53ef\u7528\u4e8e\u521b\u5efa\u8282\u70b9\u6a21\u677f\u7684\u4e91\u63d0\u4f9b\u5546\u53d6\u51b3\u4e8e Rancher \u4e2d\u72b6\u6001\u662f Active \u7684\u4e3b\u673a\u9a71\u52a8\u3002"),(0,l.kt)("p",null,"\u5728 Rancher \u4e2d\u521b\u5efa\u8282\u70b9\u6a21\u677f\u540e\uff0c\u6a21\u677f\u4f1a\u88ab\u4fdd\u5b58\uff0c\u4ee5\u4fbf\u4f60\u53ef\u4ee5\u518d\u6b21\u4f7f\u7528\u8be5\u6a21\u677f\u6765\u521b\u5efa\u8282\u70b9\u6c60\u3002\u8282\u70b9\u6a21\u677f\u7ed1\u5b9a\u5230\u4f60\u7684\u767b\u5f55\u540d\u3002\u6dfb\u52a0\u6a21\u677f\u540e\uff0c\u4f60\u53ef\u4ee5\u5c06\u5176\u4ece\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u4e2d\u5220\u9664\u3002"),(0,l.kt)("h4",{id:"\u8282\u70b9\u6807\u7b7e"},"\u8282\u70b9\u6807\u7b7e"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6a21\u677f\u6dfb\u52a0",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"\u6807\u7b7e"),"\uff0c\u8fd9\u6837\uff0c\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u7684\u8282\u70b9\u90fd\u4f1a\u81ea\u52a8\u5e26\u6709\u8fd9\u4e9b\u6807\u7b7e\u3002"),(0,l.kt)("p",null,"\u65e0\u6548\u6807\u7b7e\u4f1a\u963b\u6b62\u5347\u7ea7\uff0c\u6216\u963b\u6b62 Rancher \u542f\u52a8\u3002\u6709\u5173\u6807\u7b7e\u8bed\u6cd5\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set"},"Kubernetes \u6587\u6863"),"\u3002"),(0,l.kt)("h4",{id:"\u8282\u70b9\u6c61\u70b9"},"\u8282\u70b9\u6c61\u70b9"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6a21\u677f\u6dfb\u52a0",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"\u6c61\u70b9"),"\uff0c\u8fd9\u6837\uff0c\u4f7f\u7528\u8282\u70b9\u6a21\u677f\u521b\u5efa\u7684\u8282\u70b9\u90fd\u4f1a\u81ea\u52a8\u5e26\u6709\u8fd9\u4e9b\u6c61\u70b9\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e\u6c61\u70b9\u53ef\u4ee5\u540c\u65f6\u6dfb\u52a0\u5230\u8282\u70b9\u6a21\u677f\u548c\u8282\u70b9\u6c60\u4e2d\uff0c\u56e0\u6b64\u5982\u679c\u6dfb\u52a0\u4e86\u76f8\u540c\u952e\u7684\u6c61\u70b9\u6548\u679c\u6ca1\u6709\u51b2\u7a81\uff0c\u5219\u6240\u6709\u6c61\u70b9\u90fd\u5c06\u6dfb\u52a0\u5230\u8282\u70b9\u4e2d\u3002\u5982\u679c\u5b58\u5728\u5177\u6709\u76f8\u540c\u952e\u4f46\u4e0d\u540c\u6548\u679c\u7684\u6c61\u70b9\uff0c\u5219\u8282\u70b9\u6c60\u4e2d\u7684\u6c61\u70b9\u5c06\u8986\u76d6\u8282\u70b9\u6a21\u677f\u4e2d\u7684\u6c61\u70b9\u3002"),(0,l.kt)("h4",{id:"\u8282\u70b9\u6a21\u677f\u7684\u7ba1\u7406\u5458\u63a7\u5236"},"\u8282\u70b9\u6a21\u677f\u7684\u7ba1\u7406\u5458\u63a7\u5236"),(0,l.kt)("p",null,"\u7ba1\u7406\u5458\u53ef\u4ee5\u63a7\u5236\u6240\u6709\u8282\u70b9\u6a21\u677f\u3002\u73b0\u5728\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u7ef4\u62a4 Rancher \u4e2d\u7684\u6240\u6709\u8282\u70b9\u6a21\u677f\u3002\u5f53\u8282\u70b9\u6a21\u677f\u6240\u6709\u8005\u4e0d\u518d\u4f7f\u7528 Rancher \u65f6\uff0c\u4ed6\u4eec\u521b\u5efa\u7684\u8282\u70b9\u6a21\u677f\u53ef\u4ee5\u7531\u7ba1\u7406\u5458\u7ba1\u7406\uff0c\u4ee5\u4fbf\u7ee7\u7eed\u66f4\u65b0\u548c\u7ef4\u62a4\u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u8981\u8bbf\u95ee\u6240\u6709\u8282\u70b9\u6a21\u677f\uff0c\u7ba1\u7406\u5458\u9700\u8981\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"RKE1 \u914d\u7f6e > \u8282\u70b9\u6a21\u677f"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5217\u51fa\u6240\u6709\u8282\u70b9\u6a21\u677f\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"\u22ee")," \u6765\u7f16\u8f91\u6216\u514b\u9686\u6a21\u677f\u3002"),(0,l.kt)("h3",{id:"\u8282\u70b9\u6c60"},"\u8282\u70b9\u6c60"),(0,l.kt)("p",null,"\u4f7f\u7528 Rancher\uff0c\u4f60\u53ef\u4ee5\u57fa\u4e8e",(0,l.kt)("a",{parentName:"p",href:"#%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u8282\u70b9\u6a21\u677f"),"\u521b\u5efa\u8282\u70b9\u6c60\u3002"),(0,l.kt)("p",null,"\u8282\u70b9\u6a21\u677f\u5b9a\u4e49\u4e86\u8282\u70b9\u7684\u914d\u7f6e\uff0c\u4f8b\u5982\u8981\u4f7f\u7528\u7684\u64cd\u4f5c\u7cfb\u7edf\u3001CPU \u6570\u91cf\u548c\u5185\u5b58\u91cf\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u8282\u70b9\u6c60\u7684\u597d\u5904\u662f\uff0c\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u88ab\u9500\u6bc1\u6216\u5220\u9664\uff0c\u4f60\u53ef\u4ee5\u589e\u52a0 Active \u8282\u70b9\u7684\u6570\u91cf\u6765\u8865\u507f\u4e22\u5931\u7684\u8282\u70b9\u3002\u8282\u70b9\u6c60\u53ef\u4ee5\u5e2e\u52a9\u4f60\u786e\u4fdd\u8282\u70b9\u6c60\u7684\u8ba1\u6570\u7b26\u5408\u8981\u6c42\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u6c60\u5fc5\u987b\u5206\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u8282\u70b9\u89d2\u8272\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u89d2\u8272\uff08\u5373 etcd\u3001controlplane \u548c worker\uff09\u90fd\u5e94\u5206\u914d\u7ed9\u4e0d\u540c\u7684\u8282\u70b9\u6c60\u3002\u867d\u7136\u4f60\u53ef\u4ee5\u5c06\u591a\u4e2a\u8282\u70b9\u89d2\u8272\u5206\u914d\u7ed9\u540c\u4e00\u4e2a\u8282\u70b9\u6c60\uff0c\u4f46\u4e0d\u8981\u5728\u751f\u4ea7\u96c6\u7fa4\u4e2d\u6267\u884c\u6b64\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u63a8\u8350\u7684\u8bbe\u7f6e\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709 etcd \u89d2\u8272\u4e14\u8ba1\u6570\u4e3a 3 \u7684\u8282\u70b9\u6c60"),(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709 controlplane \u89d2\u8272\u4e14\u8ba1\u6570\u81f3\u5c11\u4e3a 2 \u7684\u8282\u70b9\u6c60"),(0,l.kt)("li",{parentName:"ul"},"\u5177\u6709 worker \u89d2\u8272\u4e14\u8ba1\u6570\u81f3\u5c11\u4e3a 2 \u7684\u8282\u70b9\u6c60")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u79bb\u7ebf\u73af\u5883\u4e2d\u7684 RKE1 \u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9"),"\uff1a"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u914d\u7f6e RKE1 \u4e0b\u6e38\u96c6\u7fa4\u8282\u70b9\u65f6\uff08\u4f8b\u5982\u5728 vSphere \u4e2d\uff09\uff0cRancher \u4f1a\u5c1d\u8bd5\u8fd0\u884c Docker \u5b89\u88c5\u811a\u672c\u3002\u4f46\u662f\uff0cRancher Docker \u5b89\u88c5\u811a\u672c\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u4f1a\u8fd0\u884c\u5931\u8d25\u3002\u8981\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u5982\u679c Docker \u5df2\u9884\u5b89\u88c5\u5230 VM \u955c\u50cf\u4e0a\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5728\u521b\u5efa\u8282\u70b9\u6a21\u677f\u65f6\u8df3\u8fc7\u5b89\u88c5 Docker\u3002\u4e3a\u6b64\uff0c\u4f60\u53ef\u4ee5\u5728 Rancher UI ",(0,l.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u9009\u9879"),"\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Docker \u5b89\u88c5 URL")," \u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"\u65e0"),"\u3002"),(0,l.kt)("figcaption",null,"**\u5f15\u64ce\u9009\u9879\u4e0b\u62c9\u5217\u8868**"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u5f15\u64ce\u9009\u9879\u4e0b\u62c9\u5217\u8868",src:n(71481).Z,width:"1749",height:"377"})),(0,l.kt)("h4",{id:"\u8282\u70b9\u6c60\u6c61\u70b9"},"\u8282\u70b9\u6c60\u6c61\u70b9"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u5728\u8282\u70b9\u6a21\u677f\u4e0a\u5b9a\u4e49",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"\u6c61\u70b9"),"\uff0c\u5219\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u8282\u70b9\u6c60\u6dfb\u52a0\u6c61\u70b9\u3002\u76f8\u6bd4\u5728\u8282\u70b9\u6a21\u677f\u4e0a\u6dfb\u52a0\u6c61\u70b9\uff0c\u5728\u8282\u70b9\u6c60\u4e0a\u6dfb\u52a0\u6c61\u70b9\u7684\u597d\u5904\u5728\u4e8e\uff0c\u4f60\u53ef\u4ee5\u66ff\u6362\u8282\u70b9\u6a21\u677f\uff0c\u800c\u4e0d\u5fc5\u62c5\u5fc3\u6c61\u70b9\u662f\u5426\u5728\u8282\u70b9\u6a21\u677f\u4e2d\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u6c61\u70b9\u90fd\u5c06\u81ea\u52a8\u6dfb\u52a0\u5230\u8282\u70b9\u6c60\u4e2d\u5df2\u521b\u5efa\u7684\u8282\u70b9\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u5728\u5df2\u6709\u8282\u70b9\u7684\u8282\u70b9\u6c60\u4e2d\u6dfb\u52a0\u6c61\u70b9\uff0c\u6c61\u70b9\u4e0d\u4f1a\u5e94\u7528\u5230\u5df2\u6709\u7684\u8282\u70b9\uff0c\u4f46\u662f\u6dfb\u52a0\u5230\u8be5\u8282\u70b9\u6c60\u4e2d\u7684\u65b0\u8282\u70b9\u90fd\u5c06\u83b7\u5f97\u8be5\u6c61\u70b9\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u6c61\u70b9\u540c\u65f6\u6dfb\u52a0\u5230\u8282\u70b9\u6a21\u677f\u548c\u8282\u70b9\u6c60\u4e2d\uff0c\u4e14\u6dfb\u52a0\u4e86\u76f8\u540c\u952e\u7684\u6c61\u70b9\u6548\u679c\u6ca1\u6709\u51b2\u7a81\uff0c\u5219\u6240\u6709\u6c61\u70b9\u90fd\u5c06\u6dfb\u52a0\u5230\u8282\u70b9\u4e2d\u3002\u5982\u679c\u5b58\u5728\u5177\u6709\u76f8\u540c\u952e\u4f46\u4e0d\u540c\u6548\u679c\u7684\u6c61\u70b9\uff0c\u5219\u8282\u70b9\u6c60\u4e2d\u7684\u6c61\u70b9\u5c06\u8986\u76d6\u8282\u70b9\u6a21\u677f\u4e2d\u7684\u6c61\u70b9\u3002"),(0,l.kt)("h4",{id:"\u8282\u70b9\u81ea\u52a8\u66ff\u6362"},"\u8282\u70b9\u81ea\u52a8\u66ff\u6362"),(0,l.kt)("p",null,"Rancher \u53ef\u4ee5\u81ea\u52a8\u66ff\u6362\u8282\u70b9\u6c60\u4e2d\u65e0\u6cd5\u8bbf\u95ee\u7684\u8282\u70b9\u3002\u5982\u679c\u8282\u70b9\u5728\u6307\u5b9a\u7684\u65f6\u95f4\u4e2d\u5904\u4e8e Inactive \u72b6\u6001\uff0cRancher \u5c06\u4f7f\u7528\u8be5\u8282\u70b9\u6c60\u7684\u8282\u70b9\u6a21\u677f\u6765\u91cd\u65b0\u521b\u5efa\u8282\u70b9\u3002"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u81ea\u6211\u4fee\u590d\u8282\u70b9\u6c60\u7684\u529f\u80fd\u5e2e\u52a9\u4f60\u66ff\u6362",(0,l.kt)("b",null,"\u65e0\u72b6\u6001"),"\u5e94\u7528\u7684 worker \u8282\u70b9\u3002\u4e0d\u5efa\u8bae\u5728 master \u8282\u70b9\u6216\u8fde\u63a5\u4e86\u6301\u4e45\u5377\u7684\u8282\u70b9\u7684\u8282\u70b9\u6c60\u4e0a\u542f\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362\uff0c\u56e0\u4e3a\u865a\u62df\u673a\u4f1a\u88ab\u4e34\u65f6\u5904\u7406\u3002\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u4e0e\u96c6\u7fa4\u65ad\u5f00\u8fde\u63a5\u65f6\uff0c\u5176\u6301\u4e45\u5377\u5c06\u88ab\u7834\u574f\uff0c\u4ece\u800c\u5bfc\u81f4\u6709\u72b6\u6001\u5e94\u7528\u7684\u6570\u636e\u4e22\u5931\u3002"))),(0,l.kt)("p",null,"\u8282\u70b9\u81ea\u52a8\u66ff\u6362\u57fa\u4e8e Kubernetes \u8282\u70b9\u63a7\u5236\u5668\u5de5\u4f5c\u3002\u8282\u70b9\u63a7\u5236\u5668\u5b9a\u671f\u68c0\u67e5\u6240\u6709\u8282\u70b9\u7684\u72b6\u6001\uff08\u53ef\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"kube-controller")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"--node-monitor-period")," \u6807\u5fd7\u914d\u7f6e\uff09\u3002\u4e00\u4e2a\u8282\u70b9\u4e0d\u53ef\u8bbf\u95ee\u65f6\uff0c\u8282\u70b9\u63a7\u5236\u5668\u5c06\u6c61\u67d3\u8be5\u8282\u70b9\u3002\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u65f6\uff0cRancher \u5c06\u5f00\u59cb\u5176\u5220\u9664\u5012\u8ba1\u65f6\u3002\u4f60\u53ef\u4ee5\u914d\u7f6e Rancher \u7b49\u5f85\u5220\u9664\u8282\u70b9\u7684\u65f6\u95f4\u3002\u5982\u679c\u5728\u5220\u9664\u5012\u8ba1\u65f6\u7ed3\u675f\u524d\u6c61\u70b9\u6ca1\u6709\u88ab\u5220\u9664\uff0cRancher \u5c06\u7ee7\u7eed\u5220\u9664\u8be5\u8282\u70b9\u3002Rancher \u4f1a\u6839\u636e\u8282\u70b9\u6c60\u8bbe\u7f6e\u7684\u6570\u91cf\u6765\u521b\u5efa\u65b0\u7684\u8282\u70b9\u3002"),(0,l.kt)("h4",{id:"\u542f\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362"},"\u542f\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362"),(0,l.kt)("p",null,"\u521b\u5efa\u8282\u70b9\u6c60\u65f6\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a Rancher \u66ff\u6362\u65e0\u54cd\u5e94\u8282\u70b9\u7684\u7b49\u5f85\u65f6\u95f4\uff08\u4ee5\u5206\u949f\u4e3a\u5355\u4f4d\uff09\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u521b\u5efa\u6216\u7f16\u8f91\u96c6\u7fa4\u7684\u8868\u5355\u4e2d\uff0c\u8f6c\u5230",(0,l.kt)("strong",{parentName:"li"},"\u8282\u70b9\u6c60"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u542f\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362\u7684\u8282\u70b9\u6c60\u3002\u5728 ",(0,l.kt)("strong",{parentName:"li"},"Recreate Unreachable After")," \u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165 Rancher \u5728\u66ff\u6362\u8282\u70b9\u4e4b\u524d\u5e94\u8be5\u7b49\u5f85\u8282\u70b9\u54cd\u5e94\u7684\u5206\u949f\u6570\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u586b\u5199\u8868\u5355\u7684\u5176\u4f59\u90e8\u5206\u4ee5\u521b\u5efa\u6216\u7f16\u8f91\u96c6\u7fa4\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c")," \uff1a\u5df2\u4e3a\u8282\u70b9\u6c60\u542f\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362\u3002"),(0,l.kt)("h4",{id:"\u7981\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362"},"\u7981\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\u4ece Rancher UI \u7981\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u7981\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728",(0,l.kt)("strong",{parentName:"li"},"\u8282\u70b9\u6c60"),"\u90e8\u5206\u4e2d\uff0c\u8f6c\u5230\u8981\u542f\u7528\u8282\u70b9\u81ea\u52a8\u66ff\u6362\u7684\u8282\u70b9\u6c60\u3002\u5728 ",(0,l.kt)("strong",{parentName:"li"},"Recreate Unreachable After")," \u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165 0\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u7981\u7528\u8282\u70b9\u6c60\u7684\u8282\u70b9\u81ea\u52a8\u66ff\u6362\u3002"),(0,l.kt)("h3",{id:"\u4e91\u51ed\u8bc1"},"\u4e91\u51ed\u8bc1"),(0,l.kt)("p",null,"\u8282\u70b9\u6a21\u677f\u53ef\u4ee5\u4f7f\u7528\u4e91\u51ed\u8bc1\uff0c\u6765\u5b58\u50a8\u7528\u4e8e\u5728\u4e91\u63d0\u4f9b\u5546\u4e2d\u542f\u52a8\u8282\u70b9\u7684\u51ed\u8bc1\uff0c\u5176\u4f18\u70b9\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u51ed\u8bc1\u4f1a\u5b58\u50a8\u4e3a\u66f4\u5b89\u5168\u7684 Kubernetes \u5bc6\u6587\uff0c\u800c\u4e14\u4f60\u65e0\u9700\u6bcf\u6b21\u90fd\u8f93\u5165\u51ed\u8bc1\u4fbf\u53ef\u7f16\u8f91\u8282\u70b9\u6a21\u677f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e91\u51ed\u8bc1\u540e\uff0c\u4f60\u53ef\u4ee5\u91cd\u65b0\u4f7f\u7528\u8be5\u51ed\u8bc1\u6765\u521b\u5efa\u5176\u4ed6\u8282\u70b9\u6a21\u677f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u591a\u4e2a\u8282\u70b9\u6a21\u677f\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u4e91\u51ed\u8bc1\u6765\u521b\u5efa\u8282\u70b9\u6c60\u3002\u5982\u679c\u4f60\u7684\u5bc6\u94a5\u88ab\u6cc4\u9732\u6216\u8fc7\u671f\uff0c\u5219\u53ef\u4ee5\u5728\u4e00\u4e2a\u4f4d\u7f6e\u66f4\u65b0\u4e91\u51ed\u8bc1\uff0c\u4ece\u800c\u4e00\u6b21\u66f4\u65b0\u6240\u6709\u4f7f\u7528\u8be5\u51ed\u8bc1\u7684\u8282\u70b9\u6a21\u677f\u3002"))),(0,l.kt)("p",null,"\u521b\u5efa\u4e91\u51ed\u8bc1\u540e\uff0c\u7528\u6237\u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/user-settings/manage-cloud-credentials"},"\u7ba1\u7406\u521b\u5efa\u7684\u4e91\u51ed\u8bc1"),"\u3002"),(0,l.kt)("h3",{id:"\u4e3b\u673a\u9a71\u52a8"},"\u4e3b\u673a\u9a71\u52a8"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u627e\u4e0d\u5230\u60f3\u8981\u7684\u4e3b\u673a\u9a71\u52a8\uff0c\u4f60\u53ef\u4ee5\u5728 Rancher \u7684",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#%E6%BF%80%E6%B4%BB/%E5%81%9C%E7%94%A8%E4%B8%BB%E6%9C%BA%E9%A9%B1%E5%8A%A8"},"\u5185\u7f6e\u4e3b\u673a\u9a71\u52a8"),"\u4e2d\u67e5\u770b\u5e76\u6fc0\u6d3b\u5b83\uff0c\u4e5f\u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers#%E6%B7%BB%E5%8A%A0%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E6%9C%BA%E9%A9%B1%E5%8A%A8"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u4e3b\u673a\u9a71\u52a8"),"\u3002"),(0,l.kt)("h2",{id:"rke2-\u96c6\u7fa4"},"RKE2 \u96c6\u7fa4"),(0,l.kt)("p",null,"Rancher 2.6 \u652f\u6301\u76f4\u63a5\u4f7f\u7528 Rancher UI \u914d\u7f6e ",(0,l.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," \u96c6\u7fa4\u3002RKE2\uff0c\u4e5f\u79f0\u4e3a RKE Government\uff0c\u662f\u4e00\u4e2a\u5b8c\u5168\u7b26\u5408\u6807\u51c6\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u5b83\u4e13\u6ce8\u4e8e\u5b89\u5168\u6027\u548c\u5408\u89c4\u6027\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5bf9\u4e8e RKE2 \u96c6\u7fa4\u6a21\u677f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-cluster-templates#rke2-%E9%9B%86%E7%BE%A4%E6%A8%A1%E6%9D%BF"},"\u6b64\u9875\u9762"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"))),(0,l.kt)("h3",{id:"\u8282\u70b9\u89d2\u8272"},"\u8282\u70b9\u89d2\u8272"),(0,l.kt)("p",null,"RKE2 CLI \u516c\u5f00\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"server")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"agent")," \u4e24\u4e2a\u89d2\u8272\uff0c\u5b83\u4eec\u5206\u522b\u4ee3\u8868 Kubernetes \u8282\u70b9\u89d2\u8272 ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"controlplane")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"worker"),"\u3002\u901a\u8fc7 Rancher 2.6 \u4e2d\u7684 RKE2 \u96c6\u6210\uff0cRKE2 \u8282\u70b9\u6c60\u53ef\u4ee5\u5206\u914d\u66f4\u7ec6\u7c92\u5ea6\u7684\u89d2\u8272\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"controlplane"),"\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 RKE2 CLI \u4e2d\u4f7f\u7528\u6807\u5fd7\u548c\u8282\u70b9\u6c61\u67d3\uff0c\u6765\u63a7\u5236\u8c03\u5ea6\u5de5\u4f5c\u8d1f\u8f7d\u548c Kubernetes master \u8282\u70b9\u7684\u4f4d\u7f6e\uff0c\u4ece\u800c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"etcd"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"controlplane")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"worker")," \u8282\u70b9\u529f\u80fd\u3002\u8fd9\u4e9b\u89d2\u8272\u6ca1\u6709\u5728 RKE2 CLI \u4e2d\u5b9e\u73b0\u4e3a\u7b2c\u4e00\u7ea7\u89d2\u8272\u7684\u539f\u56e0\u662f\uff0cRKE2 \u88ab\u6982\u5ff5\u5316\u4e3a\u4e00\u7ec4\u539f\u59cb\u6784\u5efa\u5757\uff0c\u4f7f\u7528 Rancher \u7b49\u7f16\u6392\u7cfb\u7edf\u5f97\u5230\u6700\u4f73\u5229\u7528\u3002"),(0,l.kt)("p",null,"\u5728 Rancher \u4e2d\u5b9e\u73b0\u8fd9\u4e09\u4e2a\u8282\u70b9\u89d2\u8272\uff0c\u8868\u793a Rancher \u7ba1\u7406\u7684 RKE2 \u96c6\u7fa4\u80fd\u591f\u8f7b\u677e\u4f7f\u7528\u4e3a RKE \u96c6\u7fa4\u63a8\u8350\u7684\u76f8\u540c\u67b6\u6784\u7684\u6240\u6709\u6700\u4f73\u5b9e\u8df5\u3002"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture"},"\u63a8\u8350\u7684\u96c6\u7fa4\u67b6\u6784"),"\u4e2d\uff0c\u6211\u4eec\u6982\u8ff0\u4e86\u6bcf\u4e2a\u89d2\u8272\u96c6\u7fa4\u5e94\u8be5\u6709\u591a\u5c11\u8282\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u62e5\u6709\u4e09\u4e2a\u89d2\u8272\u4e3a etcd \u7684\u8282\u70b9\uff0c\u6765\u786e\u4fdd\u5931\u53bb\u4e00\u4e2a\u8282\u70b9\u65f6\u4ecd\u80fd\u5b58\u6d3b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u4e24\u4e2a\u8282\u70b9\u5177\u6709 controlplane \u89d2\u8272\uff0c\u4ee5\u5b9e\u73b0\u4e3b\u7ec4\u4ef6\u9ad8\u53ef\u7528\u6027\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u4e24\u4e2a\u5177\u6709 worker \u89d2\u8272\u7684\u8282\u70b9\uff0c\u7528\u4e8e\u5728\u8282\u70b9\u6545\u969c\u65f6\u91cd\u65b0\u5b89\u6392\u5de5\u4f5c\u8d1f\u8f7d\u3002")))}k.isMDXComponent=!0},71481:function(e,t,n){t.Z=n.p+"assets/images/node-template-engine-options-rke1-137fd6915c30677c3da342091f91de9f.png"}}]);