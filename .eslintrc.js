module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'export', next: 'export', error: true },
      { blankLine: 'always', prev: 'block-like', next: '*', error: true },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './']],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
