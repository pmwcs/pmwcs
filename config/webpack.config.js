const { resolve } = require('path')
const rewire = require('./config/rewire.js')
const babel = require('./config/babel.dist.js')

const rootD = resolve(__dirname, '..')

const config = {
  mode: 'development',
  bail: false,
  devtool: '#cheap-module-source-map',
  module: {
    rules: [{
      test: /\\.(mjs|tsx?|jsx?)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: resolve(rootD, '.cache'),
          sourceType: 'unambiguous',
          ...babel
        }
      }],
      include: [
        rootD
      ],
      exclude: {}
    },
    {
      test: /\\.md$/,
      use: [{
        loader: 'raw-loader'
      }]
    },
    {
      test: /\\.css$/,
      sideEffects: true,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            postcss: {}
          }
        }
      ]
    },
    {
      test: /\\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\\?.*)?$/,
      loader: 'file-loader',
      options: {
        name: 'static/media/[name].[hash:8].[ext]',
        esModule: false
      }
    },
    {
      test: /\\.(mp4|webm|wav|mp3|m4a|aac|oga)(\\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }
    ]
  },
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.cjs'
    ],
    modules: [
      'node_modules'
    ],
    plugins: [{
      topLevelLoader: {}
    }]
  },
  resolveLoader: {
    plugins: [{}]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true,
    minimizer: []
  },
  performance: {
    hints: false
  }
}

module.exports = rewire.webpack(config)

// console.log(JSON.stringify(module.exports, null, 2))
