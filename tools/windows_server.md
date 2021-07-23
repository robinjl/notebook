# Windows Server

以 Windows Server 2012 为例

## Nginx

[Windows 服务器安装 Nginx 并配置服务](https://blog.winsky.wang/Nginx/Windows%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%AE%89%E8%A3%85Nginx%E5%B9%B6%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1/)

PowerShell Bash 都不能识别 nginx（报错：`bash: nginx: command not found`） 需要使用 CMD （Win + R）进入 nginx 安装目录下操作

```
// 启动
start nginx

// 修改配置后重新加载生效
nginx -s reload

// 关闭
nginx -s stop
```

nginx 开机自启动 ？



## SSH

1. [Windows Server2012 64位安装OpenSSH服务](https://www.pianshen.com/article/87221730998/)
2. Bitvise SSH Client

ssh windows server?
