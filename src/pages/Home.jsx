import React, { useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
import { UserAuth } from '../context/AuthContext'

const Home = () => {
  const {user} = UserAuth()
  return (
    <>
    <div>
      <Main />
      <Row rowID='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row rowID='3' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='4' title='Horror' fetchURL={requests.requestHorror} />
      <Row rowID='5' title='Trending' fetchURL={requests.requestTrending} />
    </div>
    </>
  )
}

export default Home