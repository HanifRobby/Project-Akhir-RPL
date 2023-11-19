/* eslint-disable react/prop-types */
import { Navbar, Footer, SearchBar } from "../components";
import { NavLink, useParams } from "react-router-dom";
import { keyboard } from "../assets";
import productdata from "../assets/data/productdata.json";

// Generate ProductList
const ProductCard = ({ product }) => {
  return (
    <div className="flex items-center justify-center">
      <NavLink
        to={`/product/${product.id}`}
        className="flex flex-col bg-secondary1 text-white w-48 h-80 overflow-hidden p-6 rounded-xl"
      >
        <div className="w-full h-full">
          <img
            src={keyboard}
            alt={product.name}
            className="w-36 h-36 object-cover object-center rounded-xl"
          />
          <div className="line-clamp-2 overflow-ellipsis my-1">
            {product.name}
          </div>
          <div className="my-2">Rp{product.price}</div>
          <div className="my-5 line-clamp-1 overflow-hidden">
            {product.sellerName}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

const Search = () => {
  const product = productdata.products;
  const { searchTerm } = useParams();

  const searchfiltered = () => {
    if (searchTerm == undefined) {
      return product;
    } else {
      const filteredProducts = product.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filteredProducts;
    }
  };

  const filteredProducts = searchfiltered();

  return (
    <div className="flex flex-col bg-primary min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Searchbar */}
      <SearchBar />

      {/* Promo */}
      <div className="bg-[#D9D9D9] h-40 w-full"></div>

      {/* Products */}
      <div className="flex flex-row items-center justify-center">
        <div className="flex py-2 px-4 bg-secondary w-full h-12 text-white rounded-b-xl">
          Products
        </div>
      </div>

      {/* Item List */}
      <div className="grid grid-cols-5 py-11 px-16 gap-10 pb-20">
        {/* Items */}
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
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

export default Search;
