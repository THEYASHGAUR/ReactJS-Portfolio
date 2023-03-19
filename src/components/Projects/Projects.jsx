import React from 'react'
import './Projects.css';
import Works from './Works.jsx';


const Projects = () => {
  return (
    <section id="projects" className='projects section '>
      <h2 className="section__title">My Projects</h2>
      <span className='section__subtitle' >Most Recent Work</span>


            <Works />

            
    </section>

  )
}

export default Projects;
