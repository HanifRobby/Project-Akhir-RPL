import { NavLink, useNavigate } from "react-router-dom";
import { horizontalLogo, profileimg, shopcart } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [profilePopup, setProfilePopup] = useState(false);

  const togglePopup = () => {
    setProfilePopup(!profilePopup);
  };

  const HandleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center w-full overflow-hidden border-b border-black bg-primary">
      <div className="w-full">
        <nav className="flex flex-row h-20 justify-between items-center p-11">
          <NavLink to="/">
            <img src={horizontalLogo} className="w-72 h-20" />
          </NavLink>

          {/* link navbar */}
          <div className="flex flex-row w-fit gap-12 justify-between items-center">
            <div className="flex flex-row gap-12 justify-between text-xl">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/products">Products</NavLink>
            </div>
            <div className="flex flex-row justify-between items-center gap-12">
              {token ? (
                <>
                  <NavLink to="/cart" className="w-16 h-16">
                    <img src={shopcart} alt="" />
                  </NavLink>
                  <div className="bg w-16 h-16 rounded-[100%]">
                    <button onClick={togglePopup}>
                      <img
                        src={profileimg}
                        alt=""
                        className="object-cover object-center rounded-[100%]"
                      />
                    </button>
                    {profilePopup && (
                      <div className="absolute right-3 flex flex-col gap-2 p-4 w-32 h-32 bg-white rounded-md">
                        <NavLink
                          to="/profile"
                          className="flex text-center bg-secondary  justify-center text-xl text-white rounded-md"
                        >
                          Profile
                        </NavLink>
                        <button
                          onClick={HandleLogout}
                          className="flex text-center bg-secondary  justify-center text-xl text-white rounded-md"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="bg-secondary text-white px-6 py-2 rounded-md"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="bg-secondary text-white px-6 py-2 rounded-md"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
