"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24404],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},24450:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={title:"Adding Ingresses to Your Project",description:"Ingresses can be added for workloads to provide load balancing, SSL termination and host/path-based routing. Learn how to add Rancher ingress to your project",weight:3042,aliases:["/rancher/v2.0-v2.4/en/tasks/workloads/add-ingress/","/rancher/v2.0-v2.4/en/k8s-in-rancher/load-balancers-and-ingress/ingress"]},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",title:"Adding Ingresses to Your Project",description:"Ingresses can be added for workloads to provide load balancing, SSL termination and host/path-based routing. Learn how to add Rancher ingress to your project",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"Adding Ingresses to Your Project",description:"Ingresses can be added for workloads to provide load balancing, SSL termination and host/path-based routing. Learn how to add Rancher ingress to your project",weight:3042,aliases:["/rancher/v2.0-v2.4/en/tasks/workloads/add-ingress/","/rancher/v2.0-v2.4/en/k8s-in-rancher/load-balancers-and-ingress/ingress"]},sidebar:"tutorialSidebar",previous:{title:"Layer 4 and Layer 7 Load Balancing",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"},next:{title:"Service Discovery",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"}},d={},u=[{value:"Automatically generate a sslip.io hostname",id:"automatically-generate-a-sslipio-hostname",level:3},{value:"Specify a hostname to use",id:"specify-a-hostname-to-use",level:3},{value:"Use as the default backend",id:"use-as-the-default-backend",level:3},{value:"Certificates",id:"certificates",level:3},{value:"Labels and Annotations",id:"labels-and-annotations",level:3}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ingress can be added for workloads to provide load balancing, SSL termination and host/path based routing. When using ingresses in a project, you can program the ingress hostname to an external DNS by setting up a ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/globaldns"},"Global DNS entry"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view, open the project that you want to add ingress to."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Resources")," in the main navigation bar. Click the ",(0,o.kt)("strong",{parentName:"li"},"Load Balancing")," tab. (In versions before v2.3.0, just click the ",(0,o.kt)("strong",{parentName:"li"},"Load Balancing")," tab.) Then click ",(0,o.kt)("strong",{parentName:"li"},"Add Ingress"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Name")," for the ingress."),(0,o.kt)("li",{parentName:"ol"},"Select an existing ",(0,o.kt)("strong",{parentName:"li"},"Namespace")," from the drop-down list. Alternatively, you can create a new namespace on the fly by clicking ",(0,o.kt)("strong",{parentName:"li"},"Add to a new namespace"),"."),(0,o.kt)("li",{parentName:"ol"},"Create ingress forwarding ",(0,o.kt)("strong",{parentName:"li"},"Rules"),". For help configuring the rules, refer to ",(0,o.kt)("a",{parentName:"li",href:"#ingress-rule-configuration"},"this section.")," If any of your ingress rules handle requests for encrypted ports, add a certificate to encrypt/decrypt communications."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Optional:")," click ",(0,o.kt)("strong",{parentName:"li"},"Add Rule")," to create additional ingress rules. For example, after you create ingress rules to direct requests for your hostname, you'll likely want to create a default backend to handle 404s.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your ingress is added to the project. The ingress begins enforcing your ingress rules."),(0,o.kt)("h1",{id:"ingress-rule-configuration"},"Ingress Rule Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#automatically-generate-a-sslip-io-hostname"},"Automatically generate a sslip.io hostname")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#specify-a-hostname-to-use"},"Specify a hostname to use")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#use-as-the-default-backend"},"Use as the default backend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#certificates"},"Certificates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#labels-and-annotations"},"Labels and Annotations"))),(0,o.kt)("h3",{id:"automatically-generate-a-sslipio-hostname"},"Automatically generate a sslip.io hostname"),(0,o.kt)("p",null,"If you choose this option, ingress routes requests to hostname to a DNS name that's automatically generated. Rancher uses ",(0,o.kt)("a",{parentName:"p",href:"http://sslip.io/"},"sslip.io")," to automatically generates the DNS name. This option is best used for testing, ",(0,o.kt)("em",{parentName:"p"},"not")," production environments."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," To use this option, you must be able to resolve to ",(0,o.kt)("inlineCode",{parentName:"p"},"sslip.io")," addresses.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("strong",{parentName:"li"},"Target Backend"),". By default, a workload is added to the ingress, but you can add more targets by clicking either ",(0,o.kt)("strong",{parentName:"li"},"Service")," or ",(0,o.kt)("strong",{parentName:"li"},"Workload"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Optional:")," If you want specify a workload or service when a request is sent to a particular hostname path, add a ",(0,o.kt)("strong",{parentName:"li"},"Path")," for the target. For example, if you want requests for ",(0,o.kt)("inlineCode",{parentName:"li"},"www.mysite.com/contact-us")," to be sent to a different service than ",(0,o.kt)("inlineCode",{parentName:"li"},"www.mysite.com"),", enter ",(0,o.kt)("inlineCode",{parentName:"li"},"/contact-us")," in the ",(0,o.kt)("strong",{parentName:"li"},"Path")," field. Typically, the first rule that you create does not include a path."),(0,o.kt)("li",{parentName:"ol"},"Select a workload or service from the ",(0,o.kt)("strong",{parentName:"li"},"Target")," drop-down list for each target you've added."),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"Port")," number that each target operates on.")),(0,o.kt)("h3",{id:"specify-a-hostname-to-use"},"Specify a hostname to use"),(0,o.kt)("p",null,"If you use this option, ingress routes requests for a hostname to the service or workload that you specify."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter the hostname that your ingress will handle request forwarding for. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"www.mysite.com"),"."),(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("strong",{parentName:"li"},"Target Backend"),". By default, a workload is added to the ingress, but you can add more targets by clicking either ",(0,o.kt)("strong",{parentName:"li"},"Service")," or ",(0,o.kt)("strong",{parentName:"li"},"Workload"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Optional:")," If you want specify a workload or service when a request is sent to a particular hostname path, add a ",(0,o.kt)("strong",{parentName:"li"},"Path")," for the target. For example, if you want requests for ",(0,o.kt)("inlineCode",{parentName:"li"},"www.mysite.com/contact-us")," to be sent to a different service than ",(0,o.kt)("inlineCode",{parentName:"li"},"www.mysite.com"),", enter ",(0,o.kt)("inlineCode",{parentName:"li"},"/contact-us")," in the ",(0,o.kt)("strong",{parentName:"li"},"Path")," field. Typically, the first rule that you create does not include a path."),(0,o.kt)("li",{parentName:"ol"},"Select a workload or service from the ",(0,o.kt)("strong",{parentName:"li"},"Target")," drop-down list for each target you've added."),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"Port")," number that each target operates on.")),(0,o.kt)("h3",{id:"use-as-the-default-backend"},"Use as the default backend"),(0,o.kt)("p",null,"Use this option to set an ingress rule for handling requests that don't match any other ingress rules. For example, use this option to route requests that can't be found to a ",(0,o.kt)("inlineCode",{parentName:"p"},"404")," page."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you deployed Rancher using RKE, a default backend for 404s and 202s is already configured.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a ",(0,o.kt)("strong",{parentName:"li"},"Target Backend"),". Click either ",(0,o.kt)("strong",{parentName:"li"},"Service")," or ",(0,o.kt)("strong",{parentName:"li"},"Workload")," to add the target."),(0,o.kt)("li",{parentName:"ol"},"Select a service or workload from the ",(0,o.kt)("strong",{parentName:"li"},"Target")," drop-down list.")),(0,o.kt)("h3",{id:"certificates"},"Certificates"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You must have an SSL certificate that the ingress can use to encrypt/decrypt communications. For more information see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"Adding SSL Certificates"),".")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Certificate"),"."),(0,o.kt)("li",{parentName:"ol"},"Select a ",(0,o.kt)("strong",{parentName:"li"},"Certificate")," from the drop-down list."),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"Host")," using encrypted communication."),(0,o.kt)("li",{parentName:"ol"},"To add additional hosts that use the certificate, click ",(0,o.kt)("strong",{parentName:"li"},"Add Hosts"),".")),(0,o.kt)("h3",{id:"labels-and-annotations"},"Labels and Annotations"),(0,o.kt)("p",null,"Add ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"Labels")," and/or ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"},"Annotations")," to provide metadata for your ingress."),(0,o.kt)("p",null,"For a list of annotations available for use, see the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/"},"Nginx Ingress Controller Documentation"),"."))}m.isMDXComponent=!0}}]);