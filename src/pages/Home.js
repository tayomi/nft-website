import React from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Explore from '../components/Explore'
import Market from '../components/Market'
import News from '../components/News'
import Investors from '../components/Investors'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Explore/>
      <Market/>
      <News/>
      <Investors/>
      <Footer/>
    </>
  )
}

export default Home