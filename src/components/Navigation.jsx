import heart from "../assets/images/heart.png";
import cart from "../assets/images/Cart1.png";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Top from "./Top";
import Home from "../pages/Home";

const Navigation = () => {
  return (
    <>
      <Top />
      <div className="w-full flex flex-col items-center justify-center p-8">
        <div className="flex md:max-w-[1170px] xl:max-w-[1170px]  gap-36 items-center">
          <span className="flex gap-48 w-full xl:max-w-[675px] ">
            <a href="" className="font-inter font-semibold text-2xl text-customred w-40 flex items-center justify-center  bg-white shadow-md rounded-lg">ShopEasy</a>

            <ul className="flex gap-12 font-poppins text-base items-center  w-full">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="w-20 ">
                <Link to="/signup" className="hover:underline  ">
                  Sign Up
                </Link>
              </li>
            </ul>
          </span>

          <div className="flex justify-between w-[347px] ">
            <span className="flex w-52 gap-3 justify-center bg-customgray  items-center ">
              <input
                className=" w-40 m-1 py-1 outline-none bg-customgray text-sm font-poppins rounded-lg"
                type="text"
                placeholder="what are you looking for?"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>

            <div className="flex gap-6 items-center ml-5  ">
              <a className=" p-1 rounded-sm" href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 hover:stroke-customred"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </a>
              <span className="flex  relative">
                <a href="" className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 hover:stroke-customred"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </a>
                <span className="absolute flex items-center justify-center -top-1 text-xs -right-1 font-inter font-bold w-4 h-4 rounded-full bg-customred text-white">
                  1
                </span>
              </span>
              <div
                id="profileImage"
                className="w-10 h-10 rounded-full bg-customred flex justify-center items-center text-white font-medium"
              >
                <span>FK</span>
              </div>
            </div>
          </div>
        </div>
        <hr className=" w-full mt-4" />
      </div>
    </>
  );
};

export default Navigation;
