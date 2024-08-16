import { Container } from '@mantine/core'
import * as React from 'react'
import classes from '@/personal/martin/Martin.module.css'

/*
  TODO: Allow multiple time zones. Main page will feature local, Seattle, and NYC time.
 */
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
  SanJuan,
  Brasilia,
  MidAtlantic,
  CapeVerde,
  LocalTime,
}

export function Clock({
  timezone = timeZone.LocalTime,
}: {
  timezone: timeZone
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
    const intervalID = setInterval(() => {
      const date = new Date()
      const [currentTimeObj] = React.useState(() => {
        if (isLocalTime) {
          return {
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getMinutes(),
          }
        }
        return {
          hours: date.getUTCHours() + timezone,
          minutes: date.getUTCMinutes(),
          seconds: date.getUTCMinutes(),
        }
      })
      setTime(currentTimeObj)
    }, 1000)
    return () => {
      clearInterval(intervalID)
    }
  }, [])
  return (
    <>
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
