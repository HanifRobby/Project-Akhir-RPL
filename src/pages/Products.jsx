import { Navbar, Footer } from "../components";
import { useState } from "react";
import { search } from "../assets";
import { NavLink } from "react-router-dom";
import { mouse, keyboard } from "../assets";


const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col bg-primary">
      {/* Navbar */}
      <Navbar />

      {/* Searchbar */}
      <div className="flex flex-row bg-secondary items-center justify-center p-4 gap-4">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search Items"
          className="py-0.5 px-2 w-full h-8 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="flex bg-white p-0.5 rounded-md h-8 w-8 items-center justify-center"
        >
          <img src={search} alt="search" className="h-[80%]" />
        </button>
      </div>

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
        <div className="flex items-center justify-center">
          <NavLink className="flex flex-col bg-secondary1 text-white w-48 h-80 overflow-hidden p-6 rounded-xl">
            <div className="w-full">
              <img
                src={mouse}
                className="w-36 h-36 object-cover object-center rounded-xl"
              />
              <div className="line-clamp-2 overflow-ellipsis my-2">
                Rexus Daxa Air II Wireless
              </div>
              <div className="my-1">Rp600.000</div>
              <div className="my-1">Roenrico Sagala</div>
            </div>
          </NavLink>
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
        <div className="flex items-center justify-center">
          <NavLink className="flex flex-col bg-secondary1 text-white w-48 h-80 overflow-hidden p-6 rounded-xl">
            <div className="w-full">
              <img
                src={mouse}
                className="w-36 h-36 object-cover object-center rounded-xl"
              />
              <div className="line-clamp-2 overflow-ellipsis my-2">
                Rexus Daxa Air II Wireless
              </div>
              <div className="my-1">Rp600.000</div>
              <div className="my-1">Roenrico Sagala</div>
            </div>
          </NavLink>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer/> */}
    </div>
  );
};

export default Products;
