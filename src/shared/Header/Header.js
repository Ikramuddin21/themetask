import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import logInIcon from '../../images/logIn.svg';
import menuIcon from '../../images/menu-icon.svg';
import './Header.css';

const Header = ({ setModal }) => {

    const [stickyHeader, setStickyHeader] = useState(false);
    const [showMenuIcon, setShowMenuIcon] = useState(true);

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

    // handle sell content button
    const handleSellContentBtn = () => {
        setModal(true);
        setShowMenuIcon(true);
    };

    // handle login button
    const handleLoginBtn = () => {
        setModal(true);
        setShowMenuIcon(true);
    };

    return (
        <header className={stickyHeader ? "header active" : "header"}>
            <button className={!showMenuIcon ? "show-closeIcon" : "close-icon"} onClick={() => setShowMenuIcon(true)}>&times;</button>
            <nav className={!showMenuIcon ? "show-nav" : ""}>
                <div className="logo-area">
                    <Link to="/">
                        <img className="logo" src={logo} alt="Logo" onClick={() => setShowMenuIcon(true)} />
                    </Link>

                    <img className={showMenuIcon ? "menu-icon" : "hide-menu"} src={menuIcon} alt="" onClick={() => setShowMenuIcon(false)} />
                </div>

                <ul className={!showMenuIcon ? "list-items show-header-list-items" : "list-items"}>
                    <li>
                        <Link to="/category/business-card-mockup" onClick={() => setShowMenuIcon(true)}>Business Card Mockup</Link>
                    </li>
                    <li>
                        <Link to="/category/text-effect" onClick={() => setShowMenuIcon(true)}>Text Effect</Link>
                    </li>
                    <li>
                        <Link to="/category/social-media-banner" onClick={() => setShowMenuIcon(true)}>Social Media Banner</Link>
                    </li>
                    <li>
                        <Link to="/category/game" onClick={() => setShowMenuIcon(true)}>Game</Link>
                    </li>
                </ul>

                <div className={!showMenuIcon ? "header-right show-header-right" : "header-right"}>
                    <button
                        className="header-sell-content-btn"
                        onClick={handleSellContentBtn}
                    >Sell Your Content</button>
                    <button
                        className='log-in-btn'
                        onClick={handleLoginBtn}
                    ><img src={logInIcon} alt="" /> Log In</button>

                </div>
            </nav>
        </header>
    );
};

export default Header;