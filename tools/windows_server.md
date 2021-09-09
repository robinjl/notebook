# Windows Server

以 Windows Server 2012 为例

## Nginx

[Windows 服务器安装 Nginx 并配置服务](https://blog.winsky.wang/Nginx/Windows%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85Nginx%E5%B9%B6%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1/)

如果不配置全局变量，PowerShell Bash 都不能识别 nginx（报错：`bash: nginx: command not found`） 需要使用 CMD （Win + R）进入 nginx 安装目录下操作

```
// 启动
start nginx

// 修改配置后重新加载生效
nginx -s reload

// 关闭
nginx -s stop
```

[nginx 开机自启动](https://serverok.in/auto-start-nginx-on-windows)

## SSH

Windows Server2012 安装 OpenSSH 服务 [参考 1](https://segmentfault.com/a/1190000020166803) / [参考 2](https://www.pianshen.com/article/87221730998/) / [参考 3](https://www.pianshen.com/article/637599765/)

步骤：

1. 下载 [OpenSSH 对应版本](https//github.com/PowerShell/Win32-OpenSSH/releases) 到本地解压
2. 设置系统变量（可选）, 即便配置，有些命令仍然需要在 nginx 文件下执行，原因是 windows 路径配置并不正确，[参考](https://segmentfault.com/q/1010000002514451)
3. 在 OpenSSH 文件夹下执行命令 `./install-sshd.ps1`
4. 开启服务（services）启动 OpenSSH SSH Server
