# React

1. [React 官网](https://reactjs.org/)
2. [React Lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
3. [React 技术栈系列教程 - 阮一峰 著](http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html)
4. [React 简易教程](react-simple-tutorial/README.md)

## Redux

1. [Redux 官网](https://redux.js.org/)
2. [A cartoon intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)
3. Redux 相关组件

- redux-thunk
- redux-saga
- redux-logger
- redux-persist

## React 技术栈

1. Ant Design / Ant Design Pro
2. Next.js
3. Gatsby

## And Design issues

1. form 有时对复杂组件无法委托，比如 文件上传组件

2. modal 中 form initialValues 数据会滞后加载 Modal destroyOnClose + <Form preserve={false} /> 会清除 form 数据 或者不使用 initialValues，使用 form.setFieldsValue

3. 覆盖局部样式

如果组件没有提供样式属性 比如 style， 可以尝试包裹一层 div 样式 然后在样式中加入 :global() 覆盖 antd 全局样式， 例如 description 组件在 4.9.0 之前没有设置 label 样式的属性

```JSX
<div className="container">
   <Descriptions title="">
      <Descriptions.Item label="XX">
        XXXX
      </Descriptions.Item>
    <Descriptions>
</div>
```

```LESS
.container {
  :global(.ant-descriptions-item-label) {
    width: 200px;
  }
```
