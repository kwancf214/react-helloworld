const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const environment = env ? env : 'debug';
  const buildPath = 'bin/' + environment;
  let siteTitle = 'React Webpack App';
  switch (environment) {
    case 'release':
      
      break;
    
    default:
      siteTitle = environment.toUpperCase() + ' - ' + siteTitle;
      break;
  }
  
  return {
    entry: [
      './src/index.js'
    ],
    output: {
      path: __dirname + '/' + buildPath,
      publicPath: '',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './' + buildPath
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/,
          loader: ['style-loader', 'css-loader', 'less-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: siteTitle,
        filename: 'index.html',
        template: 'src/assets/html/index.html'
      })
    ]
  }
};