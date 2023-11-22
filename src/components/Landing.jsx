import React from 'react';
import LandingSlider from './LandingSlider.jsx';
import { Link as ScrollLink} from 'react-scroll';

function Landing() {
    return (
        <section className='landing__contianer'>
            <div className='gradient'></div>
            <LandingSlider />
            <div className='landing__text--wrapper'>
                <h1 className='landing__title'>Anime Explorer</h1>
                <p className='landing__para'>Explore thousands of anime titles.</p>
                <ScrollLink className="try__btn-link" to="search" smooth={"true"} duration={500}>
                    <span className='try__btn'>Try Now</span>
                </ScrollLink>
            </div>
        </section>
    );
}

export default Landing;
