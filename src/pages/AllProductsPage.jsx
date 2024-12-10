import { useState, useEffect } from "react";
import { useCart } from "../helper/CartContext";
import AllProductsCard from "./AllProductCard";

const AllProductsPage = () => {
  const [Products, setProducts] = useState([]);
  const { cart, setCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div
      className="flex flex-wrap scrollbar-hide h-screen overflow-y-auto justify-center gap-5"
      style={{
        scrollbarWidth: "none" /* Firefox */,
        msOverflowStyle: "none" /* IE and Edge */,
      }}
    >
      {Products?.length > 0 ? (
        Products?.map((product) => (
          <AllProductsCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={`http://localhost:8000/storage/${product.image}`}
            brand={product.brand}
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
      <style jsx>{`
        .relative::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </div>
  );
};

export default AllProductsPage;
