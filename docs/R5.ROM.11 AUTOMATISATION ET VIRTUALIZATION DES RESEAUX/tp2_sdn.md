---
sidebar_position: 1
author: Ashvin
---

# TP2 SDN Configuration
## Présentation
Cette documentation offre un guide sur la configuration et la mise en place d'un réseau à définition logicielle (SDN, Software-Defined Networking en anglais). Le réseau que nous allons créer est composé de plusieurs éléments clés : un switch réseau, un contrôleur SDN centralisé et deux postes clients.

## Configuration du Switch

Pour réaliser ce SDN nous allons créer un NFV, c'est à dire que notre réseaux serra entièrement virtualizé dans une machine hôte. Ainsi nous allons installer notre première VM qui serra le switch. Nous allons utiliser OPenvSwitch qui est une solution opensource pour virtualizer un switch (pas nécessairement de niveau 2. Dans une architecture SDN le switch opére sur toutes les couches du modèle OSI).

### Openvswitch Installation
Installer Openvswitch sur 4 machines virtuelles debian (h1, h2, SW1, SW2) à l'aide de la commande suivante
```bash
sudo apt install openvswitch-switch
```

Une fois openswitch installer sur toute les machines, il est necessaire de créer un bridge dédié à ce switch virtuel ainsi qu'une interface interne reliée à ce switch à l'aide des deux commandes suivantes.

```
# Sur les 4 machines

sudo ovs-vsctl add-br br0

sudo ovs-vsctl add-port br0 br0-int -- set interface br0-int type=internal
```
### Interconnexion des deux switch
Il est maintenant temps d'interconnecter nos deux switchs entre eux. Pour ce faire nous allons créer un lien vxlan entre eux à l'aide de la commande suivante.

```bash
# Sur SW1
sudo ovs-vsctl add-port br0 vx1 -- set Interface vx1 type=vxlan options:remote_ip=10.0.0.1 options:key=2000

# Sur SW2
sudo ovs-vsctl add-port br0 vx1 -- set Interface vx1 type=vxlan options:remote_ip=<SW1_IP> options:key=2000
```
:::caution
L'id ici est important car il permet d'identifier clairement de quel lien il s'agit. A noter que au préalable les 4 machines doivent avoir une adresse ip sur leur interface principale et doivent pouvoir commmuniquer entre elle. 
:::

## Configuration des hôtes
De la même manière que les deux switch ont été interconnectés entre eux à l'aide de liens vxlan il faut maintenant connecter les hôtes h1 et h2 à leur switch SW1 et SW2 respectif à l'aide des commandes suivantes.

```bash
# h1 vers SW1
sudo ovs-vsctl add-port br0 vx1 - set interface vx1 type=vxlan options:remote_ip=<SWITCH1_IP> options:key=2001
# SW1 vers h1
sudo ovs-vsctl add-port br0 vx2 - set interface vx2 type=vxlan options:remote_ip=<HOST1_IP> options:key=2001

# h2 vers SW2
sudo ovs-vsctl add-port br0 vx1 - set interface vx1 type=vxlan options:remote_ip=<SWITCH2_IP> options:key=2001
# SW2 vers h2
sudo ovs-vsctl add-port br0 vx2 - set interface vx2 type=vxlan options:remote_ip=<HOST2_IP> options:key=2001

```

## Configuration du Controleur SDN
### Installation de OPenDayLight
Des lors nous pouvons créer une cinquième machine qui servira de controleur SDN à notre réseau. Sur cette dernière nous installerons OPENDAYLIGHT à l'aide des commandes suivantes :

```bash
wget https://nexus.opendaylight.org/content/repositories/opendaylight.release/org/opendaylight/integration/karaf/0.18.1/karaf-0.18.1.tar.gz

tar -xzvf karaf-0.18.1.tar.gz

cd karaf-0.18.1

./bin/karaf
```
:::caution
Il se peut qu'il soit necessaire d'installer java pour pouvoir utilliser karaf. POur ce faire utiliser la commande `sudo apt install openjdk-17-jdk`.
:::

Karaf ainsi démarré il faut mettre à jour la liste des plugins et installer les plugins openflow (protocole pour gérer les switch depuis un controlleur SDN).

```bash
feature:repo-refresh

feature:install odl-openflowplugin-southbound 
```

### Configuration du controleur dans les Switch
Pour chaque switch SW1 et SW2 il faut leur spécifier la présence de notre controleur SDN et pour ce faire il faut utiliser la commande  :

```bash
sudo ovs-vsctl set bridge br0 protocols=OpenFlow10 -- set-controller br0 tcp:<CONTROLLER_IP>:6633
```
## Test de fonctionnement

Sur h1 et h2 configurons une ip dans le même réseaux sur les interfaces vxlan relié aux switchs à l'aide des commandes : 

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