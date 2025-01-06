import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaList, FaUserCog } from "react-icons/fa";

// Inline CSS for Navbar
const navbarStyle = {
  backgroundColor: "#000",
  padding: "10px 20px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const navLinkStyle = {
  margin: "0 10px",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
};

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h3>Admin Panel</h3>
        </Link>
        <ul style={{ display: "flex", marginLeft: "auto" }}>
          <li style={navLinkStyle}>
            <Link to="/" className="nav-link">
              <FaHome /> Dashboard
            </Link>
          </li>
          <li style={navLinkStyle}>
            <Link to="/product-list" className="nav-link">
              <FaList /> Products
            </Link>
          </li>
          <li style={navLinkStyle}>
            <Link to="/update-product" className="nav-link">
              <FaShoppingCart /> Update Product
            </Link>
          </li>
          <li style={navLinkStyle}>
            <Link to="/settings" className="nav-link">
              <FaUserCog /> Settings
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
