import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Landingimg from '../Assets/Landingimg.jpg';
import ds2 from '../Assets/ds2.jpg';
import mha from '../Assets/mha.jpg';
import aot from '../Assets/aot.jpg';
import ff2 from '../Assets/ff2.jpg';

function Landing() {
    const images = [ff2, Landingimg, ds2, mha, aot ];
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false, 
        beforeChange: (current, next) => setCurrentSlide(next),
        dotsClass: "slick-dots custom-dots",
        customPaging: i => (
            <div
                style={{
                    width: '5px',
                    height: '5px',
                    color: 'white',
                    border: '1px white solid',
                    borderRadius: '50%',
                    padding: '4px',
                    margin: '0 auto',
                    background: i === currentSlide ? 'white' : 'transparent',
                }}
            />
        ),
    };

    return (
        <section className='landing__contianer'>
            <div className='gradient'></div>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img className="gojo__img" src={img} alt="slide" />
                    </div>
                ))}
            </Slider>
            <div className='landing__text--wrapper'>
                <h1 className='landing__title'>Anime Explorer</h1>
                <p className='landing__para'>Explore thousands of anime titles.</p>
                <a className="try__btn-link" href="">
                    <span className='try__btn'>Try Now</span>
                </a>
            </div>
        </section>
    );
}

export default Landing;

// import React from 'react'
// import Landingimg from '../Assets/Landingimg.jpg'


// function Landing() {
//     return (
//         <section className='landing__contianer'>
//             <div className='gradient'></div>
//             <img className="gojo__img" src={Landingimg} alt="landing" />
//             <div className='landing__text--wrapper'>
//                 <h1 className='landing__title'>Anime Explorer</h1>
//                 <p className='landing__para'>Explore thousands of anime titles.</p>
//                 <a className="try__btn-link" href="">
//                     <span className='try__btn'>Try Now</span>
//                 </a>
//             </div>
//         </section>
//     )
// }

// export default Landing