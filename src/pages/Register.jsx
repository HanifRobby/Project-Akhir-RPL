import {
  register1,
  usernameImage,
  emailImage,
  phoneImage,
  passwordImage,
  confirmImage,
  // eye,
} from "../assets";
import { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agreement, setAgreement] = useState(false);

  function handleRegister(e) {
    e.preventDefault();

    if (
      !username.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !confirm.trim() ||
      !agreement
    ) {
      alert("Fill all the fields.");
      return;
    }

    navigate("/login");
  }

  return (
    <div className="flex flex-row">
      <div className="flex flex-col bg-primary w-[50%] h-[1024px] items-center pt-32 gap-5">
        <h5 className="text-4xl w-[80%] text-center">
          we transform your unwanted items into cash effortlessly
        </h5>
        <img src={register1} alt="register" className="w-[80%]" />
      </div>
      <div className="flex flex-col bg-secondary w-50% items-center pt-20 gap-8 w-[50%] h-[1024px]">
        <h4 className="text-5xl text-center text-white">Register</h4>
        <p className="text-2xl text-center text-white w-[50%]">
          Buat akun baru untuk mendapatkan akses ke semua fitur dan layanan
          kami.
        </p>
        <form
          onSubmit={handleRegister}
          method="post"
          className="flex flex-col gap-5 text-xl"
        >
          {/* username */}
          <div className="flex flex-row bg-primary w-96 h-12 items-center gap-3 px-4 rounded-lg">
            <label>
              <img src={usernameImage} alt="username" className="w-7" />
            </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="username"
              className="bg-primary w-full"
            ></input>
          </div>

          {/* email */}
          <div className="flex flex-row bg-primary w-96 h-12 items-center gap-3 px-4 rounded-lg">
            <label>
              <img src={emailImage} alt="email" className="w-7" />
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="email"
              className="bg-primary w-full"
            ></input>
          </div>

          {/* phone */}
          <div className="flex flex-row bg-primary w-96 h-12 items-center gap-3 px-4 rounded-lg">
            <label>
              <img src={phoneImage} alt="phone" className="w-7" />
            </label>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="phone"
              className="bg-primary w-full"
            ></input>
          </div>

          {/* password */}
          <div className="flex flex-row bg-primary w-96 h-12 items-center gap-3 px-4 rounded-lg">
            <label>
              <img src={passwordImage} alt="password" className="w-7" />
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="password"
              className="bg-primary w-full"
            ></input>
          </div>

          {/* confirm */}
          <div className="flex flex-row bg-primary w-96 h-12 items-center gap-3 px-4 rounded-lg">
            <label>
              <img src={confirmImage} alt="confirm" className="w-7" />
            </label>
            <input
              type="password"
              onChange={(e) => setConfirm(e.target.value)}
              value={confirm}
              placeholder="confirm"
              className="bg-primary w-full"
            ></input>
          </div>

          {/* agreement */}
          <div className="flex flex-row gap-5 items-center">
            <input
              type="checkbox"
              onChange={(e) => setAgreement(e.target.value)}
              value={agreement}
              className="h-12"
            ></input>
            <label className="w-96 text-white text-md">
              I have read and agree with Terms of Use, Client Agreement and
              Privacy Policy
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-96 bg-primary text-secondary py-2 text-xl rounded-md"
          >
            Register
          </button>

          {/* Log in */}
          <p className="text-center text-white">
            I Already have an Account?
            <NavLink to="/login"> Log In</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
