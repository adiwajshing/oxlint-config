import { defineConfig } from 'oxlint'

export default defineConfig({
	plugins: ['typescript', 'unicorn', 'oxc'],
	jsPlugins: [
		'@stylistic/eslint-plugin',
		'eslint-plugin-simple-import-sort'
	],
	env: {
		browser: true
	},
	options: {
		// required for typescript/no-misused-promises, a type-aware rule
		typeAware: true,
		typeCheck: true
	},
	rules: {
		'unicorn/no-array-for-each': 'error',
		'unicorn/empty-brace-spaces': 'error',
		'typescript/prefer-for-of': 'error',
		'unicorn/consistent-function-scoping': [
			'error',
			{
				checkArrowFunctions: false
			}
		],
		'unicorn/no-await-expression-member': 'error',
		'unicorn/no-lonely-if': 'error',
		'unicorn/no-object-as-default-parameter': 'error',
		'unicorn/prefer-array-find': 'error',
		'unicorn/prefer-array-some': 'error',
		'max-depth': ['error', 4],

		'typescript/no-misused-promises': [
			'error',
			{
				checksSpreads: true,
				checksVoidReturn: false,
				checksConditionals: true
			}
		],

		'typescript/prefer-optional-chain': ['error'],
		'typescript/no-unnecessary-type-assertion': ['error'],
		'typescript/no-unnecessary-type-constraint': ['error'],
		'typescript/no-redundant-type-constituents': ['error'],
		'typescript/no-inferrable-types': ['error'],

		'typescript/no-explicit-any': [
			'warn',
			{
				ignoreRestArgs: true
			}
		],

		'@stylistic/type-annotation-spacing': ['error'],
		'@stylistic/max-len': ['error', { code: 80, tabWidth: 2 }],

		'@stylistic/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
					requireLast: false
				},

				singleline: {
					delimiter: 'comma',
					requireLast: false
				}
			}
		],

		'typescript/no-unused-vars': ['error'],
		'typescript/consistent-type-imports': ['error'],

		'typescript/no-non-null-asserted-optional-chain': ['off'],
		'no-extra-boolean-cast': ['error'],

		'no-unneeded-ternary': ['error'],

		'no-constant-condition': ['error'],
		'no-constant-binary-expression': 'error',
		'@stylistic/no-trailing-spaces': 'error',
		'@stylistic/no-multi-spaces': 'error',
		'@stylistic/space-infix-ops': 'error',
		'@stylistic/indent': ['error', 'tab'],

		'@stylistic/quotes': [
			'error',
			'single',
			{
				avoidEscape: true
			}
		],

		'@stylistic/object-curly-spacing': ['error', 'always'],
		'@stylistic/space-in-parens': ['error', 'never'],
		curly: [2, 'all'],
		'@stylistic/brace-style': ['error'],
		'@stylistic/linebreak-style': ['error', 'unix'],
		'@stylistic/semi': ['error', 'never'],
		'@stylistic/space-before-function-paren': ['error', 'never'],

		'@stylistic/keyword-spacing': [
			'error',
			{
				overrides: {
					if: {
						after: false
					},

					for: {
						after: false
					},

					while: {
						after: false
					},

					catch: {
						after: false
					},

					switch: {
						after: false
					}
				}
			}
		],

		'@stylistic/padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: 'function',
				next: '*'
			},
			{
				blankLine: 'always',
				prev: 'block-like',
				next: '*'
			},
			{
				blankLine: 'always',
				prev: 'import',
				next: 'block-like'
			}
		],

		eqeqeq: 'error',
		'func-names': ['error', 'never'],

		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true
			}
		],

		'prefer-const': 'error',
		'prefer-arrow-callback': 'error',
		'@stylistic/arrow-spacing': ['error'],
		'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
		'@stylistic/no-multiple-empty-lines': 'error',
		'@stylistic/space-before-blocks': 'error',
		'@stylistic/comma-spacing': 'error',
		'@stylistic/jsx-quotes': ['error', 'prefer-single'],

		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					[
						'^react',
						'^@?\\w',
						'^(components|modules|utils)(/.*|$)',
						'^\\u0000',
						'^\\.\\.(?!/?$)',
						'^\\.\\./?$',
						'^\\./(?=.*/)(?!/?$)',
						'^\\.(?!/?$)',
						'^\\./?$'
					]
				]
			}
		],

		'@stylistic/jsx-curly-brace-presence': [
			'error',
			{
				props: 'never',
				children: 'never'
			}
		],
		'@stylistic/jsx-self-closing-comp': 'error',
		'@stylistic/jsx-closing-tag-location': 'error',
		'@stylistic/jsx-equals-spacing': ['error', 'never'],

		'@stylistic/jsx-tag-spacing': [
			'error',
			{
				closingSlash: 'never'
			}
		],

		'@stylistic/jsx-curly-newline': [
			'error',
			{
				multiline: 'require',
				singleline: 'forbid'
			}
		],

		'@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
		'@stylistic/jsx-max-props-per-line': 'error',
		'@stylistic/jsx-one-expression-per-line': 'error',

		'@stylistic/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'ignore'
			}
		],
		'@stylistic/comma-dangle': ['error', 'never'],
		'@stylistic/function-call-argument-newline': ['error', 'consistent'],
		'@stylistic/jsx-closing-bracket-location': ['error', 'after-props'],
		'no-unused-vars': 'off'
	}
})
