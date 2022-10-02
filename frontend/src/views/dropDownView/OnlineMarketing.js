import React from "react";
import { Link } from "react-router-dom";
import DropDownViewsForm from "./DropDownViewsForm";
import "./OnlineMarketing.css"

const OnlineMarketing = () => {
  return (
    <article className="online-marketing-container">
      <h1 className="online-marketing-title"> Online Marketing </h1>

      <section className="join-online-marketing">
        <h2>
          <span> Online Marketing </span> <br /> Course
        </h2>

        <p>
          LisaConsult provides an outstanding services for customers who are
          looking to be expert in <span> Search Engine Marketing (SEM)</span>, <span>Search Engine Optimization (SEO)</span>, <span> Google Adwords</span>, <span> Web Analytics</span>, <span>Content Marketing</span>, and <span>Social Media Marketing (SMM) </span>. If you are chasing your
          dream, come to LisaConsult to make your dream come true.
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

export default OnlineMarketing;
