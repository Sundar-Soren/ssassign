import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://www.drift.com/wp-content/themes/drift-rebrand/dist/images/drift-logo-reg_c55e841e.svg"
          alt=""
        />
      </div>
      <ul>
        <li>PLATFORM</li>
        <li>SOLUTIONS</li>
        <li>CASE STUDIES</li>
        <li>RESOURCES</li>
        <li>ABOUT US</li>
        <li>PRICING</li>
      </ul>
      <div className="nav_right">
        <button>Let's Chat</button>
        <p>SIGN IN</p>
      </div>
    </div>
  );
};

export default Navbar;
