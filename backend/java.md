# Java

## 视频课程

[Java 零基础入门到精通-上](https://ke.qq.com/course/375599?taid=2866267900197679)

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

## 配置开发环境

1. 安装 Java

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

## J2SE

## J2EE

#### SSH 框架

- Struts
- Spring
- Hibernate

#### SSM 框架

- Spring
- SpringMVC
- MyBaits

## J2ME

## Tomcat

## Maven
