import globals from'globals';
import pluginJs from'@eslint/js';
import jest from'eslint-plugin-jest';
import stylisticJs from'@stylistic/eslint-plugin-js';

export default[
  {
    files: ['**/*.js'],
    languageOptions: {sourceType: 'commonjs'},
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {languageOptions: {globals: globals.node}},
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/array-bracket-newline': ['error', {multiline: true}],
      '@stylistic/js/array-bracket-spacing': ['error'],
      '@stylistic/js/arrow-spacing': ['error'],
      '@stylistic/js/arrow-parens': ['error', 'as-needed'],
      '@stylistic/js/brace-style': ['error'],
      '@stylistic/js/block-spacing': ['error'],
      '@stylistic/js/comma-spacing': ['error'],
      '@stylistic/js/comma-style': ['error'],
      '@stylistic/js/dot-location': ['error'],
      '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
      '@stylistic/js/function-call-spacing': ['error'],
      '@stylistic/js/function-paren-newline': ['error', 'consistent'],
      '@stylistic/js/generator-star-spacing': ['error'],
      '@stylistic/js/key-spacing': ['error'],
      '@stylistic/js/keyword-spacing': ['error', {after: false}],
      '@stylistic/js/linebreak-style': ['error'],
      '@stylistic/js/lines-between-class-members': ['error'],
      '@stylistic/js/multiline-ternary': ['error'],
      '@stylistic/js/new-parens': ['error'],
      '@stylistic/js/no-confusing-arrow': ['error'],
      '@stylistic/js/no-extra-parens': ['error'],
      '@stylistic/js/no-extra-semi': ['error'],
      '@stylistic/js/no-floating-decimal': ['error'],
      '@stylistic/js/no-mixed-operators': ['error'],
      '@stylistic/js/no-multi-spaces': ['error'],
      '@stylistic/js/no-multiple-empty-lines': ['error', {max: 1}],
      '@stylistic/js/no-trailing-spaces': ['error'],
      '@stylistic/js/no-whitespace-before-property': ['error'],
      '@stylistic/js/nonblock-statement-body-position': ['error', 'below'],
      '@stylistic/js/object-curly-newline': ['error'],
      '@stylistic/js/object-curly-spacing': ['error'],
      '@stylistic/js/object-property-newline': ['error'],
      '@stylistic/js/operator-linebreak': ['error', 'before'],
      '@stylistic/js/padded-blocks': ['error', 'never'],
      '@stylistic/js/padding-line-between-statements': [
        'error', {
          blankLine: 'always',
          prev: 'var',
          next: 'return'
        }
      ],
      '@stylistic/js/quote-props': ['error', 'as-needed', {keywords: true}],
      '@stylistic/js/quotes': [
        'error', 'single', {avoidEscape: true,
          allowTemplateLiterals: true}
      ],
      '@stylistic/js/rest-spread-spacing': ['error'],
      '@stylistic/js/semi-spacing': [
        'error', {before: false,
          after: true}
      ],
      '@stylistic/js/semi-style': ['error'],
      '@stylistic/js/space-before-blocks': ['error', 'never'],
      '@stylistic/js/space-before-function-paren': ['error', 'never'],
      '@stylistic/js/space-infix-ops': ['error'],
      '@stylistic/js/space-unary-ops': ['error'],
      '@stylistic/js/switch-colon-spacing': [
        'error', {
          after: true,
          before: false
        }
      ],
      '@stylistic/js/template-curly-spacing': ['error'],
      '@stylistic/js/template-tag-spacing': ['error'],
      '@stylistic/js/indent': ['error', 2],
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      semi: 'error',
      'array-callback-return': [
        'error', {
          checkForEach: true,
          allowVoid: true
        }
      ],
      'for-direction': 'error',
      'getter-return': 'error',
      'no-setter-return': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-use-before-define': 'error',
      'block-scoped-var': 'error',
      camelcase: 'error',
      'no-unsafe-negation': 'error',
      'no-unused-vars': 'error',
      'no-ex-assign': 'error',
      'no-irregular-whitespace': ['error', {skipComments: true}],
      'no-var': 'error',
      'prefer-const': 'error'
    }
  }
];
