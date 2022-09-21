"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[33550],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88485:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"Setting up Local System Charts for Air Gapped Installations",weight:120,aliases:["/rancher/v2.5/en/installation/air-gap-single-node/config-rancher-system-charts/_index.md","/rancher/v2.5/en/installation/air-gap-high-availability/config-rancher-system-charts/_index.md","/rancher/v2.5/en/installation/options/local-system-charts","/rancher/v2.x/en/installation/resources/local-system-charts/","/rancher/v2.x/en/installation/options/local-system-charts/"]},l=void 0,c={unversionedId:"getting-started/installation-and-upgrade/resources/local-system-charts",id:"version-2.5/getting-started/installation-and-upgrade/resources/local-system-charts",title:"Setting up Local System Charts for Air Gapped Installations",description:"The System Charts repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS.",source:"@site/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/local-system-charts.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/local-system-charts",permalink:"/v2.5/getting-started/installation-and-upgrade/resources/local-system-charts",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/getting-started/installation-and-upgrade/resources/local-system-charts.md",tags:[],version:"2.5",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Setting up Local System Charts for Air Gapped Installations",weight:120,aliases:["/rancher/v2.5/en/installation/air-gap-single-node/config-rancher-system-charts/_index.md","/rancher/v2.5/en/installation/air-gap-high-availability/config-rancher-system-charts/_index.md","/rancher/v2.5/en/installation/options/local-system-charts","/rancher/v2.x/en/installation/resources/local-system-charts/","/rancher/v2.x/en/installation/options/local-system-charts/"]},sidebar:"tutorialSidebar",previous:{title:"Updating the Rancher Certificate",permalink:"/v2.5/getting-started/installation-and-upgrade/resources/update-rancher-certificate"},next:{title:"Upgrading and Rolling Back Kubernetes",permalink:"/v2.5/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"}},p={},u=[],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/system-charts"},"System Charts")," repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS."),(0,i.kt)("p",null,"In an air gapped installation of Rancher, you will need to configure Rancher to use a local copy of the system charts. This section describes how to use local system charts using a CLI flag."),(0,i.kt)("h1",{id:"using-local-system-charts"},"Using Local System Charts"),(0,i.kt)("p",null,"A local copy of ",(0,i.kt)("inlineCode",{parentName:"p"},"system-charts")," has been packaged into the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," container. To be able to use these features in an air gap install, you will need to run the Rancher install command with an extra environment variable, ",(0,i.kt)("inlineCode",{parentName:"p"},"CATTLE_SYSTEM_CATALOG=bundled"),", which tells Rancher to use the local copy of the charts instead of attempting to fetch them from GitHub."),(0,i.kt)("p",null,"Example commands for a Rancher installation with a bundled ",(0,i.kt)("inlineCode",{parentName:"p"},"system-charts")," are included in the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"air gap Docker installation")," instructions and the ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"air gap Kubernetes installation")," instructions."))}h.isMDXComponent=!0}}]);