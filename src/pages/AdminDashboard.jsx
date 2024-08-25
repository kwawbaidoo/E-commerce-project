import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AllProduct from "../pages/AllProduct";
import OrderList from "../pages/OrderList";
import Sidebar from "../dashboard/Sidebar";

const AdminDashboard = () => {
  const [activeContent, setActiveContent] = useState("dashboard");
  const [userInitials, setUserInitials] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fullName = localStorage.getItem("user");

    if (fullName) {
      setUserName(fullName);
      const initials = fullName
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("");
      setUserInitials(initials);
    } else {
      console.error("User data missing in localStorage");
      toast.error("User data missing. Please log in again.");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logout successful");
    navigate("/");
    console.log("Logout");
  };

  const renderContent = () => {
    switch (activeContent) {
      case "allproducts":
        return (
          <div className="p-4">
            <AllProduct />
          </div>
        );
      case "orderlist":
        return (
          <div className="p-4">
            <OrderList />
          </div>
        );
      default:
        return (
          <div className="p-3">
            <Dashboard />
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        activeContent={activeContent}
        onSidebarClick={setActiveContent}
        userInitials={userInitials}
        userName={userName}
      />

      <div className="flex-1 flex flex-col">
        {/* Main Content */}
        <main className="flex-1 h-screen">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
