import fetch from 'sketch-module-fetch-polyfill'
import { apiKey } from './apiKey.js'

const BRESCIA = {
  latitude: 45.538205,
  longitude: 10.219252
}

const OSLO = {
  latitude: 59.913584,
  longitude: 10.750204
}

const fetchData = () => {
  const { latitude, longitude } = OSLO

  return fetch(`https://api.darksky.net/forecast/${apiKey}/${latitude,longitude}?units=si`)
    .then(res => res.json())
}

export default fetchData
