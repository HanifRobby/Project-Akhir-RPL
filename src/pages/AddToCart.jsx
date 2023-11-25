import { useEffect, useState } from "react";
import { CartList, Footer, Navbar } from "../components";
import productService from "../services/productService";

const AddToCart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const cartData = await productService.getProductsCart();
        setData(cartData);
        // console.log(cartData)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProduct()
  }, [])

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col min-h-screen items-center bg-primary">
        <div className="xl:max-w-[1440px] w-full">
          <div className="flex flex-col">
            {/* Item */}
            <div className="flex flex-col p-10 gap-8">
              <CartList data={data} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddToCart;
