/* eslint-disable react/prop-types */
import { useState } from "react";
import { profileimg } from "../assets";

const ChangeProfilePopup = ({ Popup, setPopup }) => {
  // const [nama, setNama] = useState("");
  // const [noTelp, setNoTelp] = useState("");
  // const [kelamin, setKelamin] = useState("");
  // const [alamat, setAlamat] = useState("");
  // const [password, setPassword] = useState("");

  const ChangeProfileData = () => {};

  return (
    <div>
      {/* Popup create Todo */}
      {Popup && (
        <div className="popup-container flex w-full h-full justify-center items-center fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-20">
          <div className="popup-content flex flex-col bg-[#6B2617] w-2/6 h-4/5 rounded-md">
            <form
              onSubmit={ChangeProfileData}
              className="flex flex-col gap-4 p-4 h-full justify-between"
            >
              <div className="flex flex-col px-12 py-8 gap-14">
                <div className="flex flex-row gap-10 items-center">
                  <img
                    src={profileimg}
                    alt=""
                    className="w-[7rem] h-[7rem] object-cover object-center rounded-[100%]"
                  />
                  <button className="w-fit h-fit bg-white text-secondary px-6 py-1 text-xl rounded-md">
                    Change
                  </button>
                  <button className="w-fit h-fit bg-secondary text-white px-6 py-1 text-xl rounded-md border-white border-[0.1rem]">
                    Remove
                  </button>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="" className="flex flex-col gap-2 text-[#FFC26F]">
                  Nama
                    <input
                      type="text"
                      className="w-full py-1 px-2 bg-white text-secondary text-[1.5rem] rounded-xl"
                    />
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeProfilePopup;
