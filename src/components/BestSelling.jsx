import React from "react";
import coat from "../assets/images/coat.png";
import bag from "../assets/images/bag.png";
import bookshelve from "../assets/images/bookshelve.png";
import speaker from "../assets/images/speaker.png";
import heart from "../assets/images/heart.png";
import view from "../assets/images/view.png";

export default function BestSelling(){
    return(
        <>
        
        <section className="flex ml-36 flex-col gap-10 justify-center w-full xl:max-w-[1308px] md:max-w-[1308px]  ">
        <div className="flex items-end justify-between xl:max-w-[1170px] md:max-w-[1170px] lg:max-w-[1170px]">
          <div className="flex  xl:max-w-[600px] md:max-w-[600px] justify-between gap-[87px] ">
            <div className="flex flex-col gap-6">
              <span className="flex items-center gap-4">
                <span className="w-5 h-10 bg-customred rounded-md "></span>
                <h3 className="font-poppins text-customred font-semibold">
                  This Month
                </h3>
              </span>
              <h3 className="font-inter font-semibold text-4xl">
                Best Selling products
              </h3>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex w-40 hover:bg-red-400 rounded-md h-14 text-white items-center justify-center bg-customred text-bse font-poppins">
              View All
            </button>
          </div>
        </div>
        <div className="flex gap-7 w-full  md:max-w-[1308px] xl:max-w-[1308px] overflow-clip ">
          <div className="w-[270px] h-[350px]  cursor-pointer ">
            <div className=" relative flex w-[270px] h-[250px] p-3 bg-customgray   justify-center rounded-md">
              <img
                className="w-[140px] h-[146px] -ml-5 mt-10  "
                src={coat}
                alt=""
              />
              <span className=" flex flex-col gap-2 absolute left-56 top-3 z-100">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img className="" src={heart} alt="" />
                </span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img src={view} alt="" />
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-poppins font-medium text-base">
                The north coat
              </p>
              <div className="flex gap-2">
                <span className="font-poppins font-medium text-base text-customred">
                  GHS 260
                </span>
                <span className="line-through font-poppins font-medium text-base text-textgray">
                  GHS 360
                </span>
              </div>
              <span className="flex gap-2 text-textgray">
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
                  className="size-6 "
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
                (65)
              </span>
            </div>
          </div>
          <div className="w-[270px] h-[350px] cursor-pointer  ">
            <div className="relative flex w-[270px] h-[250px] p-3 bg-customgray items-center   justify-center rounded-md">
              <img className="w-[178px] h-[129px]  " src={bag} alt="" />
              <span className=" flex flex-col gap-2 absolute left-56 top-3">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img className="" src={heart} alt="" />
                </span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img src={view} alt="" />
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-poppins font-medium text-base">
                Gucci duffle bag
              </p>
              <div className="flex gap-2">
                <span className="font-poppins font-medium text-base text-customred">
                  GHS 260
                </span>
                <span className="line-through font-poppins font-medium text-base text-textgray">
                  GHS 360
                </span>
              </div>
              <span className="flex gap-2 text-textgray">
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
                  className="size-6 "
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
                (65)
              </span>
            </div>
          </div>
          <div className="w-[270px] h-[350px] cursor-pointer  ">
            <div className=" relative flex w-[270px] h-[250px] p-3 bg-customgray  items-center  justify-center rounded-md">
              <img className="w-[191px] h-[95px]  " src={speaker} alt="" />
              <span className=" flex flex-col gap-2 absolute left-56 top-3 z-100">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img className="" src={heart} alt="" />
                </span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img src={view} alt="" />
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-poppins font-medium text-base">
                RGB liquid CPU Cooler
              </p>
              <div className="flex gap-2">
                <span className="font-poppins font-medium text-base text-customred">
                  GHS 160
                </span>
                <span className="line-through font-poppins font-medium text-base text-textgray">
                  GHS 170
                </span>
              </div>
              <span className="flex gap-2 text-textgray">
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
                  className="size-6 "
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
                (65)
              </span>
            </div>
          </div>
          <div className="w-[270px] h-[350px] cursor-pointer ">
            <div className="relative flex w-[270px] h-[250px] p-3 bg-customgray items-center  justify-center rounded-md">
              <img className="w-[140px] h-[176px] " src={bookshelve} alt="" />
              <span className=" flex flex-col gap-2 absolute left-56 top-3">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img className="" src={heart} alt="" />
                </span>
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <img src={view} alt="" />
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-poppins font-medium text-base">
                Small BookSelf
              </p>
              <div className="flex gap-2">
                <span className="font-poppins font-medium text-base text-customred">
                  GHS 360
                </span>
                <span className="hidden line-through font-poppins font-medium text-base text-textgray">
                  GHS 400
                </span>
              </div>
              <span className="flex gap-2 text-textgray">
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
                  className="size-6 "
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
                (65)
              </span>
            </div>
          </div>
        </div>
      </section></>
    )
}