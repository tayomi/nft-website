import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
           <div className="footer-section">
             <div className='footer-text'>
              <Link to='/' className='text-logo' target='_top'>NFTz</Link>
              <p>Get started and explore more on NFTz, a world for ARTs and NFTs</p>
              </div>
             <div className="social-icon">
               <Link
                  className='social-icon-link-twitter'
                  to='/'
                  target='_blank'
                  aria-label='Twitter'>
                  <i class="fa-brands fa-twitter"></i>
                </Link>

                <Link
                  className='social-icon-link-instagram'
                  to='/'
                  target='_blank'
                  aria-label='Instagram'>
                  <i class="fa-brands fa-instagram"></i>
                </Link>

                <Link
                  className='social-icon-link-facebook'
                  to='/'
                  target='_blank'
                  aria-label='Facebook'>
                 <i class="fa-brands fa-facebook"></i>
                </Link>

                <Link
                  className='social-icon-link-discord'
                  to='/'
                  target='_blank'
                  aria-label='Discord'>
                  <i class="fa-brands fa-discord"></i>
                </Link>
              </div>
            
              <div className="footer-contact">
                <div className="footer-location">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Compensation Layout, Gwagwalada, Abuja</p>
                </div>
                <div className="footer-mail">
                  <i class="fa-regular fa-envelope"></i>
                  <p>tayoolatunji81@gmail.com</p>
                </div>
              </div>
           </div>
           <p id='copyright'>Copyright <span>&#169;</span> 2022</p>
        </div>
      </div>
    </>
  )
}

export default Footer