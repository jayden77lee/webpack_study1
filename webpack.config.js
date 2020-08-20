const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: "./src/index.js", // string | object | array
  output: {
    path: path.resolve(__dirname, "public"), // string
    filename: "index_bundle.js", // string
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};