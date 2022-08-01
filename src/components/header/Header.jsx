import React from 'react'
import './header.css'
import CTA from './CTA'
import PROFILE from '../../assets/computer-bg.jpg'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'

const Header = () => {
  return (
    <header id="hero-container">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nicholas Smith</h1>
        <h5>An Aspiring</h5>
        <Typewriter 
        options={{
          strings: ['Full Stack Developer.', 'Android Developer.', 'Software Engineer.', 'I love to build things.'],
          autoStart: true,
          loop: true,
        }}
        
        />
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
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header