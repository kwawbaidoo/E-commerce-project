import Navigation from "../components/Navigation";
import React, { useState } from "react";
import market from "../assets/images/marketpng.png";
import IconGoogle from "../assets/icons/IconGoogle.png";
import { Link } from "react-router-dom";

const Signup = () => {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let phoneInput = document.getElementById("phone");
  let addressInput = document.getElementById("address");
  let paswordInput = document.getElementById("password");
  let confirmpasswordInput = document.getElementById("confirm_password");

  const [hasText, setHasText] = useState(false);
  const [hasEmailText, setEmailHasText] = useState(false);
  const [hasPhoneText, setPhoneHasText] = useState(false);
  const [hasAddress, setAddressHasText] = useState(false);
  const [hasPassword, setHasPassword] = useState(false);
  const [hasConfirmPassword, setHasConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const handleToggleClick = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleToggleConfirmPassword = () => {
    setConfirmPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPasswordInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate passwords
    if (passwordInput !== confirmPasswordInput) {
      alert("Passwords do not match");
      return;
    }

    // Prepare data to be sent to the backend
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
      password: passwordInput,
    };

    try {
      // Make the API call to the backend
      const response = await api.post("http://localhost:8000/api/register", formData);
      console.log(response.data); // Handle the response as needed
      nameInput.value = ""
      emailInput.value = ""
      phoneInput.value = ""
      paswordInput.value = ""
      confirmpasswordInput.value = ""
      addressInput.value = "" ;
    
      // Redirect or show success message
      toast.success("Signup successful!");
      navigate("/Login"); // Redirect to the login page after successful signup
    } catch (error) {
      console.error(error);
      // Handle errors appropriately
      if (error.response) {
        // Server responded with a status other than 200 range
        toast.error(`Signup failed: ${error.response.data.message}`);
      } else if (error.request) {
        // Request was made but no response received
        toast.error("Signup failed: No response from server.");
      } else {
        // Something else caused the error
        toast.error(`Signup failed: ${error.message}`);
      }
    }
  };


  return (
    <div className="flex justify-center mt-60">
      <div className="w-full flex gap-[129px] items-center justify-center xl:max-w-[1220px] lg:max-w-[1220px] md:max-w-[1220px] mt-16 rounded-br-3xl">
        <div className="bg-customseablue w-[600px] h-[400px] flex items-end justify-center rounded-br-3xl rounded-tl-3xl ">
          <img src={market} alt="" className="rounded-br-3xl" />
        </div>
        <div className="w-full h-[530px] flex flex-col gap-12">
          <span className="flex flex-col gap-6">
            <h3 className="font-inter font-medium text-4xl text-black">
              Create an account
            </h3>
            <h3 className="font-poppins font-light text-base">
              Enter your details below
            </h3>
          </span>
          <form onSubmit={handleSubmit} action="" className="flex gap-8 flex-col group">
            <span className="flex gap-4">
              <div className="relative w-full">
                <label
                  htmlFor="name"
                  className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all ${
                    hasText ? "-top-4  text-xs" : ""
                  }`}
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full h-[50px] bg-customgray pl-4 outline-none pt-4 pb-1 peer"
                  type="text"
                  placeholder=" "
                  onChange={(e) => setHasText(e.target.value !== "")}
                />
                <span className="hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Enter a valid name
                </span>
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all ${
                    hasEmailText ? "-top-4  text-xs" : ""
                  }`}
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  className="w-full h-[50px] bg-customgray pl-4 outline-none pt-4 pb-1 peer"
                  type="email"
                  placeholder=" "
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  onChange={(e) => setEmailHasText(e.target.value !== "")}
                />
                <span className="hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Enter a valid email <span className="text-gray-400">(e.g: 1234@gmail.com)</span>
                </span>
              </div>
            </span>
            <span className="flex gap-4">
              <div className="relative w-full">
                <label
                  htmlFor="phone"
                  className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all ${
                    hasPhoneText ? "-top-4  text-xs" : ""
                  }`}
                >
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  className="w-full h-[50px] bg-customgray pl-4 outline-none pt-4 pb-1 peer"
                  type="tel"
                  placeholder=" Placeholder"
                  onChange={(e) => setPhoneHasText(e.target.value !== "")}
                  title="Enter 10 digit telephone number without dashes or dots"
                  pattern="[0-9]{10}"
                  maxLength="10"
                />
                <span className="hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Enter a valid phone number with 10 digits
                </span>
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="address"
                  className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all ${
                    hasAddress ? "-top-3  text-xs" : ""
                  }`}
                >
                  Address (P.O.Box 25, Winneba)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="address"
                  name="address"
                  required
                  className="w-full h-[50px] bg-customgray pl-4 outline-none pt-4 pb-1 peer"
                  type="text"
                  placeholder=" "
                  onChange={(e) => setAddressHasText(e.target.value !== "")}
                />
              </div>
            </span>
            <span className="flex gap-4">
              <div className="relative w-full">
                <label
                  htmlFor="password"
                  className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all ${
                    hasPassword ? "-top-9  text-xs" : ""
                  }`}
                >
                  Password<span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  required
                  name="password"
                  value={passwordInput}
                  onChange={handlePasswordChange}
                  className="w-full h-[50px] bg-customgray pl-4 outline-none pt-4 pb-1 peer"
                  type={passwordType}
                  placeholder=" "
                />
                <span
                  onClick={handleToggleClick}
                  className="absolute cursor-pointer top-[15px] right-4"
                >
                  {passwordType === "password" ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Eye SVG */}
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Eye Slash SVG */}
                    </svg>
                  )}
                </span>
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="confirm_password"
                  className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all ${
                    hasConfirmPassword ? "-top-9  text-xs" : ""
                  }`}
                >
                  Confirm Password<span className="text-red-500">*</span>
                </label>
                <input
                  id="confirm_password"
                  required
                  name="confirm_password"
                  value={confirmPasswordInput}
                  onChange={handleConfirmPasswordChange}
                  className="w-full h-[50px] bg-customgray pl-4 outline-none pt-4 pb-1 peer"
                  type={confirmPasswordType}
                  placeholder=" "
                />
                <span
                  onClick={handleToggleConfirmPassword}
                  className="absolute cursor-pointer top-[15px] right-4"
                >
                  {confirmPasswordType === "password" ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Eye SVG */}
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Eye Slash SVG */}
                    </svg>
                  )}
                </span>
              </div>
            </span>
            <span className="flex flex-col items-center justify-center gap-4">
              <button className="bg-customgreen h-[50px] w-full rounded-md text-white" type="submit">
                Create account
              </button>
            </span>
          </form>
          <div className="flex flex-col gap-3">
            <p className="text-center text-gray-600">Or continue with</p>
            <span className="flex items-center justify-center gap-4">
              <button className="border border-gray-300 rounded-md h-[50px] w-full">
                <img src={IconGoogle} className="h-[25px] mx-auto" alt="Google" />
              </button>
            </span>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/Login" className="text-customblue">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
