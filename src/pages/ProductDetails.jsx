import { Link, NavLink, useParams } from "react-router-dom";
import { maps, mouse, onlineshop, phone, shopcart, whatsapp } from "../assets";
import { Footer, Navbar, SearchBar } from "../components";

const ProductDetails = () => {
  const { id } = useParams();

  const addToCartHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col bg-primary min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Searchbar */}
      <SearchBar />

      {/* Products Detail */}
      <div className="flex justify-center items-center">
        <div className="xl:max-w-[1440px]">
          <div className="flex flex-row pt-14 pb-24 px-9 justify-evenly gap-11">
            <div className="rounded-xl">
              <div className="flex flex-col gap-2 p-5 rounded-xl bg-[#E4E4E4]">
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
                  nec. Curabitur eu magna ut urna ultrices feugiat. Duis eu
                  luctus purus. Pellentesque vulputate ipsum eget turpis
                  maximus, eu suscipit metus efficitur. Nullam mollis, ligula ut
                  molestie semper, nulla nisi malesuada eros, non molestie nisi
                  erat a sapien. Cras velit nulla, viverra non lacus quis,
                  aliquet varius nunc. Nulla urna dui, eleifend nec neque ac,
                  auctor tempus ante. Sed at dui malesuada, viverra lectus eget,
                  consequat elit. Nunc maximus turpis velit, at cursus mi
                  placerat sed. Praesent euismod sem et nibh aliquet luctus.
                  Aliquam consectetur venenatis lectus sit amet maximus. Aenean
                  porttitor varius massa id dapibus.
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[25rem] gap-14">
              {/* Seller Information */}
              <div className="flex flex-col h-fit bg-[#E5CAC1] rounded-xl pt-8 pl-12 pr-5 pb-6">
                <div className="flex flex-col gap-10">
                  <div className="flex flex-row gap-6">
                    <img src={onlineshop} alt="" className="w-12 h-12" />

                    <div className="flex flex-col gap-4">
                      <div>
                        <div className="text-black text-[1.25rem]">Sell by</div>
                        <NavLink to="/" className="text-black text-[1.5rem]">
                          Aceng
                        </NavLink>
                      </div>

                      <div className="flex flex-col">
                        <div className="flex flex-row items-center gap-4">
                          <img src={phone} alt="" className="w-8 h-11" />
                          08123456789
                        </div>
                        <Link
                          to=""
                          className="flex flex-row items-center gap-2 bg-[#D0AEA278] p-2 rounded-xl shadow-md border border-black"
                        >
                          <img src={whatsapp} alt="" className="w-8 h-8" />
                          Chat with Aceng now!
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-6">
                    <img src={maps} alt="" className="w-12 h-12" />
                    <div className="flex flex-col gap-4">
                      Jalan Watugong 2 no 15B
                      <Link
                        to=""
                        className="flex flex-row items-center gap-2 bg-[#D0AEA278] p-2 rounded-xl shadow-md border border-black"
                      >
                        <img src={maps} alt="" className="w-8 h-8" />
                        Chat with Aceng now!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={addToCartHandler}
                className="flex flex-row items-center gap-2 bg-[#D0AEA278] p-2 rounded-xl shadow-md border border-black"
              >
                <img src={shopcart} alt="" className="w-8 h-8" />
                <div className="w-full justify-center text-center text-[1.5rem] pr-10">
                  Add To Cart
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetails;
