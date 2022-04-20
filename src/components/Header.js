import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
let CartImg = require("../images/shopping-cart.png");

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-title">
          <h2>J&J's Restaurant</h2>
        </div>
        <div className="list">
          <li className="li-child">
            <Link className="li-link" to="/">
              Home
            </Link>
          </li>
          <li className="li-child">
            <Link className="li-link" to="/menu">
              Menu
            </Link>
          </li>
          <li className="li-child">
            <Link className="li-link" to="/reviews">
              Reviews
            </Link>
          </li>
        </div>
      </div>
      <div className="cart-li-container">
        <Link className="cart-link" id="cart-link" to="/cart">
          <img id="img-cart" src={CartImg}></img>
        </Link>
      </div>
    </div>
  );
}

export default Header;
