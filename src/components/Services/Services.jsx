import React from 'react'
import './Services.css'


const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
            <div>
                
                <i className="uil uil services__icon"></i>

                <h3 className="services__title">ff</h3>
            </div>

            <span className="services__button">View More <i class='bx bx-right-arrow-alt'></i></span>

            <div className="services__modal">
                <div className="services__modal-content">
                <i class="fa-regular fa-xmark services__modal-close"></i>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
