import React, {useState, useEffect } from "react";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    try {
      const response = await fetch("http://localhost:8000/api/orders");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setOrders(data); // Assuming `setOrders` is a state setter function for storing orders
    } catch (err) {
      console.error('Error fetching orders:', err);
    }
  }

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <div className="bg-white p-4 shadow rounded my-4">
      <h3 className="p-3 border ">Recent Orders</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="">
          {orders?.map((order, key) => (
            <tr key={key} className="border text-center hover:bg-slate-400">
              <td className="mt-2">{order.id}</td>
              <td className="mt-2">{order.product_name}</td>
              <td className="mt-2">{order.created_at}</td>
              <td className="mt-2">{order.user_name}</td>
              <td className="mt-2">{order.status}</td>
              <td className="mt-2">GHS {order.total_amount}</td>
            </tr>
          ))}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
