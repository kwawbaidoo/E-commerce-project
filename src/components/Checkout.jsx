import React, { useState } from "react";
import { useCart } from "../helper/CartContext"; // Import the CartContext
import PaymentForm from "./PaymentForm";

const Checkout = () => {
  const { cart } = useCart(); // Get cart from context
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default to Cash on Delivery

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if(setPaymentMethod === 'mobileMoney'){
        <PaymentForm/>
    }
    // Handle form submission, e.g., send billing details and cart to the server
    console.log("Billing Details:", billingDetails);
    console.log("Payment Method:", paymentMethod);
    console.log("Cart:", cart);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0; // Assuming free shipping
  const total = subtotal + shipping;
 

  return (
    <div>
    <div className="p-4  mt-72 flex flex-col gap-14 items-center">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-5xl ">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={billingDetails.name}
              onChange={handleBillingChange}
              className="border px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingDetails.address}
              onChange={handleBillingChange}
              className="border px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingDetails.city}
              onChange={handleBillingChange}
              className="border px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={billingDetails.state}
              onChange={handleBillingChange}
              className="border px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={billingDetails.zip}
              onChange={handleBillingChange}
              className="border px-4 py-2 rounded"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={billingDetails.country}
              onChange={handleBillingChange}
              className="border px-4 py-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={billingDetails.phone}
              onChange={handleBillingChange}
              className="border px-4 py-2 rounded"
              required
            />
          </div>
        </div>

        <section className="flex mt-14 h-full justify-between">
          <div className="bg-white w-72 p-6 mt-6 flex flex-col rounded shadow-md">
            <h3 className="text-xl font-semibold flex gap-2 mb-4 w-full ">
              Payment{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.04 13.55c-.42.41-.66 1-.6 1.63.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19c0 2.07-1.69 3.76-3.76 3.76H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06a3.999 3.999 0 0 0-6.5-3.12v-4.37c0-2.07 1.69-3.76 3.76-3.76h11.48c2.07 0 3.76 1.69 3.76 3.76v1.44h-2.02c-.56 0-1.07.22-1.44.6Z"
                    stroke="#FF8A65"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2.5 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8M22.559 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6h2.08c.56.02 1 .47 1 1.02ZM7 12h7"
                    stroke="#FF8A65"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 1 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 9 19ZM6.492 18.98h-2.98M5 17.52v2.99"
                    stroke="#FF8A65"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>{" "}
              Method
            </h3>
            <div className="flex justify-center align-items-center flex-col h-full gap-2">
              <label className="bg-red-100 w-48 p-2 rounded-md flex justify-center cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentChange}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <br />
             
                    <label className="w-48 bg-blue-100 cursor-pointer p-2 rounded-md">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobileMoney"
                      checked={paymentMethod === "mobileMoney"}
                      onChange={handlePaymentChange}
                      className="mr-2"
                      
                    />
                    Mobile Money
                  </label>
            
             
            </div>
          </div>
        
          <div className="bg-white w-96 p-6 mt-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>
                ${shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between mb-4 font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="bg-customred text-white px-4 py-2 rounded"
            >
              Place Order
            </button>
          </div>
        </section>
      </form>

      <PaymentForm/>
    
    </div>
    </div>
  );
};

export default Checkout;
