# Oxlint Config

General Typescript lint rules I use, powered by [oxlint](https://oxc.rs).

To use in your project:
```
yarn add -D git+https://github.com/adiwajshing/eslint-config oxlint
```

Then create an `oxlint.config.ts`:
``` ts
import { defineConfig } from 'oxlint'
import config from '@adiwajshing/eslint-config'

export default defineConfig({
	extends: [config],
	options: {
		// required if you use type-aware rules (e.g. no-misused-promises);
		// also requires the `oxlint-tsgolint` package
		typeAware: true
	}
})
```

Run with `npx oxlint` / `npx oxlint --fix`.

## Notes

- Most rules run natively in oxlint (fast, Rust-based). A handful of rules
  with no native oxlint equivalent are loaded as ESLint-compatible JS
  plugins (alpha oxlint feature): `@stylistic/eslint-plugin`,
  `eslint-plugin-simple-import-sort`, `eslint-plugin-import-newlines`, and
  a small local `extras` plugin (`oxlint-plugin-extras.js`) that ports
  `camelcase`, `unicorn/no-for-loop`, and a custom TS-enum-declaration ban
  from ESLint core / eslint-plugin-unicorn, since none of those are ported
  to oxlint.
- ESLint itself is not run directly; it's only a runtime dependency of the
  JS plugins above.
