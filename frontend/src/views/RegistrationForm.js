import React, { useEffect, useRef, useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {

  const [firstName, setFirstName] = useState("");
  const [firstNameChanged, setFirstNameChanged] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameChanged, setLastNameChanged] = useState(false);

  const [birthDate, setBirthDate] = useState("");
  const [birthDateChanged, setBirthDateChanged] = useState(false);

  const [gender, setGender] = useState("default");
  const [genderChanged, setGenderChanged] = useState(false);

  const [email, setEmail] = useState("");
  const [ emailChanged, setEmailChanged ] = useState(false);

  const [mobile, setMobile] = useState("");
  const [mobileChanged, setMobileChanged] = useState(false)

  const [telephone, setTelephone] = useState("");
  const [telephoneChanged, setTelephoneChanged] = useState(false);

  const [countryOrigin, setCountryOrigin] = useState("");
  const [countryOriginChanged, setCountryOriginChanged] = useState(false);

  const [profession, setProfession] = useState("")
  const [professionChanged, setProfessionChanged] = useState(false)

  const [residenceCountry, setResidenceCountry] = useState("");
  const [residenceCountryChanged, setResidenceCountryChanged] = useState(false);

  const [language, setLanguage] = useState("");
  const [languageChanged, setLanguageChanged] = useState(
    {
      english: false, 
      tigrigna: false, 
      german: false, 
      amharic: false
    })
  const [course, setCourse] = useState()
  const [courseChanged, setCourseChanged] = useState({
      stocks: false,
      realEstate: false,
      cryptocurrency: false,
      Bonds: false,
      forex: false,
      leadership: false,
      website: false,
      eCommerce: false
  })
  const [message, setMessage] = useState("");
  const [messageChanged, setMessageChanged] = useState("");

  const [files, setFiles] = useState("");

  const [agree, setAgree] = useState(false);
  const [agreeChanged, setAgreeChanged] = useState(false)

  const firstNameError = useRef();
  const lastNameError = useRef();
  const genderError = useRef()
  const emailFormatError = useRef();
  const mobileError = useRef()
  const telephoneError = useRef()
  const countryOriginError = useRef()
  const residenceCountryError = useRef()
  const professionError = useRef()
  const languageError = useRef()
  const courseError = useRef()
  const messageLengthError = useRef();
  const agreeError = useRef()


  useEffect(()=> {
    console.log(agree)
    console.log(agreeChanged)
  })

  const updateData = (event) => {
    switch(event.target.name) {
      case "firstName": 
      setFirstName(event.target.value);
      setFirstNameChanged(true);
      break;
    case "lastName":
      setLastName(event.target.value);
      setLastNameChanged(true);
      break;
    case "gender":
      setGender(event.target.value)
      setGenderChanged(true)
      break;
    case "email":
      setEmail(event.target.value)
      setEmailChanged(true)
      break;
    case "mobile":
      setMobile(event.target.value);
      setMobileChanged(true)
      break;
    case "telephone":
      setTelephone(event.target.value)
      setTelephoneChanged(true)
      break;
    case "countryOrigin":
      setCountryOrigin(event.target.value)
      setCountryOriginChanged(true)
      break;
    case "residenceCountry":
        setResidenceCountry(event.target.value)
        setResidenceCountryChanged(true)
        break;
    case "profession":
        setProfession(event.target.value)
        setProfessionChanged(true)
        break;
    case "language":
      setLanguage(event.target.value)
      setLanguageChanged(true)
      break;
    case "course":
      setCourse(event.target.value)
      setCourseChanged(true)
      break;
    case "message":
      setMessage(event.target.value);
      setMessageChanged(true)
      break;
    case "agree":
      setAgree(!agree)
      setAgreeChanged(true)
      break;
    default:
      break;
    }
  };


  const checkEmailFormat = () => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        emailFormatError.current.className = "errorInvisible"
        //emailFormatError.current.style.display = "none"
    } else {
        emailFormatError.current.className = "errorVisible"
        //emailFormatError.current.style.display = "block"
    }
};

