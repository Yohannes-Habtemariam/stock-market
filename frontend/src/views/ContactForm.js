import React, { useState, useEffect, useRef } from 'react';
import "./ContactForm.css";

const ContactForm = () => {
    // Use state variables
    //const [userId, setUserId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [firstNameValidation, setFirstNameValidation] = useState(false);
    const [lastName, setLastName] = useState("");
    const [lastNameValidation, setLastNameValidation] = useState(false);
    const [telephone, setTelephone] = useState("");
    const [telephoneValidation, setTelephoneValidation] = useState(false);
    const [email, setEmail] = useState("");
    const [emailValidation, setEmailValidation] = useState(false);
    const [textarea, setTextarea] = useState("");
    const [textareaValidation, setTextareaValidation] = useState(false);
    const [comments, setComments] = useState([]);

    //Keep the client comments always visible in the frontend 
    useEffect(() => {
      const fetchComments = async () => {
        const response = await fetch("https://full-stack-yohannes.herokuapp.com/comments")
        const commentData = await response.json();

        try{
          if(response.ok) {
            setComments(commentData.comments)
            
          } else {
            throw new Error(commentData.message)
          }
        }catch(err){
          alert(commentData.message)
        }
      };
      fetchComments();
    },[]);

    // Use ref variables
    const emailFormatError = useRef();
    const messageLengthError = useRef();


    // validate the email format
    const checkEmailFormat = () => {
    if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      emailFormatError.current.className = "errorInvisible"
    } else {
      emailFormatError.current.className = "errorVisible"
    }
  }

    // Update input data for the client
    const updateInputData = event => {
        switch(event.target.name){
            case "firstName":
                setFirstName(event.target.value);
                setFirstNameValidation(true);
                break;
            case "lastName":
                setLastName(event.target.value);
                setLastNameValidation(true);
                break;
            case "telephone": 
                setTelephone(event.target.value);
                setTelephoneValidation(true);
                break;
            case "email":
                setEmail(event.target.value);
                setEmailValidation(true);
                break;
            case "textarea": 
                setTextarea(event.target.value);
                setTextareaValidation(true);
                break;
            default:
                break;
        }
    };

    // submit client comments
    const submitClientComment = async (event) => {
        event.preventDefault();

        const newComment = {
          firstName: firstName,
          lastName: lastName,
          telephone: telephone,
          email: email,
          textarea: textarea
        };
        //setClientComments([...clientComments, newComment])

       const settings = {
         method: "POST",
         body: JSON.stringify(newComment),
         headers: {
           "Content-Type": "application/json"
         }
       };

       const response = await fetch(`http://localhost:5000/comments`, settings);
       const commentData = await response.json();

       try{
         if(response.ok) {
            setComments([...comments, commentData.comment]);
            setFirstName("");
            setLastName("");
            setTelephone("");
            setEmail("");
            setTextarea("");
            setFirstNameValidation(false);
            setLastNameValidation(false);
            setTelephoneValidation(false);
            setEmailValidation(false);
            setTextareaValidation(false);
         } else {
           throw new Error(commentData.message);
         }
       }catch(err) {
         alert(err.message)
       }
    }

    // Delete single comment
    const deleteSingleComment = async (event) => {

      const commentId = event.target.parentElement.id;

      const settings = {
        method: "DELETE"
      };

      const response = await fetch(`http://localhost:5000/comments/${commentId}`, settings);

      const commentData = await response.json();

      try{
         if(response.ok) {
         
            setComments(commentData.comments);
            
         } else {
           throw new Error(commentData.message);
         }
       }catch(err) {
         alert(err.message)
       }
    }

  return (
    <div className='contact-form-container'>
    <h2> Write us how we can serve you </h2>
    <p> Fill out the form below and we will get back to you shortly. </p>
    <form className='contact-form'>
       <div className='contact-form-input-container'>
        <div>
          <input type="text" name="firstName" value={firstName} onChange={updateInputData} placeholder='First Name'/>
          <div className={firstNameValidation && firstName.trim().length === 0 ? "errorVisible" : "errorInvisible" }> Please enter your first name</div>
        </div>

        <div>
          <input type="text" name='lastName' value={lastName} onChange={updateInputData} placeholder='Last Name' />
          <div className={lastNameValidation && lastName.trim().length === 0 ? "errorVisible" : "errorInvisible" }> Please enter your last name</div>
        </div>

        <div>
          <input type="tel" name='telephone' value={telephone} onChange={updateInputData} placeholder='Telephone' />
          <div className={telephoneValidation && telephone.trim().length === 0 ? "errorVisible" : "errorInvisible" }> Please enter your telephone number</div>
        </div>

        <div>
          <input type="email" name="email" value={email} onChange={updateInputData} onBlur={checkEmailFormat} placeholder='Email' />
          <div className={emailValidation && email.trim().length === 0 ? "errorVisible" : "errorInvisible" }> Please enter your email</div>
          <div className='errorInvisible' ref={emailFormatError}> Incorrect email format! </div>
        </div>
       </div>

      <div className='contact-form-textarea-container'>
        <textarea name="textarea" cols="30" rows="10" value={textarea} onChange={updateInputData} placeholder='Write us message here'></textarea>
        <div className={textareaValidation && textarea.trim().length === 0 ? "errorVisible" : "errorInvisible" } ref={messageLengthError}> Please enter your message</div>

        {textarea.length === 0 ? "" : <div className="errorVisible" ref={messageLengthError} > {100 - textarea.trim().length > 0 ? `${100 - textarea.trim().length} characters needed` : ""}</div>}
       </div>
    </form>

    <button onClick={submitClientComment} className='contact-submit-btn'> Submit </button>
    
    <section className='client-comment-container'>
    <h2>List of Clients' Comments</h2>
    <section className='client-comment-section-title'>
      <h3 className='comment-title'> Comments </h3>
      <h3> Full Name </h3>
      <h3> Telephone Number</h3>
      <h3> Email Address</h3>
    </section>
   
    <ul>
    <hr />
   {comments.map(comment => {
     
     return(
      <li onClick={deleteSingleComment} className='comment' key={comment.id}>

        <div className='client-comment-section'>

          <section className='comment-textarea'>
            <p>{comment.textarea}</p>
          </section>

          <section className='full-name'>
            <p> {comment.lastName} </p>
          </section>

          <section className='telephone'>
            <p> {comment.telephone} </p>
          </section>

          <section className='emailAddress'>
            <p> {comment.email} </p>
          </section>

          <div id={comment._id} className='span-section'>
            <span>X</span>
          </div>
        
        </div>
        
      </li>
     )
   })}
    </ul>
    </section>
</div>
  )
}

export default ContactForm;