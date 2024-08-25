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
  
  const [cardsData, setCardsData] = useState({
    totalOrders: '0',
    activeOrders: '0',
    completedOrders: '0',
    totalUsers: '0',
  });

  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/getCards');
        const data = await response.json();
        setCardsData({
          totalOrders: data.total_orders || '0',
          activeOrders: data.pending_orders || '0',
          completedOrders: data.completed_orders || '0',
          totalUsers: data.total_users || '0',
        });
      } catch (error) {
        console.error('Error fetching card data:', error);
      }
    };

    fetchCardsData();
  }, []);

  return (
<<<<<<< HEAD
    <div className="flex  flex-col md:flex-row h-screen  bg-gray-100">
      <main className="w-full w-full p-4">
=======
    <div className="flex flex-col md:flex-row h-screen border bg-gray-100">
      <main className="w-full md:w-10/12 p-4">
>>>>>>> main
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
          <StatsCard
            title="Total Orders"
            GHS="GHS"
            amount={cardsData.totalOrders}
            comparison="34.7"
            bgColor="bg-white"
            icon={<IconShoppingBag size="32" color="#FFFF" />}
          />
          <StatsCard
            title="Active Orders"
            amount={cardsData.activeOrders}
            comparison="34.7"
            bgColor="bg-white"
          />
          <StatsCard
            title="Completed Orders"
            GHS="GHS"
            amount={cardsData.completedOrders}
            comparison="34.7"
            bgColor="bg-white"
            icon={<IconShoppingBag size="32" color="#FFFF" />}
          />
          <StatsCard
            title="Customers"
            amount={cardsData.totalUsers}
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
