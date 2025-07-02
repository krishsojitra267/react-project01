import React, { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (err) {
        console.error(err);
      }
    }
    fetchRecipes();
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={recipe.image}
              alt={recipe.name}
              
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">{recipe.name}</h2>
              <p className="text-sm text-gray-500">Cuisine: {recipe.cuisine}</p>
              <p className="text-sm text-gray-600 mt-1">Cooking Time: {recipe.cookTimeMinutes} mins</p>
              <p className="text-sm text-gray-500 mt-1">rating:{recipe.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
