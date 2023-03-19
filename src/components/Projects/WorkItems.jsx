import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card">
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <div className="links">

        <a href={item.demoLink} className="work__button">
            Demo <i class="fa-sharp fa-solid fa-arrow-right-long work__button-icon"></i>
        </a>
        <a href={item.github} className="work__button">
            Code <i class="fa-sharp fa-solid fa-arrow-right-long work__button-icon"></i>
        </a>
        </div>

    </div>
  )
}

export default WorkItems;
