import React from 'react'
import Landingimg from '../Assets/Landingimg.jpg'

function Landing() {
    return (
        <section className='landing__contaniner'>
            <div className='overlay'></div>
            <img className="landing-img" src={Landingimg} alt="" />
            <div>
                <h1 className='landing__title'>
                    Anime Finder
                </h1>
                <p className='landing__para'>Get unlimited access to the best anime.</p>
                <p className='landing__btn'>Try now</p>
            </div>
        </section>
    )
}

export default Landing