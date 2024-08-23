import React from "react";
import shopeasy from "../assets/images/ShopEasy.png";

const Sidebar = ({ activeContent, onSidebarClick, userInitials, userName }) => {
  return (
    <>
    <aside className="w-full h-full md:w-72 shadow-md bg-white p-4">
      <div className="flex items-center mb-8  justify-center">
        <img className="w-40 shadow-lg" src={shopeasy} alt="" />
      </div>
      <nav className="flex flex-col justify-between h-screen p-4">
        <ul className="flex flex-col gap-8">
          <li>
            <button
              onClick={() => onSidebarClick("dashboard")}
              className={`block font-bold text-black border  p-3 rounded-md flex items-center gap-3 text-left w-full ${
                activeContent === "dashboard"
                  ? "bg-blue-950 rounded-md text-white"
                  : "hover:bg-gray-700 hover:rounded-md hover:text-white"
              } text-black flex items-center`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-colors duration-300 ${
                    activeContent === "dashboard"
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  <path
                    d="M22 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM22 19.9v-1.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v1.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM10.5 13.1v6.8c0 1.5-.64 2.1-2.23 2.1H4.23C2.64 22 2 21.4 2 19.9v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1ZM10.5 4.1v1.8c0 1.5-.64 2.1-2.23 2.1H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2h4.04c1.59 0 2.23.6 2.23 2.1Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span className="">Dashboard</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => onSidebarClick("allproducts")}
              className={`block font-bold border text-black p-3 rounded-md flex items-center gap-3 text-left w-full ${
                activeContent === "allproducts"
                  ? "bg-blue-950 rounded-md text-white"
                  : "hover:bg-gray-700 hover:rounded-md hover:text-white"
              } text-black flex items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-colors duration-300 ${
                  activeContent === "allproducts"
                    ? "text-white"
                    : "text-gray-400"
                }`}
              >
                <path
                  d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="">All Products</span>
            </button>
          </li>
          <li
            className={`flex gap-3 font-bold text-black items-center border p-3  rounded-md ${
              activeContent === "orderlist"
                ? "bg-blue-950 rounded-md text-white"
                : "hover:bg-gray-700 hover:rounded-md hover:text-white"
            }`}
            onClick={() => onSidebarClick("orderlist")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className={`transition-colors duration-300 ${
                  activeContent === "orderlist" ? "text-white" : "text-gray-400"
                }`}
              >
                <path
                  d="M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16 22h-8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <span className="">Order List</span>
          </li>
        </ul>
        <div>
          <div className="flex border gap-3 items-center">
            <div className="bg-gray-600 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center">
              {userInitials}
            </div>
            <div>
              <span className="block text-lg font-semibold text-gray-700">
                {userName}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;
