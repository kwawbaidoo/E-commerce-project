import phone from "../assets/images/CellPhone.png";
import camera from "../assets/images/Camera.png";
import computer from "../assets/images/Computer.png";
import gamePad from "../assets/images/Gamepadd.png";
import smartwatch from "../assets/images/SmartWatch.png";
import headphone from "../assets/images/Headphone.png";
import smartWatch from "../assets/smart-watch.svg";

const Category = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex gap-16 flex-col mt-20 w-full xl:max-w-[1170px] md:max-w-[1170px] lg:max-w-[1170px] ">
        <div className=" flex justify-between items-end">
          <div className=" flex flex-col gap-5 ">
            <span className="flex gap-4 items-center">
              <span className="w-5 h-10 bg-customred rounded-md"></span>
              <span className="font-poppins text-base font-semibold text-customred">
                categories
              </span>
            </span>
            <h3 className="font-inter font-semibold text-4xl text-black">
              Browse By Category
            </h3>
          </div>
          <div className="flex gap-2">
            <span className=" w-12 h-12 hover:bg-customred hover:text-white cursor-pointer rounded-full flex items-center justify-center bg-customgray">
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
            <span className="w-12 h-12 hover:bg-customred hover:text-white  rounded-full flex items-center justify-center bg-customgray">
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

        <div className=" flex gap-8">
          <a href="">
            <div className="flex gap-4 hover:bg-customred hover:text-white items-center justify-center flex-col w-44 h-36 rounded-md border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>

              <span>Phones</span>
            </div>
          </a>
          <a href="">
            <div className="flex gap-4 hover:bg-customred hover:text-white items-center justify-center flex-col w-44 h-36 rounded-md border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="size-14"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>

              <span>Computers</span>
            </div>
          </a>
          <a href="">
            <div className="flex gap-4 hover:bg-customred hover:text-white items-center justify-center flex-col w-44 h-36 rounded-md border">
              <img className="w-14 stroke-red-300" src={smartWatch} alt="" />
              
              <span>SmartWatch</span>
            </div>
          </a>
          <div className="flex text-white gap-4 hover:bg-customred hover:text-white items-center justify-center flex-col w-44 h-36 rounded-md bg-customred border">
            <img src={camera} alt="" />
            <span>Camera</span>
          </div>
          <div className="flex gap-4 hover:bg-customred hover:text-white items-center justify-center flex-col w-44 h-36 rounded-md border">
            <img src={headphone} alt="" />
            <span>HeadPhones</span>
          </div>
          <div className="flex gap-4 hover:bg-customred hover:text-white items-center justify-center flex-col w-44 h-36 rounded-md border">
            <img src={gamePad} alt="" />
            <span>Gaming</span>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <hr className="w-[1170px] border " />
        </div>
      </div>
    </section>
  );
};

export default Category;
