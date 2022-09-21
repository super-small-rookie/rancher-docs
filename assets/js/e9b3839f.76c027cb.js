"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14754],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),o=n(86010),a="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(87462),o=n(67294),a=n(86010),i=n(72389),s=n(67392),l=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,h=e.defaultValue,f=e.values,g=e.groupId,k=e.className,m=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:m[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,_=w.setTabGroupChoices,R=(0,o.useState)(y),C=R[0],E=R[1],K=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=N[g];null!=O&&O!==C&&v.some((function(e){return e.value===O}))&&E(O)}var P=function(e){var t=e.currentTarget,n=K.indexOf(t),r=v[n].value;r!==C&&(T(t),E(r),null!=g&&_(g,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,o=K.indexOf(e.currentTarget)+1;n=null!=(r=K[o])?r:K[0];break;case"ArrowLeft":var a,i=K.indexOf(e.currentTarget)-1;n=null!=(a=K[i])?a:K[K.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},k)},v.map((function(e){var t=e.value,n=e.label,i=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return K.push(e)},onKeyDown:I,onFocus:P,onClick:P},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,o.cloneElement)(m.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},81035:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(65488),s=n(85162),l=["components"],u={title:"RKE Cluster Configuration Reference",weight:2250,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/options/"]},c=void 0,p={unversionedId:"cluster-provisioning/rke-clusters/options/options",id:"version-2.5/cluster-provisioning/rke-clusters/options/options",title:"RKE Cluster Configuration Reference",description:"When Rancher installs Kubernetes, it uses RKE as the Kubernetes distribution.",source:"@site/versioned_docs/version-2.5/cluster-provisioning/rke-clusters/options/options.md",sourceDirName:"cluster-provisioning/rke-clusters/options",slug:"/cluster-provisioning/rke-clusters/options/",permalink:"/v2.5/cluster-provisioning/rke-clusters/options/",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/cluster-provisioning/rke-clusters/options/options.md",tags:[],version:"2.5",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"RKE Cluster Configuration Reference",weight:2250,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/options/"]}},d={},h=[{value:"Rancher UI Options",id:"rancher-ui-options",level:2},{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Network Provider",id:"network-provider",level:3},{value:"Project Network Isolation",id:"project-network-isolation",level:3},{value:"Kubernetes Cloud Providers",id:"kubernetes-cloud-providers",level:3},{value:"Private registries",id:"private-registries",level:3},{value:"Authorized Cluster Endpoint",id:"authorized-cluster-endpoint",level:3},{value:"Node Pools",id:"node-pools",level:3},{value:"Advanced Options",id:"advanced-options",level:2},{value:"NGINX Ingress",id:"nginx-ingress",level:3},{value:"Node Port Range",id:"node-port-range",level:3},{value:"Metrics Server Monitoring",id:"metrics-server-monitoring",level:3},{value:"Pod Security Policy Support",id:"pod-security-policy-support",level:3},{value:"Docker Version on Nodes",id:"docker-version-on-nodes",level:3},{value:"Docker Root Directory",id:"docker-root-directory",level:3},{value:"Recurring etcd Snapshots",id:"recurring-etcd-snapshots",level:3},{value:"Agent Environment Variables",id:"agent-environment-variables",level:3},{value:"Cluster Config File",id:"cluster-config-file",level:2},{value:"Config File Structure in Rancher v2.3.0+",id:"config-file-structure-in-rancher-v230",level:3},{value:"Default DNS provider",id:"default-dns-provider",level:3},{value:"docker_root_dir",id:"docker_root_dir",level:3},{value:"enable_cluster_monitoring",id:"enable_cluster_monitoring",level:3},{value:"enable_network_policy",id:"enable_network_policy",level:3},{value:"local_cluster_auth_endpoint",id:"local_cluster_auth_endpoint",level:3},{value:"Custom Network Plug-in",id:"custom-network-plug-in",level:3}],f={toc:h};function g(e){var t=e.components,u=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When Rancher installs Kubernetes, it uses ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE")," as the Kubernetes distribution."),(0,a.kt)("p",null,"This section covers the configuration options that are available in Rancher for a new or existing RKE Kubernetes cluster."),(0,a.kt)("p",null,"You can configure the Kubernetes options one of two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rancher-ui-options"},"Rancher UI"),": Use the Rancher UI to select options that are commonly customized when setting up a Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cluster-config-file"},"Cluster Config File"),": Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML.")),(0,a.kt)("p",null,"The RKE cluster config options are nested under the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive. For more information, see the section about the ",(0,a.kt)("a",{parentName:"p",href:"#cluster-config-file"},"cluster config file.")),(0,a.kt)("h2",{id:"rancher-ui-options"},"Rancher UI Options"),(0,a.kt)("p",null,"When creating a cluster using one of the options described in ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes"),", you can configure basic Kubernetes options using the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Options")," section."),(0,a.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,a.kt)("p",null,"The version of Kubernetes installed on your cluster nodes. Rancher packages its own version of Kubernetes based on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/hyperkube"},"hyperkube"),"."),(0,a.kt)("h3",{id:"network-provider"},"Network Provider"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/cluster-administration/networking/"},"Network Provider")," that the cluster uses. For more details on the different networking providers, please view our ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/faq/container-network-interface-providers"},"Networking FAQ"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn't allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you  tear down the entire cluster and all its applications.")),(0,a.kt)("p",null,"Out of the box, Rancher is compatible with the following network providers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/projectcalico/canal"},"Canal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/coreos/flannel#flannel"},"Flannel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.projectcalico.org/v3.11/introduction/"},"Calico")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/weave"},"Weave"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes on Weave:")),(0,a.kt)("p",null,"When Weave is selected as network provider, Rancher will automatically enable encryption by generating a random password. If you want to specify the password manually, please see how to configure your cluster using a ",(0,a.kt)("a",{parentName:"p",href:"cluster-provisioning/rke-clusters/options/#cluster-config-file"},"Config File")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/#weave-network-plug-in-options"},"Weave Network Plug-in Options"),"."),(0,a.kt)("h3",{id:"project-network-isolation"},"Project Network Isolation"),(0,a.kt)("p",null,"Project network isolation is used to enable or disable communication between pods in different projects."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,a.kt)("p",null,"To enable project network isolation as a cluster option, you will need to use any RKE network plugin that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin.")),(0,a.kt)(s.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,a.kt)("p",null,"To enable project network isolation as a cluster option, you will need to use Canal as the CNI."))),(0,a.kt)("h3",{id:"kubernetes-cloud-providers"},"Kubernetes Cloud Providers"),(0,a.kt)("p",null,"You can configure a ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes cloud provider"),". If you want to use ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/create-kubernetes-persistent-storage"},"volumes and storage")," in Kubernetes, typically you must select the specific cloud provider in order to use it. For example, if you want to use Amazon EBS, you would need to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"aws")," cloud provider."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," If the cloud provider you want to use is not listed as an option, you will need to use the ",(0,a.kt)("a",{parentName:"p",href:"#cluster-config-file"},"config file option")," to configure the cloud provider. Please reference the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/cloud-providers/"},"RKE cloud provider documentation")," on how to configure the cloud provider.")),(0,a.kt)("p",null,"If you want to see all the configuration options for a cluster, please click ",(0,a.kt)("strong",{parentName:"p"},"Show advanced options")," on the bottom right. The advanced options are described below:"),(0,a.kt)("h3",{id:"private-registries"},"Private registries"),(0,a.kt)("p",null,"The cluster-level private registry configuration is only used for provisioning clusters."),(0,a.kt)("p",null,"There are two main ways to set up private registries in Rancher: by setting up the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"},"global default registry")," through the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab in the global view, and by setting up a private registry in the advanced options in the cluster-level settings. The global default registry is intended to be used for air-gapped setups, for registries that do not require credentials. The cluster-level private registry is intended to be used in all setups in which the private registry requires credentials."),(0,a.kt)("p",null,"If your private registry requires credentials, you need to pass the credentials to Rancher by editing the cluster options for each cluster that needs to pull images from the registry."),(0,a.kt)("p",null,"The private registry configuration option tells Rancher where to pull the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/system-images/"},"system images")," or ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"addon images")," that will be used in your cluster."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"System images")," are components needed to maintain the Kubernetes cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Add-ons")," are used to deploy several cluster components, including network plug-ins, the ingress controller, the DNS provider, or the metrics server.")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/"},"RKE documentation on private registries")," for more information on the private registry for components applied during the provisioning of the cluster."),(0,a.kt)("h3",{id:"authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),(0,a.kt)("p",null,"Authorized Cluster Endpoint can be used to directly access the Kubernetes API server, without requiring communication through Rancher."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The authorized cluster endpoint is available only in clusters that Rancher has provisioned ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/rancher-manager-architecture#tools-for-provisioning-kubernetes-clusters"},"using RKE"),". It is not available for clusters in hosted Kubernetes providers, such as Amazon's EKS. Additionally, the authorized cluster endpoint cannot be enabled for RKE clusters that are registered with Rancher; it is available only on Rancher-launched Kubernetes clusters.")),(0,a.kt)("p",null,"This is enabled by default in Rancher-launched Kubernetes clusters, using the IP of the node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role and the default Kubernetes self signed certificates."),(0,a.kt)("p",null,"For more detail on how an authorized cluster endpoint works and why it is used, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"architecture section.")),(0,a.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/rancher-manager-architecture/architecture-recommendations#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,a.kt)("h3",{id:"node-pools"},"Node Pools"),(0,a.kt)("p",null,"For information on using the Rancher UI to set up node pools in an RKE cluster, refer to ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this page.")),(0,a.kt)("h2",{id:"advanced-options"},"Advanced Options"),(0,a.kt)("p",null,"The following options are available when you create clusters in the Rancher UI. They are located under ",(0,a.kt)("strong",{parentName:"p"},"Advanced Options.")),(0,a.kt)("h3",{id:"nginx-ingress"},"NGINX Ingress"),(0,a.kt)("p",null,"Option to enable or disable the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/ingress-controllers/"},"NGINX ingress controller"),"."),(0,a.kt)("h3",{id:"node-port-range"},"Node Port Range"),(0,a.kt)("p",null,"Option to change the range of ports that can be used for ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service/#nodeport"},"NodePort services"),". Default is ",(0,a.kt)("inlineCode",{parentName:"p"},"30000-32767"),"."),(0,a.kt)("h3",{id:"metrics-server-monitoring"},"Metrics Server Monitoring"),(0,a.kt)("p",null,"Option to enable or disable ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/metrics-server/"},"Metrics Server"),"."),(0,a.kt)("h3",{id:"pod-security-policy-support"},"Pod Security Policy Support"),(0,a.kt)("p",null,"Option to enable and select a default ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"Pod Security Policy"),". You must have an existing Pod Security Policy configured before you can use this option."),(0,a.kt)("h3",{id:"docker-version-on-nodes"},"Docker Version on Nodes"),(0,a.kt)("p",null,"Option to require ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/installation-requirements"},"a supported Docker version")," installed on the cluster nodes that are added to the cluster, or to allow unsupported Docker versions installed on the cluster nodes."),(0,a.kt)("h3",{id:"docker-root-directory"},"Docker Root Directory"),(0,a.kt)("p",null,"If the nodes you are adding to the cluster have Docker configured with a non-default Docker Root Directory (default is ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/docker"),"), please specify the correct Docker Root Directory in this option."),(0,a.kt)("h3",{id:"recurring-etcd-snapshots"},"Recurring etcd Snapshots"),(0,a.kt)("p",null,"Option to enable or disable ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/etcd-snapshots/#etcd-recurring-snapshots"},"recurring etcd snapshots"),"."),(0,a.kt)("h3",{id:"agent-environment-variables"},"Agent Environment Variables"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v2.5.6")),(0,a.kt)("p",null,"Option to set environment variables for ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/about-rancher-agents"},"rancher agents"),". The environment variables can be set using key value pairs. If rancher agent requires use of proxy to communicate with Rancher server, ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," environment variables can be set using agent environment variables."),(0,a.kt)("h2",{id:"cluster-config-file"},"Cluster Config File"),(0,a.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"options available")," in an RKE installation, except for ",(0,a.kt)("inlineCode",{parentName:"p"},"system_images")," configuration. The ",(0,a.kt)("inlineCode",{parentName:"p"},"system_images")," option is not supported when creating a cluster with the Rancher UI or API."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To edit an RKE config file directly from the Rancher UI, click ",(0,a.kt)("strong",{parentName:"li"},"Edit as YAML"),"."),(0,a.kt)("li",{parentName:"ul"},"To read from an existing RKE file, click ",(0,a.kt)("strong",{parentName:"li"},"Read from a file"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(69871).Z,width:"2708",height:"258"})),(0,a.kt)("h3",{id:"config-file-structure-in-rancher-v230"},"Config File Structure in Rancher v2.3.0+"),(0,a.kt)("p",null,"RKE (Rancher Kubernetes Engine) is the tool that Rancher uses to provision Kubernetes clusters. Rancher's cluster config files used to have the same structure as ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE config files,")," but the structure changed so that in Rancher, RKE cluster config items are separated from non-RKE config items. Therefore, configuration for your cluster needs to be nested under the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive in the cluster config file. Cluster config files created with earlier versions of Rancher will need to be updated for this format. An example cluster config file is included below."),(0,a.kt)("details",{id:"v2.3.0-cluster-config-file"},(0,a.kt)("summary",null,"Example Cluster Config File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# Cluster Config\n#\ndocker_root_dir: /var/lib/docker\nenable_cluster_alerting: false\nenable_cluster_monitoring: false\nenable_network_policy: false\nlocal_cluster_auth_endpoint:\n  enabled: true\n#\n# Rancher Config\n#\nrancher_kubernetes_engine_config: # Your RKE template config goes here.\n  addon_job_timeout: 30\n  authentication:\n    strategy: x509\n  ignore_docker_version: true\n#\n# # Currently only nginx ingress provider is supported.\n# # To disable ingress controller, set `provider: none`\n# # To enable ingress on specific nodes, use the node_selector, eg:\n#    provider: nginx\n#    node_selector:\n#      app: ingress\n#\n  ingress:\n    provider: nginx\n  kubernetes_version: v1.15.3-rancher3-1\n  monitoring:\n    provider: metrics-server\n#\n#   If you are using calico on AWS\n#\n#    network:\n#      plugin: calico\n#      calico_network_provider:\n#        cloud_provider: aws\n#\n# # To specify flannel interface\n#\n#    network:\n#      plugin: flannel\n#      flannel_network_provider:\n#      iface: eth1\n#\n# # To specify flannel interface for canal plugin\n#\n#    network:\n#      plugin: canal\n#      canal_network_provider:\n#        iface: eth1\n#\n  network:\n    options:\n      flannel_backend_type: vxlan\n    plugin: canal\n#\n#    services:\n#      kube-api:\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kube-controller:\n#        cluster_cidr: 10.42.0.0/16\n#        service_cluster_ip_range: 10.43.0.0/16\n#      kubelet:\n#        cluster_domain: cluster.local\n#        cluster_dns_server: 10.43.0.10\n#\n  services:\n    etcd:\n      backup_config:\n        enabled: true\n        interval_hours: 12\n        retention: 6\n        safe_timestamp: false\n      creation: 12h\n      extra_args:\n        election-timeout: 5000\n        heartbeat-interval: 500\n      gid: 0\n      retention: 72h\n      snapshot: false\n      uid: 0\n    kube_api:\n      always_pull_images: false\n      pod_security_policy: false\n      service_node_port_range: 30000-32767\n  ssh_agent_auth: false\nwindows_prefered_cluster: false\n"))),(0,a.kt)("h3",{id:"default-dns-provider"},"Default DNS provider"),(0,a.kt)("p",null,"The table below indicates what DNS provider is deployed by default. See ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/dns/"},"RKE documentation on DNS provider")," for more information how to configure a different DNS provider. CoreDNS can only be used on Kubernetes v1.12.0 and higher."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rancher version"),(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes version"),(0,a.kt)("th",{parentName:"tr",align:null},"Default DNS provider"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v2.2.5 and higher"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.14.0 and higher"),(0,a.kt)("td",{parentName:"tr",align:null},"CoreDNS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v2.2.5 and higher"),(0,a.kt)("td",{parentName:"tr",align:null},"v1.13.x and lower"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-dns")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v2.2.4 and lower"),(0,a.kt)("td",{parentName:"tr",align:null},"any"),(0,a.kt)("td",{parentName:"tr",align:null},"kube-dns")))),(0,a.kt)("h1",{id:"rancher-specific-parameters"},"Rancher specific parameters"),(0,a.kt)("p",null,"Besides the RKE config file options, there are also Rancher specific settings that can be configured in the Config File (YAML):"),(0,a.kt)("h3",{id:"docker_root_dir"},"docker_root_dir"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#docker-root-directory"},"Docker Root Directory"),"."),(0,a.kt)("h3",{id:"enable_cluster_monitoring"},"enable_cluster_monitoring"),(0,a.kt)("p",null,"Option to enable or disable ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/monitoring-and-alerting"},"Cluster Monitoring"),"."),(0,a.kt)("h3",{id:"enable_network_policy"},"enable_network_policy"),(0,a.kt)("p",null,"Option to enable or disable Project Network Isolation."),(0,a.kt)("p",null,"Before Rancher v2.5.8, project network isolation is only available if you are using the Canal network plugin for RKE."),(0,a.kt)("p",null,"In v2.5.8+, project network isolation is available if you are using any RKE network plugin that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin."),(0,a.kt)("h3",{id:"local_cluster_auth_endpoint"},"local_cluster_auth_endpoint"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#authorized-cluster-endpoint"},"Authorized Cluster Endpoint"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'local_cluster_auth_endpoint:\n  enabled: true\n  fqdn: "FQDN"\n  ca_certs: "BASE64_CACERT"\n')),(0,a.kt)("h3",{id:"custom-network-plug-in"},"Custom Network Plug-in"),(0,a.kt)("p",null,"You can add a custom network plug-in by using the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/"},"user-defined add-on functionality")," of RKE. You define any add-on that you want deployed after the Kubernetes cluster is deployed."),(0,a.kt)("p",null,"There are two ways that you can specify an add-on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#in-line-add-ons"},"In-line Add-ons")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/#referencing-yaml-files-for-add-ons"},"Referencing YAML Files for Add-ons"))),(0,a.kt)("p",null,"For an example of how to configure a custom network plug-in by editing the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/network-plugins/custom-network-plugin-example"},"RKE documentation.")))}g.isMDXComponent=!0},69871:function(e,t,n){t.Z=n.p+"assets/images/cluster-options-yaml-994a3b9b3d53ed35101fa31517f64620.png"}}]);