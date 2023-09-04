---
slug: sdan-ztnet-install
title: TP2-2 Installation du SDWAN ZTNET
authors: [ashvin,emerick]

tags: [sdwan, zeronet, ztnet]
---
# Documentation pour l'installation de ZTNET sur une VM Ubuntu avec Docker
![ZTNET](https://media.licdn.com/dms/image/D5612AQGy22EBZBsKVg/article-cover_image-shrink_720_1280/0/1664574726727?e=2147483647&v=beta&t=eneK67yR1y49qXq2HRQev_651XodTDnSWA1ODov78F8)
## Présentation
ZTNET est une solution SD-WAN qui permet aux organisations de déployer facilement des réseaux définis par logiciel. Cette documentation vise à guider les utilisateurs à travers le processus d'installation de ZTNET sur une machine virtuelle (VM) Ubuntu en utilisant Docker, une plateforme de conteneurisation. En suivant ces étapes, les utilisateurs pourront mettre en place une instance ZTNET et accéder à son interface web pour gérer leurs réseaux.
## Prérequis
- Une VM Ubuntu Server.
- Docker installé.

## Étapes d'installation

### a. Créez le fichier docker-compose
1. Créez un fichier appelé `docker-compose.yml`.
2. Copiez et collez le contenu fourni ci-dessus dans ce fichier.
```yml
version: "3.1"
services:
  postgres:
    image: postgres:15.2-alpine
    container_name: postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: ztnet
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - app-network

  zerotier:
    image: zyclonite/zerotier:1.10.6
    hostname: zerotier
    container_name: zerotier
    restart: unless-stopped
    volumes:
      - zerotier:/var/lib/zerotier-one
    cap_add:
      - NET_ADMIN
      - SYS_ADMIN
    devices:
      - /dev/net/tun:/dev/net/tun
    networks:
      - app-network
    ports:
      - "9993:9993/udp"
    environment:
      - ZT_OVERRIDE_LOCAL_CONF=true
      - ZT_ALLOW_MANAGEMENT_FROM=172.31.255.0/29

  ztnet:
    image: sinamics/ztnet:latest
    container_name: ztnet
    working_dir: /app
    volumes:
      - zerotier:/var/lib/zerotier-one
    restart: unless-stopped
    ports:
      - 3000:3000
    environment:
      POSTGRES_HOST: postgres
      POSTGRES_PORT: 5432
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: ztnet
      NEXTAUTH_URL: "http://localhost:3000"
      NEXTAUTH_SECRET: "random_secret"
    networks:
      - app-network
    links:
      - postgres
    depends_on:
      - postgres
      - zerotier
volumes:
  zerotier:
  postgres-data:

networks:
  app-network:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 172.31.255.0/29
```

### b. Lancer ZTNET
1. Ouvrez un terminal.
2. Naviguez vers le répertoire où se trouve le fichier `docker-compose.yml`.
3. Exécutez la commande:
   ```bash
   docker-compose up -d
   ```
4. Une fois l'action terminée, ouvrez un navigateur et visitez `http://localhost:3000` pour accéder à l'interface web ZTNET.

### c. Première connexion
- Lors de la première inscription sur l'interface ZTNET, le premier utilisateur enregistré obtiendra automatiquement les privilèges d'administrateur. 

## Points à noter
- En tant qu'administrateur, vous avez des capacités uniques non disponibles pour les utilisateurs normaux, telles que la capacité de voir tous les comptes enregistrés sur le contrôleur.
- Les administrateurs ne peuvent pas interagir ou modifier directement les réseaux des autres utilisateurs.

## Variables d'environnement
1. Vous pouvez personnaliser plusieurs variables d'environnement incluses dans le fichier `docker-compose.yml` selon vos besoins.
2. Les variables comme `POSTGRES_HOST`, `POSTGRES_PORT`, etc., sont associées à la base de données PostgreSQL et à NextAuth pour l'authentification.
3. Pour modifier ces valeurs, mettez simplement à jour la variable d'environnement correspondante dans le fichier `docker-compose.yml`.
4. Il est conseillé de ne pas modifier les variables d'environnement systémiques utilisées par le service ZeroTier, sauf si vous savez ce que vous faites.

## Conclusion
En suivant ces étapes, vous aurez configuré et lancé ZTNET sur votre VM Ubuntu. Assurez-vous de bien gérer les privilèges administratifs et de comprendre l'impact des modifications apportées aux variables d'environnement pour garantir le fonctionnement optimal de votre installation.