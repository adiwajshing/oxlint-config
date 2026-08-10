// Small custom JS plugin bundling rules that have no native oxlint
// equivalent, but do exist in ESLint core / existing ESLint plugins.
// Loaded via `jsPlugins` in oxlint.config.ts under the `extras/` prefix.
//
// Note: `@typescript-eslint/naming-convention` would be preferable to
// `camelcase`, but it unconditionally requires parser services from
// `@typescript-eslint/parser`, which oxlint's JS-plugin bridge does not
// provide (oxlint uses its own native TS parser). It cannot run under
// oxlint even without type-aware options, so we fall back to ESLint
// core's `camelcase` rule instead.
import { builtinRules } from 'eslint/use-at-your-own-risk'

const noEnumDeclaration = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow TS enum declarations, use literals instead'
		},
		schema: []
	},
	create(context) {
		return {
			TSEnumDeclaration(node) {
				context.report({
					node,
					message: "Don't declare enums, use literals instead"
				})
			}
		}
	}
}

export default {
	rules: {
		// ESLint core rule, not ported to oxlint
		camelcase: builtinRules.get('camelcase'),
		// replaces the previous `no-restricted-syntax` TSEnumDeclaration ban,
		// since oxlint has no generic AST-selector-based rule
		'no-enum-declaration': noEnumDeclaration
	}
}
