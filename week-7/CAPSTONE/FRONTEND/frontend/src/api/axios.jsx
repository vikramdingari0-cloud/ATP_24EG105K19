import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-backend-hesv.onrender.com",
  withCredentials: true,
});

export default api;