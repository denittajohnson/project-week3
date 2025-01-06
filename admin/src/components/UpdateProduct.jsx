import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../services/api";

// Inline CSS for Update Product Form
const formStyle = {
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const labelStyle = {
  display: "block",
  margin: "10px 0 5px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#28a745",
  color: "#fff",
  padding: "10px 15px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({ name: "", price: "" });

  useEffect(() => {
    getProductById(id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, product)
      .then(() => navigate("/"))
      .catch((error) => console.error("Error updating product:", error));
  };

  return (
    <div className="container">
      <h1 className="my-4">Update Product</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div className="mb-3">
          <label style={labelStyle}>Product Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div className="mb-3">
          <label style={labelStyle}>Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
