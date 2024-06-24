import React from "react";
const TopHeader = () => {
  return (
    <div className="bg-black flex ">
      <div className="md:max-w-[859px] sm:max-w-96 xl:max-w-[859px] flex justify-between items-center">
        <span className="flex">
          <h3 className="text-sm font-normal font-poppins">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h3>
          <h4 className="font-poppins font-semibold text-sm">
            <a href="">Shop Now</a>
          </h4>
        </span>
        <span className="font-poppins font-normal text-sm gap-2 text-red-300">
          English
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default TopHeader;
