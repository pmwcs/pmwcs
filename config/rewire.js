const path = require('path')

const root = path.resolve(__dirname, '..');

// a simple utility to chain all of our config overrides together
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

/**
 * This adds aliases for the build ../../common -> common/
 */
const addAliases = config => {
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    rmwc: path.resolve(root, 'src'),
    '@pmwc': path.resolve(root, 'src'),
    '@pmwc': path.resolve(root, 'src'),
    '@doc-utils': path.resolve(root, 'src', 'doc-utils')
  };

  return config;
}

const webpack = (config) => {
  console.log('Starting PMWC ❤️');
  return pipe(addAliases, config => {
    //console.log(config);
    return config;
  })(config)
}

module.exports = {
  webpack
}
