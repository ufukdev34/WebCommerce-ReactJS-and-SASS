import React,{useLayoutEffect,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function SliderComponent() {
    /* useLayoutEffect(() => {
        document.querySelector('.slider').style.height = window.innerHeight - document.querySelector('.navbar').clientHeight + "px"
    }, [])
    useEffect(() => {
       window.addEventListener('resize',()=>{
        document.querySelector('.slider').style.height = window.innerHeight - document.querySelector('.navbar').clientHeight + "px"
       })
    }, []) full height auto slider */

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover:false
      };
    return (
        <Slider {...settings} className="slider">
            <div>
              <div className="container">
                <div className="slideContent">
                  <span>
                    <h1>Slider Title</h1>
                    <h3>Slider Content</h3>
                  </span>
                  <button>Slider Button</button>
                </div>
              </div>
            </div>

            <div>
              <div className="container">
                <div className="slideContent">
                  <span>
                    <h1>Slider Title 2</h1>
                    <h3>Slider Content 2</h3>
                  </span>
                  <button>Slider Button 2</button>
                </div>
              </div>
            </div>
        </Slider>
    )
}
