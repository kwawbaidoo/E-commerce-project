import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

const CategoryProducts = () => {
  const { category, subCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory(subCategory);
  }, [subCategory]);

  const fetchProductsByCategory = async (subCategory) => {
    try {
      const response = await fetch(`http://localhost:3020/products?subCategory=${subCategory}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  return (
    <div className="mt-72 flex gap-5 flex-wrap align-items-center justify-center">
      {products?.length > 0 ? (
        products.map((product, key) => (
          <ItemCard
            key={key}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            brand={product.brand}
          />
        ))
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
};

export default CategoryProducts;
