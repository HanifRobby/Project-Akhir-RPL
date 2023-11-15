import { Footer, Navbar } from "../components";
import { landing1, landing2 } from "../assets";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Body */}
      {/* HandMeDown */}
      <div className="flex flex-col items-center gap-8 py-10">
        <h1 className="text-7xl text-secondary justify-center">HandMeDown</h1>
        <p className="text-3xl text-secondary justify-center text-center w-[75%]">
          Discover the easiest way to sell your pre-loved items with our
          professional and user-friendly second-hand marketplace website
          services! At our platform, we transform your unwanted items into cash
          effortlessly.
        </p>
        <NavLink href="" className="bg-secondary text-white px-6 py-2 rounded-md">
          {" "}
          <img src="" className="" /> Get Started
        </NavLink>
        <img src={landing1} alt="landing1" className="w-[80%]" />
      </div>

      {/* Why Choose Us? */}
      <div className="flex flex-col items-center gap-8 py-10">
        <h2 className="text-6xl text-secondary justify-center">
          Why Choose Us?
        </h2>
        <p className="text-2xl text-secondary justify-center text-center w-[75%]">
          HandMeDown offers you a unique and compelling platform to purchase
          high-quality second-hand items. With our app, you can shop for
          pre-owned goods with confidence, knowing that each product has
          undergone rigorous quality checks. By choosing HandMeDown, users not
          only save money but also contribute to environmental sustainability by
          promoting the reuse of items, reducing waste, and minimizing their
          carbon footprint.
        </p>
        <div className="flex flex-col bg-secondary justify-center items-center rounded-t-3xl p-16 mt-16 gap-20">
          <div className="flex flex-row gap-24">
            <img src={landing2} alt="landing2" className="w-[50%]" />
            <div className="flex flex-col gap-3 justify-end">
              <h3 className="text-6xl text-white justify-left">
                One Destination
              </h3>
              <h6 className="text-2xl text-[#FFC26F] justify-left">
                We Got It All
              </h6>
              <p className="text-lg text-white justify-left text-left mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                gravida, risus ut hendrerit mollis, lectus ipsum ultrices magna,
                at aliquet tellus orci sed ipsum. Aliquam sagittis odio sed
                gravida luctus. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-24">
            <div className="flex flex-col gap-3 justify-end">
              <h3 className="text-6xl text-white justify-left">
                One Destination
              </h3>
              <h6 className="text-2xl text-[#FFC26F] justify-left">
                We Got It All
              </h6>
              <p className="text-lg text-white justify-left text-left mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                gravida, risus ut hendrerit mollis, lectus ipsum ultrices magna,
                at aliquet tellus orci sed ipsum. Aliquam sagittis odio sed
                gravida luctus. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
            <img src={landing2} alt="landing2" className="w-[50%]" />
          </div>
        </div>
      </div>

      {/* Feedback */}

      

      {/* Footer */}
      {/* <Footer/> */}
    </div>
  );
};

export default Homepage;
