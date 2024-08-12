export interface CurrentTime {
  year: number
  month: string
  day: string
  hour: string
  minute: string
  second: string
  weekday: string
}

export const getCurrentTime = (): CurrentTime => {
  const time = new Date()
  const year = time.getFullYear()
  const month =
    time.getMonth() + 1 < 10 ?
      `0${time.getMonth() + 1}`
    : (time.getMonth() + 1).toString()
  const day =
    time.getDate() < 10 ? `0${time.getDate()}` : time.getDate().toString()
  const hour =
    time.getHours() < 10 ? `0${time.getHours()}` : time.getHours().toString()
  const minute =
    time.getMinutes() < 10 ?
      `0${time.getMinutes()}`
    : time.getMinutes().toString()
  const second =
    time.getSeconds() < 10 ?
      `0${time.getSeconds()}`
    : time.getSeconds().toString()
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    weekday: weekday[time.getDay()],
  }
}
