import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Home &gt; Dashboard</p>
      </div>
      <div>
        <button className="bg-gray-200 p-2 rounded">Admin</button>
      </div>
    </div>
  );
};

export default Header;
