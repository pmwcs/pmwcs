const { resolve, dirname, relative } = require('path')
const { promisify } = require('util')
const chalk = require('chalk')
const globSync = require('glob').sync
const { concurrency, cpus } = require('./utils')
const { exec } = require('child_process')
const execOpts = { stdio: 'inherit' }
const execP = promisify(exec)

// ----

const rootd = resolve(__dirname, '..')
const binDir = resolve(rootd, 'node_modules/.bin')
const babel = resolve(binDir, 'babel')

const BABEL_OPTS = [
  '--source-maps false',
  '--ignore "*.stories.js,*.spec.js,dist,next,node_modules"'
].join(' ')
const BABEL_CONFIG_DIST = resolve(__dirname, '../config/babel.dist.js')
const BABEL_CONFIG_NEXT = resolve(__dirname, '../config/babel.next.js')

// ----

let failed = false

const genIndexScss = async () => execP(
  './scss.js',
  { ...execOpts, cwd: __dirname }
)

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

const buildPackage = async ({ cwd }) => {
  try {
    await clean({ cwd, dirs: ['dist', 'next'] })
    await Promise.all([
      await transpile({ cwd, config: BABEL_CONFIG_NEXT, outdir: 'next' }),
      await transpile({ cwd, config: BABEL_CONFIG_DIST, outdir: 'dist' })
    ])
      .then(arr => {
        console.log('%s %s\n  %s',
          chalk.green('✔ PASS'), relative(rootd, cwd),
          arr.map(({ stdout }) => stdout).join('  ').replace(/\s+$/m, '')
        )
      })
  } catch (err) {
    failed = true
    console.error('%s %s %s', chalk.red('✖ FAIL'), relative(rootd, cwd), err.message)
  }
}

const build = async () => {
  await genIndexScss()
  const dirs = getFiles()
  // const dirs = [ `${__dirname}/../src/base` ]
  const queue = dirs.map(cwd => () => buildPackage({ cwd }))
  await concurrency(cpus(), queue)
  if (failed) {
    process.exit(1)
  }
}

build()
