# Django

## Mac 下安装 mysqlclient 报错问题

根据[官网](https://github.com/PyMySQL/mysqlclient-python)安装 python mysql 中间件

可能存在问题：  
解决方法：改变 mysql_config 文件源码， mysql_config 的正确地址是 `/usr/local/Cellar/mysql-connector-c/6.1.11/bin/mysql_config`  
如果修改的是 `/usr/local/bin/mysql_config` 是没有作用的

参考文章 - [一场由mysql官方引发的python血案](https://www.easegamer.com/?p=545)

## 共享环境

导出依赖包:
`pip freeze > requirements.txt`

安装依赖包:
`pip install -r requirements.txt`

## 设置本地服务器

PyCharm -> Edit Configuration  
设置 IP / PORT  
点击 Run 按钮  
或者命令行 `python3 manage.py runserver [IP:PORT]`  
不加IP, 默认地址是  http://127.0.0.1:8000/，自定义IP无法启用