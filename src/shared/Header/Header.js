import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {

    const [stickyHeader, setStickyHeader] = useState(false);

    // handle sticky header
    const handleStickyHeader = () => {
        console.log(window.scrollY);
        if (window.scrollY > 350) {
            setStickyHeader(true);
        }
        else {
            setStickyHeader(false);
        }
    };

    window.addEventListener("scroll", handleStickyHeader);

    return (
        <header className={stickyHeader ? "header active" : "header"}>
            <nav>
                <div className="logo-area">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                <ul className="list-items">
                    <li><a href="#">Business Card Mockup</a></li>
                    <li><a href="#">Text Effect</a></li>
                    <li><a href="#">Social Media Banner</a></li>
                    <li><a href="#">Game</a></li>
                </ul>

                <div className="header-right">
                    <button className="header-btn">Sell Your Content</button>
                    <span><a href="#">Login</a></span>

                </div>
            </nav>
        </header>
    );
};

export default Header;