import React from "react";
import { ResearchData } from "../data/ResearchPageData";
import { Link } from "react-router-dom";
import "./Research.css";

const Research = () => {
  return (
    <article className="research-container">
      <h1 className="research-title"> Interdisciplinary Research </h1>
      <section className="research-text">
        {
          ResearchData.map(element => {
            return(
              <section className="each-research-text">
                <div> <img src={element.image} alt="Book" /> </div>
                <h2> {element.heading} </h2>
                <p> {element.paragraph} </p>
                <ol> {
                  <>
                    <li> {element.articles.article1} </li>
                    <li> {element.articles.article2} </li>
                    <li> {element.articles.article3} </li>
                  </>
                } </ol>
              </section>
            )
          })
        }
      </section>
    </article>
  );
};

export default Research;
