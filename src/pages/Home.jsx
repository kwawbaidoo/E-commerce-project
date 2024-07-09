import React from "react";
import BestSellingMonth from "../components/BestSellingMonth";
import Category from "../components/Category";
import Flashsales from "../components/Flashsales";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import LoadingOverlay from "../components/LoadingOverlay";
const Home = () => {
  return (
    <div className="relative">
      <div>
        <LoadingOverlay />
      </div>
      <Hero />
      <Flashsales />
      <BestSellingMonth />
    </div>
  );
};

export default Home;
