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
	sortImports: {
		newlinesBetween: false,
		customGroups: [
			{
				groupName: 'react',
				elementNamePattern: ['react', 'react-**'],
			},
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
			'react',
			['builtin', 'external'],
			'project',
			['parent', 'sibling', 'index'],
			'unknown',
		],
	},
})
