import api from "./api";

const productService = {
  getProducts: async () => {
    try {
      const response = await api.get("/products");
      const { data } = response.data;

      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  // Other product-related functions...
  getProductDetails: async (id) => {
    try {
      const response = await api.get(`/product-details/${id}`);
      const { data } = response.data;

      return data;
    } catch (error) {
      console.error(`Product id: ${id} not found:`, error);
      throw error;
    }
  },

  getProductsCart: async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return null;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await api.get("/cart", { headers });
      const { data } = response.data;

      return data;
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  },
};

export default productService;
