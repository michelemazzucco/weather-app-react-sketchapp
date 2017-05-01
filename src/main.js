import React from 'react'
import { render, Artboard } from 'react-sketchapp'
import fetchData from './utils/fetchData'
import App from './components/App'

export default (context) => {

  const BRESCIA = {
    name: 'Brescia, Italy',
    latitude: 45.538205,
    longitude: 10.219252
  }

  const OSLO = {
    name: 'Oslo, Norway',
    latitude: 59.913584,
    longitude: 10.750204
  }

  const { name, latitude, longitude } = BRESCIA

  fetchData({ latitude, longitude })
  .then(data => {
    render(
      <Artboard name='Today Weather'>
        <App name={name} currently={data.currently} />
      </Artboard>,
      context.document.currentPage()
    )
  })
}
