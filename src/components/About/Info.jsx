import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                
                <i class="fa-solid fa-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">2+ Years of Experience</span>
            </div>
            <div className="about__box">
                
                <i class="fa-solid fa-briefcase about__icon"></i>
                <h3 className="about__title">Projects Completed</h3>
                <span className="about__subtitle">20+</span>
            </div>
            <div className="about__box">
                <i class="fa-solid fa-phone about__icon"></i>
                <h3 className="about__title">Support </h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info;


