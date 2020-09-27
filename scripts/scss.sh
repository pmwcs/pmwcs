#!/usr/bin/env bash

# extracts all .css styles from `styles.js` files and
# prepares them for use with sass
# if used with preact-cli build add the generated `index.scss` file to
# `src/style` and run with `npm preact build`
# Don't forget to install `npm i -D sass-loader node-sass`

# set -x

CWD=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

cd "$CWD/.."

FONTS=$(cat <<EOS
// fonts
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Sharp');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Two+Tone');

@import '~@pmwcs/base/normalize';
EOS
)

CSS=$(cat src/**/styles.js | \
  egrep -v "/styles'|@pmwcs/base/normalize.css" | \
  sort -u | \
  sed -e "s#^import '#@import '~#g; s#\.css'#';#g;"
)

echo -e "$FONTS\n$CSS" | tee "src/pmwcs/index.scss"
