import React from 'react';
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
//import { IconName } from "react-icons/fa";
import { faHome, faPerson,faLaptop, faComputer } from '@fortawesome/free-solid-svg-icons';

const Service = () => {
  return (
    <>
      <div className="Service" id="Services">
        <h1 className="text-center">
          Our<span> Service</span>
        </h1>
        <div className="box">
          <div className="card">
            <FontAwesomeIcon icon={faLaptop} className="icon" />
            <h5>Web Dev</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              fugiat esse consequuntur enim illum quidem, culpa corporis.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faComputer} className="icon" />
            <h5>Web Dev</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              fugiat esse consequuntur enim illum quidem, culpa corporis.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faPerson} className="icon" />
            <h5>Web Dev</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              fugiat esse consequuntur enim illum quidem, culpa corporis.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faHome} className="icon" />
            <h5>Web Dev</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              fugiat esse consequuntur enim illum quidem, culpa corporis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service