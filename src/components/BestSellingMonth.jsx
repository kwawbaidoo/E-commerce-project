import coat from "../assets/images/coat.png";
import bag from "../assets/images/bag.png";
import bookshelve from "../assets/images/bookshelve.png";
import speaker from "../assets/images/speaker.png";
import heart from "../assets/images/heart.png";
import boombox from "../assets/images/BOOMBOX 1.png";
import view from "../assets/images/view.png";
import dogfood from "../assets/images/dogfood.png";
import copaSense from "../assets/images/CopaSense 1.png";
import ecospeaker from "../assets/images/ecospeaker.png";
import GP from "../assets/images/GP.png";
import greencoat from "../assets/images/greencoat.png";
import camera250d from "../assets/images/camera250d.png";
import iconCustomerService from "../assets/images/Icon-Customer service.png";
import iconSecure from "../assets/images/Icon-secure.png";
import iconDelivery from "../assets/images/icon-delivery.png";
import MercedesKids from "../assets/images/MercedesKids.png";
import perfume from "../assets/images/perfume.png";
import PS5 from "../assets/images/ps5.png";
import womanhat from "../assets/images/womanhat.png";
import curology from "../assets/images/curology.png";
import ideapad from "../assets/images/ideapad.png";

const BestSellingMonth = () => {
  return (
    <div className="flex flex-col justify-center items-center  mt-36">
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
                Best Selling products{" "}
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
      </section>
      <div className="flex p-16 items-center justify-center gap-6 bg-black w-full xl:max-w-[1170PX] md:max-w-[1170px] lg:max-w-[1170px] mt-36">
        <div className="flex flex-col  xl:max-w-[443px] md:max-w-[443px] lg:max-w-[443px] ">
          <h4 className="font-poppins text-base font-semibold text-customgreen">
            Categories
          </h4>
          <h3 className="font-inter mt-8 mb-8 leading-[60px] font-semibold text-5xl text-white">
            Enhance Your Music Experience
          </h3>
          <div className="flex gap-6 mb-10">
            <span className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full">
              <h4 className="text-base font-poppins font-semibold">23</h4>
              <h4 className="text-[11px] font-poppins">Hours</h4>
            </span>
            <span className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full">
              <h4 className="text-base font-poppins font-semibold">05</h4>
              <h4 className="text-[11px] font-poppins">Days</h4>
            </span>
            <span className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full">
              <h4 className="text-base font-poppins font-semibold">59</h4>
              <h4 className="text-[11px] font-poppins">Minutes</h4>
            </span>
            <span className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full">
              <h4 className="text-base font-poppins font-semibold">35</h4>
              <h4 className="text-[11px] font-poppins">Seconds</h4>
            </span>
          </div>
          <span className="flex  ">
            <button className="bg-customgreen hover:bg-red-400 text-white text-center text-base px-12 py-4 rounded-md font-inter">
              Buy Now!
            </button>
          </span>
        </div>
        <div className=" flex  w-[600px] h-[420px] items-center justify-center">
          <span className="absolute z-10 w-[304px] h-[300px] blur-[200px] bg-customgray rounded-full"></span>
          <img
            className="relative w-[568px] h-[330px] z-20"
            src={boombox}
            alt=""
          />
        </div>
      </div>

      <section className="flex gap-[60px] flex-col w-full mt-[71px] md:max-w-[1170px] xl:max-w-[1170px] lg:max-w-[1170px]">
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
      <section className="flex flex-col gap-[60px]  mt-36 w-full xl:max-w-[1170px] md:max-w-[1170px] lg:max-w-[1170px]">
        <div className="flex flex-col gap-5 ">
          <span className="flex items-center gap-4">
            <span className="w-5 h-10 rounded-md bg-customred"></span>
            <h3 className="font-poppins font-semibold text-base text-customred">
              Featured
            </h3>
          </span>
          <h3 className="font-inter font-semibold text-4xl">New Arrival</h3>
        </div>

        <div className="flex  gap-8">
          <div className="flex items-end justify-center w-[570px] h-[600px] bg-black rounded-s rounded-e">
            <img className="  w-[511px] h-[511px]" src={PS5} alt="" />
            <span className="absolute -ml-64 mb-6 w-full max-w-[242px] flex gap-4 flex-col z-10 text-white">
              <span className="flex flex-col gap-4">
                <h3 className="font-inter font-semibold text-2xl">
                  PlayStation 5
                </h3>
                <p className="font-poppins text-sm">
                  Black and White version of the PS5 coming out on sale.
                </p>
              </span>
              <h3 className="font-poppins font-medium text-base ">
                Shop Now
                <hr className="w-[81px] border-textgray " />
              </h3>
            </span>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex relative justify-end w-[570px] h-[284px] rounded-[4px] border bg-customblack">
              <span className="absolute left-6 top-32 z-10  w-full max-w-[242px] flex gap-4 flex-col  text-white">
                <span className="flex flex-col gap-4">
                  <h3 className="font-inter font-semibold text-2xl">
                    Women’s Collections
                  </h3>
                  <p className="font-poppins text-sm">
                    Featured woman collections that give you another vibe.
                  </p>
                </span>
                <h3 className="font-poppins font-medium text-base ">
                  Shop Now
                  <hr className="w-[81px] border-textgray " />
                </h3>
              </span>
              <img
                className="rounded-br-[4px] rounded-tr-[4px]"
                src={womanhat}
                alt=""
              />
            </div>
            <div className=" flex gap-[30px]">
              <div className="flex relative items-center justify-center w-[270px] h-[284px] rounded-[4px] bg-customblack">
                <span className="absolute z-10 w-[196px] h-[196px] bg-customblur blur-[300px] "></span>
                <img className=" relative z-20" src={ecospeaker} alt="" />
                <span className="absolute left-6 top-[170px]  z-30  w-full max-w-[242px] flex gap-2 flex-col  text-white">
                  <span className="flex flex-col gap-2">
                    <h3 className="font-inter font-semibold text-2xl">
                      Speakers
                    </h3>
                    <p className="font-poppins font-normal text-sm">
                      Amazon wireless speakers
                    </p>
                  </span>
                  <h3 className="font-poppins font-medium text-base ">
                    Shop Now
                    <hr className="w-[81px] border-textgray " />
                  </h3>
                </span>
              </div>
              <div className="flex relative items-center justify-center w-[270px] h-[284px] rounded-[4px] bg-customblack">
                <span className="absolute z-10 w-[196px] h-[196px] bg-customblur blur-[200px] border"></span>
                <img className="relative z-20" src={perfume} alt="" />
                <span className="absolute left-6 top-[170px]  z-30  w-full max-w-[242px] flex gap-2 flex-col  text-white">
                  <span className="flex flex-col gap-2">
                    <h3 className="font-inter font-semibold text-2xl">
                      Perfume
                    </h3>
                    <p className="font-poppins font-normal text-sm">
                      GUCCI INTENSE OUD EDP
                    </p>
                  </span>
                  <h3 className="font-poppins font-medium text-base ">
                    Shop Now
                    <hr className="w-[81px] border-textgray " />
                  </h3>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-32 flex items-center justify-center">
        <div className="flex gap-[88px]  w-[943px] ">
            <div className="flex items-center justify-center flex-col gap-6 ">
                <span className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className=" w-16 h-16 rounded-full bg-customblack flex items-center justify-center">
                        <img className="w-10 h-10 rounded-full" src={iconDelivery} alt="" />
                    </span>
                </span>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h3 className="font-poppins font-semibold text-xl">FREE AND FAST DELIVERY</h3>
                    <h3 className="font-poppins font-normal text-xs">Free delivery for all orders over GHS 140</h3>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-6">
                <span className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className=" w-16 h-16 rounded-full bg-customblack flex items-center justify-center">
                        <img className="w-10 h-10 rounded-full" src={iconCustomerService} alt="" />
                    </span>
                </span>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h3 className="font-poppins font-semibold text-xl">24/7 CUSTOMER SERVICE</h3>
                    <h3 className="font-poppins font-normal text-xs">Friendly 24/7 customer support</h3>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-6 ">
                <span className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className=" w-16 h-16 rounded-full bg-customblack flex items-center justify-center">
                        <img className="w-10 h-10 rounded-full" src={iconSecure} alt="" />
                    </span>
                </span>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="font-poppins font-semibold text-xl">MONEY BACK GUARANTEE</h3>
                    <h3 className="font-poppins font-normal text-xs">We reurn money within 30 days</h3>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default BestSellingMonth;
