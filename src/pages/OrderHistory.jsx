/* eslint-disable react/prop-types */
import { Footer, Navbar } from "../components";
import { mouse } from "../assets";
import { useEffect, useState } from "react";
import userService from "../services/userService";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";

const OrderHistoryCard = ({ order }) => {
  const navigate = useNavigate();

  const HandleVisit = (e) => {
    e.preventDefault();

    navigate(`/user-profile/${order.IDPenjual}`);
  };

  return (
    <div className="flex flex-col bg-[#E8B19D] rounded-xl">
      <div className="flex flex-row pt-4 px-8 justify-between">
        <p>{order.NamaPenjual}</p>
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
            <p className="text-[2rem]">{order.NamaBarang}</p>
            <p></p>
          </div>
        </div>
        <p className="text-[1.5rem]">Rp{order.HargaBarang}</p>
      </div>
      <div className="flex w-full justify-end">
        <div className="flex flex-col items-end py-5 px-9 gap-7">
          <div className="flex flex-row gap-5">
            <button
              onClick={HandleVisit}
              className="w-52 bg-[#C0523A] text-white py-2 text-xl rounded-md"
            >
              Visit Store
            </button>
            <button className="w-52 bg-[#C0523A] text-white py-2 text-xl rounded-md">
              Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const OrderListData = await userService.getUserOrderList();
        setOrderHistory(OrderListData);
      } catch (error) {
        console.error("Error fetching orderlist information:", error);
      }
    };
    fetchProfile();
    toast.success("Fetching Orderlist Success");
  }, []);

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />
      <Toaster richColors />

      <div className="flex flex-col bg-primary items-center">
        <div className="xl:max-w-[1440px] min-h-screen w-full">
          <div className="flex flex-col my-16 mx-20">
            {orderHistory.map((orderlist) => (
              <OrderHistoryCard key={orderlist.IDOrderlist} order={orderlist} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OrderHistory;
