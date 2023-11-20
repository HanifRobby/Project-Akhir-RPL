import { Footer, Navbar } from "../components";
import CartItem from "../components/CartItem";
import CartSeller from "../components/CartSeller";

const AddToCart = () => {
  

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col min-h-screen items-center bg-primary">
        <div className="xl:max-w-[1440px] w-full">
          <div className="flex flex-col">

            {/* Item */}
            <div className="flex flex-col p-10 gap-8">
              <CartSeller/>
              <CartItem/>

              <CartSeller/>
              <CartItem/>
              <CartItem/>

              <CartSeller/>
              <CartItem/>
              
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
