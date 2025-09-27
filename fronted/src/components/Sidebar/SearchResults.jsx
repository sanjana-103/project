import React, { useContext, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FoodContext } from '../../context/FoodContext';
import './SearchResults.css';

const SearchResults = () => {
  const { products } = useContext(FoodContext);
  const location = useLocation();

  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Get query param value from URL
  const getQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('query') || '';
  };

  useEffect(() => {
    const query = getQuery().toLowerCase();

    if (query === '') {
      setFilteredRecipes([]);
      return;
    }

    // Filter recipes where name, category, ingredients, or instructions match the query
    const filtered = products.filter((recipe) => {
      const nameMatch = recipe.name.toLowerCase().includes(query);
      const categoryMatch = recipe.category.toLowerCase().includes(query);
      const ingredientsMatch = recipe.ingredients?.some(ing =>
        ing.toLowerCase().includes(query)
      );
      const instructionsMatch = recipe.instructions?.toLowerCase().includes(query);

      return nameMatch || categoryMatch || ingredientsMatch || instructionsMatch;
    });

    setFilteredRecipes(filtered);
  }, [location.search, products]);

  return (
    <div className="search-results-container">
      <h2>Search Results for "{getQuery()}"</h2>

      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul className="recipe-list">
          {filteredRecipes.map((recipe) => (
            <li className="recipe-item" key={recipe._id}>
              <Link to={`/recipe/${recipe._id}`} className="recipe-link">
                <h3>{recipe.name}</h3>
                <img
                  src={recipe.image}
                  alt={`Image of ${recipe.name}`}
                  className="recipe-image"
                  width={200}
                />
              </Link>
              <p><strong>Category:</strong> {recipe.category}</p>
              <p><strong>Ingredients:</strong></p>
              <ul>
                {recipe.ingredients?.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
              <p><strong>Instructions:</strong></p>
              <p>{recipe.instructions}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
