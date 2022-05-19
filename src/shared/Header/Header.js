import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {

    const [stickyHeader, setStickyHeader] = useState(false);

    // handle sticky header
    const handleStickyHeader = () => {
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
                    <li>
                        <Link to="/business-card-mockup">Business Card Mockup</Link>
                    </li>
                    <li>
                        <Link to="/text-effect">Text Effect</Link>
                    </li>
                    <li>
                        <Link to="/social-media-banner">Social Media Banner</Link>
                    </li>
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                </ul>

                <div className="header-right">
                    <button className="header-btn">Sell Your Content</button>
                    <span>
                        <Link to="/login">Login</Link>
                    </span>

                </div>
            </nav>
        </header>
    );
};

export default Header;