import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../helper/CartContext";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import shopEasy from '../assets/images/ShopEasy.png';
import AccountDropDown from '../components/AccountDropDown';

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart } = useCart();
=======
import Top from "./Top";
import shopEasy from "../assets/images/ShopEasy.png";
import AccountDropDown from "../components/AccountDropDown";
import Category from "./Category";
import { useSearch } from "../helper/SearchContext";

const Navigation = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { cart } = useCart();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
>>>>>>> main

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSearch = () => {
    navigate("/"); // Navigate to the home page or search results page
  };

  return (
    <div className="fixed z-50 top-0 left-0 right-0 bg-customgray">
      <Top />
      <div className="w-full flex flex-col items-center justify-center p-8 px-64">
        <div className="flex w-full">
          <span className="flex justify-between w-full">
            <img className="w-40 shadow-lg" src={shopEasy} alt="" />
            <ul className="flex gap-10 font-poppins text-base items-center justify-center w-full">
              <li
                onMouseEnter={() => setModalVisible(true)}
                onMouseLeave={() => setModalVisible(false)}
                className="position-relative"
              >
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 7h18M3 12h18M3 17h18"
                      stroke="#DB4444"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </Link>
                <Category isVisible={isModalVisible} />
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li id="signUp" className="w-20">
                <Link to="/signup" className="hover:underline">
                  Sign Up
                </Link>
              </li>
            </ul>
          </span>

          <div className="flex justify-between w-full">
            <span className="flex w-full justify-center bg-customgray items-center">
              <span className="border w-96 shadow-lg rounded-md flex items-center gap">
                <span className="w-10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>

                <input
                  className="w-72 py-2 m-1 ps-3 outline-none bg-customgray text-sm font-poppins rounded-md"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </span>
              <span
                onClick={handleSearch}
                className="py-3 px-4 cursor-pointer rounded-md bg-customred text-white shadow-md border"
              >
                Search
              </span>
            </span>

            <div className="flex gap-6 items-center ml-5">
              <a className="p-1 rounded-sm" href="">
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
              <Link to="/cart" className="flex relative">
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
                <span className="absolute flex items-center justify-center -top-1 text-xs -right-1 font-inter font-bold w-4 h-4 rounded-full bg-customred text-white">
                  {cart.length}
                </span>
              </Link>
              <div
                id="profileImage"
                onClick={openModal}
                className="w-10 h-10 cursor-pointer rounded-full bg-customred hidden justify-center items-center text-white font-medium"
              >
                <span id="userInitials"> </span>
                <AccountDropDown isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </div>
          </div>
        </div>
        {/* <hr className=" w-full mt-4" /> */}
      </div>
    </div>
  );
};

export default Navigation;
