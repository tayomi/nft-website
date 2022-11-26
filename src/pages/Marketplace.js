import React from 'react'
import Footer from '../components/Footer'
import Investors from '../components/Investors'
import Market from '../components/Market'
import Navbar from '../components/Navbar'
import News from '../components/News'

const Marketplace = () => {
  return (
    <>
      <Navbar/>
      <Market/>
      <News/>
      <Investors/>
      <Footer/>
    </>
  )
}

export default Marketplace