import { useState, useEffect } from 'react'
import { Flex } from '@mantine/core'
import styles from './func.module.css'
import { getCurrentTime, CurrentTime } from '@/personal/riyuan/utils/getTime' // Adjust path as needed
import { Weather } from '@/personal/riyuan/component/func/Weather.tsx'
import { Quotes } from '@/personal/riyuan/component/func/quotes.tsx'

interface DateProps {
  currentTime: CurrentTime
}

function Date({ currentTime }: DateProps) {
  return (
    <div className={styles.date}>
      <span>{`${currentTime.year}/`}</span>
      <span>{`${currentTime.month}/`}</span>
      <span>{`${currentTime.day} `}</span>
      <span className={styles.smHidden}>{currentTime.weekday}</span>
    </div>
  )
}

export function Func() {
  const [currentTime, setCurrentTime] = useState<CurrentTime>({
    year: 0,
    month: '00',
    day: '00',
    hour: '00',
    minute: '00',
    second: '00',
    weekday: '',
  })

  const [mobileFuncState] = useState<boolean>(false) // Replace with your state management logic

  useEffect(() => {
    const updateTimeData = () => {
      setCurrentTime(getCurrentTime())
    }

    updateTimeData()
    const timeInterval = setInterval(updateTimeData, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  return (
    <div
      className={`${styles.function} ${mobileFuncState ? styles.mobile : ''}`}
    >
      <Flex direction={'row'} gap={'16px'}>
        <Flex direction={'column'}>
          <div className={`${styles.left} ${styles.cards}`}>
            <Quotes />
          </div>
        </Flex>
        <Flex direction={'column'}>
          <div className={`${styles.right} ${styles.cards}`}>
            <div className={styles.time}>
              <Date currentTime={currentTime} />
              <div className={styles.text}>
                <span>
                  {currentTime.hour}
                  {':'}
                  {currentTime.minute}
                  {':'}
                  {currentTime.second}
                </span>
              </div>
            </div>
            <Weather />
          </div>
        </Flex>
      </Flex>
    </div>
  )
}
