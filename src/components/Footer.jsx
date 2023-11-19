import { NavLink } from "react-router-dom";
import { horizontalLogo, fbImage, igImage, twitterImage } from "../assets";

const Footer = () => {
  return (
    <div className="flex w-full justify-center items-center bg-primary  border-t border-black">
      <div className="w-full">
        <footer className="flex flex-col">
          <div className="flex flex-row justify-between py-2 px-9">
            <div className="flex flex-col gap-4">
              <img src={horizontalLogo} className="w-80 h-24" />
              <p className="text-secondary text-xl w-80">
                we transform your unwanted items into cash effortlessly.
              </p>
            </div>
            <div className="flex flex-row gap-28 text-xl">
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
          <div className="h-0.5 bg-black" />

          <div className="flex flex-row justify-between py-2 px-9 text-xl items-center">
            <p className="text-secondary">
              © 2023 HandMeDown, All Rights Reserved
            </p>
            <div className="flex flex-row gap-8">
              <NavLink to={""} className="rounded-[100%]">
                <img src={igImage} alt="" className="w-14 h-14" />
              </NavLink>
              <NavLink to={""} className="rounded-[100%]">
                <img src={twitterImage} alt="" className="w-14 h-14" />
              </NavLink>
              <NavLink to={""} className="rounded-[100%]">
                <img src={fbImage} alt="" className="w-14 h-14" />
              </NavLink>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
