const webpack = require('webpack');
const library = '[name]_lib';
const path = require('path');

module.exports = {
  entry: {
    vendors: ['react','react-dom','react-redux','redux','react-router-dom','lodash','axios','qs','react-loadable']
  },

  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname,'static'),
    library
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '[name]-manifest.json'),
      // This must match the output.library option above
      name: library
    }),
  ],
}