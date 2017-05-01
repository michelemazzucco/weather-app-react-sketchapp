import React from 'react'
import { Text, StyleSheet, View } from 'react-sketchapp'
import { IPHONE_SIZE, fontSize } from '../utils/constants'
import { tempFormat, humidityFormat } from '../utils/formats'

const styles = StyleSheet.create({
  currentTemp: {
    fontSize: fontSize.TITLE,
    color: '#444444'
  },
  infos: {
    width: IPHONE_SIZE.width,
    padding: 40
  },
  bottomInfos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  currentHum: {
    fontSize: fontSize.SUBTITLE
  },
  currentSum: {
    fontSize: fontSize.SUBTITLE,
    color: '#999999'
  },
  currentWeather: {
    height: (IPHONE_SIZE.height / 5) * 3,
    backgroundColor: '#F2F2F2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
})

const CurrentWeather = ({ summary, temperature, humidity }) =>
  <View style={styles.currentWeather} name='Current Weather'>
    <View style={styles.infos} name="Top Infos">
      <Text style={styles.currentTemp}>{ tempFormat(temperature) }</Text>
    </View>
    <View style={[styles.infos, styles.bottomInfos]} name="Bottom Infos">
      <Text style={styles.currentHum}>{ humidityFormat(humidity) }</Text>
      <Text style={styles.currentSum}>{ summary }</Text>
    </View>
  </View>

export default CurrentWeather
