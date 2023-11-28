import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Landingimg from '../Assets/Landingimg.jpg';
import ds2 from '../Assets/ds2.jpg';
import mha from '../Assets/mha.jpg';
import aot from '../Assets/aot.jpg';
import ff2 from '../Assets/ff2.jpg';
import mobjjk2 from '../Assets/mobjjk2.jpg';
import mobff2 from '../Assets/mobff2.jpg';
import mobaot2 from '../Assets/mobaot2.jpg';
import mobds2 from '../Assets/mobds2.jpg';
import mobop2 from '../Assets/mobop2.jpg';


function LandingSlider() {
    const largeImages = [ff2, Landingimg, ds2, mha, aot];
    const smallImages = [mobds2, mobjjk2, mobff2, mobaot2, mobop2];
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
            <div className='slick__dot'
                style={{
                    width: '4px',
                    height: '4px',
                    color: 'white',
                    border: '1px white solid',
                    borderRadius: '50%',
                    padding: '3px',
                    margin: '0 auto',
                    background: i === currentSlide ? 'white' : 'transparent',
                }}
            />
        ),
    };
  return (
    <>
          <Slider {...settings}>
              {window.innerWidth > 768
                  ? largeImages.map((img, index) => (
                      <div key={index}>
                          <img className="gojo__img" src={img} alt="slide" />
                      </div>
                  ))
                  : smallImages.map((img, index) => (
                      <div key={index}>
                          <img className="mob__img" src={img}  alt="slide" />
                      </div>
                  ))}
          </Slider>
    </>
  )
}
export default LandingSlider


/**
 * 
 *  <Slider {...settings}>
              {images.map((img, index) => (
                  <div key={index}>
                      <img className="gojo__img" src={img} alt="slide" />
                  </div>
              ))}
          </Slider>
 */