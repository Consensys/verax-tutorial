const globals = require('globals');
const tsParser = require('@typescript-eslint/parser');
const { fixupConfigRules } = require('@eslint/compat');
const reactRefresh = require('eslint-plugin-react-refresh');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/.eslintrc.*',
      '**/eslint.config.*',
      '**/vite.config.*',
      '**/tsconfig*.json',
    ],
  },
  js.configs.recommended,
  ...fixupConfigRules(compat.extends(
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  )),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['src'],
          alias: {
            '@': './node_modules',
          },
        },
      },
    },
    rules: {
      'react-refresh/only-export-components': ['warn', {
        allowConstantExport: true,
      }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
];
