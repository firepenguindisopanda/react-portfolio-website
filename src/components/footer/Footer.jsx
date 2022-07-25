import React from 'react'
import './footer.css'
import PANDASTRUGGLE from '../../assets/panda-struggle.svg'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer__top-icon' >
        <a href='#hero-container' className='footer__top-link'>
          My Portfolio
          <img src={PANDASTRUGGLE} alt='top' />
        </a>
      </div>

      <ul className='permalinks'>
        <li><a href="#hero-container">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <p>&copy; 2022 Nicholas Smith</p>
      </div>

    </footer>
  )
}

export default Footer