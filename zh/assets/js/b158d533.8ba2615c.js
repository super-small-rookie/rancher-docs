"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81162],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),s=o(a),c=r,h=s["".concat(m,".").concat(c)]||s[c]||u[c]||l;return a?n.createElement(h,i(i({ref:e},d),{},{components:a})):n.createElement(h,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},97681:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return m},default:function(){return c},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={title:"\u521b\u5efa\u5e94\u7528",weight:400},m=void 0,o={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",id:"how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",title:"\u521b\u5efa\u5e94\u7528",description:"Rancher \u7684\u5e94\u7528\u5e02\u573a\u57fa\u4e8e Helm \u4ed3\u5e93\u548c Helm Chart\u3002\u4f60\u53ef\u4ee5\u6dfb\u52a0\u57fa\u4e8e HTTP \u7684\u6807\u51c6 Helm \u4ed3\u5e93\u4ee5\u53ca\u4efb\u4f55\u5305\u542b Chart \u7684 Git \u4ed3\u5e93\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",permalink:"/zh/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/helm-charts-in-rancher/create-apps.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"\u521b\u5efa\u5e94\u7528",weight:400},sidebar:"tutorialSidebar",previous:{title:"Rancher \u4e2d\u7684 Helm Chart",permalink:"/zh/pages-for-subheaders/helm-charts-in-rancher"},next:{title:"\u8de8\u96c6\u7fa4\u90e8\u7f72\u5e94\u7528",permalink:"/zh/pages-for-subheaders/deploy-apps-across-clusters"}},d={},u=[{value:"Helm Chart",id:"helm-chart",level:3},{value:"Rancher Chart",id:"rancher-chart",level:3},{value:"Chart.yaml \u6ce8\u91ca",id:"chartyaml-\u6ce8\u91ca",level:3},{value:"questions.yml",id:"questionsyml",level:3},{value:"\u6700\u4f4e/\u6700\u9ad8 Rancher \u7248\u672c",id:"\u6700\u4f4e\u6700\u9ad8-rancher-\u7248\u672c",level:3},{value:"Question \u53d8\u91cf\u53c2\u8003",id:"question-\u53d8\u91cf\u53c2\u8003",level:3}],s={toc:u};function c(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rancher \u7684\u5e94\u7528\u5e02\u573a\u57fa\u4e8e Helm \u4ed3\u5e93\u548c Helm Chart\u3002\u4f60\u53ef\u4ee5\u6dfb\u52a0\u57fa\u4e8e HTTP \u7684\u6807\u51c6 Helm \u4ed3\u5e93\u4ee5\u53ca\u4efb\u4f55\u5305\u542b Chart \u7684 Git \u4ed3\u5e93\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6709\u5173\u5f00\u53d1 Chart \u7684\u5b8c\u6574\u6f14\u793a\uff0c\u8bf7\u53c2\u9605 Helm \u5b98\u65b9\u6587\u6863\u4e2d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/"},"Chart \u6a21\u677f\u5f00\u53d1\u8005\u6307\u5357"),"\u3002"))),(0,l.kt)("h1",{id:"chart-\u7c7b\u578b"},"Chart \u7c7b\u578b"),(0,l.kt)("p",null,"Rancher \u652f\u6301\u4e24\u79cd\u4e0d\u540c\u7c7b\u578b\u7684 Chart\uff0c\u5206\u522b\u662f Helm Chart \u548c Rancher Chart\u3002"),(0,l.kt)("h3",{id:"helm-chart"},"Helm Chart"),(0,l.kt)("p",null,"\u539f\u751f Helm Chart \u5305\u62ec\u4e00\u4e2a\u5e94\u7528\u4ee5\u53ca\u8fd0\u884c\u5b83\u6240\u9700\u7684\u8f6f\u4ef6\u3002\u90e8\u7f72\u539f\u751f Helm Chart \u65f6\uff0c\u4f60\u53ef\u4ee5\u5728 YAML \u7f16\u8f91\u5668\u4e2d\u63d0\u4f9b Chart \u7684\u53c2\u6570\u503c\u3002"),(0,l.kt)("h3",{id:"rancher-chart"},"Rancher Chart"),(0,l.kt)("p",null,"Rancher Chart \u662f\u539f\u751f helm Chart\uff0c\u5305\u542b\u4e24\u4e2a\u53ef\u589e\u5f3a\u7528\u6237\u4f53\u9a8c\u7684\u6587\u4ef6 ",(0,l.kt)("inlineCode",{parentName:"p"},"app-readme.md")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"questions.yaml"),"\u3002\u5728 ",(0,l.kt)("a",{parentName:"p",href:"#rancher-chart-%E7%9A%84%E9%99%84%E5%8A%A0%E6%96%87%E4%BB%B6"},"Rancher Chart \u7684\u9644\u52a0\u6587\u4ef6"),"\u4e2d\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"Rancher Chart \u6dfb\u52a0\u4e86\u7b80\u5316\u7684 Chart \u63cf\u8ff0\u548c\u914d\u7f6e\u8868\u5355\uff0c\u4f7f\u5e94\u7528\u90e8\u7f72\u53d8\u5f97\u5bb9\u6613\u3002Rancher \u7528\u6237\u65e0\u9700\u901a\u8bfb\u6574\u4e2a Helm \u53d8\u91cf\u5217\u8868\u5373\u53ef\u4e86\u89e3\u5982\u4f55\u542f\u52a8\u5e94\u7528\u3002"),(0,l.kt)("h1",{id:"chart-\u76ee\u5f55\u7ed3\u6784"},"Chart \u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u57fa\u4e8e HTTP \u7684\u6807\u51c6 Helm \u4ed3\u5e93\u4e2d\u63d0\u4f9b Helm Chart\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Helm \u5b98\u65b9\u6587\u6863\u4e2d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/chart_repository"},"Chart \u4ed3\u5e93\u6307\u5357"),"\u3002"),(0,l.kt)("p",null,"\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u5728 Git \u4ed3\u5e93\u4e2d\u7ec4\u7ec7 Chart \u5e76\u5c06\u5176\u76f4\u63a5\u6dfb\u52a0\u5230\u5e94\u7528\u5e02\u573a\u3002"),(0,l.kt)("p",null,"\u4e0b\u8868\u6f14\u793a\u4e86 Git \u4ed3\u5e93\u7684\u76ee\u5f55\u7ed3\u6784\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"charts")," \u76ee\u5f55\u662f\u4ed3\u5e93\u57fa\u7840\u4e0b\u7684\u9876\u5c42\u76ee\u5f55\u3002\u5c06\u4ed3\u5e93\u6dfb\u52a0\u5230 Rancher \u5c06\u516c\u5f00\u5176\u4e2d\u5305\u542b\u7684\u6240\u6709 Chart\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"questions.yaml"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"README.md")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.yml")," \u6587\u4ef6\u662f\u9488\u5bf9\u4e8e Rancher Chart \u7684\uff0c\u4f46\u5bf9\u4e8e\u81ea\u5b9a\u4e49 Chart \u662f\u53ef\u9009\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<Repository-Base>/\n \u2502\n \u251c\u2500\u2500 charts/\n \u2502   \u251c\u2500\u2500 <Application Name>/      # \u8fd9\u4e2a\u76ee\u5f55\u540d\u79f0\u5c06\u4f5c\u4e3a Chart \u540d\u79f0\u51fa\u73b0\u5728 Rancher UI \u4e2d\u3002\n \u2502   \u2502   \u251c\u2500\u2500 <App Version>/   # \u8fd9\u4e2a\u7ea7\u522b\u7684\u6bcf\u4e2a\u76ee\u5f55\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u5e94\u7528\u7248\u672c\uff0c\u53ef\u4ee5\u5728 Rancher UI \u7684 Chart \u4e2d\u9009\u62e9\u3002\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 Chart.yaml   # \u5fc5\u9700\u7684 Helm Chart \u4fe1\u606f\u6587\u4ef6\u3002\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 questions.yaml   # \u5728 Rancher UI \u4e2d\u663e\u793a\u7684\u8868\u5355\u95ee\u9898\u3002\u95ee\u9898\u663e\u793a\u5728\u914d\u7f6e\u9009\u9879\u4e2d\u3002*\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 README.md         # \u53ef\u9009\uff1a\u5728 Rancher UI \u4e2d\u663e\u793a\u7684 Helm \u81ea\u8ff0\u6587\u4ef6\u3002\u6b64\u6587\u672c\u663e\u793a\u5728\u8be6\u7ec6\u8bf4\u660e\u4e2d\u3002\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 requirements.yml  # \u53ef\u9009\uff1a\u5217\u51fa Chart \u7684\u4f9d\u8d56\u9879\u7684 YAML \u6587\u4ef6\u3002\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 values.yml        # Chart \u7684\u9ed8\u8ba4\u914d\u7f6e\u503c\u3002\n \u2502   \u2502   \u2502   \u251c\u2500\u2500 templates/        # \u5305\u542b\u6a21\u677f\u7684\u76ee\u5f55\uff0c\u4e0e values.yml \u4e00\u8d77\u80fd\u751f\u6210 Kubernetes YAML\u3002\n")),(0,l.kt)("h1",{id:"rancher-chart-\u7684\u9644\u52a0\u6587\u4ef6"},"Rancher Chart \u7684\u9644\u52a0\u6587\u4ef6"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u4f60\u7684\u81ea\u5b9a\u4e49\u76ee\u5f55\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5927\u81f4\u4e86\u89e3 Rancher chart \u4e0e\u539f\u751f Helm chart \u7684\u533a\u522b\u3002Rancher Chart \u7684\u76ee\u5f55\u7ed3\u6784\u4e0e Helm Chart \u7565\u6709\u4e0d\u540c\u3002Rancher Chart \u5305\u542b\u4e24\u4e2a Helm Chart \u6ca1\u6709\u7684\u6587\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"app-readme.md")),(0,l.kt)("p",{parentName:"li"}," \u5728 Chart \u7684 UI \u6807\u5934\u4e2d\u63d0\u4f9b\u63cf\u8ff0\u6027\u6587\u672c\u7684\u6587\u4ef6\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"questions.yml")),(0,l.kt)("p",{parentName:"li"}," \u5305\u542b\u8868\u5355\u95ee\u9898\u7684\u6587\u4ef6\u3002\u8fd9\u4e9b\u8868\u5355\u95ee\u9898\u7b80\u5316\u4e86 Chart \u7684\u90e8\u7f72\u3002\u6ca1\u6709\u5b83\uff0c\u4f60\u5fc5\u987b\u4f7f\u7528\u66f4\u590d\u6742\u7684 YAML \u914d\u7f6e\u6765\u914d\u7f6e\u90e8\u7f72\u3002\u4e0b\u56fe\u663e\u793a\u4e86 Rancher Chart\uff08\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"questions.yml"),"\uff09\u548c\u539f\u751f Helm Chart\uff08\u4e0d\u5305\u542b\uff09\u4e4b\u95f4\u7684\u533a\u522b\u3002"))),(0,l.kt)("figcaption",null,"\u5e26\u6709 ",(0,l.kt)("code",null,"questions.yml")," \u7684 Rancher Chart\uff08\u4e0a\uff09\u4e0e Helm Chart\uff08\u4e0b\uff09"),(0,l.kt)("p",null,"   ",(0,l.kt)("img",{alt:"questions.yml",src:a(38896).Z,width:"3476",height:"1150"}),"\n",(0,l.kt)("img",{alt:"values.yaml",src:a(29260).Z,width:"3486",height:"1172"})),(0,l.kt)("h3",{id:"chartyaml-\u6ce8\u91ca"},"Chart.yaml \u6ce8\u91ca"),(0,l.kt)("p",null,"Rancher \u652f\u6301\u4f60\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," \u6587\u4ef6\u7684\u5176\u4ed6\u6ce8\u91ca\u3002\u8fd9\u4e9b\u6ce8\u91ca\u5141\u8bb8\u4f60\u5b9a\u4e49\u5e94\u7528\u4f9d\u8d56\u9879\u6216\u914d\u7f6e\u5176\u4ed6 UI \u9ed8\u8ba4\u503c\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u89e3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/auto-install"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8bbe\u7f6e\uff0c\u5c06\u5728\u5b89\u88c5\u6b64 Chart \u4e4b\u524d\u5148\u5b89\u88c5\u6307\u5b9a Chart \u7684\u6307\u5b9a\u7248\u672c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"other-chart-name=1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/display-name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u5728\u5e94\u7528\u5e02\u573a\u4e2d\u663e\u793a\u7684\u540d\u79f0\uff0c\u800c\u4e0d\u662f Chart \u672c\u8eab\u7684\u540d\u79f0\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"Chart \u7684\u663e\u793a\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u90e8\u7f72 Chart \u7684\u56fa\u5b9a\u547d\u540d\u7a7a\u95f4\u3002\u5982\u679c\u8bbe\u7f6e\uff0c\u5219\u7528\u6237\u65e0\u6cd5\u66f4\u6539\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"fixed-namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/release-name"),(0,l.kt)("td",{parentName:"tr",align:null},"Helm \u5b89\u88c5\u7684\u56fa\u5b9a\u7248\u672c\u540d\u79f0\u3002\u5982\u679c\u8bbe\u7f6e\uff0c\u5219\u7528\u6237\u65e0\u6cd5\u66f4\u6539\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"fixed-release-name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/requests-cpu"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u8be5\u5728\u96c6\u7fa4\u4e2d\u4fdd\u7559\u7684 CPU \u603b\u91cf\u3002\u5982\u679c\u53ef\u7528 CPU \u8d44\u6e90\u5c11\u4e8e\u8be5\u503c\uff0c\u5c06\u663e\u793a\u8b66\u544a\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"2000m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/requests-memory"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u8be5\u5728\u96c6\u7fa4\u4e2d\u4fdd\u7559\u7684\u5185\u5b58\u603b\u91cf\u3002\u5982\u679c\u53ef\u7528\u5185\u5b58\u8d44\u6e90\u5c11\u4e8e\u8be5\u503c\uff0c\u5c06\u663e\u793a\u8b66\u544a\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"2Gi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog.cattle.io/os"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9650\u5236\u53ef\u4ee5\u5b89\u88c5\u6b64 Chart \u7684\u64cd\u4f5c\u7cfb\u7edf\u3002\u53ef\u7528\u503c\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"linux"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"windows"),"\u3002\u9ed8\u8ba4\uff1a\u65e0\u9650\u5236"),(0,l.kt)("td",{parentName:"tr",align:null},"linux")))),(0,l.kt)("h3",{id:"questionsyml"},"questions.yml"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"questions.yml")," \u4e2d\u5927\u90e8\u5206\u662f\u5411\u6700\u7ec8\u7528\u6237\u63d0\u51fa\u7684\u95ee\u9898\uff0c\u4f46\u4e5f\u6709\u4e00\u90e8\u5206\u53ef\u4ee5\u5728\u6b64\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u5b57\u6bb5\u3002"),(0,l.kt)("h3",{id:"\u6700\u4f4e\u6700\u9ad8-rancher-\u7248\u672c"},"\u6700\u4f4e/\u6700\u9ad8 Rancher \u7248\u672c"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u6bcf\u4e2a Chart \u6dfb\u52a0\u6700\u4f4e\u548c/\u6216\u6700\u9ad8\u7684 Rancher \u7248\u672c\uff0c\u8fd9\u51b3\u5b9a\u4e86\u8be5 Chart \u662f\u5426\u53ef\u4ee5\u4ece Rancher \u90e8\u7f72\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Rancher \u7248\u672c\u5e26\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"v")," \u524d\u7f00\uff0c\u4f46\u662f\u4f7f\u7528\u6b64\u9009\u9879\u65f6\u8bf7",(0,l.kt)("em",{parentName:"p"},"\u4e0d\u8981"),"\u5305\u62ec\u524d\u7f00\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rancher_min_version: 2.3.0\nrancher_max_version: 2.3.99\n")),(0,l.kt)("h3",{id:"question-\u53d8\u91cf\u53c2\u8003"},"Question \u53d8\u91cf\u53c2\u8003"),(0,l.kt)("p",null,"\u6b64\u53c2\u8003\u5305\u542b\u53ef\u4ee5\u5d4c\u5957\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"questions:")," \u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"questions.yml")," \u4e2d\u7684\u53d8\u91cf\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variable"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"td"},"values.yml")," \u6587\u4ef6\u4e2d\u6307\u5b9a\u7684\u53d8\u91cf\u540d\uff0c\u5d4c\u5957\u5bf9\u8c61\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"td"},"foo.bar"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"label"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49 UI \u6807\u7b7e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u53d8\u91cf\u7684\u63cf\u8ff0\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"string"),"\uff08\u652f\u6301\u7684\u7c7b\u578b\u4e3a string\u3001multiline\u3001boolean\u3001int\u3001enum\u3001password\u3001storageclass\u3001hostname\u3001pvc \u548c secret\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"required"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u53d8\u91cf\u662f\u5426\u662f\u5fc5\u987b\u7684\uff08true ","|"," false\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u9ed8\u8ba4\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"group"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6309\u8f93\u5165\u503c\u5bf9\u95ee\u9898\u8fdb\u884c\u5206\u7ec4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u5b57\u7b26\u957f\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5b57\u7b26\u957f\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u6574\u6570\u957f\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u6574\u6570\u957f\u5ea6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"enum")," \u7c7b\u578b\u7684\u53d8\u91cf\u6307\u5b9a\u9009\u9879\uff0c\u4f8b\u5982\uff1aoptions:",(0,l.kt)("br",null),' - "ClusterIP" ',(0,l.kt)("br",null),' - "NodePort" ',(0,l.kt)("br",null),' - "LoadBalancer"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"valid_chars"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u5b57\u7b26\u9a8c\u8bc1\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"invalid_chars"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0\u6548\u8f93\u5165\u5b57\u7b26\u9a8c\u8bc1\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subquestions"),(0,l.kt)("td",{parentName:"tr",align:null},"[]subquestion"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u4e00\u7ec4\u5b50\u95ee\u9898\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"show_if"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u6761\u4ef6\u53d8\u91cf\u4e3a true\uff0c\u5219\u663e\u793a\u5f53\u524d\u53d8\u91cf\u3002\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},'show_if: "serviceType=Nodeport"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"show","_","subquestion_if"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3a true \u6216\u7b49\u4e8e\u67d0\u4e2a\u9009\u9879\uff0c\u5219\u663e\u793a\u5b50\u95ee\u9898\u3002\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},'show_subquestion_if: "true"'))))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"subquestions[]")," \u4e0d\u80fd\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"subquestions")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"show_subquestions_if")," \u952e\uff0c\u4f46\u652f\u6301\u4e0a\u8868\u4e2d\u7684\u6240\u6709\u5176\u4ed6\u952e\u3002"))))}c.isMDXComponent=!0},29260:function(t,e,a){e.Z=a.p+"assets/images/helm-app-2.6-e60ae79625f118adc52f04dfeb3ecb73.png"},38896:function(t,e,a){e.Z=a.p+"assets/images/rancher-app-2.6-e804785d84e3d5bbcbce9d059633dce1.png"}}]);