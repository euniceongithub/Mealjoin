import React from "react";
import "./Header.css";
import logoSymbol from "./assets/justlogo.png";
import logoText from "./assets/justtext.png";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logoSymbol} alt="MealJoin logo symbol" className="logo-symbol" />
        <img src={logoText} alt="MealJoin logo text" className="logo-text" />
      </div>
      <button className="signin-button">Sign In</button>
    </header>
  );
};

export default Header;
