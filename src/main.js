import React from 'react'
import { render, Artboard, StyleSheet, View } from 'react-sketchapp'
import { IPHONE_SIZE } from './utils/constants'
import fetchData from './utils/fetchData'
import CurrentWeather from './components/CurrentWeather'

const styles = StyleSheet.create({
  container: {
    ...IPHONE_SIZE,
    backgroundColor: '#444444'
  }
})

const App = ({ currently }) =>
  <View style={styles.container} name="Wrapper">
    <CurrentWeather temperature={currently.temperature} summary={currently.summary} />
  </View>

export default (context) => {
  fetchData()
  .then(data => {
    render(
      <Artboard name="Today Weather">
        <App currently={data.currently} />
      </Artboard>,
      context.document.currentPage()
    )
  })
}
