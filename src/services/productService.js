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

  getUserProducts: async (id) => {
    try {
      const response = await api.get(`/user-products/${id}`);
      const { data } = response.data;

      return data;
    } catch (error) {
      console.error(`Error fetching user ${id} products :`, error);
      throw error;
    }
  },

};

export default productService;
