import { useState } from "react";
import { search } from "../assets";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div className="flex flex-row bg-secondary items-center justify-center p-4 gap-4">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
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
  );
};

export default SearchBar;
