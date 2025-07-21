# 科学上网

## 资源

- [科学上网的终极姿势：在 Vultr VPS 上搭建 Shadowsocks](https://zoomyale.com/2016/vultr_and_ss)
- [科学上网](https://haoel.github.io/)

## [Vultr.com](https://www.vultr.com/)

`n*2017@gmail.com / Go*2021`

## Issues

#### 2020.04.23

1. 安装依赖时，python、python-devel、python-setuptools 无法安装

   解决方法：修改 `shadowsocks-all.sh`, 删除 yum-depends 中 python 依赖

2. IP 可以访问，SSH 可以登录，但端口号状态为关闭

   解决方法：检查 VPS [端口状态](http://tool.chinaz.com/port/) ，开启防火墙端口
