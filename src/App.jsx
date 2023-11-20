import {
  Homepage,
  Login,
  ProductDetails,
  Register,
  Products,
  Search,
  AddToCart,
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
    </Routes>
  );
};

export default App;
