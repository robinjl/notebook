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
sudo yum install epel-release
```

2. Install Nginx

```
sudo yum install nginx
```

3. Start Nginx

```
sudo systemctl start nginx
```

4. Stop Nginx

```
sudo systemctl stop nginx
```

5. 启动系统时开启

```
sudo systemctl enable nginx
```

查看 nginx 版本

```
nginx -v
```

查看运行状态

```
sudo systemctl status nginx
```

查看使用 nginx 进程

```
ps -ef | grep nginx
```

杀掉进程

```
kill -9 [pid]
```

通过安装包安装 Nginx 安装路径是`/usr/local/nginx/sbin/nginx`，还需要配置全局变量

```
ln -s /usr/local/nginx/sbin/nginx /usr/local/bin/
```

## CentOS 防火墙

> 如果阿里云已配置安全组，仍然无法访问端口号，可能是防火墙未开放端口

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

查看防火墙状态

```
firewall-cmd --state
```

关闭防火墙

```
systemctl stop firewalld
```

查看当前防火墙开放的端口

```
firewall-cmd --list-ports
```

添加端口(比如 80)

```
firewall-cmd --zone=public --add-port=80/tcp --permanent
```

删除端口(比如 80)

```
firewall-cmd --zone=public --remove-port=80/tcp --permanent
```

也可以添加端口范围(比如 7000-9000)

```
firewall-cmd --zone=public --add-port=7000-9000/tcp --permanent
```

重新启动防火墙

```
firewall-cmd --reload
```

**注意：** Nginx 已启动，但是欢迎页（外网 IP）无法访问，这是因为 Nginx 配置文件默认监听 80 端口，但是阿里云实例中并没有开通，操作步骤：实例 -> 管理 -> 安全组 -> 配置规则 -> 添加安全组规则 端口范围 80/80 授权对象 0.0.0.0/0 参考：[解决阿里云服务器安装 nginx 不能访问的问题](https://www.jianshu.com/p/0328acae26b0)

## 磁盘空间

`df -h` 查看磁盘剩余空间

查看文件大小 `du -h [目录名]` 查看指定文件夹下的所有文件大小（包含子文件夹）

## CentOS 安装 Python

参考：[Python 3 Installation on Centos 7](https://medium.com/@gk.mr/python-3-6-x-installation-centos-7-4-55ada041a03)  
查看 [python 发布版本](https://www.python.org/ftp/python/)  
简单方法：Using EPEL Repo，下面一句命令就可以了(可能阿里云已经实现了)

```
sudo yum install python37
python3 -V
```

#### 安装虚拟环境

```
pip3 install virtualenv
pip3 install virtualenvwrapper
```

设置全局变量 `vim ~/.bashrc`

```
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
source /usr/local/bin/virtualenvwrapper.sh
```

`source ~/.bashrc`

创建虚拟环境

```
mkvirtualenv [env_name]
```

安装项目依赖包

```
pip3 install -r requirements.txt
```

报错：`mysqlclient mysql_config not found`

使用了云数据库，云服务器不需要再安装 mysql，安装以下插件

```
yum install gcc mariadb-devel python3-devel
```

安装 uwsgi

```
pip3 install uwsgi
```

检查 nginx.conf 文件是否正确

```
nginx -t
nginx -t -c /etc/nginx/nginx.conf
```

查看端口号使用情况

```
netstat -ltnep
netstat -lnp|grep [port]
```

配置前端环境（以 ant design pro 为例）

在 `/etc/nginx/conf.d` 文件夹下创建`nginx.conf`文件

重启 nginx

```
systemctl restart nginx
```

#### uWSGI

参考资料：[uWSGI 教程](https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html)

uwsgi 启动：先进入虚拟环境，然后进入项目目录，执行

```bash
uwsgi --ini uwsgi.ini  // 可以打印调试信息
```

重启（更改项目文件后，需要重启）

```bash
uwsgi --reload uwsgi.pid
```

停止

```bash
uwsgi --stop uwsgi.pid
```

如果无法彻底停止，可以修改 uwsgi.ini 端口号，重新启动，使原有端口号无法访问

查看 uwsgi 占用进程

```bash
ps ax|grep uwsgi
```

uwsgi.ini module 指向 django 项目 settings 对应的名称

直接在 /etc/nginx/nginx.conf 配置 server

```
server {
    listen [port];
    server_name 127.0.0.1;

    location / {
        include /etc/nginx/uwsgi_params;
        uwsgi_pass 127.0.0.1:[uwsgi_port];
    }

    location /static {
        alias /path/to/mysite/static;
    }
}
```

**注意** 无法访问/root/下部署的程序，需要开放阿里云根目录访问权限

```
chmod -R 777 /root
```

什么是软链接？

uwsgi 报错 `no python application found`, 检查是否是虚拟环境错误

#### 配置静态文件

项目目录 /mysite/settings.py 添加

```
STATIC_ROOT = os.path.join(BASE_DIR, "static/")
```

运行

```
python manage.py collectstatic
```

## https ssl

云盾证书服务(包年) 单域名-> 免费版（个人）DV -> Symantec (已更名)
个人型 SSL 证书，保护一个域名。浏览器上有 https 提示并有绿锁标记。快速签发，适合个人和小微企业，支持个人/企业申请。一个阿里云帐户最多签发 20 张。

[在 Nginx/Tengine 服务器上安装证书](https://help.aliyun.com/document_detail/98728.html?spm=5176.2020520163.0.0.3b6156a7dlzBU8)

Nginx 配置路径：/etc/nginx/ 下建 cert 文件夹 放入证书文件 domain_name.key, domain_name.pem

http 自动跳转 https 配置

前端程序 nginx.conf 也要配置 ssl

## 域名备案

域名实名认证后，要至少等待 3 天信息同步后才可以进行域名备案；否则，会提示

> 请在域名注册商完成域名实名认证后 2-3 天再提交备案

https://_[domain_name]_:_[port_name]_ 无法访问？  
后来没有调整什么就可以访问了，难道是域名实名认证后需要一段时间后才可以访问？

## 安装 Mysql

以 5.7 为例

1. 添加 Mysql5.7 仓库

```
sudo rpm -ivh https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
```

2.开始安装 Mysql5.7

```
sudo yum -y install mysql-community-server
```

3. 启动 Mysql

启动

```
sudo systemctl start mysqld
```

设置系统启动时自动启动

```
sudo systemctl enable mysqld
```

查看启动状态

```
sudo systemctl status mysqld
```

修改 root 密码

```
sudo grep 'temporary password' /var/log/mysqld.log // 获取临时密码
mysql -uroot -p // 用临时密码登录
ALTER USER 'root'@'localhost' IDENTIFIED BY 'new password' // 设置新密码
```

!> 报错：Failed to start mysqld.service: Unit not found.

原因：CentOS 不再支持 MySQL， 而使用 Mariadb

安装 mariadb-server `yum install -y mariadb-server`

启动

```
sudo systemctl start mariadb.service
```

设置系统启动时自动启动

```
sudo systemctl enable mariadb.service
```

设置安全项，修改管理员密码

```
mysql_secure_installation
```

## 允许远程连接数据库

进入 MySQL 命令行，允许所有 IP 地址访问数据库

```
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'password';  // password 为远程访问密码

