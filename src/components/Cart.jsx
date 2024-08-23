import React, { useState, useEffect } from "react";
import { useCart } from '../helper/CartContext'; 
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
  const { cart, setCart } = useCart(); 
  const navigate = useNavigate();

  if (!Array.isArray(cart)) {
    console.error('Cart is not an array');
    return <div className="mt-60">Invalid cart data</div>; 
  }

  const handleQuantityChange = (id, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const profileImage = document.getElementById("profileImage");
    const signUp = document.getElementById("signUp");
    let userInitials = document.getElementById("userInitials");

    if (storedUser) {
      profileImage.style.display = "flex";
      signUp.style.display = "none";
      const initials = getUserInitials(storedUser);
      userInitials.innerText= initials;
    }
    else{
      navigate("/login");
      toast.error("Please Login to have access");
    }
  }, []);

  function getUserInitials(fullName) {
    if (!fullName) {
      return "";
    }
    const nameParts = fullName.split(" ");

    const initials = nameParts
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    return initials;
  }

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 0; // Assuming free shipping

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');

      if (!token) throw new Error('No authentication token found');

      const response = await fetch('http://localhost:8000/api/orders', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: token.id, // Extract user ID from token
          total_amount: subtotal + shipping,
          order_items: cart.map(item => ({
            product_id: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        }),
      });
      console.log(response);

      if (!response.ok) {
        // Check if response is HTML (error page)
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('text/html')) {
          throw new Error('Error page returned from server');
        }
        throw new Error('Failed to place order');
      }

      const result = await response.json();
      console.log('Order placed successfully:', result);
      toast.success('Order placed successfully');
      setCart([]); // Clear the cart after successful order
      navigate('/checkout');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order');

    }
  };

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = decodeURIComponent(atob(base64Url).replace(/\+/g, ' '));
      return JSON.parse(base64);
    } catch (error) {
      return {};
    }
  };

  return (
    <div className="p-4 mt-60 flex flex-col gap-10 items-center">
      <div className="overflow-x-auto w-[1170px]">
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
            {cart.map((item) => (
              <tr key={item.id}>
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
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between w-[1170px]">
        <Link to="/">
          <button className="bg-gray-200 px-4 py-2 rounded">
            Return To Shop
          </button>
        </Link>
        <button className="bg-gray-200 px-4 py-2 rounded" onClick={handleCheckout}>
          Update Cart
        </button>
      </div>

      <div className="flex justify-end w-[1170px]">
        <div className="mt-4 p-4 border flex flex-col rounded w-[300px] gap-3">
          <h2 className="font-bold">Cart Total</h2>
          <span className="flex justify-between border-b">
            <p>Subtotal: </p>
            <p>${subtotal}</p>
          </span>
          <span className="flex justify-between border-b">
            <p>Shipping: </p>
            <p>${shipping === 0 ? 'Free' : `$${shipping}`}</p>
          </span>
          <span className="flex justify-between border-b">
            <p>Total: </p>
            <p>${subtotal + shipping}</p>
          </span>
          <Link to="/checkout">
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-2" onClick={handleCheckout}>
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
