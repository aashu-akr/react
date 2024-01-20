import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState(["Login"]);
  const [btnAboutUs, setBtnAboutUs] = useState(["About Us"]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li className="home">Home </li>
          <button
            className="about-us"
            onClick={() => {
              btnAboutUs === "About Us"
                ? setBtnAboutUs("Helping to serve food")
                : setBtnAboutUs("About Us");
            }}
          >
            {btnAboutUs}
          </button>
          <li className="contact-us">Contact Us</li>
          <li className="cart"> 🛒 </li>

          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
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
