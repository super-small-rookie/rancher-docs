"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[40337],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,k=u["".concat(i,".").concat(g)]||u[g]||p[g]||r;return n?o.createElement(k,l(l({ref:t},c),{},{components:n})):o.createElement(k,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],s={title:"Kubernetes Resources",weight:101},i=void 0,d={unversionedId:"troubleshooting/other-troubleshooting-tips/kubernetes-resources",id:"troubleshooting/other-troubleshooting-tips/kubernetes-resources",title:"Kubernetes Resources",description:"The commands/steps listed on this page can be used to check the most important Kubernetes resources and apply to Rancher Launched Kubernetes clusters.",source:"@site/docs/troubleshooting/other-troubleshooting-tips/kubernetes-resources.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/kubernetes-resources",permalink:"/troubleshooting/other-troubleshooting-tips/kubernetes-resources",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/other-troubleshooting-tips/kubernetes-resources.md",tags:[],version:"current",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"Kubernetes Resources",weight:101},sidebar:"tutorialSidebar",previous:{title:"Other Troubleshooting Tips",permalink:"/pages-for-subheaders/other-troubleshooting-tips"},next:{title:"Networking",permalink:"/troubleshooting/other-troubleshooting-tips/networking"}},c={},p=[{value:"Nodes",id:"nodes",level:2},{value:"Get nodes",id:"get-nodes",level:3},{value:"Get node conditions",id:"get-node-conditions",level:3},{value:"Kubernetes leader election",id:"kubernetes-leader-election",level:2},{value:"Kubernetes Controller Manager leader",id:"kubernetes-controller-manager-leader",level:3},{value:"Kubernetes Scheduler leader",id:"kubernetes-scheduler-leader",level:3},{value:"Ingress Controller",id:"ingress-controller",level:2},{value:"Pod details",id:"pod-details",level:3},{value:"Pod container logs",id:"pod-container-logs",level:3},{value:"Namespace events",id:"namespace-events",level:3},{value:"Debug logging",id:"debug-logging",level:3},{value:"Check configuration",id:"check-configuration",level:3},{value:"Rancher agents",id:"rancher-agents",level:2},{value:"cattle-node-agent",id:"cattle-node-agent",level:4},{value:"cattle-cluster-agent",id:"cattle-cluster-agent",level:4},{value:"Jobs and Pods",id:"jobs-and-pods",level:2},{value:"Check that pods or jobs have status <strong>Running</strong>/<strong>Completed</strong>",id:"check-that-pods-or-jobs-have-status-runningcompleted",level:3},{value:"Describe pod",id:"describe-pod",level:3},{value:"Pod container logs",id:"pod-container-logs-1",level:3},{value:"Describe job",id:"describe-job",level:3},{value:"Logs from the containers of pods of the job",id:"logs-from-the-containers-of-pods-of-the-job",level:3},{value:"Evicted pods",id:"evicted-pods",level:3},{value:"Job does not complete",id:"job-does-not-complete",level:3}],u={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The commands/steps listed on this page can be used to check the most important Kubernetes resources and apply to ",(0,r.kt)("a",{parentName:"p",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes")," clusters."),(0,r.kt)("p",null,"Make sure you configured the correct kubeconfig (for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml")," for Rancher HA) or are using the embedded kubectl via the UI."),(0,r.kt)("h2",{id:"nodes"},"Nodes"),(0,r.kt)("h3",{id:"get-nodes"},"Get nodes"),(0,r.kt)("p",null,"Run the command below and check the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All nodes in your cluster should be listed, make sure there is not one missing."),(0,r.kt)("li",{parentName:"ul"},"All nodes should have the ",(0,r.kt)("strong",{parentName:"li"},"Ready")," status (if not in ",(0,r.kt)("strong",{parentName:"li"},"Ready")," state, check the ",(0,r.kt)("inlineCode",{parentName:"li"},"kubelet")," container logs on that node using ",(0,r.kt)("inlineCode",{parentName:"li"},"docker logs kubelet"),")"),(0,r.kt)("li",{parentName:"ul"},"Check if all nodes report the correct version."),(0,r.kt)("li",{parentName:"ul"},"Check if OS/Kernel/Docker values are shown as expected (possibly you can relate issues due to upgraded OS/Kernel/Docker)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get nodes -o wide\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME             STATUS   ROLES          AGE   VERSION   INTERNAL-IP      EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME\ncontrolplane-0   Ready    controlplane   31m   v1.13.5   138.68.188.91    <none>        Ubuntu 18.04.2 LTS   4.15.0-47-generic   docker://18.9.5\netcd-0           Ready    etcd           31m   v1.13.5   138.68.180.33    <none>        Ubuntu 18.04.2 LTS   4.15.0-47-generic   docker://18.9.5\nworker-0         Ready    worker         30m   v1.13.5   139.59.179.88    <none>        Ubuntu 18.04.2 LTS   4.15.0-47-generic   docker://18.9.5\n")),(0,r.kt)("h3",{id:"get-node-conditions"},"Get node conditions"),(0,r.kt)("p",null,"Run the command below to list nodes with ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/#condition"},"Node Conditions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl get nodes -o go-template=\'{{range .items}}{{$node := .}}{{range .status.conditions}}{{$node.metadata.name}}{{": "}}{{.type}}{{":"}}{{.status}}{{"\\n"}}{{end}}{{end}}\'\n')),(0,r.kt)("p",null,"Run the command below to list nodes with ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/#condition"},"Node Conditions")," that are active that could prevent normal operation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl get nodes -o go-template=\'{{range .items}}{{$node := .}}{{range .status.conditions}}{{if ne .type "Ready"}}{{if eq .status "True"}}{{$node.metadata.name}}{{": "}}{{.type}}{{":"}}{{.status}}{{"\\n"}}{{end}}{{else}}{{if ne .status "True"}}{{$node.metadata.name}}{{": "}}{{.type}}{{": "}}{{.status}}{{"\\n"}}{{end}}{{end}}{{end}}{{end}}\'\n')),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"worker-0: DiskPressure:True\n")),(0,r.kt)("h2",{id:"kubernetes-leader-election"},"Kubernetes leader election"),(0,r.kt)("h3",{id:"kubernetes-controller-manager-leader"},"Kubernetes Controller Manager leader"),(0,r.kt)("p",null,"The leader is determined by a leader election process. After the leader has been determined, the leader (",(0,r.kt)("inlineCode",{parentName:"p"},"holderIdentity"),") is saved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," endpoint (in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane-0"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl -n kube-system get endpoints kube-controller-manager -o jsonpath=\'{.metadata.annotations.control-plane\\.alpha\\.kubernetes\\.io/leader}\'\n{"holderIdentity":"controlplane-0_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx","leaseDurationSeconds":15,"acquireTime":"2018-12-27T08:59:45Z","renewTime":"2018-12-27T09:44:57Z","leaderTransitions":0}>\n')),(0,r.kt)("h3",{id:"kubernetes-scheduler-leader"},"Kubernetes Scheduler leader"),(0,r.kt)("p",null,"The leader is determined by a leader election process. After the leader has been determined, the leader (",(0,r.kt)("inlineCode",{parentName:"p"},"holderIdentity"),") is saved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," endpoint (in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane-0"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl -n kube-system get endpoints kube-scheduler -o jsonpath=\'{.metadata.annotations.control-plane\\.alpha\\.kubernetes\\.io/leader}\'\n{"holderIdentity":"controlplane-0_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx","leaseDurationSeconds":15,"acquireTime":"2018-12-27T08:59:45Z","renewTime":"2018-12-27T09:44:57Z","leaderTransitions":0}>\n')),(0,r.kt)("h2",{id:"ingress-controller"},"Ingress Controller"),(0,r.kt)("p",null,"The default Ingress Controller is NGINX and is deployed as a DaemonSet in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," namespace. The pods are only scheduled to nodes with the ",(0,r.kt)("inlineCode",{parentName:"p"},"worker")," role."),(0,r.kt)("p",null,"Check if the pods are running on all nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx get pods -o wide\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx get pods -o wide\nNAME                                    READY     STATUS    RESTARTS   AGE       IP               NODE\ndefault-http-backend-797c5bc547-kwwlq   1/1       Running   0          17m       x.x.x.x          worker-1\nnginx-ingress-controller-4qd64          1/1       Running   0          14m       x.x.x.x          worker-1\nnginx-ingress-controller-8wxhm          1/1       Running   0          13m       x.x.x.x          worker-0\n")),(0,r.kt)("p",null,"If a pod is unable to run (Status is not ",(0,r.kt)("strong",{parentName:"p"},"Running"),", Ready status is not showing ",(0,r.kt)("inlineCode",{parentName:"p"},"1/1")," or you see a high count of Restarts), check the pod details, logs and namespace events."),(0,r.kt)("h3",{id:"pod-details"},"Pod details"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx describe pods -l app=ingress-nginx\n")),(0,r.kt)("h3",{id:"pod-container-logs"},"Pod container logs"),(0,r.kt)("p",null,'The below command can show the logs of all the pods labeled "app=ingress-nginx", but it will display only 10 lines of log because of the restrictions of the ',(0,r.kt)("inlineCode",{parentName:"p"},"kubectl logs")," command. Refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"--tail")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl logs -h")," for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx logs -l app=ingress-nginx\n")),(0,r.kt)("p",null,"If the full log is needed, specify the pod name in the trailing command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx logs <pod name>\n")),(0,r.kt)("h3",{id:"namespace-events"},"Namespace events"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx get events\n")),(0,r.kt)("h3",{id:"debug-logging"},"Debug logging"),(0,r.kt)("p",null,"To enable debug logging:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl -n ingress-nginx patch ds nginx-ingress-controller --type=\'json\' -p=\'[{"op": "add", "path": "/spec/template/spec/containers/0/args/-", "value": "--v=5"}]\'\n')),(0,r.kt)("h3",{id:"check-configuration"},"Check configuration"),(0,r.kt)("p",null,"Retrieve generated configuration in each pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx get pods -l app=ingress-nginx --no-headers -o custom-columns=.NAME:.metadata.name | while read pod; do kubectl -n ingress-nginx exec $pod -- cat /etc/nginx/nginx.conf; done\n")),(0,r.kt)("h2",{id:"rancher-agents"},"Rancher agents"),(0,r.kt)("p",null,"Communication to the cluster (Kubernetes API via ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent"),") and communication to the nodes (cluster provisioning via ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-node-agent"),") is done through Rancher agents."),(0,r.kt)("h4",{id:"cattle-node-agent"},"cattle-node-agent"),(0,r.kt)("p",null,"Check if the cattle-node-agent pods are present on each node, have status ",(0,r.kt)("strong",{parentName:"p"},"Running")," and don't have a high count of Restarts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods -l app=cattle-agent -o wide\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                      READY     STATUS    RESTARTS   AGE       IP                NODE\ncattle-node-agent-4gc2p   1/1       Running   0          2h        x.x.x.x           worker-1\ncattle-node-agent-8cxkk   1/1       Running   0          2h        x.x.x.x           etcd-1\ncattle-node-agent-kzrlg   1/1       Running   0          2h        x.x.x.x           etcd-0\ncattle-node-agent-nclz9   1/1       Running   0          2h        x.x.x.x           controlplane-0\ncattle-node-agent-pwxp7   1/1       Running   0          2h        x.x.x.x           worker-0\ncattle-node-agent-t5484   1/1       Running   0          2h        x.x.x.x           controlplane-1\ncattle-node-agent-t8mtz   1/1       Running   0          2h        x.x.x.x           etcd-2\n")),(0,r.kt)("p",null,"Check logging of a specific cattle-node-agent pod or all cattle-node-agent pods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -l app=cattle-agent\n")),(0,r.kt)("h4",{id:"cattle-cluster-agent"},"cattle-cluster-agent"),(0,r.kt)("p",null,"Check if the cattle-cluster-agent pod is present in the cluster, has status ",(0,r.kt)("strong",{parentName:"p"},"Running")," and doesn't have a high count of Restarts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods -l app=cattle-cluster-agent -o wide\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                    READY     STATUS    RESTARTS   AGE       IP           NODE\ncattle-cluster-agent-54d7c6c54d-ht9h4   1/1       Running   0          2h        x.x.x.x      worker-1\n")),(0,r.kt)("p",null,"Check logging of cattle-cluster-agent pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -l app=cattle-cluster-agent\n")),(0,r.kt)("h2",{id:"jobs-and-pods"},"Jobs and Pods"),(0,r.kt)("h3",{id:"check-that-pods-or-jobs-have-status-runningcompleted"},"Check that pods or jobs have status ",(0,r.kt)("strong",{parentName:"h3"},"Running"),"/",(0,r.kt)("strong",{parentName:"h3"},"Completed")),(0,r.kt)("p",null,"To check, run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pods --all-namespaces\n")),(0,r.kt)("p",null,"If a pod is not in ",(0,r.kt)("strong",{parentName:"p"},"Running")," state, you can dig into the root cause by running:"),(0,r.kt)("h3",{id:"describe-pod"},"Describe pod"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl describe pod POD_NAME -n NAMESPACE\n")),(0,r.kt)("h3",{id:"pod-container-logs-1"},"Pod container logs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl logs POD_NAME -n NAMESPACE\n")),(0,r.kt)("p",null,"If a job is not in ",(0,r.kt)("strong",{parentName:"p"},"Completed")," state, you can dig into the root cause by running:"),(0,r.kt)("h3",{id:"describe-job"},"Describe job"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl describe job JOB_NAME -n NAMESPACE\n")),(0,r.kt)("h3",{id:"logs-from-the-containers-of-pods-of-the-job"},"Logs from the containers of pods of the job"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl logs -l job-name=JOB_NAME -n NAMESPACE\n")),(0,r.kt)("h3",{id:"evicted-pods"},"Evicted pods"),(0,r.kt)("p",null,"Pods can be evicted based on ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/out-of-resource/#eviction-policy"},"eviction signals"),"."),(0,r.kt)("p",null,"Retrieve a list of evicted pods (podname and namespace):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl get pods --all-namespaces -o go-template=\'{{range .items}}{{if eq .status.phase "Failed"}}{{if eq .status.reason "Evicted"}}{{.metadata.name}}{{" "}}{{.metadata.namespace}}{{"\\n"}}{{end}}{{end}}{{end}}\'\n')),(0,r.kt)("p",null,"To delete all evicted pods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl get pods --all-namespaces -o go-template=\'{{range .items}}{{if eq .status.phase "Failed"}}{{if eq .status.reason "Evicted"}}{{.metadata.name}}{{" "}}{{.metadata.namespace}}{{"\\n"}}{{end}}{{end}}{{end}}\' | while read epod enamespace; do kubectl -n $enamespace delete pod $epod; done\n')),(0,r.kt)("p",null,"Retrieve a list of evicted pods, scheduled node and the reason:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'kubectl get pods --all-namespaces -o go-template=\'{{range .items}}{{if eq .status.phase "Failed"}}{{if eq .status.reason "Evicted"}}{{.metadata.name}}{{" "}}{{.metadata.namespace}}{{"\\n"}}{{end}}{{end}}{{end}}\' | while read epod enamespace; do kubectl -n $enamespace get pod $epod -o=custom-columns=NAME:.metadata.name,NODE:.spec.nodeName,MSG:.status.message; done\n')),(0,r.kt)("h3",{id:"job-does-not-complete"},"Job does not complete"),(0,r.kt)("p",null,"If you have enabled Istio, and you are having issues with a Job you deployed not completing, you will need to add an annotation to your pod using ",(0,r.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},"these steps.")),(0,r.kt)("p",null,"Since Istio Sidecars run indefinitely, a Job cannot be considered complete even after its task has completed. This is a temporary workaround and will disable Istio for any traffic to/from the annotated Pod. Keep in mind this may not allow you to continue to use a Job for integration testing, as the Job will not have access to the service mesh."))}g.isMDXComponent=!0}}]);