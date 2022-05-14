import React from 'react';
import { FaDribbble, FaBehance, FaInstagram, FaFacebookF, FaPinterestP, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../../images/logo.png';
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
               <img src={logo} alt="" />
               <p>copyright &copy; themetask-all right reserved, 2022</p>
               <ul className="social-medias">
                   <li><FaDribbble className="media-icon" /></li>
                   <li><FaBehance className="media-icon" /></li>
                   <li><FaInstagram className="media-icon" /></li>
                   <li><FaFacebookF className="media-icon" /></li>
                   <li><FaPinterestP className="media-icon" /></li>
                   <li><FaLinkedinIn className="media-icon" /></li>
                   <li><FaYoutube className="media-icon" /></li>
               </ul>
           </div>
        </footer>
    );
};

export default Footer;