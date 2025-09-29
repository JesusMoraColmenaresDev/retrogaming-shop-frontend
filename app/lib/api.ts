import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000"
});

// Interceptor para agregar el token excepto en /login y /register
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  // Verifica si la ruta es /login o /register
  if (
    config.url &&
    !config.url.includes("/login") &&
    !config.url.includes("/register") &&
    token
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;