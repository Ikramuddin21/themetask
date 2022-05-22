import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import logInIcon from '../../images/logIn.svg';
import './Header.css';

const Header = ({ setModal }) => {

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
                    <button
                        className="header-sell-content-btn"
                        onClick={() => setModal(true)}
                    >Sell Your Content</button>
                    <button
                        className='log-in-btn'
                        onClick={() => setModal(true)}
                    ><img src={logInIcon} alt="" /> Log In</button>

                </div>
            </nav>
        </header>
    );
};

export default Header;