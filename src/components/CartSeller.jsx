import { checklist } from "../assets"

const CartSeller = () => {
  return (
    <div className="flex flex-row items-center gap-5 p-7 bg-secondary text-white text-[2rem] rounded-xl ">
      <img src={checklist} alt="" className="w-12 h-12" />
      ShallWe Thrift
    </div>
  )
}

export default CartSeller
