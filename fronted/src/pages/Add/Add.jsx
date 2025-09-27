import React, { useContext, useState } from 'react';
import { FoodContext } from '../../context/FoodContext';
import { categoryItem } from '../../assets/assets';
import './FoodCollection.css';

const FoodCollection = () => {
  const [category, setCategory] = useState("All");
  const { products, addToSaved } = useContext(FoodContext);

  const filteredProducts = category === "All"
    ? products
    : products.filter((item) => item.category === category);

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
          {filteredProducts.length === 0 ? (
            <p>No recipes found for this category.</p>
          ) : (
            filteredProducts.map((item, index) => (
              <div className='product_save' key={index}>
                <div className="product-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p><strong>Category:</strong> {item.category}</p>
                <p><strong>Ingredients:</strong> {item.ingredients}</p>
                <p><strong>Instructions:</strong> {item.instructions}</p>
                <button
                  className="add_to_save"
                  onClick={() => addToSaved(item._id)} // or item.id
                >
                  Add To Save
                </button>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default FoodCollection;
