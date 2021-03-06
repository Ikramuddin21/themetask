import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css';
import { Link, useNavigate } from 'react-router-dom';

const Carousel = () => {
    const navigate = useNavigate();
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/categories/popular?limit=6")
            .then(res => res.json())
            .then(data => setThemes(data.categories))
    }, []);

    // carousel settings
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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

    // handle categories 
    const handleCategories = category => {
        navigate(`/category/${category.slug}/${category.id}`);
    };

    return (
        <div className="carousel">
            <div className="themetask-top-area">
                <h2>Popular Album Collection</h2>
                <Link to="/categories">
                    <button className="see-more-btn">See More</button>
                </Link>
            </div>
            {/* react slick slider */}
            <Slider {...settings} >
                {
                    themes.map(theme => (
                        <div
                            className="carousel-item"
                            key={theme.id}
                            onClick={() => handleCategories(theme)}
                        >
                            <div className="img-area">
                                <img src={`https://piktask.com/media_images/categories/${theme.thumbnail}`} alt={theme.name} />
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