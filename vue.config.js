module.exports = {
  // https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
  async chainWebpack(config) {
    // config
    //   .optimization
    //   .minimizer('terser')
    //   .tap(args => {
    //     // console.log(args)
    //     args[0].terserOptions.ie8 = true
    //     return args
    //   })
    // config.entry('ie8-pollyfill')
    //   .add(path.join(process.cwd(), 'src', 'react-ie8-pollyfill.js'));
    
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
    // config.module.rule('js').uses.delete('babel-loader')

    config.module.rules.delete('js')
      
    config.module.rule('jsx')
      .test(/jsx?$/)
      // .exclude.add(/core-js/)
    config.module.rule('jsx')
      // .use('es3-loader')
      //   .loader(require.resolve('es3ify-loader'))
      //   .end()
      .use('babel-loader')
        .loader(require.resolve('babel-loader'))
   
    // config.plugin('debug')
    //   .use(path.resolve('./myWebpackDebugPlugin.js'))

    // config.plugins.clear()
    // config.plugins.delete('html')
    // config.plugins.delete('preload')
    // config.plugins.delete('prefetch')
    
    // console.log("chainWebpack", JSON.stringify(config.toConfig(), null, 2));
  }
};
