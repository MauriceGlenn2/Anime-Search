import React from 'react'
import Landingimg from '../Assets/Landingimg.jpg'

function Landing() {
    return (
        <section className='landing__contianer'>
            <div className='gradient' style={{}}></div>
            <img className="gojo__img"src={Landingimg} alt="landing" />
            <div className='landing__text--wrapper'>
                <h1 className='landing__title'>Anime Explorer</h1>
                <p className='landing__para'>Explore thousands of anime titles.</p>
                <a className="try__btn-link" href="">
                    <span className='try__btn'>Try Now</span>
                </a>
            </div>
        </section>
    )
}

export default Landing

