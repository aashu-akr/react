import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState(["Login"]);

  useEffect(() => {
    // console.log("use effect called");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li className="home">
            <Link to="/">Home</Link>
          </li>
          <li className="about-us">
            <Link to="/about">About Us</Link>
          </li>
          <li className="contact-us">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="cart">
            <Link to="/🛒"> 🛒</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log("login button rendered");
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
