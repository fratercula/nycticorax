module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 0,
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'no-continue': 0,
    'no-use-before-define': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/state-in-constructor': 0,
    'func-names': ['error', 'never'],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
  },
}
