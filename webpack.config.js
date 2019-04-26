const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, args) => {
  const isProduction = !args.mode || args.mode === 'production';

  return {
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js'
    },
    plugins: [
      new HtmlWebpackPlugin(
          {template: "./src/index.html"}
      )
    ],
    devServer: {
      https: false,
      // before(app) {
      //   app.use((req, res, next) => {
      //       //This will go away because we will use vue-router
      //     if (/\/\d+-\d+-\d+/.test(req.url)) {
      //       req.url = '/';
      //     }
      //     next();
      //   });
      //}
    }
  };
};