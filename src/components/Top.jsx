const Top =()=>{
    return(
        <div className="bg-black flex items-center justify-center  w-full h-12 pl-[445px] pr-[136px] ">
        <div className="w-full md:max-w-[859px] sm:max-w-96 xl:max-w-[859px] flex justify-between items-center ">
          <span className="flex gap-2">
            <h3 className="text-sm font-normal font-poppins text-white">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </h3>
            <h4 className="font-poppins font-semibold text-sm text-white">
              <a className="underline" href="">Shop Now</a>
            </h4>
          </span>
          <span className="flex items-center font-poppins font-normal text-sm gap-2  text-white">
            English
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4"
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
    )
}

export default Top;