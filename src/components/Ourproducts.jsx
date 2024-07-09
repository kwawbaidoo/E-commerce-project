import React from "react";
import dogfood from "../assets/images/dogfood.png";
import copaSense from "../assets/images/CopaSense 1.png";
import GP from "../assets/images/GP.png";
import greencoat from "../assets/images/greencoat.png";
import camera250d from "../assets/images/camera250d.png";
import MercedesKids from "../assets/images/MercedesKids.png";
import curology from "../assets/images/curology.png";
import ideapad from "../assets/images/ideapad.png";
import heart from "../assets/images/heart.png";
import view from "../assets/images/view.png";


export default function OurProducts() {
  return (
    <>
      <section className="flex gap-[60px] -z-10 flex-col w-full mt-[71px] md:max-w-[1170px] xl:max-w-[1170px] lg:max-w-[1170px]">
        <div className="flex justify-between items-end ">
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-4 ">
              <span className="w-5 h-10 rounded-md bg-customred"></span>
              <h3 className="font-poppins text-base font-semibold text-customred">
                Our Products
              </h3>
            </span>
            <h3 className="font-inter font-semibold text-4xl">
              Explore Our Products
            </h3>
          </div>

          <div className="flex gap-2">
            <span className="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-customred hover:text-white rounded-full bg-customgray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </span>
            <span className="flex items-center justify-center w-12 h-12 cursor-pointer hover:bg-customred hover:text-white rounded-full bg-customgray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[60px]">
          <div className="flex gap-[30px]">
            <div className="flex flex-col w-[270px] h-[322px] cursor-pointer gap-4">
              <span className="relative flex items-center justify-center w-[270px] h-[250px] bg-customgray rounded-md">
                <img className="w-[115px] h-[180px]" src={dogfood} alt="" />
                <span className=" flex flex-col gap-2 absolute left-56 top-3">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img className="" src={heart} alt="" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={view} alt="" />
                  </span>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <h3 className="font-poppins font-medium text-base">
                  Breed Dry Dog Food
                </h3>
                <span className="flex gap-2">
                  <h3 className="font-poppins font-medium text-base text-customred">
                    GHS 100
                  </h3>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#7D8184"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#7D8184"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                  <span>(35)</span>
                </span>
              </span>
            </div>
            <div className="flex flex-col w-[270px] h-[322px] cursor-pointer gap-4">
              <span className="relative flex flex-col items-center w-[270px] h-[250px] bg-customgray rounded-md">
                <img
                  className="w-[146px] h-[163px] mt-6"
                  src={camera250d}
                  alt=""
                />
                <span className=" flex flex-col gap-2 absolute left-56 top-3">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img className="" src={heart} alt="" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={view} alt="" />
                  </span>
                </span>
                <span className="flex hover:bg-customred hover:text-white absolute bottom-1 w-[270px] h-[41px] items-center justify-center bg-black rounded-bl-md rounded-br-md font-poppins font-medium text-base text-white">
                  {" "}
                  Add to Cart
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <h3 className="font-poppins font-medium text-base">
                  CANON EOS DSLR Camera
                </h3>
                <span className="flex gap-2">
                  <h3 className="font-poppins font-medium text-base text-customred">
                    GHS 100
                  </h3>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#7D8184"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                  <span>(35)</span>
                </span>
              </span>
            </div>

            <div className="flex flex-col w-[270px] h-[322px] gap-4">
              <span className="relative flex items-center justify-center cursor-pointer w-[270px] h-[250px] bg-customgray rounded-md">
                <img className="w-[190px] h-[180px]" src={ideapad} alt="" />
                <span className=" flex flex-col gap-2 absolute left-56 top-3">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img className="" src={heart} alt="" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={view} alt="" />
                  </span>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <h3 className="font-poppins font-medium text-base">
                  ASUS FHD Gaming Laptop
                </h3>
                <span className="flex gap-2">
                  <h3 className="font-poppins font-medium text-base text-customred">
                    GHS 700
                  </h3>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                  <span>(325)</span>
                </span>
              </span>
            </div>
            <div className="flex flex-col w-[270px] h-[322px] cursor-pointer gap-4">
              <span className="relative flex items-center justify-center w-[270px] h-[250px] bg-customgray rounded-md">
                <img className="w-[172px] h-[159px]" src={curology} alt="" />
                <span className=" flex flex-col gap-2 absolute left-56 top-3">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img className="" src={heart} alt="" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={view} alt="" />
                  </span>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <h3 className="font-poppins font-medium text-base">
                  Curology Product Set{" "}
                </h3>
                <span className="flex gap-2">
                  <h3 className="font-poppins font-medium text-base text-customred">
                    GHS 500
                  </h3>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#7D8184"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                  <span>(145)</span>
                </span>
              </span>
            </div>
          </div>

          <div className="flex gap-[30px]">
            <div className="flex flex-col w-[270px] h-[322px] cursor-pointer gap-4">
              <span className="relative flex items-center justify-center w-[270px] h-[250px] bg-customgray rounded-md">
                <h4 className=" absolute right-[200px] top-3 w-14 h-7 rounded-md bg-customgreen text-white items-center flex justify-center text-xs font-inter">
                  New
                </h4>
                <img
                  className="w-[180px] h-[133px]"
                  src={MercedesKids}
                  alt=""
                />
                <span className=" flex flex-col gap-2 absolute left-56 top-3">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img className="" src={heart} alt="" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={view} alt="" />
                  </span>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <h3 className="font-poppins font-medium text-base">
                  Kids Electric Car
                </h3>
                <span className="flex gap-2">
                  <h3 className="font-poppins font-medium text-base text-customred">
                    GHS 960
                  </h3>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#7D8184"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#7D8184"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                  <span>(65)</span>
                </span>
                <span className="flex gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center bg-white border-2 border-black p-1">
                    <span className=" absolute w-3 h-3 rounded-full bg-customred z-10"></span>
                  </span>
                  <span className="w-5 h-5 rounded-full bg-customred"></span>
                </span>
              </span>
            </div>
            <div className="flex flex-col w-[270px] h-[322px] cursor-pointer gap-4">
              <span className="relative flex flex-col items-center justify-center w-[270px] h-[250px] bg-customgray rounded-md">
                <img className="w-[146px] h-[163px] " src={copaSense} alt="" />
                <span className=" flex flex-col gap-2 absolute left-56 top-3">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img className="" src={heart} alt="" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={view} alt="" />
                  </span>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <h3 className="font-poppins font-medium text-base">
                  Jr. Zoom Soccer Cleats
                </h3>
                <span className="flex gap-2">
                  <h3 className="font-poppins font-medium text-base text-customred">
                    GHS 1160
                  </h3>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#7D8184"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                  <span>(35)</span>
                </span>
                <span className="flex gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center bg-white border-2 border-black p-1">
                    <span className=" absolute w-3 h-3 rounded-full bg-customyellow z-10"></span>
                  </span>
                  <span className="w-5 h-5 rounded-full bg-customred"></span>
                </span>
              </span>
            </div>
            <div className="flex flex-col w-[270px] h-[322px] cursor-pointer gap-4">
              <span className="relative flex items-center justify-center w-[270px] h-[250px] bg-customgray rounded-md">
                <h4 className=" absolute right-[200px] top-3 w-14 h-7 rounded-md bg-customgreen text-white items-center flex justify-center text-xs font-inter">
                  New
                </h4>
                <img className="w-[178px] h-[150px]" src={GP} alt="" />
                <span className=" flex flex-col gap-2 absolute left-56 top-3">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img className="" src={heart} alt="" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={view} alt="" />
                  </span>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <h3 className="font-poppins font-medium text-base">
                  GP11 Shooter USB Gamepad
                </h3>
                <span className="flex gap-2">
                  <h3 className="font-poppins font-medium text-base text-customred">
                    GHS 660
                  </h3>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                  <span>(55)</span>
                </span>
                <span className="flex gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center bg-white border-2 border-black p-1">
                    <span className=" absolute w-3 h-3 rounded-full bg-black z-10"></span>
                  </span>
                  <span className="w-5 h-5 rounded-full bg-customred"></span>
                </span>
              </span>
            </div>
            <div className="flex flex-col w-[270px] h-[322px] cursor-pointer gap-4">
              <span className="relative flex items-center justify-center w-[270px] h-[250px] bg-customgray rounded-md">
                <img className="w-[172px] h-[159px]" src={greencoat} alt="" />
                <span className=" flex flex-col gap-2 absolute left-56 top-3">
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img className="" src={heart} alt="" />
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={view} alt="" />
                  </span>
                </span>
              </span>
              <span className="flex flex-col gap-2">
                <h3 className="font-poppins font-medium text-base">
                  Quilted Satin Jacket{" "}
                </h3>
                <span className="flex gap-2">
                  <h3 className="font-poppins font-medium text-base text-customred">
                    GHS 660
                  </h3>
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFAD33"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#7D8184"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="starColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </span>
                  <span>(55)</span>
                </span>
                <span className="flex gap-2">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center bg-white border-2 border-black p-1">
                    <span className=" absolute w-3 h-3 rounded-full bg-forestgreen z-10"></span>
                  </span>
                  <span className="w-5 h-5 rounded-full bg-customred"></span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <button className="flex  rounded-md px-12 py-5 text-white items-center justify-center bg-customred text-bse font-poppins">
            View All Products
          </button>
        </div>
      </section>
    </>
  );
}
