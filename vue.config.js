module.exports = {
  // https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
  async chainWebpack(config) {
    console.log("chainWebpack");
    // config
    //   .optimization
    //   .minimizer('terser')
    //   .tap(args => {
    //     // console.log(args)
    //     args[0].terserOptions.ie8 = true
    //     return args
    //   })
    config.optimization.minimizers.delete("terser");
    config.optimization.delete("splitChunks");
    config.optimization
      .minimizer("uglifyJs")
      .use(require.resolve("uglifyjs-webpack-plugin"), [
        {
          uglifyOptions: {
            warnings: false,
            parse: {},
            compress: false,
            mangle: true,
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: true,
            keep_fnames: false,
          },
        },
      ]);

    // config.module.rule('js').exclude.clear()
    config.module.rule('js').uses.delete('babel-loader')
      
    config.module.rule('js')
      .use('es3-loader')
        .loader(require.resolve('es3ify-loader'))
        .end()
      .use('babel-loader')
        .loader(require.resolve('babel-loader'))
  }
};
