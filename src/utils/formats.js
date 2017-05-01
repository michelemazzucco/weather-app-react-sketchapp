const tempFormat = (t) => `${Math.round(t * 2) / 2}°`
const humidityFormat = (h) => `${h*100}%`

export { tempFormat, humidityFormat }
