import React from "react";
import { Link } from "react-router-dom";
import userimage from "../../images/userimage.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">NETPLAY</div>
      </Link>
      <div className="user-image">
        <img src={userimage} alt="user" />
      </div>
    </div>
  );
};

export default Header;
