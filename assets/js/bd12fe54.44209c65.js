"use strict";(self.webpackChunkashvin=self.webpackChunkashvin||[]).push([[4654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),v=a,b=d["".concat(i,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=v;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},9327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={slug:"docu",title:"DOCUMENTATION",authors:["ashvin","emerick"],tags:["sdn","nfz","vxlan","openstack","docker","ansible"]},s="Documentation",l={permalink:"/ashvindocs/blog/docu",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-09-docu/index.md",source:"@site/blog/2023-09-09-docu/index.md",title:"DOCUMENTATION",description:"Installation des pr\xe9requis",date:"2023-09-09T00:00:00.000Z",formattedDate:"September 9, 2023",tags:[{label:"sdn",permalink:"/ashvindocs/blog/tags/sdn"},{label:"nfz",permalink:"/ashvindocs/blog/tags/nfz"},{label:"vxlan",permalink:"/ashvindocs/blog/tags/vxlan"},{label:"openstack",permalink:"/ashvindocs/blog/tags/openstack"},{label:"docker",permalink:"/ashvindocs/blog/tags/docker"},{label:"ansible",permalink:"/ashvindocs/blog/tags/ansible"}],readingTime:.77,hasTruncateMarker:!1,authors:[{name:"PANCHOO Ashvin",title:"Etudiant en R\xe9seaux et T\xe9l\xe9coms",url:"https://github.com/apanchoo",imageURL:"https://github.com/apanchoo.png",key:"ashvin"},{name:"NANY Emerick",title:"Etudiant en R\xe9seaux et T\xe9l\xe9coms",url:"https://github.com/bleach100",imageURL:"https://github.com/bleach100.png",key:"emerick"}],frontMatter:{slug:"docu",title:"DOCUMENTATION",authors:["ashvin","emerick"],tags:["sdn","nfz","vxlan","openstack","docker","ansible"]},nextItem:{title:"WIFI AVANC\xc9",permalink:"/ashvindocs/blog/wifi-avance"}},i={authorsImageUrls:[void 0,void 0]},p=[{value:"Installation des pr\xe9requis",id:"installation-des-pr\xe9requis",level:2},{value:"R\xe9seaux",id:"r\xe9seaux",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation-des-pr\xe9requis"},"Installation des pr\xe9requis"),(0,a.kt)("h2",{id:"r\xe9seaux"},"R\xe9seaux"),(0,a.kt)("p",null,"supression du port 15 du bridge 0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ovs-vsctl del-port br0 eth15\n")),(0,a.kt)("p",null,"ajout des addresses ip "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo ip addr add 172.16.1.10/24 dev eth15\n\nsudo ip addr add 172.16.1.20/24 dev eth15\n\n")),(0,a.kt)("p",null,"cr\xe9ation du bridge et des vxlan"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ovs-vsctl add-br ovs1\novs-vsctl add-port ovs1 vxlan1 -- set interface vxlan1 type=vxlan options:remote_ip=172.16.1.20 options:key=1\novs-vsctl add-port ovs1 vxlan2 -- set interface vxlan2 type=vxlan options:remote_ip=172.16.1.20 options:key=2\n\novs-vsctl add-br ovs2\novs-vsctl add-port ovs2 vxlan1 -- set interface vxlan1 type=vxlan options:remote_ip=172.16.1.10 options:key=1\novs-vsctl add-port ovs2 vxlan2 -- set interface vxlan2 type=vxlan options:remote_ip=172.16.1.10 options:key=2\n\n")),(0,a.kt)("p",null,"suppresion des port des pc des briges existants"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#sur les deuw switchs\novs-vsctl del-port br0 eth1\novs-vsctl del-port br0 eth2\n")),(0,a.kt)("p",null,"ajout des nouveaux ports"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#switch 1\novs-vsctl add-port ovs1 eth1\novs-vsctl add-port ovs1 eth2\n\n#switch 2\novs-vsctl add-port ovs2 eth1\novs-vsctl add-port ovs2 eth2\n")),(0,a.kt)("p",null,"table=1,tun_id=100,dl_dst=00:00:00:00:00:02,actions=output:1\ntable=1,tun_id=200,dl_dst=00:00:00:00:00:02,actions=output:2\ntable=1,tun_id=100,dl_dst=00:00:00:00:00:01,actions=output:100\ntable=1,tun_id=200,dl_dst=00:00:00:00:00:01,actions=output:100\ntable=1,tun_id=100,arp,nw_dst=10.0.0.2,actions=output:1\ntable=1,tun_id=200,arp,nw_dst=10.0.0.2,actions=output:2\ntable=1,tun_id=100,arp,nw_dst=10.0.0.1,actions=output:100\ntable=1,tun_id=200,arp,nw_dst=10.0.0.1,actions=output:100\ntable=1,priority=100,actions=drop"))}u.isMDXComponent=!0}}]);