import { NavLink } from "react-router-dom";
import { horizontalLogo } from "../assets";

const Footer = () => {
  return (
    <div className="flex flex-col">
    
      {/* line */}
      <div className="w-full h-0.5 bg-black" />

      <div className="flex flex-row justify-between p-9">
        <div className="flex flex-col gap-4">
          <img src={horizontalLogo} className="w-80 h-24" />
          <p className="text-secondary text-2xl w-80">
            we transform your unwanted items into cash effortlessly.
          </p>
        </div>
        <div className="flex flex-row gap-28 text-2xl">
          <div className="flex flex-col gap-2">
            <NavLink to="">Navigation</NavLink>
            <NavLink to="">Home</NavLink>
            <NavLink to="">About us</NavLink>
            <NavLink to="">FAQ</NavLink>
          </div>
          <div className="flex flex-col gap-2">
            <NavLink to="">Support Us</NavLink>
            <NavLink to="">Contact Us</NavLink>
            <NavLink to="">Support Center</NavLink>
            <NavLink to="">Privacy and Policy</NavLink>
          </div>
          <div className="flex flex-col gap-2">
            <NavLink to="">Partner</NavLink>
            <NavLink to="">Our Partner</NavLink>
            <NavLink to="">Community</NavLink>
            <NavLink to="">Investor</NavLink>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="w-full h-0.5 bg-black" />

      <div className="flex flex-row justify-between p-9 text-2xl">
        <p className="text-secondary">© 2023 HandMeDown, All Rights Reserved</p>
        <div>{/* 3 socials */}</div>
      </div>
    </div>
  );
};

export default Footer;
