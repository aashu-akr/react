import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState(["Log In"]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="home">Home </li>
          <li className="about-us">About Us </li>
          <li className="contact-us">Contact Us </li>
          <li className="cart"> 🛒 </li>
          <button
            className="login"
            onClick={() => {
              setBtnNameReact("Log Out");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

// this is the default method to export our file
// always export first then import the file
