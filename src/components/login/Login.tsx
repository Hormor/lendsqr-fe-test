import React from "react";
import Logo from "../assets/logo.svg"
import LoginImage from "../assets/loginImage.svg"

export default function Login() {
    return(
        <div className="login-page">
            <div className="login-imgs">
                <img src={Logo} alt="Logo Image" />
                <img src={LoginImage} alt="Login Image" />
            </div>
            <div className="login-container">
                <h1>Welcome!</h1>
                <p>Enter detais to login.</p>
                <form action="">
                        <input type="email" name="email" id="email" placeholder="Email"/>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                </form>
                <p>FORGOT PASSWORD</p>
                <button type="submit">LOG IN</button>
            </div>
        </div>
    )
}