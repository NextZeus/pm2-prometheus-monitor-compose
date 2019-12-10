# Prometheus Docker-Compose

### Command

```
#启动compose：
npm run start:local
#停止compose：
npm run stop:local

```


## 防火墙(没有必要设置 关了反而引起了其他的问题)

按照文档上写的，如果停了防火墙，需要重启docker服务，否则会抛出异常

```
ERROR: Failed to Setup IP tables: Unable to enable SKIP DNAT rule:  (iptables failed: iptables --wait -t nat -I DOCKER -i br-5a43706caeee -j RETURN: iptables: No chain/target/match by that name.
 (exit status 1))

https://blog.csdn.net/lcr_happy/article/details/89282116

```

## cadvisor启动失败

```
Could not configure a source for OOM detection, disabling OOM events: open /dev/kmsg: no such file or directory

解决方案

docker 配置增加 privileged: true

```

### 引用
- 作者：Java十一
- 来源：掘金
- 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
- [🔗](https://juejin.im/post/5c9dc0b06fb9a070ae3da6e7)