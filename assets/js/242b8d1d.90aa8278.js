"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36913],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,m=u["".concat(l,".").concat(k)]||u[k]||c[k]||n;return r?o.createElement(m,s(s({ref:t},d),{},{components:r})):o.createElement(m,s({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<n;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88634:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),s=["components"],i={title:"Kubernetes Workloads and Pods",description:"Learn about the two constructs with which you can build any complex containerized application in Kubernetes: Kubernetes workloads and pods",weight:3025,aliases:["/rancher/v2.0-v2.4/en/concepts/workloads/","/rancher/v2.0-v2.4/en/tasks/workloads/","/rancher/v2.0-v2.4/en/k8s-in-rancher/workloads"]},l=void 0,p={unversionedId:"pages-for-subheaders/workloads-and-pods",id:"version-2.0-2.4/pages-for-subheaders/workloads-and-pods",title:"Kubernetes Workloads and Pods",description:"Learn about the two constructs with which you can build any complex containerized application in Kubernetes: Kubernetes workloads and pods",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/workloads-and-pods.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/workloads-and-pods",permalink:"/v2.0-v2.4/pages-for-subheaders/workloads-and-pods",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/workloads-and-pods.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Kubernetes Workloads and Pods",description:"Learn about the two constructs with which you can build any complex containerized application in Kubernetes: Kubernetes workloads and pods",weight:3025,aliases:["/rancher/v2.0-v2.4/en/concepts/workloads/","/rancher/v2.0-v2.4/en/tasks/workloads/","/rancher/v2.0-v2.4/en/k8s-in-rancher/workloads"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Resources",permalink:"/v2.0-v2.4/pages-for-subheaders/kubernetes-resources-setup"},next:{title:"Deploying Workloads",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"}},d={},c=[{value:"Pods",id:"pods",level:3},{value:"Workloads",id:"workloads",level:3},{value:"Workload Types",id:"workload-types",level:4},{value:"Services",id:"services",level:3},{value:"Service Types",id:"service-types",level:4},{value:"Workload Options",id:"workload-options",level:2},{value:"Related Links",id:"related-links",level:2},{value:"External Links",id:"external-links",level:3}],u={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can build any complex containerized application in Kubernetes using two basic constructs: pods and workloads. Once you build an application, you can expose it for access either within the same cluster or on the Internet using a third construct: services."),(0,n.kt)("h3",{id:"pods"},"Pods"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/"},(0,n.kt)("em",{parentName:"a"},"Pods"))," are one or more containers that share network namespaces and storage volumes. Most pods have only one container. Therefore when we discuss ",(0,n.kt)("em",{parentName:"p"},"pods"),", the term is often synonymous with ",(0,n.kt)("em",{parentName:"p"},"containers"),". You scale pods the same way you scale containers\u2014by having multiple instances of the same pod that implement a service. Usually pods get scaled and managed by the workload."),(0,n.kt)("h3",{id:"workloads"},"Workloads"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Workloads")," are objects that set deployment rules for pods. Based on these rules, Kubernetes performs the deployment and updates the workload with the current state of the application.\nWorkloads let you define the rules for application scheduling, scaling, and upgrade."),(0,n.kt)("h4",{id:"workload-types"},"Workload Types"),(0,n.kt)("p",null,"Kubernetes divides workloads into different types. The most popular types supported by Kubernetes are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployments")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("em",{parentName:"p"},"Deployments")," are best used for stateless applications (i.e., when you don't have to maintain the workload's state). Pods managed by deployment workloads are treated as independent and disposable. If a pod encounters disruption, Kubernetes removes it and then recreates it. An example application would be an Nginx web server.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSets")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("em",{parentName:"p"},"StatefulSets"),", in contrast to deployments, are best used when your application needs to maintain its identity and store data. An application would be something like Zookeeper\u2014an application that requires a database for storage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSets")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("em",{parentName:"p"},"Daemonsets")," ensures that every node in the cluster runs a copy of pod. For use cases where you're collecting logs or monitoring node performance, this daemon-like workload works best.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/"},"Jobs")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("em",{parentName:"p"},"Jobs")," launch one or more pods and ensure that a specified number of them successfully terminate. Jobs are best used to run a finite task to completion as opposed to managing an ongoing desired application state.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"},"CronJobs")),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("em",{parentName:"p"},"CronJobs")," are similar to jobs. CronJobs, however, runs to completion on a cron-based schedule."))),(0,n.kt)("h3",{id:"services"},"Services"),(0,n.kt)("p",null,"In many use cases, a workload has to be either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Accessed by other workloads in the cluster."),(0,n.kt)("li",{parentName:"ul"},"Exposed to the outside world.")),(0,n.kt)("p",null,"You can achieve these goals by creating a ",(0,n.kt)("em",{parentName:"p"},"Service"),". Services are mapped to the underlying workload's pods using a ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#service-and-replicationcontroller"},"selector/label approach (view the code samples)"),". Rancher UI simplifies this mapping process by automatically creating a service along with the workload, using the service port and type that you select."),(0,n.kt)("h4",{id:"service-types"},"Service Types"),(0,n.kt)("p",null,"There are several types of services available in Rancher. The descriptions below are sourced from the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types"},"Kubernetes Documentation"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ClusterIP")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Exposes the service on a cluster-internal IP. Choosing this value makes the service only reachable from within the cluster. This is the default ",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceType"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NodePort")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Exposes the service on each Node\u2019s IP at a static port (the ",(0,n.kt)("inlineCode",{parentName:"p"},"NodePort"),"). A ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterIP")," service, to which the ",(0,n.kt)("inlineCode",{parentName:"p"},"NodePort")," service will route, is automatically created. You\u2019ll be able to contact the ",(0,n.kt)("inlineCode",{parentName:"p"},"NodePort")," service, from outside the cluster, by requesting ",(0,n.kt)("inlineCode",{parentName:"p"},"<NodeIP>:<NodePort>"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LoadBalancer")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Exposes the service externally using a cloud provider\u2019s load balancer. ",(0,n.kt)("inlineCode",{parentName:"p"},"NodePort")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterIP")," services, to which the external load balancer will route, are automatically created.")))),(0,n.kt)("h2",{id:"workload-options"},"Workload Options"),(0,n.kt)("p",null,"This section of the documentation contains instructions for deploying workloads and using workload options."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploy Workloads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"},"Upgrade Workloads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/roll-back-workloads"},"Rollback Workloads"))),(0,n.kt)("h2",{id:"related-links"},"Related Links"),(0,n.kt)("h3",{id:"external-links"},"External Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Services"))))}k.isMDXComponent=!0}}]);