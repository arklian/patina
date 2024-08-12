export const getWeather = async (lat: any, lon: any, API_key: any) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=imperial`,
  )
  return res.json()
}
