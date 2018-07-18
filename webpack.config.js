const path = require('path');

module.exports = {
  entry: './src/client/index.tsx',
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    poll: 1000
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'JSON' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')
  }
};