import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the backend
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const containerStyle = {
    padding: "20px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
  };

  const tdStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1>Product List</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={tdStyle}>{product.id}</td>
              <td style={tdStyle}>{product.name}</td>
              <td style={tdStyle}>{product.price}</td>
              <td style={tdStyle}>
                <button
                  style={buttonStyle}
                  onClick={() => navigate(`/update/${product.id}`)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
