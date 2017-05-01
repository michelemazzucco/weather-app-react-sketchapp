const removeDecimals = (n) => Math.round(n * 2) / 2

const tempFormat = (t) => `${removeDecimals(t)}°`
const humidityFormat = (h) => `${removeDecimals(h*100)}%`

export { tempFormat, humidityFormat }
