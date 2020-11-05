import { Link } from 'react-router-dom';
import React from 'react'

import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
      <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" 
      alt=""
      className="login__logo"/>
      </Link>

      <div className="login__container">
        <h1>Sing In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login__singInButton">Sing In</button>
        </form>

        <p>By singing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Insterest-Based Ads Noice.</p>

        <button className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
