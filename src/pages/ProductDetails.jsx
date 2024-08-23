import { useParams } from 'react-router-dom';
import { useProduct } from '../helper/ProductsContext'; // Adjust path as needed
import { useState, useEffect } from 'react';
import { useCart } from "../helper/CartContext";


const ProductDetails = () => {
  const { cart, setCart } = useCart();
  const { id } = useParams();
  console.log('Product ID from URL:', id);
  const { products } = useProduct();
  const [product, setProduct] = useState(null);

  console.log('Products type:', typeof products); // Should be 'object' (as arrays are objects in JS)
console.log('Products:', products); 

  useEffect(() => {
    if (Array.isArray(products) && products.length > 0) {
      console.log('Is products an array:', Array.isArray(products))
      const fetchedProduct = products.find(product => product.id === id); // Adjust id type as needed
      console.log('Fetched Product:', fetchedProduct);
      setProduct(fetchedProduct);
    }
  }, [id, products]);
  


  if (!product) {
    return <div>Loading...</div>; // Or "Product not found" based on your preference
  }

  function addToCart(product) {
    const existingItem = cart.find((cartItem) => cartItem.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
  }

  return (
    <section className="p-4 mt-48">
      <div className="max-w-4xl mx-auto   rounded-lg overflow-hidden">
        <div className="flex">
          <img
            className="w-1/2 object-cover"
            src={product.imageUrl}
            alt={product.name}
          />
          <div className="p-6 flex flex-col justify-center  w-1/2">
            <h2 className="text-2xl font-bold mb-2">{product.brand}</h2>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold text-red-500">
                GH&#8373; {product.price}
              </span>
              <button
                onClick={() => addToCart()}
                className="bg-black text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Reviews</h3>
          <ul>
            {product.reviews?.length > 0 ? (
              product.reviews.map(review => (
                <li key={review.id} className="mb-4 p-4 border-b border-gray-200">
                  <h4 className="text-lg font-semibold">{review.user}</h4>
                  <p className="text-yellow-500">Rating: {review.rating}</p>
                  <p className="text-gray-700">{review.comment}</p>
                </li>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default ProductDetails;
