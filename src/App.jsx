import {
  Homepage,
  Account,
  Cart,
  Chat,
  Checkout,
  LoggedOutView,
  Login,
  Orderlist,
  ProductDetails,
  Register,
  Review,
  Search,
  Products,
} from "./pages";
import "./app.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/logged-out" element={<LoggedOutView />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/order-list" element={<Orderlist />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/review" element={<Review />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default App;
