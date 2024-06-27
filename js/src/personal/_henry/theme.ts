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
    dark: [
      '#C9C9C9',
      '#b8b8b8',
      '#828282',
      '#696969',
      '#424242',
      '#3b3b3b',
      '#2e2e2e',
      '#242424', // Default Dark Mode Background
      '#1f1f1f',
      '#141414',
    ],
    indigo: [
      '#eef3ff',
      '#dee2f2',
      '#bdc2de',
      '#98a0ca',
      '#7a84ba',
      '#6672b0',
      '#5c68ac',
      '#4c5897',
      '#424e88',
      '#364379',
    ],
  },
  primaryColor: 'indigo',
  other: {
    darkBgColor: '#FC8C0C',
  },
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
    '--mantine-color-body': computedTheme.colors.indigo[2],
  },
  dark: {
    '--mantine-color-body': computedTheme.other.darkBgColor,
  },
})
