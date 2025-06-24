import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold text-green-600">
          RecipeBook
        </div>

        <div className="space-x-6 hidden md:flex">
          <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Recipes</a>
          <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Categories</a>
          <a href="#" className="text-gray-700 hover:text-green-600 font-medium">About</a>
        </div>

        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search recipes..."
            className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
