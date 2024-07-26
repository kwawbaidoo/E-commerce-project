import React, { useEffect, useState } from "react";
import BestSellingMonth from "../components/BestSellingMonth";
import Category from "../components/Category";
import Flashsales from "../components/Flashsales";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import LoadingOverlay from "../components/LoadingOverlay";
import ItemCard from "./ItemCard";

const Home = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  function fetchProducts() {
    fetch("http://localhost:3020/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function addToCart(product) {
    console.log(product);
    setCart((prev) => [...prev, product]);
  }

  useEffect(()=>{
    fetchProducts()
  },[cart]);

  return (
    <div className="">
      <Navigation cart={cart} />

      <div className="relative border bg-black">
        {/* <LoadingOverlay /> */}
      </div>
      <Hero />
      
      <div className="mt-72 flex gap-5 flex-wrap align-items-center justify-center">
        {
          products?.map((product,key)=>(
            <ItemCard 
            key={key} 
            name={product.name} 
            price={product.price} 
            image={product.imageUrl} 
            brand={product.brand}
            addToCart={()=>addToCart(product)}
            />
          ))
        }

      </div>
    </div>
  );
};

export default Home;
