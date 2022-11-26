import React from 'react'
import Footer from '../components/Footer'
import Investors from '../components/Investors'
import Navbar from '../components/Navbar'
import News from '../components/News'

function NewsSection() {
  return (
    <>
      <Navbar/>
      <News/>
      <Investors/>
      <Footer/>
    </>
  )
}

export default NewsSection