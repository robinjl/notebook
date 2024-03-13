# React Simple Tutorial

转译文章：[Getting Started with React – An Overview and Walkthrough](https://www.taniarascia.com/getting-started-with-react/)  
源代码：[taniarascia/react-tutorial](https://github.com/taniarascia/react-tutorial)

## 前提 _Prerequisites_

- HTML & CSS
- JavaScript
- DOM
- ES6
- Node.js & NPM

## 目标 _Goal_

- 了解 React 的基本概念和相关工具，比如 Babel、 Webpack、 JSX、 components, props, state 和 lifecycle
- 创建一个简单的 React app, 讲解概念

## 什么是 React _What is React?_

- React 是一个 JavaScript 库（library)，GitHub 最受欢迎项目之一
- React 不是一个框架 (framework)
- Fackbook 开源项目
- React 用于创建前端 UI 层
- React 用于实现 MVC 架构的 View 层

React 一个主要特点是可以创建自定义的、可重用的组件, 快速搭建 UI 层； 同时使用 state 和 props 储存或处理数据

## 安装和部署 _Setup and Installation_

有两种方式

### 静态 HTML _Static HTML File_

这种方式并不推荐，类似于 jQuery 使用的思维方式，它不需要了解 Webpack、Babel 和 Node.js

示例 index.html
HTML 引入三个基本脚本库

- React： React Core API
- React DOM: React DOM API
- Babel: 将 ES6+ 转译成兼容浏览器的 JavaScript

### 官方脚手架工具 create-react-app

- 安装 Node (NPM)
- 安装 create-react-app

```
npm i create-react-app -g
```

- 创建应用

```
npx create-react-app [app_name]
```

- 运行应用

```
cd [app_name]
npm start
```

示例：  
删除 /src 自动生成的一些文件，只保留 index.js, index.css
index.css 替换样式  
[Primitive CSS](https://taniarascia.github.io/primitive/css/main.css)

### React Developer Tools

Chrome 插件

## JSX: JavaScript + XML

- JSX 写法

```
const heading = <h1 className="site-heading">Hello, React</h1>
```

- Non-JSX 写法

```
const heading = React.createElement(
  'h1',
  {className: 'site-heading'},
  'Hello, React'
)
```

JSX 语法是 JavaScript 的语法扩展, 所以它更接近于 JavaScript, 而不是 HTML  
⚠️ 需要注意以下几点：

- className 替换 class, 后者是保留字
- 属性或方法用小驼峰书写格式，比如 onclick 要写成 onClick
- 自闭合标签要以斜线结尾，比如 <img \/>

JavaScript 表达式可以在 JSX 中用花括号{} 包裹起来使用，比如变量、函数等

```
const name = 'Tania';
const heading = <h1>Hello, {name}</h1> ;
```

## Components

React 应用由各种组件构成，最后在一个统一的组件，通常是 App Component 中加载，每个组件通常对应一个文件

- Class Components
- Function Components
  组件自由组合、重用
  两种写法的比较

示例：

- 拆分 index.js, 创建 App.js
- 拆分 App.js, 创建 Table.js
- 拆分 Table.js, 创建 TableHeader.js, TableBody.js

## 属性 _Props_

- 父组件以数据流的形式传递给子组件属性
- React DevTools 查看属性
- props 通过函数组件的参数接收
- List 必须在每个元素中加上 key 属性，用于标识计算，否则会出现警告
- Props 是只读的

示例： 清除 TableBody table 数据，通过 index.js props 传递

## 状态 _State_

- 组件内可修改的私有属性（数据）
- 在与服务端交互前，具有对数据变更的自主权，比如购物车
- setState，改变数据方式

示例：

- 传递方法
- 增加删除按钮, 实现 delete 功能

## 表单提交 _Submitting Form Data_

- 去掉 index.js table 数据
- 实现 Form 组件, 实现 create 功能

## 调用 API _Pulling in API Data_

- Fetch API
- Lifecylce / ComponentDidMount
- Wikepedia API: "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"
