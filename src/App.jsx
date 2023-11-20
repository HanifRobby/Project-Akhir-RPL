import {
  Homepage,
  Login,
  ProductDetails,
  Register,
  Products,
  Search,
  AddToCart,
  Profile,
} from "./pages";
import "./app.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/:searchTerm" element={<Search />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/addToCart" element={<AddToCart />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default App;
