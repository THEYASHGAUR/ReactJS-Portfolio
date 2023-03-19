import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card">
        <img src={item.image} alt="" className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <a href="d" className="work__button">
            Demo <i class="fa-sharp fa-solid fa-arrow-right-long work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorkItems;
