module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      '@umijs/babel-preset-umi/app.js'
    ]
  }
}
