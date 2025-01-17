import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="container mx-auto p-6 pt-24">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Your Favorites</h1>
      
      {favorites.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="text-lg mb-4">You have no favorite products yet!</p>
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-md hover:shadow-lg transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {favorites.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 truncate">{product.title}</h3>
                <p className="text-emerald-500 font-bold mt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="text-teal-500 hover:text-teal-700 text-lg font-semibold transition"
        >
          &larr; Back to Products
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
