const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: process.cwd(),
  entry: {
    ReactStuff:[
     'react',
     'react-dom',
     'react-router',
     'redux',
     'react-redux',
     'axios',
     'lodash',
     'react-fontawesome',
     'react-hot-loader',
     'react-router-dom',
     'react-router-redux',
     'redux-devtools-extension',
     'redux-thunk',
     'webpack-dev-middleware',
     'webpack-hot-middleware',
     'promise',
     'jsx-loader',
     'jsonwebtoken',
    ],
    BootstrapStuff: [
     'react-bootstrap',
    ]
  },

 output: {
    filename: '[name].dll.js',
    path: '/',
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: '[name].json'
    })
  ],
  node: {
    fs: "empty",
    net: "empty",
    dns: "empty"
  }
};
