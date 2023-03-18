import React, { useState } from 'react'
import './Services.css'


const Services = () => {
  const [toggleState , setToggleState] = useState(0);

  const toggleTab = (index)=>{
    setToggleState(index);

  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i class='bx bx-code services__icon'></i>
            <h3 className="services__title">Web Developer</h3>
          </div>

          <span className="services__button" onClick={()=>toggleTab(1)}>View More <i class='bx bx-right-arrow-alt services__button-icon'></i></span>

          <div className={toggleState === 1 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} class="fa-regular fa-xmark services__modal-close"></i>

              <h3 className="services__modal-title">Web Developer</h3>
              <p className="services__modal-description">bla bla bla</p>


              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <i class="fa-solid fa-pen-clip services__icon"></i>
            <h3 className="services__title">UI/UX Designer</h3>
          </div>

          <span className="services__button"  onClick={()=>toggleTab(2)}>View More <i class='bx bx-right-arrow-alt services__button-icon'></i></span>

          <div className={toggleState === 2 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={()=> toggleTab(0)} class="fa-regular fa-xmark services__modal-close"></i>

              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">bla bla bla</p>


              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i class="fa-solid fa-pen-to-square services__icon"></i>
            <h3 className="services__title">Digital Marketing</h3>
          </div>

          <span className="services__button"  onClick={()=>toggleTab(3)}>View More <i class='bx bx-right-arrow-alt services__button-icon'></i> </span>

          <div className={toggleState === 3 ? "services__modal active__modal" : "services__modal"}>
            <div className="services__modal-content">
            <i onClick={()=> toggleTab(0)} class="fa-regular fa-xmark services__modal-close"></i>

              <h3 className="services__modal-title">Digital Marketing</h3>
              <p className="services__modal-description">bla bla bla</p>


              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    i build user interface for the users.
                  </p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
