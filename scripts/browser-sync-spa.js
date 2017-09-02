'use strict'

const browserSync = require('browser-sync').create()
const historyApiFallback = require('connect-history-api-fallback')

browserSync.init({
  files: ['dist'],
  server: {
    baseDir: 'dist',
    middleware: [historyApiFallback()],
  },
})
