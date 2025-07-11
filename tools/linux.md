# Linux

## Command

```bash
# 查看所有端口占用情况
sudo netstat -tulnp
# 或
sudo ss -tulnp

# 搜索指定端口号（如8080）
sudo netstat -tulnp | grep 8080
# 或
sudo ss -tulnp | grep 8080

# 杀掉进程（PID为1234）
sudo kill -9 1234
```
