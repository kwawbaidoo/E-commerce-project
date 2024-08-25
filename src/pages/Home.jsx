import React from "react";
import Hero from "../components/Hero";
import ItemCard from "./ItemCard";
import { useProduct } from "../helper/ProductsContext";
import { useCart } from "../helper/CartContext";
import { useSearch } from "../helper/SearchContext";

const Home = () => {
  const { cart, setCart } = useCart();
  const { products } = useProduct();
  const { searchQuery } = useSearch();

  // Filter products based on the search query
  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle adding a product to the cart
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
    <div>
      <Hero />
      <div className="mt-72 flex gap-5 flex-wrap align-items-center justify-center">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((product) => (
            <ItemCard
              key={product.id}
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
