import React, { useState } from 'react'
import "./LoginPopUp.css"
import { assets } from '../../assets/assets'
const LoginPopUp = ({ setShowlogin }) => {
    const [currState, setcurrState] = useState("Sign Up")
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>
                        {currState}
                    </h2>
                    <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" srcset="" />
                </div>
                <div className='login-popup-inputs'>
                    {
                        currState === "Log In" ? <></> : <input type="text" placeholder='Your name' required />
                    }

                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Log In"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required />
                    <p>By continuning i agree to the terms of use and privacy policy</p>
                </div>
                <p>Create a new account? <span onClick={() => setcurrState("Sign Up")}>Click Here</span></p>
                <p>
                    Already have an account? <span onClick={() => setcurrState("Log In")}>Log In</span>
                </p>

            </form>
        </div>
    )
}

export default LoginPopUp