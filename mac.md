# MacBook / iPhone 

## MacBook 常用软件

| 软件         | 功能         |
| ------------ | ------------ |
| MagicanRest  | 休息提醒     |
| VirtualBox   | 免费的虚拟机 |
| Folx         | 下载工具     |
| Charles      | 抓包工具     |
| Dr.Cleaner   | 系统清理工具 |
| SmartSVN     | 管理工具     |
| Alfred       | 快速搜索工具 |
| ForkLift     | FTP        |

## macOS 查看本地 IP

```
$ ipconfig getifaddr en0
或者
$ ifconfig | grep inet
```

## Mac 屏幕共享

系统偏好设置 -> 共享 -> 屏幕共享  
共享电脑安装 `VNC Viewer`， 直接输入共享 Mac ip 地址，输入 IP（账户/密码）

## Mac 快捷键

| 操作               | 快捷键              |
| ------------------ | ------------------- |
| 聚焦搜索 Spotlight | Command + Space     |
| 显示/隐藏 文件     | Command + Shift + . |

## Mac 看根目录文件大小分布

```
$ du -sh *
```

查看 Library 下文件分布

```
$ cd Library
$ du -d 1 -h
```

## 查看 iOS simulator 列表

```
$ xcrun simctl list devices
```

`Error：Unable to boot device because it cannot be located on disk`, 解决办法：

```
$ xcrun simctl erase all
```

## iPhone 投影到 MacBook

1. iPhone 数据线连接 MacBook
2. MacBook 开启 QuickTime player, 目录 -> 文件 -> 新建影片录制
3. 按录制旁边的选项，选择连接的 iPhone