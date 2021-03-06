const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    silkyWave: ['./src/js/silky-wave/index.js', './src/scss/main.scss'],
    blur: ['./src/js/blur/index.js'],
    greenScreenKeying: ['./src/js/green-screen-keying/index.js'],
    inclinedWallBall: ['./src/js/inclined-wall-ball/index.js', './src/scss/main.scss'],
    elastic2d: ['./src/js/elastic-2d/index.js', './src/scss/main.scss'],
    magnetAnimation: ['./src/js/magnet-animation/index.js', './src/scss/main.scss'],
    particleSys: ['./src/js/particle-sys/index', './src/scss/main.scss']
  },
  output: {
    filename: 'assets/js/[name].js',
    chunkFilename: '[name].min.js',
    path: resolve(__dirname, 'build'),
    clean: true,
  },
  target: 'web',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    open: true,
    compress: true,
    // host: '192.168.1.104'
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      },
      {
        test: /\.mp4$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/video/[name][ext]'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../'
            }
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  require('postcss-preset-env')()
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(otf|eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[name][ext]'
        }
      }

    ]
  },
  resolve: {
    alias: {
      '@img': resolve(__dirname, './src/img/'),
      '@font': resolve(__dirname, './src/font/')
    }
  },
  plugins: [
    new OptimizeCssAssetsWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './assets/css/[name].css'
    }),
    new HtmlWebpackPlugin({
      chunks: ['inclinedWallBall'],
      filename: `inclined-wall-ball.html`,
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['elastic2d'],
      filename: `elastic-2d.html`,
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['magnetAnimation'],
      filename: `magnet-animation.html`,
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['particleSys'],
      filename: `particle-sys.html`,
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['greenScreenKeying'],
      filename: `green-screen-keying.html`,
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['blur'],
      filename: `blur.html`,
      template: './index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['silkyWave'],
      filename: `silky-wave.html`,
      template: './index.html'
    }),



  ]
}