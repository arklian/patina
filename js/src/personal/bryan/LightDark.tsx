/** Component to toggle the light or dark mode of the page. */
import { Button, useMantineColorScheme } from '@mantine/core'

export function LightDark() {
  const { setColorScheme } = useMantineColorScheme()

  return (
    <div>
      <Button onClick={() => setColorScheme('light')}>{'Light'}</Button>
      <Button onClick={() => setColorScheme('dark')}>{'Dark'}</Button>
    </div>
  )
}
