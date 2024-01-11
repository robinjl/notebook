## 快捷键

| 功能               | 快捷键           |
| ------------------ | ---------------- |
| 查看快捷键列表     | ⌘ + K, ⌘ + S     |
| 打开新窗口         | ⌘ + ⇧ + N        |
| 查看项目访问历史   | ⌘ + R            |
| 查看最近访问的文件 | ⌘ + P            |
| 定位到侧边栏       | ⌘ + 0            |
| 新建文件夹         | ⌘ + M（自定义）  |
| 新建文件           | ⌘ + N （自定义） |

## 前端开发使用技巧

- 保存文件时自动格式化
  例如前端使用了 `prettier`插件，setting 中勾选 `Editor: format on save` 选项

- 识别前端 @ 简写化的引用路径，点击引用可以直接跳转到相应文件（或组件）
  开启 `allowSyntheticDefaultImports`
  ```
  {
    "compilerOptions": {
      ...
      "allowSyntheticDefaultImports": true,
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
  ```

## 后端开发使用技巧

开发 Spring Boot, 需要更新 VS code, 要求 Java JDK 17+，安装插件 `Spring Boot Extension Pack`
Java Mac 安装位置`/Library/Java/JavaVirtualMachines`  
Java 安装方式 1：官网下载 pkg 2. homebrew
