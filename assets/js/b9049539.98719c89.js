"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[31510],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56330:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={title:"Rancher's CI/CD Pipelines",description:"Use Rancher\u2019s CI/CD pipeline to automatically checkout code, run builds or scripts, publish Docker images, and deploy software to users",weight:4e3},s=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",id:"how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",title:"Rancher's CI/CD Pipelines",description:"Use Rancher\u2019s CI/CD pipeline to automatically checkout code, run builds or scripts, publish Docker images, and deploy software to users",source:"@site/docs/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",permalink:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Rancher's CI/CD Pipelines",description:"Use Rancher\u2019s CI/CD pipeline to automatically checkout code, run builds or scripts, publish Docker images, and deploy software to users",weight:4e3},sidebar:"tutorialSidebar",previous:{title:"Namespaces",permalink:"/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},next:{title:"Pod Security Policies",permalink:"/how-to-guides/advanced-user-guides/manage-projects/manage-pod-security-policies"}},p={},l=[],d={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Using Rancher, you can integrate with a GitHub repository to setup a continuous integration (CI) pipeline."),(0,o.kt)("p",null,"After configuring Rancher and GitHub, you can deploy containers running Jenkins to automate a pipeline execution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build your application from code to image."),(0,o.kt)("li",{parentName:"ul"},"Validate your builds."),(0,o.kt)("li",{parentName:"ul"},"Deploy your build images to your cluster."),(0,o.kt)("li",{parentName:"ul"},"Run unit tests.  "),(0,o.kt)("li",{parentName:"ul"},"Run regression tests.")),(0,o.kt)("p",null,"For details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/pipelines"},"pipelines")," section."))}m.isMDXComponent=!0}}]);