import React from 'react'
import { Artboard, StyleSheet, View } from 'react-sketchapp'
import { IPHONE_SIZE } from '../utils/constants'
import CurrentWeather from './CurrentWeather'
import Header from './Header'

const styles = StyleSheet.create({
  container: {
    ...IPHONE_SIZE,
    backgroundColor: '#444444'
  }
})

const App = ({ name, currently }) =>
  <View style={styles.container} name='Wrapper'>
    <Header name={name} />
    <CurrentWeather
      summary={currently.summary}
      temperature={currently.temperature}
      humidity={currently.humidity}
    />
  </View>

export default App
