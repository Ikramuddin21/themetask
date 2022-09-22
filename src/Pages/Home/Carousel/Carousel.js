import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css';
import { Link, useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import SkeletonCard from '../../../skeleton/SkeletonCard';

const Carousel = () => {
    const navigate = useNavigate();
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        fetch("https://themetask-server.onrender.com/carouselitems")
            .then(res => res.json())
            .then(data => setThemes(data.slice(0, 6)))
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
    const handleCategories = name => {
        navigate(`/category/${name.toLowerCase()}`);
    };

    return (
        <>
            {
                !themes.length ?
                    <div className="themetask">
                        <div className="themetask-top-area">
                            <h2><Skeleton width="160px" height="12px" /></h2>
                        </div>
                        <div className="themetask-wrapper">
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    </div>
                    :
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
                                        onClick={() => handleCategories(theme.name)}
                                    >
                                        <div className="img-area">
                                            <img src={theme.thumbnail} alt={theme.name} />
                                        </div>

                                        <div className="text-area">
                                            <h4>{theme.name}</h4>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
            }
        </>
    );
};

export default Carousel;