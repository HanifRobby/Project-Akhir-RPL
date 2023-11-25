/* eslint-disable react/prop-types */
import { Navbar, Footer, SearchBar } from "../components";
import { NavLink } from "react-router-dom";
import { mouse } from "../assets";
// import productdata from "../assets/data/productdata.json";
import recommendedproducts from "../assets/data/recommendedproducts.json";
import productService from "../services/productService";
import { useEffect, useState } from "react";

// Generate ProductList
const ProductCard = ({ product }) => {
  return (
    <div className="flex items-center justify-center">
      <NavLink
        to={`/product-details/${product.ID}`}
        className="flex flex-col bg-secondary1 text-white w-48 h-80 overflow-hidden p-6 rounded-xl"
      >
        <div className="w-full h-full">
          <img
            src={mouse}
            alt={product.NamaBarang}
            className="w-36 h-36 object-cover object-center rounded-xl"
          />
          <div className="line-clamp-2 overflow-ellipsis my-1">
            {product.NamaBarang}
          </div>
          <div className="my-2">Rp{product.Harga}</div>
          <div className="my-5 line-clamp-1 overflow-hidden">
            {product.NamaPenjual}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

const Products = () => {
  // const product = productdata.products;
  const [products, setProducts] = useState([]);
  const recommended = recommendedproducts.products;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productsData = await productService.getProducts();
        setProducts(productsData);

        console.log(productsData)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProduct()
  }, [])
  

  return (
    <div className="flex flex-col bg-primary min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Searchbar */}
      <SearchBar />

      {/* Promo */}
      <div className="bg-[#D9D9D9] h-40 w-full"></div>

      {/* Recommended */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex py-2 px-4 bg-secondary w-full h-12 text-white rounded-b-xl">
          Recommended
        </div>
      </div>

      {/* Item List */}
      <div className="grid grid-cols-5 py-11 px-16 gap-10 pb-20">
        {/* Items */}
        {recommended.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Products */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex py-2 px-4 bg-secondary w-full h-12 text-white rounded-b-xl">
          Products
        </div>
      </div>

      {/* Item List */}
      <div className="grid grid-cols-5 py-11 px-16 gap-10 pb-20">
        {/* Items */}
        {products.map((product) => (
          <ProductCard key={product.ID} product={product} />
        ))}
      </div>

      {/* Show More Button */}
      <div className="grid grid-cols-5 py-11 px-16 gap-10 pb-20">
        <div className="flex items-center justify-center">
          <NavLink
            to={""}
            className="bg-[#C0523A] text-white px-6 py-2 rounded-md w-48"
          >
            Show more Products
          </NavLink>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Products;
