"use strict";(self.webpackChunkashvin=self.webpackChunkashvin||[]).push([[458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,author:"Ashvin"},l="DOCUMENTATION DE SYNTHESE R5ROM11",o={unversionedId:"R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/SYNTHESE",id:"R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/SYNTHESE",title:"DOCUMENTATION DE SYNTHESE R5ROM11",description:"\ud83d\udcdd Auteur : PANCHOO Ashvin 01-09-2023",source:"@site/docs/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/SYNTHESE.md",sourceDirName:"R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX",slug:"/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/SYNTHESE",permalink:"/ashvindocs/docs/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/SYNTHESE",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/SYNTHESE.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,author:"Ashvin"},sidebar:"tutorialSidebar",previous:{title:"R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX",permalink:"/ashvindocs/docs/category/r5rom11-automatisation-et-virtualization-des-reseaux"},next:{title:"Cours R5.ROM.11",permalink:"/ashvindocs/docs/R5.ROM.11 AUTOMATISATION ET VIRTUALIZATION DES RESEAUX/cours"}},s={},u=[{value:"INTRODUCTION",id:"introduction",level:2},{value:"PREREQUIS",id:"prerequis",level:2},{value:"Partie 1: Installation de Vagrant",id:"partie-1-installation-de-vagrant",level:4},{value:"Sous Linux",id:"sous-linux",level:5},{value:"Sous Windows",id:"sous-windows",level:5},{value:"Partie 2: Cr\xe9ation des VMs",id:"partie-2-cr\xe9ation-des-vms",level:4},{value:"Configuration des VMs",id:"configuration-des-vms",level:5},{value:"Exemple de Configuration pour une VM",id:"exemple-de-configuration-pour-une-vm",level:5},{value:"Partie 3: Lancement et V\xe9rification",id:"partie-3-lancement-et-v\xe9rification",level:4},{value:"Installation d&#39;OpenStack sur h1",id:"installation-dopenstack-sur-h1",level:2},{value:"Introduction",id:"introduction-1",level:3},{value:"Configuration de h1 dans Vagrant",id:"configuration-de-h1-dans-vagrant",level:3},{value:"Acc\xe8s \xe0 l&#39;interface OpenStack",id:"acc\xe8s-\xe0-linterface-openstack",level:3},{value:"Installation et Configuration d&#39;OpenDaylight",id:"installation-et-configuration-dopendaylight",level:2},{value:"Configuration du Contr\xf4leur SDN OpenDaylight",id:"configuration-du-contr\xf4leur-sdn-opendaylight",level:3},{value:"Installation d&#39;OpenDaylight sur la Machine OPENDAYLIGHT",id:"installation-dopendaylight-sur-la-machine-opendaylight",level:4},{value:"Configuration des Switchs",id:"configuration-des-switchs",level:3},{value:"Cr\xe9ation d&#39;un R\xe9seau Virtuel (NFV)",id:"cr\xe9ation-dun-r\xe9seau-virtuel-nfv",level:4},{value:"Interconnexion des Switchs SW1 et SW2",id:"interconnexion-des-switchs-sw1-et-sw2",level:4},{value:"Configuration des H\xf4tes",id:"configuration-des-h\xf4tes",level:3},{value:"Configuration du controleur dans les Switch",id:"configuration-du-controleur-dans-les-switch",level:4},{value:"Test de fonctionnement",id:"test-de-fonctionnement",level:3},{value:"Analyse de Trames avec Wireshark sur H2 via Redirection SSH",id:"analyse-de-trames-avec-wireshark-sur-h2-via-redirection-ssh",level:2},{value:"\xc9tapes d&#39;installation et de configuration :",id:"\xe9tapes-dinstallation-et-de-configuration-",level:3},{value:"Installation de Docker et Ansible sur h2 et Provisionnement d&#39;un Conteneur Docker via Ansible",id:"installation-de-docker-et-ansible-sur-h2-et-provisionnement-dun-conteneur-docker-via-ansible",level:2},{value:"Installation de Docker et Ansible sur h2",id:"installation-de-docker-et-ansible-sur-h2",level:3},{value:"Provisionnement d&#39;un Conteneur Docker via Ansible sur h2",id:"provisionnement-dun-conteneur-docker-via-ansible-sur-h2",level:3},{value:"V\xe9rification",id:"v\xe9rification",level:3},{value:"Importation des VMs VirtualBox dans GNS3 et Connexion au Switch Ethernet",id:"importation-des-vms-virtualbox-dans-gns3-et-connexion-au-switch-ethernet",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:3},{value:"\xc9tape 1: Configuration de GNS3 pour Utiliser VirtualBox",id:"\xe9tape-1-configuration-de-gns3-pour-utiliser-virtualbox",level:4},{value:"\xc9tape 2: Int\xe9gration des VMs Vagrant dans GNS3",id:"\xe9tape-2-int\xe9gration-des-vms-vagrant-dans-gns3",level:4},{value:"\xc9tape 3: Cr\xe9ation du Projet GNS3 et Configuration des VMs",id:"\xe9tape-3-cr\xe9ation-du-projet-gns3-et-configuration-des-vms",level:4},{value:"\xc9tape 4: Connexion des VMs \xe0 un Switch Ethernet",id:"\xe9tape-4-connexion-des-vms-\xe0-un-switch-ethernet",level:4},{value:"Remarques importantes :",id:"remarques-importantes-",level:4}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"documentation-de-synthese-r5rom11"},"DOCUMENTATION DE SYNTHESE R5ROM11"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdd Auteur : PANCHOO Ashvin 01-09-2023"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdd Auteur : NANY Emerick 01-09-2023"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"\ud83d\udcdd Auteur : KU Siou 01-09-2023")),(0,i.kt)("h2",{id:"introduction"},"INTRODUCTION"),(0,i.kt)("p",null,"Dans ce document, nous vous fournirons une pr\xe9sentation d\xe9taill\xe9e des instructions n\xe9cessaires \xe0 la mise en place de l'architecture souhait\xe9e. Cette architecture est construite \xe0 partir de plusieurs \xe9l\xe9ments cl\xe9s, notamment :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"OpenStack")," : Une plateforme de cloud computing open source qui permet de d\xe9ployer des services cloud publics et priv\xe9s."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Opendaylight")," : Il s'agit d'un projet de r\xe9seau d\xe9fini par logiciel (SDN) open source qui vise \xe0 am\xe9liorer la gestion des r\xe9seaux et l'automatisation."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"GNS3")," : C'est un logiciel qui permet de simuler des r\xe9seaux complexes pour la formation, le test et le d\xe9veloppement."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ANSIBLE")," : Un outil d'automatisation IT qui peut configurer des syst\xe8mes, d\xe9ployer des logiciels et orchestrer des t\xe2ches plus complexes."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Docker")," : Une plateforme qui permet de cr\xe9er, d\xe9ployer et ex\xe9cuter des applications dans des conteneurs.")),(0,i.kt)("p",null,"Les interactions entre ces diff\xe9rents composants sont illustr\xe9es et expliqu\xe9es dans les sections suivantes du document."),(0,i.kt)("h2",{id:"prerequis"},"PREREQUIS"),(0,i.kt)("p",null,"Afin de suivre cette documentation de mani\xe8re optimale, nous supposons que les logiciels suivants sont d\xe9j\xe0 install\xe9s sur vos machines clientes : VirtualBox, Wireshark, GNS3 et Vagrant. "),(0,i.kt)("p",null,"Voici de br\xeaves explications pour installer ces logiciels : "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"VirtualBox")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Site officiel")," : ",(0,i.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/"},"https://www.virtualbox.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions")," :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rendez-vous sur le site officiel de VirtualBox."),(0,i.kt)("li",{parentName:"ul"},"T\xe9l\xe9chargez la version appropri\xe9e pour votre syst\xe8me d'exploitation."),(0,i.kt)("li",{parentName:"ul"},"Ex\xe9cutez le fichier d'installation et suivez les instructions \xe0 l'\xe9cran."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Wireshark")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Site officiel")," : ",(0,i.kt)("a",{parentName:"li",href:"https://www.wireshark.org/"},"https://www.wireshark.org/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions")," :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allez sur le site officiel de Wireshark."),(0,i.kt)("li",{parentName:"ul"},"T\xe9l\xe9chargez la version adapt\xe9e \xe0 votre OS."),(0,i.kt)("li",{parentName:"ul"},"Lancez le fichier d'installation et suivez les \xe9tapes indiqu\xe9es."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"GNS3")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Site officiel")," : ",(0,i.kt)("a",{parentName:"li",href:"https://www.gns3.com/"},"https://www.gns3.com/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions")," :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Visitez le site officiel de GNS3."),(0,i.kt)("li",{parentName:"ul"},"T\xe9l\xe9chargez la derni\xe8re version pour votre syst\xe8me."),(0,i.kt)("li",{parentName:"ul"},"Ex\xe9cutez le programme d'installation et suivez les directives \xe0 l'\xe9cran."),(0,i.kt)("li",{parentName:"ul"},"Notez que GNS3 peut n\xe9cessiter des configurations suppl\xe9mentaires en fonction de vos besoins, notamment l'ajout d'images d'\xe9quipement et l'int\xe9gration avec d'autres logiciels comme VirtualBox."))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Vagrant")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Site officiel")," : ",(0,i.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/"},"https://www.vagrantup.com/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instructions")," :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rendez-vous sur le site de Vagrant."),(0,i.kt)("li",{parentName:"ul"},"T\xe9l\xe9chargez la version correspondant \xe0 votre OS."),(0,i.kt)("li",{parentName:"ul"},"Lancez le fichier d'installation et suivez les instructions fournies."),(0,i.kt)("li",{parentName:"ul"},"Une fois Vagrant install\xe9, vous pourriez avoir besoin de l'int\xe9grer avec un fournisseur de virtualisation, comme VirtualBox.")))))),(0,i.kt)("h4",{id:"partie-1-installation-de-vagrant"},"Partie 1: Installation de Vagrant"),(0,i.kt)("h5",{id:"sous-linux"},"Sous Linux"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Mise \xe0 jour du syst\xe8me")," : Commencez par mettre \xe0 jour le gestionnaire de paquets avec ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt update")," et ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt upgrade"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Installation de Vagrant")," : Installez Vagrant en utilisant ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install vagrant"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"V\xe9rification")," : V\xe9rifiez l'installation avec ",(0,i.kt)("inlineCode",{parentName:"li"},"vagrant --version"),".")),(0,i.kt)("h5",{id:"sous-windows"},"Sous Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"T\xe9l\xe9chargement")," : Allez sur le site officiel de Vagrant (",(0,i.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/"},"vagrantup.com"),") et t\xe9l\xe9chargez l'installateur pour Windows."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Installation")," : Ex\xe9cutez l'installateur et suivez les instructions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"V\xe9rification")," : Ouvrez une invite de commande et tapez ",(0,i.kt)("inlineCode",{parentName:"li"},"vagrant --version")," pour v\xe9rifier l'installation.")),(0,i.kt)("h4",{id:"partie-2-cr\xe9ation-des-vms"},"Partie 2: Cr\xe9ation des VMs"),(0,i.kt)("h5",{id:"configuration-des-vms"},"Configuration des VMs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Cr\xe9ation du dossier de projet")," : Cr\xe9ez un dossier pour votre projet et naviguez dans ce dossier."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Initialisation de Vagrant")," : Ex\xe9cutez ",(0,i.kt)("inlineCode",{parentName:"li"},"vagrant init")," pour cr\xe9er un fichier ",(0,i.kt)("inlineCode",{parentName:"li"},"Vagrantfile"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Configuration du ",(0,i.kt)("inlineCode",{parentName:"strong"},"Vagrantfile"))," :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"D\xe9finissez les VMs souhait\xe9es (h1, h2, SW1, SW2, OPENDAYLIGHT)."),(0,i.kt)("li",{parentName:"ul"},"Utilisez le script pour configurer les VM."),(0,i.kt)("li",{parentName:"ul"},'Pour chaque VM, sp\xe9cifiez la configuration r\xe9seau en mode "priv\xe9".')))),(0,i.kt)("h5",{id:"exemple-de-configuration-pour-une-vm"},"Exemple de Configuration pour une VM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'Vagrant.configure("2") do |config|\n  # VM called H1\n  config.ssh.forward_agent = true\n  config.ssh.forward_x11 = true\n  config.vm.define "h1" do |h1|\n    h1.vm.box = "ubuntu/mantic64"\n    h1.vm.hostname = "h1"\n    h1.vm.network "private_network", ip: "192.168.56.10"\n  end\n\n  # VM called H2\n  config.vm.define "h2" do |h2|\n    h2.vm.box = "ubuntu/mantic64"\n    h2.vm.hostname = "h2"\n    h2.vm.network "private_network", ip: "192.168.56.11"\n  end\n\n  # VM called OPENDAYLIGHT\n  config.vm.define "OPENDAYLIGHT" do |odl|\n    odl.vm.box = "ubuntu/mantic64"\n    odl.vm.hostname = "opendaylight"\n    odl.vm.network "private_network", ip: "192.168.56.12"\n  end\n\n  # VM called SW1 \n  config.vm.define "SW1" do |sw1|\n    sw1.vm.box = "ubuntu/mantic64"\n    sw1.vm.hostname = "SW1"\n    sw1.vm.network "private_network", ip: "192.168.56.13"\n  end\n\n  # VM called SW2 \n  config.vm.define "SW2" do |sw2|\n    sw2.vm.box = "ubuntu/mantic64"\n    sw2.vm.hostname = "sw2"\n    sw2.vm.network "private_network", ip: "192.168.56.14"\n  end\nend\n')),(0,i.kt)("h4",{id:"partie-3-lancement-et-v\xe9rification"},"Partie 3: Lancement et V\xe9rification"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lancement des VMs")," : Ex\xe9cutez ",(0,i.kt)("inlineCode",{parentName:"li"},"vagrant up")," pour d\xe9marrer toutes les VMs configur\xe9es."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Acc\xe8s aux VMs")," : Utilisez ",(0,i.kt)("inlineCode",{parentName:"li"},"vagrant ssh [nom_vm]")," pour acc\xe9der \xe0 chaque VM."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"V\xe9rification de la configuration r\xe9seau")," : Dans chaque VM, utilisez des commandes comme ",(0,i.kt)("inlineCode",{parentName:"li"},"ifconfig")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"ip a")," pour v\xe9rifier les configurations r\xe9seau.")),(0,i.kt)("h2",{id:"installation-dopenstack-sur-h1"},"Installation d'OpenStack sur h1"),(0,i.kt)("h3",{id:"introduction-1"},"Introduction"),(0,i.kt)("p",null,"Nous allons proc\xe9der \xe0 l'installation d'OpenStack sur la machine virtuelle h1. OpenStack est une plateforme de cloud computing qui permet de g\xe9rer de grands groupes de technologies de virtualisation. L'installation sera r\xe9alis\xe9e \xe0 travers la modification du ",(0,i.kt)("inlineCode",{parentName:"p"},"Vagrantfile")," et l'utilisation de Vagrant pour g\xe9rer les ressources de la VM."),(0,i.kt)("h3",{id:"configuration-de-h1-dans-vagrant"},"Configuration de h1 dans Vagrant"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Modification du ",(0,i.kt)("inlineCode",{parentName:"strong"},"Vagrantfile"))," : Pour pr\xe9parer h1 \xe0 accueillir OpenStack, modifiez le ",(0,i.kt)("inlineCode",{parentName:"p"},"Vagrantfile")," en ajoutant les configurations suivantes \xe0 la section d\xe9di\xe9e \xe0 h1 :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'config.vm.define "h1" do |h1|\nh1.vm.box = "ubuntu/mantic64"\nh1.vm.hostname = "h1"\nh1.vm.network "private_network", ip: "192.168.56.10"\n\n# Configuration r\xe9seau en mode pont\xe9 de VM1\nh1.vm.network "public_network", bridge: "wlan0" \n\n# Configuration du fournisseur VirtualBox de VM1\nh1.vm.provider "virtualbox" do |vb|\n  vb.memory = "8192"  # 8 GB de RAM\n  vb.cpus = 4  # 4 c\u0153urs de CPU\n  vb.name = "TP3_R5ROM11_OPENSTACK"\n  vb.customize ["modifyvm", :id, "--nested-hw-virt", "on"]\nend\n\n# Provisionnement de VM1\nh1.vm.provision "shell", inline: <<-SHELL\n  sudo snap install microstack --edge --classic\n  PATH=/snap/bin:$PATH /snap/bin/microstack.init --auto --control\nSHELL\nend\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Rechargement de la Configuration")," : Appliquez ces changements en ex\xe9cutant ",(0,i.kt)("inlineCode",{parentName:"p"},"vagrant reload")," dans votre terminal."))),(0,i.kt)("h3",{id:"acc\xe8s-\xe0-linterface-openstack"},"Acc\xe8s \xe0 l'interface OpenStack"),(0,i.kt)("p",null,"Une fois OpenStack install\xe9 et la VM configur\xe9e, suivez ces \xe9tapes pour acc\xe9der \xe0 l'interface web d'OpenStack :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Obtention du Mot de Passe OpenStack")," :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Connectez-vous \xe0 h1 via ",(0,i.kt)("inlineCode",{parentName:"li"},"vagrant ssh h1"),"."),(0,i.kt)("li",{parentName:"ul"},"Ex\xe9cutez cette commande pour r\xe9cup\xe9rer le mot de passe de l'interface OpenStack :",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo snap get microstack config.credentials.keystone-password\n"))),(0,i.kt)("li",{parentName:"ul"},"Notez ce mot de passe pour l'utiliser ult\xe9rieurement.")))),(0,i.kt)("h2",{id:"installation-et-configuration-dopendaylight"},"Installation et Configuration d'OpenDaylight"),(0,i.kt)("h3",{id:"configuration-du-contr\xf4leur-sdn-opendaylight"},"Configuration du Contr\xf4leur SDN OpenDaylight"),(0,i.kt)("h4",{id:"installation-dopendaylight-sur-la-machine-opendaylight"},"Installation d'OpenDaylight sur la Machine OPENDAYLIGHT"),(0,i.kt)("p",null,"Pour installer OpenDaylight sur la machine d\xe9sign\xe9e OPENDAYLIGHT, suivez ces commandes :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://nexus.opendaylight.org/content/repositories/opendaylight.release/org/opendaylight/integration/karaf/0.18.1/karaf-0.18.1.tar.gz\n\ntar -xzvf karaf-0.18.1.tar.gz\n\ncd karaf-0.18.1\n\n./bin/karaf\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Remarque Importante")," : L'installation de Java peut \xeatre n\xe9cessaire pour utiliser Karaf. Si c'est le cas, installez Java avec ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt install openjdk-17-jdk"),"."),(0,i.kt)("p",null,"Une fois Karaf lanc\xe9, actualisez la liste des plugins et installez les plugins openflow, essentiels pour g\xe9rer les switchs via le contr\xf4leur SDN, avec les commandes suivantes :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"feature:repo-refresh\n\nfeature:install odl-openflowplugin-southbound \n")),(0,i.kt)("h3",{id:"configuration-des-switchs"},"Configuration des Switchs"),(0,i.kt)("h4",{id:"cr\xe9ation-dun-r\xe9seau-virtuel-nfv"},"Cr\xe9ation d'un R\xe9seau Virtuel (NFV)"),(0,i.kt)("p",null,"Dans cette architecture, le r\xe9seau est enti\xe8rement virtualis\xe9 dans une machine h\xf4te. Pour cela, installez OpenvSwitch, une solution open-source pour virtualiser des switchs, sur les machines virtuelles (h1, h2, SW1, SW2) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install openvswitch-switch\n")),(0,i.kt)("p",null,"Apr\xe8s l'installation d'OpenvSwitch, cr\xe9ez un bridge et une interface interne pour chaque switch virtuel sur les quatre machines :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Sur h1, h2, SW1, SW2\nsudo ovs-vsctl add-br br0\nsudo ovs-vsctl add-port br0 br0-int -- set interface br0-int type=internal\n")),(0,i.kt)("h4",{id:"interconnexion-des-switchs-sw1-et-sw2"},"Interconnexion des Switchs SW1 et SW2"),(0,i.kt)("p",null,"Cr\xe9ez un lien VXLAN entre les deux switchs (SW1 et SW2) en utilisant les commandes suivantes :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Sur SW1\nsudo ovs-vsctl add-port br0 vx1 -- set Interface vx1 type=vxlan options:remote_ip=192.168.56.14 options:key=2000\n\n# Sur SW2\nsudo ovs-vsctl add-port br0 vx1 -- set Interface vx1 type=vxlan options:remote_ip=192.168.56.13 options:key=2000\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important")," : Assurez-vous que les quatre machines (h1, h2, SW1, SW2) poss\xe8dent des adresses IP sur leur interface secondaire et peuvent communiquer entre elles."),(0,i.kt)("h3",{id:"configuration-des-h\xf4tes"},"Configuration des H\xf4tes"),(0,i.kt)("p",null,"Connectez les h\xf4tes h1 et h2 \xe0 leurs switchs respectifs (SW1 et SW2) en utilisant des liens VXLAN :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# h1 vers SW1\nsudo ovs-vsctl add-port br0 vx1 -- set interface vx1 type=vxlan options:remote_ip=192.168.56.13 options:key=2001\n# SW1 vers h1\nsudo ovs-vsctl add-port br0 vx2 -- set interface vx2 type=vxlan options:remote_ip=192.168.56.10 options:key=2001\n\n# h2 vers SW2\nsudo ovs-vsctl add-port br0 vx1 -- set interface vx1 type=vxlan options:remote_ip=192.168.56.14 options:key=2001\n# SW2 vers h2\nsudo ovs-vsctl add-port br0 vx2 -- set interface vx2 type=vxlan options:remote_ip=192.168.56.11 options:key=2001\n")),(0,i.kt)("h4",{id:"configuration-du-controleur-dans-les-switch"},"Configuration du controleur dans les Switch"),(0,i.kt)("p",null,"Pour chaque switch SW1 et SW2 il faut leur sp\xe9cifier la pr\xe9sence de notre controleur SDN et pour ce faire il faut utiliser la commande  :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ovs-vsctl set bridge br0 protocols=OpenFlow10 -- set-controller br0 tcp:192.168.56.12:6633\n")),(0,i.kt)("h3",{id:"test-de-fonctionnement"},"Test de fonctionnement"),(0,i.kt)("p",null,"Tout ce qu'il reste \xe0 faire maintenant est de tester cette configuration en attribuant des adresses IP superpos\xe9es aux h\xf4tes et en effectuant un test ping. Par r\xe9seau superpos\xe9, nous entendons ce r\xe9seau logique que nous avons construit en utilisant des liens VXLAN et des switchs OvS par-dessus notre r\xe9seau. Les h\xf4tes font certainement partie de ce r\xe9seau, donc nous devrions \xe9galement leur attribuer de nouvelles adresses IP pour ce r\xe9seau. Sur h1 et h2, nous ex\xe9cutons :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Sur h1\nsudo ip addr add 100.0.0.101/24 dev br0-int\nsudo ip link set br0-int up\n\n# Sur h2\nsudo ip addr add 100.0.0.102/24 dev br0-int\nsudo ip link set br0-int up\n\n")),(0,i.kt)("p",null," Puis v\xe9rifier la que le bon fonctionnement de l'architecture \xe0 l'aide d'un ping de h1 vers h2 ou inversement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Sur h1\nping 100.0.0.102\n\n# Sur h2\nping 100.0.0.101\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Webographie :"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://infoloup.no-ip.org/virtualbox-debian11-openvswitch-creation/"},"https://infoloup.no-ip.org/virtualbox-debian11-openvswitch-creation/")),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@blackvvine/sdn-part-2-building-an-sdn-playground-on-the-cloud-using-open-vswitch-and-opendaylight-a0e2de029ce1"},"https://medium.com/@blackvvine/sdn-part-2-building-an-sdn-playground-on-the-cloud-using-open-vswitch-and-opendaylight-a0e2de029ce1"))),(0,i.kt)("h2",{id:"analyse-de-trames-avec-wireshark-sur-h2-via-redirection-ssh"},"Analyse de Trames avec Wireshark sur H2 via Redirection SSH"),(0,i.kt)("p",null,"Pour analyser les trames r\xe9seau sur la machine virtuelle H2, nous utiliserons Wireshark. Cette op\xe9ration n\xe9cessitera la redirection SSH, donc assurez-vous d'avoir les outils n\xe9cessaires install\xe9s sur votre syst\xe8me Windows, comme un serveur X11 (par exemple, Xming ou VcXsrv)."),(0,i.kt)("h3",{id:"\xe9tapes-dinstallation-et-de-configuration-"},"\xc9tapes d'installation et de configuration :"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Installer Wireshark sur H2")," :\nEx\xe9cutez la commande suivante dans le terminal de H2 pour installer Wireshark :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"sudo apt install wireshark\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configurer la Redirection X11 sous Windows")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Installez un serveur X11, tel que Xming ou VcXsrv, sur votre syst\xe8me Windows."),(0,i.kt)("li",{parentName:"ul"},"Assurez-vous que la redirection X11 est activ\xe9e dans votre client SSH."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Lancer Wireshark via SSH avec Redirection X11")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lancez Wireshark avec la commande suivante, qui pr\xe9serve les variables d'environnement pour la redirection X11 :",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"sudo -E wireshark\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Effectuer la Capture de Trames")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dans Wireshark, choisissez ",(0,i.kt)("inlineCode",{parentName:"li"},"any")," pour l'interface d'\xe9coute."),(0,i.kt)("li",{parentName:"ul"},"Appliquez le filtre ",(0,i.kt)("inlineCode",{parentName:"li"},"vxlan")," pour filtrer les paquets sp\xe9cifiques \xe0 VXLAN."),(0,i.kt)("li",{parentName:"ul"},"D\xe9marrez la capture et proc\xe9dez \xe0 des actions r\xe9seau (comme un ping) pour g\xe9n\xe9rer du trafic.")))),(0,i.kt)("p",null,"Observez comment les trames ICMP sont encapsul\xe9es dans VXLAN, ce qui permet une analyse d\xe9taill\xe9e du trafic r\xe9seau \xe0 travers le tunnel VXLAN."),(0,i.kt)("h2",{id:"installation-de-docker-et-ansible-sur-h2-et-provisionnement-dun-conteneur-docker-via-ansible"},"Installation de Docker et Ansible sur h2 et Provisionnement d'un Conteneur Docker via Ansible"),(0,i.kt)("h3",{id:"installation-de-docker-et-ansible-sur-h2"},"Installation de Docker et Ansible sur h2"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Installation de Docker")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Connectez-vous \xe0 h2 (par exemple, via ",(0,i.kt)("inlineCode",{parentName:"li"},"vagrant ssh h2")," si vous utilisez Vagrant)."),(0,i.kt)("li",{parentName:"ul"},"Mettez \xe0 jour le gestionnaire de paquets avec ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt update"),"."),(0,i.kt)("li",{parentName:"ul"},"Installez Docker en utilisant ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install docker.io"),"."),(0,i.kt)("li",{parentName:"ul"},"V\xe9rifiez l'installation avec ",(0,i.kt)("inlineCode",{parentName:"li"},"docker --version"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Installation d'Ansible")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Installez Ansible avec ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install ansible"),"."),(0,i.kt)("li",{parentName:"ul"},"Confirmez l'installation avec ",(0,i.kt)("inlineCode",{parentName:"li"},"ansible --version"),".")))),(0,i.kt)("h3",{id:"provisionnement-dun-conteneur-docker-via-ansible-sur-h2"},"Provisionnement d'un Conteneur Docker via Ansible sur h2"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Cr\xe9ation d'un Playbook Ansible")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cr\xe9ez un fichier YAML pour votre playbook Ansible, par exemple ",(0,i.kt)("inlineCode",{parentName:"li"},"docker_provision.yml"),"."),(0,i.kt)("li",{parentName:"ul"},"Dans ce fichier, d\xe9finissez les t\xe2ches n\xe9cessaires pour lancer un conteneur Docker."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Exemple de Playbook Ansible")," :\nVoici un exemple simple de playbook pour d\xe9marrer un conteneur Docker :"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\n- hosts: localhost\n  become: yes\n  tasks:\n    - name: Pull the latest Docker image\n      docker_image:\n        name: "ubuntu"\n        source: pull\n\n    - name: Run a Docker container\n      docker_container:\n        name: "mycontainer"\n        image: "ubuntu"\n        command: sleep 1d\n')),(0,i.kt)("p",{parentName:"li"}," Ce playbook tire l'image Docker d'Ubuntu et lance un conteneur nomm\xe9 ",(0,i.kt)("inlineCode",{parentName:"p"},"mycontainer")," ex\xe9cutant une simple commande.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ex\xe9cution du Playbook")," :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ex\xe9cutez le playbook avec la commande ",(0,i.kt)("inlineCode",{parentName:"li"},"ansible-playbook docker_provision.yml"),"."),(0,i.kt)("li",{parentName:"ul"},"Ansible va communiquer avec le Docker daemon sur h2 et ex\xe9cuter les t\xe2ches d\xe9finies.")))),(0,i.kt)("h3",{id:"v\xe9rification"},"V\xe9rification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apr\xe8s l'ex\xe9cution du playbook, v\xe9rifiez que le conteneur est en cours d'ex\xe9cution avec ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo docker ps"),".")),(0,i.kt)("h2",{id:"importation-des-vms-virtualbox-dans-gns3-et-connexion-au-switch-ethernet"},"Importation des VMs VirtualBox dans GNS3 et Connexion au Switch Ethernet"),(0,i.kt)("p",null,"Apr\xe8s avoir configur\xe9 vos machines virtuelles (VMs) avec Vagrant, la prochaine \xe9tape consiste \xe0 les importer dans GNS3 et les connecter \xe0 un switch Ethernet. Voici les \xe9tapes \xe0 suivre :"),(0,i.kt)("h3",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assurez-vous que GNS3 est install\xe9 sur votre machine."),(0,i.kt)("li",{parentName:"ul"},"V\xe9rifiez que VirtualBox est install\xe9 et que vos VMs Vagrant y sont accessibles.")),(0,i.kt)("h4",{id:"\xe9tape-1-configuration-de-gns3-pour-utiliser-virtualbox"},"\xc9tape 1: Configuration de GNS3 pour Utiliser VirtualBox"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ouvrez GNS3")," : Lancez l'application GNS3."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Configurer VirtualBox dans GNS3")," : ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Allez dans ",(0,i.kt)("inlineCode",{parentName:"li"},"Edit")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Preferences"),"."),(0,i.kt)("li",{parentName:"ul"},"Dans la section ",(0,i.kt)("inlineCode",{parentName:"li"},"VirtualBox"),", assurez-vous que le chemin vers VirtualBox est correctement configur\xe9.")))),(0,i.kt)("h4",{id:"\xe9tape-2-int\xe9gration-des-vms-vagrant-dans-gns3"},"\xc9tape 2: Int\xe9gration des VMs Vagrant dans GNS3"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ajouter une nouvelle VM VirtualBox dans GNS3")," : ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dans ",(0,i.kt)("inlineCode",{parentName:"li"},"Preferences")," sous ",(0,i.kt)("inlineCode",{parentName:"li"},"VirtualBox VMs"),", cliquez sur ",(0,i.kt)("inlineCode",{parentName:"li"},"New"),"."),(0,i.kt)("li",{parentName:"ul"},"S\xe9lectionnez la VM \xe0 importer depuis la liste des VMs VirtualBox disponibles."),(0,i.kt)("li",{parentName:"ul"},"Suivez les instructions pour l'ajouter \xe0 GNS3."),(0,i.kt)("li",{parentName:"ul"},"R\xe9p\xe9tez cette \xe9tape pour chaque VM (h1, h2, SW1, SW2).")))),(0,i.kt)("h4",{id:"\xe9tape-3-cr\xe9ation-du-projet-gns3-et-configuration-des-vms"},"\xc9tape 3: Cr\xe9ation du Projet GNS3 et Configuration des VMs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Cr\xe9ation d'un nouveau projet")," : Dans GNS3, cr\xe9ez un nouveau projet."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ajouter les VMs au projet")," : Glissez et d\xe9posez chaque VM import\xe9e dans l'espace de travail du projet."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Configurer les VMs")," :",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Double-cliquez sur chaque VM ajout\xe9e dans le projet pour ouvrir le menu contextuel."),(0,i.kt)("li",{parentName:"ul"},"Ajoutez une interface r\xe9seau suppl\xe9mentaire si n\xe9cessaire."),(0,i.kt)("li",{parentName:"ul"},"Cochez la case pour autoriser GNS3 \xe0 g\xe9rer toutes les interfaces de cette VM.")))),(0,i.kt)("h4",{id:"\xe9tape-4-connexion-des-vms-\xe0-un-switch-ethernet"},"\xc9tape 4: Connexion des VMs \xe0 un Switch Ethernet"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Ajouter un Switch Ethernet")," : ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Trouvez le switch Ethernet dans la barre lat\xe9rale de GNS3 (sous ",(0,i.kt)("inlineCode",{parentName:"li"},"Switches"),") et ajoutez-le \xe0 votre espace de travail."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Connecter les VMs au Switch")," : ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cliquez sur une VM, puis sur le switch Ethernet, et s\xe9lectionnez les interfaces \xe0 connecter."),(0,i.kt)("li",{parentName:"ul"},"R\xe9p\xe9tez cette op\xe9ration pour chaque VM.")))),(0,i.kt)("h4",{id:"remarques-importantes-"},"Remarques importantes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une fois les VMs configur\xe9es et ajout\xe9es dans GNS3, n\u2019utilisez plus les commandes Vagrant pour les g\xe9rer. Utilisez uniquement les fonctionnalit\xe9s de GNS3 pour d\xe9marrer, arr\xeater, ou modifier ces VMs."),(0,i.kt)("li",{parentName:"ul"},"Les modifications faites aux VMs via GNS3 ne seront pas refl\xe9t\xe9es dans Vagrant.")))}c.isMDXComponent=!0}}]);