import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service_header">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>React / Anuglar / Laravel.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>NodeJs / NextJs / ExpressJs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>GraphQl / ApolloClient.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>MySQL / PostgreSQL.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Flask / Django</p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service_header">
            <h3>Android Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Flutter.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Android Studio.</p>
            </li>
           
          </ul>
        </article>
        <article className="service">
          <div className="service_header">
            <h3>UI/UX Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma / AdobeXD / Ms Paint.</p>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services