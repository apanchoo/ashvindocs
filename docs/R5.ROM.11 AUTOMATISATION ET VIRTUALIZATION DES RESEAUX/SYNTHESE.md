---
sidebar_position: 1
author: Ashvin
---

# DOCUMENTATION DE SYNTHESE R5ROM11
`📝 Auteur : PANCHOO Ashvin 01-09-2023`
`📝 Auteur : NANY Emerick 01-09-2023`
`📝 Auteur : KU Siou 01-09-2023`
## INTRODUCTION 
Dans ce document, nous vous fournirons une présentation détaillée des instructions nécessaires à la mise en place de l'architecture souhaitée. Cette architecture est construite à partir de plusieurs éléments clés, notamment :

1. **OpenStack** : Une plateforme de cloud computing open source qui permet de déployer des services cloud publics et privés.
2. **Opendaylight** : Il s'agit d'un projet de réseau défini par logiciel (SDN) open source qui vise à améliorer la gestion des réseaux et l'automatisation.
3. **GNS3** : C'est un logiciel qui permet de simuler des réseaux complexes pour la formation, le test et le développement.
4. **ANSIBLE** : Un outil d'automatisation IT qui peut configurer des systèmes, déployer des logiciels et orchestrer des tâches plus complexes.
5. **Docker** : Une plateforme qui permet de créer, déployer et exécuter des applications dans des conteneurs.

Les interactions entre ces différents composants sont illustrées et expliquées dans les sections suivantes du document.

## PREREQUIS 

Afin de suivre cette documentation de manière optimale, nous supposons que les logiciels suivants sont déjà installés sur vos machines clientes : VirtualBox, Wireshark, GNS3 et Vagrant. 

Voici de brêves explications pour installer ces logiciels : 

