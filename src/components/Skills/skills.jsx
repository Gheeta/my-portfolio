import React from 'react';

import programming2 from "../../icons/Programming2.png";
import scss from "../../icons/scss_.png";
//import scss from "../../icons/scss_.png";
import css from "../../icons/css.png";
import html from "../../icons/html_.png";
import js from "../../icons/js.png";
import node from "../../icons/nodejs_.png";
import react from "../../icons/react_.png";
//import bootstrap from "../../icons/bootstrap.png";


import "./skills.scss";
import Email from "../Email/Email.js"

const skills = () => {
  return (
    <section>
      <div className="skills" id="Skills">
        <div className="skills_left">
          <h1>
            My <span> Skills</span>
          </h1>

          <div className="all_img dotline_circle">
            <div className="div_img">
              <img src={node} alt="" />
            </div>
            <div className="div_img">
              <img src={css} alt="" />
            </div>
            <div className="div_img">
              <img src={html} alt="" />
            </div>
            <div className="div_img">
              <img src={scss} alt="" />
            </div>
            <div className="div_img">
              <img src={js} alt="" />
            </div>
            <div className="div_img">
              <img src={react} alt="" />
            </div>
          </div>
        </div>

        <div className="skills_right">
          <img src={programming2} alt="" />
        </div>
      </div>
      {/*---------------------Email -----------------*/}
      <Email />
      {/*---------------------footer -----------------*/}
      <footer style={styles.footer}>
        <div className="content_footer" style={styles.content_footer}>
          <h1>
            Mohamed <span>Gheeta</span>
          </h1>
          <p>U Are welcome to visit my profile</p>
          <p> mohamedgheeta999@gmail.com</p>
          <p className="end">@CopyRight By Mohamed Gheeta</p>
        </div>
      </footer>
      {/*---------------------footer -----------------*/}
    </section>
  );
}

export default skills;

const styles = {
  footer: {
    padding: "2rem var(--padding)",
    backgroundColor: "var(--bgColor-2)",
  }, 
};