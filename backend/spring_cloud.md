# Spring Cloud

## 教程

[SpringCloud 整体架构概览](http://www.macrozheng.com/#/cloud/springcloud)

## Maven

[Maven Repository](https://search.maven.org/)

## IntelliJ

1. 开启 Services

View -> Tool Windows -> Services -> Add Service -> Run Configuration Type -> Spring Boot

2. 复制并开启相同的服务（例如演示负载均衡）

Service -> 右键 -> Copy Configuration -> Override parameters -> 增加端口号 server.port

## 概念

1. Eureka 服务治理组件
2. Ribbon 负载均衡
3. Hystrix 服务容错保护
4. Hystrix Dashboard 断路器执行监控
5. Feign/OpenFeign 基于 Ribbon 和 Hystrix 的声明式服务调用
6. Zuul API 网关服务
7. Config 配置中心
8. Bus 消息总线
9. Sleuth / Zipkin 分布式请求链式跟踪
10. Consul 服务治理与配置中心
11. Gateway 网关服务
12. Admin 监控服务
13. Security OAuth2
14. 单点登录（Single Sign On）

## 笔记

同一个项目下创建多个微服务应用，做法是创建一个根项目，然后在根项目下创建多个 module，根项目及 module 的 package 需要一致

```
查看端口号使用情况
lsof -i:[port_name]

杀掉进程
kill -9 [pid_name]
```

Netflix Ribbon 依赖需要指定版本号

子服务通过右键选择 Edit Configuration 增加变量 server.port 及新的端口号 可以复制一个进程。

## 资料

- [19 张图概览 Spring Cloud](https://jishuin.proginn.com/p/763bfbd5574d)
- [Spring Cloud 微服务实践 (8) - 部署](https://xie.infoq.cn/article/e940fe066a65b604019110c26)
- [Java 架构师-技术专家](https://class.imooc.com/sale/javaarchitect)
- [Eureka, Zookeeper, Consul, Nacos 对比](https://developer.aliyun.com/article/738413)
