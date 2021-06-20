#!/usr/bin/env node

/**
 * extracts all .css styles from `styles.js` files and
 * prepares them for use with sass
 * if used with preact-cli build add the generated `index.scss` file to
 * `src/style` and run with `npm preact build`
 * Don't forget to install `npm i -D sass-loader node-sass`
 */

const fs = require('fs')
const globSync = require('glob').sync

const head = `// fonts
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Sharp');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone');

@import '~@pmwcs/base/normalize';
`

const findStyleFiles = () => globSync(`${__dirname}/../src/*/styles.js`)

const uniq = arr => Array.from(new Set(arr))

const readFiles = (files) => files
  .reduce((content, filename) => {
    content += fs.readFileSync(filename, 'utf8') + '\n'
    return content
  }, '')

const filter = (content) => uniq(content.split(/[\r\n]/)).sort()
  .filter(line =>
    !line.includes('@pmwcs/base/normalize.css') &&
    !line.includes('/styles')
  )
  .filter(Boolean)
  .map(line => line
    .replace(/^import '/, "@import '~")
    .replace(/\.css'/, "'")
    .replace(/[^']*$/, ';')
  )
  .join('\n')

const writeScssFile = (filename, content) => {
  fs.writeFileSync(filename, content, 'utf8')
}

const main = () => {
  const content = head + filter(readFiles(findStyleFiles()))
  writeScssFile(`${__dirname}/../src/pmwcs/index.scss`, content)
}

main()
