module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules', 'src'],
            extensions: ['.js', '.json'],
          },
        },
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'import/no-extraneous-dependencies': ['off'],
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      globals: {
        mount: true,
        shallow: true,
        render: true,
      },
      rules: {
        'react/react-in-jsx-scope': ['off'],
      },
    },
  ],
};
