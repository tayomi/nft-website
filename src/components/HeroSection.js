import React, {useState, useEffect} from 'react'
import '../App.css'
import './HeroSection.css'
import Countdown from './Countdown'
import background from './images/Background.png'

function HeroSection() {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer= () => {
    const countDownDate = new Date("December 22, 2022").getTime();
    
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance/(24*60*60*1000));
      const hours = Math.floor(distance % (24*60*60*1000) / (1000*60*60));
      const minutes = Math.floor(distance % (60*60*1000) / (1000*60));
      const seconds = Math.floor(distance % (60*1000) / (1000));

      if (distance < 0) {
        //Stop Timer
        clearInterval(interval.current)
      } else {
        //Update Timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  };

useEffect(() => {
  startTimer();
})

  return (
    <div className='hero-container'>
      <div className='hero-home'>
        <div className='hero-statement'>
        <h2>Gather Your Real NFTs Here and Make them Available</h2>
        <p>Get started with the Easiest and most secured platforms to buy and trade all kind of <span>ART</span> and <span>NFTs</span></p>
        </div>
        <div className="hero-bottom">
          <div className="hero-about">
            <div className="hero-explore">
              <button>Explore More</button>
              <div className='hero-video'>
                <i class="fa-regular fa-circle-play"></i>
                <h3>Play Videos</h3>
              </div>
            </div>
            <div className='hero-art'>
              <div className="hero-art-stats">
                <h3>13 k</h3>
                <p>Art Work</p>
              </div>
              <div className="hero-art-stats">
                <h3>10 k</h3>
                <p>Auction</p>
              </div>
              <div className="hero-art-stats">
                <h3>5 k</h3>
                <p>Artists</p>
              </div>
            </div>
          </div>
          <div className="hero-bid">
            <Countdown timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />
            <div className="hero-bid-place">
              <h4>Highest Bid</h4>
              <h3>50.2 Eth</h3>
              <button>Place a bid</button>
            </div>
          </div>
        </div>
        <img src={background} alt='background' />
      </div>
    </div>
  )
}

export default HeroSection