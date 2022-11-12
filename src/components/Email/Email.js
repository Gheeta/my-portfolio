import React,{ useContext, useRef, useState }  from 'react'

import "./Email.scss";
import "../../styles/partials/Home.scss";
import emailjs from "@emailjs/browser";

const Email = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
     const form = useRef();
     const [done, setDone] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_zsepqdm",
          "template_03fj8e8",
          form.current,
          "N0W8z_GBoPb6VeFop"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <div className="contact-form" id="ContactMe">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome contact-header">
          {/* darkMode */}
          <span>Get in Touch</span>
          <span>Contact me</span>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="btn" />
          <span>{done && "Thanks for Contacting me"}</span>
        </form>
      </div>
    </div>
  );
  
}

export default Email