import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { popularSearch } from '../../../temp/info';
import './Hero.css';

const Hero = () => {

    const [showResources, setShowResources] = useState(false);
    const [popular, setPopular] = useState(true);

    // show resources false
    useEffect(() => {
        document.addEventListener("mousedown", () => setShowResources(false));
    }, []);

    // handle search
    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div className="hero">
            <div>
                <h1 className="hero-title">Graphic Resources for Free Download</h1>
                <form className="hero-form" onSubmit={handleSearch}>
                    <div className="input-area">
                        <input type="text" placeholder="Search All Resources" />
                    </div>

                    <div className="resources-area">
                        <div className="resources-btn" onClick={() => setShowResources(true)}>
                            <span>All Resources</span>
                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg>
                        </div>

                        <div className={`resources ${showResources ? "isShow" : ""}`}>
                            <ul>
                                {
                                    popularSearch.map((resource, index) => <li key={index}>{resource}</li>)
                                }
                            </ul>
                        </div>
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
                <div className="popular-keywords">
                    <span>Popular Search : </span>
                    {

                        popularSearch.map((keyword, index) => keyword.length > 0 && <span key={index} className="keyword">{keyword}</span>)
                    }
                </div>
                <div className="hero-button">
                    <Link to="/">
                        <button
                            className={popular ? "active" : ""}
                            onClick={() => setPopular(true)}
                        >Popular</button>
                    </Link>
                    
                    <Link to="/recent/new-design">
                        <button
                            className={!popular ? "active" : ""}
                            onClick={() => setPopular(false)}
                        >Recent</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;