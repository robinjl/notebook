# iTerm2

[使用 iTerm2 快捷连接 SSH](https://blog.csdn.net/fangxiaoji/article/details/50710220)

1. 在 ~/.ssh 下创建脚本

```
#!/usr/bin/expect -f
set user root
set host [host_ip]
set password [password]
set timeout -1

spawn ssh $user@$host
expect "*assword:*"
send "$password\r"
interact
expect eof
```

!> 变量（比如密码）中含有 \$ 等特殊符号时，需要转义

2. iTerm -> Preferences -> Profiles -> add Profile -> Command 中输入 `expect ~/.ssh/[scirpt_name]`
3. Profiles -> [script_name]
4. 退出 session，Ctrl + D
