"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79502],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79592:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Setting up Nodes in Amazon EC2",weight:3},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",id:"how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",title:"Setting up Nodes in Amazon EC2",description:"In this tutorial, you will learn one way to set up Linux nodes for the Rancher management server. These nodes will fulfill the node requirements for OS, Docker, hardware, and networking.",source:"@site/docs/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2.md",sourceDirName:"how-to-guides/new-user-guides/infrastructure-setup",slug:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",permalink:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Setting up Nodes in Amazon EC2",weight:3},sidebar:"tutorialSidebar",previous:{title:"Set up Infrastructure for a High Availability RKE2 Kubernetes Cluster",permalink:"/how-to-guides/new-user-guides/infrastructure-setup/ha-rke2-kubernetes-cluster"},next:{title:"Setting up a MySQL Database in Amazon RDS",permalink:"/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds"}},u={},p=[{value:"1. Optional Preparation",id:"1-optional-preparation",level:3},{value:"2. Provision Instances",id:"2-provision-instances",level:3},{value:"3. Install Docker and Create User for RKE Kubernetes Cluster Nodes",id:"3-install-docker-and-create-user-for-rke-kubernetes-cluster-nodes",level:3},{value:"Next Steps for RKE Kubernetes Cluster Nodes",id:"next-steps-for-rke-kubernetes-cluster-nodes",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, you will learn one way to set up Linux nodes for the Rancher management server. These nodes will fulfill the node requirements for ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"OS, Docker, hardware, and networking.")),(0,o.kt)("p",null,"If the Rancher server will be installed on an RKE Kubernetes cluster, you should provision three instances."),(0,o.kt)("p",null,"If the Rancher server will be installed on a K3s Kubernetes cluster, you only need to provision two instances."),(0,o.kt)("p",null,"If the Rancher server is installed in a single Docker container, you only need one instance."),(0,o.kt)("h3",{id:"1-optional-preparation"},"1. Optional Preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Create IAM role:")," To allow Rancher to manipulate AWS resources, such as provisioning new storage or new nodes, you will need to configure Amazon as a cloud provider. There are several things you'll need to do to set up the cloud provider on EC2, but part of this process is setting up an IAM role for the Rancher server nodes. For the full details on setting up the cloud provider, refer to this ",(0,o.kt)("a",{parentName:"li",href:"/pages-for-subheaders/set-up-cloud-providers"},"page.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Create security group:")," We also recommend setting up a security group for the Rancher nodes that complies with the ",(0,o.kt)("a",{parentName:"li",href:"/pages-for-subheaders/installation-requirements#port-requirements"},"port requirements for Rancher nodes."))),(0,o.kt)("h3",{id:"2-provision-instances"},"2. Provision Instances"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into the ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ec2/"},"Amazon AWS EC2 Console")," to get started. Make sure to take note of the ",(0,o.kt)("strong",{parentName:"li"},"Region")," where your EC2 instances (Linux nodes) are created, because all of the infrastructure for the Rancher management server should be in the same region."),(0,o.kt)("li",{parentName:"ol"},"In the left panel, click ",(0,o.kt)("strong",{parentName:"li"},"Instances"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Launch Instance"),"."),(0,o.kt)("li",{parentName:"ol"},"In the section called ",(0,o.kt)("strong",{parentName:"li"},"Step 1: Choose an Amazon Machine Image (AMI),")," we will use Ubuntu 18.04 as the Linux OS, using ",(0,o.kt)("inlineCode",{parentName:"li"},"ami-0d1cd67c26f5fca19 (64-bit x86)"),". Go to the Ubuntu AMI and click ",(0,o.kt)("strong",{parentName:"li"},"Select"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Step 2: Choose an Instance Type")," section, select the ",(0,o.kt)("inlineCode",{parentName:"li"},"t2.medium")," type."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next: Configure Instance Details"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Number of instances")," field, enter the number of instances. A high-availability K3s cluster requires only two instances, while a high-availability RKE cluster requires three instances."),(0,o.kt)("li",{parentName:"ol"},"Optional: If you created an IAM role for Rancher to manipulate AWS resources, select the new IAM role in the ",(0,o.kt)("strong",{parentName:"li"},"IAM role")," field."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Next: Add Storage,")," ",(0,o.kt)("strong",{parentName:"li"},"Next: Add Tags,")," and ",(0,o.kt)("strong",{parentName:"li"},"Next: Configure Security Group"),"."),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Step 6: Configure Security Group,")," select a security group that complies with the ",(0,o.kt)("a",{parentName:"li",href:"/pages-for-subheaders/installation-requirements#port-requirements"},"port requirements")," for Rancher nodes."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Review and Launch"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Launch"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose a new or existing key pair that you will use to connect to your instance later. If you are using an existing key pair, make sure you already have access to the private key."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Launch Instances"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You have created Rancher nodes that satisfy the requirements for OS, hardware, and networking."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the nodes are being used for an RKE Kubernetes cluster, install Docker on each node in the next step. For a K3s Kubernetes cluster, the nodes are now ready to install K3s."))),(0,o.kt)("h3",{id:"3-install-docker-and-create-user-for-rke-kubernetes-cluster-nodes"},"3. Install Docker and Create User for RKE Kubernetes Cluster Nodes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ec2/"},"AWS EC2 console,")," click ",(0,o.kt)("strong",{parentName:"li"},"Instances")," in the left panel."),(0,o.kt)("li",{parentName:"ol"},"Go to the instance that you want to install Docker on. Select the instance and click ",(0,o.kt)("strong",{parentName:"li"},"Actions > Connect"),"."),(0,o.kt)("li",{parentName:"ol"},"Connect to the instance by following the instructions on the screen that appears. Copy the Public DNS of the instance. An example command to SSH into the instance is as follows:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo ssh -i [path-to-private-key] ubuntu@[public-DNS-of-instance]\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run the following command on the instance to install Docker with one of Rancher's installation scripts:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl https://releases.rancher.com/install-docker/18.09.sh | sh\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When you are connected to the instance, run the following command on the instance to create a user:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo usermod -aG docker ubuntu\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Repeat these steps so that Docker is installed on each node that will eventually run the Rancher management server.")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To find out whether a script is available for installing a certain Docker version, refer to this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/install-docker"},"GitHub repository,")," which contains all of Rancher\u2019s Docker installation scripts."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You have set up Rancher server nodes that fulfill all the node requirements for OS, Docker, hardware and networking."),(0,o.kt)("h3",{id:"next-steps-for-rke-kubernetes-cluster-nodes"},"Next Steps for RKE Kubernetes Cluster Nodes"),(0,o.kt)("p",null,"If you are going to install an RKE cluster on the new nodes, take note of the ",(0,o.kt)("strong",{parentName:"p"},"IPv4 Public IP")," and ",(0,o.kt)("strong",{parentName:"p"},"Private IP")," of each node. This information can be found on the ",(0,o.kt)("strong",{parentName:"p"},"Description")," tab for each node after it is created. The public and private IP will be used to populate the ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"internal_address")," of each node in the RKE cluster configuration file, ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),"."),(0,o.kt)("p",null,"RKE will also need access to the private key to connect to each node. Therefore, you might want to take note of the path to your private keys to connect to the nodes, which can also be included in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," under the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," directive for each node."))}h.isMDXComponent=!0}}]);