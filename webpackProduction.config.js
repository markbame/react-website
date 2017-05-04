var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CompressionPlugin = require('compression-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {

  devtool: 'source-map',
  entry: {
    items: './react/items',
    account: './react/account',
  },
  output: {
    filename: "./express/public/[name].abenyu.js",
    chunkFilename: "./express/public/[id].js"
  },
	module: {
      loaders: [
      {
          test: /\.js$/,
          loaders: ['react-hot'],
          include: path.join(__dirname, 'web')
      },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
         }
          ,
          {
              test: /\.less$/,
              loader: "style-loader!css-loader!less-loader"
          },
          {
              test: /\.scss/,
              loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
          },
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
          },
          {
              test: /\.json$/,
              loader: 'json-loader'
          }, {
              test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
              loader: 'url?limit=100000@name=[name][ext]'
          },{
              test: /\.(png|jpg|)$/,
              loader: 'url-loader?limit=200000'
          }
      ]
   },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("base"),
    new ExtractTextPlugin({
			filename: "./express/public/styles/[name].css"
		}),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new ExtractTextPlugin("/express/public/abenyu.js"),
    new webpack.optimize.UglifyJsPlugin({compressor: {
        warnings: false
      }}),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env':{
        'REACT_ENV': JSON.stringify("development"),
        'REACT_DEBUG': JSON.stringify("TRUE"),
        'REACT_URL': JSON.stringify("https://xxxx.com/"),
        'REACT_API': JSON.stringify("https://xxxx.com:3031/"),
        'REACT_URL_APP': JSON.stringify("https://xxxx.amazonaws.com/xxxx/"),
        'REACT_URL_UPLOADS': JSON.stringify("/uploads/"),
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  node: {
    fs: "empty",
    net: "empty",
    dns: "empty"
  }
};
