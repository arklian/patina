import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme,
} from '@mantine/core'

/**
 * Custom mantine theme override
 *
 * {@link https://mantine.dev/theming/theme-object/ Theme Object Docs}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-theme.ts Default Theme}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-colors.ts Default Colors}
 */
export const themeOverride = createTheme({
  colors: {
    white: [
      '#f2f2f2',
      '#e0e0e0',
      '#f5f5dc',
      '#f5fefd',
      '#fcfbfc',
      '#fdf6e4',
      '#fafafa',
      '#fbfcfa',
      '#fffefc',
      '#fcf8e3',
    ],
    black: [
      '#6b6b6b',
      '#545454',
      '#363636',
      '#262626',
      '#212121',
      '#202020',
      '#101010',
      '#303030',
      '#1f1f1f',
      '#1a1a1a',
    ],
    blue: [
      '#7472db',
      '#4536f7',
      '#483fa1',
      '#202378',
      '#0e2159',
      '#6484e3',
      '#786dfc',
      '#0b2f9c',
      '#051440',
      '#1b2540',
    ],
  },

  primaryColor: 'blue',
  // fontFamily: 'Helvetica, sans-serif',
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

/**
 * Used to change the default css variable linking.
 *
 * Mantine uses `--mantine-color-body` to render the background, and we can override it here.
 * {@link https://mantine.dev/styles/css-variables/#css-variables-resolver}
 */
export const cssVariableResolver: CSSVariablesResolver = (computedTheme) => ({
  variables: {
    '--mantine-link-hover': computedTheme.colors.black[0],
    '--mantine-link-current': computedTheme.colors.black[5],
    '--mantine-link': computedTheme.colors.black[3],
  },
  light: {
    '--mantine-color-body': computedTheme.colors.white[9],
    '--mantine-link-hover': '#aaaaaa',
    '--mantine-link-current': '#000',
    '--mantine-link': computedTheme.colors.black[0],
    '--mantine-color-gray-filled': computedTheme.colors.black[2], // for title gradient of left
    '--mantine-color-black': computedTheme.colors.black[3], // for title gradient of left
    '--mantine-font-family': 'Times New Roman, sans-serif',
    '--mantine-font-family-headings': 'Times New Roman, sans-serif',
    '--mantine-color-gray-3': '#000', // for divider color which cant be overridden?
  },
  dark: {
    '--mantine-color-body': computedTheme.colors.black[4],
    '--mantine-link-hover': computedTheme.colors.white[2],
    '--mantine-link-current': '#fff',
    '--mantine-link': '#d1d1d1',
    '--mantine-color-gray-filled': computedTheme.colors.black[0],
    '--mantine-color-black': computedTheme.colors.black[1],
    '--mantine-font-family': 'Helvetica, sans-serif',
    '--mantine-font-family-headings': 'Helvetica, sans-serif',
    '--mantine-color-dark-4': '#fff', // for divider color
  },
})
