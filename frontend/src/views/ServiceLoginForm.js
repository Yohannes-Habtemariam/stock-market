import React, { useState } from "react";

const LoginForm = (props) => {
  // State variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameValidation, setUsernameValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);

  // update input values
  const updateLoginData = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        setUsernameValidation(true);
        break;
      case "password":
        setPassword(event.target.value);
        setPasswordValidation(true);
        break;
      default:
        break;
    }
  };

  // submit login data
  const submitLoginData = async (event) => {
    event.preventDefault();

    const newUser = {
      username: username,
      password: password,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // In the "LoginForm.js", you send a request to the "login" in  backend. If the username and password are verified and remain correct in the backend, a "JWT" is generated. Then, the backend send the JWT back to the frontend. In the frontend, the JWT is stored the "token" in the token state variable. Hence, when the client logged in, the client can see the services (Services.js) provided by LisaConsult.
    const response = await fetch("https://full-stack-yohannes.herokuapp.com//login", settings);
    const loginData = await response.json();
    try{
        if(response.ok) {

          const now = new Date();
          const tokenExpiry = new Date(now.getTime() + 1000 * 60 *60) // 1000ms * 60s * 60m = 1hr

          // Before logging the user in, add an item to local storage (key = "data")
          localStorage.setItem("data", JSON.stringify({ token: loginData.token, id: loginData.id, expiry: tokenExpiry.toISOString() }));

          // If the request was unsuccessful
          props.login(loginData.token, loginData.id);
          // props.setToken(loginData.token);
          // props.setLoggedInUserID(loginData.id);
          //props.setIsUserLoggedIn(true);
  
        } else {
            throw new Error(loginData.message)
        }
    }catch(err){
      alert(err.message)
      setUsername("");
      setPassword("");
    }
  };

  // If a user did not create an account before, create a function that allow the user to register to create an account firs
  const goToSingupForm = () => {
    props.setShowLogInForm(false)
  }

  return (
    <section className="form-footer-service-container">
    <fieldset className="login-service-form">
      <legend> Login Here </legend>
      <form onSubmit={submitLoginData}>
        <input
          type="username"
          name="username"
          value={username}
          onChange={updateLoginData}
          placeholder="Enter Email Here"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={updateLoginData}
          placeholder="Enter Password Here"
        />

        <button> Login </button>
        <p>
          If you don't have an account, you can click below to login with, and then you will be free and confident to serve your customers demand!
        </p>
        
      </form>
      <button onClick={goToSingupForm}>Sign Up</button>
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
);
};

export default LoginForm;
