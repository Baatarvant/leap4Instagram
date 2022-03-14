module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'quotes': ["error", "double", { "allowTemplateLiterals": true }],
        'jsxSingleQuotes': 'false',
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
