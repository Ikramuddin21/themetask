import React from 'react';
import loginBanner from '../../images/login-banner.png';
import loginPiktask from '../../images/login-piktask.png';
import './Login.css';

const Login = ({ setModal }) => {
    return (
        <div className="login">
            <div className="login-container">
                <button
                    className="close-btn"
                    onClick={() => setModal(false)}
                >&times;</button>

                <div className="login-wrapper">
                    <div className="login-left">
                        <img className="login-piktask" src={loginPiktask} alt="" />
                        <p>Enjoy Free Download Now!</p>
                        <p>* Get 50% Off Discount for Premium Plan</p>
                        <p>* Download 6 Images for Free Everyday</p>
                        <p>* 2,600,000+ Images to energize your Design</p>
                        <img className="login-banner" src={loginBanner} alt="" />
                    </div>

                    <div className="login-right">
                        <div className="login-signup-btn">
                            <button className="log-active login-btn">Login</button>
                            <button className="signup-btn">Sign Up</button>
                        </div>

                        <div className="login-social">
                            <p><small>with your social network</small></p>
                            <div>
                                <button className="login-google-btn">Google</button>
                                <button className="login-facebook-btn">Facebook</button>
                            </div>
                        </div>

                        <span className="or">OR</span>

                        <form className="form">
                            {/* <input className="name-field" type="text" placeholder="User Name" /> */}
                            <input className="email-field" type="email" placeholder="Email" />
                            <input className="password-field" type="password" name="" id="" placeholder="Password" />
                            <button className="form-signin-btn" type="submit">Sign In</button>
                            <p className="reset-password">Password Reset</p>
                        </form>

                        <p className="toggle-signin">Not a member? <span className="signup-highlight">Sign Up</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;