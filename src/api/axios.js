import axios from "axios";
import { ROUTES } from "../utils/constants";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

});

// Request Interceptor
api.interceptors.request.use(  //"Before every request leaves the application, run this code."
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

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      window.location.href = ROUTES.LOGIN; //Force the application back to the Login page
    }

    return Promise.reject(error);
    
  }
);

export default api;