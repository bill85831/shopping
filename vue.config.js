module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/shopping/'
    : './',
  configureWebpack: {
    externals: { jquery: "$" },
  },
};
