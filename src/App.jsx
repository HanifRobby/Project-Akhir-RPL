import {
  Homepage,
  Login,
  ProductDetails,
  Register,
  Products,
  Search,
  Profile,
  OtherProfile,
  Review,
  OrderHistory,
  Cart,
} from "./pages";
import "./app.css";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AuthRoutes from "./routes/AuthRoutes";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}

const App = () => {
  return (
    <Routes>
      <Route element={<ScrollToTop />}>
        <Route element={<AuthRoutes/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:searchTerm" element={<Search />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-profile/:id" element={<OtherProfile />} />
        <Route path="/review" element={<Review />} />
        <Route path="/order-history" element={<OrderHistory />} />
      </Route>
    </Routes>
  );
};

export default App;
