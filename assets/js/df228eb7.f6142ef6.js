"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86056],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64837:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Architecture",weight:1},s=void 0,u={unversionedId:"explanations/integrations-in-rancher/logging/logging-architecture",id:"version-2.5/explanations/integrations-in-rancher/logging/logging-architecture",title:"Architecture",description:"This section summarizes the architecture of the Rancher logging application.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/logging-architecture.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/logging-architecture",permalink:"/v2.5/explanations/integrations-in-rancher/logging/logging-architecture",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/logging/logging-architecture.md",tags:[],version:"2.5",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Architecture",weight:1},sidebar:"tutorialSidebar",previous:{title:"Rancher Integration with Logging Services",permalink:"/v2.5/pages-for-subheaders/logging"},next:{title:"Migrating to Rancher v2.5 Logging",permalink:"/v2.5/explanations/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging"}},c={},g=[{value:"Changes in Rancher v2.5",id:"changes-in-rancher-v25",level:3},{value:"How the Banzai Cloud Logging Operator Works",id:"how-the-banzai-cloud-logging-operator-works",level:3}],p={toc:g};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section summarizes the architecture of the Rancher logging application."),(0,a.kt)("p",null,"For more details about how the Banzai Cloud Logging operator works, see the ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/#architecture"},"official documentation.")),(0,a.kt)("h3",{id:"changes-in-rancher-v25"},"Changes in Rancher v2.5"),(0,a.kt)("p",null,"The following changes were introduced to logging in Rancher v2.5:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://banzaicloud.com/docs/one-eye/logging-operator/"},"Banzai Cloud Logging operator")," now powers Rancher's logging solution in place of the former, in-house solution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluentbit.io/"},"Fluent Bit")," is now used to aggregate the logs, and ",(0,a.kt)("a",{parentName:"li",href:"https://www.fluentd.org/"},"Fluentd")," is used for filtering the messages and routing them to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Outputs"),". Previously, only Fluentd was used."),(0,a.kt)("li",{parentName:"ul"},"Logging can be configured with a Kubernetes manifest, because logging now uses a Kubernetes operator with Custom Resource Definitions."),(0,a.kt)("li",{parentName:"ul"},"We now support filtering logs."),(0,a.kt)("li",{parentName:"ul"},"We now support writing logs to multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"Outputs"),"."),(0,a.kt)("li",{parentName:"ul"},"We now always collect Control Plane and etcd logs.")),(0,a.kt)("h3",{id:"how-the-banzai-cloud-logging-operator-works"},"How the Banzai Cloud Logging Operator Works"),(0,a.kt)("p",null,"The Logging operator automates the deployment and configuration of a Kubernetes logging pipeline. It deploys and configures a Fluent Bit DaemonSet on every node to collect container and application logs from the node file system. "),(0,a.kt)("p",null,"Fluent Bit queries the Kubernetes API and enriches the logs with metadata about the pods, and transfers both the logs and the metadata to Fluentd. Fluentd receives, filters, and transfers logs to multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs"),"."),(0,a.kt)("p",null,"The following custom resources are used to define how logs are filtered and sent to their ",(0,a.kt)("inlineCode",{parentName:"p"},"Outputs"),": "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"Flow")," is a namespaced custom resource that uses filters and selectors to route log messages to the appropriate ",(0,a.kt)("inlineCode",{parentName:"li"},"Outputs"),". "),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterFlow")," is used to route cluster-level log messages."),(0,a.kt)("li",{parentName:"ul"},"An ",(0,a.kt)("inlineCode",{parentName:"li"},"Output")," is a namespaced resource that defines where the log messages are sent. "),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterOutput")," defines an ",(0,a.kt)("inlineCode",{parentName:"li"},"Output")," that is available from all ",(0,a.kt)("inlineCode",{parentName:"li"},"Flows")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ClusterFlows"),".")),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow")," must reference an ",(0,a.kt)("inlineCode",{parentName:"p"},"Output"),", and each ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," must reference a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"."),(0,a.kt)("p",null,"The following figure from the ",(0,a.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/#architecture"},"Banzai documentation")," shows the new logging architecture:"),(0,a.kt)("figcaption",null,"How the Banzai Cloud Logging Operator Works with Fluentd and Fluent Bit"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"How the Banzai Cloud Logging Operator Works with Fluentd",src:n(87306).Z,width:"2835",height:"2732"})))}d.isMDXComponent=!0},87306:function(e,t,n){t.Z=n.p+"assets/images/banzai-cloud-logging-operator-e275eba1f49ecdc1035cd63a54fdd576.png"}}]);