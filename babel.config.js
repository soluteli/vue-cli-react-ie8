module.exports = (api) => {
  api.cache(false);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: 'entry',
          corejs: '3',
          // "modules": "commonjs"
        },
      ],
      "@babel/preset-react"
    ],
    plugins: ["@babel/plugin-transform-modules-commonjs"],
  };

  // const envOptions = {
  //   useBuiltIns: 'usage',
  //   corejs: '3',
  //   "modules": "commonjs"
  // }
  // return {
  //   sourceType: 'unambiguous',
  //   overrides: [{
  //     exclude: [/@babel[\/|\\\\]runtime/, /core-js/],
  //     presets: [[require('@babel/preset-env'), envOptions], "@babel/preset-react"],
  //     // plugins
  //   }, {
  //     // there are some untranspiled code in @babel/runtime
  //     // https://github.com/babel/babel/issues/9903
  //     // include: [/@babel[\/|\\\\]runtime/],
  //     presets: [
  //       [require('@babel/preset-env'), envOptions]
  //     ]
  //   }]
  // }
};
