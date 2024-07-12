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

/**
 * Add custom CSS variables to keep consistency across the codebase.
 * Generally these should be used instead of raw values.
 * Usage: color: var(--mantine-color-patina-green-light)
 */
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
