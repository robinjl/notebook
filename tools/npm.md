# NPM

## 淘宝镜像

**临时使用**

```
npm --registry https://registry.npm.taobao.org install [package]
```

**永久使用**

```
npm config set registry https://registry.npm.taobao.org
```

## 卸载 node / npm

```
rm -rf /usr/local/bin/node
rm -rf /usr/local/bin/npm
```

## NVM

M1 芯片 nvm 安装 node 报错 [nvm install node fails to install on macOS Big Sur M1 Chip](https://github.com/nvm-sh/nvm/issues/2350)

原因可能是程序的硬件兼容性问题

> iTerm -> 显示简介 -> 使用 Rosetta 打开，能够暂时解决这个问题

设定 Nodejs 默认版本

```
nvm alias default [version]
```

## npm 全局包

查看 npm 全局安装包 `npm list -g --depth=0` 这里的位置是 /Users/robin/.nvm/versions/node/ 各 node 版本 lib 下全局安装包

但有时删除包后，还是可以使用，例如 react-native-cli

参考 [npm install -g not working while uninstalling react-native-cli](https://stackoverflow.com/questions/54034545/npm-install-g-not-working-while-uninstalling-react-native-cli)

位置在 `/usr/local/lib/node_modules` 在这里才能删掉