const messageSize = () => {
  if(message.length > 500) {
    messageLengthError.current.className = "errorInvisible"
  } else {
    messageLengthError.current.className = "errorVisible"
  }
}

const submitForm = event => {
  event.preventDefault();

  if (
    firstName.trim().length > 0
    && lastName.trim().length > 0
    && gender !== "default"
    && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
    && mobile.trim().length > 0
    && telephone.trim().length > 0
    && countryOrigin.trim().length > 0
    && residenceCountry.trim().length > 0
    && profession.trim().length > 0
    && message.trim().length > 0  
    ) {

      const userData = {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        gender: gender,
        email: email,
        mobile: mobile,
        telephone: telephone,
        countryOrigin: countryOrigin,
        residenceCountry: residenceCountry,
        profession: profession,
        language: language,
        course: course,
        message: message
      }
    
      const settings = {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/JSON"
        }
      }
    
      fetch("https://jsonplaceholder.typicode.com/users", settings)
      .then(response => response.json())
      .then(data => {
        console.log("The clients who want to take the course:", data)
      })

      setFirstName("")
      setFirstNameChanged(false)
      setLastName("")
      setLastNameChanged(false)
      setBirthDate("")
      setBirthDateChanged(false)
      setGender("")
      setGenderChanged("Enter your gender")
      setEmail("")
      setEmailChanged(false)
      setMobile("")
      setMobileChanged(false)
      setTelephone("")
      setTelephoneChanged(false)
      setCountryOrigin("")
      setCountryOriginChanged(false)
      setResidenceCountry("")
      setResidenceCountryChanged(false)
      setProfession("")
      setProfessionChanged(false)
      setLanguage("")
      setLanguageChanged(false)
      setCourse("")
      setCourseChanged(false)
      setMessage("")
      setMessageChanged(false)
      setAgree("")
      setAgreeChanged(false)
      

  } else {
    if(firstName.trim().length === 0){
      firstNameError.current.className = "errorVisible"
    }

    if(lastName.trim().length === 0){
      lastNameError.current.className = "errorVisible"
    }

    if(gender.trim().length === 0) {
      genderError.current.className = "errorVisible"
    }

    if(mobile.trim().length === 0) {
      mobileError.current.className = "errorVisible"
    }

    if(telephone.trim().length === 0) {
      telephoneError.current.className = "errorVisible"
    }

    if(countryOrigin.trim().length === 0) {
      countryOriginError.current.className = "errorVisible"
    }

    if(residenceCountry.trim().length === 0) {
      residenceCountryError.current.className = "errorVisible"
    }

    if(profession.trim().length === 0) {
      professionError.current.className = "errorVisible"
    }

    if(agreeChanged === false) { 
      agreeError.current.className = "errorVisible"
      setAgreeChanged(true)
    }
  }
}

const checkboxLanguage = () => {
  setLanguageChanged(prevLanguage => !prevLanguage)
  console.log(languageChanged)
}

const validateCheckboxLanguage = () => {
  if(languageChanged.english === true || languageChanged.tigrigna === true || languageChanged.german === true || languageChanged.amharic === true) {
    languageError.current.className = "errorInvisible"
  } else {
    languageError.current.className = "errorVisible"
  }
}

const checkboxCourse = () => {
  setCourseChanged(prevCourse => !prevCourse)
  console.log(languageChanged)
}
const validateCheckboxCourse = () => {
  if(courseChanged.stocks === true || courseChanged.realEstate === true || courseChanged.cryptocurrency === true || courseChanged.Bonds === true || courseChanged.forex === true || courseChanged.leadership === true ||  courseChanged.website === true ||  courseChanged.eCommerce === true) {
    languageError.current.className = "errorInvisible"
  } else {
    languageError.current.className = "errorVisible"
  }
}

