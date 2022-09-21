"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59457],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=o,k=m["".concat(i,".").concat(c)]||m[c]||d[c]||n;return a?r.createElement(k,s(s({ref:t},u),{},{components:a})):r.createElement(k,s({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},59585:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),s=["components"],l={title:"Dynamically Provisioning New Storage in Rancher",weight:2},i=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",title:"Dynamically Provisioning New Storage in Rancher",description:"This section describes how to provision new persistent storage for workloads in Rancher.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"Dynamically Provisioning New Storage in Rancher",weight:2},sidebar:"tutorialSidebar",previous:{title:"Setting up Existing Storage",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage"},next:{title:"GlusterFS Volumes",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Add a storage class and configure it to use your storage",id:"1-add-a-storage-class-and-configure-it-to-use-your-storage",level:3},{value:"2. Add a persistent volume claim that refers to the storage class",id:"2-add-a-persistent-volume-claim-that-refers-to-the-storage-class",level:3},{value:"3. Mount the persistent volume claim as a volume for your workload",id:"3-mount-the-persistent-volume-claim-as-a-volume-for-your-workload",level:3}],m={toc:d};function c(e){var t=e.components,a=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section describes how to provision new persistent storage for workloads in Rancher."),(0,n.kt)("p",null,"This section assumes that you understand the Kubernetes concepts of storage classes and persistent volume claims. For more information, refer to the section on ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"how storage works.")),(0,n.kt)("p",null,"New storage is often provisioned by a cloud provider such as Amazon EBS. However, new storage doesn't have to be in the cloud."),(0,n.kt)("p",null,"If you have a pool of block storage, and you don't want to use a cloud provider, Longhorn could help you provide persistent storage to your Kubernetes cluster."),(0,n.kt)("p",null,"To provision new storage for your workloads, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#1-add-a-storage-class-and-configure-it-to-use-your-storage"},"Add a storage class and configure it to use your storage.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#2-add-a-persistent-volume-claim-that-refers-to-the-storage-class"},"Add a persistent volume claim that refers to the storage class.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"#3-mount-the-persistent-volume-claim-as-a-volume-for-your-workload"},"Mount the persistent volume claim as a volume for your workload."))),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To set up persistent storage, the ",(0,n.kt)("inlineCode",{parentName:"li"},"Manage Volumes")," ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-role-reference"},"role")," is required."),(0,n.kt)("li",{parentName:"ul"},"If you are provisioning storage for a cluster hosted in the cloud, the storage and cluster hosts must have the same cloud provider."),(0,n.kt)("li",{parentName:"ul"},"The cloud provider must be enabled. For details on enabling cloud providers, refer to ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"this page.")),(0,n.kt)("li",{parentName:"ul"},"Make sure your storage provisioner is available to be enabled.")),(0,n.kt)("p",null,"The following storage provisioners are enabled by default:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Plugin"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Amazon EBS Disk"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"aws-ebs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AzureFile"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"azure-file"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AzureDisk"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"azure-disk"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Google Persistent Disk"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"gce-pd"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Longhorn"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"flex-volume-longhorn"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VMware vSphere Volume"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"vsphere-volume"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Local"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"local"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Network File System"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"nfs"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"hostPath"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"host-path"))))),(0,n.kt)("p",null,"To use a storage provisioner that is not on the above list, you will need to use a ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"},"feature flag to enable unsupported storage drivers.")),(0,n.kt)("h3",{id:"1-add-a-storage-class-and-configure-it-to-use-your-storage"},"1. Add a storage class and configure it to use your storage"),(0,n.kt)("p",null,"These steps describe how to set up a storage class at the cluster level."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the cluster for which you want to dynamically provision persistent storage volumes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the cluster view, select ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage > Storage Classes"),". Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Add Class"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("inlineCode",{parentName:"p"},"Name")," for your storage class.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("inlineCode",{parentName:"p"},"Provisioner")," drop-down, select the service that you want to use to dynamically provision storage volumes. For example, if you have a Amazon EC2 cluster and you want to use cloud storage for it, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Amazon EBS Disk")," provisioner.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("inlineCode",{parentName:"p"},"Parameters")," section, fill out the information required for the service to dynamically provision storage volumes. Each provisioner requires different information to dynamically provision storage volumes. Consult the service's documentation for help on how to obtain this information.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The storage class is available to be consumed by a PVC."),(0,n.kt)("p",null,"For full information about the storage class parameters, refer to the official ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#parameters"},"Kubernetes documentation."),"."),(0,n.kt)("h3",{id:"2-add-a-persistent-volume-claim-that-refers-to-the-storage-class"},"2. Add a persistent volume claim that refers to the storage class"),(0,n.kt)("p",null,"These steps describe how to set up a PVC in the namespace where your stateful workload will be deployed."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the project containing a workload that you want to add a PVC to.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the main navigation bar, choose ",(0,n.kt)("strong",{parentName:"p"},"Resources > Workloads.")," (In versions before v2.3.0, choose ",(0,n.kt)("strong",{parentName:"p"},"Workloads")," on the main navigation bar.) Then select the ",(0,n.kt)("strong",{parentName:"p"},"Volumes")," tab. Click ",(0,n.kt)("strong",{parentName:"p"},"Add Volume"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Name")," for the volume claim.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the namespace of the volume claim.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Source")," field, click ",(0,n.kt)("strong",{parentName:"p"},"Use a Storage Class to provision a new persistent volume."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the ",(0,n.kt)("strong",{parentName:"p"},"Storage Class")," drop-down and select the storage class that you created.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a volume ",(0,n.kt)("strong",{parentName:"p"},"Capacity"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optional: Expand the ",(0,n.kt)("strong",{parentName:"p"},"Customize")," section and select the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"Access Modes")," that you want to use.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Your PVC is created. You can now attach it to any workload in the project."),(0,n.kt)("h3",{id:"3-mount-the-persistent-volume-claim-as-a-volume-for-your-workload"},"3. Mount the persistent volume claim as a volume for your workload"),(0,n.kt)("p",null,"Mount PVCs to workloads so that your applications can store their data."),(0,n.kt)("p",null,"You can mount PVCs during the deployment of a workload, or following workload creation."),(0,n.kt)("p",null,"To attach the PVC to a new workload,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a workload as you would in ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Workload Type"),", select ",(0,n.kt)("strong",{parentName:"li"},"Stateful set of\xa01\xa0pod"),"."),(0,n.kt)("li",{parentName:"ol"},"Expand the ",(0,n.kt)("strong",{parentName:"li"},"Volumes")," section and click ",(0,n.kt)("strong",{parentName:"li"},"Add Volume > Add a New Persistent Volume (Claim).")),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Persistent Volume Claim")," section, select the newly created persistent volume claim that is attached to the storage class."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Mount Point")," field, enter the path that the workload will use to access the volume."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Launch."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," When the workload is deployed, it will make a request for the specified amount of disk space to the Kubernetes master. If a PV with the specified resources is available when the workload is deployed, the Kubernetes master will bind the PV to the PVC."),(0,n.kt)("p",null,"To attach the PVC to an existing workload,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the project that has the workload that will have the PVC attached."),(0,n.kt)("li",{parentName:"ol"},"Go to the workload that will have persistent storage and click ",(0,n.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,n.kt)("li",{parentName:"ol"},"Expand the ",(0,n.kt)("strong",{parentName:"li"},"Volumes")," section and click ",(0,n.kt)("strong",{parentName:"li"},"Add Volume > Add a New Persistent Volume (Claim).")),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Persistent Volume Claim")," section, select the newly created persistent volume claim that is attached to the storage class."),(0,n.kt)("li",{parentName:"ol"},"In the ",(0,n.kt)("strong",{parentName:"li"},"Mount Point")," field, enter the path that the workload will use to access the volume."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The workload will make a request for the specified amount of disk space to the Kubernetes master. If a PV with the specified resources is available when the workload is deployed, the Kubernetes master will bind the PV to the PVC. If not, Rancher will provision new persistent storage."))}c.isMDXComponent=!0}}]);