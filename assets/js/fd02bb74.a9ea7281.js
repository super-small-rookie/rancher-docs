"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98685],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45422:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],c={title:"Certificate Rotation",weight:2040,aliases:["/rancher/v2.x/en/cluster-admin/certificate-rotation/"]},s=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",id:"version-2.5/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",title:"Certificate Rotation",description:"Warning: Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates.md",tags:[],version:"2.5",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Certificate Rotation",weight:2040,aliases:["/rancher/v2.x/en/cluster-admin/certificate-rotation/"]},sidebar:"tutorialSidebar",previous:{title:"Cloning Clusters",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},next:{title:"Nodes and Node Pools",permalink:"/v2.5/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"}},u={},d=[{value:"Certificate Rotation",id:"certificate-rotation",level:3}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")," Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.")),(0,i.kt)("p",null,"By default, Kubernetes clusters require certificates and Rancher launched Kubernetes clusters automatically generate  certificates for the Kubernetes components. Rotating these certificates is important before the certificates expire as well as if a certificate is compromised. After the certificates are rotated, the Kubernetes components are automatically restarted."),(0,i.kt)("p",null,"Certificates can be rotated for the following services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"etcd"),(0,i.kt)("li",{parentName:"ul"},"kubelet (node certificate)"),(0,i.kt)("li",{parentName:"ul"},"kubelet (serving certificate, if ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/services/#kubelet-options"},"enabled"),")"),(0,i.kt)("li",{parentName:"ul"},"kube-apiserver"),(0,i.kt)("li",{parentName:"ul"},"kube-proxy"),(0,i.kt)("li",{parentName:"ul"},"kube-scheduler"),(0,i.kt)("li",{parentName:"ul"},"kube-controller-manager")),(0,i.kt)("h3",{id:"certificate-rotation"},"Certificate Rotation"),(0,i.kt)("p",null,"Rancher launched Kubernetes clusters have the ability to rotate the auto-generated certificates through the UI."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to rotate certificates.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > Rotate Certificates"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select which certificates that you want to rotate."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rotate all Service certificates (keep the same CA)"),(0,i.kt)("li",{parentName:"ul"},"Rotate an individual service and choose one of the services from the drop-down menu"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Results:")," The selected certificates will be rotated and the related services will be restarted to start using the new certificate."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Even though the RKE CLI can use custom certificates for the Kubernetes cluster components, Rancher currently doesn't allow the ability to upload these in Rancher launched Kubernetes clusters.")))}m.isMDXComponent=!0}}]);