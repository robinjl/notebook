# Vim

## 三种模式

1. 输入模式 i a o 
2. 命令模式 ESC 
3. 底线命令模式 :wq

## 配置.vimrc

腾讯云 CentOS vim位置 `/usr/share/vim`（Mac相同）  
下面有两个文件夹，例如 `vim74`(版本号) `vimfiles`
```
cd vim74
ls // 列出文件 vimrc_example.vim  
cp /usr/share/vim/vim74/vimrc_example.vim ~/.vimrc // 复制到根目录并创建文件 .vimrc 
```

## vimrc 参数

syntax on 开启语法高亮  
set nu 显示行号  
set ai 设置自动缩进  
set shiftwidth=4 自动缩进4个空格  
set tabstop=4 tab设置为4个空格

## 多文件编辑

:e filename  
:sp filename  
:vsp filename  
Ctrl + w 切换文件  
vim -o file1 file2 垂直打开  
vim -O file1 file2 水平打开

## 文件查找

:/name 从上之下
:?name 从下至上
n 切换下一个匹配 N 反向查找

## 文件替换

:s/before/after 替换当前行第一个匹配  
:n,$s/before/after 从第n行起到最后一行第一个匹配  
:%s/before/after/g 全文替换

## 操作

编辑状态 dd 快速删除一行
:noh 取消高亮