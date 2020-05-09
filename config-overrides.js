const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
// Specify separate paths
const path = require('path');
const APP_DIR = path.resolve(__dirname, './src');
const MONACO_DIR = path.resolve(__dirname, './node_modules/monaco-editor');


module.exports = {
  test: /\.css$/,
  include: APP_DIR,
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
    options: {
      modules: true,
      namedExport: true,
    },
  }],
}, {
  test: /\.css$/,
  include: MONACO_DIR,
  use: ['style-loader', 'css-loader'],
}


module.exports = function override(config, env) {
  config.plugins = [
    ...config.plugins,
    new MonacoWebpackPlugin()
];

config.module.rules.push(
  {
    test: /\.module\.css$/,
    use: [
      'style-loader',
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]'
        }
      }
    ],
    include: path.resolve('src')
  }
)

return config;
}

