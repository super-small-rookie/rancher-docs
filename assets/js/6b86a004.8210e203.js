"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[85928],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80783:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"Set up Infrastructure for a High Availability K3s Kubernetes Cluster",weight:1},l=void 0,u={unversionedId:"how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster",id:"version-2.0-2.4/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster",title:"Set up Infrastructure for a High Availability K3s Kubernetes Cluster",description:"This tutorial is intended to help you provision the underlying infrastructure for a Rancher management server.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster.md",sourceDirName:"how-to-guides/new-user-guides/infrastructure-setup",slug:"/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/infrastructure-setup/ha-k3s-kubernetes-cluster.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Set up Infrastructure for a High Availability K3s Kubernetes Cluster",weight:1},sidebar:"tutorialSidebar",previous:{title:"Don't have infrastructure for your Kubernetes cluster? Try one of these tutorials.",permalink:"/v2.0-v2.4/pages-for-subheaders/infrastructure-setup"},next:{title:"Set up Infrastructure for a High Availability RKE Kubernetes Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/ha-rke1-kubernetes-cluster"}},c={},p=[{value:"1. Set up Linux Nodes",id:"1-set-up-linux-nodes",level:3},{value:"2. Set up External Datastore",id:"2-set-up-external-datastore",level:3},{value:"3. Set up the Load Balancer",id:"3-set-up-the-load-balancer",level:3},{value:"4. Set up the DNS Record",id:"4-set-up-the-dns-record",level:3}],d={toc:p};function h(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial is intended to help you provision the underlying infrastructure for a Rancher management server."),(0,o.kt)("p",null,"The recommended infrastructure for the Rancher-only Kubernetes cluster differs depending on whether Rancher will be installed on a K3s Kubernetes cluster, an RKE Kubernetes cluster, or a single Docker container."),(0,o.kt)("p",null,"For more information about each installation option, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},"this page.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," These nodes must be in the same region. You may place these servers in separate availability zones (datacenter).")),(0,o.kt)("p",null,"To install the Rancher management server on a high-availability K3s cluster, we recommend setting up the following infrastructure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Two Linux nodes,")," typically virtual machines, in the infrastructure provider of your choice."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"An external database")," to store the cluster data. We recommend MySQL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A load balancer")," to direct traffic to the two nodes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A DNS record")," to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it.")),(0,o.kt)("h3",{id:"1-set-up-linux-nodes"},"1. Set up Linux Nodes"),(0,o.kt)("p",null,"Make sure that your nodes fulfill the general installation requirements for ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"OS, container runtime, hardware, and networking.")),(0,o.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,o.kt)("h3",{id:"2-set-up-external-datastore"},"2. Set up External Datastore"),(0,o.kt)("p",null,"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available options allow you to select a datastore that best fits your use case."),(0,o.kt)("p",null,"For a high-availability K3s installation, you will need to set a ",(0,o.kt)("a",{parentName:"p",href:"https://www.mysql.com/"},"MySQL")," external database. Rancher has been tested on K3s Kubernetes clusters using MySQL version 5.7 as the datastore."),(0,o.kt)("p",null,"When you install Kubernetes using the K3s installation script, you will pass in details for K3s to connect to the database."),(0,o.kt)("p",null,"For an example of one way to set up the MySQL database, refer to this ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds"},"tutorial")," for setting up MySQL on Amazon's RDS service."),(0,o.kt)("p",null,"For the complete list of options that are available for configuring a K3s cluster datastore, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/datastore/"},"K3s documentation.")),(0,o.kt)("h3",{id:"3-set-up-the-load-balancer"},"3. Set up the Load Balancer"),(0,o.kt)("p",null,"You will also need to set up a load balancer to direct traffic to the Rancher replica on both nodes. That will prevent an outage of any single node from taking down communications to the Rancher management server."),(0,o.kt)("p",null,"When Kubernetes gets set up in a later step, the K3s tool will deploy a Traefik Ingress controller. This controller will listen on ports 80 and 443 of the worker nodes, answering traffic destined for specific hostnames."),(0,o.kt)("p",null,"When Rancher is installed (also in a later step), the Rancher system creates an Ingress resource. That Ingress tells the Traefik Ingress controller to listen for traffic destined for the Rancher hostname. The Traefik Ingress controller, when receiving traffic destined for the Rancher hostname, will forward that traffic to the running Rancher pods in the cluster."),(0,o.kt)("p",null,"For your implementation, consider if you want or need to use a Layer-4 or Layer-7 load balancer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A layer-4 load balancer")," is the simpler of the two choices, in which you are forwarding TCP traffic to your nodes. We recommend configuring your load balancer as a Layer 4 balancer, forwarding traffic to ports TCP/80 and TCP/443 to the Rancher management cluster nodes. The Ingress controller on the cluster will redirect HTTP traffic to HTTPS and terminate SSL/TLS on port TCP/443. The Ingress controller will forward traffic to port TCP/80 to the Ingress pod in the Rancher deployment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A layer-7 load balancer")," is a bit more complicated but can offer features that you may want. For instance, a layer-7 load balancer is capable of handling TLS termination at the load balancer, as opposed to Rancher doing TLS termination itself. This can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with. If you decide to terminate the SSL/TLS traffic on a layer-7 load balancer, you will need to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"--set tls=external")," option when installing Rancher in a later step. For more information, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"Rancher Helm chart options."))),(0,o.kt)("p",null,"For an example showing how to set up an NGINX load balancer, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")),(0,o.kt)("p",null,"For a how-to guide for setting up an Amazon ELB Network Load Balancer, refer to ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:"),"\nDo not use this load balancer (i.e, the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications.")),(0,o.kt)("h3",{id:"4-set-up-the-dns-record"},"4. Set up the DNS Record"),(0,o.kt)("p",null,"Once you have set up your load balancer, you will need to create a DNS record to send traffic to this load balancer."),(0,o.kt)("p",null,"Depending on your environment, this may be an A record pointing to the load balancer IP, or it may be a CNAME pointing to the load balancer hostname. In either case, make sure this record is the hostname that you intend Rancher to respond on."),(0,o.kt)("p",null,"You will need to specify this hostname in a later step when you install Rancher, and it is not possible to change it later. Make sure that your decision is a final one."),(0,o.kt)("p",null,"For a how-to guide for setting up a DNS record to route domain traffic to an Amazon ELB load balancer, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"official AWS documentation.")))}h.isMDXComponent=!0}}]);