/* eslint-disable react/prop-types */
import { checklist } from "../assets";

const CartSeller = ({data}) => {
  return (
    <div className="flex flex-row items-center gap-5 p-7 bg-secondary text-white text-[2rem] rounded-xl ">
      <img src={checklist} alt="" className="w-12 h-12" />
      {data.NamaPenjual}
    </div>
  );
};

export default CartSeller;
