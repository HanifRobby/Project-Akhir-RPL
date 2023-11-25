/* eslint-disable react/prop-types */
import { useState } from "react";
import { mouse } from "../assets";

const CartItem = ({data}) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const removeItem = () => {};

  return (
    <div className="flex flex-row">
      <div className="flex flex-1 flex-row gap-5 bg-[#E8B19D] py-7 px-8 rounded-l-xl">
        <img
          src={mouse}
          alt=""
          className="w-32 h-32 object-cover object-center rounded-xl"
        />
        <div className="flex flex-col justify-start">
          <div className="text-[1.75rem]">
            {data.NamaBarang}
          </div>
          <div className="text-[1.5rem]">Rp{data.HargaBarang}</div>
          <div className="flex flex-row items-center justify-start mt-2">
            <button
              className="flex items-center rounded-l-xl bg-[#C0523A] py-2 px-3"
              onClick={decrementQuantity}
            >
              -
            </button>
            <div className="py-2 px-3 bg-[#FB967F]">{quantity}</div>
            <button
              className="flex items-center rounded-r-xl bg-[#C0523A] py-2 px-3"
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={removeItem}
        className="flex items-center bg-[#FB967F]/50 px-5 rounded-r-xl text-white"
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
