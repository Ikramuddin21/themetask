import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {

    const [popularSearch, setPopularSearch] = useState([]);

    useEffect(() => {
        fetch("https://piktask.com/api/client/search/popular_keyword?limit=10")
            .then(res => res.json())
            .then(data => setPopularSearch(data.keywords))
    }, []);

    return (
        <div className="hero">
            <h1>Graphic Resources for Free Download</h1>
            <form className="hero-form" action="">
                <div className="input-area">
                    <input type="text" placeholder="Search All Resources" />
                </div>
                <div className="resources-area">
                    <span>All Resources</span>
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg>
                </div>
                <button className="search-btn" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22.219" height="22.166" viewBox="0 0 22.219 22.166">
                        <g id="search_1_" data-name="search (1)" transform="translate(0 -0.616)">
                            <g id="Group_4" data-name="Group 4" transform="translate(0 0.616)">
                                <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
                                    <path id="Path_1" data-name="Path 1" d="M9.8.616a9.771,9.771,0,1,0,9.8,9.771A9.8,9.8,0,0,0,9.8.616Zm0,17.936a8.165,8.165,0,1,1,8.192-8.165A8.188,8.188,0,0,1,9.8,18.552Z" transform="translate(0 -0.616)" fill="#fff" />
                                </g>
                            </g>
                            <g id="Group_6" data-name="Group 6" transform="translate(15.34 15.929)">
                                <g id="Group_5" data-name="Group 5">
                                    <path id="Path_2" data-name="Path 2" d="M360.11,358.947l-5.274-5.247a.8.8,0,0,0-1.133,1.139l5.274,5.247a.8.8,0,0,0,1.133-1.139Z" transform="translate(-353.466 -353.466)" fill="#fff" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </form>
            <div>
                {

                    popularSearch.map((keyword, index) => <span key={index}>{keyword}</span>)
                }
            </div>
            <div>
                <button>Popular</button>
                <button>Recent</button>
            </div>
        </div>
    );
};

export default Hero;