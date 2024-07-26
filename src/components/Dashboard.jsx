import React from 'react';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import StatsCard from '../dashboard/Card';
import SaleGraph from '../dashboard/Graph';
import RecentOrders from '../dashboard/RecentOrders';
// import BestSellers from '../dashboard/BestSellers';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <main className="w-full md:w-10/12 p-4">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
        <StatsCard title="Total Orders" amount="126,500" comparison="34.7" bgColor="bg-blue-100" />
          <StatsCard title="Active Orders" amount="126,500" comparison="34.7" bgColor="bg-green-100" />
          <StatsCard title="Completed Orders" amount="126,500" comparison="34.7" bgColor="bg-yellow-100" />
          <StatsCard title="Return Orders" amount="126,500" comparison="34.7" bgColor="bg-red-100" />
        </div>
        <SaleGraph />
        <RecentOrders />
        {/* <BestSellers /> */}
      </main>
    </div>
  );
};

export default Dashboard;
