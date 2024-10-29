import axios from "axios";

const API_URL = "http://localhost:8080/api/user"; // Adjust if using a different port

// Login User
export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

// Get All Users (admin-only route)
export const getAllUsers = async (token) => {
  const response = await axios.get(`${API_URL}/getAllUsers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const registerUser = async (name, email, password, role) => {
  const response = await axios.post(`${API_URL}/register`, {
    name,
    email,
    password,
    role,
  });
  return response.data;
};
