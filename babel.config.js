module.exports = {
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        useBuiltIns: "usage",
        corejs: "3.38.1",
        targets: {
          chrome: "121",
        },
        modules: "auto",
      },
    ],
  ],
};
