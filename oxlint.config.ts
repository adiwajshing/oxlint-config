import { defineConfig } from 'oxlint'

export default defineConfig({
	plugins: ['typescript', 'unicorn', 'oxc'],
	env: {
		browser: true,
	},
	options: {
		// required for typescript/no-misused-promises, a type-aware rule
		typeAware: true,
	},
	rules: {
		'unicorn/no-array-for-each': 'error',
		'unicorn/empty-brace-spaces': 'error',
		'typescript/prefer-for-of': 'error',
		'unicorn/consistent-function-scoping': [
			'error',
			{
				checkArrowFunctions: false,
			},
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
				checksConditionals: true,
			},
		],

		'typescript/prefer-optional-chain': ['error'],
		'typescript/no-unnecessary-type-assertion': ['error'],
		'typescript/no-unnecessary-type-constraint': ['error'],
		'typescript/no-redundant-type-constituents': ['error'],
		'typescript/no-inferrable-types': ['error'],

		'typescript/no-explicit-any': [
			'warn',
			{
				ignoreRestArgs: true,
			},
		],

		'typescript/no-unused-vars': ['error'],
		'typescript/consistent-type-imports': ['error'],

		'typescript/no-non-null-asserted-optional-chain': ['off'],
		'no-extra-boolean-cast': ['error'],

		'no-unneeded-ternary': ['error'],

		'no-constant-condition': ['error'],
		'no-constant-binary-expression': 'error',
		curly: [2, 'all'],

		eqeqeq: 'error',
		'func-names': ['error', 'never'],

		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true,
			},
		],

		'prefer-const': 'error',
		'prefer-arrow-callback': 'error',
		'no-unused-vars': 'off',
	},
})
