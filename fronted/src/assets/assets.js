import food1 from './rice2.png'
import food2 from './pizza3.png'
import food3 from './noodles1.png'
import food4 from './drink1.jpg'
import food5 from './chiken2.png'
import food6 from './pasta1.png'
import food7 from './pizza2.png'
import food8 from './noodles2.png'
import food9 from './rice3.png'
import food10 from './pizza3.png'
import food11 from './drink2.png'
import food12 from './pasta2.png'
import food13 from './chicken.png'
import food14 from './pizza2.png'

import stripe_logo from './stripe_logo.png'

export const categoryItem = [
  { category_title: "All" },
  { category_title: "Spaghetti" },
  { category_title: "Pizza" },
  { category_title: "Rice" },
  { category_title: "Noodles" },
  { category_title: "Chicken" },
  { category_title: "Drinks" }
]

export const assets = {
  stripe_logo,
}

export const product = [
  {
    _id: "a",
    name: "Special Fried Rice With Chicken",
    image: food1,
    category: "Rice",
    ingredients: ["Rice", "Chicken", "Carrots", "Peas", "Soy sauce"],
    instructions: "Boil rice, stir-fry with vegetables and cooked chicken, season with soy sauce.",
    description: "Delicious fried rice with vegetables and chicken.",
    date: 1716634345448,
  },
  {
    _id: "ab",
    name: "Freshly Baked Pepperoni Pizza",
    image: food2,
    category: "Pizza",
    ingredients: ["Pizza dough", "Tomato sauce", "Cheese", "Pepperoni"],
    instructions: "Spread sauce on dough, top with cheese and pepperoni, bake until golden brown.",
    description: "Classic pepperoni pizza with crispy crust.",
    date: 1716621345448,
  },
  {
    _id: "ac",
    name: "Delicious Stir Fry Veggie Noodles",
    image: food3,
    category: "Noodles",
    ingredients: ["Noodles", "Bell peppers", "Cabbage", "Carrot", "Soy sauce"],
    instructions: "Boil noodles and stir-fry with chopped veggies and soy sauce.",
    description: "Flavor-packed noodles with fresh vegetables.",
    date: 1716234545448,
  },
  {
    _id: "ad",
    name: "Cup of Tequila Sunrise Cocktail",
    image: food4,
    category: "Drinks",
    ingredients: ["Tequila", "Orange juice", "Grenadine", "Ice"],
    instructions: "Pour tequila and orange juice over ice, add grenadine for a sunrise effect.",
    description: "Refreshing cocktail with vibrant colors.",
    date: 1716621345448,
  },
  {
    _id: "ae",
    name: "Grilled Spicy Boneless Chicken",
    image: food5,
    category: "Chicken",
    ingredients: ["Chicken breast", "Chili powder", "Garlic", "Lemon juice", "Salt"],
    instructions: "Marinate chicken, grill on medium heat until cooked through.",
    description: "Spicy grilled chicken perfect for protein lovers.",
    date: 1716622345448,
  },
  {
    _id: "af",
    name: "Spaghetti With Shrimps and Tomato Sauce",
    image: food6,
    category: "Spaghetti",
    ingredients: ["Spaghetti", "Shrimps", "Tomato sauce", "Garlic", "Basil"],
    instructions: "Cook spaghetti, sauté shrimps, mix with tomato sauce and herbs.",
    description: "Seafood spaghetti in rich tomato sauce.",
    date: 1716623423448,
  },
  {
    _id: "ag",
    name: "Veggie Pizza With Cheese and Mushroom",
    image: food7,
    category: "Pizza",
    ingredients: ["Pizza dough", "Cheese", "Mushrooms", "Onions", "Bell peppers"],
    instructions: "Top dough with sauce, cheese, and vegetables; bake until golden.",
    description: "Loaded vegetarian pizza with fresh toppings.",
    date: 1716621542448,
  },
  {
    _id: "ah",
    name: "Noodles With Mushroom, Pepper and Peas",
    image: food8,
    category: "Noodles",
    ingredients: ["Noodles", "Mushroom", "Bell pepper", "Green peas", "Soy sauce"],
    instructions: "Boil noodles, stir-fry vegetables, and mix with soy sauce.",
    description: "Tasty vegetarian noodles with a mix of veggies.",
    date: 1716622345448,
  },
  {
    _id: "ai",
    name: "Rich Stir Native Fried Rice",
    image: food9,
    category: "Rice",
    ingredients: ["Rice", "Mixed spices", "Vegetables", "Oil", "Chicken stock"],
    instructions: "Cook rice in chicken stock, then stir-fry with spices and veggies.",
    description: "Traditional-style fried rice with rich flavor.",
    date: 1716621235448,
  },
  {
    _id: "aj",
    name: "Newly Baked Peppered Pizza",
    image: food10,
    category: "Pizza",
    ingredients: ["Pizza base", "Pepper sauce", "Mozzarella", "Spices"],
    instructions: "Spread pepper sauce, add cheese and toppings, bake in oven.",
    description: "Boldly flavored peppery pizza.",
    date: 1716622235448,
  },
  {
    _id: "ak",
    name: "Mojito Cocktail With Lemon Ice Cubes",
    image: food11,
    category: "Drinks",
    ingredients: ["Mint leaves", "Lime", "Sugar", "Soda water", "Ice cubes"],
    instructions: "Crush mint with lime and sugar, top with soda and ice.",
    description: "Cool minty mojito with citrus notes.",
    date: 1716623345448,
  },
  {
    _id: "al",
    name: "Stir Fried Delicious Pasta With Olive",
    image: food12,
    category: "Spaghetti",
    ingredients: ["Pasta", "Olive oil", "Garlic", "Olives", "Tomatoes"],
    instructions: "Cook pasta, stir-fry with olive oil, garlic and sliced olives.",
    description: "Light and flavorful olive pasta.",
    date: 1716624445448,
  },
  {
    _id: "am",
    name: "Crunchy Chicken Chips With Sauce",
    image: food13,
    category: "Chicken",
    ingredients: ["Chicken strips", "Bread crumbs", "Oil", "BBQ sauce"],
    instructions: "Bread and fry chicken strips, serve with sauce.",
    description: "Crispy chicken strips with dipping sauce.",
    date: 1716625545448,
  },
  {
    _id: "an",
    name: "Boy Casual Slim Fit Polo Shirt",
    image: food14,
    category: "Kids",
    ingredients: ["Cotton", "Thread", "Buttons"], // Just keeping for format, since it's not food
    instructions: "Wear it with jeans or shorts.",
    description: "Stylish polo shirt for kids (Not a food item).",
    date: 1716626645448,
  },
]
