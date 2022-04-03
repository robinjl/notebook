# NPM

npm 5.0+ install package 直接加入到 package.json 的 dependencies  
npm 5.2+ npx  
`npm init` 如果没有指定仓库，会提示 WARN: No repository field，可以在 package.json 加上 `"private": true`，私有化仓库，屏蔽提示信息  
`npm audit fix` 监测并修改潜在的缺陷(vulnerabilities)

[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)  
[npx 使用教程](http://www.ruanyifeng.com/blog/2019/02/npx.html)
npx 允许调用项目内部安装的模块，即 node_modules/.bin/module_name  
使用全局模块运行，但并不安装， 如 npx create-react-app react-app  
参数：`--no-install` 强制使用本地模块 / `--ignore-existing` 强制使用远程模块

NPM 全局安装权限错误， 解决方法：

```
$ sudo chown -R $(whoami) /usr/local/lib/node_modules/
```

## 卸载 node / npm

```
rm -rf /usr/local/bin/node
rm -rf /usr/local/bin/npm
```

## .npmrc

taro 项目中 配置了 .npmrc

```
registry=https://r.cnpmjs.org
disturl=https://r.cnpmjs.org/node
sass_binary_site=https://r.cnpmjs.org/node-sass/
fse_binary_host_mirror=https://r.cnpmjs.org/fsevents
```

安装源访问不到 node-sass 安装失败 使用淘宝镜像 [整理 Mac 系统 node-sass 安装失败的原因及解决办法](https://www.cnblogs.com/renxiaoren/p/11903792.html)

## nvm

M1 芯片 nvm 安装 node 报错 [nvm install node fails to install on macOS Big Sur M1 Chip](https://github.com/nvm-sh/nvm/issues/2350)

原因可能是程序的硬件兼容性问题

> iTerm -> 显示简介 -> 使用 Rosetta 打开，能够暂时解决这个问题

## npm 全局包

查看 npm 全局安装包 `npm list -g --depth=0` 这里的位置是 /Users/robin/.nvm/versions/node/ 各node版本 lib 下全局安装包

但有时删除包后，还是可以使用，例如 react-native-cli 

参考 [npm install -g not working while uninstalling react-native-cli](https://stackoverflow.com/questions/54034545/npm-install-g-not-working-while-uninstalling-react-native-cli)

位置在 `/usr/local/lib/node_modules` 在这里才能删掉

