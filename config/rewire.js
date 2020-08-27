const path = require('path')

const root = path.resolve(__dirname, '..')

// a simple utility to chain all of our config overrides together
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

/**
 * This adds aliases for the build ../../common -> common/
 */
const addAliases = config => {
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    '@pmwcs': path.resolve(root, 'src'),
    '@doc-utils': path.resolve(root, 'src', 'doc-utils')
  }

  return config
}

const webpack = (config) => {
  console.log('Starting PMWCS ❤️')
  return pipe(addAliases)(config)
}

module.exports = {
  webpack
}
