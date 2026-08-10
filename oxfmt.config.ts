import { defineConfig } from 'oxfmt'

export default defineConfig({
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	bracketSpacing: true,
	endOfLine: 'lf',
	singleAttributePerLine: true,
	arrowParens: 'avoid',
	sortImports: {
		newlinesBetween: false,
		customGroups: [
			{
				groupName: 'project',
				elementNamePattern: [
					'components',
					'components/**',
					'modules',
					'modules/**',
					'utils',
					'utils/**',
				],
			},
		],
		groups: [
			['builtin', 'external'],
			'project',
			['parent', 'sibling', 'index'],
			'unknown',
		],
	},
})
