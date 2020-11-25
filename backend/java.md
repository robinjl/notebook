# Java

## 视频课程

- [Java 零基础入门到精通-上](https://ke.qq.com/course/375599?taid=2866267900197679)
- [从 Java 后端到 Web 全栈](https://class.imooc.com/sale/javafullstack)

## IDE

IntelliJ IDEA
Eclipse

## 概念

1999.6 发布 Java 第二代平台，3 个细分版本：

1. Java2 Standard Edition (J2SE) 标准版 桌面级 C/S
2. Java2 Enterprise Edition (J2EE) 企业版 B/S
3. Java2 Micro Edition (J2ME) 移动端

Java 预研特性

1. 跨平台
2. 面向对象
3. 简单性
4. 健壮性
5. 多线程
6. 大数据开发

JVM Java Virtual Machine Java 虚拟机
JRE Java Runtime Environment Java 运行环境
JDK Java Development Kit Java 开发工具包

JDK 包含 JRE，JRE 包含 JVM

bin 目录包含工具集，其中 javac.exe 是编辑工具，java.exe 是执行工具

DO Data Object 数据对象  
DAO Data Access Object 数据访问对象 数据层->业务层 mybatis 中相当于 mapper, jpa 中相当于 model
DTO Data Transfer Object 数据传输对象 前端请求
BO Business Object 业务对象 service->controller
VO View Object 显示层对象

数据持久层 JPA(Java Persistance API) / MyBatis (MyBatis Plus) / iBatis / Hibernate

## 配置开发环境

1. Mac OS X 安装 Java

(1) 通过 Oracle Java 官网下载安装  
(2) 使用过 React Native，已经安装过 Java， [文档](http://facebook.github.io/react-native/docs/getting-started)  
 查看 Java 版本 `java -version`

通过 homebrew 安装 JDK

```
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

2. 设置 JAVA_HOME
   获取 JAVA_HOME 环境变量：

```
$ /usr/libexec/java_home
```

在 ~/.zshrc 中设置环境变量

```
$ vim ~/.zshrc
export JAVA_HOME=$(/usr/libexec/java_home)

$ source ~/.zshrc
```

是否配置成功

```
$ echo $JAVA_HOME
```

3. Linux 安装 Java8

```
yum install java-1.8.0-openjdk
```

安装在 /usr/lib/jvm

4. 查看版本

```
java -version
```

## J2SE

## J2EE

### SSH 框架

- Struts
- Spring
- Hibernate

### SSM 框架

- Spring
- SpringMVC
- MyBaits

## J2ME

## Tomcat

## Maven

1. 从网络中下载不了依赖包

手动下载安装包，IntelliJ -> File -> Project Structure -> Project Settings -> Libraries 找到依赖项，根据路径将下载的安装包放在该路径下  
虽然版本号会出现问题，但是不影响程序运行

## IntelliJ IDEA

1. 配置热更新
   （1）安装 SpringBoot DevTools
   （2）IDEA Build,Execution,Deployment -> Compiler -> 勾选 Build project automatically
   （3）Shift+option+command+/， 点击 Registry, 勾选 compiler.automake.allow.when.app.running

2. @Getter @Setter 但 IntelliJ 提示找不到 get()、set()方法
   pom.xml 中引入 lombok 包，IDE 安装 lombok 插件

3. intellij IDEA Properties 中文 unicode 转码问题
   Preferences -> Editor -> File Encodings -> utf-8 勾选 Transparent native-to-ascii conversion

4. console 日志有时不显示颜色问题
   application.properties 增加配置项 `spring.output.ansi.enabled = ALWAYS`

5. Java 注释格式化
   Preferences -> Code Style -> Java -> Code Generation(tab) -> Comment Code

6. 快捷键

多行编辑：Shift + Option + click

7. 在 resources/mapper/mapper.xml 文件中书写 sql
   Option + Enter -> Edit Generic SQL Fragment 或者 Language Injection Setting
    并且改成 Convert to MySQL 这时语句会高亮和格式化
   怎样换行缩进？

## 从 Java 后端到 Web 全栈教程笔记

1. IntelliJ 启动， `Edit Configuration` 选择主入口文件，`use classpath of module` 选择项目名称，
   而不是 main 或 test

2. 开闭原则 （OCP， open closed principle） 里氏替换原则 迪米特法则
   IOC Inverse of Control 控制反转, 论文 [Inversion of Control Containers and the Dependency Injection pattern](https://martinfowler.com/articles/injection.html)
   DI Dependency Injection 依赖注入 （1）属性注入 （2）构造注入
   DIP Dependency Inversion Principle 依赖倒置  
   Interface -> 设计模式：工厂模式 -> IOC / DI  
   面向抽象 -> OCP -> 编写可维护的代码  
   单纯的 interface 可以统一方法的调用，但不能统一对象实例化
   IOC 实现：容器 加入容器 注入  
   DI 是 IOC 的一种实现/应用

3. `xxx required a bean of type xxx`
   可能是 interface 没有找到实现，MyBatis Mapper 映射配置

4. 注解
   stereotype annotations 模式注解
   @Component 基础注解 组件/类/bean 类的实例化 加入容器
   @Controller @Repository @Service 衍生注解
   @Configuration

   Spring 默认 立即/提前对象实例化，但可以延迟实例化 @Lazy

5. 注入

Field 字段注入（成员变量注入） / constructor 注入 / setter 注入  
Spring 官方不推荐 field injection，推荐 constructor-based 注入

@Autowired 被动注入有两种方式： byType byName
byType

- 找不到任何一个 bean 报错
- 一个 直接注入
- 多个 不一定报错 按照字段名称推断选择哪个 bean

主动注入 使用@Qualifier(value="bean_name")

使用@Primary 优先注入

6. 注解与配置

@Conditional 注解 自定义条件注解  
SpringBoot 主要内置条件注解 @ConditionalOnProperty @ConditionalOnBean (当 Bean 存在时，引用注释的 Bean 被注入 IOC 容器)  
与之相反的是 @ConditionalOnMissingBean

7. 异常

Exception 分为  
Exception(CheckedException) 编译时异常处理  
RuntimeException 运行时异常

6. Entity 与数据库表
   JPA/Hibernate 实体类生成表  
   MyBatis 实体类生成表  
   先创建表，逆向生成实体类

7. JSON 序列化库
   Jackson / Fastjson

8. Spring 约定大于配置

9. 面向对象应对变化的方案
   （1）通过多个类实现同一个 interface
   （2）通过一个类的不同属性

### 阶段二 Java Spring API

1. JPA 逆向生成 Entity, 通过数据表生成 model
   (1) 引用 spring-boot-starter-data-jpa 依赖
   (2) IntelliJ 连接 Database
   (3) File -> Project Structure -> Project Settings -> Modules -> Current Project -> Add -> JPA -> Default JPA Provider -> Hibernate
   (4) View -> Tool Windows -> Persistance
   (5) 项目名称 -> 右键 -> Generate Persistance Mapping -> By database schema -> 选择数据源和 package

2. CodeGenerator

0.1.0 报错 应使用最新版本，待学习

3. 延迟思考

将不确定性的问题放在后面考虑

4. 字段类型

价格适合用 decimal， float/double 类型不够精确，价格也可以用 varchar 可以更好扩展，比如价格区间，9 ～ 15 元  
decimal(10, 2), "2"表示小数位数最大值，"10"表示总位数的最大值

5. 数据库增加冗余字段

有时，虽然通过连表（join）可以查询关联属性，但为了提高查询性能，可以考虑增加重复的冗余字段，直接查询

6. 懒加载

fetch = FetchType.Lazy 懒加载的作用就是不使用的字段,不去关联查询

7. 属性拷贝

- BeanUtils.copyPropertites(source, target)
- dozermapper 插件库
- dozermapper 可以进行深拷贝，例如 嵌套 model

8. 分类表设计

重要字段 is_root parant_id level  
路径表示法 记录子节点所有父节点的路径 例如 /node1_id/node2_id/node3_id/  
两级分类除了 category_id 还可以设置冗余字段 root_category_id 便于查询

9. 定义校验信息

ValidationMessages.properties 固定文件名

10. Json 与 Map/List 的映射实现

AttributeConverter

11. 分页参数
    PC 端 page, size  
    APP 端 start, count

12. servlet

servlet 是 java 一种接口标准, 相当于 python 中的 wsgi, uwsgi 是 wsgi 的一种实现  
tomcat 相当于 servlet 的容器

拦截： filter(servlet) interceptor aop

13. Java8

引入了 Optional 关键字、Stream 方法  
Optinal 是通过一种简洁的写法标注可能存在 Java 空指针情况

### 阶段三 Java CMS

1. 下载项目目前最新版本是 [tag 0.2.0](https://github.com/TaleLin/lin-cms-spring-boot/tree/sleeve-0.2.0)
2. 按照热更新配置，但是并没有起到作用
   原因：？
3. FileController.java、FileServiceImpl.java 编译报错
   原因：？
4. log.error / info 无法被 IDE 识别
   原因：？
5. create 方法执行后，create_time, update_time 没有赋值
   原因：字段没有设置默认值  
   解决：设置默认值 比如 CURRENT_TIMESTAMP，以及勾选“根据当前时间戳更新”
6. 分页处理，起始页从 0 开始 page 类型 Long 报错？Interger
7. MyBatis SQL 查询后的数据集要要映射到对象模型转化成 Java 对象，
   resultType 属性指向对象模型，而且是完整路径，IDE 右键模型，选择 copy reference 粘贴路径  
   resultMap 属性制定手写的 resultMap xml 表字段与对象属性同名，可以不用写 result 配置项
   二者选其一

8. JPA 与 MyBatis/MyBatis Plus 可以混合使用
   JPA 导航属性 自动生成 SQL， 但灵活控制查询语句需要较高的学习成本
   MyBatis 手写 SQL  
   JPA 使用单表查询（相对于联表查询）具有优势

## 部署

1. 打包：IntelliJ -> 右侧面板 -> Maven -> m(Excute Maven Goal) -> `mvn clean package`
   > 编译测试文件报错，忽略测试文件 `mvn clean package -DskipTests`
2. 命令行：
   `java -jar xxx.jar`  
   或者加上配置变量  
   `java -jar xxx.jar --spring.profiles.active=dev`
3. CentOS 保持项目运行
   `nohup java -jar xxx.jar`

4. 更新程序

   查看启动的所有线程：`ps aux|grep java`  
   定位端口号对应的线程 id `netstat -lnp|grep [ port_name ]`  
   杀掉线程：kill -9 线程 id  
   重启服务

**自动更新**
按照[官网教程](https://docs.spring.io/spring-boot/docs/current/reference/html/deployment.html#deployment-systemd-service)部署 systemd 方式， 在 /etc/systemd/system 下创建.service 文件。但存在一个问题，配置参数（ExecStart）为 jar 绝对路径，新包中如果有更新的版本号，就要再次修改路径，才能使用命令行启动

命令行

```
systemctl restart union-dev
```

编辑 .service 修改路径，保存后执行`systemctl daemon-reload`使之生效

## MyBatis

## MyBatis Plus

[Mybatis-Plus select does not list all fields, only query some fields](https://www.programmersought.com/article/67634618243/)

## MySQL

1. 存入数据库的时间差 8 小时，数据库配置项更新为 `serverTimezone=Asia/Shanghai`

2. 数据库的数据不止是完整的覆盖所有的数据，而且要针对业务（前端）给予良好的查询接口

## Spring Boot

1. [WebView 教程](https://spring.io/guides/gs/serving-web-content/)
1. 提交代码，总是先提交一个空类的文件，然后需要再次提交增加的代码？
2. @Controller 返回动态模版，如何与 @RestController 下的方法写在同一个 controller 文件里
3. UUID 存储，目前将 uuid 转化成 String，数据库默认排序
4. dozermapper 的使用, 简化分页单条数据模型
5. Integer int Long long Boolean boolean 区别
6. VO BO 区别
7. Mapper.xml 作用 及 SQL 查询
8. varchar(1) bit(1) boolean
9. 简便的方式获取人员姓名等信息
10. html 转换图片 [参考](https://my.oschina.net/u/4051898/blog/2990638)
    java - htmltoimage 很早就不维护了，勉强使用，问题如下：

- loadUrl() 不能引入外部 CSS 或内嵌 CSS，只能使用行内样式 loadHtml() 可以使用内嵌 CSS
- img 只能使用 width height 使用 style 不生效；
- 加载图片需要设置线程时间
- table border-collapse: collapse 不生效
- h1-h4 p 字体样式也要手写 很多常用样式并不适用

部署 Linux 需要下载中文字体库

- 安装插件 `yum -y install fontconfig`
- 将字体库文件放入 /usr/share/fonts 文件夹下
- 重启 Linux

手动下载 版本号出现问题，打包 Warning:

```
Downloading from central: https://repo.maven.apache.org/maven2/gui/ava/html2image/0.9/html2image-0.9.pom
[WARNING] The POM for gui.ava:html2image:jar:0.9 is missing, no dependency information available
The POM for gui.ava:html2image:jar:0.9 is missing, no dependency information available
```

15. Json Object（List） 互相转化
16. Spring Boot 调用外部 Web API, [参考](https://attacomsian.com/blog/spring-boot-resttemplate-post-request-json-headers)
