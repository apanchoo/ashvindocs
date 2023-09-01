"use strict";(self.webpackChunkashvin=self.webpackChunkashvin||[]).push([[6229],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(v,a(a({ref:n},c),{},{components:t})):r.createElement(v,a({ref:n},c))}));function v(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const o={sidebar_position:1,author:"Ashvin"},a="TP2 SDN Configuration",s={unversionedId:"R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/tp2_sdn",id:"R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/tp2_sdn",title:"TP2 SDN Configuration",description:"Pr\xe9sentation",source:"@site/docs/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/tp2_sdn.md",sourceDirName:"R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX",slug:"/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/tp2_sdn",permalink:"/docs/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/tp2_sdn",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/tp2_sdn.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Ashvin"},sidebar:"tutorialSidebar",previous:{title:"TP1 Compte-rendu R5.ROM.11",permalink:"/docs/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/tp1_doc"},next:{title:"TP3 d\xe9ploiement d'OpenStack avec Vagrant",permalink:"/docs/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/tp3_openstack"}},l={},u=[{value:"Pr\xe9sentation",id:"pr\xe9sentation",level:2},{value:"Configuration du Switch",id:"configuration-du-switch",level:2},{value:"Openvswitch Installation",id:"openvswitch-installation",level:3},{value:"Interconnexion des deux switch",id:"interconnexion-des-deux-switch",level:3},{value:"Configuration des h\xf4tes",id:"configuration-des-h\xf4tes",level:2},{value:"Configuration du Controleur SDN",id:"configuration-du-controleur-sdn",level:2},{value:"Installation de OPenDayLight",id:"installation-de-opendaylight",level:3},{value:"Configuration du controleur dans les Switch",id:"configuration-du-controleur-dans-les-switch",level:3},{value:"Test de fonctionnement",id:"test-de-fonctionnement",level:2}],c={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tp2-sdn-configuration"},"TP2 SDN Configuration"),(0,i.kt)("h2",{id:"pr\xe9sentation"},"Pr\xe9sentation"),(0,i.kt)("p",null,"Cette documentation offre un guide sur la configuration et la mise en place d'un r\xe9seau \xe0 d\xe9finition logicielle (SDN, Software-Defined Networking en anglais). Le r\xe9seau que nous allons cr\xe9er est compos\xe9 de plusieurs \xe9l\xe9ments cl\xe9s : un switch r\xe9seau, un contr\xf4leur SDN centralis\xe9 et deux postes clients."),(0,i.kt)("h2",{id:"configuration-du-switch"},"Configuration du Switch"),(0,i.kt)("p",null,"Pour r\xe9aliser ce SDN nous allons cr\xe9er un NFV, c'est \xe0 dire que notre r\xe9seaux serra enti\xe8rement virtualiz\xe9 dans une machine h\xf4te. Ainsi nous allons installer notre premi\xe8re VM qui serra le switch. Nous allons utiliser OPenvSwitch qui est une solution opensource pour virtualizer un switch (pas n\xe9cessairement de niveau 2. Dans une architecture SDN le switch op\xe9re sur toutes les couches du mod\xe8le OSI)."),(0,i.kt)("h3",{id:"openvswitch-installation"},"Openvswitch Installation"),(0,i.kt)("p",null,"Installer Openvswitch sur 4 machines virtuelles debian (h1, h2, SW1, SW2) \xe0 l'aide de la commande suivante"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install openvswitch-switch\n")),(0,i.kt)("p",null,"Une fois openswitch installer sur toute les machines, il est necessaire de cr\xe9er un bridge d\xe9di\xe9 \xe0 ce switch virtuel ainsi qu'une interface interne reli\xe9e \xe0 ce switch \xe0 l'aide des deux commandes suivantes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Sur les 4 machines\n\nsudo ovs-vsctl add-br br0\n\nsudo ovs-vsctl add-port br0 br0-int -- set interface br0-int type=internal\n")),(0,i.kt)("h3",{id:"interconnexion-des-deux-switch"},"Interconnexion des deux switch"),(0,i.kt)("p",null,"Il est maintenant temps d'interconnecter nos deux switchs entre eux. Pour ce faire nous allons cr\xe9er un lien vxlan entre eux \xe0 l'aide de la commande suivante."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Sur SW1\nsudo ovs-vsctl add-port br0 vx1\u200a-\u200aset interface vx1 type=vxlan options:remote_ip=<SW2_IP> options:key=2000\n\n# Sur SW2\nsudo ovs-vsctl add-port br0 vx1\u200a-\u200aset interface vx1 type=vxlan options:remote_ip=<SW1_IP> options:key=2000\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"L'id ici est important car il permet d'identifier clairement de quel lien il s'agit. A noter que au pr\xe9alable les 4 machines doivent avoir une adresse ip sur leur interface principale et doivent pouvoir commmuniquer entre elle. ")),(0,i.kt)("h2",{id:"configuration-des-h\xf4tes"},"Configuration des h\xf4tes"),(0,i.kt)("p",null,"De la m\xeame mani\xe8re que les deux switch ont \xe9t\xe9 interconnect\xe9s entre eux \xe0 l'aide de liens vxlan il faut maintenant connecter les h\xf4tes h1 et h2 \xe0 leur switch SW1 et SW2 respectif \xe0 l'aide des commandes suivantes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# h1 vers SW1\nsudo ovs-vsctl add-port br0 vx1 - set interface vx1 type=vxlan options:remote_ip=<SWITCH1_IP> options:key=2001\n# SW1 vers h1\nsudo ovs-vsctl add-port br0 vx2 - set interface vx2 type=vxlan options:remote_ip=<HOST1_IP> options:key=2001\n\n# h2 vers SW2\nsudo ovs-vsctl add-port br0 vx1 - set interface vx1 type=vxlan options:remote_ip=<SWITCH2_IP> options:key=2001\n# SW2 vers h2\nsudo ovs-vsctl add-port br0 vx2 - set interface vx2 type=vxlan options:remote_ip=<HOST2_IP> options:key=2001\n\n")),(0,i.kt)("h2",{id:"configuration-du-controleur-sdn"},"Configuration du Controleur SDN"),(0,i.kt)("h3",{id:"installation-de-opendaylight"},"Installation de OPenDayLight"),(0,i.kt)("p",null,"Des lors nous pouvons cr\xe9er une cinqui\xe8me machine qui servira de controleur SDN \xe0 notre r\xe9seau. Sur cette derni\xe8re nous installerons OPENDAYLIGHT \xe0 l'aide des commandes suivantes :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://nexus.opendaylight.org/content/repositories/opendaylight.release/org/opendaylight/integration/karaf/0.18.1/karaf-0.18.1.tar.gz\n\ntar -xzvf karaf-0.18.1.tar.gz\n\ncd karaf-0.18.1\n\n./bin/karaf\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Il se peut qu'il soit necessaire d'installer java pour pouvoir utilliser karaf. POur ce faire utiliser la commande ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install openjdk-17-jdk"),".")),(0,i.kt)("p",null,"Karaf ainsi d\xe9marr\xe9 il faut mettre \xe0 jour la liste des plugins et installer les plugins openflow (protocole pour g\xe9rer les switch depuis un controlleur SDN)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"feature:repo-refresh\n\nfeature:install odl-openflowplugin-southbound \n")),(0,i.kt)("h3",{id:"configuration-du-controleur-dans-les-switch"},"Configuration du controleur dans les Switch"),(0,i.kt)("p",null,"Pour chaque switch SW1 et SW2 il faut leur sp\xe9cifier la pr\xe9sence de notre controleur SDN et pour ce faire il faut utiliser la commande  :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ovs-vsctl set bridge br0 protocols=OpenFlow10 -- set-controller br0 tcp:<CONTROLLER_IP>:6633\n")),(0,i.kt)("h2",{id:"test-de-fonctionnement"},"Test de fonctionnement"),(0,i.kt)("p",null,"Sur h1 et h2 configurons une ip dans le m\xeame r\xe9seaux sur les interfaces vxlan reli\xe9 aux switchs \xe0 l'aide des commandes : "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Sur h1\nip addr add 100.0.0.101/24 dev br0-int\nip link set br0-int up\n\n# Sur h2\nip addr add 100.0.0.102/24 dev br0-int\nip link set br0-int up\n\n")),(0,i.kt)("p",null," Puis v\xe9rifier la que le bon fonctionnement de l'architecture \xe0 l'aide d'un ping de h1 vers h2 ou inversement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Sur h1\nping 100.0.0.102\n\n# Sur h2\nping 100.0.0.101\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Webographie :"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://infoloup.no-ip.org/virtualbox-debian11-openvswitch-creation/"},"https://infoloup.no-ip.org/virtualbox-debian11-openvswitch-creation/")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@blackvvine/sdn-part-2-building-an-sdn-playground-on-the-cloud-using-open-vswitch-and-opendaylight-a0e2de029ce1"},"https://medium.com/@blackvvine/sdn-part-2-building-an-sdn-playground-on-the-cloud-using-open-vswitch-and-opendaylight-a0e2de029ce1"))))}p.isMDXComponent=!0}}]);