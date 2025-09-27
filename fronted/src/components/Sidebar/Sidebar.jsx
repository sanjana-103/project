import React from 'react';
import './Sidebar.css';

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="searchbar-container">
      {/* Hidden label for accessibility */}
      <label htmlFor="search-input" className="sr-only">Search for recipes</label>
      
      <input
        id="search-input"
        type="text"
        placeholder="Search for recipes..."
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        className="searchbar-input"
        aria-label="Search for recipes"
      />
      <button
        className="searchbar-button"
        onClick={onSearch}
        disabled={!value.trim()}  // Disable if input is empty
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
