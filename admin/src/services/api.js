import axios from "axios";

const API_URL = "http://localhost:5000/api/products"; // Replace with your API URL

// Fetch products list
export const getProducts = () => {
  return axios.get(API_URL);
};

// Get a single product by ID
export const getProductById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Update a product
export const updateProduct = (id, product) => {
  return axios.put(`${API_URL}/${id}`, product);
};

// Delete a product
export const deleteProduct = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
