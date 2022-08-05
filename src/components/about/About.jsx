import React from 'react'
import './about.css'
import PROFILE from '../../assets/prof_pic.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PROFILE} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Udacity AI With Python</h5>
              <small>Nano-Degree Scholarship Winner</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5 projects so far!</small>
            </article>
          </div>
          <p>
            I like to look for online courses to give me an introductory understanding of different technologies.
            After completing these online courses I would make side projects to put my skills and knowledge to the test.
            I was a volunteer mentor in a Youth Speak Up programme. A former executive member of the University of the West Indies Computing Society club. As an executive member I presented on the benefits of Git / Github.
            I have a passion for learning and I am always looking for new ways to improve my skills.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      
    </section>
  )
}

export default About
