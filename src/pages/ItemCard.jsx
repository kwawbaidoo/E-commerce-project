import Headphone from '../assets/images/ideapad.png'
import { Link } from 'react-router-dom';

const ItemCard = ({id, image,name,price, addToCart, brand, description}) => {
  return (
    <>
      <section className="flex p-3 justify-center items-center mt-4">
      <div className=' w-[250px] h-[300px]'>
        <Link className=" flex h-[300px] w-[250px] justify-between flex-col hover:shadow-md hover:bg-slate-50 bg-customgray cursor-pointer rounded-md">
          <div className="flex relative align-content-center justify-center   w-full">
            <img
              className="w-[150px] h-[150px] -ml-5 mt-10 p-5"
              src={image}
              alt={name}
            />
            <span className=" flex flex-col gap-2">
              <Link to={`/productdetails/${id}`} className="w-8 h-8 absolute right-3 top-3 rounded-full bg-white flex items-center justify-center">
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
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-1 ps-2 w-full">
            <p className="font-poppins font-medium w-full max-w-50 text-xs">
              {name}
            </p>
            
            <div className="flex gap-2 ">
              <span className="font-poppins font-medium text-base text-customred">
                GH&#8373; {price}
              </span>
              <span className="line-through font-poppins font-medium text-base text-textgray">
                GH&#8373; {price}
              </span>
            </div>
          </div>
          <button onClick={addToCart} className="bg-black flex items-center justify-center -mb-4 w-full p-3 text-white font-poppins text-base rounded-bl-lg rounded-br-lg hover:bg-customred">
            Add to cart
          </button>
          </Link>
        </div>
      </section> 
    </>
  );
};

export default ItemCard;
