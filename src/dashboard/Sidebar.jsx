import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-full h-100 md:w-72 bg-gray-100 p-4">
      <h2 className="text-xl font-bold">ShopEasy</h2>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>All Products</li>
          <li>Order List</li>
         
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;