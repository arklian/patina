# Frontend JavaScript

## Tools
- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [ESLint](https://eslint.org/) setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)
- [Prettier](https://prettier.io/) Autoformatting for Typescript and CSS.
- [React Router](https://reactrouter.com/en/main) to separate pages

## pnpm scripts
See `package.json` for definitions.

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `prettier:write` – formats all files with Prettier  hello
