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

## jsRule
不能复用原来的 babel-loader