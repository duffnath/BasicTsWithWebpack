const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
          inject: false,
          template: require('html-webpack-template'),
          title: 'Fancy Webpack Bundle',
          headHtmlSnippet: '<script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>',
          bodyHtmlSnippet: '<div id="app"></div>'          
        })
    ],  
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};