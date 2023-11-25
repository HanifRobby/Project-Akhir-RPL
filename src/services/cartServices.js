import api from "./api";

const cartService = {
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

  addCartProducts: async (productId) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return null;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const data = {
        product_id: parseInt(productId, 10),
      };

      const response = await api.post("/cart", data, { headers });
      const responseData = response.data;

      return responseData;
    } catch (error) {
      console.error("Error adding product to cart:", error);
      throw error;
    }
  },

  deleteCartProduct: async (productId) => {
    try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.error("Token not found");
          return null;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const data = {
          id_barang: parseInt(productId, 10),
        };

        const response = await api.delete("/cart", { data, headers });
        const responseData = response;

        return responseData;
      } catch (error) {
        console.error("Error delete product from cart:", error);
        throw error;
      }
  },
};

export default cartService;
