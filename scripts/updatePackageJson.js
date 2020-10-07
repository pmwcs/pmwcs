/**
 * helper script to change all package.json files in src
 *
 * @type {[type]}
 */

const { resolve, dirname } = require('path')
const fs = require('fs')
const globSync = require('glob').sync

const pck = (component) => ({
  // homepage: 'https://github.com/pmwcs/pmwcs#readme',
  // keywords: [
  //   'pmwcs',
  //   'preact',
  //   'material',
  //   'web',
  //   'components',
  //   component
  // ],
  // repository: {
  //   type: 'git',
  //   url: 'git+https://github.com/pmwcs/pmwcs.git',
  //   directory: `src/${component}`
  // },
  bugs: {
    url: 'https://github.com/pmwcs/pmwcs/issues'
  }
})

const getFiles = () => globSync(resolve(__dirname, '../src/*/package.json'))
  .map(pckJson => dirname(pckJson))

const read = (filename) => JSON.parse(fs.readFileSync(filename, 'utf8'))
const save = (filename, data) =>
  fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf8')

const merge = (dir) => {
  const filename = `${dir}/package.json`
  const component = dir.replace(/^.*[/]([^/]*)$/, '$1')
  const data_ = read(filename)
  const data = { ...data_, ...pck(component) }
  console.log(filename, data)
  save(filename, data)
}

function main (prematureExit) {
  if (prematureExit) return
  const dirs = getFiles()
  console.log(dirs)
  dirs.forEach(dir => merge(dir))
}

main(true)
