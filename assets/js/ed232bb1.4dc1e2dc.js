"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93857],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},16810:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"Contributing to Rancher",weight:27,aliases:["/rancher/v2.5/en/faq/contributing/","/rancher/v2.x/en/contributing/"]},s=void 0,p={unversionedId:"contribute-to-rancher",id:"version-2.5/contribute-to-rancher",title:"Contributing to Rancher",description:"This section explains the repositories used for Rancher, how to build the repositories, and what information to include when you file an issue.",source:"@site/versioned_docs/version-2.5/contribute-to-rancher.md",sourceDirName:".",slug:"/contribute-to-rancher",permalink:"/v2.5/contribute-to-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/contribute-to-rancher.md",tags:[],version:"2.5",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Contributing to Rancher",weight:27,aliases:["/rancher/v2.5/en/faq/contributing/","/rancher/v2.x/en/contributing/"]},sidebar:"tutorialSidebar",previous:{title:"Rotation of Expired Webhook Certificates",permalink:"/v2.5/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"}},u={},c=[{value:"Checklist for Filing Issues",id:"checklist-for-filing-issues",level:3}],h={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section explains the repositories used for Rancher, how to build the repositories, and what information to include when you file an issue."),(0,i.kt)("p",null,"For more detailed information on how to contribute to the development of Rancher projects, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/wiki"},"Rancher Developer Wiki"),". The wiki has resources on many topics, including the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to set up the Rancher development environment and run tests"),(0,i.kt)("li",{parentName:"ul"},"The typical flow of an issue through the development lifecycle"),(0,i.kt)("li",{parentName:"ul"},"Coding guidelines and development best practices"),(0,i.kt)("li",{parentName:"ul"},"Debugging and troubleshooting"),(0,i.kt)("li",{parentName:"ul"},"Developing the Rancher API")),(0,i.kt)("p",null,"On the Rancher Users Slack, the channel for developers is ",(0,i.kt)("strong",{parentName:"p"},"#developer"),"."),(0,i.kt)("h1",{id:"repositories"},"Repositories"),(0,i.kt)("p",null,"All of repositories are located within our main GitHub organization. There are many repositories used for Rancher, but we'll provide descriptions of some of the main ones used in Rancher."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Repository"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rancher"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher"},"https://github.com/rancher/rancher")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the main source code for Rancher 2.x.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Types"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/types"},"https://github.com/rancher/types")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the repository that has all the API types for Rancher 2.x.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"API Framework"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/norman"},"https://github.com/rancher/norman")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is an API framework for building Rancher style APIs backed by Kubernetes Custom Resources.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User Interface"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/ui"},"https://github.com/rancher/ui")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of the UI.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(Rancher) Docker Machine"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/machine"},"https://github.com/rancher/machine")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of the Docker Machine binary used when using Node Drivers. This is a fork of the ",(0,i.kt)("inlineCode",{parentName:"td"},"docker/machine")," repository.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"machine-package"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/machine-package"},"https://github.com/rancher/machine-package")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is used to build the Rancher Docker Machine binary.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kontainer-engine"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/kontainer-engine"},"https://github.com/rancher/kontainer-engine")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of kontainer-engine, the tool to provision hosted Kubernetes clusters.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RKE repository"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/rke"},"https://github.com/rancher/rke")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of Rancher Kubernetes Engine, the tool to provision Kubernetes clusters on any machine.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CLI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/cli"},"https://github.com/rancher/cli")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source code for the Rancher CLI used in Rancher 2.x.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"(Rancher) Helm repository"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/helm"},"https://github.com/rancher/helm")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of the packaged Helm binary. This is a fork of the ",(0,i.kt)("inlineCode",{parentName:"td"},"helm/helm")," repository.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Telemetry repository"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/telemetry"},"https://github.com/rancher/telemetry")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source for the Telemetry binary.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"loglevel repository"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rancher/loglevel"},"https://github.com/rancher/loglevel")),(0,i.kt)("td",{parentName:"tr",align:null},"This repository is the source of the loglevel binary, used to dynamically change log levels.")))),(0,i.kt)("p",null,"To see all libraries/projects used in Rancher, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/master/go.mod"},(0,i.kt)("inlineCode",{parentName:"a"},"go.mod")," file")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," repository."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Rancher diagram",src:r(47071).Z,width:"1172",height:"1117"}),(0,i.kt)("br",null)),(0,i.kt)("sup",null,"Rancher components used for provisioning/managing Kubernetes clusters."),(0,i.kt)("h1",{id:"building"},"Building"),(0,i.kt)("p",null,"Every repository should have a Makefile and can be built using the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," command. The ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," targets are based on the scripts in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/scripts")," directory in the repository, and each target will use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/dapper"},"Dapper")," to run the target in an isolated environment. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile.dapper")," will be used for this process, and includes all the necessary build tooling needed."),(0,i.kt)("p",null,"The default target is ",(0,i.kt)("inlineCode",{parentName:"p"},"ci"),", and will run ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/validate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/build"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/test")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"./scripts/package"),". The resulting binaries of the build will be in ",(0,i.kt)("inlineCode",{parentName:"p"},"./build/bin")," and are usually also packaged in a Docker image."),(0,i.kt)("h1",{id:"bugs-issues-or-questions"},"Bugs, Issues or Questions"),(0,i.kt)("p",null,"If you find any bugs or are having any trouble, please search the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues"},"reported issue")," as someone may have experienced the same issue or we are actively working on a solution."),(0,i.kt)("p",null,"If you can't find anything related to your issue, contact us by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/new"},"filing an issue"),". Though we have many repositories related to Rancher, we want the bugs filed in the Rancher repository so we won't miss them! If you want to ask a question or ask fellow users about an use case, we suggest creating a post on the ",(0,i.kt)("a",{parentName:"p",href:"https://forums.rancher.com"},"Rancher Forums"),"."),(0,i.kt)("h3",{id:"checklist-for-filing-issues"},"Checklist for Filing Issues"),(0,i.kt)("p",null,"Please follow this checklist when filing an issue which will helps us investigate and fix the issue. More info means more data we can use to determine what is causing the issue or what might be related to the issue."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," For large amounts of data, please use ",(0,i.kt)("a",{parentName:"p",href:"https://gist.github.com/"},"GitHub Gist")," or similar and link the created resource in the issue.\n",(0,i.kt)("strong",{parentName:"p"},"Important:")," Please remove any sensitive data as it will be publicly viewable.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resources:")," Provide as much as detail as possible on the used resources. As the source of the issue can be many things, including as much of detail as possible helps to determine the root cause. See some examples below:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hosts:")," What specifications does the host have, like CPU/memory/disk, what cloud does it happen on, what Amazon Machine Image are you using, what DigitalOcean droplet are you using, what image are you provisioning that we can rebuild or use when we try to reproduce"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Operating System:")," What operating system are you using? Providing specifics helps here like the output of ",(0,i.kt)("inlineCode",{parentName:"li"},"cat /etc/os-release")," for exact OS release and ",(0,i.kt)("inlineCode",{parentName:"li"},"uname -r")," for exact kernel used"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docker:")," What Docker version are you using, how did you install it? Most of the details of Docker can be found by supplying output of ",(0,i.kt)("inlineCode",{parentName:"li"},"docker version")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"docker info")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Environment:")," Are you in a proxy environment, are you using recognized CA/self signed certificates, are you using an external loadbalancer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rancher:")," What version of Rancher are you using, this can be found on the bottom left of the UI or be retrieved from the image tag you are running on the host"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Clusters:")," What kind of cluster did you create, how did you create it, what did you specify when you were creating it"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Steps to reproduce the issue:")," Provide as much detail on how you got into the reported situation. This helps the person to reproduce the situation you are in."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Provide manual steps or automation scripts used to get from a newly created setup to the situation you reported."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Logs:")," Provide data/logs from the used resources."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Rancher"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Docker install"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"docker logs \\\n--timestamps \\\n$(docker ps | grep -E \"rancher/rancher:|rancher/rancher \" | awk '{ print $1 }')\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes install using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Make sure you configured the correct kubeconfig (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml")," if Rancher is installed on a Kubernetes cluster) or are using the embedded kubectl via the UI.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system \\\nlogs \\\n-l app=rancher \\\n--timestamps=true\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Docker install using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," on each of the nodes in the RKE cluster"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"docker logs \\\n--timestamps \\\n$(docker ps | grep -E \"rancher/rancher@|rancher_rancher\" | awk '{ print $1 }')\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kubernetes Install with RKE Add-On"),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Make sure you configured the correct kubeconfig (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml")," if the Rancher server is installed on a Kubernetes cluster) or are using the embedded kubectl via the UI.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"kubectl -n cattle-system \\\nlogs \\\n--timestamps=true \\\n-f $(kubectl --kubeconfig $KUBECONFIG get pods -n cattle-system -o json | jq -r '.items[] | select(.spec.containers[].name=\"cattle-server\") | .metadata.name')\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"System logging (these might not all exist, depending on operating system)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/messages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/syslog")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/kern.log")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Docker daemon logging (these might not all exist, depending on operating system)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/var/log/docker.log")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Metrics:")," If you are experiencing performance issues, please provide as much of data (files or screenshots) of metrics which can help determining what is going on. If you have an issue related to a machine, it helps to supply output of ",(0,i.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"free -m"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"df")," which shows processes/memory/disk usage."))),(0,i.kt)("h1",{id:"docs"},"Docs"),(0,i.kt)("p",null,"If you have any updates to our documentation, please make any pull request to our docs repo."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/docs"},"Rancher 2.x Docs repository"),": This repo is where all the docs for Rancher 2.x are located. They are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," folder in the repo.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher.github.io"},"Rancher 1.x Docs repository"),": This repo is where all the docs for Rancher 1.x are located. They are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher")," folder in the repo."))))}m.isMDXComponent=!0},47071:function(e,t,r){t.Z=r.p+"assets/images/ranchercomponentsdiagram-f0dd28703a683fd512eb6ffd91fe1447.svg"}}]);