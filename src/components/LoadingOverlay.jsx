import React, { useState, useEffect } from 'react';
import ShopEasy from '../assets/images/ShopEasy.png'

const LoadingOverlay = () => {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  const closeOverlay = () => {
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full  h-full bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white w-96  border p-8 rounded-lg z-50 shadow-lg flex flex-col items-center gap-5">
          <h2 className="text-xl font-bold mb-4">Welcome to</h2>
          <img className='w-40' src={ShopEasy} alt="" />
          
          <p className="text-sm mb-4">Our customer service are available 24/7</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
            onClick={closeOverlay}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Render null when loading is complete
  return null;
};

export default LoadingOverlay;
