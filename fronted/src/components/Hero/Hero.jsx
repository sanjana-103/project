import React from 'react';
import pasta2 from "../../assets/pasta2.png";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="content">
          <h1 className="title-font">
            Enjoy your Delicious Meal
            <br />
            Discover Delicious Healthy Meal That Nourishes You
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, iure quaerat? Nihil voluptate velit nobis dolores provident
          </p>
          <div className="button-group">
            <button className="btn-primary">Explore Our Menu</button>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={pasta2} alt="Delicious Food" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
