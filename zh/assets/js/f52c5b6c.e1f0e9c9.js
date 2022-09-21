"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84093],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,k=d["".concat(i,".").concat(p)]||d[p]||h[p]||c;return n?r.createElement(k,a(a({ref:t},l),{},{components:n})):r.createElement(k,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],s={title:"Access a Cluster with Kubectl and kubeconfig",description:"Learn how you can access and manage your Kubernetes clusters using kubectl with kubectl Shell or with kubectl CLI and kubeconfig file. A kubeconfig file is used to configure access to Kubernetes. When you create a cluster with Rancher, it automatically creates a kubeconfig for your cluster.",weight:2010,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/kubectl/","/rancher/v2.0-v2.4/en/cluster-admin/kubectl","/rancher/v2.0-v2.4/en/concepts/clusters/kubeconfig-files/","/rancher/v2.0-v2.4/en/k8s-in-rancher/kubeconfig/","/rancher/2.x/en/cluster-admin/kubeconfig"]},i=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",title:"Access a Cluster with Kubectl and kubeconfig",description:"Learn how you can access and manage your Kubernetes clusters using kubectl with kubectl Shell or with kubectl CLI and kubeconfig file. A kubeconfig file is used to configure access to Kubernetes. When you create a cluster with Rancher, it automatically creates a kubeconfig for your cluster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/access-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"Access a Cluster with Kubectl and kubeconfig",description:"Learn how you can access and manage your Kubernetes clusters using kubectl with kubectl Shell or with kubectl CLI and kubeconfig file. A kubeconfig file is used to configure access to Kubernetes. When you create a cluster with Rancher, it automatically creates a kubeconfig for your cluster.",weight:2010,aliases:["/rancher/v2.0-v2.4/en/k8s-in-rancher/kubectl/","/rancher/v2.0-v2.4/en/cluster-admin/kubectl","/rancher/v2.0-v2.4/en/concepts/clusters/kubeconfig-files/","/rancher/v2.0-v2.4/en/k8s-in-rancher/kubeconfig/","/rancher/2.x/en/cluster-admin/kubeconfig"]},sidebar:"tutorialSidebar",previous:{title:"Cluster Access",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/access-clusters"},next:{title:"How the Authorized Cluster Endpoint Works",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"}},l={},h=[{value:"Accessing Clusters with kubectl Shell in the Rancher UI",id:"accessing-clusters-with-kubectl-shell-in-the-rancher-ui",level:3},{value:"Accessing Clusters with kubectl from Your Workstation",id:"accessing-clusters-with-kubectl-from-your-workstation",level:3},{value:"Note on Resources Created Using kubectl",id:"note-on-resources-created-using-kubectl",level:3},{value:"Authenticating Directly with a Downstream Cluster",id:"authenticating-directly-with-a-downstream-cluster",level:2},{value:"Connecting Directly to Clusters with FQDN Defined",id:"connecting-directly-to-clusters-with-fqdn-defined",level:3},{value:"Connecting Directly to Clusters without FQDN Defined",id:"connecting-directly-to-clusters-without-fqdn-defined",level:3}],d={toc:h};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This section describes how to manipulate your downstream Kubernetes cluster with kubectl from the Rancher UI or from your workstation."),(0,c.kt)("p",null,"For more information on using kubectl, see ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},"Kubernetes Documentation: Overview of kubectl"),"."),(0,c.kt)("h3",{id:"accessing-clusters-with-kubectl-shell-in-the-rancher-ui"},"Accessing Clusters with kubectl Shell in the Rancher UI"),(0,c.kt)("p",null,"You can access and manage your clusters by logging into Rancher and opening the kubectl shell in the UI. No further configuration necessary."),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"From the ",(0,c.kt)("strong",{parentName:"p"},"Global")," view, open the cluster that you want to access with kubectl.")),(0,c.kt)("li",{parentName:"ol"},(0,c.kt)("p",{parentName:"li"},"Click ",(0,c.kt)("strong",{parentName:"p"},"Launch kubectl"),". Use the window that opens to interact with your Kubernetes cluster."))),(0,c.kt)("h3",{id:"accessing-clusters-with-kubectl-from-your-workstation"},"Accessing Clusters with kubectl from Your Workstation"),(0,c.kt)("p",null,"This section describes how to download your cluster's kubeconfig file, launch kubectl from your workstation, and access your downstream cluster."),(0,c.kt)("p",null,"This alternative method of accessing the cluster allows you to authenticate with Rancher and manage your cluster without using the Rancher UI."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Prerequisites:")," These instructions assume that you have already created a Kubernetes cluster, and that kubectl is installed on your workstation. For help installing kubectl, refer to the official ",(0,c.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"Kubernetes documentation."))),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"Log into Rancher. From the ",(0,c.kt)("strong",{parentName:"li"},"Global")," view, open the cluster that you want to access with kubectl."),(0,c.kt)("li",{parentName:"ol"},"Click ",(0,c.kt)("strong",{parentName:"li"},"Kubeconfig File"),"."),(0,c.kt)("li",{parentName:"ol"},"Copy the contents displayed to your clipboard."),(0,c.kt)("li",{parentName:"ol"},"Paste the contents into a new file on your local computer. Move the file to ",(0,c.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),". Note: The default location that kubectl uses for the kubeconfig file is ",(0,c.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),", but you can use any directory and specify it using the ",(0,c.kt)("inlineCode",{parentName:"li"},"--kubeconfig")," flag, as in this command:",(0,c.kt)("pre",{parentName:"li"},(0,c.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config get pods\n"))),(0,c.kt)("li",{parentName:"ol"},"From your workstation, launch kubectl. Use it to interact with your kubernetes cluster.")),(0,c.kt)("h3",{id:"note-on-resources-created-using-kubectl"},"Note on Resources Created Using kubectl"),(0,c.kt)("p",null,"Rancher will discover and show resources created by ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl"),". However, these resources might not have all the necessary annotations on discovery. If an operation (for instance, scaling the workload) is done to the resource using the Rancher UI/API, this may trigger recreation of the resources due to the missing annotations. This should only happen the first time an operation is done to the discovered resource."),(0,c.kt)("h2",{id:"authenticating-directly-with-a-downstream-cluster"},"Authenticating Directly with a Downstream Cluster"),(0,c.kt)("p",null,"This section intended to help you set up an alternative method to access an ",(0,c.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"RKE cluster.")),(0,c.kt)("p",null,"This method is only available for RKE clusters that have the ",(0,c.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"authorized cluster endpoint")," enabled. When Rancher creates this RKE cluster, it generates a kubeconfig file that includes additional kubectl context(s) for accessing your cluster. This additional context allows you to use kubectl to authenticate with the downstream cluster without authenticating through Rancher. For a longer explanation of how the authorized cluster endpoint works, refer to ",(0,c.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"this page.")),(0,c.kt)("p",null,"We recommend that as a best practice, you should set up this method to access your RKE cluster, so that just in case you can\u2019t connect to Rancher, you can still access the cluster."),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},(0,c.kt)("strong",{parentName:"p"},"Prerequisites:")," The following steps assume that you have created a Kubernetes cluster and followed the steps to ",(0,c.kt)("a",{parentName:"p",href:"#accessing-clusters-with-kubectl-from-your-workstation"},"connect to your cluster with kubectl from your workstation."))),(0,c.kt)("p",null,"To find the name of the context(s) in your downloaded kubeconfig file, run:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl config get-contexts --kubeconfig /custom/path/kube.config\nCURRENT   NAME                        CLUSTER                     AUTHINFO     NAMESPACE\n*         my-cluster                  my-cluster                  user-46tmn\n          my-cluster-controlplane-1   my-cluster-controlplane-1   user-46tmn\n")),(0,c.kt)("p",null,"In this example, when you use ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," with the first context, ",(0,c.kt)("inlineCode",{parentName:"p"},"my-cluster"),", you will be authenticated through the Rancher server."),(0,c.kt)("p",null,"With the second context, ",(0,c.kt)("inlineCode",{parentName:"p"},"my-cluster-controlplane-1"),", you would authenticate with the authorized cluster endpoint, communicating with an downstream RKE cluster directly."),(0,c.kt)("p",null,"We recommend using a load balancer with the authorized cluster endpoint. For details, refer to the ",(0,c.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/rancher-manager-architecture/architecture-recommendations#architecture-for-an-authorized-cluster-endpoint"},"recommended architecture section.")),(0,c.kt)("p",null,"Now that you have the name of the context needed to authenticate directly with the cluster, you can pass the name of the context in as an option when running kubectl commands. The commands will differ depending on whether your cluster has an FQDN defined. Examples are provided in the sections below."),(0,c.kt)("p",null,"When ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," works normally, it confirms that you can access your cluster while bypassing Rancher's authentication proxy."),(0,c.kt)("h3",{id:"connecting-directly-to-clusters-with-fqdn-defined"},"Connecting Directly to Clusters with FQDN Defined"),(0,c.kt)("p",null,"If an FQDN is defined for the cluster, a single context referencing the FQDN will be created. The context will be named ",(0,c.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>-fqdn"),". When you want to use ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," to access this cluster without Rancher, you will need to use this context."),(0,c.kt)("p",null,"Assuming the kubeconfig file is located at ",(0,c.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --context <CLUSTER_NAME>-fqdn get nodes\n")),(0,c.kt)("p",null,"Directly referencing the location of the kubeconfig file:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config --context <CLUSTER_NAME>-fqdn get pods\n")),(0,c.kt)("h3",{id:"connecting-directly-to-clusters-without-fqdn-defined"},"Connecting Directly to Clusters without FQDN Defined"),(0,c.kt)("p",null,"If there is no FQDN defined for the cluster, extra contexts will be created referencing the IP address of each node in the control plane. Each context will be named ",(0,c.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>-<NODE_NAME>"),". When you want to use ",(0,c.kt)("inlineCode",{parentName:"p"},"kubectl")," to access this cluster without Rancher, you will need to use this context."),(0,c.kt)("p",null,"Assuming the kubeconfig file is located at ",(0,c.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --context <CLUSTER_NAME>-<NODE_NAME> get nodes\n")),(0,c.kt)("p",null,"Directly referencing the location of the kubeconfig file:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"kubectl --kubeconfig /custom/path/kube.config --context <CLUSTER_NAME>-<NODE_NAME> get pods\n")))}p.isMDXComponent=!0}}]);