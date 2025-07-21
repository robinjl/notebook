# Taro

## 参考资料

### 授权

- [支付宝-用户授权](https://opendocs.alipay.com/mini/introduce/authcode)
- [Taro 小程序开发大型实战（三）：实现微信和支付宝多端登录](https://juejin.im/post/5e10118be51d454165777203)
- [小程序登录 之 支付宝授权](https://www.cnblogs.com/leechenxiang/p/9673344.html)

### 支付

- [小程序支付](https://opendocs.alipay.com/mini/00arkf)
- [商家签约管理](https://opendocs.alipay.com/isv/10292/qpukdr)

### OCR

- [百度 AI 营业执照识别](https://ai.baidu.com/ai-doc/OCR/sk3h7y3zs)
- [支付宝开放平台 OCR](https://docs.open.alipay.com/20181207111249105865)
- [OCR 火眼识别](https://docs.open.alipay.com/api_166/aft.aifin.fireeye.ocr.image.query)
- [百度 AI 营业执照识别](https://ai.baidu.com/ai-doc/OCR/sk3h7y3zs)

## 适配问题

### Taro

1. Taro.request 封装了各端的网络请求，直接使用 fetch 报错
2. `ERROR: Module build failed (from ./node_modules/@tarojs/mini-runner/dist/loaders/fileParseLoader.js): SyntaxError: Unexpected token` 出现这个报错的可能情况是：组件名称不能与小程序内置组件重名，比如 Form
3. @tarojs/redux connect 第一个参数 mapStateToProps 必须是函数，不能是 null (Redux 可以)
4. JSX map 循环参数暂时不支持使用 Object pattern 解构 5.含有 JSX 的 switch case 语句必须每种情况都用花括号 `{}` 包裹结果
5. 通过全局变量 process.env.TARO_ENV 解决适配问题
6. 路由定义规范 连字符，下划线 页面命名
7. 适配问题
8. tabBar list tab 对象中因为写了没有的属性（例如 color）导致部分真机测试 tabbar 不可见 switchBar 无效
9. Taro-UI/AtButton 不支持 openType="getAuthorize"，支付宝报错 isv.invalid-auth-relations（无效的授权关系）

### H5

1. 上传图片: 文件对象不识别
2. tabBar debug 模式下会出现闪屏问题

### 支付宝小程序

1. 配置域名白名单
2. 域名是 https
3. 设置域名后，需要重新打包发布
4. 真机调试 picker mode='date' 格式是'2020/02/29'，模拟机是'2020-02-29'，需要准换
5. IDE 切换 tab 后之前 tab 页面的交互，点击没有反应
6. 个人开发的小程序（体验版，尚未进入审核）要先删掉所有版本，才能删除应用
7. 发送体验版二维码在支付宝 IM 中发送，手机微信无法扫描
8. 只支持上传 image/audio/video 文件
9. 不支持查看 word 文档，my.openDocument 暂时只支持预览 PDF 格式文件，只支持真机测试
10. 不支持 PDF 本地保存
11. 如何再次弹出用户信息授权弹窗 - 在支付宝客户端-我的-设置-安全设置-账号授权里面去解除授权才可以再次弹窗
12. compressImage 小于 1M 的图片没有效果，几 M 的图片有压缩效果，但压缩等级间没有差别，可能取决于图片格式及压缩算法
13. 支付宝本地无法授权获取 user_id, access_token
14. 不能通过代码唤起分享面板，目前只能通过 button 或者右上角菜单唤起分享面板 onShareAppMessage

### 微信小程序

1. "redirectTo:fail can not redirectTo a tabbar page" , 跳转到 tabBar 页面需要使用 switchTab
2. 左上角主页按钮，会跳转到主页，解决入口文件是 Splash 开屏页的情况
