const _merge = require('lodash.merge')

module.exports = _merge(
  {},
  require('../babel.config.json'),
  {
    presets: [
      '@babel/preset-env'
    ]
  }
)
