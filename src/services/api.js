import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

// Interceptor untuk menangani kesalahan pada respons
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Tangani kesalahan umum di sini
    if (error.response) {
      // Tangani respons dengan status selain 2xx
      console.error("HTTP error:", error.response.status, error.response.data);
    } else if (error.request) {
      // Tangani kesalahan permintaan
      console.error("Request error:", error.request);
    } else {
      // Kesalahan lainnya
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
