import { use, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState('Login');
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="home"><Link to="/">Home</Link></li>
          <li className="about"><Link to="about">About Us</Link></li>
          <li className="contact"><Link to="contact">Contact Us</Link></li>
          <li className="cart">Cart</li>
          <li className="cart"><button className="login-btn" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
