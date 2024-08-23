import React from "react";
import { PaystackButton } from "react-paystack";

const PaystackPayment = ({ email, amount, onSuccess, onClose }) => {
  const publicKey = "pk_test_8c53f3da06fe940fa2a4d8badae05f83e3e7d5ad"; // Replace with your Paystack public key

  const componentProps = {
    email,
    amount: amount * 100, // Paystack expects the amount in kobo, so multiply by 100
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Email",
          variable_name: "email",
          value: email,
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (response) => {
      console.log(response);
      onSuccess(response); // Trigger the success function passed as a prop
    },
    onClose: () => {
      console.log("Payment closed");
      onClose(); // Trigger the close function passed as a prop
    },
  };

  return <PaystackButton {...componentProps} />;
};

export default PaystackPayment;
