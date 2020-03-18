# Django

## Python 风格指南

[Google Python 风格指南](https://zh-google-styleguide.readthedocs.io/en/latest/google-python-styleguide/)

## Mac 下安装 mysqlclient 报错问题

根据[官网](https://github.com/PyMySQL/mysqlclient-python)安装 python mysql 中间件

可能存在问题：  
解决方法：[改变 mysql_config 文件源码](https://blog.csdn.net/feilzhang/article/details/80787748)， mysql_config 的正确地址是 `/usr/local/Cellar/mysql-connector-c/6.1.11/bin/mysql_config`  
如果修改的是 `/usr/local/bin/mysql_config` 是没有作用的

报错：`mysql_config not found`  
解决方法：设置 mysql 全局变量 `export PATH=$PATH:/usr/local/mysql/bin`

或者在 _**init**.py_ 文件中加入代码（失效）

```
import pymysql

pymysql.install_as_MySQLdb()
```

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
不加 IP, 默认地址是 http://127.0.0.1:8000/，自定义IP无法启用

## Django Rest Framework

[Authentication credentials were not provided](https://stackoverflow.com/questions/26906630/django-rest-framework-authentication-credentials-were-not-provided)

## pip install 安装缓慢

-[让 PIP 源使用国内镜像，提升下载速度和安装成功率](https://www.cnblogs.com/microman/p/6107879.html)

```
$ pip install [package_name] -i https://pypi.tuna.tsinghua.edu.cn/simple
```

#### 常用命令

创建虚拟环境

```
$ mkvirtualenv my_django_environment
```

pip 安装指定版本

```
$ pip install [package_anme]==[version_name]
```

本地项目迁移

```
python manage.py makemigrations [,project_name]
```

映射数据库

```
python manage.py migrate [,project_name]
```

#### issues

运行项目报错 `Error: That port is already in use.`  
解决方法：

```
$ sudo lsof -t -i tcp:8000 | xargs kill -9
```

#### Django 发布部署

查看配置清单情况

```
$ python3 manage.py check --deploy
```
