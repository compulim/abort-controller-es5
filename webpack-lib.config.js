const { join, resolve } = require('path');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        include: [
          join(__dirname, 'node_modules/abort-controller/'),
          join(__dirname, 'node_modules/event-target-shim/')
        ],
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  forceAllTransforms: true
                }
              ]
            ]
          }
        }
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs2',
    path: join(__dirname, 'lib')
  }
};
