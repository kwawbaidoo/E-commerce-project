import React from 'react';

const RecentOrders = () => {
  return (
    <div className="bg-white p-4 shadow rounded my-4">
      <h3>Recent Orders</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem Ipsum</td>
            <td>#25426</td>
            <td>Nov 8th, 2023</td>
            <td>Kavin</td>
            <td>Delivered</td>
            <td>₹200.00</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
