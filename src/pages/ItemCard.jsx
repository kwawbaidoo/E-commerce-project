

const ItemCard = ({imageUrl,name,price, addToCart, brand}) => {
  console.log('Image URL:', imageUrl);
  return (
    <>
      <section className="flex justify-center items-center mt-4">
        <div className=" flex flex-col w-[380px] h-[430px] hover:shadow-md hover:bg-slate-50 bg-customgray cursor-pointer items-center  justify-evenly rounded-md">
          <div className="flex relative align-content-center justify-center   w-full">
            <img
              className="w-auto h-60 -ml-5 mt-10"
              src={imageUrl  || 'path/to/fallback-image.png'}
              alt={name}
            />
            <span className=" flex flex-col gap-2">
              <span className="w-8 h-8 absolute right-3 top-3 rounded-full bg-white flex items-center justify-center">
                {/* <img className="" src={view} alt="" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hover:stroke-white"
                >
                  <path
                    d="M15.58 12c0 1.98-1.6 3.58-3.58 3.58S8.42 13.98 8.42 12s1.6-3.58 3.58-3.58 3.58 1.6 3.58 3.58Z"
                    stroke="#FF8A65"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19 2.29 3.6 5.58 5.68 9.11 5.68Z"
                    stroke="#FF8A65"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-1 mt-2 p-2 w-full">
            <p className="font-poppins font-medium text-base">
              {name}
            </p>
            <p className="font-poppins font-medium text-base">
              {brand}
            </p>
            <div className="flex gap-2">
              <span className="font-poppins font-medium text-base text-customred">
                {price}
              </span>
              <span className="line-through font-poppins font-medium text-base text-textgray">
                {price}
              </span>
            </div>
          </div>
          <button onClick={addToCart} className="bg-black flex items-center justify-center -mb-3 w-full h-10 text-white font-poppins text-base rounded-bl-lg rounded-br-lg hover:bg-customred">
            Add to cart
          </button>
        </div>
      </section>
    </>
  );
};

export default ItemCard;
