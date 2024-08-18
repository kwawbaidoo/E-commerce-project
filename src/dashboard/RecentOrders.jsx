import React, {useState, useEffect } from "react";

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  function fetchProducts() {
    fetch("http://localhost:3020/orders")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, [orders]);
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
              <td className="mt-2">{order.orderID}</td>
              <td className="mt-2">{order.productName}</td>
              <td className="mt-2">{order.date}</td>
              <td className="mt-2">{order.customerName}</td>
              <td className="mt-2">{order.status}</td>
              <td className="mt-2">GHS {order.amount}</td>
            </tr>
          ))}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
