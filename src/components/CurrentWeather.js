import React from 'react'
import PropTypes from 'prop-types'
import { render, Text, StyleSheet, View } from 'react-sketchapp'
import { IPHONE_SIZE, fontSize } from '../utils/constants'

const styles = StyleSheet.create({
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
    height: (IPHONE_SIZE.height / 4) * 3,
    backgroundColor: '#F2F2F2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 40
  }
})

const tempFormat = (t) => `${Math.round(t * 2) / 2}°`

const CurrentWeather = ({ temperature, summary }) =>
  <View style={styles.currentWeather} name='Current Weather'>
    <Text style={styles.currentSum}>{ summary }</Text>
    <Text style={styles.currentTemp}>{ tempFormat(temperature) }</Text>
  </View>

export default CurrentWeather
