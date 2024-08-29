import { useEffect, useState } from 'react'
import { Flex } from '@mantine/core'
import { getWeather } from '@/personal/riyuan/utils/GetWeather'

interface WeatherData {
  adCode: {
    city: string
    adcode: string
  }
  weather: {
    weather: string
    temperature: number | null
    winddirection: string | null
    windpower: string | null
  }
}

export function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    adCode: {
      city: 'NY',
      adcode: '00000',
    },
    weather: {
      weather: 'Sunny',
      temperature: null,
      winddirection: null,
      windpower: null,
    },
  })

  const getWeatherData = async () => {
    try {
      const mainKey = WEATHER_API
      const result = await getWeather(40.73061, -74.006, mainKey)

      setWeatherData({
        adCode: {
          city: 'New York',
          adcode: '10000',
        },
        weather: {
          weather: result.weather[0].main || 'Unknown',
          temperature: result.main.temp || 'Unknown',
          winddirection: result.wind.deg || 'Unknown',
          windpower: result.wind.speed || 'Unknown',
        },
      })
    } catch (error) {
      console.error(`Failed to get weather information: ${error}`)
    }
  }

  useEffect(() => {
    getWeatherData()
  }, [])

  return (
    <Flex justify={'center'}>
      <span>{weatherData.adCode.city}&nbsp;</span>
      <span>{weatherData.weather.weather}&nbsp;</span>
      <span>
        {weatherData.weather.temperature !== null ?
          `${weatherData.weather.temperature}℃`
        : 'Unknown Temp'}
        &nbsp;
      </span>
    </Flex>
  )
}
