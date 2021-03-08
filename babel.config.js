module.exports = (api) => {
  api.cache(false);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: false,
          // corejs: '3',
          "modules": "commonjs"
        },
      ],
      "@babel/preset-react"
    ],
    // plugins: ["@babel/plugin-transform-modules-commonjs"],
  };
};
