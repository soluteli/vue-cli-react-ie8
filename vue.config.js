module.exports = {
  // https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
  async chainWebpack (config) {
    console.log('chainWebpack')
    
    return config
  }
}