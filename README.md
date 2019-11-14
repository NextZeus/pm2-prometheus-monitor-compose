# Prometheus Docker-Compose

### Command

```

#启动容器：
docker-compose -f /data/work/prometheus-monitor/config/docker-compose-monitor.yml up -d
#删除容器：
docker-compose -f /data/work/prometheus-monitor/config/docker-compose-monitor.yml down
#重启容器：
docker restart id

```


## 防火墙

按照文档上写的，如果停了防火墙，需要重启docker服务，否则会抛出异常
```
ERROR: Failed to Setup IP tables: Unable to enable SKIP DNAT rule:  (iptables failed: iptables --wait -t nat -I DOCKER -i br-5a43706caeee -j RETURN: iptables: No chain/target/match by that name.
 (exit status 1))

https://blog.csdn.net/lcr_happy/article/details/89282116

```

### 引用
- 作者：Java十一
- 来源：掘金
- 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
- [🔗](https://juejin.im/post/5c9dc0b06fb9a070ae3da6e7)