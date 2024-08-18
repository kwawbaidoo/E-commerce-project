import React, { useState } from "react";

const PaymentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [provider, setProvider] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="flex  h-full justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full h-96">
        <h2 className="text-xl font-semibold mb-6">Mobile Money Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Enter your mobile money number and provider to start the payment
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="050 000 0000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <select
              id="provider"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            >
              <option value="" disabled>Select Provider</option>
              <option value="mtn">MTN</option>
              <option value="vodafone">Vodafone</option>
              <option value="airteltigo">AirtelTigo</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Confirm
          </button>
        </form>
        <p className="text-gray-600 text-xs mt-4">
          An additional E-levy fee of 1% may apply to this payment. <a href="#" className="text-blue-500">Learn more.</a>
        </p>
      </div>
    </div>
  );
};

export default PaymentForm;
