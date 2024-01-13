const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li className="home">Home </li>
            <li className="about-us">About Us </li>
            <li className="contact-us">Contact Us </li>
            <li className="cart"> 🛒 </li>
          </ul>
        </div>
      </div>
    );
  };