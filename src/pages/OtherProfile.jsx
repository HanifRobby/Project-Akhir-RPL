/* eslint-disable react/prop-types */
import { maps, mouse, phone, profileimg } from "../assets";
import { Footer, Navbar } from "../components";
import productdata from "../assets/data/productdata.json";
import { NavLink } from "react-router-dom";

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
            src={mouse}
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

const OtherProfile = () => {
  const product = productdata.products;

  return (
    <div className="flex flex-col bg-primary">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col items-center">
        <div className="xl:max-w-[1440px] w-full">
          <div className="flex flex-col my-16 mx-16">
            <div className="flex flex-row w-full bg-[#FB967FB2] justify-start items-center rounded-xl gap-10 py-10 px-28 shadow-md">
              <img
                src={profileimg}
                alt=""
                className="w-60 h-60 rounded-[100%]"
              />
              <div className="flex flex-col gap-2">
                <p className="text-[3rem]">Aceng</p>
                <p className="flex flex-row items-center gap-2 text-[1.5rem]">
                  <img src={phone} alt="" className="w-12 h-12" /> 08123456789
                </p>
                <p className="flex flex-row items-center gap-2 text-[1.5rem]">
                  <img src={maps} alt="" className="w-12 h-12" />
                  Jalan Watugong 2 no 15B
                </p>
              </div>
            </div>
          </div>
        </div>
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
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OtherProfile;
