import api from "./api";

const userService = {
  getProfile: async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("Token not found");
        return null;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await api.get("/profile", { headers });
      const { data } = response.data;

      return data;
    } catch (error) {
      console.log("Error fetching profile information:", error);
      throw error;
    }
  },
};

export default userService;
