import { Container } from '@mantine/core'
import * as React from 'react'
import classes from '@/personal/martin/Martin.module.css'

/*
  TODO: Allow multiple time zones. Main page will feature local, Seattle, and NYC time.
 */
/*
    enum timeZone {
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
 */

export function Clock() {
  const [time, setTime] = React.useState(() => {
    const currentDate = new Date()
    return {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    }
  })
  React.useEffect(() => {
    const intervalID = setInterval(() => {
      const date = new Date()
      const currentTimeObj = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      }
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
