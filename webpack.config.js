'use strict'

const env = require('./lib/env')
const path = require('path')
const transform = require('lodash.transform')
const webpack = require('webpack')

const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': transform(env.all, (result, value, key) => {
    result[key] = JSON.stringify(value)

    return result
  }, {})
})

const plugins = [processEnvPlugin]

module.exports = {
  entry: {
    base: './panda-spa.jsx'
  }
, module: {
    rules: [
      {
        test: /\.(js|jsx)$/
      , use: [{
          loader: 'babel-loader'
        , options: {
            presets: [
              'es2015'
            , 'react'
            , 'stage-0'
            ]
          }
        }]
      }
    , {
        test: /\.json$/
      , use: ['json-loader']
      }
    , {
        test: /\.scss$/
      , use: [
          'style-loader'
        , 'css-loader'
        , {
            loader: 'sass-loader'
          , options: {
              includePaths: [
                './node_modules/compass-mixins/lib'
              ]
            }
          }
        , {
            loader: 'sass-resources-loader'
          , options: {
              resources: [
                './node_modules/compass-mixins/lib/_compass.scss'
              ]
            }
          }
        ]
      }
    , {
        test: /\.(svg|png|jpg)$/
      , use: ['url-loader']
      }
    ]
  }
, output: {
    filename: '[name].bundle.js'
  , path: path.resolve(__dirname, './dist')
  }
, plugins
, resolve: {
    extensions: [
      '.js'
    , '.jsx'
    , '.json'
    ]
  }
}
