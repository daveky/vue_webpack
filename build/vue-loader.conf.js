var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  loaders: {
    // load scss file globally
    // scss: 'vue-style-loader!css-loader!sass-loader?data=@import "./src/assets/scss/_dashboard";'
    scss: 'vue-style-loader!css-loader!sass-loader'
  },
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
