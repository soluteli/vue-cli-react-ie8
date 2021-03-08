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