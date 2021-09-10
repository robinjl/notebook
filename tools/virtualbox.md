主机与虚拟机公用同一个局域网，互相能 Ping 通，网络 -> 连接方式 -> 选择桥接网卡

## CentOS

#### 网络设置

安装 CentOS 7 后，测试网络状态 `ping www.bing.com` 若提示 `Name or service not known` 说明网络没有配置正确  
参考 [CentOS 连接外网](https://blog.csdn.net/ermaner666/article/details/87932853)

一、配置网卡  
`vi /etc/sysconfig/network-scripts/ifcfg-enp0s3`

- 修改部分

1. BOOTPROTO=dhcp 修改为 BOOTPROTO=static
2. ONBOOT=no 修改为 ONBOOT=yes

- 添加部分

3. 添加 IPv4 地址：192.168.x.x
4. 添加子网掩码：255.255.255.0
5. 添加网关：192.168.x.x
6. 添加 DNS: 8.8.8.8

二、配置 DNS  
`vi /etc/resolv.conf` 添加 nameserver 8.8.8.8

#### 常用命令

| 命令            | 作用 |
| --------------- | ---- |
| shutdown -h now | 关机 |

#### 软件

安装软件：`yum install [package_name]`  
卸载软件：`yum remove [package_name]`

###### Vim

[How to Install VIM in CentOS](http://apetec.com/linux/InstallVIM.htm)  
`yum install vim-X11 vim-common vim-enhanced vim-minimal`

###### GUI (GNome)

#### 技巧

CentOS 安装最小版本，在一个命令行窗口运行多个任务，当一个任务占用了窗口，Mac 上没有快捷键打开新的窗口。此时，使用 `Ctrl + Z` 将任务切换到后台，然后可以继续执行新的命令；查看后台任务，命令是 `jobs`，[参考](https://unix.stackexchange.com/questions/278692/linux-use-second-terminal-in-minimal-iso) 。 此外，还可以使用 tmux。
