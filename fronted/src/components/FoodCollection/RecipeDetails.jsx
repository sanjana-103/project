import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import "./RecipeDetails.css";

function getYouTubeVideoId(url) {
  if (!url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useContext(FoodContext);

  const recipe = products.find((item) => item._id === id);

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  console.log("Video URL:", recipe.videoLink);

  const videoId = getYouTubeVideoId(recipe.videoLink);
  console.log("Extracted video ID:", videoId);

  return (
    <div className="recipe-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <div className="recipe-details">
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />

        <div className="recipe-info">
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>

          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>
        </div>

        {videoId ? (
          <div className="video-container" style={{ marginTop: "20px" }}>
            <h3>Recipe Video:</h3>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Recipe Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <p>No video available for this recipe.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
