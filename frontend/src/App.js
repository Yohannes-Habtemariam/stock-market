import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./views/About";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Research from "./views/Research";
import ServicePage from "./views/ServicePage";
import Investment from "./views/dropDownView/Investment";
import RegistrationForm from "./views/RegistrationForm";
import Website from "./views/dropDownView/Website";
import OnlineMarketing from "./views/dropDownView/OnlineMarketing";
import Leadership from "./views/dropDownView/Leadership";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
        <Navigation/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<ServicePage/>} />
            <Route path="/research" element={<Research/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/registration-form" element={<RegistrationForm/>} />
            <Route path="investment" element={<Investment/>} />
            <Route path="/website" element={<Website/>}  />
            <Route path="/online-marketing" element={<OnlineMarketing/>} />
            <Route path="/leadership" element={<Leadership/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </Router>
    </div>
  );
}

export default App;
