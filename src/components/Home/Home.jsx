import React from 'react'
import './Home.css';
import Social from './Social.jsx';
import Data from './Data.jsx';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className='home__container container grid'>
        <div className="home__content grid">
          <Social />

          <Data />
          <div className="home__video">
            <video
              className='video_tag'

              autoPlay
              muted
              loop
            >
              <source src="./bg.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Home;
