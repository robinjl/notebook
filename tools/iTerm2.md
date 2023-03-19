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
4. 退出 session Ctrl + D

iterm 从远程服务器拷贝文件到本地，注意不是在已登录远程的情况下拷贝  
`scp root@[remote_ip_address]:/root/directory/file /Users/local/`

Windows 系统下使用 Xftp 和 Xshell

5. 设置跳转上/下一个单词

Preferences -> Profiles -> 选择 Profile -> Keys -> Key Mappings 

跳转到上一个单词

- Keyboard Shortcut: ⌥←
- Action: Send Escape Sequence
- Esc+: b

跳转到下一个单词

- Keyboard Shortcut: ⌥→
- Action: Send Escape Sequence
- Esc+: f

Presets 选择 Natural Text Editing

