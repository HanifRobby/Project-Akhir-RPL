import api from "./api";

const productService = {
  getProducts: async () => {
    try {
      const response = await api.get("/products");
      const {data} = response.data

      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  // Other product-related functions...

};

export default productService;
