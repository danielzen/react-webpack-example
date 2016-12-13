let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

module.exports = {
  entry: [
    path.resolve(__dirname,'src/index.js')
  ],
  output: {
    path: __dirname,
    filename: '/static/js/bundle.js'
  },
  module: {
    target: 'node',
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: { presets: ['es2015', 'react'] }
    },
    {
      test: /\.css$/,
      loader: 'style!css?importLoaders=1!postcss'
    },
    {
      test: /\.(svg)$/,
      loader: 'file',
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\.(ico)$/,
      loader: 'url',
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }]
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: 'http://localhost:8080/public'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname,'public/index.html')
    })
  ]
};
