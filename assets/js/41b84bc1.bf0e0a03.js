"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87293],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),h=l(r),p=o,m=h["".concat(i,".").concat(p)]||h[p]||d[p]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},65272:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],u={title:"Networking Requirements for Host Gateway (L2bridge)",weight:1e3},i=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway",title:"Networking Requirements for Host Gateway (L2bridge)",description:"This section describes how to configure custom Windows clusters that are using Host Gateway (L2bridge) mode.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/network-requirements-for-host-gateway.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Networking Requirements for Host Gateway (L2bridge)",weight:1e3},sidebar:"tutorialSidebar",previous:{title:"Windows and Linux Cluster Feature Parity",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/windows-linux-cluster-feature-parity"},next:{title:"RKE1 to RKE2 Windows Migration Guidance",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-windows-clusters/workload-migration-guidance"}},c={},d=[{value:"Disabling Private IP Address Checks",id:"disabling-private-ip-address-checks",level:3},{value:"Cloud-hosted VM Routes Configuration",id:"cloud-hosted-vm-routes-configuration",level:3}],h={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to configure custom Windows clusters that are using ",(0,a.kt)("em",{parentName:"p"},"Host Gateway (L2bridge)")," mode."),(0,a.kt)("h3",{id:"disabling-private-ip-address-checks"},"Disabling Private IP Address Checks"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("em",{parentName:"p"},"Host Gateway (L2bridge)")," mode and hosting your nodes on any of the cloud services listed below, you must disable the private IP address checks for both your Linux or Windows hosts on startup. To disable this check for each node, follow the directions provided by each service below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"Directions to disable private IP address checks"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Amazon EC2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_NAT_Instance.html#EIP_Disable_SrcDestCheck"},"Disabling Source/Destination Checks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Google GCE"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://cloud.google.com/vpc/docs/using-routes#canipforward"},"Enabling IP Forwarding for Instances")," (By default, a VM cannot forward a packet originated by another VM)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Azure VM"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-network-interface#enable-or-disable-ip-forwarding"},"Enable or Disable IP Forwarding"))))),(0,a.kt)("h3",{id:"cloud-hosted-vm-routes-configuration"},"Cloud-hosted VM Routes Configuration"),(0,a.kt)("p",null,"If you are using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md#host-gw"},(0,a.kt)("strong",{parentName:"a"},"Host Gateway (L2bridge)"))," backend of Flannel, all containers on the same node belong to a private subnet, and traffic routes from a subnet on one node to a subnet on another node through the host network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When worker nodes are provisioned on AWS, virtualization clusters, or bare metal servers, make sure they belong to the same layer 2 subnet. If the nodes don't belong to the same layer 2 subnet, ",(0,a.kt)("inlineCode",{parentName:"p"},"host-gw")," networking will not work.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When worker nodes are provisioned on GCE or Azure, they are not on the same layer 2 subnet. Nodes on GCE and Azure belong to a routable layer 3 network. Follow the instructions below to configure GCE and Azure so that the cloud network knows how to route the host subnets on each node."))),(0,a.kt)("p",null,"To configure host subnet routing on GCE or Azure, first run the following command to find out the host subnets on each worker node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o custom-columns=nodeName:.metadata.name,nodeIP:status.addresses[0].address,routeDestination:.spec.podCIDR\n")),(0,a.kt)("p",null,"Then follow the instructions for each cloud provider to configure routing rules for each node:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"Instructions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Google GCE"),(0,a.kt)("td",{parentName:"tr",align:null},"For GCE, add a static route for each node: ",(0,a.kt)("a",{parentName:"td",href:"https://cloud.google.com/vpc/docs/using-routes#addingroute"},"Adding a Static Route"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Azure VM"),(0,a.kt)("td",{parentName:"tr",align:null},"For Azure, create a routing table: ",(0,a.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-networks-udr-overview#user-defined"},"Custom Routes: User-defined"),".")))))}p.isMDXComponent=!0}}]);