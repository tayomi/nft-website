import React from 'react'
import '../App.css'
import './Explore.css'

import rectangle28 from './images/Rectangle 28.jpg'
import rectangle29 from './images/Rectangle 29.jpg'
import rectangle30 from './images/Rectangle 30.jpg'
import circle1 from './images/circle 1.png'
import circle2 from './images/circle 2.png'
import ethereum from './images/Ethereum.png'


function Explore() {
  return (
    <>
      <div className='explore-container'>
        <div className="explore-wrapper">
          <div className="explore-statement">
            <h2>Select Your ARTS, Lets Get You One !</h2>
            <p>Start with the simplest, secured stage to purchase and exchange workmanship and <span>NFTs</span></p>
          </div>
          <div className="explore-image-section">
            <div className="explore-image">
              <img className='rectangle' src={rectangle28} alt='nft' />
              <h3>#5600 ESSENCE LINE</h3>
              <div className='explore-image-bottom'>
                <div className='explore-rarity'>
                  <button>Epic</button>
                  <img src={circle2} alt='yellow'/>
                  <img src={circle1} alt='circle'/>
                </div>
                <h3>22/33</h3>
              </div>
              <div className='explore-price'>
                <div className="ethereum">
                  <img src={ethereum} alt='ethereum logo'/> 
                  <h3>2.1 wEth</h3>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>

            <div className="explore-image">
              <img className='rectangle' src={rectangle29} alt='nft' />
              <h3>#5600 ESSENCE LINE</h3>
              <div className='explore-image-bottom'>
                <div className='explore-rarity'>
                  <button>Epic</button>
                  <img src={circle2} alt='yellow'/>
                  <img src={circle1} alt='circle'/>
                </div>
                <h3>22/33</h3>
              </div>
              <div className='explore-price'>
                <div className="ethereum">
                  <img src={ethereum} alt='ethereum logo'/> 
                  <h3>2.1 wEth</h3>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>

            <div className="explore-image">
              <img className='rectangle' src={rectangle30} alt='nft' />
              <h3>#5600 ESSENCE LINE</h3>
              <div className='explore-image-bottom'>
                <div className='explore-rarity'>
                  <button>Epic</button>
                  <img src={circle2} alt='yellow'/>
                  <img src={circle1} alt='circle'/>
                </div>
                <h3>22/33</h3>
              </div>
              <div className='explore-price'>
                <div className="ethereum">
                  <img src={ethereum} alt='ethereum logo'/> 
                  <h3>2.1 wEth</h3>
                </div>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
          <div className='explore-view'>
            <button>View all</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Explore