const path = require('path');

module.exports = {
  entry: './ui/modulesjs/components/src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './ui/static')
  },
  module:{
      rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
