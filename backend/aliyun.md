# 阿里云

## 云服务器 ECS

创建成功后，首先修改密码

## 云数据库 RDS

实例创建成功后，需要配置访问 RDS 的 IP 白名单  
本地连接，需要添加本地的公网 IP，通过百度搜索 IP 就可以查询，本地 IP 会发生变化，白名单没有纳入，导致无法访问 RDS  
开放 RDS 外网地址，允许白名单 IP 通过外网访问

## Web+

Web+ 是阿里云提供的 PaaS  
[使用 Django 开发应用](https://help.aliyun.com/document_detail/130967.html?spm=5176.13597150.0.0.120b1450Id1BS5)

## 域名

[域名价格表](https://wanwang.aliyun.com/help/price.html)

## CentOS 安装 Nginx

[How to Install Nginx on CentOS 7 - one blog](https://linuxize.com/post/how-to-install-nginx-on-centos-7/) /
[How to Install Nginx on CentOS 7 - another blog](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7)

1. Add Nginx Repository

```
$ sudo yum install epel-release
```

2. Install Nginx

```
$ sudo yum install nginx
```

3. Start Nginx

```
$ sudo systemctl start nginx
```

4. Stop Nginx

```
$ sudo systemctl stop nginx
```

5. 启动系统时开启

```
$ sudo systemctl enable nginx
```

查看 nginx 版本

```
$ nginx -v
```

查看运行状态

```
$ sudo systemctl status nginx
```

查看使用 nginx 进程

```
$ ps -ef | grep nginx
```

杀掉进程

```
$ kill -9 [pid]
```

开启端口

```
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

报错：`FirewallD is not running`

开启防火墙

```
systemctl start firewalld
```

Nginx 已启动，但是欢迎页（外网 IP）无法访问，这是因为 Nginx 配置文件默认监听 80 端口，但是阿里云实例中并没有开通，操作步骤：实例 -> 管理 -> 安全组 -> 配置规则 -> 添加安全组规则 端口范围 80/80 授权对象 0.0.0.0/0 参考：[解决阿里云服务器安装 nginx 不能访问的问题](https://www.jianshu.com/p/0328acae26b0)

## CentOS 安装 Python

参考：[Python 3 Installation on Centos 7](https://medium.com/@gk.mr/python-3-6-x-installation-centos-7-4-55ada041a03)  
查看 [python 发布版本](https://www.python.org/ftp/python/)  
简单方法：Using EPEL Repo，下面一句命令就可以了(可能阿里云已经实现了)

```
$ sudo yum install python36
$ python3 -V
```

安装虚拟环境

```
$ pip3 install virtualenv
$ pip3 install virtualenvwrapper
```

设置全局变量  
vim ~/.bashrc

```
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source /usr/local/bin/virtualenvwrapper.sh
```

source ~/.bashrc

创建虚拟环境

```
mkvirtualenv [env_name]
```

安装项目依赖包

```
$ pip3 install -r requirements.txt
```

报错：`mysqlclient mysql_config not found`

使用了云数据库，云服务器不需要再安装 mysql，安装以下插件

```
$ yum install gcc mariadb-devel python3-devel
```

安装 uwsgi

```
$ pip3 install uwsgi
```

检查 nginx.conf 文件是否正确

```
$ nginx -t
$ nginx -t -c /etc/nginx/nginx.conf
```

查看端口号使用情况

```
$ netstat -ltnep

$ netstat -lnp|grep [port]
```

防火墙命令

```
查看防火墙状态
firewall-cmd --state

打开防火墙
systemctl start firewalld

关闭防火墙
systemctl stop firewalld

查看当前防火墙开放的端口
firewall-cmd --list-ports

添加80端口
firewall-cmd --zone=public --add-port=80/tcp --permanent

重新启动防火墙
firewall-cmd --reload

```

uWSGI

uwsgi 启动：如果有虚拟环境先进入虚拟环境，然后进入项目目录，然后执行 uwsgi --ini uwsgi.ini

重启

```
uwsgi --reload uwsgi.pid
```

停止

```
uwsgi --stop uwsgi.pid
```

uwsgi.ini module 指向 django 项目 settings 对应的名称

[uWSGI 教程](https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html)
