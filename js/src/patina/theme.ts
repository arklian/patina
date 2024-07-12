import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme,
} from '@mantine/core'

export const themeOverride = createTheme({
  other: {
    patinaGreenDark: '#03664D',
    patinaGreenLight: '#4DFFB0',
    patinaBlueDark: '#1550C4',
    patinaBlueLight: '#47FFFF',
    patinaRedDark: '#BB352C',
    patinaRedLight: '#FF3D3D',
  },
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

export const resolver: CSSVariablesResolver = (computedTheme) => ({
  variables: {
    '--mantine-color-patina-green-light': computedTheme.other.patinaGreenLight,
    '--mantine-color-patina-blue-light': computedTheme.other.patinaBlueLight,
    '--mantine-color-patina-red-light': computedTheme.other.patinaRedLight,
    '--mantine-color-patina-green-dark': computedTheme.other.patinaGreenDark,
    '--mantine-color-patina-blue-dark': computedTheme.other.patinaBlueDark,
    '--mantine-color-patina-red-dark': computedTheme.other.patinaRedDark,
  },
  light: {},
  dark: {},
})
