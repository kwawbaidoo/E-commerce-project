import AppStore from "../assets/icons/AppStore.png";
import GooglePlay from "../assets/icons/GooglePlay.png";
import IconFacebook from "../assets/icons/Icon-Facebook.png";
import iconInstagram from "../assets/icons/icon-instagram.png";
import IconLinkedin from "../assets/icons/Icon-Linkedin.png";
import IconTwitter from "../assets/icons/Icon-Twitter.png";
import Qrcode from "../assets/icons/Qrcode.png";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Footer = () => {
  return (
    <div className="flex bg-customblack px-[135px] py-20 items-center justify-center mt-40">
      <div className="flex gap-[87px] w-full xl:max-w-[1170px] md:max-w-[1170px] lg:max-w-[1170px]  ">
        <div className="flex flex-col max-w-[217px] gap-4 text-white ">
          <span className="flex flex-col gap-6">
            <h3 className="font-inter text-2xl font-bold">Exclusive</h3>
            <h3 className="text-xl font-poppins font-light ">Subscribe</h3>
            <h3 className="text-base font-poppins font-light"> Get 10% off your first order</h3>
          </span>
          <span className="flex w-[217px] h-12 text-customgray border rounded-[4px] items-center gap-8 pl-4 py-3">
            <input
              className="w-[130px] h-6 bg-transparent text-base font-poppins font-light"
              type="text"
              placeholder="Enter your email"
            />
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
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col w-[175px] gap-4 text-white ">
            <h3 className="font-poppins text-xl font-semibold">Support</h3>
            <span className="flex flex-col gap-4 font-poppins font-light text-base">
                <h3>Behind GBC - Winneba,  Lancaster street</h3>
                <h3>shopeasy@gmail.com</h3>
                <h3>+233 201 236 413</h3>
            </span>
        </div>
        <div className="flex flex-col w-[130px] gap-6 text-white ">
            <h3 className="font-poppins text-xl font-semibold">Account</h3>
            <span className="flex flex-col gap-4 font-poppins font-light text-base">
                <h3>My Account</h3>
                <h3><a href="Login">Login</a> / <a href="Signup">Register</a></h3>
                <h3>Cart</h3>
                <h3>Wishlist</h3>
                <h3>Shop</h3>
            </span>
        </div>
        <div className="flex flex-col w-[109px]  gap-6 text-white ">
            
            <span className="flex flex-col gap-6 font-poppins font-normal text-base">
            <h3 className="font-poppins text-xl font-semibold">Quick Link</h3>
                <span className="flex flex-col text-base font-poppins font-light gap-2">
                <h3>Privacy Policy</h3>
                <h3>Terms Of Use</h3>
                <h3>FAQ</h3>
                <h3>Contact</h3>
                </span>
            </span>
        </div>
        <div className="flex flex-col w-[198px]  gap-6 text-white ">
            <h3 className="font-poppins text-xl font-semibold">Download App</h3>
            <span className="flex flex-col gap-4 ">
                <h3 className="font-poppins font-normal text-xs">Save $3 with App New User Only</h3>
                <span className="flex gap-2">
                    <img className="w-[76px] h-[76px]" src={Qrcode} alt="" />
                    <span className="flex flex-col">
                        <img className="w-[110px] h-10" src={GooglePlay} alt="" />
                        <img className="w-[110px] h-10"  src={AppStore} alt="" />
                    </span>
                </span>
            </span>
            <span className="flex gap-6">
                <img src={IconFacebook} alt="" />
                <img src={IconTwitter} alt="" />
                <img src={iconInstagram} alt="" />
                <img src={IconLinkedin} alt="" />
            </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
