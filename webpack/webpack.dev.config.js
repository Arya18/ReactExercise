var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: './client/index.js',
	output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
	},
  devServer: {
    inline: true,
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true
  },
	module: {
		loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
	},
}