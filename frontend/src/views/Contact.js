import React from 'react';
import { Link } from "react-router-dom";
import { FaIdBadge, FaStreetView, FaQuestion } from "react-icons/fa";
import ContactForm from "./ContactForm"
import "./Contact.css";


const Contact = () => {
  return (
    <div className="contact-page-container">
      <article className="contacts-container">
        <h1>We'd Love to Hear From You</h1>
        <div className="contact-details">
          <section className="contact-means">
            <FaIdBadge className="contact-detail-icons"/>
            <h3> Contact us </h3>
            <li> <a href="tel:004917581005650">004917581005650</a> </li>
            <li> <a href="emailto:uelandrae@gmail.com"> uelandrae@gmail.com </a> </li>
          </section>
          
          <section className="contact-means">
            <FaStreetView className="contact-detail-icons"/>
            <h3> Come See Us </h3>
            <li> <Link to="/"> Pinneberg, Germany </Link> </li>
            <li> <Link to="/"> Hamburg, Germany </Link> </li>
          </section>

          <section className="contact-means">
            <FaQuestion className="contact-detail-icons"/>
            <h3> 24/7 Support </h3>
            <li> <Link to="/"> Open a support case </Link> </li>
            <li> <Link to="/"> Call us now </Link> </li>
          </section>
        </div>
      </article>

      <ContactForm/>

     

    </div>
  );
}

export default Contact;