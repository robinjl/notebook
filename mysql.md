# MySQL

## 资源

- [MySQL 5.7 Reference Manual](https://dev.mysql.com/doc/refman/5.7/en/)
- [MySQL Tutorial](http://www.mysqltutorial.org/)
- [腾讯课堂](https://ke.qq.com/course/431451?term_id=100515157&taid=3746143490446683)

## 命令

连接服务

```
mysql -u user -p[database_name]
```

退出

```
quit (\q)
```

查看版本号

```
select version();
```

查看当前选择的数据库

```
select database();
```

查看数据库

```
show databases;
```

选择数据库

```
use [database_name];  // 切换
select database();    // 查看当前使用
```

创建数据库

```
create database [database_name];
create database [database_name] character utf8;  // 指定字符集
```

查看数据库定义信息

```
show create database [database_name];
```

删除数据库

```
drop database [database_name];
```

修改数据库

```
alter database [database_name] character set utf8;
```

列出所有表

```
show tables;
```

创建表

```
CREATE TABLE pet (name VARCHAR(20), owner VARCHAR(20),
       species VARCHAR(20), sex CHAR(1), birth DATE, death DATE);
```

查看表

```
describe(desc) [table_name];
show create table [table_name];
```

读取本地文件数据

```
LOAD DATA LOCAL INFILE '/path/pet.txt' INTO TABLE pet;
```

插入数据

```
mysql> INSERT INTO pet
       VALUES ('Puffball','Diane','hamster','f','1999-03-30',NULL);
```

Using AUTO_INCREMENT

```
CREATE TABLE animals (
     id INT(5) NOT NULL AUTO_INCREMENT,
     name CHAR(30) NOT NULL,
     PRIMARY KEY (id)
);
```

增加 column

```
ALTER TABLE pet
ADD COLUMN avatar VARCHAR(255);
```

## Workbench

Navicat 是付费的v

ER(entity-relationship)  
EER(enhanced entity-relationship)

设计 EER Diagram, File -> New Model/Open Model  
将 EER 导出 SQL script, File -> Export -> Forward Enginner SQL CREATE Script  
通过 script 生成 database

将已有 database 生成为 EER  v
Database -> Reverse Engineer

EER 导出为其他格式文件 File - Export -> Export as PNG / SVG / PDF

## Sequel Pro

export / import .sql 文件 导出/引入数据库文件

## 字段类型

字符串 varchar char  
数值 int bigint float double  
布尔 bit (1/0)  
日期 date time datetime timestamp(值为空，则保存系统当前时间)  
大数据 blob (mp4, mkv)  
文本 text 

## 单表约束

```
create table [database_name] (
     id int primary key,
     phone char(11) unique,
     birthday date not null
)
```
