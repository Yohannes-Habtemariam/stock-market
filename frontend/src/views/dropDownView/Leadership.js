import React from "react";
import { Link } from "react-router-dom";
import DropDownViewsForm from "./DropDownViewsForm";
import "./Leadership.css";

const Leadership = () => {
  return (
    <article className="leadership-container">
      <h1 className="leadership-title">  Modern Leadership </h1>

      <section className="join-leadership">
        <h2>
          <span> Contemporary Leadership </span> <br /> Course
        </h2>

        <p>
          LisaConsult provides an outstanding services for customers who are
          looking to be expert in <span>Contemporary Leadership</span>. If
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

export default Leadership;
