import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ItemCard from "./ItemCard";
import Cart from "../components/Cart";
import { useCart } from "../helper/CartContext";

const Home = () => {
  const {cart, setCart} = useCart();
  const [products, setProducts] = useState([])
  // const [cart, setCart] = useState([]);

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
    const existingItem = cart.find(cartItem => cartItem.id === product.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  useEffect(()=>{
    fetchProducts()
  },[cart]);

  return (
    <div className="">

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
            imageUrl={product?.imageUrl} 
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
