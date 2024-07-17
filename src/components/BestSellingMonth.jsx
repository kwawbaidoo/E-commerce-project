
import boombox from "../assets/images/BOOMBOX 1.png";
import ecospeaker from "../assets/images/ecospeaker.png";
import perfume from "../assets/images/perfume.png";
import PS5 from "../assets/images/ps5.png";
import womanhat from "../assets/images/womanhat.png";
import CustomerService from '../components/CustomerService';
import OurProducts from '../components/Ourproducts';
import BestSelling from '../components/BestSelling';

const BestSellingMonth = () => {
  return (
    <div className="flex flex-col justify-center items-center  mt-36">
      <BestSelling/>
      <div className="flex p-16 -z-10 items-center justify-center gap-6 bg-black w-full xl:max-w-[1170PX] md:max-w-[1170px] lg:max-w-[1170px] mt-36">
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

      <OurProducts />
     
      <section className="flex flex-col gap-[60px] -z-10  mt-36 w-full xl:max-w-[1170px] md:max-w-[1170px] lg:max-w-[1170px]">
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
        <CustomerService/>
    </div>
  );
};

export default BestSellingMonth;
