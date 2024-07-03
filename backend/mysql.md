# MySQL

## 资源

- [MySQL Tutorial](https://www.mysqltutorial.org/)
- [MySQL 5.7 Reference Manual](https://dev.mysql.com/doc/refman/5.7/en/)
- [SQL 教程-廖雪峰](https://www.liaoxuefeng.com/wiki/1177760294764384)
- [腾讯课堂](https://ke.qq.com/course/431451?term_id=100515157&taid=3746143490446683)

## 客户端

### Navicat

1. 数据库较大时，导出 SQL 文件迁移，会很慢，源数据库使用"新建备份"创建备份，然后在目标数据库中选择"还原备份从"选择备份文件，速度很快

### Workbench

ER(entity-relationship)  
EER(enhanced entity-relationship)

设计 EER Diagram, File -> New Model/Open Model  
将 EER 导出 SQL script, File -> Export -> Forward Enginner SQL CREATE Script  
通过 script 生成 database

将已有 database 生成为 EER v
Database -> Reverse Engineer

EER 导出为其他格式文件 File - Export -> Export as PNG / SVG / PDF

### Sequel Pro

export / import .sql 文件 导出/引入数据库文件

1. 连接本地数据库，一种方式是 `standard 127.0.0.1`，一种方式是 `socket 192.168.1.177`
2. 导入数据有中文时报错，调整字符集，Preference -> General -> utf-8

bug: 只有一个数据表操作窗口，增加 tab，关闭 tab，会意外闪退

#### DataGrip

1. 导出数据库： 选择数据库 -> 右键 -> Dump with 'mysqldump'
2. 导入数据库： schemes 下创建数据库 -> 右键 -> Restore with 'mysql' 或者 打开.sql 文件运行->tab 右键-> run -> 选择数据库
3. 在自动生成的命令上加上-d 参数, 就可以仅仅导出表结构而不包含数据

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
create database [database_name] character utf8;  // 指定字符集 无效

CREATE DATABASE [database_name]
  CHARACTER SET utf8
  COLLATE utf8_general_ci;
```

修改数据库字符集

```
ALTER DATABASE [database_name] DEFAULT CHARACTER SET character_name [COLLATE ...];
```

把表默认的字符集和所有字符列（CHAR,VARCHAR,TEXT）改为新的字符集：

```
ALTER TABLE [table_name] CONVERT TO CHARACTER SET character_name [COLLATE ...]
如：ALTER TABLE [table_name] CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci;
```

只是修改表的默认字符集：

```
ALTER TABLE [table_name] DEFAULT CHARACTER SET character_name [COLLATE...];
如：ALTER TABLE [table_name] DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
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
       species VARCHAR(20), sex CHAR(1), birth DATE, death DATE) ENGINE=InnoDB DEFAULT CHARSET=utf8;
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

[替换字段值](https://www.sqltutorial.org/sql-string-functions/sql-replace/)

```
UPDATE employees
SET
    email = REPLACE(email,
        'sqltutorial.org',
        'acme.com')
WHERE
    employee_id = 100;
```

字段中添加内容

```
UPDATE book SET image = CONCAT('https://domain.com/assets/', image)
```

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

## 删除 Column

```
ALTER TABLE [table_name] DROP COLUMN [column_name];
```

## 删除带有外键约束的记录

```
set foreign_key_checks = 0; // 关闭外键检查
delete from [table_name] where ...;
set foreign_key_checks = 1; // 重新开启外键检查
```

## MySQL 重置自增 ID 方法

[参考](https://www.cnblogs.com/pengai/articles/15816839.html)

```sql
// 删除 id 不连续的列
// 第一列 id 1, 第二列 id 1000, 使 id 连续，下一列恢复为 id = 2;
delete from [table_name] where id = 1000;
// 重置自增 id
alter table [table_name] auto_increment = 2;
```

Lombok @Data @Getter @Setter

Navicat 数据库迁移

Navicat 数据库备份
