import { Footer, Navbar } from "../components";

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Body */}
      <div className="flex flex-col bg-primary justify-center items-center py-20 px-11 gap-10">
        <h1 className="text-secondary text-8xl">HandMeDown</h1>
        <p className="text-secondary text-2xl">Discover the easiest way to sell your pre-loved items with our professional and user-friendly second-hand marketplace website services! At our platform, we transform your unwanted items into cash effortlessly.</p>
        <a href="" className="flex flex-row items-center justify-center gap-4 text-xl text-white bg-secondary px-8 py-4 rounded-2xl"><img src="" className="w-14 h-14"/>Get Started</a>
        <img src="" className="w-11/12 h-[768px]"/>
      </div>
      <div className="flex flex-row bg-white justify-center items-center py-20 px-11">
        <h1 className="text-secondary text-9xl">WHY CHOOSE US?</h1>
        
        <div className="flex flex-row gap-24 justify-between">
          {/* for loop image */}
        </div>
      </div>
    
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Homepage;