const checkboxAgree = (prevAgree) => {
  setAgreeChanged(prevAgree => !prevAgree)
}

// const validateCheckboxAgree = () => {
//   if(agreeChanged === true) {
//     agreeError.current.className = "errorInvisible"
//   } else {
//     agreeError.current.className = "errorVisible"
//   }
// }

  return (
    <div className="registration-form-container">
      <h1>Welcome to LisaConsult</h1>
      <p>
        Fill out the form below to realize your dream of becoming richer,
        happier and healthier. Everything is within you, however, we need to
        understand the techniques to take advantage of our untapped potential.
      </p>

      <fieldset className="registration-form">
        <legend>Registration Form</legend>
        <form onSubmit={submitForm} className="form">
          <section className="biodata">
            <label htmlFor="firstName"> First Name</label>
            <input type="text" id="firstName" name="firstName" onChange={updateData} value={firstName} placeholder="Enter first name" />
            <div className={firstNameChanged && firstName.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={firstNameError}> Please enter your first name! </div>

            <label htmlFor="lastName"> Last Name </label>
            <input type="text" id="lastName" name="lastName" onChange={updateData} value={lastName}  placeholder="Enter last name"/>
            <div className={lastNameChanged && lastName.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={lastNameError}> Please enter your last name! </div>

            <label htmlFor="birthDate"> Birth Date </label>
            <input type="date" id="birthDate" name="birthDate" />

            <label htmlFor="gender"> Gender </label>
            <select name="gender" id="gender" onChange={updateData} value={gender}>
              <option value="default">Please select your gender</option>
              <option value="female"> Female </option>
              <option value="male"> Male </option>
              <option value="other"> Other </option>
            </select>
            <div className={genderChanged && gender.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={genderError} > Please specify your gender! </div>

            <label htmlFor="email"> Email </label>
            <input type="email" name="email" id="email" onChange={updateData} onBlur={checkEmailFormat} value={email} placeholder="Enter email" />
            <div className={emailChanged && email.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={emailFormatError} > Please enter your email! </div>
            <div className="errorInvisible" ref={emailFormatError}> Incorrect email format! </div>
          </section>

          <section className="telephone">
            <label htmlFor="mobile"> Mobile </label>
            <input type="tel" id="mobile" name="mobile" placeholder="(country code) (Mobile)" onChange={updateData} value={mobile} />
            <div className={mobileChanged && mobile.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={mobileError} > Please enter your mobile number! </div>

            <label htmlFor="telephone"> Telephone </label>
            <input type="tel" name="telephone" id="telephone" placeholder="(country code) (Landline)" onChange={updateData} value={telephone}/>
            <div className={telephoneChanged && telephone.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={telephoneError} > Please enter your telephone number! </div>

            <section className="country">
              <label htmlFor="country"> Country of origin </label>
              <input type="text" id="country" name="countryOrigin" onChange={updateData} value={countryOrigin} placeholder="Enter country of origin" />
              <div className={countryOriginChanged && countryOrigin.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={countryOriginError} >Please your country of origin!</div>

              <label htmlFor="county"> Country of residence </label>
              <input type="text" id="country" name="residenceCountry" onChange={updateData} value={residenceCountry} placeholder="Enter country of residence" />
              <div className={residenceCountryChanged && residenceCountry.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={residenceCountryError} > Please your country of residence! </div>

              <label htmlFor="profession"> Profession </label>
              <input type="text" id="profession" name="profession
              " onChange={updateData} value={profession} placeholder="Enter your profession"/>
              <div className={professionChanged && profession.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={professionError} >Please enter your country of residence</div>
            </section>
          </section>

          <section className="language">
            <p> Specify the language that you can speak </p>
            <input type="checkbox" id="language" name="language" onChange={checkboxLanguage} checked={languageChanged.english}/>
            <label htmlFor="language"> English </label> <br/>

            <input type="checkbox" id="language" name="language" onChange={checkboxLanguage} checked={languageChanged.tigrigna} />
            <label htmlFor="language"> Tigrigna </label> <br/>

            <input type="checkbox" id="language" name="language" onChange={checkboxLanguage} checked={languageChanged.german}/>
            <label htmlFor="language"> German </label> <br/>

            <input type="checkbox" id="language" name="language" onChange={checkboxLanguage} checked={languageChanged.amharic}/>
            <label htmlFor="language"> Amharic </label> <br/>

            <div className={languageChanged ? "errorVisible" : "errorInvisible"} onChange={validateCheckboxLanguage}> Please select at least one of the languages </div>
            <section className="courses">
              <p>Choose the subjects that you want to learn</p>
              <input type="checkbox" id="course" name="course" onChange={checkboxCourse} checked={courseChanged.stocks} />
              <label htmlFor="course"> Stocks/Equities</label> <br/>
              <input type="checkbox" id="course" name="course" onChange={checkboxCourse} checked={courseChanged.realEstate} />
              <label htmlFor="course"> Real Estate</label> <br/>
              <input type="checkbox" id="course" name="course" onChange={checkboxCourse} checked={courseChanged.cryptocurrency} />
              <label htmlFor="course"> Cryptocurrency</label> <br/>
              <input type="checkbox" id="course" name="course" onChange={checkboxCourse} checked={courseChanged.Bonds} />
              <label htmlFor="course"> Bonds & CODs</label> <br/>
              <input type="checkbox" id="course" name="course" onChange={checkboxCourse} checked={courseChanged.forex} />
              <label htmlFor="course"> FOREX </label> <br/>
              <input type="checkbox" id="course" name="course" onChange={checkboxCourse} checked={courseChanged.leadership} />
              <label htmlFor="course"> Leadership </label> <br/>
              <input type="checkbox" id="course" name="course" onChange={checkboxCourse} checked={courseChanged.website} />
              <label htmlFor="course"> Web Development </label> <br/>
              <input type="checkbox" id="course" name="course" onChange={checkboxCourse} checked={courseChanged.eCommerce} />
              <label htmlFor="course"> E-Commerce </label> <br/>
              <div className={courseChanged ? "errorVisible" : "errorInvisible"} onChange={validateCheckboxCourse}> Please select at least one of the courses </div>
            </section>
          </section>

          <section className="messages">
            <label htmlFor="motivation"> Provide a motivation letter below </label>
            <textarea id="motivation" name="message" cols="30" rows="20" onChange={updateData} onBlur={messageSize} value={message} placeholder="Please write your motivation" />
            
            <div className={messageChanged && message.trim().length === 0 ? "errorVisible" : "errorInvisible"} ref={messageLengthError} >Please write your motivation letter!</div>
            
            {message.length === 0 ? "" : <div className="errorVisible" ref={messageLengthError} > {500 - message.trim().length > 0 ? `${500 - message.trim().length} characters needed` : ""}</div>}
          </section>

          <section className="attach-files">
            <label htmlFor="files"> Please attach your documents </label>
            <input type="file" id="files" name="files" multiple/>

            <section className="reset">
             <p> <button> Reset </button> Click here if you want to make changes.</p>           
            </section>
          </section>

          <section className="agree">
            <input type="checkbox" id="agree"  name="agree" onChange={updateData} checked={checkboxAgree.agree} />
            <label htmlFor="agree"> I agreed with all the requirements specified in this form. </label>
            {/* <!agree is the same as (agree === false)*/}
            <div className={agree === false && agreeChanged ? "errorVisible" : "errorInvisible"} ref={agreeError} >Confirm your agreement</div>

            <section className="submit">
              <button> Submit </button>
            </section>

          </section>
        </form>
      </fieldset>
    </div>
  );
};

export default RegistrationForm;
