import React from 'react'
import '../App.css'
import './News.css'
import rectangle14 from './images/Rectangle 14.jpg'
import rectangle15 from './images/Rectangle 15.jpg'
import rectangle16 from './images/Rectangle 16.jpg'

function News() {
  return (
    <>
      <div className="news-container">
        <div className="news-wrapper">
            <h3>WHAT'S NEW AT NFTz</h3>
            <div className="news-section">
                <div className="news-select">
                    <img src={rectangle14} alt='nft'/>
                    <div className="news-select-content">
                      <h4>Buying NFTs with credit cards made easy</h4>
                      <p>Introduction to the barriers in NFTs world, keep getting leveled to encourage more participation</p>
                      <h5>Read 2mins ago</h5>
                    </div>
                </div>
                <div className="news-select">
                    <img src={rectangle15} alt='nft'/>
                    <div className="news-select-content">
                      <h4>Buying NFTs with credit cards made easy</h4>
                      <p>Introduction to the barriers in NFTs world, keep getting leveled to encourage more participation</p>
                      <h5>Read 2mins ago</h5>
                    </div>
                </div>
                <div className="news-select">
                    <img src={rectangle16} alt='nft'/>
                    <div className="news-select-content">
                      <h4>Buying NFTs with credit cards made easy</h4>
                      <p>Introduction to the barriers in NFTs world, keep getting leveled to encourage more participation</p>
                      <h5>Read 2mins ago</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default News