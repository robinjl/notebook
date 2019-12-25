# Vue

## 学习资源

[Vue 从入门到实战【渡一教育】](https://ke.qq.com/course/432878?taid=3542458961402606)

## 知识点

1. 插值表达式 {{ }} 小胡子 mustache
2. v-bind 简写 `<img v-bind=src="" />` 或 `<img :src="" />`
3. v-on 简写 `<button v-on:click="handleClick">` 或 `<button @click="handleClick">`
4. v-if v-else v-if-else
5. v-show  
v-if 与 v-for 的区别  
（1）v-if 控制 dom 的移除/添加， v-show 控制 dom 样式（display）显示/隐藏  
（2）v-if 可以写在 template 中，v-show 不可以
6. v-for 循环数组、对象、数字、字符串

```
<li v-for:"(item, index) in array">{{item}}</li>
<p v-for:"(value, key, index) in object">{{value}}</p>
```

7. 通过索引方式或长度更改数组，不会重新渲染视图  
数组变异方法：push, shift, pop, unshift, splice, reverse,sort
8. 对象添加或删除属性，不会重新渲染视图，使用 `vm.$set`
9. v-model 数据双向绑定
10. watch 侦听器
11. computed 计算属性
12. vue 执行顺序 data > methods > computed
13. 组件 Vue.component 全局组件 / 局部组件
14. 组件数据传递 父传子 props 子传父 \$emit('event', value)
15. 属性校验
16. $refs ref: dom 引用该对象，组件是实例对象  
ref 同名时，引用指向最后一个元素  
v-for 中使用 ref, 引用值为数组，每一个元素是 dom 对象或组件的实例对象

## 插件

VS Code: Vetur

## 脚手架

@vue/cli  
@vue/cli-service-global 可以单独编译一个 Vue 文件

## Vue 技术栈

1. Element
2. avue

