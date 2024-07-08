import gamepad from "../assets/images/gamePad.png";
import heart from "../assets/images/heart.png";
import view from "../assets/images/view.png";
import keyboard from '../assets/images/keyboard.png'
import monitor from "../assets/images/screen.png";
import chair from '../assets/images/chair.png'
const Flashsales = () => {
  return (
    <div className="flex justify-center items-center  mt-36">
      <section className="flex ml-36 flex-col gap-10 justify-center w-full xl:max-w-[1308px] md:max-w-[1308px]  ">
        <div className="flex items-end justify-between xl:max-w-[1170px] md:max-w-[1170px] lg:max-w-[1170px]">
        <div className="flex  xl:max-w-[600px] md:max-w-[600px] justify-between gap-[87px] ">
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-4">
              <span className="w-5 h-10 bg-customred rounded-md "></span>
              <h3 className="font-poppins text-customred font-semibold">
                Today's
              </h3>
            </span>
            <h3 className="font-inter font-semibold text-4xl">Flash Sales</h3>
          </div>

          <div className="flex items-end justify-between gap- ">
            <span className="flex flex-col items- gap-1 mr-4 ">
              <h3 className="text-xs font-poppins font-medium">Days</h3>
              <h3 className="text-3xl font-inter font-bold">03</h3>
            </span>
            <h3 className="text-5xl text-custometimecolor mr-4 mb-1">:</h3>
            <span className="flex flex-col items-  gap-1 mr-4 ">
              <h3 className="text-xs font-poppins font-medium">Hours</h3>
              <h3 className="text-3xl font-inter font-bold">23</h3>
            </span>
            <h3 className=" text-5xl text-custometimecolor mr-4 mb-1">:</h3>
            <span className="flex flex-col items-star justify-between gap-1 mr-4 ">
              <h3 className="text-xs font-poppins font-medium">Minutes</h3>
              <h3 className="text-3xl font-inter font-bold">19</h3>
            </span>
            <h3 className="text-5xl text-custometimecolor mr-4 mb-1">:</h3>
            <span className="flex flex-col items- gap-1 ">
              <h3 className="text-xs font-poppins font-medium">Seconds</h3>
              <h3 className="text-3xl font-inter font-bold">56</h3>
            </span>
          </div>
         
        </div>
        <div className="flex gap-2">
            <span className=" w-12 h-12 hover:bg-customred cursor-pointer hover:text-white rounded-full flex items-center justify-center bg-customgray">
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
            <span className="w-12 h-12 hover:bg-customred hover:text-white cursor-pointer rounded-full flex items-center justify-center bg-customgray">
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
       <div className="flex gap-7 w-full  md:max-w-[1308px] xl:max-w-[1308px] overflow-clip ">
       <div className="w-[270px] h-[350px]  cursor-pointer">
          <div className=" flex w-[270px] h-[250px] p-3 bg-customgray  justify-center rounded-md">
            <h4 className="w-14 h-7 rounded-md bg-customred text-white items-center flex justify-center text-xs font-poppins">
              -40%
            </h4>
            <img
              className="w-[172px] h-[152px] -ml-5 mt-10  "
              src={gamepad}
              alt=""
            />
            <span className=" flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img className="" src={heart} alt="" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img src={view} alt="" />
              </span>
            </span>
          </div>
         <div className="flex flex-col gap-2 mt-2">
         <p className="font-poppins font-medium text-base">HAVIT HV-G92 Gamepad</p>
          <div className="flex gap-2">
            <span className="font-poppins font-medium text-base text-customred">GHS 120</span>
            <span className="line-through font-poppins font-medium text-base text-textgray">GHS 160</span>
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
            (88)
          </span>
         </div>
        </div>
        <div className="w-[270px] h-[350px] cursor-pointer ">
          <div className=" flex flex-col w-[270px] h-[250px] p-3 bg-customgray items-center  justify-between rounded-md">
           <div className="flex">
           <h4 className="w-14 h-7 rounded-md bg-customred text-white items-center flex justify-center text-xs font-poppins">
              -35%
            </h4>
            <img
              className="w-[191px] h-[101px] -ml-5 mt-10  "
              src={keyboard}
              alt=""
            />
            <span className=" flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img className="" src={heart} alt="" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img src={view} alt="" />
              </span>
            </span>
           </div>
            <div className="bg-black flex items-center justify-center -mb-3 w-[270px] h-10 text-white font-poppins text-base rounded-bl-lg rounded-br-lg hover:bg-customred">Add to cart</div>
          </div>
         <div className="flex flex-col gap-2 mt-2">
         <p className="font-poppins font-medium text-base">AK-900 Wired Keyboard</p>
          <div className="flex gap-2">
            <span className="font-poppins font-medium text-base text-customred">GHS 960</span>
            <span className="line-through font-poppins font-medium text-base text-textgray">GHS 1160</span>
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
              fill="#7D8184"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="textgray"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            (75)
          </span>
         </div>
        </div>
        <div className="w-[270px] h-[350px] cursor-pointer ">
          <div className=" flex w-[270px] h-[250px] p-3 bg-customgray  justify-center rounded-md">
            <h4 className="w-14 h-7 rounded-md bg-customred text-white items-center flex justify-center text-xs font-poppins">
              -30%
            </h4>
            <img
              className="w-[172px] h-[152px] -ml-5 mt-10  "
              src={monitor}
              alt=""
            />
            <span className=" flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img className="" src={heart} alt="" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img src={view} alt="" />
              </span>
            </span>
          </div>
         <div className="flex flex-col gap-2 mt-2">
         <p className="font-poppins font-medium text-base">IPS LCD Gaming Monitor</p>
          <div className="flex gap-2">
            <span className="font-poppins font-medium text-base text-customred">GHS 370</span>
            <span className="line-through font-poppins font-medium text-base text-textgray">GHS 400</span>
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
            (99)
          </span>
         </div>
        </div>
        <div className="w-[270px] h-[350px]cursor-pointer cursor-pointer  ">
          <div className=" flex w-[270px] h-[250px] p-3 bg-customgray  justify-center rounded-md">
            <h4 className="w-14 h-7 rounded-md bg-customred text-white items-center flex justify-center text-xs font-poppins">
              -25%
            </h4>
            <img
              className="w-[172px] h-[152px] -ml-5 mt-10  "
              src={chair}
              alt=""
            />
            <span className=" flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img className="" src={heart} alt="" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img src={view} alt="" />
              </span>
            </span>
          </div>
         <div className="flex flex-col gap-2 mt-2">
         <p className="font-poppins font-medium text-base">S-Series Comfort Chair </p>
          <div className="flex gap-2">
            <span className="font-poppins font-medium text-base text-customred">GHS 375</span>
            <span className="line-through font-poppins font-medium text-base text-textgray">GHS 400</span>
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
            (99)
          </span>
         </div>
        </div>
        <div className="w-[270px] h-[350px] cursor-pointer  ">
          <div className=" flex w-[270px] h-[250px] p-3 bg-customgray  justify-center rounded-md">
            <h4 className="w-14 h-7 rounded-md bg-customred text-white items-center flex justify-center text-xs font-poppins">
              -25%
            </h4>
            <img
              className="w-[172px] h-[152px] -ml-5 mt-10  "
              src={chair}
              alt=""
            />
            <span className=" flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img className="" src={heart} alt="" />
              </span>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img src={view} alt="" />
              </span>
            </span>
          </div>
         <div className="flex flex-col gap-2 mt-2">
         <p className="font-poppins font-medium text-base">S-Series Comfort Chair</p>
          <div className="flex gap-2">
            <span className="font-poppins font-medium text-base text-customred">GHS 375</span>
            <span className="line-through font-poppins font-medium text-base text-textgray">GHS 400</span>
          </div>
          <span className="flex gap-2">
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
            (99)
          </span>
         </div>
        </div>
       
       
     

       </div>
       <div className="flex items-center justify-center mt-16">
       <button className="bg-customred hover:bg-red-400 rounded-md px-10 py-4 text-white w-[234px] flex items-center justify-center text-base font-poppins font-medium">View all products</button>

       </div>
       <div className="flex w-full items-center mt-16">
        <hr  className="w-[1170px] border "/>
       </div>
      </section>
    </div>
  );
};

export default Flashsales;
