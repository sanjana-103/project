import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login";
import Saved from "./pages/Saved/Saved";
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RecipeDetails from "./components/FoodCollection/RecipeDetails";  // Recipe details page       // Import SearchResults page
import SearchResults from './components/Sidebar/SearchResults';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/search" element={<SearchResults />} />  {/* Added SearchResults route */}
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
