const API_KEY = 'fffae0841c6dd1a1a1d17728c8fa76af'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`
import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url) // <-- return a promise
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
