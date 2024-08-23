import React from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../helper/ProductsContext';

const ProductDetails = () => {
  const { id } = useParams(); // Assuming the route includes a product ID
  const { products } = useProduct();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { imageUrl, name, brand, description, price } = product;

  return (
    <div className="w-full h-full mx-auto my-10 p-4 mt-60">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image and Thumbnails */}
        <div className="flex-1">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="flex gap-2 mt-4">
            <img
              src={imageUrl}
              alt="Thumbnail 1"
              className="w-20 h-20 object-cover rounded-lg border cursor-pointer"
            />
            {/* Add more thumbnails if necessary */}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-xl font-bold text-orange-500 mt-2">GH &#8373;{price}</p>
          <p className="text-green-600 mt-1">In stock</p>
          <p className="text-gray-600 mt-4">{brand}</p>
          <p className="mt-4">{description}</p>
          <button className="mt-6 bg-black hover:bg-customred text-white px-6 py-2 rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold">Promotions</h2>
        <ul className="mt-2">
          <li>Enjoy cheaper delivery fees when you select a pickup station at checkout.</li>
          <li>Free Delivery in Accra for Orders above GHC120. Pick-up stations only!</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
