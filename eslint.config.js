import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'build'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:prettier/recommended',
    ],
    files: ['**/*.{ts,tsx}'],
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': ['error', { singleQuote: true, semi: false }],
      'no-console': 'warn',
      'react/prop-types': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": ["tailwind", "apply", "variants", "responsive", "screen"]
        }
      ]
    },
  },
)
