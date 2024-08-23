import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ItemCard from "./ItemCard";
import Cart from "../components/Cart";
import { useProduct } from "../helper/ProductsContext";
import { useCart } from "../helper/CartContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { cart, setCart } = useCart();
  const { products } = useProduct();

  // useEffect(() => {
  //   fetchProducts();
  // }, []); 

  // function fetchProducts() {
  //   fetch("http://localhost:3020/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Fetched products:", data); 
  //       setProducts(data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching products:", err);
  //     });
  // }

  // useEffect(() => {
  //   console.log("Updated products state:", products); 
  // }, [products]); 

  function addToCart(product) {
    const existingItem = cart.find((cartItem) => cartItem.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
  }



  return (
    <div className="">
      <div className="relative border bg-black">
        {/* <LoadingOverlay /> */}
      </div>
      <Hero />

      <div className="mt-72 flex gap-5 flex-wrap align-items-center justify-center">
        {products?.length > 0 ? (
          products?.map((product) => (
         
            <ItemCard 
              id={product.id}
              name={product.name} 
              price={product.price} 
              imageUrl={product.imageUrl} 
              brand={product.brand}
              addToCart={() => addToCart(product)}
              
            />
          
          ))
        ) : (
          <p>No products available.</p> 
        )}
      </div>
    </div>
  );
};

export default Home;
