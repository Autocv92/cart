import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

function Header() {
  return (
    <section className="section-manu-bar">
      <div className="manu-bar">
        <ul>
          <Link to="/">
            <li>Logo</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/productcategories">
            <li>Product Catrgory</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </section>
  );
}

export default Header;
