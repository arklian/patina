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
    white: [
      '#f2f2f2',
      '#e0e0e0',
      '#c9c9c9',
      '#f5fefd',
      '#fcfbfc',
      '#fdf6e4',
      '#fafafa',
      '#fbfcfa',
      '#fffefc',
      '#faf9f6',
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
  fontFamily: 'Helvetica, sans-serif',
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
