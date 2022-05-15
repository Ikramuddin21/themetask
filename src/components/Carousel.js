import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cycle from '../images/cycle.jpg';
import './Carousel.css';

const Carousel = () => {

    const [themes, setThemes] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/popular?limit=6")
            .then(res => res.json())
            .then(data => setThemes(data.categories))
    }, []);

    // const settings = {
    // infinite: true,
    // slidesToShow: 4,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true
    // };
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    //   infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //   infinite: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="carousel">
            <h2>Popular Album Collection</h2>
            <Slider {...settings}>
                {
                    themes.map(theme => (
                        <div className="carousel-item">
                            <div className="img-area">
                                <img src={cycle} alt={theme.name} />
                            </div>
                            <div className="text-area">
                                <h4>{theme.name}</h4>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Carousel;