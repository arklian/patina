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
    accent: [
      '#c7aa83',
      '#d9af77',
      '#f5cda2',
      '#edb374',
      '#96a4e0',
      '#ffc0cb',
      '#f7b71b',
      '#4f3e15',
      '#82692e',
      '#52421c',
    ],
  },

  primaryColor: 'blue',
  fontFamily: 'Helvetica, sans-serif',
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

/**
 * Used to change the default css variable linking.
 *
 * Mantine uses `--mantine-color-body` to render the background, and we can override it here.
 * {@link https://mantine.dev/styles/css-variables/#css-variables-resolver}
 */
export const cssVariableResolver: CSSVariablesResolver = (computedTheme) => ({
  variables: {},
  light: {
    '--mantine-color-body': computedTheme.colors.white[9],
    '--mantine-link-hover': computedTheme.colors.accent[0],
    '--mantine-link-current': computedTheme.colors.accent[7],
    '--mantine-link': computedTheme.colors.accent[8],
    '--mantine-color-text': computedTheme.colors.accent[9],
    '--mantine-action-hover': computedTheme.colors.accent[1],
  },
  dark: {
    '--mantine-color-body': computedTheme.colors.black[4],
    '--mantine-link-hover': computedTheme.colors.white[2],
    '--mantine-link-current': '#fff',
    '--mantine-link': '#d1d1d1',
    '--mantine-action-hover': computedTheme.colors.accent[5],
  },
})
