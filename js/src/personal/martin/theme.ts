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
      '#90aee0',
      '#80a3db',
      '#7097d7',
      '#608cd2',
      '#5080ce',
      '#4075c9',
      '#366abf',
      '#3162af',
      '#2d599f',
      '#264b87',
    ],
    uranian_blue: [
      '#a6d9f7',
      '#a1d7f7',
      '#8ed0f5',
      '#7cc8f4',
      '#69c0f2',
      '#56b8f0',
      '#43b0ef',
      '#31a8ed',
      '#1ea0eb',
      '#1496e1',
    ],
    eggplant: [
      '#c09ba2',
      '#b88e96',
      '#b0828a',
      '#a9757e',
      '#a16873',
      '#975e69',
      '#8a5660',
      '#7d4f57',
      '#71474e',
      '#643f46',
    ],
    jet: [
      '#918d8d',
      '#878282',
      '#7d7878',
      '#726e6e',
      '#686464',
      '#5e5a5a',
      '#535050',
      '#494646',
      '#3e3c3c',
      '#312f2f',
    ],
    wht_smoke: [
      '#f3f3f3',
      '#ebebeb',
      '#e0e0e0',
      '#d6d6d6',
      '#cccccc',
      '#c2c2c2',
      '#b8b8b8',
      '#adadad',
      '#a3a3a3',
      '#999999',
    ],
  },

  primaryColor: 'cobalt',
  autoContrast: true,
  shadows: {
    md: '3px 3px 6px rgba(0, 0, 0, .45)',
    xl: '15px 15px 6px rgba(0, 0, 0, .45)',
  },
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)
