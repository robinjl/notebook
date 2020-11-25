## lin-cms

### 概述

1. 后端基于开源项目 [lin-cms-spring-boot](https://github.com/TaleLin/lin-cms-spring-boot)
2. 前端基于开源项目 [lin-cms-react](https://github.com/Bongkai/lin-cms-react)
3. 文档 [lin-doc](http://doc.cms.talelin.com/)

### lin-cms-react

#### issues

1.  webpack 编译时，忽略 eslint 校验错误中断

解决方法：在`config/webpack.config.js`对 js 校验增加如下配置

```
...
{
  options: {
    ...
    emitWarning: true
  }
}
```

2. 编译提示 `Browserslist: caniuse-lite is outdated run next command`

解决方法： 删除 package-lock.json 中 caniuse-lite 的引用，重新安装

3. 部署到服务器，nav-tab 样式缺失

解决方法：`components/base/swiper/swiper.scss` 增加样式

```
.swiper-wrapper{
  display: flex;
  flex-direction: row;
}
```

4. 默认头像为 null

解决方法：在`store/getters/app.getters.ts`文件中修改 handleAvatar 函数及默认头像地址

5. 源码提交的是 Windows CRLF 规则，团队协作 WebStorm Code Style -> line separator 统一设置 Windows 格式，要么调整源码格式

6. Webpack 打包太慢，重构太慢，打包体积大; 目前判断是 Less 样式的影响

7. 头像上传 Modal 裁剪打包后样式有问题

8. /:id 路由无法在 tab 上显示问题

#### 组件

- [tinymce-react](https://github.com/tinymce/tinymce-react) 富文本编辑器
- [Braft Editor](https://github.com/margox/braft-editor) 富文本编辑器

#### 新技能

1. x-if 是如何实现的

[babel-plugin-react-directives](https://github.com/peakchen90/babel-plugin-react-directives) 可以使用类似于 Vue 的 v-if v-for v-for 指令

### lin-cms-spring-boot

1. resources/code-message.properties 中文 unicode 转码
   Preferences -> Editor -> File Encodings -> 勾选 Transparent native-to-ascii conversion
