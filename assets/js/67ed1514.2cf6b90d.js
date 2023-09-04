"use strict";(self.webpackChunkashvin=self.webpackChunkashvin||[]).push([[8309],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,v=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(v,o(o({ref:n},c),{},{components:t})):r.createElement(v,o({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={slug:"sdan-ztnet-install",title:"TP2-2 Installation du SDWAN ZTNET",authors:["ashvin","emerick"],tags:["sdwan","zeronet","ztnet"]},o="Documentation pour l'installation de ZTNET sur une VM Ubuntu avec Docker",s={permalink:"/ashvindocs/blog/sdan-ztnet-install",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-04-sdwan/index.md",source:"@site/blog/2023-09-04-sdwan/index.md",title:"TP2-2 Installation du SDWAN ZTNET",description:"ZTNET",date:"2023-09-04T00:00:00.000Z",formattedDate:"September 4, 2023",tags:[{label:"sdwan",permalink:"/ashvindocs/blog/tags/sdwan"},{label:"zeronet",permalink:"/ashvindocs/blog/tags/zeronet"},{label:"ztnet",permalink:"/ashvindocs/blog/tags/ztnet"}],readingTime:2.26,hasTruncateMarker:!1,authors:[{name:"PANCHOO Ashvin",title:"Etudiant en R\xe9seaux et T\xe9l\xe9coms",url:"https://github.com/apanchoo",imageURL:"https://github.com/apanchoo.png",key:"ashvin"},{name:"NANY Emerick",title:"Etudiant en R\xe9seaux et T\xe9l\xe9coms",url:"https://github.com/bleach100",imageURL:"https://github.com/bleach100.png",key:"emerick"}],frontMatter:{slug:"sdan-ztnet-install",title:"TP2-2 Installation du SDWAN ZTNET",authors:["ashvin","emerick"],tags:["sdwan","zeronet","ztnet"]}},l={authorsImageUrls:[void 0,void 0]},u=[{value:"Pr\xe9sentation",id:"pr\xe9sentation",level:2},{value:"Pr\xe9requis",id:"pr\xe9requis",level:2},{value:"\xc9tapes d&#39;installation",id:"\xe9tapes-dinstallation",level:2},{value:"a. Cr\xe9ez le fichier docker-compose",id:"a-cr\xe9ez-le-fichier-docker-compose",level:3},{value:"b. Lancer ZTNET",id:"b-lancer-ztnet",level:3},{value:"c. Premi\xe8re connexion",id:"c-premi\xe8re-connexion",level:3},{value:"Points \xe0 noter",id:"points-\xe0-noter",level:2},{value:"Variables d&#39;environnement",id:"variables-denvironnement",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.licdn.com/dms/image/D5612AQGy22EBZBsKVg/article-cover_image-shrink_720_1280/0/1664574726727?e=2147483647&v=beta&t=eneK67yR1y49qXq2HRQev_651XodTDnSWA1ODov78F8",alt:"ZTNET"})),(0,a.kt)("h2",{id:"pr\xe9sentation"},"Pr\xe9sentation"),(0,a.kt)("p",null,"ZTNET est une solution SD-WAN qui permet aux organisations de d\xe9ployer facilement des r\xe9seaux d\xe9finis par logiciel. Cette documentation vise \xe0 guider les utilisateurs \xe0 travers le processus d'installation de ZTNET sur une machine virtuelle (VM) Ubuntu en utilisant Docker, une plateforme de conteneurisation. En suivant ces \xe9tapes, les utilisateurs pourront mettre en place une instance ZTNET et acc\xe9der \xe0 son interface web pour g\xe9rer leurs r\xe9seaux."),(0,a.kt)("h2",{id:"pr\xe9requis"},"Pr\xe9requis"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Une VM Ubuntu Server."),(0,a.kt)("li",{parentName:"ul"},"Docker install\xe9.")),(0,a.kt)("h2",{id:"\xe9tapes-dinstallation"},"\xc9tapes d'installation"),(0,a.kt)("h3",{id:"a-cr\xe9ez-le-fichier-docker-compose"},"a. Cr\xe9ez le fichier docker-compose"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Cr\xe9ez un fichier appel\xe9 ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),"."),(0,a.kt)("li",{parentName:"ol"},"Copiez et collez le contenu fourni ci-dessus dans ce fichier.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.1"\nservices:\n  postgres:\n    image: postgres:15.2-alpine\n    container_name: postgres\n    restart: unless-stopped\n    environment:\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_DB: ztnet\n    volumes:\n      - postgres-data:/var/lib/postgresql/data\n    networks:\n      - app-network\n\n  zerotier:\n    image: zyclonite/zerotier:1.10.6\n    hostname: zerotier\n    container_name: zerotier\n    restart: unless-stopped\n    volumes:\n      - zerotier:/var/lib/zerotier-one\n    cap_add:\n      - NET_ADMIN\n      - SYS_ADMIN\n    devices:\n      - /dev/net/tun:/dev/net/tun\n    networks:\n      - app-network\n    ports:\n      - "9993:9993/udp"\n    environment:\n      - ZT_OVERRIDE_LOCAL_CONF=true\n      - ZT_ALLOW_MANAGEMENT_FROM=172.31.255.0/29\n\n  ztnet:\n    image: sinamics/ztnet:latest\n    container_name: ztnet\n    working_dir: /app\n    volumes:\n      - zerotier:/var/lib/zerotier-one\n    restart: unless-stopped\n    ports:\n      - 3000:3000\n    environment:\n      POSTGRES_HOST: postgres\n      POSTGRES_PORT: 5432\n      POSTGRES_USER: postgres\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_DB: ztnet\n      NEXTAUTH_URL: "http://localhost:3000"\n      NEXTAUTH_SECRET: "random_secret"\n    networks:\n      - app-network\n    links:\n      - postgres\n    depends_on:\n      - postgres\n      - zerotier\nvolumes:\n  zerotier:\n  postgres-data:\n\nnetworks:\n  app-network:\n    driver: bridge\n    ipam:\n      driver: default\n      config:\n        - subnet: 172.31.255.0/29\n')),(0,a.kt)("h3",{id:"b-lancer-ztnet"},"b. Lancer ZTNET"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ouvrez un terminal."),(0,a.kt)("li",{parentName:"ol"},"Naviguez vers le r\xe9pertoire o\xf9 se trouve le fichier ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),"."),(0,a.kt)("li",{parentName:"ol"},"Ex\xe9cutez la commande:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n"))),(0,a.kt)("li",{parentName:"ol"},"Une fois l'action termin\xe9e, ouvrez un navigateur et visitez ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000")," pour acc\xe9der \xe0 l'interface web ZTNET.")),(0,a.kt)("h3",{id:"c-premi\xe8re-connexion"},"c. Premi\xe8re connexion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lors de la premi\xe8re inscription sur l'interface ZTNET, le premier utilisateur enregistr\xe9 obtiendra automatiquement les privil\xe8ges d'administrateur. ")),(0,a.kt)("h2",{id:"points-\xe0-noter"},"Points \xe0 noter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"En tant qu'administrateur, vous avez des capacit\xe9s uniques non disponibles pour les utilisateurs normaux, telles que la capacit\xe9 de voir tous les comptes enregistr\xe9s sur le contr\xf4leur."),(0,a.kt)("li",{parentName:"ul"},"Les administrateurs ne peuvent pas interagir ou modifier directement les r\xe9seaux des autres utilisateurs.")),(0,a.kt)("h2",{id:"variables-denvironnement"},"Variables d'environnement"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Vous pouvez personnaliser plusieurs variables d'environnement incluses dans le fichier ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," selon vos besoins."),(0,a.kt)("li",{parentName:"ol"},"Les variables comme ",(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_HOST"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"POSTGRES_PORT"),", etc., sont associ\xe9es \xe0 la base de donn\xe9es PostgreSQL et \xe0 NextAuth pour l'authentification."),(0,a.kt)("li",{parentName:"ol"},"Pour modifier ces valeurs, mettez simplement \xe0 jour la variable d'environnement correspondante dans le fichier ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),"."),(0,a.kt)("li",{parentName:"ol"},"Il est conseill\xe9 de ne pas modifier les variables d'environnement syst\xe9miques utilis\xe9es par le service ZeroTier, sauf si vous savez ce que vous faites.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"En suivant ces \xe9tapes, vous aurez configur\xe9 et lanc\xe9 ZTNET sur votre VM Ubuntu. Assurez-vous de bien g\xe9rer les privil\xe8ges administratifs et de comprendre l'impact des modifications apport\xe9es aux variables d'environnement pour garantir le fonctionnement optimal de votre installation."))}m.isMDXComponent=!0}}]);