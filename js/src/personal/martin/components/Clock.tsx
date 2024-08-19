import { Center, Container, Text } from '@mantine/core'
import * as React from 'react'
import { theme } from '@/personal/martin/theme.ts'
import classes from '@/personal/martin/Martin.module.css'

export enum timeZone {
  UTC,
  Paris,
  Cairo,
  Moscow,
  Dubai,
  Karachi,
  Dhaka,
  Hanoi,
  Beijing,
  Tokyo,
  Sydney,
  SolomonIsl,
  Fiji,
  Samoa,
  Midway,
  Hawaii,
  Alaska,
  Pacific,
  Mountain,
  Central,
  EastCoast,
  SanJuanIsl,
  Brasilia,
  MidAtlantic,
  CapeVerde,
  LocalTime,
}

export function Clock({
  timezone = timeZone.LocalTime,
  name = 'Clock',
}: {
  timezone: timeZone
  name: string
}) {
  const isLocalTime = timezone === timeZone.LocalTime
  /*
    Current time on load
   */
  const [time, setTime] = React.useState(() => {
    const currentDate = new Date()
    if (isLocalTime) {
      return {
        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        seconds: currentDate.getSeconds(),
      }
    }
    return {
      hours: currentDate.getUTCHours() + timezone,
      minutes: currentDate.getUTCMinutes(),
      seconds: currentDate.getUTCSeconds(),
    }
  })
  /*
    Current time on update
   */
  React.useEffect(() => {
    const updateClock = () => {
      const date = new Date()
      const newTime = {
        hours: isLocalTime ? date.getHours() : date.getUTCHours() + timezone,
        minutes: isLocalTime ? date.getMinutes() : date.getUTCMinutes(),
        seconds: isLocalTime ? date.getSeconds() : date.getUTCSeconds(),
      }
      setTime(newTime)
    }
    updateClock()
    const intervalID = setInterval(updateClock, 1000)
    return () => {
      clearInterval(intervalID)
    }
  }, [])
  return (
    <>
      <Center>
        <Text fw={700} size="lg" c={theme.colors.whiteSmoke[2]}>
          {name}
        </Text>
      </Center>
      <Container className={classes.clockWrapper}>
        <div className={classes.clock}>
          <div
            className={classes.hours}
            style={{
              transform: `rotate(${time.hours * 30 - 90}deg) translateX(-10px)`,
            }}
          />
          <div
            className={classes.minutes}
            style={{
              transform: `rotate(${time.minutes * 6 - 90}deg) translateX(-15px)`,
            }}
          />
          <div
            className={classes.seconds}
            style={{
              transform: `rotate(${time.seconds * 6 - 90}deg) translateX(-15px)`,
            }}
          />
        </div>
      </Container>
    </>
  )
}
