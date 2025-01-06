import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
  };

  return (
    <Router>
      <nav style={navStyle}>
        <h2>Admin Panel</h2>
        <div>
          <Link to="/" style={linkStyle}>
            Product List
          </Link>
          <Link to="/update/:id" style={linkStyle}>
            Update Product
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
