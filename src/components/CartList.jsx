/* eslint-disable react/prop-types */
import CartProduct from "./CartProducts";

const CartList = ({data}) => {

    return (
        <div className="flex flex-col gap-10">
          {data.map((item) => (
            <div key={item.IDBarang}>
            <CartProduct data={item}/>
            </div>
          ))}
        </div>
      );
          }
export default CartList;
