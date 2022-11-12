import React from "react";

import programming1 from "../../icons/Programming1.png";
//import programming2 from "../../icons/Programming2.png";

const AboutMe = () => {
  
  return (
    <div className="About" id="AboutMe">
      <div className="container_image">
        <img src={programming1} alt="" />
      </div>

      <div className="container_texts">
        <h1>
          About <span>Me</span>
        </h1>
        <h5>
          <span>Front-End</span> Developer
        </h5>
        <p>
          I am a Front-End React developer. I can provide clean code and pixel
          perfect design. I also make website more & more interactive with web
          animations.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;