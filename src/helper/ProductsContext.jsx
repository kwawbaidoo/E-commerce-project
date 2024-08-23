import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ProductsContext = createContext();

// Create a provider component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', subCategory: '' });

  // Fetch products from an API with optional filters
  useEffect(() => {
    const fetchProducts = async (category = '', subCategory = '') => {
      try {
        let url = 'http://localhost:3020/products';

        if (category || subCategory) {
          url += `?${category ? `category=${category}` : ''}${
            subCategory ? `&subCategory=${subCategory}` : ''
          }`;
        }

        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched data:', data); // Check the structure of the fetched data

        // Assuming the data might be an object that contains an array
        const productsArray = Array.isArray(data) ? data : data.products || [];

        setProducts(productsArray);
      } catch (error) {
        console.error('Failed to fetch products', error);
        setProducts([]); // Set to an empty array in case of error
      }
    };

    fetchProducts(filters.category, filters.subCategory);
  }, [filters]);

  // Function to update filters
  const updateFilters = (category = '', subCategory = '') => {
    setFilters({ category, subCategory });
  };

  return (
    <ProductsContext.Provider value={{ products, updateFilters }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook to use the ProductsContext
export const useProduct = () => {
  return useContext(ProductsContext);
};
