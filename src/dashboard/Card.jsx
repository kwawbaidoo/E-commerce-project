import React from 'react';

const Card = ({ title, amount, comparison,bgColor, icon,GHS }) => {
  return (
    <div className={`p-4 flex flex-col gap-5 shadow rounded ${bgColor}`}>
      <h3>{title}</h3>
      <p className='flex items-center gap-4'>
        <span className='bg-blue-950 w-14 h-14 rounded-md flex justify-center items-center'>{icon}</span>
        {GHS} {amount}</p>
      <p>{comparison}% compared to Oct 2023</p>
    </div>
  );
};

export default Card;
