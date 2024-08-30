import { Stack } from '@mantine/core'
import React from 'react'
import styles from './ContentPage.module.css'

type ContentPageProps = {
  gap?: number
  children: React.ReactNode
}

/**
 * Page wrapper for content pages across the Patina Website to keep a consistent
 * style.
 */
export function ContentPage({ gap, children }: ContentPageProps) {
  return (
    <div className={styles.page}>
      <Stack align={'center'} gap={gap || 0}>
        {children}
      </Stack>
    </div>
  )
}
