import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import logInIcon from '../../images/logIn.svg';
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
                        <Link to="/category/business-card-mockup">Business Card Mockup</Link>
                    </li>
                    <li>
                        <Link to="/category/text-effect">Text Effect</Link>
                    </li>
                    <li>
                        <Link to="/category/social-media-banner">Social Media Banner</Link>
                    </li>
                    <li>
                        <Link to="/category/game">Game</Link>
                    </li>
                </ul>

                <div className="header-right">
                    <Link to="/login">
                        <button className="header-sell-content-btn">Sell Your Content</button>
                    </Link>
                    <Link to="/login">
                        <button className='log-in-btn'><img src={logInIcon} alt="" /> Log In</button>
                    </Link>

                </div>
            </nav>
        </header>
    );
};

export default Header;