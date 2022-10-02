import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bitcoin from "../images/bitcoin.png";
import ethereum from "../images/ethereum.png";
import realEstate from "../images/realEstate.jpg";
import forex from "../images/FOREX.jpg";
import stockAndBonds from "../images/stocks-vs-bonds.jpg"
import { fundamentalAnalyses, technicalAnalysis } from "../data/HomePageData";

const Home = () => {
  return (
    <div className="home-page-container">
      <section className="home-page-introductory-section">
        <h1 className="home-page-title">Investment Securities</h1>
        <p className="home-first-paragraph">
          Instead of you working to make money, make your money work for you.
          Hence, if you want to make money and get richer , invest your money in
          <span> cryptocurrencies</span>, <span>stocks</span>,
          <span> real estate</span>, <span>bonds</span>, and
          <span> other securities </span>. Perhaps you may need
          <span className="span-tech"> technical advice</span> on
          <span className="span"> where</span>, <span className="span"> how </span>
          and <span className="span">when</span> to invest. LisaConsult is here
          for you to make your dream come true. Just click the
          <Link to="/registration-form"> Registration Form</Link> to register faster for
          the course and you will enjoy an amazing life for the rest of your
          life.
        </p>

        <figure className="homepage-title-images">

          <div className="home-page-title-first-five-images">
            <a href="https://www.youtube.com/watch?v=jxLkbJozKbY&t=2s" target="_blank">
              <img className="ethereum" src={ethereum} alt="Old-Coin" />
            </a>
          </div>

          <div className="home-page-title-first-five-images">
            <a href="https://www.youtube.com/watch?v=bBC-nXj3Ng4&t=3s" target="_blank">
              <img className="bitcoin" src={bitcoin} alt="Bitcoin" />
            </a>
          </div>

          <div className="home-page-title-first-five-images">
            <a href="https://www.youtube.com/watch?v=D69VhdRNok0" target="_blank">
              <img className="real-estate" src={realEstate} alt="Real Estate" />
            </a>
          </div>

          <div className="home-page-title-first-five-images">
            <a href="https://www.experian.com/blogs/ask-experian/stocks-vs-bonds/" target="_blank">
              <img className="stacks-bonds" src={stockAndBonds} alt="Stocks and Bonds" />
            </a>
          </div>

          <div className="home-page-title-first-five-images">
          <a href="https://www.investopedia.com/articles/forex/11/why-trade-forex.asp" target="_blank">
            <img className="forex" src={forex} alt="FOREX" />
          </a>
        </div>
          
        </figure>
      </section>

      <section className="technical-analysis">
        <h2 className="headings"> Technical Analysis </h2>
        <div className="technical-analysis-blogs">
          {technicalAnalysis.map((content) => {
            return (
              <section className="blogs">
                <div> <img src={content.image} alt="book" /> </div>
                <h3> {content.heading} </h3>
                <p> {content.paragraph} </p>
                <span> {content.readMore} </span>
              </section>
            );
          })}
        </div>
      </section>

      <section className="fundamental-analysis">
        <h2> Fundamental Analysis </h2>
        <div className="fundamental-analysis-blogs">
          {fundamentalAnalyses.map((content) => {
            return (
              <section className="blogs">
                <div>
                  <img src={content.image} alt="book" />
                </div>
                <h3> {content.heading} </h3>
                <p> 
                  {content.paragraph} 
                  <span> {content.readMore} </span> 
                </p>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
