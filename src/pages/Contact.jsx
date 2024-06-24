import { useState } from "react";
import { useLocation } from "react-router-dom";
const Contact = () => {
  const [hasText, setHasText] = useState(false);
  const [hasEmailText, setEmailHasText] = useState(false);
  const [hasPhoneText, setPhoneHasText] = useState(false);

  const location = useLocation();
  let path = location.pathname.slice(1);
  let paths = path.charAt(0).toUpperCase() + path.slice(1);


  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col xl:max-w-[1170px] lg:max-w-[1170px] md:max-w-[1170px] gap-20">
        <div>
          <h3>Home / <span className="text-customred" >{paths}</span></h3>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-8">
            <div className="flex flex-col w-[340px] h-[457px] bg-white rounded-md items-center justify-center px-10 py-10   shadow-lg">
              <div className="flex flex-col gap-8">
                <span className="flex flex-col gap-6 ">
                  <h3 className="flex gap-4 items-center ">
                    <span className="flex w-10 h-10 rounded-full bg-customred items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="size-5 "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                    </span>
                    <h4>Call to us</h4>
                  </h3>

                  <span className="flex flex-col gap-4">
                    <h3>We are available 24/7, 7 days a week.</h3>
                    <h3>Phone: +233 201236413</h3>
                  </span>
                </span>
                <hr className="border" />
                <div className="flex flex-col gap-6 ">
                  <h3 className="flex gap-4 items-center">
                    <span className="flex w-10 h-10 rounded-full bg-customred items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </span>
                    <h4>Write to us</h4>
                  </h3>
                  <div className="flex flex-col gap-4">
                    <h4>
                      Fill out our form and we will contact you within 24 hours.
                    </h4>
                    <h4>Emails: customer@exclusive.com</h4>
                    <h4>Emails: support@exclusive.com</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[800px] h-[457px] flex py-10 px-8 shadow-md gap-8 flex-col">
            
           <div className=" flex gap-4 ">
           <div className="relative w-[235px]">
              <label
                htmlFor="name"
                className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all ${
                  hasText ? "-top-2  text-xs" : ""
                }`}
              >
                Your Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                className="w-full h-[50px] bg-customgray pl-4 outline-none pt-4 pb-1"
                type="text"
                placeholder=" "
                onChange={(e) => setHasText(e.target.value !== "")}
              />
            </div>

            <div className="relative w-[235px]">
              <label
                htmlFor="email"
                className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all ${
                  hasEmailText ? "-top-2  text-xs" : ""
                }`}
              >
                Your Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                className="w-full h-[50px] bg-customgray pl-4 outline-none pt-4 pb-1"
                type="email"
                placeholder=" "
                onChange={(e) => setEmailHasText(e.target.value !== "")}
              />
            </div>

            <div className="relative w-[235px]">
              <label
                htmlFor="phone"
                className={`absolute left-4 top-6 transform -translate-y-1/2 text-gray-500 pointer-events-none transition-all ${
                  hasPhoneText ? "-top-2  text-xs" : ""
                }`}
              >
                Your Phone<span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                className="w-full h-[50px] bg-customgray pl-4 outline-none pt-4 pb-1"
                type="phone"
                placeholder=" "
                onChange={(e) => setPhoneHasText(e.target.value !== "")}
              />
            </div>
           </div>

                <textarea className="w-[737px] h-[207px] p-4 bg-customgray outline-none" name="" id="" placeholder="Your Message"></textarea>

                <div className="flex justify-end">
                  <button className="bg-customred px-12 py-4 rounded-md text-white">Send Message</button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
