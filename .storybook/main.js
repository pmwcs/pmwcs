const rewire = require('../config/rewire.js')

module.exports = {
  webpackFinal: async (config) => {
    const _config = rewire.webpack(config)
    // console.log(_config)
    return _config
  },
  stories: [
    '../src/**/*.stories.js'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ],
};
