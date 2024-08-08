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
      '#242424',
      '#1f1f1f',
      '#141414',
    ],
    blue: [
      '#e7f5ff',
      '#d0ebff',
      '#a5d8ff',
      '#74c0fc',
      '#4dabf7',
      '#339af0',
      '#228be6',
      '#1c7ed6',
      '#1971c2',
      '#1864ab',
    ],
  },
  other: {
    maliBeige: '#d5abab',
    maliKhaki: '#bc8d8d',
    maliGrey: '#848586',
    maliRose: '#c35241',
    maliRed: '#bb4250',
    maliLightRed: '#752c33',
    maliDark: '#280003',
  },
  primaryColor: 'blue',
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

export const resolver: CSSVariablesResolver = (computedTheme) => ({
  variables: {
    '--mali-beige': computedTheme.other.maliBeige,
    '--mali-khaki': computedTheme.other.maliKhaki,
    '--mali-grey': computedTheme.other.maliGrey,
    '--mali-rose': computedTheme.other.maliRose,
    '--mali-red': computedTheme.other.maliRed,
    '--mali-dark': computedTheme.other.maliDark,
    '--mali-light-red': computedTheme.other.maliLightRed,
  },
  light: {},
  dark: {},
})
