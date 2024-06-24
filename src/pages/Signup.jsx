import Navigation from "../components/Navigation";
import React from "react";
import market from "../assets/images/marketpng.png";
import IconGoogle from "../assets/icons/IconGoogle.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="">
      <div className="w-full flex gap-[129px] items-center xl:max-w-[1305px] lg:max-w-[1305px] md:max-w-[1305px] mt-16 ">
        <div className="bg-customseablue w-[805px] h-[781px] flex items-end justify-center">
          <img src={market} alt="" />
        </div>
        <div className="w-[371px] h-[530px] flex flex-col gap-12">
          <span className="flex flex-col gap-6">
            <h3 className="font-inter font-medium text-4xl text-black">
              Create an account
            </h3>
            <h3 className="font-poppins font-light text-base">
              Enter your details below
            </h3>
          </span>
          <span className="flex flex-col gap-10">
            <input
              className="h-8 border-b-2 outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-8  border-b-2 outline-none"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className="h-8  border-b-2 outline-none"
              type="password"
              placeholder="Password"
            />
          </span>
          <span className="flex flex-col gap-4">
            <button className="flex items-center justify-center bg-customred h-14 rounded-md text-white text-base font-poppins font-medium">
              Create Account
            </button>
            <button className="flex items-center justify-center h-14 rounded-md gap-4 border-2 text-base font-poppins font-medium">
              {" "}
              <img src={IconGoogle} alt="" />
              Sign up with Google
            </button>
          </span>
          <span className="flex gap-4 items-center justify-center">
          <h3 className="font-popins font-light text-base">Already have an acoount?</h3>
          <h3 className="font-poppins font-medium text-base hover:text-customred hover:underline-offset-2">
            <Link to="/login">Log in</Link>
            </h3>

          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
