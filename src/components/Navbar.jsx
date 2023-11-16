import { NavLink } from "react-router-dom";
import { horizontalLogo } from "../assets";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row h-20 justify-between items-center bg-primary p-11">
        <img src={horizontalLogo} className="w-72 h-20" />


          {/* link navbar */}
        <div className="flex flex-row gap-20 justify-between items-center">
          <div className="flex flex-row gap-12 justify-between">
            <NavLink to="" className="font-jua text-xl">
              Home
            </NavLink>
            <NavLink href="" className="font-jua text-xl">
              Products
            </NavLink>
            <NavLink href="" className="font-jua text-xl">
              Resources
            </NavLink>
          </div>
          <div className="flex flex-row justify-between items-center gap-6">
            <NavLink href="" className="bg-secondary text-white px-6 py-2 rounded-md">
              Login
            </NavLink>
            <NavLink href="" className="bg-secondary text-white px-6 py-2 rounded-md">
              Register
            </NavLink>
          </div>

        </div>
      </div>

      {/* line */}
      <div className="w-full h-0.5 bg-black"></div>
    </div>
    
  );
};

export default Navbar;
