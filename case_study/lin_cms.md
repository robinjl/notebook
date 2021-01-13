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

`npm run build` 以后 `import 'cropperjs/dist/cropper.css'` css 文件并没有打入包  
新建 css 文件 复制源码中样式 引用新文件

css 报错 `CSS error source-map information is not available at URL() declaration (found orphan CR, try removeCR option)`  
resolve-url-loader options 选项中添加 `removeCR: true`

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

2. 权限及 Token

权限（分组）使用注解 @GroupMeta 定义到每一个 Controller (API) 上，项目运行程序自动检索，从而写入或更新数据库  
此时 访问接口需要先验证是否有 Token(是否过期、是否是 CMS 存在的用户) 然后才能调用  
CMS 前端菜单显示/隐藏或按钮的启用/禁用 是通过判断是否是 storage 中存储的所有 permission 之一  
问题是 一个 API 打上了注解后 C 端的 token 如何校验呢？ 因为 C 端一是不是动态分组，而是并不是 CMS 端的用户

解决方法：

1. 以分页列表为例 写一个假的接口 打上注解 用于 CMS 前端用于显示/隐藏该菜单之用，而真实的接口不需要打上注解 供 CMS C 端共同使用 Controller 名称要区分

2. CMS 前端一般是常见的 CRUD 菜单中是否隐藏 也可以根据 是否具有创建的权限 来简单判断

以上两种方法 视业务而定

3. 同一个 Controller 使用多个注解 ？ CMS 一个 C 端一个？
