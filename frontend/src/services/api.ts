import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1800",
  timeout: 5000,
});

export default api;
