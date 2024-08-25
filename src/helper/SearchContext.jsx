import React, { createContext, useState, useContext } from 'react';

// Create a context for the search functionality
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the SearchContext
export const useSearch = () => useContext(SearchContext);