```

刷新权限

```
FLUSH PRIVILEGES;
```

重启数据库

```
systemctl restart mariadb.service
```

## 安装 Vim

```
yum install vim-X11 vim-common vim-enhanced vim-minimal
```

[文档](http://apetec.com/linux/installvim.htm)

## issues

1. 阿里云部署后出现报错 `[Errno 5] Input/output error` 或者其他报错

解决方法：注释 print 调用支付宝支付接口也出现过问题，都是因为 print 的原因

2. Nginx failed (13: Permission denied)

解决方法： /etc/selinux/config 将 SELINUX=enforcing 改为 SELINUX=disabled 重启服务器 reboot

3. Nginx 默认上传数据大小为 1M

可以设置请求和代理参数

```
client_max_body_size 100m;
client_header_timeout 750s;
client_body_timeout 750s;
proxy_connect_timeout 600s;
proxy_read_timeout 750s;
proxy_send_timeout 750s;
client_body_buffer_size 102400k;
```

4. 报错：`ssh_exchange_identification: read: Connection reset by peer`

原因 IP 阿里云阻截，需要开启白名单

获取公网 IP `curl ifconfig.me`

[解决公司网络无法通过 ssh 连接阿里云 ECS 的 22 端口](https://www.jianshu.com/p/effb2b665c15)
[简单记录一下阿里云服务器 Ssh 登录不上的问题](https://hbnnforever.cn/article/sshaliecs.html)
