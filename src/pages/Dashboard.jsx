import React from "react";
import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";
import StatsCard from "../dashboard/Card";
import SaleGraph from "../dashboard/Graph";
import RecentOrders from "../dashboard/RecentOrders";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconUsersGroup } from "@tabler/icons-react";
import Table from "../dashboard/Table";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const columns = [
    {
      id: "orderID",
      name: "OrderID",
      selector: (row) => row.order,
    },
    {
      id: "productName",
      name: "ProductName",
      selector: (row) => row.productName,
    },
    {
      id: "amount",
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      id: "status",
      name: "Status",
      selector: (row) => row.status,
    },
    {
      id: "date",
      name: "Date",
      selector: (row) => row.date,
    },
    {
      id: "customerName",
      name: "CustomerName",
      selector: (row) => row.customerName,
    },
  ];
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
    <div className="flex flex-col md:flex-row h-screen border bg-gray-100">
      <main className="w-full md:w-10/12 p-4">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
          <StatsCard
            title="Total Orders"
            GHS="GHS"
            amount="126,500"
            comparison="34.7"
            bgColor="bg-white"
            icon={<IconShoppingBag size="32" color="#FFFF" />}
          />
          <StatsCard
            title="Active Orders"
            amount="126,500"
            comparison="34.7"
            bgColor="bg-white"
          />
          <StatsCard
            title="Completed Orders"
            GHS="GHS"
            amount="126,500"
            comparison="34.7"
            bgColor="bg-white"
            icon={<IconShoppingBag size="32" color="#FFFF" />}
          />
          <StatsCard
            title="Customers"
            amount="500"
            comparison=""
            bgColor="bg-white"
            icon={<IconUsersGroup size="32" color="#FFFF" />}
          />
        </div>
        <SaleGraph />
        {/* <Table columns={columns} data={orders} title="Recent Order"/> */}
        <RecentOrders />
        {/* <BestSellers /> */}
      </main>
    </div>
  );
};

export default Dashboard;
