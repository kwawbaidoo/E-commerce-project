import React from 'react';
import { useCart } from '../helper/CartContext'; // Import useCart hook
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart } = useCart(); // Use the useCart hook to get cart and setCart

  if (!Array.isArray(cart)) {
    console.error('Cart is not an array');
    return <div className="mt-60">Invalid cart data</div>; // Handle invalid cart data
  }

  const handleQuantityChange = (id, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ); 

  const shipping = 0; // Assuming free shipping

  return (
    <div className="p-4 mt-60 flex flex-col gap-10 items-center ">
      <div className="overflow-x-auto w-[1170px] ">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,key) => (
              <tr key={key}>
                <td className="border px-4 py-2 flex items-center">
                  <img
                    src={item?.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <span>{item.name}</span>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="ml-5 text-red-500 text-2xl border w-6 h-6 flex items-center justify-center rounded-full shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17"
                        stroke="#DB4444"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </td>
                <td className="border px-4 py-2 text-center">${item.price}</td>
                <td className="border px-4 py-2 text-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value, 10))
                    }
                    className="border rounded w-16 h-10 text-center"
                  />
                </td>
                <td className="border px-4 py-2 text-center">
                ${(item.price * item.quantity).toFixed(2)}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between w-[1170px] ">
        <Link to="/">
        <button className="bg-gray-200 px-4 py-2 rounded">
          Return To Shop
        </button>
        </Link>
        <button className="bg-gray-200 px-4 py-2 rounded">Update Cart</button>
      </div>

      <div className="flex justify-end w-[1170px]">
        <div className="mt-4 p-4 border flex flex-col rounded w-[300px] gap-3">
          <h2 className="font-bold">Cart Total</h2>
          <span className="flex justify-between border-b">
            <p>Subtotal: </p>
            <p>${(subtotal).toFixed(2)}</p>
          </span>
          <span className="flex justify-between border-b">
            <p>Shipping: </p>
            <p>${shipping === 0 ? "Free" : `$${shipping}`}</p>
          </span>

          <span className="flex justify-between border-b">
            <p>Total: </p>
            <p>${(subtotal + shipping).toFixed(2)}</p>
          </span>
          <Link to="/checkout">
          <button className="bg-red-500 text-white px-4 py-2 rounded mt-2">
            Proceed to checkout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
