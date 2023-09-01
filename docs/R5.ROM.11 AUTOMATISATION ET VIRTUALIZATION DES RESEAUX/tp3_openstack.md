---
sidebar_position: 1
author: Ashvin
---

# TP3 déploiement d'OpenStack avec Vagrant 
`📝 Auteur : PANCHOO Ashvin 01-09-2023`

![Vagrant](https://f4b1.com/files/img/old/vagrant-logo-vm.png)

## Introduction

Cette documentation vous guide à travers les étapes nécessaires pour déployer une instance d'OpenStack sur une machine virtuelle (VM) Ubuntu Server en utilisant Vagrant. Cette VM sera configurée avec 8 GB de RAM, 4 cœurs de CPU et une série de logiciels préinstallés pour le fonctionnement d'OpenStack. Cette procédure est compatible avec les systèmes d'exploitation Linux, macOS et Windows.

![Openstack](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/OpenStack%C2%AE_Logo_2016.svg/800px-OpenStack%C2%AE_Logo_2016.svg.png)

## Prérequis

1. **Vagrant**: Assurez-vous que Vagrant est installé sur votre système. Si ce n'est pas le cas, téléchargez-le et installez-le depuis [le site officiel de Vagrant](https://www.vagrantup.com/downloads).

2. **VirtualBox**: Ce `Vagrantfile` est configuré pour utiliser VirtualBox comme fournisseur de service de virtualisation. Assurez-vous que VirtualBox est installé sur votre système. Vous pouvez le télécharger depuis [le site officiel de VirtualBox](https://www.virtualbox.org/wiki/Downloads).

3. **Terminal ou Invite de Commandes**: Sur Linux et macOS, vous utiliserez le terminal. Sur Windows, vous utiliserez l'invite de commandes ou PowerShell.

## Création du Vagrantfile

1. **Créez un nouveau dossier `TP3_R5ROM11`**:
    - Sur Linux et macOS, ouvrez un terminal et tapez :
        ```bash
        mkdir ~/TP3_R5ROM11
        ```
    - Sur Windows, ouvrez l'invite de commandes ou PowerShell et tapez :
        ```cmd
        mkdir %USERPROFILE%\Documents\TP3_R5ROM11
        ```
   
2. **Naviguez vers ce nouveau dossier**:
    - Sur Linux et macOS :
        ```bash
        cd ~/TP3_R5ROM11
        ```
    - Sur Windows :
        ```cmd
        cd %USERPROFILE%\Documents\TP3_R5ROM11
        ```

3. **Ouvrez un éditeur de texte** de votre choix et créez un nouveau fichier appelé `Vagrantfile` (sans extension de fichier) dans ce dossier.

4. **Copiez et collez** le contenu suivant dans le fichier `Vagrantfile` :

```bash
Vagrant.configure("2") do |config|
  config.vm.box = "sloopstash/ubuntu-22-04-server"
  config.vm.box_version = "1.1.1"

  # Configurer le réseau en mode ponté
  config.vm.network "public_network", bridge: "wlan0"  # Utiliser wlan0 pour le pont

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "8192"  # 8 GB de RAM
    vb.cpus = 4  # 4 cœurs de CPU
    vb.name = "TP3_R5ROM11_OPENSTACK"
    vb.customize ["modifyvm", :id, "--nested-hw-virt", "on"]
  end

  config.vm.provision "shell", inline: <<-SHELL
    sudo snap install microstack --edge --classic
    PATH=/snap/bin:$PATH /snap/bin/microstack.init --auto --control
  SHELL
end

```
:::warning 
N'oublier pas de modifier `wlan0` par l'interface correspondante de votre machine physique.
:::

5. **Enregistrez le fichier** et fermez l'éditeur de texte.

## Étapes d'utilisation

### Sur Linux et macOS

1. **Ouvrez un Terminal**.

2. **Naviguez vers le dossier `TP3_R5ROM11`** dans votre répertoire home.

    ```bash
    cd ~/TP3_R5ROM11
    ```

3. **Démarrez la VM**.

    ```bash
    vagrant up
    ```

4. **Connectez-vous à la VM**.

    ```bash
    vagrant ssh
    ```

### Sur Windows

1. **Ouvrez l'Invite de Commandes ou PowerShell**.

2. **Naviguez vers le dossier `TP3_R5ROM11`** dans votre répertoire "Documents".

    ```cmd
    cd %USERPROFILE%\Documents\TP3_R5ROM11
    ```

3. **Démarrez la VM**.

    ```cmd
    vagrant up
    ```

4. **Connectez-vous à la VM**.

    ```cmd
    vagrant ssh
    ```



:::note  
> 🛑 Mise à jour de la Configuration
> Si vous modifiez le `Vagrantfile` après que la VM soit en cours d'exécution, utilisez la commande suivante pour appliquer ces changements :
> 
> ```bash
> vagrant reload
> ```
> 
> Ou pour aussi réexécuter les scripts de provisionnement :
> 
> ```bash
> vagrant reload --provision
> ```
:::

:::tip ASTUCE
> ⚠️ **Arrêt et Destruction de la VM**
> 
> Pour éteindre la VM sans la supprimer :
> 
> ```bash
> vagrant halt
> ```
> 
> Pour supprimer complètement la VM :
> 
> ```bash
> vagrant destroy
> ```
:::

## Accès à l'interface OpenStack

Après avoir correctement lancé et configuré votre machine virtuelle avec OpenStack, les étapes suivantes vous permettront d'accéder à l'interface web d'OpenStack.

### Obtenir le mot de passe de l'interface OpenStack

1. Ouvrez un terminal et connectez-vous à votre VM en utilisant `vagrant ssh`.

2. Utilisez la commande suivante pour obtenir le mot de passe de l'interface OpenStack :

    ```bash
    sudo snap get microstack config.credentials.keystone-password
    ```

    Notez ce mot de passe, car vous en aurez besoin pour vous connecter à l'interface OpenStack.

### Accéder à l'interface via un navigateur web

1. Toujours dans le terminal de la VM, utilisez la commande suivante pour obtenir l'adresse IP de la machine :

    ```bash
    ip a
    ```

    Repérez l'adresse IP associée à l'interface réseau que vous avez configurée (probablement associée à `enp0s8` ou une interface similaire).

2. Ouvrez un navigateur web sur votre machine hôte et tapez l'adresse IP que vous avez obtenue à l'étape précédente. Vous devriez être dirigé vers la page de connexion d'OpenStack.

3. Utilisez `admin` comme identifiant et le mot de passe que vous avez obtenu plus tôt pour vous connecter.

![Dashboard](https://i.ibb.co/Q92vVm9/image.png)
