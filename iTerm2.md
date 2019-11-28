# iTerm2

[使用iTerm2快捷连接SSH](https://blog.csdn.net/fangxiaoji/article/details/50710220)

1. 在 ~/.ssh 下创建脚本
2. iTerm -> Preferences -> Profiles -> add Profile -> Command 中输入 `expect ~/.ssh/[scirpt_name]` 
3. Profiles -> [script_name]
4. 退出 session  Ctrl + D

iterm 从远程服务器拷贝文件到本地，注意不是在已登录远程的情况下拷贝  
`scp root@[remote_ip_address]:/root/directory/file /Users/local/`

Windows 系统下使用 Xftp 和 Xshell