1. **VirtualBox** :
   - **Site officiel** : [https://www.virtualbox.org/](https://www.virtualbox.org/)
   - **Instructions** :
     - Rendez-vous sur le site officiel de VirtualBox.
     - Téléchargez la version appropriée pour votre système d'exploitation.
     - Exécutez le fichier d'installation et suivez les instructions à l'écran.

2. **Wireshark** :
   - **Site officiel** : [https://www.wireshark.org/](https://www.wireshark.org/)
   - **Instructions** :
     - Allez sur le site officiel de Wireshark.
     - Téléchargez la version adaptée à votre OS.
     - Lancez le fichier d'installation et suivez les étapes indiquées.

3. **GNS3** :
   - **Site officiel** : [https://www.gns3.com/](https://www.gns3.com/)
   - **Instructions** :
     - Visitez le site officiel de GNS3.
     - Téléchargez la dernière version pour votre système.
     - Exécutez le programme d'installation et suivez les directives à l'écran.
     - Notez que GNS3 peut nécessiter des configurations supplémentaires en fonction de vos besoins, notamment l'ajout d'images d'équipement et l'intégration avec d'autres logiciels comme VirtualBox.

4. **Vagrant** :
   - **Site officiel** : [https://www.vagrantup.com/](https://www.vagrantup.com/)
   - **Instructions** :
     - Rendez-vous sur le site de Vagrant.
     - Téléchargez la version correspondant à votre OS.
     - Lancez le fichier d'installation et suivez les instructions fournies.
     - Une fois Vagrant installé, vous pourriez avoir besoin de l'intégrer avec un fournisseur de virtualisation, comme VirtualBox.


#### Partie 1: Installation de Vagrant

##### Sous Linux
1. **Mise à jour du système** : Commencez par mettre à jour le gestionnaire de paquets avec `sudo apt update` et `sudo apt upgrade`.
2. **Installation de Vagrant** : Installez Vagrant en utilisant `sudo apt install vagrant`.
3. **Vérification** : Vérifiez l'installation avec `vagrant --version`.

##### Sous Windows
1. **Téléchargement** : Allez sur le site officiel de Vagrant ([vagrantup.com](https://www.vagrantup.com/)) et téléchargez l'installateur pour Windows.
2. **Installation** : Exécutez l'installateur et suivez les instructions.
3. **Vérification** : Ouvrez une invite de commande et tapez `vagrant --version` pour vérifier l'installation.

#### Partie 2: Création des VMs

#####  Configuration des VMs
1. **Création du dossier de projet** : Créez un dossier pour votre projet et naviguez dans ce dossier.
2. **Initialisation de Vagrant** : Exécutez `vagrant init` pour créer un fichier `Vagrantfile`.
3. **Configuration du `Vagrantfile`** :
   - Définissez les VMs souhaitées (h1, h2, h3, h4, SW1, SW2, OPENDAYLIGHT).
   - Utilisez un script ou une configuration manuelle pour chaque VM.
   - Pour chaque VM, spécifiez la configuration réseau en mode "aucune connexion".

#####  Exemple de Configuration pour une VM
```ruby
Vagrant.configure("2") do |config|
  config.vm.define "h1" do |h1|
    h1.vm.box = "ubuntu/bionic64"
    # Autres configurations spécifiques à h1
    h1.vm.network "none"
  end
  # Répétez pour h2, h3, h4, SW1, SW2, OPENDAYLIGHT
end
```

####  Partie 3: Lancement et Vérification

1. **Lancement des VMs** : Exécutez `vagrant up` pour démarrer toutes les VMs configurées.
2. **Accès aux VMs** : Utilisez `vagrant ssh [nom_vm]` pour accéder à chaque VM.
3. **Vérification de la configuration réseau** : Dans chaque VM, utilisez des commandes comme `ifconfig` ou `ip a` pour vérifier les configurations réseau.

##  Importation des VMs VirtualBox dans GNS3 et Connexion au Switch Ethernet

Après avoir configuré vos machines virtuelles (VMs) avec Vagrant, la prochaine étape consiste à les importer dans GNS3 et les connecter à un switch Ethernet. Voici les étapes à suivre :

###  Prérequis
- Assurez-vous que GNS3 est installé sur votre machine.
- Assurez-vous que VirtualBox est installé et que vos VMs Vagrant y sont accessibles.

#### Étape 1: Configuration de GNS3 pour Utiliser VirtualBox
1. **Ouvrez GNS3** : Lancez l'application GNS3.
2. **Configuration de VirtualBox dans GNS3** : 
   - Allez dans `Edit` > `Preferences`.
   - Sous la section `VirtualBox`, vérifiez que le chemin vers VirtualBox est correctement configuré.

#### Étape 2: Importation des VMs dans GNS3
1. **Ajouter une nouvelle VM VirtualBox** : 
   - Toujours dans `Preferences`, sous `VirtualBox VMs`, cliquez sur `New`.
   - Sélectionnez la VM que vous voulez importer depuis la liste des VMs VirtualBox disponibles.
   - Suivez les instructions pour l'ajouter à GNS3.
   - Répétez pour chaque VM (h1, h2, h3, h4, SW1, SW2).

#### Étape 3: Création du Projet GNS3
1. **Création d'un nouveau projet** : Dans GNS3, créez un nouveau projet.
2. **Ajout des VMs au projet** : Glissez et déposez chaque VM importée dans l'espace de travail du projet.

#### Étape 4: Connexion des VMs au Switch Ethernet
1. **Ajout d'un Switch Ethernet** : 
   - Cherchez le switch Ethernet dans la barre latérale de GNS3 (sous `Switches`) et ajoutez-le à votre espace de travail.
2. **Connexion des VMs au Switch** : 
   - Cliquez sur une VM, puis sur le switch Ethernet, et choisissez les interfaces à connecter.
   - Répétez cette opération pour connecter toutes les VMs au switch.

##  Installation d'OpenStack sur h1

###  Introduction

Nous allons procéder à l'installation d'OpenStack sur la machine virtuelle h1. OpenStack est une plateforme de cloud computing qui permet de gérer de grands groupes de technologies de virtualisation. L'installation sera réalisée à travers la modification du `Vagrantfile` et l'utilisation de Vagrant pour gérer les ressources de la VM.

###  Configuration de h1 dans Vagrant

1. **Modification du `Vagrantfile`** : Pour préparer h1 à accueillir OpenStack, modifiez le `Vagrantfile` en ajoutant les configurations suivantes à la section dédiée à h1 :

    ```bash
    config.vm.provider "virtualbox" do |vb|
      vb.memory = "8192"  # Allouer 8 GB de RAM
      vb.cpus = 4  # Allouer 4 cœurs CPU
      vb.name = "TP3_R5ROM11_OPENSTACK"
      vb.customize ["modifyvm", :id, "--nested-hw-virt", "on"]
    end
    ```

2. **Rechargement de la Configuration** : Appliquez ces changements en exécutant `vagrant reload` dans votre terminal.

### Accès à l'interface OpenStack

Une fois OpenStack installé et la VM configurée, suivez ces étapes pour accéder à l'interface web d'OpenStack :

1. **Obtention du Mot de Passe OpenStack** :
   - Connectez-vous à h1 via `vagrant ssh`.
   - Exécutez cette commande pour récupérer le mot de passe de l'interface OpenStack :
     ```bash
     sudo snap get microstack config.credentials.keystone-password
     ```
   - Notez ce mot de passe pour l'utiliser ultérieurement.

##  Installation et Configuration d'OpenDaylight

### Configuration du Contrôleur SDN OpenDaylight

#### Installation d'OpenDaylight sur la Machine OPENDAYLIGHT
Pour installer OpenDaylight sur la machine désignée OPENDAYLIGHT, suivez ces commandes :

```bash
wget https://nexus.opendaylight.org/content/repositories/opendaylight.release/org/opendaylight/integration/karaf/0.18.1/karaf-0.18.1.tar.gz

tar -xzvf karaf-0.18.1.tar.gz

cd karaf-0.18.1

./bin/karaf
```

**Remarque Importante** : L'installation de Java peut être nécessaire pour utiliser Karaf. Si c'est le cas, installez Java avec `sudo apt install openjdk-17-jdk`.

Une fois Karaf lancé, actualisez la liste des plugins et installez les plugins openflow, essentiels pour gérer les switchs via le contrôleur SDN, avec les commandes suivantes :

```bash
feature:repo-refresh

feature:install odl-openflowplugin-southbound 
```

**Configuration de l'Adresse IP** : Sur la deuxième interface réseau de la machine OPENDAYLIGHT, configurez l'adresse IP suivante : `10.0.0.254/24`.

```bash
ip addr add 10.0.0.254/24 dev <interface2>
```
### Configuration des Switchs

#### Création d'un Réseau Virtuel (NFV)
Dans cette architecture, le réseau est entièrement virtualisé dans une machine hôte. Pour cela, installez OpenvSwitch, une solution open-source pour virtualiser des switchs, sur les machines virtuelles (h1, h2, SW1, SW2) :

```bash
sudo apt install openvswitch-switch
```

Avant de continuer ajouter l'adresse ip pour chaque machine (h1, h2, SW1, SW2) selon le plan d'adressage plus haut.

```bash
ip addr add 10.0.0.X/24 dev <interface2>
```

Après l'installation d'OpenvSwitch, créez un bridge et une interface interne pour chaque switch virtuel sur les quatre machines :

```bash
# Sur h1, h2, SW1, SW2
sudo ovs-vsctl add-br br0
sudo ovs-vsctl add-port br0 br0-int -- set interface br0-int type=internal
```

#### Interconnexion des Switchs SW1 et SW2
Créez un lien VXLAN entre les deux switchs (SW1 et SW2) en utilisant les commandes suivantes :

```bash
# Sur SW1
sudo ovs-vsctl add-port br0 vx1 -- set Interface vx1 type=vxlan options:remote_ip=10.0.0.2 options:key=2000

# Sur SW2
sudo ovs-vsctl add-port br0 vx1 -- set Interface vx1 type=vxlan options:remote_ip=10.0.0.1 options:key=2000
```

**Important** : Assurez-vous que les quatre machines (h1, h2, SW1, SW2) possèdent des adresses IP sur leur interface principale et peuvent communiquer entre elles.

### Configuration des Hôtes

Connectez les hôtes h1 et h2 à leurs switchs respectifs (SW1 et SW2) en utilisant des liens VXLAN :

```bash
# h1 vers SW1
sudo ovs-vsctl add-port br0 vx1 -- set interface vx1 type=vxlan options:remote_ip=10.0.0.1 options:key=2001
# SW1 vers h1
sudo ovs-vsctl add-port br0 vx2 -- set interface vx2 type=vxlan options:remote_ip=10.0.0.10 options:key=2001

# h2 vers SW2
sudo ovs-vsctl add-port br0 vx1 -- set interface vx1 type=vxlan options:remote_ip=10.0.0.2 options:key=2001
# SW2 vers h2
sudo ovs-vsctl add-port br0 vx2 -- set interface vx2 type=vxlan options:remote_ip=10.0.0.20 options:key=2001
```
#### Configuration du controleur dans les Switch
Pour chaque switch SW1 et SW2 il faut leur spécifier la présence de notre controleur SDN et pour ce faire il faut utiliser la commande  :

```bash
sudo ovs-vsctl set bridge br0 protocols=OpenFlow10 -- set-controller br0 tcp:10.0.0.254:6633
```

### Test de fonctionnement

Tout ce qu'il reste à faire maintenant est de tester cette configuration en attribuant des adresses IP superposées aux hôtes et en effectuant un test ping. Par réseau superposé, nous entendons ce réseau logique que nous avons construit en utilisant des liens VXLAN et des switchs OvS par-dessus notre réseau. Les hôtes font certainement partie de ce réseau, donc nous devrions également leur attribuer de nouvelles adresses IP pour ce réseau. Sur h1 et h2, nous exécutons :
 

```
# Sur h1
ip addr add 100.0.0.101/24 dev br0-int
ip link set br0-int up

# Sur h2
ip addr add 100.0.0.102/24 dev br0-int
ip link set br0-int up

```
 Puis vérifier la que le bon fonctionnement de l'architecture à l'aide d'un ping de h1 vers h2 ou inversement.

 ```
 # Sur h1
 ping 100.0.0.102

 # Sur h2
 ping 100.0.0.101
 ```

:::info
Webographie :

https://infoloup.no-ip.org/virtualbox-debian11-openvswitch-creation/

https://medium.com/@blackvvine/sdn-part-2-building-an-sdn-playground-on-the-cloud-using-open-vswitch-and-opendaylight-a0e2de029ce1
:::

## Utilisation de Wireshark pour la Vérification du Réseau dans GNS3

### Confirmation du Fonctionnement Réseau

Pour vérifier et démontrer le bon fonctionnement du réseau dans GNS3, procédez comme suit :

1. **Surveillance du Trafic entre h1 et le Switch Ethernet** :
   - Faites un clic droit sur le lien qui connecte h1 au switch Ethernet.
   - Sélectionnez l'option "Wireshark" pour lancer l'analyse du trafic.
   - Observez les trames ICMP générées par les opérations de ping précédentes.

2. **Analyse du Trafic entre SW1 et le Switch Ethernet** :
   - Répétez la même opération en faisant un clic droit sur le lien entre SW1 et le switch Ethernet.
   - Choisissez à nouveau l'option "Wireshark".
   - Examinez le trafic pour confirmer la communication correcte entre ces deux éléments.

Ces étapes vous permettront d'analyser le trafic réseau et de vérifier la transmission des données, notamment les trames ICMP, attestant ainsi du bon fonctionnement du réseau configuré dans GNS3.

## Installation de Docker et Ansible sur h2 et Provisionnement d'un Conteneur Docker via Ansible

### Installation de Docker et Ansible sur h2

1. **Installation de Docker** :
   - Connectez-vous à h2 (par exemple, via `vagrant ssh h2` si vous utilisez Vagrant).
   - Mettez à jour le gestionnaire de paquets avec `sudo apt update`.
   - Installez Docker en utilisant `sudo apt install docker.io`.
   - Vérifiez l'installation avec `docker --version`.

2. **Installation d'Ansible** :
   - Installez Ansible avec `sudo apt install ansible`.
   - Confirmez l'installation avec `ansible --version`.

### Provisionnement d'un Conteneur Docker via Ansible sur h2

1. **Création d'un Playbook Ansible** :
   - Créez un fichier YAML pour votre playbook Ansible, par exemple `docker_provision.yml`.
   - Dans ce fichier, définissez les tâches nécessaires pour lancer un conteneur Docker.

2. **Exemple de Playbook Ansible** :
   Voici un exemple simple de playbook pour démarrer un conteneur Docker :

    ```yaml
    ---
    - hosts: localhost
      become: yes
      tasks:
        - name: Pull the latest Docker image
          docker_image:
            name: "ubuntu"
            source: pull

        - name: Run a Docker container
          docker_container:
            name: "mycontainer"
            image: "ubuntu"
            command: sleep 1d
    ```

    Ce playbook tire l'image Docker d'Ubuntu et lance un conteneur nommé `mycontainer` exécutant une simple commande.

3. **Exécution du Playbook** :
   - Exécutez le playbook avec la commande `ansible-playbook docker_provision.yml`.
   - Ansible va communiquer avec le Docker daemon sur h2 et exécuter les tâches définies.

### Vérification

- Après l'exécution du playbook, vérifiez que le conteneur est en cours d'exécution avec `docker ps`.

