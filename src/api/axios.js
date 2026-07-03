import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1", // backend later connect hoga
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Request Interceptor (auto token attach)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ❌ Response interceptor (global error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;