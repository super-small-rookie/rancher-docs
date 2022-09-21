"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18911],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=n,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19641:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"Upgrading Cert-Manager with Helm 2",weight:2040,aliases:["/rancher/v2.0-v2.4/en/installation/options/upgrading-cert-manager/helm-2-instructions","/rancher/v2.0-v2.4/en/installation/resources/choosing-version/encryption/upgrading-cert-manager/helm-2-instructions","/rancher/v2.x/en/installation/resources/upgrading-cert-manager/helm-2-instructions/"]},s=void 0,c={unversionedId:"getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2",id:"version-2.0-2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2",title:"Upgrading Cert-Manager with Helm 2",description:"Rancher uses cert-manager to automatically generate and renew TLS certificates for HA deployments of Rancher. As of Fall 2019, three important changes to cert-manager are set to occur that you need to take action on if you have an HA deployment of Rancher:",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager-helm-2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"2022/9/21",frontMatter:{title:"Upgrading Cert-Manager with Helm 2",weight:2040,aliases:["/rancher/v2.0-v2.4/en/installation/options/upgrading-cert-manager/helm-2-instructions","/rancher/v2.0-v2.4/en/installation/resources/choosing-version/encryption/upgrading-cert-manager/helm-2-instructions","/rancher/v2.x/en/installation/resources/upgrading-cert-manager/helm-2-instructions/"]},sidebar:"tutorialSidebar",previous:{title:"Upgrading Cert-Manager",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},next:{title:"Updating the Rancher Certificate",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/update-rancher-certificate"}},p={},m=[{value:"Upgrade Cert-Manager Only",id:"upgrade-cert-manager-only",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Cert-Manager API change and data migration",id:"cert-manager-api-change-and-data-migration",level:2}],u={toc:m};function g(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher uses cert-manager to automatically generate and renew TLS certificates for HA deployments of Rancher. As of Fall 2019, three important changes to cert-manager are set to occur that you need to take action on if you have an HA deployment of Rancher:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.cert-manager.io/en/latest/tasks/upgrading/upgrading-0.7-0.8.html#upgrading-from-v0-7-to-v0-8"},"Cert-manager is deprecating and replacing the certificate.spec.acme.solvers field"),". This change has no exact deadline."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/"},"Cert-manager is deprecating ",(0,i.kt)("inlineCode",{parentName:"a"},"v1alpha1")," API and replacing its API group"))),(0,i.kt)("p",null,"To address these changes, this guide will do two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Document the procedure for upgrading cert-manager"),(0,i.kt)("li",{parentName:"ol"},"Explain the cert-manager API changes and link to cert-manager's offficial documentation for migrating your data")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important:"),"\nIf you are currently running the cert-manager whose version is older than v0.11, and want to upgrade both Rancher and cert-manager to a newer version, you need to reinstall both of them:")),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Take a one-time snapshot of your Kubernetes cluster running Rancher server"),(0,i.kt)("li",{parentName:"ol"},"Uninstall Rancher, cert-manager, and the CustomResourceDefinition for cert-manager"),(0,i.kt)("li",{parentName:"ol"},"Install the newer version of Rancher and cert-manager"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The reason is that when Helm upgrades Rancher, it will reject the upgrade and show error messages if the running Rancher app does not match the chart template used to install it. Because cert-manager changed its API group and we cannot modify released charts for Rancher, there will always be a mismatch on the cert-manager's API version, therefore the upgrade will be rejected.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For reinstalling Rancher with Helm, please check ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/upgrades"},"Option B: Reinstalling Rancher Chart")," under the upgrade Rancher section.")),(0,i.kt)("h2",{id:"upgrade-cert-manager-only"},"Upgrade Cert-Manager Only"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:"),"\nThese instructions are applied if you have no plan to upgrade Rancher.")),(0,i.kt)("p",null,"The namespace used in these instructions depends on the namespace cert-manager is currently installed in. If it is in kube-system use that in the instructions below. You can verify by running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods --all-namespaces")," and checking which namespace the cert-manager-","*"," pods are listed in. Do not change the namespace cert-manager is running in or this can cause issues."),(0,i.kt)("p",null,"In order to upgrade cert-manager, follow these instructions:"),(0,i.kt)("details",{id:"normal"},(0,i.kt)("summary",null,"Upgrading cert-manager with Internet access"),"1. Back up existing resources as a precaution",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```plain\nkubectl get -o yaml --all-namespaces issuer,clusterissuer,certificates > cert-manager-backup.yaml\n```\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the existing deployment"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"helm delete --purge cert-manager\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the CustomResourceDefinition resources separately"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.12/deploy/manifests/00-crds.yaml\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Jetstack Helm repository"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update your local Helm chart repository cache"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo update\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the new version of cert-manager"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"helm install --version 0.12.0 --name cert-manager --namespace kube-system jetstack/cert-manager\n"))))),(0,i.kt)("details",{id:"airgap"},(0,i.kt)("summary",null,"Upgrading cert-manager in an airgapped environment"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you can perform the upgrade, you must prepare your air gapped environment by adding the necessary container images to your private registry and downloading or rendering the required Kubernetes manifest files."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Follow the guide to ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/populate-private-registry"},"Prepare your Private Registry")," with the images needed for the upgrade.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From a system connected to the internet, add the cert-manager repo to Helm"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fetch the latest cert-manager chart available from the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.helm.sh/charts/jetstack/cert-manager"},"Helm chart repository"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch jetstack/cert-manager --version v0.12.0\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Render the cert manager template with the options you would like to use to install the chart. Remember to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"image.repository")," option to pull the image from your private registry. This will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," directory with the Kubernetes manifest files."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./cert-manager-v0.12.0.tgz --output-dir . \\\n--name cert-manager --namespace kube-system \\\n--set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller\n--set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook\n--set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the required CRD file for cert-manager"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"curl -L -o cert-manager/cert-manager-crd.yaml https://raw.githubusercontent.com/jetstack/cert-manager/release-0.12/deploy/manifests/00-crds.yaml\n")))),(0,i.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Back up existing resources as a precaution"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl get -o yaml --all-namespaces issuer,clusterissuer,certificates > cert-manager-backup.yaml\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the existing cert-manager installation"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n kube-system delete deployment,sa,clusterrole,clusterrolebinding -l 'app=cert-manager' -l 'chart=cert-manager-v0.5.2'\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install the CustomResourceDefinition resources separately"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager/cert-manager-crd.yaml\n")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install cert-manager"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n kube-system apply -R -f ./cert-manager\n"))))),(0,i.kt)("p",null,"Once you\u2019ve installed cert-manager, you can verify it is deployed correctly by checking the kube-system namespace for running pods:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get pods --namespace kube-system\n\nNAME                                            READY   STATUS      RESTARTS   AGE\ncert-manager-7cbdc48784-rpgnt                   1/1     Running     0          3m\ncert-manager-webhook-5b5dd6999-kst4x            1/1     Running     0          3m\ncert-manager-cainjector-3ba5cd2bcd-de332x       1/1     Running     0          3m\n")),(0,i.kt)("p",null,"If the \u2018webhook\u2019 pod (2nd line) is in a ContainerCreating state, it may still be waiting for the Secret to be mounted into the pod. Wait a couple of minutes for this to happen but if you experience problems, please check cert-manager's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cert-manager.io/en/latest/getting-started/troubleshooting.html"},"troubleshooting")," guide."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The above instructions ask you to add the disable-validation label to the kube-system namespace. Here are additional resources that explain why this is necessary:"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.cert-manager.io/en/latest/tasks/upgrading/upgrading-0.4-0.5.html?highlight=certmanager.k8s.io%2Fdisable-validation#disabling-resource-validation-on-the-cert-manager-namespace"},"Information on the disable-validation label")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.cert-manager.io/en/latest/getting-started/webhook.html"},"Information on webhook validation for certificates")))),(0,i.kt)("h2",{id:"cert-manager-api-change-and-data-migration"},"Cert-Manager API change and data migration"),(0,i.kt)("p",null,"Cert-manager has deprecated the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"certificate.spec.acme.solvers")," field and will drop support for it completely in an upcoming release."),(0,i.kt)("p",null,"Per the cert-manager documentation, a new format for configuring ACME certificate resources was introduced in v0.8. Specifically, the challenge solver configuration field was moved. Both the old format and new are supported as of v0.9, but support for the old format will be dropped in an upcoming release of cert-manager. The cert-manager documentation strongly recommends that after upgrading you update your ACME Issuer and Certificate resources to the new format."),(0,i.kt)("p",null,"Details about the change and migration instructions can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"cert-manager v0.7 to v0.8 upgrade instructions"),"."),(0,i.kt)("p",null,"The v0.11 release marks the removal of the v1alpha1 API that was used in previous versions of cert-manager, as well as our API group changing to be ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager.io")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"certmanager.k8s.io.")),(0,i.kt)("p",null,"We have also removed support for the old configuration format that was deprecated in the v0.8 release. This means you must transition to using the new solvers style configuration format for your ACME issuers before upgrading to v0.11. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"upgrading to v0.8 guide"),"."),(0,i.kt)("p",null,"Details about the change and migration instructions can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/"},"cert-manager v0.10 to v0.11 upgrade instructions"),"."),(0,i.kt)("p",null,"For information on upgrading from all other versions of cert-manager, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/"},"official documentation"),"."))}g.isMDXComponent=!0}}]);