import React, { useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import FoodCollection from '../../components/FoodCollection/FoodCollection';

const Home = () => {
  useEffect(() => {
    console.log("✅ Navigated to Home component");
  }, []);

  return (
    <div>
      <Hero />
      <FoodCollection />
    </div>
  );
};

export default Home;
