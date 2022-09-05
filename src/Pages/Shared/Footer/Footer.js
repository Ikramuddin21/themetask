import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { socialMedia } from '../../../temp/info';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-menus">
                <div>
                    <h3>Categories</h3>
                    <ul>
                        <li>Business Card Mockup</li>
                        <li>Social Media Banner</li>
                        <li>Logo Mockup</li>
                        <li>Text Effect</li>
                    </ul>
                </div>

                <div>
                    <h3>Content</h3>
                    <ul>
                        <li>New resources</li>
                        <li>Most popular content</li>
                        <li>Search trends</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <h3>Information</h3>
                    <ul>
                        <li>About us</li>
                        <li>Sell Your Content</li>
                        <li>Support</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h3>Legal</h3>
                    <ul>
                        <li>Terms & conditions</li>
                        <li>License Agreement</li>
                        <li>Copyright information</li>
                        <li>Cookies policy</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-copy-social">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <p>copyright &copy; themetask-all right reserved, 2022</p>
                    <ul className="social-medias">
                        {
                            socialMedia.map((icon, index) => <li key={index}>
                                <img className="media-icon" src={icon} alt="icon" />
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;