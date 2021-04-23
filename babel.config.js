module.exports = (api) => {
  api.cache(false);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: false,
          useBuiltIns: 'entry',
          corejs: '3',
          "modules": "commonjs",
          loose: true
          // debug: true
        },
      ],
      "@babel/preset-react"
    ],
    // plugins: ["@babel/plugin-transform-modules-commonjs"],
  };
};
