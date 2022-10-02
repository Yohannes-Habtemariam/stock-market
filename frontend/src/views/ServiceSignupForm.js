import React, { useState } from "react";

const SignupForm = (props) => {
  // State variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameValidation, setFirstNameValidation] = useState(false);
  const [lastNameValidation, setLastNameValidation] = useState(false);
  const [usernameValidation, setUsernameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState("")

  // Update the input data
  const updateSignupData = (event) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        setFirstNameValidation(true);
        break;
      case "lastName":
        setLastName(event.target.value);
        setLastNameValidation(true);
        break;
      case "username":
        setUsername(event.target.value);
        setUsernameValidation(true);
        break;
      case "email":
        setEmail(event.target.value);
        setEmailValidation(true);
        break;
      case "password":
        setPassword(event.target.value);
        setPasswordValidation(true);
        break;
      // case "confirmPassword":
      //   setConfirmPassword(event.target.value);
      //   setConfirmPasswordValidation(true);
      //   break;
      default:
        break;
    }
  };

  // Check password confirmation 
  const checkPasswordConfirmation = (event) => {
    setConfirmPassword(event.target.value);
    if(password !== confirmPassword) {
      setIsError("Passwords do not match!")
    } else{
      setIsError("");
    }
  }

  // submit register user data
  const submitRegisteredClientData = async (event) => {
    event.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
      password2: confirmPassword,
      email: email
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("https://full-stack-yohannes.herokuapp.com//signup", settings);
    const signupData = await response.json();

    try{
      if(response.ok){

        // As stated in the LoginForm, the tokens will expire after one hour. So, this is also required in the SigupForm when the client registers for the first time, the client will be logged in only for one hour.
        const now = new Date();
        const tokenExpiry = new Date(now.getTime() + 1000 * 60 * 60);
        localStorage.setItem("data", JSON.stringify({token: signupData.token, id: signupData.id, expiry: tokenExpiry.toISOString() }))
        
        // If the request was successful
        props.login(signupData.token, signupData.id)
        // props.setToken(signupData.token)
        // props.setLoggedInUserID(signupData.id)
        //props.setIsUserLoggedIn(true);
      }else{
        throw new Error(signupData.message)
      }
    }catch(err){
      alert(err.message)
    }
  };

  // if the user is already registered, go back to login form
  const goToLoginForm = () => {
    props.setShowLogInForm(true);
  };

  return (
    <section className="sign-form-container">
      <fieldset className="signUp-form">
        <legend> Create an Account </legend>
        <form className="signUp-form" onSubmit={submitRegisteredClientData}>
          <div>
            <label htmlFor="username"> Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={updateSignupData}
            />
          </div>

          <div>
            <label htmlFor="password"> Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={updateSignupData}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword"> Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={checkPasswordConfirmation}
            />
            <div> {isError} </div>
          </div>

          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={updateSignupData}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={updateSignupData}
            />
          </div>

          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={updateSignupData}
            />
          </div>
      
          <button> Register Account </button>
        </form>
        <button className="login-btn" onClick={goToLoginForm}>
          Already registered? Login to your account!
        </button>
      </fieldset>
    </section>
  );
};

export default SignupForm;
