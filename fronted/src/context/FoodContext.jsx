import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { product } from '../assets/assets'; // Correct import path

export const FoodContext = createContext();

const backendUrl = 'http://localhost:4000';

const FoodContextProvider = ({ children }) => {
  const [products, setProducts] = useState(product); // initial dummy data or empty array
  const [savedItems, setSavedItems] = useState({});

  const [loading, setLoading] = useState(false);  // Loading state for fetching products
  const [error, setError] = useState(null);       // Error state for fetching products
  
  // Token state and setter (for login)
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Fetch products from backend API
  const getProductsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      console.log(response.data);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        setError("Failed to load products");
        toast.error("Failed to load products");
      }
    } catch (error) {
      setError("Failed to fetch products from server.");
      toast.error("Failed to fetch products from server.");
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load products once when component mounts
  useEffect(() => {
    getProductsData();
  }, []);

  // Save token to localStorage for persistence
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  // Add item to saved only if user is logged in
  const addToSaved = (itemId) => {
    if (!token) {
      toast.error("Please log in to add items");
      return;
    }
    const updatedSaved = { ...savedItems };
    updatedSaved[itemId] = (updatedSaved[itemId] || 0) + 1;
    setSavedItems(updatedSaved);

    console.log(`${itemId} added to saved`);
    toast.success("Added to Saved");
  };

  // Get total count of saved items
  const getSavedCount = () => {
    return Object.values(savedItems).reduce((total, quantity) => total + quantity, 0);
  };

  // Update quantity of saved item
  const updateQuantity = (itemId, quantity) => {
    const updatedSaved = { ...savedItems };
    updatedSaved[itemId] = quantity;
    setSavedItems(updatedSaved);
  };

  // Logout function
  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
    toast.success("Logged out successfully");
  };

  return (
    <FoodContext.Provider
      value={{
        products,
        loading,        // Provide loading state
        error,          // Provide error state
        addToSaved,
        getSavedCount,
        savedItems,
        updateQuantity,
        token,          // Provide token
        setToken,       // Allow login to update token
        logout,         // Logout function
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
