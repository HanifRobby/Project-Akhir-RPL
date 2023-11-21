import React from "react";
import { Navbar } from "../components";
import { mouse } from "../assets";

const OrderHistory = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col bg-primary items-center">
        <div className="xl:max-w-[1440px] w-full">
          <div className="flex flex-col mt-16 mx-20 bg-[#E8B19D] rounded-xl">
            <div className="flex flex-row pt-4 px-8 justify-between">
              <p>ShallWe Thrift</p>
              <p>Order already accepted by client | Done</p>
            </div>
            <div className="flex flex-row justify-between py-4 px-6">
              <div className="flex flex-row gap-5">
                <img
                  src={mouse}
                  alt=""
                  className="w-28 h-28 object-cover object-center"
                />
                <div className="flex flex-col">
                  <p>Mini Jewelry Box Rectangle</p>
                  <p>x1</p>
                </div>
              </div>
              <p className="">Rp22.500</p>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex flex-col items-end py-5 px-9 gap-7">
                Rp22.500
                <div className="flex flex-row gap-5">
                  <button className="w-52 bg-[#C0523A] text-white py-2 text-xl rounded-md">
                    Visit Store
                  </button>
                  <button className="w-52 bg-[#C0523A] text-white py-2 text-xl rounded-md">
                    Review
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

export default OrderHistory;
