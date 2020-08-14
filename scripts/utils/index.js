const os = require('os')

const { concurrency } = require('./concurrency.js')

const cpus = () => Math.max(1, os.cpus().length - 1)

module.exports = {
  cpus,
  concurrency
}
