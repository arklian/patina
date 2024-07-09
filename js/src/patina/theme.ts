import { createTheme, DEFAULT_THEME, mergeMantineTheme } from '@mantine/core'

/**
 * Custom mantine theme override
 *
 * {@link https://mantine.dev/theming/theme-object/ Theme Object Docs}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-theme.ts Default Theme}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-colors.ts Default Colors}
 */
export const themeOverride = createTheme({
  colors: {
    patina: [
      '#effbf4',
      '#def5e6',
      '#b7eaca',
      '#8cdfad',
      '#6ad693',
      '#55d184',
      '#4acf7b',
      '#3cb668',
      '#31a25c',
      '#218c4c',
    ],
  },

  primaryColor: 'patina',
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
