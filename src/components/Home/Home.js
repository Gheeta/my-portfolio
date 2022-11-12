import React,{useState} from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";
//import Resume from "./Mohamed_Gheeta_Resume .pdf"
import me from '../../icons/me.png'
import bg from"../../icons/bg2.png";

import facebook from "../../icons/facebook.png";
import github1 from "../../icons/github_2_.png";
import linkedin from "../../icons/linkedin.png";
import gmail2 from "../../icons/gmail2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

//import "../../script";

import "../../styles/partials/Home.scss";


const Home = () => {
  // const showAlert = () => {
  //   alert("I'm an alert");
  // };
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  let toggle1 = isActive ? "active1" : " ";
  let toggle2 = isActive ? "active2" : " ";
  let toggle3 = isActive ? "active3" : " ";

 

  return (
    <section className="home" id="home">
      <nav>
        <h2 className="logo">
          <a href="home">Mohamed <span>Gheeta</span></a>
        </h2>

        <input type="checkbox" id="click" />
        <label for="click" className=" hamburger " onClick={toggleClass}>
          <span className={toggle1}></span>
          <span className={toggle2}></span>
          <span className={toggle3}></span>
        </label>

        <ul >
          {/* id of ul */}
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#AboutMe">About Me</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#ContactMe">Contact Me</a>
          </li>
        </ul>
        <a href="#" className="btn">
          hire me
        </a>
      </nav>

      <div className="content">
        <div className="container_texts">
          <h4>Hello, my name is</h4>
          <h1>
            Mohamed <span>Gheeta</span>
          </h1>
          <h3>
            I'm a <span>Frontend</span> developer
          </h3>

          <a href="./Mohamed_Gheeta_Resume .pdf" download className="btn">
            Download CV
          </a>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/mohamed-gheeta-4733a1218"
              target="_blank"
            >
              <img src={linkedin} alt="" />
            </a>
            <a href="https://github.com/Gheeta" target="_blank">
              <img src={github1} alt="" />
            </a>
            <a href="https://myaccount.google.com/?hl=en" target="_blank">
              <img src={gmail2} alt="" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100005930148473"
              target="_blank"
            >
              <img src={facebook} alt="" />
            </a>
          </div>
        </div>

        <div className="container_image">
          <img src={me} alt=" " className="my-pic" />
          <img src={bg} alt=" " className="shape" />
        </div>
      </div>
    </section>
  );
  
}
{/*const Btn = styled.button`
  .bars {
    color: blue;
  }
  .bar_media{
    color:red;
    font-size: 20px;
  }
`;*/}

export default Home;

