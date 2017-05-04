
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpackReact.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    poll: 400
  },
  hot: true,
  historyApiFallback: true
}).listen(3030, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://<localip>:3030/');
});
