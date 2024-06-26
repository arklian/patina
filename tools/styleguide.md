# Styleguide

This file will define particular conventions for things that are not enforced by the autoformatter.
While some of these rules can be broken as people figure out what works for them, it would be good
abide by these conventions fairly strictly to start off.

## Autoformatters
Make sure that the following formatters and linters are running in your IDE:
- Prettier
- StyleLint
- ESLint

`pnpm run test` checks that these are abide by and should not have any errors.

## Naming
- Paths
  - Paths should be lowercase
  - Relative path imports should never go up a folder. i.e. '../'
  - Use Aliases as necessary. e.g. '@/...'
- ReactComponent.tsx
  - React Components should be in PascalCase
  - One component per file
  - Component name should match file name
  - Pages are an exception and can be Name.page.tsx
    - This is to denote that it is the top level react component for a page
  - consts that hold a React component should start with a capital letter
  - consts that that don't hold a React component should start with a lower case letter
- CSS
  - Css classes should be in kebab case.