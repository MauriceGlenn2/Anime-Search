import React, { useEffect } from 'react';
import LandingSlider from './LandingSlider.jsx';
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Landing() {

    useEffect(() => {
        AOS.init({ duration: 2000});
    }, [])
   
    return (
        <section className='landing__contianer'>
            <div className='gradient'></div>
            <LandingSlider />
            <div className='landing__text--wrapper'>
                <h1 className='landing__title' data-aos="fade-up" >Anime Explorer</h1>
                <p className='landing__para' data-aos="fade-up" >Explore thousands of anime titles.</p>
                <ScrollLink data-aos="fade-up"  className="try__btn-link" to="search" smooth={"true"} duration={500}>
                    <span className='try__btn' >Try Now</span>
                </ScrollLink>
            </div>
        </section>
    );
}

export default Landing;
