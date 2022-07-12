import React from 'react'
import './header.css'
import CTA from './CTA'
import PROFILE from '../../assets/prof_pic.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="hero-container">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nicholas Smith</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA />
        <div className="myprofile">
          <img src={PROFILE} alt="Nicholas Smith" />
        </div>
        <HeaderSocials />
        <div className="arrow_container">
          <a href="#contact" className="scroll__down">
            <div className="scroll_down"></div>
            <div className="scroll_down"></div>
            <div className="scroll_down"></div>
            <span className="text">
            Scroll Down
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header