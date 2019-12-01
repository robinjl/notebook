# React Native

[命令行启动 Android 模拟器](https://developer.android.com/studio/run/emulator-commandline) 
```
emulator -list-avds // Nexus_5X_API_28
emulator -avd Nexus_5X_API_28
```

RN 60.0 + 增加了快速启动脚本
```
npm run ios
npm run android
```
同时默认支持 pod 

ios/Podfile.lock 默认为在 git 版本管理中，团队中 cocoapods 可能会不同 pod install 会改变该文件  
统一 cocoapods 方法：
```
sudo gem list cocoapods 查看当前版本信息
sudo gem uninstall cocoapods 删除
sudo gem install cocoapods -v [version] 安装指定版本
```