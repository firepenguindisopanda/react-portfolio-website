import React from 'react'
import './twocolumns.css'
import POSTORDER from '../../assets/postorder_traversal.png'
import { SiCodewars } from 'react-icons/si'
import { SiLeetcode } from 'react-icons/si'
import { SiCodeforces } from 'react-icons/si'

const TwoColumns = () => {
  return (
    <section id='twocolumns'>
      <div className="container twocolumns__container">
        
        <div className="twocolumns__content">
          <div className="twocolumns__cards">
            <article className="twocolumns__card">
              <SiLeetcode className="twocolumns__icon" />
              <h5>Leetcode</h5>
              <small>293 Problems Solved.</small>
            </article>
            <article className="twocolumns__card">
              <SiCodeforces className="twocolumns__icon" />
              <h5>Codeforces</h5>
              <small>72 Problems Solved.</small>
            </article>
            <article className="twocolumns__card">
              <SiCodewars className="twocolumns__icon" />
              <h5>Codewars</h5>
              <small>48 Problems Solved.</small>
            </article>
          </div>
          <p>
            I like to solve puzzles. I use different online platforms like Hackerrank, Leetcode, Codeforces, Porject Euler and Codewars to solve problems.
            I am a strong programmer but I know my Math skills can be improved. I use different Mathematics textbooks to refresh my understanding of topics and learn new topics.
            I am actively using Leetcode to solve problems. I am also using Codeforces and Codewars to practice my programming and problem solving skills.
            Project Euler is an online platform where I can solve mathematical problems.
          </p>
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
