---
slug: docu
title: DOCUMENTATION
authors: [ashvin,emerick]

tags: [sdn, nfz, vxlan, openstack, docker, ansible]
---

# Documentation

## Installation des prérequis

## Réseaux

supression du port 15 du bridge 0

```
ovs-vsctl del-port br0 eth15
```

ajout des addresses ip 

```
sudo ip addr add 172.16.1.10/24 dev eth15

sudo ip addr add 172.16.1.20/24 dev eth15

```

création du bridge et des vxlan

```
ovs-vsctl add-br ovs1
ovs-vsctl add-port ovs1 vxlan1 -- set interface vxlan1 type=vxlan options:remote_ip=172.16.1.20 options:key=1
ovs-vsctl add-port ovs1 vxlan2 -- set interface vxlan2 type=vxlan options:remote_ip=172.16.1.20 options:key=2

ovs-vsctl add-br ovs2
ovs-vsctl add-port ovs2 vxlan1 -- set interface vxlan1 type=vxlan options:remote_ip=172.16.1.10 options:key=1
ovs-vsctl add-port ovs2 vxlan2 -- set interface vxlan2 type=vxlan options:remote_ip=172.16.1.10 options:key=2

```

suppresion des port des pc des briges existants

```
#sur les deuw switchs
ovs-vsctl del-port br0 eth1
ovs-vsctl del-port br0 eth2
```

ajout des nouveaux ports

```
#switch 1
ovs-vsctl add-port ovs1 eth1
ovs-vsctl add-port ovs1 eth2

#switch 2
ovs-vsctl add-port ovs2 eth1
ovs-vsctl add-port ovs2 eth2
```

table=1,tun_id=100,dl_dst=00:00:00:00:00:02,actions=output:1
table=1,tun_id=200,dl_dst=00:00:00:00:00:02,actions=output:2
table=1,tun_id=100,dl_dst=00:00:00:00:00:01,actions=output:100
table=1,tun_id=200,dl_dst=00:00:00:00:00:01,actions=output:100
table=1,tun_id=100,arp,nw_dst=10.0.0.2,actions=output:1
table=1,tun_id=200,arp,nw_dst=10.0.0.2,actions=output:2
table=1,tun_id=100,arp,nw_dst=10.0.0.1,actions=output:100
table=1,tun_id=200,arp,nw_dst=10.0.0.1,actions=output:100
table=1,priority=100,actions=drop