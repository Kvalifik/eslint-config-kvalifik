module.exports = {
  extends: [
    'standard',
    'standard-react',
    'eslint-config-esnext'
  ],
  rules: {
    'class-methods-use-this': 0,
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'react/jsx-curly-newline': 0,
    'react/jsx-no-bind': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'max-len': ['error', {
      'code': 100,
      'tabWidth': 2
    }]
  },
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true
  }
}
