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
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
        console.log(data);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
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

// Function to submit cart items to the backend
async function submitCart() {
  const token = localStorage.getItem('token');
  
  try {
    const response = await axios.post(
      'http://localhost:8000/api/cart', 
      { items: cart },
      { headers: { Authorization: `Bearer ${token}` } } // Include token in headers
    );

    console.log('Cart submitted successfully:', response.data);
    // Optionally, handle the response or clear the cart
    setCart([]);
  } catch (error) {
    console.error('Error submitting cart:', error);
    // Handle the error as needed
  }}


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
    if (!fullName) {
      return "";
    }
    const nameParts = fullName.split(" ");
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
              image={`http://localhost:8000/storage/${product.image}`}
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
