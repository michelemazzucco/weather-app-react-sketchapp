import React from 'react'
import PropTypes from 'prop-types'
import { render, Text, Artboard, StyleSheet, View } from 'react-sketchapp'
import fetchData from './utils/fetchData'
import { IPHONE_SIZE, fontSize } from './utils/constants'

const styles = StyleSheet.create({
  container: {
    ...IPHONE_SIZE,
    backgroundColor: '#444444'
  },
  currentTemp: {
    fontSize: fontSize.TITLE,
    color: '#444444'
  },
  currentSum: {
    fontSize: fontSize.SUBTITLE,
    color: '#999999'
  },
  currentWeather: {
    width: IPHONE_SIZE.width,
    height: IPHONE_SIZE.height / 3,
    backgroundColor: '#F2F2F2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const tempFormat = (t) => `${Math.round(t * 2) / 2}°`

const CurrentWeather = ({ temperature, summary }) =>
  <View style={styles.currentWeather} name='Current Weather'>
    <Text style={styles.currentTemp}>{ tempFormat(temperature) }</Text>
    <Text style={styles.currentSum}>{ summary }</Text>
  </View>

const App = ({ currently }) =>
  <View style={styles.container} name="App Wrapper">
    <CurrentWeather temperature={currently.temperature} summary={currently.summary} />
  </View>

export default (context) => {
  fetchData()
  .then(data => {
    render(<Artboard name="Today Weather"><App currently={data.currently} /></Artboard>, context.document.currentPage());
  })
}
