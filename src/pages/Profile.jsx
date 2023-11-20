import { profileimg, profilebg } from "../assets";
import { Footer, Navbar } from "../components";

const Profile = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col bg-primary items-center">
        <div className="xl:max-w-[1440px] w-full">
          <div className="flex flex-col mt-16">
            <img
              src={profilebg}
              alt=""
              className="w-full h-[18rem] rounded-xl"
            />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row ml-10">
                <img
                  src={profileimg}
                  alt=""
                  className="w-60 h-60 object-cover object-center rounded-[100%] relative bottom-[7.5rem]"
                />
                <div className="text-secondary text-[3rem] mt-4 ml-8">
                  Prabowo Subianto
                </div>
              </div>
              <div className="flex flex-col mt-10 mr-10 gap-7">
                <button className="w-56 bg-secondary text-white py-2 text-xl rounded-md">
                  Edit Profile
                </button>
                <button className="w-56 bg-secondary text-white py-2 text-xl rounded-md">
                  Order History
                </button>
              </div>
            </div>

            {/* General */}
            <div className="flex flex-col items-center gap-6 mt-2 mb-32 w-[80%]">
              <div className="flex flex-row w-full items-center gap-5">
                <div className="flex text-[2.25rem]">General</div>
                <div className="flex flex-1 bg-black h-1"></div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-[1.5rem]">Nama Depan</p>
                <div className="w-full py-5 px-6 bg-secondary text-white text-[1.5rem] rounded-xl">
                  Prabowo
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col w-[40%]">
                    <p className="text-[1.5rem]">No Telepon</p>
                    <div className="w-full py-5 px-6 bg-secondary text-white text-[1.5rem] rounded-xl">
                      08123456789
                    </div>
                  </div>
                  <div className="flex flex-col w-[40%]">
                    <p className="text-[1.5rem]">Jenis Kelamin</p>
                    <div className="w-full py-5 px-6 bg-secondary text-white text-[1.5rem] rounded-xl">
                      Laki-laki
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-[1.5rem]">Email</p>
                <div className="w-full py-5 px-6 bg-secondary text-white text-[1.5rem] rounded-xl">
                  subianto@gmail.com
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p className="text-[1.5rem]">Alamat</p>
                <div className="w-full py-5 px-6 bg-secondary text-white text-[1.5rem] rounded-xl">
                  Jalan Watugong 2 no 15B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
