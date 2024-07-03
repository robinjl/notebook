# Django

## Python 风格指南

[Google Python 风格指南](https://zh-google-styleguide.readthedocs.io/en/latest/google-python-styleguide/)

## 常见问题

1. Mac 下安装 mysqlclient 报错问题

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

1. [Authentication credentials were not provided](https://stackoverflow.com/questions/26906630/django-rest-framework-authentication-credentials-were-not-provided)

2. DRF 文档返回结果

```
{
    "detail": "You do not have permission to perform this action."
}
```

这是因为 scheme（接口列表） 是空的，源码判断混淆，[参考](https://github.com/encode/django-rest-framework/issues/6801)

3. django class
   报错：`has no attribute 'get_extra_actions'`

解决方法：？

## pip install 安装缓慢

-[让 PIP 源使用国内镜像，提升下载速度和安装成功率](https://www.cnblogs.com/microman/p/6107879.html)

```
pip install [package_name] -i https://pypi.tuna.tsinghua.edu.cn/simple
```

#### 常用命令

创建虚拟环境

```
mkvirtualenv my_django_environment
```

pip 安装指定版本

```
pip install [package_anme]==[version_name]
```

创建应用

```
python manage.py startapp [app_name]
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
sudo lsof -t -i tcp:8000 | xargs kill -9
```

报错 `django.db.utils.ProgrammingError: (1146, "Table 'xxx' doesn't exist")`  
解决方法：?

#### Django 发布部署

查看配置清单情况

```
python3 manage.py check --deploy
```

#### 技术点

1. Word 转 PDF  
   python-docx 插件要求文件必须是 docx，不能是 doc，也不能是把 doc 尾缀直接搞成 docx，否则会报错 `Package not found`  
   先创建好文件夹，才能保存文件  
   文件不能被替换，比如 example.docx 创建后，再生成是无法覆盖的

**Linux 环境配置**

[参考文档](https://www.cnblogs.com/ruozhu/p/11190195.html)  
安装 LibreOffice  
下载[LibreOffice_6.2.5.2_Linux_x86-64_rpm.tar.gz](https://www.libreoffice.org/download/download/)

解压安装：

```
tar -zxvf LibreOffice_6.2.5.2_Linux_x86-64_rpm.tar.gz
cd LibreOffice_6.2.5.2_Linux_x86-64_rpm/RPMS/
yum localinstall *.rpm
```

安装其他依赖：

```
yum install cairo cups-libs libSM
yum install ibus
yum install libreoffice-headless
```

查看是否安装成功：

```
libreoffice -help
libreoffice6.2 –help
```

将 window 环境字体拷贝至 linux 中
windows 文件夹 C:\\windows\\Fonts 文件夹中所有内容拷贝至 linux 中/usr/share/fonts/chinese 文件夹下，没有就新建

修改字体缓存、权限

```
chmod -R 755 /usr/share/fonts/chinese
fc-cache –fv
fc-list | grep chinese //查看安装的新字体
```

**macOS 环境配置**

[LibreOffice on Mac 报错](https://github.com/unoconv/unoconv/issues/391)  
[Installing unoconv on OS X](<https://docs.moodle.org/35/en/Universal_Office_Converter_(unoconv)#Installing_unoconv_on_OS_X>)  
软件下载 1G+，暂未测试

问题：排版对齐，下划线，字体

2. 金额字体大写转换

[转换人民币大写 Python 版](https://github.com/Sandwych/rmb_converter/blob/master/src/python/rmb_upper.py)

3. macOS 本地 Python 环境允许访问 https

授权本地调试 报错`post connect failed. [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1056)`  
参考：[Mac OSX python ssl.SSLError: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (\_ssl.c:749)](https://stackoverflow.com/questions/42098126/mac-osx-python-ssl-sslerror-ssl-certificate-verify-failed-certificate-verify)  
解决方法： 运行命令

```
open /Applications/Python\ 3.7/Install\ Certificates.command
```

#### 映射数据库出现的问题

1. 重复列名 `Duplicate column name [column_name]`

删除 Column

```
ALTER TABLE [table_name] DROP COLUMN [column_name];
```

2. 已存在表 Table already exits

删除 migrations 对应 py 文件相应的表模块

3. 已经建立表（existing schema）的情况

```
python manage.py migrate --fake
```

[Create initial migrations for existing schema](https://stackoverflow.com/questions/29888046/django-1-8-create-initial-migrations-for-existing-schema)

## 其他

[BasicComparisonFilters](https://code.djangoproject.com/wiki/BasicComparisonFilters)
[Mac 彻底卸载 Python](https://huybien.com/how-to-completely-uninstall-python-on-macos/)

## CentOS 配置 Django 项目生产环境

1. 安装 Nginx
2. 安装 python3，自带包管理工具 pip3

```bash
pip --version     # Python2.x 版本命令
pip3 --version    # Python3.x 版本命令
```

[pip 使用国内镜像源](https://www.runoob.com/w3cnote/pip-cn-mirror.html)

单独安装包文件

```
pip install [package_name] -i https://pypi.tuna.tsinghua.edu.cn/simple
```

3. [安装虚拟环境](https://developer.mozilla.org/zh-CN/docs/Learn/Server-side/Django/development_environment#%E5%AE%89%E8%A3%85%E8%99%9A%E6%8B%9F%E7%8E%AF%E5%A2%83%E8%BD%AF%E4%BB%B6)

```bash
pip3 install virtualenvwrapper
```

配置 `~/.bashrc` 文件，注册全局变量

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

重启文件

```bash
source ~/.bashrc
```

创建虚拟环境

```bash
mkvirtualenv [env_name]
```

安装依赖包

```bash
pip3 install SomePackage              # 最新版本
pip3 install SomePackage==1.0.4       # 指定版本
```

运行虚拟环境

```bash
workon [virtualenv_name]
```

4. 运行项目

```bash
python manage.py runserver 0.0.0.0:8000
```

5. 导出依赖包列表，应用于其他环境

```bash
python -m pip freeze > requirements.txt  # 导出安装包
pip3 install -r requirements.txt         # 安装包列表
```

项目可能陈旧，安装包可能无法安装，可以通过硬拷贝的方式部署新环境  
macOS / Linux 虚拟环境位置及安装包文件是 `.virtualenvs/[virtualenv_name]/lib/[python]/site-packages`

安装包依赖有冲突时，可扩展版本号

```bash
[package_name] >= 1.5   # 可以是 1.5 1.6 2.0
[package_name] ~= 1.5   # 可以是 1.5 1.6
```

6. 安装 uwsgi

方式一：[官网](https://uwsgi-docs.readthedocs.io/en/latest/Download.html)下载 stable 版本

```bash
tar -zxvf uwsgi                 # 解压文件
cd uwsgi                        # 进入解压目录
python3 setup.py install        # 安装
```

方式二： 命令行

```
pip3 install uwsgi
```

安装报错 `Python.h：没有那个文件或目录`

解决 `yum install -y python3-devel`

https://www.liujiangblog.com/course/django/181

报错 django.db.utils.ProgrammingError: (1146, "Table XXX doesn't exist")

7. 配置 uwsgi.ini

在项目根目录下新建文件 `uwsgi.ini`

```bash
[uwsgi]
socket=:7010                                  # 对本机8000端口提供服务
chdir=/root/projects/[project_name]           # 项目根目录
master=true                                   # 主程序
processes=4
threads=2
module=RiskManagement.wsgi:application        #
pidfile=%(chdir)/uwsgi.pid
```
