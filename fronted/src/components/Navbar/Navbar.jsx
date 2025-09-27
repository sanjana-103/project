import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSave, BiUser } from "react-icons/bi";
import { FaCentos } from "react-icons/fa";
import "./Navbar.css";
import { FoodContext } from '../../context/FoodContext';

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // <-- add search term state
  const navigate = useNavigate();

  const { getSavedCount, logout, token } = useContext(FoodContext);

  const handleNavigation = (path) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(path);
    }, 2000);
  };

  const handleLogout = () => {
    logout();         // Call logout from context (clears token, localStorage)
    navigate('/login'); // Redirect user after logout
  };

  // Add search handler
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Navigate to search results page with query param
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // Optional: handle pressing Enter key in search input
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      {loading && (
        <div className='loader-container'>
          <div className="loader">
            <FaCentos className="loader-icon" />
          </div>
        </div>
      )}
      <nav className="navbar">
        <div>
          <Link to="/"><h2>Recipes</h2></Link>
        </div>

        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for the Recipes..."
            value={searchTerm}                    // controlled input value
            onChange={(e) => setSearchTerm(e.target.value)}  // update state on change
            onKeyDown={handleKeyDown}             // listen for Enter key
          />
          <button 
            className='search-btn' 
            onClick={handleSearch}                // search on button click
            disabled={searchTerm.trim() === ''}  // disable button if input empty
          >
            SEARCH
          </button>
        </div>

        <div className="icons">
          <div className="Profile-icon">
            <BiUser className="icon" />
            <div className="dropdown-menu">
              {!token && <Link to="/login"><p className='dropdown-item'>Login/Sign Up</p></Link>}
              <Link to="/saved"><p className='dropdown-item'>Saved</p></Link>
              {token && (
                <p 
                  className='dropdown-item' 
                  style={{ cursor: 'pointer' }} 
                  onClick={handleLogout}
                >
                  Logout
                </p>
              )}
            </div>
          </div>

          <div className="saved-icon">
            <BiSave className="icon" />
            <span className='save-qyt'>{getSavedCount()}</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
