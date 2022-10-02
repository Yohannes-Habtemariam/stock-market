import React, { useState, useRef } from "react";
import "./DropDownViewsForm.css";

const DropDownViewsForm = () => {

  const [email, setEmail] = useState("");
  const [changeEmail, setChangeEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [changePassword, setChangePassword] = useState(false);

  const updateEmail = event => {
    setEmail(event.target.value);
    setChangeEmail(true);
  }
  const updatePassword = event => {
    setPassword(event.target.value);
    setChangePassword(true);
  }

  const emailFormatError = useRef();

  const checkEmailFormat = () => {
    if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      emailFormatError.current.className = "errorInvisible"
    } else {
      emailFormatError.current.className = "errorVisible"
    }
  }


  const submitLoginForm = event => {
      event.preventDefault();
    if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) 
      && password.trim().length > 0) {

      const clientData = {
        email: email,
        password:password
      }

      const settings = {
        method: "POST",
        body: JSON.stringify(clientData),
        headers: {
          "Content-Type": "application/JSON"
        }
      }

      fetch("https://jsonplaceholder.typicode.com/users", settings)
      .then(response => response.json())
      .then(data => console.log(data));

      setEmail("");
      setChangeEmail(false);
      setPassword("");
      setChangePassword(false);
    } else {
      if( email.length === 0 ) {
        alert("enter your email")
      }
      if ( password.length === 0 ) {
        alert("enter your password")
      }
    }
   
  }

  return (
    <div className="dropdown-pages-form-container">
      <section className="form-footer-container">
        <fieldset className="login-form">
          <legend> Login Here </legend>
          <form onSubmit={submitLoginForm}>

            <input type="email" name="email" value={email} onChange={updateEmail} onBlur={checkEmailFormat} placeholder="Enter Email Here" />
            <div className={changeEmail && email.trim().length === 0 ? "errorVisible" : "errorInvisible"}> Please enter your email! </div>
            <div className="errorInvisible" ref={emailFormatError} >Incorrect email format!</div>

            <input type="password" name="password" value={password} onChange={updatePassword} placeholder="Enter Password Here" />
            <div className={changePassword && password.trim().length === 0 ? "errorVisible" : "errorInvisible"}> Please enter your password! </div>

            <button> Login </button>
            <p>If you don't have an account, you can click below to login with.</p>
            <button>Sign Up</button>
          </form>
        </fieldset>

        <footer className="blog-social-media">
          <div>
            <a href="https://www.youtube.com/" target="_blank">
                <i className="fab fa-youtube"></i>
            </a>
          </div>

          <div>
            <a href="https://www.facebook.com/" target="_blank">
                <i className="fab fa-facebook-square"></i>
            </a>
          </div>
          
          <div>
            <a href="https://www.linkedin.com/" target="_blank">
                <i className="fab fa-linkedin"></i>
            </a>
          </div>
         
          <div>
            <a href="https://twitter.com/" target="_blank">
                <i className="fab fa-twitter-square"></i>
            </a>
          </div>
          
          <div>
            <a href="https://www.instagram.com/" target="_blank">
                <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </footer>
        </section>
    </div>
  );
};

export default DropDownViewsForm;
