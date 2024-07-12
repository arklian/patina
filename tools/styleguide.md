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
  - Pages directed to by the ReactRouter are an exception and should have the format: `Name.page.tsx`
    - This is to denote that it is the top level react component for a page
  - Exported component name should match file name
  - One exported component per file
  - One component with state per file
  - Exported components should have a JSDoc-ish comment right above it describing the high level of what it does.
    - ```javascript
      /** Single Line Comment */
      /**
       * Line 1
       * Line 2
       */
      ```
  - consts that hold a React component should start with a capital letter
  - consts that don't hold a React component should start with a lower case letter
- util.ts file
  - For typescript files that do not have JSX/React, use camelCase and the ts file extension.
  - Generally these are utils/consts/config/pure functions.
- CSS
  - CSS classes should be in camel case
  - Generally, classes should be the preferred CSS selector
  - Try to avoid Tailwind-like styles for Mantine Components, preferring CSS classnames
    - Props that are not styles are okay. May be hard to differentiate initially
    - Simple ones may be fine. Under 3 styles or under 1 line
    - If it requires a classname, put the styles in the CSS. Don't mix classnames and props
  - Use variables from Mantine over raw values for:
    - Colors
    - Font Sizes
  - Some values are generally imported from the Mantine Theme:
    - Font
    - Padding (?)
    - Corner Rounding (?)
- Images
  - Currently, we're hosting our images through Google Photos, but will likely move to DO or S3 buckets.
  - Store images in a ./assets/images.ts file.
