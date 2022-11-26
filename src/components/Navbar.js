import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
    <nav className='navbar'>
      <div className="nav-container">
        <Link to='/' className='navbar-logo'>NFTz</Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <Link to='/' className='nav-links nav-link-home' onClick={closeMobileMenu}>
              Home
              <span className='dot'></span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/exp' className='nav-links' onClick={closeMobileMenu}>
              Explore
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/marketplace' className='nav-links' onClick={closeMobileMenu}>
              Market Place
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/newssection' className='nav-links' onClick={closeMobileMenu}>
              News
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/invest' className='nav-links' onClick={closeMobileMenu}>
              Investors
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-links nav-link-mobile' onClick={closeMobileMenu}>
              Buy Now
            </Link>
          </li>
        </ul>
        <div className='check-out'>
          <i class="fa-solid fa-cart-shopping"></i>
          <button>Buy now</button>
          <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa-sharp fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar