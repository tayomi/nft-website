import React from 'react'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import Investors from '../components/Investors'
import Market from '../components/Market'
import Navbar from '../components/Navbar'
import News from '../components/News'

const Exp = () => {
  return (
    <>
      <Navbar/>
      <Explore/>
      <Market/>
      <News/>
      <Investors/>
      <Footer/>
    </>
  )
}

export default Exp