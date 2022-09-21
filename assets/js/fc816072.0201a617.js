"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[85165],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),k=s,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function k(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60165:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],i={title:"Creating a GKE Cluster",shortTitle:"Google Kubernetes Engine",weight:2105,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-gke/"]},u=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",title:"Creating a GKE Cluster",description:"Prerequisites in Google Kubernetes Engine",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Creating a GKE Cluster",shortTitle:"Google Kubernetes Engine",weight:2105,aliases:["/rancher/v2.0-v2.4/en/tasks/clusters/creating-a-cluster/create-cluster-gke/"]},sidebar:"tutorialSidebar",previous:{title:"Setting up Clusters from Hosted Kubernetes Providers",permalink:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},next:{title:"Creating an AKS Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"}},c={},p=[{value:"Prerequisites in Google Kubernetes Engine",id:"prerequisites-in-google-kubernetes-engine",level:2},{value:"Create the GKE Cluster",id:"create-the-gke-cluster",level:2}],m={toc:p};function k(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites-in-google-kubernetes-engine"},"Prerequisites in Google Kubernetes Engine"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to GKE will incur charges.")),(0,o.kt)("p",null,"Create a service account using ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts"},"Google Kubernetes Engine"),". GKE uses this account to operate your cluster. Creating this account also generates a private key used for authentication."),(0,o.kt)("p",null,"The service account requires the following roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compute Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/compute.viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project Viewer:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes Engine Admin:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/container.admin")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Service Account User:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"roles/iam.serviceAccountUser"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"},"Google Documentation: Creating and Enabling Service Accounts")),(0,o.kt)("h2",{id:"create-the-gke-cluster"},"Create the GKE Cluster"),(0,o.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Add Cluster"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("strong",{parentName:"p"},"Google Kubernetes Engine"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("strong",{parentName:"p"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,o.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,o.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Either paste your service account private key in the ",(0,o.kt)("strong",{parentName:"p"},"Service Account")," text box or ",(0,o.kt)("strong",{parentName:"p"},"Read from a file"),". Then click ",(0,o.kt)("strong",{parentName:"p"},"Next: Configure Nodes"),"."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," After submitting your private key, you may have to enable the Google Kubernetes Engine API. If prompted, browse to the URL displayed in the Rancher UI to enable the API."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your ",(0,o.kt)("strong",{parentName:"p"},"Cluster Options"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Customize your ",(0,o.kt)("strong",{parentName:"p"},"Node Options")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Enabling the Auto Upgrade feature for Nodes is not recommended."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your ",(0,o.kt)("strong",{parentName:"p"},"Security Options"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Review your options to confirm they're correct. Then click ",(0,o.kt)("strong",{parentName:"p"},"Create"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," "),(0,o.kt)("p",null,"Your cluster is created and assigned a state of ",(0,o.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,o.kt)("p",null,"You can access your cluster after its state is updated to ",(0,o.kt)("strong",{parentName:"p"},"Active.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))}k.isMDXComponent=!0}}]);