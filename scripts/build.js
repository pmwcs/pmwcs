const fs = require('fs')
const { resolve, dirname } = require('path')
const { promisify } = require('util')
const globSync = require('glob').sync

const { exec } = require('child_process')
const execOpts = { stdio: 'inherit' }
const execP = promisify(exec)

// ----

const binDir = resolve(__dirname, '../node_modules/.bin')
const babel = resolve(binDir, 'babel')

const BABEL_OPTS = '--source-maps false --ignore "*.stories.js,dist,next"'
const BABEL_CONFIG_DIST = resolve(__dirname, '../config/babel.dist.json')
const BABEL_CONFIG_NEXT = resolve(__dirname, '../config/babel.next.json')

// ----

const getFiles = () => globSync(resolve(__dirname, '../src/*/package.json'))
  .map(pckJson => dirname(pckJson))

const clean = async ({ cwd, dirs }) => execP(
  `rm -rf ${dirs.join(' ')}`,
  { ...execOpts, cwd }
)

const transpile = async ({ cwd, config, outdir }) => execP(
  `${babel} ${BABEL_OPTS} --config-file ${config} -d ${outdir} .`,
  { ...execOpts, cwd }
)

const build = async () => {
  const dirs = getFiles()
  // const dirs = [ `${__dirname}/../src/base` ]

  for (let cwd of dirs) {
    console.log(cwd)
    await clean({ cwd , dirs: ['dist', 'next']})
    // run stuff in parallel
    transpile({ cwd, config: BABEL_CONFIG_DIST, outdir: 'dist' })
      .catch(err => console.error('%s %s', cwd, err.message))
    transpile({ cwd, config: BABEL_CONFIG_NEXT, outdir: 'next' })
      .catch(err => console.error('%s %s', cwd, err.message))
  }
}

build()
