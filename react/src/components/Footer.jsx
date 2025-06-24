import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-300">
            Discover delicious recipes from around the world. Powered by DummyJSON Recipes API.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Recipes</a></li>
            <li><a href="#" className="hover:text-white">Categories</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-sm text-gray-300">Email: support@recipesite.com</p>
          <p className="text-sm text-gray-300">Phone: +123 456 7890</p>
          <p className="text-sm text-gray-300">Location: Food Street, Flavor Town</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
