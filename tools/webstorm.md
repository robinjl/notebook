# WebStorm

## 快捷键

| 功能               | 快捷方式     |
| ------------------ | ------------ |
| 打开最近的文件     | Command + E  |
| 全局搜索文件、代码 | double Shift |

## 插件

#### Prettier

安装插件，[WebStorm 启用 Prettier](https://prettier.io/docs/en/webstorm.html)  
shortcut: `Alt-Shift-Cmd-P`  
项目级使用，根目录创建配置文件 _.prettierrc_  
WebStorm 按照 Airbnb JSX 风格指南设置的一些规则处理

- JSX 自闭合标签前留出一个空格 Preferences -> Code Style -> HTML -> Other -> In empty tag 勾选
- ES6 import/export braces 留出空格 Preferences -> Code Style -> JavaScript -> Spaces -> ES6 import/export braces 勾选

## 关于激活

#### 2020.1.4 更新

[永久激活](https://www.52pojie.cn/thread-1067129-1-1.html)  
[IntelliJ IDEA 2019.3 利用补丁永久破解激活教程](https://www.jiweichengzhu.com/article/2940ed65c94f4671ae3f3aa72e168673)

步骤:

1. 将破解补丁 jetbrains-agent.jar 放在电脑某文件下
2. 进入 WebStorm, 如果无法进入，选择试用进入
3. Menu -> Help -> Edit Custom VM Options..., 配置补丁文件绝对路径（以 Mac 为例） `-javaagent:/Users/username/jetbrains-agent.jar`
4. 重新启动， Menu -> Help -> Register 选择 license server -> 点击 Discover Server
   或者手动输入 `http://jetbrains-license-server`
5. Activation code 输入 ACTIVATION_CODE.txt 内的注册码

#### 2019.12.11 更新

1. _已失效_ [THIS LICENSE 56ZS5PQ1RF HAS BEEN CANCELLED](https://www.cnblogs.com/ISJI/p/11670764.html)  
   必须刷新 DNS；Mac 刷新 DNS 缓存 `sudo killall -HUP mDNSResponder`

2. _已失效_ [分享几个 IntelliJ IDEA 2019 激活码（破解码、注册码），亲测可用](https://www.jiweichengzhu.com/article/eb340e382d1d456c84a1d190db12755c)

3. _已失效_ [WebStorm 激活](http://idea.lanyus.com/)