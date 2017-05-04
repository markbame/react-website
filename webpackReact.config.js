const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: ['./react/exam/exam','webpack/hot/only-dev-server','webpack-dev-server/client?http://0.0.0.0:3030']
  },
  output: {
    path: '/',
    filename: '[name].bundle.js',
    publicPath: '/'
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
                plugins: [
                  'transform-decorators-legacy'
                ],
                presets: ['react', 'es2015','stage-1']
            }
         }
          ,
          {
              test: /\.less$/,
              loader: "style-loader!css-loader!less-loader"
          },
          {
              test: /\.scss/,
              loader: "style-loader!css-loader!sass-loader"
          },
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
          },
          {
              test: /\.json$/,
              loader: 'json-loader'
          }, {
              test: /\.(eot|woff|woff2|otf|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
              loader: 'url-loader?limit=100000@name=[name][ext]'
          },{
              test: /\.(png|jpg|)$/,
              loader: 'url-loader?limit=200000'
          }
      ]
   },
  plugins: [
    new webpack.DllReferencePlugin({
      context: "dll",
      manifest: require('./ReactStuff.json')
    }),
    new webpack.DllReferencePlugin({
      context: "dll",
      manifest: require('./BootstrapStuff.json')
    }),
    new webpack.optimize.CommonsChunkPlugin("base"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'global.GENTLY': false,
      'process.env':{
        'REACT_ENV': JSON.stringify("development"),
        'REACT_DEBUG': JSON.stringify("TRUE"),
        'REACT_URL': JSON.stringify("https://dev.loc.com:3030"),
        'REACT_API': JSON.stringify("https://dev.loc.com:3031"),
        'REACT_S3': JSON.stringify("https://xxxx.amazonaws.com"),
        'REACT_URL_APP': JSON.stringify("https://xxxx.amazonaws.com/xxxx/"),
        'REACT_URL_UPLOADS': JSON.stringify("https://xxx.amazonaws.com/xxxx/")
      }
    })
  ],
  node: {
    __dirname: true,
    fs: "empty",
    net: "empty",
    dns: "empty"
  }
};
