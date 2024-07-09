import React from "react";
import iconCustomerService from "../assets/images/Icon-Customer service.png";
import iconSecure from "../assets/images/Icon-secure.png";
import iconDelivery from "../assets/images/icon-delivery.png";

export default function CustomerService(){
    return(
        <div>

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
    )
}