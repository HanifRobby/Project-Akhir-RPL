/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { close, profileimg } from "../assets";
import userService from "../services/userService";
import { Toaster, toast } from "sonner";

const ChangeProfilePopup = ({ Popup, togglePopup }) => {
  const [nama, setNama] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await userService.getProfile();
        setNama(profileData.nama);
        setNoTelp(profileData.noTelp);
        setAlamat(profileData.alamat);
        setEmail(profileData.email);
      } catch (error) {
        console.error("Error fetching profile information:", error);
      }
    };
    fetchProfile();
  }, []);

  const ChangeProfileData = async (e) => {
    e.preventDefault()

    try {
      const updatedProfileData = {
        nama: nama,
        email: email,
        no_telp: noTelp,
        alamat: alamat,
      };

      const result = await userService.updateProfile(updatedProfileData);
      console.log("Profile updated successfully:", result);
      toast.success("Update profile success")
      window.location.reload()
      togglePopup(e);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div>
    <Toaster/>
      {Popup && (
        <div className="popup-container flex w-full h-full justify-center items-center fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] z-20">
          <div className="popup-content absolute top-4 flex flex-col bg-[#6B2617] w-[40rem] h-[50rem] rounded-md">
            <button
              onClick={togglePopup}
              className="flex justify-end items-center mt-5 mr-5"
            >
              <img src={close} alt="" className="w-4 h-4" />
            </button>
            <form
              onSubmit={ChangeProfileData}
              className="flex flex-col gap-4 px-4 h-full justify-between"
            >
              <div className="flex flex-col px-12 py-8 gap-7">
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
                  <label
                    htmlFor=""
                    className="flex flex-col gap-2 text-[#FFC26F]"
                  >
                    Nama
                    <input
                      type="text"
                      onChange={(e) => setNama(e.target.value)}
                      value={nama}
                      className="w-full py-1 px-2 bg-white text-secondary text-[1rem] rounded-md"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-2/5">
                  <label
                    htmlFor=""
                    className="flex flex-col gap-2 text-[#FFC26F]"
                  >
                    Nomor HP
                    <input
                      type="text"
                      onChange={(e) => setNoTelp(e.target.value)}
                      value={noTelp}
                      className="w-full py-1 px-2 bg-white text-secondary text-[1rem] rounded-md"
                    />
                  </label>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="flex flex-col gap-2 text-[#FFC26F]"
                  >
                    Alamat
                    <input
                      type="text"
                      onChange={(e) => setAlamat(e.target.value)}
                      value={alamat}
                      className="w-full py-1 px-2 bg-white text-secondary text-[1rem] rounded-md"
                    />
                  </label>
                </div>
                <div className="text-[2rem] text-[#FFC26F]">Security</div>
                <div className="flex flex-col w-3/5">
                  <label
                    htmlFor=""
                    className="flex flex-col gap-2 text-[#FFC26F]"
                  >
                    Email
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="w-full py-1 px-2 bg-white text-secondary text-[1rem] rounded-md"
                    />
                  </label>
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor=""
                    className="flex flex-col w-full gap-2 text-[#FFC26F]"
                  >
                    Password
                    <div className="flex flex-row w-full justify-between">
                      <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="********"
                        className="w-2/5 py-1 px-2 bg-white text-secondary text-[1rem] rounded-md"
                      />
                      <button className="w-fit h-fit bg-secondary text-white px-6 py-1 text-xl rounded-md border-white border-[0.1rem]">
                        Change Password
                      </button>
                    </div>
                  </label>
                </div>
                <div className="flex flex-row gap-6 justify-end items-center">
                  <button
                    type="submit"
                    className="w-fit h-fit bg-white text-secondary px-6 py-1 text-xl rounded-md"
                  >
                    Save
                  </button>
                  <button
                    onClick={togglePopup}
                    className="w-fit h-fit bg-secondary text-white px-6 py-1 text-xl rounded-md border-white border-[0.1rem]"
                  >
                    Cancel
                  </button>
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
