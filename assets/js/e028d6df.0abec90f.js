"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[93784],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96064:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"API Keys",weight:7005,aliases:["/rancher/v2.0-v2.4/en/concepts/api-keys/","/rancher/v2.0-v2.4/en/tasks/user-settings/api-keys/"]},p=void 0,l={unversionedId:"reference-guides/user-settings/api-keys",id:"version-2.0-2.4/reference-guides/user-settings/api-keys",title:"API Keys",description:"API Keys and User Authentication",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/user-settings/api-keys.md",sourceDirName:"reference-guides/user-settings",slug:"/reference-guides/user-settings/api-keys",permalink:"/v2.0-v2.4/reference-guides/user-settings/api-keys",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/user-settings/api-keys.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663777725,formattedLastUpdatedAt:"9/21/2022",frontMatter:{title:"API Keys",weight:7005,aliases:["/rancher/v2.0-v2.4/en/concepts/api-keys/","/rancher/v2.0-v2.4/en/tasks/user-settings/api-keys/"]},sidebar:"tutorialSidebar",previous:{title:"User Settings",permalink:"/v2.0-v2.4/pages-for-subheaders/user-settings"},next:{title:"Managing Node Templates",permalink:"/v2.0-v2.4/reference-guides/user-settings/manage-node-templates"}},u={},c=[{value:"API Keys and User Authentication",id:"api-keys-and-user-authentication",level:2},{value:"Creating an API Key",id:"creating-an-api-key",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Deleting API Keys",id:"deleting-api-keys",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"api-keys-and-user-authentication"},"API Keys and User Authentication"),(0,i.kt)("p",null,"If you want to access your Rancher clusters, projects, or other objects using external applications, you can do so using the Rancher API. However, before your application can access the API, you must provide the app with a key used to authenticate with Rancher. You can obtain a key using the Rancher UI."),(0,i.kt)("p",null,"An API key is also required for using Rancher CLI."),(0,i.kt)("p",null,"API Keys are composed of four components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Endpoint:")," This is the IP address and path that other applications use to send requests to the Rancher API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Access Key:")," The token's username."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secret Key:")," The token's password. For applications that prompt you for two different strings for API authentication, you usually enter the two keys together."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bearer Token:")," The token username and password concatenated together. Use this string for applications that prompt you for one authentication string.")),(0,i.kt)("h2",{id:"creating-an-api-key"},"Creating an API Key"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"User Avatar")," > ",(0,i.kt)("strong",{parentName:"p"},"API & Keys")," from the ",(0,i.kt)("strong",{parentName:"p"},"User Settings")," menu in the upper-right.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add Key"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional:")," Enter a description for the API key and select an expiration period or a scope. We recommend setting an expiration date."),(0,i.kt)("p",{parentName:"li"},"The API key won't be valid after expiration. Shorter expiration periods are more secure."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Available as of v2.4.6"),"\nExpiration period will be bound by ",(0,i.kt)("inlineCode",{parentName:"p"},"v3/settings/auth-token-max-ttl-minutes"),". If it exceeds the max-ttl, API key will be created with max-ttl as the expiration period."),(0,i.kt)("p",{parentName:"li"},"A scope will limit the API key so that it will only work against the Kubernetes API of the specified cluster. If the cluster is configured with an Authorized Cluster Endpoint, you will be able to use a scoped token directly against the cluster's API without proxying through the Rancher server. See ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"Authorized Cluster Endpoints")," for more information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step Result:")," Your API Key is created. Your API ",(0,i.kt)("strong",{parentName:"p"},"Endpoint"),", ",(0,i.kt)("strong",{parentName:"p"},"Access Key"),", ",(0,i.kt)("strong",{parentName:"p"},"Secret Key"),", and ",(0,i.kt)("strong",{parentName:"p"},"Bearer Token")," are displayed."),(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("strong",{parentName:"p"},"Bearer Token")," to authenticate with Rancher CLI.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the information displayed to a secure location. This information is only displayed once, so if you lose your key, you'll have to make a new one."))),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter your API key information into the application that will send requests to the Rancher API."),(0,i.kt)("li",{parentName:"ul"},"Learn more about the Rancher endpoints and parameters by selecting ",(0,i.kt)("strong",{parentName:"li"},"View in API")," for an object in the Rancher UI."),(0,i.kt)("li",{parentName:"ul"},"API keys are used for API calls and ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/cli-with-rancher"},"Rancher CLI"),".")),(0,i.kt)("h2",{id:"deleting-api-keys"},"Deleting API Keys"),(0,i.kt)("p",null,"If you need to revoke an API key, delete it. You should delete API keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"That may have been compromised."),(0,i.kt)("li",{parentName:"ul"},"That have expired.")),(0,i.kt)("p",null,"To delete an API, select the stale key and click ",(0,i.kt)("strong",{parentName:"p"},"Delete"),"."))}h.isMDXComponent=!0}}]);