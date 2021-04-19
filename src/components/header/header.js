import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ numItems = 0, total = 0 }) => {
  return (
    <header className="header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>

      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fas fa-shopping-cart" />
          <span className="cart-text">
            {numItems} items (${total})
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
