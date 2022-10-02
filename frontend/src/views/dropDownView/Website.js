import React from "react";
import { Link } from "react-router-dom";
import "./Website.css";
import DropDownViewsForm from "./DropDownViewsForm";

const Website = () => {
  return (
    <article className="website-container">
      <h1 className="website-title"> Website Development </h1>

      <section className="join-website-development">
        <h2>
          <span> Web Design & Development </span> <br /> Course
        </h2>

        <p>
          LisaConsult provides an outstanding services for customers who are
          looking to be expert in <span>Web Design and Development</span>. If
          you are chasing your dream, come to LisaConsult to make your dream
          come true.
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

        <Link to="/registration-form" className="join-us-link">
          Join Us
        </Link>
      </section>

      <section>
        <DropDownViewsForm />
      </section>
    </article>
  );
};

export default Website;
