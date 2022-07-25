import React from 'react'
import './portfolio.css'

import MOVIEAPP from '../../assets/movie_app_project.png'

const data = [
  {
    id: 1,
    image: MOVIEAPP,
    title: 'A portfolio item title',
    github: 'https://github.com/firepenguindisopanda',
    demo: 'https://.com'
  },
  {
    id: 2,
    image: MOVIEAPP,
    title: 'A portfolio item title',
    github: 'https://github.com/firepenguindisopanda',
    demo: 'https://.com'
  },
  {
    id: 3,
    image: MOVIEAPP,
    title: 'A portfolio item title',
    github: 'https://github.com/firepenguindisopanda',
    demo: 'https://.com'
  },
  {
    id: 4,
    image: MOVIEAPP,
    title: 'A portfolio item title',
    github: 'https://github.com/firepenguindisopanda',
    demo: 'https://.com'
  },
  {
    id: 5,
    image: MOVIEAPP,
    title: 'A portfolio item title',
    github: 'https://github.com/firepenguindisopanda',
    demo: 'https://.com'
  },
  {
    id: 6,
    image: MOVIEAPP,
    title: 'A portfolio item title',
    github: 'https://github.com/firepenguindisopanda',
    demo: 'https://.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(item => (
            <article key={item.id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} target="_blank" rel="noopener noreferrer" className='btn'>Github</a>
                <a href={item.demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          ))
        }


      </div>
    </section>
  )
}

export default Portfolio