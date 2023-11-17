import { useState } from "react";
import { mouse, search } from "../assets";
import { Footer, Navbar } from "../components";

const ProductDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col bg-primary min-h-screen">
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

      {/* Products Detail */}
      <div className="flex flex-row pt-14 pb-24 px-9 justify-evenly gap-11">
        <div className="flex flex-row gap-11">
          <div className="bg-[#E4E4E4] p-5 rounded-xl">
            <div className="flex flex-col gap-2">
              <img
                src={mouse}
                alt=""
                className="w-80 h-80 object-cover object-center rounded-xl"
              />
              <div>
                <div className="flex flex-row gap-2">
                  <img
                    src={mouse}
                    alt=""
                    className="w-16 h-16 object-cover object-center rounded-xl"
                  />
                  <img
                    src={mouse}
                    alt=""
                    className="w-16 h-16 object-cover object-center rounded-xl"
                  />
                  <img
                    src={mouse}
                    alt=""
                    className="w-16 h-16 object-cover object-center rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[28rem] gap-2">
            <div className="text-4xl">Mouse Logitech M221</div>
            <div className="text-2xl">Rp20.000</div>
            <div className="flex flex-col gap-2 mt-8">
              <div className="text-2xl">Description</div>
              <div className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque iaculis nunc metus, a porttitor libero sagittis
                nec. Curabitur eu magna ut urna ultrices feugiat. Duis eu luctus
                purus. Pellentesque vulputate ipsum eget turpis maximus, eu
                suscipit metus efficitur. Nullam mollis, ligula ut molestie
                semper, nulla nisi malesuada eros, non molestie nisi erat a
                sapien. Cras velit nulla, viverra non lacus quis, aliquet varius
                nunc. Nulla urna dui, eleifend nec neque ac, auctor tempus ante.
                Sed at dui malesuada, viverra lectus eget, consequat elit. Nunc
                maximus turpis velit, at cursus mi placerat sed. Praesent
                euismod sem et nibh aliquet luctus. Aliquam consectetur
                venenatis lectus sit amet maximus. Aenean porttitor varius massa
                id dapibus.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-96 gap-14">
          <div className="h-[450px] bg-[#E5CAC1] rounded-xl">

          </div>
          <div className="h-[50px] bg-[#E5CAC1] rounded-xl">

          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
