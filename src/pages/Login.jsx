import { login1, usernameImage, passwordImage } from "../assets";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../services/api";
import { Toaster, toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Username and password are required.");
      return;
    }

    try {
      const response = await api.post("/login", {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);

        toast.success("Login Success")
        navigate("/");
      } else {
        setError(response.data.message || "Login failed");
        toast.error("Your account is not found")
        console.log(error)
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occured during login. Please try again.");
    }
  }

  function handleGoogleLogin(e) {
    e.preventDefault();
    localStorage.setItem("login", true)

    navigate("/");
  }

  function handleFacebookLogin(e) {
    e.preventDefault();
    localStorage.setItem("login", true);

    navigate("/");
  }

  return (
    <div className="flex flex-row">
      <Toaster/>
      <div className="flex flex-col bg-primary w-[50%] h-screen justify-center items-center pt-4 gap-2">
        <h5 className="text-4xl w-[80%] text-center">
          We contribute to enviromental sustainability by promoting the reuse of
          items, reducing waste, and minimizing their carbon footprint.
        </h5>
        <img src={login1} alt="register" className="h-[50%]" />
      </div>
      <div className="flex flex-col justify-center bg-secondary items-center gap-8 w-[50%]">
        <h4 className="text-5xl text-center text-white">Login</h4>
        <p className="text-2xl text-center text-white w-[50%]">
          Selamat datang, silahkan isi username dan password untuk melanjutkan
        </p>
        <form
          onSubmit={handleLogin}
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
              className="bg-primary w-full outline-none"
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
              className="bg-primary w-full outline-none"
            ></input>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-96 bg-primary text-secondary py-2 text-xl rounded-md"
          >
            Login
          </button>

          {/* Login using other account */}
          <div className="flex flex-row justify-between items-center">
            <div className="w-[42%] h-0.5 bg-white" />
            <p className="text-white">OR</p>
            <div className="w-[42%] h-0.5 bg-white" />
          </div>
          <button
            onClick={handleGoogleLogin}
            className="w-96 bg-primary text-secondary py-2 text-xl rounded-md"
          >
            Login with Google
          </button>
          <button
            onClick={handleFacebookLogin}
            className="w-96 bg-primary text-secondary py-2 text-xl rounded-md"
          >
            Login with Facebook
          </button>

          {/* Register */}
          <p className="text-center text-white">
            Don&apos;t have an account?
            <NavLink to="/Register"> Create an account</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
