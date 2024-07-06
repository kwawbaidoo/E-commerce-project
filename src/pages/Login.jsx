import { Link } from "react-router-dom";
import market from "../assets/images/marketpng.png";
const Login = () => {


  return (
    <div className=" flex items-center justify-center">
      <div className="w-full flex gap-[129px] items-center justify-center  xl:max-w-[1305px] lg:max-w-[1305px] md:max-w-[1305px] mt-16 ">
        <div className="bg-customseablue w-[500px] h-[400px] flex items-end justify-center rounded-bl-3xl rounded-tr-3xl">
          <img src={market} alt="" className="rounded-bl-3xl rounded-tr-3xl" />
        </div>
        <div className="w-[371px] h-[530px] flex flex-col gap-12  ">
          <span className="flex flex-col gap-6">
            <h3 className="font-inter font-mediLum text-4xl leading-3 text-black mt-20">
              Log in to ShopEasy
            </h3>
            <h3 className="font-poppins font-normal text-base">
              Enter your details below
            </h3>
          </span>
          <form className="flex flex-col gap-10">
            <input
              className="h-8  border-b-2 outline-none"
              type="text"
              placeholder="Email"
              required
            />
            <input
              className="h-8  border-b-2 outline-none"
              type="password"
              placeholder="Password"
              required
            />
          <span className="flex justify-between items-center">
            <button className="flex hover:bg-red-500 items-center justify-center w-36 bg-blue-500 h-14 rounded-md text-white text-base font-poppins font-medium">
              Log in
            </button>
            <h4 className="text-customred font-poppins text-base font-light">
              <Link to="" className="underline">Forget Password</Link>
            </h4>
          </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
