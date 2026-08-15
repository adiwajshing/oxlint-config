# Oxlint Config

General Typescript lint and style rules I use, powered by
[oxlint](https://oxc.rs/docs/guide/usage/linter.html).

To use in your project:

```
npm i git+https://github.com/adiwajshing/oxlint-config oxlint oxlint-tsgolint --save-dev
```

To use the old `eslint` config, use the `eslint` branch:
```
npm i git+https://github.com/adiwajshing/oxlint-config#eslint eslint --save-dev
```

Then create an `oxlint.config.ts`:

```ts
import { defineConfig } from 'oxlint'
import config from '@adiwajshing/oxlint-config/oxlint'

export default defineConfig({
	extends: [config],
	options: {
		// required if you use type-aware rules (e.g. no-misused-promises);
		// also requires the `oxlint-tsgolint` package
		typeAware: true,
	},
})
```

Run `npx oxlint` to lint. `npm run lint:fix` applies available fixes, including
import sorting and supported stylistic fixes.

## Notes

- Oxlint runs native rules and the `@stylistic` and `simple-import-sort` JS
  plugins.
- The config enforces tabs, an 80-character line width, single quotes, no
  semicolons, LF line endings, one JSX attribute per line, and the configured
  React/project import grouping.
- This config was ported from ESLint to Oxlint using LLM support. The work was verified, and reviewed by myself.
