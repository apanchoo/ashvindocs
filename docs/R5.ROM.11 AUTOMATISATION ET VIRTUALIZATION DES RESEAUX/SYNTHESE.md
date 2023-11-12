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
![schema](https://i.ibb.co/6YMGhL7/dim-12-nov-2023-21-14-48-04.jpg)


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
   - Définissez les VMs souhaitées (h1, h2, SW1, SW2, OPENDAYLIGHT).
   - Utilisez le script pour configurer les VM.
   - Pour chaque VM, spécifiez la configuration réseau en mode "privé".

#####  Exemple de Configuration pour une VM
```ruby
Vagrant.configure("2") do |config|
  # VM called H1
  config.ssh.forward_agent = true
  config.ssh.forward_x11 = true
  config.vm.define "h1" do |h1|
    h1.vm.box = "ubuntu/mantic64"
    h1.vm.hostname = "h1"
    h1.vm.network "private_network", ip: "192.168.56.10"
  end

  # VM called H2
  config.vm.define "h2" do |h2|
    h2.vm.box = "ubuntu/mantic64"
    h2.vm.hostname = "h2"
    h2.vm.network "private_network", ip: "192.168.56.11"
  end

  # VM called OPENDAYLIGHT
  config.vm.define "OPENDAYLIGHT" do |odl|
    odl.vm.box = "ubuntu/mantic64"
    odl.vm.hostname = "opendaylight"
    odl.vm.network "private_network", ip: "192.168.56.12"
  end

  # VM called SW1 
  config.vm.define "SW1" do |sw1|
    sw1.vm.box = "ubuntu/mantic64"
    sw1.vm.hostname = "SW1"
    sw1.vm.network "private_network", ip: "192.168.56.13"
  end

  # VM called SW2 
  config.vm.define "SW2" do |sw2|
    sw2.vm.box = "ubuntu/mantic64"
    sw2.vm.hostname = "sw2"
    sw2.vm.network "private_network", ip: "192.168.56.14"
  end
end
```

####  Partie 3: Lancement et Vérification

1. **Lancement des VMs** : Exécutez `vagrant up` pour démarrer toutes les VMs configurées.
2. **Accès aux VMs** : Utilisez `vagrant ssh [nom_vm]` pour accéder à chaque VM.
3. **Vérification de la configuration réseau** : Dans chaque VM, utilisez des commandes comme `ifconfig` ou `ip a` pour vérifier les configurations réseau.


##  Installation d'OpenStack sur h1
![Openstack](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/OpenStack%C2%AE_Logo_2016.svg/800px-OpenStack%C2%AE_Logo_2016.svg.png)

###  Introduction

Nous allons procéder à l'installation d'OpenStack sur la machine virtuelle h1. OpenStack est une plateforme de cloud computing qui permet de gérer de grands groupes de technologies de virtualisation. L'installation sera réalisée à travers la modification du `Vagrantfile` et l'utilisation de Vagrant pour gérer les ressources de la VM.

###  Configuration de h1 dans Vagrant

1. **Modification du `Vagrantfile`** : Pour préparer h1 à accueillir OpenStack, modifiez le `Vagrantfile` en ajoutant les configurations suivantes à la section dédiée à h1 :

    ```bash
  config.vm.define "h1" do |h1|
    h1.vm.box = "ubuntu/mantic64"
    h1.vm.hostname = "h1"
    h1.vm.network "private_network", ip: "192.168.56.10"
    
    # Configuration réseau en mode ponté de VM1

    # Configuration du fournisseur VirtualBox de VM1
    h1.vm.provider "virtualbox" do |vb|
      vb.memory = "8192"  # 8 GB de RAM
      vb.cpus = 4  # 4 cœurs de CPU
      vb.name = "TP3_R5ROM11_OPENSTACK"
      vb.customize ["modifyvm", :id, "--nested-hw-virt", "on"]
    end

    # Provisionnement de VM1
    h1.vm.provision "shell", inline: <<-SHELL
      sudo snap install microstack --edge --classic
      PATH=/snap/bin:$PATH /snap/bin/microstack.init --auto --control
    SHELL
  end
    ```

2. **Rechargement de la Configuration** : Appliquez ces changements en exécutant `vagrant reload` dans votre terminal.

### Accès à l'interface OpenStack

Une fois OpenStack installé et la VM configurée, suivez ces étapes pour accéder à l'interface web d'OpenStack :

1. **Obtention du Mot de Passe OpenStack** :
   - Connectez-vous à h1 via `vagrant ssh h1`.
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

### Configuration des Switchs

#### Création d'un Réseau Virtuel (NFV)
Dans cette architecture, le réseau est entièrement virtualisé dans une machine hôte. Pour cela, installez OpenvSwitch, une solution open-source pour virtualiser des switchs, sur les machines virtuelles (h1, h2, SW1, SW2) :

```bash
sudo apt install openvswitch-switch
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
sudo ovs-vsctl add-port br0 vx1 -- set Interface vx1 type=vxlan options:remote_ip=192.168.56.14 options:key=2000

# Sur SW2
sudo ovs-vsctl add-port br0 vx1 -- set Interface vx1 type=vxlan options:remote_ip=192.168.56.13 options:key=2000
```

**Important** : Assurez-vous que les quatre machines (h1, h2, SW1, SW2) possèdent des adresses IP sur leur interface secondaire et peuvent communiquer entre elles.

### Configuration des Hôtes

Connectez les hôtes h1 et h2 à leurs switchs respectifs (SW1 et SW2) en utilisant des liens VXLAN :

```bash
# h1 vers SW1
sudo ovs-vsctl add-port br0 vx1 -- set interface vx1 type=vxlan options:remote_ip=192.168.56.13 options:key=2001
# SW1 vers h1
sudo ovs-vsctl add-port br0 vx2 -- set interface vx2 type=vxlan options:remote_ip=192.168.56.10 options:key=2001

# h2 vers SW2
sudo ovs-vsctl add-port br0 vx1 -- set interface vx1 type=vxlan options:remote_ip=192.168.56.14 options:key=2001
# SW2 vers h2
sudo ovs-vsctl add-port br0 vx2 -- set interface vx2 type=vxlan options:remote_ip=192.168.56.11 options:key=2001
```
#### Configuration du controleur dans les Switch
Pour chaque switch SW1 et SW2 il faut leur spécifier la présence de notre controleur SDN et pour ce faire il faut utiliser la commande  :

```bash
sudo ovs-vsctl set bridge br0 protocols=OpenFlow10 -- set-controller br0 tcp:192.168.56.12:6633
```
![vxlan](https://i.ibb.co/bQ7j1y1/dim-12-nov-2023-21-17-04-04.jpg)
### Test de fonctionnement

Tout ce qu'il reste à faire maintenant est de tester cette configuration en attribuant des adresses IP superposées aux hôtes et en effectuant un test ping. Par réseau superposé, nous entendons ce réseau logique que nous avons construit en utilisant des liens VXLAN et des switchs OvS par-dessus notre réseau. Les hôtes font certainement partie de ce réseau, donc nous devrions également leur attribuer de nouvelles adresses IP pour ce réseau. Sur h1 et h2, nous exécutons :
 

```
# Sur h1
sudo ip addr add 100.0.0.101/24 dev br0-int
sudo ip link set br0-int up

# Sur h2
sudo ip addr add 100.0.0.102/24 dev br0-int
sudo ip link set br0-int up

```
 Puis vérifier la que le bon fonctionnement de l'architecture à l'aide d'un ping de h1 vers h2 ou inversement.

 ```
 # Sur h1
 ping 100.0.0.102

 # Sur h2
 ping 100.0.0.101
 ```
:::warning
Il se peut que pendant les 30 première seconde l'erreur host unrechable s'affiche. Cella est normal et est du au temps de convergense de opendaylight. Néanmoins si le problème perssiste redémarrer opendaylight.
:::
:::info
Webographie :

https://infoloup.no-ip.org/virtualbox-debian11-openvswitch-creation/

https://medium.com/@blackvvine/sdn-part-2-building-an-sdn-playground-on-the-cloud-using-open-vswitch-and-opendaylight-a0e2de029ce1
:::

## Analyse de Trames avec Wireshark sur H2 via Redirection SSH

Pour analyser les trames réseau sur la machine virtuelle H2, nous utiliserons Wireshark. Cette opération nécessitera la redirection SSH, donc assurez-vous d'avoir les outils nécessaires installés sur votre système Windows, comme un serveur X11 (par exemple, Xming ou VcXsrv).

### Étapes d'installation et de configuration :

1. **Installer Wireshark sur H2** :
   Exécutez la commande suivante dans le terminal de H2 pour installer Wireshark :
   ```
   sudo apt install wireshark
   ```

2. **Configurer la Redirection X11 sous Windows** :
   - Installez un serveur X11, tel que Xming ou VcXsrv, sur votre système Windows.

3. **Lancer Wireshark via SSH avec Redirection X11** :
   - Lancez Wireshark avec la commande suivante, qui préserve les variables d'environnement pour la redirection X11 :
     ```
     sudo -E wireshark
     ```

4. **Effectuer la Capture de Trames** :
   - Dans Wireshark, choisissez `any` pour l'interface d'écoute.
   - Appliquez le filtre `vxlan` pour filtrer les paquets spécifiques à VXLAN.
   - Démarrez la capture et procédez à des actions réseau (comme un ping) pour générer du trafic.

Observez comment les trames ICMP sont encapsulées dans VXLAN, ce qui permet une analyse détaillée du trafic réseau à travers le tunnel VXLAN.

![wireshark](https://i.ibb.co/Gs6Fq98/image.png)


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

- Après l'exécution du playbook, vérifiez que le conteneur est en cours d'exécution avec `sudo docker ps`.

##  Importation des VMs VirtualBox dans GNS3 et Connexion au Switch Ethernet

Après avoir configuré vos machines virtuelles (VMs) avec Vagrant, la prochaine étape consiste à les importer dans GNS3 et les connecter à un switch Ethernet. Voici les étapes à suivre :

### Prérequis
- Assurez-vous que GNS3 est installé sur votre machine.
- Vérifiez que VirtualBox est installé et que vos VMs Vagrant y sont accessibles.

#### Étape 1: Configuration de GNS3 pour Utiliser VirtualBox
1. **Ouvrez GNS3** : Lancez l'application GNS3.
2. **Configurer VirtualBox dans GNS3** : 
   - Allez dans `Edit` > `Preferences`.
   - Dans la section `VirtualBox`, assurez-vous que le chemin vers VirtualBox est correctement configuré.

#### Étape 2: Intégration des VMs Vagrant dans GNS3
1. **Ajouter une nouvelle VM VirtualBox dans GNS3** : 
   - Dans `Preferences` sous `VirtualBox VMs`, cliquez sur `New`.
   - Sélectionnez la VM à importer depuis la liste des VMs VirtualBox disponibles.
   - Suivez les instructions pour l'ajouter à GNS3.
   - Répétez cette étape pour chaque VM (h1, h2, SW1, SW2).

#### Étape 3: Création du Projet GNS3 et Configuration des VMs
1. **Création d'un nouveau projet** : Dans GNS3, créez un nouveau projet.
2. **Ajouter les VMs au projet** : Glissez et déposez chaque VM importée dans l'espace de travail du projet.
3. **Configurer les VMs** :
   - Double-cliquez sur chaque VM ajoutée dans le projet pour ouvrir le menu contextuel.
   - Ajoutez une interface réseau supplémentaire si nécessaire.
   - Cochez la case pour autoriser GNS3 à gérer toutes les interfaces de cette VM.

#### Étape 4: Connexion des VMs à un Switch Ethernet
1. **Ajouter un Switch Ethernet** : 
   - Trouvez le switch Ethernet dans la barre latérale de GNS3 (sous `Switches`) et ajoutez-le à votre espace de travail.
2. **Connecter les VMs au Switch** : 
   - Cliquez sur une VM, puis sur le switch Ethernet, et sélectionnez les interfaces à connecter.
   - Répétez cette opération pour chaque VM.

#### Remarques importantes :
- Une fois les VMs configurées et ajoutées dans GNS3, n’utilisez plus les commandes Vagrant pour les gérer. Utilisez uniquement les fonctionnalités de GNS3 pour démarrer, arrêter, ou modifier ces VMs.
- Les modifications faites aux VMs via GNS3 ne seront pas reflétées dans Vagrant.
