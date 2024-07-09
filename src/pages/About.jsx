import React from "react";
import sideimage from "..//assets/images/SideImage.png";
import kwawImage from "../assets/images/kwaw.png";
import { useLocation } from "react-router-dom";
import shop from "../assets/icons/shop.png";
import Shoppingbag from "../assets/icons/Shopping bag.png";
import moneybag from "../assets/icons/Moneybag.png";
import richmond from "../assets/images/Richmond.png";
import headphone from "../assets/images/Icon-Customer service.png";
import delivery from "../assets/images/icon-delivery.png";
import secure from "../assets/images/Icon-secure.png";
import sale from "../assets/images/dollar.png";

const About = () => {
  const data = [
    { icon: shop, number: 5, details: "Sallers active on our site" },
    { icon: sale, number: 33, details: "Monthly monthly Sale" },
    { icon: Shoppingbag, number: 5, details: "Customers active on our site" },
    { icon: moneybag, number: 5, details: "Anual gross sale in our site" },
  ];

  const team = [
    {
      image:richmond,
      name: "Richmond Forkuo Afram",
      role: "Marketing Manager",
      iconOne: "bxl-twitter",
      iconTwo: "bxl-instagram-alt",
      iconThree: "bxl-linkedin-square",
      linkOne: "link1",
      linkTwo: "link2",
      linkThree: "link3",
    },
    {
      image: kwawImage,
      name: "Francis Baidoo",
      role: "Managing Director",
      iconOne: "bxl-twitter",
      iconTwo: "bxl-instagram-alt",
      iconThree: "bxl-linkedin-square",
      linkOne: "link1",
      linkTwo: "link2",
      linkThree: "link3",
    },
  ];

 
  console.log(data);

  const location = useLocation();
  let path = location.pathname.slice(1);
  let paths = path.charAt(0).toUpperCase() + path.slice(1);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full xl:max-w-[1305px] ml-36 flex items-start">
        <h3>
          Home / <span className="text-customred">{paths}</span>
        </h3>
      </div>

      <div className="flex w-full xl:max-w-[1306px] gap-20 items-center ml-36 ">
        <div className="xl:max-w-[525px] ">
          <div className="flex flex-col gap-10">
            
            <span>
            <em className="font-bold">Our Story</em>
              <p>
                Launced in 2024, ShopEasy is Ghanaian’s premier online
                shopping makterplace with an active presense in Winneba.
                Supported by wide range of tailored marketing, data and service
                solutions, ShopEasy has 1500 customers across the UEW campus.
              </p>
              <p>
              ShopEasy has more than 1 Million products to offer, growing at
                a very fast. ShopEasy offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </span>
          </div>
        </div>

        <div>
          <img className="w-[505px] h-[409px] shadow-lg shadow-slate-500" src={sideimage} alt="" />
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-36">
        <div className="w-full xl:max-w-[1170px] md:max-[1170px] lg:max-w-[1170px] flex gap-8 ">
          {data.map((item, key) => (
            <div
              key={key}
              className="border w-[270px] h-[230px] rounded-md flex items-center justify-center hover:bg-customred hover:text-white"
            >
              <div className="flex flex-col gap-6 items-center justify-center">
                <span className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="flex w-14 h-14 rounded-full bg-black items-center justify-center">
                    <img className="w-6" src={item.icon} alt="" />
                  </span>
                </span>

                <div className="flex flex-col gap-3 items-center justify-center">
                  <span>
                    {item.number}
                    <span>k</span>
                  </span>
                  <h5>{item.details}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-36 gap-20 w-full items-center justify-center ">
        {team.map((item, key) => (
          <div key={key} className="flex flex-col w-[236px] rounded-md ">
            <div className="w-[236px] h-[321px] bg-teambg rounded-lg shadow-lg">
              <img className="w-[236px] h-[321px]" src={item.image} alt="" />
            </div>
            <span className="flex flex-col gap-4 mt-8">
              <span className="flex flex-col gap-2">
                <h3>{item.name}</h3>
                <h3>{item.role}</h3>
              </span>
              <span className="flex gap-4 ">
                <a
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
                  href={item.linkOne}
                >
                  <i class={`bx ${item.iconOne} text-2xl`}></i>
                </a>
                <a
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
                  href={item.linkTwo}
                >
                  <i class={`bx ${item.iconTwo} text-2xl`}></i>
                </a>
                <a
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white"
                  href={item.linkThree}
                >
                  <i class={`bx ${item.iconThree} text-2xl`}></i>
                </a>
              </span>
            </span>
          </div>
        ))}
      </div>
      <section className="mt-32 flex items-center justify-center">
        <div className="flex gap-[88px]  w-[943px] ">
            <div className="flex items-center justify-center flex-col gap-6 ">
                <span className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className=" w-16 h-16 rounded-full bg-customblack flex items-center justify-center">
                        <img className="w-10 h-10 rounded-full" src={delivery} alt="" />
                    </span>
                </span>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h3 className="font-poppins font-semibold text-xl">FREE AND FAST DELIVERY</h3>
                    <h3 className="font-poppins font-normal text-sm">Free delivery for all orders over $140</h3>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-6">
                <span className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className=" w-16 h-16 rounded-full bg-customblack flex items-center justify-center">
                        <img className="w-10 h-10 rounded-full" src={headphone} alt="" />
                    </span>
                </span>
                <div className="flex flex-col gap-2 items-center justify-center">
                    <h3 className="font-poppins font-semibold text-xl">24/7 CUSTOMER SERVICE</h3>
                    <h3 className="font-poppins font-normal text-sm">Friendly 24/7 customer support</h3>
                </div>
            </div>
            <div className="flex items-center justify-center flex-col gap-6 ">
                <span className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className=" w-16 h-16 rounded-full bg-customblack flex items-center justify-center">
                        <img className="w-10 h-10 rounded-full" src={secure} alt="" />
                    </span>
                </span>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="font-poppins font-semibold text-xl">MONEY BACK GUARANTEE</h3>
                    <h3 className="font-poppins font-normal text-sm">We reurn money within 30 days</h3>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
};

export default About;
