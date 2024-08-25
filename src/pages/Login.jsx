import { json, Link } from "react-router-dom";
import market from "../assets/images/marketpng.png";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

// import api from "../api";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  
  const from = location.state?.from || '/';


  const handleToggleClick = () => {
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );

    const hidePasswordElement = document.getElementById("hide_password");
    const showPasswordElement = document.getElementById("show_password");

    if (passwordType === "password") {
      if (showPasswordElement) {
        showPasswordElement.classList.add("hidden");
      }
      if (hidePasswordElement) {
        hidePasswordElement.classList.remove("hidden");
        hidePasswordElement.classList.add("flex");
      }
    } else {
      if (hidePasswordElement) {
        hidePasswordElement.classList.remove("flex");
        hidePasswordElement.classList.add("hidden");
      }
      if (showPasswordElement) {
        showPasswordElement.classList.remove("hidden");
        showPasswordElement.classList.add("flex");
      }
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = { email }; // Replace with actual user data from API
    navigate(from, { replace: true });
    try {
      const response = await api.post("http://localhost:8000/api/login", {
        email,
        password: passwordInput,
      });
      
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", user.name);
      const userRole = user.role; // Assume the role is returned from the backend
  
      if (userRole === "admin") {
        navigate("/dashboard"); // Redirect to admin dashboard
      } else if (userRole === "customer") {
        navigate("/"); // Redirect to customer dashboard
      } else {
        throw new Error("Unauthorized role");
      }
  
      toast.success("Login successful");
    } catch (error) {
      toast.error("Invalid email, password, or unauthorized role");
    }
  
   
  };
  
  return (
    <div className=" flex items-center justify-center mt-48">
      <div className="w-full flex gap-[129px] items-center justify-center  xl:max-w-[1305px] lg:max-w-[1305px] md:max-w-[1305px] mt-16 ">
        <div className="bg-customseablue w-[500px] h-[400px] flex items-end justify-center rounded-bl-3xl rounded-tr-3xl">
          <img src={market} alt="" className="rounded-bl-3xl rounded-tr-3xl" />
        </div>
        <div className="w-[371px] h-[530px] flex flex-col gap-12">
          <span className="flex flex-col gap-6">
            <h3 className="font-inter font-mediLum text-4xl leading-3 text-black mt-20">
              Log in to ShopEasy
            </h3>
            <h3 className="font-poppins font-normal text-base">
              Enter your details below
            </h3>
          </span>
          <form className="flex flex-col gap-10 group" onSubmit={handleSubmit}>
            <span className="w-full flex flex-col">
              <input
                className="h-8 border-b-2 outline-none peer"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
              <span className="hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                Enter valid email{" "}
                <span className="text-gray-400">(e.g: 1234@gmail.com)</span>
              </span>
            </span>
            <span className="w-full h-[50px] border-b-2 outline-none flex items-center">
              <input
                className="h-8 w-full outline-none"
                type={passwordType}
                value={passwordInput}
                id="password"
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
              <span id="show_password" className="">
                <svg
                  onClick={handleToggleClick}
                  className="mr-2 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
                    stroke="#191e28"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
                    stroke="#191e28"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  {passwordType === "password" ? "Show" : "Hide"} Password
                </svg>
              </span>
              <span id="hide_password" className="hidden">
                <svg
                  onClick={handleToggleClick}
                  className="cursor-pointer mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m14.53 9.47-5.06 5.06a3.576 3.576 0 1 1 5.06-5.06Z"
                    stroke="#191e28"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47"
                    stroke="#191e28"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15.51 12.7a3.565 3.565 0 0 1-2.82 2.82M9.47 14.53 2 22M22 2l-7.47 7.47"
                    stroke="#191e28"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  {passwordType === "password" ? "Hide" : "Show"}
                </svg>
              </span>
            </span>
            {error && <div className="text-red-500">{error}</div>}
            <span className="flex justify-between items-center">
              <button className="flex hover:bg-blue-900 items-center justify-center w-36 bg-blue-500 h-14 rounded-md text-white text-base font-poppins font-medium group-invalid:pointer-events-none group-invalid:opacity-30 cursor-pointer">
                Log in
              </button>
              <h4 className="text-customred font-poppins text-base font-light">
                <Link to="/forgetpass" className="underline">
                  Forget Password
                </Link>
              </h4>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
