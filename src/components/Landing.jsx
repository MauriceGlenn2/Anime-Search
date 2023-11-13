import React from 'react'
import Landingimg from '../Assets/Landingimg.jpg'

function Landing() {
    return (
        <section className='landing__container'>
            <img className="landing-img" src={Landingimg} alt="" />
            <div className="landing-overlay"></div>
                <div className="landing__info">
                <h1 className='landing__title'>
                    Search the world's largest anime library.
                </h1>
                <p className='landing__para'>Get unlimited access to the best anime.</p>
                    <a className='landing__btn' href=""><p>Try now</p></a>
            
            </div>
        </section>
    )
}

export default Landing