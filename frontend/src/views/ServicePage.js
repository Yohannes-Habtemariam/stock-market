import React, { useState, useEffect } from "react";
import LoginForm from "./ServiceLoginForm.js";
import Services from "./Services.js";
import SignupForm from "./ServiceSignupForm";
import "./ServicePage.css";

const ServicePage = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [showLogInForm, setShowLogInForm] = useState(true);
  const [loggedInUserID, setLoggedInUserID] = useState("");
  const [token, setToken] = useState(false);

  
  useEffect(() => {

    // when App.js first renders, try to find an item in local storage with the key "data"
    const data = JSON.parse(localStorage.getItem("data"));

    // If you found an item with the key "data", log the user in again instead of rendering the "Login" view
    if(data && data.token && data.id && data.expiry){

      // check whether "now" is earlier that or later than to the "expiry" key of "data". If "now" is earlier than the "expiry", the client will be logged in. However, if "now" is later than the expiry, the user will logout.
      const tokenExpiry = new Date(data.expiry);
      const now = new Date();

      if(tokenExpiry > now){ // if token is not expired, stay login
        login(data.token, data.id);
      } else { // if token expires, logout
        clientLogout();
      } 
    } else {
      clientLogout();
    }
    
  }, []);


  // to login to an account
  const login = (token, id) => {
    setToken(token);
    setLoggedInUserID(id);
    setIsUserLoggedIn(true);
  }

  // Client logout 
  const clientLogout = () => {
    localStorage.removeItem("data");
    setToken(false);
    setIsUserLoggedIn(false);
    setShowLogInForm(true);
    setLoggedInUserID("");
  };

  // Deregister a client 
  const deregisterClient = async () => {

    const settings = {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + token
      }
    }

    const response = await fetch(`http://localhost:5000/clients/${loggedInUserID}`, settings);

    const clientAccountData = await response.json();
    
    try{
      if(response.ok) {
        alert(clientAccountData.message);
        setIsUserLoggedIn(false);
        setShowLogInForm(true);
        setLoggedInUserID("");
      } else{
        throw new Error(clientAccountData.message)
      }
    }catch(err){
      alert(err.message)
    }

  }

  //JSX

  if (!isUserLoggedIn) {
    if (showLogInForm) {
      return (
        <LoginForm
          // setIsUserLoggedIn={setIsUserLoggedIn}
          // setLoggedInUserID={setLoggedInUserID}
          // setToken={setToken}
          setShowLogInForm={setShowLogInForm}
          login={login}
        />
      );
    } else {
      return (
        <SignupForm
          // setIsUserLoggedIn={setIsUserLoggedIn}
          // setLoggedInUserID={setLoggedInUserID}
          // setToken={setToken}
          setShowLogInForm={setShowLogInForm}
          login={login}
        />
      );
    }
  } else {
    return <Services 
      loggedInUserID={loggedInUserID} 
      token={token}
      clientLogout={clientLogout} 
      deregisterClient={deregisterClient}
    />;
  }
};

export default ServicePage;
