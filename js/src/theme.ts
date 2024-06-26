import { createTheme } from '@mantine/core'

/** Custom mantine theme override here
 * {@link https://mantine.dev/theming/theme-object/}
 */
export const theme = createTheme({
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
