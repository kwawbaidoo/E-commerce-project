import React, { useState, useEffect } from "react";
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
  const [paymentMethod, setPaymentMethod] = useState("cod"); 

  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")

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
    <div className="mt-48">
      <p className="text-xl ms-20 font-light mb-4">Checkout</p>
    <div className="p-4 flex  gap-14 items-center justify-center">
      
      <form onSubmit={handleSubmit} className="w-full flex gap-16 max-w-6xl ">
        <div className="bg-white p-6 rounded w-full shadow-md">
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

      {/* <PaymentForm/> */}
    
    </div>
    </div>
  );
};

export default Checkout;
