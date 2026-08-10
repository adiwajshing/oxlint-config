# Oxlint Config

General Typescript lint and format rules I use, powered by
[oxlint](https://oxc.rs) and [oxfmt](https://oxc.rs/docs/guide/usage/formatter).

To use in your project:

```
npm i git+https://github.com/adiwajshing/oxlint-config oxlint oxfmt --save-dev
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

Run `npx oxlint` to lint and `npx oxfmt .` to format. The package scripts
combine both: `npm run lint` checks lint and formatting, and `npm run lint:fix`
applies available fixes and formats files.

Oxfmt does not support config `extends`, so you can just re-define the config using this as a base in `oxfmt.config.ts`:

``` ts
import OxfmtConfig from '@adiwajshing/eslint-config/oxfmt'
import { defineConfig } from 'oxfmt'

export default defineConfig({ ...OxfmtConfig, ...yourOptions })
```

## Notes

- Oxlint runs only native rules. Oxfmt handles formatting and import sorting.
- `oxfmt.config.ts` uses tabs, 80-character line width, single quotes, no
  semicolons, LF line endings, one JSX attribute per line, and the configured
  React/project import grouping.
- This config was ported from ESLint to Oxlint using LLM support. The work was verified, and reviewed by myself.
