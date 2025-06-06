import { Flex, Group, Space, Stack, Title } from '@mantine/core'
import { ReactNode } from 'react'
import styles from './TwoCol.module.css'

export type TwoColProps = {
  title?: string
  left: string | ReactNode
  right: string | ReactNode
}

/** Customizable two column layout that is mobile responsive. */
export function TwoCol({ title, left, right }: TwoColProps) {
  return (
    <Stack>
      {title && (
        <>
          <Flex justify={'center'}>
            <Title order={2}>{title}</Title>
          </Flex>
          <Space h={22} />
        </>
      )}
      <Group className={styles.twoColBody}>
        {left}
        {right}
      </Group>
    </Stack>
  )
}
