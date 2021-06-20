module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'standard',
    'standard-jsx',
    'plugin:jsx-a11y/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  rules: {
    'react/jsx-handler-names': 'warn',
    'node/no-path-concat': 'off'
  },
  settings: {
    react: {
      pragma: 'h',
      version: 'detect'
    }
  }
}
