import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { IconContext } from "react-icons";
import {FaYoutubeSquare, FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaGithubSquare} from "react-icons/fa";


const Footer = () => {
  return (
   
    <div className="footer">
    {/*
      <IconContext.Provider value={{size:"5rem"}}>
          <section className="footer-social-media" target="_blank"> 

          <a href="https://www.facebook.com/" target="_blank"> 
              <FaFacebookSquare className="footer-icons"/>
          </a>
          
          <a href="https://www.youtube.com/"> 
              <FaYoutubeSquare className="footer-icons"/>
            </a>

            <a href="https://www.linkedin.com/" target="_blank">
              <FaLinkedin className="footer-icons"/>
            </a>

            <a href="https://twitter.com/" target="_blank">
              <FaTwitterSquare className="footer-icons"/>
            </a>

            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagramSquare className="footer-icons"/>
            </a>

            <a href="https://github.com/" target="_blank">
              <FaGithubSquare className="footer-icons"/>
            </a>
    
          </section>
        </IconContext.Provider>
      */}

      <div className="footer-navigation">
        <section className="footer-company-history">
          <h3> Sitemap </h3>
          <div>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/services">Services</Link> </li>
            <li> <Link to="/research">Research</Link> </li>
            <li> <Link to="/registration-form">Registration Form</Link> </li>
          </div>
        </section>

        <section className="footer-company-history">
          <h3> Company </h3>
          <div>
            <li> <Link to="/about"> Our Story </Link> </li>
            <li> <Link to="/about"> Our Team </Link> </li>
            <li> <Link to="/about"> Award </Link> </li>
            <li> <Link to="/about"> Clients </Link> </li>
          </div>
        </section>

        <section className="footer-company-history">
          <h3> Contact </h3>
          <div>
            <li>
                <a href="tel:+4917681005650">+4917681005650</a>
            </li>
            <li>  
                <a href="mailto:uelandrae@gmail.com">uelandrae@gmail.com</a> 
            </li>
            <li>
                <a href="#">Rabenstraße xyz, 25M01 Pinneberg</a>
            </li>
          </div>
        </section>

        <section className="footer-company-history">
          <h3> Social Media </h3>
          <div>
            <li>
              <FaFacebookSquare className="footer-icons"/> 
              <a href="https://www.facebook.com/" target="_blank"> Facebook </a> 
            </li>
            <li> 
              <FaYoutubeSquare className="footer-icons"/>
              <a href="https://www.youtube.com/" target="_blank"> Youtube</a> 
            </li>
            <li> 
              <FaLinkedin className="footer-icons"/>
              <a href="https://www.linkedin.com/" target="_blank"> Linkedin </a> 
            </li>
            <li> 
              <FaTwitterSquare className="footer-icons"/>
              <a href="https://twitter.com/" target="_blank"> Twitter </a> 
            </li>
            <li> 
              <FaInstagramSquare className="footer-icons"/>
              <a href="https://www.instagram.com/" target="_blank"> Instagram </a> 
            </li>
            <li>
              <FaGithubSquare className="footer-icons"/> 
              <a href="https://github.com/" target="_blank"> Github </a> 
            </li>
          </div>
        </section>
      </div>

      <section className="footer-copyright">
        <p className="copyright"> &copy; 2022 LisaConsult. All rights reserved! </p>
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Logo of LisaConsult" />
          </Link>
          <p> <Link to="/"> LisaConsult </Link> </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
