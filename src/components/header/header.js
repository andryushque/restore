import React from "react";
import "./header.css";

const Header = ({ numItems = 0, total = 0 }) => {
  return (
    <header className="header row">
      <a className="logo text-dark" href="/">
        ReStore
      </a>

      <a className="shopping-cart" href="/">
        <i className="cart-icon fas fa-shopping-cart" />
        <span className="cart-text">
          {numItems} items (${total})
        </span>
      </a>
    </header>
  );
};

export default Header;
