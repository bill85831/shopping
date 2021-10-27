module.exports = {
  lintOnSave: false,
  publicPath: "./",
  configureWebpack: {
    externals: { jquery: "$" },
  },
};
