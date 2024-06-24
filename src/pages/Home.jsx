import React from "react";
import BestSellingMonth from "../components/BestSellingMonth";
import Category from "../components/Category";
import Flashsales from "../components/Flashsales";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
const Home = () => {
  return (
    <div>
      <Hero />
      <Flashsales />
      <Category />
      <BestSellingMonth />
    </div>
  );
};

export default Home;
