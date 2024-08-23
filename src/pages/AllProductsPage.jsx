import { useState, useEffect } from "react";
import { useCart } from "../helper/CartContext";
import ItemCard from "./ItemCard";

const AllProductsPage = () => {
  const [ Products, setProducts ] = useState([]);
    console.log("hello"  + Products);
  const { cart, setCart } = useCart();


  useEffect(() => {
    fetchProducts();
  }, [Products]); 

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
    <div className="flex flex-wrap justify-center gap-5">
        {Products?.length > 0 ? (
          Products?.map((product, key) => (
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
          <p>No products available.</p> // Fallback message if products array is empty
        )}
        
    </div>
  );
};

export default AllProductsPage;
