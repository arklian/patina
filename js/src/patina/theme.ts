import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme,
  rem,
} from '@mantine/core'

/**
 * Custom mantine theme override
 *
 * This theme customization includes setting the "Figtree" font family for both
 * body text and headings, with specific sizes and weights for various heading levels.
 *
 * Font: Figtree
 * Weights: 400 (Regular), 600 (Semibold), 700 (Bold)
 *
 *
 * {@link https://mantine.dev/theming/theme-object/ Theme Object Docs}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-theme.ts Default Theme}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-colors.ts Default Colors}
 */
export const themeOverride = createTheme({
  fontFamily: 'Figtree, sans-serif',
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16), // Body text size
    lg: rem(20),
    xl: rem(24),
  },
  headings: {
    fontFamily: 'Figtree, sans-serif',
    sizes: {
      h1: { fontSize: rem(64), fontWeight: '700' },
      h2: { fontSize: rem(48), fontWeight: '700' },
      h3: { fontSize: rem(34), fontWeight: '700' },
      h4: { fontSize: rem(22), fontWeight: '700' },
      h5: { fontSize: rem(16), fontWeight: '600' },
    },
  },
  other: {
    patinaGreenDark: '#03664D',
    patinaGreenLight: '#4DFFB0',
    patinaBlueDark: '#1550C4',
    patinaBlueLight: '#47FFFF',
    patinaRedDark: '#BB352C',
    patinaRedLight: '#FF3D3D',
    patinaDarkBg: '#1A1B1E',
    patinaDark6: '#25262B',
    patinaDark3: '#5C5F66',
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
    '--mantine-color-patina-dark-bg': computedTheme.other.patinaDarkBg,
    '--mantine-color-patina-dark-6': computedTheme.other.patinaDark6,
    '--mantine-color-patina-dark-3': computedTheme.other.patinaDark3,
  },
  light: {},
  dark: {
    '--mantine-color-body': '#000000',
  },
})
