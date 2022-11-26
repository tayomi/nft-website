import React from 'react'
import '../App.css'
import './Investors.css'
import stripe from './images/Stripe.png'
import coinbase from './images/Coinbase.png'
import oracle from './images/Oracle.png'
import airbnb from './images/Airbnb.png'
import binance from './images/Binance.png'
import dropbox from './images/Dropbox.png'
import verifone from './images/Vector.png'

function Investors() {
  return (
    <>
      <div className="investors-container">
        <div className="investors-wrapper">
            <h2>WELCOME TO OUR WORLD OF TRUSTED COMMUNITIES</h2>
            <p>In thriving NFT communities, participants share thoughts, questions and concerns, all of which contribute to a project's development. These community members may receive tokens 
                that allow them to purchase NFTs. NFT communities are also valuable for attracting investors in a project</p>
            <div className="investors-logo-first">
                <img src={oracle} alt='investors logo'/>
                <img src={airbnb} alt='investors logo'/>
                <img src={binance} alt='investors logo'/>
                <img src={dropbox} alt='investors logo'/>
                <img src={verifone} alt='investors logo'/>
                <img src={coinbase} alt='investors logo'/>
                <img src={stripe} alt='investors logo'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Investors