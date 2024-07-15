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
    cobalt: [
      '#eff3fb',
      '#dde4f0',
      '#b6c7e1',
      '#8da7d4',
      '#6b8dc9',
      '#567cc2',
      '#4a74c0',
      '#3c62aa',
      '#335798',
      '#264b87',
    ],
  },

  primaryColor: 'cobalt',
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
