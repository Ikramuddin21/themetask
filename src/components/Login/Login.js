import React, { useState } from 'react';
import loginBanner from '../../images/login-banner.png';
import loginPiktask from '../../images/login-piktask.png';
import './Login.css';

const Login = ({ setModal }) => {

    const [login, setLogin] = useState(true);
    
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
                            <button className={ login ? "log-active login-btn" : "login-btn"} onClick={() => setLogin(true)}>Login</button>
                            <button 
                            className={!login ? "log-active signup-btn" : "signup-btn"}
                            onClick={() => setLogin(false)}
                            >Sign Up</button>
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
                            {!login && <input className="name-field" type="text" placeholder="User Name" />}
                            <input className="email-field" type="email" placeholder="Email" />
                            <input className="password-field" type="password" name="" id="" placeholder="Password" />
                            <button className="form-signin-btn" type="submit">{login ? "Sign In" : "Sign Up"}</button>

                            {!login && <div className="signUp-checkUp">
                                <input type="checkbox" name="" id="checkUp" />
                                <label htmlFor="checkUp"><small>I do not wish to receive news and promotions from Piktask LLC by email.</small></label>
                            </div>}
                            {login && <p className="reset-password">Password Reset</p>}
                           { !login && <p className="reset-password" onClick={() => setLogin(true)}>Already Registered? Sign In</p>}
                        </form>

                        {login && <p className="toggle-signin">Not a member? <span className="signup-highlight" onClick={() => setLogin(false)}>Sign Up</span></p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;