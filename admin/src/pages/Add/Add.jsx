import React, { useState } from 'react';
import upload from "../../assets/upload.jpg";
import "./Add.css";
import axios from 'axios';
import { Backendurl } from "../../App";
import { toast } from 'react-toastify';

const Add = () => {
  const [image, setImage] = useState(null);
  const [recipeName, setRecipeName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !recipeName || !category || !ingredients || !instructions) {
      toast.error("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", recipeName);
    formData.append("category", category);
    formData.append("ingredients", ingredients);
    formData.append("instructions", instructions);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(`${Backendurl}/api/product/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Recipe added successfully!");
      // Reset form
      setImage(null);
      setRecipeName('');
      setCategory('');
      setIngredients('');
      setInstructions('');
    } catch (err) {
      console.error(err);
      toast.error("Error adding recipe");
    }
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <p className="form-label">Upload Image</p>
        <div className="image_upload_conatiner">
          <label htmlFor="image">
            <img
              src={!image ? upload : URL.createObjectURL(image)}
              alt="Preview"
              className="preview-img"
            />
            <input type="file" id="image" hidden onChange={handleImageChange} />
          </label>
        </div>
      </div>

      <div className="form-group">
        <p className="form-label">Recipe Name</p>
        <input
          type="text"
          className="form-input"
          placeholder="Enter Recipe Name"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <p className="form-label">Category</p>
        <input
          type="text"
          className="form-input"
          placeholder="Enter Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <p className="form-label">Ingredients</p>
        <textarea
          className="form-input"
          placeholder="List ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <p className="form-label">Instructions</p>
        <textarea
          className="form-input"
          placeholder="Describe preparation steps"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <button type="submit" className="form-button">Add Recipe</button>
      </div>
    </form>
  );
};

export default Add;
