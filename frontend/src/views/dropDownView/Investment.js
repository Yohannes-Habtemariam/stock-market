import React from "react";
import { Link } from "react-router-dom";
import DropDownViewsForm from "./DropDownViewsForm";
import "./Investment.css"


const Investment = () => {
  return (
    <div className="investment-container">
      <h1 className="investment-title">Investment Options</h1>

      <section className="join-security-investment">
      
        <h2>
          <span>Security Investment</span> <br /> Course
        </h2>
        <p>
          LisaConsult provides an outstanding services for customers who are
          looking to invest in <span>Cryptocurrency</span>, <span>Equities</span>, <span>Real estate </span>and <span>bonds</span>. If you are chasing your dream, come to LisaConsult to make your dream come true.
        </p>
        <p>
          In case of any inconvenience, LisaConsult will refund your money. The
          only mission of LisaConsult is to serve you to make your dream come
          true.
        </p>
        <p>
          Click "Join us" below to fill out the form and enjoy the course of
          your dreams to unlock your untapped potential.
        </p>

        <Link to="/registration-form" className="join-us-link"> Join Us </Link>
  
      </section>

      <section>
        <DropDownViewsForm/>
      </section>
    </div>
  );
};

export default Investment;
