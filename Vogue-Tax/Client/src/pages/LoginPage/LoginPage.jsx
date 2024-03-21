import React from "react";
import "./LoginPage.css";
import logoImage from "../../assets/images/logo.jpg";
import FbImage from "../../assets/icons/facebook.png";
import InstaImage from "../../assets/icons/instagram.png";
import XImage from "../../assets/icons/x.png";
import { Link } from "react-router-dom";


function LoginPage(){
    return(
        <div className="login-page-div">
            <div className="login-bg-image">
                <img className="logo-image" src={logoImage} alt="Logo" />

                <div className="form-div">
                    <form>
                        <h1>Login</h1>
                        <div className="ep-div">
                            <label className="label-text" for="email">Email</label>
                            <input type="email" className="input-box" id="email" placeholder="Enter email"/>
                        </div> 
                        <div className="ep-div">
                            <label className="label-text" for="password">Password</label>
                            <input type="password" className="input-box" id="password" placeholder="Password"/>
                        </div>
                        <div className="login-check-div">
                            <input type="checkbox" id="loginCheck"/>
                            <label for="loginCheck">Remember Me</label>
                        </div>

                        <button type="submit" className="login-button">Login</button>

                        <div className="register-direct">
                            <span>Not have an account?  </span>
                            <Link to="/register" >Register</Link>
                        </div>

                        <a className="forgot-pwd-link" href="https://www.youtube.com/">Forgot Password?</a>
                    </form>
                </div>

                <div className="login-socials-div">
                    <span>Keep Touch In</span>
                    <div className="login-social-icons">
                        <a href="https://www.facebook.com/VoguetexWeligama/"><img className="social-icon" src={FbImage} alt="fb-logo" /></a>
                        <a href="https://www.instagram.com/vogue_tex/"><img className="social-icon" src={InstaImage} alt="insta-logo" /></a>
                        <a href="#"><img className="social-icon" src={XImage} alt="x-logo" /></a>
                    </div>
                </div>
            </div>
            <div className="purple-shade"/>
        </div>
    )
}


export default LoginPage;