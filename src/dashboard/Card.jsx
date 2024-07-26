import React from 'react';

const Card = ({ title, amount, comparison,bgColor }) => {
  return (
    <div className={`p-4 shadow rounded ${bgColor}`}>
      <h3>{title}</h3>
      <p>₹{amount}</p>
      <p>{comparison}% compared to Oct 2023</p>
    </div>
  );
};

export default Card;
