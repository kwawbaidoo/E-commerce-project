import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ItemCard from "./ItemCard";
import Cart from "../components/Cart";
import { useProduct } from "../helper/ProductsContext";
import { useCart } from "../helper/CartContext";

const Home = () => {
  const { cart, setCart } = useCart();
  const [userInitials, setUserInitials] = useState("");
  const { products, setProducts } = useProduct([]);

  useEffect(() => {
    fetchProducts();
  }, []); // Fetch products only once on component mount

  function fetchProducts() {
    fetch("http://localhost:3020/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched products:", data); // Log the fetched data
        setProducts(data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }

  useEffect(() => {
    console.log("Updated products state:", products); // This will log the updated products state
  }, [products]); // This useEffect will run every time `products` is updated

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

  useEffect(() => {
    fetchProducts();
  }, [cart]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const profileImage = document.getElementById("profileImage");
    const signUp = document.getElementById("signUp");
    let userInitials = document.getElementById("userInitials");

    if (storedUser) {
      profileImage.style.display = "flex";
      signUp.style.display = "none";
      const initials = getUserInitials(storedUser);
      userInitials.innerText= initials;
    }
  }, []);

  function getUserInitials(fullName) {
    console.log(fullName);
    if (!fullName) {
      return "";
    }
    const nameParts = fullName.split(" ");
    console.log(nameParts);

    const initials = nameParts
      .map((word) => word.charAt(0).toUpperCase())
      .join("");

    return initials;
  }

  return (
    <div className="">
      <div className="relative border bg-black">
        {/* <LoadingOverlay /> */}
      </div>
      <Hero />

      <div className="mt-72 flex gap-5 flex-wrap align-items-center justify-center">
        {products?.length > 0 ? (
          products?.map((product, key) => (
            <ItemCard 
              key={key} 
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
