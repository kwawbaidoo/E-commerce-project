import React from 'react';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import StatsCard from '../dashboard/Card';
import SaleGraph from '../dashboard/Graph';
import RecentOrders from '../dashboard/RecentOrders';
import { IconShoppingBag } from '@tabler/icons-react';
import { IconUsersGroup } from '@tabler/icons-react';
// import BestSellers from '../dashboard/BestSellers';

const Dashboard = () => {
  return (
    <div className="flex mt-44 flex-col md:flex-row h-screen border bg-gray-100">
      <Sidebar />
      <main className="w-full md:w-10/12 p-4">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-4">
        <StatsCard title="Total Orders" GHS="GHS" amount="126,500" comparison="34.7" bgColor="bg-white" icon={<IconShoppingBag size="32" color="#FFFF"/>} />
          <StatsCard title="Active Orders" amount="126,500" comparison="34.7" bgColor="bg-white" />
          <StatsCard title="Completed Orders" GHS="GHS" amount="126,500" comparison="34.7" bgColor="bg-white" icon={<IconShoppingBag size="32" color="#FFFF"/>} />
          <StatsCard title="Customers" amount="500" comparison="" bgColor="bg-white" icon={<IconUsersGroup size="32" color="#FFFF"/>} />
        </div>
        <SaleGraph />
        <RecentOrders />
        {/* <BestSellers /> */}
      </main>
    </div>
  );
};

export default Dashboard;
