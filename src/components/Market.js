import React from 'react'
import '../App.css'
import './Market.css'
import './Explore.css'
import rectangle17 from './images/Rectangle 17.jpg'
import rectangle18 from './images/Rectangle 18.jpg'
import rectangle19 from './images/Rectangle 19.jpg'
import rectangle20 from './images/Rectangle 20.jpg'
import rectangle21 from './images/Rectangle 21.jpg'
import rectangle22 from './images/Rectangle 22.jpg'
import circle1 from './images/circle 1.png'
import circle2 from './images/circle 2.png'
import ethereum from './images/Ethereum.png'

function Market() {
  return (
    <>
      <div className='market-container'>
        <div className="market-wrapper">
            <div className="market-introduction">
              <h3>WELCOME TO OUR NFT MARKET PLACE</h3>
              <p>Welcome to <span id='nft-text'>NFTz</span> a world where ARTS and NFTs are shared, a one-stop shop for NFTs and digital Assets. Here you can search and buy creators <span>ASSETS</span> and <span>SAND</span> to incorporate them into yours</p>
            </div>
            <div className='market-items'>
                <button id='button-item'>All Items</button>
                <button>Newest Items</button>
                <button>Cheap Items</button>
            </div>
            <div className="explore-image-section">
                <div className="explore-image">
                  <img className='rectangle' src={rectangle17} alt='nft' />
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
                  <img className='rectangle' src={rectangle18} alt='nft' />
                  <h3>#6400 ESSENCE LINE</h3>
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
                  <img className='rectangle' src={rectangle19} alt='nft' />
                  <h3>#3400 ESSENCE LINE</h3>
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

            <div className="explore-image-section">
                <div className="explore-image">
                  <img className='rectangle' src={rectangle20} alt='nft' />
                  <h3>#2000 ESSENCE LINE</h3>
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
                  <img className='rectangle' src={rectangle21} alt='nft' />
                  <h3>#570 ESSENCE LINE</h3>
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
                  <img className='rectangle' src={rectangle22} alt='nft' />
                  <h3>#4500 ESSENCE LINE</h3>
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
        </div>
      </div>
    </>
  )
}

export default Market