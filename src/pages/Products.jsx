import { Navbar, Footer } from "../components";
import { useState } from "react";
import { search } from "../assets";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {};

  return (
    <div className="flex flex-col">
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
          <button onClick={handleSearch} className="flex bg-white p-0.5 rounded-md h-8 w-8 items-center justify-center">
            <img src={search} alt="search" className="h-[80%]"/>
          </button>
      </div>

      {/* Promo */}
      <div className="bg-[#D9D9D9] h-40 w-full">

      </div>

      {/* Recommended */}
      <div className="flex flex-row item-center justify-center">
        <div className="flex py-2 px-4 bg-secondary w-full h-12 text-white rounded-b-xl">Recommended</div>
      </div>

      <div className="grid grid-cols-5 gap-4">
        
        {/* Items */}
        <NavLink className>

        </NavLink>
      </div>




    </div>
  );
};

export default Products;
