## 01

```js
{
presets: [  "@babel/preset-env",
  {
    useBuiltIns: false, // 设置为 'usage' | 'entry' 编译报错
    "modules": "commonjs"
  }],
}
```
这个错误相关[链接](https://github.com/zloirock/core-js/issues/410#issuecomment-396192746)， 添加 `loose: true`


## jsRule
不能复用原来的 babel-loader

## 经验证
1. script + external 无法兼容 ie8


## cachegorups 优先级
见 vue.config