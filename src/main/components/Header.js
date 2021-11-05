import React from "react";
import "../styles/header.css";
import paypal from "../../Asset/paypal.png";
import visa from "../../Asset/visa.png";
import discover from "../../Asset/discover.png";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="left-side">
          <h3>Payment Information</h3>
          <p>Choose your method of payment</p>
        </div>
        <div className="right-side">
          <img src={visa} alt="visa logo" />
          <img src={discover} alt="discover logo" />

          <img src={paypal} alt="paypal logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
