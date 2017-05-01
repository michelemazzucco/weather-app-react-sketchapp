import React from 'react'
import { StyleSheet, View, Text } from 'react-sketchapp'
import { IPHONE_SIZE, fontSize } from '../utils/constants'

const styles = StyleSheet.create({
  container: {
    width: IPHONE_SIZE.width,
    height: 106,
    backgroundColor: '#ECECEC',
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 40,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  locationName: {
    fontSize: fontSize.PARAGRAPH,
    color: '#999999',
    textAlign: 'center'
  }
})

const Header = ({ name }) =>
  <View style={styles.container} name='Header'>
    <Text style={styles.locationName} >{ name }</Text>
  </View>

export default Header
