# Vim

## 配置 .vimrc

vim 安装位置 `/usr/share/vim`

```
cd vim74
# 默认配置文件 vimrc_example.vim
# 复制到根目录并创建文件 .vimrc
cp /usr/share/vim/vim74/vimrc_example.vim ~/.vimrc
```

## vimrc 参数

- syntax on 开启语法高亮
- set nu 显示行号
- set ai 设置自动缩进
- set shiftwidth=4 自动缩进 4 个空格
- set tabstop=4 tab 设置为 4 个空格

## 操作

- 编辑状态 dd 快速删除一行
- :noh 取消高亮
