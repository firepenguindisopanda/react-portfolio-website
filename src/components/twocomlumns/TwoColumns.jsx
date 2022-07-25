import React from 'react'
import './twocolumns.css'
import POSTORDER from '../../assets/postorder_traversal.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const TwoColumns = () => {
  return (
    <section id='twocolumns'>
      <div className="container twocolumns__container">
        
        <div className="twocolumns__content">
          <div className="twocolumns__cards">
            <article className="twocolumns__card">
              <FaAward className="twocolumns__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="twocolumns__card">
              <FiUsers className="twocolumns__icon" />
              <h5>Clients</h5>
              <small>Work in Progress</small>
            </article>
            <article className="twocolumns__card">
              <VscFolderLibrary className="twocolumns__icon" />
              <h5>Projects</h5>
              <small>5 projects so far!</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, earum blanditiis necessitatibus autem impedit recusandae omnis nulla cupiditate voluptate aperiam quasi id eaque maiores quia quidem quas quis ipsam rerum!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eaque, quisquam tempora impedit veritatis cumque temporibus dolore fugit voluptates error, quos illum? Praesentium, soluta. Aliquam voluptates harum esse dolore tempora.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        <div className="twocolumns__me">
          <div className="twocolumns__me-image">
            <img src={POSTORDER} alt="About Me" />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default TwoColumns
