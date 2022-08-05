import React from 'react'
import './portfolio.css'

import MOVIEAPP from '../../assets/movie_app_project.png'
import RECIPEAPP from '../../assets/recipe_app.png'
import NOTESAPP from '../../assets/notes_app.png'

const data = [
  {
    id: 1,
    image: MOVIEAPP,
    title: 'DCIT MovieApp',
    github: 'https://github.com/firepenguindisopanda/DCIT-Movie-App',
    demo: 'https://focused-neumann-3db077.netlify.app/',
    tools: 'Anuglar / Github Actions / Netlify'
  },
  {
    id: 2,
    image: RECIPEAPP,
    title: 'Recipe App',
    github: 'https://github.com/firepenguindisopanda/recipe-board',
    demo: 'https://recipe-boards.herokuapp.com/',
    tools: 'Flask MVC / PostgreSQL(Heroku) / Heroku'
  },
  {
    id: 3,
    image: NOTESAPP,
    title: 'Notes App',
    github: '#',
    demo: 'https://mysterious-escarpment-22237.herokuapp.com/',
    tools: 'React / NodeJs / Express / Heroku / MongoDB (temp creds: username: nicodemus, password: nico)'
  },
  
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
              <div className="portfolio__item-description">
                <small>Tools Used</small>
                <br/>
                <small>{item.tools}</small>
              </div>
            </article>
          ))
        }


      </div>
    </section>
  )
}

export default Portfolio