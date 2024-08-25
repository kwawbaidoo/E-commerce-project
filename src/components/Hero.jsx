import { Link } from "react-router-dom";
import ShopEasy from '../assets/images/ShopEasy.png';

const Hero = () => {
  return (
    <div className="flex relative top-40 -z-10 flex-col pt-8 items-center justify-center">
      <div className="flex w-full md:max-w-[1170px] xl:max-w-[1170px] justify-between ">
       
        <div className="bg-black text-white flex flex-col justify-between border items-center w-full h-[310px]">
          <div className="flex w-[892px] justify-between items-center pl-16 pt-10">
            <div className="flex flex-col w-72 gap-5 mb-12">
              <h4 className="font-poppins text-5xl leading-[60px] font-semibold">
                Up to 10% off Voucher
              </h4>
              <h4 className="flex gap-2 text-base font-poppins font-light">
                Shop Now
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
              </h4>
            </div>
            <img className="w-[400px] mr-10 rounded-xl" src={ShopEasy} alt="Shop Easy" />
          </div>
          <div className="w-full flex items-center justify-center absolute top-[280px] gap-3">
            <a className="w-3 h-3 rounded-full bg-gray-500 hover:bg-customred hover:border hover:border-white" href=""></a>
            <a className="w-3 h-3 rounded-full bg-gray-500 hover:bg-customred hover:border hover:border-white" href=""></a>
            <a className="w-3 h-3 rounded-full bg-red-500 border border-white" href=""></a>
            <a className="w-3 h-3 rounded-full bg-gray-500 hover:bg-customred hover:border hover:border-white" href=""></a>
            <a className="w-3 h-3 rounded-full bg-gray-500 hover:bg-customred hover:border hover:border-white" href=""></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
