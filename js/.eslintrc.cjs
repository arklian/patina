module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    "react/jsx-curly-brace-presence": ['error', {
      "props": 'ignore',
      "children": 'always',
      "propElementValues": 'always',
    }],
    'import/extensions': 'off',
    semi: ['error', 'never'],
    '@typescript-eslint/semi': 'off',
    'no-unexpected-multiline': 'error',
  },
}
