import React, { useState } from "react";
import Logo from "../../assets/logo.svg"
import LoginImage from "../../assets/loginImage.svg"
import "./index.scss"


export default function Login() {

    const [show, setShow] = useState(false);

    return (
        <div className="login-page">
            <div className="login-imgs">
                <img src={Logo} alt="Logo Image" className="" />
                <img src={LoginImage} alt="Login Image" />
            </div>
            <div className="login-container">
                <div>
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>
                    <form className="login-form">
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <div className="password-input">
                            <input type={show ? "text" : "password"} name="password" id="password" placeholder="Password" />
                            <span onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</span>
                        </div>
                        <span className="forgot-password">FORGOT PASSWORD?</span>
                        <button type="submit">LOG IN</button>
                    </form>
                </div>
            </div>
        </div>
    )
}