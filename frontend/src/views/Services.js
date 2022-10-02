import React, { useEffect, useState } from "react";
import investors from "../images/investors.jpg";
import ClientLogout from "../components/ClientLogout";
import DeregisterClient from "../components/DeregisterClient";
import Leadership from "./service/Leadership";
import WebDevelopment from "./service/WebDevelopment";
import Investment from "./service/Investment";
import OnlineMarketing from "./service/OnlineMarketing";
import ClientDataController from "../components/ClientDataController";
import { Link } from "react-router-dom";

const Services = (props) => {
  // state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Select Option state variables
  const [service, setService] = useState("Select Course");
  const [investmentCourse, setInvestmentCourse] = useState(false);
  const [webDevelopmentCourse, setWebDevelopmentCourse] = useState(false);
  const [onlineMarketingCourse, setOnlineMarketingCourse] = useState(false);
  const [leadershipCourse, setLeadershipCourse] = useState(false);

  useEffect(() => {
    service === "investment" ? setInvestmentCourse(true) : setInvestmentCourse(false);
    service === "webDevelopment" ? setWebDevelopmentCourse(true) : setWebDevelopmentCourse(false);
    service === "e-commerce" ? setOnlineMarketingCourse(true) : setOnlineMarketingCourse(false);
    service === "leadership" ? setLeadershipCourse(true) : setLeadershipCourse(false);
  })

  const onChangeHandling = (event) => {
      setService(event.target.value)
  };

  const makeFirstLetterCapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const renderResult = () => {
    let result;
    service === "default" 
      ? (result = "Select Course") 
      : (result = makeFirstLetterCapital(service))
      return result;
  }

  // useEffect(() => {
  //       console.log("Token from App.js state", props.token);
  //   }, [])

  useEffect( () => {
    const fetchClientData = async () => {

      console.log("User Id;", props.loggedInUserID)

      const settings = {
        headers: {
          "Authorization": "Bearer " + props.token
        }
      }
      
      const response = await fetch(`https://full-stack-yohannes.herokuapp.com/clients/${props.loggedInUserID}`, settings);

      const clientData = await response.json();

      try{
        if(response.ok){
          setFirstName(clientData.firstName);
          setLastName(clientData.lastName);
          setComments(clientData.comments);
          setIsAdmin(clientData.isAdmin);
        } else{
          throw new Error(clientData.message)
        }
      }catch(err){
        alert(err.message)
      }

    }

    fetchClientData();
  }, [props.loggedInUserID]);

  // update client's comments
  const updateClientComment = event => {
    switch(event.target.name) {
      case "comment":
        setComment(event.target.value);
        break;
      default:
        break;
    }
  };

  // Submit clients' comments
  const submitClientComments = async event => {
    event.preventDefault();

    const newComment = {
      comment: comment
    }

    const settings = {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + props.token
      }
    }

    const response = await fetch(`https://full-stack-yohannes.herokuapp.com/clients/${props.loggedInUserID}/comments`, settings);

    const clientCommentData = await response.json();

    try{
      if(response.ok){
        setComments(clientCommentData.comments);
        setComment("");
      } else {
        throw new Error(clientCommentData.message)
      }
    }catch(err){
      alert(err.message)
    }
  };

  // Delete all client based comments 
  const deleteAllClientComments = async () => {

    const settings = {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + props.token
      }
    }

    const response = await fetch(`https://full-stack-yohannes.herokuapp.com/clients/${props.loggedInUserID}/comments`, settings);

    const deleteData = await response.json();

    try{
      if(response.ok){
        setComments(deleteData.deletedComments);
      } else {
        throw new Error(deleteData.message);
      }
    }catch(err){
      alert(err.message);
    }
  };

  // deleting a single comment 
  const deleteSingleComment = async (event) => {

    const commentId = event.target.parentElement.id;

    const settings = {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + props.token
      }
    }

    const response = await fetch(`https://full-stack-yohannes.herokuapp.com/clients/${props.loggedInUserID}/comments/${commentId}`, settings);

    const deleteData = await response.json();

    try{
      if(response.ok){
        console.log("The id is:", deleteData.comment)
        setComments(deleteData.comment)
      }
    }catch(err){
      alert(err.message)
    }
  }

  return (
    <section className="service-page-container">

      <div className="logout-deregister">
      
        {isAdmin && <ClientDataController loggedInUserID={props.loggedInUserID} token={props.token} />}

        <DeregisterClient deregisterClient={props.deregisterClient} />
        
        <ClientLogout clientLogout={props.clientLogout}/>
      </div>
      
      <h1 className="service-title"> Services for Everyone </h1>
      <h2 className="welcome-title">Welcome {firstName} {lastName} to LisaConsult to realize your dream </h2>
      <p className="service-paragraph">
        We offer services to help you unlock your untapped potential and become
        the person you want to be to achieve your dream.
      </p>

      <div className="service-unordered-list">
        <ul>
          <li>Live classes</li>
          <li>Learn in small groups or 1:1</li>
          <li>Free 3-day trial</li>
        </ul>
      </div>

      <section className="service-select">
        <h2> Select Service to learn {renderResult} </h2>

        <div className="service-page-service-form">
          <select name="service" value={service} onChange={onChangeHandling} className="service-page-select-specific-service">
            <option value="default"> Select Course</option>
            <option value="investment"> <Link to="investment" target="_blank">Investment</Link> </option>
            <option value="webDevelopment"> Web-Development </option>
            <option value="e-commerce"> Online-Marketing </option>
            <option value="leadership"> Leadership </option>
          </select>
          <button className="service-page-service-btn"> Get started </button>
        </div>

        <div className="service-image">
          <img src={investors} alt="Investor photo" />
        </div>

        <div>
            {investmentCourse && <Investment />}
            {webDevelopmentCourse && <WebDevelopment/>}
            {onlineMarketingCourse && <OnlineMarketing />}
            {leadershipCourse && <Leadership/>}
      </div>

        <form action="" className="comment-textarea-container">
            <textarea name="comment" id="comment" cols="45" rows="10" onChange={updateClientComment} value={comment}/>
          </form>

          <div>
            <button onClick={submitClientComments} className="service-comment-submit-btn">Send Comment</button>

            <button onClick={deleteAllClientComments} className="service-comment-delete-btn">Delete Comments</button>
          </div>

        <section className="constructive-comments">
          <h2> Clients' Constructive Comments</h2>
          <ul>
            {
              comments.map(el => {
                return(
                  <li key={el._id} className="comment-container"> 
                    {el.comment} 
                    <p className="close-comment" id={el._id}>
                      <span onClick={deleteSingleComment}> x </span>
                    </p>
                  </li>
                )
              })
            }
          </ul>        
        </section>


      </section>
    </section>
  );
};

export default Services;
