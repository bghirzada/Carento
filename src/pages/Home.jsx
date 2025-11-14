import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Brends from '../components/Brends'
import Vehicles from '../components/Vehicles'

const Home = () => {
  return (
    <div>
        <Header />
        <Brends />
        <Vehicles />
        <Footer />
    </div>
  )
}

export default Home