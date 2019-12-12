## NPM

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