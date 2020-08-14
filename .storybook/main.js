const rewire = require('../config/rewire.js')

/* eslint-disable no-unused-vars */
function replacer (key, value) {
  if (value instanceof RegExp) {
    return `/${value.source}/${value.flags || ''}`
  }
  return value
}
function fsWrite (config) {
  require('fs').writeFileSync(
    'config/webpack.config.json',
    JSON.stringify(config_, replacer, 2),
    'utf8'
  )
}
/* eslint-enable */

module.exports = {
  webpackFinal: async (config) => {
    const config_ = rewire.webpack(config)
    // fsWrite(config_)
    return config_
  },
  stories: [
    '../src/**/*.stories.js',
    // '../src/textfield/textfield.stories.js'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ],
};
