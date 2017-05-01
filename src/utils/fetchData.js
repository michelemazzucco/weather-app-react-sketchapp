import fetch from 'sketch-module-fetch-polyfill'
import { apiKey } from './apiKey.js'

const fetchData = ({ latitude, longitude }) => {
  const ll = [latitude, longitude].join(',')

  return fetch(`https://api.darksky.net/forecast/${apiKey}/${ll}?units=si`)
    .then(res => res.json())
}

export default fetchData
