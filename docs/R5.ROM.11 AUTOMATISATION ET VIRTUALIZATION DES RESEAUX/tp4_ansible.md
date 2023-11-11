---
sidebar_position: 1
author: Ashvin
---

# TP4 ANSIBLE Documentation

`Autheurs : PANCHOO Ashvin NANY Emerick`

## Présentation de l'infrastructure
Nous allons réaliser une infrastrcuture simple composé d'un serveur Ansible qui vas pouvoir pousser la configuration d'un switch.

# SERVER
## Installation ANSIBLE
Sur le server Debian nous installons pip (gestionnaire de paquet de python) à l'aide de apt
```sh
sudo apt install pip3
```  

   :::Attention

   Il est aussi necessaire d'installer le paquet paramiko avec la commande `pip install paramiko`

   :::

Une fois pip installé nous pouvons installer ansible à  l'aide de la commande 

```sh

```
Une fois ansible installé nous l'ajoutons aux PATH en modifant le fichier bashrc puis il faut le source pour rendre la modification effective.

```sh

```
## Configuration de la Vault de ANSIBLE
Ansible dispose d'une base de donnée contenant tout les équipement qu'il faut orchestré. Une 

rajouter un schéma d'interaction


