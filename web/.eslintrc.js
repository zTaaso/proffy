module.exports = {
  env: {
    es6: true,
    node: true,
  },
  // extends: ['prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: 'next' }],
    camelcase: 'off',
  },
};
