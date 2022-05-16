import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="logo-area">
                    <img src={logo} alt="Logo" />
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