import fetch from 'sketch-module-fetch-polyfill'
import { apiKey } from './apiKey.js'

const fetchData = () => {
  return fetch(`https://api.darksky.net/forecast/${apiKey}/37.8267,-122.4233?units=si`)
    .then(res => res.json())
}

export default fetchData
