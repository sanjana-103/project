import React, { useContext, useState } from 'react';
import SearchBar from '../Sidebar/Sidebar';
import { FoodContext } from '../../context/FoodContext';
import { categoryItem } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

import './FoodCollection.css';

const FoodCollection = () => {
  const [category, setCategory] = useState("All");
  const { products, addToSaved } = useContext(FoodContext);
  const navigate = useNavigate();

  const filteredProducts = category === "All"
    ? products
    : products.filter((item) => item.category === category);

  const goToDetails = (id) => {
    navigate(`/recipe/${id}`); // Navigate to details page with recipe ID
  };

  return (
    <div className="food_container">
      <div className='header_section'>
        <h2>Discover Our Menu</h2>
        <hr className='divider' />
      </div>

      <div className='display_container'>
        <aside className='category_section'>
          <h1>Explore Our Categories</h1>
          <ul className="category_list">
            {categoryItem.map((item, index) => (
              <li
                key={index}
                onClick={() => setCategory(item.category_title)}
                className={category === item.category_title ? "active" : ""}
              >
                {item.category_title}
              </li>
            ))}
          </ul>
        </aside>

        <section className='grid_display'>
          {filteredProducts.length === 0 && <p>No recipes found in this category.</p>}

          {filteredProducts.map((item) => (
            <div className='product_save' key={item._id}>
              <div 
                className="product-image" 
                onClick={() => goToDetails(item._id)}
                style={{cursor: 'pointer'}}
                title="Click to view details"
              >
                <img src={item.image} alt={item.name} />
              </div>

              <button
                className="add_to_save"
                onClick={() => addToSaved(item._id)} 
              >
                Add To Save
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FoodCollection;
