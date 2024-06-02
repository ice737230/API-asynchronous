// Sample JSON data containing recipes
const recipes = [
  {
    "name": "Spaghetti Carbonara",
    "cuisine": "Italian",
    "dietary": ["Non-vegetarian"],
    "mealType": "Dinner",
    "ingredients": ["Spaghetti", "Eggs", "Parmesan cheese", "Bacon", "Black pepper"],
    "instructions": "Cook spaghetti. Fry bacon until crispy. Mix eggs and cheese. Combine all ingredients. Serve hot.",
    "cookingTime": "30 minutes",
    "servingSize": "4"
  },
  {
    "name": "Vegetable Stir-Fry",
    "cuisine": "Asian",
    "dietary": ["Vegetarian", "Vegan"],
    "mealType": "Lunch",
    "ingredients": ["Broccoli", "Carrots", "Bell peppers", "Onion", "Soy sauce", "Ginger", "Garlic"],
    "instructions": "Stir-fry vegetables in a pan with soy sauce, ginger, and garlic. Serve hot.",
    "cookingTime": "20 minutes",
    "servingSize": "2"
  },
  {
    "name": "Quinoa Salad",
    "cuisine": "Mediterranean",
    "dietary": ["Vegetarian", "Gluten-free"],
    "mealType": "Lunch",
    "ingredients": ["Quinoa", "Cucumber", "Tomato", "Red onion", "Olives", "Feta cheese", "Lemon juice", "Olive oil"],
    "instructions": "Cook quinoa. Chop vegetables. Mix all ingredients. Drizzle with lemon juice and olive oil. Serve chilled.",
    "cookingTime": "25 minutes",
    "servingSize": "4"
  }
];

// Function to generate a random recipe
function getRandomRecipe() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  return recipes[randomIndex];
}

// Function to display recipe details
function displayRecipe(recipe) {
  console.log("Name:", recipe.name);
  console.log("Cuisine:", recipe.cuisine);
  console.log("Dietary:", recipe.dietary.join(", "));
  console.log("Meal Type:", recipe.mealType);
  console.log("Ingredients:", recipe.ingredients.join(", "));
  console.log("Instructions:", recipe.instructions);
  console.log("Cooking Time:", recipe.cookingTime);
  console.log("Serving Size:", recipe.servingSize);
}

// Generate and display a random recipe
const randomRecipe = getRandomRecipe();
console.log("Random Recipe:");
displayRecipe(randomRecipe);
