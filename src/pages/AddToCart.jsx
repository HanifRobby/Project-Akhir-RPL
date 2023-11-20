import React, { useState } from "react";
import { Navbar } from "../components";
import { checklist, mouse } from "../assets";

const AddToCart = () => {
    const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col justify-center items-center">
        <div className="xl:max-w-[1440px]">
          <div className="flex flex-col items-center p-10 gap-8">
            <div className="flex flex-row items-center gap-5 p-7 bg-secondary w-[81rem] text-white text-[2rem] rounded-xl ">
              <img src={checklist} alt="" className="w-12 h-12" />
              ShallWe Thrift
            </div>
            <div className="flex flex-row gap-5 w-[81rem] bg-[#E8B19D] py-7 px-8 rounded-xl">
              <img
                src={mouse}
                alt=""
                className="w-32 h-32 object-cover object-center rounded-xl"
              />
              <div className="flex flex-col justify-start">
                <div className="text-[1.75rem]">
                    Baseus Encok WM01 True Wireless Bluetooth Earphone Mini Earbuds
                </div>
                <div className="text-[1.5rem]">
                    Rp100.000
                </div>
                <div className="flex flex-row items-center justify-start">
                    <button className="flex items-center rounded-l-xl bg-[#C0523A] py-2 px-3">
                        -
                    </button>
                    <div className="py-2 px-3 bg-[#FB967F]">
                        {quantity}
                    </div>
                    <button className="flex items-center rounded-r-xl bg-[#C0523A] py-2 px-3">
                        +
                    </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
