import { use, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState('Login');
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="home">Home</li>
          <li className="about">About Us</li>
          <li className="contact">Contact Us</li>
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
